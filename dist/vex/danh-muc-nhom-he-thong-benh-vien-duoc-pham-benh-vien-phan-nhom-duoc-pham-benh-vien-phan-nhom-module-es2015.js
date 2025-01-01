(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-benh-vien-duoc-pham-benh-vien-phan-nhom-duoc-pham-benh-vien-phan-nhom-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Dược Phẩm Bệnh Viện Phân Nhóm',Path:'/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Dược Phẩm Bệnh Viện Phân Nhóm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-duoc-pham-benh-vien-phan-nhom-shared></app-duoc-pham-benh-vien-phan-nhom-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\" (validateClient)=\"CheckValidateClient($event)\">\n                    </app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <!-- <h1 class=\"title mt-0 mb-1\">Danh Mục Dịch Vụ Kỹ Thuật</h1> -->\n                <vex-breadcrumbs [crumbs]=\"[\n              {Title:'Danh Mục',Path:''}\n              ,{Title:'Nhóm Hệ Thống',Path:''}\n              ,{Title:'Bệnh Viện',Path:''}\n              ,{Title:'Dược Phẩm Bệnh Viện Phân Nhóm',Path:'/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom',Active:true}\n                  ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                    />\n                </div>\n                <span fxFlex></span>\n                <button (click)=\"add()\" class=\"ml-4 right\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                </button>\n            </div>\n            <div class=\"p-4\">\n\n                <kendo-treeview [nodes]=data textField=\"field\" kendoTreeViewExpandable kendoTreeViewHierarchyBinding childrenField=\"DuocPhamBenhVienPhanNhomChildren\">\n                    <ng-template kendoTreeViewNodeTemplate let-dataItem kendoTreeViewNodeTemplate let-dataItem>\n                        <span [ngClass]=\"iconClass(dataItem)\"></span> {{dataItem.Ten}}\n                        <span fxFlex></span>\n                        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                        </button>\n                        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <ng-template let-customer=\"customer\" matMenuContent>\n                                <button (click)=\"Addchildren(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                                    <span>Thêm nhánh </span>\n                                </button>\n                                <button (click)=\"edit(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                                    <span>Sửa</span>\n                                </button>\n                                <button (click)=\"delete(dataItem.Id)\" mat-menu-item>\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                    <span>Xóa</span>\n                                </button>\n                            </ng-template>\n                        </mat-menu>\n                    </ng-template>\n\n                </kendo-treeview>\n\n            </div>\n        </div>\n\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" fxLayoutAlign=\"space-between\">\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\" class=\"mb-1\">\n            <app-combobox id=\"TrieuChungCha\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [(model)]=\"duocPhamBenhVienPhanNhom.NhomChaId\" [modelText]=\"duocPhamBenhVienPhanNhom.TenCha\" label=\"Dược Phẩm Cha\" [url]=\"url\" [template]=\"khoaPhongTemplate\" [validationerror]=\"'NhomChaId' | validationerror:validationErrors\">\n                <ng-template #khoaPhongTemplate let-dataItem>\n                    <label [ngStyle]=\"{\n                    'font-weight':dataItem.CapNhom == 0 ? 'bold' : 'normal',\n                    'padding-left' :((dataItem.CapNhom)*20) + 'px'\n                 }\">{{dataItem.DisplayName}}\n                    </label>\n                </ng-template>\n            </app-combobox>\n            <app-textbox id=\"Ten\" fxFlex=\"70%\" fxFlex.sm=\"70%\" [required]=\"true\" [(model)]=\"duocPhamBenhVienPhanNhom.Ten\" label=\"Tên\" maxlength=\"250\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n            </app-textbox>\n            <app-textbox id=\"kyHieuPhanNhom\" fxFlex=\"30%\" fxFlex.sm=\"30%\" \n                [(model)]=\"duocPhamBenhVienPhanNhom.KyHieuPhanNhom\" label=\"Ký hiệu phân nhóm\" maxlength=\"1\">\n            </app-textbox>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.html":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.html ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form current=\"\" [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Nhóm Hệ Thống',Path:''}\n    ,{Title:'Bệnh Viện',Path:''}\n    ,{Title:'Dược Phẩm Bệnh Viện Phân Nhóm',Path:'/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Dược Phẩm Bệnh Viện Phân Nhóm</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-duoc-pham-benh-vien-phan-nhom-shared></app-duoc-pham-benh-vien-phan-nhom-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\" (validateClient)=\"CheckValidateClient($event)\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

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

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS1jcmVhdGUvZHVvYy1waGFtLWJlbmgtdmllbi1waGFuLW5ob20tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomCreateComponent", function() { return DuocPhamBenhVienPhanNhomCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_shared_duoc_pham_benh_vien_phan_nhom_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.ts");






