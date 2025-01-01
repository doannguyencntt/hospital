var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tinh-hinh-nhap-tu-ncc-bao-cao-tinh-hinh-nhap-tu-ncc-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.html": 
        /*!***********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.html ***!
          \***********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                        {Title:'Thống Kê', Path:''},\n                        {Title:'Báo Cáo', Path:''},\n                        {Title:'Kế Toán', Path:''},\n                        {Title:'Tình Hình Nhập Từ Nhà Cung Cấp', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <app-combobox id=\"KhoId\" popupSettings=\"\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\"\n                    label=\"Kho\" bind=\"true\" url=\"BaoCao/GetKhoBaoCaoTinhHinhNhapTuNCCLookupAsync\"\n                    [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [checkboxAble]=\"false\" pageSize=\"50\" [autoHeight]=\"true\" [gridDataSource]=\"gridDataSource\"\n                        (extOnPageChange)=\"pageChange($event)\" [groups]=\"groups\" [showStt]=\"true\">\n                    </app-grid>\n\n                    <ng-template #vtytTemplate let-dataItem let-field=\"field\">\n                        <span>{{dataItem.VTYT | number:'0.2'}}</span>\n                    </ng-template>\n                    <ng-template #thueVATTemplate let-dataItem let-field=\"field\">\n                        <span>{{dataItem.ThueVAT | number:'0.2'}}</span>\n                    </ng-template>\n                    <ng-template #thanhTienTemplate let-dataItem let-field=\"field\">\n                        <span>{{dataItem.ThanhTien | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #thuocTemplate let-dataItem let-field=\"field\">\n                        <span>{{dataItem.Thuoc | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #hoaChatTemplate let-dataItem let-field=\"field\">\n                        <span>{{dataItem.HoaChat | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumThuocGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.Thuoc.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumVTYTGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.VTYT.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #sumHoaChatGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.HoaChat.sum | number:'0.2'}}</span>\n                    </ng-template>\n                    <ng-template #sumThueVATGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.ThueVAT.sum | number:'0.2'}}</span>\n                    </ng-template>\n                    <ng-template #tongGhiChuGroupFooterTemplate kendoGridGroupFooterTemplate let-aggregates\n                        let-field=\"field\">\n                        <span>{{aggregates.ThanhTien.sum | number:'0.2'}}</span>\n                    </ng-template>\n\n                    <ng-template #tenNhaCungCapGroupTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.scss": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.scss ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGluaC1oaW5oLW5oYXAtdHUtbmNjL2Jhby1jYW8tdGluaC1oaW5oLW5oYXAtdHUtbmNjLWxpc3QvYmFvLWNhby10aW5oLWhpbmgtbmhhcC10dS1uY2MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapTuNccListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapTuNccListComponent", function () { return BaoCaoTinhHinhNhapTuNccListComponent; });
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
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_tu_ncc_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-tinh-hinh-nhap-tu-ncc.model */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.model.ts");
            var BaoCaoTinhHinhNhapTuNccListComponent = /** @class */ (function () {
                function BaoCaoTinhHinhNhapTuNccListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_tinh_hinh_nhap_tu_ncc_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTinhHinhNhapTuNCCKTSearch"]();
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.groups = [{
                            field: 'TenNhaCungCap', dir: null, aggregates: [
                                { field: 'Thuoc', aggregate: 'sum' },
                                { field: 'VTYT', aggregate: 'sum' },
                                { field: 'HoaChat', aggregate: 'sum' },
                                { field: 'ThanhTien', aggregate: 'sum' },
                                { field: 'ThueVAT', aggregate: 'sum' }
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
                    this.IsData = false;
                }
                BaoCaoTinhHinhNhapTuNccListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTinhHinhNhapTuNhaCungCap;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.gridColumns = [
                        { Field: "NgayChungTuStr", Title: "Ngày chứng từ", Width: 120, },
                        { Field: "SoChungTu", Title: "Số chứng từ", Width: 120, },
                        { Field: "NgayHoaDonStr", Title: "Ngày hóa đơn", Width: 120, },
                        { Field: "SoHoaDon", Title: "Số seri - Số hoá đơn", Width: 120, },
                        { Field: "Thuoc", Title: "Thuốc", Width: 120, Template: this.thuocTemplate, TemplateGroupFooter: this.sumThuocGroupFooterTemplate },
                        { Field: "VTYT", Title: "VTYT", Width: 120, Template: this.vtytTemplate, TemplateGroupFooter: this.sumVTYTGroupFooterTemplate },
                        { Field: "HoaChat", Title: "Hóa chất", Width: 120, Template: this.hoaChatTemplate, TemplateGroupFooter: this.sumHoaChatGroupFooterTemplate },
                        { Field: "ThueVAT", Title: "Thuế VAT", Width: 120, Template: this.thueVATTemplate, TemplateGroupFooter: this.sumThueVATGroupFooterTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 120, Template: this.thanhTienTemplate },
                        { Field: "", Title: "Tổng", Width: 120, TemplateGroupFooter: this.tongGhiChuGroupFooterTemplate },
                        {
                            Field: 'TenNhaCungCap',
                            Title: '',
                            Width: 150,
                            Sortable: true,
                            Hidden: true,
                            HideFilter: true,
                            TemplateGroupHeader: this.tenNhaCungCapGroupTemplate
                        }
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
                };
                BaoCaoTinhHinhNhapTuNccListComponent.prototype.pageChange = function (event) {
                    this.skip = event;
                    if (this.dataSource.data.length == 0) {
                        this.XemBaoCao();
                    }
                    else {
                        var takeTo = +this.skip + +this.pageSize;
                        var gridData = this.dataSource.data.slice(this.skip, takeTo);
                        this.gridDataSource = {
                            data: gridData,
                            total: this.dataSource.total
                        };
                    }
                };
                BaoCaoTinhHinhNhapTuNccListComponent.prototype.exportExcel = function () {
                    var _this = this;
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
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = ";0;" + tuNgay + ";" + denNgay + ";";
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTinhHinhNhapTuNCC", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhHinhNhapTuNCCKT" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoTinhHinhNhapTuNccListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
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
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
                    this.apiService.post("BaoCao/GetDataBaoCaoTinhHinhNhapTuNCCForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            var takeTo = +_this.skip + +_this.pageSize;
                            var gridData = _this.dataSource.data.slice(_this.skip, takeTo);
                            _this.gridDataSource = {
                                data: gridData,
                                total: resultData.TotalRowCount
                            };
                            _this.gridChild._isLoading = false;
                            _this.gridChild._isLoadingTotalPage = false;
                        }
                    });
                };
                return BaoCaoTinhHinhNhapTuNccListComponent;
            }());
            BaoCaoTinhHinhNhapTuNccListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tenNhaCungCapGroupTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "tenNhaCungCapGroupTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumThuocGroupFooterTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "sumThuocGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumVTYTGroupFooterTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "sumVTYTGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumHoaChatGroupFooterTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "sumHoaChatGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongGhiChuGroupFooterTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "tongGhiChuGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sumThueVATGroupFooterTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "sumThueVATGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thanhTienTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thueVATTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "thueVATTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('vtytTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "vtytTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('hoaChatTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "hoaChatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thuocTemplate', { static: true })
            ], BaoCaoTinhHinhNhapTuNccListComponent.prototype, "thuocTemplate", void 0);
            BaoCaoTinhHinhNhapTuNccListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-tinh-hinh-nhap-tu-ncc-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tinh-hinh-nhap-tu-ncc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-tu-ncc-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.scss")).default]
                })
            ], BaoCaoTinhHinhNhapTuNccListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-routing.module.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-routing.module.ts ***!
          \********************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapTuNccRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapTuNccRoutingModule", function () { return BaoCaoTinhHinhNhapTuNccRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_tu_ncc_list_bao_cao_tinh_hinh_nhap_tu_ncc_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tinh_hinh_nhap_tu_ncc_list_bao_cao_tinh_hinh_nhap_tu_ncc_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTinhHinhNhapTuNccListComponent"],
                    data: {
                        title: 'Báo cáo tình hình nhập từ nhà cung cấp',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTinhHinhNhapTuNhaCungCap,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTinhHinhNhapTuNccRoutingModule = /** @class */ (function () {
                function BaoCaoTinhHinhNhapTuNccRoutingModule() {
                }
                return BaoCaoTinhHinhNhapTuNccRoutingModule;
            }());
            BaoCaoTinhHinhNhapTuNccRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTinhHinhNhapTuNccRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.model.ts": 
        /*!***********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.model.ts ***!
          \***********************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapTuNCCKTSearch, BaoCaoTinhHinhNhapTuNCCKT */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapTuNCCKTSearch", function () { return BaoCaoTinhHinhNhapTuNCCKTSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapTuNCCKT", function () { return BaoCaoTinhHinhNhapTuNCCKT; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTinhHinhNhapTuNCCKTSearch = /** @class */ (function () {
                function BaoCaoTinhHinhNhapTuNCCKTSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
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
                return BaoCaoTinhHinhNhapTuNCCKTSearch;
            }());
            var BaoCaoTinhHinhNhapTuNCCKT = /** @class */ (function () {
                function BaoCaoTinhHinhNhapTuNCCKT(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
                    if (STT === void 0) { STT = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (SLTonDauKy === void 0) { SLTonDauKy = 0; }
                    if (ThanhTienTonDauKy === void 0) { ThanhTienTonDauKy = 0; }
                    if (SLNhapTrongKy === void 0) { SLNhapTrongKy = 0; }
                    if (ThanhTienNhapTrongKy === void 0) { ThanhTienNhapTrongKy = 0; }
                    if (SLXuatTrongKy === void 0) { SLXuatTrongKy = 0; }
                    if (ThanhTienXuatTrongKy === void 0) { ThanhTienXuatTrongKy = 0; }
                    if (SLTonCuoiKy === void 0) { SLTonCuoiKy = 0; }
                    if (Gia === void 0) { Gia = 0; }
                    if (ThanhTien === void 0) { ThanhTien = 0; }
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
                return BaoCaoTinhHinhNhapTuNCCKT;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.module.ts": 
        /*!************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.module.ts ***!
          \************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapTuNccModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapTuNccModule", function () { return BaoCaoTinhHinhNhapTuNccModule; });
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
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_tu_ncc_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-tu-ncc-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-routing.module.ts");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_tu_ncc_list_bao_cao_tinh_hinh_nhap_tu_ncc_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc-list/bao-cao-tinh-hinh-nhap-tu-ncc-list.component.ts");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_tu_ncc_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-tu-ncc.service */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.service.ts");
            var BaoCaoTinhHinhNhapTuNccModule = /** @class */ (function () {
                function BaoCaoTinhHinhNhapTuNccModule() {
                }
                return BaoCaoTinhHinhNhapTuNccModule;
            }());
            BaoCaoTinhHinhNhapTuNccModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _bao_cao_tinh_hinh_nhap_tu_ncc_list_bao_cao_tinh_hinh_nhap_tu_ncc_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTinhHinhNhapTuNccListComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_tinh_hinh_nhap_tu_ncc_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTinhHinhNhapTuNccRoutingModule"],
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
                        _bao_cao_tinh_hinh_nhap_tu_ncc_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTinhHinhNhapTuNccService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_tinh_hinh_nhap_tu_ncc_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTinhHinhNhapTuNccService"] },
                    ]
                })
            ], BaoCaoTinhHinhNhapTuNccModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.service.ts": 
        /*!*************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-tu-ncc/bao-cao-tinh-hinh-nhap-tu-ncc.service.ts ***!
          \*************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapTuNccService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapTuNccService", function () { return BaoCaoTinhHinhNhapTuNccService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTinhHinhNhapTuNccService = /** @class */ (function (_super) {
                __extends(BaoCaoTinhHinhNhapTuNccService, _super);
                function BaoCaoTinhHinhNhapTuNccService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTinhHinhNhapTuNccService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTinhHinhNhapTuNccService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTinhHinhNhapTuNccService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTinhHinhNhapTuNccService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-nhap-tu-ncc-bao-cao-tinh-hinh-nhap-tu-ncc-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-nhap-tu-ncc-bao-cao-tinh-hinh-nhap-tu-ncc-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-nhap-tu-ncc-bao-cao-tinh-hinh-nhap-tu-ncc-module-es5.js.map