(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-bao-hiem-y-te-chuan-doan-hinh-anh-chuan-doan-hinh-anh-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Danh Mục',Path:''}\n,{Title:'Nhóm Hệ Thống',Path:''}\n,{Title:'Bảo Hiểm Y Tế',Path:''}\n,{Title:'Chẩn đoán Hình Ảnh',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Chẩn đoán Hình Ảnh</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-chuan-doan-hinh-anh-shared>\n                </app-chuan-doan-hinh-anh-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Danh Mục',Path:''}\n                ,{Title:'Nhóm Hệ Thống',Path:''}\n                ,{Title:'Bảo Hiểm Y Tế',Path:''}\n                ,{Title:'Chẩn đoán Hình Ảnh',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [showExportExcel]=\"true\"\n                (extExportExcel)=\"exportExcel()\"></app-grid>\n        </div>\n        <ng-template #hieuLucTemplate let-dataItem>\n            <span *ngIf=\"dataItem.HieuLuc == 0\">Không</span>\n            <span *ngIf=\"dataItem.HieuLuc != 0\">Có</span>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-textbox id=\"Ma\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"chuanDoanHinhAnh.Ma\" [required]=\"true\" label=\"Mã\"\n        maxlength=\"50\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"Ten\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"chuanDoanHinhAnh.Ten\" [required]=\"true\" label=\"Tên\"\n        maxlength=\"250\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"TenTiengAnh\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"chuanDoanHinhAnh.TenTiengAnh\"\n        label=\"Tên Tiếng Anh\" maxlength=\"250\">\n    </app-textbox>\n\n    <app-combobox id=\"LoaiChuanDoanHinhAnh\" fxFlex=\"25%\" fxFlex.sm=\"25%\"\n        [(model)]=\"chuanDoanHinhAnh.LoaiChuanDoanHinhAnh\" [required]=\"true\"\n        [modelText]=\"chuanDoanHinhAnh.LoaiChuanDoanHinhAnhDisplay\" label=\"Loại Chẩn đoán Hình Ảnh\"\n        url=\"ChuanDoanHinhAnh/GetListLoaiChuanDoanHinhAnh\"\n        [validationerror]=\"'LoaiChuanDoanHinhAnh' | validationerror:validationErrors\">\n    </app-combobox>\n\n\n\n    <app-textarea id=\"MoTa\" fxFlex=\"100%\" fxFlex.sm=\"100%\" maxlength=\"4000\" [(model)]=\"chuanDoanHinhAnh.MoTa\"\n        label=\"Mô Tả\">\n    </app-textarea>\n\n\n\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n        <app-checkbox id=\"HieuLuc\" fxFlex=\"100%\" [(model)]=\"chuanDoanHinhAnh.HieuLuc\" label=\"Có Hiệu Lực\">\n        </app-checkbox>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bảo Hiểm Y Tế',Path:''}\n    ,{Title:'Chẩn đoán Hình Ảnh',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Chẩn đoán Hình Ảnh</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-chuan-doan-hinh-anh-shared></app-chuan-doan-hinh-anh-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvY2h1YW4tZG9hbi1oaW5oLWFuaC9jaHVhbi1kb2FuLWhpbmgtYW5oLWNyZWF0ZS9jaHVhbi1kb2FuLWhpbmgtYW5oLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhCreateComponent", function() { return ChuanDoanHinhAnhCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chuan_doan_hinh_anh_shared_chuan_doan_hinh_anh_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.ts");




let ChuanDoanHinhAnhCreateComponent = class ChuanDoanHinhAnhCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh']);
    }
};
ChuanDoanHinhAnhCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_chuan_doan_hinh_anh_shared_chuan_doan_hinh_anh_shared_component__WEBPACK_IMPORTED_MODULE_3__["ChuanDoanHinhAnhSharedComponent"], { static: true })
], ChuanDoanHinhAnhCreateComponent.prototype, "shared", void 0);
ChuanDoanHinhAnhCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chuan-doan-hinh-anh-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chuan-doan-hinh-anh-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chuan-doan-hinh-anh-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.scss")).default]
    })
], ChuanDoanHinhAnhCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.scss ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvY2h1YW4tZG9hbi1oaW5oLWFuaC9jaHVhbi1kb2FuLWhpbmgtYW5oLWxpc3QvY2h1YW4tZG9hbi1oaW5oLWFuaC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhListComponent", function() { return ChuanDoanHinhAnhListComponent; });
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












