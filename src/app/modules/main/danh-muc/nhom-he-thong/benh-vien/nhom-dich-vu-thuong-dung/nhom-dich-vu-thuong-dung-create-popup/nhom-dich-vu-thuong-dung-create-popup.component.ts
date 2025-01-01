import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { FormfooterComponent } from 'src/app/shared/component/formfooter/formfooter.component';
import { BoPhan } from 'src/app/shared/enum/bo-phan.enum';
import { NhomDichVuThuongDungSharedComponent } from '../nhom-dich-vu-thuong-dung-shared/nhom-dich-vu-thuong-dung-shared.component';
import icClose from '@iconify/icons-ic/twotone-close';

@Component({
  selector: 'app-nhom-dich-vu-thuong-dung-create-popup',
  templateUrl: './nhom-dich-vu-thuong-dung-create-popup.component.html',
  styleUrls: ['./nhom-dich-vu-thuong-dung-create-popup.component.scss']
})
export class NhomDichVuThuongDungCreatePopupComponent implements OnInit {
  boPhan: BoPhan = null;
  icClose = icClose;

  @ViewChild('footer', { static: false }) footer: FormfooterComponent;
  @ViewChild(NhomDichVuThuongDungSharedComponent, { static: true }) shared;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NhomDichVuThuongDungCreatePopupComponent>) { }

  ngOnInit() {
    this.boPhan = this.data.BoPhan;
  }

  onCreated() {
    this.dialogRef.close("Yes");
  }
  
  closed() {
    this.dialogRef.close();
  }

  onValidateClient(isValidate: boolean) {
    if (isValidate) {
      this.shared.OnValidate();
    }
  }

  @HostListener('document:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === 83 && event.ctrlKey) {
      // ctrl + s
      this.footer.create();
      event.preventDefault();
    }

    if (event.keyCode === 27 && !event.ctrlKey) {
      // esc
      this.footer.cancel();
      event.preventDefault();
    }
  }
}
