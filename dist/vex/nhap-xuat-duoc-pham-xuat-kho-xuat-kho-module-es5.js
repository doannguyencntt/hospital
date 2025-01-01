var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.html": 
        /*!************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.html ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <vex-page-layout> -->\n    <!-- <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n           \n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho'}\n            \n                ]\">\n            </vex-breadcrumbs>\n        </div>\n        \n\n    </vex-page-layout-header> -->\n    <app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Dược phẩm',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n        </app-header-form>\n\n    <!-- <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n        <div class=\"p-gutter\" vexContainer>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"auto\">\n                    <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <h2 style=\"margin-right: 15px !important;\" class=\"title m-0\">Xuất Kho Dược Phẩm</h2>\n                    \n                        <!-- (modelChange)=\"lyDoVaoVienChange($event)\" -->\n                        <!-- <app-radio id=\"IsXuatKhac\" class=\"no-label\" [(model)]=\"IsXuatKhac\"\n                             [items]=\"[{Value:false,Text:'Xuất qua kho khác'},{Value:true,Text:'Xuất khác'}]\">\n                        </app-radio> -->\n                    \n                    </div>\n\n                    <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                        <app-xuat-kho-shared [(xuatKhac)]=\"IsXuatKhac\">\n                        </app-xuat-kho-shared>\n\n                        <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                            <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                                                                            </app-formfooter> -->\n                            <button type=\"button\" (click)=\"cancel()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                            <button *ngIf=\"!loading\" type=\"button\" (click)=\"create()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Lưu</button>\n                            <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                                    alt=\"Loading\" /></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n<!-- \n    </vex-page-layout-content>\n</vex-page-layout> -->");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU XUẤT</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.html": 
        /*!********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.html ***!
          \********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #parentGrid baseRoute=\"/nhap-xuat/duoc-pham/xuat-kho\" [sort]=\"sort\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                [additionalSearchString]=\"additionalSearchString\"></app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"/nhap-xuat/duoc-pham/xuat-kho\" [groups]=\"groups\" [sort]=\"sortChild\"\n                    [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" pageSize=\"5\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n                    [urlGetData]=\"urlGetDataGridChild\" [urlGetTotalPage]=\"urlGetTotalPageGridChild\"\n                    searchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n        </div>\n        <ng-template #trangThaiTemplate let-dataItem>\n            <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n            </button>\n            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                <ng-template let-customer=\"customer\" matMenuContent>\n                    <!-- <button (click)=\"detail(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                        <span>Xem Chi Tiết</span>\n                    </button> -->\n                    <button (click)=\"InPhieuXuat(dataItem.Id)\" mat-menu-item>\n                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                        <span>In</span>\n                    </button>\n                </ng-template>\n            </mat-menu>\n        </ng-template>\n\n        <ng-template #khoDuocPhamXuatTemplate let-dataItem>\n            <a (click)=\"detail(dataItem.Id)\">\n                {{dataItem.KhoDuocPhamXuat}}\n            </a>\n        </ng-template>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"xuatKhoSearch.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n\n                <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeXuat\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                    [(model)]=\"xuatKhoSearch.RangeXuat\" label=\"Xuất từ ngày - đến ngày\" (keyup)=\"onKeyNgayXuat($event)\"\n                    (modelChange)=\"changeNgayXuatRange($event)\" (blur)=\"blur($event)\" class=\"mt-1 on-header\">\n                </app-daterangepicker>\n\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <span fxFlex></span>\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                    title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button (click)=\"themMoiXuatKho()\" class=\"mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                    title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n\n            </div>\n        </ng-template>\n\n        <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n            <strong>{{value}}</strong>\n        </ng-template>\n\n        <ng-template #soChungTuTemplate let-dataItem>\n            <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">\n                {{dataItem.SoPhieu}}</a>\n        </ng-template>\n\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.html": 
        /*!************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.html ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <!-- \n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n    </h3> -->\n\n    <app-combobox hierarchyKeyToSend=\"khoXuat\" id=\"KhoDuocPhamXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.KhoDuocPhamXuatId\" [required]=\"true\" autoSelectFirstItem=\"true\" bind=\"true\"\n        [modelText]=\"xuatKho.KhoDuocPhamXuatDisplay\" label=\"Kho xuất\" (modelChange)=\"xuatKhoChange($event)\"\n        url=\"XuatKhoDuocPham/GetKhoTheoLoaiDuocPham\"\n        [validationerror]=\"'KhoDuocPhamXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"!xuatKhac\" hierarchyKeyToListen=\"khoXuat\" id=\"KhoDuocPhamNhapId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.KhoDuocPhamNhapId\" label=\"Kho nhập\" (modelChange)=\"nhapKhoChange($event)\"\n        url=\"XuatKhoDuocPham/GetKhoLoaiDuocPhamNhap\" [required]=\"true\"\n        [validationerror]=\"'KhoDuocPhamNhapId' | validationerror:validationErrors\">\n    </app-combobox>\n\n\n    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\" [required]=\"true\"\n        [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\" url=\"XuatKhoDuocPham/GetNguoiXuat\"\n        [disabled]=\"true\" [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n        url=\"XuatKhoDuocPham/GetNguoiNhan\">\n    </app-combobox>\n\n    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n        [(model)]=\"xuatKho.TenNguoiNhan\" [disabled]=\"true\" label=\"Người nhận\" maxlength=\"1000\">\n    </app-textbox>\n\n    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\" [(model)]=\"xuatKho.NgayXuat\"\n        [required]=\"true\" [disabled]=\"isValidateUpdate == false\"\n        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n    </app-datetimepicker>\n\n    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n        [disabled]=\"isValidateUpdate == false\" label=\"Ghi chú\" maxlength=\"1000\" [required]=\"true\"\n        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n</div>\n\n<div style=\"height: 20px;\">\n\n</div>\n\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n    </h3>\n\n    <app-grid [additionalSearchString]=\"xuatKho.KhoDuocPhamXuatId\" fxFlex=\"50%\" HideCheckAll=\"true\"\n        [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [urlGetData]=\"urlGetData\"\n        (extOnDataBound)=\"onDataBoundChildGrid1($event)\" [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\"\n        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" height=\"500\"\n        [headerTemplate]=\"headerTemplate\" #gridDuocPham [groups]=\"groups\"></app-grid>\n\n    <app-grid fxFlex=\"50%\" HideCheckAll=\"true\" [gridColumns]=\"gridResultColumns\" [documentType]=\"documentType\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n        [pageable]=\"false\" height=\"500\" [headerTemplate]=\"headerTemplate2\" #gridResult [groups]=\"groups\"\n        [gridDataSource]=\"gridDataXuatKho\"></app-grid>\n\n\n    <ng-template #actionTemplate let-dataItem>\n        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n            [disabled]=\"isValidateUpdate == false\" mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"updateGrid(dataItem.DuocPhamId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"removeGrid(dataItem.DuocPhamId)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n\n    <!-- <ng-template #detailTemplate let-dataItem>\n        <app-grid [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" #gridChildDuocPham\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"dataItem.XuatKhoDuocPhamChiTietViTris\" searchString=\"{{dataItem.Id}}\"\n            pageSize=\"5\" [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n    </ng-template> -->\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div style=\"width: 50%;\">\n            <strong>{{value}}</strong>\n        </div>\n        <div style=\"width: 50%; text-align: right;\">\n            <button (click)=\"addOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Chọn chóm: {{value}}\" class=\"p-0\"\n                style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRightLast\"></mat-icon>\n            </button>\n        </div>\n    </ng-template>\n\n    <ng-template #tenNhom2GroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <button (click)=\"removeOnGroup(dataItem)\" color=\"primary\" kendoTooltip title=\"Bỏ chọn nhóm: {{value}}\"\n            class=\"p-0 mr-2\" style=\"min-width: 0;line-height: 26px;\" mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeftLast\"></mat-icon>\n        </button>\n        <strong>{{value}}</strong>\n    </ng-template>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #headerTemplate2>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString2\" [(ngModel)]=\"searchString2\" (keyup)=\"onKey2($event)\"\n                    (ngModelChange)=\"clearSearch2()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #soLuongXuatTemplate let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\"\n            [max]=\"dataItem.SoLuongTon\" maxlength=\"99999999\" (modelChange)=\"SoLuongXuatChange($event, dataItem)\">\n        </app-textboxnumeric>\n\n    </ng-template>\n\n    <ng-template #soLuongXuatGrid1Template let-dataItem>\n        <app-textboxnumeric class=\"no-label\" id=\"SoLuongXuat{{dataItem.Id}}\" [(model)]=\"dataItem.SoLuongXuat\" [min]=\"0\"\n            [max]=\"dataItem.SoLuongTon\" (modelChange)=\"SoLuongXuatGrid1Change($event, dataItem)\">\n        </app-textboxnumeric>\n    </ng-template>\n\n    <ng-template #transferTemplate let-dataItem>\n        <div style=\"text-align: right;\">\n            <button (click)=\"addOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n                title=\"Chọn: {{dataItem.TenDuocPham}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n                mat-raised-button type=\"button\">\n                <mat-icon [icIcon]=\"icRight\"></mat-icon>\n            </button>\n        </div>\n\n    </ng-template>\n\n    <ng-template #transferTemplate2 let-dataItem>\n        <button (click)=\"removeOn(dataItem)\" [ngClass]=\"['bg-gray-500', 'text-contrast-white']\" kendoTooltip\n            title=\"Bỏ chọn: {{dataItem.TenDuocPham}}\" class=\"p-0\" style=\"min-width: 0;line-height: 26px;\"\n            mat-raised-button type=\"button\">\n            <mat-icon [icIcon]=\"icLeft\"></mat-icon>\n        </button>\n    </ng-template>\n\n    <ng-template #hsdTemplate let-dataItem>\n        {{dataItem.HanSuDungDisplay}}\n    </ng-template>\n\n    <ng-template #donGiaTemplate let-dataItem>\n        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n    <ng-template #thanhTienTemplate let-dataItem>\n        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #donGiaFooterTemplate>\n        <span style=\"float:right\">Tổng tiền xuất </span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid1Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',1) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n\n    <ng-template #thanhTienFooterGrid2Template let-dataItem>\n        <p style=\"color: blue; font-weight: bold;\">\n            <span>{{totalThanhTien('ThanhTien',2) | number:'0.2-2':'vi-VN'}}</span>\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.html": 
        /*!************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.html ***!
          \************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho'}\n            \n                ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\"> -->\n\n<app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''}\n        ,{Title:'Dược phẩm',Path:''}\n        ,{Title:'Xuất kho',Path:'/nhap-xuat/duoc-pham/xuat-kho', queryParams: {holdQuery : true}, Active: true}\n        \n            ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Xuất Kho Dược Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <!-- \n                            <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n                            </h3> -->\n\n\n                    <app-textbox id=\"SoPhieu\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"xuatKho.SoPhieu\" [disabled]=\"true\"\n                        label=\"Số phiếu\" maxlength=\"1000\">\n                    </app-textbox>\n                    <app-combobox id=\"KhoDuocPhamXuatId\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                        [(model)]=\"xuatKho.KhoDuocPhamXuatId\" [disabled]=\"true\" [required]=\"true\" bind=\"true\"\n                        label=\"Kho xuất\" url=\"TonKho/GetKhoDuocPham\"\n                        [validationerror]=\"'KhoDuocPhamXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"KhoDuocPhamNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                        *ngIf=\"xuatKho.LoaiXuatKho != xuatChoBenhNhan && xuatKho.KhoDuocPhamNhapId != null\"\n                        [(model)]=\"xuatKho.KhoDuocPhamNhapId\" label=\"Kho nhập\" [disabled]=\"true\"\n                        url=\"TonKho/GetKhoDuocPham\" [required]=\"true\" bind=\"true\"\n                        [validationerror]=\"'KhoDuocPhamNhapId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n\n                    <app-combobox id=\"NguoiXuatId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"xuatKho.NguoiXuatId\"\n                        [required]=\"true\" [modelText]=\"xuatKho.NguoiXuatDisplay\" bind=\"true\" label=\"Người xuất\"\n                        url=\"XuatKhoDuocPham/GetNguoiXuat\" [disabled]=\"true\"\n                        [validationerror]=\"'NguoiXuatId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-combobox *ngIf=\"xuatKho.LoaiNguoiNhan == 1\" id=\"NguoiNhanId\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.NguoiNhanId\" [modelText]=\"xuatKho.NguoiNhanDisplay\" label=\"Người nhận\"\n                        [disabled]=\"true\" url=\"XuatKhoDuocPham/GetNguoiNhan\" [required]=\"true\"\n                        [validationerror]=\"'NguoiNhanId' | validationerror:validationErrors\">\n                    </app-combobox>\n\n                    <app-textbox *ngIf=\"xuatKho.LoaiNguoiNhan == 2\" id=\"TenNguoiNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                        [(model)]=\"xuatKho.TenNguoiNhan\" [disabled]=\"true\" label=\"Người nhận\" maxlength=\"1000\">\n                    </app-textbox>\n\n                    <app-datetimepicker id=\"NgayXuat\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày xuất\"\n                        [(model)]=\"xuatKho.NgayXuat\" [required]=\"true\" [disabled]=\"true\"\n                        [validationerror]=\"'NgayXuat' | validationerror:validationErrors\">\n                    </app-datetimepicker>\n\n                    <app-textbox id=\"LyDoXuatKho\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"xuatKho.LyDoXuatKho\"\n                        [disabled]=\"true\" label=\"Ghi chú\" maxlength=\"99999999\" [required]=\"true\"\n                        [validationerror]=\"'LyDoXuatKho' | validationerror:validationErrors\">\n                    </app-textbox>\n\n\n                </div>\n\n                <div style=\"height: 20px;\">\n\n                </div>\n\n                <!-- <app-xuat-kho-shared [xemChiTiet]=\"true\">\n                        </app-xuat-kho-shared> -->\n\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN DƯỢC PHẨM\n                    </h3>\n\n                    <app-grid fxFlex=\"100%\" HideCheckAll=\"true\" [gridColumns]=\"gridColumns\" [sort]=\"sort\"\n                        [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\" [urlGetData]=\"urlGetData\"\n                        [urlGetTotalPage]=\"urlGetTotal\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                        [lazyLoadPage]=\"true\" [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\"\n                        [headerTemplate]=\"headerTemplate\" #gridDuocPham [groups]=\"groups\"></app-grid>\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </div>\n\n\n                <ng-template #headerTemplate>\n                    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                            fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                            <input [formControl]=\"searchCtrl\"\n                                class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                                (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                        </div>\n                    </div>\n                </ng-template>\n\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <!-- <app-formfooter [hiddenUpdateButton]=\"isValidateUpdate != true\" [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\">\n                            </app-formfooter> -->\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<!-- </vex-page-layout-content>\n</vex-page-layout> -->");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.scss": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.scss ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tY3JlYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHh1YXQta2hvXFx4dWF0LWtoby1jcmVhdGVcXHh1YXQta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tY3JlYXRlL3h1YXQta2hvLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS94dWF0LWtoby94dWF0LWtoby1jcmVhdGUveHVhdC1raG8tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts ***!
          \********************************************************************************************************/
        /*! exports provided: XuatKhoCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoCreateComponent", function () { return XuatKhoCreateComponent; });
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
            var XuatKhoCreateComponent = /** @class */ (function () {
                function XuatKhoCreateComponent(route, router, baseService, ref, notificationService, authService, errorService, dialog) {
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
                XuatKhoCreateComponent.prototype.ngOnInit = function () {
                };
                XuatKhoCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['nhap-xuat/duoc-pham/xuat-kho/']);
                };
                XuatKhoCreateComponent.prototype.cancel = function () {
                    this.onCreated();
                };
                XuatKhoCreateComponent.prototype.create = function () {
                    var self = this;
                    self.shared.validationErrors = null;
                    self.ref.detectChanges();
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["thêm"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            self.loading = true;
                            if (self.shared.validationErrors != null && self.shared.validationErrors.some(function (x) { return x; })) {
                                self.loading = false;
                                return;
                            }
                            self.baseService.create(self.shared.getSharedData()).subscribe(function (resultData) {
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
                                    }).afterClosed().subscribe(function (result) {
                                        self.onCreated();
                                    });
                                }
                            }, function (err) {
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
                };
                return XuatKhoCreateComponent;
            }());
            XuatKhoCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_9__["BaseService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_error_error_service__WEBPACK_IMPORTED_MODULE_7__["ErrorService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8taW4tcGhpZXUtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceHVhdC1raG9cXHh1YXQta2hvLWluLXBoaWV1LXBvcHVwXFx4dWF0LWtoby1pbi1waGlldS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8taW4tcGhpZXUtcG9wdXAveHVhdC1raG8taW4tcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8taW4tcGhpZXUtcG9wdXAveHVhdC1raG8taW4tcGhpZXUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: XuatKhoInPhieuPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoInPhieuPopupComponent", function () { return XuatKhoInPhieuPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var XuatKhoInPhieuPopupComponent = /** @class */ (function () {
                function XuatKhoInPhieuPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                XuatKhoInPhieuPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                XuatKhoInPhieuPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                XuatKhoInPhieuPopupComponent.prototype.getSharedPrintForm = function () {
                    var source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>PHIẾU XUẤT</th></p>", "");
                    return new Promise(function (resolve) {
                        resolve(source);
                        // this.close();
                    });
                };
                return XuatKhoInPhieuPopupComponent;
            }());
            XuatKhoInPhieuPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            XuatKhoInPhieuPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xuat-kho-in-phieu-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xuat-kho-in-phieu-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xuat-kho-in-phieu-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], XuatKhoInPhieuPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.scss": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.scss ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvL3h1YXQta2hvLWxpc3QveHVhdC1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts ***!
          \****************************************************************************************************/
        /*! exports provided: XuatKhoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoListComponent", function () { return XuatKhoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_4__);
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
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-in-phieu-popup/xuat-kho-in-phieu-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var XuatKhoListComponent = /** @class */ (function () {
                function XuatKhoListComponent(apiService, authService, dialog, location, route, router, notificationService) {
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
                XuatKhoListComponent.prototype.ngOnInit = function () {
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
                };
                XuatKhoListComponent.prototype.backWithSearch = function () {
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
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
                };
                XuatKhoListComponent.prototype.detail = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho" + "/xem-chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoListComponent.prototype.xemChiTiet = function (id, dataItem) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].View)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho" + "/xem-chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("XuatKhoDuocPham/ExportData", this.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "XuatKhoDuocPham" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoListComponent.prototype.clearSearch = function (event) {
                    var self = this;
                    if (event != undefined && (event == null || event == "")) {
                        self.gridChild.searchString = null;
                        self.Timkiem();
                    }
                };
                XuatKhoListComponent.prototype.Timkiem = function () {
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
                };
                XuatKhoListComponent.prototype.changeNgayXuatRange = function ($event) {
                    //console.log("changeNgayNhapRange = ", $event);
                    this.Timkiem();
                };
                XuatKhoListComponent.prototype.onKeyNgayXuat = function ($event) {
                    //console.log("onKeyNgayNhap = ", $event);
                    if ($event.keyCode == 13) {
                        this.Timkiem();
                    }
                };
                XuatKhoListComponent.prototype.blur = function ($event) {
                    //console.log("blur = ", $event);
                    this.Timkiem();
                };
                XuatKhoListComponent.prototype.onKey = function (event) {
                    if (event.keyCode == 13) {
                        this.Timkiem();
                    }
                };
                XuatKhoListComponent.prototype.themMoiXuatKho = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Add)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/xuat-kho/them"]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XuatKhoListComponent.prototype.InPhieuXuat = function (xuatKhoDuocPhamId) {
                    var _this = this;
                    var hostingName = window.location.protocol + "//" + window.location.host;
                    this.apiService.post("XuatKhoDuocPham/InPhieuXuat?xuatKhoDuocPhamId=" + xuatKhoDuocPhamId + "&hostingName=" + hostingName)
                        .subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.dialog.open(_xuat_kho_in_phieu_popup_xuat_kho_in_phieu_popup_component__WEBPACK_IMPORTED_MODULE_24__["XuatKhoInPhieuPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: resultData,
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                    });
                };
                return XuatKhoListComponent;
            }());
            XuatKhoListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-routing.module.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-routing.module.ts ***!
          \**************************************************************************************/
        /*! exports provided: XuatKhoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoRoutingModule", function () { return XuatKhoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _xuat_kho_list_xuat_kho_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xuat-kho-list/xuat-kho-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-list/xuat-kho-list.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _xuat_kho_create_xuat_kho_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./xuat-kho-create/xuat-kho-create.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-create/xuat-kho-create.component.ts");
            /* harmony import */ var _xuat_kho_update_xuat_kho_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xuat-kho-update/xuat-kho-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts");
            var routes = [
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
            var XuatKhoRoutingModule = /** @class */ (function () {
                function XuatKhoRoutingModule() {
                }
                return XuatKhoRoutingModule;
            }());
            XuatKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], XuatKhoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.scss": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.scss ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3h1YXQta2hvL3h1YXQta2hvLXNoYXJlZC94dWF0LWtoby1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-shared/xuat-kho-shared.component.ts ***!
          \********************************************************************************************************/
        /*! exports provided: XuatKhoSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoSharedComponent", function () { return XuatKhoSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../xuat-kho.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/chevron-right */ "./node_modules/@iconify/icons-ic/chevron-right.js");
            /* harmony import */ var _iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_chevron_right__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/last-page */ "./node_modules/@iconify/icons-ic/last-page.js");
            /* harmony import */ var _iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_last_page__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/chevron-left */ "./node_modules/@iconify/icons-ic/chevron-left.js");
            /* harmony import */ var _iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_chevron_left__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/first-page */ "./node_modules/@iconify/icons-ic/first-page.js");
            /* harmony import */ var _iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_first_page__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-tra-thuoc/yeu-cau-tra-thuoc.model.ts");
            var XuatKhoSharedComponent = /** @class */ (function () {
                function XuatKhoSharedComponent(route, dialog, baseService, cdRef, authService, apiService, notificationService) {
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
                XuatKhoSharedComponent.prototype.ngAfterViewInit = function () {
                    //$("#DpChecked1").prop('checked', true);
                };
                XuatKhoSharedComponent.prototype.ngAfterContentInit = function () {
                    //$("#DpChecked1").prop('checked', true);
                };
                XuatKhoSharedComponent.prototype.totalThanhTien = function (field, gridNumber) {
                    if (gridNumber == 1) {
                        switch (field) {
                            case 'ThanhTien':
                                return this.dataToSumThanhTienGrid1.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        }
                    }
                    else {
                        switch (field) {
                            case 'ThanhTien':
                                return this.dataToSumThanhTienGrid2.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        }
                    }
                };
                ;
                XuatKhoSharedComponent.prototype.ngOnInit = function () {
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
                };
                XuatKhoSharedComponent.prototype.onDataBoundChildGrid1 = function (data) {
                    this.dataToSumThanhTienGrid1 = data.Data;
                };
                XuatKhoSharedComponent.prototype.setNhanVienId = function () {
                    //vì user la nhân viên nên lấy id của nhau
                    var user = this.authService.getAccessUser();
                    this.xuatKho.NguoiXuatId = user.Id;
                };
                XuatKhoSharedComponent.prototype.setDataXuatKho = function () {
                    this.gridDataXuatKho = null;
                    this.setDataGrid1();
                    var dataGrid = this.lstXuatKhoDisplay;
                    this.dataToSumThanhTienGrid2 = this.lstXuatKhoDisplay;
                    //this.gridDataXuatKho = process(dataGrid, this.stateXuatKho);
                    this.gridDataXuatKho = {
                        data: dataGrid,
                        total: dataGrid.length,
                    };
                    //console.log("setDataXuatKho = ", this.gridDataXuatKho, this.gridResult);
                    // this.gridResult.setDataSource();
                    this.refreshGrid();
                };
                XuatKhoSharedComponent.prototype.setDataGrid1 = function () {
                    if (this.gridDuocPham == undefined)
                        return;
                    var lstId = new Array();
                    for (var i = 0; i < this.lstXuatKho.length; i++) {
                        lstId.push(this.lstXuatKho[i].Id);
                    }
                    this.gridDuocPham._additionalSearchString = this.xuatKho.KhoDuocPhamXuatId + "|" + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
                    this.gridDuocPham.setDataSource();
                };
                XuatKhoSharedComponent.prototype.setDefaultNullForGrid = function () {
                    //let dataNull = new XuatKho();
                    //this.dataForGrid = new Array<XuatKhoDuocPhamChiTiet>();
                    this.setDataXuatKho();
                    //this.refreshGrid();
                };
                XuatKhoSharedComponent.prototype.Them = function () {
                    var _this = this;
                    this.validationErrors = null;
                    var check = this.dataForGrid.filter(function (obj) { return obj.DuocPhamId == _this.themDuocPham.DuocPhamId; });
                    if (check.length == 0) {
                        this.apiService.post("XuatKhoDuocPham/GetDuocPham", this.themDuocPham).subscribe(function (resultData) {
                            //this.themDuocPham.soLuongTon = resultData;
                            if (resultData != undefined && resultData != null) {
                                _this.clearThongTinChiTiet();
                                _this.dataForGrid.push(resultData);
                                //console.log("GetDuocPham", this.dataForGrid, this.dataForGrid.length)
                                _this.gridDataSource = {
                                    data: _this.dataForGrid,
                                    total: _this.dataForGrid.length
                                };
                            }
                        }, function (err) {
                            //this.validationErrors = err.ValidationErrors;
                            if (err != undefined && err.ValidationErrors != null) {
                                _this.validationErrors = err.ValidationErrors;
                            }
                            else if (err != undefined && err.Errors == null) {
                                //self.validationErrors.push({ "Message": err.Message });
                                _this.notificationService.showError(err.Message);
                            }
                            //console.log("error = ", err)
                        });
                    }
                };
                XuatKhoSharedComponent.prototype.refreshGrid = function () {
                    if (!this.cdRef.destroyed) {
                        this.cdRef.detectChanges();
                    }
                    if (this.gridResult != undefined) {
                        this.gridResult.setDataSource();
                    }
                    // if (this.gridChildDuocPham != undefined) {
                    //   this.gridChildDuocPham.setDataSource();
                    // }
                };
                XuatKhoSharedComponent.prototype.getListDuocPham = function ($event) {
                    var _this = this;
                    //console.log("getListDuocPham = ", $event, this.xuatKho.KhoDuocPhamNhapId);
                    this.themDuocPham.DuocPhamId = $event;
                    this.themDuocPham.KhoId = this.xuatKho.KhoDuocPhamXuatId;
                    this.apiService.post("XuatKhoDuocPham/GetSoLuongTon", this.themDuocPham).subscribe(function (resultData) {
                        //console.log("GetSoLuongTon", resultData)
                        _this.themDuocPham.SoLuongTon = resultData;
                    }, function () {
                        //console.log("error")
                    });
                    if (this.themDuocPham.loaiKhoDuocPhamXuat == 1 && this.themDuocPham.loaiXuatKho == 1) {
                        this.apiService.post("XuatKhoDuocPham/GetDonGiaBan/?duocPhamId=" + $event).subscribe(function (resultData) {
                            //console.log("GetSoLuongTon", resultData)
                            _this.themDuocPham.DonGia = resultData;
                        }, function () {
                            //console.log("error")
                        });
                    }
                };
                XuatKhoSharedComponent.prototype.getById = function (id) {
                    this.baseService.getById(id).subscribe(function (resultData) {
                        ;
                    });
                };
                XuatKhoSharedComponent.prototype.removeGrid = function (duocPhamId) {
                    //console.log(duocPhamId);
                    var index = this.dataForGrid.find(function (obj) { return obj.DuocPhamId == duocPhamId; });
                    this.dataForGrid.splice(this.dataForGrid.indexOf(index), 1);
                    //console.log(this.dataForGrid);
                    this.gridDataSource = {
                        data: this.dataForGrid,
                        total: this.dataForGrid.length
                    };
                };
                XuatKhoSharedComponent.prototype.updateGrid = function (duocPhamId) {
                    var _this = this;
                    var item = this.dataForGrid.filter(function (obj) { return obj.DuocPhamId == duocPhamId; });
                    //console.log("UpdateGrid = ", item, duocPhamId);
                    this.themDuocPham.DuocPhamId = item[0].DuocPhamId;
                    this.themDuocPham.ChatLuong = item[0].DatChatLuong == true ? 1 : 0;
                    this.themDuocPham.SoLuongXuat = item[0].TongSoLuongXuat;
                    this.themDuocPham.KhoId = this.xuatKho.KhoDuocPhamXuatId;
                    this.themDuocPham.DonGia = item[0].DonGiaBan;
                    this.themDuocPham.VAT = item[0].VAT;
                    this.themDuocPham.ChietKhau = item[0].ChietKhau;
                    this.enableUpdateGird(duocPhamId);
                    this.apiService.post("XuatKhoDuocPham/GetSoLuongTon", this.themDuocPham).subscribe(function (resultData) {
                        _this.themDuocPham.SoLuongTon = resultData;
                        _this.showFormDetail = true;
                    }, function () {
                        //console.log("error")
                    });
                };
                XuatKhoSharedComponent.prototype.enableUpdateGird = function (id) {
                    this.isUpdateGrid = true;
                    this.isIdNeedUpdate = id;
                };
                XuatKhoSharedComponent.prototype.disableUpdateGrid = function () {
                    this.isUpdateGrid = false;
                    this.isIdNeedUpdate = null;
                    this.clearThongTinChiTiet();
                };
                XuatKhoSharedComponent.prototype.clearThongTinChiTiet = function () {
                    this.themDuocPham = new _xuat_kho_model__WEBPACK_IMPORTED_MODULE_6__["ThemDuocPham"]();
                    this.themDuocPham.loaiKhoDuocPhamXuat = this.xuatKho.LoaiKhoDuocPhamXuat;
                    this.themDuocPham.loaiXuatKho = this.xuatKho.LoaiXuatKho;
                    //console.log("clearThongTinChiTiet = ", this.themDuocPham.loaiXuatKho, this.xuatKho.LoaiXuatKho);
                };
                XuatKhoSharedComponent.prototype.Sua = function () {
                    var _this = this;
                    //console.log(this.isIdNeedUpdate);
                    this.validationErrors = null;
                    this.apiService.post("XuatKhoDuocPham/GetDuocPham", this.themDuocPham).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            var index = _this.dataForGrid.find(function (obj) { return obj.DuocPhamId == _this.isIdNeedUpdate; });
                            _this.dataForGrid[_this.dataForGrid.indexOf(index)] = resultData;
                            //console.log(this.dataForGrid);
                            _this.gridDataSource = {
                                data: _this.dataForGrid,
                                total: _this.dataForGrid.length
                            };
                            _this.disableUpdateGrid();
                        }
                    }, function (err) {
                        //this.validationErrors = err.ValidationErrors;
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            //self.validationErrors.push({ "Message": err.Message });
                            _this.notificationService.showError(err.Message);
                        }
                        //console.log("error = ", err)
                    });
                };
                XuatKhoSharedComponent.prototype.huy = function () {
                    this.showFormDetail = false;
                    this.disableUpdateGrid();
                };
                XuatKhoSharedComponent.prototype.getSharedData = function () {
                    this.xuatKho.IsXuatKhac = this.xuatKhac;
                    this.xuatKho.XuatKhoDuocPhamChiTiets = this.lstXuatKho;
                    return this.xuatKho;
                };
                XuatKhoSharedComponent.prototype.nhapKhoChange = function ($event) {
                    //console.log("nhapKhoChange = ", $event, this.xuatKho.KhoDuocPhamXuatId,this.dialogRef);
                    if (this.dialogRef == undefined || this.dialogRef == null) {
                        this.nhapKhoIdValuePrevious = $event;
                    }
                };
                XuatKhoSharedComponent.prototype.xuatKhoChange = function ($event) {
                    var _this = this;
                    //console.log("xuatKhoChange = ", $event, this.xuatKho, this.lstXuatKho, this.dialogRef);
                    this.xuatKho.KhoDuocPhamNhapId = null;
                    if (this.lstXuatKho != null && this.lstXuatKho != undefined && this.lstXuatKho.length > 0) {
                        var khoXuatIdClone_1 = JSON.parse(JSON.stringify(this.khoXuatIdValuePrevious));
                        if (this.dialogRef == undefined || this.dialogRef == null) {
                            this.dialogRef = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmComponent"], {
                                disableClose: false,
                                width: '400px',
                                data: { Title: "Xác nhận", Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_20__["NhapXuatKhoMessage"].MessageConfirmKhoXuatChange }
                            }).afterClosed().subscribe(function (result) {
                                _this.dialogRef = null;
                                if (result == "Yes") {
                                    _this.lstDaChon = new Array();
                                    _this.khoXuatIdValuePrevious = $event;
                                    _this.xuatKho.KhoDuocPhamXuatId = $event;
                                    _this.lstXuatKho = new Array();
                                    _this.lstXuatKhoDisplay = new Array();
                                    _this.searchString2 = null;
                                    _this.TimKiem2();
                                    if ($event != undefined) {
                                        _this.apiService.post("XuatKhoDuocPham/GetLoaiKhoDuocPham/?id=" + $event).subscribe(function (resultData) {
                                            if (resultData != undefined && resultData != null) {
                                                _this.themDuocPham.loaiKhoDuocPhamXuat = resultData;
                                                _this.xuatKho.LoaiKhoDuocPhamXuat = resultData;
                                            }
                                        }, function () {
                                        });
                                    }
                                    else {
                                        _this.xuatKho.LoaiXuatKho = null;
                                        _this.clearThongTinChiTiet();
                                    }
                                }
                                else {
                                    _this.xuatKho.KhoDuocPhamXuatId = khoXuatIdClone_1;
                                    _this.xuatKho.KhoDuocPhamNhapId = _this.nhapKhoIdValuePrevious;
                                }
                            });
                        }
                    }
                    else {
                        this.lstDaChon = new Array();
                        this.setDefaultNullForGrid();
                        if ($event != undefined) {
                            this.khoXuatIdValuePrevious = JSON.parse(JSON.stringify($event));
                            this.apiService.post("XuatKhoDuocPham/GetLoaiKhoDuocPham/?id=" + $event).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    _this.themDuocPham.loaiKhoDuocPhamXuat = resultData;
                                    _this.xuatKho.LoaiKhoDuocPhamXuat = resultData;
                                }
                            }, function () {
                            });
                        }
                        else {
                            this.khoXuatIdValuePrevious = null;
                        }
                    }
                };
                XuatKhoSharedComponent.prototype.clearSearch2 = function () {
                    if (this.searchString2 == "" || this.searchString2 == null) {
                        this.lstXuatKhoDisplay = JSON.parse(JSON.stringify(this.lstXuatKho));
                        this.setDataXuatKho();
                    }
                };
                XuatKhoSharedComponent.prototype.TimKiem2 = function () {
                    if (this.searchString2 == undefined || this.searchString2 == null) {
                        this.setDataXuatKho();
                    }
                    else {
                        var search_1 = this.searchString2.toLowerCase().trim();
                        this.lstXuatKhoDisplay = this.lstXuatKho.filter(function (o) { return o.TenDuocPham.toLowerCase().trim().indexOf(search_1) != -1
                            || o.DVT.toLowerCase().trim().indexOf(search_1) != -1 || o.Loai.toLowerCase().trim().indexOf(search_1) != -1
                            || o.SoLuongTon.toString().toLowerCase().trim().indexOf(search_1) != -1 || o.SoLuongTonDisplay.toLowerCase().trim().indexOf(search_1) != -1
                            || o.MaDuocPham.toLowerCase().trim().indexOf(search_1) != -1
                            || o.SoDangKy.toLowerCase().trim().indexOf(search_1) != -1; });
                        this.setDataXuatKho();
                    }
                };
                XuatKhoSharedComponent.prototype.capNhatGrid2 = function () {
                    this.gridDataXuatKho = null;
                    var dataGrid = this.lstXuatKhoDisplay;
                    this.gridDataXuatKho = {
                        data: dataGrid,
                        total: dataGrid.length,
                    };
                    this.refreshGrid();
                };
                XuatKhoSharedComponent.prototype.onKey2 = function (event) {
                    if (event.keyCode == 13) {
                        this.TimKiem2();
                    }
                };
                XuatKhoSharedComponent.prototype.clearSearch = function () {
                    if (this.searchString == "" || this.searchString == null) {
                        this.gridDuocPham.searchString = "";
                        this.gridDuocPham.search();
                    }
                };
                XuatKhoSharedComponent.prototype.onKey = function (event) {
                    if (event.keyCode == 13) {
                        this.TimKiem();
                    }
                };
                XuatKhoSharedComponent.prototype.TimKiem = function () {
                    if (this.gridDuocPham == null) {
                        return;
                    }
                    var lstId = new Array();
                    // tslint:disable-next-line: prefer-for-of
                    for (var i = 0; i < this.lstXuatKho.length; i++) {
                        lstId.push(this.lstXuatKho[i].Id);
                    }
                    this.gridDuocPham.searchString = this.searchString;
                    this.gridDuocPham._additionalSearchString = this.xuatKho.KhoDuocPhamXuatId + '|' + JSON.stringify(lstId) + '|' + JSON.stringify(this.lstDaChon);
                    this.gridDuocPham.search();
                };
                XuatKhoSharedComponent.prototype.addOn = function (dataItem) {
                    //console.log("addOn = ", dataItem);
                    var itemExists = this.lstXuatKho.find(function (o) { return o.Id == dataItem.Id; });
                    if (itemExists == undefined) {
                        //set sl xuat
                        //dataItem.SoLuongXuat = dataItem.SoLuongTon;
                        this.lstXuatKhoDisplay.push(dataItem);
                        this.lstXuatKho.push(dataItem);
                        this.TimKiem2();
                    }
                };
                XuatKhoSharedComponent.prototype.removeOn = function (dataItem) {
                    this.lstXuatKho = this.lstXuatKho.filter(function (o) { return o != dataItem; });
                    this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(function (o) { return o != dataItem; });
                    this.removeSoLuongDaChon(dataItem.Id);
                    this.TimKiem2();
                };
                XuatKhoSharedComponent.prototype.SoLuongXuatGrid1Change = function (soLuong, dataItem) {
                    if (soLuong != undefined && soLuong != null) {
                        dataItem.ThanhTien = soLuong * dataItem.DonGia;
                    }
                    else {
                        dataItem.ThanhTien = 0;
                    }
                    this.updateSoLuongDaChon(dataItem.Id, soLuong);
                };
                XuatKhoSharedComponent.prototype.updateSoLuongDaChon = function (id, soLuong) {
                    if (this.lstDaChon != undefined) {
                        var index = this.lstDaChon.filter(function (o) { return o.Id == id; });
                        if (index != null && index != undefined && index.length > 0) {
                            index[0].SoLuongXuat = soLuong;
                        }
                        else {
                            var data = new _yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_22__["DaSuaSoLuongXuat"]();
                            data.SoLuongXuat = soLuong;
                            data.Id = id;
                            this.lstDaChon.push(data);
                        }
                    }
                    //console.log("updateSoLuongDaChon = ", this.lstDaChon);
                };
                XuatKhoSharedComponent.prototype.removeSoLuongDaChon = function (id) {
                    if (this.lstDaChon != undefined) {
                        this.lstDaChon = this.lstDaChon.filter(function (o) { return o.Id != id; });
                    }
                    //console.log("removeSoLuongDaChon = ", this.lstDaChon);
                };
                XuatKhoSharedComponent.prototype.addingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                XuatKhoSharedComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XuatKhoSharedComponent.prototype.addOnGroup = function (dataItem) {
                    var _this = this;
                    //console.log("addOnGroup = ", dataItem);
                    var model = new _yeu_cau_tra_thuoc_yeu_cau_tra_thuoc_model__WEBPACK_IMPORTED_MODULE_22__["GetDuocPhamOnGroupModel"]();
                    model.Id = dataItem.items[0].DuocPhamBenhVienPhanNhomId;
                    model.KhoXuatId = this.xuatKho.KhoDuocPhamXuatId;
                    model.SearchString = this.searchString;
                    model.ListDaChon = dataItem.items;
                    this.addingPage();
                    this.apiService.post("XuatKhoDuocPham/GetDuocPhamOnGroup", model).subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.closepopupLoadingData();
                            resultData.forEach(function (e) {
                                var itemExists = _this.lstXuatKho.find(function (o) { return o.Id == e.Id; });
                                if (itemExists == undefined) {
                                    //set sl xuat
                                    //e.SoLuongXuat = e.SoLuongTon;
                                    _this.lstXuatKho.push(e);
                                    _this.lstXuatKhoDisplay.push(e);
                                }
                            });
                            _this.TimKiem2();
                        }
                        else {
                        }
                    }, function (err) {
                        if (err != undefined && err.ValidationErrors != null) {
                            _this.validationErrors = err.ValidationErrors;
                        }
                        else if (err != undefined && err.Errors == null) {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closepopupLoadingData();
                    });
                };
                XuatKhoSharedComponent.prototype.removeOnGroup = function (dataItem) {
                    var _this = this;
                    dataItem.items.forEach(function (e) {
                        _this.removeSoLuongDaChon(e.Id);
                    });
                    this.lstXuatKho = this.lstXuatKho.filter(function (o) { return o.DuocPhamBenhVienPhanNhomId != dataItem.items[0].DuocPhamBenhVienPhanNhomId; });
                    this.lstXuatKhoDisplay = this.lstXuatKhoDisplay.filter(function (o) { return o.DuocPhamBenhVienPhanNhomId != dataItem.items[0].DuocPhamBenhVienPhanNhomId; });
                    this.TimKiem2();
                };
                XuatKhoSharedComponent.prototype.SoLuongXuatChange = function (soLuong, dataItem) {
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
                };
                return XuatKhoSharedComponent;
            }());
            XuatKhoSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.scss": 
        /*!**********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.scss ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tdXBkYXRlL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHh1YXQta2hvXFx4dWF0LWtoby11cGRhdGVcXHh1YXQta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veHVhdC1raG8veHVhdC1raG8tdXBkYXRlL3h1YXQta2hvLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS94dWF0LWtoby94dWF0LWtoby11cGRhdGUveHVhdC1raG8tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho-update/xuat-kho-update.component.ts ***!
          \********************************************************************************************************/
        /*! exports provided: XuatKhoUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoUpdateComponent", function () { return XuatKhoUpdateComponent; });
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
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var src_app_shared_enum_kho_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/kho.enum */ "./src/app/shared/enum/kho.enum.ts");
            var XuatKhoUpdateComponent = /** @class */ (function () {
                function XuatKhoUpdateComponent(route, router, baseService) {
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
                XuatKhoUpdateComponent.prototype.ngOnInit = function () {
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
                };
                XuatKhoUpdateComponent.prototype.clearSearch = function () {
                    if (this.searchString == "" || this.searchString == null) {
                        this.gridDuocPham._additionalSearchString = "";
                        this.gridDuocPham.search();
                    }
                };
                XuatKhoUpdateComponent.prototype.onKey = function (event) {
                    if (event.keyCode == 13) {
                        this.TimKiem();
                    }
                };
                XuatKhoUpdateComponent.prototype.TimKiem = function () {
                    this.gridDuocPham._additionalSearchString = this.searchString;
                    this.gridDuocPham.search();
                };
                XuatKhoUpdateComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData != undefined) {
                            _this.xuatKho = resultData;
                        }
                    });
                };
                XuatKhoUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['nhap-xuat/duoc-pham/xuat-kho/']);
                };
                XuatKhoUpdateComponent.prototype.huy = function () {
                    this.router.navigateByUrl('nhap-xuat/duoc-pham/xuat-kho?holdQuery=true');
                };
                return XuatKhoUpdateComponent;
            }());
            XuatKhoUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.model.ts ***!
          \*****************************************************************************/
        /*! exports provided: DuocPhamXuatGridVo, XuatKho, XuatKhoDuocPhamChiTiet, XuatKhoDuocPhamChiTietViTri, ThemDuocPham, XuatKhoDuocPhamSearch, rangeDate */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamXuatGridVo", function () { return DuocPhamXuatGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKho", function () { return XuatKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPhamChiTiet", function () { return XuatKhoDuocPhamChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPhamChiTietViTri", function () { return XuatKhoDuocPhamChiTietViTri; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemDuocPham", function () { return ThemDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoDuocPhamSearch", function () { return XuatKhoDuocPhamSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var DuocPhamXuatGridVo = /** @class */ (function () {
                function DuocPhamXuatGridVo(Id, STT, TenDuocPham, DVT, LaDuocPhamBHYT, Loai, SoLuongTon, SoLuongTonDisplay, SoLuongXuat, DuocPhamBenhVienPhanNhomId, TenNhom, MaDuocPham, SoDangKy) {
                    if (Id === void 0) { Id = null; }
                    if (STT === void 0) { STT = null; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (LaDuocPhamBHYT === void 0) { LaDuocPhamBHYT = null; }
                    if (Loai === void 0) { Loai = null; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongTonDisplay === void 0) { SoLuongTonDisplay = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    if (TenNhom === void 0) { TenNhom = null; }
                    if (MaDuocPham === void 0) { MaDuocPham = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
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
                return DuocPhamXuatGridVo;
            }());
            var XuatKho = /** @class */ (function () {
                function XuatKho(Id, KhoDuocPhamXuatId, KhoDuocPhamXuatDisplay, KhoDuocPhamNhapId, KhoDuocPhamNhapDisplay, SoPhieu, LoaiXuatKho, LoaiXuatKhoDisplay, NguoiNhanId, NguoiNhanDisplay, NguoiXuatId, NguoiXuatDisplay, LoaiNguoiNhan, TenNguoiNhan, LyDoXuatKho, HostingName, TraNCCDisplayTheoKho, TraNCC, LoaiKhoDuocPhamXuat, NgayXuat, IsXuatKhac, NhaThauId, TenNhaThau, NhapKhoDuocPhamId, SoHopDong, 
                //public XuatKhoDuocPhamChiTiets: XuatKhoDuocPhamChiTiet[]=[],
                XuatKhoDuocPhamChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoDuocPhamXuatId === void 0) { KhoDuocPhamXuatId = null; }
                    if (KhoDuocPhamXuatDisplay === void 0) { KhoDuocPhamXuatDisplay = null; }
                    if (KhoDuocPhamNhapId === void 0) { KhoDuocPhamNhapId = null; }
                    if (KhoDuocPhamNhapDisplay === void 0) { KhoDuocPhamNhapDisplay = null; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (LoaiXuatKho === void 0) { LoaiXuatKho = null; }
                    if (LoaiXuatKhoDisplay === void 0) { LoaiXuatKhoDisplay = null; }
                    if (NguoiNhanId === void 0) { NguoiNhanId = null; }
                    if (NguoiNhanDisplay === void 0) { NguoiNhanDisplay = null; }
                    if (NguoiXuatId === void 0) { NguoiXuatId = null; }
                    if (NguoiXuatDisplay === void 0) { NguoiXuatDisplay = null; }
                    if (LoaiNguoiNhan === void 0) { LoaiNguoiNhan = 1; }
                    if (TenNguoiNhan === void 0) { TenNguoiNhan = null; }
                    if (LyDoXuatKho === void 0) { LyDoXuatKho = null; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (TraNCCDisplayTheoKho === void 0) { TraNCCDisplayTheoKho = null; }
                    if (TraNCC === void 0) { TraNCC = null; }
                    if (LoaiKhoDuocPhamXuat === void 0) { LoaiKhoDuocPhamXuat = null; }
                    if (NgayXuat === void 0) { NgayXuat = new Date(); }
                    if (IsXuatKhac === void 0) { IsXuatKhac = false; }
                    if (NhaThauId === void 0) { NhaThauId = null; }
                    if (TenNhaThau === void 0) { TenNhaThau = null; }
                    if (NhapKhoDuocPhamId === void 0) { NhapKhoDuocPhamId = null; }
                    if (SoHopDong === void 0) { SoHopDong = null; }
                    if (XuatKhoDuocPhamChiTiets === void 0) { XuatKhoDuocPhamChiTiets = []; }
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
                return XuatKho;
            }());
            var XuatKhoDuocPhamChiTiet = /** @class */ (function () {
                function XuatKhoDuocPhamChiTiet(Id, DatChatLuong, XuatKhoDuocPhamId, DuocPhamBenhVienId, TongSoLuongXuat, XuatKhoDuocPhamChiTietViTris, TenDuocPham, ChatLuong, DuocPhamId, NgayXuat, DonGiaBan, VAT, ChietKhau) {
                    if (Id === void 0) { Id = 0; }
                    if (DatChatLuong === void 0) { DatChatLuong = null; }
                    if (XuatKhoDuocPhamId === void 0) { XuatKhoDuocPhamId = null; }
                    if (DuocPhamBenhVienId === void 0) { DuocPhamBenhVienId = null; }
                    if (TongSoLuongXuat === void 0) { TongSoLuongXuat = null; }
                    if (XuatKhoDuocPhamChiTietViTris === void 0) { XuatKhoDuocPhamChiTietViTris = []; }
                    if (TenDuocPham === void 0) { TenDuocPham = null; }
                    if (ChatLuong === void 0) { ChatLuong = null; }
                    if (DuocPhamId === void 0) { DuocPhamId = null; }
                    if (NgayXuat === void 0) { NgayXuat = new Date(); }
                    if (DonGiaBan === void 0) { DonGiaBan = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (ChietKhau === void 0) { ChietKhau = null; }
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
                return XuatKhoDuocPhamChiTiet;
            }());
            var XuatKhoDuocPhamChiTietViTri = /** @class */ (function () {
                function XuatKhoDuocPhamChiTietViTri(Id, XuatKhoDuocPhamChiTietId, NhapKhoDuocPhamChiTietId, SoLuongXuat, ViTri, SoLo, HanSuDungDisplay, NgayXuat) {
                    if (Id === void 0) { Id = 0; }
                    if (XuatKhoDuocPhamChiTietId === void 0) { XuatKhoDuocPhamChiTietId = null; }
                    if (NhapKhoDuocPhamChiTietId === void 0) { NhapKhoDuocPhamChiTietId = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (ViTri === void 0) { ViTri = null; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDungDisplay === void 0) { HanSuDungDisplay = null; }
                    if (NgayXuat === void 0) { NgayXuat = new Date(); }
                    this.Id = Id;
                    this.XuatKhoDuocPhamChiTietId = XuatKhoDuocPhamChiTietId;
                    this.NhapKhoDuocPhamChiTietId = NhapKhoDuocPhamChiTietId;
                    this.SoLuongXuat = SoLuongXuat;
                    this.ViTri = ViTri;
                    this.SoLo = SoLo;
                    this.HanSuDungDisplay = HanSuDungDisplay;
                    this.NgayXuat = NgayXuat;
                }
                return XuatKhoDuocPhamChiTietViTri;
            }());
            var ThemDuocPham = /** @class */ (function () {
                function ThemDuocPham(DuocPhamId, ChatLuong, SoLuongTon, SoLuongXuat, KhoId, DonGia, VAT, ChietKhau, loaiKhoDuocPhamXuat, loaiXuatKho) {
                    if (DuocPhamId === void 0) { DuocPhamId = null; }
                    if (ChatLuong === void 0) { ChatLuong = 1; }
                    if (SoLuongTon === void 0) { SoLuongTon = null; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (DonGia === void 0) { DonGia = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (ChietKhau === void 0) { ChietKhau = null; }
                    if (loaiKhoDuocPhamXuat === void 0) { loaiKhoDuocPhamXuat = null; }
                    if (loaiXuatKho === void 0) { loaiXuatKho = null; }
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
                return ThemDuocPham;
            }());
            var XuatKhoDuocPhamSearch = /** @class */ (function () {
                function XuatKhoDuocPhamSearch(SearchString, RangeXuat) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (RangeXuat === void 0) { RangeXuat = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    this.SearchString = SearchString;
                    this.RangeXuat = RangeXuat;
                }
                return XuatKhoDuocPhamSearch;
            }());
            var rangeDate = /** @class */ (function () {
                function rangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = new Date(); }
                    if (endDate === void 0) { endDate = new Date(); }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return rangeDate;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.module.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.module.ts ***!
          \******************************************************************************/
        /*! exports provided: XuatKhoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoModule", function () { return XuatKhoModule; });
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
            var XuatKhoModule = /** @class */ (function () {
                function XuatKhoModule() {
                }
                return XuatKhoModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.service.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/xuat-kho/xuat-kho.service.ts ***!
          \*******************************************************************************/
        /*! exports provided: XuatKhoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XuatKhoService", function () { return XuatKhoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var XuatKhoService = /** @class */ (function (_super) {
                __extends(XuatKhoService, _super);
                function XuatKhoService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'XuatKhoDuocPham';
                    return _this;
                }
                return XuatKhoService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            XuatKhoService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            XuatKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], XuatKhoService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
          \**********************************************************************************************/
        /*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function () { return YeuCauMuaVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function () { return YeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function () { return YeuCauMuaVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function () { return PhieuYeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function () { return ThongTinVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function () { return YeuCauMuaVatTuChiTietValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var YeuCauMuaVatTuGridVo = /** @class */ (function () {
                function YeuCauMuaVatTuGridVo(SoPhieu, TenNhanVienYeuCau, NgayYeuCauTuFormat, NgayYeuCauDenFormat, RangeFromDate, FromDate, ToDate, ChoDuyet, DaDuyet, TuChoiDuyet, TuNgay, DenNgay, SearchString) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new RangeDate(); }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
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
                return YeuCauMuaVatTuGridVo;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return RangeDate;
            }());
            var YeuCauMuaVatTu = /** @class */ (function () {
                function YeuCauMuaVatTu(Id, SoPhieu, KhoId, NhanVienYeuCauId, NgayYeuCau, KyDuTruMuaDuocPhamVatTuId, GhiChu, TruongKhoaId, TruongKhoaDuyet, TenKho, TenNhanVienYeuCau, TenNhomDuTru, TenKyDuTru, NgayTaiKhoa, NgayKhoDuoc, NgayGiamDoc, TrangThai, TenTruongKhoa, NgayTruongKhoaDuyet, TenNhanVienKhoDuoc, NgayKhoDuocDuyet, TenGiamDoc, NgayGiamDocDuyet, LyDoTruongKhoaTuChoi, DuTruMuaVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TruongKhoaId === void 0) { TruongKhoaId = null; }
                    if (TruongKhoaDuyet === void 0) { TruongKhoaDuyet = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (TenNhomDuTru === void 0) { TenNhomDuTru = null; }
                    if (TenKyDuTru === void 0) { TenKyDuTru = null; }
                    if (NgayTaiKhoa === void 0) { NgayTaiKhoa = null; }
                    if (NgayKhoDuoc === void 0) { NgayKhoDuoc = null; }
                    if (NgayGiamDoc === void 0) { NgayGiamDoc = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTruongKhoa === void 0) { TenTruongKhoa = null; }
                    if (NgayTruongKhoaDuyet === void 0) { NgayTruongKhoaDuyet = null; }
                    if (TenNhanVienKhoDuoc === void 0) { TenNhanVienKhoDuoc = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDoc === void 0) { TenGiamDoc = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (DuTruMuaVatTuChiTiets === void 0) { DuTruMuaVatTuChiTiets = []; }
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
                return YeuCauMuaVatTu;
            }());
            var YeuCauMuaVatTuChiTiet = /** @class */ (function () {
                function YeuCauMuaVatTuChiTiet(STT, Id, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTaiKhoaDuyet, NhomDieuTriDuPhong, GhiChu, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
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
                return YeuCauMuaVatTuChiTiet;
            }());
            var PhieuYeuCauMuaVatTu = /** @class */ (function () {
                function PhieuYeuCauMuaVatTu(DuTruMuaVatTuId, HostingName, Header, TrangThai) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.TrangThai = TrangThai;
                }
                return PhieuYeuCauMuaVatTu;
            }());
            var ThongTinVatTuChiTiet = /** @class */ (function () {
                function ThongTinVatTuChiTiet(STT, Id, NhomVatTuId, VatTuId, LaVatTuBHYT, Ma, DVT, QuyCach, NhaSX, NuocSX, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongTonDuTru, SoLuongTonKhoTong, SoLuongChuaNhapVeHDT, // Hợp đồng thầu
                ThongTinChiTietTonKhoTongs, ThongTinChiTietTonHDTs, LoaiVatTu, TenLoaiVatTu, Ten, SLTonDuTru, SLTonKhoTong, SLChuaNhapVeHDT, SoLuongDuTruTaiKhoaDuyet, SoLuongDuTruKhoaDuocDuyet, SoLuongDuTruGiamDocDuyet, KhoId, IsThemVatTu, GhiChu, YeuCauMuaVatTuChiTietValidators) {
                    if (STT === void 0) { STT = 0; }
                    if (Id === void 0) { Id = 0; }
                    if (NhomVatTuId === void 0) { NhomVatTuId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongTonDuTru === void 0) { SoLuongTonDuTru = null; }
                    if (SoLuongTonKhoTong === void 0) { SoLuongTonKhoTong = null; }
                    if (SoLuongChuaNhapVeHDT === void 0) { SoLuongChuaNhapVeHDT = null; }
                    if (ThongTinChiTietTonKhoTongs === void 0) { ThongTinChiTietTonKhoTongs = []; }
                    if (ThongTinChiTietTonHDTs === void 0) { ThongTinChiTietTonHDTs = []; }
                    if (LoaiVatTu === void 0) { LoaiVatTu = null; }
                    if (TenLoaiVatTu === void 0) { TenLoaiVatTu = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (SLTonDuTru === void 0) { SLTonDuTru = null; }
                    if (SLTonKhoTong === void 0) { SLTonKhoTong = null; }
                    if (SLChuaNhapVeHDT === void 0) { SLChuaNhapVeHDT = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (SoLuongDuTruKhoaDuocDuyet === void 0) { SoLuongDuTruKhoaDuocDuyet = null; }
                    if (SoLuongDuTruGiamDocDuyet === void 0) { SoLuongDuTruGiamDocDuyet = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (IsThemVatTu === void 0) { IsThemVatTu = false; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauMuaVatTuChiTietValidators === void 0) { YeuCauMuaVatTuChiTietValidators = []; }
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
                return ThongTinVatTuChiTiet;
            }());
            var YeuCauMuaVatTuChiTietValidator = /** @class */ (function () {
                function YeuCauMuaVatTuChiTietValidator(VatTuId, LaVatTuBHYT) {
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                }
                return YeuCauMuaVatTuChiTietValidator;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module-es5.js.map
//# sourceMappingURL=nhap-xuat-duoc-pham-xuat-kho-xuat-kho-module-es5.js.map