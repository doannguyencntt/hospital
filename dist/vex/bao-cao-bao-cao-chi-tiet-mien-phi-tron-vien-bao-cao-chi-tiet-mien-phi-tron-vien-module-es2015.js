(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-chi-tiet-mien-phi-tron-vien-bao-cao-chi-tiet-mien-phi-tron-vien-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.html ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Chi Tiết Miễn Phí, Giảm Phí', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\"> \n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [showStt]=\"true\" [pageable]=\"true\" [headerTemplate]=\"headerTemplate\"\n                urlGetData=\"BaoCao/GetDataBaoCaoChiTietMienPhiTronVienForGridAsync\"\n                urlGetTotalPage=\"BaoCao/GetTotalBaoCaoChiTietMienPhiTronVienForGridAsync\">\n            </app-grid>\n\n            <ng-template #thanhTienTemplate let-dataItem>\n                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #giamPhiTemplate let-dataItem>\n                {{dataItem.GiamPhi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #mienPhiTemplate let-dataItem>\n                {{dataItem.MienPhi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongGiamPhiMienPhiTemplate let-dataItem>\n                {{dataItem.TongGiamPhiMienPhi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongCongTemplateFooter let-dataItem>\n                <strong>\n                Tổng cộng:\n              </strong>\n            </ng-template>\n\n            <ng-template #giamPhiSumTemplateFooter let-aggregates>\n                <!-- {{totalGiamPhi() | number:'0.2-2':'vi-VN'}} -->\n                {{giamPhi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #mienPhiSumTemplateFooter let-aggregates>\n                <!-- {{totalMienPhi() | number:'0.2-2':'vi-VN'}} -->\n                {{mienPhi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #tongGiamPhiMienPhiSumTemplateFooter let-aggregates>\n                <!-- {{totalTongGiamPhiMienPhi() | number:'0.2-2':'vi-VN'}} -->\n                {{tongGiamPhi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <!-- <ng-template #giamPhiTemplateGroupFooter let-aggregates>\n                {{aggregates.GiamPhi.sum | number}}\n            </ng-template> -->\n\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.scss ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tY2hpLXRpZXQtbWllbi1waGktdHJvbi12aWVuL2Jhby1jYW8tY2hpLXRpZXQtbWllbi1waGktdHJvbi12aWVuLWxpc3QvYmFvLWNhby1jaGktdGlldC1taWVuLXBoaS10cm9uLXZpZW4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoChiTietMienPhiTronVienListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietMienPhiTronVienListComponent", function() { return BaoCaoChiTietMienPhiTronVienListComponent; });
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
/* harmony import */ var _bao_cao_chi_tiet_mien_phi_tron_vien_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-chi-tiet-mien-phi-tron-vien.model */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");














let BaoCaoChiTietMienPhiTronVienListComponent = class BaoCaoChiTietMienPhiTronVienListComponent {
    constructor(apiService, dialog, notificationService, authService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.baoCaoSearch = new _bao_cao_chi_tiet_mien_phi_tron_vien_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoChiTietMienPhiTronVienSearch"]();
        this.inBaoCaoChiTietMienPhiTronVien = new _bao_cao_chi_tiet_mien_phi_tron_vien_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoChiTietMienPhiTronVien"]();
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
        this.giamPhi = 0;
        this.mienPhi = 0;
        this.tongGiamPhi = 0;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoChiTietMienPhiTronVien;
        if (window.location.protocol == "http:") {
            this.inBaoCaoChiTietMienPhiTronVien.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoChiTietMienPhiTronVien.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "TenKhoaPhong", Title: "Khoa/Phòng", Width: 100 },
            { Field: "MaNB", Title: "Mã NB", Width: 70 },
            { Field: "MaTN", Title: "Mã TN", Width: 70 },
            { Field: "TenBN", Title: "Tên BN", Width: 100 },
            { Field: "NgaySinhDisplay", Title: "Năm sinh", Width: 70 },
            { Field: "SoDienThoai", Title: "Số điện thoại", Width: 70 },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 160 },
            { Field: "ThanhTien", Title: "Số tiền phải thanh toán", Width: 100, Template: this.thanhTienTemplate, TemplateFooter: this.tongCongTemplateFooter },
            { Field: "GiamPhi", Title: "Giảm phí", Width: 80, Template: this.giamPhiTemplate, TemplateFooter: this.giamPhiSumTemplateFooter },
            { Field: "MienPhi", Title: "Miễn phí", Width: 80, Template: this.mienPhiTemplate, TemplateFooter: this.mienPhiSumTemplateFooter },
            { Field: "TongGiamPhiMienPhi", Title: "Tổng giảm phí, miễn phí", Width: 100, Template: this.tongGiamPhiMienPhiTemplate, TemplateFooter: this.tongGiamPhiMienPhiSumTemplateFooter },
            { Field: "LyDo", Title: "Lý do", Width: 120 },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = firstDay;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
            this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
        }
    }
    totalGiamPhi() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.GiamPhi, 0);
        }
    }
    totalMienPhi() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.MienPhi, 0);
        }
    }
    totalTongGiamPhiMienPhi() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.TongGiamPhiMienPhi, 0);
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
        // this.gridChild._isLoadingTotalPage = true;
        // this.gridChild._isLoading = true;
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            // this.gridChild._isLoadingTotalPage = false;
            // this.gridChild._isLoading = false;
            return;
        }
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
        this.baoCaoSearch.FromDate = tuNgay;
        this.baoCaoSearch.ToDate = denNgay;
        this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
        this.gridChild.search();
        this.getTongCong(this.gridChild._gridQueryInfo);
        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        // this.apiService.post<any>("BaoCao/GetDataBaoCaoChiTietMienPhiTronVienForGridAsync", this.baoCaoSearch).subscribe(resultData => {
        //   if (resultData !== undefined && resultData != null) {
        //     if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
        //       this.showPrintExport = true;
        //     }
        //     this.showGrid = true;
        //     // this.gridDataSource.data = [...resultData.Data];
        //     // this.gridDataSource.total = this.gridDataSource.data.length;
        //     // this.gridDataSource = {
        //     //   data: resultData.Data,
        //     //   total: resultData.TotalRowCount
        //     // };
        //     // var takeTo = +this.skip + +this.pageSize;
        //     // this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);
        //     // console.log(this.gridDataSource)
        //     // this.gridChild.setDataSource();
        //     this.gridDataSource.data = [...resultData.Data];
        //     this.gridDataSource.total = this.gridDataSource.data.length;
        //     // this.gridChild.setDataSource();
        //     var takeTo = +this.skip + +this.pageSize;
        //     this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
        //     this.gridView.total = this.gridDataSource.total;
        //     this.gridChild._isLoadingTotalPage = false;
        //     this.gridChild._isLoading = false;
        //   }
        // });
    }
    getTongCong(queryInfo) {
        this.apiService.post("BaoCao/GetTongCongChiPhiMienPhiTronVien", queryInfo).subscribe(resultData => {
            this.giamPhi = resultData.GiamPhi;
            this.mienPhi = resultData.MienPhi;
            this.tongGiamPhi = resultData.TongGiamPhiMienPhi;
        }, (err) => {
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
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
            // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
            this.baoCaoSearch.FromDate = tuNgay;
            this.baoCaoSearch.ToDate = denNgay;
            this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoChiTietMienPhiTronVien", this.gridChild._gridQueryInfo)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoChiTietMienPhiTronVien" + dateTimeNow.getFullYear() + ".xlsx");
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
BaoCaoChiTietMienPhiTronVienListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"], { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplate", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("giamPhiTemplate", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "giamPhiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mienPhiTemplate", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "mienPhiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongGiamPhiMienPhiTemplate", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "tongGiamPhiMienPhiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongCongTemplateFooter", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "tongCongTemplateFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("giamPhiSumTemplateFooter", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "giamPhiSumTemplateFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mienPhiSumTemplateFooter", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "mienPhiSumTemplateFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongGiamPhiMienPhiSumTemplateFooter", { static: true })
], BaoCaoChiTietMienPhiTronVienListComponent.prototype, "tongGiamPhiMienPhiSumTemplateFooter", void 0);
BaoCaoChiTietMienPhiTronVienListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-chi-tiet-mien-phi-tron-vien-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-chi-tiet-mien-phi-tron-vien-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-chi-tiet-mien-phi-tron-vien-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.scss")).default]
    })
], BaoCaoChiTietMienPhiTronVienListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-routing.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-routing.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: BaoCaoChiTietMienPhiTronVienRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietMienPhiTronVienRoutingModule", function() { return BaoCaoChiTietMienPhiTronVienRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_chi_tiet_mien_phi_tron_vien_list_bao_cao_chi_tiet_mien_phi_tron_vien_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_chi_tiet_mien_phi_tron_vien_list_bao_cao_chi_tiet_mien_phi_tron_vien_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoChiTietMienPhiTronVienListComponent"],
        data: {
            title: 'Báo cáo chi tiết miễn phí, giảm phí',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoChiTietMienPhiTronVien,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoChiTietMienPhiTronVienRoutingModule = class BaoCaoChiTietMienPhiTronVienRoutingModule {
};
BaoCaoChiTietMienPhiTronVienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoChiTietMienPhiTronVienRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien.model.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien.model.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: BaoCaoChiTietMienPhiTronVienSearch, InBaoCaoChiTietMienPhiTronVien */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietMienPhiTronVienSearch", function() { return BaoCaoChiTietMienPhiTronVienSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoChiTietMienPhiTronVien", function() { return InBaoCaoChiTietMienPhiTronVien; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoChiTietMienPhiTronVienSearch {
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
class InBaoCaoChiTietMienPhiTronVien {
    constructor(HostingName = null, FromDate = null, ToDate = null) {
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: BaoCaoChiTietMienPhiTronVienModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietMienPhiTronVienModule", function() { return BaoCaoChiTietMienPhiTronVienModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_chi_tiet_mien_phi_tron_vien_list_bao_cao_chi_tiet_mien_phi_tron_vien_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-list/bao-cao-chi-tiet-mien-phi-tron-vien-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_chi_tiet_mien_phi_tron_vien_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-chi-tiet-mien-phi-tron-vien-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-chi-tiet-mien-phi-tron-vien/bao-cao-chi-tiet-mien-phi-tron-vien-routing.module.ts");














let BaoCaoChiTietMienPhiTronVienModule = class BaoCaoChiTietMienPhiTronVienModule {
};
BaoCaoChiTietMienPhiTronVienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_chi_tiet_mien_phi_tron_vien_list_bao_cao_chi_tiet_mien_phi_tron_vien_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoChiTietMienPhiTronVienListComponent"]],
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
            _bao_cao_chi_tiet_mien_phi_tron_vien_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoChiTietMienPhiTronVienRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"]
        ]
    })
], BaoCaoChiTietMienPhiTronVienModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-chi-tiet-mien-phi-tron-vien-bao-cao-chi-tiet-mien-phi-tron-vien-module-es2015.js.map