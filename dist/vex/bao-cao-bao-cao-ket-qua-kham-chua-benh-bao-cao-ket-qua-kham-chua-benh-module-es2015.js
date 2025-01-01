(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-ket-qua-kham-chua-benh-bao-cao-ket-qua-kham-chua-benh-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div>XEM TRƯỚC KHI IN</div>\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow:hidden\">\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" style=\"height: 500px;\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <app-print-form textPrint=\"In\" type=\"PDF\" [event]=\"modelPrint\" [bodyComponent]=\"this\" typeSize=\"A4\" typeLayout=\"landscape\">\n    </app-print-form>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''}\n                    ,{Title:'Báo Cáo Kết Quả Khám Chữa Bệnh', Path:''}\n                    ,{Title:'Kết Quả Khám Chữa Bệnh', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker id=\"tuNgay\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay.startDate\"\n                    label=\"Từ ngày\" class=\"mt-1 on-header\"\n                    [validationerror]=\"'TuNgay' | validationerror:validationErrors\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"denNgay\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Đến ngày\" class=\"mt-1 on-header\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay.endDate\"\n                    [validationerror]=\"'DenNgay' | validationerror:validationErrors\">\n                </app-datetimepicker>\n                <div fxFlex=\"70%\" fxFlex.sm=\"70%\" class=\"pb-0\">\n                    <!-- <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button> -->\n                    <!-- <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"InbaoCao()\" style=\"float: right;\" *ngIf=\"showPrintExport\">In Báo cáo</button> -->\n                        <!-- *ngIf=\"showPrintExport\" -->\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" >Xuất Excel</button>\n                </div>\n                <div fxFlex=\"100%\">\n                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\"\n                        *ngFor=\"let item of columnsTitleTable\">\n                        <div [innerHTML]=\"item.Html\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oL2Jhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaC1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaFxcYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oLXBvcHVwXFxiYW8tY2FvLWtldC1xdWEta2hhbS1jaHVhLWJlbmgtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaC9iYW8tY2FvLWtldC1xdWEta2hhbS1jaHVhLWJlbmgtcG9wdXAvYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaC9iYW8tY2FvLWtldC1xdWEta2hhbS1jaHVhLWJlbmgtcG9wdXAvYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: BaoCaoKetQuaKhamChuaBenhPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKetQuaKhamChuaBenhPopupComponent", function() { return BaoCaoKetQuaKhamChuaBenhPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let BaoCaoKetQuaKhamChuaBenhPopupComponent = class BaoCaoKetQuaKhamChuaBenhPopupComponent {
    constructor(data, sanitizer, dialog) {
        this.data = data;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        this.src = '';
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
    }
    ngOnInit() {
        this.modelPrint = this.data.Model;
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            resolve(this.modelPrint);
        });
    }
    close() {
        this.dialog.closeAll();
    }
};
BaoCaoKetQuaKhamChuaBenhPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
BaoCaoKetQuaKhamChuaBenhPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-ket-qua-kham-chua-benh-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ket-qua-kham-chua-benh-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BaoCaoKetQuaKhamChuaBenhPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoKetQuaKhamChuaBenhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKetQuaKhamChuaBenhRoutingModule", function() { return BaoCaoKetQuaKhamChuaBenhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_bao_cao_ket_qua_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_ket_qua_kham_chua_benh_bao_cao_ket_qua_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoKetQuaKhamChuaBenhComponent"],
        data: {
            title: 'Báo cáo kết quả khám chữa bệnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoKetQuaKhamChuaBenh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoKetQuaKhamChuaBenhRoutingModule = class BaoCaoKetQuaKhamChuaBenhRoutingModule {
};
BaoCaoKetQuaKhamChuaBenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoKetQuaKhamChuaBenhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.model.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.model.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SearchBaoCao, DateTimeFilter, BaoCaoKetQuaKhamChuaBenhAnVo, ColumnsTitleTable, TimKiemBaoCaoKhamChuaBenh, SearchDateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBaoCao", function() { return SearchBaoCao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function() { return DateTimeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKetQuaKhamChuaBenhAnVo", function() { return BaoCaoKetQuaKhamChuaBenhAnVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnsTitleTable", function() { return ColumnsTitleTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimKiemBaoCaoKhamChuaBenh", function() { return TimKiemBaoCaoKhamChuaBenh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDateRange", function() { return SearchDateRange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SearchBaoCao {
    constructor(DateStart = null, DateEnd = null) {
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}
class DateTimeFilter {
    constructor(DateStart = null, DateEnd = new Date) {
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}
class BaoCaoKetQuaKhamChuaBenhAnVo {
    constructor(TuNgay = null, DenNgay = null, hosting = null) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.hosting = hosting;
    }
}
class ColumnsTitleTable {
    constructor(Html = "") {
        this.Html = Html;
    }
}
class TimKiemBaoCaoKhamChuaBenh {
    constructor(TuNgayDenNgay = new SearchDateRange(), SearchString = null) {
        this.TuNgayDenNgay = TuNgayDenNgay;
        this.SearchString = SearchString;
    }
}
class SearchDateRange {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BaoCaoKetQuaKhamChuaBenhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKetQuaKhamChuaBenhModule", function() { return BaoCaoKetQuaKhamChuaBenhModule; });
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
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_bao_cao_ket_qua_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.ts");
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-routing.module.ts");
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh.service */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.service.ts");
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_popup_bao_cao_ket_qua_kham_chua_benh_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.ts");






















let BaoCaoKetQuaKhamChuaBenhModule = class BaoCaoKetQuaKhamChuaBenhModule {
};
BaoCaoKetQuaKhamChuaBenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_ket_qua_kham_chua_benh_bao_cao_ket_qua_kham_chua_benh_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoKetQuaKhamChuaBenhComponent"], _bao_cao_ket_qua_kham_chua_benh_popup_bao_cao_ket_qua_kham_chua_benh_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoKetQuaKhamChuaBenhPopupComponent"]],
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
            _bao_cao_ket_qua_kham_chua_benh_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoKetQuaKhamChuaBenhRoutingModule"],
        ],
        providers: [
            _bao_cao_ket_qua_kham_chua_benh_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoKetQuaKhamChuaBenhService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _bao_cao_ket_qua_kham_chua_benh_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoKetQuaKhamChuaBenhService"] },
        ],
        entryComponents: [
            _bao_cao_ket_qua_kham_chua_benh_popup_bao_cao_ket_qua_kham_chua_benh_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoKetQuaKhamChuaBenhPopupComponent"]
        ]
    })
], BaoCaoKetQuaKhamChuaBenhModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.service.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BaoCaoKetQuaKhamChuaBenhService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKetQuaKhamChuaBenhService", function() { return BaoCaoKetQuaKhamChuaBenhService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaoCaoKetQuaKhamChuaBenhService = class BaoCaoKetQuaKhamChuaBenhService {
    constructor() { }
};
BaoCaoKetQuaKhamChuaBenhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoKetQuaKhamChuaBenhService);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.scss ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\ntd, th {\n  border: 1px solid black;\n  text-align: left;\n  padding: 8px;\n}\n\ntd.tenThuoc, th.tenThuoc {\n  width: 20%;\n}\n\ntd.donVi, th.donVi {\n  width: 8%;\n  text-align: center;\n}\n\ntd.ngayThang, th.ngayThang {\n  width: 3%;\n  text-align: center;\n}\n\ntd.tongSo, th.tongSo {\n  width: 10%;\n  text-align: right;\n}\n\ntd.donGia, th.donGia {\n  width: 10%;\n  text-align: right;\n}\n\ntd.thanhTien, th.thanhTien {\n  width: 10%;\n  text-align: right;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntr:hover {\n  background-color: #f5f5f5;\n}\n\nul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oL2Jhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaFxcYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oXFxiYW8tY2FvLWtldC1xdWEta2hhbS1jaHVhLWJlbmguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaC9iYW8tY2FvLWtldC1xdWEta2hhbS1jaHVhLWJlbmgvYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWtldC1xdWEta2hhbS1jaHVhLWJlbmgvYmFvLWNhby1rZXQtcXVhLWtoYW0tY2h1YS1iZW5oL2Jhby1jYW8ta2V0LXF1YS1raGFtLWNodWEtYmVuaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnRkLnRlblRodW9jLCB0aC50ZW5UaHVvYyB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbnRkLmRvblZpLCB0aC5kb25WaSB7XG4gIHdpZHRoOiA4JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC5uZ2F5VGhhbmcsIHRoLm5nYXlUaGFuZyB7XG4gIHdpZHRoOiAzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZC50b25nU28sIHRoLnRvbmdTbyB7XG4gIHdpZHRoOiAxMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG50ZC5kb25HaWEsIHRoLmRvbkdpYSB7XG4gIHdpZHRoOiAxMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG50ZC50aGFuaFRpZW4sIHRoLnRoYW5oVGllbiB7XG4gIHdpZHRoOiAxMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudGQudGVuVGh1b2MsIHRoLnRlblRodW9jIHtcbiAgd2lkdGg6IDIwJTtcbn1cblxudGQuZG9uVmksIHRoLmRvblZpIHtcbiAgd2lkdGg6IDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLm5nYXlUaGFuZywgdGgubmdheVRoYW5nIHtcbiAgd2lkdGg6IDMlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLnRvbmdTbywgdGgudG9uZ1NvIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRkLmRvbkdpYSwgdGguZG9uR2lhIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRkLnRoYW5oVGllbiwgdGgudGhhbmhUaWVuIHtcbiAgd2lkdGg6IDEwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxudWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: BaoCaoKetQuaKhamChuaBenhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKetQuaKhamChuaBenhComponent", function() { return BaoCaoKetQuaKhamChuaBenhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bao-cao-ket-qua-kham-chua-benh.model */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.model.ts");
/* harmony import */ var _bao_cao_ket_qua_kham_chua_benh_popup_bao_cao_ket_qua_kham_chua_benh_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh-popup/bao-cao-ket-qua-kham-chua-benh-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");













let BaoCaoKetQuaKhamChuaBenhComponent = class BaoCaoKetQuaKhamChuaBenhComponent {
    constructor(apiService, dialog, notificationService, authService, ref) {
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
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.timKiemNangCaoObj = new _bao_cao_ket_qua_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_10__["TimKiemBaoCaoKhamChuaBenh"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoKetQuaKhamChuaBenh;
        if (this.timKiemNangCaoObj.TuNgayDenNgay.startDate == null) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0, 0, 0, 0);
            this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.minDateTuNgay;
        }
        if (this.timKiemNangCaoObj.TuNgayDenNgay.endDate == null) {
            this.minDateDenNgay = new Date();
            this.timKiemNangCaoObj.TuNgayDenNgay.endDate = this.minDateDenNgay;
        }
        // tạm thời đóng lại
        //this.XemBaoCao();
    }
    XemBaoCao() {
        this.columnsTitleTable = new Array();
        let baoCaoInfo = new _bao_cao_ket_qua_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_10__["BaoCaoKetQuaKhamChuaBenhAnVo"]();
        baoCaoInfo.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
        baoCaoInfo.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
        this.apiService.post("BaoCao/GetDataTemplateBaoCaoKetQuaKhamChuaBenhAsync", baoCaoInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.showPrintExport = true;
                let data = {
                    Html: resultData
                };
                this.columnsTitleTable.push(data);
            }
        });
    }
    InbaoCao() {
        if (this.showPrintExport == true) {
            let baoCaoInfo = new _bao_cao_ket_qua_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_10__["BaoCaoKetQuaKhamChuaBenhAnVo"]();
            baoCaoInfo.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
            baoCaoInfo.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
            if (window.location.protocol == "http:") {
                baoCaoInfo.hosting = "http://" + window.location.host;
            }
            else {
                baoCaoInfo.hosting = "https://" + window.location.host;
            }
            this.apiService.post("BaoCao/InBaoCaoKetQuaKhamChuaBenh", baoCaoInfo).subscribe((result) => {
                this.dialog.open(_bao_cao_ket_qua_kham_chua_benh_popup_bao_cao_ket_qua_kham_chua_benh_popup_component__WEBPACK_IMPORTED_MODULE_11__["BaoCaoKetQuaKhamChuaBenhPopupComponent"], {
                    disableClose: true,
                    width: '1000px',
                    data: { Model: result }
                }).afterClosed().subscribe(() => {
                });
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
            });
        }
    }
    XuatBaoCao() {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
            self.showPopupLoadingData();
            let baoCaoInfo = new _bao_cao_ket_qua_kham_chua_benh_model__WEBPACK_IMPORTED_MODULE_10__["BaoCaoKetQuaKhamChuaBenhAnVo"]();
            baoCaoInfo.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
            baoCaoInfo.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
            //tạm thời đóng lại
            //this.XemBaoCao();
            self.apiService.postExportExcel('BaoCao/ExportBaoCaoKetQuaKhamChuaBenh', baoCaoInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoKetQuaKhamChuaBenh' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
BaoCaoKetQuaKhamChuaBenhComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
BaoCaoKetQuaKhamChuaBenhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-ket-qua-kham-chua-benh',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ket-qua-kham-chua-benh.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ket-qua-kham-chua-benh.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh/bao-cao-ket-qua-kham-chua-benh.component.scss")).default]
    })
], BaoCaoKetQuaKhamChuaBenhComponent);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-ket-qua-kham-chua-benh-bao-cao-ket-qua-kham-chua-benh-module-es2015.js.map