let ChuanDoanHinhAnhListComponent = class ChuanDoanHinhAnhListComponent {
    constructor(notificationService, authService, dialog, apiService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucChuanDoanHinhAnh;
        this.gridColumns = [
            { Field: 'Ma', Title: 'Mã', Width: 80, Sortable: true, LinkDetail: true },
            { Field: 'Ten', Title: 'Tên', Width: 100, Sortable: true },
            { Field: 'TenTiengAnh', Title: 'Tên Tiếng Anh', Width: 140, Sortable: true },
            { Field: 'LoaiChuanDoanHinhAnhDisplay', Title: 'Loại Chẩn đoán Hình Ảnh', Width: 200, Sortable: true },
            { Field: 'MoTa', Title: 'Mô Tả', Width: 150, Sortable: true },
            { Field: 'HieuLuc', Title: 'Hiệu Lực', Width: 150, Sortable: true, Template: this.hieuLucTemplate }
        ];
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('ChuanDoanHinhAnh/ExportChuanDoanHinhAnh', self.gridChild._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'ChanDoanHinhAnh' + dateTimeNow.getFullYear() + '.xlsx');
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
ChuanDoanHinhAnhListComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], ChuanDoanHinhAnhListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hieuLucTemplate', { static: true })
], ChuanDoanHinhAnhListComponent.prototype, "hieuLucTemplate", void 0);
ChuanDoanHinhAnhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-chuan-doan-hinh-anh-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chuan-doan-hinh-anh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chuan-doan-hinh-anh-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.scss")).default]
    })
], ChuanDoanHinhAnhListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-routing.module.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-routing.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhRoutingModule", function() { return ChuanDoanHinhAnhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chuan_doan_hinh_anh_list_chuan_doan_hinh_anh_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.ts");
/* harmony import */ var _chuan_doan_hinh_anh_create_chuan_doan_hinh_anh_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.ts");
/* harmony import */ var _chuan_doan_hinh_anh_update_chuan_doan_hinh_anh_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");









const routes = [
    {
        path: '',
        component: _chuan_doan_hinh_anh_list_chuan_doan_hinh_anh_list_component__WEBPACK_IMPORTED_MODULE_3__["ChuanDoanHinhAnhListComponent"],
        data: {
            title: 'Nhóm Chẩn Đoán Hình Ảnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucChuanDoanHinhAnh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _chuan_doan_hinh_anh_create_chuan_doan_hinh_anh_create_component__WEBPACK_IMPORTED_MODULE_4__["ChuanDoanHinhAnhCreateComponent"],
        data: {
            title: 'Thêm Chẩn đoán Hình Ảnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucChuanDoanHinhAnh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _chuan_doan_hinh_anh_update_chuan_doan_hinh_anh_update_component__WEBPACK_IMPORTED_MODULE_5__["ChuanDoanHinhAnhUpdateComponent"],
        data: {
            title: 'Chỉnh Sửa Chẩn đoán Hình Ảnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucChuanDoanHinhAnh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    }
];
let ChuanDoanHinhAnhRoutingModule = class ChuanDoanHinhAnhRoutingModule {
};
ChuanDoanHinhAnhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ChuanDoanHinhAnhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvY2h1YW4tZG9hbi1oaW5oLWFuaC9jaHVhbi1kb2FuLWhpbmgtYW5oLXNoYXJlZC9jaHVhbi1kb2FuLWhpbmgtYW5oLXNoYXJlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhSharedComponent", function() { return ChuanDoanHinhAnhSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let ChuanDoanHinhAnhSharedComponent = class ChuanDoanHinhAnhSharedComponent {
    constructor(route, baseService) {
        this.route = route;
        this.baseService = baseService;
        this.chuanDoanHinhAnh = {};
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }
    getSharedData() {
        return this.chuanDoanHinhAnh;
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            this.chuanDoanHinhAnh = resultData;
        });
    }
};
ChuanDoanHinhAnhSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
ChuanDoanHinhAnhSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chuan-doan-hinh-anh-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chuan-doan-hinh-anh-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chuan-doan-hinh-anh-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.scss")).default]
    })
], ChuanDoanHinhAnhSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvY2h1YW4tZG9hbi1oaW5oLWFuaC9jaHVhbi1kb2FuLWhpbmgtYW5oLXVwZGF0ZS9jaHVhbi1kb2FuLWhpbmgtYW5oLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhUpdateComponent", function() { return ChuanDoanHinhAnhUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chuan_doan_hinh_anh_shared_chuan_doan_hinh_anh_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.ts");




