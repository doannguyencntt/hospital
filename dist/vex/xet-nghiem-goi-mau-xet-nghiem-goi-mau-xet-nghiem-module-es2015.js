(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-goi-mau-xet-nghiem-goi-mau-xet-nghiem-module"],{

/***/ "./node_modules/@iconify/icons-ic/highlight-off.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/highlight-off.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-done.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    { Title: 'Xét nghiệm', Path: ''},\n    { Title: 'DS gửi mẫu', Path:'/xet-nghiem/goi-mau', queryParams: {holdQuery : true}, Active: true}]\"\n    [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 fxFlex=\"90%\" fxFlex.sm=\"90%\" class=\"title m-0\">Chi Tiết Phiếu Gửi Mẫu</h2>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [ngClass]=\"{ 'greenText': thongTinPhieuGoiMauXetNghiem.TinhTrang, 'orangeText': !thongTinPhieuGoiMauXetNghiem.TinhTrang }\">\n                    {{thongTinPhieuGoiMauXetNghiem.TinhTrangDisplay}}\n                </span>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-textbox fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"SoPhieu\" label=\"Số phiếu\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.SoPhieu\" url=\"\">\n                    </app-textbox>\n                    \n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NguoiGoiMauId\" label=\"Người gửi mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinPhieuGoiMauXetNghiem.NguoiGoiMauDisplay\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NguoiGoiMauId\" url=\"\">\n                    </app-combobox>\n\n                    <app-datetimepicker fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NgayGoiMau\" label=\"Ngày gửi mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NgayGoiMau\" url=\"\">\n                    </app-datetimepicker>\n\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NoiTiepNhan\" label=\"Nơi tiếp nhận\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinPhieuGoiMauXetNghiem.NoiTiepNhanDisplay\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NoiTiepNhanId\" url=\"\">\n                    </app-combobox>\n\n                    <app-combobox *ngIf=\"thongTinPhieuGoiMauXetNghiem.TinhTrang\" fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NguoinhanMau\" label=\"Người nhận mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinPhieuGoiMauXetNghiem.NguoiNhanMauDisplay\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NguoiNhanMauId\" url=\"\">\n                    </app-combobox>\n\n                    <app-datetimepicker *ngIf=\"thongTinPhieuGoiMauXetNghiem.TinhTrang\" fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NgayNhanMau\" label=\"Ngày nhận mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NgayNhanMau\" url=\"\">\n                    </app-datetimepicker>\n\n                    <div fxFlex.sm=\"10%\"> </div>\n\n                    <app-textarea fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"GhiChu\" label=\"Ghi chú\" required=\"true\"\n                        [disabled]='true'\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.GhiChu\">\n                    </app-textarea>\n                </div>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"grid\" fxLayoutGap.lt-sm=\"0\">\n                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"sub-title mt-3\">\n                        <h3 style=\"display: inline; float: left;\">THÔNG TIN MẪU gửi</h3>\n                        <p style=\"display: inline; float: right;\"><b>SL mẫu để gửi: {{tongSoLuongMauGoi}}</b></p>\n                    </div>\n                </div>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-grid #gridNhomXetNghiem pageSize=\"5\" [additionalSearchString]=\"additionalSearchStringNhomDichVu\"\n                        [documentType]=\"documentType\" [autoHeight]=\"true\" [checkboxAble]=\"false\" \n                        [useAddDeault]=\"false\" [useActionDefault]=\"false\" [useHeaderDefault]=\"false\"\n                        [gridColumns]=\"gridNhomXetNghiemColumns\" [urlGetData]=\"urlGetDataNhomXetNghiem\" [urlGetTotalPage]=\"urlGetTotalPageNhomXetNghiem\"\n                        [detailTemplate]=\"gridNhomXetNghiemTemplate\"\n                        [sort]=\"sortNhomXetNghiem\" [showStt]=\"true\">\n                    </app-grid>\n\n                    <ng-template #gridNhomXetNghiemTemplate let-dataItem>\n                        <app-grid #gridNhomXetNghiem pageSize=\"5\"\n                            [additionalSearchString]=\"'{PhienXetNghiemId:' + dataItem.PhienXetNghiemId + ', NhomDichVuBenhVienId: '+ dataItem.NhomDichVuBenhVienId +'}'\"\n                            [documentType]=\"documentType\" [autoHeight]=\"true\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                            [gridColumns]=\"gridDichVuXetNghiemColumns\" [urlGetData]=\"urlGetDataDichVuXetNghiem\" [urlGetTotalPage]=\"urlGetTotalPageDichVuXetNghiem\"\n                            [sort]=\"sortDichVuXetNghiem\" [showStt]=\"true\">\n                        </app-grid>\n                    </ng-template>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-3\">\n                    <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                        <button class=\"float-left\" type=\"button\" mat-button class=\"mr-1\" (click)=\"quayLai()\">\n                            <i class=\"ft-arrow-left\"></i> Quay lại\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- NhomXetNghiem -->\n<ng-template #nhomDichVuBenhVienNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.NhomDichVuBenhVienDisplay}}\n</ng-template>\n\n<ng-template #gioiTinhNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.GioiTinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauNhomXetNghiemTemplate let-dataItem>\n    <!-- {{getLoaiMauDisplay(dataItem)}} -->\n    <ng-template #tuChoiInfoTemplate let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td>Mẫu bị huỷ bởi <b>{{thongTinTuChoi.NguoiTuChoiDisplay}}</b> vào ngày <b>{{thongTinTuChoi.NgayTuChoiDisplay}}</b></td>\n            </tr>\n            <tr>\n                <td>Lý do: {{thongTinTuChoi.LyDoTuChoi}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <ul style=\"display: inline-flex;\">\n        <li class=\"mr-2 loai-mau\" *ngFor=\"let item of dataItem.LoaiMauXetNghiems\">\n            <mat-icon *ngIf=\"item.TrangThai == 2\" style=\"color: green;\" [icIcon]=\"icDone\"></mat-icon>\n            <mat-icon *ngIf=\"item.TrangThai == 3\" style=\"color: red;\"\n                kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" [tooltipTemplate]=\"tuChoiInfoTemplate\" filter=\"*\"\n                [icIcon]=\"icClear\" (mouseover)=\"tooltipCustom(item)\">\n            </mat-icon>\n            {{item.LoaiMauDisplay}}\n        </li>\n    </ul>\n</ng-template>\n\n<!-- DichVuXetNghiem -->\n<ng-template #thoiGianChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.ThoiGianChiDinhDisplay}}\n</ng-template>\n\n<ng-template #nguoiChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiChiDinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.LoaiMauDisplay}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">           \n            <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Xét nghiệm',Path:''},\n                {Title:'DS gửi mẫu',Path:'/xet-nghiem/goi-mau', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridDanhSachXetNghiem\n                [documentType]=\"documentType\"\n                [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [gridColumns]=\"gridDanhSachXetNghiemColumns\" [urlGetData]=\"urlGetDataDanhSachXetNghiem\"\n                [detailTemplate]=\"gridNhomXetNghiemTemplate\" [headerTemplate]=\"headerTemplate\" [additionalSearchString]=\"firstSearchString\"\n                [sort]=\"sortDanhSachXetNghiem\">\n            </app-grid>\n\n            <ng-template #gridNhomXetNghiemTemplate let-dataItem>\n                <app-grid #gridNhomXetNghiem pageSize=\"5\" \n                    [additionalSearchString]=\"getAdditionalSearchStringNhomDichVu(dataItem)\"\n                    [documentType]=\"documentType\" [autoHeight]=\"true\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                    [gridColumns]=\"gridNhomXetNghiemColumns\" [urlGetData]=\"urlGetDataNhomXetNghiem\"\n                    [detailTemplate]=\"gridDichVuXetNghiemTemplate\" [urlGetTotalPage]=\"urlGetTotalPageNhomXetNghiem\"\n                    [sort]=\"sortNhomXetNghiem\" [showStt]=\"true\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #gridDichVuXetNghiemTemplate let-dataItem>\n                <app-grid #gridDichVuXetNghiem pageSize=\"5\" \n                    [additionalSearchString]=\"'{PhienXetNghiemId:' + dataItem.PhienXetNghiemId + ', NhomDichVuBenhVienId: '+ dataItem.NhomDichVuBenhVienId +'}'\"\n                    [documentType]=\"documentType\" [autoHeight]=\"true\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                    [gridColumns]=\"gridDichVuXetNghiemColumns\" [urlGetData]=\"urlGetDataDichVuXetNghiem\" [urlGetTotalPage]=\"urlGetTotalPageDichVuXetNghiem\"\n                    [sort]=\"sortDichVuXetNghiem\" [showStt]=\"true\">\n                </app-grid>\n            </ng-template>\n            \n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox (modelChange)=\"checkboxChange($event, true, false)\" id=\"ChoNhanMau\"\n                        [(model)]=\"goiMauXetNghiemSearch.ChoNhanMau\" class=\"ml-2\" label=\"Chờ nhận mẫu\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"checkboxChange($event, false, true)\" id=\"DaNhanMau\"\n                        [(model)]=\"goiMauXetNghiemSearch.DaNhanMau\" class=\"ml-2\" label=\"Đã nhận mẫu\">\n                    </app-checkbox>\n\n                    <!-- <div class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"goiMauXetNghiemSearch.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên NB, Barcode\" />\n                        <button color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip title=\"Phím tắt: Ctrl + Q\"\n                            (click)=\"QuetMaQRCodeClick()\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode> -->\n\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"goiMauXetNghiemSearch.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"clearSearch()\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên NB, Barcode\" />\n                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n                                kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                            </button>\n                            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                    <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"goiMauXetNghiemSearch.RangeNgayGoiMau\" \n                        label=\"Từ ngày - đến ngày\"  (modelChange)=\"timKiem()\">\n                    </app-daterangepicker>\n                    <!-- <app-datepicker id=\"TuNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" label=\"Từ ngày\" class=\"mt-4 ml-6 on-header\"\n                        [(model)]=\"goiMauXetNghiemSearch.TuNgay\"\n                        (keyup)=\"onKeyTuNgay($event)\" (modelChange)=\"changeTuNgay($event)\">\n                    </app-datepicker>\n\n                    <app-datepicker id=\"DenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" label=\"Đến ngày\" class=\"mt-4 ml-6 on-header\"\n                        [(model)]=\"goiMauXetNghiemSearch.DenNgay\"\n                        (keyup)=\"onKeyDenNgay($event)\" (modelChange)=\"changeDenNgay($event)\">\n                    </app-datepicker> -->\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\"\n                        type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of filterColumns\">\n                            <button\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<!-- DanhSachXetNghiem -->\n<ng-template #soPhieuDanhSachXetNghiemTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id)\">\n        {{dataItem.SoPhieu}}\n    </a>\n</ng-template>\n\n<ng-template #tinhTrangDanhSachXetNghiemTemplate let-dataItem>\n    <span [ngClass]=\"{ 'greenText': dataItem.TinhTrang, 'orangeText': !dataItem.TinhTrang }\">\n        {{dataItem.TinhTrangDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #nguoiGoiMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiGoiMauDisplay}}\n</ng-template>\n\n<ng-template #nguoiNhanMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiNhanMauDisplay}}\n</ng-template>\n\n<ng-template #ngayGoiMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NgayGoiMauDisplay}}\n</ng-template>\n\n<ng-template #ngayNhanMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NgayNhanMauDisplay}}\n</ng-template>\n\n<ng-template #noiTiepNhanDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NoiTiepNhan}}\n</ng-template>\n\n<ng-template #actionDanhSachXetNghiemTemplate let-dataItem>\n    <button *ngIf=\"!dataItem.TinhTrang\" type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\" title=\"Huỷ\" (click)=\"xoaPhieuGoiMauXetNghiem(dataItem)\"> Xóa\n    </button>\n</ng-template>\n\n<!-- NhomXetNghiem -->\n<ng-template #nhomDichVuBenhVienNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.NhomDichVuBenhVienDisplay}}\n</ng-template>\n\n<ng-template #gioiTinhNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.GioiTinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauNhomXetNghiemTemplate let-dataItem>\n    <!-- {{getLoaiMauDisplay(dataItem)}} -->\n    <ul style=\"display: inline-flex;\">\n        <li class=\"mr-2 loai-mau\" *ngFor=\"let item of dataItem.LoaiMauXetNghiems\">\n            <mat-icon *ngIf=\"item.TrangThai == 2\" style=\"color: green;\" [icIcon]=\"icDone\"></mat-icon>\n            <mat-icon *ngIf=\"item.TrangThai == 3\" style=\"color: red;\" [icIcon]=\"icClear\"></mat-icon>\n            {{item.LoaiMauDisplay}}\n        </li>\n    </ul>\n</ng-template>\n\n<!-- DichVuXetNghiem -->\n<ng-template #thoiGianChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.ThoiGianChiDinhDisplay}}\n</ng-template>\n\n<ng-template #nguoiChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiChiDinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.LoaiMauDisplay}}\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n\n.loai-mau {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZ29pLW1hdS14ZXQtbmdoaWVtL2dvaS1tYXUteGV0LW5naGllbS1jaGktdGlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXHhldC1uZ2hpZW1cXGdvaS1tYXUteGV0LW5naGllbVxcZ29pLW1hdS14ZXQtbmdoaWVtLWNoaS10aWV0XFxnb2ktbWF1LXhldC1uZ2hpZW0tY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2dvaS1tYXUteGV0LW5naGllbS9nb2ktbWF1LXhldC1uZ2hpZW0tY2hpLXRpZXQvZ29pLW1hdS14ZXQtbmdoaWVtLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9nb2ktbWF1LXhldC1uZ2hpZW0vZ29pLW1hdS14ZXQtbmdoaWVtLWNoaS10aWV0L2dvaS1tYXUteGV0LW5naGllbS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2FpLW1hdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxvYWktbWF1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: GoiMauXetNghiemChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiMauXetNghiemChiTietComponent", function() { return GoiMauXetNghiemChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _goi_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../goi-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/check-circle */ "./node_modules/@iconify/icons-ic/check-circle.js");
/* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/highlight-off */ "./node_modules/@iconify/icons-ic/highlight-off.js");
/* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_11__);












let GoiMauXetNghiemChiTietComponent = class GoiMauXetNghiemChiTietComponent {
    constructor(dialog, router, route, authService, notificationService, apiService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].GoiMauXetNghiem;
        this.thongTinPhieuGoiMauXetNghiem = new _goi_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_8__["ThongTinPhieuGoiMauXetNghiem"]();
        this.phieuGoiMauXetNghiemId = 0;
        this.tongSoLuongMauGoi = 0;
        this.gridNhomXetNghiemColumns = [];
        this.gridDichVuXetNghiemColumns = [];
        this.urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachGoiMauNhomXetNghiemForGrid";
        this.urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachGoiMauDichVuXetNghiemForGrid";
        this.urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauNhomXetNghiemForGrid";
        this.urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauDichVuXetNghiemForGrid";
        this.sortNhomXetNghiem = [{ field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" }];
        this.sortDichVuXetNghiem = [{ field: "MaDichVu", dir: "desc" }];
        this.additionalSearchStringNhomDichVu = null;
        // additionalSearchStringDichVu: string = null;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icDone = _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icClear = _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_11___default.a;
    }
    ngOnInit() {
        this.phieuGoiMauXetNghiemId = this.route.snapshot.params.id;
        if (this.phieuGoiMauXetNghiemId) {
            this.currentAccessUser = this.authService.getAccessUser();
            this.idPhong = this.authService.getPhongLamViecId();
            this.getChiTietPhieuGoiMauXetNghiem(this.phieuGoiMauXetNghiemId);
            this.getTongSoLuongMauGoi(this.phieuGoiMauXetNghiemId);
            this.getAdditionalSearchStringNhomDichVu(this.phieuGoiMauXetNghiemId);
        }
        else {
            return;
        }
        this.gridNhomXetNghiemColumns = [
            { Field: "NhomDichVuBenhVienId", Title: "Xét nghiệm", Width: 120, Sortable: false, Template: this.nhomDichVuBenhVienNhomXetNghiemTemplate },
            { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: false },
            { Field: "LoaiMauXetNghiems", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauNhomXetNghiemTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: false },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: false },
            { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: false },
            { Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
            { Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false, Template: this.gioiTinhNhomXetNghiemTemplate },
        ];
        this.gridDichVuXetNghiemColumns = [
            { Field: "MaDichVu", Title: "Mã DV", Width: 50, Sortable: false },
            { Field: "TenDichVu", Title: "Tên DV", Width: 150, Sortable: false },
            { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 100, Sortable: false, Template: this.thoiGianChiDinhDichVuXetNghiemTemplate },
            { Field: "NguoiChiDinhId", Title: "Người chỉ định", Width: 130, Sortable: false, Template: this.nguoiChiDinhDichVuXetNghiemTemplate },
            { Field: "BenhPham", Title: "Bệnh phẩm", Width: 100, Sortable: false },
            { Field: "LoaiMau", Title: "Loại mẫu", Width: 50, Sortable: false, Template: this.loaiMauDichVuXetNghiemTemplate }
        ];
    }
    getChiTietPhieuGoiMauXetNghiem(id) {
        this.apiService.get(`XetNghiem/GetPhieuGoiMauXetNghiem?id=${id}`).subscribe((res) => {
            this.thongTinPhieuGoiMauXetNghiem = res;
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.router.navigate(['/xet-nghiem/goi-mau']);
        });
    }
    // getAdditionalSearchStringForGridDichVuXetNghiem(phienXetNghiemId, nhomDichVuBenhVienId) {
    //     return `{ PhienXetNghiemId: ${phienXetNghiemId}, NhomDichVuBenhVienId: ${nhomDichVuBenhVienId} }`
    // }
    getTongSoLuongMauGoi(id) {
        this.apiService.get(`XetNghiem/GetTongSoLuongMauGoiMauXetNghiem?id=${id}`).subscribe((res) => {
            this.tongSoLuongMauGoi = res;
        }, (err) => {
            this.notificationService.showError(err.Message);
        });
    }
    getAdditionalSearchStringNhomDichVu(phieuGoiMauXetNghiemId) {
        this.additionalSearchStringNhomDichVu = `{ "PhieuGoiMauXetNghiemId":"${phieuGoiMauXetNghiemId}" }`;
    }
    // expandDichVu(evt) {
    //     if(evt && evt.dataItem) {
    //         this.additionalSearchStringDichVu = `{ PhienXetNghiemId: ${evt.dataItem.PhienXetNghiemId}, NhomDichVuBenhVienId: ${evt.dataItem.NhomDichVuBenhVienId} }`
    //     }
    // }
    getLoaiMauDisplay(dataItem) {
        if (dataItem) {
            return dataItem.LoaiMauXetNghiems.map(p => p.LoaiMauDisplay).join(', ');
        }
    }
    tooltipCustom(loaiMauXetNghiem) {
        this.thongTinTuChoi = loaiMauXetNghiem;
    }
    quayLai() {
        this.router.navigateByUrl("/xet-nghiem/goi-mau?holdQuery=true");
    }
};
GoiMauXetNghiemChiTietComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true })
], GoiMauXetNghiemChiTietComponent.prototype, "nhomDichVuBenhVienNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhNhomXetNghiemTemplate', { static: true })
], GoiMauXetNghiemChiTietComponent.prototype, "gioiTinhNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauNhomXetNghiemTemplate', { static: true })
], GoiMauXetNghiemChiTietComponent.prototype, "loaiMauNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true })
], GoiMauXetNghiemChiTietComponent.prototype, "thoiGianChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiChiDinhDichVuXetNghiemTemplate', { static: true })
], GoiMauXetNghiemChiTietComponent.prototype, "nguoiChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauDichVuXetNghiemTemplate', { static: true })
], GoiMauXetNghiemChiTietComponent.prototype, "loaiMauDichVuXetNghiemTemplate", void 0);
GoiMauXetNghiemChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goi-mau-xet-nghiem-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-mau-xet-nghiem-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-mau-xet-nghiem-chi-tiet.component.scss */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.scss")).default]
    })
], GoiMauXetNghiemChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.loai-mau {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vZ29pLW1hdS14ZXQtbmdoaWVtL2dvaS1tYXUteGV0LW5naGllbS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcZ29pLW1hdS14ZXQtbmdoaWVtXFxnb2ktbWF1LXhldC1uZ2hpZW0tbGlzdFxcZ29pLW1hdS14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL2dvaS1tYXUteGV0LW5naGllbS9nb2ktbWF1LXhldC1uZ2hpZW0tbGlzdC9nb2ktbWF1LXhldC1uZ2hpZW0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9nb2ktbWF1LXhldC1uZ2hpZW0vZ29pLW1hdS14ZXQtbmdoaWVtLWxpc3QvZ29pLW1hdS14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmxvYWktbWF1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmxvYWktbWF1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GoiMauXetNghiemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiMauXetNghiemListComponent", function() { return GoiMauXetNghiemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _goi_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../goi-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/check-circle */ "./node_modules/@iconify/icons-ic/check-circle.js");
/* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/highlight-off */ "./node_modules/@iconify/icons-ic/highlight-off.js");
/* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_25__);


























let GoiMauXetNghiemListComponent = class GoiMauXetNghiemListComponent {
    constructor(dialog, router, route, location, authService, notificationService, apiService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].GoiMauXetNghiem;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"];
        this.holdQuery = null;
        this.isScan = false;
        this.baseRoute = "/xet-nghiem/goi-mau";
        this.filterColumns = [];
        this.gridDanhSachXetNghiemColumns = [];
        this.gridNhomXetNghiemColumns = [];
        this.gridDichVuXetNghiemColumns = [];
        this.sortDanhSachXetNghiem = [{ field: "SoPhieu", dir: "asc" }];
        this.sortNhomXetNghiem = [{ field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" }];
        this.sortDichVuXetNghiem = [{ field: "MaDichVu", dir: "asc" }];
        // public groupNhomXetNghiem: GroupDescriptor[] = [{
        // 	field: 'XetNghiem', dir: 'asc', aggregates: []
        // }];
        this.urlGetDataDanhSachXetNghiem = "XetNghiem/GetDanhSachGoiMauXetNghiemForGrid";
        this.urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachGoiMauNhomXetNghiemForGrid";
        this.urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachGoiMauDichVuXetNghiemForGrid";
        this.urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauNhomXetNghiemForGrid";
        this.urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachGoiMauDichVuXetNghiemForGrid";
        this.additionalSearchString = null;
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_25___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.icDone = _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icClear = _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_18___default.a;
    }
    ngOnInit() {
        this.goiMauXetNghiemSearch = new _goi_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_4__["GoiMauXetNghiemSearch"]();
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringGoiMauXetNghiem') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringGoiMauXetNghiem');
            this.goiMauXetNghiemSearch = JSON.parse(this.additionalSearchString);
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringGoiMauXetNghiem', null);
            this.additionalSearchString = JSON.stringify(this.goiMauXetNghiemSearch);
        }
        this.convertDateTimeToUTC();
        this.firstSearchString = JSON.stringify(this.goiMauXetNghiemSearch);
        this.reverseDateTime();
        this.gridDanhSachXetNghiemColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soPhieuDanhSachXetNghiemTemplate },
            { Field: "NguoiGoiMauId", Title: "Người gửi mẫu", Width: 150, Sortable: true, Template: this.nguoiGoiMauDanhSachXetNghiemTemplate },
            { Field: "NgayGoiMau", Title: "Ngày gửi mẫu", Width: 150, Sortable: true, Template: this.ngayGoiMauDanhSachXetNghiemTemplate },
            // { Field: "SoLuongMau", Title: "SL Mẫu (KQ/Tổng)", Width: 100, Sortable: false },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangDanhSachXetNghiemTemplate },
            { Field: "NoiTiepNhanId", Title: "Nơi tiếp nhận", Width: 150, Sortable: true, Template: this.noiTiepNhanDanhSachXetNghiemTemplate },
            { Field: "NguoiNhanMauId", Title: "Người nhận mẫu", Width: 150, Sortable: true, Template: this.nguoiNhanMauDanhSachXetNghiemTemplate },
            { Field: "NgayNhanMau", Title: "Ngày nhận mẫu", Width: 150, Sortable: true, Template: this.ngayNhanMauDanhSachXetNghiemTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionDanhSachXetNghiemTemplate }
        ];
        this.gridNhomXetNghiemColumns = [
            { Field: "NhomDichVuBenhVienId", Title: "Xét nghiệm", Width: 120, Sortable: false, Template: this.nhomDichVuBenhVienNhomXetNghiemTemplate },
            { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: false },
            { Field: "LoaiMauXetNghiems", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauNhomXetNghiemTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: false },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: false },
            { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: false },
            { Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
            { Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false, Template: this.gioiTinhNhomXetNghiemTemplate },
        ];
        this.gridDichVuXetNghiemColumns = [
            { Field: "MaDichVu", Title: "Mã DV", Width: 50, Sortable: false },
            { Field: "TenDichVu", Title: "Tên DV", Width: 150, Sortable: false },
            { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 100, Sortable: false, Template: this.thoiGianChiDinhDichVuXetNghiemTemplate },
            { Field: "NguoiChiDinhId", Title: "Người chỉ định", Width: 130, Sortable: false, Template: this.nguoiChiDinhDichVuXetNghiemTemplate },
            { Field: "BenhPham", Title: "Bệnh phẩm", Width: 100, Sortable: false },
            { Field: "LoaiMau", Title: "Loại mẫu", Width: 50, Sortable: false, Template: this.loaiMauDichVuXetNghiemTemplate }
        ];
        this.filterColumns = [
            { Field: "SoPhieu", Title: "Số phiếu" },
            { Field: "NguoiGoiMauId", Title: "Người gửi mẫu" },
            { Field: "NgayGoiMau", Title: "Ngày gửi mẫu" },
            { Field: "SoLuongMau", Title: "SL Mẫu (KQ/Tổng)" },
            { Field: "TinhTrang", Title: "Tình trạng" },
            { Field: "NoiTiepNhan", Title: "Nơi tiếp nhận" },
            { Field: "NguoiNhanMauId", Title: "Người nhận mẫu" },
            { Field: "NgayNhanMau", Title: "Ngày nhận mẫu" }
        ];
    }
    // getAdditionalSearchStringForGridNhomDichVuXetNghiem(phieuGoiMauXetNghiemId: number) {
    //     this.convertDateTimeToUTC();
    //     var query = JSON.stringify(this.goiMauXetNghiemSearch);
    //     this.reverseDateTime();
    //     return `${query.replace(`}`, `,"PhieuGoiMauXetNghiemId":"${phieuGoiMauXetNghiemId}"}`)}`;
    // }
    // getAdditionalSearchStringForGridDichVuXetNghiem(phienXetNghiemId, nhomDichVuBenhVienId) {
    //     return `{ PhienXetNghiemId: ${phienXetNghiemId}, NhomDichVuBenhVienId: ${nhomDichVuBenhVienId} }`
    // }
    keyEvent(event) {
        if (event.keyCode == 81 && event.ctrlKey && this.isScan != true) {
            this.isScan = true;
            event.preventDefault();
            this.QuetMaQRCodeClick();
        }
    }
    checkboxChange($event, choNhanMau = false, daNhanMau = false) {
        this.router.navigateByUrl("/xet-nghiem/goi-mau?holdQuery=true");
        if (choNhanMau) {
            this.goiMauXetNghiemSearch.ChoNhanMau = $event;
        }
        else if (daNhanMau) {
            this.goiMauXetNghiemSearch.DaNhanMau = $event;
        }
        this.timKiem();
    }
    clearSearch() {
        if (this.goiMauXetNghiemSearch.SearchString == "" || this.goiMauXetNghiemSearch.SearchString == null) {
            this.timKiem();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    onKeyTuNgay(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    onKeyDenNgay(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    convertDateTimeToUTC() {
        if (this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
            this.goiMauXetNghiemTuNgay = new Date(this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate);
            this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(Date.UTC(this.goiMauXetNghiemTuNgay.getFullYear(), this.goiMauXetNghiemTuNgay.getMonth(), this.goiMauXetNghiemTuNgay.getDate(), this.goiMauXetNghiemTuNgay.getHours(), this.goiMauXetNghiemTuNgay.getMinutes()));
        }
        if (this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
            this.goiMauXetNghiemDenNgay = new Date(this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate);
            this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(Date.UTC(this.goiMauXetNghiemDenNgay.getFullYear(), this.goiMauXetNghiemDenNgay.getMonth(), this.goiMauXetNghiemDenNgay.getDate(), this.goiMauXetNghiemDenNgay.getHours(), this.goiMauXetNghiemDenNgay.getMinutes()));
        }
    }
    reverseDateTime() {
        if (this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
            this.goiMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(this.goiMauXetNghiemTuNgay.getFullYear(), this.goiMauXetNghiemTuNgay.getMonth(), this.goiMauXetNghiemTuNgay.getDate(), this.goiMauXetNghiemTuNgay.getHours(), this.goiMauXetNghiemTuNgay.getMinutes());
        }
        if (this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
            this.goiMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(this.goiMauXetNghiemDenNgay.getFullYear(), this.goiMauXetNghiemDenNgay.getMonth(), this.goiMauXetNghiemDenNgay.getDate(), this.goiMauXetNghiemDenNgay.getHours(), this.goiMauXetNghiemDenNgay.getMinutes());
        }
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel('XetNghiem/ExportGoiMauXetNghiem', this.gridDanhSachXetNghiem._gridQueryInfo).subscribe(resultData => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'GoiMauXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, (err) => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoaPhieuGoiMauXetNghiem(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmComponent"], {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn xoá phiếu gửi mẫu này không?",
            },
        })
            .afterClosed()
            .subscribe((result) => {
            /* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.delete("XetNghiem/XoaPhieuGoiMauXetNghiem?id=" + dataItem.Id).subscribe((res) => {
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                    this.timKiem();
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }
    QuetMaQRCodeClick() {
        let elementBarcode = document.getElementById("barcodeActive");
        if (elementBarcode != undefined) {
            elementBarcode.click();
        }
    }
    changeQR(evt) {
        if (evt != null && typeof evt == "string" && evt.endsWith("@")) {
            var dataTimKiem = evt.split("@");
            if (dataTimKiem.length > 1) {
                this.goiMauXetNghiemSearch.SearchString = dataTimKiem[0];
            }
            else {
                this.goiMauXetNghiemSearch.SearchString = evt.slice(0, -1);
            }
            this.timKiem();
        }
        else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScan = false;
    }
    xemChiTiet(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.router.navigate(["/xet-nghiem/goi-mau/chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    timKiem() {
        if (this.gridDanhSachXetNghiem) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            let QueryString = null;
            this.gridDanhSachXetNghiem._additionalSearchString = null;
            QueryString = this.goiMauXetNghiemSearch.SearchString;
            this.convertDateTimeToUTC();
            var query = JSON.stringify(this.goiMauXetNghiemSearch);
            this.gridDanhSachXetNghiem._additionalSearchString = query;
            this.gridDanhSachXetNghiem.searchString = QueryString;
            this.gridDanhSachXetNghiem.search();
            this.reverseDateTime();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem("additionalSearchStringGoiMauXetNghiem", JSON.stringify(this.goiMauXetNghiemSearch));
        }
    }
    getAdditionalSearchStringNhomDichVu(dataItem) {
        this.convertDateTimeToUTC();
        var query = JSON.stringify(this.goiMauXetNghiemSearch);
        this.reverseDateTime();
        return `${query.substr(0, query.length - 1)},"PhieuGoiMauXetNghiemId":"${dataItem.Id}"}`;
    }
};
GoiMauXetNghiemListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "soPhieuDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "tinhTrangDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiGoiMauDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "nguoiGoiMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiNhanMauDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "nguoiNhanMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGoiMauDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "ngayGoiMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhanMauDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "ngayNhanMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiTiepNhanDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "noiTiepNhanDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionDanhSachXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "actionDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "nhomDichVuBenhVienNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhNhomXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "gioiTinhNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauNhomXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "loaiMauNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "thoiGianChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiChiDinhDichVuXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "nguoiChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauDichVuXetNghiemTemplate', { static: true })
], GoiMauXetNghiemListComponent.prototype, "loaiMauDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDanhSachXetNghiem', { static: false })
], GoiMauXetNghiemListComponent.prototype, "gridDanhSachXetNghiem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
], GoiMauXetNghiemListComponent.prototype, "keyEvent", null);
GoiMauXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goi-mau-xet-nghiem-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-mau-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-mau-xet-nghiem-list.component.scss */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.scss")).default]
    })
], GoiMauXetNghiemListComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: GoiMauXetNghiemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiMauXetNghiemRoutingModule", function() { return GoiMauXetNghiemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _goi_mau_xet_nghiem_chi_tiet_goi_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.ts");
/* harmony import */ var _goi_mau_xet_nghiem_list_goi_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.ts");








