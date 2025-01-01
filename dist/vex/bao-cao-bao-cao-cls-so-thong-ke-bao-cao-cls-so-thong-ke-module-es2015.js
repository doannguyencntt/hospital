(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-cls-so-thong-ke-bao-cao-cls-so-thong-ke-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'CLS', Path:''},\n                    {Title:'Sổ Thống Kê CLS', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [showStt]=\"true\" [useHeaderDefault]=\"false\"\n                [checkboxAble]=\"false\" pageSize=\"50\" [additionalSearchString]=\"additionalSearchString\"\n                (extOnDataBound)=\"onDataBoundChild($event)\" [sort]=\"sort\" [headerTemplate]=\"headerTemplate\"\n                urlGetData=\"BaoCaoThucHienCls/GetDataSoThongKeCLSForGridAsync\"\n                urlGetTotalPage=\"BaoCaoThucHienCls/GetTotalPageSoThongKeCLSForGridAsync\" [groups]=\"groups\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\" [(model)]=\"baoCaoClsSoThongKe.ChuaThucHien\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chưa thực hiện\">\n                </app-checkbox>\n\n                <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\" [(model)]=\"baoCaoClsSoThongKe.DaThucHien\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã thực hiện\">\n                </app-checkbox>\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"mt-1 ml-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"mt-1 ml-1 on-header \">\n                </app-datetimepicker>\n\n                <app-combobox id=\"khoaphong\" fxFlex=\"15%\" fxFlex.sm=\"25%\" [(model)]=\"baoCaoClsSoThongKe.KhoaId\"\n                    (modelChange)=\"XemBaoCao()\" label=\"Khoa\" url=\"BaoCaoThucHienCls/KhoaPhongs\"\n                    class=\"mt-1 ml-1 on-header\">\n                </app-combobox>\n\n                <div fxFlex=\"35%\" fxFlex.sm=\"70%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 ml-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button [disabled]=\"disabledXuatBaoCao\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 ml-1 mt-2\" (click)=\"XuatBaoCao()\">Xuất Excel</button>\n                </div>\n            </ng-template>\n\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}} </strong>\n            </ng-template>\n\n            <ng-template #donGiaTemplate let-dataItem>\n                <p> {{dataItem.Gia | number:'0.2-2':'vi-VN'}}</p>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tY2xzLXNvLXRob25nLWtlL2Jhby1jYW8tY2xzLXNvLXRob25nLWtlLWxpc3QvYmFvLWNhby1jbHMtc28tdGhvbmcta2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: BaoCaoClsSoThongKeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeListComponent", function() { return BaoCaoClsSoThongKeListComponent; });
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
/* harmony import */ var _bao_cao_cls_so_thong_ke_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-cls-so-thong-ke.model */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.model.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");













