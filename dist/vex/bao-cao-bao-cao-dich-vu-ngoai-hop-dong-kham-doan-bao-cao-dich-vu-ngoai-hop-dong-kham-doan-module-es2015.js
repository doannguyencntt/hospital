(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-dich-vu-ngoai-hop-dong-kham-doan-bao-cao-dich-vu-ngoai-hop-dong-kham-doan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.html":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.html ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Báo cáo',Path:''}\n            ,{Title:'Khám đoàn',Path:''}\n            ,{Title:'Dịch Vụ ngoài hợp đồng KSK',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n\n            <app-grid #gridChild [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"50\" [showStt]=\"true\"\n                urlGetData=\"BaoCaoKhamDoanHopDong/GetDataForGridAsyncDichVuNgoai\" [sort]=\"sort\"\n                urlGetTotalPage=\"BaoCaoKhamDoanHopDong/GetTotalPageForGridAsyncDichVuNgoai\"\n                [headerTemplate]=\"headerTemplate\"  (extOnDataBound)=\"onDataBound($event)\">\n            </app-grid>\n\n            <ng-template #donGiaTemplate let-dataItem>\n                <p> {{dataItem.DonGiaBV | number:'0.2-2':'vi-VN'}}</p>\n            </ng-template>\n\n            <ng-template #donGiaMoiTemplate let-dataItem>\n                <p> {{dataItem.DonGiaMoi | number:'0.2-2':'vi-VN'}}</p>\n            </ng-template>\n\n            <ng-template #tienMienGiamTemplate let-dataItem>\n                <p> {{dataItem.SoTienMienGiam | number:'0.2-2':'vi-VN'}}</p>\n            </ng-template>\n\n            <ng-template #congNoTemplate let-dataItem>\n                <p class=\"{{dataItem.MaTN}} {{dataItem.Id}}\"> {{dataItem.TongSoTienCongNo | number:'0.2-2':'vi-VN'}}</p>\n            </ng-template>\n\n            <ng-template #thanhTienTemplate let-dataItem>\n                {{dataItem.ThanhTienThucThu | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-combobox id=\"CongTyKhamSucKhoeId\" fxFlex=\"250px\" fxFlex.sm=\"auto\" label=\"Tên công ty\"\n                        [required]=\"true\" class=\"mt-1 on-header\" url=\"KhamDoan/GetCongTys\" style=\"padding-top: 20px;\"\n                        popupSettings=\"null\" (modelChange)=\"congTyKhamSucKhoeChange($event)\"\n                        [(model)]=\"baoCaoDichVuHopDongKhamDoanNgoaiHopDong.CongTyKhamSucKhoeId\">\n                    </app-combobox>\n\n                    <app-combobox id=\"HopDongKhamSucKhoeId\" fxFlex=\"10%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\"\n                        [required]=\"true\" url=\"KhamDoan/GetHopDongKhamSucKhoes\" class=\"mt-1 on-header\"\n                        style=\"padding-top: 20px;margin-left: 5px;\" popupSettings=\"null\"\n                        [(model)]=\"baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId\"\n                        [autoSelectFirstItem]=\"true\" [bind]=\"true\" [reloadForGrid]=\"true\"\n                        (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                        [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + baoCaoDichVuHopDongKhamDoanNgoaiHopDong.CongTyKhamSucKhoeId + '}', Take: 50}\">\n                    </app-combobox>\n\n                    <!-- <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n                        fxFlex.sm=\"auto\" [(model)]=\"baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate\"\n                        label=\"Từ ngày - đến ngày\" class=\"mt-1 on-header\">\n                    </app-daterangepicker> -->\n                    <app-datetimepicker fxFlex=\"245px\"\n                        [(model)]=\"baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanTuFormat\" #tiepnhantu1\n                        id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\">\n                    </app-datetimepicker>\n                    <app-datetimepicker fxFlex=\"245px\"\n                        [(model)]=\"baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanDenFormat\" #tiepnhanden1\n                        id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\">\n                    </app-datetimepicker>\n\n                    <div fxFlex=\"20%\" fxFlex.sm=\"32%\" class=\"pb-0\">\n                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                            style=\"margin-left: 5px;\" (click)=\"timKiem()\">Tìm kiếm</button>\n                    </div>\n                    <span fxFlex></span>\n\n                    <button (click)=\"xuatExcel()\" class=\"mr-1\" fxFlex=\"none\" color=\"primary\" mat-raised-button\n                        mat-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                        Xuất Excel\n                    </button>\n\n                    <!-- <button class=\"ml-4 right\" style=\"right: 20px; float: right;\" type=\"button\" mat-icon-button\n                    (click)=\"xuatExcel()\" kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button> -->\n                </div>\n\n\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZGljaC12dS1uZ29haS1ob3AtZG9uZy1raGFtLWRvYW4vYmFvLWNhby1kaWNoLXZ1LW5nb2FpLWhvcC1kb25nLWtoYW0tZG9hbi1saXN0L2Jhby1jYW8tZGljaC12dS1uZ29haS1ob3AtZG9uZy1raGFtLWRvYW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuNgoaiHopDongKhamDoanListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuNgoaiHopDongKhamDoanListComponent", function() { return BaoCaoDichVuNgoaiHopDongKhamDoanListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../bao-cao-dich-vu-ngoai-hop-dong-kham-doan.model */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan.model.ts");
















let BaoCaoDichVuNgoaiHopDongKhamDoanListComponent = class BaoCaoDichVuNgoaiHopDongKhamDoanListComponent {
    constructor(authService, router, apiService, dialog, location, notificationService, route) {
        this.authService = authService;
        this.router = router;
        this.apiService = apiService;
        this.dialog = dialog;
        this.location = location;
        this.notificationService = notificationService;
        this.route = route;
        this.baseRoute = "/kham-doan/ket-luan-kham-suc-khoe-doan";
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BaoCaoDichVuNgoaiGoiKhamDoan;
        this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong = new _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_model__WEBPACK_IMPORTED_MODULE_15__["BaoCaoDichVuHopDongKhamDoanNgoaiHopDong"]();
        this.addtionStringDefault = null;
        this.gridColumns = [];
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.lanDauLoadData = true;
        this.changeDataCongTy = false;
        this.sort = [
            {
                field: "MaBN",
                dir: "desc",
            },
        ];
    }
    ngOnInit() {
        this.gridColumns = [
            { Field: "MaNV", Title: "Mã NV", Width: 70, Sortable: true, ShowTooltip: true },
            { Field: "MaBN", Title: "Mã NB", Width: 80, Sortable: true, ShowTooltip: true },
            { Field: "MaTN", Title: "Mã TN", Width: 90, Sortable: true },
            { Field: "HoTen", Title: "Họ tên", Width: 120, Sortable: true, ShowTooltip: true },
            { Field: "GioiTinhDisplay", Title: "GIỚI TÍNH", Width: 50, Sortable: false },
            { Field: "NamSinh", Title: "NĂM SINH", Width: 50, Sortable: true },
            { Field: "TenDichVu", Title: "Dịch vụ", MinWidth: 100, Sortable: true, ShowTooltip: true },
            // { Field: "SoLan", Title: "SL", Width: 15, Sortable: true },
            { Field: "DonGiaBV", Title: "Đơn giá BV", Width: 100, Sortable: true, Template: this.donGiaTemplate },
            { Field: "DonGiaMoi", Title: "Đơn giá mới", Width: 40, Sortable: true, Template: this.donGiaMoiTemplate },
            { Field: "SoTienMienGiam", Title: "Số tiền được miễn giảm", Width: 100, Sortable: true, Template: this.tienMienGiamTemplate },
            { Field: "ThanhTienThucThu", Title: "Số tiền Thực thu", Width: 100, Sortable: true, Template: this.thanhTienTemplate },
            { Field: "TongSoTienCongNo", Title: "Công nợ", Width: 100, Sortable: true, Template: this.congNoTemplate },
        ];
        this.lanDauLoadData = false;
    }
    onDataBound(dataSource) {
        if (dataSource != undefined && dataSource.Data.length > 0) {
            setTimeout(function () {
                var maTnOld = "";
                var idOld = "";
                dataSource.Data.forEach(element => {
                    if (element.MaTN == maTnOld && jQuery("." + element.MaTN + "." + element.Id).length > 0) {
                        jQuery("." + maTnOld + "." + idOld).parent().css({ "border-bottom": "none" });
                        jQuery("." + element.MaTN + "." + element.Id).parent().css({ "border-left": "1px solid rgba(0,0,0,0.12)" });
                    }
                    else {
                        if (maTnOld != "" && idOld != "" && jQuery("." + maTnOld + "." + idOld).length > 0) {
                            jQuery("." + maTnOld + "." + idOld).parent().css({ "border-bottom": "1px solid rgba(0,0,0,0.12)" });
                            jQuery("." + element.MaTN + "." + element.Id).parent().css({ "border-left": "none" });
                        }
                    }
                    maTnOld = element.MaTN;
                    idOld = element.Id;
                });
            });
        }
    }
    congTyKhamSucKhoeChange(id) {
        this.changeDataCongTy = true;
        if (id != undefined && id != null) {
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = null;
        }
    }
    timKiem() {
        // if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate != null && this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.startDate != null) {
        //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.TuNgay = CommonService.formatDateTime(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.startDate, "mm/dd/yyyy");
        // }
        // else {
        //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.TuNgay = null;
        // }
        // if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate != null && this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.endDate != null) {
        //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.DenNgay = CommonService.formatDateTime(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.endDate, "mm/dd/yyyy");
        // }
        // else {
        //   this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.RangeFromDate.DenNgay = null;
        // }
        if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanTuFormat != null) {
            this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.FromDate = null;
        }
        if (this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanDenFormat != null) {
            this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.ToDate = null;
        }
        var queryString = JSON.stringify(this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    changeLookupHopDong(event) {
        if (!this.lanDauLoadData && this.changeDataCongTy) {
            if (event && event.length > 0 && this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.CongTyKhamSucKhoeId) {
                if (!this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId) {
                    this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = event[0].KeyId;
                }
                else {
                    this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = event[0].KeyId;
                }
                this.changeDataCongTy = false;
                this.timKiem();
            }
            else {
                this.baoCaoDichVuHopDongKhamDoanNgoaiHopDong.HopDongKhamSucKhoeId = null;
                this.changeDataCongTy = false;
                this.timKiem();
            }
        }
    }
    xuatExcel() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("BaoCaoKhamDoanHopDong/ExportBaoCaoDichVuTrongGoiKhamDoan", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDichVuTrongGoiKhamDoan" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaMoiTemplate', { static: true })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.prototype, "donGiaMoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienMienGiamTemplate', { static: true })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.prototype, "tienMienGiamTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNoTemplate', { static: true })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent.prototype, "congNoTemplate", void 0);
BaoCaoDichVuNgoaiHopDongKhamDoanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.scss")).default]
    })
], BaoCaoDichVuNgoaiHopDongKhamDoanListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-routing.module.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-routing.module.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule", function() { return BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDichVuNgoaiHopDongKhamDoanListComponent"],
        data: {
            title: 'DANH SÁCH DỊCH VỤ NGOÀI HỢP ĐỒNG KHÁM SỨC KHỎE',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoDichVuNgoaiGoiKhamDoan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule = class BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule {
};
BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan.model.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan.model.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuHopDongKhamDoanNgoaiHopDong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuHopDongKhamDoanNgoaiHopDong", function() { return BaoCaoDichVuHopDongKhamDoanNgoaiHopDong; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class BaoCaoDichVuHopDongKhamDoanNgoaiHopDong {
    constructor(CongTyKhamSucKhoeId = null, HopDongKhamSucKhoeId = null, SearchString = null, RangeFromDate = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](), ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null, FromDate = null, ToDate = null) {
        this.CongTyKhamSucKhoeId = CongTyKhamSucKhoeId;
        this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
        this.SearchString = SearchString;
        this.RangeFromDate = RangeFromDate;
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan.module.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan.module.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: BaoCaoDichVuNgoaiHopDongKhamDoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuNgoaiHopDongKhamDoanModule", function() { return BaoCaoDichVuNgoaiHopDongKhamDoanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-dich-vu-ngoai-hop-dong-kham-doan-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-routing.module.ts");
/* harmony import */ var _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dich-vu-ngoai-hop-dong-kham-doan/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list/bao-cao-dich-vu-ngoai-hop-dong-kham-doan-list.component.ts");
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


















