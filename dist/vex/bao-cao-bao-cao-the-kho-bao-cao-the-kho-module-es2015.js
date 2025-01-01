(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-the-kho-bao-cao-the-kho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Thẻ Kho', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"dataSource\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (detailExpand)=\"detailExpand($event)\"\n                (pageChange)=\"pageChange($event)\" id=\"baoCaoTheKhoGrid\" #baoCaoTheKhoGrid>\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" popupSettings=\"\" bind=\"true\"\n                            (modelChange)=\"khoChange($event)\" [autoSelectFirstItem]=\"true\" url=\"TonKho/GetKhoTatCa\"\n                            [(model)]=\"baoCaoTheKhoSearch.KhoId\">\n                        </app-combobox>\n\n\n                        <app-combobox fxFlex=\"20%\" [(model)]=\"baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId\"\n                            id=\"DuocPhamHoacVatTuBenhVienId\" label=\"Tên Dược Phẩm\"\n                            url=\"BaoCaoTheKho/GetDuocPhamTheoKhoBaoCao\" [templateHeader]=\"duocPhamTemplateHeader\"\n                            (selectionChange)=\"selectionChangeDpVT($event)\"\n                            [queryInfo]=\"{ParameterDependencies:'{KhoId:' + baoCaoTheKhoSearch.KhoId +'}', Take: 50}\"\n                            [popupSettings]=\"{width: 600,popupClass:'item-no-padding'}\" [template]=\"duocPhamTemplate\"\n                            style=\"margin-left: 5px;\" class=\"mt-1 on-header pb-0 mr-1\">\n                            <ng-template #duocPhamTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <!-- <th width=\"20%\">Loại</th> -->\n                                        <th width=\"30%\">Mã</th>\n                                        <th>Tên</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #duocPhamTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <!-- <td width=\"20%\">{{dataItem.LoaiDuocPhamHoacVatTuDisplay}}</td> -->\n                                        <td width=\"30%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-combobox>\n\n                        <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"15%\"\n                            fxFlex.sm=\"auto\" (modelChange)=\"changeValueStart($event)\"\n                            [(model)]=\"baoCaoTheKhoSearch.RangeFromDate\" label=\"Từ ngày - đến ngày\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-daterangepicker>\n\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                    <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"font-weight: bold;color:#000;\">Tổng :</div>\n                            </ng-template> -->\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>Tổng cộng:</span>\n                    </ng-template>                  -->\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"{{getTitleColumn(2)}}\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(2)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                        width=\"{{getWidthColumn(3)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                        width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">                      \n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                    width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'center'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>{{totalTonDauKy('TongSLTonDauKy') }}</span>\n                    </ng-template> -->\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"{{getTitleColumn(7)}}\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(7)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                        width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalSL('TongSLNhap')}}</span>\n                        </ng-template> -->\n\n\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                        width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">                      \n                        <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalSL('TongSLXuat')}}</span>\n                        </ng-template> -->\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                        width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\\\n                        <!-- <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalSL('TongSLTon') }}</span>\n                        </ng-template> -->\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n\n                <!-- [groups]=\"groups\" -->\n                <!-- (extOnDataBound)=\"onDataBoundChild($event)\" -->\n                <ng-template kendoGridDetailTemplate let-dataItem=\"dataItem\">\n                    <app-grid [useHeaderDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\" class=\"k-grid-crollbar\"\n                        [gridColumns]=\"gridColumnsChild\" [useAddDeault]=\"false\" [lazyLoadPage]=\"false\"\n                        [checkboxAble]=\"false\" [autoHeight]=\"true\" [useActionDefault]=\"false\"\n                        [additionalSearchString]=\"additionalSearchString\" masterName=\"BaoCaoChild\"\n                        [removeGroupFooterIfIsOnlyOne]=\"true\">\n                    </app-grid>\n\n                </ng-template>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                            (click)=\"reFresh()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>bao-cao-the-kho-popup works!</p>\n");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGhlLWtoby9iYW8tY2FvLXRoZS1raG8tbGlzdC9iYW8tY2FvLXRoZS1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BaoCaoTheKhoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoListComponent", function() { return BaoCaoTheKhoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bao_cao_the_kho_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bao-cao-the-kho.model */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__);















let BaoCaoTheKhoListComponent = class BaoCaoTheKhoListComponent {
    // public pageChange(event: PageChangeEvent): void {
    //   this.baoCaoTheKhoSearch.Skip = event.skip;
    //   this.skip = event.skip;
    //   // this.XemBaoCao();
    // }
    constructor(apiService, dialog, authService, notificationService, cd) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.baoCaoTheKhoSearch = new _bao_cao_the_kho_model__WEBPACK_IMPORTED_MODULE_2__["BaoCaoTheKhoSearch"]();
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.pageSize = 10;
        this.skip = 0;
        this.urlGetDataGridChild = "BaoCaoTheKho/GetDataForGridChildAsync";
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
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.tonDauKy = 0;
        this.sumTongSLNhap = 0;
        this.sumTongSLXuat = 0;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTheKho;
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
        // if (window.location.protocol == "http:") {
        //   this.inBaoCaoXuatNhapTon.HostingName = "http://" + window.location.host;
        // } else {
        //   this.inBaoCaoXuatNhapTon.HostingName = "https://" + window.location.host;
        // }
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 20 },
            // { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 120 },//1
            // { Field: "DVT", Title: "ĐVT", Width: 30 },//2
            // { Field: "SoLo", Title: "Số lô", Width: 50 },//3
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
            { Field: "STT", Title: "STT", Width: 20, Template: this.sttTemplate },
            // { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 120 },//1
            // { Field: "DVT", Title: "ĐVT", Width: 30 },//2
            // { Field: "SoLo", Title: "Số lô", Width: 50 },//2
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
    }
    ngAfterContentInit() {
        const self = this;
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
        var widthParent = jQuery("#baoCaoTheKhoGrid").parent().width();
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
    totalTonDauKy(field) {
        if (this.dataSource.data.length > 0) {
            return this.dataSource.data[0].TongSLTonDauKy;
            // return this.dataSource.data.reduce((sum, item) => sum + item.ThanhTien, 0);
        }
    }
    totalSL(field) {
        switch (field) {
            case 'TongSLNhap':
                if (this.dataSource.data != undefined) {
                    this.sumTongSLNhap = this.dataSource.data.reduce((sum, item) => sum + item.TongSLNhap, 0);
                    return this.sumTongSLNhap;
                }
            case 'TongSLXuat':
                if (this.dataSource.data != undefined) {
                    this.sumTongSLNhap = this.dataSource.data.reduce((sum, item) => sum + item.TongSLXuat, 0);
                    return this.sumTongSLNhap;
                }
            case 'TongSLTon':
                return this.tonDauKy + this.sumTongSLNhap - this.sumTongSLXuat;
        }
    }
    detailExpand(event) {
        if (event.dataItem) {
            this.baoCaoTheKhoSearch.NgayThang = event.dataItem.NgayThang;
            this.additionalSearchString = JSON.stringify(this.baoCaoTheKhoSearch);
        }
    }
    searchChanges(event) { }
    pageChange(event) {
        this.skip = event.skip;
        this.XemBaoCao();
    }
    reFresh() {
        this.skip = 0;
        this.XemBaoCao();
    }
    XemBaoCao() {
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
            this.notificationService.showError("Tên dược phẩm yêu cầu nhập");
            this._isLoading = false;
            this._isLoadingTotalPage = false;
            return;
        }
        this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = this.duocPhamHoacVatTuBenhVienId;
        this.baoCaoTheKhoSearch.startDate = this.baoCaoTheKhoSearch.RangeFromDate.startDate;
        this.baoCaoTheKhoSearch.endDate = this.baoCaoTheKhoSearch.RangeFromDate.endDate;
        this.apiService.post("BaoCaoTheKho/GetDataForGridAsync", this.baoCaoTheKhoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.IsData = true;
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                this.pageSize = resultData.TotalRowCount;
                var takeTo = +this.skip + +this.pageSize;
                this.dataSource.data = this.dataSource.data.slice(this.skip, takeTo);
                this.dataSource.data.forEach((item, idx) => {
                    this.baoCaoTheKhoGrid.collapseRow(idx);
                }); //Đóng all expand
                this._isLoading = false;
                this._isLoadingTotalPage = false;
            }
        });
    }
    InBaoCao() {
        // let khoId = 0;
        // if (this.baoCaoTheKhoSearch.KhoId != null) {
        //   khoId = this.baoCaoTheKhoSearch.KhoId;
        // }
        // this.inBaoCaoXuatNhapTon.KhoId = khoId;
        // this.inBaoCaoXuatNhapTon.FromDate = CommonService.formatDateTime(this.baoCaoTheKhoSearch.TuNgayFormat, "dd/mm/yyyy");
        // this.inBaoCaoXuatNhapTon.ToDate = CommonService.formatDateTime(this.baoCaoTheKhoSearch.DenNgayFormat, "dd/mm/yyyy");
        // this.dialog.open(BaoCaoXuatNhapTonPopupComponent, {
        //   disableClose: false,
        //   width: '1200px',
        //   data: this.inBaoCaoXuatNhapTon,
        // }
        // ).afterClosed().subscribe(() => {
        // });
    }
    exportExcel() {
        if (this.baoCaoTheKhoSearch.RangeFromDate.startDate == null || this.baoCaoTheKhoSearch.RangeFromDate.endDate == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (!this.baoCaoTheKhoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            return;
        }
        if (!this.duocPhamHoacVatTuBenhVienId) {
            this.notificationService.showError("Tên dược phẩm yêu cầu nhập");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.baoCaoTheKhoSearch.DuocPhamHoacVatTuBenhVienId = this.duocPhamHoacVatTuBenhVienId;
            this.baoCaoTheKhoSearch.startDate = this.baoCaoTheKhoSearch.RangeFromDate.startDate;
            this.baoCaoTheKhoSearch.endDate = this.baoCaoTheKhoSearch.RangeFromDate.endDate;
            this.apiService.postExportExcel("BaoCaoTheKho/ExportTheKho", this.baoCaoTheKhoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTheKho" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, (err) => {
                this.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    this.notificationService.showError(err.Message);
                }
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    changeValueStart(dataItem) {
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
    }
    khoChange(khoId) {
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
    }
    selectionChangeDpVT(dataItem) {
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
    }
};
BaoCaoTheKhoListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoTheKhoGrid', { static: true })
], BaoCaoTheKhoListComponent.prototype, "baoCaoTheKhoGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoTheKhoListComponent.prototype, "sttTemplate", void 0);
BaoCaoTheKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-the-kho-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-the-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-the-kho-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.scss")).default]
    })
], BaoCaoTheKhoListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdGhlLWtoby9iYW8tY2FvLXRoZS1raG8tcG9wdXAvYmFvLWNhby10aGUta2hvLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BaoCaoTheKhoPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoPopupComponent", function() { return BaoCaoTheKhoPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaoCaoTheKhoPopupComponent = class BaoCaoTheKhoPopupComponent {
    constructor() { }
    ngOnInit() {
    }
};
BaoCaoTheKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-the-kho-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-the-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-the-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.scss")).default]
    })
], BaoCaoTheKhoPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BaoCaoTheKhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoRoutingModule", function() { return BaoCaoTheKhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_the_kho_list_bao_cao_the_kho_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-the-kho-list/bao-cao-the-kho-list.component */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_the_kho_list_bao_cao_the_kho_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTheKhoListComponent"],
        data: {
            title: 'Báo cáo thẻ kho',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTheKho,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoTheKhoRoutingModule = class BaoCaoTheKhoRoutingModule {
};
BaoCaoTheKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoTheKhoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.model.ts ***!
  \*******************************************************************************/
/*! exports provided: BaoCaoTheKhoSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoSearch", function() { return BaoCaoTheKhoSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class BaoCaoTheKhoSearch {
    constructor(RangeFromDate = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](), startDate = null, endDate = null, KhoId = null, DuocPhamHoacVatTuBenhVienId = null, LoaiDuocPhamHoacVatTu = null, NgayThang = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.RangeFromDate = RangeFromDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.KhoId = KhoId;
        this.DuocPhamHoacVatTuBenhVienId = DuocPhamHoacVatTuBenhVienId;
        this.LoaiDuocPhamHoacVatTu = LoaiDuocPhamHoacVatTu;
        this.NgayThang = NgayThang;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.module.ts ***!
  \********************************************************************************/
/*! exports provided: BaoCaoTheKhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoModule", function() { return BaoCaoTheKhoModule; });
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
/* harmony import */ var _bao_cao_the_kho_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-the-kho-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-routing.module.ts");
/* harmony import */ var _bao_cao_the_kho_list_bao_cao_the_kho_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-the-kho-list/bao-cao-the-kho-list.component */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-list/bao-cao-the-kho-list.component.ts");
/* harmony import */ var _bao_cao_the_kho_popup_bao_cao_the_kho_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bao-cao-the-kho-popup/bao-cao-the-kho-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho-popup/bao-cao-the-kho-popup.component.ts");
/* harmony import */ var _bao_cao_the_kho_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bao-cao-the-kho.service */ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.service.ts");
























let BaoCaoTheKhoModule = class BaoCaoTheKhoModule {
};
BaoCaoTheKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_the_kho_list_bao_cao_the_kho_list_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTheKhoListComponent"], _bao_cao_the_kho_popup_bao_cao_the_kho_popup_component__WEBPACK_IMPORTED_MODULE_22__["BaoCaoTheKhoPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_the_kho_routing_module__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTheKhoRoutingModule"],
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
            _bao_cao_the_kho_service__WEBPACK_IMPORTED_MODULE_23__["BaoCaoTheKhoService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_the_kho_service__WEBPACK_IMPORTED_MODULE_23__["BaoCaoTheKhoService"] },
        ],
        entryComponents: [
            _bao_cao_the_kho_popup_bao_cao_the_kho_popup_component__WEBPACK_IMPORTED_MODULE_22__["BaoCaoTheKhoPopupComponent"]
        ]
    })
], BaoCaoTheKhoModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-the-kho/bao-cao-the-kho.service.ts ***!
  \*********************************************************************************/
/*! exports provided: BaoCaoTheKhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTheKhoService", function() { return BaoCaoTheKhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoTheKhoService = class BaoCaoTheKhoService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCaoTheKho';
    }
};
BaoCaoTheKhoService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoTheKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoTheKhoService);



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
//# sourceMappingURL=bao-cao-bao-cao-the-kho-bao-cao-the-kho-module-es2015.js.map