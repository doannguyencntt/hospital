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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-thuoc-mau-va-che-pham-mau-va-che-pham-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.html": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.html ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n{Title:'Danh Mục',Path:''}\n,{Title:'Nhóm Hệ Thống',Path:''}\n,{Title:'Thuốc',Path:''}\n,{Title:'Máu Và Chế Phẩm',Path:'/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham',Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Máu Và Chế Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-mau-va-che-pham-shared>\n                </app-mau-va-che-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.html": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.html ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n        <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n            <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n                <div>\n                    <vex-breadcrumbs [crumbs]=\"[\n                        {Title:'Danh Mục',Path:''}\n                        ,{Title:'Nhóm Hệ Thống',Path:''}\n                        ,{Title:'Thuốc ',Path:''}\n                        ,{Title:'Máu Và Chế Phẩm',Path:'/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham',Active:true}\n                        ]\">\n                    </vex-breadcrumbs>\n                </div>\n            </div>\n        </vex-page-layout-header>\n        <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n            <div class=\"card overflow-auto -mt-15\">\n                <app-grid baseRoute=\"/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham\" [gridColumns]=\"gridColumns\"\n                    [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\"\n                    [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\" #gridMauVaChePham >\n                </app-grid>\n            </div>\n        </vex-page-layout-content>\n    </vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.html": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.html ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <app-textbox fxFlex=\"20%\" maxlength=\"20%\" id=\"Ma\" label=\"Mã\" maxlength=\"20\" [required]=\"true\"\n    [(model)]=\"mauVaChePham.Ma\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-textbox id=\"Ten\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [required]=\"true\" maxlength=\"500\" [(model)]=\"mauVaChePham.Ten\"\n        label=\"Tên\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n    <app-combobox id=\"PhanLoaiMau\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Phân Loại Màu\"\n    hierarchyKeyToSend=\"PhanLoaiMau\"  url=\"MauVaChePham/GetListPhanLoaiMau\"\n    [(model)]=\"mauVaChePham.PhanLoaiMau\" [modelText]=\"mauVaChePham.TenPhanLoaiMau\" [required]=\"true\"\n    [validationerror]=\"'PhanLoaiMau' | validationerror:validationErrors\">\n</app-combobox>\n    <app-textboxnumeric id=\"TheTich\" fxFlex=\"17%\" fxFlex.sm=\"17%\" [(model)]=\"mauVaChePham.TheTich\" [required]=\"true\" label=\"Thể tích\" [validationerror]=\"'TheTich' | validationerror:validationErrors\" min =\"1\">\n    </app-textboxnumeric>\n    <app-textboxnumeric id=\"GiaTriToiDa\" [format]=\"\" fxFlex=\"17%\" fxFlex.sm=\"17%\" [(model)]=\"mauVaChePham.GiaTriToiDa\" [required]=\"true\" label=\"Giá máu\" [validationerror]=\"'GiaTriToiDa' | validationerror:validationErrors\" min=\"1\">\n    </app-textboxnumeric>\n    <app-textarea id=\"Textarea\" fxFlex=\"100%\" [(model)]=\"mauVaChePham.GhiChu\" label=\"Ghi Chú\"  maxlength=\"500\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\">\n    </app-textarea>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.html": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.html ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Thuốc',Path:''}\n    ,{Title:'Máu Và Chế Phẩm',Path:'/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Máu Và Chế Phẩm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-mau-va-che-pham-shared>\n                </app-mau-va-che-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.scss": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.scss ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL3RodW9jL21hdS12YS1jaGUtcGhhbS9tYXUtdmEtY2hlLXBoYW0tY3JlYXRlL21hdS12YS1jaGUtcGhhbS1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: MauVaChePhamCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamCreateComponent", function () { return MauVaChePhamCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _mau_va_che_pham_shared_mau_va_che_pham_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mau-va-che-pham-shared/mau-va-che-pham-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.ts");
            var MauVaChePhamCreateComponent = /** @class */ (function () {
                function MauVaChePhamCreateComponent(router) {
                    this.router = router;
                }
                MauVaChePhamCreateComponent.prototype.ngOnInit = function () {
                };
                MauVaChePhamCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham']);
                };
                return MauVaChePhamCreateComponent;
            }());
            MauVaChePhamCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_mau_va_che_pham_shared_mau_va_che_pham_shared_component__WEBPACK_IMPORTED_MODULE_3__["MauVaChePhamSharedComponent"], { static: true })
            ], MauVaChePhamCreateComponent.prototype, "shared", void 0);
            MauVaChePhamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mau-va-che-pham-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mau-va-che-pham-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mau-va-che-pham-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.scss")).default]
                })
            ], MauVaChePhamCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.scss": 
        /*!************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.scss ***!
          \************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL3RodW9jL21hdS12YS1jaGUtcGhhbS9tYXUtdmEtY2hlLXBoYW0tbGlzdC9tYXUtdmEtY2hlLXBoYW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: MauVaChePhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamListComponent", function () { return MauVaChePhamListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            var MauVaChePhamListComponent = /** @class */ (function () {
                function MauVaChePhamListComponent(dialog, authService, apiService, notificationService) {
                    this.dialog = dialog;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.expression = false;
                    this.gridColumns = [];
                }
                MauVaChePhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucMauVaChePham;
                    9;
                    this.gridColumns = [
                        { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
                        { Field: "Ten", Title: "Tên", MinWidth: 200, Sortable: true },
                        { Field: "TheTichs", Title: "Thể tích(ml)", Width: 250, Sortable: true },
                        { Field: "GiaTriToiDas", Title: "Giá trị tối đa", Width: 250, Sortable: true },
                    ];
                };
                MauVaChePhamListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('MauVaChePham/ExportMauVaChePham', self.gridMauVaChePham._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'MauVaChePham' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                MauVaChePhamListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                MauVaChePhamListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return MauVaChePhamListComponent;
            }());
            MauVaChePhamListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridMauVaChePham', { static: false })
            ], MauVaChePhamListComponent.prototype, "gridMauVaChePham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: false })
            ], MauVaChePhamListComponent.prototype, "gridChild", void 0);
            MauVaChePhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mau-va-che-pham-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mau-va-che-pham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mau-va-che-pham-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.scss")).default]
                })
            ], MauVaChePhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-routing.module.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-routing.module.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: MauVaChePhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamRoutingModule", function () { return MauVaChePhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _mau_va_che_pham_list_mau_va_che_pham_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mau-va-che-pham-list/mau-va-che-pham-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.ts");
            /* harmony import */ var _mau_va_che_pham_create_mau_va_che_pham_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mau-va-che-pham-create/mau-va-che-pham-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.ts");
            /* harmony import */ var _mau_va_che_pham_update_mau_va_che_pham_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mau-va-che-pham-update/mau-va-che-pham-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.ts");
            var routes = [
                {
                    path: '',
                    component: _mau_va_che_pham_list_mau_va_che_pham_list_component__WEBPACK_IMPORTED_MODULE_6__["MauVaChePhamListComponent"],
                    data: {
                        title: 'Danh mục máu và chế phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucMauVaChePham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _mau_va_che_pham_create_mau_va_che_pham_create_component__WEBPACK_IMPORTED_MODULE_7__["MauVaChePhamCreateComponent"],
                    data: {
                        title: 'Thêm máu và chế phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucMauVaChePham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _mau_va_che_pham_update_mau_va_che_pham_update_component__WEBPACK_IMPORTED_MODULE_8__["MauVaChePhamUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa máu và chế phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucMauVaChePham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var MauVaChePhamRoutingModule = /** @class */ (function () {
                function MauVaChePhamRoutingModule() {
                }
                return MauVaChePhamRoutingModule;
            }());
            MauVaChePhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], MauVaChePhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.scss": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.scss ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL3RodW9jL21hdS12YS1jaGUtcGhhbS9tYXUtdmEtY2hlLXBoYW0tc2hhcmVkL21hdS12YS1jaGUtcGhhbS1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: MauVaChePhamSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamSharedComponent", function () { return MauVaChePhamSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var MauVaChePhamSharedComponent = /** @class */ (function () {
                function MauVaChePhamSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.mauVaChePham = {};
                    this.isCreate = true;
                }
                MauVaChePhamSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                        this.isCreate = false;
                    }
                };
                MauVaChePhamSharedComponent.prototype.getSharedData = function () {
                    return this.mauVaChePham;
                };
                MauVaChePhamSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.mauVaChePham = resultData;
                    });
                };
                return MauVaChePhamSharedComponent;
            }());
            MauVaChePhamSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
            ]; };
            MauVaChePhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mau-va-che-pham-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mau-va-che-pham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mau-va-che-pham-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.scss")).default]
                })
            ], MauVaChePhamSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.scss": 
        /*!****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.scss ***!
          \****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL3RodW9jL21hdS12YS1jaGUtcGhhbS9tYXUtdmEtY2hlLXBoYW0tdXBkYXRlL21hdS12YS1jaGUtcGhhbS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: MauVaChePhamUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamUpdateComponent", function () { return MauVaChePhamUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _mau_va_che_pham_shared_mau_va_che_pham_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mau-va-che-pham-shared/mau-va-che-pham-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.ts");
            var MauVaChePhamUpdateComponent = /** @class */ (function () {
                function MauVaChePhamUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                MauVaChePhamUpdateComponent.prototype.ngOnInit = function () {
                    this.idsub = this.route.snapshot.params.id;
                };
                MauVaChePhamUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham']);
                };
                return MauVaChePhamUpdateComponent;
            }());
            MauVaChePhamUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_mau_va_che_pham_shared_mau_va_che_pham_shared_component__WEBPACK_IMPORTED_MODULE_3__["MauVaChePhamSharedComponent"], { static: true })
            ], MauVaChePhamUpdateComponent.prototype, "shared", void 0);
            MauVaChePhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mau-va-che-pham-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mau-va-che-pham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mau-va-che-pham-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.scss")).default]
                })
            ], MauVaChePhamUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: MauVaChePhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamModule", function () { return MauVaChePhamModule; });
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
            /* harmony import */ var _mau_va_che_pham_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mau-va-che-pham.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham.service.ts");
            /* harmony import */ var _mau_va_che_pham_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mau-va-che-pham-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-routing.module.ts");
            /* harmony import */ var _mau_va_che_pham_list_mau_va_che_pham_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mau-va-che-pham-list/mau-va-che-pham-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-list/mau-va-che-pham-list.component.ts");
            /* harmony import */ var _mau_va_che_pham_shared_mau_va_che_pham_shared_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mau-va-che-pham-shared/mau-va-che-pham-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-shared/mau-va-che-pham-shared.component.ts");
            /* harmony import */ var _mau_va_che_pham_create_mau_va_che_pham_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mau-va-che-pham-create/mau-va-che-pham-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-create/mau-va-che-pham-create.component.ts");
            /* harmony import */ var _mau_va_che_pham_update_mau_va_che_pham_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mau-va-che-pham-update/mau-va-che-pham-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham-update/mau-va-che-pham-update.component.ts");
            var MauVaChePhamModule = /** @class */ (function () {
                function MauVaChePhamModule() {
                }
                return MauVaChePhamModule;
            }());
            MauVaChePhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_mau_va_che_pham_list_mau_va_che_pham_list_component__WEBPACK_IMPORTED_MODULE_18__["MauVaChePhamListComponent"], _mau_va_che_pham_shared_mau_va_che_pham_shared_component__WEBPACK_IMPORTED_MODULE_19__["MauVaChePhamSharedComponent"], _mau_va_che_pham_create_mau_va_che_pham_create_component__WEBPACK_IMPORTED_MODULE_20__["MauVaChePhamCreateComponent"], _mau_va_che_pham_update_mau_va_che_pham_update_component__WEBPACK_IMPORTED_MODULE_21__["MauVaChePhamUpdateComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _mau_va_che_pham_routing_module__WEBPACK_IMPORTED_MODULE_17__["MauVaChePhamRoutingModule"]
                    ],
                    providers: [
                        _mau_va_che_pham_service__WEBPACK_IMPORTED_MODULE_16__["MauVaChePhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_11__["BaseService"], useClass: _mau_va_che_pham_service__WEBPACK_IMPORTED_MODULE_16__["MauVaChePhamService"] },
                    ]
                })
            ], MauVaChePhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham.service.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/thuoc/mau-va-che-pham/mau-va-che-pham.service.ts ***!
          \******************************************************************************************************/
        /*! exports provided: MauVaChePhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MauVaChePhamService", function () { return MauVaChePhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var MauVaChePhamService = /** @class */ (function (_super) {
                __extends(MauVaChePhamService, _super);
                function MauVaChePhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'MauVaChePham';
                    return _this;
                }
                return MauVaChePhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            MauVaChePhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            MauVaChePhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MauVaChePhamService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-thuoc-mau-va-che-pham-mau-va-che-pham-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-thuoc-mau-va-che-pham-mau-va-che-pham-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-thuoc-mau-va-che-pham-mau-va-che-pham-module-es5.js.map