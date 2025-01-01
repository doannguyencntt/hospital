(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-vat-tu-xuat-kho-vat-tu-xuat-kho-vat-tu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Vật tư',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/vat-tu/xuat-kho', queryParams: {holdQuery : true}}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important;\" class=\"title m-0\">Xuất Kho Vật Tư</h2>\n\n                        <!-- <app-radio id=\"IsXuatKhac\" class=\"no-label\" [(model)]=\"IsXuatKhac\"\n                             [items]=\"[{Value:false,Text:'Xuất qua kho khác'},{Value:true,Text:'Xuất khác'}]\">\n                        </app-radio> -->\n\n                    </div>\n\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-xuat-kho-vat-tu-shared  [(xuatKhac)]=\"IsXuatKhac\">\n                        </app-xuat-kho-vat-tu-shared>\n\n                        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                            <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                            </app-formfooter> -->\n                            <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button *ngIf=\"!loading\" type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Vật tư',Path:''}\n                ,{Title:'Xuất kho',Path:'/nhap-xuat/vat-tu/xuat-kho', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid baseRoute=\"/nhap-xuat/vat-tu/xuat-kho\" [sort]=\"sort\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                [additionalSearchString]=\"additionalSearchString\"></app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"/nhap-xuat/vat-tu/xuat-kho\" [groups]=\"groups\" [sort]=\"sortChild\"\n                    [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        </div>\n        <ng-template #trangThaiTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <!-- <button (click)=\"detail(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Xem Chi Tiết</span>\n                    </button> -->\n                    <button (click)=\"InPhieuXuat(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <ng-template #khoVatTuXuatTemplate let-dataItem>\n            <a (click)=\"detail(dataItem.Id)\">\n                {{dataItem.KhoXuat}}\n            </a>\n        </ng-template>\n\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoSearch.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n\n                <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeXuat\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                    [(model)]=\"xuatKhoSearch.RangeXuat\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKeyNgayXuat($event)\"\n                    (modelChange)=\"changeNgayXuatRange($event)\" (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                </app-daterangepicker>\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"themMoiXuatKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n        <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #soChungTuTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n                {{dataItem.SoPhieu}}</a>\n        </ng-template>\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <!-- \n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n        </h3> -->\n\n    <app-combobox hierarchyKeyToSend=\"khoXuat\" id=\"KhoXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.KhoXuatId\"\n        [required]=\"true\" autoSelectFirstItem=\"true\" bind=\"true\" label=\"Kho xuất\" (modelChange)=\"xuatKhoChange($event)\"\n        [modelText]=\"xuatKho.KhoXuatDisplay\" url=\"XuatKhoVatTu/GetKhoVatTu\"\n        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"!xuatKhac\" hierarchyKeyToListen=\"khoXuat\" id=\"KhoNhapId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [modelText]=\"xuatKho.KhoNhapDisplay\" [(model)]=\"xuatKho.KhoNhapId\" label=\"Kho nhập\"\n        (modelChange)=\"nhapKhoChange($event)\" url=\"XuatKhoVatTu/GetKhoVatTuNhap\" [required]=\"true\"\n        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\" [required]=\"true\"\n        [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\" url=\"XuatKhoVatTu/GetNguoiXuat\"\n        [disabled]=\"true\" [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n        url=\"XuatKhoVatTu/GetNguoiNhan\" [validationerror]=\"'NguoiNhanId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.TenNguoiNhan\" label=\"Người nhận\" maxlength=\"1000\">\n    </app-textbox>\n\n    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\" [(model)]=\"xuatKho.NgayXuat\"\n        [required]=\"true\" [disabled]=\"isValidateUpdate == false\"\n        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n    </app-datetimepicker>\n\n    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n        [disabled]=\"isValidateUpdate == false\" label=\"Ghi chú\" maxlength=\"1000\" [required]=\"true\"\n        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n</div>\n\n<div style=\"height: 20px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN VẬT TƯ\n    </h3>\n\n    <app-grid [additionalSearchString]=\"xuatKho.KhoXuatId\" fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\"\n        [documentType]=\"documentType\" [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\" #grid1\n        (extOnDataBound)=\"onDataBoundChildGrid1($event)\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\" [headerTemplate]=\"headerTemplate\"\n        #gridVatTu [groups]=\"groups\"></app-grid>\n\n    <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n        [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n        [gridDataSource]=\"gridDataXuatKho\"></app-grid>\n\n\n    <ng-template #actionTemplate let-dataItem>\n        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n            [disabled]=\"isValidateUpdate == false\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"updateGrid(dataItem.VatTuId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"removeGrid(dataItem.VatTuId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"addOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Chọn chóm: {{value}}\" class=\"p-0\"\n                style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"removeOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Bỏ chọn nhóm: {{value}}\"\n            class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKey2($event)\"\n                    (ngModelChange)=\"clearSearch2()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #soLuongXuatTemplate let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"SoLuongXuatChange($event, dataItem)\">\n        </app-textboxnumeric>\n\n    </ng-template>\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\" [min]=\"0\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"SoLuongXuatGrid1Change($event, dataItem)\">\n        </app-textboxnumeric>\n\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"addOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n                title=\"Chọn: {{dataItem.TenVatTu}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n\n    </ng-template>\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"removeOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n            title=\"Bỏ chọn: {{dataItem.TenVatTu}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button\n            type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaFooterTemplate>\n        <span style=\"float:right\">Tổng tiền xuất </span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid1Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',1) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid2Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',2) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho'}\n            \n                ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n\n<app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Dược phẩm',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/vat-tu/xuat-kho', queryParams: {holdQuery : true}}\n        \n            ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Xuất Kho Dược Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <!-- \n                            <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n                            </h3> -->\n\n\n                    <app-textbox id=\"SoPhieu\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"xuatKho.SoPhieu\" [disabled]=\"true\"\n                        label=\"Số phiếu\" maxlength=\"1000\">\n                    </app-textbox>\n                    <app-combobox id=\"KhoXuatId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"xuatKho.KhoXuatId\"\n                        [disabled]=\"true\" [required]=\"true\" label=\"Kho xuất\" url=\"TonKho/GetKhoDuocPham\"\n                        [modelText]=\"xuatKho.KhoXuatDisplay\"\n                        [validationerror]=\"'KhoXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"KhoNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                        *ngIf=\"xuatKho.LoaiXuatKho != xuatChoBenhNhan && xuatKho.KhoNhapId != null\"\n                        [(model)]=\"xuatKho.KhoNhapId\" label=\"Kho nhập\" [disabled]=\"true\" url=\"TonKho/GetKhoDuocPham\"\n                        [required]=\"true\" [modelText]=\"xuatKho.KhoNhapDisplay\"\n                        [validationerror]=\"'KhoNhapId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n\n                    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\"\n                        [required]=\"true\" [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\"\n                        url=\"XuatKhoVatTu/GetNguoiXuat\" [disabled]=\"true\"\n                        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n                        [disabled]=\"true\" url=\"XuatKhoVatTu/GetNguoiNhan\" [required]=\"true\"\n                        [validationerror]=\"'NguoiNhanId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.TenNguoiNhan\" [disabled]=\"true\" label=\"Người nhận\" maxlength=\"1000\">\n                    </app-textbox>\n\n                    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\"\n                        [(model)]=\"xuatKho.NgayXuat\" [required]=\"true\" [disabled]=\"true\"\n                        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n                    </app-datetimepicker>\n\n                    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n                        [disabled]=\"true\" label=\"Ghi chú\" maxlength=\"99999999\" [required]=\"true\"\n                        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n                    </app-textbox>\n\n\n                </div>\n\n                <div style=\"height: 20px;\">\n\n                </div>\n\n                <!-- <app-xuat-kho-shared [xemChiTiet]=\"true\">\n                        </app-xuat-kho-shared> -->\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN VẬT TƯ\n                    </h3>\n\n                    <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\" [sort]=\"sort\"\n                        [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\" [urlGetData]=\"urlGetData\"\n                        [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\"\n                        [headerTemplate]=\"headerTemplate\" #gridVatTu [groups]=\"groups\"></app-grid>\n\n                </div>\n\n                <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                    <strong>{{value}}</strong>\n                </ng-template>\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                            fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\"\n                                class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                    </div>\n                </ng-template>\n\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <!-- <app-formfooter [hiddenUpdateButton]=\"isValidateUpdate != true\" [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\">\n                            </app-formfooter> -->\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- </vex-page-layout-content>\n</vex-page-layout> -->");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveHVhdC1raG8tdmF0LXR1L3h1YXQta2hvLWluLXBoaWV1LXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXHh1YXQta2hvLXZhdC10dVxceHVhdC1raG8taW4tcGhpZXUtcG9wdXBcXHh1YXQta2hvLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS94dWF0LWtoby12YXQtdHUveHVhdC1raG8taW4tcGhpZXUtcG9wdXAveHVhdC1raG8taW4tcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUveHVhdC1raG8tdmF0LXR1L3h1YXQta2hvLWluLXBoaWV1LXBvcHVwL3h1YXQta2hvLWluLXBoaWV1LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: XuatKhoInPhieuPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoInPhieuPopupComponent", function() { return XuatKhoInPhieuPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let XuatKhoInPhieuPopupComponent = class XuatKhoInPhieuPopupComponent {
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
XuatKhoInPhieuPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
XuatKhoInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-in-phieu-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XuatKhoInPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS94dWF0LWtoby12YXQtdHUtY3JlYXRlL3h1YXQta2hvLXZhdC10dS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuCreateComponent", function() { return XuatKhoVatTuCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _xuat_kho_vat_tu_shared_xuat_kho_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");















