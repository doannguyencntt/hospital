(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-hiem-y-te-danh-sach-xuat-excel-chung-tu-danh-sach-xuat-excel-chung-tu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Gửi H.Sơ Giám Định BHYT'},\n                        {Title:'Xuất excel chứng từ', Active:true}           \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/bao-hiem-y-te\" urlGetData=\"BHYT/GetDataDanhSachXuatChungTuExcelForGridAsync\"\n                [gridColumns]=\"gridDanhSachBHYTColumns\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [documentType]=\"documentType\" [showStt]=\"true\"\n                [searchString]=\"timKiemDSBaoHiemYTe.SearchString\" [triggerSelectAll]=\"true\"\n                (extOnDataBound)=\"onDataBoundGrid($event)\"\n                (extCheckboxSelection)=\"extCheckboxSelection($event)\" [checkboxAble]=\"true\" [sort]=\"sort\">\n            </app-grid>\n            <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                <div class=\"text-center\" *ngIf=\"timKiemDSBaoHiemYTe.LoaiChungTu != null\">\n                    <a (click)=\"view(dataItem.YeuCauTiepNhanNoiTruId ,dataItem.YeuCauTiepNhanNgoaiTruId )\" >\n                        <p class=\"reverse-ellipsis l\" title=\"Xem chứng từ\">Xem chứng từ</p>\n                    </a>\n                </div>               \n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n    <ng-template #headerTemplate>\n\n        <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <app-combobox id=\"loaiChungTu\" fxFlex=\"30%\" fxFlex.sm=\"30%\" style=\"margin-left: 5px;\"\n                class=\"mt-1 on-header pb-0 mr-1\" label=\"Chọn loại chứng từ\" popupSettings=\"\" bind=\"true\"\n                [autoSelectFirstItem]=\"true \" url=\"BHYT/GetLoaiChungTuXuatExcels\" required=\"true\"                \n                [(model)]=\"timKiemDSBaoHiemYTe.LoaiChungTu\" (modelChange)=\"changeLoaiChungTu($event)\">\n            </app-combobox>\n\n            <app-datetimepicker fxFlex=\"225px\" [(model)]=\"timKiemDSBaoHiemYTe.TuNgay\" #tiepnhantu id=\"TuFormat\"\n                label=\"Từ ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n            </app-datetimepicker>\n\n            <app-datetimepicker fxFlex=\"225px\" [(model)]=\"timKiemDSBaoHiemYTe.DenNgay\" #tiepnhanden id=\"DenFormat\"\n                label=\"Đến ngày\" class=\"ml-2 on-header\" (keyup)=\"onKey($event)\">\n            </app-datetimepicker>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                    type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemDSBaoHiemYTe.SearchString\"\n                    (keyup)=\"onKey($event)\" placeholder=\"Tìm kiếm theo Mã NB, Mã TN , Họ Tên\" />\n            </div>\n\n            <button type=\"button\" style=\"background-color: green; color: #fff;\" (click)=\"taiChungTuNguoiBenh()\"\n                class=\"ml-2\" mat-raised-button>\n                Xuất excel\n            </button>\n\n            <button type=\"button\" color=\"primary\" (click)=\"timKiemNangCao()\" class=\"ml-2\" mat-raised-button>Tìm\n                Kiếm</button>\n\n        </div>\n    </ng-template>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: DanhSachXuatChungTuExcelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachXuatChungTuExcelRoutingModule", function() { return DanhSachXuatChungTuExcelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _danh_sach_xuat_excel_chung_tu_danh_sach_xuat_excel_chung_tu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.ts");







const routes = [
    {
        path: "",
        component: _danh_sach_xuat_excel_chung_tu_danh_sach_xuat_excel_chung_tu_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachXuatChungTuExcelComponent"],
        data: {
            title: "Xuất excel chứng từ",
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachXuatChungTuExcel,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let DanhSachXuatChungTuExcelRoutingModule = class DanhSachXuatChungTuExcelRoutingModule {
};
DanhSachXuatChungTuExcelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DanhSachXuatChungTuExcelRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DanhSachXuatChungTuExcelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachXuatChungTuExcelModule", function() { return DanhSachXuatChungTuExcelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _danh_sach_xuat_excel_chung_tu_danh_sach_xuat_excel_chung_tu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.ts");
/* harmony import */ var _danh_sach_xuat_excel_chung_tu_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./danh-sach-xuat-excel-chung-tu-routing.module */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu-routing.module.ts");
/* harmony import */ var _dieu_tri_noi_tru_dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../dieu-tri-noi-tru/dieu-tri-noi-tru.module */ "./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.module.ts");

















let DanhSachXuatChungTuExcelModule = class DanhSachXuatChungTuExcelModule {
};
DanhSachXuatChungTuExcelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_danh_sach_xuat_excel_chung_tu_danh_sach_xuat_excel_chung_tu_component__WEBPACK_IMPORTED_MODULE_13__["DanhSachXuatChungTuExcelComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _danh_sach_xuat_excel_chung_tu_routing_module__WEBPACK_IMPORTED_MODULE_14__["DanhSachXuatChungTuExcelRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _dieu_tri_noi_tru_dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_15__["DieuTriNoiTruModule"]
        ]
    })
], DanhSachXuatChungTuExcelModule);



