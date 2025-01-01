import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import icClose from "@iconify/icons-ic/twotone-close";

@Component({
  selector: 'app-nhap-sau-chiet-khau-popup',
  templateUrl: './nhap-sau-chiet-khau-popup.component.html',
  styleUrls: ['./nhap-sau-chiet-khau-popup.component.scss']
})
export class NhapSauChietKhauPopupComponent implements OnInit {

  icClose = icClose;
	validationErrors: any;
  chietKhau:number;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) {}

	ngOnInit() {
  }

	close() {
		this.dialogRef.close(null);
	}
  apDung(){
    this.validationErrors = [];
		this.cdRef.detectChanges();
		if ((this.chietKhau === undefined)) {
			this.validationErrors.push({
				Message: "Vui lòng nhập chiết khấu (%).",
				Field: "ChietKhau",
			});
		}
		if (this.validationErrors.length > 0) {
			return false;
		} else {
			this.dialogRef.close(this.chietKhau);
		}

  }
  
  onKeyUp(keyInput: any) {
    if (keyInput.keyCode === 13) {
        this.apDung();
    }
}
}
