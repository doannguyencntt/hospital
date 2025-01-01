(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-loi-dan-loi-dan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Lời Dặn',Path:'/danh-muc/nhom-he-thong/benh-vien/loi-dan', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Lời Dặn</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-loi-dan-shared>\n                </app-loi-dan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục', Path:''}\n                    ,{Title:'Nhóm Hệ Thống', Path:''}\n                    ,{Title:'Bệnh Viện', Path:''}\n                    ,{Title:'Lời Dặn', Path:'/danh-muc/nhom-he-thong/benh-vien/loi-dan', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/benh-vien/loi-dan\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [showExportExcel]=\"true\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-combobox id=\"ICD\" fxFlex=\"100%\" fxFlex.sm=\"100%\" [(model)]=\"loiDan.IcdId\" [required]=\"true\"\n        [modelText]=\"loiDan.ICD\" label=\"ICD\" url=\"LoiDan/GetICD\"\n        [validationerror]=\"'IcdId' | validationerror:validationErrors\" class=\"item-no-padding\" [template]=\"ICDTemplate\"\n        [disabled]=\"!isCreate\" [templateHeader]=\"ICDTemplateHeader\">\n        <ng-template #ICDTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #ICDTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-textarea id=\"LoiDanCuaBacSi\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"5000\" [(model)]=\"loiDan.LoiDanCuaBacSi\"\n        label=\"Lời dặn của bác sỹ\" [required]=\"true\" minHeight=\"400\"\n        [validationerror]=\"'LoiDanCuaBacSi' | validationerror:validationErrors\">\n    </app-textarea>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Lời Dặn',Path:'/danh-muc/nhom-he-thong/benh-vien/loi-dan', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Lời Dặn</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-loi-dan-shared></app-loi-dan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2ktZGFuL2xvaS1kYW4tY3JlYXRlL2xvaS1kYW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: LoiDanCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanCreateComponent", function() { return LoiDanCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loi_dan_shared_loi_dan_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loi-dan-shared/loi-dan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.ts");




let LoiDanCreateComponent = class LoiDanCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loi-dan']);
    }
};
LoiDanCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loi_dan_shared_loi_dan_shared_component__WEBPACK_IMPORTED_MODULE_3__["LoiDanSharedComponent"], { static: true })
], LoiDanCreateComponent.prototype, "shared", void 0);
LoiDanCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loi-dan-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loi-dan-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loi-dan-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.scss")).default]
    })
], LoiDanCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2ktZGFuL2xvaS1kYW4tbGlzdC9sb2ktZGFuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LoiDanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanListComponent", function() { return LoiDanListComponent; });
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












let LoiDanListComponent = class LoiDanListComponent {
    constructor(notificationService, authService, dialog, apiService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].LoiDan;
        this.gridColumns = [
            { Field: 'ICD', Title: 'ICD', Width: 400, Sortable: true, LinkDetail: true },
            { Field: 'LoiDanCuaBacSi', Title: 'Lời dặn của bác sỹ', Width: 600, Sortable: true }
        ];
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('LoiDan/ExportLoiDan', self.gridChild._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'LoiDan' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
LoiDanListComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], LoiDanListComponent.prototype, "gridChild", void 0);
LoiDanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-loi-dan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loi-dan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loi-dan-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.scss")).default]
    })
], LoiDanListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: LoiDanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanRoutingModule", function() { return LoiDanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loi_dan_list_loi_dan_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loi-dan-list/loi-dan-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.ts");
/* harmony import */ var _loi_dan_create_loi_dan_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loi-dan-create/loi-dan-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.ts");
/* harmony import */ var _loi_dan_update_loi_dan_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loi-dan-update/loi-dan-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");









