(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module~xet-nghiem-xet-nghiem-ket-qua-new-xet-~19bb8353"], {
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
        }),
        /***/ "./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/duyet-ket-qua-new/duyet-ket-qua-new.model.ts ***!
          \**************************************************************************************/
        /*! exports provided: SearchNew, RangeDateNew, PhieuDuyetKetQuaNew, DuyetKetQuaNew, ListDataChildNew, NhomDichVuDuyetNew */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNew", function () { return SearchNew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDateNew", function () { return RangeDateNew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuDuyetKetQuaNew", function () { return PhieuDuyetKetQuaNew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetKetQuaNew", function () { return DuyetKetQuaNew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataChildNew", function () { return ListDataChildNew; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhomDichVuDuyetNew", function () { return NhomDichVuDuyetNew; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var SearchNew = /** @class */ (function () {
                function SearchNew(SearchString, SearchStringBarCode, ChoDuyet, DaDuyet, DangThucHien, FromDate, ToDate, ThoiDiemGoiDuyetTuFormat, ThoiDiemGoiDuyetDenFormat, RangeThucHien, RangeDuyet) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (SearchStringBarCode === void 0) { SearchStringBarCode = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (DangThucHien === void 0) { DangThucHien = false; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ThoiDiemGoiDuyetTuFormat === void 0) { ThoiDiemGoiDuyetTuFormat = null; }
                    if (ThoiDiemGoiDuyetDenFormat === void 0) { ThoiDiemGoiDuyetDenFormat = null; }
                    if (RangeThucHien === void 0) { RangeThucHien = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (RangeDuyet === void 0) { RangeDuyet = new RangeDateNew(); }
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
                return SearchNew;
            }());
            var RangeDateNew = /** @class */ (function () {
                function RangeDateNew(StartDate, EndDate) {
                    if (StartDate === void 0) { StartDate = null; }
                    if (EndDate === void 0) { EndDate = null; }
                    this.StartDate = StartDate;
                    this.EndDate = EndDate;
                }
                return RangeDateNew;
            }());
            var PhieuDuyetKetQuaNew = /** @class */ (function () {
                function PhieuDuyetKetQuaNew(Id, HostingName, Header, PhienXetNghiemId, YeuCauTiepNhanId, NhomDichVuBenhVienIds, LoaiIn, ListIn) {
                    if (Id === void 0) { Id = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (NhomDichVuBenhVienIds === void 0) { NhomDichVuBenhVienIds = []; }
                    if (LoaiIn === void 0) { LoaiIn = null; }
                    if (ListIn === void 0) { ListIn = []; }
                    this.Id = Id;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.NhomDichVuBenhVienIds = NhomDichVuBenhVienIds;
                    this.LoaiIn = LoaiIn;
                    this.ListIn = ListIn;
                }
                return PhieuDuyetKetQuaNew;
            }());
            var DuyetKetQuaNew = /** @class */ (function () {
                function DuyetKetQuaNew(Id, YeuCauTiepNhanId, BarCodeID, MaSoBHYT, MaBN, MaYeuCauTiepNhan, HoTen, NamSinhDisplay, GioiTinhDisplay, BHYTMucHuong, DiaChi, ChanDoan, KhoaChiDinh, Phong, SoDienThoai, NhanVienThucHienId, ChanDoanDuoi, GhiChu, DoiTuong, NguoiThucHien, NguoiThucHienId, TrangThai, TrangThaiDisplay, ChiTietKetQuaXetNghiems, 
                //BVHD-3800
                LaCapCuu) {
                    if (Id === void 0) { Id = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BarCodeID === void 0) { BarCodeID = null; }
                    if (MaSoBHYT === void 0) { MaSoBHYT = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NamSinhDisplay === void 0) { NamSinhDisplay = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (BHYTMucHuong === void 0) { BHYTMucHuong = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (ChanDoan === void 0) { ChanDoan = null; }
                    if (KhoaChiDinh === void 0) { KhoaChiDinh = null; }
                    if (Phong === void 0) { Phong = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (NhanVienThucHienId === void 0) { NhanVienThucHienId = null; }
                    if (ChanDoanDuoi === void 0) { ChanDoanDuoi = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DoiTuong === void 0) { DoiTuong = null; }
                    if (NguoiThucHien === void 0) { NguoiThucHien = null; }
                    if (NguoiThucHienId === void 0) { NguoiThucHienId = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiDisplay === void 0) { TrangThaiDisplay = null; }
                    if (ChiTietKetQuaXetNghiems === void 0) { ChiTietKetQuaXetNghiems = new Array(); }
                    if (LaCapCuu === void 0) { LaCapCuu = null; }
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
                return DuyetKetQuaNew;
            }());
            var ListDataChildNew = /** @class */ (function () {
                function ListDataChildNew(DuyetNhom, Ten, GiaTriCu, GiaTriTuMay, GiaTriNhapTay, GiaTriDuyet, ToDamGiaTri, Csbt, DonVi, ThoiDiemGuiYeuCau, ThoiDiemGuiYeuCauDisplay, ThoiDiemNhanKetQua, ThoiDiemNhanKetQuaDisplay, MayXetNghiemId, TenMayXetNghiem, ThoiDiemDuyetKetQua, ThoiDiemDuyetKetQuaDisplay, NguoiDuyet, LoaiMau, DichVuXetNghiemId, LoaiKetQuaTuMay, IdChilds, Id, Level, DanhSachLoaiMau, YeuCauChayLai, DaDuyet, Duyet, HighLightClass, HighLightCellClass, DaGoiDuyet, IsParent, NgayYeuCauDisplay, LyDoYeuCau, NgayDuyetDisplay, NguoiYeuCau, NguoiDuyetChayLai, Nhom, NhomId, CheckBox, LaDichVuSarCovid2, LoaiKitThuId, LoaiKitThu) {
                    if (DuyetNhom === void 0) { DuyetNhom = false; }
                    if (Ten === void 0) { Ten = null; }
                    if (GiaTriCu === void 0) { GiaTriCu = null; }
                    if (GiaTriTuMay === void 0) { GiaTriTuMay = null; }
                    if (GiaTriNhapTay === void 0) { GiaTriNhapTay = null; }
                    if (GiaTriDuyet === void 0) { GiaTriDuyet = null; }
                    if (ToDamGiaTri === void 0) { ToDamGiaTri = null; }
                    if (Csbt === void 0) { Csbt = null; }
                    if (DonVi === void 0) { DonVi = null; }
                    if (ThoiDiemGuiYeuCau === void 0) { ThoiDiemGuiYeuCau = null; }
                    if (ThoiDiemGuiYeuCauDisplay === void 0) { ThoiDiemGuiYeuCauDisplay = null; }
                    if (ThoiDiemNhanKetQua === void 0) { ThoiDiemNhanKetQua = null; }
                    if (ThoiDiemNhanKetQuaDisplay === void 0) { ThoiDiemNhanKetQuaDisplay = null; }
                    if (MayXetNghiemId === void 0) { MayXetNghiemId = null; }
                    if (TenMayXetNghiem === void 0) { TenMayXetNghiem = null; }
                    if (ThoiDiemDuyetKetQua === void 0) { ThoiDiemDuyetKetQua = null; }
                    if (ThoiDiemDuyetKetQuaDisplay === void 0) { ThoiDiemDuyetKetQuaDisplay = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (LoaiMau === void 0) { LoaiMau = null; }
                    if (DichVuXetNghiemId === void 0) { DichVuXetNghiemId = null; }
                    if (LoaiKetQuaTuMay === void 0) { LoaiKetQuaTuMay = null; }
                    if (IdChilds === void 0) { IdChilds = new Array(); }
                    if (Id === void 0) { Id = null; }
                    if (Level === void 0) { Level = null; }
                    if (DanhSachLoaiMau === void 0) { DanhSachLoaiMau = new Array(); }
                    if (YeuCauChayLai === void 0) { YeuCauChayLai = null; }
                    if (DaDuyet === void 0) { DaDuyet = null; }
                    if (Duyet === void 0) { Duyet = false; }
                    if (HighLightClass === void 0) { HighLightClass = null; }
                    if (HighLightCellClass === void 0) { HighLightCellClass = null; }
                    if (DaGoiDuyet === void 0) { DaGoiDuyet = null; }
                    if (IsParent === void 0) { IsParent = null; }
                    if (NgayYeuCauDisplay === void 0) { NgayYeuCauDisplay = null; }
                    if (LyDoYeuCau === void 0) { LyDoYeuCau = null; }
                    if (NgayDuyetDisplay === void 0) { NgayDuyetDisplay = null; }
                    if (NguoiYeuCau === void 0) { NguoiYeuCau = null; }
                    if (NguoiDuyetChayLai === void 0) { NguoiDuyetChayLai = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (NhomId === void 0) { NhomId = null; }
                    if (CheckBox === void 0) { CheckBox = false; }
                    if (LaDichVuSarCovid2 === void 0) { LaDichVuSarCovid2 = false; }
                    if (LoaiKitThuId === void 0) { LoaiKitThuId = null; }
                    if (LoaiKitThu === void 0) { LoaiKitThu = null; }
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
                return ListDataChildNew;
            }());
            var NhomDichVuDuyetNew = /** @class */ (function () {
                function NhomDichVuDuyetNew(IsCheck, NhomDichVuBenhVienId, TenNhomDichVu) {
                    if (IsCheck === void 0) { IsCheck = true; }
                    if (NhomDichVuBenhVienId === void 0) { NhomDichVuBenhVienId = null; }
                    if (TenNhomDichVu === void 0) { TenNhomDichVu = null; }
                    this.IsCheck = IsCheck;
                    this.NhomDichVuBenhVienId = NhomDichVuBenhVienId;
                    this.TenNhomDichVu = TenNhomDichVu;
                }
                return NhomDichVuDuyetNew;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module~xet-nghiem-xet-nghiem-ket-qua-new-xet-~19bb8353-es2015.js.map
//# sourceMappingURL=default~xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module~xet-nghiem-xet-nghiem-ket-qua-new-xet-~19bb8353-es5.js.map
//# sourceMappingURL=default~xet-nghiem-duyet-ket-qua-new-duyet-ket-qua-new-module~xet-nghiem-xet-nghiem-ket-qua-new-xet-~19bb8353-es5.js.map