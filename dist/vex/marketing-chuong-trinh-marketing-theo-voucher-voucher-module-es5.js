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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-chuong-trinh-marketing-theo-voucher-voucher-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>CHI TIẾT NGƯỜI BỆNH ĐÃ SỬ DỤNG</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"flex-direction: column;display: flex;\">\n    <div class=\"row ml-1 mb-2\">\n        <fieldset fxFlex=\"100%\">\n            <div fxFlex=\"100%\">\n                <ul class=\"inline\">\n                    <li>Mã: <strong>{{voucher.Ma}}</strong></li>\n                    <li>Tên voucher: <strong>{{voucher.Ten}}</strong></li>\n                    <!-- <li>Gói DV: <strong>{{benhNhanHienTai.MaTN}}</strong></li> -->\n                    <li *ngIf=\"voucher.LoaiChietKhau\">Loại voucher: <strong>{{voucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien ? 'Số tiền' : 'Tỉ lệ'}}</strong></li>\n                    <li *ngIf=\"voucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\">Số tiền: <strong>{{voucher.SoTienChietKhau}}</strong></li>\n                    <li *ngIf=\"voucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\">Số tiền: <strong>{{voucher.TiLeChietKhau}}</strong></li>\n                    <li>Số lượng phát hành: <strong>{{soLuongPhatHanh ? soLuongPhatHanh.SoLuongDisplay : voucher.SoLuongPhatHanh}}</strong></li>\n                    <li>Số lượng NB dùng: <strong>{{tongSoBenhNhanSuDung}}</strong></li>\n                    <li *ngIf=\"!voucher.DenNgayDisplay\">Hạn dùng: <strong>{{voucher.TuNgayDisplay}} - </strong></li>\n                    <li *ngIf=\"voucher.DenNgayDisplay\" style=\"display: inline-block; width: 250px;\">Hạn dùng: <strong>{{voucher.TuNgayDisplay}} - {{voucher.DenNgayDisplay}}</strong></li>\n                </ul>\n            </div>\n        </fieldset>\n    </div>\n\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"p-2 mb-6 clear-margin-bottom\">\n        <app-grid #gridChiTietBenhNhanDaSuDung [height]=\"320\"\n            [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useHeaderDefault]=\"true\"\n            [useAddDeault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [additionalSearchString]=\"idVoucher\"\n            [urlGetData]=\"urlGetChiTietBenhNhanDaSuDungForGrid\"\n            [urlGetTotalPage]=\"urlGetPagesChiTietBenhNhanDaSuDungForGrid\">\n        </app-grid>\n    </div>\n</mat-dialog-content>\n\n<ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n    <strong>{{rowIndex + 1}}</strong>\n</ng-template> \n\n<ng-template #ngayDungTemplate let-dataItem>\n    {{dataItem.NgayDungDisplay}}\n</ng-template> ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n    { Title: 'Marketing', Path: '' },\n    { Title: 'Chương Trình Marketing', Path: '' },\n    { Title: 'Theo Voucher', Path: '/marketing/ct-marketing/voucher', queryParams: {holdQuery : true}, Active: true }]\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Voucher</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-voucher-shared></app-voucher-shared>\n\n                <div>\n                    <div kendoTooltip class=\"sticky-button-action py-3 text-right\">\n                        <!-- <button type=\"button\" mat-button mat-raised-button color=\"primary\" class=\"float-left\" (click)=\"in()\">In</button> -->\n                        <button type=\"button\" mat-button color=\"primary\" (click)=\"huy()\">Hủy</button>\n                        <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button (click)=\"themVoucher()\">Lưu</button>\n                    </div>\n                </div>\n                <!-- <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"pt-4\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div> -->\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.html": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.html ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>VOUCHER</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"flex-direction: column;display: flex;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"p-2 mb-6 clear-margin-bottom\">\n        \n        <app-textboxnumeric fxFlex=\"50%\" [required]=\"true\" id=\"so-luong\" label=\"Số lượng\"\n            [min]=\"1\" [max]=\"soLuongPhatHanh\"\n            [(model)]=\"soLuongIn\" (modelChange)=\"soLuongChange($event)\"\n            [validationerror]=\"'SoLuong' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n        <app-textboxnumeric fxFlex=\"50%\" [required]=\"true\" id=\"ma-so\" label=\"Mã số từ: {{maVoucher}}-\"\n            [min]=\"1\" [max]=\"soLuongPhatHanh\" [format]=\"format\"\n            [(model)]=\"maSoIn\" (modelChange)=\"maSoChange($event)\"\n            [validationerror]=\"'MaSo' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <div class=\"container-iframe\" fxFlex=\"100%\">\n            <iframe width=\"100%\" [src]=\"iframeSrc| safe\" allowTransparency=\"true\" background=\"transparent\"></iframe>\n        </div>\n        <!-- <div fxFlex=\"100%\">\n            <div fxLayout=\"row wrap\">\n                <div fxFlex=\"20%\" fxFlex.sm=\"100%\" style=\"text-align: center;\">\n                    <img style=\"display:block; margin: 0 auto;\" class=\"select-none flex-none\" src=\"assets/img/logo.png\">\n                </div>\n\n                <div fxFlex=\"80%\" fxFlex.sm=\"100%\" style=\"text-align: center;\">\n                    <h2>{{tenVoucher}}</h2>\n                    <img *ngIf=\"urlBarcode\" style=\"display:block; margin: 0 auto; height: 70%;\" class=\"select-none flex-none\" src=\"data:image/png;base64,{{urlBarcode}}\" alt=\"barcode\">\n                </div>\n            </div>\n        </div> -->\n\n        <div style=\"flex-direction: row;justify-content: flex-end;align-items: flex-end;display: flex;margin: 0;\" fxFlex=\"100%\" class=\"mt-2\">\n            <!-- <button type=\"button\" style=\"background: #005dab; color: white;\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"in()\">In</button> -->\n            <app-print-form textPrint=\"In\" type=\"PDF\" typeSize=\"{{printSize}}\"\n                [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\" [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</mat-dialog-content>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    { Title: 'Marketing', Path: '' },\n                    { Title: 'Chương Trình Marketing', Path: '' },\n                    { Title: 'Theo Voucher', Path: '/marketing/ct-marketing/voucher' , Active: true }]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/marketing/ct-marketing/voucher\"\n                [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" [showStt]=\"true\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [additionalSearchString]=\"firstSearchString\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content> \n</vex-page-layout>\n\n<!-- <ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n            fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"voucherSearch.SearchString\"\n                (keyup)=\"onKey($event)\" (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n\n            <app-daterangepicker id=\"ThoiGianApDung\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                [(model)]=\"voucherSearch.RangeNgayApDung\" \n                label=\"Từ ngày - đến ngày\" (modelChange)=\"timKiem()\">\n            </app-daterangepicker>\n        </div>\n\n        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n        </button>\n\n        <span fxFlex></span>\n        \n        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n            kendoTooltip title=\"Lọc cột\" type=\"button\">\n            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n        </button>\n\n        <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\"\n            type=\"button\">\n            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n        </button>\n\n        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <div *ngFor=\"let column of filterColumns\">\n                <button\n                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                        {{ column.Title }}\n                    </mat-checkbox>\n                </button>\n            </div>\n        </mat-menu>\n\n        <button (click)=\"add()\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n        </button>\n    </div>\n</ng-template> -->\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar pl-0 h-15 border-b sticky left-0 px-6\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                    name=\"searchString\" [(ngModel)]=\"voucherSearch.SearchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n            </div>\n            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n\n        <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n            [(model)]=\"voucherSearch.RangeNgayApDung\" \n            label=\"Từ ngày - đến ngày\" (modelChange)=\"timKiem()\">\n        </app-daterangepicker>\n\n        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n        </button>\n\n        <span fxFlex></span>\n\n        <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-3\" fxFlex=\"none\" mat-icon-button\n            kendoTooltip title=\"Lọc cột\" type=\"button\">\n            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n        </button>\n\n        <button (click)=\"exportExcel()\" class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\"\n            type=\"button\">\n            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n        </button>\n\n        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <div *ngFor=\"let column of filterColumns\">\n                <button\n                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                        {{ column.Title }}\n                    </mat-checkbox>\n                </button>\n            </div>\n        </mat-menu>\n\n        <button (click)=\"add()\" class=\"ml-3\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #soLuongPhatHanhTemplate let-dataItem>\n    {{dataItem.SoLuongPhatHanhDisplay}}\n</ng-template>\n\n<ng-template #tuNgayTemplate let-dataItem>\n    {{dataItem.TuNgayDisplay}}\n</ng-template>\n\n<ng-template #denNgayTemplate let-dataItem>\n    {{dataItem.DenNgayDisplay}}\n</ng-template>\n\n<ng-template #groupTemplate let-dataItem >\n    <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n        mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template matMenuContent>\n            <button (click)=\"edit(dataItem)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                <span>Sửa</span>\n            </button>\n            <button (click)=\"delete(dataItem)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                <span>Xoá</span>\n            </button>\n            <button (click)=\"chiTiet(dataItem)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icDetail\"></mat-icon>\n                <span>Chi tiết sử dụng</span>\n            </button>\n        </ng-template>\n    </mat-menu>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox id=\"Ma\" fxFlex=\"10%\" fxFlex.sm=\"100%\" [required]=\"true\" [(model)]=\"voucher.Ma\" label=\"Mã\"\n        maxlength=\"5\" [validationerror]=\"'Ma' | validationerror: validationErrors\"\n        (modelChange)=\"maVoucherChange($event)\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\">\n    </app-textbox>\n\n    <app-textbox id=\"Ten\" fxFlex=\"40%\" fxFlex.sm=\"100%\" [required]=\"true\" [(model)]=\"voucher.Ten\" label=\"Tên voucher\"\n        maxlength=\"250\" [validationerror]=\"'Ten' | validationerror: validationErrors\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\">\n    </app-textbox>\n\n    <app-textboxnumeric fxFlex=\"10%\" fxFlex.sm=\"100%\" label=\"SL phát hành\" required=\"true\" [min]=\"0\" [max]=\"9999999\" id=\"SoLuongPhatHanh\"\n        [(model)]=\"voucher.SoLuongPhatHanh\"\n        [validationerror]=\"'SoLuongPhatHanh' | validationerror: validationErrors\"\n        (modelChange)=\"soLuongPhatHanhChange($event)\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\"\n        [isFormatCurrenly]=\"true\">\n    </app-textboxnumeric>\n\n    <app-textbox id=\"MaSoTu\" fxFlex=\"10%\" fxFlex.sm=\"100%\" [disabled]=\"true\" label=\"Mã số từ\" \n        [(model)]=\"voucher.MaSoTu\"\n        [disabled]=\"true\" [validationerror]=\"'MaSoTu' | validationerror: validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"MaSoDen\" fxFlex=\"10%\" fxFlex.sm=\"100%\" [disabled]=\"true\" label=\"Mã số đến\"\n        [(model)]=\"voucher.MaSoDen\"\n        [disabled]=\"true\"  [validationerror]=\"'MaSoDen' | validationerror: validationErrors\">\n    </app-textbox>\n\n    <app-datepicker id=\"TuNgay\" fxFlex=\"10%\" fxFlex.sm=\"100%\" label=\"Ngày bắt đầu\"\n        [(model)]=\"voucher.TuNgay\" [required]=\"true\"\n        [validationerror]=\"'TuNgay' | validationerror:validationErrors\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\">\n    </app-datepicker>\n\n    <app-datepicker id=\"DenNgay\" fxFlex=\"10%\" fxFlex.sm=\"100%\" label=\"Ngày kết thúc\"\n        [(model)]=\"voucher.DenNgay\"\n        [validationerror]=\"'DenNgay' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <h3 fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"sub-title mr-4\">DỊCH VỤ</h3>\n\n    <app-radio id=\"IsDisabled\" fxFlex=\"30%\" fxFlex.sm=\"30%\" name=\"isDisabled\" label=\"Sử dụng\"\n        [items]=\"radioDichVuItems\"\n        [(model)]=\"voucher.LoaiDichVuVoucherMarketing\"\n        [validationerror]=\"'HieuLuc' | validationerror: validationErrors\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\"\n        (modelChange)=\"loaiDichVuVoucherMarketingChange($event)\">\n    </app-radio>\n\n    <!-- Dịch vụ -->\n    <ng-container *ngIf=\"voucher.LoaiDichVuVoucherMarketing == loaiDichVuVoucherMarketing.DichVu\">\n        <app-combobox #dichVu popupSettings=\"null\" id=\"TenDichVu\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Tên DV\" class=\"item-no-padding\" url=\"Voucher/GetListDichVuChoVoucher\"\n            [required]=\"true\" (selectionChange)=\"tenDichVuChange($event)\"\n            [(model)]=\"dichVuVoucher.DichVuId\" [modelText]=\"dichVuVoucher.DichVuDisplay\"\n            [template]=\"dichVuTemplate\" [templateHeader]=\"dichVuTemplateHeader\"\n            [validationerror]=\"'DichVuId' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\" [popupSettings]=\"{width: 500,popupClass:'item-no-padding'}\"\n            (keyup)=\"keyUpDichVu($event)\" (openCombobox)=\"openComboboxDichVu($event)\"  (modelChange)=\"loaiGiaChange($event)\">\n            <ng-template #dichVuTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên dịch vụ</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #dichVuTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.DisplayName}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <app-dropdownlist popupSettings=\"null\" id=\"LoaiGia\" fxFlex=\"10%\" fxFlex.sm=\"100%\" label=\"Loại giá\" class=\"item-no-padding\"\n            [required]=\"true\" [url]=\"'Voucher/GetListTatCaLoaiGiaChoDichVu?loaiDichVu=' + (this.dichVuVoucher.LoaiDichVuBenhVien ? this.dichVuVoucher.LoaiDichVuBenhVien : loaiDichVuBenhVien.KyThuat)\" [(model)]=\"dichVuVoucher.LoaiGiaId\" (modelChange)=\"loaiGiaChange($event)\"\n            [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n            [validationerror]=\"'LoaiGiaId' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            (keyup)=\"keyUpDichVu($event)\">\n        </app-dropdownlist>\n\n        <!-- <app-combobox popupSettings=\"null\" id=\"LoaiGia\" fxFlex=\"10%\" fxFlex.sm=\"100%\" label=\"Loại giá\" class=\"item-no-padding\"\n            [required]=\"true\" [data]=\"loaiGia\" [(model)]=\"dichVuVoucher.LoaiGiaId\" (modelChange)=\"loaiGiaChange($event)\"\n            [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n            [validationerror]=\"'LoaiGiaId' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            (keyup)=\"keyUpDichVu($event)\">\n        </app-combobox> -->\n\n        <app-textboxnumeric id=\"DonGia\" fxFlex=\"10%\" fxFlex.sm=\"100%\" min=\"0\"\n            [(model)]=\"dichVuVoucher.DonGia\" label=\"Đơn giá\" disabled=\"true\"\n            [validationerror]=\"'DonGia' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <div fxFlex=\"20%\" fxFlex.sm=\"100%\" class=\"radio-numeric\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"ChietKhau\" name=\"ChietKhau\"\n                    [items]=\"radioChietKhauItems\" [(model)]=\"dichVuVoucher.LoaiChietKhau\" label=\" \"\n                    (modelChange)=\"loaiChietKhauChange($event)\"\n                    [validationerror]=\"'ChietKhau' | validationerror:validationErrors\" class=\"no-label\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\">\n                </app-radio>        \n                <app-textboxnumeric id=\"ChietKhauSoTien\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dichVuVoucher.SoTienChietKhau\"\n                    label=\" \" [validationerror]=\"'SoTienChietKhau' | validationerror:validationErrors\" class=\"no-label\"\n                    min=\"0\" step=\"1000\" max=\"{{dichVuVoucher.DonGia && dichVuVoucher.DonGia > 0 ? dichVuVoucher.DonGia : 0}}\" *ngIf=\"dichVuVoucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\"\n                    (modelChange)=\"chietKhauChange($event)\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    (keyup)=\"keyUpDichVu($event)\"\n                    [isFormatCurrenly]=\"true\">\n                </app-textboxnumeric>\n                <app-textboxnumeric id=\"ChietKhauPhamTram\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dichVuVoucher.TiLeChietKhau\"\n                    label=\" \" [validationerror]=\"'TiLeChietKhau' | validationerror:validationErrors\" class=\"no-label\" \n                    min=\"0\" max=\"{{dichVuVoucher.DonGia && dichVuVoucher.DonGia > 0 ? 100 : 0}}\" step=\"1\" *ngIf=\"dichVuVoucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\"\n                    (modelChange)=\"chietKhauChange($event)\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    (keyup)=\"keyUpDichVu($event)\"\n                    [isFormatCurrenly]=\"true\">\n                </app-textboxnumeric>\n            </div>\n        </div>\n\n        <app-textboxnumeric id=\"DonGiaSauChietKhau\" fxFlex=\"10%\" fxFlex.sm=\"100%\" min=\"0\"\n            [(model)]=\"dichVuVoucher.DonGiaSauChietKhau\" label=\"Đơn giá sau CK\" disabled=\"true\"\n            [validationerror]=\"'DonGiaSauChietKhau' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textbox id=\"GhiChu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ghi chú\" maxlength=\"1000\" minHeight=\"25\"\n            [(model)]=\"dichVuVoucher.GhiChu\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            (keyup)=\"keyUpDichVu($event)\">\n        </app-textbox>\n\n        <div fxFlex=\"100%\">\n            <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter> -->\n            <div kendoTooltip class=\"sticky-button-action py-3 text-right\">\n                <button type=\"button\" mat-button color=\"primary\" (click)=\"huy()\" [disabled]=\"tongSoBenhNhanSuDung > 0\">Hủy</button>\n                <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button title=\"Phím tắt: Enter\" (click)=\"themDichVuChoVoucher()\" [disabled]=\"tongSoBenhNhanSuDung > 0\">Thêm</button>\n            </div>\n        </div>\n    </ng-container>\n\n    <!-- Nhóm dịch vụ -->\n    <ng-container *ngIf=\"voucher.LoaiDichVuVoucherMarketing == loaiDichVuVoucherMarketing.NhomDichVu\">\n        <app-combobox-tree popupSettings=\"null\" fxFlex=\"20%\" label=\"Nhóm DV\" id=\"NhomDichVu\" required=\"true\"\n            url=\"Voucher/GetListNhomDichVuChoVoucher\" hierarchyKeyToSend=\"NhomDichVuBenhVienId\"\n            [(model)]=\"dichVuVoucher.NhomDichVuId\" [modelText]=\"dichVuVoucher.NhomDichVuDisplay\"\n            (selectionChange)=\"nhomDichVuChange($event)\"\n            [validationerror]=\"'NhomDichVuId' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\" [popupSettings]=\"{width: 500}\"\n            (keyup)=\"keyUpNhomDichVu($event)\">\n        </app-combobox-tree>\n\n        <div fxFlex=\"20%\" fxFlex.sm=\"100%\" class=\"radio-numeric\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"ChietKhauNhomDichVu\" name=\"ChietKhauNhomDichVu\"\n                    [items]=\"radioChietKhauItems\" [(model)]=\"dichVuVoucher.LoaiChietKhau\" label=\" \"\n                    [validationerror]=\"'ChietKhauNhomDichVu' | validationerror:validationErrors\" class=\"no-label\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    (modelChange)=\"loaiChietKhauChange($event)\">\n                </app-radio>        \n                <app-textboxnumeric id=\"ChietKhauSoTienNhomDichVu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dichVuVoucher.SoTienChietKhau\"\n                    label=\" \" [validationerror]=\"'SoTienChietKhauNhomDichVu' | validationerror:validationErrors\" class=\"no-label\"\n                    min=\"0\" step=\"1000\" *ngIf=\"dichVuVoucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    (keyup)=\"keyUpNhomDichVu($event)\"\n                    [isFormatCurrenly]=\"true\">\n                </app-textboxnumeric>\n                <app-textboxnumeric id=\"ChietKhauPhamTramNhomDichVu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dichVuVoucher.TiLeChietKhau\"\n                    label=\" \" [validationerror]=\"'TiLeChietKhauNhomDichVu' | validationerror:validationErrors\" class=\"no-label\" \n                    min=\"0\" max=\"100\" step=\"1\" *ngIf=\"dichVuVoucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    (keyup)=\"keyUpNhomDichVu($event)\"\n                    [isFormatCurrenly]=\"true\">\n                </app-textboxnumeric>\n            </div>\n        </div>\n\n        <app-textbox id=\"GhiChuNhomDichVu\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Ghi chú\" maxlength=\"1000\" minHeight=\"25\"\n            [(model)]=\"dichVuVoucher.GhiChu\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            (keyup)=\"keyUpNhomDichVu($event)\">\n        </app-textbox>\n\n        <div fxFlex=\"100%\">\n            <div kendoTooltip class=\"sticky-button-action py-3 text-right\">\n                <button type=\"button\" mat-button color=\"primary\" (click)=\"huy()\" [disabled]=\"tongSoBenhNhanSuDung > 0\">Hủy</button>\n                <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button title=\"Phím tắt: Enter\" (click)=\"themNhomDichVuChoVoucher()\" [disabled]=\"tongSoBenhNhanSuDung > 0\">Thêm</button>\n            </div>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"voucher.LoaiDichVuVoucherMarketing != loaiDichVuVoucherMarketing.TatCaDichVu\">\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Dịch vụ</h3>\n        <app-grid #gridDanhSachDichVu fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [HideHeader]=\"false\" [documentType]=\"documentType\"\n            [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [urlGetData]=\"urlGetListDichVuForGrid\" [urlGetTotalPage]=\"urlGetPagesListDichVuForGrid\"\n            [pageable]=\"false\" [showStt]=\"true\"\n            (extOnDataBound)=\"onDataBoundGridDichVuDonLe($event)\">\n        </app-grid>\n\n        <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Nhóm dịch vụ</h3>\n        <app-grid #gridDanhSachNhomDichVu fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridNhomDichVuColumns\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [HideHeader]=\"false\" [documentType]=\"documentType\"\n            [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [urlGetData]=\"urlGetListNhomDichVuForGrid\" [urlGetTotalPage]=\"urlGetPagesListNhomDichVuForGrid\"\n            [pageable]=\"false\" [showStt]=\"true\"\n            (extOnDataBound)=\"onDataBoundGridNhomDichVu($event)\">\n        </app-grid>\n    </ng-container>\n\n    <!-- Tất cả dịch vụ -->\n    <ng-container *ngIf=\"voucher.LoaiDichVuVoucherMarketing == loaiDichVuVoucherMarketing.TatCaDichVu\">\n        <div fxFlex=\"20%\" fxFlex.sm=\"100%\" class=\"radio-numeric\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" id=\"ChietKhauTatCaDichVu\" name=\"ChietKhauTatCaDichVu\"\n                    [items]=\"radioChietKhauItems\" [(model)]=\"voucher.LoaiChietKhau\" label=\" \"\n                    [validationerror]=\"'ChietKhauTatCaDichVu' | validationerror:validationErrors\" class=\"no-label\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\">\n                </app-radio>        \n                <app-textboxnumeric id=\"ChietKhauSoTienTatCaDichVu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"voucher.SoTienChietKhau\"\n                    label=\" \" [validationerror]=\"'SoTienChietKhauTatCaDichVu' | validationerror:validationErrors\" class=\"no-label\"\n                    min=\"0\" step=\"1000\" *ngIf=\"voucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    [isFormatCurrenly]=\"true\">\n                </app-textboxnumeric>\n                <app-textboxnumeric id=\"ChietKhauPhamTramTatCaDichVu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"voucher.TiLeChietKhau\"\n                    label=\" \" [validationerror]=\"'TiLeChietKhauTatCaDichVu' | validationerror:validationErrors\" class=\"no-label\" \n                    min=\"0\" max=\"100\" step=\"1\" *ngIf=\"voucher.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\"\n                    [disabled]=\"tongSoBenhNhanSuDung > 0\"\n                    [isFormatCurrenly]=\"true\">\n                </app-textboxnumeric>\n            </div>\n        </div>\n\n        <app-textbox id=\"GhiChuTatCaDichVu\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Ghi chú\" maxlength=\"1000\"\n            [(model)]=\"voucher.GhiChu\" minHeight=\"25\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\">\n        </app-textbox>\n    </ng-container>\n</div>\n\n<ng-template #nhomDichVuTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #loaiGiaTemplate let-dataItem>\n    <app-combobox popupSettings=\"null\" label=\" \"  class=\"no-label p-0\"\n        [required]=\"true\" [url]=\"'Voucher/GetListTatCaLoaiGiaChoDichVu?loaiDichVu=' + dataItem.LoaiDichVuBenhVien\"\n        [(model)]=\"dataItem.LoaiGiaId\"  [modelText]=\"dataItem.LoaiGiaDisplay\"\n        [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n        (modelChange)=\"loaiGiaDichVuChange($event, dataItem)\"\n        [validationerror]=\"'dataItem[' + voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].LoaiGia' | validationerror:validationErrors\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\">\n    </app-combobox>\n</ng-template>\n\n<ng-template #donGiaTemplate let-dataItem>\n    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #chietKhauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-radio fxFlex=\"50%\" fxFlex.sm=\"100%\" name=\"ChietKhauChiTiet\"\n            [items]=\"radioChietKhauChiTietItems\" [(model)]=\"dataItem.LoaiChietKhau\" label=\" \"  class=\"no-label p-0\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            (modelChange)=\"loaiChietKhauChiTietDichVuChange($event, dataItem)\">\n        </app-radio>   \n        <app-textboxnumeric fxFlex=\"50%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dataItem.SoTienChietKhau\"\n            id=\"{{rowIndex + 1}}SoTienChietKhau\"\n            *ngIf=\"dataItem.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\" label=\" \" class=\"no-label p-0 text-height-42\"\n            min=\"0\" step=\"1000\" max=\"{{dataItem.DonGia && dataItem.DonGia > 0 ? dataItem.DonGia : 999999999999}}\"\n            (modelChange)=\"chietKhauDichVuChange($event, dataItem)\"\n            [validationerror]=\"'dataItem[' + voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].SoTienChietKhau' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            [isFormatCurrenly]=\"true\">\n        </app-textboxnumeric>\n        <app-textboxnumeric fxFlex=\"50%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dataItem.TiLeChietKhau\" label=\" \" class=\"no-label p-0 text-height-42\"\n            id=\"{{rowIndex + 1}}TiLeChietKhau\"\n            min=\"0\" max=\"{{dataItem.DonGia && dataItem.DonGia > 0 ? 100 : 0}}\" step=\"1\" *ngIf=\"dataItem.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\"\n            (modelChange)=\"chietKhauDichVuChange($event, dataItem)\"\n            [validationerror]=\"'dataItem[' + voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].TiLeChietKhau' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            [isFormatCurrenly]=\"true\">\n        </app-textboxnumeric>\n    </div>\n</ng-template>\n\n<ng-template #chietKhauNhomDichVuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-radio fxFlex=\"50%\" fxFlex.sm=\"100%\" name=\"ChietKhauChiTiet\"\n            [items]=\"radioChietKhauChiTietItems\" [(model)]=\"dataItem.LoaiChietKhau\" label=\" \" class=\"no-label p-0\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            (modelChange)=\"loaiChietKhauChiTietNhomDichVuChange($event, dataItem)\">\n        </app-radio>     \n        <app-textboxnumeric fxFlex=\"50%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dataItem.SoTienChietKhau\"\n            id=\"{{rowIndex + 1}}SoTienChietKhauNhomDichVu\"\n            *ngIf=\"dataItem.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\" label=\" \" class=\"no-label p-0 text-height-42\"\n            min=\"0\" step=\"1000\" max=\"{{dataItem.DonGia && dataItem.DonGia > 0 ? dataItem.DonGia : 999999999999}}\"\n            [validationerror]=\"'dataItem[' + voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(dataItem) + '].SoTienChietKhauNhomDichVu' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            [isFormatCurrenly]=\"true\">\n        </app-textboxnumeric>\n        <app-textboxnumeric fxFlex=\"50%\" fxFlex.sm=\"100%\" maxlength=\"250\" [(model)]=\"dataItem.TiLeChietKhau\" label=\" \" class=\"no-label p-0 text-height-42\"\n            id=\"{{rowIndex + 1}}TiLeChietKhauNhomDichVu\"\n            min=\"0\" max=\"100\" step=\"1\" *ngIf=\"dataItem.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\"\n            [validationerror]=\"'dataItem[' + voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(dataItem) + '].TiLeChietKhauNhomDichVu' | validationerror:validationErrors\"\n            [disabled]=\"tongSoBenhNhanSuDung > 0\"\n            [isFormatCurrenly]=\"true\">\n        </app-textboxnumeric>\n    </div>\n</ng-template>\n\n<ng-template #donGiaSauChietKhauTemplate let-dataItem>\n    <ng-container *ngIf=\"dataItem.LoaiChietKhau == loaiChietKhau.ChietKhauTheoSoTien\">\n        {{(dataItem.DonGia > 0 ? dataItem.DonGia - dataItem.SoTienChietKhau : 0) | number:'0.2-2':'vi-VN'}}\n    </ng-container>\n\n    <ng-container *ngIf=\"dataItem.LoaiChietKhau == loaiChietKhau.ChietKhauTheoTiLe\">\n        {{(dataItem.DonGia > 0 ? (dataItem.DonGia * (100 - dataItem.TiLeChietKhau))/100 : 0) | number:'0.2-2':'vi-VN'}}\n    </ng-container>\n</ng-template>\n\n<ng-template #ghiChuTemplate let-dataItem>\n    <app-textbox id=\"GhiChuDichVu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\" \" maxlength=\"1000\" minHeight=\"25\" class=\"no-label p-0\"\n        [(model)]=\"dataItem.GhiChu\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\">\n    </app-textbox>\n</ng-template>\n\n<ng-template #ghiChuNhomDichVuTemplate let-dataItem>\n    <app-textbox id=\"GhiChuNhomDichVu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\" \" maxlength=\"1000\" minHeight=\"25\" class=\"no-label p-0\"\n        [(model)]=\"dataItem.GhiChu\"\n        [disabled]=\"tongSoBenhNhanSuDung > 0\">\n    </app-textbox>\n</ng-template>\n\n<ng-template #actionTemplate let-dataItem>\n    <div class=\"text-center\" kendoTooltip>\n        <button *ngIf=\"dataItem.DichVuId && dataItem.DichVuId > 0\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoaDichVuChoVoucher(dataItem)\" [disabled]=\"tongSoBenhNhanSuDung > 0\">\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n        </button>\n        <button *ngIf=\"dataItem.NhomDichVuId && dataItem.NhomDichVuId > 0\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoaNhomDichVuChoVoucher(dataItem)\" [disabled]=\"tongSoBenhNhanSuDung > 0\">\n            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n        </button>\n    </div>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.html": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.html ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n    { Title: 'Marketing', Path: '' },\n    { Title: 'Chương Trình Marketing', Path: '' },\n    { Title: 'Theo Voucher', Path: '/marketing/ct-marketing/voucher' , queryParams: {holdQuery : true}, Active: true }]\">\n</app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Voucher</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-voucher-shared></app-voucher-shared>\n                \n                <div>\n                    <!-- <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter> -->\n                    <div kendoTooltip class=\"sticky-button-action py-3 text-right\">\n                        <button type=\"button\" mat-button mat-raised-button color=\"primary\" class=\"float-left\" (click)=\"in()\">In</button>\n                        <button type=\"button\" mat-button color=\"primary\" (click)=\"huy()\">Hủy</button>\n                        <button type=\"button\" class=\"mr-2\" color=\"primary\" mat-raised-button (click)=\"luu()\">Lưu</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci1jaGktdGlldC1wb3B1cC92b3VjaGVyLWNoaS10aWV0LXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: VoucherChiTietPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherChiTietPopupComponent", function () { return VoucherChiTietPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _voucher_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../voucher.model */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            var VoucherChiTietPopupComponent = /** @class */ (function () {
                function VoucherChiTietPopupComponent(data, dialog, dialogRef, apiService, broadcastService, notificationService, authService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.broadcastService = broadcastService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].VoucherMarketing;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"];
                    this.loaiChietKhau = _voucher_model__WEBPACK_IMPORTED_MODULE_10__["LoaiChietKhau"];
                    this.tongSoBenhNhanSuDung = 0;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.gridColumns = [];
                    this.urlGetChiTietBenhNhanDaSuDungForGrid = 'Voucher/GetListChiTietBenhNhanDaSuDungForGridAsync';
                    this.urlGetPagesChiTietBenhNhanDaSuDungForGrid = 'Voucher/GetPagesListChiTietBenhNhanDaSuDungForGridAsync';
                }
                VoucherChiTietPopupComponent.prototype.ngOnInit = function () {
                    this.idVoucher = this.data.Id;
                    this.voucher = this.data;
                    this.getSoLuongPhatHanh();
                    this.getTongSoBenhNhanSuDungDichVu();
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 25, Sortable: false, Template: this.sttTemplate },
                        { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: true },
                        { Field: "MaBenhNhan", Title: "Mã NB", Width: 80, Sortable: true },
                        { Field: "TenBenhNhan", Title: "Tên NB", Width: 100, Sortable: true },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 100, Sortable: true },
                        { Field: "NgayDung", Title: "Ngày dùng", Width: 80, Sortable: true, Template: this.ngayDungTemplate },
                        { Field: "MaVoucher", Title: "Mã voucher", Width: 80, Sortable: true }
                    ];
                };
                VoucherChiTietPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                VoucherChiTietPopupComponent.prototype.getTongSoBenhNhanSuDungDichVu = function () {
                    var _this = this;
                    this.apiService.get("Voucher/GetTongSoBenhNhanSuDungDichVu?voucherId=" + this.idVoucher).subscribe(function (res) {
                        _this.tongSoBenhNhanSuDung = res;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                VoucherChiTietPopupComponent.prototype.getSoLuongPhatHanh = function () {
                    var _this = this;
                    this.apiService.get("Voucher/GetSoLuongPhatHanhVoucher?voucherId=" + this.idVoucher).subscribe(function (res) {
                        _this.soLuongPhatHanh = res;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                return VoucherChiTietPopupComponent;
            }());
            VoucherChiTietPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], VoucherChiTietPopupComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDungTemplate', { static: true })
            ], VoucherChiTietPopupComponent.prototype, "ngayDungTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], { static: false })
            ], VoucherChiTietPopupComponent.prototype, "gridChild", void 0);
            VoucherChiTietPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voucher-chi-tiet-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voucher-chi-tiet-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voucher-chi-tiet-popup.component.scss */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], VoucherChiTietPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci1jcmVhdGUvdm91Y2hlci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: VoucherCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherCreateComponent", function () { return VoucherCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _voucher_shared_voucher_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../voucher-shared/voucher-shared.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.ts");
            var VoucherCreateComponent = /** @class */ (function () {
                function VoucherCreateComponent(router, dialog, notificationService) {
                    this.router = router;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                }
                VoucherCreateComponent.prototype.ngOnInit = function () {
                };
                // onCreated() {
                //     this.router.navigate(['/marketing/ct-marketing/voucher']);
                // }
                VoucherCreateComponent.prototype.huy = function () {
                    // this.router.navigate(['/marketing/ct-marketing/voucher']);
                    this.router.navigateByUrl("/marketing/ct-marketing/voucher?holdQuery=true");
                };
                VoucherCreateComponent.prototype.themVoucher = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ["thêm"]),
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            _this.shared.them();
                        }
                    });
                };
                return VoucherCreateComponent;
            }());
            VoucherCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_voucher_shared_voucher_shared_component__WEBPACK_IMPORTED_MODULE_8__["VoucherSharedComponent"], { static: true })
            ], VoucherCreateComponent.prototype, "shared", void 0);
            VoucherCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voucher-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voucher-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voucher-create.component.scss */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.scss")).default]
                })
            ], VoucherCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.scss": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.scss ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".clear-margin-bottom {\n  margin-bottom: 0px !important;\n}\n\n.container-iframe {\n  position: relative;\n  width: 100%;\n  height: 300px;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9jaHVvbmctdHJpbmgtbWFya2V0aW5nL3RoZW8tdm91Y2hlci92b3VjaGVyLWluLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbWFya2V0aW5nXFxjaHVvbmctdHJpbmgtbWFya2V0aW5nXFx0aGVvLXZvdWNoZXJcXHZvdWNoZXItaW4tcG9wdXBcXHZvdWNoZXItaW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci1pbi1wb3B1cC92b3VjaGVyLWluLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9jaHVvbmctdHJpbmgtbWFya2V0aW5nL3RoZW8tdm91Y2hlci92b3VjaGVyLWluLXBvcHVwL3ZvdWNoZXItaW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xlYXItbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iLCIuY2xlYXItbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUgLnBhZ2VicmVhayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: VoucherInPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherInPopupComponent", function () { return VoucherInPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _voucher_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../voucher.model */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8__);
            var VoucherInPopupComponent = /** @class */ (function () {
                function VoucherInPopupComponent(data, dialog, dialogRef, apiService, broadcastService, notificationService, authService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.broadcastService = broadcastService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.hostingName = "http://" + window.location.host;
                    this.format = '';
                    this.iframeSrc = "";
                    this.soLuongIn = 1;
                    this.maSoIn = 1;
                    this.voucherThongTinHTML = new _voucher_model__WEBPACK_IMPORTED_MODULE_7__["VoucherThongTinHTML"]();
                    this.printLayout = 'landscape';
                    this.printSize = 'A4';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_8___default.a;
                }
                VoucherInPopupComponent.prototype.ngOnInit = function () {
                    this.tenVoucher = this.data.Ten;
                    this.maVoucher = this.data.Ma;
                    // this.maSoTu = this.data.MaSoTu;
                    this.soLuongPhatHanh = this.data.SoLuongPhatHanh;
                    this.soLuongIn = this.data.SoLuongPhatHanh;
                    this.maSoIn = 1;
                    this.format = "0".repeat(this.data.SoLuongPhatHanh.toString().length);
                    // this.getBarcode();
                    this.getIframe();
                };
                VoucherInPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                // getBarcode() {
                //     this.apiService.get<any>(`Voucher/GetBarcodeBasedOnMa?ma=${this.maSoTu}`).subscribe(res => {
                //         this.urlBarcode = res;
                //     }, (err: ApiError) => {
                //         this.notificationService.showError(err.Message);
                //     })
                // }
                VoucherInPopupComponent.prototype.soLuongChange = function (evt) {
                    if (evt) {
                        var soLuongConLai = this.soLuongPhatHanh - evt + 1;
                        this.maSoIn = this.maSoIn > soLuongConLai ? soLuongConLai : this.maSoIn;
                    }
                };
                VoucherInPopupComponent.prototype.maSoChange = function (evt) {
                    if (evt) {
                        var soLuongConLai = this.soLuongPhatHanh - evt + 1;
                        this.soLuongIn = this.soLuongIn > soLuongConLai ? soLuongConLai : this.soLuongIn;
                    }
                };
                VoucherInPopupComponent.prototype.mergeThongTinHTML = function () {
                    this.voucherThongTinHTML.HostingName = this.hostingName;
                    this.voucherThongTinHTML.Ten = this.tenVoucher;
                    this.voucherThongTinHTML.Ma = this.maVoucher;
                    this.voucherThongTinHTML.SoLuong = this.soLuongIn;
                    this.voucherThongTinHTML.MaSoTu = this.maSoIn;
                    this.voucherThongTinHTML.SoLuongPhatHanh = this.soLuongPhatHanh;
                };
                VoucherInPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    this.mergeThongTinHTML();
                    return new Promise(function (resolve) {
                        _this.apiService.post("Voucher/GetHtmlVoucher", _this.voucherThongTinHTML).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                    // return new Promise(resolve => {
                    //     this.apiService.get<any>(`Voucher/GetHtmlVoucher?hostingName=${this.hostingName}&ten=${this.tenVoucher}&ma=${this.maVoucher}&soLuong=${this.soLuongIn}&maSoTu=${this.maSoIn}&soLuongPhatHanh=${this.soLuongPhatHanh}`).subscribe(resultData => {
                    //         resolve(resultData);
                    //     });
                    // });
                };
                VoucherInPopupComponent.prototype.getIframe = function () {
                    var _this = this;
                    this.soLuongIn = 1;
                    this.mergeThongTinHTML();
                    this.apiService.post("Voucher/GetHtmlVoucher", this.voucherThongTinHTML).subscribe(function (resultData) {
                        // this.iframeSrc = resultData;
                        _this.iframeSrc = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                    // this.apiService.get<any>(`Voucher/GetHtmlVoucher?hostingName=${this.hostingName}&ten=${this.tenVoucher}&ma=${this.maVoucher}&soLuong=1&maSoTu=1&soLuongPhatHanh=${this.soLuongPhatHanh}`).subscribe(resultData => {
                    //     // this.iframeSrc = resultData;
                    //     this.iframeSrc = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
                    // }, (err: ApiError) => {
                    //     this.notificationService.showError(err.Message);
                    // });
                };
                return VoucherInPopupComponent;
            }());
            VoucherInPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            VoucherInPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voucher-in-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voucher-in-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voucher-in-popup.component.scss */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], VoucherInPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci1saXN0L3ZvdWNoZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: VoucherListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherListComponent", function () { return VoucherListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _voucher_chi_tiet_popup_voucher_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../voucher-chi-tiet-popup/voucher-chi-tiet-popup.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _voucher_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../voucher.model */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.model.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _iconify_icons_ic_twotone_apps__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-apps */ "./node_modules/@iconify/icons-ic/twotone-apps.js");
            /* harmony import */ var _iconify_icons_ic_twotone_apps__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_apps__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_25__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_26__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_27__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_28__);
            var VoucherListComponent = /** @class */ (function () {
                function VoucherListComponent(authService, notificationService, apiService, dialog, router, route, location) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].VoucherMarketing;
                    this.baseRoute = "/marketing/ct-marketing/voucher";
                    this.holdQuery = null;
                    this.additionalSearchString = null;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormControl"];
                    this.gridColumns = [];
                    this.filterColumns = [];
                    this.icdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_23___default.a;
                    this.icDetail = _iconify_icons_ic_twotone_apps__WEBPACK_IMPORTED_MODULE_24___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_25___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_26___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_27___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_28___default.a;
                }
                VoucherListComponent.prototype.ngOnInit = function () {
                    this.voucherSearch = new _voucher_model__WEBPACK_IMPORTED_MODULE_16__["VoucherSearch"]();
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        this.holdQuery = this.route.snapshot.queryParams.holdQuery;
                    }
                    if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem('additionalSearchStringVoucherMarketing') != null) {
                        this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].getItem('additionalSearchStringVoucherMarketing');
                        this.voucherSearch = JSON.parse(this.additionalSearchString);
                    }
                    else {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem('additionalSearchStringVoucherMarketing', null);
                        this.additionalSearchString = JSON.stringify(this.voucherSearch);
                    }
                    this.firstSearchString = JSON.stringify(this.voucherSearch);
                    this.gridColumns = [
                        { Field: "Ma", Title: "Mã voucher", Width: 150, Sortable: true, LinkDetail: true },
                        { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: true },
                        { Field: "SoLuongPhatHanh", Title: "SL phát hành", Width: 150, Sortable: true, Template: this.soLuongPhatHanhTemplate },
                        { Field: "TuNgay", Title: "Thời gian bắt đầu", Width: 150, Sortable: true, Template: this.tuNgayTemplate },
                        { Field: "DenNgay", Title: "Thời gian kết thúc", Width: 150, Sortable: true, Template: this.denNgayTemplate },
                        { Field: "Action", Title: "", Width: 50, Template: this.groupTemplate }
                    ];
                    this.filterColumns = [
                        { Field: "Ma", Title: "Mã voucher" },
                        { Field: "Ten", Title: "Tên" },
                        { Field: "SoLuongPhatHanh", Title: "SL phát hành" },
                        { Field: "TuNgay", Title: "Thời gian bắt đầu" },
                        { Field: "DenNgay", Title: "Thời gian kết thúc" }
                    ];
                };
                VoucherListComponent.prototype.edit = function (dataItem) {
                    if (dataItem) {
                        this.router.navigate(["/marketing/ct-marketing/voucher/chinh-sua/" + dataItem.Id]);
                    }
                };
                VoucherListComponent.prototype.delete = function (dataItem) {
                    var _this = this;
                    if (dataItem) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Delete)) {
                            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                                disableClose: false,
                                width: '400px',
                                data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ['xóa']) }
                            }).afterClosed().subscribe(function (result) {
                                if (result == 'Yes') {
                                    _this.apiService.delete("Voucher/" + dataItem.Id).subscribe(function () {
                                        _this.gridChild.search();
                                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                                    }, function (err) {
                                        _this.notificationService.showError(err.Message);
                                    });
                                }
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                VoucherListComponent.prototype.chiTiet = function (dataItem) {
                    if (dataItem) {
                        this.dialog.open(_voucher_chi_tiet_popup_voucher_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_14__["VoucherChiTietPopupComponent"], {
                            disableClose: true,
                            width: '1000px',
                            height: 'auto',
                            data: dataItem
                        })
                            .afterClosed()
                            .subscribe(function (res) {
                        });
                    }
                };
                VoucherListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("Voucher/ExportChuongTrinhMarketingTheoVoucher", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "ChuongTrinhMarketingTheoVoucher" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                VoucherListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                VoucherListComponent.prototype.clearSearch = function () {
                    if (this.voucherSearch.SearchString == "" || this.voucherSearch.SearchString == null) {
                        this.timKiem();
                    }
                };
                VoucherListComponent.prototype.timKiem = function () {
                    if (this.gridChild) {
                        this.location.replaceState(this.baseRoute + '?holdQuery=true');
                        var QueryString = null;
                        this.gridChild._additionalSearchString = null;
                        QueryString = this.voucherSearch.SearchString;
                        this.convertDateTimeToUTC();
                        var query = JSON.stringify(this.voucherSearch);
                        this.gridChild._additionalSearchString = query;
                        this.gridChild.searchString = QueryString;
                        this.gridChild.search();
                        this.reverseDateTime();
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_17__["LocalStorageHelper"].setItem("additionalSearchStringVoucherMarketing", JSON.stringify(this.voucherSearch));
                    }
                };
                VoucherListComponent.prototype.convertDateTimeToUTC = function () {
                    if (this.voucherSearch.RangeNgayApDung.startDate) {
                        this.voucherTuNgay = new Date(this.voucherSearch.RangeNgayApDung.startDate);
                        this.voucherSearch.RangeNgayApDung.startDate = new Date(Date.UTC(this.voucherTuNgay.getFullYear(), this.voucherTuNgay.getMonth(), this.voucherTuNgay.getDate(), this.voucherTuNgay.getHours(), this.voucherTuNgay.getMinutes()));
                    }
                    if (this.voucherSearch.RangeNgayApDung.endDate) {
                        this.voucherDenNgay = new Date(this.voucherSearch.RangeNgayApDung.endDate);
                        this.voucherSearch.RangeNgayApDung.endDate = new Date(Date.UTC(this.voucherDenNgay.getFullYear(), this.voucherDenNgay.getMonth(), this.voucherDenNgay.getDate(), this.voucherDenNgay.getHours(), this.voucherDenNgay.getMinutes()));
                    }
                };
                VoucherListComponent.prototype.reverseDateTime = function () {
                    if (this.voucherSearch.RangeNgayApDung.startDate) {
                        this.voucherSearch.RangeNgayApDung.startDate = new Date(this.voucherTuNgay.getFullYear(), this.voucherTuNgay.getMonth(), this.voucherTuNgay.getDate(), this.voucherTuNgay.getHours(), this.voucherTuNgay.getMinutes());
                    }
                    if (this.voucherSearch.RangeNgayApDung.endDate) {
                        this.voucherSearch.RangeNgayApDung.endDate = new Date(this.voucherDenNgay.getFullYear(), this.voucherDenNgay.getMonth(), this.voucherDenNgay.getDate(), this.voucherDenNgay.getHours(), this.voucherDenNgay.getMinutes());
                    }
                };
                VoucherListComponent.prototype.add = function () {
                    this.router.navigate(['/marketing/ct-marketing/voucher/them']);
                };
                return VoucherListComponent;
            }());
            VoucherListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongPhatHanhTemplate', { static: true })
            ], VoucherListComponent.prototype, "soLuongPhatHanhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tuNgayTemplate', { static: true })
            ], VoucherListComponent.prototype, "tuNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('denNgayTemplate', { static: true })
            ], VoucherListComponent.prototype, "denNgayTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('groupTemplate', { static: true })
            ], VoucherListComponent.prototype, "groupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: false })
            ], VoucherListComponent.prototype, "gridChild", void 0);
            VoucherListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voucher-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voucher-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voucher-list.component.scss */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.scss")).default]
                })
            ], VoucherListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-routing.module.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-routing.module.ts ***!
          \******************************************************************************************************/
        /*! exports provided: VoucherRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherRoutingModule", function () { return VoucherRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _voucher_list_voucher_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voucher-list/voucher-list.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.ts");
            /* harmony import */ var _voucher_create_voucher_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voucher-create/voucher-create.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.ts");
            /* harmony import */ var _voucher_update_voucher_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voucher-update/voucher-update.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _voucher_list_voucher_list_component__WEBPACK_IMPORTED_MODULE_6__["VoucherListComponent"],
                    data: {
                        title: 'Danh sách quà tặng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].VoucherMarketing,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _voucher_create_voucher_create_component__WEBPACK_IMPORTED_MODULE_7__["VoucherCreateComponent"],
                    data: {
                        title: 'Thêm voucher',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].VoucherMarketing,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _voucher_update_voucher_update_component__WEBPACK_IMPORTED_MODULE_8__["VoucherUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa voucher',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].VoucherMarketing,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
            ];
            var VoucherRoutingModule = /** @class */ (function () {
                function VoucherRoutingModule() {
                }
                return VoucherRoutingModule;
            }());
            VoucherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], VoucherRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-radio mat-radio-group {\n  height: 42px !important;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9jaHVvbmctdHJpbmgtbWFya2V0aW5nL3RoZW8tdm91Y2hlci92b3VjaGVyLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG1hcmtldGluZ1xcY2h1b25nLXRyaW5oLW1hcmtldGluZ1xcdGhlby12b3VjaGVyXFx2b3VjaGVyLXNoYXJlZFxcdm91Y2hlci1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci1zaGFyZWQvdm91Y2hlci1zaGFyZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci1zaGFyZWQvdm91Y2hlci1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcmFkaW8gbWF0LXJhZGlvLWdyb3VwIHtcbiAgaGVpZ2h0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSIsImFwcC1yYWRpbyBtYXQtcmFkaW8tZ3JvdXAge1xuICBoZWlnaHQ6IDQycHggIWltcG9ydGFudDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: VoucherSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherSharedComponent", function () { return VoucherSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _voucher_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../voucher.model */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.model.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_12__);
            var VoucherSharedComponent = /** @class */ (function () {
                function VoucherSharedComponent(route, router, apiService, baseService, notificationService, cd, dialog) {
                    this.route = route;
                    this.router = router;
                    this.apiService = apiService;
                    this.baseService = baseService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.dialog = dialog;
                    this.loaiDichVuVoucherMarketing = _voucher_model__WEBPACK_IMPORTED_MODULE_6__["LoaiDichVuVoucherMarketing"];
                    this.loaiChietKhau = _voucher_model__WEBPACK_IMPORTED_MODULE_6__["LoaiChietKhau"];
                    this.loaiDichVuBenhVien = _voucher_model__WEBPACK_IMPORTED_MODULE_6__["LoaiDichVuBenhVien"];
                    this.voucher = {};
                    this.dichVuVoucher = {};
                    // lstDichVuVouchers: DichVuVoucher[] = [];
                    // loaiDichVuBenhVien: number; //DVKT, DVBV
                    this.isCreate = true;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].VoucherMarketing;
                    this.idVoucher = 0;
                    this.tongSoBenhNhanSuDung = 0;
                    this.isSelectingDichVu = false;
                    this.currentDichVuId = 0;
                    this.isAlreadyGetDataDichVuDonLe = false;
                    this.isAlreadyGetDataNhomDichVu = false;
                    this.isExistDataDichVuDonLe = false;
                    this.isExistDataNhomDichVu = false;
                    this.gridColumns = [];
                    this.gridDataSource = {};
                    this.gridNhomDichVuColumns = [];
                    this.gridNhomDichVuDataSource = {};
                    this.urlGetListDichVuForGrid = "Voucher/GetListDichVuForGridAsync?voucherId=" + this.idVoucher;
                    this.urlGetPagesListDichVuForGrid = "Voucher/GetPagesListDichVuForGridAsync?voucherId=" + this.idVoucher;
                    this.urlGetListNhomDichVuForGrid = "Voucher/GetListNhomDichVuForGridAsync?voucherId=" + this.idVoucher;
                    this.urlGetPagesListNhomDichVuForGrid = "Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=" + this.idVoucher;
                    this.radioDichVuItems = [
                        { Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
                        { Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
                        { Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: false }
                    ];
                    this.radioChietKhauItems = [
                        { Value: this.loaiChietKhau.ChietKhauTheoSoTien, Text: 'CK theo số tiền' },
                        { Value: this.loaiChietKhau.ChietKhauTheoTiLe, Text: 'CK theo %' }
                    ];
                    this.radioChietKhauChiTietItems = [
                        { Value: this.loaiChietKhau.ChietKhauTheoSoTien, Text: '$' },
                        { Value: this.loaiChietKhau.ChietKhauTheoTiLe, Text: '%' }
                    ];
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_12___default.a;
                }
                VoucherSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    if (id) {
                        this.idVoucher = id;
                        this.urlGetListDichVuForGrid = "Voucher/GetListDichVuForGridAsync?voucherId=" + this.idVoucher;
                        this.urlGetPagesListDichVuForGrid = "Voucher/GetPagesListDichVuForGridAsync?voucherId=" + this.idVoucher;
                        this.urlGetListNhomDichVuForGrid = "Voucher/GetListNhomDichVuForGridAsync?voucherId=" + this.idVoucher;
                        this.urlGetPagesListNhomDichVuForGrid = "Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=" + this.idVoucher;
                        this.getTongSoBenhNhanSuDungDichVu();
                        this.getById(id);
                        this.isCreate = false;
                    }
                    else {
                        this.voucher.ChietKhauTatCaDichVu = true;
                        this.voucher.LoaiDichVuVoucherMarketing = _voucher_model__WEBPACK_IMPORTED_MODULE_6__["LoaiDichVuVoucherMarketing"].DichVu;
                        this.voucher.LoaiChietKhau = _voucher_model__WEBPACK_IMPORTED_MODULE_6__["LoaiChietKhau"].ChietKhauTheoSoTien;
                        this.voucher.lstVoucherChiTietMienGiam = [];
                        this.voucher.lstVoucherChiTietMienGiamNhomDichVu = [];
                    }
                    //Dịch vụ
                    this.loaiGia = [];
                    this.dichVuVoucher.LoaiGiaId = null;
                    this.dichVuVoucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
                    this.dichVuVoucher.TiLeChietKhau = null;
                    this.dichVuVoucher.SoTienChietKhau = null;
                    //Grid
                    this.gridColumns = [
                        // { Field: "CheckBox", Title: "", Width: 20 , Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
                        { Field: "LoaiDichVuBenhVienDisplay", Title: "", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomDichVuTemplate },
                        { Field: "MaDichVu", Title: "Mã", Width: 100 },
                        { Field: "DichVuDisplay", Title: "Tên dịch vụ", MinWidth: 180 },
                        { Field: "LoaiGiaId", Title: "Loại giá", Width: 100, Template: this.loaiGiaTemplate },
                        { Field: "DonGia", Title: "Đơn giá", Width: 150, Template: this.donGiaTemplate },
                        { Field: "ChietKhau", Title: "Chiết khấu", Width: 230, Template: this.chietKhauTemplate },
                        { Field: "DonGiaSauChietKhau", Title: "Đơn giá sau CK", Width: 150, Template: this.donGiaSauChietKhauTemplate },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 200, Template: this.ghiChuTemplate },
                        { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
                    ];
                    this.gridNhomDichVuColumns = [
                        { Field: "NhomDichVuDisplay", Title: "Nhóm dịch vụ", MinWidth: 200 },
                        { Field: "ChietKhau", Title: "Chiết khấu", Width: 230, Template: this.chietKhauNhomDichVuTemplate },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 200, Template: this.ghiChuNhomDichVuTemplate },
                        { Field: "Action", Title: "", Width: 30, Template: this.actionTemplate }
                    ];
                };
                VoucherSharedComponent.prototype.getTongSoBenhNhanSuDungDichVu = function () {
                    var _this = this;
                    this.apiService.get("Voucher/GetTongSoBenhNhanSuDungDichVu?voucherId=" + this.idVoucher).subscribe(function (res) {
                        _this.tongSoBenhNhanSuDung = res;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                VoucherSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (res) {
                        _this.voucher = res;
                        // this.voucher.LoaiDichVuVoucherMarketing = LoaiDichVuVoucherMarketing.DichVu;
                        // this.voucher.LoaiChietKhau = LoaiChietKhau.ChietKhauTheoSoTien;
                        _this.voucher.lstVoucherChiTietMienGiam = [];
                        _this.voucher.lstVoucherChiTietMienGiamNhomDichVu = [];
                        // this.getUrlForGrid(res.LoaiDichVuVoucherMarketing);
                        _this.getRadioDichVuItems(res.LoaiDichVuVoucherMarketing);
                        _this.changeMaSo();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.router.navigate(['/marketing/ct-marketing/voucher']);
                    });
                };
                // getUrlForGrid(loaiDichVuVoucherMarketing) {
                // 	switch(loaiDichVuVoucherMarketing)
                // 	{
                // 		// case this.loaiDichVuVoucherMarketing.DichVu:
                // 		// 	this.urlGetListDichVuForGrid = `Voucher/GetListDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 		// 	this.urlGetPagesListDichVuForGrid = `Voucher/GetPagesListDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 		// 	break;
                // 		// case this.loaiDichVuVoucherMarketing.NhomDichVu:
                // 		// 	this.urlGetListNhomDichVuForGrid = `Voucher/GetListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 		// 	this.urlGetPagesListNhomDichVuForGrid = `Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 		// 	break;
                // 		case this.loaiDichVuVoucherMarketing.TatCaDichVu:
                // 			break;
                // 		default:
                // 			this.urlGetListDichVuForGrid = `Voucher/GetListDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 			this.urlGetPagesListDichVuForGrid = `Voucher/GetPagesListDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 			this.urlGetListNhomDichVuForGrid = `Voucher/GetListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 			this.urlGetPagesListNhomDichVuForGrid = `Voucher/GetPagesListNhomDichVuForGridAsync?voucherId=${this.idVoucher}`;
                // 			break;
                // 	}
                // }
                VoucherSharedComponent.prototype.checkTogetRadioDichVuItems = function () {
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
                        this.getRadioDichVuItems(this.loaiDichVuVoucherMarketing.DichVu);
                    }
                    else if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
                        this.getRadioDichVuItems(this.loaiDichVuVoucherMarketing.NhomDichVu);
                    }
                    else {
                        this.getRadioDichVuItems(0);
                    }
                };
                VoucherSharedComponent.prototype.getRadioDichVuItems = function (loaiDichVuVoucherMarketing) {
                    switch (loaiDichVuVoucherMarketing) {
                        case this.loaiDichVuVoucherMarketing.DichVu:
                            this.radioDichVuItems = [
                                { Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
                                { Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
                                { Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: true }
                            ];
                            break;
                        case this.loaiDichVuVoucherMarketing.NhomDichVu:
                            this.radioDichVuItems = [
                                { Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
                                { Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
                                { Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: true }
                            ];
                            break;
                        case this.loaiDichVuVoucherMarketing.TatCaDichVu:
                            this.radioDichVuItems = [
                                { Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: true },
                                { Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: true },
                                { Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: false }
                            ];
                            break;
                        default:
                            this.radioDichVuItems = [
                                { Value: this.loaiDichVuVoucherMarketing.DichVu, Text: 'Dịch vụ', Disabled: false },
                                { Value: this.loaiDichVuVoucherMarketing.NhomDichVu, Text: 'Nhóm dịch vụ', Disabled: false },
                                { Value: this.loaiDichVuVoucherMarketing.TatCaDichVu, Text: 'Tất cả dịch vụ', Disabled: false }
                            ];
                            break;
                    }
                };
                VoucherSharedComponent.prototype.getSharedData = function () {
                    return this.voucher;
                };
                VoucherSharedComponent.prototype.loaiDichVuVoucherMarketingChange = function (evt) {
                    this.validationErrors = [];
                    this.dichVuVoucher = {};
                    this.dichVuVoucher.LoaiGiaId = null;
                    this.dichVuVoucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
                    this.dichVuVoucher.TiLeChietKhau = null;
                    this.dichVuVoucher.SoTienChietKhau = null;
                    this.voucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
                    this.voucher.TiLeChietKhau = null;
                    this.voucher.SoTienChietKhau = null;
                    if (evt === this.loaiDichVuVoucherMarketing.TatCaDichVu) {
                        this.voucher.ChietKhauTatCaDichVu = true;
                    }
                    else {
                        this.voucher.ChietKhauTatCaDichVu = false;
                    }
                };
                VoucherSharedComponent.prototype.maVoucherChange = function (evt) {
                    this.changeMaSo();
                };
                VoucherSharedComponent.prototype.soLuongPhatHanhChange = function (evt) {
                    this.changeMaSo();
                };
                VoucherSharedComponent.prototype.changeMaSo = function () {
                    if (this.voucher.Ma && this.voucher.SoLuongPhatHanh) {
                        var maSoTu = '';
                        maSoTu += "0".repeat(this.voucher.SoLuongPhatHanh.toString().length - 1);
                        this.voucher.MaSoTu = this.voucher.Ma + "-" + "0".repeat(this.voucher.SoLuongPhatHanh.toString().length - 1) + "1";
                        this.voucher.MaSoDen = this.voucher.Ma + "-" + this.voucher.SoLuongPhatHanh;
                    }
                    else {
                        this.voucher.MaSoTu = '';
                        this.voucher.MaSoDen = '';
                    }
                };
                VoucherSharedComponent.prototype.removeValidationsDichVu = function () {
                    if (this.validationErrors && this.validationErrors.length > 0) {
                        if (this.dichVuVoucher.DichVuId && this.dichVuVoucher.DichVuId !== 0) {
                            this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(function (p) { return p.Field.includes('DichVuId'); })), 1);
                        }
                        if (this.dichVuVoucher.LoaiGiaId && this.dichVuVoucher.LoaiGiaId !== 0) {
                            this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(function (p) { return p.Field.includes('LoaiGiaId'); })), 1);
                        }
                        if (this.dichVuVoucher.DonGia && this.dichVuVoucher.DonGia !== 0) {
                            this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(function (p) { return p.Field.includes('DonGia'); })), 1);
                        }
                    }
                };
                VoucherSharedComponent.prototype.tenDichVuChange = function (evt) {
                    var _this = this;
                    if (evt) {
                        this.dichVuVoucher.LoaiDichVuBenhVien = evt.LoaiDichVu;
                        this.dichVuVoucher.LoaiDichVuBenhVienDisplay = evt.LoaiDichVu == this.loaiDichVuBenhVien.KhamBenh ? 'DỊCH VỤ KHÁM BỆNH' : 'DỊCH VỤ KỸ THUẬT';
                        this.dichVuVoucher.DichVuDisplay = evt.DisplayName;
                        this.dichVuVoucher.MaDichVu = evt.Ma;
                        // this.apiService.post<any>(`Voucher/GetListLoaiGiaChoDichVu?dichVuId=${evt.KeyId}&loaiDichVu=${evt.LoaiDichVu}`).subscribe(res => {
                        this.apiService.post("Voucher/GetListTatCaLoaiGiaChoDichVu?loaiDichVu=" + evt.LoaiDichVu).subscribe(function (res) {
                            _this.loaiGia = res;
                            _this.dichVuVoucher.LoaiGiaId = res[0].KeyId;
                            _this.dichVuVoucher.LoaiGiaDisplay = res[0].DisplayName;
                            _this.getDonGia();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        this.loaiGia = [];
                        this.dichVuVoucher.LoaiGiaId = null;
                    }
                };
                VoucherSharedComponent.prototype.nhomDichVuChange = function (evt) {
                    if (evt) {
                        this.dichVuVoucher.NhomDichVuDisplay = evt.DisplayName;
                        this.dichVuVoucher.NhomDichVuChaId = evt.ParentId;
                        this.dichVuVoucher.NhomDichVuConItems = evt.Items;
                    }
                };
                VoucherSharedComponent.prototype.loaiGiaChange = function (evt) {
                    // if(evt && )
                    if (evt) {
                        this.getDonGia();
                    }
                    else {
                        this.dichVuVoucher.DonGia = 0;
                        this.getDonGiaSauChietKhau();
                    }
                };
                VoucherSharedComponent.prototype.loaiGiaDichVuChange = function (evt, dataItem) {
                    if (evt) {
                        this.getDonGiaDichVu(dataItem);
                    }
                    else {
                        dataItem.DonGia = 0;
                        this.getDonGiaSauChietKhauChoDichVu(dataItem);
                    }
                };
                VoucherSharedComponent.prototype.getDonGia = function () {
                    var _this = this;
                    if (this.dichVuVoucher.DichVuId && this.dichVuVoucher.LoaiGiaId && this.dichVuVoucher.LoaiDichVuBenhVien) {
                        this.apiService.post("Voucher/GetDonGiaChoDichVu?dichVuId=" + this.dichVuVoucher.DichVuId + "&loaiGiaId=" + this.dichVuVoucher.LoaiGiaId + "&loaiDichVu=" + this.dichVuVoucher.LoaiDichVuBenhVien).subscribe(function (res) {
                            _this.dichVuVoucher.DonGia = res;
                            _this.getDonGiaSauChietKhau();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                        });
                    }
                };
                VoucherSharedComponent.prototype.getDonGiaDichVu = function (dataItem) {
                    var _this = this;
                    if (dataItem.DichVuId && dataItem.LoaiGiaId && dataItem.LoaiDichVuBenhVien) {
                        this.apiService.post("Voucher/GetDonGiaChoDichVu?dichVuId=" + dataItem.DichVuId + "&loaiGiaId=" + dataItem.LoaiGiaId + "&loaiDichVu=" + dataItem.LoaiDichVuBenhVien).subscribe(function (res) {
                            dataItem.DonGia = res;
                            _this.getDonGiaSauChietKhauChoDichVu(dataItem);
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                        });
                    }
                };
                VoucherSharedComponent.prototype.loaiChietKhauChange = function (evt) {
                    if (evt) {
                        this.dichVuVoucher.TiLeChietKhau = null;
                        this.dichVuVoucher.SoTienChietKhau = null;
                        // this.dichVuVoucher.TiLeChietKhau = 0;
                        // this.dichVuVoucher.DonGiaSauChietKhau = this.dichVuVoucher.DonGia;
                        this.getDonGiaSauChietKhau();
                    }
                };
                VoucherSharedComponent.prototype.loaiChietKhauChiTietDichVuChange = function (evt, dataItem) {
                    if (evt) {
                        dataItem.TiLeChietKhau = null;
                        dataItem.SoTienChietKhau = null;
                        // this.dichVuVoucher.TiLeChietKhau = 0;
                        // this.dichVuVoucher.DonGiaSauChietKhau = this.dichVuVoucher.DonGia;
                        this.getDonGiaSauChietKhauChoDichVu(dataItem);
                    }
                };
                VoucherSharedComponent.prototype.loaiChietKhauChiTietNhomDichVuChange = function (evt, dataItem) {
                    if (evt) {
                        dataItem.TiLeChietKhau = null;
                        dataItem.SoTienChietKhau = null;
                    }
                };
                VoucherSharedComponent.prototype.chietKhauChange = function (evt) {
                    if (evt) {
                        if (this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            this.dichVuVoucher.SoTienChietKhau = evt > this.dichVuVoucher.DonGia ? this.dichVuVoucher.DonGia : evt;
                        }
                        // this.getDonGiaSauChietKhau();
                    }
                    this.getDonGiaSauChietKhau();
                };
                VoucherSharedComponent.prototype.chietKhauDichVuChange = function (evt, dataItem) {
                    var _this = this;
                    if (evt) {
                        if (dataItem.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            dataItem.SoTienChietKhau = evt > dataItem.DonGia ? dataItem.DonGia : evt;
                            if (this.validationErrors && this.validationErrors.some(function (p) { return p.Field.includes('dataItem[' + _this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].SoTienChietKhau'); })) {
                                this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(function (p) { return p.Field.includes('dataItem[' + _this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].SoTienChietKhau'); })), 1);
                            }
                        }
                        else {
                            if (this.validationErrors && this.validationErrors.some(function (p) { return p.Field.includes('dataItem[' + _this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].TiLeChietKhau'); })) {
                                this.validationErrors.splice(this.validationErrors.indexOf(this.validationErrors.filter(function (p) { return p.Field.includes('dataItem[' + _this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem) + '].TiLeChietKhau'); })), 1);
                            }
                        }
                        // this.getDonGiaSauChietKhauChoDichVu(dataItem);
                    }
                    this.getDonGiaSauChietKhauChoDichVu(dataItem);
                };
                VoucherSharedComponent.prototype.getDonGiaSauChietKhau = function () {
                    if (this.dichVuVoucher.DonGia && this.dichVuVoucher.DonGia != 0) {
                        switch (this.dichVuVoucher.LoaiChietKhau) {
                            case this.loaiChietKhau.ChietKhauTheoSoTien:
                                this.dichVuVoucher.SoTienChietKhau = this.dichVuVoucher.SoTienChietKhau > this.dichVuVoucher.DonGia ? this.dichVuVoucher.DonGia : this.dichVuVoucher.SoTienChietKhau;
                                this.dichVuVoucher.DonGiaSauChietKhau = this.dichVuVoucher.DonGia - this.dichVuVoucher.SoTienChietKhau;
                                break;
                            case this.loaiChietKhau.ChietKhauTheoTiLe:
                                this.dichVuVoucher.DonGiaSauChietKhau = (this.dichVuVoucher.DonGia * (100 - this.dichVuVoucher.TiLeChietKhau)) / 100;
                                break;
                        }
                    }
                    else {
                        this.dichVuVoucher.DonGiaSauChietKhau = 0;
                    }
                    this.removeValidationsDichVu();
                };
                VoucherSharedComponent.prototype.getDonGiaSauChietKhauChoDichVu = function (dataItem) {
                    if (dataItem.DonGia && dataItem.DonGia != 0) {
                        switch (dataItem.LoaiChietKhau) {
                            case this.loaiChietKhau.ChietKhauTheoSoTien:
                                dataItem.DonGiaSauChietKhau = dataItem.DonGia - dataItem.SoTienChietKhau;
                                break;
                            case this.loaiChietKhau.ChietKhauTheoTiLe:
                                dataItem.DonGiaSauChietKhau = (dataItem.DonGia * (100 - dataItem.TiLeChietKhau)) / 100;
                                break;
                        }
                    }
                    else {
                        dataItem.DonGiaSauChietKhau = 0;
                    }
                };
                VoucherSharedComponent.prototype.validationFormClient = function () {
                    this.validationErrors = [];
                    var array = [];
                    if (this.dichVuVoucher) {
                        if (this.dichVuVoucher.DichVuId === 0 || !this.dichVuVoucher.DichVuId) {
                            array.push({ Field: 'DichVuId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDichVuRequired });
                        }
                        if (this.dichVuVoucher.LoaiGiaId === 0 || !this.dichVuVoucher.LoaiGiaId) {
                            array.push({ Field: 'LoaiGiaId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageLoaiGiaRequired });
                        }
                        if (!this.dichVuVoucher.DonGia || this.dichVuVoucher.DonGia === 0) {
                            array.push({ Field: 'DonGia', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDonGiaNotNull });
                        }
                        if (this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            if (!this.dichVuVoucher.SoTienChietKhau || this.dichVuVoucher.SoTienChietKhau === 0) {
                                array.push({ Field: 'SoTienChietKhau', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauRequired });
                            }
                            else if (this.dichVuVoucher.SoTienChietKhau > this.dichVuVoucher.DonGia) {
                                array.push({ Field: 'SoTienChietKhau', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauGreaterThanDonGiaRequired });
                            }
                            else if (this.dichVuVoucher.SoTienChietKhau < 1000) {
                                array.push({ Field: 'SoTienChietKhau', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauItNhat1000 });
                            }
                        }
                        if (this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe) {
                            if (!this.dichVuVoucher.TiLeChietKhau || this.dichVuVoucher.TiLeChietKhau === 0) {
                                array.push({ Field: 'TiLeChietKhau', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageTiLeChietKhauRequired });
                            }
                        }
                    }
                    if (this.checkExist(this.dichVuVoucher.DichVuId)) {
                        array.push({ Field: 'DichVuId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDichVuIsExistedInList });
                    }
                    if (array.length > 0) {
                        this.validationErrors = array.slice();
                    }
                };
                VoucherSharedComponent.prototype.validationFormNhomDichVuClient = function () {
                    this.validationErrors = [];
                    var array = [];
                    if (this.dichVuVoucher) {
                        if (this.dichVuVoucher.NhomDichVuId === 0 || !this.dichVuVoucher.NhomDichVuId) {
                            array.push({ Field: 'NhomDichVuId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuRequired });
                        }
                        if (this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            if (!this.dichVuVoucher.SoTienChietKhau || this.dichVuVoucher.SoTienChietKhau === 0) {
                                array.push({ Field: 'SoTienChietKhauNhomDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauRequired });
                            }
                            else if (this.dichVuVoucher.SoTienChietKhau < 1000) {
                                array.push({ Field: 'SoTienChietKhauNhomDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauItNhat1000 });
                            }
                        }
                        if (this.dichVuVoucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe) {
                            if (!this.dichVuVoucher.TiLeChietKhau || this.dichVuVoucher.TiLeChietKhau === 0) {
                                array.push({ Field: 'TiLeChietKhauNhomDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageTiLeChietKhauRequired });
                            }
                        }
                    }
                    if (this.checkExistNhomDichVu(this.dichVuVoucher.NhomDichVuId)) {
                        array.push({ Field: 'NhomDichVuId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuIsExistedInList });
                    }
                    else if (this.checkExistNhomDichVuCha(this.dichVuVoucher.NhomDichVuChaId)) {
                        array.push({ Field: 'NhomDichVuId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuChaIsExistedInList });
                    }
                    else if (this.checkExistNhomDichVuCon(this.dichVuVoucher.NhomDichVuConItems)) {
                        array.push({ Field: 'NhomDichVuId', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuConIsExistedInList });
                    }
                    if (array.length > 0) {
                        this.validationErrors = array.slice();
                    }
                };
                VoucherSharedComponent.prototype.checkExist = function (dichVuId) {
                    return this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(function (p) { return p.DichVuId === dichVuId; });
                };
                VoucherSharedComponent.prototype.checkExistNhomDichVu = function (nhomDichVuId) {
                    return this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(function (p) { return p.NhomDichVuId === nhomDichVuId; });
                };
                VoucherSharedComponent.prototype.checkExistNhomDichVuCha = function (nhomDichVuChaId) {
                    return this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(function (p) { return p.NhomDichVuId === nhomDichVuChaId; });
                };
                VoucherSharedComponent.prototype.checkExistNhomDichVuCon = function (nhomDichVuConItems) {
                    var _this = this;
                    if (nhomDichVuConItems && nhomDichVuConItems.length > 0) {
                        var existed_1 = false;
                        nhomDichVuConItems.forEach(function (item) {
                            if (_this.voucher.lstVoucherChiTietMienGiamNhomDichVu && _this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(function (p) { return p.NhomDichVuId === item.KeyId; })) {
                                existed_1 = true;
                            }
                        });
                        if (existed_1) {
                            return true;
                        }
                    }
                    return false;
                };
                VoucherSharedComponent.prototype.themDichVuChoVoucher = function () {
                    var _this = this;
                    this.validationErrors = null;
                    this.voucher.IsThemHoacLuuDichVu = false;
                    // this.dichVuVoucher.LoaiDichVu = this.loaiDichVuBenhVien;
                    this.dichVuVoucher.DichVuId = this.dichVuVoucher.DichVuId ? this.dichVuVoucher.DichVuId : null;
                    this.dichVuVoucher.LoaiGiaId = this.dichVuVoucher.LoaiGiaId ? this.dichVuVoucher.LoaiGiaId : null;
                    this.validationFormClient();
                    if (this.validationErrors && !this.validationErrors.some(function (x) { return x; })) {
                        if (this.idVoucher && this.idVoucher !== 0) {
                            this.apiService.post("Voucher/KiemTraDichVuDaTonTaiTrongNhomDichVu?voucherId=" + this.idVoucher + "&dichVuId=" + this.dichVuVoucher.DichVuId + "&loaiDichVuBenhVien=" + this.dichVuVoucher.LoaiDichVuBenhVien).subscribe(function (res) {
                                if (res) {
                                    _this.dichVuVoucher.NhomDichVuId = null;
                                    var dichVuVoucher = {};
                                    dichVuVoucher = Object.assign({}, _this.dichVuVoucher);
                                    _this.voucher.lstVoucherChiTietMienGiam.push(dichVuVoucher);
                                    _this.setDataGridView();
                                    _this.gridDanhSachDichVu.gridDataSource = Object.assign({}, _this.gridDataSource);
                                    _this.gridDanhSachDichVu.setDataSource();
                                    _this.huy();
                                    _this.checkTogetRadioDichVuItems();
                                }
                                else {
                                    var validate = {
                                        Field: 'DichVuId',
                                        Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDichVuIsExisted
                                    };
                                    _this.validationErrors.push(validate);
                                }
                            }, function (err) {
                                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                            });
                        }
                        else {
                            this.apiService.post("Voucher/KiemTraDichVuDaTonTaiTrongNhomDichVuTheoDanhSach?dichVuId=" + this.dichVuVoucher.DichVuId + "&loaiDichVuBenhVien=" + this.dichVuVoucher.LoaiDichVuBenhVien, this.voucher).subscribe(function (res) {
                                if (res) {
                                    _this.dichVuVoucher.NhomDichVuId = null;
                                    var dichVuVoucher = {};
                                    dichVuVoucher = Object.assign({}, _this.dichVuVoucher);
                                    _this.voucher.lstVoucherChiTietMienGiam.push(dichVuVoucher);
                                    _this.setDataGridView();
                                    _this.gridDanhSachDichVu.gridDataSource = Object.assign({}, _this.gridDataSource);
                                    _this.gridDanhSachDichVu.setDataSource();
                                    _this.huy();
                                    _this.checkTogetRadioDichVuItems();
                                }
                                else {
                                    var validate = {
                                        Field: 'DichVuId',
                                        Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDichVuIsExisted
                                    };
                                    _this.validationErrors.push(validate);
                                }
                            }, function (err) {
                                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                            });
                        }
                    }
                };
                VoucherSharedComponent.prototype.themNhomDichVuChoVoucher = function () {
                    var _this = this;
                    this.validationErrors = null;
                    this.voucher.IsThemHoacLuuDichVu = false;
                    this.dichVuVoucher.NhomDichVuId = this.dichVuVoucher.NhomDichVuId ? this.dichVuVoucher.NhomDichVuId : null;
                    this.validationFormNhomDichVuClient();
                    if (this.validationErrors && !this.validationErrors.some(function (x) { return x; })) {
                        if (this.idVoucher && this.idVoucher !== 0) {
                            this.apiService.post("Voucher/KiemTraNhomDichVuDaBaoGomDichVu?voucherId=" + this.idVoucher + "&nhomDichVuId=" + this.dichVuVoucher.NhomDichVuId).subscribe(function (res) {
                                if (res) {
                                    _this.dichVuVoucher.DichVuId = null;
                                    _this.dichVuVoucher.LoaiGiaId = null;
                                    var dichVuVoucher = {};
                                    dichVuVoucher = Object.assign({}, _this.dichVuVoucher);
                                    _this.voucher.lstVoucherChiTietMienGiamNhomDichVu.push(dichVuVoucher);
                                    _this.setDataGridViewNhomDichVu();
                                    _this.gridDanhSachNhomDichVu.gridDataSource = Object.assign({}, _this.gridNhomDichVuDataSource);
                                    _this.gridDanhSachNhomDichVu.setDataSource();
                                    _this.huy();
                                    _this.checkTogetRadioDichVuItems();
                                }
                                else {
                                    var validate = {
                                        Field: 'NhomDichVuId',
                                        Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuIsExisted
                                    };
                                    _this.validationErrors.push(validate);
                                }
                            }, function (err) {
                                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                            });
                        }
                        else {
                            this.apiService.post("Voucher/KiemTraNhomDichVuDaBaoGomDichVuTheoDanhSach?&nhomDichVuId=" + this.dichVuVoucher.NhomDichVuId, this.voucher).subscribe(function (res) {
                                if (res) {
                                    _this.dichVuVoucher.DichVuId = null;
                                    _this.dichVuVoucher.LoaiGiaId = null;
                                    var dichVuVoucher = {};
                                    dichVuVoucher = Object.assign({}, _this.dichVuVoucher);
                                    _this.voucher.lstVoucherChiTietMienGiamNhomDichVu.push(dichVuVoucher);
                                    _this.setDataGridViewNhomDichVu();
                                    _this.gridDanhSachNhomDichVu.gridDataSource = Object.assign({}, _this.gridNhomDichVuDataSource);
                                    _this.gridDanhSachNhomDichVu.setDataSource();
                                    _this.huy();
                                    _this.checkTogetRadioDichVuItems();
                                }
                                else {
                                    var validate = {
                                        Field: 'NhomDichVuId',
                                        Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuIsExisted
                                    };
                                    _this.validationErrors.push(validate);
                                }
                            }, function (err) {
                                err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                            });
                        }
                    }
                };
                // themTatCaDichVuChoVoucher() {
                // 	this.validationErrors = null;
                // 	this.onValidateTatCaDichVuChoVoucher();
                // 	this.voucher.IsThemHoacLuuDichVu = false;
                // 	if (this.validationErrors && !this.validationErrors.some(x => x)) {
                // 		this.voucher.ChietKhauTatCaDichVu = true;
                // 		this.checkTogetRadioDichVuItems();
                // 	}
                // }
                VoucherSharedComponent.prototype.xoaDichVuChoVoucher = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "B\u1EA1n c\u00F3 mu\u1ED1n xo\u00E1 d\u1ECBch v\u1EE5 " + dataItem.DichVuDisplay + " kh\u00F4ng?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === "Yes") {
                            _this.voucher.lstVoucherChiTietMienGiam.splice(_this.voucher.lstVoucherChiTietMienGiam.indexOf(dataItem), 1);
                            _this.setDataGridView();
                            _this.gridDanhSachDichVu.gridDataSource = Object.assign({}, _this.gridDataSource);
                            _this.gridDanhSachDichVu.setDataSource();
                            _this.checkTogetRadioDichVuItems();
                            // this.ResetValidateForGrid();
                        }
                    });
                };
                VoucherSharedComponent.prototype.xoaNhomDichVuChoVoucher = function (dataItem) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: "B\u1EA1n c\u00F3 mu\u1ED1n xo\u00E1 nh\u00F3m d\u1ECBch v\u1EE5 " + dataItem.NhomDichVuDisplay + " kh\u00F4ng?" }
                    }).afterClosed().subscribe(function (result) {
                        if (result === "Yes") {
                            _this.voucher.lstVoucherChiTietMienGiamNhomDichVu.splice(_this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(dataItem), 1);
                            _this.setDataGridViewNhomDichVu();
                            _this.gridDanhSachNhomDichVu.gridDataSource = Object.assign({}, _this.gridNhomDichVuDataSource);
                            _this.gridDanhSachNhomDichVu.setDataSource();
                            _this.checkTogetRadioDichVuItems();
                            // this.ResetValidateForGrid();
                        }
                    });
                };
                VoucherSharedComponent.prototype.xoaTatCaDichVuChoVoucher = function () {
                    this.voucher.ChietKhauTatCaDichVu = false;
                    this.checkTogetRadioDichVuItems();
                };
                VoucherSharedComponent.prototype.onValidateGridDichVuChoVoucher = function () {
                    var _this = this;
                    // this.validationErrors = [];
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(function (p) { return !p.LoaiGiaId; })) {
                        for (var _i = 0, _a = this.voucher.lstVoucherChiTietMienGiam.filter(function (p) { return !p.LoaiGiaId; }); _i < _a.length; _i++) {
                            var chiTietVoucher = _a[_i];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].LoaiGia',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageLoaiGiaNotNull
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(function (p) { return p.LoaiGiaId && (!p.DonGia || p.DonGia === 0); })) {
                        for (var _b = 0, _c = this.voucher.lstVoucherChiTietMienGiam.filter(function (p) { return p.LoaiGiaId && (!p.DonGia || p.DonGia === 0); }); _b < _c.length; _b++) {
                            var chiTietVoucher = _c[_b];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].LoaiGia',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDonGiaGridNotNull
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau; })) {
                        for (var _d = 0, _e = this.voucher.lstVoucherChiTietMienGiam.filter(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau; }); _d < _e.length; _d++) {
                            var chiTietVoucher = _e[_d];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].SoTienChietKhau',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauNotNull
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000; })) {
                        for (var _f = 0, _g = this.voucher.lstVoucherChiTietMienGiam.filter(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000; }); _f < _g.length; _f++) {
                            var chiTietVoucher = _g[_f];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].SoTienChietKhau',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauItNhat1000
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.some(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoTiLe && (!p.TiLeChietKhau || p.TiLeChietKhau === 0); })) {
                        for (var _h = 0, _j = this.voucher.lstVoucherChiTietMienGiam.filter(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoTiLe && !p.TiLeChietKhau; }); _h < _j.length; _h++) {
                            var chiTietVoucher = _j[_h];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiam.indexOf(chiTietVoucher) + '].TiLeChietKhau',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageTiLeChietKhauNotNull
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                };
                VoucherSharedComponent.prototype.onValidateGridNhomDichVuChoVoucher = function () {
                    var _this = this;
                    // this.validationErrors = [];
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau; })) {
                        for (var _i = 0, _a = this.voucher.lstVoucherChiTietMienGiamNhomDichVu.filter(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && !p.SoTienChietKhau; }); _i < _a.length; _i++) {
                            var chiTietVoucher = _a[_i];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(chiTietVoucher) + '].SoTienChietKhauNhomDichVu',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauNotNull
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000; })) {
                        for (var _b = 0, _c = this.voucher.lstVoucherChiTietMienGiamNhomDichVu.filter(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoSoTien && p.SoTienChietKhau && p.SoTienChietKhau < 1000; }); _b < _c.length; _b++) {
                            var chiTietVoucher = _c[_b];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(chiTietVoucher) + '].SoTienChietKhauNhomDichVu',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauItNhat1000
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.some(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoTiLe && !p.TiLeChietKhau; })) {
                        for (var _d = 0, _e = this.voucher.lstVoucherChiTietMienGiamNhomDichVu.filter(function (p) { return p.LoaiChietKhau == _this.loaiChietKhau.ChietKhauTheoTiLe && (!p.TiLeChietKhau || p.TiLeChietKhau === 0); }); _d < _e.length; _d++) {
                            var chiTietVoucher = _e[_d];
                            var validate = {
                                Field: 'dataItem[' + this.voucher.lstVoucherChiTietMienGiamNhomDichVu.indexOf(chiTietVoucher) + '].TiLeChietKhauNhomDichVu',
                                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageTiLeChietKhauNotNull
                            };
                            this.validationErrors.push(validate);
                        }
                    }
                };
                VoucherSharedComponent.prototype.onValidateTatCaDichVuChoVoucher = function () {
                    this.validationErrors = [];
                    if (this.voucher && this.voucher.ChietKhauTatCaDichVu) {
                        if (this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            if (!this.voucher.SoTienChietKhau || this.voucher.SoTienChietKhau === 0) {
                                this.validationErrors.push({ Field: 'SoTienChietKhauTatCaDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauRequired });
                            }
                            else if (this.voucher.SoTienChietKhau && this.voucher.SoTienChietKhau < 1000) {
                                this.validationErrors.push({ Field: 'SoTienChietKhauTatCaDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageSoTienChietKhauItNhat1000 });
                            }
                        }
                        if (this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoTiLe) {
                            if (!this.voucher.TiLeChietKhau || this.voucher.TiLeChietKhau === 0) {
                                this.validationErrors.push({ Field: 'TiLeChietKhauTatCaDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageTiLeChietKhauRequired });
                            }
                            else if (this.voucher.TiLeChietKhau && this.voucher.TiLeChietKhau < 1) {
                                this.validationErrors.push({ Field: 'TiLeChietKhauTatCaDichVu', Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageTiLeChietKhauItNhat1 });
                            }
                        }
                    }
                };
                VoucherSharedComponent.prototype.setDataGridView = function () {
                    this.gridDataSource = {
                        data: this.voucher.lstVoucherChiTietMienGiam.slice(),
                        total: this.voucher.lstVoucherChiTietMienGiam.length
                    };
                };
                VoucherSharedComponent.prototype.setDataGridViewNhomDichVu = function () {
                    this.gridNhomDichVuDataSource = {
                        data: this.voucher.lstVoucherChiTietMienGiamNhomDichVu.slice(),
                        total: this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length
                    };
                };
                VoucherSharedComponent.prototype.huy = function () {
                    this.dichVuVoucher = {};
                    this.dichVuVoucher.LoaiGiaId = null;
                    this.dichVuVoucher.LoaiChietKhau = this.loaiChietKhau.ChietKhauTheoSoTien;
                    this.dichVuVoucher.TiLeChietKhau = null;
                    this.dichVuVoucher.SoTienChietKhau = null;
                    this.validationErrors = [];
                };
                VoucherSharedComponent.prototype.luu = function () {
                    this.voucher.IsThemHoacLuuDichVu = true;
                    switch (this.voucher.LoaiDichVuVoucherMarketing) {
                        case this.loaiDichVuVoucherMarketing.DichVu:
                            this.luuDichVu();
                            break;
                        case this.loaiDichVuVoucherMarketing.NhomDichVu:
                            this.luuNhomDichVu();
                            break;
                        case this.loaiDichVuVoucherMarketing.TatCaDichVu:
                            this.luuTatCaDichVu();
                            break;
                    }
                };
                VoucherSharedComponent.prototype.luuDichVu = function () {
                    var _this = this;
                    this.validationErrors = [];
                    if ((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDichVuNotNull);
                        return;
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
                        this.onValidateGridDichVuChoVoucher();
                    }
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
                        this.onValidateGridNhomDichVuChoVoucher();
                    }
                    if (this.validationErrors != null && this.validationErrors.length === 0) {
                        this.voucher.LoaiChietKhau = null;
                        this.voucher.TiLeChietKhau = null;
                        this.voucher.SoTienChietKhau = null;
                        this.voucher.lstVoucherChiTietMienGiam.forEach(function (item) {
                            item.NhomDichVuId = null;
                        });
                        this.apiService.put("Voucher", this.voucher).subscribe(function (res) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
                            _this.router.navigate(['/marketing/ct-marketing/voucher']);
                        }, function (err) {
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                        });
                    }
                };
                VoucherSharedComponent.prototype.luuNhomDichVu = function () {
                    var _this = this;
                    this.validationErrors = [];
                    if ((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuNotNull);
                        return;
                    }
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
                        this.onValidateGridNhomDichVuChoVoucher();
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
                        this.onValidateGridDichVuChoVoucher();
                    }
                    if (this.validationErrors != null && this.validationErrors.length === 0) {
                        this.voucher.LoaiChietKhau = null;
                        this.voucher.TiLeChietKhau = null;
                        this.voucher.SoTienChietKhau = null;
                        this.voucher.lstVoucherChiTietMienGiamNhomDichVu.forEach(function (item) {
                            item.DichVuId = null;
                            item.LoaiGiaId = null;
                        });
                        this.apiService.put("Voucher", this.voucher).subscribe(function (res) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
                            _this.router.navigate(['/marketing/ct-marketing/voucher']);
                        }, function (err) {
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                        });
                    }
                };
                VoucherSharedComponent.prototype.luuTatCaDichVu = function () {
                    var _this = this;
                    this.onValidateTatCaDichVuChoVoucher();
                    if (this.validationErrors != null && this.validationErrors.length === 0) {
                        if (this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            this.voucher.TiLeChietKhau = null;
                        }
                        else {
                            this.voucher.SoTienChietKhau = null;
                        }
                        this.apiService.put("Voucher", this.voucher).subscribe(function (res) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Chỉnh sửa"]));
                            _this.router.navigate(['/marketing/ct-marketing/voucher']);
                        }, function (err) {
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                        });
                    }
                };
                VoucherSharedComponent.prototype.them = function () {
                    this.voucher.IsThemHoacLuuDichVu = true;
                    switch (this.voucher.LoaiDichVuVoucherMarketing) {
                        case this.loaiDichVuVoucherMarketing.DichVu:
                            this.themDichVu();
                            break;
                        case this.loaiDichVuVoucherMarketing.NhomDichVu:
                            this.themNhomDichVu();
                            break;
                        case this.loaiDichVuVoucherMarketing.TatCaDichVu:
                            this.themTatCaDichVu();
                            break;
                    }
                };
                VoucherSharedComponent.prototype.themDichVu = function () {
                    var _this = this;
                    this.validationErrors = [];
                    if ((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageDichVuNotNull);
                        return;
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
                        this.onValidateGridDichVuChoVoucher();
                    }
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
                        this.onValidateGridNhomDichVuChoVoucher();
                    }
                    if (this.validationErrors != null && this.validationErrors.length === 0) {
                        this.voucher.LoaiChietKhau = null;
                        this.voucher.TiLeChietKhau = null;
                        this.voucher.SoTienChietKhau = null;
                        this.apiService.post("Voucher", this.voucher).subscribe(function (res) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                            _this.router.navigate(['/marketing/ct-marketing/voucher']);
                        }, function (err) {
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                        });
                    }
                };
                VoucherSharedComponent.prototype.themNhomDichVu = function () {
                    var _this = this;
                    this.validationErrors = [];
                    if ((!this.voucher.lstVoucherChiTietMienGiam || this.voucher.lstVoucherChiTietMienGiam.length === 0) && (!this.voucher.lstVoucherChiTietMienGiamNhomDichVu || this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length === 0)) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["VoucherMarketingMessage"].MessageNhomDichVuNotNull);
                        return;
                    }
                    if (this.voucher.lstVoucherChiTietMienGiamNhomDichVu && this.voucher.lstVoucherChiTietMienGiamNhomDichVu.length > 0) {
                        this.onValidateGridNhomDichVuChoVoucher();
                    }
                    if (this.voucher.lstVoucherChiTietMienGiam && this.voucher.lstVoucherChiTietMienGiam.length > 0) {
                        this.onValidateGridDichVuChoVoucher();
                    }
                    if (this.validationErrors != null && this.validationErrors.length === 0) {
                        this.voucher.LoaiChietKhau = null;
                        this.voucher.TiLeChietKhau = null;
                        this.voucher.SoTienChietKhau = null;
                        this.apiService.post("Voucher", this.voucher).subscribe(function (res) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                            _this.router.navigate(['/marketing/ct-marketing/voucher']);
                        }, function (err) {
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                        });
                    }
                };
                VoucherSharedComponent.prototype.themTatCaDichVu = function () {
                    var _this = this;
                    this.onValidateTatCaDichVuChoVoucher();
                    if (this.validationErrors != null && this.validationErrors.length === 0) {
                        if (this.voucher.LoaiChietKhau == this.loaiChietKhau.ChietKhauTheoSoTien) {
                            this.voucher.TiLeChietKhau = null;
                        }
                        else {
                            this.voucher.SoTienChietKhau = null;
                        }
                        this.apiService.post("Voucher", this.voucher).subscribe(function (res) {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                            _this.router.navigate(['/marketing/ct-marketing/voucher']);
                        }, function (err) {
                            err.ValidationErrors === null || err.ValidationErrors.length == 0 ? _this.notificationService.showError(err.Message) : _this.validationErrors = err.ValidationErrors;
                        });
                    }
                };
                VoucherSharedComponent.prototype.onDataBoundGridDichVuDonLe = function (event) {
                    if (!this.isAlreadyGetDataDichVuDonLe) {
                        if (event && event.Data.length > 0) {
                            this.voucher.lstVoucherChiTietMienGiam = event.Data;
                            this.isExistDataDichVuDonLe = true;
                        }
                        else {
                            this.isExistDataDichVuDonLe = false;
                        }
                        this.isAlreadyGetDataDichVuDonLe = true;
                    }
                    else {
                        this.setDataGridView();
                        this.gridDanhSachDichVu.gridDataSource = Object.assign({}, this.gridDataSource);
                        this.gridDanhSachDichVu.setDataSource();
                        this.checkTogetRadioDichVuItems();
                    }
                };
                VoucherSharedComponent.prototype.onDataBoundGridNhomDichVu = function (event) {
                    if (!this.isAlreadyGetDataNhomDichVu) {
                        if (event && event.Data.length > 0) {
                            this.voucher.lstVoucherChiTietMienGiamNhomDichVu = event.Data;
                            this.isExistDataNhomDichVu = true;
                        }
                        else {
                            this.isExistDataNhomDichVu = false;
                        }
                        this.isAlreadyGetDataNhomDichVu = true;
                    }
                    else {
                        this.setDataGridViewNhomDichVu();
                        this.gridDanhSachNhomDichVu.gridDataSource = Object.assign({}, this.gridNhomDichVuDataSource);
                        this.gridDanhSachNhomDichVu.setDataSource();
                        this.checkTogetRadioDichVuItems();
                    }
                };
                VoucherSharedComponent.prototype.keyUpDichVu = function (evt) {
                    if (evt.key == "Enter" && !this.isSelectingDichVu) {
                        if (this.isSelectingDichVu != true) {
                            this.themDichVuChoVoucher();
                        }
                        else {
                            this.isSelectingDichVu = false;
                        }
                    }
                };
                VoucherSharedComponent.prototype.keyUpNhomDichVu = function (evt) {
                    if (evt.key === 'Enter') {
                        this.themNhomDichVuChoVoucher();
                    }
                };
                VoucherSharedComponent.prototype.openComboboxDichVu = function (event) {
                    if (event) {
                        this.isSelectingDichVu = true;
                    }
                    else {
                        this.isSelectingDichVu = false;
                    }
                };
                return VoucherSharedComponent;
            }());
            VoucherSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDichVuTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "nhomDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiGiaTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "loaiGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chietKhauTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "chietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chietKhauNhomDichVuTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "chietKhauNhomDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaSauChietKhauTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "donGiaSauChietKhauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "ghiChuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuNhomDichVuTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "ghiChuNhomDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], VoucherSharedComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDanhSachDichVu', { static: false })
            ], VoucherSharedComponent.prototype, "gridDanhSachDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDanhSachNhomDichVu', { static: false })
            ], VoucherSharedComponent.prototype, "gridDanhSachNhomDichVu", void 0);
            VoucherSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voucher-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voucher-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voucher-shared.component.scss */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.scss")).default]
                })
            ], VoucherSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.scss": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.scss ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".float-left {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21hcmtldGluZy9jaHVvbmctdHJpbmgtbWFya2V0aW5nL3RoZW8tdm91Y2hlci92b3VjaGVyLXVwZGF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG1hcmtldGluZ1xcY2h1b25nLXRyaW5oLW1hcmtldGluZ1xcdGhlby12b3VjaGVyXFx2b3VjaGVyLXVwZGF0ZVxcdm91Y2hlci11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9tYXJrZXRpbmcvY2h1b25nLXRyaW5oLW1hcmtldGluZy90aGVvLXZvdWNoZXIvdm91Y2hlci11cGRhdGUvdm91Y2hlci11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbWFya2V0aW5nL2NodW9uZy10cmluaC1tYXJrZXRpbmcvdGhlby12b3VjaGVyL3ZvdWNoZXItdXBkYXRlL3ZvdWNoZXItdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb2F0LWxlZnQge1xuICBmbG9hdDogbGVmdDtcbn0iLCIuZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: VoucherUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherUpdateComponent", function () { return VoucherUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _voucher_shared_voucher_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../voucher-shared/voucher-shared.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var _voucher_in_popup_voucher_in_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../voucher-in-popup/voucher-in-popup.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var VoucherUpdateComponent = /** @class */ (function () {
                function VoucherUpdateComponent(router, dialog, notificationService) {
                    this.router = router;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                }
                VoucherUpdateComponent.prototype.ngOnInit = function () {
                };
                // onUpdated() {
                //     this.router.navigate(['/marketing/ct-marketing/voucher']);
                // }
                VoucherUpdateComponent.prototype.huy = function () {
                    // this.router.navigate(['/marketing/ct-marketing/voucher']);
                    this.router.navigateByUrl("/marketing/ct-marketing/voucher?holdQuery=true");
                };
                VoucherUpdateComponent.prototype.luu = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: "500px",
                        data: {
                            Title: "Xác nhận",
                            Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].MessConfirm, ["chỉnh sửa"]),
                        },
                    }).afterClosed().subscribe(function (res) {
                        if (res == "Yes") {
                            _this.shared.luu();
                        }
                    });
                };
                VoucherUpdateComponent.prototype.in = function () {
                    var data = this.shared.getSharedData();
                    if (!data.Ma || !data.Ten || !data.SoLuongPhatHanh || !data.TuNgay) {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["VoucherMarketingMessage"].MessageThongTinNotNull);
                    }
                    else {
                        this.dialog.open(_voucher_in_popup_voucher_in_popup_component__WEBPACK_IMPORTED_MODULE_6__["VoucherInPopupComponent"], {
                            disableClose: true,
                            width: '900px',
                            height: '550px',
                            data: data
                        })
                            .afterClosed()
                            .subscribe(function (res) {
                        });
                    }
                };
                return VoucherUpdateComponent;
            }());
            VoucherUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_voucher_shared_voucher_shared_component__WEBPACK_IMPORTED_MODULE_3__["VoucherSharedComponent"], { static: true })
            ], VoucherUpdateComponent.prototype, "shared", void 0);
            VoucherUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-voucher-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./voucher-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_5__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./voucher-update.component.scss */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.scss")).default]
                })
            ], VoucherUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.model.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.model.ts ***!
          \*********************************************************************************************/
        /*! exports provided: Voucher, VoucherChiTietMienGiam, LoaiDichVuVoucherMarketing, LoaiChietKhau, LoaiDichVuBenhVien, VoucherSearch, rangeDate, VoucherThongTinHTML */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Voucher", function () { return Voucher; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherChiTietMienGiam", function () { return VoucherChiTietMienGiam; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiDichVuVoucherMarketing", function () { return LoaiDichVuVoucherMarketing; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiChietKhau", function () { return LoaiChietKhau; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiDichVuBenhVien", function () { return LoaiDichVuBenhVien; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherSearch", function () { return VoucherSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherThongTinHTML", function () { return VoucherThongTinHTML; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Voucher = /** @class */ (function () {
                function Voucher() {
                    this.IsThemHoacLuuDichVu = false;
                    this.lstVoucherChiTietMienGiam = [];
                    this.lstVoucherChiTietMienGiamNhomDichVu = [];
                }
                return Voucher;
            }());
            var VoucherChiTietMienGiam = /** @class */ (function () {
                function VoucherChiTietMienGiam() {
                }
                return VoucherChiTietMienGiam;
            }());
            var LoaiDichVuVoucherMarketing;
            (function (LoaiDichVuVoucherMarketing) {
                LoaiDichVuVoucherMarketing[LoaiDichVuVoucherMarketing["DichVu"] = 1] = "DichVu";
                LoaiDichVuVoucherMarketing[LoaiDichVuVoucherMarketing["NhomDichVu"] = 2] = "NhomDichVu";
                LoaiDichVuVoucherMarketing[LoaiDichVuVoucherMarketing["TatCaDichVu"] = 3] = "TatCaDichVu";
            })(LoaiDichVuVoucherMarketing || (LoaiDichVuVoucherMarketing = {}));
            var LoaiChietKhau;
            (function (LoaiChietKhau) {
                LoaiChietKhau[LoaiChietKhau["ChietKhauTheoTiLe"] = 1] = "ChietKhauTheoTiLe";
                LoaiChietKhau[LoaiChietKhau["ChietKhauTheoSoTien"] = 2] = "ChietKhauTheoSoTien";
            })(LoaiChietKhau || (LoaiChietKhau = {}));
            var LoaiDichVuBenhVien;
            (function (LoaiDichVuBenhVien) {
                LoaiDichVuBenhVien[LoaiDichVuBenhVien["KhamBenh"] = 1] = "KhamBenh";
                LoaiDichVuBenhVien[LoaiDichVuBenhVien["KyThuat"] = 2] = "KyThuat";
                // GiuongBenh = 3
            })(LoaiDichVuBenhVien || (LoaiDichVuBenhVien = {}));
            var VoucherSearch = /** @class */ (function () {
                function VoucherSearch() {
                    this.SearchString = "";
                    this.RangeNgayApDung = new rangeDate();
                }
                return VoucherSearch;
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
            var VoucherThongTinHTML = /** @class */ (function () {
                function VoucherThongTinHTML(HostingName, Ten, Ma, SoLuong, MaSoTu, SoLuongPhatHanh) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (MaSoTu === void 0) { MaSoTu = null; }
                    if (SoLuongPhatHanh === void 0) { SoLuongPhatHanh = null; }
                    this.HostingName = HostingName;
                    this.Ten = Ten;
                    this.Ma = Ma;
                    this.SoLuong = SoLuong;
                    this.MaSoTu = MaSoTu;
                    this.SoLuongPhatHanh = SoLuongPhatHanh;
                }
                return VoucherThongTinHTML;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.module.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.module.ts ***!
          \**********************************************************************************************/
        /*! exports provided: VoucherModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherModule", function () { return VoucherModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm2015/index.js");
            /* harmony import */ var _voucher_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./voucher-routing.module */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-routing.module.ts");
            /* harmony import */ var _voucher_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./voucher.service */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.service.ts");
            /* harmony import */ var _voucher_list_voucher_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./voucher-list/voucher-list.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-list/voucher-list.component.ts");
            /* harmony import */ var _voucher_create_voucher_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./voucher-create/voucher-create.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-create/voucher-create.component.ts");
            /* harmony import */ var _voucher_shared_voucher_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./voucher-shared/voucher-shared.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-shared/voucher-shared.component.ts");
            /* harmony import */ var _voucher_update_voucher_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./voucher-update/voucher-update.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-update/voucher-update.component.ts");
            /* harmony import */ var _voucher_in_popup_voucher_in_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./voucher-in-popup/voucher-in-popup.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-in-popup/voucher-in-popup.component.ts");
            /* harmony import */ var _voucher_chi_tiet_popup_voucher_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./voucher-chi-tiet-popup/voucher-chi-tiet-popup.component */ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher-chi-tiet-popup/voucher-chi-tiet-popup.component.ts");
            var VoucherModule = /** @class */ (function () {
                function VoucherModule() {
                }
                return VoucherModule;
            }());
            VoucherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_voucher_list_voucher_list_component__WEBPACK_IMPORTED_MODULE_17__["VoucherListComponent"], _voucher_create_voucher_create_component__WEBPACK_IMPORTED_MODULE_18__["VoucherCreateComponent"], _voucher_shared_voucher_shared_component__WEBPACK_IMPORTED_MODULE_19__["VoucherSharedComponent"], _voucher_update_voucher_update_component__WEBPACK_IMPORTED_MODULE_20__["VoucherUpdateComponent"], _voucher_in_popup_voucher_in_popup_component__WEBPACK_IMPORTED_MODULE_21__["VoucherInPopupComponent"], _voucher_chi_tiet_popup_voucher_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_22__["VoucherChiTietPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_13__["GridModule"],
                        _voucher_routing_module__WEBPACK_IMPORTED_MODULE_15__["VoucherRoutingModule"]
                    ],
                    entryComponents: [
                        _voucher_in_popup_voucher_in_popup_component__WEBPACK_IMPORTED_MODULE_21__["VoucherInPopupComponent"],
                        _voucher_chi_tiet_popup_voucher_chi_tiet_popup_component__WEBPACK_IMPORTED_MODULE_22__["VoucherChiTietPopupComponent"]
                    ],
                    providers: [
                        _voucher_service__WEBPACK_IMPORTED_MODULE_16__["VoucherService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _voucher_service__WEBPACK_IMPORTED_MODULE_16__["VoucherService"] },
                    ],
                })
            ], VoucherModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.service.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/marketing/chuong-trinh-marketing/theo-voucher/voucher.service.ts ***!
          \***********************************************************************************************/
        /*! exports provided: VoucherService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherService", function () { return VoucherService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var VoucherService = /** @class */ (function (_super) {
                __extends(VoucherService, _super);
                function VoucherService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'Voucher';
                    return _this;
                }
                return VoucherService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            VoucherService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            VoucherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], VoucherService);
            /***/ 
        })
    }]);
//# sourceMappingURL=marketing-chuong-trinh-marketing-theo-voucher-voucher-module-es2015.js.map
//# sourceMappingURL=marketing-chuong-trinh-marketing-theo-voucher-voucher-module-es5.js.map
//# sourceMappingURL=marketing-chuong-trinh-marketing-theo-voucher-voucher-module-es5.js.map