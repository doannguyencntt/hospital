(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-luu-tru-ho-so-benh-an-bao-cao-luu-tru-benh-an-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.html ***!
          \*************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\" typeSize=\"A4\" >\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'KHTH', Path:''},\n                {Title:'Lưu trữ hồ sơ bệnh án', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid\n                [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\"\n                [showStt]=\"true\">\n            </app-grid>\n\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <app-combobox id=\"Khoa\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\"  style=\"margin-left: 5px;\"  class=\"mt-1 on-header pb-0 mr-1\" label=\"Khoa\" bind=\"true\" \n                    url=\"BaoCao/GetKhoaKhamNoiTruCoTatCa\" [(model)]=\"baoCaoSearch.KhoaId\" [autoSelectFirstItem]=\"true\">\n                </app-combobox>\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <app-checkbox [(model)]=\"baoCaoSearch.BHYT\" id=\"bhyt\" label=\"BHYT\" class=\"mr-2\">\n                </app-checkbox>\n                <app-checkbox [(model)]=\"baoCaoSearch.VienPhi\" id=\"vienPhi\" label=\"Viện phí\" class=\"mr-1 mr-4\">\n                </app-checkbox>\n\n                <div fxFlex=\"30%\" fxFlex.sm=\"30%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.scss": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.scss ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1sdXUtdHJ1LWhvLXNvLWJlbmgtYW4vYmFvLWNhby1sdXUtdHJ1LWJlbmgtYW4tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWx1dS10cnUtaG8tc28tYmVuaC1hblxcYmFvLWNhby1sdXUtdHJ1LWJlbmgtYW4tcG9wdXBcXGJhby1jYW8tbHV1LXRydS1iZW5oLWFuLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWx1dS10cnUtaG8tc28tYmVuaC1hbi9iYW8tY2FvLWx1dS10cnUtYmVuaC1hbi1wb3B1cC9iYW8tY2FvLWx1dS10cnUtYmVuaC1hbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWx1dS10cnUtaG8tc28tYmVuaC1hbi9iYW8tY2FvLWx1dS10cnUtYmVuaC1hbi1wb3B1cC9iYW8tY2FvLWx1dS10cnUtYmVuaC1hbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: BaoCaoLuuTruBenhAnPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuTruBenhAnPopupComponent", function () { return BaoCaoLuuTruBenhAnPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var BaoCaoLuuTruBenhAnPopupComponent = /** @class */ (function () {
                function BaoCaoLuuTruBenhAnPopupComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                }
                BaoCaoLuuTruBenhAnPopupComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                };
                BaoCaoLuuTruBenhAnPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        resolve(_this.modelPrint);
                    });
                };
                BaoCaoLuuTruBenhAnPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return BaoCaoLuuTruBenhAnPopupComponent;
            }());
            BaoCaoLuuTruBenhAnPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            BaoCaoLuuTruBenhAnPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-luu-tru-benh-an-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-luu-tru-benh-an-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-luu-tru-benh-an-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], BaoCaoLuuTruBenhAnPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-routing.module.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-routing.module.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: BaoCaoLuuTruBenhAnRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuTruBenhAnRoutingModule", function () { return BaoCaoLuuTruBenhAnRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_luu_tru_benh_an_bao_cao_luu_tru_benh_an_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_luu_tru_benh_an_bao_cao_luu_tru_benh_an_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoLuuTruBenhAnComponent"],
                    data: {
                        title: 'Báo cáo lưu trữ hố sơ bệnh án',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoLuuTruHoSoBenhAn,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoLuuTruBenhAnRoutingModule = /** @class */ (function () {
                function BaoCaoLuuTruBenhAnRoutingModule() {
                }
                return BaoCaoLuuTruBenhAnRoutingModule;
            }());
            BaoCaoLuuTruBenhAnRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoLuuTruBenhAnRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an.module.ts": 
        /*!******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an.module.ts ***!
          \******************************************************************************************************/
        /*! exports provided: BaoCaoLuuTruBenhAnModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuTruBenhAnModule", function () { return BaoCaoLuuTruBenhAnModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_luu_tru_benh_an_bao_cao_luu_tru_benh_an_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _bao_cao_luu_tru_benh_an_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-luu-tru-benh-an.service */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an.service.ts");
            /* harmony import */ var _bao_cao_luu_tru_benh_an_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-luu-tru-benh-an-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-routing.module.ts");
            /* harmony import */ var _bao_cao_luu_tru_benh_an_popup_bao_cao_luu_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var BaoCaoLuuTruBenhAnModule = /** @class */ (function () {
                function BaoCaoLuuTruBenhAnModule() {
                }
                return BaoCaoLuuTruBenhAnModule;
            }());
            BaoCaoLuuTruBenhAnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_luu_tru_benh_an_bao_cao_luu_tru_benh_an_component__WEBPACK_IMPORTED_MODULE_16__["BaoCaoLuuTruBenhAnComponent"], _bao_cao_luu_tru_benh_an_popup_bao_cao_luu_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_20__["BaoCaoLuuTruBenhAnPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                        _bao_cao_luu_tru_benh_an_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoLuuTruBenhAnRoutingModule"]
                    ],
                    providers: [
                        _bao_cao_luu_tru_benh_an_service__WEBPACK_IMPORTED_MODULE_18__["BaoCaoLuuTruBenhAnService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _bao_cao_luu_tru_benh_an_service__WEBPACK_IMPORTED_MODULE_18__["BaoCaoLuuTruBenhAnService"] },
                    ],
                    entryComponents: [
                        _bao_cao_luu_tru_benh_an_popup_bao_cao_luu_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_20__["BaoCaoLuuTruBenhAnPopupComponent"]
                    ]
                })
            ], BaoCaoLuuTruBenhAnModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an.service.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an.service.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: BaoCaoLuuTruBenhAnService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuTruBenhAnService", function () { return BaoCaoLuuTruBenhAnService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BaoCaoLuuTruBenhAnService = /** @class */ (function () {
                function BaoCaoLuuTruBenhAnService() {
                }
                return BaoCaoLuuTruBenhAnService;
            }());
            BaoCaoLuuTruBenhAnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoLuuTruBenhAnService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tbHV1LXRydS1oby1zby1iZW5oLWFuL2Jhby1jYW8tbHV1LXRydS1iZW5oLWFuL2Jhby1jYW8tbHV1LXRydS1iZW5oLWFuLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: BaoCaoLuuTruBenhAnComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuTruBenhAnComponent", function () { return BaoCaoLuuTruBenhAnComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _bao_cao_luu_tru_benh_an_popup_bao_cao_luu_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an-popup/bao-cao-luu-tru-benh-an-popup.component.ts");
            /* harmony import */ var _bao_cao_luu_tru_ho_so_benh_an_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bao-cao-luu-tru-ho-so-benh-an.model */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-ho-so-benh-an.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_15__);
            var BaoCaoLuuTruBenhAnComponent = /** @class */ (function () {
                function BaoCaoLuuTruBenhAnComponent(route, router, apiService, dialog, notificationService, authService, ref) {
                    this.route = route;
                    this.router = router;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.search = {};
                    this.showGrid = false;
                    this.showPrintExport = false;
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.baoCaoSearch = new _bao_cao_luu_tru_ho_so_benh_an_model__WEBPACK_IMPORTED_MODULE_8__["BaoCaoLuuTruHoSoBenhAnSearch"]();
                    this.inBaoCaoLuuTruHoSoBenhAn = new _bao_cao_luu_tru_ho_so_benh_an_model__WEBPACK_IMPORTED_MODULE_8__["InBaoCaoLuuTruHoSoBenhAn"]();
                }
                BaoCaoLuuTruBenhAnComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].BaoCaoLuuTruHoSoBenhAn;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoLuuTruHoSoBenhAn.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoLuuTruHoSoBenhAn.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        // { Field: "STT", Title: "STT", Width: 60 , Template: this.sttTemplate },
                        { Field: "ThuTuSapXep", Title: "Thứ tự sắp sếp", Width: 80 },
                        { Field: "SoLuuTru", Title: "Số lưu trữ", Width: 80 },
                        { Field: "HoTen", Title: "Họ tên", Width: 120 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 80, },
                        // { Field: "Tuoi", Title: "Tuổi", Width: 100 },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 80 },
                        { Field: "ThoiGianVaoVienString", Title: "Thời gian vào viện", Width: 80 },
                        { Field: "ThoiGianRaVienString", Title: "Thời gian ra viện", Width: 80 },
                        { Field: "ChanDoan", Title: "Chẩn đoán điều trị", Width: 140 },
                        { Field: "ICD", Title: "ICD", Width: 80 }
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                        this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
                    }
                };
                BaoCaoLuuTruBenhAnComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this.gridChild._isLoadingTotalPage = true;
                    this.gridChild._isLoading = true;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this.gridChild._isLoadingTotalPage = false;
                        this.gridChild._isLoading = false;
                        return;
                    }
                    // if(!this.baoCaoSearch.KhoaId)
                    // {
                    //     this.notificationService.showError("Khoa yêu cầu nhập");
                    //     this.gridChild._isLoadingTotalPage = false;
                    //     this.gridChild._isLoading = false;
                    //     return;
                    // }
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.showPopupLoadingData();
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridChild.ngOnInit();
                    this.apiService.post("BaoCao/GetDataLuuTruHoSoBenhAnForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.showPrintExport = true;
                            }
                            else {
                                _this.showPrintExport = false;
                            }
                            // this.gridDataSource.data = [...resultData.Data];
                            // this.gridDataSource.total = this.gridDataSource.data.length;
                            _this.gridDataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            _this.gridChild._isLoadingTotalPage = false;
                            _this.gridChild._isLoading = false;
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                BaoCaoLuuTruBenhAnComponent.prototype.InbaoCao = function () {
                    var _this = this;
                    if (this.showPrintExport == true) {
                        var baoCaoLuuHoSoBenhAnVo = new _bao_cao_luu_tru_ho_so_benh_an_model__WEBPACK_IMPORTED_MODULE_8__["BaoCaoLuuHoSoBenhAnVo"]();
                        baoCaoLuuHoSoBenhAnVo.KhoaId = this.search.KhoaId;
                        baoCaoLuuHoSoBenhAnVo.NgayRaVien = this.search.DateEnd;
                        baoCaoLuuHoSoBenhAnVo.NgayVaoVien = this.search.DateStart;
                        baoCaoLuuHoSoBenhAnVo.hosting = window.location.protocol + "//" + window.location.host;
                        this.apiService.post("BaoCao/InBaoCaoLuuTruHoSoBenhAn", baoCaoLuuHoSoBenhAnVo).subscribe(function (result) {
                            _this.dialog.open(_bao_cao_luu_tru_benh_an_popup_bao_cao_luu_tru_benh_an_popup_component__WEBPACK_IMPORTED_MODULE_7__["BaoCaoLuuTruBenhAnPopupComponent"], {
                                disableClose: true,
                                width: '1000px',
                                data: { Model: result }
                            }).afterClosed().subscribe(function () {
                            });
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                        });
                    }
                };
                BaoCaoLuuTruBenhAnComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    // if(!this.baoCaoSearch.KhoaId)
                    // {
                    //     this.notificationService.showError("Khoa yêu cầu nhập");
                    //     return;
                    // }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoLuuTruHoSoBenhAn", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoLuuTruHoSoBenhAn" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoLuuTruBenhAnComponent.prototype.showPopupLoadingData = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                };
                BaoCaoLuuTruBenhAnComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return BaoCaoLuuTruBenhAnComponent;
            }());
            BaoCaoLuuTruBenhAnComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: true })
            ], BaoCaoLuuTruBenhAnComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoLuuTruBenhAnComponent.prototype, "sttTemplate", void 0);
            BaoCaoLuuTruBenhAnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-luu-tru-benh-an',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-luu-tru-benh-an.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-luu-tru-benh-an.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-benh-an/bao-cao-luu-tru-benh-an.component.scss")).default]
                })
            ], BaoCaoLuuTruBenhAnComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-ho-so-benh-an.model.ts": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-luu-tru-ho-so-benh-an/bao-cao-luu-tru-ho-so-benh-an.model.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: SearchBaoCao, DateTimeFilter, BaoCaoLuuHoSoBenhAnVo, BaoCaoLuuTruHoSoBenhAnSearch, InBaoCaoLuuTruHoSoBenhAn */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBaoCao", function () { return SearchBaoCao; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function () { return DateTimeFilter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuHoSoBenhAnVo", function () { return BaoCaoLuuHoSoBenhAnVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoLuuTruHoSoBenhAnSearch", function () { return BaoCaoLuuTruHoSoBenhAnSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoLuuTruHoSoBenhAn", function () { return InBaoCaoLuuTruHoSoBenhAn; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchBaoCao = /** @class */ (function () {
                function SearchBaoCao(KhoaId, DateStart, DateEnd, TenKhoa) {
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (DateStart === void 0) { DateStart = null; }
                    if (DateEnd === void 0) { DateEnd = null; }
                    if (TenKhoa === void 0) { TenKhoa = null; }
                    this.KhoaId = KhoaId;
                    this.DateStart = DateStart;
                    this.DateEnd = DateEnd;
                    this.TenKhoa = TenKhoa;
                }
                return SearchBaoCao;
            }());
            var DateTimeFilter = /** @class */ (function () {
                function DateTimeFilter(DateStart, DateEnd) {
                    if (DateStart === void 0) { DateStart = null; }
                    if (DateEnd === void 0) { DateEnd = new Date; }
                    this.DateStart = DateStart;
                    this.DateEnd = DateEnd;
                }
                return DateTimeFilter;
            }());
            var BaoCaoLuuHoSoBenhAnVo = /** @class */ (function () {
                function BaoCaoLuuHoSoBenhAnVo(KhoaId, NgayVaoVien, NgayRaVien, hosting) {
                    if (KhoaId === void 0) { KhoaId = 0; }
                    if (NgayVaoVien === void 0) { NgayVaoVien = null; }
                    if (NgayRaVien === void 0) { NgayRaVien = null; }
                    if (hosting === void 0) { hosting = null; }
                    this.KhoaId = KhoaId;
                    this.NgayVaoVien = NgayVaoVien;
                    this.NgayRaVien = NgayRaVien;
                    this.hosting = hosting;
                }
                return BaoCaoLuuHoSoBenhAnVo;
            }());
            var BaoCaoLuuTruHoSoBenhAnSearch = /** @class */ (function () {
                function BaoCaoLuuTruHoSoBenhAnSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoaId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort, BHYT, VienPhi) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    if (BHYT === void 0) { BHYT = false; }
                    if (VienPhi === void 0) { VienPhi = true; }
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.KhoaId = KhoaId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                    this.BHYT = BHYT;
                    this.VienPhi = VienPhi;
                }
                return BaoCaoLuuTruHoSoBenhAnSearch;
            }());
            var InBaoCaoLuuTruHoSoBenhAn = /** @class */ (function () {
                function InBaoCaoLuuTruHoSoBenhAn(KhoaId, HostingName, FromDate, ToDate) {
                    if (KhoaId === void 0) { KhoaId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoaId = KhoaId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoLuuTruHoSoBenhAn;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-luu-tru-ho-so-benh-an-bao-cao-luu-tru-benh-an-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-luu-tru-ho-so-benh-an-bao-cao-luu-tru-benh-an-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-luu-tru-ho-so-benh-an-bao-cao-luu-tru-benh-an-module-es5.js.map