let BaoCaoClsSoThongKeListComponent = class BaoCaoClsSoThongKeListComponent {
    constructor(apiService, dialog, notificationService, authService, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.baoCaoClsSoThongKe = new _bao_cao_cls_so_thong_ke_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoClsSoThongKe"]();
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoSoThongKeCls;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.skip = 0;
        this.pageSize = 100;
        this.additionalSearchString = null;
        this.disabledXuatBaoCao = false;
        this.showDefaultPagerTemplate = true;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.ishowView = false;
        this.urlGetData = "BaoCaoThucHienCls/GetDataSoThongKeCLSForGridAsync";
        this.urlGetPageData = "BaoCaoThucHienCls/GetTotalPageSoThongKeCLSForGridAsync";
        this.popupLoadingData = null;
        this.data = [];
        this.sort = [
            {
                field: "Nhom",
                dir: "asc",
            },
        ];
        this.heightToolbar = 140;
        this.groups = [{ field: "Nhom" }];
    }
    ngOnInit() {
        let dateNow = new Date();
        // this.baoCaoClsSoThongKe.RangeFromDate.startDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        // this.baoCaoClsSoThongKe.RangeFromDate.endDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        // this.additionalSearchString = JSON.stringify(this.baoCaoClsSoThongKe);
        this.gridColumns = [
            { Field: "MaTN", Title: "Mã TN", Width: 120, ShowTooltip: true },
            { Field: "SoBA", Title: "Số bệnh án", Width: 130, ShowTooltip: true },
            { Field: "HoTen", Title: "Họ tên", Width: 250, ShowTooltip: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 120, },
            { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 120, },
            { Field: "BHYTMaSoThe", Title: "BHYT", Width: 70, ShowTooltip: true },
            { Field: "TenDichVu", Title: "Tên DV", Width: 200, ShowTooltip: true },
            { Field: "ChanDoan", Title: "Chuẩn đoán", Width: 200, ShowTooltip: true },
            { Field: "KetLuan", Title: "Kết luận", Width: 150, ShowTooltip: true },
            { Field: "SoLan", Title: "Số lần", Width: 100 },
            { Field: "Gia", Title: "Giá", Width: 100, ShowTooltip: true, Template: this.donGiaTemplate },
            { Field: "TenNoiChiDinh", Title: "Tên nơi chỉ định", Width: 200, ShowTooltip: true },
            { Field: "TenNguoiChiDinh", Title: "Tên người chỉ định", Width: 200, ShowTooltip: true },
            { Field: "KTV", Title: "KTV", Width: 100, ShowTooltip: true },
            { Field: "ThoiDiemDangKyDisplay", Title: "Thời điểm chỉ định", Width: 100, ShowTooltip: true },
            { Field: "ThoiDiemThucHienDisplay", Title: "Thời điểm thực hiện", Width: 100, ShowTooltip: true },
            { Field: "ThoiDiemNhapVienDisplay", Title: "Thời điểm nhập viện", Width: 100, ShowTooltip: true },
            { Field: "ThoiDiemRaVienDisplay", Title: "Thời điểm ra viện", Width: 100, ShowTooltip: true },
            { Field: "GhiChu", Title: "Ghi chú", Width: 100 },
            {
                Field: 'Nhom',
                Title: '',
                Width: 0,
                Sortable: true,
                Hidden: true,
                HideFilter: true,
                TemplateGroupHeader: this.nhomGroupHeaderTemplate
            }
        ];
    }
    columnResize(event) {
        //khi resize column parent thì column child cũng resize theo
        if (event != null && event.length > 0) {
            event.forEach(element => {
                var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
                if (columnIndex >= 0) {
                    this.gridColumns[columnIndex].Width = element.newWidth;
                    if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
                        jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
                    }
                }
            });
        }
    }
    getFieldColumn(index) {
        return this.gridColumns[index].Field;
    }
    getTitleColumn(index) {
        return this.gridColumns[index].Title;
    }
    getWidthColumn(index) {
        return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
    }
    getMinWidthColumn(minWidth) {
        var widthParent = jQuery("#baoCaoThongKeDonThuocGrid").parent().width();
        var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
        var totalWidth = this.gridColumns.filter((item) => {
            return item.Width != null;
        }).reduce((sum, item) => sum + item.Width, 0);
        if ((widthScreen < totalWidth + minWidth + 100)) {
            return minWidth;
        }
        else {
            return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
        }
    }
    changeNgayBatDauRange() {
    }
    pageChange(event) {
        //this.baoCaoClsSoThongKe.Skip = event.skip;
        this.XemBaoCao();
    }
    addingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closepopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    XemBaoCao() {
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.startDate != null) {
        //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.startDate, "mm/dd/yyyy");
        // }
        // else {
        //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = null;
        // }
        // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.endDate != null) {
        //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.endDate, "mm/dd/yyyy");
        // }
        // else {
        //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = null;
        // }
        if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat != null) {
            this.baoCaoClsSoThongKe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsSoThongKe.FromDate = null;
        }
        if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat != null) {
            this.baoCaoClsSoThongKe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsSoThongKe.ToDate = null;
        }
        var queryString = JSON.stringify(this.baoCaoClsSoThongKe);
        this.grid._additionalSearchString = queryString;
        this.grid.search();
    }
    onDataBoundChild(data) {
        if (data != undefined && data.Data.length > 0) {
            this.data = data.Data;
            this.disabledXuatBaoCao = false;
        }
        else {
            this.disabledXuatBaoCao = true;
        }
    }
    XuatBaoCao() {
        var self = this;
        // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.startDate != null) {
        //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.startDate, "mm/dd/yyyy");
        // }
        // else {
        //   this.baoCaoClsSoThongKe.RangeFromDate.TuNgay = null;
        // }
        // if (this.baoCaoClsSoThongKe.RangeFromDate != null && this.baoCaoClsSoThongKe.RangeFromDate.endDate != null) {
        //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = CommonService.formatDateTime(this.baoCaoClsSoThongKe.RangeFromDate.endDate, "mm/dd/yyyy");
        // }
        // else {
        //   this.baoCaoClsSoThongKe.RangeFromDate.DenNgay = null;
        // }
        if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat != null) {
            this.baoCaoClsSoThongKe.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsSoThongKe.FromDate = null;
        }
        if (this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat != null) {
            this.baoCaoClsSoThongKe.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsSoThongKe.ToDate = null;
        }
        this.baoCaoClsSoThongKe.AdditionalSearchString = JSON.stringify(this.baoCaoClsSoThongKe);
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            self.apiService.postExportExcel('BaoCaoThucHienCls/ExportBaoCaoSoThongKeCls', this.baoCaoClsSoThongKe).subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    khoaChange(event) {
    }
};
BaoCaoClsSoThongKeListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], { static: true })
], BaoCaoClsSoThongKeListComponent.prototype, "grid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('BaoCaoClsSoThongKeGrid', { static: true })
], BaoCaoClsSoThongKeListComponent.prototype, "BaoCaoClsSoThongKeGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
], BaoCaoClsSoThongKeListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], BaoCaoClsSoThongKeListComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaoCaoClsSoThongKeListComponent.prototype, "heightToolbar", void 0);
BaoCaoClsSoThongKeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-cls-so-thong-ke-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-cls-so-thong-ke-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-cls-so-thong-ke-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.scss")).default]
    })
], BaoCaoClsSoThongKeListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: BaoCaoClsSoThongKeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeRoutingModule", function() { return BaoCaoClsSoThongKeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_cls_so_thong_ke_list_bao_cao_cls_so_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_cls_so_thong_ke_list_bao_cao_cls_so_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoClsSoThongKeListComponent"],
        data: {
            title: 'Sổ Thống Kê CLS',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoSoThongKeCls,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let BaoCaoClsSoThongKeRoutingModule = class BaoCaoClsSoThongKeRoutingModule {
};
BaoCaoClsSoThongKeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoClsSoThongKeRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.model.ts ***!
  \***********************************************************************************************/
/*! exports provided: BaoCaoClsSoThongKe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKe", function() { return BaoCaoClsSoThongKe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class BaoCaoClsSoThongKe {
    constructor(KhoaId = null, DaThucHien = true, ChuaThucHien = true, RangeFromDate = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](), 
    // public KhoaId: number = null,
    // public BacSiKetLuanId: number = null,
    FromDate = null, ToDate = null, ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null, Skip = 50, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.KhoaId = KhoaId;
        this.DaThucHien = DaThucHien;
        this.ChuaThucHien = ChuaThucHien;
        this.RangeFromDate = RangeFromDate;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.module.ts ***!
  \************************************************************************************************/
/*! exports provided: BaoCaoClsSoThongKeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeModule", function() { return BaoCaoClsSoThongKeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_cls_so_thong_ke_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-cls-so-thong-ke-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-routing.module.ts");
/* harmony import */ var _bao_cao_cls_so_thong_ke_list_bao_cao_cls_so_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_cls_so_thong_ke_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-cls-so-thong-ke.service */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.service.ts");





















let BaoCaoClsSoThongKeModule = class BaoCaoClsSoThongKeModule {
};
BaoCaoClsSoThongKeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_cls_so_thong_ke_list_bao_cao_cls_so_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoClsSoThongKeListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_cls_so_thong_ke_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoClsSoThongKeRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
        ],
        providers: [
            _bao_cao_cls_so_thong_ke_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoClsSoThongKeService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _bao_cao_cls_so_thong_ke_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoClsSoThongKeService"] },
        ]
    })
], BaoCaoClsSoThongKeModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: BaoCaoClsSoThongKeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeService", function() { return BaoCaoClsSoThongKeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let BaoCaoClsSoThongKeService = class BaoCaoClsSoThongKeService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCaoThucHienCls';
    }
};
BaoCaoClsSoThongKeService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
BaoCaoClsSoThongKeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoClsSoThongKeService);



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
//# sourceMappingURL=bao-cao-bao-cao-cls-so-thong-ke-bao-cao-cls-so-thong-ke-module-es2015.js.map