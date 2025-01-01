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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-loai-benh-vien-loai-benh-vien-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Loại Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien', Active: true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Loại Bệnh Viện</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-loai-benh-vien-shared>\n                </app-loai-benh-vien-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.html": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.html ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện',Path:''}\n                    ,{Title:'Loại Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien', Active: true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [showExportExcel]=\"true\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <app-textbox id=\"Ten\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [required]=\"true\" maxlength=\"250\" [(model)]=\"loaiBenhVien.Ten\"\n        label=\"Tên\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textarea id=\"Textarea\" fxFlex=\"100%\" maxlength=\"2000\" [(model)]=\"loaiBenhVien.MoTa\" label=\"Mô Tả\"\n        [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textarea>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Loại Bệnh Viện',Path:'/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien', Active: true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Loại Bệnh Viện</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-loai-benh-vien-shared></app-loai-benh-vien-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLWJlbmgtdmllbi9sb2FpLWJlbmgtdmllbi1jcmVhdGUvbG9haS1iZW5oLXZpZW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: LoaiBenhVienCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienCreateComponent", function () { return LoaiBenhVienCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _loai_benh_vien_shared_loai_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loai-benh-vien-shared/loai-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.ts");
            var LoaiBenhVienCreateComponent = /** @class */ (function () {
                function LoaiBenhVienCreateComponent(router) {
                    this.router = router;
                }
                LoaiBenhVienCreateComponent.prototype.ngOnInit = function () {
                };
                LoaiBenhVienCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien']);
                };
                return LoaiBenhVienCreateComponent;
            }());
            LoaiBenhVienCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loai_benh_vien_shared_loai_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__["LoaiBenhVienSharedComponent"], { static: true })
            ], LoaiBenhVienCreateComponent.prototype, "shared", void 0);
            LoaiBenhVienCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loai-benh-vien-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-benh-vien-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-benh-vien-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.scss")).default]
                })
            ], LoaiBenhVienCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.scss": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.scss ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLWJlbmgtdmllbi9sb2FpLWJlbmgtdmllbi1saXN0L2xvYWktYmVuaC12aWVuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: LoaiBenhVienListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienListComponent", function () { return LoaiBenhVienListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var LoaiBenhVienListComponent = /** @class */ (function () {
                function LoaiBenhVienListComponent(notificationService, authService, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.gridColumns = [];
                }
                LoaiBenhVienListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucLoaiBenhVien;
                    this.gridColumns = [
                        { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: true, LinkDetail: true },
                        { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true },
                    ];
                };
                LoaiBenhVienListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('LoaiBenhVien/ExportLoaiBenhVien', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'LoaiBenhVien' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                LoaiBenhVienListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                LoaiBenhVienListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return LoaiBenhVienListComponent;
            }());
            LoaiBenhVienListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
            ], LoaiBenhVienListComponent.prototype, "gridChild", void 0);
            LoaiBenhVienListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-loai-benh-vien-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-benh-vien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-benh-vien-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.scss")).default]
                })
            ], LoaiBenhVienListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-routing.module.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-routing.module.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: LoaiBenhVienRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienRoutingModule", function () { return LoaiBenhVienRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _loai_benh_vien_list_loai_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loai-benh-vien-list/loai-benh-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.ts");
            /* harmony import */ var _loai_benh_vien_create_loai_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loai-benh-vien-create/loai-benh-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.ts");
            /* harmony import */ var _loai_benh_vien_update_loai_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loai-benh-vien-update/loai-benh-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _loai_benh_vien_list_loai_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_3__["LoaiBenhVienListComponent"],
                    data: {
                        title: 'Danh mục loại bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucLoaiBenhVien,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _loai_benh_vien_create_loai_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_4__["LoaiBenhVienCreateComponent"],
                    data: {
                        title: 'Thêm loại bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucLoaiBenhVien,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _loai_benh_vien_update_loai_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_5__["LoaiBenhVienUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa loại bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucLoaiBenhVien,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                }
            ];
            var LoaiBenhVienRoutingModule = /** @class */ (function () {
                function LoaiBenhVienRoutingModule() {
                }
                return LoaiBenhVienRoutingModule;
            }());
            LoaiBenhVienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LoaiBenhVienRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLWJlbmgtdmllbi9sb2FpLWJlbmgtdmllbi1zaGFyZWQvbG9haS1iZW5oLXZpZW4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: LoaiBenhVienSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienSharedComponent", function () { return LoaiBenhVienSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var LoaiBenhVienSharedComponent = /** @class */ (function () {
                function LoaiBenhVienSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.loaiBenhVien = {};
                }
                LoaiBenhVienSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                };
                LoaiBenhVienSharedComponent.prototype.getSharedData = function () {
                    return this.loaiBenhVien;
                };
                LoaiBenhVienSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.loaiBenhVien = resultData;
                    });
                };
                return LoaiBenhVienSharedComponent;
            }());
            LoaiBenhVienSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
            ]; };
            LoaiBenhVienSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loai-benh-vien-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-benh-vien-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-benh-vien-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.scss")).default]
                })
            ], LoaiBenhVienSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLWJlbmgtdmllbi9sb2FpLWJlbmgtdmllbi11cGRhdGUvbG9haS1iZW5oLXZpZW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: LoaiBenhVienUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienUpdateComponent", function () { return LoaiBenhVienUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _loai_benh_vien_shared_loai_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loai-benh-vien-shared/loai-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.ts");
            var LoaiBenhVienUpdateComponent = /** @class */ (function () {
                function LoaiBenhVienUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                LoaiBenhVienUpdateComponent.prototype.ngOnInit = function () {
                };
                LoaiBenhVienUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien']);
                };
                return LoaiBenhVienUpdateComponent;
            }());
            LoaiBenhVienUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loai_benh_vien_shared_loai_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_3__["LoaiBenhVienSharedComponent"], { static: true })
            ], LoaiBenhVienUpdateComponent.prototype, "shared", void 0);
            LoaiBenhVienUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loai-benh-vien-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-benh-vien-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-benh-vien-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.scss")).default]
                })
            ], LoaiBenhVienUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien.module.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien.module.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: LoaiBenhVienModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienModule", function () { return LoaiBenhVienModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _loai_benh_vien_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loai-benh-vien.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _loai_benh_vien_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loai-benh-vien-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-routing.module.ts");
            /* harmony import */ var _loai_benh_vien_list_loai_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loai-benh-vien-list/loai-benh-vien-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-list/loai-benh-vien-list.component.ts");
            /* harmony import */ var _loai_benh_vien_create_loai_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loai-benh-vien-create/loai-benh-vien-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-create/loai-benh-vien-create.component.ts");
            /* harmony import */ var _loai_benh_vien_update_loai_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loai-benh-vien-update/loai-benh-vien-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-update/loai-benh-vien-update.component.ts");
            /* harmony import */ var _loai_benh_vien_shared_loai_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loai-benh-vien-shared/loai-benh-vien-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien-shared/loai-benh-vien-shared.component.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            var LoaiBenhVienModule = /** @class */ (function () {
                function LoaiBenhVienModule() {
                }
                return LoaiBenhVienModule;
            }());
            LoaiBenhVienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _loai_benh_vien_list_loai_benh_vien_list_component__WEBPACK_IMPORTED_MODULE_9__["LoaiBenhVienListComponent"],
                        _loai_benh_vien_create_loai_benh_vien_create_component__WEBPACK_IMPORTED_MODULE_10__["LoaiBenhVienCreateComponent"],
                        _loai_benh_vien_update_loai_benh_vien_update_component__WEBPACK_IMPORTED_MODULE_11__["LoaiBenhVienUpdateComponent"],
                        _loai_benh_vien_shared_loai_benh_vien_shared_component__WEBPACK_IMPORTED_MODULE_12__["LoaiBenhVienSharedComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        _loai_benh_vien_routing_module__WEBPACK_IMPORTED_MODULE_8__["LoaiBenhVienRoutingModule"]
                    ],
                    providers: [
                        _loai_benh_vien_service__WEBPACK_IMPORTED_MODULE_5__["LoaiBenhVienService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _loai_benh_vien_service__WEBPACK_IMPORTED_MODULE_5__["LoaiBenhVienService"] },
                    ]
                })
            ], LoaiBenhVienModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien.service.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-benh-vien/loai-benh-vien.service.ts ***!
          \********************************************************************************************************/
        /*! exports provided: LoaiBenhVienService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiBenhVienService", function () { return LoaiBenhVienService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var LoaiBenhVienService = /** @class */ (function (_super) {
                __extends(LoaiBenhVienService, _super);
                function LoaiBenhVienService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'LoaiBenhVien';
                    return _this;
                }
                return LoaiBenhVienService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            LoaiBenhVienService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            LoaiBenhVienService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoaiBenhVienService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loai-benh-vien-loai-benh-vien-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loai-benh-vien-loai-benh-vien-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loai-benh-vien-loai-benh-vien-module-es5.js.map