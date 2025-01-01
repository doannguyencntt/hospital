import {MatListModule} from "@angular/material/list";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule, FormControl} from "@angular/forms";
import {MatCheckboxModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule} from "@angular/material";
import {PageLayoutModule} from "src/@vex/components/page-layout/page-layout.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BreadcrumbsModule} from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import {TooltipModule} from "@progress/kendo-angular-tooltip";
import {SharedModule} from "src/app/shared/shared.module";
import {MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule} from "@angular/material";
import {IconModule} from "@visurel/iconify-angular";
import {LayoutModule} from "@progress/kendo-angular-layout";
import {DsChuaThuTienComponent} from "./ds-chua-thu-tien/ds-chua-thu-tien.component";
import {DsDaThuTienComponent} from "./ds-da-thu-tien/ds-da-thu-tien.component";
import {ChiTietThuTienTamUngComponent} from "./chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component";
import {MatRadioModule} from "@angular/material/radio";
import {GridModule} from "@progress/kendo-angular-grid";
import {ThongTinChungBenhNhanComponent} from "./thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component";
import {ApDungMiemGiamChoTungDichVuComponent} from "../../common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {DanhSachThuNganChoThuTienNoiTruComponent} from "./danh-sach-cho-thu-tien/danh-sach-cho-thu-tien.component";
import {ChoThuTienNoiTruRoutingModule} from "./cho-thu-tien-routing.module";
import {DanhSachChoQuyetToan} from "./danh-sach-cho-quyet-toan/danh-sach-cho-quyet-toan.component";
import {DanhSachDaQuyetToan} from "./danh-sach-da-quyet-toan/danh-sach-da-quyet-toan.component";
import {ChiTietChoQuyetToanComponent} from "./chi-tiet-cho-quyet-toan/chi-tiet-cho-quyet-toan.component";
import {ChiTietDaQuyetToanComponent} from "./chi-tiet-da-quyet-toan/chi-tiet-da-quyet-toan.component";
import {ThongTinPhieuThuComponent} from "./thong-tin-phieu-thu/thong-tin-phieu-thu.component";
import {DieuTriNoiTruModule} from "src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.module";
import {XacNhanHuyThuComponent} from "../../common/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component";
import {ThongTinPhieuPdfPopupComponent} from "../../common/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component";
import {ApDungMiemGiamThemComponent} from "../../common/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component";
import {MiemGiamTheoDVComponent} from "../../common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component";
import { XacNhanInTrucTiepComponent } from "../../common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component";
import { XacNhanPhieuThuComponent } from "../../common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component";
import { ThongTinDichVuChuaDuocXacNhanComponent } from "../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component";
import { GoiBHYTChuaQuyetToanComponent } from "./danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component";
import { DichVuKhuyenMaiKemTheoGoi } from "./dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component";
import { XacNhanHoanThuComponent } from "../../common/xac-nhan-hoan-phieu/xac-nhan-hoan-phieu.component";
import { ThongTinPhieuNoiTruPopupComponent } from "./thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component";
import { CommonPdfPopupComponent } from "../../common/common-pdf-popup/common-pdf-popup.component";
import { ApDungDonGiaMoiDichVuComponent } from "./ap-dung-don-gia-moi-dv-popup/ap-dung-don-gia-moi-dv-popup.component";
import { ChonMiemGiamBangThanhTienDichVuComponent } from "../../common/chon-miem-giam-bang-thanh-tien-noi-tru/chon-miem-giam-bang-thanh-tien-noi-tru.component";
import { ThuTamUngKhiQuyetToanComponent } from "./thu-tam-ung-khi-quyet-toan-popup/thu-tam-ung-khi-quyet-toan-popup.component";
import { ChonMiemGiamBangThanhTienDichVuNgoaiTruComponent } from "../../common/chon-miem-giam-bang-thanh-tien-ngoai-tru/chon-miem-giam-bang-thanh-tien-ngoai-tru.component";
import { CommonPdfPopupNgoaiTruComponent } from "../../common/common-pdf-popup-ngoai-tru/common-pdf-popup-ngoai-tru.component";
import { CommonPdfPopupNoiTruComponent } from "../../common/common-pdf-popup-noi-tru/common-pdf-popup-noi-tru.component";
import { NoiDungGhiChuMauPopupComponent } from "../../common/noi-dung-ghi-chu-mau-popup/noi-dung-ghi-chu-mau-popup.component";

@NgModule({
	declarations: [
		DanhSachThuNganChoThuTienNoiTruComponent,
		DsChuaThuTienComponent,
		DsDaThuTienComponent,
		ChiTietChoQuyetToanComponent,
		ChiTietDaQuyetToanComponent,
		ChiTietThuTienTamUngComponent,
		ThongTinChungBenhNhanComponent,
		ApDungMiemGiamThemComponent,
		ChonMiemGiamBangThanhTienDichVuComponent,
		ChonMiemGiamBangThanhTienDichVuNgoaiTruComponent,
		MiemGiamTheoDVComponent,
		DanhSachChoQuyetToan,
		DanhSachDaQuyetToan,
		ThongTinPhieuThuComponent,
		XacNhanHuyThuComponent,
		ThongTinPhieuPdfPopupComponent,
		XacNhanPhieuThuComponent,
		ThongTinDichVuChuaDuocXacNhanComponent,
		XacNhanInTrucTiepComponent,
		ApDungMiemGiamChoTungDichVuComponent,
		GoiBHYTChuaQuyetToanComponent,
		DichVuKhuyenMaiKemTheoGoi,
		XacNhanHoanThuComponent,
		ThongTinPhieuNoiTruPopupComponent,
		CommonPdfPopupComponent,
		CommonPdfPopupNgoaiTruComponent,
		CommonPdfPopupNoiTruComponent,
		ApDungDonGiaMoiDichVuComponent,
		ThuTamUngKhiQuyetToanComponent,
		NoiDungGhiChuMauPopupComponent
	],
	imports: [
		ReactiveFormsModule,
		MatInputModule,
		MatOptionModule,
		MatSelectModule,
		MatTabsModule,
		ChoThuTienNoiTruRoutingModule,
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
		DieuTriNoiTruModule,
	],
	entryComponents: [
		ThongTinDichVuChuaDuocXacNhanComponent,
		ThuTamUngKhiQuyetToanComponent,
		XacNhanPhieuThuComponent,
		XacNhanInTrucTiepComponent,
		ApDungMiemGiamThemComponent,
		ChonMiemGiamBangThanhTienDichVuComponent,
		ChonMiemGiamBangThanhTienDichVuNgoaiTruComponent,
		ApDungMiemGiamChoTungDichVuComponent,
		MiemGiamTheoDVComponent,
		XacNhanHuyThuComponent,
		ThongTinPhieuPdfPopupComponent,
		DichVuKhuyenMaiKemTheoGoi,
		XacNhanHoanThuComponent,
		ThongTinPhieuNoiTruPopupComponent,
		CommonPdfPopupComponent,
		CommonPdfPopupNgoaiTruComponent,
		CommonPdfPopupNoiTruComponent,
		ApDungDonGiaMoiDichVuComponent,
		NoiDungGhiChuMauPopupComponent
	],
})
export class ChoThuTienNoiTruModule {}
