(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-nhan-mau-xet-nghiem-nhan-mau-xet-nghiem-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    { Title: 'Xét nghiệm', Path: ''},\n    { Title: 'DS nhận mẫu', Path:'/xet-nghiem/nhan-mau', queryParams: {holdQuery : true}, Active: true}]\"\n    [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 *ngIf=\"!thongTinPhieuGoiMauXetNghiem.TinhTrang && allowTiepNhanMau\" fxFlex=\"80%\" fxFlex.sm=\"80%\" class=\"title m-0\">Chi Tiết Nhận Mẫu Xét Nghiệm</h2>\n                <h2 *ngIf=\"thongTinPhieuGoiMauXetNghiem.TinhTrang || !allowTiepNhanMau\" fxFlex=\"90%\" fxFlex.sm=\"90%\" class=\"title m-0\">Chi Tiết Nhận Mẫu Xét Nghiệm</h2>\n\n                <span fxFlex=\"10%\" fxFlex.sm=\"10%\" [ngClass]=\"{ 'greenText': thongTinPhieuGoiMauXetNghiem.TinhTrang, 'orangeText': !thongTinPhieuGoiMauXetNghiem.TinhTrang }\">\n                    {{thongTinPhieuGoiMauXetNghiem.TinhTrangDisplay}}\n                </span>\n                <button *ngIf=\"!thongTinPhieuGoiMauXetNghiem.TinhTrang && allowTiepNhanMau\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" fxFlex=\"10%\" fxFlex.sm=\"10%\" title=\"Tiếp nhận mẫu\" (click)=\"tiepNhanMau()\"> Tiếp nhận mẫu\n                </button>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-textbox fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"SoPhieu\" label=\"Số phiếu\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.SoPhieu\" url=\"\">\n                    </app-textbox>\n                    \n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NguoiGoiMauId\" label=\"Người gửi mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinPhieuGoiMauXetNghiem.NguoiGoiMauDisplay\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NguoiGoiMauId\" url=\"\">\n                    </app-combobox>\n\n                    <app-datetimepicker fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NgayGoiMau\" label=\"Ngày gửi mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NgayGoiMau\" url=\"\">\n                    </app-datetimepicker>\n\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NoiTiepNhan\" label=\"Nơi tiếp nhận\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinPhieuGoiMauXetNghiem.NoiTiepNhanDisplay\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NoiTiepNhanId\" url=\"\">\n                    </app-combobox>\n\n                    <app-combobox *ngIf=\"thongTinPhieuGoiMauXetNghiem.TinhTrang\" fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NguoinhanMau\" label=\"Người nhận mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinPhieuGoiMauXetNghiem.NguoiNhanMauDisplay\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NguoiNhanMauId\" url=\"\">\n                    </app-combobox>\n\n                    <app-datetimepicker *ngIf=\"thongTinPhieuGoiMauXetNghiem.TinhTrang\" fxFlex=\"15%\" fxFlex.sm=\"100%\" id=\"NgayNhanMau\" label=\"Ngày nhận mẫu\" required=\"true\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.NgayNhanMau\" url=\"\">\n                    </app-datetimepicker>\n\n                    <div fxFlex.sm=\"10%\"> </div>\n\n                    <app-textarea fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"GhiChu\" label=\"Ghi chú\" required=\"true\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinPhieuGoiMauXetNghiem.GhiChu\">\n                    </app-textarea>\n                </div>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"grid\" fxLayoutGap.lt-sm=\"0\">\n                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"sub-title mt-3\">\n                        <h3 style=\"display: inline; float: left;\">THÔNG TIN MẪU gửi</h3>\n                        <p style=\"display: inline; float: right;\"><b>SL mẫu để gửi: {{tongSoLuongMauGoi}}</b></p>\n                    </div>\n                </div>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-grid #gridNhomXetNghiem pageSize=\"5\" [additionalSearchString]=\"additionalSearchStringNhomDichVu\"\n                        [documentType]=\"documentType\" [autoHeight]=\"true\" [checkboxAble]=\"false\" \n                        [useAddDeault]=\"false\" [useActionDefault]=\"false\" [useHeaderDefault]=\"false\"\n                        [gridColumns]=\"gridNhomXetNghiemColumns\" [urlGetData]=\"urlGetDataNhomXetNghiem\" [urlGetTotalPage]=\"urlGetTotalPageNhomXetNghiem\"\n                        [detailTemplate]=\"gridNhomXetNghiemTemplate\"\n                        [sort]=\"sortNhomXetNghiem\" [showStt]=\"true\">\n                    </app-grid>\n\n                    <ng-template #gridNhomXetNghiemTemplate let-dataItem>\n                        <app-grid #gridNhomXetNghiem pageSize=\"5\" \n                            [additionalSearchString]=\"'{PhienXetNghiemId:' + dataItem.PhienXetNghiemId + ', NhomDichVuBenhVienId: '+ dataItem.NhomDichVuBenhVienId +'}'\"\n                            [documentType]=\"documentType\" [autoHeight]=\"true\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                            [gridColumns]=\"gridDichVuXetNghiemColumns\" [urlGetData]=\"urlGetDataDichVuXetNghiem\" [urlGetTotalPage]=\"urlGetTotalPageDichVuXetNghiem\"\n                            [sort]=\"sortDichVuXetNghiem\" [showStt]=\"true\">\n                        </app-grid>\n                    </ng-template>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-3\">\n                    <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                        <button class=\"float-left\" type=\"button\" mat-button class=\"mr-1\" (click)=\"quayLai()\">\n                            <i class=\"ft-arrow-left\"></i> Quay lại\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #actionNhomXetNghiemTemplate let-dataItem>\n    <button *ngIf=\"dataItem.SoLuongMauCoTheTuChoi > 0\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" title=\"Từ chối mẫu\" (click)=\"tuChoiMau(dataItem)\">\n        Từ chối mẫu\n    </button>\n</ng-template>\n\n<!-- NhomXetNghiem -->\n<ng-template #nhomDichVuBenhVienNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.NhomDichVuBenhVienDisplay}}\n</ng-template>\n\n<ng-template #gioiTinhNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.GioiTinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauNhomXetNghiemTemplate let-dataItem>\n    <ng-template #tuChoiInfoTemplate let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr>\n                <td>Mẫu bị huỷ bởi <b>{{thongTinTuChoi.NguoiTuChoiDisplay}}</b> vào ngày <b>{{thongTinTuChoi.NgayTuChoiDisplay}}</b></td>\n            </tr>\n            <tr>\n                <td>Lý do: {{thongTinTuChoi.LyDoTuChoi}}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <ul style=\"display: inline-flex;\">\n        <li class=\"mr-2 loai-mau\" *ngFor=\"let item of dataItem.LoaiMauXetNghiems\">\n            <mat-icon *ngIf=\"item.TrangThai == 2\" style=\"color: green;\" [icIcon]=\"icDone\"></mat-icon>\n            <mat-icon *ngIf=\"item.TrangThai == 3\" style=\"color: red;\"\n                kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" [tooltipTemplate]=\"tuChoiInfoTemplate\" filter=\"*\"\n                [icIcon]=\"icClear\" (mouseover)=\"tooltipCustom(item)\">\n            </mat-icon>\n            {{item.LoaiMauDisplay}}\n        </li>\n    </ul>\n</ng-template>\n\n<!-- DichVuXetNghiem -->\n<ng-template #thoiGianChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.ThoiGianChiDinhDisplay}}\n</ng-template>\n\n<ng-template #nguoiChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiChiDinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.LoaiMauDisplay}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">           \n            <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Xét nghiệm',Path:''},\n                {Title:'DS nhận mẫu',Path:'/xet-nghiem/nhan-mau', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridDanhSachXetNghiem\n                [documentType]=\"documentType\" [additionalSearchString]=\"firstSearchString\"\n                [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [gridColumns]=\"gridDanhSachXetNghiemColumns\" [urlGetData]=\"urlGetDataDanhSachXetNghiem\"\n                [detailTemplate]=\"gridNhomXetNghiemTemplate\" [headerTemplate]=\"headerTemplate\"\n                [sort]=\"sortDanhSachXetNghiem\">\n            </app-grid>\n\n            <ng-template #gridNhomXetNghiemTemplate let-dataItem>\n                <app-grid #gridNhomXetNghiem pageSize=\"5\" \n                    [additionalSearchString]=\"getAdditionalSearchStringNhomDichVu(dataItem)\"\n                    [documentType]=\"documentType\" [autoHeight]=\"true\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                    [gridColumns]=\"gridNhomXetNghiemColumns\" [urlGetData]=\"urlGetDataNhomXetNghiem\"\n                    [detailTemplate]=\"gridDichVuXetNghiemTemplate\" [urlGetTotalPage]=\"urlGetTotalPageNhomXetNghiem\"\n                    [sort]=\"sortNhomXetNghiem\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #gridDichVuXetNghiemTemplate let-dataItem>\n                <app-grid #gridDichVuXetNghiem pageSize=\"5\" \n                    [additionalSearchString]=\"'{PhienXetNghiemId:' + dataItem.PhienXetNghiemId + ', NhomDichVuBenhVienId: '+ dataItem.NhomDichVuBenhVienId +'}'\"\n                    [documentType]=\"documentType\" [autoHeight]=\"true\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n                    [gridColumns]=\"gridDichVuXetNghiemColumns\" [urlGetData]=\"urlGetDataDichVuXetNghiem\" [urlGetTotalPage]=\"urlGetTotalPageDichVuXetNghiem\"\n                    [sort]=\"sortDichVuXetNghiem\">\n                </app-grid>\n            </ng-template>\n            \n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox (modelChange)=\"checkboxChange($event, true, false)\" id=\"ChoNhanMau\"\n                        [(model)]=\"nhanMauXetNghiemSearch.ChoNhanMau\" class=\"ml-2\" label=\"Chờ nhận mẫu\">\n                    </app-checkbox>\n\n                    <app-checkbox (modelChange)=\"checkboxChange($event, false, true)\" id=\"DaNhanMau\"\n                        [(model)]=\"nhanMauXetNghiemSearch.DaNhanMau\" class=\"ml-2\" label=\"Đã nhận mẫu\">\n                    </app-checkbox>\n\n                    <!-- <div class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"nhanMauXetNghiemSearch.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên NB, Barcode\" />\n                        <button color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\" kendoTooltip title=\"Phím tắt: Ctrl + Q\"\n                            (click)=\"QuetMaQRCodeClick()\">\n                            <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                        </button>\n                    </div>\n                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n\n                    <app-datepicker id=\"TuNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-4 ml-6 on-header\" label=\"Từ ngày\"\n                        [(model)]=\"nhanMauXetNghiemSearch.TuNgay\" \n                        (keyup)=\"onKeyTuNgay($event)\" (modelChange)=\"changeTuNgay($event)\">\n                    </app-datepicker>\n\n                    <app-datepicker id=\"DenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mt-4 ml-6 on-header\" label=\"Đến ngày\"\n                        [(model)]=\"nhanMauXetNghiemSearch.DenNgay\" \n                        (keyup)=\"onKeyDenNgay($event)\" (modelChange)=\"changeDenNgay($event)\">\n                    </app-datepicker> -->\n\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"nhanMauXetNghiemSearch.SearchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"clearSearch()\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN, Họ tên NB, Barcode\" />\n                            <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n                                kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                            </button>\n                            <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n                        </div>\n                        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                    <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"nhanMauXetNghiemSearch.RangeNgayGoiMau\" \n                        label=\"Từ ngày - đến ngày\"  (modelChange)=\"timKiem()\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\"\n                        type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    \n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of filterColumns\">\n                            <button\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<!-- DanhSachXetNghiem -->\n<ng-template #soPhieuDanhSachXetNghiemTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id)\">\n        {{dataItem.SoPhieu}}\n    </a>\n</ng-template>\n\n<ng-template #tinhTrangDanhSachXetNghiemTemplate let-dataItem>\n    <span [ngClass]=\"{ 'greenText': dataItem.TinhTrang, 'orangeText': !dataItem.TinhTrang }\">\n        {{dataItem.TinhTrangDisplay}}\n    </span>\n</ng-template>\n\n<ng-template #nguoiGoiMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiGoiMauDisplay}}\n</ng-template>\n\n<ng-template #nguoiNhanMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiNhanMauDisplay}}\n</ng-template>\n\n<ng-template #ngayGoiMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NgayGoiMauDisplay}}\n</ng-template>\n\n<ng-template #ngayNhanMauDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NgayNhanMauDisplay}}\n</ng-template>\n\n<ng-template #noiTiepNhanDanhSachXetNghiemTemplate let-dataItem>\n    {{dataItem.NoiTiepNhanDisplay}}\n</ng-template>\n\n<ng-template #actionDanhSachXetNghiemTemplate let-dataItem>\n    <button *ngIf=\"!dataItem.TinhTrang && dataItem.SoLuongMauCoTheTuChoi > 0\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" title=\"Tiếp nhận mẫu\" (click)=\"tiepNhanMau(dataItem)\"> Tiếp nhận mẫu\n    </button>\n</ng-template>\n\n<!-- NhomXetNghiem -->\n<ng-template #nhomDichVuBenhVienNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.NhomDichVuBenhVienDisplay}}\n</ng-template>\n\n<ng-template #gioiTinhNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.GioiTinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauNhomXetNghiemTemplate let-dataItem>\n    <ul style=\"display: inline-flex;\">\n        <li class=\"mr-2 loai-mau\" *ngFor=\"let item of dataItem.LoaiMauXetNghiems\">\n            <mat-icon *ngIf=\"item.TrangThai == 2\" style=\"color: green;\" [icIcon]=\"icDone\"></mat-icon>\n            <mat-icon *ngIf=\"item.TrangThai == 3\" style=\"color: red;\" [icIcon]=\"icClear\"></mat-icon>\n            {{item.LoaiMauDisplay}}\n        </li>\n    </ul>\n</ng-template>\n\n<!-- <ng-template #loaiMauNhomXetNghiemTemplate let-dataItem>\n    {{dataItem.LoaiMauXetNghiemDisplay}}\n</ng-template> -->\n\n<!-- DichVuXetNghiem -->\n<ng-template #thoiGianChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.ThoiGianChiDinhDisplay}}\n</ng-template>\n\n<ng-template #nguoiChiDinhDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.NguoiChiDinhDisplay}}\n</ng-template>\n\n<ng-template #loaiMauDichVuXetNghiemTemplate let-dataItem>\n    {{dataItem.LoaiMauDisplay}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>XÁC NHẬN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <p fxFlex=\"100%\">Bạn có chắc chắn không tiếp nhận mẫu này không?</p>\n    <app-grid #gridTuChoiMau fxFlex=\"100%\"\n        [documentType]=\"documentType\" [additionalSearchString]=\"additionalSearchString\"\n        [useHeaderDefault]=\"false\" [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [gridColumns]=\"gridTuChoiMauColumns\" [urlGetData]=\"urlGetDataTuChoiMau\" [maxHeight]=\"200\" [pageable]=\"false\"\n        [sort]=\"sortNhomXetNghiem\"\n        (extOnDataBound)=\"onDataBoundGridTuChoiMau($event)\">\n    </app-grid>\n    \n    <div style=\"flex-direction: row;justify-content: flex-end;align-items: flex-end;display: flex;margin: 0;\" fxFlex=\"100%\">\n        <button type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1 mt-2\" (click)=\"close()\">Không</button>\n        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"tuChoiMau()\">Có</button>\n    </div> \n</mat-dialog-content>\n\n<ng-template #loaiMauTemplate let-dataItem>\n    {{dataItem.LoaiMauXetNghiemDisplay}}\n</ng-template>\n\n<ng-template #khongDatTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <app-checkbox id=\"KhongDat{{rowIndex + 1}}\"\n        [(model)]=\"dataItem.KhongDatChatLuong\">\n    </app-checkbox>\n</ng-template>\n\n<ng-template #lyDoTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <app-textbox id=\"LyDoKhongDat{{rowIndex + 1}}\" label=\"Lý do\" maxlength=\"200\"\n        [required]=\"dataItem.KhongDatChatLuong\"\n        [(model)]=\"dataItem.LyDoKhongDat\"\n        [validationerror]=\"'LyDoKhongDat[' + mauXetNghiems.indexOf(dataItem) + ']' | validationerror:validationErrors\">\n    </app-textbox>\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n\n.loai-mau {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vbmhhbi1tYXUteGV0LW5naGllbS9uaGFuLW1hdS14ZXQtbmdoaWVtLWNoaS10aWV0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxceGV0LW5naGllbVxcbmhhbi1tYXUteGV0LW5naGllbVxcbmhhbi1tYXUteGV0LW5naGllbS1jaGktdGlldFxcbmhhbi1tYXUteGV0LW5naGllbS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vbmhhbi1tYXUteGV0LW5naGllbS9uaGFuLW1hdS14ZXQtbmdoaWVtLWNoaS10aWV0L25oYW4tbWF1LXhldC1uZ2hpZW0tY2hpLXRpZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL25oYW4tbWF1LXhldC1uZ2hpZW0vbmhhbi1tYXUteGV0LW5naGllbS1jaGktdGlldC9uaGFuLW1hdS14ZXQtbmdoaWVtLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxvYWktbWF1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9haS1tYXUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: NhanMauXetNghiemChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemChiTietComponent", function() { return NhanMauXetNghiemChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_tu_choi_popup_nhan_mau_xet_nghiem_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.ts");
/* harmony import */ var _goi_mau_xet_nghiem_goi_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../goi-mau-xet-nghiem/goi-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/goi-mau-xet-nghiem/goi-mau-xet-nghiem.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/check-circle */ "./node_modules/@iconify/icons-ic/check-circle.js");
/* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/highlight-off */ "./node_modules/@iconify/icons-ic/highlight-off.js");
/* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_14__);















let NhanMauXetNghiemChiTietComponent = class NhanMauXetNghiemChiTietComponent {
    constructor(dialog, router, route, authService, notificationService, apiService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].GoiMauXetNghiem;
        this.thongTinPhieuGoiMauXetNghiem = new _goi_mau_xet_nghiem_goi_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_10__["ThongTinPhieuGoiMauXetNghiem"]();
        this.phieuGoiMauXetNghiemId = 0;
        this.tongSoLuongMauGoi = 0;
        this.allowTiepNhanMau = false;
        this.additionalSearchStringNhomDichVu = null;
        this.gridNhomXetNghiemColumns = [];
        this.gridDichVuXetNghiemColumns = [];
        this.urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachNhanMauNhomXetNghiemForGrid";
        this.urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachNhanMauDichVuXetNghiemForGrid";
        this.urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauNhomXetNghiemForGrid";
        this.urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauDichVuXetNghiemForGrid";
        this.sortNhomXetNghiem = [{ field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" }];
        this.sortDichVuXetNghiem = [{ field: "MaDichVu", dir: "desc" }];
        this.icDone = _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icClear = _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_14___default.a;
    }
    ngOnInit() {
        this.phieuGoiMauXetNghiemId = this.route.snapshot.params.id;
        if (this.phieuGoiMauXetNghiemId) {
            this.currentAccessUser = this.authService.getAccessUser();
            this.idPhong = this.authService.getPhongLamViecId();
            this.getChiTietPhieuGoiMauXetNghiem(this.phieuGoiMauXetNghiemId);
            this.getSoLuongMauCoTheTuChoi(this.phieuGoiMauXetNghiemId);
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
            { Field: "Action", Title: "", Width: 100, Template: this.actionNhomXetNghiemTemplate }
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
    getSoLuongMauCoTheTuChoi(id) {
        this.apiService.get(`XetNghiem/TinhSoLuongMauCoTheTuChoi?phieuGoiMauId=${id}`).subscribe((res) => {
            if (res != null && res > 0) {
                this.allowTiepNhanMau = true;
                return;
            }
            this.allowTiepNhanMau = false;
        }, (err) => {
            this.notificationService.showError(err.Message);
        });
    }
    getChiTietPhieuGoiMauXetNghiem(id) {
        this.apiService.get(`XetNghiem/GetPhieuGoiMauXetNghiem?id=${id}`).subscribe((res) => {
            this.thongTinPhieuGoiMauXetNghiem = res;
        }, (err) => {
            this.notificationService.showError(err.Message);
            this.router.navigate(['/xet-nghiem/nhan-mau']);
        });
    }
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
    quayLai() {
        this.router.navigateByUrl("/xet-nghiem/nhan-mau?holdQuery=true");
    }
    tiepNhanMau() {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn tiếp nhận (các) mẫu này không?",
            },
        })
            .afterClosed()
            .subscribe((result) => {
            /* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.post(`XetNghiem/TiepNhanMau?phieuGoiMauXetNghiemId=${this.phieuGoiMauXetNghiemId}`).subscribe((res) => {
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Tiếp nhận mẫu"]));
                    // this.quayLai();
                    this.getChiTietPhieuGoiMauXetNghiem(this.phieuGoiMauXetNghiemId);
                    this.getSoLuongMauCoTheTuChoi(this.phieuGoiMauXetNghiemId);
                    this.getTongSoLuongMauGoi(this.phieuGoiMauXetNghiemId);
                    this.getAdditionalSearchStringNhomDichVu(this.phieuGoiMauXetNghiemId);
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }
    tuChoiMau(dataItem) {
        this.dialog.open(_nhan_mau_xet_nghiem_tu_choi_popup_nhan_mau_xet_nghiem_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_9__["NhanMauXetNghiemTuChoiPopupComponent"], {
            disableClose: true,
            width: '600px',
            height: 'auto',
            data: { dataItem: dataItem }
        })
            .afterClosed()
            .subscribe((res) => {
            if (res === 'Yes') {
                if (this.gridNhomXetNghiem) {
                    this.gridNhomXetNghiem.search();
                    this.getSoLuongMauCoTheTuChoi(this.phieuGoiMauXetNghiemId);
                }
            }
        });
    }
    tooltipCustom(loaiMauXetNghiem) {
        this.thongTinTuChoi = loaiMauXetNghiem;
    }
};
NhanMauXetNghiemChiTietComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "nhomDichVuBenhVienNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "gioiTinhNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "loaiMauNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "actionNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "thoiGianChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiChiDinhDichVuXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "nguoiChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauDichVuXetNghiemTemplate', { static: true })
], NhanMauXetNghiemChiTietComponent.prototype, "loaiMauDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridNhomXetNghiem', { static: false })
], NhanMauXetNghiemChiTietComponent.prototype, "gridNhomXetNghiem", void 0);
NhanMauXetNghiemChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhan-mau-xet-nghiem-chi-tiet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhan-mau-xet-nghiem-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhan-mau-xet-nghiem-chi-tiet.component.scss */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.scss")).default]
    })
], NhanMauXetNghiemChiTietComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n\n.loai-mau {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vbmhhbi1tYXUteGV0LW5naGllbS9uaGFuLW1hdS14ZXQtbmdoaWVtLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFxuaGFuLW1hdS14ZXQtbmdoaWVtXFxuaGFuLW1hdS14ZXQtbmdoaWVtLWxpc3RcXG5oYW4tbWF1LXhldC1uZ2hpZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0vbmhhbi1tYXUteGV0LW5naGllbS9uaGFuLW1hdS14ZXQtbmdoaWVtLWxpc3Qvbmhhbi1tYXUteGV0LW5naGllbS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4veGV0LW5naGllbS9uaGFuLW1hdS14ZXQtbmdoaWVtL25oYW4tbWF1LXhldC1uZ2hpZW0tbGlzdC9uaGFuLW1hdS14ZXQtbmdoaWVtLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubG9haS1tYXUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIi55ZWxsb3dUZXh0IHtcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ibGFja1RleHQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2FpLW1hdSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: NhanMauXetNghiemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemListComponent", function() { return NhanMauXetNghiemListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../nhan-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.model.ts");
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


























