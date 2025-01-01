(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-tinh-hinh-benh-tat-tu-vong-bao-cao-tinh-hinh-benh-tat-tu-vong-module"],{

/***/ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-check-box.js":
/*!*************************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-check-box.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M5 19h14V5H5v14zm2.41-7.4l2.58 2.58 6.59-6.59L17.99 9l-8 8L6 13.01l1.41-1.41z\" fill=\"currentColor\"/><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-done.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-done.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'KHTH', Path:''},\n                {Title:'Báo Cáo Tình Hình Tử Vong', Path:'', Active:true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.TuNgay\" #tiepnhantu id=\"TuNgay\"\n                    [maxDate]=\"baoCaoSearch.DenNgay\" label=\"Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n\n                <app-datetimepicker fxFlex=\"15%\" [(model)]=\"baoCaoSearch.DenNgay\" #tiepnhanden id=\"DenNgay\"\n                    [minDate]=\"baoCaoSearch.TuNgay\" class=\"mt-1 on-header\" label=\"Đến ngày\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"0%\" fxFlex.sm=\"0%\" class=\"pb-0\" style=\"margin-left: 10px;\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"xemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"xuatBaoCao()\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [ngStyle]=\"{'min-height': height+'px'}\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridDataSource\" class=\"k-grid1 grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [pageSize]=\"pageSize\" [skip]=\"skip\"\n                        (pageChange)=\"pageChange($event)\" id=\"baoCaoGrid\" #baoCaoGrid>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{rowIndex + 1}}</span>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                            width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.STT}}</span>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                            width=\"{{getWidthColumn(2)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TenNhomBenh}}</span>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"font-weight: bold;color:#000;\">Tổng cộng</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                            width=\"{{getWidthColumn(3)}}\"\n                            [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.MaICD}}</span>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{rowIndex + 1}}</span>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Hoạt động khám bệnh\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(4)}}</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                                width=\"{{getWidthColumn(5)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.HDKBSoLanKhamChung}}</span>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumHDKBSoLanKhamChung | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                                width=\"{{getWidthColumn(6)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.HDKBSoLanKhamTreEm}}</span>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumHDKBSoLanKhamTreEm | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                                width=\"{{getWidthColumn(7)}}\"\n                                [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.HDKBSoTuVong}}</span>\n                                </ng-template>\n                                <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                    <strong>{{ sumHDKBSoTuVong | number}}</strong>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column-group title=\"Hoạt động điều trị\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(8)}}</div>\n                            </ng-template>\n\n                            <kendo-grid-column-group title=\"Tổng số bệnh nhân\">\n                                <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                    <div class=\"text-center\">{{getTitleColumn(9)}}</div>\n                                </ng-template>\n                                <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                                    width=\"{{getWidthColumn(10)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TSBNSoMacBenh}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTSBNSoMacBenh | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                                <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                                    width=\"{{getWidthColumn(11)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TSBNSoTuVong}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTSBNSoTuVong | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                                <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                                    width=\"{{getWidthColumn(12)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TSBNNgayDieuTri}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTSBNNgayDieuTri | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            </kendo-grid-column-group>\n\n                            <kendo-grid-column-group title=\"Trong đó TE <= 15 tuổi\">\n                                <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                    <div class=\"text-center\">{{getTitleColumn(13)}}</div>\n                                </ng-template>\n                                <kendo-grid-column-group title=\"Mắc\">\n                                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\"\n                                        let-column=\"column\">\n                                        <div class=\"text-center\">{{getTitleColumn(14)}}</div>\n                                    </ng-template>\n                                    <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                                        width=\"{{getWidthColumn(15)}}\"\n                                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TEMacTS}}</span>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                            <strong>{{ sumTEMacTS | number}}</strong>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                                        width=\"{{getWidthColumn(16)}}\"\n                                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TEMacDuoi6T}}</span>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                            <strong>{{ sumTEMacDuoi6T | number}}</strong>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                </kendo-grid-column-group>\n\n                                <kendo-grid-column-group title=\"Số tử vong\">\n                                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\"\n                                        let-column=\"column\">\n                                        <div class=\"text-center\">{{getTitleColumn(17)}}</div>\n                                    </ng-template>\n                                    <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                                        width=\"{{getWidthColumn(18)}}\"\n                                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TESoTuVongTS}}</span>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                            <strong>{{ sumTESoTuVongTS | number}}</strong>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                                        width=\"{{getWidthColumn(19)}}\"\n                                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TESoTuVongDuoi6T}}</span>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                            <strong>{{ sumTESoTuVongDuoi6T | number}}</strong>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                </kendo-grid-column-group>\n\n                                <kendo-grid-column-group title=\"TS ngày điều trị\">\n                                    <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\"\n                                        let-column=\"column\">\n                                        <div class=\"text-center\">{{getTitleColumn(20)}}</div>\n                                    </ng-template>\n                                    <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                                        width=\"{{getWidthColumn(21)}}\"\n                                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TENgayDieuTriTS}}</span>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                            <strong>{{ sumTENgayDieuTriTS | number}}</strong>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                    <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                                        width=\"{{getWidthColumn(22)}}\"\n                                        [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                            <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.TENgayDieuTriDuoi6T}}</span>\n                                        </ng-template>\n                                        <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                            <strong>{{ sumTENgayDieuTriDuoi6T | number}}</strong>\n                                        </ng-template>\n                                    </kendo-grid-column>\n                                </kendo-grid-column-group>\n\n                            </kendo-grid-column-group>\n\n\n\n                        </kendo-grid-column-group>\n\n\n                        <kendo-grid-column-group title=\"Trong đó > 60 tuổi\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">{{getTitleColumn(23)}}</div>\n                            </ng-template>\n\n                            <kendo-grid-column-group title=\"Số mắc bệnh\">\n                                <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                    <div class=\"text-center\">{{getTitleColumn(24)}}</div>\n                                </ng-template>\n                                <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                                    width=\"{{getWidthColumn(25)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.Tren60TMacBenhTS}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTren60TMacBenhTS | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                                <kendo-grid-column field=\"{{getFieldColumn(26)}}\" title=\"{{getTitleColumn(26)}}\"\n                                    width=\"{{getWidthColumn(26)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.Tren60TMacBenhLaNu}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTren60TMacBenhLaNu | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            </kendo-grid-column-group>\n\n                            <kendo-grid-column-group title=\"Số mắc bệnh\">\n                                <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                    <div class=\"text-center\">{{getTitleColumn(27)}}</div>\n                                </ng-template>\n                                <kendo-grid-column field=\"{{getFieldColumn(28)}}\" title=\"{{getTitleColumn(28)}}\"\n                                    width=\"{{getWidthColumn(28)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.Tren60TTuVongTS}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTren60TTuVongTS | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                                <kendo-grid-column field=\"{{getFieldColumn(29)}}\" title=\"{{getTitleColumn(29)}}\"\n                                    width=\"{{getWidthColumn(29)}}\"\n                                    [headerStyle]=\"{'text-align': 'center','vertical-align': 'top'}\">\n                                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                        <span [ngClass]=\"{'text_underline': dataItem.LaChuong}\"> {{dataItem.Tren60TTuVongLaNu}}</span>\n                                    </ng-template>\n                                    <ng-template kendoGridFooterTemplate let-aggregates let-field=\"field\">\n                                        <strong>{{ sumTren60TTuVongLaNu | number}}</strong>\n                                    </ng-template>\n                                </kendo-grid-column>\n                            </kendo-grid-column-group>\n\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"xemBaoCao()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                    </kendo-grid>\n                </div>\n            </div>\n        </div>\n\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BaoCaoTinhHinhBenhTatTuVongRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhBenhTatTuVongRoutingModule", function() { return BaoCaoTinhHinhBenhTatTuVongRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _ds_bao_cao_tinh_hinh_benh_tat_tu_vong_ds_bao_cao_tinh_hinh_benh_tat_tu_vong_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.ts");






const routes = [
    {
        path: '',
        component: _ds_bao_cao_tinh_hinh_benh_tat_tu_vong_ds_bao_cao_tinh_hinh_benh_tat_tu_vong_component__WEBPACK_IMPORTED_MODULE_5__["DanhSachBaoCaoTinhHinhBenhTatTuVongComponent"],
        data: {
            title: 'Báo cáo tình hình bệnh tật tử vong',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoTinhHinhBenhTatTuVong,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    }
];
let BaoCaoTinhHinhBenhTatTuVongRoutingModule = class BaoCaoTinhHinhBenhTatTuVongRoutingModule {
};
BaoCaoTinhHinhBenhTatTuVongRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoTinhHinhBenhTatTuVongRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoTinhHinhBenhTatTuVongModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhBenhTatTuVongModule", function() { return BaoCaoTinhHinhBenhTatTuVongModule; });
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
/* harmony import */ var _bao_cao_tinh_hinh_benh_tat_tu_vong_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bao-cao-tinh-hinh-benh-tat-tu-vong-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong-routing.module.ts");
/* harmony import */ var _ds_bao_cao_tinh_hinh_benh_tat_tu_vong_ds_bao_cao_tinh_hinh_benh_tat_tu_vong_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.ts");



















let BaoCaoTinhHinhBenhTatTuVongModule = class BaoCaoTinhHinhBenhTatTuVongModule {
};
BaoCaoTinhHinhBenhTatTuVongModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ds_bao_cao_tinh_hinh_benh_tat_tu_vong_ds_bao_cao_tinh_hinh_benh_tat_tu_vong_component__WEBPACK_IMPORTED_MODULE_18__["DanhSachBaoCaoTinhHinhBenhTatTuVongComponent"]],
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
            _bao_cao_tinh_hinh_benh_tat_tu_vong_routing_module__WEBPACK_IMPORTED_MODULE_17__["BaoCaoTinhHinhBenhTatTuVongRoutingModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
        ]
    })
], BaoCaoTinhHinhBenhTatTuVongModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BaoCaoTinhHinhBenhTatTuVong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoTinhHinhBenhTatTuVong", function() { return BaoCaoTinhHinhBenhTatTuVong; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaoCaoTinhHinhBenhTatTuVong {
    constructor(TuNgay = null, DenNgay = null) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th,\n.k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n\n.text_underline {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10aW5oLWhpbmgtYmVuaC10YXQtdHUtdm9uZy9kcy1iYW8tY2FvLXRpbmgtaGluaC1iZW5oLXRhdC10dS12b25nL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby10aW5oLWhpbmgtYmVuaC10YXQtdHUtdm9uZ1xcZHMtYmFvLWNhby10aW5oLWhpbmgtYmVuaC10YXQtdHUtdm9uZ1xcZHMtYmFvLWNhby10aW5oLWhpbmgtYmVuaC10YXQtdHUtdm9uZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby10aW5oLWhpbmgtYmVuaC10YXQtdHUtdm9uZy9kcy1iYW8tY2FvLXRpbmgtaGluaC1iZW5oLXRhdC10dS12b25nL2RzLWJhby1jYW8tdGluaC1oaW5oLWJlbmgtdGF0LXR1LXZvbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLXRpbmgtaGluaC1iZW5oLXRhdC10dS12b25nL2RzLWJhby1jYW8tdGluaC1oaW5oLWJlbmgtdGF0LXR1LXZvbmcvZHMtYmFvLWNhby10aW5oLWhpbmgtYmVuaC10YXQtdHUtdm9uZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rLWdyaWQxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uay1ncmlkMSAuay1ncmlkLWhlYWRlci13cmFwIHRoIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uay1ncmlkMSB0aCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uay1ncmlkMSB0ZCBhIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5rLWdyaWQxIHRkIGEuay1wbHVzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRoLFxuLmstZ3JpZDEgLnRhYmxlaW5ncm91cCB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmstaS1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBjb2xvcjogI2ZmNjc1Nztcbn1cblxuLnRleHRfdW5kZXJsaW5lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uay1pLWxvYWRpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGNvbG9yOiAjZmY2NzU3O1xufVxuXG4udGV4dF91bmRlcmxpbmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: DanhSachBaoCaoTinhHinhBenhTatTuVongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachBaoCaoTinhHinhBenhTatTuVongComponent", function() { return DanhSachBaoCaoTinhHinhBenhTatTuVongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _bao_cao_tinh_hinh_benh_tat_tu_vong__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../bao-cao-tinh-hinh-benh-tat-tu-vong */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/bao-cao-tinh-hinh-benh-tat-tu-vong.ts");




















