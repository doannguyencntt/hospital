(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-kiem-soat-nhiem-khuan-xuat-kho-ksnk-xuat-kho-ksnk-xuat-kho-ksnk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Hành chính - KSNK',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/ksnk/xuat-kho', queryParams: {holdQuery : true}}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important;\" class=\"title m-0\">Xuất Kho Kiểm Soát Nhiễm Khuẩn</h2>   \n                    </div>\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-xuat-kho-ksnk-shared  [(xuatKhac)]=\"IsXuatKhac\">\n                        </app-xuat-kho-ksnk-shared>\n\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">                         \n                            <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button *ngIf=\"!loading\" type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.html":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.html ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.html":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.html ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Hành chính - KSNK',Path:''}\n                ,{Title:'Xuất kho',Path:'/nhap-xuat/ksnk/xuat-kho', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid baseRoute=\"/nhap-xuat/ksnk/xuat-kho\" [sort]=\"sort\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                [additionalSearchString]=\"additionalSearchString\"></app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <!--0. Dược phẩm xuất kho của kiểm soát nhiễm khuẩn -->\n                <app-grid *ngIf=\"dataItem.LoaiDuocPhamVatTu === loaiDP \" baseRoute=\"/nhap-xuat/ksnk/xuat-kho\"\n                    [groups]=\"groupVTDPs\" [sort]=\"sortDuocPhamChild\" [gridColumns]=\"gridDuocPhamChildColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridDuocPhamChild\" [urlGetTotalPage]=\"urlGetTotalPageGridDuocPhamChild\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n\n                <!--1. Vật tư xuất kho của kiểm soát nhiễm khuẩn -->\n                <app-grid *ngIf=\"dataItem.LoaiDuocPhamVatTu === loaiVT\" baseRoute=\"/nhap-xuat/ksnk/xuat-kho\"\n                    [groups]=\"groupVTDPs\" [sort]=\"sortVatTuChild\" [gridColumns]=\"gridVatTuChildColumns\"\n                    [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\" [useHeaderDefault]=\"false\"\n                    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridVatTuChild\" [urlGetTotalPage]=\"urlGetTotalPageGridVatTuChild\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n\n            </ng-template>\n\n        </div>\n        <ng-template #trangThaiTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <button *ngIf=\"dataItem.LoaiDuocPhamVatTu === loaiVT\" (click)=\"InPhieuXuatVatTu(dataItem.Id)\"\n                        mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                    <button *ngIf=\"dataItem.LoaiDuocPhamVatTu === loaiDP\" (click)=\"InPhieuXuatDuocPham(dataItem.Id)\"\n                        mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <ng-template #khoVatTuXuatTemplate let-dataItem>\n            <a (click)=\"detail(dataItem.Id)\">\n                {{dataItem.KhoXuat}}\n            </a>\n        </ng-template>\n\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoSearch.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n\n                <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeXuat\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                    [(model)]=\"xuatKhoSearch.RangeXuat\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKeyNgayXuat($event)\"\n                    (modelChange)=\"changeNgayXuatRange($event)\" (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                </app-daterangepicker>\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"themMoiXuatKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n        <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #soChungTuTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n                {{dataItem.SoPhieu}}</a>\n        </ng-template>\n\n        <ng-template #tenNhomDuocPhamGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <!-- \n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n        </h3> -->\n\n    <app-combobox hierarchyKeyToSend=\"khoXuat\" id=\"KhoXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.KhoXuatId\"\n        [required]=\"true\" autoSelectFirstItem=\"true\" bind=\"true\" label=\"Kho xuất\" (modelChange)=\"xuatKhoChange($event)\"\n        [modelText]=\"xuatKho.KhoXuatDisplay\" url=\"XuatKhoKSNK/GetKhoVatTu\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"!xuatKhac\" hierarchyKeyToListen=\"khoXuat\" id=\"KhoNhapId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [modelText]=\"xuatKho.KhoNhapDisplay\" [(model)]=\"xuatKho.KhoNhapId\" label=\"Kho nhập\"\n        (modelChange)=\"nhapKhoChange($event)\" url=\"XuatKhoKSNK/GetKhoVatTuNhap\" [required]=\"true\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\" [required]=\"true\"\n        [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\" url=\"XuatKhoKSNK/GetNguoiXuat\"\n        [disabled]=\"true\" [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n        url=\"XuatKhoKSNK/GetNguoiNhan\" [validationerror]=\"'NguoiNhanId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.TenNguoiNhan\" label=\"Người nhận\" maxlength=\"1000\">\n    </app-textbox>\n\n    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\" [(model)]=\"xuatKho.NgayXuat\"\n        [required]=\"true\" [disabled]=\"isValidateUpdate == false\"\n        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n    </app-datetimepicker>\n\n    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n        [disabled]=\"isValidateUpdate == false\" label=\"Ghi chú\" maxlength=\"1000\" [required]=\"true\"\n        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n</div>\n\n<div style=\"height: 20px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN ĐỒ KIỂM SOÁT NHIỄM KHUẨN </h3>\n\n    <app-grid [additionalSearchString]=\"xuatKho.KhoXuatId\" fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\"\n        [documentType]=\"documentType\" [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" #grid1\n        (extOnDataBound)=\"onDataBoundChildGrid1($event)\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\" [headerTemplate]=\"headerTemplate\"\n        #gridVatTu [groups]=\"groups\"></app-grid>\n\n    <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n        [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n        [gridDataSource]=\"gridDataXuatKho\"></app-grid>\n\n\n    <ng-template #actionTemplate let-dataItem>\n        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n            [disabled]=\"isValidateUpdate == false\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"updateGrid(dataItem.VatTuId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"removeGrid(dataItem.VatTuId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"addOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Chọn chóm: {{value}}\" class=\"p-0\"\n                style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"removeOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Bỏ chọn nhóm: {{value}}\"\n            class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKey2($event)\"\n                    (ngModelChange)=\"clearSearch2()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #soLuongXuatTemplate let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"SoLuongXuatChange($event, dataItem)\">\n        </app-textboxnumeric>\n\n    </ng-template>\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\" [min]=\"0\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"SoLuongXuatGrid1Change($event, dataItem)\">\n        </app-textboxnumeric>\n\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"addOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n                title=\"Chọn: {{dataItem.TenVatTu}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n\n    </ng-template>\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"removeOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n            title=\"Bỏ chọn: {{dataItem.TenVatTu}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n            type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaFooterTemplate>\n        <span style=\"float:right\">Tổng tiền xuất </span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid1Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',1) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid2Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',2) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Hành chính - KSNK',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/ksnk/xuat-kho', queryParams: {holdQuery : true}}\n        \n            ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Xuất Kho Kiểm Soát Nhiễm Khuẩn</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                    <app-textbox id=\"SoPhieu\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"xuatKho.SoPhieu\" [disabled]=\"true\"\n                        label=\"Số phiếu\" maxlength=\"1000\">\n                    </app-textbox>\n\n                    <app-combobox id=\"KhoXuatId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"xuatKho.KhoXuatId\"\n                        [disabled]=\"true\" [required]=\"true\" label=\"Kho xuất\" url=\"XuatKhoKSNK/GetKhoVatTu\"\n                        [modelText]=\"xuatKho.KhoXuatDisplay\"\n                        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-combobox id=\"KhoNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                        *ngIf=\"xuatKho.LoaiXuatKho != xuatChoBenhNhan && xuatKho.KhoNhapId != null\"\n                        [(model)]=\"xuatKho.KhoNhapId\" label=\"Kho nhập\" [disabled]=\"true\" url=\"XuatKhoKSNK/GetKhoVatTuNhap\"\n                        [required]=\"true\" [modelText]=\"xuatKho.KhoNhapDisplay\"\n                        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n\n                    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\"\n                        [required]=\"true\" [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\"\n                        url=\"XuatKhoKSNK/GetNguoiXuat\" [disabled]=\"true\"\n                        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n                        [disabled]=\"true\" url=\"XuatKhoKSNK/GetNguoiNhan\" \n                        [validationerror]=\"'NguoiNhanId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.TenNguoiNhan\" [disabled]=\"true\" label=\"Người nhận\" maxlength=\"1000\">\n                    </app-textbox>\n\n                    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\"\n                        [(model)]=\"xuatKho.NgayXuat\" [required]=\"true\" [disabled]=\"true\"\n                        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n                    </app-datetimepicker>\n\n                    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n                        [disabled]=\"true\" label=\"Ghi chú\" maxlength=\"99999999\" [required]=\"true\"\n                        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n                    </app-textbox>\n\n\n                </div>\n\n                <div style=\"height: 20px;\">\n                </div>             \n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN ĐỒ KIỂM SOÁT NHIỄM KHUẨN\n                    </h3>\n\n                    <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\" [sort]=\"sort\"\n                        [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\" [urlGetData]=\"urlGetData\"\n                        [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\"\n                        [headerTemplate]=\"headerTemplate\" #gridVatTu [groups]=\"groups\"></app-grid>\n\n                </div>\n\n                <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                    <strong>{{value}}</strong>\n                </ng-template>\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                            fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\"\n                                class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                    </div>\n                </ng-template>\n\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <!-- <app-formfooter [hiddenUpdateButton]=\"isValidateUpdate != true\" [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\">\n                            </app-formfooter> -->\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- </vex-page-layout-content>\n</vex-page-layout> -->");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3h1YXQta2hvLWtzbmsveHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rLWNyZWF0ZS94dWF0LWtoby1rc25rLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKCreateComponent", function() { return XuatKhoKSNKCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _xuat_kho_ksnk_shared_xuat_kho_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.ts");
/* harmony import */ var _xuat_kho_ksnk_in_phieu_dp_vt_popup_xuat_kho_ksnk_in_phieu_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.ts");















