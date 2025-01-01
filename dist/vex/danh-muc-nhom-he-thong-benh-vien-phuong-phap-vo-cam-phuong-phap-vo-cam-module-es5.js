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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-phuong-phap-vo-cam-phuong-phap-vo-cam-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Phương Pháp Vô Cảm',Path:'/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam', Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Phương Pháp Vô Cảm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phuong-phap-vo-cam-shared>\n                </app-phuong-phap-vo-cam-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện',Path:''}\n                    ,{Title:'Phương Pháp Vô Cảm',Path:'/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam', Active: true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [showExportExcel]=\"true\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <app-textbox fxFlex=\"50%\" fxFlex.sm=\"50%\" maxlength=\"50\" id=\"Ma\" label=\"Mã\" [required]=\"true\"\n        [(model)]=\"phuongPhapVoCam.Ma\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textbox id=\"Ten\" fxFlex=\"50%\" fxFlex.sm=\"50%\" maxlength=\"250\" [required]=\"true\" [(model)]=\"phuongPhapVoCam.Ten\"\n        label=\"Tên\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textarea id=\"MoTa\" fxFlex=\"100%\" maxlength=\"2000\" [(model)]=\"phuongPhapVoCam.MoTa\" label=\"Mô Tả\"\n        [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textarea>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.html": 
        /*!*******************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.html ***!
          \*******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Phương Pháp Vô Cảm',Path:'/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam', Active: true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Phương Pháp Vô Cảm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-phuong-phap-vo-cam-shared></app-phuong-phap-vo-cam-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9waHVvbmctcGhhcC12by1jYW0vcGh1b25nLXBoYXAtdm8tY2FtLWNyZWF0ZS9waHVvbmctcGhhcC12by1jYW0tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamCreateComponent", function () { return PhuongPhapVoCamCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _phuong_phap_vo_cam_shared_phuong_phap_vo_cam_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.ts");
            var PhuongPhapVoCamCreateComponent = /** @class */ (function () {
                function PhuongPhapVoCamCreateComponent(router) {
                    this.router = router;
                }
                PhuongPhapVoCamCreateComponent.prototype.ngOnInit = function () {
                };
                PhuongPhapVoCamCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam']);
                };
                return PhuongPhapVoCamCreateComponent;
            }());
            PhuongPhapVoCamCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phuong_phap_vo_cam_shared_phuong_phap_vo_cam_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhuongPhapVoCamSharedComponent"], { static: true })
            ], PhuongPhapVoCamCreateComponent.prototype, "shared", void 0);
            PhuongPhapVoCamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phuong-phap-vo-cam-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phuong-phap-vo-cam-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phuong-phap-vo-cam-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.scss")).default]
                })
            ], PhuongPhapVoCamCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9waHVvbmctcGhhcC12by1jYW0vcGh1b25nLXBoYXAtdm8tY2FtLWxpc3QvcGh1b25nLXBoYXAtdm8tY2FtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamListComponent", function () { return PhuongPhapVoCamListComponent; });
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
            var PhuongPhapVoCamListComponent = /** @class */ (function () {
                function PhuongPhapVoCamListComponent(notificationService, authService, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.gridColumns = [];
                }
                PhuongPhapVoCamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucPhuongPhapVoCam;
                    this.gridColumns = [
                        { Field: 'Ma', Title: 'Mã', Width: 120, Sortable: true, LinkDetail: true },
                        { Field: 'Ten', Title: 'Tên Đầy Đủ', Width: 200, Sortable: true },
                        { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true }
                    ];
                };
                PhuongPhapVoCamListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('PhuongPhapVoCam/ExportPhuongPhapVoCam', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'PhuongPhapVoCam' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                PhuongPhapVoCamListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                PhuongPhapVoCamListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return PhuongPhapVoCamListComponent;
            }());
            PhuongPhapVoCamListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
            ], PhuongPhapVoCamListComponent.prototype, "gridChild", void 0);
            PhuongPhapVoCamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-phuong-phap-vo-cam-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phuong-phap-vo-cam-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phuong-phap-vo-cam-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.scss")).default]
                })
            ], PhuongPhapVoCamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-routing.module.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-routing.module.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamRoutingModule", function () { return PhuongPhapVoCamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _phuong_phap_vo_cam_list_phuong_phap_vo_cam_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.ts");
            /* harmony import */ var _phuong_phap_vo_cam_create_phuong_phap_vo_cam_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.ts");
            /* harmony import */ var _phuong_phap_vo_cam_update_phuong_phap_vo_cam_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _phuong_phap_vo_cam_list_phuong_phap_vo_cam_list_component__WEBPACK_IMPORTED_MODULE_3__["PhuongPhapVoCamListComponent"],
                    data: {
                        title: 'Danh mục phương pháp vô cảm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucPhuongPhapVoCam,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _phuong_phap_vo_cam_create_phuong_phap_vo_cam_create_component__WEBPACK_IMPORTED_MODULE_4__["PhuongPhapVoCamCreateComponent"],
                    data: {
                        title: 'Thêm phương pháp vô cảm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucPhuongPhapVoCam,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _phuong_phap_vo_cam_update_phuong_phap_vo_cam_update_component__WEBPACK_IMPORTED_MODULE_5__["PhuongPhapVoCamUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa phương pháp vô cảm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucPhuongPhapVoCam,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                }
            ];
            var PhuongPhapVoCamRoutingModule = /** @class */ (function () {
                function PhuongPhapVoCamRoutingModule() {
                }
                return PhuongPhapVoCamRoutingModule;
            }());
            PhuongPhapVoCamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], PhuongPhapVoCamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9waHVvbmctcGhhcC12by1jYW0vcGh1b25nLXBoYXAtdm8tY2FtLXNoYXJlZC9waHVvbmctcGhhcC12by1jYW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamSharedComponent", function () { return PhuongPhapVoCamSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var PhuongPhapVoCamSharedComponent = /** @class */ (function () {
                function PhuongPhapVoCamSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.phuongPhapVoCam = {};
                }
                PhuongPhapVoCamSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                };
                PhuongPhapVoCamSharedComponent.prototype.getSharedData = function () {
                    return this.phuongPhapVoCam;
                };
                PhuongPhapVoCamSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.phuongPhapVoCam = resultData;
                    });
                };
                return PhuongPhapVoCamSharedComponent;
            }());
            PhuongPhapVoCamSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
            ]; };
            PhuongPhapVoCamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phuong-phap-vo-cam-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phuong-phap-vo-cam-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phuong-phap-vo-cam-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.scss")).default]
                })
            ], PhuongPhapVoCamSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.scss": 
        /*!*****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.scss ***!
          \*****************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9waHVvbmctcGhhcC12by1jYW0vcGh1b25nLXBoYXAtdm8tY2FtLXVwZGF0ZS9waHVvbmctcGhhcC12by1jYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.ts": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.ts ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamUpdateComponent", function () { return PhuongPhapVoCamUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _phuong_phap_vo_cam_shared_phuong_phap_vo_cam_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.ts");
            var PhuongPhapVoCamUpdateComponent = /** @class */ (function () {
                function PhuongPhapVoCamUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                PhuongPhapVoCamUpdateComponent.prototype.ngOnInit = function () {
                };
                PhuongPhapVoCamUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam']);
                };
                return PhuongPhapVoCamUpdateComponent;
            }());
            PhuongPhapVoCamUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_phuong_phap_vo_cam_shared_phuong_phap_vo_cam_shared_component__WEBPACK_IMPORTED_MODULE_3__["PhuongPhapVoCamSharedComponent"], { static: true })
            ], PhuongPhapVoCamUpdateComponent.prototype, "shared", void 0);
            PhuongPhapVoCamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phuong-phap-vo-cam-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phuong-phap-vo-cam-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phuong-phap-vo-cam-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.scss")).default]
                })
            ], PhuongPhapVoCamUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam.module.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam.module.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamModule", function () { return PhuongPhapVoCamModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _phuong_phap_vo_cam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phuong-phap-vo-cam.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _phuong_phap_vo_cam_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phuong-phap-vo-cam-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-routing.module.ts");
            /* harmony import */ var _phuong_phap_vo_cam_list_phuong_phap_vo_cam_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-list/phuong-phap-vo-cam-list.component.ts");
            /* harmony import */ var _phuong_phap_vo_cam_create_phuong_phap_vo_cam_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-create/phuong-phap-vo-cam-create.component.ts");
            /* harmony import */ var _phuong_phap_vo_cam_update_phuong_phap_vo_cam_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-update/phuong-phap-vo-cam-update.component.ts");
            /* harmony import */ var _phuong_phap_vo_cam_shared_phuong_phap_vo_cam_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam-shared/phuong-phap-vo-cam-shared.component.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            var PhuongPhapVoCamModule = /** @class */ (function () {
                function PhuongPhapVoCamModule() {
                }
                return PhuongPhapVoCamModule;
            }());
            PhuongPhapVoCamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _phuong_phap_vo_cam_list_phuong_phap_vo_cam_list_component__WEBPACK_IMPORTED_MODULE_9__["PhuongPhapVoCamListComponent"],
                        _phuong_phap_vo_cam_create_phuong_phap_vo_cam_create_component__WEBPACK_IMPORTED_MODULE_10__["PhuongPhapVoCamCreateComponent"],
                        _phuong_phap_vo_cam_update_phuong_phap_vo_cam_update_component__WEBPACK_IMPORTED_MODULE_11__["PhuongPhapVoCamUpdateComponent"],
                        _phuong_phap_vo_cam_shared_phuong_phap_vo_cam_shared_component__WEBPACK_IMPORTED_MODULE_12__["PhuongPhapVoCamSharedComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        _phuong_phap_vo_cam_routing_module__WEBPACK_IMPORTED_MODULE_8__["PhuongPhapVoCamRoutingModule"]
                    ],
                    providers: [
                        _phuong_phap_vo_cam_service__WEBPACK_IMPORTED_MODULE_5__["PhuongPhapVoCamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _phuong_phap_vo_cam_service__WEBPACK_IMPORTED_MODULE_5__["PhuongPhapVoCamService"] },
                    ]
                })
            ], PhuongPhapVoCamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam.service.ts": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/phuong-phap-vo-cam/phuong-phap-vo-cam.service.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: PhuongPhapVoCamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhuongPhapVoCamService", function () { return PhuongPhapVoCamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var PhuongPhapVoCamService = /** @class */ (function (_super) {
                __extends(PhuongPhapVoCamService, _super);
                function PhuongPhapVoCamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'PhuongPhapVoCam';
                    return _this;
                }
                return PhuongPhapVoCamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            PhuongPhapVoCamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            PhuongPhapVoCamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], PhuongPhapVoCamService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-phuong-phap-vo-cam-phuong-phap-vo-cam-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-phuong-phap-vo-cam-phuong-phap-vo-cam-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-phuong-phap-vo-cam-phuong-phap-vo-cam-module-es5.js.map