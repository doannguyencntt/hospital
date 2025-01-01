(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-hoat-dong-khoa-kham-benh-bao-cao-hoat-dong-khoa-kham-benh-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'KHTH', Path:''},\n                {Title:'Hoạt Động Khoa Khám Bệnh', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <!-- <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\"\n                    url=\"TonKho/GetKhoTatCaVatTu\" [(model)]=\"baoCaoSearch.KhoId\"  [autoSelectFirstItem]=\"true\">\n                </app-combobox> -->\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày bắt đầu khám\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày bắt đầu khám\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormatHoanThanh\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormatHoanThanh\" label=\"Từ ngày hoàn thành khám\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormatHoanThanh\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormatHoanThanh\" class=\"mt-1 on-header\" label=\"Đến ngày hoàn thành khám\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"40%\" fxFlex.sm=\"40%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid  [data]=\"gridDataSource\" class=\"k-grid1 grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\"\n                        (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                            width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.PhongBenhVien}}</div>\n                            </ng-template>                            \n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"font-weight: bold;color:#000;\">Tổng số</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                            width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.TongSo}}</div>\n                            </ng-template>      \n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <strong>{{ sumTongSo | number}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Số lần khám\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(3)}}</div>\n                            </ng-template>\n                            <kendo-grid-column-group title=\"BHYT\">\n                                <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                    <div class=\"text-center\">{{getTitleColumn(4)}}</div>\n                                </ng-template>\n                                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\" width=\"{{getWidthColumn(5)}}\"\n                                    [headerStyle]=\"{'text-align': 'center'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <div> {{ dataItem.BhytCoGoi | number}}</div>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumBHYTCoGoi | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            \n                                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\" width=\"{{getWidthColumn(6)}}\"\n                                    [headerStyle]=\"{'text-align': 'center'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <div> {{ dataItem.BhytKhongGoi | number}}</div>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumBHYTKhongGoiGoi | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            </kendo-grid-column-group>\n\n                            <kendo-grid-column-group title=\"Viện phí\">\n                                <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                    <div class=\"text-center\">{{getTitleColumn(7)}}</div>\n                                </ng-template>\n                                <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\" width=\"{{getWidthColumn(8)}}\"\n                                    [headerStyle]=\"{'text-align': 'center'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <div> {{ dataItem.VienPhiCoGoi | number}}</div>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumVienPhiCoGoi | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            \n                                <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\" width=\"{{getWidthColumn(9)}}\"\n                                    [headerStyle]=\"{'text-align': 'center'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <div> {{ dataItem.VienPhiKhongGoi | number}}</div>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumVienPhiKhongGoiGoi | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            </kendo-grid-column-group>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                                width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.KskBHTN | number}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumKskBHTN | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                                width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.KskDoanCongTy | number}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumKskDoanCongTy | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                                width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.GiayKsk | number}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumGiayKsk | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                            width=\"{{getWidthColumn(13)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div> {{ dataItem.TreEm | number}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <strong>{{ sumTreEm | number}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                            width=\"{{getWidthColumn(14)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div> {{ dataItem.SoLanCapCuu | number}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <strong>{{ sumSLCapCuu | number}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                            width=\"{{getWidthColumn(15)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div> {{ dataItem.SoNguoiBenhVaoVien | number}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <strong>{{ sumSoNguoiVaoVien | number}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                            width=\"{{getWidthColumn(16)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div> {{ dataItem.SoNguoiBenhChuyenVien | number}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <strong>{{ sumSoNguoiChuyenVien | number}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                            width=\"{{getWidthColumn(17)}}\" [style]=\"{'text-align': 'left'}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div> {{ dataItem.SoNguoiBenhTuVong | number}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <strong>{{ sumSoNguoiTuVong | number}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Đ.Trị Ngoại Trú\t\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(18)}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                                width=\"{{getWidthColumn(19)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.SoNguoiBenhDieuTriNgoaiTru | number}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumSoNguoiDieuTri | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                                width=\"{{getWidthColumn(20)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.SoNgayDieuTriNgoaiTru | number}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumSoNgay | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                       \n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"XemBaoCao()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1ob2F0LWRvbmcta2hvYS1raGFtLWJlbmgvYmFvLWNhby1ob2F0LWRvbmcta2hvYS1raGFtLWJlbmgtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8taG9hdC1kb25nLWtob2Eta2hhbS1iZW5oXFxiYW8tY2FvLWhvYXQtZG9uZy1raG9hLWtoYW0tYmVuaC1saXN0XFxiYW8tY2FvLWhvYXQtZG9uZy1raG9hLWtoYW0tYmVuaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWhvYXQtZG9uZy1raG9hLWtoYW0tYmVuaC9iYW8tY2FvLWhvYXQtZG9uZy1raG9hLWtoYW0tYmVuaC1saXN0L2Jhby1jYW8taG9hdC1kb25nLWtob2Eta2hhbS1iZW5oLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1ob2F0LWRvbmcta2hvYS1raGFtLWJlbmgvYmFvLWNhby1ob2F0LWRvbmcta2hvYS1raGFtLWJlbmgtbGlzdC9iYW8tY2FvLWhvYXQtZG9uZy1raG9hLWtoYW0tYmVuaC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhoaKhamBenhListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhoaKhamBenhListComponent", function() { return BaoCaoHoatDongKhoaKhamBenhListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_hoat_dong_khoa_kham_benh_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../bao-cao-hoat-dong-khoa-kham-benh.model */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");












let BaoCaoHoatDongKhoaKhamBenhListComponent = class BaoCaoHoatDongKhoaKhamBenhListComponent {
    constructor(authService, apiService, notificationService, dialog) {
        this.authService = authService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.baoCaoSearch = new _bao_cao_hoat_dong_khoa_kham_benh_model__WEBPACK_IMPORTED_MODULE_8__["BaoCaoHoatDongKhoaKhamBenhSearch"]();
        this.inBaoCaoHoatDongKhoaKhamBenh = new _bao_cao_hoat_dong_khoa_kham_benh_model__WEBPACK_IMPORTED_MODULE_8__["InBaoCaoHoatDongKhoaKhamBenh"]();
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
        this.sumTongSo = null;
        this.sumBHYTCoGoi = null;
        this.sumBHYTKhongGoiGoi = null;
        this.sumVienPhiCoGoi = null;
        this.sumVienPhiKhongGoiGoi = null;
        this.sumKskBHTN = null;
        this.sumKskDoanCongTy = null;
        this.sumGiayKsk = null;
        this.sumTreEm = null;
        this.sumSLCapCuu = null;
        this.sumSoNguoiVaoVien = null;
        this.sumSoNguoiChuyenVien = null;
        this.sumSoNguoiTuVong = null;
        this.sumSoNguoiDieuTri = null;
        this.sumSoNgay = null;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.showDefaultPagerTemplate = true;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoHoatDongKhoaKhamBenh;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        // if (window.location.protocol == "http:") {
        //   this.inBaoCaoHoatDongKhoaKhamBenh.HostingName = "http://" + window.location.host;
        // } else {
        //   this.inBaoCaoHoatDongKhoaKhamBenh.HostingName = "https://" + window.location.host;
        // }
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 70 },
            { Field: "PhongBenhVien", Title: "Phòng bệnh viện", Width: 300 },
            { Field: "TongSo", Title: "Tổng số", Width: 100 },
            { Field: "_", Title: "Số lần khám", Width: 540 },
            { Field: "_", Title: "BHYT", Width: 70 },
            { Field: "BhytCoGoi", Title: "Có gói", Width: 70 },
            { Field: "BhytKhongGoi", Title: "Không gói", Width: 70 },
            { Field: "_", Title: "Viện phí", Width: 70 },
            { Field: "VienPhiCoGoi", Title: "Có gói", Width: 70 },
            { Field: "VienPhiKhongGoi", Title: "Không gói", Width: 70 },
            { Field: "KskBHTN", Title: "KSK BHTN", Width: 100 },
            { Field: "KskDoanCongTy", Title: "KSK đoàn, Công ty", Width: 100 },
            { Field: "GiayKsk", Title: "Giấy KSK", Width: 100 },
            { Field: "TreEm", Title: "Tr.đó: Trẻ em <=6", Width: 100 },
            { Field: "SoLanCapCuu", Title: "Số lần cấp cứu", Width: 120 },
            { Field: "SoNguoiBenhVaoVien", Title: "Số người bệnh vào viện", Width: 200 },
            { Field: "SoNguoiBenhChuyenVien", Title: "Số người bệnh chuyển viện", Width: 200 },
            { Field: "SoNguoiBenhTuVong", Title: "Số người bệnh tử vong", Width: 200 },
            { Field: "_", Title: "Đ.Trị Ngoại Trú", Width: 240 },
            { Field: "SoNguoiBenhDieuTriNgoaiTru", Title: "Số người bệnh", Width: 120 },
            { Field: "SoNgayDieuTriNgoaiTru", Title: "Số ngày", Width: 120 } //20
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
    pageChange(event) {
        this.skip = event.skip;
        if (this.dataSource.data.length == 0) {
            this.XemBaoCao();
        }
        else {
            var takeTo = this.skip + this.pageSize;
            console.log(this.dataSource.data);
            let gridData = this.dataSource.data.slice(this.skip, takeTo);
            this.gridDataSource = {
                data: gridData,
                total: this.dataSource.total
            };
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
    XemBaoCao() {
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        // if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
        //   this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
        //   this._isLoading = false;
        //   this._isLoadingTotalPage = false;
        //   return;
        // }
        if (!((this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null)
            || (this.baoCaoSearch.TuNgayFormatHoanThanh != null && this.baoCaoSearch.DenNgayFormatHoanThanh != null))) {
            this.notificationService.showError("Yêu cầu nhập từ ngày và đến ngày bắt đầu khám hoặc hoàn thành khám");
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
        // let tuNgay = null;
        // let denNgay = null;
        // if(this.baoCaoSearch.TuNgayFormat != null && this.baoCaoSearch.DenNgayFormat != null)
        // {
        //   tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
        //   denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
        // }
        // let tuNgayHoanThanh = null;
        // let denNgayHoanThanh = null;
        // if(this.baoCaoSearch.TuNgayFormatHoanThanh != null && this.baoCaoSearch.DenNgayFormatHoanThanh != null)
        // {
        //   tuNgayHoanThanh = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormatHoanThanh, "dd/mm/yyyy");
        //   denNgayHoanThanh = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormatHoanThanh, "dd/mm/yyyy");
        // }
        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
        this.baoCaoSearch.FromDateHoanThanh = this.baoCaoSearch.TuNgayFormatHoanThanh;
        this.baoCaoSearch.ToDateHoanThanh = this.baoCaoSearch.DenNgayFormatHoanThanh;
        //this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
        this.apiService.post("BaoCao/GetDataBaoCaoHoatDongKhoaKhamBenhForGridAsync", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.dataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                var takeTo = +this.skip + +this.pageSize;
                let gridData = this.dataSource.data.slice(this.skip, takeTo);
                this.gridDataSource = {
                    data: gridData,
                    total: resultData.TotalRowCount
                };
                this.sumTongSo = resultData.Data.reduce((sum, item) => sum + item.TongSo, 0);
                this.sumBHYTCoGoi = resultData.Data.reduce((sum, item) => sum + item.BhytCoGoi, 0);
                this.sumBHYTKhongGoiGoi = resultData.Data.reduce((sum, item) => sum + item.BhytKhongGoi, 0);
                this.sumVienPhiCoGoi = resultData.Data.reduce((sum, item) => sum + item.VienPhiCoGoi, 0);
                this.sumVienPhiKhongGoiGoi = resultData.Data.reduce((sum, item) => sum + item.VienPhiKhongGoi, 0);
                this.sumKskBHTN = resultData.Data.reduce((sum, item) => sum + item.KskBHTN, 0);
                this.sumKskDoanCongTy = resultData.Data.reduce((sum, item) => sum + item.KskDoanCongTy, 0);
                this.sumGiayKsk = resultData.Data.reduce((sum, item) => sum + item.GiayKsk, 0);
                this.sumTreEm = resultData.Data.reduce((sum, item) => sum + item.TreEm, 0);
                this.sumSLCapCuu = resultData.Data.reduce((sum, item) => sum + item.SoLanCapCuu, 0);
                this.sumSoNguoiVaoVien = resultData.Data.reduce((sum, item) => sum + item.SoNguoiBenhVaoVien, 0);
                this.sumSoNguoiChuyenVien = resultData.Data.reduce((sum, item) => sum + item.SoNguoiBenhChuyenVien, 0);
                this.sumSoNguoiTuVong = resultData.Data.reduce((sum, item) => sum + item.SoNguoiBenhTuVong, 0);
                this.sumSoNguoiDieuTri = resultData.Data.reduce((sum, item) => sum + item.SoNguoiBenhDieuTriNgoaiTru, 0);
                this.sumSoNgay = resultData.Data.reduce((sum, item) => sum + item.SoNgayDieuTriNgoaiTru, 0);
                // if (this.gridDataSource.total != 0) {
                //   this.ishowView = true;
                // } else {
                //   this.ishowView = false;
                // }
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
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_7__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            // let tuNgay = CommonService.formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
            // let denNgay = CommonService.formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
            this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
            this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
            this.baoCaoSearch.FromDateHoanThanh = this.baoCaoSearch.TuNgayFormatHoanThanh;
            this.baoCaoSearch.ToDateHoanThanh = this.baoCaoSearch.DenNgayFormatHoanThanh;
            //this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoHoatDongKhoaKhamBenh.HostingName;
            this.apiService.postExportExcel("BaoCao/ExportBaoCaoHoatDongKhoaKhamBenh", this.baoCaoSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoHoatDongKhoaKhamBenh" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_6__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoHoatDongKhoaKhamBenhListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
BaoCaoHoatDongKhoaKhamBenhListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-hoat-dong-khoa-kham-benh-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-hoat-dong-khoa-kham-benh-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-hoat-dong-khoa-kham-benh-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.scss")).default]
    })
], BaoCaoHoatDongKhoaKhamBenhListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhoaKhamBenhRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhoaKhamBenhRoutingModule", function() { return BaoCaoHoatDongKhoaKhamBenhRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _bao_cao_hoat_dong_khoa_kham_benh_list_bao_cao_hoat_dong_khoa_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_hoat_dong_khoa_kham_benh_list_bao_cao_hoat_dong_khoa_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoHoatDongKhoaKhamBenhListComponent"],
        data: {
            title: 'Báo cáo hoạt động khoa khám bệnh',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].BaoCaoHoatDongKhoaKhamBenh,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let BaoCaoHoatDongKhoaKhamBenhRoutingModule = class BaoCaoHoatDongKhoaKhamBenhRoutingModule {
};
BaoCaoHoatDongKhoaKhamBenhRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoHoatDongKhoaKhamBenhRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh.model.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh.model.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhoaKhamBenhSearch, InBaoCaoHoatDongKhoaKhamBenh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhoaKhamBenhSearch", function() { return BaoCaoHoatDongKhoaKhamBenhSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoHoatDongKhoaKhamBenh", function() { return InBaoCaoHoatDongKhoaKhamBenh; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoHoatDongKhoaKhamBenhSearch {
    constructor(FromDate = null, ToDate = null, TuNgayFormat = null, DenNgayFormat = null, FromDateHoanThanh = null, ToDateHoanThanh = null, TuNgayFormatHoanThanh = null, DenNgayFormatHoanThanh = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.TuNgayFormat = TuNgayFormat;
        this.DenNgayFormat = DenNgayFormat;
        this.FromDateHoanThanh = FromDateHoanThanh;
        this.ToDateHoanThanh = ToDateHoanThanh;
        this.TuNgayFormatHoanThanh = TuNgayFormatHoanThanh;
        this.DenNgayFormatHoanThanh = DenNgayFormatHoanThanh;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}
class InBaoCaoHoatDongKhoaKhamBenh {
    constructor(HostingName = null, FromDate = null, ToDate = null) {
        this.HostingName = HostingName;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: BaoCaoHoatDongKhoaKhamBenhModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoHoatDongKhoaKhamBenhModule", function() { return BaoCaoHoatDongKhoaKhamBenhModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_hoat_dong_khoa_kham_benh_list_bao_cao_hoat_dong_khoa_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-list/bao-cao-hoat-dong-khoa-kham-benh-list.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _bao_cao_hoat_dong_khoa_kham_benh_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bao-cao-hoat-dong-khoa-kham-benh-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-hoat-dong-khoa-kham-benh/bao-cao-hoat-dong-khoa-kham-benh-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");












let BaoCaoHoatDongKhoaKhamBenhModule = class BaoCaoHoatDongKhoaKhamBenhModule {
};
BaoCaoHoatDongKhoaKhamBenhModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_hoat_dong_khoa_kham_benh_list_bao_cao_hoat_dong_khoa_kham_benh_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoHoatDongKhoaKhamBenhListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _bao_cao_hoat_dong_khoa_kham_benh_routing_module__WEBPACK_IMPORTED_MODULE_7__["BaoCaoHoatDongKhoaKhamBenhRoutingModule"]
        ]
    })
], BaoCaoHoatDongKhoaKhamBenhModule);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-hoat-dong-khoa-kham-benh-bao-cao-hoat-dong-khoa-kham-benh-module-es2015.js.map