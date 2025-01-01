(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-thuoc-sap-het-han-dung-bao-cao-thuoc-sap-het-han-dung-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Thuốc Sắp Hết Hạn Dùng', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [showStt]=\"true\" [groups]=\"groups\"\n                (extOnPageChange)=\"pageChange($event)\" (extOnSearch)=\"seachChange($event)\" >\n            </app-grid>\n\n            <ng-template #thanhTienTemplate let-dataItem>\n                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #thanhTienTemplateFooter let-aggregates>\n                <span style=\"color:#000;text-align: left;\">{{totalThanhTien() | number:'0.2-2':'vi-VN'}}</span>\n            </ng-template>\n\n            <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"\n                let-aggregates=\"aggregates\">\n                <ng-container\n                    *ngTemplateOutlet=\"nhomGroupHeaderTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                </ng-container>\n            </ng-template>\n\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}}</strong>\n            </ng-template>\n            <!-- <ng-template #giamPhiTemplateGroupFooter let-aggregates>\n                {{aggregates.GiamPhi.sum | number}}\n            </ng-template> -->\n\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\" fxFlex.sm=\"auto\"\n                    class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" bind=\"true\" url=\"TonKho/GetKhoTatCa\"\n                    [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGh1b2Mtc2FwLWhldC1oYW4tZHVuZy9iYW8tY2FvLXRodW9jLXNhcC1oZXQtaGFuLWR1bmctbGlzdC9iYW8tY2FvLXRodW9jLXNhcC1oZXQtaGFuLWR1bmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: BaoCaoThuocSapHetHanDungListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuocSapHetHanDungListComponent", function() { return BaoCaoThuocSapHetHanDungListComponent; });
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
/* harmony import */ var _bao_cao_thuoc_sap_het_han_dung_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-thuoc-sap-het-han-dung.model */ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");














let BaoCaoThuocSapHetHanDungListComponent = class BaoCaoThuocSapHetHanDungListComponent {
    constructor(apiService, dialog, notificationService, authService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.baoCaoSearch = new _bao_cao_thuoc_sap_het_han_dung_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoThuocSapHetHanSearch"]();
        this.inBaoCaoThuocSapHetHan = new _bao_cao_thuoc_sap_het_han_dung_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoThuocSapHetHan"]();
        this.groups = [{ field: 'NhomThuoc' }];
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.pageSize = 50;
        this.skip = 0;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoThuocSapHetHanDung;
        if (window.location.protocol == "http:") {
            this.inBaoCaoThuocSapHetHan.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoThuocSapHetHan.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "MaDuoc", Title: "Mã dược", Width: 100 },
            { Field: "TenThuoc", Title: "Tên thuốc, Hàm lượng", Width: 100 },
            { Field: "DVT", Title: "Đơn vị tính", Width: 100 },
            { Field: "SoLo", Title: "Số lô", Width: 100 },
            { Field: "HanDungStr", Title: "Hạn dùng", Width: 100 },
            { Field: "SoLuong", Title: "Số lượng", Width: 100 },
            { Field: "ThanhTien", Title: "Tổng tiền", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.thanhTienTemplateFooter },
            { Field: "NhomThuoc", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
            this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
        }
    }
    totalThanhTien() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }
    seachChange(event) {
        this.skip = 0;
        this.XemBaoCao();
    }
    pageChange(event) {
        this.skip = event;
        this.XemBaoCao();
    }
    XemBaoCao() {
        this.gridChild._isLoadingTotalPage = true;
        this.gridChild._isLoading = true;
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            this.gridChild._isLoadingTotalPage = false;
            this.gridChild._isLoading = false;
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            this.gridChild._isLoadingTotalPage = false;
            this.gridChild._isLoading = false;
            return;
        }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.apiService.post("BaoCao/GetDataBaoCaoThuocSapHetHanForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                // if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
                // {
                //  this.showPrintExport = true;
                // }
                // this.showGrid = true;
                // this.gridDataSource.data = [...resultData.Data];
                // this.gridDataSource.total = this.gridDataSource.data.length;
                this.gridDataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                var takeTo = +this.skip + +this.pageSize;
                this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);
                this.gridChild.setDataSource();
                // this.gridView = process(resultData.Data, { group: this.groups });
                this.gridChild._isLoadingTotalPage = false;
                this.gridChild._isLoading = false;
            }
        });
    }
    exportExcel() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoThuocSapHetHan", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoThuocSapHetHan" + dateTimeNow.getFullYear() + ".xlsx");
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
BaoCaoThuocSapHetHanDungListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: true })
], BaoCaoThuocSapHetHanDungListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplate", { static: true })
], BaoCaoThuocSapHetHanDungListComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplateFooter", { static: true })
], BaoCaoThuocSapHetHanDungListComponent.prototype, "thanhTienTemplateFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
], BaoCaoThuocSapHetHanDungListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
BaoCaoThuocSapHetHanDungListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-thuoc-sap-het-han-dung-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-thuoc-sap-het-han-dung-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-thuoc-sap-het-han-dung-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.scss")).default]
    })
], BaoCaoThuocSapHetHanDungListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoThuocSapHetHanDungRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuocSapHetHanDungRoutingModule", function() { return BaoCaoThuocSapHetHanDungRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_thuoc_sap_het_han_dung_list_bao_cao_thuoc_sap_het_han_dung_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component */ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_thuoc_sap_het_han_dung_list_bao_cao_thuoc_sap_het_han_dung_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoThuocSapHetHanDungListComponent"],
        data: {
            title: 'Báo cáo thuốc sắp hết hạn dùng',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoThuocSapHetHanDung,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoThuocSapHetHanDungRoutingModule = class BaoCaoThuocSapHetHanDungRoutingModule {
};
BaoCaoThuocSapHetHanDungRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoThuocSapHetHanDungRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung.model.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung.model.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BaoCaoThuocSapHetHanSearch, InBaoCaoThuocSapHetHan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuocSapHetHanSearch", function() { return BaoCaoThuocSapHetHanSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoThuocSapHetHan", function() { return InBaoCaoThuocSapHetHan; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoThuocSapHetHanSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, KhoId = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
        this.KhoId = KhoId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class InBaoCaoThuocSapHetHan {
    constructor(KhoId = 0, HostingName = null, FromDate = null, ToDate = null) {
        this.KhoId = KhoId;
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BaoCaoThuocSapHetHanDungModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuocSapHetHanDungModule", function() { return BaoCaoThuocSapHetHanDungModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_thuoc_sap_het_han_dung_list_bao_cao_thuoc_sap_het_han_dung_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component */ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-list/bao-cao-thuoc-sap-het-han-dung-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_thuoc_sap_het_han_dung_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-thuoc-sap-het-han-dung-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-thuoc-sap-het-han-dung/bao-cao-thuoc-sap-het-han-dung-routing.module.ts");














let BaoCaoThuocSapHetHanDungModule = class BaoCaoThuocSapHetHanDungModule {
};
BaoCaoThuocSapHetHanDungModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_thuoc_sap_het_han_dung_list_bao_cao_thuoc_sap_het_han_dung_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoThuocSapHetHanDungListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _bao_cao_thuoc_sap_het_han_dung_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoThuocSapHetHanDungRoutingModule"]
        ]
    })
], BaoCaoThuocSapHetHanDungModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-thuoc-sap-het-han-dung-bao-cao-thuoc-sap-het-han-dung-module-es2015.js.map