let XuatKhoKSNKCreateComponent = class XuatKhoKSNKCreateComponent {
    constructor(route, router, baseService, ref, notificationService, authService, errorService, dialog) {
        this.route = route;
        this.router = router;
        this.baseService = baseService;
        this.ref = ref;
        this.notificationService = notificationService;
        this.authService = authService;
        this.errorService = errorService;
        this.dialog = dialog;
        this.loading = false;
        this.IsXuatKhac = false;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho?holdQuery=true');
    }
    cancel() {
        this.onCreated();
    }
    create() {
        var self = this;
        self.shared.validationErrors = null;
        self.ref.detectChanges();
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].MessConfirm, ["thêm"]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                self.loading = true;
                if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
                    self.loading = false;
                    return;
                }
                self.baseService.create(self.shared.getSharedData()).subscribe(resultData => {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                    self.loading = false;
                    //self.onCreated();
                    if (resultData == null || resultData == undefined) {
                        self.onCreated();
                    }
                    else {
                        self.dialog.open(_xuat_kho_ksnk_in_phieu_dp_vt_popup_xuat_kho_ksnk_in_phieu_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_14__["XuatKhoKSNKInPhieuDPVTPopupComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: resultData,
                        }).afterClosed().subscribe(result => {
                            self.onCreated();
                        });
                    }
                }, (err) => {
                    self.loading = false;
                    if (err != null && err != undefined && err.ValidationErrors != null) {
                        self.shared.validationErrors = err.ValidationErrors;
                    }
                    else {
                        self.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
};
XuatKhoKSNKCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_xuat_kho_ksnk_shared_xuat_kho_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_13__["XuatKhoKSNKSharedComponent"], { static: true })
], XuatKhoKSNKCreateComponent.prototype, "shared", void 0);
XuatKhoKSNKCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-ksnk-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-ksnk-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-ksnk-create.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.scss")).default]
    })
], XuatKhoKSNKCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.scss":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.scss ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rL3h1YXQta2hvLWtzbmstaW4tcGhpZXUtZHAtdnQtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxceHVhdC1raG8ta3Nua1xceHVhdC1raG8ta3Nua1xceHVhdC1raG8ta3Nuay1pbi1waGlldS1kcC12dC1wb3B1cFxceHVhdC1raG8ta3Nuay1pbi1waGlldS1kcC12dC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rL3h1YXQta2hvLWtzbmstaW4tcGhpZXUtZHAtdnQtcG9wdXAveHVhdC1raG8ta3Nuay1pbi1waGlldS1kcC12dC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi94dWF0LWtoby1rc25rL3h1YXQta2hvLWtzbmsveHVhdC1raG8ta3Nuay1pbi1waGlldS1kcC12dC1wb3B1cC94dWF0LWtoby1rc25rLWluLXBoaWV1LWRwLXZ0LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.ts":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.ts ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKInPhieuDPVTPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKInPhieuDPVTPopupComponent", function() { return XuatKhoKSNKInPhieuDPVTPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let XuatKhoKSNKInPhieuDPVTPopupComponent = class XuatKhoKSNKInPhieuDPVTPopupComponent {
    constructor(dialogRef, data) {
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
        let htmlAllDPvaVT = "";
        if (this.data.length > 0) {
            this.data.forEach(item => {
                htmlAllDPvaVT += item.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
            });
        }
        return new Promise(resolve => {
            resolve(htmlAllDPvaVT);
        });
    }
};
XuatKhoKSNKInPhieuDPVTPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
XuatKhoKSNKInPhieuDPVTPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-ksnk-in-phieu-dp-vt-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-ksnk-in-phieu-dp-vt-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-ksnk-in-phieu-dp-vt-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XuatKhoKSNKInPhieuDPVTPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.scss ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rL3h1YXQta2hvLWtzbmstaW4tcGhpZXUtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGtpZW0tc29hdC1uaGllbS1raHVhblxceHVhdC1raG8ta3Nua1xceHVhdC1raG8ta3Nua1xceHVhdC1raG8ta3Nuay1pbi1waGlldS1wb3B1cFxceHVhdC1raG8ta3Nuay1pbi1waGlldS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9raWVtLXNvYXQtbmhpZW0ta2h1YW4veHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rL3h1YXQta2hvLWtzbmstaW4tcGhpZXUtcG9wdXAveHVhdC1raG8ta3Nuay1pbi1waGlldS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2tpZW0tc29hdC1uaGllbS1raHVhbi94dWF0LWtoby1rc25rL3h1YXQta2hvLWtzbmsveHVhdC1raG8ta3Nuay1pbi1waGlldS1wb3B1cC94dWF0LWtoby1rc25rLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKInPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKInPhieuPopupComponent", function() { return XuatKhoKSNKInPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let XuatKhoKSNKInPhieuPopupComponent = class XuatKhoKSNKInPhieuPopupComponent {
    constructor(dialogRef, data) {
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
        let source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
        return new Promise(resolve => {
            resolve(source);
            // this.close();
        });
    }
};
XuatKhoKSNKInPhieuPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
XuatKhoKSNKInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-ksnk-in-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-ksnk-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-ksnk-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XuatKhoKSNKInPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.scss ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3h1YXQta2hvLWtzbmsveHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rLWxpc3QveHVhdC1raG8ta3Nuay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKListComponent", function() { return XuatKhoKSNKListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _xuat_kho_ksnk_in_phieu_popup_xuat_kho_ksnk_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.ts");
/* harmony import */ var _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../xuat-kho-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");


























