(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-kiem-soat-nhiem-khuan-yeu-cau-linh-ksnk-danh-sach-ksnk-can-bu-danh-sach-ksnk-can-b~c9a13756"],{

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/yeu-cau-linh-ksnk/yeu-cau-linh-ksnk.model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: SearchNgay, rangeDate, TrangThaiTaoPhieuLinh, YeuCauLinhKSNK, YeuCauKSNKBenhVienViewModel, YeuCauLinhKSNKChiTiet, KSNKGridViewModelValidator, PhieuLinhKSNKThuong, KSNKCanBuSearch, KSNKCanLinhTrucTiepSearch, LinhKSNKTrucTiep, ListIds, LinhTrucTiepKSNK, KhoId, KhoLinhTu, ThongTinLinhTuKho, TrangThaiDuyetYeuCauLinh, DaDuyet, PhieuLinhKSNKTrucTiep, XemTruocPhieuLinhKSNKTrucTiep, ExportQueryInfoQueryInfo, LinhKSNKGridVo, SearchDanhSachThongKSNK, KSNKTonKhoKhongDu, YeuCauLinhBuKSNKSearch, PhieuLinhKSNKThuongs, InFoPhieuLinh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNgay", function() { return SearchNgay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiTaoPhieuLinh", function() { return TrangThaiTaoPhieuLinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhKSNK", function() { return YeuCauLinhKSNK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauKSNKBenhVienViewModel", function() { return YeuCauKSNKBenhVienViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhKSNKChiTiet", function() { return YeuCauLinhKSNKChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSNKGridViewModelValidator", function() { return KSNKGridViewModelValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKThuong", function() { return PhieuLinhKSNKThuong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSNKCanBuSearch", function() { return KSNKCanBuSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSNKCanLinhTrucTiepSearch", function() { return KSNKCanLinhTrucTiepSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhKSNKTrucTiep", function() { return LinhKSNKTrucTiep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIds", function() { return ListIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhTrucTiepKSNK", function() { return LinhTrucTiepKSNK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoId", function() { return KhoId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoLinhTu", function() { return KhoLinhTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLinhTuKho", function() { return ThongTinLinhTuKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyetYeuCauLinh", function() { return TrangThaiDuyetYeuCauLinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaDuyet", function() { return DaDuyet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKTrucTiep", function() { return PhieuLinhKSNKTrucTiep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocPhieuLinhKSNKTrucTiep", function() { return XemTruocPhieuLinhKSNKTrucTiep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinhKSNKGridVo", function() { return LinhKSNKGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDanhSachThongKSNK", function() { return SearchDanhSachThongKSNK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSNKTonKhoKhongDu", function() { return KSNKTonKhoKhongDu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauLinhBuKSNKSearch", function() { return YeuCauLinhBuKSNKSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuLinhKSNKThuongs", function() { return PhieuLinhKSNKThuongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InFoPhieuLinh", function() { return InFoPhieuLinh; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SearchNgay {
    constructor(NgayYeuCauRangDate = new rangeDate, NgayDuyetRangDate = new rangeDate, TrangThaiCheck = 4) {
        this.NgayYeuCauRangDate = NgayYeuCauRangDate;
        this.NgayDuyetRangDate = NgayDuyetRangDate;
        this.TrangThaiCheck = TrangThaiCheck;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class TrangThaiTaoPhieuLinh {
    constructor(TrangThai = null, Ten = null, EnumTrangThaiPhieuLinh = null) {
        this.TrangThai = TrangThai;
        this.Ten = Ten;
        this.EnumTrangThaiPhieuLinh = EnumTrangThaiPhieuLinh;
    }
}
class YeuCauLinhKSNK {
    constructor(Id = 0, KhoXuatId = null, TenKhoXuat = null, KhoNhapId = null, TenKhoNhap = null, LoaiPhieuLinh = null, NhanVienYeuCauId = null, HoTenNguoiYeuCau = null, NgayYeuCau = null, NhanVienDuyetId = null, HoTenNguoiDuyet = null, NgayDuyet = null, GhiChu = null, DuocDuyet = null, LyDoKhongDuyet = null, TenNhanVienDuyet = null, TenNhanVienYeuCau = null, IsLuu = false, LaNguoiTaoPhieu = null, LastModified = null, DaGui = false, ThoiDiemChiDinhTu = null, ThoiDiemChiDinhDen = null, YeuCauLinhVatTuChiTiets = [], YeuCauVatTuBenhViens = []) {
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
}
class YeuCauKSNKBenhVienViewModel {
    constructor(Id = 0, YeuCauVatTuBenhVienIds = null, VatTuBenhVienId = 0, LaVatTuBHYT = null, KhoLinhTuId = null, KhoLinhVeId = null, SoLuongCanBu = null, SoLuongTon = null, SoLuongYeuCau = null, SoLuongDaBu = null, SLYeuCauLinhThucTe = null, SLYeuCauLinhThucTeMax = null, CheckBox = false, LoaiDuocPhamHayVatTu = false) {
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
        this.LoaiDuocPhamHayVatTu = LoaiDuocPhamHayVatTu;
    }
}
class YeuCauLinhKSNKChiTiet {
    constructor(STT = null, Id = 0, YeuCauLinhVatTuId = null, VatTuBenhVienId = null, LaVatTuBHYT = null, SoLuong = null, NgayYeuCau = null, Ma = null, Ten = null, DVT = null, NhaSX = null, NuocSX = null, SLYeuCau = null, SoLuongCoTheXuat = null, LoaiVatTu = null, SLTon = null, SLCanBu = null, Nhom = null, VatTuBenhViens = [], DuocDuyet = null, KhoXuatId = null, IsValidator = null, LoaiDuocPhamHayVatTu = null, TenKhoLinh = null) {
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
        this.LoaiDuocPhamHayVatTu = LoaiDuocPhamHayVatTu;
        this.TenKhoLinh = TenKhoLinh;
    }
}
class KSNKGridViewModelValidator {
    constructor(VatTuBenhVienId = 0, LaVatTuBHYT = null) {
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.LaVatTuBHYT = LaVatTuBHYT;
    }
}
class PhieuLinhKSNKThuong {
    constructor(YeuCauLinhVatTuId = 0, HostingName = null, Header = null, LoaiPhieuLinh = null, TrangThai = null) {
        this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.LoaiPhieuLinh = LoaiPhieuLinh;
        this.TrangThai = TrangThai;
    }
}
class KSNKCanBuSearch {
    constructor(KhoLinhId = null, KhoBuId = null) {
        this.KhoLinhId = KhoLinhId;
        this.KhoBuId = KhoBuId;
    }
}
class KSNKCanLinhTrucTiepSearch {
    constructor(KhoLinhId = null, PhongLinhVeId = null) {
        this.KhoLinhId = KhoLinhId;
        this.PhongLinhVeId = PhongLinhVeId;
    }
}
class LinhKSNKTrucTiep {
    constructor(Id = 0, KhoXuatId = null, TenKhoXuat = null, KhoNhapId = null, LoaiPhieuLinh = null, NhanVienYeuCauId = null, NgayYeuCau = null, NguoiDuyet = null, NgayDuyet = null, LyDoKhongDuyet = null, GhiChu = null, 
    // public ThongTinLinhTuKhoObject: ThongTinLinhTuKho = null,
    YeuCauLinhVatTuChiTiets = [], YeuCauVatTuBenhViensTT = [], YeuCauVatTuBenhVienIds = [], CheckKhiTao = [], DanhSachVatTuTonKhongDus = [], ThoiDiemLinhTongHopTuNgay = null, ThoiDiemLinhTongHopDenNgay = null, YeuCauLinhVatTuId = null) {
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
}
class ListIds {
    constructor(Id = 0) {
        this.Id = Id;
    }
}
class LinhTrucTiepKSNK {
    constructor(Id = 0, STT = null, HamLuong = null, Ten = null, HoatChat = null, DuongDung = null, DVT = null, NhaSX = null, NuocSX = null, SLYeuCau = null, SoLuong = null, Nhom = null, VatTuBenhVienId = 0, CheckKhiTao = [], YeuCauLinhVatTuChiTiets = [], YeuCauVatTuBenhViensTT = [], YeuCauVatTuBenhVienIds = [], YeuCauTiepNhanId = 0, DanhSachVatTuTonKhongDus = [], ThoiDiemLinhTongHopTuNgay = null, ThoiDiemLinhTongHopDenNgay = null, Goi = null) {
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
}
class KhoId {
    constructor(Id = 0, YeuCauTiepNhanId = 0) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
    }
}
class KhoLinhTu {
    constructor(KeyId = null, DisplayName = "", YeuCauVatTuBenhVienIds = []) {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
        this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
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
class PhieuLinhKSNKTrucTiep {
    constructor(YeuCauLinhVatTuId = 0, Hosting = null, Header = null, TrangThaiIn = null) {
        this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
        this.Hosting = Hosting;
        this.Header = Header;
        this.TrangThaiIn = TrangThaiIn;
    }
}
class XemTruocPhieuLinhKSNKTrucTiep {
    constructor(Hosting = null, YeuCauVatTuBenhVienIds = [], KhoLinhId = 0, ThoiDiemLinhTongHopTuNgay = null, ThoiDiemLinhTongHopDenNgay = null) {
        this.Hosting = Hosting;
        this.YeuCauVatTuBenhVienIds = YeuCauVatTuBenhVienIds;
        this.KhoLinhId = KhoLinhId;
        this.ThoiDiemLinhTongHopTuNgay = ThoiDiemLinhTongHopTuNgay;
        this.ThoiDiemLinhTongHopDenNgay = ThoiDiemLinhTongHopDenNgay;
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
class LinhKSNKGridVo {
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
class SearchDanhSachThongKSNK {
    constructor(TuNgay = null, DenNgay = null) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class KSNKTonKhoKhongDu {
    constructor(TenVatTu = null, VatTuId = null, SoLuongTon = null, SoLuongYeuCau = null) {
        this.TenVatTu = TenVatTu;
        this.VatTuId = VatTuId;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongYeuCau = SoLuongYeuCau;
    }
}
class YeuCauLinhBuKSNKSearch {
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
class PhieuLinhKSNKThuongs {
    constructor(YeuCauLinhVatTuIds = [], HostingName = null, Header = null, LoaiPhieuLinh = null, TrangThai = null) {
        this.YeuCauLinhVatTuIds = YeuCauLinhVatTuIds;
        this.HostingName = HostingName;
        this.Header = Header;
        this.LoaiPhieuLinh = LoaiPhieuLinh;
        this.TrangThai = TrangThai;
    }
}
class InFoPhieuLinh {
    constructor(YeuCauLinhVatTuId = null, LoaiDuocPhamHayVatTu = null) {
        this.YeuCauLinhVatTuId = YeuCauLinhVatTuId;
        this.LoaiDuocPhamHayVatTu = LoaiDuocPhamHayVatTu;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~nhap-xuat-kiem-soat-nhiem-khuan-yeu-cau-linh-ksnk-danh-sach-ksnk-can-bu-danh-sach-ksnk-can-b~c9a13756-es2015.js.map