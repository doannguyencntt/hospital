(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~5aa7f9c1"],{

/***/ "./node_modules/@iconify/icons-ic/edit.js":
/*!************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/edit.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts ***!
  \*************************************************************/
/*! exports provided: QuayThuoc, TimBenhNhan, rangeDate, BenhNhanThongTin, ThongTinBenhNhan, SearchInfoNhaThuoc, KhachVangLai, ToaThuocCuTimKiem, danhSachThuoc, ThemDuocPham, XemTruocBangKeThuoc, ThongTinDuocPham, ThongTinDonThuoc, CongNoVo, ConfirmPrint, ServiceId, DanhSachCongNoChoThu, CongNoChoThu, ExportQueryInfoQueryInfo, TinhHuyenTemplateVo, QuayThuocGridVo, ApDungMiemGiamThem, DanhSachMienGiamVo, LoaiChietKhau, LoaiMienGiam, ThongTinHuyPhieu, TrangThaiThuTienBenhNhan, ThongTinSoPhieuDaThu, HuyXuatThuocTrongNgay, NguoiDungKhongMuaDonThuoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuoc", function() { return QuayThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimBenhNhan", function() { return TimBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanThongTin", function() { return BenhNhanThongTin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhan", function() { return ThongTinBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoNhaThuoc", function() { return SearchInfoNhaThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhachVangLai", function() { return KhachVangLai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToaThuocCuTimKiem", function() { return ToaThuocCuTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "danhSachThuoc", function() { return danhSachThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemDuocPham", function() { return ThemDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocBangKeThuoc", function() { return XemTruocBangKeThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDuocPham", function() { return ThongTinDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDonThuoc", function() { return ThongTinDonThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoVo", function() { return CongNoVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPrint", function() { return ConfirmPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceId", function() { return ServiceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachCongNoChoThu", function() { return DanhSachCongNoChoThu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoChoThu", function() { return CongNoChoThu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function() { return ExportQueryInfoQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinhHuyenTemplateVo", function() { return TinhHuyenTemplateVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocGridVo", function() { return QuayThuocGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApDungMiemGiamThem", function() { return ApDungMiemGiamThem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachMienGiamVo", function() { return DanhSachMienGiamVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiChietKhau", function() { return LoaiChietKhau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiMienGiam", function() { return LoaiMienGiam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHuyPhieu", function() { return ThongTinHuyPhieu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiThuTienBenhNhan", function() { return TrangThaiThuTienBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinSoPhieuDaThu", function() { return ThongTinSoPhieuDaThu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuyXuatThuocTrongNgay", function() { return HuyXuatThuocTrongNgay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguoiDungKhongMuaDonThuoc", function() { return NguoiDungKhongMuaDonThuoc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class QuayThuoc {
}
class TimBenhNhan {
    constructor(MaBenhNhan = null, MaTiepNhan = null, HoTen = null, SoDienThoai = null, KiemTraThanhToan = 0, RangeDate = new rangeDate) {
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.SoDienThoai = SoDienThoai;
        this.KiemTraThanhToan = KiemTraThanhToan;
        this.RangeDate = RangeDate;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class BenhNhanThongTin {
    constructor(Id = null, MaBN = null, MaYeuCauTiepNhan = null, HoTen = null, GioiTinh = null, GioiTinhHienThi = null, NamSinh = null, DiaChi = null, DiaChiDayDu = null, SoDienThoai = null, Email = null, SoDuTaiKhoan = 0) {
        this.Id = Id;
        this.MaBN = MaBN;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.HoTen = HoTen;
        this.GioiTinh = GioiTinh;
        this.GioiTinhHienThi = GioiTinhHienThi;
        this.NamSinh = NamSinh;
        this.DiaChi = DiaChi;
        this.DiaChiDayDu = DiaChiDayDu;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.SoDuTaiKhoan = SoDuTaiKhoan;
    }
}
class ThongTinBenhNhan {
    constructor(MaBenhNhan = null, MaTiepNhan = null, YeuCauTiepNhanId = null, TrangThaiThanhToan = null) {
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.TrangThaiThanhToan = TrangThaiThanhToan;
    }
}
class SearchInfoNhaThuoc {
    constructor(MaBenhNhan = "", MaTiepNhan = "", HoTen = "", SoDienThoai = "", KiemTraThanhToan = "", Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.SoDienThoai = SoDienThoai;
        this.KiemTraThanhToan = KiemTraThanhToan;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class KhachVangLai {
    constructor(Id = 0, HoTen = null, GioiTinh = 1, NamSinh = 1900, DiaChi = null, DiaChiDayDu = null, SoDienThoai = null, TinhThanhId = 0, QuanHuyenId = 0, PhuongXaId = 0, Email = null, GioiTinhHienThi = null, MaBN = null, MaTN = null, TenTinhDisplay = null, TenHuyenDisplay = null, TenPhuongDisplay = null) {
        this.Id = Id;
        this.HoTen = HoTen;
        this.GioiTinh = GioiTinh;
        this.NamSinh = NamSinh;
        this.DiaChi = DiaChi;
        this.DiaChiDayDu = DiaChiDayDu;
        this.SoDienThoai = SoDienThoai;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXaId = PhuongXaId;
        this.Email = Email;
        this.GioiTinhHienThi = GioiTinhHienThi;
        this.MaBN = MaBN;
        this.MaTN = MaTN;
        this.TenTinhDisplay = TenTinhDisplay;
        this.TenHuyenDisplay = TenHuyenDisplay;
        this.TenPhuongDisplay = TenPhuongDisplay;
    }
}
class ToaThuocCuTimKiem {
    constructor(DVKhamHienThi = null, DVKhamId = null, ChuanDoan = null, BSKham = null, BSId = null, 
    // public NgayKham: DateTime = null
    RangeDate = new rangeDate) {
        this.DVKhamHienThi = DVKhamHienThi;
        this.DVKhamId = DVKhamId;
        this.ChuanDoan = ChuanDoan;
        this.BSKham = BSKham;
        this.BSId = BSId;
        this.RangeDate = RangeDate;
    }
}
class danhSachThuoc {
    constructor(Id = 0, ThuocBHYT = [], ThuocKhongBHYT = []) {
        this.Id = Id;
        this.ThuocBHYT = ThuocBHYT;
        this.ThuocKhongBHYT = ThuocKhongBHYT;
    }
}
class ThemDuocPham {
    constructor(DuocPhamId = null, DuocPhamText = null, SoLuongTon = null, SoLuong = null) {
        this.DuocPhamId = DuocPhamId;
        this.DuocPhamText = DuocPhamText;
        this.SoLuongTon = SoLuongTon;
        this.SoLuong = SoLuong;
    }
}
class XemTruocBangKeThuoc {
    constructor(YeuCauTiepNhanId = null, Hosting = null, DanhSachDonThuocs = []) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.Hosting = Hosting;
        this.DanhSachDonThuocs = DanhSachDonThuocs;
    }
}
class ThongTinDuocPham {
    constructor(Id = null, STT = null, DuocPhamId = null, MaHoatChat = null, TenDuocPham = null, SoLuongTon = null, NhapKhoDuocPhamChiTietId = null, TenHoatChat = null, DonViTinh = null, SoLuongToa = null, SoLuongMua = null, ThanhTien = null, DonGiaHienThi = null, Solo = null, ViTri = null, HanSuDung = null, HanSuDungHientThi = null, BacSiKeToa = null, BacSiId = null, isNew = null, HighLightClass = null, CheckedDefault = true, BNConPhaiThanhToan = 0, DanhSachCongNoChoThus = [], DonGia = null, ThanhTienHienThi = null, BNConPhaiThanhToanHienThi = null, LoaiDuocPhamHoacVatTu = 0, LoaiDuocPhamHoacVatTu1 = 0, GhiChuMienGiamThem = null, DanhSachMienGiamVos = [], SoTienMG = null, DaThanhToan = null, TongCongNo = null, BHYTThanhToan = null, apdungMGTThanhCong = null) {
        this.Id = Id;
        this.STT = STT;
        this.DuocPhamId = DuocPhamId;
        this.MaHoatChat = MaHoatChat;
        this.TenDuocPham = TenDuocPham;
        this.SoLuongTon = SoLuongTon;
        this.NhapKhoDuocPhamChiTietId = NhapKhoDuocPhamChiTietId;
        this.TenHoatChat = TenHoatChat;
        this.DonViTinh = DonViTinh;
        this.SoLuongToa = SoLuongToa;
        this.SoLuongMua = SoLuongMua;
        this.ThanhTien = ThanhTien;
        this.DonGiaHienThi = DonGiaHienThi;
        this.Solo = Solo;
        this.ViTri = ViTri;
        this.HanSuDung = HanSuDung;
        this.HanSuDungHientThi = HanSuDungHientThi;
        this.BacSiKeToa = BacSiKeToa;
        this.BacSiId = BacSiId;
        this.isNew = isNew;
        this.HighLightClass = HighLightClass;
        this.CheckedDefault = CheckedDefault;
        this.BNConPhaiThanhToan = BNConPhaiThanhToan;
        this.DanhSachCongNoChoThus = DanhSachCongNoChoThus;
        this.DonGia = DonGia;
        this.ThanhTienHienThi = ThanhTienHienThi;
        this.BNConPhaiThanhToanHienThi = BNConPhaiThanhToanHienThi;
        this.LoaiDuocPhamHoacVatTu = LoaiDuocPhamHoacVatTu;
        this.LoaiDuocPhamHoacVatTu1 = LoaiDuocPhamHoacVatTu1;
        this.GhiChuMienGiamThem = GhiChuMienGiamThem;
        this.DanhSachMienGiamVos = DanhSachMienGiamVos;
        this.SoTienMG = SoTienMG;
        this.DaThanhToan = DaThanhToan;
        this.TongCongNo = TongCongNo;
        this.BHYTThanhToan = BHYTThanhToan;
        this.apdungMGTThanhCong = apdungMGTThanhCong;
    }
}
class ThongTinDonThuoc {
    constructor(Id = null, HoTenBenhNhan = null, TienMat = 0, ChuyenKhoan = 0, POS = 0, SoTienCongNo = 0, BenhNhanDua = 0, TienTraLai = null, HinhThucThanhToan = [], NgayThu = null, NoiDungThu = null, DanhSachCongNos = [], DanhSachDonThuocs = [], TongTien = TienMat + ChuyenKhoan + POS) {
        this.Id = Id;
        this.HoTenBenhNhan = HoTenBenhNhan;
        this.TienMat = TienMat;
        this.ChuyenKhoan = ChuyenKhoan;
        this.POS = POS;
        this.SoTienCongNo = SoTienCongNo;
        this.BenhNhanDua = BenhNhanDua;
        this.TienTraLai = TienTraLai;
        this.HinhThucThanhToan = HinhThucThanhToan;
        this.NgayThu = NgayThu;
        this.NoiDungThu = NoiDungThu;
        this.DanhSachCongNos = DanhSachCongNos;
        this.DanhSachDonThuocs = DanhSachDonThuocs;
        this.TongTien = TongTien;
    }
}
class CongNoVo {
    constructor(CongTyCongNoId = null, SoTienCongNo = null) {
        this.CongTyCongNoId = CongTyCongNoId;
        this.SoTienCongNo = SoTienCongNo;
    }
}
class ConfirmPrint {
    constructor(TaiKhoanBenhNhanThuId = null, InPhieuThu = false, InBangKe = true, Hosting = null, Response = null) {
        this.TaiKhoanBenhNhanThuId = TaiKhoanBenhNhanThuId;
        this.InPhieuThu = InPhieuThu;
        this.InBangKe = InBangKe;
        this.Hosting = Hosting;
        this.Response = Response;
    }
}
class ServiceId {
    constructor(ToaThuoc = [], maBN = 0) {
        this.ToaThuoc = ToaThuoc;
        this.maBN = maBN;
    }
}
class DanhSachCongNoChoThu {
    constructor(CongNoChoThus = []) {
        this.CongNoChoThus = CongNoChoThus;
    }
}
class CongNoChoThu {
    constructor(CongNoId = 0, TenCongTy = null, SoTienCongNoChoThu = 0, ViTri = 0) {
        this.CongNoId = CongNoId;
        this.TenCongTy = TenCongTy;
        this.SoTienCongNoChoThu = SoTienCongNoChoThu;
        this.ViTri = ViTri;
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
class TinhHuyenTemplateVo {
    constructor(TenTinh = "", TenHuyen = "", TinhId = 0, HuyenId = 0) {
        this.TenTinh = TenTinh;
        this.TenHuyen = TenHuyen;
        this.TinhId = TinhId;
        this.HuyenId = HuyenId;
    }
}
class QuayThuocGridVo {
    constructor(MaBenhNhan = null, MaTiepNhan = null, HoTen = null, SoDienThoai = null, KiemTraThanhToan = null, DateStart = null, DateEnd = null, DateNow = null, DieuKienLoadVaoChiTiet = false) {
        this.MaBenhNhan = MaBenhNhan;
        this.MaTiepNhan = MaTiepNhan;
        this.HoTen = HoTen;
        this.SoDienThoai = SoDienThoai;
        this.KiemTraThanhToan = KiemTraThanhToan;
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
        this.DateNow = DateNow;
        this.DieuKienLoadVaoChiTiet = DieuKienLoadVaoChiTiet;
    }
}
// update 28122020
class ApDungMiemGiamThem {
    constructor(ChietKhauTheoTiLe = false, ChietKhauTheoSoTien = false, SoTien = 0, TiLe = 0, GhiChu = null) {
        this.ChietKhauTheoTiLe = ChietKhauTheoTiLe;
        this.ChietKhauTheoSoTien = ChietKhauTheoSoTien;
        this.SoTien = SoTien;
        this.TiLe = TiLe;
        this.GhiChu = GhiChu;
    }
}
class DanhSachMienGiamVo {
    constructor(LoaiMienGiam = 0, DoiTuongUuDaiId = null, DoiTuongUuDai = null, TheVoucherId = null, MaTheVoucher = null, LoaiChietKhau = 0, SoTien = 0, TiLe = 0, SoTienMiemGiamTatCa = 0, TongTienMiemGiam = 0, DaSuDung = false) {
        this.LoaiMienGiam = LoaiMienGiam;
        this.DoiTuongUuDaiId = DoiTuongUuDaiId;
        this.DoiTuongUuDai = DoiTuongUuDai;
        this.TheVoucherId = TheVoucherId;
        this.MaTheVoucher = MaTheVoucher;
        this.LoaiChietKhau = LoaiChietKhau;
        this.SoTien = SoTien;
        this.TiLe = TiLe;
        this.SoTienMiemGiamTatCa = SoTienMiemGiamTatCa;
        this.TongTienMiemGiam = TongTienMiemGiam;
        this.DaSuDung = DaSuDung;
    }
}
class LoaiChietKhau {
    constructor() {
        this.ChietKhauTheoTiLe = 1;
        this.ChietKhauTheoSoTien = 2;
    }
}
class LoaiMienGiam {
    constructor() {
        this.UuDai = 1;
        this.Voucher = 2;
        this.MienGiamThem = 3;
    }
}
class ThongTinHuyPhieu {
    constructor(SoPhieu = null, TenSoPhieu = null, TenPhieuThuChi = null, LoaiPhieuThuChiThuNgan = null, ThuHoiPhieu = null, NguoiThuHoiId = null, TenNguoiThuHoi = null, ThoiGianThuHoi = null, DaHoanUng = null, LyDo = null) {
        this.SoPhieu = SoPhieu;
        this.TenSoPhieu = TenSoPhieu;
        this.TenPhieuThuChi = TenPhieuThuChi;
        this.LoaiPhieuThuChiThuNgan = LoaiPhieuThuChiThuNgan;
        this.ThuHoiPhieu = ThuHoiPhieu;
        this.NguoiThuHoiId = NguoiThuHoiId;
        this.TenNguoiThuHoi = TenNguoiThuHoi;
        this.ThoiGianThuHoi = ThoiGianThuHoi;
        this.DaHoanUng = DaHoanUng;
        this.LyDo = LyDo;
    }
}
class TrangThaiThuTienBenhNhan {
    constructor() {
        this.ThuTheoChiPhiNumber = 1;
        this.ThuTheoChiPhi = "Phiếu thu";
        this.Huy = "Đã hủy";
    }
}
class ThongTinSoPhieuDaThu {
    constructor(SoPhieuId = null, TenSoPhieu = null, LoaiPhieu = null, TinhTrang = null, SoTien = null, HinhThucThanhToan = null, TienMat = null, ChuyenKhoan = null, Pos = null, TongChiPhi = null, CongNo = null, BHYTThanhToan = null, MienGiam = null, BenhNhanThanhToan = null, SoTienPhaiThuHoacChi = null, LoaiPhieuThuChiThuNgan = null, SoPhieu = null, NgayThuStr = null, NoiDungThu = null, DaThuHoi = null, NguoiThuHoi = null, ConHanHuyPhieuThu = null, NhanVienHuyPhieu = null, NgayHuyStr = null, DanhSachThuPhis = []) {
        this.SoPhieuId = SoPhieuId;
        this.TenSoPhieu = TenSoPhieu;
        this.LoaiPhieu = LoaiPhieu;
        this.TinhTrang = TinhTrang;
        this.SoTien = SoTien;
        this.HinhThucThanhToan = HinhThucThanhToan;
        this.TienMat = TienMat;
        this.ChuyenKhoan = ChuyenKhoan;
        this.Pos = Pos;
        this.TongChiPhi = TongChiPhi;
        this.CongNo = CongNo;
        this.BHYTThanhToan = BHYTThanhToan;
        this.MienGiam = MienGiam;
        this.BenhNhanThanhToan = BenhNhanThanhToan;
        this.SoTienPhaiThuHoacChi = SoTienPhaiThuHoacChi;
        this.LoaiPhieuThuChiThuNgan = LoaiPhieuThuChiThuNgan;
        this.SoPhieu = SoPhieu;
        this.NgayThuStr = NgayThuStr;
        this.NoiDungThu = NoiDungThu;
        this.DaThuHoi = DaThuHoi;
        this.NguoiThuHoi = NguoiThuHoi;
        this.ConHanHuyPhieuThu = ConHanHuyPhieuThu;
        this.NhanVienHuyPhieu = NhanVienHuyPhieu;
        this.NgayHuyStr = NgayHuyStr;
        this.DanhSachThuPhis = DanhSachThuPhis;
    }
}
class HuyXuatThuocTrongNgay {
    constructor(TaiKhoanBenhNhanThuId = null, TenSoPhieu = null, ThuHoiPhieu = null, NguoiThuHoiId = null, TenNguoiThuHoi = null, ThoiGianThuHoi = null, LyDo = null) {
        this.TaiKhoanBenhNhanThuId = TaiKhoanBenhNhanThuId;
        this.TenSoPhieu = TenSoPhieu;
        this.ThuHoiPhieu = ThuHoiPhieu;
        this.NguoiThuHoiId = NguoiThuHoiId;
        this.TenNguoiThuHoi = TenNguoiThuHoi;
        this.ThoiGianThuHoi = ThoiGianThuHoi;
        this.LyDo = LyDo;
    }
}
class NguoiDungKhongMuaDonThuoc {
    constructor(YeuCauTiepNhanId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~5aa7f9c1-es2015.js.map