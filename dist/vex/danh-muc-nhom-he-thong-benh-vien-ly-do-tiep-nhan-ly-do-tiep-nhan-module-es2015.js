(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-ly-do-tiep-nhan-ly-do-tiep-nhan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n{Title:'Danh Mục',Path:''}\n,{Title:'Nhóm Hệ Thống',Path:''}\n,{Title:'Bệnh Viện ',Path:''}\n,{Title:'Lý Do Tiếp Nhận',Path:'/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan',Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Lý Do Tiếp Nhận</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-ly-do-tiep-nhan-shared></app-ly-do-tiep-nhan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục',Path:''}\n                    ,{Title:'Nhóm Hệ Thống',Path:''}\n                    ,{Title:'Bệnh Viện',Path:''}\n                    ,{Title:'Lý Do Tiếp Nhận',Path:'/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan',Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges()\" />\n                </div>\n                <span fxFlex></span>\n                <button (click)=\"add()\" class=\"ml-4 right\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\"\n                    type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n            </div>\n            <div class=\"p-4\">\n                <kendo-treeview [nodes]=data textField=\"field\" kendoTreeViewExpandable kendoTreeViewHierarchyBinding\n                    childrenField=\"LyDoTiepNhanChildList\">\n\n                    <ng-template kendoTreeViewNodeTemplate let-dataItem>\n                        <span [ngClass]=\"iconClass(dataItem)\"></span>\n                        <a  (click)=\"edit(dataItem.Id)\">{{dataItem.Ten}}</a>\n                        <span fxFlex></span>\n                        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\"\n                            [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                        </button>\n                        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <ng-template let-customer=\"customer\" matMenuContent>\n                                <button (click)=\"Addchildren(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                                    <span>Thêm nhánh </span>\n                                </button>\n                                <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                                    <span>Sửa</span>\n                                </button>\n                                <button (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                    <span>Xóa</span>\n                                </button>\n                            </ng-template>\n                        </mat-menu>\n                    </ng-template>\n\n                </kendo-treeview>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"mb-1\">\n            <app-combobox id=\"LyDoTiepNhanCha\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [(model)]=\"lyDo.LyDoTiepNhanChaId\"\n                [modelText]=\"lyDo.TenCha\" label=\"Lý Do Tiếp Nhận Cha\" url=\"LyDoTiepNhan/GetListLyDoTiepNhanCha\"\n                [queryInfo]=\"queryInfo\" [template]=\"lyDoTemplate\"\n                [validationerror]=\"'LyDoTiepNhanChaId' | validationerror:validationErrors\" *ngIf=\"isAdd == false\">\n                <!-- [idWhere]=\"idCha\" -->\n\n                <ng-template #lyDoTemplate let-dataItem>\n                    <label [ngStyle]=\"{\n                    'font-weight':dataItem.CapNhom == 1 ? 'bold' : 'normal',\n                    'padding-left' :((dataItem.CapNhom-1)*20) + 'px'\n                 }\">{{dataItem.DisplayName}}\n                    </label>\n                </ng-template>\n            </app-combobox>\n\n            <app-combobox id=\"LyDoTiepNhanCha\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [(model)]=\"lyDo.LyDoTiepNhanChaId\"\n                [modelText]=\"lyDo.TenCha\" label=\"Lý Do Tiếp Nhận Cha\" url=\"LyDoTiepNhan/GetListLyDoTiepNhanChaChinhSua\"\n                [queryInfo]=\"queryInfo\" [template]=\"lyDoTemplate\"\n                [validationerror]=\"'LyDoTiepNhanChaId' | validationerror:validationErrors\" *ngIf=\"isAdd == true\">\n                <ng-template #lyDoTemplate let-dataItem>\n                    <label [ngStyle]=\"{\n                    'font-weight':dataItem.CapNhom == 1 ? 'bold' : 'normal',\n                    'padding-left' :((dataItem.CapNhom-1)*20) + 'px'\n                 }\">{{dataItem.DisplayName}}\n                    </label>\n                </ng-template>\n            </app-combobox>\n\n            <app-textbox id=\"Ten\" fxFlex=\"70%\" fxFlex.sm=\"70%\" [required]=\"true\" [(model)]=\"lyDo.Ten\" label=\"Tên\"\n                maxlength=\"250\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n            </app-textbox>\n\n            <app-textarea id=\"MoTa\" fxFlex=\"100%\" [(model)]=\"lyDo.MoTa\" maxlength=\"2000\" label=\"Mô Tả\">\n\n            </app-textarea>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Lý Do Tiếp Nhận',Path:'/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Lý Do Tiếp Nhận</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-ly-do-tiep-nhan-shared></app-ly-do-tiep-nhan-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

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

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9seS1kby10aWVwLW5oYW4vbHktZG8tdGllcC1uaGFuLWNyZWF0ZS9seS1kby10aWVwLW5oYW4tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: LyDoTiepNhanCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanCreateComponent", function() { return LyDoTiepNhanCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ly_do_tiep_nhan_shared_ly_do_tiep_nhan_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.ts");




let LyDoTiepNhanCreateComponent = class LyDoTiepNhanCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan']);
    }
};
LyDoTiepNhanCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ly_do_tiep_nhan_shared_ly_do_tiep_nhan_shared_component__WEBPACK_IMPORTED_MODULE_3__["LyDoTiepNhanSharedComponent"], { static: true })
], LyDoTiepNhanCreateComponent.prototype, "shared", void 0);
LyDoTiepNhanCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ly-do-tiep-nhan-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ly-do-tiep-nhan-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ly-do-tiep-nhan-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.scss")).default]
    })
], LyDoTiepNhanCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9seS1kby10aWVwLW5oYW4vbHktZG8tdGllcC1uaGFuLWxpc3QvbHktZG8tdGllcC1uaGFuLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: LyDoTiepNhanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanListComponent", function() { return LyDoTiepNhanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");






















