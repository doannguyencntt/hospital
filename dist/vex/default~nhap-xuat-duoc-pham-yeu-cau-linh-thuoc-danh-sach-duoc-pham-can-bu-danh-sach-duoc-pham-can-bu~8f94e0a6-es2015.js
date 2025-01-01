(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-danh-sach-duoc-pham-can-bu-danh-sach-duoc-pham-can-bu~8f94e0a6"],{

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-linh-thuoc/yeu-cau-linh-thuoc.model.ts ***!
  \*************************************************************************************************/
/*! exports provided: rangeDate, SearchNgay, YeuCauLinhDuocPham, YeuCauLinhDuocPhamChiTiet, DuocPhamGridViewModelValidator, NhapKhoDuocPham, XuatKhoDuocPham, DuocPhamGridViewModel, PhieuLinhThuocThuong, YeuCauLinhBuDuocPhamSearch, YeuCauLinhBuDuocPham, YeuCauDuocPhamBenhVienViewModel, YeuCauLinhBuDuocPhamChiTiet, KhoLinhTu, KhoId, ThongTinLinhTuKho, LinhTrucTiepDuocPham, LinhDuocPhamTrucTiep, ListIds, LinhDuocPhamTrucTiepViewModel, PhieuLinhThuocTrucTiep, XemTruocPhieuLinhThuocTrucTiep, TrangThaiDuyetYeuCauLinh, DaDuyet, ExportQueryInfoQueryInfo, DuocPhamCanBuSearch, DuocPhamCanLinhTrucTiepSearch, LinhVatTuGridVo, SearchDanhSachThongDuocPham, QueryInfoQueryInfo, DuocPhamKhongTheTao, DuocPhamTonKhoKhongDu, ChangeDuocPhamBenhVienOrXetNghiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNgay", function() { return SearchNgay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhDuocPham", function() { return YeuCauLinhDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhDuocPhamChiTiet", function() { return YeuCauLinhDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamGridViewModelValidator", function() { return DuocPhamGridViewModelValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPham", function() { return NhapKhoDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPham", function() { return XuatKhoDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamGridViewModel", function() { return DuocPhamGridViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocThuong", function() { return PhieuLinhThuocThuong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuDuocPhamSearch", function() { return YeuCauLinhBuDuocPhamSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuDuocPham", function() { return YeuCauLinhBuDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDuocPhamBenhVienViewModel", function() { return YeuCauDuocPhamBenhVienViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuDuocPhamChiTiet", function() { return YeuCauLinhBuDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoLinhTu", function() { return KhoLinhTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoId", function() { return KhoId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLinhTuKho", function() { return ThongTinLinhTuKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhTrucTiepDuocPham", function() { return LinhTrucTiepDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhDuocPhamTrucTiep", function() { return LinhDuocPhamTrucTiep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIds", function() { return ListIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhDuocPhamTrucTiepViewModel", function() { return LinhDuocPhamTrucTiepViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhThuocTrucTiep", function() { return PhieuLinhThuocTrucTiep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocPhieuLinhThuocTrucTiep", function() { return XemTruocPhieuLinhThuocTrucTiep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetYeuCauLinh", function() { return TrangThaiDuyetYeuCauLinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaDuyet", function() { return DaDuyet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamCanBuSearch", function() { return DuocPhamCanBuSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamCanLinhTrucTiepSearch", function() { return DuocPhamCanLinhTrucTiepSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhVatTuGridVo", function() { return LinhVatTuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDanhSachThongDuocPham", function() { return SearchDanhSachThongDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfoQueryInfo", function() { return QueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamKhongTheTao", function() { return DuocPhamKhongTheTao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamTonKhoKhongDu", function() { return DuocPhamTonKhoKhongDu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDuocPhamBenhVienOrXetNghiem", function() { return ChangeDuocPhamBenhVienOrXetNghiem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class SearchNgay {
    constructor(NgayYeuCauRangDate = new rangeDate, NgayDuyetRangDate = new rangeDate, DangChoGoi = true, DangChoDuyet = true, TuChoiDuyet = true, DaDuyet = true) {
        this.NgayYeuCauRangDate = NgayYeuCauRangDate;
        this.NgayDuyetRangDate = NgayDuyetRangDate;
        this.DangChoGoi = DangChoGoi;
        this.DangChoDuyet = DangChoDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.DaDuyet = DaDuyet;
    }
}
class YeuCauLinhDuocPham {
    constructor(Id = 0, KhoXuatId = null, TenKhoXuat = null, KhoNhapId = null, TenKhoNhap = null, LoaiPhieuLinh = null, NhanVienYeuCauId = null, HoTenNguoiYeuCau = null, NgayYeuCau = null, NhanVienDuyetId = null, HoTenNguoiDuyet = null, NgayDuyet = null, GhiChu = null, DuocDuyet = null, LyDoKhongDuyet = null, DaGui = false, IsDisable = null, IsDisableGui = null, IsLuu = false, LaNguoiTaoPhieu = null, LastModified = null, YeuCauLinhDuocPhamChiTiets = [], YeuCauDuocPhamBenhViens = []) {
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
}
class YeuCauLinhDuocPhamChiTiet {
    constructor(STT = null, Id = 0, YeuCauLinhDuocPhamId = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, SoLuong = null, NgayYeuCau = null, HamLuong = null, Ten = null, HoatChat = null, DuongDungId = null, DuongDung = null, DVTId = null, DVT = null, NhaSX = null, NuocSX = null, SLYeuCau = null, SoLuongCoTheXuat = null, LoaiDuocPham = null, SLTon = null, Nhom = null, DuocPhamBenhViens = [], DuocDuyet = null, KhoXuatId = 0, IsValidator = null, MayXetNghiemTenVaIds = null, DanhSachMayXetNghiemId = null, DanhSachTenMayXetNghiem = null) {
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
}
class DuocPhamGridViewModelValidator {
    constructor(DuocPhamBenhVienId = 0, LaDuocPhamBHYT = null) {
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
    }
}
class NhapKhoDuocPham {
    constructor(Id = null, YeuCauNhapKhoDuocPhamId = null, KhoId = null, YeuCauLinhDuocPhamId = null, SoChungTu = null, XuatKhoDuocPhamId = null, TenNguoiGiao = null, NguoiGiaoId = null, NguoiNhapId = null, DaHet = null, LoaiNguoiGiao = null, NgayNhap = null) {
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
}
class XuatKhoDuocPham {
    constructor(Id = null, KhoXuatId = null, KhoNhapId = null, YeuCauLinhDuocPhamId = null, SoPhieu = null, LoaiXuatKho = null, LyDoXuatKho = null, TenNguoiNhan = null, NguoiNhanId = null, NguoiXuatId = null, LoaiNguoiNhan = null, NgayXuat = null) {
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
}
class DuocPhamGridViewModel {
    constructor(STT = null, DuocPhamBenhVienId = 0, YeuCauLinhDuocPhamId = null, HamLuong = null, Ten = null, HoatChat = null, DuongDungId = null, DuongDung = null, DVTId = null, DVT = null, NhaSX = null, NuocSX = null, SLYeuCau = null, LoaiDuocPham = null, SLTon = null, Nhom = null) {
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
}
class PhieuLinhThuocThuong {
    constructor(YeuCauLinhDuocPhamId = 0, HostingName = null, Header = null, LoaiPhieuLinh = null, TrangThai = null) {
        this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.LoaiPhieuLinh = LoaiPhieuLinh;
        this.TrangThai = TrangThai;
    }
}
class YeuCauLinhBuDuocPhamSearch {
    constructor(LinhTuKhoId = null, LinhVeKhoId = null, YeuCauLinhDuocPhamId = null, YeuCauLinhVatTuId = null, IsCreate = null, TrangThai = null, ThoiDiemChiDinhTuFormat = null, ThoiDiemChiDinhDenFormat = null, ThoiDiemChiDinhTu = null, ThoiDiemChiDinhDen = null) {
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
}
class YeuCauLinhBuDuocPham {
    constructor(Id = 0, KhoXuatId = null, KhoNhapId = null, LoaiPhieuLinh = null, NhanVienYeuCauId = null, NgayYeuCau = null, GhiChu = null, TenKhoXuat = null, TenKhoNhap = null, NhanVienDuyetId = null, HoTenNguoiDuyet = null, TenNhanVienDuyet = null, TenNhanVienYeuCau = null, NgayDuyet = null, DuocDuyet = null, DaGui = false, LyDoKhongDuyet = null, HoTenNguoiYeuCau = null, IsDisable = null, IsDisableGui = null, IsDisableInPhieu = null, LastModified = null, LaNguoiTaoPhieu = null, ThoiDiemChiDinhTu = null, ThoiDiemChiDinhDen = null, YeuCauLinhDuocPhamChiTiets = [], YeuCauDuocPhamBenhViens = []) {
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
}
class YeuCauDuocPhamBenhVienViewModel {
    constructor(Id = 0, YeuCauDuocPhamBenhVienIds = null, DuocPhamBenhVienId = 0, LaDuocPhamBHYT = null, KhoLinhTuId = null, KhoLinhVeId = null, SoLuongCanBu = null, SoLuongTon = null, SoLuongYeuCau = null, SoLuongDaBu = null, SLYeuCauLinhThucTe = null, SLYeuCauLinhThucTeMax = null, CheckBox = false) {
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
}
class YeuCauLinhBuDuocPhamChiTiet {
    constructor(Id = 0, YeuCauLinhDuocPhamId = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, SoLuong = null, NgayYeuCau = null, STT = null, HamLuong = null, Ten = null, HoatChat = null, DuongDungId = null, DuongDung = null, DVTId = null, DVT = null, NhaSX = null, NuocSX = null, SLYeuCau = null, SLCanBu = null, SLYeuCauLinhThucTe = null, LoaiDuocPham = null, SLTon = null, Nhom = null, LaBHYT = null, YeuCauDuocPhamBenhVienIds = null) {
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
}
class KhoLinhTu {
    constructor(KeyId = null, DisplayName = "", YeuCauDuocPhamBenhVienIds = []) {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
        this.YeuCauDuocPhamBenhVienIds = YeuCauDuocPhamBenhVienIds;
    }
}
class KhoId {
    constructor(Id = 0, YeuCauTiepNhanId = 0) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
    }
}
class ThongTinLinhTuKho {
    constructor(LinhVePhong = "", NguoiYeuCau = "", NgayYeuCau = "", GhiChu = "") {
        this.LinhVePhong = LinhVePhong;
        this.NguoiYeuCau = NguoiYeuCau;
        this.NgayYeuCau = NgayYeuCau;
        this.GhiChu = GhiChu;
    }
}
class LinhTrucTiepDuocPham {
    constructor(Id = 0, STT = null, HamLuong = null, Ten = null, HoatChat = null, DuongDung = null, DVT = null, NhaSX = null, NuocSX = null, SLYeuCau = null, SoLuong = null, Nhom = null, DuocPhamBenhVienId = 0, YeuCauTiepNhanId = 0, CheckKhiTao = [], YeuCauLinhDuocPhamChiTiets = [], YeuCauDuocPhamBenhViensTT = [], YeuCauDuocPhamBenhIds = [], DanhSachDuocPhamTonKhongDus = [], ThoiDiemLinhTongHopTuNgay = null, ThoiDiemLinhTongHopDenNgay = null, Goi = null) {
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
}
class LinhDuocPhamTrucTiep {
    constructor(Id = 0, KhoXuatId = null, KhoNhapId = null, LoaiPhieuLinh = null, NhanVienYeuCauId = null, NgayYeuCau = null, GhiChu = null, HoTenNguoiYeuCau = null, NgayDuyet = null, NguoiDuyet = null, LyDoKhongDuyet = null, YeuCauLinhDuocPhamChiTiets = [], YeuCauDuocPhamBenhViensTT = [], YeuCauDuocPhamBenhIds = [], CheckKhiTao = [], TenKhoXuat = null, DanhSachDuocPhamTonKhongDus = [], ThoiDiemLinhTongHopTuNgay = null, ThoiDiemLinhTongHopDenNgay = null, YeuCauLinhDuocPhamId = null) {
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
}
class ListIds {
    constructor(Id = 0) {
        this.Id = Id;
    }
}
class LinhDuocPhamTrucTiepViewModel {
    constructor(Id = 0, KhoXuatId = null, KhoNhapId = null, LoaiPhieuLinh = null, NhanVienYeuCauId = null, NgayYeuCau = null, GhiChu = null, HoTenNguoiYeuCau = null, NgayDuyet = null, NguoiDuyet = null, TenKhoXuat = null) {
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
}
class PhieuLinhThuocTrucTiep {
    constructor(YeuCauLinhDuocPhamId = 0, Hosting = null, Header = null, LoaiPhieuLinh = null, TrangThaiIn = null) {
        this.YeuCauLinhDuocPhamId = YeuCauLinhDuocPhamId;
        this.Hosting = Hosting;
        this.Header = Header;
        this.LoaiPhieuLinh = LoaiPhieuLinh;
        this.TrangThaiIn = TrangThaiIn;
    }
}
class XemTruocPhieuLinhThuocTrucTiep {
    constructor(Hosting = null, YeuCauDuocPhamBenhVienIds = [], KhoLinhId = 0, ThoiDiemLinhTongHopTuNgay = null, ThoiDiemLinhTongHopDenNgay = null) {
        this.Hosting = Hosting;
        this.YeuCauDuocPhamBenhVienIds = YeuCauDuocPhamBenhVienIds;
        this.KhoLinhId = KhoLinhId;
        this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
        this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
    }
}
class TrangThaiDuyetYeuCauLinh {
    constructor(TenTrangThai = null, DuocDuyet = null) {
        this.TenTrangThai = TenTrangThai;
        this.DuocDuyet = DuocDuyet;
    }
}
class DaDuyet {
    constructor(NguoiDuyet = null, NgayDuyet = null) {
        this.NguoiDuyet = NguoiDuyet;
        this.NgayDuyet = NgayDuyet;
    }
}
class ExportQueryInfoQueryInfo {
    constructor(Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class DuocPhamCanBuSearch {
    constructor(KhoLinhId = null, KhoBuId = null) {
        this.KhoLinhId = KhoLinhId;
        this.KhoBuId = KhoBuId;
    }
}
class DuocPhamCanLinhTrucTiepSearch {
    constructor(KhoLinhId = null, PhongLinhVeId = null) {
        this.KhoLinhId = KhoLinhId;
        this.PhongLinhVeId = PhongLinhVeId;
    }
}
class LinhVatTuGridVo {
    constructor(NgayYeuCauRangDateStartDate = null, NgayYeuCauRangDateStartEnd = null, NgayDuyetRangDateStartDate = null, NgayDuyetRangDateStartEnd = null, Searching = null, TrangThaiCheck = null, DangChoGoi = true, DangChoDuyet = true, TuChoiDuyet = null, DaDuyet = null) {
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
}
class SearchDanhSachThongDuocPham {
    constructor(TuNgay = null, DenNgay = null) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class QueryInfoQueryInfo {
    constructor(Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class DuocPhamKhongTheTao {
    constructor(TenDuocPham = null, SoLuongTon = null, SoLuongYeuCau = null, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
        this.TenDuocPham = TenDuocPham;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongYeuCau = SoLuongYeuCau;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class DuocPhamTonKhoKhongDu {
    constructor(TenDuocPham = null, DuocPhamId = null, SoLuongTon = null, SoLuongYeuCau = null) {
        this.TenDuocPham = TenDuocPham;
        this.DuocPhamId = DuocPhamId;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongYeuCau = SoLuongYeuCau;
    }
}
var ChangeDuocPhamBenhVienOrXetNghiem;
(function (ChangeDuocPhamBenhVienOrXetNghiem) {
    ChangeDuocPhamBenhVienOrXetNghiem[ChangeDuocPhamBenhVienOrXetNghiem["DuocPhamBenhVien"] = 1] = "DuocPhamBenhVien";
    ChangeDuocPhamBenhVienOrXetNghiem[ChangeDuocPhamBenhVienOrXetNghiem["XetNghiem"] = 2] = "XetNghiem";
})(ChangeDuocPhamBenhVienOrXetNghiem || (ChangeDuocPhamBenhVienOrXetNghiem = {}));


/***/ })

}]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-yeu-cau-linh-thuoc-danh-sach-duoc-pham-can-bu-danh-sach-duoc-pham-can-bu~8f94e0a6-es2015.js.map