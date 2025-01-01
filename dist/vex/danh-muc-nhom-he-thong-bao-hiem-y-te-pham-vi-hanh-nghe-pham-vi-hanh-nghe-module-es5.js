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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-bao-hiem-y-te-pham-vi-hanh-nghe-pham-vi-hanh-nghe-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bảo Hiểm Y Tế',Path:''}\n    ,{Title:'Phạm Vi Hành Nghề',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe', Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Phạm Vi Hành Nghề</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-pham-vi-hanh-nghe-shared>\n                </app-pham-vi-hanh-nghe-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.html": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.html ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bảo Hiểm Y Tế',Path:''}\n                    ,{Title:'Phạm Vi Hành Nghề',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe', Active: true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [showExportExcel]=\"true\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <app-textbox fxFlex=\"50%\" fxFlex.sm=\"50%\" maxlength=\"50\" id=\"Ma\" label=\"Mã\" [required]=\"true\"\n        [(model)]=\"phamViHanhNghe.Ma\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textbox id=\"Ten\" fxFlex=\"50%\" fxFlex.sm=\"50%\" maxlength=\"250\" [required]=\"true\" [(model)]=\"phamViHanhNghe.Ten\"\n        label=\"Tên\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textarea id=\"MoTa\" fxFlex=\"100%\" maxlength=\"2000\" [(model)]=\"phamViHanhNghe.MoTa\" label=\"Mô Tả\"\n        [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textarea>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bảo Hiểm Y Tế',Path:''}\n    ,{Title:'Phạm Vi Hành Nghề',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe', Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Phạm Vi Hành Nghề</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-pham-vi-hanh-nghe-shared></app-pham-vi-hanh-nghe-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvcGhhbS12aS1oYW5oLW5naGUvcGhhbS12aS1oYW5oLW5naGUtY3JlYXRlL3BoYW0tdmktaGFuaC1uZ2hlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheCreateComponent", function () { return PhamViHanhNgheCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pham_vi_hanh_nghe_shared_pham_vi_hanh_nghe_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.ts");
            var PhamViHanhNgheCreateComponent = /** @class */ (function () {
                function PhamViHanhNgheCreateComponent(router) {
                    this.router = router;
                }
                PhamViHanhNgheCreateComponent.prototype.ngOnInit = function () {
                };
                PhamViHanhNgheCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe']);
                };
                return PhamViHanhNgheCreateComponent;
            }());
            PhamViHanhNgheCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pham_vi_hanh_nghe_shared_pham_vi_hanh_nghe_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhamViHanhNgheSharedComponent"], { static: true })
            ], PhamViHanhNgheCreateComponent.prototype, "shared", void 0);
            PhamViHanhNgheCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pham-vi-hanh-nghe-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pham-vi-hanh-nghe-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pham-vi-hanh-nghe-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.scss")).default]
                })
            ], PhamViHanhNgheCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.scss": 
        /*!**************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.scss ***!
          \**************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvcGhhbS12aS1oYW5oLW5naGUvcGhhbS12aS1oYW5oLW5naGUtbGlzdC9waGFtLXZpLWhhbmgtbmdoZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheListComponent", function () { return PhamViHanhNgheListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var PhamViHanhNgheListComponent = /** @class */ (function () {
                function PhamViHanhNgheListComponent(authService, dialog, notificationService, apiService) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.gridColumns = [];
                }
                PhamViHanhNgheListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucPhamViHanhNghe;
                    this.gridColumns = [
                        { Field: 'Ten', Title: 'Tên Đầy Đủ', Width: 200, Sortable: true, LinkDetail: true },
                        { Field: 'Ma', Title: 'Mã', Width: 120, Sortable: true },
                        { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true }
                    ];
                };
                PhamViHanhNgheListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('PhamViHanhNghe/ExportPhamViHanhNghe', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'PhamViHanhNghe' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhamViHanhNgheListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                PhamViHanhNgheListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return PhamViHanhNgheListComponent;
            }());
            PhamViHanhNgheListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
            ], PhamViHanhNgheListComponent.prototype, "gridChild", void 0);
            PhamViHanhNgheListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-pham-vi-hanh-nghe-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pham-vi-hanh-nghe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pham-vi-hanh-nghe-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.scss")).default]
                })
            ], PhamViHanhNgheListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-routing.module.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-routing.module.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheRoutingModule", function () { return PhamViHanhNgheRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pham_vi_hanh_nghe_list_pham_vi_hanh_nghe_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_create_pham_vi_hanh_nghe_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_update_pham_vi_hanh_nghe_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _pham_vi_hanh_nghe_list_pham_vi_hanh_nghe_list_component__WEBPACK_IMPORTED_MODULE_3__["PhamViHanhNgheListComponent"],
                    data: {
                        title: 'Danh mục phạm vi hành nghề',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucPhamViHanhNghe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _pham_vi_hanh_nghe_create_pham_vi_hanh_nghe_create_component__WEBPACK_IMPORTED_MODULE_4__["PhamViHanhNgheCreateComponent"],
                    data: {
                        title: 'Thêm phạm vi hành nghề',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucPhamViHanhNghe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _pham_vi_hanh_nghe_update_pham_vi_hanh_nghe_update_component__WEBPACK_IMPORTED_MODULE_5__["PhamViHanhNgheUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa phạm vi hành nghề',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucPhamViHanhNghe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                }
            ];
            var PhamViHanhNgheRoutingModule = /** @class */ (function () {
                function PhamViHanhNgheRoutingModule() {
                }
                return PhamViHanhNgheRoutingModule;
            }());
            PhamViHanhNgheRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], PhamViHanhNgheRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvcGhhbS12aS1oYW5oLW5naGUvcGhhbS12aS1oYW5oLW5naGUtc2hhcmVkL3BoYW0tdmktaGFuaC1uZ2hlLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheSharedComponent", function () { return PhamViHanhNgheSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var PhamViHanhNgheSharedComponent = /** @class */ (function () {
                function PhamViHanhNgheSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.phamViHanhNghe = {};
                }
                PhamViHanhNgheSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                };
                PhamViHanhNgheSharedComponent.prototype.getSharedData = function () {
                    return this.phamViHanhNghe;
                };
                PhamViHanhNgheSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.phamViHanhNghe = resultData;
                    });
                };
                return PhamViHanhNgheSharedComponent;
            }());
            PhamViHanhNgheSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
            ]; };
            PhamViHanhNgheSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pham-vi-hanh-nghe-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pham-vi-hanh-nghe-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pham-vi-hanh-nghe-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.scss")).default]
                })
            ], PhamViHanhNgheSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvcGhhbS12aS1oYW5oLW5naGUvcGhhbS12aS1oYW5oLW5naGUtdXBkYXRlL3BoYW0tdmktaGFuaC1uZ2hlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheUpdateComponent", function () { return PhamViHanhNgheUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pham_vi_hanh_nghe_shared_pham_vi_hanh_nghe_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.ts");
            var PhamViHanhNgheUpdateComponent = /** @class */ (function () {
                function PhamViHanhNgheUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                PhamViHanhNgheUpdateComponent.prototype.ngOnInit = function () {
                };
                PhamViHanhNgheUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe']);
                };
                return PhamViHanhNgheUpdateComponent;
            }());
            PhamViHanhNgheUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_pham_vi_hanh_nghe_shared_pham_vi_hanh_nghe_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhamViHanhNgheSharedComponent"], { static: true })
            ], PhamViHanhNgheUpdateComponent.prototype, "shared", void 0);
            PhamViHanhNgheUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pham-vi-hanh-nghe-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pham-vi-hanh-nghe-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pham-vi-hanh-nghe-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.scss")).default]
                })
            ], PhamViHanhNgheUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe.module.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe.module.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheModule", function () { return PhamViHanhNgheModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _pham_vi_hanh_nghe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pham-vi-hanh-nghe.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-routing.module.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_list_pham_vi_hanh_nghe_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-list/pham-vi-hanh-nghe-list.component.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_create_pham_vi_hanh_nghe_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-create/pham-vi-hanh-nghe-create.component.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_update_pham_vi_hanh_nghe_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-update/pham-vi-hanh-nghe-update.component.ts");
            /* harmony import */ var _pham_vi_hanh_nghe_shared_pham_vi_hanh_nghe_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe-shared/pham-vi-hanh-nghe-shared.component.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            var PhamViHanhNgheModule = /** @class */ (function () {
                function PhamViHanhNgheModule() {
                }
                return PhamViHanhNgheModule;
            }());
            PhamViHanhNgheModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _pham_vi_hanh_nghe_list_pham_vi_hanh_nghe_list_component__WEBPACK_IMPORTED_MODULE_9__["PhamViHanhNgheListComponent"],
                        _pham_vi_hanh_nghe_create_pham_vi_hanh_nghe_create_component__WEBPACK_IMPORTED_MODULE_10__["PhamViHanhNgheCreateComponent"],
                        _pham_vi_hanh_nghe_update_pham_vi_hanh_nghe_update_component__WEBPACK_IMPORTED_MODULE_11__["PhamViHanhNgheUpdateComponent"],
                        _pham_vi_hanh_nghe_shared_pham_vi_hanh_nghe_shared_component__WEBPACK_IMPORTED_MODULE_12__["PhamViHanhNgheSharedComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        _pham_vi_hanh_nghe_routing_module__WEBPACK_IMPORTED_MODULE_8__["PhamViHanhNgheRoutingModule"]
                    ],
                    providers: [
                        _pham_vi_hanh_nghe_service__WEBPACK_IMPORTED_MODULE_5__["PhamViHanhNgheService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _pham_vi_hanh_nghe_service__WEBPACK_IMPORTED_MODULE_5__["PhamViHanhNgheService"] },
                    ]
                })
            ], PhamViHanhNgheModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe.service.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/pham-vi-hanh-nghe/pham-vi-hanh-nghe.service.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: PhamViHanhNgheService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhamViHanhNgheService", function () { return PhamViHanhNgheService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var PhamViHanhNgheService = /** @class */ (function (_super) {
                __extends(PhamViHanhNgheService, _super);
                function PhamViHanhNgheService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'PhamViHanhNghe';
                    return _this;
                }
                return PhamViHanhNgheService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            PhamViHanhNgheService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            PhamViHanhNgheService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], PhamViHanhNgheService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-pham-vi-hanh-nghe-pham-vi-hanh-nghe-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-pham-vi-hanh-nghe-pham-vi-hanh-nghe-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-pham-vi-hanh-nghe-pham-vi-hanh-nghe-module-es5.js.map