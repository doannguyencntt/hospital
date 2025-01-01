(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-bao-hiem-y-te-hoc-vi-hoc-ham-hoc-vi-hoc-ham-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\"\n                 [crumbs]=\"[\n                        {Title:'Danh Mục',Path:''}\n                        ,{Title:'Nhóm Hệ Thống',Path:''}\n                        ,{Title:'Bảo Hiểm Y Tế'}\n                        ,{Title:'Học Vị Học Hàm',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham',Active:true}\n                    ]\">\n></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Học Vị Học Hàm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-hoc-vi-hoc-ham-share></app-hoc-vi-hoc-ham-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <!-- <h1 class=\"title mt-0 mb-1\">Danh Mục Học Vị Học Hàm</h1> -->\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bao Hiểm Y Tế',Path:''}\n                    ,{Title:'Học Vị Học Hàm',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham\"\n                [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"true\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                [lazyLoadPage]=\"true\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-textbox id=\"Ma\" fxFlex=\"20%\" fxFlex.sm=\"40%%\" [required]=\"true\" \n        [(model)]=\"modelFE.Ma\" label=\"Mã\" maxlength=\"50\"\n        [validationerror]=\"'Ma' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"Ten\" fxFlex=\"20%\" fxFlex.sm=\"40%%\" [required]=\"true\" \n        [(model)]=\"modelFE.Ten\" label=\"Tên\" maxlength=\"250\"\n        [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n \n    <app-textbox id=\"Mota\" fxFlex=\"60%\" fxFlex.sm=\"60%%\" maxlength=\"2000\"\n        [(model)]=\"modelFE.MoTa\" label=\"Mô tả\" [validationerror]=\"'MoTa' | validationerror:validationErrors\">\n    </app-textbox>\n\n    \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\"\n                    [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bảo Hiểm Y Tế'}\n                    ,{Title:'Học Vị Học Hàm',Path:'/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham',Active:true}\n                    ]\">\n></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Học Vị Học Hàm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-hoc-vi-hoc-ham-share></app-hoc-vi-hoc-ham-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvaG9jLXZpLWhvYy1oYW0vaG9jLXZpLWhvYy1oYW0tY3JlYXRlL2hvYy12aS1ob2MtaGFtLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: HocViHocHamCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamCreateComponent", function() { return HocViHocHamCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _hoc_vi_hoc_ham_share_hoc_vi_hoc_ham_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.ts");






let HocViHocHamCreateComponent = class HocViHocHamCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() { this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham']); }
};
HocViHocHamCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_hoc_vi_hoc_ham_share_hoc_vi_hoc_ham_share_component__WEBPACK_IMPORTED_MODULE_5__["HocViHocHamShareComponent"], { static: true })
], HocViHocHamCreateComponent.prototype, "shared", void 0);
HocViHocHamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoc-vi-hoc-ham-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hoc-vi-hoc-ham-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hoc-vi-hoc-ham-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.scss")).default]
    })
], HocViHocHamCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvaG9jLXZpLWhvYy1oYW0vaG9jLXZpLWhvYy1oYW0tbGlzdC9ob2MtdmktaG9jLWhhbS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: HocViHocHamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamListComponent", function() { return HocViHocHamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");












let HocViHocHamListComponent = class HocViHocHamListComponent {
    constructor(dialog, notificationService, apiService, authService) {
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.authService = authService;
        this.sort = [{
                field: 'Id',
                dir: 'desc'
            }];
        this.gridColumns = [];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucHocViHocHam;
        this.gridColumns = [
            { Field: "Ma", Title: "Mã", Width: 120, Sortable: true, LinkDetail: true },
            { Field: "Ten", Title: "Tên Học Vị", Width: 200, Sortable: true },
            { Field: "MoTa", Title: "Mô tả", MinWidth: 400, Sortable: true }
        ];
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("HocViHocHam/ExportHocViHocHam", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "HocViHocHam" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
HocViHocHamListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"], { static: false })
], HocViHocHamListComponent.prototype, "gridChild", void 0);
HocViHocHamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoc-vi-hoc-ham-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hoc-vi-hoc-ham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hoc-vi-hoc-ham-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.scss")).default]
    })
], HocViHocHamListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-routing.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-routing.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: HocViHocHamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamRoutingModule", function() { return HocViHocHamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _hoc_vi_hoc_ham_list_hoc_vi_hoc_ham_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.ts");
/* harmony import */ var _hoc_vi_hoc_ham_create_hoc_vi_hoc_ham_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.ts");
/* harmony import */ var _hoc_vi_hoc_ham_update_hoc_vi_hoc_ham_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.ts");









