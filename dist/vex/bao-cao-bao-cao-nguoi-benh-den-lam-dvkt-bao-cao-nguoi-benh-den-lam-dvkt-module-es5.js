(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-nguoi-benh-den-lam-dvkt-bao-cao-nguoi-benh-den-lam-dvkt-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.html ***!
          \*****************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'CSKH', Path:''},\n                {Title:'Người Bệnh Đến Làm DVKT', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid  [data]=\"gridDataSource\" class=\"k-grid1 grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\"\n                        (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\" width=\"{{getWidthColumn(0)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\" width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ dataItem.MaYeuCauTiepNhan}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column-group title=\"Thời gian khám\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(2)}}</div>\n                            </ng-template>\n                        \n                            <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\" width=\"{{getWidthColumn(3)}}\"\n                                [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ dataItem.ThoiGianTiepNhanDisplay}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\" width=\"{{getWidthColumn(4)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.ThoiGianBatDauKhamDisplay}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        \n                            <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\" width=\"{{getWidthColumn(5)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.ThoiGianKetThucKhamDisplay}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\" width=\"{{getWidthColumn(6)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.NgayKhamDisplay}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\" width=\"{{getWidthColumn(7)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.TenNguoiBenh}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\" width=\"{{getWidthColumn(8)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.SoDienThoai}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\" width=\"{{getWidthColumn(9)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.DoiTuong}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\" width=\"{{getWidthColumn(10)}}\"\n                            [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.GioiTinh}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\" width=\"{{getWidthColumn(11)}}\"\n                            [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.NgaySinhDisplay}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\" width=\"{{getWidthColumn(12)}}\"\n                            [style]=\"{'text-align': 'left'}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.DiaChi}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\" width=\"{{getWidthColumn(13)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.BacSiKham}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\" width=\"{{getWidthColumn(14)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.DichVuKyThuatThucHien}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\" width=\"{{getWidthColumn(15)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.KetQua}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\" width=\"{{getWidthColumn(16)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.HuongGiaiQuyet}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\" width=\"{{getWidthColumn(17)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.NgayHenTaiKhamDisplay}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        \n                        <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\" width=\"{{getWidthColumn(18)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"reverse-ellipsis r\" style=\"text-align: left;\"> {{ dataItem.NguoiGioiThieu}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                       \n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"XemBaoCao()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.scss": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.scss ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tbmd1b2ktYmVuaC1kZW4tbGFtLWR2a3QvYmFvLWNhby1uZ3VvaS1iZW5oLWRlbi1sYW0tZHZrdC1saXN0L2Jhby1jYW8tbmd1b2ktYmVuaC1kZW4tbGFtLWR2a3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.ts": 
        /*!*************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.ts ***!
          \*************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoNguoiBenhDenLamDvktListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoNguoiBenhDenLamDvktListComponent", function () { return BaoCaoNguoiBenhDenLamDvktListComponent; });
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
            /* harmony import */ var _bao_cao_nguoi_benh_den_lam_dvkt_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-nguoi-benh-den-lam-dvkt.model */ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt.model.ts");
            var BaoCaoNguoiBenhDenLamDvktListComponent = /** @class */ (function () {
                function BaoCaoNguoiBenhDenLamDvktListComponent(authService, apiService, notificationService, dialog) {
                    this.authService = authService;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.baoCaoSearch = new _bao_cao_nguoi_benh_den_lam_dvkt_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoNguoiBenhDenLamDvktTimKiemNangCao"]();
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
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this._showDefaultPagerTemplate = true;
                }
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoNguoiBenhDenLamDVKT;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 70 },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã y tế", Width: 120 },
                        { Field: "_", Title: "Thời gian khám", Width: 500 },
                        { Field: "ThoiGianTiepNhanDisplay", Title: "Thời gian tiếp nhận", Width: 125 },
                        { Field: "ThoiGianBatDauKhamDisplay", Title: "Thời gian bắt đầu DVKT", Width: 125 },
                        { Field: "ThoiGianKetThucKhamDisplay", Title: "Thời gian kết thúc DVKT", Width: 125 },
                        { Field: "NgayKhamDisplay", Title: "Ngày", Width: 125 },
                        { Field: "TenNguoiBenh", Title: "Tên người bệnh", Width: 190 },
                        { Field: "SoDienThoai", Title: "Số điện thoại", Width: 100 },
                        { Field: "DoiTuong", Title: "Đối tượng", Width: 100 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 70 },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 100 },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 160 },
                        { Field: "BacSiKham", Title: "Người thực hiện", Width: 170 },
                        { Field: "DichVuThucHien", Title: "Dịch vụ thực hiện", Width: 300 },
                        { Field: "KetQua", Title: "Kết quả", Width: 400 },
                        { Field: "HuongGiaiQuyet", Title: "Hướng giải quyết", Width: 160 },
                        { Field: "NgayHenTaiKhamDisplay", Title: "Ngày hẹn tái khám", Width: 160 },
                        { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 160 } //18
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
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    this.XemBaoCao(true);
                };
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.getMinWidthColumn = function (minWidth) {
                    var widthParent = jQuery("#baoCaoGrid").parent().width();
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
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.XemBaoCao = function (isChagePage) {
                    var _this = this;
                    if (isChagePage === void 0) { isChagePage = false; }
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    if (!isChagePage) {
                        this.skip = 0;
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    var searchText = this.getSearchText();
                    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
                    this.apiService.post("BaoCao/GetDataBaoCaoNguoiBenhDenLamDVKTForGrid", this.queryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.gridDataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            _this._isLoading = false;
                            _this.apiService.post("BaoCao/GetTotalBaoCaoNguoiBenhDenLamDVKTForGrid", _this.queryInfo).subscribe(function (resultDataTotal) {
                                if (resultDataTotal !== undefined && resultDataTotal != null) {
                                    _this.gridDataSource.total = resultDataTotal.TotalRowCount;
                                    _this._isLoadingTotalPage = false;
                                }
                            }, function () {
                                _this._isLoadingTotalPage = false;
                            });
                        }
                    });
                };
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.getSearchText = function () {
                    var searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
                    searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].convertSpecialXML(searchText);
                    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
                    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
                    return searchText;
                };
                BaoCaoNguoiBenhDenLamDvktListComponent.prototype.exportExcel = function () {
                    var _this = this;
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
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        var searchText = this.getSearchText();
                        this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoNguoiBenhDenLamDVKT", this.queryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoNguoiBenhDenLamDVKT" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return BaoCaoNguoiBenhDenLamDvktListComponent;
            }());
            BaoCaoNguoiBenhDenLamDvktListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            BaoCaoNguoiBenhDenLamDvktListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-nguoi-benh-den-lam-dvkt-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-nguoi-benh-den-lam-dvkt-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-nguoi-benh-den-lam-dvkt-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.scss")).default]
                })
            ], BaoCaoNguoiBenhDenLamDvktListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-routing.module.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-routing.module.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: BaoCaoNguoiBenhDenLamDvktRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoNguoiBenhDenLamDvktRoutingModule", function () { return BaoCaoNguoiBenhDenLamDvktRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_nguoi_benh_den_lam_dvkt_list_bao_cao_nguoi_benh_den_lam_dvkt_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component */ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_nguoi_benh_den_lam_dvkt_list_bao_cao_nguoi_benh_den_lam_dvkt_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoNguoiBenhDenLamDvktListComponent"],
                    data: {
                        title: 'Báo cáo người bệnh đến làm DVKT',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoNguoiBenhDenKham,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BaoCaoNguoiBenhDenLamDvktRoutingModule = /** @class */ (function () {
                function BaoCaoNguoiBenhDenLamDvktRoutingModule() {
                }
                return BaoCaoNguoiBenhDenLamDvktRoutingModule;
            }());
            BaoCaoNguoiBenhDenLamDvktRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoNguoiBenhDenLamDvktRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt.model.ts": 
        /*!***************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt.model.ts ***!
          \***************************************************************************************************************/
        /*! exports provided: BaoCaoNguoiBenhDenLamDvktTimKiemNangCao */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoNguoiBenhDenLamDvktTimKiemNangCao", function () { return BaoCaoNguoiBenhDenLamDvktTimKiemNangCao; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoNguoiBenhDenLamDvktTimKiemNangCao = /** @class */ (function () {
                function BaoCaoNguoiBenhDenLamDvktTimKiemNangCao(FromDate, ToDate, TuNgayFormat, DenNgayFormat, SearchString) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                    this.SearchString = SearchString;
                }
                return BaoCaoNguoiBenhDenLamDvktTimKiemNangCao;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt.module.ts": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt.module.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: BaoCaoNguoiBenhDenLamDvktModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoNguoiBenhDenLamDvktModule", function () { return BaoCaoNguoiBenhDenLamDvktModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _bao_cao_nguoi_benh_den_lam_dvkt_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bao-cao-nguoi-benh-den-lam-dvkt-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-routing.module.ts");
            /* harmony import */ var _bao_cao_nguoi_benh_den_lam_dvkt_list_bao_cao_nguoi_benh_den_lam_dvkt_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component */ "./src/app/modules/main/bao-cao/bao-cao-nguoi-benh-den-lam-dvkt/bao-cao-nguoi-benh-den-lam-dvkt-list/bao-cao-nguoi-benh-den-lam-dvkt-list.component.ts");
            var BaoCaoNguoiBenhDenLamDvktModule = /** @class */ (function () {
                function BaoCaoNguoiBenhDenLamDvktModule() {
                }
                return BaoCaoNguoiBenhDenLamDvktModule;
            }());
            BaoCaoNguoiBenhDenLamDvktModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_nguoi_benh_den_lam_dvkt_list_bao_cao_nguoi_benh_den_lam_dvkt_list_component__WEBPACK_IMPORTED_MODULE_11__["BaoCaoNguoiBenhDenLamDvktListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_4__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                        _bao_cao_nguoi_benh_den_lam_dvkt_routing_module__WEBPACK_IMPORTED_MODULE_10__["BaoCaoNguoiBenhDenLamDvktRoutingModule"]
                    ]
                })
            ], BaoCaoNguoiBenhDenLamDvktModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-nguoi-benh-den-lam-dvkt-bao-cao-nguoi-benh-den-lam-dvkt-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-nguoi-benh-den-lam-dvkt-bao-cao-nguoi-benh-den-lam-dvkt-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-nguoi-benh-den-lam-dvkt-bao-cao-nguoi-benh-den-lam-dvkt-module-es5.js.map