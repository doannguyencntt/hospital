(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-lay-mau-xet-nghiem-lay-mau-xet-nghiem-module"],{

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

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts ***!
  \****************************************************************************************/
/*! exports provided: LayMauXetNghiemTimKiem, LayMauXetNghiemTimKiemTrangThai, LayMauXetNghiemTimKiemDateRange, ThongTinYeuCauTiepNhanLayMau, XacNhanLayMauXetNghiem, LayMauXetNghiemBarcodeQueryInfo, GuiMauXetNghiem, LayMauXetNghiemInBarcode, KiemTraBarcodeLayMauXetNghiem, InPhieuKetQuaLayMau, CapBarcodeTheoDichVu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiem", function() { return LayMauXetNghiemTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiemTrangThai", function() { return LayMauXetNghiemTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiemDateRange", function() { return LayMauXetNghiemTimKiemDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNhanLayMau", function() { return ThongTinYeuCauTiepNhanLayMau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanLayMauXetNghiem", function() { return XacNhanLayMauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemBarcodeQueryInfo", function() { return LayMauXetNghiemBarcodeQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiMauXetNghiem", function() { return GuiMauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemInBarcode", function() { return LayMauXetNghiemInBarcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiemTraBarcodeLayMauXetNghiem", function() { return KiemTraBarcodeLayMauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuKetQuaLayMau", function() { return InPhieuKetQuaLayMau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapBarcodeTheoDichVu", function() { return CapBarcodeTheoDichVu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LayMauXetNghiemTimKiem {
    constructor(SearchString = null, TrangThai = new LayMauXetNghiemTimKiemTrangThai(), TuNgayDenNgay = new LayMauXetNghiemTimKiemDateRange(), IsGridChuaCapCode = false) {
        this.SearchString = SearchString;
        this.TrangThai = TrangThai;
        this.TuNgayDenNgay = TuNgayDenNgay;
        this.IsGridChuaCapCode = IsGridChuaCapCode;
    }
}
class LayMauXetNghiemTimKiemTrangThai {
    constructor(ChoLayMau = true, ChoGuiMau = false, ChoKetQua = false, ChoDuyetKetQua = false, DaCoKetQUa = false, DaLayMau = false) {
        this.ChoLayMau = ChoLayMau;
        this.ChoGuiMau = ChoGuiMau;
        this.ChoKetQua = ChoKetQua;
        this.ChoDuyetKetQua = ChoDuyetKetQua;
        this.DaCoKetQUa = DaCoKetQUa;
        this.DaLayMau = DaLayMau;
    }
}
class LayMauXetNghiemTimKiemDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class ThongTinYeuCauTiepNhanLayMau {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, MaBenhNhan = null, MaTiepNhan = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, Tuoi = null, TenGioiTinh = null, SoDienThoai = null, Tuyen = null, SoTheBHYT = null, MucHuong = null, DanToc = null, DiaChi = null, NgheNghiep = null, IsTraKetQua = false, TraKetQuaChoBenhNhan = null, IsAutoBarcode = false, IsCoDuKetQua = false, IsCoPhienChiTietCoKetQua = false, IsNhanVienKhoaXetNghiem = false, 
    //BVHD-3364
    TenCongTy = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.Tuoi = Tuoi;
        this.TenGioiTinh = TenGioiTinh;
        this.SoDienThoai = SoDienThoai;
        this.Tuyen = Tuyen;
        this.SoTheBHYT = SoTheBHYT;
        this.MucHuong = MucHuong;
        this.DanToc = DanToc;
        this.DiaChi = DiaChi;
        this.NgheNghiep = NgheNghiep;
        this.IsTraKetQua = IsTraKetQua;
        this.TraKetQuaChoBenhNhan = TraKetQuaChoBenhNhan;
        this.IsAutoBarcode = IsAutoBarcode;
        this.IsCoDuKetQua = IsCoDuKetQua;
        this.IsCoPhienChiTietCoKetQua = IsCoPhienChiTietCoKetQua;
        this.IsNhanVienKhoaXetNghiem = IsNhanVienKhoaXetNghiem;
        this.TenCongTy = TenCongTy;
    }
}
class XacNhanLayMauXetNghiem {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, PhienXetNghiemId = null, NhomDichVuBenhVienId = null, BarcodeNumber = null, BarcodeId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.PhienXetNghiemId = PhienXetNghiemId;
        this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
        this.BarcodeNumber = BarcodeNumber;
        this.BarcodeId = BarcodeId;
    }
}
class LayMauXetNghiemBarcodeQueryInfo {
    constructor(YeuCauTiepNhanId = null, BarcodeNumbers = new Array()) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarcodeNumbers = BarcodeNumbers;
    }
}
class GuiMauXetNghiem {
    constructor(NhanVienGuiMauId = null, TenNhanVienGuiMau = null, ThoiDiemGuiMau = null, PhongNhanMauId = null, GhiChu = null, NhomMauGuis = new Array()) {
        this.NhanVienGuiMauId = NhanVienGuiMauId;
        this.TenNhanVienGuiMau = TenNhanVienGuiMau;
        this.ThoiDiemGuiMau = ThoiDiemGuiMau;
        this.PhongNhanMauId = PhongNhanMauId;
        this.GhiChu = GhiChu;
        this.NhomMauGuis = NhomMauGuis;
    }
}
class LayMauXetNghiemInBarcode {
    constructor(YeuCauTiepNhanId = null, BarcodeId = null, BarcodeNumber = null, SoLuong = null, HostingName = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarcodeId = BarcodeId;
        this.BarcodeNumber = BarcodeNumber;
        this.SoLuong = SoLuong;
        this.HostingName = HostingName;
    }
}
class KiemTraBarcodeLayMauXetNghiem {
    constructor(YeuCauTiepNhanId = null, BarcodeNumber = null, IsInBarcode = false, SoLuong = null, IsCapMoi = false, BarcodeString = null, IsCapBarcodeChoDichVu = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BarcodeNumber = BarcodeNumber;
        this.IsInBarcode = IsInBarcode;
        this.SoLuong = SoLuong;
        this.IsCapMoi = IsCapMoi;
        this.BarcodeString = BarcodeString;
        this.IsCapBarcodeChoDichVu = IsCapBarcodeChoDichVu;
    }
}
class InPhieuKetQuaLayMau {
    constructor(HostingName = null, Header = null, YeuCauTiepNhanId = null, PhienXetNghiemId = null, LoaiIn = null, ListIn = []) {
        this.HostingName = HostingName;
        this.Header = Header;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.PhienXetNghiemId = PhienXetNghiemId;
        this.LoaiIn = LoaiIn;
        this.ListIn = ListIn;
    }
}
class CapBarcodeTheoDichVu {
    constructor(YeuCauTiepNhanId = null, BenhNhanId = null, BarcodeNumber = null, BarcodeId = null, SoLuong = null, YeuCauDichVuKyThuatIds = new Array()) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.BarcodeNumber = BarcodeNumber;
        this.BarcodeId = BarcodeId;
        this.SoLuong = SoLuong;
        this.YeuCauDichVuKyThuatIds = YeuCauDichVuKyThuatIds;
    }
}


/***/ })

}]);
//# sourceMappingURL=xet-nghiem-lay-mau-xet-nghiem-lay-mau-xet-nghiem-module-es2015.js.map