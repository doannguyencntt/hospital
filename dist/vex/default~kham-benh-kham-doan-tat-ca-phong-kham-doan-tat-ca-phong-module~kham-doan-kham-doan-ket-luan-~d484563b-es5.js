(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~d484563b"], {
        /***/ "./node_modules/@iconify/icons-ic/print.js": 
        /*!*************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/print.js ***!
          \*************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 700px;\">\n    <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n        <iframe id=\"fileKetQua\" width=\"100%\" height=\"100%\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n            allowTransparency=\"true\" background=\"transparent\">\n        </iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" (click)=\"downloadFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải file</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mb-1\">\n    <div fxFlex=\"100%\">\n        <span fxFlex=\"20%\" style=\"padding-top: 20px;\">XEM TRƯỚC KHI IN</span>\n    </div>\n\n    <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\">\n        <iframe width=\"100%\" height=\"100%\" [src]=\"src | safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <!-- in phiếu DvKT -->\n    <app-print-form textPrint=\"In Phiếu Dịch Vụ Khám và Dịch Vụ Kỹ Thuật\" type=\"PDF\" [event]=\"data\" style=\"text-align: right;\" typeSize=\"A4\" (click)=\"getSharedPrintForm()\" \n         [bodyComponent]=\"this\">\n    </app-print-form>  \n\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 1000px;\">\n    <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n        <iframe id=\"fileKetQua\" width=\"100%\" height=\"100%\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n            allowTransparency=\"true\" background=\"transparent\">\n        </iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" (click)=\"downloadFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải\n        file</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.html": 
        /*!***********************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.html ***!
          \***********************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n        {Title:'Khám Đoàn', Path: '/kham-doan'}\n        ,{Title:'Tiếp Nhận Khám Sức Khỏe Đoàn',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <kendo-splitter id=\"splitter\">\n                <kendo-splitter-pane [collapsible]=\"true\" size=\"30%\">\n                    <div class=\"pane-content\">\n                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"15px grid\" fxLayoutGap.lt-sm=\"0\">\n                            <app-combobox id=\"congTy\" fxFlex=\"70%\" fxFlex.sm=\"100%\" label=\"Tên công ty\"\n                                [required]=\"true\" url=\"KhamDoan/GetCongTys\" [(model)]=\"thongTinHopDong.CongTyId\"\n                                (modelChange)=\"changeCongTy($event)\" [reloadForGrid]=\"true\"\n                                [validationerror]=\"'CongTyId' | validationerror:validationErrors\"\n                                [popupSettings]=\"{width: 500}\">\n                            </app-combobox>\n                            <app-combobox id=\"hopDong\" fxFlex=\"30%\" fxFlex.sm=\"100%\" label=\"Số HĐ\"\n                                url=\"KhamDoan/GetHopDongKhamSucKhoes\" [required]=\"true\"\n                                [(model)]=\"thongTinHopDong.HopDongId\" (modelChange)=\"changeHopDong($event)\"\n                                [reloadForGrid]=\"true\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{CongTyId:' + thongTinHopDong.CongTyId +'}', Take: 50}\"\n                                [validationerror]=\"'HopDongId' | validationerror:validationErrors\">\n                            </app-combobox>\n                            <ng-container *ngIf=\"xemChiTietHopDong\">\n                                <app-datepicker id=\"NgayHopDong\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Ngày hợp đồng\"\n                                    [required]=\"true\" [disabled]=\"true\" [(model)]=\"thongTinHopDong.NgayHopDong\"\n                                    [validationerror]=\"'NgayHopDong' | validationerror:validationErrors\">\n                                </app-datepicker>\n                                <app-dropdownlist id=\"loaiHopDong\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Loại hợp đồng\"\n                                    url=\"KhamDoan/GetLoaiHopDongs\" [required]=\"true\" [disabled]=\"true\"\n                                    [(model)]=\"thongTinHopDong.LoaiHopDong\" [bind]=\"true\"\n                                    [validationerror]=\"'LoaiHopDong' | validationerror:validationErrors\">\n                                </app-dropdownlist>\n                                <app-dropdownlist id=\"trangThai\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Trạng thái\"\n                                    url=\"KhamDoan/GetTrangThaiHopDongs\" [disabled]=\"true\"\n                                    [(model)]=\"thongTinHopDong.TrangThai\" [bind]=\"true\" [required]=\"true\"\n                                    [validationerror]=\"'TrangThai' | validationerror:validationErrors\">\n                                </app-dropdownlist>\n\n                                <app-textboxnumeric id=\"soBenhNhan\" fxFlex=\"50%\" fxFlex.sm=\"100%\" [max]=\"999999\"\n                                    label=\"Số người bệnh\" [decimals]=\"0\" [required]=\"true\" [disabled]=\"true\"\n                                    [(model)]=\"thongTinHopDong.SoBenhNhan\"\n                                    [validationerror]=\"'SoBenhNhan' | validationerror:validationErrors\">\n                                </app-textboxnumeric>\n                                <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Ngày hiệu lực\"\n                                    [required]=\"true\" [disabled]=\"true\" [(model)]=\"thongTinHopDong.NgayHieuLuc\"\n                                    [validationerror]=\"'NgayHieuLuc' | validationerror:validationErrors\">\n                                </app-datepicker>\n                                <app-datepicker id=\"NgayKetThuc\" fxFlex=\"50%\" fxFlex.sm=\"100%\" label=\"Ngày kết thúc\"\n                                    [required]=\"true\" [disabled]=\"true\" [(model)]=\"thongTinHopDong.NgayKetThuc\"\n                                    [validationerror]=\"'NgayKetThuc' | validationerror:validationErrors\">\n                                </app-datepicker>\n                            </ng-container>\n\n\n                            <p fxFlex=\"100%\" style=\"overflow:hidden;\"><b>DANH SÁCH NHÂN VIÊN</b>\n                                <a class=\"link\" (click)=\"xemChiTietHopDong=true\" *ngIf=\"!xemChiTietHopDong\"\n                                    style=\"float: right;\">Xem chi tiết HĐ</a>\n                                <a class=\"link\" (click)=\"xemChiTietHopDong=false\" *ngIf=\"xemChiTietHopDong\"\n                                    style=\"float: right;\">Ẩn chi tiết HĐ</a>\n                            </p>\n                            <ng-template #headerTemplate>\n                                <div class=\"bg-app-bar\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0 grid\"\n                                    fxLayoutGap.lt-sm=\"0\" style=\"padding: 0 15px 15px 15px;\">\n                                    <app-checkbox class=\"mr-2\" [(model)]=\"timKiemObj.TrangThai.ChuaKham\" id=\"chuaKham\"\n                                        label=\"Chưa khám\">\n                                    </app-checkbox>\n                                    <app-checkbox class=\"mr-2\" [(model)]=\"timKiemObj.TrangThai.DangKham\" id=\"dangKham\"\n                                        label=\"Đang khám\">\n                                    </app-checkbox>\n                                    <app-checkbox class=\"mr-2\" [(model)]=\"timKiemObj.TrangThai.DaKham\" id=\"daKham\"\n                                        label=\"Đã khám\">\n                                    </app-checkbox>\n                                    <app-checkbox [(model)]=\"timKiemObj.TrangThai.DichVuPhatSinh\" id=\"dichVuPhatSinh\"\n                                        label=\"DV phát sinh\">\n                                    </app-checkbox>\n                                    <div class=\"bg-card rounded-full border\" fxFlex=\"80%\" fxFlex.sm=\"100%\"\n                                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\"\n                                        style=\"padding-right: 5px;\">\n                                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                        <input [formControl]=\"searchCtrl\"\n                                            class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                            name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\"\n                                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                                            placeholder=\"Nhập từ khóa...\" />\n                                    </div>\n                                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\"\n                                        (click)=\"clearSearch()\">\n                                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                    </button>\n                                    <div fxFlex=\"20%\" fxFlex.sm=\"100%\">\n                                        <button style=\"margin-left: 5px;\" color=\"primary\" type=\"button\" mat-raised-button mat-button\n                                            (click)=\"timKiemNangCao()\">Tìm</button>\n                                    </div>\n\n                                    <div fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                        *ngIf=\"arrNguoiBenhBatDauKhamId!=null && arrNguoiBenhBatDauKhamId.length>0\">\n                                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mt-2\"\n                                            (click)=\"xuLyBatDauKhamNhieuNhanVien()\">Bắt đầu\n                                            khám</button>\n                                        \n                                        <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mt-2 ml-2\"\n                                            (click)=\"xuLyQuayLaiChuaKhamNhieuNhanVien()\">Quay lại chưa khám</button>\n                                    </div>\n\n                                </div>\n                            </ng-template>\n                            <app-grid #gridNhanVien fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                [gridColumns]=\"gridColumns\" [allowSortDefault]=\"false\" [documentType]=\"documentype\"\n                                [useAddDeault]=\"false\" [showStt]=\"false\" [useHeaderDefault]=\"false\"\n                                [useActionDefault]=\"false\" [checkboxAble]=\"true\" [lazyLoadPage]=\"true\"\n                                heightToolbar=\"310\" [pageable]=\"true\"\n                                (extCheckboxSelection)=\"onChangeBenhNhanBatDauKham($event)\"\n                                [headerTemplate]=\"headerTemplate\" [sort]=\"sort\" [urlGetData]=\"urlGetData\"\n                                [urlGetTotalPage]=\"urlGetTotal\" [widthColumnSTT]=\"15\" titleColumnSTT=\"#\" >\n                            </app-grid>\n\n                            <ng-template #maNhanVienTemplate let-dataItem>\n                                <a (click)=\"showPopupChiTietNhanVien(dataItem)\">\n                                    <p kendoTooltip class=\"reverse-ellipsis-kham-doan l\"\n                                        title=\"{{dataItem.TenNhanVien}}\">{{dataItem.TenNhanVien}}</p>\n                                </a>\n                            </ng-template>\n                            <ng-template #tinhTrangTemplate let-dataItem>\n                                <div style=\"position: relative;\">\n                                    <span [ngClass]=\"{'': dataItem.TinhTrang == chuaKham,\n                                    'orangeText': dataItem.TinhTrang == dangKham,\n                                    'blueText': dataItem.TinhTrang == daKham}\">\n                                        {{dataItem.TenTinhTrang}}\n                                    </span>\n                                </div>\n                            </ng-template>\n\n                            <ng-template #thoiGianTiepNhanTemplate let-dataItem>\n                                <div class=\"reverse-ellipsis r\">{{dataItem.ThoiDiemTiepNhanDisplay}} </div>\n                            </ng-template>\n\n                            <ng-template #actionTemplate let-dataItem>\n                                <div kendoTooltip>\n                                    <button *ngIf=\"dataItem.TinhTrang == chuaKham\" color=\"primary\" mat-icon-button\n                                        kendoTooltip title=\"In hồ sơ\" type=\"button\" (click)=\"inHoSo(dataItem.Id)\">\n                                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                                    </button>\n\n                                    <button *ngIf=\"dataItem.TinhTrang != chuaKham\" color=\"primary\"\n                                        (click)=\"$event.stopPropagation()\" kendoTooltip title=\"In\"\n                                        [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                                        <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                                    </button>\n                                    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                        <ng-template let-customer=\"customer\" matMenuContent>\n                                            <button mat-menu-item (click)=\"inHoSoTungPhieu(1,dataItem.Id)\">\n                                                <span>Sổ KSK định kỳ</span>\n                                            </button>\n                                            <button mat-menu-item (click)=\"inHoSoTungPhieu(2,dataItem.Id)\">\n                                                <span>Phiếu đăng ký KSK</span>\n                                            </button>\n                                            <button mat-menu-item (click)=\"inHoSoTungPhieu(4,dataItem.Id)\">\n                                                <span>Bảng hướng dẫn KSK</span>\n                                            </button>\n                                            <button *ngIf=\"dataItem.TinhTrang == daKham\" mat-menu-item\n                                                (click)=\"inHoSoTungPhieu(3,dataItem.Id)\">\n                                                <span>Kết quả KSK</span>\n                                            </button>\n                                        </ng-template>\n                                    </mat-menu>\n\n                                    <button *ngIf=\"dataItem.TinhTrang == chuaKham\" class=\"ml-1\" color=\"primary\"\n                                        mat-icon-button kendoTooltip title=\"Bắt đầu khám\" type=\"button\"\n                                        (click)=\"batDauKham(dataItem)\">\n                                        <mat-icon [icIcon]=\"icCheck\"></mat-icon>\n                                    </button>\n                                </div>\n                            </ng-template>\n                        </div>\n                    </div>\n                </kendo-splitter-pane>\n\n                <kendo-splitter-pane>\n                    <div class=\"pane-content\" *ngIf=\"idSelect!=null\">\n                        <app-kham-doan-tiep-nhan-nhan-vien-detail-popup [Id]=\"idSelect\"\n                            [IsDichVuPhatSinh]=\"timKiemObj.TrangThai.DichVuPhatSinh\" (saveDone)=\"timKiemNangCao()\">\n                        </app-kham-doan-tiep-nhan-nhan-vien-detail-popup>\n                    </div>\n                </kendo-splitter-pane>\n            </kendo-splitter>\n            <!-- <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Tiếp Nhận Khám Sức Khỏe Đoàn</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-combobox id=\"congTy\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\"\n                        url=\"KhamDoan/GetCongTys\" [(model)]=\"thongTinHopDong.CongTyId\" (modelChange)=\"changeCongTy($event)\"\n                        [reloadForGrid]=\"true\"\n                        [validationerror]=\"'CongTyId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-combobox id=\"hopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số hợp đồng\" url=\"KhamDoan/GetHopDongKhamSucKhoes\"\n                        [required]=\"true\" [(model)]=\"thongTinHopDong.HopDongId\"  (modelChange)=\"changeHopDong($event)\"\n                        [reloadForGrid]=\"true\" [autoSelectFirstItem]=\"true\" [bind]=\"true\" (dataForLookupChange)=\"changeLookupHopDong($event)\"\n                        [queryInfo]=\"{ParameterDependencies:'{CongTyId:' + thongTinHopDong.CongTyId +'}', Take: 50}\"\n                        [validationerror]=\"'HopDongId' | validationerror:validationErrors\">\n                    </app-combobox>\n                    <app-datepicker id=\"NgayHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hợp đồng\" [required]=\"true\"\n                        [disabled]=\"true\" [(model)]=\"thongTinHopDong.NgayHopDong\"\n                        [validationerror]=\"'NgayHopDong' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-dropdownlist id=\"loaiHopDong\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Loại hợp đồng\"\n                        url=\"KhamDoan/GetLoaiHopDongs\" [required]=\"true\" [disabled]=\"true\" [(model)]=\"thongTinHopDong.LoaiHopDong\"\n                        [bind]=\"true\"\n                        [validationerror]=\"'LoaiHopDong' | validationerror:validationErrors\">\n                    </app-dropdownlist>\n                    <app-dropdownlist id=\"trangThai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Trạng thái\" url=\"KhamDoan/GetTrangThaiHopDongs\"\n                        [disabled]=\"true\" [(model)]=\"thongTinHopDong.TrangThai\" [bind]=\"true\"\n                        [required]=\"true\" [validationerror]=\"'TrangThai' | validationerror:validationErrors\">\n                    </app-dropdownlist>\n\n                    <app-textboxnumeric id=\"soBenhNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [max]=\"999999\" label=\"Số người bệnh\" [decimals]=\"0\"\n                        [required]=\"true\"  [disabled]=\"true\" [(model)]=\"thongTinHopDong.SoBenhNhan\"\n                        [validationerror]=\"'SoBenhNhan' | validationerror:validationErrors\">\n                    </app-textboxnumeric>\n                    <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày hiệu lực\" [required]=\"true\"\n                        [disabled]=\"true\" [(model)]=\"thongTinHopDong.NgayHieuLuc\"\n                        [validationerror]=\"'NgayHieuLuc' | validationerror:validationErrors\">\n                    </app-datepicker>\n                    <app-datepicker id=\"NgayKetThuc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày kết thúc\" [required]=\"true\"\n                        [disabled]=\"true\" [(model)]=\"thongTinHopDong.NgayKetThuc\"\n                        [validationerror]=\"'NgayKetThuc' | validationerror:validationErrors\">\n                    </app-datepicker>\n\n                    <h3 fxFlex=\"100%\" class=\"sub-title\">Danh Sách Nhân Viên</h3>\n                    <ng-template #headerTemplate>\n                        <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <app-checkbox [(model)]=\"timKiemObj.TrangThai.ChuaKham\" id=\"chuaKham\" label=\"Chưa khám\" class=\"ml-2\"\n                                (modelChange)=\"timKiemNangCao()\">\n                            </app-checkbox>\n                            <app-checkbox [(model)]=\"timKiemObj.TrangThai.DangKham\" id=\"dangKham\" label=\"Đang khám\" class=\"ml-2\"\n                                (modelChange)=\"timKiemNangCao()\">\n                            </app-checkbox>\n                            <app-checkbox [(model)]=\"timKiemObj.TrangThai.DaKham\" id=\"daKham\" label=\"Đã khám\" class=\"ml-2\"\n                                (modelChange)=\"timKiemNangCao()\">\n                            </app-checkbox>\n                            <app-checkbox [(model)]=\"timKiemObj.TrangThai.DichVuPhatSinh\" id=\"dichVuPhatSinh\" label=\"Dịch vụ phát sinh\" class=\"ml-2\"\n                                (modelChange)=\"timKiemNangCao()\">\n                            </app-checkbox>\n                            <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                                    type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                                    (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                            </div>\n                            <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                            </button>\n\n                            <button style=\"margin-left: auto;\" type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" (click)=\"xuLyBatDauKhamNhieuNhanVien()\">Bắt đầu khám</button>\n                        </div>\n                    </ng-template>\n                    <app-grid #gridNhanVien fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridColumns]=\"gridColumns\"\n                        [allowSortDefault]=\"false\" [documentType]=\"documentype\" [useAddDeault]=\"false\" [showStt]=\"false\"\n                        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"true\" [lazyLoadPage]=\"true\"\n                        maxHeight=\"500\" [pageable]=\"true\" (extCheckboxSelection)=\"onChangeBenhNhanBatDauKham($event)\"\n                        [headerTemplate]=\"headerTemplate\" [sort]=\"sort\"\n                        [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetTotal\">\n                    </app-grid>\n\n                    <ng-template #maNhanVienTemplate let-dataItem>\n                        <a (click)=\"showPopupChiTietNhanVien(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis-kham-doan l\" title=\"{{dataItem.TenNhanVien}}\">{{dataItem.TenNhanVien}}</p>\n                        </a>\n                    </ng-template>\n                    <ng-template #tinhTrangTemplate let-dataItem>\n                        <div style=\"position: relative;\">\n                            <span [ngClass]=\"{'': dataItem.TinhTrang == chuaKham,\n                                    'orangeText': dataItem.TinhTrang == dangKham,\n                                    'blueText': dataItem.TinhTrang == daKham}\">\n                                {{dataItem.TenTinhTrang}}\n                            </span>\n                        </div>\n                    </ng-template>\n\n                    <ng-template #thoiGianTiepNhanTemplate let-dataItem>\n                        <div class=\"reverse-ellipsis r\">{{dataItem.ThoiDiemTiepNhanDisplay}} </div>\n                    </ng-template>\n\n                    <ng-template #actionTemplate let-dataItem>\n                        <div class=\"text-center\" kendoTooltip>\n                            <button *ngIf=\"dataItem.TinhTrang == chuaKham\" color=\"primary\" mat-icon-button kendoTooltip title=\"In hồ sơ\" type=\"button\" (click)=\"inHoSo(dataItem.Id)\">\n                                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            </button>\n\n                            <button *ngIf=\"dataItem.TinhTrang != chuaKham\" color=\"primary\" (click)=\"$event.stopPropagation()\" kendoTooltip title=\"In\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            </button>\n                            <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                                <ng-template let-customer=\"customer\" matMenuContent>\n                                    <button mat-menu-item (click)=\"inHoSoTungPhieu(1,dataItem.Id)\">\n                                        <span>Sổ KSK định kỳ</span>\n                                    </button>\n                                    <button mat-menu-item (click)=\"inHoSoTungPhieu(2,dataItem.Id)\">\n                                        <span>Phiếu đăng ký KSK</span>\n                                    </button>\n                                    <button mat-menu-item (click)=\"inHoSoTungPhieu(4,dataItem.Id)\">\n                                        <span>Bảng hướng dẫn KSK</span>\n                                    </button>\n                                    <button *ngIf=\"dataItem.TinhTrang == daKham\" mat-menu-item (click)=\"inHoSoTungPhieu(3,dataItem.Id)\">\n                                        <span>Kết quả KSK</span>\n                                    </button>\n                                </ng-template>\n                            </mat-menu>\n\n                            <button *ngIf=\"dataItem.TinhTrang == chuaKham\" class=\"ml-1\" color=\"primary\" mat-icon-button kendoTooltip title=\"Bắt đầu khám\" type=\"button\" (click)=\"batDauKham(dataItem)\">\n                                <mat-icon [icIcon]=\"icCheck\"></mat-icon>\n                            </button>\n                        </div>\n                    </ng-template>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Hồ sơ khám sức khỏe ({{arrFileUrl.length}} file)</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 550px;\">\n    <div class=\"container-iframe\">\n        <ng-container [ngSwitch]=\"arrFileUrl.length > 0\">\n            <div *ngSwitchCase=\"true\">\n                <ng-container *ngFor=\"let item of arrFileUrl, let i = index\">\n                    <iframe id=\"{{i}}\" width=\"100%\" height=\"550px\" frameborder=\"0\" [src]=\"item | safe\"\n                        type=\"application/pdf\" allowTransparency=\"true\" background=\"transparent\" style=\"display:none\"\n                        onload=\"this.style.display = 'block';\"></iframe>\n                </ng-container>\n            </div>\n            <div *ngSwitchDefault>Không có dữ liệu</div>\n        </ng-container>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" *ngIf=\"arrFilePdf.length > 0\" (click)=\"downloadAllFile()\" mat-stroked-button color=\"primary\"\n        class=\"mr-1 mt-4\">Tải tất cả</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.html": 
        /*!***************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.html ***!
          \***************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">Lựa chọn</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 120px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        Bạn muốn in hồ sơ nào:\n        <ul fxFlex=\"100%\">\n            <li>\n                <app-checkbox id=\"hoSoKham\" name=\"hoSoKham\" fxFlex.lt-md=\"auto\" label=\"Sổ KSK định kỳ\" \n                    [(model)]=\"chonPhieuInKhamSucKhoe.SoKhamSucKhoeDinhKy\">\n                </app-checkbox>\n            </li>\n            <li>\n                <app-checkbox id =\"phieuChiDinh\" name=\"phieuChiDinh\" fxFlex.lt-md=\"auto\" label=\"Phiếu đăng ký KSK\" \n                    [(model)]=\"chonPhieuInKhamSucKhoe.PhieuDangKyKhamSucKhoe\">\n                </app-checkbox>\n            </li>\n            <li>\n                <app-checkbox id =\"phieuHuongDan\" name=\"phieuHuongDan\" fxFlex.lt-md=\"auto\" label=\"Bảng hướng dẫn KSK\" \n                    [(model)]=\"chonPhieuInKhamSucKhoe.BangHuongDanKhamSucKhoe\">\n                </app-checkbox>\n            </li>\n        </ul>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Không</button>\n    <button mat-raised-button mat-button color=\"primary\" (click)=\"close('ok')\">In</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.html": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.html ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Tiếp Nhận',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap.lt-sm=\"0\">\n            <div fxFlex=\"100%\" class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                    fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                        name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\"\n                        (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                </div>\n                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                </button>\n\n                <!-- <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                    <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                </button>\n                <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <div *ngFor=\"let column of _gridColumnsFilter\">\n                        <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                            <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                {{ column.Title }}\n                            </mat-checkbox>\n                        </button>\n                    </div>\n                </mat-menu>\n\n                <button class=\"mr-6\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\" \n                    (click)=\"xuLyXuatExcel()\">\n                    <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                </button> -->\n            </div>\n            <kendo-tabstrip fxFlex=\"100%\">\n                <kendo-tabstrip-tab [title]=\"'CHƯA HOÀN THÀNH KHÁM'\" [selected]=\"true\">\n                    <ng-template kendoTabContent>\n                        <app-grid #gridChuaHoanThanhKham [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                            [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                            [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\"\n                            gridDataSource=\" \">\n                        </app-grid>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n                <kendo-tabstrip-tab [title]=\"'ĐÃ HOÀN THÀNH KHÁM'\">\n                    <ng-template kendoTabContent>\n                        <app-grid #gridDaHoanThanhKham [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                            [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\"\n                            [searchString]=\"timKiemObj.SearchString\" [showStt]=\"true\"\n                            gridDataSource=\" \">\n                        </app-grid>\n                    </ng-template>\n                </kendo-tabstrip-tab>\n            </kendo-tabstrip>\n        </div>\n                \n                <!-- urlGetData=\"NhapKhoMau/GetDataForGridDuyetNhapKhoMau\"\n                    urlGetTotalPage=\"NhapKhoMau/GetTotalPageForGridDuyetNhapKhoMau\" -->\n        \n                <ng-template #tenHopDongTemplate let-dataItem>\n                    <a (click)=\"xemChiTiet(1)\"><p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.TenHopDong}}\">qưeqweqw{{dataItem.TenHopDong}}</p></a>\n                </ng-template>\n\n                <ng-template #soLuongBenhNhanTemplate let-dataItem>\n                    {{dataItem.SoLuongBenhNhan | number}}\n                </ng-template>\n                <ng-template #soLuongBenhNhanDaDenTemplate let-dataItem>\n                    {{dataItem.SoLuongBenhNhanDaDen | number}}\n                </ng-template>\n                <ng-template #ngayBatDauKhamTemplate let-dataItem>\n                    {{dataItem.NgayBatDauKhamDisplay}}\n                </ng-template>\n                <ng-template #ngayKetThucKhamTemplate let-dataItem>\n                    {{dataItem.NgayKetThucKhamDisplay}}\n                </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.html ***!
          \*******************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'Tiếp Nhận Khám Sức Khỏe Đoàn', Path: '/kham-doan/tiep-nhan', queryParams: {holdQuery : true}}\n        ,{Title: 'Chi Tiết Khám Sức Khỏe Nhân Viên',Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Khám Sức Khỏe Nhân Viên</h2>\n                <label *ngIf=\"isHoanThanhKham\" class=\"blueText\">Đã khám</label>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\"> -->\n                <div id=\"form-content\">\n                    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                        <h3 fxFlex=\"100%\" class=\"sub-title\">Thông tin hành chính <label *ngIf=\"isHoanThanhKham\" class=\"blueText\" style=\"float: right;text-transform: initial;font-weight: bold;\">Đã khám</label></h3>\n                        <app-textbox id=\"maNhanVien\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã NV\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.MaNhanVien\"\n                            [maxlength]=\"20\" [disabled]=\"isHoanThanhKham\"\n                            [validationerror]=\"'HopDongKhamSucKhoeNhanVien.MaNhanVien' | validationerror:validationErrors\">\n                        </app-textbox>\n                        <app-textbox id=\"hoTen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Họ tên\"  [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HoTen\"\n                            [maxlength]=\"100\" [disabled]=\"isHoanThanhKham\" [required]=\"true\"\n                            [validationerror]=\"'HopDongKhamSucKhoeNhanVien.HoTen' | validationerror:validationErrors\">\n                        </app-textbox>\n                        <app-textbox id=\"hoTenKhac\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Họ tên khác\" \n                            [maxlength]=\"100\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HoTenKhac\">\n                        </app-textbox>\n                        <app-datepicker id=\"NgaySinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Ngày sinh\" [disabled]=\"isHoanThanhKham\" [required]=\"true\"\n                            [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh\" (modelChange)=\"ThongTinBenhNhanNgaySinhChange($event)\"\n                            [validationerror]=\"'HopDongKhamSucKhoeNhanVien.NgayThangNamSinh' | validationerror:validationErrors\">\n                        </app-datepicker>\n                        <app-textboxnumeric id=\"namSinh\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"Năm sinh\" format=\"0\" min=\"1\" max=\"9999\"\n                            (modelChange)=\"namSinhChange($event)\"\n                            [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh\"  [disabled]=\"isHoanThanhKham || thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh\">\n                        </app-textboxnumeric>\n                        <app-textboxnumeric id=\"tuoi\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [max]=\"999\" label=\"Tuổi\" format=\"0\" min=\"0\" max=\"999\"\n                            [disabled]=\"true\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Tuoi\">\n                        </app-textboxnumeric>\n                \n                        <app-textbox id=\"soDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số điện thoại\" \n                            [maxlength]=\"12\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.SoDienThoai\">\n                        </app-textbox>\n                        <app-radio fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"gioiTinh\" [items]=\"[{Value:1,Text:'Nam'},{Value:2,Text:'Nữ'}]\"\n                            (modelChange)=\"changeGioiTinh($event)\"\n                            label=\"Giới Tính\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh\" [required]=\"true\"\n                            [validationerror]=\"'HopDongKhamSucKhoeNhanVien.GioiTinh' | validationerror:validationErrors\">\n                        </app-radio>\n                        <app-combobox id=\"ngheNghiep\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nghề nghiệp\" [bind]=\"true\"\n                            url=\"TiepNhanBenhNhan/GetNgheNghiep\"  [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgheNghiepId\">\n                        </app-combobox>\n                        <app-combobox id=\"quocTinh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quốc tịch\" [bind]=\"true\"\n                            url=\"TiepNhanBenhNhan/GetQuocTich\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuocTichId\">\n                        </app-combobox>\n                        <app-combobox id=\"danToc\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Dân tộc\" [bind]=\"true\"\n                            url=\"TiepNhanBenhNhan/GetDanToc\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DanTocId\">\n                        </app-combobox>\n                \n                        <app-combobox id=\"TinhThanhPho\" fxFlex=\"20%\" fxFlex.sm=\"20%\" bind=\"true\" popupSettings=\"null\"\n                            label=\"Tỉnh/Thành Phố\" class=\"item-no-padding\" [template]=\"tinhThanhTemplate\" [disabled]=\"isHoanThanhKham\"\n                            [templateHeader]=\"tinhThanhTemplateHeader\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId\"\n                            url=\"TiepNhanBenhNhan/GetTinhThanh/?quanHuyenId={{thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId}}\" hierarchyKeyToSend=\"tinhThanh\"\n                            (modelChange)=\"TinhThanhPhoChange($event)\">\n                            <ng-template #tinhThanhTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <th width=\"20%\">Mã</th>\n                                        <th>Tên</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #tinhThanhTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-combobox>\n                        <app-combobox #comboboxQuanHuyen id=\"QuanHuyen\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Quận/Huyện\" bind=\"true\" popupSettings=\"null\"\n                            class=\"item-no-padding\" [template]=\"quanHuyenTemplate\" [templateHeader]=\"quanHuyenTemplateHeader\" [disabled]=\"isHoanThanhKham\"\n                            [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId\" (modelChange)=\"QuanHuyenChange($event)\"\n                            url=\"TiepNhanBenhNhan/GetQuanHuyen/?phuongXaId={{thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId}}\"\n                            hierarchyKeyToListen=\"tinhThanh\"  hierarchyKeyToSend=\"quanHuyen\">\n                            <ng-template #quanHuyenTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <th width=\"20%\">Mã</th>\n                                        <th>Tên</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #quanHuyenTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-combobox>\n                        <app-combobox id=\"PhuongXa\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Phường/Xã\" class=\"item-no-padding\" popupSettings=\"null\"\n                            #comboboxPhuongXa url=\"TiepNhanBenhNhan/GetPhuongXa\" hierarchyKeyToListen=\"quanHuyen\" [bind]=\"true\"\n                            [template]=\"phuongXaTemplate\" [templateHeader]=\"phuongXaTemplateHeader\" [disabled]=\"isHoanThanhKham\"\n                            [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId\"\n                            (modelChange)=\"PhuongXaChange($event)\">\n                            <ng-template #phuongXaTemplateHeader let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <th width=\"20%\">Mã</th>\n                                        <th>Tên</th>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                            <ng-template #phuongXaTemplate let-dataItem>\n                                <table width=\"100%\" class=\"table-combobox\">\n                                    <tr>\n                                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                                        <td>{{dataItem.Ten}}</td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </app-combobox>\n                        <app-textbox id=\"soNha\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số nhà\" \n                            [maxlength]=\"200\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DiaChi\">\n                        </app-textbox>\n                        <app-textbox id=\"soCMTHC\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Số CMT/HC\" [required]=\"true\"\n                            [maxlength]=\"12\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.SoChungMinhThu\"\n                            [validationerror]=\"'HopDongKhamSucKhoeNhanVien.SoChungMinhThu' | validationerror:validationErrors\">\n                        </app-textbox>\n                \n                        <app-textbox id=\"email\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Email\" \n                            [maxlength]=\"200\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Email\"\n                            [validationerror]=\"'HopDongKhamSucKhoeNhanVien.Email' | validationerror:validationErrors\">\n                        </app-textbox>\n                        <app-textbox id=\"tenDonViBP\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên đơn vị/BP\" \n                            [maxlength]=\"300\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TenDonViHoacBoPhan\">\n                        </app-textbox>\n                        <app-combobox id=\"nhomMau\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nhóm máu\" [bind]=\"true\"\n                            url=\"NhapKhoMau/GetListNhomMau\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NhomMau\">\n                        </app-combobox>\n                        <app-combobox id=\"rh\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"RH\" [bind]=\"true\"\n                            url=\"NhapKhoMau/GetListYeuToRh\"  [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.YeuToRh\">\n                        </app-combobox>\n                        <app-dropdownlist id=\"honNhan\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Hôn nhân\" [bind]=\"true\"\n                            url=\"KhamDoan/GetTinhTrangHonNhans\" [disabled]=\"isHoanThanhKham\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan\"\n                            (modelChange)=\"changeTinhTrangHonNhan($event)\">\n                        </app-dropdownlist>\n                \n                        <div fxFlex=\"20%\" fxFlex.sm=\"20%\">\n                            <div class=\"container-custom no-label\">\n                                <label>&nbsp;</label>\n                                <div fxLayout=\"row\" fxLayoutGap=\"16px\">\n                                    <app-checkbox fxFlex=\"100%\" value=\"true\" id=\"MangThai\" label=\"Mang thai\" [disabled]=\"isHoanThanhKham || thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh == gioiTinhNam\" \n                                    [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai\"\n                                    (modelChange)=\"changeMangThai($event)\"></app-checkbox>\n                                </div>\n                            </div>\n                        </div>\n                        <app-autocomplete id=\"nhomDTKSK\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NhomDoiTuongKhamSucKhoe\"\n                            url=\"KhamDoan/GetListNhomDoiTuongKhamSucKhoe\" label=\"Nhóm ĐT KSK\" maxlength=\"100\"  [disabled]=\"isHoanThanhKham\">\n                        </app-autocomplete>\n                \n                        <h3 fxFlex=\"100%\" class=\"sub-title\">Thông tin dịch vụ</h3>\n                        <ng-container *ngIf=\"!isHoanThanhKham\">\n                            <!-- <app-dropdownlist *ngIf=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId\" id=\"loaiNhomDichVu\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                label=\"Loại dịch vụ\" url=\"KhamDoan/GetLoaiDichVuTrenHeThongVaGoiChungs\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                [(model)]=\"themDichVu.LoaiNhomDichVuId\" [popupSettings]=\"null\" [required]=\"true\"\n                                (modelChange)=\"changeLoaiNhomDichVu($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{HopDongKhamSucKhoeId:' + thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId +'}', Take: 50}\"\n                                [validationerror]=\"'LoaiNhomDichVuId' | validationerror:validationDichVuErrors\">\n                            </app-dropdownlist>\n    \n                            <app-combobox id=\"dichVu\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Dịch vụ\"\n                                url=\"KhamDoan/GetDichVuKhamBenhBenhVienVaDichVuKyThuatBenhVienFullNhoms\" [required]=\"true\"\n                                [(model)]=\"themDichVu.DichVuBenhVienId\" [template]=\"dichVuTemplate\" [templateHeader]=\"dichVuTemplateHeader\"\n                                (selectionChange)=\"loaiGiaChange($event, 'dichvu')\" (modelChange)=\"changeDichVuChiDinh($event)\"\n                                (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\" hierarchyKeyToSend=\"DichVuId\"\n                                [queryInfo]=\"getQueryInfoLookupDichVuTrongGoi()\"\n                                popupSettings=\"null\" [validationerror]=\"'DichVuBenhVienId' | validationerror:validationDichVuErrors\">\n                                <ng-template #dichVuTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #dichVuTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                \n                            <app-dropdownlist *ngIf=\"themDichVu.LaDichVuKham == false\" id=\"LoaiGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                label=\"Loại giá\" url=\"KhamDoan/GetLoaiGiaDichVuKyThuat\" [autoSelectFirstItem]=\"true\" [required]=\"true\"  [bind]=\"true\"\n                                [(model)]=\"themDichVu.LoaiGiaId\" [popupSettings]=\"null\" (modelChange)=\"loaiGiaChange($event, 'gia')\" [disabled]=\"themDichVu.GoiKhamSucKhoeId\"\n                                (keyup)=\"onKey($event)\" (openDropDownList)=\"openCombobox($event)\" hierarchyKeyToListen=\"DichVuId\"\n                                [validationerror]=\"'LoaiGiaId' | validationerror:validationDichVuErrors\">\n                            </app-dropdownlist>\n                            \n                            <app-dropdownlist *ngIf=\"themDichVu.LaDichVuKham != false\" id=\"LoaiGia\" fxFlex=\"10%\" fxFlex.sm=\"10%\"\n                                label=\"Loại giá\" url=\"KhamDoan/GetLoaiGiaDichVuKhamBenh\" [autoSelectFirstItem]=\"true\" [required]=\"true\" [bind]=\"true\"\n                                [(model)]=\"themDichVu.LoaiGiaId\" [popupSettings]=\"null\" (modelChange)=\"loaiGiaChange($event, 'gia')\" [disabled]=\"themDichVu.GoiKhamSucKhoeId\"\n                                (keyup)=\"onKey($event)\" (openDropDownList)=\"openCombobox($event)\"\n                                [validationerror]=\"'LoaiGiaId' | validationerror:validationDichVuErrors\">\n                            </app-dropdownlist>\n                \n                            <app-textboxnumeric id=\"soLuong\" fxFlex=\"5%\" fxFlex.sm=\"5%\" [max]=\"999\" label=\"SL\" [decimals]=\"0\"\n                                [(model)]=\"themDichVu.SoLan\" [required]=\"true\" (modelChange)=\"changeSoLan($event)\"\n                                (keyup)=\"onKey($event)\" [min]=\"1\"\n                                [validationerror]=\"'SoLan' | validationerror:validationDichVuErrors\">\n                            </app-textboxnumeric>\n                            <ng-container *ngIf=\"!themDichVu.GoiKhamSucKhoeId\">\n                                <app-textboxnumeric id=\"donGiaBenhVien\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [max]=\"999999999\" label=\"ĐG BV\" [decimals]=\"0\"\n                                    [disabled]=\"true\" [(model)]=\"themDichVu.DonGiaBenhVien\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"donGiaMoi\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [max]=\"999999999\" label=\"ĐG mới\" [decimals]=\"0\"\n                                    [min]=\"0\" [(model)]=\"themDichVu.DonGiaMoi\" [required]=\"true\" (modelChange)='changeDonGiaMoi($event)'\n                                    (keyup)=\"onKey($event)\" [disabled]=\"themDichVu.GoiKhamSucKhoeId\"\n                                    [validationerror]=\"'DonGiaMoi' | validationerror:validationDichVuErrors\">\n                                </app-textboxnumeric>\n                                <app-textboxnumeric id=\"thanhTien\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [max]=\"999999999\" label=\"Thành tiền\" [decimals]=\"0\"\n                                    [disabled]=\"true\" [(model)]=\"themDichVu.ThanhTien\">\n                                </app-textboxnumeric>\n                            </ng-container>\n                            <app-combobox id=\"noiThucHien\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Nơi thực hiện\" url=\"KhamDoan/GetKhoaPhongGoiKhams\"\n                                [(model)]=\"themDichVu.NoiThucHienId\" [required]=\"true\" popupSettings=\"null\" [reloadForGrid]=\"true\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham:' + themDichVu.LaDichVuKham +', HinhThucKhamBenh: ' + hinhThucKham +', DichVuId:' + themDichVu.DichVuBenhVienId+ ', HopDongKhamSucKhoeId:'+thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId +'}', Take: 50}\"\n                                [template]=\"khoaPhongTemplate\" [templateHeader]=\"khoaPhongTemplateHeader\"\n                                (openCombobox)=\"openCombobox($event)\" (keyup)=\"onKey($event)\" [autoSelectFirstItem]=\"!themDichVu.GoiKhamSucKhoeId\" \n                                (dataForLookupChange)=\"changeLookupNoiThucHien($event, !themDichVu.GoiKhamSucKhoeId)\"\n                                [validationerror]=\"'NoiThucHienId' | validationerror:validationDichVuErrors\">\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                            <div fxFlex=\"100%\" fxLayoutAlign=\"end center\">\n                                <button type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\" (click)=\"xuLyHuyThemDichVu()\">Hủy</button>\n                                <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\" (click)=\"xuLyThemDichVu()\">Thêm</button>\n                            </div> -->\n                        \n                            <app-dropdownlist *ngIf=\"thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId\" id=\"loaiNhomDichVu\" fxFlex=\"20%\" fxFlex.sm=\"20%\"\n                                label=\"Loại dịch vụ\" url=\"KhamDoan/GetLoaiDichVuTrenHeThongVaGoiChungs\" [autoSelectFirstItem]=\"true\" [bind]=\"true\"\n                                [(model)]=\"themDichVuMultiselect.LoaiNhomDichVuId\" [popupSettings]=\"null\" [required]=\"true\"\n                                (modelChange)=\"changeLoaiNhomDichVuMultiselect($event)\" (selectionChange)=\"chonNhomDichVuMultiselect($event)\"\n                                [queryInfo]=\"{ParameterDependencies:'{HopDongKhamSucKhoeId:' + thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId +'}', Take: 50}\"\n                                [validationerror]=\"'LoaiNhomDichVuId' | validationerror:validationDichVuErrors\">\n                            </app-dropdownlist>\n    \n                            <app-multiselect id=\"dvkt\" fxFlex=\"60%\" fxFlex.sm=\"60%\" label=\"Dịch vụ\" [modelText]=\"\" class=\"item-no-padding\"\n                                [queryInfo]=\"getQueryInfoLookupDichVuTrongGoiMultiselect()\" [template]=\"dichVuKyThuatTemplate\"\n                                [templateHeader]=\"dichVuKyThuatTemplateHeader\" [(model)]=\"themDichVuMultiselect.DichVus\"\n                                url=\"KhamDoan/GetDichVuKhamBenhBenhVienVaDichVuKyThuatBenhVienFullNhomKeyStrings\" [autoClose]=\"false\"\n                                [validationerror]=\"'DichVus' | validationerror:validationDichVuErrors\" required=\"true\">\n                                <ng-template #dichVuKyThuatTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"20%\">Mã</th>\n                                            <th width=\"55%\">Dịch vụ</th>\n                                            <th width=\"25%\">Đơn giá</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #dichVuKyThuatTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                            <td width=\"55%\">{{dataItem.Ten}}</td>\n                                            <td width=\"25%\">{{dataItem.DonGia | number:'0.2-2':'vi-VN'}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-multiselect>\n    \n                            <div fxFlex=\"20%\">\n                                <div fxFlex=\"100%\" fxLayoutAlign=\"start center\">\n                                    <button type=\"button\" color=\"primary\" mat-raised-button mat-button class=\"mr-1\"\n                                        (click)=\"xuLyThemDichVuMultiselect()\">Thêm</button>\n                                        <button type=\"button\" color=\"primary\" mat-stroked-button mat-button class=\"mr-1\"\n                                            (click)=\"xuLyHuyThemDichVuMultiselect()\">Hủy</button>\n                                </div>\n                            </div>\n                        </ng-container>\n                        <ng-container *ngIf=\"hasDichVuThem\">\n                            <h3 fxFlex=\"100%\" class=\"sub-title\">Dịch vụ thêm</h3>\n                            <!-- grid dịch vụ thêm -->\n                            <ng-container *ngIf=\"isChuaKham\">\n                                <app-grid #gridDichVuThemChuaKham fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"dichVuThem\"\n                                    [gridColumns]=\"gridColumnDichVuThems\" [documentType]=\"documentType\" [useAddDeault]=\"false\" class=\"k-grid-border\"\n                                    [useHeaderDefault]=\"false\" [groups]='groupThemDichVus' [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                    [maxHeight]=\"400\" [lazyLoadPage]=\"true\" [showStt]=\"true\" style=\"width: 1px;\"\n                                    [pageable]=\"false\" [removeGroupFooterIfIsOnlyOne]=\"true\" [gridDataSource]=\"dataSourceDichVuThem\">\n                                </app-grid>\n                            </ng-container>\n                            <ng-container *ngIf=\"!isChuaKham\">\n                                <app-grid #gridDichVuThemDaChiDinh fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"dichVuThem\"\n                                    [gridColumns]=\"gridColumnDichVuThems\" [documentType]=\"documentType\" [useAddDeault]=\"false\" class=\"k-grid-border\"\n                                    [useHeaderDefault]=\"false\" [groups]='groupThemDichVus' [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                                    [maxHeight]=\"400\" [lazyLoadPage]=\"true\" [showStt]=\"true\" style=\"width: 1px;\" [allowSortDefault]=\"false\"\n                                    [additionalSearchString]=\"queryDichVuDaChiDinh\" (extOnDataBound)=\"onDataBoundDichVuDaChiDinh($event)\"\n                                    [pageable]=\"false\" [removeGroupFooterIfIsOnlyOne]=\"true\" \n                                    urlGetData=\"KhamDoan/GetDataDichVuChiDinhKhamSucKhoeNhanVienForGrid\" urlGetTotalPage=\"KhamDoan/GetTotalDichVuChiDinhKhamSucKhoeNhanVienForGrid\">\n                                </app-grid>\n                                <!--  (extOnDataBound)=\"extOnDataBound($event)\"  -->\n                            </ng-container>\n                           \n                        </ng-container>\n                \n                        <app-checkbox *ngIf=\"isDichVuPhatSinh\" fxFlex=\"100%\" value=\"true\" id=\"showDichVuGoi\" label=\"Hiển thị dịch vụ trong gói\"\n                            [(model)]=\"isShowGridDichVuGoi\"></app-checkbox>\n                        <!-- <h3 fxFlex=\"100%\" class=\"sub-title\">Gói khám: <label class=\"blueText\">{{thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TenGoiKhamSucKhoe}}</label></h3> -->\n                        <h3 *ngIf=\"isShowGridDichVuGoi\" fxFlex=\"100%\" class=\"sub-title\">Gói khám: <label class=\"blueText\">{{tenGoiKhamHienTaiDisplay}}</label></h3>\n                        <!-- grid gói dịch vụ -->\n                        <ng-container *ngIf=\"isChuaKham\">\n                            <app-grid [hidden]=\"!isShowGridDichVuGoi\" #gridGoiDichVuChuaKham masterName=\"gridGoiDichVuChuaKham\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                [gridColumns]=\"gridColumns\" [groups]=\"groups\" [allowSortDefault]=\"true\" [documentType]=\"documentType\"\n                                [useAddDeault]=\"false\" class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                [checkboxAble]=\"false\" maxHeight=\"500\" [lazyLoadPage]=\"true\" [showStt]=\"true\"\n                                [gridDataSource]=\"dataSourceGoiKham\" style=\"width: 1px;\" [pageable]=\"false\">\n                            </app-grid>\n                        </ng-container>\n                        <ng-container *ngIf=\"isChuaKham == false && queryDichVuChiDinhTrongGoi\">\n                            <app-grid [hidden]=\"!isShowGridDichVuGoi\" #gridGoiDichVuDaChiDinh fxFlex=\"100%\" fxFlex.sm=\"100%\" masterName=\"dichVu\"\n                                [gridColumns]=\"gridColumns\" [groups]=\"groups\" [allowSortDefault]=\"false\" [documentType]=\"documentType\"\n                                [useAddDeault]=\"false\" class=\"k-grid-border\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                [checkboxAble]=\"false\" maxHeight=\"500\" [lazyLoadPage]=\"true\" [showStt]=\"true\"\n                                style=\"width: 1px;\" [pageable]=\"false\" \n                                [additionalSearchString]=\"queryDichVuChiDinhTrongGoi\"\n                                (extOnDataBound)=\"dataBoundGridDichVuTrongGoi($event)\"\n                                urlGetData=\"KhamDoan/GetDataDichVuChiDinhKhamSucKhoeNhanVienForGrid\" urlGetTotalPage=\"KhamDoan/GetTotalDichVuChiDinhKhamSucKhoeNhanVienForGrid\">\n                            </app-grid>\n                            <!-- (extOnDataBound)=\"dataBoundGridDichVuTrongGoi($event)\" -->\n                        </ng-container>\n    \n                        <div fxFlex=\"100%\" *ngIf=\"hasDichVuThem\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\"\n                            style=\"padding-top: 10px;\">\n                        \n                            <div fxFlex=\"100%\">\n                                <fieldset style=\"border:1px solid #ccc;border-radius: 5px;padding: 7px 15px 8px 15px;background: #e3f2fd; text-align: right;\">\n                                    <ul class=\"inline\">\n                                        <li>Tổng cộng: \n                                            <strong style=\"color:blue\">{{(isChuaKham ? tinhTongTienDichVuChuaBatDauKham() : tongThanhTienTatCaDichVu )| number:'0.2-2':'vi-VN'}}</strong>\n                                        </li>\n                                    </ul>\n                                </fieldset>\n                            </div>\n                        </div>\n                        \n                        <ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n                            <strong>{{value}}</strong>\n                        </ng-template>\n                        <ng-template #loaiGiaTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <!-- <app-combobox id=\"loaiGia{{rowIndex}}\" class=\"no-label\" label=\" \" [url]=\"dataItem.LaDichVuKham ? 'KhamDoan/GetLoaiGiaDichVuKhamBenh' : 'KhamDoan/GetLoaiGiaDichVuKyThuat'\" [required]=\"true\" [disabled]=\"isHoanThanhKham\"\n                                [popupSettings]=\"null\" [(model)]=\"dataItem.LoaiGiaId\" [bind]=\"true\"\n                                [validationerror]=\"'HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems['+rowIndex+'].LoaiGiaId' | validationerror:validationErrors\">\n                            </app-combobox> -->\n                            {{dataItem.TenLoaiGia}}\n                        </ng-template>\n                        <ng-template #soLuongTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <app-textboxnumeric *ngIf=\"!dataItem.GoiKhamSucKhoeId && !dataItem.GoiKhamSucKhoeDichVuPhatSinhId\" id=\"soLuong{{rowIndex}}\" [max]=\"999\" class=\"no-label\"  label=\" \" [decimals]=\"0\" [disabled]=\"dataItem.LoaiDichVu == laDichVuKham\"\n                                [disabled]=\"isHoanThanhKham || dataItem.LaDichVuVacxin\" [required]=\"true\" [(model)]=\"dataItem.SoLan\" (modelChange)=\"changeSoLuongGridDichVu($event, dataItem)\"\n                                [validationerror]=\"'HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems['+rowIndex+'].SoLan' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n                            <ng-container *ngIf=\"dataItem.GoiKhamSucKhoeId || dataItem.GoiKhamSucKhoeDichVuPhatSinhId\">{{dataItem.SoLan}}</ng-container>\n                        </ng-template>\n                        <ng-template #donGiaMoiTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <app-textboxnumeric *ngIf=\"!dataItem.GoiKhamSucKhoeId && !dataItem.GoiKhamSucKhoeDichVuPhatSinhId\" id=\"donGiaMoi{{rowIndex}}\" [max]=\"999999999\" class=\"no-label\" label=\" \" [decimals]=\"0\"\n                                [disabled]=\"isHoanThanhKham || dataItem.GoiKhamSucKhoeId || dataItem.LaDichVuVacxin\" [required]=\"true\" [(model)]=\"dataItem.DonGiaMoi\" (modelChange)=\"changeDonGiaGridDichVu($event, dataItem)\"\n                                [validationerror]=\"'HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems['+rowIndex+'].DonGiaMoi' | validationerror:validationErrors\">\n                            </app-textboxnumeric>\n                            <ng-container *ngIf=\"dataItem.GoiKhamSucKhoeId || dataItem.GoiKhamSucKhoeDichVuPhatSinhId\">{{dataItem.DonGiaMoi | number:'0.2-2':'vi-VN'}}</ng-container>\n                        </ng-template>\n                        <ng-template #noiThucHienThemDichVuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <app-combobox  id=\"noiThucHienThemDichVu{{rowIndex}}\" class=\"no-label\" label=\" \" url=\"KhamDoan/GetKhoaPhongGoiKhams\" [required]=\"true\" [disabled]=\"isHoanThanhKham || dataItem.LaDichVuVacxin\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham:' + dataItem.LaDichVuKham +', HinhThucKhamBenh: ' + hinhThucKham +', DichVuId:' + dataItem.DichVuBenhVienId + ', HopDongKhamSucKhoeId:'+thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId +'}', Take: 50}\"\n                                [popupSettings]=\"{width: 300}\" [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.TenNoiThucHien\" [bind]=\"false\" (modelChange)='changeNoiThucHienGridDichVu($event, dataItem, rowIndex)'\n                                [validationerror]=\"'HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems['+rowIndex+'].NoiThucHienId' | validationerror:validationErrors\">\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                        </ng-template>\n                        <ng-template #noiThucHienTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <app-combobox id=\"noiThucHien{{rowIndex}}\" class=\"no-label\" label=\" \" url=\"KhamDoan/GetKhoaPhongGoiKhams\" [required]=\"true\" [disabled]=\"isHoanThanhKham || dataItem.LaDichVuVacxin\"\n                                [(model)]=\"dataItem.NoiThucHienId\" [modelText]=\"dataItem.TenNoiThucHien\" [popupSettings]=\"{width: 300}\" [bind]=\"false\"\n                                [queryInfo]=\"{ParameterDependencies:'{LaDichVuKham:' + dataItem.LaDichVuKham +', HinhThucKhamBenh: ' + hinhThucKham +', DichVuId:' + dataItem.DichVuBenhVienId + ', HopDongKhamSucKhoeId:'+thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId +'}', Take: 50}\"\n                                [validationerror]=\"'HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois['+ getIndexDichVuTrongGoi(dataItem) +'].NoiThucHienId' | validationerror:validationErrors\" (modelChange)='changeNoiThucHienGridDichVu($event, dataItem, rowIndex)'>\n                                <ng-template #khoaPhongTemplateHeader let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <th width=\"30%\">Mã</th>\n                                            <th>Tên</th>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                                <ng-template #khoaPhongTemplate let-dataItem>\n                                    <table width=\"100%\" class=\"table-combobox\">\n                                        <tr>\n                                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                                            <td>{{dataItem.Ten}}</td>\n                                        </tr>\n                                    </table>\n                                </ng-template>\n                            </app-combobox>\n                        </ng-template>\n                        <ng-template #tinhTrangTemplate let-dataItem>\n                            <div style=\"position: relative;\" [ngSwitch]=\"dataItem.LoaiDichVu\">\n                                <span *ngSwitchCase=\"1\" [ngClass]=\"{'blackText': dataItem.TinhTrang == trangThaiYCKB.ChuaKham, \n                                                                'orangeText': (dataItem.TinhTrang == trangThaiYCKB.DangKham \n                                                                                || dataItem.TinhTrang == trangThaiYCKB.DangLamChiDinh\n                                                                                || dataItem.TinhTrang == trangThaiYCKB.DangDoiKetLuan),\n                                                                'greenText': dataItem.TinhTrang == trangThaiYCKB.DaKham}\">\n                                    {{dataItem.TenTinhTrang}}\n                                </span>\n                            \n                                <span [style.white-space]=\"dataItem.KhongThucHien ? 'normal' : 'none'\" *ngSwitchDefault \n                                                    [ngClass]=\"{'blackText': dataItem.TinhTrang == trangThaiYCDVKT.ChuaThucHien, \n                                                                'orangeText': dataItem.TinhTrang == trangThaiYCDVKT.DangThucHien,\n                                                                'greenText': dataItem.TinhTrang == trangThaiYCDVKT.DaThucHien }\">\n                                    {{dataItem.TenTinhTrang}}\n                                        \n                                </span>\n                            </div>\n                        </ng-template>\n                \n                        <ng-template #actionTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <!-- && !dataItem.IsDichVuBatBuoc -->\n                            <div *ngIf=\"!isHoanThanhKham && !dataItem.LaDichVuVacxin\" class=\"text-center\" kendoTooltip >\n                                <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xuLyXoaDichVuKhamTrongGoi(dataItem, rowIndex)\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </div>\n                        </ng-template>\n                        <ng-template #actionDichVuThemTemplate let-dataItem let-rowIndex=\"rowIndex\">\n                            <div *ngIf=\"!isHoanThanhKham && !dataItem.LaDichVuVacxin\" class=\"text-center\" kendoTooltip >\n                                <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xuLyXoaDichVuKhamThem(dataItem, rowIndex)\">\n                                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                                </button>\n                            </div>\n                        </ng-template>\n                \n                        <ng-template #donGiaGroupFooterTemplate let-aggregates>\n                            <div class=\"text-right\" kendoTooltip >\n                                Tổng cộng:\n                            </div>\n                        </ng-template>\n                        <ng-template #thanhTienGroupFooterTemplate let-aggregates>\n                            {{aggregates.ThanhTien.sum | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #thanhTienFooterTemplate let-dataItem>\n                            <span style=\"color:blue\">{{(isChuaKham ? total('ThanhTien') : tongTienDichVuDaChiDinh) | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                        <!-- <ng-template #donGiaMoiTemplate let-dataItem>\n                            {{dataItem.DonGiaMoi | number:'0.2-2':'vi-VN'}}\n                        </ng-template> -->\n    \n                        <ng-template #donGiaUuDaiTemplate let-dataItem>\n                            {{dataItem.DonGiaUuDai | number:'0.2-2':'vi-VN'}}\n                        </ng-template>\n                        <ng-template #donGiaUuDaiLabelTemplate let-aggregates>\n                            <div class=\"text-right\" kendoTooltip>\n                                Tổng cộng:\n                            </div>\n                        </ng-template>\n                        <ng-template #donGiaUuDaiFooterTemplate let-dataItem>\n                            <span style=\"color:blue\">{{(isChuaKham ? totalDichVuGoi('DonGiaUuDai') : tongTienUuDai) | number:'0.2-2':'vi-VN'}}</span>\n                        </ng-template>\n                \n                        <ng-template #thanhTienTemplate let-dataItem>\n                            <ng-container *ngIf=\"!dataItem.GoiKhamSucKhoeId\">\n                                {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n                            </ng-container>\n                        </ng-template>\n                \n                        <ng-template #tenDichVuTemplate let-dataItem>\n                            <div>\n                                <mat-icon fxFlex=\"30px\" *ngIf=\"dataItem.GoiKhamSucKhoeId !== null || dataItem.GoiKhamSucKhoeDichVuPhatSinhId !== null\" [icIcon]=\"icInfo\" kendoTooltip title=\"{{dataItem.TenGoiKhamSucKhoe}}\">\n                                </mat-icon>\n                                <span fxFlex=\"auto\" class=\"reverse-ellipsis r\" kendoTooltip title=\"{{dataItem.Ten}}\">{{dataItem.Ten}} </span>\n                            </div>\n                        </ng-template>\n    \n                        <ng-template #thoiDiemChiDinhTemplate let-dataItem>\n                            <div class=\"reverse-ellipsis r\">{{dataItem.ThoiDiemChiDinhDisplay}} </div>\n                        </ng-template>\n                    </div>\n                </div>\n                <div class=\"form-footer text-right pt-2\">                    \n                    <!-- <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" (click)=\"quayLai()\">Quay\n                        Lại</button> -->\n                    <ng-container *ngIf=\"daBatDauKham\">\n                        <button *ngIf=\"!isHoanThanhKham\" mat-raised-button mat-button color=\"primary\" style=\"float: left;\"\n                            (click)=\"xuLyQuayLaiChuaKhamNhieuNhanVien()\">Quay lại chưa khám</button>\n                        <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" (click)=\"InDichVu()\">\n                            In dịch vụ phát sinh</button>\n                        <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" (click)=\"InPhieuXN()\">\n                            In dịch vụ phát sinh chỉ định Sars CoV</button>\n                    </ng-container>\n                     \n                    <ng-container *ngIf=\"!isHoanThanhKham\">\n                        <button type=\"button\" mat-stroked-button color=\"primary\" (click)=\"xuLyInHoSo()\">In hồ sơ</button>\n                        <button *ngIf=\"!daBatDauKham\" mat-raised-button mat-button color=\"primary\" (click)=\"xuLyBatDauKham()\">Bắt đầu\n                            khám</button>\n                        <!-- nếu đã bắt đầu khám -->\n                        <button *ngIf=\"daBatDauKham\" mat-raised-button mat-button color=\"primary\"\n                            (click)=\"xuLyLuuThongTinHanhChinh()\">Lưu</button>\n                    </ng-container>\n                    <ng-container *ngIf=\"isHoanThanhKham\">\n                        <button type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"inHoSoTungPhieu(2,thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id)\">Phiếu đăng ký\n                            KSK</button>\n                        <button type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"inHoSoTungPhieu(1,thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id)\">Số KSK định kỳ</button>\n                        <button type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"inHoSoTungPhieu(4,thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id)\">Bảng hướng dẫn KSK</button>\n                        <button type=\"button\" mat-stroked-button color=\"primary\"\n                            (click)=\"inHoSoTungPhieu(3,thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id)\">In kết quả KSK</button>\n                    </ng-container>\n                </div>\n            <!-- </div>\n        </div>\n    </div>\n</div> -->\n<div class=\"gripViewGoiDichViKhacTemplate\">\n    <ng-template #checkBoxHeaderTemplate let-dataItem>\n        <input type=\"checkbox\" id=\"vehicle1\" name=\"vehicle1\" [(ngModel)]=\"checkAll\"\n            (ngModelChange)=\"SelectcheckAllboxIn($event)\">\n    </ng-template>\n    <ng-template #checkBoxTemplate let-dataItem>\n        <input type=\"checkbox\" id=\"vehicle1\" [(ngModel)]=\"dataItem.isCheckRowItem\" name=\"vehicle1\"\n            (ngModelChange)=\"checkboxIn($event,dataItem)\">\n    </ng-template>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.html": 
        /*!*************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.html ***!
          \*************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 1000px;\">\n    <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n        <iframe id=\"fileKetQua\" width=\"100%\" height=\"100%\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n            allowTransparency=\"true\" background=\"transparent\">\n        </iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" (click)=\"downloadFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải\n        file</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.html": 
        /*!*******************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.html ***!
          \*******************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\" [mat-dialog-close]=\"null\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"height: 1000px;\">\n    <div *ngIf=\"fileUrl != null && fileUrl != ''\" class=\"container-iframe\">\n        <iframe id=\"fileKetQua\" width=\"100%\" height=\"100%\" frameborder=\"0\" [src]=\"fileUrl | safe\"\n            allowTransparency=\"true\" background=\"transparent\">\n        </iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"pb-5\">\n    <button type=\"button\" style=\"margin-left: auto;\" [mat-dialog-close]=\"null\" mat-button class=\"mr-1 mt-4\"><i\n            class=\"ft-arrow-left\"></i> Hủy</button>\n    <button type=\"button\" (click)=\"downloadFile()\" mat-stroked-button color=\"primary\" class=\"mr-1 mt-4\">Tải\n        file</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2JhbmctaHVvbmctZGFuLWtoYW0tc3VjLWtob2UtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi10aWVwLW5oYW5cXGJhbmctaHVvbmctZGFuLWtoYW0tc3VjLWtob2UtcG9wdXBcXGJhbmctaHVvbmctZGFuLWtoYW0tc3VjLWtob2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9iYW5nLWh1b25nLWRhbi1raGFtLXN1Yy1raG9lLXBvcHVwL2JhbmctaHVvbmctZGFuLWtoYW0tc3VjLWtob2UtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2JhbmctaHVvbmctZGFuLWtoYW0tc3VjLWtob2UtcG9wdXAvYmFuZy1odW9uZy1kYW4ta2hhbS1zdWMta2hvZS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1NTBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: BangHuongDanKhamSucKhoePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BangHuongDanKhamSucKhoePopupComponent", function () { return BangHuongDanKhamSucKhoePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            var BangHuongDanKhamSucKhoePopupComponent = /** @class */ (function () {
                function BangHuongDanKhamSucKhoePopupComponent(data, dialog, apiService, notificationService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.title = "Bảng hướng dẫn khám sức khỏe";
                }
                BangHuongDanKhamSucKhoePopupComponent.prototype.ngOnInit = function () {
                    this.getALlFilePDFFromHtml();
                };
                BangHuongDanKhamSucKhoePopupComponent.prototype.getALlFilePDFFromHtml = function () {
                    var _this = this;
                    this.showPopupLoadingData();
                    var hosting = window.location.protocol + "//" + window.location.host;
                    var thongTin = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinInPhieuKhamSucKhoe"](this.data, "BangHuongDanKhamSucKhoe", hosting, src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_8__["LoaiHoSoKhamSucKhoe"].BangHuongDanKhamSucKhoe);
                    var listPhieuIn = new Array();
                    listPhieuIn.push(thongTin);
                    var queryStringSearch = JSON.stringify(listPhieuIn);
                    this.apiService.postExportPdf('KhamDoan/GetFilePDFHoSoKhamSucKhoeFromHtml?obj=' + queryStringSearch).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                BangHuongDanKhamSucKhoePopupComponent.prototype.downloadFile = function () {
                    var dateTimeNow = new Date();
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'BangHuongDanKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
                };
                BangHuongDanKhamSucKhoePopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                BangHuongDanKhamSucKhoePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return BangHuongDanKhamSucKhoePopupComponent;
            }());
            BangHuongDanKhamSucKhoePopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            BangHuongDanKhamSucKhoePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bang-huong-dan-kham-suc-khoe-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bang-huong-dan-kham-suc-khoe-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bang-huong-dan-kham-suc-khoe-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], BangHuongDanKhamSucKhoePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2luLWRpY2gtdnUtY2hpLWRpbmgtbmdvYWktZ29pL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4tdGllcC1uaGFuXFxpbi1kaWNoLXZ1LWNoaS1kaW5oLW5nb2FpLWdvaVxcaW4tZGljaC12dS1jaGktZGluaC1uZ29haS1nb2kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9pbi1kaWNoLXZ1LWNoaS1kaW5oLW5nb2FpLWdvaS9pbi1kaWNoLXZ1LWNoaS1kaW5oLW5nb2FpLWdvaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi10aWVwLW5oYW4vaW4tZGljaC12dS1jaGktZGluaC1uZ29haS1nb2kvaW4tZGljaC12dS1jaGktZGluaC1uZ29haS1nb2kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWlmcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICNlYmVjZWQ7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: InDichVuChiDinhNgoaiGoiComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InDichVuChiDinhNgoaiGoiComponent", function () { return InDichVuChiDinhNgoaiGoiComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var InDichVuChiDinhNgoaiGoiComponent = /** @class */ (function () {
                function InDichVuChiDinhNgoaiGoiComponent(data, sanitizer, dialog) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.dialog = dialog;
                    this.src = '';
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(this.data.Model);
                }
                InDichVuChiDinhNgoaiGoiComponent.prototype.ngOnInit = function () {
                    this.modelPrint = this.data.Model;
                };
                InDichVuChiDinhNgoaiGoiComponent.prototype.getSharedPrintForm = function () {
                    var tmpPhieuChiDinh = "<table id='showHeader' style='width: 100%; height: 40px; background: #005dab;color:#fff;'> <tr><th rowspan = '3' style = 'font-size: 20px;'>PHIẾU CHỈ ĐỊNH CẬN LÂM SÀNG</th></tr></table>";
                    var data = "";
                    data = this.modelPrint.split(tmpPhieuChiDinh).join("");
                    return new Promise(function (resolve) {
                        resolve(data);
                    });
                };
                InDichVuChiDinhNgoaiGoiComponent.prototype.close = function () {
                    this.dialog.closeAll();
                };
                return InDichVuChiDinhNgoaiGoiComponent;
            }());
            InDichVuChiDinhNgoaiGoiComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
            ]; };
            InDichVuChiDinhNgoaiGoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-in-dich-vu-chi-dinh-ngoai-goi',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./in-dich-vu-chi-dinh-ngoai-goi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./in-dich-vu-chi-dinh-ngoai-goi.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], InDichVuChiDinhNgoaiGoiComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2tldC1xdWEta2hhbS1zdWMta2hvZS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLXRpZXAtbmhhblxca2V0LXF1YS1raGFtLXN1Yy1raG9lLXBvcHVwXFxrZXQtcXVhLWtoYW0tc3VjLWtob2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9rZXQtcXVhLWtoYW0tc3VjLWtob2UtcG9wdXAva2V0LXF1YS1raGFtLXN1Yy1raG9lLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9rZXQtcXVhLWtoYW0tc3VjLWtob2UtcG9wdXAva2V0LXF1YS1raGFtLXN1Yy1raG9lLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: KetQuaKhamSucKhoePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KetQuaKhamSucKhoePopupComponent", function () { return KetQuaKhamSucKhoePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var KetQuaKhamSucKhoePopupComponent = /** @class */ (function () {
                function KetQuaKhamSucKhoePopupComponent(data, dialog, apiService, notificationService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.title = "KẾT QUẢ KHÁM SỨC KHỎE";
                }
                KetQuaKhamSucKhoePopupComponent.prototype.ngOnInit = function () {
                    this.getHtml();
                };
                KetQuaKhamSucKhoePopupComponent.prototype.getHtml = function () {
                    var _this = this;
                    this.showPopupLoadingData();
                    var obj = {
                        "Id": this.data,
                        "HostingName": window.location.protocol + "//" + window.location.host
                    };
                    this.apiService.postExportPdf("KhamDoan/XuLyInKetQuaKhamSucKhoeAsync", obj).subscribe(function (res) {
                        // this.getFilePDFFromHtml(res);
                        var newBlob = new Blob([res], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.file = res;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                // getFilePDFFromHtml(html) {
                //   var obj = {
                //     "Html": html,
                //     "TenFile": "KetQuaKhamSucKhoe"
                //   }
                //   this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFFromHtml', obj).subscribe(
                //     file => {
                //       let newBlob = new Blob([file], { type: "application/pdf" });
                //       let datalocalURL = window.URL.createObjectURL(newBlob);
                //       this.fileUrl = datalocalURL;
                //       this.file = file;
                //       this.closePopupLoadingData();
                //     },
                //     (err: ApiError) => {
                //       if (err.Message !== 'Validation Failed') {
                //         this.notificationService.showError(err.Message);
                //       }
                //       this.closePopupLoadingData();
                //     });
                // }
                KetQuaKhamSucKhoePopupComponent.prototype.downloadFile = function () {
                    var dateTimeNow = new Date();
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'KetQuaKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
                };
                KetQuaKhamSucKhoePopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KetQuaKhamSucKhoePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return KetQuaKhamSucKhoePopupComponent;
            }());
            KetQuaKhamSucKhoePopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            KetQuaKhamSucKhoePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-ket-qua-kham-suc-khoe-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ket-qua-kham-suc-khoe-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ket-qua-kham-suc-khoe-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KetQuaKhamSucKhoePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.scss": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.scss ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.redText {\n  color: red;\n}\n\n.blueText {\n  color: blue;\n}\n\n.reverse-ellipsis-kham-doan {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.reverse-ellipsis-kham-doan.l {\n  text-align: left;\n}\n\n.pane-content {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2toYW0tZG9hbi10aWVwLW5oYW4tZGV0YWlsLXBvcHVwL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4tdGllcC1uaGFuXFxraGFtLWRvYW4tdGllcC1uaGFuLWRldGFpbC1wb3B1cFxca2hhbS1kb2FuLXRpZXAtbmhhbi1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9raGFtLWRvYW4tdGllcC1uaGFuLWRldGFpbC1wb3B1cC9raGFtLWRvYW4tdGllcC1uaGFuLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9raGFtLWRvYW4tdGllcC1uaGFuLWRldGFpbC1wb3B1cC9raGFtLWRvYW4tdGllcC1uaGFuLWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnJldmVyc2UtZWxsaXBzaXMta2hhbS1kb2FuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5yZXZlcnNlLWVsbGlwc2lzLWtoYW0tZG9hbi5sIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBhbmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE1cHg7XG59IiwiLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4ucmV2ZXJzZS1lbGxpcHNpcy1raGFtLWRvYW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnJldmVyc2UtZWxsaXBzaXMta2hhbS1kb2FuLmwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGFuZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.ts": 
        /*!*******************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.ts ***!
          \*******************************************************************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanDetailPopupComponent", function () { return KhamDoanTiepNhanDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/check */ "./node_modules/@iconify/icons-ic/check.js");
            /* harmony import */ var _iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var _iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/print */ "./node_modules/@iconify/icons-ic/print.js");
            /* harmony import */ var _iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.ts");
            /* harmony import */ var _kham_doan_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../kham-doan.model */ "./src/app/modules/main/kham-doan/kham-doan.model.ts");
            /* harmony import */ var src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/enum/kham-benh.enum */ "./src/app/shared/enum/kham-benh.enum.ts");
            /* harmony import */ var _phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.ts");
            /* harmony import */ var _so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var _bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
            var KhamDoanTiepNhanDetailPopupComponent = /** @class */ (function () {
                function KhamDoanTiepNhanDetailPopupComponent(apiService, route, notificationService, authService, dialog, location, router) {
                    this.apiService = apiService;
                    this.route = route;
                    this.notificationService = notificationService;
                    this.authService = authService;
                    this.dialog = dialog;
                    this.location = location;
                    this.router = router;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icCheck = _iconify_icons_ic_check__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icPrint = _iconify_icons_ic_print__WEBPACK_IMPORTED_MODULE_14___default.a;
                    this.loading = false;
                    this.baseRoute = "/kham-doan/tiep-nhan";
                    this.format = 'n2';
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
                    this.urlGetData = "KhamDoan/GetDataNhanVienTheoHopDongForGrid";
                    this.urlGetTotal = "KhamDoan/GetTotalNhanVienTheoHopDongForGrid";
                    this.gridDataSource = {
                        data: [],
                        total: 0
                    };
                    this.gridColumns = [];
                    this.timKiemObj = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_11__["KhamDoanTiepNhanNhanVienTimKiem"]();
                    this.thongTinHopDong = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_20__["TimKiemHopDongKhamTheoCongTy"]();
                    this.chuaKham = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_21__["TrangThaiYeuCauKhamBenh"].ChuaKham;
                    this.dangKham = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_21__["TrangThaiYeuCauKhamBenh"].DangKham;
                    this.daKham = src_app_shared_enum_kham_benh_enum__WEBPACK_IMPORTED_MODULE_21__["TrangThaiYeuCauKhamBenh"].DaKham;
                    this.strAdditionalSearchString = "";
                    this.lanDauLoadData = true;
                    this.changeDataCongTy = false;
                    this.xemChiTietHopDong = false;
                    this.idSelect = null;
                    // đây là biến tạm, cần cập nhật lại
                    this.isHoanThanhKham = false;
                    //-------------------------------
                    this.arrNguoiBenhBatDauKhamId = [];
                    this.sort = [
                        {
                            field: "TrangThaiYeuCauTiepNhan",
                            dir: "asc",
                        },
                    ];
                }
                KhamDoanTiepNhanDetailPopupComponent.prototype.ngOnInit = function () {
                    this.documentype = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].KhamDoanTiepNhan;
                    var hasLocalSearchString = false;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachTiepNhanKhamDoan");
                            if (additionalSearchString != null) {
                                this.timKiemObj = JSON.parse(additionalSearchString);
                                this.thongTinHopDong.CongTyId = this.timKiemObj.CongTyId;
                                this.thongTinHopDong.HopDongId = this.timKiemObj.HopDongId;
                                if (this.thongTinHopDong.CongTyId != null && this.thongTinHopDong.HopDongId != null
                                    && this.thongTinHopDong.CongTyId != 0 && this.thongTinHopDong.HopDongId != 0) {
                                    this.getThongTinHopDongById(false);
                                }
                                this.gridNhanVien.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        var menuInfo = this.authService.getAccessUser();
                        var queryString = null;
                        if (menuInfo.HinhThucKhamBenh != src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_28__["HinhThucKhamBenh"].KhamDoanNgoaiVien) {
                            this.kiemTraChonHopDong();
                            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachTiepNhanKhamDoan");
                            queryString = JSON.stringify(this.timKiemObj);
                        }
                        else {
                            this.timKiemObj.CongTyId = this.thongTinHopDong.CongTyId = this.authService.getCongTyKhamSucKhoeId();
                            this.timKiemObj.HopDongId = this.thongTinHopDong.HopDongId = this.authService.getHopDongKhamSucKhoeId();
                            queryString = JSON.stringify(this.timKiemObj);
                            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachTiepNhanKhamDoan", queryString);
                            this.getThongTinHopDongById();
                        }
                        this.gridNhanVien.additionalSearchString = queryString;
                    }
                    this.gridColumns = [
                        { Field: "Stt", Title: "STT", Width: 50 },
                        { Field: "Action", Title: "", Width: 75, Template: this.actionTemplate },
                        { Field: "MaYeuCauTiepNhan", Title: "Mã TN", Width: 100 },
                        { Field: "TenNhanVien", Title: "Tên NV", Width: 200, Template: this.maNhanVienTemplate },
                        { Field: "GioiTinh", Title: "GT", Width: 50 },
                        { Field: "NamSinh", Title: "NS", Width: 50 },
                        // { Field: "SoDienThoai", Title: "SĐT", Width: 90},
                        // { Field: "Email", Title: "Email", Width: 90},
                        // { Field: "ChungMinhThu", Title: "CMT/HC", Width: 90},
                        //{ Field: "DanToc", Title: "Dân tộc", Width: 90},
                        // { Field: "TinhThanh", Title: "Tỉnh/TP", Width: 90},
                        // { Field: "DonViBoPhan", Title: "ĐV/BP", Width: 90},
                        //{ Field: "NhomKham", Title: "Nhóm khám", Width: 90},
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 90, Template: this.tinhTrangTemplate },
                        { Field: "ThoiDiemTiepNhan", Title: "Thời gian tiếp nhận", Width: 90, Template: this.thoiGianTiepNhanTemplate }
                    ];
                    this.lanDauLoadData = false;
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.ngAfterContentInit = function () {
                    //Called after ngOnInit when the component's or directive's content has been initialized.
                    //Add 'implements AfterContentInit' to the class.
                    jQuery("#splitter").css({ "height": jQuery(window).height() - 170 });
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.changeCongTy = function (event) {
                    // if(!event)
                    // {
                    this.thongTinHopDong.HopDongId = null;
                    this.changeDataCongTy = true;
                    this.clearThongTinHopDong();
                    //}
                    this.timKiemNangCao();
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.changeHopDong = function (event) {
                    if (event != undefined && event != null) {
                        this.getThongTinHopDongById();
                    }
                    else {
                        this.clearThongTinHopDong();
                        this.timKiemNangCao();
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.changeLookupHopDong = function (event) {
                    if (!this.lanDauLoadData && this.changeDataCongTy) {
                        if (event && event.length > 0 && this.thongTinHopDong.CongTyId && !this.thongTinHopDong.HopDongId) {
                            this.thongTinHopDong.HopDongId = event[0].KeyId;
                            // this.changeDataCongTy = false;
                            this.getThongTinHopDongById();
                        }
                        this.changeDataCongTy = false;
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.clearThongTinHopDong = function () {
                    this.thongTinHopDong.NgayHopDong = null;
                    this.thongTinHopDong.LoaiHopDong = null;
                    this.thongTinHopDong.TrangThai = null;
                    this.thongTinHopDong.SoBenhNhan = null;
                    this.thongTinHopDong.NgayHieuLuc = null;
                    this.thongTinHopDong.NgayKetThuc = null;
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.getThongTinHopDongById = function (reloadGrid) {
                    var _this = this;
                    if (reloadGrid === void 0) { reloadGrid = true; }
                    if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        this.showPopupLoadingData();
                        this.gridNhanVien.mySelection = [];
                        this.apiService.post("KhamDoan/TimKiemThongTinHopDongKhamTheoCongTy", this.thongTinHopDong)
                            .subscribe(function (resultData) {
                            _this.thongTinHopDong = resultData;
                            // this.thongTinHopDong.HopDongId = resultData.HopDongId;
                            // this.thongTinHopDong.NgayHopDong = resultData.NgayHopDong;
                            // this.thongTinHopDong.LoaiHopDong = resultData.LoaiHopDong;
                            // this.thongTinHopDong.TrangThai = resultData.TrangThai;
                            // this.thongTinHopDong.SoBenhNhan = resultData.SoBenhNhan;
                            // this.thongTinHopDong.NgayHieuLuc = resultData.NgayHieuLuc;
                            // this.thongTinHopDong.NgayKetThuc = resultData.NgayKetThuc;
                            if (reloadGrid) {
                                _this.timKiemNangCao();
                            }
                            _this.closePopupLoadingData();
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.clearValidateErrorOtherCallback = function (event) {
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].clearValidateErrorOtherCallback(this, event);
                };
                // tìm kiếm nhân viên
                KhamDoanTiepNhanDetailPopupComponent.prototype.searchChanges = function (event) {
                    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        //this.timKiemNangCao();
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridNhanVien.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.kiemTraChonHopDong = function () {
                    this.timKiemObj.CongTyId = !this.thongTinHopDong.CongTyId ? 0 : this.thongTinHopDong.CongTyId;
                    this.timKiemObj.HopDongId = !this.thongTinHopDong.HopDongId ? 0 : this.thongTinHopDong.HopDongId;
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    this.kiemTraChonHopDong();
                    var queryString = JSON.stringify(this.timKiemObj);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachTiepNhanKhamDoan", queryString);
                    this.gridNhanVien._additionalSearchString = this.strAdditionalSearchString = queryString;
                    this.gridNhanVien.search();
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.inHoSo = function (hopDongKhamSucKhoeNhanVienId) {
                    var _this = this;
                    this.dialog.open(_kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_19__["KhamDoanTiepNhanInHoSoPopupComponent"], {
                        disableClose: false,
                        width: '300px',
                        data: {}
                    }).afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.dialog.open(_kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_24__["KhamDoanTiepNhanFilePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: { "Id": hopDongKhamSucKhoeNhanVienId, "HoSoDaChon": result }
                            }).afterClosed().subscribe(function (result) {
                                _this.gridNhanVien.search();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.gridNhanVien.search();
                            });
                        }
                        else {
                            _this.gridNhanVien.search();
                        }
                    });
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.chuyenDenKhamBenh = function () {
                    this.router.navigate(['/kham-benh'], { queryParams: { IsKhamDoan: true } });
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.inHoSoTungPhieu = function (phieuIn, id) {
                    if (phieuIn == 1) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
                            this.dialog.open(_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_25__["SoKhamSucKhoeDinhKyPopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 2) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
                            this.dialog.open(_phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_22__["PhieuDangKyKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 3) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
                            this.dialog.open(_ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_23__["KetQuaKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 4) {
                        if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].View)) {
                            this.dialog.open(_bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_27__["BangHuongDanKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.batDauKham = function (dataItem) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn bắt đầu khám sức khỏe cho người bệnh này?",
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                var thongTinHanhChinhNhanVien = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_20__["YeuCauTiepNhanKhamSucKhoe"]();
                                thongTinHanhChinhNhanVien.IsBatDauKhamTuDanhSach = true;
                                thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVienDanhSachId = dataItem.Id;
                                _this.apiService.put("KhamDoan/XuLyLuuThongTinHopDongKhamNhanVien", thongTinHanhChinhNhanVien).subscribe(function (res) {
                                    var mess = "Bắt đầu khám";
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, [mess]));
                                    _this.closePopupLoadingData();
                                    _this.inHoSo(dataItem.Id);
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.showPopupChiTietNhanVien = function (dataItem) {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        if (this.gridNhanVien != null && this.gridNhanVien._gridDataSource != null && this.gridNhanVien._gridDataSource.data != null) {
                            var dataItemOlds = this.gridNhanVien._gridDataSource.data.filter(function (o) { return o.Id == _this.idSelect; });
                            if (dataItemOlds != null && dataItemOlds.length > 0) {
                                dataItemOlds[0].HighLightClass = null;
                            }
                        }
                        dataItem.HighLightClass = "bg-row-lightblue";
                        this.idSelect = null;
                        var self = this;
                        setTimeout(function () {
                            self.idSelect = dataItem.Id;
                        }, 1);
                        //this.router.navigate([this.baseRoute + '/nhan-vien/' + id], { queryParams: { IsDichVuPhatSinh: this.timKiemObj.TrangThai.DichVuPhatSinh } });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.onChangeBenhNhanBatDauKham = function (event) {
                    this.arrNguoiBenhBatDauKhamId = event;
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.xuLyBatDauKhamNhieuNhanVien = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn bắt đầu khám sức khỏe cho người bệnh đang chọn không?",
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                var arrayHopDongNhanVienId = {
                                    HopDongKhamSucKhoeNhanVienIds: _this.arrNguoiBenhBatDauKhamId
                                };
                                _this.apiService.put("KhamDoan/XuLyBatDauKhamNhieuNhanVien", arrayHopDongNhanVienId).subscribe(function (res) {
                                    _this.arrNguoiBenhBatDauKhamId = [];
                                    _this.gridNhanVien.search();
                                    var mess = "Bắt đầu khám";
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, [mess]));
                                    _this.gridNhanVien.mySelection = [];
                                    _this.closePopupLoadingData();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.xuLyQuayLaiChuaKhamNhieuNhanVien = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentype, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn quay lại chưa khám cho nhân viên đang chọn không?",
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                var arrayHopDongNhanVienId = {
                                    HopDongKhamSucKhoeNhanVienIds: _this.arrNguoiBenhBatDauKhamId
                                };
                                _this.apiService.put("KhamDoan/XuLyQuayLaiChuaKhamNhieuNhanVien", arrayHopDongNhanVienId).subscribe(function (res) {
                                    _this.arrNguoiBenhBatDauKhamId = [];
                                    _this.gridNhanVien.search();
                                    var mess = "Quay lại chưa khám";
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].ActionSuccessfully, [mess]));
                                    _this.gridNhanVien.mySelection = [];
                                    _this.closePopupLoadingData();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_17__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanDetailPopupComponent.prototype.quayLai = function () {
                    this.location.back();
                };
                return KhamDoanTiepNhanDetailPopupComponent;
            }());
            KhamDoanTiepNhanDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('maNhanVienTemplate', { static: true })
            ], KhamDoanTiepNhanDetailPopupComponent.prototype, "maNhanVienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], KhamDoanTiepNhanDetailPopupComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('thoiGianTiepNhanTemplate', { static: true })
            ], KhamDoanTiepNhanDetailPopupComponent.prototype, "thoiGianTiepNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanTiepNhanDetailPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('gridNhanVien', { static: true })
            ], KhamDoanTiepNhanDetailPopupComponent.prototype, "gridNhanVien", void 0);
            KhamDoanTiepNhanDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-kham-doan-tiep-nhan-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tiep-nhan-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tiep-nhan-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.scss")).default]
                })
            ], KhamDoanTiepNhanDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9raGFtLWRvYW4tdGllcC1uaGFuLWZpbGUtcG9wdXAva2hhbS1kb2FuLXRpZXAtbmhhbi1maWxlLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanFilePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanFilePopupComponent", function () { return KhamDoanTiepNhanFilePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            var KhamDoanTiepNhanFilePopupComponent = /** @class */ (function () {
                function KhamDoanTiepNhanFilePopupComponent(data, dialog, apiService, notificationService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.arrFilePdf = [];
                    this.arrFileUrl = [];
                    this.arrLoaiHoSoKhamSucKhoe = new Array();
                }
                KhamDoanTiepNhanFilePopupComponent.prototype.ngOnInit = function () {
                    var hosting = window.location.protocol + "//" + window.location.host;
                    if (this.data.HoSoDaChon.SoKhamSucKhoeDinhKy) {
                        var thongTin = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinInPhieuKhamSucKhoe"](this.data.Id, "SoKhamSucKhoeDinhKy", hosting, src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_8__["LoaiHoSoKhamSucKhoe"].SoKhamSucKhoeDinhKy, true);
                        this.arrLoaiHoSoKhamSucKhoe.push(thongTin);
                    }
                    if (this.data.HoSoDaChon.PhieuDangKyKhamSucKhoe) {
                        var thongTin = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinInPhieuKhamSucKhoe"](this.data.Id, "PhieuDangKyKhamSucKhoe", hosting, src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_8__["LoaiHoSoKhamSucKhoe"].PhieuDangKyKhamSucKhoe);
                        this.arrLoaiHoSoKhamSucKhoe.push(thongTin);
                    }
                    if (this.data.HoSoDaChon.BangHuongDanKhamSucKhoe) {
                        var thongTin = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_9__["ThongTinInPhieuKhamSucKhoe"](this.data.Id, "BangHuongDanKhamSucKhoe", hosting, src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_8__["LoaiHoSoKhamSucKhoe"].BangHuongDanKhamSucKhoe);
                        this.arrLoaiHoSoKhamSucKhoe.push(thongTin);
                    }
                    this.getALlFilePDFFromHtml(this.arrLoaiHoSoKhamSucKhoe);
                };
                KhamDoanTiepNhanFilePopupComponent.prototype.getALlFilePDFFromHtml = function (hoSoDaChon) {
                    var _this = this;
                    this.showPopupLoadingData();
                    var queryStringSearch = JSON.stringify(hoSoDaChon);
                    this.apiService.postExportPdf('KhamDoan/GetFilePDFHoSoKhamSucKhoeFromHtml?obj=' + queryStringSearch).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        console.log('datalocalURL', datalocalURL);
                        _this.arrFileUrl.push(datalocalURL);
                        _this.arrFilePdf.push(file);
                        if (_this.arrFileUrl.length == hoSoDaChon.length) {
                            _this.closePopupLoadingData();
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                    // hoSoDaChon.forEach(phieuInInfo => {
                    //   this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFHoSoKhamSucKhoeFromHtml', phieuInInfo).subscribe(
                    //     file => {
                    //       let newBlob = new Blob([file], { type: "application/pdf" });
                    //       let datalocalURL = window.URL.createObjectURL(newBlob);
                    //       console.log('datalocalURL', datalocalURL);
                    //       this.arrFileUrl.push(datalocalURL);
                    //       this.arrFilePdf.push(file);
                    //       if (this.arrFileUrl.length == hoSoDaChon.length) {
                    //         this.closePopupLoadingData();
                    //       }
                    //     },
                    //     (err: ApiError) => {
                    //       if (err.Message !== 'Validation Failed') {
                    //         this.notificationService.showError(err.Message);
                    //       }
                    //       this.closePopupLoadingData();
                    //     });
                    // });
                };
                KhamDoanTiepNhanFilePopupComponent.prototype.downloadAllFile = function () {
                    var dateTimeNow = new Date();
                    this.arrFilePdf.forEach(function (file) {
                        src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].downLoadFile(file, 'application/pdf', 'HoSoKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
                    });
                };
                KhamDoanTiepNhanFilePopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanTiepNhanFilePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return KhamDoanTiepNhanFilePopupComponent;
            }());
            KhamDoanTiepNhanFilePopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            KhamDoanTiepNhanFilePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-tiep-nhan-file-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tiep-nhan-file-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tiep-nhan-file-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], KhamDoanTiepNhanFilePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.scss": 
        /*!*************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.scss ***!
          \*************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9raGFtLWRvYW4tdGllcC1uaGFuLWluLWhvLXNvLXBvcHVwL2toYW0tZG9hbi10aWVwLW5oYW4taW4taG8tc28tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.ts": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.ts ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanInHoSoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanInHoSoPopupComponent", function () { return KhamDoanTiepNhanInHoSoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            var KhamDoanTiepNhanInHoSoPopupComponent = /** @class */ (function () {
                function KhamDoanTiepNhanInHoSoPopupComponent(dialogRef) {
                    this.dialogRef = dialogRef;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.chonPhieuInKhamSucKhoe = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_4__["ChonPhieuInKhamSucKhoe"]();
                }
                KhamDoanTiepNhanInHoSoPopupComponent.prototype.ngOnInit = function () {
                };
                KhamDoanTiepNhanInHoSoPopupComponent.prototype.close = function (data) {
                    if (data == 'ok') {
                        this.dialogRef.close(this.chonPhieuInKhamSucKhoe);
                    }
                    else {
                        this.dialogRef.close(null);
                    }
                };
                return KhamDoanTiepNhanInHoSoPopupComponent;
            }());
            KhamDoanTiepNhanInHoSoPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
            ]; };
            KhamDoanTiepNhanInHoSoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-tiep-nhan-in-ho-so-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tiep-nhan-in-ho-so-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tiep-nhan-in-ho-so-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.scss")).default]
                })
            ], KhamDoanTiepNhanInHoSoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.scss": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.scss ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9raGFtLWRvYW4tdGllcC1uaGFuLWxpc3Qva2hhbS1kb2FuLXRpZXAtbmhhbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanListComponent", function () { return KhamDoanTiepNhanListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            var KhamDoanTiepNhanListComponent = /** @class */ (function () {
                function KhamDoanTiepNhanListComponent(authService, notificationService, route, location, dialog, apiService, router) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.router = router;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
                    this.baseRoute = "/kham-doan/tiep-nhan";
                    this.gridColumns = [];
                    this._gridColumnsFilter = [];
                    this._isCheckColumnFilter = true;
                    this.strAdditionalSearchString = "";
                    this.timKiemObj = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_19__["KhamDoanTiepNhanTimKiem"]();
                }
                KhamDoanTiepNhanListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_6__["DocumentType"].DuyetNhapKhoMau;
                    // let hasLocalSearchString = false;
                    // if (this.route.snapshot.queryParams.holdQuery != undefined) {
                    //   let holdQuery = this.route.snapshot.queryParams.holdQuery;
                    //   if (holdQuery != null && holdQuery) {
                    //     var additionalSearchString = LocalStorageHelper.getItem<string>("additionalSearchStringDanhSachTiepNanKhamSucKhoe");
                    //     this.gridChuaHoanThanhKham.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    //     hasLocalSearchString = true;
                    //   }
                    // }
                    // if(!hasLocalSearchString)
                    // {
                    //   this.gridChuaHoanThanhKham.additionalSearchString = null;
                    //   LocalStorageHelper.removeItem("additionalSearchStringDanhSachTiepNanKhamSucKhoe");
                    // }
                    this.gridColumns = [
                        { Field: "TenHopDong", Title: "Hợp đồng", Width: 100, Sortable: true, Template: this.tenHopDongTemplate },
                        { Field: "TenCongTy", Title: "Tên công ty", Width: 180, Sortable: true },
                        { Field: "SoLuongBenhNhan", Title: "SL NB ", Width: 60, Sortable: true, Template: this.soLuongBenhNhanTemplate },
                        { Field: "SoLuongBenhNhanDaDen", Title: "SL NB Đã đến", Width: 60, Sortable: true, Template: this.soLuongBenhNhanDaDenTemplate },
                        { Field: "DiaDiemKham", Title: "Địa điểm khám", Width: 120, Sortable: true },
                        { Field: "NgayBatDauKham", Title: "Ngày BĐ khám", Width: 80, Sortable: true, Template: this.ngayBatDauKhamTemplate },
                        { Field: "NgayKetThucKham", Title: "Ngày KT khám", Width: 80, Sortable: true, Template: this.ngayKetThucKhamTemplate }
                    ];
                    this._gridColumnsFilter = this.gridColumns.filter(function (p) { return p.Title != ''; });
                };
                // chức năng tìm kiếm cần cập nhật lại theo tab đang chọn
                KhamDoanTiepNhanListComponent.prototype.searchChanges = function (event) {
                    if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanTiepNhanListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                KhamDoanTiepNhanListComponent.prototype.clearSearch = function () {
                    this.timKiemObj.SearchString = null;
                    this.gridChuaHoanThanhKham.searchString = null;
                    this.timKiemNangCao();
                };
                KhamDoanTiepNhanListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    var queryString = JSON.stringify(this.timKiemObj);
                    this.gridChuaHoanThanhKham._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_14__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachTiepNanKhamSucKhoe", queryString);
                    this.gridChuaHoanThanhKham.search();
                };
                KhamDoanTiepNhanListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_15__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("KhamDoan/ExportDanhSachTiepNhanKhamSucKhoe", this.gridChuaHoanThanhKham._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "TiephHanKhamSucKhoe" + dateTimeNow.getFullYear() + ".xlsx");
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
                KhamDoanTiepNhanListComponent.prototype.xemChiTiet = function (id) {
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_16__["SecurityOperation"].Update)) {
                        this.router.navigate([this.baseRoute + "/hop-dong/" + id]);
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return KhamDoanTiepNhanListComponent;
            }());
            KhamDoanTiepNhanListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenHopDongTemplate', { static: true })
            ], KhamDoanTiepNhanListComponent.prototype, "tenHopDongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayBatDauKhamTemplate', { static: true })
            ], KhamDoanTiepNhanListComponent.prototype, "ngayBatDauKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKetThucKhamTemplate', { static: true })
            ], KhamDoanTiepNhanListComponent.prototype, "ngayKetThucKhamTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongBenhNhanTemplate', { static: true })
            ], KhamDoanTiepNhanListComponent.prototype, "soLuongBenhNhanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongBenhNhanDaDenTemplate', { static: true })
            ], KhamDoanTiepNhanListComponent.prototype, "soLuongBenhNhanDaDenTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChuaHoanThanhKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], static: false })
            ], KhamDoanTiepNhanListComponent.prototype, "gridChuaHoanThanhKham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDaHoanThanhKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridComponent"], static: false })
            ], KhamDoanTiepNhanListComponent.prototype, "gridDaHoanThanhKham", void 0);
            KhamDoanTiepNhanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-tiep-nhan-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tiep-nhan-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tiep-nhan-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.scss")).default]
                })
            ], KhamDoanTiepNhanListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.scss": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.scss ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".yellowText {\n  color: yellowgreen;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\n.blackText {\n  color: black;\n}\n\n#form-content {\n  overflow-y: auto;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.form-footer {\n  border-top: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2toYW0tZG9hbi10aWVwLW5oYW4tbmhhbi12aWVuLWRldGFpbC1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLXRpZXAtbmhhblxca2hhbS1kb2FuLXRpZXAtbmhhbi1uaGFuLXZpZW4tZGV0YWlsLXBvcHVwXFxraGFtLWRvYW4tdGllcC1uaGFuLW5oYW4tdmllbi1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9raGFtLWRvYW4tdGllcC1uaGFuLW5oYW4tdmllbi1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLXRpZXAtbmhhbi1uaGFuLXZpZW4tZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL2toYW0tZG9hbi10aWVwLW5oYW4tbmhhbi12aWVuLWRldGFpbC1wb3B1cC9raGFtLWRvYW4tdGllcC1uaGFuLW5oYW4tdmllbi1kZXRhaWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueWVsbG93VGV4dCB7XG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uYmxhY2tUZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jZm9ybS1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59IiwiLnllbGxvd1RleHQge1xuICBjb2xvcjogeWVsbG93Z3JlZW47XG59XG5cbi5yZWRUZXh0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuVGV4dCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLm9yYW5nZVRleHQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uYmx1ZVRleHQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmJsYWNrVGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2Zvcm0tY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.ts": 
        /*!***************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.ts ***!
          \***************************************************************************************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanNhanVienDetailPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanNhanVienDetailPopupComponent", function () { return KhamDoanTiepNhanNhanVienDetailPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
            /* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/common-type.enums */ "./src/app/shared/enum/common-type.enums.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/enum/kham-doan.enum */ "./src/app/shared/enum/kham-doan.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../kham-benh/kham-benh.model */ "./src/app/modules/main/kham-benh/kham-benh.model.ts");
            /* harmony import */ var _phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
            /* harmony import */ var _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../kham-doan.model */ "./src/app/modules/main/kham-doan/kham-doan.model.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../kham-doan-tiep-nhan.model */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.model.ts");
            /* harmony import */ var _ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.ts");
            /* harmony import */ var _bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var _in_dich_vu_chi_dinh_ngoai_goi_in_dich_vu_chi_dinh_ngoai_goi_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_lan_kham_hien_tai_xn_covid_sarscov2_popup_xn_covid_sarscov2_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/lan-kham-hien-tai/xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/lan-kham-hien-tai/xn-covid-sarscov2-popup/xn-covid-sarscov2-popup.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_xn_sars_cov2_popup_xn_sars_cov2_popup_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../kham-benh/kham-benh/xn-sars-cov2-popup/xn-sars-cov2-popup.component */ "./src/app/modules/main/kham-benh/kham-benh/xn-sars-cov2-popup/xn-sars-cov2-popup.component.ts");
            var KhamDoanTiepNhanNhanVienDetailPopupComponent = /** @class */ (function () {
                function KhamDoanTiepNhanNhanVienDetailPopupComponent(authService, dialog, notificationService, apiService, route, location) {
                    this.authService = authService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.route = route;
                    this.location = location;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__["DocumentType"].KhamDoanTiepNhan;
                    this.validationErrors = [];
                    this.validationDichVuErrors = [];
                    this.format = 'n2';
                    this.gridColumns = [];
                    this.gridColumnDichVuThems = [];
                    // grid dataSource dùng cho trường hợp chưa bắt đầu khám
                    this.dataGoiKham = [];
                    this.dataSourceGoiKham = {
                        data: [],
                        total: 0,
                    };
                    this.dataDichVuThem = [];
                    this.dataSourceDichVuThem = {
                        data: [],
                        total: 0,
                    };
                    this.groupThemDichVus = [{ field: 'TenNhomDichVu', dir: null, aggregates: [{ field: 'ThanhTien', aggregate: 'sum' }] }];
                    this.groups = [{ field: 'TenNhomDichVu', dir: null }];
                    this.thongTinHanhChinhNhanVien = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["YeuCauTiepNhanKhamSucKhoe"]();
                    this.yeuCauTiepNhanHoanThanh = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_16__["TrangThaiYeuCauTiepNhan"].DaHoanTat;
                    this.isHoanThanhKham = false;
                    this.isChuaKham = false;
                    this.gioiTinhNam = src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_14__["GioiTinh"].Nam;
                    this.hinhThucKham = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_16__["HinhThucKhamBenh"].NoiVien;
                    this.isSelectItem = false;
                    this.themDichVu = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["TiepNhanDichVuChiDinh"]();
                    this.queryDichVuDaChiDinh = null;
                    this.queryDichVuChiDinhTrongGoi = null;
                    this.tongTienDichVuDaChiDinh = 0;
                    this.tongTienUuDai = 0;
                    this.tongThanhTienTatCaDichVu = 0;
                    this.laDichVuKham = src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_16__["NhomDichVuChiDinhKhamSucKhoe"].KhamBenh;
                    this.hasDichVuThem = false; // todo: cần update case đã bắt đầu khám(hiện đang bị nháy) 
                    this.themDichVuMultiselect = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["TiepNhanDichVuChiDinhMultiselect"]();
                    this.trangThaiYCKB = new _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_18__["TrangThaiYeuCauKhamBenhObjEnum"]();
                    this.trangThaiYCDVKT = new _kham_benh_kham_benh_model__WEBPACK_IMPORTED_MODULE_18__["TrangThaiYeuCauDichVuKyThuatObjEnum"]();
                    this.tiepNhanDichVuChiDinhQuery = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_22__["TiepNhanDichVuChiDinhQuery"]();
                    // đây là biến tạm, cần cập nhật lại
                    this.daBatDauKham = false;
                    //-------------------------------
                    this.queryInfoDichVuTrongGoi = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_29__["LookupQueryInfo"]();
                    this.arrGoiKhamDangChiDinh = [];
                    this.tenGoiKhamHienTaiDisplay = null;
                    this.isDichVuPhatSinh = false;
                    this.isShowGridDichVuGoi = false;
                    this.showbuttonLuuVaInPhieuXetNghiem = false;
                    this.dichVuSarsCoVs = [];
                    this.loaiBenhPhamText = null;
                    this.loaiBenhPham = null;
                    this.bieuHienLamSang = null;
                    this.dichTeSarsCoV2 = null;
                    this.saveDone = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.timeout = null;
                    this.listDichVuIds = new Array();
                    this.checkAll = null;
                    this.listChonDichVuChiDinh = [];
                    this.listChonDichVuChiDinhReLoad = [];
                    this.isCheckXacNhanIn = false;
                }
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.total = function (field) {
                    switch (field) {
                        case 'ThanhTien':
                            return this.dataDichVuThem.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                    }
                };
                ;
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.totalDichVuGoi = function (field) {
                    switch (field) {
                        case 'DonGiaUuDai':
                            return this.dataGoiKham.reduce(function (sum, item) { return sum + item.DonGiaUuDai; }, 0);
                    }
                };
                ;
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["HopDongKhamSucKhoeNhanVien"]();
                    if (this.Id != null) {
                        this.id = this.Id;
                    }
                    else {
                        this.id = this.route.snapshot.params.id;
                    }
                    this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
                    if (this.IsDichVuPhatSinh != null) {
                        this.isDichVuPhatSinh = this.IsDichVuPhatSinh;
                    }
                    else {
                        this.route.queryParams.subscribe(function (param) {
                            _this.isDichVuPhatSinh = param['IsDichVuPhatSinh'] == 'true';
                        });
                    }
                    this.isShowGridDichVuGoi = !this.isDichVuPhatSinh;
                    //get hình thức khám bệnh
                    // hinhThucKham
                    var menuInfo = this.authService.getAccessUser();
                    this.hinhThucKham = menuInfo.HinhThucKhamBenh;
                    this.getDataNhanVien(this.id);
                    this.gridColumnDichVuThems = [
                        { Field: "CheckBox", Title: "", Width: 70, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
                        { Field: "Ma", Title: "Mã DV", Width: 70 },
                        { Field: "TenNhomDichVu", Title: "Nhóm dịch vụ", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Tên DV", Width: 160, Template: this.tenDichVuTemplate },
                        { Field: "LoaiGiaId", Title: "Loại giá", Width: 90, Template: this.loaiGiaTemplate },
                        { Field: "SoLan", Title: "SL", Width: 50, Template: this.soLuongTemplate },
                        { Field: "DonGiaMoi", Title: "Đơn giá", Width: 120, TemplateFooter: this.donGiaGroupFooterTemplate, Template: this.donGiaMoiTemplate },
                        { Field: "ThanhTien", Title: "Thành tiền", Width: 120, TemplateFooter: this.thanhTienFooterTemplate, TemplateGroupFooter: this.thanhTienGroupFooterTemplate, Template: this.thanhTienTemplate },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienThemDichVuTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate },
                        { Field: "ThoiDiemChiDinh", Title: "Thời điểm chỉ định", Width: 90, Template: this.thoiDiemChiDinhTemplate },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionDichVuThemTemplate }
                    ];
                    this.gridColumns = [
                        { Field: "Ma", Title: "Mã DV", Width: 70 },
                        { Field: "TenNhomDichVu", Title: "Nhóm dịch vụ", Width: 50, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "Ten", Title: "Tên DV", Width: 220, Template: this.tenDichVuTemplate, TemplateFooter: this.donGiaUuDaiLabelTemplate },
                        { Field: "TenLoaiGia", Title: "Loại giá", Width: 60 },
                        { Field: "DonGiaUuDai", Title: "Đơn giá", Width: 120, TemplateFooter: this.donGiaUuDaiFooterTemplate, Template: this.donGiaUuDaiTemplate },
                        { Field: "SoLan", Title: "SL", Width: 50 },
                        { Field: "NoiThucHien", Title: "Nơi thực hiện", Width: 100, Template: this.noiThucHienTemplate },
                        { Field: "TinhTrang", Title: "Tình trạng", Width: 100, Template: this.tinhTrangTemplate },
                        { Field: "ThoiDiemChiDinh", Title: "Thời điểm chỉ định", Width: 90, Template: this.thoiDiemChiDinhTemplate },
                        { Field: "Action", Title: "", Width: 40, Template: this.actionTemplate }
                    ];
                    this.getListDichVuSarsCoVs();
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.ngAfterContentInit = function () {
                    //Called after ngOnInit when the component's or directive's content has been initialized.
                    //Add 'implements AfterContentInit' to the class.
                    jQuery("#form-content").css({ "height": jQuery(window).height() - 250 });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_11__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getDataNhanVien = function (id, isShowIn) {
                    var _this = this;
                    if (isShowIn === void 0) { isShowIn = false; }
                    if (!isShowIn) {
                        this.showPopupLoadingData();
                    }
                    this.apiService
                        .get("KhamDoan/GetThongTinHanhChinhNhanVien?hopDongKhamNhanVienId=" + id)
                        .subscribe(function (resultData) {
                        _this.thongTinHanhChinhNhanVien = resultData;
                        _this.isHoanThanhKham = _this.thongTinHanhChinhNhanVien.TrangThaiYeuCauTiepNhan == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_16__["TrangThaiYeuCauTiepNhan"].DaHoanTat || _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HuyKham;
                        _this.queryDichVuChiDinhTrongGoi = JSON.stringify(new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_22__["DichVuChiDinhKhamSucKhoeBenhNhanQueryVo"](_this.thongTinHanhChinhNhanVien.Id, _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GoiKhamSucKhoeId, false));
                        _this.queryDichVuDaChiDinh = JSON.stringify(new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_22__["DichVuChiDinhKhamSucKhoeBenhNhanQueryVo"](_this.thongTinHanhChinhNhanVien.Id, _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GoiKhamSucKhoeId, true));
                        if (_this.thongTinHanhChinhNhanVien.Id == 0) {
                            _this.isChuaKham = true;
                            _this.daBatDauKham = false;
                            _this.hasDichVuThem = false;
                            // viết api get thông tin dịch vụ gói khám
                            _this.tiepNhanDichVuChiDinhQuery.HopDongKhamSucKhoeNhanVienId = id;
                            _this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh;
                            _this.tiepNhanDichVuChiDinhQuery.NamSinh = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
                            _this.tiepNhanDichVuChiDinhQuery.GioiTinh = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh;
                            _this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan;
                            _this.tiepNhanDichVuChiDinhQuery.CoMangThai = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai;
                            _this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan(false);
                        }
                        else {
                            _this.isChuaKham = false;
                            _this.daBatDauKham = true;
                            _this.hasDichVuThem = true;
                            _this.getInfoSarsCoVTheoYeuCauTiepNhans();
                        }
                        if (isShowIn) {
                            _this.inHoSo(id);
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getDanhSachDichVuTheoGoiKhamCuaBenhNhan = function (isShowLoading) {
                    var _this = this;
                    if (isShowLoading === void 0) { isShowLoading = true; }
                    if (this.isChuaKham) {
                        if (isShowLoading) {
                            this.showPopupLoadingData();
                        }
                        this.apiService
                            .post("KhamDoan/GetDanhSachDichVuTheoGoiKhamCuaBenhNhan", this.tiepNhanDichVuChiDinhQuery)
                            .subscribe(function (resultData) {
                            if (resultData !== undefined || resultData !== null) {
                                _this.dataGoiKham = [];
                                _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois = _this.dataGoiKham = _this.dataGoiKham.concat(resultData);
                                _this.setDataGridView();
                                _this.closePopupLoadingData();
                            }
                            else {
                                _this.closePopupLoadingData();
                            }
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.setDataGridView = function () {
                    var _this = this;
                    this.dataSourceGoiKham = {
                        data: this.dataGoiKham,
                        total: this.dataGoiKham.length
                    };
                    this.gridGoiDichVuChuaKham.gridDataSource = this.dataSourceGoiKham;
                    if (this.gridGoiDichVuChuaKham !== undefined) {
                        this.gridGoiDichVuChuaKham.setDataSource();
                    }
                    this.arrGoiKhamDangChiDinh = [];
                    this.dataGoiKham.forEach(function (element) {
                        var index = _this.arrGoiKhamDangChiDinh.findIndex(function (x) { return x == element.TenGoiKhamSucKhoe; });
                        if (index === -1) {
                            _this.arrGoiKhamDangChiDinh.push(element.TenGoiKhamSucKhoe);
                        }
                    });
                    this.tenGoiKhamHienTaiDisplay = this.arrGoiKhamDangChiDinh.join(", ");
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.setDataGridDichVuThemView = function () {
                    this.hasDichVuThem = this.dataDichVuThem != undefined && this.dataDichVuThem.length > 0;
                    this.dataSourceDichVuThem = {
                        data: this.dataDichVuThem,
                        total: this.dataDichVuThem.length
                    };
                    if (this.gridDichVuThemChuaKham !== undefined) {
                        this.gridDichVuThemChuaKham.gridDataSource = this.dataSourceDichVuThem;
                        this.gridDichVuThemChuaKham.setDataSource();
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeGioiTinh = function (event) {
                    this.tiepNhanDichVuChiDinhQuery.GioiTinh = event;
                    if (event == src_app_shared_enum_common_type_enums__WEBPACK_IMPORTED_MODULE_14__["GioiTinh"].Nam) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai = false;
                        this.tiepNhanDichVuChiDinhQuery.CoMangThai = false;
                    }
                    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyInHoSo = function () {
                    this.inHoSo(this.id);
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyBatDauKham = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn bắt đầu khám sức khỏe cho người bệnh này?",
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                _this.apiService.put("KhamDoan/XuLyLuuThongTinHopDongKhamNhanVien", _this.thongTinHanhChinhNhanVien).subscribe(function (res) {
                                    var mess = "Bắt đầu khám";
                                    // if (this.thongTinHanhChinhNhanVien.Id != 0) {
                                    //   mess = "Lưu";
                                    // }
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, [mess]));
                                    //this.closePopupLoadingData();
                                    _this.getDataNhanVien(_this.id, true);
                                    // this.closePopupLoadingData();
                                    // this.inHoSo(this.id);
                                    _this.saveDone.emit(1);
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.TinhThanhPhoChange = function (event) {
                    if (event == undefined || event == null) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.QuanHuyenChange = function (event) {
                    if (event == undefined || event == null) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = null;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.PhuongXaChange = function (event) {
                    var _this = this;
                    this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.PhuongXaId = event;
                    if (event != null && event != undefined) {
                        this.apiService.post("TiepNhanBenhNhan/SetTinhThanhQuanHuyen?phuongXaId=" + event).subscribe(function (resultData) {
                            _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = resultData.TinhThanhId;
                            _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = resultData.QuanHuyenId;
                            _this.comboboxQuanHuyen.getDataForLookup();
                        }, function (err) {
                        });
                    }
                    else {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhThanhId = null;
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.QuanHuyenId = null;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.ThongTinBenhNhanNgaySinhChange = function (event) {
                    this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = event;
                    if (this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh != null) {
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh.getFullYear();
                        this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Tuoi = new Date().getFullYear() - this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.namSinhChange = function (event) {
                    this.tiepNhanDichVuChiDinhQuery.NamSinh = event;
                    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeTinhTrangHonNhan = function (event) {
                    this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = event;
                    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeMangThai = function (event) {
                    this.tiepNhanDichVuChiDinhQuery.CoMangThai = event;
                    this.getDanhSachDichVuTheoGoiKhamCuaBenhNhan();
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.loaiGiaChange = function (event, text) {
                    var _this = this;
                    if (text == 'dichvu') {
                        if (event != undefined && event != null) {
                            if (event.Loai == src_app_shared_enum_kham_doan_enum__WEBPACK_IMPORTED_MODULE_16__["NhomDichVuChiDinhKhamSucKhoe"].KhamBenh) {
                                this.themDichVu.LaDichVuKham = true;
                                this.themDichVu.LoaiDichVuKyThuat = null;
                            }
                            else {
                                this.themDichVu.LaDichVuKham = false;
                                this.themDichVu.LoaiDichVuKyThuat = event.LoaiDichVuKyThuat;
                            }
                            this.themDichVu.DichVuBenhVienId = event.KeyId;
                            this.themDichVu.Ma = event.Ma;
                            this.themDichVu.Ten = event.Ten;
                            this.themDichVu.SoLan = 1;
                            this.themDichVu.LoaiDichVu = event.Loai;
                            this.themDichVu.TenNhomDichVu = event.TenLoaiDichVu;
                            this.themDichVu.NoiThucHienId = null;
                        }
                        else {
                            this.themDichVu.LoaiDichVuKyThuat = null;
                            this.themDichVu.LaDichVuKham = null;
                            this.themDichVu.DichVuBenhVienId = null;
                            this.themDichVu.Ma = null;
                            this.themDichVu.Ten = null;
                            this.themDichVu.SoLan = null;
                            this.themDichVu.LoaiDichVu = null;
                            this.themDichVu.TenNhomDichVu = null;
                            this.themDichVu.NoiThucHienId = null;
                        }
                    }
                    if (text == 'gia') {
                        if (event != undefined && event != null) {
                            this.themDichVu.LoaiGiaId = event;
                        }
                        else {
                            this.themDichVu.LoaiGiaId = null;
                        }
                    }
                    if (this.themDichVu.DichVuBenhVienId != null) {
                        if (this.themDichVu.GoiKhamSucKhoeId == null) {
                            if (this.themDichVu.LoaiGiaId != null) {
                                var obj = {
                                    DichVuKhamBenhHoacKyThuatBenhVienId: this.themDichVu.DichVuBenhVienId,
                                    NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: this.themDichVu.LoaiGiaId,
                                    LaDichVuKham: this.themDichVu.LaDichVuKham
                                };
                                this.apiService.post("KhamDoan/GetDonGiaBenhVien", obj).subscribe(function (resultData) {
                                    if (resultData != undefined && resultData != null) {
                                        _this.themDichVu.DonGiaBenhVien = _this.themDichVu.DonGiaMoi = resultData;
                                        _this.themDichVu.ThanhTien = _this.themDichVu.DonGiaBenhVien * _this.themDichVu.SoLan;
                                    }
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        }
                        else {
                            var obj = {
                                DichVuKhamBenhHoacKyThuatBenhVienId: this.themDichVu.DichVuBenhVienId,
                                NhomGiaDichVuKhamBenhHoacKyThuatBenhVienId: 0,
                                LaDichVuKham: this.themDichVu.LaDichVuKham,
                                GoiKhamSucKhoeId: this.themDichVu.GoiKhamSucKhoeId
                            };
                            this.apiService.post("KhamDoan/GetThongTinGiaDichVuTrongGoi", obj).subscribe(function (resultData) {
                                if (resultData != undefined && resultData != null) {
                                    _this.themDichVu.LoaiGiaId = resultData.NhomGiaDichVuBenhVienId;
                                    _this.themDichVu.DonGiaBenhVien = _this.themDichVu.DonGiaMoi = resultData.DonGiaBenhVien;
                                    _this.themDichVu.ThanhTien = _this.themDichVu.DonGiaBenhVien * _this.themDichVu.SoLan;
                                    _this.themDichVu.DonGiaUuDai = resultData.DonGiaUuDai;
                                    _this.themDichVu.DonGiaChuaUuDai = resultData.DonGiaChuaUuDai;
                                    _this.themDichVu.NoiThucHienId = resultData.NoiThucHienId;
                                    _this.themDichVu.ChuyenKhoaKhamSucKhoe = resultData.ChuyenKhoaKhamSucKhoe;
                                    _this.themDichVu.TenGoiKhamSucKhoe = resultData.TenGoiKhamSucKhoe;
                                }
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeSoLan = function (event) {
                    if (event && this.themDichVu.DonGiaMoi) {
                        this.themDichVu.ThanhTien = this.themDichVu.DonGiaMoi * event;
                    }
                    else {
                        this.themDichVu.ThanhTien = 0;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeDonGiaMoi = function (event) {
                    if (event && this.themDichVu.SoLan) {
                        this.themDichVu.ThanhTien = event * this.themDichVu.SoLan;
                    }
                    else {
                        this.themDichVu.ThanhTien = 0;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeSoLuongGridDichVu = function (event, dataItem) {
                    if (this.isChuaKham) {
                        if (event) {
                            dataItem.ThanhTien = event * dataItem.DonGiaMoi;
                        }
                        else {
                            dataItem.ThanhTien = 0;
                        }
                    }
                    else {
                        this.CapNhatGridItemDichVuK(dataItem, event, 'SoLan');
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeDonGiaGridDichVu = function (event, dataItem) {
                    if (this.isChuaKham) {
                        if (event) {
                            dataItem.ThanhTien = event * dataItem.SoLan;
                        }
                        else {
                            dataItem.ThanhTien = 0;
                        }
                    }
                    else {
                        this.CapNhatGridItemDichVuK(dataItem, event, 'DonGia');
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeNoiThucHienGridDichVu = function (event, dataItem, rowIndex) {
                    console.log('changeNoiThucHienGridDichVu', dataItem);
                    if (!this.isChuaKham && event) {
                        this.CapNhatGridItemDichVuK(dataItem, event, 'NoiThucHien', rowIndex);
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        if (this.isSelectItem != true) {
                            this.xuLyThemDichVu();
                        }
                        else {
                            this.isSelectItem = false;
                        }
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.openCombobox = function (event) {
                    if (event) {
                        this.isSelectItem = true;
                    }
                    else {
                        this.isSelectItem = false;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.onDataBoundDichVuDaChiDinh = function (event) {
                    this.dataIn = event;
                    if (event) {
                        this.tongTienDichVuDaChiDinh = event.Data.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0);
                        this.hasDichVuThem = event.Data.length > 0;
                    }
                    else {
                        this.tongTienDichVuDaChiDinh = 0;
                        this.hasDichVuThem = false;
                    }
                    this.tongThanhTienTatCaDichVu = this.tongTienDichVuDaChiDinh + this.tongTienUuDai;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.dataBoundGridDichVuTrongGoi = function (event) {
                    var _this = this;
                    this.arrGoiKhamDangChiDinh = [];
                    if (event) {
                        event.Data.forEach(function (element) {
                            var index = _this.arrGoiKhamDangChiDinh.findIndex(function (x) { return x == element.TenGoiKhamSucKhoe; });
                            if (index === -1) {
                                _this.arrGoiKhamDangChiDinh.push(element.TenGoiKhamSucKhoe);
                            }
                        });
                        this.tongTienUuDai = event.Data.reduce(function (sum, item) { return sum + item.DonGiaUuDai; }, 0);
                    }
                    else {
                        this.tongTienUuDai = 0;
                    }
                    this.tenGoiKhamHienTaiDisplay = this.arrGoiKhamDangChiDinh.join(", ");
                    this.tongThanhTienTatCaDichVu = this.tongTienDichVuDaChiDinh + this.tongTienUuDai;
                };
                // action
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyThemDichVu = function () {
                    var _this = this;
                    this.showPopupLoadingData();
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
                        this.validationDichVuErrors = [];
                        //YeuCauTiepNhanId
                        if (!this.isChuaKham) {
                            this.themDichVu.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
                        }
                        // kiểm tra trùng dv khám đối với trường hợp chưa bắt đầu khám, dv mới thêm là tạm trên UI
                        if (this.isChuaKham) {
                            if (this.themDichVu.LaDichVuKham) {
                                var indexGridDVThem = this.dataSourceDichVuThem.data.findIndex(function (x) { return x.DichVuBenhVienId == _this.themDichVu.DichVuBenhVienId; });
                                var indexGridDVGoi = this.dataSourceGoiKham.data.findIndex(function (x) { return x.DichVuBenhVienId == _this.themDichVu.DichVuBenhVienId; });
                                if (indexGridDVThem != -1 || indexGridDVGoi != -1) {
                                    this.notificationService.showError("Dịch vụ khám bệnh này đã tồn tại");
                                    this.closePopupLoadingData();
                                    return;
                                }
                            }
                            if (this.themDichVu.GoiKhamSucKhoeId != null) {
                                // this.themDichVu.SoLanChuaLuu = 
                                //   this.dataSourceDichVuThem.data.filter(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId 
                                //                                             && x.GoiKhamSucKhoeId == this.themDichVu.GoiKhamSucKhoeId)
                                //                                 .reduce((sum, item) => sum + item.SoLan, 0);
                                this.themDichVu.SoLanChuaLuu =
                                    this.dataSourceGoiKham.data.filter(function (x) { return x.DichVuBenhVienId == _this.themDichVu.DichVuBenhVienId
                                        && x.GoiKhamSucKhoeId == _this.themDichVu.GoiKhamSucKhoeId; })
                                        .reduce(function (sum, item) { return sum + item.SoLan; }, 0);
                            }
                        }
                        this.apiService.post("KhamDoan/KiemTraThemDichVuKhamSucKhoe", this.themDichVu).subscribe(function (res) {
                            if (_this.isChuaKham) {
                                if (_this.themDichVu.GoiKhamSucKhoeId != null) {
                                    _this.dataGoiKham = [];
                                    _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.push(Object.assign({}, res));
                                    _this.dataGoiKham = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois;
                                    _this.setDataGridView();
                                }
                                else {
                                    _this.hasDichVuThem = true;
                                    _this.dataDichVuThem = [];
                                    _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.push(Object.assign({}, res));
                                    _this.dataDichVuThem = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems;
                                    _this.setDataGridDichVuThemView();
                                }
                                _this.xuLyHuyThemDichVu();
                            }
                            else {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                _this.xuLyHuyThemDichVu();
                                if (_this.themDichVu.GoiKhamSucKhoeId != null) {
                                }
                                else {
                                    _this.hasDichVuThem = true;
                                }
                                if (_this.gridGoiDichVuDaChiDinh !== undefined) {
                                    _this.gridGoiDichVuDaChiDinh.search();
                                }
                                if (_this.gridDichVuThemDaChiDinh !== undefined) {
                                    _this.gridDichVuThemDaChiDinh.search();
                                }
                            }
                            _this.closePopupLoadingData();
                        }, function (err) {
                            _this.validationDichVuErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyHuyThemDichVu = function () {
                    this.validationDichVuErrors = [];
                    // let loaiNhomId = this.themDichVu.LoaiNhomDichVuId;
                    this.themDichVu = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["TiepNhanDichVuChiDinh"]();
                    this.themDichVu.LoaiNhomDichVuId = 0; // giá trị default của nhóm hệ thống
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getIndexDichVuTrongGoi = function (dataItem) {
                    return this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.findIndex(function (x) { return x == dataItem; });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyXoaDichVuKhamTrongGoi = function (dataItem, index) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            if (_this.isChuaKham) { // trường hợp chưa bắt đầu khám
                                // this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.splice(index, 1);
                                var index_1 = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.findIndex(function (x) { return x == dataItem; });
                                if (index_1 != -1) {
                                    _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.splice(index_1, 1);
                                    _this.setDataGridView();
                                }
                                if (dataItem.LaGoiChung) {
                                    _this.xoaDichVuDaChiDinhTrongGoiChung(dataItem);
                                }
                            }
                            else {
                                if (dataItem.LaGoiChung) {
                                    _this.xoaDichVuDaChiDinhTrongGoiChung(dataItem, true);
                                }
                                else {
                                    _this.xoaDichVuDaChiDinh(dataItem, true);
                                }
                            }
                        }
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyXoaDichVuKhamThem = function (dataItem, index) {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["xóa"]) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == "Yes") {
                            if (_this.isChuaKham) { // trường hợp chưa bắt đầu khám
                                //this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.splice(index, 1);
                                var index_2 = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.findIndex(function (x) { return x == dataItem; });
                                if (index_2 != -1) {
                                    _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.splice(index_2, 1);
                                    _this.setDataGridDichVuThemView();
                                }
                            }
                            else {
                                _this.xoaDichVuDaChiDinh(dataItem);
                            }
                        }
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xoaDichVuDaChiDinh = function (dataItem, isGridGoi, showLoading, xoaKemYeuCauDichVu) {
                    var _this = this;
                    if (isGridGoi === void 0) { isGridGoi = false; }
                    if (showLoading === void 0) { showLoading = true; }
                    if (xoaKemYeuCauDichVu === void 0) { xoaKemYeuCauDichVu = false; }
                    if (showLoading) {
                        this.showPopupLoadingData();
                    }
                    var xoaChiDinh = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_22__["CapNhatGridDichVuKhamSucKhoeNhanVien"]();
                    xoaChiDinh.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
                    // xoaChiDinh.LoaiDichVu = dataItem.LoaiDichVu;
                    xoaChiDinh.LaDichVuKham = dataItem.LaDichVuKham;
                    xoaChiDinh.YeuCauDichVuBenhVienId = dataItem.Id;
                    if (xoaKemYeuCauDichVu) {
                        xoaChiDinh.XoaDichVuDaChiDinhTrongGoiChung = true;
                        xoaChiDinh.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
                        xoaChiDinh.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
                    }
                    this.apiService.post("KhamDoan/XuLyXoaDichVuKhamSucKhoeChiDinh", xoaChiDinh).subscribe(function (result) {
                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        if (isGridGoi) {
                            _this.gridGoiDichVuDaChiDinh.search();
                        }
                        else {
                            _this.gridDichVuThemDaChiDinh.search();
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyLuuThongTinHanhChinh = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].MessConfirm, ["lưu"]),
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                _this.apiService.put("KhamDoan/XuLyLuuThongTinHopDongKhamNhanVien", _this.thongTinHanhChinhNhanVien).subscribe(function (res) {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                    _this.closePopupLoadingData();
                                    _this.saveDone.emit(2);
                                    //this.quayLai();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                //BVHD-3707
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyQuayLaiChuaKhamNhieuNhanVien = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Update)) {
                        this.dialog
                            .open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmComponent"], {
                            disableClose: false,
                            width: "400px",
                            data: {
                                Title: "Xác nhận",
                                Message: "Bạn có chắc chắn muốn quay lại chưa khám cho nhân viên đang chọn không?",
                            },
                        })
                            .afterClosed()
                            .subscribe(function (result) {
                            if (result == "Yes") {
                                _this.showPopupLoadingData();
                                var arrayHopDongNhanVienId = {
                                    HopDongKhamSucKhoeNhanVienIds: [_this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id]
                                };
                                _this.apiService.put("KhamDoan/XuLyQuayLaiChuaKhamNhieuNhanVien", arrayHopDongNhanVienId).subscribe(function (res) {
                                    var mess = "Quay lại chưa khám";
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, [mess]));
                                    _this.closePopupLoadingData();
                                    window.location.reload();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                    _this.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.CapNhatGridItemDichVuK = function (dataItem, event, loaiCapNhat, rowIndex) {
                    if (rowIndex === void 0) { rowIndex = null; }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Update)) {
                        var gridItem_1 = new _kham_doan_tiep_nhan_model__WEBPACK_IMPORTED_MODULE_22__["CapNhatGridDichVuKhamSucKhoeNhanVien"]();
                        gridItem_1.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
                        // gridItem.LoaiDichVu = dataItem.LoaiDichVu;
                        gridItem_1.LaDichVuKham = dataItem.LaDichVuKham;
                        gridItem_1.YeuCauDichVuBenhVienId = dataItem.Id;
                        switch (loaiCapNhat) {
                            case "DonGia":
                                gridItem_1.DonGia = event;
                                gridItem_1.IsUpdateDonGia = true;
                                break;
                            case "SoLan":
                                gridItem_1.SoLan = event;
                                gridItem_1.IsUpdateSoLan = true;
                                break;
                            case "NoiThucHien":
                                gridItem_1.NoiThucHienId = event;
                                gridItem_1.IsUpdateNoiThucHien = true;
                                break;
                        }
                        if (loaiCapNhat == "SoLan" || loaiCapNhat == "DonGia") {
                            var self = this;
                            clearTimeout(self.timeout);
                            self.timeout = setTimeout(function () {
                                self.saveItemDichVu(gridItem_1);
                            }, 1000);
                        }
                        else {
                            this.saveItemDichVu(gridItem_1);
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.saveItemDichVu = function (gridItem) {
                    var _this = this;
                    this.showPopupLoadingData();
                    this.apiService.post("KhamDoan/CapNhatGridItemDichVuKhamSucKhoeNhanVien", gridItem).subscribe(function (resultData) {
                        _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Cập nhật "]));
                        //reload grid
                        if (_this.gridDichVuThemDaChiDinh != undefined) {
                            _this.gridDichVuThemDaChiDinh.search();
                        }
                        if (_this.gridGoiDichVuDaChiDinh != undefined) {
                            _this.gridGoiDichVuDaChiDinh.search();
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.inHoSoTungPhieu = function (phieuIn, id) {
                    if (phieuIn == 1) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
                            this.dialog.open(_so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_20__["SoKhamSucKhoeDinhKyPopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 2) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
                            this.dialog.open(_phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_19__["PhieuDangKyKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 3) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
                            this.dialog.open(_ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_23__["KetQuaKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                    if (phieuIn == 4) {
                        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].View)) {
                            this.dialog.open(_bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_28__["BangHuongDanKhamSucKhoePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: id
                            }).afterClosed().subscribe(function (result) {
                            });
                        }
                        else {
                            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                        }
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.inHoSo = function (hopDongKhamSucKhoeNhanVienId) {
                    var _this = this;
                    this.dialog.open(_kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_26__["KhamDoanTiepNhanInHoSoPopupComponent"], {
                        disableClose: false,
                        width: '300px',
                        data: {}
                    }).afterClosed().subscribe(function (result) {
                        if (result) {
                            _this.dialog.open(_kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_27__["KhamDoanTiepNhanFilePopupComponent"], {
                                disableClose: false,
                                width: '1000px',
                                data: { "Id": hopDongKhamSucKhoeNhanVienId, "HoSoDaChon": result }
                            }).afterClosed().subscribe(function (result) {
                                //this.quayLai();
                            }, function (err) {
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                            });
                        }
                        else {
                            //this.quayLai();
                        }
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeDichVuChiDinh = function (event) {
                    this.validationDichVuErrors = [];
                    this.themDichVu.IsFirstLoad = true;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.quayLai = function () {
                    this.location.back();
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeLoaiNhomDichVu = function (event) {
                    this.xuLyHuyThemDichVu();
                    this.themDichVu.LoaiNhomDichVuId = event;
                    if (event && event != 0) {
                        this.themDichVu.GoiKhamSucKhoeId = event;
                    }
                    else {
                        this.themDichVu.GoiKhamSucKhoeId = null;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getQueryInfoLookupDichVuTrongGoi = function () {
                    if (this.themDichVu.GoiKhamSucKhoeId != null) {
                        this.tiepNhanDichVuChiDinhQuery.HopDongKhamSucKhoeNhanVienId = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id;
                        this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh;
                        this.tiepNhanDichVuChiDinhQuery.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
                        this.tiepNhanDichVuChiDinhQuery.GioiTinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh;
                        this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan;
                        this.tiepNhanDichVuChiDinhQuery.CoMangThai = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai;
                        this.tiepNhanDichVuChiDinhQuery.GoiKhamSucKhoeId = this.themDichVu.GoiKhamSucKhoeId;
                        this.queryInfoDichVuTrongGoi.ParameterDependencies = JSON.stringify(this.tiepNhanDichVuChiDinhQuery);
                    }
                    else {
                        this.queryInfoDichVuTrongGoi.ParameterDependencies = null;
                    }
                    return this.queryInfoDichVuTrongGoi;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.extCheckboxSelections = function (event) {
                    this.listDichVuIds = event;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.InDichVu = function () {
                    var _this = this;
                    this.listChonDichVuChiDinhReLoad = [];
                    if (this.gridDichVuThemDaChiDinh != undefined && this.gridDichVuThemDaChiDinh != null) {
                        var gridData = this.gridDichVuThemDaChiDinh.getAllDataFromDatasource();
                        gridData.forEach(function (elements) {
                            _this.listChonDichVuChiDinh.forEach(function (lstChiDinh) {
                                if (lstChiDinh.DichVuChiDinhId == elements.Id && lstChiDinh.NhomChiDinhId == elements.NhomId) {
                                    _this.listChonDichVuChiDinhReLoad.push(lstChiDinh);
                                }
                            });
                        });
                        if (this.listChonDichVuChiDinhReLoad.length != 0) {
                            var voInChiDinhNgoaiGoiKhamDoan = {
                                YeuCauTiepNhanId: this.thongTinHanhChinhNhanVien.Id,
                                //ListDichVuKyThuatIds:this.listDichVuIds,
                                Hosting: window.location.protocol + "//" + window.location.host,
                                DichVuChiDinhIns: this.listChonDichVuChiDinhReLoad
                            };
                            this.showPopupLoadingData();
                            this.apiService.post("KhamDoan/InDichVuChiDinhPhatSinh", voInChiDinhNgoaiGoiKhamDoan).subscribe(function (resultData) {
                                _this.dialog.open(_in_dich_vu_chi_dinh_ngoai_goi_in_dich_vu_chi_dinh_ngoai_goi_component__WEBPACK_IMPORTED_MODULE_30__["InDichVuChiDinhNgoaiGoiComponent"], {
                                    disableClose: true,
                                    width: '1000px',
                                    data: { Model: resultData }
                                }).afterClosed().subscribe(function () {
                                });
                                _this.closePopupLoadingData();
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.closePopupLoadingData();
                            });
                        }
                        else {
                            this.notificationService.showError("Chưa chọn dịch vụ in.");
                        }
                    }
                    else {
                        this.notificationService.showError("Không có dịch vụ phát sinh.");
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeLookupNoiThucHien = function (event, laHeThong) {
                    if (laHeThong === void 0) { laHeThong = false; }
                    if (laHeThong && this.themDichVu.IsFirstLoad) {
                        if (event && event.length > 0 && this.themDichVu.DichVuBenhVienId && !this.themDichVu.NoiThucHienId) {
                            this.themDichVu.NoiThucHienId = event[0].KeyId;
                            this.themDichVu.IsFirstLoad = false;
                        }
                    }
                };
                //=================================================== BVHD-3619 ============================================================
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.changeLoaiNhomDichVuMultiselect = function (event) {
                    this.xuLyHuyThemDichVuMultiselect();
                    this.themDichVuMultiselect.LoaiNhomDichVuId = event;
                    if (event && event != 0) {
                        this.themDichVuMultiselect.GoiKhamSucKhoeId = event;
                    }
                    else {
                        this.themDichVuMultiselect.GoiKhamSucKhoeId = null;
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.chonNhomDichVuMultiselect = function (event) {
                    var self = this;
                    self.timeout = setTimeout(function () {
                        if (event) {
                            self.themDichVuMultiselect.LaGoiPhatSinh = event.LaGoiPhatSinh;
                        }
                        else {
                            self.themDichVuMultiselect.LaGoiPhatSinh = false;
                        }
                    }, 500);
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getQueryInfoLookupDichVuTrongGoiMultiselect = function () {
                    if (this.themDichVuMultiselect.GoiKhamSucKhoeId != null) {
                        this.tiepNhanDichVuChiDinhQuery.HopDongKhamSucKhoeNhanVienId = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.Id;
                        this.tiepNhanDichVuChiDinhQuery.NgayThangNamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NgayThangNamSinh;
                        this.tiepNhanDichVuChiDinhQuery.NamSinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.NamSinh;
                        this.tiepNhanDichVuChiDinhQuery.GioiTinh = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.GioiTinh;
                        this.tiepNhanDichVuChiDinhQuery.TinhTrangHonNhan = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.TinhTrangHonNhan;
                        this.tiepNhanDichVuChiDinhQuery.CoMangThai = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.CoMangThai;
                        this.tiepNhanDichVuChiDinhQuery.GoiKhamSucKhoeId = this.themDichVuMultiselect.GoiKhamSucKhoeId;
                        this.queryInfoDichVuTrongGoi.ParameterDependencies = JSON.stringify(this.tiepNhanDichVuChiDinhQuery);
                    }
                    else {
                        this.queryInfoDichVuTrongGoi.ParameterDependencies = null;
                    }
                    return this.queryInfoDichVuTrongGoi;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyThemDichVuMultiselect = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_17__["SecurityOperation"].Add)) {
                        this.showPopupLoadingData();
                        this.validationDichVuErrors = [];
                        //YeuCauTiepNhanId
                        if (!this.isChuaKham) {
                            this.themDichVuMultiselect.YeuCauTiepNhanId = this.thongTinHanhChinhNhanVien.Id;
                        }
                        // kiểm tra trùng dv khám đối với trường hợp chưa bắt đầu khám, dv mới thêm là tạm trên UI
                        // if(this.isChuaKham)
                        // {
                        //   if(this.themDichVu.LaDichVuKham)
                        //   {
                        //     let indexGridDVThem = this.dataSourceDichVuThem.data.findIndex(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId);
                        //     let indexGridDVGoi = this.dataSourceGoiKham.data.findIndex(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId);
                        //     if(indexGridDVThem != -1 || indexGridDVGoi != -1)
                        //     {
                        //       this.notificationService.showError("Dịch vụ khám bệnh này đã tồn tại");
                        //       this.closePopupLoadingData();
                        //       return;
                        //     }
                        //   }
                        //   if(this.themDichVu.GoiKhamSucKhoeId != null)
                        //   {
                        //     this.themDichVu.SoLanChuaLuu = 
                        //       this.dataSourceGoiKham.data.filter(x => x.DichVuBenhVienId == this.themDichVu.DichVuBenhVienId 
                        //                                                 && x.GoiKhamSucKhoeId == this.themDichVu.GoiKhamSucKhoeId)
                        //                                     .reduce((sum, item) => sum + item.SoLan, 0);
                        //   }
                        // }
                        this.themDichVuMultiselect.DichVuThems = [];
                        this.dataSourceDichVuThem.data.forEach(function (dvThem) {
                            _this.themDichVuMultiselect.DichVuThems.push(Object.assign({}, dvThem));
                        });
                        this.themDichVuMultiselect.DichVuGois = [];
                        this.dataSourceGoiKham.data.forEach(function (dvGoi) {
                            _this.themDichVuMultiselect.DichVuGois.push(Object.assign({}, dvGoi));
                        });
                        this.themDichVuMultiselect.HinhThucKhamBenh = this.hinhThucKham;
                        this.themDichVuMultiselect.HopDongKhamSucKhoeId = this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.HopDongKhamSucKhoeId;
                        //BVHD-3618
                        this.themDichVuMultiselect.HopDongKhamSucKhoeNhanVienId = this.id;
                        //BVHD-3761
                        //=======================================================================================================
                        var arrDichVu_1 = this.themDichVuMultiselect.DichVus.slice();
                        arrDichVu_1.forEach(function (element) {
                            var elementObj = JSON.parse(arrDichVu_1[0]);
                            _this.showbuttonLuuVaInPhieuXetNghiem = _this.dichVuSarsCoVs.includes(elementObj.DichVuId);
                        });
                        if (this.showbuttonLuuVaInPhieuXetNghiem == true) {
                            this.apiService.post;
                            this.dialog
                                .open(_kham_benh_kham_benh_xn_sars_cov2_popup_xn_sars_cov2_popup_component__WEBPACK_IMPORTED_MODULE_32__["XnSarsCov2PopupComponent"], {
                                width: "600px",
                                data: { LoaiMauXetNghiem: this.loaiBenhPham, LoaiMauXetNghiemText: this.loaiBenhPhamText, BieuHienLamSang: this.bieuHienLamSang, DichTeSarsCoV2: this.dichTeSarsCoV2 }
                            })
                                .afterClosed()
                                .subscribe(function (result) {
                                if (result != undefined) {
                                    _this.themDichVuMultiselect.BieuHienLamSang = result.BieuHienLamSang;
                                    _this.themDichVuMultiselect.DichTeSarsCoV2 = result.DichTeSarsCoV2;
                                    _this.ThemDichVuSarsCov2();
                                }
                                else {
                                    _this.ThemDichVuSarsCov2();
                                }
                            });
                            //=======================================================================================================
                        }
                        else {
                            this.apiService.post("KhamDoan/KiemTraThemDichVuKhamSucKhoeMultiselect", this.themDichVuMultiselect).subscribe(function (arrRes) {
                                if (_this.isChuaKham) {
                                    if (_this.themDichVuMultiselect.GoiKhamSucKhoeId != null && _this.themDichVuMultiselect.LaGoiPhatSinh !== true) {
                                        _this.dataGoiKham = [];
                                        arrRes.forEach(function (element) {
                                            _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.push(Object.assign({}, element));
                                        });
                                        _this.dataGoiKham = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois;
                                        _this.setDataGridView();
                                    }
                                    else {
                                        _this.hasDichVuThem = true;
                                        _this.dataDichVuThem = [];
                                        arrRes.forEach(function (element) {
                                            _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.push(Object.assign({}, element));
                                        });
                                        _this.dataDichVuThem = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems;
                                        _this.setDataGridDichVuThemView();
                                    }
                                    _this.xuLyHuyThemDichVuMultiselect();
                                }
                                else {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                                    _this.xuLyHuyThemDichVuMultiselect();
                                    if (_this.themDichVuMultiselect.GoiKhamSucKhoeId != null) {
                                    }
                                    else {
                                        _this.hasDichVuThem = true;
                                    }
                                    if (_this.gridGoiDichVuDaChiDinh !== undefined) {
                                        _this.gridGoiDichVuDaChiDinh.search();
                                    }
                                    if (_this.gridDichVuThemDaChiDinh !== undefined) {
                                        _this.gridDichVuThemDaChiDinh.search();
                                    }
                                }
                                _this.closePopupLoadingData();
                            }, function (err) {
                                _this.validationDichVuErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.closePopupLoadingData();
                            });
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xuLyHuyThemDichVuMultiselect = function () {
                    this.validationDichVuErrors = [];
                    this.themDichVuMultiselect = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["TiepNhanDichVuChiDinhMultiselect"]();
                    this.themDichVuMultiselect.LoaiNhomDichVuId = 0;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.keyEvent = function (event) {
                    // enter
                    if (event.keyCode == 13) {
                        if (this.dialog.openDialogs.length > 0) {
                            return;
                        }
                        event.preventDefault();
                        this.xuLyHuyThemDichVuMultiselect();
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.tinhTongTienDichVuChuaBatDauKham = function () {
                    return this.dataDichVuThem.reduce(function (sum, item) { return sum + item.ThanhTien; }, 0) + this.dataGoiKham.reduce(function (sum, item) { return sum + item.DonGiaUuDai; }, 0);
                };
                ;
                //============================================================================================================================
                //==================================== BVHD-3618 ==========================================
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.xoaDichVuDaChiDinhTrongGoiChung = function (dataItem, xoaKemYeuCauDichVu) {
                    var _this = this;
                    if (xoaKemYeuCauDichVu === void 0) { xoaKemYeuCauDichVu = false; }
                    this.showPopupLoadingData();
                    if (xoaKemYeuCauDichVu) {
                        this.xoaDichVuDaChiDinh(dataItem, true, false, true);
                    }
                    else {
                        var xoaChiDinh = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["DichVuGoiChungXoaChuaBatDauKham"]();
                        xoaChiDinh.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKhamBenhNhanVienId;
                        xoaChiDinh.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId = dataItem.GoiKhamSucKhoeChungDichVuKyThuatNhanVienId;
                        this.apiService.post("KhamDoan/XuLyXoaDichVuGoiChungChuaBatDauKham", xoaChiDinh).subscribe(function (result) {
                            // this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Xóa"]));
                            // xử lý xóa trên grid
                            // if (xoaKemYeuCauDichVu) {
                            //   this.xoaDichVuDaChiDinh(dataItem, true, false);
                            // }
                            // else {
                            _this.closePopupLoadingData();
                            // }
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.closePopupLoadingData();
                        });
                    }
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.SelectcheckAllboxIn = function (event) {
                    var _this = this;
                    var gridDataIn = [];
                    if (this.dataIn.Data == undefined) {
                        this.listChonDichVuChiDinh = [];
                    }
                    else {
                        gridDataIn = this.gridDichVuThemDaChiDinh.getAllDataFromDatasource();
                        this.listChonDichVuChiDinh = [];
                    }
                    if (event == true) {
                        gridDataIn.forEach(function (element) {
                            element.isCheckRowItem = true;
                            _this.checkAll = true;
                            var index = _this.listChonDichVuChiDinh.findIndex(function (x) { return x.DichVuChiDinhId == element.Id && x.NhomChiDinhId == element.NhomId; });
                            if (index == -1) {
                                var chiDinh = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["ListInChiDinh"]();
                                chiDinh.NhomChiDinhId = element.NhomId;
                                chiDinh.DichVuChiDinhId = element.Id;
                                _this.listChonDichVuChiDinh.push(chiDinh);
                            }
                        });
                    }
                    else {
                        gridDataIn.forEach(function (element) {
                            element.isCheckRowItem = false;
                        });
                        this.listChonDichVuChiDinh = [];
                    }
                    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.checkboxIn = function (event, dataItem) {
                    if (this.dataIn.Data == undefined) {
                        this.listChonDichVuChiDinh = [];
                    }
                    var index = this.listChonDichVuChiDinh.findIndex(function (x) { return x.DichVuChiDinhId == dataItem.Id && x.NhomChiDinhId == dataItem.NhomId; });
                    if (event == true) {
                        if (index == -1) {
                            var chiDinh = new _kham_doan_model__WEBPACK_IMPORTED_MODULE_21__["ListInChiDinh"]();
                            chiDinh.NhomChiDinhId = dataItem.NhomId;
                            chiDinh.DichVuChiDinhId = dataItem.Id;
                            this.listChonDichVuChiDinh.push(chiDinh);
                            if (this.listChonDichVuChiDinh.length == this.dataIn.length) {
                                this.checkAll = true;
                            }
                        }
                        else {
                            if (this.listChonDichVuChiDinh.length == this.dataIn.length) {
                                this.checkAll = true;
                            }
                            else {
                                this.checkAll = false;
                            }
                        }
                        dataItem.isCheckRowItem = true;
                    }
                    else {
                        this.checkAll = false;
                        if (index >= 0) {
                            this.listChonDichVuChiDinh.splice(index, 1);
                        }
                    }
                    if (this.listChonDichVuChiDinh.length == this.dataIn.Data.length) {
                        this.checkAll = true;
                    }
                    else {
                        this.checkAll = false;
                    }
                    this.isCheckXacNhanIn = this.listChonDichVuChiDinh.length > 0;
                };
                // extOnDataBound(event){
                //   this.dataIn =event;
                // }
                //----------------------------------------------------------------------------------------
                //BVHD-3761
                //=======================================================================================================
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.InPhieuXN = function () {
                    var _this = this;
                    var yeuCauDichVuKyThuatIds = [];
                    var gridData = this.gridDichVuThemDaChiDinh.getAllDataFromDatasource();
                    gridData.forEach(function (elements) {
                        _this.listChonDichVuChiDinh.forEach(function (lstChiDinh) {
                            if (lstChiDinh.DichVuChiDinhId == elements.Id &&
                                lstChiDinh.NhomChiDinhId == elements.NhomId &&
                                lstChiDinh.NhomChiDinhId == 2) {
                                yeuCauDichVuKyThuatIds.push(lstChiDinh.DichVuChiDinhId);
                            }
                        });
                    });
                    var hosting = window.location.protocol + "//" + window.location.host;
                    var model = {
                        YeuCauDichVuKyThuatIds: yeuCauDichVuKyThuatIds,
                        Hosting: hosting,
                        YeuCauTiepNhanId: this.thongTinHanhChinhNhanVien.Id
                    };
                    if (yeuCauDichVuKyThuatIds.length == 0) {
                        var mess = "Chưa chọn dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                        this.notificationService.showError(mess);
                    }
                    else {
                        this.apiService
                            .post("TiepNhanBenhNhan/InPhieuXetNghiemCovidBacSiKhacChiDinh", model)
                            .subscribe(function (resultData) {
                            if (resultData != null && resultData != "") {
                                var dialogRef = _this.dialog.open(_kham_benh_kham_benh_lan_kham_hien_tai_xn_covid_sarscov2_popup_xn_covid_sarscov2_popup_component__WEBPACK_IMPORTED_MODULE_31__["XnCovidSarscov2PopupComponent"], {
                                    width: '1000px',
                                    height: 'auto',
                                    data: { Model: resultData }
                                }).afterClosed().subscribe(function (result) {
                                });
                            }
                            else {
                                var mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                                _this.notificationService.showError(mess);
                            }
                        });
                    }
                    // let hosting =window.location.protocol + "//" + window.location.host;
                    // this.apiService
                    // .get<any>(
                    //   "TiepNhanBenhNhan/InPhieuXetNghiemCovid?id=" +
                    //   this.benhNhanHienTai.YeuCauTiepNhanId +
                    //   "&hostingName=" +
                    //    hosting
                    // )
                    // .subscribe((resultData) => {
                    //     if(resultData != null && resultData !="")
                    //     {
                    //         let dialogRef = this.dialog.open(XnCovidSarscov2PopupComponent, {
                    //             width: '1000px',
                    //             height: 'auto',
                    //             data: { Model: resultData }
                    //           }).afterClosed().subscribe(result => {
                    //           });
                    //     }
                    //     else{
                    //         let mess = "Không có dịch vụ xét nghiệm test nhanh Sars-Cov 2 cần in";
                    //         this.notificationService.showError(mess);
                    //     }
                    // });
                };
                //=======================================================================================================
                // BVHD-3761
                //================================================================================================
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getListDichVuSarsCoVs = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetSarsCoVs").subscribe(function (resultData) {
                        _this.dichVuSarsCoVs = [];
                        _this.dichVuSarsCoVs = resultData.Ids;
                        _this.loaiBenhPham = resultData.LoaiMauXetNghiem;
                        _this.loaiBenhPhamText = resultData.LoaiMauXetNghiemText;
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.getInfoSarsCoVTheoYeuCauTiepNhans = function () {
                    var _this = this;
                    this.apiService.get("TiepNhanBenhNhan/GetInfoSarsCoVTheoYeuCauTiepNhanNoiTru?id=" + this.thongTinHanhChinhNhanVien.Id).subscribe(function (resultData) {
                        _this.bieuHienLamSang = resultData.BieuHienLamSang;
                        _this.dichTeSarsCoV2 = resultData.DichTeSarsCoV2;
                    });
                };
                KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype.ThemDichVuSarsCov2 = function () {
                    var _this = this;
                    this.apiService.post("KhamDoan/KiemTraThemDichVuKhamSucKhoeMultiselect", this.themDichVuMultiselect).subscribe(function (arrRes) {
                        if (_this.isChuaKham) {
                            if (_this.themDichVuMultiselect.GoiKhamSucKhoeId != null && _this.themDichVuMultiselect.LaGoiPhatSinh !== true) {
                                _this.dataGoiKham = [];
                                arrRes.forEach(function (element) {
                                    _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois.push(Object.assign({}, element));
                                });
                                _this.dataGoiKham = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhTrongGois;
                                _this.setDataGridView();
                            }
                            else {
                                _this.hasDichVuThem = true;
                                _this.dataDichVuThem = [];
                                arrRes.forEach(function (element) {
                                    _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems.push(Object.assign({}, element));
                                });
                                _this.dataDichVuThem = _this.thongTinHanhChinhNhanVien.HopDongKhamSucKhoeNhanVien.DichVuChiDinhThems;
                                _this.setDataGridDichVuThemView();
                            }
                            _this.xuLyHuyThemDichVuMultiselect();
                        }
                        else {
                            _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                            _this.getInfoSarsCoVTheoYeuCauTiepNhans();
                            _this.xuLyHuyThemDichVuMultiselect();
                            if (_this.themDichVuMultiselect.GoiKhamSucKhoeId != null) {
                            }
                            else {
                                _this.hasDichVuThem = true;
                            }
                            if (_this.gridGoiDichVuDaChiDinh !== undefined) {
                                _this.gridGoiDichVuDaChiDinh.search();
                            }
                            if (_this.gridDichVuThemDaChiDinh !== undefined) {
                                _this.gridDichVuThemDaChiDinh.search();
                            }
                        }
                        _this.closePopupLoadingData();
                    }, function (err) {
                        _this.validationDichVuErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                return KhamDoanTiepNhanNhanVienDetailPopupComponent;
            }());
            KhamDoanTiepNhanNhanVienDetailPopupComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_24__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_25__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenDichVuTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "tenDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiGiaTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "loaiGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "noiThucHienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('noiThucHienThemDichVuTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "noiThucHienThemDichVuTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaGroupFooterTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "donGiaGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienGroupFooterTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "thanhTienGroupFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienFooterTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "thanhTienFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaMoiTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "donGiaMoiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "thanhTienTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiDiemChiDinhTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "thoiDiemChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionDichVuThemTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "actionDichVuThemTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "actionTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxQuanHuyen', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "comboboxQuanHuyen", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('comboboxPhuongXa', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "comboboxPhuongXa", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridGoiDichVuChuaKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], static: false })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "gridGoiDichVuChuaKham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridGoiDichVuDaChiDinh', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], static: false })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "gridGoiDichVuDaChiDinh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVuThemChuaKham', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], static: false })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "gridDichVuThemChuaKham", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDichVuThemDaChiDinh', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_12__["GridComponent"], static: false })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "gridDichVuThemDaChiDinh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaUuDaiLabelTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "donGiaUuDaiLabelTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaUuDaiFooterTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "donGiaUuDaiFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaUuDaiTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "donGiaUuDaiTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "checkBoxTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { static: true })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "checkBoxHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "Id", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "IsDichVuPhatSinh", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "saveDone", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent.prototype, "keyEvent", null);
            KhamDoanTiepNhanNhanVienDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-kham-doan-tiep-nhan-nhan-vien-detail-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-tiep-nhan-nhan-vien-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-tiep-nhan-nhan-vien-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.scss")).default]
                })
            ], KhamDoanTiepNhanNhanVienDetailPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-routing.module.ts": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-routing.module.ts ***!
          \**************************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanRoutingModule", function () { return KhamDoanTiepNhanRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _kham_benh_kham_benh_kham_benh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../kham-benh/kham-benh/kham-benh.component */ "./src/app/modules/main/kham-benh/kham-benh/kham-benh.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_detail_popup_kham_doan_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.ts");
            var routes = [
                // {
                //   path: '',
                //   component: KhamDoanTiepNhanListComponent,
                //   data: {
                //     title: "Tiếp nhận",
                //     DocumentType: DocumentType.User, // cần cập nhật lại
                //     SecurityOperation: SecurityOperation.View
                //   },
                //   canActivate: [PermisssionGuard]
                // },
                {
                    path: '',
                    component: _kham_doan_tiep_nhan_detail_popup_kham_doan_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanTiepNhanDetailPopupComponent"],
                    data: {
                        title: 'Tiếp nhận khám sức khỏe đoàn',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'nhan-vien/:id',
                    component: _kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_8__["KhamDoanTiepNhanNhanVienDetailPopupComponent"],
                    data: {
                        title: 'Chi tiết khám sức khỏe của nhân viên',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanTiepNhan,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
                {
                    path: 'kham-benh',
                    component: _kham_benh_kham_benh_kham_benh_component__WEBPACK_IMPORTED_MODULE_6__["KhamBenhComponent"],
                    data: {
                        title: "Khám bệnh",
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanKhamBenh,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }
            ];
            var KhamDoanTiepNhanRoutingModule = /** @class */ (function () {
                function KhamDoanTiepNhanRoutingModule() {
                }
                return KhamDoanTiepNhanRoutingModule;
            }());
            KhamDoanTiepNhanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], KhamDoanTiepNhanRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.module.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan.module.ts ***!
          \******************************************************************************************/
        /*! exports provided: KhamDoanTiepNhanModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanTiepNhanModule", function () { return KhamDoanTiepNhanModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _kham_doan_tiep_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-routing.module.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_list_kham_doan_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-list/kham-doan-tiep-nhan-list.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_detail_popup_kham_doan_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-detail-popup/kham-doan-tiep-nhan-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-nhan-vien-detail-popup/kham-doan-tiep-nhan-nhan-vien-detail-popup.component.ts");
            /* harmony import */ var _kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-in-ho-so-popup/kham-doan-tiep-nhan-in-ho-so-popup.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/kham-doan-tiep-nhan-file-popup/kham-doan-tiep-nhan-file-popup.component.ts");
            /* harmony import */ var _ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/ket-qua-kham-suc-khoe-popup/ket-qua-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts");
            /* harmony import */ var _bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/bang-huong-dan-kham-suc-khoe-popup/bang-huong-dan-kham-suc-khoe-popup.component.ts");
            /* harmony import */ var _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../kham-benh/kham-benh.module */ "./src/app/modules/main/kham-benh/kham-benh.module.ts");
            /* harmony import */ var _in_dich_vu_chi_dinh_ngoai_goi_in_dich_vu_chi_dinh_ngoai_goi_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/in-dich-vu-chi-dinh-ngoai-goi/in-dich-vu-chi-dinh-ngoai-goi.component.ts");
            var KhamDoanTiepNhanModule = /** @class */ (function () {
                function KhamDoanTiepNhanModule() {
                }
                return KhamDoanTiepNhanModule;
            }());
            KhamDoanTiepNhanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _kham_doan_tiep_nhan_list_kham_doan_tiep_nhan_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanTiepNhanListComponent"],
                        _kham_doan_tiep_nhan_detail_popup_kham_doan_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanTiepNhanDetailPopupComponent"],
                        _kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanTiepNhanNhanVienDetailPopupComponent"],
                        _kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanTiepNhanInHoSoPopupComponent"],
                        _kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_20__["KhamDoanTiepNhanFilePopupComponent"],
                        _ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_21__["KetQuaKhamSucKhoePopupComponent"],
                        _phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_22__["PhieuDangKyKhamSucKhoePopupComponent"],
                        _so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_23__["SoKhamSucKhoeDinhKyPopupComponent"],
                        _bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_24__["BangHuongDanKhamSucKhoePopupComponent"],
                        _in_dich_vu_chi_dinh_ngoai_goi_in_dich_vu_chi_dinh_ngoai_goi_component__WEBPACK_IMPORTED_MODULE_26__["InDichVuChiDinhNgoaiGoiComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _kham_doan_tiep_nhan_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanTiepNhanRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_10__["PageLayoutModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_15__["IconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_18__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_16__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_17__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                        _kham_benh_kham_benh_module__WEBPACK_IMPORTED_MODULE_25__["KhamBenhModule"]
                    ],
                    entryComponents: [
                        _kham_doan_tiep_nhan_detail_popup_kham_doan_tiep_nhan_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanTiepNhanDetailPopupComponent"],
                        _kham_doan_tiep_nhan_nhan_vien_detail_popup_kham_doan_tiep_nhan_nhan_vien_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanTiepNhanNhanVienDetailPopupComponent"],
                        _kham_doan_tiep_nhan_in_ho_so_popup_kham_doan_tiep_nhan_in_ho_so_popup_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanTiepNhanInHoSoPopupComponent"],
                        _kham_doan_tiep_nhan_file_popup_kham_doan_tiep_nhan_file_popup_component__WEBPACK_IMPORTED_MODULE_20__["KhamDoanTiepNhanFilePopupComponent"],
                        _so_kham_suc_khoe_dinh_ky_popup_so_kham_suc_khoe_dinh_ky_popup_component__WEBPACK_IMPORTED_MODULE_23__["SoKhamSucKhoeDinhKyPopupComponent"],
                        _ket_qua_kham_suc_khoe_popup_ket_qua_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_21__["KetQuaKhamSucKhoePopupComponent"],
                        _phieu_dang_ky_kham_suc_khoe_popup_phieu_dang_ky_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_22__["PhieuDangKyKhamSucKhoePopupComponent"],
                        _bang_huong_dan_kham_suc_khoe_popup_bang_huong_dan_kham_suc_khoe_popup_component__WEBPACK_IMPORTED_MODULE_24__["BangHuongDanKhamSucKhoePopupComponent"],
                        _in_dich_vu_chi_dinh_ngoai_goi_in_dich_vu_chi_dinh_ngoai_goi_component__WEBPACK_IMPORTED_MODULE_26__["InDichVuChiDinhNgoaiGoiComponent"]
                    ]
                })
            ], KhamDoanTiepNhanModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.scss": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.scss ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL3BoaWV1LWRhbmcta3kta2hhbS1zdWMta2hvZS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLXRpZXAtbmhhblxccGhpZXUtZGFuZy1reS1raGFtLXN1Yy1raG9lLXBvcHVwXFxwaGlldS1kYW5nLWt5LWtoYW0tc3VjLWtob2UtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9waGlldS1kYW5nLWt5LWtoYW0tc3VjLWtob2UtcG9wdXAvcGhpZXUtZGFuZy1reS1raGFtLXN1Yy1raG9lLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9waGlldS1kYW5nLWt5LWtoYW0tc3VjLWtob2UtcG9wdXAvcGhpZXUtZGFuZy1reS1raGFtLXN1Yy1raG9lLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.ts": 
        /*!*********************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.ts ***!
          \*********************************************************************************************************************************************/
        /*! exports provided: PhieuDangKyKhamSucKhoePopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuDangKyKhamSucKhoePopupComponent", function () { return PhieuDangKyKhamSucKhoePopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var PhieuDangKyKhamSucKhoePopupComponent = /** @class */ (function () {
                function PhieuDangKyKhamSucKhoePopupComponent(data, dialog, apiService, notificationService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.title = "PHIẾU ĐĂNG KÝ KHÁM SỨC KHỎE";
                }
                PhieuDangKyKhamSucKhoePopupComponent.prototype.ngOnInit = function () {
                    this.getHtml();
                };
                PhieuDangKyKhamSucKhoePopupComponent.prototype.getHtml = function () {
                    var _this = this;
                    this.showPopupLoadingData();
                    var obj = {
                        "Id": this.data,
                        "HostingName": window.location.protocol + "//" + window.location.host
                    };
                    this.apiService.postExportPdf("KhamDoan/XuLyInPhieuDangKyKhamSucKhoeAsync", obj).subscribe(function (res) {
                        var newBlob = new Blob([res], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.file = res;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                // getFilePDFFromHtml(html) {
                //   var obj = {
                //     "Html": html,
                //     "TenFile": "PhieuDangKyKhamSucKhoe"
                //   }
                //   this.apiService.postExportPdf<any>('KhamDoan/GetFilePDFFromHtml', obj).subscribe(
                //     file => {
                //       let newBlob = new Blob([file], { type: "application/pdf" });
                //       let datalocalURL = window.URL.createObjectURL(newBlob);
                //       this.fileUrl = datalocalURL;
                //       this.file = file;
                //       this.closePopupLoadingData();
                //     },
                //     (err: ApiError) => {
                //       if (err.Message !== 'Validation Failed') {
                //         this.notificationService.showError(err.Message);
                //       }
                //       this.closePopupLoadingData();
                //     });
                // }
                PhieuDangKyKhamSucKhoePopupComponent.prototype.downloadFile = function () {
                    var dateTimeNow = new Date();
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'PhieuDangKyKhamSucKhoe' + dateTimeNow.getFullYear() + '.pdf');
                };
                PhieuDangKyKhamSucKhoePopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                PhieuDangKyKhamSucKhoePopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return PhieuDangKyKhamSucKhoePopupComponent;
            }());
            PhieuDangKyKhamSucKhoePopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            PhieuDangKyKhamSucKhoePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-phieu-dang-ky-kham-suc-khoe-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-dang-ky-kham-suc-khoe-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-dang-ky-kham-suc-khoe-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/phieu-dang-ky-kham-suc-khoe-popup/phieu-dang-ky-kham-suc-khoe-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], PhieuDangKyKhamSucKhoePopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.scss": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.scss ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 550px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tdGllcC1uaGFuL3NvLWtoYW0tc3VjLWtob2UtZGluaC1reS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGtoYW0tZG9hblxca2hhbS1kb2FuLXRpZXAtbmhhblxcc28ta2hhbS1zdWMta2hvZS1kaW5oLWt5LXBvcHVwXFxzby1raGFtLXN1Yy1raG9lLWRpbmgta3ktcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9zby1raGFtLXN1Yy1raG9lLWRpbmgta3ktcG9wdXAvc28ta2hhbS1zdWMta2hvZS1kaW5oLWt5LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLXRpZXAtbmhhbi9zby1raGFtLXN1Yy1raG9lLWRpbmgta3ktcG9wdXAvc28ta2hhbS1zdWMta2hvZS1kaW5oLWt5LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59IiwiLmNvbnRhaW5lci1pZnJhbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWJlY2VkO1xufVxuXG4uY29udGFpbmVyLWlmcmFtZSBpZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIC5wYWdlYnJlYWsge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.ts ***!
          \***************************************************************************************************************************************/
        /*! exports provided: SoKhamSucKhoeDinhKyPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoKhamSucKhoeDinhKyPopupComponent", function () { return SoKhamSucKhoeDinhKyPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            var SoKhamSucKhoeDinhKyPopupComponent = /** @class */ (function () {
                function SoKhamSucKhoeDinhKyPopupComponent(data, dialog, apiService, notificationService) {
                    this.data = data;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
                    this.title = "SỔ KHÁM SỨC KHỎE ĐỊNH KỲ";
                }
                SoKhamSucKhoeDinhKyPopupComponent.prototype.ngOnInit = function () {
                    this.getHtml();
                };
                SoKhamSucKhoeDinhKyPopupComponent.prototype.getHtml = function () {
                    var _this = this;
                    this.showPopupLoadingData();
                    var obj = {
                        "Id": this.data,
                        "HostingName": window.location.protocol + "//" + window.location.host
                    };
                    this.apiService.postExportPdf("KhamDoan/XuLyInKhamSucKhoeAsync", obj).subscribe(function (res) {
                        // this.getFilePDFFromHtml(res);
                        var newBlob = new Blob([res], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.file = res;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message != "Validation Failed") {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                SoKhamSucKhoeDinhKyPopupComponent.prototype.getFilePDFFromHtml = function (html) {
                    var _this = this;
                    var obj = {
                        "Html": html,
                        "TenFile": "SoKhamSucKhoeDinhKy",
                        "NoFooter": true
                    };
                    this.apiService.postExportPdf('KhamDoan/GetFilePDFFromHtml', obj).subscribe(function (file) {
                        var newBlob = new Blob([file], { type: "application/pdf" });
                        var datalocalURL = window.URL.createObjectURL(newBlob);
                        _this.fileUrl = datalocalURL;
                        _this.file = file;
                        _this.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== 'Validation Failed') {
                            _this.notificationService.showError(err.Message);
                        }
                        _this.closePopupLoadingData();
                    });
                };
                SoKhamSucKhoeDinhKyPopupComponent.prototype.downloadFile = function () {
                    var dateTimeNow = new Date();
                    src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].downLoadFile(this.file, 'application/pdf', 'SoKhamSucKhoeDinhKy' + dateTimeNow.getFullYear() + '.pdf');
                };
                SoKhamSucKhoeDinhKyPopupComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                SoKhamSucKhoeDinhKyPopupComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                return SoKhamSucKhoeDinhKyPopupComponent;
            }());
            SoKhamSucKhoeDinhKyPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
            ]; };
            SoKhamSucKhoeDinhKyPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-so-kham-suc-khoe-dinh-ky-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./so-kham-suc-khoe-dinh-ky-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./so-kham-suc-khoe-dinh-ky-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-tiep-nhan/so-kham-suc-khoe-dinh-ky-popup/so-kham-suc-khoe-dinh-ky-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], SoKhamSucKhoeDinhKyPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/shared/enum/common-type.enums.ts": 
        /*!**************************************************!*\
          !*** ./src/app/shared/enum/common-type.enums.ts ***!
          \**************************************************/
        /*! exports provided: GioiTinh, CapHanhChinh, VungDiaLy, LoaiTapTin */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiTinh", function () { return GioiTinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapHanhChinh", function () { return CapHanhChinh; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VungDiaLy", function () { return VungDiaLy; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiTapTin", function () { return LoaiTapTin; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var GioiTinh;
            (function (GioiTinh) {
                GioiTinh[GioiTinh["Nam"] = 1] = "Nam";
                GioiTinh[GioiTinh["Nu"] = 2] = "Nu";
            })(GioiTinh || (GioiTinh = {}));
            var CapHanhChinh;
            (function (CapHanhChinh) {
                CapHanhChinh[CapHanhChinh["TinhThanhPho"] = 1] = "TinhThanhPho";
                CapHanhChinh[CapHanhChinh["QuanHuyen"] = 2] = "QuanHuyen";
                CapHanhChinh[CapHanhChinh["PhuongXa"] = 3] = "PhuongXa";
            })(CapHanhChinh || (CapHanhChinh = {}));
            var VungDiaLy;
            (function (VungDiaLy) {
                VungDiaLy[VungDiaLy["TayBacBo"] = 1] = "TayBacBo";
                VungDiaLy[VungDiaLy["DongBacBo"] = 2] = "DongBacBo";
                VungDiaLy[VungDiaLy["DongBangSongHong"] = 3] = "DongBangSongHong";
                VungDiaLy[VungDiaLy["BacTrungBo"] = 4] = "BacTrungBo";
                VungDiaLy[VungDiaLy["NamTrungBo"] = 5] = "NamTrungBo";
                VungDiaLy[VungDiaLy["TayNguyen"] = 6] = "TayNguyen";
                VungDiaLy[VungDiaLy["DongNamBo"] = 7] = "DongNamBo";
                VungDiaLy[VungDiaLy["DongBangSongCuuLong"] = 8] = "DongBangSongCuuLong";
            })(VungDiaLy || (VungDiaLy = {}));
            var LoaiTapTin;
            (function (LoaiTapTin) {
                LoaiTapTin[LoaiTapTin["Image"] = 1] = "Image";
                LoaiTapTin[LoaiTapTin["Pdf"] = 2] = "Pdf";
                LoaiTapTin[LoaiTapTin["Khac"] = 10] = "Khac";
            })(LoaiTapTin || (LoaiTapTin = {}));
            /***/ 
        })
    }]);
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~d484563b-es2015.js.map
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~d484563b-es5.js.map
//# sourceMappingURL=default~kham-benh-kham-doan-tat-ca-phong-kham-doan-tat-ca-phong-module~kham-doan-kham-doan-ket-luan-~d484563b-es5.js.map