let XuatKhoKSNKListComponent = class XuatKhoKSNKListComponent {
    constructor(apiService, authService, dialog, location, route, router, notificationService) {
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.baseRoute = "/nhap-xuat/ksnk/xuat-kho";
        this.sort = [{
                field: 'NgayXuat',
                dir: 'desc'
            }];
        this.sortVatTuChild = [{
                field: 'VatTu',
                dir: 'asc'
            }];
        this.sortDuocPhamChild = [{
                field: 'DuocPham',
                dir: 'asc'
            }];
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"];
        this.gridColumns = [];
        this.gridVatTuChildColumns = [];
        this.gridDuocPhamChildColumns = [];
        this.urlGetDataGridVatTuChild = "XuatKhoKSNK/GetDataForGridChildAsync";
        this.urlGetTotalPageGridVatTuChild = "XuatKhoKSNK/GetTotalPageForGridChildAsync";
        this.urlGetDataGridDuocPhamChild = "XuatKhoKSNK/GetDataForGridDuocPhamChildAsync";
        this.urlGetTotalPageGridDuocPhamChild = "XuatKhoKSNK/GetTotalPageForGridDuocPhamChildAsync";
        this.holdQuery = null;
        this.additionalSearchString = null;
        this.loaiVT = _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_24__["LoaiDuocPhamVatTu"].LoaiVatTu;
        this.loaiDP = _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_24__["LoaiDuocPhamVatTu"].LoaiDuocPham;
        //update xuat kho 14/9/2020
        this.xuatKhoSearch = new _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_24__["XuatKhoKSNKSearch"]();
        this.groupVTDPs = [{ field: 'LoaiSuDung' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XuatKhoVatTuThuocNhomKSNK;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 230, Sortable: true, Template: this.soChungTuTemplate },
            { Field: "KhoXuat", Title: "Nơi xuất", Width: 200, Sortable: true },
            { Field: "NguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
            { Field: "NgayXuatDisplay", Title: "Ngày xuất", Width: 150, Sortable: true },
            { Field: "KhoNhap", Title: "Nơi nhập", Width: 200, Sortable: true },
            { Field: "NguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
            { Field: "LyDoXuatKho", Title: "Lý do xuất", Width: 200, Sortable: true },
            { Field: "Action", Title: "", Width: 100, Sortable: false, HideFilter: true, Template: this.trangThaiTemplate }
        ];
        this.gridVatTuChildColumns = [
            { Field: "LoaiSuDung", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "VatTu", Title: "Vật tư", MinWidth: 150, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
            { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
        ];
        this.gridDuocPhamChildColumns = [
            { Field: "LoaiSuDung", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomDuocPhamGroupHeaderTemplate },
            { Field: "DuocPham", Title: "Dược phẩm", MinWidth: 150, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
            { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
        ];
        var now = new Date();
        var tuNgay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        var denNgay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        this.xuatKhoSearch.RangeXuat.startDate = tuNgay;
        if (this.xuatKhoSearch.RangeXuat.startDate != null) {
            this.xuatKhoSearch.RangeXuat.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(tuNgay, "dd/mm/yyyy");
        }
        this.xuatKhoSearch.RangeXuat.endDate = denNgay;
        if (this.xuatKhoSearch.RangeXuat.endDate != null) {
            this.xuatKhoSearch.RangeXuat.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(denNgay, "dd/mm/yyyy");
        }
        this.additionalSearchString = JSON.stringify(this.xuatKhoSearch);
        this.gridChild.additionalSearchString = this.additionalSearchString;
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].getItem("additionalSearchStringXuatKhoKSNK");
                if (this.additionalSearchString != null) {
                    this.xuatKhoSearch = JSON.parse(this.additionalSearchString);
                    if (this.xuatKhoSearch.RangeXuat.TuNgay != null
                        && this.xuatKhoSearch.RangeXuat.TuNgay != 'null' && this.xuatKhoSearch.RangeXuat.TuNgay != '') {
                        this.xuatKhoSearch.RangeXuat.startDate = new Date(this.xuatKhoSearch.RangeXuat.startDate);
                    }
                    else {
                        this.xuatKhoSearch.RangeXuat.startDate = null;
                    }
                    if (this.xuatKhoSearch.RangeXuat.DenNgay != null
                        && this.xuatKhoSearch.RangeXuat.DenNgay != 'null' && this.xuatKhoSearch.RangeXuat.DenNgay != '') {
                        this.xuatKhoSearch.RangeXuat.endDate = new Date(this.xuatKhoSearch.RangeXuat.endDate);
                    }
                    else {
                        this.xuatKhoSearch.RangeXuat.endDate = null;
                    }
                    this.additionalSearchString = this.additionalSearchString;
                    this.gridChild.additionalSearchString = this.additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].removeItem("additionalSearchStringXuatKhoKSNK");
        }
    }
    detail(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            this.router.navigate(["/nhap-xuat/ksnk/xuat-kho" + "/xem-chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(id, dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
            this.router.navigate(["/nhap-xuat/ksnk/xuat-kho" + "/xem-chi-tiet/" + id + "/" + dataItem.LoaiDuocPhamVatTu]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_22__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("XuatKhoKSNK/ExportData", this.gridChild._gridQueryInfo).subscribe(resultData => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoKSNK" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    clearSearch(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.Timkiem();
        }
    }
    Timkiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.xuatKhoSearch.RangeXuat != null && this.xuatKhoSearch.RangeXuat.startDate != null) {
            this.xuatKhoSearch.RangeXuat.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeXuat.startDate, "dd/mm/yyyy");
        }
        else {
            this.xuatKhoSearch.RangeXuat.TuNgay = null;
        }
        if (this.xuatKhoSearch.RangeXuat != null && this.xuatKhoSearch.RangeXuat.endDate != null) {
            this.xuatKhoSearch.RangeXuat.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeXuat.endDate, "dd/mm/yyyy");
        }
        else {
            this.xuatKhoSearch.RangeXuat.DenNgay = null;
        }
        var queryString = JSON.stringify(this.xuatKhoSearch);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_19__["LocalStorageHelper"].setItem("additionalSearchStringXuatKhoKSNK", queryString);
        this.gridChild.search();
    }
    changeNgayXuatRange($event) {
        this.Timkiem();
    }
    onKeyNgayXuat($event) {
        if ($event.keyCode == 13) {
            this.Timkiem();
        }
    }
    blur($event) {
        this.Timkiem();
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.Timkiem();
        }
    }
    themMoiXuatKho() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/ksnk/xuat-kho/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_16__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    InPhieuXuatVatTu(xuatKhoVatTuId) {
        let hostingName = window.location.protocol + "//" + window.location.host;
        this.apiService.post("XuatKhoKSNK/InPhieuXuatVatTu?xuatKhoVatTuId=" + xuatKhoVatTuId + "&hostingName=" + hostingName)
            .subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dialog.open(_xuat_kho_ksnk_in_phieu_popup_xuat_kho_ksnk_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_23__["XuatKhoKSNKInPhieuPopupComponent"], {
                    disableClose: false,
                    width: '1200px',
                    data: resultData,
                }).afterClosed().subscribe(result => {
                });
            }
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    InPhieuXuatDuocPham(xuatKhoDuocPhamId) {
        let hostingName = window.location.protocol + "//" + window.location.host;
        this.apiService.post("XuatKhoKSNK/InPhieuXuatDuocPham?xuatKhoDuocPhamId=" + xuatKhoDuocPhamId + "&hostingName=" + hostingName)
            .subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dialog.open(_xuat_kho_ksnk_in_phieu_popup_xuat_kho_ksnk_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_23__["XuatKhoKSNKInPhieuPopupComponent"], {
                    disableClose: false,
                    width: '1200px',
                    data: resultData,
                }).afterClosed().subscribe(result => {
                });
            }
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
};
XuatKhoKSNKListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_25__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], XuatKhoKSNKListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
], XuatKhoKSNKListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], { static: false })
], XuatKhoKSNKListComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoVatTuXuatTemplate', { static: true })
], XuatKhoKSNKListComponent.prototype, "khoVatTuXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoKSNKListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomDuocPhamGroupHeaderTemplate', { static: true })
], XuatKhoKSNKListComponent.prototype, "tenNhomDuocPhamGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
], XuatKhoKSNKListComponent.prototype, "soChungTuTemplate", void 0);
XuatKhoKSNKListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-ksnk-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-ksnk-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-ksnk-list.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.scss")).default]
    })
], XuatKhoKSNKListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKRoutingModule", function() { return XuatKhoKSNKRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _xuat_kho_ksnk_list_xuat_kho_ksnk_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-kho-ksnk-list/xuat-kho-ksnk-list.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.ts");
/* harmony import */ var _xuat_kho_ksnk_create_xuat_kho_ksnk_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-ksnk-create/xuat-kho-ksnk-create.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.ts");
/* harmony import */ var _xuat_kho_ksnk_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.ts");









