(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.html":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.html ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Báo cáo',Path:''}\n            ,{Title:'Khám đoàn',Path:''}\n            ,{Title:'Người bệnh khám sức khỏe theo hợp đồng',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <!-- pageSize=\"50\" -->\n            <ng-container\n                *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1\">\n                <app-grid *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == true\" #gridChildHopDongChuaKham\n                    [gridColumns]=\"gridColumnsHopDongChuaKham\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                    [pageable]=\"false\" [showStt]=\"true\"\n                    urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoHopDong\"\n                    [additionalSearchString]=\"addtionStringDefault\" (extOnDataBound)=\"onDataBoundGridHopDong($event)\"\n                    [headerTemplate]=\"headerTemplate\">\n                </app-grid>\n                <!-- pageSize=\"50\" -->\n                <app-grid *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == true\" #gridChildHopDongDaKham\n                    [gridColumns]=\"gridColumnsHopDongDaKham\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                    [pageable]=\"false\" [showStt]=\"true\"\n                    urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoHopDong\"\n                    [additionalSearchString]=\"addtionStringDefault\" (extOnDataBound)=\"onDataBoundGridHopDong($event)\"\n                    [headerTemplate]=\"headerTemplate\">\n                </app-grid>\n\n\n            </ng-container>\n\n            <ng-container *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 2\">\n                <app-grid *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien == true\" #gridChildNhanVien\n                    [gridColumns]=\"gridColumnsNhanVienChuaKham\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                    [showStt]=\"true\" urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoNhanVien\"\n                    urlGetTotalPage=\"BaoCaoKhamDoanHopDong/GetTotalPageForGridAsyncTheoNhanVien\"\n                    [additionalSearchString]=\"addtionStringDefault\" [headerTemplate]=\"headerTemplate\">\n                </app-grid>\n\n                <app-grid *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien == true\" #gridChildNhanVien\n                    [gridColumns]=\"gridColumnsNhanVienDangKham\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                    [showStt]=\"true\" urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoNhanVien\"\n                    urlGetTotalPage=\"BaoCaoKhamDoanHopDong/GetTotalPageForGridAsyncTheoNhanVien\"\n                    [additionalSearchString]=\"addtionStringDefault\" [headerTemplate]=\"headerTemplate\">\n                </app-grid>\n\n                <app-grid *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien == true\" #gridChildNhanVien\n                    [gridColumns]=\"gridColumnsNhanVienDaKham\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                    [showStt]=\"true\" urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoNhanVien\"\n                    urlGetTotalPage=\"BaoCaoKhamDoanHopDong/GetTotalPageForGridAsyncTheoNhanVien\"\n                    [additionalSearchString]=\"addtionStringDefault\" [headerTemplate]=\"headerTemplate\">\n                </app-grid>\n            </ng-container>\n\n            <ng-template #tenHopDongKhamSucKhoeTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip>\n                    <a (click)=\"xemChiTiet(dataItem.Id)\">\n                        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.TenHopDongKhamSucKhoe}}\">\n                            {{dataItem.TenHopDongKhamSucKhoe}}</p>\n                    </a>\n                </div>\n            </ng-template>\n\n            <ng-template #tongFooterTemplate>\n                <span>Tổng :</span>\n            </ng-template>\n\n            <ng-template #tongSoFooterTemplate let-dataItem>\n                <p style=\"color: blue; font-weight: bold;\">\n                    <span>{{totalSoLuong('SoLuongNhanVienTheoHopDong') | number:'1.0':'vi-VN'}}</span>\n            </ng-template>\n            <ng-template #tongSoThucTeChuaKhamFooterTemplate let-dataItem>\n                <p style=\"color: blue; font-weight: bold;\">\n                    <span>{{totalSoLuong('SoLuongNhanVienKhamThucTe') | number:'1.0':'vi-VN'}}</span>\n            </ng-template>\n\n            <ng-template #tongSoThucTeFooterTemplate let-dataItem>\n                <p style=\"color: blue; font-weight: bold;\">\n                    <span>{{totalSoLuong('SoLuongNhanVienThucTe') | number:'1.0':'vi-VN'}}</span>\n            </ng-template>\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-dropdownlist fxFlex=\"150px\" [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai\" id=\"Loai\"\n                        label=\"Loại\" url=\"BaoCaoKhamDoanHopDong/GetLoaiNhanVienHoacHopDong\" popupSettings=\"null\"\n                        bind=\"true\" class=\"mt-5 ml-1 on-header\" [autoSelectFirstItem]=\"true\">\n                    </app-dropdownlist>\n                    <ng-container *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1\">\n                        <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham\" fxFlex.lt-md=\"auto\" fxHide.xs\n                            (modelChange)=\"daKhamChange($event,'Khong',1 )\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                            label=\"Chưa khám\">\n                        </app-checkbox>\n\n                        <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham\" fxFlex.lt-md=\"auto\" fxHide.xs\n                            (modelChange)=\"daKhamChange($event,'Co',1)\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                            label=\"Đã khám\">\n                        </app-checkbox>\n\n                        <ng-container *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham== true\">\n                            <app-datetimepicker fxFlex=\"245px\"\n                                [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1\"\n                                #tiepnhantu1 id=\"ThoiDiemTiepNhanTuFormat1\" label=\"Từ ngày\" class=\"ml-2 on-header\">\n                            </app-datetimepicker>\n                            <app-datetimepicker fxFlex=\"245px\"\n                                [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1\"\n                                #tiepnhanden1 id=\"ThoiDiemTiepNhanDenFormat1\" label=\"Đến ngày\" class=\"ml-2 on-header\">\n                            </app-datetimepicker>\n                        </ng-container>\n\n                    </ng-container>\n\n                    <ng-container *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 2\">\n                        <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien\" fxFlex.lt-md=\"auto\"\n                            fxHide.xs (modelChange)=\"daKhamChange($event,'ChuaKham',2)\" fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" label=\"Chưa khám\">\n                        </app-checkbox>\n\n                        <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien\" fxFlex.lt-md=\"auto\"\n                            fxHide.xs (modelChange)=\"daKhamChange($event,'DangKham',2)\" fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" label=\"Đang khám\">\n                        </app-checkbox>\n                        <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien\" fxFlex.lt-md=\"auto\"\n                            fxHide.xs (modelChange)=\"daKhamChange($event,'DaKham',2)\" fxLayout=\"row\"\n                            fxLayoutAlign=\"start center\" label=\"Đã khám\">\n                        </app-checkbox>\n\n                        <app-datetimepicker fxFlex=\"245px\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                            id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\">\n                        </app-datetimepicker>\n                        <app-datetimepicker fxFlex=\"245px\"\n                            [(model)]=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                            id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\">\n                        </app-datetimepicker>\n                    </ng-container>\n\n                    <div fxFlex=\"20%\" fxFlex.sm=\"32%\" class=\"pb-0\">\n                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                            style=\"margin-left: 5px;\" (click)=\"timKiem()\">Tìm kiếm</button>\n                    </div>\n\n                    <span fxFlex></span>\n\n                    <button *ngIf=\"baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 2\" class=\"ml-4 right\" color=\"primary\"\n                        style=\"right: 20px;\" type=\"button\" mat-raised-button mat-button (click)=\"xuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        Xuất Excel\n                    </button>\n\n\n                </div>\n            </ng-template>\n\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.html":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Báo cáo',Path:''}\n            ,{Title:'Khám đoàn',Path:''}\n            ,{Title:'Người bệnh khám sức khỏe theo hợp đồng',Path:'/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan'}\n            ,{Title:tinhTrang==0?'Danh sách chi tiết người bệnh chưa khám':'Danh sách chi tiết người bệnh đã khám',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridChildNhanVien [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"false\"\n                [checkboxAble]=\"false\" pageSize=\"50\" [showStt]=\"true\"\n                urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncTheoNhanVien\"\n                urlGetTotalPage=\"BaoCaoKhamDoanHopDong/GetTotalPageForGridAsyncTheoNhanVien\"\n                [additionalSearchString]=\"addtionStringDefault\" [headerTemplate]=\"headerTemplate\">\n            </app-grid>\n\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div fxFlex=\"100%\" fxFlex.sm=\"32%\" class=\"pb-0\">\n                        <button type=\"button\" color=\"default\" mat-raised-button mat-button class=\"ml-1\"\n                            (click)=\"quayLai()\" style=\"float: left;\">Quay lại</button>\n\n                        <button style=\"float: right;\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                            class=\"mr-1\" (click)=\"In()\">In</button>\n\n                        <button style=\"float: right;\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                            class=\"mr-1\" (click)=\"exportExcel()\">Xuất Excel</button>\n\n                    </div>\n\n\n                </div>\n            </ng-template>\n            <ng-template #thoiDiemThucHienTemplate let-dataItem>\n                {{dataItem.ThoiDiemThucHienDisplay}}\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZGljaC12dS1ob3AtZG9uZy1raGFtLWRvYW4vYmFvLWNhby1kaWNoLXZ1LWhvcC1kb25nLWtoYW0tZG9hbi1ob3AtZG9uZy1saXN0L2Jhby1jYW8tZGljaC12dS1ob3AtZG9uZy1raGFtLWRvYW4taG9wLWRvbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuHopDongKhamDoanHopDongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuHopDongKhamDoanHopDongListComponent", function() { return BaoCaoDichVuHopDongKhamDoanHopDongListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-dich-vu-hop-dong-kham-doan.model */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");

















let BaoCaoDichVuHopDongKhamDoanHopDongListComponent = class BaoCaoDichVuHopDongKhamDoanHopDongListComponent {
    constructor(apiService, authService, router, notificationService, dialog, route, location) {
        this.apiService = apiService;
        this.authService = authService;
        this.router = router;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDichVuTrongGoiKhamDoan;
        this.addtionStringDefault = null;
        this.gridColumnsHopDongChuaKham = [];
        this.gridColumnsHopDongDaKham = [];
        this.gridColumnsNhanVienChuaKham = [];
        this.gridColumnsNhanVienDangKham = [];
        this.gridColumnsNhanVienDaKham = [];
        this.urlGetDataNhanVien = "";
        this.urlGetTotalPageNhanVien = "";
        this.dataToSumSoLuong = [];
        this.baseRoute = "/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan";
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong = new _bao_cao_dich_vu_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoDichVuHopDongKhamDoanTheoHopDong"]();
        this.sort = [
            {
                field: "NgayHopDong",
                dir: "desc",
            },
        ];
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default.a;
    }
    totalSoLuong(field) {
        switch (field) {
            case 'SoLuongNhanVienTheoHopDong':
                return this.dataToSumSoLuong.reduce((sum, item) => sum + item.SoLuongNhanVienTheoHopDong, 0);
            case 'SoLuongNhanVienKhamThucTe':
                return this.dataToSumSoLuong.reduce((sum, item) => sum + item.SoLuongNhanVienKhamThucTe, 0);
            case 'SoLuongNhanVienThucTe':
                return this.dataToSumSoLuong.reduce((sum, item) => sum + item.SoLuongNhanVienThucTe, 0);
        }
    }
    ;
    ngOnInit() {
        let dateNow = new Date();
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != null) {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1, "dd/mm/yyyy");
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = null;
        }
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != null) {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1, "dd/mm/yyyy");
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = null;
        }
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != null) {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = null;
        }
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != null) {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = null;
        }
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
            this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        }
        else {
            this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        }
        this.backWithSearch();
        this.gridColumnsHopDongChuaKham = [
            { Field: 'NgayHopDong', Title: 'Ngày hợp đồng', Width: 116, Sortable: true, Hidden: true },
            { Field: 'TenCongTyKhamSucKhoe', Title: 'Tên công ty', Width: 116, Sortable: true, TemplateFooter: this.tongFooterTemplate },
            { Field: 'TenHopDongKhamSucKhoe', Title: 'Số hợp đồng', Width: 120, Sortable: true, Template: this.tenHopDongKhamSucKhoeTemplate },
            { Field: 'SoLuongNhanVienTheoHopDong', Title: 'Số lượng theo hợp đồng', Width: 195, Sortable: false, TemplateFooter: this.tongSoFooterTemplate },
            { Field: 'SoLuongNhanVienThucTe', Title: 'số lượng thực tế', Width: 254, Sortable: false, TemplateFooter: this.tongSoThucTeFooterTemplate },
        ];
        this.gridColumnsHopDongDaKham = [
            { Field: 'NgayHopDong', Title: 'Ngày hợp đồng', Width: 116, Sortable: true, Hidden: true },
            { Field: 'TenCongTyKhamSucKhoe', Title: 'Tên công ty', Width: 116, Sortable: true, TemplateFooter: this.tongFooterTemplate },
            { Field: 'TenHopDongKhamSucKhoe', Title: 'Số hợp đồng', Width: 120, Sortable: true, Template: this.tenHopDongKhamSucKhoeTemplate },
            { Field: 'SoLuongNhanVienTheoHopDong', Title: 'Số lượng theo hợp đồng', Width: 195, Sortable: false, TemplateFooter: this.tongSoFooterTemplate },
            { Field: 'SoLuongNhanVienThucTe', Title: 'số lượng thực tế', Width: 254, Sortable: false, TemplateFooter: this.tongSoThucTeFooterTemplate },
        ];
        this.gridColumnsNhanVienChuaKham = [
            { Field: 'MaBN', Title: 'mã người bệnh', Width: 120, Sortable: true },
            { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: true },
            { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
            { Field: 'NamSinh', Title: 'năm sinh', Width: 100, Sortable: false },
            { Field: 'GioiTinhDisplay', Title: 'giới tính', Width: 100, Sortable: false },
            { Field: 'DichVuChuaKham', Title: 'chuyên khoa không khám', Width: 254, Sortable: false, ShowTooltip: true },
            { Field: 'TenCongTyKhamSucKhoe', Title: 'tên công ty', Width: 254, Sortable: false },
        ];
        this.gridColumnsNhanVienDangKham = [
            { Field: 'MaBN', Title: 'mã người bệnh', Width: 120, Sortable: true },
            { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: true },
            { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
            { Field: 'NamSinh', Title: 'năm sinh', Width: 100, Sortable: false },
            { Field: 'GioiTinhDisplay', Title: 'giới tính', Width: 100, Sortable: false },
            { Field: 'DichVuChuaKham', Title: 'chuyên khoa chưa khám', Width: 254, Sortable: false, ShowTooltip: true },
            { Field: 'TenCongTyKhamSucKhoe', Title: 'tên công ty', Width: 254, Sortable: false },
        ];
        this.gridColumnsNhanVienDaKham = [
            { Field: 'MaBN', Title: 'mã người bệnh', Width: 120, Sortable: true },
            { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: true },
            { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
            { Field: 'NamSinh', Title: 'năm sinh', Width: 100, Sortable: false },
            { Field: 'GioiTinhDisplay', Title: 'giới tính', Width: 100, Sortable: false },
            { Field: 'DichVuDaKham', Title: 'chuyên khoa đã khám', Width: 254, Sortable: false, ShowTooltip: true },
            { Field: 'TenCongTyKhamSucKhoe', Title: 'tên công ty', Width: 254, Sortable: false },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem("additionalSearchStringBaoCaoDVTrongGoi");
                if (additionalSearchString != null) {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong = JSON.parse(additionalSearchString);
                    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
                        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != "") {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1);
                        }
                        else {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 = null;
                        }
                        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != "") {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1);
                        }
                        else {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 = null;
                        }
                    }
                    else {
                        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != "") {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat);
                        }
                        else {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat = null;
                        }
                        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != null && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != "") {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat = new Date(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat);
                        }
                        else {
                            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat = null;
                        }
                    }
                    this.addtionStringDefault = additionalSearchString;
                    if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
                        if (this.gridChildHopDongChuaKham != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == true) {
                            this.gridChildHopDongChuaKham.additionalSearchString = additionalSearchString;
                        }
                        if (this.gridChildHopDongDaKham != undefined && this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == true) {
                            this.gridChildHopDongDaKham.additionalSearchString = additionalSearchString;
                        }
                    }
                    hasLocalSearchString = true;
                }
            }
        }
        else {
            this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].removeItem("additionalSearchStringBaoCaoDVTrongGoi");
        }
    }
    daKhamChange(event, text, loai) {
        if (loai == 1) {
            if (text == 'Co') {
                if (event == true) {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham = false;
                }
                else {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham = true;
                }
            }
            else {
                if (event == true) {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham = false;
                }
                else {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham = true;
                }
            }
        }
        else {
            if (text == 'ChuaKham') {
                if (event == true) {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = false;
                }
                else {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
                }
            }
            else if (text == 'DangKham') {
                if (event == true) {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = false;
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = false;
                }
                else {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
                }
            }
            else {
                if (event == true) {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = false;
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
                }
                else {
                    this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
                }
            }
        }
        this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem("additionalSearchStringBaoCaoDVTrongGoi", this.addtionStringDefault);
        // this.timKiem();
    }
    onDataBoundGridHopDong(data) {
        this.dataToSumSoLuong = data.Data;
    }
    timKiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1 != null) {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat1, "dd/mm/yyyy");
            }
            else {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = null;
            }
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1 != null) {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat1, "dd/mm/yyyy");
            }
            else {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = null;
            }
            if (this.gridChildHopDongChuaKham != undefined) {
                var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
                this.gridChildHopDongChuaKham._additionalSearchString = queryString;
                this.gridChildHopDongChuaKham.search();
            }
            if (this.gridChildHopDongDaKham != undefined) {
                var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
                this.gridChildHopDongDaKham._additionalSearchString = queryString;
                this.gridChildHopDongDaKham.search();
            }
        }
        else {
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat != null) {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
            }
            else {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate = null;
            }
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat != null) {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
            }
            else {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate = null;
            }
            if (this.gridChildNhanVien != undefined) {
                var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
                this.gridChildNhanVien._additionalSearchString = queryString;
                this.gridChildNhanVien.search();
            }
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem("additionalSearchStringBaoCaoDVTrongGoi", queryString);
    }
    xemChiTiet(id) {
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == true) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                let url = '/xem-chi-tiet';
                this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: 0 } });
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == true) {
            if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
                let url = '/xem-chi-tiet';
                this.router.navigate([this.baseRoute + url], { queryParams: { Id: id, F: 1 } });
            }
            else {
                this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
            }
        }
    }
    xuatExcel() {
        if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.Loai == 1) {
            if ((this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham == false)
                && (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == null || this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKham == false)) {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKham = true;
            }
        }
        else {
            this.gridChildNhanVien._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
            if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien == true) {
                if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    this.apiService.postExportExcel("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanChuaKham", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
                        let dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
                        this.dialog.closeAll();
                    }, err => {
                        this.notificationService.showError(err.Message);
                        this.dialog.closeAll();
                    });
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                }
            }
            else if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien == true) {
                if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    this.apiService.postExportExcel("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanDaKham", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
                        let dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
                        this.dialog.closeAll();
                    }, err => {
                        this.notificationService.showError(err.Message);
                        this.dialog.closeAll();
                    });
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                }
            }
            else if (this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien == true) {
                if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    this.apiService.postExportExcel("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanDangKham", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
                        let dateTimeNow = new Date();
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
                        this.dialog.closeAll();
                    }, err => {
                        this.notificationService.showError(err.Message);
                        this.dialog.closeAll();
                    });
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        }
    }
};
BaoCaoDichVuHopDongKhamDoanHopDongListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("tenCongTyKhamSucKhoeTemplate", { static: true })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "tenCongTyKhamSucKhoeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("tenHopDongKhamSucKhoeTemplate", { static: true })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "tenHopDongKhamSucKhoeTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongFooterTemplate', { static: true })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "tongFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongSoFooterTemplate', { static: true })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "tongSoFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongSoThucTeFooterTemplate', { static: true })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "tongSoThucTeFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongSoThucTeChuaKhamFooterTemplate', { static: true })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "tongSoThucTeChuaKhamFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridChildNhanVien', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "gridChildNhanVien", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridChildHopDongChuaKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "gridChildHopDongChuaKham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridChildHopDongDaKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent.prototype, "gridChildHopDongDaKham", void 0);
BaoCaoDichVuHopDongKhamDoanHopDongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.scss")).default]
    })
], BaoCaoDichVuHopDongKhamDoanHopDongListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZGljaC12dS1ob3AtZG9uZy1raGFtLWRvYW4vYmFvLWNhby1kaWNoLXZ1LWhvcC1kb25nLWtoYW0tZG9hbi1uaGFuLXZpZW4tbGlzdC9iYW8tY2FvLWRpY2gtdnUtaG9wLWRvbmcta2hhbS1kb2FuLW5oYW4tdmllbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.ts":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.ts ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuHopDongKhamDoanNhanVienListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuHopDongKhamDoanNhanVienListComponent", function() { return BaoCaoDichVuHopDongKhamDoanNhanVienListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-dich-vu-hop-dong-kham-doan.model */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_phieu_dieu_tri_phieu_in_cong_khai_thuoc_popup_phieu_in_cong_khai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/danh-sach-dieu-tri-noi-tru/phieu-dieu-tri/phieu-in-cong-khai-thuoc-popup/phieu-in-cong-khai-thuoc-popup.component.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
















let BaoCaoDichVuHopDongKhamDoanNhanVienListComponent = class BaoCaoDichVuHopDongKhamDoanNhanVienListComponent {
    constructor(route, router, dialog, authService, apiService, ref, notificationService) {
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.authService = authService;
        this.apiService = apiService;
        this.ref = ref;
        this.notificationService = notificationService;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDichVuTrongGoiKhamDoan;
        this.baseRoute = "/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan";
        this.gridColumns = [];
        this.addtionStringDefault = null;
        this.baoCaoDichVuHopDongKhamDoanTheoHopDong = new _bao_cao_dich_vu_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoDichVuHopDongKhamDoanTheoHopDong"]();
        this.tinhTrang = 0;
        this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien = new _bao_cao_dich_vu_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_1__["InBaoCaoDichVuHopDongKhamDoanTheoNhanVien"]();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(param => {
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.HopDongKhamSucKhoeId = param['Id'];
            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringBaoCaoDVTrongGoi");
            if (additionalSearchString != null && additionalSearchString != "") {
                let baoCaoDichVuHopDong = JSON.parse(additionalSearchString);
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.FromDate1 = baoCaoDichVuHopDong.FromDate1;
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ToDate1 = baoCaoDichVuHopDong.ToDate1;
            }
            this.tinhTrang = parseInt(param['F']);
            if (this.tinhTrang == 0) {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = true;
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = false;
            }
            else {
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.ChuaKhamNhanVien = false;
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DangKhamNhanVien = false;
                this.baoCaoDichVuHopDongKhamDoanTheoHopDong.DaKhamNhanVien = true;
            }
            this.addtionStringDefault = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
        });
        this.gridColumns = [
            { Field: 'MaNV', Title: 'mã nhân viên', Width: 120, Sortable: true },
            { Field: 'MaBN', Title: 'mã bệnh nhân', Width: 120, Sortable: false },
            { Field: 'MaTN', Title: 'mã tiếp nhận', Width: 120, Sortable: false },
            { Field: 'HoTen', Title: 'Họ tên', Width: 195, Sortable: false },
            { Field: 'NamSinh', Title: 'ns', Width: 100, Sortable: false },
            { Field: 'GioiTinhDisplay', Title: 'gt', Width: 100, Sortable: false },
            {
                Field: 'ThoiDiemThucHien', Title: 'Ngày bn đến khám', Width: 100, Sortable: true,
                Template: this.thoiDiemThucHienTemplate
            },
        ];
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.baoCaoDichVuHopDongKhamDoanTheoHopDong.TinhTrang = this.tinhTrang;
            this.gridChildNhanVien._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanTheoHopDong);
            this.apiService.postExportExcel("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoanChiTiet", this.gridChildNhanVien._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    In() {
        this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.Datas = this.gridChildNhanVien.getAllDataFromDatasource();
        this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.HostingName = window.location.protocol + "//" + window.location.host;
        this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.Loai = this.tinhTrang;
        if (this.tinhTrang == 0) {
            this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.TrangThai = "chưa khám";
        }
        else {
            this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien.TrangThai = "đã khám";
        }
        var showDialog = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang tải dữ liệu...' }
        });
        this.ref.detectChanges();
        this.apiService.post("BaoCaoKhamDoanHopDong/InDanhSachNhanVien", this.inBaoCaoDichVuHopDongKhamDoanTheoNhanVien).subscribe((res) => {
            showDialog.close();
            this.dialog
                .open(_dieu_tri_noi_tru_danh_sach_dieu_tri_noi_tru_phieu_dieu_tri_phieu_in_cong_khai_thuoc_popup_phieu_in_cong_khai_thuoc_popup_component__WEBPACK_IMPORTED_MODULE_14__["PhieuInCongKhaiThuocPopupComponent"], {
                disableClose: true,
                width: "1200px",
                data: { Html: res, Title: "DANH SÁCH NGƯỜI BỆNH KHÁM SỨC KHỎE THEO HỢP ĐỒNG", LaPhieuThucHien: false },
            });
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
                showDialog.close();
            }
            ;
            showDialog.close();
        });
    }
    quayLai() {
        this.router.navigate(["/bao-cao/bao-cao-benh-nhan-kham-suc-khoe-doan"], { queryParams: { holdQuery: true } });
    }
};
BaoCaoDichVuHopDongKhamDoanNhanVienListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thoiDiemThucHienTemplate', { static: true })
], BaoCaoDichVuHopDongKhamDoanNhanVienListComponent.prototype, "thoiDiemThucHienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridChildNhanVien', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], static: false })
], BaoCaoDichVuHopDongKhamDoanNhanVienListComponent.prototype, "gridChildNhanVien", void 0);
BaoCaoDichVuHopDongKhamDoanNhanVienListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.scss")).default]
    })
], BaoCaoDichVuHopDongKhamDoanNhanVienListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuHopDongKhamDoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuHopDongKhamDoanRoutingModule", function() { return BaoCaoDichVuHopDongKhamDoanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.ts");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.ts");








