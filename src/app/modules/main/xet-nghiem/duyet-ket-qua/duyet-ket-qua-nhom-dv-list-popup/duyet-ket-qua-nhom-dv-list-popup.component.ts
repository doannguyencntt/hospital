import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { ApiError } from 'src/app/shared/models/api-error.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NhomDichVuDuyet, PhieuDuyetKetQua } from '../duyet-ket-qua.model';
import { LoadingComponent } from 'src/app/shared/component/dialogs/loading/loading.component';
import { DocumentType } from 'src/app/shared/enum/document-type.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { SecurityOperation } from 'src/app/shared/enum/security-operation.enum';
import { KetQuaXetNghiemMessage, SystemMessage } from 'src/app/shared/configdata/system-message';
import { DuyetKetQuaPhieuPopupComponent } from '../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component';
import { DuyetKetQuaInNhomDvListPopupComponent } from '../duyet-ket-qua-in-nhom-dv-list-popup/duyet-ket-qua-in-nhom-dv-list-popup.component';

@Component({
  selector: 'app-duyet-ket-qua-nhom-dv-list-popup',
  templateUrl: './duyet-ket-qua-nhom-dv-list-popup.component.html',
  styleUrls: ['./duyet-ket-qua-nhom-dv-list-popup.component.scss']
})
export class DuyetKetQuaNhomDvListPopupComponent implements OnInit {
  nhomDichVuDuyets: NhomDichVuDuyet[] = [];
  icClose = icClose;
  disabled: boolean = true;
  popupLoadingData: any;
  documentType = DocumentType.DuyetKetQuaXetNghiem;
  inPhieuDuyetKetQua: PhieuDuyetKetQua = new PhieuDuyetKetQua();
  validationErrors: any = null;
  constructor(
    private dialogRef: MatDialogRef<DuyetKetQuaNhomDvListPopupComponent>,
    private apiService: ApiService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private authService: AuthService,

  ) { }
  ngOnInit() {
    console.log(this.data)
    this.nhomDichVuDuyets = this.data.Model;
  }

  isCheck() {
    if (this.nhomDichVuDuyets.some(x => x.IsCheck)) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  okPrint() {
    this.dialogRef.close();
    this.print(this.data.PhienXetNghiemId, this.data.YeuCauTiepNhanId);
  }
  print(id: number, yeuCauTiepNhanId: number) {
    if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {

      this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
      this.inPhieuDuyetKetQua.Header = true;
      this.inPhieuDuyetKetQua.PhienXetNghiemId = id;
      this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
      if (this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds != []) {
        this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds = [];
      }
      this.nhomDichVuDuyets.forEach(element => {
        if (element.IsCheck) {
          this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds.push(element.NhomDichVuBenhVienId);
        }
      });
      this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
        arrHtml => {

          this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
            disableClose: false,
            width: '1000px',
            data: arrHtml
          }).afterClosed().subscribe(() => {
          });
          this.closePopupLoadingData();
        },
        (err: ApiError) => {
          if (err.Message !== 'Validation Failed') {
            this.notificationService.showError(err.Message);
          }
          this.closePopupLoadingData();
        });
    } else {
      this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    }
  }

  ok() {
    this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
    this.inPhieuDuyetKetQua.PhienXetNghiemId = this.data.PhienXetNghiemId;
    this.inPhieuDuyetKetQua.Id = this.data.PhienXetNghiemId;
    if (this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds != []) {
      this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds = [];
    }
    this.nhomDichVuDuyets.forEach(element => {
      if (element.IsCheck) {
        this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds.push(element.NhomDichVuBenhVienId);
      }
    });
    this.showPopupLoadingData();
    this.dialogRef.close();
    this.apiService.post<any>("XetNghiem/XemPhieuXetNghiem", this.inPhieuDuyetKetQua).subscribe(
      resData => {
        if (resData != undefined && resData != null && resData.length > 0) {

          this.closePopupLoadingData();
          this.dialog.open(DuyetKetQuaInNhomDvListPopupComponent, {
            disableClose: false,
            width: '1200px',
            data: resData[0].Html,
          }
          ).afterClosed().subscribe(() => {
            this.closePopupLoadingData();
          });
        }
      },
      (err: ApiError) => {
        this.validationErrors = err.ValidationErrors;
        if (err.Message != "Validation Failed") {
          this.notificationService.showError(err.Message);
        }
        this.closePopupLoadingData();
      }
    );
  }

  showPopupLoadingData() {
    if (this.popupLoadingData == null
      || this.popupLoadingData.openDialogs == null
      || (this.popupLoadingData.openDialogs != null && this.popupLoadingData.openDialogs.length === 0)) {
      this.popupLoadingData = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '200px',
        height: '90px',
        data: { Title: 'Đang tải dữ liệu...' },
      });
    }
  }

  closePopupLoadingData() {
    if (this.popupLoadingData) {
      this.popupLoadingData.close();
    }
  }


  close() {
    this.dialog.closeAll();
  }
}
