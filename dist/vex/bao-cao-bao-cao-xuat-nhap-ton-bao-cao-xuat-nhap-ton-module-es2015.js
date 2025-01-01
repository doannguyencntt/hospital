(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-xuat-nhap-ton-bao-cao-xuat-nhap-ton-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Dược', Path:''},\n                    {Title:'Xuất Nhập Tồn', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [pageSize]=\"pageSize\"\n                [skip]=\"skip\" [height]=\"height\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid\n                [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" bind=\"true\" url=\"TonKho/GetKhoTatCa\"\n                            [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                            [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                            [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div style=\"text-align: left;\">{{ dataItem.Ten}}</div>\n                    </ng-template>\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"font-weight: bold;color:#000;\">Tổng :</div>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                    width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"Tồn đầu kỳ\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(5)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                        width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                        width=\"{{getWidthColumn(7)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.DonGiaTonDauKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                        width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.ThanhTienTonDauKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                        <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                            <strong>{{sumThanhTien(aggregates.ThanhTienTonDauKy)| number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien('ThanhTienTonDauKy') | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column-group title=\"Nhập trong kỳ\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(9)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                        width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                        width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.DonGiaNhapTrongKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                        width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.ThanhTienNhapTrongKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                        <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                            <strong>{{sumThanhTien(aggregates.ThanhTienNhapTrongKy) | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien('ThanhTienNhapTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column-group title=\"Xuất trong kỳ\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(13)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                        width=\"{{getWidthColumn(14)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                        width=\"{{getWidthColumn(15)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.DonGiaXuatTrongKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                        width=\"{{getWidthColumn(16)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.ThanhTienXuatTrongKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                        <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                            <strong>{{sumThanhTien(aggregates.ThanhTienXuatTrongKy) | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien('ThanhTienXuatTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column-group title=\"Tồn cuối kỳ\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(17)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                        width=\"{{getWidthColumn(18)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                        width=\"{{getWidthColumn(19)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.DonGiaTonCuoiKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                    </kendo-grid-column>\n\n                    <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                        width=\"{{getWidthColumn(20)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.ThanhTienTonCuoiKy | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                        <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                            <strong>{{sumThanhTien(aggregates.ThanhTienTonCuoiKy) | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien('ThanhTienTonCuoiKy') | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column field=\"{{getFieldColumn(21)}}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(22)}}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                            (click)=\"reFresh()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-0\">\n    <div>BÁO CÁO XUẤT NHẬP TỒN </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In báo cáo\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby14dWF0LW5oYXAtdG9uL2Jhby1jYW8teHVhdC1uaGFwLXRvbi1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby14dWF0LW5oYXAtdG9uXFxiYW8tY2FvLXh1YXQtbmhhcC10b24tbGlzdFxcYmFvLWNhby14dWF0LW5oYXAtdG9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8teHVhdC1uaGFwLXRvbi9iYW8tY2FvLXh1YXQtbmhhcC10b24tbGlzdC9iYW8tY2FvLXh1YXQtbmhhcC10b24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXh1YXQtbmhhcC10b24vYmFvLWNhby14dWF0LW5oYXAtdG9uLWxpc3QvYmFvLWNhby14dWF0LW5oYXAtdG9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: BaoCaoXuatNhapTonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonListComponent", function() { return BaoCaoXuatNhapTonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bao_cao_xuat_nhap_ton_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bao-cao-xuat-nhap-ton.model */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.model.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _bao_cao_xuat_nhap_ton_popup_bao_cao_xuat_nhap_ton_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
















let BaoCaoXuatNhapTonListComponent = class BaoCaoXuatNhapTonListComponent {
    constructor(apiService, dialog, authService, notificationService, cd) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.baoCaoSearch = new _bao_cao_xuat_nhap_ton_model__WEBPACK_IMPORTED_MODULE_1__["BaoCaoXuatNhapTonSearch"]();
        this.inBaoCaoXuatNhapTon = new _bao_cao_xuat_nhap_ton_model__WEBPACK_IMPORTED_MODULE_1__["InBaoCaoXuatNhapTon"]();
        this.pageSize = 50;
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
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.showDefaultPagerTemplate = true;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.ishowView = false;
        this.IsData = false;
        this.heightToolbar = 140;
        this.groups = [{
                field: 'Loai',
                aggregates: [
                    { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
                    { field: 'ThanhTienNhapTrongKy', aggregate: 'sum' },
                    { field: 'ThanhTienXuatTrongKy', aggregate: 'sum' },
                    { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
                ]
            }, {
                field: 'Nhom',
                aggregates: [
                    { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
                    { field: 'ThanhTienNhapTrongKy', aggregate: 'sum' },
                    { field: 'ThanhTienXuatTrongKy', aggregate: 'sum' },
                    { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
                ]
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
        this.urlGetDataGridChild = "BaoCao/GetDataBaoCaoXuatNhapTonForGridAsyncChild";
        this.urlGetPageDataGridChild = "BaoCao/GetTotalBaoCaoXuatNhapTonForGridAsyncChild";
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoXuatNhapTon;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        if (window.location.protocol == "http:") {
            this.inBaoCaoXuatNhapTon.HostingName = "http://" + window.location.host;
        }
        else {
            this.inBaoCaoXuatNhapTon.HostingName = "https://" + window.location.host;
        }
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 300, Template: this.sttTemplate },
            { Field: "Ten", Title: "Tên thuốc, Vật tư, Hóa chất", Width: 200, TemplateFooter: this.donGiaFooterTemplate, TemplateGroupFooter: this.donGiaGroupFooterTemplate },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 120 },
            { Field: "SoLo", Title: "Số lô", Width: 100 },
            { Field: "DVT", Title: "ĐVT", Width: 100 },
            { Field: "TonDauKy", Title: "Tồn đầu kỳ", Width: 120 },
            { Field: "SLTonDauKy", Title: "Số lượng", Width: 120 },
            { Field: "DonGiaTonDauKy", Title: "Giá", Width: 120 },
            {
                Field: "ThanhTienTonDauKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienTonDauKyTemplate,
                TemplateFooter: this.thanhTienTonDauKyFooterTemplate, TemplateGroupFooter: this.thanhTienTonDauKyGroupFooterTemplate
            },
            { Field: "NhapTrongKy", Title: "Nhập trong kỳ", Width: 120 },
            { Field: "SLNhapTrongKy", Title: "Số lượng", Width: 120 },
            { Field: "DonGiaNhapTrongKy", Title: "Giá", Width: 120 },
            {
                Field: "ThanhTienNhapTrongKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienNhapTrongKyTemplate,
                TemplateFooter: this.thanhTienNhapTrongKyFooterTemplate, TemplateGroupFooter: this.thanhTienNhapTrongKyGroupFooterTemplate
            },
            { Field: "XuatTrongKy", Title: "Xuất Trong kỳ", Width: 120 },
            { Field: "SLXuatTrongKy", Title: "Số lượng", Width: 120 },
            { Field: "DonGiaXuatTrongKy", Title: "Giá", Width: 120 },
            {
                Field: "ThanhTienXuatTrongKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienXuatTrongKyTemplate,
                TemplateFooter: this.thanhTienXuatTrongKyFooterTemplate, TemplateGroupFooter: this.thanhTienXuatTrongKyGroupFooterTemplate
            },
            { Field: "TonCuoiKy", Title: "Tồn cuối kỳ", Width: 120 },
            { Field: "SLTonCuoiKy", Title: "Số lượng", Width: 120 },
            { Field: "DonGiaTonCuoiKy", Title: "Giá", Width: 120, Template: this.donGiaTemplate },
            {
                Field: "ThanhTienTonCuoiKy", Title: "Thành tiền", Width: 150, Template: this.thanhTienTonCuoiKyTemplate,
                TemplateFooter: this.thanhTienTonCuoiKyFooterTemplate, TemplateGroupFooter: this.thanhTienTonCuoiKyGroupFooterTemplate
            },
            { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: "Loai", Title: "Loại", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDay = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
        if (this.baoCaoSearch.TuNgayFormat == null) {
            this.baoCaoSearch.TuNgayFormat = firstDay;
        }
        if (this.baoCaoSearch.DenNgayFormat == null) {
            this.baoCaoSearch.DenNgayFormat = new Date();
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
    exportExcel() {
        if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
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
            this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoXuatNhapTon", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoXuatNhapTon" + dateTimeNow.getFullYear() + ".xlsx");
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
    sumThanhTien(value) {
        if (value) {
            return value.sum;
        }
    }
    totalThanhTien(field) {
        switch (field) {
            case 'ThanhTienTonDauKy':
                if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                    return this.dataToSumAllThanhTien.reduce((sum, item) => sum + item.ThanhTienTonDauKy, 0);
                }
            case 'ThanhTienNhapTrongKy':
                if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                    return this.dataToSumAllThanhTien.reduce((sum, item) => sum + item.ThanhTienNhapTrongKy, 0);
                }
            case 'ThanhTienXuatTrongKy':
                if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                    return this.dataToSumAllThanhTien.reduce((sum, item) => sum + item.ThanhTienXuatTrongKy, 0);
                }
            case 'ThanhTienTonCuoiKy':
                if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                    return this.dataToSumAllThanhTien.reduce((sum, item) => sum + item.ThanhTienTonCuoiKy, 0);
                }
        }
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
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.apiService.post("BaoCao/GetDataBaoCaoXuatNhapTonForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                // this.IsData = true;
                this.dataToSumAllThanhTien = resultData.Data;
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                var takeTo = +this.skip + +this.pageSize;
                let gridData = this.dataSource.data.slice(this.skip, takeTo);
                this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_15__["process"])(gridData, { group: this.groups });
                this.gridView.total = this.dataSource.total;
                // this.gridView.data.forEach((item, idx) => {
                //   this.baoCaoGrid.collapseRow(idx);
                // });//Đóng all expand
                this._isLoading = false;
                this._isLoadingTotalPage = false;
                // if (this.gridView.total != 0) {
                //   this.ishowView = true;
                // } else {
                //   this.ishowView = false;
                // }
            }
        });
    }
    reFresh() {
        this.skip = 0;
        this.XemBaoCao();
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
        this.inBaoCaoXuatNhapTon.KhoId = khoId;
        this.inBaoCaoXuatNhapTon.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        this.inBaoCaoXuatNhapTon.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        this.dialog.open(_bao_cao_xuat_nhap_ton_popup_bao_cao_xuat_nhap_ton_popup_component__WEBPACK_IMPORTED_MODULE_8__["BaoCaoXuatNhapTonPopupComponent"], {
            disableClose: false,
            width: '1200px',
            data: this.inBaoCaoXuatNhapTon,
        }).afterClosed().subscribe(() => {
        });
    }
    changeValueStart() {
        this.minDateDenNgay = new Date();
        if (this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null
            && this.baoCaoSearch.DenNgayFormat < this.baoCaoSearch.TuNgayFormat) {
            this.baoCaoSearch.DenNgayFormat = this.minDateDenNgay;
        }
    }
};
BaoCaoXuatNhapTonListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"], { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('baoCaoGrid', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "baoCaoGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienTonDauKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienNhapTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienXuatTrongKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienTonCuoiKyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "donGiaFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienTonDauKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienNhapTrongKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienXuatTrongKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienTonCuoiKyFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "donGiaGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonDauKyGroupFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienTonDauKyGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienNhapTrongKyGroupFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienNhapTrongKyGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienXuatTrongKyGroupFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienXuatTrongKyGroupFooterTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('thanhTienTonCuoiKyGroupFooterTemplate', { static: true })
], BaoCaoXuatNhapTonListComponent.prototype, "thanhTienTonCuoiKyGroupFooterTemplate", void 0);
BaoCaoXuatNhapTonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bao-cao-xuat-nhap-ton-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-xuat-nhap-ton-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-xuat-nhap-ton-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.scss")).default]
    })
], BaoCaoXuatNhapTonListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby14dWF0LW5oYXAtdG9uL2Jhby1jYW8teHVhdC1uaGFwLXRvbi1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8teHVhdC1uaGFwLXRvblxcYmFvLWNhby14dWF0LW5oYXAtdG9uLXBvcHVwXFxiYW8tY2FvLXh1YXQtbmhhcC10b24tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8teHVhdC1uaGFwLXRvbi9iYW8tY2FvLXh1YXQtbmhhcC10b24tcG9wdXAvYmFvLWNhby14dWF0LW5oYXAtdG9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8teHVhdC1uaGFwLXRvbi9iYW8tY2FvLXh1YXQtbmhhcC10b24tcG9wdXAvYmFvLWNhby14dWF0LW5oYXAtdG9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iLCIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: BaoCaoXuatNhapTonPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonPopupComponent", function() { return BaoCaoXuatNhapTonPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _bao_cao_xuat_nhap_ton_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bao-cao-xuat-nhap-ton.model */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.model.ts");