let XuatKhoVatTuCreateComponent = class XuatKhoVatTuCreateComponent {
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
        //this.router.navigate(['nhap-xuat/vat-tu/xuat-kho/']);
        this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho?holdQuery=true');
    }
    cancel() {
        this.onCreated();
    }
    create() {
        var self = this;
        self.shared.validationErrors = null;
        self.ref.detectChanges();
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_14__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["thêm"]) }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                self.loading = true;
                if (self.shared.validationErrors != null && self.shared.validationErrors.some(x => x)) {
                    self.loading = false;
                    return;
                }
                self.baseService.create(self.shared.getSharedData()).subscribe(resultData => {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                    self.loading = false;
                    //self.onCreated();
                    if (resultData == null || resultData == undefined) {
                        self.onCreated();
                    }
                    else {
                        self.dialog.open(_xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_11__["XuatKhoInPhieuPopupComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: resultData,
                        }).afterClosed().subscribe(result => {
                            self.onCreated();
                        });
                    }
                }, (err) => {
                    //console.log("err = ", err);
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
XuatKhoVatTuCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_xuat_kho_vat_tu_shared_xuat_kho_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoVatTuSharedComponent"], { static: true })
], XuatKhoVatTuCreateComponent.prototype, "shared", void 0);
XuatKhoVatTuCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-create.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.scss")).default]
    })
], XuatKhoVatTuCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS94dWF0LWtoby12YXQtdHUtbGlzdC94dWF0LWtoby12YXQtdHUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: XuatKhoVatTuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuListComponent", function() { return XuatKhoVatTuListComponent; });
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
/* harmony import */ var _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../xuat-kho-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _xuat_kho_vat_tu_xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");


























