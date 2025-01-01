(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-ton-kho-bao-cao-ton-kho-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                  \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Tồn Kho', Path:'', Active:true}\n                    ]\">\n                    </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid\n                [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" popupSettings=\"\" bind=\"true\"\n                            url=\"TonKho/GetKhoTatCa\" [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\"\n                            id=\"TuNgayFormat\" [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\"\n                            id=\"DenNgayFormat\" [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\"\n                            label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n\n\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                    width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                    width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                    width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                    width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                    width=\"{{getWidthColumn(9)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                    width=\"{{getWidthColumn(10)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                    width=\"{{getWidthColumn(11)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n\n                <kendo-grid-column field=\"{{getFieldColumn(12)}}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(13)}}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                        <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                    </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"reFresh()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n                \n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO XUẤT NHẬP TỒN </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b24ta2hvL2Jhby1jYW8tdG9uLWtoby1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby10b24ta2hvXFxiYW8tY2FvLXRvbi1raG8tbGlzdFxcYmFvLWNhby10b24ta2hvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uLWtoby9iYW8tY2FvLXRvbi1raG8tbGlzdC9iYW8tY2FvLXRvbi1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRvbi1raG8vYmFvLWNhby10b24ta2hvLWxpc3QvYmFvLWNhby10b24ta2hvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: BaoCaoTonKhoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoListComponent", function() { return BaoCaoTonKhoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bao_cao_ton_kho_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-ton-kho.model */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.model.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bao_cao_ton_kho_popup_bao_cao_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
















let BaoCaoTonKhoListComponent = class BaoCaoTonKhoListComponent {
    constructor(apiService, dialog, authService, notificationService, cd) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.baoCaoSearch = new _bao_cao_ton_kho_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoTonKhoSearch"]();
        this.inBaoCaoTonKho = new _bao_cao_ton_kho_model__WEBPACK_IMPORTED_MODULE_1__["InBaoCaoTonKho"]();
        this.pageSize = 10;
        this.skip = 0;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
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
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default.a;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.showDefaultPagerTemplate = true;
        this.ishowView = false;
        this.IsData = false;
        this.heightToolbar = 140;
        this.groups = [{
                field: 'Loai',
            }, {
                field: 'Nhom',
            }];
    }
    //end
    pageChange(event) {
        this.skip = event.skip;
        // this.XemBaoCao();
        if (this.dataSource.data.length == 0) {
            this.XemBaoCao();
        }
        else {
            var takeTo = +this.skip + +this.pageSize;
            let gridData = this.dataSource.data.slice(this.skip, takeTo);
            this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_15__["process"])(gridData, { group: this.groups });
            this.gridView.total = this.dataSource.total;
            // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
        }
    }
    ngOnInit() {
        this.urlGetDataGridChild = "BaoCao/GetDataBaoCaoTonKhoForGridAsyncChild";
        this.urlGetPageDataGridChild = "BaoCao/GetTotalBaoCaoTonKhoForGridAsyncChild";
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTonKho;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        if (window.location.protocol == "http:") {
            this.inBaoCaoTonKho.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoTonKho.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 100, Template: this.sttTemplate },
            { Field: "Ma", Title: "Mã dược", Width: 100 },
            { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 200 },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 120 },
            { Field: "SoLo", Title: "Số lô", Width: 100 },
            { Field: "HanSuDung", Title: "HSD", Width: 150 },
            { Field: "TonDau", Title: "Tồn đầu", Width: 120 },
            { Field: "Nhap", Title: "Nhập", Width: 120 },
            { Field: "TongSo", Title: "Tổng số", Width: 120 },
            { Field: "Xuat", Title: "Xuất", Width: 120 },
            { Field: "TonCuoi", Title: "Tồn cuối", Width: 120 },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Loai", Title: "Loại", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
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
    onDataBoundChild(event) {
        console.log(event);
        this.dataToSumThanhTien = event.Data;
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
    exportExcel() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            return;
        }
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            let khoId = 0;
            if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
                khoId = this.baoCaoSearch.KhoId;
            }
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoTonKho.HostingName;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoTonKho", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTonKho" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    reFresh() {
        this.skip = 0;
        this.XemBaoCao();
    }
    XemBaoCao() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Kho yêu cầu nhập");
            return;
        }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        this.apiService.post("BaoCao/GetDataBaoCaoTonKhoForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                var takeTo = +this.skip + +this.pageSize;
                let gridData = this.dataSource.data.slice(this.skip, takeTo);
                this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_15__["process"])(gridData, { group: this.groups });
                this.gridView.total = this.dataSource.total;
                this._isLoading = false;
                this._isLoadingTotalPage = false;
            }
        });
    }
    InBaoCao() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        let khoId = 0;
        if (this.baoCaoSearch.KhoId != null) {
            khoId = this.baoCaoSearch.KhoId;
        }
        this.inBaoCaoTonKho.KhoId = khoId;
        this.inBaoCaoTonKho.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        this.inBaoCaoTonKho.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        this.dialog.open(_bao_cao_ton_kho_popup_bao_cao_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_8__["BaoCaoTonKhoPopupComponent"], {
            disableClose: false,
            width: '1200px',
            data: this.inBaoCaoTonKho,
        }).afterClosed().subscribe(() => {
        });
    }
    changeValueStart() {
        this.minDateDenNgay = new Date();
        if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
            && this.baoCaoSearch.DenNgayFormat > this.baoCaoSearch.TuNgayFormat) {
            this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
        }
    }
};
BaoCaoTonKhoListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], BaoCaoTonKhoListComponent.prototype, "heightToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
], BaoCaoTonKhoListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('baoCaoGrid', { static: true })
], BaoCaoTonKhoListComponent.prototype, "baoCaoGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienTonDauKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienNhapTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienXuatTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienTonCuoiKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienTonDauKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienNhapTrongKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienXuatTrongKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienTonCuoiKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "donGiaGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyGroupFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienTonDauKyGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyGroupFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienNhapTrongKyGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyGroupFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienXuatTrongKyGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyGroupFooterTemplate', { static: true })
], BaoCaoTonKhoListComponent.prototype, "thanhTienTonCuoiKyGroupFooterTemplate", void 0);
BaoCaoTonKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bao-cao-ton-kho-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ton-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ton-kho-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.scss")).default]
    })
], BaoCaoTonKhoListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b24ta2hvL2Jhby1jYW8tdG9uLWtoby1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tdG9uLWtob1xcYmFvLWNhby10b24ta2hvLXBvcHVwXFxiYW8tY2FvLXRvbi1raG8tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uLWtoby9iYW8tY2FvLXRvbi1raG8tcG9wdXAvYmFvLWNhby10b24ta2hvLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uLWtoby9iYW8tY2FvLXRvbi1raG8tcG9wdXAvYmFvLWNhby10b24ta2hvLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BaoCaoTonKhoPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoPopupComponent", function() { return BaoCaoTonKhoPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _bao_cao_ton_kho_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-ton-kho.model */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.model.ts");








