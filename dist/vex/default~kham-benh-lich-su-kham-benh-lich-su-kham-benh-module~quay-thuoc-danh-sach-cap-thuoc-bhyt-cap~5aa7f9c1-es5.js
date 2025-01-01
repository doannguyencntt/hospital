(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~5aa7f9c1"], {
        /***/ "./node_modules/@iconify/icons-ic/edit.js": 
        /*!************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/edit.js ***!
          \************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/modules/main/quay-thuoc/quay-thuoc.model.ts ***!
          \*************************************************************/
        /*! exports provided: QuayThuoc, TimBenhNhan, rangeDate, BenhNhanThongTin, ThongTinBenhNhan, SearchInfoNhaThuoc, KhachVangLai, ToaThuocCuTimKiem, danhSachThuoc, ThemDuocPham, XemTruocBangKeThuoc, ThongTinDuocPham, ThongTinDonThuoc, CongNoVo, ConfirmPrint, ServiceId, DanhSachCongNoChoThu, CongNoChoThu, ExportQueryInfoQueryInfo, TinhHuyenTemplateVo, QuayThuocGridVo, ApDungMiemGiamThem, DanhSachMienGiamVo, LoaiChietKhau, LoaiMienGiam, ThongTinHuyPhieu, TrangThaiThuTienBenhNhan, ThongTinSoPhieuDaThu, HuyXuatThuocTrongNgay, NguoiDungKhongMuaDonThuoc */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuoc", function () { return QuayThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimBenhNhan", function () { return TimBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenhNhanThongTin", function () { return BenhNhanThongTin; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinBenhNhan", function () { return ThongTinBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInfoNhaThuoc", function () { return SearchInfoNhaThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhachVangLai", function () { return KhachVangLai; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToaThuocCuTimKiem", function () { return ToaThuocCuTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "danhSachThuoc", function () { return danhSachThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemDuocPham", function () { return ThemDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XemTruocBangKeThuoc", function () { return XemTruocBangKeThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDuocPham", function () { return ThongTinDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDonThuoc", function () { return ThongTinDonThuoc; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoVo", function () { return CongNoVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPrint", function () { return ConfirmPrint; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceId", function () { return ServiceId; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachCongNoChoThu", function () { return DanhSachCongNoChoThu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongNoChoThu", function () { return CongNoChoThu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportQueryInfoQueryInfo", function () { return ExportQueryInfoQueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinhHuyenTemplateVo", function () { return TinhHuyenTemplateVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuocGridVo", function () { return QuayThuocGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApDungMiemGiamThem", function () { return ApDungMiemGiamThem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachMienGiamVo", function () { return DanhSachMienGiamVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiChietKhau", function () { return LoaiChietKhau; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiMienGiam", function () { return LoaiMienGiam; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHuyPhieu", function () { return ThongTinHuyPhieu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiThuTienBenhNhan", function () { return TrangThaiThuTienBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinSoPhieuDaThu", function () { return ThongTinSoPhieuDaThu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuyXuatThuocTrongNgay", function () { return HuyXuatThuocTrongNgay; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguoiDungKhongMuaDonThuoc", function () { return NguoiDungKhongMuaDonThuoc; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var QuayThuoc = /** @class */ (function () {
                function QuayThuoc() {
                }
                return QuayThuoc;
            }());
            var TimBenhNhan = /** @class */ (function () {
                function TimBenhNhan(MaBenhNhan, MaTiepNhan, HoTen, SoDienThoai, KiemTraThanhToan, RangeDate) {
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (KiemTraThanhToan === void 0) { KiemTraThanhToan = 0; }
                    if (RangeDate === void 0) { RangeDate = new rangeDate; }
                    this.MaBenhNhan = MaBenhNhan;
                    this.MaTiepNhan = MaTiepNhan;
                    this.HoTen = HoTen;
                    this.SoDienThoai = SoDienThoai;
                    this.KiemTraThanhToan = KiemTraThanhToan;
                    this.RangeDate = RangeDate;
                }
                return TimBenhNhan;
            }());
            var rangeDate = /** @class */ (function () {
                function rangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return rangeDate;
            }());
            var BenhNhanThongTin = /** @class */ (function () {
                function BenhNhanThongTin(Id, MaBN, MaYeuCauTiepNhan, HoTen, GioiTinh, GioiTinhHienThi, NamSinh, DiaChi, DiaChiDayDu, SoDienThoai, Email, SoDuTaiKhoan) {
                    if (Id === void 0) { Id = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaYeuCauTiepNhan === void 0) { MaYeuCauTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (GioiTinhHienThi === void 0) { GioiTinhHienThi = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (DiaChiDayDu === void 0) { DiaChiDayDu = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (Email === void 0) { Email = null; }
                    if (SoDuTaiKhoan === void 0) { SoDuTaiKhoan = 0; }
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
                return BenhNhanThongTin;
            }());
            var ThongTinBenhNhan = /** @class */ (function () {
                function ThongTinBenhNhan(MaBenhNhan, MaTiepNhan, YeuCauTiepNhanId, TrangThaiThanhToan) {
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = null; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (TrangThaiThanhToan === void 0) { TrangThaiThanhToan = null; }
                    this.MaBenhNhan = MaBenhNhan;
                    this.MaTiepNhan = MaTiepNhan;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.TrangThaiThanhToan = TrangThaiThanhToan;
                }
                return ThongTinBenhNhan;
            }());
            var SearchInfoNhaThuoc = /** @class */ (function () {
                function SearchInfoNhaThuoc(MaBenhNhan, MaTiepNhan, HoTen, SoDienThoai, KiemTraThanhToan, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (MaBenhNhan === void 0) { MaBenhNhan = ""; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = ""; }
                    if (HoTen === void 0) { HoTen = ""; }
                    if (SoDienThoai === void 0) { SoDienThoai = ""; }
                    if (KiemTraThanhToan === void 0) { KiemTraThanhToan = ""; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
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
                return SearchInfoNhaThuoc;
            }());
            var KhachVangLai = /** @class */ (function () {
                function KhachVangLai(Id, HoTen, GioiTinh, NamSinh, DiaChi, DiaChiDayDu, SoDienThoai, TinhThanhId, QuanHuyenId, PhuongXaId, Email, GioiTinhHienThi, MaBN, MaTN, TenTinhDisplay, TenHuyenDisplay, TenPhuongDisplay) {
                    if (Id === void 0) { Id = 0; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (GioiTinh === void 0) { GioiTinh = 1; }
                    if (NamSinh === void 0) { NamSinh = 1900; }
                    if (DiaChi === void 0) { DiaChi = null; }
                    if (DiaChiDayDu === void 0) { DiaChiDayDu = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (TinhThanhId === void 0) { TinhThanhId = 0; }
                    if (QuanHuyenId === void 0) { QuanHuyenId = 0; }
                    if (PhuongXaId === void 0) { PhuongXaId = 0; }
                    if (Email === void 0) { Email = null; }
                    if (GioiTinhHienThi === void 0) { GioiTinhHienThi = null; }
                    if (MaBN === void 0) { MaBN = null; }
                    if (MaTN === void 0) { MaTN = null; }
                    if (TenTinhDisplay === void 0) { TenTinhDisplay = null; }
                    if (TenHuyenDisplay === void 0) { TenHuyenDisplay = null; }
                    if (TenPhuongDisplay === void 0) { TenPhuongDisplay = null; }
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
                return KhachVangLai;
            }());
            var ToaThuocCuTimKiem = /** @class */ (function () {
                function ToaThuocCuTimKiem(DVKhamHienThi, DVKhamId, ChuanDoan, BSKham, BSId, 
                // public NgayKham: DateTime = null
                RangeDate) {
                    if (DVKhamHienThi === void 0) { DVKhamHienThi = null; }
                    if (DVKhamId === void 0) { DVKhamId = null; }
                    if (ChuanDoan === void 0) { ChuanDoan = null; }
                    if (BSKham === void 0) { BSKham = null; }
                    if (BSId === void 0) { BSId = null; }
                    if (RangeDate === void 0) { RangeDate = new rangeDate; }
                    this.DVKhamHienThi = DVKhamHienThi;
                    this.DVKhamId = DVKhamId;
                    this.ChuanDoan = ChuanDoan;
                    this.BSKham = BSKham;
                    this.BSId = BSId;
                    this.RangeDate = RangeDate;
                }
                return ToaThuocCuTimKiem;
            }());
            var danhSachThuoc = /** @class */ (function () {
                function danhSachThuoc(Id, ThuocBHYT, ThuocKhongBHYT) {
                    if (Id === void 0) { Id = 0; }
                    if (ThuocBHYT === void 0) { ThuocBHYT = []; }
                    if (ThuocKhongBHYT === void 0) { ThuocKhongBHYT = []; }
                    this.Id = Id;
                    this.ThuocBHYT = ThuocBHYT;
                    this.ThuocKhongBHYT = ThuocKhongBHYT;
                }
                return danhSachThuoc;
            }());
            var ThemDuocPham = /** @class */ (function () {
                function ThemDuocPham(DuocPhamId, DuocPhamText, SoLuongTon, SoLuong) {
                    if (DuocPhamId === void 0) { DuocPhamId = null; }
                    if (DuocPhamText === void 0) { DuocPhamText = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    this.DuocPhamId = DuocPhamId;
                    this.DuocPhamText = DuocPhamText;
                    this.SoLuongTon = SoLuongTon;
                    this.SoLuong = SoLuong;
                }
                return ThemDuocPham;
            }());
            var XemTruocBangKeThuoc = /** @class */ (function () {
                function XemTruocBangKeThuoc(YeuCauTiepNhanId, Hosting, DanhSachDonThuocs) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (Hosting === void 0) { Hosting = null; }
                    if (DanhSachDonThuocs === void 0) { DanhSachDonThuocs = []; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.Hosting = Hosting;
                    this.DanhSachDonThuocs = DanhSachDonThuocs;
                }
                return XemTruocBangKeThuoc;
            }());
            var ThongTinDuocPham = /** @class */ (function () {
                function ThongTinDuocPham(Id, STT, DuocPhamId, MaHoatChat, TenDuocPham, SoLuongTon, NhapKhoDuocPhamChiTietId, TenHoatChat, DonViTinh, SoLuongToa, SoLuongMua, ThanhTien, DonGiaHienThi, Solo, ViTri, HanSuDung, HanSuDungHientThi, BacSiKeToa, BacSiId, isNew, HighLightClass, CheckedDefault, BNConPhaiThanhToan, DanhSachCongNoChoThus, DonGia, ThanhTienHienThi, BNConPhaiThanhToanHienThi, LoaiDuocPhamHoacVatTu, LoaiDuocPhamHoacVatTu1, GhiChuMienGiamThem, DanhSachMienGiamVos, SoTienMG, DaThanhToan, TongCongNo, BHYTThanhToan, apdungMGTThanhCong) {
                    if (Id === void 0) { Id = null; }
                    if (STT === void 0) { STT = null; }
                    if (DuocPhamId === void 0) { DuocPhamId = null; }
                    if (MaHoatChat === void 0) { MaHoatChat = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (NhapKhoDuocPhamChiTietId === void 0) { NhapKhoDuocPhamChiTietId = null; }
                    if (TenHoatChat === void 0) { TenHoatChat = null; }
                    if (DonViTinh === void 0) { DonViTinh = null; }
                    if (SoLuongToa === void 0) { SoLuongToa = null; }
                    if (SoLuongMua === void 0) { SoLuongMua = null; }
                    if (ThanhTien === void 0) { ThanhTien = null; }
                    if (DonGiaHienThi === void 0) { DonGiaHienThi = null; }
                    if (Solo === void 0) { Solo = null; }
                    if (ViTri === void 0) { ViTri = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (HanSuDungHientThi === void 0) { HanSuDungHientThi = null; }
                    if (BacSiKeToa === void 0) { BacSiKeToa = null; }
                    if (BacSiId === void 0) { BacSiId = null; }
                    if (isNew === void 0) { isNew = null; }
                    if (HighLightClass === void 0) { HighLightClass = null; }
                    if (CheckedDefault === void 0) { CheckedDefault = true; }
                    if (BNConPhaiThanhToan === void 0) { BNConPhaiThanhToan = 0; }
                    if (DanhSachCongNoChoThus === void 0) { DanhSachCongNoChoThus = []; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (ThanhTienHienThi === void 0) { ThanhTienHienThi = null; }
                    if (BNConPhaiThanhToanHienThi === void 0) { BNConPhaiThanhToanHienThi = null; }
                    if (LoaiDuocPhamHoacVatTu === void 0) { LoaiDuocPhamHoacVatTu = 0; }
                    if (LoaiDuocPhamHoacVatTu1 === void 0) { LoaiDuocPhamHoacVatTu1 = 0; }
                    if (GhiChuMienGiamThem === void 0) { GhiChuMienGiamThem = null; }
                    if (DanhSachMienGiamVos === void 0) { DanhSachMienGiamVos = []; }
                    if (SoTienMG === void 0) { SoTienMG = null; }
                    if (DaThanhToan === void 0) { DaThanhToan = null; }
                    if (TongCongNo === void 0) { TongCongNo = null; }
                    if (BHYTThanhToan === void 0) { BHYTThanhToan = null; }
                    if (apdungMGTThanhCong === void 0) { apdungMGTThanhCong = null; }
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
                return ThongTinDuocPham;
            }());
            var ThongTinDonThuoc = /** @class */ (function () {
                function ThongTinDonThuoc(Id, HoTenBenhNhan, TienMat, ChuyenKhoan, POS, SoTienCongNo, BenhNhanDua, TienTraLai, HinhThucThanhToan, NgayThu, NoiDungThu, DanhSachCongNos, DanhSachDonThuocs, TongTien) {
                    if (Id === void 0) { Id = null; }
                    if (HoTenBenhNhan === void 0) { HoTenBenhNhan = null; }
                    if (TienMat === void 0) { TienMat = 0; }
                    if (ChuyenKhoan === void 0) { ChuyenKhoan = 0; }
                    if (POS === void 0) { POS = 0; }
                    if (SoTienCongNo === void 0) { SoTienCongNo = 0; }
                    if (BenhNhanDua === void 0) { BenhNhanDua = 0; }
                    if (TienTraLai === void 0) { TienTraLai = null; }
                    if (HinhThucThanhToan === void 0) { HinhThucThanhToan = []; }
                    if (NgayThu === void 0) { NgayThu = null; }
                    if (NoiDungThu === void 0) { NoiDungThu = null; }
                    if (DanhSachCongNos === void 0) { DanhSachCongNos = []; }
                    if (DanhSachDonThuocs === void 0) { DanhSachDonThuocs = []; }
                    if (TongTien === void 0) { TongTien = TienMat + ChuyenKhoan + POS; }
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
                return ThongTinDonThuoc;
            }());
            var CongNoVo = /** @class */ (function () {
                function CongNoVo(CongTyCongNoId, SoTienCongNo) {
                    if (CongTyCongNoId === void 0) { CongTyCongNoId = null; }
                    if (SoTienCongNo === void 0) { SoTienCongNo = null; }
                    this.CongTyCongNoId = CongTyCongNoId;
                    this.SoTienCongNo = SoTienCongNo;
                }
                return CongNoVo;
            }());
            var ConfirmPrint = /** @class */ (function () {
                function ConfirmPrint(TaiKhoanBenhNhanThuId, InPhieuThu, InBangKe, Hosting, Response) {
                    if (TaiKhoanBenhNhanThuId === void 0) { TaiKhoanBenhNhanThuId = null; }
                    if (InPhieuThu === void 0) { InPhieuThu = false; }
                    if (InBangKe === void 0) { InBangKe = true; }
                    if (Hosting === void 0) { Hosting = null; }
                    if (Response === void 0) { Response = null; }
                    this.TaiKhoanBenhNhanThuId = TaiKhoanBenhNhanThuId;
                    this.InPhieuThu = InPhieuThu;
                    this.InBangKe = InBangKe;
                    this.Hosting = Hosting;
                    this.Response = Response;
                }
                return ConfirmPrint;
            }());
            var ServiceId = /** @class */ (function () {
                function ServiceId(ToaThuoc, maBN) {
                    if (ToaThuoc === void 0) { ToaThuoc = []; }
                    if (maBN === void 0) { maBN = 0; }
                    this.ToaThuoc = ToaThuoc;
                    this.maBN = maBN;
                }
                return ServiceId;
            }());
            var DanhSachCongNoChoThu = /** @class */ (function () {
                function DanhSachCongNoChoThu(CongNoChoThus) {
                    if (CongNoChoThus === void 0) { CongNoChoThus = []; }
                    this.CongNoChoThus = CongNoChoThus;
                }
                return DanhSachCongNoChoThu;
            }());
            var CongNoChoThu = /** @class */ (function () {
                function CongNoChoThu(CongNoId, TenCongTy, SoTienCongNoChoThu, ViTri) {
                    if (CongNoId === void 0) { CongNoId = 0; }
                    if (TenCongTy === void 0) { TenCongTy = null; }
                    if (SoTienCongNoChoThu === void 0) { SoTienCongNoChoThu = 0; }
                    if (ViTri === void 0) { ViTri = 0; }
                    this.CongNoId = CongNoId;
                    this.TenCongTy = TenCongTy;
                    this.SoTienCongNoChoThu = SoTienCongNoChoThu;
                    this.ViTri = ViTri;
                }
                return CongNoChoThu;
            }());
            var ExportQueryInfoQueryInfo = /** @class */ (function () {
                function ExportQueryInfoQueryInfo(Skip, Take, PageSize, SearchString, AdditionalSearchString, 
                // public searchTerms: string = "",
                Sort) {
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return ExportQueryInfoQueryInfo;
            }());
            var TinhHuyenTemplateVo = /** @class */ (function () {
                function TinhHuyenTemplateVo(TenTinh, TenHuyen, TinhId, HuyenId) {
                    if (TenTinh === void 0) { TenTinh = ""; }
                    if (TenHuyen === void 0) { TenHuyen = ""; }
                    if (TinhId === void 0) { TinhId = 0; }
                    if (HuyenId === void 0) { HuyenId = 0; }
                    this.TenTinh = TenTinh;
                    this.TenHuyen = TenHuyen;
                    this.TinhId = TinhId;
                    this.HuyenId = HuyenId;
                }
                return TinhHuyenTemplateVo;
            }());
            var QuayThuocGridVo = /** @class */ (function () {
                function QuayThuocGridVo(MaBenhNhan, MaTiepNhan, HoTen, SoDienThoai, KiemTraThanhToan, DateStart, DateEnd, DateNow, DieuKienLoadVaoChiTiet) {
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = null; }
                    if (HoTen === void 0) { HoTen = null; }
                    if (SoDienThoai === void 0) { SoDienThoai = null; }
                    if (KiemTraThanhToan === void 0) { KiemTraThanhToan = null; }
                    if (DateStart === void 0) { DateStart = null; }
                    if (DateEnd === void 0) { DateEnd = null; }
                    if (DateNow === void 0) { DateNow = null; }
                    if (DieuKienLoadVaoChiTiet === void 0) { DieuKienLoadVaoChiTiet = false; }
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
                return QuayThuocGridVo;
            }());
            // update 28122020
            var ApDungMiemGiamThem = /** @class */ (function () {
                function ApDungMiemGiamThem(ChietKhauTheoTiLe, ChietKhauTheoSoTien, SoTien, TiLe, GhiChu) {
                    if (ChietKhauTheoTiLe === void 0) { ChietKhauTheoTiLe = false; }
                    if (ChietKhauTheoSoTien === void 0) { ChietKhauTheoSoTien = false; }
                    if (SoTien === void 0) { SoTien = 0; }
                    if (TiLe === void 0) { TiLe = 0; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    this.ChietKhauTheoTiLe = ChietKhauTheoTiLe;
                    this.ChietKhauTheoSoTien = ChietKhauTheoSoTien;
                    this.SoTien = SoTien;
                    this.TiLe = TiLe;
                    this.GhiChu = GhiChu;
                }
                return ApDungMiemGiamThem;
            }());
            var DanhSachMienGiamVo = /** @class */ (function () {
                function DanhSachMienGiamVo(LoaiMienGiam, DoiTuongUuDaiId, DoiTuongUuDai, TheVoucherId, MaTheVoucher, LoaiChietKhau, SoTien, TiLe, SoTienMiemGiamTatCa, TongTienMiemGiam, DaSuDung) {
                    if (LoaiMienGiam === void 0) { LoaiMienGiam = 0; }
                    if (DoiTuongUuDaiId === void 0) { DoiTuongUuDaiId = null; }
                    if (DoiTuongUuDai === void 0) { DoiTuongUuDai = null; }
                    if (TheVoucherId === void 0) { TheVoucherId = null; }
                    if (MaTheVoucher === void 0) { MaTheVoucher = null; }
                    if (LoaiChietKhau === void 0) { LoaiChietKhau = 0; }
                    if (SoTien === void 0) { SoTien = 0; }
                    if (TiLe === void 0) { TiLe = 0; }
                    if (SoTienMiemGiamTatCa === void 0) { SoTienMiemGiamTatCa = 0; }
                    if (TongTienMiemGiam === void 0) { TongTienMiemGiam = 0; }
                    if (DaSuDung === void 0) { DaSuDung = false; }
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
                return DanhSachMienGiamVo;
            }());
            var LoaiChietKhau = /** @class */ (function () {
                function LoaiChietKhau() {
                    this.ChietKhauTheoTiLe = 1;
                    this.ChietKhauTheoSoTien = 2;
                }
                return LoaiChietKhau;
            }());
            var LoaiMienGiam = /** @class */ (function () {
                function LoaiMienGiam() {
                    this.UuDai = 1;
                    this.Voucher = 2;
                    this.MienGiamThem = 3;
                }
                return LoaiMienGiam;
            }());
            var ThongTinHuyPhieu = /** @class */ (function () {
                function ThongTinHuyPhieu(SoPhieu, TenSoPhieu, TenPhieuThuChi, LoaiPhieuThuChiThuNgan, ThuHoiPhieu, NguoiThuHoiId, TenNguoiThuHoi, ThoiGianThuHoi, DaHoanUng, LyDo) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenSoPhieu === void 0) { TenSoPhieu = null; }
                    if (TenPhieuThuChi === void 0) { TenPhieuThuChi = null; }
                    if (LoaiPhieuThuChiThuNgan === void 0) { LoaiPhieuThuChiThuNgan = null; }
                    if (ThuHoiPhieu === void 0) { ThuHoiPhieu = null; }
                    if (NguoiThuHoiId === void 0) { NguoiThuHoiId = null; }
                    if (TenNguoiThuHoi === void 0) { TenNguoiThuHoi = null; }
                    if (ThoiGianThuHoi === void 0) { ThoiGianThuHoi = null; }
                    if (DaHoanUng === void 0) { DaHoanUng = null; }
                    if (LyDo === void 0) { LyDo = null; }
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
                return ThongTinHuyPhieu;
            }());
            var TrangThaiThuTienBenhNhan = /** @class */ (function () {
                function TrangThaiThuTienBenhNhan() {
                    this.ThuTheoChiPhiNumber = 1;
                    this.ThuTheoChiPhi = "Phiếu thu";
                    this.Huy = "Đã hủy";
                }
                return TrangThaiThuTienBenhNhan;
            }());
            var ThongTinSoPhieuDaThu = /** @class */ (function () {
                function ThongTinSoPhieuDaThu(SoPhieuId, TenSoPhieu, LoaiPhieu, TinhTrang, SoTien, HinhThucThanhToan, TienMat, ChuyenKhoan, Pos, TongChiPhi, CongNo, BHYTThanhToan, MienGiam, BenhNhanThanhToan, SoTienPhaiThuHoacChi, LoaiPhieuThuChiThuNgan, SoPhieu, NgayThuStr, NoiDungThu, DaThuHoi, NguoiThuHoi, ConHanHuyPhieuThu, NhanVienHuyPhieu, NgayHuyStr, DanhSachThuPhis) {
                    if (SoPhieuId === void 0) { SoPhieuId = null; }
                    if (TenSoPhieu === void 0) { TenSoPhieu = null; }
                    if (LoaiPhieu === void 0) { LoaiPhieu = null; }
                    if (TinhTrang === void 0) { TinhTrang = null; }
                    if (SoTien === void 0) { SoTien = null; }
                    if (HinhThucThanhToan === void 0) { HinhThucThanhToan = null; }
                    if (TienMat === void 0) { TienMat = null; }
                    if (ChuyenKhoan === void 0) { ChuyenKhoan = null; }
                    if (Pos === void 0) { Pos = null; }
                    if (TongChiPhi === void 0) { TongChiPhi = null; }
                    if (CongNo === void 0) { CongNo = null; }
                    if (BHYTThanhToan === void 0) { BHYTThanhToan = null; }
                    if (MienGiam === void 0) { MienGiam = null; }
                    if (BenhNhanThanhToan === void 0) { BenhNhanThanhToan = null; }
                    if (SoTienPhaiThuHoacChi === void 0) { SoTienPhaiThuHoacChi = null; }
                    if (LoaiPhieuThuChiThuNgan === void 0) { LoaiPhieuThuChiThuNgan = null; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (NgayThuStr === void 0) { NgayThuStr = null; }
                    if (NoiDungThu === void 0) { NoiDungThu = null; }
                    if (DaThuHoi === void 0) { DaThuHoi = null; }
                    if (NguoiThuHoi === void 0) { NguoiThuHoi = null; }
                    if (ConHanHuyPhieuThu === void 0) { ConHanHuyPhieuThu = null; }
                    if (NhanVienHuyPhieu === void 0) { NhanVienHuyPhieu = null; }
                    if (NgayHuyStr === void 0) { NgayHuyStr = null; }
                    if (DanhSachThuPhis === void 0) { DanhSachThuPhis = []; }
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
                return ThongTinSoPhieuDaThu;
            }());
            var HuyXuatThuocTrongNgay = /** @class */ (function () {
                function HuyXuatThuocTrongNgay(TaiKhoanBenhNhanThuId, TenSoPhieu, ThuHoiPhieu, NguoiThuHoiId, TenNguoiThuHoi, ThoiGianThuHoi, LyDo) {
                    if (TaiKhoanBenhNhanThuId === void 0) { TaiKhoanBenhNhanThuId = null; }
                    if (TenSoPhieu === void 0) { TenSoPhieu = null; }
                    if (ThuHoiPhieu === void 0) { ThuHoiPhieu = null; }
                    if (NguoiThuHoiId === void 0) { NguoiThuHoiId = null; }
                    if (TenNguoiThuHoi === void 0) { TenNguoiThuHoi = null; }
                    if (ThoiGianThuHoi === void 0) { ThoiGianThuHoi = null; }
                    if (LyDo === void 0) { LyDo = null; }
                    this.TaiKhoanBenhNhanThuId = TaiKhoanBenhNhanThuId;
                    this.TenSoPhieu = TenSoPhieu;
                    this.ThuHoiPhieu = ThuHoiPhieu;
                    this.NguoiThuHoiId = NguoiThuHoiId;
                    this.TenNguoiThuHoi = TenNguoiThuHoi;
                    this.ThoiGianThuHoi = ThoiGianThuHoi;
                    this.LyDo = LyDo;
                }
                return HuyXuatThuocTrongNgay;
            }());
            var NguoiDungKhongMuaDonThuoc = /** @class */ (function () {
                function NguoiDungKhongMuaDonThuoc(YeuCauTiepNhanId) {
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                }
                return NguoiDungKhongMuaDonThuoc;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~5aa7f9c1-es2015.js.map
//# sourceMappingURL=default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~5aa7f9c1-es5.js.map
//# sourceMappingURL=default~kham-benh-lich-su-kham-benh-lich-su-kham-benh-module~quay-thuoc-danh-sach-cap-thuoc-bhyt-cap~5aa7f9c1-es5.js.map