let DuocPhamBenhVienPhanNhomCreateComponent = class DuocPhamBenhVienPhanNhomCreateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onCreated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom']);
    }
    CheckValidateClient(allowValidate) {
        if (allowValidate) {
            this.shared.CheckValidate();
        }
    }
};
DuocPhamBenhVienPhanNhomCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duoc_pham_benh_vien_phan_nhom_shared_duoc_pham_benh_vien_phan_nhom_shared_component__WEBPACK_IMPORTED_MODULE_5__["DuocPhamBenhVienPhanNhomSharedComponent"], { static: true })
], DuocPhamBenhVienPhanNhomCreateComponent.prototype, "shared", void 0);
DuocPhamBenhVienPhanNhomCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duoc-pham-benh-vien-phan-nhom-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-phan-nhom-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.scss")).default]
    })
], DuocPhamBenhVienPhanNhomCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS1saXN0L2R1b2MtcGhhbS1iZW5oLXZpZW4tcGhhbi1uaG9tLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomListComponent", function() { return DuocPhamBenhVienPhanNhomListComponent; });
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
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");



















const is = (fileName, ext) => new RegExp(`.${ext}\$`).test(fileName);
let DuocPhamBenhVienPhanNhomListComponent = class DuocPhamBenhVienPhanNhomListComponent {
    constructor(baseService, router, authService, notificationService, dialog) {
        this.baseService = baseService;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.DuocPhamBenhVienPhanNhom = {};
        this.expression = false;
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
        this.searchPlaceHolder = 'Nhập từ khóa...';
        this.searchString = null;
        this.lazyLoadPage = false;
        this.useAddDeault = true;
        this.sort = null;
        this.data = [];
        this.originData = [];
        this.field = { dataSource: this.data, id: 'id', field: 'Ten', hasChildren: 'DuocPhamBenhVienPhanNhomChildren' };
    }
    iconClass({ text, DuocPhamBenhVienPhanNhomChildren }) {
        return {
            'k-i-folder': DuocPhamBenhVienPhanNhomChildren !== undefined,
            'k-icon': true
        };
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhMucDuocPhamBenhVienPhanNhom;
        this._isLoading = true;
        this.baseService.getDataForGrid(this._gridQueryInfo, 'DuocPhamBenhVienPhanNhom/GetDataTreeView').subscribe((resultData) => {
            this.data = [...resultData];
            this.originData = [...resultData];
        });
        this.baseRoute = '/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/them';
    }
    search() {
        this._skip = 0;
        let searchText = this.searchString != null ? this.searchString : '';
        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
        this._isLoading = true;
        this._gridQueryInfo = {
            skip: this._skip,
            take: this._take,
            pageSize: this._pageSize,
            searchString: searchText,
            additionalSearchString: this._additionalSearchString,
            sort: this.sort,
            lazyLoadPage: this.lazyLoadPage
        };
        this.baseService.getDataForGrid(this._gridQueryInfo, 'DuocPhamBenhVienPhanNhom/GetDataTreeView')
            .subscribe((resultData) => {
            this.data = resultData;
        });
    }
    searchChanges(event) {
        const self = this;
        self.searchString = event;
        if (self.timeoutSearchChange != null) {
            clearTimeout(self.timeoutSearchChange);
            self.timeoutSearchChange = null;
        }
        self.timeoutSearchChange = setTimeout(() => {
            if (self.searchString == null || self.searchString === '') {
                self.data = [...self.originData];
            }
        }, 100);
    }
    onKey(event) {
        if (event.key === 'Enter' || this.searchString === '') {
            this.search();
        }
    }
    add() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Add)) {
            if (this.formIsPopup) {
                this.dialog.open(this.componentCreate).afterClosed().subscribe();
            }
            else {
                this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom' + '/them']);
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    Addchildren(id) {
        this.isCreateChildren = true;
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom' + '/chinh-sua/' + id + '/' + this.isCreateChildren]);
    }
    edit(id) {
        this.isCreateChildren = false;
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom' + '/chinh-sua/' + id + '/' + this.isCreateChildren]);
    }
    mySelectionAfterDelete(id) {
        this.mySelection.forEach((item, index, object) => {
            if (item === id) {
                object.splice(index, 1);
            }
        });
    }
    delete(id) {
        const self = this;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: {
                    Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessComfirmChildrenLyDoTiepNhan, ['xóa', 'dược phẩm'])
                }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.baseService.deleteById(id)
                        .subscribe(() => {
                        this.mySelectionAfterDelete(id);
                        self.search();
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                    }, (err) => {
                        self.notificationService.showError(err.Message);
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
DuocPhamBenhVienPhanNhomListComponent.ctorParameters = () => [
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: false })
], DuocPhamBenhVienPhanNhomListComponent.prototype, "gridChild", void 0);
DuocPhamBenhVienPhanNhomListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duoc-pham-benh-vien-phan-nhom-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-phan-nhom-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.scss")).default]
    })
], DuocPhamBenhVienPhanNhomListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-routing.module.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-routing.module.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomRoutingModule", function() { return DuocPhamBenhVienPhanNhomRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_list_duoc_pham_benh_vien_phan_nhom_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_create_duoc_pham_benh_vien_phan_nhom_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_update_duoc_pham_benh_vien_phan_nhom_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");









