(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-doanh-thu-bao-cao-chi-tiet-tien-vien-phi-benh-nhan-bao-cao-thu-tien-vien-phi-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.html": 
        /*!******************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.html ***!
          \******************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''}\n                    ,{Title:'Báo Cáo Doanh Thu', Path:''}\n                    ,{Title:'Báo Cáo Chi Tiết Thu Tiền Viện Phí Người Bệnh', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoaPhong\" fxFlex=\"18%\" fxFlex.sm=\"18%\" [(model)]=\"quayThuNgan.KeyId\"\n                    [modelText]=\"quayThuNgan.DisplayName\" label=\"Quầy thu Tiếp Nhận\"\n                    (modelChange)=\"chonQuayChange($event)\" [autoSelectFirstItem]=\"true\"\n                    url=\"KhoaPhongNhanVien/GetListKhoaPhongThuNgan\" class=\"mt-1 on-header\">\n                </app-combobox>\n                <!-- (selectionChange)=\"chonNhanVien($event)\" -->\n                <app-combobox id=\"nhanVienThuNgan\" id=\"nhanVienThuNgan\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"nhanVienThuNgan.KeyId\" [modelText]=\"nhanVienThuNgan.DisplayName\"\n                    label=\"Nhân Viên Tiếp Nhận\" [autoSelectFirstItem]=\"true\" (modelChange)=\"chonNhanVienChange($event)\"\n                    url=\"KhoaPhongNhanVien/GetListNhanVienThuNgan\" class=\"mt-1 on-header\">\n                </app-combobox>\n                <app-datetimepicker id=\"TuNgaythang\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateStart\" (modelChange)=\"changeValueStartTuNgaythang($event)\"\n                    label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateEnd\" label=\"Đến ngày\"  (modelChange)=\"changeValueStartDenNgay($event)\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <!-- (selectionChange)=\"chonQuay($event)\" -->\n\n                <div fxFlex=\"28%\" fxFlex.sm=\"28%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" *ngIf=\"ishowView == true\">Xuất Excel</button>\n                </div>\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridView\" [pageable]=\"true\" [resizable]=\"true\" [height]=\"height\"\n                        [hidden]=\"ishowViewData != true\" [pageSize]=\"pageSize\" [skip]=\"skip\"\n                        (pageChange)=\"pageChange($event)\" [height]=\"auto\" class=\"k-grid1\">\n                        <kendo-grid-column field=\"STT\" title=\"STT\" width=\"50\" [style]=\"{'text-align': 'center'}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\"></div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-dataItem let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: left;\">{{group.value}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"MaTiepNhan\" title=\"Mã tiếp nhận\" width=\"150\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\"></div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-dataItem let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: left;\">{{selectValueColumn('MaTiepNhan' , group.value)}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"NgayThuStr\" title=\"Ngày Thu\" width=\"200\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\"></div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-dataItem let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: left;\">{{selectValueColumn('NgayThuStr' , group.value) }}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"MaBenhNhan\" title=\"Mã Người Bệnh\" width=\"150\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\"></div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-dataItem let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: left;\">{{selectValueColumn('MaBenhNhan' , group.value)}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"TenBenhNhan\" title=\"Tên Người Bệnh\" width=\"200\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\" style=\"display: none\"></div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-dataItem let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: left;\">{{selectValueColumn('TenBenhNhan' , group.value)}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"SoBenhAn\" title=\"Số Bệnh Án\" width=\"150\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"TenDichVu\" title=\"Tên Dịch Vụ\" width=\"350\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{dataItem.TenDichVu}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"BacSiChiDinhThucHien\" title=\"Bác sĩ chỉ định/thực hiện\" width=\"200\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.BacSiChiDinhThucHien}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div class=\"text-center\" style=\"font-weight: bold;color:#000;text-align: left;\">Tổng\n                                    Cộng :</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"DoanhThu\" title=\"Doanh Thu\" width=\"120\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">{{ dataItem.DoanhThu | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: right;\">{{aggregates.DoanhThu.sum | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalDoanhThu | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"BHYTChiTra\" title=\"BHYT chi trả\" width=\"120\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">{{ dataItem.BHYTChiTra | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: right;\">{{aggregates.BHYTChiTra.sum | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalBHYTChiTra | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"BHYTTuNhanChiTra\" title=\"Bảo hiểm tư nhân chi trả\" width=\"200\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">{{ dataItem.BHYTTuNhanChiTra | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: right;\">{{aggregates.BHYTTuNhanChiTra.sum | number:'0.2-2':'vi-VN'}}\n                                </div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalBHYTTuNhanChiTra | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Các khoản giảm trừ DT\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div style=\"text-align: center;\">Các khoản giảm trừ DT</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"MiemGiam\" title=\"Miễn giảm\" width=\"120\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">{{ dataItem.MiemGiam | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                    let-aggregates=\"aggregates\">\n                                    <div style=\"text-align: right;\">{{aggregates.MiemGiam.sum | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalMiemGiam | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"Voucher\" title=\"Khác\" width=\"120\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">{{ dataItem.Voucher | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                    let-aggregates=\"aggregates\">\n                                    <div style=\"text-align: right;\">{{aggregates.Voucher.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalVoucher | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        <kendo-grid-column field=\"ThuTuBenhNhan\" title=\"Thu Từ Người Bệnh\" width=\"150\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">{{ dataItem.ThuTuBenhNhan | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                let-aggregates=\"aggregates\">\n                                <div style=\"text-align: right;\">{{aggregates.ThuTuBenhNhan.sum | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalThuTuBenhNhan | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column-group title=\"Hình thức thanh toán\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div style=\"text-align: center;\">Hình thức thanh toán</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"TienMat\" title=\"Tiền Mặt\" width=\"150\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">{{ dataItem.TienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                    let-aggregates=\"aggregates\">\n                                    <div style=\"text-align: right;\">{{aggregates.TienMat.sum | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"ChuyenKhoan\" title=\"Chuyển Khoản\" width=\"150\"\n                                [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">{{ dataItem.ChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                    let-aggregates=\"aggregates\">\n                                    <div style=\"text-align: right;\">{{aggregates.ChuyenKhoan.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalChuyenKhoan| number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"Pos\" title=\"Pos\" width=\"150\" [style]=\"{'text-align': 'center'}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\">{{ dataItem.Pos | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridGroupHeaderColumnTemplate let-group=\"group\"\n                                    let-aggregates=\"aggregates\">\n                                    <div style=\"text-align: right;\">{{aggregates.Pos.sum | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalPos| number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        <kendo-grid-column field=\"NguoiThu\" title=\"Thu ngân\" width=\"150\"\n                            [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n                    <!-- <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div> -->\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.scss": 
        /*!****************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.scss ***!
          \****************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kb2FuaC10aHUvYmFvLWNhby1jaGktdGlldC10aWVuLXZpZW4tcGhpLWJlbmgtbmhhbi9iYW8tY2FvLWRhbmgtc2FjaC10aHUtdGllbi12aWVuLXBoaS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tZG9hbmgtdGh1XFxiYW8tY2FvLWNoaS10aWV0LXRpZW4tdmllbi1waGktYmVuaC1uaGFuXFxiYW8tY2FvLWRhbmgtc2FjaC10aHUtdGllbi12aWVuLXBoaVxcYmFvLWNhby1kYW5oLXNhY2gtdGh1LXRpZW4tdmllbi1waGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9hbmgtdGh1L2Jhby1jYW8tY2hpLXRpZXQtdGllbi12aWVuLXBoaS1iZW5oLW5oYW4vYmFvLWNhby1kYW5oLXNhY2gtdGh1LXRpZW4tdmllbi1waGkvYmFvLWNhby1kYW5oLXNhY2gtdGh1LXRpZW4tdmllbi1waGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9hbmgtdGh1L2Jhby1jYW8tY2hpLXRpZXQtdGllbi12aWVuLXBoaS1iZW5oLW5oYW4vYmFvLWNhby1kYW5oLXNhY2gtdGh1LXRpZW4tdmllbi1waGkvYmFvLWNhby1kYW5oLXNhY2gtdGh1LXRpZW4tdmllbi1waGkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn0iLCIuay1ncmlkMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmstZ3JpZDEgLmstZ3JpZC1oZWFkZXItd3JhcCB0aCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmstZ3JpZDEgdGgge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstZ3JpZDEgdGQgYSB7XG4gIGNvbG9yOiAjMDA1ZGFiO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uay1ncmlkMSB0ZCBhLmstcGx1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.ts": 
        /*!**************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.ts ***!
          \**************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoChiTietThuTienVienPhiBenhNhanComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietThuTienVienPhiBenhNhanComponent", function () { return BaoCaoChiTietThuTienVienPhiBenhNhanComponent; });
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
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../bao-cao-thu-tien-vien-phi */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var BaoCaoChiTietThuTienVienPhiBenhNhanComponent = /** @class */ (function () {
                //================================End value total===========================
                function BaoCaoChiTietThuTienVienPhiBenhNhanComponent(apiService, http) {
                    this.apiService = apiService;
                    this.http = http;
                    this.search = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_13__["Search"]();
                    this.nhanVienThuNgan = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_13__["NhanVienThuNgan"]();
                    this.quayThuNgan = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_13__["QuayThuNgan"]();
                    this.quayThu = "";
                    this.nguoiThu = "";
                    this.pageSize = 50;
                    this.skip = 0;
                    this.jqueryString = "";
                    this.groupSTT = new Map();
                    this.DateStart = null;
                    this.DateEnd = null;
                    //================================Begin value total===========================
                    this.totalDoanhThu = 0;
                    this.totalBHYTChiTra = 0;
                    this.totalBHYTTuNhanChiTra = 0;
                    this.totalMiemGiam = 0;
                    this.totalVoucher = 0;
                    this.totalThuTuBenhNhan = 0;
                    this.totalTienMat = 0;
                    this.totalChuyenKhoan = 0;
                    this.totalPos = 0;
                    this.sort = [{
                            field: 'Id',
                            dir: 'desc'
                        }];
                    this.baoCaoChiTietThuTienVienPhiBenhNhan = [];
                    this.baoCaoChiTietList = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_13__["BaoCaoChiTietThuTienVienPhiBenhNhan"]();
                    this.items = this.baoCaoChiTietThuTienVienPhiBenhNhan;
                    this.expression = false;
                    //================================Begin icon==========================
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default.a;
                    //================================End icon==========================
                    //================================Begin paging==========================
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_13__["BaoCaoThuPhiVienPhiQueryInfoQueryInfo"]();
                    this._isLoadingTotalPage = false;
                    this.gridColumns = [];
                    this.ishowView = false;
                    this.ishowViewData = false;
                    this.minDateDenNgay = null;
                    this.minDateTuNgay = null;
                    this._isLoading = false;
                    this.showDefaultPagerTemplate = true;
                    this.heightToolbar = 140;
                    //================================Begin group aggregates ===========================
                    this.aggregates = [
                        { field: 'DoanhThu', aggregate: 'sum' },
                        { field: 'BHYTChiTra', aggregate: 'sum' },
                        { field: 'BHYTTuNhanChiTra', aggregate: 'sum' },
                        { field: 'MiemGiam', aggregate: 'sum' },
                        { field: 'Voucher', aggregate: 'sum' },
                        { field: 'ThuTuBenhNhan', aggregate: 'sum' },
                        { field: 'TienMat', aggregate: 'sum' },
                        { field: 'ChuyenKhoan', aggregate: 'sum' },
                        { field: 'Pos', aggregate: 'sum' },
                        { field: 'TenBenhNhan', aggregate: 'count' },
                        { field: 'MaBenhNhan', aggregate: 'count' },
                        { field: 'NgayThuStr', aggregate: 'count' },
                    ];
                    this.state = {
                        skip: 0,
                        take: 0,
                        group: [{ field: 'STT', aggregates: this.aggregates }]
                    };
                }
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.ngOnInit = function () {
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                };
                //================================End group aggregates ===========================
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.chonQuay = function (item) {
                    this.quayThuNgan = item;
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.chonQuayChange = function (item) {
                    if (item != undefined) {
                        this.quayThuNgan.KeyId = item;
                    }
                    else {
                        this.quayThuNgan.KeyId = 0;
                    }
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.chonNhanVien = function (item) {
                    this.nhanVienThuNgan = item;
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.chonNhanVienChange = function (item) {
                    if (item != undefined) {
                        this.nhanVienThuNgan.KeyId = item;
                    }
                    else {
                        this.nhanVienThuNgan.KeyId = 0;
                    }
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.selectValueColumn = function (field, keyColumn) {
                    switch (field) {
                        case 'NgayThuStr':
                            return this.groupBySTT(keyColumn).NgayThuStr;
                        case 'MaBenhNhan':
                            return this.groupBySTT(keyColumn).MaBenhNhan;
                        case 'MaTiepNhan':
                            return this.groupBySTT(keyColumn).MaTiepNhan;
                        case 'TenBenhNhan':
                            return this.groupBySTT(keyColumn).TenBenhNhan;
                    }
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.groupBySTT = function (keyColumn) {
                    var valueGroup = [];
                    this.groupSTT.forEach(function (value, key) {
                        if (keyColumn == key) {
                            valueGroup = value[0];
                        }
                    });
                    return valueGroup;
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.pageChange = function (event) {
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.Skip = event.skip;
                    this.skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.changeValueStartTuNgaythang = function (event) {
                    this.minDateDenNgay = new Date();
                    if (this.search.RangeDateTimeFilter.DateStart == null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
                        this.search.RangeDateTimeFilter.DateStart = null;
                    }
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.changeValueStartDenNgay = function (event) {
                    this.minDateDenNgay = new Date();
                    if (this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.search.RangeDateTimeFilter.DateEnd = null;
                    }
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.minDateTuNgay = new Date();
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateStart != null) {
                        this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd != null) {
                        this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
                    }
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;
                    this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
                    this.ishowViewData = true;
                    this.apiService.post("BaoCao/GetBaoCaoChiTietThuTienVienPhiBenhNhanForGridAsync", this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.baoCaoChiTietThuTienVienPhiBenhNhan = resultData.Data;
                            _this.state.take = _this.baoCaoChiTietThuTienVienPhiBenhNhan.length;
                            //
                            _this.groupSTT = _this.groupBy(_this.baoCaoChiTietThuTienVienPhiBenhNhan, function (pet) { return pet.STT; });
                            var dataList = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_8__["process"])(_this.baoCaoChiTietThuTienVienPhiBenhNhan, _this.state);
                            _this.gridView = {
                                data: dataList.data.sort(),
                                total: resultData.TotalRowCount
                            };
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                        if (_this.gridView.total != 0) {
                            _this.ishowView = true;
                        }
                        else {
                            _this.ishowView = false;
                        }
                    });
                    // tính tổng sum báo cáo
                    this.apiService.post("BaoCao/GetTotalBaoCaoChiTietThuTienVienPhiBenhNhanForGridAsync", this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.baoCaoChiTietThuTienVienPhiBenhNhan = resultData.Data;
                            _this.totalDoanhThu = resultData.DoanhThu;
                            _this.totalBHYTChiTra = resultData.BHYTChiTra;
                            _this.totalBHYTTuNhanChiTra = resultData.BHYTTuNhanChiTra;
                            _this.totalMiemGiam = resultData.MiemGiam;
                            _this.totalVoucher = resultData.Voucher;
                            _this.totalThuTuBenhNhan = resultData.ThuTuBenhNhan;
                            _this.totalTienMat = resultData.TienMat;
                            _this.totalChuyenKhoan = resultData.ChuyenKhoan;
                            _this.totalPos = resultData.Pos;
                        }
                    });
                };
                // downloadFile(url: string,fileName:string) {
                //   // Process the file downloaded
                //   this.http.get(url, options).subscribe(res => {
                //       //const fileName = getFileNameFromResponseContentDisposition(res);
                //       saveFile(res.blob(), fileName);
                //   });
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.XuatBaoCao = function () {
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                    }
                    this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "MM/dd/yyyy");
                    this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "MM/dd/yyyy");
                    window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].api_url + "/BaoCao/ExportBaoCaoChiTietThuTienBenhNhan?phongBenhVienId=" + this.quayThuNgan.KeyId + "&nhanVienId=" + this.nhanVienThuNgan.KeyId + "&startDate=" + this.DateStart + "&endDate=" + this.DateEnd;
                };
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.groupBy = function (list, keyGetter) {
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
                BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype.searchRefresh = function () {
                    this.XemBaoCao();
                };
                return BaoCaoChiTietThuTienVienPhiBenhNhanComponent;
            }());
            BaoCaoChiTietThuTienVienPhiBenhNhanComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], { static: true })
            ], BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_10__["WindowComponent"], { static: false })
            ], BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], { static: false })
            ], BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype, "confirm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BaoCaoChiTietThuTienVienPhiBenhNhanComponent.prototype, "heightToolbar", void 0);
            BaoCaoChiTietThuTienVienPhiBenhNhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-danh-sach-thu-tien-vien-phi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-danh-sach-thu-tien-vien-phi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-danh-sach-thu-tien-vien-phi.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.scss")).default]
                })
            ], BaoCaoChiTietThuTienVienPhiBenhNhanComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi-routing.module.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi-routing.module.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: ThuTienVienPhiRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuTienVienPhiRoutingModule", function () { return ThuTienVienPhiRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_danh_sach_thu_tien_vien_phi_bao_cao_danh_sach_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_danh_sach_thu_tien_vien_phi_bao_cao_danh_sach_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_5__["BaoCaoChiTietThuTienVienPhiBenhNhanComponent"],
                    data: {
                        title: 'Báo cáo chi tiết thu tiền viện phí người bệnh',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoThuVienPhiBenhNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    }
                }
            ];
            var ThuTienVienPhiRoutingModule = /** @class */ (function () {
                function ThuTienVienPhiRoutingModule() {
                }
                return ThuTienVienPhiRoutingModule;
            }());
            ThuTienVienPhiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], ThuTienVienPhiRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi.module.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi.module.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: BaoCaoThuTienVienPhiBNModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuTienVienPhiBNModule", function () { return BaoCaoThuTienVienPhiBNModule; });
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
            /* harmony import */ var _bao_cao_thu_tien_vien_phi_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bao-cao-thu-tien-vien-phi-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi-routing.module.ts");
            /* harmony import */ var _bao_cao_danh_sach_thu_tien_vien_phi_bao_cao_danh_sach_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-danh-sach-thu-tien-vien-phi/bao-cao-danh-sach-thu-tien-vien-phi.component.ts");
            var BaoCaoThuTienVienPhiBNModule = /** @class */ (function () {
                function BaoCaoThuTienVienPhiBNModule() {
                }
                return BaoCaoThuTienVienPhiBNModule;
            }());
            BaoCaoThuTienVienPhiBNModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_danh_sach_thu_tien_vien_phi_bao_cao_danh_sach_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoChiTietThuTienVienPhiBenhNhanComponent"]],
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
                        _bao_cao_thu_tien_vien_phi_routing_module__WEBPACK_IMPORTED_MODULE_17__["ThuTienVienPhiRoutingModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
                    ]
                })
            ], BaoCaoThuTienVienPhiBNModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-chi-tiet-tien-vien-phi-benh-nhan/bao-cao-thu-tien-vien-phi.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: Search, NhanVienThuNgan, QuayThuNgan, DateTimeFilter, BaoCaoChiTietThuTienVienPhiBenhNhan, SearchField, BaoCaoThuPhiVienPhiQueryInfoQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanVienThuNgan", function () { return NhanVienThuNgan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuNgan", function () { return QuayThuNgan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function () { return DateTimeFilter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoChiTietThuTienVienPhiBenhNhan", function () { return BaoCaoChiTietThuTienVienPhiBenhNhan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchField", function () { return SearchField; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuPhiVienPhiQueryInfoQueryInfo", function () { return BaoCaoThuPhiVienPhiQueryInfoQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            var BaoCaoChiTietThuTienVienPhiBenhNhan = /** @class */ (function () {
                function BaoCaoChiTietThuTienVienPhiBenhNhan(STT, MaTiepNhan, NgayThu, NgayThuStr, MaBenhNhan, TenBenhNhan, SoBenhAn, TenDichVu, BacSiChiDinhThucHien, DoanhThu, BHYTChiTra, BHYTTuNhanChiTra, MiemGiam, Voucher, ThuTuBenhNhan, TienMat, ChuyenKhoan, Pos, NguoiThu, Group) {
                    if (STT === void 0) { STT = null; }
                    if (MaTiepNhan === void 0) { MaTiepNhan = null; }
                    if (NgayThu === void 0) { NgayThu = null; }
                    if (NgayThuStr === void 0) { NgayThuStr = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (TenBenhNhan === void 0) { TenBenhNhan = null; }
                    if (SoBenhAn === void 0) { SoBenhAn = null; }
                    if (TenDichVu === void 0) { TenDichVu = null; }
                    if (BacSiChiDinhThucHien === void 0) { BacSiChiDinhThucHien = null; }
                    if (DoanhThu === void 0) { DoanhThu = 0; }
                    if (BHYTChiTra === void 0) { BHYTChiTra = 0; }
                    if (BHYTTuNhanChiTra === void 0) { BHYTTuNhanChiTra = 0; }
                    if (MiemGiam === void 0) { MiemGiam = 0; }
                    if (Voucher === void 0) { Voucher = 0; }
                    if (ThuTuBenhNhan === void 0) { ThuTuBenhNhan = 0; }
                    if (TienMat === void 0) { TienMat = 0; }
                    if (ChuyenKhoan === void 0) { ChuyenKhoan = 0; }
                    if (Pos === void 0) { Pos = 0; }
                    if (NguoiThu === void 0) { NguoiThu = null; }
                    if (Group === void 0) { Group = null; }
                    this.STT = STT;
                    this.MaTiepNhan = MaTiepNhan;
                    this.NgayThu = NgayThu;
                    this.NgayThuStr = NgayThuStr;
                    this.MaBenhNhan = MaBenhNhan;
                    this.TenBenhNhan = TenBenhNhan;
                    this.SoBenhAn = SoBenhAn;
                    this.TenDichVu = TenDichVu;
                    this.BacSiChiDinhThucHien = BacSiChiDinhThucHien;
                    this.DoanhThu = DoanhThu;
                    this.BHYTChiTra = BHYTChiTra;
                    this.BHYTTuNhanChiTra = BHYTTuNhanChiTra;
                    this.MiemGiam = MiemGiam;
                    this.Voucher = Voucher;
                    this.ThuTuBenhNhan = ThuTuBenhNhan;
                    this.TienMat = TienMat;
                    this.ChuyenKhoan = ChuyenKhoan;
                    this.Pos = Pos;
                    this.NguoiThu = NguoiThu;
                    this.Group = Group;
                }
                return BaoCaoChiTietThuTienVienPhiBenhNhan;
            }());
            var SearchField = /** @class */ (function () {
                function SearchField(TuNgay, DenNgay, NhanVienId, PhongBenhVienId) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (NhanVienId === void 0) { NhanVienId = 0; }
                    if (PhongBenhVienId === void 0) { PhongBenhVienId = 0; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.NhanVienId = NhanVienId;
                    this.PhongBenhVienId = PhongBenhVienId;
                }
                return SearchField;
            }());
            var BaoCaoThuPhiVienPhiQueryInfoQueryInfo = /** @class */ (function () {
                function BaoCaoThuPhiVienPhiQueryInfoQueryInfo(TuNgay, DenNgay, NhanVienId, PhongBenhVienId, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (NhanVienId === void 0) { NhanVienId = 0; }
                    if (PhongBenhVienId === void 0) { PhongBenhVienId = 0; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
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
                return BaoCaoThuPhiVienPhiQueryInfoQueryInfo;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-chi-tiet-tien-vien-phi-benh-nhan-bao-cao-thu-tien-vien-phi-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-chi-tiet-tien-vien-phi-benh-nhan-bao-cao-thu-tien-vien-phi-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-chi-tiet-tien-vien-phi-benh-nhan-bao-cao-thu-tien-vien-phi-module-es5.js.map