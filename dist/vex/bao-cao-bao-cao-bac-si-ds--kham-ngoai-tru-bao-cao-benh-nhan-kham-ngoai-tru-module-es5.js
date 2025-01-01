(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-bac-si-ds--kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.html": 
        /*!***************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.html ***!
          \***************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\" typeSize=\"A4\" >\n    </app-print-form>\n</mat-dialog-actions>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''}\n                    ,{Title:'Báo Cáo Người Bệnh Khám Ngoại Trú', Path:''}\n                    ,{Title:'Bác Sĩ Khám DS Khám Ngoại Trú', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToSend=\"khoa\"\n                class=\"mt-1 on-header\" popupSettings=\"null\" [templateHeader]=\"khoaTemplateHeader\"\n                    [template]=\"khoaTemplate\" label=\"Khoa\" url=\"GiuongBenh/GetListKhoaPhong\" bind=\"true\"\n                    [(model)]=\"search.KhoaId\" >\n                </app-combobox>\n                <ng-template #khoaTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"30%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #khoaTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n                <app-combobox id=\"PhongId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToListen=\"khoa\"  [disabled]=\"search.KhoaId == 0 || search.KhoaId == null\"\n                class=\"mt-1 on-header\" label=\"Phòng\" [templateHeader]=\"phongTemplateHeader\"\n                    [template]=\"phongTemplate\" url=\"BaoCao/GetTaCaPhongTheoKhoa\" bind=\"true\" [(model)]=\"search.PhongId\"\n                    popupSettings=\"null\" >\n                </app-combobox>\n                <ng-template #phongTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #phongTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n                <app-datetimepicker id=\"NgayVaoVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"search.DateStart\"\n                    label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"NgayRaVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Đến ngày\" class=\"mt-1 on-header\"\n                    [(model)]=\"search.DateEnd\">\n                </app-datetimepicker>\n                <div fxFlex=\"40%\" fxFlex.sm=\"40%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"InbaoCao()\" style=\"float: right;\" *ngIf=\"showPrintExport\">In Báo cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" *ngIf=\"showPrintExport\">Xuất Excel</button>\n                </div>\n                <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" *ngIf=\"showGrid\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                    [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                     [checkboxAble]=\"false\" pageSize=\"50\"  [autoHeight]=\"true\"\n                    [gridDataSource]=\"gridDataSource\">\n                </app-grid>\n               \n                <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                    {{rowIndex + 1}}\n                </ng-template>\n                <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem let-aggregates=\"aggregates\">\n                    <p fxFlex=\"100%\" kendoTooltip>\n                        <strong fxFlex=\"100%\">\n                            <span fxFlex=\"45%\">{{theFirstValueFormat(value)}}</span>\n                            <ul class='inline small ml-20' fxFlex=\"55%\">\n                                <li>\n                                    <span>\n                                        {{theFirstValueFormatTotalGroup(value)}}\n                                    </span>\n                                </li>\n                            </ul>\n                        </strong>\n                    </p>\n                </ng-template>\n                <!-- <ng-template #phongKhamGroupFooterTemplate let-aggregates >\n                    {{aggregates.PhongKham.count}} \n                </ng-template> -->\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-routing.module.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-routing.module.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruRoutingModule", function () { return BaoCaoBenhNhanKhamNgoaiTruRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_bs_ds_kham_ngoai_tru_bao_cao_bs_ds_kham_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_bs_ds_kham_ngoai_tru_bao_cao_bs_ds_kham_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoBsDsKhamNgoaiTruComponent"],
                    data: {
                        title: 'Báo cáo người bệnh khám ngoại trú',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBSDanhSachKhamNgoaiTru,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoBenhNhanKhamNgoaiTruRoutingModule = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruRoutingModule() {
                }
                return BaoCaoBenhNhanKhamNgoaiTruRoutingModule;
            }());
            BaoCaoBenhNhanKhamNgoaiTruRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoBenhNhanKhamNgoaiTruRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.module.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.module.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruModule", function () { return BaoCaoBenhNhanKhamNgoaiTruModule; });
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
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _bao_cao_bs_ds_kham_ngoai_tru_bao_cao_bs_ds_kham_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.ts");
            /* harmony import */ var _bao_cao_bs_ds_kham_ngoai_tru_popup_bao_cao_bs_ds_kham_ngoai_tru_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.ts");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru-routing.module.ts");
            /* harmony import */ var _bao_cao_benh_nhan_kham_ngoai_tru_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-benh-nhan-kham-ngoai-tru.service */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.service.ts");
            var BaoCaoBenhNhanKhamNgoaiTruModule = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruModule() {
                }
                return BaoCaoBenhNhanKhamNgoaiTruModule;
            }());
            BaoCaoBenhNhanKhamNgoaiTruModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_bs_ds_kham_ngoai_tru_bao_cao_bs_ds_kham_ngoai_tru_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoBsDsKhamNgoaiTruComponent"], _bao_cao_bs_ds_kham_ngoai_tru_popup_bao_cao_bs_ds_kham_ngoai_tru_popup_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoBsDsKhamNgoaiTruPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                        _bao_cao_benh_nhan_kham_ngoai_tru_routing_module__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBenhNhanKhamNgoaiTruRoutingModule"]
                    ],
                    providers: [
                        _bao_cao_benh_nhan_kham_ngoai_tru_service__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBenhNhanKhamNgoaiTruService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_benh_nhan_kham_ngoai_tru_service__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBenhNhanKhamNgoaiTruService"] },
                    ],
                    entryComponents: [
                        _bao_cao_bs_ds_kham_ngoai_tru_popup_bao_cao_bs_ds_kham_ngoai_tru_popup_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoBsDsKhamNgoaiTruPopupComponent"]
                    ]
                })
            ], BaoCaoBenhNhanKhamNgoaiTruModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.service.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-benh-nhan-kham-ngoai-tru.service.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: BaoCaoBenhNhanKhamNgoaiTruService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruService", function () { return BaoCaoBenhNhanKhamNgoaiTruService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BaoCaoBenhNhanKhamNgoaiTruService = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruService() {
                }
                return BaoCaoBenhNhanKhamNgoaiTruService;
            }());
            BaoCaoBenhNhanKhamNgoaiTruService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoBenhNhanKhamNgoaiTruService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.scss": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.scss ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iYWMtc2ktZHMtLWtoYW0tbmdvYWktdHJ1L2Jhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWJhYy1zaS1kcy0ta2hhbS1uZ29haS10cnVcXGJhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUtcG9wdXBcXGJhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmFjLXNpLWRzLS1raGFtLW5nb2FpLXRydS9iYW8tY2FvLWJzLWRzLWtoYW0tbmdvYWktdHJ1LXBvcHVwL2Jhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iYWMtc2ktZHMtLWtoYW0tbmdvYWktdHJ1L2Jhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUtcG9wdXAvYmFvLWNhby1icy1kcy1raGFtLW5nb2FpLXRydS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.ts": 
        /*!***********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.ts ***!
          \***********************************************************************************************************************************************************/
        /*! exports provided: BaoCaoBsDsKhamNgoaiTruPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBsDsKhamNgoaiTruPopupComponent", function () { return BaoCaoBsDsKhamNgoaiTruPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var BaoCaoBsDsKhamNgoaiTruPopupComponent = /** @class */ (function () {
                function BaoCaoBsDsKhamNgoaiTruPopupComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                }
                BaoCaoBsDsKhamNgoaiTruPopupComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                };
                BaoCaoBsDsKhamNgoaiTruPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        resolve(_this.modelPrint);
                    });
                };
                BaoCaoBsDsKhamNgoaiTruPopupComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return BaoCaoBsDsKhamNgoaiTruPopupComponent;
            }());
            BaoCaoBsDsKhamNgoaiTruPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            BaoCaoBsDsKhamNgoaiTruPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-bs-ds-kham-ngoai-tru-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-bs-ds-kham-ngoai-tru-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-bs-ds-kham-ngoai-tru-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], BaoCaoBsDsKhamNgoaiTruPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.model.ts": 
        /*!**************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.model.ts ***!
          \**************************************************************************************************************/
        /*! exports provided: SearchBaoCao, DateTimeFilter, BaoCaoBenhNhanKhamNgoaiTruAnVo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBaoCao", function () { return SearchBaoCao; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function () { return DateTimeFilter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanKhamNgoaiTruAnVo", function () { return BaoCaoBenhNhanKhamNgoaiTruAnVo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchBaoCao = /** @class */ (function () {
                function SearchBaoCao(PhongId, KhoaId, DateStart, DateEnd, TenKhoa, TenPhong) {
                    if (PhongId === void 0) { PhongId = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (DateStart === void 0) { DateStart = null; }
                    if (DateEnd === void 0) { DateEnd = null; }
                    if (TenKhoa === void 0) { TenKhoa = null; }
                    if (TenPhong === void 0) { TenPhong = null; }
                    this.PhongId = PhongId;
                    this.KhoaId = KhoaId;
                    this.DateStart = DateStart;
                    this.DateEnd = DateEnd;
                    this.TenKhoa = TenKhoa;
                    this.TenPhong = TenPhong;
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
            var BaoCaoBenhNhanKhamNgoaiTruAnVo = /** @class */ (function () {
                function BaoCaoBenhNhanKhamNgoaiTruAnVo(PhongId, KhoaId, TuNgay, DenNgay, hosting) {
                    if (PhongId === void 0) { PhongId = 0; }
                    if (KhoaId === void 0) { KhoaId = 0; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (hosting === void 0) { hosting = null; }
                    this.PhongId = PhongId;
                    this.KhoaId = KhoaId;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.hosting = hosting;
                }
                return BaoCaoBenhNhanKhamNgoaiTruAnVo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".span-result-information {\n  font-weight: bold;\n}\n\n.content-2 {\n  margin-top: 30px !important;\n}\n\n.content-1 {\n  border-bottom: 1px solid var(--foreground-divider);\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\ntable {\n  width: 100%;\n  background-color: white;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\ntable th {\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\ntable th.w-250 {\n  width: 250px;\n}\n\ntable tr.bg-light-red {\n  background-color: #eaa3a3;\n}\n\n.order-color {\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.order-color .set-color {\n  padding: 10px 40px;\n}\n\n.order-color .set-color.black {\n  background-color: black;\n}\n\n.order-color .set-color.red {\n  background-color: red;\n}\n\n.order-color .set-color.blue {\n  background-color: blue;\n}\n\n.div-header {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1iYWMtc2ktZHMtLWtoYW0tbmdvYWktdHJ1L2Jhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWJhYy1zaS1kcy0ta2hhbS1uZ29haS10cnVcXGJhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnVcXGJhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmFjLXNpLWRzLS1raGFtLW5nb2FpLXRydS9iYW8tY2FvLWJzLWRzLWtoYW0tbmdvYWktdHJ1L2Jhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGtEQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmFjLXNpLWRzLS1raGFtLW5nb2FpLXRydS9iYW8tY2FvLWJzLWRzLWtoYW0tbmdvYWktdHJ1L2Jhby1jYW8tYnMtZHMta2hhbS1uZ29haS10cnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bhbi1yZXN1bHQtaW5mb3JtYXRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQtMiB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0aC53LTI1MCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUgdHIuYmctbGlnaHQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTNhMztcbn1cblxuLm9yZGVyLWNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvciB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iLCIuc3Bhbi1yZXN1bHQtaW5mb3JtYXRpb24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbnQtMiB7XG4gIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtMSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb3JlZ3JvdW5kLWRpdmlkZXIpO1xufVxuXG5maWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0aC53LTI1MCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUgdHIuYmctbGlnaHQtcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYTNhMztcbn1cblxuLm9yZGVyLWNvbG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvciB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IuYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm9yZGVyLWNvbG9yIC5zZXQtY29sb3IucmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ub3JkZXItY29sb3IgLnNldC1jb2xvci5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmRpdi1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: BaoCaoBsDsKhamNgoaiTruComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBsDsKhamNgoaiTruComponent", function () { return BaoCaoBsDsKhamNgoaiTruComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _bao_cao_bs_ds_kham_ngoai_tru_popup_bao_cao_bs_ds_kham_ngoai_tru_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru-popup/bao-cao-bs-ds-kham-ngoai-tru-popup.component.ts");
            /* harmony import */ var _bao_cao_bs_ds_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-bs-ds-kham-ngoai-tru.model */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.model.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            var BaoCaoBsDsKhamNgoaiTruComponent = /** @class */ (function () {
                function BaoCaoBsDsKhamNgoaiTruComponent(route, router, apiService, dialog, notificationService, authService, ref) {
                    this.route = route;
                    this.router = router;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.ref = ref;
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
                    this.state = {
                        skip: 0, take: 15,
                        group: [{
                                field: 'PhongKham', aggregates: [{ field: 'PhongKham', aggregate: 'count' }]
                            }]
                    };
                }
                //group: GroupDescriptor[] = [{ field: 'PhongKham', dir: null, aggregates: [{ field: 'PhongKham', aggregate: 'count' }] }];
                BaoCaoBsDsKhamNgoaiTruComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].BaoCaoBSDanhSachKhamNgoaiTru;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 40, Template: this.sttTemplate },
                        { Field: "ThoiGianTiepNhanString", Title: "Thời gian tiếp nhận", Width: 100 },
                        { Field: "MaTN", Title: "Mã TN", Width: 100 },
                        { Field: "HoTenBn", Title: "Họ tên NB", Width: 120 },
                        { Field: "NgaySinh", Title: "Ngày sinh", Width: 100, },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 60 },
                        { Field: "TheBHYT", Title: "Thẻ BHYT", Width: 100 },
                        { Field: "PhieuKham", Title: "Phiếu khám", Width: 100 },
                        { Field: "PhongKham", Title: "Phòng khám", Width: 100, TemplateGroupHeader: this.nhomGroupHeaderTemplate, TemplateGroupFooter: this.phongKhamGroupFooterTemplate },
                        { Field: "ICD", Title: "ICD", MinWidth: 100 },
                        { Field: "TrangThai", Title: "Trạng thái", Width: 100 },
                        { Field: "BsKham", Title: "BS Khám", Width: 100 },
                        { Field: "BsKetLuan", Title: "BS kết luận", Width: 100 },
                        { Field: "ThoiGianThanhToan", Title: "Thời gian thanh toán", Width: 100 },
                        { Field: "CachGiaiQuyet", Title: "Cách giải quyết", Width: 100 },
                        { Field: "NgoaiGioHanhChinh", Title: "Ngoài giờ hành chính", Width: 100 }
                    ];
                };
                BaoCaoBsDsKhamNgoaiTruComponent.prototype.theFirstValueFormat = function (str) {
                    var strGroup = str.split('/');
                    if (strGroup.length != 0) {
                        return strGroup[0];
                    }
                };
                BaoCaoBsDsKhamNgoaiTruComponent.prototype.theFirstValueFormatTotalGroup = function (str) {
                    var strGroup = str.split('/');
                    if (strGroup.length != 0) {
                        return strGroup[1];
                    }
                };
                BaoCaoBsDsKhamNgoaiTruComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.search.DateStart == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.DateEnd == null) {
                        this.minDateDenNgay = new Date();
                        this.search.DateEnd = this.minDateDenNgay;
                    }
                    var baoCaoBenhNhanKhamNgoaiTruAnVo = new _bao_cao_bs_ds_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoBenhNhanKhamNgoaiTruAnVo"]();
                    baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
                    this.apiService.post("BaoCao/GetBaoCaoBenhNhanKhamNgoaiTruForGridAsync", baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.showPrintExport = true;
                            }
                            _this.showGrid = true;
                            _this.gridDataSource = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(resultData.Data, _this.state);
                            // this.gridDataSource.data = [...resultData.Data];
                            // this.gridDataSource.total = this.gridDataSource.data.length;
                        }
                    });
                };
                BaoCaoBsDsKhamNgoaiTruComponent.prototype.InbaoCao = function () {
                    var _this = this;
                    if (this.showPrintExport == true) {
                        var baoCaoBenhNhanKhamNgoaiTruAnVo = new _bao_cao_bs_ds_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoBenhNhanKhamNgoaiTruAnVo"]();
                        baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
                        baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
                        baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
                        baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
                        baoCaoBenhNhanKhamNgoaiTruAnVo.hosting = window.location.protocol + "//" + window.location.host;
                        this.apiService.post("BaoCao/InBaoCaoBenhNhanKhamNgoaiTru", baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(function (result) {
                            _this.dialog.open(_bao_cao_bs_ds_kham_ngoai_tru_popup_bao_cao_bs_ds_kham_ngoai_tru_popup_component__WEBPACK_IMPORTED_MODULE_11__["BaoCaoBsDsKhamNgoaiTruPopupComponent"], {
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
                BaoCaoBsDsKhamNgoaiTruComponent.prototype.XuatBaoCao = function () {
                    var self = this;
                    var baoCaoBenhNhanKhamNgoaiTruAnVo = new _bao_cao_bs_ds_kham_ngoai_tru_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoBenhNhanKhamNgoaiTruAnVo"]();
                    baoCaoBenhNhanKhamNgoaiTruAnVo.PhongId = this.search.PhongId;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.KhoaId = this.search.KhoaId;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.DenNgay = this.search.DateEnd;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.TuNgay = this.search.DateStart;
                    baoCaoBenhNhanKhamNgoaiTruAnVo.hosting = window.location.protocol + "//" + window.location.host;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        self.apiService.postExportExcel('BaoCao/ExportBaoCaoBenhNhanKhamNgoaiTru', baoCaoBenhNhanKhamNgoaiTruAnVo).subscribe(function (resultData) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoBenhNhanKhamNgoaiTru' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return BaoCaoBsDsKhamNgoaiTruComponent;
            }());
            BaoCaoBsDsKhamNgoaiTruComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoBsDsKhamNgoaiTruComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianTiepNhanGroupFooterTemplate', { static: true })
            ], BaoCaoBsDsKhamNgoaiTruComponent.prototype, "thoiGianTiepNhanGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], BaoCaoBsDsKhamNgoaiTruComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phongKhamGroupFooterTemplate', { static: true })
            ], BaoCaoBsDsKhamNgoaiTruComponent.prototype, "phongKhamGroupFooterTemplate", void 0);
            BaoCaoBsDsKhamNgoaiTruComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-bs-ds-kham-ngoai-tru',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-bs-ds-kham-ngoai-tru.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-bs-ds-kham-ngoai-tru.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-bac-si-ds--kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru/bao-cao-bs-ds-kham-ngoai-tru.component.scss")).default]
                })
            ], BaoCaoBsDsKhamNgoaiTruComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-bac-si-ds--kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-bac-si-ds--kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-bac-si-ds--kham-ngoai-tru-bao-cao-benh-nhan-kham-ngoai-tru-module-es5.js.map