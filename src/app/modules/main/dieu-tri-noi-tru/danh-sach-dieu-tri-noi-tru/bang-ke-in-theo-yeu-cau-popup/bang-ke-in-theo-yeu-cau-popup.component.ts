import {Component, OnInit, ChangeDetectorRef, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import icClose from "@iconify/icons-ic/twotone-close";

@Component({
	selector: "app-bang-ke-in-theo-yeu-cau-popup",
	templateUrl: "./bang-ke-in-theo-yeu-cau-popup.component.html",
	styleUrls: ["./bang-ke-in-theo-yeu-cau-popup.component.scss"],
})
export class BangKeTheoYeuCauComponent implements OnInit {
	icClose = icClose;
	inPhieuTheoYeuCau : boolean = true;
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private dialogRef: MatDialogRef<any>) {}

	ngOnInit() {
		this.data;
	}

	close() {
		this.dialog.closeAll();
	}

	modelChange(event : any){
      this.inPhieuTheoYeuCau = event; 
	}

	InPhieu() {
		this.dialogRef.close(this.inPhieuTheoYeuCau);
	}
}
