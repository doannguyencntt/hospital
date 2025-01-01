(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tra-cuu-du-lieu-bao-cao-tra-cuu-tu-lieu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Doanh Thu', Path:''},\n                    {Title:'Tra cứu dữ liệu', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>   \n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/bao-cao/tra-cuu-du-lieu\" [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useAddDeault]=\"true\" [headerTemplate]=\"headerTemplate\"\n                [gridDataSource]=\"gridDataSource\"             \n                [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\">\n            </app-grid>\n        </div>\n\n        <ng-template #headerTemplate>\n            <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n            </app-datetimepicker>\n\n            <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n            </app-datetimepicker>\n\n            <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">                 \n                <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                (click)=\"xemBaoCao()\">Xem Báo Cáo</button>\n                <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                    (click)=\"exportExcel()\">Xuất Excel</button>                  \n            </div>\n            </div>\n        </ng-template>\n\n    </vex-page-layout-content>\n\n</vex-page-layout>\n\n<ng-template #soTienTemplate let-dataItem>\n    {{dataItem.SoTien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #tienThueGTGTTienTemplate let-dataItem>\n    {{dataItem.TienThueGTGT | number:'0.2-2':'vi-VN'}}\n</ng-template>\n<ng-template #giaTriHHDVChuaThueTemplate let-dataItem>\n    {{dataItem.GiaTriHHDVChuaThue | number:'0.2-2':'vi-VN'}}\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: BaoCaoTraCuuDuLieuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTraCuuDuLieuRoutingModule", function() { return BaoCaoTraCuuDuLieuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_tra_cuu_du_lieu_bao_cao_tra_cuu_du_lieu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component */ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_tra_cuu_du_lieu_bao_cao_tra_cuu_du_lieu_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTraCuuDuLieuComponent"],
        data: {
            title: 'Tra cứu dữ liệu',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTraCuuDuLieu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let BaoCaoTraCuuDuLieuRoutingModule = class BaoCaoTraCuuDuLieuRoutingModule {
};
BaoCaoTraCuuDuLieuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoTraCuuDuLieuRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.model.ts ***!
  \***********************************************************************************************/
/*! exports provided: BaoCaoTraCuuDuLieu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTraCuuDuLieu", function() { return BaoCaoTraCuuDuLieu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoTraCuuDuLieu {
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


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdHJhLWN1dS1kdS1saWV1L2Jhby1jYW8tdHJhLWN1dS1kdS1saWV1L2Jhby1jYW8tdHJhLWN1dS1kdS1saWV1LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: BaoCaoTraCuuDuLieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTraCuuDuLieuComponent", function() { return BaoCaoTraCuuDuLieuComponent; });
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
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _bao_cao_tra_cuu_du_lieu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-tra-cuu-du-lieu.model */ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.model.ts");













let BaoCaoTraCuuDuLieuComponent = class BaoCaoTraCuuDuLieuComponent {
    constructor(apiService, dialog, authService, notificationService) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.baoCaoSearch = new _bao_cao_tra_cuu_du_lieu_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTraCuuDuLieu"]();
        this.pageSize = 50;
        this.skip = 0;
        this.additionalSearchString = "";
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.ishowView = false;
        this.IsData = false;
        this.gridDataSource = {
            data: [],
            total: 0
        };
    }
    pageChange(event) {
        this.baoCaoSearch.Skip = event.skip;
        this.skip = event.skip;
        //this.XemBaoCao();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoTraCuuDuLieu;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            { Field: "HienThiTrenSo", Title: "Hiển thị trên sổ", Width: 150 },
            { Field: "NgayChungTuDisplay", Title: "Ngày chứng từ (*)", Width: 150 },
            { Field: "NgayHachToanDisplay", Title: "Ngày hạch toán (*)", Width: 150 },
            { Field: "SoChungTu", Title: "Số chứng từ (*)", Width: 100 },
            { Field: "DienGiai", Title: "Diễn giải", Width: 250 },
            { Field: "HanThanhToan", Title: "Hạn thanh toán", Width: 100 },
            { Field: "DienGiaiHachToan", Title: "Diễn giải (Hạch toán)", Width: 250 },
            { Field: "TaiKhoanNo", Title: "TK Nợ (*)", Width: 100 },
            { Field: "TaiKhoanCo", Title: "TK Có (*)", Width: 100 },
            { Field: "SoTien", Title: "Số tiền", Width: 100, Template: this.soTienTemplate },
            { Field: "DoiTuongNo", Title: "Đối tượng Nợ", Width: 100 },
            { Field: "DoiTuongCo", Title: "Đối tượng Có", Width: 100 },
            { Field: "TaiKhoanNganHang", Title: "TK ngân hàng", Width: 100 },
            { Field: "KhoanMucCP", Title: "Khoản mục CP", Width: 100 },
            { Field: "DonVi", Title: "Đơn vị", Width: 100 },
            { Field: "DoiTuongTHCP", Title: "Đối tượng THCP", Width: 100 },
            { Field: "CongTrinh", Title: "Công trình", Width: 100 },
            { Field: "HopDongBan", Title: "Hợp đồng bán", Width: 100 },
            { Field: "CPKhongHopLy", Title: "CP không hợp lý", Width: 100 },
            { Field: "MaThongKe", Title: "Mã thống kê", Width: 100 },
            { Field: "DienGiaiThue", Title: "Diễn giải (Thuế)", Width: 250 },
            { Field: "TKThueGTGT", Title: "TK thuế GTGT", Width: 100 },
            { Field: "TienThueGTGT", Title: "Tiền thuế GTGT", Width: 150, Template: this.tienThueGTGTTienTemplate },
            { Field: "PhanTramThueGTGT", Title: "% thuế GTGT", Width: 100 },
            { Field: "GiaTriHHDVChuaThue", Title: "Giá trị HHDV chưa thuế", Width: 150, Template: this.giaTriHHDVChuaThueTemplate },
            { Field: "MauSoHopDong", Title: "Mẫu số HĐ", Width: 100 },
            { Field: "NgayHoaDonDisplay", Title: "Ngày hóa đơn", Width: 100 },
            { Field: "KyHieuHopDong", Title: "Ký hiệu HĐ", Width: 100 },
            { Field: "SoHoaDon", Title: "Số hóa đơn", Width: 100 },
            { Field: "NhomHHDVMuaVao", Title: "Nhóm HHDV mua vào", Width: 100 },
            { Field: "MaDoiTuongThue", Title: "Mã đối tượng thuế", Width: 100 },
            { Field: "TenDoiTuongThue", Title: "Tên đối tượng thuế", Width: 100 },
            { Field: "MaSoThueDoiTuongThue", Title: "Mã số thuế đối tượng thuế", Width: 150 }
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = firstDay;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
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
        var widthParent = jQuery("#baoCaoGrid").parent().width();
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
    detailExpand(event) {
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;
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
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoTraCuuDuLieu", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTraCuuDuLieu" + dateTimeNow.getFullYear() + ".xlsx");
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
    xemBaoCao() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.showLoadingPopup();
        this.apiService.post("BaoCao/GetDataBaoCaoTraCuuDuLieuForGridAsync", this.baoCaoSearch)
            .subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.IsData = true;
                this.gridDataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                if (resultData.TotalRowCount != 0) {
                    this.pageSize = resultData.TotalRowCount;
                    this.ishowView = true;
                }
                else {
                    this.ishowView = false;
                }
                this.closeAllDialogs();
            }
        });
    }
    changeValueStart() {
        this.minDateDenNgay = new Date();
        if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
            && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
            this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
        }
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }
    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
};
BaoCaoTraCuuDuLieuComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_11__["GridComponent"], { static: true })
], BaoCaoTraCuuDuLieuComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoGrid', { static: true })
], BaoCaoTraCuuDuLieuComponent.prototype, "baoCaoGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienTemplate', { static: true })
], BaoCaoTraCuuDuLieuComponent.prototype, "soTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienThueGTGTTienTemplate', { static: true })
], BaoCaoTraCuuDuLieuComponent.prototype, "tienThueGTGTTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTriHHDVChuaThueTemplate', { static: true })
], BaoCaoTraCuuDuLieuComponent.prototype, "giaTriHHDVChuaThueTemplate", void 0);
BaoCaoTraCuuDuLieuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-tra-cuu-du-lieu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tra-cuu-du-lieu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tra-cuu-du-lieu.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.scss")).default]
    })
], BaoCaoTraCuuDuLieuComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-tu-lieu.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-tu-lieu.module.ts ***!
  \************************************************************************************************/
