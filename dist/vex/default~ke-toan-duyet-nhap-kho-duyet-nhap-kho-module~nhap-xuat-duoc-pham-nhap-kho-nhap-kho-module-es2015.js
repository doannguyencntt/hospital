(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ke-toan-duyet-nhap-kho-duyet-nhap-kho-module~nhap-xuat-duoc-pham-nhap-kho-nhap-kho-module"],{

/***/ "./node_modules/@iconify/icons-ic/sharp-edit.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-check-box.js":
/*!*************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-check-box.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z\" fill=\"currentColor\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z\" fill=\"currentColor\"/>",
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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>Danh Sách Thuốc Đã Tạo Từ Các Nhà Cung Cấp</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\" #gridDuocPhamNCC\n            [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [groups]=\"groups\" maxHeight=\"500\" [pageable]=\"false\">\n        </app-grid>\n        <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #giaTemplate let-dataItem>\n            {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n\n        <ng-template #thanhTienTruocVatTemplate let-dataItem>\n            {{dataItem.ThanhTienTruocVat | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n        <ng-template #thanhTienSauVatTemplate let-dataItem>\n            {{dataItem.ThanhTienSauVat | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n    </div>\n\n</mat-dialog-content>\n<!-- \n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button type=\"button\" (click)=\"close()\" mat-stroked-button color=\"primary\" mat-dialog-close>Đóng</button>\n</mat-dialog-actions> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Dược Phẩm',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/duoc-pham/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<!-- <app-nhap-kho-share [isUpdate]=\"false\"></app-nhap-kho-share> -->\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Nhập Kho Dược Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-nhap-kho-share [isUpdate]=\"false\" [validationErrors]=\"validationErrors\"></app-nhap-kho-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs\n                [crumbs]=\"[ {Title:'Nhập Xuất',Path:''},{Title:'Dược Phẩm',Path:''},{Title:'Nhập Kho',Path:'/nhap-xuat/duoc-pham/nhap-kho', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid baseRoute=\"nhap-xuat/duoc-pham/nhap-kho\" [sort]=\"sortNhapKho\"\n                [gridColumns]=\"gridColumns\" [lazyLoadPage]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                [checkboxAble]=\"false\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [detailTemplate]=\"detailTemplate\"\n                [additionalSearchString]=\"additionalSearchString\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"nhap-xuat/duoc-pham/nhap-kho\" [groups]=\"groups\" [gridColumns]=\"gridChildColumns\"\n                    pageSize=\"5\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [sort]=\"sortNhapKhoChild\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [additionalSearchString]=\"dataItem.Id\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n                        [(model)]=\"nhapKho.DangChoDuyet\" class=\"ml-2\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n                        [(model)]=\"nhapKho.TuChoiDuyet\" class=\"ml-2\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\"\n                        [(model)]=\"nhapKho.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"nhapKho.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                    </div>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"nhapKho.RangeNhap\" label=\"Nhập từ ngày - đến ngày\" (keyup)=\"onKeyNgayNhap($event)\"\n                        (modelChange)=\"changeNgayNhapRange($event)\" (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        (blur)=\"blur($event)\" [(model)]=\"nhapKho.RangeDuyet\" label=\"Duyệt từ ngày - đến ngày\"\n                        (keyup)=\"onKeyNgayDuyet($event)\" (modelChange)=\"changeNgayDuyetRange($event)\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button (click)=\"themMoiNhapKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab\n                        kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>\n\n<ng-template #soChungTuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n        {{dataItem.SoChungTu}}</a>\n</ng-template>\n\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n        {{dataItem.SoPhieu}}</a>\n</ng-template>\n\n<ng-template #ngayNhapTemplate let-dataItem>\n    {{dataItem.NgayNhapDisplay}}\n</ng-template>\n\n<ng-template #ngayHoaDonTemplate let-dataItem>\n    {{dataItem.NgayHoaDonDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetTemplate let-dataItem>\n    {{dataItem.NgayDuyetDisplay}}\n</ng-template>\n\n<ng-template #giaTemplate let-dataItem>\n    {{dataItem.GiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <div *ngIf=\"dataItem.DuocKeToanDuyet == false\" style=\"color: red;\">\n        {{dataItem.TinhTrangDisplay}}\n    </div>\n    <div *ngIf=\"dataItem.DuocKeToanDuyet == null\" style=\"color: orange;\">\n        {{dataItem.TinhTrangDisplay}}\n    </div>\n    <div *ngIf=\"dataItem.DuocKeToanDuyet == true\" style=\"color: green;\">\n        {{dataItem.TinhTrangDisplay}}\n    </div>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <!-- <button *ngIf=\"dataItem.DuocKeToanDuyet == null\" (click)=\"chinhSua(dataItem.Id)\"\n                mat-menu-item>\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                <span>Sửa</span>\n            </button> -->\n            <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                <span>In phiếu</span>\n            </button>\n            <button *ngIf=\"dataItem.DuocKeToanDuyet == null\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                <span>Xóa</span>\n            </button>\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n<ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong>{{value}}</strong>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div *ngIf=\"tuChoiDuyet\" fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"color: red;\">Lí do: {{nhapKho.LyDoKhongDuyet}}</div>\n\n    <app-textbox [disabled]=\"daDuyet == true\" id=\"KyHieuHoaDon\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [required]=\"true\"\n        [(model)]=\"nhapKho.KyHieuHoaDon\" label=\"Ký hiệu HĐ\" maxlength=\"50\"\n        [validationerror]=\"'KyHieuHoaDon' | validationerror:validationErrors\">\n    </app-textbox>\n    <!-- (modelChange)=\"kyHieuHoaDonChange($event)\" -->\n    <app-textbox [disabled]=\"daDuyet == true\" id=\"SoChungTuId\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [required]=\"true\"\n        [(model)]=\"nhapKho.SoChungTu\" label=\"Số hóa đơn\" [onlynumber]=\"true\" maxlength=\"8\"\n        [validationerror]=\"'SoChungTu' | validationerror:validationErrors\">\n    </app-textbox>\n    <!-- (blurChange)=\"blurChangeSoChungTu($event)\"  -->\n    <!-- (modelChange)=\"soChungTuChange($event)\" -->\n    <app-combobox fxFlex=\"14%\" fxFlex.sm=\"14%\" id=\"NguoiNhapId\" label=\"Người nhập\" url=\"NhanVien/GetListLookupNhanVien\"\n        [(model)]=\"nhapKho.NguoiNhapId\" disabled=\"true\" bind=\"true\" [required]=\"true\"\n        [validationerror]=\"'NguoiNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-radio [disabled]=\"daDuyet == true \" fxFlex=\"21%\" fxFlex.sm=\"21%\" id=\"LoaiNguoiGiaoId\" name=\"LoaiNguoiGiao\"\n        (modelChange)=\"loaiNguoiGiaoChange()\"\n        [items]=\"[{Value:1,Text:'Trong hệ thống'},{Value:2,Text:'Ngoài hệ thống'}]\" [(model)]=\"nhapKho.LoaiNguoiGiao\"\n        label=\"Loại người giao\" [required]=\"true\"\n        [validationerror]=\"'LoaiNguoiGiao' | validationerror:validationErrors\">\n    </app-radio>\n\n    <!-- *ngIf=\"nhapKho.LoaiNguoiGiao == 2\"   (modelChange)=\"tenNguoiGiaoChange($event)\" -->\n    <app-textbox [disabled]=\"daDuyet == true\" *ngIf=\"nhapKho.LoaiNguoiGiao == 2\" id=\"NguoiGiaoNgoaiHeThongId\"\n        fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"nhapKho.TenNguoiGiao\" label=\"Tên người giao\" maxlength=\"100\">\n    </app-textbox>\n    <!-- (modelChange)=\"nguoiGiaoIdChange($event)\" -->\n    <app-combobox [disabled]=\"daDuyet == true\" *ngIf=\"nhapKho.LoaiNguoiGiao == 1\" id=\"NguoiGiaoTrongHeThongId\"\n        fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Người giao\" [(model)]=\"nhapKho.NguoiGiaoId\"\n        url=\"NhanVien/GetListLookupNhanVien\" bind=\"true\">\n    </app-combobox>\n\n    <app-datepicker [disabled]=\"daDuyet == true\" id=\"NgayHoaDon\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n        [(model)]=\"nhapKho.NgayHoaDon\" label=\"Ngày hóa đơn\"\n        [validationerror]=\"'NgayHoaDon' | validationerror:validationErrors\" [disabled]=\"isDisabled\">\n    </app-datepicker>\n\n    <app-datepicker [disabled]=\"daDuyet == true\" id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [required]=\"true\"\n        [(model)]=\"nhapKho.NgayNhap\" label=\"Ngày nhập\" [validationerror]=\"'NgayNhap' | validationerror:validationErrors\"\n        [disabled]=\"isDisabled\">\n    </app-datepicker>\n\n    <div *ngIf=\"daDuyet\" class=\"wrap-tu-choi-duyet\">\n        <app-combobox fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"NhanVienDuyetId\" label=\"Người duyệt\"\n            url=\"NhanVien/GetListLookupNhanVien\" [(model)]=\"nhapKho.NhanVienDuyetId\" disabled=\"true\" bind=\"true\">\n        </app-combobox>\n\n        <app-datepicker [disabled]=\"daDuyet == true\" id=\"NgayDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKho.NgayDuyet\" label=\"Ngày duyệt\"\n            [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\" disabled=\"true\">\n        </app-datepicker>\n    </div>\n\n    <div *ngIf=\"tuChoiDuyet\" class=\"wrap-tu-choi-duyet\">\n        <app-combobox fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"NhanVienDuyetId\" label=\"Người từ chối\"\n            url=\"NhanVien/GetListLookupNhanVien\" [(model)]=\"nhapKho.NhanVienDuyetId\" disabled=\"true\" bind=\"true\">\n        </app-combobox>\n\n        <app-datepicker disabled=\"true\" id=\"NgayDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"nhapKho.NgayDuyet\"\n            label=\"Ngày từ chối\" [validationerror]=\"'NgayDuyet' | validationerror:validationErrors\" disabled=\"true\">\n        </app-datepicker>\n    </div>\n\n    <h3 fxFlex=\"13%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n    </h3>\n\n    <div fxFlex=\"87%\" class=\"po-h-radio\">\n        <app-radio id=\"chon-loai-nhap\" [disabled]=\"blockLoaiNhap \" name=\"select\" class=\"no-format-css pl-4 temp\"\n            (modelChange)=\"onChangeLoaiNhap($event)\" [(model)]=\"loaiNhap\"\n            [items]=\"[{Value:1,Text:'Nhập từ HĐ thầu'},{Value:2,Text:'Nhập từ NCC'}]\">\n        </app-radio>\n    </div>\n\n    <ng-container *ngIf=\"loaiNhap==1\">\n        <app-combobox #cmbHopDongThau (openCombobox)=\"openComboboxHopDong($event)\" (keyup)=\"onKeyHopDong($event)\"\n            [disabled]=\"daDuyet == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\" id=\"HopDongThauDuocPhamId\"\n            [(model)]=\"nhapKhoChiTiet.HopDongThauDuocPhamId\" (selectionChange)=\"onChangeHopDongThau($event)\"\n            [modelText]=\"nhapKhoChiTiet.HopDongThauDisplay\" class=\"item-no-padding\" [template]=\"hopDongThauTemplate\"\n            bind=\"true\" [templateHeader]=\"hopDongThauTemplateHeader\" [required]=\"true\"\n            url=\"NhapKhoDuocPham/GetListNhaThauNhapKho\"\n            [validationerror]=\"'HopDongThauDuocPhamId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n            <ng-template #hopDongThauTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"10%\">SHĐ</th>\n                        <th width=\"30%\">NCC</th>\n                        <th width=\"60%\">Địa chỉ</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #hopDongThauTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"10%\">{{dataItem.SoHopDong}}</td>\n                        <td width=\"30%\">{{dataItem.Ten}}</td>\n                        <td width=\"60%\">{{dataItem.DiaChi}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-combobox #duocPhamCombobox (openCombobox)=\"openComboboxDuocPham($event)\" bind=\"true\"\n            (keyup)=\"onKeyDuocPham($event)\" [disabled]=\"daDuyet == true || isUpdate == true\" fxFlex=\"50%\"\n            fxFlex.sm=\"50%\" label=\"Dược Phẩm\" id=\"DuocPhamId\"\n            [queryInfo]=\"{ParameterDependencies:'{HopDongThauDuocPhamId:' + nhapKhoChiTiet.HopDongThauDuocPhamId +', KhoId: ' + nhapKhoChiTiet.KhoNhapSauKhiDuyetId +', LaDuocPhamBHYT: ' + nhapKhoChiTiet.LaDuocPhamBHYT +'}', Take: 50}\"\n            [(model)]=\"nhapKhoChiTiet.DuocPhamBenhVienId\" [reloadForGrid]=\"true\"\n            [modelText]=\"nhapKhoChiTiet.TenDuocPhamBenhVien\" class=\"item-no-padding\" [template]=\"duocPhamTemplate\"\n            url=\"NhapKhoDuocPham/GetListDuocPhamNhapKho\" [templateHeader]=\"duocPhamTemplateHeader\" [required]=\"true\"\n            (selectionChange)=\"selectionChangeDuocPham($event)\"\n            [validationerror]=\"'DuocPhamBenhVienId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 900,popupClass:'item-no-padding'}\">\n            <ng-template #duocPhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"10%\">Mã</th>\n                        <th width=\"20%\">Tên</th>\n                        <th width=\"10%\">Hàm lượng</th>\n                        <th width=\"10%\">Hoạt Chất</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"10%\">ĐƯờng dùng</th>\n                        <th width=\"10%\">Nhà SX</th>\n                        <th width=\"10%\">SL Tồn</th>\n                        <th width=\"10%\">SL C.Nhập</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #duocPhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"10%\">{{dataItem.Ma}}</td>\n                        <td width=\"20%\">{{dataItem.Ten}}</td>\n                        <th width=\"10%\">{{dataItem.HamLuong}}</th>\n                        <td width=\"10%\">{{dataItem.HoatChat}}</td>\n                        <th width=\"10%\">{{dataItem.DVT}}</th>\n                        <th width=\"10%\">{{dataItem.DuongDung}}</th>\n                        <td width=\"10%\">{{dataItem.NhaSanXuat}}</td>\n                        <td width=\"10%\">{{dataItem.SLTon | number:'1.0-2':'vi-VN'}}</td>\n                        <td width=\"10%\">{{dataItem.SoLuongChuaNhap | number:'1.0-2':'vi-VN'}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-textbox [disabled]=\"true\" id=\"DonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.DVT\"\n            label=\"ĐVT\">\n        </app-textbox>\n\n        <app-radio (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"LaDuocPhamBHYT\"\n            name=\"Loai\" [required]=\"true\" (modelChange)=\"loaiChange($event)\"\n            [items]=\"[{Value:false,Text:'Không BHYT'},{Value:true,Text:'BHYT'}]\"\n            [(model)]=\"nhapKhoChiTiet.LaDuocPhamBHYT\" label=\"Loại\"\n            [validationerror]=\"'LaDuocPhamBHYT' | validationerror:validationErrors\">\n        </app-radio>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapId\" fxFlex=\"10%\"\n            fxFlex.sm=\"15%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhap\" label=\"Số lượng\"\n            [required]=\"true\" [validationerror]=\"'SoLuongNhap' | validationerror:validationErrors\"\n            (modelChange)=\"modelChangeSoLuongNhap($event)\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"DonGiaNhapId\" fxFlex=\"10%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" min=\"0\" max=\"9999999999\" [(model)]=\"nhapKhoChiTiet.DonGiaNhap\" label=\"Đơn giá\"\n            [required]=\"true\" [disabled]=\"daDuyet == true\" (modelChange)=\"modelChangeDonGiaNhap($event)\"\n            [validationerror]=\"'DonGiaNhap' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThanhTienTruocVat\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n            decimals=\"2\" [format]=\"format\" [(model)]=\"nhapKhoChiTiet.ThanhTienTruocVat\" [required]=\"true\"\n            label=\"Thanh toán\" (modelChange)=\"modelChangeThanhTienTruocVat($event)\"\n            [validationerror]=\"'ThanhTienTruocVat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLoId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [required]=\"true\" [(model)]=\"nhapKhoChiTiet.Solo\" label=\"Số lô\" maxlength=\"50\" [upperCase]=\"true\"\n            [validationerror]=\"'Solo' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-datepicker (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"HanSuDungId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.HanSuDung\" label=\"HSD\"\n            [validationerror]=\"'HanSuDung' | validationerror:validationErrors\">\n        </app-datepicker>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"TiLeBHYTThanhToan\" fxFlex=\"10%\" fxFlex.sm=\"20%\" min=1 max=\"100\"\n            label=\"Tỷ lệ BHTT\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.TiLeBHYTThanhToan\"\n            [disabled]=\"daDuyet == true\" *ngIf=\"nhapKhoChiTiet.LaDuocPhamBHYT\"\n            [validationerror]=\"'TiLeBHYTThanhToan' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-combobox [disabled]=\"daDuyet == true\" id=\"KhoNhapSauKhiDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            [required]=\"true\" label=\"Xuất về kho sau khi duyệt\" [(model)]=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId\"\n            url=\"NhapKhoDuocPham/GetKhoTheoLoaiDuocPham\" bind=\"true\"\n            [validationerror]=\"'KhoNhapSauKhiDuyetId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-combobox *ngIf=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId>0\" id=\"NguoiNhapSauKhiDuyetId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.NguoiNhapSauKhiDuyetId\" label=\"Người nhận sau khi duyệt\"\n            url=\"NhanVien/GetListLookupNhanVien\" bind=\"true\" [required]=\"true\"\n            [validationerror]=\"'NguoiNhapSauKhiDuyetId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-textboxnumeric [disabled]=\"true\" (keyup)=\"onKey($event)\" id=\"gia-ap-thau\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            decimals=\"2\" [format]=\"format\" [(model)]=\"nhapKhoChiTiet.GiaApThau\" label=\"Giá áp thầu\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaVachId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaVach\" label=\"Mã vạch\" maxlength=\"100\" onlynumber=\"true\"\n            [validationerror]=\"'MaVach' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaRef\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaRef\" label=\"REF\" maxlength=\"200\">\n        </app-textbox>\n\n        <app-textboxnumeric [disabled]=\"true\" id=\"HeSoDinhMucDonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"15%\" min=\"1\"\n            max=\"999999\" [(model)]=\"nhapKhoChiTiet.HeSoDinhMucDonViTinh\" label=\"Hệ số định mức\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapSoCap\" fxFlex=\"10%\"\n            fxFlex.sm=\"15%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhapSoCap\" label=\"Số lượng sơ cấp\"\n            (modelChange)=\"modelChangeSoLuongNhapSoCap($event)\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"GhiChu\" fxFlex=\"auto\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.GhiChu\" label=\"Ghi Chú\" maxlength=\"1000\">\n        </app-textbox>\n    </ng-container>\n\n    <ng-container *ngIf=\"loaiNhap==2\">\n        <app-combobox (openCombobox)=\"openComboboxHopDong($event)\" (keyup)=\"onKeyHopDong($event)\"\n            [disabled]=\"daDuyet == true || disableNCC\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nhà cung cấp\"\n            id=\"nha-cung-cap\" [(model)]=\"nhapKhoChiTiet.NhaThauId\" [modelText]=\"nhapKhoChiTiet.NhaThauDisplay\"\n            class=\"item-no-padding\" [template]=\"nhaThauTemplate\" bind=\"true\" [templateHeader]=\"nhaThauTemplateHeader\"\n            [required]=\"true\" (modelChange)=\"nhaThauChange()\" url=\"HopDongThauDuocPham/GetListNhaThau\"\n            [validationerror]=\"'NhaThauId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\">\n            <ng-template #nhaThauTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"30%\">NCC</th>\n                        <th width=\"70%\">Địa chỉ</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #nhaThauTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"30%\">{{dataItem.Ten}}</td>\n                        <td width=\"70%\">{{dataItem.DiaChi}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n\n\n        <app-combobox bind=\"true\" #duocPhamCombobox (openCombobox)=\"openComboboxDuocPham($event)\"\n            (keyup)=\"onKeyDuocPham($event)\" [disabled]=\"daDuyet == true || isUpdate == true\" fxFlex=\"60%\"\n            fxFlex.sm=\"50%\" label=\"Dược Phẩm\" [reloadForGrid]=\"true\" id=\"DuocPhamId\"\n            [(model)]=\"nhapKhoChiTiet.DuocPhamBenhVienId\" [modelText]=\"nhapKhoChiTiet.TenDuocPhamBenhVien\"\n            class=\"item-no-padding\" [template]=\"duocPhamTemplate\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoNhapSauKhiDuyetId:' + nhapKhoChiTiet.KhoNhapSauKhiDuyetId +'}', Take: 50}\"\n            url=\"NhapKhoDuocPham/GetDropDownListDuocPhamFromNhaThau\" [templateHeader]=\"duocPhamTemplateHeader\"\n            [required]=\"true\" (selectionChange)=\"selectionChangeDuocPham($event)\"\n            [validationerror]=\"'DuocPhamBenhVienId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 900,popupClass:'item-no-padding'}\">\n            <ng-template #duocPhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"10%\">Mã</th>\n                        <th width=\"20%\">Tên</th>\n                        <th width=\"10%\">Hàm lượng</th>\n                        <th width=\"10%\">Hoạt Chất</th>\n                        <th width=\"10%\">ĐVT</th>\n                        <th width=\"10%\">Đường dùng</th>\n                        <th width=\"20%\">Nhà SX</th>\n                        <th width=\"10%\">SL tồn</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #duocPhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"10%\">{{dataItem.Ma}}</td>\n                        <td width=\"20%\">{{dataItem.Ten}}</td>\n                        <th width=\"10%\">{{dataItem.HamLuong}}</th>\n                        <td width=\"10%\">{{dataItem.HoatChat}}</td>\n                        <th width=\"10%\">{{dataItem.DVT}}</th>\n                        <th width=\"10%\">{{dataItem.DuongDung}}</th>\n                        <td width=\"20%\">{{dataItem.NhaSanXuat}}</td>\n                        <th width=\"10%\">{{dataItem.SLTon | number:'1.0-2':'vi-VN'}}</th>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n        <app-textbox [disabled]=\"true\" id=\"DonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.DVT\"\n            label=\"ĐVT\">\n        </app-textbox>\n\n        <app-radio (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" fxFlex=\"10%\" fxFlex.sm=\"20%\" id=\"LaDuocPhamBHYT\"\n            name=\"Loai\" [required]=\"true\" (modelChange)=\"loaiChange($event)\" [items]=\"[{Value:false,Text:'Không BHYT'}]\"\n            [(model)]=\"nhapKhoChiTiet.LaDuocPhamBHYT\" label=\"Loại\"\n            [validationerror]=\"'LaDuocPhamBHYT' | validationerror:validationErrors\">\n        </app-radio>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapId\" fxFlex=\"10%\"\n            fxFlex.sm=\"15%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhap\" label=\"Số lượng\"\n            [required]=\"true\" [validationerror]=\"'SoLuongNhap' | validationerror:validationErrors\"\n            (modelChange)=\"modelChangeSoLuongNhap($event)\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"DonGiaNhapId\" fxFlex=\"10%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" min=\"0\" max=\"9999999999\" [(model)]=\"nhapKhoChiTiet.DonGiaNhap\" label=\"Đơn giá\"\n            [required]=\"true\" [disabled]=\"daDuyet == true\" (modelChange)=\"modelChangeDonGiaNhap($event)\"\n            [validationerror]=\"'DonGiaNhap' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" id=\"VAT\" fxFlex=\"10%\" fxFlex.sm=\"20%\" [format]=\"format\" decimals=\"2\"\n            min=\"0\" max=\"999\" label=\"VAT\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.VAT\" [disabled]=\"daDuyet == true\"\n            (modelChange)=\"modelChangeVAT($event)\" *ngIf=\"!nhapKhoChiTiet.LaDuocPhamBHYT\"\n            [validationerror]=\"'VAT' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThanhTienSauVat\" fxFlex=\"30%\" fxFlex.sm=\"30%\" decimals=\"2\"\n            [format]=\"format\" *ngIf=\"!nhapKhoChiTiet.LaDuocPhamBHYT\" [(model)]=\"nhapKhoChiTiet.ThanhTienSauVat\"\n            (modelChange)=\"modelThanhTienSauVat($event)\" label=\"Thanh toán\" [required]=\"true\"\n            [validationerror]=\"'ThanhTienSauVat' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLoId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [required]=\"true\" [(model)]=\"nhapKhoChiTiet.Solo\" label=\"Số lô\" maxlength=\"50\" [upperCase]=\"true\"\n            [validationerror]=\"'Solo' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-datepicker (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"HanSuDungId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [required]=\"true\" [(model)]=\"nhapKhoChiTiet.HanSuDung\" label=\"HSD\"\n            [validationerror]=\"'HanSuDung' | validationerror:validationErrors\">\n        </app-datepicker>\n\n        <app-combobox [disabled]=\"daDuyet == true\" id=\"KhoNhapSauKhiDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            [required]=\"true\" label=\"Xuất về kho sau khi duyệt\" [(model)]=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId\"\n            url=\"NhapKhoDuocPham/GetKhoTheoLoaiDuocPham\" bind=\"true\"\n            [validationerror]=\"'KhoNhapSauKhiDuyetId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-combobox *ngIf=\"nhapKhoChiTiet.KhoNhapSauKhiDuyetId>0\" id=\"NguoiNhapSauKhiDuyetId\" fxFlex=\"20%\"\n            fxFlex.sm=\"20%\" [(model)]=\"nhapKhoChiTiet.NguoiNhapSauKhiDuyetId\" label=\"Người nhận sau khi duyệt\"\n            url=\"NhanVien/GetListLookupNhanVien\" bind=\"true\" [required]=\"true\"\n            [validationerror]=\"'NguoiNhapSauKhiDuyetId' | validationerror:validationErrors\">\n        </app-combobox>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThanhTienTruocVat\" fxFlex=\"20%\" fxFlex.sm=\"40%\"\n            decimals=\"2\" [format]=\"format\" [(model)]=\"nhapKhoChiTiet.ThanhTienTruocVat\" label=\"Thành tiền (chưa VAT)\"\n            (modelChange)=\"modelChangeThanhTienTruocVat($event)\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric [disabled]=\"daDuyet == true\" id=\"ThueVatLamTron\" fxFlex=\"10%\" fxFlex.sm=\"20%\" decimals=\"2\"\n            [format]=\"format\" [(model)]=\"nhapKhoChiTiet.ThueVatLamTron\" label=\"Thuế VAT làm tròn\">\n        </app-textboxnumeric>\n        <!-- (modelChange)=\"modelChangeThueVatLamTron($event)\" -->\n\n\n        <app-textboxnumeric [disabled]=\"true\" id=\"HeSoDinhMucDonViTinh\" fxFlex=\"10%\" fxFlex.sm=\"15%\" min=\"1\"\n            max=\"999999\" [(model)]=\"nhapKhoChiTiet.HeSoDinhMucDonViTinh\" label=\"Hệ số định mức\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"SoLuongNhapSoCap\" fxFlex=\"10%\"\n            fxFlex.sm=\"15%\" min=\"1\" max=\"999999\" [(model)]=\"nhapKhoChiTiet.SoLuongNhapSoCap\" label=\"Số lượng sơ cấp\"\n            (modelChange)=\"modelChangeSoLuongNhapSoCap($event)\">\n        </app-textboxnumeric>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaVachId\" fxFlex=\"10%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaVach\" label=\"Mã vạch\" maxlength=\"100\" onlynumber=\"true\"\n            [validationerror]=\"'MaVach' | validationerror:validationErrors\">\n        </app-textbox>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"MaRef\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.MaRef\" label=\"REF\" maxlength=\"200\">\n        </app-textbox>\n\n        <app-textbox (keyup)=\"onKey($event)\" [disabled]=\"daDuyet == true\" id=\"GhiChu\" fxFlex=\"auto\" fxFlex.sm=\"20%\"\n            [(model)]=\"nhapKhoChiTiet.GhiChu\" label=\"Ghi Chú\" maxlength=\"1000\">\n        </app-textbox>\n\n    </ng-container>\n\n    <div *ngIf=\"daDuyet != true\" fxFlex=\"100%\" fxFlex.sm=\"100%\">\n        <button *ngIf=\"isUpdate == false\" (click)=\"AddRow()\" style=\"float: right\" type=\"button\" color=\"primary\"\n            mat-raised-button>Thêm</button>\n        <button *ngIf=\"isUpdate == true\" (click)=\"UpdateRow()\" style=\"float: right\" type=\"button\" color=\"primary\"\n            mat-raised-button> Cập Nhật</button>\n        <button (click)=\"Huy()\" style=\"float: right\" type=\"button\" mat-button>Hủy</button>\n    </div>\n\n    <app-grid [groups]=\"groups\" #grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridDataSource]=\"gridDataSource\"\n        [gridColumns]=\"gridColumns\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [useActionDefault]=\"actionTemplate\" maxHeight=\"500\" [useAddDeault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"false\" [pageable]=\"false\" [autoHeight]=\"true\" (extOnDataBound)=\"onDataBound($event)\">\n    </app-grid>\n\n    <ng-template #giaTemplate let-dataItem>\n        {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #thanhTienTruocVatTemplate let-dataItem>\n        {{dataItem.ThanhTienTruocVat | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienSauVatTemplate let-dataItem>\n        {{dataItem.ThanhTienSauVat | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #nhomDisplayGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #tongThanhTienTruocVatFooterTemplate let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalTongThanhTien('ThanhTienTruocVat') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #tongThanhTienVatFooterTemplate let-dataItem>\n        <p style=\"color: red; font-weight: bold;\">\n            <span>{{totalTongThanhTien('VAT') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #tongThanhTienSauVatFooterTemplate let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalTongThanhTien('ThanhTienSauVat') | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n    <ng-template #actionTemplate let-dataItem>\n\n        <button [disabled]=\"daDuyet == true\" (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n            [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"UpdateRowGripView(dataItem)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"DeleteRowGripView(dataItem.IdView)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Dược Phẩm',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/duoc-pham/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" \n    [isicMoreVert]=\"false\">\n</app-header-form>\n\n<!-- <app-nhap-kho-share [isUpdate]=\"true\"></app-nhap-kho-share> -->\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 style=\"width: 50%;\" class=\"title m-0\">Nhập Kho Dược Phẩm</h2>\n                <span class=\"title-alert\">Từ chối duyệt</span>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhap-kho-share [tuChoiDuyet]=\"true\"></app-nhap-kho-share>\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"luu()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                    <button type=\"button\" (click)=\"luuVaDuyetLai()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu & Gửi duyệt lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Dược Phẩm',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/duoc-pham/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" \n    [isicMoreVert]=\"false\">\n</app-header-form>\n\n<!-- <app-nhap-kho-share [isUpdate]=\"true\"></app-nhap-kho-share> -->\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 style=\"width: 50%;\" class=\"title m-0\">Nhập Kho Dược Phẩm</h2>\n                <span class=\"title-alert-green\">Đã duyệt</span>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhap-kho-share [daDuyet]=\"true\"></app-nhap-kho-share>\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n            {Title:'Nhập Xuất',Path:''},\n            {Title:'Dược Phẩm',Path:''},\n            {Title:'Nhập Kho',Path:'/nhap-xuat/duoc-pham/nhap-kho', queryParams: {holdQuery : true}, Active: true}\n        ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<!-- <app-nhap-kho-share [isUpdate]=\"true\"></app-nhap-kho-share> -->\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Nhập Kho Dược Phẩm</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-nhap-kho-share [chuaDuyet]=\"true\" [validationErrors]=\"validationErrors\"></app-nhap-kho-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i\n                            class=\"ft-arrow-left\"></i> Hủy</button>\n                            \n                    <button type=\"button\" (click)=\"update()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>PHIẾU NHẬP KHO</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/ke-toan/duyet-nhap-kho/duyet-nhap-kho.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main/ke-toan/duyet-nhap-kho/duyet-nhap-kho.model.ts ***!
  \*****************************************************************************/
/*! exports provided: DuyetNhapKho, NhapKhoDuocPham, NhapKhoDuocPhamChiTiet, NhapKhoDuocPhamSearch, rangeDate, ThongTinDuyetKhoDuocPham, ThongTinLyDoHuyNhapKhoDuocPham */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetNhapKho", function() { return DuyetNhapKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPham", function() { return NhapKhoDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPhamChiTiet", function() { return NhapKhoDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPhamSearch", function() { return NhapKhoDuocPhamSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDuyetKhoDuocPham", function() { return ThongTinDuyetKhoDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinLyDoHuyNhapKhoDuocPham", function() { return ThongTinLyDoHuyNhapKhoDuocPham; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class DuyetNhapKho {
}
class NhapKhoDuocPham {
    constructor(Id = 0, KhoDuocPhamId = null, TenKhoDuocPham = null, SoChungTu = null, LoaiNhapKho = 1, TenLoaiNhapKho = null, NguoiGiaoId = null, TenNguoiGiao = null, TenNguoiGiaoNgoai = null, NguoiNhapId = null, TenNguoiNhap = null, LoaiNguoiGiao = 1, NhapKhoDuocPhamChiTiets = [], NgayNhap = null, DaXuatKho = null) {
        this.Id = Id;
        this.KhoDuocPhamId = KhoDuocPhamId;
        this.TenKhoDuocPham = TenKhoDuocPham;
        this.SoChungTu = SoChungTu;
        this.LoaiNhapKho = LoaiNhapKho;
        this.TenLoaiNhapKho = TenLoaiNhapKho;
        this.NguoiGiaoId = NguoiGiaoId;
        this.TenNguoiGiao = TenNguoiGiao;
        this.TenNguoiGiaoNgoai = TenNguoiGiaoNgoai;
        this.NguoiNhapId = NguoiNhapId;
        this.TenNguoiNhap = TenNguoiNhap;
        this.LoaiNguoiGiao = LoaiNguoiGiao;
        this.NhapKhoDuocPhamChiTiets = NhapKhoDuocPhamChiTiets;
        this.NgayNhap = NgayNhap;
        this.DaXuatKho = DaXuatKho;
    }
}
class NhapKhoDuocPhamChiTiet {
    constructor(Id = 0, IdView = 0, NhapKhoDuocPhamId = 0, DuocPhamBenhVienId = null, TenDuocPham = null, HopDongThauDuocPhamId = 0, TenHopDongThau = null, KhoDuocPhamViTriId = null, ViTri = null, DatChatLuong = true, TenDatChatLuong = "Đạt", HanSuDung = null, TextHanSuDung = null, Solo = null, SoLuongNhap = null, SoLuongNhapTrongGrid = 0, SoLuongHienTaiDuocPhamTheoHopDongThauDaLuu = 0, DonGiaNhap = null, DonGiaBan = null, TextDonGiaNhap = null, TextDonGiaBan = null, TextChietKhau = null, TextSoLuongNhap = null, TextVAT = null, VAT = null, ChietKhau = null, MaVach = null, NgayNhap = null) {
        this.Id = Id;
        this.IdView = IdView;
        this.NhapKhoDuocPhamId = NhapKhoDuocPhamId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.TenDuocPham = TenDuocPham;
        this.HopDongThauDuocPhamId = HopDongThauDuocPhamId;
        this.TenHopDongThau = TenHopDongThau;
        this.KhoDuocPhamViTriId = KhoDuocPhamViTriId;
        this.ViTri = ViTri;
        this.DatChatLuong = DatChatLuong;
        this.TenDatChatLuong = TenDatChatLuong;
        this.HanSuDung = HanSuDung;
        this.TextHanSuDung = TextHanSuDung;
        this.Solo = Solo;
        this.SoLuongNhap = SoLuongNhap;
        this.SoLuongNhapTrongGrid = SoLuongNhapTrongGrid;
        this.SoLuongHienTaiDuocPhamTheoHopDongThauDaLuu = SoLuongHienTaiDuocPhamTheoHopDongThauDaLuu;
        this.DonGiaNhap = DonGiaNhap;
        this.DonGiaBan = DonGiaBan;
        this.TextDonGiaNhap = TextDonGiaNhap;
        this.TextDonGiaBan = TextDonGiaBan;
        this.TextChietKhau = TextChietKhau;
        this.TextSoLuongNhap = TextSoLuongNhap;
        this.TextVAT = TextVAT;
        this.VAT = VAT;
        this.ChietKhau = ChietKhau;
        this.MaVach = MaVach;
        this.NgayNhap = NgayNhap;
    }
}
class NhapKhoDuocPhamSearch {
    constructor(DangChoDuyet = true, DaDuyet = false, TuChoiDuyet = false, SearchString = null, RangeNhap = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](), RangeDuyet = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"]()) {
        this.DangChoDuyet = DangChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.SearchString = SearchString;
        this.RangeNhap = RangeNhap;
        this.RangeDuyet = RangeDuyet;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class ThongTinDuyetKhoDuocPham {
    constructor(NguoiNhapId = 0, SoChungTu = null, TenNguoiNhap = null, NgayNhap = new Date(), TinhTrangDuyet = null, ClassTrangThai = null, NguoiDuyetId = 0, NguoiDuyet = null, NgayDuyet = new Date()) {
        this.NguoiNhapId = NguoiNhapId;
        this.SoChungTu = SoChungTu;
        this.TenNguoiNhap = TenNguoiNhap;
        this.NgayNhap = NgayNhap;
        this.TinhTrangDuyet = TinhTrangDuyet;
        this.ClassTrangThai = ClassTrangThai;
        this.NguoiDuyetId = NguoiDuyetId;
        this.NguoiDuyet = NguoiDuyet;
        this.NgayDuyet = NgayDuyet;
    }
}
class ThongTinLyDoHuyNhapKhoDuocPham {
    constructor(YeuCauNhapKhoDuocPhamId = 0, LyDoHuy = null) {
        this.YeuCauNhapKhoDuocPhamId = YeuCauNhapKhoDuocPhamId;
        this.LyDoHuy = LyDoHuy;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL25oYXAta2hvL2RzLWR1b2MtcGhhbS10cnVuZy1uY2MtcG9wdXAvZHMtZHVvYy1waGFtLXRydW5nLW5jYy1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: DsDuocPhamTrungNccPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsDuocPhamTrungNccPopupComponent", function() { return DsDuocPhamTrungNccPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");





let DsDuocPhamTrungNccPopupComponent = class DsDuocPhamTrungNccPopupComponent {
    constructor(dialog, data) {
        this.dialog = dialog;
        this.data = data;
        this.groups = [{ field: 'NhomDisplay' }];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoDuocPham;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
    }
    ngOnInit() {
        this.gridColumns = [
            { Field: "NhomDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "NhaThauDisplay", Title: "NCC", Width: 120, ShowTooltip: true, Sortable: false },
            { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
            { Field: "DuocPhamDisplay", Title: "Dược Phẩm", Width: 100, Sortable: false },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 30, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 30, Sortable: false },
            { Field: "LoaiDisplay", Title: "Loại", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "Solo", Title: "Số Lô", Width: 50, Sortable: false },
            { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 60, Sortable: false, ShowTooltip: true },
            { Field: "SoLuongNhapDisplay", Title: "SL", Width: 30, Sortable: false },
            { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 80, Sortable: false, Template: this.giaTemplate },
            { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 120, Sortable: false, Template: this.thanhTienTruocVatTemplate },
            { Field: "VAT", Title: "VAT(%)", Width: 30, Sortable: false },
            { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 120, Sortable: false, Template: this.thanhTienSauVatTemplate, },
            { Field: "MaRef", Title: "Mã REF", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "MaVach", Title: "Mã Vạch", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
        ];
        // setTimeout(function () {
        //   this.setDataSourceGrid();
        // }, 100);
        this.setDataSourceGrid();
    }
    setDataSourceGrid() {
        this.gridDataSource = {
            data: this.data,
            total: this.data.length
        };
        if (this.gridDuocPhamNCC != undefined) {
            this.gridDuocPhamNCC.gridDataSource = this.gridDataSource;
            // this.gridDuocPhamNCC.setDataSource();
        }
    }
};
DsDuocPhamTrungNccPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], DsDuocPhamTrungNccPopupComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DsDuocPhamTrungNccPopupComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamNCC', { static: true })
], DsDuocPhamTrungNccPopupComponent.prototype, "gridDuocPhamNCC", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
], DsDuocPhamTrungNccPopupComponent.prototype, "giaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocVatTemplate', { static: true })
], DsDuocPhamTrungNccPopupComponent.prototype, "thanhTienTruocVatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauVatTemplate', { static: true })
], DsDuocPhamTrungNccPopupComponent.prototype, "thanhTienSauVatTemplate", void 0);
DsDuocPhamTrungNccPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ds-duoc-pham-trung-ncc-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-duoc-pham-trung-ncc-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-duoc-pham-trung-ncc-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DsDuocPhamTrungNccPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tY3JlYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXG5oYXAta2hvXFxuaGFwLWtoby1jcmVhdGVcXG5oYXAta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tY3JlYXRlL25oYXAta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL25oYXAta2hvL25oYXAta2hvLWNyZWF0ZS9uaGFwLWtoby1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: NhapKhoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoCreateComponent", function() { return NhapKhoCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _nhap_kho_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nhap-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.ts");




















let NhapKhoCreateComponent = class NhapKhoCreateComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.nhapKho = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_6__["NhapKhoDuocPham"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].NhapKhoDuocPham;
    }
    ngOnInit() {
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    cancel() {
        this.location.back();
    }
    create() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn thêm dữ liệu này không?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.nhapKho = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Add)) {
                    self.loadingPage();
                    self.apiService.post("NhapKhoDuocPham/ThemYeuCauNhapKhoDuocPham", self.nhapKho).subscribe((result) => {
                        self.closePopupLoadingData();
                        if (result != undefined && result != null) {
                            if (result.length > 0) {
                                self.dialog.open(_ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_19__["DsDuocPhamTrungNccPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: result,
                                }).afterClosed().subscribe(() => {
                                });
                            }
                            else {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                self.closePopupLoadingData();
                                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: "500px",
                                    data: {
                                        Title: "Xác nhận in",
                                        Message: "Bạn có muốn in phiếu nhập kho này không ?",
                                    },
                                }).afterClosed().subscribe((res) => {
                                    if (res == "Yes") {
                                        self.loadingPage();
                                        self.apiService.post("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + result).subscribe(resData => {
                                            if (resData != undefined && resData != null) {
                                                self.closePopupLoadingData();
                                                self.dialog.open(_phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_17__["PhieuNhapKhoDuocPhamPopupComponent"], {
                                                    disableClose: false,
                                                    width: '1200px',
                                                    data: resData,
                                                }).afterClosed().subscribe(() => {
                                                    self.closePopupLoadingData();
                                                    this.router.navigate(['/nhap-xuat/duoc-pham/nhap-kho']);
                                                });
                                            }
                                        }, (err) => {
                                            self.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                            self.closePopupLoadingData();
                                        });
                                    }
                                    else {
                                        this.router.navigate(['/nhap-xuat/duoc-pham/nhap-kho']);
                                    }
                                });
                            }
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    onCreated() {
        this.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
    }
};
NhapKhoCreateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_3__["NhapKhoShareComponent"], { static: true })
], NhapKhoCreateComponent.prototype, "shared", void 0);
NhapKhoCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-create.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.scss")).default]
    })
], NhapKhoCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".selectAddViTri {\n  border: 0px solid #ccc;\n  width: 120px;\n  border-radius: 0px;\n  overflow: hidden;\n  background: #fafafa;\n}\n\n.selectAddViTri:before {\n  font-family: \"FontAwesome\";\n  position: absolute;\n  top: 3px;\n  right: 12px;\n  font-size: 18px;\n}\n\n.selectAddViTri select {\n  padding: 5px 8px;\n  width: 130%;\n  border: none;\n  box-shadow: none;\n  background: transparent;\n  background-image: none;\n  -webkit-appearance: none;\n}\n\n.selectAddViTri select:focus {\n  outline: none;\n}\n\nselect option {\n  color: black;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFxuaGFwLWtob1xcbmhhcC1raG8tbGlzdFxcbmhhcC1raG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tbGlzdC9uaGFwLWtoby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL25oYXAta2hvL25oYXAta2hvLWxpc3QvbmhhcC1raG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RBZGRWaVRyaSB7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4uc2VsZWN0QWRkVmlUcmk6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgcmlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnNlbGVjdEFkZFZpVHJpIHNlbGVjdCB7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHdpZHRoOiAxMzAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zZWxlY3RBZGRWaVRyaSBzZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5zZWxlY3Qgb3B0aW9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59IiwiLnNlbGVjdEFkZFZpVHJpIHtcbiAgYm9yZGVyOiAwcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbi5zZWxlY3RBZGRWaVRyaTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICByaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2VsZWN0QWRkVmlUcmkgc2VsZWN0IHtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgd2lkdGg6IDEzMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLnNlbGVjdEFkZFZpVHJpIHNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlbGVjdCBvcHRpb24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NhapKhoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoListComponent", function() { return NhapKhoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _nhap_kho_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../nhap-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_30__);































