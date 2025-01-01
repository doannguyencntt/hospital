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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-ton-kho-duoc-pham-duoc-pham-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js": 
        /*!***************************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-check-box.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-check-box.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z\" fill=\"currentColor\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.html": 
        /*!*********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.html ***!
          \*********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-grid [gridColumns]=\"gridColumns\" #gridPopup\n    urlGetData=\"TonKho/GetDataForGridNhapXuatTonChiTietAsync\"\n              urlGetTotalPage=\"TonKho/GetTotalPageForGridNhapXuatTonChiTietAsync\"\n         [useAddDeault]=\"false\" [headerTemplate]=\"headerTemplate\"\n         [gridColumns]=\"gridColumns\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\">\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n            <div fxFlex=\"87%\" style=\"margin: 10px 0 0 10px;\">\n                <span>\n                    <span style=\"font-weight: bold;\">Kho: </span> <span *ngIf=\"chiTietModel != null && chiTietModel != undefined\">{{chiTietModel.KhoDisplay}}</span>\n                </span>\n                <span style=\"margin-left: 20px;\">\n                    <span style=\"font-weight: bold;\">Dược phẩm: </span> <span *ngIf=\"chiTietModel != null && chiTietModel != undefined\">{{chiTietModel.DuocPhamDisplay}}</span>\n                </span>\n            </div>\n            <div class=\"text-right\" fxFlex=\"13%\" style=\"margin: 5px;\">\n                <button (click)=\"excelexport.save()\" type=\"button\" color=\"primary\" \n                    mat-raised-button mat-button>Xuất excel\n                </button>\n            </div>\n        </div>\n    </ng-template>\n\n</div>\n\n\n<kendo-excelexport [group]=\"group\" [data]=\"data\" [collapsible]=\"true\" fileName=\"TheKho.xlsx\" #excelexport>\n    <kendo-excelexport-column field=\"STT\" [locked]=\"true\" title=\"STT\" [width]=\"50\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"NgayDisplay\" title=\"Ngày\" [width]=\"200\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"MaChungTu\" title=\"Mã chứng từ\" width=\"100\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"Nhap\" title=\"Nhập\" width=\"100\">\n    </kendo-excelexport-column> \n    <kendo-excelexport-column field=\"Xuat\" title=\"Xuất\" width=\"100\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"Ton\" title=\"Tồn\" width=\"100\">\n    </kendo-excelexport-column>\n\n    <kendo-excelexport-column field=\"ChiTiet\" [hidden]=\"true\">\n        <ng-template kendoExcelExportGroupHeaderTemplate  let-value=\"value\">\n           Kho: {{value.kho}} - Dược phẩm: {{value.duocPham}}\n        </ng-template>\n    </kendo-excelexport-column>\n\n</kendo-excelexport>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.html": 
        /*!*********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.html ***!
          \*********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-icon-button (click)=\"close()\">\n            <mat-icon [icIcon]=\"icClose\"></mat-icon>\n        </button>\n    </div>\n    <div class=\"showPdf\">\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading==true\">\n            <h4 class=\"mb-3\">Đang load dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n\n</mat-dialog-content>\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\"></app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.html": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.html ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê',Path:''}\n                    ,{Title:'Dược Phẩm',Path:''}\n                    ,{Title:'Tồn Kho',Path:'/bao-cao/ton-kho/duoc-pham',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <kendo-tabstrip fxFlex=\"100%\" class=\" card -mt-15\" (tabSelect)=\"onTabSelect($event)\">\n            <kendo-tabstrip-tab [title]=\"'Cảnh Báo Tồn Kho'\" [selected]=\"tabCanhBaoTonKhoEnabled\" >\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #canhBaoTonKhoGrid [showStt]=\"true\" baseRoute=\"/danh-muc/bao-cao/ton-kho/duoc-pham\"\n                            [gridColumns]=\"gridColumnsCanhBaoTonKho\" [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                            [headerTemplate]=\"headerTemplate\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                            [checkboxAble]=\"false\" heightToolbar=\"190\" [lazyLoadPage]=\"true\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringCanhBaoTonKho\"\n                            [searchString]=\"searchInfo.searchString\" (extOnDataBound)=\"onDataBound($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n            <kendo-tabstrip-tab [title]=\"\" [selected]=\"tabTongHopTonKhoEnabled\" >\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #tongHopTonKhoGrid [showStt]=\"true\"  baseRoute=\"/danh-muc/bao-cao/ton-kho/duoc-pham\"\n                            [gridColumns]=\"gridColumnsTongHopTonKho\" [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                            [headerTemplate]=\"headerTemplate1\" urlGetData=\"TonKho/GetDataForGridTatCaAsync\"\n                            (extOnDataBound)=\"onDataBound($event)\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringTongHopTonKho\"\n                            urlGetTotalPage=\"TonKho/GetTotalPageForGridTatCaAsync\" [useHeaderDefault]=\"false\"\n                            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" heightToolbar=\"190\">\n                        </app-grid>\n                    </div>\n                   \n                </ng-template>\n                <ng-template kendoTabTitle>\n                    <span style=\"white-space: nowrap;\">\n                        Tổng hợp tồn kho <span style=\"color:red;font-weight: bold;text-align: center;\">Khả dụng</span>\n                    </span>\n                </ng-template>\n            </kendo-tabstrip-tab>\n\n            <kendo-tabstrip-tab [title]=\"'Nhập xuất tồn kho'\" [selected]=\"tabNhapXuatTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #nhapXuatTonKhoGrid [showStt]=\"true\" baseRoute=\"/danh-muc/bao-cao/ton-kho/duoc-pham\" \n                            [gridColumns]=\"gridColumnsTonKhoDuocPham\" [documentType]=\"documentType\"\n                            [useAddDeault]=\"true\" [headerTemplate]=\"headerNhapXuatTonTemplate\" [groups]=\"groups\"\n                            urlGetData=\"TonKho/GetDataForGridNhapXuatTonAsync\" (extOnDataBound)=\"onDataBound($event)\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringNhapXuatTonKho\"\n                            urlGetTotalPage=\"TonKho/GetTotalPageForGridNhapXuatTonAsync\" [useHeaderDefault]=\"false\"\n                            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" heightToolbar=\"190\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n        </kendo-tabstrip>\n\n    </vex-page-layout-content>\n</vex-page-layout>\n<ng-template #tinhTrangCanhBaoTemplate let-dataItem>\n    <span style=\"color: #f44336;\" *ngIf=\"dataItem.CanhBao=='Hết tồn kho'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n    <span style=\"color: #673ab7;\" *ngIf=\"dataItem.CanhBao=='Tồn kho quá nhiều'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n    <span style=\"color: #ff9800;\" *ngIf=\"dataItem.CanhBao=='Sắp hết tồn kho'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n</ng-template>\n\n<ng-template #theKhoTemplate let-dataItem>\n    <button (click)=\"xem(dataItem.Id)\" type=\"button\" color=\"primary\" style=\"text-align: center;\" mat-raised-button\n        mat-button>Xem\n    </button>\n</ng-template>\n\n\n<ng-template #actionTongHopTonKhoTemplate let-dataItem>\n    <button *ngIf=\"searchInfo2.KhoId!=null&&searchInfo2.KhoId>0\" (click)=\"suaTonKho(dataItem)\" type=\"button\"\n        color=\"primary\" style=\"text-align: center;\" mat-raised-button mat-button>Chi tiết tồn kho\n    </button>\n</ng-template>\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #nxTonDauKyTemplate let-dataItem>\n    {{dataItem.TonDauKy | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #nxNhapTrongKyTemplate let-dataItem>\n    {{dataItem.NhapTrongKy | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #nxXuatTrongKyTemplate let-dataItem>\n    {{dataItem.XuatTrongKy | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #nxTonCuoiKyTemplate let-dataItem>\n    {{dataItem.TonCuoiKy | number:'1.0':'vi-VN' }}\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"Kho\" fxFlex=\"300px\" fxFlex.sm=\"auto\" [(model)]=\"searchInfo.KhoId\"\n                (modelChange)=\"KhoCanhBaoChange($event)\" [modelText]=\"searchInfo.TenKho\"\n                label=\"Chọn Kho\" url=\"TonKho/GetKhoTatCa\" popupSettings=\"\" class=\"mt-1 on-header\"\n                style=\"margin-left: 5px;\" [autoSelectFirstItem]=\"true\" [bind]=\"true\" (selectionChange)=\"KhoChange($event)\">\n            </app-combobox>\n            <app-combobox id=\"CanhBao\" fxFlex=\"300px\" fxFlex.sm=\"auto\"\n                [(model)]=\"searchInfo.CanhBaoId\" (selectionChange)=\"CanhBaoChange($event)\"\n                [modelText]=\"searchInfo.LoaiCanhBao\" label=\"Cảnh báo\" url=\"TonKho/GetCanhBao\"\n                popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\" [autoSelectFirstItem]=\"true\" [bind]=\"true\">\n            </app-combobox>\n            <div class=\"bg-card rounded-full border px-4\" style=\"margin-left: 20px;\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                style=\"margin-top: 2px; margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\"\n                    class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                    placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"searchString\"\n                    [(ngModel)]=\"searchInfo.searchString\" (keyup)=\"onKey($event)\"\n                    (ngModelChange)=\"searchChangeCanhBaoTonKho()\" />\n            </div>\n            <button class=\"ml-4\" style=\"margin-left: 20px;\" fxFlex=\"none\" fxHide.gt-xs\n                mat-icon-button type=\"button\" (click)=\"searchCanhBaoTonKho()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelCanhBaoTonKho()\" type=\"button\" color=\"primary\"\n                [disabled]=\"IsData==false\" mat-raised-button mat-button>Xuất Excel\n            </button>\n            <button (click)=\"showPopupBaoCaoTonKho()\" type=\"button\" color=\"primary\"\n                [disabled]=\"IsData==false\" class=\"ml-1\" mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!IsData\" type=\"PDF\"\n                [showInMenuItem]=\"false\" [showIconPrint]=\"false\" [bodyComponent]=\"this\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #headerTemplate1>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                fxLayoutAlign=\"start center\">\n                <app-combobox id=\"Kho\" fxFlex=\"300px\" fxFlex.sm=\"auto\" [(model)]=\"searchInfo2.KhoId\"\n                (modelChange)=\"KhoTonKhoChange($event)\" (selectionChange)=\"KhoChange2($event)\" [modelText]=\"searchInfo2.TenKho\"\n                    label=\"Chọn Kho\" url=\"TonKho/GetKhoTatCa\"  popupSettings=\"\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                    class=\"mt-1 on-header\" style=\"margin-top: 21px;margin-left: 5px;\" >\n                </app-combobox>\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n                    fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                    style=\"margin-top: 2px;margin-left: 5px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\"\n                        class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                        placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"searchString\"\n                        [(ngModel)]=\"searchInfo2.searchString\" (keyup)=\"onKey2($event)\"\n                        (ngModelChange)=\"searchChangeTongHopTonKho()\" />\n                </div>\n                <button class=\"ml-4\" style=\"margin-left: 20px;\" fxFlex=\"none\" fxHide.gt-xs\n                    mat-icon-button type=\"button\" (click)=\"searchTonKho2()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelTongHopTonKho()\" type=\"button\" color=\"primary\"\n                [disabled]=\"IsData==false\" mat-raised-button mat-button>Xuất Excel\n            </button>\n            <button (click)=\"showPopupTongHopTonKho()\" type=\"button\" color=\"primary\" class=\"ml-1\"\n                [disabled]=\"IsData==false\" mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In \" [isDisable]=\"!IsData\" type=\"PDF\"\n                [showInMenuItem]=\"false\" [showIconPrint]=\"false\" [bodyComponent]=\"this\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #headerNhapXuatTonTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"Kho\" fxFlex=\"300px\" fxFlex.sm=\"auto\" [(model)]=\"searchInfo3.KhoId\"\n                (modelChange)=\"KhoChange3($event)\" [modelText]=\"searchInfo3.TenKho\" label=\"Chọn Kho\"\n                url=\"TonKho/GetKhoTatCa\"  popupSettings=\"\" [autoSelectFirstItem]=\"true\" [bind]=\"true\" class=\"mt-1 on-header\"\n                style=\"margin-left: 5px;\">\n            </app-combobox>\n            <app-daterangepicker style=\"margin-left: 5px;\" id=\"Daterange\" fxFlex=\"300px\"\n                fxFlex.sm=\"auto\" [(model)]=\"searchInfo3.RangeDate\" label=\"Từ ngày - Đến ngày\"\n                (keyup)=\"onKey3($event)\" [required]=\"true\" (modelChange)=\"changRange($event)\"\n                class=\"mt-1 on-header\">\n            </app-daterangepicker>\n            <div class=\"bg-card rounded-full border px-4\" style=\"margin-left: 20px;\" fxFlex=\"400px\"\n                fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                style=\"margin-top: 2px; margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\"\n                    class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                    placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"Description\"\n                    [(ngModel)]=\"searchInfo3.Description\" (keyup)=\"onKey3($event)\"\n                    (ngModelChange)=\"searchChange()\" />\n            </div>\n            <button class=\"ml-4\" style=\"margin-left: 20px;\" fxFlex=\"none\" fxHide.gt-xs\n                mat-icon-button type=\"button\" (click)=\"searchTonKho3()\">\n                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n            </button>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelNhapXuatTonKho()\" type=\"button\" color=\"primary\"\n                mat-raised-button mat-button>Xuất Excel\n            </button>\n            <button (click)=\"showPopup3()\" type=\"button\" color=\"primary\" class=\"ml-1\"\n                mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In \" type=\"PDF\" [showInMenuItem]=\"false\"\n                [showIconPrint]=\"false\" [bodyComponent]=\"this\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n<ng-template #templateHeaderTemplate let-column=\"column\" let-columnIndex=\"columnIndex\">\n    SỐ LƯỢNG TỒN <span style=\"color: red;\"> KHẢ DỤNG</span>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-icon-button (click)=\"close()\">\n            <mat-icon [icIcon]=\"icClose\"></mat-icon>\n        </button>\n    </div>\n    <div class=\"showPdf2\">\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading==true\">\n            <h4 class=\"mb-3\">Đang load dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n\n</mat-dialog-content>\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\"></app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.html": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.html ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n        <button type=\"button\" mat-icon-button (click)=\"close()\">\n            <mat-icon [icIcon]=\"icClose\"></mat-icon>\n        </button>\n    </div>\n    <div class=\"showPdf\">\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading==true\">\n            <h4 class=\"mb-3\">Đang load dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n\n</mat-dialog-content>\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\"></app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.html": 
        /*!*********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.html ***!
          \*********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <div style=\"font: 500 18px/26px var(--font)\">CHI TIẾT DƯỢC PHẨM TỒN KHO</div>\n  <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <app-grid #gridDuocPhamTonKho [gridColumns]=\"gridColumns\" urlGetData=\"TonKho/GetChiTietTonKhoCuaDuocPham\"\n    [useAddDeault]=\"false\" [headerTemplate]=\"headerTemplate\" [gridColumns]=\"gridColumns\" height=\"500\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"true\"\n    (extOnDataBound)=\"extOnDataBound($event)\">\n  </app-grid>\n\n  <ng-template #headerTemplate>\n    <div style=\"border-bottom: 1px solid #ccc;\">\n      <div fxFlex=\"100%\" style=\"margin: 10px 20px 0 10px;\">\n        <span>\n          <span style=\"font-weight: bold;\">Kho: </span> <span class=\"red\">{{duocPham.data.kho.TenKho}}</span>\n        </span>\n        <!-- <span style=\"margin-left: 20px;\">\n          <span style=\"font-weight: bold;\">Dược phẩm: </span> <span\n            class=\"red\">{{duocPham.data.dataItem.DuocPham}}</span>\n        </span> -->\n        <!-- [queryInfo]=\"{ParameterDependencies:'{DuocPhamId:' + capNhatTonKhoItem.DuocPhamId +'}', Take: 50}\" -->\n        <app-combobox [disabled]=\"true\" fxFlex=\"25%\" [(model)]=\"capNhatTonKhoItem.DuocPhamId\" [required]=\"true\"\n          [modelText]=\"capNhatTonKhoItem.DuocPham\" id=\"DuocPhamId\" label=\"Tên Dược Phẩm\"\n          url=\"TonKho/GetDuocPhamBenhVien\" [validationerror]=\"'DuocPhamId' | validationerror:validationErrors\"\n          [templateHeader]=\"duocPhamTemplateHeader\" [template]=\"duocPhamTemplate\" class=\"item-no-padding\">\n          <ng-template #duocPhamTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n              <tr>\n                <th width=\"40%\">Hoạt Chất</th>\n                <th>Tên</th>\n              </tr>\n            </table>\n          </ng-template>\n          <ng-template #duocPhamTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n              <tr>\n                <td width=\"40%\">{{dataItem.HoatChat}}</td>\n                <td>{{dataItem.Ten}}</td>\n              </tr>\n            </table>\n          </ng-template>\n        </app-combobox>\n        <span style=\"margin-left: 20px;\">\n          <span style=\"font-weight: bold;\">Đơn vị tính: </span> <span\n            class=\"red\">{{duocPham.data.dataItem.DonViTinh}}</span>\n        </span>\n        <app-textbox [disabled]=\"true\" label=\"Số đăng ký\"\n          style=\"width: 200px;display: inline-block;margin-left: 15px;margin-bottom: 10px;\"\n          [(model)]=\"duocPham.data.dataItem.SoDangKy\"\n          [validationerror]=\"'SoDangKy' | validationerror:validationErrors\"> </app-textbox>\n      </div>\n    </div>\n  </ng-template>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n  <button mat-button mat-dialog-close (click)=\"close()\">Hủy</button>\n  <!-- <button mat-raised-button mat-button color=\"primary\" (click)=\"save()\" cdkFocusInitial>Lưu</button> -->\n</mat-dialog-actions>\n\n<ng-template #hanSuSungTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-datepicker [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" class=\"no-label\" label=\" \" style=\"width: 100%;\"\n    [(model)]=\"dataItem.HanSuDung\" [required]=\"true\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].HanSuDung' | validationerror:validationErrors\">\n  </app-datepicker>\n</ng-template>\n\n<ng-template #soLuongTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.Loai==1\" class=\"no-label\" [step]=\"1\" label=\" \" style=\"width: 100%;\"\n    [min]=\"dataItem.SoLuongDaXuat\" [spinners]=\"true\" [(model)]=\"dataItem.SoLuong\" [required]=\"true\" [decimals]=\"2\" format=\"n2\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].DuocPhamBenhVienPhanNhomId' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n  <span *ngIf=\"dataItem.Loai!=1\">{{dataItem.SoLuong}}</span>\n</ng-template>\n<ng-template #tonFooterTemplate let-dataItem>\n  <p style=\"color: blue; font-weight: bold;\">\n    <span *ngIf=\"tongTonKho==null\">Đang tính tồn....</span>\n    <span *ngIf=\"tongTonKho!=null\">{{tongTonKho}}</span>\n</ng-template>\n\n<ng-template #loaiFooterTemplate let-dataItem>\n  <span>Tồn:</span>\n</ng-template>\n\n<ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n  <span>{{rowIndex+1}}</span>\n</ng-template>\n\n<ng-template #maChungTuTemplate let-dataItem>\n  <a *ngIf=\"dataItem.ThongTinBooking!=null && dataItem.ThongTinBooking!=''\"  kendoTooltip title=\"{{dataItem.ThongTinBooking}}\">{{dataItem.MaChungTu}}</a>\n  <span *ngIf=\"dataItem.ThongTinBooking==null || dataItem.ThongTinBooking==''\">{{dataItem.MaChungTu}}</span>\n</ng-template>\n\n<ng-template #duocPhamBenhVienPhanNhomTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-combobox-tree [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" class=\"no-label\" label=\" \" popupSettings=\"null\"\n    id=\"DuocPhamBenhVienPhanNhomId\" bind=\"true\" [(model)]=\"dataItem.DuocPhamBenhVienPhanNhomId\"    \n    [data]=\"duocPhamPhanNhomDataSource\"\n    #cmbNhom [required]=\"true\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].DuocPhamBenhVienPhanNhomId' | validationerror:validationErrors\">\n  </app-combobox-tree>\n</ng-template>\n<ng-template #donGiaTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" id=\"donGiaUuDai\" [max]=\"99999999999999999\" class=\"no-label\"\n    [(model)]=\"dataItem.DonGiaNhap\" [min]=\"0\" label=\" \" [decimals]=\"2\" format=\"n2\" [required]=\"true\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].DonGiaNhap' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n</ng-template>\n\n<ng-template #vATTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"!dataItem.LaVatTuBHYT && dataItem.Loai === 1\" class=\"no-label\" [step]=\"1\" label=\" \"\n    style=\"width: 100%;\" [max]=\"999\" [min]=\"0\" required=\"true\" [(model)]=\"dataItem.VAT\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].VAT' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n\n  <span *ngIf=\"dataItem.LaVatTuBHYT\"> {{dataItem.VAT}}</span>\n</ng-template>\n\n<ng-template #tiLeBHYTThanhToanTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.LaVatTuBHYT && dataItem.Loai === 1\" class=\"no-label\" [step]=\"1\" label=\" \"\n    style=\"width: 100%;\" [max]=\"100\" [min]=\"1\" required=\"true\" [(model)]=\"dataItem.TiLeBHYTThanhToan\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].TiLeBHYTThanhToan' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n\n  <span *ngIf=\"!dataItem.LaVatTuBHYT\"> {{dataItem.TiLeBHYTThanhToan}}</span>\n</ng-template>\n\n<ng-template #maRefTemplate let-dataItem>\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" [(model)]=\"dataItem.MaRef\" maxlength=\"200\" label=\" \" class=\"no-label\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.MaRef}}</span>\n</ng-template>\n\n<ng-template #maVachTemplate let-dataItem>\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" [(model)]=\"dataItem.MaVach\" maxlength=\"100\" label=\" \" class=\"no-label\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.MaVach}}</span>\n</ng-template>\n\n<ng-template #soLoTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" required=\"true\" [(model)]=\"dataItem.SoLo\" maxlength=\"50\" label=\" \"\n    class=\"no-label\"\n    [validationerror]=\"'CapNhatTonKhoDuocPhamChiTiets['+rowIndex+'].SoLo' | validationerror:validationErrors\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.SoLo}}</span>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.scss": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.scss ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vZHVvYy1waGFtL2R1b2MtcGhhbS1uaGEteHVhdC10b24ta2hvLXhlbS1jaGktdGlldC9kdW9jLXBoYW0tbmhhLXh1YXQtdG9uLWtoby14ZW0tY2hpLXRpZXQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.ts": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.ts ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: DuocPhamNhaXuatTonKhoXemChiTietComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamNhaXuatTonKhoXemChiTietComponent", function () { return DuocPhamNhaXuatTonKhoXemChiTietComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _duoc_pham_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../duoc-pham.model */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.model.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            var DuocPhamNhaXuatTonKhoXemChiTietComponent = /** @class */ (function () {
                function DuocPhamNhaXuatTonKhoXemChiTietComponent(dialogRef, apiService, dialog, cd, dataR) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.cd = cd;
                    this.dataR = dataR;
                    this.gridColumns = [];
                    this.model = dataR.Model;
                }
                DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype.ngOnInit = function () {
                    this.gridPopup.urlGetData = "TonKho/GetDataForGridNhapXuatTonChiTietAsync";
                    this.gridPopup.urlGetTotalPage = "TonKho/GetTotalPageForGridNhapXuatTonChiTietAsync";
                    this.getChiTiet(this.model.KhoId, this.model.DuocPhamId);
                    this.addQuery();
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50, Sortable: true },
                        { Field: "NgayDisplay", Title: "Ngày", Width: 100, Sortable: true },
                        { Field: "MaChungTu", Title: "Mã chứng từ", Width: 100, Sortable: true },
                        { Field: "Nhap", Title: "Nhập", Width: 100, Sortable: true },
                        { Field: "Xuat", Title: "Xuất", Width: 100, Sortable: true },
                        { Field: "Ton", Title: "Tồn", Width: 100, Sortable: true },
                    ];
                };
                DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype.ngAfterViewInit = function () {
                    //this.cd.detectChanges();
                    //this.gridPopup.search();
                };
                DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype.getChiTiet = function (khoId, duocPhamId) {
                    var _this = this;
                    this.chiTietModel = new _duoc_pham_model__WEBPACK_IMPORTED_MODULE_4__["chiTietItem"]();
                    this.chiTietModel.DuocPhamId = duocPhamId;
                    this.chiTietModel.KhoId = khoId;
                    this.apiService.post("TonKho/GetDuocPhamAndKhoName/", this.chiTietModel).subscribe(function (resultData) {
                        if (resultData != null) {
                            _this.chiTietModel = resultData;
                            if (_this.chiTietModel.KhoDisplay == undefined || _this.chiTietModel.KhoDisplay == null || _this.chiTietModel.KhoDisplay == "") {
                                _this.chiTietModel.KhoDisplay = "Tất cả";
                            }
                            //console.log("addData = ", this.data);
                        }
                    });
                };
                DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype.addData = function (queryString) {
                    var _this = this;
                    //
                    this.aggregates = [{ field: 'UnitPrice', aggregate: 'sum' }];
                    this.group = [{
                            field: 'Discontinued',
                            aggregates: this.aggregates
                        }];
                    //
                    var model = new _duoc_pham_model__WEBPACK_IMPORTED_MODULE_4__["queryInfo"]();
                    model.AdditionalSearchString = queryString;
                    model.Sort = this.gridPopup.sort;
                    //console.log("addData = ", model);
                    this.apiService.post("TonKho/GetDataForGridNhapXuatTonChiTietAsync/", model).subscribe(function (resultData) {
                        if (resultData != null) {
                            _this.data = resultData.Data;
                            _this.data.forEach(function (element) {
                                element.ChiTiet = { kho: _this.chiTietModel.KhoDisplay, duocPham: _this.chiTietModel.DuocPhamDisplay };
                            });
                            _this.group = [{
                                    field: 'ChiTiet'
                                }];
                            _this.data = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__["process"])(_this.data, {
                                group: _this.group
                            }).data;
                            //console.log("addData = ", this.data);
                            //
                        }
                    });
                };
                DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype.addQuery = function () {
                    var KhoQueryString = this.model.KhoId;
                    var DuocPhamQueryString = this.model.DuocPhamId;
                    var RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.model.RangeDate.startDate) + "\"" + ",\"DenNgay\":" + "\"" + this.ConvertDateTime(this.model.RangeDate.endDate) + "\"" + "}";
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"DuocPhamId\":" + DuocPhamQueryString + ",\"RangeDate\":" + RangeDateQueryString + "}";
                    this.gridPopup.additionalSearchString = queryString;
                    //console.log(this.gridPopup);
                    this.addData(queryString);
                };
                DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype.ConvertDateTime = function (datime) {
                    //console.log("ConvertDateTime = ",datime);
                    var date = new Date(datime);
                    var year = date.getFullYear();
                    var rawMonth = parseInt(String(date.getMonth())) + 1;
                    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
                    var rawDay = parseInt(String(date.getDate()));
                    var day = rawDay < 10 ? '0' + rawDay : rawDay;
                    return year + '-' + month + '-' + day;
                };
                return DuocPhamNhaXuatTonKhoXemChiTietComponent;
            }());
            DuocPhamNhaXuatTonKhoXemChiTietComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPopup', { static: true })
            ], DuocPhamNhaXuatTonKhoXemChiTietComponent.prototype, "gridPopup", void 0);
            DuocPhamNhaXuatTonKhoXemChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-nha-xuat-ton-kho-xem-chi-tiet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuocPhamNhaXuatTonKhoXemChiTietComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.scss": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.scss ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vZHVvYy1waGFtL2R1b2MtcGhhbS1uaGFwLXh1YXQtdG9uLWtoby1wb3B1cC9kdW9jLXBoYW0tbmhhcC14dWF0LXRvbi1raG8tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.ts": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.ts ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: DuocPhamNhapXuatTonKhoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamNhapXuatTonKhoPopupComponent", function () { return DuocPhamNhapXuatTonKhoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuocPhamNhapXuatTonKhoPopupComponent = /** @class */ (function () {
                function DuocPhamNhapXuatTonKhoPopupComponent(dialogRef, apiService, dialog, data) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.data = data;
                    this.loading = false;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    console.log("DuocPhamNhapXuatTonKhoPopupComponent = ", data.Model, data);
                    this.searchString = data.Model;
                }
                DuocPhamNhapXuatTonKhoPopupComponent.prototype.ngOnInit = function () {
                    this.GetHTML();
                    //this.getSharedPrintForm();
                };
                DuocPhamNhapXuatTonKhoPopupComponent.prototype.GetHTML = function () {
                    var _this = this;
                    //console.log("GetHTML = ", this.searchString)
                    this.loading = true;
                    var KhoQueryString = null;
                    var SearchQueryString = null;
                    var RangeDateQueryString = null;
                    var SortQueryString = null;
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (this.searchString.Description != null) {
                        SearchQueryString = "\"" + this.searchString.Description + "\"";
                    }
                    if (this.searchString.RangeDate != null) {
                        //RangeDateQueryString = "\"" + this.searchInfo3.RangeDate + "\"";
                        RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.searchString.RangeDate.startDate) + "\"" + ",\"DenNgay\":" + "\"" + this.ConvertDateTime(this.searchString.RangeDate.endDate) + "\"" + "}";
                    }
                    if (this.searchString.Sort != null) {
                        SortQueryString = JSON.stringify(this.searchString.Sort);
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"Description\":" + SearchQueryString + ",\"RangeDate\":" + RangeDateQueryString + ",\"Sort\":" + SortQueryString + "}";
                    this.apiService.post("TonKho/GetXuatNhapTonKhoHTML?search=" + queryString).subscribe(function (resultData) {
                        if (resultData != null) {
                            var html = resultData;
                            $(".a").show();
                            $(".showPdf").append(html);
                        }
                        _this.loading = false;
                    }, function (err) {
                    });
                };
                DuocPhamNhapXuatTonKhoPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                DuocPhamNhapXuatTonKhoPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var KhoQueryString = null;
                    var SearchQueryString = null;
                    var RangeDateQueryString = null;
                    var SortQueryString = null;
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (this.searchString.Description != null) {
                        SearchQueryString = "\"" + this.searchString.Description + "\"";
                    }
                    if (this.searchString.RangeDate != null) {
                        //RangeDateQueryString = "\"" + this.searchInfo3.RangeDate + "\"";
                        RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.searchString.RangeDate.startDate) + "\"" + ",\"DenNgay\":" + "\"" + this.ConvertDateTime(this.searchString.RangeDate.endDate) + "\"" + "}";
                    }
                    if (this.searchString.Sort != null) {
                        SortQueryString = JSON.stringify(this.searchString.Sort);
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"Description\":" + SearchQueryString + ",\"RangeDate\":" + RangeDateQueryString + ",\"Sort\":" + SortQueryString + "}";
                    return new Promise(function (resolve) {
                        _this.apiService.post("TonKho/GetXuatNhapTonKhoHTML?search=" + queryString).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                };
                DuocPhamNhapXuatTonKhoPopupComponent.prototype.ConvertDateTime = function (datime) {
                    //console.log("ConvertDateTime = ",datime);
                    var date = new Date(datime);
                    var year = date.getFullYear();
                    var rawMonth = parseInt(String(date.getMonth())) + 1;
                    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
                    var rawDay = parseInt(String(date.getDate()));
                    var day = rawDay < 10 ? '0' + rawDay : rawDay;
                    return year + '-' + month + '-' + day;
                };
                return DuocPhamNhapXuatTonKhoPopupComponent;
            }());
            DuocPhamNhapXuatTonKhoPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DuocPhamNhapXuatTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-nhap-xuat-ton-kho-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-nhap-xuat-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-nhap-xuat-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], DuocPhamNhapXuatTonKhoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-routing.module.ts": 
        /*!************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-routing.module.ts ***!
          \************************************************************************************/
        /*! exports provided: DuocPhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamRoutingModule", function () { return DuocPhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _duoc_pham_ton_kho_list_duoc_pham_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var routes = [{
                    path: '',
                    component: _duoc_pham_ton_kho_list_duoc_pham_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_5__["DuocPhamTonKhoListComponent"],
                    data: {
                        title: 'Danh sách tồn kho dược phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].DuocPhamTonKho,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }];
            var DuocPhamRoutingModule = /** @class */ (function () {
                function DuocPhamRoutingModule() {
                }
                return DuocPhamRoutingModule;
            }());
            DuocPhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuocPhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.scss": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.scss ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vZHVvYy1waGFtL2R1b2MtcGhhbS10b24ta2hvLWxpc3QvZHVvYy1waGFtLXRvbi1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: DuocPhamTonKhoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamTonKhoListComponent", function () { return DuocPhamTonKhoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _sua_duoc_pham_ton_kho_popup_sua_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
            /* harmony import */ var _duoc_pham_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../duoc-pham.model */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.model.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _duoc_pham_ton_kho_popup_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.ts");
            /* harmony import */ var _duoc_pham_ton_kho_popup_ton_kho_duoc_pham_ton_kho_popup_ton_kho_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.ts");
            /* harmony import */ var _duoc_pham_nhap_xuat_ton_kho_popup_duoc_pham_nhap_xuat_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.ts");
            /* harmony import */ var _duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var DuocPhamTonKhoListComponent = /** @class */ (function () {
                function DuocPhamTonKhoListComponent(authService, dialog, notificationService, apiService, cd) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.cd = cd;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    //defaultAdditionalSearchString = '{"KhoId":1,"CanhBao":"Tất cả"}';
                    this.defaultAdditionalSearchString = null;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.expression = false;
                    this.index = 0;
                    this.IsData = false;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icBlock = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.gridColumnsCanhBaoTonKho = [];
                    this.gridColumnsTongHopTonKho = [];
                    this.gridColumnsTonKhoDuocPham = [];
                    this.searchString = null;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControl"]();
                    this.tabCanhBaoTonKhoEnabled = true;
                    this.tabTongHopTonKhoEnabled = false;
                    this.tabNhapXuatTonKhoEnabled = false;
                    this.defaultAdditionalSearchStringCanhBaoTonKho = '{"KhoId":0,"SearchString":null,"CanhBao":"Tất cả","Sort":null}';
                    this.defaultAdditionalSearchStringTongHopTonKho = '{"KhoId":0,"SearchString":null,"Sort":null}';
                    this.defaultAdditionalSearchStringNhapXuatTonKho = '{"KhoId":0,"SearchString":null,"RangeDate":{"TuNgay":null,"DenNgay":null},"Sort":null}';
                    this.searchPlaceHolder = 'Tìm kiếm theo tên dược phẩm...';
                    this.groups = [{ field: 'TenDuocPhamBenhVienPhanNhom' }];
                    this.confrim = null;
                }
                DuocPhamTonKhoListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].DuocPhamTonKho;
                    this.searchInfo = new _duoc_pham_model__WEBPACK_IMPORTED_MODULE_19__["searchTonKho"]();
                    this.searchInfo2 = new _duoc_pham_model__WEBPACK_IMPORTED_MODULE_19__["searchTonKho"]();
                    this.searchInfo3 = new _duoc_pham_model__WEBPACK_IMPORTED_MODULE_19__["searchNhapXuatTonKho"]();
                    this.defaultAdditionalSearchStringCanhBaoTonKho = '{"KhoId":0,"SearchString":null,"CanhBao":"Tất cả","Sort":null}';
                    this.defaultAdditionalSearchStringTongHopTonKho = '{"KhoId":0,"SearchString":null,"Sort":null}';
                    this.defaultAdditionalSearchStringNhapXuatTonKho = '{"KhoId":0,"SearchString":null,"RangeDate":{"TuNgay":null,"DenNgay":null},"Sort":null}';
                    this.gridColumnsCanhBaoTonKho = [
                        { Field: 'DuocPham', Title: 'Dược phẩm', Width: 300, Sortable: true },
                        { Field: 'HoatChat', Title: 'Hoạt chất', MinWidth: 200, Sortable: true },
                        { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
                        { Field: 'PhanLoai', Title: 'Phân Nhóm', Width: 200, Sortable: true },
                        { Field: 'DonViTinhName', Title: 'Đơn vị tính', Width: 120, Sortable: true },
                        { Field: 'SoLuongTon', Title: 'Số lượng tồn', Width: 150, Sortable: true },
                        { Field: 'CanhBao', Title: 'Cảnh báo', Width: 120, Sortable: true, Template: this.tinhTrangCanhBaoTemplate },
                    ];
                    this.gridColumnsTongHopTonKho = [
                        { Field: 'DuocPham', Title: 'Dược phẩm', Width: 300, Sortable: true },
                        { Field: 'HoatChat', Title: 'Hoạt chất', MinWidth: 200, Sortable: true },
                        { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
                        { Field: 'PhanLoai', Title: 'Phân Nhóm', Width: 200, Sortable: true },
                        { Field: 'DonViTinhName', Title: 'Đơn vị tính', Width: 200, Sortable: true },
                        { Field: 'SoLuongTon', Title: 'Số lượng tồn Khả dụng', Width: 200, Sortable: true, TemplateHeader: this.templateHeaderTemplate },
                        { Field: 'GiaTriSoLuongTonFormat', Title: 'Giá trị tồn', Width: 200, Sortable: true },
                        { Field: 'Action', Title: '', Width: 120, Template: this.actionTongHopTonKhoTemplate, Hidden: !this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].CapNhatDuocPhamTonKho, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_27__["SecurityOperation"].Update) },
                    ];
                    this.gridColumnsTonKhoDuocPham = [
                        { Field: 'Ma', Title: 'Mã dược phẩm', Width: 100, Sortable: true, ShowTooltip: true },
                        { Field: 'DuocPham', Title: 'Dược phẩm', Width: 300, Sortable: true, ShowTooltip: true },
                        { Field: 'HoatChat', Title: 'Hoạt chất', Width: 200, Sortable: true, ShowTooltip: true },
                        { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
                        { Field: "TenDuocPhamBenhVienPhanNhom", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'DonViTinhDisplay', Title: 'Đơn vị tính', Width: 100, Sortable: true },
                        { Field: 'TonDauKy', Title: 'Tồn đầu kỳ', Width: 150, Sortable: true, Template: this.nxTonDauKyTemplate },
                        { Field: 'NhapTrongKy', Title: 'Nhập trong kỳ', Width: 150, Sortable: true, Template: this.nxNhapTrongKyTemplate },
                        { Field: 'XuatTrongKy', Title: 'Xuất trong kỳ', Width: 150, Sortable: true, Template: this.nxXuatTrongKyTemplate },
                        { Field: 'TonCuoiKy', Title: 'Tồn cuối kỳ', Width: 150, Sortable: true, Template: this.nxTonCuoiKyTemplate },
                        { Field: 'TheKho', Title: '', Width: 110, Template: this.theKhoTemplate }
                    ];
                };
                DuocPhamTonKhoListComponent.prototype.ngAfterContentChecked = function () {
                    this.cd.detectChanges();
                };
                DuocPhamTonKhoListComponent.prototype.onTabSelect = function (event) {
                    if (event.index === 0) {
                        this.deselectedTab();
                        this.tabCanhBaoTonKhoEnabled = true;
                        this.index = event.index;
                        this.searchCanhBaoTonKho();
                    }
                    if (event.index === 1) {
                        this.deselectedTab();
                        this.tabTongHopTonKhoEnabled = true;
                        this.index = event.index;
                        this.searchTonKho2();
                    }
                    if (event.index === 2) {
                        this.deselectedTab();
                        this.tabNhapXuatTonKhoEnabled = true;
                        this.index = event.index;
                        this.searchTonKho3();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.deselectedTab = function () {
                    this.tabCanhBaoTonKhoEnabled = false;
                    this.tabTongHopTonKhoEnabled = false;
                    this.tabNhapXuatTonKhoEnabled = false;
                };
                DuocPhamTonKhoListComponent.prototype.onKey = function (event) {
                    if (event.key === 'Enter') {
                        this.searchCanhBaoTonKho();
                    }
                };
                // search
                DuocPhamTonKhoListComponent.prototype.searchCanhBaoTonKho = function () {
                    var queryString = this.getQueryStringTonKhoCanhBao();
                    this.defaultAdditionalSearchStringCanhBaoTonKho = queryString;
                    if (this.gridChildCanhBaoTonKho) {
                        this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
                        this.gridChildCanhBaoTonKho.search();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.searchTonKho3 = function () {
                    var queryString = this.getQueryStringTonKhoNhapXuat();
                    this.defaultAdditionalSearchStringNhapXuatTonKho = queryString;
                    if (this.gridChildNhapXuatTonKho) {
                        this.gridChildNhapXuatTonKho._additionalSearchString = queryString;
                        this.gridChildNhapXuatTonKho.search();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.searchTonKho2 = function () {
                    var queryString = this.getQueryStringTonKhoTongHop();
                    this.defaultAdditionalSearchStringTongHopTonKho = queryString;
                    if (this.gridChildTongHopTonKho) {
                        this.gridChildTongHopTonKho._additionalSearchString = queryString;
                        this.gridChildTongHopTonKho.search();
                    }
                };
                // end search 
                DuocPhamTonKhoListComponent.prototype.getQueryStringTonKhoCanhBao = function () {
                    var KhoQueryString = 0;
                    var CanhBaoQueryString = null;
                    if (this.searchInfo.KhoId != null) {
                        KhoQueryString = this.searchInfo.KhoId;
                    }
                    if (this.searchInfo.KhoId != null) {
                        KhoQueryString = this.searchInfo.KhoId;
                    }
                    if (this.searchInfo.LoaiCanhBao != null) {
                        CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
                    }
                    if (this.searchInfo.CanhBaoId == 0) {
                        CanhBaoQueryString = '"' + 'Tất cả' + '"';
                    }
                    // let json= {
                    //     KhoId:KhoQueryString,
                    //     CanhBao : CanhBaoQueryString
                    // };
                    // let queryStringSearch = JSON.stringify(json);
                    var queryStringSearch = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString + '}';
                    return queryStringSearch;
                };
                DuocPhamTonKhoListComponent.prototype.getQueryStringTonKhoTongHop = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var CanhBaoQueryString = null;
                    if (this.searchInfo2.KhoId != null) {
                        KhoQueryString = this.searchInfo2.KhoId;
                    }
                    if (this.searchInfo2.searchString != null) {
                        SearchQueryString = '"' + this.searchInfo2.searchString + '"';
                    }
                    // let json= {
                    //     KhoId:KhoQueryString,
                    //     CanhBao : CanhBaoQueryString,
                    //     Description:SearchQueryString
                    // };
                    // let queryStringSearch = JSON.stringify(json);
                    var queryStringSearch = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString + ',"CanhBao":' + CanhBaoQueryString + '}';
                    return queryStringSearch;
                };
                DuocPhamTonKhoListComponent.prototype.getQueryStringTonKhoNhapXuat = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var RangeDateQueryString = null;
                    var SortQueryString = null;
                    if (this.searchInfo3.KhoId != null) {
                        KhoQueryString = this.searchInfo3.KhoId;
                    }
                    if (this.searchInfo3.Description != null) {
                        SearchQueryString = '"' + this.searchInfo3.Description + '"';
                    }
                    if (this.searchInfo3.RangeDate != null) {
                        RangeDateQueryString =
                            '{"TuNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.startDate) + '"' +
                                ',"DenNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.endDate) + '"' + '}';
                    }
                    if (this.gridChildNhapXuatTonKho != null) {
                        SortQueryString = JSON.stringify(this.gridChildNhapXuatTonKho.sort);
                    }
                    // let json= {
                    //     KhoId:KhoQueryString,
                    //     RangeDate : RangeDateQueryString,
                    //     Description:SearchQueryString,
                    //     Sort :SortQueryString
                    // };
                    // let queryStringSearch = JSON.stringify(json);
                    var queryStringSearch = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString + ',"RangeDate":' +
                        RangeDateQueryString + ',"Sort":' + SortQueryString + '}';
                    return queryStringSearch;
                };
                DuocPhamTonKhoListComponent.prototype.onKey2 = function (event) {
                    if (event.key == 'Enter') {
                        this.searchTonKho2();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.searchChangeCanhBaoTonKho = function () {
                    if (this.searchInfo.searchString == null || this.searchInfo.searchString == undefined || this.searchInfo.searchString == '') {
                        if (this.gridChildCanhBaoTonKho != undefined) {
                            this.gridChildCanhBaoTonKho.searchString = null;
                        }
                        this.searchCanhBaoTonKho();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.searchChangeTongHopTonKho = function () {
                    if (this.searchInfo2.searchString == null || this.searchInfo2.searchString == undefined || this.searchInfo2.searchString == '') {
                        if (this.gridChildTongHopTonKho != undefined) {
                            this.gridChildTongHopTonKho.searchString = null;
                        }
                        this.searchTonKho2();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.onKey3 = function (event) {
                    if (event.key == 'Enter') {
                        this.searchTonKho3();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.searchChange = function () {
                    if (this.searchInfo3.Description == '' || this.searchInfo3.Description == null || this.searchInfo3.Description == undefined) {
                        if (this.gridChildNhapXuatTonKho != undefined) {
                            this.gridChildNhapXuatTonKho.searchString = null;
                        }
                        this.searchTonKho3();
                    }
                };
                DuocPhamTonKhoListComponent.prototype.KhoCanhBaoChange = function (khoDuocPhamId) {
                    this.searchInfo.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
                    this.searchCanhBaoTonKho();
                };
                DuocPhamTonKhoListComponent.prototype.KhoChange2 = function (event) {
                    if (event == null || event === undefined) {
                        this.searchInfo2.KhoId = 0;
                        this.searchTonKho2();
                        return;
                    }
                    this.searchInfo2.KhoId = event.KeyId;
                    this.searchInfo2.TenKho = event.DisplayName;
                    this.searchTonKho2();
                };
                DuocPhamTonKhoListComponent.prototype.KhoTonKhoChange = function (khoDuocPhamId) {
                    this.searchInfo2.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
                    this.searchTonKho2();
                };
                DuocPhamTonKhoListComponent.prototype.KhoChange3 = function (event) {
                    if (event != null && event != undefined) {
                        this.searchInfo3.KhoId = event;
                    }
                    else {
                        this.searchInfo3.KhoId = 0;
                    }
                    this.searchTonKho3();
                };
                DuocPhamTonKhoListComponent.prototype.changRange = function (event) {
                    this.searchTonKho3();
                };
                // cảnh báo tồn kho
                DuocPhamTonKhoListComponent.prototype.KhoChange = function (event) {
                    if (event === undefined) {
                        this.searchInfo.KhoId = 0;
                        this.searchCanhBaoTonKho();
                        return;
                    }
                    this.searchInfo.KhoId = event.KeyId;
                    this.searchInfo.TenKho = event.DisplayName;
                    this.searchCanhBaoTonKho();
                };
                DuocPhamTonKhoListComponent.prototype.CanhBaoChange = function (event) {
                    if (!event) {
                        this.searchInfo.CanhBaoId = 0;
                        this.searchInfo.LoaiCanhBao = 'Tất cả';
                        this.searchCanhBaoTonKho();
                        return;
                    }
                    this.searchInfo.LoaiCanhBao = event.DisplayName;
                    this.searchCanhBaoTonKho();
                };
                //end cảnh báo tồn kho
                DuocPhamTonKhoListComponent.prototype.getFirstKho = function () {
                    var _this = this;
                    this.apiService.post('TonKho/GetKhoFirst').subscribe(function (resultData) {
                        if (resultData != undefined && resultData != null) {
                            _this.searchInfo.KhoId = resultData.KeyId;
                            _this.searchInfo.TenKho = resultData.DisplayName;
                            if (_this.searchInfo.KhoId != undefined && _this.searchInfo.KhoId != null && _this.index == 0) {
                                _this.searchCanhBaoTonKho();
                            }
                            _this.searchInfo3.KhoId = resultData.KeyId;
                            _this.searchInfo3.TenKho = resultData.DisplayName;
                        }
                        // this.searchTonKho3();
                    }, function () {
                    });
                };
                // CANH BAO TON KHO
                DuocPhamTonKhoListComponent.prototype.showPopupBaoCaoTonKho = function () {
                    var dialogRef = this.dialog.open(_duoc_pham_ton_kho_popup_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuocPhamTonKhoPopupComponent"], {
                        width: '900px',
                        data: { Model: this.searchInfo, Title: 'Xác nhận' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                    });
                };
                DuocPhamTonKhoListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    if (this.index == 0) {
                        var KhoQueryString = 0;
                        var CanhBaoQueryString = null;
                        var SearchQueryString = null;
                        if (this.searchInfo.KhoId != null) {
                            KhoQueryString = this.searchInfo.KhoId;
                        }
                        if (this.searchInfo.LoaiCanhBao != null || this.searchInfo.LoaiCanhBao != undefined) {
                            CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
                        }
                        if (this.searchInfo.LoaiCanhBao == null) {
                            CanhBaoQueryString = '"' + 'Tất cả' + '"';
                        }
                        if (KhoQueryString == null || KhoQueryString == undefined) {
                            KhoQueryString = 0;
                        }
                        if (this.searchInfo.searchString != null) {
                            SearchQueryString = '"' + this.searchInfo.searchString + '"';
                        }
                        var queryString_1 = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString + ',"searchString":' + SearchQueryString + '}';
                        return new Promise(function (resolve) {
                            _this.apiService.post('TonKho/GetCanhBaoDuocPhamHTML?search=' + queryString_1).subscribe(function (resultData) {
                                resolve(resultData);
                            });
                        });
                    }
                    if (this.index == 1) {
                        var KhoQueryString = 0;
                        var SearchQueryString = null;
                        if (this.searchInfo2.searchString != null) {
                            SearchQueryString = '"' + this.searchInfo2.searchString + '"';
                        }
                        if (this.searchInfo2.KhoId != null) {
                            KhoQueryString = this.searchInfo2.KhoId;
                        }
                        if (KhoQueryString == null || KhoQueryString == undefined) {
                            KhoQueryString = 0;
                        }
                        var queryString_2 = '{"KhoId":' + KhoQueryString + ',"searchString":' + SearchQueryString + '}';
                        return new Promise(function (resolve) {
                            _this.apiService.post('TonKho/GetTonKhoDuocPhamHTML?search=' + queryString_2).subscribe(function (resultData) {
                                resolve(resultData);
                            });
                        });
                    }
                    if (this.index == 2) {
                        var KhoQueryString = 0;
                        var SearchQueryString = null;
                        var RangeDateQueryString = null;
                        var SortQueryString = null;
                        if (this.searchInfo3.KhoId != null) {
                            KhoQueryString = this.searchInfo3.KhoId;
                        }
                        if (this.searchInfo3.Description != null) {
                            SearchQueryString = '"' + this.searchInfo3.Description + '"';
                        }
                        if (this.searchInfo3.RangeDate != null) {
                            RangeDateQueryString = '{"TuNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.startDate) +
                                '"' + ',"DenNgay":' + '"' + this.ConvertDateTime(this.searchInfo3.RangeDate.endDate) + '"' + '}';
                        }
                        if (this.gridChildNhapXuatTonKho != null && this.gridChildNhapXuatTonKho != undefined) {
                            SortQueryString = JSON.stringify(this.gridChildNhapXuatTonKho.sort);
                        }
                        var queryString_3 = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString + ',"RangeDate":' +
                            RangeDateQueryString + ',"Sort":' + SortQueryString + '}';
                        return new Promise(function (resolve) {
                            _this.apiService.post('TonKho/GetXuatNhapTonKhoHTML?search=' + queryString_3).subscribe(function (resultData) {
                                resolve(resultData);
                            });
                        });
                    }
                };
                // TONG HOP TON KHO
                DuocPhamTonKhoListComponent.prototype.showPopupTongHopTonKho = function () {
                    var dialogRef = this.dialog.open(_duoc_pham_ton_kho_popup_ton_kho_duoc_pham_ton_kho_popup_ton_kho_component__WEBPACK_IMPORTED_MODULE_22__["DuocPhamTonKhoPopupTonKhoComponent"], {
                        width: '900px',
                        data: { Model: this.searchInfo2, Title: 'Xác nhận' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        // console.log('Ketqua', result)
                    });
                };
                //
                DuocPhamTonKhoListComponent.prototype.showPopup3 = function () {
                    // console.log("showPopup3= ", this.gridChildNhapXuatTonKho.sort);
                    if (this.gridChildNhapXuatTonKho != null && this.gridChildNhapXuatTonKho != undefined) {
                        this.searchInfo3.Sort = JSON.parse(JSON.stringify(this.gridChildNhapXuatTonKho.sort));
                    }
                    var dialogRef = this.dialog.open(_duoc_pham_nhap_xuat_ton_kho_popup_duoc_pham_nhap_xuat_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_23__["DuocPhamNhapXuatTonKhoPopupComponent"], {
                        width: '900px',
                        data: { Model: this.searchInfo3, Title: 'Xác nhận' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        // console.log('Ketqua', result)
                    });
                };
                //
                DuocPhamTonKhoListComponent.prototype.xem = function (duocPhamId) {
                    var model = new _duoc_pham_model__WEBPACK_IMPORTED_MODULE_19__["modelChiTiet"]();
                    model.DuocPhamId = duocPhamId;
                    model.KhoId = this.searchInfo3.KhoId;
                    model.RangeDate = this.searchInfo3.RangeDate;
                    var dialogRef = this.dialog.open(_duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_24__["DuocPhamNhaXuatTonKhoXemChiTietComponent"], {
                        width: '900px',
                        data: { Model: model, Title: 'Thẻ kho' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        // console.log('Ketqua', result)
                    });
                };
                DuocPhamTonKhoListComponent.prototype.GetValue = function () {
                    var _this = this;
                    {
                        var KhoQueryString = 0;
                        var CanhBaoQueryString = null;
                        var SearchQueryString = null;
                        if (this.searchInfo.KhoId != null) {
                            KhoQueryString = this.searchInfo.KhoId;
                        }
                        if (this.searchInfo.LoaiCanhBao != null || this.searchInfo.LoaiCanhBao != undefined) {
                            CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
                        }
                        if (KhoQueryString == null || KhoQueryString == undefined) {
                            KhoQueryString = 0;
                        }
                        if (this.searchInfo.searchString != null) {
                            SearchQueryString = '"' + this.searchInfo.searchString + '"';
                        }
                        var queryString = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString +
                            ',"searchString":' + SearchQueryString + '}';
                        this.apiService.post('TonKho/GetListKhoToView?search=' + queryString).subscribe(function (resultData) {
                            if (resultData.length > 0) {
                                _this.IsData = true;
                            }
                            else {
                                _this.IsData = false;
                            }
                        }, function (err) {
                        });
                    }
                };
                DuocPhamTonKhoListComponent.prototype.onDataBound = function (event) {
                    if (event != undefined && event.Data.length > 0) {
                        this.IsData = true;
                    }
                    else {
                        this.IsData = false;
                    }
                };
                DuocPhamTonKhoListComponent.prototype.GetValue2 = function () {
                    var _this = this;
                    {
                        var KhoQueryString = 0;
                        var SearchQueryString = null;
                        if (this.searchInfo2.searchString != null) {
                            SearchQueryString = '"' + this.searchInfo2.searchString + '"';
                        }
                        if (this.searchInfo2.KhoId != null) {
                            KhoQueryString = this.searchInfo2.KhoId;
                        }
                        if (KhoQueryString == null || KhoQueryString == undefined) {
                            KhoQueryString = 0;
                        }
                        var queryString = '{"KhoId":' + KhoQueryString + ',"searchString":' + SearchQueryString + '}';
                        this.apiService.post('TonKho/GetListKhoTonKhoToView?search=' + queryString).subscribe(function (resultData) {
                            // console.log("length data2", resultData.length)
                            if (resultData.length > 0) {
                                // console.log("aaa2", resultData)
                                _this.IsData = true;
                            }
                            else {
                                _this.IsData = false;
                            }
                        }, function (err) {
                        });
                    }
                };
                DuocPhamTonKhoListComponent.prototype.ConvertDateTime = function (datime) {
                    // console.log("ConvertDateTime = ",datime);
                    var date = new Date(datime);
                    var year = date.getFullYear();
                    var rawMonth = parseInt(String(date.getMonth())) + 1;
                    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
                    var rawDay = parseInt(String(date.getDate()));
                    var day = rawDay < 10 ? '0' + rawDay : rawDay;
                    return year + '-' + month + '-' + day;
                };
                DuocPhamTonKhoListComponent.prototype.exportExcelCanhBaoTonKho = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.gridChildCanhBaoTonKho != undefined) {
                        var KhoQueryString = 0;
                        var CanhBaoQueryString = null;
                        if (this.searchInfo.KhoId != null) {
                            KhoQueryString = this.searchInfo.KhoId;
                        }
                        if (this.searchInfo.LoaiCanhBao != null || this.searchInfo.LoaiCanhBao != undefined) {
                            CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
                        }
                        var queryString = '{"KhoId":' + KhoQueryString + ',"CanhBao":' + CanhBaoQueryString + '}';
                        this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
                        this.gridChildCanhBaoTonKho._gridQueryInfo.additionalSearchString = queryString;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_27__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel('TonKho/ExportCanhBaoTonKho', this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'CanhBaoTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_28__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuocPhamTonKhoListComponent.prototype.exportExcelTongHopTonKho = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.gridChildCanhBaoTonKho != undefined) {
                        var KhoQueryString = 0;
                        var SearchQueryString = null;
                        var CanhBaoQueryString = null;
                        if (this.searchInfo2.KhoId != null) {
                            KhoQueryString = this.searchInfo2.KhoId;
                        }
                        if (this.searchInfo2.searchString != null) {
                            SearchQueryString = '"' + this.searchInfo2.searchString + '"';
                        }
                        var queryString = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString +
                            ',"CanhBao":' + CanhBaoQueryString + '}';
                        this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
                        this.gridChildCanhBaoTonKho._gridQueryInfo.additionalSearchString = queryString;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_27__["SecurityOperation"].Process)) {
                        if (this.gridChildCanhBaoTonKho != undefined) {
                            this.apiService.postExportExcel('TonKho/ExportTongHopTonKho', this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(function (res) {
                                var dateTimeNow = new Date();
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'TongHopTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                                _this.dialog.closeAll();
                            }, function (err) {
                                _this.notificationService.showError(err.Message);
                                _this.dialog.closeAll();
                            });
                        }
                        else {
                            var KhoQueryString = 0;
                            var SearchQueryString = null;
                            var CanhBaoQueryString = null;
                            if (this.searchInfo2.KhoId != null) {
                                KhoQueryString = this.searchInfo2.KhoId;
                            }
                            if (this.searchInfo2.searchString != null) {
                                SearchQueryString = '"' + this.searchInfo2.searchString + '"';
                            }
                            var queryString = '{"KhoId":' + KhoQueryString + ',"Description":' + SearchQueryString +
                                ',"CanhBao":' + CanhBaoQueryString + '}';
                            var _isLoading = false;
                            var _skip = 0;
                            var _pageSize = 10;
                            var _take = void 0;
                            var _gridDataSource = void 0;
                            var _additionalSearchString = void 0;
                            this._gridQueryInfo = { skip: _skip, take: _take, pageSize: _pageSize, searchString: "", additionalSearchString: queryString, sort: this.sort, lazyLoadPage: false };
                            this.apiService.postExportExcel('TonKho/ExportTongHopTonKho', this._gridQueryInfo).subscribe(function (res) {
                                var dateTimeNow = new Date();
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'TongHopTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                                _this.dialog.closeAll();
                            }, function (err) {
                                _this.notificationService.showError(err.Message);
                                _this.dialog.closeAll();
                            });
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_28__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuocPhamTonKhoListComponent.prototype.exportExcelNhapXuatTonKho = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    var queryString = this.getQueryStringTonKhoNhapXuat();
                    var _isLoading = false;
                    var _skip = 0;
                    var _pageSize = 10;
                    var _take;
                    var _gridDataSource;
                    var _additionalSearchString;
                    this._gridQueryInfo = { skip: _skip, take: _take, pageSize: _pageSize, searchString: "", additionalSearchString: queryString, sort: this.sort, lazyLoadPage: false };
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_27__["SecurityOperation"].Process)) {
                        if (this.gridChildNhapXuatTonKho != undefined) {
                            this.apiService.postExportExcel('TonKho/ExportNhapXuatTonKho', this.gridChildNhapXuatTonKho._gridQueryInfo).subscribe(function (res) {
                                var dateTimeNow = new Date();
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'NhapXuatTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                                _this.dialog.closeAll();
                            }, function (err) {
                                _this.notificationService.showError(err.Message);
                                _this.dialog.closeAll();
                            });
                        }
                        else {
                            this.apiService.postExportExcel('TonKho/ExportNhapXuatTonKho', this._gridQueryInfo).subscribe(function (res) {
                                var dateTimeNow = new Date();
                                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_26__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'NhapXuatTonKho' + dateTimeNow.getFullYear() + '.xlsx');
                                _this.dialog.closeAll();
                            }, function (err) {
                                _this.notificationService.showError(err.Message);
                                _this.dialog.closeAll();
                            });
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_28__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuocPhamTonKhoListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' },
                    });
                };
                DuocPhamTonKhoListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                DuocPhamTonKhoListComponent.prototype.suaTonKho = function (dataItem) {
                    var data = {
                        dataItem: dataItem,
                        kho: this.searchInfo2
                    };
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog
                        .open(_sua_duoc_pham_ton_kho_popup_sua_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__["SuaDuocPhamTonKhoPopupComponent"], {
                        disableClose: true,
                        width: "1500px",
                        data: { data: data },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        //this.gridChildTongHopTonKho.setDataSource();
                    });
                };
                return DuocPhamTonKhoListComponent;
            }());
            DuocPhamTonKhoListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], DuocPhamTonKhoListComponent.prototype, "searchPlaceHolder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_18__["WindowComponent"], { static: false })
            ], DuocPhamTonKhoListComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('canhBaoTonKhoGrid', { static: false })
            ], DuocPhamTonKhoListComponent.prototype, "gridChildCanhBaoTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongHopTonKhoGrid', { static: false })
            ], DuocPhamTonKhoListComponent.prototype, "gridChildTongHopTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhapXuatTonKhoGrid', { static: false })
            ], DuocPhamTonKhoListComponent.prototype, "gridChildNhapXuatTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nxTonDauKyTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "nxTonDauKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nxNhapTrongKyTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "nxNhapTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nxXuatTrongKyTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "nxXuatTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nxTonCuoiKyTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "nxTonCuoiKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('theKhoTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "theKhoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('trangThaTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "trangThaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionChiTietTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "actionChiTietTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmComponent"], { static: false })
            ], DuocPhamTonKhoListComponent.prototype, "confirm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tinhTrangCanhBaoTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "tinhTrangCanhBaoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionTongHopTonKhoTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "actionTongHopTonKhoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('templateHeaderTemplate', { static: true })
            ], DuocPhamTonKhoListComponent.prototype, "templateHeaderTemplate", void 0);
            DuocPhamTonKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duoc-pham-ton-kho-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-ton-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-ton-kho-list.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.scss")).default]
                })
            ], DuocPhamTonKhoListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vZHVvYy1waGFtL2R1b2MtcGhhbS10b24ta2hvLXBvcHVwLXRvbi1raG8vZHVvYy1waGFtLXRvbi1raG8tcG9wdXAtdG9uLWtoby5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: DuocPhamTonKhoPopupTonKhoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamTonKhoPopupTonKhoComponent", function () { return DuocPhamTonKhoPopupTonKhoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var DuocPhamTonKhoPopupTonKhoComponent = /** @class */ (function () {
                function DuocPhamTonKhoPopupTonKhoComponent(dialogRef, apiService, dialog, data) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.data = data;
                    this.loading = false;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.searchString = data.Model;
                    //console.log('data Popup', data)
                }
                DuocPhamTonKhoPopupTonKhoComponent.prototype.ngOnInit = function () {
                    this.GetHTML();
                };
                DuocPhamTonKhoPopupTonKhoComponent.prototype.GetHTML = function () {
                    var _this = this;
                    var loadingDialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                    this.loading = true;
                    var KhoQueryString = null;
                    var SearchQueryString = null;
                    if (this.searchString.searchString != null) {
                        SearchQueryString = "\"" + this.searchString.searchString + "\"";
                    }
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (KhoQueryString == null || KhoQueryString == undefined) {
                        KhoQueryString = 0;
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"searchString\":" + SearchQueryString + "}";
                    this.apiService.post("TonKho/GetTonKhoDuocPhamHTML?search=" + queryString).subscribe(function (resultData) {
                        loadingDialog.close();
                        if (resultData != null) {
                            var html = resultData;
                            $(".a").show();
                            $(".showPdf2").append(html);
                        }
                        _this.loading = false;
                    }, function (err) {
                    });
                };
                DuocPhamTonKhoPopupTonKhoComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                DuocPhamTonKhoPopupTonKhoComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var KhoQueryString = null;
                    var SearchQueryString = null;
                    if (this.searchString.searchString != null) {
                        SearchQueryString = "\"" + this.searchString.searchString + "\"";
                    }
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (KhoQueryString == null || KhoQueryString == undefined) {
                        KhoQueryString = 0;
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"searchString\":" + SearchQueryString + "}";
                    return new Promise(function (resolve) {
                        _this.apiService.post("TonKho/GetTonKhoDuocPhamHTML?search=" + queryString).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                        _this.close();
                    });
                };
                return DuocPhamTonKhoPopupTonKhoComponent;
            }());
            DuocPhamTonKhoPopupTonKhoComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DuocPhamTonKhoPopupTonKhoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-ton-kho-popup-ton-kho',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-ton-kho-popup-ton-kho.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-ton-kho-popup-ton-kho.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuocPhamTonKhoPopupTonKhoComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.scss": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.scss ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vZHVvYy1waGFtL2R1b2MtcGhhbS10b24ta2hvLXBvcHVwL2R1b2MtcGhhbS10b24ta2hvLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.ts": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.ts ***!
          \*********************************************************************************************************************/
        /*! exports provided: DuocPhamTonKhoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamTonKhoPopupComponent", function () { return DuocPhamTonKhoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var DuocPhamTonKhoPopupComponent = /** @class */ (function () {
                function DuocPhamTonKhoPopupComponent(dialogRef, apiService, dialog, data) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.data = data;
                    this.loading = false;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.searchString = data.Model;
                    console.log('data Popup', data);
                }
                DuocPhamTonKhoPopupComponent.prototype.ngOnInit = function () {
                    this.GetHTML();
                };
                DuocPhamTonKhoPopupComponent.prototype.GetHTML = function () {
                    var _this = this;
                    var loadingDialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                    this.loading = true;
                    var KhoQueryString = null;
                    var CanhBaoQueryString = null;
                    var SearchQueryString = null;
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (this.searchString.LoaiCanhBao != null || this.searchString.LoaiCanhBao != undefined) {
                        CanhBaoQueryString = "\"" + this.searchString.LoaiCanhBao + "\"";
                    }
                    if (this.searchString.CanhBaoId != null || this.searchString.CanhBaoId != undefined)
                        if (this.searchString.CanhBaoId == 0) {
                            CanhBaoQueryString = "\"" + "Tất cả" + "\"";
                        }
                    if (KhoQueryString == null || KhoQueryString == undefined) {
                        KhoQueryString = 0;
                    }
                    if (this.searchString.searchString != null) {
                        SearchQueryString = "\"" + this.searchString.searchString + "\"";
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"CanhBao\":" + CanhBaoQueryString + ",\"searchString\":" + SearchQueryString + "}";
                    this.apiService.post("TonKho/GetCanhBaoDuocPhamHTML?search=" + queryString).subscribe(function (resultData) {
                        loadingDialog.close();
                        if (resultData != null) {
                            var html = resultData;
                            $(".a").show();
                            $(".showPdf").append(html);
                        }
                        _this.loading = false;
                    }, function (err) {
                    });
                };
                DuocPhamTonKhoPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                DuocPhamTonKhoPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var KhoQueryString = null;
                    var CanhBaoQueryString = null;
                    var SearchQueryString = null;
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (this.searchString.LoaiCanhBao != null || this.searchString.LoaiCanhBao != undefined) {
                        CanhBaoQueryString = "\"" + this.searchString.LoaiCanhBao + "\"";
                    }
                    if (KhoQueryString == null || KhoQueryString == undefined) {
                        KhoQueryString = 0;
                    }
                    if (this.searchString.searchString != null) {
                        SearchQueryString = "\"" + this.searchString.searchString + "\"";
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"CanhBao\":" + CanhBaoQueryString + ",\"searchString\":" + SearchQueryString + "}";
                    return new Promise(function (resolve) {
                        _this.apiService.post("TonKho/GetCanhBaoDuocPhamHTML?search=" + queryString).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                        _this.close();
                    });
                };
                return DuocPhamTonKhoPopupComponent;
            }());
            DuocPhamTonKhoPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            DuocPhamTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-duoc-pham-ton-kho-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuocPhamTonKhoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.model.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.model.ts ***!
          \***************************************************************************/
        /*! exports provided: DuocPham, searchTonKho, searchNhapXuatTonKho, Sort, rangeDate, modelChiTiet, queryInfo, chiTietItem, CapNhatTonKhoItem, CapNhatTonKhoItemDetail, GridQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPham", function () { return DuocPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTonKho", function () { return searchTonKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchNhapXuatTonKho", function () { return searchNhapXuatTonKho; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function () { return Sort; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDate", function () { return rangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelChiTiet", function () { return modelChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryInfo", function () { return queryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chiTietItem", function () { return chiTietItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatTonKhoItem", function () { return CapNhatTonKhoItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatTonKhoItemDetail", function () { return CapNhatTonKhoItemDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridQueryInfo", function () { return GridQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var DuocPham = /** @class */ (function () {
                function DuocPham() {
                }
                return DuocPham;
            }());
            var searchTonKho = /** @class */ (function () {
                function searchTonKho(KhoId, TenKho, LoaiCanhBao, CanhBaoId, searchString) {
                    if (KhoId === void 0) { KhoId = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (LoaiCanhBao === void 0) { LoaiCanhBao = null; }
                    if (CanhBaoId === void 0) { CanhBaoId = 0; }
                    if (searchString === void 0) { searchString = null; }
                    this.KhoId = KhoId;
                    this.TenKho = TenKho;
                    this.LoaiCanhBao = LoaiCanhBao;
                    this.CanhBaoId = CanhBaoId;
                    this.searchString = searchString;
                }
                return searchTonKho;
            }());
            var searchNhapXuatTonKho = /** @class */ (function () {
                function searchNhapXuatTonKho(KhoId, TenKho, Description, RangeDate, Sort) {
                    if (KhoId === void 0) { KhoId = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (Description === void 0) { Description = null; }
                    if (RangeDate === void 0) { RangeDate = new rangeDate; }
                    if (Sort === void 0) { Sort = new Array(); }
                    this.KhoId = KhoId;
                    this.TenKho = TenKho;
                    this.Description = Description;
                    this.RangeDate = RangeDate;
                    this.Sort = Sort;
                }
                return searchNhapXuatTonKho;
            }());
            var Sort = /** @class */ (function () {
                function Sort(Field, Dir) {
                    if (Field === void 0) { Field = null; }
                    if (Dir === void 0) { Dir = null; }
                    this.Field = Field;
                    this.Dir = Dir;
                }
                return Sort;
            }());
            var rangeDate = /** @class */ (function () {
                function rangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = new Date; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return rangeDate;
            }());
            var modelChiTiet = /** @class */ (function () {
                function modelChiTiet(KhoId, DuocPhamId, RangeDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (DuocPhamId === void 0) { DuocPhamId = 0; }
                    if (RangeDate === void 0) { RangeDate = new rangeDate; }
                    this.KhoId = KhoId;
                    this.DuocPhamId = DuocPhamId;
                    this.RangeDate = RangeDate;
                }
                return modelChiTiet;
            }());
            var queryInfo = /** @class */ (function () {
                function queryInfo(AdditionalSearchString, SearchString, Sort) {
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (Sort === void 0) { Sort = null; }
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.SearchString = SearchString;
                    this.Sort = Sort;
                }
                return queryInfo;
            }());
            var chiTietItem = /** @class */ (function () {
                function chiTietItem(KhoId, DuocPhamId, KhoDisplay, DuocPhamDisplay) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (DuocPhamId === void 0) { DuocPhamId = 0; }
                    if (KhoDisplay === void 0) { KhoDisplay = null; }
                    if (DuocPhamDisplay === void 0) { DuocPhamDisplay = null; }
                    this.KhoId = KhoId;
                    this.DuocPhamId = DuocPhamId;
                    this.KhoDisplay = KhoDisplay;
                    this.DuocPhamDisplay = DuocPhamDisplay;
                }
                return chiTietItem;
            }());
            var CapNhatTonKhoItem = /** @class */ (function () {
                function CapNhatTonKhoItem(DuocPhamId, DuocPham, SoDangKy, CapNhatTonKhoDuocPhamChiTiets) {
                    if (DuocPhamId === void 0) { DuocPhamId = 0; }
                    if (DuocPham === void 0) { DuocPham = null; }
                    if (SoDangKy === void 0) { SoDangKy = null; }
                    if (CapNhatTonKhoDuocPhamChiTiets === void 0) { CapNhatTonKhoDuocPhamChiTiets = []; }
                    this.DuocPhamId = DuocPhamId;
                    this.DuocPham = DuocPham;
                    this.SoDangKy = SoDangKy;
                    this.CapNhatTonKhoDuocPhamChiTiets = CapNhatTonKhoDuocPhamChiTiets;
                }
                return CapNhatTonKhoItem;
            }());
            var CapNhatTonKhoItemDetail = /** @class */ (function () {
                function CapNhatTonKhoItemDetail(Id, HanSuDung, MaRef, MaVach, DonGiaNhap, VAT, TiLeBHYTThanhToan, LaVatTuBHYT, SoLuong, DuocPhamBenhVienPhanNhomId) {
                    if (Id === void 0) { Id = 0; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (MaRef === void 0) { MaRef = null; }
                    if (MaVach === void 0) { MaVach = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (TiLeBHYTThanhToan === void 0) { TiLeBHYTThanhToan = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (DuocPhamBenhVienPhanNhomId === void 0) { DuocPhamBenhVienPhanNhomId = null; }
                    this.Id = Id;
                    this.HanSuDung = HanSuDung;
                    this.MaRef = MaRef;
                    this.MaVach = MaVach;
                    this.DonGiaNhap = DonGiaNhap;
                    this.VAT = VAT;
                    this.TiLeBHYTThanhToan = TiLeBHYTThanhToan;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuong = SoLuong;
                    this.DuocPhamBenhVienPhanNhomId = DuocPhamBenhVienPhanNhomId;
                }
                return CapNhatTonKhoItemDetail;
            }());
            var GridQueryInfo = /** @class */ (function () {
                function GridQueryInfo(skip, take, pageSize, searchString, additionalSearchString, sort, lazyLoadPage) {
                    this.skip = skip;
                    this.take = take;
                    this.pageSize = pageSize;
                    this.searchString = searchString;
                    this.additionalSearchString = additionalSearchString;
                    this.sort = sort;
                    this.lazyLoadPage = lazyLoadPage;
                }
                return GridQueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.module.ts": 
        /*!****************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.module.ts ***!
          \****************************************************************************/
        /*! exports provided: DuocPhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamModule", function () { return DuocPhamModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _sua_duoc_pham_ton_kho_popup_sua_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duoc-pham-routing.module */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-routing.module.ts");
            /* harmony import */ var _duoc_pham_ton_kho_list_duoc_pham_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-list/duoc-pham-ton-kho-list.component.ts");
            /* harmony import */ var _duoc_pham_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duoc-pham.service */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _duoc_pham_ton_kho_popup_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup/duoc-pham-ton-kho-popup.component.ts");
            /* harmony import */ var _duoc_pham_ton_kho_popup_ton_kho_duoc_pham_ton_kho_popup_ton_kho_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-ton-kho-popup-ton-kho/duoc-pham-ton-kho-popup-ton-kho.component.ts");
            /* harmony import */ var _duoc_pham_nhap_xuat_ton_kho_popup_duoc_pham_nhap_xuat_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nhap-xuat-ton-kho-popup/duoc-pham-nhap-xuat-ton-kho-popup.component.ts");
            /* harmony import */ var _duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet/duoc-pham-nha-xuat-ton-kho-xem-chi-tiet.component.ts");
            /* harmony import */ var _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @progress/kendo-angular-excel-export */ "./node_modules/@progress/kendo-angular-excel-export/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            var DuocPhamModule = /** @class */ (function () {
                function DuocPhamModule() {
                }
                return DuocPhamModule;
            }());
            DuocPhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_duoc_pham_ton_kho_list_duoc_pham_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_5__["DuocPhamTonKhoListComponent"], _duoc_pham_ton_kho_popup_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_22__["DuocPhamTonKhoPopupComponent"], _duoc_pham_ton_kho_popup_ton_kho_duoc_pham_ton_kho_popup_ton_kho_component__WEBPACK_IMPORTED_MODULE_23__["DuocPhamTonKhoPopupTonKhoComponent"],
                        _duoc_pham_nhap_xuat_ton_kho_popup_duoc_pham_nhap_xuat_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_24__["DuocPhamNhapXuatTonKhoPopupComponent"], _duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_25__["DuocPhamNhaXuatTonKhoXemChiTietComponent"],
                        _sua_duoc_pham_ton_kho_popup_sua_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__["SuaDuocPhamTonKhoPopupComponent"]],
                    imports: [
                        _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_26__["ExcelExportModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_17__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                        _duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_4__["DuocPhamRoutingModule"], _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_27__["TooltipModule"]
                    ], entryComponents: [
                        _duoc_pham_ton_kho_popup_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_22__["DuocPhamTonKhoPopupComponent"],
                        _duoc_pham_ton_kho_popup_ton_kho_duoc_pham_ton_kho_popup_ton_kho_component__WEBPACK_IMPORTED_MODULE_23__["DuocPhamTonKhoPopupTonKhoComponent"],
                        _duoc_pham_nhap_xuat_ton_kho_popup_duoc_pham_nhap_xuat_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_24__["DuocPhamNhapXuatTonKhoPopupComponent"],
                        _duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_duoc_pham_nha_xuat_ton_kho_xem_chi_tiet_component__WEBPACK_IMPORTED_MODULE_25__["DuocPhamNhaXuatTonKhoXemChiTietComponent"],
                        _sua_duoc_pham_ton_kho_popup_sua_duoc_pham_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__["SuaDuocPhamTonKhoPopupComponent"]
                    ],
                    providers: [
                        _duoc_pham_service__WEBPACK_IMPORTED_MODULE_6__["DuocPhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_7__["BaseService"], useClass: _duoc_pham_service__WEBPACK_IMPORTED_MODULE_6__["DuocPhamService"] },
                    ]
                })
            ], DuocPhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.service.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/duoc-pham.service.ts ***!
          \*****************************************************************************/
        /*! exports provided: DuocPhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamService", function () { return DuocPhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuocPhamService = /** @class */ (function (_super) {
                __extends(DuocPhamService, _super);
                function DuocPhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'TonKho';
                    return _this;
                }
                return DuocPhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuocPhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuocPhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DuocPhamService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.scss": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.scss ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vZHVvYy1waGFtL3N1YS1kdW9jLXBoYW0tdG9uLWtoby1wb3B1cC9zdWEtZHVvYy1waGFtLXRvbi1raG8tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: SuaDuocPhamTonKhoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuaDuocPhamTonKhoPopupComponent", function () { return SuaDuocPhamTonKhoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            var SuaDuocPhamTonKhoPopupComponent = /** @class */ (function () {
                function SuaDuocPhamTonKhoPopupComponent(data, sanitizer, cdRef, dialogRef, apiService, dialog, notificationService) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.cdRef = cdRef;
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.capNhatTonKhoItem = {};
                    this.gridColumns = [];
                    this.tongTon = 0;
                    this.duocPhamPhanNhomDataSource = [];
                    this.tongTonKho = null;
                    this.queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_10__["LookupQueryInfo"]();
                    this.duocPham = data;
                    this.getDuocPhamPhanNhom();
                }
                SuaDuocPhamTonKhoPopupComponent.prototype.ngOnInit = function () {
                    var queryString = "{\"KhoId\":" + this.duocPham.data.kho.KhoId + ",\"DuocPhamId\":" + this.duocPham.data.dataItem.Id + "}";
                    this.gridDuocPhamTonKho.additionalSearchString = queryString;
                    this.capNhatTonKhoItem.DuocPhamId = this.duocPham.data.dataItem.Id;
                    this.capNhatTonKhoItem.DuocPham = this.duocPham.data.dataItem.DuocPham;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50, Sortable: true, Template: this.sttTemplate },
                        { Field: "NgayDisplay", Title: "Ngày", Width: 100, Sortable: true },
                        { Field: "MaChungTu", Title: "Mã chứng từ", Width: 100, Sortable: true, Template: this.maChungTuTemplate },
                        { Field: "DuocPhamBenhVienPhanNhomTen", Title: "Phân nhóm", Width: 150, Sortable: false, Template: this.duocPhamBenhVienPhanNhomTemplate },
                        { Field: "SoLo", Title: "SỐ lô", Width: 80, Sortable: false, ShowTooltip: true, Template: this.soLoTemplate, },
                        { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120, Template: this.hanSuSungTemplate },
                        { Field: "MaRef", Title: "mã ref", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maRefTemplate, },
                        { Field: "MaVach", Title: "mã vạch", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maVachTemplate, },
                        { Field: "DonGiaNhap", Title: "giá nhập", Width: 100, Sortable: false, Template: this.donGiaTemplate, },
                        { Field: "VAT", Title: "VAT", Width: 50, Sortable: false, ShowTooltip: true, Template: this.vATTemplate, },
                        { Field: "TiLeBHYTThanhToan", Title: "tl bảo hiểm thanh toán", Width: 50, Sortable: false, ShowTooltip: true, Template: this.tiLeBHYTThanhToanTemplate, },
                        { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, TemplateFooter: this.loaiFooterTemplate },
                        { Field: "SoLuong", Title: "Số lượng", Width: 80, Sortable: false, Template: this.soLuongTemplate, TemplateFooter: this.tonFooterTemplate },
                        { Field: "SoLuongDaXuat", Title: "SL đã xuất", Width: 80, Sortable: false }
                    ];
                };
                SuaDuocPhamTonKhoPopupComponent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                SuaDuocPhamTonKhoPopupComponent.prototype.getDuocPhamPhanNhom = function () {
                    var _this = this;
                    this.apiService.post('NhapKhoDuocPham/GetListNhomThuoc', this.queryInfo).subscribe(function (resultData) {
                        _this.duocPhamPhanNhomDataSource = resultData;
                    });
                };
                SuaDuocPhamTonKhoPopupComponent.prototype.getTongTonKhoCuaDuocPham = function () {
                    var _this = this;
                    this.tongTonKho = null;
                    this.apiService.post('TonKho/GetTongTonKhoCuaDuocPham', this.gridDuocPhamTonKho._gridQueryInfo).subscribe(function (resultData) {
                        _this.tongTonKho = resultData;
                    });
                };
                SuaDuocPhamTonKhoPopupComponent.prototype.save = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].MessConfirm, ['Lưu']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            _this.validationErrors = [];
                            _this.cdRef.detectChanges();
                            // this.capNhatTonKhoItem.DuocPhamId = this.duocPham.data.dataItem.Id;
                            _this.capNhatTonKhoItem.SoDangKy = _this.duocPham.data.dataItem.SoDangKy;
                            if (_this.gridDuocPhamTonKho._gridDataSource.data != null && _this.gridDuocPhamTonKho._gridDataSource.data != null && _this.gridDuocPhamTonKho._gridDataSource.data.length > 0) {
                                _this.capNhatTonKhoItem.CapNhatTonKhoDuocPhamChiTiets = _this.gridDuocPhamTonKho._gridDataSource.data;
                            }
                            _this.apiService.post('TonKho/UpdateChiTietTonKhoCuaDuocPham', _this.capNhatTonKhoItem).subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Cập nhật tồn kho"]));
                                //this.dialogRef.close();
                                _this.gridDuocPhamTonKho.search();
                                //this.getTongTonKhoCuaDuocPham();
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    });
                };
                SuaDuocPhamTonKhoPopupComponent.prototype.totalTon = function () {
                    return this.gridDuocPhamTonKho._gridDataSource == undefined ? 0 : this.gridDuocPhamTonKho._gridDataSource.data.reduce(function (sum, item) { return sum + (item.Loai == 1 ? item.SoLuong - item.SoLuongDaXuat : 0); }, 0);
                };
                ;
                SuaDuocPhamTonKhoPopupComponent.prototype.extOnDataBound = function (dataItem) {
                    this.getTongTonKhoCuaDuocPham();
                };
                return SuaDuocPhamTonKhoPopupComponent;
            }());
            SuaDuocPhamTonKhoPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hanSuSungTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "hanSuSungTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiFooterTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "loaiFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tonFooterTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "tonFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vATTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "vATTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tiLeBHYTThanhToanTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "tiLeBHYTThanhToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maRefTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "maRefTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maVachTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "maVachTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLoTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "soLoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('duocPhamBenhVienPhanNhomTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "duocPhamBenhVienPhanNhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maChungTuTemplate', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "maChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamTonKho', { static: true })
            ], SuaDuocPhamTonKhoPopupComponent.prototype, "gridDuocPhamTonKho", void 0);
            SuaDuocPhamTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sua-duoc-pham-ton-kho-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sua-duoc-pham-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sua-duoc-pham-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/duoc-pham/sua-duoc-pham-ton-kho-popup/sua-duoc-pham-ton-kho-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], SuaDuocPhamTonKhoPopupComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-ton-kho-duoc-pham-duoc-pham-module-es2015.js.map
//# sourceMappingURL=bao-cao-ton-kho-duoc-pham-duoc-pham-module-es5.js.map
//# sourceMappingURL=bao-cao-ton-kho-duoc-pham-duoc-pham-module-es5.js.map