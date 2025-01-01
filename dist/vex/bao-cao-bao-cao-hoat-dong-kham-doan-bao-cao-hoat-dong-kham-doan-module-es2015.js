(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-hoat-dong-kham-doan-bao-cao-hoat-dong-kham-doan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Khám sức khỏe',Path:''}\n            ,{Title:'Thống kê',Path:''}\n            ,{Title:'Hoạt động khám đoàn',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"5px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\"\n                    [(model)]=\"hoatDongKhamDoanSearch.CongTyKhamSucKhoeId\" url=\"BaoCaoKhamDoanHopDong/GetCongTyBaoCaos\"\n                    [autoSelectFirstItem]=\"true\" [bind]=\"true\" class=\"mt-2 ml-1 on-header\" popupSettings=\"null\"\n                    hierarchyKeyToSend=\"CongTyId\">\n                </app-combobox>\n\n                <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hợp đồng\" class=\"mt-2 ml-1 on-header\"\n                    popupSettings=\"null\" url=\"BaoCaoKhamDoanHopDong/GetHopDongKhamSucKhoeBaoCaos\"\n                    hierarchyKeyToListen=\"CongTyId\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                    [(model)]=\"hoatDongKhamDoanSearch.HopDongKhamSucKhoeId\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"mt-2 ml-1 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat\"\n                    #tiepnhanden id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"mt-2 ml-1 on-header\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"auto\" fxFlex.sm=\"32%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mt-2 ml-1\"\n                        style=\"margin-left: 5px;\" (click)=\"timKiem()\">Tìm kiếm</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mt-2 ml-1\"\n                        [disabled]=\"!disabled\" style=\"float: right; right: 5px;\" (click)=\"xuatExcel()\">\n                        Xuất Excel\n                    </button>\n                </div>\n            </div>\n            <ng-container *ngIf=\"data.length > 0\">\n\n                <table width=\"100%\" class=\"table table-border mt-3\">\n                    <thead>\n                        <tr>\n                            <th>\n                                STT\n                            </th>\n                            <th style=\"resize:both\">\n                                TÊN CÔNG TY\n                            </th>\n                            <th>\n                                SỐ HỢP ĐỒNG\n                            </th>\n                            <th>\n                                TỔNG SỐ\n                            </th>\n                            <th *ngFor=\"let item of dataHeader\">\n                                {{item.TenNoiThucHien}}\n                            </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let item of data;let i = index\" kendoTooltip>\n                            <td>\n                                {{i+1}}\n                            </td>\n                            <td title=\"{{item.TenCongTyKhamSucKhoe}}\">\n                                {{item.TenCongTyKhamSucKhoe}}\n                            </td>\n                            <td title=\"{{item.TenHopDongKhamSucKhoe}}\">\n                                {{item.TenHopDongKhamSucKhoe}}\n                            </td>\n                            <td style=\"text-align:center\">\n                                {{item.TongSo}}\n                            </td>\n                            <td *ngFor=\"let child of item.NoiThucHienCuaNguoiBenhs\" style=\"text-align:center\">\n                                {{child.SoLan}}\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"data.length > 0\">\n                            <td>\n                                <b>Tổng:</b>\n                            </td>\n                            <td colspan=\"2\">\n                                &nbsp;\n                            </td>\n                            <td style=\"text-align:center\">\n                                <b>{{totalSoLuong('TongSo') | number:'1.0':'vi-VN'}}</b>\n                            </td>\n                            <td *ngFor=\"let item of dataHeader\" style=\"text-align:center\">\n                                <b> {{getSum(item.NoiThucHienId) | number:'1.0':'vi-VN'}}</b>\n                            </td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </ng-container>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8taG9hdC1kb25nLWtoYW0tZG9hbi9iYW8tY2FvLWhvYXQtZG9uZy1raGFtLWRvYW4tbGlzdC9iYW8tY2FvLWhvYXQtZG9uZy1raGFtLWRvYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhamDoanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhamDoanListComponent", function() { return BaoCaoHoatDongKhamDoanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _bao_cao_hoat_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bao-cao-hoat-dong-kham-doan.model */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");













let BaoCaoHoatDongKhamDoanListComponent = class BaoCaoHoatDongKhamDoanListComponent {
    constructor(authService, dialog, notificationService, apiService) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BaoCaoHoatDongKhamDoan;
        this.hoatDongKhamDoanSearch = new _bao_cao_hoat_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_9__["HoatDongKhamDoanQueryInfoQueryInfo"]();
        this.gridColumns = [];
        this.isSelectDuocPham = false;
        this.validationErrors = [];
        this.disabled = false;
        this.data = [];
        this.dataHeader = [];
        this.dataSumSoLuongHeader = [];
    }
    totalSoLuong(field) {
        switch (field) {
            case 'TongSo':
                return this.data.reduce((sum, item) => sum + item.TongSo, 0);
        }
    }
    ;
    ngOnInit() {
        this.GetDatasource();
    }
    GetDatasource() {
        let dateNow = new Date();
        this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat != null) {
            this.hoatDongKhamDoanSearch.FromDateString = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.hoatDongKhamDoanSearch.FromDateString = null;
        }
        if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.hoatDongKhamDoanSearch.ToDateString = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.hoatDongKhamDoanSearch.ToDateString = null;
        }
        this.apiService.post('BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoNhanVienKhamDichVuTheoPhongKham', this.hoatDongKhamDoanSearch).subscribe(resultData => {
            if (resultData != null && resultData != []) {
                this.data = resultData;
                if (this.data.length > 0) {
                    this.disabled = true;
                }
                else {
                    this.disabled = false;
                }
                this.data.forEach(item => {
                    item.NoiThucHienCuaNguoiBenhs.forEach(phongKham => {
                        if (this.dataHeader.every(z => z.TenNoiThucHien != phongKham.TenNoiThucHien)) {
                            this.dataHeader.push(phongKham);
                        }
                        this.dataSumSoLuongHeader.push(phongKham);
                    });
                });
            }
        });
    }
    timKiem() {
        this.data = [];
        this.dataHeader = [];
        this.dataSumSoLuongHeader = [];
        if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat != null) {
            this.hoatDongKhamDoanSearch.FromDateString = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.hoatDongKhamDoanSearch.FromDateString = null;
        }
        if (this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat != null) {
            this.hoatDongKhamDoanSearch.ToDateString = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.hoatDongKhamDoanSearch.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.hoatDongKhamDoanSearch.ToDateString = null;
        }
        this.apiService.post('BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoNhanVienKhamDichVuTheoPhongKham', this.hoatDongKhamDoanSearch).subscribe(resultData => {
            if (resultData != null && resultData != []) {
                this.data = resultData;
                if (this.data.length > 0) {
                    this.disabled = true;
                }
                else {
                    this.disabled = false;
                }
                this.data.forEach(item => {
                    item.NoiThucHienCuaNguoiBenhs.forEach(phongKham => {
                        if (this.dataHeader.every(z => z.TenNoiThucHien != phongKham.TenNoiThucHien)) {
                            this.dataHeader.push(phongKham);
                        }
                        this.dataSumSoLuongHeader.push(phongKham);
                    });
                });
            }
            else {
                this.data = [];
                this.disabled = false;
            }
        });
    }
    getSum(noiThucHienId) {
        let sum = 0;
        for (let i = 0; i < this.dataSumSoLuongHeader.length; i++) {
            if (this.dataSumSoLuongHeader[i].NoiThucHienId == noiThucHienId) {
                sum += this.dataSumSoLuongHeader[i].SoLan;
            }
        }
        return sum;
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
    xuatExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("BaoCaoKhamDoanHopDong/ExportBaoCaoHoatDongKhamDoan", this.hoatDongKhamDoanSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoHoatDongKhamDoanListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], BaoCaoHoatDongKhamDoanListComponent.prototype, "gridChild", void 0);
BaoCaoHoatDongKhamDoanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-hoat-dong-kham-doan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-hoat-dong-kham-doan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-hoat-dong-kham-doan-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.scss")).default]
    })
], BaoCaoHoatDongKhamDoanListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-routing.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhamDoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhamDoanRoutingModule", function() { return BaoCaoHoatDongKhamDoanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_hoat_dong_kham_doan_list_bao_cao_hoat_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_hoat_dong_kham_doan_list_bao_cao_hoat_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoHoatDongKhamDoanListComponent"],
        data: {
            title: 'BÁO CÁO HOẠT ĐỘNG KHÁM ĐOÀN',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoHoatDongKhamDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let BaoCaoHoatDongKhamDoanRoutingModule = class BaoCaoHoatDongKhamDoanRoutingModule {
};
BaoCaoHoatDongKhamDoanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoHoatDongKhamDoanRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhamDoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhamDoanModule", function() { return BaoCaoHoatDongKhamDoanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_hoat_dong_kham_doan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-hoat-dong-kham-doan-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-routing.module.ts");
/* harmony import */ var _bao_cao_hoat_dong_kham_doan_list_bao_cao_hoat_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-kham-doan/bao-cao-hoat-dong-kham-doan-list/bao-cao-hoat-dong-kham-doan-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");


















let BaoCaoHoatDongKhamDoanModule = class BaoCaoHoatDongKhamDoanModule {
};
BaoCaoHoatDongKhamDoanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_hoat_dong_kham_doan_list_bao_cao_hoat_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoHoatDongKhamDoanListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_hoat_dong_kham_doan_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoHoatDongKhamDoanRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_17__["GridModule"],
        ]
    })
], BaoCaoHoatDongKhamDoanModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-hoat-dong-kham-doan-bao-cao-hoat-dong-kham-doan-module-es2015.js.map