let NhapKhoListComponent = class NhapKhoListComponent {
    constructor(authService, dialog, elem, notificationService, location, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.elem = elem;
        this.notificationService = notificationService;
        this.location = location;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.sort = [{
                field: 'Id',
                dir: 'desc'
            }];
        this.baseRoute = "/nhap-xuat/duoc-pham/nhap-kho";
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_28___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_30___default.a;
        this.holdQuery = null;
        this.query = null;
        this.additionalSearchString = null;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridChild = "NhapKhoDuocPham/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild = "NhapKhoDuocPham/GetTotalPageForGridChildAsync";
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControl"];
        this.ListVitri = [];
        //checkListFiter:boolean = true;
        this.sortNhapKho = [{
                field: "NgayNhap",
                dir: "desc"
            },
            {
                field: "Id",
                dir: "asc"
            }];
        this.sortNhapKhoChild = [
            {
                field: "Id",
                dir: "asc"
            }
        ];
        this.groups = [{ field: 'Nhom' }];
        this.range = { startDate: null, endDate: null };
    }
    ngOnInit() {
        //this.checkListFiter = true;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].NhapKhoDuocPham;
        this.nhapKho = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_13__["NhapKhoDuocPhamSearch"]();
        //
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        //console.log("ngOnInit = ", this.holdQuery, LocalStorageHelper.getItem('additionalSearchStringNhapKho'));
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringNhapKho') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringNhapKho');
            // this.xacNhanBhyt = new XacNhanBhyt();
            // this.xacNhanBhyt = JSON.parse(this.additionalSearchString);
            this.backWithSearch();
            //this.nhapKho = JSON.parse(this.additionalSearchString);
            //console.log("additionalSearchString = ", this.additionalSearchString);
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKho', null);
            this.additionalSearchString = JSON.stringify(this.nhapKho);
        }
        //
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số Chứng Từ", Width: 200, Sortable: true, Template: this.soPhieuTemplate },
            { Field: "SoChungTu", Title: "Số Hóa Đơn", MinWidth: 120, Sortable: true, Template: this.soChungTuTemplate },
            // { Field: "LoaiNguoiGiaoDisplay", Title: "Loại Người Giao", Width: 120, Sortable: false },
            // { Field: "TenNguoiGiao", Title: "Tên Người Giao", Width: 150, Sortable: true },
            { Field: "NgayHoaDon", Title: "Ngày hóa đơn", Width: 150, Sortable: true, Template: this.ngayHoaDonTemplate },
            { Field: "TenKho", Title: "Kho Nhập", Width: 150, Sortable: true, ShowTooltip: true },
            { Field: "TenNguoiNhap", Title: "Người Nhập", Width: 150, Sortable: true, ShowTooltip: true },
            { Field: "NgayNhapDisplay", Title: "Ngày Nhập", Width: 150, Sortable: true, Template: this.ngayNhapTemplate },
            { Field: "TinhTrangDisplay", Title: "Tình Trạng", Width: 120, Sortable: false, Template: this.tinhTrangTemplate },
            { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
            { Field: "NgayDuyetDisplay", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate }
        ];
        this.gridChildColumns = [
            { Field: "Nhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "NhaThauDisplay", Title: "NCC", Width: 264, ShowTooltip: true, Sortable: false },
            { Field: "TenHDThau", Title: "HĐ Thầu", MinWidth: 150, Sortable: false },
            { Field: "TenDuocPham", Title: "Dược Phẩm", Width: 150, Sortable: false },
            { Field: "Loai", Title: "Loại", Width: 120, Sortable: false },
            // { Field: "Nhom", Title: "Nhóm", Width: 120, Sortable: true },
            { Field: "SoLo", Title: "Số Lô", Width: 100, Sortable: false },
            { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 140, Sortable: false },
            { Field: "MaVach", Title: "Mã Vạch", Width: 120, Sortable: false },
            { Field: "SLDisplay", Title: "SL", Width: 100, Sortable: false },
            { Field: "GiaNhap", Title: "Giá nhập", Width: 120, Sortable: false, Template: this.giaTemplate },
            { Field: "VAT", Title: "VAT(%)", Width: 100, Sortable: false },
            { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 140, Sortable: false },
        ];
        //this.theFirstSearch= JSON.stringify(this.nhapKho);
        // this.gridColumns.forEach(column => {
        //   if (column.Visible == null)
        //     column.Visible = true;
        // });
        // this.GetListLookupViTri();
    }
    themMoiNhapKho() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(id, dataItem) {
        //console.log("xemChiTiet = ", dataItem);
        //return;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            if (dataItem.DuocKeToanDuyet == null) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/" + id]);
            }
            else if (dataItem.DuocKeToanDuyet == false) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/tu-choi-duyet/" + id]);
            }
            else {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/da-duyet/" + id]);
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.Timkiem();
        }
    }
    clearSearch() {
        if (this.nhapKho.SearchString == "" || this.nhapKho.SearchString == null) {
            this.gridChild.searchString = "";
            let xuatKhoClone = JSON.parse(JSON.stringify(this.nhapKho));
            let queryForHole = JSON.parse(JSON.stringify(xuatKhoClone));
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKho', JSON.stringify(queryForHole));
            this.gridChild._additionalSearchString = JSON.stringify(this.nhapKho);
            this.gridChild.search();
            //this.Timkiem();
        }
    }
    clearSearchInStore() {
        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringNhapKho');
        let res = JSON.parse(this.additionalSearchString);
        res.SearchString = null;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKho', JSON.stringify(res));
    }
    backWithSearch() {
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem("additionalSearchStringNhapKho");
                if (additionalSearchString != null) {
                    let nhapKhoClone = JSON.parse(additionalSearchString);
                    if (nhapKhoClone.RangeNhap.startDate != null && nhapKhoClone.RangeNhap.startDate != undefined) {
                        let startDate = new Date(nhapKhoClone.RangeNhap.startDate);
                        //let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
                        nhapKhoClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                        // nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                        // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (nhapKhoClone.RangeNhap.endDate != null && nhapKhoClone.RangeNhap.endDate != undefined) {
                        let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
                        nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (nhapKhoClone.RangeDuyet.startDate != null && nhapKhoClone.RangeDuyet.startDate != undefined) {
                        let startDate = new Date(nhapKhoClone.RangeDuyet.startDate);
                        //let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
                        nhapKhoClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
                        // nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
                        // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    if (nhapKhoClone.RangeDuyet.endDate != null && nhapKhoClone.RangeDuyet.endDate != undefined) {
                        let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
                        nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
                    }
                    this.nhapKho = JSON.parse(additionalSearchString);
                    this.gridChild.additionalSearchString = JSON.stringify(nhapKhoClone);
                    this.gridChild.searchString = this.nhapKho.SearchString;
                }
            }
        }
    }
    Timkiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        QueryString = this.nhapKho.SearchString;
        let nhapKhoClone = JSON.parse(JSON.stringify(this.nhapKho));
        if (nhapKhoClone.RangeNhap.startDate != null && nhapKhoClone.RangeNhap.startDate != undefined) {
            let startDate = new Date(nhapKhoClone.RangeNhap.startDate);
            //let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
            nhapKhoClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
            // nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
            // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (nhapKhoClone.RangeNhap.endDate != null && nhapKhoClone.RangeNhap.endDate != undefined) {
            let endDate = new Date(nhapKhoClone.RangeNhap.endDate);
            nhapKhoClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (nhapKhoClone.RangeDuyet.startDate != null && nhapKhoClone.RangeDuyet.startDate != undefined) {
            let startDate = new Date(nhapKhoClone.RangeDuyet.startDate);
            //let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
            nhapKhoClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
            // nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth()
            // , endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (nhapKhoClone.RangeDuyet.endDate != null && nhapKhoClone.RangeDuyet.endDate != undefined) {
            let endDate = new Date(nhapKhoClone.RangeDuyet.endDate);
            nhapKhoClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        this.query = JSON.stringify(nhapKhoClone);
        let queryForHole = JSON.parse(JSON.stringify(nhapKhoClone));
        // queryForHole.RangeNhap = new rangeDate();
        // queryForHole.RangeDuyet = new rangeDate();
        // queryForHole.SearchString = null;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringNhapKho', JSON.stringify(this.nhapKho));
        this.gridChild._additionalSearchString = this.query;
        this.gridChild.searchString = QueryString;
        //LocalStorageHelper.setItem("additionalSearchStringNhapKhoDP", QueryString);
        this.gridChild.search();
    }
    exportExcel() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.showPopupLoadingData();
            self.apiService.postExportExcel('NhapKhoDuocPham/ExportNhapKhoDuocPham', self.gridChild._gridQueryInfo).subscribe(resultData => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'NhapKhoDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                self.closePopupLoadingData();
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    onKeyNgayNhap($event) {
        //console.log("onKeyNgayNhap = ", $event);
        if ($event.keyCode == 13) {
            this.Timkiem();
        }
    }
    changeNgayNhapRange($event) {
        //console.log("changeNgayNhapRange = ", $event);
        this.Timkiem();
    }
    blur($event) {
        //console.log("blur = ", $event);
        this.Timkiem();
    }
    onKeyNgayDuyet($event) {
        if ($event.keyCode == 13) {
            this.Timkiem();
        }
    }
    changeNgayDuyetRange($event) {
        this.Timkiem();
    }
    CheckboxChange($event, dangChoDuyet = false, tuChoiDuyet = false, daDuyet = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
        if (dangChoDuyet) {
            this.nhapKho.DangChoDuyet = $event;
        }
        else if (tuChoiDuyet) {
            this.nhapKho.TuChoiDuyet = $event;
        }
        else if (daDuyet) {
            this.nhapKho.DaDuyet = $event;
        }
        this.Timkiem();
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_24__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingDatas() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    inPhieu(id) {
        var self = this;
        self.loadingPage();
        self.apiService.post("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + id).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.closePopupLoadingData();
                self.dialog.open(_phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_29__["PhieuNhapKhoDuocPhamPopupComponent"], {
                    disableClose: false,
                    width: '1200px',
                    data: resData,
                }).afterClosed().subscribe(() => {
                    self.closePopupLoadingDatas();
                    this.router.navigateByUrl('/nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
                });
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
            self.closePopupLoadingDatas();
        });
    }
    chinhSua(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoa(id) {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Delete)) {
                    this.apiService.post("NhapKhoDuocPham/XoaYeuCauNhapKhoDuocPham?id=" + id).subscribe(() => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        this.Timkiem();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
};
NhapKhoListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_27__["Location"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], NhapKhoListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
], NhapKhoListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
], NhapKhoListComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], { static: false })
], NhapKhoListComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaTemplate', { static: true })
], NhapKhoListComponent.prototype, "trangThaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
], NhapKhoListComponent.prototype, "headerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vitriTemplate', { static: true })
], NhapKhoListComponent.prototype, "vitriTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], NhapKhoListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
], NhapKhoListComponent.prototype, "ngayNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], NhapKhoListComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], NhapKhoListComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
], NhapKhoListComponent.prototype, "soChungTuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHoaDonTemplate', { static: true })
], NhapKhoListComponent.prototype, "ngayHoaDonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], NhapKhoListComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
], NhapKhoListComponent.prototype, "giaTemplate", void 0);
NhapKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.scss")).default]
    })
], NhapKhoListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: NhapKhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoRoutingModule", function() { return NhapKhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nhap-kho-list/nhap-kho-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts");
/* harmony import */ var _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nhap-kho-create/nhap-kho-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts");
/* harmony import */ var _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nhap-kho-update/nhap-kho-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts");
/* harmony import */ var _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts");
/* harmony import */ var _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts");











