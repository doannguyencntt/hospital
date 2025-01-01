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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tiep-nhan-benh-nhan-kham-bao-cao-tiep-nhan-benh-nhan-kham-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.html ***!
          \********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Báo Cáo',Path:''}\n            ,{Title:'Báo Cáo Tiếp Nhận Người Bệnh Khám',Path:''}\n            ,{Title:'Báo Cáo Tiếp Nhận Người Bệnh Khám',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridChild [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [headerTemplate]=\"headerTemplate\"\n                [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"true\"\n                [groups]=\"groups\" [showStt]=\"true\" [pageable]=\"true\"\n                urlGetData=\"BaoCao/GetDataBaoCaoTiepNhanBenhNhanKhamForGridAsync\" urlGetTotalPage=\"BaoCao/GetTotalBaoCaoTiepNhanBenhNhanKhamForGridAsync\">\n            </app-grid>\n\n            <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                {{rowIndex + 1}}\n            </ng-template>\n\n            <ng-template #thoiGianTiepNhanTemplate let-dataItem>\n                {{dataItem.ThoiGianTiepNhanDisplay}}\n            </ng-template>\n\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}}</strong>\n            </ng-template>\n\n            <ng-template #ngoaiGioHanhChinhTemplate let-dataItem>\n                <app-checkbox id=\"ngoaiGioHanhChinh{{dataItem.Id}}\" label=\"\" [(model)]=\"dataItem.NgoaiGioHanhChinh\" [disabled]=\"true\">\n                </app-checkbox>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div fxFlex=\"1%\" fxFlex.sm></div>\n                    <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                        [maxDate]=\"baoCaoSearch.DenNgayFormat\" (modelChange)=\"changeValueStart()\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                    </app-datetimepicker>\n                    <div fxFlex=\"1%\" fxFlex.sm></div>\n                    <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden\n                        [minDate]=\"baoCaoSearch.TuNgayFormat\" id=\"DenNgayFormat\" (modelChange)=\"changeValueStart()\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                    </app-datetimepicker>\n                    <div fxFlex=\"1%\" fxFlex.sm></div>\n                    <div fxFlex=\"67%\" fxFlex.sm=\"67%\" class=\"pb-0\">\n                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                            (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                            (click)=\"exportExcel()\">Xuất Excel</button>\n\n                        <!-- <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                            (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                        <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                            class=\"mr-1 mt-1\" (click)=\"exportExcel()\" style=\"float: right;\">Xuất Excel</button> -->\n                        <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                            class=\"mr-1 mt-1\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                    </div>\n                    <span fxFlex></span>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.html": 
        /*!**********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.html ***!
          \**********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO TIẾP NHẬN NGƯỜI BỆNH KHÁM</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.scss": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.scss ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGllcC1uaGFuLWJlbmgtbmhhbi1raGFtL2Jhby1jYW8tdGllcC1uaGFuLWJlbmgtbmhhbi1raGFtLWxpc3QvYmFvLWNhby10aWVwLW5oYW4tYmVuaC1uaGFuLWtoYW0tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.ts": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.ts ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhNhanKhamListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKhamListComponent", function () { return BaoCaoTiepNhanBenhNhanKhamListComponent; });
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
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-tiep-nhan-benh-nhan-kham.model */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.model.ts");
            var BaoCaoTiepNhanBenhNhanKhamListComponent = /** @class */ (function () {
                function BaoCaoTiepNhanBenhNhanKhamListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_tiep_nhan_benh_nhan_kham_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoTiepNhanBenhNhanKhamSearch"]();
                    this.inBaoCaoTiepNhanBenhNhanKham = new _bao_cao_tiep_nhan_benh_nhan_kham_model__WEBPACK_IMPORTED_MODULE_12__["InBaoCaoTiepNhanBenhNhanKham"]();
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
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
                    this.groups = [{ field: 'TenNhom', dir: null }];
                    this.ishowView = false;
                    this.IsData = false;
                }
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTiepNhanBenhNhanKham;
                    // this.skip = 0;
                    // this.take = (this.pageSize * this.skip) + this.pageSize;
                    //this.inBaoCaoTiepNhanBenhNhanKham.HostingName = window.location.protocol + "//" + window.location.host;
                    this.gridColumns = [
                        //{ Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate }, //0
                        { Field: "ThoiGianTiepNhan", Title: "Thời gian tiếp nhận", Width: 70, Template: this.thoiGianTiepNhanTemplate },
                        { Field: "MaTN", Title: "Mã TN", Width: 50 },
                        { Field: "HoTenBN", Title: "Họ tên NB", Width: 100 },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 50 },
                        { Field: "GioiTinhDisplay", Title: "Giới tính", Width: 40 },
                        { Field: "BHTYMaSoThe", Title: "Thẻ BHYT", Width: 50 },
                        { Field: "DichVu", Title: "Nội dung", Width: 160, ShowTooltip: true },
                        // { Field: "TenPhongKham", Title: "Phòng khám", Width: 70 },
                        // { Field: "TrangThaiDisplay", Title: "Trạng thái", Width: 50 },
                        { Field: "NgoaiGioHanhChinh", Title: "Ngoài giờ hành chính", Width: 50, Template: this.ngoaiGioHanhChinhTemplate },
                        { Field: "HinhThucDen", Title: "Hình thức đến", Width: 50 },
                        { Field: "NoiGioiThieu", Title: "Nơi giới thiệu", Width: 50 },
                        { Field: "TenNhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                    }
                };
                // pageChange(event): void {
                //   this.skip = event;
                //   if (this.dataSource.data.length == 0) {
                //     this.XemBaoCao();
                //   } else {
                //     var takeTo = +this.skip + +this.pageSize;
                //     let gridData = this.dataSource.data.slice(this.skip, takeTo);
                //     this.gridDataSource = {
                //       data: gridData,
                //       total: this.dataSource.total
                //     };
                //   }
                // }
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.pageChange = function (event) {
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
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.XemBaoCao = function () {
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.baoCaoSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.baoCaoSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    // this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
                    this.gridChild.search();
                    // this.showPopupLoadingData();
                    // this.apiService.post<any>("BaoCao/GetDataBaoCaoTiepNhanBenhNhanKhamForGridAsync", this.baoCaoSearch).subscribe(resultData => {
                    //   if (resultData !== undefined && resultData != null) {
                    //     this.dataSource = {
                    //       data: resultData.Data,
                    //       total: resultData.TotalRowCount
                    //     };
                    //     var takeTo = +this.skip + +this.pageSize;
                    //     let gridData = this.dataSource.data.slice(this.skip, takeTo);
                    //     this.gridDataSource = {
                    //       data: gridData,
                    //       total: resultData.TotalRowCount
                    //     };
                    //     // if (this.gridView.total != 0) {
                    //     //   this.ishowView = true;
                    //     // } else {
                    //     //   this.ishowView = false;
                    //     // }
                    //     this.gridChild._isLoading = false;
                    //     this.gridChild._isLoadingTotalPage = false;
                    //   }
                    //   this.closePopupLoadingData();
                    // },
                    // (err: ApiError) => {
                    //     if (err.Message != "Validation Failed") {
                    //         this.notificationService.showError(err.Message);
                    //     }
                    //     this.closePopupLoadingData();
                    // });
                };
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.exportExcel = function () {
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
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        this.baoCaoSearch.HostingName = this.inBaoCaoTiepNhanBenhNhanKham.HostingName;
                        //this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoTiepNhanBenhNhanKham.HostingName;
                        this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTiepNhanBenhNhanKham", this.gridChild._gridQueryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTiepNhanBenhNhanKham" + dateTimeNow.getFullYear() + ".xlsx");
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
                // InBaoCao() {
                //   this.inBaoCaoTiepNhanBenhNhanKham.FromDate = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                //   this.inBaoCaoTiepNhanBenhNhanKham.ToDate = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                //   this.dialog.open(BaoCaoTiepNhanBenhNhanKhamPopupComponent, {
                //     disableClose: false,
                //     width: '1200px',
                //     data: this.inBaoCaoTiepNhanBenhNhanKham,
                //   }
                //   ).afterClosed().subscribe(() => {
                //   });
                // }
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.changeValueStart = function () {
                    // this.minDateDenNgay = new Date();
                    // if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
                    //   && this.baoCaoSearch.DenNgayFormat > this.baoCaoSearch.TuNgayFormat) {
                    //   this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
                    // }
                };
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.showPopupLoadingData = function () {
                    this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                };
                BaoCaoTiepNhanBenhNhanKhamListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return BaoCaoTiepNhanBenhNhanKhamListComponent;
            }());
            BaoCaoTiepNhanBenhNhanKhamListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thoiGianTiepNhanTemplate', { static: true })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent.prototype, "thoiGianTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngoaiGioHanhChinhTemplate', { static: true })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent.prototype, "ngoaiGioHanhChinhTemplate", void 0);
            BaoCaoTiepNhanBenhNhanKhamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-tiep-nhan-benh-nhan-kham-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tiep-nhan-benh-nhan-kham-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.scss")).default]
                })
            ], BaoCaoTiepNhanBenhNhanKhamListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.scss": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.scss ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10aWVwLW5oYW4tYmVuaC1uaGFuLWtoYW0vYmFvLWNhby10aWVwLW5oYW4tYmVuaC1uaGFuLWtoYW0tcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbVxcYmFvLWNhby10aWVwLW5oYW4tYmVuaC1uaGFuLWtoYW0tcG9wdXBcXGJhby1jYW8tdGllcC1uaGFuLWJlbmgtbmhhbi1raGFtLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbS9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbS1wb3B1cC9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbS9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbS1wb3B1cC9iYW8tY2FvLXRpZXAtbmhhbi1iZW5oLW5oYW4ta2hhbS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.ts": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.ts ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhNhanKhamPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKhamPopupComponent", function () { return BaoCaoTiepNhanBenhNhanKhamPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-tiep-nhan-benh-nhan-kham.model */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.model.ts");
            var BaoCaoTiepNhanBenhNhanKhamPopupComponent = /** @class */ (function () {
                function BaoCaoTiepNhanBenhNhanKhamPopupComponent(apiService, dialogRef, dialog, sanitizer, data) {
                    this.apiService = apiService;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.sanitizer = sanitizer;
                    this.data = data;
                    this.inBaoCaoTiepNhanBenhNhanKham = new _bao_cao_tiep_nhan_benh_nhan_kham_model__WEBPACK_IMPORTED_MODULE_7__["InBaoCaoTiepNhanBenhNhanKham"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.src = "";
                }
                BaoCaoTiepNhanBenhNhanKhamPopupComponent.prototype.ngOnInit = function () {
                    this.inBaoCaoTiepNhanBenhNhanKham = this.data;
                    this.showBaoCao();
                };
                BaoCaoTiepNhanBenhNhanKhamPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                BaoCaoTiepNhanBenhNhanKhamPopupComponent.prototype.showBaoCao = function () {
                    var _this = this;
                    var loaded = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: "Đang tải dữ liệu..." }
                    });
                    this.apiService.post("BaoCao/InBaoCaoTiepNhanBenhNhanKham", this.inBaoCaoTiepNhanBenhNhanKham).subscribe(function (resultData) {
                        if (resultData != "" && resultData != null) {
                            _this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
                        }
                        loaded.close();
                    }, function () {
                        _this.close();
                    });
                };
                BaoCaoTiepNhanBenhNhanKhamPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.post("BaoCao/InBaoCaoTiepNhanBenhNhanKham", _this.inBaoCaoTiepNhanBenhNhanKham).subscribe(function (resultData) {
                            resolve(resultData);
                        });
                        _this.close();
                    });
                };
                return BaoCaoTiepNhanBenhNhanKhamPopupComponent;
            }());
            BaoCaoTiepNhanBenhNhanKhamPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            BaoCaoTiepNhanBenhNhanKhamPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-tiep-nhan-benh-nhan-kham-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tiep-nhan-benh-nhan-kham-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], BaoCaoTiepNhanBenhNhanKhamPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-routing.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-routing.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhNhanKhamRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKhamRoutingModule", function () { return BaoCaoTiepNhanBenhNhanKhamRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_list_bao_cao_tiep_nhan_benh_nhan_kham_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tiep_nhan_benh_nhan_kham_list_bao_cao_tiep_nhan_benh_nhan_kham_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTiepNhanBenhNhanKhamListComponent"],
                    data: {
                        title: 'Báo cáo tiếp nhận người bệnh khám',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTiepNhanBenhNhanKham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTiepNhanBenhNhanKhamRoutingModule = /** @class */ (function () {
                function BaoCaoTiepNhanBenhNhanKhamRoutingModule() {
                }
                return BaoCaoTiepNhanBenhNhanKhamRoutingModule;
            }());
            BaoCaoTiepNhanBenhNhanKhamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTiepNhanBenhNhanKhamRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.model.ts": 
        /*!*****************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.model.ts ***!
          \*****************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhNhanKhamSearch, BaoCaoTiepNhanBenhNhanKham, InBaoCaoTiepNhanBenhNhanKham */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKhamSearch", function () { return BaoCaoTiepNhanBenhNhanKhamSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKham", function () { return BaoCaoTiepNhanBenhNhanKham; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTiepNhanBenhNhanKham", function () { return InBaoCaoTiepNhanBenhNhanKham; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTiepNhanBenhNhanKhamSearch = /** @class */ (function () {
                function BaoCaoTiepNhanBenhNhanKhamSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, SearchString, HostingName) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (HostingName === void 0) { HostingName = null; }
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.SearchString = SearchString;
                    this.HostingName = HostingName;
                }
                return BaoCaoTiepNhanBenhNhanKhamSearch;
            }());
            var BaoCaoTiepNhanBenhNhanKham = /** @class */ (function () {
                function BaoCaoTiepNhanBenhNhanKham(STT, ThoiGianTiepNhan, ThoiGianTiepNhanDisplay, MaTN, HoTenBN, NgaySinhDisplay, GioiTinhDisplay, BHTYMaSoThe, PhieuKham, PhongKhamId, TenPhongKham, TrangThai, TrangThaiDisplay, NgoaiGioHanhChinh, HinhThucDen, NoiGioiThieu) {
                    if (STT === void 0) { STT = null; }
                    if (ThoiGianTiepNhan === void 0) { ThoiGianTiepNhan = null; }
                    if (ThoiGianTiepNhanDisplay === void 0) { ThoiGianTiepNhanDisplay = null; }
                    if (MaTN === void 0) { MaTN = null; }
                    if (HoTenBN === void 0) { HoTenBN = null; }
                    if (NgaySinhDisplay === void 0) { NgaySinhDisplay = null; }
                    if (GioiTinhDisplay === void 0) { GioiTinhDisplay = null; }
                    if (BHTYMaSoThe === void 0) { BHTYMaSoThe = null; }
                    if (PhieuKham === void 0) { PhieuKham = null; }
                    if (PhongKhamId === void 0) { PhongKhamId = 0; }
                    if (TenPhongKham === void 0) { TenPhongKham = null; }
                    if (TrangThai === void 0) { TrangThai = null; }
                    if (TrangThaiDisplay === void 0) { TrangThaiDisplay = null; }
                    if (NgoaiGioHanhChinh === void 0) { NgoaiGioHanhChinh = null; }
                    if (HinhThucDen === void 0) { HinhThucDen = null; }
                    if (NoiGioiThieu === void 0) { NoiGioiThieu = null; }
                    this.STT = STT;
                    this.ThoiGianTiepNhan = ThoiGianTiepNhan;
                    this.ThoiGianTiepNhanDisplay = ThoiGianTiepNhanDisplay;
                    this.MaTN = MaTN;
                    this.HoTenBN = HoTenBN;
                    this.NgaySinhDisplay = NgaySinhDisplay;
                    this.GioiTinhDisplay = GioiTinhDisplay;
                    this.BHTYMaSoThe = BHTYMaSoThe;
                    this.PhieuKham = PhieuKham;
                    this.PhongKhamId = PhongKhamId;
                    this.TenPhongKham = TenPhongKham;
                    this.TrangThai = TrangThai;
                    this.TrangThaiDisplay = TrangThaiDisplay;
                    this.NgoaiGioHanhChinh = NgoaiGioHanhChinh;
                    this.HinhThucDen = HinhThucDen;
                    this.NoiGioiThieu = NoiGioiThieu;
                }
                return BaoCaoTiepNhanBenhNhanKham;
            }());
            var InBaoCaoTiepNhanBenhNhanKham = /** @class */ (function () {
                function InBaoCaoTiepNhanBenhNhanKham(HostingName, FromDate, ToDate) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTiepNhanBenhNhanKham;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.module.ts": 
        /*!******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.module.ts ***!
          \******************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhNhanKhamModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKhamModule", function () { return BaoCaoTiepNhanBenhNhanKhamModule; });
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
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-routing.module.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_list_bao_cao_tiep_nhan_benh_nhan_kham_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-list/bao-cao-tiep-nhan-benh-nhan-kham-list.component.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_popup_bao_cao_tiep_nhan_benh_nhan_kham_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham-popup/bao-cao-tiep-nhan-benh-nhan-kham-popup.component.ts");
            /* harmony import */ var _bao_cao_tiep_nhan_benh_nhan_kham_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bao-cao-tiep-nhan-benh-nhan-kham.service */ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.service.ts");
            var BaoCaoTiepNhanBenhNhanKhamModule = /** @class */ (function () {
                function BaoCaoTiepNhanBenhNhanKhamModule() {
                }
                return BaoCaoTiepNhanBenhNhanKhamModule;
            }());
            BaoCaoTiepNhanBenhNhanKhamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tiep_nhan_benh_nhan_kham_list_bao_cao_tiep_nhan_benh_nhan_kham_list_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTiepNhanBenhNhanKhamListComponent"], _bao_cao_tiep_nhan_benh_nhan_kham_popup_bao_cao_tiep_nhan_benh_nhan_kham_popup_component__WEBPACK_IMPORTED_MODULE_22__["BaoCaoTiepNhanBenhNhanKhamPopupComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_tiep_nhan_benh_nhan_kham_routing_module__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTiepNhanBenhNhanKhamRoutingModule"],
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
                        _bao_cao_tiep_nhan_benh_nhan_kham_service__WEBPACK_IMPORTED_MODULE_23__["BaoCaoTiepNhanBenhNhanKhamService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_tiep_nhan_benh_nhan_kham_service__WEBPACK_IMPORTED_MODULE_23__["BaoCaoTiepNhanBenhNhanKhamService"] },
                    ],
                    entryComponents: [
                        _bao_cao_tiep_nhan_benh_nhan_kham_popup_bao_cao_tiep_nhan_benh_nhan_kham_popup_component__WEBPACK_IMPORTED_MODULE_22__["BaoCaoTiepNhanBenhNhanKhamPopupComponent"]
                    ]
                })
            ], BaoCaoTiepNhanBenhNhanKhamModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.service.ts": 
        /*!*******************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tiep-nhan-benh-nhan-kham/bao-cao-tiep-nhan-benh-nhan-kham.service.ts ***!
          \*******************************************************************************************************************/
        /*! exports provided: BaoCaoTiepNhanBenhNhanKhamService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTiepNhanBenhNhanKhamService", function () { return BaoCaoTiepNhanBenhNhanKhamService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTiepNhanBenhNhanKhamService = /** @class */ (function (_super) {
                __extends(BaoCaoTiepNhanBenhNhanKhamService, _super);
                function BaoCaoTiepNhanBenhNhanKhamService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTiepNhanBenhNhanKhamService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTiepNhanBenhNhanKhamService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTiepNhanBenhNhanKhamService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTiepNhanBenhNhanKhamService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tiep-nhan-benh-nhan-kham-bao-cao-tiep-nhan-benh-nhan-kham-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tiep-nhan-benh-nhan-kham-bao-cao-tiep-nhan-benh-nhan-kham-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tiep-nhan-benh-nhan-kham-bao-cao-tiep-nhan-benh-nhan-kham-module-es5.js.map