let NhanMauXetNghiemListComponent = class NhanMauXetNghiemListComponent {
    constructor(dialog, router, route, location, authService, notificationService, apiService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.location = location;
        this.authService = authService;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].NhanMauXetNghiem;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"];
        this.holdQuery = null;
        this.isScan = false;
        this.baseRoute = "/xet-nghiem/nhan-mau";
        this.filterColumns = [];
        this.gridDanhSachXetNghiemColumns = [];
        this.gridNhomXetNghiemColumns = [];
        this.gridDichVuXetNghiemColumns = [];
        this.sortDanhSachXetNghiem = [{ field: "SoPhieu", dir: "asc" }];
        this.sortNhomXetNghiem = [{ field: "MaTiepNhan", dir: "asc" }, { field: "NhomDichVuBenhVienId", dir: "asc" }];
        this.sortDichVuXetNghiem = [{ field: "MaDichVu", dir: "asc" }];
        this.urlGetDataDanhSachXetNghiem = "XetNghiem/GetDanhSachNhanMauXetNghiemForGrid";
        this.urlGetDataNhomXetNghiem = "XetNghiem/GetDanhSachNhanMauNhomXetNghiemForGrid";
        this.urlGetDataDichVuXetNghiem = "XetNghiem/GetDanhSachNhanMauDichVuXetNghiemForGrid";
        this.urlGetTotalPageNhomXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauNhomXetNghiemForGrid";
        this.urlGetTotalPageDichVuXetNghiem = "XetNghiem/GetTotalPagesDanhSachNhanMauDichVuXetNghiemForGrid";
        this.additionalSearchString = null;
        this.additionalSearchStringNhomDichVu = null;
        this.additionalSearchStringDichVu = null;
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
        this.nhanMauXetNghiemSearch = new _nhan_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_15__["NhanMauXetNghiemSearch"]();
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringNhanMauXetNghiem') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringNhanMauXetNghiem');
            this.nhanMauXetNghiemSearch = JSON.parse(this.additionalSearchString);
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringNhanMauXetNghiem', null);
            this.additionalSearchString = JSON.stringify(this.nhanMauXetNghiemSearch);
        }
        this.convertDateTimeToUTC();
        this.firstSearchString = JSON.stringify(this.nhanMauXetNghiemSearch);
        this.reverseDateTime();
        this.gridDanhSachXetNghiemColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soPhieuDanhSachXetNghiemTemplate },
            { Field: "NguoiGoiMauId", Title: "Người gửi mẫu", Width: 130, Sortable: true, Template: this.nguoiGoiMauDanhSachXetNghiemTemplate },
            { Field: "NgayGoiMau", Title: "Ngày gửi mẫu", Width: 100, Sortable: true, Template: this.ngayGoiMauDanhSachXetNghiemTemplate },
            { Field: "SoLuongMau", Title: "SL Mẫu (KQ/Tổng)", Width: 100, Sortable: false },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangDanhSachXetNghiemTemplate },
            { Field: "NoiTiepNhanId", Title: "Nơi tiếp nhận", Width: 130, Sortable: true, Template: this.noiTiepNhanDanhSachXetNghiemTemplate },
            { Field: "NguoiNhanMauId", Title: "Người nhận mẫu", Width: 130, Sortable: true, Template: this.nguoiNhanMauDanhSachXetNghiemTemplate },
            { Field: "NgayNhanMau", Title: "Ngày nhận mẫu", Width: 100, Sortable: true, Template: this.ngayNhanMauDanhSachXetNghiemTemplate },
            { Field: "Action", Title: "", Width: 100, Template: this.actionDanhSachXetNghiemTemplate }
        ];
        this.gridNhomXetNghiemColumns = [
            { Field: "NhomDichVuBenhVienId", Title: "Xét nghiệm", Width: 120, Sortable: false, Template: this.nhomDichVuBenhVienNhomXetNghiemTemplate },
            { Field: "Barcode", Title: "Mã Barcode", Width: 80, Sortable: false },
            { Field: "LoaiMauXetNghiems", Title: "Loại mẫu", Width: 120, Sortable: false, Template: this.loaiMauNhomXetNghiemTemplate },
            { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: false },
            { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: false },
            { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: false },
            { Field: "NamSinh", Title: "Năm sinh", Width: 50, Sortable: false },
            { Field: "GioiTinh", Title: "Giới tính", Width: 50, Sortable: false, Template: this.gioiTinhNhomXetNghiemTemplate }
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
    xemChiTiet(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            this.router.navigate(["/xet-nghiem/nhan-mau/chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    checkboxChange($event, choNhanMau = false, daNhanMau = false) {
        this.router.navigateByUrl("/xet-nghiem/nhan-mau?holdQuery=true");
        if (choNhanMau) {
            this.nhanMauXetNghiemSearch.ChoNhanMau = $event;
        }
        else if (daNhanMau) {
            this.nhanMauXetNghiemSearch.DaNhanMau = $event;
        }
        this.timKiem();
    }
    clearSearch() {
        if (this.nhanMauXetNghiemSearch.SearchString == "" || this.nhanMauXetNghiemSearch.SearchString == null) {
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
    changeTuNgay(ev) {
        this.timKiem();
    }
    changeDenNgay(ev) {
        this.timKiem();
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel('XetNghiem/ExportNhanMauXetNghiem', this.gridDanhSachXetNghiem._gridQueryInfo).subscribe(resultData => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'NhanMauXetNghiem' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, (err) => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    timKiem() {
        if (this.gridDanhSachXetNghiem) {
            this.location.replaceState(this.baseRoute + '?holdQuery=true');
            let QueryString = null;
            this.gridDanhSachXetNghiem._additionalSearchString = null;
            QueryString = this.nhanMauXetNghiemSearch.SearchString;
            this.convertDateTimeToUTC();
            var query = JSON.stringify(this.nhanMauXetNghiemSearch);
            this.gridDanhSachXetNghiem._additionalSearchString = query;
            this.gridDanhSachXetNghiem.searchString = QueryString;
            this.gridDanhSachXetNghiem.search();
            this.reverseDateTime();
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem("additionalSearchStringNhanMauXetNghiem", JSON.stringify(this.nhanMauXetNghiemSearch));
        }
    }
    convertDateTimeToUTC() {
        if (this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
            this.nhanMauXetNghiemTuNgay = new Date(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate);
            this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(Date.UTC(this.nhanMauXetNghiemTuNgay.getFullYear(), this.nhanMauXetNghiemTuNgay.getMonth(), this.nhanMauXetNghiemTuNgay.getDate(), this.nhanMauXetNghiemTuNgay.getHours(), this.nhanMauXetNghiemTuNgay.getMinutes()));
        }
        if (this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
            this.nhanMauXetNghiemDenNgay = new Date(this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate);
            this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(Date.UTC(this.nhanMauXetNghiemDenNgay.getFullYear(), this.nhanMauXetNghiemDenNgay.getMonth(), this.nhanMauXetNghiemDenNgay.getDate(), this.nhanMauXetNghiemDenNgay.getHours(), this.nhanMauXetNghiemDenNgay.getMinutes()));
        }
    }
    reverseDateTime() {
        if (this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate) {
            this.nhanMauXetNghiemSearch.RangeNgayGoiMau.startDate = new Date(this.nhanMauXetNghiemTuNgay.getFullYear(), this.nhanMauXetNghiemTuNgay.getMonth(), this.nhanMauXetNghiemTuNgay.getDate(), this.nhanMauXetNghiemTuNgay.getHours(), this.nhanMauXetNghiemTuNgay.getMinutes());
        }
        if (this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate) {
            this.nhanMauXetNghiemSearch.RangeNgayGoiMau.endDate = new Date(this.nhanMauXetNghiemDenNgay.getFullYear(), this.nhanMauXetNghiemDenNgay.getMonth(), this.nhanMauXetNghiemDenNgay.getDate(), this.nhanMauXetNghiemDenNgay.getHours(), this.nhanMauXetNghiemDenNgay.getMinutes());
        }
    }
    tiepNhanMau(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: "400px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn tiếp nhận (các) mẫu này không?",
            },
        })
            .afterClosed()
            .subscribe((result) => {
            /* result is a string:Yes,No,No answer*/
            if (result == "Yes") {
                this.apiService.post(`XetNghiem/TiepNhanMau?phieuGoiMauXetNghiemId=${dataItem.Id}`).subscribe((res) => {
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Tiếp nhận mẫu"]));
                    this.timKiem();
                }, (err) => {
                    this.notificationService.showError(err.Message);
                });
            }
        });
    }
    getAdditionalSearchStringNhomDichVu(dataItem) {
        this.convertDateTimeToUTC();
        var query = JSON.stringify(this.nhanMauXetNghiemSearch);
        this.reverseDateTime();
        return `${query.substr(0, query.length - 1)},"PhieuGoiMauXetNghiemId":"${dataItem.Id}"}`;
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
                this.nhanMauXetNghiemSearch.SearchString = dataTimKiem[0];
            }
            else {
                this.nhanMauXetNghiemSearch.SearchString = evt.slice(0, -1);
            }
            this.timKiem();
        }
        else {
            this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
        }
        this.isScan = false;
    }
};
NhanMauXetNghiemListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "soPhieuDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "tinhTrangDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiGoiMauDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "nguoiGoiMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiNhanMauDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "nguoiNhanMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGoiMauDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "ngayGoiMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhanMauDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "ngayNhanMauDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiTiepNhanDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "noiTiepNhanDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionDanhSachXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "actionDanhSachXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuBenhVienNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "nhomDichVuBenhVienNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "gioiTinhNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauNhomXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "loaiMauNhomXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhDichVuXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "thoiGianChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nguoiChiDinhDichVuXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "nguoiChiDinhDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauDichVuXetNghiemTemplate', { static: true })
], NhanMauXetNghiemListComponent.prototype, "loaiMauDichVuXetNghiemTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDanhSachXetNghiem', { static: false })
], NhanMauXetNghiemListComponent.prototype, "gridDanhSachXetNghiem", void 0);
NhanMauXetNghiemListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhan-mau-xet-nghiem-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhan-mau-xet-nghiem-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhan-mau-xet-nghiem-list.component.scss */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.scss")).default]
    })
], NhanMauXetNghiemListComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: NhanMauXetNghiemRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemRoutingModule", function() { return NhanMauXetNghiemRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_chi_tiet_nhan_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_list_nhan_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.ts");








