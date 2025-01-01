(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-luu-ket-qua-xet-nghiem-hang-ngay-bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.html":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.html ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Xét Nghiệm', Path:''},\n                {Title:'Lưu Kết Quả Xét Nghiệm Hằng Ngày', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <!-- <app-combobox id=\"NoiChiDinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"noiChiDinh.KeyId\"\n                    [modelText]=\"noiChiDinh.DisplayName\" label=\"Nơi chỉ định\" (modelChange)=\"chonNoiChiDinhChange($event)\"\n                    [autoSelectFirstItem]=\"true\" url=\"KhamBenh/GetListPhongBenhVien\" class=\"mt-1 on-header\">\n                </app-combobox> -->\n                <app-combobox id=\"NoiChiDinh\" fxFlex=\"15%\" fxFlex.sm=\"15%\" url=\"BaoCao/GetListPhongBenhVien\"\n                    [(model)]=\"noiChiDinh.KeyId\"  popupSettings=\"null\" [modelText]=\"noiChiDinh.DisplayName\" (modelChange)=\"chonNoiChiDinhChange($event)\"\n                    [templateHeader]=\"khoaPhongTemplateHeader\" [template]=\"khoaPhongTemplate\" label=\"Nơi chỉ định\" class=\"mt-1 on-header\"\n                    >\n                    <ng-template #khoaPhongTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"20%\">Mã</th>\n                                <th>Tên</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #khoaPhongTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                <td>{{dataItem.Ten}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n\n                <app-dropdownlist id=\"BHYT\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"bHYT.KeyId\" class=\"mt-1 on-header\" [autoSelectFirstItem]=\"true\"\n                    [modelText]=\"bHYT.DisplayName\" label=\"BHYT\" url=\"BaoCao/GetListBHYT\" (modelChange)=\"changeTrangThaiBHYT($event)\">\n                </app-dropdownlist>\n                <app-dropdownlist id=\"KSK\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"kSK.KeyId\" class=\"mt-1 on-header\"\n                    [modelText]=\"kSK.DisplayName\" label=\"KSK\" url=\"BaoCao/GetListKSK\" (modelChange)=\"changeTrangThaiKhamSucKhoe($event)\">\n                </app-dropdownlist>\n               \n                <!-- <app-checkbox id=\"BHYT\" fxFlex=\"5%\" fxFlex.sm=\"5%\" (modelChange)=\"changeTrangThaiBHYT(event)\" [(model)]=\"search.KhongBHYT\"\n                    label=\"Không BHYT\">\n                </app-checkbox> -->\n                <!-- <app-checkbox id=\"KhamSucKhoe\" fxFlex=\"8%\" fxFlex.sm=\"8%\" (modelChange)=\"changeTrangThaiKhamSucKhoe(event)\" \n                    [(model)]=\"search.KhamSucKhoe\" label=\"Khám sức khỏe\">\n                </app-checkbox> -->\n                <!-- <app-checkbox id=\"KhamSucKhoe\" fxFlex=\"8%\" fxFlex.sm=\"8%\" (modelChange)=\"changeTrangThaiKhamSucKhoe(event)\" \n                    [(model)]=\"search.KhongKhamSucKhoe\" label=\" Không Khám sức khỏe\">\n                </app-checkbox> -->\n\n                <app-datetimepicker id=\"TuNgay\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                    [(model)]=\"search.TuNgay\" [maxDate]=\"search.DenNgay\"\n                    label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker id=\"DenNgay\" fxFlex=\"15%\" fxFlex.sm=\"15%\" (modelChange)=\"changeValueEnd($event)\"\n                    [(model)]=\"search.DenNgay\" label=\"Đến ngày\" class=\"mt-1 on-header\" [minDate]=\"search.TuNgay\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"35%\" fxFlex.sm=\"35%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"XemBaoCao()\">Xem Báo\n                        Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"XuatPDF()\"\n                        style=\"float: right;\" *ngIf=\"ishowView == true\">Xuất PDF</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"XuatBaoCao()\"\n                        style=\"float: right;\" *ngIf=\"ishowView == true\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\" [style.display]=\"showGrid==true ? 'block':'none'\">\n                    <app-grid #gridl fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [allowSortDefault]=\"true\"\n                        [urlGetData]=\"urlGetDataGridChild\" \n                        [urlGetTotalPage]=\"urlGetPageDataGridChild\" [documentType]=\"doucument\" [useAddDeault]=\"false\"\n                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" \n                        [pageable]=\"true\" masterName=\"gridl\" [additionalSearchString]=\"returnDetail()\" [showStt]=\"true\" (extOnDataBound)=\"extOnDataBound($event)\">\n                    </app-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n\t<div style=\"text-transform: uppercase\">Kết quả phiếu ({{arrFileUrl.length}} file)</div>\n\t<button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n\t\t<mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n\t</button>\n</div>\n<mat-dialog-content style=\"height: 550px\">\n\t<div class=\"container-iframe\">\n\t\t<ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n\t\t\t<div *ngSwitchCase=\"true\">\n\t\t\t\t<ng-container *ngFor=\"let item of arrFileUrl, let i = index\">\n\t\t\t\t\t<iframe id=\"{{i}}\" width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\" type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display: none\" onload=\"this.style.display = 'block';\"></iframe>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t\t<div *ngSwitchDefault>Không có dữ liệu</div>\n\t\t</ng-container>\n\t</div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n\t<button type=\"button\" style=\"margin-left: auto\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n\t<button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-routing.module.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-routing.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: BcBcLuuKetQuaXetNghiemHangNgayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcBcLuuKetQuaXetNghiemHangNgayRoutingModule", function() { return BcBcLuuKetQuaXetNghiemHangNgayRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bc_luu_ket_qua_xet_nghiem_hang_ngay_list_bc_luu_ket_qua_xet_nghiem_hang_ngay_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.ts");






const routes = [
    {
        path: '',
        component: _bc_luu_ket_qua_xet_nghiem_hang_ngay_list_bc_luu_ket_qua_xet_nghiem_hang_ngay_list_component__WEBPACK_IMPORTED_MODULE_5__["BcLuuKetQuaXetNghiemHangNgayListComponent"],
        data: {
            title: 'Báo cáo lưu kết quả xét nghiệm hàng ngày ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoLuuKetQuaXetNghiemHangNgay,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    }
];
let BcBcLuuKetQuaXetNghiemHangNgayRoutingModule = class BcBcLuuKetQuaXetNghiemHangNgayRoutingModule {
};
BcBcLuuKetQuaXetNghiemHangNgayRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BcBcLuuKetQuaXetNghiemHangNgayRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-bc-luu-ket-qua-xet-nghiem-hang-ngay.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-bc-luu-ket-qua-xet-nghiem-hang-ngay.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: BcBcLuuKetQuaXetNghiemHangNgayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcBcLuuKetQuaXetNghiemHangNgayModule", function() { return BcBcLuuKetQuaXetNghiemHangNgayModule; });
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _bc_luu_ket_qua_xet_nghiem_hang_ngay_list_bc_luu_ket_qua_xet_nghiem_hang_ngay_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.ts");
/* harmony import */ var _bc_luu_ket_qua_xet_nghiem_hang_ngay_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bc-luu-ket-qua-xet-nghiem-hang-ngay.service */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay.service.ts");
/* harmony import */ var _bc_bc_luu_ket_qua_xet_nghiem_hang_ngay_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-routing.module.ts");
/* harmony import */ var _bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.ts");






















let BcBcLuuKetQuaXetNghiemHangNgayModule = class BcBcLuuKetQuaXetNghiemHangNgayModule {
};
BcBcLuuKetQuaXetNghiemHangNgayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bc_luu_ket_qua_xet_nghiem_hang_ngay_list_bc_luu_ket_qua_xet_nghiem_hang_ngay_list_component__WEBPACK_IMPORTED_MODULE_18__["BcLuuKetQuaXetNghiemHangNgayListComponent"], _bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_component__WEBPACK_IMPORTED_MODULE_21__["BcLuuKetQuaXetNghiemHangNgayPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
            _bc_bc_luu_ket_qua_xet_nghiem_hang_ngay_routing_module__WEBPACK_IMPORTED_MODULE_20__["BcBcLuuKetQuaXetNghiemHangNgayRoutingModule"],
        ],
        providers: [
            _bc_luu_ket_qua_xet_nghiem_hang_ngay_service__WEBPACK_IMPORTED_MODULE_19__["BcLuuKetQuaXetNghiemHangNgayService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _bc_luu_ket_qua_xet_nghiem_hang_ngay_service__WEBPACK_IMPORTED_MODULE_19__["BcLuuKetQuaXetNghiemHangNgayService"] },
        ],
        entryComponents: [
            _bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_component__WEBPACK_IMPORTED_MODULE_21__["BcLuuKetQuaXetNghiemHangNgayPopupComponent"]
        ]
    })
], BcBcLuuKetQuaXetNghiemHangNgayModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.scss ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tbHV1LWtldC1xdWEteGV0LW5naGllbS1oYW5nLW5nYXkvYmMtbHV1LWtldC1xdWEteGV0LW5naGllbS1oYW5nLW5nYXktbGlzdC9iYy1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.ts":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: BcLuuKetQuaXetNghiemHangNgayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcLuuKetQuaXetNghiemHangNgayListComponent", function() { return BcLuuKetQuaXetNghiemHangNgayListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _bc_luu_ket_qua_xet_nghiem_hang_ngay_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bc-luu-ket-qua-xet-nghiem-hang-ngay.model */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");














let BcLuuKetQuaXetNghiemHangNgayListComponent = class BcLuuKetQuaXetNghiemHangNgayListComponent {
    constructor(apiService, notificationService, dialog, authService) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.authService = authService;
        this.search = new _bc_luu_ket_qua_xet_nghiem_hang_ngay_model__WEBPACK_IMPORTED_MODULE_5__["LocKetQua"];
        this.noiChiDinh = new _bc_luu_ket_qua_xet_nghiem_hang_ngay_model__WEBPACK_IMPORTED_MODULE_5__["NoiChiDinh"]();
        this.kSK = new _bc_luu_ket_qua_xet_nghiem_hang_ngay_model__WEBPACK_IMPORTED_MODULE_5__["KSK"]();
        this.bHYT = new _bc_luu_ket_qua_xet_nghiem_hang_ngay_model__WEBPACK_IMPORTED_MODULE_5__["BHYT"]();
        this.gridColumns = [];
        this.showGrid = false;
        this.ishowView = false;
        this.minDateTuNgay = null;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
    }
    ngOnInit() {
        this.doucument = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoLuuKetQuaXetNghiemHangNgay;
        this.gridColumns = [
            { Field: "Sid", Title: "Sid", Width: 120 },
            { Field: "HoVaTen", Title: "Họ và tên", Width: 120 },
            { Field: "NamSinhDisplay", Title: "Năm sinh", Width: 120 },
            { Field: "LoaiGioiTinhDisplay", Title: "Giới tính", Width: 200 },
            { Field: "NoiChiDinh", Title: "Nơi chỉ định", MinWidth: 100 },
            { Field: "BHYTDisplay", Title: "BHYT", Width: 120 },
            { Field: "KhamSucKhoeDisplay", Title: "KSK", Width: 120 },
            { Field: "HoTenBacSi", Title: "Bác sĩ", Width: 120 },
            { Field: "ChanDoan", Title: "Chẩn đoán", Width: 120 },
            { Field: "KetQua", Title: "Kết quả", Width: 120 },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        if (this.search.TuNgay == null) {
            this.search.TuNgay = this.minDateTuNgay;
        }
        if (this.search.DenNgay == null) {
            this.search.DenNgay = new Date();
        }
    }
    chonNoiChiDinhChange(event) {
        if (event != undefined && event != null && event != "") {
            this.search.NoiChiDinhId = event;
        }
        else {
            this.search.NoiChiDinhId = null;
        }
    }
    changeTrangThaiBHYT(event) {
        if (event != undefined && event != null && event != "") {
            if (event == 0) {
                this.search.BHYT = null;
            }
            if (event == 1) {
                this.search.BHYT = true;
            }
            if (event == 2) {
                this.search.BHYT = false;
            }
        }
        else {
            this.search.BHYT = null;
        }
    }
    changeTrangThaiKhamSucKhoe(event) {
        if (event != undefined && event != null && event != "") {
            if (event == 0) {
                this.search.KhamSucKhoe = null;
            }
            if (event == 1) {
                this.search.KhamSucKhoe = true;
            }
            if (event == 2) {
                this.search.KhamSucKhoe = false;
            }
        }
        else {
            this.search.KhamSucKhoe = null;
        }
    }
    changeValueStart(event) {
        if (event != undefined && event != null && event != "") {
            this.search.TuNgay = event;
        }
        else {
            let tuNgay = new Date();
            tuNgay.setHours(0, 0, 0, 0);
            this.search.TuNgay = tuNgay;
        }
    }
    changeValueEnd(event) {
        if (event != undefined && event != null && event != "") {
            this.search.DenNgay = event;
        }
        else {
            let tuNgay = new Date();
            this.search.DenNgay = tuNgay;
        }
    }
    setDataGridView() {
        if (this.grid !== undefined) {
            this.grid.setDataSource();
        }
        this.showGrid = true;
        this.ishowView = true;
    }
    XemBaoCao() {
        if (this.search.TuNgay == null || this.search.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        //BaoCao/GetDataBaoCaoLuuKetQuaXetNghiemHangNgayTotalPageForGridAsync
        this.showGrid = true;
        if (this.search.TuNgay == null) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0, 0, 0, 0);
            this.search.TuNgay = this.minDateTuNgay;
        }
        if (this.search.DenNgay == null) {
            this.minDateTuNgay = new Date();
            this.search.DenNgay = this.minDateTuNgay;
        }
        if (this.search.NoiChiDinhId == 0) {
            this.search.NoiChiDinhId == null;
        }
        this.search.DenNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
        this.search.TuNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
        let queryStringSearch = JSON.stringify(this.search);
        this.urlGetDataGridChild = "BaoCao/GetDataForGridAsync?Json=" + queryStringSearch;
        this.urlGetPageDataGridChild = "BaoCao/GetDataBaoCaoLuuKetQuaXetNghiemHangNgayTotalPageForGridAsync?Json=" + queryStringSearch;
        this.grid._additionalSearchString = queryStringSearch;
        this.grid.search();
    }
    extOnDataBound(event) {
        if (event != undefined && event != null && event != "") {
            if (event.Data.length != 0) {
                this.ishowView = true;
            }
            else {
                this.ishowView = false;
            }
        }
    }
    returnDetail() {
        this.search.DenNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
        this.search.TuNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
        let queryStringSearch = JSON.stringify(this.search);
        return queryStringSearch;
    }
    XuatBaoCao() {
        if (this.search.TuNgay == null || this.search.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        this.search.Hosting = "http://" + window.location.host;
        this.search.DenNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
        this.search.TuNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
        let queryStringSearch = JSON.stringify(this.search);
        window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].api_url + "/BaoCao/ExportBaoCaoLuuKetQuaXetNghiemHangNgay?Json=" + queryStringSearch;
    }
    XuatPDF() {
        if (this.search.TuNgay == null || this.search.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        this.search.DenNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.DenNgay, "mm/dd/yyyy");
        this.search.TuNgayUTC = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].formatDateTime(this.search.TuNgay, "mm/dd/yyyy");
        let queryStringSearch = JSON.stringify(this.search);
        if (this.authService.hasPermission(this.doucument, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].View)) {
            this.apiService.post("BaoCao/XuLyInBaoCaoLuuKetQuaXetNghiemHangNgayAsync?Json=" + queryStringSearch).subscribe(res => {
                var arrHtml = [{
                        Html: res,
                        TenFile: "BaoCaoLuuKetQuaXetNghiemHangNgay",
                        PageSize: "A4",
                        PageOrientation: "Landscape",
                    }];
                this.dialog.open(_bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_bc_luu_ket_qua_xet_nghiem_hang_ngay_popup_component__WEBPACK_IMPORTED_MODULE_10__["BcLuuKetQuaXetNghiemHangNgayPopupComponent"], {
                    disableClose: true,
                    width: '1000px',
                    data: { Model: arrHtml }
                }).afterClosed().subscribe(() => { });
            }, err => {
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BcLuuKetQuaXetNghiemHangNgayListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridl', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], BcLuuKetQuaXetNghiemHangNgayListComponent.prototype, "grid", void 0);
BcLuuKetQuaXetNghiemHangNgayListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bc-luu-ket-qua-xet-nghiem-hang-ngay-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-list/bc-luu-ket-qua-xet-nghiem-hang-ngay-list.component.scss")).default]
    })
], BcLuuKetQuaXetNghiemHangNgayListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS9iYy1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tbHV1LWtldC1xdWEteGV0LW5naGllbS1oYW5nLW5nYXlcXGJjLWx1dS1rZXQtcXVhLXhldC1uZ2hpZW0taGFuZy1uZ2F5LXBvcHVwXFxiYy1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS9iYy1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS1wb3B1cC9iYy1sdXUta2V0LXF1YS14ZXQtbmdoaWVtLWhhbmctbmdheS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWx1dS1rZXQtcXVhLXhldC1uZ2hpZW0taGFuZy1uZ2F5L2JjLWx1dS1rZXQtcXVhLXhldC1uZ2hpZW0taGFuZy1uZ2F5LXBvcHVwL2JjLWx1dS1rZXQtcXVhLXhldC1uZ2hpZW0taGFuZy1uZ2F5LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: BcLuuKetQuaXetNghiemHangNgayPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcLuuKetQuaXetNghiemHangNgayPopupComponent", function() { return BcLuuKetQuaXetNghiemHangNgayPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");








let BcLuuKetQuaXetNghiemHangNgayPopupComponent = class BcLuuKetQuaXetNghiemHangNgayPopupComponent {
    constructor(data, apiService, dialog, notificationService) {
        this.data = data;
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.arrFilePdf = [];
        this.arrFileUrl = [];
    }
    ngOnInit() {
        this.getALlFilePDFFromHtml(this.data.Model);
    }
    getALlFilePDFFromHtml(arrHtml) {
        this.showPopupLoadingData();
        arrHtml.forEach((res) => {
            var obj = {
                Html: res.Html,
                TenFile: res.TenFile,
                PageSize: res.PageSize,
                PageOrientation: res.PageOrientation,
            };
            this.apiService.postExportPdf("BaoCao/GetFilePDFFromHtml", obj).subscribe((file) => {
                let newBlob = new Blob([file], { type: "application/pdf" });
                let datalocalURL = window.URL.createObjectURL(newBlob);
                this.arrFileUrl.push(datalocalURL);
                this.arrFilePdf.push(file);
                if (this.arrFileUrl.length == arrHtml.length) {
                    this.closePopupLoadingData();
                }
            }, (err) => {
                if (err.Message !== "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.closePopupLoadingData();
            });
        });
    }
    downloadAllFile() {
        const dateTimeNow = new Date();
        this.arrFilePdf.forEach((file) => {
            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(file, "application/pdf", "PhieuThuNgan" + dateTimeNow.getFullYear() + ".pdf");
        });
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined || this.popupLoadingData == null || this.popupLoadingData.openDialogs == undefined || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
};
BcLuuKetQuaXetNghiemHangNgayPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
BcLuuKetQuaXetNghiemHangNgayPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bc-luu-ket-qua-xet-nghiem-hang-ngay-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup/bc-luu-ket-qua-xet-nghiem-hang-ngay-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BcLuuKetQuaXetNghiemHangNgayPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay.model.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay.model.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: LocKetQua, NoiChiDinh, DateTimeFilter, BHYT, KSK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocKetQua", function() { return LocKetQua; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoiChiDinh", function() { return NoiChiDinh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function() { return DateTimeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BHYT", function() { return BHYT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KSK", function() { return KSK; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LocKetQua {
    constructor(NoiChiDinhId = null, BHYT = null, KhamSucKhoe = null, TuNgay = null, DenNgay = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = [], Hosting = "", TuNgayUTC = null, DenNgayUTC = null) {
        this.NoiChiDinhId = NoiChiDinhId;
        this.BHYT = BHYT;
        this.KhamSucKhoe = KhamSucKhoe;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
        this.Hosting = Hosting;
        this.TuNgayUTC = TuNgayUTC;
        this.DenNgayUTC = DenNgayUTC;
    }
}
class NoiChiDinh {
    constructor(KeyId = 0, DisplayName = "Tất cả ") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class DateTimeFilter {
    constructor(DateStart = null, DateEnd = new Date) {
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}
class BHYT {
    constructor(KeyId = 0, DisplayName = "Tất cả") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class KSK {
    constructor(KeyId = 0, DisplayName = "Tất cả") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay.service.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-luu-ket-qua-xet-nghiem-hang-ngay/bc-luu-ket-qua-xet-nghiem-hang-ngay.service.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BcLuuKetQuaXetNghiemHangNgayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcLuuKetQuaXetNghiemHangNgayService", function() { return BcLuuKetQuaXetNghiemHangNgayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let BcLuuKetQuaXetNghiemHangNgayService = class BcLuuKetQuaXetNghiemHangNgayService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BcLuuKetQuaXetNghiemHangNgayService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
BcLuuKetQuaXetNghiemHangNgayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BcLuuKetQuaXetNghiemHangNgayService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-luu-ket-qua-xet-nghiem-hang-ngay-bc-bc-luu-ket-qua-xet-nghiem-hang-ngay-module-es2015.js.map