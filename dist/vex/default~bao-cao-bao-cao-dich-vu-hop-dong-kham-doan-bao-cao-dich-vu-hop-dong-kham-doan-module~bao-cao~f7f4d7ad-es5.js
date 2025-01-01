(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~f7f4d7ad"], {
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts ***!
          \************************************************************************************************/
        /*! exports provided: SearchNgay, rangeDate, TrangThaiTaoPhieuLinh, YeuCauLinhVatTu, YeuCauVatTuBenhVienViewModel, YeuCauLinhVatTuChiTiet, VatTuGridViewModelValidator, PhieuLinhVatTuThuong, VatTuCanBuSearch, VatTuCanLinhTrucTiepSearch, LinhVatTuTrucTiep, ListIds, LinhTrucTiepVatTu, KhoId, KhoLinhTu, ThongTinLinhTuKho, TrangThaiDuyetYeuCauLinh, DaDuyet, PhieuLinhVatTuTrucTiep, XemTruocPhieuLinhVatTuTrucTiep, ExportQueryInfoQueryInfo, LinhVatTuGridVo, SearchDanhSachThongVatTu, VatTuTonKhoKhongDu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNgay", function () { return SearchNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiTaoPhieuLinh", function () { return TrangThaiTaoPhieuLinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhVatTu", function () { return YeuCauLinhVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauVatTuBenhVienViewModel", function () { return YeuCauVatTuBenhVienViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhVatTuChiTiet", function () { return YeuCauLinhVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuGridViewModelValidator", function () { return VatTuGridViewModelValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuThuong", function () { return PhieuLinhVatTuThuong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuCanBuSearch", function () { return VatTuCanBuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuCanLinhTrucTiepSearch", function () { return VatTuCanLinhTrucTiepSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhVatTuTrucTiep", function () { return LinhVatTuTrucTiep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIds", function () { return ListIds; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhTrucTiepVatTu", function () { return LinhTrucTiepVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoId", function () { return KhoId; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoLinhTu", function () { return KhoLinhTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLinhTuKho", function () { return ThongTinLinhTuKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetYeuCauLinh", function () { return TrangThaiDuyetYeuCauLinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaDuyet", function () { return DaDuyet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhVatTuTrucTiep", function () { return PhieuLinhVatTuTrucTiep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocPhieuLinhVatTuTrucTiep", function () { return XemTruocPhieuLinhVatTuTrucTiep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function () { return ExportQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhVatTuGridVo", function () { return LinhVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDanhSachThongVatTu", function () { return SearchDanhSachThongVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoKhongDu", function () { return VatTuTonKhoKhongDu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchNgay = /** @class */ (function () {
                function SearchNgay(NgayYeuCauRangDate, NgayDuyetRangDate, TrangThaiCheck) {
                    if (NgayYeuCauRangDate === void 0) { NgayYeuCauRangDate = new rangeDate; }
                    if (NgayDuyetRangDate === void 0) { NgayDuyetRangDate = new rangeDate; }
                    if (TrangThaiCheck === void 0) { TrangThaiCheck = 4; }
                    this.NgayYeuCauRangDate = NgayYeuCauRangDate;
                    this.NgayDuyetRangDate = NgayDuyetRangDate;
                    this.TrangThaiCheck = TrangThaiCheck;
                }
                return SearchNgay;
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
            var TrangThaiTaoPhieuLinh = /** @class */ (function () {
                function TrangThaiTaoPhieuLinh(TrangThai, Ten, EnumTrangThaiPhieuLinh) {
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (EnumTrangThaiPhieuLinh === void 0) { EnumTrangThaiPhieuLinh = null; }
                    this.TrangThai = TrangThai;
                    this.Ten = Ten;
                    this.EnumTrangThaiPhieuLinh = EnumTrangThaiPhieuLinh;
                }
                return TrangThaiTaoPhieuLinh;
            }());
            var YeuCauLinhVatTu = /** @class */ (function () {
                function YeuCauLinhVatTu(Id, KhoXuatId, TenKhoXuat, KhoNhapId, TenKhoNhap, LoaiPhieuLinh, NhanVienYeuCauId, HoTenNguoiYeuCau, NgayYeuCau, NhanVienDuyetId, HoTenNguoiDuyet, NgayDuyet, GhiChu, DuocDuyet, LyDoKhongDuyet, TenNhanVienDuyet, TenNhanVienYeuCau, IsLuu, LaNguoiTaoPhieu, LastModified, DaGui, ThoiDiemChiDinhTu, ThoiDiemChiDinhDen, YeuCauLinhVatTuChiTiets, YeuCauVatTuBenhViens) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (TenKhoNhap === void 0) { TenKhoNhap = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (HoTenNguoiYeuCau === void 0) { HoTenNguoiYeuCau = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (HoTenNguoiDuyet === void 0) { HoTenNguoiDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (IsLuu === void 0) { IsLuu = false; }
                    if (LaNguoiTaoPhieu === void 0) { LaNguoiTaoPhieu = null; }
                    if (LastModified === void 0) { LastModified = null; }
                    if (DaGui === void 0) { DaGui = false; }
                    if (ThoiDiemChiDinhTu === void 0) { ThoiDiemChiDinhTu = null; }
                    if (ThoiDiemChiDinhDen === void 0) { ThoiDiemChiDinhDen = null; }
                    if (YeuCauLinhVatTuChiTiets === void 0) { YeuCauLinhVatTuChiTiets = []; }
                    if (YeuCauVatTuBenhViens === void 0) { YeuCauVatTuBenhViens = []; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.TenKhoXuat = TenKhoXuat;
                    this.KhoNhapId = KhoNhapId;
                    this.TenKhoNhap = TenKhoNhap;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.HoTenNguoiYeuCau = HoTenNguoiYeuCau;
                    this.NgayYeuCau = NgayYeuCau;
                    this.NhanVienDuyetId = NhanVienDuyetId;
                    this.HoTenNguoiDuyet = HoTenNguoiDuyet;
                    this.NgayDuyet = NgayDuyet;
                    this.GhiChu = GhiChu;
                    this.DuocDuyet = DuocDuyet;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.TenNhanVienDuyet = TenNhanVienDuyet;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.IsLuu = IsLuu;
                    this.LaNguoiTaoPhieu = LaNguoiTaoPhieu;
                    this.LastModified = LastModified;
                    this.DaGui = DaGui;
                    this.ThoiDiemChiDinhTu = ThoiDiemChiDinhTu;
                    this.ThoiDiemChiDinhDen = ThoiDiemChiDinhDen;
                    this.YeuCauLinhVatTuChiTiets = YeuCauLinhVatTuChiTiets;
                    this.YeuCauVatTuBenhViens = YeuCauVatTuBenhViens;
                }
                return YeuCauLinhVatTu;
            }());
            var YeuCauVatTuBenhVienViewModel = /** @class */ (function () {
                function YeuCauVatTuBenhVienViewModel(Id, YeuCauVatTuBenhVienIds, VatTuBenhVienId, LaVatTuBHYT, KhoLinhTuId, KhoLinhVeId, SoLuongCanBu, SoLuongTon, SoLuongYeuCau, SoLuongDaBu, SLYeuCauLinhThucTe, SLYeuCauLinhThucTeMax, CheckBox) {
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauVatTuBenhVienIds === void 0) { YeuCauVatTuBenhVienIds = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (KhoLinhTuId === void 0) { KhoLinhTuId = null; }
                    if (KhoLinhVeId === void 0) { KhoLinhVeId = null; }
                    if (SoLuongCanBu === void 0) { SoLuongCanBu = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongYeuCau === void 0) { SoLuongYeuCau = null; }
                    if (SoLuongDaBu === void 0) { SoLuongDaBu = null; }
                    if (SLYeuCauLinhThucTe === void 0) { SLYeuCauLinhThucTe = null; }
                    if (SLYeuCauLinhThucTeMax === void 0) { SLYeuCauLinhThucTeMax = null; }
                    if (CheckBox === void 0) { CheckBox = false; }
                    this.Id = Id;
                    this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.KhoLinhTuId = KhoLinhTuId;
                    this.KhoLinhVeId = KhoLinhVeId;
                    this.SoLuongCanBu = SoLuongCanBu;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongYeuCau = SoLuongYeuCau;
                    this.SoLuongDaBu = SoLuongDaBu;
                    this.SLYeuCauLinhThucTe = SLYeuCauLinhThucTe;
                    this.SLYeuCauLinhThucTeMax = SLYeuCauLinhThucTeMax;
                    this.CheckBox = CheckBox;
                }
                return YeuCauVatTuBenhVienViewModel;
            }());
            var YeuCauLinhVatTuChiTiet = /** @class */ (function () {
                function YeuCauLinhVatTuChiTiet(STT, Id, YeuCauLinhVatTuId, VatTuBenhVienId, LaVatTuBHYT, SoLuong, NgayYeuCau, Ma, Ten, DVT, NhaSX, NuocSX, SLYeuCau, SoLuongCoTheXuat, LoaiVatTu, SLTon, SLCanBu, Nhom, VatTuBenhViens, DuocDuyet, KhoXuatId, IsValidator) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauLinhVatTuId === void 0) { YeuCauLinhVatTuId = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SLYeuCau === void 0) { SLYeuCau = null; }
                    if (SoLuongCoTheXuat === void 0) { SoLuongCoTheXuat = null; }
                    if (LoaiVatTu === void 0) { LoaiVatTu = null; }
                    if (SLTon === void 0) { SLTon = null; }
                    if (SLCanBu === void 0) { SLCanBu = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (VatTuBenhViens === void 0) { VatTuBenhViens = []; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (IsValidator === void 0) { IsValidator = null; }
                    this.STT = STT;
                    this.Id = Id;
                    this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuong = SoLuong;
                    this.NgayYeuCau = NgayYeuCau;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.DVT = DVT;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SLYeuCau = SLYeuCau;
                    this.SoLuongCoTheXuat = SoLuongCoTheXuat;
                    this.LoaiVatTu = LoaiVatTu;
                    this.SLTon = SLTon;
                    this.SLCanBu = SLCanBu;
                    this.Nhom = Nhom;
                    this.VatTuBenhViens = VatTuBenhViens;
                    this.DuocDuyet = DuocDuyet;
                    this.KhoXuatId = KhoXuatId;
                    this.IsValidator = IsValidator;
                }
                return YeuCauLinhVatTuChiTiet;
            }());
            var VatTuGridViewModelValidator = /** @class */ (function () {
                function VatTuGridViewModelValidator(VatTuBenhVienId, LaVatTuBHYT) {
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                }
                return VatTuGridViewModelValidator;
            }());
            var PhieuLinhVatTuThuong = /** @class */ (function () {
                function PhieuLinhVatTuThuong(YeuCauLinhVatTuId, HostingName, Header, LoaiPhieuLinh, TrangThai) {
                    if (YeuCauLinhVatTuId === void 0) { YeuCauLinhVatTuId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.TrangThai = TrangThai;
                }
                return PhieuLinhVatTuThuong;
            }());
            var VatTuCanBuSearch = /** @class */ (function () {
                function VatTuCanBuSearch(KhoLinhId, KhoBuId) {
                    if (KhoLinhId === void 0) { KhoLinhId = null; }
                    if (KhoBuId === void 0) { KhoBuId = null; }
                    this.KhoLinhId = KhoLinhId;
                    this.KhoBuId = KhoBuId;
                }
                return VatTuCanBuSearch;
            }());
            var VatTuCanLinhTrucTiepSearch = /** @class */ (function () {
                function VatTuCanLinhTrucTiepSearch(KhoLinhId, PhongLinhVeId) {
                    if (KhoLinhId === void 0) { KhoLinhId = null; }
                    if (PhongLinhVeId === void 0) { PhongLinhVeId = null; }
                    this.KhoLinhId = KhoLinhId;
                    this.PhongLinhVeId = PhongLinhVeId;
                }
                return VatTuCanLinhTrucTiepSearch;
            }());
            var LinhVatTuTrucTiep = /** @class */ (function () {
                function LinhVatTuTrucTiep(Id, KhoXuatId, TenKhoXuat, KhoNhapId, LoaiPhieuLinh, NhanVienYeuCauId, NgayYeuCau, NguoiDuyet, NgayDuyet, LyDoKhongDuyet, GhiChu, 
                // public ThongTinLinhTuKhoObject: ThongTinLinhTuKho = null,
                YeuCauLinhVatTuChiTiets, YeuCauVatTuBenhViensTT, YeuCauVatTuBenhVienIds, CheckKhiTao, DanhSachVatTuTonKhongDus, ThoiDiemLinhTongHopTuNgay, ThoiDiemLinhTongHopDenNgay, YeuCauLinhVatTuId) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauLinhVatTuChiTiets === void 0) { YeuCauLinhVatTuChiTiets = []; }
                    if (YeuCauVatTuBenhViensTT === void 0) { YeuCauVatTuBenhViensTT = []; }
                    if (YeuCauVatTuBenhVienIds === void 0) { YeuCauVatTuBenhVienIds = []; }
                    if (CheckKhiTao === void 0) { CheckKhiTao = []; }
                    if (DanhSachVatTuTonKhongDus === void 0) { DanhSachVatTuTonKhongDus = []; }
                    if (ThoiDiemLinhTongHopTuNgay === void 0) { ThoiDiemLinhTongHopTuNgay = null; }
                    if (ThoiDiemLinhTongHopDenNgay === void 0) { ThoiDiemLinhTongHopDenNgay = null; }
                    if (YeuCauLinhVatTuId === void 0) { YeuCauLinhVatTuId = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.TenKhoXuat = TenKhoXuat;
                    this.KhoNhapId = KhoNhapId;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.NguoiDuyet = NguoiDuyet;
                    this.NgayDuyet = NgayDuyet;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.GhiChu = GhiChu;
                    this.YeuCauLinhVatTuChiTiets = YeuCauLinhVatTuChiTiets;
                    this.YeuCauVatTuBenhViensTT = YeuCauVatTuBenhViensTT;
                    this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
                    this.CheckKhiTao = CheckKhiTao;
                    this.DanhSachVatTuTonKhongDus = DanhSachVatTuTonKhongDus;
                    this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
                    this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
                    this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
                }
                return LinhVatTuTrucTiep;
            }());
            var ListIds = /** @class */ (function () {
                function ListIds(Id) {
                    if (Id === void 0) { Id = 0; }
                    this.Id = Id;
                }
                return ListIds;
            }());
            var LinhTrucTiepVatTu = /** @class */ (function () {
                function LinhTrucTiepVatTu(Id, STT, HamLuong, Ten, HoatChat, DuongDung, DVT, NhaSX, NuocSX, SLYeuCau, SoLuong, Nhom, VatTuBenhVienId, CheckKhiTao, YeuCauLinhVatTuChiTiets, YeuCauVatTuBenhViensTT, YeuCauVatTuBenhVienIds, YeuCauTiepNhanId, DanhSachVatTuTonKhongDus, ThoiDiemLinhTongHopTuNgay, ThoiDiemLinhTongHopDenNgay, Goi) {
                    if (Id === void 0) { Id = 0; }
                    if (STT === void 0) { STT = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SLYeuCau === void 0) { SLYeuCau = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = 0; }
                    if (CheckKhiTao === void 0) { CheckKhiTao = []; }
                    if (YeuCauLinhVatTuChiTiets === void 0) { YeuCauLinhVatTuChiTiets = []; }
                    if (YeuCauVatTuBenhViensTT === void 0) { YeuCauVatTuBenhViensTT = []; }
                    if (YeuCauVatTuBenhVienIds === void 0) { YeuCauVatTuBenhVienIds = []; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = 0; }
                    if (DanhSachVatTuTonKhongDus === void 0) { DanhSachVatTuTonKhongDus = []; }
                    if (ThoiDiemLinhTongHopTuNgay === void 0) { ThoiDiemLinhTongHopTuNgay = null; }
                    if (ThoiDiemLinhTongHopDenNgay === void 0) { ThoiDiemLinhTongHopDenNgay = null; }
                    if (Goi === void 0) { Goi = null; }
                    this.Id = Id;
                    this.STT = STT;
                    this.HamLuong = HamLuong;
                    this.Ten = Ten;
                    this.HoatChat = HoatChat;
                    this.DuongDung = DuongDung;
                    this.DVT = DVT;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SLYeuCau = SLYeuCau;
                    this.SoLuong = SoLuong;
                    this.Nhom = Nhom;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.CheckKhiTao = CheckKhiTao;
                    this.YeuCauLinhVatTuChiTiets = YeuCauLinhVatTuChiTiets;
                    this.YeuCauVatTuBenhViensTT = YeuCauVatTuBenhViensTT;
                    this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.DanhSachVatTuTonKhongDus = DanhSachVatTuTonKhongDus;
                    this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
                    this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
                    this.Goi = Goi;
                }
                return LinhTrucTiepVatTu;
            }());
            var KhoId = /** @class */ (function () {
                function KhoId(Id, YeuCauTiepNhanId) {
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = 0; }
                    this.Id = Id;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                }
                return KhoId;
            }());
            var KhoLinhTu = /** @class */ (function () {
                function KhoLinhTu(KeyId, DisplayName, YeuCauVatTuBenhVienIds) {
                    if (KeyId === void 0) { KeyId = null; }
                    if (DisplayName === void 0) { DisplayName = ""; }
                    if (YeuCauVatTuBenhVienIds === void 0) { YeuCauVatTuBenhVienIds = []; }
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                    this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
                }
                return KhoLinhTu;
            }());
            var ThongTinLinhTuKho = /** @class */ (function () {
                function ThongTinLinhTuKho(LinhVePhong, NguoiYeuCau, NgayYeuCau, GhiChu) {
                    if (LinhVePhong === void 0) { LinhVePhong = ""; }
                    if (NguoiYeuCau === void 0) { NguoiYeuCau = ""; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = ""; }
                    if (GhiChu === void 0) { GhiChu = ""; }
                    this.LinhVePhong = LinhVePhong;
                    this.NguoiYeuCau = NguoiYeuCau;
                    this.NgayYeuCau = NgayYeuCau;
                    this.GhiChu = GhiChu;
                }
                return ThongTinLinhTuKho;
            }());
            var TrangThaiDuyetYeuCauLinh = /** @class */ (function () {
                function TrangThaiDuyetYeuCauLinh(TenTrangThai, DuocDuyet) {
                    if (TenTrangThai === void 0) { TenTrangThai = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    this.TenTrangThai = TenTrangThai;
                    this.DuocDuyet = DuocDuyet;
                }
                return TrangThaiDuyetYeuCauLinh;
            }());
            var DaDuyet = /** @class */ (function () {
                function DaDuyet(NguoiDuyet, NgayDuyet) {
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    this.NguoiDuyet = NguoiDuyet;
                    this.NgayDuyet = NgayDuyet;
                }
                return DaDuyet;
            }());
            var PhieuLinhVatTuTrucTiep = /** @class */ (function () {
                function PhieuLinhVatTuTrucTiep(YeuCauLinhVatTuId, Hosting, Header, TrangThaiIn) {
                    if (YeuCauLinhVatTuId === void 0) { YeuCauLinhVatTuId = 0; }
                    if (Hosting === void 0) { Hosting = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThaiIn === void 0) { TrangThaiIn = null; }
                    this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
                    this.Hosting = Hosting;
                    this.Header = Header;
                    this.TrangThaiIn = TrangThaiIn;
                }
                return PhieuLinhVatTuTrucTiep;
            }());
            var XemTruocPhieuLinhVatTuTrucTiep = /** @class */ (function () {
                function XemTruocPhieuLinhVatTuTrucTiep(Hosting, YeuCauVatTuBenhVienIds, KhoLinhId, ThoiDiemLinhTongHopTuNgay, ThoiDiemLinhTongHopDenNgay) {
                    if (Hosting === void 0) { Hosting = null; }
                    if (YeuCauVatTuBenhVienIds === void 0) { YeuCauVatTuBenhVienIds = []; }
                    if (KhoLinhId === void 0) { KhoLinhId = 0; }
                    if (ThoiDiemLinhTongHopTuNgay === void 0) { ThoiDiemLinhTongHopTuNgay = null; }
                    if (ThoiDiemLinhTongHopDenNgay === void 0) { ThoiDiemLinhTongHopDenNgay = null; }
                    this.Hosting = Hosting;
                    this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
                    this.KhoLinhId = KhoLinhId;
                    this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
                    this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
                }
                return XemTruocPhieuLinhVatTuTrucTiep;
            }());
            var ExportQueryInfoQueryInfo = /** @class */ (function () {
                function ExportQueryInfoQueryInfo(Skip, Take, PageSize, SearchString, AdditionalSearchString, 
                // public searchTerms: string = "",
                Sort) {
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return ExportQueryInfoQueryInfo;
            }());
            var LinhVatTuGridVo = /** @class */ (function () {
                function LinhVatTuGridVo(NgayYeuCauRangDateStartDate, NgayYeuCauRangDateStartEnd, NgayDuyetRangDateStartDate, NgayDuyetRangDateStartEnd, Searching, TrangThaiCheck, DangChoGoi, DangChoDuyet, TuChoiDuyet, DaDuyet) {
                    if (NgayYeuCauRangDateStartDate === void 0) { NgayYeuCauRangDateStartDate = null; }
                    if (NgayYeuCauRangDateStartEnd === void 0) { NgayYeuCauRangDateStartEnd = null; }
                    if (NgayDuyetRangDateStartDate === void 0) { NgayDuyetRangDateStartDate = null; }
                    if (NgayDuyetRangDateStartEnd === void 0) { NgayDuyetRangDateStartEnd = null; }
                    if (Searching === void 0) { Searching = null; }
                    if (TrangThaiCheck === void 0) { TrangThaiCheck = null; }
                    if (DangChoGoi === void 0) { DangChoGoi = true; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = null; }
                    if (DaDuyet === void 0) { DaDuyet = null; }
                    this.NgayYeuCauRangDateStartDate = NgayYeuCauRangDateStartDate;
                    this.NgayYeuCauRangDateStartEnd = NgayYeuCauRangDateStartEnd;
                    this.NgayDuyetRangDateStartDate = NgayDuyetRangDateStartDate;
                    this.NgayDuyetRangDateStartEnd = NgayDuyetRangDateStartEnd;
                    this.Searching = Searching;
                    this.TrangThaiCheck = TrangThaiCheck;
                    this.DangChoGoi = DangChoGoi;
                    this.DangChoDuyet = DangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                }
                return LinhVatTuGridVo;
            }());
            var SearchDanhSachThongVatTu = /** @class */ (function () {
                function SearchDanhSachThongVatTu(TuNgay, DenNgay) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return SearchDanhSachThongVatTu;
            }());
            var VatTuTonKhoKhongDu = /** @class */ (function () {
                function VatTuTonKhoKhongDu(TenVatTu, VatTuId, SoLuongTon, SoLuongYeuCau) {
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongYeuCau === void 0) { SoLuongYeuCau = null; }
                    this.TenVatTu = TenVatTu;
                    this.VatTuId = VatTuId;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongYeuCau = SoLuongYeuCau;
                }
                return VatTuTonKhoKhongDu;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~f7f4d7ad-es2015.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~f7f4d7ad-es5.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~f7f4d7ad-es5.js.map