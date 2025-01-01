(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-module"],{

/***/ "./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-routing.module.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-routing.module.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: ThongKeCacDVChuaLayLenBienLaiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeCacDVChuaLayLenBienLaiRoutingModule", function() { return ThongKeCacDVChuaLayLenBienLaiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");






// import { ThongKeCacDichChuaLayLenBienLaiComponent } from './ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.component';
const routes = [
    {
        path: '',
        // component: ThongKeCacDichChuaLayLenBienLaiComponent,
        data: {
            title: 'Bảng thống kê các dịch vụ chưa lấy lên biên lai thu tiền',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].ThongKeCacDichVuChuaLayLenBienLaiThuTien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let ThongKeCacDVChuaLayLenBienLaiRoutingModule = class ThongKeCacDVChuaLayLenBienLaiRoutingModule {
};
ThongKeCacDVChuaLayLenBienLaiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ThongKeCacDVChuaLayLenBienLaiRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.module.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.module.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: ThongKeCacDichVuChuaLayLenBienLaiThuTienModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeCacDichVuChuaLayLenBienLaiThuTienModule", function() { return ThongKeCacDichVuChuaLayLenBienLaiThuTienModule; });
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
/* harmony import */ var _ds_thong_ke_cac_dich_vu_chua_lay_len_bien_lai_thu_tien_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-routing.module */ "./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-routing.module.ts");
/* harmony import */ var _ds_thong_ke_cac_dich_vu_chua_lay_len_bien_lai_thu_tien_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.service */ "./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.service.ts");


















// import { ThongKeCacDichChuaLayLenBienLaiComponent } from './ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.component';


let ThongKeCacDichVuChuaLayLenBienLaiThuTienModule = class ThongKeCacDichVuChuaLayLenBienLaiThuTienModule {
};
ThongKeCacDichVuChuaLayLenBienLaiThuTienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // declarations: [ThongKeCacDichChuaLayLenBienLaiComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ds_thong_ke_cac_dich_vu_chua_lay_len_bien_lai_thu_tien_routing_module__WEBPACK_IMPORTED_MODULE_18__["ThongKeCacDVChuaLayLenBienLaiRoutingModule"],
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
            _ds_thong_ke_cac_dich_vu_chua_lay_len_bien_lai_thu_tien_service__WEBPACK_IMPORTED_MODULE_19__["ThongKeCacDVChuaLayLenBienLaiThuTienService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _ds_thong_ke_cac_dich_vu_chua_lay_len_bien_lai_thu_tien_service__WEBPACK_IMPORTED_MODULE_19__["ThongKeCacDVChuaLayLenBienLaiThuTienService"] },
        ]
    })
], ThongKeCacDichVuChuaLayLenBienLaiThuTienModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.service.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien/ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien.service.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: ThongKeCacDVChuaLayLenBienLaiThuTienService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongKeCacDVChuaLayLenBienLaiThuTienService", function() { return ThongKeCacDVChuaLayLenBienLaiThuTienService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let ThongKeCacDVChuaLayLenBienLaiThuTienService = class ThongKeCacDVChuaLayLenBienLaiThuTienService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
    }
};
ThongKeCacDVChuaLayLenBienLaiThuTienService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
ThongKeCacDVChuaLayLenBienLaiThuTienService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ThongKeCacDVChuaLayLenBienLaiThuTienService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-ds-thong-ke-cac-dich-vu-chua-lay-len-bien-lai-thu-tien-module-es2015.js.map