import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommonService } from 'src/app/core/utilities/common.helper';
import { SystemMessage } from 'src/app/shared/configdata/system-message';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { PhieuNhapKhoMau, TrangThaiDuyetNhapKhoMau } from '../mau.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ApiService } from 'src/app/core/services/api.service';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { NhapKhoMauSharedComponent } from '../nhap-kho-mau-shared/nhap-kho-mau-shared.component';
import { Router } from '@angular/router';
import { NhapKhoMauInPhieuPopupComponent } from '../nhap-kho-mau-in-phieu-popup/nhap-kho-mau-in-phieu-popup.component';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { ConfirmComponent } from 'src/app/shared/component/dialogs/confirm/confirm.component';

@Component({
  selector: 'app-nhap-kho-mau-create',
  templateUrl: './nhap-kho-mau-create.component.html',
  styleUrls: ['./nhap-kho-mau-create.component.scss']
})
export class NhapKhoMauCreateComponent implements OnInit {

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
    private location: Location) { }

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

            this.apiService.post<string>("NhapKhoMau/XuLyTaoPhieuNhapKhoMau", phieuNhapKho).subscribe(res => {
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

  huy(){
    //this.router.navigate([this.baseRoute]);
    this.location.back();
  }
}
