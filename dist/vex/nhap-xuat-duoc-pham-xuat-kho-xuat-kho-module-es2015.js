(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <vex-page-layout> -->\n    <!-- <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n           \n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho'}\n            \n                ]\">\n            </vex-breadcrumbs>\n        </div>\n        \n\n    </vex-page-layout-header> -->\n    <app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Dược phẩm',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important;\" class=\"title m-0\">Xuất Kho Dược Phẩm</h2>\n                    \n                        <!-- (modelChange)=\"lyDoVaoVienChange($event)\" -->\n                        <!-- <app-radio id=\"IsXuatKhac\" class=\"no-label\" [(model)]=\"IsXuatKhac\"\n                             [items]=\"[{Value:false,Text:'Xuất qua kho khác'},{Value:true,Text:'Xuất khác'}]\">\n                        </app-radio> -->\n                    \n                    </div>\n\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-xuat-kho-shared [(xuatKhac)]=\"IsXuatKhac\">\n                        </app-xuat-kho-shared>\n\n                        <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                            <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                                                                            </app-formfooter> -->\n                            <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button *ngIf=\"!loading\" type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n<!-- \n    </vex-page-layout-content>\n</vex-page-layout> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid baseRoute=\"/nhap-xuat/duoc-pham/xuat-kho\" [sort]=\"sort\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                [additionalSearchString]=\"additionalSearchString\"></app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"/nhap-xuat/duoc-pham/xuat-kho\" [groups]=\"groups\" [sort]=\"sortChild\"\n                    [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        </div>\n        <ng-template #trangThaiTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <!-- <button (click)=\"detail(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Xem Chi Tiết</span>\n                    </button> -->\n                    <button (click)=\"InPhieuXuat(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <ng-template #khoDuocPhamXuatTemplate let-dataItem>\n            <a (click)=\"detail(dataItem.Id)\">\n                {{dataItem.KhoDuocPhamXuat}}\n            </a>\n        </ng-template>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoSearch.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n\n                <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeXuat\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                    [(model)]=\"xuatKhoSearch.RangeXuat\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKeyNgayXuat($event)\"\n                    (modelChange)=\"changeNgayXuatRange($event)\" (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                </app-daterangepicker>\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"themMoiXuatKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n        <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #soChungTuTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n                {{dataItem.SoPhieu}}</a>\n        </ng-template>\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <!-- \n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n    </h3> -->\n\n    <app-combobox hierarchyKeyToSend=\"khoXuat\" id=\"KhoDuocPhamXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.KhoDuocPhamXuatId\" [required]=\"true\" autoSelectFirstItem=\"true\" bind=\"true\"\n        [modelText]=\"xuatKho.KhoDuocPhamXuatDisplay\" label=\"Kho xuất\" (modelChange)=\"xuatKhoChange($event)\"\n        url=\"XuatKhoDuocPham/GetKhoTheoLoaiDuocPham\"\n        [validationerror]=\"'KhoDuocPhamXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"!xuatKhac\" hierarchyKeyToListen=\"khoXuat\" id=\"KhoDuocPhamNhapId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.KhoDuocPhamNhapId\" label=\"Kho nhập\" (modelChange)=\"nhapKhoChange($event)\"\n        url=\"XuatKhoDuocPham/GetKhoLoaiDuocPhamNhap\" [required]=\"true\"\n        [validationerror]=\"'KhoDuocPhamNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\" [required]=\"true\"\n        [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\" url=\"XuatKhoDuocPham/GetNguoiXuat\"\n        [disabled]=\"true\" [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n        url=\"XuatKhoDuocPham/GetNguoiNhan\">\n    </app-combobox>\n\n    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.TenNguoiNhan\" [disabled]=\"true\" label=\"Người nhận\" maxlength=\"1000\">\n    </app-textbox>\n\n    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\" [(model)]=\"xuatKho.NgayXuat\"\n        [required]=\"true\" [disabled]=\"isValidateUpdate == false\"\n        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n    </app-datetimepicker>\n\n    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n        [disabled]=\"isValidateUpdate == false\" label=\"Ghi chú\" maxlength=\"1000\" [required]=\"true\"\n        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n</div>\n\n<div style=\"height: 20px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n    </h3>\n\n    <app-grid [additionalSearchString]=\"xuatKho.KhoDuocPhamXuatId\" fxFlex=\"50%\" HideCheckAll=\"true\"\n        [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [urlGetData]=\"urlGetData\"\n        (extOnDataBound)=\"onDataBoundChildGrid1($event)\" [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\"\n        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\"\n        [headerTemplate]=\"headerTemplate\" #gridDuocPham [groups]=\"groups\"></app-grid>\n\n    <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n        [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n        [gridDataSource]=\"gridDataXuatKho\"></app-grid>\n\n\n    <ng-template #actionTemplate let-dataItem>\n        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n            [disabled]=\"isValidateUpdate == false\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"updateGrid(dataItem.DuocPhamId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"removeGrid(dataItem.DuocPhamId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n\n    <!-- <ng-template #detailTemplate let-dataItem>\n        <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridChildDuocPham\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"dataItem.XuatKhoDuocPhamChiTietViTris\" searchString=\"{{dataItem.Id}}\"\n            pageSize=\"5\" [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n    </ng-template> -->\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"addOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Chọn chóm: {{value}}\" class=\"p-0\"\n                style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"removeOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Bỏ chọn nhóm: {{value}}\"\n            class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKey2($event)\"\n                    (ngModelChange)=\"clearSearch2()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #soLuongXuatTemplate let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"SoLuongXuatChange($event, dataItem)\">\n        </app-textboxnumeric>\n\n    </ng-template>\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\" [min]=\"0\"\n            [max]=\"dataItem.SoLuongTon\" (modelChange)=\"SoLuongXuatGrid1Change($event, dataItem)\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"addOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n                title=\"Chọn: {{dataItem.TenDuocPham}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n\n    </ng-template>\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"removeOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n            title=\"Bỏ chọn: {{dataItem.TenDuocPham}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n            mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaFooterTemplate>\n        <span style=\"float:right\">Tổng tiền xuất </span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid1Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',1) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid2Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',2) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho'}\n            \n                ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n\n<app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Dược phẩm',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Xuất Kho Dược Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <!-- \n                            <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n                            </h3> -->\n\n\n                    <app-textbox id=\"SoPhieu\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"xuatKho.SoPhieu\" [disabled]=\"true\"\n                        label=\"Số phiếu\" maxlength=\"1000\">\n                    </app-textbox>\n                    <app-combobox id=\"KhoDuocPhamXuatId\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                        [(model)]=\"xuatKho.KhoDuocPhamXuatId\" [disabled]=\"true\" [required]=\"true\" bind=\"true\"\n                        label=\"Kho xuất\" url=\"TonKho/GetKhoDuocPham\"\n                        [validationerror]=\"'KhoDuocPhamXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"KhoDuocPhamNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                        *ngIf=\"xuatKho.LoaiXuatKho != xuatChoBenhNhan && xuatKho.KhoDuocPhamNhapId != null\"\n                        [(model)]=\"xuatKho.KhoDuocPhamNhapId\" label=\"Kho nhập\" [disabled]=\"true\"\n                        url=\"TonKho/GetKhoDuocPham\" [required]=\"true\" bind=\"true\"\n                        [validationerror]=\"'KhoDuocPhamNhapId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n\n                    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\"\n                        [required]=\"true\" [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\"\n                        url=\"XuatKhoDuocPham/GetNguoiXuat\" [disabled]=\"true\"\n                        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n                        [disabled]=\"true\" url=\"XuatKhoDuocPham/GetNguoiNhan\" [required]=\"true\"\n                        [validationerror]=\"'NguoiNhanId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.TenNguoiNhan\" [disabled]=\"true\" label=\"Người nhận\" maxlength=\"1000\">\n                    </app-textbox>\n\n                    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\"\n                        [(model)]=\"xuatKho.NgayXuat\" [required]=\"true\" [disabled]=\"true\"\n                        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n                    </app-datetimepicker>\n\n                    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n                        [disabled]=\"true\" label=\"Ghi chú\" maxlength=\"99999999\" [required]=\"true\"\n                        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n                    </app-textbox>\n\n\n                </div>\n\n                <div style=\"height: 20px;\">\n\n                </div>\n\n                <!-- <app-xuat-kho-shared [xemChiTiet]=\"true\">\n                        </app-xuat-kho-shared> -->\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n                    </h3>\n\n                    <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\" [sort]=\"sort\"\n                        [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\" [urlGetData]=\"urlGetData\"\n                        [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\"\n                        [headerTemplate]=\"headerTemplate\" #gridDuocPham [groups]=\"groups\"></app-grid>\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </div>\n\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                            fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\"\n                                class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                    </div>\n                </ng-template>\n\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <!-- <app-formfooter [hiddenUpdateButton]=\"isValidateUpdate != true\" [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\">\n                            </app-formfooter> -->\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- </vex-page-layout-content>\n</vex-page-layout> -->");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tY3JlYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHh1YXQta2hvXFx4dWF0LWtoby1jcmVhdGVcXHh1YXQta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tY3JlYXRlL3h1YXQta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS94dWF0LWtoby94dWF0LWtoby1jcmVhdGUveHVhdC1raG8tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: XuatKhoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoCreateComponent", function() { return XuatKhoCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xuat_kho_shared_xuat_kho_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../xuat-kho-shared/xuat-kho-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/error/error.service */ "./src/app/core/error/error.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");















let XuatKhoCreateComponent = class XuatKhoCreateComponent {
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
        this.router.navigate(['nhap-xuat/duoc-pham/xuat-kho/']);
    }
    cancel() {
        this.onCreated();
    }
    create() {
        var self = this;
        self.shared.validationErrors = null;
        self.ref.detectChanges();
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
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
                        self.dialog.open(_xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_14__["XuatKhoInPhieuPopupComponent"], {
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
XuatKhoCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_xuat_kho_shared_xuat_kho_shared_component__WEBPACK_IMPORTED_MODULE_3__["XuatKhoSharedComponent"], { static: true })
], XuatKhoCreateComponent.prototype, "shared", void 0);
XuatKhoCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-create.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.scss")).default]
    })
], XuatKhoCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8taW4tcGhpZXUtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceHVhdC1raG9cXHh1YXQta2hvLWluLXBoaWV1LXBvcHVwXFx4dWF0LWtoby1pbi1waGlldS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8taW4tcGhpZXUtcG9wdXAveHVhdC1raG8taW4tcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8taW4tcGhpZXUtcG9wdXAveHVhdC1raG8taW4tcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts ***!
  \************************************************************************************************************************/
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], XuatKhoInPhieuPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvL3h1YXQta2hvLWxpc3QveHVhdC1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: XuatKhoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoListComponent", function() { return XuatKhoListComponent; });
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
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _xuat_kho_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../xuat-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts");
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
/* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");


























let XuatKhoListComponent = class XuatKhoListComponent {
    constructor(apiService, authService, dialog, location, route, router, notificationService) {
        this.apiService = apiService;
        this.authService = authService;
        this.dialog = dialog;
        this.location = location;
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.baseRoute = "/nhap-xuat/duoc-pham/xuat-kho";
        this.sort = [{
                field: 'NgayXuat',
                dir: 'desc'
            }];
        this.sortChild = [{
                field: 'DuocPham',
                dir: 'asc'
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
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridChild = "XuatKhoDuocPham/GetDataForGridChildAsync";
        this.urlGetTotalPageGridChild = "XuatKhoDuocPham/GetTotalPageForGridChildAsync";
        this.holdQuery = null;
        this.additionalSearchString = null;
        //update xuat kho 14/9/2020
        this.xuatKhoSearch = new _xuat_kho_model__WEBPACK_IMPORTED_MODULE_15__["XuatKhoDuocPhamSearch"]();
        this.groups = [{ field: 'Nhom' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].XuatKhoDuocPham;
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số phiếu", Width: 90, Sortable: true, Template: this.soChungTuTemplate },
            { Field: "KhoDuocPhamXuat", Title: "Nơi xuất", Width: 200, Sortable: true },
            { Field: "NguoiXuat", Title: "Người xuất", Width: 150, Sortable: true },
            { Field: "NgayXuatDisplay", Title: "Ngày xuất", Width: 150, Sortable: true },
            { Field: "KhoDuocPhamNhap", Title: "Nơi nhập", Width: 200, Sortable: true },
            { Field: "NguoiNhan", Title: "Người nhận", Width: 150, Sortable: true },
            { Field: "LyDoXuatKho", Title: "Lý do xuất", MinWidth: 165, Sortable: true },
            { Field: "Action", Title: "", Width: 100, Sortable: false, HideFilter: true, Template: this.trangThaiTemplate }
        ];
        this.gridChildColumns = [
            { Field: "Nhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "DuocPham", Title: "Dược phẩm", MinWidth: 150, Sortable: false },
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
                this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].getItem("additionalSearchStringXuatKhoDp");
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
                this.xuatKhoSearch.RangeXuat.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(tuNgay, "dd/mm/yyyy");
            }
            this.xuatKhoSearch.RangeXuat.endDate = denNgay;
            if (this.xuatKhoSearch.RangeXuat.endDate != null) {
                this.xuatKhoSearch.RangeXuat.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(denNgay, "dd/mm/yyyy");
            }
            this.additionalSearchString = JSON.stringify(this.xuatKhoSearch);
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].removeItem("additionalSearchStringXuatKhoDp");
        }
    }
    detail(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho" + "/xem-chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTiet(id, dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho" + "/xem-chi-tiet/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("XuatKhoDuocPham/ExportData", this.gridChild._gridQueryInfo).subscribe(resultData => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoDuocPham" + dateTimeNow.getFullYear() + ".xlsx");
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
            this.xuatKhoSearch.RangeXuat.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeXuat.startDate, "dd/mm/yyyy");
        }
        else {
            this.xuatKhoSearch.RangeXuat.TuNgay = null;
        }
        if (this.xuatKhoSearch.RangeXuat != null && this.xuatKhoSearch.RangeXuat.endDate != null) {
            this.xuatKhoSearch.RangeXuat.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.xuatKhoSearch.RangeXuat.endDate, "dd/mm/yyyy");
        }
        else {
            this.xuatKhoSearch.RangeXuat.DenNgay = null;
        }
        var queryString = JSON.stringify(this.xuatKhoSearch);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].setItem("additionalSearchStringXuatKhoDp", queryString);
        this.gridChild.search();
    }
    changeNgayXuatRange($event) {
        //console.log("changeNgayNhapRange = ", $event);
        this.Timkiem();
    }
    onKeyNgayXuat($event) {
        //console.log("onKeyNgayNhap = ", $event);
        if ($event.keyCode == 13) {
            this.Timkiem();
        }
    }
    blur($event) {
        //console.log("blur = ", $event);
        this.Timkiem();
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.Timkiem();
        }
    }
    themMoiXuatKho() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    InPhieuXuat(xuatKhoDuocPhamId) {
        let hostingName = window.location.protocol + "//" + window.location.host;
        this.apiService.post("XuatKhoDuocPham/InPhieuXuat?xuatKhoDuocPhamId=" + xuatKhoDuocPhamId + "&hostingName=" + hostingName)
            .subscribe((resultData) => {
            if (resultData != undefined && resultData != null) {
                this.dialog.open(_xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_24__["XuatKhoInPhieuPopupComponent"], {
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
XuatKhoListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], XuatKhoListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parentGrid', { static: true })
], XuatKhoListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], { static: false })
], XuatKhoListComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoDuocPhamXuatTemplate', { static: true })
], XuatKhoListComponent.prototype, "khoDuocPhamXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoListComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
], XuatKhoListComponent.prototype, "soChungTuTemplate", void 0);
XuatKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.scss")).default]
    })
], XuatKhoListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: XuatKhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoRoutingModule", function() { return XuatKhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _xuat_kho_list_xuat_kho_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-list/xuat-kho-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _xuat_kho_create_xuat_kho_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-create/xuat-kho-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts");
/* harmony import */ var _xuat_kho_update_xuat_kho_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuat-kho-update/xuat-kho-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts");