/***/ }),

/***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LoaiChungTu, ExcelChungTuQueryInfo, ThongTinYeuCauTiepNhans, TimKiemThongTinBenhNhanXuatExcelChungTu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiChungTu", function() { return LoaiChungTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelChungTuQueryInfo", function() { return ExcelChungTuQueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinYeuCauTiepNhans", function() { return ThongTinYeuCauTiepNhans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemThongTinBenhNhanXuatExcelChungTu", function() { return TimKiemThongTinBenhNhanXuatExcelChungTu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var LoaiChungTu;
(function (LoaiChungTu) {
    LoaiChungTu[LoaiChungTu["GiayRaVien"] = 1] = "GiayRaVien";
    LoaiChungTu[LoaiChungTu["GiayNghiHuongBHXH"] = 2] = "GiayNghiHuongBHXH";
    LoaiChungTu[LoaiChungTu["GiayNghiDuongThai"] = 3] = "GiayNghiDuongThai";
    LoaiChungTu[LoaiChungTu["TomTatBenhAn"] = 4] = "TomTatBenhAn";
    LoaiChungTu[LoaiChungTu["GiayChungSinh"] = 5] = "GiayChungSinh";
})(LoaiChungTu || (LoaiChungTu = {}));
class ExcelChungTuQueryInfo {
    constructor(LoaiChungTu = null, YeuCauTiepNhanIds = [], MaYeuCauTiepNhans = [], ThongTinYeuCauTiepNhans = []) {
        this.LoaiChungTu = LoaiChungTu;
        this.YeuCauTiepNhanIds = YeuCauTiepNhanIds;
        this.MaYeuCauTiepNhans = MaYeuCauTiepNhans;
        this.ThongTinYeuCauTiepNhans = ThongTinYeuCauTiepNhans;
    }
}
class ThongTinYeuCauTiepNhans {
    constructor(YeuCauTiepNhanNoiTruId = null, MaYeuCauTiepNhan = null, YeuCauTiepNhanNgoaiTruId = null) {
        this.YeuCauTiepNhanNoiTruId = YeuCauTiepNhanNoiTruId;
        this.MaYeuCauTiepNhan = MaYeuCauTiepNhan;
        this.YeuCauTiepNhanNgoaiTruId = YeuCauTiepNhanNgoaiTruId;
    }
}
class TimKiemThongTinBenhNhanXuatExcelChungTu {
    constructor(LoaiChungTu = null, TuNgay = null, DenNgay = null, FromDate = null, ToDate = null, TimKiem = null, SearchString = null) {
        this.LoaiChungTu = LoaiChungTu;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TimKiem = TimKiem;
        this.SearchString = SearchString;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8taGllbS15LXRlL2Rhbmgtc2FjaC14dWF0LWV4Y2VsLWNodW5nLXR1L2Rhbmgtc2FjaC14dWF0LWV4Y2VsLWNodW5nLXR1L2Rhbmgtc2FjaC14dWF0LWV4Y2VsLWNodW5nLXR1LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: DanhSachXuatChungTuExcelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachXuatChungTuExcelComponent", function() { return DanhSachXuatChungTuExcelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/send */ "./node_modules/@iconify/icons-ic/send.js");