const routes = [
    {
        path: '',
        component: _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_6__["NhapKhoListComponent"],
        data: {
            title: 'Danh Sách Nhập Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_7__["NhapKhoCreateComponent"],
        data: {
            title: 'Thêm Nhập Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_8__["NhapKhoUpdateComponent"],
        data: {
            title: 'Chỉnh Sửa Nhập Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'tu-choi-duyet/:id',
        component: _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_9__["NhapKhoTuChoiDuyetComponent"],
        data: {
            title: 'Chỉnh Sửa Nhập Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'da-duyet/:id',
        component: _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_10__["NhapKhoTuDaDuyetComponent"],
        data: {
            title: 'Chỉnh Sửa Nhập Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhapKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let NhapKhoRoutingModule = class NhapKhoRoutingModule {
};
NhapKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NhapKhoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-tu-choi-duyet {\n  gap: 16px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tc2hhcmUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcbmhhcC1raG9cXG5oYXAta2hvLXNoYXJlXFxuaGFwLWtoby1zaGFyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tc2hhcmUvbmhhcC1raG8tc2hhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tc2hhcmUvbmhhcC1raG8tc2hhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcC10dS1jaG9pLWR1eWV0IHtcbiAgZ2FwOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn0iLCIud3JhcC10dS1jaG9pLWR1eWV0IHtcbiAgZ2FwOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: NhapKhoShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoShareComponent", function() { return NhapKhoShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nhap-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");



















let NhapKhoShareComponent = class NhapKhoShareComponent {
    constructor(intl, route, baseService, apiService, dialog, notificationService, authService, cdRef, router) {
        this.intl = intl;
        this.route = route;
        this.baseService = baseService;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.cdRef = cdRef;
        this.router = router;
        this.isUpdate = false;
        this.nhapKho = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPham"]();
        this.nhapKhoChiTiet = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
        this.nhapKhoSource = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPham"]();
        this.nhapKhoChiTietSource = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
        this.nhapKhoSearch = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPham"]();
        this.nhapKhoChiTietSearch = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
        this.ListIdUpdate = [];
        this.gridColumns = [];
        this.format = 'n2';
        this.formatpercen = '#.00 \\%';
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.giaNhapInDB = null;
        this.searchString = "";
        this.loaiNhap = 1; // 1 là hdt, 2 là ncc
        this.blockLoaiNhap = false;
        this.groups = [{ field: 'NhomDisplay' }];
        this.data = [];
        //
        this.hopDongDisabled = false;
        this.duocPhamDisabled = false;
        this.nhomDisabled = false;
        //
        this.kyHieuHD = "";
        this.soCT = "";
        this.nguoiGiaoId = 0;
        this.tenNguoiGiao = "";
        this.isFirst = true;
        this.daDuyet = null;
        this.tuChoiDuyet = null;
        this.chuaDuyet = null;
        this.disableNCC = false;
    }
    totalTongThanhTien(field) {
        switch (field) {
            case 'ThanhTienTruocVat':
                return this.data.reduce((sum, item) => sum + item.ThanhTienTruocVat, 0);
            case 'ThanhTienSauVat':
                return this.data.reduce((sum, item) => sum + item.ThanhTienSauVat, 0);
            case 'VAT':
                return this.data.reduce((sum, item) => sum + item.ThueVatLamTron, 0);
        }
    }
    ;
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].NhapKhoDuocPham;
        this.id = this.route.snapshot.params.id;
        this.nhapKho = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPham"]();
        this.nhapKhoChiTiet = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
        this.nhapKhoSource = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPham"]();
        this.nhapKhoChiTietSource = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
        let nhapKhoChiTietDataSource = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
        this.nhapKhoSource.NhapKhoDuocPhamChiTiets.push(nhapKhoChiTietDataSource);
        this.nhapKhoSource.NhapKhoDuocPhamChiTiets.splice(0, 1);
        this.gridColumns = [
            { Field: "NhomDisplay", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomDisplayGroupHeaderTemplate },
            { Field: "NhaThauDisplay", Title: "NCC", Width: 50, ShowTooltip: true, Sortable: false },
            { Field: "HopDongThauDisplay", Title: "Hợp Đồng Thầu", ShowTooltip: true, Width: 50, Sortable: false },
            { Field: "DuocPhamDisplay", Title: "Dược Phẩm", Width: 100, Sortable: false },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 30, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 30, Sortable: false },
            { Field: "LoaiDisplay", Title: "Loại", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "Solo", Title: "Số Lô", Width: 50, Sortable: false },
            { Field: "HanSuDungDisplay", Title: "Hạn Sử Dụng", Width: 60, Sortable: false, ShowTooltip: true },
            { Field: "SoLuongNhapDisplay", Title: "SL", Width: 30, Sortable: false },
            { Field: "DonGiaNhap", Title: "Đơn Giá", Width: 80, Sortable: false, Template: this.giaTemplate },
            { Field: "ThanhTienTruocVat", Title: "Thành tiền (trước VAT)", Width: 120, Sortable: false, Template: this.thanhTienTruocVatTemplate, TemplateFooter: this.tongThanhTienTruocVatFooterTemplate },
            { Field: "VAT", Title: "VAT(%)", Width: 30, Sortable: false, TemplateFooter: this.tongThanhTienVatFooterTemplate },
            { Field: "ThanhTienSauVat", Title: "Thanh toán", Width: 120, Sortable: false, Template: this.thanhTienSauVatTemplate, TemplateFooter: this.tongThanhTienSauVatFooterTemplate },
            { Field: "GhiChu", Title: "Ghi chú", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "MaRef", Title: "Mã REF", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "MaVach", Title: "Mã Vạch", Width: 30, Sortable: false, ShowTooltip: true },
            { Field: "TiLeBHYTThanhToan", Title: "TL BH Thanh Toán(%)", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenKhoNhapSauKhiDuyet", Title: "Xuất về kho", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "TenNguoiNhapSauKhiDuyet", Title: "Người nhận", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "Action", Title: "", Width: 60, Template: this.actionTemplate }
        ];
        this.setDataGridView(this.nhapKhoSource.NhapKhoDuocPhamChiTiets);
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
        else {
            this.setNhanVienId();
        }
        // else
        // {
        //   this.kiemTraThongTinXuatKho();
        // }
        this.nhapKhoSearch = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPham"]();
        this.nhapKhoChiTietSearch = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
    }
    // click(){
    //   console.log("grid = ", this.grid);
    //   this.grid._isLoading = true;
    //   //this.grid._isLoadingTotalPage = true;
    //   //this.cdRef.detectChanges();
    // }
    setNhanVienId() {
        //vì user la nhân viên nên lấy id của nhau
        let user = this.authService.getAccessUser();
        this.nhapKho.NguoiNhapId = user.Id;
    }
    kiemTraThongTinXuatKho() {
        // kiểm tra thông tin xuất kho
        if (!this.nhapKho.DaXuatKho) {
            if (this.gridColumns.findIndex(x => x.Field == "Action") == -1)
                this.gridColumns.push({ Field: "Action", Title: "", Width: 60, Template: this.actionTemplate });
        }
    }
    onDataBound(data) {
        this.data = data.Data;
        console.log(this.data);
    }
    getById(id) {
        //console.log("getById = ", window.location.href);
        this.baseService.getById(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.isCheckUrl(resultData.DuocKeToanDuyet);
                this.nhapKho = resultData;
            }
        });
        var self = this;
        self.grid._isLoading = true;
        self.apiService.post("NhapKhoDuocPham/GetGrid?id=" + id).subscribe(resultDataGrid => {
            self.nhapKhoSource.NhapKhoDuocPhamChiTiets = resultDataGrid.NhapKhoDuocPhamChiTiets;
            self.nhapKhoSource.NhapKhoDuocPhamChiTiets.forEach(e => {
                e.IdView = Math.random();
                this.nhapKhoChiTiet.HopDongThauDuocPhamId = e.HopDongThauDuocPhamId;
                this.nhapKhoChiTiet.HopDongThauDisplay = e.HopDongThauDisplay;
                this.HopDongthauId = e.HopDongThauDuocPhamId;
                this.HopDongthauDisplay = e.HopDongThauDisplay;
                this.nhapKhoChiTiet.NhaThauId = e.NhaThauId;
                this.nhapKhoChiTiet.NhaThauDisplay = e.NhaThauDisplay;
            });
            this.NhathauId = self.nhapKhoSource.NhapKhoDuocPhamChiTiets[self.nhapKhoSource.NhapKhoDuocPhamChiTiets.length - 1].NhaThauId;
            this.NhathauDisplay = self.nhapKhoSource.NhapKhoDuocPhamChiTiets[self.nhapKhoSource.NhapKhoDuocPhamChiTiets.length - 1].NhaThauDisplay;
            self.nhapKhoSource.OldNhapKhoDuocPhamChiTiets = [...self.nhapKhoSource.NhapKhoDuocPhamChiTiets];
            self.ClearData();
            self.setDataGridView(self.nhapKhoSource.NhapKhoDuocPhamChiTiets);
            self.grid._isLoading = false;
        }, (err) => {
            self.grid._isLoading = false;
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    isCheckUrl(duocKeToanDuyet) {
        let currentUrl = window.location.href;
        if (duocKeToanDuyet == null) {
            if (currentUrl.indexOf("/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/") == -1) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/chinh-sua/" + this.id]);
            }
        }
        else if (duocKeToanDuyet == false) {
            if (currentUrl.indexOf("/nhap-xuat/duoc-pham/nhap-kho/tu-choi-duyet/") == -1) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/tu-choi-duyet/" + this.id]);
            }
        }
        else {
            if (currentUrl.indexOf("/nhap-xuat/duoc-pham/nhap-kho/da-duyet/") == -1) {
                this.router.navigate(["/nhap-xuat/duoc-pham/nhap-kho/da-duyet/" + this.id]);
            }
        }
    }
    kyHieuHoaDonChange(event) {
        this.kyHieuHD = event;
    }
    soChungTuChange(event) {
        this.soCT = event;
    }
    onChangeLoaiNhap(event) {
        this.ClearData();
        this.validationErrors = [];
        this.nhapKhoChiTiet.TiLeBHYTThanhToan = event == 1 ? 100 : null;
        this.nhapKhoChiTiet.LaDuocPhamBHYT = event == 1 ? true : false;
        this.cdRef.detectChanges();
    }
    Huy() {
        this.validationErrors = [];
        this.ClearData();
    }
    ClearData() {
        this.isUpdate = false;
        this.blockLoaiNhap = false;
        this.nhapKhoChiTiet.DuocPhamBenhVienId = null;
        this.nhapKhoChiTiet.DVT = null;
        this.nhapKhoChiTiet.SoLuongNhap = null;
        this.nhapKhoChiTiet.DonGiaNhap = null;
        this.nhapKhoChiTiet.VAT = 0 /*this.nhapKhoChiTiet.LaDuocPhamBHYT ? 0 : 0*/;
        this.nhapKhoChiTiet.TiLeBHYTThanhToan = this.nhapKhoChiTiet.LaDuocPhamBHYT ? 100 : null;
        this.nhapKhoChiTiet.Solo = null;
        this.nhapKhoChiTiet.HanSuDung = null;
        this.nhapKhoChiTiet.MaRef = null;
        this.nhapKhoChiTiet.ThanhTienSauVat = null;
        this.nhapKhoChiTiet.ThanhTienTruocVat = null;
        this.nhapKhoChiTiet.ThueVatLamTron = null;
        this.nhapKhoChiTiet.SoLuongNhapSoCap = null;
        this.nhapKhoChiTiet.MaVach = null;
        this.nhapKhoChiTiet.GhiChu = null;
    }
    nhaThauChange() {
        this.nhapKhoChiTiet.KhoNhapSauKhiDuyetId = null;
        this.nhapKhoChiTiet.NguoiNhapSauKhiDuyetId = null;
    }
    AddRow() {
        this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
        let nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
        nhapKhoChiTietDataSource.IdView = Math.random();
        if (this.nhapKhoChiTiet.LaDuocPhamBHYT) {
            this.nhapKhoChiTiet.ThanhTienSauVat = 0;
        }
        this.validationErrors = [];
        var self = this;
        if (self.validationErrors && !self.validationErrors.some(x => x)) {
            self.apiService.post("NhapKhoDuocPham/ThemDuocPhamNhapKho", nhapKhoChiTietDataSource).subscribe(resultData => {
                self.nhapKhoSource.NhapKhoDuocPhamChiTiets.push(resultData);
                self.setDataGridView(self.nhapKhoSource.NhapKhoDuocPhamChiTiets);
                //self.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                self.duocPhamCombobox.focusManual();
                self.ClearData();
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
    }
    UpdateRow() {
        this.nhapKhoChiTiet.LoaiNhap = this.loaiNhap;
        let nhapKhoChiTietDataSource = this.nhapKhoChiTiet;
        //this.kiemTraSoLuongNhapDuocPhamTheoHopDongThau(nhapKhoChiTietDataSource, nhapKhoChiTietDataSource.IdView);
        this.validationErrors = [];
        var self = this;
        if (self.validationErrors && !self.validationErrors.some(x => x)) {
            self.apiService.post("NhapKhoDuocPham/ThemDuocPhamNhapKho", nhapKhoChiTietDataSource).subscribe(resultData => {
                // update
                const item = self.nhapKhoSource.NhapKhoDuocPhamChiTiets.filter(obj => obj.IdView == resultData.IdView)[0];
                self.nhapKhoSource.NhapKhoDuocPhamChiTiets[self.nhapKhoSource.NhapKhoDuocPhamChiTiets.indexOf(item)] = resultData;
                self.setDataGridView(self.nhapKhoSource.NhapKhoDuocPhamChiTiets);
                // update
                //self.nhapKhoChiTiet = new NhapKhoDuocPhamChiTiet();
                self.duocPhamCombobox.focusManual();
                self.ClearData();
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
    }
    DeleteRowGripView(IdView) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
            disableClose: false, width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].MessLockTemplate, ["xóa dữ liệu ", ""]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.nhapKhoSource.NhapKhoDuocPhamChiTiets.forEach((value, index) => {
                    if (IdView == value.IdView) {
                        this.nhapKhoSource.NhapKhoDuocPhamChiTiets.splice(index, 1);
                        if (this.nhapKhoSource.NhapKhoDuocPhamChiTiets.length == 0)
                            this.isUpdate = false;
                        this.setDataGridView(this.nhapKhoSource.NhapKhoDuocPhamChiTiets);
                        this.Huy();
                        this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["NhapXuatKhoMessage"].MessageRemoveItemGrid);
                    }
                });
            }
        });
    }
    UpdateRowGripView(dataItem) {
        this.validationErrors = [];
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Update)) {
            var self = this;
            self.blockLoaiNhap = true;
            self.isUpdate = true;
            self.nhapKhoChiTiet = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_2__["NhapKhoDuocPhamChiTiet"]();
            self.nhapKhoChiTiet = JSON.parse(JSON.stringify(dataItem));
            self.loaiNhap = dataItem.LoaiNhap;
            self.duocPhamCombobox.model = self.nhapKhoChiTiet.DuocPhamBenhVienId;
            self.nhapKhoChiTiet.TenDuocPhamBenhVien = dataItem.TenDuocPhamBenhVien;
            if (self.nhapKhoChiTiet.HopDongThauDuocPhamId) {
                self.apiService.get("NhapKhoDuocPham/GetPriceOnContract?hopDongThauId="
                    + self.nhapKhoChiTiet.HopDongThauDuocPhamId +
                    "&duocPhamId=" + self.nhapKhoChiTiet.DuocPhamBenhVienId).subscribe(result => {
                    self.giaNhapInDB = result;
                    self.nhapKhoChiTiet.GiaApThau = result;
                }, (err) => {
                    self.notificationService.showError(err.Message);
                });
            }
            else {
                self.giaNhapInDB = self.nhapKhoChiTiet.DonGiaNhap;
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    setDataGridView(dataSource) {
        this.gridDataSource = null;
        this.dataSourceCache = dataSource;
        this.gridDataSource = {
            data: this.dataSourceCache,
            total: this.dataSourceCache.length
        };
        this.data = this.dataSourceCache;
        if (this.gridDataSource != undefined
            && this.gridDataSource != null
            && this.gridDataSource.total > 0) {
            this.disableNCC = true;
        }
        else {
            this.disableNCC = false;
        }
        console.log("setDataGridView = ", this.gridDataSource, this.grid);
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        if (this.grid != undefined) {
            this.grid.setDataSource();
        }
    }
    onChangeHopDongThau(event) {
        if (event !== null && event !== undefined) {
            this.nhapKhoChiTiet.DuocPhamBenhVienId = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.giaNhapInDB = null;
            this.nhapKhoChiTiet.HopDongThauDuocPhamId = event.KeyId;
            this.nhapKhoChiTiet.NhaThauId = event.NhauThauId;
        }
        else {
            this.nhapKhoChiTiet.HopDongThauDuocPhamId = 0;
            this.nhapKhoChiTiet.NhaThauId = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.giaNhapInDB = null;
        }
        //this.nhapKhoChiTiet.DuocPhamBenhVienPhanNhomId = null;
    }
    selectionChangeDuocPham(dataItem) {
        if (dataItem !== null && dataItem !== undefined) {
            this.nhapKhoChiTiet.DonGiaNhap = dataItem.Gia;
            this.nhapKhoChiTiet.GiaApThau = dataItem.Gia;
            this.nhapKhoChiTiet.DVT = dataItem.DVT;
            this.nhapKhoChiTiet.HeSoDinhMucDonViTinh = dataItem.HeSoDinhMucDonViTinh;
            this.giaNhapInDB = dataItem.Gia;
            this.modelChangeDonGiaNhap(this.nhapKhoChiTiet.DonGiaNhap);
        }
        else {
            this.nhapKhoChiTiet.GiaApThau = null;
            this.nhapKhoChiTiet.DonGiaNhap = null;
            this.giaNhapInDB = null;
            this.nhapKhoChiTiet.SoLuongNhap = null;
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.ThanhTienSauVat = null;
            this.nhapKhoChiTiet.ThanhTienTruocVat = null;
            this.nhapKhoChiTiet.ThueVatLamTron = null;
            this.nhapKhoChiTiet.DVT = null;
        }
    }
    getSharedData() {
        this.nhapKho.NhapKhoDuocPhamChiTiets = this.nhapKhoSource.NhapKhoDuocPhamChiTiets;
        this.nhapKho.OldNhapKhoDuocPhamChiTiets = [...this.nhapKhoSource.OldNhapKhoDuocPhamChiTiets];
        return this.nhapKho;
    }
    loaiNguoiGiaoChange() {
        this.nhapKho.NguoiGiaoId = null;
        this.nhapKho.TenNguoiGiao = null;
    }
    tenNguoiGiaoChange(event) {
        this.tenNguoiGiao = event;
    }
    nguoiGiaoIdChange(event) {
        this.nguoiGiaoId = event;
    }
    loaiChange($event) {
        //console.log("loaiChange = ", $event);
        if ($event == true) {
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.TiLeBHYTThanhToan = 100;
        }
        else {
            this.nhapKhoChiTiet.TiLeBHYTThanhToan = null;
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.buttonThemAction();
        }
    }
    onKeyHopDong(event) {
        if (event.keyCode == 13) {
            if (this.hopDongDisabled != true) {
                this.buttonThemAction();
            }
            else {
                this.hopDongDisabled = false;
            }
        }
    }
    openComboboxHopDong($event) {
        if ($event) {
            this.hopDongDisabled = true;
        }
        else {
            this.hopDongDisabled = false;
        }
    }
    onKeyDuocPham(event) {
        if (event.keyCode == 13) {
            if (this.duocPhamDisabled != true) {
                this.buttonThemAction();
            }
            else {
                this.duocPhamDisabled = false;
            }
        }
    }
    openComboboxDuocPham($event) {
        if ($event) {
            this.duocPhamDisabled = true;
        }
        else {
            this.duocPhamDisabled = false;
        }
    }
    onKeyNhom(event) {
        if (event.keyCode == 13) {
            if (this.nhomDisabled != true) {
                this.buttonThemAction();
            }
            else {
                this.nhomDisabled = false;
            }
        }
    }
    openComboboxNhom($event) {
        if ($event) {
            this.nhomDisabled = true;
        }
        else {
            this.nhomDisabled = false;
        }
    }
    buttonThemAction() {
        if (this.isUpdate == false) {
            this.AddRow();
        }
        else {
            this.UpdateRow();
        }
    }
    modelChangeSoLuongNhapSoCap(event) {
        if (this.nhapKhoChiTiet.HeSoDinhMucDonViTinh != null && this.nhapKhoChiTiet.HeSoDinhMucDonViTinh > 0) {
            this.nhapKhoChiTiet.SoLuongNhap = event * this.nhapKhoChiTiet.HeSoDinhMucDonViTinh;
        }
    }
    modelChangeSoLuongNhap(event) {
        this.nhapKhoChiTiet.ThanhTienTruocVat = (event != null ? event : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0);
        if (!this.nhapKhoChiTiet.LaDuocPhamBHYT) {
            let thanhTien = ((event != null ? event : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                (event != null ? event : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
            let numberStr = thanhTien.toString().split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }
                else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }
            }
            this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
        }
    }
    modelChangeDonGiaNhap(event) {
        this.nhapKhoChiTiet.ThanhTienTruocVat = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (event != null ? event : 0);
        if (!this.nhapKhoChiTiet.LaDuocPhamBHYT) {
            let thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
            let numberStr = thanhTien.toString().split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }
                else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }
            }
            else {
                this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
            }
        }
        this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
    }
    modelChangeVAT(event) {
        let thanhTien = (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
            (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
            (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((event != null ? event : 0) / 100);
        let numberStr = thanhTien.toString().split(".");
        if (numberStr.length > 1) {
            let number = Number(numberStr[1]);
            if (number < 10) {
                if (number >= 5) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                }
                else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            }
            else {
                if (number >= 50) {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                }
                else {
                    this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                }
            }
        }
        else {
            this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
        }
        this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
    }
    modelChangeThanhTienTruocVat(event) {
        this.nhapKhoChiTiet.DonGiaNhap = (event != null ? event : 0) / (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0);
        if (!this.nhapKhoChiTiet.LaDuocPhamBHYT) {
            let thanhTien = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) +
                (this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                    (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
            let numberStr = thanhTien.toString().split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }
                else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.ceil(thanhTien) : 0;
                    }
                    else {
                        this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.VAT != null ? Math.floor(thanhTien) : 0;
                    }
                }
            }
            else {
                this.nhapKhoChiTiet.ThanhTienSauVat = thanhTien;
            }
            this.modelThanhTienSauVat(this.nhapKhoChiTiet.ThanhTienSauVat);
        }
    }
    modelThanhTienSauVat(event) {
        if (event != undefined && event != null) {
            let thanhTienVAT = ((this.nhapKhoChiTiet.SoLuongNhap != null ? this.nhapKhoChiTiet.SoLuongNhap : 0) *
                (this.nhapKhoChiTiet.DonGiaNhap != null ? this.nhapKhoChiTiet.DonGiaNhap : 0) * ((this.nhapKhoChiTiet.VAT != null ? this.nhapKhoChiTiet.VAT : 0) / 100));
            let numberFixed = thanhTienVAT.toFixed(2);
            let numberStr = numberFixed.split(".");
            if (numberStr.length > 1) {
                let number = Number(numberStr[1]);
                if (number < 10) {
                    if (number >= 5) {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.ceil(Number(numberFixed));
                    }
                    else {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.floor(Number(numberFixed));
                    }
                }
                else {
                    if (number >= 50) {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.ceil(Number(numberFixed));
                    }
                    else {
                        this.nhapKhoChiTiet.ThueVatLamTron = Math.floor(Number(numberFixed));
                    }
                }
            }
            else {
                if (this.nhapKhoChiTiet.VAT == undefined || this.nhapKhoChiTiet.VAT == null) {
                    this.nhapKhoChiTiet.ThueVatLamTron = 0;
                }
            }
        }
        else {
            this.nhapKhoChiTiet.ThueVatLamTron = 0;
        }
    }
    modelChangeThueVatLamTron(event) {
        if (event != undefined && event != null) {
            this.nhapKhoChiTiet.VAT = (event / 100);
        }
        else {
            this.nhapKhoChiTiet.VAT = 0;
            this.nhapKhoChiTiet.ThanhTienSauVat = this.nhapKhoChiTiet.ThanhTienTruocVat;
        }
    }
    blurChangeSoChungTu(event) {
        if (this.nhapKho.SoChungTu != null && this.nhapKho.SoChungTu != "") {
            if (this.nhapKho.SoChungTu.length < 7) {
                var str = "";
                for (var i = 0; i < 7 - this.nhapKho.SoChungTu.length; i++) {
                    str += "0";
                }
                this.nhapKho.SoChungTu = str + this.nhapKho.SoChungTu;
            }
        }
    }
};
NhapKhoShareComponent.ctorParameters = () => [
    { type: _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_6__["IntlService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhapKhoShareComponent.prototype, "isUpdate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhapKhoShareComponent.prototype, "daDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhapKhoShareComponent.prototype, "tuChoiDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhapKhoShareComponent.prototype, "chuaDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NhapKhoShareComponent.prototype, "validationErrors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], NhapKhoShareComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
], NhapKhoShareComponent.prototype, "headerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
], NhapKhoShareComponent.prototype, "giaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTruocVatTemplate', { static: true })
], NhapKhoShareComponent.prototype, "thanhTienTruocVatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienSauVatTemplate', { static: true })
], NhapKhoShareComponent.prototype, "thanhTienSauVatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongThanhTienTruocVatFooterTemplate', { static: true })
], NhapKhoShareComponent.prototype, "tongThanhTienTruocVatFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongThanhTienSauVatFooterTemplate', { static: true })
], NhapKhoShareComponent.prototype, "tongThanhTienSauVatFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongThanhTienVatFooterTemplate', { static: true })
], NhapKhoShareComponent.prototype, "tongThanhTienVatFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { static: false })
], NhapKhoShareComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocPhamCombobox', { static: false })
], NhapKhoShareComponent.prototype, "duocPhamCombobox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cmbHopDongThau', { static: false })
], NhapKhoShareComponent.prototype, "cmbHopDongThau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cmbNhom', { static: false })
], NhapKhoShareComponent.prototype, "cmbNhom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDisplayGroupHeaderTemplate', { static: true })
], NhapKhoShareComponent.prototype, "nhomDisplayGroupHeaderTemplate", void 0);
NhapKhoShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-share',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-share.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-share.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.scss")).default]
    })
], NhapKhoShareComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.title-alert {\n  color: red;\n  text-align: right;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdHUtY2hvaS1kdXlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFxuaGFwLWtob1xcbmhhcC1raG8tdHUtY2hvaS1kdXlldFxcbmhhcC1raG8tdHUtY2hvaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdHUtY2hvaS1kdXlldC9uaGFwLWtoby10dS1jaG9pLWR1eWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL25oYXAta2hvL25oYXAta2hvLXR1LWNob2ktZHV5ZXQvbmhhcC1raG8tdHUtY2hvaS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLnRpdGxlLWFsZXJ0IHtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4udGl0bGUtYWxlcnQge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: NhapKhoTuChoiDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoTuChoiDuyetComponent", function() { return NhapKhoTuChoiDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_modules_main_ke_toan_duyet_nhap_kho_duyet_nhap_kho_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/main/ke-toan/duyet-nhap-kho/duyet-nhap-kho.model */ "./src/app/modules/main/ke-toan/duyet-nhap-kho/duyet-nhap-kho.model.ts");


















let NhapKhoTuChoiDuyetComponent = class NhapKhoTuChoiDuyetComponent {
    constructor(router, route, baseService, apiService, authService, dialog, notificationService, errorService) {
        this.router = router;
        this.route = route;
        this.baseService = baseService;
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.errorService = errorService;
        this.nhapKho = new src_app_modules_main_ke_toan_duyet_nhap_kho_duyet_nhap_kho_model__WEBPACK_IMPORTED_MODULE_17__["NhapKhoDuocPham"]();
        this.showToastNotifyError = false;
        this.loading = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].NhapKhoDuocPham;
        this.id = this.route.snapshot.params.id;
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
    }
    getById(id) {
    }
    huy() {
        this.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
    }
    luu() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
            var self = this;
            self.shared.validationErrors = null;
            self.loading = true;
            self.nhapKho = self.shared.getSharedData();
            self.apiService.post("NhapKhoDuocPham/CapNhatYeuCauNhapKhoDuocPham", self.nhapKho).subscribe(() => {
                //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                self.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
                self.loading = false;
            }, (err) => {
                self.shared.validationErrors = err.ValidationErrors;
                if (self.showToastNotifyError == true) {
                    var mess = self.errorService.getValidationErrors(err);
                    if (mess != null) {
                        self.notificationService.showError(mess);
                    }
                }
                self.loading = false;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
    }
    luuVaDuyetLai() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
            var self = this;
            self.shared.validationErrors = null;
            self.loading = true;
            self.nhapKho = self.shared.getSharedData();
            self.apiService.post("NhapKhoDuocPham/CapNhatYeuCauNhapKhoDuocPham", self.nhapKho).subscribe(resultData => {
                // self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                // self.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Chỉnh sửa"]));
                // self.loading = false;
                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["NhapKhoMessage"].MessageLuuVaGoiDuyet }
                }).afterClosed().subscribe(result => {
                    if (result == "Yes") {
                        self.apiService.post("NhapKhoDuocPham/GoiDuyetLai?id=" + self.id).subscribe(result => {
                            //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                            self.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_16__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Lưu và gửi duyệt lại"]));
                        }, (err) => {
                            self.shared.validationErrors = err.ValidationErrors;
                            if (self.showToastNotifyError == true) {
                                var mess = self.errorService.getValidationErrors(err);
                                if (mess != null) {
                                    self.notificationService.showError(mess);
                                }
                            }
                            self.loading = false;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                        });
                        //self.router.navigate(['tiep-nhan-trong-ngay/']);
                        //self.router.navigateByUrl('danh-sach-thu-dich-vu/thong-tin-chi-tiet-cho-thu-tien/' + this.idYeuCauTiepNhan + "?loaiThanhToan=" + 1 + "&yctn=true");
                    }
                    else {
                        //self.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
                        //self.ngOnInit();
                    }
                });
            }, (err) => {
                self.shared.validationErrors = err.ValidationErrors;
                if (self.showToastNotifyError == true) {
                    var mess = self.errorService.getValidationErrors(err);
                    if (mess != null) {
                        self.notificationService.showError(mess);
                    }
                }
                self.loading = false;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
    }
};
NhapKhoTuChoiDuyetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_13__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_15__["ErrorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_4__["NhapKhoShareComponent"], { static: true })
], NhapKhoTuChoiDuyetComponent.prototype, "shared", void 0);
NhapKhoTuChoiDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-tu-choi-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-tu-choi-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-tu-choi-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.scss")).default]
    })
], NhapKhoTuChoiDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.title-alert-green {\n  color: green;\n  text-align: right;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdHUtZGEtZHV5ZXQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcbmhhcC1raG9cXG5oYXAta2hvLXR1LWRhLWR1eWV0XFxuaGFwLWtoby10dS1kYS1kdXlldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdHUtZGEtZHV5ZXQvbmhhcC1raG8tdHUtZGEtZHV5ZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdHUtZGEtZHV5ZXQvbmhhcC1raG8tdHUtZGEtZHV5ZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi50aXRsZS1hbGVydC1ncmVlbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA1MCU7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4udGl0bGUtYWxlcnQtZ3JlZW4ge1xuICBjb2xvcjogZ3JlZW47XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: NhapKhoTuDaDuyetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoTuDaDuyetComponent", function() { return NhapKhoTuDaDuyetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");










