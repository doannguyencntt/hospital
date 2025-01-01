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
import {ChoThuTienRoutingModule} from "./cho-thu-tien-routing.module";
import {DsChuaThuTienComponent} from "./ds-chua-thu-tien/ds-chua-thu-tien.component";
import {DsDaThuTienComponent} from "./ds-da-thu-tien/ds-da-thu-tien.component";
import {ChiTietCacKhoanPhaiThuComponent} from "./chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component";
import {ChiTietThuTienTamUngComponent} from "./chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component";
import {MatRadioModule} from "@angular/material/radio";
import {GridModule} from "@progress/kendo-angular-grid";
import {ThongTinChungBenhNhanComponent} from "./thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {DanhSachThuTienNgoaiTruComponent} from "./danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component";
import {ThongTinPhieuThuNgoaiTruComponent} from "./thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component";
import {DanhSachThuNganDaThuTienBenhNhanComponent} from "./danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component";
import {DanhSachThuNganChoThuTienComponent} from "./danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component";
import {ApDungMiemGiamChoTungDichVuComponent} from "../../common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component";
import {MiemGiamTheoDVComponent} from "../../common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component";
import {ChoThuTienNoiTruModule} from "../../noi-tru/cho-thu-tien/cho-thu-tien.module";
import {ThongTinChiTietDaThuComponent} from "./thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component";
import { XacNhanInTrucTiepComponent } from "../../common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component";
import { XacNhanPhieuThuComponent } from "../../common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component";
import { ThongTinDichVuChuaDuocXacNhanComponent } from "../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component";
import { GoiBHYTChuaQuyetToanComponent } from "./danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component";
import { DichVuKhuyenMaiKemTheoGoi } from "./dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component";
import { ThongTinPhieuNgoaiTruPopupComponent } from "./thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";
import { DanhSachThuPhiNgoaiTruComponent } from "./danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component";

@NgModule({
	declarations: [
		DanhSachThuNganChoThuTienComponent,
		DanhSachThuPhiNgoaiTruComponent,
		DsChuaThuTienComponent,
		DsDaThuTienComponent,
		ChiTietCacKhoanPhaiThuComponent,
		ChiTietThuTienTamUngComponent,
		ThongTinChungBenhNhanComponent,
		DanhSachThuTienNgoaiTruComponent,
		ThongTinPhieuThuNgoaiTruComponent,
		DanhSachThuNganDaThuTienBenhNhanComponent,
		ThongTinChiTietDaThuComponent,
		GoiBHYTChuaQuyetToanComponent,
		DichVuKhuyenMaiKemTheoGoi,
		ThongTinPhieuNgoaiTruPopupComponent
	],
	imports: [
		ReactiveFormsModule,
		MatInputModule,
		MatOptionModule,
		MatSelectModule,
		MatTabsModule,
		ChoThuTienRoutingModule,
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
		MatTooltipModule,
		MatButtonModule,
		MatDialogModule,
		MatRadioModule,
		LayoutModule,
		GridModule,
		MatListModule,
		DropDownsModule,
		MatCheckboxModule,
		ChoThuTienNoiTruModule,
	],
  entryComponents: [
		ThongTinDichVuChuaDuocXacNhanComponent,
		XacNhanPhieuThuComponent,
		XacNhanInTrucTiepComponent,
		ApDungMiemGiamChoTungDichVuComponent,
		MiemGiamTheoDVComponent,
		DichVuKhuyenMaiKemTheoGoi,
		ThongTinPhieuNgoaiTruPopupComponent
	],
})
export class ChoThuTienModule {}
