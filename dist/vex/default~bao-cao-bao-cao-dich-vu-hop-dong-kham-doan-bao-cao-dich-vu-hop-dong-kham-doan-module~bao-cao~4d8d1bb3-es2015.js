(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~4d8d1bb3"],{

/***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts ***!
  \********************************************************************************************/
/*! exports provided: TiepNhanNoiTruTimKiem, TiepNhanNoiTruTimKiemTimKiemTrangThai, TiepNhanNoiTruTimKiemTimKiemDateRange, ThongTinYeuCauTiepNoiTru, ThongTinNoiTruBenhAn, NoiTruBenhAnYeuCauNhapVien, SoDoGiuongTiepNhanNoiTruFillter, TiepNhanNoiTruChiDinh, TiepNhanNoiTruChiDinhChonGiuong, ThongTinDoiTuongTiepNhan, ThongTinBenhNhanTimKiemBHYT, ThongTinDoiTuongSoSinhTiepNhan, YeuCauTiepNhanTheBHYT, GiayMienCungChiTra, ThongTinBaoHiemTuNhan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiem", function() { return TiepNhanNoiTruTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiemTimKiemTrangThai", function() { return TiepNhanNoiTruTimKiemTimKiemTrangThai; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiemTimKiemDateRange", function() { return TiepNhanNoiTruTimKiemTimKiemDateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNoiTru", function() { return ThongTinYeuCauTiepNoiTru; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinNoiTruBenhAn", function() { return ThongTinNoiTruBenhAn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruBenhAnYeuCauNhapVien", function() { return NoiTruBenhAnYeuCauNhapVien; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongTiepNhanNoiTruFillter", function() { return SoDoGiuongTiepNhanNoiTruFillter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruChiDinh", function() { return TiepNhanNoiTruChiDinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruChiDinhChonGiuong", function() { return TiepNhanNoiTruChiDinhChonGiuong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDoiTuongTiepNhan", function() { return ThongTinDoiTuongTiepNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhanTimKiemBHYT", function() { return ThongTinBenhNhanTimKiemBHYT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDoiTuongSoSinhTiepNhan", function() { return ThongTinDoiTuongSoSinhTiepNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTiepNhanTheBHYT", function() { return YeuCauTiepNhanTheBHYT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayMienCungChiTra", function() { return GiayMienCungChiTra; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBaoHiemTuNhan", function() { return ThongTinBaoHiemTuNhan; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TiepNhanNoiTruTimKiem {
    constructor(SearchString = null, KhoaPhongId = null, TrangThai = new TiepNhanNoiTruTimKiemTimKiemTrangThai(), TuNgayDenNgay = new TiepNhanNoiTruTimKiemTimKiemDateRange()) {
        this.SearchString = SearchString;
        this.KhoaPhongId = KhoaPhongId;
        this.TrangThai = TrangThai;
        this.TuNgayDenNgay = TuNgayDenNgay;
    }
}
class TiepNhanNoiTruTimKiemTimKiemTrangThai {
    constructor(ChoQuyetToan = true, ChuaTaoBenhAn = true, DaTaoBenhAn = false) {
        this.ChoQuyetToan = ChoQuyetToan;
        this.ChuaTaoBenhAn = ChuaTaoBenhAn;
        this.DaTaoBenhAn = DaTaoBenhAn;
    }
}
class TiepNhanNoiTruTimKiemTimKiemDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class ThongTinYeuCauTiepNoiTru {
    constructor(YeuCauTiepNhanId = null, MaBenhNhan = null, BenhNhanId = null, MaYeuCauTiepNhan = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, Tuoi = null, TenGioiTinh = null, Tuyen = null, BHYTMucHuong = null, DanToc = null, DiaChiDayDu = null, NgheNghiep = null, DoiTuong = null, SoDuTaiKhoan = 0, SoDuTaiKhoanConLai = 0, NoiTruBenhAn = new ThongTinNoiTruBenhAn(), ThongTinNhapVien = new NoiTruBenhAnYeuCauNhapVien(), 
    //BVHD-3800
    LaCapCuu = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.MaBenhNhan = MaBenhNhan;
        this.BenhNhanId = BenhNhanId;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.Tuoi = Tuoi;
        this.TenGioiTinh = TenGioiTinh;
        this.Tuyen = Tuyen;
        this.BHYTMucHuong = BHYTMucHuong;
        this.DanToc = DanToc;
        this.DiaChiDayDu = DiaChiDayDu;
        this.NgheNghiep = NgheNghiep;
        this.DoiTuong = DoiTuong;
        this.SoDuTaiKhoan = SoDuTaiKhoan;
        this.SoDuTaiKhoanConLai = SoDuTaiKhoanConLai;
        this.NoiTruBenhAn = NoiTruBenhAn;
        this.ThongTinNhapVien = ThongTinNhapVien;
        this.LaCapCuu = LaCapCuu;
    }
}
class ThongTinNoiTruBenhAn {
    constructor(Id = 0, BenhNhanId = null, SoBenhAn = null, SoLuuTru = null, LaCapCuu = null, LoaiBenhAn = null, TenLoaiBenhAn = null, ThoiDiemTaoBenhAn = null, NhanVienTaoBenhAnId = null, KhoaPhongNhapVienId = null, ThoiDiemNhapVien = null, ThoiDiemTiepNhanNgoaiTru = null) {
        this.Id = Id;
        this.BenhNhanId = BenhNhanId;
        this.SoBenhAn = SoBenhAn;
        this.SoLuuTru = SoLuuTru;
        this.LaCapCuu = LaCapCuu;
        this.LoaiBenhAn = LoaiBenhAn;
        this.TenLoaiBenhAn = TenLoaiBenhAn;
        this.ThoiDiemTaoBenhAn = ThoiDiemTaoBenhAn;
        this.NhanVienTaoBenhAnId = NhanVienTaoBenhAnId;
        this.KhoaPhongNhapVienId = KhoaPhongNhapVienId;
        this.ThoiDiemNhapVien = ThoiDiemNhapVien;
        this.ThoiDiemTiepNhanNgoaiTru = ThoiDiemTiepNhanNgoaiTru;
    }
}
class NoiTruBenhAnYeuCauNhapVien {
    constructor(KhoaNhapVienId = null, KhoaNhapVien = null, ChanDoanNhapVien = null, TrangThaiDieuTri = null, TenTrangThaiDieuTri = null, NoiChiDinh = null, ChanDoanKemTheo = null, NguoiTiepNhan = null, BacSiChiDinh = null, LyDoNhapVien = null) {
        this.KhoaNhapVienId = KhoaNhapVienId;
        this.KhoaNhapVien = KhoaNhapVien;
        this.ChanDoanNhapVien = ChanDoanNhapVien;
        this.TrangThaiDieuTri = TrangThaiDieuTri;
        this.TenTrangThaiDieuTri = TenTrangThaiDieuTri;
        this.NoiChiDinh = NoiChiDinh;
        this.ChanDoanKemTheo = ChanDoanKemTheo;
        this.NguoiTiepNhan = NguoiTiepNhan;
        this.BacSiChiDinh = BacSiChiDinh;
        this.LyDoNhapVien = LyDoNhapVien;
    }
}
class SoDoGiuongTiepNhanNoiTruFillter {
    constructor(KhoaPhongId = null, PhongBenhVienId = null, GiuongTrong = true, GiuongDaCoBenhNhan = true, ThoiGianNhan = null, ThoiGianTra = null, YeuCauDichVuGiuongBenhVienId = null, BaoPhong = false, YeuCauTiepNhanNoiTruId = null) {
        this.KhoaPhongId = KhoaPhongId;
        this.PhongBenhVienId = PhongBenhVienId;
        this.GiuongTrong = GiuongTrong;
        this.GiuongDaCoBenhNhan = GiuongDaCoBenhNhan;
        this.ThoiGianNhan = ThoiGianNhan;
        this.ThoiGianTra = ThoiGianTra;
        this.YeuCauDichVuGiuongBenhVienId = YeuCauDichVuGiuongBenhVienId;
        this.BaoPhong = BaoPhong;
        this.YeuCauTiepNhanNoiTruId = YeuCauTiepNhanNoiTruId;
    }
}
class TiepNhanNoiTruChiDinh {
    constructor(YeuCauTiepNhanId = null, BacSiDieuTriId = null, DieuDuongId = null, TuNgay = null, DichVuGiuongId = null, DichVuGiuongDisplay = null, GiuongId = null, TenGiuong = null, LoaiGiuong = null, BaoPhong = null, ThoiGianNhan = null, KhongCanChiDinhGiuong = false, YeuCauGoiDichVuId = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BacSiDieuTriId = BacSiDieuTriId;
        this.DieuDuongId = DieuDuongId;
        this.TuNgay = TuNgay;
        this.DichVuGiuongId = DichVuGiuongId;
        this.DichVuGiuongDisplay = DichVuGiuongDisplay;
        this.GiuongId = GiuongId;
        this.TenGiuong = TenGiuong;
        this.LoaiGiuong = LoaiGiuong;
        this.BaoPhong = BaoPhong;
        this.ThoiGianNhan = ThoiGianNhan;
        this.KhongCanChiDinhGiuong = KhongCanChiDinhGiuong;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
    }
}
class TiepNhanNoiTruChiDinhChonGiuong {
    constructor(KhoaId = null, TenKhoa = null, BaoPhong = null, GiuongId = null, TenGiuong = null, PhongId = null, TenPhong = null, Tang = null, ThoiGianNhan = null, ThoiGianTra = null, YeuCauDichVuGiuongBenhVienId = null) {
        this.KhoaId = KhoaId;
        this.TenKhoa = TenKhoa;
        this.BaoPhong = BaoPhong;
        this.GiuongId = GiuongId;
        this.TenGiuong = TenGiuong;
        this.PhongId = PhongId;
        this.TenPhong = TenPhong;
        this.Tang = Tang;
        this.ThoiGianNhan = ThoiGianNhan;
        this.ThoiGianTra = ThoiGianTra;
        this.YeuCauDichVuGiuongBenhVienId = YeuCauDichVuGiuongBenhVienId;
    }
}
class ThongTinDoiTuongTiepNhan {
    constructor(Id = null, BenhNhanId = null, 
    // public BHYTNgayHieuLuc: Date = null,
    // public BHYTNgayHetHan: Date = null,
    // public BHYTMucHuong: number = null,
    // public BHYTNgayDu5Nam: Date = null,
    // public BHYTDiaChi: string = null,
    // public NoiDangKyBHYT: string = null,
    // public BHYTMaSoThe: string = null,
    // public BHYTMaDKBD: string = null,
    CoBHYT = false, LyDoVaoVien = null, CoBHTN = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, NgayThangNamSinh = null, SoChungMinhThu = null, GioiTinh = null, NgheNghiepId = null, QuocTichId = 1, TinhThanhId = null, QuanHuyenId = null, PhuongXaId = null, DiaChi = null, SoDienThoai = null, Email = null, NoiLamViec = null, DanTocId = null, HoTenBo = null, TrinhDoVanHoaCuaBo = null, NgheNghiepCuaBoId = null, HoTenMe = null, TrinhDoVanHoaCuaMe = null, NgheNghiepCuaMeId = null, 
    //người liên hệ
    NguoiLienHeHoTen = null, NguoiLienHeQuanHeNhanThanId = null, NguoiLienHeSoDienThoai = null, NguoiLienHeEmail = null, NguoiLienHeDiaChi = null, NguoiLienHePhuongXaId = null, NguoiLienHeQuanHuyenId = null, NguoiLienHeTinhThanhId = null, IsCheckedBHYT = null, TuNhap = false, YeuCauTiepNhanMeId = null, YeuCauGoiDichVuId = null, 
    // thông tin thẻ BHYT
    YeuCauTiepNhanTheBHYTs = new Array(), YeuCauTiepNhanCongTyBaoHiemTuNhans = new Array(), BieuHienLamSang = null, DichTeSarsCoV2 = null) {
        this.Id = Id;
        this.BenhNhanId = BenhNhanId;
        this.CoBHYT = CoBHYT;
        this.LyDoVaoVien = LyDoVaoVien;
        this.CoBHTN = CoBHTN;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgayThangNamSinh = NgayThangNamSinh;
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
        this.DanTocId = DanTocId;
        this.HoTenBo = HoTenBo;
        this.TrinhDoVanHoaCuaBo = TrinhDoVanHoaCuaBo;
        this.NgheNghiepCuaBoId = NgheNghiepCuaBoId;
        this.HoTenMe = HoTenMe;
        this.TrinhDoVanHoaCuaMe = TrinhDoVanHoaCuaMe;
        this.NgheNghiepCuaMeId = NgheNghiepCuaMeId;
        this.NguoiLienHeHoTen = NguoiLienHeHoTen;
        this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
        this.NguoiLienHeSoDienThoai = NguoiLienHeSoDienThoai;
        this.NguoiLienHeEmail = NguoiLienHeEmail;
        this.NguoiLienHeDiaChi = NguoiLienHeDiaChi;
        this.NguoiLienHePhuongXaId = NguoiLienHePhuongXaId;
        this.NguoiLienHeQuanHuyenId = NguoiLienHeQuanHuyenId;
        this.NguoiLienHeTinhThanhId = NguoiLienHeTinhThanhId;
        this.IsCheckedBHYT = IsCheckedBHYT;
        this.TuNhap = TuNhap;
        this.YeuCauTiepNhanMeId = YeuCauTiepNhanMeId;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.YeuCauTiepNhanTheBHYTs = YeuCauTiepNhanTheBHYTs;
        this.YeuCauTiepNhanCongTyBaoHiemTuNhans = YeuCauTiepNhanCongTyBaoHiemTuNhans;
        this.BieuHienLamSang = BieuHienLamSang;
        this.DichTeSarsCoV2 = DichTeSarsCoV2;
    }
}
class ThongTinBenhNhanTimKiemBHYT {
    constructor(MaThe = null, TenBenhNhan = null, NgaySinh = null, NgaySinhDisplay = null, NamSinh = null) {
        this.MaThe = MaThe;
        this.TenBenhNhan = TenBenhNhan;
        this.NgaySinh = NgaySinh;
        this.NgaySinhDisplay = NgaySinhDisplay;
        this.NamSinh = NamSinh;
    }
}
class ThongTinDoiTuongSoSinhTiepNhan {
    constructor(YeuCauTiepNhanId = null, KhoaNhapVienId = null, KhoaNhapVien = null, MaBenhAnMe = null, LyDoVaoVien = null, HoTen = null, NgaySinh = null, ThangSinh = null, NamSinh = null, NgayThangNamSinh = null, SoChungMinhThu = null, GioiTinh = null, GioiTinhDisplay = null, NgheNghiepId = null, QuocTichId = 1, TinhThanhId = null, QuanHuyenId = null, PhuongXaId = null, DiaChi = null, SoDienThoai = null, Email = null, NoiLamViec = null, TenKhaiSinh = null, TenBanDau = null, DanTocId = null, 
    //người liên hệ
    NguoiLienHeHoTen = null, NguoiLienHeQuanHeNhanThanId = null, NguoiLienHeSoDienThoai = null, NguoiLienHeEmail = null, NguoiLienHeDiaChi = null, NguoiLienHePhuongXaId = null, NguoiLienHeQuanHuyenId = null, NguoiLienHeTinhThanhId = null, IsCheckedBHYT = null, TuNhap = false, YeuCauGoiDichVuId = null, KhoaChuyenBenhAnSoSinhVeId = null, LucDeSoSinh = null) {
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.KhoaNhapVienId = KhoaNhapVienId;
        this.KhoaNhapVien = KhoaNhapVien;
        this.MaBenhAnMe = MaBenhAnMe;
        this.LyDoVaoVien = LyDoVaoVien;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThangSinh = ThangSinh;
        this.NamSinh = NamSinh;
        this.NgayThangNamSinh = NgayThangNamSinh;
        this.SoChungMinhThu = SoChungMinhThu;
        this.GioiTinh = GioiTinh;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.NgheNghiepId = NgheNghiepId;
        this.QuocTichId = QuocTichId;
        this.TinhThanhId = TinhThanhId;
        this.QuanHuyenId = QuanHuyenId;
        this.PhuongXaId = PhuongXaId;
        this.DiaChi = DiaChi;
        this.SoDienThoai = SoDienThoai;
        this.Email = Email;
        this.NoiLamViec = NoiLamViec;
        this.TenKhaiSinh = TenKhaiSinh;
        this.TenBanDau = TenBanDau;
        this.DanTocId = DanTocId;
        this.NguoiLienHeHoTen = NguoiLienHeHoTen;
        this.NguoiLienHeQuanHeNhanThanId = NguoiLienHeQuanHeNhanThanId;
        this.NguoiLienHeSoDienThoai = NguoiLienHeSoDienThoai;
        this.NguoiLienHeEmail = NguoiLienHeEmail;
        this.NguoiLienHeDiaChi = NguoiLienHeDiaChi;
        this.NguoiLienHePhuongXaId = NguoiLienHePhuongXaId;
        this.NguoiLienHeQuanHuyenId = NguoiLienHeQuanHuyenId;
        this.NguoiLienHeTinhThanhId = NguoiLienHeTinhThanhId;
        this.IsCheckedBHYT = IsCheckedBHYT;
        this.TuNhap = TuNhap;
        this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
        this.KhoaChuyenBenhAnSoSinhVeId = KhoaChuyenBenhAnSoSinhVeId;
        this.LucDeSoSinh = LucDeSoSinh;
    }
}
class YeuCauTiepNhanTheBHYT {
    constructor(Id = 0, YeuCauTiepNhanId = null, BenhNhanId = null, MaSoThe = null, MucHuong = null, MaDKBD = null, NoiDangKyBHYT = null, NgayHieuLuc = null, NgayHetHan = null, DiaChi = null, CoQuanBHXH = null, NgayDu5Nam = null, NgayDuocMienCungChiTra = null, MaKhuVuc = null, DuocMienCungChiTra = null, GiayMienCungChiTraId = null, TinhTrangThe = null, IsCheckedBHYT = null, DuocGiaHanThe = null, DisableGiaHanThe = false, DisabledGiaHanView = false, IsQuaHanTheBHYT = false, IsChange = false, GiayMienCungChiTra = null) {
        this.Id = Id;
        this.YeuCauTiepNhanId = YeuCauTiepNhanId;
        this.BenhNhanId = BenhNhanId;
        this.MaSoThe = MaSoThe;
        this.MucHuong = MucHuong;
        this.MaDKBD = MaDKBD;
        this.NoiDangKyBHYT = NoiDangKyBHYT;
        this.NgayHieuLuc = NgayHieuLuc;
        this.NgayHetHan = NgayHetHan;
        this.DiaChi = DiaChi;
        this.CoQuanBHXH = CoQuanBHXH;
        this.NgayDu5Nam = NgayDu5Nam;
        this.NgayDuocMienCungChiTra = NgayDuocMienCungChiTra;
        this.MaKhuVuc = MaKhuVuc;
        this.DuocMienCungChiTra = DuocMienCungChiTra;
        this.GiayMienCungChiTraId = GiayMienCungChiTraId;
        this.TinhTrangThe = TinhTrangThe;
        this.IsCheckedBHYT = IsCheckedBHYT;
        this.DuocGiaHanThe = DuocGiaHanThe;
        this.DisableGiaHanThe = DisableGiaHanThe;
        this.DisabledGiaHanView = DisabledGiaHanView;
        this.IsQuaHanTheBHYT = IsQuaHanTheBHYT;
        this.IsChange = IsChange;
        this.GiayMienCungChiTra = GiayMienCungChiTra;
    }
}
class GiayMienCungChiTra {
    constructor(Id = 0, Ma = null, Ten = null, TenGuid = null, KichThuoc = null, DuongDan = null, LoaiTapTin = null, MoTa = null) {
        this.Id = Id;
        this.Ma = Ma;
        this.Ten = Ten;
        this.TenGuid = TenGuid;
        this.KichThuoc = KichThuoc;
        this.DuongDan = DuongDan;
        this.LoaiTapTin = LoaiTapTin;
        this.MoTa = MoTa;
    }
}
class ThongTinBaoHiemTuNhan {
    constructor(Id = 0, CongTyBaoHiemTuNhanId = null, TenCongTyBaoHiemTuNhan = null, MaSoThe = null, NgayHieuLuc = null, NgayHetHan = null, SoDienThoai = null, DiaChi = null) {
        this.Id = Id;
        this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
        this.TenCongTyBaoHiemTuNhan = TenCongTyBaoHiemTuNhan;
        this.MaSoThe = MaSoThe;
        this.NgayHieuLuc = NgayHieuLuc;
        this.NgayHetHan = NgayHetHan;
        this.SoDienThoai = SoDienThoai;
        this.DiaChi = DiaChi;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~4d8d1bb3-es2015.js.map