let DanhSachBaoCaoTinhHinhBenhTatTuVongComponent = class DanhSachBaoCaoTinhHinhBenhTatTuVongComponent {
    constructor(apiService, dialog, notificationService, authService, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.baoCaoSearch = new _bao_cao_tinh_hinh_benh_tat_tu_vong__WEBPACK_IMPORTED_MODULE_19__["BaoCaoTinhHinhBenhTatTuVong"]();
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
        this.pageSize = 50;
        this.skip = 0;
        this.heightToolbar = 140;
        this.dataSource = {
            data: [],
            total: 0
        };
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.groupNhom = new Map();
        this.aggregates = [
            { field: 'KhamBenh', aggregate: 'sum' }
        ];
        this.sumHDKBSoLanKhamChung = 0;
        this.sumHDKBSoLanKhamTreEm = 0;
        this.sumHDKBSoTuVong = 0;
        this.sumTSBNSoMacBenh = 0;
        this.sumTSBNSoTuVong = 0;
        this.sumTSBNNgayDieuTri = 0;
        this.sumTEMacTS = 0;
        this.sumTEMacDuoi6T = 0;
        this.sumTESoTuVongTS = 0;
        this.sumTESoTuVongDuoi6T = 0;
        this.sumTENgayDieuTriTS = 0;
        this.sumTENgayDieuTriDuoi6T = 0;
        this.sumTren60TMacBenhTS = 0;
        this.sumTren60TMacBenhLaNu = 0;
        this.sumTren60TTuVongTS = 0;
        this.sumTren60TTuVongLaNu = 0;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].BaoCaoTinhHinhBenhTatTuVong;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.gridColumns = [
            { Field: "TT", Title: "TT", Width: 70 },
            { Field: "STT", Title: "Số TT", Width: 70 },
            { Field: "TenNhomBenh", Title: "Tên bệnh/ nhóm bệnh", Width: 300 },
            { Field: "MaICD", Title: "Mã ICD 10", Width: 100 },
            { Field: "_", Title: "Hoạt động khám bệnh", Width: 600 },
            { Field: "HDKBSoLanKhamChung", Title: "Số lần khám chung", Width: 200 },
            { Field: "HDKBSoLanKhamTreEm", Title: "Số lần khám trẻ em", Width: 200 },
            { Field: "HDKBSoTuVong", Title: "Số tử vong", Width: 200 },
            { Field: "_", Title: "Hoạt động điều trị", Width: 70 },
            { Field: "_", Title: "Tổng số bệnh nhân", Width: 70 },
            { Field: "TSBNSoMacBenh", Title: "Số mắc bệnh", Width: 70 },
            { Field: "TSBNSoTuVong", Title: "Số tử vong", Width: 70 },
            { Field: "TSBNNgayDieuTri", Title: "Ngày điều trị", Width: 70 },
            { Field: "_", Title: "Trong đó TE <= 15 tuổi", Width: 70 },
            { Field: "_", Title: "Mắc", Width: 70 },
            { Field: "TEMacTS", Title: "TS", Width: 70 },
            { Field: "TEMacDuoi6T", Title: "<6 tuổi", Width: 70 },
            { Field: "_", Title: "Số tử vong", Width: 70 },
            { Field: "TESoTuVongTS", Title: "TS", Width: 70 },
            { Field: "TESoTuVongDuoi6T", Title: "<6 tuổi", Width: 70 },
            { Field: "_", Title: "TS ngày điều trị", Width: 70 },
            { Field: "TENgayDieuTriTS", Title: "TS", Width: 70 },
            { Field: "TENgayDieuTriDuoi6T", Title: "<6 tuổi", Width: 70 },
            { Field: "_", Title: "Trong đó > 60 tuổi", Width: 70 },
            { Field: "_", Title: "Số mắc bệnh", Width: 70 },
            { Field: "Tren60TMacBenhTS", Title: "T.Số", Width: 70 },
            { Field: "Tren60TMacBenhLaNu", Title: "Nữ", Width: 70 },
            { Field: "_", Title: "Số tử vong", Width: 70 },
            { Field: "Tren60TTuVongTS", Title: "T.Số", Width: 70 },
            { Field: "Tren60TTuVongLaNu", Title: "Nữ", Width: 70 },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        if (this.baoCaoSearch.TuNgay == null) {
            this.baoCaoSearch.TuNgay = this.minDateTuNgay;
        }
        if (this.baoCaoSearch.DenNgay == null) {
            this.baoCaoSearch.DenNgay = new Date();
            this.baoCaoSearch.DenNgay.setHours(23, 59, 59);
        }
    }
    pageChange(event) {
        this.skip = event.skip;
        if (this.dataSource.data.length == 0) {
            this.xemBaoCao();
        }
        else {
            var takeTo = this.skip + this.pageSize;
            console.log(this.dataSource.data);
            let gridData = this.dataSource.data.slice(this.skip, takeTo);
            this.gridDataSource = {
                data: gridData,
                total: this.dataSource.total
            };
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
        var widthParent = jQuery("#baoCaoGrid").parent().width();
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
    xemBaoCao() {
        if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        this.showLoadingPopup();
        this.apiService.post("BaoCao/GetDataTinhHinhBenhTatTuVongForGrid", this.baoCaoSearch).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.gridDataSource = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                this.pageSize = resultData.TotalRowCount;
                this.sumHDKBSoLanKhamChung = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.HDKBSoLanKhamChung, 0);
                this.sumHDKBSoLanKhamTreEm = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.HDKBSoLanKhamTreEm, 0);
                this.sumHDKBSoTuVong = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.HDKBSoTuVong, 0);
                this.sumTSBNSoMacBenh = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TSBNSoMacBenh, 0);
                this.sumTSBNSoTuVong = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TSBNSoTuVong, 0);
                this.sumTSBNNgayDieuTri = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TSBNNgayDieuTri, 0);
                this.sumTEMacTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TEMacTS, 0);
                this.sumTEMacDuoi6T = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TEMacDuoi6T, 0);
                this.sumTESoTuVongTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TESoTuVongTS, 0);
                this.sumTESoTuVongDuoi6T = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TESoTuVongDuoi6T, 0);
                this.sumTENgayDieuTriTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TENgayDieuTriTS, 0);
                this.sumTENgayDieuTriDuoi6T = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.TENgayDieuTriDuoi6T, 0);
                this.sumTren60TMacBenhTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.Tren60TMacBenhTS, 0);
                this.sumTren60TMacBenhLaNu = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.Tren60TMacBenhLaNu, 0);
                this.sumTren60TTuVongTS = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.Tren60TTuVongTS, 0);
                this.sumTren60TTuVongLaNu = resultData.Data.filter(c => c.LaChuong !== true).reduce((sum, item) => sum + item.Tren60TTuVongLaNu, 0);
                this.closeAllDialogs();
            }
        });
    }
    xuatBaoCao() {
        const self = this;
        if (this.baoCaoSearch.TuNgay == null || this.baoCaoSearch.DenNgay == null) {
            this.notificationService.showError("Từ ngày và đến ngày yêu cầu nhập");
            return;
        }
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
            self.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            self.apiService.postExportExcel('BaoCao/ExportBaoCaoTinhHinhBenhTatTuVong', this.baoCaoSearch)
                .subscribe(resultData => {
                self.dialog.closeAll();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'TinhHinhBenhTatTuVong' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.dialog.closeAll();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showLoadingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải...' }
            });
        }
    }
    showSavingPopup() {
        if (!this.loadingPopup) {
            this.loadingPopup = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang lưu...' }
            });
        }
    }
    closeAllDialogs() {
        if (this.loadingPopup) {
            this.loadingPopup.close();
            this.loadingPopup = null;
        }
    }
};
DanhSachBaoCaoTinhHinhBenhTatTuVongComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_14__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], DanhSachBaoCaoTinhHinhBenhTatTuVongComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_9__["WindowComponent"], { static: false })
], DanhSachBaoCaoTinhHinhBenhTatTuVongComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], { static: false })
], DanhSachBaoCaoTinhHinhBenhTatTuVongComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DanhSachBaoCaoTinhHinhBenhTatTuVongComponent.prototype, "heightToolbar", void 0);
DanhSachBaoCaoTinhHinhBenhTatTuVongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong/ds-bao-cao-tinh-hinh-benh-tat-tu-vong.component.scss")).default]
    })
], DanhSachBaoCaoTinhHinhBenhTatTuVongComponent);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-tinh-hinh-benh-tat-tu-vong-bao-cao-tinh-hinh-benh-tat-tu-vong-module-es2015.js.map