(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-dt-kham-doan-theo-nhom-dich-vu-bao-cao-dt-kham-doan-theo-nhom-dich-vu-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.html":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.html ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Thống Kê', Path:''},\n                    {Title:'Báo Cáo', Path:''},\n                    {Title:'Kế Toán', Path:''},\n                    {Title:'Doanh Thu Khám Đoàn Theo Nhóm Dịch Vụ', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"CongTyId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Chọn Đoàn\" [required]=\"true\"\n                    [bind]=\"true\" \n                    url=\"BaoCao/GetCongTyDoanhThuKhamDoanTheoDichVu\" [(model)]=\"search.CongTyId\" class=\"mt-1 on-header\"\n                    (modelChange)=\"changeCongTy($event)\" style=\"padding-left: 10px;\" [popupSettings]=\"{width: 500}\">\n                </app-combobox>\n\n                <app-combobox id=\"HopDongId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"chọn hợp đồng\" [required]=\"true\"\n                    url=\"BaoCao/GetHopDongKhamSucKhoeDoanhThuKhamDoanTheoDichVu\" [(model)]=\"search.HopDongId\" class=\"mt-1 on-header\"\n                    [reloadForGrid]=\"true\" [bind]=\"true\" (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                    [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + search.CongTyId + '}', Take: 50}\">\n                </app-combobox>\n\n                <app-datetimepicker id=\"NgayVaoVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"search.FromDate\"\n                    label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\" [maxDate]=\"search.ToDate\">\n                </app-datetimepicker>\n\n                <app-datetimepicker id=\"NgayRaVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Đến ngày\" class=\"mt-1 on-header\"\n                    [(model)]=\"search.ToDate\" [minDate]=\"search.FromDate\">\n                </app-datetimepicker>\n\n                <div fxFlex=\"40%\" fxFlex.sm=\"40%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" >Xuất Excel</button>\n                </div>\n                <div fxFlex=\"100%\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid1 shared-header grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [hidden]=\"ishowView != true\" [pageSize]=\"pageSize\"\n                        [skip]=\"skip\" id=\"baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid\"\n                        #baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid (columnResize)=\"columnResize($event)\"\n                        (pageChange)=\"pageChange($event)\" (detailExpand)=\"detailExpand($event)\"> \n\n\n\n\n\n                        <kendo-grid-span-column>\n                            <!-- STT -->\n                            <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\" width=\"{{getWidthColumn(0)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <p style=\"text-align: left;font-weight: bold;\">{{dataItem.STT}}</p>\n                                </ng-template> -->\n                            </kendo-grid-column>\n                        \n                            <!-- Mã NB -->\n                            <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\" width=\"{{getWidthColumn(1)}}\"\n                            [headerStyle]=\"{'text-align': 'center'}\">\n                            <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;font-weight: bold;\">{{dataItem.MaTN}}</p>\n                            </ng-template> -->\n                            </kendo-grid-column>\n\n                            <!-- Mã TN -->\n                            <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\" width=\"{{getWidthColumn(2)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <p style=\"text-align: left;font-weight: bold;\">{{dataItem.MaTN}}</p>\n                                </ng-template> -->\n                            </kendo-grid-column>\n                        \n                            <!-- Họ và Tên -->\n                            <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\" width=\"{{getWidthColumn(3)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <p style=\"text-align: left;font-weight: bold;\">{{dataItem.HoVaTen}}</p>\n                                </ng-template> -->\n                            </kendo-grid-column>\n                        \n                            <!-- Năm sinh -->\n                            <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\" width=\"{{getWidthColumn(4)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <p style=\"text-align: left;font-weight: bold;\">{{dataItem.NamSinh}}</p>\n                                </ng-template> -->\n                            </kendo-grid-column>\n                        \n                            <!-- GioiTinh -->\n                            <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\" width=\"{{getWidthColumn(5)}}\"\n                                [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <p style=\"text-align: left;font-weight: bold;\">{{dataItem.GioiTinh}}</p>\n                                </ng-template> -->\n                            </kendo-grid-column>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: left;\">{{ dataItem.TenCongTy}}</div>\n                            </ng-template>\n                        </kendo-grid-span-column>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                      \n\n\n\n                        <kendo-grid-column-group title=\"Product Info\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">DOANH THU DỊCH VỤ TRONG GÓI</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                                width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVKhamBenhs != null\">{{dataItem.SoTienDVKhamBenhs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVKhamBenhs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                                width=\"{{getWidthColumn(7)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalPos | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVXetNghiems != null\">{{dataItem.SoTienDVXetNghiems |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVXetNghiems == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                                width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVThamDoChucNangNoiSois != null\">\n                                        {{dataItem.SoTienDVThamDoChucNangNoiSois | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVThamDoChucNangNoiSois == null\">{{0 |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                                width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNNoiSoiTMHs != null\">{{dataItem.SoTienDVTDCNNoiSoiTMHs\n                                        | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNNoiSoiTMHs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                                width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHASieuAms!= null\">{{dataItem.SoTienDVCDHASieuAms |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHASieuAms== null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                                width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoas != null\">\n                                        {{dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoas | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoas == null\">{{0 |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                                width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCTScans != null\">{{dataItem.SoTienDVCTScans |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCTScans == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                                width=\"{{getWidthColumn(13)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                            <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVMRIs != null\">{{dataItem.SoTienDVMRIs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVMRIs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                                width=\"{{getWidthColumn(14)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVDienTimDienNaos != null\">\n                                        {{dataItem.SoTienDVDienTimDienNaos | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVDienTimDienNaos == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                                width=\"{{getWidthColumn(15)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNDoLoangXuongs != null\">\n                                        {{dataItem.SoTienDVTDCNDoLoangXuongs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNDoLoangXuongs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                                width=\"{{getWidthColumn(16)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.SoTienDVKhacs != null\">\n                                        {{dataItem.SoTienDVKhacs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.SoTienDVKhacs == null\">\n                                        {{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                            width=\"{{getWidthColumn(17)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template> -->\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.TongCongs != null\">\n                                    {{dataItem.TongCongs | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.TongCongs == null\">\n                                    {{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n\n\n                        <kendo-grid-column-group title=\"Product Info\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">DOANH THU DỊCH VỤ PHÁT SINH NGOÀI GÓI</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                                width=\"{{getWidthColumn(18)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVKhamBenhNGs != null\">{{dataItem.SoTienDVKhamBenhNGs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVKhamBenhNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                                width=\"{{getWidthColumn(19)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalPos | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVXetNghiemNGs != null\">{{dataItem.SoTienDVXetNghiemNGs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVXetNghiemNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                                width=\"{{getWidthColumn(20)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVThamDoChucNangNoiSoiNGs != null\">\n                                        {{dataItem.SoTienDVThamDoChucNangNoiSoiNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVThamDoChucNangNoiSoiNGs == null\">{{0 |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                                width=\"{{getWidthColumn(21)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNNoiSoiTMHNGs != null\">{{dataItem.SoTienDVTDCNNoiSoiTMHNGs\n                                        | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNNoiSoiTMHNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                                width=\"{{getWidthColumn(22)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHASieuAmNGs != null\">{{dataItem.SoTienDVCDHASieuAmNGs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHASieuAmNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(23)}}\" title=\"{{getTitleColumn(23)}}\"\n                                width=\"{{getWidthColumn(23)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoaNGs != null\">\n                                        {{dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoaNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoaNGs == null\">{{0 |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(24)}}\" title=\"{{getTitleColumn(24)}}\"\n                                width=\"{{getWidthColumn(24)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCTScanNGs != null\">{{dataItem.SoTienDVCTScanNGs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVCTScanNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                                width=\"{{getWidthColumn(25)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                            <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                        </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVMRINGs != null\">{{dataItem.SoTienDVMRINGs |\n                                        number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVMRINGs == null\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(26)}}\" title=\"{{getTitleColumn(26)}}\"\n                                width=\"{{getWidthColumn(26)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVDienTimDienNaoNGs != null\">\n                                        {{dataItem.SoTienDVDienTimDienNaoNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVDienTimDienNaoNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(27)}}\" title=\"{{getTitleColumn(27)}}\"\n                                width=\"{{getWidthColumn(27)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNDoLoangXuongNGs != null\">\n                                        {{dataItem.SoTienDVTDCNDoLoangXuongNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVTDCNDoLoangXuongNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(28)}}\" title=\"{{getTitleColumn(28)}}\"\n                                width=\"{{getWidthColumn(28)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVThuThuatNGs != null\">\n                                        {{dataItem.SoTienDVThuThuatNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVThuThuatNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(29)}}\" title=\"{{getTitleColumn(29)}}\"\n                                width=\"{{getWidthColumn(29)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                        <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                    </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVPhauThuatNGs != null\">\n                                        {{dataItem.SoTienDVPhauThuatNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\"\n                                        *ngIf=\"dataItem.SoTienDVPhauThuatNGs == null\">{{0 | number:'0.2-2':'vi-VN'}}\n                                    </div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(30)}}\" title=\"{{getTitleColumn(30)}}\"\n                                width=\"{{getWidthColumn(30)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                </ng-template> -->\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.SoTienDVKhacNGs != null\">\n                                        {{dataItem.SoTienDVKhacNGs | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.SoTienDVKhacNGs == null\">\n                                        {{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(31)}}\" title=\"{{getTitleColumn(31)}}\"\n                            width=\"{{getWidthColumn(31)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <!-- <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n            </ng-template> -->\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.TongCongNGs != null\">\n                                    {{dataItem.TongCongNGs | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: bold;\" *ngIf=\"dataItem.TongCongNGs == null\">\n                                    {{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                         <!-- Child ---------------------------------------------------------------->\n                         <ng-template kendoGridDetailTemplate let-dataItem=\"dataItem\">\n\n                            <app-grid [useHeaderDefault]=\"false\" [urlGetData]=\"urlGetDataGridChild\"\n                                class=\"k-grid-crollbar\" [urlGetTotalPage]=\"urlGetPageDataGridChild\" [pageable]=\"false\"\n                                [gridColumns]=\"gridChildColumns\" [useAddDeault]=\"false\" [lazyLoadPage]=\"true\" \n                                [checkboxAble]=\"false\" [autoHeight]=\"true\" [useActionDefault]=\"false\"\n                                [additionalSearchString]=\"returnDetail(dataItem)\">\n                            </app-grid>\n                        </ng-template>\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n                    </kendo-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n<ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    {{rowIndex + 1}}\n</ng-template>\n<ng-template #kBTemplate let-dataItem let-rowIndex=\"rowIndex\">\n   <div style=\"text-align: right;\" >{{dataItem.SoTienDVKhamBenh | number:'0.2-2':'vi-VN'}}</div>\n</ng-template>\n<ng-template #xNTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\" >{{dataItem.SoTienDVXetNghiem | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #nSTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVThamDoChucNangNoiSoi | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #nSTMHTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVTDCNNoiSoiTMH | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #sATemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVCDHASieuAm | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #xQuangTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoa | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #ctSanTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVCTScan | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #mRITemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVMRI | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #dtdnTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVDienTimDienNao | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #dlxTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVTDCNDoLoangXuong | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #dvKhacTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVKhac | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #tcTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.TongCong | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n\n\n\n\n <ng-template #kBTNGemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVKhamBenhNG | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #xNNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVXetNghiemNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #nSNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVThamDoChucNangNoiSoiNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #nSTMHNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVTDCNNoiSoiTMHNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #sANGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVCDHASieuAmNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #xQuangNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVCDHAXQuangThuongXQuangSoHoaNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #ctSanNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVCTScanNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #mRINGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVMRING | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #dtdnNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVDienTimDienNaoNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #dlxNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVTDCNDoLoangXuongNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #dvKhacNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.SoTienDVKhacNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n  <ng-template #tcNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n     <div style=\"text-align: right;\">{{dataItem.TongCongNG | number:'0.2-2':'vi-VN'}}</div>\n  </ng-template>\n\n  \n  <ng-template #ttNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVThuThuatNG | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>\n <ng-template #ppNGTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    <div style=\"text-align: right;\">{{dataItem.SoTienDVPhauThuatNG | number:'0.2-2':'vi-VN'}}</div>\n </ng-template>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.scss ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZHQta2hhbS1kb2FuLXRoZW8tbmhvbS1kaWNoLXZ1L2Jhby1jYW8tZHQta2hhbS1kb2FuLXRoZW8tbmhvbS1kaWNoLXZ1LWxpc3QvYmFvLWNhby1kdC1raGFtLWRvYW4tdGhlby1uaG9tLWRpY2gtdnUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.ts":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.ts ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: BaoCaoDtKhamDoanTheoNhomDichVuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDtKhamDoanTheoNhomDichVuListComponent", function() { return BaoCaoDtKhamDoanTheoNhomDichVuListComponent; });
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
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _bao_cao_dt_kham_doan_theo_nhom_dich_vu_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-dt-kham-doan-theo-nhom-dich-vu.model */ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");




















let BaoCaoDtKhamDoanTheoNhomDichVuListComponent = class BaoCaoDtKhamDoanTheoNhomDichVuListComponent {
    constructor(dialog, apiService, notificationService, authService) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.search = new _bao_cao_dt_kham_doan_theo_nhom_dich_vu_model__WEBPACK_IMPORTED_MODULE_12__["BCDoanhThuKhamDoanTheoNhomDVSearch"]();
        this.showExpandReLoadPage = true;
        this.pageSize = 50;
        this.skip = 0;
        this.skipDetail = 0;
        this.jqueryString = "";
        this.DateStart = null;
        this.DateEnd = null;
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
        this.groups = [{
                field: 'Loai',
            }, {
                field: 'TenCongTy',
            }];
        this.heightToolbar = 140;
        //================================Begin group aggregates ===========================
        this.bcDoanhThuKhamDoanTheoNhomDVSearch = new _bao_cao_dt_kham_doan_theo_nhom_dich_vu_model__WEBPACK_IMPORTED_MODULE_12__["BCDoanhThuKhamDoanTheoNhomDVSearch"]();
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_19__["DocumentType"].BaoCaoDoanhThuKhamDoanTheoNhomDichVu;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this.skipDetail = 0;
        this.take = (this.pageSize * this.skipDetail) + this.pageSize;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 50 },
            { Field: "MaNB", Title: "Mã NB", Width: 150 },
            { Field: "MaTN", Title: "Mã TN", Width: 150 },
            { Field: "HoVaTen", Title: "Họ và tên", Width: 130 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 130 },
            { Field: "GioiTinh", Title: "Giới tính", MinWidth: 130 },
            { Field: "SoTienDVKhamBenh", Title: "Khám bệnh", Width: 130 },
            { Field: "SoTienDVXetNghiem", Title: "Xét nghiệm", MinWidth: 200 },
            { Field: "SoTienDVThamDoChucNangNoiSoi", Title: "Nội soi", Width: 80 },
            { Field: "SoTienDVTDCNNoiSoiTMH", Title: "Nội soi TMH", Width: 80 },
            { Field: "SoTienDVCDHASieuAm", Title: "Siêu âm", Width: 200 },
            { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoa", Title: "X-Quang", Width: 100 },
            { Field: "SoTienDVCTScan", Title: "CT Scan", Width: 100 },
            { Field: "SoTienDVMRI", Title: "MRI", Width: 100 },
            { Field: "SoTienDVDienTimDienNao", Title: "ĐiệnTim + Điện Não", Width: 120 },
            { Field: "SoTienDVTDCNDoLoangXuong", Title: "TDCN + Đo loãng xương", Width: 100 },
            { Field: "SoTienDVKhac", Title: "DV khác", Width: 100 },
            { Field: "TongCong", Title: "Tổng cộng", Width: 100 },
            { Field: "SoTienDVKhamBenhNG", Title: "Khám bệnh", Width: 130 },
            { Field: "SoTienDVXetNghiemNG", Title: "Xét nghiệm", MinWidth: 200 },
            { Field: "SoTienDVThamDoChucNangNoiSoiNG", Title: "Nội soi", Width: 80 },
            { Field: "SoTienDVTDCNNoiSoiTMHNG", Title: "Nội soi TMH", Width: 80 },
            { Field: "SoTienDVCDHASieuAmNG", Title: "Siêu âm", Width: 200 },
            { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoaNG", Title: "X-Quang", Width: 100 },
            { Field: "SoTienDVCTScanNG", Title: "CT Scan", Width: 100 },
            { Field: "SoTienDVMRING", Title: "MRI", Width: 100 },
            { Field: "SoTienDVDienTimDienNaoNG", Title: "ĐiệnTim + Điện Não", Width: 120 },
            { Field: "SoTienDVTDCNDoLoangXuongNG", Title: "TDCN + Đo loãng xương", Width: 100 },
            { Field: "SoTienDVThuThuatNG", Title: "Thủ thuật", Width: 100 },
            { Field: "SoTienDVPhauThuatNG", Title: "Phẫu thuật", Width: 100 },
            { Field: "SoTienDVKhacNG", Title: "DV khác", Width: 100 },
            { Field: "TongCongNG", Title: "Tổng cộng", Width: 100 },
        ];
        this.gridChildColumns = [
            { Field: "STT", Title: "STT", Width: 50, Template: this.sttTemplate },
            { Field: "MaNB", Title: "Mã NB", Width: 150 },
            { Field: "MaTN", Title: "Mã TN", Width: 150 },
            { Field: "HoVaTen", Title: "Họ và tên", Width: 130 },
            { Field: "NamSinh", Title: "Năm sinh", Width: 130 },
            { Field: "GioiTinh", Title: "Giới tính", MinWidth: 130 },
            { Field: "SoTienDVKhamBenh", Title: "Khám bệnh", Width: 130, Template: this.kBTemplate },
            { Field: "SoTienDVXetNghiem", Title: "Xét nghiệm", MinWidth: 200, Template: this.xNTemplate },
            { Field: "SoTienDVThamDoChucNangNoiSoi", Title: "Nội soi", Width: 80, Template: this.nSTemplate },
            { Field: "SoTienDVTDCNNoiSoiTMH", Title: "Nội soi TMH", Width: 80, Template: this.nSTMHTemplate },
            { Field: "SoTienDVCDHASieuAm", Title: "Siêu âm", Width: 200, Template: this.sATemplate },
            { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoa", Title: "X-Quang", Width: 100, Template: this.xQuangTemplate },
            { Field: "SoTienDVCTScan", Title: "CT Scan", Width: 100, Template: this.ctSanTemplate },
            { Field: "SoTienDVMRI", Title: "MRI", Width: 100, Template: this.mRITemplate },
            { Field: "SoTienDVDienTimDienNao", Title: "ĐiệnTim + Điện Não", Width: 120, Template: this.dtdnTemplate },
            { Field: "SoTienDVTDCNDoLoangXuong", Title: "TDCN + Đo loãng xương", Width: 100, Template: this.dlxTemplate },
            { Field: "SoTienDVKhac", Title: "DV khác", Width: 100, Template: this.dvKhacTemplate },
            { Field: "TongCong", Title: "Tổng cộng", Width: 100, Template: this.tcTemplate },
            { Field: "SoTienDVKhamBenhNG", Title: "Khám bệnh", Width: 130, Template: this.kBNGTemplate },
            { Field: "SoTienDVXetNghiemNG", Title: "Xét nghiệm", MinWidth: 200, Template: this.xNNGTemplate },
            { Field: "SoTienDVThamDoChucNangNoiSoiNG", Title: "Nội soi", Width: 80, Template: this.nSNGTemplate },
            { Field: "SoTienDVTDCNNoiSoiTMHNG", Title: "Nội soi TMH", Width: 80, Template: this.nSTMHNGTemplate },
            { Field: "SoTienDVCDHASieuAmNG", Title: "Siêu âm", Width: 200, Template: this.sANGTemplate },
            { Field: "SoTienDVCDHAXQuangThuongXQuangSoHoaNG", Title: "X-Quang", Width: 100, Template: this.xQuangNGTemplate },
            { Field: "SoTienDVCTScanNG", Title: "CT Scan", Width: 100, Template: this.ctSanNGTemplate },
            { Field: "SoTienDVMRING", Title: "MRI", Width: 100, Template: this.mRINGTemplate },
            { Field: "SoTienDVDienTimDienNaoNG", Title: "ĐiệnTim + Điện Não", Width: 120 },
            { Field: "SoTienDVTDCNDoLoangXuongNG", Title: "TDCN + Đo loãng xương", Width: 100, Template: this.dtdnNGTemplate },
            { Field: "SoTienDVThuThuatNG", Title: "Thủ thuật", Width: 100, Template: this.ttNGTemplate },
            { Field: "SoTienDVPhauThuatNG", Title: "Phẫu thuật", Width: 100, Template: this.ppNGTemplate },
            { Field: "SoTienDVKhacNG", Title: "DV khác", Width: 100, Template: this.dvKhacNGTemplate },
            { Field: "TongCongNG", Title: "Tổng cộng", Width: 100, Template: this.tcNGTemplate },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
        var firstDayOfMonth = new Date(this.minDateTuNgay.getFullYear(), this.minDateTuNgay.getMonth(), 1);
        if (this.search.FromDate == null) {
            this.search.FromDate = firstDayOfMonth;
        }
        if (this.search.ToDate == null) {
            this.search.ToDate = new Date();
        }
    }
    searchRefresh() {
        this.XemBaoCao();
    }
    pageChange(event) {
        this.skip = event.skip;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.Skip = event.skip;
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
    getMinWidthColumn(minWidth) {
        var widthParent = jQuery("#baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid").parent().width();
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
    XemBaoCao() {
        //  if(this.search.HopDongId == null)
        //  {
        //    this.notificationService.showError("Yêu cầu nhập hợp đồng.")
        //  }
        //  if(this.search.CongTyId == null)
        //  {
        //    this.notificationService.showError("Yêu cầu nhập công ty.")
        //  }
        //  if(this.search.ToDate == null)
        //  {
        //    this.notificationService.showError("Yêu cầu nhập từ ngày.")
        //  }
        //  if(this.search.FromDate == null)
        //  {
        //    this.notificationService.showError("Yêu cầu nhập đến ngày.")
        //  }
        //  if(this.search.HopDongId != null && 
        //     this.search.CongTyId != null &&
        //     this.search.ToDate != null && 
        //     this.search != null )
        //     {
        //       this.dialog.open(LoadingComponent, {
        //         disableClose: true,
        //         width: '200px',
        //         height: '90px',
        //         data: { Title: 'Đang tải dữ liệu...' }
        //       });
        //       this._isMessage = true;
        //       this._isLoading = true;
        //       this._isLoadingTotalPage = true;
        //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.ToDate = this.search.ToDate;
        //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.FromDate = this.search.FromDate;
        //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.HopDongId =  this.search.HopDongId;
        //       this.bcDoanhThuKhamDoanTheoNhomDVSearch.CongTyId =  this.search.CongTyId;
        //       this.apiService.post<any>("BaoCao/GetDataBCDoanhThuKhamDoanTheoNhomDichVuToTalGroups",this.bcDoanhThuKhamDoanTheoNhomDVSearch).subscribe(resultData => {
        //         if (resultData !== undefined && resultData != null) {
        //           this.gridView = {
        //             data: resultData.Data,
        //             total: resultData.TotalRowCount
        //           };
        //           this._isLoading = false; // show icon loading
        //           this.gridView.data.forEach((item, idx) => {
        //             this.baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid.collapseRow(idx);
        //         });
        //         this._isLoadingTotalPage = false;
        //         if(this.gridView.data  == null)
        //            this._isMessage = true; // show massage
        //         }
        //         if (this.gridView.total != 0){
        //         this.ishowView = true;
        //         } else{
        //           this.ishowView = false;
        //         }
        //         this.dialog.closeAll();
        //       });
        //     }
    }
    changeLookupHopDong(event) {
        if (event && event.length > 0 && this.search.CongTyId && !this.search.HopDongId) {
            if (event.length > 1) {
                this.search.HopDongId = event[1].KeyId;
            }
            else {
                this.search.HopDongId = event[0].KeyId;
            }
            if (this.search.HopDongId == 0) {
                this.search.CongTyId = 0;
            }
        }
    }
    changeCongTy(event) {
        this.search.CongTyId = event;
        if (this.search.CongTyId == 0) {
            this.search.HopDongId = 0;
        }
        else {
            this.search.HopDongId = null;
        }
    }
    XuatBaoCao() {
        if (this.search.HopDongId == null || this.search.CongTyId == null) {
            this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
            return;
        }
        if (this.search.ToDate == null || this.search.FromDate == null) {
            this.notificationService.showError("Yêu cầu nhập từ ngày đến ngày");
            return;
        }
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.ToDate = this.search.ToDate;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.FromDate = this.search.FromDate;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.HopDongId = this.search.HopDongId;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.CongTyId = this.search.CongTyId;
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
            this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang xuất excel...' }
            });
            this.apiService.postExportExcel("BaoCao/ExportBCDoanhThuKhamDoanTheoNhomDichVu", this.bcDoanhThuKhamDoanTheoNhomDVSearch)
                .subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDoanhThuKhamDoanTheoNhomDichVu" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    detailExpand(event) {
        this.showExpandReLoadPage = false;
        this.urlGetDataGridChild = "BaoCao/GetDataBCDoanhThuKhamDoanTheoNhomDichVuChiTiet";
        this.urlGetPageDataGridChild = "BaoCao/GetDataTotalBCDoanhThuKhamDoanTheoNhomDichVuChiTiet";
    }
    returnDetail(dataItem) {
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.ToDate = this.search.ToDate;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.FromDate = this.search.FromDate;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.HopDongId = dataItem.HopDongId;
        this.bcDoanhThuKhamDoanTheoNhomDVSearch.CongTyId = dataItem.CongTyId;
        let jsonString = JSON.stringify(this.bcDoanhThuKhamDoanTheoNhomDVSearch);
        return jsonString;
    }
};
BaoCaoDtKhamDoanTheoNhomDichVuListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["WindowComponent"], { static: false })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], { static: false })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "heightToolbar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "baoCaoChiTietDoanhthuTheoKhoaPhongGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "baoCaoDoanhThuKhamDoanTheoNhomDichVuGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kBTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "kBTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xNTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "xNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nSTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "nSTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nSTMHTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "nSTMHTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sATemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "sATemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xQuangTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "xQuangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ctSanTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "ctSanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mRITemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "mRITemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dtdnTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "dtdnTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dlxTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "dlxTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dvKhacTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "dvKhacTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tcTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "tcTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('kBNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "kBNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xNNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "xNNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nSNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "nSNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nSTMHNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "nSTMHNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sANGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "sANGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xQuangNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "xQuangNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ctSanNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "ctSanNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mRINGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "mRINGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dtdnNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "dtdnNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dlxNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "dlxNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dvKhacNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "dvKhacNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tcNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "tcNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ttNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "ttNGTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ppNGTemplate', { static: true })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent.prototype, "ppNGTemplate", void 0);
BaoCaoDtKhamDoanTheoNhomDichVuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-dt-kham-doan-theo-nhom-dich-vu-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.scss")).default]
    })
], BaoCaoDtKhamDoanTheoNhomDichVuListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-routing.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-routing.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule", function() { return BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDtKhamDoanTheoNhomDichVuListComponent"],
        data: {
            title: 'Báo cáo doanh thu khám đoàn theo nhóm dịch vụ ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoDoanhThuKhamDoanTheoNhomDichVu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule = class BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule {
};
BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.model.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.model.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: BCDoanhThuKhamDoanTheoNhomDVSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BCDoanhThuKhamDoanTheoNhomDVSearch", function() { return BCDoanhThuKhamDoanTheoNhomDVSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BCDoanhThuKhamDoanTheoNhomDVSearch {
    constructor(CongTyId = 0, HopDongId = 0, FromDate = null, ToDate = null, Skip = 0, Take = 50, PageSize = 50, SearchString = "", AdditionalSearchString = "", Sort = []) {
        this.CongTyId = CongTyId;
        this.HopDongId = HopDongId;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.Skip = Skip;
        this.Take = Take;
        this.PageSize = PageSize;
        this.SearchString = SearchString;
        this.AdditionalSearchString = AdditionalSearchString;
        this.Sort = Sort;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.module.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: BaoCaoDtKhamDoanTheoNhomDichVuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDtKhamDoanTheoNhomDichVuModule", function() { return BaoCaoDtKhamDoanTheoNhomDichVuModule; });
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
/* harmony import */ var _bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list/bao-cao-dt-kham-doan-theo-nhom-dich-vu-list.component.ts");
/* harmony import */ var _bao_cao_dt_kham_doan_theo_nhom_dich_vu_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-dt-kham-doan-theo-nhom-dich-vu-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu-routing.module.ts");
/* harmony import */ var _bao_cao_dt_kham_doan_theo_nhom_dich_vu_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-dt-kham-doan-theo-nhom-dich-vu.service */ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.service.ts");





















let BaoCaoDtKhamDoanTheoNhomDichVuModule = class BaoCaoDtKhamDoanTheoNhomDichVuModule {
};
BaoCaoDtKhamDoanTheoNhomDichVuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_bao_cao_dt_kham_doan_theo_nhom_dich_vu_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDtKhamDoanTheoNhomDichVuListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bao_cao_dt_kham_doan_theo_nhom_dich_vu_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoDtKhamDoanTheoNhomDichVuRoutingModule"],
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
            _bao_cao_dt_kham_doan_theo_nhom_dich_vu_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDtKhamDoanTheoNhomDichVuService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_16__["BaseService"], useClass: _bao_cao_dt_kham_doan_theo_nhom_dich_vu_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDtKhamDoanTheoNhomDichVuService"] },
        ]
    })
], BaoCaoDtKhamDoanTheoNhomDichVuModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.service.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-dt-kham-doan-theo-nhom-dich-vu/bao-cao-dt-kham-doan-theo-nhom-dich-vu.service.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: BaoCaoDtKhamDoanTheoNhomDichVuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDtKhamDoanTheoNhomDichVuService", function() { return BaoCaoDtKhamDoanTheoNhomDichVuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let BaoCaoDtKhamDoanTheoNhomDichVuService = class BaoCaoDtKhamDoanTheoNhomDichVuService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'BaoCao';
    }
};
BaoCaoDtKhamDoanTheoNhomDichVuService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
BaoCaoDtKhamDoanTheoNhomDichVuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoDtKhamDoanTheoNhomDichVuService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-dt-kham-doan-theo-nhom-dich-vu-bao-cao-dt-kham-doan-theo-nhom-dich-vu-module-es2015.js.map