const routes = [
    {
        path: '',
        component: _xuat_kho_list_xuat_kho_list_component__WEBPACK_IMPORTED_MODULE_3__["XuatKhoListComponent"],
        data: {
            title: 'Xuất Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].XuatKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _xuat_kho_create_xuat_kho_create_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoCreateComponent"],
        data: {
            title: 'Thêm Xuất Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].XuatKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id',
        component: _xuat_kho_update_xuat_kho_update_component__WEBPACK_IMPORTED_MODULE_8__["XuatKhoUpdateComponent"],
        data: {
            title: 'Xem Xuất Kho Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].XuatKhoDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
    }
];
let XuatKhoRoutingModule = class XuatKhoRoutingModule {
};
XuatKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], XuatKhoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvL3h1YXQta2hvLXNoYXJlZC94dWF0LWtoby1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: XuatKhoSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoSharedComponent", function() { return XuatKhoSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../xuat-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts");
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
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/chevron-right */ "./node_modules/@iconify/icons-ic/chevron-right.js");
/* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/last-page */ "./node_modules/@iconify/icons-ic/last-page.js");
/* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/chevron-left */ "./node_modules/@iconify/icons-ic/chevron-left.js");
/* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/first-page */ "./node_modules/@iconify/icons-ic/first-page.js");
/* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts");























let XuatKhoSharedComponent = class XuatKhoSharedComponent {
    constructor(route, dialog, baseService, cdRef, authService, apiService, notificationService) {
        this.route = route;
        this.dialog = dialog;
        this.baseService = baseService;
        this.cdRef = cdRef;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icRight = _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icLeft = _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icRightLast = _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icLeftLast = _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.isCreate = true;
        this.showFormDetail = false;
        this.searchString = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.gridColumns = [];
        this.gridResultColumns = [];
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.popupLoadingData = null;
        this.dataForGrid = [];
        this.validationErrors = [];
        this.lstXuatKhoDuocPhamChiTietToUpdate = [];
        this.isValidateUpdate = true;
        this.urlGetData = "XuatKhoDuocPham/GetAllDuocPhamData";
        this.urlGetTotal = "XuatKhoDuocPham/GetAllDuocPhamTotal";
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
        this.xemChiTiet = false;
        this.xuatKhac = false;
        this.dataToSumThanhTienGrid1 = [];
        this.dataToSumThanhTienGrid2 = [];
    }
    ngAfterViewInit() {
        //$("#DpChecked1").prop('checked', true);
    }
    ngAfterContentInit() {
        //$("#DpChecked1").prop('checked', true);
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
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].XuatKhoDuocPham;
        this.xuatKho = new _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__["XuatKho"]();
        this.xuatKho.HostingName = window.location.protocol + "//" + window.location.host;
        this.themDuocPham = new _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__["ThemDuocPham"]();
        //this.addToTest();
        this.gridColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: "MaDuocPham", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenDuocPham", Title: "Dược phẩm", Width: 100, Sortable: true, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
            { Field: "SoLuongTonDisplay", Title: "SL tồn", Width: 70, Sortable: false },
            { Field: "SoLuongXuat", Title: "Sl xuất", Width: 70, Sortable: true, Template: this.soLuongXuatGrid1Template },
            { Field: "ThanhTien", Title: "Thành tiền xuất", Width: 100, Sortable: false, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienFooterGrid1Template, },
            { Field: "Id", Title: "", Width: 30, Sortable: true, Template: this.transferTemplate },
        ];
        this.gridResultColumns = [
            { Field: "TenNhom", Title: "Tên Nhóm", Sortable: false, Hidden: true, HideFilter: true, TemplateGroupHeader: this.tenNhom2GroupHeaderTemplate },
            { Field: "Id", Title: "", Width: 30, Sortable: false, Template: this.transferTemplate2 },
            { Field: "MaDuocPham", Title: "Mã", Width: 50, Sortable: true, ShowTooltip: true },
            { Field: "TenDuocPham", Title: "Dược phẩm", Width: 100, Sortable: false, ShowTooltip: true, TemplateFooter: this.donGiaFooterTemplate, },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "SoLo", Title: "Số lô", Width: 50, Sortable: false, ShowTooltip: true },
            { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 100, Sortable: true, Template: this.hsdTemplate },
            { Field: "DVT", Title: "ĐVT", Width: 40, Sortable: false, ShowTooltip: true },
            { Field: "DonGia", Title: "Đơn giá", Width: 70, Sortable: false, Template: this.donGiaTemplate },
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
    onDataBoundChildGrid1(data) {
        this.dataToSumThanhTienGrid1 = data.Data;
    }
    setNhanVienId() {
        //vì user la nhân viên nên lấy id của nhau
        let user = this.authService.getAccessUser();
        this.xuatKho.NguoiXuatId = user.Id;
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
        if (this.gridDuocPham == undefined)
            return;
        let lstId = new Array();
        for (let i = 0; i < this.lstXuatKho.length; i++) {
            lstId.push(this.lstXuatKho[i].Id);
        }
        this.gridDuocPham._additionalSearchString = this.xuatKho.KhoDuocPhamXuatId + "|" + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
        this.gridDuocPham.setDataSource();
    }
    setDefaultNullForGrid() {
        //let dataNull = new XuatKho();
        //this.dataForGrid = new Array<XuatKhoDuocPhamChiTiet>();
        this.setDataXuatKho();
        //this.refreshGrid();
    }
    Them() {
        this.validationErrors = null;
        let check = this.dataForGrid.filter(obj => obj.DuocPhamId == this.themDuocPham.DuocPhamId);
        if (check.length == 0) {
            this.apiService.post("XuatKhoDuocPham/GetDuocPham", this.themDuocPham).subscribe(resultData => {
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
    refreshGrid() {
        if (!this.cdRef.destroyed) {
            this.cdRef.detectChanges();
        }
        if (this.gridResult != undefined) {
            this.gridResult.setDataSource();
        }
        // if (this.gridChildDuocPham != undefined) {
        //   this.gridChildDuocPham.setDataSource();
        // }
    }
    getListDuocPham($event) {
        //console.log("getListDuocPham = ", $event, this.xuatKho.KhoDuocPhamNhapId);
        this.themDuocPham.DuocPhamId = $event;
        this.themDuocPham.KhoId = this.xuatKho.KhoDuocPhamXuatId;
        this.apiService.post("XuatKhoDuocPham/GetSoLuongTon", this.themDuocPham).subscribe(resultData => {
            //console.log("GetSoLuongTon", resultData)
            this.themDuocPham.SoLuongTon = resultData;
        }, () => {
            //console.log("error")
        });
        if (this.themDuocPham.loaiKhoDuocPhamXuat == 1 && this.themDuocPham.loaiXuatKho == 1) {
            this.apiService.post("XuatKhoDuocPham/GetDonGiaBan/?duocPhamId=" + $event).subscribe(resultData => {
                //console.log("GetSoLuongTon", resultData)
                this.themDuocPham.DonGia = resultData;
            }, () => {
                //console.log("error")
            });
        }
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            ;
        });
    }
    removeGrid(duocPhamId) {
        //console.log(duocPhamId);
        let index = this.dataForGrid.find(obj => obj.DuocPhamId == duocPhamId);
        this.dataForGrid.splice(this.dataForGrid.indexOf(index), 1);
        //console.log(this.dataForGrid);
        this.gridDataSource = {
            data: this.dataForGrid,
            total: this.dataForGrid.length
        };
    }
    updateGrid(duocPhamId) {
        let item = this.dataForGrid.filter(obj => obj.DuocPhamId == duocPhamId);
        //console.log("UpdateGrid = ", item, duocPhamId);
        this.themDuocPham.DuocPhamId = item[0].DuocPhamId;
        this.themDuocPham.ChatLuong = item[0].DatChatLuong == true ? 1 : 0;
        this.themDuocPham.SoLuongXuat = item[0].TongSoLuongXuat;
        this.themDuocPham.KhoId = this.xuatKho.KhoDuocPhamXuatId;
        this.themDuocPham.DonGia = item[0].DonGiaBan;
        this.themDuocPham.VAT = item[0].VAT;
        this.themDuocPham.ChietKhau = item[0].ChietKhau;
        this.enableUpdateGird(duocPhamId);
        this.apiService.post("XuatKhoDuocPham/GetSoLuongTon", this.themDuocPham).subscribe(resultData => {
            this.themDuocPham.SoLuongTon = resultData;
            this.showFormDetail = true;
        }, () => {
            //console.log("error")
        });
    }
    enableUpdateGird(id) {
        this.isUpdateGrid = true;
        this.isIdNeedUpdate = id;
    }
    disableUpdateGrid() {
        this.isUpdateGrid = false;
        this.isIdNeedUpdate = null;
        this.clearThongTinChiTiet();
    }
    clearThongTinChiTiet() {
        this.themDuocPham = new _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__["ThemDuocPham"]();
        this.themDuocPham.loaiKhoDuocPhamXuat = this.xuatKho.LoaiKhoDuocPhamXuat;
        this.themDuocPham.loaiXuatKho = this.xuatKho.LoaiXuatKho;
        //console.log("clearThongTinChiTiet = ", this.themDuocPham.loaiXuatKho, this.xuatKho.LoaiXuatKho);
    }
    Sua() {
        //console.log(this.isIdNeedUpdate);
        this.validationErrors = null;
        this.apiService.post("XuatKhoDuocPham/GetDuocPham", this.themDuocPham).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                let index = this.dataForGrid.find(obj => obj.DuocPhamId == this.isIdNeedUpdate);
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
    getSharedData() {
        this.xuatKho.IsXuatKhac = this.xuatKhac;
        this.xuatKho.XuatKhoDuocPhamChiTiets = this.lstXuatKho;
        return this.xuatKho;
    }
    nhapKhoChange($event) {
        //console.log("nhapKhoChange = ", $event, this.xuatKho.KhoDuocPhamXuatId,this.dialogRef);
        if (this.dialogRef == undefined || this.dialogRef == null) {
            this.nhapKhoIdValuePrevious = $event;
        }
    }
    xuatKhoChange($event) {
        //console.log("xuatKhoChange = ", $event, this.xuatKho, this.lstXuatKho, this.dialogRef);
        this.xuatKho.KhoDuocPhamNhapId = null;
        if (this.lstXuatKho != null && this.lstXuatKho != undefined && this.lstXuatKho.length > 0) {
            let khoXuatIdClone = JSON.parse(JSON.stringify(this.khoXuatIdValuePrevious));
            if (this.dialogRef == undefined || this.dialogRef == null) {
                this.dialogRef = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
                    disableClose: false,
                    width: '400px',
                    data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["NhapXuatKhoMessage"].MessageConfirmKhoXuatChange }
                }).afterClosed().subscribe(result => {
                    this.dialogRef = null;
                    if (result == "Yes") {
                        this.lstDaChon = new Array();
                        this.khoXuatIdValuePrevious = $event;
                        this.xuatKho.KhoDuocPhamXuatId = $event;
                        this.lstXuatKho = new Array();
                        this.lstXuatKhoDisplay = new Array();
                        this.searchString2 = null;
                        this.TimKiem2();
                        if ($event != undefined) {
                            this.apiService.post("XuatKhoDuocPham/GetLoaiKhoDuocPham/?id=" + $event).subscribe(resultData => {
                                if (resultData != undefined && resultData != null) {
                                    this.themDuocPham.loaiKhoDuocPhamXuat = resultData;
                                    this.xuatKho.LoaiKhoDuocPhamXuat = resultData;
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
                        this.xuatKho.KhoDuocPhamXuatId = khoXuatIdClone;
                        this.xuatKho.KhoDuocPhamNhapId = this.nhapKhoIdValuePrevious;
                    }
                });
            }
        }
        else {
            this.lstDaChon = new Array();
            this.setDefaultNullForGrid();
            if ($event != undefined) {
                this.khoXuatIdValuePrevious = JSON.parse(JSON.stringify($event));
                this.apiService.post("XuatKhoDuocPham/GetLoaiKhoDuocPham/?id=" + $event).subscribe(resultData => {
                    if (resultData != undefined && resultData != null) {
                        this.themDuocPham.loaiKhoDuocPhamXuat = resultData;
                        this.xuatKho.LoaiKhoDuocPhamXuat = resultData;
                    }
                }, () => {
                });
            }
            else {
                this.khoXuatIdValuePrevious = null;
            }
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
            this.lstXuatKhoDisplay = this.lstXuatKho.filter(o => o.TenDuocPham.toLowerCase().trim().indexOf(search) != -1
                || o.DVT.toLowerCase().trim().indexOf(search) != -1 || o.Loai.toLowerCase().trim().indexOf(search) != -1
                || o.SoLuongTon.toString().toLowerCase().trim().indexOf(search) != -1 || o.SoLuongTonDisplay.toLowerCase().trim().indexOf(search) != -1
                || o.MaDuocPham.toLowerCase().trim().indexOf(search) != -1
                || o.SoDangKy.toLowerCase().trim().indexOf(search) != -1);
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
            this.gridDuocPham.searchString = "";
            this.gridDuocPham.search();
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.TimKiem();
        }
    }
    TimKiem() {
        if (this.gridDuocPham == null) {
            return;
        }
        const lstId = new Array();
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.lstXuatKho.length; i++) {
            lstId.push(this.lstXuatKho[i].Id);
        }
        this.gridDuocPham.searchString = this.searchString;
        this.gridDuocPham._additionalSearchString = this.xuatKho.KhoDuocPhamXuatId + '|' + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
        this.gridDuocPham.search();
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
                let data = new _yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_22__["DaSuaSoLuongXuat"]();
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
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
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
        let model = new _yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_22__["GetDuocPhamOnGroupModel"]();
        model.Id = dataItem.items[0].DuocPhamBenhVienPhanNhomId;
        model.KhoXuatId = this.xuatKho.KhoDuocPhamXuatId;
        model.SearchString = this.searchString;
        model.ListDaChon = dataItem.items;
        this.addingPage();
        this.apiService.post("XuatKhoDuocPham/GetDuocPhamOnGroup", model).subscribe(resultData => {
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
        this.lstXuatKho = this.lstXuatKho.filter(o => o.DuocPhamBenhVienPhanNhomId != dataItem.items[0].DuocPhamBenhVienPhanNhomId);
        this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(o => o.DuocPhamBenhVienPhanNhomId != dataItem.items[0].DuocPhamBenhVienPhanNhomId);
        this.TimKiem2();
    }
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
};
XuatKhoSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPham', { static: true })
], XuatKhoSharedComponent.prototype, "gridDuocPham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridResult', { static: true })
], XuatKhoSharedComponent.prototype, "gridResult", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhom2GroupHeaderTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "tenNhom2GroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "soLuongXuatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "transferTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('transferTemplate2', { static: true })
], XuatKhoSharedComponent.prototype, "transferTemplate2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "hsdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid1Template', { static: true })
], XuatKhoSharedComponent.prototype, "thanhTienFooterGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterGrid2Template', { static: true })
], XuatKhoSharedComponent.prototype, "thanhTienFooterGrid2Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongXuatGrid1Template', { static: true })
], XuatKhoSharedComponent.prototype, "soLuongXuatGrid1Template", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaFooterTemplate', { static: true })
], XuatKhoSharedComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoSharedComponent.prototype, "xemChiTiet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], XuatKhoSharedComponent.prototype, "xuatKhac", void 0);
XuatKhoSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.scss")).default]
    })
], XuatKhoSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tdXBkYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHh1YXQta2hvXFx4dWF0LWtoby11cGRhdGVcXHh1YXQta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tdXBkYXRlL3h1YXQta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS94dWF0LWtoby94dWF0LWtoby11cGRhdGUveHVhdC1raG8tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: XuatKhoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoUpdateComponent", function() { return XuatKhoUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../xuat-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/kho.enum */ "./src/app/shared/enum/kho.enum.ts");











