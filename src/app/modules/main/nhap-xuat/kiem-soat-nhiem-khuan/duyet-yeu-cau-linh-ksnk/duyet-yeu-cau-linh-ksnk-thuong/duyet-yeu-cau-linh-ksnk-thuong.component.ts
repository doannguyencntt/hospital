import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhongDuyetComponent } from '../khong-duyet-popup/khong-duyet.component';
import { PhieuXuatLinhKSNKPopupComponent } from '../phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component';
import { DuyetYeuCauLinhKSNK, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-ksnk.model';
import { DuyetYeuCauLinhKSNKThuongSharedComponent } from '../duyet-yeu-cau-linh-ksnk-thuong-shared/duyet-yeu-cau-linh-ksnk-thuong-shared.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiService } from 'src/app/core/services/api.service';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-duyet-yeu-cau-linh-ksnk-thuong',
  templateUrl: './duyet-yeu-cau-linh-ksnk-thuong.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-ksnk-thuong.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuyetYeuCauLinhKSNKThuongComponent implements OnInit {

  loading: boolean = false;

  isHideDuyet: boolean = false;
  trangThai : TrangThaiDuyetYeuCauLinh;
  documentype: DocumentType;
  baseRoute: string = "/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk";

  yeuCauLinhKSNK: DuyetYeuCauLinhKSNK = new DuyetYeuCauLinhKSNK();
  trangThaiDanhSach : any;
  @ViewChild(DuyetYeuCauLinhKSNKThuongSharedComponent, { static: true }) shared: any;

  validationErrors: any;
  constructor(private dialog: MatDialog,private location: Location,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.documentype = DocumentType.DuyetYeuCauLinhKSNK;
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
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh dược phẩm này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.yeuCauLinhKSNK = this.shared.getData();
        this.yeuCauLinhKSNK.DuyetYeuCauLinhVatTuChiTiets = this.yeuCauLinhKSNK.DuyetYeuCauLinhVatTuChiTiets.sort((a, b) => (a.Nhom > b.Nhom || a.Index > b.Index) ? 1 : -1)
        this.apiService.post("YeuCauLinhKSNK/XuLyDuyetYeuCauLinhKSNKThuong", this.yeuCauLinhKSNK)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
            if (resultData != undefined && resultData != null) {
              this.dialog.open(PhieuXuatLinhKSNKPopupComponent, {
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

  khongDuyet() {
    this.dialog.open(KhongDuyetComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh vật tư này không?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        this.yeuCauLinhKSNK = this.shared.getData();
        this.yeuCauLinhKSNK.LyDoKhongDuyet = result;

        // xử lý ko duyệt
        this.apiService.post("YeuCauLinhKSNK/XuLyKhongDuyetYeuCauLinhKSNKThuong", this.yeuCauLinhKSNK)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Không duyệt"]));
            this.quayVeDanhSach();
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

  cancel(){
    this.router.navigate(['/nhap-xuat/kiem-soat-nhiem-khuan/duyet-yeu-cau-linh-ksnk'],{ queryParams: { holdQuery:true}});
  }

  getTrangThaiYeuCau(event) {
    if (event != undefined && event != null) {
      this.trangThai = event;
    }
  }

  anHienButtonDuyet(event)
  {
    if(event)
    {
      this.isHideDuyet = true;
    }
    else
    {
      this.isHideDuyet = false;
    }
  }

  quayVeDanhSach(){
    this.location.back();
  }
}
