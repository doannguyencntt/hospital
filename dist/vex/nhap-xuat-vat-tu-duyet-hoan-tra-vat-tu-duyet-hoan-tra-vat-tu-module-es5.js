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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-vat-tu-duyet-hoan-tra-vat-tu-duyet-hoan-tra-vat-tu-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Nhập xuất',Path:''},\n        {Title:'Vật tư',Path:''},\n        {Title:'Hoàn trả',Path:''},\n        {Title:'Duyệt hoàn trả',Path:'/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu', queryParams: {holdQuery : true}, Active: true}\n        ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 fxFlex=\"90%\" fxFlex.sm=\"90%\" class=\"title m-0\">Duyệt hoàn trả vật tư</h2>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                    *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet'\"\n                    class=\"{{thongTinHoanTraVatTu.ClassTrangThai}}\">{{thongTinHoanTraVatTu.TinhTrangDuyet}}</span>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                    *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'da_duyet'\"\n                    class=\"{{thongTinHoanTraVatTu.ClassTrangThai}}\">{{thongTinHoanTraVatTu.TinhTrangDuyet}}</span>\n                <span style=\"right: 38px;width: auto;position: absolute;\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                    *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'tu_choi_duyet'\"\n                    class=\"{{thongTinHoanTraVatTu.ClassTrangThai}}\">{{thongTinHoanTraVatTu.TinhTrangDuyet}}</span>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NguoiNhapId\" label=\"Hoàn trả từ kho\"\n                        [modelText]=\"thongTinHoanTraVatTu.HoanTraTuKho\" [disabled]='true'\n                        [(model)]=\"thongTinHoanTraVatTu.HoanTraTuKhoId\" url=\"DinhMucVatTuTonKho/GetListKhoAsync\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NguoiNhapId\" label=\"Hoàn trả về kho\"\n                        [modelText]=\"thongTinHoanTraVatTu.HoanTraVeKho\" [disabled]='true'\n                        [(model)]=\"thongTinHoanTraVatTu.HoanTraVeKhoId\" url=\"DinhMucVatTuTonKho/GetListKhoAsync\">\n                    </app-combobox>\n\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NguoiNhapId\" label=\"Người nhập\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiYeuCau\" [disabled]='true'\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiYeuCauId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n\n                    <app-datepicker id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày yêu cầu\"\n                        [(model)]=\"thongTinHoanTraVatTu.NgayYeuCau\" [disabled]='true'>\n                    </app-datepicker>\n\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NguoiNhapId\" label=\"Người duyệt\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'da_duyet' || thongTinHoanTraVatTu.ClassTrangThai === 'da_tu_choi'\"\n                        [modelText]=\"thongTinHoanTraVatTu.NguoiDuyet\" [disabled]='true'\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiDuyetId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                    <app-datepicker id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày duyệt\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'da_duyet' || thongTinHoanTraVatTu.ClassTrangThai === 'da_tu_choi'\"\n                        [(model)]=\"thongTinHoanTraVatTu.NgayDuyet\" [disabled]='true'>\n                    </app-datepicker>\n\n                    <!-- Từ chối duyệt -->\n                    <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" id=\"NhanVienYeuCauId\" label=\"Người từ chối duyệt\" required=\"true\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'tu_choi_duyet'\"\n                        [modelText]=\"thongTinHoanTraVatTu.NguoiDuyet\" [disabled]='true'\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiDuyetId\" url=\"\">\n                    </app-combobox>\n                    <app-datepicker id=\"NgayNhapId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Ngày từ chối duyệt\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'tu_choi_duyet'\"\n                        [(model)]=\"thongTinHoanTraVatTu.NgayDuyet\" [disabled]='true'>\n                    </app-datepicker>\n\n                    <app-textarea id=\"GhiChu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ghi chú\"\n                        [disabled]=\"true\"\n                        [(model)]=\"thongTinHoanTraVatTu.GhiChu\" maxlength=\"4000\">\n                    </app-textarea>\n                </div>\n                <h3 fxFlex=\"100%\" class=\"sub-title mt-3\">THÔNG TIN VẬT TƯ</h3>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                        [groups]=\"groups\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                        pageSize=\"5\" [urlGetData]=\"urlGetDataAsync\" [sort]=\"sortDuyetKhoChild\" pageSize=\"5\"\n                        additionalSearchString={{yeuCauNhapKhoVatTuId}} [autoHeight]=\"true\" [showStt]=\"true\">\n                    </app-grid>\n                    <ng-template #TinhTrangBHYTTemplate let-dataItem>\n                        <!-- <app-checkbox value=\"true\" label=\"\" [(model)]=\"dataItem.LoaiBHYT\" [disabled]=\"true\">\n                        </app-checkbox> -->\n                        {{dataItem.LoaiBHYTDisplay}}\n                    </ng-template>\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                    <ng-template #giaNhapTemplate let-dataItem>\n                        {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                    <ng-template #giaBanTemplate let-dataItem>\n                        {{dataItem.GiaBan | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                    <ng-template #hsdTemplate let-dataItem>\n                        {{dataItem.HanSuDungStr}}\n                    </ng-template>\n                    \n                    <ng-template #soLuongHoanTraTemplate let-dataItem>\n                        {{dataItem.SoLuongHoanTraDisplay}}\n                    </ng-template>\n                </div>\n                <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px\" class=\"mt-3\">\n                    <!-- Chưa duyệt -->\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienTraId\" label=\"Người trả\" required=\"true\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet'\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiTra\"\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiTraId\" url=\"NhanVien/GetListLookupNhanVien\"\n                        [validationerror]=\"'NguoiTraId' | validationerror: validationErrors\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienNhanId\" label=\"Người nhận\" required=\"true\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet'\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiNhan\"\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiNhanId\" url=\"NhanVien/GetListLookupNhanVien\"\n                        [validationerror]=\"'NguoiNhanId' | validationerror: validationErrors\">\n                    </app-combobox>\n\n                    <!-- Đã duyệt -->\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienTraId\" label=\"Người trả\" required=\"true\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'da_duyet'\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiTra\"\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiTraId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"25%\" fxFlex.sm=\"25%\" id=\"NhanVienNhanId\" label=\"Người nhận\" required=\"true\"\n                        *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'da_duyet'\"\n                        [disabled]=\"true\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiNhan\"\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiNhanId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"mt-3\">\n                    <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                        <button *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'da_duyet'\" class=\"float-left\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"InPhieuHoanTra()\">\n                            <i class=\"ft-save\"></i> In Phiếu Hoàn Trả\n                        </button>\n\n                        <!-- <button type=\"button\" (click)=\"BackToList()\" mat-button class=\"mr-1\"><i\n                                class=\"ft-arrow-left\"></i>\n                            Hủy</button> -->\n                        <button *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet'\" type=\"button\" (click)=\"BackToList()\" mat-button class=\"mr-1\">\n                            <i class=\"ft-arrow-left\"></i> Hủy\n                        </button>\n                        <button *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai !== 'dang_cho_duyet'\" type=\"button\" (click)=\"BackToList()\" mat-button class=\"mr-1\">\n                            <i class=\"ft-arrow-left\"></i> Quay lại\n                        </button>\n\n                        <button *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet'\" type=\"button\"\n                            (click)=\"duyet()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Duyệt</button>\n                        <button *ngIf=\"thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet'\" type=\"button\"\n                            (click)=\"khongPheDuyet()\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Không\n                            phê duyệt</button>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"NguoiNhapId\" label=\"Người trả\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiTra\" [required]=\"true\"\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiTraId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                    <app-combobox fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"NguoiNhapId\" label=\"Người nhận\"\n                        [modelText]=\"thongTinHoanTraVatTu.TenNguoiNhan\" [required]=\"true\"\n                        [(model)]=\"thongTinHoanTraVatTu.NguoiNhanId\" url=\"NhanVien/GetListLookupNhanVien\">\n                    </app-combobox>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.html": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.html ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[ {Title:'Nhập xuất',Path:''},\n                {Title:'Vật tư',Path:''},\n                {Title:'Hoàn trả',Path:''},\n                {Title:'Duyệt hoàn trả',Path:'/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu', Active: true}]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridChaColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"false\"\n                [useAddDeault]=\"false\" [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                [additionalSearchString]=\"theFirstSearch\" #gridCha [headerTemplate]=\"headerTemplate\"\n                [detailTemplate]=\"detailTemplate\" [urlGetData]=\"urlGetDataGridParentAsync\" [sort]=\"sortDuyetKho\">\n            </app-grid>\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridConColumns\" pageSize=\"5\" [documentType]=\"documentType\"\n                    [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [sort]=\"sortDuyetKhoChild\" [urlGetData]=\"urlGetDataGridChildAsync\" [groups]=\"groups\"\n                    additionalSearchString={{dataItem.Id}} [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n                        [(model)]=\"duyetNhapKhoVatTu.DangChoDuyet\" class=\"ml-2\" label=\"Đang chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n                        [(model)]=\"duyetNhapKhoVatTu.TuChoiDuyet\" class=\"ml-2\" label=\"Từ chối duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\"\n                        [(model)]=\"duyetNhapKhoVatTu.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n                    <div class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"duyetNhapKhoVatTu.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"duyetNhapKhoVatTu.RangeNhap\" label=\"Nhập từ ngày - Đến ngày\"\n                        (keyup)=\"onKeyNgayNhap($event)\" (modelChange)=\"changeNgayNhapRange($event)\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"duyetNhapKhoVatTu.RangeDuyet\" label=\"Duyệt từ ngày - Đến ngày\"\n                        (keyup)=\"onKeyNgayDuyet($event)\" (modelChange)=\"changeNgayDuyetRange($event)\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of filterColumns\">\n                            <button\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                </div>\n            </ng-template>\n\n            <ng-template #groupTemplate let-dataItem>\n                <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                    [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button (click)=\"inYeuCauHoanTraVatTu(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n<ng-template #TinhTrangTemplate let-dataItem>\n    <span *ngIf=\"dataItem.ClassTrangThai === 'dang_cho_duyet'\"\n        class=\"{{dataItem.ClassTrangThai}}\">{{dataItem.TinhTrangDuyet}}</span>\n    <span *ngIf=\"dataItem.ClassTrangThai === 'da_duyet'\"\n        class=\"{{dataItem.ClassTrangThai}}\">{{dataItem.TinhTrangDuyet}}</span>\n    <span *ngIf=\"dataItem.ClassTrangThai === 'tu_choi_duyet'\"\n        class=\"{{dataItem.ClassTrangThai}}\">{{dataItem.TinhTrangDuyet}}</span>\n</ng-template>\n<ng-template #TinhTrangBHYTTemplate let-dataItem>\n    <!-- <app-checkbox value=\"true\" label=\"\" [(model)]=\"dataItem.LoaiBHYT\" [disabled]=\"true\">\n    </app-checkbox> -->\n    {{dataItem.LoaiBHYTDisplay}}\n</ng-template>\n<ng-template #soChungTuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id)\">\n        {{dataItem.SoPhieu}}</a>\n</ng-template>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n\n<ng-template #giaNhapTemplate let-dataItem>\n    {{dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #giaBanTemplate let-dataItem>\n    {{dataItem.GiaBan | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetTemplate let-dataItem>\n    {{dataItem.NgayDuyetDisplay}}\n</ng-template>\n\n<ng-template #hsdTemplate let-dataItem>\n    {{dataItem.HanSuDungStr}}\n</ng-template>\n\n<ng-template #soLuongHoanTraTemplate let-dataItem>\n    {{dataItem.SoLuongHoanTraDisplay}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>PHIẾU HOÀN TRẢ VẬT TƯ</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n\n    <div style=\"overflow-y: auto;max-height: 553px;\">\n        <table class=\"table table-border\" width=\"100%\">\n            <!-- <tr  style=\"background: #005dab;color:#fff;\">\n                <th>PHIẾU IN HOÀN TRẢ</th>\n            </tr> -->\n            <tr >\n                <td style=\"padding: 0;\">\n                    <div class=\"container-iframe\">\n                        <iframe width=\"100%\" [src]=\"srcPhieuInHoanTra |safe\" allowTransparency=\"true\"\n                            background=\"transparent\"></iframe>\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"19\" style=\"text-align: right;\" typeSize=\"{{printSize}}\"\n        [typeLayout]=\"printLayout\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>Xác Nhận</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<legend>\n    Bạn có chắc từ chối phê duyệt cho lần nhập kho này không?\n    <app-textarea id=\"ly-do-huy\" [required]=\"true\" label=\"Lý do hủy\" maxlength=\"2000\" minHeight=\"60\" [(model)]=\"lyDoHuy\"\n        [validationerror]=\"'LyDoHuy' | validationerror:validationErrors\">\n    </app-textarea>\n    <mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n        <button mat-button mat-dialog-close>Không</button>\n        <button mat-raised-button mat-button color=\"primary\" (click)=\"Huy()\" \n            cdkFocusInitial>Có</button>\n    </mat-dialog-actions>\n</legend>\n\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dang_cho_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: sandybrown;\n}\n\n.da_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: green;\n}\n\n.tu_choi_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1L2R1eWV0LWhvYW4tdHJhLXZhdC10dS1jaGktdGlldC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFxkdXlldC1ob2FuLXRyYS12YXQtdHVcXGR1eWV0LWhvYW4tdHJhLXZhdC10dS1jaGktdGlldFxcZHV5ZXQtaG9hbi10cmEtdmF0LXR1LWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS9kdXlldC1ob2FuLXRyYS12YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1LWNoaS10aWV0L2R1eWV0LWhvYW4tdHJhLXZhdC10dS1jaGktdGlldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS9kdXlldC1ob2FuLXRyYS12YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1LWNoaS10aWV0L2R1eWV0LWhvYW4tdHJhLXZhdC10dS1jaGktdGlldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYW5nX2Nob19kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHNhbmR5YnJvd247XG59XG5cbi5kYV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHVfY2hvaV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJlZDtcbn0iLCIuZGFuZ19jaG9fZHV5ZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBzYW5keWJyb3duO1xufVxuXG4uZGFfZHV5ZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnR1X2Nob2lfZHV5ZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: DuyetHoanTraVatTuChiTietComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraVatTuChiTietComponent", function () { return DuyetHoanTraVatTuChiTietComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _hoan_tra_vt_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hoan-tra-vt.model */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/hoan-tra-vt.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _tu_choi_duyet_vat_tu_tu_choi_duyet_vat_tu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.ts");
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var DuyetHoanTraVatTuChiTietComponent = /** @class */ (function () {
                function DuyetHoanTraVatTuChiTietComponent(authService, dialog, elem, notificationService, apiService, router, route) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.elem = elem;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.thongTinHoanTraVatTu = new _hoan_tra_vt_model__WEBPACK_IMPORTED_MODULE_10__["ThongTinHoanTraVatTu"]();
                    this.gridColumns = [];
                    this.validationErrors = [];
                    this.urlGetDataAsync = "HoanTra/GetDanhSachHoanTraVatTuChiTietForGridAsync";
                    this.yeuCauNhapKhoVatTuId = 0;
                    this.thongTinLyDoHuyNhapKhoVatTu = new _hoan_tra_vt_model__WEBPACK_IMPORTED_MODULE_10__["TuChoiDuyetHoanTraVatTu"]();
                    this.duyetHoanTraVatTu = new _hoan_tra_vt_model__WEBPACK_IMPORTED_MODULE_10__["DuyetHoanTraVatTu"]();
                    this.groups = [{
                            field: 'LoaiSuDung', aggregates: [
                                { field: 'DonGiaNhap', aggregate: 'sum' }
                            ]
                        }];
                    this.sortDuyetKhoChild = [
                        {
                            field: "Id",
                            dir: "asc"
                        }
                    ];
                }
                DuyetHoanTraVatTuChiTietComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].DuyetYeuCauHoanTraVatTu;
                    this.yeuCauNhapKhoVatTuId = this.route.snapshot.params.id;
                    if (this.yeuCauNhapKhoVatTuId) {
                        this.currentAccessUser = this.authService.getAccessUser();
                        this.idPhong = this.authService.getPhongLamViecId();
                        this.getCurrentUserInformation();
                        // this.getThongTinDuyetKhoVatTu(this.yeuCauNhapKhoVatTuId);
                    }
                    this.gridColumns = [
                        { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 100 },
                        { Field: "VatTu", Title: "Tên Vật Tư", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "LoaiBHYT", Title: "Loại BHYT", Width: 140, Template: this.TinhTrangBHYTTemplate },
                        { Field: "SoLo", Title: "Số Lô", Width: 100 },
                        { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140, Template: this.hsdTemplate },
                        { Field: "SoLuongHoanTra", Title: "Số Lượng Hoàn Trả", Width: 100, Template: this.soLuongHoanTraTemplate }
                    ];
                };
                DuyetHoanTraVatTuChiTietComponent.prototype.getCurrentUserInformation = function () {
                    var _this = this;
                    if (this.currentAccessUser) {
                        this.apiService.post("User/GetUserAndDepartmentInformation?idNhanVien=" + this.currentAccessUser.Id + "&idPhongBenhVien=" + this.idPhong).subscribe(function (res) {
                            _this.currentUserInformation = res;
                            _this.getThongTinDuyetKhoVatTu(_this.yeuCauNhapKhoVatTuId);
                        });
                    }
                };
                DuyetHoanTraVatTuChiTietComponent.prototype.getThongTinDuyetKhoVatTu = function (id) {
                    var _this = this;
                    this.apiService.get("HoanTra/GetThongTinHoanTraVatTu/" + id)
                        .subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.thongTinHoanTraVatTu = resultData;
                            if (_this.thongTinHoanTraVatTu.ClassTrangThai === 'dang_cho_duyet') {
                                _this.thongTinHoanTraVatTu.TenNguoiNhan = _this.thongTinHoanTraVatTu.TenNguoiYeuCau;
                                _this.thongTinHoanTraVatTu.NguoiNhanId = _this.thongTinHoanTraVatTu.NguoiYeuCauId;
                                _this.thongTinHoanTraVatTu.TenNguoiTra = _this.currentUserInformation.Ten;
                                _this.thongTinHoanTraVatTu.NguoiTraId = _this.currentAccessUser.Id;
                            }
                        }
                    });
                };
                DuyetHoanTraVatTuChiTietComponent.prototype.BackToList = function () {
                    this.router.navigateByUrl("/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu?holdQuery=true");
                };
                DuyetHoanTraVatTuChiTietComponent.prototype.duyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["HoanTraDuocPhamVatTuMessage"].MessageXacNhanDuyetHoanTraDuocPham
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            /* result is a string:Yes,No,No answer*/
                            if (result == "Yes") {
                                _this.validationErrors = null;
                                _this.duyetHoanTraVatTu.Id = _this.yeuCauNhapKhoVatTuId;
                                _this.duyetHoanTraVatTu.NguoiTraId = _this.thongTinHoanTraVatTu.NguoiTraId ? _this.thongTinHoanTraVatTu.NguoiTraId : 0;
                                _this.duyetHoanTraVatTu.NguoiNhanId = _this.thongTinHoanTraVatTu.NguoiNhanId ? _this.thongTinHoanTraVatTu.NguoiNhanId : 0;
                                _this.apiService.post("HoanTra/HoanTraVatTuKho/", _this.duyetHoanTraVatTu)
                                    .subscribe(function (resultData) {
                                    // if (resultData !== null && resultData !== undefined) {
                                    //   if (resultData === "") {
                                    //     this.BackToList();
                                    //     this.notificationService.showSuccess("Hoàn trả thành công.");
                                    //   } else {
                                    //     this.notificationService.showError(resultData);
                                    //   }
                                    // }
                                    _this.notificationService.showSuccess("Duyệt thành công.");
                                    var yeuCauHoanTraVatTuId = _this.yeuCauNhapKhoVatTuId;
                                    _this.dialog.open(_duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_13__["InPhieuHoanTraCompoment"], {
                                        disableClose: true,
                                        width: "1200px",
                                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraVatTuId, LaDuocPham: false, LaTuTruc: true, DuocDuyet: true },
                                    }).afterClosed().subscribe(function (result) {
                                        _this.BackToList();
                                    });
                                }, function (err) {
                                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraVatTuChiTietComponent.prototype.khongPheDuyet = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Update)) {
                        if (this.confrim != null) {
                            this.dialog.closeAll();
                            this.confrim = null;
                        }
                        this.confrim = this.dialog.open(_tu_choi_duyet_vat_tu_tu_choi_duyet_vat_tu_component__WEBPACK_IMPORTED_MODULE_12__["TuChoiDuyetVatTuComponent"], {
                            disableClose: true,
                            width: "400px",
                            height: "300px",
                        }).afterClosed().subscribe(function (result) {
                            if (result != "" && result != undefined) {
                                _this.thongTinLyDoHuyNhapKhoVatTu.LyDoHuy = result;
                                _this.thongTinLyDoHuyNhapKhoVatTu.Id = _this.yeuCauNhapKhoVatTuId;
                                _this.apiService.post("HoanTra/TuChoiHoanTraVatTu", _this.thongTinLyDoHuyNhapKhoVatTu)
                                    .subscribe(function (resultData) {
                                    // if (resultData !== null && resultData !== undefined) {
                                    //   if (resultData) {
                                    //     this.notificationService.showSuccess("Từ chối duyệt thành công.");
                                    //     this.BackToList();
                                    //   }
                                    // }
                                    _this.notificationService.showSuccess("Từ chối duyệt thành công.");
                                    _this.BackToList();
                                }, function (err) {
                                    err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraVatTuChiTietComponent.prototype.InPhieuHoanTra = function () {
                    var yeuCauHoanTraVatTuId = this.yeuCauNhapKhoVatTuId;
                    // this.dialog.open(InPhieuHoanTraVatTuComponent, {
                    //   disableClose: true,
                    //   width: "1200px",
                    //   data: { yeuCauHoanTraVatTuId },
                    // }).afterClosed().subscribe((result) => { });
                    this.dialog.open(_duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_13__["InPhieuHoanTraCompoment"], {
                        disableClose: true,
                        width: "1200px",
                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraVatTuId, LaDuocPham: false, LaTuTruc: true, DuocDuyet: true },
                    }).afterClosed().subscribe(function (result) { });
                };
                return DuyetHoanTraVatTuChiTietComponent;
            }());
            DuyetHoanTraVatTuChiTietComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangBHYTTemplate', { static: true })
            ], DuyetHoanTraVatTuChiTietComponent.prototype, "TinhTrangBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetHoanTraVatTuChiTietComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaNhapTemplate', { static: true })
            ], DuyetHoanTraVatTuChiTietComponent.prototype, "giaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaBanTemplate', { static: true })
            ], DuyetHoanTraVatTuChiTietComponent.prototype, "giaBanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
            ], DuyetHoanTraVatTuChiTietComponent.prototype, "hsdTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongHoanTraTemplate', { static: true })
            ], DuyetHoanTraVatTuChiTietComponent.prototype, "soLuongHoanTraTemplate", void 0);
            DuyetHoanTraVatTuChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-hoan-tra-vat-tu-chi-tiet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-hoan-tra-vat-tu-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-hoan-tra-vat-tu-chi-tiet.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.scss")).default]
                })
            ], DuyetHoanTraVatTuChiTietComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.scss": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.scss ***!
          \******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".dang_cho_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: sandybrown;\n}\n\n.da_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: green;\n}\n\n.tu_choi_duyet {\n  font-size: 14px;\n  font-weight: 500;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1L2R1eWV0LWhvYW4tdHJhLXZhdC10dS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFx2YXQtdHVcXGR1eWV0LWhvYW4tdHJhLXZhdC10dVxcZHV5ZXQtaG9hbi10cmEtdmF0LXR1LWxpc3RcXGR1eWV0LWhvYW4tdHJhLXZhdC10dS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS9kdXlldC1ob2FuLXRyYS12YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1LWxpc3QvZHV5ZXQtaG9hbi10cmEtdmF0LXR1LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1L2R1eWV0LWhvYW4tdHJhLXZhdC10dS1saXN0L2R1eWV0LWhvYW4tdHJhLXZhdC10dS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbmdfY2hvX2R1eWV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogc2FuZHlicm93bjtcbn1cblxuLmRhX2R1eWV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi50dV9jaG9pX2R1eWV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmVkO1xufSIsIi5kYW5nX2Nob19kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHNhbmR5YnJvd247XG59XG5cbi5kYV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHVfY2hvaV9kdXlldCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.ts": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.ts ***!
          \****************************************************************************************************************************************/
        /*! exports provided: DuyetHoanTraVatTuListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraVatTuListComponent", function () { return DuyetHoanTraVatTuListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _hoan_tra_vt_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hoan-tra-vt.model */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/hoan-tra-vt.model.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
            /* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
            var DuyetHoanTraVatTuListComponent = /** @class */ (function () {
                function DuyetHoanTraVatTuListComponent(authService, location, dialog, elem, cd, notificationService, apiService, router, route) {
                    this.authService = authService;
                    this.location = location;
                    this.dialog = dialog;
                    this.elem = elem;
                    this.cd = cd;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.router = router;
                    this.route = route;
                    this.baseRoute = "/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu";
                    this.filterColumns = [];
                    this.gridChaColumns = [];
                    this.gridConColumns = [];
                    this.holdQuery = null;
                    this.query = null;
                    this.additionalSearchString = null;
                    this.yeuCauStartDate = null;
                    this.yeuCauEndDate = null;
                    this.duyetStartDate = null;
                    this.duyetEndDate = null;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23___default.a;
                    this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"];
                    this.theFirstSearch = "{\"KhoVatTuId\":0,\"TenKhoVatTu\":null,\"DangChoDuyet\":true,\"DaDuyet\":true,\"TuChoiDuyet\":true,\"LoaiNhapKho\":0,\"TenLoaiNhapKho\":null,\"SearchString\":\"\",\"RangeNhap\":{\"startDate\":null,\"endDate\":null},\"RangeDuyet\":{\"startDate\":null,\"endDate\":null}}";
                    this.urlGetDataGridParentAsync = "HoanTra/GetDanhSachHoanTraVatTuForGridAsync";
                    this.urlGetDataGridChildAsync = "HoanTra/GetDanhSachHoanTraVatTuChiTietForGridAsync";
                    this.urlGetTotalPageGridChild = "HoanTra/GetTotalDanhSachHoanTraVatTuChiTietForGridAsync";
                    this.sortDuyetKho = [{
                            field: "NgayYeuCau",
                            dir: "desc"
                        },
                        {
                            field: "SoPhieu",
                            dir: "asc"
                        }];
                    this.groups = [{
                            field: 'LoaiSuDung', aggregates: [
                                { field: 'DonGiaNhap', aggregate: 'sum' }
                            ]
                        }];
                    this.sortDuyetKhoChild = [
                        {
                            field: "Id",
                            dir: "asc"
                        }
                    ];
                }
                DuyetHoanTraVatTuListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].DuyetYeuCauHoanTraVatTu;
                    this.duyetNhapKhoVatTu = new _hoan_tra_vt_model__WEBPACK_IMPORTED_MODULE_15__["HoanTraVatTuSearch"]();
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem('additionalSearchStringDuyetHoanTraVatTu') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].getItem('additionalSearchStringDuyetHoanTraVatTu');
                        this.duyetNhapKhoVatTu = JSON.parse(this.additionalSearchString);
                        if (this.duyetNhapKhoVatTu.RangeNhap.startDate != null)
                            this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.startDate);
                        if (this.duyetNhapKhoVatTu.RangeNhap.endDate != null)
                            this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.endDate);
                        if (this.duyetNhapKhoVatTu.RangeDuyet.startDate != null)
                            this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.startDate);
                        if (this.duyetNhapKhoVatTu.RangeDuyet.endDate != null)
                            this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.endDate);
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setItem('additionalSearchStringDuyetHoanTraVatTu', null);
                        this.additionalSearchString = JSON.stringify(this.duyetNhapKhoVatTu);
                    }
                    this.gridChaColumns = [
                        { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true, Template: this.soChungTuTemplate },
                        { Field: "TenNguoiYeuCau", Title: "Người Yêu Cầu", Width: 150, Sortable: true },
                        { Field: "HoanTraTuKho", Title: "Hoàn trả từ kho", Width: 200, Sortable: true },
                        { Field: "HoanTraVeKho", Title: "Hoàn trả về kho", Width: 200, Sortable: true },
                        { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
                        { Field: "TinhTrangDuyet", Title: "Tình Trạng", Width: 150, Sortable: true, Template: this.TinhTrangTemplate },
                        { Field: "NguoiDuyet", Title: "Người Duyệt", Width: 150, Sortable: true },
                        { Field: "NgayDuyet", Title: "Ngày Duyệt", Width: 150, Sortable: true, Template: this.ngayDuyetTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
                    ];
                    this.gridConColumns = [
                        { Field: "LoaiSuDung", Title: "", Width: 100, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ma", Title: "Mã", Width: 100 },
                        { Field: "VatTu", Title: "Tên Vật Tư", Width: 100 },
                        { Field: "DonViTinh", Title: "ĐVT", Width: 100 },
                        { Field: "LoaiBHYT", Title: "Loại BHYT", Width: 140, Template: this.TinhTrangBHYTTemplate },
                        { Field: "SoLo", Title: "Số Lô", Width: 100 },
                        { Field: "HanSuDung", Title: "Hạn Sử Dụng", Width: 140, Template: this.hsdTemplate },
                        { Field: "SoLuongHoanTra", Title: "Số Lượng Hoàn Trả", Width: 100, Template: this.soLuongHoanTraTemplate }
                    ];
                    this.filterColumns = [
                        { Field: "SoPhieu", Title: "Mã" },
                        { Field: "TenNguoiYeuCau", Title: "Người Yêu Cầu" },
                        { Field: "HoanTraTuKho", Title: "Hoàn trả từ kho" },
                        { Field: "HoanTraVeKho", Title: "Hoàn trả về kho" },
                        { Field: "NgayYeuCau", Title: "Ngày Yêu Cầu" },
                        { Field: "TinhTrangDuyet", Title: "Tình Trạng" },
                        { Field: "NguoiDuyet", Title: "Người Duyệt" },
                        { Field: "NgayDuyet", Title: "Ngày Duyệt" }
                    ];
                    this.theFirstSearch = JSON.stringify(this.duyetNhapKhoVatTu);
                };
                DuyetHoanTraVatTuListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        this.router.navigate(["/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/chi-tiet/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.Timkiem = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var QueryString = null;
                    this.gridChild._additionalSearchString = null;
                    QueryString = this.duyetNhapKhoVatTu.SearchString;
                    this.convertDateTimeToUTC();
                    var query = JSON.stringify(this.duyetNhapKhoVatTu);
                    this.gridChild._additionalSearchString = query;
                    this.gridChild.searchString = QueryString;
                    this.gridChild.search();
                    this.reverseDateTime();
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_6__["LocalStorageHelper"].setItem("additionalSearchStringDuyetHoanTraVatTu", JSON.stringify(this.duyetNhapKhoVatTu));
                    this.cd.detectChanges();
                };
                DuyetHoanTraVatTuListComponent.prototype.convertDateTimeToUTC = function () {
                    if (this.duyetNhapKhoVatTu.RangeNhap.startDate) {
                        this.yeuCauStartDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.startDate);
                        this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(Date.UTC(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes()));
                    }
                    if (this.duyetNhapKhoVatTu.RangeNhap.endDate) {
                        this.yeuCauEndDate = new Date(this.duyetNhapKhoVatTu.RangeNhap.endDate);
                        this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(Date.UTC(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes()));
                    }
                    if (this.duyetNhapKhoVatTu.RangeDuyet.startDate) {
                        this.duyetStartDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.startDate);
                        this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(Date.UTC(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes()));
                    }
                    if (this.duyetNhapKhoVatTu.RangeDuyet.endDate) {
                        this.duyetEndDate = new Date(this.duyetNhapKhoVatTu.RangeDuyet.endDate);
                        this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(Date.UTC(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes()));
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.reverseDateTime = function () {
                    if (this.duyetNhapKhoVatTu.RangeNhap.startDate) {
                        this.duyetNhapKhoVatTu.RangeNhap.startDate = new Date(this.yeuCauStartDate.getFullYear(), this.yeuCauStartDate.getMonth(), this.yeuCauStartDate.getDate(), this.yeuCauStartDate.getHours(), this.yeuCauStartDate.getMinutes());
                    }
                    if (this.duyetNhapKhoVatTu.RangeNhap.endDate) {
                        this.duyetNhapKhoVatTu.RangeNhap.endDate = new Date(this.yeuCauEndDate.getFullYear(), this.yeuCauEndDate.getMonth(), this.yeuCauEndDate.getDate(), this.yeuCauEndDate.getHours(), this.yeuCauEndDate.getMinutes());
                    }
                    if (this.duyetNhapKhoVatTu.RangeDuyet.startDate) {
                        this.duyetNhapKhoVatTu.RangeDuyet.startDate = new Date(this.duyetStartDate.getFullYear(), this.duyetStartDate.getMonth(), this.duyetStartDate.getDate(), this.duyetStartDate.getHours(), this.duyetStartDate.getMinutes());
                    }
                    if (this.duyetNhapKhoVatTu.RangeDuyet.endDate) {
                        this.duyetNhapKhoVatTu.RangeDuyet.endDate = new Date(this.duyetEndDate.getFullYear(), this.duyetEndDate.getMonth(), this.duyetEndDate.getDate(), this.duyetEndDate.getHours(), this.duyetEndDate.getMinutes());
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.CheckboxChange = function ($event, dangChoDuyet, tuChoiDuyet, daDuyet) {
                    if (dangChoDuyet === void 0) { dangChoDuyet = false; }
                    if (tuChoiDuyet === void 0) { tuChoiDuyet = false; }
                    if (daDuyet === void 0) { daDuyet = false; }
                    this.router.navigateByUrl("/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu?holdQuery=true");
                    if (dangChoDuyet) {
                        this.duyetNhapKhoVatTu.DangChoDuyet = $event;
                    }
                    else if (tuChoiDuyet) {
                        this.duyetNhapKhoVatTu.TuChoiDuyet = $event;
                    }
                    else if (daDuyet) {
                        this.duyetNhapKhoVatTu.DaDuyet = $event;
                    }
                    this.Timkiem();
                };
                DuyetHoanTraVatTuListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.clearSearch = function () {
                    if (this.duyetNhapKhoVatTu.SearchString == "" || this.duyetNhapKhoVatTu.SearchString == null) {
                        this.Timkiem();
                        // this.gridChild.searchString = "";
                        // this.gridChild.search();
                    }
                };
                //End fillter checkbox 
                DuyetHoanTraVatTuListComponent.prototype.onKeyNgayNhap = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.changeNgayNhapRange = function (ev) {
                    this.Timkiem();
                };
                DuyetHoanTraVatTuListComponent.prototype.onKeyNgayDuyet = function (event) {
                    if (event.key == "Enter") {
                        this.Timkiem();
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.changeNgayDuyetRange = function (ev) {
                    this.Timkiem();
                };
                DuyetHoanTraVatTuListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('HoanTra/ExportHoanTraVatTu', self.gridCha._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DuyetHoanTraVatTu' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuyetHoanTraVatTuListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuyetHoanTraVatTuListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuyetHoanTraVatTuListComponent.prototype.inYeuCauHoanTraVatTu = function (id) {
                    var yeuCauHoanTraVatTuId = id;
                    // this.dialog.open(InPhieuHoanTraVatTuComponent, {
                    //     disableClose: true,
                    //     width: "1200px",
                    //     data: { yeuCauHoanTraVatTuId },
                    // }).afterClosed().subscribe((result) => { });
                    this.dialog.open(_duoc_pham_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_25__["InPhieuHoanTraCompoment"], {
                        disableClose: true,
                        width: "1200px",
                        data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: yeuCauHoanTraVatTuId, LaDuocPham: false, LaTuTruc: true, DuocDuyet: true },
                    }).afterClosed().subscribe(function (result) {
                    });
                };
                return DuyetHoanTraVatTuListComponent;
            }());
            DuyetHoanTraVatTuListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "ngayNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "ngayDuyetTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vitriTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "vitriTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "TinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCha', { static: false })
            ], DuyetHoanTraVatTuListComponent.prototype, "gridCha", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soChungTuTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "soChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TinhTrangBHYTTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "TinhTrangBHYTTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaNhapTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "giaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaBanTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "giaBanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "ngayYeuCauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hsdTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "hsdTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongHoanTraTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "soLuongHoanTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], DuyetHoanTraVatTuListComponent.prototype, "groupTemplate", void 0);
            DuyetHoanTraVatTuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duyet-hoan-tra-vat-tu-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-hoan-tra-vat-tu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-hoan-tra-vat-tu-list.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.scss")).default]
                })
            ], DuyetHoanTraVatTuListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-routing.module.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-routing.module.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: DuyetHoanTraVatTuRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraVatTuRoutingModule", function () { return DuyetHoanTraVatTuRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _duyet_hoan_tra_vat_tu_list_duyet_hoan_tra_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.ts");
            /* harmony import */ var _duyet_hoan_tra_vat_tu_chi_tiet_duyet_hoan_tra_vat_tu_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.ts");
            var routes = [
                {
                    path: '',
                    component: _duyet_hoan_tra_vat_tu_list_duyet_hoan_tra_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_6__["DuyetHoanTraVatTuListComponent"],
                    data: {
                        title: 'Danh Sách Duyệt Hoàn Trả Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetYeuCauHoanTraVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chi-tiet/:id',
                    component: _duyet_hoan_tra_vat_tu_chi_tiet_duyet_hoan_tra_vat_tu_chi_tiet_component__WEBPACK_IMPORTED_MODULE_7__["DuyetHoanTraVatTuChiTietComponent"],
                    data: {
                        title: 'Duyệt Hoàn Trả Vật Tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetYeuCauHoanTraVatTu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var DuyetHoanTraVatTuRoutingModule = /** @class */ (function () {
                function DuyetHoanTraVatTuRoutingModule() {
                }
                return DuyetHoanTraVatTuRoutingModule;
            }());
            DuyetHoanTraVatTuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuyetHoanTraVatTuRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: DuyetHoanTraVatTuModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraVatTuModule", function () { return DuyetHoanTraVatTuModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duyet_hoan_tra_vat_tu_list_duyet_hoan_tra_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-list/duyet-hoan-tra-vat-tu-list.component.ts");
            /* harmony import */ var _duyet_hoan_tra_vat_tu_chi_tiet_duyet_hoan_tra_vat_tu_chi_tiet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-chi-tiet/duyet-hoan-tra-vat-tu-chi-tiet.component.ts");
            /* harmony import */ var _duyet_hoan_tra_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duyet-hoan-tra-vat-tu-routing.module */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu-routing.module.ts");
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
            /* harmony import */ var _duyet_hoan_tra_vat_tu_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duyet-hoan-tra-vat-tu.service */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _tu_choi_duyet_vat_tu_tu_choi_duyet_vat_tu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.ts");
            /* harmony import */ var _in_phieu_hoan_tra_vat_tu_in_phieu_hoan_tra_vat_tu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.ts");
            /* harmony import */ var _duoc_pham_duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module.ts");
            var DuyetHoanTraVatTuModule = /** @class */ (function () {
                function DuyetHoanTraVatTuModule() {
                }
                return DuyetHoanTraVatTuModule;
            }());
            DuyetHoanTraVatTuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_duyet_hoan_tra_vat_tu_list_duyet_hoan_tra_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_3__["DuyetHoanTraVatTuListComponent"], _duyet_hoan_tra_vat_tu_chi_tiet_duyet_hoan_tra_vat_tu_chi_tiet_component__WEBPACK_IMPORTED_MODULE_4__["DuyetHoanTraVatTuChiTietComponent"], _tu_choi_duyet_vat_tu_tu_choi_duyet_vat_tu_component__WEBPACK_IMPORTED_MODULE_19__["TuChoiDuyetVatTuComponent"], _in_phieu_hoan_tra_vat_tu_in_phieu_hoan_tra_vat_tu_component__WEBPACK_IMPORTED_MODULE_20__["InPhieuHoanTraVatTuComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _duyet_hoan_tra_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_5__["DuyetHoanTraVatTuRoutingModule"],
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
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
                        _duoc_pham_duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_21__["DuyetHoanTraDuocPhamModule"]
                    ],
                    entryComponents: [
                        _tu_choi_duyet_vat_tu_tu_choi_duyet_vat_tu_component__WEBPACK_IMPORTED_MODULE_19__["TuChoiDuyetVatTuComponent"],
                        _in_phieu_hoan_tra_vat_tu_in_phieu_hoan_tra_vat_tu_component__WEBPACK_IMPORTED_MODULE_20__["InPhieuHoanTraVatTuComponent"]
                    ],
                    providers: [
                        _duyet_hoan_tra_vat_tu_service__WEBPACK_IMPORTED_MODULE_17__["DuyetHoanTraVatTuService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__["BaseService"], useClass: _duyet_hoan_tra_vat_tu_service__WEBPACK_IMPORTED_MODULE_17__["DuyetHoanTraVatTuService"] },
                    ]
                })
            ], DuyetHoanTraVatTuModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.service.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/duyet-hoan-tra-vat-tu.service.ts ***!
          \******************************************************************************************************/
        /*! exports provided: DuyetHoanTraVatTuService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraVatTuService", function () { return DuyetHoanTraVatTuService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuyetHoanTraVatTuService = /** @class */ (function (_super) {
                __extends(DuyetHoanTraVatTuService, _super);
                function DuyetHoanTraVatTuService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'HoanTra';
                    return _this;
                }
                return DuyetHoanTraVatTuService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuyetHoanTraVatTuService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuyetHoanTraVatTuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DuyetHoanTraVatTuService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/hoan-tra-vt.model.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/hoan-tra-vt.model.ts ***!
          \******************************************************************************************/
        /*! exports provided: DuyetNhapKho, NhapKhoVatTu, NhapKhoVatTuChiTiet, HoanTraVatTuSearch, rangeDate, ThongTinHoanTraVatTu, TuChoiDuyetHoanTraVatTu, DuyetHoanTraVatTu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetNhapKho", function () { return DuyetNhapKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTu", function () { return NhapKhoVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuChiTiet", function () { return NhapKhoVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoanTraVatTuSearch", function () { return HoanTraVatTuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinHoanTraVatTu", function () { return ThongTinHoanTraVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiDuyetHoanTraVatTu", function () { return TuChoiDuyetHoanTraVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetHoanTraVatTu", function () { return DuyetHoanTraVatTu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DuyetNhapKho = /** @class */ (function () {
                function DuyetNhapKho() {
                }
                return DuyetNhapKho;
            }());
            var NhapKhoVatTu = /** @class */ (function () {
                function NhapKhoVatTu(Id, KhoVatTuId, TenKhoVatTu, SoChungTu, LoaiNhapKho, TenLoaiNhapKho, NguoiGiaoId, TenNguoiGiao, TenNguoiGiaoNgoai, NguoiNhapId, TenNguoiNhap, LoaiNguoiGiao, NhapKhoVatTuChiTiets, NgayNhap, DaXuatKho) {
                    if (Id === void 0) { Id = 0; }
                    if (KhoVatTuId === void 0) { KhoVatTuId = null; }
                    if (TenKhoVatTu === void 0) { TenKhoVatTu = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (LoaiNhapKho === void 0) { LoaiNhapKho = 1; }
                    if (TenLoaiNhapKho === void 0) { TenLoaiNhapKho = null; }
                    if (NguoiGiaoId === void 0) { NguoiGiaoId = null; }
                    if (TenNguoiGiao === void 0) { TenNguoiGiao = null; }
                    if (TenNguoiGiaoNgoai === void 0) { TenNguoiGiaoNgoai = null; }
                    if (NguoiNhapId === void 0) { NguoiNhapId = null; }
                    if (TenNguoiNhap === void 0) { TenNguoiNhap = null; }
                    if (LoaiNguoiGiao === void 0) { LoaiNguoiGiao = 1; }
                    if (NhapKhoVatTuChiTiets === void 0) { NhapKhoVatTuChiTiets = []; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    if (DaXuatKho === void 0) { DaXuatKho = null; }
                    this.Id = Id;
                    this.KhoVatTuId = KhoVatTuId;
                    this.TenKhoVatTu = TenKhoVatTu;
                    this.SoChungTu = SoChungTu;
                    this.LoaiNhapKho = LoaiNhapKho;
                    this.TenLoaiNhapKho = TenLoaiNhapKho;
                    this.NguoiGiaoId = NguoiGiaoId;
                    this.TenNguoiGiao = TenNguoiGiao;
                    this.TenNguoiGiaoNgoai = TenNguoiGiaoNgoai;
                    this.NguoiNhapId = NguoiNhapId;
                    this.TenNguoiNhap = TenNguoiNhap;
                    this.LoaiNguoiGiao = LoaiNguoiGiao;
                    this.NhapKhoVatTuChiTiets = NhapKhoVatTuChiTiets;
                    this.NgayNhap = NgayNhap;
                    this.DaXuatKho = DaXuatKho;
                }
                return NhapKhoVatTu;
            }());
            var NhapKhoVatTuChiTiet = /** @class */ (function () {
                function NhapKhoVatTuChiTiet(Id, IdView, NhapKhoVatTuId, VatTuBenhVienId, TenVatTu, HopDongThauVatTuId, TenHopDongThau, KhoVatTuViTriId, ViTri, DatChatLuong, TenDatChatLuong, HanSuDung, TextHanSuDung, Solo, SoLuongNhap, SoLuongNhapTrongGrid, SoLuongHienTaiVatTuTheoHopDongThauDaLuu, DonGiaNhap, DonGiaBan, TextDonGiaNhap, TextDonGiaBan, TextChietKhau, TextSoLuongNhap, TextVAT, VAT, ChietKhau, MaVach, NgayNhap) {
                    if (Id === void 0) { Id = 0; }
                    if (IdView === void 0) { IdView = 0; }
                    if (NhapKhoVatTuId === void 0) { NhapKhoVatTuId = 0; }
                    if (VatTuBenhVienId === void 0) { VatTuBenhVienId = null; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    if (HopDongThauVatTuId === void 0) { HopDongThauVatTuId = 0; }
                    if (TenHopDongThau === void 0) { TenHopDongThau = null; }
                    if (KhoVatTuViTriId === void 0) { KhoVatTuViTriId = null; }
                    if (ViTri === void 0) { ViTri = null; }
                    if (DatChatLuong === void 0) { DatChatLuong = true; }
                    if (TenDatChatLuong === void 0) { TenDatChatLuong = "Đạt"; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (TextHanSuDung === void 0) { TextHanSuDung = null; }
                    if (Solo === void 0) { Solo = null; }
                    if (SoLuongNhap === void 0) { SoLuongNhap = null; }
                    if (SoLuongNhapTrongGrid === void 0) { SoLuongNhapTrongGrid = 0; }
                    if (SoLuongHienTaiVatTuTheoHopDongThauDaLuu === void 0) { SoLuongHienTaiVatTuTheoHopDongThauDaLuu = 0; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    if (DonGiaBan === void 0) { DonGiaBan = null; }
                    if (TextDonGiaNhap === void 0) { TextDonGiaNhap = null; }
                    if (TextDonGiaBan === void 0) { TextDonGiaBan = null; }
                    if (TextChietKhau === void 0) { TextChietKhau = null; }
                    if (TextSoLuongNhap === void 0) { TextSoLuongNhap = null; }
                    if (TextVAT === void 0) { TextVAT = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (ChietKhau === void 0) { ChietKhau = null; }
                    if (MaVach === void 0) { MaVach = null; }
                    if (NgayNhap === void 0) { NgayNhap = null; }
                    this.Id = Id;
                    this.IdView = IdView;
                    this.NhapKhoVatTuId = NhapKhoVatTuId;
                    this.VatTuBenhVienId = VatTuBenhVienId;
                    this.TenVatTu = TenVatTu;
                    this.HopDongThauVatTuId = HopDongThauVatTuId;
                    this.TenHopDongThau = TenHopDongThau;
                    this.KhoVatTuViTriId = KhoVatTuViTriId;
                    this.ViTri = ViTri;
                    this.DatChatLuong = DatChatLuong;
                    this.TenDatChatLuong = TenDatChatLuong;
                    this.HanSuDung = HanSuDung;
                    this.TextHanSuDung = TextHanSuDung;
                    this.Solo = Solo;
                    this.SoLuongNhap = SoLuongNhap;
                    this.SoLuongNhapTrongGrid = SoLuongNhapTrongGrid;
                    this.SoLuongHienTaiVatTuTheoHopDongThauDaLuu = SoLuongHienTaiVatTuTheoHopDongThauDaLuu;
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
                return NhapKhoVatTuChiTiet;
            }());
            var HoanTraVatTuSearch = /** @class */ (function () {
                function HoanTraVatTuSearch(KhoVatTuId, TenKhoVatTu, DangChoDuyet, DaDuyet, TuChoiDuyet, LoaiNhapKho, TenLoaiNhapKho, SearchString, RangeNhap, RangeDuyet) {
                    if (KhoVatTuId === void 0) { KhoVatTuId = 0; }
                    if (TenKhoVatTu === void 0) { TenKhoVatTu = null; }
                    if (DangChoDuyet === void 0) { DangChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (LoaiNhapKho === void 0) { LoaiNhapKho = 0; }
                    if (TenLoaiNhapKho === void 0) { TenLoaiNhapKho = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (RangeNhap === void 0) { RangeNhap = new rangeDate; }
                    if (RangeDuyet === void 0) { RangeDuyet = new rangeDate; }
                    this.KhoVatTuId = KhoVatTuId;
                    this.TenKhoVatTu = TenKhoVatTu;
                    this.DangChoDuyet = DangChoDuyet;
                    this.DaDuyet = DaDuyet;
                    this.TuChoiDuyet = TuChoiDuyet;
                    this.LoaiNhapKho = LoaiNhapKho;
                    this.TenLoaiNhapKho = TenLoaiNhapKho;
                    this.SearchString = SearchString;
                    this.RangeNhap = RangeNhap;
                    this.RangeDuyet = RangeDuyet;
                }
                return HoanTraVatTuSearch;
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
            var ThongTinHoanTraVatTu = /** @class */ (function () {
                function ThongTinHoanTraVatTu(NguoiNhapId, GhiChu, HoanTraTuKhoId, HoanTraTuKho, HoanTraVeKhoId, HoanTraVeKho, NguoiYeuCauId, TenNguoiYeuCau, NgayYeuCau, TinhTrangDuyet, ClassTrangThai, NguoiDuyetId, NguoiDuyet, NgayDuyet, NguoiTraId, TenNguoiTra, NguoiNhanId, TenNguoiNhan) {
                    if (NguoiNhapId === void 0) { NguoiNhapId = 0; }
                    if (GhiChu === void 0) { GhiChu = ''; }
                    if (HoanTraTuKhoId === void 0) { HoanTraTuKhoId = 0; }
                    if (HoanTraTuKho === void 0) { HoanTraTuKho = null; }
                    if (HoanTraVeKhoId === void 0) { HoanTraVeKhoId = 0; }
                    if (HoanTraVeKho === void 0) { HoanTraVeKho = null; }
                    if (NguoiYeuCauId === void 0) { NguoiYeuCauId = 0; }
                    if (TenNguoiYeuCau === void 0) { TenNguoiYeuCau = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = new Date(); }
                    if (TinhTrangDuyet === void 0) { TinhTrangDuyet = null; }
                    if (ClassTrangThai === void 0) { ClassTrangThai = null; }
                    if (NguoiDuyetId === void 0) { NguoiDuyetId = 0; }
                    if (NguoiDuyet === void 0) { NguoiDuyet = null; }
                    if (NgayDuyet === void 0) { NgayDuyet = new Date(); }
                    if (NguoiTraId === void 0) { NguoiTraId = 0; }
                    if (TenNguoiTra === void 0) { TenNguoiTra = null; }
                    if (NguoiNhanId === void 0) { NguoiNhanId = 0; }
                    if (TenNguoiNhan === void 0) { TenNguoiNhan = null; }
                    this.NguoiNhapId = NguoiNhapId;
                    this.GhiChu = GhiChu;
                    this.HoanTraTuKhoId = HoanTraTuKhoId;
                    this.HoanTraTuKho = HoanTraTuKho;
                    this.HoanTraVeKhoId = HoanTraVeKhoId;
                    this.HoanTraVeKho = HoanTraVeKho;
                    this.NguoiYeuCauId = NguoiYeuCauId;
                    this.TenNguoiYeuCau = TenNguoiYeuCau;
                    this.NgayYeuCau = NgayYeuCau;
                    this.TinhTrangDuyet = TinhTrangDuyet;
                    this.ClassTrangThai = ClassTrangThai;
                    this.NguoiDuyetId = NguoiDuyetId;
                    this.NguoiDuyet = NguoiDuyet;
                    this.NgayDuyet = NgayDuyet;
                    this.NguoiTraId = NguoiTraId;
                    this.TenNguoiTra = TenNguoiTra;
                    this.NguoiNhanId = NguoiNhanId;
                    this.TenNguoiNhan = TenNguoiNhan;
                }
                return ThongTinHoanTraVatTu;
            }());
            // export class ThongTinLyDoHuyHoanTraVatTu {
            //     constructor(
            //         public YeuCauTraVatTuId: number = 0,
            //         public LyDoHuy: string = null
            //     ) { }
            // } 1
            var TuChoiDuyetHoanTraVatTu = /** @class */ (function () {
                function TuChoiDuyetHoanTraVatTu() {
                    this.Id = 0;
                    this.LyDoHuy = null;
                }
                return TuChoiDuyetHoanTraVatTu;
            }());
            var DuyetHoanTraVatTu = /** @class */ (function () {
                function DuyetHoanTraVatTu() {
                    this.Id = 0;
                    this.NguoiTraId = 0;
                    this.NguoiNhanId = 0;
                }
                return DuyetHoanTraVatTu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 100%;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC92YXQtdHUvZHV5ZXQtaG9hbi10cmEtdmF0LXR1L2luLXBoaWV1LWhvYW4tdHJhLXZhdC10dS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcdmF0LXR1XFxkdXlldC1ob2FuLXRyYS12YXQtdHVcXGluLXBoaWV1LWhvYW4tdHJhLXZhdC10dVxcaW4tcGhpZXUtaG9hbi10cmEtdmF0LXR1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L3ZhdC10dS9kdXlldC1ob2FuLXRyYS12YXQtdHUvaW4tcGhpZXUtaG9hbi10cmEtdmF0LXR1L2luLXBoaWV1LWhvYW4tdHJhLXZhdC10dS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L2R1eWV0LWhvYW4tdHJhLXZhdC10dS9pbi1waGlldS1ob2FuLXRyYS12YXQtdHUvaW4tcGhpZXUtaG9hbi10cmEtdmF0LXR1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: InPhieuHoanTraVatTuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InPhieuHoanTraVatTuComponent", function () { return InPhieuHoanTraVatTuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var InPhieuHoanTraVatTuComponent = /** @class */ (function () {
                function InPhieuHoanTraVatTuComponent(data, sanitizer, apiService, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.src = "";
                    this.srcPhieuInHoanTra = "";
                    this.srcPhieuInHoanTraHtml = "";
                    this.printLayout = 'Portrait';
                    this.printSize = 'A4';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                }
                InPhieuHoanTraVatTuComponent.prototype.ngOnInit = function () {
                    var _this = this;
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
                    if (this.data.yeuCauHoanTraVatTuId) {
                        this.apiService.get("HoanTra/GetHtmlPhieuInHoanTraVatTu?yeuCauHoanTraVatTuId=" + this.data.yeuCauHoanTraVatTuId + "&hostingName=" + this.hostingName)
                            .subscribe(function (resHoanTra) {
                            _this.srcPhieuInHoanTraHtml = resHoanTra;
                            _this.srcPhieuInHoanTra = "data:text/html;charset=utf-8," + encodeURIComponent(resHoanTra);
                            loading.close();
                        });
                    }
                };
                InPhieuHoanTraVatTuComponent.prototype.getSharedPrintForm = function (id) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        resolve(_this.srcPhieuInHoanTraHtml);
                        // this.apiService.get<any>("HoanTra/GetHtmlPhieuInHoanTraVatTu?yeuCauHoanTraVatTuId=" + this.data.yeuCauHoanTraVatTuId + "&hostingName=" + this.hostingName)
                        // .subscribe((inPhieu) => {
                        //     resolve(inPhieu);
                        // });
                    });
                };
                InPhieuHoanTraVatTuComponent.prototype.replaceAll = function (str, find, replace) {
                    return str.replace(new RegExp(find, "g"), replace);
                };
                InPhieuHoanTraVatTuComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return InPhieuHoanTraVatTuComponent;
            }());
            InPhieuHoanTraVatTuComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InPhieuHoanTraVatTuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-in-phieu-hoan-tra-vat-tu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-phieu-hoan-tra-vat-tu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-phieu-hoan-tra-vat-tu.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu/in-phieu-hoan-tra-vat-tu.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InPhieuHoanTraVatTuComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvdmF0LXR1L2R1eWV0LWhvYW4tdHJhLXZhdC10dS90dS1jaG9pLWR1eWV0LXZhdC10dS90dS1jaG9pLWR1eWV0LXZhdC10dS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: TuChoiDuyetVatTuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiDuyetVatTuComponent", function () { return TuChoiDuyetVatTuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var TuChoiDuyetVatTuComponent = /** @class */ (function () {
                // thongTinLyDoHuyHoanTraVatTu = new ThongTinLyDoHuyHoanTraVatTu();
                function TuChoiDuyetVatTuComponent(data, dialog, cdRef, dialogRef) {
                    this.data = data;
                    this.dialog = dialog;
                    this.cdRef = cdRef;
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                }
                TuChoiDuyetVatTuComponent.prototype.ngOnInit = function () {
                    // this.thongTinLyDoHuyHoanTraVatTu.LyDoHuy = "";
                    this.lyDoHuy = "";
                };
                TuChoiDuyetVatTuComponent.prototype.Huy = function () {
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
                TuChoiDuyetVatTuComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return TuChoiDuyetVatTuComponent;
            }());
            TuChoiDuyetVatTuComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
            ]; };
            TuChoiDuyetVatTuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tu-choi-duyet-vat-tu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tu-choi-duyet-vat-tu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tu-choi-duyet-vat-tu.component.scss */ "./src/app/modules/main/nhap-xuat/vat-tu/duyet-hoan-tra-vat-tu/tu-choi-duyet-vat-tu/tu-choi-duyet-vat-tu.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], TuChoiDuyetVatTuComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=nhap-xuat-vat-tu-duyet-hoan-tra-vat-tu-duyet-hoan-tra-vat-tu-module-es2015.js.map
//# sourceMappingURL=nhap-xuat-vat-tu-duyet-hoan-tra-vat-tu-duyet-hoan-tra-vat-tu-module-es5.js.map
//# sourceMappingURL=nhap-xuat-vat-tu-duyet-hoan-tra-vat-tu-duyet-hoan-tra-vat-tu-module-es5.js.map