let ChuanDoanHinhAnhUpdateComponent = class ChuanDoanHinhAnhUpdateComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
    }
    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh']);
    }
};
ChuanDoanHinhAnhUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_chuan_doan_hinh_anh_shared_chuan_doan_hinh_anh_shared_component__WEBPACK_IMPORTED_MODULE_3__["ChuanDoanHinhAnhSharedComponent"], { static: true })
], ChuanDoanHinhAnhUpdateComponent.prototype, "shared", void 0);
ChuanDoanHinhAnhUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chuan-doan-hinh-anh-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chuan-doan-hinh-anh-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chuan-doan-hinh-anh-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.scss")).default]
    })
], ChuanDoanHinhAnhUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh.module.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh.module.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhModule", function() { return ChuanDoanHinhAnhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _chuan_doan_hinh_anh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chuan-doan-hinh-anh.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chuan_doan_hinh_anh_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-routing.module.ts");
/* harmony import */ var _chuan_doan_hinh_anh_list_chuan_doan_hinh_anh_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-list/chuan-doan-hinh-anh-list.component.ts");
/* harmony import */ var _chuan_doan_hinh_anh_create_chuan_doan_hinh_anh_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-create/chuan-doan-hinh-anh-create.component.ts");
/* harmony import */ var _chuan_doan_hinh_anh_update_chuan_doan_hinh_anh_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-update/chuan-doan-hinh-anh-update.component.ts");
/* harmony import */ var _chuan_doan_hinh_anh_shared_chuan_doan_hinh_anh_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh-shared/chuan-doan-hinh-anh-shared.component.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");






















let ChuanDoanHinhAnhModule = class ChuanDoanHinhAnhModule {
};
ChuanDoanHinhAnhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _chuan_doan_hinh_anh_list_chuan_doan_hinh_anh_list_component__WEBPACK_IMPORTED_MODULE_9__["ChuanDoanHinhAnhListComponent"],
            _chuan_doan_hinh_anh_create_chuan_doan_hinh_anh_create_component__WEBPACK_IMPORTED_MODULE_10__["ChuanDoanHinhAnhCreateComponent"],
            _chuan_doan_hinh_anh_update_chuan_doan_hinh_anh_update_component__WEBPACK_IMPORTED_MODULE_11__["ChuanDoanHinhAnhUpdateComponent"],
            _chuan_doan_hinh_anh_shared_chuan_doan_hinh_anh_shared_component__WEBPACK_IMPORTED_MODULE_12__["ChuanDoanHinhAnhSharedComponent"]
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
            _chuan_doan_hinh_anh_routing_module__WEBPACK_IMPORTED_MODULE_8__["ChuanDoanHinhAnhRoutingModule"]
        ],
        providers: [
            _chuan_doan_hinh_anh_service__WEBPACK_IMPORTED_MODULE_5__["ChuanDoanHinhAnhService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _chuan_doan_hinh_anh_service__WEBPACK_IMPORTED_MODULE_5__["ChuanDoanHinhAnhService"] },
        ]
    })
], ChuanDoanHinhAnhModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh.service.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/chuan-doan-hinh-anh/chuan-doan-hinh-anh.service.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ChuanDoanHinhAnhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChuanDoanHinhAnhService", function() { return ChuanDoanHinhAnhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let ChuanDoanHinhAnhService = class ChuanDoanHinhAnhService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'ChuanDoanHinhAnh';
    }
};
ChuanDoanHinhAnhService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ChuanDoanHinhAnhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ChuanDoanHinhAnhService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-chuan-doan-hinh-anh-chuan-doan-hinh-anh-module-es2015.js.map