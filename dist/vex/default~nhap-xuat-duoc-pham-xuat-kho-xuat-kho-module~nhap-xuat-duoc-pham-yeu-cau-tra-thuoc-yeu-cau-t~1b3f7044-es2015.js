(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module~nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-yeu-cau-t~1b3f7044"],{

/***/ "./node_modules/@iconify/icons-ic/chevron-left.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/chevron-left.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/chevron-right.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/chevron-right.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/first-page.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/first-page.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/last-page.js":
/*!*****************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/last-page.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\" fill=\"currentColor\"/>",
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

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts ***!
  \***********************************************************************************************/
/*! exports provided: YcTraThuocSearch, RangeDate, YeuCauHoanTraDuocPhamViewModel, DuocPhamXuatGridVo, DuocPhamDaChonVo, YeuCauTraDuocPhamChiTietViewModel, DaSuaSoLuongXuat, GetDuocPhamOnGroupModel, GetVatTuOnGroupModel, YeuCauTraThuoc, YeuCauTraThuocChiTiet, YeuCauHoanTraDuocPham, YeuCauHoanTraDuocPhamChiTiet, YeuCauHoanTraDuocPhamChiTietHienThi, YeuCauHoanTraDuocPhamSearch, DuocPhamBenhVienChiTietVo, YeuCauHoanTraDuocPhamGridDaDuyet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YcTraThuocSearch", function() { return YcTraThuocSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamViewModel", function() { return YeuCauHoanTraDuocPhamViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamXuatGridVo", function() { return DuocPhamXuatGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaChonVo", function() { return DuocPhamDaChonVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraDuocPhamChiTietViewModel", function() { return YeuCauTraDuocPhamChiTietViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaSuaSoLuongXuat", function() { return DaSuaSoLuongXuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDuocPhamOnGroupModel", function() { return GetDuocPhamOnGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVatTuOnGroupModel", function() { return GetVatTuOnGroupModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuoc", function() { return YeuCauTraThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocChiTiet", function() { return YeuCauTraThuocChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPham", function() { return YeuCauHoanTraDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamChiTiet", function() { return YeuCauHoanTraDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamChiTietHienThi", function() { return YeuCauHoanTraDuocPhamChiTietHienThi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamSearch", function() { return YeuCauHoanTraDuocPhamSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienChiTietVo", function() { return DuocPhamBenhVienChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamGridDaDuyet", function() { return YeuCauHoanTraDuocPhamGridDaDuyet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class YcTraThuocSearch {
    constructor(DangChoDuyet = true, TuChoiDuyet = false, DaDuyet = false, SearchString = null, 
    // tslint:disable-next-line: no-use-before-declare
    RangeNhap = new RangeDate(), 
    // tslint:disable-next-line: no-use-before-declare
    RangeDuyet = new RangeDate()) {
        this.DangChoDuyet = DangChoDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.DaDuyet = DaDuyet;
        this.SearchString = SearchString;
        this.RangeNhap = RangeNhap;
        this.RangeDuyet = RangeDuyet;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class YeuCauHoanTraDuocPhamViewModel {
    constructor(Id = 0, KhoXuatId = null, TenKhoCanHoanTra = null, KhoNhapId = null, TenKhoNhanHoanTra = null, NhanVienYeuCauId = null, NgayYeuCau = new Date(), GhiChu = null, 
    //public XuatKhoDuocPhamChiTiets: XuatKhoDuocPhamChiTiet[]=[],
    YeuCauTraDuocPhamChiTiets = []) {
        this.Id = Id;
        this.KhoXuatId = KhoXuatId;
        this.TenKhoCanHoanTra = TenKhoCanHoanTra;
        this.KhoNhapId = KhoNhapId;
        this.TenKhoNhanHoanTra = TenKhoNhanHoanTra;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NgayYeuCau = NgayYeuCau;
        this.GhiChu = GhiChu;
        this.YeuCauTraDuocPhamChiTiets = YeuCauTraDuocPhamChiTiets;
    }
}
class DuocPhamXuatGridVo {
    constructor(Id = null, STT = null, TenDuocPham = null, DVT = null, LaDuocPhamBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongXuat = null, DuocPhamBenhVienPhanNhomId = null, TenNhom = null, MaDuocPham = null, SoDangKy = null, SoLo = null, DuocPhamBenhVienId = null, HanSuDung = null) {
        this.Id = Id;
        this.STT = STT;
        this.TenDuocPham = TenDuocPham;
        this.DVT = DVT;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongXuat = SoLuongXuat;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.TenNhom = TenNhom;
        this.MaDuocPham = MaDuocPham;
        this.SoDangKy = SoDangKy;
        this.SoLo = SoLo;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.HanSuDung = HanSuDung;
    }
}
class DuocPhamDaChonVo {
    constructor(DuocPhamBenhVienId = null, MaDuocPham = null, TenDuocPham = null, LaDuocPhamBHYT = null, SoDangKy = null, SoLo = null, HanSuDung = null) {
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.MaDuocPham = MaDuocPham;
        this.TenDuocPham = TenDuocPham;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoDangKy = SoDangKy;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
    }
}
class YeuCauTraDuocPhamChiTietViewModel {
    constructor(Id = null) {
        this.Id = Id;
    }
}
class DaSuaSoLuongXuat {
    constructor(Id = null, SoLuongXuat = null) {
        this.Id = Id;
        this.SoLuongXuat = SoLuongXuat;
    }
}
class GetDuocPhamOnGroupModel {
    constructor(Id = null, KhoXuatId = null, SearchString = null, ListDaChon = null) {
        this.Id = Id;
        this.KhoXuatId = KhoXuatId;
        this.SearchString = SearchString;
        this.ListDaChon = ListDaChon;
    }
}
class GetVatTuOnGroupModel {
    constructor(Id = null, KhoXuatId = null, SearchString = null, ListDaChon = null) {
        this.Id = Id;
        this.KhoXuatId = KhoXuatId;
        this.SearchString = SearchString;
        this.ListDaChon = ListDaChon;
    }
}
class YeuCauTraThuoc {
    constructor(Id = 0, SoPhieu = null, KhoXuatId = null, KhoNhapId = null, KhoXuat = null, KhoNhap = null, NgayDuyet = new Date(), NgayYeuCau = new Date(), NhanVienDuyetId = null, NhanVienYeuCauId = null, NhanVienDuyet = null, NhanVienYeuCau = null, YeuCauTraDuocPhamChiTiets = [], GhiChu = null, LyDoKhongDuyet = null, DuocDuyet = null, DuocDuyetDisplay = null) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KhoXuatId = KhoXuatId;
        this.KhoNhapId = KhoNhapId;
        this.KhoXuat = KhoXuat;
        this.KhoNhap = KhoNhap;
        this.NgayDuyet = NgayDuyet;
        this.NgayYeuCau = NgayYeuCau;
        this.NhanVienDuyetId = NhanVienDuyetId;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NhanVienDuyet = NhanVienDuyet;
        this.NhanVienYeuCau = NhanVienYeuCau;
        this.YeuCauTraDuocPhamChiTiets = YeuCauTraDuocPhamChiTiets;
        this.GhiChu = GhiChu;
        this.LyDoKhongDuyet = LyDoKhongDuyet;
        this.DuocDuyet = DuocDuyet;
        this.DuocDuyetDisplay = DuocDuyetDisplay;
    }
}
class YeuCauTraThuocChiTiet {
    constructor(Id = 0, IdView = Math.random(), HopDongThauDuocPhamId = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = false, Solo = null, HanSuDung = null, MaVach = null, DonGiaNhap = null, Vat = null, DuocPhamBenhVienPhanNhomId = null, NgayNhapVaoBenhVien = new Date(), SoLuongTra = null, 
    // for grid
    HopDong = null, DuocPham = null, Loai = null, Nhom = null, NgayNhapBvText = null, HsdText = null, TiLeThapGia = null) {
        this.Id = Id;
        this.IdView = IdView;
        this.HopDongThauDuocPhamId = HopDongThauDuocPhamId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Solo = Solo;
        this.HanSuDung = HanSuDung;
        this.MaVach = MaVach;
        this.DonGiaNhap = DonGiaNhap;
        this.Vat = Vat;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.NgayNhapVaoBenhVien = NgayNhapVaoBenhVien;
        this.SoLuongTra = SoLuongTra;
        this.HopDong = HopDong;
        this.DuocPham = DuocPham;
        this.Loai = Loai;
        this.Nhom = Nhom;
        this.NgayNhapBvText = NgayNhapBvText;
        this.HsdText = HsdText;
        this.TiLeThapGia = TiLeThapGia;
    }
}
////UPDATE 31/12/2021
class YeuCauHoanTraDuocPham {
    constructor(Id = 0, KhoXuatId = null, TenKhoXuat = null, KhoNhapId = null, TenKhoNhap = null, NhanVienYeuCauId = null, TenNhanVienYeuCau = null, NgayYeuCau = null, DuocDuyet = null, NgayDuyet = null, NhanVienDuyetId = null, TenNhanVienDuyet = null, LyDoKhongDuyet = null, GhiChu = null, LastModified = null, 
    // public HienThiCaThuocHetHan: boolean = false,
    YeuCauHoanTraDuocPhamChiTiets = [], YeuCauHoanTraDuocPhamChiTietHienThis = []) {
        this.Id = Id;
        this.KhoXuatId = KhoXuatId;
        this.TenKhoXuat = TenKhoXuat;
        this.KhoNhapId = KhoNhapId;
        this.TenKhoNhap = TenKhoNhap;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCau = NgayYeuCau;
        this.DuocDuyet = DuocDuyet;
        this.NgayDuyet = NgayDuyet;
        this.NhanVienDuyetId = NhanVienDuyetId;
        this.TenNhanVienDuyet = TenNhanVienDuyet;
        this.LyDoKhongDuyet = LyDoKhongDuyet;
        this.GhiChu = GhiChu;
        this.LastModified = LastModified;
        this.YeuCauHoanTraDuocPhamChiTiets = YeuCauHoanTraDuocPhamChiTiets;
        this.YeuCauHoanTraDuocPhamChiTietHienThis = YeuCauHoanTraDuocPhamChiTietHienThis;
    }
}
class YeuCauHoanTraDuocPhamChiTiet {
    constructor(Id = 0, SoLuongTra = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, KhoXuatId = null, SoLo = null, HanSuDung = null, Ten = null, Ma = null, WillDelete = null, DonGiaNhap = null) {
        this.Id = Id;
        this.SoLuongTra = SoLuongTra;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.KhoXuatId = KhoXuatId;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
        this.Ten = Ten;
        this.Ma = Ma;
        this.WillDelete = WillDelete;
        this.DonGiaNhap = DonGiaNhap;
    }
}
class YeuCauHoanTraDuocPhamChiTietHienThi {
    constructor(Id = null, DuocPhamBenhVienId = null, Ten = null, DVT = null, LaDuocPhamBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongTra = null, DuocPhamBenhVienPhanNhomId = null, TenNhom = null, Ma = null, SoDangKy = null, SoLo = null, HanSuDung = null, DonGiaNhap = null) {
        this.Id = Id;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.DVT = DVT;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongTra = SoLuongTra;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.TenNhom = TenNhom;
        this.Ma = Ma;
        this.SoDangKy = SoDangKy;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
        this.DonGiaNhap = DonGiaNhap;
    }
}
class YeuCauHoanTraDuocPhamSearch {
    constructor(YeuCauTraDuocPhamId = null, IsCreate = true, KhoXuatId = null, SearchString = null, DuocPhamBenhVienVos = []) {
        this.YeuCauTraDuocPhamId = YeuCauTraDuocPhamId;
        this.IsCreate = IsCreate;
        this.KhoXuatId = KhoXuatId;
        this.SearchString = SearchString;
        this.DuocPhamBenhVienVos = DuocPhamBenhVienVos;
    }
}
class DuocPhamBenhVienChiTietVo {
    constructor(DuocPhamBenhVienId = null, Ten = null, Ma = null, LaDuocPhamBHYT = null, SoLo = null, HanSuDung = null, DonGia = null, DonGiaNhap = null) {
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
        this.DonGia = DonGia;
        this.DonGiaNhap = DonGiaNhap;
    }
}
class YeuCauHoanTraDuocPhamGridDaDuyet {
    constructor(XuatKhoDuocPhamId = null, YeuCauTraDuocPhamId = null, SearchString = null) {
        this.XuatKhoDuocPhamId = XuatKhoDuocPhamId;
        this.YeuCauTraDuocPhamId = YeuCauTraDuocPhamId;
        this.SearchString = SearchString;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module~nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-yeu-cau-t~1b3f7044-es2015.js.map