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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-ton-kho-vat-tu-vat-tu-sap-het-han-vat-tu-sap-het-han-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    { Title: 'Báo Cáo', Path:'' },\n                    { Title: 'Vật Tư', Path:'' },\n                    { Title: 'Sắp Hết Hạn', Path:'/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han', Active: true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [urlGetData]=\"vatTuSapHetHanDataUrl\" [urlGetTotalPage]=\"vatTuSapHetHanPagesUrl\"\n                [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                [headerTemplate]=\"headerTemplate\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGrid($event)\">\n            </app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n                <div fxFlex=\"80%\">\n                    <app-combobox id=\"Kho\" fxFlex=\"300px\" fxFlex.sm=\"auto\" label=\"Chọn Kho\" url=\"TonKho/GetKhoVatTus\"\n                        popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\" [(model)]=\"searchInfo.KhoId\"\n                        [modelText]=\"searchInfo.TenKho\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                        (modelChange)=\"KhoChange($event)\">\n                    </app-combobox>\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                            name=\"searchString\" placeholder=\"{{searchPlaceHolder}}\" [formControl]=\"searchCtrl\"\n                            [(ngModel)]=\"searchInfo.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChange()\" />\n                    </div>\n                </div>\n                <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n                    <button (click)=\"exportExcel()\" type=\"button\" color=\"primary\" [disabled]=\"!isExistData\"\n                        mat-raised-button mat-button>Xuất Excel</button>\n                    <button (click)=\"xemBaoCao()\" type=\"button\" color=\"primary\" [disabled]=\"!isExistData\" class=\"ml-1\"\n                        mat-raised-button mat-button>Xem\n                    </button>\n                    <app-print-form textPrint=\"In Báo Cáo\" [isDisable]=\"!isExistData\" type=\"PDF\"\n                        typeSize=\"{{printSize}}\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\"\n                        [typeLayout]=\"printLayout\">\n                    </app-print-form>\n                </div>\n            </div>\n        </ng-template>\n\n        <ng-template #tinhTrangTemplate let-dataItem>\n            <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanHienThi}}\n            </span>\n        </ng-template>\n\n        <ng-template #soLuongTonTemplate let-dataItem>\n            {{dataItem.SoLuongTonDisplay}}\n        </ng-template>\n        <ng-template #donGiaNhapTemplate let-dataItem>\n            {{ dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n        <ng-template #thanhTienTemplate let-dataItem>\n            {{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n    \n    </div>\n\n    <div class=\"showPdf\" >\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading==true\">\n            <h4 class=\"mb-3\">Đang load dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n</mat-dialog-content>\n\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" class=\"float-right\" fxLayoutGap=\"8px\">\n    <!-- <button mat-raised-button mat-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>In</button> -->\n    <app-print-form fxFlex='100%'  textPrint=\"In Báo Cáo\" type=\"PDF\" typeSize=\"{{printSize}}\"\n        [typeLayout]=\"printLayout\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS1zYXAtaGV0LWhhbi92YXQtdHUtc2FwLWhldC1oYW4tbGlzdC92YXQtdHUtc2FwLWhldC1oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: VatTuSapHetHanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuSapHetHanListComponent", function () { return VatTuSapHetHanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _vat_tu_sap_het_han_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vat-tu-sap-het-han.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.model.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _vat_tu_sap_het_han_popup_vat_tu_sap_het_han_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var VatTuSapHetHanListComponent = /** @class */ (function () {
                function VatTuSapHetHanListComponent(dialog, authService, notificationService, apiService) {
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].VatTuSapHetHan;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
                    this.isExistData = false;
                    this.printLayout = 'Portrait';
                    this.printSize = 'A4';
                    this.vatTuSapHetHanDataUrl = 'TonKho/GetDanhSachVatTuSapHetHanForGridAsync';
                    this.vatTuSapHetHanPagesUrl = 'TonKho/GetTotalVatTuSapHetHanPagesForGridAsync';
                    this.gridColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icBlock = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.searchPlaceHolder = "Tìm kiếm theo tên vật tư...";
                }
                VatTuSapHetHanListComponent.prototype.ngOnInit = function () {
                    this.searchInfo = new _vat_tu_sap_het_han_model__WEBPACK_IMPORTED_MODULE_4__["SearchVatTuSapHetHan"]();
                    this.gridColumns = [
                        { Field: "TenKho", Title: "Kho", Width: 200, Sortable: true },
                        { Field: "MaVatTu", Title: "Mã vật tư", Width: 200, Sortable: true },
                        { Field: "TenVatTu", Title: "vật Tư", MinWidth: 200, Sortable: true },
                        // { Field: "TenHoatChat", Title: "Hoạt Chất", Width: 200, Sortable: true },
                        { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 200, Sortable: true },
                        { Field: "SoLo", Title: "Số lô", Width: 200, Sortable: true },
                        { Field: "ViTri", Title: "Vị Trí", Width: 200, Sortable: true },
                        { Field: "DonGiaNhap", Title: "Đơn giá nhập", Width: 200, Sortable: true, Template: this.donGiaNhapTemplate },
                        { Field: "SoLuongTon", Title: "Số lượng tồn", Width: 200, Sortable: true, Template: this.soLuongTonTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 200, Sortable: true, Template: this.thanhTienTemplate },
                        { Field: "NgayHetHan", Title: "Ngày Hết Hạn", Width: 200, Sortable: true, Template: this.tinhTrangTemplate },
                    ];
                };
                VatTuSapHetHanListComponent.prototype.KhoChange = function (khoDuocPhamId) {
                    this.searchInfo.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
                    this.searchTonKho();
                };
                VatTuSapHetHanListComponent.prototype.searchTonKho = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    if (this.searchInfo.KhoId != null) {
                        KhoQueryString = this.searchInfo.KhoId;
                    }
                    if (this.searchInfo.SearchString != null) {
                        SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + "}";
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                VatTuSapHetHanListComponent.prototype.searchChange = function () {
                    if (this.searchInfo.SearchString == null || this.searchInfo.SearchString == undefined || this.searchInfo.SearchString == "") {
                        this.searchInfo.SearchString = undefined;
                        this.searchTonKho();
                    }
                };
                VatTuSapHetHanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.searchTonKho();
                    }
                };
                VatTuSapHetHanListComponent.prototype.xemBaoCao = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var SortQueryString = null;
                    if (this.searchInfo.KhoId != null) {
                        KhoQueryString = this.searchInfo.KhoId;
                    }
                    if (this.searchInfo.SearchString != null) {
                        SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
                    }
                    if (this.gridChild) {
                        SortQueryString = JSON.stringify(this.gridChild.sort);
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"Sort\":" + SortQueryString + "}";
                    var dialogRef = this.dialog.open(_vat_tu_sap_het_han_popup_vat_tu_sap_het_han_popup_component__WEBPACK_IMPORTED_MODULE_10__["VatTuSapHetHanPopupComponent"], {
                        //disableClose: true,
                        width: '1500px',
                        // height: '500px',
                        data: { searchString: queryString, Title: "Xác nhận" }
                    });
                    dialogRef.afterClosed().subscribe(function (res) { });
                };
                VatTuSapHetHanListComponent.prototype.onDataBoundGrid = function (event) {
                    if (event && event.Data.length > 0) {
                        this.isExistData = true;
                    }
                    else {
                        this.isExistData = false;
                    }
                };
                VatTuSapHetHanListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var SortQueryString = null;
                    if (this.searchInfo.KhoId != null) {
                        KhoQueryString = this.searchInfo.KhoId;
                    }
                    if (this.searchInfo.SearchString != null) {
                        SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
                    }
                    if (this.gridChild) {
                        SortQueryString = JSON.stringify(this.gridChild.sort);
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"Sort\":" + SortQueryString + "}";
                    return new Promise(function (resolve) {
                        _this.apiService.get("TonKho/GetVatTuSapHetHanHTML?searchString=" + queryString).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                };
                VatTuSapHetHanListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_22__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("TonKho/ExportVatTuSapHetHan", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_21__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "VatTuSapHetHan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return VatTuSapHetHanListComponent;
            }());
            VatTuSapHetHanListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VatTuSapHetHanListComponent.prototype, "searchPlaceHolder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], { static: true })
            ], VatTuSapHetHanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], VatTuSapHetHanListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTonTemplate', { static: true })
            ], VatTuSapHetHanListComponent.prototype, "soLuongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaNhapTemplate', { static: true })
            ], VatTuSapHetHanListComponent.prototype, "donGiaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], VatTuSapHetHanListComponent.prototype, "thanhTienTemplate", void 0);
            VatTuSapHetHanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-sap-het-han-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-sap-het-han-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-sap-het-han-list.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.scss")).default]
                })
            ], VatTuSapHetHanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS1zYXAtaGV0LWhhbi92YXQtdHUtc2FwLWhldC1oYW4tcG9wdXAvdmF0LXR1LXNhcC1oZXQtaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: VatTuSapHetHanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuSapHetHanPopupComponent", function () { return VatTuSapHetHanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var VatTuSapHetHanPopupComponent = /** @class */ (function () {
                function VatTuSapHetHanPopupComponent(dialogRef, data, apiService, notificationService) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.loading = false;
                    this.printLayout = 'landscape';
                    this.printSize = 'A4';
                    this.searchString = data.Model;
                }
                VatTuSapHetHanPopupComponent.prototype.ngOnInit = function () {
                    // this.GetValue();
                    this.GetHTML();
                };
                VatTuSapHetHanPopupComponent.prototype.GetHTML = function () {
                    var _this = this;
                    this.loading = true;
                    this.apiService.get("TonKho/GetVatTuSapHetHanHTML?searchString=" + this.data.searchString).subscribe(function (res) {
                        if (res != null) {
                            var html = res;
                            $(".a").show();
                            $(".showPdf").append(html);
                        }
                        _this.loading = false;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                VatTuSapHetHanPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.get("TonKho/GetVatTuSapHetHanHTML?searchString=" + _this.data.searchString).subscribe(function (resultData) {
                            resolve(resultData);
                            _this.dialogRef.close(resultData);
                        });
                    });
                };
                return VatTuSapHetHanPopupComponent;
            }());
            VatTuSapHetHanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            VatTuSapHetHanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-sap-het-han-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-sap-het-han-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-sap-het-han-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], VatTuSapHetHanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-routing.module.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-routing.module.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: VatTuSapHetHanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuSapHetHanRoutingModule", function () { return VatTuSapHetHanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _vat_tu_sap_het_han_list_vat_tu_sap_het_han_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.ts");
            var routes = [{
                    path: '',
                    component: _vat_tu_sap_het_han_list_vat_tu_sap_het_han_list_component__WEBPACK_IMPORTED_MODULE_6__["VatTuSapHetHanListComponent"],
                    data: {
                        title: 'Danh sách vật tư sắp hết hạn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].VatTuSapHetHan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }];
            var VatTuSapHetHanRoutingModule = /** @class */ (function () {
                function VatTuSapHetHanRoutingModule() {
                }
                return VatTuSapHetHanRoutingModule;
            }());
            VatTuSapHetHanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], VatTuSapHetHanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.model.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.model.ts ***!
          \****************************************************************************************************/
        /*! exports provided: SearchVatTuSapHetHan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuSapHetHan", function () { return SearchVatTuSapHetHan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchVatTuSapHetHan = /** @class */ (function () {
                function SearchVatTuSapHetHan() {
                    this.KhoId = 0;
                    this.TenKho = "Tất cả";
                    this.SearchString = null;
                }
                return SearchVatTuSapHetHan;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: VatTuSapHetHanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuSapHetHanModule", function () { return VatTuSapHetHanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _vat_tu_sap_het_han_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vat-tu-sap-het-han.service */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.service.ts");
            /* harmony import */ var _vat_tu_sap_het_han_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vat-tu-sap-het-han-routing.module */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-routing.module.ts");
            /* harmony import */ var _vat_tu_sap_het_han_list_vat_tu_sap_het_han_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-list/vat-tu-sap-het-han-list.component.ts");
            /* harmony import */ var _vat_tu_sap_het_han_popup_vat_tu_sap_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han-popup/vat-tu-sap-het-han-popup.component.ts");
            var VatTuSapHetHanModule = /** @class */ (function () {
                function VatTuSapHetHanModule() {
                }
                return VatTuSapHetHanModule;
            }());
            VatTuSapHetHanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_vat_tu_sap_het_han_list_vat_tu_sap_het_han_list_component__WEBPACK_IMPORTED_MODULE_20__["VatTuSapHetHanListComponent"], _vat_tu_sap_het_han_popup_vat_tu_sap_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__["VatTuSapHetHanPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                        _vat_tu_sap_het_han_routing_module__WEBPACK_IMPORTED_MODULE_19__["VatTuSapHetHanRoutingModule"]
                    ],
                    providers: [
                        _vat_tu_sap_het_han_service__WEBPACK_IMPORTED_MODULE_18__["VatTuSapHetHanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _vat_tu_sap_het_han_service__WEBPACK_IMPORTED_MODULE_18__["VatTuSapHetHanService"] }
                    ],
                    entryComponents: [
                        _vat_tu_sap_het_han_popup_vat_tu_sap_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__["VatTuSapHetHanPopupComponent"]
                    ]
                })
            ], VatTuSapHetHanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.service.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-sap-het-han/vat-tu-sap-het-han.service.ts ***!
          \******************************************************************************************************/
        /*! exports provided: VatTuSapHetHanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuSapHetHanService", function () { return VatTuSapHetHanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var VatTuSapHetHanService = /** @class */ (function (_super) {
                __extends(VatTuSapHetHanService, _super);
                function VatTuSapHetHanService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'TonKho';
                    return _this;
                }
                return VatTuSapHetHanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            VatTuSapHetHanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            VatTuSapHetHanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], VatTuSapHetHanService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-sap-het-han-vat-tu-sap-het-han-module-es2015.js.map
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-sap-het-han-vat-tu-sap-het-han-module-es5.js.map
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-sap-het-han-vat-tu-sap-het-han-module-es5.js.map