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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-duoc-pham-da-het-han-duoc-pham-da-het-han-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo',Path:''}\n                    , {Title:'Dược Phẩm',Path:''}\n                    ,{Title:'Đã Hết Hạn',Path:'/bao-cao/duoc-pham-da-het-han',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/bao-cao/duoc-pham-da-het-han\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n                [checkboxAble]=\"false\" [autoHeight]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\" [documentType]=\"documentType\"></app-grid>\n        </div>\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\">\n                <div fxFlex=\"80%\" fxFlex.sm=\"80%\">\n                    <app-combobox id=\"KhoId\" label=\"Chọn Kho\" url=\"TonKho/GetKhoTatCa\" fxFlex=\"300px\"\n                        (modelChange)=\"KhoChange($event)\" [autoSelectFirstItem]=\"true\" [bind]=\"true\" popupSettings=\"\"\n                        bind=\"true\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\" [(model)]=\"searchQuery.KhoId\">\n                    </app-combobox>\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchQuery.searchString\"\n                            (keyup)=\"onKey($event)\" placeholder=\"Tìm kiếm theo tên dược phẩm...\"\n                            (ngModelChange)=\"searchChange()\" />\n                    </div>\n                </div>\n                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"text-right\" style=\"margin: 5px;\">\n                    <button (click)=\"exportExcel()\" type=\"button\" color=\"primary\" mat-raised-button mat-button>Xuất\n                        Excel</button>\n                    <button (click)=\"showPopup()\" mat-flat-button color=\"primary\" class=\"ml-1\">Xem</button>\n                    <app-print-form textPrint=\"In Báo Cáo\" type=\"PDF\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\"\n                        [showIconPrint]=\"false\">\n                    </app-print-form>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #ngayHetHanTemplate let-dataItem>\n            <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanDisplay}}\n            </span>\n        </ng-template>\n        <ng-template #donGiaNhapTemplate let-dataItem>\n            {{ dataItem.DonGiaNhap | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n        <ng-template #thanhTienTemplate let-dataItem>\n            {{ dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n\n    </div>\n    <div class=\"showPdf\">\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading===true\">\n            <h4 class=\"mb-3\">Đang tải dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n</mat-dialog-content>\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" class=\"float-right\" fxLayoutGap=\"8px\">\n    <app-print-form fxFlex='100%' textPrint=\"In Báo Cáo\" type=\"PDF\" typeLayout=\"landscape\" typeSize=\"A4\"[bodyComponent]=\"this\" ></app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2R1b2MtcGhhbS1kYS1oZXQtaGFuL2R1b2MtcGhhbS1kYS1oZXQtaGFuLWxpc3QvZHVvYy1waGFtLWRhLWhldC1oYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: DuocPhamDaHetHanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaHetHanListComponent", function () { return DuocPhamDaHetHanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _duoc_pham_da_het_han_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../duoc-pham-da-het-han.model */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.model.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _duoc_pham_da_het_han_popup_duoc_pham_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.ts");
            var DuocPhamDaHetHanListComponent = /** @class */ (function () {
                function DuocPhamDaHetHanListComponent(notificationService, authService, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.searchQuery = new _duoc_pham_da_het_han_model__WEBPACK_IMPORTED_MODULE_4__["SearchDuocPham"]();
                    this.gridColumns = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
                }
                DuocPhamDaHetHanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuocPhamDaHetHan;
                    this.gridColumns = [
                        { Field: 'Kho', Title: 'Kho', Width: 150, Sortable: true },
                        { Field: 'MaDuocPham', Title: 'Mã Dược', Width: 200, Sortable: true },
                        { Field: 'DuocPham', Title: 'Dược Phẩm', Width: 200, Sortable: true },
                        { Field: 'HamLuong', Title: 'Hàm lượng', Width: 200, Sortable: true },
                        { Field: 'HoatChat', Title: 'Hoạt Chất', Width: 500, Sortable: true },
                        { Field: 'DonViTinh', Title: 'Đơn Vị Tính', Width: 150, Sortable: true },
                        { Field: 'SoLo', Title: 'Số lô', Width: 150, Sortable: true },
                        { Field: 'ViTri', Title: 'Vị Trí', Width: 150, Sortable: true },
                        { Field: 'DonGiaNhap', Title: 'Đơn giá nhập', Width: 150, Sortable: true, Template: this.donGiaNhapTemplate },
                        { Field: 'SoLuongTon', Title: 'Số Lượng Tồn', Width: 150, Sortable: true },
                        { Field: 'ThanhTien', Title: 'Thành tiền', Width: 150, Sortable: true, Template: this.thanhTienTemplate },
                        { Field: 'NgayHetHanDisplay', Title: 'Ngày Hết Hạn', Width: 150, Sortable: true, Template: this.ngayHetHanTemplate }
                    ];
                };
                DuocPhamDaHetHanListComponent.prototype.onSelectKhoDuoc = function (event) {
                    // tslint:disable-next-line: triple-equals
                    this.searchQuery.KhoId = event == undefined ? 0 : event.KeyId;
                    this.TimKiem();
                };
                DuocPhamDaHetHanListComponent.prototype.KhoChange = function (khoDuocPhamId) {
                    this.searchQuery.KhoId = khoDuocPhamId == undefined ? 0 : khoDuocPhamId;
                    this.TimKiem();
                };
                DuocPhamDaHetHanListComponent.prototype.onKey = function (event) {
                    if (event.key === 'Enter') {
                        this.TimKiem();
                    }
                };
                DuocPhamDaHetHanListComponent.prototype.searchChange = function () {
                    if (this.searchQuery.searchString == null || this.searchQuery.searchString === '') {
                        this.TimKiem();
                    }
                };
                DuocPhamDaHetHanListComponent.prototype.TimKiem = function () {
                    var khoQueryString = null;
                    var searchQueryString = null;
                    if (this.searchQuery.KhoId != null) {
                        khoQueryString = this.searchQuery.KhoId;
                    }
                    if (this.searchQuery.searchString != null) {
                        searchQueryString = '"' + this.searchQuery.searchString + '"';
                    }
                    var queryString = '{"KhoId":' + khoQueryString + ',"DuocPham":' + searchQueryString + '}';
                    this.gridChild._additionalSearchString = queryString;
                    this.gridChild.search();
                };
                DuocPhamDaHetHanListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var khoQueryString = null;
                    var searchQueryString = null;
                    if (this.searchQuery.KhoId != null) {
                        khoQueryString = this.searchQuery.KhoId;
                    }
                    if (this.searchQuery.searchString != null) {
                        searchQueryString = '"' + this.searchQuery.searchString + '"';
                    }
                    var queryString = '{"KhoId":' + khoQueryString + ',"DuocPham":' + searchQueryString + '}';
                    return new Promise(function (resolve) {
                        _this.apiService.get('DuocPhamDaHetHan/InDanhMucDaHetHan?search=' + queryString).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                    });
                };
                DuocPhamDaHetHanListComponent.prototype.showPopup = function () {
                    var dialogRef = this.dialog.open(_duoc_pham_da_het_han_popup_duoc_pham_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_16__["DuocPhamDaHetHanPopupComponent"], {
                        width: '1500px',
                        data: { Model: this.searchQuery, Title: 'Xác nhận' }
                    });
                    dialogRef.afterClosed().subscribe(function () {
                    });
                };
                DuocPhamDaHetHanListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('DuocPhamDaHetHan/ExportDuocPhamDaHetHan', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DuocPhamDaHetHan' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                DuocPhamDaHetHanListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                DuocPhamDaHetHanListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return DuocPhamDaHetHanListComponent;
            }());
            DuocPhamDaHetHanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], DuocPhamDaHetHanListComponent.prototype, "bodyComponent", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], DuocPhamDaHetHanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHetHanTemplate', { static: true })
            ], DuocPhamDaHetHanListComponent.prototype, "ngayHetHanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaNhapTemplate', { static: true })
            ], DuocPhamDaHetHanListComponent.prototype, "donGiaNhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], DuocPhamDaHetHanListComponent.prototype, "thanhTienTemplate", void 0);
            DuocPhamDaHetHanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duoc-pham-da-het-han-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-da-het-han-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-da-het-han-list.component.scss */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.scss")).default]
                })
            ], DuocPhamDaHetHanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2R1b2MtcGhhbS1kYS1oZXQtaGFuL2R1b2MtcGhhbS1kYS1oZXQtaGFuLXBvcHVwL2R1b2MtcGhhbS1kYS1oZXQtaGFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: DuocPhamDaHetHanPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaHetHanPopupComponent", function () { return DuocPhamDaHetHanPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuocPhamDaHetHanPopupComponent = /** @class */ (function () {
                function DuocPhamDaHetHanPopupComponent(dialogRef, apiService, data, notificationService) {
                    this.dialogRef = dialogRef;
                    this.apiService = apiService;
                    this.data = data;
                    this.notificationService = notificationService;
                    this.loading = false;
                    this.searchString = data.Model;
                }
                DuocPhamDaHetHanPopupComponent.prototype.ngOnInit = function () {
                    this.GetHTML();
                };
                DuocPhamDaHetHanPopupComponent.prototype.GetHTML = function () {
                    var _this = this;
                    this.loading = true;
                    var KhoQueryString = null;
                    var SearchQueryString = null;
                    if (this.searchString.KhoId != null) {
                        KhoQueryString = this.searchString.KhoId;
                    }
                    if (this.searchString.searchString != null) {
                        SearchQueryString = '"' + this.searchString.searchString + '"';
                    }
                    // tslint:disable-next-line: triple-equals
                    if (KhoQueryString == null || KhoQueryString == undefined) {
                        KhoQueryString = 0;
                    }
                    var queryString = '{"KhoId":' + KhoQueryString + ',"DuocPham":' + SearchQueryString + '}';
                    this.apiService.post('DuocPhamDaHetHan/GetHTML?search=' + queryString).subscribe(function (resultData) {
                        if (resultData != null) {
                            var html = resultData;
                            $('.showPdf').append(html);
                        }
                        _this.loading = false;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                DuocPhamDaHetHanPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    var khoQueryString = null;
                    var searchQueryString = null;
                    if (this.searchString.KhoId != null) {
                        khoQueryString = this.searchString.KhoId;
                    }
                    if (this.searchString.searchString != null) {
                        searchQueryString = '"' + this.searchString.searchString + '"';
                    }
                    // tslint:disable-next-line: triple-equals
                    if (khoQueryString == null || khoQueryString == undefined) {
                        khoQueryString = 0;
                    }
                    var queryString = '{"KhoId":' + khoQueryString + ',"DuocPham":' + searchQueryString + '}';
                    return new Promise(function (resolve) {
                        _this.apiService.get('DuocPhamDaHetHan/InDanhMucDaHetHan?search=' + queryString).subscribe(function (resultData) {
                            resolve(resultData);
                            _this.dialogRef.close(resultData);
                        });
                    });
                };
                return DuocPhamDaHetHanPopupComponent;
            }());
            DuocPhamDaHetHanPopupComponent.ctorParameters = function () { return [
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
            ]; };
            DuocPhamDaHetHanPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-duoc-pham-da-het-han-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-da-het-han-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-da-het-han-popup.component.scss */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], DuocPhamDaHetHanPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-routing.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-routing.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: DuocPhamDaHetHanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaHetHanRoutingModule", function () { return DuocPhamDaHetHanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _duoc_pham_da_het_han_list_duoc_pham_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _duoc_pham_da_het_han_list_duoc_pham_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_4__["DuocPhamDaHetHanListComponent"],
                    data: {
                        title: 'Dược phẩm đã hết hạn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuocPhamDaHetHan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    }
                }
            ];
            var DuocPhamDaHetHanRoutingModule = /** @class */ (function () {
                function DuocPhamDaHetHanRoutingModule() {
                }
                return DuocPhamDaHetHanRoutingModule;
            }());
            DuocPhamDaHetHanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], DuocPhamDaHetHanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.model.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.model.ts ***!
          \*****************************************************************************************/
        /*! exports provided: SearchDuocPham */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDuocPham", function () { return SearchDuocPham; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchDuocPham = /** @class */ (function () {
                function SearchDuocPham(KhoId, searchString) {
                    if (KhoId === void 0) { KhoId = null; }
                    if (searchString === void 0) { searchString = null; }
                    this.KhoId = KhoId;
                    this.searchString = searchString;
                }
                return SearchDuocPham;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: DuocPhamDaHetHanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaHetHanModule", function () { return DuocPhamDaHetHanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _duoc_pham_da_het_han_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duoc-pham-da-het-han-routing.module */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-routing.module.ts");
            /* harmony import */ var _duoc_pham_da_het_han_list_duoc_pham_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-list/duoc-pham-da-het-han-list.component.ts");
            /* harmony import */ var _duoc_pham_da_het_han_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duoc-pham-da-het-han.service */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _duoc_pham_da_het_han_popup_duoc_pham_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component */ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han-popup/duoc-pham-da-het-han-popup.component.ts");
            var DuocPhamDaHetHanModule = /** @class */ (function () {
                function DuocPhamDaHetHanModule() {
                }
                return DuocPhamDaHetHanModule;
            }());
            DuocPhamDaHetHanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _duoc_pham_da_het_han_list_duoc_pham_da_het_han_list_component__WEBPACK_IMPORTED_MODULE_4__["DuocPhamDaHetHanListComponent"],
                        _duoc_pham_da_het_han_popup_duoc_pham_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuocPhamDaHetHanPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_20__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["GridModule"],
                        _duoc_pham_da_het_han_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuocPhamDaHetHanRoutingModule"]
                    ],
                    entryComponents: [
                        _duoc_pham_da_het_han_popup_duoc_pham_da_het_han_popup_component__WEBPACK_IMPORTED_MODULE_21__["DuocPhamDaHetHanPopupComponent"]
                    ],
                    providers: [
                        _duoc_pham_da_het_han_service__WEBPACK_IMPORTED_MODULE_5__["DuocPhamDaHetHanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _duoc_pham_da_het_han_service__WEBPACK_IMPORTED_MODULE_5__["DuocPhamDaHetHanService"] },
                    ]
                })
            ], DuocPhamDaHetHanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.service.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/duoc-pham-da-het-han/duoc-pham-da-het-han.service.ts ***!
          \*******************************************************************************************/
        /*! exports provided: DuocPhamDaHetHanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamDaHetHanService", function () { return DuocPhamDaHetHanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var DuocPhamDaHetHanService = /** @class */ (function (_super) {
                __extends(DuocPhamDaHetHanService, _super);
                function DuocPhamDaHetHanService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'DuocPhamDaHetHan';
                    return _this;
                }
                return DuocPhamDaHetHanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            DuocPhamDaHetHanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            DuocPhamDaHetHanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DuocPhamDaHetHanService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-duoc-pham-da-het-han-duoc-pham-da-het-han-module-es2015.js.map
//# sourceMappingURL=bao-cao-duoc-pham-da-het-han-duoc-pham-da-het-han-module-es5.js.map
//# sourceMappingURL=bao-cao-duoc-pham-da-het-han-duoc-pham-da-het-han-module-es5.js.map