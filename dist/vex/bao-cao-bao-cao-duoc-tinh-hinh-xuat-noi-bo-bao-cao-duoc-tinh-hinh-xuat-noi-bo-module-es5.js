(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-duoc-tinh-hinh-xuat-noi-bo-bao-cao-duoc-tinh-hinh-xuat-noi-bo-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Tình Hình Xuất Nội Bộ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <!-- <app-grid #baoCaoGrid\n                [gridColumns]=\"gridColumns\" [gridDataSource]=\"gridDataSource\"\n                [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" \n                [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\"\n                [showStt]=\"true\" [groups]=\"groups\">\n            </app-grid>\n            <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                <strong>{{value}}</strong>\n            </ng-template> -->\n\n            <kendo-grid [data]=\"gridView\" [height]=\"height\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid\n                [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header pb-0 mr-1\" popupSettings=\"\"  style=\"margin-left: 5px;\" \n                            label=\"Kho\" bind=\"true\" url=\"BaoCao/GetKhos\" [(model)]=\"baoCaoSearch.KhoId\"\n                            [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu\n                            id=\"TuNgayFormat\" [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden\n                            id=\"DenNgayFormat\" [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\"\n                            label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n\n                <kendo-grid-column-group title=\"Số lượng\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(4)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                        width=\"{{getWidthColumn(5)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                        width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                        <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                            <span style=\"font-weight: bold;color:#000;text-align: left;\">Tổng Cộng :</span>\n                          </ng-template>\n\n                    </kendo-grid-column>\n\n                </kendo-grid-column-group>\n\n                <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                    width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n\n                    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                        <ng-container *ngTemplateOutlet=\"donGiaTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n\n                    <ng-template #donGiaTemplate let-dataItem>\n                        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                    width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                        <ng-container *ngTemplateOutlet=\"thanhTienTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n\n                    <ng-template #thanhTienTemplate let-dataItem>\n                        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                      <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>{{totalThanhTien() | number:'0.2-2':'vi-VN'}}</span>\n                    </ng-template>\n\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                    width=\"{{getWidthColumn(9)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n    \n                <!-- <kendo-grid-column field=\"{{getFieldColumn(10)}}\">\n                        <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                            <strong>{{value}}</strong>\n                        </ng-template>\n                    </kendo-grid-column> -->\n                    <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                        width=\"{{getWidthColumn(10)}}\" [style]=\"{'text-align': 'left'}\"\n                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\"\n                        [hidden]=\"true\">\n\n                        <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\" let-aggregates=\"aggregates\">\n                            <ng-container *ngTemplateOutlet=\"nhomGroupHeaderTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\"></ng-container>\n                        </ng-template>\n                        \n                        <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                            <strong>{{value}}</strong>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <!-- <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template> -->\n\n                    <ng-template kendoGridNoRecordsTemplate>\n                        <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                        <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                    </ng-template>\n                    <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                        detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                    </kendo-grid-messages>\n                    <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                        <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                            fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                            <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                            <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                            </kendo-pager-numeric-buttons>\n                            <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                            </button>\n                            <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                            <kendo-pager-info></kendo-pager-info>\n                            <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                (click)=\"reFresh()\"></div>\n                            <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                        </div>\n                    </ng-template>\n            </kendo-grid>\n        </div>\n\n       \n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.scss": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.scss ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdW9jLXRpbmgtaGluaC14dWF0LW5vaS1iby9iYW8tY2FvLWR1b2MtdGluaC1oaW5oLXh1YXQtbm9pLWJvLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWR1b2MtdGluaC1oaW5oLXh1YXQtbm9pLWJvXFxiYW8tY2FvLWR1b2MtdGluaC1oaW5oLXh1YXQtbm9pLWJvLWxpc3RcXGJhby1jYW8tZHVvYy10aW5oLWhpbmgteHVhdC1ub2ktYm8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdW9jLXRpbmgtaGluaC14dWF0LW5vaS1iby9iYW8tY2FvLWR1b2MtdGluaC1oaW5oLXh1YXQtbm9pLWJvLWxpc3QvYmFvLWNhby1kdW9jLXRpbmgtaGluaC14dWF0LW5vaS1iby1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZHVvYy10aW5oLWhpbmgteHVhdC1ub2ktYm8vYmFvLWNhby1kdW9jLXRpbmgtaGluaC14dWF0LW5vaS1iby1saXN0L2Jhby1jYW8tZHVvYy10aW5oLWhpbmgteHVhdC1ub2ktYm8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iLCIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.ts": 
        /*!**********************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.ts ***!
          \**********************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDuocTinhHinhXuatNoiBoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocTinhHinhXuatNoiBoListComponent", function () { return BaoCaoDuocTinhHinhXuatNoiBoListComponent; });
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
            /* harmony import */ var _bao_cao_duoc_tinh_hinh_xuat_noi_bo_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-duoc-tinh-hinh-xuat-noi-bo.model */ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            var BaoCaoDuocTinhHinhXuatNoiBoListComponent = /** @class */ (function () {
                function BaoCaoDuocTinhHinhXuatNoiBoListComponent(apiService, dialog, authService, notificationService, cd) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.pageSize = 50;
                    this.skip = 0;
                    this.ishowView = false;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this._showDefaultPagerTemplate = true;
                    this.baoCaoSearch = new _bao_cao_duoc_tinh_hinh_xuat_noi_bo_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoDuocTinhHinhXuatNoiBoSearch"]();
                    this.inBaoCaoDuocTinhHinhXuatNoiBo = new _bao_cao_duoc_tinh_hinh_xuat_noi_bo_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoDuocTinhHinhXuatNoiBo"]();
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.showGrid = false;
                    this.showPrintExport = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.IsData = false;
                    this.heightToolbar = 140;
                    this.groups = [{ field: 'Nhom' }];
                }
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoDuocTinhHinhXuatNoiBo;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoDuocTinhHinhXuatNoiBo.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoDuocTinhHinhXuatNoiBo.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 100 },
                        { Field: "Ma", Title: "Mã dược", Width: 100 },
                        { Field: "Ten", Title: "Tên dược, Vật tư, Hóa chất", Width: 200 },
                        { Field: "DVT", Title: "ĐVT", Width: 100 },
                        { Field: "SoLuong", Title: "Số lượng", Width: 100 },
                        { Field: "SoLuongYeuCau", Title: "Yêu cầu", Width: 100 },
                        { Field: "SoLuongThucXuat", Title: "Thực xuất", Width: 100 },
                        { Field: "DonGia", Title: "Đơn giá", Width: 100, Template: this.donGiaTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 100, Template: this.thanhTienTemplate },
                        { Field: "GhiChu", Title: "Ghi chú", Width: 100 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
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
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.reFresh = function () {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    // this.XemBaoCao();
                    if (this.gridDataSource.data.length == 0) {
                        this.XemBaoCao();
                    }
                    else {
                        var takeTo = +this.skip + +this.pageSize;
                        var gridData = this.gridDataSource.data.slice(this.skip, takeTo);
                        this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: this.groups });
                        this.gridView.total = this.gridDataSource.total;
                        // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
                    }
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.totalThanhTien = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    }
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoadingTotalPage = true;
                    this._isLoading = true;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.apiService.post("BaoCao/GetDataBaoCaoDuocTinhHinhXuatNoiBoForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.showPrintExport = true;
                            }
                            // this.showGrid = true;
                            _this.gridDataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            var takeTo = +_this.skip + +_this.pageSize;
                            var gridData = _this.gridDataSource.data.slice(_this.skip, takeTo);
                            _this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: _this.groups });
                            _this.gridView.total = _this.gridDataSource.total;
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                    });
                };
                BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype.exportExcel = function () {
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
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoDuocTinhHinhXuatNoiBo", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDuocTinhHinhXuatNoiBo" + dateTimeNow.getFullYear() + ".xlsx");
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
                return BaoCaoDuocTinhHinhXuatNoiBoListComponent;
            }());
            BaoCaoDuocTinhHinhXuatNoiBoListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
            ], BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("donGiaTemplate", { static: true })
            ], BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplate", { static: true })
            ], BaoCaoDuocTinhHinhXuatNoiBoListComponent.prototype, "thanhTienTemplate", void 0);
            BaoCaoDuocTinhHinhXuatNoiBoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-duoc-tinh-hinh-xuat-noi-bo-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.scss")).default]
                })
            ], BaoCaoDuocTinhHinhXuatNoiBoListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-routing.module.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-routing.module.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: BaoCaoDuocTinhHinhXuatNoiBoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocTinhHinhXuatNoiBoRoutingModule", function () { return BaoCaoDuocTinhHinhXuatNoiBoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component */ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDuocTinhHinhXuatNoiBoListComponent"],
                    data: {
                        title: 'Báo cáo dược tình hình xuất nội bộ',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoDuocTinhHinhXuatNoiBo,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoDuocTinhHinhXuatNoiBoRoutingModule = /** @class */ (function () {
                function BaoCaoDuocTinhHinhXuatNoiBoRoutingModule() {
                }
                return BaoCaoDuocTinhHinhXuatNoiBoRoutingModule;
            }());
            BaoCaoDuocTinhHinhXuatNoiBoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoDuocTinhHinhXuatNoiBoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo.model.ts": 
        /*!*********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo.model.ts ***!
          \*********************************************************************************************************************/
        /*! exports provided: BaoCaoDuocTinhHinhXuatNoiBoSearch, InBaoCaoDuocTinhHinhXuatNoiBo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocTinhHinhXuatNoiBoSearch", function () { return BaoCaoDuocTinhHinhXuatNoiBoSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoDuocTinhHinhXuatNoiBo", function () { return InBaoCaoDuocTinhHinhXuatNoiBo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoDuocTinhHinhXuatNoiBoSearch = /** @class */ (function () {
                function BaoCaoDuocTinhHinhXuatNoiBoSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
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
                return BaoCaoDuocTinhHinhXuatNoiBoSearch;
            }());
            var InBaoCaoDuocTinhHinhXuatNoiBo = /** @class */ (function () {
                function InBaoCaoDuocTinhHinhXuatNoiBo(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoDuocTinhHinhXuatNoiBo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo.module.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo.module.ts ***!
          \**********************************************************************************************************************/
        /*! exports provided: BaoCaoDuocTinhHinhXuatNoiBoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDuocTinhHinhXuatNoiBoModule", function () { return BaoCaoDuocTinhHinhXuatNoiBoModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component */ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list/bao-cao-duoc-tinh-hinh-xuat-noi-bo-list.component.ts");
            /* harmony import */ var _bao_cao_duoc_tinh_hinh_xuat_noi_bo_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-duoc-tinh-hinh-xuat-noi-bo-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-duoc-tinh-hinh-xuat-noi-bo/bao-cao-duoc-tinh-hinh-xuat-noi-bo-routing.module.ts");
            var BaoCaoDuocTinhHinhXuatNoiBoModule = /** @class */ (function () {
                function BaoCaoDuocTinhHinhXuatNoiBoModule() {
                }
                return BaoCaoDuocTinhHinhXuatNoiBoModule;
            }());
            BaoCaoDuocTinhHinhXuatNoiBoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_bao_cao_duoc_tinh_hinh_xuat_noi_bo_list_component__WEBPACK_IMPORTED_MODULE_12__["BaoCaoDuocTinhHinhXuatNoiBoListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                        _bao_cao_duoc_tinh_hinh_xuat_noi_bo_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoDuocTinhHinhXuatNoiBoRoutingModule"]
                    ]
                })
            ], BaoCaoDuocTinhHinhXuatNoiBoModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-duoc-tinh-hinh-xuat-noi-bo-bao-cao-duoc-tinh-hinh-xuat-noi-bo-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-duoc-tinh-hinh-xuat-noi-bo-bao-cao-duoc-tinh-hinh-xuat-noi-bo-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-duoc-tinh-hinh-xuat-noi-bo-bao-cao-duoc-tinh-hinh-xuat-noi-bo-module-es5.js.map