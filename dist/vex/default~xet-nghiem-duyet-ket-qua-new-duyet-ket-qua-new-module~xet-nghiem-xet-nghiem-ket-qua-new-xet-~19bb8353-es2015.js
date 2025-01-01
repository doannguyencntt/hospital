(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module~xet-nghiem-xet-nghiem-ket-qua-new-xet-~19bb8353"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-done.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
  \**********************************************************************************************/
/*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function() { return YeuCauMuaVatTuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function() { return YeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function() { return YeuCauMuaVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function() { return PhieuYeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function() { return ThongTinVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function() { return YeuCauMuaVatTuChiTietValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class YeuCauMuaVatTuGridVo {
    constructor(SoPhieu = null, TenNhanVienYeuCau = null, NgayYeuCauTuFormat = null, NgayYeuCauDenFormat = null, RangeFromDate = new RangeDate(), FromDate = null, ToDate = null, ChoDuyet = true, DaDuyet = false, TuChoiDuyet = false, TuNgay = null, DenNgay = null, SearchString = null) {
        this.SoPhieu = SoPhieu;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
        this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
        this.RangeFromDate = RangeFromDate;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class YeuCauMuaVatTu {
    constructor(Id = 0, SoPhieu = null, KhoId = null, NhanVienYeuCauId = null, NgayYeuCau = null, KyDuTruMuaDuocPhamVatTuId = null, GhiChu = null, TruongKhoaId = null, TruongKhoaDuyet = null, TenKho = null, TenNhanVienYeuCau = null, TenNhomDuTru = null, TenKyDuTru = null, NgayTaiKhoa = null, NgayKhoDuoc = null, NgayGiamDoc = null, TrangThai = null, TenTruongKhoa = null, NgayTruongKhoaDuyet = null, TenNhanVienKhoDuoc = null, NgayKhoDuocDuyet = null, TenGiamDoc = null, NgayGiamDocDuyet = null, LyDoTruongKhoaTuChoi = null, DuTruMuaVatTuChiTiets = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KhoId = KhoId;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NgayYeuCau = NgayYeuCau;
        this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
        this.GhiChu = GhiChu;
        this.TruongKhoaId = TruongKhoaId;
        this.TruongKhoaDuyet = TruongKhoaDuyet;
        this.TenKho = TenKho;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.TenNhomDuTru = TenNhomDuTru;
        this.TenKyDuTru = TenKyDuTru;
        this.NgayTaiKhoa = NgayTaiKhoa;
        this.NgayKhoDuoc = NgayKhoDuoc;
        this.NgayGiamDoc = NgayGiamDoc;
        this.TrangThai = TrangThai;
        this.TenTruongKhoa = TenTruongKhoa;
        this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
        this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
        this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
        this.TenGiamDoc = TenGiamDoc;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.DuTruMuaVatTuChiTiets = DuTruMuaVatTuChiTiets;
    }
}
class YeuCauMuaVatTuChiTiet {
    constructor(STT = null, Id = 0, VatTuId = null, LaVatTuBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongDuTruTaiKhoaDuyet = null, NhomDieuTriDuPhong = null, GhiChu = null, DuTruMuaVatTuTheoKhoaChiTietId = null, DuTruMuaVatTuKhoDuocChiTietId = null) {
        this.STT = STT;
        this.Id = Id;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.GhiChu = GhiChu;
        this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
        this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
    }
}
class PhieuYeuCauMuaVatTu {
    constructor(DuTruMuaVatTuId = 0, HostingName = null, Header = null, TrangThai = null) {
        this.DuTruMuaVatTuId = DuTruMuaVatTuId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.TrangThai = TrangThai;
    }
}
class ThongTinVatTuChiTiet {
    constructor(STT = 0, Id = 0, NhomVatTuId = null, VatTuId = null, LaVatTuBHYT = null, Ma = null, DVT = null, QuyCach = null, NhaSX = null, NuocSX = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongTonDuTru = null, SoLuongTonKhoTong = null, SoLuongChuaNhapVeHDT = null, // Hợp đồng thầu
    ThongTinChiTietTonKhoTongs = [], ThongTinChiTietTonHDTs = [], LoaiVatTu = null, TenLoaiVatTu = null, Ten = null, SLTonDuTru = null, SLTonKhoTong = null, SLChuaNhapVeHDT = null, SoLuongDuTruTaiKhoaDuyet = null, SoLuongDuTruKhoaDuocDuyet = null, SoLuongDuTruGiamDocDuyet = null, KhoId = null, IsThemVatTu = false, GhiChu = null, YeuCauMuaVatTuChiTietValidators = []) {
        this.STT = STT;
        this.Id = Id;
        this.NhomVatTuId = NhomVatTuId;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.Ma = Ma;
        this.DVT = DVT;
        this.QuyCach = QuyCach;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongTonDuTru = SoLuongTonDuTru;
        this.SoLuongTonKhoTong = SoLuongTonKhoTong;
        this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
        this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
        this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
        this.LoaiVatTu = LoaiVatTu;
        this.TenLoaiVatTu = TenLoaiVatTu;
        this.Ten = Ten;
        this.SLTonDuTru = SLTonDuTru;
        this.SLTonKhoTong = SLTonKhoTong;
        this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
        this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
        this.KhoId = KhoId;
        this.IsThemVatTu = IsThemVatTu;
        this.GhiChu = GhiChu;
        this.YeuCauMuaVatTuChiTietValidators = YeuCauMuaVatTuChiTietValidators;
    }
}
class YeuCauMuaVatTuChiTietValidator {
    constructor(VatTuId = 0, LaVatTuBHYT = null) {
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
    }
}


/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts ***!
  \**************************************************************************************/
/*! exports provided: SearchNew, RangeDateNew, PhieuDuyetKetQuaNew, DuyetKetQuaNew, ListDataChildNew, NhomDichVuDuyetNew */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNew", function() { return SearchNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDateNew", function() { return RangeDateNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuDuyetKetQuaNew", function() { return PhieuDuyetKetQuaNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNew", function() { return DuyetKetQuaNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataChildNew", function() { return ListDataChildNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuDuyetNew", function() { return NhomDichVuDuyetNew; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class SearchNew {
    constructor(SearchString = null, SearchStringBarCode = null, ChoDuyet = true, DaDuyet = false, DangThucHien = false, FromDate = null, ToDate = null, ThoiDiemGoiDuyetTuFormat = null, ThoiDiemGoiDuyetDenFormat = null, RangeThucHien = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](), RangeDuyet = new RangeDateNew()) {
        this.SearchString = SearchString;
        this.SearchStringBarCode = SearchStringBarCode;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.DangThucHien = DangThucHien;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ThoiDiemGoiDuyetTuFormat = ThoiDiemGoiDuyetTuFormat;
        this.ThoiDiemGoiDuyetDenFormat = ThoiDiemGoiDuyetDenFormat;
        this.RangeThucHien = RangeThucHien;
        this.RangeDuyet = RangeDuyet;
    }
}
class RangeDateNew {
    constructor(StartDate = null, EndDate = null) {
        this.StartDate = StartDate;
        this.EndDate = EndDate;
    }
}
class PhieuDuyetKetQuaNew {
    constructor(Id = null, HostingName = null, Header = null, PhienXetNghiemId = null, YeuCauTiepNhanId = null, NhomDichVuBenhVienIds = [], LoaiIn = null, ListIn = []) {
        this.Id = Id;
        this.HostingName = HostingName;
        this.Header = Header;
        this.PhienXetNghiemId = PhienXetNghiemId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.NhomDichVuBenhVienIds = NhomDichVuBenhVienIds;
        this.LoaiIn = LoaiIn;
        this.ListIn = ListIn;
    }
}
class DuyetKetQuaNew {
    constructor(Id = null, YeuCauTiepNhanId = null, BarCodeID = null, MaSoBHYT = null, MaBN = null, MaYeuCauTiepNhan = null, HoTen = null, NamSinhDisplay = null, GioiTinhDisplay = null, BHYTMucHuong = null, DiaChi = null, ChanDoan = null, KhoaChiDinh = null, Phong = null, SoDienThoai = null, NhanVienThucHienId = null, ChanDoanDuoi = null, GhiChu = null, DoiTuong = null, NguoiThucHien = null, NguoiThucHienId = null, TrangThai = null, TrangThaiDisplay = null, ChiTietKetQuaXetNghiems = new Array(), 
    //BVHD-3800
    LaCapCuu = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarCodeID = BarCodeID;
        this.MaSoBHYT = MaSoBHYT;
        this.MaBN = MaBN;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.HoTen = HoTen;
        this.NamSinhDisplay = NamSinhDisplay;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.BHYTMucHuong = BHYTMucHuong;
        this.DiaChi = DiaChi;
        this.ChanDoan = ChanDoan;
        this.KhoaChiDinh = KhoaChiDinh;
        this.Phong = Phong;
        this.SoDienThoai = SoDienThoai;
        this.NhanVienThucHienId = NhanVienThucHienId;
        this.ChanDoanDuoi = ChanDoanDuoi;
        this.GhiChu = GhiChu;
        this.DoiTuong = DoiTuong;
        this.NguoiThucHien = NguoiThucHien;
        this.NguoiThucHienId = NguoiThucHienId;
        this.TrangThai = TrangThai;
        this.TrangThaiDisplay = TrangThaiDisplay;
        this.ChiTietKetQuaXetNghiems = ChiTietKetQuaXetNghiems;
        this.LaCapCuu = LaCapCuu;
    }
}
class ListDataChildNew {
    constructor(DuyetNhom = false, Ten = null, GiaTriCu = null, GiaTriTuMay = null, GiaTriNhapTay = null, GiaTriDuyet = null, ToDamGiaTri = null, Csbt = null, DonVi = null, ThoiDiemGuiYeuCau = null, ThoiDiemGuiYeuCauDisplay = null, ThoiDiemNhanKetQua = null, ThoiDiemNhanKetQuaDisplay = null, MayXetNghiemId = null, TenMayXetNghiem = null, ThoiDiemDuyetKetQua = null, ThoiDiemDuyetKetQuaDisplay = null, NguoiDuyet = null, LoaiMau = null, DichVuXetNghiemId = null, LoaiKetQuaTuMay = null, IdChilds = new Array(), Id = null, Level = null, DanhSachLoaiMau = new Array(), YeuCauChayLai = null, DaDuyet = null, Duyet = false, HighLightClass = null, HighLightCellClass = null, DaGoiDuyet = null, IsParent = null, NgayYeuCauDisplay = null, LyDoYeuCau = null, NgayDuyetDisplay = null, NguoiYeuCau = null, NguoiDuyetChayLai = null, Nhom = null, NhomId = null, CheckBox = false, LaDichVuSarCovid2 = false, LoaiKitThuId = null, LoaiKitThu = null) {
        this.DuyetNhom = DuyetNhom;
        this.Ten = Ten;
        this.GiaTriCu = GiaTriCu;
        this.GiaTriTuMay = GiaTriTuMay;
        this.GiaTriNhapTay = GiaTriNhapTay;
        this.GiaTriDuyet = GiaTriDuyet;
        this.ToDamGiaTri = ToDamGiaTri;
        this.Csbt = Csbt;
        this.DonVi = DonVi;
        this.ThoiDiemGuiYeuCau = ThoiDiemGuiYeuCau;
        this.ThoiDiemGuiYeuCauDisplay = ThoiDiemGuiYeuCauDisplay;
        this.ThoiDiemNhanKetQua = ThoiDiemNhanKetQua;
        this.ThoiDiemNhanKetQuaDisplay = ThoiDiemNhanKetQuaDisplay;
        this.MayXetNghiemId = MayXetNghiemId;
        this.TenMayXetNghiem = TenMayXetNghiem;
        this.ThoiDiemDuyetKetQua = ThoiDiemDuyetKetQua;
        this.ThoiDiemDuyetKetQuaDisplay = ThoiDiemDuyetKetQuaDisplay;
        this.NguoiDuyet = NguoiDuyet;
        this.LoaiMau = LoaiMau;
        this.DichVuXetNghiemId = DichVuXetNghiemId;
        this.LoaiKetQuaTuMay = LoaiKetQuaTuMay;
        this.IdChilds = IdChilds;
        this.Id = Id;
        this.Level = Level;
        this.DanhSachLoaiMau = DanhSachLoaiMau;
        this.YeuCauChayLai = YeuCauChayLai;
        this.DaDuyet = DaDuyet;
        this.Duyet = Duyet;
        this.HighLightClass = HighLightClass;
        this.HighLightCellClass = HighLightCellClass;
        this.DaGoiDuyet = DaGoiDuyet;
        this.IsParent = IsParent;
        this.NgayYeuCauDisplay = NgayYeuCauDisplay;
        this.LyDoYeuCau = LyDoYeuCau;
        this.NgayDuyetDisplay = NgayDuyetDisplay;
        this.NguoiYeuCau = NguoiYeuCau;
        this.NguoiDuyetChayLai = NguoiDuyetChayLai;
        this.Nhom = Nhom;
        this.NhomId = NhomId;
        this.CheckBox = CheckBox;
        this.LaDichVuSarCovid2 = LaDichVuSarCovid2;
        this.LoaiKitThuId = LoaiKitThuId;
        this.LoaiKitThu = LoaiKitThu;
    }
}
class NhomDichVuDuyetNew {
    constructor(IsCheck = true, NhomDichVuBenhVienId = null, TenNhomDichVu = null) {
        this.IsCheck = IsCheck;
        this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
        this.TenNhomDichVu = TenNhomDichVu;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module~xet-nghiem-xet-nghiem-ket-qua-new-xet-~19bb8353-es2015.js.map