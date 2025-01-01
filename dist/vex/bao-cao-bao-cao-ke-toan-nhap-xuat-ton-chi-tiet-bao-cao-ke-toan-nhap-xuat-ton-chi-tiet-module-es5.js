(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[                   \n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Kế Toán', Path:''},\n                {Title:'Nhập Xuất Tồn Chi Tiết', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header\" label=\"Khoa\" bind=\"true\" url=\"BaoCao/GetTatCakhoaLookupAsync\"\n                    [(model)]=\"baoCaoSearch.KhoaPhongId\" [autoSelectFirstItem]=\"true\"\n                    (modelChange)=\"changeKhoa($event)\">\n                </app-combobox>\n\n                <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                    class=\"mt-1 on-header\" label=\"Kho\" bind=\"true\" url=\"BaoCao/GetTatCakhoTheoKhoaLookupAsync\"\n                    [(model)]=\"baoCaoSearch.KhoId\" [autoSelectFirstItem]=\"true\" (modelChange)=\"changeKho($event)\"\n                    [queryInfo]=\"{ParameterDependencies:'{KhoaId:' + baoCaoSearch.KhoaPhongId + '}', Take: 50}\">\n                </app-combobox>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <app-checkbox fxFlex=\"10%\" fxFlex.sm=\"10%\" [disabled]=\"disableCoVAT\" id=\"coVat\" class=\"mt-4 on-header\" [(model)]=\"baoCaoSearch.CoVAT\"\n                    label=\"Có VAT\">\n                </app-checkbox>\n\n                <div fxFlex=\"25%\" fxFlex.sm=\"25%\" class=\"pb-4\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n            </div>\n        </div>\n\n        <!-- <div class=\"card overflow-auto -mt-15\">\n            <kendo-grid [data]=\"gridView\" class=\"k-grid1\" [pageable]=\"true\" [resizable]=\"true\" [pageSize]=\"pageSize\"\n                [skip]=\"skip\" (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid [group]=\"groups\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\">\n\n                        <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\"\n                            style=\"margin-left: 5px;\" class=\"mt-1 on-header pb-0 mr-1\" label=\"Khoa\" bind=\"true\"\n                            url=\"BaoCao/GetTatCakhoaLookupAsync\" [(model)]=\"baoCaoSearch.KhoaPhongId\"\n                            [autoSelectFirstItem]=\"true\" (modelChange)=\"changeKhoa($event)\">\n                        </app-combobox>\n\n                        <app-combobox id=\"KhoId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" popupSettings=\"\" style=\"margin-left: 5px;\"\n                            class=\"mt-1 on-header pb-0 mr-1\" label=\"Kho\" bind=\"true\"\n                            url=\"BaoCao/GetTatCakhoTheoKhoaLookupAsync\" [(model)]=\"baoCaoSearch.KhoId\"\n                            [autoSelectFirstItem]=\"true\" (modelChange)=\"changeKho($event)\"\n                            [queryInfo]=\"{ParameterDependencies:'{KhoaId:' + baoCaoSearch.KhoaPhongId + '}', Take: 50}\">\n                        </app-combobox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" id=\"TuNgayFormat\"\n                            [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header mr-1\">\n                        </app-datetimepicker>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" id=\"DenNgayFormat\"\n                            [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header mr-1\" label=\"Đến ngày\">\n                        </app-datetimepicker>\n\n                        <app-checkbox [disabled]=\"disableCoVAT\" id=\"coVat\" class=\"mr-2\" [(model)]=\"baoCaoSearch.CoVAT\"\n                            label=\"Có VAT\">\n                        </app-checkbox>\n\n                        <div fxFlex=\"55%\" fxFlex.sm=\"55%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-1\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <span fxFlex></span>\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                    width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                        {{rowIndex + 1}}\n                    </ng-template>\n                    <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"font-weight: bold;color:#000;\">Tổng cộng :</div>\n                    </ng-template>\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"Tên thuốc, Vật tư, Hoá chất\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">Tên thuốc, Vật tư, Hoá chất</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                        width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                        width=\"{{getWidthColumn(2)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                    </kendo-grid-column>\n\n                </kendo-grid-column-group>\n\n                <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                    width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                </kendo-grid-column>\n\n                <kendo-grid-column-group title=\"Tồn đầu\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">Tồn đầu</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                        width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                        width=\"{{getWidthColumn(5)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                            <ng-container\n                                *ngTemplateOutlet=\"thanhTienTonDauKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                            </ng-container>\n                        </ng-template>\n\n                        <ng-template #thanhTienTonDauKyTemplate let-dataItem>\n                            {{dataItem.ThanhTienTonDauKy | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n\n                        <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\" let-value=\"value\"\n                            let-aggregates=\"aggregates\">\n                            <ng-container\n                                *ngTemplateOutlet=\"thanhTienTonDauKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                            </ng-container>\n                        </ng-template>\n\n                        <ng-template #thanhTienTonDauKyGroupHeaderColumnTemplate let-value=\"value\" let-dataItem\n                            let-aggregates=\"aggregates\">\n                            <strong>{{getSumThanhTien(aggregates.ThanhTienTonDauKy) | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien('ThanhTienTonDauKy') | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n\n                    </kendo-grid-column>\n\n                </kendo-grid-column-group>\n\n                <kendo-grid-column-group title=\"Nhập\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">Nhập</div>\n                    </ng-template>\n                    <kendo-grid-column-group title=\"Mua NCC\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Mua NCC</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                            width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                            width=\"{{getWidthColumn(7)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapMuaNCCTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapMuaNCCTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienNhapMuaNCCTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienNhapMuaNCCTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienNhapMuaNCCTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Tăng kiểm kê\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Tăng kiểm kê</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                            width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                            width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapTangKiemKeTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapTangKiemKeTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienNhapTangKiemKeTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienNhapTangKiemKeTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienNhapTangKiemKeTrongKy') |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Nhập hoàn trả\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Nhập hoàn trả</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                            width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                            width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapHoanTraTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapHoanTraTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienNhapHoanTraTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienNhapHoanTraTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienNhapHoanTraTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Nhập nội bộ\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Nhập nội bộ</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                            width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                            width=\"{{getWidthColumn(13)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapNoiBoTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapNoiBoTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienNhapNoiBoTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienNhapNoiBoTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienNhapNoiBoTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Khác\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Khác</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                            width=\"{{getWidthColumn(14)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                            width=\"{{getWidthColumn(15)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapKhacTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapKhacTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienNhapKhacTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienNhapKhacTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienNhapNoiBoTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n                </kendo-grid-column-group>\n\n\n                <kendo-grid-column-group title=\"Xuất\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">Xuất</div>\n                    </ng-template>\n                    <kendo-grid-column-group title=\"Xuất nội bộ\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Xuất nội bộ</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                            width=\"{{getWidthColumn(16)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                            width=\"{{getWidthColumn(17)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatNoiBoTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatNoiBoTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienXuatNoiBoTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienXuatNoiBoTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienXuatNoiBoTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Giảm kiểm kê\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Giảm kiểm kê</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                            width=\"{{getWidthColumn(18)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                            width=\"{{getWidthColumn(19)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatGiamKiemKeTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatGiamKiemKeTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienXuatNoiBoTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienXuatGiamKiemKeTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienXuatGiamKiemKeTrongKy') |\n                                    number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Trả NCC\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Trả NCC</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                            width=\"{{getWidthColumn(20)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                            width=\"{{getWidthColumn(21)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatTraNCCTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatTraNCCTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienXuatTraNCCTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienXuatTraNCCTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienXuatTraNCCTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Xuất BN\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Xuất BN</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                            width=\"{{getWidthColumn(22)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(23)}}\" title=\"{{getTitleColumn(23)}}\"\n                            width=\"{{getWidthColumn(23)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatBNTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatBNTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienXuatBNTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatBNTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatBNTrongKyGroupHeaderColumnTemplate let-value=\"value\" let-dataItem\n                                let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienXuatBNTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienXuatBNTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Xuất KH\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Xuất KH</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(24)}}\" title=\"{{getTitleColumn(24)}}\"\n                            width=\"{{getWidthColumn(24)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                            width=\"{{getWidthColumn(25)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatKHTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatKHTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienXuatKHTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatKHTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatKHTrongKyGroupHeaderColumnTemplate let-value=\"value\" let-dataItem\n                                let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienXuatKHTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienXuatKHTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                    <kendo-grid-column-group title=\"Xuất khác\">\n                        <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                            <div class=\"text-center\">Xuất khác</div>\n                        </ng-template>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(26)}}\" title=\"{{getTitleColumn(26)}}\"\n                            width=\"{{getWidthColumn(26)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(27)}}\" title=\"{{getTitleColumn(27)}}\"\n                            width=\"{{getWidthColumn(27)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatKhacTrongKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                                </ng-container>\n                            </ng-template>\n\n\n                            <ng-template #thanhTienXuatKhacTrongKyTemplate let-dataItem>\n                                {{dataItem.ThanhTienXuatKhacTrongKy | number:'0.2-2':'vi-VN'}}\n                            </ng-template>\n\n                            <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\"\n                                let-value=\"value\" let-aggregates=\"aggregates\">\n                                <ng-container\n                                    *ngTemplateOutlet=\"thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                                </ng-container>\n                            </ng-template>\n\n                            <ng-template #thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate let-value=\"value\"\n                                let-dataItem let-aggregates=\"aggregates\">\n                                <strong>{{getSumThanhTien(aggregates.ThanhTienXuatKhacTrongKy) |\n                                    number:'0.2-2':'vi-VN'}}</strong>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                <span>{{totalThanhTien('ThanhTienXuatKhacTrongKy') | number:'0.2-2':'vi-VN'}}</span>\n                            </ng-template>\n\n                        </kendo-grid-column>\n                    </kendo-grid-column-group>\n\n                </kendo-grid-column-group>\n\n\n                <kendo-grid-column-group title=\"Tồn cuối\">\n                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                        <div class=\"text-center\">Tồn cuối</div>\n                    </ng-template>\n                    <kendo-grid-column field=\"{{getFieldColumn(28)}}\" title=\"{{getTitleColumn(28)}}\"\n                        width=\"{{getWidthColumn(28)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                    </kendo-grid-column>\n                    <kendo-grid-column field=\"{{getFieldColumn(29)}}\" title=\"{{getTitleColumn(29)}}\"\n                        width=\"{{getWidthColumn(29)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                        <ng-template kendoGridCellTemplate let-dataItem=\"dataItem\" let-rowIndex=\"rowIndex\">\n                            <ng-container\n                                *ngTemplateOutlet=\"thanhTienTonCuoiKyTemplate; context:{$implicit: dataItem, rowIndex: rowIndex}\">\n                            </ng-container>\n                        </ng-template>\n\n                        <ng-template #thanhTienTonCuoiKyTemplate let-dataItem>\n                            {{dataItem.ThanhTienTonCuoiKy | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n\n                        <ng-template kendoGridGroupHeaderColumnTemplate let-group let-field=\"field\" let-value=\"value\"\n                            let-aggregates=\"aggregates\">\n                            <ng-container\n                                *ngTemplateOutlet=\"thanhTienTonCuoiKyGroupHeaderColumnTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                            </ng-container>\n                        </ng-template>\n\n                        <ng-template #thanhTienTonCuoiKyGroupHeaderColumnTemplate let-value=\"value\" let-dataItem\n                            let-aggregates=\"aggregates\">\n                            <strong>{{getSumThanhTien(aggregates.ThanhTienTonCuoiKy) | number:'0.2-2':'vi-VN'}}</strong>\n                        </ng-template>\n\n                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                            <span>{{totalThanhTien('ThanhTienTonCuoiKy') | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n\n                    </kendo-grid-column>\n\n                </kendo-grid-column-group>\n\n\n\n                <kendo-grid-column field=\"{{getFieldColumn(30)}}\" title=\"{{getTitleColumn(30)}}\"\n                    width=\"{{getWidthColumn(30)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"\n                        let-aggregates=\"aggregates\">\n                        <ng-container\n                            *ngTemplateOutlet=\"khoaGroupHeaderTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #khoaGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template>\n\n                </kendo-grid-column>\n\n                <kendo-grid-column field=\"{{getFieldColumn(31)}}\" title=\"{{getTitleColumn(31)}}\"\n                    width=\"{{getWidthColumn(31)}}\" [style]=\"{'text-align': 'left'}\"\n                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [hidden]=\"true\">\n                    <ng-template kendoGridGroupHeaderTemplate let-group let-field=\"field\" let-value=\"value\"\n                        let-aggregates=\"aggregates\">\n                        <ng-container\n                            *ngTemplateOutlet=\"nhomGroupHeaderTemplate; context:{$implicit: group,field:field,value:value,aggregates:aggregates}\">\n                        </ng-container>\n                    </ng-template>\n                    <ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n                        <strong>{{value}}</strong>\n                    </ng-template>\n\n                </kendo-grid-column>\n\n\n\n                <ng-template kendoGridNoRecordsTemplate>\n                    <span *ngIf=\"_isLoading\">Đang tải dữ liệu...</span>\n                    <span *ngIf=\"!_isLoading\">Không có dữ liệu</span>\n                </ng-template>\n                <kendo-grid-messages noRecords=\"Không có dữ liệu\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                    detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\" loading=\"Đang tải dữ liệu...\">\n                </kendo-grid-messages>\n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                        fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                            class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\"\n                            style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                            (click)=\"reFresh()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n\n            </kendo-grid>\n        </div> -->\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24tY2hpLXRpZXQvYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24tY2hpLXRpZXQtbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8ta2UtdG9hbi1uaGFwLXh1YXQtdG9uLWNoaS10aWV0XFxiYW8tY2FvLWtlLXRvYW4tbmhhcC14dWF0LXRvbi1jaGktdGlldC1saXN0XFxiYW8tY2FvLWtlLXRvYW4tbmhhcC14dWF0LXRvbi1jaGktdGlldC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWtlLXRvYW4tbmhhcC14dWF0LXRvbi1jaGktdGlldC9iYW8tY2FvLWtlLXRvYW4tbmhhcC14dWF0LXRvbi1jaGktdGlldC1saXN0L2Jhby1jYW8ta2UtdG9hbi1uaGFwLXh1YXQtdG9uLWNoaS10aWV0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24tY2hpLXRpZXQvYmFvLWNhby1rZS10b2FuLW5oYXAteHVhdC10b24tY2hpLXRpZXQtbGlzdC9iYW8tY2FvLWtlLXRvYW4tbmhhcC14dWF0LXRvbi1jaGktdGlldC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSIsIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLCAuay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4uay1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoKeToanNhapXuatTonChiTietListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonChiTietListComponent", function () { return BaoCaoKeToanNhapXuatTonChiTietListComponent; });
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
            /* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.model */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.model.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__);
            var BaoCaoKeToanNhapXuatTonChiTietListComponent = /** @class */ (function () {
                function BaoCaoKeToanNhapXuatTonChiTietListComponent(apiService, dialog, authService, notificationService, cd) {
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.cd = cd;
                    this.baoCaoSearch = new _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_model__WEBPACK_IMPORTED_MODULE_11__["BaoCaoKeToanNhapXuatTonChiTietSearch"]();
                    this.inBaoCaoKeToanNhapXuatTonChiTiet = new _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_model__WEBPACK_IMPORTED_MODULE_11__["InBaoCaoKeToanNhapXuatTonChiTiet"]();
                    this.disableCoVAT = false;
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.aggregates = [
                        { field: 'ThanhTienTonDauKy', aggregate: 'sum' },
                        { field: 'ThanhTienNhapMuaNCCTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienNhapTangKiemKeTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienNhapHoanTraTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienNhapNoiBoTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienNhapKhacTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienXuatNoiBoTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienXuatGiamKiemKeTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienXuatTraNCCTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienXuatBNTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienXuatKHTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienXuatKhacTrongKy', aggregate: 'sum' },
                        { field: 'ThanhTienTonCuoiKy', aggregate: 'sum' },
                    ];
                    this.groups = [{
                            field: 'Khoa'
                        }, {
                            field: 'Nhom',
                            aggregates: this.aggregates
                        }];
                    this.showGrid = false;
                    this.showPrintExport = false;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.heightToolbar = 140;
                    this.pageSize = 50;
                    this.skip = 0;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this._showDefaultPagerTemplate = true;
                }
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_9__["DocumentType"].BaoCaoKTNhapXuatTonChiTiet;
                    if (window.location.protocol == "http:") {
                        this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName = "http://" + window.location.host;
                    }
                    else {
                        this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName = "https://" + window.location.host;
                    }
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 200 },
                        { Field: "Ma", Title: "Mã", Width: 150 },
                        { Field: "Ten", Title: "Tên", Width: 150 },
                        { Field: "DVT", Title: "ĐVT", Width: 100 },
                        { Field: "SLTonDauKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienTonDauKy", Title: "TT", Width: 150 },
                        { Field: "SLNhapMuaNCCTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienNhapMuaNCCTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapMuaNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLNhapTangKiemKeTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienNhapTangKiemKeTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapTangKiemKeTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLNhapHoanTraTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienNhapHoanTraTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapHoanTraTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLNhapNoiBoTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienNhapNoiBoTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapNoiBoTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLNhapKhacTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienNhapKhacTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapKhacTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLXuatNoiBoTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienXuatNoiBoTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatNoiBoTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLXuatGiamKiemKeTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienXuatGiamKiemKeTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatGiamKiemKeTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLXuatTraNCCTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienXuatTraNCCTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatTraNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLXuatBNTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienXuatBNTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatBNTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatBNTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLXuatKHTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienXuatKHTrongKy", Title: "TT", Width: 150, Template: this.thanhTienXuatKHTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatKHTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLXuatKhacTrongKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienXuatKhacTrongKy", Title: "TT", Width: 150, Template: this.thanhTienNhapMuaNCCTrongKyTemplate, TemplateGroupHeaderColumn: this.thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate },
                        { Field: "SLTonCuoiKy", Title: "SL", Width: 100 },
                        { Field: "ThanhTienTonCuoiKy", Title: "TT", Width: 150, Template: this.thanhTienTonCuoiKyTemplate, TemplateGroupHeaderColumn: this.thanhTienTonCuoiKyGroupHeaderColumnTemplate },
                        { Field: "Khoa", Title: "Khoa", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.khoaGroupHeaderTemplate },
                        { Field: "Nhom", Title: "Nhóm", Width: 300, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = firstDayOfMonth;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                        this.baoCaoSearch.DenNgayFormat.setHours(23, 59, 59);
                    }
                    this.baoCaoSearch.CoVAT = true;
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.getSumThanhTien = function (value) {
                    if (this.gridView && value) {
                        return value.sum;
                    }
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.totalThanhTien = function (field) {
                    switch (field) {
                        case 'ThanhTienTonDauKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienTonDauKy; }, 0);
                            }
                        case 'ThanhTienNhapMuaNCCTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienNhapMuaNCCTrongKy; }, 0);
                            }
                        case 'ThanhTienNhapTangKiemKeTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienNhapTangKiemKeTrongKy; }, 0);
                            }
                        case 'ThanhTienNhapHoanTraTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienNhapHoanTraTrongKy; }, 0);
                            }
                        case 'ThanhTienNhapNoiBoTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienNhapNoiBoTrongKy; }, 0);
                            }
                        case 'ThanhTienNhapKhacTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienNhapKhacTrongKy; }, 0);
                            }
                        case 'ThanhTienXuatNoiBoTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienXuatNoiBoTrongKy; }, 0);
                            }
                        case 'ThanhTienXuatGiamKiemKeTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienXuatGiamKiemKeTrongKy; }, 0);
                            }
                        case 'ThanhTienXuatTraNCCTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienXuatTraNCCTrongKy; }, 0);
                            }
                        case 'ThanhTienXuatBNTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienXuatBNTrongKy; }, 0);
                            }
                        case 'ThanhTienXuatKHTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienXuatKHTrongKy; }, 0);
                            }
                        case 'ThanhTienXuatKhacTrongKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienXuatKhacTrongKy; }, 0);
                            }
                        case 'ThanhTienTonCuoiKy':
                            if (this.gridDataSource.data != undefined) {
                                return this.gridDataSource.data.reduce(function (sum, item) { return sum + item.ThanhTienTonCuoiKy; }, 0);
                            }
                    }
                };
                ;
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.pageChange = function (event) {
                    this.baoCaoSearch.Skip = event.skip;
                    this.skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.changeKhoa = function (event) {
                    if (event != undefined && event != null) {
                        this.baoCaoSearch.KhoaPhongId = event;
                    }
                    else {
                        this.baoCaoSearch.KhoaPhongId = null;
                        this.baoCaoSearch.KhoId = null;
                    }
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.changeKho = function (event) {
                    if (event && event == 6) { // kho nhà thuốc bệnh viện
                        this.disableCoVAT = true;
                        this.baoCaoSearch.CoVAT = false;
                    }
                    else {
                        this.disableCoVAT = false;
                    }
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.XemBaoCao = function () {
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
                    if (!this.baoCaoSearch.KhoId) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    this.apiService.post("BaoCao/GetDataBaoCaoKTNhapXuatTonChiTietForGridAsync", this.baoCaoSearch).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                                _this.showPrintExport = true;
                            }
                            // this.showGrid = true;
                            _this.gridDataSource.data = resultData.Data.slice();
                            _this.gridDataSource.total = _this.gridDataSource.data.length;
                            _this.gridView = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_12__["process"])(resultData.Data, { group: _this.groups });
                            _this._isLoading = false;
                            _this._isLoadingTotalPage = false;
                        }
                    });
                };
                BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.baoCaoSearch.KhoId == undefined && this.baoCaoSearch.KhoId == null) {
                        this.notificationService.showError("Kho yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "dd/mm/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "dd/mm/yyyy");
                        var khoId = 0;
                        if (this.baoCaoSearch.KhoId != undefined && this.baoCaoSearch.KhoId != null) {
                            khoId = this.baoCaoSearch.KhoId;
                        }
                        this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        this.baoCaoSearch.AdditionalSearchString = khoId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoKeToanNhapXuatTonChiTiet.HostingName;
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoKTNhapXuatTonChiTiet", this.baoCaoSearch)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoKTNhapXuatTonChiTiet" + dateTimeNow.getFullYear() + ".xlsx");
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
                return BaoCaoKeToanNhapXuatTonChiTietListComponent;
            }());
            BaoCaoKeToanNhapXuatTonChiTietListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("khoaGroupHeaderTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "khoaGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("nhomGroupHeaderTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonDauKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienTonDauKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapMuaNCCTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapMuaNCCTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapTangKiemKeTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapTangKiemKeTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapHoanTraTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapHoanTraTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapNoiBoTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapNoiBoTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapKhacTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapKhacTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatNoiBoTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatNoiBoTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatGiamKiemKeTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatGiamKiemKeTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatTraNCCTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatTraNCCTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatBNTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatBNTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKHTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatKHTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKhacTrongKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatKhacTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonCuoiKyTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienTonCuoiKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonDauKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienTonDauKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapMuaNCCTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapTangKiemKeTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapHoanTraTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapNoiBoTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienNhapKhacTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatNoiBoTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatGiamKiemKeTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatTraNCCTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatBNTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatBNTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKHTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatKHTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienXuatKhacTrongKyGroupHeaderColumnTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("thanhTienTonCuoiKyGroupHeaderColumnTemplate", { static: true })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent.prototype, "thanhTienTonCuoiKyGroupHeaderColumnTemplate", void 0);
            BaoCaoKeToanNhapXuatTonChiTietListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.scss")).default]
                })
            ], BaoCaoKeToanNhapXuatTonChiTietListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-routing.module.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-routing.module.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: BaoCaoKeToanNhapXuatTonChiTietRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonChiTietRoutingModule", function () { return BaoCaoKeToanNhapXuatTonChiTietRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoKeToanNhapXuatTonChiTietListComponent"],
                    data: {
                        title: 'Báo cáo nhập xuất tồn chi tiết',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoKTNhapXuatTonChiTiet,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
                }
            ];
            var BaoCaoKeToanNhapXuatTonChiTietRoutingModule = /** @class */ (function () {
                function BaoCaoKeToanNhapXuatTonChiTietRoutingModule() {
                }
                return BaoCaoKeToanNhapXuatTonChiTietRoutingModule;
            }());
            BaoCaoKeToanNhapXuatTonChiTietRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoKeToanNhapXuatTonChiTietRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.model.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.model.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: BaoCaoKeToanNhapXuatTonChiTietSearch, InBaoCaoKeToanNhapXuatTonChiTiet */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonChiTietSearch", function () { return BaoCaoKeToanNhapXuatTonChiTietSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoKeToanNhapXuatTonChiTiet", function () { return InBaoCaoKeToanNhapXuatTonChiTiet; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoKeToanNhapXuatTonChiTietSearch = /** @class */ (function () {
                function BaoCaoKeToanNhapXuatTonChiTietSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoaPhongId, KhoId, CoVAT, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (KhoId === void 0) { KhoId = null; }
                    if (CoVAT === void 0) { CoVAT = null; }
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
                    this.KhoaPhongId = KhoaPhongId;
                    this.KhoId = KhoId;
                    this.CoVAT = CoVAT;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoKeToanNhapXuatTonChiTietSearch;
            }());
            var InBaoCaoKeToanNhapXuatTonChiTiet = /** @class */ (function () {
                function InBaoCaoKeToanNhapXuatTonChiTiet(KhoaPhongId, KhoId, HostingName, FromDate, ToDate) {
                    if (KhoaPhongId === void 0) { KhoaPhongId = null; }
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoaPhongId = KhoaPhongId;
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoKeToanNhapXuatTonChiTiet;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.module.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet.module.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: BaoCaoKeToanNhapXuatTonChiTietModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoKeToanNhapXuatTonChiTietModule", function () { return BaoCaoKeToanNhapXuatTonChiTietModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet/bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-routing.module.ts");
            var BaoCaoKeToanNhapXuatTonChiTietModule = /** @class */ (function () {
                function BaoCaoKeToanNhapXuatTonChiTietModule() {
                }
                return BaoCaoKeToanNhapXuatTonChiTietModule;
            }());
            BaoCaoKeToanNhapXuatTonChiTietModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_list_component__WEBPACK_IMPORTED_MODULE_3__["BaoCaoKeToanNhapXuatTonChiTietListComponent"]],
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
                        _bao_cao_ke_toan_nhap_xuat_ton_chi_tiet_routing_module__WEBPACK_IMPORTED_MODULE_13__["BaoCaoKeToanNhapXuatTonChiTietRoutingModule"]
                    ]
                })
            ], BaoCaoKeToanNhapXuatTonChiTietModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-bao-cao-ke-toan-nhap-xuat-ton-chi-tiet-module-es5.js.map