(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-duoc-chi-tiet-xuat-noi-bo-bao-cao-duoc-chi-tiet-xuat-noi-bo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Chi Tiết Xuất Nội Bộ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridDataSource\" [height]=\"height\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid>\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" bind=\"true\" url=\"TonKho/GetKhoTatCa\"\n                            [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu\n                            id=\"TuNgayFormat\" [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden\n                            id=\"DenNgayFormat\" [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\"\n                            label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                            <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                                class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>Tổng cộng:</span>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n\n                </kendo-grid-column>\n\n                <ng-container *ngIf=\"listKho && listKho.length > 0\">\n\n                    <kendo-grid-column *ngFor=\"let item of listKho\" [title]=\"item\" width=\"200\"\n                        [style]=\"{'text-align': 'left'}\"\n                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n\n\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            {{getSoLuong(item, dataItem.ThongTinThuoc)}}\n                            <br>\n                            <span>{{getThanhTien(item,dataItem.ThongTinThuoc) | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien(item) | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                    </kendo-grid-column>\n                </ng-container>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                            (click)=\"reFresh()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n                \n            </kendo-grid>\n\n        </div>\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.scss ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdW9jLWNoaS10aWV0LXh1YXQtbm9pLWJvL2Jhby1jYW8tZHVvYy1jaGktdGlldC14dWF0LW5vaS1iby1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1kdW9jLWNoaS10aWV0LXh1YXQtbm9pLWJvXFxiYW8tY2FvLWR1b2MtY2hpLXRpZXQteHVhdC1ub2ktYm8tbGlzdFxcYmFvLWNhby1kdW9jLWNoaS10aWV0LXh1YXQtbm9pLWJvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZHVvYy1jaGktdGlldC14dWF0LW5vaS1iby9iYW8tY2FvLWR1b2MtY2hpLXRpZXQteHVhdC1ub2ktYm8tbGlzdC9iYW8tY2FvLWR1b2MtY2hpLXRpZXQteHVhdC1ub2ktYm8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWR1b2MtY2hpLXRpZXQteHVhdC1ub2ktYm8vYmFvLWNhby1kdW9jLWNoaS10aWV0LXh1YXQtbm9pLWJvLWxpc3QvYmFvLWNhby1kdW9jLWNoaS10aWV0LXh1YXQtbm9pLWJvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.ts":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.ts ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDuocChiTietXuatNoiBoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocChiTietXuatNoiBoListComponent", function() { return BaoCaoDuocChiTietXuatNoiBoListComponent; });
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
/* harmony import */ var _bao_cao_duoc_chi_tiet_xuat_noi_bo_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-duoc-chi-tiet-xuat-noi-bo.model */ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);













