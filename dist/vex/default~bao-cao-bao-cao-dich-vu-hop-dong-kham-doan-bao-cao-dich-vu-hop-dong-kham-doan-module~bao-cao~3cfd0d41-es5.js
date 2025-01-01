(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~3cfd0d41"], {
        /***/ "./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/main/tiep-nhan-benh-nhan/tiep-nhan-benh-nhan.model.ts ***!
          \*******************************************************************************/
        /*! exports provided: TiepNhanBenhNhan, DanhSachDichVuGoiChon, DanhSachDichVuChonTrongLanPopup, DanhSachGoiChonTrongLanPopup, DanhSachGoiChon, DichVuTrongGoiKhiThem, CheckDuSoLuongTonTrongGoi, ChiTietGoiDichVuChiDinhTheoBenhNhan, TiepNhanBenhNhanViewModel, BenhNhanTiepNhanBenhNhanViewModel, BaoHiemTuNhanViewModel, DonViHanhChinhBenhNhanViewModel, GridLichSuKCB, GridLichSuKiemTraTheBHYT, LyDoKhamBenhBenhNhanViewModel, PhongNgoaiTruBenhNhanViewModel, GiayChuyenVienBenhNhanViewModel, GiayMienCungChiTraViewModel, ThemTaiLieuDinhKem, TaiLieuModel, HoSoYeuCauTiepNhanViewModel, DoiTuongUuTienKhamChuaBenhBenhNhanViewModel, DoiTuongUuDaiViewModel, CongTyUuDaiViewModel, NoiGioiThieuViewModel, NguoiGioiThieuViewModel, CongTyBaoHiemTuNhanViewModel, YeuCauKhamBenhTiepNhanViewModel, YeuCauDichVuKyThuatTiepNhanViewModel, YeuCauVatTuBenhVienTiepNhanViewModel, YeuCauDuocPhamBenhVienTiepNhanViewModel, ThemChiDinhDichVu, ThemChiDinhDichVuKyThuat, DiaChiBHYT, ThemBaoHiemTuNhan, ThemBaoHiemTuNhanGridVo, GetDonGiaVo, AddGoiForUpdateView, ChiDinhDichVuGridVo, ChiDinhDichVuKyThuatGridVo, TimKiemBenhNhanGridVo, TimKiemBenhNhanSearch, DataTimKiem, TimKiemBenhNhanPopup, GridUpdate, ListChiDinhNeedUpdate, DefaultValueTNBNModel, ListDichVuCheckTruocDo, XetNghiemCovid, DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhan", function () { return TiepNhanBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDichVuGoiChon", function () { return DanhSachDichVuGoiChon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDichVuChonTrongLanPopup", function () { return DanhSachDichVuChonTrongLanPopup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachGoiChonTrongLanPopup", function () { return DanhSachGoiChonTrongLanPopup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachGoiChon", function () { return DanhSachGoiChon; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuTrongGoiKhiThem", function () { return DichVuTrongGoiKhiThem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckDuSoLuongTonTrongGoi", function () { return CheckDuSoLuongTonTrongGoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietGoiDichVuChiDinhTheoBenhNhan", function () { return ChiTietGoiDichVuChiDinhTheoBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiepNhanBenhNhanViewModel", function () { return TiepNhanBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanTiepNhanBenhNhanViewModel", function () { return BenhNhanTiepNhanBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoHiemTuNhanViewModel", function () { return BaoHiemTuNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonViHanhChinhBenhNhanViewModel", function () { return DonViHanhChinhBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLichSuKCB", function () { return GridLichSuKCB; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLichSuKiemTraTheBHYT", function () { return GridLichSuKiemTraTheBHYT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoKhamBenhBenhNhanViewModel", function () { return LyDoKhamBenhBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhongNgoaiTruBenhNhanViewModel", function () { return PhongNgoaiTruBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayChuyenVienBenhNhanViewModel", function () { return GiayChuyenVienBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiayMienCungChiTraViewModel", function () { return GiayMienCungChiTraViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemTaiLieuDinhKem", function () { return ThemTaiLieuDinhKem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaiLieuModel", function () { return TaiLieuModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoSoYeuCauTiepNhanViewModel", function () { return HoSoYeuCauTiepNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoiTuongUuTienKhamChuaBenhBenhNhanViewModel", function () { return DoiTuongUuTienKhamChuaBenhBenhNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoiTuongUuDaiViewModel", function () { return DoiTuongUuDaiViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongTyUuDaiViewModel", function () { return CongTyUuDaiViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiGioiThieuViewModel", function () { return NoiGioiThieuViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguoiGioiThieuViewModel", function () { return NguoiGioiThieuViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongTyBaoHiemTuNhanViewModel", function () { return CongTyBaoHiemTuNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauKhamBenhTiepNhanViewModel", function () { return YeuCauKhamBenhTiepNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDichVuKyThuatTiepNhanViewModel", function () { return YeuCauDichVuKyThuatTiepNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauVatTuBenhVienTiepNhanViewModel", function () { return YeuCauVatTuBenhVienTiepNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDuocPhamBenhVienTiepNhanViewModel", function () { return YeuCauDuocPhamBenhVienTiepNhanViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemChiDinhDichVu", function () { return ThemChiDinhDichVu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemChiDinhDichVuKyThuat", function () { return ThemChiDinhDichVuKyThuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaChiBHYT", function () { return DiaChiBHYT; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemBaoHiemTuNhan", function () { return ThemBaoHiemTuNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemBaoHiemTuNhanGridVo", function () { return ThemBaoHiemTuNhanGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDonGiaVo", function () { return GetDonGiaVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGoiForUpdateView", function () { return AddGoiForUpdateView; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiDinhDichVuGridVo", function () { return ChiDinhDichVuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiDinhDichVuKyThuatGridVo", function () { return ChiDinhDichVuKyThuatGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBenhNhanGridVo", function () { return TimKiemBenhNhanGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBenhNhanSearch", function () { return TimKiemBenhNhanSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTimKiem", function () { return DataTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBenhNhanPopup", function () { return TimKiemBenhNhanPopup; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridUpdate", function () { return GridUpdate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListChiDinhNeedUpdate", function () { return ListChiDinhNeedUpdate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueTNBNModel", function () { return DefaultValueTNBNModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDichVuCheckTruocDo", function () { return ListDichVuCheckTruocDo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCovid", function () { return XetNghiemCovid; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham", function () { return DichVuKyThuatBenhVienIdsSarsCoVLoaiBenhPham; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TiepNhanBenhNhan = /** @class */ (function () {
                function TiepNhanBenhNhan() {
                }
                return TiepNhanBenhNhan;
            }());
            var DanhSachDichVuGoiChon = /** @class */ (function () {
                function DanhSachDichVuGoiChon(TenChuongTrinh, DichVuId, YeuCauGoiDichVuId, ChuongTrinhGoiDichVuId, SoLanKhamTrongYCTN, SoLanKhamNgoaiYCTN, DichVuKhamBenh, DichVuKyThuat, DichVuGiuongBenh, IsFromMarketing) {
                    if (TenChuongTrinh === void 0) { TenChuongTrinh = null; }
                    if (DichVuId === void 0) { DichVuId = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (ChuongTrinhGoiDichVuId === void 0) { ChuongTrinhGoiDichVuId = null; }
                    if (SoLanKhamTrongYCTN === void 0) { SoLanKhamTrongYCTN = null; }
                    if (SoLanKhamNgoaiYCTN === void 0) { SoLanKhamNgoaiYCTN = null; }
                    if (DichVuKhamBenh === void 0) { DichVuKhamBenh = false; }
                    if (DichVuKyThuat === void 0) { DichVuKyThuat = false; }
                    if (DichVuGiuongBenh === void 0) { DichVuGiuongBenh = false; }
                    if (IsFromMarketing === void 0) { IsFromMarketing = false; }
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
                return DanhSachDichVuGoiChon;
            }());
            var DanhSachDichVuChonTrongLanPopup = /** @class */ (function () {
                function DanhSachDichVuChonTrongLanPopup(Id, ChuongTrinhGoiDichVuId, YeuCauGoiDichVuId, IsFromMarketing, BenhNhanId, DichVuId, TenDichVu, SoLan, TenNhomDichVu, SoLuongDungLanNay, SoLuongConLai, ThuocGoi, TenGoi, DonGia, GiaSauChietKhau, GiaSauChietKhauDisplay, TrangThaiThanhToan, TrangThaiThanhToanDisplay, DaThanhToan, KhongThem, NhomGiaDichVuBenhVienId) {
                    if (Id === void 0) { Id = null; }
                    if (ChuongTrinhGoiDichVuId === void 0) { ChuongTrinhGoiDichVuId = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (IsFromMarketing === void 0) { IsFromMarketing = false; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (DichVuId === void 0) { DichVuId = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (SoLan === void 0) { SoLan = null; }
                    if (TenNhomDichVu === void 0) { TenNhomDichVu = null; }
                    if (SoLuongDungLanNay === void 0) { SoLuongDungLanNay = null; }
                    if (SoLuongConLai === void 0) { SoLuongConLai = null; }
                    if (ThuocGoi === void 0) { ThuocGoi = null; }
                    if (TenGoi === void 0) { TenGoi = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (GiaSauChietKhau === void 0) { GiaSauChietKhau = null; }
                    if (GiaSauChietKhauDisplay === void 0) { GiaSauChietKhauDisplay = null; }
                    if (TrangThaiThanhToan === void 0) { TrangThaiThanhToan = null; }
                    if (TrangThaiThanhToanDisplay === void 0) { TrangThaiThanhToanDisplay = null; }
                    if (DaThanhToan === void 0) { DaThanhToan = false; }
                    if (KhongThem === void 0) { KhongThem = false; }
                    if (NhomGiaDichVuBenhVienId === void 0) { NhomGiaDichVuBenhVienId = null; }
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
                return DanhSachDichVuChonTrongLanPopup;
            }());
            var DanhSachGoiChonTrongLanPopup = /** @class */ (function () {
                function DanhSachGoiChonTrongLanPopup(ThuocGoi, GiaSauChietKhau, GiaSauChietKhauDisplay, TrangThaiThanhToan, TrangThaiThanhToanDisplay) {
                    if (ThuocGoi === void 0) { ThuocGoi = null; }
                    if (GiaSauChietKhau === void 0) { GiaSauChietKhau = null; }
                    if (GiaSauChietKhauDisplay === void 0) { GiaSauChietKhauDisplay = null; }
                    if (TrangThaiThanhToan === void 0) { TrangThaiThanhToan = null; }
                    if (TrangThaiThanhToanDisplay === void 0) { TrangThaiThanhToanDisplay = null; }
                    this.ThuocGoi = ThuocGoi;
                    this.GiaSauChietKhau = GiaSauChietKhau;
                    this.GiaSauChietKhauDisplay = GiaSauChietKhauDisplay;
                    this.TrangThaiThanhToan = TrangThaiThanhToan;
                    this.TrangThaiThanhToanDisplay = TrangThaiThanhToanDisplay;
                }
                return DanhSachGoiChonTrongLanPopup;
            }());
            var DanhSachGoiChon = /** @class */ (function () {
                function DanhSachGoiChon(TenChuongTrinh, TenGoiDichVu, YeuCauGoiDichVuId, ChuongTrinhGoiDichVuId, IsFromMarketing, BenhNhanId, DaThanhToan, YeuCauTiepNhanId) {
                    if (TenChuongTrinh === void 0) { TenChuongTrinh = null; }
                    if (TenGoiDichVu === void 0) { TenGoiDichVu = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (ChuongTrinhGoiDichVuId === void 0) { ChuongTrinhGoiDichVuId = null; }
                    if (IsFromMarketing === void 0) { IsFromMarketing = false; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (DaThanhToan === void 0) { DaThanhToan = false; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    this.TenChuongTrinh = TenChuongTrinh;
                    this.TenGoiDichVu = TenGoiDichVu;
                    this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
                    this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
                    this.IsFromMarketing = IsFromMarketing;
                    this.BenhNhanId = BenhNhanId;
                    this.DaThanhToan = DaThanhToan;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                }
                return DanhSachGoiChon;
            }());
            var DichVuTrongGoiKhiThem = /** @class */ (function () {
                function DichVuTrongGoiKhiThem(TenChuongTrinh, YeuCauGoiDichVuId, ChuongTrinhGoiDichVuId, IsFromMarketing, BenhNhanId, TenDichVu, Data) {
                    if (TenChuongTrinh === void 0) { TenChuongTrinh = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (ChuongTrinhGoiDichVuId === void 0) { ChuongTrinhGoiDichVuId = null; }
                    if (IsFromMarketing === void 0) { IsFromMarketing = false; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (Data === void 0) { Data = null; }
                    this.TenChuongTrinh = TenChuongTrinh;
                    this.YeuCauGoiDichVuId = YeuCauGoiDichVuId;
                    this.ChuongTrinhGoiDichVuId = ChuongTrinhGoiDichVuId;
                    this.IsFromMarketing = IsFromMarketing;
                    this.BenhNhanId = BenhNhanId;
                    this.TenDichVu = TenDichVu;
                    this.Data = Data;
                }
                return DichVuTrongGoiKhiThem;
            }());
            var CheckDuSoLuongTonTrongGoi = /** @class */ (function () {
                function CheckDuSoLuongTonTrongGoi(DichVuThem, DanhSachDichVuChonTrongLanPopup) {
                    if (DichVuThem === void 0) { DichVuThem = null; }
                    if (DanhSachDichVuChonTrongLanPopup === void 0) { DanhSachDichVuChonTrongLanPopup = null; }
                    this.DichVuThem = DichVuThem;
                    this.DanhSachDichVuChonTrongLanPopup = DanhSachDichVuChonTrongLanPopup;
                }
                return CheckDuSoLuongTonTrongGoi;
            }());
            var ChiTietGoiDichVuChiDinhTheoBenhNhan = /** @class */ (function () {
                function ChiTietGoiDichVuChiDinhTheoBenhNhan(Id, YeuCauGoiDichVuId, ChuongTrinhGoiDichVuId, ChuongTrinhGoiDichVuChiTietId, DichVuBenhVienId, TenDichVu, NhomGoiDichVu, SoLuongSuDung, IsActive) {
                    if (Id === void 0) { Id = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (ChuongTrinhGoiDichVuId === void 0) { ChuongTrinhGoiDichVuId = null; }
                    if (ChuongTrinhGoiDichVuChiTietId === void 0) { ChuongTrinhGoiDichVuChiTietId = null; }
                    if (DichVuBenhVienId === void 0) { DichVuBenhVienId = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (NhomGoiDichVu === void 0) { NhomGoiDichVu = null; }
                    if (SoLuongSuDung === void 0) { SoLuongSuDung = null; }
                    if (IsActive === void 0) { IsActive = false; }
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
                return ChiTietGoiDichVuChiDinhTheoBenhNhan;
            }());
            var TiepNhanBenhNhanViewModel = /** @class */ (function () {
                function TiepNhanBenhNhanViewModel(DisableCoMienGiam, DisableDoiTuongUuDai, SoTienConLai, DanTocId, LoaiMienGiam, LstVoucherId, LstMaVoucher, BenhNhanId, 
                //update v2
                BHYTNgayHieuLuc, BHYTCoQuanBHXH, BHYTNgayHetHan, NgayThangNamSinh, NgayThangNamSinhDisplay, BHYTMucHuong, BHYTNgayDu5Nam, GioiTinhDisplay, BHYTDiaChi, NoiDangKyBHYT, BHYTMaSoThe, BHYTDuocMienCungChiTra, BHYTGiayMienCungChiTraId, BHYTGiayMienCungChiTra, BHYTNgayDuocMienCungChiTra, BHYTMaDKBD, CoBHYT, LyDoVaoVien, LyDoTiepNhanId, LyDoTiepNhanText, DuocChuyenVien, SoChuyenTuyen, TuyenChuyen, NoiChuyenId, LyDoChuyen, HoTen, NgaySinh, ThangSinh, NamSinh, SoChungMinhThu, GioiTinh, NgheNghiepId, QuocTichId, TinhThanhId, QuanHuyenId, PhuongXaId, DiaChi, SoDienThoai, Email, NoiLamViec, DuocUuDai, DoiTuongUuDaiId, DoiTuongUuDai, CongTyUuDaiId, CongTyUuDai, CoBHTN, 
                // public BHTNCongTyBaoHiemId: number = null,
                // public BHTNCongTyBaoHiem: CongTyBaoHiemTuNhanViewModel = null,
                // public BHTNMaSoThe: string = null,
                // public BHTNNgayHieuLuc: Date = null,
                // public BHTNNgayHetHan: Date = null,
                // public BHTNSoDienThoai: string = null,
                // public BHTNDiaChi: string = null,
                BaoHiemTuNhans, LoaiYeuCauTiepNhan, ThoiDiemTiepNhan, HinhThucDenId, NoiGioiThieuId, NguoiGioiThieuId, NguoiGioiThieu, NoiGioiThieu, TrieuChungTiepNhan, YeuCauKhamBenhs, YeuCauKhamBenhGrid, YeuCauKhacGrid, YeuCauDichVuKyThuats, YeuCauKyThuatGrid, YeuCauVatTuBenhViens, YeuCauDuocPhamBenhViens, HoSoYeuCauTiepNhans, 
                //người liên hệ
                NguoiLienHeHoTen, NguoiLienHeQuanHeNhanThanId, NguoiLienHeSoDienThoai, NguoiLienHeEmail, NguoiLienHeDiaChi, NguoiLienHePhuongXaId, NguoiLienHeQuanHuyenId, NguoiLienHeTinhThanhId, 
                //người liên hệ
                //update v2
                LoaiKham, ThoiGianTiepNhan, LaTaiKham, LyDoKhamBenhId, PhongKhamId, PhongKhamVaBacSiId, KhoaKhamId, GiayChuyenVienId, ThoiGianChuyenVien, DoiTuongUuTienKhamChuaBenhId, LaKhamTheoYeuCau, 
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
                MaDKBD, NgayCoHieuLucDisplay, NgayHetHieuLucDisplay, NgayDu5NamDisplay, DiaChiDisplay, cqBHXH, 
                //
                BenhNhan, LyDoKhamBenh, PhongKham, GiayChuyenVien, DoiTuongUuTienKhamChuaBenh, LyDoKhamModelText, KhoaKhamModelText, PhongKhamModelText, DoiTuongUuTienModelText, isOutOfDate, IsCheckedBHYT, TinhTrangThe, LoaiVoucher, GridLichSuKCB, GridLichSuKiemTraTheBHYT, TuNhap, 
                //update 21/08/2020
                MaBN, MaYeuCauTiepNhan, 
                // update CheckYeuCauTiepNhanTaoMoi
                CheckYeuCauTiepNhanTaoMoi, CoYeuCauGoiDichVu, 
                // cập nhật điều kiện cho phép tạo mới YCTN
                MessageKhongChoPhepTaoMoiYCTN, 
                // biến tạm lưu mess check thẻ BHYT từ cổng
                MessageErrFromBHYT, BieuHienLamSang, DichTeSarsCoV2, 
                //BVHD-3800
                LaCapCuu) {
                    if (DisableCoMienGiam === void 0) { DisableCoMienGiam = false; }
                    if (DisableDoiTuongUuDai === void 0) { DisableDoiTuongUuDai = false; }
                    if (SoTienConLai === void 0) { SoTienConLai = null; }
                    if (DanTocId === void 0) { DanTocId = 1; }
                    if (LoaiMienGiam === void 0) { LoaiMienGiam = 1; }
                    if (LstVoucherId === void 0) { LstVoucherId = []; }
                    if (LstMaVoucher === void 0) { LstMaVoucher = []; }
                    if (BenhNhanId === void 0) { BenhNhanId = null; }
                    if (BHYTNgayHieuLuc === void 0) { BHYTNgayHieuLuc = null; }
                    if (BHYTCoQuanBHXH === void 0) { BHYTCoQuanBHXH = null; }
                    if (BHYTNgayHetHan === void 0) { BHYTNgayHetHan = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (NgayThangNamSinhDisplay === void 0) { NgayThangNamSinhDisplay = null; }
                    if (BHYTMucHuong === void 0) { BHYTMucHuong = null; }
                    if (BHYTNgayDu5Nam === void 0) { BHYTNgayDu5Nam = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (BHYTDiaChi === void 0) { BHYTDiaChi = null; }
                    if (NoiDangKyBHYT === void 0) { NoiDangKyBHYT = null; }
                    if (BHYTMaSoThe === void 0) { BHYTMaSoThe = null; }
                    if (BHYTDuocMienCungChiTra === void 0) { BHYTDuocMienCungChiTra = false; }
                    if (BHYTGiayMienCungChiTraId === void 0) { BHYTGiayMienCungChiTraId = null; }
                    if (BHYTGiayMienCungChiTra === void 0) { BHYTGiayMienCungChiTra = null; }
                    if (BHYTNgayDuocMienCungChiTra === void 0) { BHYTNgayDuocMienCungChiTra = null; }
                    if (BHYTMaDKBD === void 0) { BHYTMaDKBD = null; }
                    if (CoBHYT === void 0) { CoBHYT = false; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = null; }
                    if (LyDoTiepNhanId === void 0) { LyDoTiepNhanId = 1; }
                    if (LyDoTiepNhanText === void 0) { LyDoTiepNhanText = null; }
                    if (DuocChuyenVien === void 0) { DuocChuyenVien = null; }
                    if (SoChuyenTuyen === void 0) { SoChuyenTuyen = null; }
                    if (TuyenChuyen === void 0) { TuyenChuyen = null; }
                    if (NoiChuyenId === void 0) { NoiChuyenId = null; }
                    if (LyDoChuyen === void 0) { LyDoChuyen = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (GioiTinh === void 0) { GioiTinh = 1; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (QuocTichId === void 0) { QuocTichId = 1; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (NoiLamViec === void 0) { NoiLamViec = null; }
                    if (DuocUuDai === void 0) { DuocUuDai = false; }
                    if (DoiTuongUuDaiId === void 0) { DoiTuongUuDaiId = null; }
                    if (DoiTuongUuDai === void 0) { DoiTuongUuDai = null; }
                    if (CongTyUuDaiId === void 0) { CongTyUuDaiId = null; }
                    if (CongTyUuDai === void 0) { CongTyUuDai = null; }
                    if (CoBHTN === void 0) { CoBHTN = null; }
                    if (BaoHiemTuNhans === void 0) { BaoHiemTuNhans = []; }
                    if (LoaiYeuCauTiepNhan === void 0) { LoaiYeuCauTiepNhan = 1; }
                    if (ThoiDiemTiepNhan === void 0) { ThoiDiemTiepNhan = null; }
                    if (HinhThucDenId === void 0) { HinhThucDenId = 1; }
                    if (NoiGioiThieuId === void 0) { NoiGioiThieuId = 1; }
                    if (NguoiGioiThieuId === void 0) { NguoiGioiThieuId = null; }
                    if (NguoiGioiThieu === void 0) { NguoiGioiThieu = null; }
                    if (NoiGioiThieu === void 0) { NoiGioiThieu = null; }
                    if (TrieuChungTiepNhan === void 0) { TrieuChungTiepNhan = null; }
                    if (YeuCauKhamBenhs === void 0) { YeuCauKhamBenhs = []; }
                    if (YeuCauKhamBenhGrid === void 0) { YeuCauKhamBenhGrid = []; }
                    if (YeuCauKhacGrid === void 0) { YeuCauKhacGrid = []; }
                    if (YeuCauDichVuKyThuats === void 0) { YeuCauDichVuKyThuats = []; }
                    if (YeuCauKyThuatGrid === void 0) { YeuCauKyThuatGrid = []; }
                    if (YeuCauVatTuBenhViens === void 0) { YeuCauVatTuBenhViens = []; }
                    if (YeuCauDuocPhamBenhViens === void 0) { YeuCauDuocPhamBenhViens = []; }
                    if (HoSoYeuCauTiepNhans === void 0) { HoSoYeuCauTiepNhans = []; }
                    if (NguoiLienHeHoTen === void 0) { NguoiLienHeHoTen = null; }
                    if (NguoiLienHeQuanHeNhanThanId === void 0) { NguoiLienHeQuanHeNhanThanId = null; }
                    if (NguoiLienHeSoDienThoai === void 0) { NguoiLienHeSoDienThoai = null; }
                    if (NguoiLienHeEmail === void 0) { NguoiLienHeEmail = null; }
                    if (NguoiLienHeDiaChi === void 0) { NguoiLienHeDiaChi = null; }
                    if (NguoiLienHePhuongXaId === void 0) { NguoiLienHePhuongXaId = null; }
                    if (NguoiLienHeQuanHuyenId === void 0) { NguoiLienHeQuanHuyenId = null; }
                    if (NguoiLienHeTinhThanhId === void 0) { NguoiLienHeTinhThanhId = null; }
                    if (LoaiKham === void 0) { LoaiKham = 1; }
                    if (ThoiGianTiepNhan === void 0) { ThoiGianTiepNhan = new Date(); }
                    if (LaTaiKham === void 0) { LaTaiKham = false; }
                    if (LyDoKhamBenhId === void 0) { LyDoKhamBenhId = null; }
                    if (PhongKhamId === void 0) { PhongKhamId = null; }
                    if (PhongKhamVaBacSiId === void 0) { PhongKhamVaBacSiId = null; }
                    if (KhoaKhamId === void 0) { KhoaKhamId = null; }
                    if (GiayChuyenVienId === void 0) { GiayChuyenVienId = null; }
                    if (ThoiGianChuyenVien === void 0) { ThoiGianChuyenVien = null; }
                    if (DoiTuongUuTienKhamChuaBenhId === void 0) { DoiTuongUuTienKhamChuaBenhId = null; }
                    if (LaKhamTheoYeuCau === void 0) { LaKhamTheoYeuCau = false; }
                    if (MaDKBD === void 0) { MaDKBD = null; }
                    if (NgayCoHieuLucDisplay === void 0) { NgayCoHieuLucDisplay = null; }
                    if (NgayHetHieuLucDisplay === void 0) { NgayHetHieuLucDisplay = null; }
                    if (NgayDu5NamDisplay === void 0) { NgayDu5NamDisplay = null; }
                    if (DiaChiDisplay === void 0) { DiaChiDisplay = null; }
                    if (cqBHXH === void 0) { cqBHXH = null; }
                    if (BenhNhan === void 0) { BenhNhan = null; }
                    if (LyDoKhamBenh === void 0) { LyDoKhamBenh = null; }
                    if (PhongKham === void 0) { PhongKham = null; }
                    if (GiayChuyenVien === void 0) { GiayChuyenVien = null; }
                    if (DoiTuongUuTienKhamChuaBenh === void 0) { DoiTuongUuTienKhamChuaBenh = null; }
                    if (LyDoKhamModelText === void 0) { LyDoKhamModelText = null; }
                    if (KhoaKhamModelText === void 0) { KhoaKhamModelText = null; }
                    if (PhongKhamModelText === void 0) { PhongKhamModelText = null; }
                    if (DoiTuongUuTienModelText === void 0) { DoiTuongUuTienModelText = null; }
                    if (isOutOfDate === void 0) { isOutOfDate = false; }
                    if (IsCheckedBHYT === void 0) { IsCheckedBHYT = true; }
                    if (TinhTrangThe === void 0) { TinhTrangThe = 3; }
                    if (LoaiVoucher === void 0) { LoaiVoucher = null; }
                    if (GridLichSuKCB === void 0) { GridLichSuKCB = []; }
                    if (GridLichSuKiemTraTheBHYT === void 0) { GridLichSuKiemTraTheBHYT = []; }
                    if (TuNhap === void 0) { TuNhap = false; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (CheckYeuCauTiepNhanTaoMoi === void 0) { CheckYeuCauTiepNhanTaoMoi = false; }
                    if (CoYeuCauGoiDichVu === void 0) { CoYeuCauGoiDichVu = null; }
                    if (MessageKhongChoPhepTaoMoiYCTN === void 0) { MessageKhongChoPhepTaoMoiYCTN = null; }
                    if (MessageErrFromBHYT === void 0) { MessageErrFromBHYT = null; }
                    if (BieuHienLamSang === void 0) { BieuHienLamSang = null; }
                    if (DichTeSarsCoV2 === void 0) { DichTeSarsCoV2 = null; }
                    if (LaCapCuu === void 0) { LaCapCuu = null; }
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
                return TiepNhanBenhNhanViewModel;
            }());
            var BenhNhanTiepNhanBenhNhanViewModel = /** @class */ (function () {
                function BenhNhanTiepNhanBenhNhanViewModel(CoBHYT, 
                //update v2
                BHYTDuocMienCungChiTra, BHYTGiayMienCungChiTraId, BHYTGiayMienCungChiTra, BHYTNgayDuocMienCungChiTra, CoBHTN, 
                // public BHTNCongTyBaoHiemId: number = null,
                // public BHTNCongTyBaoHiem: CongTyBaoHiemTuNhanViewModel = null,
                // public BHTNMaSoThe: string = null,
                // public BHTNNgayHieuLuc: Date = null,
                // public BHTNNgayHetHan: Date = null,
                // public BHTNSoDienThoai: string = null,
                // public BHTNDiaChi: string = null,
                BaoHiemTuNhans, 
                //update v2
                BHYTMaSoThe, HoTen, NgaySinh, ThangSinh, NamSinh, NgayThangNamSinh, NgayThangNamSinhDisplay, GioiTinh, GioiTinhDisplay, BHYTNoiDangKyId, NoiDangKyBHYT, BHYTDiaChi, BHYTNgayHieuLuc, BHYTNgayHetHan, 
                //Thong tin bo sung
                SoChungMinhThu, SoDienThoai, Email, DanTocId, QuocTichId, TinhThanhId, QuanHuyenId, PhuongXaId, DiaChi, NgheNghiepId, NoiLamViec, NguoiLienHeHoTen, NguoiLienHeQuanHeNhanThanId, NguoiLienHeSoDienThoai, NguoiLienHeEmail, DanTocModelText, QuocTichModelText, TinhThanhModelText, QuanHuyenModelText, PhuongXaModelText, NgheNghiepModelText, NguoiLienHeThanNhanModelText, BHYTCoQuanBHXH, BHYTNgayDu5Nam, BHYTNgayDu5NamDisplay, BHYTMaDKBD, MaBN) {
                    if (CoBHYT === void 0) { CoBHYT = null; }
                    if (BHYTDuocMienCungChiTra === void 0) { BHYTDuocMienCungChiTra = null; }
                    if (BHYTGiayMienCungChiTraId === void 0) { BHYTGiayMienCungChiTraId = null; }
                    if (BHYTGiayMienCungChiTra === void 0) { BHYTGiayMienCungChiTra = null; }
                    if (BHYTNgayDuocMienCungChiTra === void 0) { BHYTNgayDuocMienCungChiTra = null; }
                    if (CoBHTN === void 0) { CoBHTN = null; }
                    if (BaoHiemTuNhans === void 0) { BaoHiemTuNhans = []; }
                    if (BHYTMaSoThe === void 0) { BHYTMaSoThe = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgayThangNamSinh === void 0) { NgayThangNamSinh = null; }
                    if (NgayThangNamSinhDisplay === void 0) { NgayThangNamSinhDisplay = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (BHYTNoiDangKyId === void 0) { BHYTNoiDangKyId = null; }
                    if (NoiDangKyBHYT === void 0) { NoiDangKyBHYT = null; }
                    if (BHYTDiaChi === void 0) { BHYTDiaChi = null; }
                    if (BHYTNgayHieuLuc === void 0) { BHYTNgayHieuLuc = new Date; }
                    if (BHYTNgayHetHan === void 0) { BHYTNgayHetHan = new Date; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (QuocTichId === void 0) { QuocTichId = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (NgheNghiepId === void 0) { NgheNghiepId = null; }
                    if (NoiLamViec === void 0) { NoiLamViec = null; }
                    if (NguoiLienHeHoTen === void 0) { NguoiLienHeHoTen = null; }
                    if (NguoiLienHeQuanHeNhanThanId === void 0) { NguoiLienHeQuanHeNhanThanId = null; }
                    if (NguoiLienHeSoDienThoai === void 0) { NguoiLienHeSoDienThoai = null; }
                    if (NguoiLienHeEmail === void 0) { NguoiLienHeEmail = null; }
                    if (DanTocModelText === void 0) { DanTocModelText = null; }
                    if (QuocTichModelText === void 0) { QuocTichModelText = null; }
                    if (TinhThanhModelText === void 0) { TinhThanhModelText = null; }
                    if (QuanHuyenModelText === void 0) { QuanHuyenModelText = null; }
                    if (PhuongXaModelText === void 0) { PhuongXaModelText = null; }
                    if (NgheNghiepModelText === void 0) { NgheNghiepModelText = null; }
                    if (NguoiLienHeThanNhanModelText === void 0) { NguoiLienHeThanNhanModelText = null; }
                    if (BHYTCoQuanBHXH === void 0) { BHYTCoQuanBHXH = null; }
                    if (BHYTNgayDu5Nam === void 0) { BHYTNgayDu5Nam = null; }
                    if (BHYTNgayDu5NamDisplay === void 0) { BHYTNgayDu5NamDisplay = null; }
                    if (BHYTMaDKBD === void 0) { BHYTMaDKBD = null; }
                    if (MaBN === void 0) { MaBN = null; }
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
                return BenhNhanTiepNhanBenhNhanViewModel;
            }());
            var BaoHiemTuNhanViewModel = /** @class */ (function () {
                function BaoHiemTuNhanViewModel(Id, YeuCauTiepNhanId, BHTNCongTyBaoHiemId, CongTyDisplay, BHTNMaSoThe, BHTNNgayHieuLuc, BHTNNgayHetHan, BHTNSoDienThoai, BHTNDiaChi) {
                    if (Id === void 0) { Id = 0; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (BHTNCongTyBaoHiemId === void 0) { BHTNCongTyBaoHiemId = null; }
                    if (CongTyDisplay === void 0) { CongTyDisplay = null; }
                    if (BHTNMaSoThe === void 0) { BHTNMaSoThe = null; }
                    if (BHTNNgayHieuLuc === void 0) { BHTNNgayHieuLuc = null; }
                    if (BHTNNgayHetHan === void 0) { BHTNNgayHetHan = null; }
                    if (BHTNSoDienThoai === void 0) { BHTNSoDienThoai = null; }
                    if (BHTNDiaChi === void 0) { BHTNDiaChi = null; }
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
                return BaoHiemTuNhanViewModel;
            }());
            var DonViHanhChinhBenhNhanViewModel = /** @class */ (function () {
                function DonViHanhChinhBenhNhanViewModel(Ten, CapHanhChinh, TenDonViHanhChinh, VungDiaLy, TenVietTat) {
                    if (Ten === void 0) { Ten = null; }
                    if (CapHanhChinh === void 0) { CapHanhChinh = null; }
                    if (TenDonViHanhChinh === void 0) { TenDonViHanhChinh = null; }
                    if (VungDiaLy === void 0) { VungDiaLy = null; }
                    if (TenVietTat === void 0) { TenVietTat = null; }
                    this.Ten = Ten;
                    this.CapHanhChinh = CapHanhChinh;
                    this.TenDonViHanhChinh = TenDonViHanhChinh;
                    this.VungDiaLy = VungDiaLy;
                    this.TenVietTat = TenVietTat;
                }
                return DonViHanhChinhBenhNhanViewModel;
            }());
            var GridLichSuKCB = /** @class */ (function () {
                function GridLichSuKCB(Id, STT, MaTheBHYT, HoVaTen, NgayVaoVien, NgayRaVien, CoSoKCB, MaCoSoKCB, KetQuaDieuTri, KetQuaDieuTriNumber, LyDoVaoVien, LyDoVaoVienNumber, TinhTrangRaVien, TinhTrangRaVienNumber, NgayVaoDateTime, NgayRaDateTime) {
                    if (Id === void 0) { Id = 0; }
                    if (STT === void 0) { STT = null; }
                    if (MaTheBHYT === void 0) { MaTheBHYT = null; }
                    if (HoVaTen === void 0) { HoVaTen = null; }
                    if (NgayVaoVien === void 0) { NgayVaoVien = null; }
                    if (NgayRaVien === void 0) { NgayRaVien = null; }
                    if (CoSoKCB === void 0) { CoSoKCB = null; }
                    if (MaCoSoKCB === void 0) { MaCoSoKCB = null; }
                    if (KetQuaDieuTri === void 0) { KetQuaDieuTri = null; }
                    if (KetQuaDieuTriNumber === void 0) { KetQuaDieuTriNumber = null; }
                    if (LyDoVaoVien === void 0) { LyDoVaoVien = null; }
                    if (LyDoVaoVienNumber === void 0) { LyDoVaoVienNumber = null; }
                    if (TinhTrangRaVien === void 0) { TinhTrangRaVien = null; }
                    if (TinhTrangRaVienNumber === void 0) { TinhTrangRaVienNumber = null; }
                    if (NgayVaoDateTime === void 0) { NgayVaoDateTime = null; }
                    if (NgayRaDateTime === void 0) { NgayRaDateTime = null; }
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
                return GridLichSuKCB;
            }());
            var GridLichSuKiemTraTheBHYT = /** @class */ (function () {
                function GridLichSuKiemTraTheBHYT(Id, STT, UserKiemTra, TenCSKCB, MaCSKCB, ThoiGianKiemTra, NoiDungThongBao, thoiGianKTDateTime) {
                    if (Id === void 0) { Id = 0; }
                    if (STT === void 0) { STT = null; }
                    if (UserKiemTra === void 0) { UserKiemTra = null; }
                    if (TenCSKCB === void 0) { TenCSKCB = null; }
                    if (MaCSKCB === void 0) { MaCSKCB = null; }
                    if (ThoiGianKiemTra === void 0) { ThoiGianKiemTra = null; }
                    if (NoiDungThongBao === void 0) { NoiDungThongBao = null; }
                    if (thoiGianKTDateTime === void 0) { thoiGianKTDateTime = null; }
                    this.Id = Id;
                    this.STT = STT;
                    this.UserKiemTra = UserKiemTra;
                    this.TenCSKCB = TenCSKCB;
                    this.MaCSKCB = MaCSKCB;
                    this.ThoiGianKiemTra = ThoiGianKiemTra;
                    this.NoiDungThongBao = NoiDungThongBao;
                    this.thoiGianKTDateTime = thoiGianKTDateTime;
                }
                return GridLichSuKiemTraTheBHYT;
            }());
            var LyDoKhamBenhBenhNhanViewModel = /** @class */ (function () {
                function LyDoKhamBenhBenhNhanViewModel(Ten, TenVietTat, MoTa, IsDisabled) {
                    if (Ten === void 0) { Ten = null; }
                    if (TenVietTat === void 0) { TenVietTat = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (IsDisabled === void 0) { IsDisabled = null; }
                    this.Ten = Ten;
                    this.TenVietTat = TenVietTat;
                    this.MoTa = MoTa;
                    this.IsDisabled = IsDisabled;
                }
                return LyDoKhamBenhBenhNhanViewModel;
            }());
            var PhongNgoaiTruBenhNhanViewModel = /** @class */ (function () {
                function PhongNgoaiTruBenhNhanViewModel(KhoaPhongId, Ten, Ma, IsDisabled) {
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (IsDisabled === void 0) { IsDisabled = null; }
                    this.KhoaPhongId = KhoaPhongId;
                    this.Ten = Ten;
                    this.Ma = Ma;
                    this.IsDisabled = IsDisabled;
                }
                return PhongNgoaiTruBenhNhanViewModel;
            }());
            var GiayChuyenVienBenhNhanViewModel = /** @class */ (function () {
                function GiayChuyenVienBenhNhanViewModel(Id, Ma, Ten, TenGuid, KichThuoc, DuongDan, MoTa, LoaiTapTin) {
                    if (Id === void 0) { Id = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (KichThuoc === void 0) { KichThuoc = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.KichThuoc = KichThuoc;
                    this.DuongDan = DuongDan;
                    this.MoTa = MoTa;
                    this.LoaiTapTin = LoaiTapTin;
                }
                return GiayChuyenVienBenhNhanViewModel;
            }());
            var GiayMienCungChiTraViewModel = /** @class */ (function () {
                function GiayMienCungChiTraViewModel(Id, Ma, Ten, TenGuid, KichThuoc, DuongDan, MoTa, LoaiTapTin) {
                    if (Id === void 0) { Id = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (KichThuoc === void 0) { KichThuoc = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    this.Id = Id;
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.TenGuid = TenGuid;
                    this.KichThuoc = KichThuoc;
                    this.DuongDan = DuongDan;
                    this.MoTa = MoTa;
                    this.LoaiTapTin = LoaiTapTin;
                }
                return GiayMienCungChiTraViewModel;
            }());
            var ThemTaiLieuDinhKem = /** @class */ (function () {
                function ThemTaiLieuDinhKem(LoaiId, MoTa, TaiLieu) {
                    if (LoaiId === void 0) { LoaiId = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (TaiLieu === void 0) { TaiLieu = null; }
                    this.LoaiId = LoaiId;
                    this.MoTa = MoTa;
                    this.TaiLieu = TaiLieu;
                }
                return ThemTaiLieuDinhKem;
            }());
            var TaiLieuModel = /** @class */ (function () {
                function TaiLieuModel(Id, Ma, Ten, TenGuid, KichThuoc, DuongDan, MoTa, LoaiTapTin, DuongDanTmp) {
                    if (Id === void 0) { Id = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (KichThuoc === void 0) { KichThuoc = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    if (DuongDanTmp === void 0) { DuongDanTmp = null; }
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
                return TaiLieuModel;
            }());
            var HoSoYeuCauTiepNhanViewModel = /** @class */ (function () {
                function HoSoYeuCauTiepNhanViewModel(Id, Ma, Ten, TenGuid, KichThuoc, DuongDan, DuongDanTmp, MoTa, LoaiTapTin, LoaiHoSoYeuCauTiepNhanId, YeuCauTiepNhanId, LoaiDisplay, AddNew) {
                    if (Id === void 0) { Id = 0; }
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenGuid === void 0) { TenGuid = null; }
                    if (KichThuoc === void 0) { KichThuoc = null; }
                    if (DuongDan === void 0) { DuongDan = null; }
                    if (DuongDanTmp === void 0) { DuongDanTmp = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (LoaiTapTin === void 0) { LoaiTapTin = null; }
                    if (LoaiHoSoYeuCauTiepNhanId === void 0) { LoaiHoSoYeuCauTiepNhanId = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (LoaiDisplay === void 0) { LoaiDisplay = null; }
                    if (AddNew === void 0) { AddNew = false; }
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
                return HoSoYeuCauTiepNhanViewModel;
            }());
            var DoiTuongUuTienKhamChuaBenhBenhNhanViewModel = /** @class */ (function () {
                function DoiTuongUuTienKhamChuaBenhBenhNhanViewModel(Ten, TenVietTat, ThuTuUuTien, MoTa, IsDisabled) {
                    if (Ten === void 0) { Ten = null; }
                    if (TenVietTat === void 0) { TenVietTat = null; }
                    if (ThuTuUuTien === void 0) { ThuTuUuTien = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (IsDisabled === void 0) { IsDisabled = null; }
                    this.Ten = Ten;
                    this.TenVietTat = TenVietTat;
                    this.ThuTuUuTien = ThuTuUuTien;
                    this.MoTa = MoTa;
                    this.IsDisabled = IsDisabled;
                }
                return DoiTuongUuTienKhamChuaBenhBenhNhanViewModel;
            }());
            var DoiTuongUuDaiViewModel = /** @class */ (function () {
                function DoiTuongUuDaiViewModel(Ten, TiLeUuDai, MoTa, IsDisabled) {
                    if (Ten === void 0) { Ten = null; }
                    if (TiLeUuDai === void 0) { TiLeUuDai = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (IsDisabled === void 0) { IsDisabled = null; }
                    this.Ten = Ten;
                    this.TiLeUuDai = TiLeUuDai;
                    this.MoTa = MoTa;
                    this.IsDisabled = IsDisabled;
                }
                return DoiTuongUuDaiViewModel;
            }());
            var CongTyUuDaiViewModel = /** @class */ (function () {
                function CongTyUuDaiViewModel(Ten, MoTa, IsDisabled) {
                    if (Ten === void 0) { Ten = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (IsDisabled === void 0) { IsDisabled = null; }
                    this.Ten = Ten;
                    this.MoTa = MoTa;
                    this.IsDisabled = IsDisabled;
                }
                return CongTyUuDaiViewModel;
            }());
            var NoiGioiThieuViewModel = /** @class */ (function () {
                function NoiGioiThieuViewModel(Ten, MoTa, IsDisabled) {
                    if (Ten === void 0) { Ten = null; }
                    if (MoTa === void 0) { MoTa = null; }
                    if (IsDisabled === void 0) { IsDisabled = null; }
                    this.Ten = Ten;
                    this.MoTa = MoTa;
                    this.IsDisabled = IsDisabled;
                }
                return NoiGioiThieuViewModel;
            }());
            var NguoiGioiThieuViewModel = /** @class */ (function () {
                function NguoiGioiThieuViewModel(HoTen, HoTenNguoiQuanLy, Id, NhanVienQuanLyId, SoDienThoai) {
                    if (HoTen === void 0) { HoTen = null; }
                    if (HoTenNguoiQuanLy === void 0) { HoTenNguoiQuanLy = null; }
                    if (Id === void 0) { Id = null; }
                    if (NhanVienQuanLyId === void 0) { NhanVienQuanLyId = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    this.HoTen = HoTen;
                    this.HoTenNguoiQuanLy = HoTenNguoiQuanLy;
                    this.Id = Id;
                    this.NhanVienQuanLyId = NhanVienQuanLyId;
                    this.SoDienThoai = SoDienThoai;
                }
                return NguoiGioiThieuViewModel;
            }());
            var CongTyBaoHiemTuNhanViewModel = /** @class */ (function () {
                function CongTyBaoHiemTuNhanViewModel(Ma, Ten, DiaChi, SoDienThoai, Email, GhiChu, HinhThucBaoHiem, PhamViBaoHiem) {
                    if (Ma === void 0) { Ma = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (HinhThucBaoHiem === void 0) { HinhThucBaoHiem = null; }
                    if (PhamViBaoHiem === void 0) { PhamViBaoHiem = null; }
                    this.Ma = Ma;
                    this.Ten = Ten;
                    this.DiaChi = DiaChi;
                    this.SoDienThoai = SoDienThoai;
                    this.Email = Email;
                    this.GhiChu = GhiChu;
                    this.HinhThucBaoHiem = HinhThucBaoHiem;
                    this.PhamViBaoHiem = PhamViBaoHiem;
                }
                return CongTyBaoHiemTuNhanViewModel;
            }());
            var YeuCauKhamBenhTiepNhanViewModel = /** @class */ (function () {
                function YeuCauKhamBenhTiepNhanViewModel(NhomGiaDichVuKhamBenhBenhVienId, YeuCauTiepNhanId, DichVuKhamBenhBenhVienId, YeuCauKhamBenhTruocId, MaDichVu) {
                    if (NhomGiaDichVuKhamBenhBenhVienId === void 0) { NhomGiaDichVuKhamBenhBenhVienId = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (DichVuKhamBenhBenhVienId === void 0) { DichVuKhamBenhBenhVienId = null; }
                    if (YeuCauKhamBenhTruocId === void 0) { YeuCauKhamBenhTruocId = null; }
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    this.NhomGiaDichVuKhamBenhBenhVienId = NhomGiaDichVuKhamBenhBenhVienId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.DichVuKhamBenhBenhVienId = DichVuKhamBenhBenhVienId;
                    this.YeuCauKhamBenhTruocId = YeuCauKhamBenhTruocId;
                    this.MaDichVu = MaDichVu;
                }
                return YeuCauKhamBenhTiepNhanViewModel;
            }());
            var YeuCauDichVuKyThuatTiepNhanViewModel = /** @class */ (function () {
                function YeuCauDichVuKyThuatTiepNhanViewModel(NhomGiaDichVuKhamBenhBenhVienId, YeuCauTiepNhanId, YeuCauKhamBenhId, LoaiDichVuKyThuat, DichVuKyThuatBenhVienId, MaDichVu) {
                    if (NhomGiaDichVuKhamBenhBenhVienId === void 0) { NhomGiaDichVuKhamBenhBenhVienId = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (YeuCauKhamBenhId === void 0) { YeuCauKhamBenhId = null; }
                    if (LoaiDichVuKyThuat === void 0) { LoaiDichVuKyThuat = null; }
                    if (DichVuKyThuatBenhVienId === void 0) { DichVuKyThuatBenhVienId = null; }
                    if (MaDichVu === void 0) { MaDichVu = null; }
                    this.NhomGiaDichVuKhamBenhBenhVienId = NhomGiaDichVuKhamBenhBenhVienId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.YeuCauKhamBenhId = YeuCauKhamBenhId;
                    this.LoaiDichVuKyThuat = LoaiDichVuKyThuat;
                    this.DichVuKyThuatBenhVienId = DichVuKyThuatBenhVienId;
                    this.MaDichVu = MaDichVu;
                }
                return YeuCauDichVuKyThuatTiepNhanViewModel;
            }());
            var YeuCauVatTuBenhVienTiepNhanViewModel = /** @class */ (function () {
                function YeuCauVatTuBenhVienTiepNhanViewModel(YeuCauTiepNhanId, YeuCauKhamBenhId, YeuCauDichVuKyThuatId, VatTuBenhVienId, Ten, Ma) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (YeuCauKhamBenhId === void 0) { YeuCauKhamBenhId = null; }
                    if (YeuCauDichVuKyThuatId === void 0) { YeuCauDichVuKyThuatId = null; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.YeuCauKhamBenhId = YeuCauKhamBenhId;
                    this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.Ten = Ten;
                    this.Ma = Ma;
                }
                return YeuCauVatTuBenhVienTiepNhanViewModel;
            }());
            var YeuCauDuocPhamBenhVienTiepNhanViewModel = /** @class */ (function () {
                function YeuCauDuocPhamBenhVienTiepNhanViewModel(YeuCauTiepNhanId, YeuCauKhamBenhId, YeuCauDichVuKyThuatId, DuocPhamBenhVienId, Ten, Ma) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (YeuCauKhamBenhId === void 0) { YeuCauKhamBenhId = null; }
                    if (YeuCauDichVuKyThuatId === void 0) { YeuCauDichVuKyThuatId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.YeuCauKhamBenhId = YeuCauKhamBenhId;
                    this.YeuCauDichVuKyThuatId = YeuCauDichVuKyThuatId;
                    this.DuocPhamBenhVienId = DuocPhamBenhVienId;
                    this.Ten = Ten;
                    this.Ma = Ma;
                }
                return YeuCauDuocPhamBenhVienTiepNhanViewModel;
            }());
            var ThemChiDinhDichVu = /** @class */ (function () {
                function ThemChiDinhDichVu(MaDichVuId, MaDichVuGoiId, LoaiGiaId, NoiThucHienId, SoLuong, DonGia, ThanhTien, BHYTMucHuong, DoiTuongUuDaiId, DuocHuongBHYT, 
                // public LoaiDichVuKhac: number = 1,
                LaGoi, yeuCauTiepNhanId, benhNhanId, chuongTrinhGoiDichVuId, TenNhomDichVu, YeuCauGoiDichVuId, ThuocGoi, isCheckRowItem, ListDichVuCheckTruocDos) {
                    if (MaDichVuId === void 0) { MaDichVuId = null; }
                    if (MaDichVuGoiId === void 0) { MaDichVuGoiId = null; }
                    if (LoaiGiaId === void 0) { LoaiGiaId = null; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (SoLuong === void 0) { SoLuong = 1; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (BHYTMucHuong === void 0) { BHYTMucHuong = null; }
                    if (DoiTuongUuDaiId === void 0) { DoiTuongUuDaiId = null; }
                    if (DuocHuongBHYT === void 0) { DuocHuongBHYT = true; }
                    if (LaGoi === void 0) { LaGoi = false; }
                    if (yeuCauTiepNhanId === void 0) { yeuCauTiepNhanId = null; }
                    if (benhNhanId === void 0) { benhNhanId = null; }
                    if (chuongTrinhGoiDichVuId === void 0) { chuongTrinhGoiDichVuId = null; }
                    if (TenNhomDichVu === void 0) { TenNhomDichVu = null; }
                    if (YeuCauGoiDichVuId === void 0) { YeuCauGoiDichVuId = null; }
                    if (ThuocGoi === void 0) { ThuocGoi = null; }
                    if (isCheckRowItem === void 0) { isCheckRowItem = true; }
                    if (ListDichVuCheckTruocDos === void 0) { ListDichVuCheckTruocDos = []; }
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
                return ThemChiDinhDichVu;
            }());
            var ThemChiDinhDichVuKyThuat = /** @class */ (function () {
                function ThemChiDinhDichVuKyThuat(MaDichVuId, LoaiGiaId, NoiThucHienId, SoLuong, DonGia, ThanhTien, DoiTuongUuDaiId, yeuCauTiepNhanId) {
                    if (MaDichVuId === void 0) { MaDichVuId = null; }
                    if (LoaiGiaId === void 0) { LoaiGiaId = 1; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (SoLuong === void 0) { SoLuong = 1; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (DoiTuongUuDaiId === void 0) { DoiTuongUuDaiId = null; }
                    if (yeuCauTiepNhanId === void 0) { yeuCauTiepNhanId = null; }
                    this.MaDichVuId = MaDichVuId;
                    this.LoaiGiaId = LoaiGiaId;
                    this.NoiThucHienId = NoiThucHienId;
                    this.SoLuong = SoLuong;
                    this.DonGia = DonGia;
                    this.ThanhTien = ThanhTien;
                    this.DoiTuongUuDaiId = DoiTuongUuDaiId;
                    this.yeuCauTiepNhanId = yeuCauTiepNhanId;
                }
                return ThemChiDinhDichVuKyThuat;
            }());
            var DiaChiBHYT = /** @class */ (function () {
                function DiaChiBHYT(TinhThanh, TinhThanhId, QuanHuyen, QuanHuyenId, PhuongXa, PhuongXaId) {
                    if (TinhThanh === void 0) { TinhThanh = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = null; }
                    if (QuanHuyen === void 0) { QuanHuyen = null; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = null; }
                    if (PhuongXa === void 0) { PhuongXa = null; }
                    if (PhuongXaId === void 0) { PhuongXaId = null; }
                    this.TinhThanh = TinhThanh;
                    this.TinhThanhId = TinhThanhId;
                    this.QuanHuyen = QuanHuyen;
                    this.QuanHuyenId = QuanHuyenId;
                    this.PhuongXa = PhuongXa;
                    this.PhuongXaId = PhuongXaId;
                }
                return DiaChiBHYT;
            }());
            var ThemBaoHiemTuNhan = /** @class */ (function () {
                function ThemBaoHiemTuNhan(Id, CongTyBaoHiemTuNhanId, MaSoThe, NgayHieuLuc, NgayHetHan, SoDienThoai, DiaChi) {
                    if (Id === void 0) { Id = null; }
                    if (CongTyBaoHiemTuNhanId === void 0) { CongTyBaoHiemTuNhanId = null; }
                    if (MaSoThe === void 0) { MaSoThe = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHetHan === void 0) { NgayHetHan = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    this.Id = Id;
                    this.CongTyBaoHiemTuNhanId = CongTyBaoHiemTuNhanId;
                    this.MaSoThe = MaSoThe;
                    this.NgayHieuLuc = NgayHieuLuc;
                    this.NgayHetHan = NgayHetHan;
                    this.SoDienThoai = SoDienThoai;
                    this.DiaChi = DiaChi;
                }
                return ThemBaoHiemTuNhan;
            }());
            var ThemBaoHiemTuNhanGridVo = /** @class */ (function () {
                function ThemBaoHiemTuNhanGridVo(Id, STT, CongTyBaoHiemTuNhanId, CongTyDisplay, MaSoThe, NgayHieuLuc, NgayHieuLucDisplay, NgayHetHan, NgayHetHanDisplay, SoDienThoai, DiaChi) {
                    if (Id === void 0) { Id = null; }
                    if (STT === void 0) { STT = null; }
                    if (CongTyBaoHiemTuNhanId === void 0) { CongTyBaoHiemTuNhanId = null; }
                    if (CongTyDisplay === void 0) { CongTyDisplay = null; }
                    if (MaSoThe === void 0) { MaSoThe = null; }
                    if (NgayHieuLuc === void 0) { NgayHieuLuc = null; }
                    if (NgayHieuLucDisplay === void 0) { NgayHieuLucDisplay = null; }
                    if (NgayHetHan === void 0) { NgayHetHan = null; }
                    if (NgayHetHanDisplay === void 0) { NgayHetHanDisplay = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
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
                return ThemBaoHiemTuNhanGridVo;
            }());
            var GetDonGiaVo = /** @class */ (function () {
                function GetDonGiaVo(DichVuKhamBenhBenhVienId, NhomGiaDichVuKhamBenhBenhVienId, IsCheckValidDonGia) {
                    if (DichVuKhamBenhBenhVienId === void 0) { DichVuKhamBenhBenhVienId = null; }
                    if (NhomGiaDichVuKhamBenhBenhVienId === void 0) { NhomGiaDichVuKhamBenhBenhVienId = null; }
                    if (IsCheckValidDonGia === void 0) { IsCheckValidDonGia = null; }
                    this.DichVuKhamBenhBenhVienId = DichVuKhamBenhBenhVienId;
                    this.NhomGiaDichVuKhamBenhBenhVienId = NhomGiaDichVuKhamBenhBenhVienId;
                    this.IsCheckValidDonGia = IsCheckValidDonGia;
                }
                return GetDonGiaVo;
            }());
            var AddGoiForUpdateView = /** @class */ (function () {
                function AddGoiForUpdateView(YeuCauTiepNhanId, MucHuong, LstGrid) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (MucHuong === void 0) { MucHuong = null; }
                    if (LstGrid === void 0) { LstGrid = []; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.MucHuong = MucHuong;
                    this.LstGrid = LstGrid;
                }
                return AddGoiForUpdateView;
            }());
            var ChiDinhDichVuGridVo = /** @class */ (function () {
                function ChiDinhDichVuGridVo(TinhTrangDisplay, IsDontHavePermissionChangeNoiThucHien, CoGiaBHYT, STT, Id, MaDichVuId, Ma, TenDichVu, LoaiGia, LoaiGiaId, SoLuong, DonGiaDisplay, DonGia, DonGiaSauChietKhau, ThanhTienDisplay, ThanhTien, ThanhTienSauChietKhau, BHYTThanhToanDisplay, TLMGDisplay, TLMG, SoTienMGDisplay, SoTienMG, BnThanhToanDisplay, BnThanhToan, NoiThucHienDisplay, BHYTThanhToan, BHYTThanhToanChuaBaoGomMucHuong, Nhom, NhomId, LoaiDichVuKhac, IsHaveNoiThucHien, NoiThucHienId, DuocHuongBHYT, DuocHuongBHYTPopup, 
                //Goi co chiet khau
                IsGoiCoChietKhau, GoiCoChietKhauId, TenGoiChietKhau, TyLeChietKhau, TyLeChietKhauDisplay, DuocGiamTrongGoi, ThanhTienTrongGoi, TongChiPhiGoi, KhoaPhongId, GiaBHYT, TiLeBaoHiemThanhToan, NoiThucHienModelText, 
                //Thach
                CongNo, SoTienMienGiam, ChuongTrinhGoiDichVuId, 
                //nam
                isCheckValueRowItemCuoiCung, isCheckRowItem, 
                //BVHD-3825
                YeuCauGoiDichVuKhuyenMaiId) {
                    if (TinhTrangDisplay === void 0) { TinhTrangDisplay = null; }
                    if (IsDontHavePermissionChangeNoiThucHien === void 0) { IsDontHavePermissionChangeNoiThucHien = null; }
                    if (CoGiaBHYT === void 0) { CoGiaBHYT = null; }
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = null; }
                    if (MaDichVuId === void 0) { MaDichVuId = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (LoaiGia === void 0) { LoaiGia = null; }
                    if (LoaiGiaId === void 0) { LoaiGiaId = null; }
                    if (SoLuong === void 0) { SoLuong = 1; }
                    if (DonGiaDisplay === void 0) { DonGiaDisplay = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (DonGiaSauChietKhau === void 0) { DonGiaSauChietKhau = null; }
                    if (ThanhTienDisplay === void 0) { ThanhTienDisplay = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (ThanhTienSauChietKhau === void 0) { ThanhTienSauChietKhau = null; }
                    if (BHYTThanhToanDisplay === void 0) { BHYTThanhToanDisplay = null; }
                    if (TLMGDisplay === void 0) { TLMGDisplay = null; }
                    if (TLMG === void 0) { TLMG = null; }
                    if (SoTienMGDisplay === void 0) { SoTienMGDisplay = null; }
                    if (SoTienMG === void 0) { SoTienMG = null; }
                    if (BnThanhToanDisplay === void 0) { BnThanhToanDisplay = null; }
                    if (BnThanhToan === void 0) { BnThanhToan = null; }
                    if (NoiThucHienDisplay === void 0) { NoiThucHienDisplay = null; }
                    if (BHYTThanhToan === void 0) { BHYTThanhToan = null; }
                    if (BHYTThanhToanChuaBaoGomMucHuong === void 0) { BHYTThanhToanChuaBaoGomMucHuong = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (NhomId === void 0) { NhomId = null; }
                    if (LoaiDichVuKhac === void 0) { LoaiDichVuKhac = null; }
                    if (IsHaveNoiThucHien === void 0) { IsHaveNoiThucHien = null; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (DuocHuongBHYT === void 0) { DuocHuongBHYT = null; }
                    if (DuocHuongBHYTPopup === void 0) { DuocHuongBHYTPopup = null; }
                    if (IsGoiCoChietKhau === void 0) { IsGoiCoChietKhau = false; }
                    if (GoiCoChietKhauId === void 0) { GoiCoChietKhauId = null; }
                    if (TenGoiChietKhau === void 0) { TenGoiChietKhau = null; }
                    if (TyLeChietKhau === void 0) { TyLeChietKhau = null; }
                    if (TyLeChietKhauDisplay === void 0) { TyLeChietKhauDisplay = null; }
                    if (DuocGiamTrongGoi === void 0) { DuocGiamTrongGoi = null; }
                    if (ThanhTienTrongGoi === void 0) { ThanhTienTrongGoi = null; }
                    if (TongChiPhiGoi === void 0) { TongChiPhiGoi = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (GiaBHYT === void 0) { GiaBHYT = null; }
                    if (TiLeBaoHiemThanhToan === void 0) { TiLeBaoHiemThanhToan = null; }
                    if (NoiThucHienModelText === void 0) { NoiThucHienModelText = null; }
                    if (CongNo === void 0) { CongNo = null; }
                    if (SoTienMienGiam === void 0) { SoTienMienGiam = null; }
                    if (ChuongTrinhGoiDichVuId === void 0) { ChuongTrinhGoiDichVuId = null; }
                    if (isCheckValueRowItemCuoiCung === void 0) { isCheckValueRowItemCuoiCung = null; }
                    if (isCheckRowItem === void 0) { isCheckRowItem = null; }
                    if (YeuCauGoiDichVuKhuyenMaiId === void 0) { YeuCauGoiDichVuKhuyenMaiId = null; }
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
                return ChiDinhDichVuGridVo;
            }());
            var ChiDinhDichVuKyThuatGridVo = /** @class */ (function () {
                function ChiDinhDichVuKyThuatGridVo(MaDichVuId, Ma, TenDichVu, SoLuong, DonGiaDisplay, DonGia, ThanhTienDisplay, ThanhTien, BHYTThanhToanDisplay, TLMGDisplay, TLMG, SoTienMGDisplay, SoTienMG, BnThanhToanDisplay, BnThanhToan, NoiThucHienDisplay, Nhom, LoaiGia, LoaiGiaId, NoiThucHienId, KhoaPhongId, GiaBHYT, TiLeBaoHiemThanhToan, DuocHuongBHYT) {
                    if (MaDichVuId === void 0) { MaDichVuId = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (SoLuong === void 0) { SoLuong = 1; }
                    if (DonGiaDisplay === void 0) { DonGiaDisplay = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (ThanhTienDisplay === void 0) { ThanhTienDisplay = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (BHYTThanhToanDisplay === void 0) { BHYTThanhToanDisplay = null; }
                    if (TLMGDisplay === void 0) { TLMGDisplay = null; }
                    if (TLMG === void 0) { TLMG = null; }
                    if (SoTienMGDisplay === void 0) { SoTienMGDisplay = null; }
                    if (SoTienMG === void 0) { SoTienMG = null; }
                    if (BnThanhToanDisplay === void 0) { BnThanhToanDisplay = null; }
                    if (BnThanhToan === void 0) { BnThanhToan = null; }
                    if (NoiThucHienDisplay === void 0) { NoiThucHienDisplay = null; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (LoaiGia === void 0) { LoaiGia = null; }
                    if (LoaiGiaId === void 0) { LoaiGiaId = null; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (GiaBHYT === void 0) { GiaBHYT = null; }
                    if (TiLeBaoHiemThanhToan === void 0) { TiLeBaoHiemThanhToan = null; }
                    if (DuocHuongBHYT === void 0) { DuocHuongBHYT = null; }
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
                return ChiDinhDichVuKyThuatGridVo;
            }());
            var TimKiemBenhNhanGridVo = /** @class */ (function () {
                function TimKiemBenhNhanGridVo(MaBN, MaBHYT, BHYTMaSoThe, HoTen, NgaySinh, NgaySinhDisplay, GioiTinh, GioiTinhDisplay, SoChungMinhThu, SoDienThoai, DiaChi, Id, STT, ThangSinh, NamSinh, NgaySinhFormat) {
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaBHYT === void 0) { MaBHYT = null; }
                    if (BHYTMaSoThe === void 0) { BHYTMaSoThe = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (NgaySinhDisplay === void 0) { NgaySinhDisplay = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (SoChungMinhThu === void 0) { SoChungMinhThu = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (Id === void 0) { Id = 0; }
                    if (STT === void 0) { STT = null; }
                    if (ThangSinh === void 0) { ThangSinh = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (NgaySinhFormat === void 0) { NgaySinhFormat = null; }
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
                return TimKiemBenhNhanGridVo;
            }());
            var TimKiemBenhNhanSearch = /** @class */ (function () {
                function TimKiemBenhNhanSearch(MaBenhNhan, MaBHYT, HoTen, NgaySinh, NgaySinhFormat, CMND, DienThoai, DiaChi) {
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (MaBHYT === void 0) { MaBHYT = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (NgaySinhFormat === void 0) { NgaySinhFormat = null; }
                    if (CMND === void 0) { CMND = null; }
                    if (DienThoai === void 0) { DienThoai = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    this.MaBenhNhan = MaBenhNhan;
                    this.MaBHYT = MaBHYT;
                    this.HoTen = HoTen;
                    this.NgaySinh = NgaySinh;
                    this.NgaySinhFormat = NgaySinhFormat;
                    this.CMND = CMND;
                    this.DienThoai = DienThoai;
                    this.DiaChi = DiaChi;
                }
                return TimKiemBenhNhanSearch;
            }());
            var DataTimKiem = /** @class */ (function () {
                function DataTimKiem(searchBenhNhan, data) {
                    if (searchBenhNhan === void 0) { searchBenhNhan = null; }
                    if (data === void 0) { data = []; }
                    this.searchBenhNhan = searchBenhNhan;
                    this.data = data;
                }
                return DataTimKiem;
            }());
            var TimKiemBenhNhanPopup = /** @class */ (function () {
                function TimKiemBenhNhanPopup(searchPopup, searchBenhNhan) {
                    if (searchPopup === void 0) { searchPopup = null; }
                    if (searchBenhNhan === void 0) { searchBenhNhan = null; }
                    this.searchPopup = searchPopup;
                    this.searchBenhNhan = searchBenhNhan;
                }
                return TimKiemBenhNhanPopup;
            }());
            var GridUpdate = /** @class */ (function () {
                function GridUpdate(tuNhap, model, isChecked, maDichVuId, nhom, yeuCauTiepNhanId, mucHuong, NoiThucHienId, HoTen, NgaySinh, lstChiDinhDichVu, 
                // cập nhật hủy dịch vụ đã hủy thanh toán
                LyDoHuyDichVu, ListDichVuCheckTruocDos) {
                    if (tuNhap === void 0) { tuNhap = null; }
                    if (model === void 0) { model = null; }
                    if (isChecked === void 0) { isChecked = null; }
                    if (maDichVuId === void 0) { maDichVuId = null; }
                    if (nhom === void 0) { nhom = null; }
                    if (yeuCauTiepNhanId === void 0) { yeuCauTiepNhanId = null; }
                    if (mucHuong === void 0) { mucHuong = null; }
                    if (NoiThucHienId === void 0) { NoiThucHienId = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (NgaySinh === void 0) { NgaySinh = null; }
                    if (lstChiDinhDichVu === void 0) { lstChiDinhDichVu = []; }
                    if (LyDoHuyDichVu === void 0) { LyDoHuyDichVu = null; }
                    if (ListDichVuCheckTruocDos === void 0) { ListDichVuCheckTruocDos = []; }
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
                return GridUpdate;
            }());
            var ListChiDinhNeedUpdate = /** @class */ (function () {
                function ListChiDinhNeedUpdate(Nhom, DichVuId) {
                    if (Nhom === void 0) { Nhom = null; }
                    if (DichVuId === void 0) { DichVuId = null; }
                    this.Nhom = Nhom;
                    this.DichVuId = DichVuId;
                }
                return ListChiDinhNeedUpdate;
            }());
            var DefaultValueTNBNModel = /** @class */ (function () {
                function DefaultValueTNBNModel(DanTocId, HinhThucDenId, LyDoTiepNhanId, QuocTichId, TinhThanhPhoId) {
                    if (DanTocId === void 0) { DanTocId = null; }
                    if (HinhThucDenId === void 0) { HinhThucDenId = null; }
                    if (LyDoTiepNhanId === void 0) { LyDoTiepNhanId = null; }
                    if (QuocTichId === void 0) { QuocTichId = null; }
                    if (TinhThanhPhoId === void 0) { TinhThanhPhoId = null; }
                    this.DanTocId = DanTocId;
                    this.HinhThucDenId = HinhThucDenId;
                    this.LyDoTiepNhanId = LyDoTiepNhanId;
                    this.QuocTichId = QuocTichId;
                    this.TinhThanhPhoId = TinhThanhPhoId;
                }
                return DefaultValueTNBNModel;
            }());
            var ListDichVuCheckTruocDo = /** @class */ (function () {
                function ListDichVuCheckTruocDo(Id, NhomId) {
                    if (Id === void 0) { Id = null; }
                    if (NhomId === void 0) { NhomId = null; }
                    this.Id = Id;
                    this.NhomId = NhomId;
                }
                return ListDichVuCheckTruocDo;
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
            /***/ 
        })
    }]);
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~3cfd0d41-es2015.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~3cfd0d41-es5.js.map
//# sourceMappingURL=default~bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module~bao-cao~3cfd0d41-es5.js.map