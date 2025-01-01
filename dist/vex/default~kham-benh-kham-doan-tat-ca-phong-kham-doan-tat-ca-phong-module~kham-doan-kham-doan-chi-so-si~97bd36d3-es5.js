(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-chi-so-si~97bd36d3"], {
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts ***!
          \*****************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanTimKiem, KhamDoanTiepNhanNhanVienTimKiem, KhamDoanTiepNhanNhanVienTrangThai, KhamDoanTiepNhanTinhTrangDoChiSoSinhTon, TiepNhanDichVuChiDinhQuery, DichVuChiDinhKhamSucKhoeBenhNhanQueryVo, CapNhatGridDichVuKhamSucKhoeNhanVien, ChonPhieuInKhamSucKhoe, ThongTinInPhieuKhamSucKhoe, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham, XetNghiemCovid */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanTimKiem", function () { return KhamDoanTiepNhanTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanNhanVienTimKiem", function () { return KhamDoanTiepNhanNhanVienTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanNhanVienTrangThai", function () { return KhamDoanTiepNhanNhanVienTrangThai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanTinhTrangDoChiSoSinhTon", function () { return KhamDoanTiepNhanTinhTrangDoChiSoSinhTon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanDichVuChiDinhQuery", function () { return TiepNhanDichVuChiDinhQuery; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuChiDinhKhamSucKhoeBenhNhanQueryVo", function () { return DichVuChiDinhKhamSucKhoeBenhNhanQueryVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatGridDichVuKhamSucKhoeNhanVien", function () { return CapNhatGridDichVuKhamSucKhoeNhanVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChonPhieuInKhamSucKhoe", function () { return ChonPhieuInKhamSucKhoe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinInPhieuKhamSucKhoe", function () { return ThongTinInPhieuKhamSucKhoe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham", function () { return DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCovid", function () { return XetNghiemCovid; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanTiepNhanTimKiem = /** @class */ (function () {
                function KhamDoanTiepNhanTimKiem(SearchString) {
                    if (SearchString === void 0) { SearchString = null; }
                    this.SearchString = SearchString;
                }
                return KhamDoanTiepNhanTimKiem;
            }());
            var KhamDoanTiepNhanNhanVienTimKiem = /** @class */ (function () {
                function KhamDoanTiepNhanNhanVienTimKiem(SearchString, SearchDaDoString, TrangThai, TinhTrangDoChiSoSinhTon, CongTyId, HopDongId, IsLichSu, IsDangKham, IsDangKhamVaDaKham) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (SearchDaDoString === void 0) { SearchDaDoString = null; }
                    if (TrangThai === void 0) { TrangThai = new KhamDoanTiepNhanNhanVienTrangThai(); }
                    if (TinhTrangDoChiSoSinhTon === void 0) { TinhTrangDoChiSoSinhTon = new KhamDoanTiepNhanTinhTrangDoChiSoSinhTon(); }
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (IsLichSu === void 0) { IsLichSu = false; }
                    if (IsDangKham === void 0) { IsDangKham = false; }
                    if (IsDangKhamVaDaKham === void 0) { IsDangKhamVaDaKham = false; }
                    this.SearchString = SearchString;
                    this.SearchDaDoString = SearchDaDoString;
                    this.TrangThai = TrangThai;
                    this.TinhTrangDoChiSoSinhTon = TinhTrangDoChiSoSinhTon;
                    this.CongTyId = CongTyId;
                    this.HopDongId = HopDongId;
                    this.IsLichSu = IsLichSu;
                    this.IsDangKham = IsDangKham;
                    this.IsDangKhamVaDaKham = IsDangKhamVaDaKham;
                }
                return KhamDoanTiepNhanNhanVienTimKiem;
            }());
            var KhamDoanTiepNhanNhanVienTrangThai = /** @class */ (function () {
                function KhamDoanTiepNhanNhanVienTrangThai(ChuaKham, DangKham, DaKham, HuyKham, DichVuPhatSinh) {
                    if (ChuaKham === void 0) { ChuaKham = true; }
                    if (DangKham === void 0) { DangKham = false; }
                    if (DaKham === void 0) { DaKham = false; }
                    if (HuyKham === void 0) { HuyKham = false; }
                    if (DichVuPhatSinh === void 0) { DichVuPhatSinh = false; }
                    this.ChuaKham = ChuaKham;
                    this.DangKham = DangKham;
                    this.DaKham = DaKham;
                    this.HuyKham = HuyKham;
                    this.DichVuPhatSinh = DichVuPhatSinh;
                }
                return KhamDoanTiepNhanNhanVienTrangThai;
            }());
            var KhamDoanTiepNhanTinhTrangDoChiSoSinhTon = /** @class */ (function () {
                function KhamDoanTiepNhanTinhTrangDoChiSoSinhTon(ChuaDo, DaDo) {
                    if (ChuaDo === void 0) { ChuaDo = true; }
                    if (DaDo === void 0) { DaDo = true; }
                    this.ChuaDo = ChuaDo;
                    this.DaDo = DaDo;
                }
                return KhamDoanTiepNhanTinhTrangDoChiSoSinhTon;
            }());
            var TiepNhanDichVuChiDinhQuery = /** @class */ (function () {
                function TiepNhanDichVuChiDinhQuery(HopDongKhamSucKhoeNhanVienId, NgayThangNamSinh, NamSinh, GioiTinh, TinhTrangHonNhan, CoMangThai, GoiKhamSucKhoeId) {
                    if (HopDongKhamSucKhoeNhanVienId === void 0) { HopDongKhamSucKhoeNhanVienId = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (TinhTrangHonNhan === void 0) { TinhTrangHonNhan = null; }
                    if (CoMangThai === void 0) { CoMangThai = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    this.HopDongKhamSucKhoeNhanVienId = HopDongKhamSucKhoeNhanVienId;
                    this.NgayThangNamSinh = NgayThangNamSinh;
                    this.NamSinh = NamSinh;
                    this.GioiTinh = GioiTinh;
                    this.TinhTrangHonNhan = TinhTrangHonNhan;
                    this.CoMangThai = CoMangThai;
                    this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
                }
                return TiepNhanDichVuChiDinhQuery;
            }());
            var DichVuChiDinhKhamSucKhoeBenhNhanQueryVo = /** @class */ (function () {
                function DichVuChiDinhKhamSucKhoeBenhNhanQueryVo(YeuCauTiepNhanId, GoiKhamSucKhoeId, LaDichVuThem) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    if (LaDichVuThem === void 0) { LaDichVuThem = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
                    this.LaDichVuThem = LaDichVuThem;
                }
                return DichVuChiDinhKhamSucKhoeBenhNhanQueryVo;
            }());
            var CapNhatGridDichVuKhamSucKhoeNhanVien = /** @class */ (function () {
                function CapNhatGridDichVuKhamSucKhoeNhanVien(YeuCauTiepNhanId, 
                //public LoaiDichVu: NhomDichVuChiDinhKhamSucKhoe = null,
                LaDichVuKham, YeuCauDichVuBenhVienId, DonGia, IsUpdateDonGia, SoLan, IsUpdateSoLan, NoiThucHienId, IsUpdateNoiThucHien, 
                //Cập nhật 31/03/2022
                XoaDichVuDaChiDinhTrongGoiChung, GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId, GoiKhamSucKhoeChungDichVuKyThuatNhanVienId) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = 0; }
                    if (LaDichVuKham === void 0) { LaDichVuKham = false; }
                    if (YeuCauDichVuBenhVienId === void 0) { YeuCauDichVuBenhVienId = 0; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (IsUpdateDonGia === void 0) { IsUpdateDonGia = false; }
                    if (SoLan === void 0) { SoLan = null; }
                    if (IsUpdateSoLan === void 0) { IsUpdateSoLan = false; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (IsUpdateNoiThucHien === void 0) { IsUpdateNoiThucHien = false; }
                    if (XoaDichVuDaChiDinhTrongGoiChung === void 0) { XoaDichVuDaChiDinhTrongGoiChung = null; }
                    if (GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId === void 0) { GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = null; }
                    if (GoiKhamSucKhoeChungDichVuKyThuatNhanVienId === void 0) { GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.LaDichVuKham = LaDichVuKham;
                    this.YeuCauDichVuBenhVienId = YeuCauDichVuBenhVienId;
                    this.DonGia = DonGia;
                    this.IsUpdateDonGia = IsUpdateDonGia;
                    this.SoLan = SoLan;
                    this.IsUpdateSoLan = IsUpdateSoLan;
                    this.NoiThucHienId = NoiThucHienId;
                    this.IsUpdateNoiThucHien = IsUpdateNoiThucHien;
                    this.XoaDichVuDaChiDinhTrongGoiChung = XoaDichVuDaChiDinhTrongGoiChung;
                    this.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
                    this.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
                }
                return CapNhatGridDichVuKhamSucKhoeNhanVien;
            }());
            var ChonPhieuInKhamSucKhoe = /** @class */ (function () {
                function ChonPhieuInKhamSucKhoe(SoKhamSucKhoeDinhKy, PhieuDangKyKhamSucKhoe, BangHuongDanKhamSucKhoe) {
                    if (SoKhamSucKhoeDinhKy === void 0) { SoKhamSucKhoeDinhKy = true; }
                    if (PhieuDangKyKhamSucKhoe === void 0) { PhieuDangKyKhamSucKhoe = true; }
                    if (BangHuongDanKhamSucKhoe === void 0) { BangHuongDanKhamSucKhoe = true; }
                    this.SoKhamSucKhoeDinhKy = SoKhamSucKhoeDinhKy;
                    this.PhieuDangKyKhamSucKhoe = PhieuDangKyKhamSucKhoe;
                    this.BangHuongDanKhamSucKhoe = BangHuongDanKhamSucKhoe;
                }
                return ChonPhieuInKhamSucKhoe;
            }());
            var ThongTinInPhieuKhamSucKhoe = /** @class */ (function () {
                function ThongTinInPhieuKhamSucKhoe(HopDongKhamSucKhoeNhanVienId, TenFile, HostingName, LoaiHoSoKhamSucKhoe, NoFooter) {
                    if (HopDongKhamSucKhoeNhanVienId === void 0) { HopDongKhamSucKhoeNhanVienId = null; }
                    if (TenFile === void 0) { TenFile = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (LoaiHoSoKhamSucKhoe === void 0) { LoaiHoSoKhamSucKhoe = null; }
                    if (NoFooter === void 0) { NoFooter = null; }
                    this.HopDongKhamSucKhoeNhanVienId = HopDongKhamSucKhoeNhanVienId;
                    this.TenFile = TenFile;
                    this.HostingName = HostingName;
                    this.LoaiHoSoKhamSucKhoe = LoaiHoSoKhamSucKhoe;
                    this.NoFooter = NoFooter;
                }
                return ThongTinInPhieuKhamSucKhoe;
            }());
            var DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham = /** @class */ (function () {
                function DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham(Ids, LoaiMauXetNghiem, LoaiMauXetNghiemText) {
                    if (Ids === void 0) { Ids = []; }
                    if (LoaiMauXetNghiem === void 0) { LoaiMauXetNghiem = null; }
                    if (LoaiMauXetNghiemText === void 0) { LoaiMauXetNghiemText = null; }
                    this.Ids = Ids;
                    this.LoaiMauXetNghiem = LoaiMauXetNghiem;
                    this.LoaiMauXetNghiemText = LoaiMauXetNghiemText;
                }
                return DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham;
            }());
            var XetNghiemCovid = /** @class */ (function () {
                function XetNghiemCovid(BieuHienLamSang, DichTeSarsCoV2, LoaiBenhPham) {
                    if (BieuHienLamSang === void 0) { BieuHienLamSang = null; }
                    if (DichTeSarsCoV2 === void 0) { DichTeSarsCoV2 = null; }
                    if (LoaiBenhPham === void 0) { LoaiBenhPham = null; }
                    this.BieuHienLamSang = BieuHienLamSang;
                    this.DichTeSarsCoV2 = DichTeSarsCoV2;
                    this.LoaiBenhPham = LoaiBenhPham;
                }
                return XetNghiemCovid;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan.model.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan.model.ts ***!
          \***********************************************************/
        /*! exports provided: KhamDoanThongTinHanhChinh, TimKiemHopDongKhamTheoCongTy, HopDongKhamSucKhoeNhanVien, YeuCauTiepNhanKhamSucKhoe, TiepNhanDichVuChiDinh, TiepNhanDichVuChiDinhMultiselect, DichVuGoiChungXoaChuaBatDauKham, ListInChiDinh */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanThongTinHanhChinh", function () { return KhamDoanThongTinHanhChinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemHopDongKhamTheoCongTy", function () { return TimKiemHopDongKhamTheoCongTy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongKhamSucKhoeNhanVien", function () { return HopDongKhamSucKhoeNhanVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauTiepNhanKhamSucKhoe", function () { return YeuCauTiepNhanKhamSucKhoe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanDichVuChiDinh", function () { return TiepNhanDichVuChiDinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanDichVuChiDinhMultiselect", function () { return TiepNhanDichVuChiDinhMultiselect; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuGoiChungXoaChuaBatDauKham", function () { return DichVuGoiChungXoaChuaBatDauKham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInChiDinh", function () { return ListInChiDinh; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var KhamDoanThongTinHanhChinh = /** @class */ (function () {
                function KhamDoanThongTinHanhChinh(Id, MaYeuCauTiepNhan, MaBenhNhan, HoTen, TenGioiTinh, NgaySinh, ThangSinh, NamSinh, Tuoi, SoDienThoaiDisplay, TenNgheNghiep, TenDanToc, DiaChiDisplay, TenCongTy) {
                    if (Id === void 0) { Id = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (TenGioiTinh === void 0) { TenGioiTinh = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (SoDienThoaiDisplay === void 0) { SoDienThoaiDisplay = null; }
                    if (TenNgheNghiep === void 0) { TenNgheNghiep = null; }
                    if (TenDanToc === void 0) { TenDanToc = null; }
                    if (DiaChiDisplay === void 0) { DiaChiDisplay = null; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    this.Id = Id;
                    this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
                    this.MaBenhNhan = MaBenhNhan;
                    this.HoTen = HoTen;
                    this.TenGioiTinh = TenGioiTinh;
                    this.NgaySinh = NgaySinh;
                    this.ThangSinh = ThangSinh;
                    this.NamSinh = NamSinh;
                    this.Tuoi = Tuoi;
                    this.SoDienThoaiDisplay = SoDienThoaiDisplay;
                    this.TenNgheNghiep = TenNgheNghiep;
                    this.TenDanToc = TenDanToc;
                    this.DiaChiDisplay = DiaChiDisplay;
                    this.TenCongTy = TenCongTy;
                }
                return KhamDoanThongTinHanhChinh;
            }());
            var TimKiemHopDongKhamTheoCongTy = /** @class */ (function () {
                function TimKiemHopDongKhamTheoCongTy(CongTyId, HopDongId, NgayHopDong, LoaiHopDong, TrangThai, SoBenhNhan, NgayHieuLuc, NgayKetThuc) {
                    if (CongTyId === void 0) { CongTyId = null; }
                    if (HopDongId === void 0) { HopDongId = null; }
                    if (NgayHopDong === void 0) { NgayHopDong = null; }
                    if (LoaiHopDong === void 0) { LoaiHopDong = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (SoBenhNhan === void 0) { SoBenhNhan = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayKetThuc === void 0) { NgayKetThuc = null; }
                    this.CongTyId = CongTyId;
                    this.HopDongId = HopDongId;
                    this.NgayHopDong = NgayHopDong;
                    this.LoaiHopDong = LoaiHopDong;
                    this.TrangThai = TrangThai;
                    this.SoBenhNhan = SoBenhNhan;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayKetThuc = NgayKetThuc;
                }
                return TimKiemHopDongKhamTheoCongTy;
            }());
            var HopDongKhamSucKhoeNhanVien = /** @class */ (function () {
                function HopDongKhamSucKhoeNhanVien(Id, HopDongKhamSucKhoeId, BenhNhanId, MaNhanVien, HoTen, HoTenKhac, NgaySinh, ThangSinh, NamSinh, NgayThangNamSinh, Tuoi, SoDienThoai, SoChungMinhThu, GioiTinh, NgheNghiepId, QuocTichId, DanTocId, DiaChi, PhuongXaId, QuanHuyenId, TinhThanhId, NhomMau, YeuToRh, Email, TenDonViHoacBoPhan, NhomDoiTuongKhamSucKhoe, GoiKhamSucKhoeId, TenGoiKhamSucKhoe, TinhTrangHonNhan, CoMangThai, GhiChuTienSuBenh, GhiChuDiUngThuoc, HuyKham, YeuCauTiepNhan, DichVuChiDinhThems, DichVuChiDinhTrongGois) {
                    if (Id === void 0) { Id = 0; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (MaNhanVien === void 0) { MaNhanVien = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (HoTenKhac === void 0) { HoTenKhac = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (Tuoi === void 0) { Tuoi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (QuocTichId === void 0) { QuocTichId = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (NhomMau === void 0) { NhomMau = null; }
                    if (YeuToRh === void 0) { YeuToRh = null; }
                    if (Email === void 0) { Email = null; }
                    if (TenDonViHoacBoPhan === void 0) { TenDonViHoacBoPhan = null; }
                    if (NhomDoiTuongKhamSucKhoe === void 0) { NhomDoiTuongKhamSucKhoe = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    if (TenGoiKhamSucKhoe === void 0) { TenGoiKhamSucKhoe = null; }
                    if (TinhTrangHonNhan === void 0) { TinhTrangHonNhan = null; }
                    if (CoMangThai === void 0) { CoMangThai = null; }
                    if (GhiChuTienSuBenh === void 0) { GhiChuTienSuBenh = null; }
                    if (GhiChuDiUngThuoc === void 0) { GhiChuDiUngThuoc = null; }
                    if (HuyKham === void 0) { HuyKham = null; }
                    if (YeuCauTiepNhan === void 0) { YeuCauTiepNhan = null; }
                    if (DichVuChiDinhThems === void 0) { DichVuChiDinhThems = new Array(); }
                    if (DichVuChiDinhTrongGois === void 0) { DichVuChiDinhTrongGois = new Array(); }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.BenhNhanId = BenhNhanId;
                    this.MaNhanVien = MaNhanVien;
                    this.HoTen = HoTen;
                    this.HoTenKhac = HoTenKhac;
                    this.NgaySinh = NgaySinh;
                    this.ThangSinh = ThangSinh;
                    this.NamSinh = NamSinh;
                    this.NgayThangNamSinh = NgayThangNamSinh;
                    this.Tuoi = Tuoi;
                    this.SoDienThoai = SoDienThoai;
                    this.SoChungMinhThu = SoChungMinhThu;
                    this.GioiTinh = GioiTinh;
                    this.NgheNghiepId = NgheNghiepId;
                    this.QuocTichId = QuocTichId;
                    this.DanTocId = DanTocId;
                    this.DiaChi = DiaChi;
                    this.PhuongXaId = PhuongXaId;
                    this.QuanHuyenId = QuanHuyenId;
                    this.TinhThanhId = TinhThanhId;
                    this.NhomMau = NhomMau;
                    this.YeuToRh = YeuToRh;
                    this.Email = Email;
                    this.TenDonViHoacBoPhan = TenDonViHoacBoPhan;
                    this.NhomDoiTuongKhamSucKhoe = NhomDoiTuongKhamSucKhoe;
                    this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
                    this.TenGoiKhamSucKhoe = TenGoiKhamSucKhoe;
                    this.TinhTrangHonNhan = TinhTrangHonNhan;
                    this.CoMangThai = CoMangThai;
                    this.GhiChuTienSuBenh = GhiChuTienSuBenh;
                    this.GhiChuDiUngThuoc = GhiChuDiUngThuoc;
                    this.HuyKham = HuyKham;
                    this.YeuCauTiepNhan = YeuCauTiepNhan;
                    this.DichVuChiDinhThems = DichVuChiDinhThems;
                    this.DichVuChiDinhTrongGois = DichVuChiDinhTrongGois;
                }
                return HopDongKhamSucKhoeNhanVien;
            }());
            var YeuCauTiepNhanKhamSucKhoe = /** @class */ (function () {
                function YeuCauTiepNhanKhamSucKhoe(Id, HopDongKhamSucKhoeNhanVien, TrangThaiYeuCauTiepNhan, IsBatDauKhamTuDanhSach, HopDongKhamSucKhoeNhanVienDanhSachId) {
                    if (Id === void 0) { Id = 0; }
                    if (HopDongKhamSucKhoeNhanVien === void 0) { HopDongKhamSucKhoeNhanVien = null; }
                    if (TrangThaiYeuCauTiepNhan === void 0) { TrangThaiYeuCauTiepNhan = null; }
                    if (IsBatDauKhamTuDanhSach === void 0) { IsBatDauKhamTuDanhSach = false; }
                    if (HopDongKhamSucKhoeNhanVienDanhSachId === void 0) { HopDongKhamSucKhoeNhanVienDanhSachId = null; }
                    this.Id = Id;
                    this.HopDongKhamSucKhoeNhanVien = HopDongKhamSucKhoeNhanVien;
                    this.TrangThaiYeuCauTiepNhan = TrangThaiYeuCauTiepNhan;
                    this.IsBatDauKhamTuDanhSach = IsBatDauKhamTuDanhSach;
                    this.HopDongKhamSucKhoeNhanVienDanhSachId = HopDongKhamSucKhoeNhanVienDanhSachId;
                }
                return YeuCauTiepNhanKhamSucKhoe;
            }());
            var TiepNhanDichVuChiDinh = /** @class */ (function () {
                function TiepNhanDichVuChiDinh(YeuCauTiepNhanId, LoaiDichVu, TenNhomDichVu, LoaiDichVuKyThuat, DichVuBenhVienId, Ma, Ten, LoaiGiaId, TenLoaiGia, SoLan, DonGiaBenhVien, DonGiaMoi, DonGiaUuDai, DonGiaChuaUuDai, ThanhTien, NoiThucHienId, TenNoiThucHien, GoiKhamSucKhoeId, TinhTrang, TenTinhTrang, LaDichVuKham, ChuyenKhoaKhamSucKhoe, LoaiNhomDichVuId, TenGoiKhamSucKhoe, SoLanChuaLuu, IsFirstLoad, 
                //BVHD-3618
                LaGoiChung, GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId, GoiKhamSucKhoeChungDichVuKyThuatNhanVienId, 
                //BVHD-3668
                GoiKhamSucKhoeDichVuPhatSinhId) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (LoaiDichVu === void 0) { LoaiDichVu = null; }
                    if (TenNhomDichVu === void 0) { TenNhomDichVu = null; }
                    if (LoaiDichVuKyThuat === void 0) { LoaiDichVuKyThuat = null; }
                    if (DichVuBenhVienId === void 0) { DichVuBenhVienId = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (LoaiGiaId === void 0) { LoaiGiaId = null; }
                    if (TenLoaiGia === void 0) { TenLoaiGia = null; }
                    if (SoLan === void 0) { SoLan = null; }
                    if (DonGiaBenhVien === void 0) { DonGiaBenhVien = null; }
                    if (DonGiaMoi === void 0) { DonGiaMoi = null; }
                    if (DonGiaUuDai === void 0) { DonGiaUuDai = null; }
                    if (DonGiaChuaUuDai === void 0) { DonGiaChuaUuDai = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (TenNoiThucHien === void 0) { TenNoiThucHien = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    if (TinhTrang === void 0) { TinhTrang = null; }
                    if (TenTinhTrang === void 0) { TenTinhTrang = null; }
                    if (LaDichVuKham === void 0) { LaDichVuKham = false; }
                    if (ChuyenKhoaKhamSucKhoe === void 0) { ChuyenKhoaKhamSucKhoe = null; }
                    if (LoaiNhomDichVuId === void 0) { LoaiNhomDichVuId = null; }
                    if (TenGoiKhamSucKhoe === void 0) { TenGoiKhamSucKhoe = null; }
                    if (SoLanChuaLuu === void 0) { SoLanChuaLuu = 0; }
                    if (IsFirstLoad === void 0) { IsFirstLoad = true; }
                    if (LaGoiChung === void 0) { LaGoiChung = null; }
                    if (GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId === void 0) { GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = null; }
                    if (GoiKhamSucKhoeChungDichVuKyThuatNhanVienId === void 0) { GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = null; }
                    if (GoiKhamSucKhoeDichVuPhatSinhId === void 0) { GoiKhamSucKhoeDichVuPhatSinhId = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.LoaiDichVu = LoaiDichVu;
                    this.TenNhomDichVu = TenNhomDichVu;
                    this.LoaiDichVuKyThuat = LoaiDichVuKyThuat;
                    this.DichVuBenhVienId = DichVuBenhVienId;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.LoaiGiaId = LoaiGiaId;
                    this.TenLoaiGia = TenLoaiGia;
                    this.SoLan = SoLan;
                    this.DonGiaBenhVien = DonGiaBenhVien;
                    this.DonGiaMoi = DonGiaMoi;
                    this.DonGiaUuDai = DonGiaUuDai;
                    this.DonGiaChuaUuDai = DonGiaChuaUuDai;
                    this.ThanhTien = ThanhTien;
                    this.NoiThucHienId = NoiThucHienId;
                    this.TenNoiThucHien = TenNoiThucHien;
                    this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
                    this.TinhTrang = TinhTrang;
                    this.TenTinhTrang = TenTinhTrang;
                    this.LaDichVuKham = LaDichVuKham;
                    this.ChuyenKhoaKhamSucKhoe = ChuyenKhoaKhamSucKhoe;
                    this.LoaiNhomDichVuId = LoaiNhomDichVuId;
                    this.TenGoiKhamSucKhoe = TenGoiKhamSucKhoe;
                    this.SoLanChuaLuu = SoLanChuaLuu;
                    this.IsFirstLoad = IsFirstLoad;
                    this.LaGoiChung = LaGoiChung;
                    this.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
                    this.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
                    this.GoiKhamSucKhoeDichVuPhatSinhId = GoiKhamSucKhoeDichVuPhatSinhId;
                }
                return TiepNhanDichVuChiDinh;
            }());
            var TiepNhanDichVuChiDinhMultiselect = /** @class */ (function () {
                function TiepNhanDichVuChiDinhMultiselect(YeuCauTiepNhanId, LoaiNhomDichVuId, GoiKhamSucKhoeId, DichVus, DichVuThems, DichVuGois, HinhThucKhamBenh, HopDongKhamSucKhoeId, 
                //BVHD-3618
                HopDongKhamSucKhoeNhanVienId, 
                //BVHD-3668
                LaGoiPhatSinh, 
                //BVHD-3761
                BieuHienLamSang, DichTeSarsCoV2) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (LoaiNhomDichVuId === void 0) { LoaiNhomDichVuId = null; }
                    if (GoiKhamSucKhoeId === void 0) { GoiKhamSucKhoeId = null; }
                    if (DichVus === void 0) { DichVus = []; }
                    if (DichVuThems === void 0) { DichVuThems = []; }
                    if (DichVuGois === void 0) { DichVuGois = []; }
                    if (HinhThucKhamBenh === void 0) { HinhThucKhamBenh = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = null; }
                    if (HopDongKhamSucKhoeNhanVienId === void 0) { HopDongKhamSucKhoeNhanVienId = null; }
                    if (LaGoiPhatSinh === void 0) { LaGoiPhatSinh = false; }
                    if (BieuHienLamSang === void 0) { BieuHienLamSang = null; }
                    if (DichTeSarsCoV2 === void 0) { DichTeSarsCoV2 = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.LoaiNhomDichVuId = LoaiNhomDichVuId;
                    this.GoiKhamSucKhoeId = GoiKhamSucKhoeId;
                    this.DichVus = DichVus;
                    this.DichVuThems = DichVuThems;
                    this.DichVuGois = DichVuGois;
                    this.HinhThucKhamBenh = HinhThucKhamBenh;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.HopDongKhamSucKhoeNhanVienId = HopDongKhamSucKhoeNhanVienId;
                    this.LaGoiPhatSinh = LaGoiPhatSinh;
                    this.BieuHienLamSang = BieuHienLamSang;
                    this.DichTeSarsCoV2 = DichTeSarsCoV2;
                }
                return TiepNhanDichVuChiDinhMultiselect;
            }());
            var DichVuGoiChungXoaChuaBatDauKham = /** @class */ (function () {
                function DichVuGoiChungXoaChuaBatDauKham(GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId, GoiKhamSucKhoeChungDichVuKyThuatNhanVienId) {
                    if (GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId === void 0) { GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = null; }
                    if (GoiKhamSucKhoeChungDichVuKyThuatNhanVienId === void 0) { GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = null; }
                    this.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
                    this.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
                }
                return DichVuGoiChungXoaChuaBatDauKham;
            }());
            var ListInChiDinh = /** @class */ (function () {
                function ListInChiDinh(NhomChiDinhId, DichVuChiDinhId) {
                    if (NhomChiDinhId === void 0) { NhomChiDinhId = 0; }
                    if (DichVuChiDinhId === void 0) { DichVuChiDinhId = 0; }
                    this.NhomChiDinhId = NhomChiDinhId;
                    this.DichVuChiDinhId = DichVuChiDinhId;
                }
                return ListInChiDinh;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-chi-so-si~97bd36d3-es2015.js.map
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-chi-so-si~97bd36d3-es5.js.map
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-chi-so-si~97bd36d3-es5.js.map