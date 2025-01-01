import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { DuyetKetQuaPhieuPopupComponent } from '../duyet-ket-qua-phieu-popup/duyet-ket-qua-phieu-popup.component';
@Component({
  selector: 'app-duyet-ket-qua-in-nhom-dv-list-popup',
  templateUrl: './duyet-ket-qua-in-nhom-dv-list-popup.component.html',
  styleUrls: ['./duyet-ket-qua-in-nhom-dv-list-popup.component.scss']
})
export class DuyetKetQuaInNhomDvListPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  arrHtml: any[] = [];
  constructor(public sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DuyetKetQuaInNhomDvListPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  print() {
    this.dialogRef.close();
    if (this.arrHtml != []) {
      this.arrHtml = [];
    }
    this.arrHtml.push(this.data);
    this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
      disableClose: false,
      width: '1000px',
      data: this.arrHtml
    }).afterClosed().subscribe(() => {
    });
  }

  // print(id: number, yeuCauTiepNhanId: number) {
  //   if (this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
  //     
  //     this.inPhieuDuyetKetQua.HostingName = window.location.protocol + '//' + window.location.host;
  //     this.inPhieuDuyetKetQua.Header = true;
  //     this.inPhieuDuyetKetQua.PhienXetNghiemId = id;
  //     this.inPhieuDuyetKetQua.YeuCauTiepNhanId = yeuCauTiepNhanId;
  //     if (this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds != []) {
  //       this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds = [];
  //     }
  //     this.nhomDichVuDuyets.forEach(element => {
  //       if (element.IsCheck) {
  //         this.inPhieuDuyetKetQua.NhomDichVuBenhVienIds.push(element.NhomDichVuBenhVienId);
  //       }
  //     });
  //     this.apiService.post<Array<string>>('XetNghiem/GetAllHtmlPdfKetQuaXetNghiem', this.inPhieuDuyetKetQua).subscribe(
  //       arrHtml => {

  //         this.dialog.open(DuyetKetQuaPhieuPopupComponent, {
  //           disableClose: false,
  //           width: '1000px',
  //           data: arrHtml
  //         }).afterClosed().subscribe(() => {
  //         });
  //         this.closePopupLoadingData();
  //       },
  //       (err: ApiError) => {
  //         if (err.Message !== 'Validation Failed') {
  //           this.notificationService.showError(err.Message);
  //         }
  //         this.closePopupLoadingData();
  //       });
  //   } else {
  //     this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
  //   }
  // }

}