let LyDoTiepNhanListComponent = class LyDoTiepNhanListComponent {
    constructor(baseService, apiService, router, authService, notificationService, dialog) {
        this.baseService = baseService;
        this.apiService = apiService;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.lyDoTiepNhan = {};
        this.expression = false;
        this.data = [];
        this.field = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'LyDoTiepNhanChildList' };
        this._isLoading = false;
        this._skip = 0;
        this._pageSize = 10;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.mySelection = [];
        this.searchPlaceHolder = "Nhập từ khóa...";
        this.searchString = null;
        this.lazyLoadPage = false;
        this.useAddDeault = true;
        this.sort = null;
        this.formIsPopup = false;
        this.componentCreate = null;
        this.extOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    iconClass({ text, LyDoTiepNhanChildList }) {
        return {
            'k-i-folder': LyDoTiepNhanChildList !== undefined,
            //'k-i-minimize': ListNhomVatTuChildren !== undefined,
            'k-icon': true
        };
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucLyDoTiepNhan;
        this._gridDataSource = this.gridDataSource;
        this._isLoading = true;
        this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView").subscribe((resultData) => {
            // this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView2").subscribe((resultData: any[]) => { // test tìm kiếm con có theo kèm theo cha.
            this.data = resultData;
        });
        this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/them';
    }
    search() {
        this._skip = 0;
        if (this.gridDataSource == null) {
            var searchText = this.searchString != undefined ? this.searchString : "";
            searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].convertSpecialXML(searchText);
            searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
            searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
            this._isLoading = true;
            this._gridQueryInfo = { skip: this._skip, take: this._take, pageSize: this._pageSize, searchString: searchText, additionalSearchString: this._additionalSearchString, sort: this.sort, lazyLoadPage: this.lazyLoadPage };
            this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView")
                // this.baseService.getDataForGrid(this._gridQueryInfo, "LyDoTiepNhan/GetDataTreeView2") // test tìm kiếm con có theo kèm theo cha.
                .subscribe((resultData) => {
                this.data = resultData;
            });
        }
        else {
            this.extOnSearch.emit(this.searchString);
        }
    }
    searchChanges() {
        if (this.searchString == null || this.searchString == "") {
            this.searchString = "";
            this.search();
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.search();
        }
    }
    add() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
            if (this.formIsPopup) {
                this.dialog.open(this.componentCreate).afterClosed().subscribe(() => {
                });
            }
            else {
                this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/them"]);
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    Addchildren(id) {
        this.isShowView = true;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
            this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/them/" + id + "/" + this.isShowView]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    edit(id) {
        this.isShowView = false;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Update)) {
            this.router.navigate(["/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/chinh-sua/" + id + "/" + this.isShowView]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    mySelectionAfterDelete(id) {
        this.mySelection.forEach(function (item, index, object) {
            if (item === id) {
                object.splice(index, 1);
            }
        });
    }
    delete(id) {
        var self = this;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].MessComfirmChildrenLyDoTiepNhan, ["xóa", "lý do tiếp nhận"]) }
            }).afterClosed().subscribe(result => {
                if (result == "Yes") {
                    self.baseService.deleteById(id)
                        .subscribe(() => {
                        this.mySelectionAfterDelete(id);
                        self.search();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                    }, (err) => {
                        self.notificationService.showError(err.Message);
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
LyDoTiepNhanListComponent.ctorParameters = () => [
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "searchPlaceHolder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "gridDataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "searchString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "lazyLoadPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "useAddDeault", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "formIsPopup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "componentCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LyDoTiepNhanListComponent.prototype, "baseRoute", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LyDoTiepNhanListComponent.prototype, "extOnSearch", void 0);
LyDoTiepNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ly-do-tiep-nhan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ly-do-tiep-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_19__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_20__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ly-do-tiep-nhan-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.scss")).default]
    })
], LyDoTiepNhanListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-routing.module.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-routing.module.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LyDoTiepNhanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanRoutingModule", function() { return LyDoTiepNhanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _ly_do_tiep_nhan_list_ly_do_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.ts");
/* harmony import */ var _ly_do_tiep_nhan_create_ly_do_tiep_nhan_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.ts");
/* harmony import */ var _ly_do_tiep_nhan_update_ly_do_tiep_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.ts");









const routes = [
    {
        path: '',
        component: _ly_do_tiep_nhan_list_ly_do_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__["LyDoTiepNhanListComponent"],
        data: {
            title: 'Danh Mục Lý Do Tiếp Nhận',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhMucLyDoTiepNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _ly_do_tiep_nhan_create_ly_do_tiep_nhan_create_component__WEBPACK_IMPORTED_MODULE_7__["LyDoTiepNhanCreateComponent"],
        data: {
            title: 'Thêm triệu chứng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhMucLyDoTiepNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'them/:id/:isShowView',
        component: _ly_do_tiep_nhan_create_ly_do_tiep_nhan_create_component__WEBPACK_IMPORTED_MODULE_7__["LyDoTiepNhanCreateComponent"],
        data: {
            title: 'Thêm triệu chứng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhMucLyDoTiepNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id/:isShowView',
        component: _ly_do_tiep_nhan_update_ly_do_tiep_nhan_update_component__WEBPACK_IMPORTED_MODULE_8__["LyDoTiepNhanUpdateComponent"],
        data: {
            title: 'Chỉnh sửa triệu chứng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhMucLyDoTiepNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let LyDoTiepNhanRoutingModule = class LyDoTiepNhanRoutingModule {
};
LyDoTiepNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LyDoTiepNhanRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9seS1kby10aWVwLW5oYW4vbHktZG8tdGllcC1uaGFuLXNoYXJlZC9seS1kby10aWVwLW5oYW4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: LyDoTiepNhanSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanSharedComponent", function() { return LyDoTiepNhanSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _ly_do_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ly-do-tiep-nhan.model */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.model.ts");
/* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");






let LyDoTiepNhanSharedComponent = class LyDoTiepNhanSharedComponent {
    constructor(route, baseService) {
        this.route = route;
        this.baseService = baseService;
        this.lyDo = {};
        this.queryInfo = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_5__["LookupQueryInfo"]();
        this.idCha = null;
        this.isAdd = true;
    }
    ngOnInit() {
        this.lyDo = new _ly_do_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_4__["LyDoTiepNhan"]();
        const id = this.route.snapshot.params.id;
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
    }
    getById(id) {
        if (this.isShowView == "true") {
            this.isAdd = true;
            this.baseService.getById(id).subscribe((result) => {
                //console.log(result)
                this.lyDo = result;
                this.lyDo.LyDoTiepNhanChaId = this.lyDo.Id;
                this.lyDo.Id = 0;
                this.lyDo.Ten = null;
                // this.trieuChung.DanhMucChuanIds = null;
                // this.trieuChung.TrieuChungDanhMucChuanDoans = null
                // console.log("AddChildren", this.trieuChung);
            });
        }
        else {
            this.isAdd = false;
            this.baseService.getById(id).subscribe(resultData => {
                if (resultData !== null && resultData !== undefined) {
                    this.lyDo = resultData;
                }
            });
        }
    }
    getSharedData() {
        // console.log(this.trieuChung);
        return this.lyDo;
    }
};
LyDoTiepNhanSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
LyDoTiepNhanSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ly-do-tiep-nhan-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ly-do-tiep-nhan-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ly-do-tiep-nhan-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.scss")).default]
    })
], LyDoTiepNhanSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9seS1kby10aWVwLW5oYW4vbHktZG8tdGllcC1uaGFuLXVwZGF0ZS9seS1kby10aWVwLW5oYW4tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: LyDoTiepNhanUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanUpdateComponent", function() { return LyDoTiepNhanUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ly_do_tiep_nhan_shared_ly_do_tiep_nhan_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.ts");




let LyDoTiepNhanUpdateComponent = class LyDoTiepNhanUpdateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan']);
    }
};
LyDoTiepNhanUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ly_do_tiep_nhan_shared_ly_do_tiep_nhan_shared_component__WEBPACK_IMPORTED_MODULE_3__["LyDoTiepNhanSharedComponent"], { static: true })
], LyDoTiepNhanUpdateComponent.prototype, "shared", void 0);
LyDoTiepNhanUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ly-do-tiep-nhan-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ly-do-tiep-nhan-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ly-do-tiep-nhan-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.scss")).default]
    })
], LyDoTiepNhanUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.model.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.model.ts ***!
  \********************************************************************************************************/
/*! exports provided: LyDoTiepNhan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhan", function() { return LyDoTiepNhan; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LyDoTiepNhan {
    constructor(Id = 0, Ten = null, TenCha = null, LyDoTiepNhanChaId = null, CapNhom = 0, MoTa = null) {
        this.Id = Id;
        this.Ten = Ten;
        this.TenCha = TenCha;
        this.LyDoTiepNhanChaId = LyDoTiepNhanChaId;
        this.CapNhom = CapNhom;
        this.MoTa = MoTa;
    }
}


/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LyDoTiepNhanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanModule", function() { return LyDoTiepNhanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ly_do_tiep_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ly-do-tiep-nhan-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-routing.module.ts");
/* harmony import */ var _ly_do_tiep_nhan_list_ly_do_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-list/ly-do-tiep-nhan-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _ly_do_tiep_nhan_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ly-do-tiep-nhan.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.service.ts");
/* harmony import */ var _ly_do_tiep_nhan_create_ly_do_tiep_nhan_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-create/ly-do-tiep-nhan-create.component.ts");
/* harmony import */ var _ly_do_tiep_nhan_update_ly_do_tiep_nhan_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-update/ly-do-tiep-nhan-update.component.ts");
/* harmony import */ var _ly_do_tiep_nhan_shared_ly_do_tiep_nhan_shared_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan-shared/ly-do-tiep-nhan-shared.component.ts");























let LyDoTiepNhanModule = class LyDoTiepNhanModule {
};
LyDoTiepNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ly_do_tiep_nhan_list_ly_do_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__["LyDoTiepNhanListComponent"], _ly_do_tiep_nhan_create_ly_do_tiep_nhan_create_component__WEBPACK_IMPORTED_MODULE_20__["LyDoTiepNhanCreateComponent"], _ly_do_tiep_nhan_update_ly_do_tiep_nhan_update_component__WEBPACK_IMPORTED_MODULE_21__["LyDoTiepNhanUpdateComponent"], _ly_do_tiep_nhan_shared_ly_do_tiep_nhan_shared_component__WEBPACK_IMPORTED_MODULE_22__["LyDoTiepNhanSharedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ly_do_tiep_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["LyDoTiepNhanRoutingModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_16__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_17__["TreeViewModule"],
        ],
        providers: [
            _ly_do_tiep_nhan_service__WEBPACK_IMPORTED_MODULE_19__["LyDoTiepNhanService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__["BaseService"], useClass: _ly_do_tiep_nhan_service__WEBPACK_IMPORTED_MODULE_19__["LyDoTiepNhanService"] },
        ]
    })
], LyDoTiepNhanModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/ly-do-tiep-nhan/ly-do-tiep-nhan.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LyDoTiepNhanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyDoTiepNhanService", function() { return LyDoTiepNhanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let LyDoTiepNhanService = class LyDoTiepNhanService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'LyDoTiepNhan';
    }
};
LyDoTiepNhanService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LyDoTiepNhanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LyDoTiepNhanService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-ly-do-tiep-nhan-ly-do-tiep-nhan-module-es2015.js.map