var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thu-chi-thu-chi-vien-phi-ngoai-tru-cho-thu-tien-cho-thu-tien-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\t<vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t<div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n\t\t\t<vex-breadcrumbs [crumbs]=\"[\n            {Title:'Thu Ngân',Path:''},\n            {Title:'Viện phí ngoại trú',Path:''},\n            {Title:'DS Thu Dịch Vụ',Path:'/danh-sach-thu-dich-vu', queryParams: {loaiThanhToan : typeThanhToan}, Active:true}\n            ]\">\n\t\t\t</vex-breadcrumbs>\n\t\t\t<!-- {Key:'Ctrl + F3',Description:'Di chuyễn tới và check trả lại Bn'},\n            {Key:'Ctrl + F5',Description:'Di chuyễn tới và check trả nợ'}, -->\n\t\t\t<app-hot-key [keys]=\"[\n            {Key:'Ctrl + F1',Description:'Di chuyễn tới và check thu tiền'},\n            {Key:'Ctrl + F2',Description:'Di chuyễn tới và check thu tạm ứng'},\n            {Key:'Ctrl + F6',Description:'Di chuyễn tới và mở tab chưa thu'},\n            {Key:'Ctrl + F7',Description:'Di chuyễn tới và mở tab đã thu'},\n            {Key:'Ctrl + F8',Description:'Cập nhật thanh toán'},\n            {Key:'Ctrl + F9',Description:'Hủy thanh toán'},\n            {Key:'Ctrl + S', Description:'Thu hoặc chi tiền'},\n            {Key:'Esc',Description:'Quay lại',End:true}\n            ]\"></app-hot-key>\n\t\t</div>\n\t</vex-page-layout-header>\n\n\t<vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\t\t<div class=\"-mt-16\">\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div class=\"card\" fxFlex=\"100%\">\n\t\t\t\t\t<div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative\">\n\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t<!-- Thông tin hành chính -->\n\t\t\t\t\t\t\t<!-- class=\"content-has-border\" -->\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin hành chính <strong *ngIf=\"thongTinBenhNhan.DangDieuTriNoiTru === true\" class=\"red\">BỆNH NHÂN ĐANG ĐIỀU TRỊ NỘI TRÚ</strong></legend>\n\t\t\t\t\t\t\t\t<div class=\"mt-1\">\n\t\t\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tMã TN:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.MaYeuCauTiepNhan}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tMã NB:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.MaBN}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tHọ Tên:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.HoTen}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNăm Sinh:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.NamSinh}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tĐịa chỉ:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.DiaChi}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.DiaChi === ''\"> Không có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tSố điện thoại:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.SoDienThoai}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.SoDienThoai === null\"> Không có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tEmail:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.Email}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.Email === null\"> Không có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin bảo hiểm y tế</legend>\n\t\t\t\t\t\t\t\t<div class=\"mt-1\">\n\t\t\t\t\t\t\t\t\t<!-- Thông tin bảo hiểm y tế -->\n\t\t\t\t\t\t\t\t\t<ul class=\"inline\" *ngIf=\"thongTinBenhNhan.CoBHYT ===  true\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tSố thẻ:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTMaSoThe}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNgày hiệu lực:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.NgayHieuLucStr}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNgày hết hạn:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.NgayHetHanStr}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNơi đăng ký khám BH:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTDiaChi}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tMức hưởng:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTMucHuong}}% </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tTuyến khám:\n\t\t\t\t\t\t\t\t\t\t\t<strong class=\"color-green\"> {{thongTinBenhNhan.TuyenKham}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tGiấy chuyển viện:\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"color-green\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"xemTaiLieu(thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien)\">{{thongTinBenhNhan.TenGiayChuyenVien}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien === null\">\n\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tGiấy miễn cùng chi trả:\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"xemTaiLieu(thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"color-green\">{{thongTinBenhNhan.TenBHYTgiayMienCungChiTra}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra === null\">\n\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"!(thongTinBenhNhan.CoBHYT ===  true)\">(Không có)</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin bảo hiểm tư nhân</legend>\n\t\t\t\t\t\t\t\t<div class=\"mt-1\">\n\t\t\t\t\t\t\t\t\t<app-grid [gridColumns]=\"gridBaoHiemTNs\" [useAddDeault]=\"false\"\n\t\t\t\t\t\t\t\t\t\tclass=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n\t\t\t\t\t\t\t\t\t\t[checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[gridDataSource]=\"dataSourceDanhSachBHTN\" style=\"width: 1px\" [pageable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"kiemTraThongTinBaoHiemTN === true\"> </app-grid>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"kiemTraThongTinBaoHiemTN === false\">(Không có)</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin miễn giảm</legend>\n\t\t\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\"\n\t\t\t\t\t\t\t\t\tfxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"flagShowDoiTuongUuDai==true\" fxFlex=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background: rgba(0, 0, 0, 0.04); padding: 7px 10px; border-bottom: 1px solid rgba(0, 0, 0, 0.4)\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\tĐối tượng ưu đãi:\n\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.DoiTuongUuDai !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{thongTinMienGiamTheoDoiTuongUuDai.DoiTuongUuDai}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.DoiTuongUuDai === null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\tCông ty ưu đãi:\n\t\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.CongTyUudai !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{thongTinMienGiamTheoDoiTuongUuDai.CongTyUudai}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.CongTyUudai === null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"40%\">\n\t\t\t\t\t\t\t\t\t\t<table width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"background: rgba(0, 0, 0, 0.04); padding: 5px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Voucher</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"background: rgba(0, 0, 0, 0.04)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin-top: -9px; position: relative\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutAlign=\"start center\" kendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<kendo-multiselect #multiselect [data]=\"listVoucherItem\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"value\" (open)=\"open()\" [filterable]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"loaiThanhToan===false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(removeTag)=\"removeTag($event)\" (blur)=\"blur()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(filterChange)=\"filterChange($event)\"> </kendo-multiselect>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)=\"QuetMaQRCodeClick()\" color=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: absolute; right: 3px; top: -10px\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-mini-fab type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"loaiThanhToan===false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"button-barcoe-in-search\" kendoTooltip\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-barcode [(model)]=\"modelQRCode\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(modelChange)=\"changeQR($event)\" style=\"display: none\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-barcode>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr *ngIf=\"ktKhuyenMaiDichVu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"background: rgba(0, 0, 0, 0.04); padding: 5px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a style=\"color: blue;\" (click)=\"dichVuKhuyenMai()\"><strong>Dịch\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvụ khuyến mại</strong></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"auto\">\n\t\t\t\t\t\t\t\t\t\t<app-upload id=\"Upload\" label=\"Giấy miễn giảm đính kèm (nếu có)\"\n\t\t\t\t\t\t\t\t\t\t\t[model]=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemGiam\"\n\t\t\t\t\t\t\t\t\t\t\t(uploadFileDone)=\"uploadFileDone($event)\"\n\t\t\t\t\t\t\t\t\t\t\t[allowedExtensions]=\"allowedExtensions\" (removeEvent)=\"removeEvent($event)\"\n\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'GiayMiemGiam' | validationerror:thuNganValidationErrors\">\n\t\t\t\t\t\t\t\t\t\t</app-upload>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<div fxFlex=\"100%\" class=\"mb-3\" *ngIf=\"loaiThanhToan === true\">\n\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t<legend>\n\t\t\t\t\t\t\t\t\t\tThông tin thu chi\n\t\t\t\t\t\t\t\t\t</legend>\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"ktSuDungGoi != undefined && ktSuDungGoi != null\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"chiTietGoiMarketing()\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"z-index: 9999;margin-left: 13px; text-decoration: underline; color: blue\">Chi\n\t\t\t\t\t\t\t\t\t\ttiết gói\n\t\t\t\t\t\t\t\t\t\tmarketing</a>\n\t\t\t\t\t\t\t\t\t<kendo-splitter>\n\t\t\t\t\t\t\t\t\t\t<kendo-splitter-pane\n\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"titleActive=== 'Chưa thu' || titleActive ==='Đã thu'\"\n\t\t\t\t\t\t\t\t\t\t\t[collapsible]=\"true\" size=\"22%\" class=\"sticky-panelbar\" style=\"top: 0;\">\n\n\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"kiemTraPhieuThuBHYT && tenPhieuThu != undefined && tenPhieuThu != null \"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red; font-weight: 800\">Vui lòng hủy phiếu :</strong>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"kiemTraPhieuThuBHYT\" style=\"font-size: 13px; color: green\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"tabDaThuHuyPhieu($event,1)\"> {{tenPhieuThu}} </a>\n\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"px-2 py-3\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"overflow: hidden\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"po-right d-unset\" style=\"width: 100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'disableDiv': kiemTraPhieuThuBHYT}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-custom\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutGap=\"18px\" kendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button name=\"thu-phi\" [checked]=\"radioThuTien\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Phím tắt: Ctrl+F1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"changeValue('thutien')\" value=\"thutien\"> Thu\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttiền </mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-radio-button name=\"thu-phi\" [checked]=\"radioThuTamUng\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Phím tắt: Ctrl+F2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"changeValue('thutamung')\" value=\"thutamung\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tThu tạm ứng </mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-custom\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"selectedValueThuPhi === 'thutien'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"test\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span fxFlex=\"100%\" class=\"sub-title mt-0 text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Bệnh nhân cần TT: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong class=\"color-red\">{{tongTienBNThanhToan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric [max]=\"tongTienBNThanhToan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"cong-no-benh-nhan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.SoTienCongNo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[isFormatCurrenly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(selectMoney)]=\"selectMoneyTienMat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(modelChange)=\"modelChangeTienCongNo($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[spinners]=\"false\" [step]=\"100\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Công nợ NB \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textbox id=\"ghi-chu\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"thuTien.SoTienCongNo > 0\" label=\"Ghi chú\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.NoiDungCongNo\"> </app-textbox>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Áp dụng công nợ mới cho phân thu tiền -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"px-6 py-4\" fxLayout=\"column\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: relative\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset *ngIf=\"!isTienBNTraOrTraBN\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mb-3\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: left !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<legend>Số Tiền phải trả bệnh nhân\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</legend>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"soTienQuyBHYTTTTrongGoi === 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong> Tạm ứng - (BN cần TT -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCông nợ NB\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t)={{soDuTaiKhoanBenhNhan|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t({{tongTienBNThanhToan|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{thuTien.SoTienCongNo|number:'0.2-2':'vi-VN'}})=\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-font-size-tra-bn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{soDuTaiKhoanBenhNhan -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(tongTienBNThanhToan -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthuTien.SoTienCongNo)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"soTienQuyBHYTTTTrongGoi !== 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong> (Tạm ứng + Hoàn ứng trong\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tgói) - (BN cần TT -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCông nợ NB\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t)={{soDuTaiKhoanBenhNhan|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t({{tongTienBNThanhToan|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{thuTien.SoTienCongNo|number:'0.2-2':'vi-VN'}})=\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-font-size-tra-bn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{(soDuTaiKhoanBenhNhan +\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsoTienQuyBHYTTTTrongGoi) -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(tongTienBNThanhToan -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tthuTien.SoTienCongNo)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<fieldset *ngIf=\"isTienBNTraOrTraBN\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"mb-3\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"text-align: left !important\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<legend>Số Tiền phải thu bệnh nhân\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</legend>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"mt-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"soTienQuyBHYTTTTrongGoi === 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong> (BN cần TT - Công nợ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNB ) - Tạm ứng =\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t({{tongTienBNThanhToan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}} -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{thuTien.SoTienCongNo|number:'0.2-2':'vi-VN'}})\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{soDuTaiKhoanBenhNhan|number:'0.2-2':'vi-VN'}}=\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-font-size-thu-tien-bn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ tienPhaiTraBenhNhan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"soTienQuyBHYTTTTrongGoi !== 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong> (BN cần TT - Công nợ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNB ) - Tạm ứng - Hoàn ứng\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttrong gói =\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t({{tongTienBNThanhToan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}} -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{thuTien.SoTienCongNo|number:'0.2-2':'vi-VN'}})\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{soDuTaiKhoanBenhNhan|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{soTienQuyBHYTTTTrongGoi|number:'0.2-2':'vi-VN'}}=\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"text-font-size-thu-tien-bn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{ tienPhaiTraBenhNhan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- Áp dụng công nợ mới cho phân thu tiền -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- hình thức thanh toán nếu nó ở thu tiền show 3 giá trị tương ứng -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-multiselect\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"isTienBNTraOrTraBN && tienPhaiTraBenhNhan !== 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"setDefeautTienMat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[modelText]=\"hinhThucThanhToan.DisplayName\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[style.display]=\"tongTienBNThanhToan < 0 ? 'none' : 'block'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Hình thức thanh toán\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[required]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(valueChange)=\"selectionChangeHinhThucThanhToan($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[data]=\"hinhThucThanhToan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'HinhThucThanhToan' | validationerror:validationErrors\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-multiselect>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- hình thức thanh toán -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- 3 hình thức tương ứng nếu chọn bên hình thức thanh toán tương ứng ta cho nhâp số tiền -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"isTienBNTraOrTraBN && flagCheckSeletedTienMat && tienPhaiTraBenhNhan !== 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"checkSeletedTienMat\" id=\"so-tien\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.TienMat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[isFormatCurrenly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(selectMoney)]=\"selectMoneyTienMat\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(modelChange)=\"modelChangeTienMat($event , 1)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[spinners]=\"false\" [step]=\"100\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Tiền mặt\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'TienMat' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[required]=\"true\"> </app-textboxnumeric>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"isTienBNTraOrTraBN && flagCheckSeletedChuyenKhoan && tienPhaiTraBenhNhan !== 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"checkSeletedChuyenKhoan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"chuyen-khoan\" [step]=\"100\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(selectMoney)]=\"selectMoneyTienChuyenKhoan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[isFormatCurrenly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(modelChange)=\"modelChangeChuyenKhoan($event , 2)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[spinners]=\"false\" [(model)]=\"thuTien.ChuyenKhoan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Chuyển khoản\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'ChuyenKhoan' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[required]=\"true\"> </app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"isTienBNTraOrTraBN && flagCheckSeletedPos && tienPhaiTraBenhNhan !== 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"pos\" [readonly]=\"checkSeletedPos\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"POS\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(selectMoney)]=\"selectMoneyTienPos\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(modelChange)=\"modelChangePos($event , 3)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[spinners]=\"false\" [isFormatCurrenly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[step]=\"100\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'POS' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.POS\" [required]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <app-textboxnumeric\n                                                                    *ngIf=\"isTienBNTraOrTraBN && flagCheckSeletedCongNo\"\n                                                                    [readonly]=\"checkSeletedCongNo\"\n                                                                    [readonly]=\"checkSeletedPos\"\n                                                                    (modelChange)=\"modelChangeCongNo($event , 4)\"\n                                                                    id=\"cong-no\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                                                    [spinners]=\"false\" [(model)]=\"thuTien.SoTienCongNo\"\n                                                                    [isFormatCurrenly]=\"true\" label=\"Công nợ\">\n                                                                </app-textboxnumeric> -->\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"margin-top: -6px ;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"showCanhBaoSoTienNhap\" class=\"color-red\">Số\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttiền nhập không đúng số tiền thu.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-------------------------------------------------------------------------------------->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"isTienBNTraOrTraBN && flagCheckSeletedTienMat && tienPhaiTraBenhNhan !== 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[style.display]=\"tongTienBNThanhToan < 0 ? 'none' : 'block'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"benh-nhan-dua\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.TienBenhNhanDua\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[spinners]=\"false\" [step]=\"100\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(modelChange)=\"modelChangeTienBNDua($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(selectMoney)]=\"selectMoneyTienBNDua\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[isFormatCurrenly]=\"true\" [min]=\"0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(keyup)=\"changeValueTienBenhNhanDua($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlabel=\"Người bệnh đưa\"> </app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textboxnumeric\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"isTienBNTraOrTraBN && flagCheckSeletedTienMat && tienPhaiTraBenhNhan !== 0\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[style.display]=\"tongTienBNThanhToan < 0 ? 'none' : 'block'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tid=\"tra-lai\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[spinners]=\"false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.TienTraLaiBenhNhan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"true\" [isFormatCurrenly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tlabel=\"Trả lại\"> </app-textboxnumeric>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-datepicker id=\"ngay-thu\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Ngày thu\" [readonly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.NgayThu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'NgayThu' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[required]=\"true\" [required]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-datepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textbox id=\"noi-dung-thu\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Nội dung thu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"thuTien.NoiDungThu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'NoiDungThu' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"10000\" [required]=\"true\"> </app-textbox>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxFlex=\"100%\" fxLayout=\"row\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutAlign=\"end center\" fxLayoutGap=\"9px\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"padding-thu-tien\" kendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button *ngIf=\"ktQTBHYTTheoGoi\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"thuKemDichVuTrongGoi()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Thu kèm Dv Trong Gói\" color=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-raised-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Thu kèm Dv Trong Gói</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" mat-raised-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"xemBangKeNgoaiTruChoThu()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Bảng kê ngoại trú chờ thu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor=\"primary\" class=\"mr-2\">Bảng kê ngoại trú\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchờ thu</button>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"thanhToanKemDichVuTrongGoi()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Phím tắt: Ctrl+S\" color=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-raised-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tongTienBNThanhToan >= 0\"> Thu\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttiền</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"tongTienBNThanhToan < 0\"> Thanh\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttoán</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-custom\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"selectedValueThuPhi === 'thutamung'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-chi-tiet-thu-tien-tam-ung\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterChanged)=\"dataSourceChangedTamUng=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dataSourceChangedTamUng]=\"dataSourceChangedTamUng\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[SoTienThanhToanDV]=\"tongTienBNThanhToan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[HoTenBenhNhan]=\"thongTinBenhNhan.HoTen\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(tienTrongTaiKhoan)=\"tienTrongTaiKhoan($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-chi-tiet-thu-tien-tam-ung>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</kendo-splitter-pane>\n\n\t\t\t\t\t\t\t\t\t\t<kendo-splitter-pane *ngIf=\"titleActive=== 'Quyết toán gói marketing'\"\n\t\t\t\t\t\t\t\t\t\t\t[collapsible]=\"true\" size=\"25%\" class=\"sticky-panelbar\" style=\"top: 0;\">\n\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"kiemTraPhieuThuGoiBHYT && tenPhieuThuGoi != undefined && tenPhieuThuGoi != null \"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"color: red; font-weight: 800\">Vui lòng hủy phiếu thu gói\n\t\t\t\t\t\t\t\t\t\t\t\t:</strong>\n\t\t\t\t\t\t\t\t\t\t\t<a *ngIf=\"kiemTraPhieuThuGoiBHYT\" style=\"font-size: 13px; color: green\"\n\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"tabDaThuHuyPhieu($event , 2)\"> {{tenPhieuThuGoi}} </a>\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"px-2 py-3\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"overflow: hidden\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"po-right d-unset\" style=\"width: 100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'disableDiv': kiemTraPhieuThuGoiBHYT}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"container-custom\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"selectedValueThuPhi === 'thutien'\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id=\"test\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span fxFlex=\"100%\" class=\"sub-title mt-0 text-left\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Số tiền: </strong><strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"color-red\">{{tongTienBNThanhToan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-datepicker id=\"ngay-thu\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Ngày quyết toán\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[readonly]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"chiTienQuyetToan.NgayThu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'NgayThu' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[required]=\"true\" [required]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-datepicker>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-textbox id=\"noi-dung-thu\" fxFlex=\"100%\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.sm=\"100%\" label=\"Nội dung thu quyết toán\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(model)]=\"chiTienQuyetToan.NoiDungThu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'NoiDungThu' | validationerror:validationErrors\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmaxlength=\"10000\" [required]=\"true\"> </app-textbox>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div fxFlex=\"100%\" fxLayout=\"row\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutAlign=\"end center\" fxLayoutGap=\"9px\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"padding-thu-tien\" kendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" mat-raised-button\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"xemBangKeNgoaiTruTrongGoiChoThu()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Bảng kê ngoại trú chờ thu\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor=\"primary\" class=\"mr-2\">Bảng kê ngoại trú\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tchờ thu</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"quyetToanDichVuTrongGoiCoBHYT()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Quyết toán\" color=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-raised-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Quyết toán</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</kendo-splitter-pane>\n\n\t\t\t\t\t\t\t\t\t\t<!-- Danh sách thu thu tiền -->\n\t\t\t\t\t\t\t\t\t\t<kendo-splitter-pane style=\"overflow: initial\">\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"10px\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: absolute; right:0;width: 75%;font-size: 15px;vertical-align: middle;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<strong class=\"color-red\" *ngIf=\"ktCoPhieuThuCongNo\">Người bệnh có phiếu thu công nợ</strong>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: absolute; right:0;width: 100%;vertical-align: middle;\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button *ngIf=\"chuyenVaoNoiTru\" type=\"button\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"ChuyenVaoNoiTru()\" style=\"z-index: 9999\"\n\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Chuyển BN vào nội trú\" color=\"warn\" mat-raised-button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Chuyển BN vào nội trú</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"soTienQuyBHYTTTTrongGoi > 0\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tHoàn ứng trong gói:\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"color-green\">{{soTienQuyBHYTTTTrongGoi\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t|number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong> Tạm ứng: </strong> <strong\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"color-green\">{{soDuTaiKhoanBenhNhan |\n\t\t\t\t\t\t\t\t\t\t\t\t\tnumber:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<kendo-tabstrip fxFlex=\"100%\" class=\"content-has-border has-padding\"\n\t\t\t\t\t\t\t\t\t\t\t\t(tabSelect)=\"onTabSelect($event)\" #tabDanhSachThuTien>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- tab đã thu  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<kendo-tabstrip-tab [title]=\"'Chưa thu'\" [selected]=\"tabActive===1\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"dsCoDichVuCanThu && loaiThanhToan === true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template kendoTabTitle>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div kendoTooltip title=\"Phím tắt: Ctrl + F6\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template kendoTabContent>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-ds-chua-thu-tien (afterChanged)=\"dataSourceChanged=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterChangedCongNo)=\"apDungCongNo=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterapDungMiemGiam)=\"apDungMiemGiam=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(kiemTraDSCongNo)=\"kiemTraDSCongNo($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dataSourceChanged]=\"dataSourceChanged\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[apDungCongNo]=\"apDungCongNo\" [position]=\"position\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[thongTinCongTyBaoHiemTuNhans]=\"thongTinBenhNhantam\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterapDungCNTT)=\"apCapNhatThanhToan=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[apCapNhatThanhToan]=\"apCapNhatThanhToan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[apDungMiemGiam]=\"apDungMiemGiam\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(loadingCTThanhCong)=\"loadingCTThanhCong($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterApDungHuyThanhCong)=\"afterApDungHuyThanhCong($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[thongTinMienGiamVos]=\"thongTinMienGiamVo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(danhSachChuaThanhToan)=\"danhSachChuaThanhToan($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(kiemTraDanhSachXNBHYT)=\"kiemTraDanhSachXNBHYT($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-ds-chua-thu-tien>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</kendo-tabstrip-tab>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Quyết toán gói marketing -->\n\t\t\t\t\t\t\t\t\t\t\t\t<kendo-tabstrip-tab [title]=\"'Quyết toán gói marketing'\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[selected]=\"tabActive===2\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"loaiThanhToan === true && ktQTBHYTTheoGoi === true\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tkendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template kendoTabTitle>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div kendoTooltip title=\"Quyết toán gói marketing\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template kendoTabContent>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-danh-sach-goi-bhyt-chua-quyet-toan\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterChanged)=\"dataSourceChangedTrongGoi=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(afterChangedCongNo)=\"apDungCongNoTrongGoi=false\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[dataSourceChanged]=\"dataSourceChangedTrongGoi\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[apDungCongNo]=\"apDungCongNoTrongGoi\" [position]=\"position\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[thongTinCongTyBaoHiemTuNhans]=\"thongTinBenhNhantam\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[yeuCauTiepNhanId]=\"idYeuCauTiepNhan\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(luuTamChiPhiThanhCongTrongGoi)=\"luuTamChiPhiThanhCongTrongGoi($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(danhSachGoiCoBHYT)=\"danhSachGoiCoBHYT($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-danh-sach-goi-bhyt-chua-quyet-toan>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</kendo-tabstrip-tab>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- tab đã thu  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<kendo-tabstrip-tab [title]=\"'Đã thu'\" [selected]=\"tabActive===3\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"loaiThanhToan === true\" kendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template kendoTabTitle>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div kendoTooltip title=\"Phím tắt: Ctrl + F7\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template kendoTabContent>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<app-thong-tin-phieu-thu-ngoai-tru [phieuThuId]=\"xemPhieuThuId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t(huyThanhCong)=\"huyThanhCong($event)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</app-thong-tin-phieu-thu-ngoai-tru>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t\t\t\t</kendo-tabstrip-tab>\n\t\t\t\t\t\t\t\t\t\t\t</kendo-tabstrip>\n\t\t\t\t\t\t\t\t\t\t</kendo-splitter-pane>\n\t\t\t\t\t\t\t\t\t</kendo-splitter>\n\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ng-template #actionTemplateSTCongNo let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"2px\">\n\t\t\t\t<app-textboxnumeric class=\"no-label p-0\" label=\" \" [step]=\"100\" fxFlex=\"50%\"\n\t\t\t\t\t[disabled]=\"loaiThanhToan === false && kiemTraThongTinBaoHiemTN === true\"\n\t\t\t\t\t[(model)]=\"dataItem.SoTienCongNo\" (keyup)=\"onKeyCongNo($event, dataItem.SoTienCongNo, dataItem.Id)\"\n\t\t\t\t\tdecimals=\"2\" [format]=\"format\" min=\"0.00\"> </app-textboxnumeric>\n\t\t\t\t<button color=\"primary\" fxFlex=\"auto\" mat-raised-button mat-button\n\t\t\t\t\t[disabled]=\"loaiThanhToan === false &&  kiemTraThongTinBaoHiemTN === true\"\n\t\t\t\t\t(click)=\"apDungCongNoCongTyBHTN(dataItem.SoTienCongNo,dataItem.Id)\" cdkFocusInitial>Áp dụng</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #actionTemplateSubmitCongNo let-dataItem let-rowIndex=\"rowIndex\"> </ng-template>\n\t</vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"test\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n\t<span fxFlex=\"100%\" class=\"sub-title mt-0 text-left\">\n\t\t<strong>Cần tạm ứng tối thiểu: </strong>\n\t\t<strong class=\"color-red\">{{soTienTamUngToiThieu | number:'0.2-2':'vi-VN'}}</strong>\n\t</span>\n\t<span fxFlex=\"100%\" class=\"sub-title mt-0 text text-left\">\n\t\t<app-textboxnumeric id=\"pos\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Số Tiền\" \n\t\t\tstyle=\"color: red; font-size: 20px; font-weight: 800; margin-bottom: -20px\" [spinners]=\"false\" [step]=\"100\"\n\t\t\t[(selectMoney)]=\"selectMoneyPos\" [isFormatCurrenly]=\"true\" (modelChange)=\"onValueChangeSoTienTamUng($event)\"\n\t\t\t[(model)]=\"tongSoTienTamUng\" [required]=\"true\"> </app-textboxnumeric>\n\t</span>\n\t<app-multiselect [(model)]=\"setDefeautTienMat\" [modelText]=\"hinhThucThanhToan.DisplayName\" fxFlex=\"100%\"\n\t\tfxFlex.sm=\"100%\" label=\"Hình thức thanh toán\" [required]=\"true\" (valueChange)=\"evtHinhThucThanhToanChanged($event)\"\n\t\t[data]=\"hinhThucThanhToan\"> </app-multiselect>\n\t<app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\" id=\"so-tien\" [(model)]=\"thuTienTamUng.TienMat\" fxFlex=\"100%\"\n\t\tfxFlex.sm=\"100%\" label=\"Tiền mặt\" [(selectMoney)]=\"selectMoney\"\n\t\t(modelChange)=\"evtTienMatChanged($event,1)\" [isFormatCurrenly]=\"true\" [spinners]=\"false\"\n\t\t[validationerror]=\"'TienMat' | validationerror:validationErrors\" [step]=\"100\" [required]=\"true\">\n\t</app-textboxnumeric>\n\t<app-textboxnumeric *ngIf=\"flagCheckSeletedChuyenKhoan\" id=\"chuyen-khoan\" [(model)]=\"thuTienTamUng.ChuyenKhoan\"\n\t\t fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Chuyển khoản\" [spinners]=\"false\"\n\t\t[isFormatCurrenly]=\"true\" [step]=\"100\" [(selectMoney)]=\"selectMoneyChuyenKhoan\"\n\t\t(modelChange)=\"evtChuyenKhoanChanged($event,2)\" [validationerror]=\"'ChuyenKhoan' | validationerror:validationErrors\"\n\t\t[required]=\"true\"> </app-textboxnumeric>\n\t<app-textboxnumeric *ngIf=\"flagCheckSeletedPos\" id=\"pos\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"POS\"\n\t\t [validationerror]=\"'POS' | validationerror:validationErrors\" [spinners]=\"false\"\n\t\t[step]=\"100\" [(selectMoney)]=\"selectMoneyPos\" [isFormatCurrenly]=\"true\" \n\t\t(modelChange)=\"evtPOSChanged($event,3)\"\n\t\t[(model)]=\"thuTienTamUng.POS\" [required]=\"true\"> </app-textboxnumeric>\n\t<app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\" id=\"benh-nhan-dua\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [step]=\"100\"\n\t\t[isFormatCurrenly]=\"true\" (keyup)=\"changeValueTienBenhNhanDua($event)\" [spinners]=\"false\"\n\t\t(modelChange)=\"modelChangeTienTamUngBNDua($event)\" [(selectMoney)]=\"selectMoneyTienTamUngBNDua\"\n\t\t[(model)]=\"thuTienTamUng.TienBenhNhanDua\" label=\"Người bệnh đưa\"> </app-textboxnumeric>\n\t<app-textboxnumeric *ngIf=\"flagCheckSeletedTienMat\" id=\"tra-lai\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Trả lại\"\n\t\t[readonly]=\"true\" [isFormatCurrenly]=\"true\" [step]=\"100\" [spinners]=\"false\"\n\t\t[(model)]=\"thuTienTamUng.TienTraLaiBenhNhan\"> </app-textboxnumeric>\n\t<app-datepicker id=\"ngay-thu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ngày thu\" [readonly]=\"true\"\n\t\t[(model)]=\"thuTienTamUng.NgayThuTamUng\" [validationerror]=\"'NgayThu' | validationerror:validationErrors\"\n\t\t[required]=\"true\" [required]=\"true\"> </app-datepicker>\n\t<app-textbox id=\"noi-dung-thu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Nội dung thu\"\n\t\t[(model)]=\"thuTienTamUng.NoiDungThuTamUng\"\n\t\t[validationerror]=\"'NoiDungThuTamUng' | validationerror:validationErrors\" maxlength=\"10000\" [required]=\"true\">\n\t</app-textbox>\n\t<div fxFlex=\"100%\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"padding-thu-tien\">\n\t\t<button type=\"button\" (click)=\"ThuTienTamUng()\" color=\"primary\" mat-raised-button>Thu tiền</button>\n\t</div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-grid [sort]=\"sortConfig\" [pageSize]=\"_pageSize\" baseRoute=\"/danh-sach-thu-dich-vu\"\n\t[gridColumns]=\"gridThuNganColumns\" [useActionDefault]=\"false\" [keyCode]=\"keyCode\" [lazyLoadPage]=\"true\"\n\turlGetData=\"ThuNgan/GetDataForGridAsync\" urlGetTotalPage=\"ThuNgan/GetTotalPageForGridAsync\"\n\t[useHeaderDefault]=\"false\" #gridList [headerTemplate]=\"headerTemplate\" heightToolbar=\"250\" [checkboxAble]=\"false\"\n\t[documentType]=\"documentType\" (extEnterChangePage)=\"extEnterChangePage($event)\"\n\t[additionalSearchString]=\"queryStrings\"> </app-grid>\n<ng-template #headerTemplate>\n\t<div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t<div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n\t\t\tfxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n\t\t\t<ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n\t\t\t<input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n\t\t\t\ttype=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n\t\t\t\t(ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa(Mã NB,Tên NB,Năm sinh)...\" />\n\t\t\t<button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n\t\t\t\tclass=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n\t\t\t\t<img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n\t\t\t</button>\n\t\t</div>\n\t\t<button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n\t\t\t<mat-icon [icIcon]=\"icSearch\"></mat-icon>\n\t\t</button>\n\t\t<button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n\t\t\t<mat-icon [icIcon]=\"icSearch\"></mat-icon>\n\t\t</button>\n\t\t<div fxFlex=\"54%\" fxFlex.sm=\"54%\">\n\t\t<!-- đóng lại khách hàng ko muốn change muốn enter\t(modelChange)=\"thoiDiemTNChange()\" -->\n\t\t\t<app-datetimepicker fxFlex=\"210px\" [(model)]=\"choThuTien.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n\t\t\t\tid=\"ThoiDiemTiepNhanTuFormat\"  label=\"Tiếp nhận từ\"\n\t\t\t\tclass=\"ml-2 on-header\" (keyup)=\"onKey($event)\"> </app-datetimepicker>\n\t\t\t<app-datetimepicker fxFlex=\"210px\" [(model)]=\"choThuTien.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n\t\t\t\tid=\"ThoiDiemTiepNhanDenFormat\"  label=\"Tiếp nhận đến\"\n\t\t\t\tclass=\"ml-2 on-header\" (keyup)=\"onKey($event)\"> </app-datetimepicker>\n\t\t\t<button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n\t\t</div>\n\t</div>\n</ng-template>\n<ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai  === trangThaiThuTien.ChuaThu \">\n\t\t<strong class=\"text-color\">Chưa thanh toán xong</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.TraNo\">\n\t\t<strong class=\"text-color-blue\">Công nợ</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.HoanUng\">\n\t\t<strong class=\"text-color-blue\">Hoàn ứng</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.DaThu\">\n\t\t<strong class=\"text-color-blue\">Đã thu</strong>\n\t</div>\n</ng-template>\n<ng-template #coNhapVienTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t<div kendoTooltip *ngIf=\"dataItem.YeuCauNhapVien === true\">\n\t\t<app-checkbox value=\"true\" [disabled]=\"true\" [model]=\"dataItem.YeuCauNhapVien\" class=\"pl-2\">\n\t\t</app-checkbox>\n\t</div>\n</ng-template>\n<ng-template #templateTextSoTienChoXacNhan let-dataItem>\n\t<strong class=\"text-color\"> {{dataItem.SoTienBNPhaiTT | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienDaXacNhan let-dataItem>\n\t<strong class=\"text-color-blue\"> {{dataItem.SoTienBNDaTT | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienDaTamUng let-dataItem>\n\t<strong> {{dataItem.SoTienTamUng | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoDuTK let-dataItem>\n\t<strong> {{dataItem.SoTienDuTaiKhoan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateSTT let-dataItem let-i=\"rowIndex\">\n\t<strong>{{i + 1}}</strong>\n</ng-template>\n<ng-template #maTNTemplate let-dataItem>\n\t<a *ngIf=\"dataItem.ChuaThu === true\" (click)=\"thongTinChiTietThanhToan(dataItem.Id, dataItem)\">{{dataItem.MaTN}}</a>\n\t<a *ngIf=\"dataItem.ChuaThu === false\"\n\t\t(click)=\"thongTinChiTietThanhToan(dataItem.Id , dataItem)\">{{dataItem.MaTN}}</a>\n</ng-template>\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-grid [sort]=\"sortConfig\" [pageSize]=\"_pageSize\" baseRoute=\"/danh-sach-thu-dich-vu\" heightToolbar=\"250\"\n\t[gridColumns]=\"gridThuNganColumns\" [useActionDefault]=\"false\" [keyCode]=\"keyCode\" [lazyLoadPage]=\"true\"\n\turlGetData=\"ThuNgan/GetDataThuTienDaHoanThanhForGridAsync\"\n\turlGetTotalPage=\"ThuNgan/GetTotalThuTienDaHoanThanhPageForGridAsync\" [useHeaderDefault]=\"false\" #gridList\n\t[headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [documentType]=\"documentType\"\n\t(extEnterChangePage)=\"extEnterChangePage($event)\" [additionalSearchString]=\"queryStrings\"> </app-grid>\n<ng-template #headerTemplate>\n\t<div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t<div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n\t\t\tfxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n\t\t\t<ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n\t\t\t<input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n\t\t\t\ttype=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n\t\t\t\t(ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa(Mã NB,Tên NB,Năm sinh)...\" />\n\t\t\t<button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n\t\t\t\tclass=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n\t\t\t\t<img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n\t\t\t</button>\n\t\t</div>\n\t\t<button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n\t\t\t<mat-icon [icIcon]=\"icSearch\"></mat-icon>\n\t\t</button>\n\t\t<button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n\t\t\t<mat-icon [icIcon]=\"icSearch\"></mat-icon>\n\t\t</button>\n\t\t<div fxFlex=\"54%\" fxFlex.sm=\"54%\">\n\t\t\t<!-- đóng lại khách hàng ko muốn change muốn enter\t(modelChange)=\"thoiDiemTNChange()\" -->\t\t\n\t\t\t<app-datetimepicker fxFlex=\"210px\" [(model)]=\"choThuTien.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n\t\t\t\tid=\"ThoiDiemTiepNhanTuFormat\" label=\"Tiếp nhận từ\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n\t\t\t</app-datetimepicker>\n\t\t\t<app-datetimepicker fxFlex=\"210px\" [(model)]=\"choThuTien.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n\t\t\t\tid=\"ThoiDiemTiepNhanDenFormat\" label=\"Tiếp nhận đến\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n\t\t\t</app-datetimepicker>\n\t\t\t<button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n\t\t</div>\n\t</div>\n</ng-template>\n<ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai  === trangThaiThuTien.ChuaThu \">\n\t\t<strong class=\"text-color\">Chưa thanh toán xong</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.TraNo\">\n\t\t<strong class=\"text-color-blue\">Công nợ</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.HoanUng\">\n\t\t<strong class=\"text-color-blue\">Hoàn ứng</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.DaThu\">\n\t\t<strong class=\"text-color-blue\">Đã thu</strong>\n\t</div>\n</ng-template>\n<ng-template #templateTextSoTienChoXacNhan let-dataItem>\n\t<strong class=\"text-color\"> {{dataItem.SoTienBNPhaiTT | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienDaXacNhan let-dataItem>\n\t<strong class=\"text-color-blue\"> {{dataItem.SoTienBNDaTT | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienDaTamUng let-dataItem>\n\t<strong> {{dataItem.SoTienTamUng | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoDuTK let-dataItem>\n\t<strong> {{dataItem.SoTienDuTaiKhoan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateSTT let-dataItem let-i=\"rowIndex\">\n\t<strong>{{i + 1}}</strong>\n</ng-template>\n<ng-template #maTNTemplate let-dataItem>\n\t<a *ngIf=\"dataItem.ChuaThu === true\" (click)=\"thongTinChiTietThanhToan(dataItem.Id, dataItem)\">{{dataItem.MaTN}}</a>\n\t<a *ngIf=\"dataItem.ChuaThu === false\"\n\t\t(click)=\"thongTinChiTietThanhToan(dataItem.Id , dataItem)\">{{dataItem.MaTN}}</a>\n</ng-template>\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.html": 
        /*!*********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.html ***!
          \*********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<kendo-grid [data]=\"gridData\" [resizable]=\"true\"  [selectable]=\"{enabled: true, checkboxOnly: true}\" class=\"grid-custom\" id=\"danhSachGoiDVGrid\"  height=\"541\">\n\t<kendo-grid-column field=\"\" title=\"\" width=\"25\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\t\n\t<kendo-grid-column field=\"\" title=\"#\" width=\"15\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"> {{rowIndex + 1}} </ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"Ma\" title=\"Mã\" width=\"50\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<span class=\"reverse-ellipsis r\" title=\"{{dataItem.Ma}}\"> {{dataItem.Ma}} </span>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"Nhom\" title=\"Nhóm\" width=\"60\" [hidden]=\"true\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\" class=\"k-grouping-row p\">\n\t\t<ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\">\n\t\t\t{{value}}\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"TenDichVu\" title=\"Tên Dịch Vụ\" width=\"100\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center end\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<p class=\"reverse-ellipsis r\" title=\"{{dataItem.TenDichVu}}\">{{dataItem.TenDichVu}}</p>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<div class=\"text-center\" style=\"font-weight: bold;color:#000;\" kendoTooltip title=\"Tổng cộng DV đang chọn\">Tổng cộng:</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"LoaiGia\" title=\"Loại Giá\" width=\"60\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'left'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"Soluong\" title=\"Số Lượng\" width=\"50\" [style]=\"{'text-align': 'right'}\" [headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"DonGia\" title=\"Đơn Giá\" width=\"100\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.DonGia | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"ThanhTien\" title=\"Thành Tiền\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float: right;\">{{total('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"BHYTThanhToan\" title=\"BHYT\" width=\"100\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">\n                <div *ngIf=\"dataItem.DuocHuongBHYT !== true\">{{ dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}</div>\n                <div *ngIf=\"dataItem.DuocHuongBHYT === true\">\n                    {{ dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}\n                    <ic-icon *ngIf=\"dataItem.KiemTraBHYTXacNhan===true\" [icon]=\"icCheck\" class=\"size-icon-duoc-bhyt mr-3\"\n                        inline=\"true\"> </ic-icon>\n                    <ic-icon *ngIf=\"dataItem.KiemTraBHYTXacNhan !==true\" [icon]=\"icCheck\" class=\"size-icon-khong-bhyt mr-3\"\n                        inline=\"true\"> </ic-icon>\n                </div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\t\n        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float: right;\">{{total('BHYTThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\n\t<kendo-grid-column-group [style]=\"{'text-align': 'center'}\" *ngFor=\"let col of danhSachCongNoChoThus\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<div>\n\t\t\t<ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n\t\t\t\t<div class=\"text-center\">Công nợ</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t\t<kendo-grid-column *ngFor=\"let col1 of col.CongNoChoThus\" width=\"100\" [style]=\"{'text-align': 'center'}\" title=\"{{col1.TenCongTy}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\" fxLayoutAlign=\"space-between\" \n                      *ngIf=\"dataItem.DanhSachCongNoChoThus[col1.ViTri].SoTienCongNoChoThu!=undefined\">\n\t\t\t\t\t  <app-textboxnumeric class=\"no-label\" [step]=\"100\" decimals=\"2\" [format]=\"format\" min=\"0.00\"\n\t\t\t\t\t  [(model)]=\"dataItem.DanhSachCongNoChoThus[col1.ViTri].SoTienCongNoChoThu\"\n\t\t\t\t\t  (modelChange)=\"modelChangeCongNo($event , dataItem ,col1.ViTri)\">\n\t\t\t\t  </app-textboxnumeric>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t<div class=\"float_right\">{{totalCongno( col1.CongTyBaoHiemTuNhanId ,group) | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t\t<span class=\"float_right\">{{totalCongnoFooter( col1.CongTyBaoHiemTuNhanId) | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t</ng-template>\n\t\t</kendo-grid-column>\n\t</kendo-grid-column-group>\n\n    <kendo-grid-column field=\"SoTienQuyetToan\" title=\"Số Tiền quyết toán\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.SoTienQuyetToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.SoTienQuyetToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float: right;\">{{total('SoTienQuyetToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\n    <kendo-grid-column field=\"NoiThucHien\" title=\"Nơi thực hiện\" width=\"80\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<span class=\"reverse-ellipsis r\" title=\"{{dataItem.NoiThucHien}}\"> {{dataItem.NoiThucHien}} </span>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\"> </kendo-grid-messages>\n</kendo-grid>\n\n<div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n\t<div style=\"float: left;\">\n        <button (click)=\"BackToList()\" type=\"button\" mat-button class=\"mr-2\">Quay lại</button>\n\t</div>\n\t<button type=\"button\" *ngIf=\"gridData != undefined && gridData != null && gridData.data.length > 0\" mat-raised-button (click)=\"luuTamChiPhiTrongGoiNgoaiTru()\" title=\"Lưu tạm chi phí trong gói\" color=\"primary\">Lưu tạm chi phí trong gói</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-grid [sort]=\"sortConfig\" [pageSize]=\"_pageSize\" baseRoute=\"/danh-sach-thu-dich-vu\"\n\t[gridColumns]=\"gridThuNganColumns\" [useActionDefault]=\"false\" [keyCode]=\"keyCode\" [lazyLoadPage]=\"true\"\n\turlGetData=\"ThuNgan/GetDataThuPhiNgoaiTruForGridAsync\"\n\turlGetTotalPage=\"ThuNgan/GetTotalThuPhiNgoaiTruPageForGridAsync\" [useHeaderDefault]=\"false\" #gridList\n\t[headerTemplate]=\"headerTemplate\" heightToolbar=\"250\" [checkboxAble]=\"false\" [documentType]=\"documentType\"\n\t(extEnterChangePage)=\"extEnterChangePage($event)\" [additionalSearchString]=\"queryStrings\"> </app-grid>\n\n<ng-template #headerTemplate>\n\t<div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t<div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n\t\t\tfxLayoutAlign=\"start center\" style=\"margin-top: 2px;\" kendoTooltip>\n\t\t\t<ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n\t\t\t<input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n\t\t\t\ttype=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n\t\t\t\t(ngModelChange)=\"searchChanges($event)\" placeholder=\"Họ tên, Mã BN, Mã TN\" />\n\t\t\t<button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\"\n\t\t\t\tclass=\"button-barcoe-in-search\" kendoTooltip title=\"Quét mã vạch thẻ\" title=\"Phím tắt: Ctrl + Q\">\n\t\t\t\t<img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n\t\t\t</button>\n\t\t</div>\n\n\t\t<!-- Năm, MaTN , SDT -->\n\t\t<div fxFlex=\"26%\" fxFlex.sm=\"26%\">\n\t\t\t<app-textboxnumeric fxFlex=\"210px\" [(model)]=\"choThuTien.NamSinh\" id=\"nam\" label=\"Năm sinh\"\n\t\t\t\tstyle=\"margin-top: 1px;\" class=\"ml-2  on-header\" (keyup)=\"onKey($event)\" format=\"0\" min=\"1\" max=\"9999\">\n\t\t\t</app-textboxnumeric>\n\t\t\t<!-- <app-textbox fxFlex=\"210px\" [(model)]=\"choThuTien.MaTN\" id=\"maTN\" label=\"Mã TN\" class=\"ml-2 on-header\"\n\t\t\t\t(keyup)=\"onKey($event)\">\n\t\t\t</app-textbox> -->\n\t\t\t<app-textboxmask id=\"sdt\" fxFlex=\"210px\" label=\"Số điện thoại\" class=\"ml-2 on-header\"\n\t\t\t\t(keyup)=\"onKey($event)\" style=\"margin-top: 1px;\" [(model)]=\"choThuTien.DienThoaiStr\" mask=\"000 000 0000\"\n\t\t\t\tmaxlength=\"12\">\n\t\t\t</app-textboxmask>\n\t\t</div>\n\n\t\t<button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n\t\t\t<mat-icon [icIcon]=\"icSearch\"></mat-icon>\n\t\t</button>\n\n\t\t<div fxFlex=\"54%\" fxFlex.sm=\"54%\">\n\t\t\t<!-- đóng lại khách hàng ko muốn change muốn enter\t(modelChange)=\"thoiDiemTNChange()\" -->\n\t\t\t<app-datetimepicker fxFlex=\"210px\" [(model)]=\"choThuTien.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n\t\t\t\tid=\"ThoiDiemTiepNhanTuFormat\" label=\"Tiếp nhận từ\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n\t\t\t</app-datetimepicker>\n\t\t\t<app-datetimepicker fxFlex=\"210px\" [(model)]=\"choThuTien.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n\t\t\t\tid=\"ThoiDiemTiepNhanDenFormat\" label=\"Tiếp nhận đến\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n\t\t\t</app-datetimepicker>\n\t\t\t<button type=\"button\" color=\"primary\" (click)=\"TimkiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm</button>\n\t\t</div>\n\t</div>\n</ng-template>\n<ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai  === trangThaiThuTien.ChuaThu \">\n\t\t<strong class=\"text-color\">Chưa thanh toán xong</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.TraNo\">\n\t\t<strong class=\"text-color-blue\">Công nợ</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.HoanUng\">\n\t\t<strong class=\"text-color-blue\">Hoàn ứng</strong>\n\t</div>\n\t<div kendoTooltip *ngIf=\"dataItem.TrangThai === trangThaiThuTien.DaThu\">\n\t\t<strong class=\"text-color-blue\">Đã thu</strong>\n\t</div>\n</ng-template>\n<ng-template #templateTextSoTienChoXacNhan let-dataItem>\n\t<strong class=\"text-color\"> {{dataItem.SoTienBNPhaiTT | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienDaXacNhan let-dataItem>\n\t<strong class=\"text-color-blue\"> {{dataItem.SoTienDaThu | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoTienDaTamUng let-dataItem>\n\t<strong> {{dataItem.SoTienTamUng | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateTextSoDuTK let-dataItem>\n\t<strong> {{dataItem.SoTienDuTaiKhoan | number:'0.2-2':'vi-VN'}}</strong>\n</ng-template>\n<ng-template #templateSTT let-dataItem let-i=\"rowIndex\">\n\t<strong>{{i + 1}}</strong>\n</ng-template>\n<ng-template #coNhapVienTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t<div kendoTooltip *ngIf=\"dataItem.YeuCauNhapVien === true\">\n\t\t<app-checkbox value=\"true\" [disabled]=\"true\" [model]=\"dataItem.YeuCauNhapVien\" class=\"pl-2\">\n\t\t</app-checkbox>\n\t</div>\n</ng-template>\n<ng-template #maTNTemplate let-dataItem>\n\t<a *ngIf=\"dataItem.ChuaThu === true\" (click)=\"thongTinChiTietThanhToan(dataItem.Id, dataItem)\">{{dataItem.MaTN}}</a>\n\t<a *ngIf=\"dataItem.ChuaThu === false\"\n\t\t(click)=\"thongTinChiTietThanhToan(dataItem.Id , dataItem)\">{{dataItem.MaTN}}</a>\n</ng-template>\n<app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.html": 
        /*!*********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.html ***!
          \*********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\t<vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t<div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n\t\t\t<vex-breadcrumbs [crumbs]=\"[\n\t\t\t{Title:'Thu Ngân',Path:''},\n\t\t\t{Title:'Viện phí ngoại trú',Path:'',Active:true}]\"> </vex-breadcrumbs>\n\t\t\t<app-hot-key [keys]=\"[{Key:'Esc',Description:'Hủy', End:true}]\"></app-hot-key>\n\t\t</div>\n\t</vex-page-layout-header>\n\n\t<vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\t\t<div @fadeInUp class=\"-mt-16\">\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div class=\"card\" fxFlex=\"100%\">\n\t\t\t\t\t<div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\" *ngIf=\"choThuTien!=null\">\n\t\t\t\t\t\t<kendo-tabstrip #tabStrip (tabSelect)=\"onTabSelect($event)\" fxFlex=\"100%\"\n\t\t\t\t\t\t\tclass=\"content-has-border\">\n\t\t\t\t\t\t\t<kendo-tabstrip-tab [selected]=\"choThuTien.TabActive === 0\" [title]=\"'Thu phí ngoại trú'\">\n\t\t\t\t\t\t\t\t<ng-template kendoTabContent>\n\t\t\t\t\t\t\t\t\t<app-danh-sach-thu-phi-ngoai-tru></app-danh-sach-thu-phi-ngoai-tru>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</kendo-tabstrip-tab>\n\t\t\t\t\t\t\t<kendo-tabstrip-tab [selected]=\"choThuTien.TabActive === 1\" [title]=\"'Danh sách chưa thu'\">\n\t\t\t\t\t\t\t\t<ng-template kendoTabContent>\n\t\t\t\t\t\t\t\t\t<app-danh-sach-cho-thu-tien-benh-nhan></app-danh-sach-cho-thu-tien-benh-nhan>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</kendo-tabstrip-tab>\n\t\t\t\t\t\t\t<kendo-tabstrip-tab [selected]=\"choThuTien.TabActive === 2\" [title]=\"'Danh sách đã thu'\">\n\t\t\t\t\t\t\t\t<ng-template kendoTabContent>\n\t\t\t\t\t\t\t\t\t<app-danh-sach-da-thu-tien-benh-nhan></app-danh-sach-da-thu-tien-benh-nhan>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</kendo-tabstrip-tab>\n\t\t\t\t\t\t</kendo-tabstrip>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>DỊCH VỤ KHUYẾN MẠI KÈM THEO GÓI</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<div *ngFor=\"let item of danhSachDichVuKhuyenMaiBenhNhan; let i = index\">\n    <strong style=\"color: green;font-size: 15px;\" class=\"mt-3 mb-3\">{{item.TenGoi}}</strong>\n    <app-grid [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" class=\"k-grid-border\" [useHeaderDefault]=\"false\"\n        [useActionDefault]=\"false\" [checkboxAble]=\"true\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" #gridList\n        [gridDataSource]=\"{data:item.DanhSachDichVuTrongGoiKhuyenMais, total: 0}\" style=\"width: 1px;\"  \n        (extCheckboxSelection)=\"extCheckboxSelection($event)\"\n        [masterName]='item.Id' [groups]=\"groups\" [pageable]=\"false\" [showStt]=\"true\">\n    </app-grid>\n</div>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #goiGiaTemplate let-dataItem>\n    {{dataItem.GoiGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #donGiaTemplate let-dataItem>\n    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #donGiaKMTemplate let-dataItem>\n    {{dataItem.DonGiaKM | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #soTienMGTemplate let-dataItem>\n    {{dataItem.SoTienMG | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n\n<div class=\"sticky-button-action py-3 text-right mt-5\" kendoTooltip>\n    <div *ngIf=\"danhSachDichVuKhuyenMaiBenhNhan !== undefined && danhSachDichVuKhuyenMaiBenhNhan != null\"\n        class=\"sticky-button-action text-right mt-3\" kendoTooltip>\n        <button type=\"button\" (click)=\"apDung()\" title=\"Thu Tiền\" color=\"primary\" mat-raised-button>\n            <span>Áp dụng</span>\n        </button>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.html": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.html ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<kendo-grid [data]=\"gridData\" [resizable]=\"true\" [kendoGridSelectBy]=\"keySelectBy\"\n\t[selectable]=\"{enabled: true, checkboxOnly: true}\" class=\"grid-custom\" id=\"danhSachChuaThuTienGrid\"\n\t[rowClass]=\"rowCallback\" height=\"541\">\n\t<kendo-grid-column field=\"\" title=\"\" width=\"25\" [style]=\"{'text-align': 'center'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t<kendo-grid-checkbox-column width=\"30\">\n\t\t<ng-template kendoGridHeaderTemplate>\n\t\t\t<input class=\"k-checkbox\" id=\"selectAllCheckboxId\" kendoGridSelectAllCheckbox [state]=\"selectAllState\"\n\t\t\t\t(selectAllChange)=\"onSelectAllChange($event)\" />\n\t\t\t<label class=\"k-checkbox-label\" for=\"selectAllCheckboxId\"></label>\n\t\t</ng-template>\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div *ngIf=\"dataItem.DuocHuongBHYT === true\">\n\t\t\t\t<input class=\"k-checkbox\" id=\"selectCheckboxId{{dataItem[keySelectBy]}}\" [(ngModel)]=\"checkboxOnly\"\n\t\t\t\t\t*ngIf=\"dataItem.KiemTraBHYTXacNhan === true\"\n\t\t\t\t\t[style.display]=\"dataItem.LoaiNhom == 6 ? 'none' : 'block'\" [kendoGridSelectionCheckbox]=\"rowIndex\"\n\t\t\t\t\t[checked]=\"dataItem.CheckedDefault\"\n\t\t\t\t\t(change)=\"onSelectChangeCheckbox($event,dataItem[keySelectBy])\" />\n\t\t\t\t<label class=\"k-checkbox-label\" for=\"selectCheckboxId{{dataItem[keySelectBy]}}\"\n\t\t\t\t\t[style.display]=\"dataItem.LoaiNhom == 6 ? 'none' : 'block'\"></label>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"dataItem.DuocHuongBHYT === false\">\n\t\t\t\t<input class=\"k-checkbox\" id=\"selectCheckboxId{{dataItem[keySelectBy]}}\" [(ngModel)]=\"checkboxOnly\"\n\t\t\t\t\t[style.display]=\"dataItem.LoaiNhom == 6 ? 'none' : 'block'\" [kendoGridSelectionCheckbox]=\"rowIndex\"\n\t\t\t\t\t[checked]=\"dataItem.CheckedDefault\"\n\t\t\t\t\t(change)=\"onSelectChangeCheckbox($event,dataItem[keySelectBy])\" />\n\t\t\t\t<label class=\"k-checkbox-label\" for=\"selectCheckboxId{{dataItem[keySelectBy]}}\"\n\t\t\t\t\t[style.display]=\"dataItem.LoaiNhom == 6 ? 'none' : 'block'\"></label>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-checkbox-column>\n\t<kendo-grid-column field=\"\" title=\"#\" width=\"15\" [style]=\"{'text-align': 'center'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"> {{rowIndex + 1}} </ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"Ma\" title=\"Mã\" width=\"50\" [style]=\"{'text-align': 'center'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<span class=\"reverse-ellipsis r\" title=\"{{dataItem.Ma}}\"> {{dataItem.Ma}} </span>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"Nhom\" title=\"Nhóm\" width=\"60\" [hidden]=\"true\" [style]=\"{'text-align': 'center'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\" class=\"k-grouping-row p\">\n\t\t<ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\">\n\t\t\t<app-checkbox id=\"nhomThuoc_{{group.items[0].Id}}\" value=\"true\" label=\"\" [(model)]=\"duyetBaoHiemYT\"\n\t\t\t\t[disabled]=\"disabledDuyetBaoHiemYT\" *ngIf=\"group.items[0].LoaiNhom == 6\"\n\t\t\t\t(modelChange)=\"ChangCheckboxToaThuoc( $event , group.items)\"> </app-checkbox>\n\n\t\t\t{{value}}\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"TenDichVu\" title=\"Tên Dịch Vụ\" width=\"100\" [style]=\"{'text-align': 'left'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridFilterCellTemplate let-filter let-column=\"column\">\n\t\t\t<kendo-grid-string-filter-cell [column]=\"column\" [filter]=\"filter\">\n\t\t\t</kendo-grid-string-filter-cell>\n\t\t</ng-template>\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center end\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<p class=\"reverse-ellipsis r\" title=\"{{dataItem.TenDichVu}}\">{{dataItem.TenDichVu}}</p>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<div class=\"text-center\" style=\"font-weight: bold;color:#000;\" kendoTooltip title=\"Tổng cộng DV đang chọn\">\n\t\t\t\tTổng cộng:</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"LoaiGia\" title=\"Loại Giá\" width=\"60\" [style]=\"{'text-align': 'left'}\"\n\t\t[headerStyle]=\"{'text-align': 'left'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"Soluong\" title=\"Số Lượng\" width=\"50\" [style]=\"{'text-align': 'right'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"DonGia\" title=\"Đơn Giá\" width=\"100\" [style]=\"{'text-align': 'center'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.DonGia | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"ThanhTien\" title=\"Thành Tiền\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float: right;\">{{total('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"BHYTThanhToan\" title=\"BHYT TT\" width=\"100\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">\n\t\t\t\t<div *ngIf=\"dataItem.DuocHuongBHYT !== true\">{{ dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t\t<div *ngIf=\"dataItem.DuocHuongBHYT === true\">\n\t\t\t\t\t{{ dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t<ic-icon *ngIf=\"dataItem.KiemTraBHYTXacNhan===true\" [icon]=\"icCheck\"\n\t\t\t\t\t\tclass=\"size-icon-duoc-bhyt mr-3\" inline=\"true\"> </ic-icon>\n\t\t\t\t\t<ic-icon *ngIf=\"dataItem.KiemTraBHYTXacNhan !==true\" [icon]=\"icCheck\"\n\t\t\t\t\t\tclass=\"size-icon-khong-bhyt mr-3\" inline=\"true\"> </ic-icon>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float: right\">{{total('BHYTThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column-group [style]=\"{'text-align': 'center'}\" *ngFor=\"let col of danhSachCongNoChoThus\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<div>\n\t\t\t<ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n\t\t\t\t<div class=\"text-center\">Công nợ</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t\t<kendo-grid-column *ngFor=\"let col1 of col.CongNoChoThus\" width=\"100\" [style]=\"{'text-align': 'center'}\"\n\t\t\ttitle=\"{{col1.TenCongTy}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\"\n\t\t\t\t\tfxLayoutAlign=\"space-between\"\n\t\t\t\t\t*ngIf=\"dataItem.DanhSachCongNoChoThus[col1.ViTri].SoTienCongNoChoThu!=undefined\">\n\t\t\t\t\t<app-textboxnumeric class=\"no-label\" [step]=\"100\" decimals=\"2\" [format]=\"format\" min=\"0.00\"\n\t\t\t\t\t\t[(model)]=\"dataItem.DanhSachCongNoChoThus[col1.ViTri].SoTienCongNoChoThu\"\n\t\t\t\t\t\t(modelChange)=\"modelChangeCongNo($event , dataItem ,col1.ViTri)\"\n\t\t\t\t\t\t[disabled]=\"!dataItem.CheckedDefault\">\n\t\t\t\t\t</app-textboxnumeric>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t\t<div class=\"float_right\">{{totalCongno( col1.CongTyBaoHiemTuNhanId ,group) | number:'0.2-2':'vi-VN'}}\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t\t<span class=\"float_right\">{{totalCongnoFooter( col1.CongTyBaoHiemTuNhanId) |\n\t\t\t\t\tnumber:'0.2-2':'vi-VN'}}</span>\n\t\t\t</ng-template>\n\t\t</kendo-grid-column>\n\t</kendo-grid-column-group>\n\t<kendo-grid-column field=\"SoTienMG\" title=\"Số tiền MG\" width=\"130\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n\t\t\tSố tiền MG\n\t\t\t<mat-icon style=\"margin-top: 10px;cursor: pointer;\" [icIcon]=\"icRoundEdit\" (click)=\"apDungMiemGiamThem()\">\n\t\t\t</mat-icon>\n\t\t</ng-template>\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">\n\t\t\t\t<div style=\"cursor: pointer;\">\n\t\t\t\t\t{{ dataItem.SoTienMG | number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t<ic-icon [icon]=\"icRoundEdit\" class=\"mr-3\" inline=\"true\"\n\t\t\t\t\t\t(click)=\"apDungMiemGiamChoTungDichVu(dataItem)\"> </ic-icon>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div style=\"margin-right: 28px;\" class=\"float_right\">{{aggregates.SoTienMG.sum | number:'0.2-2':'vi-VN'}}\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<span style=\"margin-right: 28px;\" class=\"float_right\">{{total('SoTienMG') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"DaThanhToan\" title=\"Đã TT\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.DaThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.DaThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<span style=\"float: right\">{{total('DaThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"BNConPhaiThanhToan\" title=\"BN còn phải TT\" width=\"90\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div *ngIf=\"dataItem.CapNhatThanhToan == true || dataItem.BNConPhaiThanhToan >= 0\" class=\"float_right\">{{\n\t\t\t\tdataItem.BNConPhaiThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t\t<div *ngIf=\"dataItem.CapNhatThanhToan == false && dataItem.BNConPhaiThanhToan < 0\"\n\t\t\t\tstyle=\"color:red;float: right\">\n\t\t\t\t{{ dataItem.BNConPhaiThanhToan | number:'0.2-2':'vi-VN'}}\n\t\t\t\t<mat-icon [icIcon]=\"icInfo\" kendoTooltip title=\"Số tiền bạn nhập không đúng.\"> </mat-icon>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.BNConPhaiThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<span style=\"color:red;float: right\">{{total('BNConPhaiThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"NoiThucHien\" title=\"Nơi thực hiện\" width=\"80\" [style]=\"{'text-align': 'left'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<span class=\"reverse-ellipsis r\" title=\"{{dataItem.NoiThucHien}}\"> {{dataItem.NoiThucHien}} </span>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"ThoiDiemChiDinhStr\" title=\"Thời điểm chỉ định\" width=\"80\" [style]=\"{'text-align': 'left'}\"\n\t\t[headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<span class=\"reverse-ellipsis r\" title=\"{{dataItem.ThoiDiemChiDinhStr}}\">\n\t\t\t\t\t{{dataItem.ThoiDiemChiDinhStr}} </span>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n\t\tdetailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\"> </kendo-grid-messages>\n</kendo-grid>\n\n<div class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n\t<div style=\"float: left;\">\n\t\t<button (click)=\"BackToList()\" type=\"button\" mat-button class=\"mr-2\">Quay lại</button>\n\t</div>\n\t<button type=\"button\" *ngIf=\"gridData != undefined && gridData != null && gridData.data.length > 0\"\n\t\tmat-raised-button (click)=\"xemTruocChiPhi()\" title=\"Bảng kê chi phí\" color=\"primary\" class=\"mr-2\">Bảng kê chi\n\t\tphí</button>\n\t<button type=\"button\" *ngIf=\"gridData != undefined && gridData != null && gridData.data.length > 0\"\n\t\tmat-raised-button (click)=\"luuTamChiPhiNgoaitru()\" title=\"Lưu tạm chi phí\" color=\"primary\">Lưu tạm chi\n\t\tphí</button>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<kendo-grid [data]=\"gridDataDaThu\" [resizable]=\"true\" [selectable]=\"{enabled: true, checkboxOnly: true}\" class=\"grid-custom\" id=\"danhSachDaThuTienGrid\" height=\"500\">\n\t<kendo-grid-column field=\"\" title=\"\" width=\"25\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"\" title=\"#\" width=\"15\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"> {{rowIndex + 1}} </ng-template>\n\t</kendo-grid-column>\n\t<!-- <kendo-grid-column field=\"TrangThai\" title=\"Trạng thái\" width=\"60\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<span\n\t\t\t\tkendoTooltip\n\t\t\t\ttitle=\"{{dataItem.TrangThai}}\"\n\t\t\t\t[ngClass]=\"{'blackText': (dataItem.TrangThai == 'Chưa khám' || dataItem.TrangThai == 'Chưa thực hiện' ), \n                            'orangeText': (dataItem.TrangThai == 'Đang khám' \n                            || dataItem.TrangThai == 'Đang làm chỉ định'\n                            || dataItem.TrangThai == 'Đang đợi kết luận'||dataItem.TrangThai == 'Đang thực hiện'),\n                            'greenText': dataItem.TrangThai == 'Đã khám' || dataItem.TrangThai == 'Đã thực hiện'}\">\n\t\t\t\t{{dataItem.TrangThai}}\n\t\t\t</span>\n\t\t</ng-template>\n\t</kendo-grid-column> -->\n\t<kendo-grid-column field=\"Ma\" title=\"Mã\" width=\"50\" [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<span kendoTooltip title=\"{{dataItem.Ma}}\"> {{dataItem.Ma}} </span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"Nhom\" title=\"Nhóm\" width=\"50\" [hidden]=\"true\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\" class=\"k-grouping-row p\">\n\t\t<ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"> {{value}} </ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"TenDichVu\" title=\"Tên Dịch Vụ\" width=\"100\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<span kendoTooltip title=\"{{dataItem.TenDichVu}}\"> {{dataItem.TenDichVu}} </span>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<div class=\"text-center\" style=\"font-weight: bold;color:#000;\" kendoTooltip title=\"Tổng cộng DV đang chọn\">Tổng cộng:</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"LoaiGia\" title=\"Loại Giá\" width=\"30\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"Soluong\" title=\"Số Lượng\" width=\"30\" [style]=\"{'text-align': 'right'}\" [headerStyle]=\"{'text-align': 'center'}\"> </kendo-grid-column>\n\t<kendo-grid-column field=\"DonGia\" title=\"Đơn Giá\" width=\"90\" [style]=\"{'text-align': 'right'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.DonGia | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"ThanhTien\" title=\"Thành Tiền\" width=\"100\" [headerStyle]=\"{'text-align': 'right'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span class=\"float_right\">{{total('ThanhTien') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"BHYTThanhToan\" title=\"BHYT TT\" width=\"100\" [style]=\"{'text-align': 'right'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.BHYTThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.BHYTThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: right\">\n\t\t\t<span style=\"float: right;\">{{total('BHYTThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column width=\"90\" [style]=\"{'text-align': 'right'}\" title=\"Tổng công nợ\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.TongCongNo | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.TongCongNo.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float:right;\">{{total('TongCongNo') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"SoTienMG\" title=\"Số tiền MG\" width=\"120\" [style]=\"{'text-align': 'right'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div class=\"float_right\">\n\t\t\t\t<div inline=\"true\">\n\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t\t\t<a *ngIf=\"dataItem.SoTienMG > 0\" class=\"reverse-ellipsis r\" title=\"Xem thông tin miễm giảm\" (click)=\"ViewThongTinMG(dataItem)\">{{ dataItem.SoTienMG | number:'0.2-2':'vi-VN'}}</a>\n\t\t\t\t\t\t<span *ngIf=\"dataItem.SoTienMG === 0\">{{ dataItem.SoTienMG | number:'0.2-2':'vi-VN'}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.SoTienMG.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\" style=\"text-align: center\">\n\t\t\t<span style=\"float:right;\">{{total('SoTienMG') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"DaThanhToan\" title=\"Đã TT\" width=\"100\" [style]=\"{'text-align': 'right'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div class=\"float_right\">{{ dataItem.DaThanhToan | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridGroupFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n\t\t\t<div class=\"float_right\">{{aggregates.DaThanhToan.sum | number:'0.2-2':'vi-VN'}}</div>\n\t\t</ng-template>\n\t\t<ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n\t\t\t<span style=\"float: right;\">{{total('DaThanhToan') | number:'0.2-2':'vi-VN'}}</span>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"NoiThucHien\" title=\"Nơi thực hiện\" width=\"80\" [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem=\"dataItem\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-2\" kendoTooltip>\n\t\t\t\t<span class=\"reverse-ellipsis r\" title=\"{{dataItem.NoiThucHien}}\"> {{dataItem.NoiThucHien}} </span>\n\t\t\t</div>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-column field=\"\" title=\"\" width=\"90\" [headerStyle]=\"{'text-align': 'center'}\">\n\t\t<ng-template kendoGridCellTemplate let-dataItem>\n\t\t\t<button *ngIf=\"!dataItem.DaHoanThu && dataItem.DuocHoanThu\" type=\"button\" mat-raised-button (click)=\"hoanThu(dataItem)\" color=\"primary\">Hoàn thu</button>\n\t\t</ng-template>\n\t</kendo-grid-column>\n\t<kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\"> </kendo-grid-messages>\n</kendo-grid>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n\t<vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n\t\t<div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n\t\t\t<vex-breadcrumbs [crumbs]=\"[\n\t\t\t\t {Title:'Thu Ngân',Path:''},\n\t\t\t\t {Title:'Viện phí ngoại trú',Path:''},\n                 {Title:'DS Đã Thu Dịch Vụ',Path:'/danh-sach-thu-dich-vu', queryParams: {loaiThanhToan : typeThanhToan}, Active:true}             \n            ]\">\n\t\t\t</vex-breadcrumbs>\n\t\t\t<app-hot-key [keys]=\"[{Key:'Esc',Description:'Quay lại',End:true}]\"> </app-hot-key>\n\t\t</div>\n\t</vex-page-layout-header>\n\n\t<vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n\t\t<div class=\"-mt-16\">\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div class=\"card\" fxFlex=\"100%\">\n\t\t\t\t\t<div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin hành chính</legend>\n\t\t\t\t\t\t\t\t<div class=\" mt-1\">\n\t\t\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tMã TN:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.MaYeuCauTiepNhan}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tMã NB:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.MaBN}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tHọ Tên:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.HoTen}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNăm Sinh:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.NamSinh}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tĐịa chỉ:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.DiaChi}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.DiaChi === ''\"> Không có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tSố điện thoại:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.SoDienThoai}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.SoDienThoai === null\"> Không có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tEmail:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.Email}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.Email === null\"> Không có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin bảo hiểm y tế</legend>\n\t\t\t\t\t\t\t\t<div class=\" mt-1\">\n\t\t\t\t\t\t\t\t\t<!-- Thông tin bảo hiểm y tế -->\n\t\t\t\t\t\t\t\t\t<ul class=\"inline\" *ngIf=\"thongTinBenhNhan.CoBHYT ===  true\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tSố thẻ:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTMaSoThe}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNgày hiệu lực:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.NgayHieuLucStr}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNgày hết hạn:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.NgayHetHanStr}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tNơi đăng ký khám BH:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTDiaChi}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tMức hưởng:\n\t\t\t\t\t\t\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTMucHuong}}% </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tTuyến khám:\n\t\t\t\t\t\t\t\t\t\t\t<strong class=\"color-green\"> {{thongTinBenhNhan.TuyenKham}} </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tGiấy chuyển viện:\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"color-green\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t(click)=\"xemTaiLieu(thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien)\">{{thongTinBenhNhan.TenGiayChuyenVien}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien === null\">\n\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\tGiấy miễn cùng chi trả:\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"xemTaiLieu(thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra)\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"color-green\">{{thongTinBenhNhan.TenBHYTgiayMienCungChiTra}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra === null\">\n\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"!(thongTinBenhNhan.CoBHYT ===  true)\">(Không có)</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin bảo hiểm tư nhân</legend>\n\t\t\t\t\t\t\t\t<div class=\" mt-1\">\n\t\t\t\t\t\t\t\t\t<app-grid [gridColumns]=\"gridBaoHiemTNs\" [useAddDeault]=\"false\"\n\t\t\t\t\t\t\t\t\t\tclass=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n\t\t\t\t\t\t\t\t\t\t[checkboxAble]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\"\n\t\t\t\t\t\t\t\t\t\t[gridDataSource]=\"dataSourceDanhSachBHTN\" style=\"width: 1px;\" [pageable]=\"false\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"kiemTraThongTinBaoHiemTN === true\"> </app-grid>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"kiemTraThongTinBaoHiemTN === false\">(Không có)</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t<fieldset fxFlex=\"49.5%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<legend>Thông tin miễn giảm</legend>\n\t\t\t\t\t\t\t\t<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\"\n\t\t\t\t\t\t\t\t\tfxLayoutGap.lt-sm=\"0\">\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"flagShowDoiTuongUuDai==true\" fxFlex=\"100%\">\n\t\t\t\t\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background: rgba(0, 0, 0, 0.04);padding: 7px 10px;border-bottom: 1px solid rgba(0,0,0,0.4);\">\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\tĐối tượng ưu đãi:\n\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.DoiTuongUuDai !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{thongTinMienGiamTheoDoiTuongUuDai.DoiTuongUuDai}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.DoiTuongUuDai === null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\tCông ty ưu đãi:\n\t\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.CongTyUudai !== null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{thongTinMienGiamTheoDoiTuongUuDai.CongTyUudai}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinMienGiamTheoDoiTuongUuDai.CongTyUudai === null\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tKhông có </strong>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"40%\">\n\t\t\t\t\t\t\t\t\t\t<table width=\"100%\">\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"background:rgba(0, 0, 0, 0.04);padding:5px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>Voucher</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td style=\"background:rgba(0, 0, 0, 0.04);\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div style=\"margin-top: -9px;position: relative;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tfxLayoutAlign=\"start center\" kendoTooltip>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<kendo-multiselect #multiselect [data]=\"listVoucherItem\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"value\" [filterable]=\"true\" [disabled]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</kendo-multiselect>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button color=\"primary\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: absolute;right: 3px;top: -10px;\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tkendoTooltip title=\"Quét mã vạch thẻ\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttitle=\"Phím tắt: Ctrl + Q\" [disabled]=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div fxFlex=\"auto\">\n\t\t\t\t\t\t\t\t\t\t<app-upload id=\"Upload\" label=\"Giấy miễn giảm đính kèm (nếu có)\"\n\t\t\t\t\t\t\t\t\t\t\t[model]=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemGiam\"\n\t\t\t\t\t\t\t\t\t\t\t(uploadFileDone)=\"uploadFileDone($event)\" [disabled]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[allowedExtensions]=\"allowedExtensions\"\n\t\t\t\t\t\t\t\t\t\t\t[validationerror]=\"'GiayMiemGiam' | validationerror:thuNganValidationErrors\">\n\t\t\t\t\t\t\t\t\t\t</app-upload>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<div fxFlex=\"100%\" class=\"mb-3\">\n\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t<legend>Thông tin thu chi</legend>\n\t\t\t\t\t\t\t\t\t<a *ngIf=\"ktSuDungGoi != undefined && ktSuDungGoi != null\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"chiTietGoiMarketing()\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"z-index: 9999;margin-left: 13px; text-decoration: underline; color: blue\">Chi\n\t\t\t\t\t\t\t\t\t\ttiết gói\n\t\t\t\t\t\t\t\t\t\tmarketing</a>\n\t\t\t\t\t\t\t\t\t<kendo-splitter>\n\t\t\t\t\t\t\t\t\t\t<kendo-splitter-pane style=\"overflow:initial;\">\n\t\t\t\t\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"position: absolute;right: 0;\"><strong> Tạm ứng: </strong>\n\t\t\t\t\t\t\t\t\t\t\t\t<strong class=\"color-green\">{{0 | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<app-thong-tin-phieu-thu-ngoai-tru\n\t\t\t\t\t\t\t\t\t\t\t\t(loadingCtThanhCong)=\"loadingCtThanhCong($event)\"\n\t\t\t\t\t\t\t\t\t\t\t\t(huyThanhCong)=\"huyThanhCong($event)\">\n\t\t\t\t\t\t\t\t\t\t\t</app-thong-tin-phieu-thu-ngoai-tru>\n\t\t\t\t\t\t\t\t\t\t</kendo-splitter-pane>\n\t\t\t\t\t\t\t\t\t</kendo-splitter>\n\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<ng-template #actionTemplateSTCongNo let-dataItem let-rowIndex=\"rowIndex\">\n\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"2px\">\n\t\t\t\t<app-textboxnumeric class=\"no-label p-0\" label=\" \" [step]=\"100\" fxFlex=\"50%\" [disabled]=\"true\"\n\t\t\t\t\t[(model)]=\"dataItem.SoTienCongNo\" [isFormatCurrenly]=\"true\" [spinners]=\"false\">\n\t\t\t\t</app-textboxnumeric>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #actionTemplateSubmitCongNo let-dataItem let-rowIndex=\"rowIndex\"> </ng-template>\n\t</vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n\t<fieldset fxFlex=\"100%\" class=\"mb-3\">\n\t\t<legend>Thông tin hành chính</legend>\n\t\t<div class=\" mt-1\">\n\t\t\t<ul class=\"inline\">\n\t\t\t\t<li>\n\t\t\t\t\tMã TN:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.MaYeuCauTiepNhan}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tMã NB:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.MaBN}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tHọ Tên:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.HoTen}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tNăm Sinh:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.NamSinh}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tĐịa chỉ:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.DiaChi}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tSố điện thoại:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.SoDienThoai}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tEmail:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.Email}} </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</fieldset>\n\t<fieldset fxFlex=\"100%\" class=\"mb-3\" *ngIf=\"thongTinBenhNhan.CoBHYT ===  true\">\n\t\t<legend>Thông tin BHYT</legend>\n\t\t<div class=\" mt-1\">\n\t\t\t<ul class=\"inline\">\n\t\t\t\t<li>\n\t\t\t\t\tSố thẻ:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTMaSoThe}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tNgày hiệu lực:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.NgayHieuLucStr}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tNgày hết hạn:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.NgayHetHanStr}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tNơi đăng ký khám BH:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTDiaChi}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tMức hưởng:\n\t\t\t\t\t<strong> {{thongTinBenhNhan.BHYTMucHuong}}% </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tTuyến khám:\n\t\t\t\t\t<strong class=\"color-green\"> {{thongTinBenhNhan.TuyenKham}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tGiấy chuyển viện:\n\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien !== null\">\n\t\t\t\t\t\t<a class=\"color-green\" (click)=\"xemTaiLieu(thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien)\">{{thongTinBenhNhan.TenGiayChuyenVien}}</a>\n\t\t\t\t\t</strong>\n\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayChuyenVien === null\"> Không có </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tGiấy miễn cùng chi trả:\n\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra !== null\">\n\t\t\t\t\t\t<a (click)=\"xemTaiLieu(thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra)\" class=\"color-green\">{{thongTinBenhNhan.TenBHYTgiayMienCungChiTra}}</a>\n\t\t\t\t\t</strong>\n\t\t\t\t\t<strong *ngIf=\"thongTinBenhNhan.TaiLieuDinhKemGiayMiemCungChiTra === null\"> Không có </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</fieldset>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.html": 
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.html ***!
          \***********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"phieu-thu\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\t<fieldset fxFlex=\"100%\" style=\"padding: 0 !important\">\n\t\t<div class=\"mt-1\" fxFlex=\"100%\">\n\t\t\t<ul fxFlex=\"100%\">\n\t\t\t\t<li>\n\t\t\t\t\t<app-combobox id=\"ten-pttt\" fxFlex=\"47%\" fxFlex.sm=\"47%\" [data]=\"dataSoPhieus\" label=\"Số phiếu\"\n\t\t\t\t\t\t(selectionChange)=\"selectionChangeSoPhieu($event)\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n\t\t\t\t\t\t[(model)]=\"thongTinSoPhieuDaThu.SoPhieuId\" [modelText]=\"thongTinSoPhieuDaThu.TenSoPhieu\"\n\t\t\t\t\t\t[template]=\"soPhieuTemplate\" [templateHeader]=\"soPhieuTemplateHeader\">\n\t\t\t\t\t\t<ng-template #soPhieuTemplateHeader let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\" class=\"text-center\">Số phiếu</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\" class=\"text-center\">Tình trạng</th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\" class=\"text-center\">Trong gói </th>\n\t\t\t\t\t\t\t\t\t<th width=\"15%\" class=\"text-center\">Loại tạm ứng</th>\n\t\t\t\t\t\t\t\t\t<th width=\"17%\" class=\"text-center\">Ngày phát sinh</th>\n\t\t\t\t\t\t\t\t\t<th width=\"17%\" class=\"text-center\">Người tạo</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t<ng-template #soPhieuTemplate let-dataItem>\n\t\t\t\t\t\t\t<table width=\"100%\" class=\"table-combobox\">\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"15%\">{{dataItem.DisplayName}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"15%\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"dataItem.TinhTrang === trangThaiThuTienBenhNhan.Huy \">\n\t\t\t\t\t\t\t\t\t\t<strong style=\"color: red\"> {{dataItem.TinhTrang}}</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"15%\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"dataItem.TinhTrang !== trangThaiThuTienBenhNhan.Huy \">\n\t\t\t\t\t\t\t\t\t\t<strong style=\"color: green\"> {{dataItem.TinhTrang}}</strong>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"15%\">\n\t\t\t\t\t\t\t\t\t\t<app-checkbox *ngIf=\"dataItem.TrongGoi\" value=\"true\" [disabled]=\"true\"\n\t\t\t\t\t\t\t\t\t\t\t[model]=\"dataItem.TrongGoi\">\n\t\t\t\t\t\t\t\t\t\t</app-checkbox>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"15%\">{{dataItem.LoaiPhieu}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"17%\">{{dataItem.NgayLapStr}}</td>\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\" width=\"17%\">{{dataItem.NguoiLap}}</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</app-combobox>\n\t\t\t\t\t<fieldset fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"ml-3\" style=\"padding-top: 43px\"\n\t\t\t\t\t\t*ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\t\t<div class=\"mt-1\">\n\t\t\t\t\t\t\t<ul class=\"inline\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tLoại phiếu:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.LoaiPhieu}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\tTình trạng:\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: red\"> {{thongTinSoPhieuDaThu.TinhTrang}} </strong>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"color: green\"> {{thongTinSoPhieuDaThu.TinhTrang}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null && \n                                    (thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng)\">\n\t\t\t\t\t\t\t\t\t<span>Đã hoàn ứng: </span>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.DaHoanUng\"> Rồi </strong>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"thongTinSoPhieuDaThu.DaHoanUng\">Phiếu hoàn ứng: </span>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.DaHoanUng\">\n\t\t\t\t\t\t\t\t\t\t{{thongTinSoPhieuDaThu.PhieuHoanUng}} </strong>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"!thongTinSoPhieuDaThu.DaHoanUng\"> Chưa </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy\">\n\t\t\t\t\t\t\t\t\tNgười hủy:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NhanVienHuyPhieu}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy\">\n\t\t\t\t\t\t\t\t\tNgày hủy:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayHuyStr}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null \n                                && ((thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi\n                                || thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng)\n                                && thongTinSoPhieuDaThu.TinhTrang === trangThaiThuTienBenhNhan.Huy)\">\n\t\t\t\t\t\t\t\t\t<span>Thu hồi: </span>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"thongTinSoPhieuDaThu.DaThuHoi\"> Rồi </strong>\n\t\t\t\t\t\t\t\t\t<strong *ngIf=\"!thongTinSoPhieuDaThu.DaThuHoi\">\n\t\t\t\t\t\t\t\t\t\tChưa\n\t\t\t\t\t\t\t\t\t\t<mat-icon [icIcon]=\"icEdit\" style=\"transform: scale(0.8)\"\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"huyPhieuThu(thongTinSoPhieuDaThu ,true)\"> </mat-icon>\n\t\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.DaThuHoi\">\n\t\t\t\t\t\t\t\t\tNgười thu hồi:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NguoiThuHoi}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.DaThuHoi\">\n\t\t\t\t\t\t\t\t\tNgày thu:\n\t\t\t\t\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayThuStr}} </strong>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</fieldset>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</fieldset>\n\t<fieldset fxFlex=\"100%\" class=\"mb-1\">\n\t\t<div class=\"mt-1\">\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng || \n            thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.HoanUng\">\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\tSố tiền:\n\t\t\t\t\t<strong style=\"color: red\"> {{thongTinSoPhieuDaThu.SoTien| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\tHình thức thanh toán:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.HinhThucThanhToan}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.TienMat != null\">\n\t\t\t\t\tTiền mặt:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.TienMat | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.ChuyenKhoan != null\">\n\t\t\t\t\tChuyển khoản:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.ChuyenKhoan | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.CongNo != null\">\n\t\t\t\t\tCông nợ:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.CongNo | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null && \n            thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi || \n            thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.PhieuChi\">\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\tTổng số tiền:\n\t\t\t\t\t<strong style=\"color: red\"> {{thongTinSoPhieuDaThu.TongChiPhi | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tBHYT TT:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.BHYTThanhToan | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tMiễm giảm:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.MienGiam | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\tBệnh nhân TT:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.BenhNhanThanhToan | number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t(<span>Tiền mặt: </span> <strong> {{thongTinSoPhieuDaThu.TienMat| number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t</strong>\n\t\t\t\t\t<span>Chuyển khoản: </span> <strong> {{thongTinSoPhieuDaThu.ChuyenKhoan| number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t</strong> <span>POS: </span> <strong> {{thongTinSoPhieuDaThu.Pos| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t<span>Công nợ: </span> <strong> {{thongTinSoPhieuDaThu.CongNo| number:'0.2-2':'vi-VN'}} </strong>)\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"mt-1\">\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null && \n            thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi || \n            thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.PhieuChi\">\n\t\t\t\t<li>\n\t\t\t\t\tTạm ứng:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.TamUng| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t\t<span *ngIf=\"thongTinSoPhieuDaThu.LaPhieuChi !== true\"> => Số\n\t\t\t\t\t\ttiền phải thu: </span>\n\t\t\t\t\t<span *ngIf=\"thongTinSoPhieuDaThu.LaPhieuChi === true\"> => Số tiền phải trả: </span>\n\t\t\t\t\t<strong style=\"color: red\"> {{thongTinSoPhieuDaThu.SoTienPhaiThuHoacChi| number:'0.2-2':'vi-VN'}}\n\t\t\t\t\t</strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NgayThuStr != null\">\n\t\t\t\t\tNgày thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayThuStr}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NoiDungThu != null\">\n\t\t\t\t\tNội dung thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NoiDungThu}} </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng || \n                    thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.HoanUng\">\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NgayThuStr != null\">\n\t\t\t\t\tNgày thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayThuStr}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NoiDungThu != null\">\n\t\t\t\t\tNội dung thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NoiDungThu}} </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"mt-1\">\n\t\t\t<ul class=\"inline\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.HoanThu\">\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu != null\">\n\t\t\t\t\tSố tiền:\n\t\t\t\t\t<strong style=\"color: red\"> {{thongTinSoPhieuDaThu.SoTien| number:'0.2-2':'vi-VN'}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NgayThuStr != null\">\n\t\t\t\t\tNgày hoàn thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NgayThuStr}} </strong>\n\t\t\t\t</li>\n\t\t\t\t<li *ngIf=\"thongTinSoPhieuDaThu.NoiDungThu != null\">\n\t\t\t\t\tNội dung hoàn thu:\n\t\t\t\t\t<strong> {{thongTinSoPhieuDaThu.NoiDungThu}} </strong>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</fieldset>\n\t<fieldset fxFlex=\"100%\" class=\"mb-1\" *ngIf=\"thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi || \n        thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.PhieuChi\">\n\t\t<app-ds-da-thu-tien (afterChanged)=\"dataSourceChanged=false\" [dataSourceChanged]=\"dataSourceChanged\"\n\t\t\t(loadingThanhCong)=\"loadingThanhCong($event)\"\n\t\t\t[(danhSachChiPhiKhamChuaBenh)]=\"thongTinSoPhieuDaThu.ChiPhiKhamChuaBenhVos\"> </app-ds-da-thu-tien>\n\t</fieldset>\n</div>\n<div *ngIf=\"thongTinSoPhieuDaThu.SoPhieuId != null\" class=\"sticky-button-action py-3 text-right\" kendoTooltip>\n\t<div style=\"float: left\">\n\t\t<button (click)=\"BackToList()\" type=\"button\" mat-button class=\"mr-2\">Quay lại</button>\n\t\t<strong style=\"color: red; margin-left: 50px;\"> Hoàn thu để trả lại tiền người bệnh </strong>\n\t</div>\n\t<button\n\t\t*ngIf=\"(thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi ||\n\t\t thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.PhieuChi) && thongTinSoPhieuDaThu.TinhTrang == 'Đang hiệu lực'\"\n\t\t(click)=\"bangKeChiPhi(thongTinSoPhieuDaThu)\" color=\"primary\" mat-raised-button class=\"mr-2\">Bảng kê chi\n\t\tphí</button>\n\t<button (click)=\"phieuIn(thongTinSoPhieuDaThu)\" color=\"primary\" mat-raised-button class=\"mr-2\">Phiếu in</button>\n\t<button *ngIf=\"!thongTinSoPhieuDaThu.DaChuyenVoNoiTru && (thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng && \n\t\t   thongTinSoPhieuDaThu.DaHoanUng !== true  &&  thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)\"\n\t\t(click)=\"hoanUngKhongThucHienDV(thongTinSoPhieuDaThu)\" color=\"primary\" mat-raised-button class=\"mr-2\">\n\t\tHoàn ứng\n\t</button>\n\t<button\n\t\t*ngIf=\"!thongTinSoPhieuDaThu.DaChuyenVoNoiTru && (thongTinSoPhieuDaThu.ConHanHuyPhieuThu && thongTinSoPhieuDaThu.CongNo === 0  \n\t  && thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)\"\n\t\t(click)=\"ChuyenQuaTamUng(thongTinSoPhieuDaThu)\" color=\"primary\" mat-raised-button class=\"mr-2\">\n\t\tChuyển tạm ứng\n\t</button>\n\t<button\n\t\t*ngIf=\"!thongTinSoPhieuDaThu.DaChuyenVoNoiTru && ( !thongTinSoPhieuDaThu.ConHanHuyPhieuThu && \n\t\t((thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)\n\t  || (thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.PhieuChi  && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)\n\t  || (thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)))\"\n\t\ttype=\"button\" (click)=\"hoanPhieuThu(thongTinSoPhieuDaThu)\" color=\"warn\" mat-raised-button>\n\t\tHoàn phiếu thu\n\t</button>\n\t<button\n\t\t*ngIf=\"!thongTinSoPhieuDaThu.DaChuyenVoNoiTru && (thongTinSoPhieuDaThu.ConHanHuyPhieuThu && \n\t\t    ((thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTheoChiPhi && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)\n          || (thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.PhieuChi  && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)\n          || (thongTinSoPhieuDaThu.LoaiPhieu === trangThaiThuTienBenhNhan.ThuTamUng && thongTinSoPhieuDaThu.TinhTrang !== trangThaiThuTienBenhNhan.Huy)))\"\n\t\ttype=\"button\" (click)=\"huyPhieuThu(thongTinSoPhieuDaThu, false)\" color=\"warn\" mat-raised-button>\n\t\tHủy phiếu thu\n\t</button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t<div style=\"text-transform: uppercase\">Kết quả phiếu ({{arrFileUrl.length}} file)</div>\n\t<button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n\t\t<mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n\t</button>\n</div>\n<mat-dialog-content style=\"height: 550px\">\n\t<div class=\"container-iframe\">\n\t\t<ng-container [ngSwitch]=\"arrFileUrl.length == 1\">\n\t\t\t<div *ngSwitchCase=\"true\">\n\t\t\t\t<ng-container  *ngFor=\"let item of arrFileUrl, let i = index\">\n\t\t\t\t\t<iframe id=\"{{i}}\" width=\"100%\" height=\"1000px\" frameborder=\"0\" [src]=\"item | safe\"\n\t\t\t\t\t\ttype=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display: none\"\n\t\t\t\t\t\tonload=\"this.style.display = 'block';\"></iframe>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div *ngSwitchDefault>Không có dữ liệu</div>\n\t\t</ng-container>\n\n\t\t<ng-container [ngSwitch]=\"arrFileUrl.length > 1\">\n\t\t\t<div *ngSwitchCase=\"true\">\n\n\t\t\t\t<ng-container  *ngFor=\"let item of arrFileUrl, let i = index\">\n\t\t\t\t\t<iframe id=\"{{i}}\" width=\"100%\" height=\"450px\" frameborder=\"0\" [src]=\"item | safe\"\n\t\t\t\t\t\ttype=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display: none\"\n\t\t\t\t\t\tonload=\"this.style.display = 'block';\"></iframe>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div *ngSwitchDefault>Không có dữ liệu</div>\n\t\t</ng-container>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n\t<button type=\"button\" style=\"margin-left: auto\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\t<button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n\t<button type=\"button\"  *ngIf=\"tamUng === false\" mat-raised-button mat-button (click)=\"ketXuatBangKeChiPhiExcel()\" title=\"xuất excel\" color=\"primary\" class=\"mr-2\">Xuất Excel</button>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\n.red-text {\n  color: red !important;\n}\n\n.green-text {\n  color: green !important;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n\n.text-font-size-tra-bn {\n  color: red;\n  font-weight: 900;\n  font-size: 15px !important;\n}\n\n.text-font-size-thu-tien-bn {\n  color: green;\n  font-weight: 900;\n  font-size: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2NoaS10aWV0LWNhYy1raG9hbi1waGFpLXRodS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRodS1jaGlcXHRodS1jaGktdmllbi1waGlcXG5nb2FpLXRydVxcY2hvLXRodS10aWVuXFxjaGktdGlldC1jYWMta2hvYW4tcGhhaS10aHVcXGNoaS10aWV0LWNhYy1raG9hbi1waGFpLXRodS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2NoaS10aWV0LWNhYy1raG9hbi1waGFpLXRodS9jaGktdGlldC1jYWMta2hvYW4tcGhhaS10aHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3RodS1jaGktdmllbi1waGkvbmdvYWktdHJ1L2Noby10aHUtdGllbi9jaGktdGlldC1jYWMta2hvYW4tcGhhaS10aHUvY2hpLXRpZXQtY2FjLWtob2FuLXBoYWktdGh1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmdyZWVuLXRleHQge1xuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufVxuXG4udGV4dC1mb250LXNpemUtdHJhLWJuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWZvbnQtc2l6ZS10aHUtdGllbi1ibiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59IiwiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmdyZWVuLXRleHQge1xuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufVxuXG4udGV4dC1mb250LXNpemUtdHJhLWJuIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWZvbnQtc2l6ZS10aHUtdGllbi1ibiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: ChiTietCacKhoanPhaiThuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietCacKhoanPhaiThuComponent", function () { return ChiTietCacKhoanPhaiThuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _ds_chua_thu_tien_ds_chua_thu_tien_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ds-chua-thu-tien/ds-chua-thu-tien.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _chi_tiet_thu_tien_tam_ung_chi_tiet_thu_tien_tam_ung_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _common_xac_nhan_phieu_thu_xac_nhan_phieu_thu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component.ts");
            /* harmony import */ var _common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _dich_vu_khuyen_mai_kem_theo_goi_dich_vu_khuyen_mai_kem_theo_goi_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.ts");
            /* harmony import */ var _thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.ts");
            /* harmony import */ var _common_common_pdf_popup_common_pdf_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/common-pdf-popup/common-pdf-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/common-pdf-popup/common-pdf-popup.component.ts");
            /* harmony import */ var _common_common_pdf_popup_ngoai_tru_common_pdf_popup_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/common-pdf-popup-ngoai-tru/common-pdf-popup-ngoai-tru.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/common-pdf-popup-ngoai-tru/common-pdf-popup-ngoai-tru.component.ts");
            var ChiTietCacKhoanPhaiThuComponent = /** @class */ (function () {
                function ChiTietCacKhoanPhaiThuComponent(route, dialog, apiService, router, cdRef, notificationService, authService, baseService) {
                    this.route = route;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.baseService = baseService;
                    this.thongTinBenhNhantam = [];
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["CommonThuTien"]();
                    this.chiTienQuyetToan = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["QuyetToanDichVuTrongGoiVo"]();
                    this.apDungMiemGiam = false;
                    this.thongTinMienGiamTheoDoiTuongUuDai = {};
                    this.thongTinMienGiamVoucher = {};
                    this.thongTinMienGiamThem = {};
                    this.kiemTraThongTinBaoHiemTN = false;
                    this.refreshFlagApDung = false;
                    this.showCanhBaoSoTienNhap = false;
                    this.loaiVoucher = 0;
                    this.listOldVouchers = [];
                    this.checkedMGTGiaTri = true;
                    this.checkedMGTTiLe = false;
                    this.checkHiddenSoTienConLai = false;
                    this.selectMoneyTienBNDua = null;
                    this.selectMoneyTienMat = null;
                    this.selectMoneyTienChuyenKhoan = null;
                    this.selectMoneyTienPos = null;
                    this.radioThuTien = true;
                    this.radioThuTamUng = false;
                    this.radioTraLaiBN = false;
                    this.radioTraNo = false;
                    this.idYeuCauTiepNhan = 0;
                    this.loaiThanhToan = true;
                    this.typeThanhToan = 0;
                    this.setDefeautTienMat = [this.commonThuTien.TienMat];
                    this.hinhThucThanhToan = [
                        { KeyId: this.commonThuTien.TienMat, DisplayName: this.commonThuTien.TienMatText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.ChuyenKhoan, DisplayName: this.commonThuTien.ChuyenKhoanText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.Pos, DisplayName: this.commonThuTien.PosText, Selected: false, Change: false }
                    ];
                    this.allowedExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".pdf", ".PDF", '.xlsx', '.xls'];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.tabIndex = 0;
                    this.selectedValueThuPhi = this.commonThuTien.ThuTien;
                    this.danhsachBHTN = [];
                    this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.validationErrors = [];
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_23__["DocumentType"].ThuNgan;
                    this.soLuongDichVuChuaDuocBHYTXN = 0;
                    this.dataSourceChanged = false;
                    this.dataSourceChangedTamUng = false;
                    this.dataSourceChangedHuyThanhToan = false;
                    this.dataSourceChangedThuNo = false;
                    this.danhSachCongNos = [];
                    this.soDuTaiKhoanBenhNhan = 0;
                    this.soTienQuyBHYTTTTrongGoi = 0;
                    this.soTienConLaiBenhNhan = 0;
                    this.apDungCongNo = false;
                    this.apCapNhatThanhToan = false;
                    this.position = 0;
                    this.flagShowThongTinMienGiam = false;
                    this.flagShowDoiTuongUuDai = false;
                    this.flagEnableVoucher = false;
                    this.flagEnableMGThem = false;
                    this.disabledMGThem = false;
                    this.disabledVoucher = false;
                    this.disabledTiLeMG = true;
                    this.disabledSoTienMG = false;
                    this.flagCheckSeletedTienMat = false;
                    this.flagCheckSeletedChuyenKhoan = false;
                    this.flagCheckSeletedPos = false;
                    this.flagCheckSeletedCongNo = false;
                    this.checkSeletedTienMat = false;
                    this.checkSeletedChuyenKhoan = false;
                    this.checkSeletedPos = false;
                    this.checkSeletedCongNo = false;
                    this.arrayThanhToans = [];
                    this.arrayThanhToanstmp = [];
                    this.isExistFile = false;
                    this.flagApDung = false;
                    this.flagShowDoiTuongUuDaiOrVoucher = false;
                    this.confrim = null;
                    this.standardMG = 0;
                    this.listVouchers = [];
                    this.listTmpVouchers = [];
                    this.tongTienBNThanhToan = 0;
                    this.gridBaoHiemTNs = [];
                    this.isTienBNTraOrTraBN = false;
                    this.tienPhaiTraBenhNhan = 0;
                    this.dsCoDichVuCanThu = false;
                    this.format = 'n2';
                    this.apDungCongNoTrongGoi = false;
                    this.dataSourceChangedTrongGoi = false;
                    this.ktCoPhieuThuCongNo = false;
                    this.danhSachChuaThanhToans = {
                        data: [],
                        SoTienBenhNhan: 0,
                        HoTen: "",
                        SoLuongBYHTChuaXN: 0,
                    };
                    this.danhSachChuaXacNhanBHYT = {
                        data: []
                    };
                    this.ktQTBHYTTheoGoi = false;
                    this.dataSourceDanhSachBHTN = {
                        data: [],
                        total: 0,
                    };
                    this.dataCongNo = this.dataSourceDanhSachBHTN.data;
                    this.taiLieuDinhKemGiayMiemGiamVo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TaiLieuDinhKemGiayMiemGiamVo"]();
                    this.dataSourceDanhSachCongNo = {
                        data: [],
                        total: 0,
                    };
                    this.chuyenVaoNoiTru = false;
                    this.soTienCongNoTam = 0;
                    this.listVoucherItem = [];
                    this.newBarcode = "";
                    this.value = [];
                    this.baseService.controllerName = "ThuNgan";
                }
                ChiTietCacKhoanPhaiThuComponent.prototype.clearRadio = function () {
                    this.radioThuTien = false;
                    this.radioThuTamUng = false;
                    this.radioTraLaiBN = false;
                    this.radioTraNo = false;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.changeValue = function (event) {
                    this.clearRadio();
                    switch (event) {
                        case this.commonThuTien.ThuTien:
                            this.radioThuTien = true;
                            break;
                        case this.commonThuTien.ThuTamUng:
                            this.radioThuTamUng = true;
                            break;
                        case this.commonThuTien.TraLaiBenhNhan:
                            this.radioTraLaiBN = true;
                            break;
                        case this.commonThuTien.BenhNhanTraTien:
                            this.radioTraNo = true;
                            break;
                    }
                    this.selectedValueThuPhi = event;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.ngOnInit = function () {
                    if (window.location.protocol == this.commonThuTien.Http) {
                        this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
                    }
                    else {
                        this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
                    }
                    this.thongTinBenhNhan = {};
                    this.tongTienBNThanhToan = 0;
                    this.selectedValueThuPhi;
                    this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan == 1 ? true : false;
                    this.typeThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
                    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
                    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
                        this.kiemTraDichVuTrongGoiCoBHYT(this.idYeuCauTiepNhan);
                        this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
                        this.kiemTraYeuCauKhamBenhNhapVien();
                        this.GetThongTheVoucher();
                        this.kiemTraDanhSachDaThu();
                        this.kiemTraYeuCauTiepNhanCoKhuyenMai();
                        this.kiemTraSuDungGoi();
                    }
                    //Thông tin bảo hiểm tư nhân
                    this.dataSourceDanhSachBHTN.data = this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
                    this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
                    this.gridBaoHiemTNs = [
                        { Field: "TenCongTy", Title: "Công ty", Width: 200, Sortable: false },
                        // { Field: "MaSoThe", Title: "Số thẻ", Width: 50, Sortable: true, ShowTooltip: true },
                        // { Field: "TuNgayStr", Title: "Từ ngày", Width: 50, Sortable: true, ShowTooltip: true },
                        // { Field: "DenNgayStr", Title: "Đến ngày", Width: 50, Sortable: true, ShowTooltip: true },
                        // { Field: "SoDienThoai", Title: "Số điện thoại", Width: 50, Sortable: true, ShowTooltip: true },
                        // { Field: "DiaChi", Title: "Địa chỉ", Width: 50, Sortable: true, ShowTooltip: true },
                        { Field: "CongNo", Title: "CÔNG NỢ", Width: 150, Sortable: true, Template: this.actionTemplateSTCongNo }
                    ];
                    this.danhSachChuaThanhToan;
                    this.thuTien = {};
                    this.checkSeletedTienMat = true;
                    this.flagCheckSeletedTienMat = true;
                    this.thuTien.NgayThu = new Date();
                    this.thuTien.NoiDungThu = this.commonThuTien.NoiDungThu;
                    this.defeautSoTien();
                    this.changeValue(this.commonThuTien.ThuTien);
                    this.getThongTinMienGiam(this.idYeuCauTiepNhan);
                    this.thuTien.SoTienCongNo = 0;
                    this.chiTienQuyetToan.NgayThu = new Date();
                    this.chiTienQuyetToan.NoiDungThu = this.commonThuTien.NoiDungThuGoi;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onTabSelect = function (event) {
                    if (event.title === "Chưa thu") {
                        this.tabActive = 1;
                        this.titleActive = event.title;
                        if (this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != undefined &&
                            this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != null &&
                            this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length > 0) {
                            this.apDungCongNo = true;
                        }
                    }
                    else if (event.title === "Quyết toán gói marketing") {
                        this.tabActive = 2;
                        this.titleActive = event.title;
                    }
                    else {
                        this.tabActive = 3;
                        this.titleActive = event.title;
                        this.tongTienBNThanhToan = 0;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.tabDaThuHuyPhieu = function (event, type) {
                    this.tabActive = 3;
                    if (type === 1) {
                        this.xemPhieuThuId = this.phieuThuId;
                    }
                    else {
                        this.xemPhieuThuId = this.phieuThuGoiId;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraDichVuTrongGoiCoBHYT = function (id) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].View)) {
                        this.apiService.get("ThuNgan/KiemTraDichVuTrongGoiCoBHYT?yeuCauTiepNhanId=" + id).subscribe(function (response) {
                            if (response != undefined && response != null) {
                                _this.ktQTBHYTTheoGoi = response;
                            }
                        }, function (err) {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) :
                                _this.validationErrors = err.ValidationErrors;
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraDanhSachDaThu = function () {
                    var _this = this;
                    this.showLoadingPopup();
                    this.apiService.get("ThuNgan/DanhSachThuPhiDichVu/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData !== null && resultData.length > 0) {
                            _this.dsCoDichVuCanThu = true;
                            _this.tabActive = 1;
                            _this.titleActive = "Chưa thu";
                        }
                        else if (_this.ktQTBHYTTheoGoi) {
                            _this.tabActive = 2;
                            _this.titleActive = "Quyết toán gói marketing";
                        }
                        else {
                            _this.tabActive = 3;
                            _this.titleActive = "Đã thu";
                        }
                        _this.closeAllDialogs();
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.danhSachGoiCoBHYT = function (dsGoiBHYTs) {
                    this.showLoadingPopup();
                    if (dsGoiBHYTs != undefined && dsGoiBHYTs != null) {
                        var traTienBN = dsGoiBHYTs.reduce(function (sum, item) { return sum + item.SoTienQuyetToan; }, 0);
                        this.tongTienBNThanhToan = Math.round(traTienBN);
                        this.chiTienQuyetToan.TienMat = Math.round(traTienBN);
                    }
                    this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus = dsGoiBHYTs;
                    this.closeAllDialogs();
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.quyetToanDichVuTrongGoiCoBHYT = function () {
                    var _this = this;
                    if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.length > 0) {
                        var kiemTraBHYTXacNhan = this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus
                            .filter(function (dataItem) { return dataItem.DuocHuongBHYT === true && dataItem.KiemTraBHYTXacNhan !== true; });
                        if (kiemTraBHYTXacNhan.length > 0) {
                            this.notificationService.showError("Vui lòng xác nhận BHYT cho gói");
                            return;
                        }
                    }
                    this.showLoadingPopup();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Update)) {
                        var mes = "Ba\u0323n ch\u0103\u0301c ch\u0103\u0301n mu\u00F4\u0301n quy\u00EA\u0301t toa\u0301n cho b\u00EA\u0323nh nh\u00E2n: <span class=\"green-text\"> " + this.thongTinBenhNhan.HoTen.toUpperCase().bold() + " </span>\n\t\t\t           v\u01A1\u0301i c\u00F4\u0301 ti\u00EA\u0300n chi la\u0300 <span class=\"green-text\">" + this.tongTienBNThanhToan.toLocaleString("vi-VI").bold() + "</span> hay kh\u00F4ng ?";
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: mes }
                        }).afterClosed().subscribe(function (result) {
                            if (result === 'Yes') {
                                _this.chiTienQuyetToan.Id = _this.idYeuCauTiepNhan;
                                _this.apiService.put("ThuNgan/QuyetToanDichVuTrongGoiCoBHYT", _this.chiTienQuyetToan).subscribe(function (data) {
                                    _this.dialog.closeAll();
                                    if (data.Error != undefined && data.Error != null) {
                                        _this.notificationService.showError(data.Error);
                                    }
                                    else {
                                        var typeLoai = "";
                                        var phieuHoanUngIds_1 = "";
                                        if (data.PhieuQuyetToanId != undefined && data.PhieuQuyetToanId != null && data.PhieuQuyetToanId != 0) {
                                            typeLoai += "InPhieuThu,InBangKeChiPhiGoiKhamChuaBenhStr";
                                        }
                                        if (data.PhieuHoanUngIds != undefined && data.PhieuHoanUngIds != null && data.PhieuHoanUngIds.length > 0) {
                                            data.PhieuHoanUngIds.forEach(function (element) {
                                                phieuHoanUngIds_1 += element + ",";
                                            });
                                        }
                                        _this.inPhieuPdf(data.PhieuQuyetToanId, 0, typeLoai, phieuHoanUngIds_1);
                                    }
                                }, function (err) {
                                    err.ValidationErrors == null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) :
                                        _this.validationErrors = err.ValidationErrors;
                                    _this.closeAllDialogs();
                                });
                            }
                            else {
                                _this.linkSauKhiThuTien();
                            }
                            _this.closeAllDialogs();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_22__["SystemMessage"].UnAuthorizedMessage);
                        this.closeAllDialogs();
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraYeuCauTiepNhanCoKhuyenMai = function () {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraYeuCauTiepNhanCoKhuyenMai?yeuCauTiepNhanId=" + this.idYeuCauTiepNhan)
                        .subscribe(function (ktKhuyenMaiDichVu) {
                        _this.ktKhuyenMaiDichVu = ktKhuyenMaiDichVu;
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.dichVuKhuyenMai = function () {
                    var _this = this;
                    this.showLoadingPopup();
                    this.dialog.open(_dich_vu_khuyen_mai_kem_theo_goi_dich_vu_khuyen_mai_kem_theo_goi_component__WEBPACK_IMPORTED_MODULE_24__["DichVuKhuyenMaiKemTheoGoi"], {
                        disableClose: true,
                        width: "1400px",
                        data: { benhNhanId: this.thongTinBenhNhan.BenhNhanId, yeuCauTiepNhanId: this.idYeuCauTiepNhan },
                    }).afterClosed().subscribe(function (res) {
                        _this.dataSourceChanged = true;
                        _this.closeAllDialogs();
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraDanhSachXNBHYT = function (data) {
                    if (data != undefined && data != null) {
                        this.danhSachChuaXacNhanBHYT.data = data;
                        if (this.danhSachChuaXacNhanBHYT.data.length > 0) {
                            this.radioThuTamUng = true;
                            this.selectedValueThuPhi = this.commonThuTien.ThuTamUng;
                        }
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.danhSachChuaThanhToan = function (data) {
                    this.danhSachChuaThanhToans.data = data;
                    this.danhSachChuaThanhToans.HoTen = this.thongTinBenhNhan.HoTen;
                    var benhNhanPhaiTra = 0;
                    if (this.danhSachChuaThanhToans != undefined && this.danhSachChuaThanhToans != null) {
                        benhNhanPhaiTra = this.danhSachChuaThanhToans.data.reduce(function (sum, item) { return sum + item.BNConPhaiThanhToan; }, 0);
                    }
                    //Trường hợp tính cho tiền thanh toán người bệnh còn tiền trong số dư tk không?
                    this.tongTienBNThanhToan = Math.round(benhNhanPhaiTra + 0.0000001);
                    //reset số tiền công nợ vì khi mà KH change grid giá trị sẽ khác.
                    this.thuTien.SoTienCongNo = 0;
                    //Kiểm tra số tiền đã có sư thay đổi hay không 
                    //this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
                    //Công thức bind đầu tiên tính xem số tiền trả lại bệnh nhân hay thu tiền bệnh nhân	(run first test)	
                    //tienPhaiTraBenhNhan biến này đang đặt sai tên phải (số tiền cần thu bên nhân)
                    var kiemTraSoTien = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - this.thuTien.SoTienCongNo;
                    //Nếu kiemTraSoTien > 0 số tiền trả lại bệnh nhân ngược lại số tiền thu của bệnh nhân.
                    this.isTienBNTraOrTraBN = kiemTraSoTien <= 0;
                    if (this.isTienBNTraOrTraBN) {
                        this.tienPhaiTraBenhNhan = (this.tongTienBNThanhToan - this.thuTien.SoTienCongNo) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi;
                        this.clearDataSetDefaut((this.tongTienBNThanhToan - this.thuTien.SoTienCongNo) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi);
                    }
                    else {
                        this.tienPhaiTraBenhNhan = kiemTraSoTien;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.loadingThanhCong = function (loading) {
                    if (loading) {
                        this.dialog.closeAll();
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.loadingCTThanhCong = function (loading) {
                    if (loading) {
                        this.dialog.closeAll();
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.afterApDungHuyThanhCong = function (ev) {
                    if (ev) {
                        this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onChangeLoaiMg = function (value) {
                    switch (value) {
                        case 1:
                            this.checkedMGTGiaTri = true;
                            this.checkedMGTTiLe = false;
                            this.disabledSoTienMG = false;
                            this.disabledTiLeMG = true;
                            this.checkHiddenSoTienConLai = false;
                            break;
                        case 2:
                            this.checkedMGTGiaTri = false;
                            this.checkedMGTTiLe = true;
                            this.disabledSoTienMG = true;
                            this.disabledTiLeMG = false;
                            this.checkHiddenSoTienConLai = true;
                            break;
                    }
                    this.thongTinMienGiamThem.SoTienMG = 0;
                    this.thongTinMienGiamThem.TiLeMienGiam = 0;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.huyThanhCong = function (daHuy) {
                    if (daHuy) {
                        this.loaiThanhToan = true;
                        this.apCapNhatThanhToan = true;
                        this.apDungCongNo = true;
                        this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan);
                        this.kiemTraPhieuThuCoBHYT(this.idYeuCauTiepNhan);
                        this.kiemTraPhieuThuGoiCoBHYT(this.idYeuCauTiepNhan);
                        this.dataSourceChangedHuyThanhToan = true;
                        this.dataSourceChanged = true;
                        window.location.href = "/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + this.idYeuCauTiepNhan + "?loaiThanhToan=1";
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.capnhatThanhCong = function (yeuCauTiepNhanId) {
                    this.loaiThanhToan = true;
                    this.apCapNhatThanhToan = true;
                    this.apDungCongNo = true;
                    this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + yeuCauTiepNhanId + "?loaiThanhToan=1");
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.BackToList = function () {
                    var yctn = this.route.snapshot.queryParams.yctn;
                    if (yctn) {
                        this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
                    }
                    else {
                        this.router.navigate(["/danh-sach-thu-dich-vu"], {
                            queryParamsHandling: "preserve",
                        });
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.luuTamChiPhiThanhCongTrongGoi = function (isCapNhatThanhCong) {
                    if (isCapNhatThanhCong) {
                        this.getSoTienQuyBHYTTTTrongGoi(this.idYeuCauTiepNhan);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.getThongTinYeuCauBenhNhan = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var responseThongTinBenhNhan, isDoneBindCongTyBHTN;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.baseService.getById(id).toPromise()];
                                case 1:
                                    responseThongTinBenhNhan = _a.sent();
                                    this.thongTinBenhNhan = responseThongTinBenhNhan;
                                    return [4 /*yield*/, this.loadSoTienQuyBHYTVaTamUng(this.idYeuCauTiepNhan)];
                                case 2:
                                    _a.sent();
                                    if (responseThongTinBenhNhan.CoBHYT === true) {
                                        this.kiemTraPhieuThuCoBHYT(this.idYeuCauTiepNhan);
                                        this.kiemTraPhieuThuGoiCoBHYT(this.idYeuCauTiepNhan);
                                    }
                                    if (responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != undefined &&
                                        responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans != null &&
                                        responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length > 0) {
                                        isDoneBindCongTyBHTN = this.bindCongTyBHTNBenhNhan(responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans);
                                        if (isDoneBindCongTyBHTN) {
                                            this.kiemTraThongTinBaoHiemTN = true;
                                        }
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.bindCongTyBHTNBenhNhan = function (thongTinCongTyBaoHiemTuNhans) {
                    var _this = this;
                    this.dataSourceDanhSachBHTN.data = thongTinCongTyBaoHiemTuNhans;
                    this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.forEach(function (element) {
                        var congNoItem = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinCongTyBaoHiemTuNhans"]();
                        congNoItem.Id = element.Id;
                        congNoItem.SoTienCongNo = element.SoTienCongNo;
                        congNoItem.TenCongTy = element.TenCongTy;
                        _this.thongTinBenhNhantam.push(congNoItem);
                    });
                    return true;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraThongTinTruocKhiThuTien = function () {
                    if (this.danhSachChuaXacNhanBHYT != undefined && this.danhSachChuaXacNhanBHYT != null
                        && this.danhSachChuaXacNhanBHYT.data.length > 0) {
                        return this.commonThuTien.ErrorChuaXacNhanTienBHYT;
                    }
                    if (this.isTienBNTraOrTraBN && !this.flagCheckSeletedTienMat && !this.flagCheckSeletedChuyenKhoan && !this.flagCheckSeletedPos) {
                        return this.commonThuTien.VuiLongChonHTTT;
                    }
                    if (this.danhSachChuaThanhToans.data.length == 0) {
                        return this.commonThuTien.VuiLongChonDVTT;
                    }
                    if (this.flagCheckSeletedTienMat) {
                        if (this.thuTien.TienBenhNhanDua != 0 && this.thuTien.TienBenhNhanDua < this.thuTien.TienMat) {
                            return this.commonThuTien.ErrorSoTienBenhNhanDuaKhongDung;
                        }
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.showThongBaoSoTienBenhNhan = function () {
                    var soTienBenhNhanTra = 0;
                    if (this.tongTienBNThanhToan !== this.thuTien.SoTienCongNo)
                        soTienBenhNhanTra = this.tienPhaiTraBenhNhan;
                    else
                        soTienBenhNhanTra = this.thuTien.SoTienCongNo;
                    var duaLaiBenhNhan = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - this.thuTien.SoTienCongNo > 0;
                    if (duaLaiBenhNhan) {
                        soTienBenhNhanTra = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - this.thuTien.SoTienCongNo;
                    }
                    if (this.tongTienBNThanhToan === this.thuTien.SoTienCongNo || duaLaiBenhNhan)
                        this.defeautSoTien();
                    return [duaLaiBenhNhan, soTienBenhNhanTra];
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.thanhToanKemDichVuTrongGoi = function () {
                    var _this = this;
                    var self = this;
                    this.validationErrors = [];
                    this.cdRef.detectChanges();
                    var hoten = this.thongTinBenhNhan.HoTen;
                    if (this.setDefeautTienMat.length === 0) {
                        this.validationErrors.push({
                            Message: this.commonThuTien.ShowVuiLongChonHTTT,
                            Field: this.commonThuTien.HinhThucThanhToan,
                        });
                        return true;
                    }
                    var showThongBaoLoiThuTien = this.kiemTraThongTinTruocKhiThuTien();
                    if (showThongBaoLoiThuTien != undefined && showThongBaoLoiThuTien != "") {
                        this.notificationService.showError(showThongBaoLoiThuTien);
                        return true;
                    }
                    if (this.thuTien.NoiDungThu == "") {
                        this.validationErrors.push({
                            Message: this.commonThuTien.NoiDungThuMessage,
                            Field: this.commonThuTien.NoiDungThuField,
                        });
                        return true;
                    }
                    var _a = this.showThongBaoSoTienBenhNhan(), duaLaiBenhNhan = _a[0], soTienBenhNhanTra = _a[1];
                    this.confrim = this.dialog
                        .open(_common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_18__["ThongTinDichVuChuaDuocXacNhanComponent"], {
                        disableClose: true,
                        width: "800px",
                        data: { soTienBenhNhanTra: soTienBenhNhanTra, hoten: hoten, duaLaiBenhNhan: duaLaiBenhNhan },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result == "Yes") {
                            _this.showLoadingPopup();
                            //========================xử lý dịch vụ đã chọn và kiểm tra lần tính này có chọn toa thuốc hay không==========
                            if (_this.danhSachChuaThanhToans.data != null) {
                                _this.thuTien.DanhSachChiPhiKhamChuaBenhDaChons = _this.danhSachChuaThanhToans.data;
                            }
                            var kiemTraToaThuoc_1 = false;
                            for (var index = 0; index < _this.danhSachChuaThanhToans.data.length; index++) {
                                var element = _this.danhSachChuaThanhToans.data[index].Nhom.indexOf(":");
                                if (element > 0) {
                                    kiemTraToaThuoc_1 = true;
                                }
                            }
                            //======================================================================
                            //========================xử lý công nợ=================================
                            _this.danhSachCongNos = [];
                            if (_this.dataSourceDanhSachBHTN.data != null) {
                                _this.dataSourceDanhSachBHTN.data.forEach(function (element) {
                                    var danhSachCongNo = {};
                                    if (element.SoTienCongNo !== null && element.SoTienCongNo !== undefined) {
                                        danhSachCongNo.CongTyCongNoId = element.Id;
                                        danhSachCongNo.SoTienCongNo = element.SoTienCongNo;
                                        _this.danhSachCongNos.push(danhSachCongNo);
                                    }
                                });
                                _this.thuTien.DanhSachCongNos = _this.danhSachCongNos;
                            }
                            _this.thuTien.Id = _this.idYeuCauTiepNhan;
                            //=============================================================================
                            self.apiService.post("ThuNgan/ThuPhiKhamChuaBenhVaQuyetToanDichVuTrongGoi", _this.thuTien).subscribe(function (ketQuaKhiThanhToan) {
                                _this.dataSourceChanged = true;
                                _this.notificationService.showSuccess(_this.commonThuTien.ThuTienThanhCong);
                                _this.setDefeautTienMat = [1];
                                _this.defeautSoTien();
                                //====================checked res thành công ===========================
                                if (ketQuaKhiThanhToan.PhieuThuIds != undefined && ketQuaKhiThanhToan.PhieuThuIds != null &&
                                    ketQuaKhiThanhToan.PhieuThuIds.length > 0) {
                                    _this.taiKhoanThuId = ketQuaKhiThanhToan.PhieuThuId;
                                    var phieuHoanUngId = 0;
                                    //====================Sau khi hoàn thu tiền thi show modal xác nhận cần show====================							
                                    var phieuHoanUngIds_2 = "";
                                    var taiKhoanThus_1 = "";
                                    _this.loadSoTienQuyBHYTVaTamUng(_this.idYeuCauTiepNhan);
                                    _this.dialog
                                        .open(_common_xac_nhan_phieu_thu_xac_nhan_phieu_thu_component__WEBPACK_IMPORTED_MODULE_17__["XacNhanPhieuThuComponent"], {
                                        width: "400px",
                                        disableClose: true,
                                        data: { kiemTraToaThuoc: kiemTraToaThuoc_1, phieuHoanUngId: phieuHoanUngId },
                                    })
                                        .afterClosed()
                                        .subscribe(function (result) {
                                        if (result != null && result.length != 0 && result !== "") {
                                            var typeLoai_1 = "";
                                            result.forEach(function (loaiPhieu) {
                                                switch (loaiPhieu) {
                                                    case _this.commonThuTien.InPhieuThu:
                                                        typeLoai_1 += "InPhieuThu,";
                                                        break;
                                                    case _this.commonThuTien.BangKeThuoc:
                                                        typeLoai_1 += "BangKeThuoc,";
                                                        break;
                                                    case _this.commonThuTien.InPhieuHoanUng:
                                                        typeLoai_1 += "InPhieuHoanUng,";
                                                        break;
                                                    case _this.commonThuTien.InCPKhamNgoaiTru:
                                                        typeLoai_1 += "InCPKhamNgoaiTru";
                                                        break;
                                                }
                                            });
                                            if (ketQuaKhiThanhToan.PhieuThuIds != undefined && ketQuaKhiThanhToan.PhieuThuIds != null &&
                                                ketQuaKhiThanhToan.PhieuThuIds.length > 0) {
                                                ketQuaKhiThanhToan.PhieuThuIds.forEach(function (element) {
                                                    taiKhoanThus_1 += element + ",";
                                                });
                                            }
                                            if (ketQuaKhiThanhToan.PhieuHoanUngIds != undefined && ketQuaKhiThanhToan.PhieuHoanUngIds != null &&
                                                ketQuaKhiThanhToan.PhieuHoanUngIds.length > 0) {
                                                ketQuaKhiThanhToan.PhieuHoanUngIds.forEach(function (element) {
                                                    phieuHoanUngIds_2 += element + ",";
                                                });
                                            }
                                            _this.inPhieuPhieuThuVuaThuGoiMarketingPdf(taiKhoanThus_1, 0, typeLoai_1, phieuHoanUngIds_2);
                                        }
                                        else {
                                            _this.linkSauKhiThuTien();
                                        }
                                    });
                                    //====================Sau khi hoàn thu tiền thi show modal xác nhận cần show====================
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.closeAllDialogs();
                            });
                        }
                    });
                    // };
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.inPhieuPhieuThuVuaThuGoiMarketingPdf = function (taiKhoanThuId, taiKhoanChiId, loaiTypes, phieuHoanUngIds) {
                    var _this = this;
                    var arrFileUrl = [];
                    var arrFilePdf = [];
                    var hostingName = window.location.protocol + '//' + window.location.host;
                    this.showLoadingPopup();
                    this.apiService.postExportPdf("ThuNgan/XemNhieuPhieuThu?hostingName=" + hostingName + "&taiKhoanThuIds=" + taiKhoanThuId + "&phieuHoanUngIds=" + phieuHoanUngIds + "&yeuCauTiepNhanId=" + this.idYeuCauTiepNhan + "&loaiTypes=" + loaiTypes)
                        .subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        arrFileUrl.push(datalocalURL);
                        arrFilePdf.push(file);
                        if (arrFilePdf.length > 0) {
                            _this.dialog
                                .open(_common_common_pdf_popup_common_pdf_popup_component__WEBPACK_IMPORTED_MODULE_26__["CommonPdfPopupComponent"], {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl: arrFileUrl, arrFilePdf: arrFilePdf },
                            })
                                .afterClosed()
                                .subscribe(function () {
                                _this.linkSauKhiThuTien();
                                _this.closeAllDialogs();
                            });
                        }
                        else {
                            _this.closeAllDialogs();
                            _this.notificationService.showError("Chưa có thông tin dịch vụ.");
                        }
                        ;
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                            _this.closeAllDialogs();
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.ngAfterViewChecked = function () {
                    this.cdRef.detectChanges();
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.totalTienCongNo = function (field) {
                    switch (field) {
                        case "SoTienCongNo":
                            return this.dataSourceDanhSachBHTN.data.reduce(function (sum, item) { return sum + item.SoTienCongNo; }, 0);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.getSoDuTaiKhoanBenhNhan = function (id) {
                    var _this = this;
                    this.apiService.get("ThuNgan/SoDuTaiKhoanBenhNhan/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.soDuTaiKhoanBenhNhan = resultData;
                        }
                    });
                    this.apiService.get("ThuNgan/SoTienUocLuongConLai/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.soTienConLaiBenhNhan = resultData;
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.getSoTienQuyBHYTTTTrongGoi = function (id) {
                    var _this = this;
                    this.apiService.get("ThuNgan/SoTienQuyBHYTTTTrongGoi/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.soTienQuyBHYTTTTrongGoi = resultData;
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.loadSoTienQuyBHYTVaTamUng = function (yeuCauTiepNhanId) {
                    this.getSoDuTaiKhoanBenhNhan(yeuCauTiepNhanId);
                    this.getSoTienQuyBHYTTTTrongGoi(yeuCauTiepNhanId);
                    this.kiemTraCoPhieuThuCongNo(yeuCauTiepNhanId);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.uploadFileDone = function (tapTin) {
                    var _this = this;
                    if (tapTin != null) {
                        this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam = tapTin;
                    }
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (tapTin != null) {
                        this.thuNganValidationErrors = [];
                    }
                    if (this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam != null) {
                        var thongTinMGThem = {
                            IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
                            TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
                        };
                        this.apiService.post("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem).subscribe(function (resultData) {
                            if (resultData) {
                                _this.cdRef.detectChanges();
                            }
                            _this.notificationService.showSuccess(_this.commonThuTien.ApDungGiayMiemGiamThanhCong);
                        }, function () { });
                        this.getThongTinMienGiam(this.idYeuCauTiepNhan);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.removeEvent = function (event) {
                    var _this = this;
                    var thongTinMGThem = {
                        IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
                        TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
                    };
                    this.apiService.post("ThuNgan/XoaThongTinMienGiam", thongTinMGThem).subscribe(function (resultData) {
                        if (resultData) {
                            _this.getThongTinMienGiam(_this.idYeuCauTiepNhan);
                        }
                        _this.notificationService.showSuccess(_this.commonThuTien.XoaMiemGiamThanhCong);
                    }, function () { });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onKeyTienMatonKeyTienMat = function () {
                    this.thuTien.TienTraLaiBenhNhan = 0;
                    this.thuTien.TienBenhNhanDua = 0;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.changeValueTienBenhNhanDua = function (event) {
                    this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
                    if (this.thuTien.TienTraLaiBenhNhan < 0) {
                        this.thuTien.TienTraLaiBenhNhan = 0;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.tienTrongTaiKhoan = function (soDuTK) {
                    this.soDuTaiKhoanBenhNhan = soDuTK;
                    this.dataSourceChanged = true;
                    this.dataSourceChangedTamUng = true;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.tienTrongTaiKhoanTralaiBN = function (soDuTK) {
                    this.soDuTaiKhoanBenhNhan = soDuTK;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.tienTrongTaiKhoanBNTraTien = function (soDuTK) {
                    this.soDuTaiKhoanBenhNhan = soDuTK;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.modelChangeTienCongNo = function (event) {
                    var kiemTraSoTien = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - this.tongTienBNThanhToan - event;
                    this.isTienBNTraOrTraBN = kiemTraSoTien <= 0;
                    if (this.isTienBNTraOrTraBN) {
                        this.tienPhaiTraBenhNhan = (this.tongTienBNThanhToan - event) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi;
                        this.clearDataSetDefaut((this.tongTienBNThanhToan - event) - this.soDuTaiKhoanBenhNhan - this.soTienQuyBHYTTTTrongGoi);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.clearDataSetDefaut = function (soTien) {
                    this.clearHinhThucThanhToan();
                    this.hinhThucThanhToan[0];
                    this.setDefeautTienMat = [1];
                    this.defeautSoTien();
                    this.checkSeletedTienMat = true;
                    this.flagCheckSeletedTienMat = true;
                    this.thuTien.TienMat = Math.round(soTien);
                    if (this.thuTien.TienBenhNhanDua > 0) {
                        this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraYeuCauKhamBenhNhapVien = function () {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraYeuCauNhapVien/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        _this.chuyenVaoNoiTru = resultData;
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.ChuyenVaoNoiTru = function () {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn chuyển bệnh nhân vào nội trú hay không?" },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result === "Yes") {
                            _this.apiService.get("ThuNgan/ChuyenVaoNoiTru/" + _this.idYeuCauTiepNhan).subscribe(function (resultData) {
                                if (resultData) {
                                    _this.router.navigate(["/danh-sach-thu-dich-vu"]);
                                }
                            });
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraSuDungGoi = function () {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraSuDungGoi/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData) {
                            _this.ktSuDungGoi = resultData;
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.chiTietGoiMarketing = function () {
                    if (this.ktSuDungGoi != undefined && this.ktSuDungGoi != null) {
                        this.router.navigateByUrl("/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/" + this.ktSuDungGoi);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.thuTienBenhNhan = function () {
                    var _this = this;
                    var self = this;
                    this.validationErrors = [];
                    this.cdRef.detectChanges();
                    //Kiểm tra danh sách chua thu đã xác nhận bhyt chưa
                    if (this.danhSachChuaXacNhanBHYT != undefined && this.danhSachChuaXacNhanBHYT != null
                        && this.danhSachChuaXacNhanBHYT.data.length > 0) {
                        this.notificationService.showError(this.commonThuTien.ErrorChuaXacNhanTienBHYT);
                        return true;
                    }
                    if (this.setDefeautTienMat.length === 0) {
                        this.validationErrors.push({
                            Message: this.commonThuTien.ShowVuiLongChonHTTT,
                            Field: this.commonThuTien.HinhThucThanhToan,
                        });
                        return true;
                    }
                    if (this.isTienBNTraOrTraBN && !this.flagCheckSeletedTienMat && !this.flagCheckSeletedChuyenKhoan && !this.flagCheckSeletedPos) {
                        this.notificationService.showError(this.commonThuTien.VuiLongChonHTTT);
                        return true;
                    }
                    if (this.danhSachChuaThanhToans.data.length == 0) {
                        this.notificationService.showError(this.commonThuTien.VuiLongChonDVTT);
                        return true;
                    }
                    var checkSoTienChoTungDichVu = false;
                    this.danhSachChuaThanhToans.data.forEach(function (element) {
                        if (element.CapNhatThanhToan == true) {
                            checkSoTienChoTungDichVu = false;
                        }
                        else if ((element.CapNhatThanhToan == false && element.KiemTraTienSoTienItemDichVu == true) || element.BNConPhaiThanhToan < 0) {
                            checkSoTienChoTungDichVu = true;
                        }
                        if (element.CapNhatThanhToan == true && _this.tienPhaiTraBenhNhan < 0) {
                            _this.thuTien.TienMat = 0;
                            _this.thuTien.SoTienHoanLaiThanhToan = _this.tienPhaiTraBenhNhan;
                        }
                    });
                    if (checkSoTienChoTungDichVu) {
                        this.notificationService.showError(this.commonThuTien.ErrorSoTienDVKhongDung);
                        return true;
                    }
                    if (this.flagCheckSeletedTienMat) {
                        if (this.thuTien.TienBenhNhanDua != 0 && this.thuTien.TienBenhNhanDua < this.thuTien.TienMat) {
                            this.notificationService.showError(this.commonThuTien.ErrorSoTienBenhNhanDuaKhongDung);
                            return true;
                        }
                    }
                    if (this.thuTien.NoiDungThu == "") {
                        this.validationErrors.push({
                            Message: this.commonThuTien.NoiDungThuMessage,
                            Field: this.commonThuTien.NoiDungThuField,
                        });
                        return true;
                    }
                    var soTienBenhNhanTra = 0;
                    if (this.tongTienBNThanhToan === this.thuTien.SoTienCongNo) {
                        soTienBenhNhanTra = this.thuTien.SoTienCongNo;
                        this.defeautSoTien();
                    }
                    else {
                        soTienBenhNhanTra = this.tienPhaiTraBenhNhan;
                    }
                    var duaLaiBenhNhan = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - (this.tongTienBNThanhToan - this.thuTien.SoTienCongNo) > 0;
                    if (duaLaiBenhNhan) {
                        soTienBenhNhanTra = (this.soDuTaiKhoanBenhNhan + this.soTienQuyBHYTTTTrongGoi) - (this.tongTienBNThanhToan - this.thuTien.SoTienCongNo);
                        this.defeautSoTien();
                    }
                    var hoten = this.thongTinBenhNhan.HoTen;
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog
                        .open(_common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_18__["ThongTinDichVuChuaDuocXacNhanComponent"], {
                        disableClose: true,
                        width: "800px",
                        data: { soTienBenhNhanTra: soTienBenhNhanTra, hoten: hoten, duaLaiBenhNhan: duaLaiBenhNhan },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result == "Yes") {
                            //========================xử lý dịch vụ đã chọn và kiểm tra lần tính này có chọn toa thuốc hay không==========
                            if (_this.danhSachChuaThanhToans.data != null) {
                                _this.thuTien.DanhSachChiPhiKhamChuaBenhDaChons = _this.danhSachChuaThanhToans.data;
                            }
                            var kiemTraToaThuoc_2 = false;
                            for (var index = 0; index < _this.danhSachChuaThanhToans.data.length; index++) {
                                var element = _this.danhSachChuaThanhToans.data[index].Nhom.indexOf(":");
                                if (element > 0) {
                                    kiemTraToaThuoc_2 = true;
                                }
                            }
                            //======================================================================
                            //========================xử lý công nợ=================================
                            _this.danhSachCongNos = [];
                            if (_this.dataSourceDanhSachBHTN.data != null) {
                                _this.dataSourceDanhSachBHTN.data.forEach(function (element) {
                                    var danhSachCongNo = {};
                                    if (element.SoTienCongNo !== null && element.SoTienCongNo !== undefined) {
                                        danhSachCongNo.CongTyCongNoId = element.Id;
                                        danhSachCongNo.SoTienCongNo = element.SoTienCongNo;
                                        _this.danhSachCongNos.push(danhSachCongNo);
                                    }
                                });
                                _this.thuTien.DanhSachCongNos = _this.danhSachCongNos;
                            }
                            _this.thuTien.Id = _this.idYeuCauTiepNhan;
                            //=============================================================================
                            self.apiService.post("ThuNgan/ThuTienPhiBenhNhan", _this.thuTien).subscribe(function (ketQuaKhiThanhToan) {
                                _this.dataSourceChanged = true;
                                _this.notificationService.showSuccess(_this.commonThuTien.ThuTienThanhCong);
                                _this.setDefeautTienMat = [1];
                                _this.defeautSoTien();
                                //====================checked res thành công ===========================
                                if (ketQuaKhiThanhToan != 0) {
                                    _this.taiKhoanThuId = ketQuaKhiThanhToan.PhieuThuId;
                                    var phieuHoanUngId_1 = ketQuaKhiThanhToan.PhieuHoanUngId;
                                    //====================Sau khi hoàn thu tiền thi show modal xác nhận cần show====================								
                                    _this.loadSoTienQuyBHYTVaTamUng(_this.idYeuCauTiepNhan);
                                    _this.dialog
                                        .open(_common_xac_nhan_phieu_thu_xac_nhan_phieu_thu_component__WEBPACK_IMPORTED_MODULE_17__["XacNhanPhieuThuComponent"], {
                                        width: "400px",
                                        disableClose: true,
                                        data: { kiemTraToaThuoc: kiemTraToaThuoc_2, phieuHoanUngId: phieuHoanUngId_1 },
                                    })
                                        .afterClosed()
                                        .subscribe(function (result) {
                                        if (result != null && result.length != 0 && result !== "") {
                                            var typeLoai_2 = "";
                                            result.forEach(function (loaiPhieu) {
                                                switch (loaiPhieu) {
                                                    case _this.commonThuTien.InPhieuThu:
                                                        typeLoai_2 += "InPhieuThu,";
                                                        break;
                                                    case _this.commonThuTien.BangKeThuoc:
                                                        typeLoai_2 += "BangKeThuoc,";
                                                        break;
                                                    case _this.commonThuTien.InPhieuHoanUng:
                                                        typeLoai_2 += "InPhieuHoanUng,";
                                                        break;
                                                    case _this.commonThuTien.InCPKhamNgoaiTru:
                                                        typeLoai_2 += "InCPKhamNgoaiTru";
                                                        break;
                                                }
                                            });
                                            _this.inPhieuPdf(_this.taiKhoanThuId, phieuHoanUngId_1, typeLoai_2, "");
                                        }
                                        else {
                                            _this.linkSauKhiThuTien();
                                        }
                                    });
                                    //====================Sau khi hoàn thu tiền thi show modal xác nhận cần show====================
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                        else {
                            _this.linkSauKhiThuTien();
                        }
                    });
                    // };
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.xemTaiLieu = function (dataItem) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var params;
                        var _this = this;
                        return __generator(this, function (_a) {
                            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpParams"]({
                                fromObject: {
                                    tenGuid: dataItem.TenGuid,
                                    duongDan: dataItem.DuongDan,
                                },
                            });
                            this.apiService.get("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe(function (resp) {
                                if (resp) {
                                    if (dataItem.TenGuid.indexOf(".pdf") != -1 || dataItem.TenGuid.indexOf(".PDF") != -1) {
                                        _this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_14__["ViewImagePdfComponent"], {
                                            disableClose: false,
                                            width: "1000px",
                                            height: "600px",
                                            data: {
                                                Type: "PDF",
                                                Title: "Xem tài liệu",
                                                Description: resp.MoTa !== null ? resp.MoTa : "",
                                                Src: resp,
                                            },
                                        });
                                    }
                                    else {
                                        _this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_14__["ViewImagePdfComponent"], {
                                            disableClose: false,
                                            width: "1000px",
                                            height: "600px",
                                            data: {
                                                Type: "Image",
                                                Title: "Xem ảnh",
                                                Description: resp.MoTa !== null ? resp.MoTa : "",
                                                Src: resp,
                                            },
                                        });
                                    }
                                }
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.defeautSoTien = function () {
                    this.thuTien.TienMat = 0;
                    this.thuTien.POS = 0;
                    this.thuTien.ChuyenKhoan = 0;
                    // this.thuTien.SoTienCongNo = 0;
                    this.thuTien.TienTraLaiBenhNhan = 0;
                    this.thuTien.TienBenhNhanDua = 0;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.modelChangeCongNo = function (event, type) {
                    var total = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.ChuyenKhoan - this.thuTien.POS;
                    this.selectMoneyTienPos = [total, 0];
                    this.thuTien.SoTienCongNo = event;
                    this.valueChangeInput(type);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.modelChangePos = function (event, type) {
                    var total = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.ChuyenKhoan;
                    this.selectMoneyTienPos = [total, 0];
                    this.thuTien.POS = event;
                    this.valueChangeInput(type);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.modelChangeChuyenKhoan = function (event, type) {
                    var total = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.POS;
                    this.selectMoneyTienChuyenKhoan = [total, 0];
                    this.thuTien.ChuyenKhoan = event;
                    this.valueChangeInput(type);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.modelChangeTienMat = function (event, type) {
                    var total = this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.POS;
                    this.selectMoneyTienMat = [total, 0];
                    this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
                    if (this.thuTien.TienTraLaiBenhNhan < 0) {
                        this.thuTien.TienTraLaiBenhNhan = 0;
                    }
                    this.thuTien.TienMat = event;
                    this.valueChangeInput(type);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.modelChangeTienBNDua = function (event) {
                    this.selectMoneyTienBNDua = [this.tienPhaiTraBenhNhan, 100000000000];
                    this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
                    if (this.thuTien.TienTraLaiBenhNhan < 0) {
                        this.thuTien.TienTraLaiBenhNhan = 0;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.valueChangeInput = function (type) {
                    if (this.thuTien.TienTraLaiBenhNhan < 0) {
                        this.thuTien.TienTraLaiBenhNhan = 0;
                    }
                    this.hinhThucThanhToan.forEach(function (item) {
                        if (item.KeyId == type) {
                            item.Change = true;
                        }
                    });
                    var itemNotChanges = this.hinhThucThanhToan.filter(function (o) { return o.Selected == true && o.Change == false; });
                    if (itemNotChanges.length == 1) {
                        this.changeSoTienWhenInput(itemNotChanges[0].KeyId);
                    }
                    else {
                        if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(function (o) { return o.Selected == true; }).length == 2) {
                            var items = this.hinhThucThanhToan.filter(function (o) { return o.Selected == true && o.KeyId != type; });
                            this.changeSoTienWhenInput(items[0].KeyId);
                        }
                    }
                    if (this.thuTien.TienMat + this.thuTien.ChuyenKhoan + this.thuTien.POS != this.tienPhaiTraBenhNhan) {
                        this.showCanhBaoSoTienNhap = true;
                    }
                    else {
                        this.showCanhBaoSoTienNhap = false;
                    }
                    this.changeTienTraLaiBenhNhan();
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.changeSoTienWhenInput = function (item) {
                    switch (item) {
                        case this.commonThuTien.TienMat:
                            this.thuTien.TienMat = this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.POS < 0 ? 0 : this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.POS;
                            break;
                        case this.commonThuTien.ChuyenKhoan:
                            this.thuTien.ChuyenKhoan = this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.POS < 0 ? 0 : this.tienPhaiTraBenhNhan - this.thuTien.TienMat - this.thuTien.POS;
                            break;
                        case this.commonThuTien.Pos:
                            this.thuTien.POS = this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.TienMat < 0 ? 0 : this.tienPhaiTraBenhNhan - this.thuTien.ChuyenKhoan - this.thuTien.TienMat;
                            break;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.selectionChangeHinhThucThanhToan = function (event) {
                    var _this = this;
                    this.clearHinhThucThanhToan();
                    this.defeautSoTien();
                    this.showCanhBaoSoTienNhap = false;
                    if (event != null && event.length === 1) {
                        this.changeSoTienWhenInput(event[0].KeyId);
                    }
                    event.forEach(function (element) {
                        switch (element) {
                            case _this.commonThuTien.TienMat:
                                _this.flagCheckSeletedTienMat = true;
                                break;
                            case _this.commonThuTien.ChuyenKhoan:
                                _this.flagCheckSeletedChuyenKhoan = true;
                                break;
                            case _this.commonThuTien.Pos:
                                _this.flagCheckSeletedPos = true;
                                break;
                            case _this.commonThuTien.CongNo:
                                _this.flagCheckSeletedCongNo = true;
                                break;
                        }
                    });
                    this.hinhThucThanhToan.forEach(function (item) {
                        item.Change = false;
                    });
                    //Cập nhật trạng thái chọn
                    this.hinhThucThanhToan.forEach(function (item) {
                        if (event.filter(function (o) { return o == item.KeyId; }).length > 0) {
                            item.Selected = true;
                            //Nếu chỉ chọn 1 loại HTTT thì số tiền = số tiền phải thu
                            if (event.length == 1) {
                                switch (item.KeyId) {
                                    case _this.commonThuTien.TienMat:
                                        _this.thuTien.TienMat = _this.tienPhaiTraBenhNhan;
                                        break;
                                    case _this.commonThuTien.ChuyenKhoan:
                                        _this.thuTien.ChuyenKhoan = _this.tienPhaiTraBenhNhan;
                                        break;
                                    case _this.commonThuTien.Pos:
                                        _this.thuTien.POS = _this.tienPhaiTraBenhNhan;
                                        break;
                                }
                            }
                        }
                        else {
                            item.Selected = false;
                        }
                    });
                    this.cdRef.detectChanges();
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.clearHinhThucThanhToan = function () {
                    this.flagCheckSeletedTienMat = false;
                    this.flagCheckSeletedChuyenKhoan = false;
                    this.flagCheckSeletedPos = false;
                    this.flagCheckSeletedCongNo = false;
                    this.checkSeletedTienMat = false;
                    this.checkSeletedChuyenKhoan = false;
                    this.checkSeletedPos = false;
                    this.checkSeletedCongNo = false;
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.changeTienTraLaiBenhNhan = function () {
                    if (this.thuTien.TienBenhNhanDua > this.thuTien.TienMat) {
                        this.thuTien.TienTraLaiBenhNhan = this.thuTien.TienBenhNhanDua - this.thuTien.TienMat;
                    }
                    else {
                        this.thuTien.TienTraLaiBenhNhan = 0;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.inPhieuPdf = function (taiKhoanThuId, taiKhoanChiId, loaiTypes, phieuHoanUngIds) {
                    var _this = this;
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: 'Đang tải...' }
                    });
                    var idYeuCauTiepNhan = this.idYeuCauTiepNhan;
                    this.dialog
                        .open(_thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_25__["ThongTinPhieuNgoaiTruPopupComponent"], {
                        disableClose: false,
                        width: "1000px",
                        data: { taiKhoanThuId: taiKhoanThuId, taiKhoanChiId: taiKhoanChiId, idYeuCauTiepNhan: idYeuCauTiepNhan, loaiTypes: loaiTypes, phieuHoanUngIds: phieuHoanUngIds },
                    })
                        .afterClosed()
                        .subscribe(function () {
                        _this.linkSauKhiThuTien();
                        loading.close();
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.linkSauKhiThuTien = function () {
                    var yctn = this.route.snapshot.queryParams.yctn;
                    if (yctn) {
                        this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
                    }
                    else {
                        if (this.chuyenVaoNoiTru) {
                            window.location.href = "/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + this.idYeuCauTiepNhan + "?loaiThanhToan=1";
                        }
                        else {
                            this.router.navigate(["/danh-sach-thu-dich-vu"]);
                        }
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.soTienBenhNhanCanThanhToan = function () {
                    var totalBHYT = 0;
                    var totalThanhTien = 0;
                    if (this.danhSachChuaThanhToans.data != undefined && this.danhSachChuaThanhToans.data != null) {
                        this.danhSachChuaThanhToans.data.forEach(function (element) {
                            if (element.CheckedDefault === true) {
                                totalThanhTien += element.ThanhTien;
                                totalBHYT += element.BHYTThanhToan;
                            }
                        });
                    }
                    return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.soTienBenhNhanCanThanhToanTrongGoi = function () {
                    var totalBHYT = 0;
                    var totalThanhTien = 0;
                    if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus != undefined &&
                        this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus != null) {
                        this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.forEach(function (element) {
                            if (element.CheckedDefault === true) {
                                totalThanhTien += element.ThanhTien;
                                totalBHYT += element.BHYTThanhToan;
                            }
                        });
                    }
                    return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.apDungCongNoChoPhanChuaThu = function (soTienCongApDungCongTy, id) {
                    this.soTienCongNoTam = soTienCongApDungCongTy;
                    var soTienNBCanThanhToan = this.soTienBenhNhanCanThanhToan();
                    if (soTienCongApDungCongTy >= 0) {
                        if (this.danhSachChuaThanhToans.data.length > 0 &&
                            soTienCongApDungCongTy > soTienNBCanThanhToan) {
                            this.notificationService.showError(this.commonThuTien.ApDungCongNoKhongLonSoTienThanhToanDichVu);
                        }
                        else {
                            this.apDungCongNo = true;
                            this.apDungMiemGiam = false;
                            for (var _i = 0, _a = this.thongTinBenhNhantam; _i < _a.length; _i++) {
                                var tam = _a[_i];
                                if (tam.Id === id) {
                                    this.position = this.thongTinBenhNhantam.indexOf(tam);
                                    tam.SoTienCongNo = soTienCongApDungCongTy;
                                }
                            }
                            this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.filter(function (e) { return (e.SoTienCongNo = 0); });
                            this.notificationService.showSuccess(this.commonThuTien.ApDungCongNoThanhCong);
                        }
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.apDungCongNoChoPhanThuTrongGoi = function (soTienCongApDungCongTy, id) {
                    this.soTienCongNoTam = soTienCongApDungCongTy;
                    var soTienNBCanThanhToan = this.soTienBenhNhanCanThanhToanTrongGoi();
                    if (soTienCongApDungCongTy >= 0) {
                        if (this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus.length > 0 &&
                            soTienCongApDungCongTy > soTienNBCanThanhToan) {
                            this.notificationService.showError(this.commonThuTien.ApDungCongNoKhongLonSoTienThanhToanDichVu);
                        }
                        else {
                            this.apDungCongNoTrongGoi = true;
                            for (var _i = 0, _a = this.thongTinBenhNhantam; _i < _a.length; _i++) {
                                var tam = _a[_i];
                                if (tam.Id === id) {
                                    this.position = this.thongTinBenhNhantam.indexOf(tam);
                                    tam.SoTienCongNo = soTienCongApDungCongTy;
                                }
                            }
                            this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.filter(function (e) { return (e.SoTienCongNo = 0); });
                            this.notificationService.showSuccess(this.commonThuTien.ApDungCongNoThanhCong);
                        }
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.apDungCongNoCongTyBHTN = function (soTienCongApDungCongTy, id) {
                    if (this.titleActive === "Chưa thu") {
                        this.apDungCongNoChoPhanChuaThu(soTienCongApDungCongTy, id);
                    }
                    if (this.titleActive === "Quyết toán gói marketing") {
                        this.apDungCongNoChoPhanThuTrongGoi(soTienCongApDungCongTy, id);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onKeyCongNo = function (event, soTienCongNo, id) {
                    if (event.key == "Enter") {
                        this.apDungCongNoCongTyBHTN(soTienCongNo, id);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraDSCongNo = function (check) {
                    if (check) {
                        this.getThongTinMienGiam(this.idYeuCauTiepNhan);
                        this.apDungMiemGiam = true;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.getThongTinMienGiam = function (id) {
                    var _this = this;
                    this.apiService.get("ThuNgan/GetThongTinMienGiam?yeuCauTiepNhanId=" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.flagShowDoiTuongUuDaiOrVoucher = true;
                            if (resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo != null || resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo != undefined) {
                                _this.flagShowDoiTuongUuDai = true;
                                _this.flagApDung = true;
                                _this.flagShowDoiTuongUuDaiOrVoucher = false;
                                _this.thongTinMienGiamTheoDoiTuongUuDai = {
                                    CongTyUudai: resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo.CongTyUudai,
                                    DoiTuongUuDai: resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo.DoiTuongUuDai,
                                    DichVuMiemGiamTheoTiLes: resultData.ThongTinMienGiamTheoDoiTuongUuDaiVo.DichVuMiemGiamTheoTiLes,
                                };
                            }
                            if (resultData.ThongTinMienGiamVoucherVo != null || resultData.ThongTinMienGiamVoucherVo != undefined) {
                                _this.flagEnableVoucher = true;
                                _this.flagApDung = true;
                                if (resultData.ThongTinMienGiamVoucherVo.MaVouchers.length > 0) {
                                    _this.listVouchers = [];
                                    _this.listTmpVouchers = [];
                                    resultData.ThongTinMienGiamVoucherVo.MaVouchers.forEach(function (element) {
                                        _this.listVouchers.push(element.KeyId);
                                        _this.listOldVouchers.push(element.KeyId);
                                        _this.listTmpVouchers.push(element.KeyId);
                                    });
                                }
                                if (_this.flagEnableVoucher === true) {
                                    _this.disabledVoucher = true;
                                }
                                _this.thongTinMienGiamVoucher = {
                                    MaVouchers: resultData.ThongTinMienGiamVoucherVo.MaVouchers,
                                    DichVuMiemGiamTheoTiLes: resultData.ThongTinMienGiamVoucherVo.DichVuMiemGiamTheoTiLes,
                                    LoaiVoucher: resultData.ThongTinMienGiamVoucherVo.LoaiVoucher,
                                    TenVoucher: resultData.ThongTinMienGiamVoucherVo.TenVoucher,
                                    SoTienVoucherMiemGiam: resultData.ThongTinMienGiamVoucherVo.SoTienVoucherMiemGiam,
                                };
                                _this.loaiVoucher = resultData.ThongTinMienGiamVoucherVo.LoaiVoucher;
                            }
                            if (resultData.ThongTinMienGiamThemVo != null || resultData.ThongTinMienGiamThemVo != undefined) {
                                _this.flagEnableMGThem = true;
                                _this.flagApDung = true;
                                if (_this.flagEnableMGThem === true) {
                                    _this.disabledMGThem = true;
                                }
                                _this.taiLieuDinhKemGiayMiemGiamVo = resultData.ThongTinMienGiamThemVo.TaiLieuDinhKemGiayMiemGiam;
                                // số tiền mg mà nhập vào bé hơn standardMG thì sẽ báo lỗi
                                _this.standardMG = _this.thongTinMienGiamThem.SoTienMG;
                                if (_this.thongTinMienGiamThem.SoTienMG != 0) {
                                    _this.disabledSoTienMG = false;
                                    _this.checkedMGTGiaTri = true;
                                    _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroup"]({
                                        loaiMG: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]("one"),
                                    });
                                }
                                if (_this.thongTinMienGiamThem.TiLeMienGiam != 0) {
                                    _this.disabledTiLeMG = false;
                                    _this.checkedMGTTiLe = true;
                                    _this.checkHiddenSoTienConLai = true;
                                    _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroup"]({
                                        loaiMG: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]("two"),
                                    });
                                }
                                if (_this.thongTinMienGiamThem != null && _this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam != null &&
                                    _this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam.Ten != null) {
                                    _this.isExistFile = true;
                                }
                            }
                            else {
                                _this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormGroup"]({
                                    loaiMG: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"](),
                                });
                            }
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onOpenChange = function () {
                    this.voucherList.getDataForLookup();
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraPhieuThuCoBHYT = function (event) {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraPhieuThuCoBHYT/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData.Item1 > 0) {
                            _this.kiemTraPhieuThuBHYT = true;
                            _this.phieuThuId = resultData.Item1;
                            _this.tenPhieuThu = resultData.Item2;
                        }
                        else {
                            _this.kiemTraPhieuThuBHYT = false;
                        }
                    }, function () { });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraPhieuThuGoiCoBHYT = function (event) {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraPhieuThuGoiCoBHYT/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData.Item1 > 0) {
                            _this.kiemTraPhieuThuGoiBHYT = true;
                            _this.phieuThuGoiId = resultData.Item1;
                            _this.tenPhieuThuGoi = resultData.Item2;
                        }
                        else {
                            _this.kiemTraPhieuThuGoiBHYT = false;
                        }
                    }, function () { });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraCoPhieuThuCongNo = function (event) {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraCoPhieuThuCongNo/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        _this.ktCoPhieuThuCongNo = resultData;
                    }, function () { });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.changeQR = function ($event) {
                    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
                        this.modelQRCode = $event;
                        var maVoucher = $event.split("@");
                        if (maVoucher.length > 1) {
                            this.kiemTraThongTinMaVoucher(maVoucher[0]);
                        }
                        else {
                            this.notificationService.showError("Mã voucher không hợp lệ.");
                        }
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.kiemTraThongTinMaVoucher = function (maVoucher) {
                    var _this = this;
                    this.apiService.post("ThuNgan/KiemTraThongTinMaVoucher?maVoucher=" + maVoucher + "&yeuCauTiepNhanId=" + this.idYeuCauTiepNhan + "&benhNhanId=" + this.thongTinBenhNhan.BenhNhanId).subscribe(function (resultData) {
                        if (resultData.Item1) {
                            _this.notificationService.showError(resultData.Item2);
                            _this.newBarcode = "";
                        }
                        else {
                            _this.notificationService.showSuccess(resultData.Item2);
                            _this.GetThongTheVoucher();
                            _this.dataSourceChanged = true;
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.open = function () {
                    this.multiselect.toggle(false);
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.removeTag = function (ev) {
                    this.listVoucherItem = this.value;
                    if (this.value != null) {
                        this.KiemTraTheVoucherSuDung(ev.dataItem);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.blur = function () {
                    if (this.newBarcode != "") {
                        this.kiemTraThongTinMaVoucher(this.newBarcode);
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.onKeyBarCode = function (event) {
                    if (event.keyCode === 13) {
                        this.multiselect.blur();
                        this.multiselect.focus();
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.filterChange = function (filter) {
                    if (filter != null && filter != "") {
                        this.newBarcode = filter;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.GetThongTheVoucher = function () {
                    var _this = this;
                    this.value = [];
                    this.apiService.get("ThuNgan/GetMaVoucher?yeucauTiepNhanId=" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            resultData.forEach(function (element) {
                                _this.value.push(element.DisplayName);
                                _this.listVoucherItem.push(element.DisplayName);
                                _this.newBarcode = "";
                            });
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.KiemTraTheVoucherSuDung = function (theVoucher) {
                    var _this = this;
                    var thongTinVoucherTheoYeuCauTiepNhan = {};
                    thongTinVoucherTheoYeuCauTiepNhan.TheVoucher = theVoucher;
                    thongTinVoucherTheoYeuCauTiepNhan.YeucauTiepNhanId = this.idYeuCauTiepNhan;
                    this.apiService.post("ThuNgan/KiemTraTheVoucherSuDung", thongTinVoucherTheoYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.GetThongTheVoucher();
                            _this.notificationService.showError(resultData.Item2);
                            _this.newBarcode = "";
                            if (!resultData.Item1) {
                                _this.dataSourceChanged = true;
                            }
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.xemBangKeNgoaiTruChoThu = function () {
                    var _this = this;
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    var arrFileUrl = [];
                    var arrFilePdf = [];
                    var danhSachChiPhiThuTamUng = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["DanhSachChiPhiThuTamUng"]();
                    danhSachChiPhiThuTamUng.Id = this.idYeuCauTiepNhan;
                    danhSachChiPhiThuTamUng.DanhSachChiPhiKhamChuaBenhDaChons = this.danhSachChuaThanhToans.data;
                    this.apiService.postExportPdf("ThuNgan/InBangKeNgoaiTruChoThu", danhSachChiPhiThuTamUng).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        arrFileUrl.push(datalocalURL);
                        arrFilePdf.push(file);
                        if (arrFilePdf.length > 0) {
                            _this.dialog
                                .open(_common_common_pdf_popup_ngoai_tru_common_pdf_popup_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_27__["CommonPdfPopupNgoaiTruComponent"], {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl: arrFileUrl, arrFilePdf: arrFilePdf, danhSachChiPhiThuTamUng: danhSachChiPhiThuTamUng, loaiBangKeChiPhi: _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["LoaiBangKeChiPhi"].BangKeChoThu },
                            })
                                .afterClosed()
                                .subscribe(function (result) { loading.close(); });
                        }
                        else {
                            _this.notificationService.showError("Chưa có thông tin dịch vụ.");
                            loading.close();
                        }
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            loading.close();
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.xemBangKeNgoaiTruTrongGoiChoThu = function () {
                    var _this = this;
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    var arrFileUrl = [];
                    var arrFilePdf = [];
                    var quyetToanDichVuTrongGoiVo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["QuyetToanDichVuTrongGoiVo"]();
                    quyetToanDichVuTrongGoiVo.Id = this.idYeuCauTiepNhan;
                    quyetToanDichVuTrongGoiVo.NgayThu = this.chiTienQuyetToan.NgayThu;
                    quyetToanDichVuTrongGoiVo.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus = this.chiTienQuyetToan.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus;
                    this.apiService.postExportPdf("ThuNgan/InBangKeNgoaiTruTrongGoiChoThu", quyetToanDichVuTrongGoiVo).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        arrFileUrl.push(datalocalURL);
                        arrFilePdf.push(file);
                        if (arrFilePdf.length > 0) {
                            _this.dialog
                                .open(_common_common_pdf_popup_ngoai_tru_common_pdf_popup_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_27__["CommonPdfPopupNgoaiTruComponent"], {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl: arrFileUrl, arrFilePdf: arrFilePdf, danhSachChiPhiThuTamUng: quyetToanDichVuTrongGoiVo, loaiBangKeChiPhi: _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["LoaiBangKeChiPhi"].BangKeChoThu },
                            })
                                .afterClosed()
                                .subscribe(function (result) { loading.close(); });
                        }
                        else {
                            _this.notificationService.showError("Chưa có thông tin dịch vụ.");
                            loading.close();
                        }
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            loading.close();
                        }
                    });
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                ChiTietCacKhoanPhaiThuComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 83 && event.ctrlKey) {
                        // ctrl + s
                        if (this.tabIndex == 0) {
                            this.thuTienBenhNhan();
                        }
                        event.preventDefault();
                    }
                    if (event.keyCode == 112 && event.ctrlKey) {
                        // ctrl + f1
                        this.changeValue(this.commonThuTien.ThuTien);
                        event.preventDefault();
                    }
                    if (event.keyCode == 113 && event.ctrlKey) {
                        //ctrl + f2
                        this.changeValue(this.commonThuTien.ThuTamUng);
                        event.preventDefault();
                    }
                    if (event.keyCode == 117 && event.ctrlKey) {
                        //ctrl + f6
                        if (this.loaiThanhToan === true) {
                            this.tabDanhSachThuTien.selectTab(0);
                            event.preventDefault();
                        }
                    }
                    if (event.keyCode == 118 && event.ctrlKey) {
                        if (this.loaiThanhToan === true) {
                            //ctrl + f7
                            this.tabDanhSachThuTien.selectTab(1);
                            event.preventDefault();
                        }
                    }
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        //esc
                        this.BackToList();
                        event.preventDefault();
                    }
                    if (event.keyCode == 81 && event.ctrlKey) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                return ChiTietCacKhoanPhaiThuComponent;
            }());
            ChiTietCacKhoanPhaiThuComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: false })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("voucherList", { static: false })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "voucherList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ds_chua_thu_tien_ds_chua_thu_tien_component__WEBPACK_IMPORTED_MODULE_5__["DsChuaThuTienComponent"], { static: false })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "dsChuaThuTienComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_chi_tiet_thu_tien_tam_ung_chi_tiet_thu_tien_tam_ung_component__WEBPACK_IMPORTED_MODULE_12__["ChiTietThuTienTamUngComponent"], { static: false })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "ChiTietThuTienTamUngComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplateSTCongNo", { static: true })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "actionTemplateSTCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplateSubmitCongNo", { static: true })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "actionTemplateSubmitCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tabDanhSachThuTien", { static: false })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "tabDanhSachThuTien", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("multiselect", { static: false })
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "multiselect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], ChiTietCacKhoanPhaiThuComponent.prototype, "keyEvent", null);
            ChiTietCacKhoanPhaiThuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-chi-tiet-cac-khoan-phai-thu",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chi-tiet-cac-khoan-phai-thu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chi-tiet-cac-khoan-phai-thu.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.scss")).default]
                })
            ], ChiTietCacKhoanPhaiThuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2NoaS10aWV0LXRodS10aWVuLXRhbS11bmcvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcY2hpLXRpZXQtdGh1LXRpZW4tdGFtLXVuZ1xcY2hpLXRpZXQtdGh1LXRpZW4tdGFtLXVuZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2NoaS10aWV0LXRodS10aWVuLXRhbS11bmcvY2hpLXRpZXQtdGh1LXRpZW4tdGFtLXVuZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vY2hpLXRpZXQtdGh1LXRpZW4tdGFtLXVuZy9jaGktdGlldC10aHUtdGllbi10YW0tdW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59IiwiLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: ChiTietThuTienTamUngComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietThuTienTamUngComponent", function () { return ChiTietThuTienTamUngComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _common_xac_nhan_in_truc_tiep_xac_nhan_in_truc_tiep_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component.ts");
            /* harmony import */ var _common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.ts");
            /* harmony import */ var _noi_tru_cho_thu_tien_cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../noi-tru/cho-thu-tien/cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.model.ts");
            var ChiTietThuTienTamUngComponent = /** @class */ (function () {
                function ChiTietThuTienTamUngComponent(dialog, apiService, router, cdRef, notificationService, route) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.idYeuCauTiepNhan = 0;
                    this.seletedTienMat = true;
                    this.seletedChuyenKhoan = true;
                    this.seletedPos = true;
                    this.selectMoney = null;
                    this.selectMoneyChuyenKhoan = null;
                    this.selectMoneyPos = null;
                    this.selectMoneyTienTamUngBNDua = null;
                    this.tongSoTienTamUng = 0;
                    this.soTienTrongTaiKhoanBenhNhan = 0;
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_5__["CommonThuTien"]();
                    this.setDefeautTienMat = [this.commonThuTien.TienMat];
                    this.selectItem = [];
                    this.flagCheckSeletedTienMat = false;
                    this.flagCheckSeletedChuyenKhoan = false;
                    this.flagCheckSeletedPos = false;
                    this.validationErrors = [];
                    this.tabIndex = 0;
                    this.confrim = null;
                    this.showCanhBaoSoTienNhap = false;
                    this.hinhThucThanhToan = [
                        { KeyId: this.commonThuTien.TienMat, DisplayName: this.commonThuTien.TienMatText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.ChuyenKhoan, DisplayName: this.commonThuTien.ChuyenKhoanText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.Pos, DisplayName: this.commonThuTien.PosText, Selected: false, Change: false },
                    ];
                    this.loaiThanhToan = new _noi_tru_cho_thu_tien_cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_11__["LoaiThanhToan"]();
                    this.dataSourceChangedTamUng = false;
                    this.tienTrongTaiKhoan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.HoTenBenhNhan = null;
                    this.SoTienThanhToanDV = 0;
                    this.afterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.soTienTamUngToiThieu = 0;
                }
                ChiTietThuTienTamUngComponent.prototype.ngOnInit = function () {
                    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
                    this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
                    this.thuTienTamUng = {};
                    this.selectItem = [1];
                    this.defeautSoTien();
                    this.flagCheckSeletedTienMat = true;
                    this.thuTienTamUng.NgayThuTamUng = new Date();
                    this.thuTienTamUng.NoiDungThuTamUng = "Thu tạm ứng khám chữa bệnh ngoại trú.";
                };
                ChiTietThuTienTamUngComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.InPhieuThu = function () { };
                ChiTietThuTienTamUngComponent.prototype.ngOnChanges = function (value) {
                    if (this.dataSourceChangedTamUng == true) {
                        this.afterChanged.emit();
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.getThongTinYeuCauBenhNhan = function (id) {
                    var _this = this;
                    this.apiService.get("ThuNgan/SoTienTamUng/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.soTienTamUngToiThieu = resultData.SoTienTamUngToiThieu;
                            _this.tongSoTienTamUng = resultData.SoTienTamUng;
                            _this.thuTienTamUng.TienMat = _this.tongSoTienTamUng;
                            var total = _this.tongSoTienTamUng;
                            _this.selectMoney = [total];
                        }
                    });
                };
                ChiTietThuTienTamUngComponent.prototype.clearSoTienThanhToan = function () {
                    this.thuTienTamUng.TienMat = 0;
                    this.thuTienTamUng.ChuyenKhoan = 0;
                    this.thuTienTamUng.POS = 0;
                };
                ChiTietThuTienTamUngComponent.prototype.evtHinhThucThanhToanChanged = function (event) {
                    var _this = this;
                    this.showCanhBaoSoTienNhap = false;
                    this.clearHinhThucThanhToan();
                    this.clearSoTienThanhToan();
                    event.forEach(function (item) {
                        switch (item) {
                            case _this.loaiThanhToan.TienMat:
                                _this.flagCheckSeletedTienMat = true;
                                break;
                            case _this.loaiThanhToan.ChuyenKhoan:
                                _this.flagCheckSeletedChuyenKhoan = true;
                                break;
                            case _this.loaiThanhToan.POS:
                                _this.flagCheckSeletedPos = true;
                                break;
                        }
                    });
                    this.hinhThucThanhToan.forEach(function (item) { item.Change = false; });
                    //Cập nhật trạng thái chọn
                    this.hinhThucThanhToan.forEach(function (item) {
                        if (event.filter(function (o) { return o == item.KeyId; }).length > 0) {
                            item.Selected = true;
                            //Nếu chỉ chọn 1 loại HTTT thì số tiền = số tiền phải thu
                            if (event.length == 1) {
                                switch (item.KeyId) {
                                    case _this.loaiThanhToan.TienMat:
                                        _this.thuTienTamUng.TienMat = _this.tongSoTienTamUng;
                                        break;
                                    case _this.loaiThanhToan.ChuyenKhoan:
                                        _this.thuTienTamUng.ChuyenKhoan = _this.tongSoTienTamUng;
                                        break;
                                    case _this.loaiThanhToan.POS:
                                        _this.thuTienTamUng.POS = _this.tongSoTienTamUng;
                                        break;
                                }
                            }
                        }
                        else {
                            item.Selected = false;
                        }
                    });
                };
                ChiTietThuTienTamUngComponent.prototype.clearHinhThucThanhToan = function () {
                    this.flagCheckSeletedTienMat = false;
                    this.flagCheckSeletedChuyenKhoan = false;
                    this.flagCheckSeletedPos = false;
                };
                //==================================Tính thu tiền và in phiếu thu==================================
                ChiTietThuTienTamUngComponent.prototype.defeautSoTien = function () {
                    this.thuTienTamUng.TienMat = 0;
                    this.thuTienTamUng.POS = 0;
                    this.thuTienTamUng.ChuyenKhoan = 0;
                    this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    this.thuTienTamUng.TienBenhNhanDua = 0;
                };
                ChiTietThuTienTamUngComponent.prototype.kiemTraNhapSoTienTra = function () {
                    var soTienNhapTra = this.thuTienTamUng.TienMat + this.thuTienTamUng.POS + this.thuTienTamUng.ChuyenKhoan;
                    if (this.tongSoTienTamUng !== soTienNhapTra)
                        return true;
                    return false;
                };
                ChiTietThuTienTamUngComponent.prototype.changeValueTienBenhNhanDua = function (event) {
                    this.thuTienTamUng.TienTraLaiBenhNhan = this.thuTienTamUng.TienBenhNhanDua - this.thuTienTamUng.TienMat;
                    if (this.thuTienTamUng.TienTraLaiBenhNhan < 0) {
                        this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.evtTienMatChanged = function (event, type) {
                    var total = this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.POS;
                    this.selectMoney = [total, 0];
                    this.changeInputsValue(type);
                };
                ChiTietThuTienTamUngComponent.prototype.evtChuyenKhoanChanged = function (event, type) {
                    var total = this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.POS;
                    this.selectMoneyChuyenKhoan = [total, 0];
                    this.changeInputsValue(type);
                };
                ChiTietThuTienTamUngComponent.prototype.evtPOSChanged = function (event, type) {
                    var total = this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.ChuyenKhoan;
                    this.selectMoneyPos = [total, 0];
                    this.changeInputsValue(type);
                };
                ChiTietThuTienTamUngComponent.prototype.changeInputsValue = function (type) {
                    if (this.thuTienTamUng.TienTraLaiBenhNhan < 0) {
                        this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    }
                    this.hinhThucThanhToan.forEach(function (item) {
                        if (item.KeyId == type) {
                            item.Change = true;
                        }
                    });
                    var itemNotChanges = this.hinhThucThanhToan.filter(function (o) { return o.Selected == true && o.Change == false; });
                    if (itemNotChanges.length == 1) {
                        this.changeSoTien(itemNotChanges[0].KeyId);
                    }
                    else {
                        if (itemNotChanges.length == 0 && this.hinhThucThanhToan.filter(function (o) { return o.Selected == true; }).length == 2) {
                            var items = this.hinhThucThanhToan.filter(function (o) { return o.Selected == true && o.KeyId != type; });
                            this.changeSoTien(items[0].KeyId);
                        }
                    }
                    if (this.thuTienTamUng.TienMat + this.thuTienTamUng.ChuyenKhoan + this.thuTienTamUng.POS > this.tongSoTienTamUng) {
                        this.showCanhBaoSoTienNhap = true;
                    }
                    else {
                        this.showCanhBaoSoTienNhap = false;
                    }
                    this.changeTienTraLaiBenhNhan();
                };
                ChiTietThuTienTamUngComponent.prototype.changeTienTraLaiBenhNhan = function () {
                    if (this.thuTienTamUng.TienBenhNhanDua > this.thuTienTamUng.TienMat) {
                        this.thuTienTamUng.TienTraLaiBenhNhan = this.thuTienTamUng.TienBenhNhanDua - this.thuTienTamUng.TienMat;
                    }
                    else {
                        this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.changeSoTien = function (item) {
                    switch (item) {
                        case this.loaiThanhToan.TienMat:
                            this.thuTienTamUng.TienMat = (this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.POS) < 0 ? 0 : this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.POS;
                            break;
                        case this.loaiThanhToan.ChuyenKhoan:
                            this.thuTienTamUng.ChuyenKhoan = (this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.POS) < 0 ? 0 : this.tongSoTienTamUng - this.thuTienTamUng.TienMat - this.thuTienTamUng.POS;
                            break;
                        case this.loaiThanhToan.POS:
                            this.thuTienTamUng.POS = (this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.TienMat) < 0 ? 0 : this.tongSoTienTamUng - this.thuTienTamUng.ChuyenKhoan - this.thuTienTamUng.TienMat;
                            break;
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.modelChangeTienTamUngBNDua = function (event) {
                    this.selectMoneyTienTamUngBNDua = [this.tongSoTienTamUng, 100000000000];
                    this.thuTienTamUng.TienTraLaiBenhNhan = event - this.thuTienTamUng.TienMat;
                    if (this.thuTienTamUng.TienTraLaiBenhNhan < 0) {
                        this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.getSoDuTaiKhoanBenhNhan = function (id) {
                    var _this = this;
                    this.apiService.get("ThuNgan/SoDuTaiKhoanBenhNhan/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.tienTrongTaiKhoan.emit(resultData);
                            _this.soTienTrongTaiKhoanBenhNhan = resultData;
                        }
                    });
                };
                ChiTietThuTienTamUngComponent.prototype.ThuTienTamUng = function () {
                    var _this = this;
                    var self = this;
                    this.validationErrors = [];
                    this.cdRef.detectChanges();
                    var tongTienThu = this.thuTienTamUng.POS + this.thuTienTamUng.TienMat + this.thuTienTamUng.ChuyenKhoan;
                    this.thuTienTamUng.Id = this.idYeuCauTiepNhan;
                    if (!this.flagCheckSeletedTienMat && !this.flagCheckSeletedChuyenKhoan && !this.flagCheckSeletedPos) {
                        this.notificationService.showError(this.commonThuTien.VuiLongChonHTTT);
                        return true;
                    }
                    if (this.kiemTraNhapSoTienTra()) {
                        this.notificationService.showError(this.commonThuTien.ErrorSoTienNhapKhongDung);
                        return true;
                    }
                    if (tongTienThu == 0) {
                        this.notificationService.showError(this.commonThuTien.ErrorKiemTraSoTienTamUng);
                        return true;
                    }
                    if (this.flagCheckSeletedTienMat) {
                        if (this.thuTienTamUng.TienBenhNhanDua != 0 && this.thuTienTamUng.TienBenhNhanDua < this.thuTienTamUng.TienMat) {
                            this.notificationService.showError(this.commonThuTien.ErrorSoTienBenhNhanDuaKhongDung);
                            return true;
                        }
                    }
                    if (this.thuTienTamUng.NoiDungThuTamUng == "") {
                        this.validationErrors.push({
                            Message: this.commonThuTien.ErrorNoiDungThuTamUng,
                            Field: this.commonThuTien.NoiDungThuTamUng,
                        });
                        return true;
                    }
                    // NGUYỄN VĂN TÈO
                    var soTienBenhNhanTra = tongTienThu;
                    var hoten = this.HoTenBenhNhan;
                    var duaLaiBenhNhan = false;
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog
                        .open(_common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_8__["ThongTinDichVuChuaDuocXacNhanComponent"], {
                        disableClose: false,
                        width: "800px",
                        data: { soTienBenhNhanTra: soTienBenhNhanTra, hoten: hoten, duaLaiBenhNhan: duaLaiBenhNhan },
                    })
                        .afterClosed()
                        .subscribe(function (r) {
                        if (r == "Yes") {
                            self.apiService.post("ThuNgan/ThuTienTamUng", _this.thuTienTamUng).subscribe(function (res) {
                                _this.notificationService.showSuccess(_this.commonThuTien.ShowTienTamUngThanhCong);
                                _this.bindDataDefeault();
                                //====================Checked res thành công tra id check id  ====================
                                _this.getSoDuTaiKhoanBenhNhan(_this.idYeuCauTiepNhan);
                                if (res != 0) {
                                    if (res != null && r.res != 0) {
                                        //====================Chon thông tin tương ứng ta show modal và in phiếu ====================
                                        var tk_1 = res;
                                        _this.dialog
                                            .open(_common_xac_nhan_in_truc_tiep_xac_nhan_in_truc_tiep_component__WEBPACK_IMPORTED_MODULE_7__["XacNhanInTrucTiepComponent"], {
                                            disableClose: true,
                                            width: "400px",
                                            data: "ThuTamUng",
                                        })
                                            .afterClosed()
                                            .subscribe(function (resulttamung) {
                                            if (resulttamung == "Yes") {
                                                _this.inPhieuPdf(tk_1, "InPhieuThuTamUng");
                                            }
                                            else {
                                                _this.router.navigate(["/danh-sach-thu-dich-vu"], {
                                                    queryParamsHandling: "preserve",
                                                });
                                            }
                                        });
                                    }
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                ChiTietThuTienTamUngComponent.prototype.inPhieuPdf = function (taiKhoanThuId, loaiTypes) {
                    var _this = this;
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: 'Đang tải...' }
                    });
                    var idYeuCauTiepNhan = this.idYeuCauTiepNhan;
                    var taiKhoanChiId = 0;
                    var phieuHoanUngIds = "";
                    this.dialog
                        .open(_thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_10__["ThongTinPhieuNgoaiTruPopupComponent"], {
                        disableClose: false,
                        width: "1000px",
                        data: { taiKhoanThuId: taiKhoanThuId, taiKhoanChiId: taiKhoanChiId, idYeuCauTiepNhan: idYeuCauTiepNhan, loaiTypes: loaiTypes, phieuHoanUngIds: phieuHoanUngIds, tamUng: true },
                    })
                        .afterClosed()
                        .subscribe(function () {
                        _this.router.navigate(["/danh-sach-thu-dich-vu"], {
                            queryParamsHandling: "preserve",
                        });
                        loading.close();
                    });
                };
                ChiTietThuTienTamUngComponent.prototype.bindDataDefeault = function () {
                    this.thuTienTamUng.TienMat = 0;
                    this.thuTienTamUng.POS = 0;
                    this.thuTienTamUng.ChuyenKhoan = 0;
                    this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    this.thuTienTamUng.TienBenhNhanDua = 0;
                    this.setDefeautTienMat = [this.commonThuTien.TienMat];
                };
                ChiTietThuTienTamUngComponent.prototype.onValueChangeSoTienTamUng = function (ev) {
                    this.thuTienTamUng.TienMat = 0;
                    this.thuTienTamUng.POS = 0;
                    this.thuTienTamUng.ChuyenKhoan = 0;
                    this.thuTienTamUng.TienTraLaiBenhNhan = 0;
                    this.thuTienTamUng.TienBenhNhanDua = 0;
                    this.selectItem = [1];
                    if (this.flagCheckSeletedTienMat === true) {
                        this.thuTienTamUng.TienMat = ev;
                    }
                    if (this.flagCheckSeletedTienMat === false &&
                        this.flagCheckSeletedChuyenKhoan === true) {
                        this.thuTienTamUng.ChuyenKhoan = ev;
                    }
                    if (this.flagCheckSeletedChuyenKhoan == false &&
                        this.flagCheckSeletedPos === true) {
                        this.thuTienTamUng.POS = ev;
                    }
                };
                ChiTietThuTienTamUngComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 83 && event.ctrlKey) {
                        // ctrl + s
                        if (this.tabIndex == 0) {
                            this.ThuTienTamUng();
                        }
                        event.preventDefault();
                    }
                };
                return ChiTietThuTienTamUngComponent;
            }());
            ChiTietThuTienTamUngComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ChiTietThuTienTamUngComponent.prototype, "dataSourceChangedTamUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ChiTietThuTienTamUngComponent.prototype, "tienTrongTaiKhoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ChiTietThuTienTamUngComponent.prototype, "HoTenBenhNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ChiTietThuTienTamUngComponent.prototype, "SoTienThanhToanDV", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ChiTietThuTienTamUngComponent.prototype, "afterChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], ChiTietThuTienTamUngComponent.prototype, "keyEvent", null);
            ChiTietThuTienTamUngComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-chi-tiet-thu-tien-tam-ung",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chi-tiet-thu-tien-tam-ung.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chi-tiet-thu-tien-tam-ung.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.scss")).default]
                })
            ], ChiTietThuTienTamUngComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien-routing.module.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien-routing.module.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: ChoThuTienRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoThuTienRoutingModule", function () { return ChoThuTienRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _chi_tiet_cac_khoan_phai_thu_chi_tiet_cac_khoan_phai_thu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _danh_sach_thu_tien_benh_nhan_danh_sach_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.ts");
            /* harmony import */ var _thong_tin_chi_tiet_da_thu_thong_tin_chi_tiet_da_thu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.ts");
            var routes = [
                {
                    path: "",
                    component: _danh_sach_thu_tien_benh_nhan_danh_sach_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_7__["DanhSachThuTienNgoaiTruComponent"],
                    data: {
                        title: "Danh sách chờ thu phí",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].ThuNgan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View,
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]],
                },
                {
                    path: "thong-tin-chi-tiet-cho-thu-tien/:id",
                    component: _chi_tiet_cac_khoan_phai_thu_chi_tiet_cac_khoan_phai_thu_component__WEBPACK_IMPORTED_MODULE_3__["ChiTietCacKhoanPhaiThuComponent"],
                    data: {
                        title: "Thông tin chi tiết chờ thu ngân",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].ThuNgan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View,
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]],
                },
                {
                    path: "thong-tin-chi-tiet-da-thu-tien/:id",
                    component: _thong_tin_chi_tiet_da_thu_thong_tin_chi_tiet_da_thu_component__WEBPACK_IMPORTED_MODULE_8__["ThongTinChiTietDaThuComponent"],
                    data: {
                        title: "Chi tiết đã quyết toán",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].ThuNgan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View,
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]],
                },
            ];
            var ChoThuTienRoutingModule = /** @class */ (function () {
                function ChoThuTienRoutingModule() {
                }
                return ChoThuTienRoutingModule;
            }());
            ChoThuTienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], ChoThuTienRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: ChoThuTienModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoThuTienModule", function () { return ChoThuTienModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _cho_thu_tien_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cho-thu-tien-routing.module */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien-routing.module.ts");
            /* harmony import */ var _ds_chua_thu_tien_ds_chua_thu_tien_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ds-chua-thu-tien/ds-chua-thu-tien.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.ts");
            /* harmony import */ var _ds_da_thu_tien_ds_da_thu_tien_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ds-da-thu-tien/ds-da-thu-tien.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.ts");
            /* harmony import */ var _chi_tiet_cac_khoan_phai_thu_chi_tiet_cac_khoan_phai_thu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-cac-khoan-phai-thu/chi-tiet-cac-khoan-phai-thu.component.ts");
            /* harmony import */ var _chi_tiet_thu_tien_tam_ung_chi_tiet_thu_tien_tam_ung_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.ts");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _thong_tin_chung_benh_nhan_thong_tin_chung_benh_nhan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.ts");
            /* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/fesm2015/index.js");
            /* harmony import */ var _danh_sach_thu_tien_benh_nhan_danh_sach_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.ts");
            /* harmony import */ var _thong_tin_phieu_thu_ngoai_tru_thong_tin_phieu_thu_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.ts");
            /* harmony import */ var _danh_sach_da_thu_tien_benh_nhan_danh_sach_da_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.ts");
            /* harmony import */ var _danh_sach_cho_thu_tien_benh_nhan_danh_sach_cho_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.ts");
            /* harmony import */ var _common_ap_dung_miem_giam_cho_tung_dv_popup_ap_dung_miem_giam_cho_tung_dv_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component.ts");
            /* harmony import */ var _common_ap_dung_miem_giam_cho_tung_dv_view_popup_ap_dung_miem_giam_cho_tung_dv_view_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component.ts");
            /* harmony import */ var _noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../noi-tru/cho-thu-tien/cho-thu-tien.module */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.module.ts");
            /* harmony import */ var _thong_tin_chi_tiet_da_thu_thong_tin_chi_tiet_da_thu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.ts");
            /* harmony import */ var _common_xac_nhan_in_truc_tiep_xac_nhan_in_truc_tiep_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/xac-nhan-in-truc-tiep/xac-nhan-in-truc-tiep.component.ts");
            /* harmony import */ var _common_xac_nhan_phieu_thu_xac_nhan_phieu_thu_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/xac-nhan-phieu-thu/xac-nhan-phieu-thu.component.ts");
            /* harmony import */ var _common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/thong-tin-dich-vu-chua-duoc-xac-nhan/thong-tin-dich-vu-chua-duoc-xac-nhan.component.ts");
            /* harmony import */ var _danh_sach_goi_bhyt_chua_quyet_toan_danh_sach_goi_bhyt_chua_quyet_toan_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.ts");
            /* harmony import */ var _dich_vu_khuyen_mai_kem_theo_goi_dich_vu_khuyen_mai_kem_theo_goi_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.ts");
            /* harmony import */ var _thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.ts");
            /* harmony import */ var _danh_sach_thu_phi_ngoai_tru_danh_sach_thu_phi_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.ts");
            var ChoThuTienModule = /** @class */ (function () {
                function ChoThuTienModule() {
                }
                return ChoThuTienModule;
            }());
            ChoThuTienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _danh_sach_cho_thu_tien_benh_nhan_danh_sach_cho_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_25__["DanhSachThuNganChoThuTienComponent"],
                        _danh_sach_thu_phi_ngoai_tru_danh_sach_thu_phi_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_36__["DanhSachThuPhiNgoaiTruComponent"],
                        _ds_chua_thu_tien_ds_chua_thu_tien_component__WEBPACK_IMPORTED_MODULE_14__["DsChuaThuTienComponent"],
                        _ds_da_thu_tien_ds_da_thu_tien_component__WEBPACK_IMPORTED_MODULE_15__["DsDaThuTienComponent"],
                        _chi_tiet_cac_khoan_phai_thu_chi_tiet_cac_khoan_phai_thu_component__WEBPACK_IMPORTED_MODULE_16__["ChiTietCacKhoanPhaiThuComponent"],
                        _chi_tiet_thu_tien_tam_ung_chi_tiet_thu_tien_tam_ung_component__WEBPACK_IMPORTED_MODULE_17__["ChiTietThuTienTamUngComponent"],
                        _thong_tin_chung_benh_nhan_thong_tin_chung_benh_nhan_component__WEBPACK_IMPORTED_MODULE_20__["ThongTinChungBenhNhanComponent"],
                        _danh_sach_thu_tien_benh_nhan_danh_sach_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_22__["DanhSachThuTienNgoaiTruComponent"],
                        _thong_tin_phieu_thu_ngoai_tru_thong_tin_phieu_thu_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_23__["ThongTinPhieuThuNgoaiTruComponent"],
                        _danh_sach_da_thu_tien_benh_nhan_danh_sach_da_thu_tien_benh_nhan_component__WEBPACK_IMPORTED_MODULE_24__["DanhSachThuNganDaThuTienBenhNhanComponent"],
                        _thong_tin_chi_tiet_da_thu_thong_tin_chi_tiet_da_thu_component__WEBPACK_IMPORTED_MODULE_29__["ThongTinChiTietDaThuComponent"],
                        _danh_sach_goi_bhyt_chua_quyet_toan_danh_sach_goi_bhyt_chua_quyet_toan_component__WEBPACK_IMPORTED_MODULE_33__["GoiBHYTChuaQuyetToanComponent"],
                        _dich_vu_khuyen_mai_kem_theo_goi_dich_vu_khuyen_mai_kem_theo_goi_component__WEBPACK_IMPORTED_MODULE_34__["DichVuKhuyenMaiKemTheoGoi"],
                        _thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_35__["ThongTinPhieuNgoaiTruPopupComponent"]
                    ],
                    imports: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                        _cho_thu_tien_routing_module__WEBPACK_IMPORTED_MODULE_13__["ChoThuTienRoutingModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                        _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__["DropDownsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                        _noi_tru_cho_thu_tien_cho_thu_tien_module__WEBPACK_IMPORTED_MODULE_28__["ChoThuTienNoiTruModule"],
                    ],
                    entryComponents: [
                        _common_thong_tin_dich_vu_chua_duoc_xac_nhan_thong_tin_dich_vu_chua_duoc_xac_nhan_component__WEBPACK_IMPORTED_MODULE_32__["ThongTinDichVuChuaDuocXacNhanComponent"],
                        _common_xac_nhan_phieu_thu_xac_nhan_phieu_thu_component__WEBPACK_IMPORTED_MODULE_31__["XacNhanPhieuThuComponent"],
                        _common_xac_nhan_in_truc_tiep_xac_nhan_in_truc_tiep_component__WEBPACK_IMPORTED_MODULE_30__["XacNhanInTrucTiepComponent"],
                        _common_ap_dung_miem_giam_cho_tung_dv_popup_ap_dung_miem_giam_cho_tung_dv_popup_component__WEBPACK_IMPORTED_MODULE_26__["ApDungMiemGiamChoTungDichVuComponent"],
                        _common_ap_dung_miem_giam_cho_tung_dv_view_popup_ap_dung_miem_giam_cho_tung_dv_view_popup_component__WEBPACK_IMPORTED_MODULE_27__["MiemGiamTheoDVComponent"],
                        _dich_vu_khuyen_mai_kem_theo_goi_dich_vu_khuyen_mai_kem_theo_goi_component__WEBPACK_IMPORTED_MODULE_34__["DichVuKhuyenMaiKemTheoGoi"],
                        _thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_35__["ThongTinPhieuNgoaiTruPopupComponent"]
                    ],
                })
            ], ChoThuTienModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: red;\n}\n\n.text-color-blue {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1jaG8tdGh1LXRpZW4tYmVuaC1uaGFuL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGh1LWNoaVxcdGh1LWNoaS12aWVuLXBoaVxcbmdvYWktdHJ1XFxjaG8tdGh1LXRpZW5cXGRhbmgtc2FjaC1jaG8tdGh1LXRpZW4tYmVuaC1uaGFuXFxkYW5oLXNhY2gtY2hvLXRodS10aWVuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1jaG8tdGh1LXRpZW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8tdGh1LXRpZW4tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1jaG8tdGh1LXRpZW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1jaG8tdGh1LXRpZW4tYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4udGV4dC1jb2xvci1ibHVlIHtcbiAgY29sb3I6IGJsdWU7XG59IiwiLnRleHQtY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4udGV4dC1jb2xvci1ibHVlIHtcbiAgY29sb3I6IGJsdWU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: DanhSachThuNganChoThuTienComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachThuNganChoThuTienComponent", function () { return DanhSachThuNganChoThuTienComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/expand-more */ "./node_modules/@iconify/icons-ic/expand-more.js");
            /* harmony import */ var _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__);
            var DanhSachThuNganChoThuTienComponent = /** @class */ (function () {
                function DanhSachThuNganChoThuTienComponent(router, location, route, apiService, notificationService, authService, dialog) {
                    this.router = router;
                    this.location = location;
                    this.route = route;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.loaiThanhToan = "0";
                    this.kiemTraDanhSachThanhToan = true;
                    this.kiemTraDanhSachDaThanhToan = false;
                    this._pageSize = 20;
                    this.allDaThuChuaThu = true;
                    this.dathu = true;
                    this.chuaThu = true;
                    this.timKiemThongTinBenhNhan = {};
                    this.STT = 1;
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["CommonThuTien"]();
                    this.trangThaiThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiThuTien"]();
                    this.gridThuNganColumns = [];
                    this.gridThuNganChoThuPhiColumns = [];
                    this.gridThuNganChoThuDaThuPhiColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icExpandMore = _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTienTamChoDong = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTienDefault = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.showCancelSearch = false;
                    this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
                    this.isScanF1 = false;
                    this.additionalSearchString = null;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.showTrangThaiTN = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.baseRoute = "/danh-sach-thu-dich-vu";
                    this.keyCode = "Enter";
                    this.sortConfig = [
                        {
                            field: "ChuaThu",
                            dir: "desc",
                        },
                    ];
                }
                DanhSachThuNganChoThuTienComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].ThuNgan;
                    this.listTagSearch = new Array();
                    var dateNow = new Date();
                    this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
                        this.choThuTien.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.FromDate = null;
                    }
                    if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
                        this.choThuTien.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.ToDate = null;
                    }
                    this.backWithSearch();
                    this.gridThuNganColumns = [
                        { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
                        { Field: "MaBN", Title: "Mã NB", Width: 70, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", MinWidth: 90, Sortable: true },
                        { Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true },
                        { Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true },
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true },
                        { Field: "YeuCauNhapVien", Title: "Có Nhập Viện", Width: 150, Sortable: true, Template: this.coNhapVienTemplate },
                        { Field: "SoTienTamUng", Title: "Số tiền đã tạm ứng", Width: 150, Sortable: true, Template: this.templateTextSoTienDaTamUng },
                        { Field: "SoTienBNDaTT", Title: "Số tiền đã thu", Sortable: false, Width: 200, Template: this.templateTextSoTienDaXacNhan },
                        { Field: "SoTienBNPhaiTT", Title: "Số tiền phải thu", Sortable: false, Width: 200, Template: this.templateTextSoTienChoXacNhan },
                        { Field: "ThoiDiemTiepNhanDisplay", Title: "Tiếp nhận lúc", Sortable: true, Width: 150 },
                    ];
                    this.showTrangThaiThuNgan();
                };
                DanhSachThuNganChoThuTienComponent.prototype.backWithSearch = function () {
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined) {
                        this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
                    }
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan") != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan");
                        this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                        this.choThuTien = JSON.parse(this.additionalSearchString);
                        if (this.choThuTien.ThoiDiemTiepNhanTuFormat != undefined && this.choThuTien.ThoiDiemTiepNhanTuFormat != null && this.choThuTien.ThoiDiemTiepNhanTuFormat != "") {
                            this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(this.choThuTien.ThoiDiemTiepNhanTuFormat);
                        }
                        if (this.choThuTien.ThoiDiemTiepNhanDenFormat != undefined && this.choThuTien.ThoiDiemTiepNhanDenFormat != null && this.choThuTien.ThoiDiemTiepNhanDenFormat != "") {
                            this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(this.choThuTien.ThoiDiemTiepNhanDenFormat);
                        }
                        this.searchString = this.choThuTien.SearchString;
                        if (this.gridList != undefined) {
                            this.gridList.searchString = this.choThuTien.SearchString;
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.showTrangThaiThuNgan = function () {
                    if (this.choThuTien.ChuaThu)
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    this.updateSreachString();
                };
                DanhSachThuNganChoThuTienComponent.prototype.getInputSearchValue = function (obj, keyValue, titleValue) {
                    var index = this.listTagSearch.findIndex(function (x) { return x.Key == keyValue; });
                    if (obj) {
                        var valueFormat = undefined;
                        if (obj) {
                            valueFormat = obj;
                            var item = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TagItem"]();
                            item.Key = keyValue;
                            item.Value = valueFormat;
                            item.Title = titleValue;
                            this.listTagSearch.push(item);
                        }
                        else {
                            this.listTagSearch[index].Value = valueFormat;
                        }
                    }
                    else {
                        if (index != -1) {
                            this.listTagSearch.splice(index, 1);
                        }
                    }
                    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
                };
                DanhSachThuNganChoThuTienComponent.prototype.updateSreachString = function () {
                    var queryString = JSON.stringify(this.choThuTien);
                    this.queryStrings = queryString;
                    if (this.gridList != undefined) {
                        this.gridList.searchString = this.choThuTien.SearchString;
                        this.gridList.search();
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.thoiDiemTNChange = function () {
                    this.TimkiemNangCao();
                };
                DanhSachThuNganChoThuTienComponent.prototype.cancelSearch = function () {
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.listTagSearch = new Array();
                    this.listTagShowOnHeader = new Array();
                    var queryString = JSON.stringify(this.choThuTien);
                    if (this.gridList != undefined) {
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    this.showCancelSearch = false;
                };
                DanhSachThuNganChoThuTienComponent.prototype.closeMenu = function () {
                    this.choThuTien.ChuaThu = false;
                    this.listTagShowOnHeader = [];
                    this.listTagSearch = [];
                    if (this.choThuTienTamChoDong.ChuaThu == true) {
                        this.choThuTien.ChuaThu = true;
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + "?loaiThanhToan=0");
                    this.trangThaiCommon();
                    var searchText = this.searchString != undefined ? this.searchString : "";
                    this.choThuTien.SearchString = searchText;
                    if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
                        this.choThuTien.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.FromDate = null;
                    }
                    if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
                        this.choThuTien.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.ToDate = null;
                    }
                    this.choThuTien.TabActive = 1;
                    var queryString = JSON.stringify(this.choThuTien);
                    if (this.gridList != undefined) {
                        this.gridList.searchString = searchText;
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DanhSachThuNganChoThuTienComponent.prototype.Timkiem = function () {
                    this.trangThaiCommon();
                    this.choThuTien.SearchString = this.searchString;
                    this.choThuTien.TabActive = 1;
                    var queryString = JSON.stringify(this.choThuTien);
                    var QueryString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                        this.showTrangThaiTN = true;
                    }
                    if (this.gridList != undefined) {
                        this.gridList.searchString = QueryString;
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DanhSachThuNganChoThuTienComponent.prototype.searchChanges = function (event) {
                    //xóa sreach trước đó
                    var self = this;
                    if (this.timeoutSearchChange != null) {
                        clearTimeout(this.timeoutSearchChange);
                        this.timeoutSearchChange = null;
                    }
                    this.timeoutSearchChange = setTimeout(function () {
                        if (event !== undefined && event !== null && event.endsWith("@")) {
                            var dataTimKiem = event.split("|");
                            if (dataTimKiem.length > 1) {
                                self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                                self.searchString = dataTimKiem[0];
                            }
                            else {
                                self.searchString = event.slice(0, -1);
                                self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                            }
                            self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
                        }
                        if (event != undefined && (event == null || event == "")) {
                            self.gridList.searchString = null;
                            //self.TimkiemNangCao();
                        }
                    }, 100);
                };
                DanhSachThuNganChoThuTienComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    if (this.gridList != undefined) {
                        this.gridList.search();
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.trangThaiCommon = function () {
                    if (this.choThuTien.ChuaThu === false) {
                        this.choThuTien.ChuaThu = true;
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    }
                    this.choThuTienTamChoDong.ChuaThu = false;
                    if (this.choThuTien.ChuaThu)
                        this.choThuTienTamChoDong.ChuaThu = true;
                    if (this.choThuTien.NamSinh != null)
                        this.choThuTien.NamSinh = Math.round(this.choThuTien.NamSinh);
                    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
                };
                DanhSachThuNganChoThuTienComponent.prototype.cancelTagSearch = function (tagKey) {
                    if (tagKey === "chothu") {
                        this.choThuTien.ChuaThu = false;
                    }
                    if (tagKey != null && tagKey != undefined) {
                        this.listTagSearch.splice(this.listTagSearch.findIndex(function (x) { return x.Key == tagKey; }), 1);
                        this.listTagShowOnHeader.splice(this.listTagShowOnHeader.findIndex(function (x) { return x.Key == tagKey; }), 1);
                        if (this.listTagSearch.length == 0) {
                            this.cancelSearch();
                            return;
                        }
                        for (var item in this.choThuTien) {
                            if (item == tagKey) {
                                this.choThuTien[item] = this.choThuTienDefault[item];
                            }
                        }
                        this.TimkiemNangCao();
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.checkTrangThai = function (event, type) {
                    if (type == 1) {
                        this.choThuTien.ChuaThu = event;
                        this.router.navigateByUrl("/danh-sach-thu-dich-vu?loaiThanhToan=" + type);
                    }
                    this.TimkiemNangCao();
                };
                DanhSachThuNganChoThuTienComponent.prototype.routerLink = function (id, dathu) {
                    this.choThuTien.TabActive = 1;
                    var queryString = JSON.stringify(this.choThuTien);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + id + "?loaiThanhToan=" + 1);
                };
                DanhSachThuNganChoThuTienComponent.prototype.thongTinChiTietThanhToan = function (id, dathu) {
                    this.routerLink(id, dathu);
                };
                DanhSachThuNganChoThuTienComponent.prototype.extEnterChangePage = function (data) {
                    this.routerLink(data.Id, data);
                };
                DanhSachThuNganChoThuTienComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.changeQR = function ($event) {
                    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
                        this.modelQRCode = $event;
                        var dataTimKiem = $event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                        }
                        else {
                            this.searchString = $event.slice(0, -1);
                            this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
                        }
                        this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                DanhSachThuNganChoThuTienComponent.prototype.getThongTinYeuCauBenhNhan = function (timKiemThongTinBenhNhan) {
                    var _this = this;
                    this.apiService.post("ThuNgan/GetThuNganByMaBNVaMaTT/", timKiemThongTinBenhNhan).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + resultData.Id + "?loaiThanhToan=" + 1);
                        }
                        else {
                            _this.notificationService.showError(_this.commonThuTien.ErrorKhongTimThayThongTin);
                        }
                    });
                };
                DanhSachThuNganChoThuTienComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
                        var queryString = JSON.stringify(this.choThuTien);
                        var searchText = self.searchString != undefined ? self.searchString : "";
                        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].convertSpecialXML(searchText);
                        searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
                        searchText = btoa(unescape(encodeURIComponent("<AdvancedQueryParameters>" + searchText + "</AdvancedQueryParameters>")));
                        var queryObject = {
                            skip: 0,
                            modifiedBy: 0,
                            take: 50,
                            searchString: searchText,
                            additionalSearchString: queryString,
                            searchTerms: searchText,
                            sort: self.sortConfig,
                            lazyLoadPage: true,
                        };
                        self.apiService.postExportExcel("ThuNgan/ExportThuNgan", queryObject).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "ThuNgan" + dateTimeNow.getFullYear() + ".xlsx");
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachThuNganChoThuTienComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang xuất excel..." },
                    });
                };
                DanhSachThuNganChoThuTienComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DanhSachThuNganChoThuTienComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                return DanhSachThuNganChoThuTienComponent;
            }());
            DanhSachThuNganChoThuTienComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], { static: false })
            ], DanhSachThuNganChoThuTienComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienChoXacNhan", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "templateTextSoTienChoXacNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienDaXacNhan", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "templateTextSoTienDaXacNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienDaTamUng", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "templateTextSoTienDaTamUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("coNhapVienTemplate", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "coNhapVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoDuTK", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "templateTextSoDuTK", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateSTT", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "templateSTT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridList", { static: false })
            ], DanhSachThuNganChoThuTienComponent.prototype, "gridList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("maTNTemplate", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "maTNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
            ], DanhSachThuNganChoThuTienComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], DanhSachThuNganChoThuTienComponent.prototype, "keyEvent", null);
            DanhSachThuNganChoThuTienComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-danh-sach-cho-thu-tien-benh-nhan",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-cho-thu-tien-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-cho-thu-tien-benh-nhan.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-cho-thu-tien-benh-nhan/danh-sach-cho-thu-tien-benh-nhan.component.scss")).default]
                })
            ], DanhSachThuNganChoThuTienComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: red;\n}\n\n.text-color-blue {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1kYS10aHUtdGllbi1iZW5oLW5oYW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcZGFuaC1zYWNoLWRhLXRodS10aWVuLWJlbmgtbmhhblxcZGFuaC1zYWNoLWRhLXRodS10aWVuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1kYS10aHUtdGllbi1iZW5oLW5oYW4vZGFuaC1zYWNoLWRhLXRodS10aWVuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3RodS1jaGktdmllbi1waGkvbmdvYWktdHJ1L2Noby10aHUtdGllbi9kYW5oLXNhY2gtZGEtdGh1LXRpZW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC1kYS10aHUtdGllbi1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50ZXh0LWNvbG9yLWJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn0iLCIudGV4dC1jb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50ZXh0LWNvbG9yLWJsdWUge1xuICBjb2xvcjogYmx1ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: DanhSachThuNganDaThuTienBenhNhanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachThuNganDaThuTienBenhNhanComponent", function () { return DanhSachThuNganDaThuTienBenhNhanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/expand-more */ "./node_modules/@iconify/icons-ic/expand-more.js");
            /* harmony import */ var _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21__);
            var DanhSachThuNganDaThuTienBenhNhanComponent = /** @class */ (function () {
                function DanhSachThuNganDaThuTienBenhNhanComponent(router, location, route, apiService, notificationService, authService, dialog) {
                    this.router = router;
                    this.location = location;
                    this.route = route;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.loaiThanhToan = "0";
                    this.kiemTraDanhSachThanhToan = true;
                    this.kiemTraDanhSachDaThanhToan = false;
                    this._pageSize = 20;
                    this.allDaThuChuaThu = true;
                    this.dathu = true;
                    this.chuaThu = true;
                    this.timKiemThongTinBenhNhan = {};
                    this.STT = 1;
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["CommonThuTien"]();
                    this.trangThaiThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiThuTien"]();
                    this.gridThuNganColumns = [];
                    this.gridThuNganChoThuPhiColumns = [];
                    this.gridThuNganChoThuDaThuPhiColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icExpandMore = _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTienTamChoDong = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTienDefault = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.showCancelSearch = false;
                    this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
                    this.isScanF1 = false;
                    this.additionalSearchString = null;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.showTrangThaiTN = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.baseRoute = "/danh-sach-thu-dich-vu";
                    this.keyCode = "Enter";
                    this.sortConfig = [
                        {
                            field: "Id",
                            dir: "desc",
                        },
                    ];
                }
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].ThuNgan;
                    this.listTagSearch = new Array();
                    var dateNow = new Date();
                    this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
                        this.choThuTien.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.FromDate = null;
                    }
                    if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
                        this.choThuTien.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.ToDate = null;
                    }
                    this.backWithSearch();
                    this.gridThuNganColumns = [
                        { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
                        { Field: "MaBN", Title: "Mã NB", Width: 70, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", MinWidth: 90, Sortable: true },
                        { Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true },
                        { Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true },
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true },
                        { Field: "SoTienTamUng", Title: "Số tiền đã tạm ứng", Width: 150, Sortable: true, Template: this.templateTextSoTienDaTamUng },
                        { Field: "SoTienBNDaTT", Title: "Số tiền đã thu", Sortable: false, Width: 200, Template: this.templateTextSoTienDaXacNhan },
                        { Field: "ThoiDiemTiepNhanDisplay", Title: "Tiếp nhận lúc", Sortable: true, Width: 150 },
                    ];
                    this.showTrangThaiThuNgan();
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.backWithSearch = function () {
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined) {
                        this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
                    }
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan") != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan");
                        this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                        this.choThuTien = JSON.parse(this.additionalSearchString);
                        if (this.choThuTien.ThoiDiemTiepNhanTuFormat != undefined && this.choThuTien.ThoiDiemTiepNhanTuFormat != null && this.choThuTien.ThoiDiemTiepNhanTuFormat != "") {
                            this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(this.choThuTien.ThoiDiemTiepNhanTuFormat);
                        }
                        if (this.choThuTien.ThoiDiemTiepNhanDenFormat != undefined && this.choThuTien.ThoiDiemTiepNhanDenFormat != null && this.choThuTien.ThoiDiemTiepNhanDenFormat != "") {
                            this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(this.choThuTien.ThoiDiemTiepNhanDenFormat);
                        }
                        this.searchString = this.choThuTien.SearchString;
                        if (this.gridList != undefined) {
                            this.gridList.searchString = this.choThuTien.SearchString;
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.showTrangThaiThuNgan = function () {
                    if (this.choThuTien.DaThu)
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    this.updateSreachString();
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.getInputSearchValue = function (obj, keyValue, titleValue) {
                    var index = this.listTagSearch.findIndex(function (x) { return x.Key == keyValue; });
                    if (obj) {
                        var valueFormat = undefined;
                        if (obj) {
                            valueFormat = obj;
                            var item = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TagItem"]();
                            item.Key = keyValue;
                            item.Value = valueFormat;
                            item.Title = titleValue;
                            this.listTagSearch.push(item);
                        }
                        else {
                            this.listTagSearch[index].Value = valueFormat;
                        }
                    }
                    else {
                        if (index != -1) {
                            this.listTagSearch.splice(index, 1);
                        }
                    }
                    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.updateSreachString = function () {
                    var queryString = JSON.stringify(this.choThuTien);
                    this.queryStrings = queryString;
                    if (this.gridList != undefined) {
                        this.gridList.searchString = this.choThuTien.SearchString;
                        this.gridList.search();
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.thoiDiemTNChange = function () {
                    this.TimkiemNangCao();
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.cancelSearch = function () {
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.listTagSearch = new Array();
                    this.listTagShowOnHeader = new Array();
                    var queryString = JSON.stringify(this.choThuTien);
                    if (this.gridList != undefined) {
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    this.showCancelSearch = false;
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.closeMenu = function () {
                    this.choThuTien.DaThu = false;
                    this.listTagShowOnHeader = [];
                    this.listTagSearch = [];
                    if (this.choThuTienTamChoDong.DaThu == true) {
                        this.choThuTien.DaThu = true;
                        this.getInputSearchValue(true, "dathu", "Đã Thu");
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + "?loaiThanhToan=0");
                    this.trangThaiCommon();
                    var searchText = this.searchString != undefined ? this.searchString : "";
                    this.choThuTien.SearchString = searchText;
                    if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
                        this.choThuTien.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.FromDate = null;
                    }
                    if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
                        this.choThuTien.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.ToDate = null;
                    }
                    this.choThuTien.TabActive = 2;
                    var queryString = JSON.stringify(this.choThuTien);
                    if (this.gridList != undefined) {
                        this.gridList.searchString = searchText;
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.Timkiem = function () {
                    this.trangThaiCommon();
                    this.choThuTien.SearchString = this.searchString;
                    this.choThuTien.TabActive = 2;
                    var queryString = JSON.stringify(this.choThuTien);
                    var QueryString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                        this.showTrangThaiTN = true;
                    }
                    if (this.gridList != undefined) {
                        this.gridList.searchString = QueryString;
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.searchChanges = function (event) {
                    //xóa sreach trước đó
                    var self = this;
                    if (this.timeoutSearchChange != null) {
                        clearTimeout(this.timeoutSearchChange);
                        this.timeoutSearchChange = null;
                    }
                    this.timeoutSearchChange = setTimeout(function () {
                        if (event !== undefined && event !== null && event.endsWith("@")) {
                            var dataTimKiem = event.split("|");
                            if (dataTimKiem.length > 1) {
                                self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                                self.searchString = dataTimKiem[0];
                            }
                            else {
                                self.searchString = event.slice(0, -1);
                                self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                            }
                            self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
                        }
                        if (event != undefined && (event == null || event == "")) {
                            self.gridList.searchString = null;
                            //self.TimkiemNangCao();
                        }
                    }, 100);
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    if (this.gridList != undefined) {
                        this.gridList.search();
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.trangThaiCommon = function () {
                    if (this.choThuTien.DaThu === false) {
                        this.choThuTien.DaThu = true;
                        this.getInputSearchValue(true, "dathu", "Đã Thu");
                    }
                    this.choThuTienTamChoDong.DaThu = false;
                    if (this.choThuTien.DaThu)
                        this.choThuTienTamChoDong.DaThu = true;
                    if (this.choThuTien.NamSinh != null)
                        this.choThuTien.NamSinh = Math.round(this.choThuTien.NamSinh);
                    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.cancelTagSearch = function (tagKey) {
                    if (tagKey === "dathu") {
                        this.choThuTien.DaThu = false;
                    }
                    if (tagKey != null && tagKey != undefined) {
                        this.listTagSearch.splice(this.listTagSearch.findIndex(function (x) { return x.Key == tagKey; }), 1);
                        this.listTagShowOnHeader.splice(this.listTagShowOnHeader.findIndex(function (x) { return x.Key == tagKey; }), 1);
                        if (this.listTagSearch.length == 0) {
                            this.cancelSearch();
                            return;
                        }
                        for (var item in this.choThuTien) {
                            if (item == tagKey) {
                                this.choThuTien[item] = this.choThuTienDefault[item];
                            }
                        }
                        this.TimkiemNangCao();
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.checkTrangThai = function (event, type) {
                    if (type == 1) {
                        this.choThuTien.DaThu = event;
                        this.router.navigateByUrl("/danh-sach-thu-dich-vu?loaiThanhToan=" + type);
                    }
                    this.TimkiemNangCao();
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.routerLink = function (id, dathu) {
                    this.choThuTien.TabActive = 2;
                    var queryString = JSON.stringify(this.choThuTien);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_10__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-da-thu-tien/" + id + "?loaiThanhToan=" + 1);
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.thongTinChiTietThanhToan = function (id, dathu) {
                    this.routerLink(id, dathu);
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.extEnterChangePage = function (data) {
                    this.routerLink(data.Id, data);
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.changeQR = function ($event) {
                    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
                        this.modelQRCode = $event;
                        var dataTimKiem = $event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                        }
                        else {
                            this.searchString = $event.slice(0, -1);
                            this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
                        }
                        this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.getThongTinYeuCauBenhNhan = function (timKiemThongTinBenhNhan) {
                    var _this = this;
                    this.apiService.post("ThuNgan/GetThuNganByMaBNVaMaTT/", timKiemThongTinBenhNhan).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-da-thu-tien/" + resultData.Id + "?loaiThanhToan=" + 1);
                        }
                        else {
                            _this.notificationService.showError(_this.commonThuTien.ErrorKhongTimThayThongTin);
                        }
                    });
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
                        var queryString = JSON.stringify(this.choThuTien);
                        var searchText = self.searchString != undefined ? self.searchString : "";
                        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].convertSpecialXML(searchText);
                        searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
                        searchText = btoa(unescape(encodeURIComponent("<AdvancedQueryParameters>" + searchText + "</AdvancedQueryParameters>")));
                        var queryObject = {
                            skip: 0,
                            modifiedBy: 0,
                            take: 50,
                            searchString: searchText,
                            additionalSearchString: queryString,
                            searchTerms: searchText,
                            sort: self.sortConfig,
                            lazyLoadPage: true,
                        };
                        self.apiService.postExportExcel("ThuNgan/ExportThuNgan", queryObject).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "ThuNgan" + dateTimeNow.getFullYear() + ".xlsx");
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang xuất excel..." },
                    });
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DanhSachThuNganDaThuTienBenhNhanComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                return DanhSachThuNganDaThuTienBenhNhanComponent;
            }());
            DanhSachThuNganDaThuTienBenhNhanComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], { static: false })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienChoXacNhan", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "templateTextSoTienChoXacNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienDaXacNhan", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "templateTextSoTienDaXacNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienDaTamUng", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "templateTextSoTienDaTamUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoDuTK", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "templateTextSoDuTK", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateSTT", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "templateSTT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridList", { static: false })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "gridList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("maTNTemplate", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "maTNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], DanhSachThuNganDaThuTienBenhNhanComponent.prototype, "keyEvent", null);
            DanhSachThuNganDaThuTienBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-danh-sach-da-thu-tien-benh-nhan",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-da-thu-tien-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-da-thu-tien-benh-nhan.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-da-thu-tien-benh-nhan/danh-sach-da-thu-tien-benh-nhan.component.scss")).default]
                })
            ], DanhSachThuNganDaThuTienBenhNhanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.scss": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.scss ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".size-icon {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n}\n\n.float_right {\n  float: right;\n}\n\n.color-green {\n  color: green;\n}\n\n.color-red {\n  color: red;\n}\n\n.reverse-ellipsis.r {\n  text-align: right;\n  direction: inherit;\n}\n\n.yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n\n.red-text {\n  color: red;\n}\n\n.green-text {\n  color: green;\n}\n\n.size-icon-duoc-bhyt {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  line-height: 20px;\n  border-radius: 7px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  right: -4px;\n  top: 6px;\n  margin: 0;\n}\n\n.size-icon-duoc-bhyt {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  line-height: 20px;\n  border-radius: 7px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  right: -4px;\n  top: 6px;\n  margin: 0;\n}\n\n.mouse-cursor {\n  cursor: pointer;\n}\n\n.reverse-ellipsis.r {\n  text-align: right;\n  direction: inherit;\n}\n\n.size-icon-khong-bhyt {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  line-height: 20px;\n  border-radius: 7px;\n  background-color: red;\n  color: #fff;\n  text-align: center;\n  right: -4px;\n  top: 6px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1nb2ktYmh5dC1jaHVhLXF1eWV0LXRvYW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcZGFuaC1zYWNoLWdvaS1iaHl0LWNodWEtcXV5ZXQtdG9hblxcZGFuaC1zYWNoLWdvaS1iaHl0LWNodWEtcXV5ZXQtdG9hbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC1nb2ktYmh5dC1jaHVhLXF1eWV0LXRvYW4vZGFuaC1zYWNoLWdvaS1iaHl0LWNodWEtcXV5ZXQtdG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vZGFuaC1zYWNoLWdvaS1iaHl0LWNodWEtcXV5ZXQtdG9hbi9kYW5oLXNhY2gtZ29pLWJoeXQtY2h1YS1xdXlldC10b2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemUtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbG9hdF9yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnJldmVyc2UtZWxsaXBzaXMuciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXJlY3Rpb246IGluaGVyaXQ7XG59XG5cbi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZWQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlbi10ZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2l6ZS1pY29uLWR1b2MtYmh5dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICByaWdodDogLTRweDtcbiAgdG9wOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNpemUtaWNvbi1kdW9jLWJoeXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IC00cHg7XG4gIHRvcDogNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5tb3VzZS1jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBpbmhlcml0O1xufVxuXG4uc2l6ZS1pY29uLWtob25nLWJoeXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiAtNHB4O1xuICB0b3A6IDZweDtcbiAgbWFyZ2luOiAwO1xufSIsIi5zaXplLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmxvYXRfcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBpbmhlcml0O1xufVxuXG4ueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVkLXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW4tdGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNpemUtaWNvbi1kdW9jLWJoeXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IC00cHg7XG4gIHRvcDogNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zaXplLWljb24tZHVvYy1iaHl0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiAtNHB4O1xuICB0b3A6IDZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubW91c2UtY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmV2ZXJzZS1lbGxpcHNpcy5yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogaW5oZXJpdDtcbn1cblxuLnNpemUtaWNvbi1raG9uZy1iaHl0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICByaWdodDogLTRweDtcbiAgdG9wOiA2cHg7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.ts": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.ts ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: GoiBHYTChuaQuyetToanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiBHYTChuaQuyetToanComponent", function () { return GoiBHYTChuaQuyetToanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var GoiBHYTChuaQuyetToanComponent = /** @class */ (function () {
                function GoiBHYTChuaQuyetToanComponent(route, apiService, authService, baseService, notificationService, dialog, location) {
                    this.route = route;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.baseService = baseService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.location = location;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].ThuNgan;
                    this.danhSachGoiCoBHYT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.thongTinCongTyBaoHiemTuNhans = [];
                    this.position = -1;
                    this.dataSourceChanged = false;
                    this.afterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.apDungCongNo = false;
                    this.afterChangedCongNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.luuTamChiPhiThanhCongTrongGoi = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.format = 'n2';
                    this.groups = [{
                            field: 'Nhom', aggregates: [
                                { field: 'SoTienQuyetToan', aggregate: 'sum' },
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'DonGiaBHYT', aggregate: 'sum' },
                                { field: 'BHYTThanhToan', aggregate: 'sum' },
                            ]
                        }];
                    this.dataSource = {
                        data: [],
                        total: 0,
                    };
                    this.state = {
                        group: this.groups,
                    };
                    this.gridColumns = [];
                    this.validationErrors = [];
                    this.goiChuaQuyetToanMarketing = [];
                    this.danhSachCongNoChoThus = [];
                    this.goibhyt = "goibhyt";
                    this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9___default.a;
                }
                GoiBHYTChuaQuyetToanComponent.prototype.ngOnChanges = function (changes) {
                    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
                    if (this.dataSourceChanged) {
                        this.getYeuCauGoiBenhNhan(this.yeuCauTiepNhanId);
                        this.afterChanged.emit();
                    }
                    if (this.apDungCongNo) {
                        this.bindChiaTienCongNo();
                        this.afterChangedCongNo.emit();
                    }
                };
                GoiBHYTChuaQuyetToanComponent.prototype.ngOnInit = function () {
                    if (this.yeuCauTiepNhanId != undefined && this.yeuCauTiepNhanId != null) {
                        this.getYeuCauGoiBenhNhan(this.yeuCauTiepNhanId);
                    }
                    this.gridColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 30, Sortable: false },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 100, Sortable: false, Template: this.tenGoiTemplate },
                        { Field: "LoaiGia", Title: "Loại Giá", Width: 70, Sortable: false },
                        { Field: "Soluong", Title: "SL", Width: 50, Sortable: false },
                        { Field: "DonGia", Title: "Đơn giá", Width: 50, Sortable: false, Template: this.donGiaTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 80, Sortable: false, Template: this.thanhTienTemplate },
                        { Field: "DonGiaBHYT", Title: "BHYT", Width: 80, Sortable: false, Template: this.donGiaBHYTTemplate, TemplateFooter: this.bhytGroupFooter },
                        { Field: "SoTienQuyetToan", Title: "Số Tiền quyết toán", Width: 150, Sortable: false, Template: this.soTienTraLaiBNTemplate, TemplateFooter: this.soTienTraLaiBNGroupFooter },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 130, Sortable: false },
                    ];
                };
                GoiBHYTChuaQuyetToanComponent.prototype.totalTongSoTienCongNo = function (field) {
                    if (this.goiChuaQuyetToanMarketing.length > 0) {
                        switch (field) {
                            case 'SoTienQuyetToan':
                                return this.goiChuaQuyetToanMarketing.reduce(function (sum, item) { return sum + item.SoTienQuyetToan; }, 0);
                        }
                    }
                };
                GoiBHYTChuaQuyetToanComponent.prototype.total = function (field) {
                    switch (field) {
                        case "SoTienQuyetToan":
                            return this.XuLyTotalForField("SoTienQuyetToan");
                            break;
                        case "ThanhTien":
                            return this.XuLyTotalForField("ThanhTien");
                            break;
                        case "DonGiaBHYT":
                            return this.XuLyTotalForField("DonGiaBHYT");
                            break;
                        case "BHYTThanhToan":
                            return this.XuLyTotalForField("BHYTThanhToan");
                            break;
                    }
                };
                GoiBHYTChuaQuyetToanComponent.prototype.XuLyTotalForField = function (field) {
                    var sum = 0;
                    this.goiChuaQuyetToanMarketing.forEach(function (element) {
                        if (element.CheckedDefault) {
                            switch (field) {
                                case "SoTienQuyetToan":
                                    sum = sum + element.SoTienQuyetToan;
                                    break;
                                case "ThanhTien":
                                    sum = sum + element.ThanhTien;
                                    break;
                                case "DonGiaBHYT":
                                    sum = sum + element.DonGiaBHYT;
                                    break;
                                case "BHYTThanhToan":
                                    sum = sum + element.BHYTThanhToan;
                                    break;
                            }
                        }
                    });
                    return sum;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.mapCongTyBHTN = function (responseThongTinBenhNhan) {
                    var danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["DanhSachCongNoChoThu"];
                    if (responseThongTinBenhNhan !== null && responseThongTinBenhNhan !== undefined) {
                        for (var index = 0; index < responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length; index++) {
                            var congNo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["CongNoChoThu"];
                            congNo.ViTri = index;
                            congNo.CongTyBaoHiemTuNhanId = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].Id;
                            congNo.TenCongTy = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].TenCongTy;
                            congNo.SoTienCongNoChoThu = 0;
                            danhSachCongNoChoThu.CongNoChoThus.push(congNo);
                        }
                    }
                    return danhSachCongNoChoThu;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.getYeuCauGoiBenhNhan = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var danhSachCongNoChoThu, responseThongTinBenhNhan, responseDanhSachThuPhiDichVuNoiTru, index, dsDanhSachCongNoChoThus, _loop_1, this_1, subIndex;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.showLoadingPopup();
                                    danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["DanhSachCongNoChoThu"];
                                    return [4 /*yield*/, this.baseService.getById(id).toPromise()];
                                case 1:
                                    responseThongTinBenhNhan = _a.sent();
                                    if (responseThongTinBenhNhan !== undefined && responseThongTinBenhNhan !== null)
                                        danhSachCongNoChoThu = this.mapCongTyBHTN(responseThongTinBenhNhan);
                                    if (!(responseThongTinBenhNhan != undefined && responseThongTinBenhNhan != null)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.apiService.post("ThuNgan/GetDataDichVuTrongGoiCoBHYTForGrid/" + id).toPromise()];
                                case 2:
                                    responseDanhSachThuPhiDichVuNoiTru = _a.sent();
                                    if (responseDanhSachThuPhiDichVuNoiTru != undefined && responseDanhSachThuPhiDichVuNoiTru != null) {
                                        this.dataSource.data = responseDanhSachThuPhiDichVuNoiTru.Data;
                                        this.goiChuaQuyetToanMarketing = responseDanhSachThuPhiDichVuNoiTru.Data;
                                        if (this.goiChuaQuyetToanMarketing.length > 0 && danhSachCongNoChoThu.CongNoChoThus.length > 0) {
                                            for (index = 0; index < this.goiChuaQuyetToanMarketing.length; index++) {
                                                dsDanhSachCongNoChoThus = this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus;
                                                this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus = [];
                                                _loop_1 = function (subIndex) {
                                                    var soTienCongNoChoThuByTheoCongTy = dsDanhSachCongNoChoThus.filter(function (c) { return c.CongTyBaoHiemTuNhanId == danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId; })
                                                        .reduce(function (sum, item) { return sum + item.SoTienCongNoChoThu; }, 0);
                                                    var congNoItem = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["CongNoChoThu"]();
                                                    congNoItem.CongTyBaoHiemTuNhanId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId;
                                                    congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu = soTienCongNoChoThuByTheoCongTy > 0 ? soTienCongNoChoThuByTheoCongTy : 0;
                                                    congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
                                                    congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;
                                                    this_1.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus.push(congNoItem);
                                                };
                                                this_1 = this;
                                                for (subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
                                                    _loop_1(subIndex);
                                                }
                                            }
                                            this.danhSachCongNoChoThus = [];
                                            this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
                                        }
                                    }
                                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_8__["process"])(this.goiChuaQuyetToanMarketing, this.state);
                                    this.goiChuaQuyetToanMarketing.filter(function (element) { return element.CheckedDefault == true; });
                                    this.danhSachGoiCoBHYT.emit(this.goiChuaQuyetToanMarketing);
                                    this.setRemoveGroupFooterOnly();
                                    this.closeAllDialogs();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                GoiBHYTChuaQuyetToanComponent.prototype.setRemoveGroupFooterOnly = function () {
                    setTimeout(function () {
                        if (jQuery("#danhSachGoiDVGrid .k-group-footer").length == 1) {
                            jQuery("#danhSachGoiDVGrid .k-group-footer").hide();
                        }
                        else {
                            jQuery("#danhSachGoiDVGrid .k-group-footer").show();
                        }
                    }, 100);
                };
                GoiBHYTChuaQuyetToanComponent.prototype.totalCongno = function (field, group) {
                    var sumItemCongNo = 0;
                    group.items.forEach(function (element) {
                        element.DanhSachCongNoChoThus.forEach(function (cn) {
                            if (cn.CongTyBaoHiemTuNhanId === field) {
                                sumItemCongNo += cn.SoTienCongNoChoThu;
                            }
                        });
                    });
                    return sumItemCongNo;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.totalCongnoFooter = function (field) {
                    var sumItemCongNo = 0;
                    this.goiChuaQuyetToanMarketing.forEach(function (element) {
                        element.DanhSachCongNoChoThus.forEach(function (cn) {
                            if (cn.CongTyBaoHiemTuNhanId === field) {
                                sumItemCongNo += cn.SoTienCongNoChoThu;
                            }
                        });
                    });
                    return sumItemCongNo;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.bindItemCongTyApDungSoTien = function () {
                    var danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["DanhSachCongNoChoThu"];
                    for (var index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
                        var congNo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["CongNoChoThu"];
                        congNo.ViTri = index;
                        congNo.CongTyBaoHiemTuNhanId = this.thongTinCongTyBaoHiemTuNhans[index].Id;
                        congNo.TenCongTy = this.thongTinCongTyBaoHiemTuNhans[index].TenCongTy;
                        congNo.SoTienCongNoChoThu = 0;
                        danhSachCongNoChoThu.CongNoChoThus.push(congNo);
                    }
                    return danhSachCongNoChoThu;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.soTienBenhNhanCanThanhToan = function () {
                    var totalBHYT = 0;
                    var totalThanhTien = 0;
                    if (this.goiChuaQuyetToanMarketing != undefined && this.goiChuaQuyetToanMarketing != null) {
                        this.goiChuaQuyetToanMarketing.forEach(function (element) {
                            if (element.CheckedDefault === true) {
                                totalThanhTien += element.ThanhTien;
                                totalBHYT += element.BHYTThanhToan;
                            }
                        });
                    }
                    return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
                };
                GoiBHYTChuaQuyetToanComponent.prototype.totalCongNo = function () {
                    var totalCongNoThanhToan = 0;
                    if (this.goiChuaQuyetToanMarketing != undefined && this.thongTinCongTyBaoHiemTuNhans != null) {
                        for (var index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
                            totalCongNoThanhToan += this.thongTinCongTyBaoHiemTuNhans[index].SoTienCongNo;
                        }
                    }
                    return totalCongNoThanhToan;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.tinhTienCongNo = function (itemThanhTien, itemBHYTThanhToan, congNoId, totalTT, congNoTruocDos) {
                    var totalCongNo = 0;
                    if (this.thongTinCongTyBaoHiemTuNhans != undefined && this.thongTinCongTyBaoHiemTuNhans != null) {
                        totalCongNo = this.thongTinCongTyBaoHiemTuNhans.filter(function (item) { return item.Id == congNoId; }).reduce(function (sum, item) { return sum + item.SoTienCongNo; }, 0);
                    }
                    return totalCongNo == 0 ? totalCongNo :
                        Math.round(((totalCongNo / totalTT) * (itemThanhTien - itemBHYTThanhToan)) * 100) / 100;
                };
                GoiBHYTChuaQuyetToanComponent.prototype.bindChiaTienCongNo = function () {
                    var totalTT = this.soTienBenhNhanCanThanhToan();
                    var totalCongNo = this.totalCongNo();
                    this.danhSachCongNoChoThus = [];
                    if (this.goiChuaQuyetToanMarketing.length > 0 && totalCongNo > totalTT) {
                        this.notificationService.showError("Số tiền thanh toán công nợ không hợp lệ");
                        return;
                    }
                    if (this.thongTinCongTyBaoHiemTuNhans.length > 0) {
                        var danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["DanhSachCongNoChoThu"];
                        danhSachCongNoChoThu = this.bindItemCongTyApDungSoTien();
                        var tongCongNo = 0;
                        if (danhSachCongNoChoThu.CongNoChoThus.length > 0) {
                            for (var index = 0; index < this.goiChuaQuyetToanMarketing.length; index++) {
                                if (this.position != -1) {
                                    this.goiChuaQuyetToanMarketing[index].SoTienQuyetToan =
                                        (this.goiChuaQuyetToanMarketing[index].ThanhTien - this.goiChuaQuyetToanMarketing[index].BHYTThanhToan);
                                    if (index != this.goiChuaQuyetToanMarketing.length - 1) {
                                        if (this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus.length > 0) {
                                            this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
                                                danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu =
                                                    this.tinhTienCongNo(this.goiChuaQuyetToanMarketing[index].ThanhTien, this.goiChuaQuyetToanMarketing[index].BHYTThanhToan, danhSachCongNoChoThu.CongNoChoThus[this.position].CongTyBaoHiemTuNhanId, totalTT, this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus);
                                            tongCongNo += this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
                                        }
                                    }
                                    else {
                                        this.goiChuaQuyetToanMarketing[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
                                            this.thongTinCongTyBaoHiemTuNhans[this.position].SoTienCongNo - tongCongNo;
                                    }
                                }
                            }
                            this.goiChuaQuyetToanMarketing.forEach(function (element) {
                                if (element.CheckedDefault === true) {
                                    var totalCongNo_1 = 0;
                                    element.DanhSachCongNoChoThus.forEach(function (element) { totalCongNo_1 += element.SoTienCongNoChoThu; });
                                    return element.SoTienQuyetToan = element.ThanhTien - element.BHYTThanhToan - (totalCongNo_1);
                                }
                            });
                            this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
                        }
                    }
                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_8__["process"])(this.goiChuaQuyetToanMarketing, this.state);
                    this.goiChuaQuyetToanMarketing.filter(function (element) { return element.CheckedDefault == true; });
                    this.danhSachGoiCoBHYT.emit(this.goiChuaQuyetToanMarketing);
                };
                GoiBHYTChuaQuyetToanComponent.prototype.BackToList = function () {
                    this.location.back();
                };
                GoiBHYTChuaQuyetToanComponent.prototype.luuTamChiPhiTrongGoiNgoaiTru = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["lưu tạm chi phí trong gói"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result === 'Yes') {
                            var danhSachChiPhiTrongGoi = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_7__["DanhSachChiPhiTrongGoi"]();
                            danhSachChiPhiTrongGoi.DanhSachChiPhiKhamChuaBenhTrongGoiDichVus = _this.goiChuaQuyetToanMarketing;
                            danhSachChiPhiTrongGoi.Id = _this.yeuCauTiepNhanId;
                            if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update)) {
                                _this.apiService
                                    .post("ThuNgan/LuuTamChiPhiNgoaiTruTrongGoi", danhSachChiPhiTrongGoi).subscribe(function () {
                                    _this.notificationService.showSuccess("Lưu tạm chi phí trong gói thành công");
                                    _this.luuTamChiPhiThanhCongTrongGoi.emit(true);
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                            else {
                                _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                GoiBHYTChuaQuyetToanComponent.prototype.modelChangeCongNo = function (ev, data, vitri) {
                    if (ev === undefined && ev === null) {
                        data.DanhSachCongNoChoThus[vitri].SoTienCongNoChoThu = 0;
                    }
                    else {
                        if (data !== undefined && data !== null) {
                            data.SoTienQuyetToan = data.ThanhTien - data.DonGiaBHYTThanhToan - ev;
                        }
                    }
                };
                GoiBHYTChuaQuyetToanComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                GoiBHYTChuaQuyetToanComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                GoiBHYTChuaQuyetToanComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return GoiBHYTChuaQuyetToanComponent;
            }());
            GoiBHYTChuaQuyetToanComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "yeuCauTiepNhanId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "danhSachGoiCoBHYT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "thongTinCongTyBaoHiemTuNhans", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "position", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "dataSourceChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "afterChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "apDungCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "afterChangedCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], GoiBHYTChuaQuyetToanComponent.prototype, "luuTamChiPhiThanhCongTrongGoi", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridList", { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "gridList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienTraLaiBNTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "soTienTraLaiBNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienTraLaiBNGroupFooter', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "soTienTraLaiBNGroupFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bhytGroupFooter', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "bhytGroupFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenGoiTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "tenGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaBHYTTemplate', { static: true })
            ], GoiBHYTChuaQuyetToanComponent.prototype, "donGiaBHYTTemplate", void 0);
            GoiBHYTChuaQuyetToanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-danh-sach-goi-bhyt-chua-quyet-toan",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-goi-bhyt-chua-quyet-toan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-goi-bhyt-chua-quyet-toan.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-goi-bhyt-chua-quyet-toan/danh-sach-goi-bhyt-chua-quyet-toan.component.scss")).default]
                })
            ], GoiBHYTChuaQuyetToanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: red;\n}\n\n.text-color-blue {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC10aHUtcGhpLW5nb2FpLXRydS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHRodS1jaGlcXHRodS1jaGktdmllbi1waGlcXG5nb2FpLXRydVxcY2hvLXRodS10aWVuXFxkYW5oLXNhY2gtdGh1LXBoaS1uZ29haS10cnVcXGRhbmgtc2FjaC10aHUtcGhpLW5nb2FpLXRydS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC10aHUtcGhpLW5nb2FpLXRydS9kYW5oLXNhY2gtdGh1LXBoaS1uZ29haS10cnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vZGFuaC1zYWNoLXRodS1waGktbmdvYWktdHJ1L2Rhbmgtc2FjaC10aHUtcGhpLW5nb2FpLXRydS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufSIsIi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiBibHVlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: DanhSachThuPhiNgoaiTruComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachThuPhiNgoaiTruComponent", function () { return DanhSachThuPhiNgoaiTruComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
            /* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/expand-more */ "./node_modules/@iconify/icons-ic/expand-more.js");
            /* harmony import */ var _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21__);
            var DanhSachThuPhiNgoaiTruComponent = /** @class */ (function () {
                function DanhSachThuPhiNgoaiTruComponent(router, location, route, apiService, notificationService, authService, dialog) {
                    this.router = router;
                    this.location = location;
                    this.route = route;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.loaiThanhToan = "0";
                    this.kiemTraDanhSachThanhToan = true;
                    this.kiemTraDanhSachDaThanhToan = false;
                    this._pageSize = 20;
                    this.allDaThuChuaThu = true;
                    this.dathu = true;
                    this.chuaThu = true;
                    this.timKiemThongTinBenhNhan = {};
                    this.STT = 1;
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["CommonThuTien"]();
                    this.trangThaiThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiThuTien"]();
                    this.gridThuNganColumns = [];
                    this.gridThuNganChoThuPhiColumns = [];
                    this.gridThuNganChoThuDaThuPhiColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icExpandMore = _iconify_icons_ic_expand_more__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTienTamChoDong = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTienDefault = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.showCancelSearch = false;
                    this.icicclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
                    this.isScanF1 = false;
                    this.additionalSearchString = null;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.showTrangThaiTN = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.baseRoute = "/danh-sach-thu-dich-vu";
                    this.keyCode = "Enter";
                    this.sortConfig = [
                        {
                            field: "ChuaThu",
                            dir: "desc",
                        },
                    ];
                }
                DanhSachThuPhiNgoaiTruComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].ThuNgan;
                    this.listTagSearch = new Array();
                    var dateNow = new Date();
                    this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
                    this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
                    if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
                        this.choThuTien.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.FromDate = null;
                    }
                    if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
                        this.choThuTien.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.ToDate = null;
                    }
                    this.backWithSearch();
                    this.gridThuNganColumns = [
                        { Field: "MaTN", Title: "Mã TN", Width: 100, Sortable: true, Template: this.maTNTemplate },
                        { Field: "MaBN", Title: "Mã NB", Width: 70, Sortable: true },
                        { Field: "HoTen", Title: "Họ tên", MinWidth: 90, Sortable: true },
                        { Field: "NamSinh", Title: "Năm Sinh", Width: 80, Sortable: true },
                        { Field: "GioiTinhStr", Title: "Giới tính", Width: 100, Sortable: true },
                        { Field: "DienThoaiStr", Title: "Số điện thoại", Width: 100, Sortable: true },
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 100, Sortable: true },
                        { Field: "YeuCauNhapVien", Title: "Có Nhập Viện", Width: 150, Sortable: true, Template: this.coNhapVienTemplate },
                        { Field: "SoTienTamUng", Title: "Số tiền đã tạm ứng", Width: 150, Sortable: true, Template: this.templateTextSoTienDaTamUng },
                        { Field: "SoTienDaThu", Title: "Số tiền đã thu", Sortable: false, Width: 200, Template: this.templateTextSoTienDaXacNhan },
                        // {Field: "SoTienBNPhaiTT", Title: ".", Sortable: false, Width: 200, Template: this.templateTextSoTienChoXacNhan},
                        { Field: "ThoiDiemTiepNhanDisplay", Title: "Tiếp nhận lúc", Sortable: true, Width: 150 },
                    ];
                    this.showTrangThaiThuNgan();
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.backWithSearch = function () {
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined) {
                        this.loaiThanhToan = this.route.snapshot.queryParams.loaiThanhToan;
                    }
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan") != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan");
                        this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                        this.choThuTien = JSON.parse(this.additionalSearchString);
                        if (this.choThuTien.ThoiDiemTiepNhanTuFormat != undefined && this.choThuTien.ThoiDiemTiepNhanTuFormat != null && this.choThuTien.ThoiDiemTiepNhanTuFormat != "") {
                            this.choThuTien.ThoiDiemTiepNhanTuFormat = new Date(this.choThuTien.ThoiDiemTiepNhanTuFormat);
                        }
                        if (this.choThuTien.ThoiDiemTiepNhanDenFormat != undefined && this.choThuTien.ThoiDiemTiepNhanDenFormat != null && this.choThuTien.ThoiDiemTiepNhanDenFormat != "") {
                            this.choThuTien.ThoiDiemTiepNhanDenFormat = new Date(this.choThuTien.ThoiDiemTiepNhanDenFormat);
                        }
                        this.searchString = this.choThuTien.SearchString;
                        if (this.gridList != undefined) {
                            this.gridList.searchString = this.choThuTien.SearchString;
                        }
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.showTrangThaiThuNgan = function () {
                    if (this.choThuTien.ChuaThu)
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    this.updateSreachString();
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.getInputSearchValue = function (obj, keyValue, titleValue) {
                    var index = this.listTagSearch.findIndex(function (x) { return x.Key == keyValue; });
                    if (obj) {
                        var valueFormat = undefined;
                        if (obj) {
                            valueFormat = obj;
                            var item = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TagItem"]();
                            item.Key = keyValue;
                            item.Value = valueFormat;
                            item.Title = titleValue;
                            this.listTagSearch.push(item);
                        }
                        else {
                            this.listTagSearch[index].Value = valueFormat;
                        }
                    }
                    else {
                        if (index != -1) {
                            this.listTagSearch.splice(index, 1);
                        }
                    }
                    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.updateSreachString = function () {
                    var queryString = JSON.stringify(this.choThuTien);
                    this.queryStrings = queryString;
                    if (this.gridList != undefined) {
                        this.gridList.searchString = this.choThuTien.SearchString;
                        this.gridList.search();
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.thoiDiemTNChange = function () {
                    this.TimkiemNangCao();
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.cancelSearch = function () {
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.listTagSearch = new Array();
                    this.listTagShowOnHeader = new Array();
                    var queryString = JSON.stringify(this.choThuTien);
                    if (this.gridList != undefined) {
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    this.showCancelSearch = false;
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.closeMenu = function () {
                    this.choThuTien.ChuaThu = false;
                    this.listTagShowOnHeader = [];
                    this.listTagSearch = [];
                    if (this.choThuTienTamChoDong.ChuaThu == true) {
                        this.choThuTien.ChuaThu = true;
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.TimkiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + "?loaiThanhToan=0");
                    this.trangThaiCommon();
                    var searchText = this.searchString != undefined ? this.searchString : "";
                    this.choThuTien.SearchString = searchText;
                    if (this.choThuTien.ThoiDiemTiepNhanTuFormat != null) {
                        this.choThuTien.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.FromDate = null;
                    }
                    if (this.choThuTien.ThoiDiemTiepNhanDenFormat != null) {
                        this.choThuTien.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.choThuTien.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
                    }
                    else {
                        this.choThuTien.ToDate = null;
                    }
                    this.choThuTien.TabActive = 0;
                    var queryString = JSON.stringify(this.choThuTien);
                    if (this.gridList != undefined) {
                        this.gridList.searchString = searchText;
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.Timkiem = function () {
                    this.trangThaiCommon();
                    this.choThuTien.SearchString = this.searchString;
                    this.choThuTien.TabActive = 0;
                    var queryString = JSON.stringify(this.choThuTien);
                    var QueryString = null;
                    if (this.searchString != null) {
                        QueryString = this.searchString;
                        this.showTrangThaiTN = true;
                    }
                    if (this.gridList != undefined) {
                        this.gridList.searchString = QueryString;
                        this.gridList._additionalSearchString = queryString;
                        this.gridList.search();
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.showCancelSearch = this.listTagShowOnHeader != undefined && this.listTagShowOnHeader.length > 0;
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.searchChanges = function (event) {
                    //xóa sreach trước đó
                    var self = this;
                    if (this.timeoutSearchChange != null) {
                        clearTimeout(this.timeoutSearchChange);
                        this.timeoutSearchChange = null;
                    }
                    this.timeoutSearchChange = setTimeout(function () {
                        if (event !== undefined && event !== null && event.endsWith("@")) {
                            var dataTimKiem = event.split("|");
                            if (dataTimKiem.length > 1) {
                                self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                                self.searchString = dataTimKiem[0];
                            }
                            else {
                                self.searchString = event.slice(0, -1);
                                self.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = event.slice(0, -1);
                            }
                            self.getThongTinYeuCauBenhNhan(self.timKiemThongTinBenhNhan);
                        }
                        if (event != undefined && (event == null || event == "")) {
                            self.gridList.searchString = null;
                            //self.TimkiemNangCao();
                        }
                    }, 100);
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.TimkiemNangCao();
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.clearSearch = function () {
                    this.searchString = "";
                    if (this.gridList != undefined) {
                        this.gridList.search();
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.trangThaiCommon = function () {
                    if (this.choThuTien.ChuaThu === false) {
                        this.choThuTien.ChuaThu = true;
                        this.getInputSearchValue(true, "chothu", "Chờ Thu");
                    }
                    this.choThuTienTamChoDong.ChuaThu = false;
                    if (this.choThuTien.ChuaThu)
                        this.choThuTienTamChoDong.ChuaThu = true;
                    if (this.choThuTien.NamSinh != null)
                        this.choThuTien.NamSinh = Math.round(this.choThuTien.NamSinh);
                    this.listTagShowOnHeader = JSON.parse(JSON.stringify(this.listTagSearch));
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.cancelTagSearch = function (tagKey) {
                    if (tagKey === "chothu") {
                        this.choThuTien.ChuaThu = false;
                    }
                    if (tagKey != null && tagKey != undefined) {
                        this.listTagSearch.splice(this.listTagSearch.findIndex(function (x) { return x.Key == tagKey; }), 1);
                        this.listTagShowOnHeader.splice(this.listTagShowOnHeader.findIndex(function (x) { return x.Key == tagKey; }), 1);
                        if (this.listTagSearch.length == 0) {
                            this.cancelSearch();
                            return;
                        }
                        for (var item in this.choThuTien) {
                            if (item == tagKey) {
                                this.choThuTien[item] = this.choThuTienDefault[item];
                            }
                        }
                        this.TimkiemNangCao();
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.checkTrangThai = function (event, type) {
                    if (type == 1) {
                        this.choThuTien.ChuaThu = event;
                        this.router.navigateByUrl("/danh-sach-thu-dich-vu?loaiThanhToan=" + type);
                    }
                    this.TimkiemNangCao();
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.routerLink = function (id, dathu) {
                    this.choThuTien.TabActive = 0;
                    var queryString = JSON.stringify(this.choThuTien);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_12__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", queryString);
                    this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + id + "?loaiThanhToan=" + 1);
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.thongTinChiTietThanhToan = function (id, dathu) {
                    this.routerLink(id, dathu);
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.extEnterChangePage = function (data) {
                    this.routerLink(data.Id, data);
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.changeQR = function ($event) {
                    if ($event != null && typeof $event == "string" && $event.endsWith("@")) {
                        this.modelQRCode = $event;
                        var dataTimKiem = $event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = dataTimKiem[0];
                        }
                        else {
                            this.searchString = $event.slice(0, -1);
                            this.timKiemThongTinBenhNhan.TimKiemMaBNVaMaTN = $event.slice(0, -1);
                        }
                        this.getThongTinYeuCauBenhNhan(this.timKiemThongTinBenhNhan);
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.getThongTinYeuCauBenhNhan = function (timKiemThongTinBenhNhan) {
                    var _this = this;
                    this.apiService.post("ThuNgan/GetThuNganByMaBNVaMaTT/", timKiemThongTinBenhNhan).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + resultData.Id + "?loaiThanhToan=" + 1);
                        }
                        else {
                            _this.notificationService.showError(_this.commonThuTien.ErrorKhongTimThayThongTin);
                        }
                    });
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
                        var queryString = JSON.stringify(this.choThuTien);
                        var searchText = self.searchString != undefined ? self.searchString : "";
                        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].convertSpecialXML(searchText);
                        searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
                        searchText = btoa(unescape(encodeURIComponent("<AdvancedQueryParameters>" + searchText + "</AdvancedQueryParameters>")));
                        var queryObject = {
                            skip: 0,
                            modifiedBy: 0,
                            take: 50,
                            searchString: searchText,
                            additionalSearchString: queryString,
                            searchTerms: searchText,
                            sort: self.sortConfig,
                            lazyLoadPage: true,
                        };
                        self.apiService.postExportExcel("ThuNgan/ExportThuNgan", queryObject).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "ThuNgan" + dateTimeNow.getFullYear() + ".xlsx");
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.closePopupLoadingData();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_18__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang xuất excel..." },
                    });
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DanhSachThuPhiNgoaiTruComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 81 && event.ctrlKey && this.isScanF1 != true) {
                        event.preventDefault();
                        this.QuetMaQRCodeClick();
                    }
                };
                return DanhSachThuPhiNgoaiTruComponent;
            }());
            DanhSachThuPhiNgoaiTruComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], { static: false })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "trigger", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienChoXacNhan", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "templateTextSoTienChoXacNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienDaXacNhan", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "templateTextSoTienDaXacNhan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoTienDaTamUng", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "templateTextSoTienDaTamUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateTextSoDuTK", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "templateTextSoDuTK", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("coNhapVienTemplate", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "coNhapVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("templateSTT", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "templateSTT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridList", { static: false })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "gridList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("maTNTemplate", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "maTNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], DanhSachThuPhiNgoaiTruComponent.prototype, "keyEvent", null);
            DanhSachThuPhiNgoaiTruComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-danh-sach-thu-phi-ngoai-tru",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-thu-phi-ngoai-tru.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-thu-phi-ngoai-tru.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-phi-ngoai-tru/danh-sach-thu-phi-ngoai-tru.component.scss")).default]
                })
            ], DanhSachThuPhiNgoaiTruComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.scss": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.scss ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".text-color {\n  color: red;\n}\n\n.text-color-orange {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC10aHUtdGllbi1iZW5oLW5oYW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcZGFuaC1zYWNoLXRodS10aWVuLWJlbmgtbmhhblxcZGFuaC1zYWNoLXRodS10aWVuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2Rhbmgtc2FjaC10aHUtdGllbi1iZW5oLW5oYW4vZGFuaC1zYWNoLXRodS10aWVuLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3RodS1jaGktdmllbi1waGkvbmdvYWktdHJ1L2Noby10aHUtdGllbi9kYW5oLXNhY2gtdGh1LXRpZW4tYmVuaC1uaGFuL2Rhbmgtc2FjaC10aHUtdGllbi1iZW5oLW5oYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb2xvciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50ZXh0LWNvbG9yLW9yYW5nZSB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59IiwiLnRleHQtY29sb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4udGV4dC1jb2xvci1vcmFuZ2Uge1xuICBjb2xvcjogb3JhbmdlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.ts": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.ts ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: DanhSachThuTienNgoaiTruComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachThuTienNgoaiTruComponent", function () { return DanhSachThuTienNgoaiTruComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            var DanhSachThuTienNgoaiTruComponent = /** @class */ (function () {
                function DanhSachThuTienNgoaiTruComponent() {
                }
                DanhSachThuTienNgoaiTruComponent.prototype.unSelectedTab = function () { };
                DanhSachThuTienNgoaiTruComponent.prototype.ngOnInit = function () {
                    this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                    this.choThuTien.TabActive = 0;
                    this.backWithSearch();
                };
                DanhSachThuTienNgoaiTruComponent.prototype.backWithSearch = function () {
                    if (src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan") != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__["LocalStorageHelper"].getItem("additionalSearchStringThuNgan");
                        this.choThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ChoThuTien"]();
                        this.tabActive = this.choThuTien.TabActive;
                        this.choThuTien = JSON.parse(this.additionalSearchString);
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                };
                DanhSachThuTienNgoaiTruComponent.prototype.onTabSelect = function (event) {
                    if (event.index == 0) {
                        this.tabActive = 0;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                    else if (event.index == 1) {
                        this.tabActive = 1;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                    else {
                        this.tabActive = 2;
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_3__["LocalStorageHelper"].setItem("additionalSearchStringThuNgan", null);
                    }
                };
                return DanhSachThuTienNgoaiTruComponent;
            }());
            DanhSachThuTienNgoaiTruComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-danh-sach-thu-tien",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-thu-tien-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-thu-tien-benh-nhan.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/danh-sach-thu-tien-benh-nhan/danh-sach-thu-tien-benh-nhan.component.scss")).default]
                })
            ], DanhSachThuTienNgoaiTruComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2RpY2gtdnUta2h1eWVuLW1haS1rZW0tdGhlby1nb2kvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcZGljaC12dS1raHV5ZW4tbWFpLWtlbS10aGVvLWdvaVxcZGljaC12dS1raHV5ZW4tbWFpLWtlbS10aGVvLWdvaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2RpY2gtdnUta2h1eWVuLW1haS1rZW0tdGhlby1nb2kvZGljaC12dS1raHV5ZW4tbWFpLWtlbS10aGVvLWdvaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vZGljaC12dS1raHV5ZW4tbWFpLWtlbS10aGVvLWdvaS9kaWNoLXZ1LWtodXllbi1tYWkta2VtLXRoZW8tZ29pLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn0iLCIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: DichVuKhuyenMaiKemTheoGoi */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DichVuKhuyenMaiKemTheoGoi", function () { return DichVuKhuyenMaiKemTheoGoi; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            var DichVuKhuyenMaiKemTheoGoi = /** @class */ (function () {
                function DichVuKhuyenMaiKemTheoGoi(data, route, dialog, authService, notificationService, dialogRef, apiService) {
                    this.data = data;
                    this.route = route;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].ThuNgan;
                    this.danhSachDichVuKhuyenMaiBenhNhan = [];
                    this.apDungKhuyenMaiBenhNhan = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["ApDungKhuyenMaiBenhNhan"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.gridColumns = [];
                    this.validationErrors = [];
                    this.groups = [{
                            field: 'Nhom', aggregates: [
                                { field: 'SoTienPhaiTraLaiBenhNhan', aggregate: 'sum' }
                            ]
                        }];
                    this.benhNhanId = data.benhNhanId;
                    this.yeuCauTiepNhanId = data.yeuCauTiepNhanId;
                }
                DichVuKhuyenMaiKemTheoGoi.prototype.ngOnInit = function () {
                    if (this.benhNhanId != undefined && this.benhNhanId != null) {
                        this.getThongTinChuaThuGoiQuyetToan(this.yeuCauTiepNhanId);
                    }
                    this.gridColumns = [
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 30, Sortable: false },
                        { Field: "TenDichVu", Title: "Tên Dịch Vụ", Width: 100, Sortable: false },
                        { Field: "LoaiGia", Title: "Loại giá", Width: 70, Sortable: false },
                        { Field: "GiaGoi", Title: "Gói giá", Width: 50, Sortable: false, Template: this.goiGiaTemplate },
                        { Field: "Soluong", Title: "Số Lượng", Width: 50, Sortable: false },
                        { Field: "DonGia", Title: "Dơn giá", Width: 80, Sortable: false, Template: this.donGiaTemplate },
                        { Field: "DonGiaKM", Title: "Dơn giá KM", Width: 80, Sortable: false, Template: this.donGiaKMTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 80, Sortable: false, Template: this.thanhTienTemplate },
                        { Field: "SoTienMG", Title: "Số tiền MG", Width: 80, Sortable: false, Template: this.soTienMGTemplate },
                        { Field: "HanSuDungDisplay", Title: "Hạn sử dụng", Width: 80, Sortable: false },
                        { Field: "SoLuongDaDung", Title: "Số Lượng Đã Dùng", Width: 80, Sortable: false },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 80, Sortable: false },
                    ];
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.close = function () {
                    this.dialog.closeAll();
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.apDung = function () {
                    var _this = this;
                    this.showLoadingPopup();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].View)) {
                        this.apDungKhuyenMaiBenhNhan.YeuCauTiepNhanId = this.yeuCauTiepNhanId;
                        this.apDungKhuyenMaiBenhNhan.DsKhuyenMaiBenhNhans = this.danhSachDichVuKhuyenMaiBenhNhan;
                        this.apiService.put("ThuNgan/ApDungDichVuKhuyenMai", this.apDungKhuyenMaiBenhNhan).subscribe(function (response) {
                            if (response != undefined && response != null) {
                                _this.danhSachDichVuKhuyenMaiBenhNhan = response.Data;
                                _this.dialogRef.close("Yes");
                            }
                            _this.closeAllDialogs();
                            _this.dialog.closeAll();
                        }, function (err) {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) :
                                _this.validationErrors = err.ValidationErrors;
                            _this.closeAllDialogs();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                        this.closeAllDialogs();
                    }
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.extCheckboxSelection = function (event) {
                    this.danhSachDichVuKhuyenMaiBenhNhan.forEach(function (e) {
                        e.DanhSachDichVuTrongGoiKhuyenMais.forEach(function (e) {
                            {
                                return (e.DaChon = false);
                            }
                        });
                        if (event.length > 0) {
                            var _loop_2 = function (index) {
                                e.DanhSachDichVuTrongGoiKhuyenMais.forEach(function (element) {
                                    {
                                        if (element.Id == event[index]) {
                                            element.DaChon = true;
                                            return (element);
                                        }
                                    }
                                });
                            };
                            for (var index = 0; index < event.length; index++) {
                                _loop_2(index);
                            }
                        }
                    });
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.getThongTinChuaThuGoiQuyetToan = function (yeuCauTiepNhanId) {
                    var _this = this;
                    this.showLoadingPopup();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].View)) {
                        this.apiService.get("ThuNgan/GetDataDichVuKhuyenMaiBenhNhanForGrid?yeuCauTiepNhanId=" + yeuCauTiepNhanId).subscribe(function (response) {
                            if (response != undefined && response != null) {
                                _this.danhSachDichVuKhuyenMaiBenhNhan = response.Data;
                                setTimeout(function () {
                                    _this.danhSachDichVuKhuyenMaiBenhNhan.forEach(function (element) {
                                        element.DanhSachDichVuTrongGoiKhuyenMais.forEach(function (item) {
                                            if (item.DaChon) {
                                                if (!$('#' + element.Id + 'selectCheckboxId' + item.Id).prop('checked')) {
                                                    $('#' + element.Id + 'selectCheckboxId' + item.Id).trigger('click');
                                                }
                                            }
                                        });
                                    });
                                }, 100);
                            }
                            _this.closeAllDialogs();
                        }, function (err) {
                            err.ValidationErrors == null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) :
                                _this.validationErrors = err.ValidationErrors;
                            _this.closeAllDialogs();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
                        this.closeAllDialogs();
                    }
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                DichVuKhuyenMaiKemTheoGoi.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return DichVuKhuyenMaiKemTheoGoi;
            }());
            DichVuKhuyenMaiKemTheoGoi.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridList", { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "gridList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiGiaTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "goiGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaKMTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "donGiaKMTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienMGTemplate', { static: true })
            ], DichVuKhuyenMaiKemTheoGoi.prototype, "soTienMGTemplate", void 0);
            DichVuKhuyenMaiKemTheoGoi = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-dich-vu-khuyen-mai-kem-theo-goi",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dich-vu-khuyen-mai-kem-theo-goi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dich-vu-khuyen-mai-kem-theo-goi.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/dich-vu-khuyen-mai-kem-theo-goi/dich-vu-khuyen-mai-kem-theo-goi.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
            ], DichVuKhuyenMaiKemTheoGoi);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.scss": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.scss ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".size-icon-duoc-bhyt {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  line-height: 20px;\n  border-radius: 7px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n  right: -4px;\n  top: 6px;\n  margin: 0;\n}\n\n.mouse-cursor {\n  cursor: pointer;\n}\n\n.reverse-ellipsis.r {\n  text-align: right;\n  direction: inherit;\n}\n\n.size-icon-khong-bhyt {\n  display: inline-block;\n  height: 14px;\n  width: 14px;\n  line-height: 20px;\n  border-radius: 7px;\n  background-color: red;\n  color: #fff;\n  text-align: center;\n  right: -4px;\n  top: 6px;\n  margin: 0;\n}\n\n.float_right {\n  float: right;\n}\n\n.mat-icon {\n  font-size: 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2RzLWNodWEtdGh1LXRpZW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcZHMtY2h1YS10aHUtdGllblxcZHMtY2h1YS10aHUtdGllbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2RzLWNodWEtdGh1LXRpZW4vZHMtY2h1YS10aHUtdGllbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vZHMtY2h1YS10aHUtdGllbi9kcy1jaHVhLXRodS10aWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemUtaWNvbi1kdW9jLWJoeXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcmlnaHQ6IC00cHg7XG4gIHRvcDogNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5tb3VzZS1jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBpbmhlcml0O1xufVxuXG4uc2l6ZS1pY29uLWtob25nLWJoeXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiAtNHB4O1xuICB0b3A6IDZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmxvYXRfcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufSIsIi5zaXplLWljb24tZHVvYy1iaHl0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHJpZ2h0OiAtNHB4O1xuICB0b3A6IDZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubW91c2UtY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmV2ZXJzZS1lbGxpcHNpcy5yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpcmVjdGlvbjogaW5oZXJpdDtcbn1cblxuLnNpemUtaWNvbi1raG9uZy1iaHl0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICByaWdodDogLTRweDtcbiAgdG9wOiA2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZsb2F0X3JpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWF0LWljb24ge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: DsChuaThuTienComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsChuaThuTienComponent", function () { return DsChuaThuTienComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/edit */ "./node_modules/@iconify/icons-ic/edit.js");
            /* harmony import */ var _iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-block */ "./node_modules/@iconify/icons-ic/twotone-block.js");
            /* harmony import */ var _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _common_ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/ap-dung-miem-giam-them-popup/ap-dung-miem-giam-them-popup.component.ts");
            /* harmony import */ var _common_ap_dung_miem_giam_cho_tung_dv_popup_ap_dung_miem_giam_cho_tung_dv_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/ap-dung-miem-giam-cho-tung-dv-popup/ap-dung-miem-giam-cho-tung-dv-popup.component.ts");
            /* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
            /* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _common_common_pdf_popup_ngoai_tru_common_pdf_popup_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/common-pdf-popup-ngoai-tru/common-pdf-popup-ngoai-tru.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/common-pdf-popup-ngoai-tru/common-pdf-popup-ngoai-tru.component.ts");
            var DsChuaThuTienComponent = /** @class */ (function () {
                function DsChuaThuTienComponent(route, apiService, dialog, baseService, router, authService, notificationService) {
                    this.route = route;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.baseService = baseService;
                    this.router = router;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.dataSourceChanged = false;
                    this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icRoundEdit = _iconify_icons_ic_edit__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icBlock = _iconify_icons_ic_twotone_block__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.format = 'n2';
                    //Áp dụng công nợ
                    this.apDungCongNo = false;
                    this.apCapNhatThanhToan = false;
                    this.position = -1;
                    this.thongTinCongTyBaoHiemTuNhans = [];
                    //Áp dụng phần miễm đối tượng ưu đãi
                    this.loadingCtThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.apDungMiemGiam = true;
                    this.thongTinMienGiamVos = null;
                    this.danhSachChuaThanhToan = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.kiemTraDanhSachXNBHYT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.afterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.afterChangedCongNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.afterapDungMiemGiam = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.kiemTraDSCongNo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.afterapDungCNTT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.afterApDungHuyThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.danhSachCongNoChoThus = [];
                    this.congNoChoThus = [];
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["CommonThuTien"]();
                    this.gridColumnsChuaThuTien = [];
                    this.danhSachChiPhiKhamChuaBenh = [];
                    this.tamDanhSachChiPhiKhamChuaBenh = [];
                    this.loaiMienGiam = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["LoaiMienGiam"]();
                    this.danhSachMienGiamVo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachMienGiamVo"]();
                    this.loaiChietKhau = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["LoaiChietKhau"]();
                    this.apDungMGT = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["ApDungMiemGiamThem"]();
                    this.confrim = null;
                    this.dataSource = {
                        data: [],
                        total: 0,
                    };
                    this.urlGetDataGrid = "ThuNgan/GetDataForGridChoXacNhanAsync";
                    this.urlGetTotalPageGrid = "ThuNgan/GetTotalPageForGridChoXacNhanAsync";
                    this.yeuCauTiepNhanId = 0;
                    this.apDungCNAndMiemGiam = false;
                    this.groups = [
                        {
                            field: "Nhom",
                            aggregates: [
                                { field: "ThanhTien", aggregate: "sum" },
                                { field: "BHYTThanhToan", aggregate: "sum" },
                                { field: "SoTienMG", aggregate: "sum" },
                                { field: "DaThanhToan", aggregate: "sum" },
                                { field: "BNConPhaiThanhToan", aggregate: "sum" },
                            ],
                        },
                    ];
                    this.checkboxOnly = true;
                    this.danhSachChiPhiKhamChuaBenhtam = this.danhSachChiPhiKhamChuaBenh;
                    this.state = {
                        group: this.groups,
                    };
                    this.duyetBaoHiemYT = false;
                    this.disabledDuyetBaoHiemYT = true;
                    this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.keySelectBy = "Id";
                    this.mySelection = [];
                    this.mySelectionInPage = [];
                    this.selectAllState = "unchecked";
                }
                DsChuaThuTienComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].ThuNgan;
                    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
                    this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, true);
                };
                DsChuaThuTienComponent.prototype.ngOnChanges = function (value) {
                    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
                    if (this.dataSourceChanged == true) {
                        this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, false);
                        this.afterChanged.emit();
                    }
                    if (this.apDungCongNo == true) {
                        this.apDungCNAndMiemGiam = true;
                        this.tamDanhSachChiPhiKhamChuaBenh = [];
                        this.bindChiaTienCongNo();
                        this.afterChangedCongNo.emit();
                    }
                    if (this.apDungMiemGiam == true) {
                        this.apDungCNAndMiemGiam = false;
                        this.afterapDungMiemGiam.emit();
                    }
                    if (this.apCapNhatThanhToan == true) {
                        this.getThongTinYeuCauBenhNhan(this.yeuCauTiepNhanId, false);
                        this.afterapDungCNTT.emit();
                    }
                };
                DsChuaThuTienComponent.prototype.total = function (field) {
                    switch (field) {
                        case "BNConPhaiThanhToan":
                            return this.XuLyTotalForField("BNConPhaiThanhToan");
                            break;
                        case "DaThanhToan":
                            return this.XuLyTotalForField("DaThanhToan");
                            break;
                        case "SoTienMG":
                            return this.XuLyTotalForField("SoTienMG");
                            break;
                        case "ThanhTien":
                            return this.XuLyTotalForField("ThanhTien");
                            break;
                        case "BHYTThanhToan":
                            return this.XuLyTotalForField("BHYTThanhToan");
                            break;
                    }
                };
                DsChuaThuTienComponent.prototype.totalCongno = function (field, group) {
                    var sumItemCongNo = 0;
                    group.items.forEach(function (element) {
                        element.DanhSachCongNoChoThus.forEach(function (cn) {
                            if (cn.CongTyBaoHiemTuNhanId === field) {
                                sumItemCongNo += cn.SoTienCongNoChoThu;
                            }
                        });
                    });
                    return sumItemCongNo;
                };
                DsChuaThuTienComponent.prototype.totalCongnoFooter = function (field) {
                    var sumItemCongNo = 0;
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        element.DanhSachCongNoChoThus.forEach(function (cn) {
                            if (cn.CongTyBaoHiemTuNhanId === field) {
                                sumItemCongNo += cn.SoTienCongNoChoThu;
                            }
                        });
                    });
                    return sumItemCongNo;
                };
                DsChuaThuTienComponent.prototype.XuLyTotalForField = function (field) {
                    var sum = 0;
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        if (element.CheckedDefault) {
                            switch (field) {
                                case "BNConPhaiThanhToan":
                                    sum = sum + element.BNConPhaiThanhToan;
                                    break;
                                case "DaThanhToan":
                                    sum = sum + element.DaThanhToan;
                                    break;
                                case "SoTienMG":
                                    sum = sum + element.SoTienMG;
                                    break;
                                case "ThanhTien":
                                    sum = sum + element.ThanhTien;
                                    break;
                                case "BHYTThanhToan":
                                    sum = sum + element.BHYTThanhToan;
                                    break;
                            }
                        }
                    });
                    return sum;
                };
                DsChuaThuTienComponent.prototype.extCheckboxSelection = function (event) {
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        return (element.CheckedDefault = false);
                    });
                    if (event.length > 0) {
                        var _loop_3 = function (index) {
                            this_2.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                                if ((element.DuocHuongBHYT && element.KiemTraBHYTXacNhan) || !element.DuocHuongBHYT) {
                                    if (element.Id == event[index]) {
                                        return (element.CheckedDefault = true);
                                    }
                                }
                            });
                        };
                        var this_2 = this;
                        for (var index = 0; index < event.length; index++) {
                            _loop_3(index);
                        }
                    }
                    this.resetGiaTienCongNo();
                    this.myDanhSachChuaThanhToan();
                };
                DsChuaThuTienComponent.prototype.resetGiaTienCongNo = function () {
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        if (element.CheckedDefault != true) {
                            element.DanhSachCongNoChoThus.forEach(function (congNo) {
                                congNo.SoTienCongNoChoThu = 0;
                            });
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.myDanhSachChuaThanhToan = function () {
                    var danhSachChuaThanhToans;
                    danhSachChuaThanhToans = this.danhSachChiPhiKhamChuaBenh.filter(function (element) { return element.CheckedDefault == true; });
                    this.danhSachChuaThanhToan.emit(danhSachChuaThanhToans);
                    var kiemTraDanhSachXNBHYT = this.danhSachChiPhiKhamChuaBenh.filter(function (element) { return element.DuocHuongBHYT === true
                        && element.KiemTraBHYTXacNhan !== true; });
                    this.kiemTraDanhSachXNBHYT.emit(kiemTraDanhSachXNBHYT);
                };
                DsChuaThuTienComponent.prototype.setSelectAll = function () {
                    setTimeout(function () {
                        if (!jQuery("#selectAllCheckboxId").prop("checked")) {
                            jQuery("#selectAllCheckboxId").trigger("click");
                        }
                    }, 1000);
                };
                DsChuaThuTienComponent.prototype.ChangCheckboxToaThuoc = function (event, data) {
                    var _this = this;
                    data.forEach(function (element) {
                        for (var _i = 0, _a = _this.danhSachChiPhiKhamChuaBenh; _i < _a.length; _i++) {
                            var danhSachChiPhiKhamChuaBenh = _a[_i];
                            if (danhSachChiPhiKhamChuaBenh.Id === element.Id) {
                                danhSachChiPhiKhamChuaBenh.CheckedDefault = event;
                                jQuery("#selectCheckboxId" + danhSachChiPhiKhamChuaBenh.Id).trigger("click");
                            }
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.mapCongTyBHTN = function (responseThongTinBenhNhan) {
                    var danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachCongNoChoThu"];
                    if (responseThongTinBenhNhan !== null && responseThongTinBenhNhan !== undefined) {
                        for (var index = 0; index < responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.length; index++) {
                            var congNo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["CongNoChoThu"];
                            congNo.ViTri = index;
                            congNo.CongTyBaoHiemTuNhanId = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].Id;
                            congNo.TenCongTy = responseThongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans[index].TenCongTy;
                            congNo.SoTienCongNoChoThu = 0;
                            danhSachCongNoChoThu.CongNoChoThus.push(congNo);
                        }
                    }
                    return danhSachCongNoChoThu;
                };
                DsChuaThuTienComponent.prototype.getThongTinYeuCauBenhNhan = function (id, congNoMiemGiam) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var danhSachCongNoChoThu, responseThongTinBenhNhan, responseDanhSachThuPhiDichVuNgoaiTru, index, fillterThuocBHYTXN, index, dsDanhSachCongNoChoThus, _loop_4, this_3, subIndex;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.showLoadingPopup();
                                    this.danhSachCongNoChoThus = [];
                                    danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachCongNoChoThu"]();
                                    return [4 /*yield*/, this.baseService.getById(id).toPromise()];
                                case 1:
                                    responseThongTinBenhNhan = _a.sent();
                                    if (responseThongTinBenhNhan !== undefined && responseThongTinBenhNhan !== null)
                                        danhSachCongNoChoThu = this.mapCongTyBHTN(responseThongTinBenhNhan);
                                    if (!(responseThongTinBenhNhan != undefined && responseThongTinBenhNhan != null)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.apiService.get("ThuNgan/DanhSachThuPhiDichVu/" + id).toPromise()];
                                case 2:
                                    responseDanhSachThuPhiDichVuNgoaiTru = _a.sent();
                                    if (responseDanhSachThuPhiDichVuNgoaiTru != undefined && responseDanhSachThuPhiDichVuNgoaiTru != null) {
                                        this.dataSource.data = responseDanhSachThuPhiDichVuNgoaiTru;
                                        this.danhSachChiPhiKhamChuaBenh = responseDanhSachThuPhiDichVuNgoaiTru;
                                        //=====================get data lam tròn xuống  Math.floor ============================
                                        for (index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
                                            // kiểm tra xác nhận bảo hiểm y tế hay không?
                                            if (this.danhSachChiPhiKhamChuaBenh[index].DuocHuongBHYT) {
                                                fillterThuocBHYTXN = this.danhSachChiPhiKhamChuaBenh.filter(function (c) { return c.LoaiNhom === 6 && c.KiemTraBHYTXacNhan == false; });
                                                if (fillterThuocBHYTXN.length === 0) {
                                                    this.duyetBaoHiemYT = true;
                                                    this.disabledDuyetBaoHiemYT = false;
                                                    this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault = this.danhSachChiPhiKhamChuaBenh[index].KiemTraBHYTXacNhan ? true : false;
                                                }
                                                else {
                                                    this.checkboxOnly = false;
                                                    this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault = this.danhSachChiPhiKhamChuaBenh[index].KiemTraBHYTXacNhan ? true : false;
                                                }
                                            }
                                        }
                                        //===================== Bind nếu có công nợ đầu tiên ====================================
                                        if (this.danhSachChiPhiKhamChuaBenh.length > 0 && danhSachCongNoChoThu.CongNoChoThus.length > 0) {
                                            for (index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
                                                dsDanhSachCongNoChoThus = this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus;
                                                this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus = [];
                                                _loop_4 = function (subIndex) {
                                                    var soTienCongNoChoThuByTheoCongTy = dsDanhSachCongNoChoThus.filter(function (c) { return c.CongTyBaoHiemTuNhanId == danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId; })
                                                        .reduce(function (sum, item) { return sum + item.SoTienCongNoChoThu; }, 0);
                                                    var congNoItem = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["CongNoChoThu"]();
                                                    congNoItem.CongTyBaoHiemTuNhanId = danhSachCongNoChoThu.CongNoChoThus[subIndex].CongTyBaoHiemTuNhanId;
                                                    congNoItem.SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[subIndex].SoTienCongNoChoThu = soTienCongNoChoThuByTheoCongTy > 0 ? soTienCongNoChoThuByTheoCongTy : 0;
                                                    congNoItem.TenCongTy = danhSachCongNoChoThu.CongNoChoThus[subIndex].TenCongTy;
                                                    congNoItem.ViTri = danhSachCongNoChoThu.CongNoChoThus[subIndex].ViTri;
                                                    this_3.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus.push(congNoItem);
                                                };
                                                this_3 = this;
                                                for (subIndex = 0; subIndex < danhSachCongNoChoThu.CongNoChoThus.length; subIndex++) {
                                                    _loop_4(subIndex);
                                                }
                                            }
                                            this.danhSachCongNoChoThus = [];
                                            this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
                                        }
                                        // if (congNoMiemGiam != true) {
                                        // 	this.bindChiaTienCongNo();
                                        // }
                                    }
                                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.danhSachChiPhiKhamChuaBenh, this.state);
                                    this.myDanhSachChuaThanhToan();
                                    this.setSelectAll();
                                    this.setRemoveGroupFooterOnly();
                                    this.loadingCtThanhCong.emit(true);
                                    this.closeAllDialogs();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                DsChuaThuTienComponent.prototype.bindTamCongNo = function () {
                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.tamDanhSachChiPhiKhamChuaBenh, this.state);
                    this.myDanhSachChuaThanhToan();
                };
                DsChuaThuTienComponent.prototype.setRemoveGroupFooterOnly = function () {
                    setTimeout(function () {
                        if (jQuery("#danhSachChuaThuTienGrid .k-group-footer").length == 1) {
                            jQuery("#danhSachChuaThuTienGrid .k-group-footer").hide();
                        }
                        else {
                            jQuery("#danhSachChuaThuTienGrid .k-group-footer").show();
                        }
                    }, 100);
                };
                DsChuaThuTienComponent.prototype.soTienBenhNhanCanThanhToan = function () {
                    var totalBHYT = 0;
                    var totalThanhTien = 0;
                    if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
                        this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                            if (element.CheckedDefault === true) {
                                totalThanhTien += element.ThanhTien;
                                totalBHYT += element.BHYTThanhToan;
                            }
                        });
                    }
                    return (Math.round((totalThanhTien - totalBHYT) * 100) / 100);
                };
                DsChuaThuTienComponent.prototype.totalCongNo = function () {
                    var totalCongNoThanhToan = 0;
                    for (var index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
                        totalCongNoThanhToan += this.thongTinCongTyBaoHiemTuNhans[index].SoTienCongNo;
                    }
                    return totalCongNoThanhToan;
                };
                DsChuaThuTienComponent.prototype.findLast = function () {
                    for (var index = this.danhSachChiPhiKhamChuaBenh.length - 1; index >= 0; index--) {
                        if (this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault == true) {
                            return index;
                        }
                    }
                    return -1;
                };
                DsChuaThuTienComponent.prototype.bindChiaTienCongNo = function () {
                    var _this = this;
                    var totalTT = this.soTienBenhNhanCanThanhToan();
                    var totalCongNo = this.totalCongNo();
                    if (this.danhSachChiPhiKhamChuaBenh.length > 0 && totalCongNo > totalTT) {
                        this.notificationService.showError("Số tiền thanh toán công nợ không hợp lệ");
                        return;
                    }
                    this.danhSachCongNoChoThus = [];
                    if (this.thongTinCongTyBaoHiemTuNhans.length > 0) {
                        var danhSachCongNoChoThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachCongNoChoThu"]();
                        for (var index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
                            var congNo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["CongNoChoThu"]();
                            congNo.ViTri = index;
                            congNo.CongTyBaoHiemTuNhanId = this.thongTinCongTyBaoHiemTuNhans[index].Id;
                            congNo.TenCongTy = this.thongTinCongTyBaoHiemTuNhans[index].TenCongTy;
                            congNo.SoTienCongNoChoThu = 0;
                            danhSachCongNoChoThu.CongNoChoThus.push(congNo);
                        }
                        var lastItem = this.findLast();
                        var tongCongNo = 0;
                        if (danhSachCongNoChoThu.CongNoChoThus.length > 0) {
                            var kiemTraCongNoTruocDo = this.tamDanhSachChiPhiKhamChuaBenh.some(function (cc) { return cc.DanhSachCongNoChoThus.some(function (ccc) { return ccc.SoTienCongNoChoThu != 0; }); });
                            for (var index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
                                if (this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
                                    if (this.position != -1) {
                                        this.danhSachChiPhiKhamChuaBenh[index].TLMG = 0;
                                        this.danhSachChiPhiKhamChuaBenh[index].SoTienMG = 0;
                                        this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - this.danhSachChiPhiKhamChuaBenh[index].SoTienMG - this.danhSachChiPhiKhamChuaBenh[index].DaThanhToan;
                                        if (index == lastItem) {
                                            if (!kiemTraCongNoTruocDo) {
                                                this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu = this.apDungCNAndMiemGiam ? this.thongTinCongTyBaoHiemTuNhans[this.position].SoTienCongNo - tongCongNo : this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
                                            }
                                        }
                                        if (index != lastItem) {
                                            if (this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus.length > 0) {
                                                if (kiemTraCongNoTruocDo) {
                                                    this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
                                                        danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu =
                                                            this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
                                                    tongCongNo += this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
                                                }
                                                else {
                                                    this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu =
                                                        danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu = this.apDungCNAndMiemGiam ?
                                                            this.tinhTienCongNo(this.danhSachChiPhiKhamChuaBenh[index].ThanhTien, this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan, danhSachCongNoChoThu.CongNoChoThus[this.position].CongTyBaoHiemTuNhanId, totalTT) :
                                                            this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
                                                    tongCongNo += this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu;
                                                }
                                            }
                                        }
                                        this.danhSachChiPhiKhamChuaBenh[index].KiemTraTienSoTienItemDichVu = this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan < 0 ? true : false;
                                    }
                                }
                                else {
                                    if (this.position != -1) {
                                        this.danhSachChiPhiKhamChuaBenh[index].DanhSachCongNoChoThus[this.position].SoTienCongNoChoThu = danhSachCongNoChoThu.CongNoChoThus[this.position].SoTienCongNoChoThu = 0;
                                    }
                                }
                            }
                            this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                                if (element.CheckedDefault === true) {
                                    var totalCongNo_2 = 0;
                                    element.DanhSachCongNoChoThus.forEach(function (element) {
                                        totalCongNo_2 += element.SoTienCongNoChoThu;
                                    });
                                    return (element.BNConPhaiThanhToan = element.ThanhTien - element.BHYTThanhToan - totalCongNo_2 - element.DaThanhToan);
                                }
                            });
                            this.danhSachCongNoChoThus.push(danhSachCongNoChoThu);
                        }
                    }
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        element.SoTienMG = _this.tinhSoTienMiemGiam(element);
                        _this.modelChangeSoTienMG(element);
                    });
                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.danhSachChiPhiKhamChuaBenh, this.state);
                    this.myDanhSachChuaThanhToan();
                };
                DsChuaThuTienComponent.prototype.tinhTienCongNo = function (itemThanhTien, itemBHYTThanhToan, congNoId, totalTT) {
                    var totalCongNo = 0;
                    //kiểm tra công nợ được áp dụng tiền
                    for (var index = 0; index < this.thongTinCongTyBaoHiemTuNhans.length; index++) {
                        if (this.thongTinCongTyBaoHiemTuNhans[index].Id == congNoId) {
                            totalCongNo = this.thongTinCongTyBaoHiemTuNhans[index].SoTienCongNo;
                        }
                    }
                    var itemSoTienCongNo = Math.round(parseFloat(((totalCongNo / totalTT) * (itemThanhTien - itemBHYTThanhToan)).toPrecision(15)) * 100) / 100;
                    return itemSoTienCongNo;
                };
                DsChuaThuTienComponent.prototype.rowCallback = function (context) {
                    var capNhatThanhToan = context.dataItem.CapNhatThanhToan == true;
                    return {
                        "bg-row-lightpurple": capNhatThanhToan,
                    };
                };
                DsChuaThuTienComponent.prototype.tinhTiLeMiemGiamInGrid = function (data) {
                    var tongCongNoItem = this.itemTotalCongNo(data.DanhSachCongNoChoThus);
                    var sumSoTienBenhNhanTra = data.ThanhTien - data.BHYTThanhToan - tongCongNoItem;
                    if (sumSoTienBenhNhanTra == 0 || isNaN(data.SoTienMG)) {
                        return 0;
                    }
                    return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
                };
                DsChuaThuTienComponent.prototype.itemTotalCongNo = function (danhSachCongNoChoThus) {
                    var toatalCongNo = 0;
                    danhSachCongNoChoThus.forEach(function (cn) {
                        if (cn.SoTienCongNoChoThu >= 0) {
                            toatalCongNo += cn.SoTienCongNoChoThu;
                        }
                    });
                    return toatalCongNo;
                };
                DsChuaThuTienComponent.prototype.tinhTLMGTheoSoTien = function (totalSoTienBenhNhanThanhToan, totalSoTienConDuocMiemGiam) {
                    var tle = totalSoTienConDuocMiemGiam / totalSoTienBenhNhanThanhToan;
                    return parseInt((tle * 100).toString());
                };
                DsChuaThuTienComponent.prototype.tinhSoTienTheoTLMG = function (totalSoTienBenhNhanThanhToan, tiLeMienGiam) {
                    var tien = Math.round(totalSoTienBenhNhanThanhToan * tiLeMienGiam);
                    return Math.floor(tien / 100);
                };
                DsChuaThuTienComponent.prototype.modelChangeCongNo = function (ev, data, vitri) {
                    var _this = this;
                    if (ev == undefined && ev == null) {
                        data.DanhSachCongNoChoThus[vitri].SoTienCongNoChoThu = 0;
                    }
                    this.changeInputCongNoBindGrid(ev, data);
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        if (element.Id === data.Id) {
                            //element.SoTienMG = this.tinhSoTienMiemGiam(element);
                            _this.modelChangeSoTienMG(element);
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.modelChangeSoTienMG = function (data) {
                    this.changeInputSoTienMGBindGrid(data);
                    this.myDanhSachChuaThanhToan();
                };
                DsChuaThuTienComponent.prototype.changeInputCongNoBindGrid = function (ev, dsChiPhiKhamChuaBenh) {
                    for (var index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
                        if (this.danhSachChiPhiKhamChuaBenh[index].CapNhatThanhToan != true && this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
                            if (this.danhSachChiPhiKhamChuaBenh[index].Id === dsChiPhiKhamChuaBenh.Id) {
                                this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - ev - this.danhSachChiPhiKhamChuaBenh[index].SoTienMG;
                                this.danhSachChiPhiKhamChuaBenh[index].KiemTraTienSoTienItemDichVu = this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan < 0 ? true : false;
                            }
                        }
                        else {
                            if (this.danhSachChiPhiKhamChuaBenh[index].Id === dsChiPhiKhamChuaBenh.Id) {
                                if (ev - this.danhSachChiPhiKhamChuaBenh[index].DaThanhToan <= 0) {
                                    this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = -ev;
                                }
                                //  else {
                                // 	this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = 0;
                                // 	//this.notificationService.showError(this.commonThuTien.SoTienCongNoNhapVuotQuaTienDV);
                                // }
                            }
                        }
                    }
                    this.tamDanhSachChiPhiKhamChuaBenh = this.danhSachChiPhiKhamChuaBenh.slice();
                    this.bindTamCongNo();
                };
                DsChuaThuTienComponent.prototype.changeInputSoTienMGBindGrid = function (dsChiPhiKhamChuaBenh) {
                    for (var index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
                        var totalCongNo = this.itemTotalCongNo(dsChiPhiKhamChuaBenh.DanhSachCongNoChoThus);
                        if (this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
                            if (this.danhSachChiPhiKhamChuaBenh[index].Id === dsChiPhiKhamChuaBenh.Id) {
                                dsChiPhiKhamChuaBenh.BNConPhaiThanhToan = dsChiPhiKhamChuaBenh.ThanhTien - dsChiPhiKhamChuaBenh.BHYTThanhToan - totalCongNo - dsChiPhiKhamChuaBenh.SoTienMG - dsChiPhiKhamChuaBenh.DaThanhToan;
                                this.danhSachChiPhiKhamChuaBenh[index].KiemTraTienSoTienItemDichVu = this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan < 0 ? true : false;
                            }
                        }
                    }
                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.danhSachChiPhiKhamChuaBenh, this.state);
                };
                DsChuaThuTienComponent.prototype.unCheckedBindSoTienMG = function (id) {
                    for (var index = 0; index < this.danhSachChiPhiKhamChuaBenh.length; index++) {
                        if (this.danhSachChiPhiKhamChuaBenh[index].CapNhatThanhToan === false && this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === true) {
                            if (this.danhSachChiPhiKhamChuaBenh[index].Id === id) {
                                this.danhSachChiPhiKhamChuaBenh[index].SoTienMG = 0;
                                this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - this.danhSachChiPhiKhamChuaBenh[index].TongCongNo;
                            }
                        }
                        //trường hợp này sẽ check bỏ uncheck số tiền bind về lúc đầu
                        if (this.danhSachChiPhiKhamChuaBenh[index].CapNhatThanhToan === true && this.danhSachChiPhiKhamChuaBenh[index].CheckedDefault === false) {
                            if (this.danhSachChiPhiKhamChuaBenh[index].Id === id) {
                                this.danhSachChiPhiKhamChuaBenh[index].SoTienMG = 0;
                                this.danhSachChiPhiKhamChuaBenh[index].BNConPhaiThanhToan = this.danhSachChiPhiKhamChuaBenh[index].ThanhTien - this.danhSachChiPhiKhamChuaBenh[index].BHYTThanhToan - this.danhSachChiPhiKhamChuaBenh[index].TongCongNo;
                            }
                        }
                    }
                    this.gridData = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.danhSachChiPhiKhamChuaBenh, this.state);
                };
                DsChuaThuTienComponent.prototype.onSelectChangeCheckbox = function (e, val) {
                    //this.unCheckedBindSoTienMG(val);
                    this.mySelection = [];
                    if (e.target.checked) {
                        this.mySelectionInPage.push(val);
                    }
                    else {
                        this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
                    }
                    var allData = this.dataSource.data;
                    var len = this.mySelectionInPage.length;
                    this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                    if (len === 0) {
                        this.selectAllState = "unchecked";
                    }
                    else if (len > 0 && len < allData.filter(function (obj) { return obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false); }).length) {
                        this.selectAllState = "indeterminate";
                    }
                    else {
                        this.selectAllState = "checked";
                    }
                    this.extCheckboxSelection(this.mySelection);
                };
                DsChuaThuTienComponent.prototype.onSelectAllChange = function (checkedState) {
                    var _this = this;
                    var allData = this.dataSource.data;
                    if (allData == undefined)
                        allData = [];
                    if (checkedState === "checked") {
                        this.mySelectionInPage = allData.filter(function (obj) { return obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false); }).map(function (item) { return item[_this.keySelectBy]; });
                        this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                        this.selectAllState = "checked";
                    }
                    else {
                        var mySelectionRemove = allData.filter(function (obj) { return obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false); }).map(function (item) { return item[_this.keySelectBy]; });
                        if (mySelectionRemove != null && mySelectionRemove.length > 0) {
                            mySelectionRemove.forEach(function (obj) {
                                _this.mySelection.splice(_this.mySelection.indexOf(obj), 1);
                            });
                        }
                        this.mySelectionInPage = [];
                        this.selectAllState = "unchecked";
                    }
                    this.extCheckboxSelection(this.mySelection);
                    this.bindCheckToaThuoc();
                };
                DsChuaThuTienComponent.prototype.bindCheckToaThuoc = function () {
                    var checkToaThuocs = this.danhSachChiPhiKhamChuaBenh.filter(function (c) { return c.LoaiNhom == 6 && c.CheckedDefault === true; });
                    if (checkToaThuocs.length > 0) {
                        this.duyetBaoHiemYT = true;
                    }
                    else {
                        this.duyetBaoHiemYT = false;
                    }
                };
                DsChuaThuTienComponent.prototype.apDungMiemGiamThem = function () {
                    var _this = this;
                    var type = "NgoaiTru";
                    var yeuCauTiepNhanId = this.yeuCauTiepNhanId;
                    var dataMGT = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["ApDungMiemGiamThem"];
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog.open(_common_ap_dung_miem_giam_them_popup_ap_dung_miem_giam_them_popup_component__WEBPACK_IMPORTED_MODULE_15__["ApDungMiemGiamThemComponent"], {
                        disableClose: true,
                        width: "700px",
                        data: { dataMGT: dataMGT, type: type, yeuCauTiepNhanId: yeuCauTiepNhanId }
                    }).afterClosed().subscribe(function (result) {
                        if (result != null) {
                            if (result != null) {
                                switch (result.Type) {
                                    case 'MiemGiam':
                                        _this.bindMiemGiamPhanTramVaSoTien(result.DataResult);
                                        break;
                                    case 'MiemGiamBangThanhTien':
                                        _this.bindMiemGiamBangThanhTienDichVu(result.DataResult);
                                        break;
                                }
                            }
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.bindMiemGiamBangThanhTienDichVu = function (result) {
                    var _this = this;
                    if (result != undefined && result != null) {
                        if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
                            this.notificationService.showSuccess(this.commonThuTien.ApDungMiemGiamThanhCong);
                            //tính số tiền miễm giam tren grid
                            var danhSachMiemGiamBangThanhTien_1 = result;
                            this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                                danhSachMiemGiamBangThanhTien_1.forEach(function (dsChonMG) {
                                    if (dsChonMG.Id == element.Id) {
                                        element.SoTienMG = _this.tinhSoTienMiemGiamBangThanhTienDichVu(element);
                                        _this.modelChangeSoTienMG(element);
                                    }
                                });
                            });
                        }
                    }
                };
                DsChuaThuTienComponent.prototype.bindMiemGiamPhanTramVaSoTien = function (result) {
                    var _this = this;
                    if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
                        this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                            for (var _i = 0, _a = element.DanhSachMienGiamVos.filter(function (x) { return x.LoaiMienGiam === _this.loaiMienGiam.MienGiamThem; }); _i < _a.length; _i++) {
                                var danhSachMienGiam = _a[_i];
                                element.DanhSachMienGiamVos.splice(element.DanhSachMienGiamVos.indexOf(danhSachMienGiam), 1);
                            }
                        });
                        if (result.TiLe != undefined && result.TiLe != null) {
                            this.bindMiemGiamThemTiLe(result.TiLe, result.GhiChu, result.NoiDungGhiChuMiemGiamId);
                        }
                        if (result.SoTien != undefined && result.SoTien != null) {
                            this.bindMiemGiamThemSoTien(result.SoTien, result.GhiChu, result.NoiDungGhiChuMiemGiamId);
                        }
                        this.notificationService.showSuccess(this.commonThuTien.ApDungMiemGiamThanhCong);
                        //tính số tiền miễm giam tren grid
                        this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                            element.SoTienMG = _this.tinhSoTienMiemGiam(element);
                            _this.modelChangeSoTienMG(element);
                        });
                    }
                };
                DsChuaThuTienComponent.prototype.apDungMiemGiamChoTungDichVu = function (dataItem) {
                    var _this = this;
                    this.tamDanhSachChiPhiKhamChuaBenh = this.danhSachChiPhiKhamChuaBenh;
                    var isView = true;
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog
                        .open(_common_ap_dung_miem_giam_cho_tung_dv_popup_ap_dung_miem_giam_cho_tung_dv_popup_component__WEBPACK_IMPORTED_MODULE_16__["ApDungMiemGiamChoTungDichVuComponent"], {
                        disableClose: true,
                        width: "700px",
                        data: { dataItem: dataItem, isView: isView },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result != null) {
                            //tính số tiền miễm giam tren grid					
                            if (result.apdungMGTThanhCong) {
                                _this.notificationService.showSuccess(_this.commonThuTien.ApDungMiemGiamThanhCong);
                                _this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                                    if (element.Id === result.Id) {
                                        element.GhiChuMienGiamThem = result.GhiChuMienGiamThem;
                                        element.NoiDungGhiChuMiemGiamId = result.NoiDungGhiChuMiemGiamId;
                                        element.SoTienMG = _this.tinhSoTienMiemGiam(element);
                                        _this.modelChangeSoTienMG(element);
                                    }
                                });
                            }
                            else {
                                _this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                                    if (element.Id === result.Id) {
                                        element.GhiChuMienGiamThem = result.GhiChuMienGiamThem;
                                        element.NoiDungGhiChuMiemGiamId = result.NoiDungGhiChuMiemGiamId;
                                        element.DanhSachMienGiamVos.forEach(function (item) {
                                            result.DanhSachMienGiamVos.forEach(function (item1) {
                                                if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 1) {
                                                    {
                                                        item.TiLe = item1.TiLe;
                                                        item.TongTienMiemGiam = 0;
                                                        item.DaSuDung = false;
                                                    }
                                                }
                                                if (item1.LoaiMienGiam === item.LoaiMienGiam && item1.LoaiChietKhau === 2) {
                                                    {
                                                        item.SoTien = item1.SoTien;
                                                        item.TongTienMiemGiam = 0;
                                                        item.DaSuDung = false;
                                                    }
                                                }
                                            });
                                        });
                                    }
                                });
                            }
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.bindMiemGiamThemTiLe = function (tiLe, ghiChu, noiDungGhiChuMiemGiamId) {
                    var _this = this;
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        var dsMiemGiamThem = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachMienGiamVo"]();
                        dsMiemGiamThem.LoaiMienGiam = _this.loaiMienGiam.MienGiamThem;
                        dsMiemGiamThem.LoaiChietKhau = _this.loaiChietKhau.ChietKhauTheoTiLe;
                        dsMiemGiamThem.TiLe = tiLe;
                        element.GhiChuMienGiamThem = ghiChu;
                        element.NoiDungGhiChuMiemGiamId = noiDungGhiChuMiemGiamId;
                        element.DanhSachMienGiamVos.push(dsMiemGiamThem);
                    });
                };
                DsChuaThuTienComponent.prototype.bindMiemGiamThemSoTien = function (soTien, ghiChu, noiDungGhiChuMiemGiamId) {
                    var _this = this;
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        var dsMiemGiamThem = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachMienGiamVo"]();
                        dsMiemGiamThem.LoaiMienGiam = _this.loaiMienGiam.MienGiamThem;
                        dsMiemGiamThem.LoaiChietKhau = _this.loaiChietKhau.ChietKhauTheoSoTien;
                        dsMiemGiamThem.SoTien = soTien;
                        dsMiemGiamThem.SoTienMiemGiamTatCa = soTien;
                        element.GhiChuMienGiamThem = ghiChu;
                        element.NoiDungGhiChuMiemGiamId = noiDungGhiChuMiemGiamId;
                        element.DanhSachMienGiamVos.push(dsMiemGiamThem);
                    });
                };
                DsChuaThuTienComponent.prototype.soTienCongNoChoTungDichVu = function (dataItem) {
                    var soTienCongNo = 0;
                    dataItem.DanhSachCongNoChoThus.forEach(function (element) {
                        soTienCongNo = soTienCongNo + element.SoTienCongNoChoThu;
                    });
                    return soTienCongNo;
                };
                DsChuaThuTienComponent.prototype.tinhSoTienMiemGiamBangThanhTienDichVu = function (dataItem) {
                    if (dataItem != undefined && dataItem != null) {
                        var tongTienTungDichVu_1 = ((dataItem.DonGia * dataItem.Soluong));
                        if (tongTienTungDichVu_1 > 0) {
                            if (dataItem.DanhSachMienGiamVos != undefined && dataItem.DanhSachMienGiamVos != null) {
                                var dsMienGiamTheoTiLe = dataItem.DanhSachMienGiamVos.filter(function (item) { return item.LoaiChietKhau == 1 && item.TiLe != 0; });
                                dsMienGiamTheoTiLe = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoTiLe, 'LoaiMienGiam');
                                dsMienGiamTheoTiLe.forEach(function (item) {
                                    item.TiLe = 0;
                                    item.TongTienMiemGiam = 0;
                                });
                                var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(function (item) { return item.LoaiChietKhau == 2; });
                                dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                                dsMienGiamTheoSoTien.forEach(function (item) {
                                    item.TongTienMiemGiam = tongTienTungDichVu_1;
                                    item.SoTien = tongTienTungDichVu_1;
                                });
                            }
                            else {
                                dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                                dsMienGiamTheoSoTien.forEach(function (item) {
                                    item.SoTien = 0;
                                });
                            }
                        }
                        return tongTienTungDichVu_1;
                    }
                };
                DsChuaThuTienComponent.prototype.tinhSoTienMiemGiam = function (dataItem) {
                    if (dataItem != undefined && dataItem != null) {
                        var tongTatCaSoTienMg_1 = 0;
                        var tiLePhanTramConLai = 100;
                        var tongTienTungDichVu_2 = ((dataItem.DonGia * dataItem.Soluong)) - dataItem.BHYTThanhToan;
                        var soTienConLai = tongTienTungDichVu_2;
                        if (tongTienTungDichVu_2 > 0) {
                            if (dataItem.DanhSachMienGiamVos != undefined && dataItem.DanhSachMienGiamVos != null) {
                                var dsMienGiamTheoPhanTram = dataItem.DanhSachMienGiamVos.filter(function (item) { return item.LoaiChietKhau == 1 && item.TiLe != 0; });
                                var dsMienGiamTheoSoTien = dataItem.DanhSachMienGiamVos.filter(function (item) { return item.LoaiChietKhau == 2 && item.SoTien != 0; });
                                if (dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0) {
                                    dsMienGiamTheoPhanTram = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoPhanTram, 'LoaiMienGiam');
                                    dsMienGiamTheoPhanTram.forEach(function (item) {
                                        if (tiLePhanTramConLai > 0) {
                                            item.TiLe = item.TiLe > tiLePhanTramConLai ? tiLePhanTramConLai : item.TiLe;
                                        }
                                        else {
                                            item.TiLe = 0;
                                        }
                                        item.TongTienMiemGiam = Math.round((item.TiLe * tongTienTungDichVu_2) / 100 * 100) / 100;
                                        tongTatCaSoTienMg_1 += item.TongTienMiemGiam;
                                        if (item.TiLe >= tiLePhanTramConLai) {
                                            tiLePhanTramConLai = 0;
                                        }
                                        else {
                                            tiLePhanTramConLai = tiLePhanTramConLai - item.TiLe;
                                        }
                                    });
                                }
                                if (tiLePhanTramConLai > 0 && dsMienGiamTheoSoTien != null && dsMienGiamTheoSoTien.length > 0) {
                                    tiLePhanTramConLai = dsMienGiamTheoPhanTram != null && dsMienGiamTheoPhanTram.length > 0 ? tiLePhanTramConLai : 0;
                                    //soTienConLai = tiLePhanTramConLai != 0 ? (((dataItem.ThanhTien - dataItem.BHYTThanhToan - this.soTienCongNoChoTungDichVu(dataItem)) * tiLePhanTramConLai) / 100) : dataItem.ThanhTien - dataItem.BHYTThanhToan - this.soTienCongNoChoTungDichVu(dataItem);
                                    //Khách muốn khi nhập số tiền miễm giảm thì cần bind thành tiền dv vào miễm giảm lun
                                    soTienConLai = tiLePhanTramConLai != 0 ? (((dataItem.ThanhTien) * tiLePhanTramConLai) / 100) : dataItem.ThanhTien;
                                    //Sắp xếp theo thứ tự:Ưu đãi, Voucher, Miễn giảm thêm
                                    dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                                    dsMienGiamTheoSoTien.forEach(function (item) {
                                        //Nếu số tiền còn lại sau khi đổ từ trên xuống
                                        if (soTienConLai > 0) {
                                            item.SoTien = item.SoTien > soTienConLai ? soTienConLai : item.SoTien;
                                        }
                                        else {
                                            item.SoTien = 0;
                                        }
                                        item.TongTienMiemGiam = item.SoTien;
                                        tongTatCaSoTienMg_1 += item.TongTienMiemGiam;
                                        if (item.SoTien >= soTienConLai) {
                                            soTienConLai = 0;
                                        }
                                        else {
                                            soTienConLai = soTienConLai - item.SoTien;
                                        }
                                    });
                                }
                                else {
                                    dsMienGiamTheoSoTien = underscore__WEBPACK_IMPORTED_MODULE_17__["sortBy"](dsMienGiamTheoSoTien, 'LoaiMienGiam');
                                    dsMienGiamTheoSoTien.forEach(function (item) {
                                        //NẾU PHẦN TRĂM MÀ SÀI HẾT THÌ BIND TIỀN TẤT CẢ CON LẠI BẰNG 0
                                        item.SoTien = 0;
                                    });
                                }
                            }
                        }
                        return tongTatCaSoTienMg_1 < 0 ? 0 : tongTatCaSoTienMg_1;
                    }
                };
                DsChuaThuTienComponent.prototype.BackToList = function () {
                    var yctn = this.route.snapshot.queryParams.yctn;
                    if (yctn) {
                        this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
                    }
                    else {
                        this.router.navigate(["/danh-sach-thu-dich-vu"], {
                            queryParamsHandling: "preserve",
                        });
                    }
                };
                DsChuaThuTienComponent.prototype.luuTamChiPhiNgoaitru = function () {
                    var _this = this;
                    this.dialog
                        .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                        disableClose: false,
                        width: "400px",
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_19__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].MessConfirm, ["lưu tạm chi phí"]) },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result === "Yes") {
                            _this.showLoadingPopup();
                            var danhSachChiPhiThuTamUng = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["DanhSachChiPhiThuTamUng"]();
                            danhSachChiPhiThuTamUng.DanhSachChiPhiKhamChuaBenhDaChons = _this.danhSachChiPhiKhamChuaBenh;
                            danhSachChiPhiThuTamUng.Id = _this.yeuCauTiepNhanId;
                            if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Update)) {
                                _this.apiService.post("ThuNgan/LuuTamChiPhiNgoaiTru", danhSachChiPhiThuTamUng).subscribe(function () {
                                    _this.getThongTinYeuCauBenhNhan(_this.yeuCauTiepNhanId, true);
                                    _this.bindChiaTienCongNo();
                                    _this.closeAllDialogs();
                                    _this.notificationService.showSuccess("Lưu tạm chi phí thành công");
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                        _this.closeAllDialogs();
                                    }
                                });
                            }
                            else {
                                _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["SystemMessage"].UnAuthorizedMessage);
                                _this.closeAllDialogs();
                            }
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.xemTruocChiPhi = function () {
                    var _this = this;
                    this.showLoadingPopup();
                    var arrFileUrl = [];
                    var arrFilePdf = [];
                    var hostingName = "http://" + "//" + window.location.host;
                    this.apiService.postExportPdf("ThuNgan/XemTruocBangKeChiPhi?yeuCauTiepNhanId=" + this.yeuCauTiepNhanId + "&hostingName=" + hostingName).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        arrFileUrl.push(datalocalURL);
                        arrFilePdf.push(file);
                        if (arrFilePdf.length > 0) {
                            _this.dialog
                                .open(_common_common_pdf_popup_ngoai_tru_common_pdf_popup_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_24__["CommonPdfPopupNgoaiTruComponent"], {
                                disableClose: false,
                                width: "1000px",
                                data: { arrFileUrl: arrFileUrl, arrFilePdf: arrFilePdf, yeuCauTiepNhanId: _this.yeuCauTiepNhanId, loaiBangKeChiPhi: _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_6__["LoaiBangKeChiPhi"].XemTruocBangKe },
                            })
                                .afterClosed()
                                .subscribe(function (result) { _this.closeAllDialogs(); });
                        }
                        else {
                            _this.notificationService.showError("Chưa có thông tin dịch vụ.");
                            _this.closeAllDialogs();
                        }
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            _this.closeAllDialogs();
                        }
                    });
                };
                DsChuaThuTienComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                DsChuaThuTienComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_23__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                DsChuaThuTienComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return DsChuaThuTienComponent;
            }());
            DsChuaThuTienComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "dataSourceChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "apDungCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "apCapNhatThanhToan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "position", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "thongTinCongTyBaoHiemTuNhans", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "loadingCtThanhCong", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "apDungMiemGiam", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsChuaThuTienComponent.prototype, "thongTinMienGiamVos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "danhSachChuaThanhToan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "kiemTraDanhSachXNBHYT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "afterChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "afterChangedCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "afterapDungMiemGiam", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "kiemTraDSCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "afterapDungCNTT", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsChuaThuTienComponent.prototype, "afterApDungHuyThanhCong", void 0);
            DsChuaThuTienComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-ds-chua-thu-tien",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-chua-thu-tien.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-chua-thu-tien.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.scss")).default]
                })
            ], DsChuaThuTienComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.scss": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.scss ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".size-icon {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  text-align: center;\n}\n\n.float_right {\n  float: right;\n}\n\n.color-green {\n  color: green;\n}\n\n.color-red {\n  color: red;\n}\n\n.text-hoan-thu {\n  color: red;\n  font-size: 19px;\n}\n\n.reverse-ellipsis.r {\n  text-align: right;\n  direction: inherit;\n}\n\n.yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2RzLWRhLXRodS10aWVuL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGh1LWNoaVxcdGh1LWNoaS12aWVuLXBoaVxcbmdvYWktdHJ1XFxjaG8tdGh1LXRpZW5cXGRzLWRhLXRodS10aWVuXFxkcy1kYS10aHUtdGllbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL2RzLWRhLXRodS10aWVuL2RzLWRhLXRodS10aWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vZHMtZGEtdGh1LXRpZW4vZHMtZGEtdGh1LXRpZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2l6ZS1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsb2F0X3JpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4udGV4dC1ob2FuLXRodSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLnJldmVyc2UtZWxsaXBzaXMuciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXJlY3Rpb246IGluaGVyaXQ7XG59XG5cbi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59IiwiLnNpemUtaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbG9hdF9yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRleHQtaG9hbi10aHUge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLnIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlyZWN0aW9uOiBpbmhlcml0O1xufVxuXG4ueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: DsDaThuTienComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsDaThuTienComponent", function () { return DsDaThuTienComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-remove-red-eye */ "./node_modules/@iconify/icons-ic/twotone-remove-red-eye.js");
            /* harmony import */ var _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _common_ap_dung_miem_giam_cho_tung_dv_view_popup_ap_dung_miem_giam_cho_tung_dv_view_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/ap-dung-miem-giam-cho-tung-dv-view-popup/ap-dung-miem-giam-cho-tung-dv-view-popup.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var DsDaThuTienComponent = /** @class */ (function () {
                function DsDaThuTienComponent(route, apiService, dialog, authService, notificationService) {
                    this.route = route;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.danhSachChiPhiKhamChuaBenh = [];
                    this.dataSourceChanged = false;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].ThuNgan;
                    this.danhSachCongNoChoThus = [];
                    this.yeuCauTiepNhanId = 0;
                    this.showHuyThanhToan = false;
                    this.showCapNhatThanhToan = false;
                    this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_8__["CommonThuTien"]();
                    this.icRedEye = _iconify_icons_ic_twotone_remove_red_eye__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.confrim = null;
                    this.tabIndex = 0;
                    this.afterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.huyThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.capnhatThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loadingThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.daThuTienGridColumns = [];
                    this.dataSource = {
                        data: [],
                        total: 0,
                    };
                    this.groups = [
                        {
                            field: "Nhom",
                            aggregates: [
                                { field: "ThanhTien", aggregate: "sum" },
                                { field: "BHYTThanhToan", aggregate: "sum" },
                                { field: "SoTienMG", aggregate: "sum" },
                                { field: "DaThanhToan", aggregate: "sum" },
                                { field: "BNConPhaiThanhToan", aggregate: "sum" },
                                { field: "TongCongNo", aggregate: "sum" },
                            ],
                        },
                    ];
                    this.state = {
                        group: this.groups,
                    };
                    this.checkboxOnly = true;
                    //Xử lý checkedboxq
                    this.keySelectBy = "Id";
                    this.mySelection = [];
                    this.mySelectionInPage = [];
                    this.selectAllState = "unchecked";
                }
                //--------------------------------- Begin total colunm------------------------------------------------------------
                DsDaThuTienComponent.prototype.total = function (field) {
                    switch (field) {
                        case "BNConPhaiThanhToan":
                            return this.XuLyTotalForField("BNConPhaiThanhToan");
                            break;
                        case "DaThanhToan":
                            return this.XuLyTotalForField("DaThanhToan");
                            break;
                        case "SoTienMG":
                            return this.XuLyTotalForField("SoTienMG");
                            break;
                        case "ThanhTien":
                            return this.XuLyTotalForField("ThanhTien");
                            break;
                        case "BHYTThanhToan":
                            return this.XuLyTotalForField("BHYTThanhToan");
                            break;
                        case "TongCongNo":
                            return this.XuLyTotalForField("TongCongNo");
                            break;
                    }
                };
                DsDaThuTienComponent.prototype.XuLyTotalForField = function (field) {
                    var sum = 0;
                    if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null && this.danhSachChiPhiKhamChuaBenh.length > 0) {
                        this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                            switch (field) {
                                case "BNConPhaiThanhToan":
                                    sum = sum + element.BNConPhaiThanhToan;
                                    break;
                                case "DaThanhToan":
                                    sum = sum + element.DaThanhToan;
                                    break;
                                case "SoTienMG":
                                    sum = sum + element.SoTienMG;
                                    break;
                                case "ThanhTien":
                                    sum = sum + element.ThanhTien;
                                    break;
                                case "BHYTThanhToan":
                                    sum = sum + element.BHYTThanhToan;
                                    break;
                                case "TongCongNo":
                                    sum = sum + element.TongCongNo;
                                    break;
                            }
                        });
                    }
                    return sum;
                };
                //--------------------------------- End total colunm-----------------------------------------------------------
                DsDaThuTienComponent.prototype.ngOnChanges = function (value) {
                    if (this.dataSourceChanged == true) {
                        this.gridDataDaThu = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.danhSachChiPhiKhamChuaBenh, this.state);
                        this.setSelectAll();
                        this.setRemoveGroupFooterOnly();
                    }
                };
                DsDaThuTienComponent.prototype.ngOnInit = function () {
                    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
                    if (this.danhSachChiPhiKhamChuaBenh != undefined && this.danhSachChiPhiKhamChuaBenh != null) {
                        this.gridDataDaThu = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_2__["process"])(this.danhSachChiPhiKhamChuaBenh, this.state);
                        this.setRemoveGroupFooterOnly();
                    }
                };
                DsDaThuTienComponent.prototype.extCheckboxSelection = function (event) {
                    this.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                        element.CheckedDefault = false;
                    });
                    if (event.length > 0) {
                        var _loop_5 = function (index) {
                            this_4.danhSachChiPhiKhamChuaBenh.forEach(function (element) {
                                {
                                    if (element.Id == event[index]) {
                                        return (element.CheckedDefault = true);
                                    }
                                }
                            });
                        };
                        var this_4 = this;
                        for (var index = 0; index < event.length; index++) {
                            _loop_5(index);
                        }
                    }
                };
                DsDaThuTienComponent.prototype.ViewThongTinMG = function (dataItem) {
                    var isView = false;
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog
                        .open(_common_ap_dung_miem_giam_cho_tung_dv_view_popup_ap_dung_miem_giam_cho_tung_dv_view_popup_component__WEBPACK_IMPORTED_MODULE_10__["MiemGiamTheoDVComponent"], {
                        disableClose: true,
                        width: "500px",
                        data: { dataItem: dataItem, isView: isView },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        if (result != null) {
                        }
                    });
                };
                DsDaThuTienComponent.prototype.setSelectAll = function () {
                    setTimeout(function () {
                        if (!jQuery("#selectAllCheckboxId1").prop("checked")) {
                            jQuery("#selectAllCheckboxId1").trigger("click");
                        }
                    }, 1000);
                };
                DsDaThuTienComponent.prototype.onSelectChangeCheckbox1 = function (e, val) {
                    this.mySelection = [];
                    if (e.target.checked) {
                        this.mySelectionInPage.push(val);
                    }
                    else {
                        this.mySelectionInPage.splice(this.mySelectionInPage.indexOf(val), 1);
                    }
                    var allData = this.dataSource.data;
                    var len = this.mySelectionInPage.length;
                    this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                    if (len === 0) {
                        this.selectAllState = "unchecked";
                    }
                    else if (len > 0 && len < allData.filter(function (obj) { return obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false); }).length) {
                        this.selectAllState = "indeterminate";
                    }
                    else {
                        this.selectAllState = "checked";
                    }
                    this.extCheckboxSelection(this.mySelection);
                };
                DsDaThuTienComponent.prototype.onSelectAllChange1 = function (checkedState) {
                    var _this = this;
                    var allData = this.dataSource.data;
                    if (allData == undefined)
                        allData = [];
                    if (checkedState === "checked") {
                        this.mySelectionInPage = allData.filter(function (obj) { return obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false); }).map(function (item) { return item[_this.keySelectBy]; });
                        this.mySelection = this.mySelection.concat(this.mySelectionInPage);
                        this.selectAllState = "checked";
                    }
                    else {
                        var mySelectionRemove = allData.filter(function (obj) { return obj.HideCheckbox == null || (obj.HideCheckbox != undefined && obj.HideCheckbox == false); }).map(function (item) { return item[_this.keySelectBy]; });
                        if (mySelectionRemove != null && mySelectionRemove.length > 0) {
                            mySelectionRemove.forEach(function (obj) {
                                _this.mySelection.splice(_this.mySelection.indexOf(obj), 1);
                            });
                        }
                        this.mySelectionInPage = [];
                        this.selectAllState = "unchecked";
                    }
                    this.extCheckboxSelection(this.mySelection);
                };
                DsDaThuTienComponent.prototype.setRemoveGroupFooterOnly = function () {
                    setTimeout(function () {
                        if (jQuery("#danhSachDaThuTienGrid .k-group-footer").length == 1) {
                            jQuery("#danhSachDaThuTienGrid .k-group-footer").hide();
                        }
                        else {
                            jQuery("#danhSachDaThuTienGrid .k-group-footer").show();
                        }
                    }, 100);
                };
                DsDaThuTienComponent.prototype.tinhTiLeMiemGiamInGrid = function (data) {
                    var sumSoTienBenhNhanTra = data.ThanhTien - data.BHYTThanhToan - data.TongCongNo;
                    if (sumSoTienBenhNhanTra == 0 || isNaN(data.SoTienMG)) {
                        return 0;
                    }
                    return Math.round((data.SoTienMG / sumSoTienBenhNhanTra) * 100);
                };
                DsDaThuTienComponent.prototype.hoanThu = function (dataItem) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "<b class='text-hoan-thu'>Ho\u00E0n thu \u0111\u1EC3 tr\u1EA3 l\u1EA1i ti\u1EC1n ng\u01B0\u1EDDi b\u1EC7nh. N\u1EBFu \u0111\u00E3 ho\u00E0n thu kh\u00F4ng h\u1EE7y \u0111\u01B0\u1EE3c phi\u1EBFu thu.</b>"
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result === "Yes") {
                                _this.apiService.post("ThuNgan/HoanThuTheoDichVu", dataItem).subscribe(function () {
                                    _this.loadingThanhCong.emit(true);
                                }, function (err) {
                                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : (_this.validationErrors = err.ValidationErrors);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return DsDaThuTienComponent;
            }());
            DsDaThuTienComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsDaThuTienComponent.prototype, "danhSachChiPhiKhamChuaBenh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DsDaThuTienComponent.prototype, "dataSourceChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsDaThuTienComponent.prototype, "afterChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsDaThuTienComponent.prototype, "huyThanhCong", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsDaThuTienComponent.prototype, "capnhatThanhCong", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], DsDaThuTienComponent.prototype, "loadingThanhCong", void 0);
            DsDaThuTienComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-ds-da-thu-tien",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-da-thu-tien.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-da-thu-tien.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-da-thu-tien/ds-da-thu-tien.component.scss")).default]
                })
            ], DsDaThuTienComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1jaGktdGlldC1kYS10aHUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcdGhvbmctdGluLWNoaS10aWV0LWRhLXRodVxcdGhvbmctdGluLWNoaS10aWV0LWRhLXRodS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1jaGktdGlldC1kYS10aHUvdGhvbmctdGluLWNoaS10aWV0LWRhLXRodS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vdGhvbmctdGluLWNoaS10aWV0LWRhLXRodS90aG9uZy10aW4tY2hpLXRpZXQtZGEtdGh1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn0iLCIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: ThongTinChiTietDaThuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietDaThuComponent", function () { return ThongTinChiTietDaThuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _ds_chua_thu_tien_ds_chua_thu_tien_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ds-chua-thu-tien/ds-chua-thu-tien.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/ds-chua-thu-tien/ds-chua-thu-tien.component.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check */ "./node_modules/@iconify/icons-ic/twotone-check.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _chi_tiet_thu_tien_tam_ung_chi_tiet_thu_tien_tam_ung_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/chi-tiet-thu-tien-tam-ung/chi-tiet-thu-tien-tam-ung.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _noi_tru_cho_thu_tien_cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../noi-tru/cho-thu-tien/cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/noi-tru/cho-thu-tien/cho-thu-tien.model.ts");
            var ThongTinChiTietDaThuComponent = /** @class */ (function () {
                function ThongTinChiTietDaThuComponent(route, dialog, apiService, router, cdRef, notificationService, baseService) {
                    this.route = route;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.router = router;
                    this.cdRef = cdRef;
                    this.notificationService = notificationService;
                    this.baseService = baseService;
                    this.trangThanhToan = new _noi_tru_cho_thu_tien_cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_16__["TrangThaiDaThuTien"]();
                    this.thongTinBenhNhantam = [];
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["CommonThuTien"]();
                    this.trangThaiThanhToan = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TrangThaiThuTien"]();
                    this.apDungMiemGiam = false;
                    this.thongTinMienGiamTheoDoiTuongUuDai = {};
                    this.thongTinMienGiamVoucher = {};
                    this.thongTinMienGiamThem = {};
                    this.kiemTraThongTinBaoHiemTN = false;
                    this.refreshFlagApDung = false;
                    this.showCanhBaoSoTienNhap = false;
                    this.loaiVoucher = 0;
                    this.listOldVouchers = [];
                    this.checkedMGTGiaTri = true;
                    this.checkedMGTTiLe = false;
                    this.checkHiddenSoTienConLai = false;
                    this.selectMoneyTienBNDua = null;
                    this.selectMoneyTienMat = null;
                    this.selectMoneyTienChuyenKhoan = null;
                    this.selectMoneyTienPos = null;
                    this.radioThuTien = true;
                    this.radioThuTamUng = false;
                    this.radioTraLaiBN = false;
                    this.radioTraNo = false;
                    this.idYeuCauTiepNhan = 0;
                    this.loaiThanhToan = 0;
                    this.typeThanhToan = 0;
                    this.setDefeautTienMat = [this.commonThuTien.TienMat];
                    this.hinhThucThanhToan = [
                        { KeyId: this.commonThuTien.TienMat, DisplayName: this.commonThuTien.TienMatText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.ChuyenKhoan, DisplayName: this.commonThuTien.ChuyenKhoanText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.Pos, DisplayName: this.commonThuTien.PosText, Selected: false, Change: false },
                        { KeyId: this.commonThuTien.CongNo, DisplayName: this.commonThuTien.CongNoText, Selected: false, Change: false },
                    ];
                    this.allowedExtensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".pdf", ".PDF"];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.tabIndex = 0;
                    this.selectedValueThuPhi = this.commonThuTien.ThuTien;
                    this.danhsachBHTN = [];
                    this.icCheck = _iconify_icons_ic_twotone_check__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.validationErrors = [];
                    this.soLuongDichVuChuaDuocBHYTXN = 0;
                    this.dataSourceChanged = false;
                    this.dataSourceChangedTamUng = false;
                    this.dataSourceChangedHuyThanhToan = false;
                    this.dataSourceChangedThuNo = false;
                    this.danhSachCongNos = [];
                    this.soDuTaiKhoanBenhNhan = 0;
                    this.soTienConLaiBenhNhan = 0;
                    this.apDungCongNo = false;
                    this.apCapNhatThanhToan = false;
                    this.position = 0;
                    this.flagShowThongTinMienGiam = false;
                    this.flagShowDoiTuongUuDai = false;
                    this.flagEnableVoucher = false;
                    this.flagEnableMGThem = false;
                    this.disabledMGThem = false;
                    this.disabledVoucher = false;
                    this.disabledTiLeMG = true;
                    this.disabledSoTienMG = false;
                    this.flagCheckSeletedTienMat = false;
                    this.flagCheckSeletedChuyenKhoan = false;
                    this.flagCheckSeletedPos = false;
                    this.flagCheckSeletedCongNo = false;
                    this.checkSeletedTienMat = false;
                    this.checkSeletedChuyenKhoan = false;
                    this.checkSeletedPos = false;
                    this.checkSeletedCongNo = false;
                    this.arrayThanhToans = [];
                    this.arrayThanhToanstmp = [];
                    this.isExistFile = false;
                    this.flagApDung = false;
                    this.flagShowDoiTuongUuDaiOrVoucher = false;
                    this.confrim = null;
                    this.standardMG = 0;
                    this.listVouchers = [];
                    this.listTmpVouchers = [];
                    this.tongTienBNThanhToan = 0;
                    this.danhSachChuaThanhToans = {
                        data: [],
                        SoTienBenhNhan: 0,
                        HoTen: "",
                        SoLuongBYHTChuaXN: 0,
                    };
                    this.listVoucherItem = [];
                    this.newBarcode = "";
                    this.value = [];
                    this.gridBaoHiemTNs = [];
                    this.dataSourceDanhSachBHTN = {
                        data: [],
                        total: 0,
                    };
                    this.dataSourceDanhSachCongNo = {
                        data: [],
                        total: 0,
                    };
                    this.dataCongNo = this.dataSourceDanhSachBHTN.data;
                    this.taiLieuDinhKemGiayMiemGiamVo = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["TaiLieuDinhKemGiayMiemGiamVo"]();
                    this.baseService.controllerName = "ThuNgan";
                }
                ThongTinChiTietDaThuComponent.prototype.ngOnInit = function () {
                    if (window.location.protocol == this.commonThuTien.Http) {
                        this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
                    }
                    else {
                        this.hostingName = this.commonThuTien.Http + "//" + window.location.host;
                    }
                    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
                    this.thongTinBenhNhan = {};
                    this.tongTienBNThanhToan = 0;
                    this.selectedValueThuPhi;
                    if (this.route.snapshot.queryParams.loaiThanhToan !== undefined && this.route.snapshot.queryParams.loaiThanhToan !== null) {
                        this.loaiThanhToan = parseInt(this.route.snapshot.queryParams.loaiThanhToan);
                    }
                    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
                        this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
                        this.GetThongTheVoucher();
                        this.kiemTraSuDungGoi();
                    }
                    //Thông tin bảo hiểm tư nhân
                    this.dataSourceDanhSachBHTN.data = this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
                    this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans;
                    this.gridBaoHiemTNs = [
                        { Field: "TenCongTy", Title: "Công ty", Width: 200, Sortable: false },
                        // {Field: "MaSoThe", Title: "Số thẻ", Width: 50, Sortable: true, ShowTooltip: true},
                        // {Field: "TuNgayStr", Title: "Từ ngày", Width: 50, Sortable: true, ShowTooltip: true},
                        // {Field: "DenNgayStr", Title: "Đến ngày", Width: 50, Sortable: true, ShowTooltip: true},
                        // {Field: "SoDienThoai", Title: "Số điện thoại", Width: 50, Sortable: true, ShowTooltip: true},
                        // {Field: "DiaChi", Title: "Địa chỉ", Width: 50, Sortable: true, ShowTooltip: true},
                        { Field: "CongNo", Title: "CÔNG NỢ", Width: 150, Sortable: true, Template: this.actionTemplateSTCongNo },
                    ];
                };
                ThongTinChiTietDaThuComponent.prototype.BackToList = function () {
                    var yctn = this.route.snapshot.queryParams.yctn;
                    if (yctn) {
                        this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
                    }
                    else {
                        this.router.navigate(["/danh-sach-thu-tien-noi-tru"], {
                            queryParamsHandling: "preserve",
                        });
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.loadingCtThanhCong = function (loading) {
                    if (loading) {
                        this.dialog.closeAll();
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.getThongTinYeuCauBenhNhan = function (id) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.thongTinBenhNhan = resultData;
                            _this.getSoDuTaiKhoanBenhNhan(_this.idYeuCauTiepNhan);
                            if (resultData.ThongTinCongTyBaoHiemTuNhans.length > 0) {
                                _this.dataSourceDanhSachBHTN.data = resultData.ThongTinCongTyBaoHiemTuNhans;
                                _this.kiemTraThongTinBaoHiemTN = true;
                                _this.apDungCongNo = true;
                                //thêm biến tạm cho model công nợ
                                _this.thongTinBenhNhan.ThongTinCongTyBaoHiemTuNhans.forEach(function (element) {
                                    var congNoItem = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinCongTyBaoHiemTuNhans"]();
                                    congNoItem.Id = element.Id;
                                    congNoItem.SoTienCongNo = element.SoTienCongNo;
                                    congNoItem.TenCongTy = element.TenCongTy;
                                    _this.thongTinBenhNhantam.push(congNoItem);
                                });
                            }
                            else {
                                _this.apDungMiemGiam = true;
                            }
                        }
                    });
                };
                ThongTinChiTietDaThuComponent.prototype.kiemTraSuDungGoi = function () {
                    var _this = this;
                    this.apiService.get("ThuNgan/KiemTraSuDungGoi/" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData) {
                            _this.ktSuDungGoi = resultData;
                        }
                    });
                };
                ThongTinChiTietDaThuComponent.prototype.chiTietGoiMarketing = function () {
                    if (this.ktSuDungGoi != undefined && this.ktSuDungGoi != null) {
                        this.router.navigateByUrl("/danh-sach-thu-goi-marketing/chi-tiet-cho-quyet-toan-marketing/" + this.ktSuDungGoi);
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.huyThanhCong = function (daHuy) {
                    if (daHuy) {
                        this.apCapNhatThanhToan = true;
                        this.apDungCongNo = true;
                        this.getSoDuTaiKhoanBenhNhan(this.idYeuCauTiepNhan);
                        this.dataSourceChangedHuyThanhToan = true;
                        this.router.navigateByUrl("/danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/" + this.idYeuCauTiepNhan + "?loaiThanhToan=1");
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.totalTienCongNo = function (field) {
                    switch (field) {
                        case "SoTienCongNo":
                            //  this.setLastItem(4);
                            return this.dataSourceDanhSachBHTN.data.reduce(function (sum, item) { return sum + item.SoTienCongNo; }, 0);
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.getSoDuTaiKhoanBenhNhan = function (id) {
                    var _this = this;
                    this.apiService.get("ThuNgan/SoDuTaiKhoanBenhNhan/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.soDuTaiKhoanBenhNhan = resultData;
                        }
                    });
                    this.apiService.get("ThuNgan/SoTienUocLuongConLai/" + id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.soTienConLaiBenhNhan = resultData;
                        }
                    });
                };
                ThongTinChiTietDaThuComponent.prototype.uploadFileDone = function (tapTin) {
                    var _this = this;
                    this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam = tapTin;
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (tapTin != null) {
                        this.thuNganValidationErrors = [];
                    }
                    if (this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam != null) {
                        var thongTinMGThem = {
                            IdYeuCauTiepNhan: this.idYeuCauTiepNhan,
                            TaiLieuDinhKem: this.thongTinMienGiamThem.TaiLieuDinhKemGiayMiemGiam,
                        };
                        this.apiService.post("ThuNgan/ThemThongTinMiemGiamThemVaVoucher", thongTinMGThem).subscribe(function (resultData) {
                            if (resultData) {
                                _this.cdRef.detectChanges();
                            }
                            _this.notificationService.showSuccess(_this.commonThuTien.ApDungGiayMiemGiamThanhCong);
                        }, function () { });
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.onKey = function (event) {
                    if (event.keyCode === 13) {
                    }
                };
                ThongTinChiTietDaThuComponent.prototype.onKeyTienMatonKeyTienMat = function () {
                    this.thuTien.TienTraLaiBenhNhan = 0;
                    this.thuTien.TienBenhNhanDua = 0;
                };
                ThongTinChiTietDaThuComponent.prototype.GetThongTheVoucher = function () {
                    var _this = this;
                    this.value = [];
                    this.apiService.get("ThuNgan/GetMaVoucher?yeucauTiepNhanId=" + this.idYeuCauTiepNhan).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            resultData.forEach(function (element) {
                                _this.value.push(element.DisplayName);
                                _this.listVoucherItem.push(element.DisplayName);
                                _this.newBarcode = "";
                            });
                        }
                    });
                };
                ThongTinChiTietDaThuComponent.prototype.ngAfterViewChecked = function () {
                    this.cdRef.detectChanges();
                };
                ThongTinChiTietDaThuComponent.prototype.xemTaiLieu = function (dataItem) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var params;
                        var _this = this;
                        return __generator(this, function (_a) {
                            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpParams"]({
                                fromObject: {
                                    tenGuid: dataItem.TenGuid,
                                    duongDan: dataItem.DuongDan,
                                },
                            });
                            this.apiService.get("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe(function (resp) {
                                if (resp) {
                                    if (dataItem.TenGuid.indexOf(".pdf") != -1 || dataItem.TenGuid.indexOf(".PDF") != -1) {
                                        _this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_13__["ViewImagePdfComponent"], {
                                            disableClose: false,
                                            width: "1000px",
                                            height: "600px",
                                            data: {
                                                Type: "PDF",
                                                Title: "Xem tài liệu",
                                                Description: resp.MoTa !== null ? resp.MoTa : "",
                                                Src: resp,
                                            },
                                        });
                                    }
                                    else {
                                        _this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_13__["ViewImagePdfComponent"], {
                                            disableClose: false,
                                            width: "1000px",
                                            height: "600px",
                                            data: {
                                                Type: "Image",
                                                Title: "Xem ảnh",
                                                Description: resp.MoTa !== null ? resp.MoTa : "",
                                                Src: resp,
                                            },
                                        });
                                    }
                                }
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                ThongTinChiTietDaThuComponent.prototype.keyEvent = function (event) {
                    if (event.keyCode == 27 && !event.ctrlKey) {
                        this.BackToList();
                        event.preventDefault();
                    }
                };
                return ThongTinChiTietDaThuComponent;
            }());
            ThongTinChiTietDaThuComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: false })
            ], ThongTinChiTietDaThuComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("voucherList", { static: false })
            ], ThongTinChiTietDaThuComponent.prototype, "voucherList", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ds_chua_thu_tien_ds_chua_thu_tien_component__WEBPACK_IMPORTED_MODULE_5__["DsChuaThuTienComponent"], { static: false })
            ], ThongTinChiTietDaThuComponent.prototype, "dsChuaThuTienComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_chi_tiet_thu_tien_tam_ung_chi_tiet_thu_tien_tam_ung_component__WEBPACK_IMPORTED_MODULE_12__["ChiTietThuTienTamUngComponent"], { static: false })
            ], ThongTinChiTietDaThuComponent.prototype, "ChiTietThuTienTamUngComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplateSTCongNo", { static: true })
            ], ThongTinChiTietDaThuComponent.prototype, "actionTemplateSTCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplateSubmitCongNo", { static: true })
            ], ThongTinChiTietDaThuComponent.prototype, "actionTemplateSubmitCongNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tabDanhSachThuTien", { static: false })
            ], ThongTinChiTietDaThuComponent.prototype, "tabDanhSachThuTien", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("multiselect", { static: false })
            ], ThongTinChiTietDaThuComponent.prototype, "multiselect", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keydown", ["$event"])
            ], ThongTinChiTietDaThuComponent.prototype, "keyEvent", null);
            ThongTinChiTietDaThuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-thong-tin-chi-tiet-da-thu",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-chi-tiet-da-thu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-chi-tiet-da-thu.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chi-tiet-da-thu/thong-tin-chi-tiet-da-thu.component.scss")).default]
                })
            ], ThongTinChiTietDaThuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1jaHVuZy1iZW5oLW5oYW4vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcdGhvbmctdGluLWNodW5nLWJlbmgtbmhhblxcdGhvbmctdGluLWNodW5nLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1jaHVuZy1iZW5oLW5oYW4vdGhvbmctdGluLWNodW5nLWJlbmgtbmhhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsNEJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vdGh1LWNoaS90aHUtY2hpLXZpZW4tcGhpL25nb2FpLXRydS9jaG8tdGh1LXRpZW4vdGhvbmctdGluLWNodW5nLWJlbmgtbmhhbi90aG9uZy10aW4tY2h1bmctYmVuaC1uaGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtZm9ybS13cmFwcGVyIC5tYXQtbWVudS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLnBvLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbG9yLWdyZWVuIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy1sZWZ0ODBweCB7XG4gIHBhZGRpbmctbGVmdDogODBweCAhaW1wb3J0YW50O1xufVxuXG4uZC11bnNldCB7XG4gIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxua2VuZG8tc3BsaXR0ZXIgdWwgPiBsaS5yaWdodC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSB1bC5pbmxpbmUgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5pbmxpbmVfYiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjQyLCAyNTMsIDAuNSk7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLWdyb3VwLWIge1xuICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KSBvdXRzZXQ7XG59XG5cbi5zdGlja3ktbGlzdCB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLnN0aWNreS10YWIge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc3RpY2t5LXRhYiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLnN0aWNreS10YWIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzJlMzg0ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZjVmN2ZhO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5hY3RpdmUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwNWRhYjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnJlc29sdmVkIHtcbiAgY29sb3I6ICMwMDVkYWI7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnByb2Nlc3Npbmcge1xuICBjb2xvcjogI2ZmOTgwMDtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkudW5mdWxmaWxsZWQge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS10YWIgLnBzLXNjcm9sbGJhci14LXJhaWwgLnBzLXNjcm9sbGJhci14IHtcbiAgaGVpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGlja3ktcGFuZWxiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHRvcDogNjRweDtcbn0iLCIubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: ThongTinChungBenhNhanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChungBenhNhanComponent", function () { return ThongTinChungBenhNhanComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component */ "./src/app/shared/component/dialogs/view-image-pdf/view-image-pdf.component.ts");
            var ThongTinChungBenhNhanComponent = /** @class */ (function () {
                function ThongTinChungBenhNhanComponent(route, baseService, apiService, dialog) {
                    this.route = route;
                    this.baseService = baseService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.idYeuCauTiepNhan = 0;
                }
                ThongTinChungBenhNhanComponent.prototype.ngOnInit = function () {
                    this.thongTinBenhNhan = {};
                    this.idYeuCauTiepNhan = this.route.snapshot.params.id;
                    if (this.idYeuCauTiepNhan !== undefined && this.idYeuCauTiepNhan !== null) {
                        this.getThongTinYeuCauBenhNhan(this.idYeuCauTiepNhan);
                    }
                };
                ThongTinChungBenhNhanComponent.prototype.getThongTinYeuCauBenhNhan = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.thongTinBenhNhan = resultData;
                        }
                    });
                };
                ThongTinChungBenhNhanComponent.prototype.xemTaiLieu = function (dataItem) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var params;
                        var _this = this;
                        return __generator(this, function (_a) {
                            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                                fromObject: {
                                    tenGuid: dataItem.TenGuid,
                                    duongDan: dataItem.DuongDan,
                                },
                            });
                            this.apiService.get("TaiLieuDinhKem/GetTaiLieuUrl", params).subscribe(function (resp) {
                                if (resp) {
                                    if (dataItem.TenGuid.indexOf(".pdf") != -1 || dataItem.TenGuid.indexOf(".PDF") != -1) {
                                        _this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_7__["ViewImagePdfComponent"], {
                                            disableClose: false,
                                            width: "1000px",
                                            height: "600px",
                                            data: {
                                                Type: "PDF",
                                                Title: "Xem tài liệu",
                                                Description: resp.MoTa !== null ? resp.MoTa : "",
                                                Src: resp,
                                            },
                                        });
                                    }
                                    else {
                                        _this.dialog.open(src_app_shared_component_dialogs_view_image_pdf_view_image_pdf_component__WEBPACK_IMPORTED_MODULE_7__["ViewImagePdfComponent"], {
                                            disableClose: false,
                                            width: "1000px",
                                            height: "600px",
                                            data: {
                                                Type: "Image",
                                                Title: "Xem ảnh",
                                                Description: resp.MoTa !== null ? resp.MoTa : "",
                                                Src: resp,
                                            },
                                        });
                                    }
                                }
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                return ThongTinChungBenhNhanComponent;
            }());
            ThongTinChungBenhNhanComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
            ]; };
            ThongTinChungBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-thong-tin-chung-benh-nhan",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-chung-benh-nhan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-chung-benh-nhan.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-chung-benh-nhan/thong-tin-chung-benh-nhan.component.scss")).default]
                })
            ], ThongTinChungBenhNhanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.scss": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.scss ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".color-green input {\n  color: green;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.float_right {\n  float: right;\n}\n\n.menu-form-wrapper .mat-menu-content {\n  padding: 8px;\n}\n\n.color-red {\n  color: red;\n}\n\n.padding-thu-tien {\n  padding: 5px 16px 28px 13px !important;\n}\n\n.po-right {\n  text-align: right;\n  flex-grow: 1;\n}\n\n.color-green {\n  color: green;\n}\n\n.padding-left80px {\n  padding-left: 80px !important;\n}\n\n.d-unset {\n  display: unset !important;\n}\n\nkendo-splitter {\n  border-width: 0px !important;\n  margin-bottom: 10px;\n}\n\nkendo-splitter ul > li.right-0 {\n  margin-right: 0px;\n  padding-right: 15px;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border-style: inherit;\n}\n\nfieldset legend {\n  margin-left: 15px;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\nkendo-panelbar-item ul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n\nkendo-panelbar-item .inline_b {\n  display: inline-block !important;\n  margin-right: 10px;\n  padding-right: 15px;\n}\n\nkendo-panelbar-item .panelbar-row {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\nkendo-panelbar-item .panelbar-row:hover {\n  background: rgba(227, 242, 253, 0.5);\n}\n\nkendo-panelbar-item .panelbar-group-b {\n  border-top: 1px rgba(0, 0, 0, 0.08) outset;\n}\n\n.sticky-list {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n}\n\n.sticky-tab {\n  top: 64px;\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  z-index: 9999;\n  background: #f5f7fa;\n  overflow-x: auto;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.sticky-tab ul {\n  margin: 0;\n  padding-top: 10px;\n  padding-bottom: 0;\n  border-bottom: 1px solid #ccc;\n}\n\n.sticky-tab ul li {\n  display: inline-block;\n  list-style-type: none;\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  letter-spacing: normal;\n  color: #2e384d;\n  cursor: pointer;\n  transition: all 300ms linear;\n  border-bottom: 3px solid #f5f7fa;\n}\n\n.sticky-tab ul li.active {\n  font-size: 15px;\n  font-weight: bold;\n  color: #005dab;\n  border-bottom: 4px solid #005dab;\n}\n\n.sticky-tab ul li:hover {\n  border-bottom: 3px solid #005dab;\n}\n\n.sticky-tab ul li.resolved {\n  color: #005dab;\n}\n\n.sticky-tab ul li.processing {\n  color: #ff9800;\n}\n\n.sticky-tab ul li.unfulfilled {\n  color: #9e9e9e;\n}\n\n.sticky-tab .ps-scrollbar-x-rail {\n  bottom: 0 !important;\n  height: 5px !important;\n}\n\n.sticky-tab .ps-scrollbar-x-rail .ps-scrollbar-x {\n  height: 5px !important;\n}\n\nlegend {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.sticky-panelbar {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 64px;\n}\n\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1waGlldS10aHUtbmdvYWktdHJ1L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcdGh1LWNoaVxcdGh1LWNoaS12aWVuLXBoaVxcbmdvYWktdHJ1XFxjaG8tdGh1LXRpZW5cXHRob25nLXRpbi1waGlldS10aHUtbmdvYWktdHJ1XFx0aG9uZy10aW4tcGhpZXUtdGh1LW5nb2FpLXRydS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1waGlldS10aHUtbmdvYWktdHJ1L3Rob25nLXRpbi1waGlldS10aHUtbmdvYWktdHJ1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usc0NBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSw0Q0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUtBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3RodS1jaGktdmllbi1waGkvbmdvYWktdHJ1L2Noby10aHUtdGllbi90aG9uZy10aW4tcGhpZXUtdGh1LW5nb2FpLXRydS90aG9uZy10aW4tcGhpZXUtdGh1LW5nb2FpLXRydS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1ncmVlbiBpbnB1dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctdGh1LXRpZW4ge1xuICBwYWRkaW5nOiA1cHggMTZweCAyOHB4IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmZsb2F0X3JpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWVudS1mb3JtLXdyYXBwZXIgLm1hdC1tZW51LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4ucG8tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5wYWRkaW5nLWxlZnQ4MHB4IHtcbiAgcGFkZGluZy1sZWZ0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLXVuc2V0IHtcbiAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxua2VuZG8tc3BsaXR0ZXIge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5rZW5kby1zcGxpdHRlciB1bCA+IGxpLnJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIHVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLmlubGluZV9iIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gLnBhbmVsYmFyLXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI3LCAyNDIsIDI1MywgMC41KTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItZ3JvdXAtYiB7XG4gIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpIG91dHNldDtcbn1cblxuLnN0aWNreS1saXN0IHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4uc3RpY2t5LXRhYiB7XG4gIHRvcDogNjRweDtcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdGlja3ktdGFiIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmUzODRkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmNWY3ZmE7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLmFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGk6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucmVzb2x2ZWQge1xuICBjb2xvcjogIzAwNWRhYjtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkucHJvY2Vzc2luZyB7XG4gIGNvbG9yOiAjZmY5ODAwO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS51bmZ1bGZpbGxlZCB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCB7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2t5LXRhYiAucHMtc2Nyb2xsYmFyLXgtcmFpbCAucHMtc2Nyb2xsYmFyLXgge1xuICBoZWlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnN0aWNreS1wYW5lbGJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgdG9wOiA2NHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmNvbG9yLWdyZWVuIGlucHV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFkZGluZy10aHUtdGllbiB7XG4gIHBhZGRpbmc6IDVweCAxNnB4IDI4cHggMTNweCAhaW1wb3J0YW50O1xufVxuXG4uZmxvYXRfcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5tZW51LWZvcm0td3JhcHBlciAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWRkaW5nLXRodS10aWVuIHtcbiAgcGFkZGluZzogNXB4IDE2cHggMjhweCAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wby1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhZGRpbmctbGVmdDgwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuLmQtdW5zZXQge1xuICBkaXNwbGF5OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG5rZW5kby1zcGxpdHRlciB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmtlbmRvLXNwbGl0dGVyIHVsID4gbGkucmlnaHQtMCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbmtlbmRvLXBhbmVsYmFyLWl0ZW0gdWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAuaW5saW5lX2Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxua2VuZG8tcGFuZWxiYXItaXRlbSAucGFuZWxiYXItcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjcsIDI0MiwgMjUzLCAwLjUpO1xufVxuXG5rZW5kby1wYW5lbGJhci1pdGVtIC5wYW5lbGJhci1ncm91cC1iIHtcbiAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgb3V0c2V0O1xufVxuXG4uc3RpY2t5LWxpc3Qge1xuICB0b3A6IDY0cHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5zdGlja3ktdGFiIHtcbiAgdG9wOiA2NHB4O1xuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnN0aWNreS10YWIgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZTM4NGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y1ZjdmYTtcbn1cblxuLnN0aWNreS10YWIgdWwgbGkuYWN0aXZlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5yZXNvbHZlZCB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uc3RpY2t5LXRhYiB1bCBsaS5wcm9jZXNzaW5nIHtcbiAgY29sb3I6ICNmZjk4MDA7XG59XG5cbi5zdGlja3ktdGFiIHVsIGxpLnVuZnVsZmlsbGVkIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGlja3ktdGFiIC5wcy1zY3JvbGxiYXIteC1yYWlsIC5wcy1zY3JvbGxiYXIteCB7XG4gIGhlaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uc3RpY2t5LXBhbmVsYmFyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDY0cHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: ThongTinPhieuThuNgoaiTruComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinPhieuThuNgoaiTruComponent", function () { return ThongTinPhieuThuNgoaiTruComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cho-thu-tien.model */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/cho-thu-tien.model.ts");
            /* harmony import */ var _common_xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/xac-nhan-phieu-huy-thu/xac-nhan-phieu-huy-thu.component.ts");
            /* harmony import */ var _common_xac_nhan_hoan_phieu_xac_nhan_hoan_phieu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/xac-nhan-hoan-phieu/xac-nhan-hoan-phieu.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/common/xac-nhan-hoan-phieu/xac-nhan-hoan-phieu.component.ts");
            /* harmony import */ var _thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.ts");
            var ThongTinPhieuThuNgoaiTruComponent = /** @class */ (function () {
                function ThongTinPhieuThuNgoaiTruComponent(route, notificationService, apiService, authService, router, dialog) {
                    this.route = route;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.router = router;
                    this.dialog = dialog;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].ThuNgan;
                    this.phieuThuId = 0;
                    this.dataSourceChanged = false;
                    this.huyThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.loadingCtThanhCong = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.commonThuTien = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["CommonThuTien"]();
                    this.thongTinSoPhieuDaThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["ThongTinSoPhieuDaThu"]();
                    this.trangThaiThuTienBenhNhan = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["TrangThaiThuTienBenhNhan"]();
                }
                ThongTinPhieuThuNgoaiTruComponent.prototype.ngOnInit = function () {
                    this.yeuCauTiepNhanId = this.route.snapshot.params.id;
                    if (this.yeuCauTiepNhanId != null && this.yeuCauTiepNhanId != undefined) {
                        this.getThongSoPhieu();
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.selectionChangeSoPhieu = function (event) {
                    if (event != null && event != undefined) {
                        this.thongTinSoPhieuDaThu.SoPhieuId = event.KeyId;
                        this.thongTinSoPhieuDaThu.LoaiPhieu = event.LoaiPhieu;
                        this.thongTinSoPhieuDaThu.TinhTrang = event.TinhTrang;
                        this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan = event.LoaiPhieuThuChiThuNgan;
                        var loaiPhieuThu = event.LoaiPhieuThuChiThuNgan;
                        this.xemThongTinPhieu(event.KeyId, loaiPhieuThu);
                    }
                    else {
                        this.thongTinSoPhieuDaThu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["ThongTinSoPhieuDaThu"]();
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.xemThongTinPhieu = function (keyId, loaiPhieuThu) {
                    var _this = this;
                    this.showLoadingPopup();
                    this.apiService.get("ThuNgan/GetThongTinPhieuThu/" + keyId + "/" + loaiPhieuThu).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.thongTinSoPhieuDaThu = resultData;
                            _this.thongTinSoPhieuDaThu.SoPhieuId = keyId;
                            _this.thongTinSoPhieuDaThu.TenSoPhieu = resultData.SoPhieu;
                            _this.dataSourceChanged = true;
                            _this.loadingCtThanhCong.emit(true);
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                            _this.closeAllDialogs();
                        }
                    });
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.loadingThanhCong = function (loading) {
                    if (loading) {
                        this.xemThongTinPhieu(this.thongTinSoPhieuDaThu.SoPhieuId, this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan);
                        this.dataSourceChanged = true;
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.getThongSoPhieu = function () {
                    var _this = this;
                    this.apiService.post("ThuNgan/GetSoPhieuNgoaiTru/" + this.yeuCauTiepNhanId).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.dataSoPhieus = resultData;
                            if (_this.phieuThuId != null && _this.phieuThuId != undefined && _this.phieuThuId != 0) {
                                _this.xemThongTinPhieu(_this.phieuThuId, 1);
                            }
                            else {
                                if (resultData.length > 0) {
                                    _this.xemThongTinPhieu(resultData[0].KeyId, resultData[0].LoaiPhieuThuChiThuNgan);
                                }
                                else {
                                    _this.loadingCtThanhCong.emit(true);
                                }
                            }
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.bangKeChiPhi = function (thongTinSoPhieuDaThu) {
                    this.inPhieuPdf(thongTinSoPhieuDaThu.Id, 0, "InCPKhamNgoaiTru,InBangKeChiPhiGoiKhamChuaBenhStr");
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.phieuIn = function (thongTinSoPhieuDaThu) {
                    if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.ThuTheoChiPhiNumber) {
                        this.inPhieuPdf(thongTinSoPhieuDaThu.Id, 0, "InPhieuThu");
                    }
                    if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.ThuTamUngNumber) {
                        this.inPhieuPdf(thongTinSoPhieuDaThu.Id, 0, "InPhieuThuTamUng");
                    }
                    if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.HoanUngNumber) {
                        this.inPhieuPdf(0, thongTinSoPhieuDaThu.Id, "InPhieuHoanUng");
                    }
                    if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.HoanThuNumber) {
                        this.inPhieuPdf(0, thongTinSoPhieuDaThu.Id, "InPhieuHoanThu");
                    }
                    if (thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan === this.trangThaiThuTienBenhNhan.PhieuChiNumber) {
                        this.inPhieuPdf(0, thongTinSoPhieuDaThu.Id, "InPhieuChi");
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.huyPhieuThu = function (thongTinSoPhieuDaThu, thuHoiPhieu) {
                    var _this = this;
                    var thongTinHuyPhieu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["ThongTinHuyPhieu"]();
                    thongTinHuyPhieu.SoPhieu = thongTinSoPhieuDaThu.Id;
                    thongTinHuyPhieu.TenPhieuThuChi = thongTinSoPhieuDaThu.LoaiPhieu;
                    thongTinHuyPhieu.TenSoPhieu = this.thongTinSoPhieuDaThu.TenSoPhieu;
                    thongTinHuyPhieu.LaPhieuChi = this.thongTinSoPhieuDaThu.LaPhieuChi;
                    thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan;
                    thongTinHuyPhieu.TamUng = this.thongTinSoPhieuDaThu.TamUng;
                    thongTinHuyPhieu.ThuTienGoiDichVu = this.thongTinSoPhieuDaThu.ThuTienGoiDichVu;
                    var loaiType = 'NgoaiTru';
                    this.dialog
                        .open(_common_xac_nhan_phieu_huy_thu_xac_nhan_phieu_huy_thu_component__WEBPACK_IMPORTED_MODULE_13__["XacNhanHuyThuComponent"], { disableClose: true, width: "800px", data: { thongTinHuyPhieu: thongTinHuyPhieu, thuHoiPhieu: thuHoiPhieu, loaiType: loaiType } })
                        .afterClosed()
                        .subscribe(function (resultData) {
                        if (resultData != undefined && resultData !== null && resultData !== "") {
                            _this.huyThanhCong.emit(true);
                            _this.getThongSoPhieu();
                            _this.notificationService.showSuccess("Hủy phiếu thu thành công.");
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.ChuyenQuaTamUng = function (thongTinSoPhieuDaThu) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn chuyển phiếu này qua tạm ứng không?" },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result === "Yes") {
                                _this.apiService.post("ThuNgan/ChuyenTamUng/" + thongTinSoPhieuDaThu.Id).subscribe(function () {
                                    _this.huyThanhCong.emit(true);
                                    _this.getThongSoPhieu();
                                    _this.notificationService.showSuccess("Chuyển phiếu qua tạm ứng thành công.");
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.hoanPhieuThu = function (thongTinSoPhieuDaThu) {
                    var _this = this;
                    var thuHoiPhieu = false;
                    var thongTinHuyPhieu = new _cho_thu_tien_model__WEBPACK_IMPORTED_MODULE_12__["ThongTinHuyPhieu"]();
                    thongTinHuyPhieu.SoPhieu = thongTinSoPhieuDaThu.Id;
                    thongTinHuyPhieu.TenPhieuThuChi = thongTinSoPhieuDaThu.LoaiPhieu;
                    thongTinHuyPhieu.TenSoPhieu = this.thongTinSoPhieuDaThu.TenSoPhieu;
                    thongTinHuyPhieu.LaPhieuChi = this.thongTinSoPhieuDaThu.LaPhieuChi;
                    thongTinHuyPhieu.LoaiPhieuThuChiThuNgan = this.thongTinSoPhieuDaThu.LoaiPhieuThuChiThuNgan;
                    thongTinHuyPhieu.TamUng = this.thongTinSoPhieuDaThu.TamUng;
                    thongTinHuyPhieu.ThuTienGoiDichVu = this.thongTinSoPhieuDaThu.ThuTienGoiDichVu;
                    var loaiType = 'NgoaiTru';
                    this.dialog
                        .open(_common_xac_nhan_hoan_phieu_xac_nhan_hoan_phieu_component__WEBPACK_IMPORTED_MODULE_14__["XacNhanHoanThuComponent"], { disableClose: true, width: "800px", data: { thongTinHuyPhieu: thongTinHuyPhieu, thuHoiPhieu: thuHoiPhieu, loaiType: loaiType } })
                        .afterClosed()
                        .subscribe(function (resultData) {
                        if (resultData != undefined && resultData !== null && resultData !== "") {
                            _this.huyThanhCong.emit(true);
                            _this.getThongSoPhieu();
                            _this.notificationService.showSuccess("Hoàn phiếu thu thành công.");
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.inPhieuPdf = function (taiKhoanThuId, taiKhoanChiId, loaiTypes) {
                    var _this = this;
                    this.showLoadingPopup();
                    var idYeuCauTiepNhan = this.yeuCauTiepNhanId;
                    var phieuHoanUngIds = "";
                    this.dialog
                        .open(_thong_tin_phieu_thu_popup_thong_tin_phieu_thu_popup_component__WEBPACK_IMPORTED_MODULE_15__["ThongTinPhieuNgoaiTruPopupComponent"], {
                        disableClose: false,
                        width: "1000px",
                        data: { taiKhoanThuId: taiKhoanThuId, taiKhoanChiId: taiKhoanChiId, idYeuCauTiepNhan: idYeuCauTiepNhan, loaiTypes: loaiTypes, phieuHoanUngIds: phieuHoanUngIds },
                    })
                        .afterClosed()
                        .subscribe(function () {
                        _this.closeAllDialogs();
                    });
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.hoanUngKhongThucHienDV = function (thongTinSoPhieuDaThu) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: { Title: "Xác nhận", Message: "Bạn chắc chắn muốn hoàn ứng số tiền người bệnh này không ?" },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result === "Yes") {
                                _this.apiService.post("ThuNgan/HoanUngKhongThucHienDichVu/" + thongTinSoPhieuDaThu.Id).subscribe(function () {
                                    _this.huyThanhCong.emit(true);
                                    _this.getThongSoPhieu();
                                    _this.notificationService.showSuccess("Hoàn ứng thành công.");
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.BackToList = function () {
                    var yctn = this.route.snapshot.queryParams.yctn;
                    if (yctn) {
                        this.router.navigateByUrl("/them-yeu-cau-tiep-nhan");
                    }
                    else {
                        this.router.navigate(["/danh-sach-thu-dich-vu"], {
                            queryParamsHandling: "preserve",
                        });
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                ThongTinPhieuThuNgoaiTruComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return ThongTinPhieuThuNgoaiTruComponent;
            }());
            ThongTinPhieuThuNgoaiTruComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThongTinPhieuThuNgoaiTruComponent.prototype, "phieuThuId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ThongTinPhieuThuNgoaiTruComponent.prototype, "dataSourceChanged", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ThongTinPhieuThuNgoaiTruComponent.prototype, "huyThanhCong", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], ThongTinPhieuThuNgoaiTruComponent.prototype, "loadingCtThanhCong", void 0);
            ThongTinPhieuThuNgoaiTruComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-thong-tin-phieu-thu-ngoai-tru",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-phieu-thu-ngoai-tru.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-phieu-thu-ngoai-tru.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-ngoai-tru/thong-tin-phieu-thu-ngoai-tru.component.scss")).default]
                })
            ], ThongTinPhieuThuNgoaiTruComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n}\n\n.container-iframe iframe {\n  margin-bottom: 10px;\n  -webkit-backface-visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1waGlldS10aHUtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx0aHUtY2hpXFx0aHUtY2hpLXZpZW4tcGhpXFxuZ29haS10cnVcXGNoby10aHUtdGllblxcdGhvbmctdGluLXBoaWV1LXRodS1wb3B1cFxcdGhvbmctdGluLXBoaWV1LXRodS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3RodS1jaGkvdGh1LWNoaS12aWVuLXBoaS9uZ29haS10cnUvY2hvLXRodS10aWVuL3Rob25nLXRpbi1waGlldS10aHUtcG9wdXAvdGhvbmctdGluLXBoaWV1LXRodS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi90aHUtY2hpL3RodS1jaGktdmllbi1waGkvbmdvYWktdHJ1L2Noby10aHUtdGllbi90aG9uZy10aW4tcGhpZXUtdGh1LXBvcHVwL3Rob25nLXRpbi1waGlldS10aHUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTUwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: ThongTinPhieuNgoaiTruPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinPhieuNgoaiTruPopupComponent", function () { return ThongTinPhieuNgoaiTruPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-fullscreen */ "./node_modules/@iconify/icons-ic/twotone-fullscreen.js");
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-fullscreen-exit */ "./node_modules/@iconify/icons-ic/twotone-fullscreen-exit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9__);
            var ThongTinPhieuNgoaiTruPopupComponent = /** @class */ (function () {
                function ThongTinPhieuNgoaiTruPopupComponent(data, apiService, dialog, notificationService) {
                    this.data = data;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.arrFilePdf = [];
                    this.arrFileUrl = [];
                    this.icFullscreen = _iconify_icons_ic_twotone_fullscreen__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icFullscreenExit = _iconify_icons_ic_twotone_fullscreen_exit__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.isFullscreen = false;
                    this.Width = 800;
                    this.Height = 600;
                    this.tamUng = false;
                }
                ThongTinPhieuNgoaiTruPopupComponent.prototype.ngOnInit = function () {
                    this.getALlFilePDFFromHtml(this.data);
                    this.tamUng = this.data.tamUng != undefined ? true : false;
                    this.fullscreen();
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.getALlFilePDFFromHtml = function (data) {
                    var _this = this;
                    this.showPopupLoadingData();
                    var hostingName = window.location.protocol + '//' + window.location.host;
                    this.apiService.postExportPdf("ThuNgan/InPhieuThu?taiKhoanThuId=" + data.taiKhoanThuId + "&taiKhoanChiId=" + data.taiKhoanChiId + "&yeuCauTiepNhanId=" + data.idYeuCauTiepNhan + "&hostingName=" + hostingName + "&loaiTypes=" + data.loaiTypes + "&phieuHoanUngIds=" + data.phieuHoanUngIds).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.arrFileUrl.push(datalocalURL);
                        _this.arrFilePdf.push(file);
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                            _this.closePopupLoadingData();
                        }
                    });
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.ketXuatBangKeChiPhiExcel = function () {
                    var _this = this;
                    this.apiService.postExportExcel("ThuNgan/XuatBangKeNgoaiTruCoBHYTExcelDaThu?yeuCauTiepNhanId=" + this.data.idYeuCauTiepNhan)
                        .subscribe(function (res) {
                        _this.showLoadingPopup();
                        if (res.byteLength != 4) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruCoBHYT" + dateTimeNow.getFullYear() + ".xlsx");
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closeAllDialogs();
                    });
                    this.apiService.postExportExcel("ThuNgan/XuatBangKeNgoaiTruExcelDaThu?yeuCauTiepNhanId=" + this.data.idYeuCauTiepNhan)
                        .subscribe(function (res) {
                        _this.showLoadingPopup();
                        if (res.byteLength != 4) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTru" + dateTimeNow.getFullYear() + ".xlsx");
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closeAllDialogs();
                    });
                    this.apiService.postExportExcel("ThuNgan/XuatBangKeNgoaiTruTrongGoiDvDaThu?yeuCauTiepNhanId=" + this.data.idYeuCauTiepNhan)
                        .subscribe(function (res) {
                        _this.showLoadingPopup();
                        if (res.byteLength != 4) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "XuatBangKeNgoaiTruTrongGoiDv" + dateTimeNow.getFullYear() + ".xlsx");
                        }
                        _this.closeAllDialogs();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closeAllDialogs();
                    });
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.downloadAllFile = function () {
                    var dateTimeNow = new Date();
                    this.arrFilePdf.forEach(function (file) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, "application/pdf", "PhieuThuNgan" + dateTimeNow.getFullYear() + ".pdf");
                    });
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.fullscreen = function () {
                    this.fullScreenDialog(this.isFullscreen, this.Height, this.Width, 200);
                    this.isFullscreen = !this.isFullscreen;
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.fullScreenDialog = function (isFullscreen, Height, Width, heightHeaderFooter) {
                    if (isFullscreen) {
                        jQuery(".cdk-overlay-pane").css({ "height": (Height != null ? Height : "auto"), "width": Width, "max-width": Width });
                        jQuery(".mat-dialog-content").css({ "height": Height - (heightHeaderFooter != null ? heightHeaderFooter : 0), "max-height": Height - (heightHeaderFooter != null ? heightHeaderFooter : 0) });
                    }
                    else {
                        jQuery(".cdk-overlay-pane").css({ "height": "97%", "width": "100%", "max-width": "97%" });
                        jQuery(".mat-dialog-content").css({ "height": (jQuery(window).height() - (heightHeaderFooter != null ? heightHeaderFooter : 150)), "max-height": jQuery(window).height() - (heightHeaderFooter != null ? heightHeaderFooter : 150) });
                    }
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.showLoadingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải...' }
                        });
                    }
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.showSavingPopup = function () {
                    if (!this.loadingPopup) {
                        this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang lưu...' }
                        });
                    }
                };
                ThongTinPhieuNgoaiTruPopupComponent.prototype.closeAllDialogs = function () {
                    if (this.loadingPopup) {
                        this.loadingPopup.close();
                        this.loadingPopup = null;
                    }
                };
                return ThongTinPhieuNgoaiTruPopupComponent;
            }());
            ThongTinPhieuNgoaiTruPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            ThongTinPhieuNgoaiTruPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "thong-tin-phieu-thu-popup",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thong-tin-phieu-thu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thong-tin-phieu-thu-popup.component.scss */ "./src/app/modules/main/thu-chi/thu-chi-vien-phi/ngoai-tru/cho-thu-tien/thong-tin-phieu-thu-popup/thong-tin-phieu-thu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], ThongTinPhieuNgoaiTruPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=thu-chi-thu-chi-vien-phi-ngoai-tru-cho-thu-tien-cho-thu-tien-module-es2015.js.map
//# sourceMappingURL=thu-chi-thu-chi-vien-phi-ngoai-tru-cho-thu-tien-cho-thu-tien-module-es5.js.map
//# sourceMappingURL=thu-chi-thu-chi-vien-phi-ngoai-tru-cho-thu-tien-cho-thu-tien-module-es5.js.map