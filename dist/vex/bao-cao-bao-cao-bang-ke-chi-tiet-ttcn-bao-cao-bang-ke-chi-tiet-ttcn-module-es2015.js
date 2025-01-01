(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-bang-ke-chi-tiet-ttcn-bao-cao-bang-ke-chi-tiet-ttcn-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Bảng Kê Chi Tiết TTCN', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid\n                [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridView\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"  (extOnPageChange)=\"pageChange($event)\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\" (extOnPageChange)=\"pageChange($event)\"\n                [showStt]=\"true\">\n            </app-grid>\n\n\n            <ng-template #soTienCongNoTemplate let-dataItem>\n                {{dataItem.SoTienCongNo | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienDaThanhToanTemplate let-dataItem>\n                {{dataItem.SoTienDaThanhToan | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienConNoTemplate let-dataItem>\n                {{dataItem.SoTienConNo | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienHoanTraTemplate let-dataItem>\n                {{dataItem.SoTienHoanTra | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>bao-cao-bang-ke-chi-tiet-ttcn-popup works!</p>\n");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmFuZy1rZS1jaGktdGlldC10dGNuL2Jhby1jYW8tYmFuZy1rZS1jaGktdGlldC10dGNuLWxpc3QvYmFvLWNhby1iYW5nLWtlLWNoaS10aWV0LXR0Y24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeChiTietTtcnListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeChiTietTtcnListComponent", function() { return BaoCaoBangKeChiTietTtcnListComponent; });
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
/* harmony import */ var _bao_cao_bang_ke_chi_tiet_ttcn_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-bang-ke-chi-tiet-ttcn.model */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");














let BaoCaoBangKeChiTietTtcnListComponent = class BaoCaoBangKeChiTietTtcnListComponent {
    constructor(apiService, dialog, notificationService, authService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.baoCaoSearch = new _bao_cao_bang_ke_chi_tiet_ttcn_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoBangKeChiTietTTCNSearch"]();
        this.inBaoCaoBangKeChiTietTTCN = new _bao_cao_bang_ke_chi_tiet_ttcn_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoBangKeChiTietTTCN"]();
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
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoBangKeChiTietTTCN;
        if (window.location.protocol == "http:") {
            this.inBaoCaoBangKeChiTietTTCN.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoBangKeChiTietTTCN.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            // {Field:"STT", Title:"STT", Width: 70, Template:this.sttTemplate},
            { Field: "NgayThangStr", Title: "Ngày tháng", Width: 100 },
            { Field: "DoiTuongBaoLanhCongNo", Title: "Đối tượng bảo lãnh công nợ", Width: 100 },
            { Field: "MaTN", Title: "Mã TN", Width: 100 },
            { Field: "TenBN", Title: "Tên BN", Width: 100 },
            { Field: "SoPhieuThu", Title: "Số BL/HĐ", Width: 100 },
            { Field: "NgayPhatSinhPhieuThuStr", Title: "Ngày BL/HĐ", Width: 100 },
            { Field: "SoTienCongNo", Title: "Số tiền phải thu", Width: 100, Template: this.soTienCongNoTemplate },
            { Field: "SoTienDaThanhToan", Title: "Số tiền đã thanh toán", Width: 100, Template: this.soTienDaThanhToanTemplate },
            { Field: "SoTienConNo", Title: "Số tiền còn phải thanh toán", Width: 100, Template: this.soTienConNoTemplate },
            { Field: "SoTienHoanTra", Title: "Số tiền hoàn trả", Width: 100, Template: this.soTienHoanTraTemplate },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
            this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
        }
    }
    pageChange(event) {
        this.skip = event;
        // this.XemBaoCao();
        var takeTo = +this.skip + +this.pageSize;
        this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
        this.gridView.total = this.gridDataSource.total;
    }
    seachChange(event) {
        this.skip = 0;
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
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.apiService.post("BaoCao/GetDataBaoCaoBangKeChiTietTTCNForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                    this.showPrintExport = true;
                }
                this.showGrid = true;
                this.gridDataSource.data = [...resultData.Data];
                this.gridDataSource.total = this.gridDataSource.data.length;
                // this.gridChild.setDataSource();
                var takeTo = +this.skip + +this.pageSize;
                this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
                this.gridView.total = this.gridDataSource.total;
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
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoBangKeChiTietTTCN", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BangKeChiTietTTCN" + dateTimeNow.getFullYear() + ".xlsx");
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
    // format tiền trên UI
    formatPrice(value) {
        let val = (value / 1).toFixed(2).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
};
BaoCaoBangKeChiTietTtcnListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: true })
], BaoCaoBangKeChiTietTtcnListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sttTemplate", { static: true })
], BaoCaoBangKeChiTietTtcnListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienCongNoTemplate", { static: true })
], BaoCaoBangKeChiTietTtcnListComponent.prototype, "soTienCongNoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienDaThanhToanTemplate", { static: true })
], BaoCaoBangKeChiTietTtcnListComponent.prototype, "soTienDaThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienConNoTemplate", { static: true })
], BaoCaoBangKeChiTietTtcnListComponent.prototype, "soTienConNoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienHoanTraTemplate", { static: true })
], BaoCaoBangKeChiTietTtcnListComponent.prototype, "soTienHoanTraTemplate", void 0);
BaoCaoBangKeChiTietTtcnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-bang-ke-chi-tiet-ttcn-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-bang-ke-chi-tiet-ttcn-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.scss")).default]
    })
], BaoCaoBangKeChiTietTtcnListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmFuZy1rZS1jaGktdGlldC10dGNuL2Jhby1jYW8tYmFuZy1rZS1jaGktdGlldC10dGNuLXBvcHVwL2Jhby1jYW8tYmFuZy1rZS1jaGktdGlldC10dGNuLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeChiTietTtcnPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeChiTietTtcnPopupComponent", function() { return BaoCaoBangKeChiTietTtcnPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaoCaoBangKeChiTietTtcnPopupComponent = class BaoCaoBangKeChiTietTtcnPopupComponent {
    constructor() { }
    ngOnInit() {
    }
};
BaoCaoBangKeChiTietTtcnPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-bang-ke-chi-tiet-ttcn-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-bang-ke-chi-tiet-ttcn-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.scss")).default]
    })
], BaoCaoBangKeChiTietTtcnPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BaoCaoBangKeChiTietTtcnRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeChiTietTtcnRoutingModule", function() { return BaoCaoBangKeChiTietTtcnRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_bang_ke_chi_tiet_ttcn_list_bao_cao_bang_ke_chi_tiet_ttcn_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_bang_ke_chi_tiet_ttcn_list_bao_cao_bang_ke_chi_tiet_ttcn_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoBangKeChiTietTtcnListComponent"],
        data: {
            title: 'Báo cáo bảng kê chi tiết TTCN',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBangKeChiTietTTCN,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoBangKeChiTietTtcnRoutingModule = class BaoCaoBangKeChiTietTtcnRoutingModule {
};
BaoCaoBangKeChiTietTtcnRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoBangKeChiTietTtcnRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.model.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.model.ts ***!
  \***********************************************************************************************************/
/*! exports provided: BaoCaoBangKeChiTietTTCNSearch, InBaoCaoBangKeChiTietTTCN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeChiTietTTCNSearch", function() { return BaoCaoBangKeChiTietTTCNSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoBangKeChiTietTTCN", function() { return InBaoCaoBangKeChiTietTTCN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoBangKeChiTietTTCNSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class InBaoCaoBangKeChiTietTTCN {
    constructor(HostingName = null, FromDate = null, ToDate = null) {
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: BaoCaoBangKeChiTietTtcnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeChiTietTtcnModule", function() { return BaoCaoBangKeChiTietTtcnModule; });
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
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_bang_ke_chi_tiet_ttcn_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-routing.module.ts");
/* harmony import */ var _bao_cao_bang_ke_chi_tiet_ttcn_list_bao_cao_bang_ke_chi_tiet_ttcn_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-list/bao-cao-bang-ke-chi-tiet-ttcn-list.component.ts");
/* harmony import */ var _bao_cao_bang_ke_chi_tiet_ttcn_popup_bao_cao_bang_ke_chi_tiet_ttcn_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn-popup/bao-cao-bang-ke-chi-tiet-ttcn-popup.component.ts");
/* harmony import */ var _bao_cao_bang_ke_chi_tiet_ttcn_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bao-cao-bang-ke-chi-tiet-ttcn.service */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.service.ts");
























let BaoCaoBangKeChiTietTtcnModule = class BaoCaoBangKeChiTietTtcnModule {
};
BaoCaoBangKeChiTietTtcnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_bang_ke_chi_tiet_ttcn_list_bao_cao_bang_ke_chi_tiet_ttcn_list_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoBangKeChiTietTtcnListComponent"], _bao_cao_bang_ke_chi_tiet_ttcn_popup_bao_cao_bang_ke_chi_tiet_ttcn_popup_component__WEBPACK_IMPORTED_MODULE_22__["BaoCaoBangKeChiTietTtcnPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_bang_ke_chi_tiet_ttcn_routing_module__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBangKeChiTietTtcnRoutingModule"],
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_18__["DropDownButtonModule"]
        ],
        providers: [
            _bao_cao_bang_ke_chi_tiet_ttcn_service__WEBPACK_IMPORTED_MODULE_23__["BaoCaoBangKeChiTietTtcnService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_bang_ke_chi_tiet_ttcn_service__WEBPACK_IMPORTED_MODULE_23__["BaoCaoBangKeChiTietTtcnService"] },
        ],
        entryComponents: [
            _bao_cao_bang_ke_chi_tiet_ttcn_popup_bao_cao_bang_ke_chi_tiet_ttcn_popup_component__WEBPACK_IMPORTED_MODULE_22__["BaoCaoBangKeChiTietTtcnPopupComponent"]
        ]
    })
], BaoCaoBangKeChiTietTtcnModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-chi-tiet-ttcn/bao-cao-bang-ke-chi-tiet-ttcn.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BaoCaoBangKeChiTietTtcnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeChiTietTtcnService", function() { return BaoCaoBangKeChiTietTtcnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoBangKeChiTietTtcnService = class BaoCaoBangKeChiTietTtcnService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCaoBangKeChiTietTTCN';
    }
};
BaoCaoBangKeChiTietTtcnService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoBangKeChiTietTtcnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoBangKeChiTietTtcnService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-bang-ke-chi-tiet-ttcn-bao-cao-bang-ke-chi-tiet-ttcn-module-es2015.js.map