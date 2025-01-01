import { Component, OnInit, Inject } from "@angular/core";
import icClose from "@iconify/icons-ic/twotone-close";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";

@Component({
	selector: "app-chi-tiet-phieu-thu-marketing",
	templateUrl: "./chi-tiet-phieu-thu-marketing.component.html",
	styleUrls: ["./chi-tiet-phieu-thu-marketing.component.scss"],
})
export class ChiTietPhieuThuMarketingComponent implements OnInit {
	icClose = icClose;
	thongTinPhieuThu: any;
	public mySelectionInPage: any[] = [];
	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {
		this.thongTinPhieuThu = data.thongTinPhieuThu;
	}

	ngOnInit() {
	}

	close() {
		this.dialog.closeAll();
	}
}
