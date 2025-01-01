(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~danh-muc-bao-hiem-y-te-bao-hiem-y-te-module~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach~f884ec67"],{

/***/ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts ***!
  \****************************************************************************/
/*! exports provided: BaoHiemYTe, ThongTinBenhNhan, dsLichSuKT2018, dsLichSuKCB2018, Login, TenFile, XMLThongTinBenhNhan, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoHiemYTe", function() { return BaoHiemYTe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhan", function() { return ThongTinBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsLichSuKT2018", function() { return dsLichSuKT2018; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsLichSuKCB2018", function() { return dsLichSuKCB2018; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenFile", function() { return TenFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLThongTinBenhNhan", function() { return XMLThongTinBenhNhan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietThuoc", function() { return HoSoChiTietThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDVKT", function() { return HoSoChiTietDVKT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoCanLamSang", function() { return HoSoCanLamSang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDienBienBenh", function() { return HoSoChiTietDienBienBenh; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoHiemYTe {
    constructor(maKetQua = null, ghiChu = null, maThe = null, hoTen = null, ngaySinh = null, gioiTinh = null, diaChi = null, maDKBD = null, cqBHXH = null, gtTheTu = null, gtTheDen = null, maKV = null, ngayDu5Nam = null, maSoBHXH = null, maTheCu = null, maTheMoi = null, gtTheTuMoi = null, gtTheDenMoi = null, dsLichSuKCB2018 = [], dsLichSuKT2018 = [], isConnectSuccessfully = true) {
        this.maKetQua = maKetQua;
        this.ghiChu = ghiChu;
        this.maThe = maThe;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.gioiTinh = gioiTinh;
        this.diaChi = diaChi;
        this.maDKBD = maDKBD;
        this.cqBHXH = cqBHXH;
        this.gtTheTu = gtTheTu;
        this.gtTheDen = gtTheDen;
        this.maKV = maKV;
        this.ngayDu5Nam = ngayDu5Nam;
        this.maSoBHXH = maSoBHXH;
        this.maTheCu = maTheCu;
        this.maTheMoi = maTheMoi;
        this.gtTheTuMoi = gtTheTuMoi;
        this.gtTheDenMoi = gtTheDenMoi;
        this.dsLichSuKCB2018 = dsLichSuKCB2018;
        this.dsLichSuKT2018 = dsLichSuKT2018;
        this.isConnectSuccessfully = isConnectSuccessfully;
    }
}
class ThongTinBenhNhan {
    constructor(MaThe = null, TenBenhNhan = null, NgaySinh = null, NgaySinhDisplay = null, NamSinh = null, MessageErrFromBHYT = null) {
        this.MaThe = MaThe;
        this.TenBenhNhan = TenBenhNhan;
        this.NgaySinh = NgaySinh;
        this.NgaySinhDisplay = NgaySinhDisplay;
        this.NamSinh = NamSinh;
        this.MessageErrFromBHYT = MessageErrFromBHYT;
    }
}
class dsLichSuKT2018 {
    constructor(userKT = null, thoiGianKT = null, thongBao = null, maLoi = null, tenCSKCB = null, maCSKCB = null, thoiGianKTDisplay = null, thoiGianKTDateTime = null) {
        this.userKT = userKT;
        this.thoiGianKT = thoiGianKT;
        this.thongBao = thongBao;
        this.maLoi = maLoi;
        this.tenCSKCB = tenCSKCB;
        this.maCSKCB = maCSKCB;
        this.thoiGianKTDisplay = thoiGianKTDisplay;
        this.thoiGianKTDateTime = thoiGianKTDateTime;
    }
}
class dsLichSuKCB2018 {
    constructor(maHoSo = null, maCSKCB = null, ngayVao = null, ngayRa = null, tenBenh = null, tinhTrang = null, kqDieuTri = null, lyDoVV = null, TEMP1 = null, TEMP2 = null, TEMP3 = null, TEMP4 = null, TEMP5 = null, coSoKCB = null, lyDoVVDisplay = null, kqDieuTriDisplay = null, tinhTrangDisplay = null, ngayRaDisplay = null, ngayVaoDisplay = null, ngayVaoDateTime = null, ngayRaDateTime = null) {
        this.maHoSo = maHoSo;
        this.maCSKCB = maCSKCB;
        this.ngayVao = ngayVao;
        this.ngayRa = ngayRa;
        this.tenBenh = tenBenh;
        this.tinhTrang = tinhTrang;
        this.kqDieuTri = kqDieuTri;
        this.lyDoVV = lyDoVV;
        this.TEMP1 = TEMP1;
        this.TEMP2 = TEMP2;
        this.TEMP3 = TEMP3;
        this.TEMP4 = TEMP4;
        this.TEMP5 = TEMP5;
        this.coSoKCB = coSoKCB;
        this.lyDoVVDisplay = lyDoVVDisplay;
        this.kqDieuTriDisplay = kqDieuTriDisplay;
        this.tinhTrangDisplay = tinhTrangDisplay;
        this.ngayRaDisplay = ngayRaDisplay;
        this.ngayVaoDisplay = ngayVaoDisplay;
        this.ngayVaoDateTime = ngayVaoDateTime;
        this.ngayRaDateTime = ngayRaDateTime;
    }
}
class Login {
    constructor(userName = null, pass = null) {
        this.userName = userName;
        this.pass = pass;
    }
}
class TenFile {
    constructor(TenFile = null, DuLieu = null) {
        this.TenFile = TenFile;
        this.DuLieu = DuLieu;
    }
}
class XMLThongTinBenhNhan {
    constructor(MaLienKet = null, MaBenhNhan = null, HoTen = null, NgaySinh = null, ThoiGian = null, GioiTinh = null, GioiTinhText = null, DiaChi = null, MaThe = null, MaCoSoKCBBanDau = null, GiaTriTheTu = null, GiaTriTheDen = null, MienCungChiTra = null, TenBenh = null, MaBenh = null, MaBenhKhac = null, LyDoVaoVien = null, LyDoVaoVienText = null, MaNoiChuyen = null, MaTaiNan = null, MaTaiNanText = null, NgayVao = null, NgayVaoTime = null, NgayRaTime = null, NgayRa = null, SoNgayDieuTri = null, KetQuaDieuTri = null, KetQuaDieuTriText = null, TinhTrangRaVien = null, TinhTrangRaVienText = null, NgayThanhToan = null, NgayThanhToanTime = null, 
    // public  MucHuong : number=null,
    TienThuoc = null, TienVatTuYTe = null, DataJson = null, TienTongChi = null, TienBenhNhanThanhToan = null, TienBenhNhanCungChiTra = null, TienBaoHiemThanhToan = null, TienNguonKhac = null, TienNgoaiDanhSach = null, NamQuyetToan = null, ThangQuyetToan = null, MaLoaiKCB = null, MaLoaiKCBText = null, MaKhoa = null, MaCSKCB = null, MaKhuVuc = null, MaPhauThuatQuocTe = null, CanNang = null, IsDownLoad = false, HoSoChiTietThuoc = [], HoSoChiTietDVKT = [], HoSoCanLamSang = [], HoSoChiTietDienBienBenh = []) {
        this.MaLienKet = MaLienKet;
        this.MaBenhNhan = MaBenhNhan;
        this.HoTen = HoTen;
        this.NgaySinh = NgaySinh;
        this.ThoiGian = ThoiGian;
        this.GioiTinh = GioiTinh;
        this.GioiTinhText = GioiTinhText;
        this.DiaChi = DiaChi;
        this.MaThe = MaThe;
        this.MaCoSoKCBBanDau = MaCoSoKCBBanDau;
        this.GiaTriTheTu = GiaTriTheTu;
        this.GiaTriTheDen = GiaTriTheDen;
        this.MienCungChiTra = MienCungChiTra;
        this.TenBenh = TenBenh;
        this.MaBenh = MaBenh;
        this.MaBenhKhac = MaBenhKhac;
        this.LyDoVaoVien = LyDoVaoVien;
        this.LyDoVaoVienText = LyDoVaoVienText;
        this.MaNoiChuyen = MaNoiChuyen;
        this.MaTaiNan = MaTaiNan;
        this.MaTaiNanText = MaTaiNanText;
        this.NgayVao = NgayVao;
        this.NgayVaoTime = NgayVaoTime;
        this.NgayRaTime = NgayRaTime;
        this.NgayRa = NgayRa;
        this.SoNgayDieuTri = SoNgayDieuTri;
        this.KetQuaDieuTri = KetQuaDieuTri;
        this.KetQuaDieuTriText = KetQuaDieuTriText;
        this.TinhTrangRaVien = TinhTrangRaVien;
        this.TinhTrangRaVienText = TinhTrangRaVienText;
        this.NgayThanhToan = NgayThanhToan;
        this.NgayThanhToanTime = NgayThanhToanTime;
        this.TienThuoc = TienThuoc;
        this.TienVatTuYTe = TienVatTuYTe;
        this.DataJson = DataJson;
        this.TienTongChi = TienTongChi;
        this.TienBenhNhanThanhToan = TienBenhNhanThanhToan;
        this.TienBenhNhanCungChiTra = TienBenhNhanCungChiTra;
        this.TienBaoHiemThanhToan = TienBaoHiemThanhToan;
        this.TienNguonKhac = TienNguonKhac;
        this.TienNgoaiDanhSach = TienNgoaiDanhSach;
        this.NamQuyetToan = NamQuyetToan;
        this.ThangQuyetToan = ThangQuyetToan;
        this.MaLoaiKCB = MaLoaiKCB;
        this.MaLoaiKCBText = MaLoaiKCBText;
        this.MaKhoa = MaKhoa;
        this.MaCSKCB = MaCSKCB;
        this.MaKhuVuc = MaKhuVuc;
        this.MaPhauThuatQuocTe = MaPhauThuatQuocTe;
        this.CanNang = CanNang;
        this.IsDownLoad = IsDownLoad;
        this.HoSoChiTietThuoc = HoSoChiTietThuoc;
        this.HoSoChiTietDVKT = HoSoChiTietDVKT;
        this.HoSoCanLamSang = HoSoCanLamSang;
        this.HoSoChiTietDienBienBenh = HoSoChiTietDienBienBenh;
    }
}
class HoSoChiTietThuoc {
    constructor(MaLienKet = null, MaThuoc = null, MaNhom = null, MaNhomText = null, TenThuoc = null, DonViTinh = null, HamLuong = null, DuongDung = null, LieuDung = null, SoDangKy = null, SoLuong = null, DonGia = null, TyLeThanhToan = null, ThanhTien = null, MaKhoa = null, MaBacSi = null, MaBenh = null, NgayYLenh = null, NgayYLenhTime = null, ThongTinThau = null, PhamVi = null, MucHuong = null, TienBenhNhanTuTra = null, TienNguonKhac = null, TienBaoHiemTuTra = null, TienBenhNhanTuChiTra = null, TienNgoaiDanhSach = null, MaPhuongThucThanhToan = null, MaPhuongThucThanhToanText = null) {
        this.MaLienKet = MaLienKet;
        this.MaThuoc = MaThuoc;
        this.MaNhom = MaNhom;
        this.MaNhomText = MaNhomText;
        this.TenThuoc = TenThuoc;
        this.DonViTinh = DonViTinh;
        this.HamLuong = HamLuong;
        this.DuongDung = DuongDung;
        this.LieuDung = LieuDung;
        this.SoDangKy = SoDangKy;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.TyLeThanhToan = TyLeThanhToan;
        this.ThanhTien = ThanhTien;
        this.MaKhoa = MaKhoa;
        this.MaBacSi = MaBacSi;
        this.MaBenh = MaBenh;
        this.NgayYLenh = NgayYLenh;
        this.NgayYLenhTime = NgayYLenhTime;
        this.ThongTinThau = ThongTinThau;
        this.PhamVi = PhamVi;
        this.MucHuong = MucHuong;
        this.TienBenhNhanTuTra = TienBenhNhanTuTra;
        this.TienNguonKhac = TienNguonKhac;
        this.TienBaoHiemTuTra = TienBaoHiemTuTra;
        this.TienBenhNhanTuChiTra = TienBenhNhanTuChiTra;
        this.TienNgoaiDanhSach = TienNgoaiDanhSach;
        this.MaPhuongThucThanhToan = MaPhuongThucThanhToan;
        this.MaPhuongThucThanhToanText = MaPhuongThucThanhToanText;
    }
}
class HoSoChiTietDVKT {
    constructor(MaDichVu = null, MaVatTu = null, GoiVatTuYTe = null, TenVatTu = null, ThongTinThau = null, PhamVi = null, MucThanhToanToiDa = null, MucHuong = null, TienNguonKhac = null, TienBenhNhanThanhToan = null, TienBaoHiemThanhToan = null, TienBenhNhanCungChiTra = null, TienNgoaiDanhSach = null, MaGiuong = null, MaNhom = null, MaNhomText = null, TenDichVu = null, DonViTinh = null, SoLuong = null, DonGia = null, TyLeThanhToan = null, ThanhTien = null, MaKhoa = null, MaBacSi = null, MaBenh = null, NgayYLenh = null, NgayYLenhTime = null, NgayKetQua = null, NgayKetQuaTime = null, MaPhuongThucThanhToan = null, MaPhuongThucThanhToanText = null) {
        this.MaDichVu = MaDichVu;
        this.MaVatTu = MaVatTu;
        this.GoiVatTuYTe = GoiVatTuYTe;
        this.TenVatTu = TenVatTu;
        this.ThongTinThau = ThongTinThau;
        this.PhamVi = PhamVi;
        this.MucThanhToanToiDa = MucThanhToanToiDa;
        this.MucHuong = MucHuong;
        this.TienNguonKhac = TienNguonKhac;
        this.TienBenhNhanThanhToan = TienBenhNhanThanhToan;
        this.TienBaoHiemThanhToan = TienBaoHiemThanhToan;
        this.TienBenhNhanCungChiTra = TienBenhNhanCungChiTra;
        this.TienNgoaiDanhSach = TienNgoaiDanhSach;
        this.MaGiuong = MaGiuong;
        this.MaNhom = MaNhom;
        this.MaNhomText = MaNhomText;
        this.TenDichVu = TenDichVu;
        this.DonViTinh = DonViTinh;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
        this.TyLeThanhToan = TyLeThanhToan;
        this.ThanhTien = ThanhTien;
        this.MaKhoa = MaKhoa;
        this.MaBacSi = MaBacSi;
        this.MaBenh = MaBenh;
        this.NgayYLenh = NgayYLenh;
        this.NgayYLenhTime = NgayYLenhTime;
        this.NgayKetQua = NgayKetQua;
        this.NgayKetQuaTime = NgayKetQuaTime;
        this.MaPhuongThucThanhToan = MaPhuongThucThanhToan;
        this.MaPhuongThucThanhToanText = MaPhuongThucThanhToanText;
    }
}
class HoSoCanLamSang {
    constructor(MaLienKet = null, MaDichVu = null, MaChiSo = null, TenChiSo = null, GiaTri = null, MaMayXetNghiem = null, MaMay = null, MoTa = null, KetLuan = null, NgayKQ = null, NgayKQTime = null) {
        this.MaLienKet = MaLienKet;
        this.MaDichVu = MaDichVu;
        this.MaChiSo = MaChiSo;
        this.TenChiSo = TenChiSo;
        this.GiaTri = GiaTri;
        this.MaMayXetNghiem = MaMayXetNghiem;
        this.MaMay = MaMay;
        this.MoTa = MoTa;
        this.KetLuan = KetLuan;
        this.NgayKQ = NgayKQ;
        this.NgayKQTime = NgayKQTime;
    }
}
class HoSoChiTietDienBienBenh {
    constructor(DienBien = null, HoiChuan = null, PhauThuat = null, NgayYLenh = null, NgayYLenhTime = null) {
        this.DienBien = DienBien;
        this.HoiChuan = HoiChuan;
        this.PhauThuat = PhauThuat;
        this.NgayYLenh = NgayYLenh;
        this.NgayYLenhTime = NgayYLenhTime;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~danh-muc-bao-hiem-y-te-bao-hiem-y-te-module~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach~f884ec67-es2015.js.map