let NhapKhoTuDaDuyetComponent = class NhapKhoTuDaDuyetComponent {
    constructor(router, route, apiService, authService, dialog) {
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].NhapKhoDuocPham;
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }
    getById(id) {
    }
    huy() {
        this.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
    }
};
NhapKhoTuDaDuyetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_6__["NhapKhoShareComponent"], { static: true })
], NhapKhoTuDaDuyetComponent.prototype, "shared", void 0);
NhapKhoTuDaDuyetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-tu-da-duyet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-tu-da-duyet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_7__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_8__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-tu-da-duyet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.scss")).default]
    })
], NhapKhoTuDaDuyetComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdXBkYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXG5oYXAta2hvXFxuaGFwLWtoby11cGRhdGVcXG5oYXAta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vbmhhcC1raG8tdXBkYXRlL25oYXAta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL25oYXAta2hvL25oYXAta2hvLXVwZGF0ZS9uaGFwLWtoby11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: NhapKhoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoUpdateComponent", function() { return NhapKhoUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _nhap_kho_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nhap-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.ts");




















let NhapKhoUpdateComponent = class NhapKhoUpdateComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.nhapKho = new _nhap_kho_model__WEBPACK_IMPORTED_MODULE_5__["NhapKhoDuocPham"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].NhapKhoDuocPham;
    }
    ngOnInit() {
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    cancel() {
        this.location.back();
    }
    update() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn lưu dữ liệu này không?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.nhapKho = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                    self.loadingPage();
                    self.apiService.post("NhapKhoDuocPham/CapNhatYeuCauNhapKhoDuocPham", self.nhapKho).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.closePopupLoadingData();
                            if (result.length > 0) {
                                self.dialog.open(_ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_19__["DsDuocPhamTrungNccPopupComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: result,
                                }).afterClosed().subscribe(() => {
                                });
                            }
                            else {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                self.closePopupLoadingData();
                                self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                                    disableClose: false,
                                    width: "500px",
                                    data: {
                                        Title: "Xác nhận in",
                                        Message: "Bạn có muốn in phiếu nhập kho này không ?",
                                    },
                                }).afterClosed().subscribe((res) => {
                                    if (res == "Yes") {
                                        self.loadingPage();
                                        self.apiService.post("NhapKhoDuocPham/InPhieuYeuCauNhapKhoDuocPham?yeuCauNhapKhoDuocPhamId=" + result).subscribe(resData => {
                                            if (resData != undefined && resData != null) {
                                                self.closePopupLoadingData();
                                                self.dialog.open(_phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_16__["PhieuNhapKhoDuocPhamPopupComponent"], {
                                                    disableClose: false,
                                                    width: '1200px',
                                                    data: resData,
                                                }).afterClosed().subscribe(() => {
                                                    self.closePopupLoadingData();
                                                    this.router.navigate(['/nhap-xuat/duoc-pham/nhap-kho']);
                                                });
                                            }
                                        }, (err) => {
                                            self.validationErrors = err.ValidationErrors;
                                            if (err.Message != "Validation Failed") {
                                                self.notificationService.showError(err.Message);
                                            }
                                            self.closePopupLoadingData();
                                        });
                                    }
                                    else {
                                        this.router.navigate(['/nhap-xuat/duoc-pham/nhap-kho']);
                                    }
                                });
                            }
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    onUpdated() {
        //this.router.navigate(['nhap-xuat/duoc-pham/nhap-kho']);
        this.router.navigateByUrl('nhap-xuat/duoc-pham/nhap-kho?holdQuery=true');
    }
};
NhapKhoUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_2__["NhapKhoShareComponent"], { static: true })
], NhapKhoUpdateComponent.prototype, "shared", void 0);
NhapKhoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nhap-kho-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nhap-kho-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nhap-kho-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.scss")).default]
    })
], NhapKhoUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.model.ts ***!
  \*****************************************************************************/
