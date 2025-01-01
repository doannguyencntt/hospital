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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-the-kho-vat-tu-y-te-bao-cao-the-kho-vat-tu-y-te-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.html ***!
          \*****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Vật tư', Path:''},\n                {Title:'Thẻ Kho', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"dataSource\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (detailExpand)=\"detailExpand($event)\"\n                (pageChange)=\"pageChange($event)\" id=\"baoCaoTheKhoGrid\" #baoCaoTheKhoGrid>\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" popupSettings=\"\" bind=\"true\"\n                            (modelChange)=\"khoChange($event)\" [autoSelectFirstItem]=\"true\"\n                            url=\"BaoCaoVatTu/GetKhoChoBaoCaoTheKhoVatTu\" [(model)]=\"baoCaoTheKhoSearch.KhoId\">\n                        </app-combobox>\n\n                        <app-combobox fxFlex=\"20%\" [(model)]=\"baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId\"\n                            id=\"DuocPhamHoacVatTuBenhVienId\" label=\"Tên vật tư\" url=\"BaoCaoVatTu/GetVatTuTheoKhoBaoCao\"\n                            [templateHeader]=\"duocPhamTemplateHeader\" (selectionChange)=\"selectionChangeDpVT($event)\"\n                            [queryInfo]=\"{ParameterDependencies:'{KhoId:' + baoCaoTheKhoSearch.KhoId +'}', Take: 50}\"\n                            [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\" [template]=\"duocPhamTemplate\"\n                            style=\"margin-left: 5px;\" class=\"mt-1 on-header pb-0 mr-1\">\n                            <ng-template #duocPhamTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <!-- <th width=\"20%\">Loại</th> -->\n                                        <th width=\"30%\">Mã</th>\n                                        <th>Tên</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #duocPhamTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <!-- <td width=\"20%\">{{dataItem.LoaiDuocPhamHoacVatTuDisplay}}</td> -->\n                                        <td width=\"30%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-combobox>\n\n                        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"15%\"\n                            fxFlex.sm=\"auto\" (modelChange)=\"changeValueStart($event)\"\n                            [(model)]=\"baoCaoTheKhoSearch.RangeFromDate\" label=\"Từ ngày - đến ngày\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-daterangepicker>\n\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column hidden=true field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"{{getTitleColumn(2)}}\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(2)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                        width=\"{{getWidthColumn(3)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                        width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                    width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>{{totalTonDauKy('TongSLTonDauKy') }}</span>\n                    </ng-template> -->\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"{{getTitleColumn(7)}}\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(7)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                        width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalSL('TongSLNhap')}}</span>\n                        </ng-template> -->\n\n\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                        width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalSL('TongSLXuat')}}</span>\n                        </ng-template> -->\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                        width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\\\n                        <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalSL('TongSLTon') }}</span>\n                        </ng-template> -->\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n\n                <!-- [groups]=\"groups\" -->\n                <!-- (extOnDataBound)=\"onDataBoundChild($event)\" -->\n                <ng-template kendoGridDetailTemplate let-dataItem=\"dataItem\">\n                    <app-grid [useHeaderDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\" class=\"k-grid-crollbar\"\n                        [gridColumns]=\"gridColumnsChild\" [useAddDeault]=\"false\" [lazyLoadPage]=\"false\"\n                        [checkboxAble]=\"false\" [autoHeight]=\"true\" [useActionDefault]=\"false\"\n                        [additionalSearchString]=\"additionalSearchString\" masterName=\"BaoCaoChild\"\n                        [removeGroupFooterIfIsOnlyOne]=\"true\">\n                    </app-grid>\n                </ng-template>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"reFresh()\">\n                        </div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.scss": 
        /*!***************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.scss ***!
          \***************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGhlLWtoby12YXQtdHUteS10ZS9iYW8tY2FvLXRoZS1raG8tdmF0LXR1LXktdGUtbGlzdC9iYW8tY2FvLXRoZS1raG8tdmF0LXR1LXktdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.ts": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.ts ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTheKhoVatTuListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoVatTuListComponent", function () { return BaoCaoTheKhoVatTuListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _bao_cao_the_kho_vat_tu_y_te_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../bao-cao-the-kho-vat-tu-y-te.model */ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.model.ts");
            var BaoCaoTheKhoVatTuListComponent = /** @class */ (function () {
                function BaoCaoTheKhoVatTuListComponent(apiService, dialog, authService, notificationService, cd) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.baoCaoTheKhoSearch = new _bao_cao_the_kho_vat_tu_y_te_model__WEBPACK_IMPORTED_MODULE_14__["BaoCaoTheKhoSearch"]();
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.pageSize = 10;
                    this.skip = 0;
                    this.urlGetDataGridChild = "BaoCaoVatTu/GetDataTheKhoVatTuForGridChildAsync";
                    this.urlGetPageDataGridChild = "";
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.heightToolbar = 140;
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.ishowView = false;
                    this.IsData = false;
                    this.duocPhamHoacVatTuBenhVienId = null;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.tonDauKy = 0;
                    this.sumTongSLNhap = 0;
                    this.sumTongSLXuat = 0;
                }
                BaoCaoTheKhoVatTuListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BaoCaoTheKhoVatTuYTe;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null) {
                        this.baoCaoTheKhoSearch.RangeFromDate.startDate = this.minDateTuNgay;
                    }
                    if (this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
                        this.baoCaoTheKhoSearch.RangeFromDate.endDate = new Date();
                        this.baoCaoTheKhoSearch.RangeFromDate.endDate.setHours(23, 59, 59);
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 20, hidden: true },
                        { Field: "NgayThangDisplay", Title: "Ngày tháng", Width: 50 },
                        { Field: "SoChungTu", Title: "Số chứng từ", Width: 100 },
                        { Field: "SCTNhap", Title: "Nhập", Width: 50 },
                        { Field: "SCTXuat", Title: "Xuất", Width: 50 },
                        { Field: "DienGiai", Title: "Diễn giải", Width: 100 },
                        { Field: "TongSLTonDauKy", Title: "SL tồn đầu kỳ", Width: 50 },
                        { Field: "SoLuong", Title: "Số lượng", Width: 120 },
                        { Field: "TongSLNhap", Title: "Nhập", Width: 40 },
                        { Field: "TongSLXuat", Title: "Xuất", Width: 40 },
                        { Field: "TongSLTon", Title: "Tồn", Width: 40 },
                    ];
                    this.gridColumnsChild = [
                        { Field: "NgayThangDisplay", Title: "Ngày tháng", Width: 50 },
                        { Field: "SCTNhap", Title: "Nhập", Width: 50 },
                        {
                            Field: "SCTXuat", Title: "Xuất", Width: 50 //4
                        },
                        { Field: "DienGiai", Title: "Diễn giải", Width: 100 },
                        {
                            Field: "SLTonDauKy", Title: "SL tồn đầu kỳ", Width: 50 //6
                        },
                        { Field: "SLNhap", Title: "Nhập", Width: 40 },
                        {
                            Field: "SLXuat", Title: "Xuất", Width: 40
                        },
                        { Field: "SLTon", Title: "Tồn", Width: 40 },
                    ];
                };
                BaoCaoTheKhoVatTuListComponent.prototype.ngAfterContentInit = function () {
                    var self = this;
                    self.height = jQuery(window).height() - self.heightToolbar;
                    if (self.height < 400) {
                        self.height = 400;
                    }
                    jQuery(window).resize(function () {
                        self.height = jQuery(window).height() - self.heightToolbar;
                        if (self.height < 400) {
                            self.height = 400;
                        }
                    });
                    this.cd.detectChanges();
                };
                BaoCaoTheKhoVatTuListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoTheKhoVatTuListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoTheKhoVatTuListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoTheKhoVatTuListComponent.prototype.getMinWidthColumn = function (minWidth) {
                    var widthParent = jQuery("#baoCaoTheKhoGrid").parent().width();
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
                BaoCaoTheKhoVatTuListComponent.prototype.totalTonDauKy = function (field) {
                    if (this.dataSource.data.length > 0) {
                        return this.dataSource.data[0].TongSLTonDauKy;
                        // return this.dataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
                    }
                };
                BaoCaoTheKhoVatTuListComponent.prototype.totalSL = function (field) {
                    switch (field) {
                        case 'TongSLNhap':
                            if (this.dataSource.data != undefined) {
                                this.sumTongSLNhap = this.dataSource.data.reduce(function (sum, item) { return sum + item.TongSLNhap; }, 0);
                                return this.sumTongSLNhap;
                            }
                        case 'TongSLXuat':
                            if (this.dataSource.data != undefined) {
                                this.sumTongSLNhap = this.dataSource.data.reduce(function (sum, item) { return sum + item.TongSLXuat; }, 0);
                                return this.sumTongSLNhap;
                            }
                        case 'TongSLTon':
                            return this.tonDauKy + this.sumTongSLNhap - this.sumTongSLXuat;
                    }
                };
                BaoCaoTheKhoVatTuListComponent.prototype.detailExpand = function (event) {
                    if (event.dataItem) {
                        this.baoCaoTheKhoSearch.NgayThang = event.dataItem.NgayThang;
                        this.additionalSearchString = JSON.stringify(this.baoCaoTheKhoSearch);
                        // this.additionalSearchString = this.baoCaoTheKhoSearch.KhoId + ";" + this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId + ";"
                        //   + this.baoCaoTheKhoSearch.LoaiDuocPhamHoacVatTu + ";" + event.dataItem.NgayThang + ";" + this.baoCaoTheKhoSearch.RangeFromDate.startDate.toLocaleString() + ";"
                        //   + this.baoCaoTheKhoSearch.RangeFromDate.endDate.toLocaleString()
                    }
                };
                BaoCaoTheKhoVatTuListComponent.prototype.searchChanges = function (event) { };
                BaoCaoTheKhoVatTuListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoTheKhoVatTuListComponent.prototype.reFresh = function () {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoTheKhoVatTuListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null || this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    if (!this.baoCaoTheKhoSearch.KhoId) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    if (!this.duocPhamHoacVatTuBenhVienId) {
                        this.notificationService.showError("Tên vật tư yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = this.duocPhamHoacVatTuBenhVienId;
                    this.baoCaoTheKhoSearch.startDate = this.baoCaoTheKhoSearch.RangeFromDate.startDate;
                    this.baoCaoTheKhoSearch.endDate = this.baoCaoTheKhoSearch.RangeFromDate.endDate;
                    this.apiService.post("BaoCaoVatTu/GetDataTheKhoVatTuForGridAsync", this.baoCaoTheKhoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.IsData = true;
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            _this.pageSize = resultData.TotalRowCount;
                            var takeTo = +_this.skip + +_this.pageSize;
                            _this.dataSource.data = _this.dataSource.data.slice(_this.skip, takeTo);
                            _this.dataSource.data.forEach(function (item, idx) {
                                _this.baoCaoTheKhoGrid.collapseRow(idx);
                            }); //Đóng all expand
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                    });
                };
                BaoCaoTheKhoVatTuListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null || this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (!this.baoCaoTheKhoSearch.KhoId) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        return;
                    }
                    if (!this.duocPhamHoacVatTuBenhVienId) {
                        this.notificationService.showError("Tên vật tư yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = this.duocPhamHoacVatTuBenhVienId;
                        this.baoCaoTheKhoSearch.startDate = this.baoCaoTheKhoSearch.RangeFromDate.startDate;
                        this.baoCaoTheKhoSearch.endDate = this.baoCaoTheKhoSearch.RangeFromDate.endDate;
                        this.apiService.postExportExcel("BaoCaoVatTu/ExportTheKhoVatTu", this.baoCaoTheKhoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoXuatNhapTonVatTu" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoTheKhoVatTuListComponent.prototype.changeValueStart = function (dataItem) {
                    this.minDateDenNgay = new Date();
                    if (dataItem.startDate != null && dataItem.endDate != null
                        && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != undefined
                        && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != null
                        && this.baoCaoTheKhoSearch.KhoId != undefined
                        && this.baoCaoTheKhoSearch.KhoId != null) {
                        this.IsData = true;
                    }
                    else {
                        this.IsData = false;
                    }
                };
                BaoCaoTheKhoVatTuListComponent.prototype.khoChange = function (khoId) {
                    if (khoId != undefined && khoId != null) {
                        this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = null;
                        if (this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId == null) {
                            this.IsData = false;
                        }
                        else if (this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != undefined
                            && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != null
                            && this.baoCaoTheKhoSearch.RangeFromDate.startDate != null
                            && this.baoCaoTheKhoSearch.RangeFromDate.endDate != null) {
                            this.IsData = true;
                        }
                    }
                    else {
                        this.IsData = false;
                    }
                };
                BaoCaoTheKhoVatTuListComponent.prototype.selectionChangeDpVT = function (dataItem) {
                    if (dataItem != undefined && dataItem != null) {
                        this.baoCaoTheKhoSearch.LoaiDuocPhamHoacVatTu = dataItem.LoaiDuocPhamHoacVatTu;
                        this.duocPhamHoacVatTuBenhVienId = dataItem.DuocPhamHoacVatTuBenhVienId;
                        this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = dataItem.DuocPhamHoacVatTuBenhVienId;
                        if (this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != undefined
                            && this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId != null
                            && this.baoCaoTheKhoSearch.RangeFromDate.startDate != null
                            && this.baoCaoTheKhoSearch.RangeFromDate.endDate != null) {
                            this.IsData = true;
                        }
                    }
                    else {
                        this.baoCaoTheKhoSearch.LoaiDuocPhamHoacVatTu = null;
                        this.duocPhamHoacVatTuBenhVienId = null;
                        this.IsData = false;
                    }
                };
                return BaoCaoTheKhoVatTuListComponent;
            }());
            BaoCaoTheKhoVatTuListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoTheKhoGrid', { static: true })
            ], BaoCaoTheKhoVatTuListComponent.prototype, "baoCaoTheKhoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoTheKhoVatTuListComponent.prototype, "sttTemplate", void 0);
            BaoCaoTheKhoVatTuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-the-kho-vat-tu-y-te-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-the-kho-vat-tu-y-te-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-the-kho-vat-tu-y-te-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.scss")).default]
                })
            ], BaoCaoTheKhoVatTuListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-routing.module.ts": 
        /*!****************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-routing.module.ts ***!
          \****************************************************************************************************************/
        /*! exports provided: BaoCaoTheKhoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoRoutingModule", function () { return BaoCaoTheKhoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_the_kho_vat_tu_y_te_list_bao_cao_the_kho_vat_tu_y_te_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component */ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_the_kho_vat_tu_y_te_list_bao_cao_the_kho_vat_tu_y_te_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTheKhoVatTuListComponent"],
                    data: {
                        title: 'Báo cáo thẻ kho vật tư',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTheKhoVatTuYTe,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTheKhoRoutingModule = /** @class */ (function () {
                function BaoCaoTheKhoRoutingModule() {
                }
                return BaoCaoTheKhoRoutingModule;
            }());
            BaoCaoTheKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTheKhoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.model.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.model.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: BaoCaoTheKhoSearch */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoSearch", function () { return BaoCaoTheKhoSearch; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");
            var BaoCaoTheKhoSearch = /** @class */ (function () {
                function BaoCaoTheKhoSearch(RangeFromDate, startDate, endDate, KhoId, NgayThang, DuocPhamHoacVatTuBenhVienId, LoaiDuocPhamHoacVatTu, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (RangeFromDate === void 0) { RangeFromDate = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](); }
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (NgayThang === void 0) { NgayThang = null; }
                    if (DuocPhamHoacVatTuBenhVienId === void 0) { DuocPhamHoacVatTuBenhVienId = null; }
                    if (LoaiDuocPhamHoacVatTu === void 0) { LoaiDuocPhamHoacVatTu = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.RangeFromDate = RangeFromDate;
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.KhoId = KhoId;
                    this.NgayThang = NgayThang;
                    this.DuocPhamHoacVatTuBenhVienId = DuocPhamHoacVatTuBenhVienId;
                    this.LoaiDuocPhamHoacVatTu = LoaiDuocPhamHoacVatTu;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTheKhoSearch;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.module.ts": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.module.ts ***!
          \********************************************************************************************************/
        /*! exports provided: BaoCaoTheKhoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoModule", function () { return BaoCaoTheKhoModule; });
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
            /* harmony import */ var _bao_cao_the_kho_vat_tu_y_te_list_bao_cao_the_kho_vat_tu_y_te_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component */ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-list/bao-cao-the-kho-vat-tu-y-te-list.component.ts");
            /* harmony import */ var _bao_cao_the_kho_vat_tu_y_te_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-the-kho-vat-tu-y-te-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te-routing.module.ts");
            /* harmony import */ var _bao_cao_the_kho_vat_tu_y_te_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bao-cao-the-kho-vat-tu-y-te.service */ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.service.ts");
            var BaoCaoTheKhoModule = /** @class */ (function () {
                function BaoCaoTheKhoModule() {
                }
                return BaoCaoTheKhoModule;
            }());
            BaoCaoTheKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_the_kho_vat_tu_y_te_list_bao_cao_the_kho_vat_tu_y_te_list_component__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTheKhoVatTuListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_the_kho_vat_tu_y_te_routing_module__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTheKhoRoutingModule"],
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
                        _bao_cao_the_kho_vat_tu_y_te_service__WEBPACK_IMPORTED_MODULE_22__["BaoCaoTheKhoVatTuService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_the_kho_vat_tu_y_te_service__WEBPACK_IMPORTED_MODULE_22__["BaoCaoTheKhoVatTuService"] },
                    ]
                })
            ], BaoCaoTheKhoModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.service.ts": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho-vat-tu-y-te/bao-cao-the-kho-vat-tu-y-te.service.ts ***!
          \*********************************************************************************************************/
        /*! exports provided: BaoCaoTheKhoVatTuService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoVatTuService", function () { return BaoCaoTheKhoVatTuService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTheKhoVatTuService = /** @class */ (function (_super) {
                __extends(BaoCaoTheKhoVatTuService, _super);
                function BaoCaoTheKhoVatTuService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCaoTheKho';
                    return _this;
                }
                return BaoCaoTheKhoVatTuService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTheKhoVatTuService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTheKhoVatTuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTheKhoVatTuService);
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
//# sourceMappingURL=bao-cao-bao-cao-the-kho-vat-tu-y-te-bao-cao-the-kho-vat-tu-y-te-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-the-kho-vat-tu-y-te-bao-cao-the-kho-vat-tu-y-te-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-the-kho-vat-tu-y-te-bao-cao-the-kho-vat-tu-y-te-module-es5.js.map