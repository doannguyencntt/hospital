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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-so-chi-tiet-vat-tu-hang-hoa-bao-cao-so-chi-tiet-vat-tu-hang-hoa-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.html": 
        /*!*****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.html ***!
          \*****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                    {Title:'Sổ Chi Tiết Vật Tư Hàng Hóa', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\"\n                    url=\"BaoCao/GetKhoHangHoa\" [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\"\n                    (selectionChange)=\"KhoChange($event)\">\n                </app-combobox>\n\n                <app-combobox id=\"duocPhamHoacVatTuBenhVienId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\"\n                    class=\"mt-1 on-header pb-0 mr-1\" label=\"Dược Phẩm và Vật Tư\" bind=\"true\"\n                    url=\"BaoCao/GetKhoDuocPhamVatTuTheoKhoHangHoa\"\n                    (selectionChange)=\"DuocPhamHoacVatTuBenhVienChange($event)\"\n                    [(model)]=\"baoCaoSearch.DuocPhamHoacVatTuBenhVienId\" [autoSelectFirstItem]=\"true\"\n                    [queryInfo]=\"{ParameterDependencies:'{KhoId:' + baoCaoSearch.KhoId + '}', Take: 50}\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"35%\" fxFlex.sm=\"35%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                    <!-- <button [disabled]=\"!IsData\" type=\"button\" color=\"primary\" mat-raised-button mat-button\n                        class=\"mr-1 mt-2\" (click)=\"InBaoCao()\" style=\"float: right;\">In Báo cáo</button> -->\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid1 grid-bao-cao\" [pageable]=\"true\" [resizable]=\"true\"\n                        [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\"\n                        id=\"baoCaoGrid\" #baoCaoGrid [group]=\"groups\">\n                        <kendo-grid-column hidden=\"true\" field=\"GroupNgayXuatNhap\" width=\"0\">\n                            <ng-template kendoGridGroupHeaderTemplate let-group=\"group\" let-aggregates=\"aggregates\">\n                                <span title=\"\">\n                                    Tổng cộng tháng: {{group.value.slice(0,2)}}\n                                </span>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                {{rowIndex + 1}}\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                            width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.NgayXuatNhapStr}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Chừng Từ\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(2)}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                                width=\"{{getWidthColumn(3)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.SoChungTu}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                                width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.NgayChungTuStr }}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                            width=\"{{getWidthColumn(5)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.DienGiai}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                            width=\"{{getWidthColumn(6)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.DonGia | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Nhập\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(7)}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                                width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.SoLuongNhap}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                    <span>{{aggregates.SoLuongNhap.sum}}</span>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                                width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.ThanhTienNhap | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                    <span>{{aggregates.ThanhTienNhap.sum | number:'0.2-2':'vi-VN'}}</span>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column-group title=\"Xuat\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(10)}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                                width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.SoLuongXuat}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                    <span>{{aggregates.SoLuongXuat.sum}}</span>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                                width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.ThanhTienXuat  | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                    <span>{{aggregates.ThanhTienXuat.sum | number:'0.2-2':'vi-VN'}}</span>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column-group title=\"Tồn\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(13)}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                                width=\"{{getWidthColumn(14)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.SoLuongTon}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\"\n                                    let-group=\"group\">\n                                    <span> {{ soLuongTonCuoiCung(group)}}</span>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                                width=\"{{getWidthColumn(15)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div> {{ dataItem.ThanhTienTon  | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\" let-group=\"group\">\n                                    <span>{{soLuongTonThanhTien(group) | number:'0.2-2':'vi-VN'}}</span>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"XemBaoCao()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.scss": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.scss ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby1jaGktdGlldC12YXQtdHUtaGFuZy1ob2EvYmFvLWNhby1zby1jaGktdGlldC12YXQtdHUtaGFuZy1ob2EtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tc28tY2hpLXRpZXQtdmF0LXR1LWhhbmctaG9hXFxiYW8tY2FvLXNvLWNoaS10aWV0LXZhdC10dS1oYW5nLWhvYS1saXN0XFxiYW8tY2FvLXNvLWNoaS10aWV0LXZhdC10dS1oYW5nLWhvYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXNvLWNoaS10aWV0LXZhdC10dS1oYW5nLWhvYS9iYW8tY2FvLXNvLWNoaS10aWV0LXZhdC10dS1oYW5nLWhvYS1saXN0L2Jhby1jYW8tc28tY2hpLXRpZXQtdmF0LXR1LWhhbmctaG9hLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby1jaGktdGlldC12YXQtdHUtaGFuZy1ob2EvYmFvLWNhby1zby1jaGktdGlldC12YXQtdHUtaGFuZy1ob2EtbGlzdC9iYW8tY2FvLXNvLWNoaS10aWV0LXZhdC10dS1oYW5nLWhvYS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.ts": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.ts ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoChiTietVatTuHangHoaListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoChiTietVatTuHangHoaListComponent", function () { return BaoCaoSoChiTietVatTuHangHoaListComponent; });
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
            /* harmony import */ var _bao_cao_so_chi_tiet_vat_tu_hang_hoa_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../bao-cao-so-chi-tiet-vat-tu-hang-hoa.model */ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.model.ts");
            var BaoCaoSoChiTietVatTuHangHoaListComponent = /** @class */ (function () {
                function BaoCaoSoChiTietVatTuHangHoaListComponent(apiService, dialog, authService, notificationService) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.baoCaoSearch = new _bao_cao_so_chi_tiet_vat_tu_hang_hoa_model__WEBPACK_IMPORTED_MODULE_13__["BaoCaoSoChiTietVatTuHangHoaSearch"]();
                    this.inBaoCaoXuatNhapTon = new _bao_cao_so_chi_tiet_vat_tu_hang_hoa_model__WEBPACK_IMPORTED_MODULE_13__["InBaoCaoSoChiTietVatTuHangHoa"]();
                    this.dataChiTietVatTuHangHoa = [];
                    this.groups = [{
                            field: 'GroupNgayXuatNhap', dir: null, aggregates: [
                                { field: 'SoLuongNhap', aggregate: 'sum' },
                                { field: 'ThanhTienNhap', aggregate: 'sum' },
                                { field: 'SoLuongXuat', aggregate: 'sum' },
                                { field: 'ThanhTienXuat', aggregate: 'sum' },
                                { field: 'SoLuongTon', aggregate: 'sum' },
                                { field: 'ThanhTienTon', aggregate: 'sum' }
                            ]
                        }];
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.IsData = false;
                    this.pageSize = 50;
                    this.skip = 0;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                }
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoSoChiTietVatTuHangHoa;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 70, Template: this.sttTemplate },
                        { Field: "NgayXuatNhapStr", Title: "Ngày", Width: 200, },
                        { Field: "ChungTu", Title: "Chứng từ", Width: 120, },
                        { Field: "SoChungTu", Title: "Số hiệu", Width: 120, },
                        { Field: "NgayChungTuStr", Title: "Ngày chứng từ", Width: 200, },
                        { Field: "DienGiai", Title: "Diễn giải", Width: 250, },
                        { Field: "DonGia", Title: "Đơn giá", Width: 120 },
                        { Field: "Nhap", Title: "Nhập", Width: 250 },
                        { Field: "SoLuongNhap", Title: "Số lượng", Width: 100 },
                        { Field: "ThanhTienNhap", Title: "Thành tiền", Width: 150 },
                        { Field: "Xuat", Title: "Xuất", Width: 250 },
                        { Field: "SoLuongXuat", Title: "Số lượng", Width: 100 },
                        { Field: "ThanhTienXuat", Title: "Thành tiền", Width: 150 },
                        { Field: "Ton", Title: "Tồn", Width: 250 },
                        { Field: "SoLuongTon", Title: "Số lượng", Width: 100 },
                        { Field: "ThanhTienTon", Title: "Thành tiền", Width: 150 },
                        {
                            Field: "GroupNgayXuatNhap", Title: "Ngày Xuất Nhập",
                            Width: 150,
                            Sortable: true,
                            Hidden: true,
                            HideFilter: true,
                        },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                    }
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.KhoChange = function (event) {
                    this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId = null;
                    this.baoCaoSearch.LoaiDuocPhamHoacVatTu = null;
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.DuocPhamHoacVatTuBenhVienChange = function (event) {
                    if (event != undefined && event != null) {
                        this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId = event.DuocPhamHoacVatTuBenhVienId;
                        this.baoCaoSearch.LoaiDuocPhamHoacVatTu = event.LoaiDuocPhamHoacVatTu;
                    }
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.baoCaoSearch.KhoId == null) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        return;
                    }
                    if (!this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId) {
                        this.notificationService.showError("Dược phẩm và vật tư yêu cầu nhập");
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
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay + ";" + this.inBaoCaoXuatNhapTon.HostingName;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoBangTheKhoSoChiTietVatTuHangHoa", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoSoChiTietVatTuHangHoa" + dateTimeNow.getFullYear() + ".xlsx");
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
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.pageChange = function (event) {
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
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
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
                    if (this.baoCaoSearch.KhoId == null) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    if (!this.baoCaoSearch.DuocPhamHoacVatTuBenhVienId) {
                        this.notificationService.showError("Dược phẩm và vật tư yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                    this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.baoCaoSearch.AdditionalSearchString = tuNgay + ";" + denNgay;
                    this.apiService.post("BaoCao/GetDataBaoCaoSoChiTietVatTuHangHoaForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.IsData = true;
                            _this.dataChiTietVatTuHangHoa = resultData.Data;
                            _this.dataChiTietVatTuHangHoa.forEach(function (element) {
                                var dateTime = new Date(element.NgayXuatNhap);
                                var month = dateTime.getMonth() + 1;
                                var monthstr = month < 10 ? '0' + month : month;
                                var year = dateTime.getFullYear();
                                element.GroupNgayXuatNhap = (monthstr + "/" + year).toString();
                            });
                            _this.dataSource = {
                                data: _this.dataChiTietVatTuHangHoa,
                                total: resultData.TotalRowCount
                            };
                            var takeTo = +_this.skip + +_this.pageSize;
                            var gridData = _this.dataSource.data.slice(_this.skip, takeTo);
                            _this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_12__["process"])(gridData, { group: _this.groups });
                            _this.gridView.total = _this.dataSource.total;
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                    });
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.soLuongTonCuoiCung = function (dataItem) {
                    return dataItem.items.length > 0 ? dataItem.items[dataItem.items.length - 1].SoLuongTon : 0;
                };
                BaoCaoSoChiTietVatTuHangHoaListComponent.prototype.soLuongTonThanhTien = function (dataItem) {
                    return dataItem.items.length > 0 ? dataItem.items[dataItem.items.length - 1].ThanhTienTon : 0;
                };
                return BaoCaoSoChiTietVatTuHangHoaListComponent;
            }());
            BaoCaoSoChiTietVatTuHangHoaListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoSoChiTietVatTuHangHoaListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('baoCaoGrid', { static: true })
            ], BaoCaoSoChiTietVatTuHangHoaListComponent.prototype, "baoCaoGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoSoChiTietVatTuHangHoaListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('ngayXuatNhapTemplate', { static: true })
            ], BaoCaoSoChiTietVatTuHangHoaListComponent.prototype, "ngayXuatNhapTemplate", void 0);
            BaoCaoSoChiTietVatTuHangHoaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-so-chi-tiet-vat-tu-hang-hoa-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.scss")).default]
                })
            ], BaoCaoSoChiTietVatTuHangHoaListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-routing.module.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-routing.module.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: BaoCaoSoChiTietVatTuHangHoaRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoChiTietVatTuHangHoaRoutingModule", function () { return BaoCaoSoChiTietVatTuHangHoaRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component */ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoSoChiTietVatTuHangHoaListComponent"],
                    data: {
                        title: 'Báo cáo sổ chí tiết vật tư hàng hóa',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoSoChiTietVatTuHangHoa,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoSoChiTietVatTuHangHoaRoutingModule = /** @class */ (function () {
                function BaoCaoSoChiTietVatTuHangHoaRoutingModule() {
                }
                return BaoCaoSoChiTietVatTuHangHoaRoutingModule;
            }());
            BaoCaoSoChiTietVatTuHangHoaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoSoChiTietVatTuHangHoaRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.model.ts": 
        /*!***********************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.model.ts ***!
          \***********************************************************************************************************************/
        /*! exports provided: BaoCaoSoChiTietVatTuHangHoaSearch, SoChiTietVatTuHangHoa, InBaoCaoSoChiTietVatTuHangHoa, DataChiTietVatTuHangHoa */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoChiTietVatTuHangHoaSearch", function () { return BaoCaoSoChiTietVatTuHangHoaSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoChiTietVatTuHangHoa", function () { return SoChiTietVatTuHangHoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoSoChiTietVatTuHangHoa", function () { return InBaoCaoSoChiTietVatTuHangHoa; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataChiTietVatTuHangHoa", function () { return DataChiTietVatTuHangHoa; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoSoChiTietVatTuHangHoaSearch = /** @class */ (function () {
                function BaoCaoSoChiTietVatTuHangHoaSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoId, DuocPhamHoacVatTuBenhVienId, LoaiDuocPhamHoacVatTu, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoId === void 0) { KhoId = 0; }
                    if (DuocPhamHoacVatTuBenhVienId === void 0) { DuocPhamHoacVatTuBenhVienId = 0; }
                    if (LoaiDuocPhamHoacVatTu === void 0) { LoaiDuocPhamHoacVatTu = 0; }
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
                    this.DuocPhamHoacVatTuBenhVienId = DuocPhamHoacVatTuBenhVienId;
                    this.LoaiDuocPhamHoacVatTu = LoaiDuocPhamHoacVatTu;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoSoChiTietVatTuHangHoaSearch;
            }());
            var SoChiTietVatTuHangHoa = /** @class */ (function () {
                function SoChiTietVatTuHangHoa(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return SoChiTietVatTuHangHoa;
            }());
            var InBaoCaoSoChiTietVatTuHangHoa = /** @class */ (function () {
                function InBaoCaoSoChiTietVatTuHangHoa(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoSoChiTietVatTuHangHoa;
            }());
            var DataChiTietVatTuHangHoa = /** @class */ (function () {
                function DataChiTietVatTuHangHoa(GroupNgayXuatNhap, NgayXuatNhap, NgayXuatNhapStr, SoChungTu, NgayChungTu, NgayChungTuStr, DienGiai, DonGia, SoLuongNhap, ThanhTienNhap, SoLuongXuat, ThanhTienXuat, SoLuongTon, ThanhTienTon) {
                    if (GroupNgayXuatNhap === void 0) { GroupNgayXuatNhap = null; }
                    if (NgayXuatNhap === void 0) { NgayXuatNhap = null; }
                    if (NgayXuatNhapStr === void 0) { NgayXuatNhapStr = null; }
                    if (SoChungTu === void 0) { SoChungTu = null; }
                    if (NgayChungTu === void 0) { NgayChungTu = null; }
                    if (NgayChungTuStr === void 0) { NgayChungTuStr = null; }
                    if (DienGiai === void 0) { DienGiai = null; }
                    if (DonGia === void 0) { DonGia = 0; }
                    if (SoLuongNhap === void 0) { SoLuongNhap = 0; }
                    if (ThanhTienNhap === void 0) { ThanhTienNhap = 0; }
                    if (SoLuongXuat === void 0) { SoLuongXuat = 0; }
                    if (ThanhTienXuat === void 0) { ThanhTienXuat = 0; }
                    if (SoLuongTon === void 0) { SoLuongTon = 0; }
                    if (ThanhTienTon === void 0) { ThanhTienTon = 0; }
                    this.GroupNgayXuatNhap = GroupNgayXuatNhap;
                    this.NgayXuatNhap = NgayXuatNhap;
                    this.NgayXuatNhapStr = NgayXuatNhapStr;
                    this.SoChungTu = SoChungTu;
                    this.NgayChungTu = NgayChungTu;
                    this.NgayChungTuStr = NgayChungTuStr;
                    this.DienGiai = DienGiai;
                    this.DonGia = DonGia;
                    this.SoLuongNhap = SoLuongNhap;
                    this.ThanhTienNhap = ThanhTienNhap;
                    this.SoLuongXuat = SoLuongXuat;
                    this.ThanhTienXuat = ThanhTienXuat;
                    this.SoLuongTon = SoLuongTon;
                    this.ThanhTienTon = ThanhTienTon;
                }
                return DataChiTietVatTuHangHoa;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.module.ts": 
        /*!************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.module.ts ***!
          \************************************************************************************************************************/
        /*! exports provided: BaoCaoSoChiTietVatTuHangHoaModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoChiTietVatTuHangHoaModule", function () { return BaoCaoSoChiTietVatTuHangHoaModule; });
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
            /* harmony import */ var _bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component */ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list/bao-cao-so-chi-tiet-vat-tu-hang-hoa-list.component.ts");
            /* harmony import */ var _bao_cao_so_chi_tiet_vat_tu_hang_hoa_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-so-chi-tiet-vat-tu-hang-hoa-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa-routing.module.ts");
            /* harmony import */ var _bao_cao_so_chi_tiet_vat_tu_hang_hoa_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-so-chi-tiet-vat-tu-hang-hoa.service */ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.service.ts");
            var BaoCaoSoChiTietVatTuHangHoaModule = /** @class */ (function () {
                function BaoCaoSoChiTietVatTuHangHoaModule() {
                }
                return BaoCaoSoChiTietVatTuHangHoaModule;
            }());
            BaoCaoSoChiTietVatTuHangHoaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_bao_cao_so_chi_tiet_vat_tu_hang_hoa_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoSoChiTietVatTuHangHoaListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_so_chi_tiet_vat_tu_hang_hoa_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoSoChiTietVatTuHangHoaRoutingModule"],
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
                        _bao_cao_so_chi_tiet_vat_tu_hang_hoa_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoSoChiTietVatTuHangHoaService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_so_chi_tiet_vat_tu_hang_hoa_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoSoChiTietVatTuHangHoaService"] },
                    ]
                })
            ], BaoCaoSoChiTietVatTuHangHoaModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.service.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-chi-tiet-vat-tu-hang-hoa/bao-cao-so-chi-tiet-vat-tu-hang-hoa.service.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: BaoCaoSoChiTietVatTuHangHoaService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoChiTietVatTuHangHoaService", function () { return BaoCaoSoChiTietVatTuHangHoaService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoSoChiTietVatTuHangHoaService = /** @class */ (function (_super) {
                __extends(BaoCaoSoChiTietVatTuHangHoaService, _super);
                function BaoCaoSoChiTietVatTuHangHoaService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoSoChiTietVatTuHangHoaService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoSoChiTietVatTuHangHoaService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoSoChiTietVatTuHangHoaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoSoChiTietVatTuHangHoaService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-so-chi-tiet-vat-tu-hang-hoa-bao-cao-so-chi-tiet-vat-tu-hang-hoa-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-so-chi-tiet-vat-tu-hang-hoa-bao-cao-so-chi-tiet-vat-tu-hang-hoa-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-so-chi-tiet-vat-tu-hang-hoa-bao-cao-so-chi-tiet-vat-tu-hang-hoa-module-es5.js.map