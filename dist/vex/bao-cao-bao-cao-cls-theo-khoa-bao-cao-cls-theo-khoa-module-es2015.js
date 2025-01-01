(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-cls-theo-khoa-bao-cao-cls-theo-khoa-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'CLS', Path:''},\n                    {Title:'Hoạt Động CLS Theo Khoa', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [height]=\"height\" [resizable]=\"true\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid\n                [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n\n                    <div class=\"bg-app-bar px-6 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n                        <!-- <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"300px\"\n                            fxFlex.sm=\"auto\" [(model)]=\"baoCaoClsTheoKhoa.RangeFromDate\"\n                            label=\"Ngày thực hiện từ ngày - đến ngày\" (modelChange)=\"changeNgayBatDauRange()\"\n                            class=\"mt-1 on-header mr-1\">\n                        </app-daterangepicker> -->\n\n\n\n                        <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat\"\n                            #tiepnhantu id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"245px\" [(model)]=\"baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat\"\n                            #tiepnhanden id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-combobox id=\"khoaphong\" fxFlex=\"15%\" fxFlex.sm=\"25%\" [(model)]=\"baoCaoClsTheoKhoa.KhoaId\"\n                            label=\"Khoa\" url=\"BaoCaoThucHienCls/KhoaPhongs\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\">\n                        </app-combobox>\n                        <!-- <app-combobox fxFlex=\"15%\" fxFlex.sm=\"14%\" id=\"NguoiNhapId\" label=\"Bác sĩ kết luận\"\n                            class=\"mt-1 on-header pb-0 mr-1\" url=\"NhanVien/GetListLookupNhanVien\" popupSettings=\"\"\n                            [(model)]=\"baoCaoClsTheoKhoa.BacSiKetLuanId\">\n                        </app-combobox> -->\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XuatBaoCao()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n\n\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                    width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>Tổng cộng:</span>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                    width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\" let-value=\"value\"\n                        let-aggregates=\"aggregates\">\n                        <ng-container\n                            *ngTemplateOutlet=\"soLanGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #soLanGroupHeaderColumnTemplate let-value=\"value\" let-dataItem\n                        let-aggregates=\"aggregates\">\n                        <strong>{{getSoLanSum(aggregates.SoLan)}}</strong>\n                    </ng-template>\n                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                        <span>{{totalSoLan()}}</span>\n                    </ng-template>\n\n                </kendo-grid-column>\n\n                <!-- <kendo-grid-column-group title=\"{{getTitleColumn(3)}}\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(3)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                        width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.DonGiaNiemYet | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                        width=\"{{getWidthColumn(5)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.DonGiaSauChietKhau | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                    </kendo-grid-column>\n                </kendo-grid-column-group> -->\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div> {{ dataItem.DonGiaNiemYet | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"{{getTitleColumn(4)}}\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">{{getTitleColumn(4)}}</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                        width=\"{{getWidthColumn(5)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.TongThanhTienNiemYet | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTienNiemYet() | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                        width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div> {{ dataItem.TongThanhTienThucThu | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template>\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTienThucThu() | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                    </kendo-grid-column>\n                </kendo-grid-column-group>\n\n                <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                    width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"\n                        let-aggregates=\"aggregates\">\n                        <ng-container\n                            *ngTemplateOutlet=\"nhomGroupHeaderTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template>\n\n                </kendo-grid-column>\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"reFresh()\">\n                        </div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n\n            </kendo-grid>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1jbHMtdGhlby1raG9hL2Jhby1jYW8tY2xzLXRoZW8ta2hvYS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1jbHMtdGhlby1raG9hXFxiYW8tY2FvLWNscy10aGVvLWtob2EtbGlzdFxcYmFvLWNhby1jbHMtdGhlby1raG9hLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tY2xzLXRoZW8ta2hvYS9iYW8tY2FvLWNscy10aGVvLWtob2EtbGlzdC9iYW8tY2FvLWNscy10aGVvLWtob2EtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWNscy10aGVvLWtob2EvYmFvLWNhby1jbHMtdGhlby1raG9hLWxpc3QvYmFvLWNhby1jbHMtdGhlby1raG9hLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0aCwgLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: BaoCaoClsTheoKhoaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsTheoKhoaListComponent", function() { return BaoCaoClsTheoKhoaListComponent; });
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
/* harmony import */ var _bao_cao_cls_theo_khoa_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-cls-theo-khoa.model */ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");














