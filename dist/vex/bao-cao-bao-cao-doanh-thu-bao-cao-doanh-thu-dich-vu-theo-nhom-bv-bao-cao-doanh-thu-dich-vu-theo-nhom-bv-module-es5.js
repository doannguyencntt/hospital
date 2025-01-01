(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-doanh-thu-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-module"], {
        /***/ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js": 
        /*!***************************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-check-box.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-check-box.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path opacity=\".3\" d=\"M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z\" fill=\"currentColor\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/twotone-done.js": 
        /*!********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
          \********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.html": 
        /*!**********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.html ***!
          \**********************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Doanh Thu Theo Nhóm Dịch Vụ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker id=\"TuNgaythang\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateStart\" [maxDate]=\"search.RangeDateTimeFilter.DateEnd\"\n                    label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateEnd\" label=\"Đến ngày\" class=\"mt-1 on-header\"\n                    [minDate]=\"search.RangeDateTimeFilter.DateStart\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"0%\" fxFlex.sm=\"0%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridView\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                        [hidden]=\"ishowViewData != true\" [pageSize]=\"pageSize\" [skip]=\"skip\"\n                        (pageChange)=\"pageChange($event)\" [height]=\"auto\" class=\"k-grid1\" [group]=\"state.group\">\n\n                        <!-- <kendo-grid-column field=\"STT\" title=\"STT\" width=\"250\" [style]=\"{'text-align': 'center'}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\"></div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-dataItem let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: left;\">{{group.value}}</div>\n                            </ng-template>\n                        </kendo-grid-column> -->\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                            width=\"{{getWidthColumn(1)}}\" [ngStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                            width=\"{{getWidthColumn(2)}}\" [ngStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"font-weight: bold;color:#000;text-align: left;\">Tổng Cộng :</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                            width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                            width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                            width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                            width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'left'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                            width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                            width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                            width=\"{{getWidthColumn(9)}}\" [style]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n\n                        <kendo-grid-column-group title=\"Chi phí khám chữa bệnh phát sinh tại cơ sở KCB\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div style=\"text-align: center;\">Chi phí khám chữa bệnh phát sinh tại cơ sở KCB</div>\n                            </ng-template>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                                width=\"{{getWidthColumn(10)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TotalHoanUng -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <!-- <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalHoanUng != null\">\n                                        {{ dataItem.TotalHoanUng | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalHoanUng == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN'}}</div> -->\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.KhamBenh | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('KhamBenh')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                                width=\"{{getWidthColumn(11)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TotalSoTienThu -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.XetNghiem | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('XetNghiem')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                                width=\"{{getWidthColumn(12)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TotalHuyThu -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.NoiSoi | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('NoiSoi')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                                width=\"{{getWidthColumn(13)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.NoiSoiTMH | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('NoiSoiTMH')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                                width=\"{{getWidthColumn(14)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TotalCongNo -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.SieuAm | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('SieuAm')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                                width=\"{{getWidthColumn(15)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.XQuang | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('XQuang')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                                width=\"{{getWidthColumn(16)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.CTScan | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('CTScan')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                                width=\"{{getWidthColumn(17)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.MRI | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('MRI')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                                width=\"{{getWidthColumn(18)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.DienTimDienNao | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('DienTimDienNao')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                                width=\"{{getWidthColumn(19)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.TDCNDoLoangXuong | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('TDCNDoLoangXuong')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                                width=\"{{getWidthColumn(20)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.ThuThuat | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('ThuThuat')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                                width=\"{{getWidthColumn(21)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.PhauThuat | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('PhauThuat')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                                width=\"{{getWidthColumn(22)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.NgayGiuong | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('NgayGiuong')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(23)}}\" title=\"{{getTitleColumn(23)}}\"\n                                width=\"{{getWidthColumn(23)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.DVKhac | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('DVKhac')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(24)}}\" title=\"{{getTitleColumn(24)}}\"\n                                width=\"{{getWidthColumn(24)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.Thuoc | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('Thuoc')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                                width=\"{{getWidthColumn(25)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.VTYT | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('VTYT')| number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"{{getFieldColumn(26)}}\" title=\"{{getTitleColumn(26)}}\"\n                                width=\"{{getWidthColumn(26)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">\n                                        {{ dataItem.TongCong | number:'0.2-2':'vi-VN'}}</div>\n\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThanhTien('TongCong')|\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(27)}}\" [hidden]=\"true\">\n                            <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                                <strong>{{value}}</strong>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-messages [hidden]=\"!_isMessage\" noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\"\n                            pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv-routing.module.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv-routing.module.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule", function () { return BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_doanh_thu_dich_vu_theo_nhom_bv_bao_cao_doanh_thu_dich_vu_theo_nhom_bv_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_doanh_thu_dich_vu_theo_nhom_bv_bao_cao_doanh_thu_dich_vu_theo_nhom_bv_component__WEBPACK_IMPORTED_MODULE_5__["BaoCaoDoanhThuDichVuTheoNhomBVComponent"],
                    data: {
                        title: 'Báo cáo doanh thu dịch vụ theo nhóm bệnh viện',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDoanhThuTheoNhomDichVu,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    }
                }
            ];
            var BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule = /** @class */ (function () {
                function BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule() {
                }
                return BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule;
            }());
            BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.module.ts": 
        /*!************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.module.ts ***!
          \************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDoanhThuDichVuTheoNhomBenhVienModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuDichVuTheoNhomBenhVienModule", function () { return BaoCaoDoanhThuDichVuTheoNhomBenhVienModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_doanh_thu_dich_vu_theo_nhom_bv_bao_cao_doanh_thu_dich_vu_theo_nhom_bv_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.ts");
            /* harmony import */ var _bao_cao_doanh_thu_dich_vu_theo_nhom_bv_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-doanh-thu-dich-vu-theo-nhom-bv-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv-routing.module.ts");
            var BaoCaoDoanhThuDichVuTheoNhomBenhVienModule = /** @class */ (function () {
                function BaoCaoDoanhThuDichVuTheoNhomBenhVienModule() {
                }
                return BaoCaoDoanhThuDichVuTheoNhomBenhVienModule;
            }());
            BaoCaoDoanhThuDichVuTheoNhomBenhVienModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_doanh_thu_dich_vu_theo_nhom_bv_bao_cao_doanh_thu_dich_vu_theo_nhom_bv_component__WEBPACK_IMPORTED_MODULE_17__["BaoCaoDoanhThuDichVuTheoNhomBVComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_3__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _bao_cao_doanh_thu_dich_vu_theo_nhom_bv_routing_module__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDoanhThuDichVuTheoNhomBenhVienRoutingModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
                    ]
                })
            ], BaoCaoDoanhThuDichVuTheoNhomBenhVienModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.ts": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.ts ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: BaoCaoDoanhThuTheoNhomBenhVienSearch, SearchThuNgan, Search, NhanVienThuNgan, QuayThuNgan, DateTimeFilter, BaoCaoThuTienVienPhi, BaoCaoDoanhThuTheoNhomBenhVienQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuTheoNhomBenhVienSearch", function () { return BaoCaoDoanhThuTheoNhomBenhVienSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchThuNgan", function () { return SearchThuNgan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanVienThuNgan", function () { return NhanVienThuNgan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuNgan", function () { return QuayThuNgan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function () { return DateTimeFilter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuTienVienPhi", function () { return BaoCaoThuTienVienPhi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuTheoNhomBenhVienQueryInfo", function () { return BaoCaoDoanhThuTheoNhomBenhVienQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoDoanhThuTheoNhomBenhVienSearch = /** @class */ (function () {
                function BaoCaoDoanhThuTheoNhomBenhVienSearch(TuNgay, DenNgay, TuNgayFormat, DenNgayFormat) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.TuNgayFormat = TuNgayFormat;
                    this.DenNgayFormat = DenNgayFormat;
                }
                return BaoCaoDoanhThuTheoNhomBenhVienSearch;
            }());
            var SearchThuNgan = /** @class */ (function () {
                function SearchThuNgan(TuNgay, DenNgay, PhongBenhVienId, NhanVienId) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (PhongBenhVienId === void 0) { PhongBenhVienId = 0; }
                    if (NhanVienId === void 0) { NhanVienId = 0; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.PhongBenhVienId = PhongBenhVienId;
                    this.NhanVienId = NhanVienId;
                }
                return SearchThuNgan;
            }());
            var Search = /** @class */ (function () {
                function Search(RangeDateTimeFilter) {
                    if (RangeDateTimeFilter === void 0) { RangeDateTimeFilter = new DateTimeFilter; }
                    this.RangeDateTimeFilter = RangeDateTimeFilter;
                }
                return Search;
            }());
            var NhanVienThuNgan = /** @class */ (function () {
                function NhanVienThuNgan(KeyId, DisplayName) {
                    if (KeyId === void 0) { KeyId = 0; }
                    if (DisplayName === void 0) { DisplayName = "Tất cả nhân viên"; }
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                }
                return NhanVienThuNgan;
            }());
            var QuayThuNgan = /** @class */ (function () {
                function QuayThuNgan(KeyId, DisplayName) {
                    if (KeyId === void 0) { KeyId = 0; }
                    if (DisplayName === void 0) { DisplayName = "Tất cả các quầy"; }
                    this.KeyId = KeyId;
                    this.DisplayName = DisplayName;
                }
                return QuayThuNgan;
            }());
            var DateTimeFilter = /** @class */ (function () {
                function DateTimeFilter(DateStart, DateEnd) {
                    if (DateStart === void 0) { DateStart = null; }
                    if (DateEnd === void 0) { DateEnd = new Date; }
                    this.DateStart = DateStart;
                    this.DateEnd = DateEnd;
                }
                return DateTimeFilter;
            }());
            var BaoCaoThuTienVienPhi = /** @class */ (function () {
                function BaoCaoThuTienVienPhi(STT, Nhom, MaTN, HoVaTen, NamSinh, GioiTinh, SoBenhAn, NoiDung, NgayThu, NgayThuStr, NguoiGioiThieu, KhamBenh, XetNghiem, NoiSoi, NoiSoiTMH, SieuAm, XQuang, CTScan, MRI, DienTimDienNao, TDCNDoLoangXuong, ThuThuat, PhauThuat, NgayGiuong, DVKhac, Thuoc, VTYT) {
                    if (STT === void 0) { STT = 0; }
                    if (Nhom === void 0) { Nhom = null; }
                    if (MaTN === void 0) { MaTN = null; }
                    if (HoVaTen === void 0) { HoVaTen = null; }
                    if (NamSinh === void 0) { NamSinh = null; }
                    if (GioiTinh === void 0) { GioiTinh = null; }
                    if (SoBenhAn === void 0) { SoBenhAn = null; }
                    if (NoiDung === void 0) { NoiDung = null; }
                    if (NgayThu === void 0) { NgayThu = null; }
                    if (NgayThuStr === void 0) { NgayThuStr = null; }
                    if (NguoiGioiThieu === void 0) { NguoiGioiThieu = null; }
                    if (KhamBenh === void 0) { KhamBenh = null; }
                    if (XetNghiem === void 0) { XetNghiem = null; }
                    if (NoiSoi === void 0) { NoiSoi = null; }
                    if (NoiSoiTMH === void 0) { NoiSoiTMH = null; }
                    if (SieuAm === void 0) { SieuAm = null; }
                    if (XQuang === void 0) { XQuang = null; }
                    if (CTScan === void 0) { CTScan = null; }
                    if (MRI === void 0) { MRI = null; }
                    if (DienTimDienNao === void 0) { DienTimDienNao = null; }
                    if (TDCNDoLoangXuong === void 0) { TDCNDoLoangXuong = null; }
                    if (ThuThuat === void 0) { ThuThuat = null; }
                    if (PhauThuat === void 0) { PhauThuat = null; }
                    if (NgayGiuong === void 0) { NgayGiuong = null; }
                    if (DVKhac === void 0) { DVKhac = null; }
                    if (Thuoc === void 0) { Thuoc = null; }
                    if (VTYT === void 0) { VTYT = null; }
                    this.STT = STT;
                    this.Nhom = Nhom;
                    this.MaTN = MaTN;
                    this.HoVaTen = HoVaTen;
                    this.NamSinh = NamSinh;
                    this.GioiTinh = GioiTinh;
                    this.SoBenhAn = SoBenhAn;
                    this.NoiDung = NoiDung;
                    this.NgayThu = NgayThu;
                    this.NgayThuStr = NgayThuStr;
                    this.NguoiGioiThieu = NguoiGioiThieu;
                    this.KhamBenh = KhamBenh;
                    this.XetNghiem = XetNghiem;
                    this.NoiSoi = NoiSoi;
                    this.NoiSoiTMH = NoiSoiTMH;
                    this.SieuAm = SieuAm;
                    this.XQuang = XQuang;
                    this.CTScan = CTScan;
                    this.MRI = MRI;
                    this.DienTimDienNao = DienTimDienNao;
                    this.TDCNDoLoangXuong = TDCNDoLoangXuong;
                    this.ThuThuat = ThuThuat;
                    this.PhauThuat = PhauThuat;
                    this.NgayGiuong = NgayGiuong;
                    this.DVKhac = DVKhac;
                    this.Thuoc = Thuoc;
                    this.VTYT = VTYT;
                }
                return BaoCaoThuTienVienPhi;
            }());
            var BaoCaoDoanhThuTheoNhomBenhVienQueryInfo = /** @class */ (function () {
                function BaoCaoDoanhThuTheoNhomBenhVienQueryInfo(TuNgay, DenNgay, NhanVienId, PhongBenhVienId, Skip, Take, PageSize, SearchString, AdditionalSearchString, 
                // public searchTerms: string = "",
                Sort) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (NhanVienId === void 0) { NhanVienId = 0; }
                    if (PhongBenhVienId === void 0) { PhongBenhVienId = 0; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 10; }
                    if (PageSize === void 0) { PageSize = 10; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.NhanVienId = NhanVienId;
                    this.PhongBenhVienId = PhongBenhVienId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoDoanhThuTheoNhomBenhVienQueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.scss": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.scss ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th,\n.k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kb2FuaC10aHUvYmFvLWNhby1kb2FuaC10aHUtZGljaC12dS10aGVvLW5ob20tYnYvYmFvLWNhby1kb2FuaC10aHUtZGljaC12dS10aGVvLW5ob20tYnYvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxiYW8tY2FvXFxiYW8tY2FvLWRvYW5oLXRodVxcYmFvLWNhby1kb2FuaC10aHUtZGljaC12dS10aGVvLW5ob20tYnZcXGJhby1jYW8tZG9hbmgtdGh1LWRpY2gtdnUtdGhlby1uaG9tLWJ2XFxiYW8tY2FvLWRvYW5oLXRodS1kaWNoLXZ1LXRoZW8tbmhvbS1idi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kb2FuaC10aHUvYmFvLWNhby1kb2FuaC10aHUtZGljaC12dS10aGVvLW5ob20tYnYvYmFvLWNhby1kb2FuaC10aHUtZGljaC12dS10aGVvLW5ob20tYnYvYmFvLWNhby1kb2FuaC10aHUtZGljaC12dS10aGVvLW5ob20tYnYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9hbmgtdGh1L2Jhby1jYW8tZG9hbmgtdGh1LWRpY2gtdnUtdGhlby1uaG9tLWJ2L2Jhby1jYW8tZG9hbmgtdGh1LWRpY2gtdnUtdGhlby1uaG9tLWJ2L2Jhby1jYW8tZG9hbmgtdGh1LWRpY2gtdnUtdGhlby1uaG9tLWJ2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLFxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.ts": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.ts ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDoanhThuDichVuTheoNhomBVComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDoanhThuDichVuTheoNhomBVComponent", function () { return BaoCaoDoanhThuDichVuTheoNhomBVComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bao-cao-doanh-thu-dich-vu-theo-nhom-bv */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var BaoCaoDoanhThuDichVuTheoNhomBVComponent = /** @class */ (function () {
                //================================End value total===========================
                function BaoCaoDoanhThuDichVuTheoNhomBVComponent(apiService, dialog, notificationService, authService, cd) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.cd = cd;
                    this.search = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["Search"]();
                    this.searchThuNgan = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["SearchThuNgan"]();
                    this.showExpandReLoadPage = true;
                    this.nhanVienThuNgan = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["NhanVienThuNgan"]();
                    this.quayThuNgan = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["QuayThuNgan"]();
                    this.gridData = [];
                    this.gridDataDetail = [];
                    this.dataSource = {
                        data: [],
                        total: 0
                    };
                    this.pageSize = 50;
                    this.skip = 0;
                    this.skipDetail = 0;
                    this.jqueryString = "";
                    this.DateStart = null;
                    this.DateEnd = null;
                    this.quayThu = null;
                    this.nguoiThu = null;
                    //================================Begin value total master===========================
                    this.totalTamUng = 0;
                    this.totalHoanUng = 0;
                    this.totalSoTienThu = 0;
                    this.totalHuyThu = 0;
                    this.totalCongNo = 0;
                    this.totalTienMat = 0;
                    this.totalPos = 0;
                    this.totalChuyenKhoan = 0;
                    this.totalThuNoTienMat = 0;
                    this.totalThuNoChuyenKhoan = 0;
                    this.totalThuNoPos = 0;
                    //================================End value total===========================
                    //================================Begin value total Detail===========================
                    this.totalSoTienThuDetail = 0;
                    this.totalHuyThuDetail = 0;
                    this.totalThucThuDetail = 0;
                    this.totalCongNoDetail = 0;
                    this.totalTienMatDetail = 0;
                    this.totalChuyenKhoanDetail = 0;
                    this.totalPosDetail = 0;
                    this.totalVoucherDetail = 0;
                    this.baoCaoThuTienVienPhi = [];
                    this.items = this.baoCaoThuTienVienPhi;
                    this.expression = false;
                    this.totalKhamBenh = 0;
                    this.totalXetNghiem = 0;
                    this.totalNoiSoi = 0;
                    this.totalNoiSoiTMH = 0;
                    this.totalSieuAm = 0;
                    this.totalXQuang = 0;
                    this.totalCTScan = 0;
                    this.totalMRI = 0;
                    this.totalDienTimDienNao = 0;
                    this.totalTDCNDoLoangXuong = 0;
                    this.totalThuThuat = 0;
                    this.totalPhauThuat = 0;
                    this.totalNgayGiuong = 0;
                    this.totalDVKhac = 0;
                    this.totalThuoc = 0;
                    this.totalVTYT = 0;
                    this.baoCaoSearch = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["BaoCaoDoanhThuTheoNhomBenhVienSearch"]();
                    //================================Begin icon==========================
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default.a;
                    //================================End icon==========================
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.ishowView = false;
                    this.ishowViewData = false;
                    this._isLoading = false;
                    this._isMessage = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.heightToolbar = 140;
                    this.groupNhom = new Map();
                    //================================Begin group aggregates ===========================
                    this.aggregates = [
                        { field: 'KhamBenh', aggregate: 'sum' }
                    ];
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["BaoCaoDoanhThuTheoNhomBenhVienQueryInfo"]();
                    this.urlGetDataGridChild = "";
                    this.urlGetPageDataGridChild = "";
                    this.state = {
                        skip: 0,
                        take: 0,
                        group: [{ field: 'Nhom', aggregates: this.aggregates }]
                    };
                }
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_20__["DocumentType"].BaoCaoDoanhThuTheoNhomDichVu;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.skipDetail = 0;
                    this.take = (this.pageSize * this.skipDetail) + this.pageSize;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 100 },
                        { Field: "MaNB", Title: "Mã NB", Width: 150 },
                        { Field: "MaTN", Title: "Mã TN", Width: 150 },
                        { Field: "HoVaTen", Title: "Họ và Tên", Width: 150 },
                        { Field: "NamSinh", Title: "Năm sinh", MinWidth: 120 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 200 },
                        { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },
                        { Field: "NoiDung", Title: "Nội dung", Width: 300 },
                        { Field: "NgayThuStr", Title: "Ngày", Width: 150 },
                        { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 150 },
                        { Field: "KhamBenh", Title: "Khám bệnh", Width: 120 },
                        { Field: "XetNghiem", Title: "Xét nghiệm", Width: 120 },
                        { Field: "NoiSoi", Title: "Nội soi", Width: 120 },
                        { Field: "NoiSoiTMH", Title: "Nội soi TMH", Width: 120 },
                        { Field: "SieuAm", Title: "Siêu âm", Width: 120 },
                        { Field: "XQuang", Title: "X-Quang", Width: 120 },
                        { Field: "CTScan", Title: "CT Scan", Width: 120 },
                        { Field: "MRI", Title: "MRI", Width: 120 },
                        { Field: "DienTimDienNao", Title: "ĐiệnTim + Điện Não", Width: 170 },
                        { Field: "TDCNDoLoangXuong", Title: "TDCN + Đo loãng xương", Width: 170 },
                        { Field: "ThuThuat", Title: "Thủ thuật", Width: 120 },
                        { Field: "PhauThuat", Title: "Phẫu Thuật", Width: 120 },
                        { Field: "NgayGiuong", Title: "Ngày giường", Width: 120 },
                        { Field: "DVKhac", Title: "DV khác", Width: 180 },
                        { Field: "Thuoc", Title: "Thuốc", Width: 180 },
                        { Field: "VTYT", Title: "VTYT", Width: 120 },
                        { Field: "TongCong", Title: "Tổng cộng", Width: 120 },
                        { Field: "Nhom", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.search.RangeDateTimeFilter.DateStart = firstDayOfMonth;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.totalThanhTien = function (field) {
                    switch (field) {
                        case 'KhamBenh':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.KhamBenh; }, 0);
                            }
                        case 'XetNghiem':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.XetNghiem; }, 0);
                            }
                        case 'NoiSoi':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.NoiSoi; }, 0);
                            }
                        case 'NoiSoiTMH':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.NoiSoiTMH; }, 0);
                            }
                        case 'SieuAm':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.SieuAm; }, 0);
                            }
                        case 'XQuang':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.XQuang; }, 0);
                            }
                        case 'CTScan':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.CTScan; }, 0);
                            }
                        case 'MRI':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.MRI; }, 0);
                            }
                        case 'DienTimDienNao':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.DienTimDienNao; }, 0);
                            }
                        case 'TDCNDoLoangXuong':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.TDCNDoLoangXuong; }, 0);
                            }
                        case 'ThuThuat':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.ThuThuat; }, 0);
                            }
                        case 'PhauThuat':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.PhauThuat; }, 0);
                            }
                        case 'NgayGiuong':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.NgayGiuong; }, 0);
                            }
                        case 'DVKhac':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.DVKhac; }, 0);
                            }
                        case 'Thuoc':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.Thuoc; }, 0);
                            }
                        case 'VTYT':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.VTYT; }, 0);
                            }
                        case 'TongCong':
                            if (this.dataToSumAllThanhTien != undefined && this.dataToSumAllThanhTien != null) {
                                return this.dataToSumAllThanhTien.reduce(function (sum, item) { return sum + item.TongCong; }, 0);
                            }
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.searchRefresh = function () {
                    this.XemBaoCao();
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    // this.XemBaoCao();
                    if (this.dataSource.data.length == 0) {
                        this.XemBaoCao();
                    }
                    else {
                        var takeTo = +this.skip + +this.pageSize;
                        var gridData = this.dataSource.data.slice(this.skip, takeTo);
                        this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: this.state.group });
                        this.gridView.total = this.dataSource.total;
                        if (this.gridView.data == null)
                            this._isMessage = true; // show massage
                        if (this.gridView.total != 0) {
                            this.ishowView = true;
                        }
                        else {
                            this.ishowView = false;
                        }
                        // this.gridView.data = this.gridView.data.slice(this.skip, takeTo);
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.pageChangeDetail = function (event) {
                    if (event != null) {
                        this.skipDetail = event.skip;
                        this.XemBaoCao();
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.columnResize = function (event) {
                    var _this = this;
                    //khi resize column parent thì column child cũng resize theo
                    if (event != null && event.length > 0) {
                        event.forEach(function (element) {
                            var columnIndex = _this.gridColumns.findIndex(function (x) { return x.Field === element.column.field; });
                            if (columnIndex >= 0) {
                                _this.gridColumns[columnIndex].Width = element.newWidth;
                                if (jQuery(".k-detail-cell .k-grid-table").find("col") != undefined && jQuery(".k-detail-cell .k-grid-table").find("col").length > 0) {
                                    jQuery(jQuery(".k-detail-cell .k-grid-table").find("col")[columnIndex]).css({ width: element.newWidth });
                                }
                            }
                        });
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                //daddy total master
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getFieldColumnMaster = function (index) {
                    return this.gridColumnsMaster[index].Field;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getTitleColumnMaster = function (index) {
                    return this.gridColumnsMaster[index].Title;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getWidthColumnMaster = function (index) {
                    return this.gridColumnsMaster[index].Width != null ? this.gridColumnsMaster[index].Width : this.getMinWidthColumn(this.gridColumnsMaster[index].MinWidth != null ? this.gridColumnsMaster[index].MinWidth : 100);
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.getMinWidthColumn = function (minWidth) {
                    var widthParent = jQuery("#baoCaoChiTietDoanhthuTheoKhoaPhongGrid").parent().width();
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
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.returnDetail = function () {
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
                    var string = tuNgay + "-" + denNgay + "-" + this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.NhanVienId + "-" + this.quayThuNgan.KeyId;
                    return string;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.chonQuay = function (item) {
                    this.quayThuNgan = item;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.chonQuayChange = function (item) {
                    if (item != undefined) {
                        this.quayThuNgan.KeyId = item;
                    }
                    else {
                        this.quayThuNgan.KeyId = 0;
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.chonNhanVien = function (item) {
                    this.nhanVienThuNgan = item;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.chonNhanVienChange = function (item) {
                    if (item != undefined) {
                        this.nhanVienThuNgan.KeyId = item;
                    }
                    else {
                        this.nhanVienThuNgan.KeyId = 0;
                    }
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.groupBySTT = function (keyColumn) {
                    var valueGroup = [];
                    this.groupNhom.forEach(function (value, key) {
                        if (keyColumn == key) {
                            valueGroup = value[0];
                        }
                    });
                    return valueGroup;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.ngAfterContentInit = function () {
                    var self = this;
                    self.height = jQuery(window).height() - 180;
                    if (self.height < 400)
                        self.height = 400;
                    jQuery(window).resize(function () {
                        self.height = jQuery(window).height() - 180;
                        if (self.height < 400)
                            self.height = 400;
                    });
                    this.cd.detectChanges();
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.changeValueStart = function (event) {
                    this.minDateDenNgay = new Date();
                    this.minDateTuNgay = new Date();
                    if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null
                        && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                };
                // listNhom:any=[];
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    if (this.search.RangeDateTimeFilter.DateStart == null || this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    this._isMessage = true;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    // if (this.search.RangeDateTimeFilter.DateEnd == null) {
                    //   this.minDateTuNgay = new Date();
                    //   this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                    // }
                    if (this.search.RangeDateTimeFilter.DateStart != null) {
                        this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd != null) {
                        this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
                    }
                    this.ishowViewData = true;
                    this.quayThu = this.quayThuNgan.DisplayName;
                    this.nguoiThu = this.nhanVienThuNgan.DisplayName;
                    var searchThuNgan = new _bao_cao_doanh_thu_dich_vu_theo_nhom_bv__WEBPACK_IMPORTED_MODULE_9__["SearchThuNgan"]();
                    searchThuNgan.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    searchThuNgan.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    searchThuNgan.PhongBenhVienId = this.quayThuNgan.KeyId;
                    searchThuNgan.NhanVienId = this.nhanVienThuNgan.KeyId;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.NhanVienId = searchThuNgan.NhanVienId;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.PhongBenhVienId = searchThuNgan.PhongBenhVienId;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.Skip = this.skip;
                    this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo.Take = this.skip + this.pageSize;
                    this.apiService.post("BaoCao/GetBaoCaoDoanhThuDichVuTheoNhomBenhVienForGridAsync", this.baoCaoDoanhThuTheoNhomBenhVienQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            var listNhom_1 = [];
                            var stt_1 = 1;
                            resultData.Data.forEach(function (p) {
                                var nhom = listNhom_1.filter(function (s) { return s == p.Nhom; })[0];
                                if (!nhom) {
                                    stt_1 = 1;
                                    listNhom_1.push(p.Nhom);
                                }
                                p.STT = stt_1;
                                stt_1++;
                            });
                            // this.baoCaoThuTienVienPhi = resultData.Data;
                            _this.dataToSumAllThanhTien = resultData.Data;
                            // this.state.take = this.baoCaoThuTienVienPhi.length;
                            // this.groupNhom = this.groupBy(this.baoCaoThuTienVienPhi, pet => pet.Nhom);
                            // console.log(this.groupNhom)
                            // let dataList = process(this.dataToSumAllThanhTien, this.state);
                            _this.dataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            var takeTo = +_this.skip + +_this.pageSize;
                            var gridData = _this.dataSource.data.slice(_this.skip, takeTo);
                            _this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_13__["process"])(gridData, { group: _this.state.group });
                            _this.gridView.total = _this.dataSource.total;
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                            if (_this.gridView.data == null)
                                _this._isMessage = true; // show massage
                        }
                        if (_this.gridView.total != 0) {
                            _this.ishowView = true;
                        }
                        else {
                            _this.ishowView = false;
                        }
                    });
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.groupBy = function (list, keyGetter) {
                    var map = new Map();
                    list.forEach(function (item) {
                        var key = keyGetter(item);
                        var collection = map.get(key);
                        if (!collection) {
                            map.set(key, [item]);
                        }
                        else {
                            collection.push(item);
                        }
                    });
                    return map;
                };
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.XuatBaoCao = function () {
                    var _this = this;
                    if (this.search.RangeDateTimeFilter.DateStart == null || this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                        this.baoCaoSearch.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                        this.baoCaoSearch.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoDoanhThuBenhVienTheoNhom", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuTheoNhomDichVu" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                // hàm format tiền cho báo cáo 
                BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype.formatPrice = function (value) {
                    var val = (value / 1).toFixed(2).replace('.', ',');
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                };
                return BaoCaoDoanhThuDichVuTheoNhomBVComponent;
            }());
            BaoCaoDoanhThuDichVuTheoNhomBVComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_18__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["WindowComponent"], { static: false })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], { static: false })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "confirm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "heightToolbar", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "baoCaoChiTietDoanhthuTheoKhoaPhongGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NgayThuStr', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "NgayThuStr", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tamUng', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "tamUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoanUng', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "hoanUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiDichVu', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "goiDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienThu', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "soTienThu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huyThu', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "huyThu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNo', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "congNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienMat', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "tienMat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chuyenKhoan', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "chuyenKhoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pos', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "pos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoTienMat', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "thuNoTienMat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoChuyenKhoan', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "thuNoChuyenKhoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoPos', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "thuNoPos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietThuVienPhiGrid', { static: true })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent.prototype, "baoCaoChiTietThuVienPhiGrid", void 0);
            BaoCaoDoanhThuDichVuTheoNhomBVComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-doanh-thu-dich-vu-theo-nhom-bv',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv/bao-cao-doanh-thu-dich-vu-theo-nhom-bv.component.scss")).default]
                })
            ], BaoCaoDoanhThuDichVuTheoNhomBVComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-bao-cao-doanh-thu-dich-vu-theo-nhom-bv-module-es5.js.map