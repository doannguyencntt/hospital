import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import icClose from '@iconify/icons-ic/twotone-close';
import { DomSanitizer } from '@angular/platform-browser';
import { DuyetKetQuaPhieuNewPopupComponent } from '../duyet-ket-qua-phieu-new-popup/duyet-ket-qua-phieu-new-popup.component';
@Component({
  selector: 'app-duyet-ket-qua-in-nhom-dv-list-new-popup',
  templateUrl: './duyet-ket-qua-in-nhom-dv-list-new-popup.component.html',
  styleUrls: ['./duyet-ket-qua-in-nhom-dv-list-new-popup.component.scss']
})
export class DuyetKetQuaInNhomDvListNewPopupComponent implements OnInit {
  icClose = icClose;
  src: string = "";
  arrHtml: any[] = [];
  constructor(public sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DuyetKetQuaInNhomDvListNewPopupComponent>,
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
    this.dialog.open(DuyetKetQuaPhieuNewPopupComponent, {
      disableClose: false,
      width: '1000px',
      data: this.arrHtml
    }).afterClosed().subscribe(() => {
    });
  }

}