/* harmony import */ var _iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/arrow-downward */ "./node_modules/@iconify/icons-ic/arrow-downward.js");
/* harmony import */ var _iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../danh-sach-xuat-excel-chung-tu */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.ts");
/* harmony import */ var _dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_giay_chung_sinh_popup_giay_chung_sinh_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-sinh-popup/giay-chung-sinh-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-chung-sinh-popup/giay-chung-sinh-popup.component.ts");
/* harmony import */ var _dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_chung_nhan_nghi_viec_huong_bhxh_chung_nhan_nghi_viec_hbhxh_popup_chung_nhan_nghi_viec_hbhxh_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-nhan-nghi-viec-huong-bhxh/chung-nhan-nghi-viec-hbhxh-popup/chung-nhan-nghi-viec-hbhxh-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/chung-nhan-nghi-viec-huong-bhxh/chung-nhan-nghi-viec-hbhxh-popup/chung-nhan-nghi-viec-hbhxh-popup.component.ts");
/* harmony import */ var _dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_tom_tat_ho_so_ba_popup_tom_tat_ho_so_ba_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/tom-tat-ho-so-ba-popup/tom-tat-ho-so-ba-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/tom-tat-ho-so-ba-popup/tom-tat-ho-so-ba-popup.component.ts");
/* harmony import */ var _dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_bien_ban_gay_me_popup_bien_ban_gay_me_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-gay-me-popup/bien-ban-gay-me-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/bien-ban-gay-me-popup/bien-ban-gay-me-popup.component.ts");
/* harmony import */ var _dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_giay_nghi_duong_thai_noi_tru_giay_nghi_duong_thai_noi_tru_popup_giay_nghi_duong_thai_noi_tru_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-nghi-duong-thai-noi-tru/giay-nghi-duong-thai-noi-tru-popup/giay-nghi-duong-thai-noi-tru-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/ho-so-khac/giay-nghi-duong-thai-noi-tru/giay-nghi-duong-thai-noi-tru-popup/giay-nghi-duong-thai-noi-tru-popup.component.ts");



























