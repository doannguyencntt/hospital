(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-nhat-ky-he-thong-lich-su-email-lich-su-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                                {Title:'Báo Cáo',Path:''}\n                                ,{Title:'Nhật Ký Hệ Thống',Path:''}\n                                ,{Title:'Lịch Sử Email',Path:'/bao-cao/nhat-ky-he-thong/lich-su-goi-email', Active: true}\n                                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"bao-cao/nhat-ky-he-thong/lich-su-goi-email\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n                [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\">\n            </app-grid>\n            <ng-template #urlTemplate let-dataItem>\n                <a href=\"{{dataItem.urlTapTinDinhKem}}\" style=\"color:blue\" target=\"blank\">{{dataItem.TapTinDinhKem}}</a>\n            </ng-template>\n\n            <ng-template #noiDungTemplate let-dataItem>\n                <div [innerHTML]=\"dataItem.NoiDung\"></div>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                    class=\"m-0\">\n                    <app-textbox id=\"GoiDen\" fxFlex=\"16%\" fxFlex.sm=\"16%\" [required]=\"false\"\n                        [(model)]=\"searchInfo.GoiDen\" label=\"Gửi đến\" [maxlength]=\"100\">\n                    </app-textbox>\n                    <app-dropdownlist id=\"TrangThai\" fxFlex=\"16%\" fxFlex.sm=\"16%\" [(model)]=\"searchInfo.TrangThai\"\n                        [modelText]=\"searchInfo.TenTrangThai\" label=\"Trạng thái\" url=\"LichSuSMS/GetTrangThaiSMS\">\n                    </app-dropdownlist>\n                    <app-datepicker id=\"TuNgay\" fxFlex=\"16%\" fxFlex.sm=\"16%\" [(model)]=\"searchInfo.TuNgay\"\n                        (modelChange)=\"changeValueStart($event)\" label=\"Ngày gửi: từ\">\n                    </app-datepicker>\n                    <app-datepicker id=\"DenNgay\" fxFlex=\"16%\" fxFlex.sm=\"16%\" [(model)]=\"searchInfo.DenNgay\" label=\"đến\"\n                        [minDate]=minDateDenNgay>\n                    </app-datepicker>\n                    <app-textbox class=\"col-sm-2\" id=\"TieuDe\" fxFlex=\"16%\" fxFlex.sm=\"16%\" [(model)]=\"searchInfo.TieuDe\"\n                        label=\"Tiêu đề\" [maxlength]=\"100\">\n                    </app-textbox>\n                    <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                        <button (click)=\"searchHistoryEmail()\" mat-flat-button color=\"primary\"\n                            style=\"margin-top: 13px;\">Tìm\n                            kiếm</button>\n                        <button (click)=\"reset()\" mat-flat-button style=\"margin-top: 13px;\" *ngIf=\"displayResetButton === true\" class=\"ml-1\">Hủy</button>\n                        <button (click)=\"exportExcel()\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"ml-1\">Xuất Excel</button>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL25oYXQta3ktaGUtdGhvbmcvbGljaC1zdS1lbWFpbC9saWNoLXN1LWVtYWlsLWxpc3QvbGljaC1zdS1lbWFpbC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: LichSuEmailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuEmailListComponent", function() { return LichSuEmailListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lich_su_email_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lich-su-email.model */ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.model.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");














let LichSuEmailListComponent = class LichSuEmailListComponent {
    constructor(dialog, apiService, notificationService, authService) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.gridColumns = [];
        this.minDateDenNgay = null;
        this.displayResetButton = false;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_8___default.a;
    }
    ngOnInit() {
        this.searchInfo = new _lich_su_email_model__WEBPACK_IMPORTED_MODULE_1__["searchLichSuEmail"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].QuanLyLichSuEmail;
        this.gridColumns = [
            { Field: "GoiDen", Title: "Gửi đến", Width: 200, Sortable: true },
            { Field: "TieuDe", Title: "Tiêu đề", Width: 200, Sortable: true },
            { Field: "NoiDung", Title: "Nội dung", MinWidth: 400, Sortable: true, Template: this.noiDungTemplate },
            { Field: "TapTinDinhKem", Title: "Tập tin đính kèm", Width: 150, Sortable: true, Template: this.urlTemplate },
            { Field: "TenTrangThai", Title: "Trạng thái", Width: 150, Sortable: true },
            { Field: "NgayGuiFormat", Title: "Ngày gửi", Width: 150, Sortable: true }
        ];
    }
    searchHistoryEmail() {
        let goiDenQueryString = null;
        let TuNgayQueryString = null;
        let DenNgayQueryString = null;
        let TieuDeQueryString = null;
        let TrangThaiQueryString = null;
        if (this.searchInfo.TuNgay != null) {
            TuNgayQueryString = "\"" + this.ConvertDateTime(this.searchInfo.TuNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.DenNgay != null) {
            DenNgayQueryString = "\"" + this.ConvertDateTime(this.searchInfo.DenNgay) + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.GoiDen != null) {
            goiDenQueryString = "\"" + this.searchInfo.GoiDen + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.TieuDe != null) {
            TieuDeQueryString = "\"" + this.searchInfo.TieuDe + "\"";
            this.displayResetButton = true;
        }
        if (this.searchInfo.TrangThai != null) {
            TrangThaiQueryString = this.searchInfo.TrangThai;
            this.displayResetButton = true;
        }
        if (this.searchInfo.TuNgay === null && this.searchInfo.DenNgay === null
            && this.searchInfo.GoiDen === null && this.searchInfo.TieuDe === null
            && this.searchInfo.TrangThai === 0) {
            this.displayResetButton = false;
        }
        let queryString = "{\"GoiDen\":" + goiDenQueryString + ",\"TrangThai\":" + TrangThaiQueryString + ",\"TuNgay\":" + TuNgayQueryString + ",\"DenNgay\":" + DenNgayQueryString + ",\"TieuDe\":" + TieuDeQueryString + "}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    reset() {
        this.searchInfo.GoiDen = undefined;
        this.searchInfo.TuNgay = undefined;
        this.searchInfo.DenNgay = undefined;
        this.searchInfo.TieuDe = undefined;
        this.searchInfo.TrangThai = 0;
        this.displayResetButton = false;
        let queryString = "{\"GoiDen\":null,\"TrangThai\":0,\"TuNgay\":null,\"DenNgay\":null,\"TieuDe\":null}";
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    ConvertDateTime(datime) {
        var date = new Date(datime);
        var year = date.getFullYear();
        var rawMonth = parseInt(String(date.getMonth())) + 1;
        var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        var rawDay = parseInt(String(date.getDate()));
        var day = rawDay < 10 ? '0' + rawDay : rawDay;
        return year + '-' + month + '-' + day;
    }
    changeValueStart(event) {
        this.minDateDenNgay = new Date(event);
        if (this.searchInfo.DenNgay != null
            && this.searchInfo.TuNgay > this.searchInfo.DenNgay) {
            this.searchInfo.DenNgay = this.minDateDenNgay;
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("LichSuEmail/ExportLichSuEmail", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "LichSuEmail" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
LichSuEmailListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
], LichSuEmailListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('urlTemplate', { static: true })
], LichSuEmailListComponent.prototype, "urlTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('noiDungTemplate', { static: true })
], LichSuEmailListComponent.prototype, "noiDungTemplate", void 0);
LichSuEmailListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-lich-su-email-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lich-su-email-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lich-su-email-list.component.scss */ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.scss")).default]
    })
], LichSuEmailListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: LichSuEmailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuEmailRoutingModule", function() { return LichSuEmailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _lich_su_email_list_lich_su_email_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-email-list/lich-su-email-list.component */ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");







