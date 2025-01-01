(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-don-thuoc-thong-ke-bao-cao-don-thuoc-thong-ke-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.html":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.html ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'Báo Cáo', Path:''}\n                    ,{Title:'Báo Cáo Thống Kê Đơn Thuốc', Path:''}\n                    ,{Title:'Thống Kê Đơn Thuốc', Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-datetimepicker id=\"NgayVaoVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" [(model)]=\"search.DateStart\"\n                    label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\">\n                </app-datetimepicker>\n                <app-datetimepicker id=\"NgayRaVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Đến ngày\" class=\"mt-1 on-header\"\n                    [(model)]=\"search.DateEnd\">\n                </app-datetimepicker>\n                <div fxFlex=\"70%\" fxFlex.sm=\"70%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"InbaoCao()\" style=\"float: right;\" *ngIf=\"showPrintExport\">In Báo cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" *ngIf=\"showPrintExport\">Xuất Excel</button>\n                </div>\n                <div fxFlex=\"100%\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid1 shared-header grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [hidden]=\"ishowView != true\" [pageSize]=\"pageSize\"\n                        [skip]=\"skip\"  id=\"baoCaoThongKeDonThuocGrid\"\n                        #baoCaoThongKeDonThuocGrid (columnResize)=\"columnResize($event)\">\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n\n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                            width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                            width=\"{{getWidthColumn(2)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                            width=\"{{getWidthColumn(3)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                            width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                            width=\"{{getWidthColumn(5)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                            width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                            width=\"{{getWidthColumn(7)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                            width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.MaDKBD}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                            width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                            width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                            width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                            width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                            width=\"{{getWidthColumn(13)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                            width=\"{{getWidthColumn(14)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                            width=\"{{getWidthColumn(15)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                            width=\"{{getWidthColumn(16)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                            width=\"{{getWidthColumn(17)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                            width=\"{{getWidthColumn(18)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.HamLuong}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                            width=\"{{getWidthColumn(19)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.SoLuong}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                            width=\"{{getWidthColumn(20)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.Sang}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                            width=\"{{getWidthColumn(21)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.Trua}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                            width=\"{{getWidthColumn(22)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.Chieu}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(23)}}\" title=\"{{getTitleColumn(23)}}\"\n                            width=\"{{getWidthColumn(23)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.Toi}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(24)}}\" title=\"{{getTitleColumn(24)}}\"\n                            width=\"{{getWidthColumn(24)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.Tra}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                            width=\"{{getWidthColumn(25)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(26)}}\" title=\"{{getTitleColumn(26)}}\"\n                            width=\"{{getWidthColumn(26)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(27)}}\" title=\"{{getTitleColumn(27)}}\"\n                            width=\"{{getWidthColumn(27)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div class=\"text-center\">{{dataItem.BHYT}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <kendo-grid-column field=\"{{getFieldColumn(28)}}\" title=\"{{getTitleColumn(28)}}\"\n                            width=\"{{getWidthColumn(28)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                        </kendo-grid-column>\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n                    </kendo-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.scss ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL2Jhby1jYW8tZG9uLXRodW9jLXRob25nLWtlL2Jhby1jYW8tZG9uLXRodW9jLXRob25nLWtlLWxpc3QvYmFvLWNhby1kb24tdGh1b2MtdGhvbmcta2UtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: BaoCaoDonThuocThongKeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDonThuocThongKeListComponent", function() { return BaoCaoDonThuocThongKeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _bao_cao_don_thuoc_thong_ke_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bao-cao-don-thuoc-thong-ke.model */ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.model.ts");











let BaoCaoDonThuocThongKeListComponent = class BaoCaoDonThuocThongKeListComponent {
    constructor(apiService, dialog, notificationService, authService, ref) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.gridColumns = [];
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.search = {};
        this.showGrid = false;
        this.showPrintExport = false;
        this.minDateDenNgay = null;
        this.minDateTuNgay = null;
        this.skip = 0;
        this.pageSize = 100;
        this.showDefaultPagerTemplate = true;
        this._isLoading = false;
        this._isLoadingTotalPage = false;
        this.ishowView = false;
        this.urlGetDataGridChild = "";
        this.urlGetPageDataGridChild = "";
        this.heightToolbar = 140;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_8__["DocumentType"].BaoCaoThongKeDonThuoc;
        this.skip = 0;
        this.take = (this.pageSize * this.skip) + this.pageSize;
        this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
        this.gridColumns = [
            { Field: "STT", Title: "STT", Width: 50 },
            { Field: "MaYT", Title: "Mã YT", Width: 150 },
            { Field: "SoBenhAn", Title: "Số bệnh án", Width: 100 },
            { Field: "HoVaTen", Title: "Họ và tên", Width: 150 },
            { Field: "NamSinh", Title: "Năm sinh", MinWidth: 100 },
            { Field: "GioiTinh", Title: "Giới tính", Width: 100 },
            { Field: "DiaChi", Title: "Địa chỉ", Width: 300 },
            { Field: "MaBHYT", Title: "Mã BHYT", Width: 120 },
            { Field: "MaDKBD", Title: "Mã ĐKBD", Width: 100 },
            { Field: "MaBenh", Title: "Mã bệnh", Width: 150 },
            { Field: "NgayVaoString", Title: "Ngày vào", Width: 100 },
            { Field: "NgayRaString", Title: "Ngày ra", Width: 100 },
            { Field: "ChanDoan", Title: "Chẩn đoán", Width: 200 },
            { Field: "TienSuBenh", Title: "Tiền sử bệnh", Width: 80 },
            { Field: "KhoaRa", Title: "Khoa ra", Width: 100 },
            { Field: "TrangThai", Title: "Trạng thái", Width: 100 },
            { Field: "BsKeToa", Title: "Bs Kê toa", Width: 120 },
            { Field: "TenThuoc", Title: "Tên thuốc", Width: 200 },
            { Field: "HamLuong", Title: "Hàm lượng", Width: 100 },
            { Field: "SoLuong", Title: "Số lượng", Width: 80 },
            { Field: "Sang", Title: "Sáng", Width: 80 },
            { Field: "Trua", Title: "Trưa", Width: 80 },
            { Field: "Chieu", Title: "Chiều", Width: 80 },
            { Field: "Toi", Title: "Tối", Width: 80 },
            { Field: "Tra", Title: "Trả", Width: 80 },
            { Field: "GhiChu", Title: "Ghi chú", Width: 100 },
            { Field: "KhoPhat", Title: "Kho phát", Width: 150 },
            { Field: "BHYT", Title: "BHYT", Width: 80 },
            { Field: "NgayDuyetPhieuString", Title: "Ngày duyệt phiếu", Width: 100 },
        ];
        this.minDateTuNgay = new Date();
        this.minDateTuNgay.setHours(0, 0, 0, 0);
    }
    XemBaoCao() {
        this._isLoading = true;
        this._isLoadingTotalPage = true;
        if (this.search.DateStart == null) {
            this.minDateTuNgay = new Date();
            this.minDateTuNgay.setHours(0, 0, 0, 0);
            this.search.DateStart = this.minDateTuNgay;
        }
        if (this.search.DateEnd == null) {
            this.minDateDenNgay = new Date();
            this.search.DateEnd = this.minDateDenNgay;
        }
        let baoCaoThongKeDonThuocAnVo = new _bao_cao_don_thuoc_thong_ke_model__WEBPACK_IMPORTED_MODULE_10__["BaoCaoThongKeDonThuocAnVo"]();
        baoCaoThongKeDonThuocAnVo.TuNgay = this.search.DateStart;
        baoCaoThongKeDonThuocAnVo.DenNgay = this.search.DateEnd;
        this.ishowView = true;
        this.apiService.post("BaoCao/GetBaoCaoThongKeDonThuocForGridAsync", baoCaoThongKeDonThuocAnVo).subscribe(resultData => {
            if (resultData !== undefined && resultData != null) {
                if (resultData !== undefined && resultData != null) {
                    this.showPrintExport = true;
                    this.gridView = {
                        data: resultData.Data,
                        total: resultData.TotalRowCount
                    };
                    this._isLoadingTotalPage = false;
                    this.gridView.data.forEach((item, idx) => {
                        this.baoCaoThongKeDonThuocGrid.collapseRow(idx);
                    });
                    this._isLoading = false;
                }
            }
        });
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
    searchRefresh() {
        this.XemBaoCao();
    }
    InbaoCao() {
    }
    // XuatBaoCao(){
    //   this.dialog.open(LoadingComponent, {
    //     disableClose: true,
    //     width: '200px',
    //     height: '90px',
    //     data: { Title: 'Đang xuất excel...' }
    //   });
    //   let baoCaoThongKeDonThuocAnVo = new BaoCaoThongKeDonThuocAnVo();
    //   baoCaoThongKeDonThuocAnVo.TuNgay = this.search.DateStart;
    //   baoCaoThongKeDonThuocAnVo.DenNgay = this.search.DateEnd;
    //   if(this.authService.hasPermission(this.documentType, SecurityOperation.Process)) {
    //     this.apiService.postExportExcel<string>("BaoCao/ExportThongKeDonThuoc",baoCaoThongKeDonThuocAnVo).subscribe(res => {
    //       let dateTimeNow = new Date();
    //       CommonService.downLoadFile(res, "application/vnd.ms-excel", "ThongKeDonThuoc" + dateTimeNow.getFullYear() + ".xlsx");
    //       this.dialog.closeAll();
    //     }, err => {
    //       this.notificationService.showError(err.Message);
    //       this.dialog.closeAll();
    //     })
    //   } else {
    //     this.notificationService.showError(SystemMessage.UnAuthorizedMessage);
    //   }
    // }
    XuatBaoCao() {
        const self = this;
        let baoCaoThongKeDonThuocAnVo = new _bao_cao_don_thuoc_thong_ke_model__WEBPACK_IMPORTED_MODULE_10__["BaoCaoThongKeDonThuocAnVo"]();
        baoCaoThongKeDonThuocAnVo.TuNgay = this.search.DateStart;
        baoCaoThongKeDonThuocAnVo.DenNgay = this.search.DateEnd;
        baoCaoThongKeDonThuocAnVo.hosting = window.location.protocol + "//" + window.location.host;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('BaoCao/ExportThongKeDonThuoc', baoCaoThongKeDonThuocAnVo).subscribe(resultData => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'BaoCaoThongKeDonThuoc' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
BaoCaoDonThuocThongKeListComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoThongKeDonThuocGrid', { static: true })
], BaoCaoDonThuocThongKeListComponent.prototype, "baoCaoThongKeDonThuocGrid", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BaoCaoDonThuocThongKeListComponent.prototype, "heightToolbar", void 0);
BaoCaoDonThuocThongKeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bao-cao-don-thuoc-thong-ke-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-don-thuoc-thong-ke-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-don-thuoc-thong-ke-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.scss")).default]
    })
], BaoCaoDonThuocThongKeListComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: BaoCaoDonThuocThongKeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDonThuocThongKeRoutingModule", function() { return BaoCaoDonThuocThongKeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _bao_cao_don_thuoc_thong_ke_list_bao_cao_don_thuoc_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component */ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.ts");







