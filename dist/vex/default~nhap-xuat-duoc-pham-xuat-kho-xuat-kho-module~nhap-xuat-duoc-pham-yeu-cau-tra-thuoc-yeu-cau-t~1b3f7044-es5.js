(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module~nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-yeu-cau-t~1b3f7044"], {
        /***/ "./node_modules/@iconify/icons-ic/chevron-left.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/chevron-left.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/chevron-right.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/chevron-right.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/first-page.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/first-page.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/last-page.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/last-page.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts ***!
          \***********************************************************************************************/
        /*! exports provided: YcTraThuocSearch, RangeDate, YeuCauHoanTraDuocPhamViewModel, DuocPhamXuatGridVo, DuocPhamDaChonVo, YeuCauTraDuocPhamChiTietViewModel, DaSuaSoLuongXuat, GetDuocPhamOnGroupModel, GetVatTuOnGroupModel, YeuCauTraThuoc, YeuCauTraThuocChiTiet, YeuCauHoanTraDuocPham, YeuCauHoanTraDuocPhamChiTiet, YeuCauHoanTraDuocPhamChiTietHienThi, YeuCauHoanTraDuocPhamSearch, DuocPhamBenhVienChiTietVo, YeuCauHoanTraDuocPhamGridDaDuyet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YcTraThuocSearch", function () { return YcTraThuocSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamViewModel", function () { return YeuCauHoanTraDuocPhamViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamXuatGridVo", function () { return DuocPhamXuatGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaChonVo", function () { return DuocPhamDaChonVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraDuocPhamChiTietViewModel", function () { return YeuCauTraDuocPhamChiTietViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaSuaSoLuongXuat", function () { return DaSuaSoLuongXuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDuocPhamOnGroupModel", function () { return GetDuocPhamOnGroupModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetVatTuOnGroupModel", function () { return GetVatTuOnGroupModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuoc", function () { return YeuCauTraThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTraThuocChiTiet", function () { return YeuCauTraThuocChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPham", function () { return YeuCauHoanTraDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamChiTiet", function () { return YeuCauHoanTraDuocPhamChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamChiTietHienThi", function () { return YeuCauHoanTraDuocPhamChiTietHienThi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamSearch", function () { return YeuCauHoanTraDuocPhamSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienChiTietVo", function () { return DuocPhamBenhVienChiTietVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauHoanTraDuocPhamGridDaDuyet", function () { return YeuCauHoanTraDuocPhamGridDaDuyet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var YcTraThuocSearch = /** @class */ (function () {
                function YcTraThuocSearch(DangChoDuyet, TuChoiDuyet, DaDuyet, SearchString, 
                // tslint:disable-next-line: no-use-before-declare
                RangeNhap, 
                // tslint:disable-next-line: no-use-before-declare
                RangeDuyet) {
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeNhap === void 0) { RangeNhap = new RangeDate(); }
                    if (RangeDuyet === void 0) { RangeDuyet = new RangeDate(); }
                    this.DangChoDuyet = DangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                    this.SearchString = SearchString;
                    this.RangeNhap = RangeNhap;
                    this.RangeDuyet = RangeDuyet;
                }
                return YcTraThuocSearch;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return RangeDate;
            }());
            var YeuCauHoanTraDuocPhamViewModel = /** @class */ (function () {
                function YeuCauHoanTraDuocPhamViewModel(Id, KhoXuatId, TenKhoCanHoanTra, KhoNhapId, TenKhoNhanHoanTra, NhanVienYeuCauId, NgayYeuCau, GhiChu, 
                //public XuatKhoDuocPhamChiTiets: XuatKhoDuocPhamChiTiet[]=[],
                YeuCauTraDuocPhamChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (TenKhoCanHoanTra === void 0) { TenKhoCanHoanTra = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (TenKhoNhanHoanTra === void 0) { TenKhoNhanHoanTra = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = new Date(); }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauTraDuocPhamChiTiets === void 0) { YeuCauTraDuocPhamChiTiets = []; }
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
                return YeuCauHoanTraDuocPhamViewModel;
            }());
            var DuocPhamXuatGridVo = /** @class */ (function () {
                function DuocPhamXuatGridVo(Id, STT, TenDuocPham, DVT, LaDuocPhamBHYT, Loai, SoLuongTon, SoLuongTonDisplay, SoLuongXuat, DuocPhamBenhVienPhanNhomId, TenNhom, MaDuocPham, SoDangKy, SoLo, DuocPhamBenhVienId, HanSuDung) {
                    if (Id === void 0) { Id = null; }
                    if (STT === void 0) { STT = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongTonDisplay === void 0) { SoLuongTonDisplay = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (MaDuocPham === void 0) { MaDuocPham = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
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
                return DuocPhamXuatGridVo;
            }());
            var DuocPhamDaChonVo = /** @class */ (function () {
                function DuocPhamDaChonVo(DuocPhamBenhVienId, MaDuocPham, TenDuocPham, LaDuocPhamBHYT, SoDangKy, SoLo, HanSuDung) {
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (MaDuocPham === void 0) { MaDuocPham = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.MaDuocPham = MaDuocPham;
                    this.TenDuocPham = TenDuocPham;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.SoDangKy = SoDangKy;
                    this.SoLo = SoLo;
                    this.HanSuDung = HanSuDung;
                }
                return DuocPhamDaChonVo;
            }());
            var YeuCauTraDuocPhamChiTietViewModel = /** @class */ (function () {
                function YeuCauTraDuocPhamChiTietViewModel(Id) {
                    if (Id === void 0) { Id = null; }
                    this.Id = Id;
                }
                return YeuCauTraDuocPhamChiTietViewModel;
            }());
            var DaSuaSoLuongXuat = /** @class */ (function () {
                function DaSuaSoLuongXuat(Id, SoLuongXuat) {
                    if (Id === void 0) { Id = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    this.Id = Id;
                    this.SoLuongXuat = SoLuongXuat;
                }
                return DaSuaSoLuongXuat;
            }());
            var GetDuocPhamOnGroupModel = /** @class */ (function () {
                function GetDuocPhamOnGroupModel(Id, KhoXuatId, SearchString, ListDaChon) {
                    if (Id === void 0) { Id = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (ListDaChon === void 0) { ListDaChon = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.SearchString = SearchString;
                    this.ListDaChon = ListDaChon;
                }
                return GetDuocPhamOnGroupModel;
            }());
            var GetVatTuOnGroupModel = /** @class */ (function () {
                function GetVatTuOnGroupModel(Id, KhoXuatId, SearchString, ListDaChon) {
                    if (Id === void 0) { Id = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (ListDaChon === void 0) { ListDaChon = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.SearchString = SearchString;
                    this.ListDaChon = ListDaChon;
                }
                return GetVatTuOnGroupModel;
            }());
            var YeuCauTraThuoc = /** @class */ (function () {
                function YeuCauTraThuoc(Id, SoPhieu, KhoXuatId, KhoNhapId, KhoXuat, KhoNhap, NgayDuyet, NgayYeuCau, NhanVienDuyetId, NhanVienYeuCauId, NhanVienDuyet, NhanVienYeuCau, YeuCauTraDuocPhamChiTiets, GhiChu, LyDoKhongDuyet, DuocDuyet, DuocDuyetDisplay) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (KhoXuat === void 0) { KhoXuat = null; }
                    if (KhoNhap === void 0) { KhoNhap = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = new Date(); }
                    if (NgayYeuCau === void 0) { NgayYeuCau = new Date(); }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NhanVienDuyet === void 0) { NhanVienDuyet = null; }
                    if (NhanVienYeuCau === void 0) { NhanVienYeuCau = null; }
                    if (YeuCauTraDuocPhamChiTiets === void 0) { YeuCauTraDuocPhamChiTiets = []; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (DuocDuyetDisplay === void 0) { DuocDuyetDisplay = null; }
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
                return YeuCauTraThuoc;
            }());
            var YeuCauTraThuocChiTiet = /** @class */ (function () {
                function YeuCauTraThuocChiTiet(Id, IdView, HopDongThauDuocPhamId, DuocPhamBenhVienId, LaDuocPhamBHYT, Solo, HanSuDung, MaVach, DonGiaNhap, Vat, DuocPhamBenhVienPhanNhomId, NgayNhapVaoBenhVien, SoLuongTra, 
                // for grid
                HopDong, DuocPham, Loai, Nhom, NgayNhapBvText, HsdText, TiLeThapGia) {
                    if (Id === void 0) { Id = 0; }
                    if (IdView === void 0) { IdView = Math.random(); }
                    if (HopDongThauDuocPhamId === void 0) { HopDongThauDuocPhamId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = false; }
                    if (Solo === void 0) { Solo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (MaVach === void 0) { MaVach = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    if (Vat === void 0) { Vat = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (NgayNhapVaoBenhVien === void 0) { NgayNhapVaoBenhVien = new Date(); }
                    if (SoLuongTra === void 0) { SoLuongTra = null; }
                    if (HopDong === void 0) { HopDong = null; }
                    if (DuocPham === void 0) { DuocPham = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (NgayNhapBvText === void 0) { NgayNhapBvText = null; }
                    if (HsdText === void 0) { HsdText = null; }
                    if (TiLeThapGia === void 0) { TiLeThapGia = null; }
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
                return YeuCauTraThuocChiTiet;
            }());
            ////UPDATE 31/12/2021
            var YeuCauHoanTraDuocPham = /** @class */ (function () {
                function YeuCauHoanTraDuocPham(Id, KhoXuatId, TenKhoXuat, KhoNhapId, TenKhoNhap, NhanVienYeuCauId, TenNhanVienYeuCau, NgayYeuCau, DuocDuyet, NgayDuyet, NhanVienDuyetId, TenNhanVienDuyet, LyDoKhongDuyet, GhiChu, LastModified, 
                // public HienThiCaThuocHetHan: boolean = false,
                YeuCauHoanTraDuocPhamChiTiets, YeuCauHoanTraDuocPhamChiTietHienThis) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (TenKhoNhap === void 0) { TenKhoNhap = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (LastModified === void 0) { LastModified = null; }
                    if (YeuCauHoanTraDuocPhamChiTiets === void 0) { YeuCauHoanTraDuocPhamChiTiets = []; }
                    if (YeuCauHoanTraDuocPhamChiTietHienThis === void 0) { YeuCauHoanTraDuocPhamChiTietHienThis = []; }
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
                return YeuCauHoanTraDuocPham;
            }());
            var YeuCauHoanTraDuocPhamChiTiet = /** @class */ (function () {
                function YeuCauHoanTraDuocPhamChiTiet(Id, SoLuongTra, DuocPhamBenhVienId, LaDuocPhamBHYT, KhoXuatId, SoLo, HanSuDung, Ten, Ma, WillDelete, DonGiaNhap) {
                    if (Id === void 0) { Id = 0; }
                    if (SoLuongTra === void 0) { SoLuongTra = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (WillDelete === void 0) { WillDelete = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
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
                return YeuCauHoanTraDuocPhamChiTiet;
            }());
            var YeuCauHoanTraDuocPhamChiTietHienThi = /** @class */ (function () {
                function YeuCauHoanTraDuocPhamChiTietHienThi(Id, DuocPhamBenhVienId, Ten, DVT, LaDuocPhamBHYT, Loai, SoLuongTon, SoLuongTonDisplay, SoLuongTra, DuocPhamBenhVienPhanNhomId, TenNhom, Ma, SoDangKy, SoLo, HanSuDung, DonGiaNhap) {
                    if (Id === void 0) { Id = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongTonDisplay === void 0) { SoLuongTonDisplay = null; }
                    if (SoLuongTra === void 0) { SoLuongTra = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
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
                return YeuCauHoanTraDuocPhamChiTietHienThi;
            }());
            var YeuCauHoanTraDuocPhamSearch = /** @class */ (function () {
                function YeuCauHoanTraDuocPhamSearch(YeuCauTraDuocPhamId, IsCreate, KhoXuatId, SearchString, DuocPhamBenhVienVos) {
                    if (YeuCauTraDuocPhamId === void 0) { YeuCauTraDuocPhamId = null; }
                    if (IsCreate === void 0) { IsCreate = true; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (DuocPhamBenhVienVos === void 0) { DuocPhamBenhVienVos = []; }
                    this.YeuCauTraDuocPhamId = YeuCauTraDuocPhamId;
                    this.IsCreate = IsCreate;
                    this.KhoXuatId = KhoXuatId;
                    this.SearchString = SearchString;
                    this.DuocPhamBenhVienVos = DuocPhamBenhVienVos;
                }
                return YeuCauHoanTraDuocPhamSearch;
            }());
            var DuocPhamBenhVienChiTietVo = /** @class */ (function () {
                function DuocPhamBenhVienChiTietVo(DuocPhamBenhVienId, Ten, Ma, LaDuocPhamBHYT, SoLo, HanSuDung, DonGia, DonGiaNhap) {
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.Ten = Ten;
                    this.Ma = Ma;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.SoLo = SoLo;
                    this.HanSuDung = HanSuDung;
                    this.DonGia = DonGia;
                    this.DonGiaNhap = DonGiaNhap;
                }
                return DuocPhamBenhVienChiTietVo;
            }());
            var YeuCauHoanTraDuocPhamGridDaDuyet = /** @class */ (function () {
                function YeuCauHoanTraDuocPhamGridDaDuyet(XuatKhoDuocPhamId, YeuCauTraDuocPhamId, SearchString) {
                    if (XuatKhoDuocPhamId === void 0) { XuatKhoDuocPhamId = null; }
                    if (YeuCauTraDuocPhamId === void 0) { YeuCauTraDuocPhamId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.XuatKhoDuocPhamId = XuatKhoDuocPhamId;
                    this.YeuCauTraDuocPhamId = YeuCauTraDuocPhamId;
                    this.SearchString = SearchString;
                }
                return YeuCauHoanTraDuocPhamGridDaDuyet;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module~nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-yeu-cau-t~1b3f7044-es2015.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module~nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-yeu-cau-t~1b3f7044-es5.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module~nhap-xuat-duoc-pham-yeu-cau-tra-thuoc-yeu-cau-t~1b3f7044-es5.js.map