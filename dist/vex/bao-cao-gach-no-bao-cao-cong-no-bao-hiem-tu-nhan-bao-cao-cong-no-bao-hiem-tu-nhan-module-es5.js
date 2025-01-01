(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-gach-no-bao-cao-cong-no-bao-hiem-tu-nhan-bao-cao-cong-no-bao-hiem-tu-nhan-module"], {
        /***/ "./node_modules/@iconify/icons-ic/delete.js": 
        /*!**************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/delete.js ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.html": 
        /*!****************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.html ***!
          \****************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                        {Title:'Công Nợ Bảo Hiểm Tư Nhân',Path:'', Active:true}          \n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"100%\" class=\"bg-app-bar px-0 h-15 border-b py-1\">\n                <app-checkbox [(model)]=\"timKiemNangCaoObj.TrangThai.DungGoi\" id=\"dungGoi\" label=\"Dùng gói\" class=\"ml-2 mt-2\"\n                    (modelChange)=\"timKiemNangCao()\">\n                </app-checkbox>\n                <app-checkbox [(model)]=\"timKiemNangCaoObj.TrangThai.KhongDungGoi\" id=\"khongDungGoi\" label=\"Không dùng gói\" class=\"ml-2 mt-2\"\n                    (modelChange)=\"timKiemNangCao()\">\n                </app-checkbox>\n\n                <app-combobox fxFlex=\"300px\" label=\"Công ty\" id=\"CongTyId\" class=\"ml-2 mt-1 mr-2 on-header\" url=\"GachNo/GetListBaoHiemTuNhan\" \n                    [(model)]=\"timKiemNangCaoObj.CongTyId\"\n                    popupSettings=\"null\" [reloadForGrid]=\"true\"\n                    [templateHeader]=\"congTyTemplateHeader\" [template]=\"congTyTemplate\" [broadcastAfterLoaded]=\"true\">\n                    <!-- (modelChange)=\"timKiemNangCao()\"  -->\n                    <ng-template #congTyTemplateHeader let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <th width=\"20%\">Mã</th>\n                                <th>Ten</th>\n                            </tr>\n                        </table>\n                    </ng-template>\n                    <ng-template #congTyTemplate let-dataItem>\n                        <table width=\"100%\" class=\"table-combobox\">\n                            <tr>\n                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                <td>{{dataItem.Ten}}</td>\n                            </tr>\n                        </table>\n                    </ng-template>\n                </app-combobox>\n                <!-- <app-daterangepicker id=\"tuNgayDenNgayCT\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 on-header\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayCT\" label=\"CT từ ngày - đến ngày\">\n                </app-daterangepicker>\n                <app-daterangepicker id=\"tuNgayDenNgayHD\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"ml-2 mr-2 mt-1 on-header\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayHD\" label=\"HĐ từ ngày - đến ngày\">\n                </app-daterangepicker> -->\n\n                <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"250px\" fxFlex.sm=\"auto\" class=\"mr-2 mt-1 on-header\"\n                    [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\">\n                </app-daterangepicker>\n                \n                <div class=\"bg-card rounded-full border px-4\" fxFlex=\"350px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                    fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                        type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\"\n                        (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                        placeholder=\"Nhập từ khóa tìm...\"/>\n                </div>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n                <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"ml-2 mt-1\" (click)=\"timKiemNangCao()\">Xem Báo\n                    Cáo</button>\n                \n                <button [matMenuTriggerFor]=\"columnFilterMenu\" style=\"opacity: 0.5;\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n                \n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of _gridColumnsFilter\">\n                        <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                            <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n                <button *ngIf=\"ishowView == true\" style=\"opacity: 0.5;\" (click)=\"exportExcel()\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button>\n            </div>\n            <kendo-grid fxFlex=\"100%\" [data]=\"gridView\" class=\"k-grid1 shared-header grid-bao-cao\" [pageable]=\"true\" [resizable]=\"true\"\n                [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\"\n                id=\"baoCaoCongNoCongTyBhtn\" #baoCaoCongNoCongTyBhtn\n                (columnResize)=\"columnResize($event)\">\n                \n                <kendo-grid-span-column>\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\" width=\"{{getWidthColumn(0)}}\"\n                    [style]=\"{'text-align': 'center'}\">\n                    <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template> -->\n                </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\" width=\"{{getWidthColumn(1)}}\"\n                        [style]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\" width=\"{{getWidthColumn(2)}}\"\n                        [style]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\" width=\"{{getWidthColumn(3)}}\"\n                        [style]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\" width=\"{{getWidthColumn(4)}}\"\n                        [style]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\" width=\"{{getWidthColumn(5)}}\"\n                        [style]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\" width=\"{{getWidthColumn(6)}}\"\n                        [style]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div style=\"text-align: left;\">{{ dataItem.TenCongTy}}</div>\n                    </ng-template>\n                </kendo-grid-span-column>\n                <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\" width=\"{{getWidthColumn(7)}}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div style=\"font-weight: normal;\" *ngIf=\"dataItem.CongTyId == 0\">{{dataItem.DienGiai}}</div>\n                    </ng-template>\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"font-weight: bold;color:#000;text-align: left;\">Tổng Cộng :</div>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\" width=\"{{getWidthColumn(8)}}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div style=\"font-weight: normal;\" *ngIf=\"dataItem.CongTyId == 0\">{{dataItem.MaTienTe}}</div>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\" width=\"{{getWidthColumn(9)}}\"\n                    [style]=\"{'text-align': 'center'}\"  [headerStyle]=\"{'text-align': 'right'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div style=\"text-align: right;\" [style.font-weight]=\"dataItem.CongTyId == 0 ? 'normal' : 'bold'\" *ngIf=\"dataItem.PhatSinhNo != null\">\n                            {{ dataItem.PhatSinhNo | number:'0.2-2':'vi-VN'}}</div>\n                        <div style=\"text-align: right;\" [style.font-weight]=\"dataItem.CongTyId == 0 ? 'normal' : 'bold'\" *ngIf=\"dataItem.PhatSinhNo == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template>\n            \n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalPhatSinhNo| number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\" width=\"{{getWidthColumn(10)}}\"\n                    [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'right'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div style=\"text-align: right;\" [style.font-weight]=\"dataItem.CongTyId == 0 ? 'normal' : 'bold'\" *ngIf=\"dataItem.PhatSinhCo != null\">\n                            {{ dataItem.PhatSinhCo | number:'0.2-2':'vi-VN'}}</div>\n                        <div style=\"text-align: right;\" [style.font-weight]=\"dataItem.CongTyId == 0 ? 'normal' : 'bold'\" *ngIf=\"dataItem.PhatSinhCo == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template>\n            \n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalPhatSinhCo| number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\" width=\"{{getWidthColumn(11)}}\"\n                    [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'right'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <ng-container *ngIf=\"dataItem.CongTyId == 0\">\n                            <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.DauKyNo != null\">\n                                {{ dataItem.DauKyNo | number:'0.2-2':'vi-VN'}}</div>\n                            <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.DauKyNo == null\">\n                                {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-container>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\" width=\"{{getWidthColumn(12)}}\"\n                    [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'right'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <div *ngIf=\"dataItem.CongTyId != 0\" style=\"font-weight: bold;color:orange;text-align: left;\">Nợ cuối kỳ :</div>\n                        <ng-container *ngIf=\"dataItem.CongTyId == 0\">\n                            <div style=\"text-align: right; font-weight: normal;\" *ngIf=\"dataItem.DauKyCo != null\">\n                                {{ dataItem.DauKyCo | number:'0.2-2':'vi-VN'}}</div>\n                            <div style=\"text-align: right; font-weight: normal;\" *ngIf=\"dataItem.DauKyCo == null\">\n                                {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-container>\n                    </ng-template>\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"font-weight: bold;color:red;text-align: left;\">Nợ cuối kỳ :</div>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\" width=\"{{getWidthColumn(13)}}\"\n                    [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'right'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <ng-container *ngIf=\"dataItem.CongTyId != 0\">\n                            <div style=\"text-align: right;color:orange\" *ngIf=\"dataItem.CuoiKyNo != null\">\n                                {{ dataItem.CuoiKyNo | number:'0.2-2':'vi-VN'}}</div>\n                            <div style=\"text-align: right;color:orange\" *ngIf=\"dataItem.CuoiKyNo == null\">\n                                {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-container>\n                    \n                        <ng-container *ngIf=\"dataItem.CongTyId == 0\">\n                            <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.CuoiKyNo != null\">\n                                {{ dataItem.CuoiKyNo | number:'0.2-2':'vi-VN'}}</div>\n                            <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.CuoiKyNo == null\">\n                                {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-container>\n                    </ng-template>\n            \n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;color:red\">{{totalCuoiKyNo| number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\" width=\"{{getWidthColumn(14)}}\"\n                    [style]=\"{'text-align': 'center'}\" [headerStyle]=\"{'text-align': 'right'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        <ng-container *ngIf=\"dataItem.CongTyId == 0\">\n                            <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.CuoiKyCo != null\">\n                                {{ dataItem.CuoiKyCo | number:'0.2-2':'vi-VN'}}</div>\n                            <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.CuoiKyCo == null\">\n                                {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-container>\n                    </ng-template>\n                </kendo-grid-column>\n                <kendo-grid-messages [hidden]=\"!_isMessage\" noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                </kendo-grid-messages>\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span style=\"font-weight: normal;\" *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span style=\"font-weight: normal;\" *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between\" fxFlex=\"100%\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                        <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                    </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\" (click)=\"timKiemNangCao(true)\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n            \n                <!-- Child ---------------------------------------------------------------->\n                <ng-template kendoGridDetailTemplate let-dataItem=\"dataItem\" [kendoGridDetailTemplateShowIf]=\"condition\">\n                    <app-grid [useHeaderDefault]=\"false\" \n                        class=\"k-grid-crollbar\"\n                        urlGetData=\"GachNo/GetChiTietBaoCaoGachNoCongTyBaoHiemTuNhanForGrid\" urlGetTotalPage=\"GachNo/GetTotalChiTietBaoCaoGachNoCongTyBaoHiemTuNhanForGrid\"\n                        [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [lazyLoadPage]=\"true\" [checkboxAble]=\"false\"\n                        [additionalSearchString]=\"queryString\" [searchString]=\"dataItem.CongTyId+''\"\n                        [autoHeight]=\"true\" [useActionDefault]=\"false\" [pageSize]=\"15\">\n                    </app-grid>\n                </ng-template>\n            \n            </kendo-grid>\n        </div>\n            <ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n                {{rowIndex + 1}}\n            </ng-template>\n\n            <ng-template #maTiepNhantemplate let-dataItem>\n                <!-- <a *ngIf=\"dataItem.YeuCauTiepNhanId != 0\" (click)=\"xemChiTietThuTien(dataItem)\">{{dataItem.MaTiepNhan}}</a> -->\n                <ng-container *ngIf=\"dataItem.YeuCauTiepNhanId != 0\">{{dataItem.MaTiepNhan}}</ng-container>\n            </ng-template>\n\n            <ng-template #ngayChungTuTemplate let-dataItem>\n                {{dataItem.NgayChungTuDisplay}}\n            </ng-template>\n            <ng-template #ngayHopDongTemplate let-dataItem>\n                {{dataItem.NgayHoaDonDisplay}}\n            </ng-template>\n            <ng-template #phatSinhNoTemplate let-dataItem>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.PhatSinhNo != null\">\n                    {{ dataItem.PhatSinhNo | number:'0.2-2':'vi-VN'}}</div>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.PhatSinhNo == null\">\n                    {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template>\n            <ng-template #phatSinhCoTemplate let-dataItem>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.PhatSinhCo != null\">\n                    {{ dataItem.PhatSinhCo | number:'0.2-2':'vi-VN'}}</div>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.PhatSinhCo == null\">\n                    {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template>\n            <ng-template #phatSinhNoGroupFooterTemplate let-aggregates>\n                {{aggregates.PhatSinhNo.sum | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #phatSinhCoGroupFooterTemplate let-aggregates>\n                {{aggregates.PhatSinhCo.sum | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #phatSinhNoFooterTemplate let-dataItem>\n                {{dataItem.PhatSinhNo | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n            <ng-template #phatSinhCoFooterTemplate let-dataItem>\n                {{dataItem.PhatSinhCo | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n\n            <ng-template #dauKyNoTemplate let-dataItem>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.DauKyNo != null\">\n                    {{ dataItem.DauKyNo | number:'0.2-2':'vi-VN'}}</div>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.DauKyNo == null\">\n                    {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template>\n            <ng-template #dauKyCoTemplate let-dataItem>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.DauKyCo != null\">\n                    {{ dataItem.DauKyCo | number:'0.2-2':'vi-VN'}}</div>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.DauKyCo == null\">\n                    {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template>\n            <ng-template #cuoiKyNoTemplate let-dataItem>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.CuoiKyNo != null\">\n                    {{ dataItem.CuoiKyNo | number:'0.2-2':'vi-VN'}}</div>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.CuoiKyNo == null\">\n                    {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template>\n            <ng-template #cuoiKyCoTemplate let-dataItem>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.CuoiKyCo != null\">\n                    {{ dataItem.CuoiKyCo | number:'0.2-2':'vi-VN'}}</div>\n                <div style=\"text-align: right;\" *ngIf=\"dataItem.CuoiKyCo == null\">\n                    {{ 0 | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template>\n            \n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-combobox fxFlex=\"300px\" label=\"Công ty\" id=\"CongTyId\" class=\"ml-2 mt-5 mr-2 on-header\" url=\"GachNo/GetListBaoHiemTuNhan\" \n                        [(model)]=\"timKiemNangCaoObj.CongTyId\"\n                        popupSettings=\"null\" [reloadForGrid]=\"true\"\n                        [templateHeader]=\"congTyTemplateHeader\" [template]=\"congTyTemplate\" [broadcastAfterLoaded]=\"true\">\n                        <!-- (modelChange)=\"timKiemNangCao()\"  -->\n                        <ng-template #congTyTemplateHeader let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <th width=\"20%\">Mã</th>\n                                    <th>Ten</th>\n                                </tr>\n                            </table>\n                        </ng-template>\n                        <ng-template #congTyTemplate let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td width=\"20%\">{{dataItem.Ma}}</td>\n                                    <td>{{dataItem.Ten}}</td>\n                                </tr>\n                            </table>\n                        </ng-template>\n                    </app-combobox>\n                    <app-daterangepicker id=\"tuNgayDenNgayCT\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 on-header\"\n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayCT\" label=\"CT từ ngày - đến ngày\">\n                        <!-- (modelChange)=\"timKiemNangCao()\" -->\n                    </app-daterangepicker>\n                    <app-daterangepicker id=\"tuNgayDenNgayHD\" fxFlex=\"300px\" fxFlex.sm=\"auto\" class=\"mt-1 ml-2 mr-2 on-header\"\n                        [(model)]=\"timKiemNangCaoObj.TuNgayDenNgayHD\" label=\"HĐ từ ngày - đến ngày\">\n                        <!-- (modelChange)=\"timKiemNangCao()\" -->\n                    </app-daterangepicker>\n                    \n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa tìm...\" />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.scss": 
        /*!**************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.scss ***!
          \**************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vZ2FjaC1uby9iYW8tY2FvLWNvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi9iYW8tY2FvLWNvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcZ2FjaC1ub1xcYmFvLWNhby1jb25nLW5vLWJhby1oaWVtLXR1LW5oYW5cXGJhby1jYW8tY29uZy1uby1iYW8taGllbS10dS1uaGFuLWxpc3RcXGJhby1jYW8tY29uZy1uby1iYW8taGllbS10dS1uaGFuLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2dhY2gtbm8vYmFvLWNhby1jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4vYmFvLWNhby1jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdC9iYW8tY2FvLWNvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2dhY2gtbm8vYmFvLWNhby1jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4vYmFvLWNhby1jb25nLW5vLWJhby1oaWVtLXR1LW5oYW4tbGlzdC9iYW8tY2FvLWNvbmctbm8tYmFvLWhpZW0tdHUtbmhhbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.ts": 
        /*!************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.ts ***!
          \************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoCongNoBaoHiemTuNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoCongNoBaoHiemTuNhanListComponent", function () { return BaoCaoCongNoBaoHiemTuNhanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/restore */ "./node_modules/@iconify/icons-ic/restore.js");
            /* harmony import */ var _iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/delete */ "./node_modules/@iconify/icons-ic/delete.js");
            /* harmony import */ var _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_modules_main_ke_toan_cong_no_bao_hiem_tu_nhan_cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model */ "./src/app/modules/main/ke-toan/cong-no-bao-hiem-tu-nhan/cong-no-bao-hiem-tu-nhan.model.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/grid/grid.model */ "./src/app/shared/component/grid/grid.model.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var BaoCaoCongNoBaoHiemTuNhanListComponent = /** @class */ (function () {
                function BaoCaoCongNoBaoHiemTuNhanListComponent(apiService, dialog, authService, notificationService, router, route, location) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icRestore = _iconify_icons_ic_restore__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icDelete = _iconify_icons_ic_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.gridColumns = [];
                    this.groups = [{ field: 'TaiKhoan', dir: null, aggregates: [{ field: 'PhatSinhNo', aggregate: 'sum' }, { field: 'PhatSinhCo', aggregate: 'sum' }] }];
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                    this.timKiemNangCaoObj = new src_app_modules_main_ke_toan_cong_no_bao_hiem_tu_nhan_cong_no_bao_hiem_tu_nhan_model__WEBPACK_IMPORTED_MODULE_11__["CongNoBaoHiemTuNhanTimKiem"]();
                    this.baseRoute = "/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan";
                    this.gridData = [];
                    this.gridDataDetail = [];
                    this.pageSize = 50;
                    this.skip = 0;
                    this.take = 50;
                    this.sort = [{
                            field: 'TenCongTy',
                            dir: 'asc'
                        }];
                    this.ishowViewData = false;
                    this._isLoading = false;
                    this._isMessage = false;
                    this.ishowView = false;
                    this._isLoadingTotalPage = false;
                    this._isCheckColumnFilter = true;
                    this._gridColumnsFilter = [];
                    this.totalPhatSinhNo = 0;
                    this.totalPhatSinhCo = 0;
                    this.totalCuoiKyNo = 0;
                }
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].BaoCaoCongNoCongTyBhtn;
                    this.gridColumns = [
                        { Field: "STT", Title: "#", Width: 20, Template: this.sttTemplate },
                        { Field: "TaiKhoan", Title: "Tài khoản", Width: 100 },
                        { Field: "MaTiepNhan", Title: "Mã TN", Width: 120, Template: this.maTiepNhantemplate },
                        { Field: "SoChungTu", Title: "Số CT", Width: 120 },
                        { Field: "NgayChungTu", Title: "Ngày CT", Width: 100, Template: this.ngayChungTuTemplate },
                        { Field: "SoHoaDon", Title: "Số HĐ", Width: 120 },
                        { Field: "NgayHoaDon", Title: "Ngày HĐ", Width: 100, Template: this.ngayHopDongTemplate },
                        { Field: "DienGiai", Title: "Diễn giải", Width: 180 },
                        { Field: "MaTienTe", Title: "Mã tiền tệ", Width: 100 },
                        { Field: "PhatSinhNo", Title: "Phát sinh nợ", Width: 140, Template: this.phatSinhNoTemplate },
                        { Field: "PhatSinhCo", Title: "Phát sinh có", Width: 140, Template: this.phatSinhCoTemplate },
                        { Field: "DauKyNo", Title: "Đầu kỳ nợ", Width: 140, Template: this.dauKyNoTemplate },
                        { Field: "DauKyCo", Title: "Đầu kỳ có", Width: 140, Template: this.dauKyCoTemplate },
                        { Field: "CuoiKyNo", Title: "Cuối kỳ nợ", Width: 140, Template: this.cuoiKyNoTemplate },
                        { Field: "CuoiKyCo", Title: "Cuối kỳ có", Width: 140, Template: this.cuoiKyCoTemplate } //14
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                    var minDateTuNgay = new Date();
                    minDateTuNgay.setHours(0, 0, 0, 0);
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].getItem("additionalSearchStringBaoCaoCongNoCongTyBHTNList");
                            if (additionalSearchString != null) {
                                this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                                }
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                                }
                                this.queryString = additionalSearchString;
                                hasLocalSearchString = true;
                                this.timKiemNangCao();
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].removeItem("additionalSearchStringBaoCaoCongNoCongTyBHTNList");
                        this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate
                            = this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate
                                = this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate
                                    = this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate
                                        //= this.timKiemNangCaoObj.TuNgayDenNgay.startDate
                                        = this.timKiemNangCaoObj.TuNgayDenNgay.endDate
                                            = minDateTuNgay;
                        var firstDay = new Date(minDateTuNgay.getFullYear(), minDateTuNgay.getMonth(), 1);
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = firstDay;
                    }
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.searchChanges = function (event) {
                    if (event != undefined && (event == null || event == "")) {
                        this.timKiemNangCao();
                    }
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.timKiemNangCao();
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.timKiemNangCao = function (refresh) {
                    var _this = this;
                    if (refresh === void 0) { refresh = false; }
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    this._isMessage = true;
                    this._isLoading = true;
                    // // kiểm tra ngày CT
                    // if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate != null) {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.startDate, "mm/dd/yyyy");
                    // }
                    // else {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.TuNgay = null;
                    // }
                    // if (this.timKiemNangCaoObj.TuNgayDenNgayCT != null && this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate != null) {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayCT.endDate, "mm/dd/yyyy");
                    // }
                    // else
                    // {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayCT.DenNgay = null;
                    // }
                    // // kiểm tra ngày HD
                    // if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate != null) {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.startDate, "mm/dd/yyyy");
                    // }
                    // else {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.TuNgay = null;
                    // }
                    // if (this.timKiemNangCaoObj.TuNgayDenNgayHD != null && this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate != null) {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = CommonService.formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgayHD.endDate, "mm/dd/yyyy");
                    // }
                    // else
                    // {
                    //   this.timKiemNangCaoObj.TuNgayDenNgayHD.DenNgay = null;
                    // }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    }
                    if (!refresh) {
                        this.queryString = JSON.stringify(this.timKiemNangCaoObj);
                    }
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_22__["LocalStorageHelper"].setItem("additionalSearchStringBaoCaoCongNoCongTyBHTNList", this.queryString);
                    var searchText = this.timKiemNangCaoObj.SearchString != undefined ? this.timKiemNangCaoObj.SearchString : '';
                    searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].convertSpecialXML(searchText);
                    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
                    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
                    var queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: this.queryString, sort: this.sort, lazyLoadPage: true };
                    this._isLoadingTotalPage = true;
                    this.apiService.post("GachNo/GetBaoCaoGachNoCongTyBaoHiemTuNhan", queryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            var dataSource = resultData.DataSource;
                            _this.totalPhatSinhNo = resultData.TotalPhatSinhNo;
                            _this.totalPhatSinhCo = resultData.TotalPhatSinhCo;
                            _this.totalCuoiKyNo = resultData.TotalCuoiKyNo;
                            _this.gridView = {
                                data: dataSource.Data,
                                total: dataSource.TotalRowCount
                            };
                            _this.gridView.data.forEach(function (item, idx) {
                                _this.gridMaster.collapseRow(idx);
                            });
                            if (_this.gridView.data == null)
                                _this._isMessage = true;
                        }
                        if (_this.gridView.total != 0) {
                            _this.ishowView = true;
                        }
                        else {
                            _this.ishowView = false;
                        }
                        _this._isLoading = false;
                        _this._isLoadingTotalPage = false;
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this._isLoading = false;
                        _this._isLoadingTotalPage = false;
                    });
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.columnResize = function (event) {
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
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.getMinWidthColumn = function (minWidth) {
                    var widthParent = jQuery("#baoCaoCongNoCongTyBhtn").parent().width();
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
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    this.timKiemNangCao();
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
                        var queryGridInfo = new src_app_shared_component_grid_grid_model__WEBPACK_IMPORTED_MODULE_13__["GridQueryInfo"](this.skip, this.pageSize, this.pageSize, "", this.queryString, this.sort, true);
                        this.apiService.postExportExcel("GachNo/ExportBaoCaoCongNoCongTyBaoHiemTuNhan", queryGridInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoCongNoCongTyBaoHiemTuNhan" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.condition = function (dataItem) {
                    return dataItem.CongTyId != 0;
                };
                BaoCaoCongNoBaoHiemTuNhanListComponent.prototype.xemChiTietThuTien = function (dataItem) {
                    // this.router.navigateByUrl("/xac-nhan-thu-tien-da-hoan-thanh/thong-tin-chi-tiet-xac-nhan-hoan-thanh/" + dataItem.YeuCauTiepNhanId);
                    //this.router.navigateByUrl("danh-sach-thu-dich-vu/thong-tin-chi-tiet-da-thu-tien/" + dataItem.YeuCauTiepNhanId + "?loaiThanhToan=1"); <= test
                };
                return BaoCaoCongNoBaoHiemTuNhanListComponent;
            }());
            BaoCaoCongNoBaoHiemTuNhanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_19__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_23__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayChungTuTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "ngayChungTuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayHopDongTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "ngayHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTiepNhantemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "maTiepNhantemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatSinhNoTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "phatSinhNoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatSinhCoTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "phatSinhCoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatSinhNoGroupFooterTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "phatSinhNoGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatSinhCoGroupFooterTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "phatSinhCoGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatSinhNoFooterTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "phatSinhNoFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('phatSinhCoFooterTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "phatSinhCoFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dauKyNoTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "dauKyNoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dauKyCoTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "dauKyCoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cuoiKyNoTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "cuoiKyNoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cuoiKyCoTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "cuoiKyCoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoCongNoCongTyBhtn', { static: true })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent.prototype, "gridMaster", void 0);
            BaoCaoCongNoBaoHiemTuNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-cong-no-bao-hiem-tu-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-cong-no-bao-hiem-tu-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-cong-no-bao-hiem-tu-nhan-list.component.scss */ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.scss")).default]
                })
            ], BaoCaoCongNoBaoHiemTuNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-routing.module.ts": 
        /*!**********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-routing.module.ts ***!
          \**********************************************************************************************************************************/
        /*! exports provided: BaoCaoCongNoBaoHiemTuNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoCongNoBaoHiemTuNhanRoutingModule", function () { return BaoCaoCongNoBaoHiemTuNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_cong_no_bao_hiem_tu_nhan_list_bao_cao_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component */ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_cong_no_bao_hiem_tu_nhan_list_bao_cao_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoCongNoBaoHiemTuNhanListComponent"],
                    data: {
                        title: 'Báo cáo công nợ công ty bảo hiểm tư nhân',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoCongNoCongTyBhtn,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var BaoCaoCongNoBaoHiemTuNhanRoutingModule = /** @class */ (function () {
                function BaoCaoCongNoBaoHiemTuNhanRoutingModule() {
                }
                return BaoCaoCongNoBaoHiemTuNhanRoutingModule;
            }());
            BaoCaoCongNoBaoHiemTuNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoCongNoBaoHiemTuNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan.module.ts": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan.module.ts ***!
          \**************************************************************************************************************************/
        /*! exports provided: BaoCaoCongNoBaoHiemTuNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoCongNoBaoHiemTuNhanModule", function () { return BaoCaoCongNoBaoHiemTuNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _bao_cao_cong_no_bao_hiem_tu_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-cong-no-bao-hiem-tu-nhan-routing.module */ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-routing.module.ts");
            /* harmony import */ var _bao_cao_cong_no_bao_hiem_tu_nhan_list_bao_cao_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component */ "./src/app/modules/main/bao-cao/gach-no/bao-cao-cong-no-bao-hiem-tu-nhan/bao-cao-cong-no-bao-hiem-tu-nhan-list/bao-cao-cong-no-bao-hiem-tu-nhan-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            var BaoCaoCongNoBaoHiemTuNhanModule = /** @class */ (function () {
                function BaoCaoCongNoBaoHiemTuNhanModule() {
                }
                return BaoCaoCongNoBaoHiemTuNhanModule;
            }());
            BaoCaoCongNoBaoHiemTuNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_cong_no_bao_hiem_tu_nhan_list_bao_cao_cong_no_bao_hiem_tu_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__["BaoCaoCongNoBaoHiemTuNhanListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_cong_no_bao_hiem_tu_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["BaoCaoCongNoBaoHiemTuNhanRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_14__["GridModule"]
                    ]
                })
            ], BaoCaoCongNoBaoHiemTuNhanModule);
            /***/ 
        }),
        /***/ "./src/app/shared/component/grid/grid.model.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/shared/component/grid/grid.model.ts ***!
          \*****************************************************/
        /*! exports provided: GridQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridQueryInfo", function () { return GridQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GridQueryInfo = /** @class */ (function () {
                function GridQueryInfo(skip, take, pageSize, searchString, additionalSearchString, sort, lazyLoadPage) {
                    this.skip = skip;
                    this.take = take;
                    this.pageSize = pageSize;
                    this.searchString = searchString;
                    this.additionalSearchString = additionalSearchString;
                    this.sort = sort;
                    this.lazyLoadPage = lazyLoadPage;
                }
                return GridQueryInfo;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-gach-no-bao-cao-cong-no-bao-hiem-tu-nhan-bao-cao-cong-no-bao-hiem-tu-nhan-module-es2015.js.map
//# sourceMappingURL=bao-cao-gach-no-bao-cao-cong-no-bao-hiem-tu-nhan-bao-cao-cong-no-bao-hiem-tu-nhan-module-es5.js.map
//# sourceMappingURL=bao-cao-gach-no-bao-cao-cong-no-bao-hiem-tu-nhan-bao-cao-cong-no-bao-hiem-tu-nhan-module-es5.js.map