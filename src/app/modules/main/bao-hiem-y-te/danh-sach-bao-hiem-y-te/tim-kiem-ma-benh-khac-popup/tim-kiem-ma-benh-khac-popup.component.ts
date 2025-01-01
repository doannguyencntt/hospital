import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import icAdd from '@iconify/icons-ic/twotone-add';

@Component({
	selector: "app-tim-kiem-ma-benh-khac-popup",
	templateUrl: "./tim-kiem-ma-benh-khac-popup.component.html",
	styleUrls: ["./tim-kiem-ma-benh-khac-popup.component.scss"],
})
export class ThemMaBenhKhacComponent implements OnInit {
	icClose = icClose;
	icAdd = icAdd;

	layMaBenhOrTenBenh: boolean = true;
	public strMaBenhOrTenBenhKhac = "";
	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
		public sanitizer: DomSanitizer,
		private dialogRef: MatDialogRef<any>) { }


	ngOnInit() { this.layMaBenhOrTenBenh = this.data.layMaBenhOrTenBenh }

	huy() {
		this.dialogRef.close(null);
	}

	btThemMaBenhKhac() {
		this.dialogRef.close(this.strMaBenhOrTenBenhKhac);
	}

	close() {
		this.dialogRef.close(null);
	}

	modelChangeMaBenhKhac(event: any) {
		this.strMaBenhOrTenBenhKhac = "";
		if (event != undefined && event != null && event.length > 0) {
			this.strMaBenhOrTenBenhKhac = event.join(";");
		}
	}
}
