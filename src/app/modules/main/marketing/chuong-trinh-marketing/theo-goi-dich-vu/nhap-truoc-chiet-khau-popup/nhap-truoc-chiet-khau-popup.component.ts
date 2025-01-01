import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from "@iconify/icons-ic/twotone-close";
import { TruocChietKhau } from '../goi-dv-marketing.model';

@Component({
  selector: 'app-nhap-truoc-chiet-khau-popup',
  templateUrl: './nhap-truoc-chiet-khau-popup.component.html',
  styleUrls: ['./nhap-truoc-chiet-khau-popup.component.scss']
})
export class NhapTruocChietKhauPopupComponent implements OnInit {

	icClose = icClose;
	validationErrors: any;
  truocChietKhau:TruocChietKhau={} as TruocChietKhau;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) {}

	ngOnInit() {
    this.truocChietKhau.LoaiChietKhau=1;
  }

	close() {
		this.dialogRef.close(null);
	}
  apDung(){
    this.validationErrors = [];
		this.cdRef.detectChanges();
		if ((this.truocChietKhau.ChietKhau === undefined)) {
			this.validationErrors.push({
				Message: "Vui lòng nhập chiết khấu (%).",
				Field: "ChietKhau",
			});
		}
		if (this.validationErrors.length > 0) {
			return false;
		} else {
			this.dialogRef.close(this.truocChietKhau);
		}

  }
  onKeyUp(keyInput: any) {
    if (keyInput.keyCode === 13) {
        this.apDung();
    }
}
}