const routes = [
    {
        path: '',
        component: _bao_cao_don_thuoc_thong_ke_list_bao_cao_don_thuoc_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_6__["BaoCaoDonThuocThongKeListComponent"],
        data: {
            title: 'Báo cáo thống kê đơn thuốc',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].BaoCaoBSDanhSachKhamNgoaiTru,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    }
];
let BaoCaoDonThuocThongKeRoutingModule = class BaoCaoDonThuocThongKeRoutingModule {
};
BaoCaoDonThuocThongKeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BaoCaoDonThuocThongKeRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.model.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.model.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SearchBaoCao, BaoCaoThongKeDonThuocAnVo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBaoCao", function() { return SearchBaoCao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoThongKeDonThuocAnVo", function() { return BaoCaoThongKeDonThuocAnVo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SearchBaoCao {
    constructor(DateStart = null, DateEnd = null) {
        this.DateStart = DateStart;
        this.DateEnd = DateEnd;
    }
}
class BaoCaoThongKeDonThuocAnVo {
    constructor(TuNgay = null, DenNgay = null, hosting = null) {
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.hosting = hosting;
    }
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: BaoCaoDonThuocThongKeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDonThuocThongKeModule", function() { return BaoCaoDonThuocThongKeModule; });
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _bao_cao_don_thuoc_thong_ke_list_bao_cao_don_thuoc_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component */ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-list/bao-cao-don-thuoc-thong-ke-list.component.ts");
/* harmony import */ var _bao_cao_don_thuoc_thong_ke_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-don-thuoc-thong-ke-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke-routing.module.ts");
/* harmony import */ var _bao_cao_don_thuoc_thong_ke_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-don-thuoc-thong-ke.service */ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.service.ts");





















let BaoCaoDonThuocThongKeModule = class BaoCaoDonThuocThongKeModule {
};
BaoCaoDonThuocThongKeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bao_cao_don_thuoc_thong_ke_list_bao_cao_don_thuoc_thong_ke_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDonThuocThongKeListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_10__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
            _bao_cao_don_thuoc_thong_ke_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoDonThuocThongKeRoutingModule"],
        ],
        providers: [
            _bao_cao_don_thuoc_thong_ke_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDonThuocThongKeService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _bao_cao_don_thuoc_thong_ke_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDonThuocThongKeService"] },
        ]
        // ,
        //entryComponents: [
        // ]
    })
], BaoCaoDonThuocThongKeModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/bao-cao-don-thuoc-thong-ke/bao-cao-don-thuoc-thong-ke.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BaoCaoDonThuocThongKeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDonThuocThongKeService", function() { return BaoCaoDonThuocThongKeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BaoCaoDonThuocThongKeService = class BaoCaoDonThuocThongKeService {
    constructor() { }
};
BaoCaoDonThuocThongKeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaoCaoDonThuocThongKeService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-bao-cao-don-thuoc-thong-ke-bao-cao-don-thuoc-thong-ke-module-es2015.js.map