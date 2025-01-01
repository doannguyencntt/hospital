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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-cls-so-thong-ke-bao-cao-cls-so-thong-ke-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'CLS', Path:''},\n                    {Title:'Sổ Thống Kê CLS', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [showStt]=\"true\" [useHeaderDefault]=\"false\"\n                [checkboxAble]=\"false\" pageSize=\"50\" [additionalSearchString]=\"additionalSearchString\"\n                (extOnDataBound)=\"onDataBoundChild($event)\" [sort]=\"sort\" [headerTemplate]=\"headerTemplate\"\n                urlGetData=\"BaoCaoThucHienCls/GetDataSoThongKeCLSForGridAsync\"\n                urlGetTotalPage=\"BaoCaoThucHienCls/GetTotalPageSoThongKeCLSForGridAsync\" [groups]=\"groups\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\" [(model)]=\"baoCaoClsSoThongKe.ChuaThucHien\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chưa thực hiện\">\n                </app-checkbox>\n\n                <app-checkbox name=\"co-duyet\" class=\"ml-2\" value=\"coduyet\" [(model)]=\"baoCaoClsSoThongKe.DaThucHien\"\n                    fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã thực hiện\">\n                </app-checkbox>\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsSoThongKe.ThoiDiemTiepNhanTuFormat\" #tiepnhantu\n                    id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"mt-1 ml-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsSoThongKe.ThoiDiemTiepNhanDenFormat\" #tiepnhanden\n                    id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"mt-1 ml-1 on-header \">\n                </app-datetimepicker>\n\n                <app-combobox id=\"khoaphong\" fxFlex=\"15%\" fxFlex.sm=\"25%\" [(model)]=\"baoCaoClsSoThongKe.KhoaId\"\n                    (modelChange)=\"XemBaoCao()\" label=\"Khoa\" url=\"BaoCaoThucHienCls/KhoaPhongs\"\n                    class=\"mt-1 ml-1 on-header\">\n                </app-combobox>\n\n                <div fxFlex=\"35%\" fxFlex.sm=\"70%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 ml-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button [disabled]=\"disabledXuatBaoCao\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 ml-1 mt-2\" (click)=\"XuatBaoCao()\">Xuất Excel</button>\n                </div>\n            </ng-template>\n\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}} </strong>\n            </ng-template>\n\n            <ng-template #donGiaTemplate let-dataItem>\n                <p> {{dataItem.Gia | number:'0.2-2':'vi-VN'}}</p>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tY2xzLXNvLXRob25nLWtlL2Jhby1jYW8tY2xzLXNvLXRob25nLWtlLWxpc3QvYmFvLWNhby1jbHMtc28tdGhvbmcta2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: BaoCaoClsSoThongKeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeListComponent", function () { return BaoCaoClsSoThongKeListComponent; });
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
            var BaoCaoClsSoThongKeListComponent = /** @class */ (function () {
                function BaoCaoClsSoThongKeListComponent(apiService, dialog, notificationService, authService, ref) {
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
                BaoCaoClsSoThongKeListComponent.prototype.ngOnInit = function () {
                    var dateNow = new Date();
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
                };
                BaoCaoClsSoThongKeListComponent.prototype.columnResize = function (event) {
                    var _this = this;
                    //khi resize column parent thì column child cũng resize theo
                    if (event != null && event.length > 0) {
                        event.forEach(function (element) {
                            var columnIndex = _this.gridColumns.findIndex(function (x) { return x.Field === element.column.field; });
                            if (columnIndex >= 0) {
                                _this.gridColumns[columnIndex].Width = element.newWidth;
                                if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
                                    jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
                                }
                            }
                        });
                    }
                };
                BaoCaoClsSoThongKeListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoClsSoThongKeListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoClsSoThongKeListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoClsSoThongKeListComponent.prototype.getMinWidthColumn = function (minWidth) {
                    var widthParent = jQuery("#baoCaoThongKeDonThuocGrid").parent().width();
                    var widthScreen = (widthParent != undefined ? Math.round(widthParent) : jQuery(window).width()) - 120;
                    var totalWidth = this.gridColumns.filter(function (item) {
                        return item.Width != null;
                    }).reduce(function (sum, item) { return sum + item.Width; }, 0);
                    if ((widthScreen < totalWidth + minWidth + 100)) {
                        return minWidth;
                    }
                    else {
                        return widthScreen - (totalWidth + minWidth + 100) > minWidth ? widthScreen - (totalWidth + minWidth + 100) : minWidth;
                    }
                };
                BaoCaoClsSoThongKeListComponent.prototype.changeNgayBatDauRange = function () {
                };
                BaoCaoClsSoThongKeListComponent.prototype.pageChange = function (event) {
                    //this.baoCaoClsSoThongKe.Skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoClsSoThongKeListComponent.prototype.addingPage = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang tải dữ liệu..." },
                    });
                };
                BaoCaoClsSoThongKeListComponent.prototype.closepopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                BaoCaoClsSoThongKeListComponent.prototype.XemBaoCao = function () {
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
                };
                BaoCaoClsSoThongKeListComponent.prototype.onDataBoundChild = function (data) {
                    if (data != undefined && data.Data.length > 0) {
                        this.data = data.Data;
                        this.disabledXuatBaoCao = false;
                    }
                    else {
                        this.disabledXuatBaoCao = true;
                    }
                };
                BaoCaoClsSoThongKeListComponent.prototype.XuatBaoCao = function () {
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
                        self.apiService.postExportExcel('BaoCaoThucHienCls/ExportBaoCaoSoThongKeCls', this.baoCaoClsSoThongKe).subscribe(function (resultData) {
                            self.dialog.closeAll();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
                        }, function (err) {
                            self.notificationService.showError(err.Message);
                            self.dialog.closeAll();
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoClsSoThongKeListComponent.prototype.khoaChange = function (event) {
                };
                return BaoCaoClsSoThongKeListComponent;
            }());
            BaoCaoClsSoThongKeListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-routing.module.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-routing.module.ts ***!
          \********************************************************************************************************/
        /*! exports provided: BaoCaoClsSoThongKeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeRoutingModule", function () { return BaoCaoClsSoThongKeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_cls_so_thong_ke_list_bao_cao_cls_so_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component */ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke-list/bao-cao-cls-so-thong-ke-list.component.ts");
            var routes = [
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
            var BaoCaoClsSoThongKeRoutingModule = /** @class */ (function () {
                function BaoCaoClsSoThongKeRoutingModule() {
                }
                return BaoCaoClsSoThongKeRoutingModule;
            }());
            BaoCaoClsSoThongKeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoClsSoThongKeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.model.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.model.ts ***!
          \***********************************************************************************************/
        /*! exports provided: BaoCaoClsSoThongKe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKe", function () { return BaoCaoClsSoThongKe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var BaoCaoClsSoThongKe = /** @class */ (function () {
                function BaoCaoClsSoThongKe(KhoaId, DaThucHien, ChuaThucHien, RangeFromDate, 
                // public KhoaId: number = null,
                // public BacSiKetLuanId: number = null,
                FromDate, ToDate, ThoiDiemTiepNhanTuFormat, ThoiDiemTiepNhanDenFormat, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (DaThucHien === void 0) { DaThucHien = true; }
                    if (ChuaThucHien === void 0) { ChuaThucHien = true; }
                    if (RangeFromDate === void 0) { RangeFromDate = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ThoiDiemTiepNhanTuFormat === void 0) { ThoiDiemTiepNhanTuFormat = null; }
                    if (ThoiDiemTiepNhanDenFormat === void 0) { ThoiDiemTiepNhanDenFormat = null; }
                    if (Skip === void 0) { Skip = 50; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
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
                return BaoCaoClsSoThongKe;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.module.ts": 
        /*!************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.module.ts ***!
          \************************************************************************************************/
        /*! exports provided: BaoCaoClsSoThongKeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeModule", function () { return BaoCaoClsSoThongKeModule; });
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
            var BaoCaoClsSoThongKeModule = /** @class */ (function () {
                function BaoCaoClsSoThongKeModule() {
                }
                return BaoCaoClsSoThongKeModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.service.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-cls-so-thong-ke/bao-cao-cls-so-thong-ke.service.ts ***!
          \*************************************************************************************************/
        /*! exports provided: BaoCaoClsSoThongKeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsSoThongKeService", function () { return BaoCaoClsSoThongKeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var BaoCaoClsSoThongKeService = /** @class */ (function (_super) {
                __extends(BaoCaoClsSoThongKeService, _super);
                function BaoCaoClsSoThongKeService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCaoThucHienCls';
                    return _this;
                }
                return BaoCaoClsSoThongKeService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            BaoCaoClsSoThongKeService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            BaoCaoClsSoThongKeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoClsSoThongKeService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
          \**********************************************************************************************/
        /*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function () { return YeuCauMuaVatTuGridVo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function () { return YeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function () { return YeuCauMuaVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function () { return PhieuYeuCauMuaVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function () { return ThongTinVatTuChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function () { return YeuCauMuaVatTuChiTietValidator; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var YeuCauMuaVatTuGridVo = /** @class */ (function () {
                function YeuCauMuaVatTuGridVo(SoPhieu, TenNhanVienYeuCau, NgayYeuCauTuFormat, NgayYeuCauDenFormat, RangeFromDate, FromDate, ToDate, ChoDuyet, DaDuyet, TuChoiDuyet, TuNgay, DenNgay, SearchString) {
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (NgayYeuCauTuFormat === void 0) { NgayYeuCauTuFormat = null; }
                    if (NgayYeuCauDenFormat === void 0) { NgayYeuCauDenFormat = null; }
                    if (RangeFromDate === void 0) { RangeFromDate = new RangeDate(); }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (ChoDuyet === void 0) { ChoDuyet = true; }
                    if (DaDuyet === void 0) { DaDuyet = false; }
                    if (TuChoiDuyet === void 0) { TuChoiDuyet = false; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (SearchString === void 0) { SearchString = null; }
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
                return YeuCauMuaVatTuGridVo;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate, TuNgay, DenNgay) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                }
                return RangeDate;
            }());
            var YeuCauMuaVatTu = /** @class */ (function () {
                function YeuCauMuaVatTu(Id, SoPhieu, KhoId, NhanVienYeuCauId, NgayYeuCau, KyDuTruMuaDuocPhamVatTuId, GhiChu, TruongKhoaId, TruongKhoaDuyet, TenKho, TenNhanVienYeuCau, TenNhomDuTru, TenKyDuTru, NgayTaiKhoa, NgayKhoDuoc, NgayGiamDoc, TrangThai, TenTruongKhoa, NgayTruongKhoaDuyet, TenNhanVienKhoDuoc, NgayKhoDuocDuyet, TenGiamDoc, NgayGiamDocDuyet, LyDoTruongKhoaTuChoi, DuTruMuaVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (SoPhieu === void 0) { SoPhieu = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (NhanVienYeuCauId === void 0) { NhanVienYeuCauId = null; }
                    if (NgayYeuCau === void 0) { NgayYeuCau = null; }
                    if (KyDuTruMuaDuocPhamVatTuId === void 0) { KyDuTruMuaDuocPhamVatTuId = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (TruongKhoaId === void 0) { TruongKhoaId = null; }
                    if (TruongKhoaDuyet === void 0) { TruongKhoaDuyet = null; }
                    if (TenKho === void 0) { TenKho = null; }
                    if (TenNhanVienYeuCau === void 0) { TenNhanVienYeuCau = null; }
                    if (TenNhomDuTru === void 0) { TenNhomDuTru = null; }
                    if (TenKyDuTru === void 0) { TenKyDuTru = null; }
                    if (NgayTaiKhoa === void 0) { NgayTaiKhoa = null; }
                    if (NgayKhoDuoc === void 0) { NgayKhoDuoc = null; }
                    if (NgayGiamDoc === void 0) { NgayGiamDoc = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TenTruongKhoa === void 0) { TenTruongKhoa = null; }
                    if (NgayTruongKhoaDuyet === void 0) { NgayTruongKhoaDuyet = null; }
                    if (TenNhanVienKhoDuoc === void 0) { TenNhanVienKhoDuoc = null; }
                    if (NgayKhoDuocDuyet === void 0) { NgayKhoDuocDuyet = null; }
                    if (TenGiamDoc === void 0) { TenGiamDoc = null; }
                    if (NgayGiamDocDuyet === void 0) { NgayGiamDocDuyet = null; }
                    if (LyDoTruongKhoaTuChoi === void 0) { LyDoTruongKhoaTuChoi = null; }
                    if (DuTruMuaVatTuChiTiets === void 0) { DuTruMuaVatTuChiTiets = []; }
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
                return YeuCauMuaVatTu;
            }());
            var YeuCauMuaVatTuChiTiet = /** @class */ (function () {
                function YeuCauMuaVatTuChiTiet(STT, Id, VatTuId, LaVatTuBHYT, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongDuTruTaiKhoaDuyet, NhomDieuTriDuPhong, GhiChu, DuTruMuaVatTuTheoKhoaChiTietId, DuTruMuaVatTuKhoDuocChiTietId) {
                    if (STT === void 0) { STT = null; }
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (NhomDieuTriDuPhong === void 0) { NhomDieuTriDuPhong = null; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (DuTruMuaVatTuTheoKhoaChiTietId === void 0) { DuTruMuaVatTuTheoKhoaChiTietId = null; }
                    if (DuTruMuaVatTuKhoDuocChiTietId === void 0) { DuTruMuaVatTuKhoDuocChiTietId = null; }
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
                return YeuCauMuaVatTuChiTiet;
            }());
            var PhieuYeuCauMuaVatTu = /** @class */ (function () {
                function PhieuYeuCauMuaVatTu(DuTruMuaVatTuId, HostingName, Header, TrangThai) {
                    if (DuTruMuaVatTuId === void 0) { DuTruMuaVatTuId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (Header === void 0) { Header = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    this.DuTruMuaVatTuId = DuTruMuaVatTuId;
                    this.HostingName = HostingName;
                    this.Header = Header;
                    this.TrangThai = TrangThai;
                }
                return PhieuYeuCauMuaVatTu;
            }());
            var ThongTinVatTuChiTiet = /** @class */ (function () {
                function ThongTinVatTuChiTiet(STT, Id, NhomVatTuId, VatTuId, LaVatTuBHYT, Ma, DVT, QuyCach, NhaSX, NuocSX, SoLuongDuTru, SoLuongDuKienSuDung, SoLuongTonDuTru, SoLuongTonKhoTong, SoLuongChuaNhapVeHDT, // Hợp đồng thầu
                ThongTinChiTietTonKhoTongs, ThongTinChiTietTonHDTs, LoaiVatTu, TenLoaiVatTu, Ten, SLTonDuTru, SLTonKhoTong, SLChuaNhapVeHDT, SoLuongDuTruTaiKhoaDuyet, SoLuongDuTruKhoaDuocDuyet, SoLuongDuTruGiamDocDuyet, KhoId, IsThemVatTu, GhiChu, YeuCauMuaVatTuChiTietValidators) {
                    if (STT === void 0) { STT = 0; }
                    if (Id === void 0) { Id = 0; }
                    if (NhomVatTuId === void 0) { NhomVatTuId = null; }
                    if (VatTuId === void 0) { VatTuId = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (Ma === void 0) { Ma = null; }
                    if (DVT === void 0) { DVT = null; }
                    if (QuyCach === void 0) { QuyCach = null; }
                    if (NhaSX === void 0) { NhaSX = null; }
                    if (NuocSX === void 0) { NuocSX = null; }
                    if (SoLuongDuTru === void 0) { SoLuongDuTru = null; }
                    if (SoLuongDuKienSuDung === void 0) { SoLuongDuKienSuDung = null; }
                    if (SoLuongTonDuTru === void 0) { SoLuongTonDuTru = null; }
                    if (SoLuongTonKhoTong === void 0) { SoLuongTonKhoTong = null; }
                    if (SoLuongChuaNhapVeHDT === void 0) { SoLuongChuaNhapVeHDT = null; }
                    if (ThongTinChiTietTonKhoTongs === void 0) { ThongTinChiTietTonKhoTongs = []; }
                    if (ThongTinChiTietTonHDTs === void 0) { ThongTinChiTietTonHDTs = []; }
                    if (LoaiVatTu === void 0) { LoaiVatTu = null; }
                    if (TenLoaiVatTu === void 0) { TenLoaiVatTu = null; }
                    if (Ten === void 0) { Ten = null; }
                    if (SLTonDuTru === void 0) { SLTonDuTru = null; }
                    if (SLTonKhoTong === void 0) { SLTonKhoTong = null; }
                    if (SLChuaNhapVeHDT === void 0) { SLChuaNhapVeHDT = null; }
                    if (SoLuongDuTruTaiKhoaDuyet === void 0) { SoLuongDuTruTaiKhoaDuyet = null; }
                    if (SoLuongDuTruKhoaDuocDuyet === void 0) { SoLuongDuTruKhoaDuocDuyet = null; }
                    if (SoLuongDuTruGiamDocDuyet === void 0) { SoLuongDuTruGiamDocDuyet = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (IsThemVatTu === void 0) { IsThemVatTu = false; }
                    if (GhiChu === void 0) { GhiChu = null; }
                    if (YeuCauMuaVatTuChiTietValidators === void 0) { YeuCauMuaVatTuChiTietValidators = []; }
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
                return ThongTinVatTuChiTiet;
            }());
            var YeuCauMuaVatTuChiTietValidator = /** @class */ (function () {
                function YeuCauMuaVatTuChiTietValidator(VatTuId, LaVatTuBHYT) {
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    this.VatTuId = VatTuId;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                }
                return YeuCauMuaVatTuChiTietValidator;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-cls-so-thong-ke-bao-cao-cls-so-thong-ke-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-cls-so-thong-ke-bao-cao-cls-so-thong-ke-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-cls-so-thong-ke-bao-cao-cls-so-thong-ke-module-es5.js.map