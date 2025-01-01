import { Component, OnInit, Inject, ChangeDetectorRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import { ApDungMiemGiamThem } from "../quay-thuoc.model";

@Component({
  selector: 'app-ap-dung-miem-giam-them-popup',
  templateUrl: './ap-dung-miem-giam-them-popup.component.html',
  styleUrls: ['./ap-dung-miem-giam-them-popup.component.scss']
})
export class ApDungMiemGiamThemPopupComponent implements OnInit {

  icClose = icClose;
  disablePhanTram: boolean = true;
  disableSoTien: boolean = true;
  apDungMiemGiamThem = new ApDungMiemGiamThem;
  validationErrors: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public sanitizer: DomSanitizer,
    private cdRef: ChangeDetectorRef,
    private dialogRef: MatDialogRef<any>
  ) {

  }

  ngOnInit() {
  }

  apDungPhanTram(ev: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();

    this.disablePhanTram = !ev;
    this.apDungMiemGiamThem.TiLe = 0;
  }

  apDungSoTien(ev: any) {
    this.validationErrors = [];
    this.cdRef.detectChanges();

    this.disableSoTien = !ev;
    this.apDungMiemGiamThem.SoTien = 0;
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
  }

  HuyApDungMGT() {
    this.dialogRef.close(null);
  }
  ApDungMGT() {    
    this.validationErrors = [];
    this.cdRef.detectChanges();
    if (this.apDungMiemGiamThem.ChietKhauTheoTiLe && (this.apDungMiemGiamThem.TiLe === undefined || this.apDungMiemGiamThem.TiLe === 0)) {
      this.validationErrors.push({
        Message: "Vui lòng nhập tỉ lệ miễn giảm.",
        Field: "TiLe",
      });
    }
    if (this.apDungMiemGiamThem.ChietKhauTheoSoTien && (this.apDungMiemGiamThem.SoTien === undefined || this.apDungMiemGiamThem.SoTien === 0)) {
      this.validationErrors.push({
        Message: "Vui lòng nhập số tiền miễn giảm.",
        Field: "SoTien",
      });
    }
    if (this.validationErrors.length > 0) {
      return false;
    }
    else{
      this.dialogRef.close(this.apDungMiemGiamThem);
    }  

    //====================================trường hơp ko chọn gì hết====================================
    if(!this.apDungMiemGiamThem.ChietKhauTheoTiLe && !this.apDungMiemGiamThem.ChietKhauTheoSoTien){
      this.dialogRef.close(null);
    } 
    //=================================================================================================
    
  }
  close() {
    this.dialogRef.close(null);
  }
}

