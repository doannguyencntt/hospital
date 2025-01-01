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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-module"], {
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.module.ts": 
        /*!************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.module.ts ***!
          \************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule", function () { return BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_dich_vu_tia_plasma_ho_tro_dieu_tri_vet_thuong_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.service */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.service.ts");
            // import { BaoCaoDichVuPLASMAHoTroDieuTruVetThuongComponent } from './bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.component';
            // import { BaoCaoDichVuPLASMAHoTroDieuTruVetThuongRoutingModule } from './bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-routing.module';
            var BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule = /** @class */ (function () {
                function BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule() {
                }
                return BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule;
            }());
            BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    // declarations: [BaoCaoDichVuPLASMAHoTroDieuTruVetThuongComponent],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        // BaoCaoDichVuPLASMAHoTroDieuTruVetThuongRoutingModule,
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"]
                    ],
                    providers: [
                        _bao_cao_dich_vu_tia_plasma_ho_tro_dieu_tri_vet_thuong_service__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _bao_cao_dich_vu_tia_plasma_ho_tro_dieu_tri_vet_thuong_service__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService"] },
                    ]
                })
            ], BaoCaoDichVuPLASMAHoTroDieuTruVetThuongModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.service.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong/bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong.service.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService", function () { return BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService = /** @class */ (function (_super) {
                __extends(BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService, _super);
                function BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService(apiService) {
                    return _super.call(this, apiService) || this;
                }
                return BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoDichVuPLASMAHoTroDieuTruVetThuongService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-bao-cao-dich-vu-tia-plasma-ho-tro-dieu-tri-vet-thuong-module-es5.js.map