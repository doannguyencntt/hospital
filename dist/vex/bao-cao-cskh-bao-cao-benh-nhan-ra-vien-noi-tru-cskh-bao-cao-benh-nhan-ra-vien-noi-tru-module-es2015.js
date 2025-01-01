(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-cskh-bao-cao-benh-nhan-ra-vien-noi-tru-cskh-bao-cao-benh-nhan-ra-vien-noi-tru-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.html":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.html ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống kê', Path:''},\n                    {Title:'Báo cáo', Path:''},\n                    {Title:'CSKH', Path:''},\n                    {Title:'Báo Cáo Bệnh Nhân Ra Viện Nội Trú', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/bao-cao/duoc-pham-sap-het-han\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useAddDeault]=\"true\" [headerTemplate]=\"headerTemplate\"\n                [gridDataSource]=\"gridDataSource\" [showStt]=\"true\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                [checkboxAble]=\"false\" [lazyLoadPage]=\"true\">\n            </app-grid>\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header pb-0 mr-1\" label=\"Khoa\" popupSettings=\"\" bind=\"true\"\n                    [autoSelectFirstItem]=\"true\" url=\"BaoCao/GetTatKhoaChoTiepNhanNoiTrus\"\n                    [(model)]=\"timKiemRaVienNoiTruSearch.KhoaId\">\n                </app-combobox>\n\n                <div class=\"h-15 mt-0\" fxFlex=\"40%\" style=\"padding: 3px;\">\n                    <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" style=\"margin-top: 0px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"SearchString\"\n                            placeholder=\"Tìm kiếm Mã tiếp nhận, Họ tên, Mã người bệnh\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                </div>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"timKiemRaVienNoiTruSearch.TuNgay\" #tiepnhantu id=\"TuNgay\"\n                    [maxDate]=\"timKiemRaVienNoiTruSearch.DenNgay\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"timKiemRaVienNoiTruSearch.DenNgay\" #tiepnhanden id=\"DenNgay\"\n                    [minDate]=\"timKiemRaVienNoiTruSearch.TuNgay\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"xemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"xuatBaoCao()\">Xuất Excel</button>\n                </div>\n\n            </div>\n        </ng-template>\n\n    </vex-page-layout-content>\n\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru-routing.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru-routing.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule", function() { return CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component */ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.ts");







const routes = [
    {
        path: '',
        component: _cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_component__WEBPACK_IMPORTED_MODULE_6__["CSKHBaoCaoBenhNhanRaVienNoiTruComponent"],
        data: {
            title: 'BÁO CÁO BỆNH NHÂN RA VIỆN NỘI TRÚ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBenhNhanRaVienNoiTru,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule = class CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule {
};
CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.model.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.model.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TimKiemRaVienNoiTruSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemRaVienNoiTruSearch", function() { return TimKiemRaVienNoiTruSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TimKiemRaVienNoiTruSearch {
    constructor(SearchString = "", TimKiem = null, TuNgay = null, DenNgay = null, KhoaId = null, Skip = 0, Take = 50, PageSize = 50) {
        this.SearchString = SearchString;
        this.TimKiem = TimKiem;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.KhoaId = KhoaId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BaoCaoBenhNhanRaVienNoiTruModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBenhNhanRaVienNoiTruModule", function() { return BaoCaoBenhNhanRaVienNoiTruModule; });
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
/* harmony import */ var _cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component */ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.ts");
/* harmony import */ var _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cskh-bao-cao-benh-nhan-ra-vien-noi-tru-routing.module */ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru-routing.module.ts");
/* harmony import */ var _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cskh-bao-cao-benh-nhan-ra-vien-noi-tru.service */ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.service.ts");





















let BaoCaoBenhNhanRaVienNoiTruModule = class BaoCaoBenhNhanRaVienNoiTruModule {
};
BaoCaoBenhNhanRaVienNoiTruModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_cskh_danh_sach_bao_cao_benh_nhan_ra_vien_noi_tru_component__WEBPACK_IMPORTED_MODULE_18__["CSKHBaoCaoBenhNhanRaVienNoiTruComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_routing_module__WEBPACK_IMPORTED_MODULE_19__["CSKHBaoCaoBenhNhanRaVienNoiTruRoutingModule"],
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
            _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_service__WEBPACK_IMPORTED_MODULE_20__["CSKHBaoCaoBenhNhanRaVienNoiTruService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_service__WEBPACK_IMPORTED_MODULE_20__["CSKHBaoCaoBenhNhanRaVienNoiTruService"] },
        ]
    })
], BaoCaoBenhNhanRaVienNoiTruModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.service.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.service.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: CSKHBaoCaoBenhNhanRaVienNoiTruService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSKHBaoCaoBenhNhanRaVienNoiTruService", function() { return CSKHBaoCaoBenhNhanRaVienNoiTruService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let CSKHBaoCaoBenhNhanRaVienNoiTruService = class CSKHBaoCaoBenhNhanRaVienNoiTruService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
    }
};
CSKHBaoCaoBenhNhanRaVienNoiTruService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CSKHBaoCaoBenhNhanRaVienNoiTruService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CSKHBaoCaoBenhNhanRaVienNoiTruService);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vY3NraC1iYW8tY2FvLWJlbmgtbmhhbi1yYS12aWVuLW5vaS10cnUvY3NraC1kYW5oLXNhY2gtYmFvLWNhby1iZW5oLW5oYW4tcmEtdmllbi1ub2ktdHJ1L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcY3NraC1iYW8tY2FvLWJlbmgtbmhhbi1yYS12aWVuLW5vaS10cnVcXGNza2gtZGFuaC1zYWNoLWJhby1jYW8tYmVuaC1uaGFuLXJhLXZpZW4tbm9pLXRydVxcY3NraC1kYW5oLXNhY2gtYmFvLWNhby1iZW5oLW5oYW4tcmEtdmllbi1ub2ktdHJ1LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9jc2toLWJhby1jYW8tYmVuaC1uaGFuLXJhLXZpZW4tbm9pLXRydS9jc2toLWRhbmgtc2FjaC1iYW8tY2FvLWJlbmgtbmhhbi1yYS12aWVuLW5vaS10cnUvY3NraC1kYW5oLXNhY2gtYmFvLWNhby1iZW5oLW5oYW4tcmEtdmllbi1ub2ktdHJ1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Nza2gtYmFvLWNhby1iZW5oLW5oYW4tcmEtdmllbi1ub2ktdHJ1L2Nza2gtZGFuaC1zYWNoLWJhby1jYW8tYmVuaC1uaGFuLXJhLXZpZW4tbm9pLXRydS9jc2toLWRhbmgtc2FjaC1iYW8tY2FvLWJlbmgtbmhhbi1yYS12aWVuLW5vaS10cnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.ts":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.ts ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: CSKHBaoCaoBenhNhanRaVienNoiTruComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSKHBaoCaoBenhNhanRaVienNoiTruComponent", function() { return CSKHBaoCaoBenhNhanRaVienNoiTruComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cskh-bao-cao-benh-nhan-ra-vien-noi-tru.model */ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-bao-cao-benh-nhan-ra-vien-noi-tru.model.ts");















let CSKHBaoCaoBenhNhanRaVienNoiTruComponent = class CSKHBaoCaoBenhNhanRaVienNoiTruComponent {
    constructor(apiService, dialog, notificationService, authService, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.timKiemRaVienNoiTruSearch = new _cskh_bao_cao_benh_nhan_ra_vien_noi_tru_model__WEBPACK_IMPORTED_MODULE_14__["TimKiemRaVienNoiTruSearch"]();
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        this.SearchString = "";
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
        this.aggregates = [
            { field: 'SoLan', aggregate: 'sum' },
        ];
        this.groups = [{
                field: 'Nhom',
                aggregates: this.aggregates
            }];
        this.heightToolbar = 140;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoBenhNhanRaVienNoiTru;
        this.gridColumns = [
            { Field: "MaNB", Title: "Mã BN", Width: 200 },
            { Field: "MaTN", Title: "Mã TN", Width: 150 },
            { Field: "SoBenhAn", Title: "Số BA", Width: 100 },
            { Field: "ThoiGianTiepNhanStr", Title: "Thời gian tiếp nhận", Width: 200 },
            { Field: "HoTen", Title: "Họ tên", Width: 150 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 150 },
            { Field: "GioiTinhStr", Title: "Giới tính", Width: 150 },
            { Field: "SoDienThoai", Title: "Số điện thoại", Width: 150 },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 150 },
            { Field: "KhoaDieuTri", Title: "Khoa điều trị", Width: 150 },
            { Field: "ThoiGianNhapVienStr", Title: "Thời gian nhập viện", Width: 200 },
            { Field: "ChanDoanVaoVien", Title: "Chẩn đoán vào viện", Width: 200 },
            { Field: "KhoaChuyenDen", Title: "Khoa chuyển đến", Width: 150 },
            { Field: "ThoiGianChuyenKhoaStr", Title: "Thời gian chuyển khoa", Width: 200 },
            { Field: "ChanDoanRaVien", Title: "Chẩn đoán ra viện", Width: 200 },
            { Field: "ThoiGianRaVienStr", Title: "Thời gian ra viện", Width: 200 },
            { Field: "KetQuaDieuTri", Title: "Kết quả điều trị", Width: 200 },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 150 },
            { Field: "SoTheBHYT", Title: "Số BHYT", Width: 150 },
            { Field: "LoaiYeuCauTiepNhan", Title: "Loại", Width: 150 },
            { Field: "TrangThaiDieuTri", Title: "Trạng thái", Width: 150 },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.timKiemRaVienNoiTruSearch.TuNgay == null) {
            this.timKiemRaVienNoiTruSearch.TuNgay = firstDay;
        }
        if (this.timKiemRaVienNoiTruSearch.DenNgay == null) {
            this.timKiemRaVienNoiTruSearch.DenNgay = new Date();
            this.timKiemRaVienNoiTruSearch.DenNgay.setHours(23, 59, 59);
        }
    }
    xemBaoCao() {
        const self = this;
        if (self.timKiemRaVienNoiTruSearch.TuNgay == null || self.timKiemRaVienNoiTruSearch.DenNgay == null) {
            self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.timKiemRaVienNoiTruSearch.KhoaId === undefined
            || self.timKiemRaVienNoiTruSearch.KhoaId === null) {
            self.notificationService.showError("Khoa yêu cầu chọn");
            return;
        }
        let searchText = self.SearchString != undefined ? self.SearchString : '';
        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
        self.timKiemRaVienNoiTruSearch.SearchString = searchText;
        self.timKiemRaVienNoiTruSearch.TimKiem = self.SearchString;
        self.showLoadingPopup();
        self.apiService.post("BaoCao/GetDataBaoCaoBenhNhanRaVienNoiTruForGrid", self.timKiemRaVienNoiTruSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                self.gridDataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                self.closeAllDialogs();
            }
        });
    }
    xuatBaoCao() {
        const self = this;
        if (self.timKiemRaVienNoiTruSearch.TuNgay == null || self.timKiemRaVienNoiTruSearch.DenNgay == null) {
            self.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.timKiemRaVienNoiTruSearch.KhoaId === undefined
            || self.timKiemRaVienNoiTruSearch.KhoaId === null) {
            self.notificationService.showError("Khoa yêu cầu chọn");
            return;
        }
        let searchText = self.SearchString != undefined ? self.SearchString : '';
        searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].convertSpecialXML(searchText);
        searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
        searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            self.apiService.postExportExcel('BaoCao/ExportBaoCaoBenhNhanRaVienNoiTru', self.timKiemRaVienNoiTruSearch)
                .subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoBenhNhanRaVienNoiTru' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }
    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
};
CSKHBaoCaoBenhNhanRaVienNoiTruComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoThongHoatDongCLSKhoaGrid', { static: true })
], CSKHBaoCaoBenhNhanRaVienNoiTruComponent.prototype, "baoCaoThongHoatDongCLSKhoaGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soLanGroupHeaderColumnTemplate", { static: true })
], CSKHBaoCaoBenhNhanRaVienNoiTruComponent.prototype, "soLanGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
], CSKHBaoCaoBenhNhanRaVienNoiTruComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CSKHBaoCaoBenhNhanRaVienNoiTruComponent.prototype, "heightToolbar", void 0);
CSKHBaoCaoBenhNhanRaVienNoiTruComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.scss */ "./src/app/modules/main/bao-cao/cskh-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru/cskh-danh-sach-bao-cao-benh-nhan-ra-vien-noi-tru.component.scss")).default]
    })
], CSKHBaoCaoBenhNhanRaVienNoiTruComponent);



/***/ })

}]);
//# sourceMappingURL=bao-cao-cskh-bao-cao-benh-nhan-ra-vien-noi-tru-cskh-bao-cao-benh-nhan-ra-vien-noi-tru-module-es2015.js.map