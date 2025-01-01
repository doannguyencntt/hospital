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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-trieu-chung-trieu-chung-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n{Title:'Danh Mục',Path:''}\n,{Title:'Nhóm Hệ Thống',Path:''}\n,{Title:'Bệnh Viện ',Path:''}\n,{Title:'Triệu Chứng',Path:'/danh-muc/nhom-he-thong/benh-vien/trieu-chung',Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Triệu Chứng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-trieu-chung-shared>\n                </app-trieu-chung-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.html": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.html ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <!-- <h1 class=\"title mt-0 mb-1\">Danh Mục Dịch Vụ Kỹ Thuật</h1> -->\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện',Path:''}\n                    ,{Title:'Triệu Chứng',Path:'/danh-muc/nhom-he-thong/benh-vien/trieu-chung',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges()\"/>\n                </div>\n                <span fxFlex></span>\n                <button (click)=\"add()\" class=\"ml-4 right\" color=\"primary\" fxFlex=\"none\" mat-mini-fab\n                kendoTooltip title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n            </div>\n            <div class=\"p-4\">\n\n                <kendo-treeview [nodes]=data textField=\"field\" kendoTreeViewExpandable kendoTreeViewHierarchyBinding\n                    childrenField=\"TrieuChungChildren\">\n                    <ng-template kendoTreeViewNodeTemplate let-dataItem kendoTreeViewNodeTemplate let-dataItem>\n                        <span [ngClass]=\"iconClass(dataItem)\"></span>\n                        {{dataItem.Ten}}\n                        <span fxFlex></span>\n                        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                            [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                        </button>\n                        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <ng-template let-customer=\"customer\" matMenuContent>\n                                <button (click)=\"Addchildren(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                                    <span>Thêm nhánh </span>\n                                </button>\n                                <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                                    <span>Sửa</span>\n                                </button>\n                                <button (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                    <span>Xóa</span>\n                                </button>\n                            </ng-template>\n                        </mat-menu>\n                    </ng-template >\n\n                </kendo-treeview>\n\n            </div>\n        </div>\n\n\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"mb-1\">\n            <!-- show== false => ADD -->\n            <app-combobox id=\"TrieuChungCha\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [(model)]=\"trieuChung.TrieuChungChaId\"\n                [modelText]=\"trieuChung.TenCha\" label=\"Triệu Chứng Cha\" url=\"TrieuChung/GetListTrieuChungCha\"\n                [queryInfo]=\"queryInfo\" [template]=\"lyDoTemplate\"\n                [validationerror]=\"'TrieuChungChaId' | validationerror:validationErrors\" *ngIf=\"show == false\">\n                <ng-template #lyDoTemplate let-dataItem>\n                    <label [ngStyle]=\"{\n                    'font-weight':dataItem.CapNhom == 1 ? 'bold' : 'normal',\n                    'padding-left' :((dataItem.CapNhom-1)*20) + 'px'\n                 }\">{{dataItem.DisplayName}}\n                    </label>\n                </ng-template>\n            </app-combobox>\n            <!-- show== true => edit -->\n            <app-combobox id=\"TrieuChungCha\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [(model)]=\"trieuChung.TrieuChungChaId\"\n                [modelText]=\"trieuChung.TenCha\" label=\"Triệu Chứng Cha\" url=\"TrieuChung/GetListTrieuChungCha1\"\n                [queryInfo]=\"queryInfo\" [template]=\"lyDoTemplate\"\n                [validationerror]=\"'TrieuChungChaId' | validationerror:validationErrors\" *ngIf=\"show == true\">\n                <ng-template #lyDoTemplate let-dataItem>\n                    <label [ngStyle]=\"{\n               'font-weight':dataItem.CapNhom == 1 ? 'bold' : 'normal',\n               'padding-left' :((dataItem.CapNhom-1)*20) + 'px'\n            }\">{{dataItem.DisplayName}}\n                    </label>\n                </ng-template>\n            </app-combobox>\n            <app-textbox id=\"Ten\" fxFlex=\"70%\" fxFlex.sm=\"70%\" [required]=\"true\" [(model)]=\"trieuChung.Ten\" label=\"Tên\"\n                maxlength=\"200\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-multiselect id=\"DanhMucChuan\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [required]=\"true\"\n                [(model)]=\"trieuChung.DanhMucChuanIds\" label=\"Nhóm Chẩn Đoán\" url=\"TrieuChung/GetListDanhMucChuanDoan\"\n                [validationerror]=\"'DanhMucChuanIds' | validationerror:validationErrors\">\n            </app-multiselect>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Triệu Chứng',Path:'/danh-muc/nhom-he-thong/benh-vien/trieu-chung',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Triệu Chứng</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-trieu-chung-shared>\n                </app-trieu-chung-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi90cmlldS1jaHVuZy90cmlldS1jaHVuZy1jcmVhdGUvdHJpZXUtY2h1bmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: TrieuChungCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungCreateComponent", function () { return TrieuChungCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _trieu_chung_shared_trieu_chung_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trieu-chung-shared/trieu-chung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.ts");
            var TrieuChungCreateComponent = /** @class */ (function () {
                function TrieuChungCreateComponent(router) {
                    this.router = router;
                }
                TrieuChungCreateComponent.prototype.ngOnInit = function () {
                };
                TrieuChungCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/trieu-chung']);
                };
                return TrieuChungCreateComponent;
            }());
            TrieuChungCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_trieu_chung_shared_trieu_chung_shared_component__WEBPACK_IMPORTED_MODULE_3__["TrieuChungSharedComponent"], { static: true })
            ], TrieuChungCreateComponent.prototype, "shared", void 0);
            TrieuChungCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trieu-chung-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trieu-chung-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trieu-chung-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.scss")).default]
                })
            ], TrieuChungCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.scss": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.scss ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi90cmlldS1jaHVuZy90cmlldS1jaHVuZy1saXN0L3RyaWV1LWNodW5nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: TrieuChungListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungListComponent", function () { return TrieuChungListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            var is = function (fileName, ext) { return new RegExp("." + ext + "$").test(fileName); };
            var TrieuChungListComponent = /** @class */ (function () {
                function TrieuChungListComponent(baseService, router, authService, notificationService, dialog) {
                    this.baseService = baseService;
                    this.router = router;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.trieuChung = {};
                    this.expression = false;
                    this.data = [];
                    this.field = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'TrieuChungChildren' };
                    this._isLoading = false;
                    this._skip = 0;
                    this._pageSize = 10;
                    this.mySelection = [];
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
                    this.formIsPopup = false;
                    this.componentCreate = null;
                    this.searchPlaceHolder = "Nhập từ khóa...";
                    this.searchString = null;
                    this.lazyLoadPage = false;
                    this.useAddDeault = true;
                    this.sort = null;
                    this.extOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                TrieuChungListComponent.prototype.iconClass = function (_a) {
                    var text = _a.text, TrieuChungChildren = _a.TrieuChungChildren;
                    return {
                        'k-i-folder': TrieuChungChildren !== undefined,
                        'k-icon': true
                    };
                };
                TrieuChungListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucTrieuChung;
                    this._gridDataSource = this.gridDataSource;
                    this._isLoading = true;
                    this.baseService.getDataForGrid(this._gridQueryInfo, "TrieuChung/GetDataTreeView").subscribe(function (resultData) {
                        _this.data = resultData;
                    });
                    this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/trieu-chung/them';
                };
                TrieuChungListComponent.prototype.search = function () {
                    var _this = this;
                    this._skip = 0;
                    if (this.gridDataSource == null) {
                        var searchText = this.searchString != undefined ? this.searchString : "";
                        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].convertSpecialXML(searchText);
                        searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
                        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
                        this._isLoading = true;
                        //this._additionalSearchString.toString();
                        this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: this._additionalSearchString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
                        this.baseService.getDataForGrid(this._gridQueryInfo, "TrieuChung/GetDataTreeView")
                            .subscribe(function (resultData) {
                            _this.data = resultData;
                            console.log("aaaaaaaaaaaaaaaa:", _this.data);
                        });
                    }
                    else {
                        this.extOnSearch.emit(this.searchString);
                    }
                };
                TrieuChungListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter" || this.searchString == "") {
                        this.search();
                    }
                };
                TrieuChungListComponent.prototype.add = function () {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
                        if (this.formIsPopup) {
                            this.dialog.open(this.componentCreate).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/them"]);
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TrieuChungListComponent.prototype.Addchildren = function (id) {
                    this.isShowView = true;
                    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/them/" + id + "/" + this.isShowView]);
                    // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                    //   this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/them/" + id + "/" + this.isShowView]);
                    // }
                    // else {
                    //   this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    // }
                };
                TrieuChungListComponent.prototype.edit = function (id) {
                    this.isShowView = false;
                    this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/chinh-sua/" + id + "/" + this.isShowView]);
                    // if (this.authService.hasPermission(this.documentType, SecurityOperation.Update)) {
                    //   this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/trieu-chung" + "/chinh-sua/" + id + "/" + this.isShowView]);
                    // }
                    // else {
                    //   this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
                    // }
                };
                TrieuChungListComponent.prototype.mySelectionAfterDelete = function (id) {
                    this.mySelection.forEach(function (item, index, object) {
                        if (item === id) {
                            object.splice(index, 1);
                        }
                    });
                };
                TrieuChungListComponent.prototype.delete = function (id) {
                    var _this = this;
                    var self = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Delete)) {
                        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessComfirmChildren, ["xóa"]) }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                self.baseService.deleteById(id)
                                    .subscribe(function () {
                                    _this.mySelectionAfterDelete(id);
                                    self.search();
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                                }, function (err) {
                                    self.notificationService.showError(err.Message);
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                TrieuChungListComponent.prototype.searchChanges = function () {
                    if (this.searchString == null || this.searchString == "") {
                        this.search();
                    }
                };
                return TrieuChungListComponent;
            }());
            TrieuChungListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "formIsPopup", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "componentCreate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "searchPlaceHolder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "gridDataSource", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "searchString", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "lazyLoadPage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "useAddDeault", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "sort", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TrieuChungListComponent.prototype, "baseRoute", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], TrieuChungListComponent.prototype, "extOnSearch", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: false })
            ], TrieuChungListComponent.prototype, "gridChild", void 0);
            TrieuChungListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trieu-chung-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trieu-chung-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trieu-chung-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.scss")).default]
                })
            ], TrieuChungListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-routing.module.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-routing.module.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: TrieuChungRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungRoutingModule", function () { return TrieuChungRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _trieu_chung_list_trieu_chung_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trieu-chung-list/trieu-chung-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.ts");
            /* harmony import */ var _trieu_chung_create_trieu_chung_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trieu-chung-create/trieu-chung-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.ts");
            /* harmony import */ var _trieu_chung_update_trieu_chung_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trieu-chung-update/trieu-chung-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _trieu_chung_list_trieu_chung_list_component__WEBPACK_IMPORTED_MODULE_6__["TrieuChungListComponent"],
                    data: {
                        title: 'Danh mục triệu chứng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucTrieuChung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _trieu_chung_create_trieu_chung_create_component__WEBPACK_IMPORTED_MODULE_7__["TrieuChungCreateComponent"],
                    data: {
                        title: 'Thêm triệu chứng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucTrieuChung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'them/:id/:isShowView',
                    component: _trieu_chung_create_trieu_chung_create_component__WEBPACK_IMPORTED_MODULE_7__["TrieuChungCreateComponent"],
                    data: {
                        title: 'Thêm triệu chứng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucTrieuChung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id/:isShowView',
                    component: _trieu_chung_update_trieu_chung_update_component__WEBPACK_IMPORTED_MODULE_8__["TrieuChungUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa triệu chứng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucTrieuChung,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var TrieuChungRoutingModule = /** @class */ (function () {
                function TrieuChungRoutingModule() {
                }
                return TrieuChungRoutingModule;
            }());
            TrieuChungRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], TrieuChungRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi90cmlldS1jaHVuZy90cmlldS1jaHVuZy1zaGFyZWQvdHJpZXUtY2h1bmctc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: TrieuChungSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungSharedComponent", function () { return TrieuChungSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _trieu_chung_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trieu-chung.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.model.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var TrieuChungSharedComponent = /** @class */ (function () {
                function TrieuChungSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.trieuChung = {};
                    this.idCha = null;
                    this.show = true;
                    this.queryInfo = new _trieu_chung_model__WEBPACK_IMPORTED_MODULE_2__["LookupQueryInfo"]();
                }
                TrieuChungSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    this.idCha = id;
                    if (id != undefined) {
                        this.queryInfo.ParameterDependencies = id.toString();
                    }
                    else {
                        this.queryInfo.ParameterDependencies = "0";
                    }
                    this.isShowView = this.route.snapshot.params.isShowView;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                };
                TrieuChungSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    if (this.isShowView == "true") {
                        this.show = true;
                        this.baseService.getById(id).subscribe(function (result) {
                            _this.trieuChung = result;
                            _this.trieuChung.TrieuChungChaId = _this.trieuChung.Id;
                            _this.trieuChung.Id = 0;
                            _this.trieuChung.Ten = null;
                            _this.trieuChung.DanhMucChuanIds = null;
                            _this.trieuChung.TrieuChungDanhMucChuanDoans = null;
                            // console.log("AddChildren", this.trieuChung);
                        });
                    }
                    else {
                        this.show = false;
                        this.baseService.getById(id).subscribe(function (resultData) {
                            if (resultData !== null && resultData !== undefined) {
                                _this.trieuChung = resultData;
                            }
                        });
                    }
                };
                TrieuChungSharedComponent.prototype.getSharedData = function () {
                    // console.log(this.trieuChung);
                    return this.trieuChung;
                };
                return TrieuChungSharedComponent;
            }());
            TrieuChungSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] }
            ]; };
            TrieuChungSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trieu-chung-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trieu-chung-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trieu-chung-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.scss")).default]
                })
            ], TrieuChungSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi90cmlldS1jaHVuZy90cmlldS1jaHVuZy11cGRhdGUvdHJpZXUtY2h1bmctdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: TrieuChungUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungUpdateComponent", function () { return TrieuChungUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _trieu_chung_shared_trieu_chung_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trieu-chung-shared/trieu-chung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.ts");
            var TrieuChungUpdateComponent = /** @class */ (function () {
                function TrieuChungUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                TrieuChungUpdateComponent.prototype.ngOnInit = function () {
                };
                TrieuChungUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/trieu-chung']);
                };
                return TrieuChungUpdateComponent;
            }());
            TrieuChungUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_trieu_chung_shared_trieu_chung_shared_component__WEBPACK_IMPORTED_MODULE_3__["TrieuChungSharedComponent"], { static: true })
            ], TrieuChungUpdateComponent.prototype, "shared", void 0);
            TrieuChungUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trieu-chung-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trieu-chung-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trieu-chung-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.scss")).default]
                })
            ], TrieuChungUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.model.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.model.ts ***!
          \************************************************************************************************/
        /*! exports provided: TrieuChung, TrieuChungDanhMucChuanDoan, LookupQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChung", function () { return TrieuChung; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungDanhMucChuanDoan", function () { return TrieuChungDanhMucChuanDoan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupQueryInfo", function () { return LookupQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var TrieuChung = /** @class */ (function () {
                function TrieuChung(Id, Ten, TenCha, TrieuChungChaId, CapNhom, TrieuChungDanhMucChuanDoans, DanhMucChuanIds) {
                    if (Id === void 0) { Id = 0; }
                    if (Ten === void 0) { Ten = null; }
                    if (TenCha === void 0) { TenCha = null; }
                    if (TrieuChungChaId === void 0) { TrieuChungChaId = 0; }
                    if (CapNhom === void 0) { CapNhom = 0; }
                    if (TrieuChungDanhMucChuanDoans === void 0) { TrieuChungDanhMucChuanDoans = []; }
                    if (DanhMucChuanIds === void 0) { DanhMucChuanIds = []; }
                    this.Id = Id;
                    this.Ten = Ten;
                    this.TenCha = TenCha;
                    this.TrieuChungChaId = TrieuChungChaId;
                    this.CapNhom = CapNhom;
                    this.TrieuChungDanhMucChuanDoans = TrieuChungDanhMucChuanDoans;
                    this.DanhMucChuanIds = DanhMucChuanIds;
                }
                return TrieuChung;
            }());
            var TrieuChungDanhMucChuanDoan = /** @class */ (function () {
                function TrieuChungDanhMucChuanDoan(TrieuChungId, DanhMucChuanDoanId) {
                    if (TrieuChungId === void 0) { TrieuChungId = 0; }
                    if (DanhMucChuanDoanId === void 0) { DanhMucChuanDoanId = 0; }
                    this.TrieuChungId = TrieuChungId;
                    this.DanhMucChuanDoanId = DanhMucChuanDoanId;
                }
                return TrieuChungDanhMucChuanDoan;
            }());
            var LookupQueryInfo = /** @class */ (function () {
                function LookupQueryInfo(Take, Id, Query, ParameterDependencies) {
                    if (Take === void 0) { Take = 50; }
                    if (Id === void 0) { Id = 0; }
                    if (Query === void 0) { Query = null; }
                    if (ParameterDependencies === void 0) { ParameterDependencies = null; }
                    this.Take = Take;
                    this.Id = Id;
                    this.Query = Query;
                    this.ParameterDependencies = ParameterDependencies;
                }
                return LookupQueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.module.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.module.ts ***!
          \*************************************************************************************************/
        /*! exports provided: TrieuChungModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungModule", function () { return TrieuChungModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _trieu_chung_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trieu-chung.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.service.ts");
            /* harmony import */ var _trieu_chung_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trieu-chung-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-routing.module.ts");
            /* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm2015/index.js");
            /* harmony import */ var _trieu_chung_list_trieu_chung_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trieu-chung-list/trieu-chung-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-list/trieu-chung-list.component.ts");
            /* harmony import */ var _trieu_chung_shared_trieu_chung_shared_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./trieu-chung-shared/trieu-chung-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-shared/trieu-chung-shared.component.ts");
            /* harmony import */ var _trieu_chung_create_trieu_chung_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trieu-chung-create/trieu-chung-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-create/trieu-chung-create.component.ts");
            /* harmony import */ var _trieu_chung_update_trieu_chung_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trieu-chung-update/trieu-chung-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung-update/trieu-chung-update.component.ts");
            var TrieuChungModule = /** @class */ (function () {
                function TrieuChungModule() {
                }
                return TrieuChungModule;
            }());
            TrieuChungModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_trieu_chung_list_trieu_chung_list_component__WEBPACK_IMPORTED_MODULE_19__["TrieuChungListComponent"], _trieu_chung_shared_trieu_chung_shared_component__WEBPACK_IMPORTED_MODULE_20__["TrieuChungSharedComponent"], _trieu_chung_create_trieu_chung_create_component__WEBPACK_IMPORTED_MODULE_21__["TrieuChungCreateComponent"], _trieu_chung_update_trieu_chung_update_component__WEBPACK_IMPORTED_MODULE_22__["TrieuChungUpdateComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_18__["TreeViewModule"],
                        _trieu_chung_routing_module__WEBPACK_IMPORTED_MODULE_17__["TrieuChungRoutingModule"]
                    ],
                    providers: [
                        _trieu_chung_service__WEBPACK_IMPORTED_MODULE_16__["TrieuChungService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"], useClass: _trieu_chung_service__WEBPACK_IMPORTED_MODULE_16__["TrieuChungService"] },
                    ]
                })
            ], TrieuChungModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.service.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/trieu-chung/trieu-chung.service.ts ***!
          \**************************************************************************************************/
        /*! exports provided: TrieuChungService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieuChungService", function () { return TrieuChungService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var TrieuChungService = /** @class */ (function (_super) {
                __extends(TrieuChungService, _super);
                function TrieuChungService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'TrieuChung';
                    return _this;
                }
                return TrieuChungService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            TrieuChungService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            TrieuChungService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TrieuChungService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-trieu-chung-trieu-chung-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-trieu-chung-trieu-chung-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-trieu-chung-trieu-chung-module-es5.js.map