import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';
import { MatDialog } from '@angular/material';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { KhongDuyetComponent } from '../khong-duyet-popup/khong-duyet.component';
import { PhieuXuatLinhKSNKPopupComponent } from '../phieu-xuat-linh-ksnk-popup/phieu-xuat-linh-ksnk-popup.component';
import { DuyetYeuCauLinhKSNK, TrangThaiDuyetYeuCauLinh } from '../duyet-yeu-cau-linh-ksnk.model';
import { DuyetYeuCauLinhKSNKBuSharedComponent } from '../duyet-yeu-cau-linh-ksnk-bu-shared/duyet-yeu-cau-linh-ksnk-bu-shared.component';
import { ApiService } from 'src/app/core/services/api.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { Location } from '@angular/common';

@Component({
  selector: 'app-duyet-yeu-cau-linh-ksnk-bu',
  templateUrl: './duyet-yeu-cau-linh-ksnk-bu.component.html',
  styleUrls: ['./duyet-yeu-cau-linh-ksnk-bu.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class DuyetYeuCauLinhKSNKBuComponent implements OnInit {

  loading: boolean = false;
  trangThai : TrangThaiDuyetYeuCauLinh;
  documentype: DocumentType;
  validationErrors: any;
  baseRoute: string = "/nhap-xuat/duoc-pham/duyet-yeu-cau-linh-ksnk";

  yeuCauLinhKSNK: DuyetYeuCauLinhKSNK = new DuyetYeuCauLinhKSNK();
  trangThaiDanhSach : any;
  loai: boolean  = false;
  @ViewChild(DuyetYeuCauLinhKSNKBuSharedComponent, { static: true }) shared: any;
  constructor(private dialog: MatDialog,private location: Location,
    private apiService: ApiService,
    private notificationService: NotificationService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.documentype = DocumentType.DuyetYeuCauLinhKSNK;
    let loai = this.route.snapshot.params.value;
    if (loai !== undefined && loai !== null) {
      this.loai = loai;
      this.yeuCauLinhKSNK.LoaiDuocPhamHayVatTu = this.loai;
    }
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
      data: { Title: "Xác nhận", Message: "Bạn có chắc chắn phê duyệt cho lần lĩnh bù vật tư này không?" }
    }).afterClosed().subscribe(result => {
      if (result === 'Yes') {
        this.yeuCauLinhKSNK = this.shared.getData();
        this.yeuCauLinhKSNK.LoaiDuocPhamHayVatTu = this.loai;
        this.apiService.post("YeuCauLinhKSNK/XuLyDuyetYeuCauLinhKSNKBu", this.yeuCauLinhKSNK)
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

  khongDuyet(){
    this.dialog.open(KhongDuyetComponent, {
      disableClose: false,
      width: '400px',
      data: { Title: "Xác nhận", Message: "Bạn có chắc từ chối duyệt cho lần lĩnh bù vật tư này không?" }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        this.yeuCauLinhKSNK = this.shared.getData();
        this.yeuCauLinhKSNK.LyDoKhongDuyet = result;
        
        this.yeuCauLinhKSNK.LoaiDuocPhamHayVatTu = this.loai;
        // xử lý ko duyệt
        this.apiService.post("YeuCauLinhKSNK/XuLyKhongDuyetYeuCauLinhKSNKBu", this.yeuCauLinhKSNK)
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
    this.router.navigate(['/nhap-xuat/ksnk/duyet-yeu-cau-linh-ksnk'],{ queryParams: { holdQuery:true}});
  }

  getTrangThaiYeuCau(event) {
    if (event != undefined && event != null) {
      this.trangThai = event;
    }
  }

  quayVeDanhSach(){
    this.location.back();
  }
}