let DanhSachXuatChungTuExcelComponent = class DanhSachXuatChungTuExcelComponent {
    constructor(route, router, dialog, apiService, authService, location, notificationService) {
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.apiService = apiService;
        this.authService = authService;
        this.location = location;
        this.notificationService = notificationService;
        this.timKiemDSBaoHiemYTe = new _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["TimKiemThongTinBenhNhanXuatExcelChungTu"]();
        this.thongTinXuatExcelChungTu = new _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["ExcelChungTuQueryInfo"]();
        this.showCancelSearch = false;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.mySelection = [];
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_9___default.a;
        this.icArrowDownward = _iconify_icons_ic_arrow_downward__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.baseRoute = "/danh-sach-xuat-excel-chung-tu";
        this.holdQuery = null;
        this.query = null;
        this.additionalSearchString = null;
        this.confrim = null;
        this.icSend = _iconify_icons_ic_send__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.sort = [{
                field: 'NgayTaoChungTu',
                dir: 'desc'
            }];
        this.dataSource = {
            data: [],
            total: 0
        };
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].DanhSachXuatChungTuExcel;
        let dateNow = new Date();
        this.timKiemDSBaoHiemYTe.TuNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.timKiemDSBaoHiemYTe.DenNgay = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
            this.timKiemDSBaoHiemYTe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "dd/mm/yyyy");
        }
        else {
            this.timKiemDSBaoHiemYTe.FromDate = null;
        }
        if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
            this.timKiemDSBaoHiemYTe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "dd/mm/yyyy");
        }
        else {
            this.timKiemDSBaoHiemYTe.ToDate = null;
        }
        this.backWithSearch();
        this.gridDanhSachBHYTColumns = [
            { Field: "MaNB", Title: "Mã NB", Width: 100, Sortable: true },
            { Field: "HoTen", Title: "Tên Người Bệnh", Width: 150, Sortable: true },
            { Field: "NgayThangNam", Title: "Năm Sinh", Width: 150, Sortable: true },
            { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 80, Sortable: true },
            { Field: "ChanDoan", Title: "Chẩn Đoán", MinWidth: 200, Sortable: true },
            { Field: "PhuongPhapDieuTri", Title: "Phương pháp điều trị", Width: 200 },
            { Field: "NgayTaoChungTuDisplay", Title: "Ngày chứng từ", Width: 200, Sortable: true },
            { Field: "", Title: "", Width: 150, Sortable: true, Template: this.actionTemplate },
        ];
        var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
        this.gridChild.additionalSearchString = queryString;
    }
    backWithSearch() {
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null && src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].getItem('additionalSearchStringXuatExcelChungTu') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].getItem('additionalSearchStringXuatExcelChungTu');
            if (this.additionalSearchString != null) {
                this.timKiemDSBaoHiemYTe = JSON.parse(this.additionalSearchString);
                // this.searchString = this.timKiemDSBaoHiemYTe.SearchString;
                if (this.timKiemDSBaoHiemYTe.TuNgay != undefined && this.timKiemDSBaoHiemYTe.TuNgay != null && this.timKiemDSBaoHiemYTe.TuNgay != "") {
                    this.timKiemDSBaoHiemYTe.TuNgay = new Date(this.timKiemDSBaoHiemYTe.TuNgay);
                }
                if (this.timKiemDSBaoHiemYTe.DenNgay != undefined && this.timKiemDSBaoHiemYTe.DenNgay != null && this.timKiemDSBaoHiemYTe.DenNgay != "") {
                    this.timKiemDSBaoHiemYTe.DenNgay = new Date(this.timKiemDSBaoHiemYTe.DenNgay);
                }
                this.gridChild.additionalSearchString = this.additionalSearchString;
            }
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].setItem('additionalSearchStringXuatExcelChungTu', null);
            this.additionalSearchString = JSON.stringify(this.timKiemDSBaoHiemYTe);
        }
    }
    closeMenu() {
        this.trigger.closeMenu();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.timKiemDSBaoHiemYTe.TuNgay != null) {
            this.timKiemDSBaoHiemYTe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.TuNgay, "mm/dd/yyyy");
        }
        else {
            this.timKiemDSBaoHiemYTe.FromDate = null;
        }
        if (this.timKiemDSBaoHiemYTe.DenNgay != null) {
            this.timKiemDSBaoHiemYTe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.timKiemDSBaoHiemYTe.DenNgay, "mm/dd/yyyy");
        }
        else {
            this.timKiemDSBaoHiemYTe.ToDate = null;
        }
        if (this.searchString != null) {
            this.timKiemDSBaoHiemYTe.TimKiem = this.searchString;
        }
        if (this.timKiemDSBaoHiemYTe.LoaiChungTu === undefined || this.timKiemDSBaoHiemYTe.LoaiChungTu === null) {
            this.notificationService.showError("Vui lòng chọn chứng từ.");
            return true;
        }
        //this.timKiemDSBaoHiemYTe.SearchString = this.searchString;
        var queryString = JSON.stringify(this.timKiemDSBaoHiemYTe);
        //this.gridChild.searchString = this.searchString;
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_18__["LocalStorageHelper"].setItem("additionalSearchStringXuatExcelChungTu", queryString);
        this.gridChild.clearCheckBox();
        this.gridChild.search();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.timKiemNangCao();
        }
    }
    timKiemNguoiBenh() {
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiemNangCao();
        }
    }
    extCheckboxSelection(data) {
        this.mySelection = [];
        this.mySelection = data;
    }
    onDataBoundGrid(event) {
        if (event != undefined && event != null && event.Data.length > 0) {
            this.dataSource.data = event.Data;
        }
    }
    taiChungTuNguoiBenh() {
        if (this.timKiemDSBaoHiemYTe.LoaiChungTu === undefined || this.timKiemDSBaoHiemYTe.LoaiChungTu === null) {
            this.notificationService.showError("Vui lòng chọn chứng từ.");
            return true;
        }
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
            this.thongTinXuatExcelChungTu.YeuCauTiepNhanIds = [];
            this.thongTinXuatExcelChungTu.LoaiChungTu = this.timKiemDSBaoHiemYTe.LoaiChungTu;
            this.thongTinXuatExcelChungTu.ThongTinYeuCauTiepNhans = [];
            if (this.mySelection.length === 0) {
                this.notificationService.showError("Vui lòng chọn bệnh nhân để xuất excel.");
                return true;
            }
            else {
                self.showPopupLoadingData();
                this.mySelection.forEach(yeuCauTiepNhanId => {
                    this.thongTinXuatExcelChungTu.YeuCauTiepNhanIds.push(yeuCauTiepNhanId);
                    this.dataSource.data.forEach(element => {
                        if (element.Id === yeuCauTiepNhanId) {
                            let thongTinYeuCauTiepNhans = new _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["ThongTinYeuCauTiepNhans"]();
                            thongTinYeuCauTiepNhans.YeuCauTiepNhanNgoaiTruId = element.YeuCauTiepNhanNgoaiTruId;
                            thongTinYeuCauTiepNhans.YeuCauTiepNhanNoiTruId = element.YeuCauTiepNhanNoiTruId;
                            thongTinYeuCauTiepNhans.MaYeuCauTiepNhan = element.MaYeuCauTiepNhan;
                            this.thongTinXuatExcelChungTu.ThongTinYeuCauTiepNhans.push(thongTinYeuCauTiepNhans);
                        }
                    });
                });
                self.apiService.postExportExcel("BHYT/ExportChungTu", this.thongTinXuatExcelChungTu)
                    .subscribe((resultData) => {
                    self.closePopupLoadingData();
                    const dateTimeNow = new Date();
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(resultData, "application/vnd.ms-excel", "GoiQuaBHYT" + dateTimeNow.getFullYear() + ".xlsx");
                }, (err) => {
                    self.notificationService.showError(err.Message);
                    self.closePopupLoadingData();
                });
            }
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang xuất excel..." },
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    view(idNoiTru, idNgoaiTru) {
        if (this.timKiemDSBaoHiemYTe.LoaiChungTu != null) {
            switch (this.timKiemDSBaoHiemYTe.LoaiChungTu) {
                case _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["LoaiChungTu"].GiayRaVien:
                    // giấy ra viện
                    // id là yctn        
                    var showDialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' }
                    });
                    this.apiService.post("BHYT/GetIdPhieuNoiTruHoSoKhac?id=" + idNoiTru + "&loai=" + 28).subscribe(resDataId => {
                        if (resDataId != undefined && resDataId != null) {
                            this.apiService.post("DieuTriNoiTru/InGiayRaVien?noiTruHoSoKhacId=" + resDataId).subscribe(resData => {
                                if (resData != undefined && resData != null) {
                                    showDialog.close();
                                    this.dialog.open(_dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_bien_ban_gay_me_popup_bien_ban_gay_me_popup_component__WEBPACK_IMPORTED_MODULE_25__["BienBanGayMePopupComponent"], {
                                        disableClose: false,
                                        width: '1200px',
                                        data: { Title: 'GIẤY RA VIỆN', Data: resData },
                                    }).afterClosed().subscribe(() => {
                                        showDialog.close();
                                    });
                                }
                            }, (err) => {
                                this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    this.notificationService.showError(err.Message);
                                }
                                showDialog.close();
                            });
                        }
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        showDialog.close();
                    });
                    break;
                case _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["LoaiChungTu"].GiayNghiHuongBHXH:
                    let voBHXH = {
                        YeuCauTiepNhanNoiTruId: idNoiTru,
                        YeuCauTiepNhanNgoaiTruId: idNgoaiTru,
                    };
                    this.apiService.post("DieuTriNoiTru/InGiayChungNhanNghiViecHuongBHXHNgoaTruVaNoTru", voBHXH).subscribe((result) => {
                        this.dialog.open(_dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_chung_nhan_nghi_viec_huong_bhxh_chung_nhan_nghi_viec_hbhxh_popup_chung_nhan_nghi_viec_hbhxh_popup_component__WEBPACK_IMPORTED_MODULE_23__["ChungNhanNghiViecHbhxhPopupComponent"], {
                            disableClose: true,
                            width: '1200px',
                            data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                    break;
                case _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["LoaiChungTu"].GiayNghiDuongThai:
                    // giấy nghỉ dưỡng thai 
                    let vo = {
                        YeuCauTiepNhanNoiTruId: idNoiTru,
                        YeuCauTiepNhanNgoaiTruId: idNgoaiTru
                    };
                    this.apiService.post("DieuTriNoiTru/InTatCaGiayNghiDuongThai", vo).subscribe((result) => {
                        this.dialog.open(_dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_giay_nghi_duong_thai_noi_tru_giay_nghi_duong_thai_noi_tru_popup_giay_nghi_duong_thai_noi_tru_popup_component__WEBPACK_IMPORTED_MODULE_26__["GiayNghiDuongThaiNoiTruPopupComponent"], {
                            disableClose: true,
                            width: '750px',
                            data: { Model: result }
                        }).afterClosed().subscribe(() => {
                        });
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                    break;
                case _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["LoaiChungTu"].TomTatBenhAn:
                    //Tóm tắt bệnh án 
                    const yeuCauTiepNhanId = idNoiTru;
                    this.dialog.open(_dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_tom_tat_ho_so_ba_popup_tom_tat_ho_so_ba_popup_component__WEBPACK_IMPORTED_MODULE_24__["TomTatHoSoBenhAnPopupComponent"], {
                        disableClose: false,
                        width: '1200px',
                        data: { yeuCauTiepNhanId }
                    }).afterClosed().subscribe(() => { });
                    break;
                case _danh_sach_xuat_excel_chung_tu__WEBPACK_IMPORTED_MODULE_21__["LoaiChungTu"].GiayChungSinh:
                    //giấy chứng sinh
                    var showDialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' }
                    });
                    let hot;
                    if (window.location.protocol == "http:") {
                        hot = "http://" + window.location.host;
                    }
                    else {
                        hot = "https://" + window.location.host;
                    }
                    this.apiService.post("DieuTriNoiTru/InGiayChungSinhTatCa", { NoiTruHoSoKhacId: idNoiTru, Hosting: hot }).subscribe(resData => {
                        if (resData != undefined && resData != null) {
                            showDialog.close();
                            this.dialog.open(_dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_ho_so_khac_giay_chung_sinh_popup_giay_chung_sinh_popup_component__WEBPACK_IMPORTED_MODULE_22__["GiayChungSinhPopupComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: { Title: 'GIẤY CHỨNG SINH', Data: resData },
                            }).afterClosed().subscribe(() => {
                                showDialog.close();
                            });
                        }
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                        showDialog.close();
                    });
                    break;
            }
        }
    }
    changeLoaiChungTu(event) {
        this.timKiemNangCao();
    }
};
DanhSachXuatChungTuExcelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("actionTemplate", { static: true })
], DanhSachXuatChungTuExcelComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], { static: false })
], DanhSachXuatChungTuExcelComponent.prototype, "trigger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], DanhSachXuatChungTuExcelComponent.prototype, "gridChild", void 0);
DanhSachXuatChungTuExcelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-danh-sach-xuat-excel-chung-tu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-xuat-excel-chung-tu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-xuat-excel-chung-tu.component.scss */ "./src/app/modules/main/bao-hiem-y-te/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu/danh-sach-xuat-excel-chung-tu.component.scss")).default]
    })
], DanhSachXuatChungTuExcelComponent);



/***/ })

}]);
//# sourceMappingURL=bao-hiem-y-te-danh-sach-xuat-excel-chung-tu-danh-sach-xuat-excel-chung-tu-module-es2015.js.map