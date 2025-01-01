import { Component, OnInit, ViewChild } from '@angular/core';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { KhongDuyetPopupComponent } from '../khong-duyet-popup/khong-duyet-popup.component';
import { PhieuXuatLinhThuocPopupComponent } from '../phieu-xuat-linh-thuoc-popup/phieu-xuat-linh-thuoc-popup.component';
import { DuyetYeuCauLinhDuocPham, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-thuoc.model';
import { DuyetYeuCauLinhThuocTrucTiepSharedComponent } from '../duyet-yeu-cau-linh-thuoc-truc-tiep-shared/duyet-yeu-cau-linh-thuoc-truc-tiep-shared.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { Location } from '@angular/common';

@Component({
  selector: 'app-duyet-yeu-cau-linh-thuoc-truc-tiep',
  templateUrl: './duyet-yeu-cau-linh-thuoc-truc-tiep.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-thuoc-truc-tiep.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuyetYeuCauLinhThuocTrucTiepComponent implements OnInit {

  loading: boolean = false;
  trangThai : TrangThaiDuyetYeuCauLinh;
  documentype: DocumentType;
  validationErrors: any;
  baseRoute: string = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc";

  yeuCauLinhThuoc: DuyetYeuCauLinhDuocPham = new DuyetYeuCauLinhDuocPham();
  trangThaiDanhSach : any;
  @ViewChild(DuyetYeuCauLinhThuocTrucTiepSharedComponent, { static: true }) shared: any;
  constructor(private dialog: MatDialog,private location:Location,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.documentype = DocumentType.DuyetYeuCauLinhDuocPham;
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
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh trực tiếp dược phẩm này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.yeuCauLinhThuoc = this.shared.getData();
        this.apiService.post("YeuCauLinhDuocPham/XuLyDuyetYeuCauLinhDuocPhamTrucTiep", this.yeuCauLinhThuoc)
          .subscribe((resultData) => {
            this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt"]));
            if (resultData != undefined && resultData != null) {
              this.dialog.open(PhieuXuatLinhThuocPopupComponent, {
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
    this.dialog.open(KhongDuyetPopupComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh trực tiếp dược phẩm này không?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        this.yeuCauLinhThuoc = this.shared.getData();
        this.yeuCauLinhThuoc.LyDoKhongDuyet = result;

        // xử lý ko duyệt
        this.apiService.post("YeuCauLinhDuocPham/XuLyKhongDuyetYeuCauLinhDuocPhamTrucTiep", this.yeuCauLinhThuoc)
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
    this.router.navigate(['/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-thuoc'],{ queryParams: { holdQuery:true}});
    // this.quayVeDanhSach();
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
    this.yeuCauLinhThuoc = this.shared.getData();
    this.apiService.post("YeuCauLinhDuocPham/InYeuCauLinhDuocPhamTrucTiep?yeuCauLinhId=" + this.yeuCauLinhThuoc.Id + "&loaiPhieuLinh=" + 3)
      .subscribe((resultData) => {
        if (resultData != undefined && resultData != null) {
          this.dialog.open(PhieuXuatLinhThuocPopupComponent, {
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
