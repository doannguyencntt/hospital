(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-kiem-soat-nhiem-khuan-nhap-kho~644c0018"], {
        /***/ "./node_modules/@iconify/icons-ic/sharp-edit.js": 
        /*!******************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js": 
        /*!***************************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-check-box.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-check-box.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z\" fill=\"currentColor\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-done.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
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
        /***/ "./src/app/modules/main/ke-toan/duyet-nhap-kho-vat-tu/duyet-nhap-kho.model.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/duyet-nhap-kho-vat-tu/duyet-nhap-kho.model.ts ***!
          \************************************************************************************/
        /*! exports provided: DuyetNhapKho, NhapKhoVatTu, NhapKhoVatTuChiTiet, NhapKhoVatTuSearch, rangeDate, ThongTinDuyetKhoVatTu, ThongTinLyDoHuyNhapKhoVatTu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetNhapKho", function () { return DuyetNhapKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTu", function () { return NhapKhoVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuChiTiet", function () { return NhapKhoVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuSearch", function () { return NhapKhoVatTuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDuyetKhoVatTu", function () { return ThongTinDuyetKhoVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLyDoHuyNhapKhoVatTu", function () { return ThongTinLyDoHuyNhapKhoVatTu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var DuyetNhapKho = /** @class */ (function () {
                function DuyetNhapKho() {
                }
                return DuyetNhapKho;
            }());
            var NhapKhoVatTu = /** @class */ (function () {
                function NhapKhoVatTu(Id, KhoVatTuId, TenKhoVatTu, SoChungTu, LoaiNhapKho, TenLoaiNhapKho, NguoiGiaoId, TenNguoiGiao, TenNguoiGiaoNgoai, NguoiNhapId, TenNguoiNhap, LoaiNguoiGiao, NhapKhoVatTuChiTiets, NgayNhap, DaXuatKho) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoVatTuId === void 0) { KhoVatTuId = null; }
                    if (TenKhoVatTu === void 0) { TenKhoVatTu = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (LoaiNhapKho === void 0) { LoaiNhapKho = 1; }
                    if (TenLoaiNhapKho === void 0) { TenLoaiNhapKho = null; }
                    if (NguoiGiaoId === void 0) { NguoiGiaoId = null; }
                    if (TenNguoiGiao === void 0) { TenNguoiGiao = null; }
                    if (TenNguoiGiaoNgoai === void 0) { TenNguoiGiaoNgoai = null; }
                    if (NguoiNhapId === void 0) { NguoiNhapId = null; }
                    if (TenNguoiNhap === void 0) { TenNguoiNhap = null; }
                    if (LoaiNguoiGiao === void 0) { LoaiNguoiGiao = 1; }
                    if (NhapKhoVatTuChiTiets === void 0) { NhapKhoVatTuChiTiets = []; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    if (DaXuatKho === void 0) { DaXuatKho = null; }
                    this.Id = Id;
                    this.KhoVatTuId = KhoVatTuId;
                    this.TenKhoVatTu = TenKhoVatTu;
                    this.SoChungTu = SoChungTu;
                    this.LoaiNhapKho = LoaiNhapKho;
                    this.TenLoaiNhapKho = TenLoaiNhapKho;
                    this.NguoiGiaoId = NguoiGiaoId;
                    this.TenNguoiGiao = TenNguoiGiao;
                    this.TenNguoiGiaoNgoai = TenNguoiGiaoNgoai;
                    this.NguoiNhapId = NguoiNhapId;
                    this.TenNguoiNhap = TenNguoiNhap;
                    this.LoaiNguoiGiao = LoaiNguoiGiao;
                    this.NhapKhoVatTuChiTiets = NhapKhoVatTuChiTiets;
                    this.NgayNhap = NgayNhap;
                    this.DaXuatKho = DaXuatKho;
                }
                return NhapKhoVatTu;
            }());
            var NhapKhoVatTuChiTiet = /** @class */ (function () {
                function NhapKhoVatTuChiTiet(Id, IdView, NhapKhoVatTuId, VatTuBenhVienId, TenVatTu, HopDongThauVatTuId, TenHopDongThau, KhoVatTuViTriId, ViTri, DatChatLuong, TenDatChatLuong, HanSuDung, TextHanSuDung, Solo, SoLuongNhap, SoLuongNhapTrongGrid, SoLuongHienTaiVatTuTheoHopDongThauDaLuu, DonGiaNhap, DonGiaBan, TextDonGiaNhap, TextDonGiaBan, TextChietKhau, TextSoLuongNhap, TextVAT, VAT, ChietKhau, MaVach, NgayNhap) {
                    if (Id === void 0) { Id = 0; }
                    if (IdView === void 0) { IdView = 0; }
                    if (NhapKhoVatTuId === void 0) { NhapKhoVatTuId = 0; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (HopDongThauVatTuId === void 0) { HopDongThauVatTuId = 0; }
                    if (TenHopDongThau === void 0) { TenHopDongThau = null; }
                    if (KhoVatTuViTriId === void 0) { KhoVatTuViTriId = null; }
                    if (ViTri === void 0) { ViTri = null; }
                    if (DatChatLuong === void 0) { DatChatLuong = true; }
                    if (TenDatChatLuong === void 0) { TenDatChatLuong = "Đạt"; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (TextHanSuDung === void 0) { TextHanSuDung = null; }
                    if (Solo === void 0) { Solo = null; }
                    if (SoLuongNhap === void 0) { SoLuongNhap = null; }
                    if (SoLuongNhapTrongGrid === void 0) { SoLuongNhapTrongGrid = 0; }
                    if (SoLuongHienTaiVatTuTheoHopDongThauDaLuu === void 0) { SoLuongHienTaiVatTuTheoHopDongThauDaLuu = 0; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    if (DonGiaBan === void 0) { DonGiaBan = null; }
                    if (TextDonGiaNhap === void 0) { TextDonGiaNhap = null; }
                    if (TextDonGiaBan === void 0) { TextDonGiaBan = null; }
                    if (TextChietKhau === void 0) { TextChietKhau = null; }
                    if (TextSoLuongNhap === void 0) { TextSoLuongNhap = null; }
                    if (TextVAT === void 0) { TextVAT = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (ChietKhau === void 0) { ChietKhau = null; }
                    if (MaVach === void 0) { MaVach = null; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    this.Id = Id;
                    this.IdView = IdView;
                    this.NhapKhoVatTuId = NhapKhoVatTuId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.TenVatTu = TenVatTu;
                    this.HopDongThauVatTuId = HopDongThauVatTuId;
                    this.TenHopDongThau = TenHopDongThau;
                    this.KhoVatTuViTriId = KhoVatTuViTriId;
                    this.ViTri = ViTri;
                    this.DatChatLuong = DatChatLuong;
                    this.TenDatChatLuong = TenDatChatLuong;
                    this.HanSuDung = HanSuDung;
                    this.TextHanSuDung = TextHanSuDung;
                    this.Solo = Solo;
                    this.SoLuongNhap = SoLuongNhap;
                    this.SoLuongNhapTrongGrid = SoLuongNhapTrongGrid;
                    this.SoLuongHienTaiVatTuTheoHopDongThauDaLuu = SoLuongHienTaiVatTuTheoHopDongThauDaLuu;
                    this.DonGiaNhap = DonGiaNhap;
                    this.DonGiaBan = DonGiaBan;
                    this.TextDonGiaNhap = TextDonGiaNhap;
                    this.TextDonGiaBan = TextDonGiaBan;
                    this.TextChietKhau = TextChietKhau;
                    this.TextSoLuongNhap = TextSoLuongNhap;
                    this.TextVAT = TextVAT;
                    this.VAT = VAT;
                    this.ChietKhau = ChietKhau;
                    this.MaVach = MaVach;
                    this.NgayNhap = NgayNhap;
                }
                return NhapKhoVatTuChiTiet;
            }());
            var NhapKhoVatTuSearch = /** @class */ (function () {
                function NhapKhoVatTuSearch(KhoVatTuId, TenKhoVatTu, DangChoDuyet, DaDuyet, TuChoiDuyet, LoaiNhapKho, TenLoaiNhapKho, SearchString, RangeNhap, RangeDuyet) {
                    if (KhoVatTuId === void 0) { KhoVatTuId = 0; }
                    if (TenKhoVatTu === void 0) { TenKhoVatTu = null; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (LoaiNhapKho === void 0) { LoaiNhapKho = 0; }
                    if (TenLoaiNhapKho === void 0) { TenLoaiNhapKho = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (RangeNhap === void 0) { RangeNhap = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeDuyet === void 0) { RangeDuyet = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    this.KhoVatTuId = KhoVatTuId;
                    this.TenKhoVatTu = TenKhoVatTu;
                    this.DangChoDuyet = DangChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.LoaiNhapKho = LoaiNhapKho;
                    this.TenLoaiNhapKho = TenLoaiNhapKho;
                    this.SearchString = SearchString;
                    this.RangeNhap = RangeNhap;
                    this.RangeDuyet = RangeDuyet;
                }
                return NhapKhoVatTuSearch;
            }());
            var rangeDate = /** @class */ (function () {
                function rangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return rangeDate;
            }());
            var ThongTinDuyetKhoVatTu = /** @class */ (function () {
                function ThongTinDuyetKhoVatTu(NguoiNhapId, SoChungTu, TenNguoiNhap, NgayNhap, TinhTrangDuyet, ClassTrangThai, NguoiDuyetId, NguoiDuyet, NgayDuyet) {
                    if (NguoiNhapId === void 0) { NguoiNhapId = 0; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (TenNguoiNhap === void 0) { TenNguoiNhap = null; }
                    if (NgayNhap === void 0) { NgayNhap = new Date(); }
                    if (TinhTrangDuyet === void 0) { TinhTrangDuyet = null; }
                    if (ClassTrangThai === void 0) { ClassTrangThai = null; }
                    if (NguoiDuyetId === void 0) { NguoiDuyetId = 0; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = new Date(); }
                    this.NguoiNhapId = NguoiNhapId;
                    this.SoChungTu = SoChungTu;
                    this.TenNguoiNhap = TenNguoiNhap;
                    this.NgayNhap = NgayNhap;
                    this.TinhTrangDuyet = TinhTrangDuyet;
                    this.ClassTrangThai = ClassTrangThai;
                    this.NguoiDuyetId = NguoiDuyetId;
                    this.NguoiDuyet = NguoiDuyet;
                    this.NgayDuyet = NgayDuyet;
                }
                return ThongTinDuyetKhoVatTu;
            }());
            var ThongTinLyDoHuyNhapKhoVatTu = /** @class */ (function () {
                function ThongTinLyDoHuyNhapKhoVatTu(YeuCauNhapKhoVatTuId, LyDoHuy) {
                    if (YeuCauNhapKhoVatTuId === void 0) { YeuCauNhapKhoVatTuId = 0; }
                    if (LyDoHuy === void 0) { LyDoHuy = null; }
                    this.YeuCauNhapKhoVatTuId = YeuCauNhapKhoVatTuId;
                    this.LyDoHuy = LyDoHuy;
                }
                return ThongTinLyDoHuyNhapKhoVatTu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
          \**********************************************************************************************/
        /*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function () { return YeuCauMuaVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function () { return YeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function () { return YeuCauMuaVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function () { return PhieuYeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function () { return ThongTinVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function () { return YeuCauMuaVatTuChiTietValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var YeuCauMuaVatTuGridVo = /** @class */ (function () {
                function YeuCauMuaVatTuGridVo(SoPhieu, TenNhanVienYeuCau, NgayYeuCauTuFormat, NgayYeuCauDenFormat, RangeFromDate, FromDate, ToDate, ChoDuyet, DaDuyet, TuChoiDuyet, TuNgay, DenNgay, SearchString) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new RangeDate(); }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
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
                return YeuCauMuaVatTuGridVo;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return RangeDate;
            }());
            var YeuCauMuaVatTu = /** @class */ (function () {
                function YeuCauMuaVatTu(Id, SoPhieu, KhoId, NhanVienYeuCauId, NgayYeuCau, KyDuTruMuaDuocPhamVatTuId, GhiChu, TruongKhoaId, TruongKhoaDuyet, TenKho, TenNhanVienYeuCau, TenNhomDuTru, TenKyDuTru, NgayTaiKhoa, NgayKhoDuoc, NgayGiamDoc, TrangThai, TenTruongKhoa, NgayTruongKhoaDuyet, TenNhanVienKhoDuoc, NgayKhoDuocDuyet, TenGiamDoc, NgayGiamDocDuyet, LyDoTruongKhoaTuChoi, DuTruMuaVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TruongKhoaId === void 0) { TruongKhoaId = null; }
                    if (TruongKhoaDuyet === void 0) { TruongKhoaDuyet = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (TenNhomDuTru === void 0) { TenNhomDuTru = null; }
                    if (TenKyDuTru === void 0) { TenKyDuTru = null; }
                    if (NgayTaiKhoa === void 0) { NgayTaiKhoa = null; }
                    if (NgayKhoDuoc === void 0) { NgayKhoDuoc = null; }
                    if (NgayGiamDoc === void 0) { NgayGiamDoc = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTruongKhoa === void 0) { TenTruongKhoa = null; }
                    if (NgayTruongKhoaDuyet === void 0) { NgayTruongKhoaDuyet = null; }
                    if (TenNhanVienKhoDuoc === void 0) { TenNhanVienKhoDuoc = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDoc === void 0) { TenGiamDoc = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (DuTruMuaVatTuChiTiets === void 0) { DuTruMuaVatTuChiTiets = []; }
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
                return YeuCauMuaVatTu;
            }());
            var YeuCauMuaVatTuChiTiet = /** @class */ (function () {
                function YeuCauMuaVatTuChiTiet(STT, Id, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTaiKhoaDuyet, NhomDieuTriDuPhong, GhiChu, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
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
                return YeuCauMuaVatTuChiTiet;
            }());
            var PhieuYeuCauMuaVatTu = /** @class */ (function () {
                function PhieuYeuCauMuaVatTu(DuTruMuaVatTuId, HostingName, Header, TrangThai) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.TrangThai = TrangThai;
                }
                return PhieuYeuCauMuaVatTu;
            }());
            var ThongTinVatTuChiTiet = /** @class */ (function () {
                function ThongTinVatTuChiTiet(STT, Id, NhomVatTuId, VatTuId, LaVatTuBHYT, Ma, DVT, QuyCach, NhaSX, NuocSX, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongTonDuTru, SoLuongTonKhoTong, SoLuongChuaNhapVeHDT, // Hợp đồng thầu
                ThongTinChiTietTonKhoTongs, ThongTinChiTietTonHDTs, LoaiVatTu, TenLoaiVatTu, Ten, SLTonDuTru, SLTonKhoTong, SLChuaNhapVeHDT, SoLuongDuTruTaiKhoaDuyet, SoLuongDuTruKhoaDuocDuyet, SoLuongDuTruGiamDocDuyet, KhoId, IsThemVatTu, GhiChu, YeuCauMuaVatTuChiTietValidators) {
                    if (STT === void 0) { STT = 0; }
                    if (Id === void 0) { Id = 0; }
                    if (NhomVatTuId === void 0) { NhomVatTuId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongTonDuTru === void 0) { SoLuongTonDuTru = null; }
                    if (SoLuongTonKhoTong === void 0) { SoLuongTonKhoTong = null; }
                    if (SoLuongChuaNhapVeHDT === void 0) { SoLuongChuaNhapVeHDT = null; }
                    if (ThongTinChiTietTonKhoTongs === void 0) { ThongTinChiTietTonKhoTongs = []; }
                    if (ThongTinChiTietTonHDTs === void 0) { ThongTinChiTietTonHDTs = []; }
                    if (LoaiVatTu === void 0) { LoaiVatTu = null; }
                    if (TenLoaiVatTu === void 0) { TenLoaiVatTu = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (SLTonDuTru === void 0) { SLTonDuTru = null; }
                    if (SLTonKhoTong === void 0) { SLTonKhoTong = null; }
                    if (SLChuaNhapVeHDT === void 0) { SLChuaNhapVeHDT = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (SoLuongDuTruKhoaDuocDuyet === void 0) { SoLuongDuTruKhoaDuocDuyet = null; }
                    if (SoLuongDuTruGiamDocDuyet === void 0) { SoLuongDuTruGiamDocDuyet = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (IsThemVatTu === void 0) { IsThemVatTu = false; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauMuaVatTuChiTietValidators === void 0) { YeuCauMuaVatTuChiTietValidators = []; }
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
                return ThongTinVatTuChiTiet;
            }());
            var YeuCauMuaVatTuChiTietValidator = /** @class */ (function () {
                function YeuCauMuaVatTuChiTietValidator(VatTuId, LaVatTuBHYT) {
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                }
                return YeuCauMuaVatTuChiTietValidator;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-kiem-soat-nhiem-khuan-nhap-kho~644c0018-es2015.js.map
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-kiem-soat-nhiem-khuan-nhap-kho~644c0018-es5.js.map
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-vat-tu-duyet-nhap-kho-module~nhap-xuat-kiem-soat-nhiem-khuan-nhap-kho~644c0018-es5.js.map