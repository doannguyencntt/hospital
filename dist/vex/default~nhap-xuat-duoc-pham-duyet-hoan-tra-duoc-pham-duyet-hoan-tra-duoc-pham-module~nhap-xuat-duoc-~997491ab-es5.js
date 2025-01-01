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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-duyet-hoan-tra-duoc-pham-duyet-hoan-tra-duoc-pham-module~nhap-xuat-duoc-~997491ab"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-done.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.html": 
        /*!****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.html ***!
          \****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Nhập xuất',Path:''},\n    {Title:'Dược phẩm',Path:''},\n    {Title:'Hoàn trả',Path:''},\n    {Title:'Duyệt hoàn trả',Path:'/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham', queryParams: {holdQuery : true}, Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 fxFlex=\"90%\" fxFlex.sm=\"90%\" class=\"title m-0\">Duyệt Nhập Kho Dược Phẩm</h2>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                    *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet'\"\n                    class=\"{{thongTinDuyetHoanTraDuocPham.ClassTrangThai}}\">{{thongTinDuyetHoanTraDuocPham.TinhTrangDuyet}}</span>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                    *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'da_duyet'\"\n                    class=\"{{thongTinDuyetHoanTraDuocPham.ClassTrangThai}}\">{{thongTinDuyetHoanTraDuocPham.TinhTrangDuyet}}</span>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                    *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'tu_choi_duyet'\"\n                    class=\"{{thongTinDuyetHoanTraDuocPham.ClassTrangThai}}\">{{thongTinDuyetHoanTraDuocPham.TinhTrangDuyet}}</span>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"KhoCanHoanTraId\" label=\"Hoàn trả từ kho\" required=\"true\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenKhoCanHoanTra\" [disabled]='true'\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.KhoCanHoanTraId\" url=\"\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"KhoNhanHoanTraId\" label=\"Hoàn trả về kho\" required=\"true\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenKhoNhanHoanTra\" [disabled]='true'\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.KhoNhanHoanTraId\" url=\"\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NhanVienYeuCauId\" label=\"Người yêu cầu\" required=\"true\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienYeuCau\" [disabled]='true'\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienYeuCauId\" url=\"\">\n                    </app-combobox>\n                    <app-datepicker id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày yêu cầu\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NgayYeuCau\" [disabled]='true'>\n                    </app-datepicker>\n\n                    <!-- Từ chối duyệt -->\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NhanVienYeuCauId\" label=\"Người từ chối duyệt\" required=\"true\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'tu_choi_duyet'\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienDuyet\" [disabled]='true'\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienDuyetId\" url=\"\">\n                    </app-combobox>\n                    <app-datepicker id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày từ chối duyệt\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'tu_choi_duyet'\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NgayDuyet\" [disabled]='true'>\n                    </app-datepicker>\n\n                    <!-- Đã duyệt -->\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NhanVienYeuCauId\" label=\"Người phê duyệt\" required=\"true\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'da_duyet'\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienDuyet\" [disabled]='true'\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienDuyetId\" url=\"\">\n                    </app-combobox>\n                    <app-datepicker id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày duyệt\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'da_duyet'\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NgayDuyet\" [disabled]='true'>\n                    </app-datepicker>\n\n                    <app-textarea id=\"GhiChu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ghi chú\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.GhiChu\" maxlength=\"4000\">\n                    </app-textarea>\n                </div>\n                <h3 fxFlex=\"100%\" class=\"sub-title mt-3\">THÔNG TIN DƯỢC PHẨM</h3>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"5\"\n                        [sort]=\"sortDuyetKhoChild\" [urlGetData]=\"urlGetDataAsync\" [groups]=\"groups\"\n                        additionalSearchString={{yeuCauHoanTraDuocPhamId}} [autoHeight]=\"true\"\n                        [urlGetTotalPage]=\"urlGetTotalPageGridChild\" [showStt]=\"true\">\n                    </app-grid>\n                    <ng-template #TinhTrangBHYTTemplate let-dataItem>\n                        <!-- <app-checkbox value=\"true\" label=\"\" [(model)]=\"dataItem.LoaiBHYT\" [disabled]=\"true\">\n                        </app-checkbox> -->\n                        {{dataItem.LoaiBHYTDisplay}}\n                    </ng-template>\n                    <ng-template #hsdTemplate let-dataItem>\n                        {{dataItem.HanSuDungDisplay}}\n                    </ng-template>\n                    \n                    <ng-template #soLuongHoanTraTemplate let-dataItem>\n                        {{dataItem.SoLuongHoanTra}}\n                    </ng-template>\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                    <!-- <ng-template #giaNhapTemplate let-dataItem>\n                        {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                    <ng-template #giaBanTemplate let-dataItem>\n                        {{dataItem.GiaBan | number:'0.2-2':'vi-VN':true:\"1.2-6\"}}\n                    </ng-template> -->\n                </div>\n                <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" class=\"mt-3\">\n                    <!-- Chưa duyệt -->\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienTraId\" label=\"Người trả\" required=\"true\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet'\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienTra\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienTraId\" url=\"NhanVien/GetListLookupNhanVien\"\n                        [validationerror]=\"'NhanVienTraId' | validationerror: validationErrors\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienNhanId\" label=\"Người nhận\" required=\"true\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet'\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienNhan\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienNhanId\" url=\"NhanVien/GetListLookupNhanVien\"\n                        [validationerror]=\"'NhanVienNhanId' | validationerror: validationErrors\">\n                    </app-combobox>\n\n                    <!-- Đã duyệt -->\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienTraId\" label=\"Người trả\" required=\"true\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'da_duyet'\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienTra\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienTraId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienNhanId\" label=\"Người nhận\" required=\"true\"\n                        *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'da_duyet'\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinDuyetHoanTraDuocPham.TenNhanVienNhan\"\n                        [(model)]=\"thongTinDuyetHoanTraDuocPham.NhanVienNhanId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-3\">\n                    <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                        <button *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'da_duyet'\"\n                        (click)=\"InPhieuHoanTra()\" class=\"float-left\" type=\"button\" color=\"primary\" mat-raised-button>\n                            <i class=\"ft-save\"></i> In Phiếu Hoàn Trả\n                        </button>\n\n                        <button *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet'\" type=\"button\" (click)=\"BackToList()\" mat-button class=\"mr-1\">\n                            <i class=\"ft-arrow-left\"></i> Hủy\n                        </button>\n                        <button *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai !== 'dang_cho_duyet'\" type=\"button\" (click)=\"BackToList()\" mat-button class=\"mr-1\">\n                            <i class=\"ft-arrow-left\"></i> Quay lại\n                        </button>\n\n                        <button *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet'\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"duyet()\" >\n                            <i class=\"ft-save\"></i> Duyệt\n                        </button>\n                        <button *ngIf=\"thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet'\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"khongPheDuyet()\">\n                            <i class=\"ft-save\"></i> Không phê duyệt\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">           \n            <vex-breadcrumbs [crumbs]=\"[ {Title:'Nhập xuất',Path:''},\n            {Title:'Dược phẩm',Path:''},\n            {Title:'Hoàn trả',Path:''},\n            {Title:'Duyệt hoàn trả',Path:'/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridChaColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"false\"\n                [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [detailTemplate]=\"detailTemplate\"\n                [additionalSearchString]=\"theFirstSearch\" #gridCha [urlGetData]=\"urlGetDataGridParentAsync\"\n                [sort]=\"sortDuyetKho\">\n            </app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridConColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"5\"\n                    [sort]=\"sortDuyetKhoChild\" [urlGetData]=\"urlGetDataGridChildAsync\"\n                    additionalSearchString={{dataItem.Id}} [autoHeight]=\"true\"\n                    [groups]=\"groups\"  [urlGetTotalPage]=\"urlGetTotalPageGridChild\">\n                </app-grid>\n            </ng-template>\n            \n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n                        [(model)]=\"duyetHoanTraDuocPham.DangChoDuyet\" class=\"ml-2\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n                        [(model)]=\"duyetHoanTraDuocPham.TuChoiDuyet\" class=\"ml-2\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\"\n                        [(model)]=\"duyetHoanTraDuocPham.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n                    <div class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"duyetHoanTraDuocPham.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"duyetHoanTraDuocPham.RangeYeuCau\" label=\"Yêu cầu từ ngày - Đến ngày\"\n                        (keyup)=\"onKeyNgayNhap($event)\" (modelChange)=\"changeNgayNhapRange($event)\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"duyetHoanTraDuocPham.RangeDuyet\" label=\"Duyệt từ ngày - Đến ngày\"\n                        (keyup)=\"onKeyNgayDuyet($event)\" (modelChange)=\"changeNgayDuyetRange($event)\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    \n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\"\n                        type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of filterColumns\">\n                            <button\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                </div>\n            </ng-template>\n\n            <ng-template #groupTemplate let-dataItem >\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" \n                    mat-icon-button type=\"button\">\n                    <!-- *ngIf=\"dataItem.ClassTrangThai === 'da_duyet'\" -->\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"inYeuCauHoanTraDuocPham(dataItem.Id)\" mat-menu-item >\n                            <!-- *ngIf=\"dataItem.ClassTrangThai === 'da_duyet'\" -->\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #TinhTrangTemplate let-dataItem>\n    <span *ngIf=\"dataItem.ClassTrangThai === 'dang_cho_duyet'\"\n        class=\"{{dataItem.ClassTrangThai}}\">{{dataItem.TinhTrangDuyet}}</span>\n    <span *ngIf=\"dataItem.ClassTrangThai === 'da_duyet'\"\n        class=\"{{dataItem.ClassTrangThai}}\">{{dataItem.TinhTrangDuyet}}</span>\n    <span *ngIf=\"dataItem.ClassTrangThai === 'tu_choi_duyet'\"\n        class=\"{{dataItem.ClassTrangThai}}\">{{dataItem.TinhTrangDuyet}}</span>\n</ng-template>\n<ng-template #TinhTrangBHYTTemplate let-dataItem>\n    <!-- <app-checkbox value=\"true\" label=\"\" [(model)]=\"dataItem.LoaiBHYT\" [disabled]=\"true\">\n    </app-checkbox> -->\n    {{dataItem.LoaiBHYTDisplay}}\n</ng-template>\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id)\">\n        {{dataItem.SoPhieu}}</a>\n</ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #giaNhapTemplate let-dataItem>\n    {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #giaBanTemplate let-dataItem>\n    {{dataItem.GiaBan | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetTemplate let-dataItem>\n    {{dataItem.NgayDuyetDisplay}}\n</ng-template>\n\n<ng-template #hsdTemplate let-dataItem>\n    {{dataItem.HanSuDungDisplay}}\n</ng-template>\n\n<ng-template #soLuongHoanTraTemplate let-dataItem>\n    {{dataItem.SoLuongHoanTraDisplay}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{data.Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n\n    <div style=\"overflow-y: auto;max-height: 553px;\">\n        <table class=\"table table-border\" width=\"100%\">\n            <!-- <tr  style=\"background: #005dab;color:#fff;\">\n                <th>PHIẾU IN HOÀN TRẢ</th>\n            </tr> -->\n            <tr >\n                <td style=\"padding: 0;\">\n                    <div class=\"container-iframe\">\n                        <iframe width=\"100%\" [src]=\"srcPhieuInHoanTra |safe\" allowTransparency=\"true\"\n                            background=\"transparent\"></iframe>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"19\" style=\"text-align: right;\" typeSize=\"{{printSize}}\"\n        [typeLayout]=\"printLayout\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.html": 
        /*!**************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.html ***!
          \**************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>Xác Nhận</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<legend>\n    Bạn có chắc từ chối phê duyệt cho lần hoàn trả thuốc này không?\n    <app-textarea id=\"ly-do-huy\" [required]=\"true\" label=\"Lý do\" maxlength=\"2000\" minHeight=\"60\"\n        [(model)]=\"lyDoHuy\"\n        [validationerror]=\"'LyDoHuy' | validationerror: validationErrors\">\n    </app-textarea>\n    <mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n        <button mat-button mat-dialog-close>Không</button>\n        <button mat-raised-button mat-button color=\"primary\" (click)=\"huyYeuCauHoanTra()\" cdkFocusInitial>Có</button>\n    </mat-dialog-actions>\n</legend>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.scss": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.scss ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dang_cho_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: sandybrown;\n}\n\n.da_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: green;\n}\n\n.tu_choi_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtL2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1jaGktdGlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFxkdXlldC1ob2FuLXRyYS1kdW9jLXBoYW1cXGR1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1jaGktdGlldFxcZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC1ob2FuLXRyYS1kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtLWNoaS10aWV0L2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1jaGktdGlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC1ob2FuLXRyYS1kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtLWNoaS10aWV0L2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYW5nX2Nob19kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHNhbmR5YnJvd247XG59XG5cbi5kYV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHVfY2hvaV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJlZDtcbn0iLCIuZGFuZ19jaG9fZHV5ZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBzYW5keWJyb3duO1xufVxuXG4uZGFfZHV5ZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnR1X2Nob2lfZHV5ZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.ts": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.ts ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: DuyetHoanTraDuocPhamChiTietComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraDuocPhamChiTietComponent", function () { return DuyetHoanTraDuocPhamChiTietComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duyet-hoan-tra-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _tu_choi_duyet_hoan_tra_duoc_pham_tu_choi_duyet_hoan_tra_duoc_pham_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.ts");
            /* harmony import */ var _in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var DuyetHoanTraDuocPhamChiTietComponent = /** @class */ (function () {
                function DuyetHoanTraDuocPhamChiTietComponent(dialog, elem, router, route, authService, notificationService, apiService) {
                    this.dialog = dialog;
                    this.elem = elem;
                    this.router = router;
                    this.route = route;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetYeuCauHoanTraDuocPham;
                    this.yeuCauHoanTraDuocPhamId = 0;
                    this.thongTinDuyetHoanTraDuocPham = new _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinDuyetHoanTraDuocPham"]();
                    this.tuChoiDuyetHoanTraDuocPham = new _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_2__["TuChoiDuyetHoanTraDuocPham"]();
                    this.urlGetDataAsync = "HoanTra/GetDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";
                    this.urlGetTotalPageGridChild = "HoanTra/GetTotalDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";
                    this.gridColumns = [];
                    this.sortDuyetKhoChild = [{ field: "Id", dir: "asc" }];
                    this.groups = [{
                            field: 'Nhom', dir: 'asc', aggregates: []
                        }];
                }
                DuyetHoanTraDuocPhamChiTietComponent.prototype.ngOnInit = function () {
                    this.yeuCauHoanTraDuocPhamId = this.route.snapshot.params.id;
                    if (this.yeuCauHoanTraDuocPhamId) {
                        this.currentAccessUser = this.authService.getAccessUser();
                        this.idPhong = this.authService.getPhongLamViecId();
                        this.getCurrentUserInformation();
                    }
                    else {
                        return;
                    }
                    this.gridColumns = [
                        { Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 100 },
                        { Field: "DuocPham", Title: "Tên Dược Phẩm", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "LoaiBHYT", Title: "Loại BHYT", Width: 140, Template: this.TinhTrangBHYTTemplate },
                        { Field: "SoLo", Title: "Số Lô", Width: 100 },
                        { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140, Template: this.hsdTemplate },
                        { Field: "SoLuongHoanTra", Title: "SL H.Trả", Width: 100, Template: this.soLuongHoanTraTemplate },
                    ];
                };
                DuyetHoanTraDuocPhamChiTietComponent.prototype.getCurrentUserInformation = function () {
                    var _this = this;
                    if (this.currentAccessUser) {
                        this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentAccessUser.Id + "&idPhongBenhVien=" + this.idPhong).subscribe(function (res) {
                            _this.currentUserInformation = res;
                            _this.getThongTinDuyetKhoDuocPham(_this.yeuCauHoanTraDuocPhamId);
                        });
                    }
                };
                DuyetHoanTraDuocPhamChiTietComponent.prototype.getThongTinDuyetKhoDuocPham = function (id) {
                    var _this = this;
                    this.apiService.get("HoanTra/GetThongTinDuyetHoanTraDuocPham/" + id).subscribe(function (res) {
                        if (res) {
                            _this.thongTinDuyetHoanTraDuocPham = res;
                            if (_this.thongTinDuyetHoanTraDuocPham.ClassTrangThai === 'dang_cho_duyet') {
                                _this.thongTinDuyetHoanTraDuocPham.TenNhanVienNhan = _this.thongTinDuyetHoanTraDuocPham.TenNhanVienYeuCau;
                                _this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId = _this.thongTinDuyetHoanTraDuocPham.NhanVienYeuCauId;
                                _this.thongTinDuyetHoanTraDuocPham.TenNhanVienTra = _this.currentUserInformation.Ten;
                                _this.thongTinDuyetHoanTraDuocPham.NhanVienTraId = _this.currentAccessUser.Id;
                            }
                        }
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                DuyetHoanTraDuocPhamChiTietComponent.prototype.BackToList = function () {
                    this.router.navigateByUrl("/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham?holdQuery=true");
                };
                DuyetHoanTraDuocPhamChiTietComponent.prototype.duyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        if (this.isLoading != null) {
                            this.dialog.closeAll();
                            this.isLoading = null;
                        }
                        this.isLoading = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["HoanTraDuocPhamVatTuMessage"].MessageXacNhanDuyetHoanTraDuocPham
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            /* result is a string:Yes,No,No answer*/
                            if (result == "Yes") {
                                _this.validationErrors = null;
                                _this.thongTinDuyetHoanTraDuocPham.Id = _this.yeuCauHoanTraDuocPhamId;
                                _this.thongTinDuyetHoanTraDuocPham.NhanVienTraId = _this.thongTinDuyetHoanTraDuocPham.NhanVienTraId ? _this.thongTinDuyetHoanTraDuocPham.NhanVienTraId : 0;
                                _this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId = _this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId ? _this.thongTinDuyetHoanTraDuocPham.NhanVienNhanId : 0;
                                _this.apiService.post("HoanTra/DuyetHoanTraDuocPham", _this.thongTinDuyetHoanTraDuocPham).subscribe(function (res) {
                                    _this.notificationService.showSuccess("Duyệt thành công.");
                                    // let yeuCauHoanTraDuocPhamId = this.yeuCauHoanTraDuocPhamId;
                                    _this.dialog.open(_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_13__["InPhieuHoanTraCompoment"], {
                                        disableClose: true,
                                        width: "1200px",
                                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: _this.yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true, DuocDuyet: true },
                                    }).afterClosed().subscribe(function (result) {
                                        _this.BackToList();
                                    });
                                }, function (err) {
                                    // this.notificationService.showError(err);
                                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraDuocPhamChiTietComponent.prototype.khongPheDuyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                        if (this.isLoading != null) {
                            this.dialog.closeAll();
                            this.isLoading = null;
                        }
                        this.isLoading = this.dialog.open(_tu_choi_duyet_hoan_tra_duoc_pham_tu_choi_duyet_hoan_tra_duoc_pham_component__WEBPACK_IMPORTED_MODULE_12__["TuChoiDuyetHoanTraDuocPhamComponent"], {
                            disableClose: true,
                            width: "400px",
                            height: "300px",
                        }).afterClosed().subscribe(function (result) {
                            if (result) {
                                _this.tuChoiDuyetHoanTraDuocPham.LyDoHuy = result;
                                _this.tuChoiDuyetHoanTraDuocPham.Id = _this.yeuCauHoanTraDuocPhamId;
                                _this.apiService.post("HoanTra/TuChoiDuyetHoanTraDuocPham", _this.tuChoiDuyetHoanTraDuocPham).subscribe(function (res) {
                                    _this.notificationService.showSuccess("Từ chối duyệt thành công.");
                                    _this.BackToList();
                                }, function (err) {
                                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraDuocPhamChiTietComponent.prototype.InPhieuHoanTra = function () {
                    this.dialog.open(_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_13__["InPhieuHoanTraCompoment"], {
                        disableClose: true,
                        width: "1200px",
                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: this.yeuCauHoanTraDuocPhamId, LaDuocPham: true, LaTuTruc: true, DuocDuyet: true },
                    }).afterClosed().subscribe(function (result) { });
                };
                return DuyetHoanTraDuocPhamChiTietComponent;
            }());
            DuyetHoanTraDuocPhamChiTietComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangBHYTTemplate', { static: true })
            ], DuyetHoanTraDuocPhamChiTietComponent.prototype, "TinhTrangBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
            ], DuyetHoanTraDuocPhamChiTietComponent.prototype, "hsdTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongHoanTraTemplate', { static: true })
            ], DuyetHoanTraDuocPhamChiTietComponent.prototype, "soLuongHoanTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetHoanTraDuocPhamChiTietComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            DuyetHoanTraDuocPhamChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-hoan-tra-duoc-pham-chi-tiet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-hoan-tra-duoc-pham-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-chi-tiet.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.scss")).default]
                })
            ], DuyetHoanTraDuocPhamChiTietComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dang_cho_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: sandybrown;\n}\n\n.da_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: green;\n}\n\n.tu_choi_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtL2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXGR1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbVxcZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtLWxpc3RcXGR1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC1ob2FuLXRyYS1kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtLWxpc3QvZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtL2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1saXN0L2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdfY2hvX2R1eWV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogc2FuZHlicm93bjtcbn1cblxuLmRhX2R1eWV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi50dV9jaG9pX2R1eWV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmVkO1xufSIsIi5kYW5nX2Nob19kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHNhbmR5YnJvd247XG59XG5cbi5kYV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHVfY2hvaV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: DuyetHoanTraDuocPhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraDuocPhamListComponent", function () { return DuyetHoanTraDuocPhamListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../duyet-hoan-tra-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model.ts");
            /* harmony import */ var _in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_25__);
            var DuyetHoanTraDuocPhamListComponent = /** @class */ (function () {
                function DuyetHoanTraDuocPhamListComponent(dialog, elem, router, route, cd, location, authService, notificationService, apiService) {
                    this.dialog = dialog;
                    this.elem = elem;
                    this.router = router;
                    this.route = route;
                    this.cd = cd;
                    this.location = location;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.gridChaColumns = [];
                    this.gridConColumns = [];
                    this.filterColumns = [];
                    this.holdQuery = null;
                    this.additionalSearchString = null;
                    this.baseRoute = "/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham";
                    this.yeuCauStartDate = null;
                    this.yeuCauEndDate = null;
                    this.duyetStartDate = null;
                    this.duyetEndDate = null;
                    this.urlGetDataGridParentAsync = "HoanTra/GetDanhSachDuyetHoanTraDuocPhamForGridAsync";
                    this.urlGetDataGridChildAsync = "HoanTra/GetDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";
                    this.urlGetTotalPageGridChild = "HoanTra/GetTotalDanhSachDuyetHoanTraDuocPhamChiTietForGridAsync";
                    this.groups = [{
                            field: 'Nhom', dir: 'asc', aggregates: []
                        }];
                    this.sortDuyetKho = [
                        {
                            field: "NgayYeuCau",
                            dir: "desc"
                        },
                        {
                            field: "SoPhieu",
                            dir: "asc"
                        }
                    ];
                    this.sortDuyetKhoChild = [{
                            field: "Id",
                            dir: "asc"
                        }];
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_23___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_25___default.a;
                    this.searchString = "{\"KhoDuocPhamId\":0,\"TenKhoDuocPham\":null,\"DangChoDuyet\":true,\"DaDuyet\":true,\"TuChoiDuyet\":true,\"LoaiNhapKho\":0,\"TenLoaiNhapKho\":null,\"SearchString\":\"\",\"RangeYeuCau\":{\"startDate\":null,\"endDate\":null},\"RangeDuyet\":{\"startDate\":null,\"endDate\":null}}";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"];
                }
                DuyetHoanTraDuocPhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DuyetYeuCauHoanTraDuocPham;
                    this.duyetHoanTraDuocPham = new _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_16__["HoanTraDuocPhamSearch"]();
                    var start = new Date();
                    start.setHours(0, 0, 0, 0);
                    var end = new Date();
                    this.duyetHoanTraDuocPham.RangeYeuCau.startDate = start;
                    this.duyetHoanTraDuocPham.RangeYeuCau.endDate = end;
                    this.duyetHoanTraDuocPham.RangeDuyet = new _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_16__["rangeDate"]();
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_9__["LocalStorageHelper"].getItem('additionalSearchStringDuyetHoanTraDuocPham') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_9__["LocalStorageHelper"].getItem('additionalSearchStringDuyetHoanTraDuocPham');
                        this.duyetHoanTraDuocPham = JSON.parse(this.additionalSearchString);
                        if (this.duyetHoanTraDuocPham.RangeYeuCau.startDate != null)
                            this.duyetHoanTraDuocPham.RangeYeuCau.startDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.startDate);
                        if (this.duyetHoanTraDuocPham.RangeYeuCau.endDate != null)
                            this.duyetHoanTraDuocPham.RangeYeuCau.endDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.endDate);
                        if (this.duyetHoanTraDuocPham.RangeDuyet.startDate != null)
                            this.duyetHoanTraDuocPham.RangeDuyet.startDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.startDate);
                        if (this.duyetHoanTraDuocPham.RangeDuyet.endDate != null)
                            this.duyetHoanTraDuocPham.RangeDuyet.endDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.endDate);
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_9__["LocalStorageHelper"].setItem('additionalSearchStringDuyetHoanTraDuocPham', null);
                        this.additionalSearchString = JSON.stringify(this.duyetHoanTraDuocPham);
                    }
                    this.filterColumns = [
                        { Field: "SoPhieu", Title: "Số phiếu", MinWidth: 200, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: "TenNhanVienYeuCau", Title: "Người yêu cầu" },
                        { Field: "TenKhoCanHoanTra", Title: "Hoàn trả từ kho" },
                        { Field: "TenKhoNhanHoanTra", Title: "Hoàn trả về kho" },
                        { Field: "NgayYeuCau", Title: "Ngày yêu cầu" },
                        { Field: "TinhTrangDuyet", Title: "Tình trạng" },
                        { Field: "TenNhanVienDuyet", Title: "Người Duyệt" },
                        { Field: "NgayDuyet", Title: "Ngày Duyệt" },
                    ];
                    this.gridChaColumns = [
                        { Field: "SoPhieu", Title: "Mã", Width: 100, Sortable: true, Template: this.soPhieuTemplate },
                        { Field: "TenNhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
                        { Field: "TenKhoCanHoanTra", Title: "Hoàn trả từ kho", Width: 200, Sortable: true },
                        { Field: "TenKhoNhanHoanTra", Title: "Hoàn trả về kho", Width: 200, Sortable: true },
                        { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
                        { Field: "TinhTrangDuyet", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.TinhTrangTemplate },
                        { Field: "TenNhanVienDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
                        { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
                    ];
                    this.gridConColumns = [
                        { Field: "Nhom", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 100 },
                        { Field: "DuocPham", Title: "Tên Dược Phẩm", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "LoaiBHYT", Title: "Loại", Width: 140, Template: this.TinhTrangBHYTTemplate },
                        { Field: "SoLo", Title: "Số Lô", Width: 100 },
                        { Field: "HanSuDung", Title: "HSD", Width: 140, Template: this.hsdTemplate },
                        { Field: "SoLuongHoanTra", Title: "SL H.Trả", Width: 100, Template: this.soLuongHoanTraTemplate }
                    ];
                    this.theFirstSearch = JSON.stringify(this.duyetHoanTraDuocPham);
                };
                DuyetHoanTraDuocPhamListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.CheckboxChange = function ($event, dangChoDuyet, tuChoiDuyet, daDuyet) {
                    if (dangChoDuyet === void 0) { dangChoDuyet = false; }
                    if (tuChoiDuyet === void 0) { tuChoiDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl("/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham?holdQuery=true");
                    if (dangChoDuyet) {
                        this.duyetHoanTraDuocPham.DangChoDuyet = $event;
                    }
                    else if (tuChoiDuyet) {
                        this.duyetHoanTraDuocPham.TuChoiDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.duyetHoanTraDuocPham.DaDuyet = $event;
                    }
                    this.Timkiem();
                };
                DuyetHoanTraDuocPhamListComponent.prototype.Timkiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    QueryString = this.duyetHoanTraDuocPham.SearchString;
                    this.convertDateTimeToUTC();
                    var query = JSON.stringify(this.duyetHoanTraDuocPham);
                    this.gridChild._additionalSearchString = query;
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                    this.reverseDateTime();
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_9__["LocalStorageHelper"].setItem("additionalSearchStringDuyetHoanTraDuocPham", JSON.stringify(this.duyetHoanTraDuocPham));
                    this.cd.detectChanges();
                };
                DuyetHoanTraDuocPhamListComponent.prototype.convertDateTimeToUTC = function () {
                    if (this.duyetHoanTraDuocPham.RangeYeuCau.startDate) {
                        this.yeuCauStartDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.startDate);
                        this.duyetHoanTraDuocPham.RangeYeuCau.startDate = new Date(Date.UTC(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes()));
                    }
                    if (this.duyetHoanTraDuocPham.RangeYeuCau.endDate) {
                        this.yeuCauEndDate = new Date(this.duyetHoanTraDuocPham.RangeYeuCau.endDate);
                        this.duyetHoanTraDuocPham.RangeYeuCau.endDate = new Date(Date.UTC(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes()));
                    }
                    if (this.duyetHoanTraDuocPham.RangeDuyet.startDate) {
                        this.duyetStartDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.startDate);
                        this.duyetHoanTraDuocPham.RangeDuyet.startDate = new Date(Date.UTC(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes()));
                    }
                    if (this.duyetHoanTraDuocPham.RangeDuyet.endDate) {
                        this.duyetEndDate = new Date(this.duyetHoanTraDuocPham.RangeDuyet.endDate);
                        this.duyetHoanTraDuocPham.RangeDuyet.endDate = new Date(Date.UTC(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes()));
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.reverseDateTime = function () {
                    if (this.duyetHoanTraDuocPham.RangeYeuCau.startDate) {
                        this.duyetHoanTraDuocPham.RangeYeuCau.startDate = new Date(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes());
                    }
                    if (this.duyetHoanTraDuocPham.RangeYeuCau.endDate) {
                        this.duyetHoanTraDuocPham.RangeYeuCau.endDate = new Date(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes());
                    }
                    if (this.duyetHoanTraDuocPham.RangeDuyet.startDate) {
                        this.duyetHoanTraDuocPham.RangeDuyet.startDate = new Date(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes());
                    }
                    if (this.duyetHoanTraDuocPham.RangeDuyet.endDate) {
                        this.duyetHoanTraDuocPham.RangeDuyet.endDate = new Date(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes());
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.onKeyNgayNhap = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.onKeyNgayDuyet = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.clearSearch = function () {
                    if (this.duyetHoanTraDuocPham.SearchString == "" || this.duyetHoanTraDuocPham.SearchString == null) {
                        this.Timkiem();
                        // this.gridChild.searchString = "";
                        // this.gridChild.search();
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.changeNgayNhapRange = function (ev) {
                    this.Timkiem();
                };
                DuyetHoanTraDuocPhamListComponent.prototype.changeNgayDuyetRange = function (ev) {
                    this.Timkiem();
                };
                DuyetHoanTraDuocPhamListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('HoanTra/ExportDuyetHoanTraDuocPham', self.gridCha._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DuyetHoanTraDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraDuocPhamListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuyetHoanTraDuocPhamListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuyetHoanTraDuocPhamListComponent.prototype.inYeuCauHoanTraDuocPham = function (id) {
                    this.dialog.open(_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_17__["InPhieuHoanTraCompoment"], {
                        disableClose: true,
                        width: "1200px",
                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: true, LaTuTruc: true, DuocDuyet: true },
                    }).afterClosed().subscribe(function (result) { });
                };
                return DuyetHoanTraDuocPhamListComponent;
            }());
            DuyetHoanTraDuocPhamListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"], { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCha', { static: false })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "gridCha", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vitriTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "vitriTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "TinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangBHYTTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "TinhTrangBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "soPhieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaNhapTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "giaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaBanTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "giaBanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "hsdTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongHoanTraTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "soLuongHoanTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "groupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], DuyetHoanTraDuocPhamListComponent.prototype, "actionTemplate", void 0);
            DuyetHoanTraDuocPhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-hoan-tra-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-hoan-tra-duoc-pham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.scss")).default]
                })
            ], DuyetHoanTraDuocPhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-routing.module.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-routing.module.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: DuyetHoanTraDuocPhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraDuocPhamRoutingModule", function () { return DuyetHoanTraDuocPhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_list_duyet_hoan_tra_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_chi_tiet_duyet_hoan_tra_duoc_pham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_hoan_tra_duoc_pham_list_duyet_hoan_tra_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_6__["DuyetHoanTraDuocPhamListComponent"],
                    data: {
                        title: 'Danh Sách Duyệt Hoàn Trả Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetYeuCauHoanTraDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _duyet_hoan_tra_duoc_pham_chi_tiet_duyet_hoan_tra_duoc_pham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__["DuyetHoanTraDuocPhamChiTietComponent"],
                    data: {
                        title: 'Duyệt Hoàn Trả Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetYeuCauHoanTraDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var DuyetHoanTraDuocPhamRoutingModule = /** @class */ (function () {
                function DuyetHoanTraDuocPhamRoutingModule() {
                }
                return DuyetHoanTraDuocPhamRoutingModule;
            }());
            DuyetHoanTraDuocPhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetHoanTraDuocPhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: ThongTinDuyetHoanTraDuocPham, TuChoiDuyetHoanTraDuocPham, HoanTraDuocPhamSearch, rangeDate, PhieuHoanTraDuocPhamVatTu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinDuyetHoanTraDuocPham", function () { return ThongTinDuyetHoanTraDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiDuyetHoanTraDuocPham", function () { return TuChoiDuyetHoanTraDuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoanTraDuocPhamSearch", function () { return HoanTraDuocPhamSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuHoanTraDuocPhamVatTu", function () { return PhieuHoanTraDuocPhamVatTu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ThongTinDuyetHoanTraDuocPham = /** @class */ (function () {
                function ThongTinDuyetHoanTraDuocPham() {
                    this.Id = 0;
                    this.SoPhieu = null;
                    this.NhanVienYeuCauId = 0;
                    this.TenNhanVienYeuCau = null;
                    this.KhoCanHoanTraId = 0;
                    this.TenKhoCanHoanTra = null;
                    this.KhoNhanHoanTraId = 0;
                    this.TenKhoNhanHoanTra = null;
                    this.NgayYeuCau = new Date();
                    this.NgayYeuCauDisplay = null;
                    this.TinhTrang = true;
                    this.TinhTrangDuyet = null;
                    this.ClassTrangThai = null;
                    this.NhanVienDuyetId = 0;
                    this.TenNhanVienDuyet = null;
                    this.NgayDuyet = new Date();
                    this.NgayDuyetDisplay = null;
                    this.GhiChu = null;
                    this.NhanVienTraId = 0;
                    this.TenNhanVienTra = null;
                    this.NhanVienNhanId = 0;
                    this.TenNhanVienNhan = null;
                }
                return ThongTinDuyetHoanTraDuocPham;
            }());
            var TuChoiDuyetHoanTraDuocPham = /** @class */ (function () {
                function TuChoiDuyetHoanTraDuocPham() {
                    this.Id = 0;
                    this.LyDoHuy = null;
                }
                return TuChoiDuyetHoanTraDuocPham;
            }());
            var HoanTraDuocPhamSearch = /** @class */ (function () {
                function HoanTraDuocPhamSearch(KhoDuocPhamId, TenKhoDuocPham, DangChoDuyet, DaDuyet, TuChoiDuyet, LoaiNhapKho, TenLoaiNhapKho, SearchString, RangeYeuCau, RangeDuyet) {
                    if (KhoDuocPhamId === void 0) { KhoDuocPhamId = 0; }
                    if (TenKhoDuocPham === void 0) { TenKhoDuocPham = null; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (LoaiNhapKho === void 0) { LoaiNhapKho = 0; }
                    if (TenLoaiNhapKho === void 0) { TenLoaiNhapKho = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (RangeYeuCau === void 0) { RangeYeuCau = new rangeDate(); }
                    if (RangeDuyet === void 0) { RangeDuyet = new rangeDate(); }
                    this.KhoDuocPhamId = KhoDuocPhamId;
                    this.TenKhoDuocPham = TenKhoDuocPham;
                    this.DangChoDuyet = DangChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.LoaiNhapKho = LoaiNhapKho;
                    this.TenLoaiNhapKho = TenLoaiNhapKho;
                    this.SearchString = SearchString;
                    this.RangeYeuCau = RangeYeuCau;
                    this.RangeDuyet = RangeDuyet;
                }
                return HoanTraDuocPhamSearch;
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
            var PhieuHoanTraDuocPhamVatTu = /** @class */ (function () {
                function PhieuHoanTraDuocPhamVatTu(YeuCauHoanTraDuocPhamVatTuId, LaDuocPham, LaTuTruc, DuocDuyet) {
                    if (YeuCauHoanTraDuocPhamVatTuId === void 0) { YeuCauHoanTraDuocPhamVatTuId = 0; }
                    if (LaDuocPham === void 0) { LaDuocPham = null; }
                    if (LaTuTruc === void 0) { LaTuTruc = null; }
                    if (DuocDuyet === void 0) { DuocDuyet = false; }
                    this.YeuCauHoanTraDuocPhamVatTuId = YeuCauHoanTraDuocPhamVatTuId;
                    this.LaDuocPham = LaDuocPham;
                    this.LaTuTruc = LaTuTruc;
                    this.DuocDuyet = DuocDuyet;
                }
                return PhieuHoanTraDuocPhamVatTu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: DuyetHoanTraDuocPhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraDuocPhamModule", function () { return DuyetHoanTraDuocPhamModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_list_duyet_hoan_tra_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-list/duyet-hoan-tra-duoc-pham-list.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_chi_tiet_duyet_hoan_tra_duoc_pham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-chi-tiet/duyet-hoan-tra-duoc-pham-chi-tiet.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-hoan-tra-duoc-pham-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duyet-hoan-tra-duoc-pham.service */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _tu_choi_duyet_hoan_tra_duoc_pham_tu_choi_duyet_hoan_tra_duoc_pham_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.ts");
            /* harmony import */ var _in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var DuyetHoanTraDuocPhamModule = /** @class */ (function () {
                function DuyetHoanTraDuocPhamModule() {
                }
                return DuyetHoanTraDuocPhamModule;
            }());
            DuyetHoanTraDuocPhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_duyet_hoan_tra_duoc_pham_list_duyet_hoan_tra_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_3__["DuyetHoanTraDuocPhamListComponent"], _duyet_hoan_tra_duoc_pham_chi_tiet_duyet_hoan_tra_duoc_pham_chi_tiet_component__WEBPACK_IMPORTED_MODULE_4__["DuyetHoanTraDuocPhamChiTietComponent"], _tu_choi_duyet_hoan_tra_duoc_pham_tu_choi_duyet_hoan_tra_duoc_pham_component__WEBPACK_IMPORTED_MODULE_19__["TuChoiDuyetHoanTraDuocPhamComponent"], _in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_20__["InPhieuHoanTraCompoment"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _duyet_hoan_tra_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_5__["DuyetHoanTraDuocPhamRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    ],
                    providers: [
                        _duyet_hoan_tra_duoc_pham_service__WEBPACK_IMPORTED_MODULE_17__["DuyetHoanTraDuocPhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__["BaseService"], useClass: _duyet_hoan_tra_duoc_pham_service__WEBPACK_IMPORTED_MODULE_17__["DuyetHoanTraDuocPhamService"] },
                    ],
                    entryComponents: [
                        _tu_choi_duyet_hoan_tra_duoc_pham_tu_choi_duyet_hoan_tra_duoc_pham_component__WEBPACK_IMPORTED_MODULE_19__["TuChoiDuyetHoanTraDuocPhamComponent"],
                        _in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_20__["InPhieuHoanTraCompoment"]
                    ]
                })
            ], DuyetHoanTraDuocPhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.service.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.service.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: DuyetHoanTraDuocPhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraDuocPhamService", function () { return DuyetHoanTraDuocPhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuyetHoanTraDuocPhamService = /** @class */ (function (_super) {
                __extends(DuyetHoanTraDuocPhamService, _super);
                function DuyetHoanTraDuocPhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'HoanTra';
                    return _this;
                }
                return DuyetHoanTraDuocPhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuyetHoanTraDuocPhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuyetHoanTraDuocPhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DuyetHoanTraDuocPhamService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtaG9hbi10cmEtZHVvYy1waGFtL2luLXBoaWV1LWhvYW4tdHJhL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXGR1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbVxcaW4tcGhpZXUtaG9hbi10cmFcXGluLXBoaWV1LWhvYW4tdHJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC1ob2FuLXRyYS1kdW9jLXBoYW0vaW4tcGhpZXUtaG9hbi10cmEvaW4tcGhpZXUtaG9hbi10cmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC1ob2FuLXRyYS1kdW9jLXBoYW0vaW4tcGhpZXUtaG9hbi10cmEvaW4tcGhpZXUtaG9hbi10cmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: InPhieuHoanTraCompoment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuHoanTraCompoment", function () { return InPhieuHoanTraCompoment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../duyet-hoan-tra-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model.ts");
            var InPhieuHoanTraCompoment = /** @class */ (function () {
                function InPhieuHoanTraCompoment(data, sanitizer, apiService, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.src = "";
                    this.srcPhieuInHoanTra = "";
                    this.srcPhieuInHoanTraHtml = "";
                    this.printLayout = 'Portrait';
                    this.printSize = 'A4';
                    this.phieuHoanTraDuocPhamVatTu = new _duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_7__["PhieuHoanTraDuocPhamVatTu"]();
                }
                InPhieuHoanTraCompoment.prototype.ngOnInit = function () {
                    var _this = this;
                    this.phieuHoanTraDuocPhamVatTu.YeuCauHoanTraDuocPhamVatTuId = this.data.YeuCauHoanTraDuocPhamVatTuId;
                    this.phieuHoanTraDuocPhamVatTu.LaDuocPham = this.data.LaDuocPham;
                    this.phieuHoanTraDuocPhamVatTu.LaTuTruc = this.data.LaTuTruc;
                    this.phieuHoanTraDuocPhamVatTu.DuocDuyet = this.data.DuocDuyet;
                    if (window.location.protocol == "http:") {
                        this.hostingName = "http://" + window.location.host;
                    }
                    else {
                        this.hostingName = "https://" + window.location.host;
                    }
                    var loading = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: {},
                    });
                    // if (this.data.yeuCauHoanTraDuocPhamId !== null && this.data.yeuCauHoanTraDuocPhamId !== undefined) {
                    // this.apiService.get<any>("HoanTra/GetHtmlPhieuInHoanTraDuocPham?yeuCauHoanTraDuocPhamId=" + this.data.yeuCauHoanTraDuocPhamId + "&hostingName=" + this.hostingName)
                    this.apiService.post("HoanTra/InPhieuHoanTraDuocPhamVatTu", this.phieuHoanTraDuocPhamVatTu)
                        .subscribe(function (resHoanTra) {
                        _this.srcPhieuInHoanTraHtml = resHoanTra;
                        _this.srcPhieuInHoanTra = "data:text/html;charset=utf-8," + encodeURIComponent(resHoanTra);
                        loading.close();
                    });
                    // }
                };
                InPhieuHoanTraCompoment.prototype.getSharedPrintForm = function () {
                    var dataReplaceemplateHeaderGayNghien = "";
                    var templateHeaderGayNghien = '<div style=\'width: 100%; height: 40px; background: #005dab;color:#fff;text-align: center;font-size: 23px\'> PHIẾU HOÀN TRẢ THUỐC</div>';
                    dataReplaceemplateHeaderGayNghien = this.replaceAll(this.srcPhieuInHoanTraHtml, templateHeaderGayNghien, '');
                    return new Promise(function (resolve) {
                        resolve(dataReplaceemplateHeaderGayNghien);
                    });
                };
                InPhieuHoanTraCompoment.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                InPhieuHoanTraCompoment.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return InPhieuHoanTraCompoment;
            }());
            InPhieuHoanTraCompoment.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InPhieuHoanTraCompoment = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-in-phieu-hoan-tra",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-phieu-hoan-tra.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-phieu-hoan-tra.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InPhieuHoanTraCompoment);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.scss": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.scss ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL2R1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS90dS1jaG9pLWR1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS90dS1jaG9pLWR1eWV0LWhvYW4tdHJhLWR1b2MtcGhhbS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.ts": 
        /*!**********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.ts ***!
          \**********************************************************************************************************************************************************/
        /*! exports provided: TuChoiDuyetHoanTraDuocPhamComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiDuyetHoanTraDuocPhamComponent", function () { return TuChoiDuyetHoanTraDuocPhamComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            var TuChoiDuyetHoanTraDuocPhamComponent = /** @class */ (function () {
                function TuChoiDuyetHoanTraDuocPhamComponent(data, dialog, cdRef, dialogRef) {
                    this.data = data;
                    this.dialog = dialog;
                    this.cdRef = cdRef;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                }
                TuChoiDuyetHoanTraDuocPhamComponent.prototype.ngOnInit = function () {
                    this.lyDoHuy = "";
                };
                TuChoiDuyetHoanTraDuocPhamComponent.prototype.huyYeuCauHoanTra = function () {
                    this.validationErrors = [];
                    this.cdRef.detectChanges();
                    if (this.lyDoHuy == "") {
                        this.validationErrors.push({
                            Message: "Bạn phải nhập lí do từ chối phê duyệt.",
                            Field: "LyDoHuy",
                        });
                        return true;
                    }
                    else {
                        this.dialogRef.close(this.lyDoHuy);
                    }
                };
                TuChoiDuyetHoanTraDuocPhamComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return TuChoiDuyetHoanTraDuocPhamComponent;
            }());
            TuChoiDuyetHoanTraDuocPhamComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            TuChoiDuyetHoanTraDuocPhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tu-choi-duyet-hoan-tra-duoc-pham',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tu-choi-duyet-hoan-tra-duoc-pham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tu-choi-duyet-hoan-tra-duoc-pham.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham/tu-choi-duyet-hoan-tra-duoc-pham.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], TuChoiDuyetHoanTraDuocPhamComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-duyet-hoan-tra-duoc-pham-duyet-hoan-tra-duoc-pham-module~nhap-xuat-duoc-~997491ab-es2015.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-duyet-hoan-tra-duoc-pham-duyet-hoan-tra-duoc-pham-module~nhap-xuat-duoc-~997491ab-es5.js.map
//# sourceMappingURL=default~nhap-xuat-duoc-pham-duyet-hoan-tra-duoc-pham-duyet-hoan-tra-duoc-pham-module~nhap-xuat-duoc-~997491ab-es5.js.map