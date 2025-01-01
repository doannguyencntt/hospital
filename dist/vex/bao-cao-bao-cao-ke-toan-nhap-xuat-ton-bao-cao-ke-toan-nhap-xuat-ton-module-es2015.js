(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-ke-toan-nhap-xuat-ton-bao-cao-ke-toan-nhap-xuat-ton-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Nhập Xuất Tồn', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header\" label=\"Khoa\" bind=\"true\" url=\"BaoCao/GetTatCakhoaNhapXuatTonLookupAsync\"\n                    [(model)]=\"baoCaoSearch.KhoaPhongId\" [autoSelectFirstItem]=\"true\"\n                    (modelChange)=\"changeKhoa($event)\">\n                </app-combobox>\n\n                <!-- <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\" url=\"BaoCao/GetTatCakhoTheoKhoaLookupAsync\"\n                    [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\" (modelChange)=\"changeKho($event)\"\n                    [queryInfo]=\"{ParameterDependencies:'{KhoaId:' + baoCaoSearch.KhoaPhongId + '}', Take: 50}\">\n                </app-combobox> -->\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <app-checkbox fxFlex=\"5%\" fxFlex.sm=\"5%\" [disabled]=\"disableCoVAT\" id=\"coVat\" class=\"mt-4 on-header\"\n                    [(model)]=\"baoCaoSearch.CoVAT\" label=\"Có VAT\">\n                </app-checkbox>\n\n                <app-checkbox fxFlex=\"5%\" fxFlex.sm=\"5%\" id=\"coThuoc\" class=\"mt-4 on-header\"\n                    [(model)]=\"baoCaoSearch.CoThuoc\" label=\"Thuốc\">\n                </app-checkbox>\n\n                <app-checkbox fxFlex=\"5%\" fxFlex.sm=\"5%\" id=\"coVTYT\" class=\"mt-4 on-header\"\n                    [(model)]=\"baoCaoSearch.CoVTYT\" label=\"VTYT\">\n                </app-checkbox>\n\n                <div fxFlex=\"25%\" fxFlex.sm=\"25%\" class=\"pb-4\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BaoCaoKeToanNhapXuatTonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonRoutingModule", function() { return BaoCaoKeToanNhapXuatTonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_bao_cao_ke_toan_nhap_xuat_ton_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_ke_toan_nhap_xuat_ton_bao_cao_ke_toan_nhap_xuat_ton_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoKeToanNhapXuatTonListComponent"],
        data: {
            title: 'Báo cáo nhập xuất tồn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoNhapXuatTon,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoKeToanNhapXuatTonRoutingModule = class BaoCaoKeToanNhapXuatTonRoutingModule {
};
BaoCaoKeToanNhapXuatTonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoKeToanNhapXuatTonRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton.model.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton.model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: BaoCaoKeToanNhapXuatTonChiTietSearch, InBaoCaoKeToanNhapXuatTonChiTiet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonChiTietSearch", function() { return BaoCaoKeToanNhapXuatTonChiTietSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoKeToanNhapXuatTonChiTiet", function() { return InBaoCaoKeToanNhapXuatTonChiTiet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoKeToanNhapXuatTonChiTietSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, KhoaPhongId = null, 
    // public KhoId: number = null,
    CoVAT = true, CoThuoc = true, CoVTYT = true, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
        this.KhoaPhongId = KhoaPhongId;
        this.CoVAT = CoVAT;
        this.CoThuoc = CoThuoc;
        this.CoVTYT = CoVTYT;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class InBaoCaoKeToanNhapXuatTonChiTiet {
    constructor(KhoaPhongId = null, KhoId = 0, HostingName = null, FromDate = null, ToDate = null) {
        this.KhoaPhongId = KhoaPhongId;
        this.KhoId = KhoId;
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: BaoCaoKeToanNhapXuatTonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonModule", function() { return BaoCaoKeToanNhapXuatTonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_bao_cao_ke_toan_nhap_xuat_ton_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.ts");
/* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-routing.module.ts");














let BaoCaoKeToanNhapXuatTonModule = class BaoCaoKeToanNhapXuatTonModule {
};
BaoCaoKeToanNhapXuatTonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_ke_toan_nhap_xuat_ton_bao_cao_ke_toan_nhap_xuat_ton_list_component__WEBPACK_IMPORTED_MODULE_12__["BaoCaoKeToanNhapXuatTonListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _bao_cao_ke_toan_nhap_xuat_ton_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoKeToanNhapXuatTonRoutingModule"]
        ]
    })
], BaoCaoKeToanNhapXuatTonModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWtlLXRvYW4tbmhhcC14dWF0LXRvblxcYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b25cXGJhby1jYW8ta2UtdG9hbi1uaGFwLXh1YXQtdG9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8ta2UtdG9hbi1uaGFwLXh1YXQtdG9uL2Jhby1jYW8ta2UtdG9hbi1uaGFwLXh1YXQtdG9uL2Jhby1jYW8ta2UtdG9hbi1uaGFwLXh1YXQtdG9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: BaoCaoKeToanNhapXuatTonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonListComponent", function() { return BaoCaoKeToanNhapXuatTonListComponent; });
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
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../bao-cao-ke-toan-nhap-xuat-ton.model */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton.model.ts");














let BaoCaoKeToanNhapXuatTonListComponent = class BaoCaoKeToanNhapXuatTonListComponent {
    constructor(apiService, dialog, authService, notificationService, cd) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.baoCaoSearch = new _bao_cao_ke_toan_nhap_xuat_ton_model__WEBPACK_IMPORTED_MODULE_13__["BaoCaoKeToanNhapXuatTonChiTietSearch"]();
        this.inBaoCaoKeToanNhapXuatTonChiTiet = new _bao_cao_ke_toan_nhap_xuat_ton_model__WEBPACK_IMPORTED_MODULE_13__["InBaoCaoKeToanNhapXuatTonChiTiet"]();
        this.disableCoVAT = false;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.aggregates = [
            { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
            { field: 'ThanhTienNhapMuaNCCTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienNhapTangKiemKeTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienNhapHoanTraTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienNhapNoiBoTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienNhapKhacTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienXuatNoiBoTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienXuatGiamKiemKeTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienXuatTraNCCTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienXuatBNTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienXuatKHTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienXuatKhacTrongKy', aggregate: 'sum' },
            { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
        ];
        this.groups = [{
                field: 'Khoa'
            }, {
                field: 'Nhom',
                aggregates: this.aggregates
            }];
        this.showGrid = false;
        this.showPrintExport = false;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.heightToolbar = 140;
        this.pageSize = 50;
        this.skip = 0;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this._showDefaultPagerTemplate = true;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoNhapXuatTon;
        if (window.location.protocol == "http:") {
            this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 200 },
            { Field: "Ma", Title: "Mã", Width: 150 },
            { Field: "Ten", Title: "Tên", Width: 150 },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "SLTonDauKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienTonDauKy", Title: "TT", Width: 150 },
            { Field: "SLNhapMuaNCCTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienNhapMuaNCCTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapMuaNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate },
            { Field: "SLNhapTangKiemKeTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienNhapTangKiemKeTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapTangKiemKeTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate },
            { Field: "SLNhapHoanTraTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienNhapHoanTraTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapHoanTraTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate },
            { Field: "SLNhapNoiBoTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienNhapNoiBoTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapNoiBoTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate },
            { Field: "SLNhapKhacTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienNhapKhacTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapKhacTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate },
            { Field: "SLXuatNoiBoTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienXuatNoiBoTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatNoiBoTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate },
            { Field: "SLXuatGiamKiemKeTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienXuatGiamKiemKeTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatGiamKiemKeTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate },
            { Field: "SLXuatTraNCCTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienXuatTraNCCTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatTraNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate },
            { Field: "SLXuatBNTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienXuatBNTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatBNTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatBNTrongKyGroupHeaderColumnTemplate },
            { Field: "SLXuatKHTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienXuatKHTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatKHTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatKHTrongKyGroupHeaderColumnTemplate },
            { Field: "SLXuatKhacTrongKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienXuatKhacTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapMuaNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate },
            { Field: "SLTonCuoiKy", Title: "SL", Width: 100 },
            { Field: "ThanhTienTonCuoiKy", Title: "TT", Width: 150, Template: this.thanhTienTonCuoiKyTemplate, TemplateGroupHeaderColumn: this.thanhTienTonCuoiKyGroupHeaderColumnTemplate },
            { Field: "Khoa", Title: "Khoa", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.khoaGroupHeaderTemplate },
            { Field: "Nhom", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
            this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
        }
        this.baoCaoSearch.CoVAT = true;
    }
    ngAfterContentInit() {
        const self = this;
        self.height = jQuery(window).height() - self.heightToolbar;
        if (self.height < 400) {
            self.height = 400;
        }
        jQuery(window).resize(function () {
            self.height = jQuery(window).height() - self.heightToolbar;
            if (self.height < 400) {
                self.height = 400;
            }
        });
        this.cd.detectChanges();
    }
    getFieldColumn(index) {
        return this.gridColumns[index].Field;
    }
    getTitleColumn(index) {
        return this.gridColumns[index].Title;
    }
    getWidthColumn(index) {
        return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
    }
    getMinWidthColumn(minWidth) {
        var widthParent = jQuery("#baoCaoGrid").parent().width();
        var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
        var totalWidth = this.gridColumns.filter((item) => {
            return item.Width != null;
        }).reduce((sum, item) => sum + item.Width, 0);
        if ((widthScreen < totalWidth + minWidth + 100)) {
            return minWidth;
        }
        else {
            return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
        }
    }
    getSumThanhTien(value) {
        if (this.gridView && value) {
            return value.sum;
        }
    }
    totalThanhTien(field) {
        switch (field) {
            case 'ThanhTienTonDauKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienTonDauKy, 0);
                }
            case 'ThanhTienNhapMuaNCCTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapMuaNCCTrongKy, 0);
                }
            case 'ThanhTienNhapTangKiemKeTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapTangKiemKeTrongKy, 0);
                }
            case 'ThanhTienNhapHoanTraTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapHoanTraTrongKy, 0);
                }
            case 'ThanhTienNhapNoiBoTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapNoiBoTrongKy, 0);
                }
            case 'ThanhTienNhapKhacTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienNhapKhacTrongKy, 0);
                }
            case 'ThanhTienXuatNoiBoTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatNoiBoTrongKy, 0);
                }
            case 'ThanhTienXuatGiamKiemKeTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatGiamKiemKeTrongKy, 0);
                }
            case 'ThanhTienXuatTraNCCTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatTraNCCTrongKy, 0);
                }
            case 'ThanhTienXuatBNTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatBNTrongKy, 0);
                }
            case 'ThanhTienXuatKHTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatKHTrongKy, 0);
                }
            case 'ThanhTienXuatKhacTrongKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienXuatKhacTrongKy, 0);
                }
            case 'ThanhTienTonCuoiKy':
                if (this.gridDataSource.data != undefined) {
                    return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTienTonCuoiKy, 0);
                }
        }
    }
    ;
    pageChange(event) {
        this.baoCaoSearch.Skip = event.skip;
        this.skip = event.skip;
        this.XemBaoCao();
    }
    changeKhoa(event) {
        if (event != undefined && event != null) {
            this.baoCaoSearch.KhoaPhongId = event;
        }
        else {
            this.baoCaoSearch.KhoaPhongId = null;
            // this.baoCaoSearch.KhoId = null;
        }
    }
    changeKho(event) {
        if (event && event == 6) { // kho nhà thuốc bệnh viện
            this.disableCoVAT = true;
            this.baoCaoSearch.CoVAT = false;
        }
        else {
            this.disableCoVAT = false;
        }
    }
    XemBaoCao() {
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            this._isLoading = false;
            this._isLoadingTotalPage = false;
            return;
        }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        // if (!this.baoCaoSearch.KhoId) {
        //   this.notificationService.showError("Kho yêu cầu nhập");
        //   this._isLoading = false;
        //   this._isLoadingTotalPage = false;
        //   return;
        // }
        this.apiService.post("BaoCao/GetDataBaoCaoKTNhapXuatTonChiTietForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                    this.showPrintExport = true;
                }
                // this.showGrid = true;
                this.gridDataSource.data = [...resultData.Data];
                this.gridDataSource.total = this.gridDataSource.data.length;
                this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_11__["process"])(resultData.Data, { group: this.groups });
                this._isLoading = false;
                this._isLoadingTotalPage = false;
            }
        });
    }
    exportExcel() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        // if (this.baoCaoSearch.KhoId == undefined && this.baoCaoSearch.KhoId == null) {
        //   this.notificationService.showError("Kho yêu cầu nhập");
        //   return;
        // }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            let khoId = 0;
            // if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
            //   khoId = this.baoCaoSearch.KhoId;
            // }
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoKTNhapXuatTon", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoKTNhapXuatTon" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoKeToanNhapXuatTonListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("khoaGroupHeaderTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "khoaGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonDauKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienTonDauKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapMuaNCCTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapMuaNCCTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapTangKiemKeTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapTangKiemKeTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapHoanTraTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapHoanTraTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapNoiBoTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapNoiBoTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapKhacTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapKhacTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatNoiBoTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatNoiBoTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatGiamKiemKeTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatGiamKiemKeTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatTraNCCTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatTraNCCTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatBNTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatBNTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKHTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatKHTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKhacTrongKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatKhacTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonCuoiKyTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienTonCuoiKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonDauKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienTonDauKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatBNTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatBNTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKHTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatKHTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonCuoiKyGroupHeaderColumnTemplate", { static: true })
], BaoCaoKeToanNhapXuatTonListComponent.prototype, "thanhTienTonCuoiKyGroupHeaderColumnTemplate", void 0);
BaoCaoKeToanNhapXuatTonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-ke-toan-nhap-xuat-ton-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ke-toan-nhap-xuat-ton-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton/bao-cao-ke-toan-nhap-xuat-ton-list.component.scss")).default]
    })
], BaoCaoKeToanNhapXuatTonListComponent);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-ke-toan-nhap-xuat-ton-bao-cao-ke-toan-nhap-xuat-ton-module-es2015.js.map