let BaoCaoDuocChiTietXuatNoiBoListComponent = class BaoCaoDuocChiTietXuatNoiBoListComponent {
    constructor(apiService, dialog, notificationService, authService, cd) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.cd = cd;
        this.baoCaoSearch = new _bao_cao_duoc_chi_tiet_xuat_noi_bo_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoDuocChiTietXuatNoiBoSearch"]();
        this.inBaoCaoDuocChiTietXuatNoiBo = new _bao_cao_duoc_chi_tiet_xuat_noi_bo_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoDuocChiTietXuatNoiBo"]();
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.heightToolbar = 140;
        this.listKho = [];
        this.listThongTinThuoc = [];
        this.showPrintExport = false;
        this.gridTemp = [];
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.pageSize = 50;
        this.skip = 0;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this._showDefaultPagerTemplate = true;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoDuocChiTietXuatNoiBo;
        if (window.location.protocol == "http:") {
            this.inBaoCaoDuocChiTietXuatNoiBo.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoDuocChiTietXuatNoiBo.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 100 },
            { Field: "ThongTinThuoc", Title: "Mã Dược: Tên thuốc, hoá chất, vtyt + Hàm lượng", Width: 200 },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
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
    getSoLuong(field, thongTinThuoc) {
        if (this.gridTemp) {
            var sumSoLuongs = this.gridTemp.filter(s => s.Kho == field && s.ThongTinThuoc == thongTinThuoc);
            if (sumSoLuongs.length > 0) {
                return sumSoLuongs.reduce((sum, item) => sum + item.SoLuong, 0);
            }
        }
    }
    getThanhTien(field, thongTinThuoc) {
        if (this.gridTemp) {
            var sumTTiens = this.gridTemp.filter(s => s.Kho == field && s.ThongTinThuoc == thongTinThuoc);
            if (sumTTiens.length > 0) {
                return sumTTiens.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
        }
    }
    totalThanhTien(field) {
        if (this.gridTemp) {
            var listItemTheoKho = this.gridTemp.filter(s => s.Kho == field);
            if (listItemTheoKho.length > 0) {
                return listItemTheoKho.reduce((sum, item) => sum + item.ThanhTien, 0);
            }
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
    pageChange(event) {
        this.baoCaoSearch.Skip = event.skip;
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
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            this._isLoading = false;
            this._isLoadingTotalPage = false;
            return;
        }
        if (!this.baoCaoSearch.KhoId) {
            this.notificationService.showError("Khoa yêu cầu nhập");
            this._isLoading = false;
            this._isLoadingTotalPage = false;
            return;
        }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.apiService.post("BaoCao/GetDataBaoCaoDuocChiTietXuatNoiBoForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                    this.showPrintExport = true;
                }
                this.gridTemp = [...resultData.Data];
                this.gridTemp.forEach(element => {
                    var check = this.gridDataSource.data.filter(s => s.ThongTinThuoc == element.ThongTinThuoc)[0];
                    if (!check) {
                        this.gridDataSource.data.push({ Id: element.Id, ThongTinThuoc: element.ThongTinThuoc, DVT: element.DVT });
                    }
                    var check1 = this.listKho.filter(s => s == element.Kho)[0];
                    if (!check1) {
                        this.listKho.push(element.Kho);
                    }
                });
                this.gridDataSource.total = this.gridDataSource.data.length;
                var takeTo = +this.skip + +this.pageSize;
                this.gridDataSource.data = this.gridDataSource.data.slice(this.skip, takeTo);
                this._isLoading = false;
                this._isLoadingTotalPage = false;
            }
        });
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
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
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
            this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoDuocChiTietXuatNoiBo.HostingName;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoDuocChiTietXuatNoiBo", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDuocChiTietXuatNoiBo" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoDuocChiTietXuatNoiBoListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sttTemplate", { static: true })
], BaoCaoDuocChiTietXuatNoiBoListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienCongNoTemplate", { static: true })
], BaoCaoDuocChiTietXuatNoiBoListComponent.prototype, "soTienCongNoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienDaThanhToanTemplate", { static: true })
], BaoCaoDuocChiTietXuatNoiBoListComponent.prototype, "soTienDaThanhToanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienConNoTemplate", { static: true })
], BaoCaoDuocChiTietXuatNoiBoListComponent.prototype, "soTienConNoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soTienHoanTraTemplate", { static: true })
], BaoCaoDuocChiTietXuatNoiBoListComponent.prototype, "soTienHoanTraTemplate", void 0);
BaoCaoDuocChiTietXuatNoiBoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-duoc-chi-tiet-xuat-noi-bo-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.scss")).default]
    })
], BaoCaoDuocChiTietXuatNoiBoListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-routing.module.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-routing.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: BaoCaoDuocChiTietXuatNoiBoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocChiTietXuatNoiBoRoutingModule", function() { return BaoCaoDuocChiTietXuatNoiBoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bao_cao_duoc_chi_tiet_xuat_noi_bo_list_bao_cao_duoc_chi_tiet_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component */ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_duoc_chi_tiet_xuat_noi_bo_list_bao_cao_duoc_chi_tiet_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDuocChiTietXuatNoiBoListComponent"],
        data: {
            title: 'Báo cáo chi tiết xuất nội bộ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].BaoCaoDuocChiTietXuatNoiBo,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let BaoCaoDuocChiTietXuatNoiBoRoutingModule = class BaoCaoDuocChiTietXuatNoiBoRoutingModule {
};
BaoCaoDuocChiTietXuatNoiBoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDuocChiTietXuatNoiBoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo.model.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo.model.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BaoCaoDuocChiTietXuatNoiBoSearch, InBaoCaoDuocChiTietXuatNoiBo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocChiTietXuatNoiBoSearch", function() { return BaoCaoDuocChiTietXuatNoiBoSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoDuocChiTietXuatNoiBo", function() { return InBaoCaoDuocChiTietXuatNoiBo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoDuocChiTietXuatNoiBoSearch {
    constructor(KhoId = null, FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.KhoId = KhoId;
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
}
class InBaoCaoDuocChiTietXuatNoiBo {
    constructor(HostingName = null, FromDate = null, ToDate = null) {
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BaoCaoDuocChiTietXuatNoiBoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocChiTietXuatNoiBoModule", function() { return BaoCaoDuocChiTietXuatNoiBoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_duoc_chi_tiet_xuat_noi_bo_list_bao_cao_duoc_chi_tiet_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component */ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-list/bao-cao-duoc-chi-tiet-xuat-noi-bo-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _bao_cao_duoc_chi_tiet_xuat_noi_bo_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bao-cao-duoc-chi-tiet-xuat-noi-bo-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-duoc-chi-tiet-xuat-noi-bo/bao-cao-duoc-chi-tiet-xuat-noi-bo-routing.module.ts");












let BaoCaoDuocChiTietXuatNoiBoModule = class BaoCaoDuocChiTietXuatNoiBoModule {
};
BaoCaoDuocChiTietXuatNoiBoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_duoc_chi_tiet_xuat_noi_bo_list_bao_cao_duoc_chi_tiet_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoDuocChiTietXuatNoiBoListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_8__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _bao_cao_duoc_chi_tiet_xuat_noi_bo_routing_module__WEBPACK_IMPORTED_MODULE_11__["BaoCaoDuocChiTietXuatNoiBoRoutingModule"]
        ]
    })
], BaoCaoDuocChiTietXuatNoiBoModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-duoc-chi-tiet-xuat-noi-bo-bao-cao-duoc-chi-tiet-xuat-noi-bo-module-es2015.js.map