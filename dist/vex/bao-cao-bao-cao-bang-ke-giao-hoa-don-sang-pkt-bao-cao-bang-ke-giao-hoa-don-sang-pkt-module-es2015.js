(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-bang-ke-giao-hoa-don-sang-pkt-bao-cao-bang-ke-giao-hoa-don-sang-pkt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                    {Title:'Bảng Kê Giao Hóa Đơn Sang PKT', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <!-- <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\"\n                    url=\"TonKho/GetKhoTatCa\" [(model)]=\"baoCaoSearch.KhoId\"  [autoSelectFirstItem]=\"true\">\n                </app-combobox> -->\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\" [gridDataSource]=\"gridDataSource\"\n                        (extOnPageChange)=\"pageChange($event)\" [groups]=\"groups\">\n                    </app-grid>\n\n                    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n\n                    <ng-template #tenNCCGroupTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n\n                    <ng-template #tongSoGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.SoTienTT.sum}}</span>\n                    </ng-template>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tYmFuZy1rZS1naWFvLWhvYS1kb24tc2FuZy1wa3QvYmFvLWNhby1iYW5nLWtlLWdpYW8taG9hLWRvbi1zYW5nLXBrdC1saXN0L2Jhby1jYW8tYmFuZy1rZS1naWFvLWhvYS1kb24tc2FuZy1wa3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeGiaoHoaDonSangPktListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeGiaoHoaDonSangPktListComponent", function() { return BaoCaoBangKeGiaoHoaDonSangPktListComponent; });
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
/* harmony import */ var _bao_cao_bang_ke_giao_hoa_don_sang_pkt_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-bang-ke-giao-hoa-don-sang-pkt.model */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.model.ts");













let BaoCaoBangKeGiaoHoaDonSangPktListComponent = class BaoCaoBangKeGiaoHoaDonSangPktListComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bao_cao_bang_ke_giao_hoa_don_sang_pkt_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoBangKeGiaoHoaDonSangPKTSearch"]();
        //inBaoCaoBangKeGiaoHoaDonSangPKT: InBaoCaoBangKeGiaoHoaDonSangPKT = new InBaoCaoBangKeGiaoHoaDonSangPKT();
        this.additionalSearchString = "";
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.groups = [{
                field: 'TenNCC', dir: null, aggregates: [
                    { field: 'SoTienTT', aggregate: 'sum' }
                ]
            }];
        this.pageSize = 50;
        this.skip = 0;
        this.dataSource = {
            data: [],
            total: 0
        };
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.ishowView = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoBangKeGiaoHoaDonSangPKT;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 70, Template: this.sttTemplate },
            { Field: "SoHD", Title: "Số HĐ", Width: 70, },
            { Field: "NgayHDStr", Title: "Ngày HĐ", Width: 120, },
            { Field: "SoTienTT", Title: "Số tiền thanh toán", Width: 120, },
            { Field: "_", Title: "Tổng", Width: 120, TemplateGroupFooter: this.tongSoGroupFooterTemplate },
            {
                Field: "TenNCC",
                Title: '',
                Width: 150,
                Sortable: true,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.tenNCCGroupTemplate
            }
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
        }
    }
    exportExcel() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.baoCaoSearch.AdditionalSearchString = ";0;" + tuNgay + ";" + denNgay;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoBangKeGiaoHoaDonSangPKT", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoBangKeGiaoHoaDonSangPKT" + dateTimeNow.getFullYear() + ".xlsx");
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
    pageChange(event) {
        this.skip = event;
        if (this.dataSource.data.length == 0) {
            this.XemBaoCao();
        }
        else {
            var takeTo = +this.skip + +this.pageSize;
            let gridData = this.dataSource.data.slice(this.skip, takeTo);
            this.gridDataSource = {
                data: gridData,
                total: this.dataSource.total
            };
        }
    }
    XemBaoCao() {
        this.gridChild._isLoading = true;
        this.gridChild._isLoadingTotalPage = true;
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            this.gridChild._isLoading = false;
            this.gridChild._isLoadingTotalPage = false;
            return;
        }
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0, 0, 0, 0);
            this.baoCaoSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.minDateTuNgay = new Date();
            this.baoCaoSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
        }
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
        this.apiService.post("BaoCao/GetDataBaoCaoBangKeGiaoHoaDonSangPKTForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                var takeTo = +this.skip + +this.pageSize;
                let gridData = this.dataSource.data.slice(this.skip, takeTo);
                this.gridDataSource = {
                    data: gridData,
                    total: resultData.TotalRowCount
                };
                // if (this.gridView.total != 0) {
                //   this.ishowView = true;
                // } else {
                //   this.ishowView = false;
                // }
                this.gridChild._isLoading = false;
                this.gridChild._isLoadingTotalPage = false;
            }
        });
    }
};
BaoCaoBangKeGiaoHoaDonSangPktListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
], BaoCaoBangKeGiaoHoaDonSangPktListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoBangKeGiaoHoaDonSangPktListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenNCCGroupTemplate', { static: true })
], BaoCaoBangKeGiaoHoaDonSangPktListComponent.prototype, "tenNCCGroupTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongSoGroupFooterTemplate', { static: true })
], BaoCaoBangKeGiaoHoaDonSangPktListComponent.prototype, "tongSoGroupFooterTemplate", void 0);
BaoCaoBangKeGiaoHoaDonSangPktListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-bao-cao-bang-ke-giao-hoa-don-sang-pkt-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.scss")).default]
    })
], BaoCaoBangKeGiaoHoaDonSangPktListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-routing.module.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-routing.module.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeGiaoHoaDonSangPktRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeGiaoHoaDonSangPktRoutingModule", function() { return BaoCaoBangKeGiaoHoaDonSangPktRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoBangKeGiaoHoaDonSangPktListComponent"],
        data: {
            title: 'Báo cáo biên bản kiểm kê',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoBangKeGiaoHoaDonSangPKT,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
    }
];
let BaoCaoBangKeGiaoHoaDonSangPktRoutingModule = class BaoCaoBangKeGiaoHoaDonSangPktRoutingModule {
};
BaoCaoBangKeGiaoHoaDonSangPktRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoBangKeGiaoHoaDonSangPktRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.model.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.model.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeGiaoHoaDonSangPKTSearch, BaoCaoBangKeGiaoHoaDonSangPKT, InBaoCaoBangKeGiaoHoaDonSangPKT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeGiaoHoaDonSangPKTSearch", function() { return BaoCaoBangKeGiaoHoaDonSangPKTSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeGiaoHoaDonSangPKT", function() { return BaoCaoBangKeGiaoHoaDonSangPKT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoBangKeGiaoHoaDonSangPKT", function() { return InBaoCaoBangKeGiaoHoaDonSangPKT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoBangKeGiaoHoaDonSangPKTSearch {
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
class BaoCaoBangKeGiaoHoaDonSangPKT {
    constructor(STT = null, Ten = null, DVT = null, SLTonDauKy = 0, ThanhTienTonDauKy = 0, SLNhapTrongKy = 0, ThanhTienNhapTrongKy = 0, SLXuatTrongKy = 0, ThanhTienXuatTrongKy = 0, SLTonCuoiKy = 0, Gia = 0, ThanhTien = 0) {
        this.STT = STT;
        this.Ten = Ten;
        this.DVT = DVT;
        this.SLTonDauKy = SLTonDauKy;
        this.ThanhTienTonDauKy = ThanhTienTonDauKy;
        this.SLNhapTrongKy = SLNhapTrongKy;
        this.ThanhTienNhapTrongKy = ThanhTienNhapTrongKy;
        this.SLXuatTrongKy = SLXuatTrongKy;
        this.ThanhTienXuatTrongKy = ThanhTienXuatTrongKy;
        this.SLTonCuoiKy = SLTonCuoiKy;
        this.Gia = Gia;
        this.ThanhTien = ThanhTien;
    }
}
class InBaoCaoBangKeGiaoHoaDonSangPKT {
    constructor(HostingName = null, FromDate = null, ToDate = null) {
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeGiaoHoaDonSangPktModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeGiaoHoaDonSangPktModule", function() { return BaoCaoBangKeGiaoHoaDonSangPktModule; });
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
/* harmony import */ var _bao_cao_bang_ke_giao_hoa_don_sang_pkt_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-bang-ke-giao-hoa-don-sang-pkt-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-routing.module.ts");
/* harmony import */ var _bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list/bao-cao-bang-ke-giao-hoa-don-sang-pkt-list.component.ts");
/* harmony import */ var _bao_cao_bang_ke_giao_hoa_don_sang_pkt_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-bang-ke-giao-hoa-don-sang-pkt.service */ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.service.ts");





















let BaoCaoBangKeGiaoHoaDonSangPktModule = class BaoCaoBangKeGiaoHoaDonSangPktModule {
};
BaoCaoBangKeGiaoHoaDonSangPktModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_bao_cao_bang_ke_giao_hoa_don_sang_pkt_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoBangKeGiaoHoaDonSangPktListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_bang_ke_giao_hoa_don_sang_pkt_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoBangKeGiaoHoaDonSangPktRoutingModule"],
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
            _bao_cao_bang_ke_giao_hoa_don_sang_pkt_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBangKeGiaoHoaDonSangPktService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_bang_ke_giao_hoa_don_sang_pkt_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoBangKeGiaoHoaDonSangPktService"] },
        ]
    })
], BaoCaoBangKeGiaoHoaDonSangPktModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.service.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-bang-ke-giao-hoa-don-sang-pkt/bao-cao-bang-ke-giao-hoa-don-sang-pkt.service.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: BaoCaoBangKeGiaoHoaDonSangPktService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoBangKeGiaoHoaDonSangPktService", function() { return BaoCaoBangKeGiaoHoaDonSangPktService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoBangKeGiaoHoaDonSangPktService = class BaoCaoBangKeGiaoHoaDonSangPktService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoBangKeGiaoHoaDonSangPktService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoBangKeGiaoHoaDonSangPktService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoBangKeGiaoHoaDonSangPktService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-bang-ke-giao-hoa-don-sang-pkt-bao-cao-bang-ke-giao-hoa-don-sang-pkt-module-es2015.js.map