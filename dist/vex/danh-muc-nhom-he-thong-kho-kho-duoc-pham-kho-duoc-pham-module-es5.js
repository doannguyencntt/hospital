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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-nhom-he-thong-kho-kho-duoc-pham-kho-duoc-pham-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Danh Mục',Path:''}\n                ,{Title:'Nhóm Hệ Thống',Path:''}\n                ,{Title:'Kho', Path:''}\n                ,{Title:'Kho Dược Phẩm/ Vật Tư Y Tế',Path:'/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te', Active: true}\n\n                ]\"></app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Kho Dược Phẩm/ Vật Tư Y Tế</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-kho-duoc-pham-share></app-kho-duoc-pham-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"create\" (created)=\"onCreated()\" (validateClient)=\"onValidate($event)\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.html": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.html ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Danh Mục', Path:''}\n                    ,{Title:'Nhóm Hệ Thống', Path:''}\n                    ,{Title:'Kho', Path:''}\n                    ,{Title:'Kho Dược Phẩm/ Vật Tư Y Tế', Path:'/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"true\" [showExportExcel]=\"true\"\n                (extExportExcel)=\"exportExcel()\" [lazyLoadPage]=\"true\">\n            </app-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n<ng-template #defaultTemplate let-dataItem>\n    <span *ngIf=\"dataItem.IsDefault==true\" class=\"red\">Phải</span>\n    <span *ngIf=\"dataItem.IsDefault!=true\">Không</span>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <app-textbox id=\"Ten\" fxFlex=\"20%\" fxFlex.sm=\"100%\" label=\"Tên kho\" maxlength=\"50\" [(model)]=\"modelFE.Ten\"\n        [required]=\"true\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox *ngIf=\"modelFE.IsDefault\" [disabled]=\"true\" id=\"LoaiKho\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n        [(model)]=\"modelFE.LoaiKho\" (selectionChange)=\"OnChangeLoaiKho($event)\" [modelText]=\"modelFE.TextLoaiKho\"\n        label=\"Loại kho\" [required]=\"true\" url=\"KhoDuocPham/GetLoaiKhos\"\n        [validationerror]=\"'LoaiKho' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"!modelFE.IsDefault\" id=\"LoaiKho\" fxFlex=\"20%\" fxFlex.sm=\"100%\" [(model)]=\"modelFE.LoaiKho\"\n        (selectionChange)=\"OnChangeLoaiKho($event)\" [modelText]=\"modelFE.TextLoaiKho\" label=\"Loại kho\" [required]=\"true\"\n        url=\"KhoDuocPham/GetLoaiKhos\" [validationerror]=\"'LoaiKho' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n        <div class=\"container-custom no-label\">\n            <label>Kho chứa</label>\n            <div fxLayout=\"row\">\n                <app-checkbox id=\"duocPham\" label=\"Dược phẩm\" class=\"mb-1\" [(model)]=\"modelFE.LoaiDuocPham\"\n                    style=\"margin-top: 1px;\">\n                </app-checkbox>\n\n                <app-checkbox id=\"vatTu\" label=\"Vật tư\" class=\"ml-4 mb-1\" [(model)]=\"modelFE.LoaiVatTu\"\n                    style=\"margin-top: 1px;\">\n                </app-checkbox>\n            </div>\n        </div>\n    </div>\n\n    <app-combobox *ngIf=\"enableKhoaPhong && modelFE.IsDefault\" [disabled]=\"true\" id=\"khoa-phong\" fxFlex=\"20%\"\n        fxFlex.sm=\"100%\" (selectionChange)=\"OnChangeKhoaPhong($event)\" [(model)]=\"modelFE.KhoaPhongId\"\n        [modelText]=\"modelFE.KhoaPhong\" label=\"Khoa\" [required]=\"true\" url=\"KhoaPhongNhanVien/GetListKhoaPhong\"\n        [validationerror]=\"'KhoaPhongId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox *ngIf=\"enableKhoaPhong && !modelFE.IsDefault\" id=\"khoa-phong\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n        (selectionChange)=\"OnChangeKhoaPhong($event)\" [(model)]=\"modelFE.KhoaPhongId\" [modelText]=\"modelFE.KhoaPhong\"\n        label=\"Khoa\" [required]=\"true\" url=\"KhoaPhongNhanVien/GetListKhoaPhong\"\n        [validationerror]=\"'KhoaPhongId' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox *ngIf=\"enablePhongBenhVien && modelFE.IsDefault\" [disabled]=\"true\" id=\"phong-benh-vien\" fxFlex=\"20%\"\n        fxFlex.sm=\"100%\" [(model)]=\"modelFE.PhongBenhVienId\" [modelText]=\"modelFE.PhongBenhVien\" [data]=\"data\"\n        [url]=\"url\" (openCombobox)=\"OnLoadPhongBenhVien($event)\" label=\"Phòng bệnh viện\">\n    </app-combobox>\n    <app-combobox *ngIf=\"enablePhongBenhVien && !modelFE.IsDefault\" id=\"phong-benh-vien\" fxFlex=\"20%\" fxFlex.sm=\"100%\"\n        [(model)]=\"modelFE.PhongBenhVienId\" [modelText]=\"modelFE.PhongBenhVien\" [data]=\"data\" [url]=\"url\"\n        (openCombobox)=\"OnLoadPhongBenhVien($event)\" label=\"Phòng bệnh viện\" [template]=\"TemplateData\"\n        [templateHeader]=\"TemplateHeader\">\n        <ng-template #TemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"20%\">Mã</th>\n                    <th>Tên</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #TemplateData let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                    <td>{{dataItem.Ten}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n  \n\n    <app-multiselect id=\"kho-nhan-vien-quan-ly\" fxFlex=\"100%\" [(model)]=\"modelFE.NhanVienIds\" fxFlex.sm=\"100%\"\n        label=\"Tên nhân viên\" url=\"KhoaPhongNhanVien/GetListNhanVien\" [required]=\"true\"\n        [validationerror]=\"'NhanVienIds' | validationerror:validationErrors\">\n    </app-multiselect>\n\n    \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.html": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.html ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Danh Mục',Path:''}\n                ,{Title:'Nhóm Hệ Thống',Path:''}\n                ,{Title:'Kho', Path:''}\n                ,{Title:'Kho Dược Phẩm/ Vật Tư Y Tế',Path:'/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te', Active: true}\n                ]\"></app-header-form>\n\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Kho Dược Phẩm/ Vật Tư Y Tế</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-kho-duoc-pham-share></app-kho-duoc-pham-share>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <app-formfooter [bodyComponent]=\"shared\" type=\"update\" (updated)=\"onUpdated()\" (validateClient)=\"onValidate($event)\"></app-formfooter>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./src/@vex/animations/fade-in-up.animation.ts": 
        /*!*****************************************************!*\
          !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
          \*****************************************************/
        /*! exports provided: fadeInUpAnimation, fadeInUp400ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function () { return fadeInUpAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function () { return fadeInUp400ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function fadeInUpAnimation(duration) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(20px)',
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(duration + "ms cubic-bezier(0.35, 0, 0.25, 1)", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translateY(0)',
                            opacity: 1
                        }))
                    ])
                ]);
            }
            var fadeInUp400ms = fadeInUpAnimation(400);
            /***/ 
        }),
        /***/ "./src/@vex/animations/stagger.animation.ts": 
        /*!**************************************************!*\
          !*** ./src/@vex/animations/stagger.animation.ts ***!
          \**************************************************/
        /*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function () { return staggerAnimation; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function () { return stagger80ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function () { return stagger60ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function () { return stagger40ms; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function () { return stagger20ms; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            function staggerAnimation(timing) {
                return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
                    ])
                ]);
            }
            var stagger80ms = staggerAnimation(80);
            var stagger60ms = staggerAnimation(60);
            var stagger40ms = staggerAnimation(40);
            var stagger20ms = staggerAnimation(20);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2toby9raG8tZHVvYy1waGFtL2toby1kdW9jLXBoYW0tY3JlYXRlL2toby1kdW9jLXBoYW0tY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: KhoDuocPhamCreateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamCreateComponent", function () { return KhoDuocPhamCreateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _kho_duoc_pham_share_kho_duoc_pham_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kho-duoc-pham-share/kho-duoc-pham-share.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.ts");
            var KhoDuocPhamCreateComponent = /** @class */ (function () {
                function KhoDuocPhamCreateComponent(router) {
                    this.router = router;
                }
                KhoDuocPhamCreateComponent.prototype.ngOnInit = function () {
                };
                KhoDuocPhamCreateComponent.prototype.onCreated = function () { this.router.navigate(['/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te']); };
                KhoDuocPhamCreateComponent.prototype.onValidate = function (allowValidate) {
                    if (allowValidate) {
                        this.shared.Validate();
                    }
                };
                return KhoDuocPhamCreateComponent;
            }());
            KhoDuocPhamCreateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_kho_duoc_pham_share_kho_duoc_pham_share_component__WEBPACK_IMPORTED_MODULE_5__["KhoDuocPhamShareComponent"], { static: true })
            ], KhoDuocPhamCreateComponent.prototype, "shared", void 0);
            KhoDuocPhamCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kho-duoc-pham-create',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kho-duoc-pham-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kho-duoc-pham-create.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.scss")).default]
                })
            ], KhoDuocPhamCreateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.scss": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.scss ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2toby9raG8tZHVvYy1waGFtL2toby1kdW9jLXBoYW0tbGlzdC9raG8tZHVvYy1waGFtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: KhoDuocPhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamListComponent", function () { return KhoDuocPhamListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var KhoDuocPhamListComponent = /** @class */ (function () {
                function KhoDuocPhamListComponent(dialog, notificationService, apiService, authService, router) {
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.router = router;
                    this.expression = false;
                    this.gridColumns = [];
                }
                KhoDuocPhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhMucKhoDuocPham;
                    this.gridColumns = [
                        { Field: 'Ten', Title: 'Tên kho', Width: 300, Sortable: true, LinkDetail: true },
                        { Field: 'KhoaPhong', Title: 'Khoa', Width: 150, Sortable: true },
                        { Field: 'PhongBenhVien', Title: 'Phòng', Width: 150, Sortable: true },
                        { Field: 'TextLoaiKho', Title: 'Loại Kho', Width: 200, Sortable: true },
                        { Field: 'LoaiDuocPhamVatTu', Title: 'Kho chứa', Width: 100, Sortable: true },
                        { Field: 'IsDefault', Title: 'Kho mặc định', Width: 100, Sortable: true, Template: this.defaultTemplate }
                    ];
                };
                KhoDuocPhamListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel('KhoDuocPham/ExportKhoDuocPham', this.gridChild._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'KhoDuocPham' + dateTimeNow.getFullYear() + '.xlsx');
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhoDuocPhamListComponent;
            }());
            KhoDuocPhamListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
            ], KhoDuocPhamListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
            ], KhoDuocPhamListComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhoDuocPhamListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('defaultTemplate', { static: true })
            ], KhoDuocPhamListComponent.prototype, "defaultTemplate", void 0);
            KhoDuocPhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kho-duoc-pham-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kho-duoc-pham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kho-duoc-pham-list.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.scss")).default]
                })
            ], KhoDuocPhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-routing.module.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-routing.module.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: KhoDuocPhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamRoutingModule", function () { return KhoDuocPhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _kho_duoc_pham_list_kho_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kho-duoc-pham-list/kho-duoc-pham-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.ts");
            /* harmony import */ var _kho_duoc_pham_create_kho_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kho-duoc-pham-create/kho-duoc-pham-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.ts");
            /* harmony import */ var _kho_duoc_pham_update_kho_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kho-duoc-pham-update/kho-duoc-pham-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _kho_duoc_pham_list_kho_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_3__["KhoDuocPhamListComponent"],
                    data: {
                        title: 'Danh Mục Kho Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucKhoDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'them',
                    component: _kho_duoc_pham_create_kho_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_4__["KhoDuocPhamCreateComponent"],
                    data: {
                        title: 'Thêm Kho Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucKhoDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                },
                {
                    path: 'chinh-sua/:id',
                    component: _kho_duoc_pham_update_kho_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_5__["KhoDuocPhamUpdateComponent"],
                    data: {
                        title: 'Chỉnh Sửa Kho Dược Phẩm',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucKhoDuocPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
                }
            ];
            var KhoDuocPhamRoutingModule = /** @class */ (function () {
                function KhoDuocPhamRoutingModule() {
                }
                return KhoDuocPhamRoutingModule;
            }());
            KhoDuocPhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhoDuocPhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2toby9raG8tZHVvYy1waGFtL2toby1kdW9jLXBoYW0tc2hhcmUva2hvLWR1b2MtcGhhbS1zaGFyZS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: KhoDuocPhamShareComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamShareComponent", function () { return KhoDuocPhamShareComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/loai-kho.enum */ "./src/app/shared/enum/loai-kho.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            var KhoDuocPhamShareComponent = /** @class */ (function () {
                // @ViewChild('cmbPhongBenhVien', { static: true }) cmbPhongBenhVien: ComboboxComponent;
                function KhoDuocPhamShareComponent(route, baseService, apiService) {
                    this.route = route;
                    this.baseService = baseService;
                    this.apiService = apiService;
                    this.modelFE = {};
                    this.enableKhoaPhong = false;
                    this.enablePhongBenhVien = false;
                    this.controllerName = 'PhongBenhVien';
                }
                KhoDuocPhamShareComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.params.id;
                    this.isCreate = true;
                    if (id != null) {
                        this.isCreate = false;
                        this.getById(id);
                    }
                };
                KhoDuocPhamShareComponent.prototype.getById = function (id) {
                    var _this = this;
                    this.baseService.getById(id).subscribe(function (resultData) {
                        if (resultData != null) {
                            _this.modelFE = Object.assign({}, resultData);
                            if (_this.modelFE.LoaiKho === src_app_shared_enum_loai_kho_enum__WEBPACK_IMPORTED_MODULE_5__["EnumLoaiKho"].KhoLe) {
                                _this.enableKhoaPhong = true;
                                _this.enablePhongBenhVien = true;
                            }
                        }
                    });
                };
                KhoDuocPhamShareComponent.prototype.getSharedData = function () {
                    return this.modelFE;
                };
                KhoDuocPhamShareComponent.prototype.OnChangeLoaiKho = function (loaiKho) {
                    this.modelFE.KhoaPhongId = null;
                    this.modelFE.PhongBenhVienId = null;
                    if (loaiKho != null && loaiKho.KeyId === 5) {
                        this.enableKhoaPhong = true;
                        return;
                    }
                    this.enableKhoaPhong = false;
                    this.enablePhongBenhVien = false;
                };
                KhoDuocPhamShareComponent.prototype.OnChangeKhoaPhong = function (khoaPhong) {
                    this.modelFE.PhongBenhVienId = null;
                    this.enablePhongBenhVien = false;
                    if (khoaPhong != null) {
                        this.enablePhongBenhVien = true;
                    }
                    this.modelFE.PhongBenhVienId = null;
                    this.modelFE.PhongBenhVien = null;
                };
                KhoDuocPhamShareComponent.prototype.OnLoadPhongBenhVien = function (isOpen) {
                    var _this = this;
                    if (isOpen) {
                        var dropDownListModel = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_7__["LookupQueryInfo"]();
                        dropDownListModel.Id = this.modelFE.KhoaPhongId;
                        this.apiService.post(this.controllerName + "/GetListPhongBenhVienByKhoa", dropDownListModel).subscribe(function (res) {
                            _this.data = res.slice();
                        });
                    }
                };
                KhoDuocPhamShareComponent.prototype.Validate = function () {
                    this.validationErrors = [];
                    if (this.modelFE.Ten == null || this.modelFE.Ten === '') {
                        var validate = {
                            Field: 'Ten',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["KhoDuocPhamVtytMessage"].MessageTenNotEmpty
                        };
                        this.validationErrors.push(validate);
                    }
                    if (this.modelFE.LoaiKho == null) {
                        var validate = {
                            Field: 'LoaiKho',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["KhoDuocPhamVtytMessage"].MessageLoaiNotEmpty
                        };
                        this.validationErrors.push(validate);
                    }
                    if (this.enableKhoaPhong && this.modelFE.KhoaPhongId == null) {
                        var validate = {
                            Field: 'KhoaPhongId',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["KhoDuocPhamVtytMessage"].MessageKhoaNotEmpty
                        };
                        this.validationErrors.push(validate);
                    }
                    if (this.isCreate && (this.modelFE.NhanVienIds == null || !this.modelFE.NhanVienIds.some(function (x) { return x; }))) {
                        var validate = {
                            Field: 'NhanVienIds',
                            Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["KhoDuocPhamVtytMessage"].MessageTenNvNotEmpty
                        };
                        this.validationErrors.push(validate);
                    }
                    // if (!this.isCreate && this.modelFE.NhanVienId == null) {
                    //     const validate = {
                    //         Field: 'NhanVienId',
                    //         Message: KhoDuocPhamVtytMessage.MessageTenNvNotEmpty
                    //     };
                    //     this.validationErrors.push(validate);
                    // }
                };
                return KhoDuocPhamShareComponent;
            }());
            KhoDuocPhamShareComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
            ]; };
            KhoDuocPhamShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kho-duoc-pham-share',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kho-duoc-pham-share.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kho-duoc-pham-share.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.scss")).default]
                })
            ], KhoDuocPhamShareComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.scss": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.scss ***!
          \********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9uaG9tLWhlLXRob25nL2toby9raG8tZHVvYy1waGFtL2toby1kdW9jLXBoYW0tdXBkYXRlL2toby1kdW9jLXBoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: KhoDuocPhamUpdateComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamUpdateComponent", function () { return KhoDuocPhamUpdateComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _kho_duoc_pham_share_kho_duoc_pham_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kho-duoc-pham-share/kho-duoc-pham-share.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.ts");
            var KhoDuocPhamUpdateComponent = /** @class */ (function () {
                function KhoDuocPhamUpdateComponent(router) {
                    this.router = router;
                }
                KhoDuocPhamUpdateComponent.prototype.ngOnInit = function () {
                };
                KhoDuocPhamUpdateComponent.prototype.onUpdated = function () { this.router.navigate(['/danh-muc/nhom-he-thong/kho/kho-duoc-pham-vat-tu-y-te']); };
                KhoDuocPhamUpdateComponent.prototype.onValidate = function (allowValidate) {
                    if (allowValidate) {
                        this.shared.Validate();
                    }
                };
                return KhoDuocPhamUpdateComponent;
            }());
            KhoDuocPhamUpdateComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_kho_duoc_pham_share_kho_duoc_pham_share_component__WEBPACK_IMPORTED_MODULE_5__["KhoDuocPhamShareComponent"], { static: true })
            ], KhoDuocPhamUpdateComponent.prototype, "shared", void 0);
            KhoDuocPhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line: component-selector
                    selector: 'app-kho-duoc-pham-update',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kho-duoc-pham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.html")).default,
                    animations: [
                        src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_4__["stagger60ms"],
                        src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kho-duoc-pham-update.component.scss */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.scss")).default]
                })
            ], KhoDuocPhamUpdateComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham.module.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham.module.ts ***!
          \***********************************************************************************************/
        /*! exports provided: KhoDuocPhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamModule", function () { return KhoDuocPhamModule; });
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
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _kho_duoc_pham_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./kho-duoc-pham.service */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham.service.ts");
            /* harmony import */ var _kho_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kho-duoc-pham-routing.module */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-routing.module.ts");
            /* harmony import */ var _kho_duoc_pham_list_kho_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kho-duoc-pham-list/kho-duoc-pham-list.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-list/kho-duoc-pham-list.component.ts");
            /* harmony import */ var _kho_duoc_pham_share_kho_duoc_pham_share_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./kho-duoc-pham-share/kho-duoc-pham-share.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-share/kho-duoc-pham-share.component.ts");
            /* harmony import */ var _kho_duoc_pham_create_kho_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kho-duoc-pham-create/kho-duoc-pham-create.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-create/kho-duoc-pham-create.component.ts");
            /* harmony import */ var _kho_duoc_pham_update_kho_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./kho-duoc-pham-update/kho-duoc-pham-update.component */ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham-update/kho-duoc-pham-update.component.ts");
            var KhoDuocPhamModule = /** @class */ (function () {
                function KhoDuocPhamModule() {
                }
                return KhoDuocPhamModule;
            }());
            KhoDuocPhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _kho_duoc_pham_list_kho_duoc_pham_list_component__WEBPACK_IMPORTED_MODULE_18__["KhoDuocPhamListComponent"],
                        _kho_duoc_pham_share_kho_duoc_pham_share_component__WEBPACK_IMPORTED_MODULE_19__["KhoDuocPhamShareComponent"],
                        _kho_duoc_pham_create_kho_duoc_pham_create_component__WEBPACK_IMPORTED_MODULE_20__["KhoDuocPhamCreateComponent"],
                        _kho_duoc_pham_update_kho_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_21__["KhoDuocPhamUpdateComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                        _kho_duoc_pham_routing_module__WEBPACK_IMPORTED_MODULE_17__["KhoDuocPhamRoutingModule"],
                    ],
                    providers: [
                        _kho_duoc_pham_service__WEBPACK_IMPORTED_MODULE_16__["KhoDuocPhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _kho_duoc_pham_service__WEBPACK_IMPORTED_MODULE_16__["KhoDuocPhamService"] },
                    ]
                })
            ], KhoDuocPhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham.service.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/danh-muc/nhom-he-thong/kho/kho-duoc-pham/kho-duoc-pham.service.ts ***!
          \************************************************************************************************/
        /*! exports provided: KhoDuocPhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhoDuocPhamService", function () { return KhoDuocPhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var KhoDuocPhamService = /** @class */ (function (_super) {
                __extends(KhoDuocPhamService, _super);
                function KhoDuocPhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'KhoDuocPham';
                    return _this;
                }
                return KhoDuocPhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            KhoDuocPhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            KhoDuocPhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], KhoDuocPhamService);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/loai-kho.enum.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/enum/loai-kho.enum.ts ***!
          \**********************************************/
        /*! exports provided: EnumLoaiKho */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiKho", function () { return EnumLoaiKho; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var EnumLoaiKho;
            (function (EnumLoaiKho) {
                EnumLoaiKho[EnumLoaiKho["KhoTongDuocPhamCap1"] = 1] = "KhoTongDuocPhamCap1";
                EnumLoaiKho[EnumLoaiKho["KhoTongDuocPhamCap2"] = 2] = "KhoTongDuocPhamCap2";
                EnumLoaiKho[EnumLoaiKho["KhoTongVTYTCap1"] = 3] = "KhoTongVTYTCap1";
                EnumLoaiKho[EnumLoaiKho["KhoTongVTYTCap2"] = 4] = "KhoTongVTYTCap2";
                EnumLoaiKho[EnumLoaiKho["KhoLe"] = 5] = "KhoLe";
                EnumLoaiKho[EnumLoaiKho["NhaThuoc"] = 6] = "NhaThuoc";
                EnumLoaiKho[EnumLoaiKho["KhoDuocPhamChoXuLy"] = 7] = "KhoDuocPhamChoXuLy";
                EnumLoaiKho[EnumLoaiKho["KhoVTYTChoXuLy"] = 8] = "KhoVTYTChoXuLy";
            })(EnumLoaiKho || (EnumLoaiKho = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=danh-muc-nhom-he-thong-kho-kho-duoc-pham-kho-duoc-pham-module-es2015.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-kho-kho-duoc-pham-kho-duoc-pham-module-es5.js.map
//# sourceMappingURL=danh-muc-nhom-he-thong-kho-kho-duoc-pham-kho-duoc-pham-module-es5.js.map