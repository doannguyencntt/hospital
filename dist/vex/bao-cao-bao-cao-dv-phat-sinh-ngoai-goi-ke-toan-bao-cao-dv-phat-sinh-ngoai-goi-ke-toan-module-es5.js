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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.html": 
        /*!**************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.html ***!
          \**************************************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                {Title:'Kế Toán', Path:''},\n                {Title:'Báo Cáo Dịch Vụ Phát Sinh Ngoài Gói Của Kế Toán ', Path:'', Active:true}\n                ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6 pb-0\">\n        <div class=\"card -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"3px grid\" fxLayoutGap.lt-sm=\"0\">\n                <app-combobox id=\"CongTyId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Chọn Đoàn\" [required]=\"true\"\n                    url=\"BaoCao/GetCongTys\" [(model)]=\"search.CongTyId\" class=\"mt-1 on-header\"\n                    (modelChange)=\"changeCongTy($event)\" style=\"padding-left: 10px;\" [popupSettings]=\"{width: 500}\">\n                </app-combobox>\n\n                <app-combobox id=\"HopDongId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"chọn hợp đồng\" [required]=\"true\"\n                    url=\"BaoCao/GetHopDongKhamSucKhoes\" [(model)]=\"search.HopDongId\" class=\"mt-1 on-header\"\n                    [reloadForGrid]=\"true\" [bind]=\"true\" (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                    [queryInfo]=\"{ParameterDependencies:'{CongTyKhamSucKhoeId:' + search.CongTyId + '}', Take: 50}\">\n                </app-combobox>\n\n                <app-datetimepicker id=\"NgayVaoVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateStart\" label=\"Tháng:Từ ngày\" class=\"mt-1 on-header\"\n                    [maxDate]=\"search.RangeDateTimeFilter.DateEnd\">\n                </app-datetimepicker>\n\n\n\n                <app-datetimepicker id=\"NgayRaVien\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Đến ngày\" class=\"mt-1 on-header\"\n                    [(model)]=\"search.RangeDateTimeFilter.DateEnd\" [minDate]=\"search.RangeDateTimeFilter.DateStart\">\n                </app-datetimepicker>\n                <div fxFlex=\"40%\" fxFlex.sm=\"40%\" class=\"pb-0\">\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XemBaoCao()\">Xem Báo Cáo</button>\n                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1 mt-2\"\n                        (click)=\"XuatBaoCao()\" style=\"float: right;\" *ngIf=\"ishowView == true\">Xuất Excel</button>\n                </div>\n                <div fxFlex=\"100%\">\n                    <kendo-grid [data]=\"gridView\" class=\"k-grid1 shared-header grid-bao-cao\" [pageable]=\"true\"\n                        [resizable]=\"true\" [height]=\"height\" [hidden]=\"ishowView != true\" [pageSize]=\"pageSize\"\n                        [skip]=\"skip\" id=\"baoCaoVienPhiThuTienGrid\"\n                        #baoCaoVienPhiThuTienGrid (columnResize)=\"columnResize($event)\" (pageChange)=\"pageChange($event)\">\n\n                        <!-- STT -->\n                        <kendo-grid-column field=\"{{getFieldColumn(0)}}\" title=\"{{getTitleColumn(0)}}\"\n                            width=\"{{getWidthColumn(0)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;font-weight: normal;\">{{dataItem.STT}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- NgayBienLai -->\n                        <kendo-grid-column field=\"{{getFieldColumn(1)}}\" title=\"{{getTitleColumn(1)}}\"\n                            width=\"{{getWidthColumn(1)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.NgayBienLaiStr}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- SoBienLai -->\n                        <kendo-grid-column field=\"{{getFieldColumn(2)}}\" title=\"{{getTitleColumn(2)}}\"\n                            width=\"{{getWidthColumn(2)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.SoBienLai}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- MaNhanVien -->\n                        <kendo-grid-column field=\"{{getFieldColumn(3)}}\" title=\"{{getTitleColumn(3)}}\"\n                            width=\"{{getWidthColumn(3)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.MaNhanVien}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- MaNguoiBenh -->\n                        <kendo-grid-column field=\"{{getFieldColumn(4)}}\" title=\"{{getTitleColumn(4)}}\"\n                            width=\"{{getWidthColumn(4)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.MaNguoiBenh}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- MaTiepNhan -->\n                        <kendo-grid-column field=\"{{getFieldColumn(5)}}\" title=\"{{getTitleColumn(5)}}\"\n                            width=\"{{getWidthColumn(5)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.MaTiepNhan}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- HoTen -->\n                        <kendo-grid-column field=\"{{getFieldColumn(6)}}\" title=\"{{getTitleColumn(6)}}\"\n                            width=\"{{getWidthColumn(6)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.HoTen}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- GioiTinh -->\n                        <kendo-grid-column field=\"{{getFieldColumn(7)}}\" title=\"{{getTitleColumn(7)}}\"\n                            width=\"{{getWidthColumn(7)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.GioiTinh}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- NamSinh -->\n                        <kendo-grid-column field=\"{{getFieldColumn(8)}}\" title=\"{{getTitleColumn(8)}}\"\n                            width=\"{{getWidthColumn(8)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.NamSinh}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <!-- DichVu -->\n                        <kendo-grid-column field=\"{{getFieldColumn(9)}}\" title=\"{{getTitleColumn(9)}}\"\n                            width=\"{{getWidthColumn(9)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p style=\"text-align: left;\">{{dataItem.TenDichVu}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- DonGiaBV -->\n                        <kendo-grid-column field=\"{{getFieldColumn(10)}}\" title=\"{{getTitleColumn(10)}}\"\n                            width=\"{{getWidthColumn(10)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalDonGiaBenhVien | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">\n                                    <p *ngIf=\"dataItem.DonGiaBenhVien != null\">{{dataItem.DonGiaBenhVien |\n                                        number:'0.2-2':'vi-VN'}}</p>\n                                    <p *ngIf=\"dataItem.DonGiaBenhVien == null\">{{0 | number:'0.2-2':'vi-VN'}}</p>\n                                </div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- DonGiaMoi -->\n                        <kendo-grid-column field=\"{{getFieldColumn(11)}}\" title=\"{{getTitleColumn(11)}}\"\n                            width=\"{{getWidthColumn(11)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalDonGiaMoi | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">\n                                    <p *ngIf=\"dataItem.DonGiaMoi != null\">{{dataItem.DonGiaMoi |\n                                        number:'0.2-2':'vi-VN'}}</p>\n                                    <p *ngIf=\"dataItem.DonGiaMoi == null\">{{0 | number:'0.2-2':'vi-VN'}}</p>\n                                </div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- SoTienMienGiam -->\n                        <kendo-grid-column field=\"{{getFieldColumn(12)}}\" title=\"{{getTitleColumn(12)}}\"\n                            width=\"{{getWidthColumn(12)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalSoTienDuocMienGiam | number:'0.2-2':'vi-VN'}}\n                                </div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">\n                                    <p *ngIf=\"dataItem.SoTienDuocMienGiam != null\">{{dataItem.SoTienDuocMienGiam |\n                                        number:'0.2-2':'vi-VN'}}</p>\n                                    <p *ngIf=\"dataItem.SoTienDuocMienGiam == null\">{{0 | number:'0.2-2':'vi-VN'}}</p>\n                                </div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- SoTienThucThu -->\n                        <kendo-grid-column field=\"{{getFieldColumn(13)}}\" title=\"{{getTitleColumn(13)}}\"\n                            width=\"{{getWidthColumn(13)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;font-weight: bold;\">{{totalSoTienThucThu |\n                                    number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;\">\n                                    <p *ngIf=\"dataItem.SoTienThucThu != null\">{{dataItem.SoTienThucThu |\n                                        number:'0.2-2':'vi-VN'}}</p>\n                                    <p *ngIf=\"dataItem.SoTienThucThu == null\">{{0 | number:'0.2-2':'vi-VN'}}</p>\n                                </div>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <!-- TamUng -->\n                        <kendo-grid-column field=\"{{getFieldColumn(14)}}\" title=\"{{getTitleColumn(14)}}\"\n                            width=\"{{getWidthColumn(14)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalTamUng | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.TamUng != null\"  class=\"TamUng {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">  {{dataItem.TamUng | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.TamUng == null\" class=\"TamUng {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\"> {{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- HoanUng -->\n                        <kendo-grid-column field=\"{{getFieldColumn(15)}}\" title=\"{{getTitleColumn(15)}}\"\n                            width=\"{{getWidthColumn(15)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalHoanUng | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.HoanUng != null\" class=\"HoanUng {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.HoanUng | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.HoanUng == null\" class=\"HoanUng {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n                        <!-- HuyHoan -->\n                        <kendo-grid-column field=\"{{getFieldColumn(16)}}\" title=\"{{getTitleColumn(16)}}\"\n                            width=\"{{getWidthColumn(16)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                <div style=\"text-align: right;\">{{totalHuyThu | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.HuyThu != null\" class=\"HuyHoan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.HuyThu | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.HuyThu == null\" class=\"HuyHoan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                        </kendo-grid-column>\n\n\n\n                        <kendo-grid-column-group title=\"Product Info\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">Hình thức thanh toán</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(17)}}\" title=\"{{getTitleColumn(17)}}\"\n                                width=\"{{getWidthColumn(17)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalCongNo | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.CongNo != null\" class=\"CongNoHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.CongNo | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.CongNo == null\" class=\"CongNoHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(18)}}\" title=\"{{getTitleColumn(18)}}\"\n                                width=\"{{getWidthColumn(18)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalPos | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.Pos != null\" class=\"PosHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.Pos | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.TienMat == null\" class=\"PosHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(19)}}\" title=\"{{getTitleColumn(19)}}\"\n                                width=\"{{getWidthColumn(19)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ChuyenKhoan != null\" class=\"ChuyenKhoanHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.ChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ChuyenKhoan == null\" class=\"ChuyenKhoanHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(20)}}\" title=\"{{getTitleColumn(20)}}\"\n                                width=\"{{getWidthColumn(20)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                                <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.TienMat != null\" class=\"TienMatHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.TienMat | number:'0.2-2':'vi-VN'}}</div>\n                                    <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.TienMat == null\" class=\"TienMatHinhThucThanhToan {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                                </ng-template>\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n\n                        <kendo-grid-column-group title=\"Product Info\">\n                            <ng-template kendoGridHeaderTemplate let-columnIndex=\"columnIndex\" let-column=\"column\">\n                                <div class=\"text-center\">Cập nhật công nợ</div>\n                            </ng-template>\n                            <kendo-grid-column field=\"{{getFieldColumn(21)}}\" title=\"{{getTitleColumn(21)}}\"\n                                width=\"{{getWidthColumn(21)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThuNoTienMat | number:'0.2-2':'vi-VN'}}</div>\n                              </ng-template>\n                              <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ThuNoTienMat != null\" class=\"TienMatCaptNhatCongNo {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.ThuNoTienMat | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ThuNoTienMat == null\" class=\"TienMatCaptNhatCongNo {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(22)}}\" title=\"{{getTitleColumn(22)}}\"\n                                width=\"{{getWidthColumn(22)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThuNoChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                              </ng-template>\n                              <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ThuNoChuyenKhoan != null\" class=\"ChuyenKhoanCaptNhatCongNo {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.ThuNoChuyenKhoan | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ThuNoChuyenKhoan == null\" class=\"ChuyenKhoanCaptNhatCongNo {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(23)}}\" title=\"{{getTitleColumn(23)}}\"\n                                width=\"{{getWidthColumn(23)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                                <ng-template kendoGridFooterTemplate let-column let-columnIndex=\"columnIndex\">\n                                    <div style=\"text-align: right;\">{{totalThuNoPos | number:'0.2-2':'vi-VN'}}</div>\n                              </ng-template>\n                              <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ThuNoPos != null\" class=\"PosCaptNhatCongNo {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{dataItem.ThuNoPos | number:'0.2-2':'vi-VN'}}</div>\n                                <div style=\"text-align: right;font-weight: normal;\" *ngIf=\"dataItem.ThuNoPos == null\" class=\"PosCaptNhatCongNo {{dataItem.SoBienLaiRemoveSpecial}} {{dataItem.STT}}\">{{0 | number:'0.2-2':'vi-VN'}}</div>\n                            </ng-template>\n                            </kendo-grid-column>\n                            <kendo-grid-column field=\"{{getFieldColumn(24)}}\" title=\"{{getTitleColumn(24)}}\"\n                                width=\"{{getWidthColumn(24)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n\n                            </kendo-grid-column>\n                        </kendo-grid-column-group>\n                        <!-- ChiTietCongNo -->\n                        <kendo-grid-column field=\"{{getFieldColumn(25)}}\" title=\"{{getTitleColumn(25)}}\"\n                            width=\"{{getWidthColumn(25)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p>{{dataItem.ChiTietCongNo}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <!-- SoHoaDon -->\n                        <kendo-grid-column field=\"{{getFieldColumn(26)}}\" title=\"{{getTitleColumn(26)}}\"\n                            width=\"{{getWidthColumn(26)}}\" [headerStyle]=\"{'text-align': 'center'}\">\n                            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                                <p>{{dataItem.SoHoaDon}}</p>\n                            </ng-template>\n                        </kendo-grid-column>\n                        <ng-template kendoPagerTemplate let-totalPages=\"totalPages\" let-currentPage=\"currentPage\">\n                            <div style=\"justify-content: center;\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\"\n                                fxLayoutAlign=\"space-between\" fxFlex=\"100%\" *ngIf=\"_showDefaultPagerTemplate\">\n                                <kendo-pager-prev-buttons></kendo-pager-prev-buttons>\n                                <kendo-pager-numeric-buttons [buttonCount]=\"5\" class=\"d-none d-sm-none d-md-block\">\n                                </kendo-pager-numeric-buttons>\n                                <button *ngIf=\"_isLoadingTotalPage\" kendoButton\n                                    class=\"btn btn-raised btn-default btn-min-width mb-0\">\n                                    <img src=\"/assets/img/loader_circle.gif\" alt=\"Đang tính...\" style=\"height: 20px;\" />\n                                </button>\n                                <kendo-pager-next-buttons></kendo-pager-next-buttons>\n                                <kendo-pager-info></kendo-pager-info>\n                                <div kendoTooltip class=\"k-icon k-i-refresh\"\n                                    style=\"order: 10;cursor: pointer; align-self: center;\" title=\"Làm mới\"\n                                    (click)=\"searchRefresh()\"></div>\n                                <div *ngIf=\"_isLoading\" class=\"grid-loading k-i-loading\"></div>\n                            </div>\n                        </ng-template>\n                        <kendo-grid-messages noRecords=\"Không có dữ liệu.\" pagerOf=\"trong số\" pagerItems=\"dòng\"\n                            detailExpand=\"Mở rộng chi tiết\" detailCollapse=\"Thu gọn chi tiết\">\n                        </kendo-grid-messages>\n                    </kendo-grid>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.scss": 
        /*!************************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.scss ***!
          \************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-grid1 {\n  position: relative;\n}\n\n.k-grid1 .k-grid-header-wrap th {\n  text-transform: uppercase;\n  font-size: 13px;\n  vertical-align: middle;\n}\n\n.k-grid1 th {\n  padding: 0px !important;\n}\n\n.k-grid1 td {\n  padding: 0px !important;\n}\n\n.k-grid1 td a {\n  color: #005dab;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.k-grid1 td a.k-plus {\n  text-decoration: none;\n}\n\n.k-grid1 .tableingroup tr:hover {\n  background: none;\n}\n\n.k-grid1 .tableingroup tr:last-child th, .k-grid1 .tableingroup tr:last-child td {\n  border-bottom: none;\n}\n\n.k-i-loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  font-size: 64px;\n  background-color: rgba(255, 255, 255, 0.3);\n  color: #ff6757;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdi1waGF0LXNpbmgtbmdvYWktZ29pLWtlLXRvYW4vYmFvLWNhby1kdi1waGF0LXNpbmgtbmdvYWktZ29pLWtlLXRvYW4tbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXGJhby1jYW8tZHYtcGhhdC1zaW5oLW5nb2FpLWdvaS1rZS10b2FuXFxiYW8tY2FvLWR2LXBoYXQtc2luaC1uZ29haS1nb2kta2UtdG9hbi1saXN0XFxiYW8tY2FvLWR2LXBoYXQtc2luaC1uZ29haS1nb2kta2UtdG9hbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby9iYW8tY2FvLWR2LXBoYXQtc2luaC1uZ29haS1nb2kta2UtdG9hbi9iYW8tY2FvLWR2LXBoYXQtc2luaC1uZ29haS1nb2kta2UtdG9hbi1saXN0L2Jhby1jYW8tZHYtcGhhdC1zaW5oLW5nb2FpLWdvaS1rZS10b2FuLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vYmFvLWNhby1kdi1waGF0LXNpbmgtbmdvYWktZ29pLWtlLXRvYW4vYmFvLWNhby1kdi1waGF0LXNpbmgtbmdvYWktZ29pLWtlLXRvYW4tbGlzdC9iYW8tY2FvLWR2LXBoYXQtc2luaC1uZ29haS1nb2kta2UtdG9hbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59IiwiLmstZ3JpZDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5rLWdyaWQxIC5rLWdyaWQtaGVhZGVyLXdyYXAgdGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5rLWdyaWQxIHRoIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5rLWdyaWQxIHRkIGEge1xuICBjb2xvcjogIzAwNWRhYjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmstZ3JpZDEgdGQgYS5rLXBsdXMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uay1ncmlkMSAudGFibGVpbmdyb3VwIHRyOmxhc3QtY2hpbGQgdGgsIC5rLWdyaWQxIC50YWJsZWluZ3JvdXAgdHI6bGFzdC1jaGlsZCB0ZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5rLWktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgY29sb3I6ICNmZjY3NTc7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.ts": 
        /*!**********************************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.ts ***!
          \**********************************************************************************************************************************************************************************/
        /*! exports provided: BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent", function () { return BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent; });
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
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.model */ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            var BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent = /** @class */ (function () {
                //================================End value total===========================
                function BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent(dialog, apiService, notificationService, authService) {
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.search = new _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_model__WEBPACK_IMPORTED_MODULE_12__["Search"]();
                    this.searchThuNgan = new _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_model__WEBPACK_IMPORTED_MODULE_12__["SearchThuNgan"]();
                    this.showExpandReLoadPage = true;
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
                    this.totalDonGiaBenhVien = 0;
                    this.totalDonGiaMoi = 0;
                    this.totalSoTienThucThu = 0;
                    this.totalSoTienDuocMienGiam = 0;
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
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo = new _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_model__WEBPACK_IMPORTED_MODULE_12__["BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo"]();
                    this.urlGetDataGridChild = "";
                    this.urlGetPageDataGridChild = "";
                }
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_19__["DocumentType"].BaoCaoDichVuPhatSinhNgoaiGoiCuaKeToan;
                    this._showDefaultPagerTemplate = this.showDefaultPagerTemplate;
                    this.skip = 0;
                    this.take = (this.pageSize * this.skip) + this.pageSize;
                    this.skipDetail = 0;
                    this.take = (this.pageSize * this.skipDetail) + this.pageSize;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.HopDongId = this.search.HopDongId;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50 },
                        { Field: "NgayBienLaiStr", Title: "Ngày biên lai", Width: 150 },
                        { Field: "SoBienLai", Title: "Số biên lai", Width: 130 },
                        { Field: "MaNhanVien", Title: "Mã nhân viên", Width: 130 },
                        { Field: "MaNguoiBenh", Title: "Mã người bệnh", MinWidth: 130 },
                        { Field: "MaTiepNhan", Title: "Mã tiếp nhận", Width: 130 },
                        { Field: "HoTen", Title: "Họ tên", MinWidth: 200 },
                        { Field: "GioiTinh", Title: "Giới tính", Width: 80 },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 80 },
                        { Field: "TenDichVu", Title: "Dịch vụ", Width: 200 },
                        { Field: "DonGiaBenhVien", Title: "Đơn giá BV", Width: 100 },
                        { Field: "DonGiaMoi", Title: "Đơn giá mới", Width: 100 },
                        { Field: "SoTienDuocMienGiam", Title: "Số tiền được miễn giảm", Width: 100 },
                        { Field: "SoTienThucThu", Title: "Số tiền thực thu", Width: 120 },
                        { Field: "TamUng", Title: "Tạm ứng", Width: 100 },
                        { Field: "HoanUng", Title: "Hoàn ứng", Width: 100 },
                        { Field: "HuyHoan", Title: "Huỷ/Hoàn", Width: 100 },
                        { Field: "CongNo", Title: "Công nợ", Width: 100 },
                        { Field: "Pos", Title: "Pos", Width: 100 },
                        { Field: "ChuyenKhoan", Title: "Chuyển khoản", Width: 120 },
                        { Field: "Tienmat", Title: "Tiền mặt", Width: 100 },
                        { Field: "TienmatCapNhat", Title: "Tiền mặt", Width: 100 },
                        { Field: "ChuyenKhoanCapNhat", Title: "Chuyển khoản", Width: 100 },
                        { Field: "PosCapNhat", Title: "Pos", Width: 120 },
                        { Field: "SoPhieuThu", Title: "Số phiếu thu", Width: 100 },
                        { Field: "ChiTietCongNo", Title: "Chi tiết công nợ", Width: 120 },
                        { Field: "SoHoaDon", Title: "Số hóa đơn", Width: 100 },
                    ];
                    //new Date(year, month, day, hours, minutes, seconds, milliseconds); this.minDateTuNgay.setHours(0,0,0,0);
                    this.minDateTuNgay = new Date();
                    this.minDateTuNgay.setHours(0, 0, 0, 0);
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.searchRefresh = function () {
                    this.XemBaoCao();
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.pageChange = function (event) {
                    this.skip = event.skip;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.Skip = event.skip;
                    this.XemBaoCao();
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.pageChangeDetail = function (event) {
                    if (event != null) {
                        this.skipDetail = event.skip;
                        this.XemBaoCao();
                    }
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.columnResize = function (event) {
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
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getFieldColumn = function (index) {
                    return this.gridColumns[index].Field;
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getTitleColumn = function (index) {
                    return this.gridColumns[index].Title;
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getWidthColumn = function (index) {
                    return this.gridColumns[index].Width != null ? this.gridColumns[index].Width : this.getMinWidthColumn(this.gridColumns[index].MinWidth != null ? this.gridColumns[index].MinWidth : 100);
                };
                //daddy total master
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getFieldColumnMaster = function (index) {
                    return this.gridColumnsMaster[index].Field;
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getTitleColumnMaster = function (index) {
                    return this.gridColumnsMaster[index].Title;
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getWidthColumnMaster = function (index) {
                    return this.gridColumnsMaster[index].Width != null ? this.gridColumnsMaster[index].Width : this.getMinWidthColumn(this.gridColumnsMaster[index].MinWidth != null ? this.gridColumnsMaster[index].MinWidth : 100);
                };
                //
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.getMinWidthColumn = function (minWidth) {
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
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.ngAfterContentInit = function () {
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
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.changeValueStart = function (event) {
                    this.minDateDenNgay = new Date();
                    this.minDateTuNgay = new Date();
                    if (this.search.RangeDateTimeFilter.DateStart != null && this.search.RangeDateTimeFilter.DateEnd != null && this.search.RangeDateTimeFilter.DateEnd > this.search.RangeDateTimeFilter.DateStart) {
                        this.search.RangeDateTimeFilter.DateEnd = this.minDateDenNgay;
                    }
                    if (this.search.RangeDateTimeFilter.DateStart == null) {
                        this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    }
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.XemBaoCao = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang tải dữ liệu...' }
                    });
                    this._isMessage = true;
                    this._isLoading = true;
                    this._isLoadingTotalPage = true;
                    // if (this.search.RangeDateTimeFilter.DateStart == null ) {
                    //   this.minDateTuNgay = new Date();
                    //   this.minDateTuNgay.setHours(0, 0, 0, 0);
                    //   this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                    // }
                    // if ( this.search.RangeDateTimeFilter.DateEnd == null) {
                    //   this.minDateTuNgay = new Date();
                    //   this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                    // }
                    if (this.search.RangeDateTimeFilter.DateStart != null) {
                        this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd != null) {
                        this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
                    }
                    if (this.search.HopDongId == null || this.search.HopDongId == 0 || this.search.CongTyId == null || this.search.CongTyId == 0) {
                        this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
                        this.dialog.closeAll();
                        return;
                    }
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.HopDongId = this.search.HopDongId;
                    this.apiService.post("BaoCao/GetBaoCaoChiTietThuTienDichVuNgoaiGoiForGridAsync", this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.baoCaoThuTienVienPhi = resultData.Data;
                            _this.gridView = {
                                data: resultData.Data,
                                total: resultData.TotalRowCount
                            };
                            if (resultData.Data.length > 0) {
                                var self = _this;
                                setTimeout(function () {
                                    var soBienLaiRemoveSpecialOld = "";
                                    var idOld = "";
                                    resultData.Data.forEach(function (element) {
                                        self.merceCell("TamUng", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("HoanUng", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("HuyHoan", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("CongNoHinhThucThanhToan", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("PosHinhThucThanhToan", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("ChuyenKhoanHinhThucThanhToan", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("TienMatHinhThucThanhToan", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("TienMatCaptNhatCongNo", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("ChuyenKhoanCaptNhatCongNo", element, soBienLaiRemoveSpecialOld, idOld);
                                        self.merceCell("PosCaptNhatCongNo", element, soBienLaiRemoveSpecialOld, idOld);
                                        soBienLaiRemoveSpecialOld = element.SoBienLaiRemoveSpecial;
                                        idOld = element.STT;
                                    });
                                });
                            }
                            _this._isLoading = false; // show icon loading
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
                        _this.dialog.closeAll();
                    });
                    // tính tổng sum báo cáo
                    this.apiService.post("BaoCao/GetTotalBaoCaoChiTietThuTienDichVuNgoaiGoiForGridAsync", this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo).subscribe(function (resultData) {
                        if (resultData !== undefined && resultData != null) {
                            _this.baoCaoThuTienVienPhi = resultData.Data;
                            _this.totalDonGiaBenhVien = resultData.DonGiaBenhVien;
                            _this.totalDonGiaMoi = resultData.DonGiaMoi;
                            _this.totalSoTienThucThu = resultData.SoTienThucThu;
                            _this.totalSoTienDuocMienGiam = resultData.SoTienDuocMienGiam;
                            _this.totalSoTienThu = resultData.SoTienThu;
                            _this.totalHuyThu = resultData.HuyThu;
                            _this.totalTamUng = resultData.TamUng;
                            _this.totalHoanUng = resultData.HoanUng;
                            _this.totalTienMat = resultData.TienMat;
                            _this.totalCongNo = resultData.CongNo;
                            _this.totalPos = resultData.Pos;
                            _this.totalChuyenKhoan = resultData.ChuyenKhoan;
                            _this.totalThuNoTienMat = resultData.ThuNoTienMat;
                            _this.totalThuNoChuyenKhoan = resultData.ThuNoChuyenKhoan;
                            _this.totalThuNoPos = resultData.ThuNoPos;
                        }
                    });
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.merceCell = function (type, element, soBienLaiRemoveSpecialOld, idOld) {
                    if (element.SoBienLaiRemoveSpecial == soBienLaiRemoveSpecialOld && jQuery("." + type + "." + element.SoBienLaiRemoveSpecial + "." + element.STT).length > 0) {
                        jQuery("." + type + "." + soBienLaiRemoveSpecialOld + "." + idOld).parent().css({ "border-bottom": "none" });
                        jQuery("." + type + "." + element.SoBienLaiRemoveSpecial + "." + element.STT).parent().css({ "border-left": "1px solid rgba(0,0,0,0.12)" });
                        jQuery("." + type + "." + element.SoBienLaiRemoveSpecial + "." + element.STT).text("");
                    }
                };
                // XuatBaoCao() { 
                //   this.dialog.open(LoadingComponent, {
                //     disableClose: true,
                //     width: '200px',
                //     height: '90px',
                //     data: { Title: 'Đang xuất excel...' }
                //   });
                //   if (this.search.RangeDateTimeFilter.DateStart == null ) {
                //     this.minDateTuNgay = new Date();
                //     this.minDateTuNgay.setHours(0, 0, 0, 0);
                //     this.search.RangeDateTimeFilter.DateStart = this.minDateTuNgay;
                //   }
                //   if ( this.search.RangeDateTimeFilter.DateEnd == null) {
                //     this.minDateTuNgay = new Date();
                //     this.minDateTuNgay.setHours(0, 0, 0, 0);
                //     this.search.RangeDateTimeFilter.DateEnd = this.minDateTuNgay;
                //   }
                //   this.DateStart = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
                //   this.DateEnd = CommonService.formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
                //   let data1 = this.search.CongTyId;
                //   let data2 = this.search.HopDongId;
                //   let hosting = window.location.protocol + "//" + window.location.host;
                //   window.location.href = environment.api_url + "/BaoCao/ExportBaoCaoChiTietThuTienDichVuNgoaiGoi?hopDongId=" + this.search.HopDongId + "&congTyId=" + this.search.CongTyId + "&startDate=" + this.DateStart + "&endDate=" + this.DateEnd + "&hosting=" + hosting;    
                //   this.dialog.closeAll();
                // }
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.formatPrice = function (value) {
                    var val = (value / 1).toFixed(2).replace('.', ',');
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.changeLookupHopDong = function (event) {
                    if (event && event.length > 0 && this.search.CongTyId && !this.search.HopDongId) {
                        this.search.HopDongId = event[0].KeyId;
                    }
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.changeCongTy = function (event) {
                    this.search.CongTyId = event;
                    this.search.HopDongId = null;
                };
                BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype.XuatBaoCao = function () {
                    var _this = this;
                    if (this.search.RangeDateTimeFilter.DateStart != null) {
                        this.DateStart = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateStart, "dd/mm/yyyy");
                    }
                    if (this.search.RangeDateTimeFilter.DateEnd != null) {
                        this.DateEnd = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].formatDateTime(this.search.RangeDateTimeFilter.DateEnd, "dd/mm/yyyy");
                    }
                    if (this.search.HopDongId == null || this.search.HopDongId == 0 || this.search.CongTyId == null || this.search.CongTyId == 0) {
                        this.notificationService.showError("Yêu cầu nhập công ty và hợp đồng");
                        return;
                    }
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.TuNgay = this.search.RangeDateTimeFilter.DateStart;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.DenNgay = this.search.RangeDateTimeFilter.DateEnd;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.HopDongId = this.search.HopDongId;
                    this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo.CongTyId = this.search.CongTyId;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Process)) {
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang xuất excel...' }
                        });
                        this.apiService.postExportExcel("BaoCao/ExportBaoCaoChiTietThuTienDichVuNgoaiGoi", this.baoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo)
                            .subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_11__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "BaoCaoDanhSachDichVuNgoaiGoiCuaKeToan" + dateTimeNow.getFullYear() + ".xlsx");
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
                return BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent;
            }());
            BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_8__["WindowComponent"], { static: false })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "windowChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmComponent"], { static: false })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "confirm", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "heightToolbar", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietDoanhthuTheoKhoaPhongGrid', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "baoCaoChiTietDoanhthuTheoKhoaPhongGrid", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NgayThuStr', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "NgayThuStr", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('TiemChung', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "TiemChung", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SoBenhAn', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "SoBenhAn", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tamUng', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "tamUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hoanUng', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "hoanUng", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('goiDichVu', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "goiDichVu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soTienThu', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "soTienThu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('huyThu', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "huyThu", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('congNo', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "congNo", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tienMat', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "tienMat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chuyenKhoan', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "chuyenKhoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pos', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "pos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoTienMat', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "thuNoTienMat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoChuyenKhoan', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "thuNoChuyenKhoan", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thuNoPos', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "thuNoPos", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('baoCaoChiTietThuVienPhiGrid', { static: true })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent.prototype, "baoCaoChiTietThuVienPhiGrid", void 0);
            BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.scss */ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.scss")).default]
                })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-routing.module.ts": 
        /*!**************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-routing.module.ts ***!
          \**************************************************************************************************************************************/
        /*! exports provided: BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule", function () { return BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_component__WEBPACK_IMPORTED_MODULE_5__["BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent"],
                    data: {
                        title: 'Báo cáo  dịch vụ phát sinh ngoài gói của kế toán ',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].BaoCaoDichVuPhatSinhNgoaiGoiCuaKeToan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    }
                }
            ];
            var BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule = /** @class */ (function () {
                function BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule() {
                }
                return BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule;
            }());
            BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.model.ts": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.model.ts ***!
          \*****************************************************************************************************************************/
        /*! exports provided: SearchThuNgan, Search, DateTimeFilter, BaoCaoDichVuPhatSinhNgoaiGoi, BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchThuNgan", function () { return SearchThuNgan; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function () { return Search; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeFilter", function () { return DateTimeFilter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuPhatSinhNgoaiGoi", function () { return BaoCaoDichVuPhatSinhNgoaiGoi; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo", function () { return BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchThuNgan = /** @class */ (function () {
                function SearchThuNgan(TuNgay, DenNgay, HopDongId, CongTyId) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (HopDongId === void 0) { HopDongId = 0; }
                    if (CongTyId === void 0) { CongTyId = 0; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.HopDongId = HopDongId;
                    this.CongTyId = CongTyId;
                }
                return SearchThuNgan;
            }());
            var Search = /** @class */ (function () {
                function Search(RangeDateTimeFilter, HopDongId, CongTyId) {
                    if (RangeDateTimeFilter === void 0) { RangeDateTimeFilter = new DateTimeFilter; }
                    if (HopDongId === void 0) { HopDongId = 0; }
                    if (CongTyId === void 0) { CongTyId = 0; }
                    this.RangeDateTimeFilter = RangeDateTimeFilter;
                    this.HopDongId = HopDongId;
                    this.CongTyId = CongTyId;
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
            var BaoCaoDichVuPhatSinhNgoaiGoi = /** @class */ (function () {
                function BaoCaoDichVuPhatSinhNgoaiGoi(NhanVienId, STT, NgayThu, NgayThuStr, MaBenhNhan, TenBenhNhan, SoBenhAn, GoiDichVu, SoBLHD, SoTienThu, HuyThu, ThucThu, CongNo, TienMat, ChuyenKhoan, Pos, Voucher, LyDo, NguoiThu) {
                    if (NhanVienId === void 0) { NhanVienId = 0; }
                    if (STT === void 0) { STT = null; }
                    if (NgayThuStr === void 0) { NgayThuStr = null; }
                    if (MaBenhNhan === void 0) { MaBenhNhan = null; }
                    if (TenBenhNhan === void 0) { TenBenhNhan = null; }
                    if (SoBenhAn === void 0) { SoBenhAn = null; }
                    if (GoiDichVu === void 0) { GoiDichVu = null; }
                    if (SoBLHD === void 0) { SoBLHD = null; }
                    if (SoTienThu === void 0) { SoTienThu = 0; }
                    if (HuyThu === void 0) { HuyThu = 0; }
                    if (ThucThu === void 0) { ThucThu = 0; }
                    if (CongNo === void 0) { CongNo = 0; }
                    if (TienMat === void 0) { TienMat = 0; }
                    if (ChuyenKhoan === void 0) { ChuyenKhoan = 0; }
                    if (Pos === void 0) { Pos = 0; }
                    if (Voucher === void 0) { Voucher = 0; }
                    if (LyDo === void 0) { LyDo = null; }
                    if (NguoiThu === void 0) { NguoiThu = null; }
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
                return BaoCaoDichVuPhatSinhNgoaiGoi;
            }());
            var BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo = /** @class */ (function () {
                function BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo(TuNgay, DenNgay, HopDongId, CongTyId, Skip, Take, PageSize, SearchString, AdditionalSearchString, 
                // public searchTerms: string = "",
                Sort) {
                    if (TuNgay === void 0) { TuNgay = null; }
                    if (DenNgay === void 0) { DenNgay = null; }
                    if (HopDongId === void 0) { HopDongId = 0; }
                    if (CongTyId === void 0) { CongTyId = 0; }
                    if (Skip === void 0) { Skip = 0; }
                    if (Take === void 0) { Take = 50; }
                    if (PageSize === void 0) { PageSize = 50; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = ""; }
                    if (Sort === void 0) { Sort = []; }
                    this.TuNgay = TuNgay;
                    this.DenNgay = DenNgay;
                    this.HopDongId = HopDongId;
                    this.CongTyId = CongTyId;
                    this.Skip = Skip;
                    this.Take = Take;
                    this.PageSize = PageSize;
                    this.SearchString = SearchString;
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.Sort = Sort;
                }
                return BaoCaoDichVuPhatSinhNgoaiGoiPhiQueryInfoQueryInfo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.module.ts": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.module.ts ***!
          \******************************************************************************************************************************/
        /*! exports provided: BaoCaoDvPhatSinhNgoaiGoiKeToanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDvPhatSinhNgoaiGoiKeToanModule", function () { return BaoCaoDvPhatSinhNgoaiGoiKeToanModule; });
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
            /* harmony import */ var _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component */ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-list.component.ts");
            /* harmony import */ var _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-routing.module */ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-routing.module.ts");
            /* harmony import */ var _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.service */ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.service.ts");
            var BaoCaoDvPhatSinhNgoaiGoiKeToanModule = /** @class */ (function () {
                function BaoCaoDvPhatSinhNgoaiGoiKeToanModule() {
                }
                return BaoCaoDvPhatSinhNgoaiGoiKeToanModule;
            }());
            BaoCaoDvPhatSinhNgoaiGoiKeToanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_list_component__WEBPACK_IMPORTED_MODULE_18__["BaoCaoDvPhatSinhNgoaiGoiKeToanListComponent"]],
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
                        _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_routing_module__WEBPACK_IMPORTED_MODULE_19__["BaoCaoDvPhatSinhNgoaiGoiKeToanRoutingModule"],
                    ],
                    providers: [
                        _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDvPhatSinhNgoaiGoiKeToanService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _bao_cao_dv_phat_sinh_ngoai_goi_ke_toan_service__WEBPACK_IMPORTED_MODULE_20__["BaoCaoDvPhatSinhNgoaiGoiKeToanService"] },
                    ],
                    entryComponents: []
                })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.service.ts": 
        /*!*******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan/bao-cao-dv-phat-sinh-ngoai-goi-ke-toan.service.ts ***!
          \*******************************************************************************************************************************/
        /*! exports provided: BaoCaoDvPhatSinhNgoaiGoiKeToanService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaoCaoDvPhatSinhNgoaiGoiKeToanService", function () { return BaoCaoDvPhatSinhNgoaiGoiKeToanService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var BaoCaoDvPhatSinhNgoaiGoiKeToanService = /** @class */ (function (_super) {
                __extends(BaoCaoDvPhatSinhNgoaiGoiKeToanService, _super);
                function BaoCaoDvPhatSinhNgoaiGoiKeToanService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'BaoCao';
                    return _this;
                }
                return BaoCaoDvPhatSinhNgoaiGoiKeToanService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            BaoCaoDvPhatSinhNgoaiGoiKeToanService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            BaoCaoDvPhatSinhNgoaiGoiKeToanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], BaoCaoDvPhatSinhNgoaiGoiKeToanService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-module-es2015.js.map
//# sourceMappingURL=bao-cao-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-module-es5.js.map
//# sourceMappingURL=bao-cao-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-bao-cao-dv-phat-sinh-ngoai-goi-ke-toan-module-es5.js.map