let XuatKhoUpdateComponent = class XuatKhoUpdateComponent {
    constructor(route, router, baseService) {
        this.route = route;
        this.router = router;
        this.baseService = baseService;
        this.isValidateUpdate = false;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.xuatKho = new _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__["XuatKho"]();
        this.gridColumns = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"];
        this.xuatChoBenhNhan = src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_10__["XuatKhoDuocPham"].XuatChoBenhNhan;
        this.sort = [
            {
                field: "DuocPham",
                dir: "asc"
            }
        ];
        this.urlGetData = "XuatKhoDuocPham/GetDataForGridChildAsync";
        this.urlGetTotal = "XuatKhoDuocPham/GetTotalPageForGridChildAsync";
        this.groups = [{ field: 'Nhom' }];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].XuatKhoDuocPham;
        //console.log("update = ", this.id);
        if (this.id !== undefined && this.id !== null) {
            //this.checkValidate(this.id);
            this.getById(this.id);
        }
        this.gridDuocPham.searchString = this.id + "";
        this.gridColumns = [
            { Field: "Nhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "DuocPham", Title: "Dược phẩm", MinWidth: 200, Sortable: false },
            { Field: "DVT", Title: "ĐVT", Width: 100, Sortable: false },
            { Field: "Loai", Title: "Loại", Width: 150, Sortable: false },
            { Field: "SoLuongXuat", Title: "SL xuất", Width: 150, Sortable: false },
            { Field: "SoPhieu", Title: "Số phiếu nhập", Width: 150, Sortable: false },
        ];
    }
    clearSearch() {
        if (this.searchString == "" || this.searchString == null) {
            this.gridDuocPham._additionalSearchString = "";
            this.gridDuocPham.search();
        }
    }
    onKey(event) {
        if (event.keyCode == 13) {
            this.TimKiem();
        }
    }
    TimKiem() {
        this.gridDuocPham._additionalSearchString = this.searchString;
        this.gridDuocPham.search();
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            if (resultData != undefined) {
                this.xuatKho = resultData;
            }
        });
    }
    onUpdated() {
        this.router.navigate(['nhap-xuat/duoc-pham/xuat-kho/']);
    }
    huy() {
        this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho?holdQuery=true');
    }
};
XuatKhoUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPham', { static: true })
], XuatKhoUpdateComponent.prototype, "gridDuocPham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], XuatKhoUpdateComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], XuatKhoUpdateComponent.prototype, "nhomGroupHeaderTemplate", void 0);
XuatKhoUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-xuat-kho-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.scss")).default]
    })
], XuatKhoUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts ***!
  \*****************************************************************************/