const routes = [
    {
        path: '',
        component: _xuat_kho_ksnk_list_xuat_kho_ksnk_list_component__WEBPACK_IMPORTED_MODULE_6__["XuatKhoKSNKListComponent"],
        data: {
            title: 'Xuất Kho Kiểm Soát Nhiễm Khuẩn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoVatTuThuocNhomKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _xuat_kho_ksnk_create_xuat_kho_ksnk_create_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoKSNKCreateComponent"],
        data: {
            title: 'Thêm Xuất Kho Kiểm Soát Nhiễm Khuẩn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoVatTuThuocNhomKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id/:loaiDuocPhamVatTu',
        component: _xuat_kho_ksnk_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoKSNKUpdateComponent"],
        data: {
            title: 'Xem Xuất Kho Kiểm Soát Nhiễm Khuẩn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].XuatKhoVatTuThuocNhomKSNK,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
    }
];
let XuatKhoKSNKRoutingModule = class XuatKhoKSNKRoutingModule {
};
XuatKhoKSNKRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XuatKhoKSNKRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3h1YXQta2hvLWtzbmsveHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rLXNoYXJlZC94dWF0LWtoby1rc25rLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKSharedComponent", function() { return XuatKhoKSNKSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/chevron-right */ "./node_modules/@iconify/icons-ic/chevron-right.js");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/last-page */ "./node_modules/@iconify/icons-ic/last-page.js");
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/chevron-left */ "./node_modules/@iconify/icons-ic/chevron-left.js");
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/first-page */ "./node_modules/@iconify/icons-ic/first-page.js");
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _duoc_pham_yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts");
/* harmony import */ var _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../xuat-kho-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model.ts");






















let XuatKhoKSNKSharedComponent = class XuatKhoKSNKSharedComponent {
    constructor(route, dialog, cdRef, authService, apiService, notificationService) {
        this.route = route;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icRight = _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icLeft = _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icRightLast = _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icLeftLast = _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.isCreate = true;
        this.showFormDetail = false;
        this.popupLoadingData = null;
        this.searchString = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.gridColumns = [];
        this.gridResultColumns = [];
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.dataForGrid = [];
        this.validationErrors = [];
        this.lstXuatKhoVatTuChiTietToUpdate = [];
        this.isValidateUpdate = true;
        this.urlGetData = "XuatKhoKSNK/GetAllVatTuData";
        this.urlGetTotal = "XuatKhoKSNK/GetAllVatTuTotal";
        this.checkAll = null;
        this.theFistLoadKhoXuat = true;
        this.khoXuatIdValuePrevious = null;
        this.nhapKhoIdValuePrevious = null;
        // groups: GroupDescriptor[] = [{ field: 'TenNhom' }];
        this.groups = [{ field: 'TenNhom', aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
        this.lstDaChon = new Array();
        // dataChecked:;
        this.selectAllState = 'unchecked';
        this.stateXuatKho = {
            skip: 0,
            take: 20000,
            group: [{ field: 'TenNhom' }]
        };
        this.lstXuatKho = new Array();
        this.lstXuatKhoDisplay = new Array();
        this.dataToSumThanhTienGrid1 = [];
        this.dataToSumThanhTienGrid2 = [];
        this.xemChiTiet = false;
        this.xuatKhac = false;
    }
    totalThanhTien(field, gridNumber) {
        if (gridNumber == 1) {
            switch (field) {
                case 'ThanhTien':
                    return this.dataToSumThanhTienGrid1.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
        else {
            switch (field) {
                case 'ThanhTien':
                    return this.dataToSumThanhTienGrid2.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    ;
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XuatKhoVatTuThuocNhomKSNK;
        this.xuatKho = new _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_21__["XuatKhoKSNK"]();
        this.xuatKho.HostingName = window.location.protocol + "//" + window.location.host;
        this.themVatTu = new _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_21__["ThemKSNK"]();
        this.gridColumns = [
            { Field: "TenNhom", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "MaVatTu", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenVatTu", Title: "Vật tư", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },
            { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },
        ];
        this.gridResultColumns = [
            { Field: "TenNhom", Title: "Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
            { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
            { Field: "MaVatTu", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenVatTu", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatTemplate },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid2Template, },
        ];
        this.setNhanVienId();
        this.setDefaultNullForGrid();
        if (this.id !== undefined && this.id !== null) {
            this.isCreate = false;
        }
    }
    setNhanVienId() {
        //vì user la nhân viên nên lấy id của nhau
        let user = this.authService.getAccessUser();
        this.xuatKho.NguoiXuatId = user.Id;
    }
    setDefaultNullForGrid() {
        this.setDataXuatKho();
    }
    setDataXuatKho() {
        this.gridDataXuatKho = null;
        this.setDataGrid1();
        let dataGrid = this.lstXuatKhoDisplay;
        this.dataToSumThanhTienGrid2 = this.lstXuatKhoDisplay;
        this.gridDataXuatKho = {
            data: dataGrid,
            total: dataGrid.length,
        };
        this.refreshGrid();
    }
    setDataGrid1() {
        if (this.grid1 == undefined)
            return;
        let lstId = new Array();
        for (let i = 0; i < this.lstXuatKho.length; i++) {
            lstId.push(this.lstXuatKho[i].Id);
        }
        this.grid1._additionalSearchString = this.xuatKho.KhoXuatId + "|" + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
        this.grid1.setDataSource();
    }
    refreshGrid() {
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        if (this.gridResult != undefined) {
            this.gridResult.setDataSource();
        }
    }
    getSharedData() {
        this.xuatKho.IsXuatKhac = this.xuatKhac;
        this.xuatKho.XuatKhoVatTuChiTiets = this.lstXuatKho;
        return this.xuatKho;
    }
    nhapKhoChange($event) {
        if (this.dialogRef == undefined || this.dialogRef == null) {
            this.nhapKhoIdValuePrevious = $event;
        }
    }
    clearSearch2() {
        if (this.searchString2 == "" || this.searchString2 == null) {
            this.lstXuatKhoDisplay = JSON.parse(JSON.stringify(this.lstXuatKho));
            this.setDataXuatKho();
        }
    }
    TimKiem2() {
        if (this.searchString2 == undefined || this.searchString2 == null) {
            this.setDataXuatKho();
        }
        else {
            let search = this.searchString2.toLowerCase().trim();
            this.lstXuatKhoDisplay = this.lstXuatKho.filter(o => o.TenVatTu.toLowerCase().trim().indexOf(search) != -1
                || o.DVT.toLowerCase().trim().indexOf(search) != -1 || o.Loai.toLowerCase().trim().indexOf(search) != -1
                || o.SoLuongTon.toString().toLowerCase().trim().indexOf(search) != -1
                || o.SoLuongTonDisplay.toLowerCase().trim().indexOf(search) != -1
                || o.MaVatTu.toLowerCase().trim().indexOf(search) != -1);
            this.setDataXuatKho();
        }
    }
    capNhatGrid2() {
        this.gridDataXuatKho = null;
        let dataGrid = this.lstXuatKhoDisplay;
        this.gridDataXuatKho = {
            data: dataGrid,
            total: dataGrid.length,
        };
        this.refreshGrid();
    }
    onKey2(event) {
        if (event.keyCode == 13) {
            this.TimKiem2();
        }
    }
    clearSearch() {
        if (this.searchString == "" || this.searchString == null) {
            this.gridVatTu.searchString = "";
            this.gridVatTu.search();
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.TimKiem();
        }
    }
    TimKiem() {
        if (this.gridVatTu == null) {
            return;
        }
        const lstId = new Array();
        for (let i = 0; i < this.lstXuatKho.length; i++) {
            lstId.push(this.lstXuatKho[i].Id);
        }
        this.gridVatTu.searchString = this.searchString;
        this.gridVatTu._additionalSearchString = this.xuatKho.KhoXuatId + '|' + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
        this.gridVatTu.search();
    }
    xuatKhoChange($event) {
        this.xuatKho.KhoNhapId = null;
        if (this.lstXuatKho != null && this.lstXuatKho != undefined && this.lstXuatKho.length > 0) {
            let khoXuatIdClone = JSON.parse(JSON.stringify(this.khoXuatIdValuePrevious));
            if (this.dialogRef == undefined || this.dialogRef == null) {
                this.dialogRef = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["NhapXuatKhoMessage"].MessageConfirmKhoXuatChange }
                }).afterClosed().subscribe(result => {
                    this.dialogRef = null;
                    if (result == "Yes") {
                        this.lstDaChon = new Array();
                        this.khoXuatIdValuePrevious = $event;
                        this.xuatKho.KhoXuatId = $event;
                        this.lstXuatKho = new Array();
                        this.lstXuatKhoDisplay = new Array();
                        this.searchString2 = null;
                        this.TimKiem2();
                        if ($event != undefined) {
                            this.apiService.post("XuatKhoKSNK/GetLoaiKhoVatTu/?id=" + $event).subscribe(resultData => {
                                if (resultData != undefined && resultData != null) {
                                    this.themVatTu.loaiKhoVatTuXuat = resultData;
                                    this.xuatKho.LoaiKhoVatTuXuat = resultData;
                                }
                            }, () => {
                            });
                        }
                        else {
                            this.xuatKho.LoaiXuatKho = null;
                            this.clearThongTinChiTiet();
                        }
                    }
                    else {
                        this.xuatKho.KhoXuatId = khoXuatIdClone;
                        this.xuatKho.KhoNhapId = this.nhapKhoIdValuePrevious;
                    }
                });
            }
        }
        else {
            this.lstDaChon = new Array();
            // this.setDefaultNullForGrid();
            if ($event != undefined) {
                this.khoXuatIdValuePrevious = JSON.parse(JSON.stringify($event));
                this.apiService.post("XuatKhoKSNK/GetLoaiKhoVatTu/?id=" + $event).subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.themVatTu.loaiKhoVatTuXuat = resultData;
                        this.xuatKho.LoaiKhoVatTuXuat = resultData;
                        this.setDefaultNullForGrid();
                    }
                }, () => {
                });
            }
            else {
                this.khoXuatIdValuePrevious = null;
            }
        }
    }
    Them() {
        this.validationErrors = null;
        let check = this.dataForGrid.filter(obj => obj.VatTuId == this.themVatTu.VatTuId);
        if (check.length == 0) {
            this.apiService.post("XuatKhoKSNK/GetVatTuKSNK", this.themVatTu).subscribe(resultData => {
                //this.themDuocPham.soLuongTon = resultData;
                if (resultData != undefined && resultData != null) {
                    this.clearThongTinChiTiet();
                    this.dataForGrid.push(resultData);
                    this.gridDataSource = {
                        data: this.dataForGrid,
                        total: this.dataForGrid.length
                    };
                }
            }, (err) => {
                //this.validationErrors = err.ValidationErrors;
                if (err != undefined && err.ValidationErrors != null) {
                    this.validationErrors = err.ValidationErrors;
                }
                else if (err != undefined && err.Errors == null) {
                    //self.validationErrors.push({ "Message": err.Message });
                    this.notificationService.showError(err.Message);
                }
                //console.log("error = ", err)
            });
        }
    }
    Sua() {
        //console.log(this.isIdNeedUpdate);
        this.validationErrors = null;
        this.apiService.post("XuatKhoKSNK/GetVatTuKSNK", this.themVatTu).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                let index = this.dataForGrid.find(obj => obj.VatTuId == this.isIdNeedUpdate);
                this.dataForGrid[this.dataForGrid.indexOf(index)] = resultData;
                //console.log(this.dataForGrid);
                this.gridDataSource = {
                    data: this.dataForGrid,
                    total: this.dataForGrid.length
                };
                this.disableUpdateGrid();
            }
        }, (err) => {
            //this.validationErrors = err.ValidationErrors;
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                //self.validationErrors.push({ "Message": err.Message });
                this.notificationService.showError(err.Message);
            }
            //console.log("error = ", err)
        });
    }
    huy() {
        this.showFormDetail = false;
        this.disableUpdateGrid();
    }
    disableUpdateGrid() {
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.clearThongTinChiTiet();
    }
    clearThongTinChiTiet() {
        this.themVatTu = new _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_21__["ThemKSNK"]();
        this.themVatTu.loaiKhoVatTuXuat = this.xuatKho.LoaiKhoVatTuXuat;
        this.themVatTu.loaiXuatKho = this.xuatKho.LoaiXuatKho;
    }
    addOn(dataItem) {
        let itemExists = this.lstXuatKho.find(o => o.Id == dataItem.Id);
        if (itemExists == undefined) {
            this.lstXuatKhoDisplay.push(dataItem);
            this.lstXuatKho.push(dataItem);
            this.TimKiem2();
        }
    }
    removeOn(dataItem) {
        this.lstXuatKho = this.lstXuatKho.filter(o => o != dataItem);
        this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o != dataItem);
        this.removeSoLuongDaChon(dataItem.Id);
        this.TimKiem2();
    }
    SoLuongXuatGrid1Change(soLuong, dataItem) {
        if (soLuong != undefined && soLuong != null) {
            dataItem.ThanhTien = soLuong * dataItem.DonGia;
        }
        else {
            dataItem.ThanhTien = 0;
        }
        this.updateSoLuongDaChon(dataItem.Id, soLuong);
    }
    updateSoLuongDaChon(id, soLuong) {
        if (this.lstDaChon != undefined) {
            let index = this.lstDaChon.filter(o => o.Id == id);
            if (index != null && index != undefined && index.length > 0) {
                index[0].SoLuongXuat = soLuong;
            }
            else {
                let data = new _duoc_pham_yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_20__["DaSuaSoLuongXuat"]();
                data.SoLuongXuat = soLuong;
                data.Id = id;
                this.lstDaChon.push(data);
            }
        }
        //console.log("updateSoLuongDaChon = ", this.lstDaChon);
    }
    removeSoLuongDaChon(id) {
        if (this.lstDaChon != undefined) {
            this.lstDaChon = this.lstDaChon.filter(o => o.Id != id);
        }
        //console.log("removeSoLuongDaChon = ", this.lstDaChon);
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
    addOnGroup(dataItem) {
        //console.log("addOnGroup = ", dataItem);
        let model = new _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_21__["GetKSNKOnGroupModel"]();
        model.TenNhom = dataItem.items[0].TenNhom;
        model.KhoXuatId = this.xuatKho.KhoXuatId;
        model.SearchString = this.searchString;
        model.ListDaChon = this.lstDaChon;
        this.addingPage();
        this.apiService.post("XuatKhoKSNK/GetVatTuOnGroup", model).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.closepopupLoadingData();
                resultData.forEach(e => {
                    let itemExists = this.lstXuatKho.find(o => o.Id == e.Id);
                    if (itemExists == undefined) {
                        //set sl xuat
                        //e.SoLuongXuat = e.SoLuongTon;
                        this.lstXuatKho.push(e);
                        this.lstXuatKhoDisplay.push(e);
                    }
                });
                this.TimKiem2();
            }
            else {
            }
        }, (err) => {
            if (err != undefined && err.ValidationErrors != null) {
                this.validationErrors = err.ValidationErrors;
            }
            else if (err != undefined && err.Errors == null) {
                this.notificationService.showError(err.Message);
            }
            this.closepopupLoadingData();
        });
    }
    removeOnGroup(dataItem) {
        dataItem.items.forEach(e => {
            this.removeSoLuongDaChon(e.Id);
        });
        this.lstXuatKho = this.lstXuatKho.filter(o => o.TenNhom != dataItem.items[0].TenNhom);
        this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o.TenNhom != dataItem.items[0].TenNhom);
        this.TimKiem2();
    }
    SoLuongXuatChange(soLuong, dataItem) {
        if (soLuong != undefined && soLuong != null) {
            dataItem.ThanhTien = soLuong * dataItem.DonGia;
        }
        else {
            dataItem.ThanhTien = 0;
        }
    }
    updateGrid(vatTuId) {
        let item = this.dataForGrid.filter(obj => obj.VatTuId == vatTuId);
        //console.log("UpdateGrid = ", item, duocPhamId);
        this.themVatTu.VatTuId = item[0].VatTuId;
        this.themVatTu.ChatLuong = item[0].DatChatLuong == true ? 1 : 0;
        this.themVatTu.SoLuongXuat = item[0].TongSoLuongXuat;
        this.themVatTu.KhoId = this.xuatKho.KhoXuatId;
        this.themVatTu.DonGia = item[0].DonGiaBan;
        this.themVatTu.VAT = item[0].VAT;
        this.themVatTu.ChietKhau = item[0].ChietKhau;
        this.enableUpdateGird(vatTuId);
        this.apiService.post("XuatKhoKSNK/GetSoLuongTon", this.themVatTu).subscribe(resultData => {
            this.themVatTu.SoLuongTon = resultData;
            this.showFormDetail = true;
        }, () => {
            //console.log("error")
        });
    }
    enableUpdateGird(id) {
        this.isUpdateGrid = true;
        this.isIdNeedUpdate = id;
    }
    removeGrid(vatTuId) {
        let index = this.dataForGrid.find(obj => obj.VatTuId == vatTuId);
        this.dataForGrid.splice(this.dataForGrid.indexOf(index), 1);
        this.gridDataSource = {
            data: this.dataForGrid,
            total: this.dataForGrid.length
        };
    }
    onDataBoundChildGrid1(data) {
        this.dataToSumThanhTienGrid1 = data.Data;
    }
};
XuatKhoKSNKSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridResult', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "gridResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid1', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "grid1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhom2GroupHeaderTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "tenNhom2GroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "soLuongXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "transferTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate2', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "transferTemplate2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid1Template', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "soLuongXuatGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "hsdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid1Template', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "thanhTienFooterGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid2Template', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "thanhTienFooterGrid2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], XuatKhoKSNKSharedComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoKSNKSharedComponent.prototype, "xemChiTiet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoKSNKSharedComponent.prototype, "xuatKhac", void 0);
XuatKhoKSNKSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-ksnk-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-ksnk-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-ksnk-shared.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.scss")).default]
    })
], XuatKhoKSNKSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQva2llbS1zb2F0LW5oaWVtLWtodWFuL3h1YXQta2hvLWtzbmsveHVhdC1raG8ta3Nuay94dWF0LWtoby1rc25rLXVwZGF0ZS94dWF0LWtoby12YXQtdHUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: XuatKhoKSNKUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKUpdateComponent", function() { return XuatKhoKSNKUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/kho.enum */ "./src/app/shared/enum/kho.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../xuat-kho-ksnk.model */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.model.ts");