let BaoCaoDichVuNgoaiHopDongKhamDoanModule = class BaoCaoDichVuNgoaiHopDongKhamDoanModule {
};
BaoCaoDichVuNgoaiHopDongKhamDoanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_bao_cao_dich_vu_ngoai_hop_dong_kham_doan_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoDichVuNgoaiHopDongKhamDoanListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_dich_vu_ngoai_hop_dong_kham_doan_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoDichVuNgoaiHopDongKhamDoanRoutingModule"],
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
], BaoCaoDichVuNgoaiHopDongKhamDoanModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
  \**********************************************************************************************/
/*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function() { return YeuCauMuaVatTuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function() { return YeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function() { return YeuCauMuaVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function() { return PhieuYeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function() { return ThongTinVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function() { return YeuCauMuaVatTuChiTietValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class YeuCauMuaVatTuGridVo {
    constructor(SoPhieu = null, TenNhanVienYeuCau = null, NgayYeuCauTuFormat = null, NgayYeuCauDenFormat = null, RangeFromDate = new RangeDate(), FromDate = null, ToDate = null, ChoDuyet = true, DaDuyet = false, TuChoiDuyet = false, TuNgay = null, DenNgay = null, SearchString = null) {
        this.SoPhieu = SoPhieu;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
        this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
        this.RangeFromDate = RangeFromDate;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class YeuCauMuaVatTu {
    constructor(Id = 0, SoPhieu = null, KhoId = null, NhanVienYeuCauId = null, NgayYeuCau = null, KyDuTruMuaDuocPhamVatTuId = null, GhiChu = null, TruongKhoaId = null, TruongKhoaDuyet = null, TenKho = null, TenNhanVienYeuCau = null, TenNhomDuTru = null, TenKyDuTru = null, NgayTaiKhoa = null, NgayKhoDuoc = null, NgayGiamDoc = null, TrangThai = null, TenTruongKhoa = null, NgayTruongKhoaDuyet = null, TenNhanVienKhoDuoc = null, NgayKhoDuocDuyet = null, TenGiamDoc = null, NgayGiamDocDuyet = null, LyDoTruongKhoaTuChoi = null, DuTruMuaVatTuChiTiets = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KhoId = KhoId;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NgayYeuCau = NgayYeuCau;
        this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
        this.GhiChu = GhiChu;
        this.TruongKhoaId = TruongKhoaId;
        this.TruongKhoaDuyet = TruongKhoaDuyet;
        this.TenKho = TenKho;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.TenNhomDuTru = TenNhomDuTru;
        this.TenKyDuTru = TenKyDuTru;
        this.NgayTaiKhoa = NgayTaiKhoa;
        this.NgayKhoDuoc = NgayKhoDuoc;
        this.NgayGiamDoc = NgayGiamDoc;
        this.TrangThai = TrangThai;
        this.TenTruongKhoa = TenTruongKhoa;
        this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
        this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
        this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
        this.TenGiamDoc = TenGiamDoc;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.DuTruMuaVatTuChiTiets = DuTruMuaVatTuChiTiets;
    }
}
class YeuCauMuaVatTuChiTiet {
    constructor(STT = null, Id = 0, VatTuId = null, LaVatTuBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongDuTruTaiKhoaDuyet = null, NhomDieuTriDuPhong = null, GhiChu = null, DuTruMuaVatTuTheoKhoaChiTietId = null, DuTruMuaVatTuKhoDuocChiTietId = null) {
        this.STT = STT;
        this.Id = Id;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.GhiChu = GhiChu;
        this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
        this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
    }
}
class PhieuYeuCauMuaVatTu {
    constructor(DuTruMuaVatTuId = 0, HostingName = null, Header = null, TrangThai = null) {
        this.DuTruMuaVatTuId = DuTruMuaVatTuId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.TrangThai = TrangThai;
    }
}
class ThongTinVatTuChiTiet {
    constructor(STT = 0, Id = 0, NhomVatTuId = null, VatTuId = null, LaVatTuBHYT = null, Ma = null, DVT = null, QuyCach = null, NhaSX = null, NuocSX = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongTonDuTru = null, SoLuongTonKhoTong = null, SoLuongChuaNhapVeHDT = null, // Hợp đồng thầu
    ThongTinChiTietTonKhoTongs = [], ThongTinChiTietTonHDTs = [], LoaiVatTu = null, TenLoaiVatTu = null, Ten = null, SLTonDuTru = null, SLTonKhoTong = null, SLChuaNhapVeHDT = null, SoLuongDuTruTaiKhoaDuyet = null, SoLuongDuTruKhoaDuocDuyet = null, SoLuongDuTruGiamDocDuyet = null, KhoId = null, IsThemVatTu = false, GhiChu = null, YeuCauMuaVatTuChiTietValidators = []) {
        this.STT = STT;
        this.Id = Id;
        this.NhomVatTuId = NhomVatTuId;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.Ma = Ma;
        this.DVT = DVT;
        this.QuyCach = QuyCach;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongTonDuTru = SoLuongTonDuTru;
        this.SoLuongTonKhoTong = SoLuongTonKhoTong;
        this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
        this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
        this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
        this.LoaiVatTu = LoaiVatTu;
        this.TenLoaiVatTu = TenLoaiVatTu;
        this.Ten = Ten;
        this.SLTonDuTru = SLTonDuTru;
        this.SLTonKhoTong = SLTonKhoTong;
        this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
        this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
        this.KhoId = KhoId;
        this.IsThemVatTu = IsThemVatTu;
        this.GhiChu = GhiChu;
        this.YeuCauMuaVatTuChiTietValidators = YeuCauMuaVatTuChiTietValidators;
    }
}
class YeuCauMuaVatTuChiTietValidator {
    constructor(VatTuId = 0, LaVatTuBHYT = null) {
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
    }
}


/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-dich-vu-ngoai-hop-dong-kham-doan-bao-cao-dich-vu-ngoai-hop-dong-kham-doan-module-es2015.js.map