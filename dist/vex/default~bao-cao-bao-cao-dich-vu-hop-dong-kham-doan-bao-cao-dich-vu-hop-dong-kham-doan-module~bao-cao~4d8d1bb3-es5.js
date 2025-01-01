(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~4d8d1bb3"], {
        /***/ "./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/dieu-tri-noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru.model.ts ***!
          \********************************************************************************************/
        /*! exports provided: TiepNhanNoiTruTimKiem, TiepNhanNoiTruTimKiemTimKiemTrangThai, TiepNhanNoiTruTimKiemTimKiemDateRange, ThongTinYeuCauTiepNoiTru, ThongTinNoiTruBenhAn, NoiTruBenhAnYeuCauNhapVien, SoDoGiuongTiepNhanNoiTruFillter, TiepNhanNoiTruChiDinh, TiepNhanNoiTruChiDinhChonGiuong, ThongTinDoiTuongTiepNhan, ThongTinBenhNhanTimKiemBHYT, ThongTinDoiTuongSoSinhTiepNhan, YeuCauTiepNhanTheBHYT, GiayMienCungChiTra, ThongTinBaoHiemTuNhan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiem", function () { return TiepNhanNoiTruTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiemTimKiemTrangThai", function () { return TiepNhanNoiTruTimKiemTimKiemTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruTimKiemTimKiemDateRange", function () { return TiepNhanNoiTruTimKiemTimKiemDateRange; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNoiTru", function () { return ThongTinYeuCauTiepNoiTru; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinNoiTruBenhAn", function () { return ThongTinNoiTruBenhAn; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiTruBenhAnYeuCauNhapVien", function () { return NoiTruBenhAnYeuCauNhapVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoDoGiuongTiepNhanNoiTruFillter", function () { return SoDoGiuongTiepNhanNoiTruFillter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruChiDinh", function () { return TiepNhanNoiTruChiDinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanNoiTruChiDinhChonGiuong", function () { return TiepNhanNoiTruChiDinhChonGiuong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDoiTuongTiepNhan", function () { return ThongTinDoiTuongTiepNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhanTimKiemBHYT", function () { return ThongTinBenhNhanTimKiemBHYT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDoiTuongSoSinhTiepNhan", function () { return ThongTinDoiTuongSoSinhTiepNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTiepNhanTheBHYT", function () { return YeuCauTiepNhanTheBHYT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayMienCungChiTra", function () { return GiayMienCungChiTra; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBaoHiemTuNhan", function () { return ThongTinBaoHiemTuNhan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TiepNhanNoiTruTimKiem = /** @class */ (function () {
                function TiepNhanNoiTruTimKiem(SearchString, KhoaPhongId, TrangThai, TuNgayDenNgay) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (TrangThai === void 0) { TrangThai = new TiepNhanNoiTruTimKiemTimKiemTrangThai(); }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new TiepNhanNoiTruTimKiemTimKiemDateRange(); }
                    this.SearchString = SearchString;
                    this.KhoaPhongId = KhoaPhongId;
                    this.TrangThai = TrangThai;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                }
                return TiepNhanNoiTruTimKiem;
            }());
            var TiepNhanNoiTruTimKiemTimKiemTrangThai = /** @class */ (function () {
                function TiepNhanNoiTruTimKiemTimKiemTrangThai(ChoQuyetToan, ChuaTaoBenhAn, DaTaoBenhAn) {
                    if (ChoQuyetToan === void 0) { ChoQuyetToan = true; }
                    if (ChuaTaoBenhAn === void 0) { ChuaTaoBenhAn = true; }
                    if (DaTaoBenhAn === void 0) { DaTaoBenhAn = false; }
                    this.ChoQuyetToan = ChoQuyetToan;
                    this.ChuaTaoBenhAn = ChuaTaoBenhAn;
                    this.DaTaoBenhAn = DaTaoBenhAn;
                }
                return TiepNhanNoiTruTimKiemTimKiemTrangThai;
            }());
            var TiepNhanNoiTruTimKiemTimKiemDateRange = /** @class */ (function () {
                function TiepNhanNoiTruTimKiemTimKiemDateRange(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return TiepNhanNoiTruTimKiemTimKiemDateRange;
            }());
            var ThongTinYeuCauTiepNoiTru = /** @class */ (function () {
                function ThongTinYeuCauTiepNoiTru(YeuCauTiepNhanId, MaBenhNhan, BenhNhanId, MaYeuCauTiepNhan, HoTen, NgaySinh, ThangSinh, NamSinh, Tuoi, TenGioiTinh, Tuyen, BHYTMucHuong, DanToc, DiaChiDayDu, NgheNghiep, DoiTuong, SoDuTaiKhoan, SoDuTaiKhoanConLai, NoiTruBenhAn, ThongTinNhapVien, 
                //BVHD-3800
                LaCapCuu) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (TenGioiTinh === void 0) { TenGioiTinh = null; }
                    if (Tuyen === void 0) { Tuyen = null; }
                    if (BHYTMucHuong === void 0) { BHYTMucHuong = null; }
                    if (DanToc === void 0) { DanToc = null; }
                    if (DiaChiDayDu === void 0) { DiaChiDayDu = null; }
                    if (NgheNghiep === void 0) { NgheNghiep = null; }
                    if (DoiTuong === void 0) { DoiTuong = null; }
                    if (SoDuTaiKhoan === void 0) { SoDuTaiKhoan = 0; }
                    if (SoDuTaiKhoanConLai === void 0) { SoDuTaiKhoanConLai = 0; }
                    if (NoiTruBenhAn === void 0) { NoiTruBenhAn = new ThongTinNoiTruBenhAn(); }
                    if (ThongTinNhapVien === void 0) { ThongTinNhapVien = new NoiTruBenhAnYeuCauNhapVien(); }
                    if (LaCapCuu === void 0) { LaCapCuu = null; }
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
                return ThongTinYeuCauTiepNoiTru;
            }());
            var ThongTinNoiTruBenhAn = /** @class */ (function () {
                function ThongTinNoiTruBenhAn(Id, BenhNhanId, SoBenhAn, SoLuuTru, LaCapCuu, LoaiBenhAn, TenLoaiBenhAn, ThoiDiemTaoBenhAn, NhanVienTaoBenhAnId, KhoaPhongNhapVienId, ThoiDiemNhapVien, ThoiDiemTiepNhanNgoaiTru) {
                    if (Id === void 0) { Id = 0; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (SoBenhAn === void 0) { SoBenhAn = null; }
                    if (SoLuuTru === void 0) { SoLuuTru = null; }
                    if (LaCapCuu === void 0) { LaCapCuu = null; }
                    if (LoaiBenhAn === void 0) { LoaiBenhAn = null; }
                    if (TenLoaiBenhAn === void 0) { TenLoaiBenhAn = null; }
                    if (ThoiDiemTaoBenhAn === void 0) { ThoiDiemTaoBenhAn = null; }
                    if (NhanVienTaoBenhAnId === void 0) { NhanVienTaoBenhAnId = null; }
                    if (KhoaPhongNhapVienId === void 0) { KhoaPhongNhapVienId = null; }
                    if (ThoiDiemNhapVien === void 0) { ThoiDiemNhapVien = null; }
                    if (ThoiDiemTiepNhanNgoaiTru === void 0) { ThoiDiemTiepNhanNgoaiTru = null; }
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
                return ThongTinNoiTruBenhAn;
            }());
            var NoiTruBenhAnYeuCauNhapVien = /** @class */ (function () {
                function NoiTruBenhAnYeuCauNhapVien(KhoaNhapVienId, KhoaNhapVien, ChanDoanNhapVien, TrangThaiDieuTri, TenTrangThaiDieuTri, NoiChiDinh, ChanDoanKemTheo, NguoiTiepNhan, BacSiChiDinh, LyDoNhapVien) {
                    if (KhoaNhapVienId === void 0) { KhoaNhapVienId = null; }
                    if (KhoaNhapVien === void 0) { KhoaNhapVien = null; }
                    if (ChanDoanNhapVien === void 0) { ChanDoanNhapVien = null; }
                    if (TrangThaiDieuTri === void 0) { TrangThaiDieuTri = null; }
                    if (TenTrangThaiDieuTri === void 0) { TenTrangThaiDieuTri = null; }
                    if (NoiChiDinh === void 0) { NoiChiDinh = null; }
                    if (ChanDoanKemTheo === void 0) { ChanDoanKemTheo = null; }
                    if (NguoiTiepNhan === void 0) { NguoiTiepNhan = null; }
                    if (BacSiChiDinh === void 0) { BacSiChiDinh = null; }
                    if (LyDoNhapVien === void 0) { LyDoNhapVien = null; }
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
                return NoiTruBenhAnYeuCauNhapVien;
            }());
            var SoDoGiuongTiepNhanNoiTruFillter = /** @class */ (function () {
                function SoDoGiuongTiepNhanNoiTruFillter(KhoaPhongId, PhongBenhVienId, GiuongTrong, GiuongDaCoBenhNhan, ThoiGianNhan, ThoiGianTra, YeuCauDichVuGiuongBenhVienId, BaoPhong, YeuCauTiepNhanNoiTruId) {
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (PhongBenhVienId === void 0) { PhongBenhVienId = null; }
                    if (GiuongTrong === void 0) { GiuongTrong = true; }
                    if (GiuongDaCoBenhNhan === void 0) { GiuongDaCoBenhNhan = true; }
                    if (ThoiGianNhan === void 0) { ThoiGianNhan = null; }
                    if (ThoiGianTra === void 0) { ThoiGianTra = null; }
                    if (YeuCauDichVuGiuongBenhVienId === void 0) { YeuCauDichVuGiuongBenhVienId = null; }
                    if (BaoPhong === void 0) { BaoPhong = false; }
                    if (YeuCauTiepNhanNoiTruId === void 0) { YeuCauTiepNhanNoiTruId = null; }
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
                return SoDoGiuongTiepNhanNoiTruFillter;
            }());
            var TiepNhanNoiTruChiDinh = /** @class */ (function () {
                function TiepNhanNoiTruChiDinh(YeuCauTiepNhanId, BacSiDieuTriId, DieuDuongId, TuNgay, DichVuGiuongId, DichVuGiuongDisplay, GiuongId, TenGiuong, LoaiGiuong, BaoPhong, ThoiGianNhan, KhongCanChiDinhGiuong, YeuCauGoiDichVuId) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BacSiDieuTriId === void 0) { BacSiDieuTriId = null; }
                    if (DieuDuongId === void 0) { DieuDuongId = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DichVuGiuongId === void 0) { DichVuGiuongId = null; }
                    if (DichVuGiuongDisplay === void 0) { DichVuGiuongDisplay = null; }
                    if (GiuongId === void 0) { GiuongId = null; }
                    if (TenGiuong === void 0) { TenGiuong = null; }
                    if (LoaiGiuong === void 0) { LoaiGiuong = null; }
                    if (BaoPhong === void 0) { BaoPhong = null; }
                    if (ThoiGianNhan === void 0) { ThoiGianNhan = null; }
                    if (KhongCanChiDinhGiuong === void 0) { KhongCanChiDinhGiuong = false; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
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
                return TiepNhanNoiTruChiDinh;
            }());
            var TiepNhanNoiTruChiDinhChonGiuong = /** @class */ (function () {
                function TiepNhanNoiTruChiDinhChonGiuong(KhoaId, TenKhoa, BaoPhong, GiuongId, TenGiuong, PhongId, TenPhong, Tang, ThoiGianNhan, ThoiGianTra, YeuCauDichVuGiuongBenhVienId) {
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (TenKhoa === void 0) { TenKhoa = null; }
                    if (BaoPhong === void 0) { BaoPhong = null; }
                    if (GiuongId === void 0) { GiuongId = null; }
                    if (TenGiuong === void 0) { TenGiuong = null; }
                    if (PhongId === void 0) { PhongId = null; }
                    if (TenPhong === void 0) { TenPhong = null; }
                    if (Tang === void 0) { Tang = null; }
                    if (ThoiGianNhan === void 0) { ThoiGianNhan = null; }
                    if (ThoiGianTra === void 0) { ThoiGianTra = null; }
                    if (YeuCauDichVuGiuongBenhVienId === void 0) { YeuCauDichVuGiuongBenhVienId = null; }
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
                return TiepNhanNoiTruChiDinhChonGiuong;
            }());
            var ThongTinDoiTuongTiepNhan = /** @class */ (function () {
                function ThongTinDoiTuongTiepNhan(Id, BenhNhanId, 
                // public BHYTNgayHieuLuc: Date = null,
                // public BHYTNgayHetHan: Date = null,
                // public BHYTMucHuong: number = null,
                // public BHYTNgayDu5Nam: Date = null,
                // public BHYTDiaChi: string = null,
                // public NoiDangKyBHYT: string = null,
                // public BHYTMaSoThe: string = null,
                // public BHYTMaDKBD: string = null,
                CoBHYT, LyDoVaoVien, CoBHTN, HoTen, NgaySinh, ThangSinh, NamSinh, NgayThangNamSinh, SoChungMinhThu, GioiTinh, NgheNghiepId, QuocTichId, TinhThanhId, QuanHuyenId, PhuongXaId, DiaChi, SoDienThoai, Email, NoiLamViec, DanTocId, HoTenBo, TrinhDoVanHoaCuaBo, NgheNghiepCuaBoId, HoTenMe, TrinhDoVanHoaCuaMe, NgheNghiepCuaMeId, 
                //người liên hệ
                NguoiLienHeHoTen, NguoiLienHeQuanHeNhanThanId, NguoiLienHeSoDienThoai, NguoiLienHeEmail, NguoiLienHeDiaChi, NguoiLienHePhuongXaId, NguoiLienHeQuanHuyenId, NguoiLienHeTinhThanhId, IsCheckedBHYT, TuNhap, YeuCauTiepNhanMeId, YeuCauGoiDichVuId, 
                // thông tin thẻ BHYT
                YeuCauTiepNhanTheBHYTs, YeuCauTiepNhanCongTyBaoHiemTuNhans, BieuHienLamSang, DichTeSarsCoV2) {
                    if (Id === void 0) { Id = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (CoBHYT === void 0) { CoBHYT = false; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = null; }
                    if (CoBHTN === void 0) { CoBHTN = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (QuocTichId === void 0) { QuocTichId = 1; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (NoiLamViec === void 0) { NoiLamViec = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (HoTenBo === void 0) { HoTenBo = null; }
                    if (TrinhDoVanHoaCuaBo === void 0) { TrinhDoVanHoaCuaBo = null; }
                    if (NgheNghiepCuaBoId === void 0) { NgheNghiepCuaBoId = null; }
                    if (HoTenMe === void 0) { HoTenMe = null; }
                    if (TrinhDoVanHoaCuaMe === void 0) { TrinhDoVanHoaCuaMe = null; }
                    if (NgheNghiepCuaMeId === void 0) { NgheNghiepCuaMeId = null; }
                    if (NguoiLienHeHoTen === void 0) { NguoiLienHeHoTen = null; }
                    if (NguoiLienHeQuanHeNhanThanId === void 0) { NguoiLienHeQuanHeNhanThanId = null; }
                    if (NguoiLienHeSoDienThoai === void 0) { NguoiLienHeSoDienThoai = null; }
                    if (NguoiLienHeEmail === void 0) { NguoiLienHeEmail = null; }
                    if (NguoiLienHeDiaChi === void 0) { NguoiLienHeDiaChi = null; }
                    if (NguoiLienHePhuongXaId === void 0) { NguoiLienHePhuongXaId = null; }
                    if (NguoiLienHeQuanHuyenId === void 0) { NguoiLienHeQuanHuyenId = null; }
                    if (NguoiLienHeTinhThanhId === void 0) { NguoiLienHeTinhThanhId = null; }
                    if (IsCheckedBHYT === void 0) { IsCheckedBHYT = null; }
                    if (TuNhap === void 0) { TuNhap = false; }
                    if (YeuCauTiepNhanMeId === void 0) { YeuCauTiepNhanMeId = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (YeuCauTiepNhanTheBHYTs === void 0) { YeuCauTiepNhanTheBHYTs = new Array(); }
                    if (YeuCauTiepNhanCongTyBaoHiemTuNhans === void 0) { YeuCauTiepNhanCongTyBaoHiemTuNhans = new Array(); }
                    if (BieuHienLamSang === void 0) { BieuHienLamSang = null; }
                    if (DichTeSarsCoV2 === void 0) { DichTeSarsCoV2 = null; }
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
                return ThongTinDoiTuongTiepNhan;
            }());
            var ThongTinBenhNhanTimKiemBHYT = /** @class */ (function () {
                function ThongTinBenhNhanTimKiemBHYT(MaThe, TenBenhNhan, NgaySinh, NgaySinhDisplay, NamSinh) {
                    if (MaThe === void 0) { MaThe = null; }
                    if (TenBenhNhan === void 0) { TenBenhNhan = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (NgaySinhDisplay === void 0) { NgaySinhDisplay = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    this.MaThe = MaThe;
                    this.TenBenhNhan = TenBenhNhan;
                    this.NgaySinh = NgaySinh;
                    this.NgaySinhDisplay = NgaySinhDisplay;
                    this.NamSinh = NamSinh;
                }
                return ThongTinBenhNhanTimKiemBHYT;
            }());
            var ThongTinDoiTuongSoSinhTiepNhan = /** @class */ (function () {
                function ThongTinDoiTuongSoSinhTiepNhan(YeuCauTiepNhanId, KhoaNhapVienId, KhoaNhapVien, MaBenhAnMe, LyDoVaoVien, HoTen, NgaySinh, ThangSinh, NamSinh, NgayThangNamSinh, SoChungMinhThu, GioiTinh, GioiTinhDisplay, NgheNghiepId, QuocTichId, TinhThanhId, QuanHuyenId, PhuongXaId, DiaChi, SoDienThoai, Email, NoiLamViec, TenKhaiSinh, TenBanDau, DanTocId, 
                //người liên hệ
                NguoiLienHeHoTen, NguoiLienHeQuanHeNhanThanId, NguoiLienHeSoDienThoai, NguoiLienHeEmail, NguoiLienHeDiaChi, NguoiLienHePhuongXaId, NguoiLienHeQuanHuyenId, NguoiLienHeTinhThanhId, IsCheckedBHYT, TuNhap, YeuCauGoiDichVuId, KhoaChuyenBenhAnSoSinhVeId, LucDeSoSinh) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (KhoaNhapVienId === void 0) { KhoaNhapVienId = null; }
                    if (KhoaNhapVien === void 0) { KhoaNhapVien = null; }
                    if (MaBenhAnMe === void 0) { MaBenhAnMe = null; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (QuocTichId === void 0) { QuocTichId = 1; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (NoiLamViec === void 0) { NoiLamViec = null; }
                    if (TenKhaiSinh === void 0) { TenKhaiSinh = null; }
                    if (TenBanDau === void 0) { TenBanDau = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (NguoiLienHeHoTen === void 0) { NguoiLienHeHoTen = null; }
                    if (NguoiLienHeQuanHeNhanThanId === void 0) { NguoiLienHeQuanHeNhanThanId = null; }
                    if (NguoiLienHeSoDienThoai === void 0) { NguoiLienHeSoDienThoai = null; }
                    if (NguoiLienHeEmail === void 0) { NguoiLienHeEmail = null; }
                    if (NguoiLienHeDiaChi === void 0) { NguoiLienHeDiaChi = null; }
                    if (NguoiLienHePhuongXaId === void 0) { NguoiLienHePhuongXaId = null; }
                    if (NguoiLienHeQuanHuyenId === void 0) { NguoiLienHeQuanHuyenId = null; }
                    if (NguoiLienHeTinhThanhId === void 0) { NguoiLienHeTinhThanhId = null; }
                    if (IsCheckedBHYT === void 0) { IsCheckedBHYT = null; }
                    if (TuNhap === void 0) { TuNhap = false; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (KhoaChuyenBenhAnSoSinhVeId === void 0) { KhoaChuyenBenhAnSoSinhVeId = null; }
                    if (LucDeSoSinh === void 0) { LucDeSoSinh = null; }
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
                return ThongTinDoiTuongSoSinhTiepNhan;
            }());
            var YeuCauTiepNhanTheBHYT = /** @class */ (function () {
                function YeuCauTiepNhanTheBHYT(Id, YeuCauTiepNhanId, BenhNhanId, MaSoThe, MucHuong, MaDKBD, NoiDangKyBHYT, NgayHieuLuc, NgayHetHan, DiaChi, CoQuanBHXH, NgayDu5Nam, NgayDuocMienCungChiTra, MaKhuVuc, DuocMienCungChiTra, GiayMienCungChiTraId, TinhTrangThe, IsCheckedBHYT, DuocGiaHanThe, DisableGiaHanThe, DisabledGiaHanView, IsQuaHanTheBHYT, IsChange, GiayMienCungChiTra) {
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (MaSoThe === void 0) { MaSoThe = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (MaDKBD === void 0) { MaDKBD = null; }
                    if (NoiDangKyBHYT === void 0) { NoiDangKyBHYT = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHetHan === void 0) { NgayHetHan = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (CoQuanBHXH === void 0) { CoQuanBHXH = null; }
                    if (NgayDu5Nam === void 0) { NgayDu5Nam = null; }
                    if (NgayDuocMienCungChiTra === void 0) { NgayDuocMienCungChiTra = null; }
                    if (MaKhuVuc === void 0) { MaKhuVuc = null; }
                    if (DuocMienCungChiTra === void 0) { DuocMienCungChiTra = null; }
                    if (GiayMienCungChiTraId === void 0) { GiayMienCungChiTraId = null; }
                    if (TinhTrangThe === void 0) { TinhTrangThe = null; }
                    if (IsCheckedBHYT === void 0) { IsCheckedBHYT = null; }
                    if (DuocGiaHanThe === void 0) { DuocGiaHanThe = null; }
                    if (DisableGiaHanThe === void 0) { DisableGiaHanThe = false; }
                    if (DisabledGiaHanView === void 0) { DisabledGiaHanView = false; }
                    if (IsQuaHanTheBHYT === void 0) { IsQuaHanTheBHYT = false; }
                    if (IsChange === void 0) { IsChange = false; }
                    if (GiayMienCungChiTra === void 0) { GiayMienCungChiTra = null; }
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
                return YeuCauTiepNhanTheBHYT;
            }());
            var GiayMienCungChiTra = /** @class */ (function () {
                function GiayMienCungChiTra(Id, Ma, Ten, TenGuid, KichThuoc, DuongDan, LoaiTapTin, MoTa) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (KichThuoc === void 0) { KichThuoc = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.KichThuoc = KichThuoc;
                    this.DuongDan = DuongDan;
                    this.LoaiTapTin = LoaiTapTin;
                    this.MoTa = MoTa;
                }
                return GiayMienCungChiTra;
            }());
            var ThongTinBaoHiemTuNhan = /** @class */ (function () {
                function ThongTinBaoHiemTuNhan(Id, CongTyBaoHiemTuNhanId, TenCongTyBaoHiemTuNhan, MaSoThe, NgayHieuLuc, NgayHetHan, SoDienThoai, DiaChi) {
                    if (Id === void 0) { Id = 0; }
                    if (CongTyBaoHiemTuNhanId === void 0) { CongTyBaoHiemTuNhanId = null; }
                    if (TenCongTyBaoHiemTuNhan === void 0) { TenCongTyBaoHiemTuNhan = null; }
                    if (MaSoThe === void 0) { MaSoThe = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHetHan === void 0) { NgayHetHan = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    this.Id = Id;
                    this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
                    this.TenCongTyBaoHiemTuNhan = TenCongTyBaoHiemTuNhan;
                    this.MaSoThe = MaSoThe;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayHetHan = NgayHetHan;
                    this.SoDienThoai = SoDienThoai;
                    this.DiaChi = DiaChi;
                }
                return ThongTinBaoHiemTuNhan;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~4d8d1bb3-es2015.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~4d8d1bb3-es5.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~4d8d1bb3-es5.js.map