/*! exports provided: DuocPhamXuatGridVo, XuatKho, XuatKhoDuocPhamChiTiet, XuatKhoDuocPhamChiTietViTri, ThemDuocPham, XuatKhoDuocPhamSearch, rangeDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamXuatGridVo", function() { return DuocPhamXuatGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKho", function() { return XuatKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPhamChiTiet", function() { return XuatKhoDuocPhamChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPhamChiTietViTri", function() { return XuatKhoDuocPhamChiTietViTri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemDuocPham", function() { return ThemDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPhamSearch", function() { return XuatKhoDuocPhamSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function() { return rangeDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class DuocPhamXuatGridVo {
    constructor(Id = null, STT = null, TenDuocPham = null, DVT = null, LaDuocPhamBHYT = null, Loai = null, SoLuongTon = null, SoLuongTonDisplay = null, SoLuongXuat = null, DuocPhamBenhVienPhanNhomId = null, TenNhom = null, MaDuocPham = null, SoDangKy = null) {
        this.Id = Id;
        this.STT = STT;
        this.TenDuocPham = TenDuocPham;
        this.DVT = DVT;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.Loai = Loai;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongTonDisplay = SoLuongTonDisplay;
        this.SoLuongXuat = SoLuongXuat;
        this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
        this.TenNhom = TenNhom;
        this.MaDuocPham = MaDuocPham;
        this.SoDangKy = SoDangKy;
    }
}
class XuatKho {
    constructor(Id = 0, KhoDuocPhamXuatId = null, KhoDuocPhamXuatDisplay = null, KhoDuocPhamNhapId = null, KhoDuocPhamNhapDisplay = null, SoPhieu = null, LoaiXuatKho = null, LoaiXuatKhoDisplay = null, NguoiNhanId = null, NguoiNhanDisplay = null, NguoiXuatId = null, NguoiXuatDisplay = null, LoaiNguoiNhan = 1, TenNguoiNhan = null, LyDoXuatKho = null, HostingName = null, TraNCCDisplayTheoKho = null, TraNCC = null, LoaiKhoDuocPhamXuat = null, NgayXuat = new Date(), IsXuatKhac = false, NhaThauId = null, TenNhaThau = null, NhapKhoDuocPhamId = null, SoHopDong = null, 
    //public XuatKhoDuocPhamChiTiets: XuatKhoDuocPhamChiTiet[]=[],
    XuatKhoDuocPhamChiTiets = []) {
        this.Id = Id;
        this.KhoDuocPhamXuatId = KhoDuocPhamXuatId;
        this.KhoDuocPhamXuatDisplay = KhoDuocPhamXuatDisplay;
        this.KhoDuocPhamNhapId = KhoDuocPhamNhapId;
        this.KhoDuocPhamNhapDisplay = KhoDuocPhamNhapDisplay;
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
        this.LoaiKhoDuocPhamXuat = LoaiKhoDuocPhamXuat;
        this.NgayXuat = NgayXuat;
        this.IsXuatKhac = IsXuatKhac;
        this.NhaThauId = NhaThauId;
        this.TenNhaThau = TenNhaThau;
        this.NhapKhoDuocPhamId = NhapKhoDuocPhamId;
        this.SoHopDong = SoHopDong;
        this.XuatKhoDuocPhamChiTiets = XuatKhoDuocPhamChiTiets;
    }
}
class XuatKhoDuocPhamChiTiet {
    constructor(Id = 0, DatChatLuong = null, XuatKhoDuocPhamId = null, DuocPhamBenhVienId = null, TongSoLuongXuat = null, XuatKhoDuocPhamChiTietViTris = [], TenDuocPham = null, ChatLuong = null, DuocPhamId = null, NgayXuat = new Date(), DonGiaBan = null, VAT = null, ChietKhau = null) {
        this.Id = Id;
        this.DatChatLuong = DatChatLuong;
        this.XuatKhoDuocPhamId = XuatKhoDuocPhamId;
        this.DuocPhamBenhVienId = DuocPhamBenhVienId;
        this.TongSoLuongXuat = TongSoLuongXuat;
        this.XuatKhoDuocPhamChiTietViTris = XuatKhoDuocPhamChiTietViTris;
        this.TenDuocPham = TenDuocPham;
        this.ChatLuong = ChatLuong;
        this.DuocPhamId = DuocPhamId;
        this.NgayXuat = NgayXuat;
        this.DonGiaBan = DonGiaBan;
        this.VAT = VAT;
        this.ChietKhau = ChietKhau;
    }
}
class XuatKhoDuocPhamChiTietViTri {
    constructor(Id = 0, XuatKhoDuocPhamChiTietId = null, NhapKhoDuocPhamChiTietId = null, SoLuongXuat = null, ViTri = null, SoLo = null, HanSuDungDisplay = null, NgayXuat = new Date()) {
        this.Id = Id;
        this.XuatKhoDuocPhamChiTietId = XuatKhoDuocPhamChiTietId;
        this.NhapKhoDuocPhamChiTietId = NhapKhoDuocPhamChiTietId;
        this.SoLuongXuat = SoLuongXuat;
        this.ViTri = ViTri;
        this.SoLo = SoLo;
        this.HanSuDungDisplay = HanSuDungDisplay;
        this.NgayXuat = NgayXuat;
    }
}
class ThemDuocPham {
    constructor(DuocPhamId = null, ChatLuong = 1, SoLuongTon = null, SoLuongXuat = null, KhoId = null, DonGia = null, VAT = null, ChietKhau = null, loaiKhoDuocPhamXuat = null, loaiXuatKho = null) {
        this.DuocPhamId = DuocPhamId;
        this.ChatLuong = ChatLuong;
        this.SoLuongTon = SoLuongTon;
        this.SoLuongXuat = SoLuongXuat;
        this.KhoId = KhoId;
        this.DonGia = DonGia;
        this.VAT = VAT;
        this.ChietKhau = ChietKhau;
        this.loaiKhoDuocPhamXuat = loaiKhoDuocPhamXuat;
        this.loaiXuatKho = loaiXuatKho;
    }
}
class XuatKhoDuocPhamSearch {
    constructor(SearchString = null, RangeXuat = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"]()) {
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

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.module.ts ***!
  \******************************************************************************/
