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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-loai-phong-benh-loai-phong-benh-noi-tru-loai-phong-benh-noi-tru-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Loại Phòng Bệnh Nội Trú',Path:'/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru',Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Loại Phòng Bệnh Nội Trú</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-loai-phong-benh-noi-tru-shared>\n                </app-loai-phong-benh-noi-tru-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.html ***!
          \**********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện',Path:''}\n                    ,{Title:'Loại Phòng Bệnh Nội Trú',Path:'/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru', Active: true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru\"\n                [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"true\"\n                [lazyLoadPage]=\"true\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"></app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <app-textbox id=\"Ten\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"250\" [required]=\"true\"\n        [(model)]=\"loaiPhongBenhNoiTru.Ten\" label=\"Tên\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textarea id=\"Textarea\" fxFlex=\"100%\" maxlength=\"2000\" [(model)]=\"loaiPhongBenhNoiTru.MoTa\" label=\"Mô Tả\"\n        [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textarea>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Loại Phòng Bệnh Nội Trú',Path:'/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru', Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Loại Phòng Bệnh Nội Trú</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-loai-phong-benh-noi-tru-shared></app-loai-phong-benh-noi-tru-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLXBob25nLWJlbmgvbG9haS1waG9uZy1iZW5oLW5vaS10cnUvbG9haS1waG9uZy1iZW5oLW5vaS10cnUtY3JlYXRlL2xvYWktcGhvbmctYmVuaC1ub2ktdHJ1LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruCreateComponent", function () { return LoaiPhongBenhNoiTruCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _loai_phong_benh_noi_tru_shared_loai_phong_benh_noi_tru_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.ts");
            var LoaiPhongBenhNoiTruCreateComponent = /** @class */ (function () {
                function LoaiPhongBenhNoiTruCreateComponent(router) {
                    this.router = router;
                }
                LoaiPhongBenhNoiTruCreateComponent.prototype.ngOnInit = function () {
                };
                LoaiPhongBenhNoiTruCreateComponent.prototype.onCreated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru']);
                };
                return LoaiPhongBenhNoiTruCreateComponent;
            }());
            LoaiPhongBenhNoiTruCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loai_phong_benh_noi_tru_shared_loai_phong_benh_noi_tru_shared_component__WEBPACK_IMPORTED_MODULE_3__["LoaiPhongBenhNoiTruSharedComponent"], { static: true })
            ], LoaiPhongBenhNoiTruCreateComponent.prototype, "shared", void 0);
            LoaiPhongBenhNoiTruCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loai-phong-benh-noi-tru-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-phong-benh-noi-tru-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-phong-benh-noi-tru-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.scss")).default]
                })
            ], LoaiPhongBenhNoiTruCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.scss": 
        /*!********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.scss ***!
          \********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLXBob25nLWJlbmgvbG9haS1waG9uZy1iZW5oLW5vaS10cnUvbG9haS1waG9uZy1iZW5oLW5vaS10cnUtbGlzdC9sb2FpLXBob25nLWJlbmgtbm9pLXRydS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.ts": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.ts ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruListComponent", function () { return LoaiPhongBenhNoiTruListComponent; });
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
            var LoaiPhongBenhNoiTruListComponent = /** @class */ (function () {
                function LoaiPhongBenhNoiTruListComponent(notificationService, authService, dialog, apiService) {
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.gridColumns = [];
                }
                LoaiPhongBenhNoiTruListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucLoaiPhongBenh;
                    this.gridColumns = [
                        { Field: 'Ten', Title: 'Tên', Width: 200, Sortable: true, LinkDetail: true },
                        { Field: 'MoTa', Title: 'Mô Tả', MinWidth: 400, Sortable: true }
                    ];
                };
                LoaiPhongBenhNoiTruListComponent.prototype.exportExcel = function () {
                    var self = this;
                    self.showPopupLoadingData();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('LoaiPhongBenhNoiTru/ExportLoaiPhongBenhNoiTru', self.gridChild._gridQueryInfo).subscribe(function (resultData) {
                            self.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'LoaiPhongBenhNoiTru' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                LoaiPhongBenhNoiTruListComponent.prototype.showPopupLoadingData = function () {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                };
                LoaiPhongBenhNoiTruListComponent.prototype.closePopupLoadingData = function () {
                    this.dialog.closeAll();
                };
                return LoaiPhongBenhNoiTruListComponent;
            }());
            LoaiPhongBenhNoiTruListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
            ], LoaiPhongBenhNoiTruListComponent.prototype, "gridChild", void 0);
            LoaiPhongBenhNoiTruListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-loai-phong-benh-noi-tru-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-phong-benh-noi-tru-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-phong-benh-noi-tru-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.scss")).default]
                })
            ], LoaiPhongBenhNoiTruListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-routing.module.ts": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-routing.module.ts ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruRoutingModule", function () { return LoaiPhongBenhNoiTruRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _loai_phong_benh_noi_tru_list_loai_phong_benh_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_create_loai_phong_benh_noi_tru_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_update_loai_phong_benh_noi_tru_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _loai_phong_benh_noi_tru_list_loai_phong_benh_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_3__["LoaiPhongBenhNoiTruListComponent"],
                    data: {
                        title: 'Danh mục loại phòng bệnh nội trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucLoaiPhongBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _loai_phong_benh_noi_tru_create_loai_phong_benh_noi_tru_create_component__WEBPACK_IMPORTED_MODULE_4__["LoaiPhongBenhNoiTruCreateComponent"],
                    data: {
                        title: 'Thêm loại phòng bệnh nội trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucLoaiPhongBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _loai_phong_benh_noi_tru_update_loai_phong_benh_noi_tru_update_component__WEBPACK_IMPORTED_MODULE_5__["LoaiPhongBenhNoiTruUpdateComponent"],
                    data: {
                        title: 'Chỉnh sửa loại phòng bệnh nội trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucLoaiPhongBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                }
            ];
            var LoaiPhongBenhNoiTruRoutingModule = /** @class */ (function () {
                function LoaiPhongBenhNoiTruRoutingModule() {
                }
                return LoaiPhongBenhNoiTruRoutingModule;
            }());
            LoaiPhongBenhNoiTruRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LoaiPhongBenhNoiTruRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLXBob25nLWJlbmgvbG9haS1waG9uZy1iZW5oLW5vaS10cnUvbG9haS1waG9uZy1iZW5oLW5vaS10cnUtc2hhcmVkL2xvYWktcGhvbmctYmVuaC1ub2ktdHJ1LXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruSharedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruSharedComponent", function () { return LoaiPhongBenhNoiTruSharedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var LoaiPhongBenhNoiTruSharedComponent = /** @class */ (function () {
                function LoaiPhongBenhNoiTruSharedComponent(route, baseService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.loaiPhongBenhNoiTru = {};
                }
                LoaiPhongBenhNoiTruSharedComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    if (id !== undefined && id !== null) {
                        this.getById(id);
                    }
                };
                LoaiPhongBenhNoiTruSharedComponent.prototype.getSharedData = function () {
                    return this.loaiPhongBenhNoiTru;
                };
                LoaiPhongBenhNoiTruSharedComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        _this.loaiPhongBenhNoiTru = resultData;
                    });
                };
                return LoaiPhongBenhNoiTruSharedComponent;
            }());
            LoaiPhongBenhNoiTruSharedComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
            ]; };
            LoaiPhongBenhNoiTruSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loai-phong-benh-noi-tru-shared',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-phong-benh-noi-tru-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-phong-benh-noi-tru-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.scss")).default]
                })
            ], LoaiPhongBenhNoiTruSharedComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2FpLXBob25nLWJlbmgvbG9haS1waG9uZy1iZW5oLW5vaS10cnUvbG9haS1waG9uZy1iZW5oLW5vaS10cnUtdXBkYXRlL2xvYWktcGhvbmctYmVuaC1ub2ktdHJ1LXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruUpdateComponent", function () { return LoaiPhongBenhNoiTruUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _loai_phong_benh_noi_tru_shared_loai_phong_benh_noi_tru_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.ts");
            var LoaiPhongBenhNoiTruUpdateComponent = /** @class */ (function () {
                function LoaiPhongBenhNoiTruUpdateComponent(router, route) {
                    this.router = router;
                    this.route = route;
                }
                LoaiPhongBenhNoiTruUpdateComponent.prototype.ngOnInit = function () {
                };
                LoaiPhongBenhNoiTruUpdateComponent.prototype.onUpdated = function () {
                    this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru']);
                };
                return LoaiPhongBenhNoiTruUpdateComponent;
            }());
            LoaiPhongBenhNoiTruUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loai_phong_benh_noi_tru_shared_loai_phong_benh_noi_tru_shared_component__WEBPACK_IMPORTED_MODULE_3__["LoaiPhongBenhNoiTruSharedComponent"], { static: true })
            ], LoaiPhongBenhNoiTruUpdateComponent.prototype, "shared", void 0);
            LoaiPhongBenhNoiTruUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-loai-phong-benh-noi-tru-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loai-phong-benh-noi-tru-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loai-phong-benh-noi-tru-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.scss")).default]
                })
            ], LoaiPhongBenhNoiTruUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru.module.ts": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru.module.ts ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruModule", function () { return LoaiPhongBenhNoiTruModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _loai_phong_benh_noi_tru_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-routing.module.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_list_loai_phong_benh_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-list/loai-phong-benh-noi-tru-list.component.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_create_loai_phong_benh_noi_tru_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-create/loai-phong-benh-noi-tru-create.component.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_update_loai_phong_benh_noi_tru_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-update/loai-phong-benh-noi-tru-update.component.ts");
            /* harmony import */ var _loai_phong_benh_noi_tru_shared_loai_phong_benh_noi_tru_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru-shared/loai-phong-benh-noi-tru-shared.component.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            var LoaiPhongBenhNoiTruModule = /** @class */ (function () {
                function LoaiPhongBenhNoiTruModule() {
                }
                return LoaiPhongBenhNoiTruModule;
            }());
            LoaiPhongBenhNoiTruModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _loai_phong_benh_noi_tru_list_loai_phong_benh_noi_tru_list_component__WEBPACK_IMPORTED_MODULE_9__["LoaiPhongBenhNoiTruListComponent"],
                        _loai_phong_benh_noi_tru_create_loai_phong_benh_noi_tru_create_component__WEBPACK_IMPORTED_MODULE_10__["LoaiPhongBenhNoiTruCreateComponent"],
                        _loai_phong_benh_noi_tru_update_loai_phong_benh_noi_tru_update_component__WEBPACK_IMPORTED_MODULE_11__["LoaiPhongBenhNoiTruUpdateComponent"],
                        _loai_phong_benh_noi_tru_shared_loai_phong_benh_noi_tru_shared_component__WEBPACK_IMPORTED_MODULE_12__["LoaiPhongBenhNoiTruSharedComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                        _loai_phong_benh_noi_tru_routing_module__WEBPACK_IMPORTED_MODULE_8__["LoaiPhongBenhNoiTruRoutingModule"]
                    ],
                    providers: [
                        _loai_phong_benh_noi_tru_service__WEBPACK_IMPORTED_MODULE_5__["LoaiPhongBenhNoiTruService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _loai_phong_benh_noi_tru_service__WEBPACK_IMPORTED_MODULE_5__["LoaiPhongBenhNoiTruService"] },
                    ]
                })
            ], LoaiPhongBenhNoiTruModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru.service.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loai-phong-benh/loai-phong-benh-noi-tru/loai-phong-benh-noi-tru.service.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: LoaiPhongBenhNoiTruService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiPhongBenhNoiTruService", function () { return LoaiPhongBenhNoiTruService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var LoaiPhongBenhNoiTruService = /** @class */ (function (_super) {
                __extends(LoaiPhongBenhNoiTruService, _super);
                function LoaiPhongBenhNoiTruService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'LoaiPhongBenhNoiTru';
                    return _this;
                }
                return LoaiPhongBenhNoiTruService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            LoaiPhongBenhNoiTruService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            LoaiPhongBenhNoiTruService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoaiPhongBenhNoiTruService);
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loai-phong-benh-loai-phong-benh-noi-tru-loai-phong-benh-noi-tru-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loai-phong-benh-loai-phong-benh-noi-tru-loai-phong-benh-noi-tru-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loai-phong-benh-loai-phong-benh-noi-tru-loai-phong-benh-noi-tru-module-es5.js.map