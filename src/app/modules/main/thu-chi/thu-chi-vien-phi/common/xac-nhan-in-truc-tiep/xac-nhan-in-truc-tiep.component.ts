import {Component, OnInit, ChangeDetectorRef, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";

@Component({
	selector: "app-xac-nhan-in-truc-tiep",
	templateUrl: "./xac-nhan-in-truc-tiep.component.html",
	styleUrls: ["./xac-nhan-in-truc-tiep.component.scss"],
})
export class XacNhanInTrucTiepComponent implements OnInit {
	icClose = icClose;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>) {}

	ngOnInit() {
		this.data;
	}
	close() {
		this.dialog.closeAll();
	}

	InPhieu() {
		this.dialogRef.close("Yes");
	}
}