const routes = [
    {
        path: '',
        component: _goi_mau_xet_nghiem_list_goi_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_7__["GoiMauXetNghiemListComponent"],
        data: {
            title: 'Danh sách gửi mẫu xét nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].GoiMauXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _goi_mau_xet_nghiem_chi_tiet_goi_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__["GoiMauXetNghiemChiTietComponent"],
        data: {
            title: 'Chi tiết phiếu gửi mẫu',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].GoiMauXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let GoiMauXetNghiemRoutingModule = class GoiMauXetNghiemRoutingModule {
};
GoiMauXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GoiMauXetNghiemRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: GoiMauXetNghiemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiMauXetNghiemModule", function() { return GoiMauXetNghiemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _goi_mau_xet_nghiem_list_goi_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-list/goi-mau-xet-nghiem-list.component.ts");
/* harmony import */ var _goi_mau_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goi-mau-xet-nghiem.service */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.service.ts");
/* harmony import */ var _goi_mau_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goi-mau-xet-nghiem-routing.module */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-routing.module.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _goi_mau_xet_nghiem_chi_tiet_goi_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem-chi-tiet/goi-mau-xet-nghiem-chi-tiet.component.ts");




















let GoiMauXetNghiemModule = class GoiMauXetNghiemModule {
};
GoiMauXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_goi_mau_xet_nghiem_list_goi_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_3__["GoiMauXetNghiemListComponent"], _goi_mau_xet_nghiem_chi_tiet_goi_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_18__["GoiMauXetNghiemChiTietComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _goi_mau_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoiMauXetNghiemRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"]
        ],
        providers: [
            _goi_mau_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_4__["GoiMauXetNghiemService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _goi_mau_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_4__["GoiMauXetNghiemService"] },
        ],
        entryComponents: []
    })
], GoiMauXetNghiemModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.service.ts ***!
  \******************************************************************************************/
/*! exports provided: GoiMauXetNghiemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiMauXetNghiemService", function() { return GoiMauXetNghiemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let GoiMauXetNghiemService = class GoiMauXetNghiemService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'GoiMauXetNghiem';
    }
};
GoiMauXetNghiemService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
GoiMauXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GoiMauXetNghiemService);



/***/ })

}]);
//# sourceMappingURL=xet-nghiem-goi-mau-xet-nghiem-goi-mau-xet-nghiem-module-es2015.js.map