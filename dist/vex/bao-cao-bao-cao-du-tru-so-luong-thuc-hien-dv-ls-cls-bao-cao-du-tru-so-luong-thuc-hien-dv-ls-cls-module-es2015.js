(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.html":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Dự trù số lượng người khám sức khỏe thực hiện DV LS-CLS', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"CongTyId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Chọn Đoàn\" [required]=\"true\"\n                    url=\"BaoCao/GetCongTys\" [(model)]=\"baoCaoSearch.CongTyId\" class=\"mt-1 on-header\"\n                    (modelChange)=\"changeCongTy($event)\" style=\"padding-left: 10px;\">\n                </app-combobox>\n\n                <app-combobox id=\"HopDongId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"chọn hợp đồng\" [required]=\"true\"\n                    url=\"BaoCao/GetHopDongKhamSucKhoes\" [(model)]=\"baoCaoSearch.HopDongId\" class=\"mt-1 on-header\"\n                    [reloadForGrid]=\"true\" [bind]=\"true\" (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                    [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + baoCaoSearch.CongTyId + '}', Take: 50}\">\n                </app-combobox>\n\n                <div fxFlex=\"30%\" fxFlex.sm=\"30%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"xem(true)\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"exportExcel()\">Xuất\n                        Excel</button>\n                </div>\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                        <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\"\n                            [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                            [useHeaderDefault]=\"false\"  [checkboxAble]=\"false\"\n                             [groups]=\"groups\" (extOnPageChange)=\"pageChange($event)\">\n                        </app-grid>\n                    </div>\n                     <!-- (extOnPageChange)=\"pageChange($event)\" -->\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                        <span>{{value}}</span>\n                    </ng-template>\n                    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </div>\n\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  table-layout: fixed;\n  width: 100%;\n  border-collapse: collapse;\n  border: 1px solid #dddddd;\n}\n\ntable th.stt {\n  width: 50px;\n}\n\ntable th.namsinh {\n  width: 80px;\n}\n\ntable th.gioiTinh {\n  width: 80px;\n}\n\ntable th.chieucao {\n  width: 80px;\n}\n\ntable th.cannang {\n  width: 80px;\n}\n\ntable th.huyetap {\n  width: 80px;\n}\n\ntable th.dichvu {\n  width: 200px;\n}\n\ntable th.phanloai {\n  width: 200px;\n}\n\ntable th.ketluan {\n  width: 200px;\n}\n\ntable th.denghi {\n  width: 200px;\n}\n\ntable th, table td {\n  width: 150px;\n  text-align: left;\n  padding: 3px;\n}\n\ntr:nth-child(even) {\n  background-color: #dddddd;\n}\n\ntr:hover {\n  background-color: #f5f5f5;\n}\n\nul.inline > li {\n  padding-right: 10px !important;\n  padding-bottom: 0.625em;\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdS10cnUtc28tbHVvbmctdGh1Yy1oaWVuLWR2LWxzLWNscy9iYW8tY2FvLWR1LXRydS1zby1sdW9uZy10aHVjLWhpZW4tZHYtbHMtY2xzLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWR1LXRydS1zby1sdW9uZy10aHVjLWhpZW4tZHYtbHMtY2xzXFxiYW8tY2FvLWR1LXRydS1zby1sdW9uZy10aHVjLWhpZW4tZHYtbHMtY2xzLWxpc3RcXGJhby1jYW8tZHUtdHJ1LXNvLWx1b25nLXRodWMtaGllbi1kdi1scy1jbHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdS10cnUtc28tbHVvbmctdGh1Yy1oaWVuLWR2LWxzLWNscy9iYW8tY2FvLWR1LXRydS1zby1sdW9uZy10aHVjLWhpZW4tZHYtbHMtY2xzLWxpc3QvYmFvLWNhby1kdS10cnUtc28tbHVvbmctdGh1Yy1oaWVuLWR2LWxzLWNscy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZHUtdHJ1LXNvLWx1b25nLXRodWMtaGllbi1kdi1scy1jbHMvYmFvLWNhby1kdS10cnUtc28tbHVvbmctdGh1Yy1oaWVuLWR2LWxzLWNscy1saXN0L2Jhby1jYW8tZHUtdHJ1LXNvLWx1b25nLXRodWMtaGllbi1kdi1scy1jbHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbnRhYmxlIHRoLnN0dCB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG50YWJsZSB0aC5uYW1zaW5oIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbnRhYmxlIHRoLmdpb2lUaW5oIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbnRhYmxlIHRoLmNoaWV1Y2FvIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbnRhYmxlIHRoLmNhbm5hbmcge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguaHV5ZXRhcCB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50YWJsZSB0aC5kaWNodnUge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnRhYmxlIHRoLnBoYW5sb2FpIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG50YWJsZSB0aC5rZXRsdWFuIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG50YWJsZSB0aC5kZW5naGkge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnRhYmxlIHRoLCB0YWJsZSB0ZCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbnVsLmlubGluZSA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59IiwidGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxudGFibGUgdGguc3R0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbnRhYmxlIHRoLm5hbXNpbmgge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguZ2lvaVRpbmgge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguY2hpZXVjYW8ge1xuICB3aWR0aDogODBweDtcbn1cblxudGFibGUgdGguY2FubmFuZyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG50YWJsZSB0aC5odXlldGFwIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbnRhYmxlIHRoLmRpY2h2dSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGgucGhhbmxvYWkge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnRhYmxlIHRoLmtldGx1YW4ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbnRhYmxlIHRoLmRlbmdoaSB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxudGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbnRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxudWwuaW5saW5lID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDuTruSoLuongThucHienDvLsClsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuTruSoLuongThucHienDvLsClsListComponent", function() { return BaoCaoDuTruSoLuongThucHienDvLsClsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.model */ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.model.ts");













let BaoCaoDuTruSoLuongThucHienDvLsClsListComponent = class BaoCaoDuTruSoLuongThucHienDvLsClsListComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoDuTruSoLuongThucHienDVLSCLS"]();
        // inBaoCaoXuatNhapTon: InBaoCaoXuatNhapTonVT  = new InBaoCaoXuatNhapTonVT ();
        this.disableXemXuatExcel = false;
        this.pageSize = 50;
        this.skip = 0;
        this.html = null;
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.groups = [{ field: 'NhomDichVu' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].KhamDoanThongKeSoNguoiKhamSucKhoeLSCLS;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
            { Field: "NhomDichVu", Title: "NhomDichVu", Width: 180, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "TenDV", Title: "Tên DV", Width: 120 },
            { Field: "SLNam", Title: "Nam", Width: 120 },
            { Field: "SLNu", Title: "Nữ", Width: 120 },
            {
                Field: "Tong", Title: "Tổng", Width: 120
            }
        ];
    }
    exportExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            if (this.baoCaoSearch.CongTyId == null || this.baoCaoSearch.HopDongId == null) {
                this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
                return;
            }
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoDuTruSoLuongNguoiThucHienDvLSCLS", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDuTruSoLuongNguoiThucHienDvLSCLS" + dateTimeNow.getFullYear() + ".xlsx");
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
    lastValueFormat(str) {
        let strGroup = str.split(':');
        if (strGroup.length != 0) {
            return strGroup[strGroup.length];
        }
    }
    xem(event) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            if (this.baoCaoSearch.CongTyId == null || this.baoCaoSearch.HopDongId == null) {
                this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
                return;
            }
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang loading ...' }
            });
            if (event != null && event != true) {
                this.baoCaoSearch.Skip = event;
            }
            this.apiService.post("BaoCao/GetHTMLDuTruSoLuongNguoiThucHienDvLSCLS", this.baoCaoSearch).subscribe(resultData => {
                if (resultData !== undefined && resultData != null && resultData != "") {
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridDataSource = {
                        data: resultData.Data,
                        total: resultData.TotalRowCount
                    };
                    this.dialog.closeAll();
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    changeLookupHopDong(event) {
        if (event && event.length > 0 && this.baoCaoSearch.CongTyId && !this.baoCaoSearch.HopDongId) {
            this.baoCaoSearch.HopDongId = event[0].KeyId;
        }
        this.baoCaoSearch.Skip = 0;
        this.setSkip();
    }
    changeCongTy(event) {
        this.baoCaoSearch.CongTyId = event;
        this.baoCaoSearch.HopDongId = null;
        this.baoCaoSearch.Skip = 0;
        this.setSkip();
    }
    setSkip() {
        this.gridChild._skip = 0;
    }
    pageChange(event) {
        this.xem(event);
    }
};
BaoCaoDuTruSoLuongThucHienDvLsClsListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
], BaoCaoDuTruSoLuongThucHienDvLsClsListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], BaoCaoDuTruSoLuongThucHienDvLsClsListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoDuTruSoLuongThucHienDvLsClsListComponent.prototype, "sttTemplate", void 0);
BaoCaoDuTruSoLuongThucHienDvLsClsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.scss")).default]
    })
], BaoCaoDuTruSoLuongThucHienDvLsClsListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-routing.module.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-routing.module.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule", function() { return BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component */ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDuTruSoLuongThucHienDvLsClsListComponent"],
        data: {
            title: 'Dự trù số lượng người khám sức khỏe thực hiện dịch vụ lâm sàng - cận lâm sàng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanThongKeSoNguoiKhamSucKhoeLSCLS,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule = class BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule {
};
BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.model.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.model.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: BaoCaoDuTruSoLuongThucHienDVLSCLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuTruSoLuongThucHienDVLSCLS", function() { return BaoCaoDuTruSoLuongThucHienDVLSCLS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoDuTruSoLuongThucHienDVLSCLS {
    constructor(CongTyId = null, HopDongId = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.CongTyId = CongTyId;
        this.HopDongId = HopDongId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.module.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: BaoCaoDuTruSoLuongThucHienDvLsClsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuTruSoLuongThucHienDvLsClsModule", function() { return BaoCaoDuTruSoLuongThucHienDvLsClsModule; });
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
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component */ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-list.component.ts");
/* harmony import */ var _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.service */ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.service.ts");
/* harmony import */ var _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-routing.module.ts");





















let BaoCaoDuTruSoLuongThucHienDvLsClsModule = class BaoCaoDuTruSoLuongThucHienDvLsClsModule {
};
BaoCaoDuTruSoLuongThucHienDvLsClsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDuTruSoLuongThucHienDvLsClsListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_routing_module__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDuTruSoLuongThucHienDvLsClsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
        ],
        providers: [
            _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_service__WEBPACK_IMPORTED_MODULE_19__["BaoCaoDuTruSoLuongThucHienDvLsClsService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_du_tru_so_luong_thuc_hien_dv_ls_cls_service__WEBPACK_IMPORTED_MODULE_19__["BaoCaoDuTruSoLuongThucHienDvLsClsService"] },
        ]
    })
], BaoCaoDuTruSoLuongThucHienDvLsClsModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.service.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls/bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls.service.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: BaoCaoDuTruSoLuongThucHienDvLsClsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuTruSoLuongThucHienDvLsClsService", function() { return BaoCaoDuTruSoLuongThucHienDvLsClsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoDuTruSoLuongThucHienDvLsClsService = class BaoCaoDuTruSoLuongThucHienDvLsClsService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoDuTruSoLuongThucHienDvLsClsService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoDuTruSoLuongThucHienDvLsClsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoDuTruSoLuongThucHienDvLsClsService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-bao-cao-du-tru-so-luong-thuc-hien-dv-ls-cls-module-es2015.js.map