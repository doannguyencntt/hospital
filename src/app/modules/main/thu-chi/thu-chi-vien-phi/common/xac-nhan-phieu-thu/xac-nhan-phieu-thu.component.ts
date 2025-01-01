import {Component, OnInit, ChangeDetectorRef, Inject} from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
	selector: "app-xac-nhan-phieu-thu",
	templateUrl: "./xac-nhan-phieu-thu.component.html",
	styleUrls: ["./xac-nhan-phieu-thu.component.scss"],
})
export class XacNhanPhieuThuComponent implements OnInit {
	icClose = icClose;
	public mySelectionInPage: any[] = [];
	public validationErrors: any[] = [];
	public isInPhieuThu: boolean = true;
	public isInBangKeThuoc: boolean = true;
	public isInCPKhamNgoaiTru: boolean = true;

	public khongInPhieuHoanUng: boolean = false;
	public khongBangKeThuoc: boolean = false;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private router: Router,
	   private location: Location, private cdRef: ChangeDetectorRef, private dialogRef: MatDialogRef<any>) {}

	ngOnInit() {
		this.kiemTraToaThuoc(this.data);
	}

	close() {
		this.dialog.closeAll();
		this.router.navigate(["/danh-sach-thu-dich-vu"]);
	}

	ChonPhieuInChange(event: any, i: any) {
		if (event == true) {
			this.mySelectionInPage.push(i);
		} else {
			this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(i), 1);
		}
	}
	BackToList() {
		this.location.back();
	}
	InPhieuThu() {
		this.cdRef.detectChanges();
		this.validationErrors = [];
		if (this.mySelectionInPage.length == 0) {
			this.router.navigate(["/danh-sach-thu-dich-vu"]);
			this.dialogRef.close(null);
		} else {
			this.dialogRef.close(this.mySelectionInPage);
		}
	}

	kiemTraToaThuoc(data) {
		this.mySelectionInPage = ["InPhieuThu"];
		if (data.kiemTraToaThuoc) {
			this.mySelectionInPage.push("BangKeThuoc");
			this.khongBangKeThuoc = true;
		} else if (data.phieuHoanUngId != 0) {
			this.mySelectionInPage.push("InPhieuHoanUng");
			this.khongInPhieuHoanUng = true;
		}
		this.mySelectionInPage.push("InCPKhamNgoaiTru");
	}
}