const routes = [
    {
        path: '',
        component: _duoc_pham_benh_vien_phan_nhom_list_duoc_pham_benh_vien_phan_nhom_list_component__WEBPACK_IMPORTED_MODULE_3__["DuocPhamBenhVienPhanNhomListComponent"],
        data: {
            title: 'Danh Mục Dược Phẩm Bệnh Viện Phân Nhóm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucDuocPhamBenhVienPhanNhom,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _duoc_pham_benh_vien_phan_nhom_create_duoc_pham_benh_vien_phan_nhom_create_component__WEBPACK_IMPORTED_MODULE_4__["DuocPhamBenhVienPhanNhomCreateComponent"],
        data: {
            title: 'Thêm Dược Phẩm Bệnh Viện Phân Nhóm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucDuocPhamBenhVienPhanNhom,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id/:isCreateChildren',
        component: _duoc_pham_benh_vien_phan_nhom_update_duoc_pham_benh_vien_phan_nhom_update_component__WEBPACK_IMPORTED_MODULE_5__["DuocPhamBenhVienPhanNhomUpdateComponent"],
        data: {
            title: 'Chỉnh Sửa Dược Phẩm Bệnh Viện Phân Nhóm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucDuocPhamBenhVienPhanNhom,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    }
];
let DuocPhamBenhVienPhanNhomRoutingModule = class DuocPhamBenhVienPhanNhomRoutingModule {
};
DuocPhamBenhVienPhanNhomRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DuocPhamBenhVienPhanNhomRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS1zaGFyZWQvZHVvYy1waGFtLWJlbmgtdmllbi1waGFuLW5ob20tc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomSharedComponent", function() { return DuocPhamBenhVienPhanNhomSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");






let DuocPhamBenhVienPhanNhomSharedComponent = class DuocPhamBenhVienPhanNhomSharedComponent {
    constructor(route, baseService, apiService) {
        this.route = route;
        this.baseService = baseService;
        this.apiService = apiService;
        this.duocPhamBenhVienPhanNhom = {};
        this.id = this.route.snapshot.params.id;
        this.controllerName = 'DuocPhamBenhVienPhanNhom';
    }
    ngOnInit() {
        this.url = 'DuocPhamBenhVienPhanNhom/GetListDuocPhamBenhVienPhanNhomCha';
        this.isCreateChildren = this.route.snapshot.params.isCreateChildren;
        if (this.id) {
            this.url = `DuocPhamBenhVienPhanNhom/GetListDuocPhamBenhVienPhanNhomCha?id=${this.id}`;
            this.getById(this.id);
        }
    }
    getById(id) {
        let createChild = false;
        if (this.isCreateChildren === 'true') {
            createChild = true;
            this.apiService.get(`${this.controllerName}/Get?id=${id}&createChild=${createChild}`).subscribe((result) => {
                this.duocPhamBenhVienPhanNhom = result;
                this.duocPhamBenhVienPhanNhom.NhomChaId = this.duocPhamBenhVienPhanNhom.Id;
                this.duocPhamBenhVienPhanNhom.Id = 0;
                this.duocPhamBenhVienPhanNhom.Ten = null;
            });
        }
        else {
            this.apiService.get(`${this.controllerName}/Get?id=${id}&createChild=${createChild}`).subscribe(resultData => {
                if (resultData != null) {
                    this.duocPhamBenhVienPhanNhom = resultData;
                }
            });
        }
    }
    getSharedData() {
        return this.duocPhamBenhVienPhanNhom;
    }
    CheckValidate() {
        this.validationErrors = [];
        if (this.duocPhamBenhVienPhanNhom.Ten == null || this.duocPhamBenhVienPhanNhom.Ten === '') {
            const validate = {
                Field: 'Ten',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__["DuocPhamBenhVienPhanNhomMessage"].MessageTenNotEmpty
            };
            this.validationErrors.push(validate);
        }
        if (this.duocPhamBenhVienPhanNhom.Id === this.duocPhamBenhVienPhanNhom.NhomChaId && this.duocPhamBenhVienPhanNhom.Id != null) {
            const validate = {
                Field: 'NhomChaId',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_4__["DuocPhamBenhVienPhanNhomMessage"].MessageChiDinhSelf
            };
            this.validationErrors.push(validate);
        }
    }
};
DuocPhamBenhVienPhanNhomSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
DuocPhamBenhVienPhanNhomSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duoc-pham-benh-vien-phan-nhom-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-phan-nhom-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-shared.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.scss")).default]
    })
], DuocPhamBenhVienPhanNhomSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2Jlbmgtdmllbi9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS9kdW9jLXBoYW0tYmVuaC12aWVuLXBoYW4tbmhvbS11cGRhdGUvZHVvYy1waGFtLWJlbmgtdmllbi1waGFuLW5ob20tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.ts":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.ts ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomUpdateComponent", function() { return DuocPhamBenhVienPhanNhomUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_shared_duoc_pham_benh_vien_phan_nhom_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.ts");




let DuocPhamBenhVienPhanNhomUpdateComponent = class DuocPhamBenhVienPhanNhomUpdateComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    onUpdated() {
        this.router.navigate(['/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom']);
    }
    CheckValidateClient(allowValidate) {
        if (allowValidate) {
            this.shared.CheckValidate();
        }
    }
};
DuocPhamBenhVienPhanNhomUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duoc_pham_benh_vien_phan_nhom_shared_duoc_pham_benh_vien_phan_nhom_shared_component__WEBPACK_IMPORTED_MODULE_3__["DuocPhamBenhVienPhanNhomSharedComponent"], { static: true })
], DuocPhamBenhVienPhanNhomUpdateComponent.prototype, "shared", void 0);
DuocPhamBenhVienPhanNhomUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duoc-pham-benh-vien-phan-nhom-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duoc-pham-benh-vien-phan-nhom-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.scss")).default]
    })
], DuocPhamBenhVienPhanNhomUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.module.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomModule", function() { return DuocPhamBenhVienPhanNhomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-routing.module.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_list_duoc_pham_benh_vien_phan_nhom_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-list/duoc-pham-benh-vien-phan-nhom-list.component.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_create_duoc_pham_benh_vien_phan_nhom_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-create/duoc-pham-benh-vien-phan-nhom-create.component.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_update_duoc_pham_benh_vien_phan_nhom_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-update/duoc-pham-benh-vien-phan-nhom-update.component.ts");
/* harmony import */ var _duoc_pham_benh_vien_phan_nhom_shared_duoc_pham_benh_vien_phan_nhom_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom-shared/duoc-pham-benh-vien-phan-nhom-shared.component.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
























