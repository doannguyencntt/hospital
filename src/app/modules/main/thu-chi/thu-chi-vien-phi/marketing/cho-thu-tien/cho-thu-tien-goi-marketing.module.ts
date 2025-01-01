import {MatListModule} from "@angular/material/list";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule} from "@angular/material";
import {PageLayoutModule} from "src/@vex/components/page-layout/page-layout.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BreadcrumbsModule} from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import {TooltipModule} from "@progress/kendo-angular-tooltip";
import {SharedModule} from "src/app/shared/shared.module";
import {MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule} from "@angular/material";
import {IconModule} from "@visurel/iconify-angular";
import {LayoutModule} from "@progress/kendo-angular-layout";
import {MatRadioModule} from "@angular/material/radio";
import {GridModule} from "@progress/kendo-angular-grid";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {DieuTriNoiTruModule} from "src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.module";
import { ChiTietChoQuyetToanMarketing } from "./chi-tiet-cho-quyet-toan-goi-marketing/chi-tiet-cho-quyet-toan-goi-marketing.component";
import { DanhSachGoiMarketing } from "./danh-sach-goi-marketing/danh-sach-cho-thu-tien-goi-marketing.component";
import { DanhSachChoQuyetToanMarketing } from "./danh-sach-cho-quyet-toan-goi-marketing/danh-sach-cho-quyet-toan-goi-marketing.component";
import { DanhSachDaQuyetToanMarketing } from "./danh-sach-da-quyet-toan-goi-marketing/danh-sach-da-quyet-toan-goi-marketing.component";
import { ChoThuTienGoiMarketingRoutingModule } from "./cho-thu-tien-goi-marketing-routing.module";
import { GoiChuaQuyetToanComponent } from "./goi-chua-quyet-toan/goi-chua-quyet-toan.component";
import { GoiDaQuyetToanComponent } from "./goi-da-quyet-toan/goi-da-quyet-toan.component";
import { ThongTinPhieuThu } from "./danh-sach-phieu-thu-marketing/danh-sach-phieu-thu-marketing.component";
import { ThongTinQuyetToanPopup } from "./thong-tin-quyet-toan-popup/thong-tin-quyet-toan-popup.component";
import { ThuTienMarketingPopupComponent } from "./thu-tien-marketing-popup/thu-tien-marketing-popup.component";
import { HuyThongTinQuyetToanComponent } from "./huy-thong-tin-quyet-toan-popup/huy-thong-tin-quyet-toan-popup.component";
import { ChoThuTienNoiTruModule } from "../../noi-tru/cho-thu-tien/cho-thu-tien.module";
import { ChiTietDaQuyetToanMarketing } from "./chi-tiet-da-quyet-toan-goi-marketing/chi-tiet-da-quyet-toan-goi-marketing.component";
import { ChiTietPhieuThuMarketingComponent } from "./chi-tiet-phieu-thu-marketing/chi-tiet-phieu-thu-marketing.component";
import { XemPhieuThuMarketing } from "./xem-phieu-thu-marketing/xem-phieu-thu-marketing.component";
import { ThongTinChuyenGoiBenhNhanComponent } from "./thong-tin-chuyen-goi-benh-nhan-popup/thong-tin-chuyen-goi-benh-nhan-popup.component";

@NgModule({
	declarations: [
		ChiTietChoQuyetToanMarketing,
		DanhSachGoiMarketing,
		DanhSachChoQuyetToanMarketing,
		DanhSachDaQuyetToanMarketing,
		GoiChuaQuyetToanComponent,
		GoiDaQuyetToanComponent,
		ThongTinPhieuThu,
		ThongTinQuyetToanPopup,
		ThuTienMarketingPopupComponent,
		ChiTietDaQuyetToanMarketing,
		HuyThongTinQuyetToanComponent,
		ChiTietPhieuThuMarketingComponent,
		XemPhieuThuMarketing,
		ThongTinChuyenGoiBenhNhanComponent
	],
	imports: [
		ReactiveFormsModule,
		MatInputModule,
		MatOptionModule,
		MatSelectModule,
		MatTabsModule,
		CommonModule,
		PageLayoutModule,
		FlexLayoutModule,
		BreadcrumbsModule,
		FormsModule,
		TooltipModule,
		SharedModule,
		MatIconModule,
		MatMenuModule,
		IconModule,
		MatMenuModule,
		MatButtonToggleModule,
		ChoThuTienGoiMarketingRoutingModule,
		MatTooltipModule,
		MatButtonModule,
		MatDialogModule,
		MatRadioModule,
		LayoutModule,
		GridModule,
		MatListModule,
		DropDownsModule,
		MatCheckboxModule,
		DieuTriNoiTruModule,
		ChoThuTienNoiTruModule
	],
	entryComponents: [	
		ThongTinQuyetToanPopup,
		ThuTienMarketingPopupComponent,
		HuyThongTinQuyetToanComponent,
		ChiTietPhieuThuMarketingComponent,
		XemPhieuThuMarketing,
		ThongTinChuyenGoiBenhNhanComponent
	],
})
export class ChoThuTienGoiMarketingTruModule {}