const routes = [
    {
        path: '',
        component: _loi_dan_list_loi_dan_list_component__WEBPACK_IMPORTED_MODULE_3__["LoiDanListComponent"],
        data: {
            title: 'Danh mục lời dặn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].LoiDan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _loi_dan_create_loi_dan_create_component__WEBPACK_IMPORTED_MODULE_4__["LoiDanCreateComponent"],
        data: {
            title: 'Thêm lời dặn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].LoiDan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _loi_dan_update_loi_dan_update_component__WEBPACK_IMPORTED_MODULE_5__["LoiDanUpdateComponent"],
        data: {
            title: 'Chỉnh sửa lời dặn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].LoiDan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    }
];
let LoiDanRoutingModule = class LoiDanRoutingModule {
};
LoiDanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoiDanRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2ktZGFuL2xvaS1kYW4tc2hhcmVkL2xvaS1kYW4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: LoiDanSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanSharedComponent", function() { return LoiDanSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let LoiDanSharedComponent = class LoiDanSharedComponent {
    constructor(route, baseService) {
        this.route = route;
        this.baseService = baseService;
        this.loiDan = {};
        this.isCreate = true;
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.isCreate = false;
        }
    }
    getSharedData() {
        return this.loiDan;
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            this.loiDan = resultData;
        });
    }
};
LoiDanSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
LoiDanSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loi-dan-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loi-dan-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loi-dan-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.scss")).default]
    })
], LoiDanSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9sb2ktZGFuL2xvaS1kYW4tdXBkYXRlL2xvaS1kYW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: LoiDanUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanUpdateComponent", function() { return LoiDanUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loi_dan_shared_loi_dan_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loi-dan-shared/loi-dan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.ts");




let LoiDanUpdateComponent = class LoiDanUpdateComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/loi-dan']);
    }
};
LoiDanUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_loi_dan_shared_loi_dan_shared_component__WEBPACK_IMPORTED_MODULE_3__["LoiDanSharedComponent"], { static: true })
], LoiDanUpdateComponent.prototype, "shared", void 0);
LoiDanUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loi-dan-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loi-dan-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loi-dan-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.scss")).default]
    })
], LoiDanUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoiDanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanModule", function() { return LoiDanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _loi_dan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loi-dan.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _loi_dan_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loi-dan-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-routing.module.ts");
/* harmony import */ var _loi_dan_list_loi_dan_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loi-dan-list/loi-dan-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-list/loi-dan-list.component.ts");
/* harmony import */ var _loi_dan_create_loi_dan_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loi-dan-create/loi-dan-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-create/loi-dan-create.component.ts");
/* harmony import */ var _loi_dan_update_loi_dan_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loi-dan-update/loi-dan-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-update/loi-dan-update.component.ts");
/* harmony import */ var _loi_dan_shared_loi_dan_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loi-dan-shared/loi-dan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan-shared/loi-dan-shared.component.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");






















let LoiDanModule = class LoiDanModule {
};
LoiDanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loi_dan_list_loi_dan_list_component__WEBPACK_IMPORTED_MODULE_9__["LoiDanListComponent"],
            _loi_dan_create_loi_dan_create_component__WEBPACK_IMPORTED_MODULE_10__["LoiDanCreateComponent"],
            _loi_dan_update_loi_dan_update_component__WEBPACK_IMPORTED_MODULE_11__["LoiDanUpdateComponent"],
            _loi_dan_shared_loi_dan_shared_component__WEBPACK_IMPORTED_MODULE_12__["LoiDanSharedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _loi_dan_routing_module__WEBPACK_IMPORTED_MODULE_8__["LoiDanRoutingModule"]
        ],
        providers: [
            _loi_dan_service__WEBPACK_IMPORTED_MODULE_5__["LoiDanService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _loi_dan_service__WEBPACK_IMPORTED_MODULE_5__["LoiDanService"] },
        ]
    })
], LoiDanModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/loi-dan/loi-dan.service.ts ***!
  \******************************************************************************************/
/*! exports provided: LoiDanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoiDanService", function() { return LoiDanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let LoiDanService = class LoiDanService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'LoiDan';
    }
};
LoiDanService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LoiDanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoiDanService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-loi-dan-loi-dan-module-es2015.js.map