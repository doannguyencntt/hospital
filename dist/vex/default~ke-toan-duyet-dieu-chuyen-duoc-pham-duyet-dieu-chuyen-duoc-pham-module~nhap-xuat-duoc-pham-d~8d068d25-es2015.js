(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ke-toan-duyet-dieu-chuyen-duoc-pham-duyet-dieu-chuyen-duoc-pham-module~nhap-xuat-duoc-pham-d~8d068d25"],{

/***/ "./node_modules/@iconify/icons-ic/chevron-left.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/chevron-left.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/chevron-right.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/chevron-right.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/first-page.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/first-page.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/last-page.js":
/*!*****************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/last-page.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất kho',Path:''}\n                ,{Title:'Tạo yêu cầu điều chuyển kho nội bộ',Path:'/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham',Active:true}\n                ]\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tạo yêu cầu điều chuyển kho nội bộ</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-dieu-chuyen-kho-noi-bo-duoc-pham-shared [validationErrors]=\"validationErrors\" [isCreate]=\"true\"\n                    [trangThaiVo]=\"trangThaiVo\">\n                </app-dieu-chuyen-kho-noi-bo-duoc-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiYeuCauDieuChuyenThuoc()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Lưu</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.html":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.html ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Xuất kho',Path:''}\n            ,{Title:'Điều chuyển kho nội bộ',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                [sort]=\"sort\" pageSize=\"50\" urlGetData=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridAsync\"\n                urlGetTotalPage=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridAsync\" [showStt]=\"true\"\n                [headerTemplate]=\"headerTemplate\" [detailTemplate]=\"detailTemplate\">\n            </app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [groups]=\"groups\"\n                    [showStt]=\"true\" pageSize=\"5\" additionalSearchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #ngayYeuCauTemplate let-dataItem>\n                {{dataItem.NgayYeuCauDisplay}}\n            </ng-template>\n\n            <ng-template #ngayDuyetTemplate let-dataItem>\n                {{dataItem.NgayDuyetDisplay}}\n            </ng-template>\n\n            <ng-template #tinhTrangTemplate let-dataItem>\n                <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                    <span>Chờ duyệt</span>\n                </label>\n                <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                    <span>Đã duyệt</span>\n                </label>\n                <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n                    <span>Từ chối</span>\n                </label>\n            </ng-template>\n            <ng-template #soPhieuTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip>\n                    <a (click)=\"chinhSua(dataItem.Id)\">\n                        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                            {{dataItem.SoPhieu}}</p>\n                    </a>\n                </div>\n            </ng-template>\n\n            <ng-template #khoXuatTemplate let-dataItem>\n                <div kendoTooltip>\n                    <a (click)=\"chinhSua(dataItem.Id)\">\n                        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.KhoXuat}}\">\n                            {{dataItem.TenKhoXuat}}</p>\n                    </a>\n                </div>\n            </ng-template>\n\n            <ng-template #khoNhapTemplate let-dataItem>\n                <div kendoTooltip>\n                    <a (click)=\"chinhSua(dataItem.Id)\">\n                        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.KhoNhap}}\">\n                            {{dataItem.TenKhoNhap}}</p>\n                    </a>\n                </div>\n            </ng-template>\n\n            <ng-template #ngayDieuTriTemplate let-dataItem>\n                {{dataItem.NgayDieuTriDisplay}}\n            </ng-template>\n\n            <ng-template #ngayTraTemplate let-dataItem>\n                {{dataItem.NgayTraDisplay}}\n            </ng-template>\n\n            <ng-template #hsdTemplate let-dataItem>\n                {{dataItem.HanSuDungDisplay}}\n            </ng-template>\n\n            <ng-template #slDieuChuyenTemplate let-dataItem>\n                <span>{{dataItem.SoLuongDieuChuyen | number:'1.0':'vi-VN' }}</span>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox name=\"chua-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"dieuChuyenKhoNoiBoDuocPham.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"tu-choi-duyet\" (modelChange)=\"trangThaiCheckBox($event,'tuchoiduyet')\"\n                        class=\"ml-2\" value=\"coduyet\" [(model)]=\"dieuChuyenKhoNoiBoDuocPham.TuChoiDuyet\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"da-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"dieuChuyenKhoNoiBoDuocPham.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"dieuChuyenKhoNoiBoDuocPham.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n                        fxFlex.sm=\"auto\" [(model)]=\"dieuChuyenKhoNoiBoDuocPham.RangeFromDate\"\n                        label=\"Yêu cầu từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"xuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button (click)=\"taoYeuCau()\" class=\"ml-4 right\" style=\"right: 20px;\" color=\"primary\" fxFlex=\"none\"\n                        mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}}</strong>\n            </ng-template>\n            \n            <ng-template #actionTemplate let-dataItem>\n                <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In phiếu</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang == 0\" (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                            <span>Sửa</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang == 0\" (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.html":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.html ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauDieuChuyenDuocPham.LyDoKhongDuyet}}</h4>\n    </div>\n\n    <app-combobox *ngIf=\"isCreate\" id=\"KhoXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"yeuCauDieuChuyenDuocPham.KhoXuatId\" [required]=\"true\" autoSelectFirstItem=\"true\" bind=\"true\"\n        [modelText]=\"yeuCauDieuChuyenDuocPham.TenKhoXuat\" label=\"Kho xuất\" (modelChange)=\"TimkiemNangCao()\"\n        [disabled]=\"disabled\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauDieuChuyenDuocPham.KhoXuatId +'}', Take: 50}\"\n        url=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetKhoTongCap2VaNhaThuocs\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"!isCreate\" id=\"KhoXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"yeuCauDieuChuyenDuocPham.KhoXuatId\" [required]=\"true\"\n        [modelText]=\"yeuCauDieuChuyenDuocPham.TenKhoXuat\" label=\"Kho xuất\" (modelChange)=\"TimkiemNangCao()\"\n        [disabled]=\"disabled\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauDieuChuyenDuocPham.KhoXuatId +'}', Take: 50}\"\n        url=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetKhoTongCap2VaNhaThuocs\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"KhoNhapId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"yeuCauDieuChuyenDuocPham.KhoNhapId\"\n        [modelText]=\"yeuCauDieuChuyenDuocPham.TenKhoNhap\" label=\"Kho nhập\" (modelChange)=\"khoNhapChangeChange()\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauDieuChuyenDuocPham.KhoNhapId +'}', Take: 50}\"\n        url=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetKhoTongCap2VaNhaThuocs\" [required]=\"true\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-checkbox id=\"HienThiCaThuocHetHan\" name=\"HienThiCaThuocHetHan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Thuốc hết hạn sử dụng\" [(model)]=\"yeuCauDieuChuyenDuocPham.HienThiCaThuocHetHan\"\n        (modelChange)=\"TimkiemNangCao()\" [disabled]=\"!isCreate\" style=\"margin-top:20px\">\n    </app-checkbox>\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"yeuCauDieuChuyenDuocPham.NguoiXuatId\"\n        [required]=\"true\" [modelText]=\"yeuCauDieuChuyenDuocPham.TenNguoiXuat\" label=\"Người xuất\"\n        url=\"YeuCauLinhDuocPham/GetCurrentUser\" [disabled]=\"true\"\n        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox id=\"NguoiNhapId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"yeuCauDieuChuyenDuocPham.NguoiNhapId\"\n        [required]=\"true\" [modelText]=\"yeuCauDieuChuyenDuocPham.TenNguoiNhap\" label=\"Người nhập\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        url=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetNguoiNhap\"\n        [queryInfo]=\"{ParameterDependencies:'{NguoiNhapId:' + yeuCauDieuChuyenDuocPham.NguoiNhapId +'}', Take: 50}\"\n        [validationerror]=\"'NguoiNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n    \n\n\n    <app-combobox *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        id=\"NhanVienDuyetId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"yeuCauDieuChuyenDuocPham.NhanVienDuyetId\"\n        [modelText]=\"yeuCauDieuChuyenDuocPham.TenNhanVienDuyet\" label=\"Người duyệt\" [disabled]=\"true\"\n        [queryInfo]=\"{ParameterDependencies:'{NhanVienDuyetId:' + yeuCauDieuChuyenDuocPham.NhanVienDuyetId +'}', Take: 50}\"\n        url=\"XuatKhoDieuChuyenKhoNoiBoDuocPham/GetNguoiNhap\">\n    </app-combobox>\n\n    <app-datetimepicker *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n        id=\"NgayDuyet\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày duyệt\" [(model)]=\"yeuCauDieuChuyenDuocPham.NgayDuyet\"\n        [disabled]=\"true\">\n    </app-datetimepicker>\n\n\n\n</div>\n\n<div style=\"height: 20px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n    </h3>\n\n    <!-- GRID DATA 1 -->\n    <!-- <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" [style.display]=\"isCreate ? 'block' : 'none'\"> -->\n    <div *ngIf=\"isCreate\" fxFlex=\"100%\" fxLayoutAlign=\"end center\" fxLayoutGap=\"16px grid\">\n        <app-grid #gridDuocPhamDieuChuyen fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\"\n            [documentType]=\"documentType\" [urlGetData]=\"urlGetData\" (extOnDataBound)=\"onDataBoundChildGrid1($event)\"\n            [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n            [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\" [headerTemplate]=\"headerTemplate\" [groups]=\"groups\">\n        </app-grid>\n\n        <!-- GRID DATA 2 -->\n        <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n            [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n            [gridDataSource]=\"gridDataSourceThuocDieuChuyen\">\n        </app-grid>\n    </div>\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\"\n                    [(ngModel)]=\"yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.SearchString\"\n                    (keyup)=\"onKeyGrid1($event)\" (ngModelChange)=\"searchChanges($event)\"\n                    placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKeyGrid2($event)\"\n                    (ngModelChange)=\"clearSearchGrid2($event)\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n    <!-- GRID DATA 3 -->\n\n    <div *ngIf=\"!isCreate\" fxFlex=\"100%\" fxLayoutAlign=\"end center\">\n\n        <app-grid *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == null\"\n            #gridDuocPhamDieuChuyenDaTaoYeuCau fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumnsUpdate\"\n            [documentType]=\"documentType\" [urlGetData]=\"urlGetDataDaTaoYeuCau\"\n            (extOnDataBound)=\"onDataBoundChildGrid3($event)\" [urlGetTotalPage]=\"urlGetTotalDaTaoYeuCau\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n            pageSize=\"50\" height=\"500\" [headerTemplate]=\"headerTemplateDaTaoYeuCau\" [groups]=\"groups\">\n        </app-grid>\n\n        <app-grid *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\"\n            #gridDuocPhamDieuChuyenDaTaoYeuCau fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumnsUpdateDuyet\"\n            [documentType]=\"documentType\" [urlGetData]=\"urlGetDataDaTaoYeuCau\"\n            (extOnDataBound)=\"onDataBoundChildGrid3($event)\" [urlGetTotalPage]=\"urlGetTotalDaTaoYeuCau\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n            pageSize=\"50\" height=\"500\" [headerTemplate]=\"headerTemplateDaTaoYeuCau\" [groups]=\"groups\">\n        </app-grid>\n\n        <ng-template #headerTemplateDaTaoYeuCau>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\"\n                        [(ngModel)]=\"yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.SearchString\"\n                        (keyup)=\"onKeyGridDaTaoYeuCau($event)\" (ngModelChange)=\"searchChangesDaTaoYeuCau($event)\"\n                        placeholder=\"Nhập từ khóa...\" />\n                </div>\n            </div>\n        </ng-template>\n    </div>\n\n    <!-- GRID DATA 1  CONTENT-->\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongDieuChuyen\"\n            [max]=\"dataItem.SoLuongTon\" (modelChange)=\"soLuongXuatChange($event, dataItem)\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"dieuChuyenTungDuocPhamGrid1(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\"\n                kendoTooltip title=\"Chọn: {{dataItem.Ten}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"dieuChuyenDuocPhamTheoNhomGrid(dataItem,1)\" color=\"primary\" kendoTooltip\n                title=\"Chọn chóm: {{value}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n                type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n\n    <!-- GRID DATA 2  CONTENT-->\n    <ng-template #soLuongXuatGrid2Template let-dataItem let-rowIndex=\"rowIndex\">\n        <app-textboxnumeric *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai == null\"\n            class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongDieuChuyen\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"soLuongXuatChange($event, dataItem)\"\n            [validationerror]=\"'YeuCauDieuChuyenDuocPhamChiTiets['+rowIndex+'].SoLuongDieuChuyen' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <div *ngIf=\"trangThaiVo != undefined && trangThaiVo != null  && trangThaiVo.TrangThai != null\">\n            {{dataItem.SoLuongDieuChuyen | number:'1.0':'vi-VN' }}\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"dieuChuyenDuocPhamTheoNhomGrid(dataItem,2)\" color=\"primary\" kendoTooltip\n            title=\"Bỏ chọn nhóm: {{value}}\" class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n            type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"dieuChuyenTungDuocPhamGrid2(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\"\n            kendoTooltip title=\"Bỏ chọn: {{dataItem.Ten}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n            mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n\n    <ng-template #actionTemplate let-dataItem>\n        <div class=\"text-center\" kendoTooltip>\n            <button color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                (click)=\"xoaDuocPham(dataItem)\">\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n\n    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaFooterTemplate>\n        <span style=\"float:right\">Tổng tiền xuất </span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid1Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',1) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid2Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',2) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid3Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',3) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất kho',Path:''}\n                ,{Title:'Chi tiết yêu cầu điều chuyển kho nội bộ',Path:'/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham',queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi tiết yêu cầu điều chuyển kho nội bộ</h2>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-dieu-chuyen-kho-noi-bo-duoc-pham-shared #temp [isCreate]=\"false\" [trangThaiVo]=\"trangThaiVo\"\n                    [validationErrors]=\"validationErrors\">\n                </app-dieu-chuyen-kho-noi-bo-duoc-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"inPhieu()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-arrow-left\"></i> In Phiếu</button>\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay lại</button>\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai== null\" type=\"button\"\n                        (click)=\"guiLaiYeuCauDieuChuyenThuoc()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Lưu</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tY3JlYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXGRpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtXFxkaWV1LWNodXllbi1raG8tbm9pLWJvLWR1b2MtcGhhbS1jcmVhdGVcXGRpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tY3JlYXRlL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLWNyZWF0ZS9kaWV1LWNodXllbi1raG8tbm9pLWJvLWR1b2MtcGhhbS1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamCreateComponent", function() { return DieuChuyenKhoNoiBoDuocPhamCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_shared_dieu_chuyen_kho_noi_bo_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.ts");




















let DieuChuyenKhoNoiBoDuocPhamCreateComponent = class DieuChuyenKhoNoiBoDuocPhamCreateComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.isCreate = false;
        this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["TrangThaiTaoPhieuLinh"]();
        this.yeuCauDieuChuyenDuocPhamPhieuIn = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_18__["YeuCauDieuChuyenDuocPhamPhieuIn"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].TraThuocTuBenhNhan;
        this.yeuCauDieuChuyenDuocPham = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_18__["YeuCauDieuChuyenDuocPham"]();
        this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
        this.trangThaiVo.TrangThai = null;
    }
    addingPage() {
        this.popupAddingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupAddingData() {
        if (this.popupAddingData != undefined && this.popupAddingData != null) {
            this.popupAddingData.close();
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    guiYeuCauDieuChuyenThuoc() {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn thêm dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.yeuCauDieuChuyenDuocPham = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                    self.addingPage();
                    self.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/ThemYeuCauDieuChuyenThuoc", self.yeuCauDieuChuyenDuocPham).subscribe((resultData) => {
                        self.closePopupAddingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                        // self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
                        self.loadingPage();
                        self.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = resultData;
                        self.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(resData => {
                            if (resData != undefined && resData != null) {
                                self.closePopupLoadingData();
                                self.dialog.open(_dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_19__["DieuChuyenKhoNoiBoDuocPhamPopupComponent"], {
                                    disableClose: true,
                                    width: "1200px",
                                    data: resData,
                                }).afterClosed().subscribe(() => {
                                    // self.router.navigate(['/nhap-xuat/duoc-pham/tu-benh-nhan/yeu-cau-tra-duoc-pham']);
                                    self.router.navigate(['/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham']);
                                });
                            }
                        }, (err) => {
                            self.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                self.notificationService.showError(err.Message);
                            }
                            self.closePopupLoadingData();
                        });
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupAddingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    cancel() {
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
DieuChuyenKhoNoiBoDuocPhamCreateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_dieu_chuyen_kho_noi_bo_duoc_pham_shared_dieu_chuyen_kho_noi_bo_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_17__["DieuChuyenKhoNoiBoDuocPhamSharedComponent"], { static: true })
], DieuChuyenKhoNoiBoDuocPhamCreateComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
], DieuChuyenKhoNoiBoDuocPhamCreateComponent.prototype, "keyEvent", null);
DieuChuyenKhoNoiBoDuocPhamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dieu-chuyen-kho-noi-bo-duoc-pham-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-create.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.scss")).default]
    })
], DieuChuyenKhoNoiBoDuocPhamCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.scss ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLWxpc3QvZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamListComponent", function() { return DieuChuyenKhoNoiBoDuocPhamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.ts");



























let DieuChuyenKhoNoiBoDuocPhamListComponent = class DieuChuyenKhoNoiBoDuocPhamListComponent {
    constructor(apiService, authService, dialog, location, route, router, notificationService) {
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.sort = [{
                field: 'NgayYeuCau',
                dir: 'desc'
            }];
        this.sortChild = [{
                field: 'Ten',
                dir: 'desc'
            }];
        this.validationErrors = [];
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormControl"];
        this.baseRoute = "/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham";
        this.yeuCauDieuChuyenDuocPhamPhieuIn = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_24__["YeuCauDieuChuyenDuocPhamPhieuIn"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhSachDieuChuyenNoiBoDuocPham;
        this.dieuChuyenKhoNoiBoDuocPham = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_24__["DieuChuyenKhoNoiBoDuocPhamGrid"]();
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridChild = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridChildAsync";
        this.holdQuery = null;
        this.additionalSearchString = null;
        this.groups = [{ field: 'Nhom' }];
    }
    ngOnInit() {
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
            { Field: "TenKhoXuat", Title: "Kho Xuất", Width: 170, Sortable: true, Template: this.khoXuatTemplate },
            { Field: "TenKhoNhap", Title: "Kho Nhập", Width: 170, Sortable: true, Template: this.khoNhapTemplate },
            { Field: "TenNhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
            { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Sortable: true, Template: this.tinhTrangTemplate },
            { Field: "TenNhanVienDuyet", Title: "Người duyệt", Width: 150, Sortable: true },
            { Field: "NgayDuyet", Title: "Ngày duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];
        this.gridChildColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: false, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ten", Title: "Dược phẩm", Width: 120, Sortable: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 150, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
            { Field: "SoLo", Title: "Số lô", Width: 150, Sortable: false },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 150, Sortable: false, Template: this.hsdTemplate },
            { Field: "SoLuongDieuChuyen", Title: "Số lượng điều chuyển", Width: 150, Sortable: false, Template: this.slDieuChuyenTemplate },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].getItem("additionalSearchStringdieuChuyenKhoNoiBoDuocPham");
                if (additionalSearchString != null) {
                    this.dieuChuyenKhoNoiBoDuocPham = JSON.parse(additionalSearchString);
                    if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay != null
                        && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay != 'null' && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay != '') {
                        this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate = new Date(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate);
                    }
                    else {
                        this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate = null;
                    }
                    if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay != null
                        && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay != 'null' && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay != '') {
                        this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate = new Date(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate);
                    }
                    else {
                        this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate = null;
                    }
                    // this.addtionStringDefault = additionalSearchString;
                    this.gridChild.additionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].removeItem("additionalSearchStringdieuChuyenKhoNoiBoDuocPham");
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    trangThaiCheckBox(event, tinhTrang) {
        if (tinhTrang == "choduyet") {
            this.dieuChuyenKhoNoiBoDuocPham.ChoDuyet = event;
        }
        if (tinhTrang == "daduyet") {
            this.dieuChuyenKhoNoiBoDuocPham.DaDuyet = event;
        }
        if (tinhTrang == "tuchoiduyet") {
            this.dieuChuyenKhoNoiBoDuocPham.TuChoiDuyet = event;
        }
        this.timKiem();
    }
    changeNgayBatDauRange() {
        this.timKiem();
    }
    blur() {
        this.timKiem();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.timKiem();
        }
    }
    timKiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate != null && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate != null) {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.TuNgay = null;
        }
        if (this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate != null && this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate != null) {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.dieuChuyenKhoNoiBoDuocPham.RangeFromDate.DenNgay = null;
        }
        var queryString = JSON.stringify(this.dieuChuyenKhoNoiBoDuocPham);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].setItem("additionalSearchStringdieuChuyenKhoNoiBoDuocPham", queryString);
        this.gridChild.search();
    }
    chinhSua(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoa(id) {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn xóa dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Delete)) {
                    this.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/XoaYeuCauDieuChuyenThuoc?id=" + id).subscribe(() => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        this.timKiem();
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
    xuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("XuatKhoDieuChuyenKhoNoiBoDuocPham/ExportYeuCauDieuChuyenThuoc", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DieuChuyenKhoNoiBo" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    taoYeuCau() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    inPhieu(id) {
        var self = this;
        self.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
        self.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = id;
        self.loadingPage();
        self.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.closePopupLoadingData();
                self.dialog.open(_dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_26__["DieuChuyenKhoNoiBoDuocPhamPopupComponent"], {
                    disableClose: true,
                    width: "1200px",
                    data: resData,
                }).afterClosed().subscribe(() => {
                    // self.location.back();
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
};
DieuChuyenKhoNoiBoDuocPhamListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoXuatTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "khoXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoNhapTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "khoNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayYeuCauTemplate", { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayDuyetTemplate", { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("hsdTemplate", { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "hsdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("slDieuChuyenTemplate", { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "slDieuChuyenTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"], { static: true })
], DieuChuyenKhoNoiBoDuocPhamListComponent.prototype, "gridChild", void 0);
DieuChuyenKhoNoiBoDuocPhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dieu-chuyen-kho-noi-bo-duoc-pham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.scss")).default]
    })
], DieuChuyenKhoNoiBoDuocPhamListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.scss ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW1cXGRpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLXBvcHVwXFxkaWV1LWNodXllbi1raG8tbm9pLWJvLWR1b2MtcGhhbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tcG9wdXAvZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tcG9wdXAvZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.ts":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamPopupComponent", function() { return DieuChuyenKhoNoiBoDuocPhamPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let DieuChuyenKhoNoiBoDuocPhamPopupComponent = class DieuChuyenKhoNoiBoDuocPhamPopupComponent {
    constructor(sanitizer, dialogRef, data) {
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = null;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.title = "PHIẾU XUẤT KHO";
        this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
    }
    close() {
        this.dialogRef.close();
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.data);
            this.close();
        });
    }
};
DieuChuyenKhoNoiBoDuocPhamPopupComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DieuChuyenKhoNoiBoDuocPhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DieuChuyenKhoNoiBoDuocPhamPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-routing.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-routing.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamRoutingModule", function() { return DieuChuyenKhoNoiBoDuocPhamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_create_dieu_chuyen_kho_noi_bo_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_list_dieu_chuyen_kho_noi_bo_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_update_dieu_chuyen_kho_noi_bo_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.ts");









const routes = [
    {
        path: '',
        component: _dieu_chuyen_kho_noi_bo_duoc_pham_list_dieu_chuyen_kho_noi_bo_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_7__["DieuChuyenKhoNoiBoDuocPhamListComponent"],
        data: {
            title: 'Danh Sách Dược Phẩm Điều Chuyển Kho Nội Bộ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachDieuChuyenNoiBoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _dieu_chuyen_kho_noi_bo_duoc_pham_create_dieu_chuyen_kho_noi_bo_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_6__["DieuChuyenKhoNoiBoDuocPhamCreateComponent"],
        data: {
            title: 'Tạo Yêu Cầu Dược Phẩm Điều Chuyển Kho Nội Bộ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachDieuChuyenNoiBoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _dieu_chuyen_kho_noi_bo_duoc_pham_update_dieu_chuyen_kho_noi_bo_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_8__["DieuChuyenKhoNoiBoDuocPhamUpdateComponent"],
        data: {
            title: 'Chi Tiết Yêu Cầu Dược Phẩm Điều Chuyển Kho Nội Bộ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachDieuChuyenNoiBoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let DieuChuyenKhoNoiBoDuocPhamRoutingModule = class DieuChuyenKhoNoiBoDuocPhamRoutingModule {
};
DieuChuyenKhoNoiBoDuocPhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DieuChuyenKhoNoiBoDuocPhamRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLXNoYXJlZC9kaWV1LWNodXllbi1raG8tbm9pLWJvLWR1b2MtcGhhbS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamSharedComponent", function() { return DieuChuyenKhoNoiBoDuocPhamSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model.ts");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/chevron-right */ "./node_modules/@iconify/icons-ic/chevron-right.js");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/last-page */ "./node_modules/@iconify/icons-ic/last-page.js");
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/chevron-left */ "./node_modules/@iconify/icons-ic/chevron-left.js");
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/first-page */ "./node_modules/@iconify/icons-ic/first-page.js");
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");






















