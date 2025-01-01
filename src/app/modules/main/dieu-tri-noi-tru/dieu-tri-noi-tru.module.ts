import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DieuTriNoiTruRoutingModule } from './dieu-tri-noi-tru-routing.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule, LoadingComponent } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatMenuModule, MatButtonToggleModule, MatTooltipModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatDialogModule, MatCheckboxModule, MatListModule, MatRadioModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { DanhSachDieuTriNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru.component';
import { ChiTietDieuTriNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/chi-tiet-dieu-tri-noi-tru/chi-tiet-dieu-tri-noi-tru.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DieuTriNoiTruService } from './dieu-tri-noi-tru.service';
import { BaseService } from 'src/app/core/services/base.service';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BsDieuTriComponent } from './danh-sach-dieu-tri-noi-tru/phong-giuong-bs-dieu-tri/bs-dieu-tri/bs-dieu-tri.component';
import { CapGiuongComponent } from './danh-sach-dieu-tri-noi-tru/phong-giuong-bs-dieu-tri/cap-giuong/cap-giuong.component';
import { ChuyenKhoaComponent } from './danh-sach-dieu-tri-noi-tru/phong-giuong-bs-dieu-tri/chuyen-khoa/chuyen-khoa.component';

import { PhieuDieuTriComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri.component';
import { PhieuDieuTriThamKhamComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-tham-kham/phieu-dieu-tri-tham-kham.component';
import { PhieuDieuTriDvktComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-dvkt/phieu-dieu-tri-dvkt.component';
import { PhieuDieuTriThuocComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-thuoc/phieu-dieu-tri-thuoc.component';
import { PhieuDieuTriVatTuComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-vat-tu/phieu-dieu-tri-vat-tu.component';
import { PhieuDieuTriTruyenDichComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-truyen-dich/phieu-dieu-tri-truyen-dich.component';
import { PhieuDieuTriTruyenMauComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-truyen-mau/phieu-dieu-tri-truyen-mau.component';
import { PhieuDieuTriSuatAnComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-suat-an/phieu-dieu-tri-suat-an.component';
import { PhongGiuongBsDieuTriComponent } from './danh-sach-dieu-tri-noi-tru/phong-giuong-bs-dieu-tri/phong-giuong-bs-dieu-tri.component';
import { LichSuVaoVienComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/lich-su-vao-vien/lich-su-vao-vien.component';
import { ChiTietKhamChuaBenhComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/chi-tiet-kham-chua-benh.component';
import { LichSuKhamBenhNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-kham-benh/lich-su-kham-benh-noi-tru.component';
import { ThongTinHanhChinhComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-hanh-chinh/thong-tin-hanh-chinh.component';
import { LichSuChiDinhComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-chi-dinh/lich-su-chi-dinh.component';
import { LichSuChuanDoanComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-chuan-doan/lich-su-chuan-doan.component';
import { LichSuKetQuaClsComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-ket-qua-cls/lich-su-ket-qua-cls.component';
import { ChiTietDieuTriPopupComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-dieu-tri-popup/chi-tiet-dieu-tri-popup.component';
import { ThongTinBenhAnComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-benh-an.component';
import { ThongTinBenhAnNgoaiKhoaComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-ngoai-khoa/thong-tin-benh-an-ngoai-khoa.component';

import { ThongTinBenhAnPhuKhoaComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-phu-khoa/thong-tin-benh-an-phu-khoa.component';
import { ThongTinBenhAnSanKhoaMoThuongComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-san-khoa-mo-thuong/thong-tin-benh-an-san-khoa-mo-thuong.component';
import { TaiNanThuongTichComponent } from './danh-sach-dieu-tri-noi-tru/tai-nan-thuong-tich/tai-nan-thuong-tich.component';
import { HoSoKhacComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ho-so-khac.component';
import { ThongTinNgoaiKhoaThamMyComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-ngoai-khoa-tham-my/thong-tin-ngoai-khoa-tham-my.component';
import { ThongTinPhuKhoaComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-phu-khoa/thong-tin-phu-khoa.component';
import { ThongTinRaVienNoiKhoaNhiComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-ra-vien-noi-khoa-nhi/thong-tin-ra-vien-noi-khoa-nhi.component';

import { ThongTinSanKhoaMoComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-san-khoa-mo/thong-tin-san-khoa-mo.component';
import { RaVienNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/ra-vien-noi-tru.component';
import {
    PhieuTomTatCureInfoAndServicesComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-tom-tat-cure-info-va-services/phieu-tom-tat-cure-info-va-services.component';
import { PhieuSangLocDinhDuongComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-sang-loc-dinh-duong/phieu-sang-loc-dinh-duong.component';
import { PhieuKhaiThacTienSuDiUngComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-khai-thac-tien-su-di-ung/phieu-khai-thac-tien-su-di-ung.component';
import { PhieuDieuTriPopupNgayComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-popup-ngay/phieu-dieu-tri-popup-ngay.component';
import { PhieuDieuTriPopupTaoNgayComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-popup-tao-ngay/phieu-dieu-tri-popup-tao-ngay.component';
import { TrichBienBanHoiChanComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/trich-bien-ban-hoi-chan/trich-bien-ban-hoi-chan.component';
import { PhieuTheoDoiChucNangSongComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-theo-doi-chuc-nang-song/phieu-theo-doi-chuc-nang-song.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TongKetBenhAnNoiKhoaComponent } from './danh-sach-dieu-tri-noi-tru/tong-ket-benh-an-noi-khoa/tong-ket-benh-an-noi-khoa.component';
import { TongKetBenhAnNgoaiKhoaComponent } from './danh-sach-dieu-tri-noi-tru/tong-ket-benh-an-ngoai-khoa/tong-ket-benh-an-ngoai-khoa.component';
import { PhieuSoKetMuoiLamNgayDieuTriComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-so-ket-muoi-lam-ngay-dieu-tri/phieu-so-ket-muoi-lam-ngay-dieu-tri.component';
import { LichSuKhamBenhKeToaNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-kham-benh-ke-toa/lich-su-kham-benh-ke-toa.component';
import {
    PhieuCureInfoVaServicesPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cure-info-va-services-popup/phieu-cure-info-va-services-popup.component';
import {
    BienBanHoiChanPhauThuatPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-hoi-chan-phau-thuat-popup/bien-ban-hoi-chan-phau-thuat-popup.component';
import {
    BienBanHoiChanPhauThuatComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-hoi-chan-phau-thuat/bien-ban-hoi-chan-phau-thuat.component';
import { SuaThuocPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-thuoc-popup/sua-thuoc-popup.component';
import { SuaVatTuPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-vat-tu-popup/sua-vat-tu-popup.component';
import { PhieuInTrichBienBanHoiChanPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/trich-bien-ban-hoi-chan/phieu-in-trich-bien-ban-hoi-chan-popup/phieu-in-trich-bien-ban-hoi-chan-popup.component';
import { LichSuKhamBenhChiSoSinhTonNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-kham-benh-chi-so-sinh-ton/lich-su-kham-benh-chi-so-sinh-ton.component';
import { LichSuKhamBenhBoPhanTonThuongNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-kham-benh-bo-phan-ton-thuong/lich-su-kham-benh-bo-phan-ton-thuong.component';
import { PhieuInCongKhaiThuocPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component';
import { PhieuInCongKhaiVatTuPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-cong-khai-vat-tu-popup/phieu-in-cong-khai-vat-tu-popup.component';
import { PhieuDieuTriDvktPopupClsComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-dvkt-popup-cls/phieu-dieu-tri-dvkt-popup-cls.component';
import { PhieuDieuTriPopupInPhieuClsComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-dieu-tri-popup-in-phieu-cls/phieu-dieu-tri-popup-in-phieu-cls.component';

// import { LichSuKhamBenhKeToaNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/lich-su-vao-vien/chi-tiet-kham-chua-benh/lich-su-kham-benh-ke-toa/lich-su-kham-benh-ke-toa.component';
import { PhieuInPhieuSoKetMuoiLamComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-so-ket-muoi-lam-ngay-dieu-tri/phieu-in-phieu-so-ket-muoi-lam/phieu-in-phieu-so-ket-muoi-lam.component';
import { ThongTinChiSoSinhTonComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-chi-so-sinh-ton/thong-tin-chi-so-sinh-ton.component';
import {
    BienBanCamKetPhauThuatComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-cam-ket-phau-thuat/bien-ban-cam-ket-phau-thuat.component';
import {
    BienBanCamKetPhauThuatPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-cam-ket-phau-thuat-popup/bien-ban-cam-ket-phau-thuat-popup.component';
import { SuaTruyenDichPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-truyen-dich-popup/sua-truyen-dich-popup.component';
import { SuaTruyenMauPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-truyen-mau-popup/sua-truyen-mau-popup.component';
import { TiepNhanNoiTruModule } from './tiep-nhan-noi-tru/tiep-nhan-noi-tru.module';
import { PhieuInKhaiThacTsbComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-khai-thac-tien-su-di-ung/phieu-in-khai-thac-tsb/phieu-in-khai-thac-tsb.component';
import {
    BangKiemAnToanPhauThuatPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-kiem-an-toan-phau-thuat-popup/bang-kiem-an-toan-phau-thuat-popup.component';
import {
    BangKiemAnToanPhauThuatComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-kiem-an-toan-phau-thuat/bang-kiem-an-toan-phau-thuat.component';
import { BangKiemAtNguoiBenhPtComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-kiem-at-nguoi-benh-pt/bang-kiem-at-nguoi-benh-pt.component';
import { DropDownButtonModule } from '@progress/kendo-angular-buttons';

import {
    ThongTinTienSuSanKhoaComponent
} from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-tien-su-san-khoa/thong-tin-tien-su-san-khoa.component';
import {
    ThongTinTreSoSinhComponent
} from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-tre-so-sinh/thong-tin-tre-so-sinh.component';
import { BienBanGayMePopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-gay-me-popup/bien-ban-gay-me-popup.component';
import {
    BienBanHoiChanGayMeComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-hoi-chan-gay-me/bien-ban-hoi-chan-gay-me.component';
import { ThongTinLanPhauThuatComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/lan-phau-thuat/lan-phau-thuat.component';
import {
    PhieuInSangLocDinhDuongComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-sang-loc-dinh-duong/phieu-in-sang-loc-dinh-duong/phieu-in-sang-loc-dinh-duong.component';
import { ThongTinPhieuInComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-phieu-in/thong-tin-phieu-in.component';
import {
    PhieuInTheoDoiChucNangComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-theo-doi-chuc-nang-song/phieu-in-theo-doi-chuc-nang/phieu-in-theo-doi-chuc-nang.component';
import {
    PhieuKhamGayMeTruocMoComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-kham-gay-me-truoc-mo/phieu-kham-gay-me-truoc-mo.component';
import {
    PhieuKhamGayMeTruocMoPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-kham-gay-me-truoc-mo-popup/phieu-kham-gay-me-truoc-mo-popup.component';
import {
    GiayCamKetKyThuatMoiComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-cam-ket-ky-thuat-moi/giay-cam-ket-ky-thuat-moi.component';
import {
    GiayCamKetKyThuatMoiPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-cam-ket-ky-thuat-moi-popup/giay-cam-ket-ky-thuat-moi-popup.component';
import { BangKiemAtNguoiBenhPtPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-kiem-at-nguoi-benh-pt/bang-kiem-at-nguoi-benh-pt-popup/bang-kiem-at-nguoi-benh-pt-popup.component';
import { ThongTinBenhAnKhoaNhiComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-khoa-nhi/thong-tin-khoa-nhi.component';
import { ThongTinBenhAnNoiKhoaComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-noi-khoa/thong-tin-noi-khoa.component';
import { GiayTuNguyenTrietSanComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-tu-nguyen-triet-san/giay-tu-nguyen-triet-san.component';
import { GiayInTuNguyenTrietSanComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-tu-nguyen-triet-san/giay-in-tu-nguyen-triet-san/giay-in-tu-nguyen-triet-san.component';
import { BienBanCamKetGayTeComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-cam-ket-gay-te/bien-ban-cam-ket-gay-te.component';
import { BienBanInCamKetGayTeComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-cam-ket-gay-te/bien-ban-in-cam-ket-gay-te/bien-ban-in-cam-ket-gay-te.component';
import { TongKetBenhAnSanKhoaComponent } from './danh-sach-dieu-tri-noi-tru/tong-ket-benh-an-san-khoa/tong-ket-benh-an-san-khoa.component';
import {
    GiayKhamChuaBenhTheoYcComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-kham-chua-benh-theo-yc/giay-kham-chua-benh-theo-yc.component';
import {
    GiayKhamChuaBenhTheoYcPopupComponent
} from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-kham-chua-benh-theo-yc-popup/giay-kham-chua-benh-theo-yc-popup.component';
import {
    ThongTinSanKhoaComponent
} from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-san-khoa-thuong/thong-tin-san-khoa-thuong.component';
import { BoPhanTonThuongComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/bo-phan-ton-thuong/bo-phan-ton-thuong.component';
import {
    BoPhanTonThuongPopupComponent
} from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/bo-phan-ton-thuong-popup/bo-phan-ton-thuong-popup.component';
import { ImageDrawingModule } from 'ngx-image-drawing';
import { BanTheoDoiGayMeHoiSucComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ban-theo-doi-gay-me-hoi-suc/ban-theo-doi-gay-me-hoi-suc.component';
import { BanInTheoDoiGayMeHoiSucComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ban-theo-doi-gay-me-hoi-suc/ban-in-theo-doi-gay-me-hoi-suc/ban-in-theo-doi-gay-me-hoi-suc.component';
import { HoanTraThuocPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/hoan-tra-thuoc-popup/hoan-tra-thuoc-popup.component';
import { BangKiemNhanBnTpmVeKhoaDtComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-kiem-nhan-bn-tpm-ve-khoa-dt/bang-kiem-nhan-bn-tpm-ve-khoa-dt.component';
import { BangKiemNbAtPhauThuatDtPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-kiem-nhan-bn-tpm-ve-khoa-dt/bang-kiem-nb-at-phau-thuat-dt-popup/bang-kiem-nb-at-phau-thuat-dt-popup.component';
import { BangTheoDoiHoiTinhPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-theo-doi-hoi-tinh-popup/bang-theo-doi-hoi-tinh-popup.component';
import { BangTheoDoiHoiTinhComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bang-theo-doi-hoi-tinh/bang-theo-doi-hoi-tinh.component';

import { TongHopYLenhModule } from './tong-hop-y-lenh/tong-hop-y-lenh.module';
import { PhieuCongKhaiThuocComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-thuoc/phieu-cong-khai-thuoc.component';
import { PhieuCongKhaiThuocPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-thuoc/phieu-cong-khai-thuoc-popup/phieu-cong-khai-thuoc-popup.component';
import { PhieuCongKhaiVatTuComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-vat-tu/phieu-cong-khai-vat-tu.component';
import { PhieuCongKhaiVatTuPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-vat-tu/phieu-cong-khai-vat-tu-popup/phieu-cong-khai-vat-tu-popup.component';
import { ThongTinBenhAnTreEmSoSinhComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/thong-tin-tre-em-so-sinh/thong-tin-tre-em-so-sinh.component';
import { ChiTietSuDungPopupComponent } from './danh-sach-dieu-tri-noi-tru/phong-giuong-bs-dieu-tri/chi-tiet-su-dung-popup/chi-tiet-su-dung-popup.component';
import { HoanTraVatTuPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/hoan-tra-vat-tu-popup/hoan-tra-vat-tu-popup.component';
import { PhieuDeNghiTestTruocKhiDungComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-de-nghi-test-truoc-khi-dung/phieu-de-nghi-test-truoc-khi-dung.component';
import { PhieuDeNghiTestTruocKdPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-de-nghi-test-truoc-khi-dung/phieu-de-nghi-test-truoc-kd-popup/phieu-de-nghi-test-truoc-kd-popup.component';
import { GiayChuyenTuyenComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chuyen-tuyen/giay-chuyen-tuyen.component';
import { GiayInChuyenTuyenComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chuyen-tuyen/giay-in-chuyen-tuyen/giay-in-chuyen-tuyen.component';

import { PhieuTheoDoiTruyenDichComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-theo-doi-truyen-dich/phieu-theo-doi-truyen-dich.component';
import { PhieuTheoDoiTruyenDichPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-theo-doi-truyen-dich/phieu-theo-doi-truyen-dich-popup/phieu-theo-doi-truyen-dich-popup.component';
import { BanKiemTruocTiemChungTreEmComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ban-kiem-truoc-tiem-chung-tre-em/ban-kiem-truoc-tiem-chung-tre-em.component';
import { BanKiemTruocTiemChungTreEmPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ban-kiem-truoc-tiem-chung-tre-em-popup/ban-kiem-truoc-tiem-chung-tre-em-popup.component';
import { TaoBenhAnSoSinhPopupComponent } from './danh-sach-dieu-tri-noi-tru/tao-benh-an-so-sinh-popup/tao-benh-an-so-sinh-popup.component';
import { PhieuChamSocSoSinhComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cham-soc-so-sinh/phieu-cham-soc-so-sinh.component';
import { PhieuTheoDoiTruyenMauComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-theo-doi-truyen-mau/phieu-theo-doi-truyen-mau.component';
import { PhieuTheoDoiTruyenMauPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-theo-doi-truyen-mau/phieu-theo-doi-truyen-mau-popup/phieu-theo-doi-truyen-mau-popup.component';
import { TomTatHoSoBenhAnComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/tom-tat-ho-so-ba/tom-tat-ho-so-ba.component';
import { TomTatHoSoBenhAnPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/tom-tat-ho-so-ba-popup/tom-tat-ho-so-ba-popup.component';
import { GiayRaVienComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-ra-vien/giay-ra-vien.component';
import { GiayChungSinhComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-sinh/giay-chung-sinh.component';
import { GiayChungSinhPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-sinh-popup/giay-chung-sinh-popup.component';
import { GiayCkTuNguyenSdThuocComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-ck-tu-nguyen-sd-thuoc/giay-ck-tu-nguyen-sd-thuoc.component';
import { GiayCkTuNguyenSdThuocPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-ck-tu-nguyen-sd-thuoc/giay-ck-tu-nguyen-sd-thuoc-popup/giay-ck-tu-nguyen-sd-thuoc-popup.component';
import { ChungNhanNghiViecHuongBhxhComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-nhan-nghi-viec-huong-bhxh/chung-nhan-nghi-viec-huong-bhxh.component';
import { ChungNhanNghiViecHbhxhPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-nhan-nghi-viec-huong-bhxh/chung-nhan-nghi-viec-hbhxh-popup/chung-nhan-nghi-viec-hbhxh-popup.component';
import { PhieuKhamBenhNoiTruPopupComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/phieu-kham-benh-noi-tru-popup/phieu-kham-benh-noi-tru-popup.component';
import { ChungSinhMangThaiHoComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-sinh-mang-thai-ho/chung-sinh-mang-thai-ho.component';
import { ChungSinhMangThaiHoPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-sinh-mang-thai-ho/chung-sinh-mang-thai-ho-popup/chung-sinh-mang-thai-ho-popup.component';
import { BieuDoChuyenDaComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bieu-do-chuyen-da/bieu-do-chuyen-da.component';
import { PhieuInBieuDoChuyenDaComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bieu-do-chuyen-da/phieu-in-bieu-do-chuyen-da/phieu-in-bieu-do-chuyen-da.component';
import { KhamBenhModule } from '../kham-benh/kham-benh.module';
import { PopupChonPhieuInChiDinhComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/popup-chon-phieu-in-chi-dinh/popup-chon-phieu-in-chi-dinh.component';
import { SuaSuatAnPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-suat-an-popup/sua-suat-an-popup.component';
import { SoSinhSauKhiSinhComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/so-sinh-sau-khi-sinh/so-sinh-sau-khi-sinh.component';
import { ThongTinPhieuPdfPopupComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-phieu-pdf-popup/thong-tin-phieu-pdf-popup.component';
import { SuDungGoiDichVuMarketingPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/su-dung-goi-dich-vu-marketing-popup/su-dung-goi-dich-vu-marketing-popup.component';
import { DichVuKhuyenMaiModule } from '../dich-vu-khuyen-mai/dich-vu-khuyen-mai.module';
import { KetQuaCanLamSanComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/ket-qua-can-lam-sang/ket-qua-can-lam-sang.component';
import { DuyetKetQuaXetNghiemModule } from '../xet-nghiem/duyet-ket-qua/duyet-ket-qua.module';
import { LayMauXetNghiemKetQuaPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/lay-mau-xet-nghiem-ket-qua-popup/lay-mau-xet-nghiem-ket-qua-popup.component';
import { PopupChonLoaiInViewComponent } from '../popup-chon-loai-In/popup-chon-loai-in-view/popup-chon-loai-in-view.component';
import { DichVuChiDinhNgoaiTruComponent } from './danh-sach-dieu-tri-noi-tru/dich-vu-chi-dinh-ngoai-tru/dich-vu-chi-dinh-ngoai-tru.component';
import { ChiDinhNgoaiTruDichVuKhamBenhComponent } from './danh-sach-dieu-tri-noi-tru/dich-vu-chi-dinh-ngoai-tru/chi-dinh-ngoai-tru-dich-vu-kham-benh/chi-dinh-ngoai-tru-dich-vu-kham-benh.component';
import { ChiDinhNgoaiTruDichVuKyThuatComponent } from './danh-sach-dieu-tri-noi-tru/dich-vu-chi-dinh-ngoai-tru/chi-dinh-ngoai-tru-dich-vu-ky-thuat/chi-dinh-ngoai-tru-dich-vu-ky-thuat.component';
import { ChiDinhNgoaiTruKetQuaClsComponent } from './danh-sach-dieu-tri-noi-tru/dich-vu-chi-dinh-ngoai-tru/chi-dinh-ngoai-tru-ket-qua-cls/chi-dinh-ngoai-tru-ket-qua-cls.component';
import { ChiDinhNgoaiTruThuocComponent } from './danh-sach-dieu-tri-noi-tru/dich-vu-chi-dinh-ngoai-tru/chi-dinh-ngoai-tru-thuoc/chi-dinh-ngoai-tru-thuoc.component';
import { ChiDinhNgoaiTruVatTuComponent } from './danh-sach-dieu-tri-noi-tru/dich-vu-chi-dinh-ngoai-tru/chi-dinh-ngoai-tru-vat-tu/chi-dinh-ngoai-tru-vat-tu.component';
import { PhieuCongKhaiDichVuKyThuatComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-dich-vu-ky-thuat/phieu-cong-khai-dich-vu-ky-thuat.component';
// import { PhieuCongKhaiDichVuKyThuatPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-dich-vu-ky-thuat/phieu-cong-khai-dich-vu-ky-thuat-popup/phieu-cong-khai-dich-vu-ky-thuat-popup.component';
// import { PhieuCongKhaiThuocVatTuPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-dich-thuoc-vat-tu/phieu-cong-khai-dich-thuoc-vat-tu-popup/phieu-cong-khai-dich-vu-ky-thuat-popup.component';
import { PhieuCongKhaiThuocVatTuComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-dich-thuoc-vat-tu/phieu-cong-khai-dich-thuoc-vat-tu.component';
import { ThuocRaVienListComponent } from './danh-sach-dieu-tri-noi-tru/thuoc-ra-vien/thuoc-ra-vien-list/thuoc-ra-vien-list.component';
import { BangKeTheoYeuCauComponent } from './danh-sach-dieu-tri-noi-tru/bang-ke-in-theo-yeu-cau-popup/bang-ke-in-theo-yeu-cau-popup.component';
import { SuaThuocRaVienComponent } from './danh-sach-dieu-tri-noi-tru/thuoc-ra-vien/sua-thuoc-ra-vien/sua-thuoc-ra-vien.component';
import { ThuocRaVienPopupComponent } from './danh-sach-dieu-tri-noi-tru/thuoc-ra-vien/thuoc-ra-vien-popup/thuoc-ra-vien-popup.component';
import { PhieuInTruyenMauPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-truyen-mau/phieu-in-truyen-mau-popup.component';
import { ThongTinDieuTriTreSoSinhComponent } from './danh-sach-dieu-tri-noi-tru/ra-vien/thong-tin-dieu-tri-tre-so-sinh-popup/thong-tin-dieu-tri-tre-so-sinh-popup.component';
import { SuaPhaThuocTiemPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-pha-thuoc-tiem-popup/sua-pha-thuoc-tiem-popup.component';
import { SuaPhaThuocTruyenPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sua-pha-thuoc-truyen-popup/sua-pha-thuoc-truyen-popup.component';
import { HoSoChamSocDieuDuongHsComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ho-so-cham-soc-dieu-duong-hs/ho-so-cham-soc-dieu-duong-hs.component';
import { PhieuInSuatAnPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-suat-an-popup/phieu-in-suat-an-popup.component';
import { HoSoChamSocDieuDuongHsPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/ho-so-cham-soc-dieu-duong-hs/ho-so-cham-soc-dieu-duong-hs-popup/ho-so-cham-soc-dieu-duong-hs-popup.component';
import { NoiDungMauLoiDanBacSiPopupComponent } from './danh-sach-dieu-tri-noi-tru/thong-tin-benh-an/noi-dung-mau-loi-dan-bac-si-popup/noi-dung-mau-loi-dan-bac-si-popup.component';
import { BienBanHoiChanSdThuocCoDauComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-hoi-chan-sd-thuoc-co-dau/bien-ban-hoi-chan-sd-thuoc-co-dau.component';
import { ShowPopupEditThuocCoDauComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-hoi-chan-sd-thuoc-co-dau/show-popup-edit-thuoc-co-dau/show-popup-edit-thuoc-co-dau.component';
// import { BienBanHoiChanSdThuocCoDauPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-hoi-chan-sd-thuoc-co-dau/bien-ban-hoi-chan-sd-thuoc-co-dau-popup/bien-ban-hoi-chan-sd-thuoc-co-dau-popup.component';
import { ApDungDonThuocCacNgayPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/ap-dung-don-thuoc-cac-ngay-popup/ap-dung-don-thuoc-cac-ngay-popup.component';
import { ApDungDonThuocDaHetPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/ap-dung-don-thuoc-da-het-popup/ap-dung-don-thuoc-da-het-popup.component';
import { GhiChuMauGrvPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-ra-vien/ghi-chu-mau-grv-popup/ghi-chu-mau-grv-popup.component';
import { SaoChepDonThuocPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sao-chep-don-thuoc-popup/sao-chep-don-thuoc-popup.component';
import { ApDungDonVtytCacNgayPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/ap-dung-don-vtyt-cac-ngay-popup/ap-dung-don-vtyt-cac-ngay-popup.component';
import { ApDungDonVtytDaHetPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/ap-dung-don-vtyt-da-het-popup/ap-dung-don-vtyt-da-het-popup.component';
import { SaoChepVtytPopupComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/sao-chep-vtyt-popup/sao-chep-vtyt-popup.component';
import { GiayNghiDuongThaiNoiTruComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-nghi-duong-thai-noi-tru/giay-nghi-duong-thai-noi-tru.component';
import { GiayNghiDuongThaiNoiTruPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-nghi-duong-thai-noi-tru/giay-nghi-duong-thai-noi-tru-popup/giay-nghi-duong-thai-noi-tru-popup.component';
import { ThongTinPhieuInSuatAnComponent } from './danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/thong-tin-phieu-in-suat-an/thong-tin-phieu-in-suat-an.component';
import { GiayChungNhanPhauThuatComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-nhan-phau-thuat/giay-chung-nhan-phau-thuat.component';
import { GiayChungNhanPhauThuatPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-nhan-phau-thuat-popup/giay-chung-nhan-phau-thuat-popup.component';
import { GiayCamKetKtMoiGayMeHsComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-cam-ket-kt-moi-gay-me-hs/giay-cam-ket-kt-moi-gay-me-hs.component';
import { GiayCamKetKtMoiGayMeHsPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-cam-ket-kt-moi-gay-me-hs-popup/giay-cam-ket-kt-moi-gay-me-hs-popup.component';
import { GiayThoaThuanLuaChonDvKhamTheoYcComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-thoa-thuan-lua-chon-dv-kham-theo-yc/giay-thoa-thuan-lua-chon-dv-kham-theo-yc.component';
import { PopupAddTinhTrangRaVienComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-nhan-phau-thuat/popup-add-tinh-trang-ra-vien/popup-add-tinh-trang-ra-vien.component';
// import { GiayThoaThuanLuaChonDvKhamPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-thoa-thuan-lua-chon-dv-kham-theo-yc/giay-thoa-thuan-lua-chon-dv-kham-popup/giay-thoa-thuan-lua-chon-dv-kham-popup.component';
import { GiayRaVienPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-ra-vien/giay-ra-vien-popup/giay-ra-vien-popup.component';
import { LichSuKhamBenhPopupDetailComponent } from '../kham-benh/kham-benh/kham-benh-lich-su-kham-list/lich-su-kham-benh-popup-detail/lich-su-kham-benh-popup-detail.component';
import { PhieuCongKhaiThuocLoaiInPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-thuoc/phieu-cong-khai-thuoc-loai-in-popup/phieu-cong-khai-thuoc-loai-in-popup.component';
import { PhieuCongKhaiVatTuLoaiInPopupComponent } from './danh-sach-dieu-tri-noi-tru/ho-so-khac/phieu-cong-khai-vat-tu/phieu-cong-khai-vat-tu-loai-in-popup/phieu-cong-khai-vat-tu-loai-in-popup.component';

@NgModule({
    exports: [
        CommonModule,

        FormsModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        LayoutModule,
        MatDialogModule,
        MatTabsModule,
        SharedModule,
        GridModule,
        InputsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatListModule,
        DropDownsModule,
        ChartsModule,
        MatSelectModule,
        DieuTriNoiTruRoutingModule
    ],
    declarations: [
        DanhSachDieuTriNoiTruComponent,
        ChiTietDieuTriNoiTruComponent,
        BsDieuTriComponent,
        CapGiuongComponent,
        ChuyenKhoaComponent,
        PhieuDieuTriComponent,
        PhieuDieuTriThamKhamComponent,
        PhieuDieuTriDvktComponent,
        PhieuDieuTriThuocComponent,
        PhieuDieuTriVatTuComponent,
        PhieuDieuTriTruyenDichComponent,
        PhieuDieuTriTruyenMauComponent,
        PhieuDieuTriSuatAnComponent,
        PhongGiuongBsDieuTriComponent,
        LichSuVaoVienComponent,
        ChiTietKhamChuaBenhComponent,
        LichSuKhamBenhNoiTruComponent,
        ThongTinHanhChinhComponent,
        LichSuChiDinhComponent,
        LichSuChuanDoanComponent,
        LichSuKetQuaClsComponent,
        ChiTietDieuTriPopupComponent,
        ThongTinBenhAnComponent,
        ThongTinBenhAnNgoaiKhoaComponent,
        ThongTinBenhAnNoiKhoaComponent,
        ThongTinBenhAnPhuKhoaComponent,
        ThongTinBenhAnSanKhoaMoThuongComponent,
        TaiNanThuongTichComponent,
        HoSoKhacComponent,
        ThongTinNgoaiKhoaThamMyComponent,
        ThongTinPhuKhoaComponent,
        ThongTinRaVienNoiKhoaNhiComponent,
        ThongTinSanKhoaComponent,
        ThongTinSanKhoaMoComponent,
        RaVienNoiTruComponent,
        PhieuSangLocDinhDuongComponent,
        PhieuKhaiThacTienSuDiUngComponent,
        PhieuDieuTriPopupNgayComponent,
        PhieuDieuTriPopupTaoNgayComponent,
        TrichBienBanHoiChanComponent,
        PhieuTheoDoiChucNangSongComponent,
        TongKetBenhAnNoiKhoaComponent,
        TongKetBenhAnNgoaiKhoaComponent,
        PhieuTomTatCureInfoAndServicesComponent,
        PhieuSoKetMuoiLamNgayDieuTriComponent,
        BienBanHoiChanPhauThuatPopupComponent,
        BienBanHoiChanPhauThuatComponent,
        BienBanCamKetPhauThuatComponent,
        BangKiemAnToanPhauThuatComponent,
        PhieuKhamGayMeTruocMoComponent,
        PhieuKhamGayMeTruocMoPopupComponent,
        BangKiemAnToanPhauThuatPopupComponent,
        BienBanCamKetPhauThuatPopupComponent,
        PhieuCureInfoVaServicesPopupComponent,
        SuaThuocPopupComponent,
        SuaVatTuPopupComponent,
        PhieuInTrichBienBanHoiChanPopupComponent,
        LichSuKhamBenhChiSoSinhTonNoiTruComponent,
        LichSuKhamBenhBoPhanTonThuongNoiTruComponent,
        LichSuKhamBenhKeToaNoiTruComponent,
        PhieuInCongKhaiThuocPopupComponent,
        PhieuInCongKhaiVatTuPopupComponent,
        PhieuInTruyenMauPopupComponent,
        ThongTinPhieuInSuatAnComponent,
        LichSuKhamBenhKeToaNoiTruComponent,
        PhieuInPhieuSoKetMuoiLamComponent,
        SuaTruyenDichPopupComponent,
        SuaTruyenMauPopupComponent,
        ThongTinChiSoSinhTonComponent,
        PhieuDieuTriDvktPopupClsComponent,
        PhieuInKhaiThacTsbComponent,
        PhieuDieuTriPopupInPhieuClsComponent,
        ThongTinTienSuSanKhoaComponent,
        ThongTinTreSoSinhComponent,
        BienBanHoiChanGayMeComponent,
        BienBanGayMePopupComponent,
        ThongTinLanPhauThuatComponent,
        PhieuInSangLocDinhDuongComponent,
        BangKiemAtNguoiBenhPtComponent,
        GiayCamKetKyThuatMoiComponent,
        GiayCamKetKyThuatMoiPopupComponent,
        GiayKhamChuaBenhTheoYcComponent,
        BangTheoDoiHoiTinhComponent,
        BangTheoDoiHoiTinhPopupComponent,
        GiayKhamChuaBenhTheoYcPopupComponent,
        ThongTinLanPhauThuatComponent,
        ThongTinPhieuInComponent,
        PhieuInTheoDoiChucNangComponent,
        ThongTinPhieuInComponent,
        BangKiemAtNguoiBenhPtPopupComponent,
        ThongTinBenhAnKhoaNhiComponent,
        GiayTuNguyenTrietSanComponent,
        GiayInTuNguyenTrietSanComponent,
        BienBanCamKetGayTeComponent,
        BienBanInCamKetGayTeComponent,
        TongKetBenhAnSanKhoaComponent,
        BoPhanTonThuongComponent,
        BoPhanTonThuongPopupComponent,
        BanTheoDoiGayMeHoiSucComponent,
        BanInTheoDoiGayMeHoiSucComponent,
        BangKiemAtNguoiBenhPtPopupComponent,
        BangKiemNhanBnTpmVeKhoaDtComponent,
        BangKiemNbAtPhauThuatDtPopupComponent,
        HoanTraThuocPopupComponent,
        BangKiemNbAtPhauThuatDtPopupComponent,
        PhieuCongKhaiThuocComponent,
        PhieuCongKhaiThuocPopupComponent,
        PhieuCongKhaiVatTuComponent,
        PhieuCongKhaiDichVuKyThuatComponent,
        PhieuCongKhaiThuocVatTuComponent,
        PhieuCongKhaiVatTuPopupComponent,
        ThongTinBenhAnTreEmSoSinhComponent,
        ChiTietSuDungPopupComponent,
        HoanTraVatTuPopupComponent,
        // PhieuCongKhaiDichVuKyThuatPopupComponent,
        // PhieuCongKhaiThuocVatTuPopupComponent,
        PhieuDeNghiTestTruocKhiDungComponent,
        PhieuDeNghiTestTruocKdPopupComponent,
        GiayChuyenTuyenComponent,
        GiayInChuyenTuyenComponent,
        BanKiemTruocTiemChungTreEmComponent,
        PhieuDeNghiTestTruocKdPopupComponent,
        PhieuTheoDoiTruyenDichComponent,
        PhieuTheoDoiTruyenDichPopupComponent,
        BanKiemTruocTiemChungTreEmPopupComponent,
        TaoBenhAnSoSinhPopupComponent,
        PhieuChamSocSoSinhComponent,
        PhieuTheoDoiTruyenDichPopupComponent,
        PhieuTheoDoiTruyenMauComponent,
        PhieuTheoDoiTruyenMauPopupComponent,
        GiayRaVienComponent,
        TomTatHoSoBenhAnComponent,
        TomTatHoSoBenhAnPopupComponent,
        GiayChungSinhComponent,
        GiayChungSinhPopupComponent,
        PhieuTheoDoiTruyenMauPopupComponent,
        GiayCkTuNguyenSdThuocComponent,
        GiayCkTuNguyenSdThuocPopupComponent,
        ChungNhanNghiViecHuongBhxhComponent,
        ChungNhanNghiViecHbhxhPopupComponent,
        PhieuKhamBenhNoiTruPopupComponent,
        ChungNhanNghiViecHbhxhPopupComponent,
        ChungSinhMangThaiHoComponent, 
        ChungSinhMangThaiHoPopupComponent,
        BieuDoChuyenDaComponent,
        PhieuInBieuDoChuyenDaComponent,
        PopupChonPhieuInChiDinhComponent,
        SuaSuatAnPopupComponent,
        SoSinhSauKhiSinhComponent,
        ThongTinPhieuPdfPopupComponent,
        SuDungGoiDichVuMarketingPopupComponent,
        KetQuaCanLamSanComponent,
        LayMauXetNghiemKetQuaPopupComponent,
        SuDungGoiDichVuMarketingPopupComponent,
        DichVuChiDinhNgoaiTruComponent, 
        ChiDinhNgoaiTruDichVuKhamBenhComponent, 
        ChiDinhNgoaiTruDichVuKyThuatComponent, 
        ChiDinhNgoaiTruKetQuaClsComponent, 
        ChiDinhNgoaiTruThuocComponent, 
        ChiDinhNgoaiTruVatTuComponent,
        ThuocRaVienListComponent,
        SuaThuocRaVienComponent,
        BangKeTheoYeuCauComponent,
        ThuocRaVienPopupComponent,
        PhieuInSuatAnPopupComponent,
        NoiDungMauLoiDanBacSiPopupComponent,
        ThongTinDieuTriTreSoSinhComponent,
        BienBanHoiChanSdThuocCoDauComponent,
        ShowPopupEditThuocCoDauComponent,
        // BienBanHoiChanSdThuocCoDauPopupComponent,
        SuaPhaThuocTiemPopupComponent, 
        SuaPhaThuocTruyenPopupComponent,
        HoSoChamSocDieuDuongHsComponent,
        HoSoChamSocDieuDuongHsPopupComponent,
        GhiChuMauGrvPopupComponent,
        ApDungDonThuocCacNgayPopupComponent,
        ApDungDonThuocDaHetPopupComponent,
        SaoChepDonThuocPopupComponent,
        ApDungDonVtytCacNgayPopupComponent, 
        ApDungDonVtytDaHetPopupComponent, 
        SaoChepVtytPopupComponent,
        GiayNghiDuongThaiNoiTruComponent,
        GiayNghiDuongThaiNoiTruPopupComponent,
        GiayChungNhanPhauThuatComponent, 
        GiayChungNhanPhauThuatPopupComponent,
        GiayCamKetKtMoiGayMeHsComponent, 
        GiayCamKetKtMoiGayMeHsPopupComponent,
        GiayThoaThuanLuaChonDvKhamTheoYcComponent,
        PopupAddTinhTrangRaVienComponent,
        // GiayThoaThuanLuaChonDvKhamPopupComponent,
        GiayRaVienPopupComponent,
        PhieuCongKhaiThuocLoaiInPopupComponent,
        PhieuCongKhaiVatTuLoaiInPopupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TooltipModule,
        PageLayoutModule,
        BreadcrumbsModule,
        FlexLayoutModule,
        MatIconModule,
        IconModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatButtonModule,
        LayoutModule,
        MatDialogModule,
        MatTabsModule,
        SharedModule,
        GridModule,
        InputsModule,
        ReactiveFormsModule,
        DieuTriNoiTruRoutingModule,
        MatCheckboxModule,
        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatListModule,
        DropDownsModule,
        ChartsModule,
        DateInputsModule,
        TiepNhanNoiTruModule,
        DropDownButtonModule,
        LayoutModule,
        ImageDrawingModule,
        TongHopYLenhModule,
        KhamBenhModule,
        DichVuKhuyenMaiModule,      
            
    ],
    entryComponents: [
        BangKiemNbAtPhauThuatDtPopupComponent,
        PhieuInPhieuSoKetMuoiLamComponent,
        PhieuInTrichBienBanHoiChanPopupComponent,
        BangKiemAnToanPhauThuatPopupComponent,
        ChiTietKhamChuaBenhComponent,
        ChiTietDieuTriPopupComponent,
        PhieuDieuTriPopupNgayComponent,
        PhieuDieuTriPopupTaoNgayComponent,
        PhieuCureInfoVaServicesPopupComponent,
        SuaThuocPopupComponent,
        SuaVatTuPopupComponent,
        PhieuInCongKhaiThuocPopupComponent,
        PhieuInCongKhaiVatTuPopupComponent,
        PhieuInTruyenMauPopupComponent,
        ThongTinPhieuInSuatAnComponent,
        BienBanCamKetPhauThuatPopupComponent,
        SuaTruyenDichPopupComponent,
        SuaTruyenMauPopupComponent,
        BienBanHoiChanPhauThuatPopupComponent,
        GiayKhamChuaBenhTheoYcPopupComponent,
        BienBanGayMePopupComponent,
        PhieuDieuTriDvktPopupClsComponent,
        PhieuDieuTriPopupInPhieuClsComponent,
        PhieuInKhaiThacTsbComponent,
        BangKiemAtNguoiBenhPtPopupComponent,
        PhieuInSangLocDinhDuongComponent,
        ThongTinPhieuInComponent,
        GiayCamKetKyThuatMoiPopupComponent,
        PhieuInTheoDoiChucNangComponent,
        PhieuKhamGayMeTruocMoPopupComponent,
        GiayInTuNguyenTrietSanComponent,
        BienBanInCamKetGayTeComponent,
        BoPhanTonThuongPopupComponent,
        BanInTheoDoiGayMeHoiSucComponent,
        BangTheoDoiHoiTinhPopupComponent,
        HoanTraThuocPopupComponent,
        BoPhanTonThuongPopupComponent,
        PhieuCongKhaiThuocPopupComponent,
        PhieuCongKhaiVatTuPopupComponent,
        // PhieuCongKhaiDichVuKyThuatPopupComponent,
        // PhieuCongKhaiThuocVatTuPopupComponent,
        ChiTietSuDungPopupComponent,
        HoanTraVatTuPopupComponent,
        PhieuDeNghiTestTruocKdPopupComponent,
        GiayInChuyenTuyenComponent,
        PhieuDeNghiTestTruocKdPopupComponent,
        PhieuTheoDoiTruyenDichPopupComponent,
        BanKiemTruocTiemChungTreEmPopupComponent,
        TaoBenhAnSoSinhPopupComponent,
        PhieuTheoDoiTruyenDichPopupComponent,
        PhieuTheoDoiTruyenMauPopupComponent,
        TomTatHoSoBenhAnPopupComponent,
        GiayChungSinhPopupComponent,
        PhieuTheoDoiTruyenMauPopupComponent,
        GiayCkTuNguyenSdThuocPopupComponent,
        ChungNhanNghiViecHbhxhPopupComponent,
        PhieuKhamBenhNoiTruPopupComponent,
        ChungNhanNghiViecHbhxhPopupComponent,
        ChungSinhMangThaiHoPopupComponent,
        PhieuInBieuDoChuyenDaComponent,
        PopupChonPhieuInChiDinhComponent,
        LoadingComponent,
        SuaSuatAnPopupComponent,
        ThongTinPhieuPdfPopupComponent,
        SuDungGoiDichVuMarketingPopupComponent,
        LayMauXetNghiemKetQuaPopupComponent,
        SuDungGoiDichVuMarketingPopupComponent,
        SuaThuocRaVienComponent,
        BangKeTheoYeuCauComponent,
        ThuocRaVienPopupComponent,
        PhieuInSuatAnPopupComponent,
        ThongTinDieuTriTreSoSinhComponent,
        ShowPopupEditThuocCoDauComponent,
        // BienBanHoiChanSdThuocCoDauPopupComponent,
        SuaPhaThuocTiemPopupComponent, 
        SuaPhaThuocTruyenPopupComponent,
        HoSoChamSocDieuDuongHsComponent,
        HoSoChamSocDieuDuongHsPopupComponent,
        NoiDungMauLoiDanBacSiPopupComponent,
        // BienBanHoiChanSdThuocCoDauPopupComponent,
        ApDungDonThuocCacNgayPopupComponent,
        ApDungDonThuocDaHetPopupComponent,
        GhiChuMauGrvPopupComponent,
        SaoChepDonThuocPopupComponent,
        ApDungDonVtytCacNgayPopupComponent, 
        ApDungDonVtytDaHetPopupComponent, 
        SaoChepVtytPopupComponent,
        GiayNghiDuongThaiNoiTruPopupComponent,
        PopupAddTinhTrangRaVienComponent,
        GiayChungNhanPhauThuatPopupComponent,
        // GiayThoaThuanLuaChonDvKhamPopupComponent,
        GiayCamKetKtMoiGayMeHsComponent, 
        GiayCamKetKtMoiGayMeHsPopupComponent,
        GiayChungNhanPhauThuatPopupComponent,
        GiayRaVienPopupComponent,
        LichSuKhamBenhPopupDetailComponent,
        PhieuCongKhaiThuocLoaiInPopupComponent,
        PhieuCongKhaiVatTuLoaiInPopupComponent
    ],
    providers: [
        DieuTriNoiTruService,
        { provide: BaseService, useClass: DieuTriNoiTruService },
    ]
})
export class DieuTriNoiTruModule { }
