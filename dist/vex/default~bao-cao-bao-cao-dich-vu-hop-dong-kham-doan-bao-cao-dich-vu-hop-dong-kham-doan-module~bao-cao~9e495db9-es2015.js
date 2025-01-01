(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~9e495db9"],{

/***/ "./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.model.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.model.ts ***!
  \*************************************************************************/
/*! exports provided: DieuTriNoiTru, YearModel, MonthModel, DayModel, LstYearOrderByModel, rangeDate, TrichBienBanHoiChan, PhieuSoKet15NgayDieuTri, DSNoiTruTimKiemTimKiemTrangThai, TiepNhanNoiTruTimKiemTimKiemDateRange, ChiTietDieuTriNoiTruViewModel, ThongTinBALink, EnumTrangThaiDieuTriNoiTru, NoiTruHoSoKhacTrichBienBanHoiChan, KeToaThuocDieuTriNoiTru, ThongTinThuocPhieuDieuTri, HoanTraThuocVo, ThongTinHoanTraThuocVo, ThongTinHoanTraThuocChiTietVo, KeVatTuDieuTriNoiTru, HoanTraVatTuVo, ThongTinHoanTraVTVo, ThongTinHoanTraVatTuChiTietVo, KeToaThuocTruyenDichDieuTriNoiTru, KeMauVaChePhamDieuTriNoiTru, InPhieuCongKhaiThuocVatTu, XacNhanInPhieuTruyenMau, CapNhatKhongTinhPhi, EkipDieuTriPhongGiuongBs, YeuCauDichVuGiuongBenhVienPhongGiuongBs, GiuongBenhPhongGiuongBs, ChuyenKhoaPhongGiuongBs, DoiTuongSuDung, KhoaPhongChuyenDen, ThoiDiemNhanGiuong, PhieuKhamThamKhamViewModel, ThoiGianDieuTriSoSinhRaVienViewModel, NoiTruThamKhamChanDoanKemTheoViewModel, KetQuaSinhHieuViewModel, ThoiGianDieuTriSoSinhViewModel, DienBienViewModel, LookupQueryInfo, NoiTruHoSoKhacSoKet15NgayDieuTri, DanhSachSoKet15NgayDieuTri, ExportQueryInfoQueryInfo, FileChuKyModel, DieuTriNoiTruThongTinHanhChinh, BienBanGayMeGayTe, HoSoKhacGiayRaVienJSON, HoSoKhacGiayRaVien, HoSoKhacGiayChungSinh, HoSoKhacGiayChungSinhJSON, HoSoKhacTreSoSinh, ThongTinQuanHeThanNhan, DieuTriNoiTruTaiNanThuongTich, BanKiemTiemChungTreEm, BanKiemTiemChungTreEmJSON, PhieuChamSocSoSinh, PhieuChamSocSoSinhJSON, ThongTinHoSoPhieuChamSocSoSinh, ThongTinTaiNanThuongTich, TaiNanThuongTichTonThuongKhac, ChiDinhDichVuKyThuatMultiselectViewModel, DichVuChiDinhTrungTuGoi, GoiDichVu, GoiCoChietKhau, GoiKhongChietKhau, ListInChiDinh, BienBanGayMeGayTeJSON, GridItemYeuCauDichVuKyThuat, NoiTruHoSoKhacFileDinhKemViewModel, TrangThaiYeuCauDichVuKyThuatObjEnum, NoiTruHoSoKhac, ThongTinHoSoPhieuSangLocDinhDuong, NhuCauDinhDuong, ThongTinHoSoPhieuTheoDoiChucNangSong, ThongTinHoSoGiayTuNguyenTrietSan, NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo, ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo, ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo, NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc, ThongTinBangTheoDoiGayMeHoiSuc, NoiTruHoSoKhacGiayChuyenTuyen, ThongTinGiayChuyenTuyen, NoiTruHoSoKhacBieuDoChuyenDa, ThongTinBieuDoChuyenDa, PhieuKhaiThacTienSuDiUng, NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng, ThemSuatAn, TaoBenhAnSoSinhKhacKhoa, ThongTinDoiTuongSoSinhTiepNhanKhoaKhac, DacDiemTreSoSinh, LanPhauThuat, ChiSoSinhTon, DieuTriNoiTruTongKetBenhAnViewModel, ThongTinTheoDoiSoSinhDuocChon, GridPhauThuatThuThuatViewModel, ChiTietSuDungGiuongTheoNgay, DataChiDinhTheoLoaiDichVuGroup, ListKetQuaXetNghiem, InPhieuXetNghiem, GridChiDinhDichVuNgoaiTruQueryInfoVo, ChiDinhNgoaiTruCanXoa, NoiTruKeToaItem, InThuocRaVienVo, XacNhanInPhieuAn, NoiTruChiDinhPhaThuocTiem, NoiTruChiDinhPhaThuocTruyen, NoiTruChiDinhDuocPham, CapNhatKhongTinhPhiTiemHoacTruyen, LookupItemVoGhiChuGiayRaVien, NoiTruDonThuocTongHopVo, NoiTruDonThuocTongHopChiTietVo, NoiTruDonVTYTTongHopVo, NoiTruDonVTYTTongHopChiTietVo, NgayDieuTriDauTien */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuTriNoiTru", function() { return DieuTriNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearModel", function() { return YearModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthModel", function() { return MonthModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayModel", function() { return DayModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LstYearOrderByModel", function() { return LstYearOrderByModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrichBienBanHoiChan", function() { return TrichBienBanHoiChan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuSoKet15NgayDieuTri", function() { return PhieuSoKet15NgayDieuTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DSNoiTruTimKiemTimKiemTrangThai", function() { return DSNoiTruTimKiemTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiemTimKiemDateRange", function() { return TiepNhanNoiTruTimKiemTimKiemDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietDieuTriNoiTruViewModel", function() { return ChiTietDieuTriNoiTruViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBALink", function() { return ThongTinBALink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumTrangThaiDieuTriNoiTru", function() { return EnumTrangThaiDieuTriNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacTrichBienBanHoiChan", function() { return NoiTruHoSoKhacTrichBienBanHoiChan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeToaThuocDieuTriNoiTru", function() { return KeToaThuocDieuTriNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinThuocPhieuDieuTri", function() { return ThongTinThuocPhieuDieuTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoanTraThuocVo", function() { return HoanTraThuocVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoanTraThuocVo", function() { return ThongTinHoanTraThuocVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoanTraThuocChiTietVo", function() { return ThongTinHoanTraThuocChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeVatTuDieuTriNoiTru", function() { return KeVatTuDieuTriNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoanTraVatTuVo", function() { return HoanTraVatTuVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoanTraVTVo", function() { return ThongTinHoanTraVTVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoanTraVatTuChiTietVo", function() { return ThongTinHoanTraVatTuChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeToaThuocTruyenDichDieuTriNoiTru", function() { return KeToaThuocTruyenDichDieuTriNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeMauVaChePhamDieuTriNoiTru", function() { return KeMauVaChePhamDieuTriNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuCongKhaiThuocVatTu", function() { return InPhieuCongKhaiThuocVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanInPhieuTruyenMau", function() { return XacNhanInPhieuTruyenMau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatKhongTinhPhi", function() { return CapNhatKhongTinhPhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EkipDieuTriPhongGiuongBs", function() { return EkipDieuTriPhongGiuongBs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDichVuGiuongBenhVienPhongGiuongBs", function() { return YeuCauDichVuGiuongBenhVienPhongGiuongBs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiuongBenhPhongGiuongBs", function() { return GiuongBenhPhongGiuongBs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuyenKhoaPhongGiuongBs", function() { return ChuyenKhoaPhongGiuongBs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoiTuongSuDung", function() { return DoiTuongSuDung; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoaPhongChuyenDen", function() { return KhoaPhongChuyenDen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThoiDiemNhanGiuong", function() { return ThoiDiemNhanGiuong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuKhamThamKhamViewModel", function() { return PhieuKhamThamKhamViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThoiGianDieuTriSoSinhRaVienViewModel", function() { return ThoiGianDieuTriSoSinhRaVienViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruThamKhamChanDoanKemTheoViewModel", function() { return NoiTruThamKhamChanDoanKemTheoViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaSinhHieuViewModel", function() { return KetQuaSinhHieuViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThoiGianDieuTriSoSinhViewModel", function() { return ThoiGianDieuTriSoSinhViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DienBienViewModel", function() { return DienBienViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupQueryInfo", function() { return LookupQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacSoKet15NgayDieuTri", function() { return NoiTruHoSoKhacSoKet15NgayDieuTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachSoKet15NgayDieuTri", function() { return DanhSachSoKet15NgayDieuTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileChuKyModel", function() { return FileChuKyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuTriNoiTruThongTinHanhChinh", function() { return DieuTriNoiTruThongTinHanhChinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienBanGayMeGayTe", function() { return BienBanGayMeGayTe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoKhacGiayRaVienJSON", function() { return HoSoKhacGiayRaVienJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoKhacGiayRaVien", function() { return HoSoKhacGiayRaVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoKhacGiayChungSinh", function() { return HoSoKhacGiayChungSinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoKhacGiayChungSinhJSON", function() { return HoSoKhacGiayChungSinhJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoKhacTreSoSinh", function() { return HoSoKhacTreSoSinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinQuanHeThanNhan", function() { return ThongTinQuanHeThanNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuTriNoiTruTaiNanThuongTich", function() { return DieuTriNoiTruTaiNanThuongTich; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanKiemTiemChungTreEm", function() { return BanKiemTiemChungTreEm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanKiemTiemChungTreEmJSON", function() { return BanKiemTiemChungTreEmJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuChamSocSoSinh", function() { return PhieuChamSocSoSinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuChamSocSoSinhJSON", function() { return PhieuChamSocSoSinhJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoSoPhieuChamSocSoSinh", function() { return ThongTinHoSoPhieuChamSocSoSinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinTaiNanThuongTich", function() { return ThongTinTaiNanThuongTich; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaiNanThuongTichTonThuongKhac", function() { return TaiNanThuongTichTonThuongKhac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiDinhDichVuKyThuatMultiselectViewModel", function() { return ChiDinhDichVuKyThuatMultiselectViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuChiDinhTrungTuGoi", function() { return DichVuChiDinhTrungTuGoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiDichVu", function() { return GoiDichVu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiCoChietKhau", function() { return GoiCoChietKhau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiKhongChietKhau", function() { return GoiKhongChietKhau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInChiDinh", function() { return ListInChiDinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienBanGayMeGayTeJSON", function() { return BienBanGayMeGayTeJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridItemYeuCauDichVuKyThuat", function() { return GridItemYeuCauDichVuKyThuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacFileDinhKemViewModel", function() { return NoiTruHoSoKhacFileDinhKemViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiYeuCauDichVuKyThuatObjEnum", function() { return TrangThaiYeuCauDichVuKyThuatObjEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhac", function() { return NoiTruHoSoKhac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoSoPhieuSangLocDinhDuong", function() { return ThongTinHoSoPhieuSangLocDinhDuong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhuCauDinhDuong", function() { return NhuCauDinhDuong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoSoPhieuTheoDoiChucNangSong", function() { return ThongTinHoSoPhieuTheoDoiChucNangSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoSoGiayTuNguyenTrietSan", function() { return ThongTinHoSoGiayTuNguyenTrietSan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo", function() { return NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo", function() { return ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo", function() { return ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc", function() { return NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBangTheoDoiGayMeHoiSuc", function() { return ThongTinBangTheoDoiGayMeHoiSuc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacGiayChuyenTuyen", function() { return NoiTruHoSoKhacGiayChuyenTuyen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinGiayChuyenTuyen", function() { return ThongTinGiayChuyenTuyen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacBieuDoChuyenDa", function() { return NoiTruHoSoKhacBieuDoChuyenDa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBieuDoChuyenDa", function() { return ThongTinBieuDoChuyenDa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuKhaiThacTienSuDiUng", function() { return PhieuKhaiThacTienSuDiUng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng", function() { return NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemSuatAn", function() { return ThemSuatAn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaoBenhAnSoSinhKhacKhoa", function() { return TaoBenhAnSoSinhKhacKhoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDoiTuongSoSinhTiepNhanKhoaKhac", function() { return ThongTinDoiTuongSoSinhTiepNhanKhoaKhac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DacDiemTreSoSinh", function() { return DacDiemTreSoSinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanPhauThuat", function() { return LanPhauThuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiSoSinhTon", function() { return ChiSoSinhTon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuTriNoiTruTongKetBenhAnViewModel", function() { return DieuTriNoiTruTongKetBenhAnViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinTheoDoiSoSinhDuocChon", function() { return ThongTinTheoDoiSoSinhDuocChon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridPhauThuatThuThuatViewModel", function() { return GridPhauThuatThuThuatViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietSuDungGiuongTheoNgay", function() { return ChiTietSuDungGiuongTheoNgay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataChiDinhTheoLoaiDichVuGroup", function() { return DataChiDinhTheoLoaiDichVuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKetQuaXetNghiem", function() { return ListKetQuaXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuXetNghiem", function() { return InPhieuXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridChiDinhDichVuNgoaiTruQueryInfoVo", function() { return GridChiDinhDichVuNgoaiTruQueryInfoVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiDinhNgoaiTruCanXoa", function() { return ChiDinhNgoaiTruCanXoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruKeToaItem", function() { return NoiTruKeToaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InThuocRaVienVo", function() { return InThuocRaVienVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanInPhieuAn", function() { return XacNhanInPhieuAn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruChiDinhPhaThuocTiem", function() { return NoiTruChiDinhPhaThuocTiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruChiDinhPhaThuocTruyen", function() { return NoiTruChiDinhPhaThuocTruyen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruChiDinhDuocPham", function() { return NoiTruChiDinhDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatKhongTinhPhiTiemHoacTruyen", function() { return CapNhatKhongTinhPhiTiemHoacTruyen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupItemVoGhiChuGiayRaVien", function() { return LookupItemVoGhiChuGiayRaVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruDonThuocTongHopVo", function() { return NoiTruDonThuocTongHopVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruDonThuocTongHopChiTietVo", function() { return NoiTruDonThuocTongHopChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruDonVTYTTongHopVo", function() { return NoiTruDonVTYTTongHopVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruDonVTYTTongHopChiTietVo", function() { return NoiTruDonVTYTTongHopChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgayDieuTriDauTien", function() { return NgayDieuTriDauTien; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");


class DieuTriNoiTru {
}
class YearModel {
    constructor(Year = null, Expands = false, Months = new Array()) {
        this.Year = Year;
        this.Expands = Expands;
        this.Months = Months;
    }
}
class MonthModel {
    constructor(Month = null, Days = new Array(), DayCopies = new Array()) {
        this.Month = Month;
        this.Days = Days;
        this.DayCopies = DayCopies;
    }
}
class DayModel {
    constructor(Day = null, Year = null, Month = null, FullDate = null, FullDateDisplay = null, FullDateNext = null, FullDateNextDisplay = null, PhieuDieuTriIdNext = null, FullDatePre = null, FullDatePreDisplay = null, PhieuDieuTriIdPre = null, KhoaId = null, PhieuDieuTriId = null, LaNgayDieuTriDauTien = null, CoDonThuocNoiTru = null, CoDonVTYTNoiTru = null) {
        this.Day = Day;
        this.Year = Year;
        this.Month = Month;
        this.FullDate = FullDate;
        this.FullDateDisplay = FullDateDisplay;
        this.FullDateNext = FullDateNext;
        this.FullDateNextDisplay = FullDateNextDisplay;
        this.PhieuDieuTriIdNext = PhieuDieuTriIdNext;
        this.FullDatePre = FullDatePre;
        this.FullDatePreDisplay = FullDatePreDisplay;
        this.PhieuDieuTriIdPre = PhieuDieuTriIdPre;
        this.KhoaId = KhoaId;
        this.PhieuDieuTriId = PhieuDieuTriId;
        this.LaNgayDieuTriDauTien = LaNgayDieuTriDauTien;
        this.CoDonThuocNoiTru = CoDonThuocNoiTru;
        this.CoDonVTYTNoiTru = CoDonVTYTNoiTru;
    }
}
class LstYearOrderByModel {
    constructor(Date = null, KhoaId = null, PhieuDieuTriId = null, LaNgayDieuTriDauTien = null, LaNgayDieuTriTamThoi = null, CoDonThuocNoiTru = null, CoDonVTYTNoiTru = null) {
        this.Date = Date;
        this.KhoaId = KhoaId;
        this.PhieuDieuTriId = PhieuDieuTriId;
        this.LaNgayDieuTriDauTien = LaNgayDieuTriDauTien;
        this.LaNgayDieuTriTamThoi = LaNgayDieuTriTamThoi;
        this.CoDonThuocNoiTru = CoDonThuocNoiTru;
        this.CoDonVTYTNoiTru = CoDonVTYTNoiTru;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class TrichBienBanHoiChan {
    constructor(HoiChanLuc = null, HoiChanLucStringUTC = null, ChuToa = null, ThuKy = null, ChuToaText = null, ThuKyText = null, NguoiThamGia = [], ChanDoan = null, TomTat = null, KetLuan = null, HuongDieuTriTiep = null, TaiKhoanDangNhap = null, NgayThucHien = null, DaDieuTriTuNgay = null, DaDieuTriDenNgay = null, TaiSoGiuong = null, Phong = null, Khoa = null, FileChuKy = []) {
        this.HoiChanLuc = HoiChanLuc;
        this.HoiChanLucStringUTC = HoiChanLucStringUTC;
        this.ChuToa = ChuToa;
        this.ThuKy = ThuKy;
        this.ChuToaText = ChuToaText;
        this.ThuKyText = ThuKyText;
        this.NguoiThamGia = NguoiThamGia;
        this.ChanDoan = ChanDoan;
        this.TomTat = TomTat;
        this.KetLuan = KetLuan;
        this.HuongDieuTriTiep = HuongDieuTriTiep;
        this.TaiKhoanDangNhap = TaiKhoanDangNhap;
        this.NgayThucHien = NgayThucHien;
        this.DaDieuTriTuNgay = DaDieuTriTuNgay;
        this.DaDieuTriDenNgay = DaDieuTriDenNgay;
        this.TaiSoGiuong = TaiSoGiuong;
        this.Phong = Phong;
        this.Khoa = Khoa;
        this.FileChuKy = FileChuKy;
    }
}
class PhieuSoKet15NgayDieuTri {
    constructor(DanhGiaKetQua = null, HuongDieuTriVaTienLuong = null, TaiKhoanDangNhap = null, NgayThucHien = null, TuNgay = null, DenNgay = null, NgayThucHienText = null, BSDieuTri = null, TruongKhoa = null, BSDieuTriText = null, TruongKhoaText = null, SoYTe = null, BV = null, SoVaoVien = null, HoTenNgBenh = null, TuoiNgBenh = null, GTNgBenh = null, DiaChi = null, Khoa = null, Buong = null, Giuong = null, ChanDoan = null, DienBienLS = null, XetNghiemCLS = null, QuaTrinhDieuTri = null, DanhGiaKQ = null, HuongDieuTriTiep = null, HoTenTruongKhoa = null, HoTenBacSi = null, FileChuKy = []) {
        this.DanhGiaKetQua = DanhGiaKetQua;
        this.HuongDieuTriVaTienLuong = HuongDieuTriVaTienLuong;
        this.TaiKhoanDangNhap = TaiKhoanDangNhap;
        this.NgayThucHien = NgayThucHien;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.NgayThucHienText = NgayThucHienText;
        this.BSDieuTri = BSDieuTri;
        this.TruongKhoa = TruongKhoa;
        this.BSDieuTriText = BSDieuTriText;
        this.TruongKhoaText = TruongKhoaText;
        this.SoYTe = SoYTe;
        this.BV = BV;
        this.SoVaoVien = SoVaoVien;
        this.HoTenNgBenh = HoTenNgBenh;
        this.TuoiNgBenh = TuoiNgBenh;
        this.GTNgBenh = GTNgBenh;
        this.DiaChi = DiaChi;
        this.Khoa = Khoa;
        this.Buong = Buong;
        this.Giuong = Giuong;
        this.ChanDoan = ChanDoan;
        this.DienBienLS = DienBienLS;
        this.XetNghiemCLS = XetNghiemCLS;
        this.QuaTrinhDieuTri = QuaTrinhDieuTri;
        this.DanhGiaKQ = DanhGiaKQ;
        this.HuongDieuTriTiep = HuongDieuTriTiep;
        this.HoTenTruongKhoa = HoTenTruongKhoa;
        this.HoTenBacSi = HoTenBacSi;
        this.FileChuKy = FileChuKy;
    }
}
class DSNoiTruTimKiemTimKiemTrangThai {
    constructor(SearchString = null, KhoaPhongId = null, DangDieuTri = true, ChuyenVien = false, ChuyenKhoa = false, DaRaVien = false, TuNgayDenNgay = new TiepNhanNoiTruTimKiemTimKiemDateRange(), TuNgayDenNgayRaVien = new TiepNhanNoiTruTimKiemTimKiemDateRange()) {
        this.SearchString = SearchString;
        this.KhoaPhongId = KhoaPhongId;
        this.DangDieuTri = DangDieuTri;
        this.ChuyenVien = ChuyenVien;
        this.ChuyenKhoa = ChuyenKhoa;
        this.DaRaVien = DaRaVien;
        this.TuNgayDenNgay = TuNgayDenNgay;
        this.TuNgayDenNgayRaVien = TuNgayDenNgayRaVien;
    }
}
class TiepNhanNoiTruTimKiemTimKiemDateRange {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class ChiTietDieuTriNoiTruViewModel {
    constructor(Id = null, BenhNhanId = null, MaYeuCauTiepNhan = null, MaBenhNhan = null, HoTen = null, Tuoi = null, GioiTinh = null, DiaChi = null, NgheNghiep = null, SoBenhAn = null, LoaiBenhAn = null, LoaiBenhAnEnum = null, Khoa = null, KhoaId = null, BacSiDieuTri = null, Phong = null, Giuong = null, DoiTuong = null, TrangThaiId = null, TrangThai = null, SoTaiKhoan = null, SoDuTaiKhoan = null, SoTienConLai = null, CoBHYT = null, KetThucBenhAn = null, DaQuyetToan = false, BenhAnCons = [], BenhAnMe = null, CoDichVuKhuyenMai = false, CungKhoaDangNhap = true, IsDaChiDinhBacSi = false, IsDaChiDinhGiuong = false, KhoaPhuSanId = null, DaChiDinhGiuongVaBacSi = false, 
    // cập nhật 03/06/2021: lấy YeuCauTiepNhanId của ngoại trú -> hiện thông tin tin trong tab Dịch vụ chỉ định ngoại trú
    YeuCauTiepNhanNgoaiTruId = null, 
    //gói dịch vụ marketing
    GoiDichVus = [], 
    //BVHD-3800
    LaCapCuu = null) {
        this.Id = Id;
        this.BenhNhanId = BenhNhanId;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.MaBenhNhan = MaBenhNhan;
        this.HoTen = HoTen;
        this.Tuoi = Tuoi;
        this.GioiTinh = GioiTinh;
        this.DiaChi = DiaChi;
        this.NgheNghiep = NgheNghiep;
        this.SoBenhAn = SoBenhAn;
        this.LoaiBenhAn = LoaiBenhAn;
        this.LoaiBenhAnEnum = LoaiBenhAnEnum;
        this.Khoa = Khoa;
        this.KhoaId = KhoaId;
        this.BacSiDieuTri = BacSiDieuTri;
        this.Phong = Phong;
        this.Giuong = Giuong;
        this.DoiTuong = DoiTuong;
        this.TrangThaiId = TrangThaiId;
        this.TrangThai = TrangThai;
        this.SoTaiKhoan = SoTaiKhoan;
        this.SoDuTaiKhoan = SoDuTaiKhoan;
        this.SoTienConLai = SoTienConLai;
        this.CoBHYT = CoBHYT;
        this.KetThucBenhAn = KetThucBenhAn;
        this.DaQuyetToan = DaQuyetToan;
        this.BenhAnCons = BenhAnCons;
        this.BenhAnMe = BenhAnMe;
        this.CoDichVuKhuyenMai = CoDichVuKhuyenMai;
        this.CungKhoaDangNhap = CungKhoaDangNhap;
        this.IsDaChiDinhBacSi = IsDaChiDinhBacSi;
        this.IsDaChiDinhGiuong = IsDaChiDinhGiuong;
        this.KhoaPhuSanId = KhoaPhuSanId;
        this.DaChiDinhGiuongVaBacSi = DaChiDinhGiuongVaBacSi;
        this.YeuCauTiepNhanNgoaiTruId = YeuCauTiepNhanNgoaiTruId;
        this.GoiDichVus = GoiDichVus;
        this.LaCapCuu = LaCapCuu;
    }
}
class ThongTinBALink {
    constructor(BenhAnId = 0, SoBenhAn = null) {
        this.BenhAnId = BenhAnId;
        this.SoBenhAn = SoBenhAn;
    }
}
var EnumTrangThaiDieuTriNoiTru;
(function (EnumTrangThaiDieuTriNoiTru) {
    EnumTrangThaiDieuTriNoiTru[EnumTrangThaiDieuTriNoiTru["DangDieuTri"] = 1] = "DangDieuTri";
    EnumTrangThaiDieuTriNoiTru[EnumTrangThaiDieuTriNoiTru["DaRaVien"] = 2] = "DaRaVien";
    EnumTrangThaiDieuTriNoiTru[EnumTrangThaiDieuTriNoiTru["ChuyenVien"] = 3] = "ChuyenVien";
})(EnumTrangThaiDieuTriNoiTru || (EnumTrangThaiDieuTriNoiTru = {}));
class NoiTruHoSoKhacTrichBienBanHoiChan {
    constructor(Id = 0, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FileChuKy = [], ThoiGianHoiChan = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FileChuKy = FileChuKy;
        this.ThoiGianHoiChan = ThoiGianHoiChan;
    }
}
class KeToaThuocDieuTriNoiTru {
    constructor(Id = 0, KhoId = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, DungSang = null, DungTrua = null, DungChieu = null, DungToi = null, ThoiGianDungSang = null, ThoiGianDungTrua = null, ThoiGianDungChieu = null, ThoiGianDungToi = null, SoLanDungTrongNgay = null, SoLanDungTrongNgayString = null, SoLuong = null, GhiChu = null, YeuCauTiepNhanId = null, TinhTrang = null, SoLanTrenVien = null, CachGioDungThuoc = null, LieuDungTrenNgay = null, LieuDungTrenNgayDisplay = null, 
    //DỊCH TRUYỀN
    LaDichTruyen = null, TocDoTruyen = null, DonViTocDoTruyen = null, DonViTocDoTruyenDisplay = null, ThoiGianBatDauTruyen = null, CachGioTruyenDich = null, GioSuDung = null, TheTich = null, PhieuDieuTriHienTaiId = null, KhongTinhPhi = null, LoaiKho = null, IsDelete = false, KhuVuc = null, SoThuTu = null, LaTangSTT = null) {
        this.Id = Id;
        this.KhoId = KhoId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.DungSang = DungSang;
        this.DungTrua = DungTrua;
        this.DungChieu = DungChieu;
        this.DungToi = DungToi;
        this.ThoiGianDungSang = ThoiGianDungSang;
        this.ThoiGianDungTrua = ThoiGianDungTrua;
        this.ThoiGianDungChieu = ThoiGianDungChieu;
        this.ThoiGianDungToi = ThoiGianDungToi;
        this.SoLanDungTrongNgay = SoLanDungTrongNgay;
        this.SoLanDungTrongNgayString = SoLanDungTrongNgayString;
        this.SoLuong = SoLuong;
        this.GhiChu = GhiChu;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.TinhTrang = TinhTrang;
        this.SoLanTrenVien = SoLanTrenVien;
        this.CachGioDungThuoc = CachGioDungThuoc;
        this.LieuDungTrenNgay = LieuDungTrenNgay;
        this.LieuDungTrenNgayDisplay = LieuDungTrenNgayDisplay;
        this.LaDichTruyen = LaDichTruyen;
        this.TocDoTruyen = TocDoTruyen;
        this.DonViTocDoTruyen = DonViTocDoTruyen;
        this.DonViTocDoTruyenDisplay = DonViTocDoTruyenDisplay;
        this.ThoiGianBatDauTruyen = ThoiGianBatDauTruyen;
        this.CachGioTruyenDich = CachGioTruyenDich;
        this.GioSuDung = GioSuDung;
        this.TheTich = TheTich;
        this.PhieuDieuTriHienTaiId = PhieuDieuTriHienTaiId;
        this.KhongTinhPhi = KhongTinhPhi;
        this.LoaiKho = LoaiKho;
        this.IsDelete = IsDelete;
        this.KhuVuc = KhuVuc;
        this.SoThuTu = SoThuTu;
        this.LaTangSTT = LaTangSTT;
    }
}
class ThongTinThuocPhieuDieuTri {
    constructor(YeuCauTiepNhanId = null, DuocPhamBenhVienId = null, LoaiDuocPham = null, KhoId = null, NoiTruPhieuDieuTriId = null, KhuVuc = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LoaiDuocPham = LoaiDuocPham;
        this.KhoId = KhoId;
        this.NoiTruPhieuDieuTriId = NoiTruPhieuDieuTriId;
        this.KhuVuc = KhuVuc;
    }
}
class HoanTraThuocVo {
    constructor(YeuCauTiepNhanId = null, KhoId = null, NoiTruChiDinhDuocPhamId = null, LaDichTruyen = null, LaDuocPhamBHYT = null, CoYeuCauTraDuocPhamTuBenhNhanChiTiet = null, LaTuTruc = null, SoLuong = null, LoaiKho = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhoId = KhoId;
        this.NoiTruChiDinhDuocPhamId = NoiTruChiDinhDuocPhamId;
        this.LaDichTruyen = LaDichTruyen;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.CoYeuCauTraDuocPhamTuBenhNhanChiTiet = CoYeuCauTraDuocPhamTuBenhNhanChiTiet;
        this.LaTuTruc = LaTuTruc;
        this.SoLuong = SoLuong;
        this.LoaiKho = LoaiKho;
    }
}
class ThongTinHoanTraThuocVo {
    constructor(Id = null, YeuCauTiepNhanId = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, Ten = null, TenKho = null, NhanVienYeuCauId = null, TenNhanVienYeuCau = null, LaDichTruyen = null, NgayYeuCau = null, CoYeuCauTraDuocPhamTuBenhNhanChiTiet = null, YeuCauDuocPhamBenhViens = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Ten = Ten;
        this.TenKho = TenKho;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.LaDichTruyen = LaDichTruyen;
        this.NgayYeuCau = NgayYeuCau;
        this.CoYeuCauTraDuocPhamTuBenhNhanChiTiet = CoYeuCauTraDuocPhamTuBenhNhanChiTiet;
        this.YeuCauDuocPhamBenhViens = YeuCauDuocPhamBenhViens;
    }
}
class ThongTinHoanTraThuocChiTietVo {
    constructor(YeuCauDuocPhamBenhVienId = null, SoLuong = null, SoLuongDisplay = null, DonGia = null, ThanhTien = null, SoLuongDaTra = null, SoLuongTra = null) {
        this.YeuCauDuocPhamBenhVienId = YeuCauDuocPhamBenhVienId;
        this.SoLuong = SoLuong;
        this.SoLuongDisplay = SoLuongDisplay;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.SoLuongDaTra = SoLuongDaTra;
        this.SoLuongTra = SoLuongTra;
    }
}
class KeVatTuDieuTriNoiTru {
    constructor(Id = 0, KhoId = null, VatTuBenhVienId = null, YeuCauDichVuKyThuatId = null, LaVatTuBHYT = null, LoaiKho = null, SoLuong = null, KhongTinhPhi = null, YeuCauTiepNhanId = null, PhieuDieuTriHienTaiId = null, Ids = null) {
        this.Id = Id;
        this.KhoId = KhoId;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.LoaiKho = LoaiKho;
        this.SoLuong = SoLuong;
        this.KhongTinhPhi = KhongTinhPhi;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.PhieuDieuTriHienTaiId = PhieuDieuTriHienTaiId;
        this.Ids = Ids;
    }
}
class HoanTraVatTuVo {
    constructor(Ids = [], YeuCauTiepNhanId = null, YeuCauVatTuBenhVienId = null, KhoId = null, LaVatTuBHYT = null, CoYeuCauTraVTTuBenhNhanChiTiet = null, LaTuTruc = null, SoLuong = null) {
        this.Ids = Ids;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.YeuCauVatTuBenhVienId = YeuCauVatTuBenhVienId;
        this.KhoId = KhoId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.CoYeuCauTraVTTuBenhNhanChiTiet = CoYeuCauTraVTTuBenhNhanChiTiet;
        this.LaTuTruc = LaTuTruc;
        this.SoLuong = SoLuong;
    }
}
class ThongTinHoanTraVTVo {
    constructor(Id = null, VatTuBenhVienId = null, LaVatTuBHYT = null, YeuCauTiepNhanId = null, Ten = null, TenKho = null, NhanVienYeuCauId = null, TenNhanVienYeuCau = null, NgayYeuCau = null, 
    // public CoYeuCauTraVTTuBenhNhanChiTiet: boolean = null,
    SoLuong = null, DonGia = null, ThanhTien = null, SoLuongDaTra = null, SoLuongTra = null, SoLuongDisplay = null, YeuCauVatTuBenhViens = []) {
        this.Id = Id;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.Ten = Ten;
        this.TenKho = TenKho;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCau = NgayYeuCau;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.SoLuongDaTra = SoLuongDaTra;
        this.SoLuongTra = SoLuongTra;
        this.SoLuongDisplay = SoLuongDisplay;
        this.YeuCauVatTuBenhViens = YeuCauVatTuBenhViens;
    }
}
class ThongTinHoanTraVatTuChiTietVo {
    constructor(YeuCauVatTuBenhVienId = null, SoLuong = null, SoLuongDisplay = null, DonGia = null, ThanhTien = null, SoLuongDaTra = null, SoLuongTra = null) {
        this.YeuCauVatTuBenhVienId = YeuCauVatTuBenhVienId;
        this.SoLuong = SoLuong;
        this.SoLuongDisplay = SoLuongDisplay;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.SoLuongDaTra = SoLuongDaTra;
        this.SoLuongTra = SoLuongTra;
    }
}
class KeToaThuocTruyenDichDieuTriNoiTru {
    constructor(Id = null, YeuCauTiepNhanId = null, KhoId = null, LaDuocPhamBHYT = null, DuocPhamBenhVienId = null, SoLanDungTrongNgay = null, SoLuong = null, TocDoTruyen = null, DonViTocDoTruyen = null, DonViTocDoTruyenDisplay = null, ThoiGianBatDauTruyen = null, CachGioTruyenDich = null, GhiChu = null, GioSuDung = null, TheTich = null, TinhTrang = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhoId = KhoId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.SoLanDungTrongNgay = SoLanDungTrongNgay;
        this.SoLuong = SoLuong;
        this.TocDoTruyen = TocDoTruyen;
        this.DonViTocDoTruyen = DonViTocDoTruyen;
        this.DonViTocDoTruyenDisplay = DonViTocDoTruyenDisplay;
        this.ThoiGianBatDauTruyen = ThoiGianBatDauTruyen;
        this.CachGioTruyenDich = CachGioTruyenDich;
        this.GhiChu = GhiChu;
        this.GioSuDung = GioSuDung;
        this.TheTich = TheTich;
        this.TinhTrang = TinhTrang;
    }
}
class KeMauVaChePhamDieuTriNoiTru {
    constructor(Id = null, YeuCauTiepNhanId = null, NoiTruPhieuDieuTriId = null, MauVaChePhamId = null, Ten = null, Ma = null, NhomMauDisplay = null, NhomMauRH = null, NhomMau = null, YeuToRh = null, TheTich = null, DonGia = null, ThanhTien = null, ThoiGianBatDauTruyen = null, DonGiaBan = null, DonGiaBaoHiem = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NoiTruPhieuDieuTriId = NoiTruPhieuDieuTriId;
        this.MauVaChePhamId = MauVaChePhamId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.NhomMauDisplay = NhomMauDisplay;
        this.NhomMauRH = NhomMauRH;
        this.NhomMau = NhomMau;
        this.YeuToRh = YeuToRh;
        this.TheTich = TheTich;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.ThoiGianBatDauTruyen = ThoiGianBatDauTruyen;
        this.DonGiaBan = DonGiaBan;
        this.DonGiaBaoHiem = DonGiaBaoHiem;
    }
}
class InPhieuCongKhaiThuocVatTu {
    constructor(YeuCauTiepNhanId = null, NoiTruPhieuDieuTriId = null, LoaiThuocVatTu = null, HostingName = null, Ids = []) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NoiTruPhieuDieuTriId = NoiTruPhieuDieuTriId;
        this.LoaiThuocVatTu = LoaiThuocVatTu;
        this.HostingName = HostingName;
        this.Ids = Ids;
    }
}
class XacNhanInPhieuTruyenMau {
    constructor(YeuCauTiepNhanId = null, PhieuDieuTriId = null, Hosting = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.PhieuDieuTriId = PhieuDieuTriId;
        this.Hosting = Hosting;
    }
}
class CapNhatKhongTinhPhi {
    constructor(Id = 0, YeuCauTiepNhanId = 0, KhongTinhPhi = null, LaThuoc = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhongTinhPhi = KhongTinhPhi;
        this.LaThuoc = LaThuoc;
    }
}
class EkipDieuTriPhongGiuongBs {
    constructor(Id = null, NoiTruBenhAnId = null, BacSiId = null, BacSiDisplay = null, DieuDuongId = null, DieuDuongDisplay = null, TuNgay = null, DenNgay = null, NhanVienLapId = null, NhanVienLapDisplay = null, KhoaPhongDieuTriId = null) {
        this.Id = Id;
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.BacSiId = BacSiId;
        this.BacSiDisplay = BacSiDisplay;
        this.DieuDuongId = DieuDuongId;
        this.DieuDuongDisplay = DieuDuongDisplay;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.NhanVienLapId = NhanVienLapId;
        this.NhanVienLapDisplay = NhanVienLapDisplay;
        this.KhoaPhongDieuTriId = KhoaPhongDieuTriId;
    }
}
class YeuCauDichVuGiuongBenhVienPhongGiuongBs {
    constructor(Id = 0, YeuCauTiepNhanId = null, GiuongBenhId = null, GiuongBenhDisplay = null, LoaiGiuong = null, LoaiGiuongDisplay = null, BaoPhong = false, ThoiDiemBatDauSuDung = null, ThoiDiemKetThucSuDung = null, DichVuGiuongBenhVienId = null, DichVuGiuongBenhVienDisplay = null, DoiTuongSuDung = null, DoiTuongSuDungDisplay = null, GhiChu = null, LoaiGiaDichVuCoHieuLuc = null, YeuCauGoiDichVuId = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.GiuongBenhId = GiuongBenhId;
        this.GiuongBenhDisplay = GiuongBenhDisplay;
        this.LoaiGiuong = LoaiGiuong;
        this.LoaiGiuongDisplay = LoaiGiuongDisplay;
        this.BaoPhong = BaoPhong;
        this.ThoiDiemBatDauSuDung = ThoiDiemBatDauSuDung;
        this.ThoiDiemKetThucSuDung = ThoiDiemKetThucSuDung;
        this.DichVuGiuongBenhVienId = DichVuGiuongBenhVienId;
        this.DichVuGiuongBenhVienDisplay = DichVuGiuongBenhVienDisplay;
        this.DoiTuongSuDung = DoiTuongSuDung;
        this.DoiTuongSuDungDisplay = DoiTuongSuDungDisplay;
        this.GhiChu = GhiChu;
        this.LoaiGiaDichVuCoHieuLuc = LoaiGiaDichVuCoHieuLuc;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
    }
}
class GiuongBenhPhongGiuongBs {
    constructor(KhoaId = null, TenKhoa = null, BaoPhong = null, GiuongId = null, TenGiuong = null, TenPhong = null, Tang = null, ThoiGianNhan = null, ThoiGianTra = null, YeuCauDichVuGiuongBenhVienId = null, YeuCauTiepNhanNoiTruId = null) {
        this.KhoaId = KhoaId;
        this.TenKhoa = TenKhoa;
        this.BaoPhong = BaoPhong;
        this.GiuongId = GiuongId;
        this.TenGiuong = TenGiuong;
        this.TenPhong = TenPhong;
        this.Tang = Tang;
        this.ThoiGianNhan = ThoiGianNhan;
        this.ThoiGianTra = ThoiGianTra;
        this.YeuCauDichVuGiuongBenhVienId = YeuCauDichVuGiuongBenhVienId;
        this.YeuCauTiepNhanNoiTruId = YeuCauTiepNhanNoiTruId;
    }
}
// export class GiuongBenhPhongGiuongBs {
//     public constructor(
//         public KhoaPhongId: number = 0,
//         public PhongBenhVienId: number = 0,
//         public GiuongTrong: boolean = false,
//         public GiuongDaCoBenhNhan: boolean = false
//     ) { }
// }
class ChuyenKhoaPhongGiuongBs {
    constructor(Id = null, NoiTruBenhAnId = null, KhoaPhongChuyenDiId = null, KhoaPhongChuyenDiDisplay = null, KhoaPhongChuyenDenId = null, KhoaPhongChuyenDenDisplay = null, ThoiDiemRaKhoa = null, ThoiDiemVaoKhoa = null, ChanDoanVaoKhoaICDId = null, ChanDoanVaoKhoaICDDisplay = null, NhanVienChiDinhId = null, NhanVienChiDinhDisplay = null, ChanDoanVaoKhoaGhiChu = null, LyDoChuyenKhoa = null, BacSiDieuTriId = null, BacSiDieuTriDisplay = null) {
        this.Id = Id;
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.KhoaPhongChuyenDiId = KhoaPhongChuyenDiId;
        this.KhoaPhongChuyenDiDisplay = KhoaPhongChuyenDiDisplay;
        this.KhoaPhongChuyenDenId = KhoaPhongChuyenDenId;
        this.KhoaPhongChuyenDenDisplay = KhoaPhongChuyenDenDisplay;
        this.ThoiDiemRaKhoa = ThoiDiemRaKhoa;
        this.ThoiDiemVaoKhoa = ThoiDiemVaoKhoa;
        this.ChanDoanVaoKhoaICDId = ChanDoanVaoKhoaICDId;
        this.ChanDoanVaoKhoaICDDisplay = ChanDoanVaoKhoaICDDisplay;
        this.NhanVienChiDinhId = NhanVienChiDinhId;
        this.NhanVienChiDinhDisplay = NhanVienChiDinhDisplay;
        this.ChanDoanVaoKhoaGhiChu = ChanDoanVaoKhoaGhiChu;
        this.LyDoChuyenKhoa = LyDoChuyenKhoa;
        this.BacSiDieuTriId = BacSiDieuTriId;
        this.BacSiDieuTriDisplay = BacSiDieuTriDisplay;
    }
}
var DoiTuongSuDung;
(function (DoiTuongSuDung) {
    DoiTuongSuDung[DoiTuongSuDung["BenhNhan"] = 1] = "BenhNhan";
    DoiTuongSuDung[DoiTuongSuDung["NguoiNha"] = 2] = "NguoiNha";
})(DoiTuongSuDung || (DoiTuongSuDung = {}));
class KhoaPhongChuyenDen {
    constructor(Id = null, DisplayName = null) {
        this.Id = Id;
        this.DisplayName = DisplayName;
    }
}
class ThoiDiemNhanGiuong {
    constructor(ThoiDiemNhanGiuong = null, MinThoiDiemNhanGiuong = null) {
        this.ThoiDiemNhanGiuong = ThoiDiemNhanGiuong;
        this.MinThoiDiemNhanGiuong = MinThoiDiemNhanGiuong;
    }
}
class PhieuKhamThamKhamViewModel {
    constructor(PhieuDieuTriId = 0, 
    //public YeuCauTiepNhanId: number = null,
    Id = 0, KhoaChiDinh = null, KhoaChiDinhId = null, Phong = null, Giuong = null, BSDieuTri = null, LaCapCuu = null, DieuDuong = null, NgayYLenh = null, ChuanDoanNhapVien = null, DienBien = null, SoNgayDieuTriBenhAnSoSinh = null, GhiChuChamSoc = null, CheDoAnId = null, ChanDoanChinhICDId = null, ChanDoanChinhICDModelText = null, ChanDoanChinhGhiChu = null, ThoiDiemThamKham = null, ThoiDiemNhapVien = null, BenhNhanCapCuu = null, CheDoChamSoc = null, NoiTruThamKhamChanDoanKemTheos = new Array(), KetQuaSinhHieus = new Array(), DienBiens = new Array(), ThoiGianDieuTriSoSinhViewModels = new Array()) {
        this.PhieuDieuTriId = PhieuDieuTriId;
        this.Id = Id;
        this.KhoaChiDinh = KhoaChiDinh;
        this.KhoaChiDinhId = KhoaChiDinhId;
        this.Phong = Phong;
        this.Giuong = Giuong;
        this.BSDieuTri = BSDieuTri;
        this.LaCapCuu = LaCapCuu;
        this.DieuDuong = DieuDuong;
        this.NgayYLenh = NgayYLenh;
        this.ChuanDoanNhapVien = ChuanDoanNhapVien;
        this.DienBien = DienBien;
        this.SoNgayDieuTriBenhAnSoSinh = SoNgayDieuTriBenhAnSoSinh;
        this.GhiChuChamSoc = GhiChuChamSoc;
        this.CheDoAnId = CheDoAnId;
        this.ChanDoanChinhICDId = ChanDoanChinhICDId;
        this.ChanDoanChinhICDModelText = ChanDoanChinhICDModelText;
        this.ChanDoanChinhGhiChu = ChanDoanChinhGhiChu;
        this.ThoiDiemThamKham = ThoiDiemThamKham;
        this.ThoiDiemNhapVien = ThoiDiemNhapVien;
        this.BenhNhanCapCuu = BenhNhanCapCuu;
        this.CheDoChamSoc = CheDoChamSoc;
        this.NoiTruThamKhamChanDoanKemTheos = NoiTruThamKhamChanDoanKemTheos;
        this.KetQuaSinhHieus = KetQuaSinhHieus;
        this.DienBiens = DienBiens;
        this.ThoiGianDieuTriSoSinhViewModels = ThoiGianDieuTriSoSinhViewModels;
    }
}
class ThoiGianDieuTriSoSinhRaVienViewModel {
    constructor(ThoiGianDieuTriSoSinhViewModels = new Array()) {
        this.ThoiGianDieuTriSoSinhViewModels = ThoiGianDieuTriSoSinhViewModels;
    }
}
class NoiTruThamKhamChanDoanKemTheoViewModel {
    constructor(
    // public Id: number = 0,
    // public IdView: number = Math.random(),
    // public ICDId: number = null,
    // public ICDModelText: string = null,
    // public GhiChu: string = null,
    // public NoiTruPhieuDieuId: number = 0,
    Id = 0, NoiTruPhieuDieuId = 0, ICDId = null, GhiChu = null, TenICD = null) {
        this.Id = Id;
        this.NoiTruPhieuDieuId = NoiTruPhieuDieuId;
        this.ICDId = ICDId;
        this.GhiChu = GhiChu;
        this.TenICD = TenICD;
    }
}
class KetQuaSinhHieuViewModel {
    constructor(Id = 0, IdView = Math.random(), NhipTim = null, NhipTho = null, ThanNhiet = null, HuyetApTamThu = null, HuyetApTamTruong = null, ChieuCao = null, CanNang = null, Bmi = null, Glassgow = null, SpO2 = null, ThoiDiemThucHien = new Date(), ThoiDiemNhapVien = null) {
        this.Id = Id;
        this.IdView = IdView;
        this.NhipTim = NhipTim;
        this.NhipTho = NhipTho;
        this.ThanNhiet = ThanNhiet;
        this.HuyetApTamThu = HuyetApTamThu;
        this.HuyetApTamTruong = HuyetApTamTruong;
        this.ChieuCao = ChieuCao;
        this.CanNang = CanNang;
        this.Bmi = Bmi;
        this.Glassgow = Glassgow;
        this.SpO2 = SpO2;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemNhapVien = ThoiDiemNhapVien;
    }
}
class ThoiGianDieuTriSoSinhViewModel {
    constructor(Id = 0, GioBatDau = null, GioKetThuc = null, GhiChuDieuTri = null) {
        this.Id = Id;
        this.GioBatDau = GioBatDau;
        this.GioKetThuc = GioKetThuc;
        this.GhiChuDieuTri = GhiChuDieuTri;
    }
}
class DienBienViewModel {
    constructor(IdView = 0, DienBien = null, YLenh = null, CheDoAnId = null, CheDoChamSocId = null, CheDoAn = null, CheDoChamSoc = null, ThoiGian = new Date(), ThoiGianDisplay = null) {
        this.IdView = IdView;
        this.DienBien = DienBien;
        this.YLenh = YLenh;
        this.CheDoAnId = CheDoAnId;
        this.CheDoChamSocId = CheDoChamSocId;
        this.CheDoAn = CheDoAn;
        this.CheDoChamSoc = CheDoChamSoc;
        this.ThoiGian = ThoiGian;
        this.ThoiGianDisplay = ThoiGianDisplay;
    }
}
class LookupQueryInfo {
    constructor(Take = 50, Id = 0, Query = null, ParameterDependencies = null) {
        this.Take = Take;
        this.Id = Id;
        this.Query = Query;
        this.ParameterDependencies = ParameterDependencies;
    }
}
class NoiTruHoSoKhacSoKet15NgayDieuTri {
    constructor(Id = null, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FileChuKy = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FileChuKy = FileChuKy;
    }
}
// update 1/6/2021
class DanhSachSoKet15NgayDieuTri {
    constructor(TuNgay = null, DenNgay = null, NoiTruHoSoKhacId = null) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.NoiTruHoSoKhacId = NoiTruHoSoKhacId;
    }
}
class ExportQueryInfoQueryInfo {
    constructor(Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class FileChuKyModel {
    constructor(Id = 1, INoiTruHoSoKhacIdd = null, Uid = null, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, MoTa = null, LoaiTapTin = null, DuongDanTmp = null) {
        this.Id = Id;
        this.INoiTruHoSoKhacIdd = INoiTruHoSoKhacIdd;
        this.Uid = Uid;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
        this.DuongDanTmp = DuongDanTmp;
    }
}
class DieuTriNoiTruThongTinHanhChinh {
    constructor(HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, NgaySinhDisplay = null, Tuoi = null, GioiTinh = null, GioiTinhDisplay = null, DiaChi = null, QuocTichId = null, QuocTichDisplay = null, DanTocId = null, DanTocDisplay = null, NgheNghiepId = null, NgheNghiepDisplay = null, NoiLamViec = null, NguoiLienHeHoTen = null, NguoiLienHeQuanHeNhanThanId = null, NguoiLienHeQuanHeNhanThanDisplay = null, SoDienThoai = null, SoDienThoaiDisplay = null, CoBHYT = null, CoBHYTDisplay = null, BHYTMaSoThe = null, BHYTNgayHieuLuc = null, BHYTNgayHieuLucDisplay = null, BHYTNgayHetHan = null, BHYTNgayHetHanDisplay = null, BHYTMucHuong = null, BHYTMucHuongDisplay = null, TuyenKham = null, NhomMau = null, NhomMauDisplay = null, YeuToRh = null, YeuToRhDisplay = null, ThoiDiemTiepNhan = null, ThoiDiemTiepNhanDisplay = null, NoiTiepNhanId = null, NoiTiepNhanDisplay = null, NoiGioiThieuId = null, NoiGioiThieuDisplay = null, ThoiDiemNhapVien = null, ThoiDiemNhapVienDisplay = null, ThoiDiemRaVien = null, ThoiDiemRaVienDisplay = null, SoLanVaoVienDoBenhNay = null, CoChuyenVien = null, LoaiChuyenTuyen = null, LoaiChuyenTuyenDisplay = null, ChuyenDenBenhVienId = null, ChuyenDenBenhVienDisplay = null, HinhThucRaVien = null, HinhThucRaVienDisplay = null, NgayTaiKham = null, NgayTaiKhamDisplay = null, IsTaiKham = null, TongSoNgayDieuTri = null, CoThuThuat = null, CoPhauThuat = null, YeuCauTiepNhanMeId = null, YeuCauGoiDichVuId = null) {
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgaySinhDisplay = NgaySinhDisplay;
        this.Tuoi = Tuoi;
        this.GioiTinh = GioiTinh;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.DiaChi = DiaChi;
        this.QuocTichId = QuocTichId;
        this.QuocTichDisplay = QuocTichDisplay;
        this.DanTocId = DanTocId;
        this.DanTocDisplay = DanTocDisplay;
        this.NgheNghiepId = NgheNghiepId;
        this.NgheNghiepDisplay = NgheNghiepDisplay;
        this.NoiLamViec = NoiLamViec;
        this.NguoiLienHeHoTen = NguoiLienHeHoTen;
        this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
        this.NguoiLienHeQuanHeNhanThanDisplay = NguoiLienHeQuanHeNhanThanDisplay;
        this.SoDienThoai = SoDienThoai;
        this.SoDienThoaiDisplay = SoDienThoaiDisplay;
        this.CoBHYT = CoBHYT;
        this.CoBHYTDisplay = CoBHYTDisplay;
        this.BHYTMaSoThe = BHYTMaSoThe;
        this.BHYTNgayHieuLuc = BHYTNgayHieuLuc;
        this.BHYTNgayHieuLucDisplay = BHYTNgayHieuLucDisplay;
        this.BHYTNgayHetHan = BHYTNgayHetHan;
        this.BHYTNgayHetHanDisplay = BHYTNgayHetHanDisplay;
        this.BHYTMucHuong = BHYTMucHuong;
        this.BHYTMucHuongDisplay = BHYTMucHuongDisplay;
        this.TuyenKham = TuyenKham;
        this.NhomMau = NhomMau;
        this.NhomMauDisplay = NhomMauDisplay;
        this.YeuToRh = YeuToRh;
        this.YeuToRhDisplay = YeuToRhDisplay;
        this.ThoiDiemTiepNhan = ThoiDiemTiepNhan;
        this.ThoiDiemTiepNhanDisplay = ThoiDiemTiepNhanDisplay;
        this.NoiTiepNhanId = NoiTiepNhanId;
        this.NoiTiepNhanDisplay = NoiTiepNhanDisplay;
        this.NoiGioiThieuId = NoiGioiThieuId;
        this.NoiGioiThieuDisplay = NoiGioiThieuDisplay;
        this.ThoiDiemNhapVien = ThoiDiemNhapVien;
        this.ThoiDiemNhapVienDisplay = ThoiDiemNhapVienDisplay;
        this.ThoiDiemRaVien = ThoiDiemRaVien;
        this.ThoiDiemRaVienDisplay = ThoiDiemRaVienDisplay;
        this.SoLanVaoVienDoBenhNay = SoLanVaoVienDoBenhNay;
        this.CoChuyenVien = CoChuyenVien;
        this.LoaiChuyenTuyen = LoaiChuyenTuyen;
        this.LoaiChuyenTuyenDisplay = LoaiChuyenTuyenDisplay;
        this.ChuyenDenBenhVienId = ChuyenDenBenhVienId;
        this.ChuyenDenBenhVienDisplay = ChuyenDenBenhVienDisplay;
        this.HinhThucRaVien = HinhThucRaVien;
        this.HinhThucRaVienDisplay = HinhThucRaVienDisplay;
        this.NgayTaiKham = NgayTaiKham;
        this.NgayTaiKhamDisplay = NgayTaiKhamDisplay;
        this.IsTaiKham = IsTaiKham;
        this.TongSoNgayDieuTri = TongSoNgayDieuTri;
        this.CoThuThuat = CoThuThuat;
        this.CoPhauThuat = CoPhauThuat;
        this.YeuCauTiepNhanMeId = YeuCauTiepNhanMeId;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
    }
}
class BienBanGayMeGayTe {
    constructor(Id = 0, YeuCauTiepNhanId = null, ThongTinHoSo = null, NhanVienGiaiThichId = null, TenNhanVienGiaiThich = null, TenNhanVienThucHien = null, NhanVienThucHienId = null, ThoiDiemThucHien = null, NhanVienDangNhap = null, ThoiDiemThucHienDisplay = null, IsDataChange = null, LastModified = null, NoiTruHoSoKhacFileDinhKems = [], ThongTinQuanHeThanNhans = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.ThongTinHoSo = ThongTinHoSo;
        this.NhanVienGiaiThichId = NhanVienGiaiThichId;
        this.TenNhanVienGiaiThich = TenNhanVienGiaiThich;
        this.TenNhanVienThucHien = TenNhanVienThucHien;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.NhanVienDangNhap = NhanVienDangNhap;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.IsDataChange = IsDataChange;
        this.LastModified = LastModified;
        this.NoiTruHoSoKhacFileDinhKems = NoiTruHoSoKhacFileDinhKems;
        this.ThongTinQuanHeThanNhans = ThongTinQuanHeThanNhans;
    }
}
class HoSoKhacGiayRaVienJSON {
    constructor(ChanDoan = null, PhuongPhapDieuTri = null, GhiChu = null, TruongKhoaId = null, GiamDocChuyenMonId = null, IdGhiChu = null) {
        this.ChanDoan = ChanDoan;
        this.PhuongPhapDieuTri = PhuongPhapDieuTri;
        this.GhiChu = GhiChu;
        this.TruongKhoaId = TruongKhoaId;
        this.GiamDocChuyenMonId = GiamDocChuyenMonId;
        this.IdGhiChu = IdGhiChu;
    }
}
class HoSoKhacGiayRaVien {
    constructor(Id = 0, YeuCauTiepNhanId = null, ThongTinHoSo = null, ThoiDiemThucHien = null, NhanVienDangNhap = null, ChanDoan = null, ThoiDiemThucHienDisplay = null, IsDataChange = null, LastModified = null, TenTruongKhoa = null, TruongKhoaId = null, TenGiamDocChuyenMon = null, GiamDocChuyenMonId = null, GhiChu = null, PhuongPhapDieuTri = null, IdGhiChu = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.ThongTinHoSo = ThongTinHoSo;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.NhanVienDangNhap = NhanVienDangNhap;
        this.ChanDoan = ChanDoan;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.IsDataChange = IsDataChange;
        this.LastModified = LastModified;
        this.TenTruongKhoa = TenTruongKhoa;
        this.TruongKhoaId = TruongKhoaId;
        this.TenGiamDocChuyenMon = TenGiamDocChuyenMon;
        this.GiamDocChuyenMonId = GiamDocChuyenMonId;
        this.GhiChu = GhiChu;
        this.PhuongPhapDieuTri = PhuongPhapDieuTri;
        this.IdGhiChu = IdGhiChu;
    }
}
class HoSoKhacGiayChungSinh {
    constructor(Id = 0, YeuCauTiepNhanId = null, NhanVienDangNhap = null, IsDataChange = null, LastModified = null, HoTenCha = null, HoTenCon = null, GhiChu = null, ThoiDiemThucHien = null, ThoiDiemThucHienDisplay = null, TenNhanVienDoDe = null, NhanVienDoDeId = null, TenNhanVienGhiPhieu = null, NhanVienGhiPhieuId = null, TenGiamDocChuyenMon = null, GiamDocChuyenMonId = null, ThongTinHoSo = null, So = null, QuyenSo = null, HoSoKhacTreSoSinhs = [], SoConHienTai = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NhanVienDangNhap = NhanVienDangNhap;
        this.IsDataChange = IsDataChange;
        this.LastModified = LastModified;
        this.HoTenCha = HoTenCha;
        this.HoTenCon = HoTenCon;
        this.GhiChu = GhiChu;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.TenNhanVienDoDe = TenNhanVienDoDe;
        this.NhanVienDoDeId = NhanVienDoDeId;
        this.TenNhanVienGhiPhieu = TenNhanVienGhiPhieu;
        this.NhanVienGhiPhieuId = NhanVienGhiPhieuId;
        this.TenGiamDocChuyenMon = TenGiamDocChuyenMon;
        this.GiamDocChuyenMonId = GiamDocChuyenMonId;
        this.ThongTinHoSo = ThongTinHoSo;
        this.So = So;
        this.QuyenSo = QuyenSo;
        this.HoSoKhacTreSoSinhs = HoSoKhacTreSoSinhs;
        this.SoConHienTai = SoConHienTai;
    }
}
class HoSoKhacGiayChungSinhJSON {
    constructor(So = null, QuyenSo = null, HoTenCha = null, GhiChu = null, NhanVienDoDeId = null, NhanVienGhiPhieuId = null, GiamDocChuyenMonId = null, HoSoKhacTreSoSinhs = []) {
        this.So = So;
        this.QuyenSo = QuyenSo;
        this.HoTenCha = HoTenCha;
        this.GhiChu = GhiChu;
        this.NhanVienDoDeId = NhanVienDoDeId;
        this.NhanVienGhiPhieuId = NhanVienGhiPhieuId;
        this.GiamDocChuyenMonId = GiamDocChuyenMonId;
        this.HoSoKhacTreSoSinhs = HoSoKhacTreSoSinhs;
    }
}
class HoSoKhacTreSoSinh {
    constructor(YeuCauTiepNhanId = null, GioiTinh = null, CanNang = null, HoTen = null, GhiChu = null, DeLuc = null, TinhTrangId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.GioiTinh = GioiTinh;
        this.CanNang = CanNang;
        this.HoTen = HoTen;
        this.GhiChu = GhiChu;
        this.DeLuc = DeLuc;
        this.TinhTrangId = TinhTrangId;
    }
}
class ThongTinQuanHeThanNhan {
    constructor(Id = 0, HoTen = null, NamSinh = null, CMND = null, QuanHeThanNhanId = null, TenQuanHeThanNhan = null, DiaChi = null) {
        this.Id = Id;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.CMND = CMND;
        this.QuanHeThanNhanId = QuanHeThanNhanId;
        this.TenQuanHeThanNhan = TenQuanHeThanNhan;
        this.DiaChi = DiaChi;
    }
}
class DieuTriNoiTruTaiNanThuongTich {
    constructor(Id = null, ThoiGianXayRaTaiNan = null, ThoiGianDenCapCuu = null, ThongTinTaiNanThuongTich = null) {
        this.Id = Id;
        this.ThoiGianXayRaTaiNan = ThoiGianXayRaTaiNan;
        this.ThoiGianDenCapCuu = ThoiGianDenCapCuu;
        this.ThongTinTaiNanThuongTich = ThongTinTaiNanThuongTich;
    }
}
class BanKiemTiemChungTreEm {
    constructor(Id = 0, YeuCauTiepNhanId = null, ThongTinHoSo = null, NhanVienThucHienId = null, TenNhanVienThucHien = null, ThoiDiemThucHien = null, NhanVienDangNhap = null, ThoiDiemThucHienDisplay = null, IsDataChange = null, LastModified = null, NoiTruHoSoKhacFileDinhKems = [], DuocPhamIds = [], SotHaThanNhiet = false, NgheTimBatThuong = false, NghePhoiBatThuong = false, TriGiacBatThuong = false, CanNangDuoi2000g = false, CoCacChongChiDinhKhac = false, DuDieuKienTiemChung = null, TamHoanTiemChung = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.ThongTinHoSo = ThongTinHoSo;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.TenNhanVienThucHien = TenNhanVienThucHien;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.NhanVienDangNhap = NhanVienDangNhap;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.IsDataChange = IsDataChange;
        this.LastModified = LastModified;
        this.NoiTruHoSoKhacFileDinhKems = NoiTruHoSoKhacFileDinhKems;
        this.DuocPhamIds = DuocPhamIds;
        this.SotHaThanNhiet = SotHaThanNhiet;
        this.NgheTimBatThuong = NgheTimBatThuong;
        this.NghePhoiBatThuong = NghePhoiBatThuong;
        this.TriGiacBatThuong = TriGiacBatThuong;
        this.CanNangDuoi2000g = CanNangDuoi2000g;
        this.CoCacChongChiDinhKhac = CoCacChongChiDinhKhac;
        this.DuDieuKienTiemChung = DuDieuKienTiemChung;
        this.TamHoanTiemChung = TamHoanTiemChung;
    }
}
class BanKiemTiemChungTreEmJSON {
    constructor(DuocPhamIds = [], SotHaThanNhiet = null, NgheTimBatThuong = null, NghePhoiBatThuong = null, TriGiacBatThuong = null, CanNangDuoi2000g = null, CoCacChongChiDinhKhac = null, DuDieuKienTiemChung = null, TamHoanTiemChung = null) {
        this.DuocPhamIds = DuocPhamIds;
        this.SotHaThanNhiet = SotHaThanNhiet;
        this.NgheTimBatThuong = NgheTimBatThuong;
        this.NghePhoiBatThuong = NghePhoiBatThuong;
        this.TriGiacBatThuong = TriGiacBatThuong;
        this.CanNangDuoi2000g = CanNangDuoi2000g;
        this.CoCacChongChiDinhKhac = CoCacChongChiDinhKhac;
        this.DuDieuKienTiemChung = DuDieuKienTiemChung;
        this.TamHoanTiemChung = TamHoanTiemChung;
    }
}
class PhieuChamSocSoSinh {
    constructor(Id = 0, YeuCauTiepNhanId = null, ThongTinHoSo = null, NhanVienThucHienId = null, TenNhanVienThucHien = null, ThoiDiemThucHien = null, NhanVienDangNhap = null, ThoiDiemThucHienDisplay = null, ICDId = null, TenICD = null, IsDataChange = null, LastModified = null, ThongTinHoSoPhieuChamSocSoSinhs = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.ThongTinHoSo = ThongTinHoSo;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.TenNhanVienThucHien = TenNhanVienThucHien;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.NhanVienDangNhap = NhanVienDangNhap;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.ICDId = ICDId;
        this.TenICD = TenICD;
        this.IsDataChange = IsDataChange;
        this.LastModified = LastModified;
        this.ThongTinHoSoPhieuChamSocSoSinhs = ThongTinHoSoPhieuChamSocSoSinhs;
    }
}
class PhieuChamSocSoSinhJSON {
    constructor(ICDId = null, TenICD = null, ThongTinHoSoPhieuChamSocSoSinhs = []) {
        this.ICDId = ICDId;
        this.TenICD = TenICD;
        this.ThongTinHoSoPhieuChamSocSoSinhs = ThongTinHoSoPhieuChamSocSoSinhs;
    }
}
class ThongTinHoSoPhieuChamSocSoSinh {
    constructor(Ngay = null, SLAn = null, NonCho = false, NuocTieu = false, Phan = false, VangDa = false, XaTriChamSocDanhGia = null, NhanVienDieuDuongId = null, TenNhanVienDieuDuong = null) {
        this.Ngay = Ngay;
        this.SLAn = SLAn;
        this.NonCho = NonCho;
        this.NuocTieu = NuocTieu;
        this.Phan = Phan;
        this.VangDa = VangDa;
        this.XaTriChamSocDanhGia = XaTriChamSocDanhGia;
        this.NhanVienDieuDuongId = NhanVienDieuDuongId;
        this.TenNhanVienDieuDuong = TenNhanVienDieuDuong;
    }
}
class ThongTinTaiNanThuongTich {
    constructor(DiaDiemXayRaTaiNan = null, ThoiGianXayRaTaiNan = null, ThoiGianDenCapCuu = null, SoCuuBanDau = null, PhuongTienDuaNanNhanDenVien = null, PhuongTienSuDungKhiBiTaiNan = null, LoaiTaiNan = null, 
    // public PhuongTienGayTaiNan: TaiNanThuongTichPhuongTienGayTaiNan = new TaiNanThuongTichPhuongTienGayTaiNan(),
    PhuongTienGayTaiNan = null, ThongTinKhac = null, DoiMuBaoHiem = null, DoiMuCoCaiQuai = null, MuBaoHiemBiVo = null, LoaiMuBaoHiem = null, SuDungRuouBia = null, TheoCamQuan = null, NongDoConTrongMau = null, KhongDoNongDoConTrongMau = null, NongDoConTrongHoiTho = null, KhongDoNongDoConTrongHoiTho = null, ChanThuongSoNao = null, Glassgow = null, ChanThuongCotSongCo = null, TonThuongKhac = new TaiNanThuongTichTonThuongKhac(), NhapVien = null, MoCapCuu = null, 
    // public TuVong: TaiNanThuongTichTuVong = new TaiNanThuongTichTuVong(),
    TuVong = null, NangXinVe = null, NoiChuyenTuyen = null, KhongChuyenTuyen = null) {
        this.DiaDiemXayRaTaiNan = DiaDiemXayRaTaiNan;
        this.ThoiGianXayRaTaiNan = ThoiGianXayRaTaiNan;
        this.ThoiGianDenCapCuu = ThoiGianDenCapCuu;
        this.SoCuuBanDau = SoCuuBanDau;
        this.PhuongTienDuaNanNhanDenVien = PhuongTienDuaNanNhanDenVien;
        this.PhuongTienSuDungKhiBiTaiNan = PhuongTienSuDungKhiBiTaiNan;
        this.LoaiTaiNan = LoaiTaiNan;
        this.PhuongTienGayTaiNan = PhuongTienGayTaiNan;
        this.ThongTinKhac = ThongTinKhac;
        this.DoiMuBaoHiem = DoiMuBaoHiem;
        this.DoiMuCoCaiQuai = DoiMuCoCaiQuai;
        this.MuBaoHiemBiVo = MuBaoHiemBiVo;
        this.LoaiMuBaoHiem = LoaiMuBaoHiem;
        this.SuDungRuouBia = SuDungRuouBia;
        this.TheoCamQuan = TheoCamQuan;
        this.NongDoConTrongMau = NongDoConTrongMau;
        this.KhongDoNongDoConTrongMau = KhongDoNongDoConTrongMau;
        this.NongDoConTrongHoiTho = NongDoConTrongHoiTho;
        this.KhongDoNongDoConTrongHoiTho = KhongDoNongDoConTrongHoiTho;
        this.ChanThuongSoNao = ChanThuongSoNao;
        this.Glassgow = Glassgow;
        this.ChanThuongCotSongCo = ChanThuongCotSongCo;
        this.TonThuongKhac = TonThuongKhac;
        this.NhapVien = NhapVien;
        this.MoCapCuu = MoCapCuu;
        this.TuVong = TuVong;
        this.NangXinVe = NangXinVe;
        this.NoiChuyenTuyen = NoiChuyenTuyen;
        this.KhongChuyenTuyen = KhongChuyenTuyen;
    }
}
// export class TaiNanThuongTichPhuongTienGayTaiNan {
//     constructor(
//         public OTo: boolean = null,
//         public TauHoa: boolean = null,
//         public MoToXeGanMay: boolean = null,
//         public XeTuChe: boolean = null,
//         public TuGayTaiNan: boolean = null
//     ) { }
// }
class TaiNanThuongTichTonThuongKhac {
    constructor(HamMat = null, Chi = null, NgucBung = null, DaChanThuong = null) {
        this.HamMat = HamMat;
        this.Chi = Chi;
        this.NgucBung = NgucBung;
        this.DaChanThuong = DaChanThuong;
    }
}
// export class TaiNanThuongTichTuVong {
//     constructor(
//         public TruocBV: boolean = null,
//         public TrongBV: boolean = null
//     ) { }
// }
class ChiDinhDichVuKyThuatMultiselectViewModel {
    constructor(NhomDichVuBenhVienId = null, TenNhomDichVu = null, YeuCauTiepNhanId = 0, YeuCauKhamBenhId = 0, DichVuKyThuatBenhVienChiDinhs = [], ShowComboboxNhomDichVuKyThuat = true, IsKhamBenhDangKham = false, DichVuKyThuatTuGois = [], PhieuDieuTriId = null, KhongTinhPhi = null, BieuHienLamSang = null, DichTeSarsCoV2 = null) {
        this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
        this.TenNhomDichVu = TenNhomDichVu;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.DichVuKyThuatBenhVienChiDinhs = DichVuKyThuatBenhVienChiDinhs;
        this.ShowComboboxNhomDichVuKyThuat = ShowComboboxNhomDichVuKyThuat;
        this.IsKhamBenhDangKham = IsKhamBenhDangKham;
        this.DichVuKyThuatTuGois = DichVuKyThuatTuGois;
        this.PhieuDieuTriId = PhieuDieuTriId;
        this.KhongTinhPhi = KhongTinhPhi;
        this.BieuHienLamSang = BieuHienLamSang;
        this.DichTeSarsCoV2 = DichTeSarsCoV2;
    }
}
class DichVuChiDinhTrungTuGoi {
    constructor(Id = null, YeuCauGoiDichVuId = null, TenGoiDichVu = null, ChuongTrinhGoiDichVuId = null, ChuongTrinhGoiDichVuChiTietId = null, DichVuBenhVienId = null, TenDichVu = null, NhomGoiDichVu = null, SoLuongSuDung = 1) {
        this.Id = Id;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.TenGoiDichVu = TenGoiDichVu;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.ChuongTrinhGoiDichVuChiTietId = ChuongTrinhGoiDichVuChiTietId;
        this.DichVuBenhVienId = DichVuBenhVienId;
        this.TenDichVu = TenDichVu;
        this.NhomGoiDichVu = NhomGoiDichVu;
        this.SoLuongSuDung = SoLuongSuDung;
    }
}
class GoiDichVu {
    constructor(GoiChietKhaus = [], GoiKhacs = []) {
        this.GoiChietKhaus = GoiChietKhaus;
        this.GoiKhacs = GoiKhacs;
    }
}
class GoiCoChietKhau {
    constructor(Id = null, Nhom = null, NhomId = 0, Ma = null, TenDichVu = null, LoaiGia = null, SoLuong = 1, DonGia = null, ThanhTien = null, TLChietKhau = null, DonGiaTrongGoi = null, ThanhTienTrongGoi = null, NoiThucHien = null, TongThanhTienTrongGoi = null, TongThanhTien = null, TrangThai = null, NoiThucHienIdStr = null) {
        this.Id = Id;
        this.Nhom = Nhom;
        this.NhomId = NhomId;
        this.Ma = Ma;
        this.TenDichVu = TenDichVu;
        this.LoaiGia = LoaiGia;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.TLChietKhau = TLChietKhau;
        this.DonGiaTrongGoi = DonGiaTrongGoi;
        this.ThanhTienTrongGoi = ThanhTienTrongGoi;
        this.NoiThucHien = NoiThucHien;
        this.TongThanhTienTrongGoi = TongThanhTienTrongGoi;
        this.TongThanhTien = TongThanhTien;
        this.TrangThai = TrangThai;
        this.NoiThucHienIdStr = NoiThucHienIdStr;
    }
}
class GoiKhongChietKhau {
    constructor(Id = null, Nhom = null, NhomId = 0, Ma = null, TenDichVu = null, LoaiGia = null, SoLuong = 1, DonGia = null, ThanhTien = null, BHYTThanhToan = null, TLMG = null, SoTienMG = null, BNThanhToan = null, NoiThucHien = null, TrangThai = null, NoiThucHienIdStr = null, isCheckRowItem = false) {
        this.Id = Id;
        this.Nhom = Nhom;
        this.NhomId = NhomId;
        this.Ma = Ma;
        this.TenDichVu = TenDichVu;
        this.LoaiGia = LoaiGia;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.BHYTThanhToan = BHYTThanhToan;
        this.TLMG = TLMG;
        this.SoTienMG = SoTienMG;
        this.BNThanhToan = BNThanhToan;
        this.NoiThucHien = NoiThucHien;
        this.TrangThai = TrangThai;
        this.NoiThucHienIdStr = NoiThucHienIdStr;
        this.isCheckRowItem = isCheckRowItem;
    }
}
class ListInChiDinh {
    constructor(nhomChiDinhId = 0, dichVuChiDinhId = 0) {
        this.nhomChiDinhId = nhomChiDinhId;
        this.dichVuChiDinhId = dichVuChiDinhId;
    }
}
class BienBanGayMeGayTeJSON {
    constructor(NhanVienGiaiThichId = null, FileChuKy = [], ThongTinQuanHeThanNhans = []) {
        this.NhanVienGiaiThichId = NhanVienGiaiThichId;
        this.FileChuKy = FileChuKy;
        this.ThongTinQuanHeThanNhans = ThongTinQuanHeThanNhans;
    }
}
class GridItemYeuCauDichVuKyThuat {
    constructor(YeuCauTiepNhanId = 0, YeuCauKhamBenhId = 0, YeuCauDichVuKyThuatId = 0, NhomGiaDichVuKyThuatBenhVienId = null, IsUpdateLoaiGia = false, SoLan = null, IsUpdateSoLan = false, NguoiThucHienId = null, IsUpdateNguoiThucHien = false, NoiThucHienId = null, IsUpdateNoiThucHien = false, BenhPhamXetNghiem = null, IsUpdateBenhPhamXetNghiem = false, YeuCauKhamBenhLastModified = null, IsKhamBenhDangKham = false, GioBatDau = null, IsUpdateGioThucHien = false, DuocHuongBaoHiem = null, IsUpdateDuocHuongBaoHiem = false, LaDichVuTrongGoi = null, IsSwapDichVuGoi = false, TinhPhi = null, IsUpdateTinhPhi = false, 
    //BVHD-3825
    LaDichVuKhuyenMai = null, IsSwapDichVuKhuyenMai = false, 
    //BVHD-3575
    IsDichVuKham = false) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
        this.NhomGiaDichVuKyThuatBenhVienId = NhomGiaDichVuKyThuatBenhVienId;
        this.IsUpdateLoaiGia = IsUpdateLoaiGia;
        this.SoLan = SoLan;
        this.IsUpdateSoLan = IsUpdateSoLan;
        this.NguoiThucHienId = NguoiThucHienId;
        this.IsUpdateNguoiThucHien = IsUpdateNguoiThucHien;
        this.NoiThucHienId = NoiThucHienId;
        this.IsUpdateNoiThucHien = IsUpdateNoiThucHien;
        this.BenhPhamXetNghiem = BenhPhamXetNghiem;
        this.IsUpdateBenhPhamXetNghiem = IsUpdateBenhPhamXetNghiem;
        this.YeuCauKhamBenhLastModified = YeuCauKhamBenhLastModified;
        this.IsKhamBenhDangKham = IsKhamBenhDangKham;
        this.GioBatDau = GioBatDau;
        this.IsUpdateGioThucHien = IsUpdateGioThucHien;
        this.DuocHuongBaoHiem = DuocHuongBaoHiem;
        this.IsUpdateDuocHuongBaoHiem = IsUpdateDuocHuongBaoHiem;
        this.LaDichVuTrongGoi = LaDichVuTrongGoi;
        this.IsSwapDichVuGoi = IsSwapDichVuGoi;
        this.TinhPhi = TinhPhi;
        this.IsUpdateTinhPhi = IsUpdateTinhPhi;
        this.LaDichVuKhuyenMai = LaDichVuKhuyenMai;
        this.IsSwapDichVuKhuyenMai = IsSwapDichVuKhuyenMai;
        this.IsDichVuKham = IsDichVuKham;
    }
}
class NoiTruHoSoKhacFileDinhKemViewModel {
    constructor(Id = null, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, MoTa = null, LoaiTapTin = null, DuongDanTmp = null, Uid = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
        this.DuongDanTmp = DuongDanTmp;
        this.Uid = Uid;
    }
}
class TrangThaiYeuCauDichVuKyThuatObjEnum {
    constructor(ChuaThucHien = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_1__["TrangThaiYeuCauDichVuKyThuat"].ChuaThucHien, DangThucHien = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_1__["TrangThaiYeuCauDichVuKyThuat"].DangThucHien, DaThucHien = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_1__["TrangThaiYeuCauDichVuKyThuat"].DaThucHien, DaHuy = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_1__["TrangThaiYeuCauDichVuKyThuat"].DaHuy) {
        this.ChuaThucHien = ChuaThucHien;
        this.DangThucHien = DangThucHien;
        this.DaThucHien = DaThucHien;
        this.DaHuy = DaHuy;
    }
}
class NoiTruHoSoKhac {
    constructor(Id = null, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FilesChuKy = [], NhanVienThucHienId = null, NhanVienThucHienDisplay = null, ThoiDiemThucHien = null, ThoiDiemThucHienDisplay = null, NoiThucHienId = null, NoiThucHienDisplay = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FilesChuKy = FilesChuKy;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.NhanVienThucHienDisplay = NhanVienThucHienDisplay;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.NoiThucHienId = NoiThucHienId;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
    }
}
class ThongTinHoSoPhieuSangLocDinhDuong {
    constructor(DungChoPhuNuMangThai = false, NgayDanhGia = null, ChanDoan = null, NguoiThucHienId = null, NguoiThucHienName = null, 
    //Không mang thai
    CanNang = null, ChieuCao = null, BMI = null, DaiThamChieuBMI = null, MucDoBMI = null, GiamCan = null, GiamCanDisplay = null, DiemGiamCan = null, SoKgGiam = null, SoKgGiamDisplay = null, DiemSoKgGiam = null, AnUongKem = null, AnUongKemDisplay = null, DiemAnUongKem = null, BoSungDinhDuongDuongUong = null, LoiKhuyenDinhDuongKhac = null, TinhTrangBenhLyNang = null, TinhTrangBenhLyNangDisplay = null, TongDiemMST = 0, ChanDoanMucDoSuyDinhDuong = null, NhuCauKhacNangLuong = null, NhuCauKhacDuong = null, NhuCauKhacDam = null, NhuCauKhacBeo = null, KeHoachDinhDuong = null, KeHoachDinhDuongDisplay = null, 
    //Grid
    lstNhuCauDinhDuong = new Array(), 
    //Mang thai
    TuoiThai = null, TheoKinhCuoiCung = null, SieuAmBaThangDauThaiKy = null, CanNangTruocMangThai = null, ChieuCaoTruocMangThai = null, BMITruocMangThai = null, CanNangHienTai = null, KhoangBMITruocMangThai = null, DiemBMITruocMangThai = null, TocDoTangCan = null, TocDoTangCanDisplay = null, DiemTocDoTangCan = null, BenhKemTheo = null, BenhKemTheoDisplay = null, DiemBenhKemTheo = null, TongDiemTruocMangThai = 0, KetLuan = null) {
        this.DungChoPhuNuMangThai = DungChoPhuNuMangThai;
        this.NgayDanhGia = NgayDanhGia;
        this.ChanDoan = ChanDoan;
        this.NguoiThucHienId = NguoiThucHienId;
        this.NguoiThucHienName = NguoiThucHienName;
        this.CanNang = CanNang;
        this.ChieuCao = ChieuCao;
        this.BMI = BMI;
        this.DaiThamChieuBMI = DaiThamChieuBMI;
        this.MucDoBMI = MucDoBMI;
        this.GiamCan = GiamCan;
        this.GiamCanDisplay = GiamCanDisplay;
        this.DiemGiamCan = DiemGiamCan;
        this.SoKgGiam = SoKgGiam;
        this.SoKgGiamDisplay = SoKgGiamDisplay;
        this.DiemSoKgGiam = DiemSoKgGiam;
        this.AnUongKem = AnUongKem;
        this.AnUongKemDisplay = AnUongKemDisplay;
        this.DiemAnUongKem = DiemAnUongKem;
        this.BoSungDinhDuongDuongUong = BoSungDinhDuongDuongUong;
        this.LoiKhuyenDinhDuongKhac = LoiKhuyenDinhDuongKhac;
        this.TinhTrangBenhLyNang = TinhTrangBenhLyNang;
        this.TinhTrangBenhLyNangDisplay = TinhTrangBenhLyNangDisplay;
        this.TongDiemMST = TongDiemMST;
        this.ChanDoanMucDoSuyDinhDuong = ChanDoanMucDoSuyDinhDuong;
        this.NhuCauKhacNangLuong = NhuCauKhacNangLuong;
        this.NhuCauKhacDuong = NhuCauKhacDuong;
        this.NhuCauKhacDam = NhuCauKhacDam;
        this.NhuCauKhacBeo = NhuCauKhacBeo;
        this.KeHoachDinhDuong = KeHoachDinhDuong;
        this.KeHoachDinhDuongDisplay = KeHoachDinhDuongDisplay;
        this.lstNhuCauDinhDuong = lstNhuCauDinhDuong;
        this.TuoiThai = TuoiThai;
        this.TheoKinhCuoiCung = TheoKinhCuoiCung;
        this.SieuAmBaThangDauThaiKy = SieuAmBaThangDauThaiKy;
        this.CanNangTruocMangThai = CanNangTruocMangThai;
        this.ChieuCaoTruocMangThai = ChieuCaoTruocMangThai;
        this.BMITruocMangThai = BMITruocMangThai;
        this.CanNangHienTai = CanNangHienTai;
        this.KhoangBMITruocMangThai = KhoangBMITruocMangThai;
        this.DiemBMITruocMangThai = DiemBMITruocMangThai;
        this.TocDoTangCan = TocDoTangCan;
        this.TocDoTangCanDisplay = TocDoTangCanDisplay;
        this.DiemTocDoTangCan = DiemTocDoTangCan;
        this.BenhKemTheo = BenhKemTheo;
        this.BenhKemTheoDisplay = BenhKemTheoDisplay;
        this.DiemBenhKemTheo = DiemBenhKemTheo;
        this.TongDiemTruocMangThai = TongDiemTruocMangThai;
        this.KetLuan = KetLuan;
    }
}
class NhuCauDinhDuong {
    constructor(Id = null, isCheck = false) {
        this.Id = Id;
        this.isCheck = isCheck;
    }
}
class ThongTinHoSoPhieuTheoDoiChucNangSong {
    constructor(ChanDoan = null) {
        this.ChanDoan = ChanDoan;
    }
}
class ThongTinHoSoGiayTuNguyenTrietSan {
    constructor(NgayThucHien = null, BacSiThucHienId = null, BacSiThucHienDisplay = null) {
        this.NgayThucHien = NgayThucHien;
        this.BacSiThucHienId = BacSiThucHienId;
        this.BacSiThucHienDisplay = BacSiThucHienDisplay;
    }
}
class NoiTruHoSoKhacBienBanCamKetGayTeGiamDauTrongDeSauMo {
    constructor(Id = null, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FilesChuKy = [], NhanVienThucHienId = null, NhanVienThucHienDisplay = null, ThoiDiemThucHien = null, ThoiDiemThucHienDisplay = null, NoiThucHienId = null, NoiThucHienDisplay = null, BacSiGiaiThich = null, NgayThucHien = null, BacSiGMHSId = null, QuanHeThanNhans = new Array()) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FilesChuKy = FilesChuKy;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.NhanVienThucHienDisplay = NhanVienThucHienDisplay;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.NoiThucHienId = NoiThucHienId;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
        this.BacSiGiaiThich = BacSiGiaiThich;
        this.NgayThucHien = NgayThucHien;
        this.BacSiGMHSId = BacSiGMHSId;
        this.QuanHeThanNhans = QuanHeThanNhans;
    }
}
class ThongTinHoSoBienBanCamKetGayTeGiamDauTrongDeSauMo {
    constructor(BacSiGiaiThich = null, NgayThucHien = null, BacSiGMHSId = null, BacSiGMHSDisplay = null, QuanHeThanNhans = new Array()) {
        this.BacSiGiaiThich = BacSiGiaiThich;
        this.NgayThucHien = NgayThucHien;
        this.BacSiGMHSId = BacSiGMHSId;
        this.BacSiGMHSDisplay = BacSiGMHSDisplay;
        this.QuanHeThanNhans = QuanHeThanNhans;
    }
}
class ThongTinQuanHeThanNhanBienBanCamKetGayTeGiamDauTrongDeSauMo {
    constructor(Id = null, HoTen = null, NamSinh = null, CMND = null, QuanHeId = null, QuanHeDisplay = null, DiaChi = null) {
        this.Id = Id;
        this.HoTen = HoTen;
        this.NamSinh = NamSinh;
        this.CMND = CMND;
        this.QuanHeId = QuanHeId;
        this.QuanHeDisplay = QuanHeDisplay;
        this.DiaChi = DiaChi;
    }
}
class NoiTruHoSoKhacBangTheoDoiGayMeHoiSuc {
    constructor(Id = 0, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FilesChuKy = [], NhanVienThucHienId = null, NhanVienThucHienDisplay = null, ThoiDiemThucHien = null, ThoiDiemThucHienDisplay = null, NoiThucHienId = null, NoiThucHienDisplay = null, ChanDoan = null, TienMe = null, TacDung = null, LoaiMo = null, TuTheMo = null, NguoiGayMe = null, NguoiMo = null, PhuongPhapVoCam = null, NguoiThuCheo = null, NgayThucHien = null, Nang = null, Cao = null, KetLuan = null, MaSoThongTinVienPhi = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FilesChuKy = FilesChuKy;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.NhanVienThucHienDisplay = NhanVienThucHienDisplay;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.NoiThucHienId = NoiThucHienId;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
        this.ChanDoan = ChanDoan;
        this.TienMe = TienMe;
        this.TacDung = TacDung;
        this.LoaiMo = LoaiMo;
        this.TuTheMo = TuTheMo;
        this.NguoiGayMe = NguoiGayMe;
        this.NguoiMo = NguoiMo;
        this.PhuongPhapVoCam = PhuongPhapVoCam;
        this.NguoiThuCheo = NguoiThuCheo;
        this.NgayThucHien = NgayThucHien;
        this.Nang = Nang;
        this.Cao = Cao;
        this.KetLuan = KetLuan;
        this.MaSoThongTinVienPhi = MaSoThongTinVienPhi;
    }
}
class ThongTinBangTheoDoiGayMeHoiSuc {
    constructor(ChanDoan = null, TienMe = null, TacDung = null, LoaiMo = null, TuTheMo = null, NguoiGayMe = null, NguoiMo = null, PhuongPhapVoCam = null, NguoiThuCheo = null, NgayThucHien = null, Nang = null, Cao = null, KetLuan = null, MaSoThongTinVienPhi = null) {
        this.ChanDoan = ChanDoan;
        this.TienMe = TienMe;
        this.TacDung = TacDung;
        this.LoaiMo = LoaiMo;
        this.TuTheMo = TuTheMo;
        this.NguoiGayMe = NguoiGayMe;
        this.NguoiMo = NguoiMo;
        this.PhuongPhapVoCam = PhuongPhapVoCam;
        this.NguoiThuCheo = NguoiThuCheo;
        this.NgayThucHien = NgayThucHien;
        this.Nang = Nang;
        this.Cao = Cao;
        this.KetLuan = KetLuan;
        this.MaSoThongTinVienPhi = MaSoThongTinVienPhi;
    }
}
class NoiTruHoSoKhacGiayChuyenTuyen {
    constructor(Id = 0, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FilesChuKy = [], NhanVienThucHienId = null, NhanVienThucHienDisplay = null, ThoiDiemThucHien = null, ThoiDiemThucHienDisplay = null, NoiThucHienId = null, NoiThucHienDisplay = null, SoHoSo = null, SoChuyenTuyenSo = null, NguoiNhan = null, DauHieuLamSan = null, KetQuaXetNghiemCLS = null, ChanDoan = null, PhuongPhapSuDungTrongDieuTri = null, TinhTrangNguoiBenh = null, HuongDieuTri = null, LyDoChuyenTuyen = null, ChuyenTuyenHoi = null, PhuongTienVanChuyen = null, HoTenNguoiHoTong = null, ChucDanhNguoiHoTong = null, TrinhDoChuyenMonNguoiHoTong = null, NgayThucHien = null, NguoiCoThamQuyenId = null, YBacSiKhamDieuTriId = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FilesChuKy = FilesChuKy;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.NhanVienThucHienDisplay = NhanVienThucHienDisplay;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.NoiThucHienId = NoiThucHienId;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
        this.SoHoSo = SoHoSo;
        this.SoChuyenTuyenSo = SoChuyenTuyenSo;
        this.NguoiNhan = NguoiNhan;
        this.DauHieuLamSan = DauHieuLamSan;
        this.KetQuaXetNghiemCLS = KetQuaXetNghiemCLS;
        this.ChanDoan = ChanDoan;
        this.PhuongPhapSuDungTrongDieuTri = PhuongPhapSuDungTrongDieuTri;
        this.TinhTrangNguoiBenh = TinhTrangNguoiBenh;
        this.HuongDieuTri = HuongDieuTri;
        this.LyDoChuyenTuyen = LyDoChuyenTuyen;
        this.ChuyenTuyenHoi = ChuyenTuyenHoi;
        this.PhuongTienVanChuyen = PhuongTienVanChuyen;
        this.HoTenNguoiHoTong = HoTenNguoiHoTong;
        this.ChucDanhNguoiHoTong = ChucDanhNguoiHoTong;
        this.TrinhDoChuyenMonNguoiHoTong = TrinhDoChuyenMonNguoiHoTong;
        this.NgayThucHien = NgayThucHien;
        this.NguoiCoThamQuyenId = NguoiCoThamQuyenId;
        this.YBacSiKhamDieuTriId = YBacSiKhamDieuTriId;
    }
}
class ThongTinGiayChuyenTuyen {
    constructor(SoHoSo = null, SoChuyenTuyenSo = null, NguoiNhan = null, DauHieuLamSan = null, KetQuaXetNghiemCLS = null, ChanDoan = null, PhuongPhapSuDungTrongDieuTri = null, TinhTrangNguoiBenh = null, HuongDieuTri = null, LyDoChuyenTuyen = null, ChuyenTuyenHoi = null, PhuongTienVanChuyen = null, HoTenNguoiHoTong = null, ChucDanhNguoiHoTong = null, TrinhDoChuyenMonNguoiHoTong = null, NgayThucHien = null, NguoiCoThamQuyenId = null, NguoiCoThamQuyenDisplay = null, YBacSiKhamDieuTriId = null, YBacSiKhamDieuTriDisplay = null) {
        this.SoHoSo = SoHoSo;
        this.SoChuyenTuyenSo = SoChuyenTuyenSo;
        this.NguoiNhan = NguoiNhan;
        this.DauHieuLamSan = DauHieuLamSan;
        this.KetQuaXetNghiemCLS = KetQuaXetNghiemCLS;
        this.ChanDoan = ChanDoan;
        this.PhuongPhapSuDungTrongDieuTri = PhuongPhapSuDungTrongDieuTri;
        this.TinhTrangNguoiBenh = TinhTrangNguoiBenh;
        this.HuongDieuTri = HuongDieuTri;
        this.LyDoChuyenTuyen = LyDoChuyenTuyen;
        this.ChuyenTuyenHoi = ChuyenTuyenHoi;
        this.PhuongTienVanChuyen = PhuongTienVanChuyen;
        this.HoTenNguoiHoTong = HoTenNguoiHoTong;
        this.ChucDanhNguoiHoTong = ChucDanhNguoiHoTong;
        this.TrinhDoChuyenMonNguoiHoTong = TrinhDoChuyenMonNguoiHoTong;
        this.NgayThucHien = NgayThucHien;
        this.NguoiCoThamQuyenId = NguoiCoThamQuyenId;
        this.NguoiCoThamQuyenDisplay = NguoiCoThamQuyenDisplay;
        this.YBacSiKhamDieuTriId = YBacSiKhamDieuTriId;
        this.YBacSiKhamDieuTriDisplay = YBacSiKhamDieuTriDisplay;
    }
}
class NoiTruHoSoKhacBieuDoChuyenDa {
    constructor(Id = 0, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FilesChuKy = [], NhanVienThucHienId = null, NhanVienThucHienDisplay = null, ThoiDiemThucHien = null, ThoiDiemThucHienDisplay = null, NoiThucHienId = null, NoiThucHienDisplay = null, NgayGhiBieuDo = null, NguoiGhiBieuDoId = null, NguoiGhiBieuDoDisplay = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FilesChuKy = FilesChuKy;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.NhanVienThucHienDisplay = NhanVienThucHienDisplay;
        this.ThoiDiemThucHien = ThoiDiemThucHien;
        this.ThoiDiemThucHienDisplay = ThoiDiemThucHienDisplay;
        this.NoiThucHienId = NoiThucHienId;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
        this.NgayGhiBieuDo = NgayGhiBieuDo;
        this.NguoiGhiBieuDoId = NguoiGhiBieuDoId;
        this.NguoiGhiBieuDoDisplay = NguoiGhiBieuDoDisplay;
    }
}
class ThongTinBieuDoChuyenDa {
    constructor(NgayGhiBieuDo = null, NguoiGhiBieuDoId = null, NguoiGhiBieuDoDisplay = null, TienThaiPara1 = null, TienThaiPara2 = null, TienThaiPara3 = null, TienThaiPara4 = null) {
        this.NgayGhiBieuDo = NgayGhiBieuDo;
        this.NguoiGhiBieuDoId = NguoiGhiBieuDoId;
        this.NguoiGhiBieuDoDisplay = NguoiGhiBieuDoDisplay;
        this.TienThaiPara1 = TienThaiPara1;
        this.TienThaiPara2 = TienThaiPara2;
        this.TienThaiPara3 = TienThaiPara3;
        this.TienThaiPara4 = TienThaiPara4;
    }
}
// phiếu PhieuKhaiThacTienSuDiUng ngày 8/1
class PhieuKhaiThacTienSuDiUng {
    constructor(STT = null, Stt = null, NoiDung = null, TenThuoc = null, DiNguyenGayDiUng = null, CoKhong = null, SoLan = 0, BieuHienLamSang = null, XuTri = null, BSKhaiThac = null, FileChuKy = [], NguoiThucHien = null, NgayThucHien = null, HoTenNguoiBenh = null, Tuoi = null, GioiTinh = null, Khoa = null, Buong = null, Giuong = null, TaiKhoanDangNhap = null, TaiSoGiuong = null, ChanDoan = null, BSKhaiThacTienSuDiUng = null, PhieuKhaiThacTienSuDiUngList = null) {
        this.STT = STT;
        this.Stt = Stt;
        this.NoiDung = NoiDung;
        this.TenThuoc = TenThuoc;
        this.DiNguyenGayDiUng = DiNguyenGayDiUng;
        this.CoKhong = CoKhong;
        this.SoLan = SoLan;
        this.BieuHienLamSang = BieuHienLamSang;
        this.XuTri = XuTri;
        this.BSKhaiThac = BSKhaiThac;
        this.FileChuKy = FileChuKy;
        this.NguoiThucHien = NguoiThucHien;
        this.NgayThucHien = NgayThucHien;
        this.HoTenNguoiBenh = HoTenNguoiBenh;
        this.Tuoi = Tuoi;
        this.GioiTinh = GioiTinh;
        this.Khoa = Khoa;
        this.Buong = Buong;
        this.Giuong = Giuong;
        this.TaiKhoanDangNhap = TaiKhoanDangNhap;
        this.TaiSoGiuong = TaiSoGiuong;
        this.ChanDoan = ChanDoan;
        this.BSKhaiThacTienSuDiUng = BSKhaiThacTienSuDiUng;
        this.PhieuKhaiThacTienSuDiUngList = PhieuKhaiThacTienSuDiUngList;
    }
}
class NoiTruHoSoKhacPhieuKhaiThacTienSuDiUng {
    constructor(Id = 0, YeuCauTiepNhanId = null, LoaiHoSoDieuTriNoiTru = null, ThongTinHoSo = null, FileChuKy = [], BacSiKhaiThac = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiHoSoDieuTriNoiTru = LoaiHoSoDieuTriNoiTru;
        this.ThongTinHoSo = ThongTinHoSo;
        this.FileChuKy = FileChuKy;
        this.BacSiKhaiThac = BacSiKhaiThac;
    }
}
//
class ThemSuatAn {
    constructor(DichVuKyThuatBenhVienId = null, SoLan = null, DoiTuongSuDung = null, YeuCauTiepNhanId = 0, NoiTruPhieuDieuTriId = 0, Ma = null, Ten = null, DoiTuong = null, BuaAn = null, BuaAnDisplay = null) {
        this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
        this.SoLan = SoLan;
        this.DoiTuongSuDung = DoiTuongSuDung;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NoiTruPhieuDieuTriId = NoiTruPhieuDieuTriId;
        this.Ma = Ma;
        this.Ten = Ten;
        this.DoiTuong = DoiTuong;
        this.BuaAn = BuaAn;
        this.BuaAnDisplay = BuaAnDisplay;
    }
}
class TaoBenhAnSoSinhKhacKhoa {
    constructor(BenhAnSoSinhChiTietViewModel = null, DacDiemTreSoSinh = null) {
        this.BenhAnSoSinhChiTietViewModel = BenhAnSoSinhChiTietViewModel;
        this.DacDiemTreSoSinh = DacDiemTreSoSinh;
    }
}
class ThongTinDoiTuongSoSinhTiepNhanKhoaKhac {
    constructor(YeuCauTiepNhanId = null, KhoaNhapVienId = null, KhoaNhapVien = null, MaBenhAnMe = null, LyDoVaoVien = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, NgayThangNamSinh = null, SoChungMinhThu = null, GioiTinh = null, GioiTinhDisplay = null, NgheNghiepId = null, QuocTichId = 1, TinhThanhId = null, QuanHuyenId = null, PhuongXaId = null, DiaChi = null, SoDienThoai = null, Email = null, NoiLamViec = null, TenKhaiSinh = null, TenBanDau = null, DanTocId = null, 
    //người liên hệ
    NguoiLienHeHoTen = null, NguoiLienHeQuanHeNhanThanId = null, NguoiLienHeSoDienThoai = null, NguoiLienHeEmail = null, NguoiLienHeDiaChi = null, NguoiLienHePhuongXaId = null, NguoiLienHeQuanHuyenId = null, NguoiLienHeTinhThanhId = null, IsCheckedBHYT = null, TuNhap = false, YeuCauGoiDichVuId = null, KhoaChuyenBenhAnSoSinhVeId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhoaNhapVienId = KhoaNhapVienId;
        this.KhoaNhapVien = KhoaNhapVien;
        this.MaBenhAnMe = MaBenhAnMe;
        this.LyDoVaoVien = LyDoVaoVien;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.SoChungMinhThu = SoChungMinhThu;
        this.GioiTinh = GioiTinh;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.NgheNghiepId = NgheNghiepId;
        this.QuocTichId = QuocTichId;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXaId = PhuongXaId;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.NoiLamViec = NoiLamViec;
        this.TenKhaiSinh = TenKhaiSinh;
        this.TenBanDau = TenBanDau;
        this.DanTocId = DanTocId;
        this.NguoiLienHeHoTen = NguoiLienHeHoTen;
        this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
        this.NguoiLienHeSoDienThoai = NguoiLienHeSoDienThoai;
        this.NguoiLienHeEmail = NguoiLienHeEmail;
        this.NguoiLienHeDiaChi = NguoiLienHeDiaChi;
        this.NguoiLienHePhuongXaId = NguoiLienHePhuongXaId;
        this.NguoiLienHeQuanHuyenId = NguoiLienHeQuanHuyenId;
        this.NguoiLienHeTinhThanhId = NguoiLienHeTinhThanhId;
        this.IsCheckedBHYT = IsCheckedBHYT;
        this.TuNhap = TuNhap;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.KhoaChuyenBenhAnSoSinhVeId = KhoaChuyenBenhAnSoSinhVeId;
    }
}
class DacDiemTreSoSinh {
    constructor(DeLuc = null, GioiTinhId = null, GioiTinh = null, TinhTrangId = null, TenTinhTrang = null, DiTat = null, CanNang = null, Cao = null, VongDau = null, CoHauMon = null, ApGar = 1, ChiSoApGar = null, ApGar5 = 2, ChiSoApGar5 = null, ApGar10 = 3, ChiSoApGar10 = null, ChonTheoDoiSoSinh = null, TinhTrang = null, KetQuaXuLy = null) {
        this.DeLuc = DeLuc;
        this.GioiTinhId = GioiTinhId;
        this.GioiTinh = GioiTinh;
        this.TinhTrangId = TinhTrangId;
        this.TenTinhTrang = TenTinhTrang;
        this.DiTat = DiTat;
        this.CanNang = CanNang;
        this.Cao = Cao;
        this.VongDau = VongDau;
        this.CoHauMon = CoHauMon;
        this.ApGar = ApGar;
        this.ChiSoApGar = ChiSoApGar;
        this.ApGar5 = ApGar5;
        this.ChiSoApGar5 = ChiSoApGar5;
        this.ApGar10 = ApGar10;
        this.ChiSoApGar10 = ChiSoApGar10;
        this.ChonTheoDoiSoSinh = ChonTheoDoiSoSinh;
        this.TinhTrang = TinhTrang;
        this.KetQuaXuLy = KetQuaXuLy;
    }
}
class LanPhauThuat {
    constructor(IdView = Math.random(), PTTTNgayGio = null, PTTTPhuongPhap = null, PTTT = null, VoCam = null, PTTTPhauThuatVien = 0, PTTTBacSyGayMe = 0) {
        this.IdView = IdView;
        this.PTTTNgayGio = PTTTNgayGio;
        this.PTTTPhuongPhap = PTTTPhuongPhap;
        this.PTTT = PTTT;
        this.VoCam = VoCam;
        this.PTTTPhauThuatVien = PTTTPhauThuatVien;
        this.PTTTBacSyGayMe = PTTTBacSyGayMe;
    }
}
class ChiSoSinhTon {
    constructor(NhipTim = null, NhipTho = null, HuyetAp = null, ThanNhiet = null, ChieuCao = null, CanNang = null, BMI = null, NhanVienThucHien = null, NgayThucHien = null, Glassgow = null, SpO2 = null, HuyetApTamTruong = null, HuyetApTamThu = null) {
        this.NhipTim = NhipTim;
        this.NhipTho = NhipTho;
        this.HuyetAp = HuyetAp;
        this.ThanNhiet = ThanNhiet;
        this.ChieuCao = ChieuCao;
        this.CanNang = CanNang;
        this.BMI = BMI;
        this.NhanVienThucHien = NhanVienThucHien;
        this.NgayThucHien = NgayThucHien;
        this.Glassgow = Glassgow;
        this.SpO2 = SpO2;
        this.HuyetApTamTruong = HuyetApTamTruong;
        this.HuyetApTamThu = HuyetApTamThu;
    }
}
class DieuTriNoiTruTongKetBenhAnViewModel {
    constructor(YeuCauTiepNhanId = null, QuaTrinhBenhLy = null, XNMau = null, XQuang = null, XNTeBao = null, SieuAm = null, XNBLGP = null, XNKhac = null, PhuongPhapDieuTri = null, TinhTrangNguoiBenhKhiRaVien = null, HuongDieuTri = null, SoToXQuang = 0, SoToCTScanner = 0, SoToSieuAm = 0, SoToXetNghiem = 0, SoToKhac = 0, PhauThuatThuThuat = 0, gridPhauThuatThuThuat = [], 
    //============================== SẢN KHOA =================================================
    VaoBuongDeLuc = new Date, NhanVienTheoDoiId = null, TenNhanVienTheoDoi = null, ChucDanhId = null, TenChucDanh = null, DacDiemTreSoSinhs = [], TinhTrangSauKhiDe = null, XuLyKetQua = null, ChiSoSinhTons = [], Boc = null, So = null, RauSoLuc = null, CachSoRau = null, MatMang = null, MatMui = null, BanhRau = null, CanNang = null, RauCuonCo = null, CuonRauDai = null, CoChayMauSauSo = null, LuongMauMat = null, KiemSoatTuCung = null, XuLyKetQuaSoRau = null, DaMienMac = null, PhuongPhapDeId = null, TenPhuongPhapDe = null, LyDoCanThiep = null, TangSinhMonId = null, TenTangSinhMon = null, PhuongPhapKhauVaLoaiChi = null, SoMuiKhau = null, CoTuCungId = null, TenCoTuCung = null, ChanDoanTruocPhauThuat = null, ChanDoanSauPhauThuat = null, LanPhauThuats = [], TrieuChung = null, DoPhauThuat = null, DoGayMe = null, DoViKhuan = null, Khac = null, NamSinh = null, HuongDieuTriCacCheDoTiepTheo = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.QuaTrinhBenhLy = QuaTrinhBenhLy;
        this.XNMau = XNMau;
        this.XQuang = XQuang;
        this.XNTeBao = XNTeBao;
        this.SieuAm = SieuAm;
        this.XNBLGP = XNBLGP;
        this.XNKhac = XNKhac;
        this.PhuongPhapDieuTri = PhuongPhapDieuTri;
        this.TinhTrangNguoiBenhKhiRaVien = TinhTrangNguoiBenhKhiRaVien;
        this.HuongDieuTri = HuongDieuTri;
        this.SoToXQuang = SoToXQuang;
        this.SoToCTScanner = SoToCTScanner;
        this.SoToSieuAm = SoToSieuAm;
        this.SoToXetNghiem = SoToXetNghiem;
        this.SoToKhac = SoToKhac;
        this.PhauThuatThuThuat = PhauThuatThuThuat;
        this.gridPhauThuatThuThuat = gridPhauThuatThuThuat;
        this.VaoBuongDeLuc = VaoBuongDeLuc;
        this.NhanVienTheoDoiId = NhanVienTheoDoiId;
        this.TenNhanVienTheoDoi = TenNhanVienTheoDoi;
        this.ChucDanhId = ChucDanhId;
        this.TenChucDanh = TenChucDanh;
        this.DacDiemTreSoSinhs = DacDiemTreSoSinhs;
        this.TinhTrangSauKhiDe = TinhTrangSauKhiDe;
        this.XuLyKetQua = XuLyKetQua;
        this.ChiSoSinhTons = ChiSoSinhTons;
        this.Boc = Boc;
        this.So = So;
        this.RauSoLuc = RauSoLuc;
        this.CachSoRau = CachSoRau;
        this.MatMang = MatMang;
        this.MatMui = MatMui;
        this.BanhRau = BanhRau;
        this.CanNang = CanNang;
        this.RauCuonCo = RauCuonCo;
        this.CuonRauDai = CuonRauDai;
        this.CoChayMauSauSo = CoChayMauSauSo;
        this.LuongMauMat = LuongMauMat;
        this.KiemSoatTuCung = KiemSoatTuCung;
        this.XuLyKetQuaSoRau = XuLyKetQuaSoRau;
        this.DaMienMac = DaMienMac;
        this.PhuongPhapDeId = PhuongPhapDeId;
        this.TenPhuongPhapDe = TenPhuongPhapDe;
        this.LyDoCanThiep = LyDoCanThiep;
        this.TangSinhMonId = TangSinhMonId;
        this.TenTangSinhMon = TenTangSinhMon;
        this.PhuongPhapKhauVaLoaiChi = PhuongPhapKhauVaLoaiChi;
        this.SoMuiKhau = SoMuiKhau;
        this.CoTuCungId = CoTuCungId;
        this.TenCoTuCung = TenCoTuCung;
        this.ChanDoanTruocPhauThuat = ChanDoanTruocPhauThuat;
        this.ChanDoanSauPhauThuat = ChanDoanSauPhauThuat;
        this.LanPhauThuats = LanPhauThuats;
        this.TrieuChung = TrieuChung;
        this.DoPhauThuat = DoPhauThuat;
        this.DoGayMe = DoGayMe;
        this.DoViKhuan = DoViKhuan;
        this.Khac = Khac;
        this.NamSinh = NamSinh;
        this.HuongDieuTriCacCheDoTiepTheo = HuongDieuTriCacCheDoTiepTheo;
    }
}
class ThongTinTheoDoiSoSinhDuocChon {
    constructor(YeuCauTiepNhanMeId = null, YeuCauTiepNhanConId = null, DacDiemTreSoSinhs = []) {
        this.YeuCauTiepNhanMeId = YeuCauTiepNhanMeId;
        this.YeuCauTiepNhanConId = YeuCauTiepNhanConId;
        this.DacDiemTreSoSinhs = DacDiemTreSoSinhs;
    }
}
class GridPhauThuatThuThuatViewModel {
    constructor(IdView = Math.random(), PTTTNgayGio = null, PTTTPhuongPhap = null, PTTT = null, VoCam = null, PTTTPhauThuatVien = 0, PTTTBacSyGayMe = 0) {
        this.IdView = IdView;
        this.PTTTNgayGio = PTTTNgayGio;
        this.PTTTPhuongPhap = PTTTPhuongPhap;
        this.PTTT = PTTT;
        this.VoCam = VoCam;
        this.PTTTPhauThuatVien = PTTTPhauThuatVien;
        this.PTTTBacSyGayMe = PTTTBacSyGayMe;
    }
}
class ChiTietSuDungGiuongTheoNgay {
    constructor(IsReadOnly = true, SuDungGiuongTheoNgays = []) {
        this.IsReadOnly = IsReadOnly;
        this.SuDungGiuongTheoNgays = SuDungGiuongTheoNgays;
    }
}
class DataChiDinhTheoLoaiDichVuGroup {
    constructor(Id = null, LoaiDichVuKyThuat = null, LoaiDichVuKyThuatEnum = null, IsCheckPhieuIn = true) {
        this.Id = Id;
        this.LoaiDichVuKyThuat = LoaiDichVuKyThuat;
        this.LoaiDichVuKyThuatEnum = LoaiDichVuKyThuatEnum;
        this.IsCheckPhieuIn = IsCheckPhieuIn;
    }
}
class ListKetQuaXetNghiem {
    constructor() {
        this.Ten = null;
        this.GiaTriCu = null;
        this.GiaTriTuMay = null;
        this.GiaTriNhapTay = null;
        this.GiaTriDuyet = null;
        this.ToDamGiaTri = null;
        this.CSBT = null;
        this.DonVi = null;
        this.KetQuaCu = null;
        this.KetQuaMoi = null;
        this.ThoiDiemGuiYeuCau = null;
        this.ThoiDiemGuiYeuCauDisplay = null;
        this.ThoiDiemNhanKetQua = null;
        this.ThoiDiemNhanKetQuaDisplay = null;
        this.TenMayXetNghiem = null;
        this.MayXetNghiemId = null;
        this.ThoiDiemDuyetKetQua = null;
        this.ThoiDiemDuyetKetQuaDisplay = null;
        this.NguoiDuyet = null;
        this.LoaiMau = null;
        this.DichVuXetNghiemId = null;
        this.LoaiKetQuaTuMay = null;
        this.IdChilds = new Array();
        this.Level = null;
        this.DanhSachLoaiMau = new Array();
        this.YeuCauChayLai = null;
        this.DaDuyet = null;
        this.NgayYeuCauDisplay = null;
        this.LyDoYeuCau = null;
        this.NgayDuyetDisplay = null;
        this.NguoiYeuCau = null;
        this.NguoiDuyetChayLai = null;
        this.Nhom = null;
        this.DaDuyetChiTiet = null;
        this.HighLightClass = null;
        this.DaGoiDuyet = null;
        this.CheckBox = null;
    }
}
class InPhieuXetNghiem {
    constructor(HostingName = null, Header = null, YeuCauTiepNhanId = null, phieuDieuTriHienTaiId = null, YeuCauDichVuKyThuatId = null, NhomDichVuBenhVienId = null) {
        this.HostingName = HostingName;
        this.Header = Header;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.phieuDieuTriHienTaiId = phieuDieuTriHienTaiId;
        this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
        this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
    }
}
class GridChiDinhDichVuNgoaiTruQueryInfoVo {
    constructor(YeuCauTiepNhanId = null, NhomDichVuId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NhomDichVuId = NhomDichVuId;
    }
}
class ChiDinhNgoaiTruCanXoa {
    constructor(DichVuId = 0, LyDoHuyDichVu = null) {
        this.DichVuId = DichVuId;
        this.LyDoHuyDichVu = LyDoHuyDichVu;
    }
}
class NoiTruKeToaItem {
    constructor(Id = 0, DuocPhamId = null, Duoc = null, HoatChat = null, DVTId = null, DVT = null, DungSang = 0, ThoiGianDungSang = null, SangDisplay = "", DungTrua = 0, ThoiGianDungTrua = null, TruaDisplay = "", DungChieu = 0, ThoiGianDungChieu = null, ChieuDisplay = "", DungToi = 0, ThoiGianDungToi = null, ToiDisplay = "", SoNgayDung = null, SoLuong = null, TenDuongDung = null, DuongDungId = null, DonGia = null, ThanhTien = null, BNChiTra = null, ThuocBHYT = false, TuongTacThuoc = null, DiUngThuoc = false, GhiChu = null, GhiChuDonThuoc = null, KhoThuoc = 0, YeuCauKhamBenhDonThuocId = 0, Gia = 0, LoaiKhoThuoc = 0, NoiKeDonId = null, Ten = null, ToaMauLichSuKeToa = 3, DonThuocChiTietId = 0, LoaiDonThuoc = 0, KhoThuocKhongBHYT = 0, ThoiGianDungSangDisplay = "", ThoiGianDungTruaDisplay = "", ThoiGianDungChieuDisplay = "", ThoiGianDungToiDisplay = "", LieuDung = null, DiUngThuocDisplay = null, LastModified = null, TongThanhTien = null, LaDuocPhamBenhVien = null, YeuCauTiepNhanId = null, SoLanDungTrongNgayString = null, KhuVuc = null) {
        this.Id = Id;
        this.DuocPhamId = DuocPhamId;
        this.Duoc = Duoc;
        this.HoatChat = HoatChat;
        this.DVTId = DVTId;
        this.DVT = DVT;
        this.DungSang = DungSang;
        this.ThoiGianDungSang = ThoiGianDungSang;
        this.SangDisplay = SangDisplay;
        this.DungTrua = DungTrua;
        this.ThoiGianDungTrua = ThoiGianDungTrua;
        this.TruaDisplay = TruaDisplay;
        this.DungChieu = DungChieu;
        this.ThoiGianDungChieu = ThoiGianDungChieu;
        this.ChieuDisplay = ChieuDisplay;
        this.DungToi = DungToi;
        this.ThoiGianDungToi = ThoiGianDungToi;
        this.ToiDisplay = ToiDisplay;
        this.SoNgayDung = SoNgayDung;
        this.SoLuong = SoLuong;
        this.TenDuongDung = TenDuongDung;
        this.DuongDungId = DuongDungId;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.BNChiTra = BNChiTra;
        this.ThuocBHYT = ThuocBHYT;
        this.TuongTacThuoc = TuongTacThuoc;
        this.DiUngThuoc = DiUngThuoc;
        this.GhiChu = GhiChu;
        this.GhiChuDonThuoc = GhiChuDonThuoc;
        this.KhoThuoc = KhoThuoc;
        this.YeuCauKhamBenhDonThuocId = YeuCauKhamBenhDonThuocId;
        this.Gia = Gia;
        this.LoaiKhoThuoc = LoaiKhoThuoc;
        this.NoiKeDonId = NoiKeDonId;
        this.Ten = Ten;
        this.ToaMauLichSuKeToa = ToaMauLichSuKeToa;
        this.DonThuocChiTietId = DonThuocChiTietId;
        this.LoaiDonThuoc = LoaiDonThuoc;
        this.KhoThuocKhongBHYT = KhoThuocKhongBHYT;
        this.ThoiGianDungSangDisplay = ThoiGianDungSangDisplay;
        this.ThoiGianDungTruaDisplay = ThoiGianDungTruaDisplay;
        this.ThoiGianDungChieuDisplay = ThoiGianDungChieuDisplay;
        this.ThoiGianDungToiDisplay = ThoiGianDungToiDisplay;
        this.LieuDung = LieuDung;
        this.DiUngThuocDisplay = DiUngThuocDisplay;
        this.LastModified = LastModified;
        this.TongThanhTien = TongThanhTien;
        this.LaDuocPhamBenhVien = LaDuocPhamBenhVien;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.SoLanDungTrongNgayString = SoLanDungTrongNgayString;
        this.KhuVuc = KhuVuc;
    }
}
class InThuocRaVienVo {
    constructor(YeuCauTiepNhanId = null, HostingName = null, GhiChu = null, Header = false, Ids = []) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.HostingName = HostingName;
        this.GhiChu = GhiChu;
        this.Header = Header;
        this.Ids = Ids;
    }
}
class XacNhanInPhieuAn {
    constructor(YeuCauTiepNhanId = null, Hosting = null, PhieuDieuTriId = null, DichVuDuocChon = []) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.Hosting = Hosting;
        this.PhieuDieuTriId = PhieuDieuTriId;
        this.DichVuDuocChon = DichVuDuocChon;
    }
}
class NoiTruChiDinhPhaThuocTiem {
    constructor(Id = 0, NoiTruChiDinhPhaThuocTiemId = null, YeuCauTiepNhanId = null, NoiTruBenhAnId = null, PhieuDieuTriHienTaiId = null, ThoiGianBatDauTiem = null, SoLanTrenMui = null, SoLanTrenNgay = null, CachGioTiem = null, LaThuocTiem = false, LaDichTruyen = true, LoaiKho = null, LaThuocTruyen = false, GioSuDung = null, GhiChu = null, KhongTinhPhi = null, IsDelete = false, KhuVuc = null, SoThuTu = null, NoiTruChiDinhDuocPhams = []) {
        this.Id = Id;
        this.NoiTruChiDinhPhaThuocTiemId = NoiTruChiDinhPhaThuocTiemId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.PhieuDieuTriHienTaiId = PhieuDieuTriHienTaiId;
        this.ThoiGianBatDauTiem = ThoiGianBatDauTiem;
        this.SoLanTrenMui = SoLanTrenMui;
        this.SoLanTrenNgay = SoLanTrenNgay;
        this.CachGioTiem = CachGioTiem;
        this.LaThuocTiem = LaThuocTiem;
        this.LaDichTruyen = LaDichTruyen;
        this.LoaiKho = LoaiKho;
        this.LaThuocTruyen = LaThuocTruyen;
        this.GioSuDung = GioSuDung;
        this.GhiChu = GhiChu;
        this.KhongTinhPhi = KhongTinhPhi;
        this.IsDelete = IsDelete;
        this.KhuVuc = KhuVuc;
        this.SoThuTu = SoThuTu;
        this.NoiTruChiDinhDuocPhams = NoiTruChiDinhDuocPhams;
    }
}
class NoiTruChiDinhPhaThuocTruyen {
    constructor(Id = 0, NoiTruChiDinhPhaThuocTruyenId = null, YeuCauTiepNhanId = null, NoiTruBenhAnId = null, PhieuDieuTriHienTaiId = null, TocDoTruyen = null, DonViTocDoTruyen = null, LaDichTruyen = true, DonViTocDoTruyenDisplay = null, ThoiGianBatDauTruyen = null, CachGioTruyen = null, SoLanTrenNgay = null, GioSuDung = null, LoaiKho = null, GhiChu = null, KhuVuc = null, IsDelete = false, SoThuTu = null, KhongTinhPhi = null, NoiTruChiDinhDuocPhams = []) {
        this.Id = Id;
        this.NoiTruChiDinhPhaThuocTruyenId = NoiTruChiDinhPhaThuocTruyenId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.PhieuDieuTriHienTaiId = PhieuDieuTriHienTaiId;
        this.TocDoTruyen = TocDoTruyen;
        this.DonViTocDoTruyen = DonViTocDoTruyen;
        this.LaDichTruyen = LaDichTruyen;
        this.DonViTocDoTruyenDisplay = DonViTocDoTruyenDisplay;
        this.ThoiGianBatDauTruyen = ThoiGianBatDauTruyen;
        this.CachGioTruyen = CachGioTruyen;
        this.SoLanTrenNgay = SoLanTrenNgay;
        this.GioSuDung = GioSuDung;
        this.LoaiKho = LoaiKho;
        this.GhiChu = GhiChu;
        this.KhuVuc = KhuVuc;
        this.IsDelete = IsDelete;
        this.SoThuTu = SoThuTu;
        this.KhongTinhPhi = KhongTinhPhi;
        this.NoiTruChiDinhDuocPhams = NoiTruChiDinhDuocPhams;
    }
}
class NoiTruChiDinhDuocPham {
    constructor(LoaiKho = null, KhoId = null, LaDuocPhamBHYT = null, LaDuocPhamBHYTNumber = null, DuocPhamBenhVienId = null, SoLuong = null, KhuVuc = null, SoThuTu = null) {
        this.LoaiKho = LoaiKho;
        this.KhoId = KhoId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.LaDuocPhamBHYTNumber = LaDuocPhamBHYTNumber;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.SoLuong = SoLuong;
        this.KhuVuc = KhuVuc;
        this.SoThuTu = SoThuTu;
    }
}
class CapNhatKhongTinhPhiTiemHoacTruyen {
    constructor(Id = 0, YeuCauTiepNhanId = 0, KhongTinhPhi = null, LaThuocTiem = null, Ids = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhongTinhPhi = KhongTinhPhi;
        this.LaThuocTiem = LaThuocTiem;
        this.Ids = Ids;
    }
}
class LookupItemVoGhiChuGiayRaVien {
    constructor(KeyId = null, DisplayName = null) {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class NoiTruDonThuocTongHopVo {
    constructor(Id = 0, YeuCauTiepNhanId = 0, KhoaId = null, Dates = [], NoiTruDonThuocTongHopChiTietVos = [], NoiTruDonThuocTuVanChiTietVos = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhoaId = KhoaId;
        this.Dates = Dates;
        this.NoiTruDonThuocTongHopChiTietVos = NoiTruDonThuocTongHopChiTietVos;
        this.NoiTruDonThuocTuVanChiTietVos = NoiTruDonThuocTuVanChiTietVos;
    }
}
class NoiTruDonThuocTongHopChiTietVo {
    constructor(Id = 0, KhoId = null, DuocPhamBenhVienId = null, Ten = null, Ma = null, TenDuongDung = null, HoatChat = null, LaDuocPhamBHYT = null, DungSang = null, DungTrua = null, DungChieu = null, DungToi = null, ThoiGianDungSang = null, ThoiGianDungTrua = null, ThoiGianDungChieu = null, ThoiGianDungToi = null, SoLanDungTrongNgay = null, SoLanDungTrongNgayString = null, SoLuong = null, GhiChu = null, YeuCauTiepNhanId = null, TinhTrang = null, SoLanTrenVien = null, CachGioDungThuoc = null, LieuDungTrenNgay = null, LieuDungTrenNgayDisplay = null, 
    //DỊCH TRUYỀN
    LaDichTruyen = null, TocDoTruyen = null, DonViTocDoTruyen = null, DonViTocDoTruyenDisplay = null, ThoiGianBatDauTruyen = null, CachGioTruyenDich = null, GioSuDung = null, TheTich = null, PhieuDieuTriHienTaiId = null, KhongTinhPhi = null, LoaiKho = null, IsDelete = false, KhuVuc = null, SoThuTu = null, LaTangSTT = null, NoiTruChiDinhPhaThuocTiemId = null, ThoiGianBatDauTiem = null, SoLanTrenMui = null, CachGioTiem = null, LaThuocTiem = false, LaThuocTruyen = false, NoiTruChiDinhPhaThuocTruyenId = null, NoiTruBenhAnId = null, CachGioTruyen = null, SoLanTrenNgay = null) {
        this.Id = Id;
        this.KhoId = KhoId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.TenDuongDung = TenDuongDung;
        this.HoatChat = HoatChat;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.DungSang = DungSang;
        this.DungTrua = DungTrua;
        this.DungChieu = DungChieu;
        this.DungToi = DungToi;
        this.ThoiGianDungSang = ThoiGianDungSang;
        this.ThoiGianDungTrua = ThoiGianDungTrua;
        this.ThoiGianDungChieu = ThoiGianDungChieu;
        this.ThoiGianDungToi = ThoiGianDungToi;
        this.SoLanDungTrongNgay = SoLanDungTrongNgay;
        this.SoLanDungTrongNgayString = SoLanDungTrongNgayString;
        this.SoLuong = SoLuong;
        this.GhiChu = GhiChu;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.TinhTrang = TinhTrang;
        this.SoLanTrenVien = SoLanTrenVien;
        this.CachGioDungThuoc = CachGioDungThuoc;
        this.LieuDungTrenNgay = LieuDungTrenNgay;
        this.LieuDungTrenNgayDisplay = LieuDungTrenNgayDisplay;
        this.LaDichTruyen = LaDichTruyen;
        this.TocDoTruyen = TocDoTruyen;
        this.DonViTocDoTruyen = DonViTocDoTruyen;
        this.DonViTocDoTruyenDisplay = DonViTocDoTruyenDisplay;
        this.ThoiGianBatDauTruyen = ThoiGianBatDauTruyen;
        this.CachGioTruyenDich = CachGioTruyenDich;
        this.GioSuDung = GioSuDung;
        this.TheTich = TheTich;
        this.PhieuDieuTriHienTaiId = PhieuDieuTriHienTaiId;
        this.KhongTinhPhi = KhongTinhPhi;
        this.LoaiKho = LoaiKho;
        this.IsDelete = IsDelete;
        this.KhuVuc = KhuVuc;
        this.SoThuTu = SoThuTu;
        this.LaTangSTT = LaTangSTT;
        this.NoiTruChiDinhPhaThuocTiemId = NoiTruChiDinhPhaThuocTiemId;
        this.ThoiGianBatDauTiem = ThoiGianBatDauTiem;
        this.SoLanTrenMui = SoLanTrenMui;
        this.CachGioTiem = CachGioTiem;
        this.LaThuocTiem = LaThuocTiem;
        this.LaThuocTruyen = LaThuocTruyen;
        this.NoiTruChiDinhPhaThuocTruyenId = NoiTruChiDinhPhaThuocTruyenId;
        this.NoiTruBenhAnId = NoiTruBenhAnId;
        this.CachGioTruyen = CachGioTruyen;
        this.SoLanTrenNgay = SoLanTrenNgay;
    }
}
class NoiTruDonVTYTTongHopVo {
    constructor(Id = 0, YeuCauTiepNhanId = 0, KhoaId = null, Dates = [], NoiTruDonVTYTTongHopChiTietVos = []) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhoaId = KhoaId;
        this.Dates = Dates;
        this.NoiTruDonVTYTTongHopChiTietVos = NoiTruDonVTYTTongHopChiTietVos;
    }
}
class NoiTruDonVTYTTongHopChiTietVo {
    constructor(Id = 0, KhoId = null, VatTuBenhVienId = null, Ten = null, Ma = null, DVT = null, LaVatTuBHYT = null, YeuCauDichVuKyThuatId = null, KhongTinhPhi = null, LoaiKho = null, SoLuong = null, YeuCauTiepNhanId = null, PhieuDieuTriHienTaiId = null) {
        this.Id = Id;
        this.KhoId = KhoId;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.DVT = DVT;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
        this.KhongTinhPhi = KhongTinhPhi;
        this.LoaiKho = LoaiKho;
        this.SoLuong = SoLuong;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.PhieuDieuTriHienTaiId = PhieuDieuTriHienTaiId;
    }
}
class NgayDieuTriDauTien {
    constructor(KhoaChiDinhId = 0, LaNgayDieuTriDauTien = false, LaKhoaChiDinh = false) {
        this.KhoaChiDinhId = KhoaChiDinhId;
        this.LaNgayDieuTriDauTien = LaNgayDieuTriDauTien;
        this.LaKhoaChiDinh = LaKhoaChiDinh;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~9e495db9-es2015.js.map