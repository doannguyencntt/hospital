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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.html ***!
          \********************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                    {Title:'Số Liệu Thời Gian Sử Dụng DV Của Khách Hàng', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <!-- <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\"\n                    url=\"TonKho/GetKhoTatCa\" [(model)]=\"baoCaoSearch.KhoId\"  [autoSelectFirstItem]=\"true\">\n                </app-combobox> -->\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                        [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [autoHeight]=\"true\" \n                        [checkboxAble]=\"false\" pageSize=\"50\" [gridDataSource]=\"dataSource\" [showStt]=\"true\">\n                    </app-grid>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #ThoiDiemTNTemplate let-dataItem>\n    {{dataItem.ThoiDiemTNStr}}\n</ng-template>\n<ng-template #ThoiDiemBSKhamTemplate let-dataItem>\n    {{dataItem.ThoiDiemBSKhamStr}}\n</ng-template>\n<ng-template #ThoiDiemRaChiDinhTemplate let-dataItem>\n    {{dataItem.ThoiDiemRaChiDinhStr}}\n</ng-template>\n<ng-template #ThoiDiemLayMauXNTemplate let-dataItem>\n    {{dataItem.ThoiDiemLayMauXNStr}}\n</ng-template>\n<ng-template #ThoiDiemTraKetQuaXNTemplate let-dataItem>\n    {{dataItem.ThoiDiemTraKQXNStr}}\n</ng-template>\n<ng-template #ThoiDiemThucHienCLSTemplate let-dataItem>\n    {{dataItem.ThoiDiemCDHAStr}}\n</ng-template>\n<ng-template #ThoiDiemBacSiKetLuanTemplate let-dataItem>\n    {{dataItem.ThoiDiemKLStr}}\n</ng-template>\n<ng-template #ThoiDiemBacSiKeDonThuocTemplate let-dataItem>\n    {{dataItem.ThoiDiemKeDonStr}}\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.scss": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.scss ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGluaC10aG9pLWdpYW4tc3UtZHVuZy1kdi1jdWEta2gvYmFvLWNhby10aW5oLXRob2ktZ2lhbi1zdS1kdW5nLWR2LWN1YS1raC1saXN0L2Jhby1jYW8tdGluaC10aG9pLWdpYW4tc3UtZHVuZy1kdi1jdWEta2gtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.ts": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.ts ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhThoiGianSuDungDvCuaKhListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhThoiGianSuDungDvCuaKhListComponent", function () { return BaoCaoTinhThoiGianSuDungDvCuaKhListComponent; });
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
            /* harmony import */ var _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.model */ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.model.ts");
            var BaoCaoTinhThoiGianSuDungDvCuaKhListComponent = /** @class */ (function () {
                // public pageChange(event: PageChangeEvent): void {
                //   this.baoCaoSearch.Skip = event.skip;
                //   this.skip = event.skip;
                //   //this.XemBaoCao();
                // }
                function BaoCaoTinhThoiGianSuDungDvCuaKhListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTinhThoiGianSuDungDVCuaKHSearch"]();
                    this.inTinhThoiGianSuDungDVCuaKH = new _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_model__WEBPACK_IMPORTED_MODULE_12__["InTinhThoiGianSuDungDVCuaKH"]();
                    this.pageSize = 50;
                    this.skip = 0;
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.showDefaultPagerTemplate = true;
                    this.ishowView = false;
                    this.IsData = false;
                    this.heightToolbar = 140;
                }
                BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoSoLieuThoiGianSuDungDV;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.gridColumns = [
                        { Field: "HoTenKH", Title: "Họ tên khách hàng", Width: 35 },
                        // { Field: "MaBN", Title: "Mã người bệnh", Width: 20 },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã người bệnh", Width: 20 },
                        { Field: "ThoiDiemTN", Title: "Thời điểm tiếp nhận tại quầy LT", Width: 20, Template: this.ThoiDiemTNTemplate },
                        { Field: "ThoiDiemBSKham", Title: "Thời điểm BS mở HS khám", Width: 20, Template: this.ThoiDiemBSKhamTemplate },
                        { Field: "ThoiDiemRaChiDinh", Title: "Thời điểm BS ra chỉ định CLS", Width: 20, Template: this.ThoiDiemRaChiDinhTemplate },
                        { Field: "ThoiDiemLayMauXN", Title: "Thời điểm KH lấy mẫu XN", Width: 20, Template: this.ThoiDiemLayMauXNTemplate },
                        { Field: "ThoiDiemTraKetQuaXN", Title: "Thời điểm trả KQXN", Width: 20, Template: this.ThoiDiemTraKetQuaXNTemplate },
                        { Field: "ThoiDiemThucHienCLS", Title: "Thời điểm KH thực hiện CĐHA", Width: 20, Template: this.ThoiDiemThucHienCLSTemplate },
                        { Field: "ThoiDiemBacSiKetLuan", Title: "Thời điểm BS kết luận", Width: 20, Template: this.ThoiDiemBacSiKetLuanTemplate },
                        { Field: "ThoiDiemBacSiKeDonThuoc", Title: "Thời điểm BS kê đơn thuốc", Width: 20, Template: this.ThoiDiemBacSiKeDonThuocTemplate },
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
                };
                BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype.exportExcel = function () {
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
                        this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inTinhThoiGianSuDungDVCuaKH.HostingName;
                        this.showPopupLoadingData();
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoSoLieuTinhThoiGianSuDungDVCuaKH", this.baoCaoSearch)
                            .subscribe(function (res) {
                            _this.closePopupLoadingData();
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhThoiGianSuDungDVCuaKH" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.closePopupLoadingData();
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
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
                    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inTinhThoiGianSuDungDVCuaKH.HostingName;
                    this.showPopupLoadingData();
                    this.ishowView = false;
                    this.apiService.post("BaoCao/GetDataBaoCaoSoLieuTinhThoiGianSuDungDVCuaKHForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.IsData = true;
                            if (_this.dataSource.total != 0) {
                                _this.ishowView = true;
                            }
                            else {
                                _this.ishowView = false;
                            }
                            var self = _this;
                            setTimeout(function () {
                                self.dataSource = {
                                    data: resultData.Data,
                                    total: resultData.TotalRowCount
                                };
                            }, 50);
                        }
                        var self = _this;
                        setTimeout(function () {
                            self.closePopupLoadingData();
                        }, 50);
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                // InBaoCao() {
                //   if(this.baoCaoSearch.TuNgayFormat==null || this.baoCaoSearch.DenNgayFormat==null)
                //   {
                //       this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                //       return;
                //   }
                //   let khoId = 0;
                //   if (this.baoCaoSearch.KhoaId != null) {
                //     khoId = this.baoCaoSearch.KhoaId;
                //   }
                //   this.inBaoCaoXuatNhapTon.KhoId = khoId;
                //   this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                //   this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                //   this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
                //     disableClose: false,
                //     width: '1200px',
                //     data: this.inBaoCaoXuatNhapTon,
                //   }
                //   ).afterClosed().subscribe(() => {
                //   });
                // }
                BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype.showPopupLoadingData = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                };
                BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return BaoCaoTinhThoiGianSuDungDvCuaKhListComponent;
            }());
            BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "heightToolbar", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemTNTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemTNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemBSKhamTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemBSKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemRaChiDinhTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemRaChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemLayMauXNTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemLayMauXNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemTraKetQuaXNTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemTraKetQuaXNTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemThucHienCLSTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemThucHienCLSTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemBacSiKetLuanTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemBacSiKetLuanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ThoiDiemBacSiKeDonThuocTemplate', { static: true })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent.prototype, "ThoiDiemBacSiKeDonThuocTemplate", void 0);
            BaoCaoTinhThoiGianSuDungDvCuaKhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.scss")).default]
                })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-routing.module.ts": 
        /*!******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-routing.module.ts ***!
          \******************************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule", function () { return BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTinhThoiGianSuDungDvCuaKhListComponent"],
                    data: {
                        title: 'Báo cáo tính thời gian sử dụng dv của khách hàng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoSoLieuThoiGianSuDungDV,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule = /** @class */ (function () {
                function BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule() {
                }
                return BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule;
            }());
            BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.model.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.model.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhThoiGianSuDungDVCuaKHSearch, TinhThoiGianSuDungDVCuaKH, InTinhThoiGianSuDungDVCuaKH */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhThoiGianSuDungDVCuaKHSearch", function () { return BaoCaoTinhThoiGianSuDungDVCuaKHSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinhThoiGianSuDungDVCuaKH", function () { return TinhThoiGianSuDungDVCuaKH; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InTinhThoiGianSuDungDVCuaKH", function () { return InTinhThoiGianSuDungDVCuaKH; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTinhThoiGianSuDungDVCuaKHSearch = /** @class */ (function () {
                function BaoCaoTinhThoiGianSuDungDVCuaKHSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
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
                return BaoCaoTinhThoiGianSuDungDVCuaKHSearch;
            }());
            var TinhThoiGianSuDungDVCuaKH = /** @class */ (function () {
                function TinhThoiGianSuDungDVCuaKH(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return TinhThoiGianSuDungDVCuaKH;
            }());
            var InTinhThoiGianSuDungDVCuaKH = /** @class */ (function () {
                function InTinhThoiGianSuDungDVCuaKH(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InTinhThoiGianSuDungDVCuaKH;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhThoiGianSuDungDvCuaKhModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhThoiGianSuDungDvCuaKhModule", function () { return BaoCaoTinhThoiGianSuDungDvCuaKhModule; });
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
            /* harmony import */ var _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-list.component.ts");
            /* harmony import */ var _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-routing.module.ts");
            /* harmony import */ var _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.service */ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.service.ts");
            var BaoCaoTinhThoiGianSuDungDvCuaKhModule = /** @class */ (function () {
                function BaoCaoTinhThoiGianSuDungDvCuaKhModule() {
                }
                return BaoCaoTinhThoiGianSuDungDvCuaKhModule;
            }());
            BaoCaoTinhThoiGianSuDungDvCuaKhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTinhThoiGianSuDungDvCuaKhListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTinhThoiGianSuDungDvCuaKhRoutingModule"],
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
                        _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTinhThoiGianSuDungDvCuaKhService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_tinh_thoi_gian_su_dung_dv_cua_kh_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTinhThoiGianSuDungDvCuaKhService"] },
                    ]
                })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.service.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh/bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh.service.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhThoiGianSuDungDvCuaKhService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhThoiGianSuDungDvCuaKhService", function () { return BaoCaoTinhThoiGianSuDungDvCuaKhService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTinhThoiGianSuDungDvCuaKhService = /** @class */ (function (_super) {
                __extends(BaoCaoTinhThoiGianSuDungDvCuaKhService, _super);
                function BaoCaoTinhThoiGianSuDungDvCuaKhService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTinhThoiGianSuDungDvCuaKhService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTinhThoiGianSuDungDvCuaKhService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTinhThoiGianSuDungDvCuaKhService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTinhThoiGianSuDungDvCuaKhService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-bao-cao-tinh-thoi-gian-su-dung-dv-cua-kh-module-es5.js.map