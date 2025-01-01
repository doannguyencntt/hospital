(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./node_modules/@iconify/icons-ic/file-download.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/file-download.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/outline-content-copy.js": 
        /*!****************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/outline-content-copy.js ***!
          \****************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1z\" fill=\"currentColor\"/><path d=\"M8 7v14h11V7H8zm0-2h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/restore.js": 
        /*!***************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/restore.js ***!
          \***************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-apps.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-apps.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-warning.js": 
        /*!***********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-warning.js ***!
          \***********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"currentColor\"/><path d=\"M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.model.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.model.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: HoatDongKhamDoanSearch, HoatDongKhamDoanQueryInfoQueryInfo, BaoCaoHoatDongKhamDoan, BaoCaoHoatDongKhamDoanPhongKham */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoatDongKhamDoanSearch", function () { return HoatDongKhamDoanSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoatDongKhamDoanQueryInfoQueryInfo", function () { return HoatDongKhamDoanQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhamDoan", function () { return BaoCaoHoatDongKhamDoan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhamDoanPhongKham", function () { return BaoCaoHoatDongKhamDoanPhongKham; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var HoatDongKhamDoanSearch = /** @class */ (function () {
                function HoatDongKhamDoanSearch(CongTyKhamSucKhoeId, HopDongKhamSucKhoeId, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, FromDate, ToDate) {
                    if (CongTyKhamSucKhoeId === void 0) { CongTyKhamSucKhoeId = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (ThoiDiemTiepNhanTuFormat === void 0) { ThoiDiemTiepNhanTuFormat = null; }
                    if (ThoiDiemTiepNhanDenFormat === void 0) { ThoiDiemTiepNhanDenFormat = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
                    this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return HoatDongKhamDoanSearch;
            }());
            var HoatDongKhamDoanQueryInfoQueryInfo = /** @class */ (function () {
                function HoatDongKhamDoanQueryInfoQueryInfo(FromDateString, ToDateString, CongTyKhamSucKhoeId, HopDongKhamSucKhoeId, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDateString === void 0) { FromDateString = null; }
                    if (ToDateString === void 0) { ToDateString = null; }
                    if (CongTyKhamSucKhoeId === void 0) { CongTyKhamSucKhoeId = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (ThoiDiemTiepNhanTuFormat === void 0) { ThoiDiemTiepNhanTuFormat = null; }
                    if (ThoiDiemTiepNhanDenFormat === void 0) { ThoiDiemTiepNhanDenFormat = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.FromDateString = FromDateString;
                    this.ToDateString = ToDateString;
                    this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
                    this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return HoatDongKhamDoanQueryInfoQueryInfo;
            }());
            var BaoCaoHoatDongKhamDoan = /** @class */ (function () {
                function BaoCaoHoatDongKhamDoan(CongTyKhamSucKhoeId, HopDongKhamSucKhoeId, TenHopDongKhamSucKhoe, TenCongTyKhamSucKhoe, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, TongSo, NoiThucHienCuaNguoiBenhs) {
                    if (CongTyKhamSucKhoeId === void 0) { CongTyKhamSucKhoeId = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (TenHopDongKhamSucKhoe === void 0) { TenHopDongKhamSucKhoe = null; }
                    if (TenCongTyKhamSucKhoe === void 0) { TenCongTyKhamSucKhoe = null; }
                    if (ThoiDiemTiepNhanTuFormat === void 0) { ThoiDiemTiepNhanTuFormat = null; }
                    if (ThoiDiemTiepNhanDenFormat === void 0) { ThoiDiemTiepNhanDenFormat = null; }
                    if (TongSo === void 0) { TongSo = null; }
                    if (NoiThucHienCuaNguoiBenhs === void 0) { NoiThucHienCuaNguoiBenhs = []; }
                    this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.TenHopDongKhamSucKhoe = TenHopDongKhamSucKhoe;
                    this.TenCongTyKhamSucKhoe = TenCongTyKhamSucKhoe;
                    this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
                    this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
                    this.TongSo = TongSo;
                    this.NoiThucHienCuaNguoiBenhs = NoiThucHienCuaNguoiBenhs;
                }
                return BaoCaoHoatDongKhamDoan;
            }());
            var BaoCaoHoatDongKhamDoanPhongKham = /** @class */ (function () {
                function BaoCaoHoatDongKhamDoanPhongKham(NoiThucHienId, TenNoiThucHien, SoLan) {
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (TenNoiThucHien === void 0) { TenNoiThucHien = null; }
                    if (SoLan === void 0) { SoLan = null; }
                    this.NoiThucHienId = NoiThucHienId;
                    this.TenNoiThucHien = TenNoiThucHien;
                    this.SoLan = SoLan;
                }
                return BaoCaoHoatDongKhamDoanPhongKham;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model.ts": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-giuong/dich-vu-giuong.model.ts ***!
          \**********************************************************************************************************/
        /*! exports provided: DichVuGiuong, DichVuGiuongThongTinGia */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuong", function () { return DichVuGiuong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGiuongThongTinGia", function () { return DichVuGiuongThongTinGia; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DichVuGiuong = /** @class */ (function () {
                function DichVuGiuong(Id, Ma, MaTT37, Ten, KhoaId, HangBenhVien, MoTa, MaChung, TenChung) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = ""; }
                    if (MaTT37 === void 0) { MaTT37 = ""; }
                    if (Ten === void 0) { Ten = ""; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (HangBenhVien === void 0) { HangBenhVien = null; }
                    if (MoTa === void 0) { MoTa = ""; }
                    if (MaChung === void 0) { MaChung = null; }
                    if (TenChung === void 0) { TenChung = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.MaTT37 = MaTT37;
                    this.Ten = Ten;
                    this.KhoaId = KhoaId;
                    this.HangBenhVien = HangBenhVien;
                    this.MoTa = MoTa;
                    this.MaChung = MaChung;
                    this.TenChung = TenChung;
                }
                return DichVuGiuong;
            }());
            var DichVuGiuongThongTinGia = /** @class */ (function () {
                function DichVuGiuongThongTinGia(Gia, TuNgay, DenNgay, TuNgayDisplay, DenNgayDisplay, DVTTGiaMoTa, HieuLuc) {
                    if (Gia === void 0) { Gia = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (TuNgayDisplay === void 0) { TuNgayDisplay = ""; }
                    if (DenNgayDisplay === void 0) { DenNgayDisplay = ""; }
                    if (DVTTGiaMoTa === void 0) { DVTTGiaMoTa = ""; }
                    if (HieuLuc === void 0) { HieuLuc = false; }
                    this.Gia = Gia;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.TuNgayDisplay = TuNgayDisplay;
                    this.DenNgayDisplay = DenNgayDisplay;
                    this.DVTTGiaMoTa = DVTTGiaMoTa;
                    this.HieuLuc = HieuLuc;
                }
                return DichVuGiuongThongTinGia;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh/dich-vu-kham-benh.model.ts": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-kham-benh/dich-vu-kham-benh.model.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: DichVuKhamBenh, DichVuKhamBenhThongTinGiaBaoHiemYTe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKhamBenh", function () { return DichVuKhamBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKhamBenhThongTinGiaBaoHiemYTe", function () { return DichVuKhamBenhThongTinGiaBaoHiemYTe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DichVuKhamBenh = /** @class */ (function () {
                function DichVuKhamBenh(Ma, MaChung, MaTT37, Ten, TenChung, KhoaId, TenKhoa, HangBenhVien, TenHangBenhVien, MoTa, NgoaiQuyDinhBHYT, DichVuKhamBenhThongTinGias) {
                    if (Ma === void 0) { Ma = ""; }
                    if (MaChung === void 0) { MaChung = null; }
                    if (MaTT37 === void 0) { MaTT37 = ""; }
                    if (Ten === void 0) { Ten = ""; }
                    if (TenChung === void 0) { TenChung = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (TenKhoa === void 0) { TenKhoa = ""; }
                    if (HangBenhVien === void 0) { HangBenhVien = null; }
                    if (TenHangBenhVien === void 0) { TenHangBenhVien = ""; }
                    if (MoTa === void 0) { MoTa = ""; }
                    if (NgoaiQuyDinhBHYT === void 0) { NgoaiQuyDinhBHYT = null; }
                    if (DichVuKhamBenhThongTinGias === void 0) { DichVuKhamBenhThongTinGias = []; }
                    this.Ma = Ma;
                    this.MaChung = MaChung;
                    this.MaTT37 = MaTT37;
                    this.Ten = Ten;
                    this.TenChung = TenChung;
                    this.KhoaId = KhoaId;
                    this.TenKhoa = TenKhoa;
                    this.HangBenhVien = HangBenhVien;
                    this.TenHangBenhVien = TenHangBenhVien;
                    this.MoTa = MoTa;
                    this.NgoaiQuyDinhBHYT = NgoaiQuyDinhBHYT;
                    this.DichVuKhamBenhThongTinGias = DichVuKhamBenhThongTinGias;
                }
                return DichVuKhamBenh;
            }());
            var DichVuKhamBenhThongTinGiaBaoHiemYTe = /** @class */ (function () {
                function DichVuKhamBenhThongTinGiaBaoHiemYTe(Id, Gia, TuNgay, DenNgay, MoTa, HieuLuc) {
                    if (Id === void 0) { Id = 0; }
                    if (Gia === void 0) { Gia = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (HieuLuc === void 0) { HieuLuc = null; }
                    this.Id = Id;
                    this.Gia = Gia;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.MoTa = MoTa;
                    this.HieuLuc = HieuLuc;
                }
                return DichVuKhamBenhThongTinGiaBaoHiemYTe;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat/dich-vu-ky-thuat.model.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/dich-vu-ky-thuat/dich-vu-ky-thuat.model.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: DichVuKyThuat, FileExcelDichVuKyThuat, ThongTinError, DichVuKyThuatBaoHiemYTe, DichVuKyThuatThongTinGiaBaoHiemYTe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuat", function () { return DichVuKyThuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExcelDichVuKyThuat", function () { return FileExcelDichVuKyThuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinError", function () { return ThongTinError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuatBaoHiemYTe", function () { return DichVuKyThuatBaoHiemYTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuatThongTinGiaBaoHiemYTe", function () { return DichVuKyThuatThongTinGiaBaoHiemYTe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DichVuKyThuat = /** @class */ (function () {
                function DichVuKyThuat(TenChung, TenTiengAnh, MaChung, Ma4350, MaGia, TenGia, NhomChiPhi, TenNhomChiPhi, NhomDichVuKyThuatId, TenNhomDichVuKyThuat, LoaiPhauThuatThuThuat, TenLoaiPhauThuatThuThuat, Mota) {
                    if (TenChung === void 0) { TenChung = null; }
                    if (TenTiengAnh === void 0) { TenTiengAnh = null; }
                    if (MaChung === void 0) { MaChung = null; }
                    if (Ma4350 === void 0) { Ma4350 = null; }
                    if (MaGia === void 0) { MaGia = null; }
                    if (TenGia === void 0) { TenGia = null; }
                    if (NhomChiPhi === void 0) { NhomChiPhi = null; }
                    if (TenNhomChiPhi === void 0) { TenNhomChiPhi = null; }
                    if (NhomDichVuKyThuatId === void 0) { NhomDichVuKyThuatId = null; }
                    if (TenNhomDichVuKyThuat === void 0) { TenNhomDichVuKyThuat = null; }
                    if (LoaiPhauThuatThuThuat === void 0) { LoaiPhauThuatThuThuat = null; }
                    if (TenLoaiPhauThuatThuThuat === void 0) { TenLoaiPhauThuatThuThuat = null; }
                    if (Mota === void 0) { Mota = null; }
                    this.TenChung = TenChung;
                    this.TenTiengAnh = TenTiengAnh;
                    this.MaChung = MaChung;
                    this.Ma4350 = Ma4350;
                    this.MaGia = MaGia;
                    this.TenGia = TenGia;
                    this.NhomChiPhi = NhomChiPhi;
                    this.TenNhomChiPhi = TenNhomChiPhi;
                    this.NhomDichVuKyThuatId = NhomDichVuKyThuatId;
                    this.TenNhomDichVuKyThuat = TenNhomDichVuKyThuat;
                    this.LoaiPhauThuatThuThuat = LoaiPhauThuatThuThuat;
                    this.TenLoaiPhauThuatThuThuat = TenLoaiPhauThuatThuThuat;
                    this.Mota = Mota;
                }
                return DichVuKyThuat;
            }());
            var FileExcelDichVuKyThuat = /** @class */ (function () {
                function FileExcelDichVuKyThuat(Id, Ma, Ten, TenGuid, DuongDan, MoTa, KichThuoc, LoaiTapTin) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (KichThuoc === void 0) { KichThuoc = 0; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.DuongDan = DuongDan;
                    this.MoTa = MoTa;
                    this.KichThuoc = KichThuoc;
                    this.LoaiTapTin = LoaiTapTin;
                }
                return FileExcelDichVuKyThuat;
            }());
            var ThongTinError = /** @class */ (function () {
                function ThongTinError(Ma, TotalThanhCong, Error) {
                    if (Ma === void 0) { Ma = null; }
                    if (TotalThanhCong === void 0) { TotalThanhCong = null; }
                    if (Error === void 0) { Error = null; }
                    this.Ma = Ma;
                    this.TotalThanhCong = TotalThanhCong;
                    this.Error = Error;
                }
                return ThongTinError;
            }());
            var DichVuKyThuatBaoHiemYTe = /** @class */ (function () {
                function DichVuKyThuatBaoHiemYTe(Id, MaChung, TenChung, TenTiengAnh, Ma4350, MaGia, TenGia, NhomChiPhi, TenNhomChiPhi, NhomDichVuKyThuatId, TenNhomDichVuKyThuat, LoaiPhauThuatThuThuat, TenLoaiPhauThuatThuThuat, NgoaiQuyDinhBHYT, MoTa, DichVuKyThuatThongTinGias) {
                    if (Id === void 0) { Id = 0; }
                    if (MaChung === void 0) { MaChung = null; }
                    if (TenChung === void 0) { TenChung = null; }
                    if (TenTiengAnh === void 0) { TenTiengAnh = null; }
                    if (Ma4350 === void 0) { Ma4350 = null; }
                    if (MaGia === void 0) { MaGia = null; }
                    if (TenGia === void 0) { TenGia = null; }
                    if (NhomChiPhi === void 0) { NhomChiPhi = null; }
                    if (TenNhomChiPhi === void 0) { TenNhomChiPhi = null; }
                    if (NhomDichVuKyThuatId === void 0) { NhomDichVuKyThuatId = null; }
                    if (TenNhomDichVuKyThuat === void 0) { TenNhomDichVuKyThuat = null; }
                    if (LoaiPhauThuatThuThuat === void 0) { LoaiPhauThuatThuThuat = null; }
                    if (TenLoaiPhauThuatThuThuat === void 0) { TenLoaiPhauThuatThuThuat = null; }
                    if (NgoaiQuyDinhBHYT === void 0) { NgoaiQuyDinhBHYT = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (DichVuKyThuatThongTinGias === void 0) { DichVuKyThuatThongTinGias = []; }
                    this.Id = Id;
                    this.MaChung = MaChung;
                    this.TenChung = TenChung;
                    this.TenTiengAnh = TenTiengAnh;
                    this.Ma4350 = Ma4350;
                    this.MaGia = MaGia;
                    this.TenGia = TenGia;
                    this.NhomChiPhi = NhomChiPhi;
                    this.TenNhomChiPhi = TenNhomChiPhi;
                    this.NhomDichVuKyThuatId = NhomDichVuKyThuatId;
                    this.TenNhomDichVuKyThuat = TenNhomDichVuKyThuat;
                    this.LoaiPhauThuatThuThuat = LoaiPhauThuatThuThuat;
                    this.TenLoaiPhauThuatThuThuat = TenLoaiPhauThuatThuThuat;
                    this.NgoaiQuyDinhBHYT = NgoaiQuyDinhBHYT;
                    this.MoTa = MoTa;
                    this.DichVuKyThuatThongTinGias = DichVuKyThuatThongTinGias;
                }
                return DichVuKyThuatBaoHiemYTe;
            }());
            var DichVuKyThuatThongTinGiaBaoHiemYTe = /** @class */ (function () {
                function DichVuKyThuatThongTinGiaBaoHiemYTe(Id, HangBenhVien, TenHangBenhVien, Gia, TuNgay, DenNgay, ThongTu, QuyetDinh, MoTa, HieuLuc) {
                    if (Id === void 0) { Id = 0; }
                    if (HangBenhVien === void 0) { HangBenhVien = null; }
                    if (TenHangBenhVien === void 0) { TenHangBenhVien = null; }
                    if (Gia === void 0) { Gia = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (ThongTu === void 0) { ThongTu = null; }
                    if (QuyetDinh === void 0) { QuyetDinh = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (HieuLuc === void 0) { HieuLuc = null; }
                    this.Id = Id;
                    this.HangBenhVien = HangBenhVien;
                    this.TenHangBenhVien = TenHangBenhVien;
                    this.Gia = Gia;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.ThongTu = ThongTu;
                    this.QuyetDinh = QuyetDinh;
                    this.MoTa = MoTa;
                    this.HieuLuc = HieuLuc;
                }
                return DichVuKyThuatThongTinGiaBaoHiemYTe;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts ***!
          \*************************************************************************************************/
        /*! exports provided: CongNoBaoHiemTuNhanTimKiem, CongNoBaoHiemTuNhanDateRange, CongTyBaoHiemTuNhanTimKiem, GachNo, GachNoCongTyBaoHiemTuNhan, GachNoBenhNhan, GachNoTimKiemTrangThai */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanTimKiem", function () { return CongNoBaoHiemTuNhanTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoBaoHiemTuNhanDateRange", function () { return CongNoBaoHiemTuNhanDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongTyBaoHiemTuNhanTimKiem", function () { return CongTyBaoHiemTuNhanTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachNo", function () { return GachNo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachNoCongTyBaoHiemTuNhan", function () { return GachNoCongTyBaoHiemTuNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachNoBenhNhan", function () { return GachNoBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GachNoTimKiemTrangThai", function () { return GachNoTimKiemTrangThai; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var CongNoBaoHiemTuNhanTimKiem = /** @class */ (function () {
                function CongNoBaoHiemTuNhanTimKiem(SearchString, CongTyId, LoaiThuChi, TuNgayDenNgayCT, TuNgayDenNgayHD, TuNgayDenNgay, TrangThai) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (LoaiThuChi === void 0) { LoaiThuChi = null; }
                    if (TuNgayDenNgayCT === void 0) { TuNgayDenNgayCT = new CongNoBaoHiemTuNhanDateRange(); }
                    if (TuNgayDenNgayHD === void 0) { TuNgayDenNgayHD = new CongNoBaoHiemTuNhanDateRange(); }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new CongNoBaoHiemTuNhanDateRange(); }
                    if (TrangThai === void 0) { TrangThai = new GachNoTimKiemTrangThai(); }
                    this.SearchString = SearchString;
                    this.CongTyId = CongTyId;
                    this.LoaiThuChi = LoaiThuChi;
                    this.TuNgayDenNgayCT = TuNgayDenNgayCT;
                    this.TuNgayDenNgayHD = TuNgayDenNgayHD;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                    this.TrangThai = TrangThai;
                }
                return CongNoBaoHiemTuNhanTimKiem;
            }());
            var CongNoBaoHiemTuNhanDateRange = /** @class */ (function () {
                function CongNoBaoHiemTuNhanDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return CongNoBaoHiemTuNhanDateRange;
            }());
            var CongTyBaoHiemTuNhanTimKiem = /** @class */ (function () {
                function CongTyBaoHiemTuNhanTimKiem(Ma, Ten, DiaChi, DienThoai, MaSoThue) {
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (DienThoai === void 0) { DienThoai = null; }
                    if (MaSoThue === void 0) { MaSoThue = null; }
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.DiaChi = DiaChi;
                    this.DienThoai = DienThoai;
                    this.MaSoThue = MaSoThue;
                }
                return CongTyBaoHiemTuNhanTimKiem;
            }());
            var GachNo = /** @class */ (function () {
                function GachNo(Id, SoChungTu, NgayChungTu, LoaiChungTu, TenLoaiChungTu, KyKeToan, TrangThai, TenTrangThai, LoaiTienTe, TenLoaiTienTe, TyGia, NgayThucThu, LoaiDoiTuong, TenLoaiDoiTuong, CongTyBaoHiemTuNhanId, BenhNhanId, TaiKhoan, TaiKhoanLoaiTien, NguoiNop, ChungTuGoc, DienGiaiChung, SoTaiKhoanNganHang, NguyenTe, ThueNguyenTe, TongNguyenTe, HachToan, ThueHachToan, TongHachToan, LoaiThuChi, VAT, TienHachToan, KhoanMucPhi, SoHoaDon, NgayHoaDon, TienThueHachToan, TongTienHachToan, IsShowXacNhanNhapLieu, IsDisabledView, SuDungGoi, CongTyBaoHiemTuNhan, BenhNhan) {
                    if (Id === void 0) { Id = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (NgayChungTu === void 0) { NgayChungTu = null; }
                    if (LoaiChungTu === void 0) { LoaiChungTu = null; }
                    if (TenLoaiChungTu === void 0) { TenLoaiChungTu = null; }
                    if (KyKeToan === void 0) { KyKeToan = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (LoaiTienTe === void 0) { LoaiTienTe = null; }
                    if (TenLoaiTienTe === void 0) { TenLoaiTienTe = null; }
                    if (TyGia === void 0) { TyGia = null; }
                    if (NgayThucThu === void 0) { NgayThucThu = null; }
                    if (LoaiDoiTuong === void 0) { LoaiDoiTuong = null; }
                    if (TenLoaiDoiTuong === void 0) { TenLoaiDoiTuong = null; }
                    if (CongTyBaoHiemTuNhanId === void 0) { CongTyBaoHiemTuNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (TaiKhoan === void 0) { TaiKhoan = null; }
                    if (TaiKhoanLoaiTien === void 0) { TaiKhoanLoaiTien = null; }
                    if (NguoiNop === void 0) { NguoiNop = null; }
                    if (ChungTuGoc === void 0) { ChungTuGoc = null; }
                    if (DienGiaiChung === void 0) { DienGiaiChung = null; }
                    if (SoTaiKhoanNganHang === void 0) { SoTaiKhoanNganHang = null; }
                    if (NguyenTe === void 0) { NguyenTe = null; }
                    if (ThueNguyenTe === void 0) { ThueNguyenTe = null; }
                    if (TongNguyenTe === void 0) { TongNguyenTe = null; }
                    if (HachToan === void 0) { HachToan = null; }
                    if (ThueHachToan === void 0) { ThueHachToan = null; }
                    if (TongHachToan === void 0) { TongHachToan = null; }
                    if (LoaiThuChi === void 0) { LoaiThuChi = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (TienHachToan === void 0) { TienHachToan = null; }
                    if (KhoanMucPhi === void 0) { KhoanMucPhi = null; }
                    if (SoHoaDon === void 0) { SoHoaDon = null; }
                    if (NgayHoaDon === void 0) { NgayHoaDon = null; }
                    if (TienThueHachToan === void 0) { TienThueHachToan = null; }
                    if (TongTienHachToan === void 0) { TongTienHachToan = null; }
                    if (IsShowXacNhanNhapLieu === void 0) { IsShowXacNhanNhapLieu = false; }
                    if (IsDisabledView === void 0) { IsDisabledView = false; }
                    if (SuDungGoi === void 0) { SuDungGoi = null; }
                    if (CongTyBaoHiemTuNhan === void 0) { CongTyBaoHiemTuNhan = new GachNoCongTyBaoHiemTuNhan(); }
                    if (BenhNhan === void 0) { BenhNhan = new GachNoBenhNhan(); }
                    this.Id = Id;
                    this.SoChungTu = SoChungTu;
                    this.NgayChungTu = NgayChungTu;
                    this.LoaiChungTu = LoaiChungTu;
                    this.TenLoaiChungTu = TenLoaiChungTu;
                    this.KyKeToan = KyKeToan;
                    this.TrangThai = TrangThai;
                    this.TenTrangThai = TenTrangThai;
                    this.LoaiTienTe = LoaiTienTe;
                    this.TenLoaiTienTe = TenLoaiTienTe;
                    this.TyGia = TyGia;
                    this.NgayThucThu = NgayThucThu;
                    this.LoaiDoiTuong = LoaiDoiTuong;
                    this.TenLoaiDoiTuong = TenLoaiDoiTuong;
                    this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
                    this.BenhNhanId = BenhNhanId;
                    this.TaiKhoan = TaiKhoan;
                    this.TaiKhoanLoaiTien = TaiKhoanLoaiTien;
                    this.NguoiNop = NguoiNop;
                    this.ChungTuGoc = ChungTuGoc;
                    this.DienGiaiChung = DienGiaiChung;
                    this.SoTaiKhoanNganHang = SoTaiKhoanNganHang;
                    this.NguyenTe = NguyenTe;
                    this.ThueNguyenTe = ThueNguyenTe;
                    this.TongNguyenTe = TongNguyenTe;
                    this.HachToan = HachToan;
                    this.ThueHachToan = ThueHachToan;
                    this.TongHachToan = TongHachToan;
                    this.LoaiThuChi = LoaiThuChi;
                    this.VAT = VAT;
                    this.TienHachToan = TienHachToan;
                    this.KhoanMucPhi = KhoanMucPhi;
                    this.SoHoaDon = SoHoaDon;
                    this.NgayHoaDon = NgayHoaDon;
                    this.TienThueHachToan = TienThueHachToan;
                    this.TongTienHachToan = TongTienHachToan;
                    this.IsShowXacNhanNhapLieu = IsShowXacNhanNhapLieu;
                    this.IsDisabledView = IsDisabledView;
                    this.SuDungGoi = SuDungGoi;
                    this.CongTyBaoHiemTuNhan = CongTyBaoHiemTuNhan;
                    this.BenhNhan = BenhNhan;
                }
                return GachNo;
            }());
            var GachNoCongTyBaoHiemTuNhan = /** @class */ (function () {
                function GachNoCongTyBaoHiemTuNhan(Ma, Ten, DiaChi, DienThoai, MaSoThue, DonVi) {
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (DienThoai === void 0) { DienThoai = null; }
                    if (MaSoThue === void 0) { MaSoThue = null; }
                    if (DonVi === void 0) { DonVi = null; }
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.DiaChi = DiaChi;
                    this.DienThoai = DienThoai;
                    this.MaSoThue = MaSoThue;
                    this.DonVi = DonVi;
                }
                return GachNoCongTyBaoHiemTuNhan;
            }());
            var GachNoBenhNhan = /** @class */ (function () {
                function GachNoBenhNhan(MaBN, HoTen, NgayThangNamSinh, TenGioiTinh, SoChungMinhThu, SoDienThoai, SoDienThoaiDisplay, DiaChiDayDu) {
                    if (MaBN === void 0) { MaBN = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (TenGioiTinh === void 0) { TenGioiTinh = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (SoDienThoaiDisplay === void 0) { SoDienThoaiDisplay = null; }
                    if (DiaChiDayDu === void 0) { DiaChiDayDu = null; }
                    this.MaBN = MaBN;
                    this.HoTen = HoTen;
                    this.NgayThangNamSinh = NgayThangNamSinh;
                    this.TenGioiTinh = TenGioiTinh;
                    this.SoChungMinhThu = SoChungMinhThu;
                    this.SoDienThoai = SoDienThoai;
                    this.SoDienThoaiDisplay = SoDienThoaiDisplay;
                    this.DiaChiDayDu = DiaChiDayDu;
                }
                return GachNoBenhNhan;
            }());
            var GachNoTimKiemTrangThai = /** @class */ (function () {
                function GachNoTimKiemTrangThai(DungGoi, KhongDungGoi) {
                    if (DungGoi === void 0) { DungGoi = true; }
                    if (KhongDungGoi === void 0) { KhongDungGoi = true; }
                    this.DungGoi = DungGoi;
                    this.KhongDungGoi = KhongDungGoi;
                }
                return GachNoTimKiemTrangThai;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-goi-kham-suc-khoe/kham-doan-goi-kham-suc-khoe.model.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: KhamDoanGoiKhamSucKhoeTimKiem, FileExcelDichVu, GoiKhamChungViewModel, KhamSucKhoeDoanChungViewModel, KhamSucKhoeDoanViewModel, DichVuKhamSucKhoeDoanViewModel, GoiKhamSucKhoeNoiThucHienViewModel, KeyIdStringGoiDichVuKhamSucKhoeVo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanGoiKhamSucKhoeTimKiem", function () { return KhamDoanGoiKhamSucKhoeTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExcelDichVu", function () { return FileExcelDichVu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiKhamChungViewModel", function () { return GoiKhamChungViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamSucKhoeDoanChungViewModel", function () { return KhamSucKhoeDoanChungViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamSucKhoeDoanViewModel", function () { return KhamSucKhoeDoanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKhamSucKhoeDoanViewModel", function () { return DichVuKhamSucKhoeDoanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiKhamSucKhoeNoiThucHienViewModel", function () { return GoiKhamSucKhoeNoiThucHienViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyIdStringGoiDichVuKhamSucKhoeVo", function () { return KeyIdStringGoiDichVuKhamSucKhoeVo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanGoiKhamSucKhoeTimKiem = /** @class */ (function () {
                function KhamDoanGoiKhamSucKhoeTimKiem(SearchString) {
                    if (SearchString === void 0) { SearchString = null; }
                    this.SearchString = SearchString;
                }
                return KhamDoanGoiKhamSucKhoeTimKiem;
            }());
            var FileExcelDichVu = /** @class */ (function () {
                function FileExcelDichVu(Id, Ma, Ten, TenGuid, DuongDan, MoTa, KichThuoc, LoaiTapTin) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (KichThuoc === void 0) { KichThuoc = 0; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.DuongDan = DuongDan;
                    this.MoTa = MoTa;
                    this.KichThuoc = KichThuoc;
                    this.LoaiTapTin = LoaiTapTin;
                }
                return FileExcelDichVu;
            }());
            var GoiKhamChungViewModel = /** @class */ (function () {
                function GoiKhamChungViewModel(KeyId, DisplayName) {
                    if (KeyId === void 0) { KeyId = null; }
                    if (DisplayName === void 0) { DisplayName = null; }
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                }
                return GoiKhamChungViewModel;
            }());
            var KhamSucKhoeDoanChungViewModel = /** @class */ (function () {
                function KhamSucKhoeDoanChungViewModel(Id, CongTyKhamSucKhoeId, TenCongTy, HopDongKhamSucKhoeId, SoHopDong, NgayHieuLuc, NgayKetThuc, Ma, Ten, GoiChung, CoSuDungGoiChung, IsKetThucHopDong, IsCopy, DichVuKhamSucKhoeDoans) {
                    if (Id === void 0) { Id = 0; }
                    if (CongTyKhamSucKhoeId === void 0) { CongTyKhamSucKhoeId = null; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (SoHopDong === void 0) { SoHopDong = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (GoiChung === void 0) { GoiChung = null; }
                    if (CoSuDungGoiChung === void 0) { CoSuDungGoiChung = null; }
                    if (IsKetThucHopDong === void 0) { IsKetThucHopDong = null; }
                    if (IsCopy === void 0) { IsCopy = null; }
                    if (DichVuKhamSucKhoeDoans === void 0) { DichVuKhamSucKhoeDoans = []; }
                    this.Id = Id;
                    this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
                    this.TenCongTy = TenCongTy;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.SoHopDong = SoHopDong;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayKetThuc = NgayKetThuc;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.GoiChung = GoiChung;
                    this.CoSuDungGoiChung = CoSuDungGoiChung;
                    this.IsKetThucHopDong = IsKetThucHopDong;
                    this.IsCopy = IsCopy;
                    this.DichVuKhamSucKhoeDoans = DichVuKhamSucKhoeDoans;
                }
                return KhamSucKhoeDoanChungViewModel;
            }());
            var KhamSucKhoeDoanViewModel = /** @class */ (function () {
                function KhamSucKhoeDoanViewModel(Id, CongTyKhamSucKhoeId, TenCongTy, HopDongKhamSucKhoeId, SoHopDong, NgayHieuLuc, NgayKetThuc, Ma, Ten, GoiChung, GoiDichVuPhatSinh, CoSuDungGoiChung, IsKetThucHopDong, IsCopy, DichVuKhamSucKhoeDoans) {
                    if (Id === void 0) { Id = 0; }
                    if (CongTyKhamSucKhoeId === void 0) { CongTyKhamSucKhoeId = null; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (SoHopDong === void 0) { SoHopDong = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (GoiChung === void 0) { GoiChung = null; }
                    if (GoiDichVuPhatSinh === void 0) { GoiDichVuPhatSinh = null; }
                    if (CoSuDungGoiChung === void 0) { CoSuDungGoiChung = null; }
                    if (IsKetThucHopDong === void 0) { IsKetThucHopDong = null; }
                    if (IsCopy === void 0) { IsCopy = null; }
                    if (DichVuKhamSucKhoeDoans === void 0) { DichVuKhamSucKhoeDoans = []; }
                    this.Id = Id;
                    this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
                    this.TenCongTy = TenCongTy;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.SoHopDong = SoHopDong;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayKetThuc = NgayKetThuc;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.GoiChung = GoiChung;
                    this.GoiDichVuPhatSinh = GoiDichVuPhatSinh;
                    this.CoSuDungGoiChung = CoSuDungGoiChung;
                    this.IsKetThucHopDong = IsKetThucHopDong;
                    this.IsCopy = IsCopy;
                    this.DichVuKhamSucKhoeDoans = DichVuKhamSucKhoeDoans;
                }
                return KhamSucKhoeDoanViewModel;
            }());
            var DichVuKhamSucKhoeDoanViewModel = /** @class */ (function () {
                function DichVuKhamSucKhoeDoanViewModel(Id, Nhom, MaNhomDichVuBenhVien, MaNhomDichVuBenhVienCha, TenNhom, 
                // public DichVuKyThuatBenhVienId: number = null,
                DichVuKyThuatBenhVienId, ChuyenKhoaKhamSucKhoe, TenDichVuKyThuatBenhVien, NhomGiaDichVuKyThuatBenhVienId, DonGiaBenhVien, DonGiaUuDai, DonGiaChuaUuDai, HinhThucKhamBenh, GioiTinhNam, GioiTinhNu, CoMangThai, KhongMangThai, DaLapGiaDinh, ChuaLapGiaDinh, SoTuoiTu, SoTuoiDen, SoTuoiDisplay, NoiThucHienString, Loai, SoLan, LaDichVuKham, GoiKhamSucKhoeNoiThucHienIds, GoiKhamSucKhoeNoiThucHiens, DichVuKhamBenhIds, DichVuKyThuatIds) {
                    if (Id === void 0) { Id = 0; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (MaNhomDichVuBenhVien === void 0) { MaNhomDichVuBenhVien = null; }
                    if (MaNhomDichVuBenhVienCha === void 0) { MaNhomDichVuBenhVienCha = null; }
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (DichVuKyThuatBenhVienId === void 0) { DichVuKyThuatBenhVienId = null; }
                    if (ChuyenKhoaKhamSucKhoe === void 0) { ChuyenKhoaKhamSucKhoe = null; }
                    if (TenDichVuKyThuatBenhVien === void 0) { TenDichVuKyThuatBenhVien = null; }
                    if (NhomGiaDichVuKyThuatBenhVienId === void 0) { NhomGiaDichVuKyThuatBenhVienId = null; }
                    if (DonGiaBenhVien === void 0) { DonGiaBenhVien = null; }
                    if (DonGiaUuDai === void 0) { DonGiaUuDai = 0; }
                    if (DonGiaChuaUuDai === void 0) { DonGiaChuaUuDai = 0; }
                    if (HinhThucKhamBenh === void 0) { HinhThucKhamBenh = null; }
                    if (GioiTinhNam === void 0) { GioiTinhNam = null; }
                    if (GioiTinhNu === void 0) { GioiTinhNu = null; }
                    if (CoMangThai === void 0) { CoMangThai = null; }
                    if (KhongMangThai === void 0) { KhongMangThai = null; }
                    if (DaLapGiaDinh === void 0) { DaLapGiaDinh = null; }
                    if (ChuaLapGiaDinh === void 0) { ChuaLapGiaDinh = null; }
                    if (SoTuoiTu === void 0) { SoTuoiTu = null; }
                    if (SoTuoiDen === void 0) { SoTuoiDen = null; }
                    if (SoTuoiDisplay === void 0) { SoTuoiDisplay = null; }
                    if (NoiThucHienString === void 0) { NoiThucHienString = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (SoLan === void 0) { SoLan = null; }
                    if (LaDichVuKham === void 0) { LaDichVuKham = false; }
                    if (GoiKhamSucKhoeNoiThucHienIds === void 0) { GoiKhamSucKhoeNoiThucHienIds = []; }
                    if (GoiKhamSucKhoeNoiThucHiens === void 0) { GoiKhamSucKhoeNoiThucHiens = []; }
                    if (DichVuKhamBenhIds === void 0) { DichVuKhamBenhIds = []; }
                    if (DichVuKyThuatIds === void 0) { DichVuKyThuatIds = []; }
                    this.Id = Id;
                    this.Nhom = Nhom;
                    this.MaNhomDichVuBenhVien = MaNhomDichVuBenhVien;
                    this.MaNhomDichVuBenhVienCha = MaNhomDichVuBenhVienCha;
                    this.TenNhom = TenNhom;
                    this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
                    this.ChuyenKhoaKhamSucKhoe = ChuyenKhoaKhamSucKhoe;
                    this.TenDichVuKyThuatBenhVien = TenDichVuKyThuatBenhVien;
                    this.NhomGiaDichVuKyThuatBenhVienId = NhomGiaDichVuKyThuatBenhVienId;
                    this.DonGiaBenhVien = DonGiaBenhVien;
                    this.DonGiaUuDai = DonGiaUuDai;
                    this.DonGiaChuaUuDai = DonGiaChuaUuDai;
                    this.HinhThucKhamBenh = HinhThucKhamBenh;
                    this.GioiTinhNam = GioiTinhNam;
                    this.GioiTinhNu = GioiTinhNu;
                    this.CoMangThai = CoMangThai;
                    this.KhongMangThai = KhongMangThai;
                    this.DaLapGiaDinh = DaLapGiaDinh;
                    this.ChuaLapGiaDinh = ChuaLapGiaDinh;
                    this.SoTuoiTu = SoTuoiTu;
                    this.SoTuoiDen = SoTuoiDen;
                    this.SoTuoiDisplay = SoTuoiDisplay;
                    this.NoiThucHienString = NoiThucHienString;
                    this.Loai = Loai;
                    this.SoLan = SoLan;
                    this.LaDichVuKham = LaDichVuKham;
                    this.GoiKhamSucKhoeNoiThucHienIds = GoiKhamSucKhoeNoiThucHienIds;
                    this.GoiKhamSucKhoeNoiThucHiens = GoiKhamSucKhoeNoiThucHiens;
                    this.DichVuKhamBenhIds = DichVuKhamBenhIds;
                    this.DichVuKyThuatIds = DichVuKyThuatIds;
                }
                return DichVuKhamSucKhoeDoanViewModel;
            }());
            var GoiKhamSucKhoeNoiThucHienViewModel = /** @class */ (function () {
                function GoiKhamSucKhoeNoiThucHienViewModel(GoiKhamSucKhoeDichVuKhamBenhId, GoiKhamSucKhoeDichVuDichVuKyThuatId, PhongBenhVienId) {
                    if (GoiKhamSucKhoeDichVuKhamBenhId === void 0) { GoiKhamSucKhoeDichVuKhamBenhId = null; }
                    if (GoiKhamSucKhoeDichVuDichVuKyThuatId === void 0) { GoiKhamSucKhoeDichVuDichVuKyThuatId = null; }
                    if (PhongBenhVienId === void 0) { PhongBenhVienId = null; }
                    this.GoiKhamSucKhoeDichVuKhamBenhId = GoiKhamSucKhoeDichVuKhamBenhId;
                    this.GoiKhamSucKhoeDichVuDichVuKyThuatId = GoiKhamSucKhoeDichVuDichVuKyThuatId;
                    this.PhongBenhVienId = PhongBenhVienId;
                }
                return GoiKhamSucKhoeNoiThucHienViewModel;
            }());
            var KeyIdStringGoiDichVuKhamSucKhoeVo = /** @class */ (function () {
                function KeyIdStringGoiDichVuKhamSucKhoeVo(DichVuId, Loai) {
                    if (DichVuId === void 0) { DichVuId = 0; }
                    if (Loai === void 0) { Loai = 1; }
                    this.DichVuId = DichVuId;
                    this.Loai = Loai;
                }
                return KeyIdStringGoiDichVuKhamSucKhoeVo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts ***!
          \*************************************************************************************************/
        /*! exports provided: KhamDoanHopDongKhamTimKiem, ThongTinError, DanhSachPhongTaiCongTy, FileExcelNhanVien, KiemTraHopDongNhanVienChuaKham, KhamDoanHopDongKham, HopDongSucKhoeDiaDiem, HopDongKhamSucKhoeNhanVien, NgheCongViecTruocDay, TienSuBenh, XuatFileExcelTrongGoiHoacNgoaiGoi, MoLaiHopDong, DichVuKhamDoanChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKhamTimKiem", function () { return KhamDoanHopDongKhamTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinError", function () { return ThongTinError; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachPhongTaiCongTy", function () { return DanhSachPhongTaiCongTy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExcelNhanVien", function () { return FileExcelNhanVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiemTraHopDongNhanVienChuaKham", function () { return KiemTraHopDongNhanVienChuaKham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanHopDongKham", function () { return KhamDoanHopDongKham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongSucKhoeDiaDiem", function () { return HopDongSucKhoeDiaDiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongKhamSucKhoeNhanVien", function () { return HopDongKhamSucKhoeNhanVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgheCongViecTruocDay", function () { return NgheCongViecTruocDay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TienSuBenh", function () { return TienSuBenh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatFileExcelTrongGoiHoacNgoaiGoi", function () { return XuatFileExcelTrongGoiHoacNgoaiGoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoLaiHopDong", function () { return MoLaiHopDong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKhamDoanChiTiet", function () { return DichVuKhamDoanChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanHopDongKhamTimKiem = /** @class */ (function () {
                function KhamDoanHopDongKhamTimKiem(SearchString) {
                    if (SearchString === void 0) { SearchString = null; }
                    this.SearchString = SearchString;
                }
                return KhamDoanHopDongKhamTimKiem;
            }());
            var ThongTinError = /** @class */ (function () {
                function ThongTinError(MaGoi, TenNhanVien, TotalThanhCong, Error) {
                    if (MaGoi === void 0) { MaGoi = null; }
                    if (TenNhanVien === void 0) { TenNhanVien = null; }
                    if (TotalThanhCong === void 0) { TotalThanhCong = null; }
                    if (Error === void 0) { Error = null; }
                    this.MaGoi = MaGoi;
                    this.TenNhanVien = TenNhanVien;
                    this.TotalThanhCong = TotalThanhCong;
                    this.Error = Error;
                }
                return ThongTinError;
            }());
            var DanhSachPhongTaiCongTy = /** @class */ (function () {
                function DanhSachPhongTaiCongTy(Id, HopDongKhamSucKhoeId, Ma, Ten, Tang, DanhSachNhanSu) {
                    if (Id === void 0) { Id = 0; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Tang === void 0) { Tang = null; }
                    if (DanhSachNhanSu === void 0) { DanhSachNhanSu = []; }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.Tang = Tang;
                    this.DanhSachNhanSu = DanhSachNhanSu;
                }
                return DanhSachPhongTaiCongTy;
            }());
            var FileExcelNhanVien = /** @class */ (function () {
                function FileExcelNhanVien(Id, Ma, Ten, TenGuid, DuongDan, MoTa, KichThuoc, LoaiTapTin) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (KichThuoc === void 0) { KichThuoc = 0; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.DuongDan = DuongDan;
                    this.MoTa = MoTa;
                    this.KichThuoc = KichThuoc;
                    this.LoaiTapTin = LoaiTapTin;
                }
                return FileExcelNhanVien;
            }());
            var KiemTraHopDongNhanVienChuaKham = /** @class */ (function () {
                function KiemTraHopDongNhanVienChuaKham(NhanVienKhamXong, TrangThai, TenTrangThai, TenNhanVien, MaNhanVien, NgaySinh, GioiTinh) {
                    if (NhanVienKhamXong === void 0) { NhanVienKhamXong = false; }
                    if (TrangThai === void 0) { TrangThai = 0; }
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (TenNhanVien === void 0) { TenNhanVien = null; }
                    if (MaNhanVien === void 0) { MaNhanVien = null; }
                    if (NgaySinh === void 0) { NgaySinh = 0; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    this.NhanVienKhamXong = NhanVienKhamXong;
                    this.TrangThai = TrangThai;
                    this.TenTrangThai = TenTrangThai;
                    this.TenNhanVien = TenNhanVien;
                    this.MaNhanVien = MaNhanVien;
                    this.NgaySinh = NgaySinh;
                    this.GioiTinh = GioiTinh;
                }
                return KiemTraHopDongNhanVienChuaKham;
            }());
            var KhamDoanHopDongKham = /** @class */ (function () {
                function KhamDoanHopDongKham(Id, CongTyKhamSucKhoeId, TenCongTy, SoHopDong, NgayHopDong, LoaiHopDong, TenLoaiHopDong, TrangThaiHopDongKham, TenTrangThaiHopDongKham, SoNguoiKham, GiaTriHopDong, ThanhToanPhatSinh, TiLeChietKhau, SoTienTamUng, SoTienChietKhau, SoTienPhatSinhThucTe, SoTienChiChoNhanVien, NgayHieuLuc, NgayKetThuc, NguoiKyHopDong, NguoiGioiThieu, ChucDanhNguoiKy, DienGiai, HopDongKhamSucKhoeDiaDiems) {
                    if (Id === void 0) { Id = 0; }
                    if (CongTyKhamSucKhoeId === void 0) { CongTyKhamSucKhoeId = null; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    if (SoHopDong === void 0) { SoHopDong = null; }
                    if (NgayHopDong === void 0) { NgayHopDong = new Date(); }
                    if (LoaiHopDong === void 0) { LoaiHopDong = 1; }
                    if (TenLoaiHopDong === void 0) { TenLoaiHopDong = null; }
                    if (TrangThaiHopDongKham === void 0) { TrangThaiHopDongKham = 1; }
                    if (TenTrangThaiHopDongKham === void 0) { TenTrangThaiHopDongKham = "Đang thực hiện"; }
                    if (SoNguoiKham === void 0) { SoNguoiKham = null; }
                    if (GiaTriHopDong === void 0) { GiaTriHopDong = null; }
                    if (ThanhToanPhatSinh === void 0) { ThanhToanPhatSinh = null; }
                    if (TiLeChietKhau === void 0) { TiLeChietKhau = null; }
                    if (SoTienTamUng === void 0) { SoTienTamUng = null; }
                    if (SoTienChietKhau === void 0) { SoTienChietKhau = null; }
                    if (SoTienPhatSinhThucTe === void 0) { SoTienPhatSinhThucTe = null; }
                    if (SoTienChiChoNhanVien === void 0) { SoTienChiChoNhanVien = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = new Date(); }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    if (NguoiKyHopDong === void 0) { NguoiKyHopDong = null; }
                    if (NguoiGioiThieu === void 0) { NguoiGioiThieu = null; }
                    if (ChucDanhNguoiKy === void 0) { ChucDanhNguoiKy = null; }
                    if (DienGiai === void 0) { DienGiai = null; }
                    if (HopDongKhamSucKhoeDiaDiems === void 0) { HopDongKhamSucKhoeDiaDiems = []; }
                    this.Id = Id;
                    this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
                    this.TenCongTy = TenCongTy;
                    this.SoHopDong = SoHopDong;
                    this.NgayHopDong = NgayHopDong;
                    this.LoaiHopDong = LoaiHopDong;
                    this.TenLoaiHopDong = TenLoaiHopDong;
                    this.TrangThaiHopDongKham = TrangThaiHopDongKham;
                    this.TenTrangThaiHopDongKham = TenTrangThaiHopDongKham;
                    this.SoNguoiKham = SoNguoiKham;
                    this.GiaTriHopDong = GiaTriHopDong;
                    this.ThanhToanPhatSinh = ThanhToanPhatSinh;
                    this.TiLeChietKhau = TiLeChietKhau;
                    this.SoTienTamUng = SoTienTamUng;
                    this.SoTienChietKhau = SoTienChietKhau;
                    this.SoTienPhatSinhThucTe = SoTienPhatSinhThucTe;
                    this.SoTienChiChoNhanVien = SoTienChiChoNhanVien;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayKetThuc = NgayKetThuc;
                    this.NguoiKyHopDong = NguoiKyHopDong;
                    this.NguoiGioiThieu = NguoiGioiThieu;
                    this.ChucDanhNguoiKy = ChucDanhNguoiKy;
                    this.DienGiai = DienGiai;
                    this.HopDongKhamSucKhoeDiaDiems = HopDongKhamSucKhoeDiaDiems;
                }
                return KhamDoanHopDongKham;
            }());
            var HopDongSucKhoeDiaDiem = /** @class */ (function () {
                function HopDongSucKhoeDiaDiem(DiaDiem, CongViecId, CongViec, Ngay, GhiChu) {
                    if (DiaDiem === void 0) { DiaDiem = null; }
                    if (CongViecId === void 0) { CongViecId = null; }
                    if (CongViec === void 0) { CongViec = null; }
                    if (Ngay === void 0) { Ngay = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    this.DiaDiem = DiaDiem;
                    this.CongViecId = CongViecId;
                    this.CongViec = CongViec;
                    this.Ngay = Ngay;
                    this.GhiChu = GhiChu;
                }
                return HopDongSucKhoeDiaDiem;
            }());
            var HopDongKhamSucKhoeNhanVien = /** @class */ (function () {
                function HopDongKhamSucKhoeNhanVien(Id, HopDongKhamSucKhoeId, BenhNhanId, STTNhanVien, MaBN, MaNhanVien, HoTen, HoTenKhac, NgaySinh, ThangSinh, NamSinh, NgayThangNamSinh, Tuoi, SoDienThoai, SoChungMinhThu, GioiTinh, NgheNghiepId, QuocTichId, DanTocId, DiaChi, PhuongXaId, QuanHuyenId, TinhThanhId, NhomMau, YeuToRh, Email, TenDonViHoacBoPhan, NhomDoiTuongKhamSucKhoe, GoiKhamSucKhoeId, TenGoiKhamSucKhoe, TinhTrangHonNhan, CoMangThai, TienSuBenhs, GhiChuDiUngThuoc, NgayCapChungMinhThu, NoiCapChungMinhThu, NgayBatDauLamViec, NgheCongViecTruocDays, TenTinhTrangHonNhan, TenGioiTinh, TenNhomMau, TenYeuToRh, HoKhauTinhThanhId, HoKhauQuanHuyenId, HoKhauPhuongXaId, HoKhauDiaChi, TinhTrangKham) {
                    if (Id === void 0) { Id = 0; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (STTNhanVien === void 0) { STTNhanVien = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaNhanVien === void 0) { MaNhanVien = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (HoTenKhac === void 0) { HoTenKhac = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (QuocTichId === void 0) { QuocTichId = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (NhomMau === void 0) { NhomMau = null; }
                    if (YeuToRh === void 0) { YeuToRh = null; }
                    if (Email === void 0) { Email = null; }
                    if (TenDonViHoacBoPhan === void 0) { TenDonViHoacBoPhan = null; }
                    if (NhomDoiTuongKhamSucKhoe === void 0) { NhomDoiTuongKhamSucKhoe = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    if (TenGoiKhamSucKhoe === void 0) { TenGoiKhamSucKhoe = null; }
                    if (TinhTrangHonNhan === void 0) { TinhTrangHonNhan = null; }
                    if (CoMangThai === void 0) { CoMangThai = null; }
                    if (TienSuBenhs === void 0) { TienSuBenhs = []; }
                    if (GhiChuDiUngThuoc === void 0) { GhiChuDiUngThuoc = null; }
                    if (NgayCapChungMinhThu === void 0) { NgayCapChungMinhThu = null; }
                    if (NoiCapChungMinhThu === void 0) { NoiCapChungMinhThu = null; }
                    if (NgayBatDauLamViec === void 0) { NgayBatDauLamViec = null; }
                    if (NgheCongViecTruocDays === void 0) { NgheCongViecTruocDays = []; }
                    if (TenTinhTrangHonNhan === void 0) { TenTinhTrangHonNhan = null; }
                    if (TenGioiTinh === void 0) { TenGioiTinh = null; }
                    if (TenNhomMau === void 0) { TenNhomMau = null; }
                    if (TenYeuToRh === void 0) { TenYeuToRh = null; }
                    if (HoKhauTinhThanhId === void 0) { HoKhauTinhThanhId = null; }
                    if (HoKhauQuanHuyenId === void 0) { HoKhauQuanHuyenId = null; }
                    if (HoKhauPhuongXaId === void 0) { HoKhauPhuongXaId = null; }
                    if (HoKhauDiaChi === void 0) { HoKhauDiaChi = null; }
                    if (TinhTrangKham === void 0) { TinhTrangKham = null; }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.BenhNhanId = BenhNhanId;
                    this.STTNhanVien = STTNhanVien;
                    this.MaBN = MaBN;
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
                    this.TienSuBenhs = TienSuBenhs;
                    this.GhiChuDiUngThuoc = GhiChuDiUngThuoc;
                    this.NgayCapChungMinhThu = NgayCapChungMinhThu;
                    this.NoiCapChungMinhThu = NoiCapChungMinhThu;
                    this.NgayBatDauLamViec = NgayBatDauLamViec;
                    this.NgheCongViecTruocDays = NgheCongViecTruocDays;
                    this.TenTinhTrangHonNhan = TenTinhTrangHonNhan;
                    this.TenGioiTinh = TenGioiTinh;
                    this.TenNhomMau = TenNhomMau;
                    this.TenYeuToRh = TenYeuToRh;
                    this.HoKhauTinhThanhId = HoKhauTinhThanhId;
                    this.HoKhauQuanHuyenId = HoKhauQuanHuyenId;
                    this.HoKhauPhuongXaId = HoKhauPhuongXaId;
                    this.HoKhauDiaChi = HoKhauDiaChi;
                    this.TinhTrangKham = TinhTrangKham;
                }
                return HopDongKhamSucKhoeNhanVien;
            }());
            var NgheCongViecTruocDay = /** @class */ (function () {
                function NgheCongViecTruocDay(CongViec, TuNgay, DenNgay) {
                    if (CongViec === void 0) { CongViec = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.CongViec = CongViec;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return NgheCongViecTruocDay;
            }());
            var TienSuBenh = /** @class */ (function () {
                function TienSuBenh(Id, LoaiTienSuId, LoaiTienSu, BenhNgheNghiep, TenBenh, PhatHienNam) {
                    if (Id === void 0) { Id = null; }
                    if (LoaiTienSuId === void 0) { LoaiTienSuId = null; }
                    if (LoaiTienSu === void 0) { LoaiTienSu = null; }
                    if (BenhNgheNghiep === void 0) { BenhNgheNghiep = null; }
                    if (TenBenh === void 0) { TenBenh = null; }
                    if (PhatHienNam === void 0) { PhatHienNam = null; }
                    this.Id = Id;
                    this.LoaiTienSuId = LoaiTienSuId;
                    this.LoaiTienSu = LoaiTienSu;
                    this.BenhNgheNghiep = BenhNgheNghiep;
                    this.TenBenh = TenBenh;
                    this.PhatHienNam = PhatHienNam;
                }
                return TienSuBenh;
            }());
            var XuatFileExcelTrongGoiHoacNgoaiGoi = /** @class */ (function () {
                function XuatFileExcelTrongGoiHoacNgoaiGoi(HopDongKhamSucKhoeId, LaDichVuTrongGoi) {
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (LaDichVuTrongGoi === void 0) { LaDichVuTrongGoi = null; }
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.LaDichVuTrongGoi = LaDichVuTrongGoi;
                }
                return XuatFileExcelTrongGoiHoacNgoaiGoi;
            }());
            var MoLaiHopDong = /** @class */ (function () {
                function MoLaiHopDong(HopDongKhamSucKhoeId, LyDoMoLaiHopDong) {
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (LyDoMoLaiHopDong === void 0) { LyDoMoLaiHopDong = null; }
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.LyDoMoLaiHopDong = LyDoMoLaiHopDong;
                }
                return MoLaiHopDong;
            }());
            var DichVuKhamDoanChiTiet = /** @class */ (function () {
                function DichVuKhamDoanChiTiet(YeuCauTiepNhanId, GoiKhamSucKhoeIds, BenhNhanId, LaDichVuTrongGoi) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (GoiKhamSucKhoeIds === void 0) { GoiKhamSucKhoeIds = []; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (LaDichVuTrongGoi === void 0) { LaDichVuTrongGoi = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.GoiKhamSucKhoeIds = GoiKhamSucKhoeIds;
                    this.BenhNhanId = BenhNhanId;
                    this.LaDichVuTrongGoi = LaDichVuTrongGoi;
                }
                return DichVuKhamDoanChiTiet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-thuoc-tai-khoa/tong-hop-du-tru-mua-thuoc-tai-khoa.model.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: TongHopDuTruMuaThuocTaiKhoaSreach, TongHopDuTruMuaThuocTuChoiTaiKhoaSreach, TongHopDuTruMuaThuocTaiKhoa, DuyetDuTruMuaDuocPhamViewModel, ThongTinLyDoHuyDuyetTaiKhoa, DuTruMuaDuocPhamTaiKhoaChiTietVo, PhieuInDuTruMuaTaiKhoa, ListStatusSelectTabTHDTKhoa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoaSreach", function () { return TongHopDuTruMuaThuocTaiKhoaSreach; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTuChoiTaiKhoaSreach", function () { return TongHopDuTruMuaThuocTuChoiTaiKhoaSreach; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaThuocTaiKhoa", function () { return TongHopDuTruMuaThuocTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaDuocPhamViewModel", function () { return DuyetDuTruMuaDuocPhamViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLyDoHuyDuyetTaiKhoa", function () { return ThongTinLyDoHuyDuyetTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaDuocPhamTaiKhoaChiTietVo", function () { return DuTruMuaDuocPhamTaiKhoaChiTietVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuInDuTruMuaTaiKhoa", function () { return PhieuInDuTruMuaTaiKhoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStatusSelectTabTHDTKhoa", function () { return ListStatusSelectTabTHDTKhoa; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var TongHopDuTruMuaThuocTaiKhoaSreach = /** @class */ (function () {
                function TongHopDuTruMuaThuocTaiKhoaSreach(Id, NgayYeuCauTuFormat, NgayYeuCauDenFormat, FromDate, ToDate, ChoDuyet, DaDuyet, DaDuyetDaXuLy, DaGuiChoDuyet, TuChoiDuyet, SearchString, SearchStringDaXuLy, SearchStringTuChoi, RangeFromDate, RangeFromDateDaXuLy, RangeFromDateTuChoi) {
                    if (Id === void 0) { Id = 0; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (DaDuyetDaXuLy === void 0) { DaDuyetDaXuLy = true; }
                    if (DaGuiChoDuyet === void 0) { DaGuiChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = true; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (SearchStringDaXuLy === void 0) { SearchStringDaXuLy = null; }
                    if (SearchStringTuChoi === void 0) { SearchStringTuChoi = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeFromDateDaXuLy === void 0) { RangeFromDateDaXuLy = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeFromDateTuChoi === void 0) { RangeFromDateTuChoi = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    this.Id = Id;
                    this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
                    this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.DaDuyetDaXuLy = DaDuyetDaXuLy;
                    this.DaGuiChoDuyet = DaGuiChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.SearchString = SearchString;
                    this.SearchStringDaXuLy = SearchStringDaXuLy;
                    this.SearchStringTuChoi = SearchStringTuChoi;
                    this.RangeFromDate = RangeFromDate;
                    this.RangeFromDateDaXuLy = RangeFromDateDaXuLy;
                    this.RangeFromDateTuChoi = RangeFromDateTuChoi;
                }
                return TongHopDuTruMuaThuocTaiKhoaSreach;
            }());
            var TongHopDuTruMuaThuocTuChoiTaiKhoaSreach = /** @class */ (function () {
                function TongHopDuTruMuaThuocTuChoiTaiKhoaSreach(Id, NgayYeuCauTuFormat, NgayYeuCauDenFormat, FromDate, ToDate, ChoDuyet, DaDuyet, SearchString) {
                    if (Id === void 0) { Id = 0; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.Id = Id;
                    this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
                    this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.ChoDuyet = ChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.SearchString = SearchString;
                }
                return TongHopDuTruMuaThuocTuChoiTaiKhoaSreach;
            }());
            var TongHopDuTruMuaThuocTaiKhoa = /** @class */ (function () {
                function TongHopDuTruMuaThuocTaiKhoa(TinhTrang, SoPhieu, TenNhanVienYeuCau, KyDuTru, Id, LoaiDuTru, TenLoaiDuTru, KhoNhapId, TenKho, NhanVienYeuCauId, NhanVienYeuDuyetId, NgayYeuCau, GhiChu, TenNhanVienDuyet, LyDoTruongKhoaTuChoi, TrangThai, KhoaPhongId, TenKhoaPhong, KyDuTruMuaDuocPhamVatTuId, TenNhanVienKhoDuocDuyet, NgayKhoDuocDuyet, TenGiamDocDuyet, NgayGiamDocDuyet, LyDoGiamDocTuChoi) {
                    if (TinhTrang === void 0) { TinhTrang = null; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (KyDuTru === void 0) { KyDuTru = null; }
                    if (Id === void 0) { Id = 0; }
                    if (LoaiDuTru === void 0) { LoaiDuTru = null; }
                    if (TenLoaiDuTru === void 0) { TenLoaiDuTru = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NhanVienYeuDuyetId === void 0) { NhanVienYeuDuyetId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (TenKhoaPhong === void 0) { TenKhoaPhong = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (TenNhanVienKhoDuocDuyet === void 0) { TenNhanVienKhoDuocDuyet = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDocDuyet === void 0) { TenGiamDocDuyet = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoGiamDocTuChoi === void 0) { LyDoGiamDocTuChoi = null; }
                    this.TinhTrang = TinhTrang;
                    this.SoPhieu = SoPhieu;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.KyDuTru = KyDuTru;
                    this.Id = Id;
                    this.LoaiDuTru = LoaiDuTru;
                    this.TenLoaiDuTru = TenLoaiDuTru;
                    this.KhoNhapId = KhoNhapId;
                    this.TenKho = TenKho;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NhanVienYeuDuyetId = NhanVienYeuDuyetId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.GhiChu = GhiChu;
                    this.TenNhanVienDuyet = TenNhanVienDuyet;
                    this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
                    this.TrangThai = TrangThai;
                    this.KhoaPhongId = KhoaPhongId;
                    this.TenKhoaPhong = TenKhoaPhong;
                    this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
                    this.TenNhanVienKhoDuocDuyet = TenNhanVienKhoDuocDuyet;
                    this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
                    this.TenGiamDocDuyet = TenGiamDocDuyet;
                    this.NgayGiamDocDuyet = NgayGiamDocDuyet;
                    this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
                }
                return TongHopDuTruMuaThuocTaiKhoa;
            }());
            var DuyetDuTruMuaDuocPhamViewModel = /** @class */ (function () {
                function DuyetDuTruMuaDuocPhamViewModel(DuTruMuaDuocPhamId, NhanVienYeuCauId, KhoaPhongId, GhiChu, NgayYeuCau, DuTruMuaDuocPhamTaiKhoaChiTietVos) {
                    if (DuTruMuaDuocPhamId === void 0) { DuTruMuaDuocPhamId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (DuTruMuaDuocPhamTaiKhoaChiTietVos === void 0) { DuTruMuaDuocPhamTaiKhoaChiTietVos = []; }
                    this.DuTruMuaDuocPhamId = DuTruMuaDuocPhamId;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.KhoaPhongId = KhoaPhongId;
                    this.GhiChu = GhiChu;
                    this.NgayYeuCau = NgayYeuCau;
                    this.DuTruMuaDuocPhamTaiKhoaChiTietVos = DuTruMuaDuocPhamTaiKhoaChiTietVos;
                }
                return DuyetDuTruMuaDuocPhamViewModel;
            }());
            var ThongTinLyDoHuyDuyetTaiKhoa = /** @class */ (function () {
                function ThongTinLyDoHuyDuyetTaiKhoa(Id, LyDoHuy) {
                    if (Id === void 0) { Id = 0; }
                    if (LyDoHuy === void 0) { LyDoHuy = null; }
                    this.Id = Id;
                    this.LyDoHuy = LyDoHuy;
                }
                return ThongTinLyDoHuyDuyetTaiKhoa;
            }());
            var DuTruMuaDuocPhamTaiKhoaChiTietVo = /** @class */ (function () {
                function DuTruMuaDuocPhamTaiKhoaChiTietVo(Id, Nhom, KeyId, DuocPhamId, TenDuocPham, LaBHYT, HoatChat, DuongDung, DonViTinh, HangSanXuat, SoLuongDuTru, SoLuongDuKienSuDung, NhomDuPhong, KhoDuTruTon, KhoTongTon, HDChuaNhap, NongDoHamLuong, SoLuongDuTruTruongKhoaDuyet, DuTruMuaDuocPhamIds, DuTruMuaDuocPhamChiTietIds) {
                    if (Id === void 0) { Id = 0; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (KeyId === void 0) { KeyId = null; }
                    if (DuocPhamId === void 0) { DuocPhamId = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (LaBHYT === void 0) { LaBHYT = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (HangSanXuat === void 0) { HangSanXuat = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (NhomDuPhong === void 0) { NhomDuPhong = null; }
                    if (KhoDuTruTon === void 0) { KhoDuTruTon = null; }
                    if (KhoTongTon === void 0) { KhoTongTon = null; }
                    if (HDChuaNhap === void 0) { HDChuaNhap = null; }
                    if (NongDoHamLuong === void 0) { NongDoHamLuong = null; }
                    if (SoLuongDuTruTruongKhoaDuyet === void 0) { SoLuongDuTruTruongKhoaDuyet = null; }
                    this.Id = Id;
                    this.Nhom = Nhom;
                    this.KeyId = KeyId;
                    this.DuocPhamId = DuocPhamId;
                    this.TenDuocPham = TenDuocPham;
                    this.LaBHYT = LaBHYT;
                    this.HoatChat = HoatChat;
                    this.DuongDung = DuongDung;
                    this.DonViTinh = DonViTinh;
                    this.HangSanXuat = HangSanXuat;
                    this.SoLuongDuTru = SoLuongDuTru;
                    this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
                    this.NhomDuPhong = NhomDuPhong;
                    this.KhoDuTruTon = KhoDuTruTon;
                    this.KhoTongTon = KhoTongTon;
                    this.HDChuaNhap = HDChuaNhap;
                    this.NongDoHamLuong = NongDoHamLuong;
                    this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
                    this.DuTruMuaDuocPhamIds = DuTruMuaDuocPhamIds;
                    this.DuTruMuaDuocPhamChiTietIds = DuTruMuaDuocPhamChiTietIds;
                }
                return DuTruMuaDuocPhamTaiKhoaChiTietVo;
            }());
            var PhieuInDuTruMuaTaiKhoa = /** @class */ (function () {
                function PhieuInDuTruMuaTaiKhoa(DuTruMuaDuocPhamTheoKhoaId, HostingName, Header) {
                    if (DuTruMuaDuocPhamTheoKhoaId === void 0) { DuTruMuaDuocPhamTheoKhoaId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                }
                return PhieuInDuTruMuaTaiKhoa;
            }());
            var ListStatusSelectTabTHDTKhoa = /** @class */ (function () {
                function ListStatusSelectTabTHDTKhoa(selectedTabChoXuLy, selectedTabDaXuLy, selectedTabTuChoi) {
                    if (selectedTabChoXuLy === void 0) { selectedTabChoXuLy = true; }
                    if (selectedTabDaXuLy === void 0) { selectedTabDaXuLy = false; }
                    if (selectedTabTuChoi === void 0) { selectedTabTuChoi = false; }
                    this.selectedTabChoXuLy = selectedTabChoXuLy;
                    this.selectedTabDaXuLy = selectedTabDaXuLy;
                    this.selectedTabTuChoi = selectedTabTuChoi;
                }
                return ListStatusSelectTabTHDTKhoa;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: XuatKhoKSNK, KSNKXuatGridVo, XuatKhoKSNKChiTiet, XuatKhoKSNKChiTietViTri, ThemKSNK, XuatKhoKSNKSearch, RangeDate, GetKSNKOnGroupModel, LoaiDuocPhamVatTu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNK", function () { return XuatKhoKSNK; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSNKXuatGridVo", function () { return KSNKXuatGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKChiTiet", function () { return XuatKhoKSNKChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKChiTietViTri", function () { return XuatKhoKSNKChiTietViTri; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemKSNK", function () { return ThemKSNK; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKSearch", function () { return XuatKhoKSNKSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetKSNKOnGroupModel", function () { return GetKSNKOnGroupModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiDuocPhamVatTu", function () { return LoaiDuocPhamVatTu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var XuatKhoKSNK = /** @class */ (function () {
                function XuatKhoKSNK(Id, KhoXuatId, KhoXuatDisplay, KhoNhapId, KhoNhapDisplay, SoPhieu, LoaiXuatKho, LoaiXuatKhoDisplay, NguoiNhanId, NguoiNhanDisplay, NguoiXuatId, NguoiXuatDisplay, LoaiNguoiNhan, TenNguoiNhan, LyDoXuatKho, HostingName, TraNCCDisplayTheoKho, TraNCC, LoaiKhoVatTuXuat, IsXuatKhac, NgayXuat, XuatKhoVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (KhoXuatDisplay === void 0) { KhoXuatDisplay = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (KhoNhapDisplay === void 0) { KhoNhapDisplay = null; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (LoaiXuatKho === void 0) { LoaiXuatKho = null; }
                    if (LoaiXuatKhoDisplay === void 0) { LoaiXuatKhoDisplay = null; }
                    if (NguoiNhanId === void 0) { NguoiNhanId = null; }
                    if (NguoiNhanDisplay === void 0) { NguoiNhanDisplay = null; }
                    if (NguoiXuatId === void 0) { NguoiXuatId = null; }
                    if (NguoiXuatDisplay === void 0) { NguoiXuatDisplay = null; }
                    if (LoaiNguoiNhan === void 0) { LoaiNguoiNhan = 1; }
                    if (TenNguoiNhan === void 0) { TenNguoiNhan = null; }
                    if (LyDoXuatKho === void 0) { LyDoXuatKho = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (TraNCCDisplayTheoKho === void 0) { TraNCCDisplayTheoKho = null; }
                    if (TraNCC === void 0) { TraNCC = null; }
                    if (LoaiKhoVatTuXuat === void 0) { LoaiKhoVatTuXuat = null; }
                    if (IsXuatKhac === void 0) { IsXuatKhac = false; }
                    if (NgayXuat === void 0) { NgayXuat = new Date(); }
                    if (XuatKhoVatTuChiTiets === void 0) { XuatKhoVatTuChiTiets = []; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.KhoXuatDisplay = KhoXuatDisplay;
                    this.KhoNhapId = KhoNhapId;
                    this.KhoNhapDisplay = KhoNhapDisplay;
                    this.SoPhieu = SoPhieu;
                    this.LoaiXuatKho = LoaiXuatKho;
                    this.LoaiXuatKhoDisplay = LoaiXuatKhoDisplay;
                    this.NguoiNhanId = NguoiNhanId;
                    this.NguoiNhanDisplay = NguoiNhanDisplay;
                    this.NguoiXuatId = NguoiXuatId;
                    this.NguoiXuatDisplay = NguoiXuatDisplay;
                    this.LoaiNguoiNhan = LoaiNguoiNhan;
                    this.TenNguoiNhan = TenNguoiNhan;
                    this.LyDoXuatKho = LyDoXuatKho;
                    this.HostingName = HostingName;
                    this.TraNCCDisplayTheoKho = TraNCCDisplayTheoKho;
                    this.TraNCC = TraNCC;
                    this.LoaiKhoVatTuXuat = LoaiKhoVatTuXuat;
                    this.IsXuatKhac = IsXuatKhac;
                    this.NgayXuat = NgayXuat;
                    this.XuatKhoVatTuChiTiets = XuatKhoVatTuChiTiets;
                }
                return XuatKhoKSNK;
            }());
            var KSNKXuatGridVo = /** @class */ (function () {
                function KSNKXuatGridVo(Id, STT, TenVatTu, DVT, LaVatTuBHYT, Loai, SoLuongTon, SoLuongTonDisplay, SoLuongXuat, LoaiSuDung, TenNhom, MaVatTu) {
                    if (Id === void 0) { Id = null; }
                    if (STT === void 0) { STT = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongTonDisplay === void 0) { SoLuongTonDisplay = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (LoaiSuDung === void 0) { LoaiSuDung = null; }
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (MaVatTu === void 0) { MaVatTu = null; }
                    this.Id = Id;
                    this.STT = STT;
                    this.TenVatTu = TenVatTu;
                    this.DVT = DVT;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.Loai = Loai;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongTonDisplay = SoLuongTonDisplay;
                    this.SoLuongXuat = SoLuongXuat;
                    this.LoaiSuDung = LoaiSuDung;
                    this.TenNhom = TenNhom;
                    this.MaVatTu = MaVatTu;
                }
                return KSNKXuatGridVo;
            }());
            var XuatKhoKSNKChiTiet = /** @class */ (function () {
                function XuatKhoKSNKChiTiet(Id, DatChatLuong, XuatKhoVatTuId, VatTuBenhVienId, TongSoLuongXuat, XuatKhoVatTuChiTietViTris, TenVatTu, ChatLuong, VatTuId, NgayXuat, DonGiaBan, VAT, ChietKhau) {
                    if (Id === void 0) { Id = 0; }
                    if (DatChatLuong === void 0) { DatChatLuong = null; }
                    if (XuatKhoVatTuId === void 0) { XuatKhoVatTuId = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (TongSoLuongXuat === void 0) { TongSoLuongXuat = null; }
                    if (XuatKhoVatTuChiTietViTris === void 0) { XuatKhoVatTuChiTietViTris = []; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (ChatLuong === void 0) { ChatLuong = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (NgayXuat === void 0) { NgayXuat = new Date(); }
                    if (DonGiaBan === void 0) { DonGiaBan = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (ChietKhau === void 0) { ChietKhau = null; }
                    this.Id = Id;
                    this.DatChatLuong = DatChatLuong;
                    this.XuatKhoVatTuId = XuatKhoVatTuId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.TongSoLuongXuat = TongSoLuongXuat;
                    this.XuatKhoVatTuChiTietViTris = XuatKhoVatTuChiTietViTris;
                    this.TenVatTu = TenVatTu;
                    this.ChatLuong = ChatLuong;
                    this.VatTuId = VatTuId;
                    this.NgayXuat = NgayXuat;
                    this.DonGiaBan = DonGiaBan;
                    this.VAT = VAT;
                    this.ChietKhau = ChietKhau;
                }
                return XuatKhoKSNKChiTiet;
            }());
            var XuatKhoKSNKChiTietViTri = /** @class */ (function () {
                function XuatKhoKSNKChiTietViTri(Id, XuatKhoVatTuChiTietId, NhapKhoVatTuChiTietId, SoLuongXuat, ViTri, SoLo, HanSuDungDisplay, NgayXuat) {
                    if (Id === void 0) { Id = 0; }
                    if (XuatKhoVatTuChiTietId === void 0) { XuatKhoVatTuChiTietId = null; }
                    if (NhapKhoVatTuChiTietId === void 0) { NhapKhoVatTuChiTietId = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (ViTri === void 0) { ViTri = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDungDisplay === void 0) { HanSuDungDisplay = null; }
                    if (NgayXuat === void 0) { NgayXuat = new Date(); }
                    this.Id = Id;
                    this.XuatKhoVatTuChiTietId = XuatKhoVatTuChiTietId;
                    this.NhapKhoVatTuChiTietId = NhapKhoVatTuChiTietId;
                    this.SoLuongXuat = SoLuongXuat;
                    this.ViTri = ViTri;
                    this.SoLo = SoLo;
                    this.HanSuDungDisplay = HanSuDungDisplay;
                    this.NgayXuat = NgayXuat;
                }
                return XuatKhoKSNKChiTietViTri;
            }());
            var ThemKSNK = /** @class */ (function () {
                function ThemKSNK(VatTuId, ChatLuong, SoLuongTon, SoLuongXuat, KhoId, DonGia, VAT, ChietKhau, loaiKhoVatTuXuat, loaiXuatKho) {
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (ChatLuong === void 0) { ChatLuong = 1; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (ChietKhau === void 0) { ChietKhau = null; }
                    if (loaiKhoVatTuXuat === void 0) { loaiKhoVatTuXuat = null; }
                    if (loaiXuatKho === void 0) { loaiXuatKho = null; }
                    this.VatTuId = VatTuId;
                    this.ChatLuong = ChatLuong;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongXuat = SoLuongXuat;
                    this.KhoId = KhoId;
                    this.DonGia = DonGia;
                    this.VAT = VAT;
                    this.ChietKhau = ChietKhau;
                    this.loaiKhoVatTuXuat = loaiKhoVatTuXuat;
                    this.loaiXuatKho = loaiXuatKho;
                }
                return ThemKSNK;
            }());
            var XuatKhoKSNKSearch = /** @class */ (function () {
                function XuatKhoKSNKSearch(SearchString, RangeXuat) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeXuat === void 0) { RangeXuat = new RangeDate(); }
                    this.SearchString = SearchString;
                    this.RangeXuat = RangeXuat;
                }
                return XuatKhoKSNKSearch;
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
            var GetKSNKOnGroupModel = /** @class */ (function () {
                function GetKSNKOnGroupModel(TenNhom, KhoXuatId, SearchString, ListDaChon) {
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    if (ListDaChon === void 0) { ListDaChon = null; }
                    this.TenNhom = TenNhom;
                    this.KhoXuatId = KhoXuatId;
                    this.SearchString = SearchString;
                    this.ListDaChon = ListDaChon;
                }
                return GetKSNKOnGroupModel;
            }());
            var LoaiDuocPhamVatTu;
            (function (LoaiDuocPhamVatTu) {
                LoaiDuocPhamVatTu[LoaiDuocPhamVatTu["LoaiDuocPham"] = 0] = "LoaiDuocPham";
                LoaiDuocPhamVatTu[LoaiDuocPhamVatTu["LoaiVatTu"] = 1] = "LoaiVatTu";
            })(LoaiDuocPhamVatTu || (LoaiDuocPhamVatTu = {}));
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/mau/mau.model.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/mau/mau.model.ts ***!
          \*********************************************************/
        /*! exports provided: NhapKhoMauTimKiem, NhapKhoMauTimKiemTrangThai, NhapKhoMauTimKiemDateRange, PhieuNhapKhoMau, NhapKhoMauChiTiet, KetQuaXetNghiemKhac, TrangThaiDuyetNhapKhoMau */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauTimKiem", function () { return NhapKhoMauTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauTimKiemTrangThai", function () { return NhapKhoMauTimKiemTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauTimKiemDateRange", function () { return NhapKhoMauTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuNhapKhoMau", function () { return PhieuNhapKhoMau; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoMauChiTiet", function () { return NhapKhoMauChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaXetNghiemKhac", function () { return KetQuaXetNghiemKhac; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetNhapKhoMau", function () { return TrangThaiDuyetNhapKhoMau; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var NhapKhoMauTimKiem = /** @class */ (function () {
                function NhapKhoMauTimKiem(SearchString, TrangThai, TuNgayDenNgay) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (TrangThai === void 0) { TrangThai = new NhapKhoMauTimKiemTrangThai(); }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new NhapKhoMauTimKiemDateRange(); }
                    this.SearchString = SearchString;
                    this.TrangThai = TrangThai;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                }
                return NhapKhoMauTimKiem;
            }());
            var NhapKhoMauTimKiemTrangThai = /** @class */ (function () {
                function NhapKhoMauTimKiemTrangThai(ChoNhapGia, DaNhapGia) {
                    if (ChoNhapGia === void 0) { ChoNhapGia = true; }
                    if (DaNhapGia === void 0) { DaNhapGia = true; }
                    this.ChoNhapGia = ChoNhapGia;
                    this.DaNhapGia = DaNhapGia;
                }
                return NhapKhoMauTimKiemTrangThai;
            }());
            var NhapKhoMauTimKiemDateRange = /** @class */ (function () {
                function NhapKhoMauTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return NhapKhoMauTimKiemDateRange;
            }());
            var PhieuNhapKhoMau = /** @class */ (function () {
                function PhieuNhapKhoMau(SoPhieu, SoHoaDon, KyHieuHoaDon, NgayHoaDon, LoaiNguoiGiao, NguoiGiaoId, TenNguoiGiao, NhaThauId, TenNhaThau, NgayNhap, NguoiNhapId, TenNguoiNhap, DuocKeToanDuyet, TenTrangThai, NgayDuyet, NhanVienDuyetId, GhiChu, NhapKhoMauChiTiets, InPhieu) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (SoHoaDon === void 0) { SoHoaDon = null; }
                    if (KyHieuHoaDon === void 0) { KyHieuHoaDon = null; }
                    if (NgayHoaDon === void 0) { NgayHoaDon = null; }
                    if (LoaiNguoiGiao === void 0) { LoaiNguoiGiao = 1; }
                    if (NguoiGiaoId === void 0) { NguoiGiaoId = null; }
                    if (TenNguoiGiao === void 0) { TenNguoiGiao = null; }
                    if (NhaThauId === void 0) { NhaThauId = null; }
                    if (TenNhaThau === void 0) { TenNhaThau = null; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    if (NguoiNhapId === void 0) { NguoiNhapId = null; }
                    if (TenNguoiNhap === void 0) { TenNguoiNhap = null; }
                    if (DuocKeToanDuyet === void 0) { DuocKeToanDuyet = null; }
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (NhapKhoMauChiTiets === void 0) { NhapKhoMauChiTiets = new Array(); }
                    if (InPhieu === void 0) { InPhieu = false; }
                    this.SoPhieu = SoPhieu;
                    this.SoHoaDon = SoHoaDon;
                    this.KyHieuHoaDon = KyHieuHoaDon;
                    this.NgayHoaDon = NgayHoaDon;
                    this.LoaiNguoiGiao = LoaiNguoiGiao;
                    this.NguoiGiaoId = NguoiGiaoId;
                    this.TenNguoiGiao = TenNguoiGiao;
                    this.NhaThauId = NhaThauId;
                    this.TenNhaThau = TenNhaThau;
                    this.NgayNhap = NgayNhap;
                    this.NguoiNhapId = NguoiNhapId;
                    this.TenNguoiNhap = TenNguoiNhap;
                    this.DuocKeToanDuyet = DuocKeToanDuyet;
                    this.TenTrangThai = TenTrangThai;
                    this.NgayDuyet = NgayDuyet;
                    this.NhanVienDuyetId = NhanVienDuyetId;
                    this.GhiChu = GhiChu;
                    this.NhapKhoMauChiTiets = NhapKhoMauChiTiets;
                    this.InPhieu = InPhieu;
                }
                return PhieuNhapKhoMau;
            }());
            var NhapKhoMauChiTiet = /** @class */ (function () {
                function NhapKhoMauChiTiet(YeuCauTruyenMauId, TenBenhNhanTruyenMau, ThongTinYeuCauTruyenMau, MauVaChePhamId, TenMauVaChePham, MaTuiMau, MaDichVu, TenDichVu, PhanLoaiMau, TheTich, NhomMau, TenNhomMau, YeuToRh, TenYeuToTh, NgaySanXuat, HanSuDung, NgayLamXetNghiemHoaHop, NguoiLamXetNghiemHoaHopId, NguoiLamXetNghiemHoaHop, NgayNhap, KetQuaXetNghiemSotRet, KetQuaXetNghiemGiangMai, KetQuaXetNghiemHCV, KetQuaXetNghiemHBV, KetQuaXetNghiemHIV, KetQuaPhanUngCheoOngI, KetQuaPhanUngCheoOngII, KetQuaXetNghiemMoiTruongMuoi, KetQuaXetNghiem37oCKhangGlubulin, KetQuaXetNghiemNAT, TenKetQuaXetNghiemSotRet, TenKetQuaXetNghiemGiangMai, TenKetQuaXetNghiemHCV, TenKetQuaXetNghiemHBV, TenKetQuaXetNghiemHIV, TenKetQuaPhanUngCheoOngI, TenKetQuaPhanUngCheoOngII, TenKetQuaXetNghiemMoiTruongMuoi, TenKetQuaXetNghiem37oCKhangGlubulin, TenKetQuaXetNghiemNAT, NguoiThucHien1, NguoiThucHien2, MaTuiMauDangNhaps, YeuCauTruyenMauIdDangChons, Index, KetQuaXetNghiemKhacs) {
                    if (YeuCauTruyenMauId === void 0) { YeuCauTruyenMauId = null; }
                    if (TenBenhNhanTruyenMau === void 0) { TenBenhNhanTruyenMau = null; }
                    if (ThongTinYeuCauTruyenMau === void 0) { ThongTinYeuCauTruyenMau = null; }
                    if (MauVaChePhamId === void 0) { MauVaChePhamId = null; }
                    if (TenMauVaChePham === void 0) { TenMauVaChePham = null; }
                    if (MaTuiMau === void 0) { MaTuiMau = null; }
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (PhanLoaiMau === void 0) { PhanLoaiMau = null; }
                    if (TheTich === void 0) { TheTich = null; }
                    if (NhomMau === void 0) { NhomMau = null; }
                    if (TenNhomMau === void 0) { TenNhomMau = null; }
                    if (YeuToRh === void 0) { YeuToRh = null; }
                    if (TenYeuToTh === void 0) { TenYeuToTh = null; }
                    if (NgaySanXuat === void 0) { NgaySanXuat = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (NgayLamXetNghiemHoaHop === void 0) { NgayLamXetNghiemHoaHop = null; }
                    if (NguoiLamXetNghiemHoaHopId === void 0) { NguoiLamXetNghiemHoaHopId = null; }
                    if (NguoiLamXetNghiemHoaHop === void 0) { NguoiLamXetNghiemHoaHop = null; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    if (KetQuaXetNghiemSotRet === void 0) { KetQuaXetNghiemSotRet = 1; }
                    if (KetQuaXetNghiemGiangMai === void 0) { KetQuaXetNghiemGiangMai = 1; }
                    if (KetQuaXetNghiemHCV === void 0) { KetQuaXetNghiemHCV = 1; }
                    if (KetQuaXetNghiemHBV === void 0) { KetQuaXetNghiemHBV = 1; }
                    if (KetQuaXetNghiemHIV === void 0) { KetQuaXetNghiemHIV = 1; }
                    if (KetQuaPhanUngCheoOngI === void 0) { KetQuaPhanUngCheoOngI = 1; }
                    if (KetQuaPhanUngCheoOngII === void 0) { KetQuaPhanUngCheoOngII = 1; }
                    if (KetQuaXetNghiemMoiTruongMuoi === void 0) { KetQuaXetNghiemMoiTruongMuoi = 1; }
                    if (KetQuaXetNghiem37oCKhangGlubulin === void 0) { KetQuaXetNghiem37oCKhangGlubulin = 1; }
                    if (KetQuaXetNghiemNAT === void 0) { KetQuaXetNghiemNAT = 1; }
                    if (TenKetQuaXetNghiemSotRet === void 0) { TenKetQuaXetNghiemSotRet = null; }
                    if (TenKetQuaXetNghiemGiangMai === void 0) { TenKetQuaXetNghiemGiangMai = null; }
                    if (TenKetQuaXetNghiemHCV === void 0) { TenKetQuaXetNghiemHCV = null; }
                    if (TenKetQuaXetNghiemHBV === void 0) { TenKetQuaXetNghiemHBV = null; }
                    if (TenKetQuaXetNghiemHIV === void 0) { TenKetQuaXetNghiemHIV = null; }
                    if (TenKetQuaPhanUngCheoOngI === void 0) { TenKetQuaPhanUngCheoOngI = null; }
                    if (TenKetQuaPhanUngCheoOngII === void 0) { TenKetQuaPhanUngCheoOngII = null; }
                    if (TenKetQuaXetNghiemMoiTruongMuoi === void 0) { TenKetQuaXetNghiemMoiTruongMuoi = null; }
                    if (TenKetQuaXetNghiem37oCKhangGlubulin === void 0) { TenKetQuaXetNghiem37oCKhangGlubulin = null; }
                    if (TenKetQuaXetNghiemNAT === void 0) { TenKetQuaXetNghiemNAT = null; }
                    if (NguoiThucHien1 === void 0) { NguoiThucHien1 = null; }
                    if (NguoiThucHien2 === void 0) { NguoiThucHien2 = null; }
                    if (MaTuiMauDangNhaps === void 0) { MaTuiMauDangNhaps = []; }
                    if (YeuCauTruyenMauIdDangChons === void 0) { YeuCauTruyenMauIdDangChons = []; }
                    if (Index === void 0) { Index = null; }
                    if (KetQuaXetNghiemKhacs === void 0) { KetQuaXetNghiemKhacs = new Array(); }
                    this.YeuCauTruyenMauId = YeuCauTruyenMauId;
                    this.TenBenhNhanTruyenMau = TenBenhNhanTruyenMau;
                    this.ThongTinYeuCauTruyenMau = ThongTinYeuCauTruyenMau;
                    this.MauVaChePhamId = MauVaChePhamId;
                    this.TenMauVaChePham = TenMauVaChePham;
                    this.MaTuiMau = MaTuiMau;
                    this.MaDichVu = MaDichVu;
                    this.TenDichVu = TenDichVu;
                    this.PhanLoaiMau = PhanLoaiMau;
                    this.TheTich = TheTich;
                    this.NhomMau = NhomMau;
                    this.TenNhomMau = TenNhomMau;
                    this.YeuToRh = YeuToRh;
                    this.TenYeuToTh = TenYeuToTh;
                    this.NgaySanXuat = NgaySanXuat;
                    this.HanSuDung = HanSuDung;
                    this.NgayLamXetNghiemHoaHop = NgayLamXetNghiemHoaHop;
                    this.NguoiLamXetNghiemHoaHopId = NguoiLamXetNghiemHoaHopId;
                    this.NguoiLamXetNghiemHoaHop = NguoiLamXetNghiemHoaHop;
                    this.NgayNhap = NgayNhap;
                    this.KetQuaXetNghiemSotRet = KetQuaXetNghiemSotRet;
                    this.KetQuaXetNghiemGiangMai = KetQuaXetNghiemGiangMai;
                    this.KetQuaXetNghiemHCV = KetQuaXetNghiemHCV;
                    this.KetQuaXetNghiemHBV = KetQuaXetNghiemHBV;
                    this.KetQuaXetNghiemHIV = KetQuaXetNghiemHIV;
                    this.KetQuaPhanUngCheoOngI = KetQuaPhanUngCheoOngI;
                    this.KetQuaPhanUngCheoOngII = KetQuaPhanUngCheoOngII;
                    this.KetQuaXetNghiemMoiTruongMuoi = KetQuaXetNghiemMoiTruongMuoi;
                    this.KetQuaXetNghiem37oCKhangGlubulin = KetQuaXetNghiem37oCKhangGlubulin;
                    this.KetQuaXetNghiemNAT = KetQuaXetNghiemNAT;
                    this.TenKetQuaXetNghiemSotRet = TenKetQuaXetNghiemSotRet;
                    this.TenKetQuaXetNghiemGiangMai = TenKetQuaXetNghiemGiangMai;
                    this.TenKetQuaXetNghiemHCV = TenKetQuaXetNghiemHCV;
                    this.TenKetQuaXetNghiemHBV = TenKetQuaXetNghiemHBV;
                    this.TenKetQuaXetNghiemHIV = TenKetQuaXetNghiemHIV;
                    this.TenKetQuaPhanUngCheoOngI = TenKetQuaPhanUngCheoOngI;
                    this.TenKetQuaPhanUngCheoOngII = TenKetQuaPhanUngCheoOngII;
                    this.TenKetQuaXetNghiemMoiTruongMuoi = TenKetQuaXetNghiemMoiTruongMuoi;
                    this.TenKetQuaXetNghiem37oCKhangGlubulin = TenKetQuaXetNghiem37oCKhangGlubulin;
                    this.TenKetQuaXetNghiemNAT = TenKetQuaXetNghiemNAT;
                    this.NguoiThucHien1 = NguoiThucHien1;
                    this.NguoiThucHien2 = NguoiThucHien2;
                    this.MaTuiMauDangNhaps = MaTuiMauDangNhaps;
                    this.YeuCauTruyenMauIdDangChons = YeuCauTruyenMauIdDangChons;
                    this.Index = Index;
                    this.KetQuaXetNghiemKhacs = KetQuaXetNghiemKhacs;
                }
                return NhapKhoMauChiTiet;
            }());
            var KetQuaXetNghiemKhac = /** @class */ (function () {
                function KetQuaXetNghiemKhac(LoaiXetNghiem, TenLoaiXetNghiem, KetQua, HienThiKetQuaKhac) {
                    if (LoaiXetNghiem === void 0) { LoaiXetNghiem = null; }
                    if (TenLoaiXetNghiem === void 0) { TenLoaiXetNghiem = null; }
                    if (KetQua === void 0) { KetQua = 1; }
                    if (HienThiKetQuaKhac === void 0) { HienThiKetQuaKhac = null; }
                    this.LoaiXetNghiem = LoaiXetNghiem;
                    this.TenLoaiXetNghiem = TenLoaiXetNghiem;
                    this.KetQua = KetQua;
                    this.HienThiKetQuaKhac = HienThiKetQuaKhac;
                }
                return KetQuaXetNghiemKhac;
            }());
            var TrangThaiDuyetNhapKhoMau = /** @class */ (function () {
                function TrangThaiDuyetNhapKhoMau(TenTrangThai, DuocDuyet) {
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    this.TenTrangThai = TenTrangThai;
                    this.DuocDuyet = DuocDuyet;
                }
                return TrangThaiDuyetNhapKhoMau;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.model.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.model.ts ***!
          \****************************************************************************************/
        /*! exports provided: GoiMauXetNghiemSearch, ThongTinPhieuGoiMauXetNghiem, rangeDate */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiMauXetNghiemSearch", function () { return GoiMauXetNghiemSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinPhieuGoiMauXetNghiem", function () { return ThongTinPhieuGoiMauXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GoiMauXetNghiemSearch = /** @class */ (function () {
                function GoiMauXetNghiemSearch() {
                    this.ChoNhanMau = true;
                    this.DaNhanMau = true;
                    this.SearchString = "";
                    // public TuNgay: any;
                    // public DenNgay: any;
                    this.RangeNgayGoiMau = new rangeDate();
                }
                return GoiMauXetNghiemSearch;
            }());
            var ThongTinPhieuGoiMauXetNghiem = /** @class */ (function () {
                function ThongTinPhieuGoiMauXetNghiem() {
                    this.Id = 0;
                    this.SoPhieu = null;
                    this.NguoiGoiMauId = 0;
                    this.NguoiGoiMauDisplay = null;
                    this.NoiTiepNhanId = 0;
                    this.NoiTiepNhanDisplay = null;
                    this.NguoiNhanMauId = 0;
                    this.NguoiNhanMauDisplay = null;
                    this.NgayGoiMauDisplay = null;
                    this.NgayNhanMauDisplay = null;
                    this.GhiChu = null;
                    this.TinhTrang = 0;
                    this.TinhTrangDisplay = null;
                }
                return ThongTinPhieuGoiMauXetNghiem;
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
            /***/ 
        }),
        /***/ "./src/app/shared/constants/xet-nghiem-constant.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/shared/constants/xet-nghiem-constant.ts ***!
          \*********************************************************/
        /*! exports provided: TrangThaiKetQuaXetNghiemConst */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiKetQuaXetNghiemConst", function () { return TrangThaiKetQuaXetNghiemConst; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TrangThaiKetQuaXetNghiemConst;
            (function (TrangThaiKetQuaXetNghiemConst) {
                TrangThaiKetQuaXetNghiemConst["ChoKQChayLai"] = "Ch\u1EDD KQ (ch\u1EA1y l\u1EA1i)";
                TrangThaiKetQuaXetNghiemConst["ChoKQ"] = "\u0110ang th\u1EF1c hi\u1EC7n";
                TrangThaiKetQuaXetNghiemConst["ChoDuyetKQ"] = "Ch\u1EDD duy\u1EC7t";
                TrangThaiKetQuaXetNghiemConst["DaCoKQ"] = "\u0110\u00E3 duy\u1EC7t";
            })(TrangThaiKetQuaXetNghiemConst || (TrangThaiKetQuaXetNghiemConst = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/enum/bhyt-type.enum.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/enum/bhyt-type.enum.ts ***!
          \***********************************************/
        /*! exports provided: BhytType, PercentTypeForPttt */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BhytType", function () { return BhytType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentTypeForPttt", function () { return PercentTypeForPttt; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BhytType;
            (function (BhytType) {
                BhytType[BhytType["DuocHuong"] = 1] = "DuocHuong";
                BhytType[BhytType["ChuaDuocHuong"] = 2] = "ChuaDuocHuong";
            })(BhytType || (BhytType = {}));
            var PercentTypeForPttt;
            (function (PercentTypeForPttt) {
                PercentTypeForPttt[PercentTypeForPttt["Per100"] = 1] = "Per100";
                PercentTypeForPttt[PercentTypeForPttt["Per80"] = 2] = "Per80";
                PercentTypeForPttt[PercentTypeForPttt["Per50"] = 3] = "Per50";
            })(PercentTypeForPttt || (PercentTypeForPttt = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/enum/kho.enum.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/enum/kho.enum.ts ***!
          \*****************************************/
        /*! exports provided: XuatKhoDuocPham, EnumLoaiKhoDuocPham */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPham", function () { return XuatKhoDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiKhoDuocPham", function () { return EnumLoaiKhoDuocPham; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var XuatKhoDuocPham;
            (function (XuatKhoDuocPham) {
                XuatKhoDuocPham[XuatKhoDuocPham["XuatQuaKhoKhac"] = 1] = "XuatQuaKhoKhac";
                XuatKhoDuocPham[XuatKhoDuocPham["XuatTraNhaCungCap"] = 2] = "XuatTraNhaCungCap";
                XuatKhoDuocPham[XuatKhoDuocPham["XuatChoBenhNhan"] = 3] = "XuatChoBenhNhan";
                XuatKhoDuocPham[XuatKhoDuocPham["XuatHuy"] = 4] = "XuatHuy";
            })(XuatKhoDuocPham || (XuatKhoDuocPham = {}));
            var EnumLoaiKhoDuocPham;
            (function (EnumLoaiKhoDuocPham) {
                EnumLoaiKhoDuocPham[EnumLoaiKhoDuocPham["KhoTong"] = 1] = "KhoTong";
                EnumLoaiKhoDuocPham[EnumLoaiKhoDuocPham["KhoNgoai"] = 2] = "KhoNgoai";
                EnumLoaiKhoDuocPham[EnumLoaiKhoDuocPham["KhoNoi"] = 3] = "KhoNoi";
                EnumLoaiKhoDuocPham[EnumLoaiKhoDuocPham["KhoChoXuLy"] = 4] = "KhoChoXuLy";
            })(EnumLoaiKhoDuocPham || (EnumLoaiKhoDuocPham = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/enum/nhom-goi-dich-vu.enum.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shared/enum/nhom-goi-dich-vu.enum.ts ***!
          \******************************************************/
        /*! exports provided: NhomGoiDichVu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomGoiDichVu", function () { return NhomGoiDichVu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var NhomGoiDichVu;
            (function (NhomGoiDichVu) {
                NhomGoiDichVu[NhomGoiDichVu["DichVuKhamBenh"] = 1] = "DichVuKhamBenh";
                NhomGoiDichVu[NhomGoiDichVu["DichVuKyThuat"] = 2] = "DichVuKyThuat";
                NhomGoiDichVu[NhomGoiDichVu["VatTuTieuHao"] = 3] = "VatTuTieuHao";
                NhomGoiDichVu[NhomGoiDichVu["DuocPham"] = 4] = "DuocPham";
                NhomGoiDichVu[NhomGoiDichVu["DichVuGiuongBenh"] = 5] = "DichVuGiuongBenh";
                NhomGoiDichVu[NhomGoiDichVu["DonThuocThanhToan"] = 6] = "DonThuocThanhToan";
            })(NhomGoiDichVu || (NhomGoiDichVu = {}));
            /***/ 
        }),
        /***/ "./src/app/shared/models/forgot-password.model.ts": 
        /*!********************************************************!*\
          !*** ./src/app/shared/models/forgot-password.model.ts ***!
          \********************************************************/
        /*! exports provided: ForgotPassword, EnumForgetPasswordStage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function () { return ForgotPassword; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumForgetPasswordStage", function () { return EnumForgetPasswordStage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ForgotPassword = /** @class */ (function () {
                function ForgotPassword() {
                }
                return ForgotPassword;
            }());
            var EnumForgetPasswordStage;
            (function (EnumForgetPasswordStage) {
                EnumForgetPasswordStage[EnumForgetPasswordStage["IsForget"] = 1] = "IsForget";
                EnumForgetPasswordStage[EnumForgetPasswordStage["IsVerify"] = 2] = "IsVerify";
                EnumForgetPasswordStage[EnumForgetPasswordStage["IsReset"] = 3] = "IsReset";
            })(EnumForgetPasswordStage || (EnumForgetPasswordStage = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map