const routes = [
    {
        path: '',
        component: _hoc_vi_hoc_ham_list_hoc_vi_hoc_ham_list_component__WEBPACK_IMPORTED_MODULE_6__["HocViHocHamListComponent"],
        data: {
            title: 'Danh sách học vị học hàm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucHocViHocHam,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _hoc_vi_hoc_ham_create_hoc_vi_hoc_ham_create_component__WEBPACK_IMPORTED_MODULE_7__["HocViHocHamCreateComponent"],
        data: {
            title: 'Thêm học vị học hàm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucHocViHocHam,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _hoc_vi_hoc_ham_update_hoc_vi_hoc_ham_update_component__WEBPACK_IMPORTED_MODULE_8__["HocViHocHamUpdateComponent"],
        data: {
            title: 'Cập nhật học vị học hàm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucHocViHocHam,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let HocViHocHamRoutingModule = class HocViHocHamRoutingModule {
};
HocViHocHamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HocViHocHamRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvaG9jLXZpLWhvYy1oYW0vaG9jLXZpLWhvYy1oYW0tc2hhcmUvaG9jLXZpLWhvYy1oYW0tc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: HocViHocHamShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamShareComponent", function() { return HocViHocHamShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let HocViHocHamShareComponent = class HocViHocHamShareComponent {
    constructor(route, baseService) {
        this.route = route;
        this.baseService = baseService;
        this.modelFE = {};
    }
    ngOnInit() {
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
        }
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            if (resultData !== null && resultData !== undefined) {
                this.modelFE = resultData;
            }
        });
    }
    getSharedData() {
        return this.modelFE;
    }
};
HocViHocHamShareComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
HocViHocHamShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoc-vi-hoc-ham-share',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hoc-vi-hoc-ham-share.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hoc-vi-hoc-ham-share.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.scss")).default]
    })
], HocViHocHamShareComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jhby1oaWVtLXktdGUvaG9jLXZpLWhvYy1oYW0vaG9jLXZpLWhvYy1oYW0tdXBkYXRlL2hvYy12aS1ob2MtaGFtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: HocViHocHamUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamUpdateComponent", function() { return HocViHocHamUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var _hoc_vi_hoc_ham_share_hoc_vi_hoc_ham_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.ts");






let HocViHocHamUpdateComponent = class HocViHocHamUpdateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onUpdated() { this.router.navigate(['/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham']); }
};
HocViHocHamUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_hoc_vi_hoc_ham_share_hoc_vi_hoc_ham_share_component__WEBPACK_IMPORTED_MODULE_5__["HocViHocHamShareComponent"], { static: true })
], HocViHocHamUpdateComponent.prototype, "shared", void 0);
HocViHocHamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hoc-vi-hoc-ham-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hoc-vi-hoc-ham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hoc-vi-hoc-ham-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.scss")).default]
    })
], HocViHocHamUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HocViHocHamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamModule", function() { return HocViHocHamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _hoc_vi_hoc_ham_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hoc-vi-hoc-ham.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham.service.ts");
/* harmony import */ var _hoc_vi_hoc_ham_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-routing.module.ts");
/* harmony import */ var _hoc_vi_hoc_ham_list_hoc_vi_hoc_ham_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-list/hoc-vi-hoc-ham-list.component.ts");
/* harmony import */ var _hoc_vi_hoc_ham_share_hoc_vi_hoc_ham_share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-share/hoc-vi-hoc-ham-share.component.ts");
/* harmony import */ var _hoc_vi_hoc_ham_create_hoc_vi_hoc_ham_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-create/hoc-vi-hoc-ham-create.component.ts");
/* harmony import */ var _hoc_vi_hoc_ham_update_hoc_vi_hoc_ham_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham-update/hoc-vi-hoc-ham-update.component.ts");
















let HocViHocHamModule = class HocViHocHamModule {
};
HocViHocHamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_hoc_vi_hoc_ham_list_hoc_vi_hoc_ham_list_component__WEBPACK_IMPORTED_MODULE_12__["HocViHocHamListComponent"], _hoc_vi_hoc_ham_share_hoc_vi_hoc_ham_share_component__WEBPACK_IMPORTED_MODULE_13__["HocViHocHamShareComponent"], _hoc_vi_hoc_ham_create_hoc_vi_hoc_ham_create_component__WEBPACK_IMPORTED_MODULE_14__["HocViHocHamCreateComponent"], _hoc_vi_hoc_ham_update_hoc_vi_hoc_ham_update_component__WEBPACK_IMPORTED_MODULE_15__["HocViHocHamUpdateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _hoc_vi_hoc_ham_routing_module__WEBPACK_IMPORTED_MODULE_11__["HocViHocHamRoutingModule"]
        ],
        providers: [
            _hoc_vi_hoc_ham_service__WEBPACK_IMPORTED_MODULE_10__["HocViHocHamService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _hoc_vi_hoc_ham_service__WEBPACK_IMPORTED_MODULE_10__["HocViHocHamService"] },
        ]
    })
], HocViHocHamModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham.service.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/bao-hiem-y-te/hoc-vi-hoc-ham/hoc-vi-hoc-ham.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: HocViHocHamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HocViHocHamService", function() { return HocViHocHamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let HocViHocHamService = class HocViHocHamService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'HocViHocHam';
    }
};
HocViHocHamService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
HocViHocHamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HocViHocHamService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-bao-hiem-y-te-hoc-vi-hoc-ham-hoc-vi-hoc-ham-module-es2015.js.map