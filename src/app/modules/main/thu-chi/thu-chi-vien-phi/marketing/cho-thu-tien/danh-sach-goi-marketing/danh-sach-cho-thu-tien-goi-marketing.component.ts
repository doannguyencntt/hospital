import {Component, OnInit} from "@angular/core";
import {LocalStorageHelper} from "src/app/core/utilities/local-storage.helper";
import {stagger60ms} from "src/@vex/animations/stagger.animation";
import {fadeInUp400ms} from "src/@vex/animations/fade-in-up.animation";
import { ChoThuTien } from "../cho-thu-tien-goi-marketing.model";

@Component({
	selector: "app-danh-sach-cho-thu-tien-goi-marketing",
	templateUrl: "./danh-sach-cho-thu-tien-goi-marketing.component.html",
	styleUrls: ["./danh-sach-cho-thu-tien-goi-marketing.component.scss"],
	animations: [stagger60ms, fadeInUp400ms],
})

export class DanhSachGoiMarketing implements OnInit {
	tabActive: any;
	additionalSearchString: string;
	choThuTien: ChoThuTien;
	unSelectedTab() {}
	constructor() {}

	ngOnInit() {
		this.choThuTien = new ChoThuTien();
		this.choThuTien.TabActive = 1;
		this.backWithSearch();
	}

	backWithSearch() {
		if (LocalStorageHelper.getItem("additionalSearchStringThuNganMarketing") != null) {
			this.additionalSearchString = LocalStorageHelper.getItem("additionalSearchStringThuNganMarketing");
			this.choThuTien = new ChoThuTien();
			this.tabActive = this.choThuTien.TabActive;
			this.choThuTien = JSON.parse(this.additionalSearchString);
		} else {			
			LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
		}
	}

	onTabSelect(event: any) {
		if (event.index == 0 || event.title == "Chưa quyết toán") {
			this.tabActive = 1;
			LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
		} else {
			this.tabActive = 2;
			LocalStorageHelper.setItem("additionalSearchStringThuNganMarketing", null);
		}
	}
}
