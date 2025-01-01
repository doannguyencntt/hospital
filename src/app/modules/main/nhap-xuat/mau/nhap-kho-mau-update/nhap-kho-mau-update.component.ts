import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PhieuNhapKhoMau, TrangThaiDuyetNhapKhoMau } from '../mau.model';
import { NhapKhoMauInPhieuPopupComponent } from '../nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component';
import { NhapKhoMauSharedComponent } from '../nhap-kho-mau-shared/nhap-kho-mau-shared.component';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-nhap-kho-mau-update',
  templateUrl: './nhap-kho-mau-update.component.html',
  styleUrls: ['./nhap-kho-mau-update.component.scss']
})
export class NhapKhoMauUpdateComponent implements OnInit {

  documentype: DocumentType;
  loading: boolean = false;
  trangThai : TrangThaiDuyetNhapKhoMau;
  validationErrors: any;
  baseRoute: string = "/nhap-xuat/mau/nhap-kho";
  
  @ViewChild(NhapKhoMauSharedComponent, { static: true }) shared: any;
  constructor(private notificationService: NotificationService,
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router,
    private dialog: MatDialog,
    private location:Location) { }

  ngOnInit() {
    this.documentype = DocumentType.NhapKhoMau;
  }

  getTrangThaiYeuCau(event) {
    if (event != undefined && event != null) {
      this.trangThai = event;
    }
  }

  xuLyLuu(inPhieu: boolean = false) {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.Add)) {
      this.dialog
        .open(ConfirmComponent, {
          disableClose: false,
          width: "400px",
          data: {
            Title: "Xác nhận",
            Message: "Bạn có chắc chắn muốn lưu phiếu nhập máu này không?",
          },
        })
        .afterClosed()
        .subscribe((result) => {
          if (result == "Yes") {
            this.validationErrors = [];
            var phieuNhapKho = this.shared.getData();
            phieuNhapKho.InPhieu = inPhieu;

            this.apiService.put<string>("NhapKhoMau/XuLyCapNhatPhieuNhapKhoMau", phieuNhapKho).subscribe(res => {
              this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Lưu"]));
              if (inPhieu) {
                this.dialog.open(NhapKhoMauInPhieuPopupComponent, {
                  disableClose: false,
                  width: '1200px',
                  data: res,
                }).afterClosed().subscribe(result => {
                  this.huy();
                });
              }
              else {
                this.huy();
              }
            }, err => {
              this.validationErrors = err.ValidationErrors;
              if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
              }
            })
          }
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  xuLyInPhieu() {
    if (this.authService.hasPermission(this.documentype, SecurityOperation.View)) {
      var phieuNhapKho = this.shared.getData();
      this.apiService.get<any>("NhapKhoMau/XuLyInPhieuTruyenMau?phieuTruyenMauId=" + phieuNhapKho.Id).subscribe(res => {
        this.dialog.open(NhapKhoMauInPhieuPopupComponent, {
          disableClose: false,
          width: '1200px',
          data: res,
        }).afterClosed().subscribe(result => {
        });
      }, err => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
      })
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  huy(){
    //this.router.navigate([this.baseRoute]);
    this.location.back();
  }
}
