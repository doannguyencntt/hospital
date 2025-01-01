import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhongDuyetComponent } from '../khong-duyet-popup/khong-duyet.component';
import { PhieuXuatLinhVatTuPopupComponent } from '../phieu-xuat-linh-vat-tu-popup/phieu-xuat-linh-vat-tu-popup.component';
import { DuyetYeuCauLinhVatTu, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-vat-tu.model';
import { DuyetYeuCauLinhVatTuTrucTiepSharedComponent } from '../duyet-yeu-cau-linh-vat-tu-truc-tiep-shared/duyet-yeu-cau-linh-vat-tu-truc-tiep-shared.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Location } from '@angular/common';

@Component({
  selector: 'app-duyet-yeu-cau-linh-vat-tu-truc-tiep',
  templateUrl: './duyet-yeu-cau-linh-vat-tu-truc-tiep.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-vat-tu-truc-tiep.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuyetYeuCauLinhVatTuTrucTiepComponent implements OnInit {

  loading: boolean = false;
  trangThai : TrangThaiDuyetYeuCauLinh;
  documentype: DocumentType;
  validationErrors: any;
  baseRoute: string = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-vat-tu";

  yeuCauLinhVatTu: DuyetYeuCauLinhVatTu = new DuyetYeuCauLinhVatTu();
  trangThaiDanhSach : any;
  @ViewChild(DuyetYeuCauLinhVatTuTrucTiepSharedComponent, { static: true }) shared: any;
  constructor(private dialog: MatDialog,private location: Location,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.documentype = DocumentType.DuyetYeuCauLinhVatTu;
    this.route
    .queryParams
    .subscribe(v => {
        this.trangThaiDanhSach = v;
    });
  }

  duyet() {
    this.dialog.open(ConfirmComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh trực tiếp vật tư này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.yeuCauLinhVatTu = this.shared.getData();
        this.apiService.post("YeuCauLinhVatTu/XuLyDuyetYeuCauLinhVatTuTrucTiep", this.yeuCauLinhVatTu)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
            if (resultData != undefined && resultData != null) {
              this.dialog.open(PhieuXuatLinhVatTuPopupComponent, {
                disableClose: false,
                width: '1200px',
                data: resultData,
              }).afterClosed().subscribe(result => {
                this.quayVeDanhSach();
              });
            }
          },
            (err: ApiError) => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
      }
    });
  }

  khongDuyet(){
    this.dialog.open(KhongDuyetComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh trực tiếp vật tư này không?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        this.yeuCauLinhVatTu = this.shared.getData();
        this.yeuCauLinhVatTu.LyDoKhongDuyet = result;

        // xử lý ko duyệt
        this.apiService.post("YeuCauLinhVatTu/XuLyKhongDuyetYeuCauLinhVatTuTrucTiep", this.yeuCauLinhVatTu)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Không duyệt"]));
            this.quayVeDanhSach();
          },
            (err: ApiError) => {
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            });
      }
    });
  }

  cancel(){
    this.router.navigate(['/nhap-xuat/vat-tu/duyet-yeu-cau-linh-vat-tu'],{ queryParams: { holdQuery:true}});
    // this.location.back();
  }

  getTrangThaiYeuCau(event) {
    if (event != undefined && event != null) {
      this.trangThai = event;
    }
  }

  quayVeDanhSach(){
    this.location.back();
  }

  xemPhieuLinh() {
    this.yeuCauLinhVatTu = this.shared.getData();
    this.apiService.post("YeuCauLinhVatTu/InYeuCauLinhVatTuTrucTiep?yeuCauLinhId=" + this.yeuCauLinhVatTu.Id + "&loaiPhieuLinh=" + 3)
      .subscribe((resultData) => {
        if (resultData != undefined && resultData != null) {
          this.dialog.open(PhieuXuatLinhVatTuPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resultData,
          }).afterClosed().subscribe(result => {
          });
        }
      },
        (err: ApiError) => {
          if (err.Message != "Validation Failed") {
            this.notificationService.showError(err.Message);
          }
        });
  }
}