const routes = [
    {
        path: '',
        component: _bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDichVuHopDongKhamDoanHopDongListComponent"],
        data: {
            title: 'DANH SÁCH BỆNH NHÂN KHÁM SỨC KHỎE THEO HỢP ĐỒNG',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoDichVuTrongGoiKhamDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet',
        component: _bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_7__["BaoCaoDichVuHopDongKhamDoanNhanVienListComponent"],
        data: {
            title: 'DANH SÁCH BỆNH NHÂN KHÁM SỨC KHỎE THEO HỢP ĐỒNG CHI TIẾT',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoDichVuTrongGoiKhamDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let BaoCaoDichVuHopDongKhamDoanRoutingModule = class BaoCaoDichVuHopDongKhamDoanRoutingModule {
};
BaoCaoDichVuHopDongKhamDoanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDichVuHopDongKhamDoanRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.model.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.model.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: BaoCaoDichVuHopDongKhamDoanTheoHopDong, InBaoCaoDichVuHopDongKhamDoanTheoNhanVien */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuHopDongKhamDoanTheoHopDong", function() { return BaoCaoDichVuHopDongKhamDoanTheoHopDong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoDichVuHopDongKhamDoanTheoNhanVien", function() { return InBaoCaoDichVuHopDongKhamDoanTheoNhanVien; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoDichVuHopDongKhamDoanTheoHopDong {
    constructor(Loai = 1, HopDongKhamSucKhoeId = null, TinhTrang = null, DaKham = false, ChuaKham = true, ChuaKhamNhanVien = false, DangKhamNhanVien = true, DaKhamNhanVien = false, ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null, FromDate = null, ToDate = null, ThoiDiemTiepNhanTuFormat1 = null, ThoiDiemTiepNhanDenFormat1 = null, FromDate1 = null, ToDate1 = null, SearchString = null) {
        this.Loai = Loai;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.TinhTrang = TinhTrang;
        this.DaKham = DaKham;
        this.ChuaKham = ChuaKham;
        this.ChuaKhamNhanVien = ChuaKhamNhanVien;
        this.DangKhamNhanVien = DangKhamNhanVien;
        this.DaKhamNhanVien = DaKhamNhanVien;
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ThoiDiemTiepNhanTuFormat1 = ThoiDiemTiepNhanTuFormat1;
        this.ThoiDiemTiepNhanDenFormat1 = ThoiDiemTiepNhanDenFormat1;
        this.FromDate1 = FromDate1;
        this.ToDate1 = ToDate1;
        this.SearchString = SearchString;
    }
}
class InBaoCaoDichVuHopDongKhamDoanTheoNhanVien {
    constructor(Loai = null, TrangThai = null, HostingName = null, Datas = null) {
        this.Loai = Loai;
        this.TrangThai = TrangThai;
        this.HostingName = HostingName;
        this.Datas = Datas;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoDichVuHopDongKhamDoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuHopDongKhamDoanModule", function() { return BaoCaoDichVuHopDongKhamDoanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-routing.module.ts");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list/bao-cao-dich-vu-hop-dong-kham-doan-nhan-vien-list.component.ts");
/* harmony import */ var _bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-hop-dong-kham-doan/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list/bao-cao-dich-vu-hop-dong-kham-doan-hop-dong-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _dieu_tri_noi_tru_dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../dieu-tri-noi-tru/dieu-tri-noi-tru.module */ "./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.module.ts");




















let BaoCaoDichVuHopDongKhamDoanModule = class BaoCaoDichVuHopDongKhamDoanModule {
};
BaoCaoDichVuHopDongKhamDoanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoDichVuHopDongKhamDoanNhanVienListComponent"],
            _bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_bao_cao_dich_vu_hop_dong_kham_doan_hop_dong_list_component__WEBPACK_IMPORTED_MODULE_5__["BaoCaoDichVuHopDongKhamDoanHopDongListComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_dich_vu_hop_dong_kham_doan_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoDichVuHopDongKhamDoanRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__["GridModule"],
            _dieu_tri_noi_tru_dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_19__["DieuTriNoiTruModule"]
        ],
        entryComponents: [
            _bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_bao_cao_dich_vu_hop_dong_kham_doan_nhan_vien_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoDichVuHopDongKhamDoanNhanVienListComponent"]
        ]
    })
], BaoCaoDichVuHopDongKhamDoanModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-dich-vu-hop-dong-kham-doan-bao-cao-dich-vu-hop-dong-kham-doan-module-es2015.js.map