/*! exports provided: NhapKhoDuocPham, NhapKhoDuocPhamChiTiet, NhapKhoDuocPhamSearch, rangeDate, LookupItemViTriVo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPham", function() { return NhapKhoDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPhamChiTiet", function() { return NhapKhoDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoDuocPhamSearch", function() { return NhapKhoDuocPhamSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupItemViTriVo", function() { return LookupItemViTriVo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NhapKhoDuocPham {
    constructor(Id = 0, SoChungTu = null, 
    //public LoaiNhapKho: number = 1,
    //public TenLoaiNhapKho: string = null,
    NguoiGiaoId = null, TenNguoiGiao = null, NguoiNhapId = null, 
    //public TenNguoiNhap: string = null,
    LoaiNguoiGiao = 1, NhapKhoDuocPhamChiTiets = [], OldNhapKhoDuocPhamChiTiets = [], NgayNhap = new Date(), NgayHoaDon = new Date(), DaXuatKho = null, NgayDuyet = null, NhanVienDuyetId = null, LyDoKhongDuyet = null, KyHieuHoaDon = null, DuocKeToanDuyet = null, KhoNhapSauKhiDuyetId = null, NguoiNhapSauKhiDuyetId = null) {
        this.Id = Id;
        this.SoChungTu = SoChungTu;
        this.NguoiGiaoId = NguoiGiaoId;
        this.TenNguoiGiao = TenNguoiGiao;
        this.NguoiNhapId = NguoiNhapId;
        this.LoaiNguoiGiao = LoaiNguoiGiao;
        this.NhapKhoDuocPhamChiTiets = NhapKhoDuocPhamChiTiets;
        this.OldNhapKhoDuocPhamChiTiets = OldNhapKhoDuocPhamChiTiets;
        this.NgayNhap = NgayNhap;
        this.NgayHoaDon = NgayHoaDon;
        this.DaXuatKho = DaXuatKho;
        this.NgayDuyet = NgayDuyet;
        this.NhanVienDuyetId = NhanVienDuyetId;
        this.LyDoKhongDuyet = LyDoKhongDuyet;
        this.KyHieuHoaDon = KyHieuHoaDon;
        this.DuocKeToanDuyet = DuocKeToanDuyet;
        this.KhoNhapSauKhiDuyetId = KhoNhapSauKhiDuyetId;
        this.NguoiNhapSauKhiDuyetId = NguoiNhapSauKhiDuyetId;
    }
}
class NhapKhoDuocPhamChiTiet {
    constructor(TiLeBHYTThanhToan = 100, Id = 0, IdView = Math.random(), HopDongThauDuocPhamId = null, NhaThauId = null, NhaThauDisplay = null, DuocPhamBenhVienId = null, TenDuocPhamBenhVien = null, LaDuocPhamBHYT = true, DuocPhamBenhVienPhanNhomId = null, Solo = null, HanSuDung = null, MaVach = null, SoLuongNhap = null, DonGiaNhap = null, GiaApThau = null, VAT = 0, KhoViTriId = null, LoaiNhap = 1, // 1 là hdt, 2 là ncc
    DVT = null, 
    //for grid
    HopDongThauDisplay = null, DuocPhamDisplay = null, LoaiDisplay = null, NhomDisplay = null, HanSuDungDisplay = null, SoLuongNhapDisplay = null, ViTriDisplay = null, SoLuongNhapSoCap = null, HeSoDinhMucDonViTinh = null, MaRef = null, KhoNhapSauKhiDuyetId = null, NguoiNhapSauKhiDuyetId = null, ThanhTienTruocVat = 0, ThanhTienSauVat = 0, ThueVatLamTron = 0, GhiChu = null) {
        this.TiLeBHYTThanhToan = TiLeBHYTThanhToan;
        this.Id = Id;
        this.IdView = IdView;
        this.HopDongThauDuocPhamId = HopDongThauDuocPhamId;
        this.NhaThauId = NhaThauId;
        this.NhaThauDisplay = NhaThauDisplay;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.TenDuocPhamBenhVien = TenDuocPhamBenhVien;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.Solo = Solo;
        this.HanSuDung = HanSuDung;
        this.MaVach = MaVach;
        this.SoLuongNhap = SoLuongNhap;
        this.DonGiaNhap = DonGiaNhap;
        this.GiaApThau = GiaApThau;
        this.VAT = VAT;
        this.KhoViTriId = KhoViTriId;
        this.LoaiNhap = LoaiNhap;
        this.DVT = DVT;
        this.HopDongThauDisplay = HopDongThauDisplay;
        this.DuocPhamDisplay = DuocPhamDisplay;
        this.LoaiDisplay = LoaiDisplay;
        this.NhomDisplay = NhomDisplay;
        this.HanSuDungDisplay = HanSuDungDisplay;
        this.SoLuongNhapDisplay = SoLuongNhapDisplay;
        this.ViTriDisplay = ViTriDisplay;
        this.SoLuongNhapSoCap = SoLuongNhapSoCap;
        this.HeSoDinhMucDonViTinh = HeSoDinhMucDonViTinh;
        this.MaRef = MaRef;
        this.KhoNhapSauKhiDuyetId = KhoNhapSauKhiDuyetId;
        this.NguoiNhapSauKhiDuyetId = NguoiNhapSauKhiDuyetId;
        this.ThanhTienTruocVat = ThanhTienTruocVat;
        this.ThanhTienSauVat = ThanhTienSauVat;
        this.ThueVatLamTron = ThueVatLamTron;
        this.GhiChu = GhiChu;
    }
}
class NhapKhoDuocPhamSearch {
    constructor(
    // public KhoDuocPhamId: number = 0,
    // public TenKhoDuocPham: string = null,
    // public ChuaXepViTri : boolean = false,
    // public LoaiNhapKho : number = 0,
    // public TenLoaiNhapKho: string = null,
    DangChoDuyet = true, TuChoiDuyet = false, DaDuyet = false, SearchString = null, RangeNhap = new rangeDate, RangeDuyet = new rangeDate) {
        this.DangChoDuyet = DangChoDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.DaDuyet = DaDuyet;
        this.SearchString = SearchString;
        this.RangeNhap = RangeNhap;
        this.RangeDuyet = RangeDuyet;
    }
}
class rangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class LookupItemViTriVo {
    constructor(KeyId, DisplayName, KhoDuocPhamId) {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
        this.KhoDuocPhamId = KhoDuocPhamId;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.module.ts ***!
  \******************************************************************************/