const routes = [
    {
        path: '',
        component: _nhan_mau_xet_nghiem_list_nhan_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_7__["NhanMauXetNghiemListComponent"],
        data: {
            title: 'Danh sách nhận mẫu xét nghiệm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhanMauXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _nhan_mau_xet_nghiem_chi_tiet_nhan_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_6__["NhanMauXetNghiemChiTietComponent"],
        data: {
            title: 'Chi tiết phiếu nhận mẫu',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhanMauXetNghiem,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let NhanMauXetNghiemRoutingModule = class NhanMauXetNghiemRoutingModule {
};
NhanMauXetNghiemRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NhanMauXetNghiemRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL25oYW4tbWF1LXhldC1uZ2hpZW0vbmhhbi1tYXUteGV0LW5naGllbS10dS1jaG9pLXBvcHVwL25oYW4tbWF1LXhldC1uZ2hpZW0tdHUtY2hvaS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: NhanMauXetNghiemTuChoiPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemTuChoiPopupComponent", function() { return NhanMauXetNghiemTuChoiPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);










let NhanMauXetNghiemTuChoiPopupComponent = class NhanMauXetNghiemTuChoiPopupComponent {
    constructor(data, dialog, dialogRef, apiService, notificationService, authService) {
        this.data = data;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].NhanMauXetNghiem;
        this.mauXetNghiems = [];
        // lstVoucherChiTietMienGiam: VoucherChiTietMienGiam[] = [];
        this.urlGetDataTuChoiMau = 'XetNghiem/GetDanhSachKhongTiepNhanMau';
        this.gridTuChoiMauColumns = [];
        this.sortNhomXetNghiem = [{ field: "LoaiMauXetNghiem", dir: "asc" }];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
    }
    ngOnInit() {
        this.gridTuChoiMauColumns = [
            { Field: "LoaiMauXetNghiem", Title: "Mẫu", Width: 100, Sortable: false, Template: this.loaiMauTemplate },
            { Field: "KhongDatChatLuong", Title: "Không đạt", Width: 100, Sortable: false, Template: this.khongDatTemplate },
            { Field: "LyDoKhongDat", Title: "Lý do", Width: 100, Sortable: false, Template: this.lyDoTemplate }
        ];
        this.additionalSearchString = `{"PhieuGoiMauXetNghiemId":"${this.data.dataItem.PhieuGoiMauXetNghiemId ? this.data.dataItem.PhieuGoiMauXetNghiemId : 0}","NhomDichVuBenhVienId":"${this.data.dataItem.NhomDichVuBenhVienId ? this.data.dataItem.NhomDichVuBenhVienId : 0}","PhienXetNghiemId":"${this.data.dataItem.PhienXetNghiemId ? this.data.dataItem.PhienXetNghiemId : 0}"}`;
    }
    onDataBoundGridTuChoiMau(event) {
        if (event && event.Data.length > 0) {
            // this.mauXetNghiems = event.Data;
            this.mauXetNghiems = [...event.Data];
        }
    }
    close() {
        this.dialog.closeAll();
    }
    tuChoiMau() {
        this.onValidateGridDichVuChoVoucher();
        let mauKhongDatChatLuongs = this.mauXetNghiems.filter(p => p.KhongDatChatLuong);
        if (this.validationErrors && this.validationErrors.length === 0 && mauKhongDatChatLuongs && mauKhongDatChatLuongs.length > 0) {
            this.apiService.postArray(`XetNghiem/KhongTiepNhanMau`, mauKhongDatChatLuongs).subscribe(res => {
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Từ chối mẫu"]));
                this.dialogRef.close('Yes');
            }, (err) => {
                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? this.notificationService.showError(err.Message) : this.validationErrors = err.ValidationErrors;
            });
        }
        else if (!mauKhongDatChatLuongs || mauKhongDatChatLuongs.length === 0) {
            this.notificationService.showSuccess('Không từ chối bất kỳ mẫu nào.');
            this.dialogRef.close('No');
        }
    }
    onValidateGridDichVuChoVoucher() {
        this.validationErrors = [];
        if (this.mauXetNghiems && this.mauXetNghiems.some(p => !p.LyDoKhongDat && p.KhongDatChatLuong)) {
            for (const mauXetNghiem of this.mauXetNghiems.filter(p => !p.LyDoKhongDat && p.KhongDatChatLuong)) {
                const validate = {
                    Field: 'LyDoKhongDat[' + this.mauXetNghiems.indexOf(mauXetNghiem) + ']',
                    Message: 'Lý do yêu cầu nhập'
                };
                this.validationErrors.push(validate);
            }
        }
    }
};
NhanMauXetNghiemTuChoiPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiMauTemplate', { static: true })
], NhanMauXetNghiemTuChoiPopupComponent.prototype, "loaiMauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khongDatTemplate', { static: true })
], NhanMauXetNghiemTuChoiPopupComponent.prototype, "khongDatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lyDoTemplate', { static: true })
], NhanMauXetNghiemTuChoiPopupComponent.prototype, "lyDoTemplate", void 0);
NhanMauXetNghiemTuChoiPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhan-mau-xet-nghiem-tu-choi-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhan-mau-xet-nghiem-tu-choi-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhan-mau-xet-nghiem-tu-choi-popup.component.scss */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], NhanMauXetNghiemTuChoiPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.model.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.model.ts ***!
  \******************************************************************************************/