let XuatKhoVatTuListComponent = class XuatKhoVatTuListComponent {
    constructor(apiService, authService, dialog, location, route, router, notificationService) {
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.baseRoute = "/nhap-xuat/vat-tu/xuat-kho";
        this.sort = [{
                field: 'NgayXuat',
                dir: 'desc'
            }];
        this.sortChild = [{
                field: 'VatTu',
                dir: 'asc'
            }];
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"];
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridChild = "XuatKhoVatTu/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild = "XuatKhoVatTu/GetTotalPageForGridChildAsync";
        this.holdQuery = null;
        this.additionalSearchString = null;
        //update xuat kho 14/9/2020
        this.xuatKhoSearch = new _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_12__["XuatKhoVatTuSearch"]();
        this.groups = [{ field: 'LoaiSuDung' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XuatKhoVatTu;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 90, Sortable: true, Template: this.soChungTuTemplate },
            { Field: "KhoXuat", Title: "Nơi xuất", Width: 200, Sortable: true },
            { Field: "NguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
            { Field: "NgayXuatDisplay", Title: "Ngày xuất", Width: 150, Sortable: true },
            { Field: "KhoNhap", Title: "Nơi nhập", Width: 200, Sortable: true },
            { Field: "NguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
            { Field: "LyDoXuatKho", Title: "Lý do xuất", MinWidth: 165, Sortable: true },
            { Field: "Action", Title: "", Width: 100, Sortable: false, HideFilter: true, Template: this.trangThaiTemplate }
        ];
        this.gridChildColumns = [
            { Field: "LoaiSuDung", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "VatTu", Title: "Vật tư", MinWidth: 150, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 150, Sortable: false },
            { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL Xuất", Width: 150, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu", Width: 150, Sortable: false },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].getItem("additionalSearchStringXuatKhoVT");
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
        else {
            var now = new Date();
            var tuNgay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
            var denNgay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
            this.xuatKhoSearch.RangeXuat.startDate = tuNgay;
            if (this.xuatKhoSearch.RangeXuat.startDate != null) {
                this.xuatKhoSearch.RangeXuat.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].formatDateTime(tuNgay, "dd/mm/yyyy");
            }
            this.xuatKhoSearch.RangeXuat.endDate = denNgay;
            if (this.xuatKhoSearch.RangeXuat.endDate != null) {
                this.xuatKhoSearch.RangeXuat.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].formatDateTime(denNgay, "dd/mm/yyyy");
            }
            this.additionalSearchString = JSON.stringify(this.xuatKhoSearch);
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].removeItem("additionalSearchStringXuatKhoVT");
        }
    }
    detail(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].View)) {
            this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho" + "/xem-chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(id, dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].View)) {
            this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho" + "/xem-chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("XuatKhoVatTu/ExportData", this.gridChild._gridQueryInfo).subscribe(resultData => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoVatTu" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
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
            this.xuatKhoSearch.RangeXuat.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeXuat.startDate, "dd/mm/yyyy");
        }
        else {
            this.xuatKhoSearch.RangeXuat.TuNgay = null;
        }
        if (this.xuatKhoSearch.RangeXuat != null && this.xuatKhoSearch.RangeXuat.endDate != null) {
            this.xuatKhoSearch.RangeXuat.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_20__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeXuat.endDate, "dd/mm/yyyy");
        }
        else {
            this.xuatKhoSearch.RangeXuat.DenNgay = null;
        }
        var queryString = JSON.stringify(this.xuatKhoSearch);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_21__["LocalStorageHelper"].setItem("additionalSearchStringXuatKhoVT", queryString);
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
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_19__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/vat-tu/xuat-kho/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    InPhieuXuat(xuatKhoVatTuId) {
        let hostingName = window.location.protocol + "//" + window.location.host;
        this.apiService.post("XuatKhoVatTu/InPhieuXuat?xuatKhoVatTuId=" + xuatKhoVatTuId + "&hostingName=" + hostingName)
            .subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dialog.open(_xuat_kho_vat_tu_xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_24__["XuatKhoInPhieuPopupComponent"], {
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
XuatKhoVatTuListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_16__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], XuatKhoVatTuListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
], XuatKhoVatTuListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], { static: false })
], XuatKhoVatTuListComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoVatTuXuatTemplate', { static: true })
], XuatKhoVatTuListComponent.prototype, "khoVatTuXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoVatTuListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
], XuatKhoVatTuListComponent.prototype, "soChungTuTemplate", void 0);
XuatKhoVatTuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-list.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.scss")).default]
    })
], XuatKhoVatTuListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: XuatKhoVatTuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuRoutingModule", function() { return XuatKhoVatTuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xuat_kho_vat_tu_create_xuat_kho_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_list_xuat_kho_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _xuat_kho_vat_tu_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.ts");