let BaoCaoClsTheoKhoaListComponent = class BaoCaoClsTheoKhoaListComponent {
    constructor(apiService, dialog, notificationService, authService, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.baoCaoClsTheoKhoa = new _bao_cao_cls_theo_khoa_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoClsTheoKhoaBacSi"]();
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.skip = 0;
        this.pageSize = 50;
        this.showDefaultPagerTemplate = true;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.ishowView = false;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
        this.aggregates = [
            { field: 'SoLan', aggregate: 'sum' },
        ];
        this.groups = [{
                field: 'Nhom',
                aggregates: this.aggregates
            }];
        this.heightToolbar = 140;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoHoatDongClsTheoKhoa;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 200 },
            { Field: "Ten", Title: "Các dịch vụ", Width: 150 },
            { Field: "SoLan", Title: "Số lượng", Width: 100, TemplateGroupHeaderColumn: this.soLanGroupHeaderColumnTemplate },
            // { Field: "DonGia", Title: "Đơn giá", Width: 200 },//3
            { Field: "DonGiaNiemYet", Title: " Đơn giá Niêm Yết", Width: 100 },
            // { Field: "DonGiaSauChietKhau", Title: "Thực Thu", Width: 100 },//5 
            { Field: "ThanhTien", Title: "Thành Tiền", Width: 200 },
            { Field: "TongThanhTienNiemYet", Title: "Niêm Yết", Width: 100 },
            { Field: "TongThanhTienThucThu", Title: "Thực Thu", Width: 100 },
            { Field: "Nhom", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
        ];
        let dateNow = new Date();
        // this.baoCaoClsTheoKhoa.RangeFromDate.startDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        // this.baoCaoClsTheoKhoa.RangeFromDate.endDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), 23, 59, 59, 59);
        if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat != null) {
            this.baoCaoClsTheoKhoa.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsTheoKhoa.FromDate = null;
        }
        if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat != null) {
            this.baoCaoClsTheoKhoa.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsTheoKhoa.ToDate = null;
        }
    }
    columnResize(event) {
        //khi resize column parent thì column child cũng resize theo
        if (event != null && event.length > 0) {
            event.forEach(element => {
                var columnIndex = this.gridColumns.findIndex(x => x.Field === element.column.field);
                if (columnIndex >= 0) {
                    this.gridColumns[columnIndex].Width = element.newWidth;
                    if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
                        jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
                    }
                }
            });
        }
    }
    getSoLanSum(value) {
        if (value) {
            return value.sum;
        }
    }
    totalSoLan() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.SoLan, 0);
        }
    }
    totalThanhTienNiemYet() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.TongThanhTienNiemYet, 0);
        }
    }
    totalThanhTienThucThu() {
        if (this.gridDataSource.data != undefined) {
            return this.gridDataSource.data.reduce((sum, item) => sum + item.TongThanhTienThucThu, 0);
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
        var widthParent = jQuery("#baoCaoThongKeDonThuocGrid").parent().width();
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
    ngAfterContentInit() {
        var self = this;
        self.height = jQuery(window).height() - 180;
        if (self.height < 400)
            self.height = 400;
        jQuery(window).resize(function () {
            self.height = jQuery(window).height() - 180;
            if (self.height < 400)
                self.height = 400;
        });
    }
    changeNgayBatDauRange() {
    }
    searchRefresh() {
    }
    pageChange(event) {
        this.skip = event.skip;
        // this.XemBaoCao();
        if (this.gridDataSource.data.length == 0) {
            this.XemBaoCao();
        }
        else {
            var takeTo = +this.skip + +this.pageSize;
            let gridData = this.gridDataSource.data.slice(this.skip, takeTo);
            this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: this.groups });
            this.gridView.total = this.gridDataSource.total;
            // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
        }
    }
    XemBaoCao() {
        // if (this.baoCaoClsTheoKhoa.RangeFromDate.startDate == null || this.baoCaoClsTheoKhoa.RangeFromDate.endDate == null) {
        //   this.notificationService.showError("Ngày thực hiện từ ngày và đến ngày yêu cầu nhập");
        //   return;
        // }
        if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat != null) {
            this.baoCaoClsTheoKhoa.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsTheoKhoa.FromDate = null;
        }
        if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat != null) {
            this.baoCaoClsTheoKhoa.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
        }
        else {
            this.baoCaoClsTheoKhoa.ToDate = null;
        }
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        this.apiService.post("BaoCaoThucHienCls/GetDataForGridAsyncHoatDongCLS", this.baoCaoClsTheoKhoa).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData !== undefined && resultData != null) {
                    this.showPrintExport = true;
                    this.gridDataSource = {
                        data: resultData.Data,
                        total: resultData.TotalRowCount
                    };
                    var takeTo = +this.skip + +this.pageSize;
                    let gridData = this.gridDataSource.data.slice(this.skip, takeTo);
                    this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: this.groups });
                    this.gridView.total = this.gridDataSource.total;
                    this._isLoadingTotalPage = false;
                    // this.gridView.data.forEach((item, idx) => {
                    //   this.baoCaoThongHoatDongCLSKhoaGrid.collapseRow(idx);
                    // })
                    this._isLoading = false;
                }
            }
        });
    }
    reFresh() {
        this.skip = 0;
        this.XemBaoCao();
    }
    XuatBaoCao() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat != null) {
                this.baoCaoClsTheoKhoa.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanTuFormat, "dd/mm/yyyy");
            }
            else {
                this.baoCaoClsTheoKhoa.FromDate = null;
            }
            if (this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat != null) {
                this.baoCaoClsTheoKhoa.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoClsTheoKhoa.ThoiDiemTiepNhanDenFormat, "dd/mm/yyyy");
            }
            else {
                this.baoCaoClsTheoKhoa.ToDate = null;
            }
            self.apiService.postExportExcel('BaoCaoThucHienCls/ExportBaoCaoHoatDongClsTheoKhoa', this.baoCaoClsTheoKhoa).subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoThucHienCls' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoClsTheoKhoaListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoThongHoatDongCLSKhoaGrid', { static: true })
], BaoCaoClsTheoKhoaListComponent.prototype, "baoCaoThongHoatDongCLSKhoaGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("soLanGroupHeaderColumnTemplate", { static: true })
], BaoCaoClsTheoKhoaListComponent.prototype, "soLanGroupHeaderColumnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
], BaoCaoClsTheoKhoaListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaoCaoClsTheoKhoaListComponent.prototype, "heightToolbar", void 0);
BaoCaoClsTheoKhoaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-cls-theo-khoa-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-cls-theo-khoa-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-cls-theo-khoa-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.scss")).default]
    })
], BaoCaoClsTheoKhoaListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: BaoCaoClsTheoKhoaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsTheoKhoaRoutingModule", function() { return BaoCaoClsTheoKhoaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_cls_theo_khoa_list_bao_cao_cls_theo_khoa_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component */ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_cls_theo_khoa_list_bao_cao_cls_theo_khoa_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoClsTheoKhoaListComponent"],
        data: {
            title: 'Hoạt Động CLS Theo Khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoHoatDongClsTheoKhoa,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let BaoCaoClsTheoKhoaRoutingModule = class BaoCaoClsTheoKhoaRoutingModule {
};
BaoCaoClsTheoKhoaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoClsTheoKhoaRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.model.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.model.ts ***!
  \*******************************************************************************************/
