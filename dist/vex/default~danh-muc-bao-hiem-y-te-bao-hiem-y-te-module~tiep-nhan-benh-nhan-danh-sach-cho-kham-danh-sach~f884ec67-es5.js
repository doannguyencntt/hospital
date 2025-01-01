(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~danh-muc-bao-hiem-y-te-bao-hiem-y-te-module~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach~f884ec67"], {
        /***/ "./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/bao-hiem-y-te/bao-hiem-y-te.model.ts ***!
          \****************************************************************************/
        /*! exports provided: BaoHiemYTe, ThongTinBenhNhan, dsLichSuKT2018, dsLichSuKCB2018, Login, TenFile, XMLThongTinBenhNhan, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoHiemYTe", function () { return BaoHiemYTe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhan", function () { return ThongTinBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsLichSuKT2018", function () { return dsLichSuKT2018; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dsLichSuKCB2018", function () { return dsLichSuKCB2018; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function () { return Login; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenFile", function () { return TenFile; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLThongTinBenhNhan", function () { return XMLThongTinBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietThuoc", function () { return HoSoChiTietThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDVKT", function () { return HoSoChiTietDVKT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoCanLamSang", function () { return HoSoCanLamSang; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoChiTietDienBienBenh", function () { return HoSoChiTietDienBienBenh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoHiemYTe = /** @class */ (function () {
                function BaoHiemYTe(maKetQua, ghiChu, maThe, hoTen, ngaySinh, gioiTinh, diaChi, maDKBD, cqBHXH, gtTheTu, gtTheDen, maKV, ngayDu5Nam, maSoBHXH, maTheCu, maTheMoi, gtTheTuMoi, gtTheDenMoi, dsLichSuKCB2018, dsLichSuKT2018, isConnectSuccessfully) {
                    if (maKetQua === void 0) { maKetQua = null; }
                    if (ghiChu === void 0) { ghiChu = null; }
                    if (maThe === void 0) { maThe = null; }
                    if (hoTen === void 0) { hoTen = null; }
                    if (ngaySinh === void 0) { ngaySinh = null; }
                    if (gioiTinh === void 0) { gioiTinh = null; }
                    if (diaChi === void 0) { diaChi = null; }
                    if (maDKBD === void 0) { maDKBD = null; }
                    if (cqBHXH === void 0) { cqBHXH = null; }
                    if (gtTheTu === void 0) { gtTheTu = null; }
                    if (gtTheDen === void 0) { gtTheDen = null; }
                    if (maKV === void 0) { maKV = null; }
                    if (ngayDu5Nam === void 0) { ngayDu5Nam = null; }
                    if (maSoBHXH === void 0) { maSoBHXH = null; }
                    if (maTheCu === void 0) { maTheCu = null; }
                    if (maTheMoi === void 0) { maTheMoi = null; }
                    if (gtTheTuMoi === void 0) { gtTheTuMoi = null; }
                    if (gtTheDenMoi === void 0) { gtTheDenMoi = null; }
                    if (dsLichSuKCB2018 === void 0) { dsLichSuKCB2018 = []; }
                    if (dsLichSuKT2018 === void 0) { dsLichSuKT2018 = []; }
                    if (isConnectSuccessfully === void 0) { isConnectSuccessfully = true; }
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
                return BaoHiemYTe;
            }());
            var ThongTinBenhNhan = /** @class */ (function () {
                function ThongTinBenhNhan(MaThe, TenBenhNhan, NgaySinh, NgaySinhDisplay, NamSinh, MessageErrFromBHYT) {
                    if (MaThe === void 0) { MaThe = null; }
                    if (TenBenhNhan === void 0) { TenBenhNhan = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (NgaySinhDisplay === void 0) { NgaySinhDisplay = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (MessageErrFromBHYT === void 0) { MessageErrFromBHYT = null; }
                    this.MaThe = MaThe;
                    this.TenBenhNhan = TenBenhNhan;
                    this.NgaySinh = NgaySinh;
                    this.NgaySinhDisplay = NgaySinhDisplay;
                    this.NamSinh = NamSinh;
                    this.MessageErrFromBHYT = MessageErrFromBHYT;
                }
                return ThongTinBenhNhan;
            }());
            var dsLichSuKT2018 = /** @class */ (function () {
                function dsLichSuKT2018(userKT, thoiGianKT, thongBao, maLoi, tenCSKCB, maCSKCB, thoiGianKTDisplay, thoiGianKTDateTime) {
                    if (userKT === void 0) { userKT = null; }
                    if (thoiGianKT === void 0) { thoiGianKT = null; }
                    if (thongBao === void 0) { thongBao = null; }
                    if (maLoi === void 0) { maLoi = null; }
                    if (tenCSKCB === void 0) { tenCSKCB = null; }
                    if (maCSKCB === void 0) { maCSKCB = null; }
                    if (thoiGianKTDisplay === void 0) { thoiGianKTDisplay = null; }
                    if (thoiGianKTDateTime === void 0) { thoiGianKTDateTime = null; }
                    this.userKT = userKT;
                    this.thoiGianKT = thoiGianKT;
                    this.thongBao = thongBao;
                    this.maLoi = maLoi;
                    this.tenCSKCB = tenCSKCB;
                    this.maCSKCB = maCSKCB;
                    this.thoiGianKTDisplay = thoiGianKTDisplay;
                    this.thoiGianKTDateTime = thoiGianKTDateTime;
                }
                return dsLichSuKT2018;
            }());
            var dsLichSuKCB2018 = /** @class */ (function () {
                function dsLichSuKCB2018(maHoSo, maCSKCB, ngayVao, ngayRa, tenBenh, tinhTrang, kqDieuTri, lyDoVV, TEMP1, TEMP2, TEMP3, TEMP4, TEMP5, coSoKCB, lyDoVVDisplay, kqDieuTriDisplay, tinhTrangDisplay, ngayRaDisplay, ngayVaoDisplay, ngayVaoDateTime, ngayRaDateTime) {
                    if (maHoSo === void 0) { maHoSo = null; }
                    if (maCSKCB === void 0) { maCSKCB = null; }
                    if (ngayVao === void 0) { ngayVao = null; }
                    if (ngayRa === void 0) { ngayRa = null; }
                    if (tenBenh === void 0) { tenBenh = null; }
                    if (tinhTrang === void 0) { tinhTrang = null; }
                    if (kqDieuTri === void 0) { kqDieuTri = null; }
                    if (lyDoVV === void 0) { lyDoVV = null; }
                    if (TEMP1 === void 0) { TEMP1 = null; }
                    if (TEMP2 === void 0) { TEMP2 = null; }
                    if (TEMP3 === void 0) { TEMP3 = null; }
                    if (TEMP4 === void 0) { TEMP4 = null; }
                    if (TEMP5 === void 0) { TEMP5 = null; }
                    if (coSoKCB === void 0) { coSoKCB = null; }
                    if (lyDoVVDisplay === void 0) { lyDoVVDisplay = null; }
                    if (kqDieuTriDisplay === void 0) { kqDieuTriDisplay = null; }
                    if (tinhTrangDisplay === void 0) { tinhTrangDisplay = null; }
                    if (ngayRaDisplay === void 0) { ngayRaDisplay = null; }
                    if (ngayVaoDisplay === void 0) { ngayVaoDisplay = null; }
                    if (ngayVaoDateTime === void 0) { ngayVaoDateTime = null; }
                    if (ngayRaDateTime === void 0) { ngayRaDateTime = null; }
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
                return dsLichSuKCB2018;
            }());
            var Login = /** @class */ (function () {
                function Login(userName, pass) {
                    if (userName === void 0) { userName = null; }
                    if (pass === void 0) { pass = null; }
                    this.userName = userName;
                    this.pass = pass;
                }
                return Login;
            }());
            var TenFile = /** @class */ (function () {
                function TenFile(TenFile, DuLieu) {
                    if (TenFile === void 0) { TenFile = null; }
                    if (DuLieu === void 0) { DuLieu = null; }
                    this.TenFile = TenFile;
                    this.DuLieu = DuLieu;
                }
                return TenFile;
            }());
            var XMLThongTinBenhNhan = /** @class */ (function () {
                function XMLThongTinBenhNhan(MaLienKet, MaBenhNhan, HoTen, NgaySinh, ThoiGian, GioiTinh, GioiTinhText, DiaChi, MaThe, MaCoSoKCBBanDau, GiaTriTheTu, GiaTriTheDen, MienCungChiTra, TenBenh, MaBenh, MaBenhKhac, LyDoVaoVien, LyDoVaoVienText, MaNoiChuyen, MaTaiNan, MaTaiNanText, NgayVao, NgayVaoTime, NgayRaTime, NgayRa, SoNgayDieuTri, KetQuaDieuTri, KetQuaDieuTriText, TinhTrangRaVien, TinhTrangRaVienText, NgayThanhToan, NgayThanhToanTime, 
                // public  MucHuong : number=null,
                TienThuoc, TienVatTuYTe, DataJson, TienTongChi, TienBenhNhanThanhToan, TienBenhNhanCungChiTra, TienBaoHiemThanhToan, TienNguonKhac, TienNgoaiDanhSach, NamQuyetToan, ThangQuyetToan, MaLoaiKCB, MaLoaiKCBText, MaKhoa, MaCSKCB, MaKhuVuc, MaPhauThuatQuocTe, CanNang, IsDownLoad, HoSoChiTietThuoc, HoSoChiTietDVKT, HoSoCanLamSang, HoSoChiTietDienBienBenh) {
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThoiGian === void 0) { ThoiGian = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (GioiTinhText === void 0) { GioiTinhText = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (MaThe === void 0) { MaThe = null; }
                    if (MaCoSoKCBBanDau === void 0) { MaCoSoKCBBanDau = null; }
                    if (GiaTriTheTu === void 0) { GiaTriTheTu = null; }
                    if (GiaTriTheDen === void 0) { GiaTriTheDen = null; }
                    if (MienCungChiTra === void 0) { MienCungChiTra = null; }
                    if (TenBenh === void 0) { TenBenh = null; }
                    if (MaBenh === void 0) { MaBenh = null; }
                    if (MaBenhKhac === void 0) { MaBenhKhac = null; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = null; }
                    if (LyDoVaoVienText === void 0) { LyDoVaoVienText = null; }
                    if (MaNoiChuyen === void 0) { MaNoiChuyen = null; }
                    if (MaTaiNan === void 0) { MaTaiNan = null; }
                    if (MaTaiNanText === void 0) { MaTaiNanText = null; }
                    if (NgayVao === void 0) { NgayVao = null; }
                    if (NgayVaoTime === void 0) { NgayVaoTime = null; }
                    if (NgayRaTime === void 0) { NgayRaTime = null; }
                    if (NgayRa === void 0) { NgayRa = null; }
                    if (SoNgayDieuTri === void 0) { SoNgayDieuTri = null; }
                    if (KetQuaDieuTri === void 0) { KetQuaDieuTri = null; }
                    if (KetQuaDieuTriText === void 0) { KetQuaDieuTriText = null; }
                    if (TinhTrangRaVien === void 0) { TinhTrangRaVien = null; }
                    if (TinhTrangRaVienText === void 0) { TinhTrangRaVienText = null; }
                    if (NgayThanhToan === void 0) { NgayThanhToan = null; }
                    if (NgayThanhToanTime === void 0) { NgayThanhToanTime = null; }
                    if (TienThuoc === void 0) { TienThuoc = null; }
                    if (TienVatTuYTe === void 0) { TienVatTuYTe = null; }
                    if (DataJson === void 0) { DataJson = null; }
                    if (TienTongChi === void 0) { TienTongChi = null; }
                    if (TienBenhNhanThanhToan === void 0) { TienBenhNhanThanhToan = null; }
                    if (TienBenhNhanCungChiTra === void 0) { TienBenhNhanCungChiTra = null; }
                    if (TienBaoHiemThanhToan === void 0) { TienBaoHiemThanhToan = null; }
                    if (TienNguonKhac === void 0) { TienNguonKhac = null; }
                    if (TienNgoaiDanhSach === void 0) { TienNgoaiDanhSach = null; }
                    if (NamQuyetToan === void 0) { NamQuyetToan = null; }
                    if (ThangQuyetToan === void 0) { ThangQuyetToan = null; }
                    if (MaLoaiKCB === void 0) { MaLoaiKCB = null; }
                    if (MaLoaiKCBText === void 0) { MaLoaiKCBText = null; }
                    if (MaKhoa === void 0) { MaKhoa = null; }
                    if (MaCSKCB === void 0) { MaCSKCB = null; }
                    if (MaKhuVuc === void 0) { MaKhuVuc = null; }
                    if (MaPhauThuatQuocTe === void 0) { MaPhauThuatQuocTe = null; }
                    if (CanNang === void 0) { CanNang = null; }
                    if (IsDownLoad === void 0) { IsDownLoad = false; }
                    if (HoSoChiTietThuoc === void 0) { HoSoChiTietThuoc = []; }
                    if (HoSoChiTietDVKT === void 0) { HoSoChiTietDVKT = []; }
                    if (HoSoCanLamSang === void 0) { HoSoCanLamSang = []; }
                    if (HoSoChiTietDienBienBenh === void 0) { HoSoChiTietDienBienBenh = []; }
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
                return XMLThongTinBenhNhan;
            }());
            var HoSoChiTietThuoc = /** @class */ (function () {
                function HoSoChiTietThuoc(MaLienKet, MaThuoc, MaNhom, MaNhomText, TenThuoc, DonViTinh, HamLuong, DuongDung, LieuDung, SoDangKy, SoLuong, DonGia, TyLeThanhToan, ThanhTien, MaKhoa, MaBacSi, MaBenh, NgayYLenh, NgayYLenhTime, ThongTinThau, PhamVi, MucHuong, TienBenhNhanTuTra, TienNguonKhac, TienBaoHiemTuTra, TienBenhNhanTuChiTra, TienNgoaiDanhSach, MaPhuongThucThanhToan, MaPhuongThucThanhToanText) {
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    if (MaThuoc === void 0) { MaThuoc = null; }
                    if (MaNhom === void 0) { MaNhom = null; }
                    if (MaNhomText === void 0) { MaNhomText = null; }
                    if (TenThuoc === void 0) { TenThuoc = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (HamLuong === void 0) { HamLuong = null; }
                    if (DuongDung === void 0) { DuongDung = null; }
                    if (LieuDung === void 0) { LieuDung = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (TyLeThanhToan === void 0) { TyLeThanhToan = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (MaKhoa === void 0) { MaKhoa = null; }
                    if (MaBacSi === void 0) { MaBacSi = null; }
                    if (MaBenh === void 0) { MaBenh = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    if (NgayYLenhTime === void 0) { NgayYLenhTime = null; }
                    if (ThongTinThau === void 0) { ThongTinThau = null; }
                    if (PhamVi === void 0) { PhamVi = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (TienBenhNhanTuTra === void 0) { TienBenhNhanTuTra = null; }
                    if (TienNguonKhac === void 0) { TienNguonKhac = null; }
                    if (TienBaoHiemTuTra === void 0) { TienBaoHiemTuTra = null; }
                    if (TienBenhNhanTuChiTra === void 0) { TienBenhNhanTuChiTra = null; }
                    if (TienNgoaiDanhSach === void 0) { TienNgoaiDanhSach = null; }
                    if (MaPhuongThucThanhToan === void 0) { MaPhuongThucThanhToan = null; }
                    if (MaPhuongThucThanhToanText === void 0) { MaPhuongThucThanhToanText = null; }
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
                return HoSoChiTietThuoc;
            }());
            var HoSoChiTietDVKT = /** @class */ (function () {
                function HoSoChiTietDVKT(MaDichVu, MaVatTu, GoiVatTuYTe, TenVatTu, ThongTinThau, PhamVi, MucThanhToanToiDa, MucHuong, TienNguonKhac, TienBenhNhanThanhToan, TienBaoHiemThanhToan, TienBenhNhanCungChiTra, TienNgoaiDanhSach, MaGiuong, MaNhom, MaNhomText, TenDichVu, DonViTinh, SoLuong, DonGia, TyLeThanhToan, ThanhTien, MaKhoa, MaBacSi, MaBenh, NgayYLenh, NgayYLenhTime, NgayKetQua, NgayKetQuaTime, MaPhuongThucThanhToan, MaPhuongThucThanhToanText) {
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    if (MaVatTu === void 0) { MaVatTu = null; }
                    if (GoiVatTuYTe === void 0) { GoiVatTuYTe = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (ThongTinThau === void 0) { ThongTinThau = null; }
                    if (PhamVi === void 0) { PhamVi = null; }
                    if (MucThanhToanToiDa === void 0) { MucThanhToanToiDa = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (TienNguonKhac === void 0) { TienNguonKhac = null; }
                    if (TienBenhNhanThanhToan === void 0) { TienBenhNhanThanhToan = null; }
                    if (TienBaoHiemThanhToan === void 0) { TienBaoHiemThanhToan = null; }
                    if (TienBenhNhanCungChiTra === void 0) { TienBenhNhanCungChiTra = null; }
                    if (TienNgoaiDanhSach === void 0) { TienNgoaiDanhSach = null; }
                    if (MaGiuong === void 0) { MaGiuong = null; }
                    if (MaNhom === void 0) { MaNhom = null; }
                    if (MaNhomText === void 0) { MaNhomText = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (TyLeThanhToan === void 0) { TyLeThanhToan = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (MaKhoa === void 0) { MaKhoa = null; }
                    if (MaBacSi === void 0) { MaBacSi = null; }
                    if (MaBenh === void 0) { MaBenh = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    if (NgayYLenhTime === void 0) { NgayYLenhTime = null; }
                    if (NgayKetQua === void 0) { NgayKetQua = null; }
                    if (NgayKetQuaTime === void 0) { NgayKetQuaTime = null; }
                    if (MaPhuongThucThanhToan === void 0) { MaPhuongThucThanhToan = null; }
                    if (MaPhuongThucThanhToanText === void 0) { MaPhuongThucThanhToanText = null; }
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
                return HoSoChiTietDVKT;
            }());
            var HoSoCanLamSang = /** @class */ (function () {
                function HoSoCanLamSang(MaLienKet, MaDichVu, MaChiSo, TenChiSo, GiaTri, MaMayXetNghiem, MaMay, MoTa, KetLuan, NgayKQ, NgayKQTime) {
                    if (MaLienKet === void 0) { MaLienKet = null; }
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    if (MaChiSo === void 0) { MaChiSo = null; }
                    if (TenChiSo === void 0) { TenChiSo = null; }
                    if (GiaTri === void 0) { GiaTri = null; }
                    if (MaMayXetNghiem === void 0) { MaMayXetNghiem = null; }
                    if (MaMay === void 0) { MaMay = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (KetLuan === void 0) { KetLuan = null; }
                    if (NgayKQ === void 0) { NgayKQ = null; }
                    if (NgayKQTime === void 0) { NgayKQTime = null; }
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
                return HoSoCanLamSang;
            }());
            var HoSoChiTietDienBienBenh = /** @class */ (function () {
                function HoSoChiTietDienBienBenh(DienBien, HoiChuan, PhauThuat, NgayYLenh, NgayYLenhTime) {
                    if (DienBien === void 0) { DienBien = null; }
                    if (HoiChuan === void 0) { HoiChuan = null; }
                    if (PhauThuat === void 0) { PhauThuat = null; }
                    if (NgayYLenh === void 0) { NgayYLenh = null; }
                    if (NgayYLenhTime === void 0) { NgayYLenhTime = null; }
                    this.DienBien = DienBien;
                    this.HoiChuan = HoiChuan;
                    this.PhauThuat = PhauThuat;
                    this.NgayYLenh = NgayYLenh;
                    this.NgayYLenhTime = NgayYLenhTime;
                }
                return HoSoChiTietDienBienBenh;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~danh-muc-bao-hiem-y-te-bao-hiem-y-te-module~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach~f884ec67-es2015.js.map
//# sourceMappingURL=default~danh-muc-bao-hiem-y-te-bao-hiem-y-te-module~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach~f884ec67-es5.js.map
//# sourceMappingURL=default~danh-muc-bao-hiem-y-te-bao-hiem-y-te-module~tiep-nhan-benh-nhan-danh-sach-cho-kham-danh-sach~f884ec67-es5.js.map