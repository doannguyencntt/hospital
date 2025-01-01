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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tiep-nhan-benh-pham-bao-cao-tiep-nhan-benh-pham-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.html ***!
          \*****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Xét Ngiệm', Path:''},\n                    {Title:'Tiếp Nhận Bệnh Phẩm', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"NhomDoiTuongId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToSend=\"khoa\"\n                    class=\"mt-1 on-header\" popupSettings=\"null\" [templateHeader]=\"doanTemplateHeader\"\n                    [template]=\"doanTemplate\" label=\"Nhóm dối tượng\" url=\"BaoCao/GetListNhomDoiTuong\" bind=\"true\"\n                    [(model)]=\"baoCaoSearch.DoanId\">\n                </app-combobox>\n\n                <ng-template #doanTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #doanTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td>{{dataItem.DisplayName}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\"  [style.display]=\"ishowView==true ? 'block':'none'\">\n                    <app-grid  [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n                        [useActionDefault]=\"false\" [autoHeight]=\"true\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\"\n                        [checkboxAble]=\"false\" pageSize=\"50\" [gridDataSource]=\"dataSource\">\n                    </app-grid>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.scss": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.scss ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGllcC1uaGFuLWJlbmgtcGhhbS9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLXBoYW0tbGlzdC9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLXBoYW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.ts": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.ts ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhPhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhPhamListComponent", function () { return BaoCaoTiepNhanBenhPhamListComponent; });
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
            /* harmony import */ var _bao_cao_tiep_nhan_benh_pham_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-tiep-nhan-benh-pham.model */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.model.ts");
            var BaoCaoTiepNhanBenhPhamListComponent = /** @class */ (function () {
                // public pageChange(event: PageChangeEvent): void {
                //   this.baoCaoSearch.Skip = event.skip;
                //   this.skip = event.skip;
                //   //this.XemBaoCao();
                // }
                function BaoCaoTiepNhanBenhPhamListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_tiep_nhan_benh_pham_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTiepNhanBenhPhamSearch"]();
                    this.inBaoCaoTiepNhanBenhPham = new _bao_cao_tiep_nhan_benh_pham_model__WEBPACK_IMPORTED_MODULE_12__["InBaoCaoTiepNhanBenhPham"]();
                    this.pageSize = 50;
                    this.skip = 0;
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.ishowView = false;
                    this.IsData = false;
                }
                BaoCaoTiepNhanBenhPhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTiepNhanBenhPham;
                    // this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    // this.skip = 0;
                    // this.take = (this.pageSize * this.skip) + this.pageSize;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoTiepNhanBenhPham.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoTiepNhanBenhPham.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "GioNhanString", Title: "Giờ nhận", Width: 20 },
                        { Field: "Barcode", Title: "Barcode", Width: 20 },
                        { Field: "GioNhanString", Title: "Năm sinh", Width: 15 },
                        { Field: "HoTen", Title: "Họ tên", Width: 20 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 20 },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(6, 30, 0, 0);
                    this.minDateDenNgay = new Date();
                    this.minDateDenNgay.setHours(6, 30, 0, 0);
                    this.minDateDenNgay.setDate(this.minDateDenNgay.getDate() + 1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
                    }
                };
                BaoCaoTiepNhanBenhPhamListComponent.prototype.exportExcel = function () {
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
                        var DoanId = 0;
                        if (this.baoCaoSearch.DoanId != undefined && this.baoCaoSearch.DoanId != null) {
                            DoanId = this.baoCaoSearch.DoanId;
                        }
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = DoanId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoTiepNhanBenhPham.HostingName;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTiepNhanBenhPham", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTiepNhanBenhPham" + dateTimeNow.getFullYear() + ".xlsx");
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
                // XemBaoCao() {
                //   if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                //     this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                //     this.gridChild._isLoadingTotalPage = false;
                //     this.gridChild._isLoading = false;
                //     return;
                //   }
                //   this._isLoading = true;
                //   this._isLoadingTotalPage = true;
                //   if (this.baoCaoSearch.TuNgayFormat == null) {
                //     this.minDateTuNgay = new Date();
                //     this.minDateTuNgay.setHours(0, 0, 0, 0);
                //     this.baoCaoSearch.FromDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
                //   }
                //   if (this.baoCaoSearch.DenNgayFormat == null) {
                //     this.minDateTuNgay = new Date();
                //     this.baoCaoSearch.ToDate = CommonService.formatDateTime(this.minDateTuNgay, "dd/mm/yyyy");
                //   }
                //   let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                //   let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                //   let doanId = 0;
                //   if (this.baoCaoSearch.DoanId != undefined && this.baoCaoSearch.DoanId != null) {
                //     doanId = this.baoCaoSearch.DoanId;
                //   }
                //   this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                //   this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                //   this.baoCaoSearch.AdditionalSearchString = doanId + ";0;" + tuNgay + ";" + denNgay;
                //   this.apiService.post<any>("BaoCao/GetDataBaoCaoTiepNhanBenhPhamForGridAsync", this.baoCaoSearch).subscribe(resultData => {
                //     if (resultData !== undefined && resultData != null) {
                //       this.IsData = true;
                //       console.log(resultData);
                //       this.dataSource = {
                //         data: resultData.Data,
                //         total: resultData.TotalRowCount
                //       };
                //       this.gridChild._isLoadingTotalPage = false;
                //       this.gridChild._isLoading = false;
                //       if (this.dataSource.total != 0) {
                //         this.ishowView = true;
                //       } else {
                //         this.ishowView = false;
                //       }
                //     }
                //   });
                // }
                BaoCaoTiepNhanBenhPhamListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this.ishowView = true;
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
                    this.apiService.post("BaoCao/GetDataBaoCaoTiepNhanBenhPhamForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                //this.showPrintExport = true;
                            }
                            _this.ishowView = true;
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            _this.gridChild._isLoadingTotalPage = false;
                            _this.gridChild._isLoading = false;
                        }
                        else {
                            _this.ishowView = false;
                        }
                    });
                };
                return BaoCaoTiepNhanBenhPhamListComponent;
            }());
            BaoCaoTiepNhanBenhPhamListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoTiepNhanBenhPhamListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoTiepNhanBenhPhamListComponent.prototype, "baoCaoGrid", void 0);
            BaoCaoTiepNhanBenhPhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-tiep-nhan-benh-pham-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tiep-nhan-benh-pham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tiep-nhan-benh-pham-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.scss")).default]
                })
            ], BaoCaoTiepNhanBenhPhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-routing.module.ts": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-routing.module.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhPhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhPhamRoutingModule", function () { return BaoCaoTiepNhanBenhPhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_pham_list_bao_cao_tiep_nhan_benh_pham_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tiep_nhan_benh_pham_list_bao_cao_tiep_nhan_benh_pham_list_component__WEBPACK_IMPORTED_MODULE_5__["BaoCaoTiepNhanBenhPhamListComponent"],
                    data: {
                        title: 'Báo cáo xuất nhập tồn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTiepNhanBenhPham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTiepNhanBenhPhamRoutingModule = /** @class */ (function () {
                function BaoCaoTiepNhanBenhPhamRoutingModule() {
                }
                return BaoCaoTiepNhanBenhPhamRoutingModule;
            }());
            BaoCaoTiepNhanBenhPhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTiepNhanBenhPhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.model.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.model.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhPhamSearch, BaoCaoTiepNhanBenhPham, InBaoCaoTiepNhanBenhPham */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhPhamSearch", function () { return BaoCaoTiepNhanBenhPhamSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhPham", function () { return BaoCaoTiepNhanBenhPham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTiepNhanBenhPham", function () { return InBaoCaoTiepNhanBenhPham; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTiepNhanBenhPhamSearch = /** @class */ (function () {
                function BaoCaoTiepNhanBenhPhamSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, DoanId, KhoaId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (DoanId === void 0) { DoanId = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
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
                    this.DoanId = DoanId;
                    this.KhoaId = KhoaId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTiepNhanBenhPhamSearch;
            }());
            var BaoCaoTiepNhanBenhPham = /** @class */ (function () {
                function BaoCaoTiepNhanBenhPham(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return BaoCaoTiepNhanBenhPham;
            }());
            var InBaoCaoTiepNhanBenhPham = /** @class */ (function () {
                function InBaoCaoTiepNhanBenhPham(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTiepNhanBenhPham;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.module.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.module.ts ***!
          \********************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhPhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhPhamModule", function () { return BaoCaoTiepNhanBenhPhamModule; });
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
            /* harmony import */ var _bao_cao_tiep_nhan_benh_pham_list_bao_cao_tiep_nhan_benh_pham_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-list/bao-cao-tiep-nhan-benh-pham-list.component.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_pham_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-pham-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham-routing.module.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_pham_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-pham.service */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.service.ts");
            var BaoCaoTiepNhanBenhPhamModule = /** @class */ (function () {
                function BaoCaoTiepNhanBenhPhamModule() {
                }
                return BaoCaoTiepNhanBenhPhamModule;
            }());
            BaoCaoTiepNhanBenhPhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tiep_nhan_benh_pham_list_bao_cao_tiep_nhan_benh_pham_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTiepNhanBenhPhamListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_tiep_nhan_benh_pham_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTiepNhanBenhPhamRoutingModule"],
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
                        _bao_cao_tiep_nhan_benh_pham_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTiepNhanBenhPhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_tiep_nhan_benh_pham_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTiepNhanBenhPhamService"] },
                    ]
                })
            ], BaoCaoTiepNhanBenhPhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.service.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-pham/bao-cao-tiep-nhan-benh-pham.service.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhPhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhPhamService", function () { return BaoCaoTiepNhanBenhPhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTiepNhanBenhPhamService = /** @class */ (function (_super) {
                __extends(BaoCaoTiepNhanBenhPhamService, _super);
                function BaoCaoTiepNhanBenhPhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTiepNhanBenhPhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTiepNhanBenhPhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTiepNhanBenhPhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTiepNhanBenhPhamService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tiep-nhan-benh-pham-bao-cao-tiep-nhan-benh-pham-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tiep-nhan-benh-pham-bao-cao-tiep-nhan-benh-pham-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tiep-nhan-benh-pham-bao-cao-tiep-nhan-benh-pham-module-es5.js.map