(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module~xet-nghiem-xet-nghiem-nhan-mau-xet~467091cd"], {
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
        /***/ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts": 
        /*!****************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts ***!
          \****************************************************************************************/
        /*! exports provided: LayMauXetNghiemTimKiem, LayMauXetNghiemTimKiemTrangThai, LayMauXetNghiemTimKiemDateRange, ThongTinYeuCauTiepNhanLayMau, XacNhanLayMauXetNghiem, LayMauXetNghiemBarcodeQueryInfo, GuiMauXetNghiem, LayMauXetNghiemInBarcode, KiemTraBarcodeLayMauXetNghiem, InPhieuKetQuaLayMau, CapBarcodeTheoDichVu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiem", function () { return LayMauXetNghiemTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiemTrangThai", function () { return LayMauXetNghiemTimKiemTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemTimKiemDateRange", function () { return LayMauXetNghiemTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNhanLayMau", function () { return ThongTinYeuCauTiepNhanLayMau; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XacNhanLayMauXetNghiem", function () { return XacNhanLayMauXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemBarcodeQueryInfo", function () { return LayMauXetNghiemBarcodeQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiMauXetNghiem", function () { return GuiMauXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayMauXetNghiemInBarcode", function () { return LayMauXetNghiemInBarcode; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiemTraBarcodeLayMauXetNghiem", function () { return KiemTraBarcodeLayMauXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuKetQuaLayMau", function () { return InPhieuKetQuaLayMau; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapBarcodeTheoDichVu", function () { return CapBarcodeTheoDichVu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var LayMauXetNghiemTimKiem = /** @class */ (function () {
                function LayMauXetNghiemTimKiem(SearchString, TrangThai, TuNgayDenNgay, IsGridChuaCapCode) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (TrangThai === void 0) { TrangThai = new LayMauXetNghiemTimKiemTrangThai(); }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new LayMauXetNghiemTimKiemDateRange(); }
                    if (IsGridChuaCapCode === void 0) { IsGridChuaCapCode = false; }
                    this.SearchString = SearchString;
                    this.TrangThai = TrangThai;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                    this.IsGridChuaCapCode = IsGridChuaCapCode;
                }
                return LayMauXetNghiemTimKiem;
            }());
            var LayMauXetNghiemTimKiemTrangThai = /** @class */ (function () {
                function LayMauXetNghiemTimKiemTrangThai(ChoLayMau, ChoGuiMau, ChoKetQua, ChoDuyetKetQua, DaCoKetQUa, DaLayMau) {
                    if (ChoLayMau === void 0) { ChoLayMau = true; }
                    if (ChoGuiMau === void 0) { ChoGuiMau = false; }
                    if (ChoKetQua === void 0) { ChoKetQua = false; }
                    if (ChoDuyetKetQua === void 0) { ChoDuyetKetQua = false; }
                    if (DaCoKetQUa === void 0) { DaCoKetQUa = false; }
                    if (DaLayMau === void 0) { DaLayMau = false; }
                    this.ChoLayMau = ChoLayMau;
                    this.ChoGuiMau = ChoGuiMau;
                    this.ChoKetQua = ChoKetQua;
                    this.ChoDuyetKetQua = ChoDuyetKetQua;
                    this.DaCoKetQUa = DaCoKetQUa;
                    this.DaLayMau = DaLayMau;
                }
                return LayMauXetNghiemTimKiemTrangThai;
            }());
            var LayMauXetNghiemTimKiemDateRange = /** @class */ (function () {
                function LayMauXetNghiemTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return LayMauXetNghiemTimKiemDateRange;
            }());
            var ThongTinYeuCauTiepNhanLayMau = /** @class */ (function () {
                function ThongTinYeuCauTiepNhanLayMau(YeuCauTiepNhanId, BenhNhanId, MaBenhNhan, MaTiepNhan, HoTen, NgaySinh, ThangSinh, NamSinh, Tuoi, TenGioiTinh, SoDienThoai, Tuyen, SoTheBHYT, MucHuong, DanToc, DiaChi, NgheNghiep, IsTraKetQua, TraKetQuaChoBenhNhan, IsAutoBarcode, IsCoDuKetQua, IsCoPhienChiTietCoKetQua, IsNhanVienKhoaXetNghiem, 
                //BVHD-3364
                TenCongTy) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (TenGioiTinh === void 0) { TenGioiTinh = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Tuyen === void 0) { Tuyen = null; }
                    if (SoTheBHYT === void 0) { SoTheBHYT = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (DanToc === void 0) { DanToc = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (NgheNghiep === void 0) { NgheNghiep = null; }
                    if (IsTraKetQua === void 0) { IsTraKetQua = false; }
                    if (TraKetQuaChoBenhNhan === void 0) { TraKetQuaChoBenhNhan = null; }
                    if (IsAutoBarcode === void 0) { IsAutoBarcode = false; }
                    if (IsCoDuKetQua === void 0) { IsCoDuKetQua = false; }
                    if (IsCoPhienChiTietCoKetQua === void 0) { IsCoPhienChiTietCoKetQua = false; }
                    if (IsNhanVienKhoaXetNghiem === void 0) { IsNhanVienKhoaXetNghiem = false; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
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
                return ThongTinYeuCauTiepNhanLayMau;
            }());
            var XacNhanLayMauXetNghiem = /** @class */ (function () {
                function XacNhanLayMauXetNghiem(YeuCauTiepNhanId, BenhNhanId, PhienXetNghiemId, NhomDichVuBenhVienId, BarcodeNumber, BarcodeId) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    if (NhomDichVuBenhVienId === void 0) { NhomDichVuBenhVienId = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (BarcodeId === void 0) { BarcodeId = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BenhNhanId = BenhNhanId;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                    this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
                    this.BarcodeNumber = BarcodeNumber;
                    this.BarcodeId = BarcodeId;
                }
                return XacNhanLayMauXetNghiem;
            }());
            var LayMauXetNghiemBarcodeQueryInfo = /** @class */ (function () {
                function LayMauXetNghiemBarcodeQueryInfo(YeuCauTiepNhanId, BarcodeNumbers) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BarcodeNumbers === void 0) { BarcodeNumbers = new Array(); }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BarcodeNumbers = BarcodeNumbers;
                }
                return LayMauXetNghiemBarcodeQueryInfo;
            }());
            var GuiMauXetNghiem = /** @class */ (function () {
                function GuiMauXetNghiem(NhanVienGuiMauId, TenNhanVienGuiMau, ThoiDiemGuiMau, PhongNhanMauId, GhiChu, NhomMauGuis) {
                    if (NhanVienGuiMauId === void 0) { NhanVienGuiMauId = null; }
                    if (TenNhanVienGuiMau === void 0) { TenNhanVienGuiMau = null; }
                    if (ThoiDiemGuiMau === void 0) { ThoiDiemGuiMau = null; }
                    if (PhongNhanMauId === void 0) { PhongNhanMauId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (NhomMauGuis === void 0) { NhomMauGuis = new Array(); }
                    this.NhanVienGuiMauId = NhanVienGuiMauId;
                    this.TenNhanVienGuiMau = TenNhanVienGuiMau;
                    this.ThoiDiemGuiMau = ThoiDiemGuiMau;
                    this.PhongNhanMauId = PhongNhanMauId;
                    this.GhiChu = GhiChu;
                    this.NhomMauGuis = NhomMauGuis;
                }
                return GuiMauXetNghiem;
            }());
            var LayMauXetNghiemInBarcode = /** @class */ (function () {
                function LayMauXetNghiemInBarcode(YeuCauTiepNhanId, BarcodeId, BarcodeNumber, SoLuong, HostingName) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BarcodeId === void 0) { BarcodeId = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BarcodeId = BarcodeId;
                    this.BarcodeNumber = BarcodeNumber;
                    this.SoLuong = SoLuong;
                    this.HostingName = HostingName;
                }
                return LayMauXetNghiemInBarcode;
            }());
            var KiemTraBarcodeLayMauXetNghiem = /** @class */ (function () {
                function KiemTraBarcodeLayMauXetNghiem(YeuCauTiepNhanId, BarcodeNumber, IsInBarcode, SoLuong, IsCapMoi, BarcodeString, IsCapBarcodeChoDichVu) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (IsInBarcode === void 0) { IsInBarcode = false; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (IsCapMoi === void 0) { IsCapMoi = false; }
                    if (BarcodeString === void 0) { BarcodeString = null; }
                    if (IsCapBarcodeChoDichVu === void 0) { IsCapBarcodeChoDichVu = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BarcodeNumber = BarcodeNumber;
                    this.IsInBarcode = IsInBarcode;
                    this.SoLuong = SoLuong;
                    this.IsCapMoi = IsCapMoi;
                    this.BarcodeString = BarcodeString;
                    this.IsCapBarcodeChoDichVu = IsCapBarcodeChoDichVu;
                }
                return KiemTraBarcodeLayMauXetNghiem;
            }());
            var InPhieuKetQuaLayMau = /** @class */ (function () {
                function InPhieuKetQuaLayMau(HostingName, Header, YeuCauTiepNhanId, PhienXetNghiemId, LoaiIn, ListIn) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    if (LoaiIn === void 0) { LoaiIn = null; }
                    if (ListIn === void 0) { ListIn = []; }
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                    this.LoaiIn = LoaiIn;
                    this.ListIn = ListIn;
                }
                return InPhieuKetQuaLayMau;
            }());
            var CapBarcodeTheoDichVu = /** @class */ (function () {
                function CapBarcodeTheoDichVu(YeuCauTiepNhanId, BenhNhanId, BarcodeNumber, BarcodeId, SoLuong, YeuCauDichVuKyThuatIds) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (BarcodeId === void 0) { BarcodeId = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (YeuCauDichVuKyThuatIds === void 0) { YeuCauDichVuKyThuatIds = new Array(); }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BenhNhanId = BenhNhanId;
                    this.BarcodeNumber = BarcodeNumber;
                    this.BarcodeId = BarcodeId;
                    this.SoLuong = SoLuong;
                    this.YeuCauDichVuKyThuatIds = YeuCauDichVuKyThuatIds;
                }
                return CapBarcodeTheoDichVu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.model.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.model.ts ***!
          \******************************************************************************************/
        /*! exports provided: XetNghiemCapCodeTimKiem, XetNghiemCapCodeTimKiemTrangThai, XetNghiemCapCodeTimKiemDateRange, ThongTinYeuCauTiepNhanXetNghiem, KiemTraBarcodeCapCodeDichVuXetNghiem, CapBarcodeTheoDichVuXetNghiem, InBarcodeDaCapCodeBenhNhan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeTimKiem", function () { return XetNghiemCapCodeTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeTimKiemTrangThai", function () { return XetNghiemCapCodeTimKiemTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeTimKiemDateRange", function () { return XetNghiemCapCodeTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNhanXetNghiem", function () { return ThongTinYeuCauTiepNhanXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KiemTraBarcodeCapCodeDichVuXetNghiem", function () { return KiemTraBarcodeCapCodeDichVuXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapBarcodeTheoDichVuXetNghiem", function () { return CapBarcodeTheoDichVuXetNghiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBarcodeDaCapCodeBenhNhan", function () { return InBarcodeDaCapCodeBenhNhan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var XetNghiemCapCodeTimKiem = /** @class */ (function () {
                function XetNghiemCapCodeTimKiem(SearchString, HopDongKhamSucKhoeId, YeuCauTiepNhanId, PhienXetNghiemId, TrangThai, TuNgayDenNgay, ThoiDiemHienTai, SoLuong) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = 0; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    if (TrangThai === void 0) { TrangThai = new XetNghiemCapCodeTimKiemTrangThai(); }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new XetNghiemCapCodeTimKiemDateRange(); }
                    if (ThoiDiemHienTai === void 0) { ThoiDiemHienTai = new Date(); }
                    if (SoLuong === void 0) { SoLuong = null; }
                    this.SearchString = SearchString;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                    this.TrangThai = TrangThai;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                    this.ThoiDiemHienTai = ThoiDiemHienTai;
                    this.SoLuong = SoLuong;
                }
                return XetNghiemCapCodeTimKiem;
            }());
            var XetNghiemCapCodeTimKiemTrangThai = /** @class */ (function () {
                function XetNghiemCapCodeTimKiemTrangThai(ChuaCapCode, DaCapCode) {
                    if (ChuaCapCode === void 0) { ChuaCapCode = true; }
                    if (DaCapCode === void 0) { DaCapCode = false; }
                    this.ChuaCapCode = ChuaCapCode;
                    this.DaCapCode = DaCapCode;
                }
                return XetNghiemCapCodeTimKiemTrangThai;
            }());
            var XetNghiemCapCodeTimKiemDateRange = /** @class */ (function () {
                function XetNghiemCapCodeTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return XetNghiemCapCodeTimKiemDateRange;
            }());
            var ThongTinYeuCauTiepNhanXetNghiem = /** @class */ (function () {
                function ThongTinYeuCauTiepNhanXetNghiem(YeuCauTiepNhanId, BenhNhanId, MaBenhNhan, MaTiepNhan, HoTen, NgaySinh, ThangSinh, NamSinh, NamSinhDisplay, Tuoi, TenGioiTinh, SoDienThoai, Tuyen, SoTheBHYT, DoiTuong, DanToc, DiaChi, NgheNghiep, IsTraKetQua, TraKetQuaChoBenhNhan, IsAutoBarcode, IsCoDuKetQua, IsCoPhienChiTietCoKetQua, IsNhanVienKhoaXetNghiem, 
                //BVHD-3364
                TenCongTy, SoLuongThem, BarcodeNumber, Barcode, 
                // BVHD-3836
                NhanVienLayMauId, ThoiGianLayMau, 
                //BVHD-3800
                LaCapCuu) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NamSinhDisplay === void 0) { NamSinhDisplay = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (TenGioiTinh === void 0) { TenGioiTinh = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Tuyen === void 0) { Tuyen = null; }
                    if (SoTheBHYT === void 0) { SoTheBHYT = null; }
                    if (DoiTuong === void 0) { DoiTuong = null; }
                    if (DanToc === void 0) { DanToc = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (NgheNghiep === void 0) { NgheNghiep = null; }
                    if (IsTraKetQua === void 0) { IsTraKetQua = false; }
                    if (TraKetQuaChoBenhNhan === void 0) { TraKetQuaChoBenhNhan = null; }
                    if (IsAutoBarcode === void 0) { IsAutoBarcode = false; }
                    if (IsCoDuKetQua === void 0) { IsCoDuKetQua = false; }
                    if (IsCoPhienChiTietCoKetQua === void 0) { IsCoPhienChiTietCoKetQua = false; }
                    if (IsNhanVienKhoaXetNghiem === void 0) { IsNhanVienKhoaXetNghiem = false; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    if (SoLuongThem === void 0) { SoLuongThem = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (Barcode === void 0) { Barcode = null; }
                    if (NhanVienLayMauId === void 0) { NhanVienLayMauId = null; }
                    if (ThoiGianLayMau === void 0) { ThoiGianLayMau = null; }
                    if (LaCapCuu === void 0) { LaCapCuu = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BenhNhanId = BenhNhanId;
                    this.MaBenhNhan = MaBenhNhan;
                    this.MaTiepNhan = MaTiepNhan;
                    this.HoTen = HoTen;
                    this.NgaySinh = NgaySinh;
                    this.ThangSinh = ThangSinh;
                    this.NamSinh = NamSinh;
                    this.NamSinhDisplay = NamSinhDisplay;
                    this.Tuoi = Tuoi;
                    this.TenGioiTinh = TenGioiTinh;
                    this.SoDienThoai = SoDienThoai;
                    this.Tuyen = Tuyen;
                    this.SoTheBHYT = SoTheBHYT;
                    this.DoiTuong = DoiTuong;
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
                    this.SoLuongThem = SoLuongThem;
                    this.BarcodeNumber = BarcodeNumber;
                    this.Barcode = Barcode;
                    this.NhanVienLayMauId = NhanVienLayMauId;
                    this.ThoiGianLayMau = ThoiGianLayMau;
                    this.LaCapCuu = LaCapCuu;
                }
                return ThongTinYeuCauTiepNhanXetNghiem;
            }());
            var KiemTraBarcodeCapCodeDichVuXetNghiem = /** @class */ (function () {
                function KiemTraBarcodeCapCodeDichVuXetNghiem(YeuCauTiepNhanId, BarcodeNumber, IsInBarcode, SoLuong, SoLuongThem, IsCapMoi, BarcodeString, IsCapBarcodeChoDichVu) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (IsInBarcode === void 0) { IsInBarcode = false; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (SoLuongThem === void 0) { SoLuongThem = null; }
                    if (IsCapMoi === void 0) { IsCapMoi = false; }
                    if (BarcodeString === void 0) { BarcodeString = null; }
                    if (IsCapBarcodeChoDichVu === void 0) { IsCapBarcodeChoDichVu = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BarcodeNumber = BarcodeNumber;
                    this.IsInBarcode = IsInBarcode;
                    this.SoLuong = SoLuong;
                    this.SoLuongThem = SoLuongThem;
                    this.IsCapMoi = IsCapMoi;
                    this.BarcodeString = BarcodeString;
                    this.IsCapBarcodeChoDichVu = IsCapBarcodeChoDichVu;
                }
                return KiemTraBarcodeCapCodeDichVuXetNghiem;
            }());
            var CapBarcodeTheoDichVuXetNghiem = /** @class */ (function () {
                function CapBarcodeTheoDichVuXetNghiem(YeuCauTiepNhanId, BenhNhanId, BarcodeNumber, BarcodeId, SoLuong, SoLuongThem, YeuCauDichVuKyThuatIds, 
                // BVHD-3836
                NhanVienLayMauId, ThoiGianLayMau) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (BarcodeNumber === void 0) { BarcodeNumber = null; }
                    if (BarcodeId === void 0) { BarcodeId = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (SoLuongThem === void 0) { SoLuongThem = null; }
                    if (YeuCauDichVuKyThuatIds === void 0) { YeuCauDichVuKyThuatIds = new Array(); }
                    if (NhanVienLayMauId === void 0) { NhanVienLayMauId = null; }
                    if (ThoiGianLayMau === void 0) { ThoiGianLayMau = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.BenhNhanId = BenhNhanId;
                    this.BarcodeNumber = BarcodeNumber;
                    this.BarcodeId = BarcodeId;
                    this.SoLuong = SoLuong;
                    this.SoLuongThem = SoLuongThem;
                    this.YeuCauDichVuKyThuatIds = YeuCauDichVuKyThuatIds;
                    this.NhanVienLayMauId = NhanVienLayMauId;
                    this.ThoiGianLayMau = ThoiGianLayMau;
                }
                return CapBarcodeTheoDichVuXetNghiem;
            }());
            var InBarcodeDaCapCodeBenhNhan = /** @class */ (function () {
                function InBarcodeDaCapCodeBenhNhan(HostingName, TuNgay, DenNgay, HopDongKhamSucKhoeId, SoLuong, SearchString) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (SearchString === void 0) { SearchString = null; }
                    this.HostingName = HostingName;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.SoLuong = SoLuong;
                    this.SearchString = SearchString;
                }
                return InBarcodeDaCapCodeBenhNhan;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module~xet-nghiem-xet-nghiem-nhan-mau-xet~467091cd-es2015.js.map
//# sourceMappingURL=default~xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module~xet-nghiem-xet-nghiem-nhan-mau-xet~467091cd-es5.js.map
//# sourceMappingURL=default~xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module~xet-nghiem-xet-nghiem-nhan-mau-xet~467091cd-es5.js.map