/*! exports provided: NhanMauXetNghiemSearch, MauXetNghiem, rangeDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemSearch", function() { return NhanMauXetNghiemSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauXetNghiem", function() { return MauXetNghiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NhanMauXetNghiemSearch {
    constructor() {
        this.ChoNhanMau = true;
        this.DaNhanMau = true;
        this.SearchString = "";
        // public TuNgay: any;
        // public DenNgay: any;
        this.RangeNgayGoiMau = new rangeDate();
    }
}
// export class ThongTinPhieuNhanMauXetNghiem {
//     public Id: number = 0;
//     public SoPhieu: string = null;
//     public NguoiGoiMauId: number = 0;
//     public NguoiGoiMauDisplay: string = null;
//     public NoiTiepnhanId: number = 0;
//     public NoiTiepNhanDisplay: string = null;
//     public NguoiNhanMauId: number = 0;
//     public NguoiNhanMauDisplay: string = null;
//     public NgayGoiMau: any;
//     public NgayNhanMau: any;
//     public GhiChu: string = null;
//     public TinhTrang: number = 0;
//     public TinhTrangDisplay: string = null;
// }
class MauXetNghiem {
    constructor() {
        this.Id = 0;
        // public DatChatLuong: boolean = true;
        this.KhongDatChatLuong = false;
        this.LyDoKhongDat = null;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: NhanMauXetNghiemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemModule", function() { return NhanMauXetNghiemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _nhan_mau_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem.service */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.service.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem-routing.module */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-routing.module.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_list_nhan_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-list/nhan-mau-xet-nghiem-list.component.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_chi_tiet_nhan_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-chi-tiet/nhan-mau-xet-nghiem-chi-tiet.component.ts");
