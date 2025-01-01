(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-chi-so-si~97bd36d3"],{

/***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts ***!
  \*****************************************************************************************/
/*! exports provided: KhamDoanTiepNhanTimKiem, KhamDoanTiepNhanNhanVienTimKiem, KhamDoanTiepNhanNhanVienTrangThai, KhamDoanTiepNhanTinhTrangDoChiSoSinhTon, TiepNhanDichVuChiDinhQuery, DichVuChiDinhKhamSucKhoeBenhNhanQueryVo, CapNhatGridDichVuKhamSucKhoeNhanVien, ChonPhieuInKhamSucKhoe, ThongTinInPhieuKhamSucKhoe, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham, XetNghiemCovid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanTimKiem", function() { return KhamDoanTiepNhanTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanNhanVienTimKiem", function() { return KhamDoanTiepNhanNhanVienTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanNhanVienTrangThai", function() { return KhamDoanTiepNhanNhanVienTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanTinhTrangDoChiSoSinhTon", function() { return KhamDoanTiepNhanTinhTrangDoChiSoSinhTon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanDichVuChiDinhQuery", function() { return TiepNhanDichVuChiDinhQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuChiDinhKhamSucKhoeBenhNhanQueryVo", function() { return DichVuChiDinhKhamSucKhoeBenhNhanQueryVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatGridDichVuKhamSucKhoeNhanVien", function() { return CapNhatGridDichVuKhamSucKhoeNhanVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChonPhieuInKhamSucKhoe", function() { return ChonPhieuInKhamSucKhoe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinInPhieuKhamSucKhoe", function() { return ThongTinInPhieuKhamSucKhoe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham", function() { return DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCovid", function() { return XetNghiemCovid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamDoanTiepNhanTimKiem {
    constructor(SearchString = null) {
        this.SearchString = SearchString;
    }
}
class KhamDoanTiepNhanNhanVienTimKiem {
    constructor(SearchString = null, SearchDaDoString = null, TrangThai = new KhamDoanTiepNhanNhanVienTrangThai(), TinhTrangDoChiSoSinhTon = new KhamDoanTiepNhanTinhTrangDoChiSoSinhTon(), CongTyId = null, HopDongId = null, IsLichSu = false, IsDangKham = false, IsDangKhamVaDaKham = false) {
        this.SearchString = SearchString;
        this.SearchDaDoString = SearchDaDoString;
        this.TrangThai = TrangThai;
        this.TinhTrangDoChiSoSinhTon = TinhTrangDoChiSoSinhTon;
        this.CongTyId = CongTyId;
        this.HopDongId = HopDongId;
        this.IsLichSu = IsLichSu;
        this.IsDangKham = IsDangKham;
        this.IsDangKhamVaDaKham = IsDangKhamVaDaKham;
    }
}
class KhamDoanTiepNhanNhanVienTrangThai {
    constructor(ChuaKham = true, DangKham = false, DaKham = false, HuyKham = false, DichVuPhatSinh = false) {
        this.ChuaKham = ChuaKham;
        this.DangKham = DangKham;
        this.DaKham = DaKham;
        this.HuyKham = HuyKham;
        this.DichVuPhatSinh = DichVuPhatSinh;
    }
}
class KhamDoanTiepNhanTinhTrangDoChiSoSinhTon {
    constructor(ChuaDo = true, DaDo = true) {
        this.ChuaDo = ChuaDo;
        this.DaDo = DaDo;
    }
}
class TiepNhanDichVuChiDinhQuery {
    constructor(HopDongKhamSucKhoeNhanVienId = null, NgayThangNamSinh = null, NamSinh = null, GioiTinh = null, TinhTrangHonNhan = null, CoMangThai = null, GoiKhamSucKhoeId = null) {
        this.HopDongKhamSucKhoeNhanVienId = HopDongKhamSucKhoeNhanVienId;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.NamSinh = NamSinh;
        this.GioiTinh = GioiTinh;
        this.TinhTrangHonNhan = TinhTrangHonNhan;
        this.CoMangThai = CoMangThai;
        this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
    }
}
class DichVuChiDinhKhamSucKhoeBenhNhanQueryVo {
    constructor(YeuCauTiepNhanId = null, GoiKhamSucKhoeId = null, LaDichVuThem = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
        this.LaDichVuThem = LaDichVuThem;
    }
}
class CapNhatGridDichVuKhamSucKhoeNhanVien {
    constructor(YeuCauTiepNhanId = 0, 
    //public LoaiDichVu: NhomDichVuChiDinhKhamSucKhoe = null,
    LaDichVuKham = false, YeuCauDichVuBenhVienId = 0, DonGia = null, IsUpdateDonGia = false, SoLan = null, IsUpdateSoLan = false, NoiThucHienId = null, IsUpdateNoiThucHien = false, 
    //Cập nhật 31/03/2022
    XoaDichVuDaChiDinhTrongGoiChung = null, GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = null, GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LaDichVuKham = LaDichVuKham;
        this.YeuCauDichVuBenhVienId = YeuCauDichVuBenhVienId;
        this.DonGia = DonGia;
        this.IsUpdateDonGia = IsUpdateDonGia;
        this.SoLan = SoLan;
        this.IsUpdateSoLan = IsUpdateSoLan;
        this.NoiThucHienId = NoiThucHienId;
        this.IsUpdateNoiThucHien = IsUpdateNoiThucHien;
        this.XoaDichVuDaChiDinhTrongGoiChung = XoaDichVuDaChiDinhTrongGoiChung;
        this.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
        this.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
    }
}
class ChonPhieuInKhamSucKhoe {
    constructor(SoKhamSucKhoeDinhKy = true, PhieuDangKyKhamSucKhoe = true, BangHuongDanKhamSucKhoe = true) {
        this.SoKhamSucKhoeDinhKy = SoKhamSucKhoeDinhKy;
        this.PhieuDangKyKhamSucKhoe = PhieuDangKyKhamSucKhoe;
        this.BangHuongDanKhamSucKhoe = BangHuongDanKhamSucKhoe;
    }
}
class ThongTinInPhieuKhamSucKhoe {
    constructor(HopDongKhamSucKhoeNhanVienId = null, TenFile = null, HostingName = null, LoaiHoSoKhamSucKhoe = null, NoFooter = null) {
        this.HopDongKhamSucKhoeNhanVienId = HopDongKhamSucKhoeNhanVienId;
        this.TenFile = TenFile;
        this.HostingName = HostingName;
        this.LoaiHoSoKhamSucKhoe = LoaiHoSoKhamSucKhoe;
        this.NoFooter = NoFooter;
    }
}
class DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham {
    constructor(Ids = [], LoaiMauXetNghiem = null, LoaiMauXetNghiemText = null) {
        this.Ids = Ids;
        this.LoaiMauXetNghiem = LoaiMauXetNghiem;
        this.LoaiMauXetNghiemText = LoaiMauXetNghiemText;
    }
}
class XetNghiemCovid {
    constructor(BieuHienLamSang = null, DichTeSarsCoV2 = null, LoaiBenhPham = null) {
        this.BieuHienLamSang = BieuHienLamSang;
        this.DichTeSarsCoV2 = DichTeSarsCoV2;
        this.LoaiBenhPham = LoaiBenhPham;
    }
}


/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan.model.ts ***!
  \***********************************************************/
/*! exports provided: KhamDoanThongTinHanhChinh, TimKiemHopDongKhamTheoCongTy, HopDongKhamSucKhoeNhanVien, YeuCauTiepNhanKhamSucKhoe, TiepNhanDichVuChiDinh, TiepNhanDichVuChiDinhMultiselect, DichVuGoiChungXoaChuaBatDauKham, ListInChiDinh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanThongTinHanhChinh", function() { return KhamDoanThongTinHanhChinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemHopDongKhamTheoCongTy", function() { return TimKiemHopDongKhamTheoCongTy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongKhamSucKhoeNhanVien", function() { return HopDongKhamSucKhoeNhanVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTiepNhanKhamSucKhoe", function() { return YeuCauTiepNhanKhamSucKhoe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanDichVuChiDinh", function() { return TiepNhanDichVuChiDinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanDichVuChiDinhMultiselect", function() { return TiepNhanDichVuChiDinhMultiselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGoiChungXoaChuaBatDauKham", function() { return DichVuGoiChungXoaChuaBatDauKham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInChiDinh", function() { return ListInChiDinh; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamDoanThongTinHanhChinh {
    constructor(Id = null, MaYeuCauTiepNhan = null, MaBenhNhan = null, HoTen = null, TenGioiTinh = null, NgaySinh = null, ThangSinh = null, NamSinh = null, Tuoi = null, SoDienThoaiDisplay = null, TenNgheNghiep = null, TenDanToc = null, DiaChiDisplay = null, TenCongTy = null) {
        this.Id = Id;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.MaBenhNhan = MaBenhNhan;
        this.HoTen = HoTen;
        this.TenGioiTinh = TenGioiTinh;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.Tuoi = Tuoi;
        this.SoDienThoaiDisplay = SoDienThoaiDisplay;
        this.TenNgheNghiep = TenNgheNghiep;
        this.TenDanToc = TenDanToc;
        this.DiaChiDisplay = DiaChiDisplay;
        this.TenCongTy = TenCongTy;
    }
}
class TimKiemHopDongKhamTheoCongTy {
    constructor(CongTyId = null, HopDongId = null, NgayHopDong = null, LoaiHopDong = null, TrangThai = null, SoBenhNhan = null, NgayHieuLuc = null, NgayKetThuc = null) {
        this.CongTyId = CongTyId;
        this.HopDongId = HopDongId;
        this.NgayHopDong = NgayHopDong;
        this.LoaiHopDong = LoaiHopDong;
        this.TrangThai = TrangThai;
        this.SoBenhNhan = SoBenhNhan;
        this.NgayHieuLuc = NgayHieuLuc;
        this.NgayKetThuc = NgayKetThuc;
    }
}
class HopDongKhamSucKhoeNhanVien {
    constructor(Id = 0, HopDongKhamSucKhoeId = null, BenhNhanId = null, MaNhanVien = null, HoTen = null, HoTenKhac = null, NgaySinh = null, ThangSinh = null, NamSinh = null, NgayThangNamSinh = null, Tuoi = null, SoDienThoai = null, SoChungMinhThu = null, GioiTinh = null, NgheNghiepId = null, QuocTichId = null, DanTocId = null, DiaChi = null, PhuongXaId = null, QuanHuyenId = null, TinhThanhId = null, NhomMau = null, YeuToRh = null, Email = null, TenDonViHoacBoPhan = null, NhomDoiTuongKhamSucKhoe = null, GoiKhamSucKhoeId = null, TenGoiKhamSucKhoe = null, TinhTrangHonNhan = null, CoMangThai = null, GhiChuTienSuBenh = null, GhiChuDiUngThuoc = null, HuyKham = null, YeuCauTiepNhan = null, DichVuChiDinhThems = new Array(), DichVuChiDinhTrongGois = new Array()) {
        this.Id = Id;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.BenhNhanId = BenhNhanId;
        this.MaNhanVien = MaNhanVien;
        this.HoTen = HoTen;
        this.HoTenKhac = HoTenKhac;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.Tuoi = Tuoi;
        this.SoDienThoai = SoDienThoai;
        this.SoChungMinhThu = SoChungMinhThu;
        this.GioiTinh = GioiTinh;
        this.NgheNghiepId = NgheNghiepId;
        this.QuocTichId = QuocTichId;
        this.DanTocId = DanTocId;
        this.DiaChi = DiaChi;
        this.PhuongXaId = PhuongXaId;
        this.QuanHuyenId = QuanHuyenId;
        this.TinhThanhId = TinhThanhId;
        this.NhomMau = NhomMau;
        this.YeuToRh = YeuToRh;
        this.Email = Email;
        this.TenDonViHoacBoPhan = TenDonViHoacBoPhan;
        this.NhomDoiTuongKhamSucKhoe = NhomDoiTuongKhamSucKhoe;
        this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
        this.TenGoiKhamSucKhoe = TenGoiKhamSucKhoe;
        this.TinhTrangHonNhan = TinhTrangHonNhan;
        this.CoMangThai = CoMangThai;
        this.GhiChuTienSuBenh = GhiChuTienSuBenh;
        this.GhiChuDiUngThuoc = GhiChuDiUngThuoc;
        this.HuyKham = HuyKham;
        this.YeuCauTiepNhan = YeuCauTiepNhan;
        this.DichVuChiDinhThems = DichVuChiDinhThems;
        this.DichVuChiDinhTrongGois = DichVuChiDinhTrongGois;
    }
}
class YeuCauTiepNhanKhamSucKhoe {
    constructor(Id = 0, HopDongKhamSucKhoeNhanVien = null, TrangThaiYeuCauTiepNhan = null, IsBatDauKhamTuDanhSach = false, HopDongKhamSucKhoeNhanVienDanhSachId = null) {
        this.Id = Id;
        this.HopDongKhamSucKhoeNhanVien = HopDongKhamSucKhoeNhanVien;
        this.TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan;
        this.IsBatDauKhamTuDanhSach = IsBatDauKhamTuDanhSach;
        this.HopDongKhamSucKhoeNhanVienDanhSachId = HopDongKhamSucKhoeNhanVienDanhSachId;
    }
}
class TiepNhanDichVuChiDinh {
    constructor(YeuCauTiepNhanId = null, LoaiDichVu = null, TenNhomDichVu = null, LoaiDichVuKyThuat = null, DichVuBenhVienId = null, Ma = null, Ten = null, LoaiGiaId = null, TenLoaiGia = null, SoLan = null, DonGiaBenhVien = null, DonGiaMoi = null, DonGiaUuDai = null, DonGiaChuaUuDai = null, ThanhTien = null, NoiThucHienId = null, TenNoiThucHien = null, GoiKhamSucKhoeId = null, TinhTrang = null, TenTinhTrang = null, LaDichVuKham = false, ChuyenKhoaKhamSucKhoe = null, LoaiNhomDichVuId = null, TenGoiKhamSucKhoe = null, SoLanChuaLuu = 0, IsFirstLoad = true, 
    //BVHD-3618
    LaGoiChung = null, GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = null, GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = null, 
    //BVHD-3668
    GoiKhamSucKhoeDichVuPhatSinhId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiDichVu = LoaiDichVu;
        this.TenNhomDichVu = TenNhomDichVu;
        this.LoaiDichVuKyThuat = LoaiDichVuKyThuat;
        this.DichVuBenhVienId = DichVuBenhVienId;
        this.Ma = Ma;
        this.Ten = Ten;
        this.LoaiGiaId = LoaiGiaId;
        this.TenLoaiGia = TenLoaiGia;
        this.SoLan = SoLan;
        this.DonGiaBenhVien = DonGiaBenhVien;
        this.DonGiaMoi = DonGiaMoi;
        this.DonGiaUuDai = DonGiaUuDai;
        this.DonGiaChuaUuDai = DonGiaChuaUuDai;
        this.ThanhTien = ThanhTien;
        this.NoiThucHienId = NoiThucHienId;
        this.TenNoiThucHien = TenNoiThucHien;
        this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
        this.TinhTrang = TinhTrang;
        this.TenTinhTrang = TenTinhTrang;
        this.LaDichVuKham = LaDichVuKham;
        this.ChuyenKhoaKhamSucKhoe = ChuyenKhoaKhamSucKhoe;
        this.LoaiNhomDichVuId = LoaiNhomDichVuId;
        this.TenGoiKhamSucKhoe = TenGoiKhamSucKhoe;
        this.SoLanChuaLuu = SoLanChuaLuu;
        this.IsFirstLoad = IsFirstLoad;
        this.LaGoiChung = LaGoiChung;
        this.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
        this.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
        this.GoiKhamSucKhoeDichVuPhatSinhId = GoiKhamSucKhoeDichVuPhatSinhId;
    }
}
class TiepNhanDichVuChiDinhMultiselect {
    constructor(YeuCauTiepNhanId = null, LoaiNhomDichVuId = null, GoiKhamSucKhoeId = null, DichVus = [], DichVuThems = [], DichVuGois = [], HinhThucKhamBenh = null, HopDongKhamSucKhoeId = null, 
    //BVHD-3618
    HopDongKhamSucKhoeNhanVienId = null, 
    //BVHD-3668
    LaGoiPhatSinh = false, 
    //BVHD-3761
    BieuHienLamSang = null, DichTeSarsCoV2 = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiNhomDichVuId = LoaiNhomDichVuId;
        this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
        this.DichVus = DichVus;
        this.DichVuThems = DichVuThems;
        this.DichVuGois = DichVuGois;
        this.HinhThucKhamBenh = HinhThucKhamBenh;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.HopDongKhamSucKhoeNhanVienId = HopDongKhamSucKhoeNhanVienId;
        this.LaGoiPhatSinh = LaGoiPhatSinh;
        this.BieuHienLamSang = BieuHienLamSang;
        this.DichTeSarsCoV2 = DichTeSarsCoV2;
    }
}
class DichVuGoiChungXoaChuaBatDauKham {
    constructor(GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = null, GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = null) {
        this.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
        this.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
    }
}
class ListInChiDinh {
    constructor(NhomChiDinhId = 0, DichVuChiDinhId = 0) {
        this.NhomChiDinhId = NhomChiDinhId;
        this.DichVuChiDinhId = DichVuChiDinhId;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-chi-so-si~97bd36d3-es2015.js.map