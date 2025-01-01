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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-ton-kho-vat-tu-vat-tu-da-het-han-vat-tu-da-het-han-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.html": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.html ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                { Title: 'Thống Kê', Path:'' },\n                { Title: 'Vật Tư', Path:'' },\n                { Title: 'Đã Hết Hạn', Path:'/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han', Active: true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n\n            <app-grid baseRoute=\"/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han\" [gridColumns]=\"gridColumns\"\n                [useAddDeault]=\"false\" [checkboxAble]=\"false\" [autoHeight]=\"false\" [lazyLoadPage]=\"true\"\n                [useHeaderDefault]=\"false\" urlGetData=\"TonKho/GetDanhSachVatTuDaHetHanForGridAsync\"\n                urlGetTotalPage=\"TonKho/GetDanhSachVatTuDaHetHanTotalPageForGridAsync\"\n                (extOnDataBound)=\"onDataBoundGrid($event)\" [headerTemplate]=\"headerTemplate\" [sort]=\"sort\"\n                [useActionDefault]=\"false\" [documentType]=\"documentType\">\n                <ng-template #ngayHetHanTemplate let-dataItem>\n                    <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanHienThi}}\n                    </span>\n                </ng-template>\n\n                <ng-template #SLTemplate let-dataItem>\n                    <span class=\"badge badge-pill\">{{dataItem.SoLuongTonFormat}}\n                    </span>\n                </ng-template>\n            </app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\">\n                <div fxFlex=\"80%\" fxFlex.sm=\"80%\">\n                    <app-combobox id=\"KhoId\" label=\"Chọn Kho\" url=\"TonKho/GetKhoVatTus\" fxFlex=\"300px\"\n                        [autoSelectFirstItem]=\"true\" (modelChange)=\"chonKhoVatTu($event)\" popupSettings=\"\" bind=\"true\"\n                        class=\"mt-1 on-header\" style=\"margin-left: 5px;\" [(model)]=\"searchQuery.KhoId\">\n                    </app-combobox>\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchQuery.SearchString\"\n                            (keyup)=\"onKey($event)\" placeholder=\"Tìm kiếm theo tên vật tư...\"\n                            (ngModelChange)=\"searchChange()\" />\n                    </div>\n                </div>\n                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"text-right\" style=\"margin: 5px;\">\n                    <button [disabled]=\"!isDisabled\" (click)=\"exportExcel()\" type=\"button\" color=\"primary\"\n                        mat-raised-button mat-button>Xuất\n                        Excel</button>\n                    <button (click)=\"inBaoCaoVatTuDaHetHan()\" [disabled]=\"!isDisabled\" mat-flat-button color=\"primary\"\n                        class=\"ml-1\">Xem</button>\n                    <app-print-form [isDisable]=\"!isDisabled\" textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\"\n                        [showInMenuItem]=\"false\" [showIconPrint]=\"false\">\n                    </app-print-form>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #donGiaNhapTemplate let-dataItem>\n            {{ dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n        <ng-template #thanhTienTemplate let-dataItem>\n            {{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.html": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.html ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO DANH MỤC VẬT TƯ ĐÃ HẾT HẠN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\"  [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.scss": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.scss ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS1kYS1oZXQtaGFuL3ZhdC10dS1kYS1oZXQtaGFuLWxpc3QvdmF0LXR1LWRhLWhldC1oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: VatTuDaHetHanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuDaHetHanListComponent", function () { return VatTuDaHetHanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _vat_tu_da_het_han_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vat-tu-da-het-han.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _vat_tu_da_het_han_popup_vat_tu_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var VatTuDaHetHanListComponent = /** @class */ (function () {
                function VatTuDaHetHanListComponent(notificationService, authService, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icBlock = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.isDisabled = false;
                    this.popupLoadingDataDaDuyet = null;
                    this.validationErrors = null;
                    this.gridColumns = [];
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControl"]();
                    this.searchQuery = new _vat_tu_da_het_han_model__WEBPACK_IMPORTED_MODULE_18__["SearchVatTuDaHetHan"]();
                    this.inVatTuDaHetHan = new _vat_tu_da_het_han_model__WEBPACK_IMPORTED_MODULE_18__["InVatTuDaHetHan"]();
                    this.sort = [
                        {
                            field: "NgayHetHan",
                            dir: "desc",
                        },
                    ];
                }
                VatTuDaHetHanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_16__["DocumentType"].VatTuDaHetHan;
                    this.gridColumns = [
                        { Field: "TenKho", Title: "Kho", Width: 200, Sortable: true },
                        { Field: "MaVatTu", Title: "Mã vật tư", Width: 200, Sortable: true },
                        { Field: "TenVatTu", Title: "vật Tư", MinWidth: 200, Sortable: true },
                        { Field: "DonViTinh", Title: "Đơn Vị Tính", Width: 200, Sortable: true },
                        { Field: "SoLo", Title: "Sô lô", Width: 200, Sortable: true },
                        { Field: "ViTri", Title: "Vị Trí", Width: 200, Sortable: true },
                        { Field: "DonGiaNhap", Title: "Đơn giá nhập", Width: 200, Sortable: true, Template: this.donGiaNhapTemplate },
                        { Field: "SoLuongTon", Title: "Số lượng tồn", Width: 200, Sortable: true, Template: this.SLTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 200, Sortable: true, Template: this.thanhTienTemplate },
                        { Field: "NgayHetHan", Title: "Ngày Hết Hạn", Width: 200, Sortable: true, Template: this.ngayHetHanTemplate },
                    ];
                };
                VatTuDaHetHanListComponent.prototype.timKiem = function () {
                    var KhoId = null;
                    var SearchQueryString = null;
                    if (this.searchQuery.KhoId != null) {
                        KhoId = this.searchQuery.KhoId;
                    }
                    if (this.searchQuery.SearchString != null) {
                        SearchQueryString = "\"" + this.searchQuery.SearchString + "\"";
                    }
                    var queryString = "{\"KhoId\":" + KhoId + ",\"SearchString\":" + SearchQueryString + "}";
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                VatTuDaHetHanListComponent.prototype.searchChange = function () {
                    if (this.searchQuery.SearchString == undefined || this.searchQuery.SearchString == null || this.searchQuery.SearchString == "") {
                        this.searchQuery.SearchString = undefined;
                        this.timKiem();
                    }
                };
                VatTuDaHetHanListComponent.prototype.chonKhoVatTu = function (khoVatTuId) {
                    if (khoVatTuId != undefined && khoVatTuId != null) {
                        this.searchQuery.SearchString = undefined;
                        this.searchQuery.KhoId = khoVatTuId;
                        this.timKiem();
                    }
                    else {
                        this.searchQuery.KhoId = 0;
                        this.timKiem();
                    }
                };
                VatTuDaHetHanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiem();
                    }
                };
                VatTuDaHetHanListComponent.prototype.loadingPage = function () {
                    this.popupLoadingDataDaDuyet = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                VatTuDaHetHanListComponent.prototype.closePopupLoading = function () {
                    if (this.popupLoadingDataDaDuyet != undefined && this.popupLoadingDataDaDuyet != null) {
                        this.popupLoadingDataDaDuyet.close();
                    }
                };
                VatTuDaHetHanListComponent.prototype.inBaoCaoVatTuDaHetHan = function () {
                    var self = this;
                    self.loadingPage();
                    var KhoId = null;
                    var SearchQueryString = null;
                    if (self.searchQuery.KhoId != null) {
                        KhoId = self.searchQuery.KhoId;
                    }
                    if (self.searchQuery.SearchString != null) {
                        SearchQueryString = "\"" + self.searchQuery.SearchString + "\"";
                    }
                    self.inVatTuDaHetHan.SearchString = "{\"KhoId\":" + KhoId + ",\"SearchString\":" + SearchQueryString + "}";
                    self.inVatTuDaHetHan.Header = true;
                    self.apiService.post("TonKho/XemVatTuDaHetHan", self.inVatTuDaHetHan).subscribe(function (result) {
                        if (result != undefined && result != null) {
                            self.closePopupLoading();
                            self.dialog.open(_vat_tu_da_het_han_popup_vat_tu_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_20__["VatTuDaHetHanPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: result,
                            }).afterClosed().subscribe(function () {
                            });
                        }
                    }, function (err) {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoading();
                    });
                };
                VatTuDaHetHanListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    //hard code get => post
                    var self = this;
                    self.loadingPage();
                    var KhoId = null;
                    var SearchQueryString = null;
                    if (self.searchQuery.KhoId != null) {
                        KhoId = self.searchQuery.KhoId;
                    }
                    if (self.searchQuery.SearchString != null) {
                        SearchQueryString = "\"" + self.searchQuery.SearchString + "\"";
                    }
                    self.inVatTuDaHetHan.SearchString = "{\"KhoId\":" + KhoId + ",\"SearchString\":" + SearchQueryString + "}";
                    self.inVatTuDaHetHan.Header = false;
                    return new Promise(function (resolve) {
                        self.closePopupLoading();
                        _this.apiService.post("TonKho/XemVatTuDaHetHan", self.inVatTuDaHetHan).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                };
                VatTuDaHetHanListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_21__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("TonKho/ExportVatTuDaHetHan", this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "VatTuDaHetHan" + dateTimeNow.getFullYear() + ".xlsx");
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
                VatTuDaHetHanListComponent.prototype.onDataBoundGrid = function (event) {
                    if (event != undefined && event != null && event.Data.length > 0) {
                        this.isDisabled = true;
                    }
                    else {
                        this.isDisabled = false;
                    }
                };
                return VatTuDaHetHanListComponent;
            }());
            VatTuDaHetHanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VatTuDaHetHanListComponent.prototype, "bodyComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"], { static: true })
            ], VatTuDaHetHanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], VatTuDaHetHanListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHetHanTemplate', { static: true })
            ], VatTuDaHetHanListComponent.prototype, "ngayHetHanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SLTemplate', { static: true })
            ], VatTuDaHetHanListComponent.prototype, "SLTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaNhapTemplate', { static: true })
            ], VatTuDaHetHanListComponent.prototype, "donGiaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], VatTuDaHetHanListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VatTuDaHetHanListComponent.prototype, "sort", void 0);
            VatTuDaHetHanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-da-het-han-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-da-het-han-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-da-het-han-list.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.scss")).default]
                })
            ], VatTuDaHetHanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.scss": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.scss ***!
          \**************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vdG9uLWtoby92YXQtdHUvdmF0LXR1LWRhLWhldC1oYW4vdmF0LXR1LWRhLWhldC1oYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFx0b24ta2hvXFx2YXQtdHVcXHZhdC10dS1kYS1oZXQtaGFuXFx2YXQtdHUtZGEtaGV0LWhhbi1wb3B1cFxcdmF0LXR1LWRhLWhldC1oYW4tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS1kYS1oZXQtaGFuL3ZhdC10dS1kYS1oZXQtaGFuLXBvcHVwL3ZhdC10dS1kYS1oZXQtaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS1kYS1oZXQtaGFuL3ZhdC10dS1kYS1oZXQtaGFuLXBvcHVwL3ZhdC10dS1kYS1oZXQtaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.ts": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.ts ***!
          \************************************************************************************************************************************/
        /*! exports provided: VatTuDaHetHanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuDaHetHanPopupComponent", function () { return VatTuDaHetHanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var VatTuDaHetHanPopupComponent = /** @class */ (function () {
                function VatTuDaHetHanPopupComponent(dialog, sanitizer, data) {
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = "";
                }
                VatTuDaHetHanPopupComponent.prototype.ngOnInit = function () {
                    this.src = "data:text/html;charset=utf-8," + encodeURIComponent(this.data);
                };
                VatTuDaHetHanPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                VatTuDaHetHanPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var source = this.data.replace("<p  style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'><th>DANH MỤC VẬT TƯ ĐÃ HẾT HẠN</th></p>", "");
                    return new Promise(function (resolve) {
                        resolve(source);
                        _this.close();
                    });
                };
                return VatTuDaHetHanPopupComponent;
            }());
            VatTuDaHetHanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            VatTuDaHetHanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-da-het-han-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-da-het-han-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-da-het-han-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], VatTuDaHetHanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-routing.module.ts": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-routing.module.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: VatTuDaHetHanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuDaHetHanRoutingModule", function () { return VatTuDaHetHanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _vat_tu_da_het_han_list_vat_tu_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vat-tu-da-het-han-list/vat-tu-da-het-han-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.ts");
            var routes = [{
                    path: '',
                    component: _vat_tu_da_het_han_list_vat_tu_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_6__["VatTuDaHetHanListComponent"],
                    data: {
                        title: 'Danh sách vật tư đã hết hạn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].VatTuDaHetHan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }];
            var VatTuDaHetHanRoutingModule = /** @class */ (function () {
                function VatTuDaHetHanRoutingModule() {
                }
                return VatTuDaHetHanRoutingModule;
            }());
            VatTuDaHetHanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], VatTuDaHetHanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.model.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.model.ts ***!
          \**************************************************************************************************/
        /*! exports provided: VatTuDaHetHan, SearchVatTuDaHetHan, InVatTuDaHetHan */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuDaHetHan", function () { return VatTuDaHetHan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuDaHetHan", function () { return SearchVatTuDaHetHan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InVatTuDaHetHan", function () { return InVatTuDaHetHan; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var VatTuDaHetHan = /** @class */ (function () {
                function VatTuDaHetHan() {
                }
                return VatTuDaHetHan;
            }());
            var SearchVatTuDaHetHan = /** @class */ (function () {
                function SearchVatTuDaHetHan() {
                    this.KhoId = null;
                    this.TenKho = null;
                    this.SearchString = null;
                }
                return SearchVatTuDaHetHan;
            }());
            var InVatTuDaHetHan = /** @class */ (function () {
                function InVatTuDaHetHan() {
                    this.KhoId = 0;
                    this.Header = null;
                    this.SearchString = null;
                }
                return InVatTuDaHetHan;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.module.ts": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.module.ts ***!
          \***************************************************************************************************/
        /*! exports provided: VatTuDaHetHanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuDaHetHanModule", function () { return VatTuDaHetHanModule; });
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
            /* harmony import */ var _vat_tu_da_het_han_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vat-tu-da-het-han.service */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.service.ts");
            /* harmony import */ var _vat_tu_da_het_han_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vat-tu-da-het-han-routing.module */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-routing.module.ts");
            /* harmony import */ var _vat_tu_da_het_han_list_vat_tu_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vat-tu-da-het-han-list/vat-tu-da-het-han-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-list/vat-tu-da-het-han-list.component.ts");
            /* harmony import */ var _vat_tu_da_het_han_popup_vat_tu_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han-popup/vat-tu-da-het-han-popup.component.ts");
            var VatTuDaHetHanModule = /** @class */ (function () {
                function VatTuDaHetHanModule() {
                }
                return VatTuDaHetHanModule;
            }());
            VatTuDaHetHanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_vat_tu_da_het_han_list_vat_tu_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_20__["VatTuDaHetHanListComponent"], _vat_tu_da_het_han_popup_vat_tu_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__["VatTuDaHetHanPopupComponent"]],
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
                        _vat_tu_da_het_han_routing_module__WEBPACK_IMPORTED_MODULE_19__["VatTuDaHetHanRoutingModule"]
                    ],
                    providers: [
                        _vat_tu_da_het_han_service__WEBPACK_IMPORTED_MODULE_18__["VatTuDaHetHanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _vat_tu_da_het_han_service__WEBPACK_IMPORTED_MODULE_18__["VatTuDaHetHanService"] },
                    ],
                    entryComponents: [
                        _vat_tu_da_het_han_popup_vat_tu_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__["VatTuDaHetHanPopupComponent"]
                    ]
                })
            ], VatTuDaHetHanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.service.ts": 
        /*!****************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-da-het-han/vat-tu-da-het-han.service.ts ***!
          \****************************************************************************************************/
        /*! exports provided: VatTuDaHetHanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuDaHetHanService", function () { return VatTuDaHetHanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var VatTuDaHetHanService = /** @class */ (function (_super) {
                __extends(VatTuDaHetHanService, _super);
                function VatTuDaHetHanService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'TonKho';
                    return _this;
                }
                return VatTuDaHetHanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            VatTuDaHetHanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            VatTuDaHetHanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], VatTuDaHetHanService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-da-het-han-vat-tu-da-het-han-module-es2015.js.map
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-da-het-han-vat-tu-da-het-han-module-es5.js.map
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-da-het-han-vat-tu-da-het-han-module-es5.js.map