let XuatKhoKSNKUpdateComponent = class XuatKhoKSNKUpdateComponent {
    constructor(route, router, baseService, apiService, notificationService) {
        this.route = route;
        this.router = router;
        this.baseService = baseService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.isValidateUpdate = false;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.xuatKho = new _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_10__["XuatKhoKSNK"]();
        this.gridColumns = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
        this.xuatChoBenhNhan = src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_4__["XuatKhoDuocPham"].XuatChoBenhNhan;
        this.sort = [
            {
                field: "VatTu",
                dir: "asc"
            }
        ];
        this.urlGetData = "XuatKhoKSNK/GetDataForGridChildAsync";
        this.urlGetTotal = "XuatKhoKSNK/GetTotalPageForGridChildAsync";
        this.groups = [{ field: 'LoaiSuDung' }];
    }
    ngOnInit() {
        debugger;
        this.id = this.route.snapshot.params.id;
        this.dPVaVT = Number(this.route.snapshot.params.loaiDuocPhamVatTu);
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XuatKhoVatTuThuocNhomKSNK;
        if (this.id !== undefined && this.id !== null) {
            this.getById(this.id);
        }
        this.gridVatTu.searchString = this.id + "";
        this.gridColumns = [
            { Field: "LoaiSuDung", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "VatTu", Title: "Vật tư", MinWidth: 200, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 100, Sortable: false },
            { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL xuất", Width: 150, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu nhập", Width: 150, Sortable: false },
        ];
    }
    clearSearch() {
        if (this.searchString == "" || this.searchString == null) {
            this.gridVatTu._additionalSearchString = "";
            this.gridVatTu.search();
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.TimKiem();
        }
    }
    TimKiem() {
        this.gridVatTu._additionalSearchString = this.searchString;
        this.gridVatTu.search();
    }
    getById(id) {
        if (this.dPVaVT === _xuat_kho_ksnk_model__WEBPACK_IMPORTED_MODULE_10__["LoaiDuocPhamVatTu"].LoaiVatTu) {
            this.baseService.getById(id).subscribe(resultData => {
                if (resultData != undefined) {
                    this.xuatKho = resultData;
                }
            });
        }
        else {
            this.apiService.get('XuatKhoKSNK/GetDuocPhamXuatKhoKSNk/' + id)
                .subscribe(resultData => {
                if (resultData != undefined) {
                    this.xuatKho = resultData;
                }
            });
        }
    }
    onUpdated() {
        this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho?holdQuery=true');
    }
    huy() {
        this.router.navigateByUrl('nhap-xuat/ksnk/xuat-kho?holdQuery=true');
    }
};
XuatKhoKSNKUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_8__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], XuatKhoKSNKUpdateComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoKSNKUpdateComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
XuatKhoKSNKUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-update.component.scss */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.scss")).default]
    })
], XuatKhoKSNKUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: XuatKhoKSNKModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKModule", function() { return XuatKhoKSNKModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _xuat_kho_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xuat-kho-ksnk-routing.module */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-routing.module.ts");
/* harmony import */ var _xuat_kho_ksnk_in_phieu_popup_xuat_kho_ksnk_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-popup/xuat-kho-ksnk-in-phieu-popup.component.ts");
/* harmony import */ var _xuat_kho_ksnk_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xuat-kho-ksnk.service */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.service.ts");
/* harmony import */ var _xuat_kho_ksnk_list_xuat_kho_ksnk_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./xuat-kho-ksnk-list/xuat-kho-ksnk-list.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-list/xuat-kho-ksnk-list.component.ts");
/* harmony import */ var _xuat_kho_ksnk_shared_xuat_kho_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-shared/xuat-kho-ksnk-shared.component.ts");
/* harmony import */ var _xuat_kho_ksnk_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-update/xuat-kho-vat-tu-update.component.ts");
/* harmony import */ var _xuat_kho_ksnk_create_xuat_kho_ksnk_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./xuat-kho-ksnk-create/xuat-kho-ksnk-create.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-create/xuat-kho-ksnk-create.component.ts");
/* harmony import */ var _xuat_kho_ksnk_in_phieu_dp_vt_popup_xuat_kho_ksnk_in_phieu_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component */ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk-in-phieu-dp-vt-popup/xuat-kho-ksnk-in-phieu-dp-vt-popup.component.ts");























