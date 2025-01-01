(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~3cfd0d41"],{

/***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts ***!
  \*******************************************************************************/
/*! exports provided: TiepNhanBenhNhan, DanhSachDichVuGoiChon, DanhSachDichVuChonTrongLanPopup, DanhSachGoiChonTrongLanPopup, DanhSachGoiChon, DichVuTrongGoiKhiThem, CheckDuSoLuongTonTrongGoi, ChiTietGoiDichVuChiDinhTheoBenhNhan, TiepNhanBenhNhanViewModel, BenhNhanTiepNhanBenhNhanViewModel, BaoHiemTuNhanViewModel, DonViHanhChinhBenhNhanViewModel, GridLichSuKCB, GridLichSuKiemTraTheBHYT, LyDoKhamBenhBenhNhanViewModel, PhongNgoaiTruBenhNhanViewModel, GiayChuyenVienBenhNhanViewModel, GiayMienCungChiTraViewModel, ThemTaiLieuDinhKem, TaiLieuModel, HoSoYeuCauTiepNhanViewModel, DoiTuongUuTienKhamChuaBenhBenhNhanViewModel, DoiTuongUuDaiViewModel, CongTyUuDaiViewModel, NoiGioiThieuViewModel, NguoiGioiThieuViewModel, CongTyBaoHiemTuNhanViewModel, YeuCauKhamBenhTiepNhanViewModel, YeuCauDichVuKyThuatTiepNhanViewModel, YeuCauVatTuBenhVienTiepNhanViewModel, YeuCauDuocPhamBenhVienTiepNhanViewModel, ThemChiDinhDichVu, ThemChiDinhDichVuKyThuat, DiaChiBHYT, ThemBaoHiemTuNhan, ThemBaoHiemTuNhanGridVo, GetDonGiaVo, AddGoiForUpdateView, ChiDinhDichVuGridVo, ChiDinhDichVuKyThuatGridVo, TimKiemBenhNhanGridVo, TimKiemBenhNhanSearch, DataTimKiem, TimKiemBenhNhanPopup, GridUpdate, ListChiDinhNeedUpdate, DefaultValueTNBNModel, ListDichVuCheckTruocDo, XetNghiemCovid, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhan", function() { return TiepNhanBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDichVuGoiChon", function() { return DanhSachDichVuGoiChon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDichVuChonTrongLanPopup", function() { return DanhSachDichVuChonTrongLanPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachGoiChonTrongLanPopup", function() { return DanhSachGoiChonTrongLanPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachGoiChon", function() { return DanhSachGoiChon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuTrongGoiKhiThem", function() { return DichVuTrongGoiKhiThem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDuSoLuongTonTrongGoi", function() { return CheckDuSoLuongTonTrongGoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietGoiDichVuChiDinhTheoBenhNhan", function() { return ChiTietGoiDichVuChiDinhTheoBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanViewModel", function() { return TiepNhanBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanTiepNhanBenhNhanViewModel", function() { return BenhNhanTiepNhanBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoHiemTuNhanViewModel", function() { return BaoHiemTuNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonViHanhChinhBenhNhanViewModel", function() { return DonViHanhChinhBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLichSuKCB", function() { return GridLichSuKCB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLichSuKiemTraTheBHYT", function() { return GridLichSuKiemTraTheBHYT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoKhamBenhBenhNhanViewModel", function() { return LyDoKhamBenhBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhongNgoaiTruBenhNhanViewModel", function() { return PhongNgoaiTruBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayChuyenVienBenhNhanViewModel", function() { return GiayChuyenVienBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayMienCungChiTraViewModel", function() { return GiayMienCungChiTraViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemTaiLieuDinhKem", function() { return ThemTaiLieuDinhKem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaiLieuModel", function() { return TaiLieuModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoYeuCauTiepNhanViewModel", function() { return HoSoYeuCauTiepNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoiTuongUuTienKhamChuaBenhBenhNhanViewModel", function() { return DoiTuongUuTienKhamChuaBenhBenhNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoiTuongUuDaiViewModel", function() { return DoiTuongUuDaiViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongTyUuDaiViewModel", function() { return CongTyUuDaiViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiGioiThieuViewModel", function() { return NoiGioiThieuViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguoiGioiThieuViewModel", function() { return NguoiGioiThieuViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongTyBaoHiemTuNhanViewModel", function() { return CongTyBaoHiemTuNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauKhamBenhTiepNhanViewModel", function() { return YeuCauKhamBenhTiepNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDichVuKyThuatTiepNhanViewModel", function() { return YeuCauDichVuKyThuatTiepNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauVatTuBenhVienTiepNhanViewModel", function() { return YeuCauVatTuBenhVienTiepNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDuocPhamBenhVienTiepNhanViewModel", function() { return YeuCauDuocPhamBenhVienTiepNhanViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemChiDinhDichVu", function() { return ThemChiDinhDichVu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemChiDinhDichVuKyThuat", function() { return ThemChiDinhDichVuKyThuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaChiBHYT", function() { return DiaChiBHYT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemBaoHiemTuNhan", function() { return ThemBaoHiemTuNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemBaoHiemTuNhanGridVo", function() { return ThemBaoHiemTuNhanGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDonGiaVo", function() { return GetDonGiaVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGoiForUpdateView", function() { return AddGoiForUpdateView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiDinhDichVuGridVo", function() { return ChiDinhDichVuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiDinhDichVuKyThuatGridVo", function() { return ChiDinhDichVuKyThuatGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBenhNhanGridVo", function() { return TimKiemBenhNhanGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBenhNhanSearch", function() { return TimKiemBenhNhanSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTimKiem", function() { return DataTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBenhNhanPopup", function() { return TimKiemBenhNhanPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridUpdate", function() { return GridUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChiDinhNeedUpdate", function() { return ListChiDinhNeedUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueTNBNModel", function() { return DefaultValueTNBNModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDichVuCheckTruocDo", function() { return ListDichVuCheckTruocDo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCovid", function() { return XetNghiemCovid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham", function() { return DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TiepNhanBenhNhan {
}
class DanhSachDichVuGoiChon {
    constructor(TenChuongTrinh = null, DichVuId = null, YeuCauGoiDichVuId = null, ChuongTrinhGoiDichVuId = null, SoLanKhamTrongYCTN = null, SoLanKhamNgoaiYCTN = null, DichVuKhamBenh = false, DichVuKyThuat = false, DichVuGiuongBenh = false, IsFromMarketing = false) {
        this.TenChuongTrinh = TenChuongTrinh;
        this.DichVuId = DichVuId;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.SoLanKhamTrongYCTN = SoLanKhamTrongYCTN;
        this.SoLanKhamNgoaiYCTN = SoLanKhamNgoaiYCTN;
        this.DichVuKhamBenh = DichVuKhamBenh;
        this.DichVuKyThuat = DichVuKyThuat;
        this.DichVuGiuongBenh = DichVuGiuongBenh;
        this.IsFromMarketing = IsFromMarketing;
    }
}
class DanhSachDichVuChonTrongLanPopup {
    constructor(Id = null, ChuongTrinhGoiDichVuId = null, YeuCauGoiDichVuId = null, IsFromMarketing = false, BenhNhanId = null, DichVuId = null, TenDichVu = null, SoLan = null, TenNhomDichVu = null, SoLuongDungLanNay = null, SoLuongConLai = null, ThuocGoi = null, TenGoi = null, DonGia = null, GiaSauChietKhau = null, GiaSauChietKhauDisplay = null, TrangThaiThanhToan = null, TrangThaiThanhToanDisplay = null, DaThanhToan = false, KhongThem = false, NhomGiaDichVuBenhVienId = null) {
        this.Id = Id;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.IsFromMarketing = IsFromMarketing;
        this.BenhNhanId = BenhNhanId;
        this.DichVuId = DichVuId;
        this.TenDichVu = TenDichVu;
        this.SoLan = SoLan;
        this.TenNhomDichVu = TenNhomDichVu;
        this.SoLuongDungLanNay = SoLuongDungLanNay;
        this.SoLuongConLai = SoLuongConLai;
        this.ThuocGoi = ThuocGoi;
        this.TenGoi = TenGoi;
        this.DonGia = DonGia;
        this.GiaSauChietKhau = GiaSauChietKhau;
        this.GiaSauChietKhauDisplay = GiaSauChietKhauDisplay;
        this.TrangThaiThanhToan = TrangThaiThanhToan;
        this.TrangThaiThanhToanDisplay = TrangThaiThanhToanDisplay;
        this.DaThanhToan = DaThanhToan;
        this.KhongThem = KhongThem;
        this.NhomGiaDichVuBenhVienId = NhomGiaDichVuBenhVienId;
    }
}
class DanhSachGoiChonTrongLanPopup {
    constructor(ThuocGoi = null, GiaSauChietKhau = null, GiaSauChietKhauDisplay = null, TrangThaiThanhToan = null, TrangThaiThanhToanDisplay = null) {
        this.ThuocGoi = ThuocGoi;
        this.GiaSauChietKhau = GiaSauChietKhau;
        this.GiaSauChietKhauDisplay = GiaSauChietKhauDisplay;
        this.TrangThaiThanhToan = TrangThaiThanhToan;
        this.TrangThaiThanhToanDisplay = TrangThaiThanhToanDisplay;
    }
}
class DanhSachGoiChon {
    constructor(TenChuongTrinh = null, TenGoiDichVu = null, YeuCauGoiDichVuId = null, ChuongTrinhGoiDichVuId = null, IsFromMarketing = false, BenhNhanId = null, DaThanhToan = false, YeuCauTiepNhanId = null) {
        this.TenChuongTrinh = TenChuongTrinh;
        this.TenGoiDichVu = TenGoiDichVu;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.IsFromMarketing = IsFromMarketing;
        this.BenhNhanId = BenhNhanId;
        this.DaThanhToan = DaThanhToan;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
    }
}
class DichVuTrongGoiKhiThem {
    constructor(TenChuongTrinh = null, YeuCauGoiDichVuId = null, ChuongTrinhGoiDichVuId = null, IsFromMarketing = false, BenhNhanId = null, TenDichVu = null, Data = null) {
        this.TenChuongTrinh = TenChuongTrinh;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.IsFromMarketing = IsFromMarketing;
        this.BenhNhanId = BenhNhanId;
        this.TenDichVu = TenDichVu;
        this.Data = Data;
    }
}
class CheckDuSoLuongTonTrongGoi {
    constructor(DichVuThem = null, DanhSachDichVuChonTrongLanPopup = null) {
        this.DichVuThem = DichVuThem;
        this.DanhSachDichVuChonTrongLanPopup = DanhSachDichVuChonTrongLanPopup;
    }
}
class ChiTietGoiDichVuChiDinhTheoBenhNhan {
    constructor(Id = null, YeuCauGoiDichVuId = null, ChuongTrinhGoiDichVuId = null, ChuongTrinhGoiDichVuChiTietId = null, DichVuBenhVienId = null, TenDichVu = null, NhomGoiDichVu = null, SoLuongSuDung = null, IsActive = false) {
        this.Id = Id;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.ChuongTrinhGoiDichVuChiTietId = ChuongTrinhGoiDichVuChiTietId;
        this.DichVuBenhVienId = DichVuBenhVienId;
        this.TenDichVu = TenDichVu;
        this.NhomGoiDichVu = NhomGoiDichVu;
        this.SoLuongSuDung = SoLuongSuDung;
        this.IsActive = IsActive;
    }
}
class TiepNhanBenhNhanViewModel {
    constructor(DisableCoMienGiam = false, DisableDoiTuongUuDai = false, SoTienConLai = null, DanTocId = 1, LoaiMienGiam = 1, LstVoucherId = [], LstMaVoucher = [], BenhNhanId = null, 
    //update v2
    BHYTNgayHieuLuc = null, BHYTCoQuanBHXH = null, BHYTNgayHetHan = null, NgayThangNamSinh = null, NgayThangNamSinhDisplay = null, BHYTMucHuong = null, BHYTNgayDu5Nam = null, GioiTinhDisplay = null, BHYTDiaChi = null, NoiDangKyBHYT = null, BHYTMaSoThe = null, BHYTDuocMienCungChiTra = false, BHYTGiayMienCungChiTraId = null, BHYTGiayMienCungChiTra = null, BHYTNgayDuocMienCungChiTra = null, BHYTMaDKBD = null, CoBHYT = false, LyDoVaoVien = null, LyDoTiepNhanId = 1, LyDoTiepNhanText = null, DuocChuyenVien = null, SoChuyenTuyen = null, TuyenChuyen = null, NoiChuyenId = null, LyDoChuyen = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, SoChungMinhThu = null, GioiTinh = 1, NgheNghiepId = null, QuocTichId = 1, TinhThanhId = null, QuanHuyenId = null, PhuongXaId = null, DiaChi = null, SoDienThoai = null, Email = null, NoiLamViec = null, DuocUuDai = false, DoiTuongUuDaiId = null, DoiTuongUuDai = null, CongTyUuDaiId = null, CongTyUuDai = null, CoBHTN = null, 
    // public BHTNCongTyBaoHiemId: number = null,
    // public BHTNCongTyBaoHiem: CongTyBaoHiemTuNhanViewModel = null,
    // public BHTNMaSoThe: string = null,
    // public BHTNNgayHieuLuc: Date = null,
    // public BHTNNgayHetHan: Date = null,
    // public BHTNSoDienThoai: string = null,
    // public BHTNDiaChi: string = null,
    BaoHiemTuNhans = [], LoaiYeuCauTiepNhan = 1, ThoiDiemTiepNhan = null, HinhThucDenId = 1, NoiGioiThieuId = 1, NguoiGioiThieuId = null, NguoiGioiThieu = null, NoiGioiThieu = null, TrieuChungTiepNhan = null, YeuCauKhamBenhs = [], YeuCauKhamBenhGrid = [], YeuCauKhacGrid = [], YeuCauDichVuKyThuats = [], YeuCauKyThuatGrid = [], YeuCauVatTuBenhViens = [], YeuCauDuocPhamBenhViens = [], HoSoYeuCauTiepNhans = [], 
    //người liên hệ
    NguoiLienHeHoTen = null, NguoiLienHeQuanHeNhanThanId = null, NguoiLienHeSoDienThoai = null, NguoiLienHeEmail = null, NguoiLienHeDiaChi = null, NguoiLienHePhuongXaId = null, NguoiLienHeQuanHuyenId = null, NguoiLienHeTinhThanhId = null, 
    //người liên hệ
    //update v2
    LoaiKham = 1, ThoiGianTiepNhan = new Date(), LaTaiKham = false, LyDoKhamBenhId = null, PhongKhamId = null, PhongKhamVaBacSiId = null, KhoaKhamId = null, GiayChuyenVienId = null, ThoiGianChuyenVien = null, DoiTuongUuTienKhamChuaBenhId = null, LaKhamTheoYeuCau = false, 
    //public gtTheTu: string=null,
    //public gtTheDen: string=null,
    //public maKV: string=null,
    //public ngayDu5Nam: string=null,
    //public maSoBHXH: string=null,
    //public maTheCu: string=null,
    //public maTheMoi: string=null,
    //public gtTheTuMoi: string=null,
    //public gtTheDenMoi: string=null,
    //Thong tin bao hiem y te
    MaDKBD = null, NgayCoHieuLucDisplay = null, NgayHetHieuLucDisplay = null, NgayDu5NamDisplay = null, DiaChiDisplay = null, cqBHXH = null, 
    //
    BenhNhan = null, LyDoKhamBenh = null, PhongKham = null, GiayChuyenVien = null, DoiTuongUuTienKhamChuaBenh = null, LyDoKhamModelText = null, KhoaKhamModelText = null, PhongKhamModelText = null, DoiTuongUuTienModelText = null, isOutOfDate = false, IsCheckedBHYT = true, TinhTrangThe = 3, LoaiVoucher = null, GridLichSuKCB = [], GridLichSuKiemTraTheBHYT = [], TuNhap = false, 
    //update 21/08/2020
    MaBN = null, MaYeuCauTiepNhan = null, 
    // update CheckYeuCauTiepNhanTaoMoi
    CheckYeuCauTiepNhanTaoMoi = false, CoYeuCauGoiDichVu = null, 
    // cập nhật điều kiện cho phép tạo mới YCTN
    MessageKhongChoPhepTaoMoiYCTN = null, 
    // biến tạm lưu mess check thẻ BHYT từ cổng
    MessageErrFromBHYT = null, BieuHienLamSang = null, DichTeSarsCoV2 = null, 
    //BVHD-3800
    LaCapCuu = null) {
        this.DisableCoMienGiam = DisableCoMienGiam;
        this.DisableDoiTuongUuDai = DisableDoiTuongUuDai;
        this.SoTienConLai = SoTienConLai;
        this.DanTocId = DanTocId;
        this.LoaiMienGiam = LoaiMienGiam;
        this.LstVoucherId = LstVoucherId;
        this.LstMaVoucher = LstMaVoucher;
        this.BenhNhanId = BenhNhanId;
        this.BHYTNgayHieuLuc = BHYTNgayHieuLuc;
        this.BHYTCoQuanBHXH = BHYTCoQuanBHXH;
        this.BHYTNgayHetHan = BHYTNgayHetHan;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.NgayThangNamSinhDisplay = NgayThangNamSinhDisplay;
        this.BHYTMucHuong = BHYTMucHuong;
        this.BHYTNgayDu5Nam = BHYTNgayDu5Nam;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.BHYTDiaChi = BHYTDiaChi;
        this.NoiDangKyBHYT = NoiDangKyBHYT;
        this.BHYTMaSoThe = BHYTMaSoThe;
        this.BHYTDuocMienCungChiTra = BHYTDuocMienCungChiTra;
        this.BHYTGiayMienCungChiTraId = BHYTGiayMienCungChiTraId;
        this.BHYTGiayMienCungChiTra = BHYTGiayMienCungChiTra;
        this.BHYTNgayDuocMienCungChiTra = BHYTNgayDuocMienCungChiTra;
        this.BHYTMaDKBD = BHYTMaDKBD;
        this.CoBHYT = CoBHYT;
        this.LyDoVaoVien = LyDoVaoVien;
        this.LyDoTiepNhanId = LyDoTiepNhanId;
        this.LyDoTiepNhanText = LyDoTiepNhanText;
        this.DuocChuyenVien = DuocChuyenVien;
        this.SoChuyenTuyen = SoChuyenTuyen;
        this.TuyenChuyen = TuyenChuyen;
        this.NoiChuyenId = NoiChuyenId;
        this.LyDoChuyen = LyDoChuyen;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.SoChungMinhThu = SoChungMinhThu;
        this.GioiTinh = GioiTinh;
        this.NgheNghiepId = NgheNghiepId;
        this.QuocTichId = QuocTichId;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXaId = PhuongXaId;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.NoiLamViec = NoiLamViec;
        this.DuocUuDai = DuocUuDai;
        this.DoiTuongUuDaiId = DoiTuongUuDaiId;
        this.DoiTuongUuDai = DoiTuongUuDai;
        this.CongTyUuDaiId = CongTyUuDaiId;
        this.CongTyUuDai = CongTyUuDai;
        this.CoBHTN = CoBHTN;
        this.BaoHiemTuNhans = BaoHiemTuNhans;
        this.LoaiYeuCauTiepNhan = LoaiYeuCauTiepNhan;
        this.ThoiDiemTiepNhan = ThoiDiemTiepNhan;
        this.HinhThucDenId = HinhThucDenId;
        this.NoiGioiThieuId = NoiGioiThieuId;
        this.NguoiGioiThieuId = NguoiGioiThieuId;
        this.NguoiGioiThieu = NguoiGioiThieu;
        this.NoiGioiThieu = NoiGioiThieu;
        this.TrieuChungTiepNhan = TrieuChungTiepNhan;
        this.YeuCauKhamBenhs = YeuCauKhamBenhs;
        this.YeuCauKhamBenhGrid = YeuCauKhamBenhGrid;
        this.YeuCauKhacGrid = YeuCauKhacGrid;
        this.YeuCauDichVuKyThuats = YeuCauDichVuKyThuats;
        this.YeuCauKyThuatGrid = YeuCauKyThuatGrid;
        this.YeuCauVatTuBenhViens = YeuCauVatTuBenhViens;
        this.YeuCauDuocPhamBenhViens = YeuCauDuocPhamBenhViens;
        this.HoSoYeuCauTiepNhans = HoSoYeuCauTiepNhans;
        this.NguoiLienHeHoTen = NguoiLienHeHoTen;
        this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
        this.NguoiLienHeSoDienThoai = NguoiLienHeSoDienThoai;
        this.NguoiLienHeEmail = NguoiLienHeEmail;
        this.NguoiLienHeDiaChi = NguoiLienHeDiaChi;
        this.NguoiLienHePhuongXaId = NguoiLienHePhuongXaId;
        this.NguoiLienHeQuanHuyenId = NguoiLienHeQuanHuyenId;
        this.NguoiLienHeTinhThanhId = NguoiLienHeTinhThanhId;
        this.LoaiKham = LoaiKham;
        this.ThoiGianTiepNhan = ThoiGianTiepNhan;
        this.LaTaiKham = LaTaiKham;
        this.LyDoKhamBenhId = LyDoKhamBenhId;
        this.PhongKhamId = PhongKhamId;
        this.PhongKhamVaBacSiId = PhongKhamVaBacSiId;
        this.KhoaKhamId = KhoaKhamId;
        this.GiayChuyenVienId = GiayChuyenVienId;
        this.ThoiGianChuyenVien = ThoiGianChuyenVien;
        this.DoiTuongUuTienKhamChuaBenhId = DoiTuongUuTienKhamChuaBenhId;
        this.LaKhamTheoYeuCau = LaKhamTheoYeuCau;
        this.MaDKBD = MaDKBD;
        this.NgayCoHieuLucDisplay = NgayCoHieuLucDisplay;
        this.NgayHetHieuLucDisplay = NgayHetHieuLucDisplay;
        this.NgayDu5NamDisplay = NgayDu5NamDisplay;
        this.DiaChiDisplay = DiaChiDisplay;
        this.cqBHXH = cqBHXH;
        this.BenhNhan = BenhNhan;
        this.LyDoKhamBenh = LyDoKhamBenh;
        this.PhongKham = PhongKham;
        this.GiayChuyenVien = GiayChuyenVien;
        this.DoiTuongUuTienKhamChuaBenh = DoiTuongUuTienKhamChuaBenh;
        this.LyDoKhamModelText = LyDoKhamModelText;
        this.KhoaKhamModelText = KhoaKhamModelText;
        this.PhongKhamModelText = PhongKhamModelText;
        this.DoiTuongUuTienModelText = DoiTuongUuTienModelText;
        this.isOutOfDate = isOutOfDate;
        this.IsCheckedBHYT = IsCheckedBHYT;
        this.TinhTrangThe = TinhTrangThe;
        this.LoaiVoucher = LoaiVoucher;
        this.GridLichSuKCB = GridLichSuKCB;
        this.GridLichSuKiemTraTheBHYT = GridLichSuKiemTraTheBHYT;
        this.TuNhap = TuNhap;
        this.MaBN = MaBN;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.CheckYeuCauTiepNhanTaoMoi = CheckYeuCauTiepNhanTaoMoi;
        this.CoYeuCauGoiDichVu = CoYeuCauGoiDichVu;
        this.MessageKhongChoPhepTaoMoiYCTN = MessageKhongChoPhepTaoMoiYCTN;
        this.MessageErrFromBHYT = MessageErrFromBHYT;
        this.BieuHienLamSang = BieuHienLamSang;
        this.DichTeSarsCoV2 = DichTeSarsCoV2;
        this.LaCapCuu = LaCapCuu;
    }
}
class BenhNhanTiepNhanBenhNhanViewModel {
    constructor(CoBHYT = null, 
    //update v2
    BHYTDuocMienCungChiTra = null, BHYTGiayMienCungChiTraId = null, BHYTGiayMienCungChiTra = null, BHYTNgayDuocMienCungChiTra = null, CoBHTN = null, 
    // public BHTNCongTyBaoHiemId: number = null,
    // public BHTNCongTyBaoHiem: CongTyBaoHiemTuNhanViewModel = null,
    // public BHTNMaSoThe: string = null,
    // public BHTNNgayHieuLuc: Date = null,
    // public BHTNNgayHetHan: Date = null,
    // public BHTNSoDienThoai: string = null,
    // public BHTNDiaChi: string = null,
    BaoHiemTuNhans = [], 
    //update v2
    BHYTMaSoThe = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, NgayThangNamSinh = null, NgayThangNamSinhDisplay = null, GioiTinh = null, GioiTinhDisplay = null, BHYTNoiDangKyId = null, NoiDangKyBHYT = null, BHYTDiaChi = null, BHYTNgayHieuLuc = new Date, BHYTNgayHetHan = new Date, 
    //Thong tin bo sung
    SoChungMinhThu = null, SoDienThoai = null, Email = null, DanTocId = null, QuocTichId = null, TinhThanhId = null, QuanHuyenId = null, PhuongXaId = null, DiaChi = null, NgheNghiepId = null, NoiLamViec = null, NguoiLienHeHoTen = null, NguoiLienHeQuanHeNhanThanId = null, NguoiLienHeSoDienThoai = null, NguoiLienHeEmail = null, DanTocModelText = null, QuocTichModelText = null, TinhThanhModelText = null, QuanHuyenModelText = null, PhuongXaModelText = null, NgheNghiepModelText = null, NguoiLienHeThanNhanModelText = null, BHYTCoQuanBHXH = null, BHYTNgayDu5Nam = null, BHYTNgayDu5NamDisplay = null, BHYTMaDKBD = null, MaBN = null) {
        this.CoBHYT = CoBHYT;
        this.BHYTDuocMienCungChiTra = BHYTDuocMienCungChiTra;
        this.BHYTGiayMienCungChiTraId = BHYTGiayMienCungChiTraId;
        this.BHYTGiayMienCungChiTra = BHYTGiayMienCungChiTra;
        this.BHYTNgayDuocMienCungChiTra = BHYTNgayDuocMienCungChiTra;
        this.CoBHTN = CoBHTN;
        this.BaoHiemTuNhans = BaoHiemTuNhans;
        this.BHYTMaSoThe = BHYTMaSoThe;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.NgayThangNamSinhDisplay = NgayThangNamSinhDisplay;
        this.GioiTinh = GioiTinh;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.BHYTNoiDangKyId = BHYTNoiDangKyId;
        this.NoiDangKyBHYT = NoiDangKyBHYT;
        this.BHYTDiaChi = BHYTDiaChi;
        this.BHYTNgayHieuLuc = BHYTNgayHieuLuc;
        this.BHYTNgayHetHan = BHYTNgayHetHan;
        this.SoChungMinhThu = SoChungMinhThu;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.DanTocId = DanTocId;
        this.QuocTichId = QuocTichId;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXaId = PhuongXaId;
        this.DiaChi = DiaChi;
        this.NgheNghiepId = NgheNghiepId;
        this.NoiLamViec = NoiLamViec;
        this.NguoiLienHeHoTen = NguoiLienHeHoTen;
        this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
        this.NguoiLienHeSoDienThoai = NguoiLienHeSoDienThoai;
        this.NguoiLienHeEmail = NguoiLienHeEmail;
        this.DanTocModelText = DanTocModelText;
        this.QuocTichModelText = QuocTichModelText;
        this.TinhThanhModelText = TinhThanhModelText;
        this.QuanHuyenModelText = QuanHuyenModelText;
        this.PhuongXaModelText = PhuongXaModelText;
        this.NgheNghiepModelText = NgheNghiepModelText;
        this.NguoiLienHeThanNhanModelText = NguoiLienHeThanNhanModelText;
        this.BHYTCoQuanBHXH = BHYTCoQuanBHXH;
        this.BHYTNgayDu5Nam = BHYTNgayDu5Nam;
        this.BHYTNgayDu5NamDisplay = BHYTNgayDu5NamDisplay;
        this.BHYTMaDKBD = BHYTMaDKBD;
        this.MaBN = MaBN;
    }
}
class BaoHiemTuNhanViewModel {
    constructor(Id = 0, YeuCauTiepNhanId = null, BHTNCongTyBaoHiemId = null, CongTyDisplay = null, BHTNMaSoThe = null, BHTNNgayHieuLuc = null, BHTNNgayHetHan = null, BHTNSoDienThoai = null, BHTNDiaChi = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BHTNCongTyBaoHiemId = BHTNCongTyBaoHiemId;
        this.CongTyDisplay = CongTyDisplay;
        this.BHTNMaSoThe = BHTNMaSoThe;
        this.BHTNNgayHieuLuc = BHTNNgayHieuLuc;
        this.BHTNNgayHetHan = BHTNNgayHetHan;
        this.BHTNSoDienThoai = BHTNSoDienThoai;
        this.BHTNDiaChi = BHTNDiaChi;
    }
}
class DonViHanhChinhBenhNhanViewModel {
    constructor(Ten = null, CapHanhChinh = null, TenDonViHanhChinh = null, VungDiaLy = null, TenVietTat = null) {
        this.Ten = Ten;
        this.CapHanhChinh = CapHanhChinh;
        this.TenDonViHanhChinh = TenDonViHanhChinh;
        this.VungDiaLy = VungDiaLy;
        this.TenVietTat = TenVietTat;
    }
}
class GridLichSuKCB {
    constructor(Id = 0, STT = null, MaTheBHYT = null, HoVaTen = null, NgayVaoVien = null, NgayRaVien = null, CoSoKCB = null, MaCoSoKCB = null, KetQuaDieuTri = null, KetQuaDieuTriNumber = null, LyDoVaoVien = null, LyDoVaoVienNumber = null, TinhTrangRaVien = null, TinhTrangRaVienNumber = null, NgayVaoDateTime = null, NgayRaDateTime = null) {
        this.Id = Id;
        this.STT = STT;
        this.MaTheBHYT = MaTheBHYT;
        this.HoVaTen = HoVaTen;
        this.NgayVaoVien = NgayVaoVien;
        this.NgayRaVien = NgayRaVien;
        this.CoSoKCB = CoSoKCB;
        this.MaCoSoKCB = MaCoSoKCB;
        this.KetQuaDieuTri = KetQuaDieuTri;
        this.KetQuaDieuTriNumber = KetQuaDieuTriNumber;
        this.LyDoVaoVien = LyDoVaoVien;
        this.LyDoVaoVienNumber = LyDoVaoVienNumber;
        this.TinhTrangRaVien = TinhTrangRaVien;
        this.TinhTrangRaVienNumber = TinhTrangRaVienNumber;
        this.NgayVaoDateTime = NgayVaoDateTime;
        this.NgayRaDateTime = NgayRaDateTime;
    }
}
class GridLichSuKiemTraTheBHYT {
    constructor(Id = 0, STT = null, UserKiemTra = null, TenCSKCB = null, MaCSKCB = null, ThoiGianKiemTra = null, NoiDungThongBao = null, thoiGianKTDateTime = null) {
        this.Id = Id;
        this.STT = STT;
        this.UserKiemTra = UserKiemTra;
        this.TenCSKCB = TenCSKCB;
        this.MaCSKCB = MaCSKCB;
        this.ThoiGianKiemTra = ThoiGianKiemTra;
        this.NoiDungThongBao = NoiDungThongBao;
        this.thoiGianKTDateTime = thoiGianKTDateTime;
    }
}
class LyDoKhamBenhBenhNhanViewModel {
    constructor(Ten = null, TenVietTat = null, MoTa = null, IsDisabled = null) {
        this.Ten = Ten;
        this.TenVietTat = TenVietTat;
        this.MoTa = MoTa;
        this.IsDisabled = IsDisabled;
    }
}
class PhongNgoaiTruBenhNhanViewModel {
    constructor(KhoaPhongId = null, Ten = null, Ma = null, IsDisabled = null) {
        this.KhoaPhongId = KhoaPhongId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.IsDisabled = IsDisabled;
    }
}
class GiayChuyenVienBenhNhanViewModel {
    constructor(Id = null, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, MoTa = null, LoaiTapTin = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
    }
}
class GiayMienCungChiTraViewModel {
    constructor(Id = null, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, MoTa = null, LoaiTapTin = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
    }
}
class ThemTaiLieuDinhKem {
    constructor(LoaiId = null, MoTa = null, TaiLieu = null) {
        this.LoaiId = LoaiId;
        this.MoTa = MoTa;
        this.TaiLieu = TaiLieu;
    }
}
class TaiLieuModel {
    constructor(Id = null, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, MoTa = null, LoaiTapTin = null, DuongDanTmp = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
        this.DuongDanTmp = DuongDanTmp;
    }
}
class HoSoYeuCauTiepNhanViewModel {
    constructor(Id = 0, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, DuongDanTmp = null, MoTa = null, LoaiTapTin = null, LoaiHoSoYeuCauTiepNhanId = null, YeuCauTiepNhanId = null, LoaiDisplay = null, AddNew = false) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.DuongDanTmp = DuongDanTmp;
        this.MoTa = MoTa;
        this.LoaiTapTin = LoaiTapTin;
        this.LoaiHoSoYeuCauTiepNhanId = LoaiHoSoYeuCauTiepNhanId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.LoaiDisplay = LoaiDisplay;
        this.AddNew = AddNew;
    }
}
class DoiTuongUuTienKhamChuaBenhBenhNhanViewModel {
    constructor(Ten = null, TenVietTat = null, ThuTuUuTien = null, MoTa = null, IsDisabled = null) {
        this.Ten = Ten;
        this.TenVietTat = TenVietTat;
        this.ThuTuUuTien = ThuTuUuTien;
        this.MoTa = MoTa;
        this.IsDisabled = IsDisabled;
    }
}
class DoiTuongUuDaiViewModel {
    constructor(Ten = null, TiLeUuDai = null, MoTa = null, IsDisabled = null) {
        this.Ten = Ten;
        this.TiLeUuDai = TiLeUuDai;
        this.MoTa = MoTa;
        this.IsDisabled = IsDisabled;
    }
}
class CongTyUuDaiViewModel {
    constructor(Ten = null, MoTa = null, IsDisabled = null) {
        this.Ten = Ten;
        this.MoTa = MoTa;
        this.IsDisabled = IsDisabled;
    }
}
class NoiGioiThieuViewModel {
    constructor(Ten = null, MoTa = null, IsDisabled = null) {
        this.Ten = Ten;
        this.MoTa = MoTa;
        this.IsDisabled = IsDisabled;
    }
}
class NguoiGioiThieuViewModel {
    constructor(HoTen = null, HoTenNguoiQuanLy = null, Id = null, NhanVienQuanLyId = null, SoDienThoai = null) {
        this.HoTen = HoTen;
        this.HoTenNguoiQuanLy = HoTenNguoiQuanLy;
        this.Id = Id;
        this.NhanVienQuanLyId = NhanVienQuanLyId;
        this.SoDienThoai = SoDienThoai;
    }
}
class CongTyBaoHiemTuNhanViewModel {
    constructor(Ma = null, Ten = null, DiaChi = null, SoDienThoai = null, Email = null, GhiChu = null, HinhThucBaoHiem = null, PhamViBaoHiem = null) {
        this.Ma = Ma;
        this.Ten = Ten;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.GhiChu = GhiChu;
        this.HinhThucBaoHiem = HinhThucBaoHiem;
        this.PhamViBaoHiem = PhamViBaoHiem;
    }
}
class YeuCauKhamBenhTiepNhanViewModel {
    constructor(NhomGiaDichVuKhamBenhBenhVienId = null, YeuCauTiepNhanId = null, DichVuKhamBenhBenhVienId = null, YeuCauKhamBenhTruocId = null, MaDichVu = null) {
        this.NhomGiaDichVuKhamBenhBenhVienId = NhomGiaDichVuKhamBenhBenhVienId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.DichVuKhamBenhBenhVienId = DichVuKhamBenhBenhVienId;
        this.YeuCauKhamBenhTruocId = YeuCauKhamBenhTruocId;
        this.MaDichVu = MaDichVu;
    }
}
class YeuCauDichVuKyThuatTiepNhanViewModel {
    constructor(NhomGiaDichVuKhamBenhBenhVienId = null, YeuCauTiepNhanId = null, YeuCauKhamBenhId = null, LoaiDichVuKyThuat = null, DichVuKyThuatBenhVienId = null, MaDichVu = null) {
        this.NhomGiaDichVuKhamBenhBenhVienId = NhomGiaDichVuKhamBenhBenhVienId;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.LoaiDichVuKyThuat = LoaiDichVuKyThuat;
        this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
        this.MaDichVu = MaDichVu;
    }
}
class YeuCauVatTuBenhVienTiepNhanViewModel {
    constructor(YeuCauTiepNhanId = null, YeuCauKhamBenhId = null, YeuCauDichVuKyThuatId = null, VatTuBenhVienId = null, Ten = null, Ma = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
    }
}
class YeuCauDuocPhamBenhVienTiepNhanViewModel {
    constructor(YeuCauTiepNhanId = null, YeuCauKhamBenhId = null, YeuCauDichVuKyThuatId = null, DuocPhamBenhVienId = null, Ten = null, Ma = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.YeuCauKhamBenhId = YeuCauKhamBenhId;
        this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
    }
}
class ThemChiDinhDichVu {
    constructor(MaDichVuId = null, MaDichVuGoiId = null, LoaiGiaId = null, NoiThucHienId = null, SoLuong = 1, DonGia = null, ThanhTien = null, BHYTMucHuong = null, DoiTuongUuDaiId = null, DuocHuongBHYT = true, 
    // public LoaiDichVuKhac: number = 1,
    LaGoi = false, yeuCauTiepNhanId = null, benhNhanId = null, chuongTrinhGoiDichVuId = null, TenNhomDichVu = null, YeuCauGoiDichVuId = null, ThuocGoi = null, isCheckRowItem = true, ListDichVuCheckTruocDos = []) {
        this.MaDichVuId = MaDichVuId;
        this.MaDichVuGoiId = MaDichVuGoiId;
        this.LoaiGiaId = LoaiGiaId;
        this.NoiThucHienId = NoiThucHienId;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.BHYTMucHuong = BHYTMucHuong;
        this.DoiTuongUuDaiId = DoiTuongUuDaiId;
        this.DuocHuongBHYT = DuocHuongBHYT;
        this.LaGoi = LaGoi;
        this.yeuCauTiepNhanId = yeuCauTiepNhanId;
        this.benhNhanId = benhNhanId;
        this.chuongTrinhGoiDichVuId = chuongTrinhGoiDichVuId;
        this.TenNhomDichVu = TenNhomDichVu;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.ThuocGoi = ThuocGoi;
        this.isCheckRowItem = isCheckRowItem;
        this.ListDichVuCheckTruocDos = ListDichVuCheckTruocDos;
    }
}
class ThemChiDinhDichVuKyThuat {
    constructor(MaDichVuId = null, LoaiGiaId = 1, NoiThucHienId = null, SoLuong = 1, DonGia = null, ThanhTien = null, DoiTuongUuDaiId = null, yeuCauTiepNhanId = null) {
        this.MaDichVuId = MaDichVuId;
        this.LoaiGiaId = LoaiGiaId;
        this.NoiThucHienId = NoiThucHienId;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.DoiTuongUuDaiId = DoiTuongUuDaiId;
        this.yeuCauTiepNhanId = yeuCauTiepNhanId;
    }
}
class DiaChiBHYT {
    constructor(TinhThanh = null, TinhThanhId = null, QuanHuyen = null, QuanHuyenId = null, PhuongXa = null, PhuongXaId = null) {
        this.TinhThanh = TinhThanh;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyen = QuanHuyen;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXa = PhuongXa;
        this.PhuongXaId = PhuongXaId;
    }
}
class ThemBaoHiemTuNhan {
    constructor(Id = null, CongTyBaoHiemTuNhanId = null, MaSoThe = null, NgayHieuLuc = null, NgayHetHan = null, SoDienThoai = null, DiaChi = null) {
        this.Id = Id;
        this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
        this.MaSoThe = MaSoThe;
        this.NgayHieuLuc = NgayHieuLuc;
        this.NgayHetHan = NgayHetHan;
        this.SoDienThoai = SoDienThoai;
        this.DiaChi = DiaChi;
    }
}
class ThemBaoHiemTuNhanGridVo {
    constructor(Id = null, STT = null, CongTyBaoHiemTuNhanId = null, CongTyDisplay = null, MaSoThe = null, NgayHieuLuc = null, NgayHieuLucDisplay = null, NgayHetHan = null, NgayHetHanDisplay = null, SoDienThoai = null, DiaChi = null) {
        this.Id = Id;
        this.STT = STT;
        this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
        this.CongTyDisplay = CongTyDisplay;
        this.MaSoThe = MaSoThe;
        this.NgayHieuLuc = NgayHieuLuc;
        this.NgayHieuLucDisplay = NgayHieuLucDisplay;
        this.NgayHetHan = NgayHetHan;
        this.NgayHetHanDisplay = NgayHetHanDisplay;
        this.SoDienThoai = SoDienThoai;
        this.DiaChi = DiaChi;
    }
}
class GetDonGiaVo {
    constructor(DichVuKhamBenhBenhVienId = null, NhomGiaDichVuKhamBenhBenhVienId = null, IsCheckValidDonGia = null) {
        this.DichVuKhamBenhBenhVienId = DichVuKhamBenhBenhVienId;
        this.NhomGiaDichVuKhamBenhBenhVienId = NhomGiaDichVuKhamBenhBenhVienId;
        this.IsCheckValidDonGia = IsCheckValidDonGia;
    }
}
class AddGoiForUpdateView {
    constructor(YeuCauTiepNhanId = null, MucHuong = null, LstGrid = []) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.MucHuong = MucHuong;
        this.LstGrid = LstGrid;
    }
}
class ChiDinhDichVuGridVo {
    constructor(TinhTrangDisplay = null, IsDontHavePermissionChangeNoiThucHien = null, CoGiaBHYT = null, STT = null, Id = null, MaDichVuId = null, Ma = null, TenDichVu = null, LoaiGia = null, LoaiGiaId = null, SoLuong = 1, DonGiaDisplay = null, DonGia = null, DonGiaSauChietKhau = null, ThanhTienDisplay = null, ThanhTien = null, ThanhTienSauChietKhau = null, BHYTThanhToanDisplay = null, TLMGDisplay = null, TLMG = null, SoTienMGDisplay = null, SoTienMG = null, BnThanhToanDisplay = null, BnThanhToan = null, NoiThucHienDisplay = null, BHYTThanhToan = null, BHYTThanhToanChuaBaoGomMucHuong = null, Nhom = null, NhomId = null, LoaiDichVuKhac = null, IsHaveNoiThucHien = null, NoiThucHienId = null, DuocHuongBHYT = null, DuocHuongBHYTPopup = null, 
    //Goi co chiet khau
    IsGoiCoChietKhau = false, GoiCoChietKhauId = null, TenGoiChietKhau = null, TyLeChietKhau = null, TyLeChietKhauDisplay = null, DuocGiamTrongGoi = null, ThanhTienTrongGoi = null, TongChiPhiGoi = null, KhoaPhongId = null, GiaBHYT = null, TiLeBaoHiemThanhToan = null, NoiThucHienModelText = null, 
    //Thach
    CongNo = null, SoTienMienGiam = null, ChuongTrinhGoiDichVuId = null, 
    //nam
    isCheckValueRowItemCuoiCung = null, isCheckRowItem = null, 
    //BVHD-3825
    YeuCauGoiDichVuKhuyenMaiId = null) {
        this.TinhTrangDisplay = TinhTrangDisplay;
        this.IsDontHavePermissionChangeNoiThucHien = IsDontHavePermissionChangeNoiThucHien;
        this.CoGiaBHYT = CoGiaBHYT;
        this.STT = STT;
        this.Id = Id;
        this.MaDichVuId = MaDichVuId;
        this.Ma = Ma;
        this.TenDichVu = TenDichVu;
        this.LoaiGia = LoaiGia;
        this.LoaiGiaId = LoaiGiaId;
        this.SoLuong = SoLuong;
        this.DonGiaDisplay = DonGiaDisplay;
        this.DonGia = DonGia;
        this.DonGiaSauChietKhau = DonGiaSauChietKhau;
        this.ThanhTienDisplay = ThanhTienDisplay;
        this.ThanhTien = ThanhTien;
        this.ThanhTienSauChietKhau = ThanhTienSauChietKhau;
        this.BHYTThanhToanDisplay = BHYTThanhToanDisplay;
        this.TLMGDisplay = TLMGDisplay;
        this.TLMG = TLMG;
        this.SoTienMGDisplay = SoTienMGDisplay;
        this.SoTienMG = SoTienMG;
        this.BnThanhToanDisplay = BnThanhToanDisplay;
        this.BnThanhToan = BnThanhToan;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
        this.BHYTThanhToan = BHYTThanhToan;
        this.BHYTThanhToanChuaBaoGomMucHuong = BHYTThanhToanChuaBaoGomMucHuong;
        this.Nhom = Nhom;
        this.NhomId = NhomId;
        this.LoaiDichVuKhac = LoaiDichVuKhac;
        this.IsHaveNoiThucHien = IsHaveNoiThucHien;
        this.NoiThucHienId = NoiThucHienId;
        this.DuocHuongBHYT = DuocHuongBHYT;
        this.DuocHuongBHYTPopup = DuocHuongBHYTPopup;
        this.IsGoiCoChietKhau = IsGoiCoChietKhau;
        this.GoiCoChietKhauId = GoiCoChietKhauId;
        this.TenGoiChietKhau = TenGoiChietKhau;
        this.TyLeChietKhau = TyLeChietKhau;
        this.TyLeChietKhauDisplay = TyLeChietKhauDisplay;
        this.DuocGiamTrongGoi = DuocGiamTrongGoi;
        this.ThanhTienTrongGoi = ThanhTienTrongGoi;
        this.TongChiPhiGoi = TongChiPhiGoi;
        this.KhoaPhongId = KhoaPhongId;
        this.GiaBHYT = GiaBHYT;
        this.TiLeBaoHiemThanhToan = TiLeBaoHiemThanhToan;
        this.NoiThucHienModelText = NoiThucHienModelText;
        this.CongNo = CongNo;
        this.SoTienMienGiam = SoTienMienGiam;
        this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
        this.isCheckValueRowItemCuoiCung = isCheckValueRowItemCuoiCung;
        this.isCheckRowItem = isCheckRowItem;
        this.YeuCauGoiDichVuKhuyenMaiId = YeuCauGoiDichVuKhuyenMaiId;
    }
}
class ChiDinhDichVuKyThuatGridVo {
    constructor(MaDichVuId = null, Ma = null, TenDichVu = null, SoLuong = 1, DonGiaDisplay = null, DonGia = null, ThanhTienDisplay = null, ThanhTien = null, BHYTThanhToanDisplay = null, TLMGDisplay = null, TLMG = null, SoTienMGDisplay = null, SoTienMG = null, BnThanhToanDisplay = null, BnThanhToan = null, NoiThucHienDisplay = null, Nhom = null, LoaiGia = null, LoaiGiaId = null, NoiThucHienId = null, KhoaPhongId = null, GiaBHYT = null, TiLeBaoHiemThanhToan = null, DuocHuongBHYT = null) {
        this.MaDichVuId = MaDichVuId;
        this.Ma = Ma;
        this.TenDichVu = TenDichVu;
        this.SoLuong = SoLuong;
        this.DonGiaDisplay = DonGiaDisplay;
        this.DonGia = DonGia;
        this.ThanhTienDisplay = ThanhTienDisplay;
        this.ThanhTien = ThanhTien;
        this.BHYTThanhToanDisplay = BHYTThanhToanDisplay;
        this.TLMGDisplay = TLMGDisplay;
        this.TLMG = TLMG;
        this.SoTienMGDisplay = SoTienMGDisplay;
        this.SoTienMG = SoTienMG;
        this.BnThanhToanDisplay = BnThanhToanDisplay;
        this.BnThanhToan = BnThanhToan;
        this.NoiThucHienDisplay = NoiThucHienDisplay;
        this.Nhom = Nhom;
        this.LoaiGia = LoaiGia;
        this.LoaiGiaId = LoaiGiaId;
        this.NoiThucHienId = NoiThucHienId;
        this.KhoaPhongId = KhoaPhongId;
        this.GiaBHYT = GiaBHYT;
        this.TiLeBaoHiemThanhToan = TiLeBaoHiemThanhToan;
        this.DuocHuongBHYT = DuocHuongBHYT;
    }
}
class TimKiemBenhNhanGridVo {
    constructor(MaBN = null, MaBHYT = null, BHYTMaSoThe = null, HoTen = null, NgaySinh = null, NgaySinhDisplay = null, GioiTinh = null, GioiTinhDisplay = null, SoChungMinhThu = null, SoDienThoai = null, DiaChi = null, Id = 0, STT = null, ThangSinh = null, NamSinh = null, NgaySinhFormat = null) {
        this.MaBN = MaBN;
        this.MaBHYT = MaBHYT;
        this.BHYTMaSoThe = BHYTMaSoThe;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.NgaySinhDisplay = NgaySinhDisplay;
        this.GioiTinh = GioiTinh;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.SoChungMinhThu = SoChungMinhThu;
        this.SoDienThoai = SoDienThoai;
        this.DiaChi = DiaChi;
        this.Id = Id;
        this.STT = STT;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgaySinhFormat = NgaySinhFormat;
    }
}
class TimKiemBenhNhanSearch {
    constructor(MaBenhNhan = null, MaBHYT = null, HoTen = null, NgaySinh = null, NgaySinhFormat = null, CMND = null, DienThoai = null, DiaChi = null) {
        this.MaBenhNhan = MaBenhNhan;
        this.MaBHYT = MaBHYT;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.NgaySinhFormat = NgaySinhFormat;
        this.CMND = CMND;
        this.DienThoai = DienThoai;
        this.DiaChi = DiaChi;
    }
}
class DataTimKiem {
    constructor(searchBenhNhan = null, data = []) {
        this.searchBenhNhan = searchBenhNhan;
        this.data = data;
    }
}
class TimKiemBenhNhanPopup {
    constructor(searchPopup = null, searchBenhNhan = null) {
        this.searchPopup = searchPopup;
        this.searchBenhNhan = searchBenhNhan;
    }
}
class GridUpdate {
    constructor(tuNhap = null, model = null, isChecked = null, maDichVuId = null, nhom = null, yeuCauTiepNhanId = null, mucHuong = null, NoiThucHienId = null, HoTen = null, NgaySinh = null, lstChiDinhDichVu = [], 
    // cập nhật hủy dịch vụ đã hủy thanh toán
    LyDoHuyDichVu = null, ListDichVuCheckTruocDos = []) {
        this.tuNhap = tuNhap;
        this.model = model;
        this.isChecked = isChecked;
        this.maDichVuId = maDichVuId;
        this.nhom = nhom;
        this.yeuCauTiepNhanId = yeuCauTiepNhanId;
        this.mucHuong = mucHuong;
        this.NoiThucHienId = NoiThucHienId;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.lstChiDinhDichVu = lstChiDinhDichVu;
        this.LyDoHuyDichVu = LyDoHuyDichVu;
        this.ListDichVuCheckTruocDos = ListDichVuCheckTruocDos;
    }
}
class ListChiDinhNeedUpdate {
    constructor(Nhom = null, DichVuId = null) {
        this.Nhom = Nhom;
        this.DichVuId = DichVuId;
    }
}
class DefaultValueTNBNModel {
    constructor(DanTocId = null, HinhThucDenId = null, LyDoTiepNhanId = null, QuocTichId = null, TinhThanhPhoId = null) {
        this.DanTocId = DanTocId;
        this.HinhThucDenId = HinhThucDenId;
        this.LyDoTiepNhanId = LyDoTiepNhanId;
        this.QuocTichId = QuocTichId;
        this.TinhThanhPhoId = TinhThanhPhoId;
    }
}
class ListDichVuCheckTruocDo {
    constructor(Id = null, NhomId = null) {
        this.Id = Id;
        this.NhomId = NhomId;
    }
}
class XetNghiemCovid {
    constructor(BieuHienLamSang = null, DichTeSarsCoV2 = null, LoaiBenhPham = null) {
        this.BieuHienLamSang = BieuHienLamSang;
        this.DichTeSarsCoV2 = DichTeSarsCoV2;
        this.LoaiBenhPham = LoaiBenhPham;
    }
}
class DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham {
    constructor(Ids = [], LoaiMauXetNghiem = null, LoaiMauXetNghiemText = null) {
        this.Ids = Ids;
        this.LoaiMauXetNghiem = LoaiMauXetNghiem;
        this.LoaiMauXetNghiemText = LoaiMauXetNghiemText;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~3cfd0d41-es2015.js.map