let DieuChuyenKhoNoiBoDuocPhamSharedComponent = class DieuChuyenKhoNoiBoDuocPhamSharedComponent {
    constructor(apiService, notificationService, authService, ref, dialog, route) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.dialog = dialog;
        this.route = route;
        this.duocPhamBenhVienTheoNhom = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_12__["DuocPhamBenhVienTheoNhom"]();
        this.icRight = _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icLeft = _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icRightLast = _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icLeftLast = _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControl"];
        this.searchCtrl3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControl"];
        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_12__["YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch"]();
        this.urlGetData = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridAsyncDuocPhamDaChon";
        this.urlGetTotal = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridAsyncDuocPhamDaChon";
        this.additionalSearchString = null;
        this.urlGetDataDaTaoYeuCau = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetDataForGridAsyncDaTaoYeuCau";
        this.urlGetTotalDaTaoYeuCau = "XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTotalPageForGridAsyncDaTaoYeuCau";
        this.lstXuatKhoSearch = new Array();
        this.lstXuatKho = new Array();
        this.lstXuatKhoTheoNhom = [];
        this.disabled = false;
        this.groups = [{ field: 'TenNhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
        this.searchString2 = null;
        this.popupLoadingData = null;
        this.dataToSumThanhTienGrid1 = [];
        this.dataToSumThanhTienGrid2 = [];
        this.dataToSumThanhTienGrid3 = [];
        this.isDataDefault = true;
        this.gridColumnsUpdate = [];
        this.gridColumnsUpdateDuyet = [];
        this.gridColumns = [];
        this.gridResultColumns = [];
        this.gridDataSourceThuocDieuChuyen = {
            data: [],
            total: 0
        };
        this.yeuCauDieuChuyenDuocPhamId = 0;
    }
    totalThanhTien(field, gridNumber) {
        if (gridNumber == 1) {
            switch (field) {
                case 'ThanhTien':
                    return this.dataToSumThanhTienGrid1.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
        else if (gridNumber == 2) {
            switch (field) {
                case 'ThanhTien':
                    return this.dataToSumThanhTienGrid2.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
        else {
            switch (field) {
                case 'ThanhTien':
                    return this.dataToSumThanhTienGrid3.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    ;
    ngOnInit() {
        // console.log("this.isCreate: ", this.trangThaiVo)
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].TraThuocTuBenhNhan;
        this.yeuCauDieuChuyenDuocPham = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_12__["YeuCauDieuChuyenDuocPham"]();
        this.getCurrentUser();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.yeuCauDieuChuyenDuocPhamId = id;
        }
        this.gridColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
            { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },
            { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate },
        ];
        this.gridResultColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
            { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
            { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
            { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid2Template, },
        ];
        this.gridColumnsUpdate = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 50, Sortable: false },
            { Field: "SoLuongDieuChuyen", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid3Template, },
            { Field: "Action", Title: "", Width: 30, Sortable: false, Template: this.actionTemplate },
        ];
        this.gridColumnsUpdateDuyet = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Ma", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "Ten", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatGrid2Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid3Template, },
        ];
    }
    getCurrentUser() {
        if (this.isCreate) {
            this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.yeuCauDieuChuyenDuocPham.NguoiXuatId = resultData.NhanVienYeuCauId;
                    this.yeuCauDieuChuyenDuocPham.TenNguoiXuat = resultData.HoTen;
                }
            });
        }
    }
    khoNhapChangeChange() {
        this.validationErrors = [];
    }
    onKeyGridDaTaoYeuCau(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao(false, this.yeuCauDieuChuyenDuocPhamId);
        }
    }
    onKeyGrid1(event) {
        if (event.key == "Enter") {
            this.TimkiemNangCao();
        }
    }
    onKeyGrid2(event) {
        if (event.key == "Enter") {
            this.timKiemGrid2();
        }
    }
    TimkiemNangCao(laGrid1 = true, yeuCauDieuChuyenDuocPhamId = null) {
        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.KhoXuatId = this.yeuCauDieuChuyenDuocPham.KhoXuatId;
        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.HienThiCaThuocHetHan = this.yeuCauDieuChuyenDuocPham.HienThiCaThuocHetHan;
        if (laGrid1) {
            var queryString = JSON.stringify(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch);
            this.gridDuocPhamDieuChuyen._additionalSearchString = queryString;
            this.gridDuocPhamDieuChuyen.search();
        }
        else {
            this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.YeuCauDieuChuyenDuocPhamId = yeuCauDieuChuyenDuocPhamId;
            var queryString = JSON.stringify(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch);
            this.gridDuocPhamDieuChuyenDaTaoYeuCau._additionalSearchString = queryString;
            this.gridDuocPhamDieuChuyenDaTaoYeuCau.search();
        }
    }
    onDataBoundChildGrid1(data) {
        if (data != undefined && data != null) {
            this.dataToSumThanhTienGrid1 = data.Data;
        }
    }
    clearSearchGrid2(event) {
        if (event != undefined && (event == null || event == "")) {
            if (this.searchString2 == "" || this.searchString2 == null) {
                this.lstXuatKhoSearch = JSON.parse(JSON.stringify(this.lstXuatKho));
                this.setDataXuatKho();
            }
        }
    }
    onDataBoundChildGrid3(data) {
        if (data != undefined && data != null) {
            this.dataToSumThanhTienGrid3 = data.Data;
            if (this.isDataDefault) {
                this.lstXuatKho = data.Data;
                this.isDataDefault = false;
            }
        }
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.TimkiemNangCao();
        }
    }
    searchChangesDaTaoYeuCau(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.TimkiemNangCao(false, this.yeuCauDieuChuyenDuocPhamId);
        }
    }
    soLuongXuatChange(soLuong, dataItem) {
        if (soLuong != undefined && soLuong != null) {
            dataItem.ThanhTien = soLuong * dataItem.DonGia;
        }
        else {
            dataItem.ThanhTien = 0;
        }
    }
    dieuChuyenTungDuocPhamGrid1(dataItem) {
        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.push(dataItem);
        this.lstXuatKhoSearch.push(dataItem);
        this.lstXuatKho.push(dataItem);
        this.timKiemGrid2();
    }
    dieuChuyenTungDuocPhamGrid2(dataItem) {
        this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
        this.lstXuatKhoSearch = this.lstXuatKhoSearch.filter(o => o != dataItem);
        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.splice(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.findIndex((x) => x == dataItem), 1);
        this.timKiemGrid2();
    }
    timKiemGrid2() {
        if (this.searchString2 == undefined || this.searchString2 == null) {
            this.setDataXuatKho();
        }
        else {
            let search = this.searchString2.toLowerCase().trim();
            this.lstXuatKhoSearch = this.lstXuatKho.filter(o => o.Ten.toLowerCase().trim().indexOf(search) != -1
                || o.Ma.toLowerCase().trim().indexOf(search) != -1);
            this.setDataXuatKho();
        }
    }
    setDataXuatKho() {
        this.TimkiemNangCao();
        this.gridDataSourceThuocDieuChuyen = [];
        let dataGrid = this.lstXuatKhoSearch;
        this.dataToSumThanhTienGrid2 = this.lstXuatKhoSearch;
        this.gridDataSourceThuocDieuChuyen = {
            data: dataGrid,
            total: dataGrid.length,
        };
        if (this.gridDataSourceThuocDieuChuyen.data.length > 0) {
            this.disabled = true;
        }
        else {
            this.disabled = false;
        }
        this.refreshGrid();
    }
    refreshGrid() {
        if (this.gridResult != undefined) {
            this.gridResult.setDataSource();
        }
    }
    addingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closepopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    dieuChuyenDuocPhamTheoNhomGrid(dataItem, gridNumber) {
        let model = {
            YeuCauDieuChuyenDuocPhamChiTiets: dataItem.items
        };
        this.addingPage();
        this.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/DieuChuyenDuocPhamTheoNhom", model).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                resultData.YeuCauDieuChuyenDuocPhamChiTiets.forEach((element) => {
                    if (gridNumber == 1) {
                        this.lstXuatKhoSearch.push(element);
                        this.lstXuatKho.push(element);
                        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.push(element);
                    }
                    else {
                        this.lstXuatKho.splice(this.lstXuatKho.findIndex((x) => x == element), 1);
                        this.lstXuatKhoSearch.splice(this.lstXuatKhoSearch.findIndex((x) => x == element), 1);
                        this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.splice(this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.findIndex((x) => x == element), 1);
                    }
                });
                this.closepopupLoadingData();
                this.timKiemGrid2();
            }
        });
    }
    xoaDuocPham(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.yeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch.DuocPhamBenhViens.push(dataItem);
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                this.TimkiemNangCao(false, this.yeuCauDieuChuyenDuocPhamId);
                this.validationErrors = [];
            }
        });
    }
    getById(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View)) {
            self.addingPage();
            self.apiService.get("XuatKhoDieuChuyenKhoNoiBoDuocPham/GetYeuCauDieuChuyenThuoc?id=" + id).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    self.disabled = true;
                    self.closepopupLoadingData();
                    self.yeuCauDieuChuyenDuocPham = resultData;
                    self.TimkiemNangCao(false, resultData.Id);
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
                self.closepopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    getSharedData() {
        this.yeuCauDieuChuyenDuocPham.YeuCauDieuChuyenDuocPhamChiTiets = new Array();
        if (this.gridDuocPhamDieuChuyenDaTaoYeuCau != undefined) {
            var lstDataThuocCurrent = this.gridDuocPhamDieuChuyenDaTaoYeuCau.getAllDataFromDatasource();
        }
        this.lstXuatKho.forEach(element => {
            let yeuCauDieuChuyenDuocPhamChiTiet = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_12__["YeuCauDieuChuyenDuocPhamChiTiet"]();
            if (lstDataThuocCurrent != undefined && lstDataThuocCurrent.some((x) => x.DuocPhamBenhVienId == element.DuocPhamBenhVienId
                && x.LaDuocPhamBHYT == element.LaDuocPhamBHYT
                && x.SoLuongDieuChuyen == element.SoLuongDieuChuyen
                && x.Ten == element.Ten
                && x.Ma == element.Ma
                && x.SoDangKy == element.SoDangKy)) { // tìm thấy
                yeuCauDieuChuyenDuocPhamChiTiet.WillDelete = false;
            }
            else {
                yeuCauDieuChuyenDuocPhamChiTiet.WillDelete = true;
            }
            yeuCauDieuChuyenDuocPhamChiTiet.DonGiaNhap = element.DonGiaNhap;
            yeuCauDieuChuyenDuocPhamChiTiet.DuocPhamBenhVienId = element.DuocPhamBenhVienId;
            yeuCauDieuChuyenDuocPhamChiTiet.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
            yeuCauDieuChuyenDuocPhamChiTiet.SoLuongDieuChuyen = element.SoLuongDieuChuyen;
            yeuCauDieuChuyenDuocPhamChiTiet.KhoXuatId = this.yeuCauDieuChuyenDuocPham.KhoXuatId;
            yeuCauDieuChuyenDuocPhamChiTiet.SoLo = element.SoLo;
            yeuCauDieuChuyenDuocPhamChiTiet.HanSuDung = element.HanSuDung;
            this.yeuCauDieuChuyenDuocPham.YeuCauDieuChuyenDuocPhamChiTiets.push(yeuCauDieuChuyenDuocPhamChiTiet);
        });
        return this.yeuCauDieuChuyenDuocPham;
    }
};
DieuChuyenKhoNoiBoDuocPhamSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamDieuChuyen', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "gridDuocPhamDieuChuyen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridResult', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "gridResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamDieuChuyenDaTaoYeuCau', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], static: false })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "gridDuocPhamDieuChuyenDaTaoYeuCau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhom2GroupHeaderTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "tenNhom2GroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid2Template', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "soLuongXuatGrid2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "transferTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate2', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "transferTemplate2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "hsdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid1Template', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "thanhTienFooterGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid2Template', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "thanhTienFooterGrid2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid3Template', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "thanhTienFooterGrid3Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid1Template', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "soLuongXuatGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "validationErrors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DieuChuyenKhoNoiBoDuocPhamSharedComponent.prototype, "trangThaiVo", void 0);
DieuChuyenKhoNoiBoDuocPhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.scss")).default]
    })
], DieuChuyenKhoNoiBoDuocPhamSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status-yeu-cau-linh {\n  margin-left: auto;\n}\n\n.status-yeu-cau-linh.ycl-cho-duyet {\n  color: orange;\n}\n\n.status-yeu-cau-linh.ycl-da-duyet {\n  color: green;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tdXBkYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXGRpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtXFxkaWV1LWNodXllbi1raG8tbm9pLWJvLWR1b2MtcGhhbS11cGRhdGVcXGRpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0vZGlldS1jaHV5ZW4ta2hvLW5vaS1iby1kdW9jLXBoYW0tdXBkYXRlL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtL2RpZXUtY2h1eWVuLWtoby1ub2ktYm8tZHVvYy1waGFtLXVwZGF0ZS9kaWV1LWNodXllbi1raG8tbm9pLWJvLWR1b2MtcGhhbS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLXlldS1jYXUtbGluaCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtY2hvLWR1eWV0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnN0YXR1cy15ZXUtY2F1LWxpbmgueWNsLWRhLWR1eWV0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5zdGF0dXMteWV1LWNhdS1saW5oIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5zdGF0dXMteWV1LWNhdS1saW5oLnljbC1jaG8tZHV5ZXQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uc3RhdHVzLXlldS1jYXUtbGluaC55Y2wtZGEtZHV5ZXQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamUpdateComponent", function() { return DieuChuyenKhoNoiBoDuocPhamUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_shared_dieu_chuyen_kho_noi_bo_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.ts");




















