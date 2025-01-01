import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { IntlModule } from '@progress/kendo-angular-intl';


import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
registerLocaleData(localeVi, 'vi');

import { KhamBenhRoutingModule } from './kham-benh-routing.module';
import { KhamBenhComponent } from './kham-benh/kham-benh.component';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { IconModule } from '@visurel/iconify-angular';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { KhamBenhChoKhamListComponent } from './kham-benh-cho-kham-list/kham-benh-cho-kham-list.component';
import { KhamBenhTimBenhNhanPopupComponent } from './kham-benh/kham-benh-tim-benh-nhan-popup/kham-benh-tim-benh-nhan-popup.component';
import { KhamBenhLichSuKhamListComponent } from './kham-benh/kham-benh-lich-su-kham-list/kham-benh-lich-su-kham-list.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { LanKhamHienTaiLsClsComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ls-cls/lan-kham-hien-tai-ls-cls.component';
import { LanKhamHienTaiKetLuanComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ket-luan/lan-kham-hien-tai-ket-luan.component';
import { LanKhamHienTaiPhauThuatThuThuatComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-phau-thuat-thu-thuat/lan-kham-hien-tai-phau-thuat-thu-thuat.component';
import { LanKhamHienTaiVatTuTieuHaoComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-vat-tu-tieu-hao/lan-kham-hien-tai-vat-tu-tieu-hao.component';
import { LanKhamHienTaiBenhNhanTiepTheoPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-benh-nhan-tiep-theo-popup/lan-kham-hien-tai-benh-nhan-tiep-theo-popup.component';

import { DanhSachDaKhamListComponent } from './danh-sach-da-kham-list/danh-sach-da-kham-list.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule } from '@angular/material';
import { LanKhamHienTaiKhamBenhComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh/lan-kham-hien-tai-kham-benh.component';
import { LanKhamHienTaiKhamBenhChiDinhComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh-chi-dinh/lan-kham-hien-tai-kham-benh-chi-dinh.component';
import { LanKhamHienTaiKhamBenhDiUngThuocComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh-di-ung-thuoc/lan-kham-hien-tai-kham-benh-di-ung-thuoc.component';
import { LanKhamHienTaiKhamBenhKhamBenhComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh-kham-benh/lan-kham-hien-tai-kham-benh-kham-benh.component';
import { LanKhamHienTaiKhamBenhTienSuBenhComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh-tien-su-benh/lan-kham-hien-tai-kham-benh-tien-su-benh.component';
import { LanKhamHienTaiKhamBenhChiSoSinhTonComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh-chi-so-sinh-ton/lan-kham-hien-tai-kham-benh-chi-so-sinh-ton.component';
import { LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup/lan-kham-hien-tai-benh-nhan-dang-lam-chi-dinh-popup.component';
import { LichSuKhamBenhComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh/lich-su-kham-benh.component';
import { LichSuKhamBenhChiSoSinhTonComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-chi-so-sinh-ton/lich-su-kham-benh-chi-so-sinh-ton.component';
import { LichSuKhamBenhTienSuBenhComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-tien-su-benh/lich-su-kham-benh-tien-su-benh.component';
import { LichSuKhamBenhDiUngThuocComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-di-ung-thuoc/lich-su-kham-benh-di-ung-thuoc.component';
import { LichSuKhamBenhKhamBenhComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-kham-benh/lich-su-kham-benh-kham-benh.component';
import { LichSuKhamBenhChiDinhComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-chi-dinh/lich-su-kham-benh-chi-dinh.component';


import { LanKhamHienTaiKeToaComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ke-toa/lan-kham-hien-tai-ke-toa.component';
import { LanKhamHienTaiHoanThanhKhamPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-hoan-thanh-kham-popup/lan-kham-hien-tai-hoan-thanh-kham-popup.component';
import { LichSuKhamBenhKetLuanComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-ket-luan/lich-su-kham-benh-ket-luan.component';
import { LichSuKhamBenhKeToaComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-ke-toa/lich-su-kham-benh-ke-toa.component';
import { LanKhamHienTaiInToaThuocPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ke-toa/lan-kham-hien-tai-in-toa-thuoc-popup/lan-kham-hien-tai-in-toa-thuoc-popup.component';
import { InBangKhamBenhChiDinhComponent } from './kham-benh/lan-kham-hien-tai/in-bang-kham-benh-chi-dinh/in-bang-kham-benh-chi-dinh.component';

import { LanKhamHienTaiApDungToaThuocPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ke-toa/lan-kham-hien-tai-ap-dung-toa-thuoc-popup/lan-kham-hien-tai-ap-dung-toa-thuoc-popup.component';
import { ApDungLichSuKeToaConfirmPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ke-toa/ap-dung-lich-su-ke-toa-confirm-popup/ap-dung-lich-su-ke-toa-confirm-popup.component';
import { LanKhamHienTaiKhamBenhGoiDichVuPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-benh-goi-dich-vu-popup/lan-kham-hien-tai-kham-benh-goi-dich-vu-popup.component';
import { LanKhamHienTaiKetQuaClsComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ket-qua-cls/lan-kham-hien-tai-ket-qua-cls.component';
import { LanKhamHienTaiKhamKhacComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-kham-khac/lan-kham-hien-tai-kham-khac.component';
import { LanKhamHienTaiChanDoanPhanBietComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-chan-doan-phan-biet/lan-kham-hien-tai-chan-doan-phan-biet.component';
import { LichSuKhamBenhPopupDetailComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-popup-detail/lich-su-kham-benh-popup-detail.component';
import { LichSuKhamBenhKhamKhacComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-kham-khac/lich-su-kham-benh-kham-khac.component';
import { LichSuKhamBenhChanDoanPhanBietComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-chan-doan-phan-biet/lich-su-kham-benh-chan-doan-phan-biet.component';
import { LichSuKhamBenhKetQuaClsComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-ket-qua-cls/lich-su-kham-benh-ket-qua-cls.component';

import { ChanDoanCuaBacSiKhacPopupComponent } from './kham-benh/lan-kham-hien-tai/chan-doan-cua-bac-si-khac-popup/chan-doan-cua-bac-si-khac-popup.component';
import { DonThuocBacSiKhacKePopupComponent } from './kham-benh/lan-kham-hien-tai/don-thuoc-bac-si-khac-ke-popup/don-thuoc-bac-si-khac-ke-popup.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PhauThuatThuThuatTuongTrinhComponent } from './kham-benh/lan-kham-hien-tai/phau-thuat-thu-thuat-tuong-trinh/phau-thuat-thu-thuat-tuong-trinh.component';
import { PhauThuatThuThuatPopUpChonAnhComponent } from './kham-benh/lan-kham-hien-tai/phau-thuat-thu-thuat-popup-chon-anh/phau-thuat-thu-thuat-popup-chon-anh.component';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { PhieuKhamBenhVaoVienPopupComponent } from './kham-benh/lan-kham-hien-tai/phieu-kham-benh-vao-vien-popup/phieu-kham-benh-vao-vien-popup.component';
import { LichSuKhamBenhPopupComponent } from './lich-su-kham-benh-popup/lich-su-kham-benh-popup.component';
import { LanKhamHienTaiBoPhanTonThuongComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-bo-phan-ton-thuong/lan-kham-hien-tai-bo-phan-ton-thuong.component';
import { LanKhamHienTaiBoPhanTonThuongPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-bo-phan-ton-thuong-popup/lan-kham-hien-tai-bo-phan-ton-thuong-popup.component';
import { LanKhamHienTaiSoDoGiuongPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-so-do-giuong-popup/lan-kham-hien-tai-so-do-giuong-popup.component';
import { LichSuKhamBenhPhauThuatThuThuatComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-phau-thuat-thu-thuat/lich-su-kham-benh-phau-thuat-thu-thuat.component';
import { LichSuKhamBenhBoPhanTonThuongComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-bo-phan-ton-thuong/lich-su-kham-benh-bo-phan-ton-thuong.component';
import { GiayChuyenVienPopupComponent } from './kham-benh/lan-kham-hien-tai/giay-chuyen-vien-popup/giay-chuyen-vien-popup.component'; 
import { LichSuKhamBenhChiTietComponent } from './lich-su-kham-benh/lich-su-kham-benh-chi-tiet/lich-su-kham-benh-chi-tiet.component';
import { LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup/lan-kham-hien-tai-chi-dinh-cua-bac-si-khac-popup.component';
import { ChinhSuaDonThuocChiTietPopupComponent } from './kham-benh/lan-kham-hien-tai/chinh-sua-don-thuoc-chi-tiet-popup/chinh-sua-don-thuoc-chi-tiet-popup.component';
import { NghiHuongBhytConfirmPopupComponent } from './kham-benh/lan-kham-hien-tai/nghi-huong-bhyt-confirm-popup/nghi-huong-bhyt-confirm-popup.component';
import { NghiHuongBhytDetailPopupComponent } from './kham-benh/lan-kham-hien-tai/nghi-huong-bhyt-detail-popup/nghi-huong-bhyt-detail-popup.component';
import { LanKhamHienTaiChuyenKhamComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-chuyen-kham/lan-kham-hien-tai-chuyen-kham.component';
import { ChinhSuaVatTuChiTietPopupComponent } from './kham-benh/lan-kham-hien-tai/chinh-sua-vat-tu-chi-tiet-popup/chinh-sua-vat-tu-chi-tiet-popup.component';
import { LanKhamHienTaiInVatTuPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ke-toa/lan-kham-hien-tai-in-vat-tu-popup/lan-kham-hien-tai-in-vat-tu-popup.component';
import { ThemThuocKhongBhytComponent } from './kham-benh/lan-kham-hien-tai/them-thuoc-khong-bhyt/them-thuoc-khong-bhyt.component';
import { ViewImagePdfListComponent } from './kham-benh/lan-kham-hien-tai/view-image-pdf-list/view-image-pdf-list.component';
import { LanKhamHienTaiNhomDichVuThuongDungPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup/lan-kham-hien-tai-nhom-dich-vu-thuong-dung-popup.component';
import { LanKhamHienTaiSuDungGoiDichVuPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-su-dung-goi-dich-vu-popup/lan-kham-hien-tai-su-dung-goi-dich-vu-popup.component';
import { LanKhamHienTaiNhomDichVuLoiPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-nhom-dich-vu-loi-popup/lan-kham-hien-tai-nhom-dich-vu-loi-popup.component';
import { YeuCauXetNghiemLaiComponent } from './kham-benh/lan-kham-hien-tai/yeu-cau-xet-nghiem-lai-popup/yeu-cau-xet-nghiem-lai-popup.component';
import { PhieuInXetNghiemComponent } from './kham-benh/lan-kham-hien-tai/phieu-in-xet-nghiem-popup/phieu-in-xet-nghiem-popup.component';
import { LayMauXetNghiemKetQuaPopupComponent } from './kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { CanLamSangModule } from '../can-lam-sang/danh-sach-ket-qua-can-lam-sang/can-lam-sang.module';
import { LichSuCanLamSangModule } from '../can-lam-sang/lich-su-can-lam-sang/lich-su-can-lam-sang.module';
import { LanKhamHienTaiKetLuanKhamDoanComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ket-luan-kham-doan/lan-kham-hien-tai-ket-luan-kham-doan.component';
import { LanKhamHienTaiTuVanThuocKhamDoanComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-tu-van-thuoc-kham-doan/lan-kham-hien-tai-tu-van-thuoc-kham-doan.component';
import { SuaThuocTuVanKhamDoanPopupComponent } from './kham-benh/lan-kham-hien-tai/sua-thuoc-tu-van-kham-doan-popup/sua-thuoc-tu-van-kham-doan-popup.component';
import { InThuocTuVanKhamDoanPopupComponent } from './kham-benh/lan-kham-hien-tai/in-thuoc-tu-van-kham-doan-popup/in-thuoc-tu-van-kham-doan-popup.component';
import { LichSuKhamDoanTuVanThuocComponent } from './kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-doan-tu-van-thuoc/lich-su-kham-doan-tu-van-thuoc.component';
import { HuyDichVuHuyThanhToanPopupComponent } from './kham-benh/lan-kham-hien-tai/huy-dich-vu-huy-thanh-toan-popup/huy-dich-vu-huy-thanh-toan-popup.component';
import { XemKetQuaCdhaTdcnPopupComponent } from '../can-lam-sang/lich-su-can-lam-sang/xem-ket-qua-cdha-tdcn-popup/xem-ket-qua-cdha-tdcn-popup.component';
import { TiepNhanBenhNhanModule } from '../tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.module';
import { DichVuKhuyenMaiModule } from '../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module';
import { ChonLoaiKetQuaXetNghiemPopupComponent } from '../xet-nghiem/duyet-ket-qua/chon-loai-ket-qua-xet-nghiem-popup/chon-loai-ket-qua-xet-nghiem-popup.component';
import { LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup/lan-kham-hien-tai-cap-nhat-ghi-nhan-vtth-thuoc-popup.component';
import { LanKhamHienTaiHoanTraThuocVtthPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-hoan-tra-thuoc-vtth-popup/lan-kham-hien-tai-hoan-tra-thuoc-vtth-popup.component';
import { PtttGhiNhanHoanTraPopupComponent } from '../phau-thuat-thu-thuat/phau-thuat-thu-thuat-theo-ngay/phau-thuat-thu-thuat-tuong-trinh/pttt-ghi-nhan-hoan-tra-popup/pttt-ghi-nhan-hoan-tra-popup.component';
import { PopupChonLoaiInViewComponent } from '../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { CapNhatThongTinThucHienDvktPopupComponent } from './kham-benh/lan-kham-hien-tai/cap-nhat-thong-tin-thuc-hien-dvkt-popup/cap-nhat-thong-tin-thuc-hien-dvkt-popup.component';
import { PhieuKhamBenhPopupComponent } from './kham-benh/lan-kham-hien-tai/phieu-kham-benh-popup/phieu-kham-benh-popup.component';
import { LanKhamHienTaiChuyenPhongKhamPopupComponent } from './lan-kham-hien-tai/lan-kham-hien-tai-chuyen-phong-kham-popup/lan-kham-hien-tai-chuyen-phong-kham-popup.component';
import { LayMauXetNghiemKetQuaMotFilePopupComponent } from './kham-benh/lan-kham-hien-tai/lay-mau-xet-nghiem-ket-qua-mot-file-popup/lay-mau-xet-nghiem-ket-qua-mot-file-popup.component';
import { TrungThuocPopupComponent } from './kham-benh/lan-kham-hien-tai/lan-kham-hien-tai-ke-toa/trung-thuoc-popup/trung-thuoc-popup.component';
import { ToaThuocKhamBenhComfirmDkComponent } from './danh-sach-da-kham-list/toa-thuoc-kham-benh-comfirm-dk/toa-thuoc-kham-benh-comfirm-dk.component';
import { ToaThuocKhamBenhDkPopupComponent } from './danh-sach-da-kham-list/toa-thuoc-kham-benh-dk-popup/toa-thuoc-kham-benh-dk-popup.component';
import { PopupMessageKhongCoDvInDkComponent } from './danh-sach-da-kham-list/popup-message-khong-co-dv-in-dk/popup-message-khong-co-dv-in-dk.component';
import { NgayDuongThaiXacNhanPopupComponent } from './kham-benh/ngay-duong-thai-xac-nhan-popup/ngay-duong-thai-xac-nhan-popup.component';
import { NgayDuongThaiPopupComponent } from './kham-benh/ngay-duong-thai-popup/ngay-duong-thai-popup.component';
import { NoiDungMauKhamBenhPopupComponent } from './kham-benh/lan-kham-hien-tai/noi-dung-mau-kham-benh-popup/noi-dung-mau-kham-benh-popup.component';
import { XnCovidSarscov2PopupComponent } from './kham-benh/lan-kham-hien-tai/xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component';
import { KetLuanNguoiBenhHangDoiChungPopupComponent } from './kham-benh/ket-luan-nguoi-benh-hang-doi-chung-popup/ket-luan-nguoi-benh-hang-doi-chung-popup.component';
import { XnSarsCov2PopupComponent } from './kham-benh/xn-sars-cov2-popup/xn-sars-cov2-popup.component';
import { KhamBenhThongTinDoiTuongPopupComponent } from './kham-benh/kham-benh-thong-tin-doi-tuong-popup/kham-benh-thong-tin-doi-tuong-popup.component';
import { NhomDichVuThuongDungModule } from '../danh-muc/nhom-he-thong/benh-vien/nhom-dich-vu-thuong-dung/nhom-dich-vu-thuong-dung.module';
import { XacNhanChuyenTrangThaiComponent } from './kham-benh/kham-benh-lich-su-kham-list/xac-nhan-chuyen-trang-thai-dich-vu/xac-nhan-chuyen-trang-thai-dich-vu.component';
import { KhamBenhDichVuChuaThucHienPopupComponent } from './kham-benh/kham-benh-dich-vu-chua-thuc-hien-popup/kham-benh-dich-vu-chua-thuc-hien-popup.component';
//import { DuyetKetQuaXetNghiemModule } from '../xet-nghiem/duyet-ket-qua/duyet-ket-qua.module';


@NgModule({
  exports: [
    KhamBenhLichSuKhamListComponent,
    LanKhamHienTaiKhamBenhComponent,
    LanKhamHienTaiKetQuaClsComponent,
    LanKhamHienTaiKhamBenhChiDinhComponent,
    LanKhamHienTaiKetLuanComponent,
    LanKhamHienTaiSuDungGoiDichVuPopupComponent,
    LayMauXetNghiemKetQuaPopupComponent,
    LayMauXetNghiemKetQuaMotFilePopupComponent,
    XemKetQuaCdhaTdcnPopupComponent,
    LanKhamHienTaiTuVanThuocKhamDoanComponent,
    DanhSachDaKhamListComponent,
   
  ],
  declarations: [
    KhamBenhComponent,
    KhamBenhChoKhamListComponent,
    KhamBenhTimBenhNhanPopupComponent,
    KhamBenhLichSuKhamListComponent,
    LanKhamHienTaiLsClsComponent,
    LanKhamHienTaiKetLuanComponent,
    LanKhamHienTaiPhauThuatThuThuatComponent,
    LanKhamHienTaiKeToaComponent,
    LanKhamHienTaiVatTuTieuHaoComponent, LanKhamHienTaiBenhNhanTiepTheoPopupComponent, LanKhamHienTaiApDungToaThuocPopupComponent, DanhSachDaKhamListComponent,
    LanKhamHienTaiKhamBenhComponent, LanKhamHienTaiKhamBenhChiDinhComponent, LanKhamHienTaiKhamBenhDiUngThuocComponent,
    LanKhamHienTaiKhamBenhKhamBenhComponent,
    LanKhamHienTaiKhamBenhTienSuBenhComponent,
    LanKhamHienTaiKhamBenhChiSoSinhTonComponent,
    LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent,
    LichSuKhamBenhComponent, LichSuKhamBenhChiSoSinhTonComponent,
    LichSuKhamBenhTienSuBenhComponent,
    LichSuKhamBenhDiUngThuocComponent,
    LichSuKhamBenhKhamBenhComponent,
    LichSuKhamBenhChiDinhComponent,
    LanKhamHienTaiHoanThanhKhamPopupComponent,
    LichSuKhamBenhKetLuanComponent, LichSuKhamBenhKeToaComponent,
    LanKhamHienTaiInToaThuocPopupComponent,
    InBangKhamBenhChiDinhComponent,
    ApDungLichSuKeToaConfirmPopupComponent,
    LanKhamHienTaiKhamBenhGoiDichVuPopupComponent,
    LanKhamHienTaiKetQuaClsComponent,
    LanKhamHienTaiKhamKhacComponent,
    LanKhamHienTaiChanDoanPhanBietComponent,
    LichSuKhamBenhPopupDetailComponent,
    LichSuKhamBenhKhamKhacComponent,
    LichSuKhamBenhChanDoanPhanBietComponent,
    LichSuKhamBenhKetQuaClsComponent,
    ChanDoanCuaBacSiKhacPopupComponent,
    DonThuocBacSiKhacKePopupComponent,
    PhieuKhamBenhVaoVienPopupComponent,
    LichSuKhamBenhPopupComponent,
    PhauThuatThuThuatTuongTrinhComponent,
    PhauThuatThuThuatPopUpChonAnhComponent,
    LanKhamHienTaiBoPhanTonThuongComponent,
    LanKhamHienTaiSoDoGiuongPopupComponent,
    LanKhamHienTaiBoPhanTonThuongPopupComponent,
    LichSuKhamBenhPhauThuatThuThuatComponent,
    LichSuKhamBenhBoPhanTonThuongComponent,
    GiayChuyenVienPopupComponent,
    LichSuKhamBenhChiTietComponent,
    LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent,
    ChinhSuaDonThuocChiTietPopupComponent,
    NghiHuongBhytConfirmPopupComponent,
    NghiHuongBhytDetailPopupComponent,
    LanKhamHienTaiChuyenKhamComponent,
    ChinhSuaVatTuChiTietPopupComponent,
    LanKhamHienTaiInVatTuPopupComponent,
    ThemThuocKhongBhytComponent,
    ViewImagePdfListComponent,
    LanKhamHienTaiNhomDichVuThuongDungPopupComponent,
    LanKhamHienTaiSuDungGoiDichVuPopupComponent,
    LanKhamHienTaiNhomDichVuLoiPopupComponent,
    YeuCauXetNghiemLaiComponent,
    LayMauXetNghiemKetQuaPopupComponent,
    LayMauXetNghiemKetQuaMotFilePopupComponent,
    PhieuInXetNghiemComponent,
    LanKhamHienTaiKetLuanKhamDoanComponent,
    LanKhamHienTaiTuVanThuocKhamDoanComponent,
    SuaThuocTuVanKhamDoanPopupComponent,
    InThuocTuVanKhamDoanPopupComponent,
    LichSuKhamDoanTuVanThuocComponent,
    HuyDichVuHuyThanhToanPopupComponent,
    LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent,
    LanKhamHienTaiHoanTraThuocVtthPopupComponent,
    //ChonLoaiKetQuaXetNghiemPopupComponent
    PopupChonLoaiInViewComponent,
    CapNhatThongTinThucHienDvktPopupComponent,
    PhieuKhamBenhPopupComponent,
    LanKhamHienTaiChuyenPhongKhamPopupComponent,
    TrungThuocPopupComponent,
    NoiDungMauKhamBenhPopupComponent,
    KhamBenhThongTinDoiTuongPopupComponent,
    TrungThuocPopupComponent,
    ToaThuocKhamBenhComfirmDkComponent,
    ToaThuocKhamBenhDkPopupComponent,
    PopupMessageKhongCoDvInDkComponent,   
    NgayDuongThaiXacNhanPopupComponent,
    NgayDuongThaiPopupComponent,
    KetLuanNguoiBenhHangDoiChungPopupComponent,
    XnCovidSarscov2PopupComponent,
    XnSarsCov2PopupComponent,
    XacNhanChuyenTrangThaiComponent,
    KhamBenhDichVuChuaThucHienPopupComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule, MatOptionModule, MatSelectModule,
    MatTabsModule,

    CommonModule,
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FormsModule,
    TooltipModule,
    SharedModule,
    MatIconModule,
    IconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatButtonModule,
    LayoutModule,
    MatDialogModule,
    MatCheckboxModule,
    KhamBenhRoutingModule,
    ScrollToModule.forRoot(),
    //HttpClientModule,
    GridModule,
    IntlModule,
    PdfViewerModule,
    MatRadioModule,
    ImageDrawingModule,
    CanLamSangModule,
    LichSuCanLamSangModule,
    DichVuKhuyenMaiModule,
    //DuyetKetQuaXetNghiemModule,
    NhomDichVuThuongDungModule
  ],
  // providers: [
  //   KhamBenhService,
  //   {
  //     provide: BaseService, useClass: KhamBenhService
  //   }
  // ],
  entryComponents: [
    KhamBenhTimBenhNhanPopupComponent,
    LanKhamHienTaiBenhNhanTiepTheoPopupComponent,
    LanKhamHienTaiApDungToaThuocPopupComponent,
    LanKhamHienTaiBenhNhanDangLamChiDinhPopupComponent,
    LanKhamHienTaiHoanThanhKhamPopupComponent,
    LanKhamHienTaiInToaThuocPopupComponent,
    LanKhamHienTaiInVatTuPopupComponent,
    ApDungLichSuKeToaConfirmPopupComponent,
    InBangKhamBenhChiDinhComponent,
    LanKhamHienTaiKhamBenhGoiDichVuPopupComponent,
    LichSuKhamBenhPopupDetailComponent,
    ChanDoanCuaBacSiKhacPopupComponent,
    DonThuocBacSiKhacKePopupComponent,
    PhieuKhamBenhVaoVienPopupComponent,LichSuKhamBenhPopupComponent,
    PhauThuatThuThuatPopUpChonAnhComponent,
    LanKhamHienTaiBoPhanTonThuongPopupComponent,
    LanKhamHienTaiSoDoGiuongPopupComponent,
    GiayChuyenVienPopupComponent,
    LanKhamHienTaiChiDinhCuaBacSiKhacPopupComponent,
    ChinhSuaDonThuocChiTietPopupComponent,
    NghiHuongBhytConfirmPopupComponent,
    NghiHuongBhytDetailPopupComponent,
    LanKhamHienTaiChuyenKhamComponent,
    ChinhSuaVatTuChiTietPopupComponent,
    ThemThuocKhongBhytComponent,ViewImagePdfListComponent,
    LanKhamHienTaiNhomDichVuThuongDungPopupComponent,
    LanKhamHienTaiSuDungGoiDichVuPopupComponent,
    LanKhamHienTaiNhomDichVuLoiPopupComponent,
    YeuCauXetNghiemLaiComponent,
    PhieuInXetNghiemComponent,
    LayMauXetNghiemKetQuaPopupComponent,
    LayMauXetNghiemKetQuaMotFilePopupComponent,
    SuaThuocTuVanKhamDoanPopupComponent,
    InThuocTuVanKhamDoanPopupComponent,
    HuyDichVuHuyThanhToanPopupComponent,
    //ChonLoaiKetQuaXetNghiemPopupComponent
    LanKhamHienTaiCapNhatGhiNhanVtthThuocPopupComponent,
    LanKhamHienTaiHoanTraThuocVtthPopupComponent,
    //ChonLoaiKetQuaXetNghiemPopupComponent,
    PopupChonLoaiInViewComponent,
    CapNhatThongTinThucHienDvktPopupComponent,
    PhieuKhamBenhPopupComponent,
    LanKhamHienTaiChuyenPhongKhamPopupComponent,
    TrungThuocPopupComponent,
    NoiDungMauKhamBenhPopupComponent,
    KhamBenhThongTinDoiTuongPopupComponent,
    TrungThuocPopupComponent,
    PopupMessageKhongCoDvInDkComponent,
    ToaThuocKhamBenhComfirmDkComponent,
    ToaThuocKhamBenhDkPopupComponent,    
    NgayDuongThaiXacNhanPopupComponent,
    NgayDuongThaiPopupComponent,
    KetLuanNguoiBenhHangDoiChungPopupComponent,
    XnCovidSarscov2PopupComponent,
    XnSarsCov2PopupComponent,
    XacNhanChuyenTrangThaiComponent,
    KhamBenhDichVuChuaThucHienPopupComponent
  ]
})
export class KhamBenhModule { }
