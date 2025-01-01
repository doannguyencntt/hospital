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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-doanh-thu-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.html": 
        /*!********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.html ***!
          \********************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''}\n                    ,{Title:'Báo Cáo Doanh Thu', Path:''}\n                    ,{Title:'Báo Cáo Tổng Hợp Doanh Thu Theo Khoa/Phòng', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 -mb-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker id=\"TuNgaythang\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateStart\" (modelChange)=\"changeValueStart($event)\"\n                    label=\"Tháng:Từ ngày\" class=\"on-header-height\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"DenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateEnd\" label=\"Đến ngày\" class=\"on-header-height\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"TuNgayky\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                    [(model)]=\"search.RangeDateTimeSoSanh.DateStart\" (modelChange)=\"changeValueStart($event)\"\n                    label=\"Kỳ so sánh :Từ ngày\" class=\"on-header-height\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"DenNgay\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                    [(model)]=\"search.RangeDateTimeSoSanh.DateEnd\" label=\"Đến ngày\" class=\"on-header-height\">\n                </app-datetimepicker>\n                <div fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" *ngIf=\"ishowView == true\">Xuất Excel</button>\n                </div>\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                        [hidden]=\"ishowViewData != true\" [pageSize]=\"pageSize\" [skip]=\"skip\"\n                        (pageChange)=\"pageChange($event)\" [height]=\"auto\"  class=\"k-grid1\">\n                        <!-- <ng-template kendoGridToolbarTemplate [position]=\"'top'\">\n                            <div style=\"float: right;font-size: 12px;color:#000;\">TCKT/BM01\n                            </div>\n                            <div style=\"text-align: center;font-size: 20px;font-weight: bold;color:#000;\">\n                                BÁO CÁO TỔNG HỢP DOANH THU THEO KHOA/PHÒNG\n                            </div>\n                            <div style=\"text-align: center;font-size: 12px;font-weight: bold;color:#000;\">\n                                <div class=\"text-center\"> Từ ngày: {{DateStart}} - Đến ngày: {{DateEnd}}</div>\n                            </div>\n                        </ng-template> -->\n                        <kendo-grid-column field=\"STT\" title=\"STT\" width=\"20\"\n                            [style]=\"{'text-align': 'center','padding': '20px 20px 20px 20px'}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"float: left;\">{{ dataItem.Stt }}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"KhoaPhong\" title=\"Khoa/Phòng\" width=\"50\"\n                            [style]=\"{'text-align': 'center' ,'vertical-align':'middle'}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"float: left;\">{{ dataItem.KhoaPhong }}</div>\n                            </ng-template>\n                            <!-- <ng-template kendoGridGroupHeaderTemplate let-value=\"value\">\n                                <strong>{{value}}</strong>\n                            </ng-template> -->\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div class=\"text-center\" style=\"font-weight: bold;color:#000;\">Tổng Cộng :</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <!-- <kendo-grid-column field=\"HoVaTenBenhNhan\" title=\"Họ Và Tên Người Bệnh\" width=\"100\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\"> -->\n                        <!-- <ng-template kendoGridGroupFooterTemplate>\n                                <div class=\"text-center\">Tổng :</div>\n                            </ng-template> -->\n                        <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div class=\"text-center\" style=\"font-weight: bold;color:#000;\">Tổng Cộng :</div>\n                            </ng-template>\n                        </kendo-grid-column> -->\n                        <kendo-grid-column-group title=\"Product Info\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">Tháng :Từ ngày: {{DateStart}} - Đến ngày: {{DateEnd}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"DoanhThuThang\" title=\"Doanh Thu\" width=\"50\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                     <div style=\"float: right;\">{{aggregates.DoanhThuTheoThang.sum | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                     <div style=\"float: right;\">{{totalDoanhThuThang | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                     <div style=\"float: right;\">{{ dataItem.DoanhThuTheoThang | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n                            <kendo-grid-column field=\"\" title=\"Các khoản giảm trừ DT\" width=\"100\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridHeaderTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <table fxFlex=\"100%\" class=\"tableingroup\">\n                                        <tr>\n                                            <th colspan=\"2\">Các khoản giảm trừ DT</th>\n                                        </tr>\n                                        <tr>\n                                            <th>Miễn Giảm</th>\n                                            <th>Khác</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <table style=\"width:100%;\" style=\"text-align: right;\" class=\"tableingroup\">\n                                        <tr>\n                                            <td>{{ dataItem.MienGiamTheoThang | number:'0.2-2':'vi-VN'}}</td>\n                                            <td>{{ dataItem.ChiPhiKhacTheoThang | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <!-- <ng-template kendoGridGroupHeaderColumnTemplate  let-group=\"group\" let-aggregates=\"aggregates\">\n                                    <table style=\"width:100%;\">\n                                        <tr>\n                                          <td style=\"text-align: center;\">{{aggregates.MienGiamThang.sum | number:'0.2-2':'vi-VN'}}</td>\n                                          <td style=\"text-align: center\">{{aggregates.KhacThang.sum | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                      </table>\n                               </ng-template> -->\n                                <!-- <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                    <table style=\"width:100%;\">\n                                        <tr>\n                                          <td style=\"text-align: center;\">{{aggregates.MienGiam.sum | number:'0.2-2':'vi-VN'}}</td>\n                                          <td style=\"text-align: center\">{{aggregates.Khac.sum | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                      </table>\n                                </ng-template> -->\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <table style=\"width:100%;\" style=\"text-align: right;\" class=\"tableingroup\">\n                                        <tr>\n                                            <td>{{ totalMienGiamThang | number:'0.2-2':'vi-VN'}}</td>\n                                            <td>{{ totalKhacThang | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"BHYTThang\" title=\"BHYT\" width=\"50\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                     <div style=\"float: right;\">{{aggregates.BHYTThang.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                     <div style=\"float: right;\">{{totalBHYTThang | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                     <div style=\"float: right;\">{{ dataItem.BhytTheoThang | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"DoanhThuThuanThang\" title=\"Doanh Thu Thuần\" width=\"50\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                     <div style=\"float: right;\">{{aggregates.DoanhThuThuanThang.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                     <div style=\"float: right;\">{{totalDoanhThuThuanThang | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                     <div style=\"float: right;\">{{ dataItem.DoanhThuThuanTheoThang | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        <kendo-grid-column-group title=\"Product Info\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                 <div style=\"float: right;\">So Sánh Kỳ :Từ ngày: {{DateStartKy}} - Đến ngày: {{DateEndKy}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"DoanhThuKy\" title=\"Doanh Thu\" width=\"50\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                     <div style=\"float: right;\">{{aggregates.DoanhThuKy.sum | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                     <div style=\"float: right;\">{{totalDoanhThuKy | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                     <div style=\"float: right;\">{{ dataItem.DoanhThuTheoKySoSanh | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"\" title=\"Các khoản giảm trừ DT\" width=\"100\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridHeaderTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <table fxFlex=\"100%\" class=\"tableingroup\">\n                                        <tr>\n                                            <th colspan=\"2\">Các khoản giảm trừ DT</th>\n                                        </tr>\n                                        <tr>\n                                            <th>Miễn Giảm</th>\n                                            <th>Khác</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <table style=\"width:100%;\" style=\"text-align: right;\" class=\"tableingroup\">\n                                        <tr>\n                                            <td>{{ dataItem.MienGiamTheoKySoSanh | number:'0.2-2':'vi-VN'}}</td>\n                                            <td>{{ dataItem.ChiPhiKhacTheoKySoSanh | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <!-- <ng-template kendoGridGroupHeaderColumnTemplate  let-group=\"group\" let-aggregates=\"aggregates\">\n                            <table style=\"width:100%;\">\n                                <tr>\n                                  <td style=\"text-align: center;\">{{aggregates.MienGiamKy.sum | number:'0.2-2':'vi-VN'}}</td>\n                                  <td style=\"text-align: center\">{{aggregates.KhacKy.sum | number:'0.2-2':'vi-VN'}}</td>\n                                </tr>\n                              </table>\n                       </ng-template> -->\n                                <!-- <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                            <table style=\"width:100%;\">\n                                <tr>\n                                  <td style=\"text-align: center;\">{{aggregates.MienGiam.sum | number:'0.2-2':'vi-VN'}}</td>\n                                  <td style=\"text-align: center\">{{aggregates.Khac.sum | number:'0.2-2':'vi-VN'}}</td>\n                                </tr>\n                              </table>\n                        </ng-template> -->\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <table style=\"width:100%;\" class=\"tableingroup\">\n                                        <tr>\n                                            <td style=\"text-align: right;\">{{ totalMienGiamKy | number:'0.2-2':'vi-VN'}}</td>\n                                            <td style=\"text-align: right;\">{{ totalKhacKy | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"BhytTheoKySoSanh\" title=\"BHYT\" width=\"50\" [style]=\"{'text-align': 'center'}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                     <div style=\"float: right;\">{{aggregates.BHYTKy.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                     <div style=\"float: right;\">{{totalBHYTKy | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                     <div style=\"float: right;\">{{ dataItem.BhytTheoKySoSanh | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"DoanhThuThuanKy\" title=\"Doanh Thu Thuần\" width=\"50\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridGroupFooterTemplate let-aggregates let-field=\"field\">\n                                     <div style=\"float: right;\">{{aggregates.DoanhThuThuanKy.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                     <div style=\"float: right;\">{{totalDoanhThuThuanKy | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                     <div style=\"float: right;\">{{ dataItem.DoanhThuThuanTheoKySoSanh | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                        detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n                    </kendo-grid>\n                </div>\n            </div>\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong-routing.module.ts": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong-routing.module.ts ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule", function () { return BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bcth_doanh_thu_theo_khoa_phong_list_bcth_doanh_thu_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bcth_doanh_thu_theo_khoa_phong_list_bcth_doanh_thu_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent"],
                    data: {
                        title: 'Doanh Thu Theo Khoa Phòng',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoTongHopDoanhThuTheoKhoaPhong,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule() {
                }
                return BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule;
            }());
            BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.model.ts": 
        /*!*******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.model.ts ***!
          \*******************************************************************************************************************************************************/
        /*! exports provided: Search, DateTimeFilter, DoanhThuTheoKhoaPhong, BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function () { return DateTimeFilter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoanhThuTheoKhoaPhong", function () { return DoanhThuTheoKhoaPhong; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo", function () { return BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Search = /** @class */ (function () {
                function Search(RangeDateTimeFilter, RangeDateTimeSoSanh) {
                    if (RangeDateTimeFilter === void 0) { RangeDateTimeFilter = new DateTimeFilter; }
                    if (RangeDateTimeSoSanh === void 0) { RangeDateTimeSoSanh = new DateTimeFilter; }
                    this.RangeDateTimeFilter = RangeDateTimeFilter;
                    this.RangeDateTimeSoSanh = RangeDateTimeSoSanh;
                }
                return Search;
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
            var DoanhThuTheoKhoaPhong = /** @class */ (function () {
                function DoanhThuTheoKhoaPhong(STT, KhoaPhong, Thang, DoanhThuThang, MienGiamThang, KhacThang, BHYTThang, DoanhThuThuanThang, KySoSanh, DoanhThuKy, MienGiamKy, KhacKy, BHYTKy, DoanhThuThuanKy) {
                    if (STT === void 0) { STT = null; }
                    if (KhoaPhong === void 0) { KhoaPhong = null; }
                    if (Thang === void 0) { Thang = null; }
                    if (DoanhThuThang === void 0) { DoanhThuThang = 0; }
                    if (MienGiamThang === void 0) { MienGiamThang = 0; }
                    if (KhacThang === void 0) { KhacThang = 0; }
                    if (BHYTThang === void 0) { BHYTThang = 0; }
                    if (DoanhThuThuanThang === void 0) { DoanhThuThuanThang = 0; }
                    if (KySoSanh === void 0) { KySoSanh = null; }
                    if (DoanhThuKy === void 0) { DoanhThuKy = 0; }
                    if (MienGiamKy === void 0) { MienGiamKy = 0; }
                    if (KhacKy === void 0) { KhacKy = 0; }
                    if (BHYTKy === void 0) { BHYTKy = 0; }
                    if (DoanhThuThuanKy === void 0) { DoanhThuThuanKy = 0; }
                    this.STT = STT;
                    this.KhoaPhong = KhoaPhong;
                    this.Thang = Thang;
                    this.DoanhThuThang = DoanhThuThang;
                    this.MienGiamThang = MienGiamThang;
                    this.KhacThang = KhacThang;
                    this.BHYTThang = BHYTThang;
                    this.DoanhThuThuanThang = DoanhThuThuanThang;
                    this.KySoSanh = KySoSanh;
                    this.DoanhThuKy = DoanhThuKy;
                    this.MienGiamKy = MienGiamKy;
                    this.KhacKy = KhacKy;
                    this.BHYTKy = BHYTKy;
                    this.DoanhThuThuanKy = DoanhThuThuanKy;
                }
                return DoanhThuTheoKhoaPhong;
            }());
            var BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo(BacSyId, TuNgay, DenNgay, KySoSanhTuNgay, KySoSanhDenNgay, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (BacSyId === void 0) { BacSyId = 0; }
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (KySoSanhTuNgay === void 0) { KySoSanhTuNgay = null; }
                    if (KySoSanhDenNgay === void 0) { KySoSanhDenNgay = null; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.BacSyId = BacSyId;
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.KySoSanhTuNgay = KySoSanhTuNgay;
                    this.KySoSanhDenNgay = KySoSanhDenNgay;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.module.ts": 
        /*!********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.module.ts ***!
          \********************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuTheoKhoaPhongModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuTheoKhoaPhongModule", function () { return BaoCaoTongHopDoanhThuTheoKhoaPhongModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-tong-hop-doanh-thu-theo-khoa-phong.service */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bao-cao-tong-hop-doanh-thu-theo-khoa-phong-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong-routing.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bcth_doanh_thu_theo_khoa_phong_list_bcth_doanh_thu_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.ts");
            var BaoCaoTongHopDoanhThuTheoKhoaPhongModule = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuTheoKhoaPhongModule() {
                }
                return BaoCaoTongHopDoanhThuTheoKhoaPhongModule;
            }());
            BaoCaoTongHopDoanhThuTheoKhoaPhongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bcth_doanh_thu_theo_khoa_phong_list_bcth_doanh_thu_theo_khoa_phong_list_component__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_11__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                        _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_routing_module__WEBPACK_IMPORTED_MODULE_8__["BaoCaoTongHopDoanhThuTheoKhoaPhongRoutingModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__["GridModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__["PDFModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__["ExcelModule"]
                    ],
                    providers: [
                        _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_service__WEBPACK_IMPORTED_MODULE_5__["BaoCaoTongHopDoanhThuTheoKhoaPhongService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_service__WEBPACK_IMPORTED_MODULE_5__["BaoCaoTongHopDoanhThuTheoKhoaPhongService"] },
                    ]
                })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.service.ts": 
        /*!*********************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.service.ts ***!
          \*********************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuTheoKhoaPhongService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuTheoKhoaPhongService", function () { return BaoCaoTongHopDoanhThuTheoKhoaPhongService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var BaoCaoTongHopDoanhThuTheoKhoaPhongService = /** @class */ (function (_super) {
                __extends(BaoCaoTongHopDoanhThuTheoKhoaPhongService, _super);
                function BaoCaoTongHopDoanhThuTheoKhoaPhongService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoTongHopDoanhThuTheoKhoaPhongService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            BaoCaoTongHopDoanhThuTheoKhoaPhongService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            BaoCaoTongHopDoanhThuTheoKhoaPhongService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.scss": 
        /*!******************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.scss ***!
          \******************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 2px !important;\n}\n\n.k-grid1 td {\n  padding: 2px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kb2FuaC10aHUvYmFvLWNhby10b25nLWhvcC1kb2FuaC10aHUtdGhlby1raG9hLXBob25nL2JjdGgtZG9hbmgtdGh1LXRoZW8ta2hvYS1waG9uZy1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1kb2FuaC10aHVcXGJhby1jYW8tdG9uZy1ob3AtZG9hbmgtdGh1LXRoZW8ta2hvYS1waG9uZ1xcYmN0aC1kb2FuaC10aHUtdGhlby1raG9hLXBob25nLWxpc3RcXGJjdGgtZG9hbmgtdGh1LXRoZW8ta2hvYS1waG9uZy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWRvYW5oLXRodS9iYW8tY2FvLXRvbmctaG9wLWRvYW5oLXRodS10aGVvLWtob2EtcGhvbmcvYmN0aC1kb2FuaC10aHUtdGhlby1raG9hLXBob25nLWxpc3QvYmN0aC1kb2FuaC10aHUtdGhlby1raG9hLXBob25nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kb2FuaC10aHUvYmFvLWNhby10b25nLWhvcC1kb2FuaC10aHUtdGhlby1raG9hLXBob25nL2JjdGgtZG9hbmgtdGh1LXRoZW8ta2hvYS1waG9uZy1saXN0L2JjdGgtZG9hbmgtdGh1LXRoZW8ta2hvYS1waG9uZy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.ts": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.ts ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent", function () { return BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-tong-hop-doanh-thu-theo-khoa-phong.model */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bao-cao-tong-hop-doanh-thu-theo-khoa-phong.model.ts");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            var BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent = /** @class */ (function () {
                function BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent(apiService) {
                    this.apiService = apiService;
                    this.search = new _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_model__WEBPACK_IMPORTED_MODULE_11__["Search"]();
                    this.pageSize = 50;
                    this.skip = 0;
                    this.jqueryString = "";
                    // -->
                    this.totalDoanhThuThang = 0;
                    this.totalMienGiamThang = 0;
                    this.totalKhacThang = 0;
                    this.totalBHYTThang = 0;
                    this.totalDoanhThuThuanThang = 0;
                    //
                    this.totalDoanhThuKy = 0;
                    this.totalMienGiamKy = 0;
                    this.totalKhacKy = 0;
                    this.totalBHYTKy = 0;
                    this.totalDoanhThuThuanKy = 0;
                    //-->
                    // date 
                    this.DateStart = null;
                    this.DateEnd = null;
                    this.DateStartKy = null;
                    this.DateEndKy = null;
                    //-->
                    this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo = new _bao_cao_tong_hop_doanh_thu_theo_khoa_phong_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo"]();
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this.gridData = [];
                    this.items = this.gridData;
                    this.expression = false;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.STT = 1;
                    this.gridColumns = [];
                    this.ishowView = false;
                    this.ishowViewData = false;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this.showDefaultPagerTemplate = true;
                    this.heightToolbar = 140;
                }
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.ngOnInit = function () {
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhDenNgay = this.search.RangeDateTimeSoSanh.DateEnd;
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeSoSanh.DateStart == null) {
                        this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
                    }
                };
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.pageChange = function (event) {
                    this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.Skip = event.skip;
                    this.skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.ngAfterContentInit = function () {
                    var self = this;
                    self.height = jQuery(window).height() - 180;
                    if (self.height < 400)
                        self.height = 400;
                    jQuery(window).resize(function () {
                        self.height = jQuery(window).height() - 180;
                        if (self.height < 400)
                            self.height = 400;
                    });
                };
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.changeValueStart = function (event) {
                    this.minDateDenNgay = new Date();
                    if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart || this.search.RangeDateTimeSoSanh.DateStart != null && this.search.RangeDateTimeSoSanh.DateEnd != null && this.search.RangeDateTimeSoSanh.DateEnd > this.search.RangeDateTimeSoSanh.DateStart) {
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
                        this.search.RangeDateTimeSoSanh.DateEnd = this.minDateDenNgay;
                    }
                };
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    // k chọn date thi default date now
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeSoSanh.DateStart == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeSoSanh.DateEnd == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.search.RangeDateTimeSoSanh.DateEnd = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                    }
                    // format date "dd/mm/yyyy" hh
                    this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
                    this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
                    this.DateStartKy = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeSoSanh.DateStart, "dd/mm/yyyy");
                    this.DateEndKy = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeSoSanh.DateEnd, "dd/mm/yyyy");
                    this.ishowViewData = true;
                    this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo.KySoSanhTuNgay = this.search.RangeDateTimeSoSanh.DateStart;
                    this.apiService.post("BaoCao/GetBaoCaoTongHopDoanhThuTheoKhoaPhongForGridAsync", this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.gridData = resultData;
                            //this.gridData= resultData.Data;
                            _this.gridView = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                            if (_this.gridView.total != 0) {
                                _this.ishowView = true;
                            }
                            else {
                                _this.ishowView = false;
                            }
                        }
                    });
                    this.apiService.post("BaoCao/GetTotalBaoCaoTongHopDoanhThuTheoKhoaPhongForGridAsync", this.baoCaoTongHopDoanhThuTheoKhoaPhongQueryInfoQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.gridData = resultData;
                            // thang
                            _this.totalDoanhThuThang = resultData.DoanhThuTheoThang;
                            _this.totalDoanhThuThuanThang = resultData.DoanhThuThuanTheoThang;
                            _this.totalBHYTThang = resultData.BhytTheoThang;
                            _this.totalMienGiamThang = resultData.MienGiamTheoThang;
                            _this.totalKhacThang = resultData.ChiPhiKhacTheoThang;
                            // ky
                            _this.totalDoanhThuKy = resultData.DoanhThuTheoKySoSanh;
                            _this.totalDoanhThuThuanKy = resultData.DoanhThuThuanTheoKySoSanh;
                            _this.totalBHYTKy = resultData.BhytTheoKySoSanh;
                            _this.totalMienGiamKy = resultData.MienGiamTheoKySoSanh;
                            _this.totalKhacKy = resultData.ChiPhiKhacTheoKySoSanh;
                        }
                    });
                };
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.XuatBaoCao = function () {
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeSoSanh.DateStart == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeSoSanh.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeSoSanh.DateEnd == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.search.RangeDateTimeSoSanh.DateEnd = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.minDateDenNgay = new Date();
                        this.minDateTuNgay = new Date();
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                    }
                    // format date "dd/mm/yyyy" hh
                    this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "MM/dd/yyyy");
                    this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "MM/dd/yyyy");
                    this.DateStartKy = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeSoSanh.DateStart, "MM/dd/yyyy");
                    this.DateEndKy = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeSoSanh.DateEnd, "MM/dd/yyyy");
                    window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].api_url + "/BaoCao/ExportAggregateRevenueReportByDepartment?startDate=" + this.DateStart + "&endDate=" + this.DateEnd + "&startDateKySoSanh=" + this.DateStartKy + "&endDateKySoSanh=" + this.DateEndKy;
                };
                BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype.searchRefresh = function () {
                    this.XemBaoCao();
                };
                return BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent;
            }());
            BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmComponent"], { static: false })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype, "confirm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent.prototype, "heightToolbar", void 0);
            BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bcth-doanh-thu-theo-khoa-phong-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bcth-doanh-thu-theo-khoa-phong-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bcth-doanh-thu-theo-khoa-phong-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-tong-hop-doanh-thu-theo-khoa-phong/bcth-doanh-thu-theo-khoa-phong-list/bcth-doanh-thu-theo-khoa-phong-list.component.scss")).default]
                })
            ], BaoCaoTongHopDoanhThuTheoKhoaPhongListComponent);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-bao-cao-tong-hop-doanh-thu-theo-khoa-phong-module-es5.js.map