/*! exports provided: BaoCaoClsTheoKhoaBacSi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsTheoKhoaBacSi", function() { return BaoCaoClsTheoKhoaBacSi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class BaoCaoClsTheoKhoaBacSi {
    constructor(SearchString = null, RangeFromDate = new _nhap_xuat_vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"](), KhoaId = null, BacSiKetLuanId = null, FromDate = null, ToDate = null, ThoiDiemTiepNhanTuFormat = null, ThoiDiemTiepNhanDenFormat = null) {
        this.SearchString = SearchString;
        this.RangeFromDate = RangeFromDate;
        this.KhoaId = KhoaId;
        this.BacSiKetLuanId = BacSiKetLuanId;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ThoiDiemTiepNhanTuFormat = ThoiDiemTiepNhanTuFormat;
        this.ThoiDiemTiepNhanDenFormat = ThoiDiemTiepNhanDenFormat;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.module.ts ***!
  \********************************************************************************************/
/*! exports provided: BaoCaoClsTheoKhoaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsTheoKhoaModule", function() { return BaoCaoClsTheoKhoaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bao_cao_cls_theo_khoa_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-cls-theo-khoa-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-routing.module.ts");
/* harmony import */ var _bao_cao_cls_theo_khoa_list_bao_cao_cls_theo_khoa_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component */ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa-list/bao-cao-cls-theo-khoa-list.component.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_cls_theo_khoa_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-cls-theo-khoa.service */ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.service.ts");





















let BaoCaoClsTheoKhoaModule = class BaoCaoClsTheoKhoaModule {
};
BaoCaoClsTheoKhoaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_cls_theo_khoa_list_bao_cao_cls_theo_khoa_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoClsTheoKhoaListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_cls_theo_khoa_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoClsTheoKhoaRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_15__["BreadcrumbsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"]
        ],
        providers: [
            _bao_cao_cls_theo_khoa_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoClsTheoKhoaService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"], useClass: _bao_cao_cls_theo_khoa_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoClsTheoKhoaService"] },
        ]
    })
], BaoCaoClsTheoKhoaModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-cls-theo-khoa/bao-cao-cls-theo-khoa.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: BaoCaoClsTheoKhoaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoClsTheoKhoaService", function() { return BaoCaoClsTheoKhoaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let BaoCaoClsTheoKhoaService = class BaoCaoClsTheoKhoaService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCaoThucHienCls';
    }
};
BaoCaoClsTheoKhoaService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
BaoCaoClsTheoKhoaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoClsTheoKhoaService);



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
//# sourceMappingURL=bao-cao-bao-cao-cls-theo-khoa-bao-cao-cls-theo-khoa-module-es2015.js.map