(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tong-hop-dang-ky-goi-dich-vu-bao-cao-tong-hop-dang-ky-goi-dich-vu-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.html ***!
          \********************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Tổng Hợp Đăng Ký Gói Dịch Vụ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid\n                [gridColumns]=\"gridColumns\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\"\n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\"\n                [showStt]=\"true\" urlGetData=\"BaoCao/GetDataBaoCaoTongHopDangKyGoiDichVu\" urlGetTotalPage=\"BaoCao/GetTotalBaoCaoTongHopDangKyGoiDichVu\">\n            </app-grid>\n\n            <!-- <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                {{rowIndex + 1}}\n            </ng-template> -->\n\n            <ng-template #giaTriGoiTemplate let-dataItem>\n                {{dataItem.GiaTriGoi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #daThuTemplate let-dataItem>\n                {{dataItem.DaThu | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #conThieuTemplate let-dataItem>\n                {{dataItem.ConThieu | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #giaTriDichVuDaThucHienTemplate let-dataItem>\n                {{dataItem.GiaTriDichVuDaThucHien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #giaTriDichVuChuaThucHienTemplate let-dataItem>\n                {{dataItem.GiaTriDichVuChuaThucHien | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #phiPhatHuyGoiTemplate let-dataItem>\n                {{dataItem.PhiPhatHuyGoi | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #soTienHoanTraTemplate let-dataItem>\n                {{dataItem.SoTienHoanTra | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #huyTemplate let-dataItem>\n                <app-checkbox [disabled]=\"true\" id=\"huyGoi{{dataItem.Id}}\" [(model)]=\"dataItem.HuyGoi\" value=\"true\"></app-checkbox>\n            </ng-template>\n        </div>\n\n        <ng-template #headerTemplate>\n              <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"h-15 mt-0\" fxFlex=\"25%\" style=\"padding: 3px !important\" >\n                  <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                      fxLayoutAlign=\"start center\" style=\"margin-top: 0px\">\n                      <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                      <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                          type=\"search\" name=\"searchString\" [(ngModel)]=\"baoCaoSearch.SearchString\"\n                          placeholder=\"Tìm kiếm Họ tên, Mã NB\" />\n                  </div>\n                  <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                      <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                  </button>\n                </div>\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <span fxFlex></span>\n\n                <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button kendoTooltip\n                    title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of gridColumns\">\n                        <button *ngIf=\"column.Title != ''\"\n                            class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                            <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n            </div>\n        </ng-template>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.scss": 
        /*!******************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.scss ***!
          \******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".redText {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b25nLWhvcC1kYW5nLWt5LWdvaS1kaWNoLXZ1L2Jhby1jYW8tdG9uZy1ob3AtZGFuZy1reS1nb2ktZGljaC12dS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby10b25nLWhvcC1kYW5nLWt5LWdvaS1kaWNoLXZ1XFxiYW8tY2FvLXRvbmctaG9wLWRhbmcta3ktZ29pLWRpY2gtdnUtbGlzdFxcYmFvLWNhby10b25nLWhvcC1kYW5nLWt5LWdvaS1kaWNoLXZ1LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3AtZGFuZy1reS1nb2ktZGljaC12dS9iYW8tY2FvLXRvbmctaG9wLWRhbmcta3ktZ29pLWRpY2gtdnUtbGlzdC9iYW8tY2FvLXRvbmctaG9wLWRhbmcta3ktZ29pLWRpY2gtdnUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uZy1ob3AtZGFuZy1reS1nb2ktZGljaC12dS9iYW8tY2FvLXRvbmctaG9wLWRhbmcta3ktZ29pLWRpY2gtdnUtbGlzdC9iYW8tY2FvLXRvbmctaG9wLWRhbmcta3ktZ29pLWRpY2gtdnUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn0iLCIucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.ts": 
        /*!****************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.ts ***!
          \****************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDangKyGoiDichVuListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDangKyGoiDichVuListComponent", function () { return BaoCaoTongHopDangKyGoiDichVuListComponent; });
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
            /* harmony import */ var _bao_cao_tong_hop_dang_ky_goi_dich_vu_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-tong-hop-dang-ky-goi-dich-vu.model */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            var BaoCaoTongHopDangKyGoiDichVuListComponent = /** @class */ (function () {
                function BaoCaoTongHopDangKyGoiDichVuListComponent(apiService, dialog, notificationService, authService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.baoCaoSearch = new _bao_cao_tong_hop_dang_ky_goi_dich_vu_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoTongHopDangKyGoiDichVuSearch"]();
                    this.inBaoCaoTongHopDangKyGoiDichVu = new _bao_cao_tong_hop_dang_ky_goi_dich_vu_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoTongHopDangKyGoiDichVu"]();
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridView = {
                        data: [],
                        total: 0
                    };
                    this.pageSize = 50;
                    this.skip = 0;
                    this.showGrid = false;
                    this.showPrintExport = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
                    this.SearchString = "";
                }
                BaoCaoTongHopDangKyGoiDichVuListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoTongHopDangKyGoiDichVu;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoTongHopDangKyGoiDichVu.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoTongHopDangKyGoiDichVu.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        // {Field:"STT", Title:"STT", Width: 60 , Template: this.sttTemplate},
                        { Field: "NgayDangKyStr", Title: "Ngày", Width: 90 },
                        { Field: "MaNB", Title: "Mã NB", Width: 80 },
                        { Field: "TenBN", Title: "Tên người bệnh", Width: 160 },
                        { Field: "NgaySinhDisplay", Title: "Năm sinh", Width: 90 },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 140 },
                        { Field: "TenGoi", Title: "Tên gói", Width: 140 },
                        { Field: "GiaTriGoi", Title: "Giá trị gói", Width: 100, Template: this.giaTriGoiTemplate },
                        { Field: "DaThu", Title: "Đã thu", Width: 100, Template: this.daThuTemplate },
                        { Field: "ConThieu", Title: "Còn phải thu", Width: 100, Template: this.conThieuTemplate },
                        { Field: "GiaTriDichVuDaThucHien", Title: "Giá trị DV đã thực hiện trong gói", Width: 100, Template: this.giaTriDichVuDaThucHienTemplate },
                        { Field: "GiaTriDichVuChuaThucHien", Title: "Giá trị DV chưa thực hiện trong gói", Width: 100, Template: this.giaTriDichVuChuaThucHienTemplate },
                        { Field: "PhiPhatHuyGoi", Title: "Phí phạt huỷ gói", Width: 100, Template: this.phiPhatHuyGoiTemplate },
                        { Field: "SoTienHoanTra", Title: "Hoàn trả", Width: 100, Template: this.soTienHoanTraTemplate },
                        { Field: "HuyGoi", Title: "Huỷ", Width: 50, Template: this.huyTemplate },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = firstDay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                        this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
                    }
                };
                BaoCaoTongHopDangKyGoiDichVuListComponent.prototype.pageChange = function (event) {
                    this.skip = event;
                    // this.XemBaoCao();
                    var takeTo = +this.skip + +this.pageSize;
                    this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
                    this.gridView.total = this.gridDataSource.total;
                };
                BaoCaoTongHopDangKyGoiDichVuListComponent.prototype.seachChange = function (event) {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoTongHopDangKyGoiDichVuListComponent.prototype.XemBaoCao = function () {
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
                    this.gridChild.search();
                    // this.gridChild._isLoadingTotalPage = true;
                    // this.gridChild._isLoading = true;
                    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    // this.apiService.post<any>("BaoCao/GetDataBaoCaoTongHopDangKyGoiDichVu", this.baoCaoSearch).subscribe(resultData => {
                    //   if (resultData !== undefined && resultData != null) {
                    //     if(resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0)
                    //     {
                    //      this.showPrintExport = true;
                    //     }
                    //     this.showGrid = true;
                    //     this.gridDataSource.data = [...resultData.Data];
                    //     this.gridDataSource.total = this.gridDataSource.data.length;
                    //     var takeTo = +this.skip + +this.pageSize;
                    //     this.gridView.data = this.gridDataSource.data.slice(this.skip, takeTo);
                    //     this.gridView.total = this.gridDataSource.total;
                    //     this.gridChild._isLoadingTotalPage = false;
                    //     this.gridChild._isLoading = false;
                    //   }
                    // });
                };
                BaoCaoTongHopDangKyGoiDichVuListComponent.prototype.exportExcel = function () {
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
                        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTongHopDangKyGoiDichVu", this.gridChild._gridQueryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTongHopDangKyGoiDichVu" + dateTimeNow.getFullYear() + ".xlsx");
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
                return BaoCaoTongHopDangKyGoiDichVuListComponent;
            }());
            BaoCaoTongHopDangKyGoiDichVuListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"], { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sttTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("giaTriGoiTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "giaTriGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("daThuTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "daThuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("conThieuTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "conThieuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("giaTriDichVuDaThucHienTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "giaTriDichVuDaThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("giaTriDichVuChuaThucHienTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "giaTriDichVuChuaThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienHoanTraTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "soTienHoanTraTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("phiPhatHuyGoiTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "phiPhatHuyGoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("huyTemplate", { static: true })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent.prototype, "huyTemplate", void 0);
            BaoCaoTongHopDangKyGoiDichVuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-tong-hop-dang-ky-goi-dich-vu-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.scss")).default]
                })
            ], BaoCaoTongHopDangKyGoiDichVuListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-routing.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-routing.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDangKyGoiDichVuRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDangKyGoiDichVuRoutingModule", function () { return BaoCaoTongHopDangKyGoiDichVuRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_tong_hop_dang_ky_goi_dich_vu_list_bao_cao_tong_hop_dang_ky_goi_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tong_hop_dang_ky_goi_dich_vu_list_bao_cao_tong_hop_dang_ky_goi_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTongHopDangKyGoiDichVuListComponent"],
                    data: {
                        title: 'Báo cáo tổng hợp đăng ký gói dịch vụ',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopDangKyGoiDichVu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTongHopDangKyGoiDichVuRoutingModule = /** @class */ (function () {
                function BaoCaoTongHopDangKyGoiDichVuRoutingModule() {
                }
                return BaoCaoTongHopDangKyGoiDichVuRoutingModule;
            }());
            BaoCaoTongHopDangKyGoiDichVuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTongHopDangKyGoiDichVuRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu.model.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu.model.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDangKyGoiDichVuSearch, InBaoCaoTongHopDangKyGoiDichVu */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDangKyGoiDichVuSearch", function () { return BaoCaoTongHopDangKyGoiDichVuSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTongHopDangKyGoiDichVu", function () { return InBaoCaoTongHopDangKyGoiDichVu; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTongHopDangKyGoiDichVuSearch = /** @class */ (function () {
                function BaoCaoTongHopDangKyGoiDichVuSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
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
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTongHopDangKyGoiDichVuSearch;
            }());
            var InBaoCaoTongHopDangKyGoiDichVu = /** @class */ (function () {
                function InBaoCaoTongHopDangKyGoiDichVu(HostingName, FromDate, ToDate) {
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTongHopDangKyGoiDichVu;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDangKyGoiDichVuModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDangKyGoiDichVuModule", function () { return BaoCaoTongHopDangKyGoiDichVuModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _bao_cao_tong_hop_dang_ky_goi_dich_vu_list_bao_cao_tong_hop_dang_ky_goi_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-list/bao-cao-tong-hop-dang-ky-goi-dich-vu-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_tong_hop_dang_ky_goi_dich_vu_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-tong-hop-dang-ky-goi-dich-vu-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tong-hop-dang-ky-goi-dich-vu/bao-cao-tong-hop-dang-ky-goi-dich-vu-routing.module.ts");
            var BaoCaoTongHopDangKyGoiDichVuModule = /** @class */ (function () {
                function BaoCaoTongHopDangKyGoiDichVuModule() {
                }
                return BaoCaoTongHopDangKyGoiDichVuModule;
            }());
            BaoCaoTongHopDangKyGoiDichVuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tong_hop_dang_ky_goi_dich_vu_list_bao_cao_tong_hop_dang_ky_goi_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoTongHopDangKyGoiDichVuListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _bao_cao_tong_hop_dang_ky_goi_dich_vu_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTongHopDangKyGoiDichVuRoutingModule"]
                    ]
                })
            ], BaoCaoTongHopDangKyGoiDichVuModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-dang-ky-goi-dich-vu-bao-cao-tong-hop-dang-ky-goi-dich-vu-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-dang-ky-goi-dich-vu-bao-cao-tong-hop-dang-ky-goi-dich-vu-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tong-hop-dang-ky-goi-dich-vu-bao-cao-tong-hop-dang-ky-goi-dich-vu-module-es5.js.map