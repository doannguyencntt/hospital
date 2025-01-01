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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-ton-kho-xn-bao-cao-ton-kho-xn-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.html": 
        /*!**************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.html ***!
          \**************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Xét Ngiệm', Path:''},\n                    {Title:'Tồn Kho', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\"\n                    url=\"BaoCao/GetTatCaKhoTheoKhoaXetNghiems\" [(model)]=\"baoCaoSearch.KhoId\"\n                    [autoSelectFirstItem]=\"true\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid1 grid-bao-cao\" [pageable]=\"true\" [resizable]=\"true\"\n                        [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\"\n                        id=\"baoCaoGrid\" #baoCaoGrid [group]=\"groups\">\n\n                        <kendo-grid-column hidden=\"true\" field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\">\n                            <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                                {{ value }}\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column hidden=\"true\" field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\">\n                            <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                                {{ value }}\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"MaHoaChat\" title=\"{{getTitleColumn(1)}}\" width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.MaHoaChat}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                            width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.TenHoaChat}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                            width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.DVT}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                            width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.TonDau}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                            width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.Nhap}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                            width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.TongSo}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                            width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-al7ign': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.Xuat}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                            width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'left','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.TonCuoi}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"XemBaoCao()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.scss": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.scss ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10b24ta2hvLXhuL2Jhby1jYW8tdG9uLWtoby14bi1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby10b24ta2hvLXhuXFxiYW8tY2FvLXRvbi1raG8teG4tbGlzdFxcYmFvLWNhby10b24ta2hvLXhuLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tdG9uLWtoby14bi9iYW8tY2FvLXRvbi1raG8teG4tbGlzdC9iYW8tY2FvLXRvbi1raG8teG4tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRvbi1raG8teG4vYmFvLWNhby10b24ta2hvLXhuLWxpc3QvYmFvLWNhby10b24ta2hvLXhuLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: BaoCaoTonKhoXnListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoXnListComponent", function () { return BaoCaoTonKhoXnListComponent; });
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
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _bao_cao_ton_kho_xn_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../bao-cao-ton-kho-xn.model */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.model.ts");
            var BaoCaoTonKhoXnListComponent = /** @class */ (function () {
                function BaoCaoTonKhoXnListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_ton_kho_xn_model__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTonKhoXNSearch"]();
                    this.groups = [{ field: "Loai" }, { field: "Nhom" }];
                    this.pageSize = 50;
                    this.skip = 0;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.additionalSearchString = "";
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.ishowView = false;
                    this.IsData = false;
                }
                BaoCaoTonKhoXnListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTonKhoXN;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50 },
                        { Field: "MaHoaChat", Title: "Mã hóa chất", Width: 120 },
                        { Field: "TenHoaChat", Title: "Tên hóa chất", Width: 120, },
                        { Field: "DVT", Title: "ĐVT", Width: 120, },
                        { Field: "TonDau", Title: "Tồn đầu", Width: 120, },
                        { Field: "Nhap", Title: "Nhập", Width: 120, },
                        { Field: "TongSo", Title: "Tổng số", Width: 120, },
                        { Field: "Xuat", Title: "Xuất", Width: 120, },
                        { Field: "TonCuoi", Title: "Tồn cuối", Width: 120, },
                        {
                            Field: 'Loai',
                            Title: '',
                            Width: 0,
                            Sortable: true,
                            Hidden: true,
                            HideFilter: true,
                        },
                        {
                            Field: 'Nhom',
                            Title: '',
                            Width: 0,
                            Sortable: true,
                            Hidden: true,
                            HideFilter: true,
                        },
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
                BaoCaoTonKhoXnListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoTonKhoXnListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoTonKhoXnListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoTonKhoXnListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoTonKhoXnListComponent.prototype.detailExpand = function (event) {
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                    this.additionalSearchString = this.baoCaoSearch.KhoId + ";" + event.dataItem.NhomDuocPhamVatTuId + ";" + tuNgay + ";" + denNgay;
                };
                BaoCaoTonKhoXnListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (!this.baoCaoSearch.KhoId) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
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
                        var khoId = 0;
                        if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
                            khoId = this.baoCaoSearch.KhoId;
                        }
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTonKhoXetNghiem", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTonKhoXN" + dateTimeNow.getFullYear() + ".xlsx");
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
                BaoCaoTonKhoXnListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    if (this.dataSource.data.length == 0) {
                        this.XemBaoCao();
                    }
                    else {
                        var takeTo = this.skip + this.pageSize;
                        console.log(this.dataSource.data);
                        var gridData = this.dataSource.data.slice(this.skip, takeTo);
                        this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_12__["process"])(gridData, { group: this.groups });
                        this.gridView.total = this.dataSource.total;
                    }
                };
                BaoCaoTonKhoXnListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    if (!this.baoCaoSearch.KhoId) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
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
                    var khoId = 0;
                    if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
                        khoId = this.baoCaoSearch.KhoId;
                    }
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.baoCaoSearch.AdditionalSearchString = khoId.toString() + ";" + tuNgay + ";" + denNgay;
                    this.apiService.post("BaoCao/GetDataBaoCaoTonKhoXetNghiemForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.IsData = true;
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            var takeTo = +_this.skip + +_this.pageSize;
                            var gridData = _this.dataSource.data.slice(_this.skip, takeTo);
                            _this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_12__["process"])(gridData, { group: _this.groups });
                            _this.gridView.total = _this.dataSource.total;
                            console.log(_this.gridView);
                            //this.gridView = process(resultData.Data, { group: this.groups });
                            // if (resultData.TotalRowCount != 0) {
                            //   this.ishowView = true;
                            // } else {
                            //   this.ishowView = false;
                            // }
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
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
                BaoCaoTonKhoXnListComponent.prototype.changeValueStart = function () {
                    this.minDateDenNgay = new Date();
                    if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
                        && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
                        this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
                    }
                };
                return BaoCaoTonKhoXnListComponent;
            }());
            BaoCaoTonKhoXnListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoTonKhoXnListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tongCongTitleTemplate', { static: true })
            ], BaoCaoTonKhoXnListComponent.prototype, "tongCongTitleTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('nhomVatTuNameTemplate', { static: true })
            ], BaoCaoTonKhoXnListComponent.prototype, "nhomVatTuNameTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('kendoTitleTemplate', { static: true })
            ], BaoCaoTonKhoXnListComponent.prototype, "kendoTitleTemplate", void 0);
            BaoCaoTonKhoXnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-ton-kho-xn-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ton-kho-xn-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ton-kho-xn-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.scss")).default]
                })
            ], BaoCaoTonKhoXnListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-routing.module.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-routing.module.ts ***!
          \**********************************************************************************************/
        /*! exports provided: BaoCaoTonKhoXnRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoXnRoutingModule", function () { return BaoCaoTonKhoXnRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _bao_cao_ton_kho_xn_list_bao_cao_ton_kho_xn_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_ton_kho_xn_list_bao_cao_ton_kho_xn_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoTonKhoXnListComponent"],
                    data: {
                        title: 'Báo cáo xuất nhập tồn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].BaoCaoTonKhoXN,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_6__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTonKhoXnRoutingModule = /** @class */ (function () {
                function BaoCaoTonKhoXnRoutingModule() {
                }
                return BaoCaoTonKhoXnRoutingModule;
            }());
            BaoCaoTonKhoXnRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
                })
            ], BaoCaoTonKhoXnRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.model.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.model.ts ***!
          \*************************************************************************************/
        /*! exports provided: BaoCaoTonKhoXNSearch, BaoCaoTonKhoXN, InBaoCaoTonKhoXN */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoXNSearch", function () { return BaoCaoTonKhoXNSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoXN", function () { return BaoCaoTonKhoXN; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTonKhoXN", function () { return InBaoCaoTonKhoXN; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTonKhoXNSearch = /** @class */ (function () {
                function BaoCaoTonKhoXNSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
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
                return BaoCaoTonKhoXNSearch;
            }());
            var BaoCaoTonKhoXN = /** @class */ (function () {
                function BaoCaoTonKhoXN(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return BaoCaoTonKhoXN;
            }());
            var InBaoCaoTonKhoXN = /** @class */ (function () {
                function InBaoCaoTonKhoXN(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTonKhoXN;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.module.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.module.ts ***!
          \**************************************************************************************/
        /*! exports provided: BaoCaoTonKhoXnModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoXnModule", function () { return BaoCaoTonKhoXnModule; });
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
            /* harmony import */ var _bao_cao_ton_kho_xn_list_bao_cao_ton_kho_xn_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-list/bao-cao-ton-kho-xn-list.component.ts");
            /* harmony import */ var _bao_cao_ton_kho_xn_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-ton-kho-xn-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn-routing.module.ts");
            /* harmony import */ var _bao_cao_ton_kho_xn_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-ton-kho-xn.service */ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.service.ts");
            var BaoCaoTonKhoXnModule = /** @class */ (function () {
                function BaoCaoTonKhoXnModule() {
                }
                return BaoCaoTonKhoXnModule;
            }());
            BaoCaoTonKhoXnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_ton_kho_xn_list_bao_cao_ton_kho_xn_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoTonKhoXnListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_ton_kho_xn_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTonKhoXnRoutingModule"],
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
                        _bao_cao_ton_kho_xn_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTonKhoXnService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_ton_kho_xn_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoTonKhoXnService"] },
                    ]
                })
            ], BaoCaoTonKhoXnModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.service.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ton-kho-xn/bao-cao-ton-kho-xn.service.ts ***!
          \***************************************************************************************/
        /*! exports provided: BaoCaoTonKhoXnService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTonKhoXnService", function () { return BaoCaoTonKhoXnService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoTonKhoXnService = /** @class */ (function (_super) {
                __extends(BaoCaoTonKhoXnService, _super);
                function BaoCaoTonKhoXnService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTonKhoXnService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoTonKhoXnService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoTonKhoXnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTonKhoXnService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-ton-kho-xn-bao-cao-ton-kho-xn-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-ton-kho-xn-bao-cao-ton-kho-xn-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-ton-kho-xn-bao-cao-ton-kho-xn-module-es5.js.map