let BaoCaoTonKhoPopupComponent = class BaoCaoTonKhoPopupComponent {
    constructor(apiService, dialogRef, dialog, sanitizer, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.data = data;
        this.inBaoCaoTonKho = new _bao_cao_ton_kho_model__WEBPACK_IMPORTED_MODULE_7__["InBaoCaoTonKho"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.inBaoCaoTonKho = this.data;
        this.showBaoCao();
    }
    close() {
        this.dialogRef.close();
    }
    showBaoCao() {
        var loaded = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: "Đang tải dữ liệu..." }
        });
        this.apiService.post("BaoCao/InBaoCaoTonKho", this.inBaoCaoTonKho).subscribe(resultData => {
            if (resultData != "" && resultData != null) {
                this.src = "data:text/html;charset=utf-8," + encodeURIComponent(resultData);
            }
            loaded.close();
        }, () => {
            this.close();
        });
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            this.apiService.post("BaoCao/InBaoCaoTonKho", this.inBaoCaoTonKho).subscribe(resultData => {
                resolve(resultData);
            });
            this.close();
        });
    }
};
BaoCaoTonKhoPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
BaoCaoTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-ton-kho-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], BaoCaoTonKhoPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: BaoCaoTonKhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoRoutingModule", function() { return BaoCaoTonKhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_ton_kho_list_bao_cao_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-ton-kho-list/bao-cao-ton-kho-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_ton_kho_list_bao_cao_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTonKhoListComponent"],
        data: {
            title: 'Báo cáo xuất nhập tồn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTonKho,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoTonKhoRoutingModule = class BaoCaoTonKhoRoutingModule {
};
BaoCaoTonKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoTonKhoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.model.ts ***!
  \*******************************************************************************/
/*! exports provided: BaoCaoTonKhoSearch, BaoCaoTonKho, InBaoCaoTonKho */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoSearch", function() { return BaoCaoTonKhoSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKho", function() { return BaoCaoTonKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTonKho", function() { return InBaoCaoTonKho; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoTonKhoSearch {
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
class BaoCaoTonKho {
    constructor(STT = null, Ten = null, DVT = null, SLTonDauKy = 0, ThanhTienTonDauKy = 0, SLNhapTrongKy = 0, ThanhTienNhapTrongKy = 0, SLXuatTrongKy = 0, ThanhTienXuatTrongKy = 0, SLTonCuoiKy = 0, Gia = 0, ThanhTien = 0) {
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
}
class InBaoCaoTonKho {
    constructor(KhoId = 0, HostingName = null, FromDate = null, ToDate = null) {
        this.KhoId = KhoId;
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.module.ts ***!
  \********************************************************************************/
/*! exports provided: BaoCaoTonKhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoModule", function() { return BaoCaoTonKhoModule; });
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
/* harmony import */ var _bao_cao_ton_kho_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-ton-kho-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-routing.module.ts");
/* harmony import */ var _bao_cao_ton_kho_list_bao_cao_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-ton-kho-list/bao-cao-ton-kho-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-list/bao-cao-ton-kho-list.component.ts");
/* harmony import */ var _bao_cao_ton_kho_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-ton-kho.service */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.service.ts");
/* harmony import */ var _bao_cao_ton_kho_popup_bao_cao_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho-popup/bao-cao-ton-kho-popup.component.ts");






















let BaoCaoTonKhoModule = class BaoCaoTonKhoModule {
};
BaoCaoTonKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_ton_kho_list_bao_cao_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTonKhoListComponent"], _bao_cao_ton_kho_popup_bao_cao_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTonKhoPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_ton_kho_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTonKhoRoutingModule"],
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
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]
        ],
        providers: [
            _bao_cao_ton_kho_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTonKhoService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_ton_kho_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTonKhoService"] },
        ],
        entryComponents: [
            _bao_cao_ton_kho_popup_bao_cao_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoTonKhoPopupComponent"]
        ]
    })
], BaoCaoTonKhoModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho/bao-cao-ton-kho.service.ts ***!
  \*********************************************************************************/
/*! exports provided: BaoCaoTonKhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoService", function() { return BaoCaoTonKhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoTonKhoService = class BaoCaoTonKhoService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoTonKhoService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoTonKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoTonKhoService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-ton-kho-bao-cao-ton-kho-module-es2015.js.map