/* harmony import */ var _nhan_mau_xet_nghiem_tu_choi_popup_nhan_mau_xet_nghiem_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component */ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem-tu-choi-popup/nhan-mau-xet-nghiem-tu-choi-popup.component.ts");





















let NhanMauXetNghiemModule = class NhanMauXetNghiemModule {
};
NhanMauXetNghiemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_nhan_mau_xet_nghiem_list_nhan_mau_xet_nghiem_list_component__WEBPACK_IMPORTED_MODULE_17__["NhanMauXetNghiemListComponent"], _nhan_mau_xet_nghiem_chi_tiet_nhan_mau_xet_nghiem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_18__["NhanMauXetNghiemChiTietComponent"], _nhan_mau_xet_nghiem_tu_choi_popup_nhan_mau_xet_nghiem_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_19__["NhanMauXetNghiemTuChoiPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _nhan_mau_xet_nghiem_routing_module__WEBPACK_IMPORTED_MODULE_16__["NhanMauXetNghiemRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]
        ],
        providers: [
            _nhan_mau_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_15__["NhanMauXetNghiemService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _nhan_mau_xet_nghiem_service__WEBPACK_IMPORTED_MODULE_15__["NhanMauXetNghiemService"] },
        ],
        entryComponents: [
            _nhan_mau_xet_nghiem_tu_choi_popup_nhan_mau_xet_nghiem_tu_choi_popup_component__WEBPACK_IMPORTED_MODULE_19__["NhanMauXetNghiemTuChoiPopupComponent"]
        ]
    })
], NhanMauXetNghiemModule);



/***/ }),

/***/ "./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/xet-nghiem/nhan-mau-xet-nghiem/nhan-mau-xet-nghiem.service.ts ***!
  \********************************************************************************************/
/*! exports provided: NhanMauXetNghiemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanMauXetNghiemService", function() { return NhanMauXetNghiemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let NhanMauXetNghiemService = class NhanMauXetNghiemService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'NhanMauXetNghiem';
    }
};
NhanMauXetNghiemService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
NhanMauXetNghiemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NhanMauXetNghiemService);



/***/ })

}]);
//# sourceMappingURL=xet-nghiem-nhan-mau-xet-nghiem-nhan-mau-xet-nghiem-module-es2015.js.map