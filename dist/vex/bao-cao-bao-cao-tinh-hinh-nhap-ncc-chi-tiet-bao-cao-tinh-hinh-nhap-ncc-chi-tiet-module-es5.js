(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.html ***!
          \*****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Dược', Path:''},\n                {Title:'Tình Hình Nhập Nhà Cung Cấp Chi Tiết', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [pageSize]=\"pageSize\"\n                [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" bind=\"true\" url=\"BaoCao/GetKhos\"\n                            [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\">\n                        </app-combobox>\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu\n                            id=\"TuNgayFormat\" [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden\n                            id=\"DenNgayFormat\" [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\"\n                            label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n\n                <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                    width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                    width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                    width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                    width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                    width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                        <ng-container\n                            *ngTemplateOutlet=\"donGiaTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                        </ng-container>\n                    </ng-template>\n\n                    <ng-template #donGiaTemplate let-dataItem>\n                        {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                    width=\"{{getWidthColumn(9)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <span style=\"font-weight: bold;color:#000;text-align: left;\">Tổng Cộng :</span>\n                    </ng-template>\n                    <!-- <ng-template kendoGridFooterTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                        <strong>{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</strong>\n\n                    </ng-template> -->\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                    width=\"{{getWidthColumn(10)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n\n                    <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                        <strong>{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</strong>\n                    </ng-template>\n\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        {{totalThanhTien() | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                    <!-- Bỏ\n                    <ng-template #thanhTienTemplateFooter let-dataItem>\n                        <span style=\"font-weight: bold;color:#000;text-align: left;\">{{totalThanhTien()}}</span>\n                    </ng-template> -->\n\n                    <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                        <ng-container\n                            *ngTemplateOutlet=\"thanhTienTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                        </ng-container>\n                    </ng-template>\n\n                    <ng-template #thanhTienTemplate let-dataItem>\n                        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                    </ng-template>\n\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                    width=\"{{getWidthColumn(11)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [hidden]=\"true\">\n\n                    <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"\n                        let-aggregates=\"aggregates\">\n                        <ng-container\n                            *ngTemplateOutlet=\"nhaccGroupHeaderTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                        </ng-container>\n                    </ng-template>\n\n                    <!-- <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                        <strong>{{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}</strong>\n                    </ng-template>\n\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        {{totalThanhTien() | number:'0.2-2':'vi-VN'}}\n                      </ng-template>\n\n                      <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                        <ng-container *ngTemplateOutlet=\"thanhTienTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\"></ng-container>\n                    </ng-template>\n\n                    <ng-template #thanhTienTemplate let-dataItem>\n                        {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                    </ng-template> -->\n\n                    <ng-template #nhaccGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                            (click)=\"reFresh()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.scss": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.scss ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10aW5oLWhpbmgtbmhhcC1uY2MtY2hpLXRpZXQvYmFvLWNhby10aW5oLWhpbmgtbmhhcC1uY2MtY2hpLXRpZXQtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tdGluaC1oaW5oLW5oYXAtbmNjLWNoaS10aWV0XFxiYW8tY2FvLXRpbmgtaGluaC1uaGFwLW5jYy1jaGktdGlldC1saXN0XFxiYW8tY2FvLXRpbmgtaGluaC1uaGFwLW5jYy1jaGktdGlldC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRpbmgtaGluaC1uaGFwLW5jYy1jaGktdGlldC9iYW8tY2FvLXRpbmgtaGluaC1uaGFwLW5jYy1jaGktdGlldC1saXN0L2Jhby1jYW8tdGluaC1oaW5oLW5oYXAtbmNjLWNoaS10aWV0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10aW5oLWhpbmgtbmhhcC1uY2MtY2hpLXRpZXQvYmFvLWNhby10aW5oLWhpbmgtbmhhcC1uY2MtY2hpLXRpZXQtbGlzdC9iYW8tY2FvLXRpbmgtaGluaC1uaGFwLW5jYy1jaGktdGlldC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.ts": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.ts ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapNccChiTietListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapNccChiTietListComponent", function () { return BaoCaoTinhHinhNhapNccChiTietListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bao-cao-tinh-hinh-nhap-ncc-chi-tiet.model */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet.model.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            var BaoCaoTinhHinhNhapNccChiTietListComponent = /** @class */ (function () {
                function BaoCaoTinhHinhNhapNccChiTietListComponent(apiService, dialog, notificationService, authService, cd) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.cd = cd;
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.aggregates = [
                        { field: "ThanhTien", aggregate: "sum" },
                    ];
                    this.pageSize = 2;
                    this.skip = 0;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this._showDefaultPagerTemplate = true;
                    this.heightToolbar = 140;
                    this.showGrid = false;
                    this.showPrintExport = false;
                    this.groups = [{ field: 'NhaCungCap', aggregates: this.aggregates }];
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.baoCaoSearch = new _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_model__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTinhHinhNhapNCCChiTietSearch"]();
                    this.inBaoCaoTinhHinhTraNCC = new _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_model__WEBPACK_IMPORTED_MODULE_6__["InBaoCaoTinhHinhNhapNCCChiTiet"]();
                }
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].BaoCaoTinhHinhNhapNCCChiTiet;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoTinhHinhTraNCC.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoTinhHinhTraNCC.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 100 },
                        { Field: "MaThuoc", Title: "Mã thuốc", Width: 100 },
                        { Field: "TenThuoc", Title: "Tên thuốc, Hàm lượng (Hãng, Nước sản xuất)", Width: 300 },
                        { Field: "HoatChat", Title: "Hoạt chất", Width: 100 },
                        { Field: "DVT", Title: "ĐVT", Width: 100 },
                        { Field: "HangSX", Title: "Hãng SX", Width: 100 },
                        { Field: "SoLo", Title: "Số lô", Width: 100 },
                        { Field: "HanDungStr", Title: "Hạn dùng", Width: 100 },
                        { Field: "DonGia", Title: "Đơn giá", Width: 100, Template: this.donGiaTemplate },
                        { Field: "SoLuong", Title: "Số lượng", Width: 100, TemplateFooter: this.tongCongTemplateFooter },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Template: this.thanhTienTemplate, TemplateGroupHeaderColumn: this.thanhTienGroupHeaderColumnTemplate, TemplateFooter: this.thanhTienTemplateFooter },
                        { Field: "NhaCungCap", Title: "Nhà Cung Cấp", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhaccGroupHeaderTemplate },
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
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.totalThanhTien = function () {
                    if (this.gridDataSource.data != undefined) {
                        return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    }
                };
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.reFresh = function () {
                    this.skip = 0;
                    this.XemBaoCao();
                };
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    this.XemBaoCao();
                    // this.XemBaoCao();
                    // if (this.gridDataSource.data.length == 0 ) {
                    //   this.XemBaoCao();
                    // } else {
                    //   var takeTo = +this.skip + +this.pageSize;
                    //   let gridData = this.gridDataSource.data.slice(this.skip, takeTo);
                    //   this.gridView = process(gridData, { group: this.groups });
                    //   this.gridView.total= this.gridDataSource.total;
                    //   // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
                    // }
                };
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.apiService.post("BaoCao/GetDataBaoCaoTinhHinhNhapNCCChiTietForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
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
                BaoCaoTinhHinhNhapNccChiTietListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (!this.baoCaoSearch.KhoId) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_8__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoTinhHinhNhapNCCChiTiet", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoTinhHinhNhapNCCChiTiet" + dateTimeNow.getFullYear() + ".xlsx");
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
                return BaoCaoTinhHinhNhapNccChiTietListComponent;
            }());
            BaoCaoTinhHinhNhapNccChiTietListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("donGiaTemplate", { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplate", { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhaccGroupHeaderTemplate", { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "nhaccGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("tongCongTemplateFooter", { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "tongCongTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTemplateFooter", { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "thanhTienTemplateFooter", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent.prototype, "thanhTienGroupHeaderColumnTemplate", void 0);
            BaoCaoTinhHinhNhapNccChiTietListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.scss")).default]
                })
            ], BaoCaoTinhHinhNhapNccChiTietListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-routing.module.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-routing.module.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapNccChiTietRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapNccChiTietRoutingModule", function () { return BaoCaoTinhHinhNhapNccChiTietRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTinhHinhNhapNccChiTietListComponent"],
                    data: {
                        title: 'Báo cáo tình hình nhập nhà cung cấp chi tiết',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTinhHinhNhapNCCChiTiet,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTinhHinhNhapNccChiTietRoutingModule = /** @class */ (function () {
                function BaoCaoTinhHinhNhapNccChiTietRoutingModule() {
                }
                return BaoCaoTinhHinhNhapNccChiTietRoutingModule;
            }());
            BaoCaoTinhHinhNhapNccChiTietRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTinhHinhNhapNccChiTietRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet.model.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet.model.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapNCCChiTietSearch, InBaoCaoTinhHinhNhapNCCChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapNCCChiTietSearch", function () { return BaoCaoTinhHinhNhapNCCChiTietSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoTinhHinhNhapNCCChiTiet", function () { return InBaoCaoTinhHinhNhapNCCChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoTinhHinhNhapNCCChiTietSearch = /** @class */ (function () {
                function BaoCaoTinhHinhNhapNCCChiTietSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
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
                return BaoCaoTinhHinhNhapNCCChiTietSearch;
            }());
            var InBaoCaoTinhHinhNhapNCCChiTiet = /** @class */ (function () {
                function InBaoCaoTinhHinhNhapNCCChiTiet(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoTinhHinhNhapNCCChiTiet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet.module.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet.module.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: BaoCaoTinhHinhNhapNccChiTietModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhNhapNccChiTietModule", function () { return BaoCaoTinhHinhNhapNccChiTietModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-nhap-ncc-chi-tiet-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-nhap-ncc-chi-tiet/bao-cao-tinh-hinh-nhap-ncc-chi-tiet-routing.module.ts");
            var BaoCaoTinhHinhNhapNccChiTietModule = /** @class */ (function () {
                function BaoCaoTinhHinhNhapNccChiTietModule() {
                }
                return BaoCaoTinhHinhNhapNccChiTietModule;
            }());
            BaoCaoTinhHinhNhapNccChiTietModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_bao_cao_tinh_hinh_nhap_ncc_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoTinhHinhNhapNccChiTietListComponent"]],
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
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__["GridModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                        _bao_cao_tinh_hinh_nhap_ncc_chi_tiet_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoTinhHinhNhapNccChiTietRoutingModule"]
                    ]
                })
            ], BaoCaoTinhHinhNhapNccChiTietModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-bao-cao-tinh-hinh-nhap-ncc-chi-tiet-module-es5.js.map