let DuocPhamBenhVienPhanNhomModule = class DuocPhamBenhVienPhanNhomModule {
};
DuocPhamBenhVienPhanNhomModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _duoc_pham_benh_vien_phan_nhom_list_duoc_pham_benh_vien_phan_nhom_list_component__WEBPACK_IMPORTED_MODULE_9__["DuocPhamBenhVienPhanNhomListComponent"],
            _duoc_pham_benh_vien_phan_nhom_create_duoc_pham_benh_vien_phan_nhom_create_component__WEBPACK_IMPORTED_MODULE_10__["DuocPhamBenhVienPhanNhomCreateComponent"],
            _duoc_pham_benh_vien_phan_nhom_update_duoc_pham_benh_vien_phan_nhom_update_component__WEBPACK_IMPORTED_MODULE_11__["DuocPhamBenhVienPhanNhomUpdateComponent"],
            _duoc_pham_benh_vien_phan_nhom_shared_duoc_pham_benh_vien_phan_nhom_shared_component__WEBPACK_IMPORTED_MODULE_12__["DuocPhamBenhVienPhanNhomSharedComponent"]
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"],
            _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_20__["TreeViewModule"],
            _duoc_pham_benh_vien_phan_nhom_routing_module__WEBPACK_IMPORTED_MODULE_8__["DuocPhamBenhVienPhanNhomRoutingModule"]
        ],
        providers: [
            _duoc_pham_benh_vien_phan_nhom_service__WEBPACK_IMPORTED_MODULE_5__["DuocPhamBenhVienPhanNhomService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _duoc_pham_benh_vien_phan_nhom_service__WEBPACK_IMPORTED_MODULE_5__["DuocPhamBenhVienPhanNhomService"] },
        ]
    })
], DuocPhamBenhVienPhanNhomModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.service.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/nhom-he-thong/benh-vien/duoc-pham-benh-vien-phan-nhom/duoc-pham-benh-vien-phan-nhom.service.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: DuocPhamBenhVienPhanNhomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuocPhamBenhVienPhanNhomService", function() { return DuocPhamBenhVienPhanNhomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let DuocPhamBenhVienPhanNhomService = class DuocPhamBenhVienPhanNhomService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'DuocPhamBenhVienPhanNhom';
    }
};
DuocPhamBenhVienPhanNhomService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DuocPhamBenhVienPhanNhomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DuocPhamBenhVienPhanNhomService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-nhom-he-thong-benh-vien-duoc-pham-benh-vien-phan-nhom-duoc-pham-benh-vien-phan-nhom-module-es2015.js.map