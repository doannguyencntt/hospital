import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import icClose from "@iconify/icons-ic/twotone-close";
import icAdd from '@iconify/icons-ic/twotone-add';

@Component({
	selector: "app-tim-kiem-ma-bac-si-popup",
	templateUrl: "./tim-kiem-ma-bac-si-popup.component.html",
	styleUrls: ["./tim-kiem-ma-bac-si-popup.component.scss"],
})
export class ThemMaBacSiComponent implements OnInit {
	icClose = icClose;
	icAdd = icAdd;
	public strMaBS = "";
	constructor(@Inject(MAT_DIALOG_DATA) public data: any,
		public sanitizer: DomSanitizer,
		private dialogRef: MatDialogRef<any>) { }


	ngOnInit() { }

	huy() {
		this.dialogRef.close(null);
	}

	btApDungMaBacSi() {
		this.dialogRef.close(this.strMaBS);
	}

	close() {
		this.dialogRef.close(null);
	}

	modelChangeMaBacSi(event: any) {
		this.strMaBS = "";
		if (event != undefined && event != null && event.length > 0) {
			this.strMaBS = event;
		}
	}
}