/*! exports provided: NhapKhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoModule", function() { return NhapKhoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _nhap_kho_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nhap-kho-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-routing.module.ts");
/* harmony import */ var _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nhap-kho-list/nhap-kho-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-list/nhap-kho-list.component.ts");
/* harmony import */ var _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nhap-kho-create/nhap-kho-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-create/nhap-kho-create.component.ts");
/* harmony import */ var _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nhap-kho-update/nhap-kho-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-update/nhap-kho-update.component.ts");
/* harmony import */ var _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nhap-kho-share/nhap-kho-share.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-share/nhap-kho-share.component.ts");
/* harmony import */ var _nhap_kho_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nhap-kho.service */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.service.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-choi-duyet/nhap-kho-tu-choi-duyet.component.ts");
/* harmony import */ var _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho-tu-da-duyet/nhap-kho-tu-da-duyet.component.ts");
/* harmony import */ var _phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.ts");
/* harmony import */ var _ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/ds-duoc-pham-trung-ncc-popup/ds-duoc-pham-trung-ncc-popup.component.ts");




























let NhapKhoModule = class NhapKhoModule {
};
NhapKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _nhap_kho_list_nhap_kho_list_component__WEBPACK_IMPORTED_MODULE_15__["NhapKhoListComponent"],
            _nhap_kho_create_nhap_kho_create_component__WEBPACK_IMPORTED_MODULE_16__["NhapKhoCreateComponent"],
            _nhap_kho_update_nhap_kho_update_component__WEBPACK_IMPORTED_MODULE_17__["NhapKhoUpdateComponent"],
            _nhap_kho_share_nhap_kho_share_component__WEBPACK_IMPORTED_MODULE_18__["NhapKhoShareComponent"], _nhap_kho_tu_choi_duyet_nhap_kho_tu_choi_duyet_component__WEBPACK_IMPORTED_MODULE_24__["NhapKhoTuChoiDuyetComponent"], _nhap_kho_tu_da_duyet_nhap_kho_tu_da_duyet_component__WEBPACK_IMPORTED_MODULE_25__["NhapKhoTuDaDuyetComponent"], _phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuNhapKhoDuocPhamPopupComponent"], _ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_27__["DsDuocPhamTrungNccPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_23__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
            _nhap_kho_routing_module__WEBPACK_IMPORTED_MODULE_14__["NhapKhoRoutingModule"]
        ],
        entryComponents: [
            _phieu_nhap_kho_duoc_pham_popup_phieu_nhap_kho_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_26__["PhieuNhapKhoDuocPhamPopupComponent"],
            _ds_duoc_pham_trung_ncc_popup_ds_duoc_pham_trung_ncc_popup_component__WEBPACK_IMPORTED_MODULE_27__["DsDuocPhamTrungNccPopupComponent"]
        ],
        providers: [
            _nhap_kho_service__WEBPACK_IMPORTED_MODULE_19__["NhapKhoService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"], useClass: _nhap_kho_service__WEBPACK_IMPORTED_MODULE_19__["NhapKhoService"] },
        ]
    })
], NhapKhoModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/nhap-kho.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NhapKhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoService", function() { return NhapKhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let NhapKhoService = class NhapKhoService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'NhapKhoDuocPham';
    }
};
NhapKhoService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
NhapKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NhapKhoService);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vcGhpZXUtbmhhcC1raG8tZHVvYy1waGFtLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXG5oYXAta2hvXFxwaGlldS1uaGFwLWtoby1kdW9jLXBoYW0tcG9wdXBcXHBoaWV1LW5oYXAta2hvLWR1b2MtcGhhbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vbmhhcC1raG8vcGhpZXUtbmhhcC1raG8tZHVvYy1waGFtLXBvcHVwL3BoaWV1LW5oYXAta2hvLWR1b2MtcGhhbS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9uaGFwLWtoby9waGlldS1uaGFwLWtoby1kdW9jLXBoYW0tcG9wdXAvcGhpZXUtbmhhcC1raG8tZHVvYy1waGFtLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: PhieuNhapKhoDuocPhamPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuNhapKhoDuocPhamPopupComponent", function() { return PhieuNhapKhoDuocPhamPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let PhieuNhapKhoDuocPhamPopupComponent = class PhieuNhapKhoDuocPhamPopupComponent {
    constructor(dialog, sanitizer, dialogRef, data) {
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
    }
    close() {
        this.dialogRef.close();
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.data);
        });
    }
};
PhieuNhapKhoDuocPhamPopupComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
PhieuNhapKhoDuocPhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-nhap-kho-duoc-pham-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-nhap-kho-duoc-pham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-nhap-kho-duoc-pham-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/nhap-kho/phieu-nhap-kho-duoc-pham-popup/phieu-nhap-kho-duoc-pham-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], PhieuNhapKhoDuocPhamPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
  \**********************************************************************************************/