let DieuChuyenKhoNoiBoDuocPhamUpdateComponent = class DieuChuyenKhoNoiBoDuocPhamUpdateComponent {
    constructor(apiService, dialog, notificationService, authService, route, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.route = route;
        this.ref = ref;
        this.location = location;
        this.isHideDuyet = false;
        this.popupSavingData = null;
        this.popupLoadingData = null;
        this.isCreate = false;
        this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_15__["TrangThaiTaoPhieuLinh"]();
        this.yeuCauDieuChuyenDuocPhamPhieuIn = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_18__["YeuCauDieuChuyenDuocPhamPhieuIn"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_13__["DocumentType"].DanhSachDieuChuyenNoiBoDuocPham;
        this.yeuCauDieuChuyenDuocPham = new _dieu_chuyen_kho_noi_bo_duoc_pham_model__WEBPACK_IMPORTED_MODULE_18__["YeuCauDieuChuyenDuocPham"]();
        this.yeuCauDieuChuyenDuocPhamPhieuIn.HostingName = window.location.protocol + "//" + window.location.host;
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getTrangThaiPhieuTraDuocPham(id);
            this.yeuCauDieuChuyenDuocPhamPhieuIn.YeuCauDieuChuyenDuocPhamId = id;
        }
    }
    getTrangThaiPhieuTraDuocPham(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
            self.apiService.get("XuatKhoDieuChuyenKhoNoiBoDuocPham/GetTrangThaiYeuCauDieuChuyen?yeuCauDieuChuyenDuocPhamId=" + id).subscribe((result) => {
                this.trangThaiVo = result;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closepopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    guiLaiYeuCauDieuChuyenThuoc() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.yeuCauDieuChuyenDuocPham = self.shared.getSharedData();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn lưu dữ liệu này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                    self.savingPage();
                    self.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/CapNhatYeuCauDieuChuyenThuoc", self.yeuCauDieuChuyenDuocPham).subscribe((resultData) => {
                        self.closepopupSavingData();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                        // self.location.back();
                        window.location.reload();
                        // self.loadingPage();
                        // let objIn = {
                        //   YeuCauTraDuocPhamTuBenhNhanId: resultData,
                        //   HostingName: window.location.protocol + "//" + window.location.host,
                        // };
                        // self.apiService.post<any>("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", objIn).subscribe(
                        //   resData => {
                        //     if (resData != undefined && resData != null) {
                        //       self.closePopupLoadingData();
                        //       self.dialog.open(DieuChuyenKhoNoiBoDuocPhamPopupComponent, {
                        //         disableClose: true,
                        //         width: "1200px",
                        //         data: resData,
                        //       }).afterClosed().subscribe(() => {
                        //         self.location.back();
                        //       });
                        //     }
                        //   },
                        //   (err: ApiError) => {
                        //     self.validationErrors = err.ValidationErrors;
                        //     if (err.Message != "Validation Failed") {
                        //       self.notificationService.showError(err.Message);
                        //     }
                        //     self.closePopupLoadingData();
                        //   })
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closepopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    inPhieu() {
        var self = this;
        self.loadingPage();
        self.apiService.post("XuatKhoDieuChuyenKhoNoiBoDuocPham/InPhieuXuatKhoDuocPhamDieuChuyen", self.yeuCauDieuChuyenDuocPhamPhieuIn).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.closePopupLoadingData();
                self.dialog.open(_dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_19__["DieuChuyenKhoNoiBoDuocPhamPopupComponent"], {
                    disableClose: true,
                    width: "1200px",
                    data: resData,
                }).afterClosed().subscribe(() => {
                    // self.location.back();
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
    cancel() {
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
DieuChuyenKhoNoiBoDuocPhamUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('temp', { read: _dieu_chuyen_kho_noi_bo_duoc_pham_shared_dieu_chuyen_kho_noi_bo_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_17__["DieuChuyenKhoNoiBoDuocPhamSharedComponent"], static: false })
], DieuChuyenKhoNoiBoDuocPhamUpdateComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
], DieuChuyenKhoNoiBoDuocPhamUpdateComponent.prototype, "keyEvent", null);
DieuChuyenKhoNoiBoDuocPhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dieu-chuyen-kho-noi-bo-duoc-pham-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dieu-chuyen-kho-noi-bo-duoc-pham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.scss")).default]
    })
], DieuChuyenKhoNoiBoDuocPhamUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.model.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamGrid, YeuCauDieuChuyenDuocPham, YeuCauDieuChuyenDuocPhamChiTiet, YeuCauDieuChuyenDuocPhamPhieuIn, YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch, DuocPhamBenhVienChiTietVo, DieuChuyenDuocPhamGridVo, DieuChuyenDuocPhamTheoNhomGridVo, DuocPhamBenhVienDaSuaSoLuongXuat, DuocPhamBenhVienTheoNhom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamGrid", function() { return DieuChuyenKhoNoiBoDuocPhamGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDieuChuyenDuocPham", function() { return YeuCauDieuChuyenDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDieuChuyenDuocPhamChiTiet", function() { return YeuCauDieuChuyenDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDieuChuyenDuocPhamPhieuIn", function() { return YeuCauDieuChuyenDuocPhamPhieuIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch", function() { return YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienChiTietVo", function() { return DuocPhamBenhVienChiTietVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenDuocPhamGridVo", function() { return DieuChuyenDuocPhamGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenDuocPhamTheoNhomGridVo", function() { return DieuChuyenDuocPhamTheoNhomGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienDaSuaSoLuongXuat", function() { return DuocPhamBenhVienDaSuaSoLuongXuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienTheoNhom", function() { return DuocPhamBenhVienTheoNhom; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class DieuChuyenKhoNoiBoDuocPhamGrid {
    constructor(NgayYeuCauTuFormat = null, NgayYeuCauDenFormat = null, ChoDuyet = true, DaDuyet = true, TuChoiDuyet = true, TuNgay = null, DenNgay = null, SearchString = null, RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"]()) {
        this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
        this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
        this.RangeFromDate = RangeFromDate;
    }
}
class YeuCauDieuChuyenDuocPham {
    constructor(Id = 0, KhoXuatId = null, TenKhoXuat = null, KhoNhapId = null, TenKhoNhap = null, NguoiXuatId = null, TenNguoiXuat = null, NguoiNhapId = null, TenNguoiNhap = null, DuocKeToanDuyet = null, NhanVienDuyetId = null, TenNhanVienDuyet = null, LyDoKhongDuyet = null, NgayDuyet = null, HienThiCaThuocHetHan = false, YeuCauDieuChuyenDuocPhamChiTiets = [], YeuCauDieuChuyenDuocPhamChiTietHienThis = []) {
        this.Id = Id;
        this.KhoXuatId = KhoXuatId;
        this.TenKhoXuat = TenKhoXuat;
        this.KhoNhapId = KhoNhapId;
        this.TenKhoNhap = TenKhoNhap;
        this.NguoiXuatId = NguoiXuatId;
        this.TenNguoiXuat = TenNguoiXuat;
        this.NguoiNhapId = NguoiNhapId;
        this.TenNguoiNhap = TenNguoiNhap;
        this.DuocKeToanDuyet = DuocKeToanDuyet;
        this.NhanVienDuyetId = NhanVienDuyetId;
        this.TenNhanVienDuyet = TenNhanVienDuyet;
        this.LyDoKhongDuyet = LyDoKhongDuyet;
        this.NgayDuyet = NgayDuyet;
        this.HienThiCaThuocHetHan = HienThiCaThuocHetHan;
        this.YeuCauDieuChuyenDuocPhamChiTiets = YeuCauDieuChuyenDuocPhamChiTiets;
        this.YeuCauDieuChuyenDuocPhamChiTietHienThis = YeuCauDieuChuyenDuocPhamChiTietHienThis;
    }
}
class YeuCauDieuChuyenDuocPhamChiTiet {
    constructor(
    // public Id: number = 0,
    SoLuongDieuChuyen = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, KhoXuatId = null, SoLo = null, HanSuDung = null, WillDelete = null, DonGiaNhap = null) {
        this.SoLuongDieuChuyen = SoLuongDieuChuyen;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.KhoXuatId = KhoXuatId;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
        this.WillDelete = WillDelete;
        this.DonGiaNhap = DonGiaNhap;
    }
}
class YeuCauDieuChuyenDuocPhamPhieuIn {
    constructor(YeuCauDieuChuyenDuocPhamId = 0, HostingName = null, TrangThai = null) {
        this.YeuCauDieuChuyenDuocPhamId = YeuCauDieuChuyenDuocPhamId;
        this.HostingName = HostingName;
        this.TrangThai = TrangThai;
    }
}
class YeuCauDieuChuyenDuocPhamChiTietTheoKhoXuatVoSearch {
    constructor(YeuCauDieuChuyenDuocPhamId = null, KhoXuatId = null, SearchString = null, HienThiCaThuocHetHan = false, DuocPhamBenhViens = []) {
        this.YeuCauDieuChuyenDuocPhamId = YeuCauDieuChuyenDuocPhamId;
        this.KhoXuatId = KhoXuatId;
        this.SearchString = SearchString;
        this.HienThiCaThuocHetHan = HienThiCaThuocHetHan;
        this.DuocPhamBenhViens = DuocPhamBenhViens;
    }
}
class DuocPhamBenhVienChiTietVo {
    constructor(DuocPhamBenhVienId = null, Ten = null, Ma = null, LaDuocPhamBHYT = null, SoLo = null) {
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.Ma = Ma;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoLo = SoLo;
    }
}
class DieuChuyenDuocPhamGridVo {
    constructor(Id = null, DuocPhamBenhVienId = null, Ten = null, DVT = null, LaDuocPhamBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongDieuChuyen = null, DuocPhamBenhVienPhanNhomId = null, TenNhom = null, Ma = null, SoDangKy = null, SoLo = null, HanSuDung = null, DonGiaNhap = null) {
        this.Id = Id;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.DVT = DVT;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongDieuChuyen = SoLuongDieuChuyen;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.TenNhom = TenNhom;
        this.Ma = Ma;
        this.SoDangKy = SoDangKy;
        this.SoLo = SoLo;
        this.HanSuDung = HanSuDung;
        this.DonGiaNhap = DonGiaNhap;
    }
}
class DieuChuyenDuocPhamTheoNhomGridVo {
    constructor(Id = null, DuocPhamBenhVienId = null, Ten = null, DVT = null, LaDuocPhamBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongDieuChuyen = null, DuocPhamBenhVienPhanNhomId = null, TenNhom = null, Ma = null, SoDangKy = null, DonGia = null, ThanhTien = null, HanSuDungDisplay = null, HanSuDung = null, HamLuong = null) {
        this.Id = Id;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.Ten = Ten;
        this.DVT = DVT;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongDieuChuyen = SoLuongDieuChuyen;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.TenNhom = TenNhom;
        this.Ma = Ma;
        this.SoDangKy = SoDangKy;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.HanSuDungDisplay = HanSuDungDisplay;
        this.HanSuDung = HanSuDung;
        this.HamLuong = HamLuong;
    }
}
class DuocPhamBenhVienDaSuaSoLuongXuat {
    constructor(DuocPhamBenhVienId = null, SoLuongDieuChuyen = null) {
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.SoLuongDieuChuyen = SoLuongDieuChuyen;
    }
}
class DuocPhamBenhVienTheoNhom {
    constructor(DuocPhamBenhVienPhanNhomId = null, DuocPhamBenhVienId = null, LaDuocPhamBHYT = null, KhoXuatId = null, SearchString = null, DuocPhamBenhViens = []) {
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.KhoXuatId = KhoXuatId;
        this.SearchString = SearchString;
        this.DuocPhamBenhViens = DuocPhamBenhViens;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DieuChuyenKhoNoiBoDuocPhamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DieuChuyenKhoNoiBoDuocPhamModule", function() { return DieuChuyenKhoNoiBoDuocPhamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-routing.module.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_list_dieu_chuyen_kho_noi_bo_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-list/dieu-chuyen-kho-noi-bo-duoc-pham-list.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_create_dieu_chuyen_kho_noi_bo_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-create/dieu-chuyen-kho-noi-bo-duoc-pham-create.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_update_dieu_chuyen_kho_noi_bo_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-update/dieu-chuyen-kho-noi-bo-duoc-pham-update.component.ts");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_shared_dieu_chuyen_kho_noi_bo_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-shared/dieu-chuyen-kho-noi-bo-duoc-pham-shared.component.ts");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham/dieu-chuyen-kho-noi-bo-duoc-pham-popup/dieu-chuyen-kho-noi-bo-duoc-pham-popup.component.ts");





















let DieuChuyenKhoNoiBoDuocPhamModule = class DieuChuyenKhoNoiBoDuocPhamModule {
};
DieuChuyenKhoNoiBoDuocPhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dieu_chuyen_kho_noi_bo_duoc_pham_list_dieu_chuyen_kho_noi_bo_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_4__["DieuChuyenKhoNoiBoDuocPhamListComponent"],
            _dieu_chuyen_kho_noi_bo_duoc_pham_create_dieu_chuyen_kho_noi_bo_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_5__["DieuChuyenKhoNoiBoDuocPhamCreateComponent"],
            _dieu_chuyen_kho_noi_bo_duoc_pham_update_dieu_chuyen_kho_noi_bo_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_6__["DieuChuyenKhoNoiBoDuocPhamUpdateComponent"],
            _dieu_chuyen_kho_noi_bo_duoc_pham_shared_dieu_chuyen_kho_noi_bo_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_7__["DieuChuyenKhoNoiBoDuocPhamSharedComponent"],
            _dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_20__["DieuChuyenKhoNoiBoDuocPhamPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dieu_chuyen_kho_noi_bo_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_3__["DieuChuyenKhoNoiBoDuocPhamRoutingModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_18__["InputsModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_13__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_19__["DropDownButtonModule"]
        ],
        entryComponents: [
            _dieu_chuyen_kho_noi_bo_duoc_pham_popup_dieu_chuyen_kho_noi_bo_duoc_pham_popup_component__WEBPACK_IMPORTED_MODULE_20__["DieuChuyenKhoNoiBoDuocPhamPopupComponent"]
        ],
    })
], DieuChuyenKhoNoiBoDuocPhamModule);



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
//# sourceMappingURL=default~ke-toan-duyet-dieu-chuyen-duoc-pham-duyet-dieu-chuyen-duoc-pham-module~nhap-xuat-duoc-pham-d~8d068d25-es2015.js.map