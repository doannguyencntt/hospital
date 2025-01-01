(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-danh-sach-duoc-pham-can-bu-danh-sach-duoc-pham-can-bu~8f94e0a6"], {
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts ***!
          \*************************************************************************************************/
        /*! exports provided: rangeDate, SearchNgay, YeuCauLinhDuocPham, YeuCauLinhDuocPhamChiTiet, DuocPhamGridViewModelValidator, NhapKhoDuocPham, XuatKhoDuocPham, DuocPhamGridViewModel, PhieuLinhThuocThuong, YeuCauLinhBuDuocPhamSearch, YeuCauLinhBuDuocPham, YeuCauDuocPhamBenhVienViewModel, YeuCauLinhBuDuocPhamChiTiet, KhoLinhTu, KhoId, ThongTinLinhTuKho, LinhTrucTiepDuocPham, LinhDuocPhamTrucTiep, ListIds, LinhDuocPhamTrucTiepViewModel, PhieuLinhThuocTrucTiep, XemTruocPhieuLinhThuocTrucTiep, TrangThaiDuyetYeuCauLinh, DaDuyet, ExportQueryInfoQueryInfo, DuocPhamCanBuSearch, DuocPhamCanLinhTrucTiepSearch, LinhVatTuGridVo, SearchDanhSachThongDuocPham, QueryInfoQueryInfo, DuocPhamKhongTheTao, DuocPhamTonKhoKhongDu, ChangeDuocPhamBenhVienOrXetNghiem */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNgay", function () { return SearchNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhDuocPham", function () { return YeuCauLinhDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhDuocPhamChiTiet", function () { return YeuCauLinhDuocPhamChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamGridViewModelValidator", function () { return DuocPhamGridViewModelValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPham", function () { return NhapKhoDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPham", function () { return XuatKhoDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamGridViewModel", function () { return DuocPhamGridViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocThuong", function () { return PhieuLinhThuocThuong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuDuocPhamSearch", function () { return YeuCauLinhBuDuocPhamSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuDuocPham", function () { return YeuCauLinhBuDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDuocPhamBenhVienViewModel", function () { return YeuCauDuocPhamBenhVienViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuDuocPhamChiTiet", function () { return YeuCauLinhBuDuocPhamChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoLinhTu", function () { return KhoLinhTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoId", function () { return KhoId; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLinhTuKho", function () { return ThongTinLinhTuKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhTrucTiepDuocPham", function () { return LinhTrucTiepDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhDuocPhamTrucTiep", function () { return LinhDuocPhamTrucTiep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIds", function () { return ListIds; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhDuocPhamTrucTiepViewModel", function () { return LinhDuocPhamTrucTiepViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocTrucTiep", function () { return PhieuLinhThuocTrucTiep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocPhieuLinhThuocTrucTiep", function () { return XemTruocPhieuLinhThuocTrucTiep; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetYeuCauLinh", function () { return TrangThaiDuyetYeuCauLinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaDuyet", function () { return DaDuyet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function () { return ExportQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamCanBuSearch", function () { return DuocPhamCanBuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamCanLinhTrucTiepSearch", function () { return DuocPhamCanLinhTrucTiepSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhVatTuGridVo", function () { return LinhVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDanhSachThongDuocPham", function () { return SearchDanhSachThongDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfoQueryInfo", function () { return QueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamKhongTheTao", function () { return DuocPhamKhongTheTao; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamTonKhoKhongDu", function () { return DuocPhamTonKhoKhongDu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDuocPhamBenhVienOrXetNghiem", function () { return ChangeDuocPhamBenhVienOrXetNghiem; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var rangeDate = /** @class */ (function () {
                function rangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return rangeDate;
            }());
            var SearchNgay = /** @class */ (function () {
                function SearchNgay(NgayYeuCauRangDate, NgayDuyetRangDate, DangChoGoi, DangChoDuyet, TuChoiDuyet, DaDuyet) {
                    if (NgayYeuCauRangDate === void 0) { NgayYeuCauRangDate = new rangeDate; }
                    if (NgayDuyetRangDate === void 0) { NgayDuyetRangDate = new rangeDate; }
                    if (DangChoGoi === void 0) { DangChoGoi = true; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = true; }
                    this.NgayYeuCauRangDate = NgayYeuCauRangDate;
                    this.NgayDuyetRangDate = NgayDuyetRangDate;
                    this.DangChoGoi = DangChoGoi;
                    this.DangChoDuyet = DangChoDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.DaDuyet = DaDuyet;
                }
                return SearchNgay;
            }());
            var YeuCauLinhDuocPham = /** @class */ (function () {
                function YeuCauLinhDuocPham(Id, KhoXuatId, TenKhoXuat, KhoNhapId, TenKhoNhap, LoaiPhieuLinh, NhanVienYeuCauId, HoTenNguoiYeuCau, NgayYeuCau, NhanVienDuyetId, HoTenNguoiDuyet, NgayDuyet, GhiChu, DuocDuyet, LyDoKhongDuyet, DaGui, IsDisable, IsDisableGui, IsLuu, LaNguoiTaoPhieu, LastModified, YeuCauLinhDuocPhamChiTiets, YeuCauDuocPhamBenhViens) {
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
                    if (DaGui === void 0) { DaGui = false; }
                    if (IsDisable === void 0) { IsDisable = null; }
                    if (IsDisableGui === void 0) { IsDisableGui = null; }
                    if (IsLuu === void 0) { IsLuu = false; }
                    if (LaNguoiTaoPhieu === void 0) { LaNguoiTaoPhieu = null; }
                    if (LastModified === void 0) { LastModified = null; }
                    if (YeuCauLinhDuocPhamChiTiets === void 0) { YeuCauLinhDuocPhamChiTiets = []; }
                    if (YeuCauDuocPhamBenhViens === void 0) { YeuCauDuocPhamBenhViens = []; }
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
                    this.DaGui = DaGui;
                    this.IsDisable = IsDisable;
                    this.IsDisableGui = IsDisableGui;
                    this.IsLuu = IsLuu;
                    this.LaNguoiTaoPhieu = LaNguoiTaoPhieu;
                    this.LastModified = LastModified;
                    this.YeuCauLinhDuocPhamChiTiets = YeuCauLinhDuocPhamChiTiets;
                    this.YeuCauDuocPhamBenhViens = YeuCauDuocPhamBenhViens;
                }
                return YeuCauLinhDuocPham;
            }());
            var YeuCauLinhDuocPhamChiTiet = /** @class */ (function () {
                function YeuCauLinhDuocPhamChiTiet(STT, Id, YeuCauLinhDuocPhamId, DuocPhamBenhVienId, LaDuocPhamBHYT, SoLuong, NgayYeuCau, HamLuong, Ten, HoatChat, DuongDungId, DuongDung, DVTId, DVT, NhaSX, NuocSX, SLYeuCau, SoLuongCoTheXuat, LoaiDuocPham, SLTon, Nhom, DuocPhamBenhViens, DuocDuyet, KhoXuatId, IsValidator, MayXetNghiemTenVaIds, DanhSachMayXetNghiemId, DanhSachTenMayXetNghiem) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDungId === void 0) { DuongDungId = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (DVTId === void 0) { DVTId = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SLYeuCau === void 0) { SLYeuCau = null; }
                    if (SoLuongCoTheXuat === void 0) { SoLuongCoTheXuat = null; }
                    if (LoaiDuocPham === void 0) { LoaiDuocPham = null; }
                    if (SLTon === void 0) { SLTon = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (DuocPhamBenhViens === void 0) { DuocPhamBenhViens = []; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = 0; }
                    if (IsValidator === void 0) { IsValidator = null; }
                    if (MayXetNghiemTenVaIds === void 0) { MayXetNghiemTenVaIds = null; }
                    if (DanhSachMayXetNghiemId === void 0) { DanhSachMayXetNghiemId = null; }
                    if (DanhSachTenMayXetNghiem === void 0) { DanhSachTenMayXetNghiem = null; }
                    this.STT = STT;
                    this.Id = Id;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.SoLuong = SoLuong;
                    this.NgayYeuCau = NgayYeuCau;
                    this.HamLuong = HamLuong;
                    this.Ten = Ten;
                    this.HoatChat = HoatChat;
                    this.DuongDungId = DuongDungId;
                    this.DuongDung = DuongDung;
                    this.DVTId = DVTId;
                    this.DVT = DVT;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SLYeuCau = SLYeuCau;
                    this.SoLuongCoTheXuat = SoLuongCoTheXuat;
                    this.LoaiDuocPham = LoaiDuocPham;
                    this.SLTon = SLTon;
                    this.Nhom = Nhom;
                    this.DuocPhamBenhViens = DuocPhamBenhViens;
                    this.DuocDuyet = DuocDuyet;
                    this.KhoXuatId = KhoXuatId;
                    this.IsValidator = IsValidator;
                    this.MayXetNghiemTenVaIds = MayXetNghiemTenVaIds;
                    this.DanhSachMayXetNghiemId = DanhSachMayXetNghiemId;
                    this.DanhSachTenMayXetNghiem = DanhSachTenMayXetNghiem;
                }
                return YeuCauLinhDuocPhamChiTiet;
            }());
            var DuocPhamGridViewModelValidator = /** @class */ (function () {
                function DuocPhamGridViewModelValidator(DuocPhamBenhVienId, LaDuocPhamBHYT) {
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = 0; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                }
                return DuocPhamGridViewModelValidator;
            }());
            var NhapKhoDuocPham = /** @class */ (function () {
                function NhapKhoDuocPham(Id, YeuCauNhapKhoDuocPhamId, KhoId, YeuCauLinhDuocPhamId, SoChungTu, XuatKhoDuocPhamId, TenNguoiGiao, NguoiGiaoId, NguoiNhapId, DaHet, LoaiNguoiGiao, NgayNhap) {
                    if (Id === void 0) { Id = null; }
                    if (YeuCauNhapKhoDuocPhamId === void 0) { YeuCauNhapKhoDuocPhamId = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (XuatKhoDuocPhamId === void 0) { XuatKhoDuocPhamId = null; }
                    if (TenNguoiGiao === void 0) { TenNguoiGiao = null; }
                    if (NguoiGiaoId === void 0) { NguoiGiaoId = null; }
                    if (NguoiNhapId === void 0) { NguoiNhapId = null; }
                    if (DaHet === void 0) { DaHet = null; }
                    if (LoaiNguoiGiao === void 0) { LoaiNguoiGiao = null; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    this.Id = Id;
                    this.YeuCauNhapKhoDuocPhamId = YeuCauNhapKhoDuocPhamId;
                    this.KhoId = KhoId;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.SoChungTu = SoChungTu;
                    this.XuatKhoDuocPhamId = XuatKhoDuocPhamId;
                    this.TenNguoiGiao = TenNguoiGiao;
                    this.NguoiGiaoId = NguoiGiaoId;
                    this.NguoiNhapId = NguoiNhapId;
                    this.DaHet = DaHet;
                    this.LoaiNguoiGiao = LoaiNguoiGiao;
                    this.NgayNhap = NgayNhap;
                }
                return NhapKhoDuocPham;
            }());
            var XuatKhoDuocPham = /** @class */ (function () {
                function XuatKhoDuocPham(Id, KhoXuatId, KhoNhapId, YeuCauLinhDuocPhamId, SoPhieu, LoaiXuatKho, LyDoXuatKho, TenNguoiNhan, NguoiNhanId, NguoiXuatId, LoaiNguoiNhan, NgayXuat) {
                    if (Id === void 0) { Id = null; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (LoaiXuatKho === void 0) { LoaiXuatKho = null; }
                    if (LyDoXuatKho === void 0) { LyDoXuatKho = null; }
                    if (TenNguoiNhan === void 0) { TenNguoiNhan = null; }
                    if (NguoiNhanId === void 0) { NguoiNhanId = null; }
                    if (NguoiXuatId === void 0) { NguoiXuatId = null; }
                    if (LoaiNguoiNhan === void 0) { LoaiNguoiNhan = null; }
                    if (NgayXuat === void 0) { NgayXuat = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.KhoNhapId = KhoNhapId;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.SoPhieu = SoPhieu;
                    this.LoaiXuatKho = LoaiXuatKho;
                    this.LyDoXuatKho = LyDoXuatKho;
                    this.TenNguoiNhan = TenNguoiNhan;
                    this.NguoiNhanId = NguoiNhanId;
                    this.NguoiXuatId = NguoiXuatId;
                    this.LoaiNguoiNhan = LoaiNguoiNhan;
                    this.NgayXuat = NgayXuat;
                }
                return XuatKhoDuocPham;
            }());
            var DuocPhamGridViewModel = /** @class */ (function () {
                function DuocPhamGridViewModel(STT, DuocPhamBenhVienId, YeuCauLinhDuocPhamId, HamLuong, Ten, HoatChat, DuongDungId, DuongDung, DVTId, DVT, NhaSX, NuocSX, SLYeuCau, LoaiDuocPham, SLTon, Nhom) {
                    if (STT === void 0) { STT = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = 0; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDungId === void 0) { DuongDungId = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (DVTId === void 0) { DVTId = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SLYeuCau === void 0) { SLYeuCau = null; }
                    if (LoaiDuocPham === void 0) { LoaiDuocPham = null; }
                    if (SLTon === void 0) { SLTon = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    this.STT = STT;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.HamLuong = HamLuong;
                    this.Ten = Ten;
                    this.HoatChat = HoatChat;
                    this.DuongDungId = DuongDungId;
                    this.DuongDung = DuongDung;
                    this.DVTId = DVTId;
                    this.DVT = DVT;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SLYeuCau = SLYeuCau;
                    this.LoaiDuocPham = LoaiDuocPham;
                    this.SLTon = SLTon;
                    this.Nhom = Nhom;
                }
                return DuocPhamGridViewModel;
            }());
            var PhieuLinhThuocThuong = /** @class */ (function () {
                function PhieuLinhThuocThuong(YeuCauLinhDuocPhamId, HostingName, Header, LoaiPhieuLinh, TrangThai) {
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.TrangThai = TrangThai;
                }
                return PhieuLinhThuocThuong;
            }());
            var YeuCauLinhBuDuocPhamSearch = /** @class */ (function () {
                function YeuCauLinhBuDuocPhamSearch(LinhTuKhoId, LinhVeKhoId, YeuCauLinhDuocPhamId, YeuCauLinhVatTuId, IsCreate, TrangThai, ThoiDiemChiDinhTuFormat, ThoiDiemChiDinhDenFormat, ThoiDiemChiDinhTu, ThoiDiemChiDinhDen) {
                    if (LinhTuKhoId === void 0) { LinhTuKhoId = null; }
                    if (LinhVeKhoId === void 0) { LinhVeKhoId = null; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    if (YeuCauLinhVatTuId === void 0) { YeuCauLinhVatTuId = null; }
                    if (IsCreate === void 0) { IsCreate = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (ThoiDiemChiDinhTuFormat === void 0) { ThoiDiemChiDinhTuFormat = null; }
                    if (ThoiDiemChiDinhDenFormat === void 0) { ThoiDiemChiDinhDenFormat = null; }
                    if (ThoiDiemChiDinhTu === void 0) { ThoiDiemChiDinhTu = null; }
                    if (ThoiDiemChiDinhDen === void 0) { ThoiDiemChiDinhDen = null; }
                    this.LinhTuKhoId = LinhTuKhoId;
                    this.LinhVeKhoId = LinhVeKhoId;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
                    this.IsCreate = IsCreate;
                    this.TrangThai = TrangThai;
                    this.ThoiDiemChiDinhTuFormat = ThoiDiemChiDinhTuFormat;
                    this.ThoiDiemChiDinhDenFormat = ThoiDiemChiDinhDenFormat;
                    this.ThoiDiemChiDinhTu = ThoiDiemChiDinhTu;
                    this.ThoiDiemChiDinhDen = ThoiDiemChiDinhDen;
                }
                return YeuCauLinhBuDuocPhamSearch;
            }());
            var YeuCauLinhBuDuocPham = /** @class */ (function () {
                function YeuCauLinhBuDuocPham(Id, KhoXuatId, KhoNhapId, LoaiPhieuLinh, NhanVienYeuCauId, NgayYeuCau, GhiChu, TenKhoXuat, TenKhoNhap, NhanVienDuyetId, HoTenNguoiDuyet, TenNhanVienDuyet, TenNhanVienYeuCau, NgayDuyet, DuocDuyet, DaGui, LyDoKhongDuyet, HoTenNguoiYeuCau, IsDisable, IsDisableGui, IsDisableInPhieu, LastModified, LaNguoiTaoPhieu, ThoiDiemChiDinhTu, ThoiDiemChiDinhDen, YeuCauLinhDuocPhamChiTiets, YeuCauDuocPhamBenhViens) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (TenKhoNhap === void 0) { TenKhoNhap = null; }
                    if (NhanVienDuyetId === void 0) { NhanVienDuyetId = null; }
                    if (HoTenNguoiDuyet === void 0) { HoTenNguoiDuyet = null; }
                    if (TenNhanVienDuyet === void 0) { TenNhanVienDuyet = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = null; }
                    if (DaGui === void 0) { DaGui = false; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (HoTenNguoiYeuCau === void 0) { HoTenNguoiYeuCau = null; }
                    if (IsDisable === void 0) { IsDisable = null; }
                    if (IsDisableGui === void 0) { IsDisableGui = null; }
                    if (IsDisableInPhieu === void 0) { IsDisableInPhieu = null; }
                    if (LastModified === void 0) { LastModified = null; }
                    if (LaNguoiTaoPhieu === void 0) { LaNguoiTaoPhieu = null; }
                    if (ThoiDiemChiDinhTu === void 0) { ThoiDiemChiDinhTu = null; }
                    if (ThoiDiemChiDinhDen === void 0) { ThoiDiemChiDinhDen = null; }
                    if (YeuCauLinhDuocPhamChiTiets === void 0) { YeuCauLinhDuocPhamChiTiets = []; }
                    if (YeuCauDuocPhamBenhViens === void 0) { YeuCauDuocPhamBenhViens = []; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.KhoNhapId = KhoNhapId;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.GhiChu = GhiChu;
                    this.TenKhoXuat = TenKhoXuat;
                    this.TenKhoNhap = TenKhoNhap;
                    this.NhanVienDuyetId = NhanVienDuyetId;
                    this.HoTenNguoiDuyet = HoTenNguoiDuyet;
                    this.TenNhanVienDuyet = TenNhanVienDuyet;
                    this.TenNhanVienYeuCau = TenNhanVienYeuCau;
                    this.NgayDuyet = NgayDuyet;
                    this.DuocDuyet = DuocDuyet;
                    this.DaGui = DaGui;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.HoTenNguoiYeuCau = HoTenNguoiYeuCau;
                    this.IsDisable = IsDisable;
                    this.IsDisableGui = IsDisableGui;
                    this.IsDisableInPhieu = IsDisableInPhieu;
                    this.LastModified = LastModified;
                    this.LaNguoiTaoPhieu = LaNguoiTaoPhieu;
                    this.ThoiDiemChiDinhTu = ThoiDiemChiDinhTu;
                    this.ThoiDiemChiDinhDen = ThoiDiemChiDinhDen;
                    this.YeuCauLinhDuocPhamChiTiets = YeuCauLinhDuocPhamChiTiets;
                    this.YeuCauDuocPhamBenhViens = YeuCauDuocPhamBenhViens;
                }
                return YeuCauLinhBuDuocPham;
            }());
            var YeuCauDuocPhamBenhVienViewModel = /** @class */ (function () {
                function YeuCauDuocPhamBenhVienViewModel(Id, YeuCauDuocPhamBenhVienIds, DuocPhamBenhVienId, LaDuocPhamBHYT, KhoLinhTuId, KhoLinhVeId, SoLuongCanBu, SoLuongTon, SoLuongYeuCau, SoLuongDaBu, SLYeuCauLinhThucTe, SLYeuCauLinhThucTeMax, CheckBox) {
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauDuocPhamBenhVienIds === void 0) { YeuCauDuocPhamBenhVienIds = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = 0; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
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
                    this.YeuCauDuocPhamBenhVienIds = YeuCauDuocPhamBenhVienIds;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
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
                return YeuCauDuocPhamBenhVienViewModel;
            }());
            var YeuCauLinhBuDuocPhamChiTiet = /** @class */ (function () {
                function YeuCauLinhBuDuocPhamChiTiet(Id, YeuCauLinhDuocPhamId, DuocPhamBenhVienId, LaDuocPhamBHYT, SoLuong, NgayYeuCau, STT, HamLuong, Ten, HoatChat, DuongDungId, DuongDung, DVTId, DVT, NhaSX, NuocSX, SLYeuCau, SLCanBu, SLYeuCauLinhThucTe, LoaiDuocPham, SLTon, Nhom, LaBHYT, YeuCauDuocPhamBenhVienIds) {
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (STT === void 0) { STT = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (HoatChat === void 0) { HoatChat = null; }
                    if (DuongDungId === void 0) { DuongDungId = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (DVTId === void 0) { DVTId = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SLYeuCau === void 0) { SLYeuCau = null; }
                    if (SLCanBu === void 0) { SLCanBu = null; }
                    if (SLYeuCauLinhThucTe === void 0) { SLYeuCauLinhThucTe = null; }
                    if (LoaiDuocPham === void 0) { LoaiDuocPham = null; }
                    if (SLTon === void 0) { SLTon = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (LaBHYT === void 0) { LaBHYT = null; }
                    if (YeuCauDuocPhamBenhVienIds === void 0) { YeuCauDuocPhamBenhVienIds = null; }
                    this.Id = Id;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.LaDuocPhamBHYT = LaDuocPhamBHYT;
                    this.SoLuong = SoLuong;
                    this.NgayYeuCau = NgayYeuCau;
                    this.STT = STT;
                    this.HamLuong = HamLuong;
                    this.Ten = Ten;
                    this.HoatChat = HoatChat;
                    this.DuongDungId = DuongDungId;
                    this.DuongDung = DuongDung;
                    this.DVTId = DVTId;
                    this.DVT = DVT;
                    this.NhaSX = NhaSX;
                    this.NuocSX = NuocSX;
                    this.SLYeuCau = SLYeuCau;
                    this.SLCanBu = SLCanBu;
                    this.SLYeuCauLinhThucTe = SLYeuCauLinhThucTe;
                    this.LoaiDuocPham = LoaiDuocPham;
                    this.SLTon = SLTon;
                    this.Nhom = Nhom;
                    this.LaBHYT = LaBHYT;
                    this.YeuCauDuocPhamBenhVienIds = YeuCauDuocPhamBenhVienIds;
                }
                return YeuCauLinhBuDuocPhamChiTiet;
            }());
            var KhoLinhTu = /** @class */ (function () {
                function KhoLinhTu(KeyId, DisplayName, YeuCauDuocPhamBenhVienIds) {
                    if (KeyId === void 0) { KeyId = null; }
                    if (DisplayName === void 0) { DisplayName = ""; }
                    if (YeuCauDuocPhamBenhVienIds === void 0) { YeuCauDuocPhamBenhVienIds = []; }
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                    this.YeuCauDuocPhamBenhVienIds = YeuCauDuocPhamBenhVienIds;
                }
                return KhoLinhTu;
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
            var LinhTrucTiepDuocPham = /** @class */ (function () {
                function LinhTrucTiepDuocPham(Id, STT, HamLuong, Ten, HoatChat, DuongDung, DVT, NhaSX, NuocSX, SLYeuCau, SoLuong, Nhom, DuocPhamBenhVienId, YeuCauTiepNhanId, CheckKhiTao, YeuCauLinhDuocPhamChiTiets, YeuCauDuocPhamBenhViensTT, YeuCauDuocPhamBenhIds, DanhSachDuocPhamTonKhongDus, ThoiDiemLinhTongHopTuNgay, ThoiDiemLinhTongHopDenNgay, Goi) {
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
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = 0; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = 0; }
                    if (CheckKhiTao === void 0) { CheckKhiTao = []; }
                    if (YeuCauLinhDuocPhamChiTiets === void 0) { YeuCauLinhDuocPhamChiTiets = []; }
                    if (YeuCauDuocPhamBenhViensTT === void 0) { YeuCauDuocPhamBenhViensTT = []; }
                    if (YeuCauDuocPhamBenhIds === void 0) { YeuCauDuocPhamBenhIds = []; }
                    if (DanhSachDuocPhamTonKhongDus === void 0) { DanhSachDuocPhamTonKhongDus = []; }
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
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.CheckKhiTao = CheckKhiTao;
                    this.YeuCauLinhDuocPhamChiTiets = YeuCauLinhDuocPhamChiTiets;
                    this.YeuCauDuocPhamBenhViensTT = YeuCauDuocPhamBenhViensTT;
                    this.YeuCauDuocPhamBenhIds = YeuCauDuocPhamBenhIds;
                    this.DanhSachDuocPhamTonKhongDus = DanhSachDuocPhamTonKhongDus;
                    this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
                    this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
                    this.Goi = Goi;
                }
                return LinhTrucTiepDuocPham;
            }());
            var LinhDuocPhamTrucTiep = /** @class */ (function () {
                function LinhDuocPhamTrucTiep(Id, KhoXuatId, KhoNhapId, LoaiPhieuLinh, NhanVienYeuCauId, NgayYeuCau, GhiChu, HoTenNguoiYeuCau, NgayDuyet, NguoiDuyet, LyDoKhongDuyet, YeuCauLinhDuocPhamChiTiets, YeuCauDuocPhamBenhViensTT, YeuCauDuocPhamBenhIds, CheckKhiTao, TenKhoXuat, DanhSachDuocPhamTonKhongDus, ThoiDiemLinhTongHopTuNgay, ThoiDiemLinhTongHopDenNgay, YeuCauLinhDuocPhamId) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (HoTenNguoiYeuCau === void 0) { HoTenNguoiYeuCau = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (LyDoKhongDuyet === void 0) { LyDoKhongDuyet = null; }
                    if (YeuCauLinhDuocPhamChiTiets === void 0) { YeuCauLinhDuocPhamChiTiets = []; }
                    if (YeuCauDuocPhamBenhViensTT === void 0) { YeuCauDuocPhamBenhViensTT = []; }
                    if (YeuCauDuocPhamBenhIds === void 0) { YeuCauDuocPhamBenhIds = []; }
                    if (CheckKhiTao === void 0) { CheckKhiTao = []; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    if (DanhSachDuocPhamTonKhongDus === void 0) { DanhSachDuocPhamTonKhongDus = []; }
                    if (ThoiDiemLinhTongHopTuNgay === void 0) { ThoiDiemLinhTongHopTuNgay = null; }
                    if (ThoiDiemLinhTongHopDenNgay === void 0) { ThoiDiemLinhTongHopDenNgay = null; }
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.KhoNhapId = KhoNhapId;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.GhiChu = GhiChu;
                    this.HoTenNguoiYeuCau = HoTenNguoiYeuCau;
                    this.NgayDuyet = NgayDuyet;
                    this.NguoiDuyet = NguoiDuyet;
                    this.LyDoKhongDuyet = LyDoKhongDuyet;
                    this.YeuCauLinhDuocPhamChiTiets = YeuCauLinhDuocPhamChiTiets;
                    this.YeuCauDuocPhamBenhViensTT = YeuCauDuocPhamBenhViensTT;
                    this.YeuCauDuocPhamBenhIds = YeuCauDuocPhamBenhIds;
                    this.CheckKhiTao = CheckKhiTao;
                    this.TenKhoXuat = TenKhoXuat;
                    this.DanhSachDuocPhamTonKhongDus = DanhSachDuocPhamTonKhongDus;
                    this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
                    this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                }
                return LinhDuocPhamTrucTiep;
            }());
            var ListIds = /** @class */ (function () {
                function ListIds(Id) {
                    if (Id === void 0) { Id = 0; }
                    this.Id = Id;
                }
                return ListIds;
            }());
            var LinhDuocPhamTrucTiepViewModel = /** @class */ (function () {
                function LinhDuocPhamTrucTiepViewModel(Id, KhoXuatId, KhoNhapId, LoaiPhieuLinh, NhanVienYeuCauId, NgayYeuCau, GhiChu, HoTenNguoiYeuCau, NgayDuyet, NguoiDuyet, TenKhoXuat) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoXuatId === void 0) { KhoXuatId = null; }
                    if (KhoNhapId === void 0) { KhoNhapId = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (HoTenNguoiYeuCau === void 0) { HoTenNguoiYeuCau = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = null; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (TenKhoXuat === void 0) { TenKhoXuat = null; }
                    this.Id = Id;
                    this.KhoXuatId = KhoXuatId;
                    this.KhoNhapId = KhoNhapId;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.NhanVienYeuCauId = NhanVienYeuCauId;
                    this.NgayYeuCau = NgayYeuCau;
                    this.GhiChu = GhiChu;
                    this.HoTenNguoiYeuCau = HoTenNguoiYeuCau;
                    this.NgayDuyet = NgayDuyet;
                    this.NguoiDuyet = NguoiDuyet;
                    this.TenKhoXuat = TenKhoXuat;
                }
                return LinhDuocPhamTrucTiepViewModel;
            }());
            var PhieuLinhThuocTrucTiep = /** @class */ (function () {
                function PhieuLinhThuocTrucTiep(YeuCauLinhDuocPhamId, Hosting, Header, LoaiPhieuLinh, TrangThaiIn) {
                    if (YeuCauLinhDuocPhamId === void 0) { YeuCauLinhDuocPhamId = 0; }
                    if (Hosting === void 0) { Hosting = null; }
                    if (Header === void 0) { Header = null; }
                    if (LoaiPhieuLinh === void 0) { LoaiPhieuLinh = null; }
                    if (TrangThaiIn === void 0) { TrangThaiIn = null; }
                    this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
                    this.Hosting = Hosting;
                    this.Header = Header;
                    this.LoaiPhieuLinh = LoaiPhieuLinh;
                    this.TrangThaiIn = TrangThaiIn;
                }
                return PhieuLinhThuocTrucTiep;
            }());
            var XemTruocPhieuLinhThuocTrucTiep = /** @class */ (function () {
                function XemTruocPhieuLinhThuocTrucTiep(Hosting, YeuCauDuocPhamBenhVienIds, KhoLinhId, ThoiDiemLinhTongHopTuNgay, ThoiDiemLinhTongHopDenNgay) {
                    if (Hosting === void 0) { Hosting = null; }
                    if (YeuCauDuocPhamBenhVienIds === void 0) { YeuCauDuocPhamBenhVienIds = []; }
                    if (KhoLinhId === void 0) { KhoLinhId = 0; }
                    if (ThoiDiemLinhTongHopTuNgay === void 0) { ThoiDiemLinhTongHopTuNgay = null; }
                    if (ThoiDiemLinhTongHopDenNgay === void 0) { ThoiDiemLinhTongHopDenNgay = null; }
                    this.Hosting = Hosting;
                    this.YeuCauDuocPhamBenhVienIds = YeuCauDuocPhamBenhVienIds;
                    this.KhoLinhId = KhoLinhId;
                    this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
                    this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
                }
                return XemTruocPhieuLinhThuocTrucTiep;
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
            var DuocPhamCanBuSearch = /** @class */ (function () {
                function DuocPhamCanBuSearch(KhoLinhId, KhoBuId) {
                    if (KhoLinhId === void 0) { KhoLinhId = null; }
                    if (KhoBuId === void 0) { KhoBuId = null; }
                    this.KhoLinhId = KhoLinhId;
                    this.KhoBuId = KhoBuId;
                }
                return DuocPhamCanBuSearch;
            }());
            var DuocPhamCanLinhTrucTiepSearch = /** @class */ (function () {
                function DuocPhamCanLinhTrucTiepSearch(KhoLinhId, PhongLinhVeId) {
                    if (KhoLinhId === void 0) { KhoLinhId = null; }
                    if (PhongLinhVeId === void 0) { PhongLinhVeId = null; }
                    this.KhoLinhId = KhoLinhId;
                    this.PhongLinhVeId = PhongLinhVeId;
                }
                return DuocPhamCanLinhTrucTiepSearch;
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
            var SearchDanhSachThongDuocPham = /** @class */ (function () {
                function SearchDanhSachThongDuocPham(TuNgay, DenNgay) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return SearchDanhSachThongDuocPham;
            }());
            var QueryInfoQueryInfo = /** @class */ (function () {
                function QueryInfoQueryInfo(Skip, Take, PageSize, SearchString, AdditionalSearchString, 
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
                return QueryInfoQueryInfo;
            }());
            var DuocPhamKhongTheTao = /** @class */ (function () {
                function DuocPhamKhongTheTao(TenDuocPham, SoLuongTon, SoLuongYeuCau, SearchString, AdditionalSearchString, 
                // public searchTerms: string = "",
                Sort) {
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongYeuCau === void 0) { SoLuongYeuCau = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.TenDuocPham = TenDuocPham;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongYeuCau = SoLuongYeuCau;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return DuocPhamKhongTheTao;
            }());
            var DuocPhamTonKhoKhongDu = /** @class */ (function () {
                function DuocPhamTonKhoKhongDu(TenDuocPham, DuocPhamId, SoLuongTon, SoLuongYeuCau) {
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (DuocPhamId === void 0) { DuocPhamId = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongYeuCau === void 0) { SoLuongYeuCau = null; }
                    this.TenDuocPham = TenDuocPham;
                    this.DuocPhamId = DuocPhamId;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuongYeuCau = SoLuongYeuCau;
                }
                return DuocPhamTonKhoKhongDu;
            }());
            var ChangeDuocPhamBenhVienOrXetNghiem;
            (function (ChangeDuocPhamBenhVienOrXetNghiem) {
                ChangeDuocPhamBenhVienOrXetNghiem[ChangeDuocPhamBenhVienOrXetNghiem["DuocPhamBenhVien"] = 1] = "DuocPhamBenhVien";
                ChangeDuocPhamBenhVienOrXetNghiem[ChangeDuocPhamBenhVienOrXetNghiem["XetNghiem"] = 2] = "XetNghiem";
            })(ChangeDuocPhamBenhVienOrXetNghiem || (ChangeDuocPhamBenhVienOrXetNghiem = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-danh-sach-duoc-pham-can-bu-danh-sach-duoc-pham-can-bu~8f94e0a6-es2015.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-danh-sach-duoc-pham-can-bu-danh-sach-duoc-pham-can-bu~8f94e0a6-es5.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-danh-sach-duoc-pham-can-bu-danh-sach-duoc-pham-can-bu~8f94e0a6-es5.js.map