/*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function() { return YeuCauMuaVatTuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function() { return YeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function() { return YeuCauMuaVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function() { return PhieuYeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function() { return ThongTinVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function() { return YeuCauMuaVatTuChiTietValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class YeuCauMuaVatTuGridVo {
    constructor(SoPhieu = null, TenNhanVienYeuCau = null, NgayYeuCauTuFormat = null, NgayYeuCauDenFormat = null, RangeFromDate = new RangeDate(), FromDate = null, ToDate = null, ChoDuyet = true, DaDuyet = false, TuChoiDuyet = false, TuNgay = null, DenNgay = null, SearchString = null) {
        this.SoPhieu = SoPhieu;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
        this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
        this.RangeFromDate = RangeFromDate;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class YeuCauMuaVatTu {
    constructor(Id = 0, SoPhieu = null, KhoId = null, NhanVienYeuCauId = null, NgayYeuCau = null, KyDuTruMuaDuocPhamVatTuId = null, GhiChu = null, TruongKhoaId = null, TruongKhoaDuyet = null, TenKho = null, TenNhanVienYeuCau = null, TenNhomDuTru = null, TenKyDuTru = null, NgayTaiKhoa = null, NgayKhoDuoc = null, NgayGiamDoc = null, TrangThai = null, TenTruongKhoa = null, NgayTruongKhoaDuyet = null, TenNhanVienKhoDuoc = null, NgayKhoDuocDuyet = null, TenGiamDoc = null, NgayGiamDocDuyet = null, LyDoTruongKhoaTuChoi = null, DuTruMuaVatTuChiTiets = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KhoId = KhoId;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NgayYeuCau = NgayYeuCau;
        this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
        this.GhiChu = GhiChu;
        this.TruongKhoaId = TruongKhoaId;
        this.TruongKhoaDuyet = TruongKhoaDuyet;
        this.TenKho = TenKho;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.TenNhomDuTru = TenNhomDuTru;
        this.TenKyDuTru = TenKyDuTru;
        this.NgayTaiKhoa = NgayTaiKhoa;
        this.NgayKhoDuoc = NgayKhoDuoc;
        this.NgayGiamDoc = NgayGiamDoc;
        this.TrangThai = TrangThai;
        this.TenTruongKhoa = TenTruongKhoa;
        this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
        this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
        this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
        this.TenGiamDoc = TenGiamDoc;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.DuTruMuaVatTuChiTiets = DuTruMuaVatTuChiTiets;
    }
}
class YeuCauMuaVatTuChiTiet {
    constructor(STT = null, Id = 0, VatTuId = null, LaVatTuBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongDuTruTaiKhoaDuyet = null, NhomDieuTriDuPhong = null, GhiChu = null, DuTruMuaVatTuTheoKhoaChiTietId = null, DuTruMuaVatTuKhoDuocChiTietId = null) {
        this.STT = STT;
        this.Id = Id;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.GhiChu = GhiChu;
        this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
        this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
    }
}
class PhieuYeuCauMuaVatTu {
    constructor(DuTruMuaVatTuId = 0, HostingName = null, Header = null, TrangThai = null) {
        this.DuTruMuaVatTuId = DuTruMuaVatTuId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.TrangThai = TrangThai;
    }
}
class ThongTinVatTuChiTiet {
    constructor(STT = 0, Id = 0, NhomVatTuId = null, VatTuId = null, LaVatTuBHYT = null, Ma = null, DVT = null, QuyCach = null, NhaSX = null, NuocSX = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongTonDuTru = null, SoLuongTonKhoTong = null, SoLuongChuaNhapVeHDT = null, // Hợp đồng thầu
    ThongTinChiTietTonKhoTongs = [], ThongTinChiTietTonHDTs = [], LoaiVatTu = null, TenLoaiVatTu = null, Ten = null, SLTonDuTru = null, SLTonKhoTong = null, SLChuaNhapVeHDT = null, SoLuongDuTruTaiKhoaDuyet = null, SoLuongDuTruKhoaDuocDuyet = null, SoLuongDuTruGiamDocDuyet = null, KhoId = null, IsThemVatTu = false, GhiChu = null, YeuCauMuaVatTuChiTietValidators = []) {
        this.STT = STT;
        this.Id = Id;
        this.NhomVatTuId = NhomVatTuId;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.Ma = Ma;
        this.DVT = DVT;
        this.QuyCach = QuyCach;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongTonDuTru = SoLuongTonDuTru;
        this.SoLuongTonKhoTong = SoLuongTonKhoTong;
        this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
        this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
        this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
        this.LoaiVatTu = LoaiVatTu;
        this.TenLoaiVatTu = TenLoaiVatTu;
        this.Ten = Ten;
        this.SLTonDuTru = SLTonDuTru;
        this.SLTonKhoTong = SLTonKhoTong;
        this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
        this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
        this.KhoId = KhoId;
        this.IsThemVatTu = IsThemVatTu;
        this.GhiChu = GhiChu;
        this.YeuCauMuaVatTuChiTietValidators = YeuCauMuaVatTuChiTietValidators;
    }
}
class YeuCauMuaVatTuChiTietValidator {
    constructor(VatTuId = 0, LaVatTuBHYT = null) {
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~ke-toan-duyet-nhap-kho-duyet-nhap-kho-module~nhap-xuat-duoc-pham-nhap-kho-nhap-kho-module-es2015.js.map