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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Phẫu Thuật', Path:''},\n                {Title:'Sổ Phúc Trình Phẫu Thuật Thủ Thuật', Path:'', Active:true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n\n            <kendo-grid #baoCaoGrid id=\"baoCaoGrid\" [pageable]=\"true\" [height]=\"height\" [resizable]=\"true\"\n                [pageSize]=\"pageSize\" [skip]=\"skip\" (pageChange)=\"pageChange($event)\" [data]=\"gridDataSource\"\n                class=\"grid-bao-cao grid-custom-toolbar\">\n\n                <ng-template kendoGridToolbarTemplate>\n                    <div class=\"bg-app-bar px-3  border-b sticky left-0\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                        <!-- <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToSend=\"khoa\" class=\"mt-1 on-header\"\n                            popupSettings=\"null\" [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" label=\"Khoa\"\n                            url=\"GiuongBenh/GetListKhoaPhong\" bind=\"true\" [(model)]=\"baoCaoSearch.KhoaId\">\n                        </app-combobox>\n                        <ng-template #khoaTemplateHeader let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <th width=\"30%\">Mã</th>\n                                    <th>Tên</th>\n                                </tr>\n                            </table>\n                        </ng-template>\n                        <ng-template #khoaTemplate let-dataItem>\n                            <table width=\"100%\" class=\"table-combobox\">\n                                <tr>\n                                    <td width=\"30%\">{{dataItem.Ma}}</td>\n                                    <td>{{dataItem.Ten}}</td>\n                                </tr>\n                            </table>\n                        </ng-template> -->\n                    \n                        <app-multiselect fxFlex=\"20%\" [(model)]=\"baoCaoSearch.KhoaPhongIds\"\n                            (modelChange)=\"changeKhoa($event)\" [modelText]=\"\" label=\"Khoa\" class=\"on-header item-no-padding\"\n                            [template]=\"khoaPhongTemplate\" [templateHeader]=\"khoaPhongTemplateHeader\" [popupSettings]=\"null\"\n                            [autoClose]=\"false\" url=\"DichVuKyThuatBenhVien/GetKhoaKham\">\n                            <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <th width=\"20%\">Mã</th>\n                                        <th>Tên</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #khoaPhongTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-multiselect>\n                        \n                        <app-multiselect #noiThucHien fxFlex=\"20%\" [(model)]=\"baoCaoSearch.NoiThucHienIds\"\n                            [modelText]=\"\" label=\"Nơi thực hiện\" class=\"on-header item-no-padding\" [template]=\"phongBenhVienTemplate\"\n                            [queryInfo]=\"queryNoiThucHien\" url=\"DichVuKyThuatBenhVien/GetPhongKhamTheoDichVuKyThuatBenhVien\"\n                            [autoClose]=\"false\" [hierarchyKeyToSend]=\"'NoiThucHienIds'\" [popupSettings]=\"null\">\n                            <ng-template #phongBenhVienTemplate let-dataItem>\n                                <div>\n                                    <input type=\"checkbox\" class=\"k-checkbox\" [checked]=\"isItemSelected(dataItem)\">\n                                    <label [ngClass]=\"dataItem.KhoaId !== null ? 'item-multi-child' : 'item-multi-parent'\"\n                                        class=\"k-checkbox-label\">{{dataItem.DisplayName}}</label>\n                                </div>\n                            </ng-template>\n                        </app-multiselect>\n\n                        <app-checkbox [(model)]=\"baoCaoSearch.LaPhauThuat\" \n                            id=\"laPhauThuat\" label=\"Phẫu thuật\" class=\"ml-2\"> \n                        </app-checkbox>\n                        <app-checkbox [(model)]=\"baoCaoSearch.LaThuThuat\" \n                            id=\"laThuThuat\" label=\"Thủ thuật\" class=\"ml-2\"> \n                        </app-checkbox>\n\n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                            [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                        </app-datetimepicker>\n                    \n                        <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                            [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                        </app-datetimepicker>\n                    \n                        <div fxFlex=\"20%\" fxFlex.sm=\"20%\" class=\"pb-0\">\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\" (click)=\"XemBaoCao()\">Xem\n                                Báo Cáo\n                            </button>\n                            <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                                (click)=\"exportExcel()\">Xuất Excel</button>\n                        </div>\n\n                        <!-- <span fxFlex></span> -->\n\n                        <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                            kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n\n                        <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                            <div *ngFor=\"let column of gridColumns\">\n                                <button *ngIf=\"column.Title != ''\"\n                                    class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                    <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                            </div>\n                        </mat-menu>\n                    </div>\n                </ng-template>\n\n                <ng-container *ngFor=\"let column of gridColumns, index as i\">\n                    <ng-container \n                    *ngIf=\"column.Field != 'ChuanDoanTruocPt' \n                        && column.Field != 'ChuanDoanSauPt' \n                        && column.Field != 'ThoiGianPhauThuatStart' \n                        && column.Field != 'ThoiGianPhauThuatEnd'\">\n                        <kendo-grid-column field=\"{{column.Field}}\" title=\"{{column.Title}}\" width=\"{{getWidthColumn(i)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [style]=\"{'text-align': 'left'}\">\n                            <ng-container [ngSwitch]=\"column.Field\">\n                                <ng-template *ngSwitchCase=\"'STT'\" kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    {{rowIndex + 1}}\n                                </ng-template>\n                                <ng-template *ngSwitchCase=\"'SoLuong'\" kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(column.Field, dataItem) | number}}</div>\n                                </ng-template>\n                                <ng-template *ngSwitchCase=\"'DonGia'\" kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(column.Field, dataItem) | number}}</div>\n                                </ng-template>\n\n                                <ng-template *ngSwitchDefault kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(column.Field, dataItem)}}</div>\n                                </ng-template>\n                            </ng-container>\n                        </kendo-grid-column>\n                    </ng-container>\n                    <ng-container \n                    *ngIf=\"column.Field == 'ChuanDoanTruocPt'\">\n                        <kendo-grid-column-group title=\"Chẩn đoán\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">\n                                    {{'Chẩn đoán'}}\n                                </div>\n                            </ng-template>\n\n                            <kendo-grid-column kendoTooltip field=\"{{getFieldColumn(i)}}\" title=\"{{getTitleColumn(i)}}\" width=\"{{getWidthColumn(i)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [style]=\"{'text-align': 'left'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(getFieldColumn(i), dataItem)}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column kendoTooltip field=\"{{getFieldColumn(i+1)}}\" title=\"{{getTitleColumn(i+1)}}\" width=\"{{getWidthColumn(i+1)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [style]=\"{'text-align': 'left'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(getFieldColumn(i+1), dataItem)}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                    </ng-container>\n\n                    <ng-container \n                    *ngIf=\"column.Field == 'ThoiGianPhauThuatStart'\">\n                        <kendo-grid-column-group title=\"Thời gian phẫu thuật\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">\n                                    {{'Thời gian phẫu thuật'}}\n                                </div>\n                            </ng-template>\n\n                            <kendo-grid-column kendoTooltip field=\"{{getFieldColumn(i)}}\" title=\"{{getTitleColumn(i)}}\" width=\"{{getWidthColumn(i)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [style]=\"{'text-align': 'left'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(getFieldColumn(i), dataItem)}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column kendoTooltip field=\"{{getFieldColumn(i+1)}}\" title=\"{{getTitleColumn(i+1)}}\" width=\"{{getWidthColumn(i+1)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\" [style]=\"{'text-align': 'left'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div class=\"reverse-ellipsis r\" style=\"text-align: left;\">{{ getValueByName(getFieldColumn(i+1), dataItem)}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                    </ng-container>\n                </ng-container>\n\n                <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\"\n                    detailCollapse=\"Thu gọn chi tiết\">\n                </kendo-grid-messages>\n                \n                <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                    <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-between\"\n                        fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                        <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                        <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                        </kendo-pager-numeric-buttons>\n                        <button *ngIf=\"_isLoadingTotalPage\" kendoButton class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                            <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                        </button>\n                        <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                        <kendo-pager-info></kendo-pager-info>\n                        <div kendoTooltip class=\"k-icon k-i-refresh\" style=\"order: 10;cursor: pointer; align-self: center;\"\n                            title=\"Làm mới\" (click)=\"XemBaoCao()\"></div>\n                        <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                    </div>\n                </ng-template>\n            </kendo-grid>\n\n            <!-- <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" hierarchyKeyToSend=\"khoa\" class=\"mt-1 on-header\"\n                    popupSettings=\"null\" [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" label=\"Khoa\"\n                    url=\"GiuongBenh/GetListKhoaPhong\" bind=\"true\" [(model)]=\"baoCaoSearch.KhoaId\">\n                </app-combobox>\n\n                <ng-template #khoaTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"30%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #khoaTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgayFormat\" #tiepnhantu id=\"TuNgayFormat\"\n                    [maxDate]=\"baoCaoSearch.DenNgayFormat\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgayFormat\" #tiepnhanden id=\"DenNgayFormat\"\n                    [minDate]=\"baoCaoSearch.TuNgayFormat\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"35%\" fxFlex.sm=\"35%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo\n                    </button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"exportExcel()\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [autoHeight]=\"true\" [checkboxAble]=\"false\"\n                        [showStt]=\"true\" [pageable]=\"true\" urlGetData=\"BaoCao/GetDataBaoCaoSoPhucTrinhPhauThuatThuThuatForGridAsync\" urlGetTotalPage=\"BaoCao/GetTotalPageBaoCaoSoPhucTrinhPhauThuatThuThuatForGridAsync\">\n                    </app-grid>\n                </div>\n            </div> -->\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.scss": 
        /*!************************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.scss ***!
          \************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid-toolbar {\n  padding: 0px !important;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.k-list {\n  height: 100%;\n  width: 100%;\n  padding-right: 17px;\n  overflow-y: scroll;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1zby1waHVjLXRyaW5oLXBoYXUtdGh1YXQtdGh1LXRodWF0L2Jhby1jYW8tc28tcGh1Yy10cmluaC1waGF1LXRodWF0LXRodS10aHVhdC1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1zby1waHVjLXRyaW5oLXBoYXUtdGh1YXQtdGh1LXRodWF0XFxiYW8tY2FvLXNvLXBodWMtdHJpbmgtcGhhdS10aHVhdC10aHUtdGh1YXQtbGlzdFxcYmFvLWNhby1zby1waHVjLXRyaW5oLXBoYXUtdGh1YXQtdGh1LXRodWF0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tc28tcGh1Yy10cmluaC1waGF1LXRodWF0LXRodS10aHVhdC9iYW8tY2FvLXNvLXBodWMtdHJpbmgtcGhhdS10aHVhdC10aHUtdGh1YXQtbGlzdC9iYW8tY2FvLXNvLXBodWMtdHJpbmgtcGhhdS10aHVhdC10aHUtdGh1YXQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXNvLXBodWMtdHJpbmgtcGhhdS10aHVhdC10aHUtdGh1YXQvYmFvLWNhby1zby1waHVjLXRyaW5oLXBoYXUtdGh1YXQtdGh1LXRodWF0LWxpc3QvYmFvLWNhby1zby1waHVjLXRyaW5oLXBoYXUtdGh1YXQtdGh1LXRodWF0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay1ncmlkLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLmstbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmstZ3JpZC10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59XG5cbi5rLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.ts": 
        /*!**********************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.ts ***!
          \**********************************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent", function () { return BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent; });
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
            /* harmony import */ var _bc_so_phuc_trinh_phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bc-so-phuc-trinh-phau-thuat-thu-thuat.model */ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bc-so-phuc-trinh-phau-thuat-thu-thuat.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            var BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent = /** @class */ (function () {
                function BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent(apiService, notificationService, dialog, authService, cd) {
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.dialog = dialog;
                    this.authService = authService;
                    this.cd = cd;
                    this.baoCaoSearch = new _bc_so_phuc_trinh_phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoSoPhucTrinhPhauThuatThuThuatSearch"]();
                    this.inBaoCaoSoPhucTrinhPhauThuatThuThuat = new _bc_so_phuc_trinh_phau_thuat_thu_thuat_model__WEBPACK_IMPORTED_MODULE_12__["InBaoCaoSoPhucTrinhPhauThuatThuThuat"]();
                    this.gridColumns = [];
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.showPrintExport = false;
                    this.showGrid = false;
                    this.minDateTuNgay = null;
                    this.heightToolbar = 140;
                    this.pageSize = 50;
                    this.skip = 0;
                    this._isLoading = false;
                    this._isLoadingTotalPage = false;
                    this._showDefaultPagerTemplate = true;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.queryNoiThucHien = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_14__["LookupQueryInfo"]();
                }
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoSoPhucTrinhPhauThuatThuThuat;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 60 },
                        { Field: "MaTN", Title: "Mã TN", Width: 140 },
                        { Field: "TenBenhNhan", Title: "Họ tên NB", Width: 200 },
                        { Field: "NgaySinhDisplay", Title: "Ngày sinh", Width: 120 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 80 },
                        { Field: "DiaChi", Title: "Địa chỉ", Width: 190 },
                        { Field: "BHYT", Title: "BHYT", Width: 160 },
                        { Field: "ChuanDoanTruocPt", Title: "Trước PT", Width: 160 },
                        { Field: "ChuanDoanSauPt", Title: "Sau PT", Width: 160 },
                        { Field: "PhuongPhapPhauThuat", Title: "Phương pháp phẫu thuật", Width: 200 },
                        { Field: "ThuThuatChuyenKhoa", Title: "Thủ thuật chuyên khoa", Width: 200 },
                        { Field: "SoThuTuThongTu50", Title: "STT theo thông tư 50", Width: 200 },
                        { Field: "PhuongPhapVoCam", Title: "Phương pháp vô cảm", Width: 200 },
                        { Field: "NhomDichVu", Title: "Nhóm dịch vụ", Width: 120 },
                        { Field: "SoLuong", Title: "Số lượng", Width: 120 },
                        { Field: "DonGia", Title: "Đơn giá", Width: 120 },
                        { Field: "ThoiGianPhauThuatStart", Title: "Bắt đầu", Width: 150 },
                        { Field: "ThoiGianPhauThuatEnd", Title: "Kết thúc", Width: 150 },
                        { Field: "ThoiGianKhoiMe", Title: "Thời gian khởi mê", Width: 150 },
                        { Field: "LoaiPTTT", Title: "Loại PTTT", Width: 120 },
                        { Field: "NoiChiDinh", Title: "Nơi chỉ định", Width: 160 },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 160 },
                        { Field: "PTVChinh", Title: "PTV chính", Width: 160 },
                        { Field: "NguoiGayMeChinh", Title: "Người gây mê chính", Width: 160 },
                        { Field: "NguoiGayMeGayTePhu", Title: "Người gây mê/gây tê phụ", Width: 160 },
                        { Field: "PTVPhu", Title: "PTV phụ", Width: 160 },
                        { Field: "DungCuVongTrong", Title: "Dụng cụ vòng trong", Width: 160 },
                        { Field: "DungCuVongNgoai", Title: "Dụng cụ vòng ngoài", Width: 160 },
                        { Field: "NguoiGayMePhu", Title: "Người gây mê phụ", Width: 160 },
                        { Field: "ChayNgoai", Title: "Chạy ngoài", Width: 160 },
                        { Field: "Phu1", Title: "Phụ 1", Width: 160 },
                        { Field: "Phu2", Title: "Phụ 2", Width: 160 },
                        { Field: "Phu3", Title: "Phụ 3", Width: 160 }
                    ];
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    this.minDateTuNgay.setMonth((new Date()).getMonth() - 1);
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.baoCaoSearch.TuNgayFormat = this.minDateTuNgay;
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.baoCaoSearch.DenNgayFormat = new Date();
                    }
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.XemBaoCao = function (isChagePage) {
                    var _this = this;
                    if (isChagePage === void 0) { isChagePage = false; }
                    // this.gridChild._isLoading = true;
                    // this.gridChild._isLoadingTotalPage = true;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    if (!isChagePage) {
                        this.skip = 0;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        // this.gridChild._isLoading = false;
                        // this.gridChild._isLoadingTotalPage = false;
                        this._isLoading = false;
                        this._isLoadingTotalPage = false;
                        return;
                    }
                    if (this.baoCaoSearch.TuNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.minDateTuNgay.setHours(0, 0, 0, 0);
                        this.baoCaoSearch.FromDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
                    }
                    if (this.baoCaoSearch.DenNgayFormat == null) {
                        this.minDateTuNgay = new Date();
                        this.baoCaoSearch.ToDate = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.minDateTuNgay, "mm/dd/yyyy");
                    }
                    var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                    var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                    var khoaId = 0;
                    if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
                        khoaId = this.baoCaoSearch.KhoaId;
                    }
                    // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                    // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                    this.baoCaoSearch.FromDate = tuNgay;
                    this.baoCaoSearch.ToDate = denNgay;
                    var searchText = this.getSearchText();
                    this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
                    // this.gridChild._additionalSearchString = JSON.stringify(this.baoCaoSearch);
                    // this.gridChild.search();
                    //this.baoCaoSearch.AdditionalSearchString = khoaId.toString() + ";" + tuNgay + ";" + denNgay;
                    this.apiService.post("BaoCao/GetDataBaoCaoSoPhucTrinhPhauThuatThuThuatForGridAsync", this.queryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            // if (resultData.TotalRowCount !== undefined && resultData.TotalRowCount != 0) {
                            //   this.showPrintExport = true; //show button InBaoCao
                            // }
                            // this.showGrid = true;
                            _this.gridDataSource = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            _this._isLoading = false;
                            _this.apiService.post("BaoCao/GetTotalPageBaoCaoSoPhucTrinhPhauThuatThuThuatForGridAsync", _this.queryInfo).subscribe(function (resultDataTotal) {
                                if (resultDataTotal !== undefined && resultDataTotal != null) {
                                    _this.gridDataSource.total = resultDataTotal.TotalRowCount;
                                    _this._isLoadingTotalPage = false;
                                }
                            }, function () {
                                _this._isLoadingTotalPage = false;
                            });
                        }
                    });
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    if (this.baoCaoSearch.TuNgayFormat == null || this.baoCaoSearch.DenNgayFormat == null) {
                        this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
                        return;
                    }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        var tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.TuNgayFormat, "mm/dd/yyyy");
                        var denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].formatDateTime(this.baoCaoSearch.DenNgayFormat, "mm/dd/yyyy");
                        var khoaId = 0;
                        if (this.baoCaoSearch.KhoaId != undefined && this.baoCaoSearch.KhoaId != null) {
                            khoaId = this.baoCaoSearch.KhoaId;
                        }
                        // this.baoCaoSearch.FromDate = this.baoCaoSearch.TuNgayFormat;
                        // this.baoCaoSearch.ToDate = this.baoCaoSearch.DenNgayFormat;
                        // this.baoCaoSearch.AdditionalSearchString = khoaId + ";0;" + tuNgay + ";" + denNgay + ";" + this.inBaoCaoSoPhucTrinhPhauThuatThuThuat.HostingName;
                        // console.log(this.baoCaoSearch)
                        this.baoCaoSearch.FromDate = tuNgay;
                        this.baoCaoSearch.ToDate = denNgay;
                        //this.gridChild._gridQueryInfo.additionalSearchString = JSON.stringify(this.baoCaoSearch);
                        var searchText = this.getSearchText();
                        this.queryInfo = { skip: this.skip, take: this.pageSize, pageSize: this.pageSize, searchString: searchText, additionalSearchString: JSON.stringify(this.baoCaoSearch), sort: null, lazyLoadPage: false };
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoSoPhucTrinhPhauThuatThuThuat", this.queryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoSoPhucTrinhPhauThuatThuThuat" + dateTimeNow.getFullYear() + ".xlsx");
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
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getSearchText = function () {
                    var searchText = this.baoCaoSearch.SearchString != undefined ? this.baoCaoSearch.SearchString : '';
                    searchText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_5__["CommonService"].convertSpecialXML(searchText);
                    searchText = '<SearchTerms>' + searchText + '</SearchTerms>';
                    searchText = btoa(unescape(encodeURIComponent('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>')));
                    return searchText;
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.pageChange = function (event) {
                    this.baoCaoSearch.Skip = event.skip;
                    this.skip = event.skip;
                    this.XemBaoCao(true);
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.reFresh = function () { this.skip = 0; this.XemBaoCao(); };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getValueByName = function (name, dataItem) {
                    switch (name) {
                        case 'MaTN':
                            return dataItem.MaTN;
                        case 'TenBenhNhan':
                            return dataItem.TenBenhNhan;
                        case 'NgaySinhDisplay':
                            return dataItem.NgaySinhDisplay;
                        case 'GioiTinh':
                            return dataItem.GioiTinh;
                        case 'DiaChi':
                            return dataItem.DiaChi;
                        case 'BHYT':
                            return dataItem.BHYT;
                        case 'ChuanDoanTruocPt':
                            return dataItem.ChuanDoanTruocPt;
                        case 'ChuanDoanSauPt':
                            return dataItem.ChuanDoanSauPt;
                        case 'PhuongPhapPhauThuat':
                            return dataItem.PhuongPhapPhauThuat;
                        case 'PhuongPhapVoCam':
                            return dataItem.PhuongPhapVoCam;
                        case 'NhomDichVu':
                            return dataItem.NhomDichVu;
                        case 'SoLuong':
                            return dataItem.SoLuong;
                        case 'DonGia':
                            return dataItem.DonGia;
                        case 'ThoiGianPhauThuatStart':
                            return dataItem.ThoiGianPhauThuatStart;
                        case 'ThoiGianPhauThuatEnd':
                            return dataItem.ThoiGianPhauThuatEnd;
                        case 'ThoiGianKhoiMe':
                            return dataItem.ThoiGianKhoiMe;
                        case 'LoaiPTTT':
                            return dataItem.LoaiPTTT;
                        case 'NoiChiDinh':
                            return dataItem.NoiChiDinh;
                        case 'NoiThucHien':
                            return dataItem.NoiThucHien;
                        case 'PTVChinh':
                            return dataItem.PTVChinh;
                        case 'NguoiGayMeChinh':
                            return dataItem.NguoiGayMeChinh;
                        case 'NguoiGayMeGayTePhu':
                            return dataItem.NguoiGayMeGayTePhu;
                        case 'PTVPhu':
                            return dataItem.PTVPhu;
                        case 'DungCuVongTrong':
                            return dataItem.DungCuVongTrong;
                        case 'DungCuVongNgoai':
                            return dataItem.DungCuVongNgoai;
                        case 'NguoiGayMePhu':
                            return dataItem.NguoiGayMePhu;
                        case 'ChayNgoai':
                            return dataItem.ChayNgoai;
                        case 'Phu1':
                            return dataItem.Phu1;
                        case 'Phu2':
                            return dataItem.Phu2;
                        case 'Phu3':
                            return dataItem.Phu3;
                        case 'ThuThuatChuyenKhoa':
                            return dataItem.ThuThuatChuyenKhoa;
                        case 'SoThuTuThongTu50':
                            return dataItem.SoThuTuThongTu50;
                    }
                };
                //BVHD-3636
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.changeKhoa = function (event) {
                    if (event == undefined || event == null || event.length == 0) {
                        this.baoCaoSearch.NoiThucHienIds = [];
                    }
                    else {
                        if (this.baoCaoSearch.NoiThucHienIds == undefined || this.baoCaoSearch.NoiThucHienIds == null || this.baoCaoSearch.NoiThucHienIds.length == 0) {
                            this.baoCaoSearch.NoiThucHienIds = [];
                        }
                        var arrNoiThucHienHienTai = this.baoCaoSearch.NoiThucHienIds.slice();
                        var arrNoiThucHienNew_1 = this.baoCaoSearch.NoiThucHienIds.slice();
                        arrNoiThucHienHienTai.forEach(function (element, index) {
                            var elementObj = JSON.parse(element);
                            var indexKhoa = event.findIndex(function (x) { return x == elementObj.KhoaId; });
                            if (indexKhoa == -1) {
                                var indexNoiThucHien = arrNoiThucHienNew_1.findIndex(function (x) { return x == element; });
                                arrNoiThucHienNew_1.splice(indexNoiThucHien, 1);
                            }
                        });
                        this.baoCaoSearch.NoiThucHienIds = arrNoiThucHienNew_1.slice();
                    }
                    this.getObjKhoaId(event);
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.getObjKhoaId = function (arr) {
                    if (arr != undefined && arr != null && arr.length != 0) {
                        var objParam_1 = "[";
                        arr.forEach(function (element) {
                            objParam_1 += "{'KhoaId':" + element + "},";
                        });
                        objParam_1 += "]";
                        this.queryNoiThucHien.ParameterDependencies = objParam_1;
                    }
                    else {
                        this.queryNoiThucHien.ParameterDependencies = "";
                    }
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.isItemSelected = function (dataItem) {
                    var _this = this;
                    if (this.baoCaoSearch.NoiThucHienIds != undefined && this.baoCaoSearch.NoiThucHienIds.length > 0) {
                        var currentItemValue_1 = JSON.parse(dataItem.KeyId);
                        // if parent
                        if (dataItem.KhoaId === null || dataItem.KhoaId === '') {
                            var index = this.baoCaoSearch.NoiThucHienIds.findIndex(function (x) { return x == dataItem.KeyId; });
                            if (index != -1) // đang chọn khoa
                             {
                                if (index == this.baoCaoSearch.NoiThucHienIds.length - 1) { // nếu vừa chọn khoa
                                    if (this.baoCaoSearch.NoiThucHienIds.length > 1) {
                                        var arrNoiThucHienTemp = this.baoCaoSearch.NoiThucHienIds.slice();
                                        arrNoiThucHienTemp.forEach(function (element) {
                                            var elementObj = JSON.parse(element);
                                            if (elementObj.KhoaId === currentItemValue_1.KhoaId && elementObj.PhongId != null && elementObj.PhongId != "") {
                                                var indexNoiThucHienXoa = _this.baoCaoSearch.NoiThucHienIds.findIndex(function (x) { return x == element; });
                                                if (indexNoiThucHienXoa != -1) {
                                                    _this.baoCaoSearch.NoiThucHienIds.splice(indexNoiThucHienXoa, 1);
                                                    _this.cd.detectChanges();
                                                }
                                            }
                                        });
                                    }
                                    return true;
                                }
                                else // nếu vừa chọn phòng
                                 {
                                    var itemCuoiCung_1 = this.baoCaoSearch.NoiThucHienIds[this.baoCaoSearch.NoiThucHienIds.length - 1];
                                    var itemCuoiCungObj_1 = JSON.parse(itemCuoiCung_1);
                                    if (itemCuoiCungObj_1.PhongId != null && itemCuoiCungObj_1.PhongId != '' && itemCuoiCungObj_1.KhoaId == currentItemValue_1.KhoaId) {
                                        var indexParentItemCuoiCung_1 = -1;
                                        this.baoCaoSearch.NoiThucHienIds.forEach(function (element, index) {
                                            var itemObj = JSON.parse(element);
                                            if ((itemObj.PhongId == null || itemObj.PhongId == '') && itemObj.KhoaId == itemCuoiCungObj_1.KhoaId && indexParentItemCuoiCung_1 == -1) {
                                                indexParentItemCuoiCung_1 = index;
                                            }
                                        });
                                        if (indexParentItemCuoiCung_1 != -1) // nếu đã chọn khoa trước đó
                                         {
                                            // gán lại arr
                                            var arrItems = dataItem.Items.slice();
                                            var arrNoiThucHienDangChon = this.baoCaoSearch.NoiThucHienIds.slice();
                                            arrItems.forEach(function (element) {
                                                var indexElement = arrNoiThucHienDangChon.findIndex(function (x) { return x == element.KeyId; });
                                                if (element.KeyId == itemCuoiCung_1) {
                                                    arrNoiThucHienDangChon.splice(indexElement, 1);
                                                }
                                                if (indexElement == -1) {
                                                    arrNoiThucHienDangChon.push(element.KeyId);
                                                }
                                            });
                                            arrNoiThucHienDangChon.splice(indexParentItemCuoiCung_1, 1);
                                            this.baoCaoSearch.NoiThucHienIds = arrNoiThucHienDangChon.slice();
                                            this.cd.detectChanges();
                                            return false;
                                        }
                                        else // nếu chưa chọn khoa trước đó
                                         {
                                            return this.baoCaoSearch.NoiThucHienIds.some(function (item) { return item == dataItem.KeyId; });
                                        }
                                    }
                                    else {
                                        return this.baoCaoSearch.NoiThucHienIds.some(function (item) { return item == dataItem.KeyId; });
                                    }
                                }
                            }
                            else {
                                return this.baoCaoSearch.NoiThucHienIds.some(function (item) { return item == dataItem.KeyId; });
                            }
                        }
                        // if child
                        else {
                            var indexParent = this.baoCaoSearch.NoiThucHienIds.findIndex(function (item) { return item == dataItem.KhoaKeyId; });
                            if (indexParent != -1) {
                                return this.baoCaoSearch.NoiThucHienIds.some(function (item) { return _this.checkedValue(item, dataItem.KeyId); });
                            }
                            else {
                                // kiểm tra số lượng phòng thuộc khoa đang chọn, nếu bằng tổng số phòng thì thêm khoa vào model, xóa tất cả phòng thuộc khoa trong model
                                var count_1 = 0;
                                var arrNoiThucHien = this.baoCaoSearch.NoiThucHienIds.slice();
                                arrNoiThucHien.forEach(function (element) {
                                    var elementObj = JSON.parse(element);
                                    if (elementObj.PhongId != null && elementObj.PhongId != '' && elementObj.KhoaId === dataItem.KhoaId) {
                                        count_1++;
                                    }
                                });
                                // nếu số lượng phòng select = tổng phòng trong khoa -> xóa tất cả phòng, thêm khoa vào model
                                if (count_1 == dataItem.CountItems) {
                                    var arr_1 = this.baoCaoSearch.NoiThucHienIds.slice();
                                    var isPush_1 = false;
                                    arr_1.forEach(function (element, indexPhong) {
                                        var elementObj = JSON.parse(element);
                                        if (elementObj.PhongId != null && elementObj.PhongId != "" && elementObj.KhoaId === currentItemValue_1.KhoaId) {
                                            arr_1.splice(indexPhong, 1);
                                            if (!isPush_1) {
                                                isPush_1 = true;
                                                arr_1.push(dataItem.KhoaKeyId);
                                            }
                                        }
                                    });
                                    this.baoCaoSearch.NoiThucHienIds = arr_1.slice();
                                    this.cd.detectChanges();
                                    // this.dichVuKyThuatBenhVien.NoiThucHienIds.push(dataItem.KhoaKeyId);
                                    return true;
                                }
                                else {
                                    return this.baoCaoSearch.NoiThucHienIds.some(function (item) { return item == dataItem.KeyId; });
                                }
                            }
                        }
                    }
                };
                BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype.checkedValue = function (itemInList, currentItem) {
                    var itemInListValue = JSON.parse(itemInList);
                    var currentItemValue = JSON.parse(currentItem);
                    return itemInListValue.KhoaId === currentItemValue.KhoaId;
                };
                return BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent;
            }());
            BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridComponent"], { static: true })
            ], BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent.prototype, "gridChild", void 0);
            BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.scss")).default]
                })
            ], BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-routing.module.ts": 
        /*!**********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-routing.module.ts ***!
          \**********************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule", function () { return BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component */ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_2__["BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent"],
                    data: {
                        title: 'Báo cáo sổ phúc trình phẩu thuật thủ thuật',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].BaoCaoSoPhucTrinhPhauThuatThuThuat,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_4__["PermisssionGuard"]]
                }
            ];
            var BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule = /** @class */ (function () {
                function BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule() {
                }
                return BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule;
            }());
            BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.module.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.module.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoPhucTrinhPhauThuatThuThuatModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoPhucTrinhPhauThuatThuThuatModule", function () { return BaoCaoSoPhucTrinhPhauThuatThuThuatModule; });
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
            /* harmony import */ var _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component */ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-list.component.ts");
            /* harmony import */ var _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-routing.module.ts");
            /* harmony import */ var _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.service */ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.service.ts");
            var BaoCaoSoPhucTrinhPhauThuatThuThuatModule = /** @class */ (function () {
                function BaoCaoSoPhucTrinhPhauThuatThuThuatModule() {
                }
                return BaoCaoSoPhucTrinhPhauThuatThuThuatModule;
            }());
            BaoCaoSoPhucTrinhPhauThuatThuThuatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoSoPhucTrinhPhauThuatThuThuatListComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoSoPhucTrinhPhauThuatThuThuatRoutingModule"],
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"]
                    ],
                    providers: [
                        _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoSoPhucTrinhPhauThuatThuThuatService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_so_phuc_trinh_phau_thuat_thu_thuat_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoSoPhucTrinhPhauThuatThuThuatService"] },
                    ],
                    entryComponents: []
                })
            ], BaoCaoSoPhucTrinhPhauThuatThuThuatModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.service.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat.service.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: BaoCaoSoPhucTrinhPhauThuatThuThuatService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoPhucTrinhPhauThuatThuThuatService", function () { return BaoCaoSoPhucTrinhPhauThuatThuThuatService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var BaoCaoSoPhucTrinhPhauThuatThuThuatService = /** @class */ (function (_super) {
                __extends(BaoCaoSoPhucTrinhPhauThuatThuThuatService, _super);
                function BaoCaoSoPhucTrinhPhauThuatThuThuatService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoSoPhucTrinhPhauThuatThuThuatService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            BaoCaoSoPhucTrinhPhauThuatThuThuatService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            BaoCaoSoPhucTrinhPhauThuatThuThuatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoSoPhucTrinhPhauThuatThuThuatService);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bc-so-phuc-trinh-phau-thuat-thu-thuat.model.ts": 
        /*!********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-so-phuc-trinh-phau-thuat-thu-thuat/bc-so-phuc-trinh-phau-thuat-thu-thuat.model.ts ***!
          \********************************************************************************************************************************/
        /*! exports provided: BaoCaoSoPhucTrinhPhauThuatThuThuatSearch, BaoCaoSoPhucTrinhPhauThuatThuThuat, InBaoCaoSoPhucTrinhPhauThuatThuThuat */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoPhucTrinhPhauThuatThuThuatSearch", function () { return BaoCaoSoPhucTrinhPhauThuatThuThuatSearch; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoSoPhucTrinhPhauThuatThuThuat", function () { return BaoCaoSoPhucTrinhPhauThuatThuThuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InBaoCaoSoPhucTrinhPhauThuatThuThuat", function () { return InBaoCaoSoPhucTrinhPhauThuatThuThuat; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var BaoCaoSoPhucTrinhPhauThuatThuThuatSearch = /** @class */ (function () {
                function BaoCaoSoPhucTrinhPhauThuatThuThuatSearch(FromDate, ToDate, TuNgayFormat, DenNgayFormat, KhoaId, 
                //BVHD-3636
                KhoaPhongIds, NoiThucHienIds, LaPhauThuat, LaThuThuat, Skip, Take, PageSize, SearchString, AdditionalSearchString, Sort) {
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    if (TuNgayFormat === void 0) { TuNgayFormat = null; }
                    if (DenNgayFormat === void 0) { DenNgayFormat = null; }
                    if (KhoaId === void 0) { KhoaId = null; }
                    if (KhoaPhongIds === void 0) { KhoaPhongIds = []; }
                    if (NoiThucHienIds === void 0) { NoiThucHienIds = []; }
                    if (LaPhauThuat === void 0) { LaPhauThuat = true; }
                    if (LaThuThuat === void 0) { LaThuThuat = true; }
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
                    this.KhoaId = KhoaId;
                    this.KhoaPhongIds = KhoaPhongIds;
                    this.NoiThucHienIds = NoiThucHienIds;
                    this.LaPhauThuat = LaPhauThuat;
                    this.LaThuThuat = LaThuThuat;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoSoPhucTrinhPhauThuatThuThuatSearch;
            }());
            var BaoCaoSoPhucTrinhPhauThuatThuThuat = /** @class */ (function () {
                function BaoCaoSoPhucTrinhPhauThuatThuThuat(STT, Ten, DVT, SLTonDauKy, ThanhTienTonDauKy, SLNhapTrongKy, ThanhTienNhapTrongKy, SLXuatTrongKy, ThanhTienXuatTrongKy, SLTonCuoiKy, Gia, ThanhTien) {
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
                return BaoCaoSoPhucTrinhPhauThuatThuThuat;
            }());
            var InBaoCaoSoPhucTrinhPhauThuatThuThuat = /** @class */ (function () {
                function InBaoCaoSoPhucTrinhPhauThuatThuThuat(KhoId, HostingName, FromDate, ToDate) {
                    if (KhoId === void 0) { KhoId = 0; }
                    if (HostingName === void 0) { HostingName = null; }
                    if (FromDate === void 0) { FromDate = null; }
                    if (ToDate === void 0) { ToDate = null; }
                    this.KhoId = KhoId;
                    this.HostingName = HostingName;
                    this.FromDate = FromDate;
                    this.ToDate = ToDate;
                }
                return InBaoCaoSoPhucTrinhPhauThuatThuThuat;
            }());
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-bao-cao-so-phuc-trinh-phau-thuat-thu-thuat-module-es5.js.map