const routes = [
    {
        path: '',
        component: _lich_su_email_list_lich_su_email_list_component__WEBPACK_IMPORTED_MODULE_3__["LichSuEmailListComponent"],
        data: {
            title: 'Danh sách lịch sử email',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].QuanLyLichSuEmail,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]],
        pathMatch: 'full'
    }
];
let LichSuEmailRoutingModule = class LichSuEmailRoutingModule {
};
LichSuEmailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LichSuEmailRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.model.ts ***!
  \********************************************************************************************/
/*! exports provided: searchLichSuEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchLichSuEmail", function() { return searchLichSuEmail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class searchLichSuEmail {
    constructor(GoiDen = null, TieuDe = null, TuNgay = null, DenNgay = null, TrangThai = 0, TenTrangThai = "Tất cả") {
        this.GoiDen = GoiDen;
        this.TieuDe = TieuDe;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.TrangThai = TrangThai;
        this.TenTrangThai = TenTrangThai;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: LichSuEmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuEmailModule", function() { return LichSuEmailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _lich_su_email_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lich-su-email-routing.module */ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-routing.module.ts");
/* harmony import */ var _lich_su_email_list_lich_su_email_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lich-su-email-list/lich-su-email-list.component */ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email-list/lich-su-email-list.component.ts");
/* harmony import */ var _lich_su_email_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lich-su-email.service */ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");














let LichSuEmailModule = class LichSuEmailModule {
};
LichSuEmailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _lich_su_email_list_lich_su_email_list_component__WEBPACK_IMPORTED_MODULE_4__["LichSuEmailListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _lich_su_email_routing_module__WEBPACK_IMPORTED_MODULE_3__["LichSuEmailRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"]
        ],
        providers: [
            _lich_su_email_service__WEBPACK_IMPORTED_MODULE_5__["LichSuEmailService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _lich_su_email_service__WEBPACK_IMPORTED_MODULE_5__["LichSuEmailService"] },
        ]
    })
], LichSuEmailModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/nhat-ky-he-thong/lich-su-email/lich-su-email.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: LichSuEmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LichSuEmailService", function() { return LichSuEmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let LichSuEmailService = class LichSuEmailService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiservice) {
        super(apiservice);
        this.controllerName = 'LichSuEmail';
    }
};
LichSuEmailService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
LichSuEmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LichSuEmailService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-nhat-ky-he-thong-lich-su-email-lich-su-email-module-es2015.js.map