let XuatKhoKSNKModule = class XuatKhoKSNKModule {
};
XuatKhoKSNKModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _xuat_kho_ksnk_list_xuat_kho_ksnk_list_component__WEBPACK_IMPORTED_MODULE_18__["XuatKhoKSNKListComponent"],
            _xuat_kho_ksnk_create_xuat_kho_ksnk_create_component__WEBPACK_IMPORTED_MODULE_21__["XuatKhoKSNKCreateComponent"],
            _xuat_kho_ksnk_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_20__["XuatKhoKSNKUpdateComponent"],
            _xuat_kho_ksnk_shared_xuat_kho_ksnk_shared_component__WEBPACK_IMPORTED_MODULE_19__["XuatKhoKSNKSharedComponent"],
            _xuat_kho_ksnk_in_phieu_popup_xuat_kho_ksnk_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_16__["XuatKhoKSNKInPhieuPopupComponent"],
            _xuat_kho_ksnk_in_phieu_dp_vt_popup_xuat_kho_ksnk_in_phieu_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_22__["XuatKhoKSNKInPhieuDPVTPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_8__["InputsModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_12__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _xuat_kho_ksnk_routing_module__WEBPACK_IMPORTED_MODULE_15__["XuatKhoKSNKRoutingModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
        ], entryComponents: [
            _xuat_kho_ksnk_in_phieu_popup_xuat_kho_ksnk_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_16__["XuatKhoKSNKInPhieuPopupComponent"],
            _xuat_kho_ksnk_in_phieu_dp_vt_popup_xuat_kho_ksnk_in_phieu_dp_vt_popup_component__WEBPACK_IMPORTED_MODULE_22__["XuatKhoKSNKInPhieuDPVTPopupComponent"]
        ],
        providers: [
            _xuat_kho_ksnk_service__WEBPACK_IMPORTED_MODULE_17__["XuatKhoKSNKService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_14__["BaseService"], useClass: _xuat_kho_ksnk_service__WEBPACK_IMPORTED_MODULE_17__["XuatKhoKSNKService"] },
        ]
    })
], XuatKhoKSNKModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.service.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/kiem-soat-nhiem-khuan/xuat-kho-ksnk/xuat-kho-ksnk/xuat-kho-ksnk.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: XuatKhoKSNKService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoKSNKService", function() { return XuatKhoKSNKService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let XuatKhoKSNKService = class XuatKhoKSNKService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XuatKhoKSNK';
    }
};
XuatKhoKSNKService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
XuatKhoKSNKService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XuatKhoKSNKService);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-kiem-soat-nhiem-khuan-xuat-kho-ksnk-xuat-kho-ksnk-xuat-kho-ksnk-module-es2015.js.map