/*! exports provided: XuatKhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoModule", function() { return XuatKhoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _xuat_kho_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-routing.module.ts");
/* harmony import */ var _xuat_kho_list_xuat_kho_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xuat-kho-list/xuat-kho-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts");
/* harmony import */ var _xuat_kho_create_xuat_kho_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xuat-kho-create/xuat-kho-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts");
/* harmony import */ var _xuat_kho_update_xuat_kho_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xuat-kho-update/xuat-kho-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts");
/* harmony import */ var _xuat_kho_shared_xuat_kho_shared_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-shared/xuat-kho-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.ts");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _xuat_kho_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./xuat-kho.service */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
/* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");






















let XuatKhoModule = class XuatKhoModule {
};
XuatKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_xuat_kho_list_xuat_kho_list_component__WEBPACK_IMPORTED_MODULE_4__["XuatKhoListComponent"], _xuat_kho_create_xuat_kho_create_component__WEBPACK_IMPORTED_MODULE_5__["XuatKhoCreateComponent"], _xuat_kho_update_xuat_kho_update_component__WEBPACK_IMPORTED_MODULE_6__["XuatKhoUpdateComponent"], _xuat_kho_shared_xuat_kho_shared_component__WEBPACK_IMPORTED_MODULE_7__["XuatKhoSharedComponent"], _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__["XuatKhoInPhieuPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_20__["InputsModule"],
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
            _xuat_kho_routing_module__WEBPACK_IMPORTED_MODULE_3__["XuatKhoRoutingModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_19__["GridModule"],
        ], entryComponents: [
            _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_21__["XuatKhoInPhieuPopupComponent"]
        ],
        providers: [
            _xuat_kho_service__WEBPACK_IMPORTED_MODULE_17__["XuatKhoService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__["BaseService"], useClass: _xuat_kho_service__WEBPACK_IMPORTED_MODULE_17__["XuatKhoService"] },
        ]
    })
], XuatKhoModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.service.ts ***!
  \*******************************************************************************/
/*! exports provided: XuatKhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoService", function() { return XuatKhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let XuatKhoService = class XuatKhoService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'XuatKhoDuocPham';
    }
};
XuatKhoService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
XuatKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], XuatKhoService);



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
//# sourceMappingURL=nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module-es2015.js.map