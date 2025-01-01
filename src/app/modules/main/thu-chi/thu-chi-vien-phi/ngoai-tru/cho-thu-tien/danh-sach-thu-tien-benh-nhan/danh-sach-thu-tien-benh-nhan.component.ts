import { Component, OnInit } from "@angular/core";
import { ChoThuTien } from "../cho-thu-tien.model";
import { LocalStorageHelper } from "src/app/core/utilities/local-storage.helper";
import { stagger60ms } from "src/@vex/animations/stagger.animation";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";

@Component({
	selector: "app-danh-sach-thu-tien",
	templateUrl: "./danh-sach-thu-tien-benh-nhan.component.html",
	styleUrls: ["./danh-sach-thu-tien-benh-nhan.component.scss"],
	animations: [stagger60ms, fadeInUp400ms],
})
export class DanhSachThuTienNgoaiTruComponent implements OnInit {
	tabActive: any;
	additionalSearchString: string;
	choThuTien: ChoThuTien;
	unSelectedTab() { }
	constructor() { }

	ngOnInit() {
		this.choThuTien = new ChoThuTien();
		this.choThuTien.TabActive = 0;
		this.backWithSearch();
	}

	backWithSearch() {
		if (LocalStorageHelper.getItem("additionalSearchStringThuNgan") != null) {
			this.additionalSearchString = LocalStorageHelper.getItem("additionalSearchStringThuNgan");
			this.choThuTien = new ChoThuTien();
			this.tabActive = this.choThuTien.TabActive;
			this.choThuTien = JSON.parse(this.additionalSearchString);
		} else {
			LocalStorageHelper.setItem("additionalSearchStringThuNgan", null);
		}
	}

	onTabSelect(event: any) {
		if (event.index == 0) {
			this.tabActive = 0;
			LocalStorageHelper.setItem("additionalSearchStringThuNgan", null);
		} else if (event.index == 1) {
			this.tabActive = 1;
			LocalStorageHelper.setItem("additionalSearchStringThuNgan", null);
		} else {
			this.tabActive = 2;
			LocalStorageHelper.setItem("additionalSearchStringThuNgan", null);
		}
	}
}
