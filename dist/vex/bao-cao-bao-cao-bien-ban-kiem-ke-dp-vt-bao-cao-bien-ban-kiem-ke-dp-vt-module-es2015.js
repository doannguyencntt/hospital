(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-bien-ban-kiem-ke-dp-vt-bao-cao-bien-ban-kiem-ke-dp-vt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'DP-VT', Path:''},\n                {Title:'Biên Bản Kiểm Kê', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridView\" [documentType]=\"documentType\"\n                [pageSize]=\"pageSize\" [useActionDefault]=\"false\" [lazyLoadPage]=\"false\" [useHeaderDefault]=\"false\"\n                [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" [showStt]=\"true\"\n                (extOnPageChange)=\"pageChange($event)\" (extOnSearch)=\"seachChange($event)\"  >\n            </app-grid>\n\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" bind=\"true\" url=\"BaoCao/GetKhoNhanVienLookupAsync\"\n                    [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.GioThongKeFormat\" id=\"GioThongKeFormat\"\n                    label=\"Giờ thống kê\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmllbi1iYW4ta2llbS1rZS1kcC12dC9iYW8tY2FvLWJpZW4tYmFuLWtpZW0ta2UtZHAtdnQtbGlzdC9iYW8tY2FvLWJpZW4tYmFuLWtpZW0ta2UtZHAtdnQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: BaoCaoBienBanKiemKeDpVtListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBienBanKiemKeDpVtListComponent", function() { return BaoCaoBienBanKiemKeDpVtListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bao_cao_bien_ban_kiem_ke_dp_vt_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-bien-ban-kiem-ke-dp-vt.model */ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");














let BaoCaoBienBanKiemKeDpVtListComponent = class BaoCaoBienBanKiemKeDpVtListComponent {
    constructor(apiService, dialog, notificationService, authService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.baoCaoSearch = new _bao_cao_bien_ban_kiem_ke_dp_vt_model__WEBPACK_IMPORTED_MODULE_7__["BaoCaoBienBanKiemKeDpVtSearch"]();
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.gridView = {
            data: [],
            total: 0
        };
        this.pageSize = 50;
        this.skip = 0;
        this.showGrid = false;
        this.showPrintExport = false;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].BaoCaoBienBanKiemKeDuocVT;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            { Field: "MaDuoc", Title: "Mã dược", Width: 100 },
            { Field: "Ten", Title: "Tên thuốc, vật tư, hoá chất", Width: 200 },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 100 },
            { Field: "HoatChat", Title: "Tên hoạt chất", Width: 100 },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "SoLuongHienCo", Title: "Số lượng hiện có", Width: 100 },
            { Field: "SoLo", Title: "Số lô SX", Width: 100 },
            { Field: "HanDungStr", Title: "Hạn dùng", Width: 100 },
            { Field: "GhiChu", Title: "Ghi chú", Width: 100 },
        ];
        if (this.baoCaoSearch.GioThongKeFormat == null) {
            this.baoCaoSearch.GioThongKeFormat = new Date();
        }
    }
    seachChange(event) {
        this.skip = 0;
        this.XemBaoCao();
    }
    pageChange(event) {
        this.skip = event;
        if (this.gridDataSource.data.length === 0) {
            this.XemBaoCao();
        }
        else {
            if (this.baoCaoSearch.GioThongKeFormat === null) {
                this.notificationService.showError("Giờ thống kê yêu cầu nhập");
                return;
            }
            if (!this.baoCaoSearch.KhoId) {
                this.notificationService.showError("Kho yêu cầu nhập");
                return;
            }
            this.gridChild._isLoadingTotalPage = true;
            this.gridChild._isLoading = true;
            this.baoCaoSearch.GioThongKe = this.baoCaoSearch.GioThongKeFormat;
            this.baoCaoSearch.Skip = this.skip;
            this.baoCaoSearch.Take = this.skip + this.pageSize;
            this.getThongTinDataKiemKeDuocPhamVatTu(this.baoCaoSearch);
        }
    }
    XemBaoCao() {
        if (this.baoCaoSearch.GioThongKeFormat == null) {
            this.notificationService.showError("Giờ thống kê yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            return;
        }
        this.gridChild._isLoadingTotalPage = true;
        this.gridChild._isLoading = true;
        this.baoCaoSearch.GioThongKe = this.baoCaoSearch.GioThongKeFormat;
        this.baoCaoSearch.Skip = 0;
        this.baoCaoSearch.Take = 50;
        this.getThongTinDataKiemKeDuocPhamVatTu(this.baoCaoSearch);
    }
    getThongTinDataKiemKeDuocPhamVatTu(baoCaoSearch) {
        debugger;
        this.apiService.post("BaoCao/GetDataBaoCaoBienBanKiemKeDPVTForGridAsync", baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                    this.showPrintExport = true;
                }
                this.gridDataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                this.gridView.data = this.gridDataSource.data;
                this.gridView.total = this.gridDataSource.total;
                this.gridChild._isLoadingTotalPage = false;
                this.gridChild._isLoading = false;
            }
        });
    }
    exportExcel() {
        if (this.baoCaoSearch.GioThongKeFormat == null) {
            this.notificationService.showError("Giờ thống kê yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.baoCaoSearch.GioThongKe = this.baoCaoSearch.GioThongKeFormat;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoBienBanKiemKeDPVT", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBienBanKiemKe" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoBienBanKiemKeDpVtListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], { static: true })
], BaoCaoBienBanKiemKeDpVtListComponent.prototype, "gridChild", void 0);
BaoCaoBienBanKiemKeDpVtListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-bien-ban-kiem-ke-dp-vt-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-bien-ban-kiem-ke-dp-vt-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-bien-ban-kiem-ke-dp-vt-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.scss")).default]
    })
], BaoCaoBienBanKiemKeDpVtListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoBienBanKiemKeDpVtRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBienBanKiemKeDpVtRoutingModule", function() { return BaoCaoBienBanKiemKeDpVtRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_bien_ban_kiem_ke_dp_vt_list_bao_cao_bien_ban_kiem_ke_dp_vt_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component */ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_bien_ban_kiem_ke_dp_vt_list_bao_cao_bien_ban_kiem_ke_dp_vt_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoBienBanKiemKeDpVtListComponent"],
        data: {
            title: 'Báo cáo biên bản kiểm kê',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBienBanKiemKeDuocVT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoBienBanKiemKeDpVtRoutingModule = class BaoCaoBienBanKiemKeDpVtRoutingModule {
};
BaoCaoBienBanKiemKeDpVtRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoBienBanKiemKeDpVtRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt.model.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt.model.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BaoCaoBienBanKiemKeDpVtSearch, InBaoCaoBienBanKiemKeDpVt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBienBanKiemKeDpVtSearch", function() { return BaoCaoBienBanKiemKeDpVtSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoBienBanKiemKeDpVt", function() { return InBaoCaoBienBanKiemKeDpVt; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoBienBanKiemKeDpVtSearch {
    constructor(GioThongKe = null, GioThongKeFormat = null, KhoId = 0, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.GioThongKe = GioThongKe;
        this.GioThongKeFormat = GioThongKeFormat;
        this.KhoId = KhoId;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class InBaoCaoBienBanKiemKeDpVt {
    constructor(HostingName = null, FromDate = null, ToDate = null) {
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BaoCaoBienBanKiemKeDpVtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBienBanKiemKeDpVtModule", function() { return BaoCaoBienBanKiemKeDpVtModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_bien_ban_kiem_ke_dp_vt_list_bao_cao_bien_ban_kiem_ke_dp_vt_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component */ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-list/bao-cao-bien-ban-kiem-ke-dp-vt-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_bien_ban_kiem_ke_dp_vt_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-bien-ban-kiem-ke-dp-vt-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-bien-ban-kiem-ke-dp-vt/bao-cao-bien-ban-kiem-ke-dp-vt-routing.module.ts");














let BaoCaoBienBanKiemKeDpVtModule = class BaoCaoBienBanKiemKeDpVtModule {
};
BaoCaoBienBanKiemKeDpVtModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_bien_ban_kiem_ke_dp_vt_list_bao_cao_bien_ban_kiem_ke_dp_vt_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoBienBanKiemKeDpVtListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _bao_cao_bien_ban_kiem_ke_dp_vt_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoBienBanKiemKeDpVtRoutingModule"]
        ]
    })
], BaoCaoBienBanKiemKeDpVtModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-bien-ban-kiem-ke-dp-vt-bao-cao-bien-ban-kiem-ke-dp-vt-module-es2015.js.map