const routes = [
    {
        path: '',
        component: _xuat_kho_vat_tu_list_xuat_kho_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoVatTuListComponent"],
        data: {
            title: 'Xuất Kho Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XuatKhoVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _xuat_kho_vat_tu_create_xuat_kho_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_3__["XuatKhoVatTuCreateComponent"],
        data: {
            title: 'Thêm Xuất Kho Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XuatKhoVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id',
        component: _xuat_kho_vat_tu_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoVatTuUpdateComponent"],
        data: {
            title: 'Xem Xuất Kho Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XuatKhoVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    }
];
let XuatKhoVatTuRoutingModule = class XuatKhoVatTuRoutingModule {
};
XuatKhoVatTuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XuatKhoVatTuRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS94dWF0LWtoby12YXQtdHUtc2hhcmVkL3h1YXQta2hvLXZhdC10dS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuSharedComponent", function() { return XuatKhoVatTuSharedComponent; });
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
/* harmony import */ var _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../xuat-kho-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _duoc_pham_yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");






















let XuatKhoVatTuSharedComponent = class XuatKhoVatTuSharedComponent {
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
        this.urlGetData = "XuatKhoVatTu/GetAllVatTuData";
        this.urlGetTotal = "XuatKhoVatTu/GetAllVatTuTotal";
        this.checkAll = null;
        this.theFistLoadKhoXuat = true;
        this.khoXuatIdValuePrevious = null;
        this.nhapKhoIdValuePrevious = null;
        this.groups = [{ field: 'LoaiSuDungDisplay' }];
        this.lstDaChon = new Array();
        // dataChecked:;
        this.selectAllState = 'unchecked';
        this.stateXuatKho = {
            skip: 0,
            take: 20000,
            group: [{ field: 'LoaiSuDungDisplay' }]
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
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XuatKhoVatTu;
        this.xuatKho = new _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["XuatKhoVatTu"]();
        this.xuatKho.HostingName = window.location.protocol + "//" + window.location.host;
        this.themVatTu = new _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["ThemVatTu"]();
        //this.addToTest();
        this.gridColumns = [
            { Field: "LoaiSuDungDisplay", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "MaVatTu", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenVatTu", Title: "Vật tư", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },
            { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },
        ];
        this.gridResultColumns = [
            { Field: "LoaiSuDungDisplay", Title: "Loại sử dụng", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
            { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
            { Field: "MaVatTu", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenVatTu", Title: "Vật tư", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 70, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            // { Field: "Loai", Title: "Loại", Width: 70, Sortable: false },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: false, Template: this.soLuongXuatTemplate },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid2Template, },
        ];
        this.setNhanVienId();
        this.setDefaultNullForGrid();
        if (this.id !== undefined && this.id !== null) {
            //this.getById(this.id);
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
        //this.gridDataXuatKho = process(dataGrid, this.stateXuatKho);
        this.gridDataXuatKho = {
            data: dataGrid,
            total: dataGrid.length,
        };
        //console.log("setDataXuatKho = ", this.gridDataXuatKho, this.gridResult);
        // this.gridResult.setDataSource();
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
        //console.log("nhapKhoChange = ", $event, this.xuatKho.KhoDuocPhamXuatId,this.dialogRef);
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
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.lstXuatKho.length; i++) {
            lstId.push(this.lstXuatKho[i].Id);
        }
        this.gridVatTu.searchString = this.searchString;
        this.gridVatTu._additionalSearchString = this.xuatKho.KhoXuatId + '|' + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
        this.gridVatTu.search();
    }
    xuatKhoChange($event) {
        //console.log("xuatKhoChange = ", $event, this.xuatKho, this.lstXuatKho, this.dialogRef);
        this.xuatKho.KhoNhapId = null;
        if (this.lstXuatKho != null && this.lstXuatKho != undefined && this.lstXuatKho.length > 0) {
            let khoXuatIdClone = JSON.parse(JSON.stringify(this.khoXuatIdValuePrevious));
            if (this.dialogRef == undefined || this.dialogRef == null) {
                this.dialogRef = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["NhapXuatKhoMessage"].MessageConfirmKhoXuatChange }
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
                            this.apiService.post("XuatKhoVatTu/GetLoaiKhoVatTu/?id=" + $event).subscribe(resultData => {
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
            this.setDefaultNullForGrid();
            if ($event != undefined) {
                this.khoXuatIdValuePrevious = JSON.parse(JSON.stringify($event));
                this.apiService.post("XuatKhoVatTu/GetLoaiKhoVatTu/?id=" + $event).subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.themVatTu.loaiKhoVatTuXuat = resultData;
                        this.xuatKho.LoaiKhoVatTuXuat = resultData;
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
            this.apiService.post("XuatKhoVatTu/GetVatTu", this.themVatTu).subscribe(resultData => {
                //this.themDuocPham.soLuongTon = resultData;
                if (resultData != undefined && resultData != null) {
                    this.clearThongTinChiTiet();
                    this.dataForGrid.push(resultData);
                    //console.log("GetDuocPham", this.dataForGrid, this.dataForGrid.length)
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
        this.apiService.post("XuatKhoVatTu/GetVatTu", this.themVatTu).subscribe(resultData => {
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
        this.themVatTu = new _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_13__["ThemVatTu"]();
        this.themVatTu.loaiKhoVatTuXuat = this.xuatKho.LoaiKhoVatTuXuat;
        this.themVatTu.loaiXuatKho = this.xuatKho.LoaiXuatKho;
        //console.log("clearThongTinChiTiet = ", this.themDuocPham.loaiXuatKho, this.xuatKho.LoaiXuatKho);
    }
    addOn(dataItem) {
        //console.log("addOn = ", dataItem);
        let itemExists = this.lstXuatKho.find(o => o.Id == dataItem.Id);
        if (itemExists == undefined) {
            //set sl xuat
            //dataItem.SoLuongXuat = dataItem.SoLuongTon;
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
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_21__["LoadingComponent"], {
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
        let model = new _duoc_pham_yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_20__["GetVatTuOnGroupModel"]();
        model.Id = dataItem.items[0].LoaiSuDung;
        model.KhoXuatId = this.xuatKho.KhoXuatId;
        model.SearchString = this.searchString;
        model.ListDaChon = this.lstDaChon;
        this.addingPage();
        this.apiService.post("XuatKhoVatTu/GetVatTuOnGroup", model).subscribe(resultData => {
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
        this.lstXuatKho = this.lstXuatKho.filter(o => o.LoaiSuDung != dataItem.items[0].LoaiSuDung);
        this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o.LoaiSuDung != dataItem.items[0].LoaiSuDung);
        this.TimKiem2();
    }
    // SoLuongXuatChange(event, data) {
    //   //console.log("SoLuongXuatChange = ", event, data);
    //   let itemDisplay = this.lstXuatKhoDisplay.filter(o => o == data);
    //   let item = this.lstXuatKhoDisplay.filter(o => o == data);
    //   if (itemDisplay != undefined) {
    //     itemDisplay[0].SoLuongXuat = event;
    //   }
    //   if (item != undefined) {
    //     item[0].SoLuongXuat = event;
    //   }
    // }
    SoLuongXuatChange(soLuong, dataItem) {
        // //console.log("SoLuongXuatChange = ", event, data);
        // let itemDisplay = this.lstXuatKhoDisplay.filter(o => o == data);
        // let item = this.lstXuatKhoDisplay.filter(o => o == data);
        // if (itemDisplay != undefined) {
        //   itemDisplay[0].SoLuongXuat = event;
        // }
        // if (item != undefined) {
        //   item[0].SoLuongXuat = event;
        // }
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
        this.apiService.post("XuatKhoVatTu/GetSoLuongTon", this.themVatTu).subscribe(resultData => {
            // console.log("GetSoLuongTon", resultData)
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
        //console.log(duocPhamId);
        let index = this.dataForGrid.find(obj => obj.VatTuId == vatTuId);
        this.dataForGrid.splice(this.dataForGrid.indexOf(index), 1);
        //console.log(this.dataForGrid);
        this.gridDataSource = {
            data: this.dataForGrid,
            total: this.dataForGrid.length
        };
    }
    onDataBoundChildGrid1(data) {
        this.dataToSumThanhTienGrid1 = data.Data;
    }
};
XuatKhoVatTuSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridResult', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "gridResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid1', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "grid1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhom2GroupHeaderTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "tenNhom2GroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "soLuongXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "transferTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate2', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "transferTemplate2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid1Template', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "soLuongXuatGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "hsdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid1Template', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "thanhTienFooterGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid2Template', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "thanhTienFooterGrid2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], XuatKhoVatTuSharedComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoVatTuSharedComponent.prototype, "xemChiTiet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoVatTuSharedComponent.prototype, "xuatKhac", void 0);
XuatKhoVatTuSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-shared.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.scss")).default]
    })
], XuatKhoVatTuSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L3h1YXQta2hvLXZhdC10dS94dWF0LWtoby12YXQtdHUtdXBkYXRlL3h1YXQta2hvLXZhdC10dS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: XuatKhoVatTuUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuUpdateComponent", function() { return XuatKhoVatTuUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xuat-kho-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/kho.enum */ "./src/app/shared/enum/kho.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");











let XuatKhoVatTuUpdateComponent = class XuatKhoVatTuUpdateComponent {
    constructor(route, router, baseService, apiService, notificationService) {
        this.route = route;
        this.router = router;
        this.baseService = baseService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.isValidateUpdate = false;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.xuatKho = new _xuat_kho_vat_tu_model__WEBPACK_IMPORTED_MODULE_3__["XuatKhoVatTu"]();
        this.gridColumns = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
        this.xuatChoBenhNhan = src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_5__["XuatKhoDuocPham"].XuatChoBenhNhan;
        this.sort = [
            {
                field: "VatTu",
                dir: "asc"
            }
        ];
        this.urlGetData = "XuatKhoVatTu/GetDataForGridChildAsync";
        this.urlGetTotal = "XuatKhoVatTu/GetTotalPageForGridChildAsync";
        this.groups = [{ field: 'LoaiSuDung' }];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].XuatKhoDuocPham;
        //console.log("update = ", this.id);
        if (this.id !== undefined && this.id !== null) {
            //this.checkValidate(this.id);
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
        this.baseService.getById(id).subscribe(resultData => {
            if (resultData != undefined) {
                this.xuatKho = resultData;
            }
        });
    }
    onUpdated() {
        //this.router.navigate(['nhap-xuat/vat-tu/xuat-kho/']);
        this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho?holdQuery=true');
    }
    huy() {
        //this.router.navigate(['nhap-xuat/vat-tu/xuat-kho']);
        this.router.navigateByUrl('nhap-xuat/vat-tu/xuat-kho?holdQuery=true');
    }
};
XuatKhoVatTuUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTu', { static: true })
], XuatKhoVatTuUpdateComponent.prototype, "gridVatTu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoVatTuUpdateComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
XuatKhoVatTuUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-vat-tu-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-vat-tu-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-vat-tu-update.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.scss")).default]
    })
], XuatKhoVatTuUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.model.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.model.ts ***!
  \****************************************************************************************/
/*! exports provided: XuatKhoVatTu, VatTuXuatGridVo, XuatKhoVatTuChiTiet, XuatKhoVatTuChiTietViTri, ThemVatTu, XuatKhoVatTuSearch, rangeDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTu", function() { return XuatKhoVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuXuatGridVo", function() { return VatTuXuatGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuChiTiet", function() { return XuatKhoVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuChiTietViTri", function() { return XuatKhoVatTuChiTietViTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemVatTu", function() { return ThemVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuSearch", function() { return XuatKhoVatTuSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class XuatKhoVatTu {
    constructor(Id = 0, KhoXuatId = null, KhoXuatDisplay = null, KhoNhapId = null, KhoNhapDisplay = null, SoPhieu = null, LoaiXuatKho = null, LoaiXuatKhoDisplay = null, NguoiNhanId = null, NguoiNhanDisplay = null, NguoiXuatId = null, NguoiXuatDisplay = null, LoaiNguoiNhan = 1, TenNguoiNhan = null, LyDoXuatKho = null, HostingName = null, TraNCCDisplayTheoKho = null, TraNCC = null, LoaiKhoVatTuXuat = null, IsXuatKhac = false, NgayXuat = new Date(), XuatKhoVatTuChiTiets = []) {
        this.Id = Id;
        this.KhoXuatId = KhoXuatId;
        this.KhoXuatDisplay = KhoXuatDisplay;
        this.KhoNhapId = KhoNhapId;
        this.KhoNhapDisplay = KhoNhapDisplay;
        this.SoPhieu = SoPhieu;
        this.LoaiXuatKho = LoaiXuatKho;
        this.LoaiXuatKhoDisplay = LoaiXuatKhoDisplay;
        this.NguoiNhanId = NguoiNhanId;
        this.NguoiNhanDisplay = NguoiNhanDisplay;
        this.NguoiXuatId = NguoiXuatId;
        this.NguoiXuatDisplay = NguoiXuatDisplay;
        this.LoaiNguoiNhan = LoaiNguoiNhan;
        this.TenNguoiNhan = TenNguoiNhan;
        this.LyDoXuatKho = LyDoXuatKho;
        this.HostingName = HostingName;
        this.TraNCCDisplayTheoKho = TraNCCDisplayTheoKho;
        this.TraNCC = TraNCC;
        this.LoaiKhoVatTuXuat = LoaiKhoVatTuXuat;
        this.IsXuatKhac = IsXuatKhac;
        this.NgayXuat = NgayXuat;
        this.XuatKhoVatTuChiTiets = XuatKhoVatTuChiTiets;
    }
}
class VatTuXuatGridVo {
    constructor(Id = null, STT = null, TenVatTu = null, DVT = null, LaVatTuBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongXuat = null, LoaiSuDung = null, TenNhom = null, MaVatTu = null) {
        this.Id = Id;
        this.STT = STT;
        this.TenVatTu = TenVatTu;
        this.DVT = DVT;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongXuat = SoLuongXuat;
        this.LoaiSuDung = LoaiSuDung;
        this.TenNhom = TenNhom;
        this.MaVatTu = MaVatTu;
    }
}
class XuatKhoVatTuChiTiet {
    constructor(Id = 0, DatChatLuong = null, XuatKhoVatTuId = null, VatTuBenhVienId = null, TongSoLuongXuat = null, XuatKhoVatTuChiTietViTris = [], TenVatTu = null, ChatLuong = null, VatTuId = null, NgayXuat = new Date(), DonGiaBan = null, VAT = null, ChietKhau = null) {
        this.Id = Id;
        this.DatChatLuong = DatChatLuong;
        this.XuatKhoVatTuId = XuatKhoVatTuId;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.TongSoLuongXuat = TongSoLuongXuat;
        this.XuatKhoVatTuChiTietViTris = XuatKhoVatTuChiTietViTris;
        this.TenVatTu = TenVatTu;
        this.ChatLuong = ChatLuong;
        this.VatTuId = VatTuId;
        this.NgayXuat = NgayXuat;
        this.DonGiaBan = DonGiaBan;
        this.VAT = VAT;
        this.ChietKhau = ChietKhau;
    }
}
class XuatKhoVatTuChiTietViTri {
    constructor(Id = 0, XuatKhoVatTuChiTietId = null, NhapKhoVatTuChiTietId = null, SoLuongXuat = null, ViTri = null, SoLo = null, HanSuDungDisplay = null, NgayXuat = new Date()) {
        this.Id = Id;
        this.XuatKhoVatTuChiTietId = XuatKhoVatTuChiTietId;
        this.NhapKhoVatTuChiTietId = NhapKhoVatTuChiTietId;
        this.SoLuongXuat = SoLuongXuat;
        this.ViTri = ViTri;
        this.SoLo = SoLo;
        this.HanSuDungDisplay = HanSuDungDisplay;
        this.NgayXuat = NgayXuat;
    }
}
class ThemVatTu {
    constructor(VatTuId = null, ChatLuong = 1, SoLuongTon = null, SoLuongXuat = null, KhoId = null, DonGia = null, VAT = null, ChietKhau = null, loaiKhoVatTuXuat = null, loaiXuatKho = null) {
        this.VatTuId = VatTuId;
        this.ChatLuong = ChatLuong;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongXuat = SoLuongXuat;
        this.KhoId = KhoId;
        this.DonGia = DonGia;
        this.VAT = VAT;
        this.ChietKhau = ChietKhau;
        this.loaiKhoVatTuXuat = loaiKhoVatTuXuat;
        this.loaiXuatKho = loaiXuatKho;
    }
}
class XuatKhoVatTuSearch {
    constructor(SearchString = null, RangeXuat = new _yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"]()) {
        this.SearchString = SearchString;
        this.RangeXuat = RangeXuat;
    }
}
class rangeDate {
    constructor(startDate = new Date(), endDate = new Date()) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: XuatKhoVatTuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuModule", function() { return XuatKhoVatTuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xuat_kho_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-vat-tu-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-routing.module.ts");
/* harmony import */ var _xuat_kho_vat_tu_list_xuat_kho_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-list/xuat-kho-vat-tu-list.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_create_xuat_kho_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-create/xuat-kho-vat-tu-create.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-update/xuat-kho-vat-tu-update.component.ts");
/* harmony import */ var _xuat_kho_vat_tu_shared_xuat_kho_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu-shared/xuat-kho-vat-tu-shared.component.ts");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _xuat_kho_vat_tu_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./xuat-kho-vat-tu.service */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");






















let XuatKhoVatTuModule = class XuatKhoVatTuModule {
};
XuatKhoVatTuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xuat_kho_vat_tu_list_xuat_kho_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoVatTuListComponent"], _xuat_kho_vat_tu_create_xuat_kho_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_5__["XuatKhoVatTuCreateComponent"], _xuat_kho_vat_tu_update_xuat_kho_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_6__["XuatKhoVatTuUpdateComponent"], _xuat_kho_vat_tu_shared_xuat_kho_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoVatTuSharedComponent"], _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__["XuatKhoInPhieuPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_13__["InputsModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_14__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_17__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _xuat_kho_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_3__["XuatKhoVatTuRoutingModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__["GridModule"],
        ], entryComponents: [
            _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__["XuatKhoInPhieuPopupComponent"]
        ],
        providers: [
            _xuat_kho_vat_tu_service__WEBPACK_IMPORTED_MODULE_19__["XuatKhoVatTuService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_20__["BaseService"], useClass: _xuat_kho_vat_tu_service__WEBPACK_IMPORTED_MODULE_19__["XuatKhoVatTuService"] },
        ]
    })
], XuatKhoVatTuModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/xuat-kho-vat-tu/xuat-kho-vat-tu.service.ts ***!
  \******************************************************************************************/
/*! exports provided: XuatKhoVatTuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoVatTuService", function() { return XuatKhoVatTuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let XuatKhoVatTuService = class XuatKhoVatTuService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XuatKhoVatTu';
    }
};
XuatKhoVatTuService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
XuatKhoVatTuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XuatKhoVatTuService);



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
//# sourceMappingURL=nhap-xuat-vat-tu-xuat-kho-vat-tu-xuat-kho-vat-tu-module-es2015.js.map