let BaoCaoXuatNhapTonPopupComponent = class BaoCaoXuatNhapTonPopupComponent {
    constructor(apiService, dialogRef, dialog, sanitizer, data) {
        this.apiService = apiService;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.data = data;
        this.inBaoCaoXuatNhapTon = new _bao_cao_xuat_nhap_ton_model__WEBPACK_IMPORTED_MODULE_7__["InBaoCaoXuatNhapTon"]();
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.src = "";
    }
    ngOnInit() {
        this.inBaoCaoXuatNhapTon = this.data;
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
        this.apiService.post("BaoCao/InBaoCaoXuatNhapTon", this.inBaoCaoXuatNhapTon).subscribe(resultData => {
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
            this.apiService.post("BaoCao/InBaoCaoXuatNhapTon", this.inBaoCaoXuatNhapTon).subscribe(resultData => {
                resolve(resultData);
            });
            this.close();
        });
    }
};
BaoCaoXuatNhapTonPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
BaoCaoXuatNhapTonPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-xuat-nhap-ton-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-xuat-nhap-ton-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-xuat-nhap-ton-popup.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], BaoCaoXuatNhapTonPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: BaoCaoXuatNhapTonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonRoutingModule", function() { return BaoCaoXuatNhapTonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_xuat_nhap_ton_list_bao_cao_xuat_nhap_ton_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_xuat_nhap_ton_list_bao_cao_xuat_nhap_ton_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoXuatNhapTonListComponent"],
        data: {
            title: 'Báo cáo xuất nhập tồn',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoXuatNhapTon,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoXuatNhapTonRoutingModule = class BaoCaoXuatNhapTonRoutingModule {
};
BaoCaoXuatNhapTonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoXuatNhapTonRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.model.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.model.ts ***!
  \*******************************************************************************************/
/*! exports provided: BaoCaoXuatNhapTonSearch, BaoCaoXuatNhapTon, InBaoCaoXuatNhapTon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonSearch", function() { return BaoCaoXuatNhapTonSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTon", function() { return BaoCaoXuatNhapTon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoXuatNhapTon", function() { return InBaoCaoXuatNhapTon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoXuatNhapTonSearch {
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
class BaoCaoXuatNhapTon {
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
class InBaoCaoXuatNhapTon {
    constructor(KhoId = 0, HostingName = null, FromDate = null, ToDate = null) {
        this.KhoId = KhoId;
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BaoCaoXuatNhapTonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonModule", function() { return BaoCaoXuatNhapTonModule; });
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
/* harmony import */ var _bao_cao_xuat_nhap_ton_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-xuat-nhap-ton-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-routing.module.ts");
/* harmony import */ var _bao_cao_xuat_nhap_ton_list_bao_cao_xuat_nhap_ton_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-list/bao-cao-xuat-nhap-ton-list.component.ts");
/* harmony import */ var _bao_cao_xuat_nhap_ton_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-xuat-nhap-ton.service */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.service.ts");
/* harmony import */ var _bao_cao_xuat_nhap_ton_popup_bao_cao_xuat_nhap_ton_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component */ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton-popup/bao-cao-xuat-nhap-ton-popup.component.ts");






















let BaoCaoXuatNhapTonModule = class BaoCaoXuatNhapTonModule {
};
BaoCaoXuatNhapTonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_xuat_nhap_ton_list_bao_cao_xuat_nhap_ton_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoXuatNhapTonListComponent"], _bao_cao_xuat_nhap_ton_popup_bao_cao_xuat_nhap_ton_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoXuatNhapTonPopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_xuat_nhap_ton_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoXuatNhapTonRoutingModule"],
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
            _bao_cao_xuat_nhap_ton_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoXuatNhapTonService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_xuat_nhap_ton_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoXuatNhapTonService"] },
        ],
        entryComponents: [
            _bao_cao_xuat_nhap_ton_popup_bao_cao_xuat_nhap_ton_popup_component__WEBPACK_IMPORTED_MODULE_21__["BaoCaoXuatNhapTonPopupComponent"]
        ]
    })
], BaoCaoXuatNhapTonModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-xuat-nhap-ton/bao-cao-xuat-nhap-ton.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: BaoCaoXuatNhapTonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoXuatNhapTonService", function() { return BaoCaoXuatNhapTonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoXuatNhapTonService = class BaoCaoXuatNhapTonService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoXuatNhapTonService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoXuatNhapTonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoXuatNhapTonService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-xuat-nhap-ton-bao-cao-xuat-nhap-ton-module-es2015.js.map