/*! exports provided: BaoCaoTraCuuDuLieuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTraCuuDuLieuModule", function() { return BaoCaoTraCuuDuLieuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_tra_cuu_du_lieu_bao_cao_tra_cuu_du_lieu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component */ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu.component.ts");
/* harmony import */ var _bao_cao_tra_cuu_du_lieu_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-tra-cuu-du-lieu-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-du-lieu-routing.module.ts");
/* harmony import */ var _bao_cao_tra_cuu_tu_lieu_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tra-cuu-tu-lieu.service */ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-tu-lieu.service.ts");





















let BaoCaoTraCuuDuLieuModule = class BaoCaoTraCuuDuLieuModule {
};
BaoCaoTraCuuDuLieuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_tra_cuu_du_lieu_bao_cao_tra_cuu_du_lieu_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTraCuuDuLieuComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_tra_cuu_du_lieu_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTraCuuDuLieuRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_7__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
        ],
        providers: [
            _bao_cao_tra_cuu_tu_lieu_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTraCuuDuLieuKeService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"], useClass: _bao_cao_tra_cuu_tu_lieu_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTraCuuDuLieuKeService"] },
        ]
    })
], BaoCaoTraCuuDuLieuModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-tu-lieu.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tra-cuu-du-lieu/bao-cao-tra-cuu-tu-lieu.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: BaoCaoTraCuuDuLieuKeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTraCuuDuLieuKeService", function() { return BaoCaoTraCuuDuLieuKeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let BaoCaoTraCuuDuLieuKeService = class BaoCaoTraCuuDuLieuKeService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCaoThucHienCls';
    }
};
BaoCaoTraCuuDuLieuKeService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
BaoCaoTraCuuDuLieuKeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoTraCuuDuLieuKeService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-tra-cuu-du-lieu-bao-cao-tra-cuu-tu-lieu-module-es2015.js.map