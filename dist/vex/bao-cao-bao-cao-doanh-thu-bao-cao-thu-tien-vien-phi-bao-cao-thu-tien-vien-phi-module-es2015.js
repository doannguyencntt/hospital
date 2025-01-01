(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-doanh-thu-bao-cao-thu-tien-vien-phi-bao-cao-thu-tien-vien-phi-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Thống Kê', Path:''},\n                {Title:'Báo Cáo', Path:''},\n                {Title:'Lễ Tân - Thu Ngân', Path:''},\n                {Title:'Viện Phí Thu Tiền', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n\n                <!-- (selectionChange)=\"chonQuay($event)\" -->\n                <!-- <app-combobox id=\"KhoaPhong\" fxFlex=\"18%\" fxFlex.sm=\"18%\" [(model)]=\"quayThuNgan.KeyId\"\n                    [modelText]=\"quayThuNgan.DisplayName\" label=\"Quầy thu\" (modelChange)=\"chonQuayChange($event)\"\n                    [autoSelectFirstItem]=\"true\" url=\"KhoaPhongNhanVien/GetListKhoaPhongThuNgan\" class=\"mt-1 on-header\">\n                </app-combobox> -->\n                <!-- (selectionChange)=\"chonNhanVien($event)\" -->\n                <app-combobox id=\"nhanVienThuNgan\" id=\"nhanVienThuNgan\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"nhanVienThuNgan.KeyId\" [modelText]=\"nhanVienThuNgan.DisplayName\" label=\"Nhân Viên\"\n                    [autoSelectFirstItem]=\"true\" (modelChange)=\"chonNhanVienChange($event)\"\n                    url=\"KhoaPhongNhanVien/GetListNhanVienThuNgan\" class=\"mt-1 on-header\">\n                </app-combobox>\n\n                <app-datetimepicker id=\"TuNgaythang\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateStart\" (modelChange)=\"changeValueStart($event)\"\n                    label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"DenNgay\" fxFlex=\"18%\" fxFlex.sm=\"18%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateEnd\" label=\"Đến ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <div fxFlex=\"46%\" fxFlex.sm=\"46%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" *ngIf=\"ishowView == true\">Xuất Excel</button>\n                </div>\n\n                <div fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid1 shared-header grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [hidden]=\"ishowViewData != true\" [pageSize]=\"pageSize\"\n                        [skip]=\"skip\" (pageChange)=\"pageChange($event)\" (detailExpand)=\"detailExpand($event)\"\n                        id=\"baoCaoChiTietThuVienPhiGrid\" #baoCaoChiTietThuVienPhiGrid\n                        (columnResize)=\"columnResize($event)\">\n                        <kendo-grid-span-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                                width=\"{{getWidthColumn(0)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- STT -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                                width=\"{{getWidthColumn(1)}}\" [style]=\"{'text-align': 'center'}\">\n\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                                width=\"{{getWidthColumn(2)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <!-- SoBLHD -->\n                                    <div style=\"font-weight: bold;color:#000;text-align: left;\">Tổng Cộng :</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                                width=\"{{getWidthColumn(3)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- MaBenhNhan -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                                width=\"{{getWidthColumn(4)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TenBenhNhan -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                                width=\"{{getWidthColumn(5)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- SoBenhAn -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                                width=\"{{getWidthColumn(6)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- Nămsinh -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                                width=\"{{getWidthColumn(7)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- Người giới thiệu -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                                width=\"{{getWidthColumn(8)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- Người giới thiệu -->\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                                width=\"{{getWidthColumn(9)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- Người giới thiệu -->\n                            </kendo-grid-column>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.HoTenNhanVien}}</div>\n                            </ng-template>\n                        </kendo-grid-span-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                            width=\"{{getWidthColumn(10)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- TotalTamUng -->\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalTamUng != null\">\n                                    {{ dataItem.TotalTamUng | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalTamUng == null\">\n                                    {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalTamUng | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                            width=\"{{getWidthColumn(11)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- TotalHoanUng -->\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalHoanUng != null\">\n                                    {{dataItem.TotalHoanUng | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalHoanUng == null\">\n                                    {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                            </ng-template>\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalHoanUng | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                            width=\"{{getWidthColumn(12)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- TotalSoTienThu -->\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalSoTienThu != null\">\n                                    {{ dataItem.TotalSoTienThu | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalSoTienThu == null\">\n                                    {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalSoTienThu | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                            width=\"{{getWidthColumn(13)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- TotalHuyThu -->\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalHuyThu != null\">\n                                    {{dataItem.TotalHuyThu| number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalHuyThu == null\">\n                                    {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                            </ng-template>\n\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalHuyThu | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                            width=\"{{getWidthColumn(14)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- GoiDichVu -->\n                        </kendo-grid-column>\n\n                        <kendo-grid-column-group title=\"Hình thức thanh toán\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div style=\"text-align: center;\">Hình thức thanh toán</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                                width=\"{{getWidthColumn(15)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TotalCongNo -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalCongNo != null\">\n                                        {{ formatPrice(dataItem.TotalCongNo)}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalCongNo == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalCongNo | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                                width=\"{{getWidthColumn(16)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalPos != null\">\n                                        {{ dataItem.TotalPos | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalPos == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalPos | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                                width=\"{{getWidthColumn(17)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <!-- TotalChuyenKhoan -->\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalChuyenKhoan != null\">\n                                        {{ dataItem.TotalChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalChuyenKhoan == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalChuyenKhoan | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                                width=\"{{getWidthColumn(18)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <!-- TotalTienMat -->\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalTienMat != null\">\n                                        {{dataItem.TotalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalTienMat == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n\n\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column-group title=\"Cập nhật công nợ\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div style=\"text-align: center;\">Cập nhật công nợ</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                                width=\"{{getWidthColumn(19)}}\" [style]=\"{'text-align': 'center'}\">\n                                <!-- TotalThuNoTienMat -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalThuNoTienMat != null\">\n                                        {{ dataItem.TotalThuNoTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalThuNoTienMat == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThuNoTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                                width=\"{{getWidthColumn(20)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <!-- TotalThuNoChuyenKhoan -->\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalThuNoChuyenKhoan != null\">\n                                        {{dataItem.TotalThuNoChuyenKhoan| number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalThuNoChuyenKhoan == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThuNoChuyenKhoan | number:'0.2-2':'vi-VN' }}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                                width=\"{{getWidthColumn(21)}}\" [style]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <!-- TotalThuNoPos -->\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalThuNoPos != null\">\n                                        {{ dataItem.TotalThuNoPos | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;\" *ngIf=\"dataItem.TotalThuNoPos == null\">\n                                        {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                                </ng-template>\n\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThuNoPos | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                                width=\"{{getWidthColumn(22)}}\" [style]=\"{'text-align': 'center'}\">\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(23)}}\" title=\"{{getTitleColumn(23)}}\"\n                            width=\"{{getWidthColumn(23)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- Chi tiết công nợ -->\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(24)}}\" title=\"{{getTitleColumn(24)}}\"\n                            width=\"{{getWidthColumn(24)}}\" [style]=\"{'text-align': 'center'}\">\n                            <!-- Số hóa đơn-->\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                        width=\"{{getWidthColumn(25)}}\" [style]=\"{'text-align': 'center'}\">\n                        <!-- Số hóa đơn-->\n                    </kendo-grid-column>\n                        <kendo-grid-messages [hidden]=\"!_isMessage\" noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\"\n                            pagerItems=\"dòng\" detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                        <!-- Child ---------------------------------------------------------------->\n                        <ng-template kendoGridDetailTemplate let-dataItem=\"dataItem\">\n\n                            <app-grid [useHeaderDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\"\n                                class=\"k-grid-crollbar\" [urlGetTotalPage]=\"urlGetPageDataGridChild\"\n                                [gridColumns]=\"gridColumnsDetail\" [useAddDeault]=\"false\" [lazyLoadPage]=\"true\"\n                                [checkboxAble]=\"false\" [autoHeight]=\"true\" [useActionDefault]=\"false\"\n                                [additionalSearchString]=\"returnDetail()\">\n                            </app-grid>\n                        </ng-template>\n\n                    </kendo-grid>\n                    <ng-template #NgayThuStr let-dataItem>\n                        <span style=\"float: left;\">\n                            {{dataItem.NgayThuStr}}\n                        </span>\n                    </ng-template>\n                    <ng-template #TiemChung let-dataItem>\n                        <span style=\"float: left;\">\n                           <span *ngIf=\"dataItem.TiemChung === true\">X</span>\n                        </span>\n                    </ng-template>\n                    <ng-template #SoBenhAn let-dataItem>\n                        <span style=\"float: left;\">\n                            <span *ngIf=\"dataItem.BenhAnSoSinh === true\">X</span>\n                        </span>\n                    </ng-template>\n                    <ng-template #tamUng let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.TamUng != null\">\n                            {{ formatPrice(dataItem.TamUng) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.TamUng == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #hoanUng let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.HoanUng != null\">\n                            {{ formatPrice(dataItem.HoanUng) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.HoanUng == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #goiDichVu let-dataItem>\n                        <div style=\"text-align:center;font-weight: bold;\" *ngIf=\"dataItem.GoiDichVu == true\">\n                            X </div>\n                    </ng-template>\n                    <ng-template #soTienThu let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.SoTienThu != null\">\n                            {{ formatPrice(dataItem.SoTienThu)}}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.SoTienThu == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #huyThu let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.HuyThu != null\">\n                            {{ formatPrice(dataItem.HuyThu) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.HuyThu == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #ThucThu let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThucThu != null\">\n                            {{ formatPrice(dataItem.ThucThu) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThucThu == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #congNo let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.CongNo != null\">\n                            {{ formatPrice(dataItem.CongNo) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.CongNo == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #tienMat let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.TienMat != null\">\n                            {{ formatPrice(dataItem.TienMat)}}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.TienMat == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #chuyenKhoan let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ChuyenKhoan != null\">\n                            {{ formatPrice(dataItem.ChuyenKhoan) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ChuyenKhoan == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #pos let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.Pos != null\">\n                            {{ formatPrice(dataItem.Pos)}}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.Pos == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #thuNoTienMat let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoTienMat != null\">\n                            {{ formatPrice(dataItem.ThuNoTienMat) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoTienMat == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #thuNoTienMat let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoTienMat != null\">\n                            {{ formatPrice(dataItem.ThuNoTienMat) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoTienMat == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #thuNoChuyenKhoan let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoChuyenKhoan != null\">\n                            {{ formatPrice(dataItem.ThuNoChuyenKhoan)}}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoChuyenKhoan == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                    <ng-template #thuNoPos let-dataItem>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoPos != null\">\n                            {{ formatPrice(dataItem.ThuNoPos) }}</div>\n                        <div style=\"text-align: right;\" *ngIf=\"dataItem.ThuNoPos == null\">\n                            {{ 0 | number:'0.2-2':'vi-VN' }}</div>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi-routing.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ThuTienVienPhiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThuTienVienPhiRoutingModule", function() { return ThuTienVienPhiRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_thu_tien_vien_phi_bao_cao_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.ts");






const routes = [
    {
        path: '',
        component: _bao_cao_thu_tien_vien_phi_bao_cao_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_5__["BaoCaoThuTienVienPhiComponent"],
        data: {
            title: 'Báo cáo thu tiền viện phí',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoThuVienPhiBenhNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        }
    }
];
let ThuTienVienPhiRoutingModule = class ThuTienVienPhiRoutingModule {
};
ThuTienVienPhiRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ThuTienVienPhiRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: BaoCaoThuTienVienPhiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuTienVienPhiModule", function() { return BaoCaoThuTienVienPhiModule; });
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
/* harmony import */ var _bao_cao_thu_tien_vien_phi_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bao-cao-thu-tien-vien-phi-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi-routing.module.ts");
/* harmony import */ var _bao_cao_thu_tien_vien_phi_bao_cao_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.ts");



















let BaoCaoThuTienVienPhiModule = class BaoCaoThuTienVienPhiModule {
};
BaoCaoThuTienVienPhiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_thu_tien_vien_phi_bao_cao_thu_tien_vien_phi_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoThuTienVienPhiComponent"]],
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
], BaoCaoThuTienVienPhiModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SearchThuNgan, Search, NhanVienThuNgan, QuayThuNgan, DateTimeFilter, BaoCaoThuTienVienPhi, BaoCaoThuPhiVienPhiQueryInfoQueryInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchThuNgan", function() { return SearchThuNgan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhanVienThuNgan", function() { return NhanVienThuNgan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuayThuNgan", function() { return QuayThuNgan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function() { return DateTimeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuTienVienPhi", function() { return BaoCaoThuTienVienPhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuPhiVienPhiQueryInfoQueryInfo", function() { return BaoCaoThuPhiVienPhiQueryInfoQueryInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SearchThuNgan {
    constructor(TuNgay = null, DenNgay = null, PhongBenhVienId = 0, NhanVienId = 0) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.PhongBenhVienId = PhongBenhVienId;
        this.NhanVienId = NhanVienId;
    }
}
class Search {
    constructor(RangeDateTimeFilter = new DateTimeFilter) {
        this.RangeDateTimeFilter = RangeDateTimeFilter;
    }
}
class NhanVienThuNgan {
    constructor(KeyId = 0, DisplayName = "Tất cả nhân viên") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class QuayThuNgan {
    constructor(KeyId = 0, DisplayName = "Tất cả các quầy") {
        this.KeyId = KeyId;
        this.DisplayName = DisplayName;
    }
}
class DateTimeFilter {
    constructor(DateStart = null, DateEnd = new Date) {
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}
class BaoCaoThuTienVienPhi {
    constructor(NhanVienId = 0, STT = null, NgayThu, NgayThuStr = null, MaBenhNhan = null, TenBenhNhan = null, SoBenhAn = null, GoiDichVu = null, SoBLHD = null, SoTienThu = 0, HuyThu = 0, ThucThu = 0, CongNo = 0, TienMat = 0, ChuyenKhoan = 0, Pos = 0, Voucher = 0, LyDo = null, NguoiThu = null) {
        this.NhanVienId = NhanVienId;
        this.STT = STT;
        this.NgayThu = NgayThu;
        this.NgayThuStr = NgayThuStr;
        this.MaBenhNhan = MaBenhNhan;
        this.TenBenhNhan = TenBenhNhan;
        this.SoBenhAn = SoBenhAn;
        this.GoiDichVu = GoiDichVu;
        this.SoBLHD = SoBLHD;
        this.SoTienThu = SoTienThu;
        this.HuyThu = HuyThu;
        this.ThucThu = ThucThu;
        this.CongNo = CongNo;
        this.TienMat = TienMat;
        this.ChuyenKhoan = ChuyenKhoan;
        this.Pos = Pos;
        this.Voucher = Voucher;
        this.LyDo = LyDo;
        this.NguoiThu = NguoiThu;
    }
}
class BaoCaoThuPhiVienPhiQueryInfoQueryInfo {
    constructor(TuNgay = null, DenNgay = null, NhanVienId = 0, PhongBenhVienId = 0, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", 
    // public searchTerms: string = "",
    Sort = []) {
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
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kb2FuaC10aHUvYmFvLWNhby10aHUtdGllbi12aWVuLXBoaS9iYW8tY2FvLXRodS10aWVuLXZpZW4tcGhpL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcYmFvLWNhb1xcYmFvLWNhby1kb2FuaC10aHVcXGJhby1jYW8tdGh1LXRpZW4tdmllbi1waGlcXGJhby1jYW8tdGh1LXRpZW4tdmllbi1waGlcXGJhby1jYW8tdGh1LXRpZW4tdmllbi1waGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9hbmgtdGh1L2Jhby1jYW8tdGh1LXRpZW4tdmllbi1waGkvYmFvLWNhby10aHUtdGllbi12aWVuLXBoaS9iYW8tY2FvLXRodS10aWVuLXZpZW4tcGhpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9hbmgtdGh1L2Jhby1jYW8tdGh1LXRpZW4tdmllbi1waGkvYmFvLWNhby10aHUtdGllbi12aWVuLXBoaS9iYW8tY2FvLXRodS10aWVuLXZpZW4tcGhpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: BaoCaoThuTienVienPhiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThuTienVienPhiComponent", function() { return BaoCaoThuTienVienPhiComponent; });
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
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bao-cao-thu-tien-vien-phi */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");














let BaoCaoThuTienVienPhiComponent = class BaoCaoThuTienVienPhiComponent {
    //================================End value total===========================
    constructor(apiService) {
        this.apiService = apiService;
        this.search = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__["Search"]();
        this.searchThuNgan = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__["SearchThuNgan"]();
        this.showExpandReLoadPage = true;
        this.nhanVienThuNgan = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__["NhanVienThuNgan"]();
        this.quayThuNgan = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__["QuayThuNgan"]();
        this.gridData = [];
        this.gridDataDetail = [];
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
        //================================Begin group aggregates ===========================
        this.aggregates = [
            { field: 'SoTienThu', aggregate: 'sum' },
            { field: 'DaHuy', aggregate: 'sum' },
            { field: 'CongNo', aggregate: 'sum' },
            { field: 'Voucher', aggregate: 'sum' },
            { field: 'ThucThu', aggregate: 'sum' },
            { field: 'TienMat', aggregate: 'sum' },
            { field: 'ChuyenKhoan', aggregate: 'sum' },
            { field: 'Pos', aggregate: 'sum' },
            { field: 'HuyThu', aggregate: 'sum' },
        ];
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__["BaoCaoThuPhiVienPhiQueryInfoQueryInfo"]();
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
    }
    ngOnInit() {
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.skipDetail = 0;
        this.take = (this.pageSize * this.skipDetail) + this.pageSize;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = this.nhanVienThuNgan.KeyId;
        this.gridColumnsMaster = [
            { Field: "STT", Title: "STT", Width: 60 },
            { Field: "HoTenNhanVien", Title: "Ngày Thu", Width: 120 },
            { Field: "SoBLHD", Title: "Số BL/HD", Width: 120 },
            { Field: "TiemChung", Title: "Tiêm chủng", MinWidth: 120 },
            { Field: "MaBenhNhan", Title: "Mã NB", MinWidth: 120 },
            { Field: "MaYTe", Title: "Mã y tế", MinWidth: 120 },
            { Field: "TenBenhNhan", Title: "Tên người bệnh", Width: 200 },
            { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 50 },
            { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 120 },
            { Field: "TotalTamUng", Title: "Tạm ứng", Width: 120 },
            { Field: "TotalHoanUng", Title: "Hoàn ứng", Width: 120 },
            { Field: "TotalSoTienThu", Title: "Số tiền thu", Width: 120 },
            { Field: "TotalHuyThu", Title: "Huỷ/Hoàn", Width: 120 },
            { Field: "GoiDichVu", Title: "Gói DV", Width: 120 },
            { Field: "TotalCongNo", Title: "Công nọ", Width: 120 },
            { Field: "TotalPos", Title: "Pos", Width: 120 },
            { Field: "TotalChuyenKhoan", Title: "Chuyển khoản", Width: 120 },
            { Field: "TotalTienMat", Title: "Tiền mặt", Width: 120 },
            { Field: "TotalThuNoTienMat", Title: "Tiền mặt", Width: 120 },
            { Field: "TotalThuNoChuyenKhoan", Title: "Chuyển khoản", Width: 120 },
            { Field: "TotalThuNoPos", Title: "Người thu", Width: 120 },
            { Field: "SoPhieuThu", Title: "Người thu", Width: 120 },
            { Field: "ChiTietCongNo", Title: "Chi tiết công nợ", Width: 120 },
            { Field: "SoHoaDonChiTiet", Title: "Số hóa đơn", Width: 120 },
            { Field: "BenhAnSoSinh", Title: "Sơ sinh", Width: 120 },
        ];
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 60 },
            { Field: "HoTenNhanVien", Title: "Ngày Thu", Width: 120 },
            { Field: "SoBLHD", Title: "Số BL/HD", Width: 120 },
            { Field: "TiemChung", Title: "Tiêm chủng", MinWidth: 120 },
            { Field: "MaBenhNhan", Title: "Mã NB", MinWidth: 120 },
            { Field: "MaYTe", Title: "Mã y tế", MinWidth: 120 },
            { Field: "TenBenhNhan", Title: "Tên người bệnh", Width: 200 },
            { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 100 },
            { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 120 },
            { Field: "TotalTamUng", Title: "Tạm ứng", Width: 140 },
            { Field: "TotalHoanUng", Title: "Hoàn ứng", Width: 140 },
            { Field: "TotalSoTienThu", Title: "Số tiền thu", Width: 140 },
            { Field: "TotalHuyThu", Title: "Huỷ/Hoàn", Width: 140 },
            { Field: "GoiDichVu", Title: "Gói DV", Width: 70 },
            { Field: "TotalCongNo", Title: "Công nợ", Width: 140 },
            { Field: "TotalPos", Title: "Pos", Width: 140 },
            { Field: "TotalChuyenKhoan", Title: "Chuyển khoản", Width: 140 },
            { Field: "TotalTienMat", Title: "Tiền mặt", Width: 140 },
            { Field: "TotalThuNoTienMat", Title: "Tiền mặt", Width: 140 },
            { Field: "TotalThuNoChuyenKhoan", Title: "Chuyển khoản", Width: 140 },
            { Field: "TotalThuNoPos", Title: "Pos", Width: 140 },
            { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 120 },
            { Field: "ChiTietCongNo", Title: "Chi tiết công nợ", Width: 150 },
            { Field: "SoHoaDonChiTiet", Title: "Số hóa đơn", Width: 120 },
            { Field: "BenhAnSoSinh", Title: "Sơ sinh", Width: 120 },
        ];
        this.gridColumnsDetail = [
            { Field: "STT", Title: "STT", Width: 60 },
            { Field: "NgayThuStr", Title: "Ngày Thu", Width: 120, Template: this.NgayThuStr },
            { Field: "SoBLHD", Title: "Số BL/HD", Width: 120 },
            { Field: "TiemChung", Title: "Tiêm chủng", MinWidth: 120, Template: this.TiemChung },
            { Field: "MaBenhNhan", Title: "Mã NB", MinWidth: 120 },
            { Field: "MaYTe", Title: "Mã y tế", MinWidth: 120 },
            { Field: "TenBenhNhan", Title: "Tên người bệnh", Width: 200 },
            { Field: "SoBenhAn", Title: "Số bệnh án", Width: 120 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 100 },
            { Field: "NguoiGioiThieu", Title: "Người giới thiệu", Width: 120 },
            { Field: "TamUng", Title: "Tạm ứng", Width: 140, Template: this.tamUng },
            { Field: "HoanUng", Title: "Hoàn ứng", Width: 140, Template: this.hoanUng },
            { Field: "SoTienThu", Title: "Số tiền thu", Width: 140, Template: this.soTienThu },
            { Field: "HuyThu", Title: "Huỷ/Hoàn", Width: 140, Template: this.huyThu },
            { Field: "GoiDichVu", Title: "Gói DV", Width: 70, Template: this.goiDichVu },
            { Field: "CongNo", Title: "Công nợ", Width: 140, Template: this.congNo },
            { Field: "Pos", Title: "Pos", Width: 140, Template: this.pos },
            { Field: "ChuyenKhoan", Title: "Chuyển khoản", Width: 140, Template: this.chuyenKhoan },
            { Field: "TienMat", Title: "Tiền mặt", Width: 140, Template: this.tienMat },
            { Field: "ThuNoTienMat", Title: "Tiền mặt", Width: 140, Template: this.thuNoTienMat },
            { Field: "ThuNoChuyenKhoan", Title: "Chuyển khoản", Width: 140, Template: this.thuNoChuyenKhoan },
            { Field: "ThuNoPos", Title: "Pos", Width: 140, Template: this.thuNoPos },
            { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 120 },
            { Field: "ChiTietCongNo", Title: "Chi tiết công nợ", Width: 150 },
            { Field: "SoHoaDonChiTiet", Title: "Số hóa đơn", Width: 120 },
            { Field: "BenhAnSoSinh", Title: "Sơ sinh", Width: 120, Template: this.SoBenhAn },
        ];
        //new Date(year, month, day, hours, minutes, seconds, milliseconds); this.minDateTuNgay.setHours(0,0,0,0);
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        if (this.search.RangeDateTimeFilter.DateStart == null) {
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
    }
    searchRefresh() {
        this.XemBaoCao();
    }
    pageChange(event) {
        this.skip = event.skip;
        this.XemBaoCao();
    }
    pageChangeDetail(event) {
        if (event != null) {
            this.skipDetail = event.skip;
            this.XemBaoCao();
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
    getFieldColumn(index) {
        return this.gridColumns[index].Field;
    }
    getTitleColumn(index) {
        return this.gridColumns[index].Title;
    }
    getWidthColumn(index) {
        return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
    }
    //daddy total master
    getFieldColumnMaster(index) {
        return this.gridColumnsMaster[index].Field;
    }
    getTitleColumnMaster(index) {
        return this.gridColumnsMaster[index].Title;
    }
    getWidthColumnMaster(index) {
        return this.gridColumnsMaster[index].Width != null ? this.gridColumnsMaster[index].Width : this.getMinWidthColumn(this.gridColumnsMaster[index].MinWidth != null ? this.gridColumnsMaster[index].MinWidth : 100);
    }
    //
    getMinWidthColumn(minWidth) {
        var widthParent = jQuery("#baoCaoChiTietDoanhthuTheoKhoaPhongGrid").parent().width();
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
    detailExpand(event) {
        this.showExpandReLoadPage = false;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = event.dataItem.NhanVienId;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = this.quayThuNgan.KeyId;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
        this.urlGetDataGridChild = "BaoCao/GetBaoCaoChiTietThuTienVienPhiForDeTailGridAsync";
        this.urlGetPageDataGridChild = "BaoCao/GetBaoCaoChiTietThuTienVienPhiForDeTailGridAsync";
    }
    returnDetail() {
        let denNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "mm/dd/yyyy");
        let tuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "mm/dd/yyyy");
        let string = tuNgay + "-" + denNgay + "-" + this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId + "-" + this.quayThuNgan.KeyId;
        return string;
    }
    chonQuay(item) {
        this.quayThuNgan = item;
    }
    chonQuayChange(item) {
        if (item != undefined) {
            this.quayThuNgan.KeyId = item;
        }
        else {
            this.quayThuNgan.KeyId = 0;
        }
    }
    chonNhanVien(item) {
        this.nhanVienThuNgan = item;
    }
    chonNhanVienChange(item) {
        if (item != undefined) {
            this.nhanVienThuNgan.KeyId = item;
        }
        else {
            this.nhanVienThuNgan.KeyId = 0;
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
    changeValueStart(event) {
        this.minDateDenNgay = new Date();
        this.minDateTuNgay = new Date();
        if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
            this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
        }
        if (this.search.RangeDateTimeFilter.DateStart == null) {
            this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
        }
    }
    XemBaoCao() {
        this._isMessage = true;
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
            this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
        }
        if (this.search.RangeDateTimeFilter.DateEnd != null) {
            this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
        }
        this.ishowViewData = true;
        this.quayThu = this.quayThuNgan.DisplayName;
        this.nguoiThu = this.nhanVienThuNgan.DisplayName;
        var searchThuNgan = new _bao_cao_thu_tien_vien_phi__WEBPACK_IMPORTED_MODULE_9__["SearchThuNgan"]();
        searchThuNgan.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        searchThuNgan.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
        searchThuNgan.PhongBenhVienId = this.quayThuNgan.KeyId;
        searchThuNgan.NhanVienId = this.nhanVienThuNgan.KeyId;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.NhanVienId = searchThuNgan.NhanVienId;
        this.baoCaoThuPhiVienPhiQueryInfoQueryInfo.PhongBenhVienId = searchThuNgan.PhongBenhVienId;
        this.apiService.post("BaoCao/GetBaoCaoChiTietThuTienVienPhiForMasterGridAsync", this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.baoCaoThuTienVienPhi = resultData.Data;
                this.gridView = {
                    data: resultData.Data,
                    total: resultData.TotalRowCount
                };
                this._isLoading = false; // show icon loading
                this.gridView.data.forEach((item, idx) => {
                    this.baoCaoChiTietThuVienPhiGrid.collapseRow(idx);
                });
                this._isLoadingTotalPage = false;
                if (this.gridView.data == null)
                    this._isMessage = true; // show massage
            }
            if (this.gridView.total != 0) {
                this.ishowView = true;
            }
            else {
                this.ishowView = false;
            }
        });
        // tính tổng sum báo cáo
        this.apiService.post("BaoCao/GetTotalBaoCaoChiTietThuTienVienPhiForGridAsync", this.baoCaoThuPhiVienPhiQueryInfoQueryInfo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                this.baoCaoThuTienVienPhi = resultData.Data;
                this.totalSoTienThu = resultData.SoTienThu;
                this.totalHuyThu = resultData.HuyThu;
                this.totalTamUng = resultData.TamUng;
                this.totalHoanUng = resultData.HoanUng;
                this.totalTienMat = resultData.TienMat;
                this.totalCongNo = resultData.CongNo;
                this.totalPos = resultData.Pos;
                this.totalChuyenKhoan = resultData.ChuyenKhoan;
                this.totalThuNoTienMat = resultData.ThuNoTienMat;
                this.totalThuNoChuyenKhoan = resultData.ThuNoChuyenKhoan;
                this.totalThuNoPos = resultData.ThuNoPos;
            }
        });
    }
    XuatBaoCao() {
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
        this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
        this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
        let data1 = this.nhanVienThuNgan.KeyId;
        let data2 = this.quayThuNgan.KeyId;
        let hosting = window.location.protocol + "//" + window.location.host;
        window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].api_url + "/BaoCao/ExportBaoCaoChiTietThuTienVienPhi?phongBenhVienId=" + this.quayThuNgan.KeyId + "&nhanVienId=" + this.nhanVienThuNgan.KeyId + "&startDate=" + this.DateStart + "&endDate=" + this.DateEnd + "&hosting=" + hosting;
    }
    formatPrice(value) {
        let val = (value / 1).toFixed(2).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
};
BaoCaoThuTienVienPhiComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["WindowComponent"], { static: false })
], BaoCaoThuTienVienPhiComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], { static: false })
], BaoCaoThuTienVienPhiComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaoCaoThuTienVienPhiComponent.prototype, "heightToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "baoCaoChiTietDoanhthuTheoKhoaPhongGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NgayThuStr', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "NgayThuStr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TiemChung', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "TiemChung", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoBenhAn', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "SoBenhAn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tamUng', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "tamUng", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoanUng', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "hoanUng", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiDichVu', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "goiDichVu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienThu', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "soTienThu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huyThu', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "huyThu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNo', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "congNo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienMat', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "tienMat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chuyenKhoan', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "chuyenKhoan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pos', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "pos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoTienMat', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "thuNoTienMat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoChuyenKhoan', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "thuNoChuyenKhoan", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoPos', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "thuNoPos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietThuVienPhiGrid', { static: true })
], BaoCaoThuTienVienPhiComponent.prototype, "baoCaoChiTietThuVienPhiGrid", void 0);
BaoCaoThuTienVienPhiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-thu-tien-vien-phi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-thu-tien-vien-phi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-thu-tien-vien-phi.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-doanh-thu/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi/bao-cao-thu-tien-vien-phi.component.scss")).default]
    })
], BaoCaoThuTienVienPhiComponent);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-doanh-thu-bao-cao-thu-tien-vien-phi-bao-cao-thu-tien-vien-phi-module-es2015.js.map