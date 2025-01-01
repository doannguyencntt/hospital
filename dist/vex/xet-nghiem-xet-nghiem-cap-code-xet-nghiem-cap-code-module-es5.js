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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module"], {
        /***/ "./node_modules/@iconify/icons-fa-solid/file-import.js": 
        /*!*************************************************************!*\
          !*** ./node_modules/@iconify/icons-fa-solid/file-import.js ***!
          \*************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z\" fill=\"currentColor\"/>",
                "width": 512,
                "height": 512
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.html": 
        /*!********************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.html ***!
          \********************************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{data.Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayoutAlign=\"start center\" fxLayout=\"row\" class=\"py-1\">\n        <app-grid fxFlex=\"100%\" class=\"k-grid-border\" [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\"\n            [showStt]=\"true\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" [autoHeight]=\"true\" [gridDataSource]=\"dataNguoiBenh\" style=\"width: 1px;\"\n            [pageable]=\"false\">\n        </app-grid>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <button (click)=\"close()\" mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.html": 
        /*!********************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.html ***!
          \********************************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">DS Người Bệnh Chưa Cấp Barcode</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 80px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-upload id=\"upload\" #fileChuKy fxFlex=\"100%\" fxFlex.sm=\"100%\" [allowedExtensions]=\"allowedExtensions\"\n            [invalidFileExtensionMess]=\"invalidFileExtensionMess\" label=\"Chọn đường dẫn\" [(model)]=\"file\"\n            [template]=\"template\" (uploadFileDone)=\"uploadFileDone($event)\" [required]=\"true\"\n            [validationerror]=\"'file' | validationerror:validationErrors\">\n        </app-upload>\n\n        <ng-template #template let-files>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td>\n                        <a *ngIf=\"files[0].error\" title=\"{{'Tải file bị lỗi: '+files[0].error}}\"\n                            (click)=\"fileChuKy.viewFile(files[0])\" class=\"custom-name red\">{{files[0].name}}</a>\n                        <a *ngIf=\"!files[0].error\" title=\"{{files[0].name}}\" (click)=\"fileChuKy.viewFile(files[0])\"\n                            class=\"green\" class=\"custom-name green\">{{files[0].name}}</a>\n                    </td>\n                    <td style=\"width:25px\">\n                        <a type=\"button\" (click)=\"fileChuKy.remove(files[0].uid)\" mat-icon-button>\n                            <mat-icon [icIcon]=\"icClear\"></mat-icon>\n                        </a>\n                    </td>\n                </tr>\n            </table>\n        </ng-template>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\"\n        [mat-dialog-close]=\"null\">Hủy</button>\n    <button (click)=\"xuLyFile()\" mat-raised-button mat-button color=\"primary\">Ok</button>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'DS Cấp Code',Path:'',Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" size=\"30%\" style=\"max-height: 800px;\" class=\"sticky-panelbar\">\n                                <fieldset fxFlex=\"100%\">\n                                    <legend>Danh sách chỉ định</legend>\n                                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n                                        <div fxFlex=\"100%\" class=\"sticky mb-2\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <mat-radio-button fxFlex=\"40%\" fxFlex.sm=\"40%\" name=\"tinhTrang\" class=\"mb-3\"\n                                                [checked]=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\" value=\"true\" (change)=\"changeValueTinhTrang('chuaCapCode')\"> Chưa cấp code </mat-radio-button>\n                                            <mat-radio-button fxFlex=\"40%\" fxFlex.sm=\"40%\" name=\"tinhTrang\"\n                                                [checked]=\"timKiemNangCaoObj.TrangThai.DaCapCode\" value=\"true\" (change)=\"changeValueTinhTrang('daCapCode')\"> Đã cấp code </mat-radio-button>\n                                    \n                                            <button *ngIf=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\" class=\"ml-auto\" fxFlex=\"none\" color=\"primary\" mat-icon-button\n                                                kendoTooltip title=\"Xuất Excel\" type=\"button\" (click)=\"xuLyXuatExcelChuaCapCode()\">\n                                                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                                            </button>\n                                            <button *ngIf=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\" class=\"ml-auto\" fxFlex=\"none\" color=\"primary\" mat-icon-button\n                                                kendoTooltip title=\"Nhập Excel\" type=\"button\" (click)=\"xuLyNhapExcelChuaCapCode()\">\n                                                <mat-icon [icIcon]=\"icFileImport\"></mat-icon>\n                                            </button>\n                                            <button *ngIf=\"timKiemNangCaoObj.TrangThai.DaCapCode\" class=\"ml-auto\" fxFlex=\"none\" color=\"primary\" \n                                                mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\"\n                                                (click)=\"xuLyXuatExcel()\">\n                                                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                                            </button>\n                                            \n                                            <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"49%\" fxFlex.sm=\"49%\" class=\"on-header mb-2\"\n                                                [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                                            </app-daterangepicker>\n\n                                            <app-combobox fxFlex=\"49%\" fxFlex.sm=\"49%\" label=\"Hợp đồng\" id=\"HopDongKhamSucKhoeId\"\n                                                class=\"on-header ml-1\" url=\"XetNghiem/GetListHopDongKhamSucKhoeHieuLuc\"\n                                                [(model)]=\"timKiemNangCaoObj.HopDongKhamSucKhoeId\" (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\"\n                                                [reloadForGrid]=\"true\">\n                                                <!-- [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" -->\n                                                <!-- <ng-template #khoaTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Ten</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #khoaTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template> -->\n                                            </app-combobox>\n                                            <!-- fxFlex=\"95%\" -->\n                                            <div class=\"h-15 mt-2\" [fxFlex]=\"!timKiemNangCaoObj.TrangThai.DaCapCode ? '95%' : '47%'\">\n                                                <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                                    fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                                        name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                                        (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                                                    <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n                                                        kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                                    </button>\n                                                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n                                                    </app-barcode>\n                                                </div>\n                                                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                                </button>\n                                            </div>\n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.DaCapCode\">\n                                                <app-textboxnumeric style=\"margin-left: 15px;\" id=\"SoLuong\" fxFlex=\"20%\" [(model)]=\"timKiemNangCaoObj.SoLuong\" min=\"1\"\n                                                    max=\"99\" label=\"SL\">\n                                                </app-textboxnumeric>\n                                                <button type=\"button\" style=\"height: 45px; width: 130px;\" color=\"primary\" mat-raised-button mat-button class=\"ml-1 mt-2\"\n                                                    (click)=\"inNhieuBarcode()\">In nhiều barcode</button>\n                                            </ng-container>\n                                         \n                                        </div>\n                                    \n                                        <app-grid #gridChuaCapCode [hidden]=\"!timKiemNangCaoObj.TrangThai.ChuaCapCode\" fxFlex=\"100%\"[gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [autoHeight]=\"true\"\n                                            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"10\"\n                                            [allowSortDefault]=\"false\" [searchString]=\"timKiemNangCaoObj.SearchString\" [showStt]=\"true\" \n                                            (extEnterChangePage)=\"getThongTinYeuCauTiepNhan($event.Id)\" (extDoubleClick)=\"getThongTinYeuCauTiepNhan($event.Id)\"\n                                            [urlGetData]=\"urlGetDataChuaCapCode\" [urlGetTotalPage]=\"urlGetTotalChuaCapCode\">\n                                        </app-grid>\n                                        <app-grid #gridDaCapCode [hidden]=\"!timKiemNangCaoObj.TrangThai.DaCapCode\" fxFlex=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [autoHeight]=\"true\"\n                                            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"10\"\n                                            [allowSortDefault]=\"false\" [searchString]=\"timKiemNangCaoObj.SearchString\" [showStt]=\"true\"\n                                            (extEnterChangePage)=\"getThongTinYeuCauTiepNhan($event.Id, $event.PhienXetNghiemId)\" (extDoubleClick)=\"getThongTinYeuCauTiepNhan($event.Id, $event.PhienXetNghiemId)\"\n                                            [urlGetData]=\"urlGetDataDaCapCode\" [urlGetTotalPage]=\"urlGetTotalDaCapCode\">\n                                        </app-grid>\n                                    </div>\n\n                                    <!-- <ng-template #headerTemplate>\n                                        <div class=\"px-1 sticky\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0px grid\" fxLayoutGap.lt-sm=\"0\">\n                                            <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"on-header mb-2\"\n                                                [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                                            </app-daterangepicker>\n                                            \n                                            <mat-radio-button fxFlex=\"40%\" fxFlex.sm=\"40%\" name=\"tinhTrang\" [checked]=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\"\n                                                value=\"true\"> Chưa cấp code </mat-radio-button>\n                                            <mat-radio-button fxFlex=\"40%\" fxFlex.sm=\"40%\" name=\"tinhTrang\" [checked]=\"timKiemNangCaoObj.TrangThai.DaCapCode\"\n                                                value=\"true\"> Đã cấp code </mat-radio-button>\n                                            \n                                            <button class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                                                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                                            </button>\n                                            \n                            \n                                            <div class=\"h-15 mt-2\" fxFlex=\"55%\">\n                                                <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                                    fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                                        name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                                        (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                                                    <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n                                                        kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                                    </button>\n                                                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\"></app-barcode>\n                                                </div>\n                                                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                                </button>\n\n                                                \n                                            </div>\n                                            <app-combobox fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Hợp đồng\" id=\"HopDongKhamSucKhoeId\" class=\"on-header mt-2 ml-auto\"\n                                                    url=\"KhamBenh/GetListKhoaBenhVien\" [(model)]=\"timKiemNangCaoObj.HopDongKhamSucKhoeId\"\n                                                    (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\" [reloadForGrid]=\"true\" [templateHeader]=\"khoaTemplateHeader\"\n                                                    [template]=\"khoaTemplate\" [broadcastAfterLoaded]=\"true\">\n                                                    <ng-template #khoaTemplateHeader let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <th width=\"20%\">Mã</th>\n                                                                <th>Ten</th>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                    <ng-template #khoaTemplate let-dataItem>\n                                                        <table width=\"100%\" class=\"table-combobox\">\n                                                            <tr>\n                                                                <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                                <td>{{dataItem.Ten}}</td>\n                                                            </tr>\n                                                        </table>\n                                                    </ng-template>\n                                                </app-combobox>\n                                        </div>\n                                    </ng-template> -->\n                                </fieldset>\n                            </kendo-splitter-pane>\n\n                            <kendo-splitter-pane style=\"overflow:initial;\">\n                                <fieldset fxFlex=\"100%\">\n                                    <legend>Thông tin người bệnh</legend>\n                                    <ng-container *ngIf=\"dataYeuCauTiepNhan.YeuCauTiepNhanId != null\">\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                            <!-- style=\"background: #e1f5fe;\" -->\n                                            <fieldset fxFlex=\"100%\" class=\"mb-2\" class=\"{{(dataYeuCauTiepNhan != null && dataYeuCauTiepNhan.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                                                <div fxFlex=\"100%\">\n                                                    <ul class=\"inline\">\n                                                        <li>Mã TN:\n                                                            <strong>{{dataYeuCauTiepNhan.MaTiepNhan}}</strong>\n                                                        </li>\n                                                        <li>Mã NB:\n                                                            <strong>{{dataYeuCauTiepNhan.MaBenhNhan}}</strong>\n                                                        </li>\n                                                        <li>Họ tên:\n                                                            <strong>{{dataYeuCauTiepNhan.HoTen}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            Giới tính:\n                                                            <strong>{{dataYeuCauTiepNhan.TenGioiTinh}}</strong>\n                                                        </li>\n                                                        <!-- <li>Tuổi:\n                                                            <strong *ngIf=\"!isDuoi6Tuoi\">{{dataYeuCauTiepNhan.Tuoi}}</strong>\n                                                            <strong *ngIf=\"isDuoi6Tuoi\">{{Duoi6TuoiDisplay}}</strong>\n                                                        </li> -->\n                                                        <li>\n                                                            Năm sinh:\n                                                            <strong>{{dataYeuCauTiepNhan.NamSinhDisplay}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            SĐT:\n                                                            <strong>{{dataYeuCauTiepNhan.SoDienThoai}}</strong>\n                                                        </li>\n                                                        <!-- <li>Dân tộc:\n                                                            <strong>{{dataYeuCauTiepNhan.DanToc}}</strong>\n                                                        </li> -->\n                                                        <li>\n                                                            Địa chỉ:\n                                                            <strong>{{dataYeuCauTiepNhan.DiaChi}}</strong>\n                                                        </li>\n                                                        <!-- <li>\n                                                            Nghề nghiệp:\n                                                            <strong>{{dataYeuCauTiepNhan.NgheNghiep}}</strong>\n                                                        </li> -->\n                                                        <!-- <li>\n                                                            Tuyến khám: <strong style=\"color: green;\">{{dataYeuCauTiepNhan.Tuyen}}</strong>\n                                                        </li> -->\n                                                        <li>\n                                                            Số thẻ BHYT: <strong>{{dataYeuCauTiepNhan.SoTheBHYT}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            Đối tượng: <strong style=\"color: blue;\">{{dataYeuCauTiepNhan.DoiTuong}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            Trả KQ cho người bệnh: <strong>{{dataYeuCauTiepNhan.TraKetQuaChoBenhNhan}}</strong>\n                                                        </li>\n                                                        <li *ngIf=\"dataYeuCauTiepNhan.TenCongTy != null\">\n                                                            Tên công ty: <strong>{{dataYeuCauTiepNhan.TenCongTy}}</strong>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </fieldset>\n                                        \n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\">\n                                                <div fxFlex=\"30%\" fxFlex.sm=\"30%\">\n                                                    <app-radio fxFlex=\"100%\" fxFlex.sm=\"100%\" name=\"hinhThucBarcode\" class=\"item-no-padding\"\n                                                        [(model)]=\"dungBarcodeMoi\"\n                                                        [items]=\"[{Value:true,Text:'Tạo mới Barcode'},{Value:false,Text:'Dùng lại Barcode'}]\"\n                                                        (modelChange)=\"changeHinhThucBarcode($event)\">\n                                                    </app-radio>\n                                                </div>\n                                            \n                                                <ng-container *ngIf=\"dungBarcodeMoi\">\n                                                    <app-textbox *ngIf=\"!dataYeuCauTiepNhan.IsAutoBarcode\" id=\"barcode\" fxFlex=\"15%\" fxFlex.sm=\"15%\" label=\"Barcode\"\n                                                        maxlength=\"4\" [(model)]=\"barcodeKeyId\" [required]=\"true\" [onlynumber]=\"true\"\n                                                        [validationerror]=\"'BarcodeNumber' | validationerror:validationErrors\">\n                                                    </app-textbox>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"!dungBarcodeMoi\">\n                                                    <div fxFlex=\"15%\" fxFlex.sm=\"15%\">\n                                                        <app-combobox fxFlex=\"100%\" fxFlex.sm=\"100%\" class=\"pb-0\" [model]=\"barcodeKeyId\" [required]=\"true\"\n                                                            [modelText]=\"barcodeDisplay\" [queryInfo]=\"queryInfoBarcode\" [bind]=\"true\" [reloadForGrid]=\"true\"\n                                                            label=\"Chọn Barcode\" url=\"Xetnghiem/GetListBarcodeTheoYeuCauTiepNhan\"\n                                                            (selectionChange)=\"changeCapMoiBarcodeVer2($event)\" [disabled]=\"timKiemNangCaoObj.TrangThai.DaCapCode\"\n                                                            [validationerror]=\"'BarcodeNumber' | validationerror:validationErrors\">\n                                                        </app-combobox>\n                                                    </div>\n                                                </ng-container>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.DaCapCode\">\n                                                <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"pb-0\" [model]=\"dataYeuCauTiepNhan.BarcodeNumber\" [required]=\"true\"\n                                                    [modelText]=\"barcodeDisplay\" [queryInfo]=\"queryInfoBarcode\" [bind]=\"true\" [reloadForGrid]=\"true\"\n                                                    label=\"Chọn Barcode\" url=\"Xetnghiem/GetListBarcodeTheoYeuCauTiepNhan\" [disabled]=\"true\">\n                                                </app-combobox>\n                                            </ng-container>\n                                            <app-textboxnumeric fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"SL\" min=\"1\" max=\"99\" [(model)]=\"barcodeSoLuongIn\"\n                                                [required]=\"true\" [validationerror]=\"'SoLuong' | validationerror:validationErrors\">\n                                            </app-textboxnumeric>\n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\">\n                                                <app-textboxnumeric *ngIf=\"dungBarcodeMoi\" fxFlex=\"10%\" fxFlex.sm=\"10%\" label=\"SL Thêm\" min=\"1\" max=\"99\"\n                                                    [(model)]=\"dataYeuCauTiepNhan.SoLuongThem\">\n                                                </app-textboxnumeric>\n                                                <div fxFlex=\"30%\" fxFlex.sm=\"100%\"> \n                                                    <table style=\"width: 100%;\" >\n                                                        <tr>\n                                                             <td> \n                                                                <app-combobox id=\"nguoi-lay-mau\" url=\"YeuCauLinhDuocPham/GetListNhanVien\" label=\"Người lấy mẫu\"\n                                                                    [(model)]=\"dataYeuCauTiepNhan.NhanVienLayMauId\">\n                                                                </app-combobox>\n                                                             </td>\n                                                        </tr>\n                                                        <tr>\n                                                            <td>  \n                                                                <app-datetimepicker [(model)]=\"dataYeuCauTiepNhan.ThoiGianLayMau\" label=\"Thời gian lấy mẫu\" id=\"thoi-gian-lay-mau\">\n                                                                </app-datetimepicker>\n                                                            </td>\n                                                       </tr>\n                                                    </table>\n                                                </div>\n                                               \n                                              \n                                                <button type=\"button\" class=\"mt-3 pt-2\" style=\"height: 2.7em;\" color=\"primary\" mat-raised-button mat-button\n                                                    (click)=\"CapVaInBarcode()\">\n                                                    <i class=\"ft-edit mr-2\"></i> Cấp và In Barcode</button>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.DaCapCode\">\n                                                <button type=\"button\" class=\"mt-3 pt-2\" style=\"height: 2.7em;\" color=\"primary\" mat-raised-button mat-button\n                                                    (click)=\"InBarcodeDaCapCode()\">\n                                                    <i class=\"ft-edit mr-2\"></i> In Barcode</button>\n                                            \n                                                <button type=\"button\" class=\"ml-2 mt-3 pt-2\"\n                                                    style=\"height: 2.7em; color: white; background-color: red; padding-left: 10px\" mat-raised-button\n                                                    (click)=\"xacNhanHuyMauXetNghiem()\" [disabled]=\"arrDichVuChon.length == 0\">\n                                                    <i class=\"ft-edit mr-2\"></i> Hủy Code\n                                                </button>\n                                            </ng-container>\n\n                                            <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                                            <app-grid *ngIf=\"timKiemNangCaoObj.TrangThai.ChuaCapCode\" #gridDVChuaCapCode [gridColumns]=\"gridDichVuChuaCapColumns\"\n                                                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                [lazyLoadPage]=\"false\" [allowSortDefault]=\"false\" [autoHeight]=\"true\" [pageable]=\"false\" [showStt]=\"true\"\n                                                searchString=\"{{dataYeuCauTiepNhan.YeuCauTiepNhanId}}\" [autoRefreshDataSource]=\"true\"\n                                                [additionalSearchString]=\"strAdditionalSearchString\" [groups]=\"groups\" [checkboxAble]=\"false\"\n                                                (extOnDataBound)=\"onDataBoundGridChuaCapCode($event)\"\n                                                masterName=\"gridDVChuaCapCode\" urlGetData=\"XetNghiem/GetDataForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau\"\n                                                urlGetTotalPage=\"XetNghiem/GetTotalPageForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau\">\n                                            </app-grid>\n\n                                            <app-grid *ngIf=\"timKiemNangCaoObj.TrangThai.DaCapCode\" #gridDVDaCapCode [gridColumns]=\"gridDichVuChuaCapColumns\"\n                                                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                [lazyLoadPage]=\"false\" [allowSortDefault]=\"false\" [autoHeight]=\"true\" [pageable]=\"false\" [showStt]=\"true\"\n                                                searchString=\"{{dataYeuCauTiepNhan.YeuCauTiepNhanId}}\" [autoRefreshDataSource]=\"true\"\n                                                [additionalSearchString]=\"strAdditionalSearchString\" [groups]=\"groups\" [checkboxAble]=\"false\"\n                                                (extOnDataBound)=\"onDataBoundGridChuaCapCode($event)\"\n                                                masterName=\"gridDVDaCapCode\" urlGetData=\"XetNghiem/GetDataForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau\"\n                                                urlGetTotalPage=\"XetNghiem/GetTotalPageForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau\">\n                                            </app-grid>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"sticky-button-action py-3 text-right\">\n                                            <button type=\"button\" mat-button class=\"mr-2\" (click)=\"huyChonBenhNhan()\">Hủy</button>\n                                        </div>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"dataYeuCauTiepNhan.YeuCauTiepNhanId == null\">\n                                        Chưa chọn người bệnh\n                                    </ng-container>\n                                </fieldset>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <!-- <strong>{{value}}</strong> -->\n    <input *ngIf=\"kiemTraAnHienGroupDichVu(value)\" type=\"checkbox\" id=\"ckbGroup-{{value}}\" (change)=\"changeCheckNhomDichVu($event, value)\" value=\"true\" class=\"mr-2\"> {{value}}\n</ng-template>\n<ng-template #checkBoxHeaderTemplate let-dataItemParent=\"dataItemParent\">\n    <input type=\"checkbox\" id=\"ckbHeader\" [(ngModel)]=\"isCheckedAll\" (ngModelChange)=\"chonTatCaDichVuTrongGoi($event)\">\n</ng-template>\n<ng-template #checkBoxTemplate let-dataItem>\n    <input *ngIf=\"dataItem.IsActive\" id=\"{{dataItem.Id}}\" type=\"checkbox\" [attr.name]=\"'ckbItem-' + dataItem.Id\"\n        [(ngModel)]=\"dataItem.IsChecked\" (ngModelChange)=\"chonDichVu($event, dataItem)\">\n</ng-template>\n<ng-template #thoiGianChiDinhTemplate let-dataItem>\n    <div class=\"reverse-ellipsis r\">{{dataItem.ThoiGianChiDinhDisplay}}</div>\n</ng-template>\n<ng-template #tenLoaiMauTemplate let-dataItem>\n    <div class=\"reverse-ellipsis r\">{{dataItem.TenLoaiMau}}</div>\n</ng-template>\n<ng-template #trangThaiNhomTemplate let-dataItem>\n    <div style=\"position: relative;\">\n        <span [ngClass]=\"{'': dataItem.TrangThai == 1, \n                'orangeText': dataItem.TrangThai == 2,\n                'blueText': dataItem.TrangThai == 3,\n                'greenText': dataItem.TrangThai == 4 || dataItem.TrangThai == 5}\">\n            {{dataItem.TenTrangThai}}\n        </span>\n    </div>\n</ng-template>\n<ng-template #maTNTemplate let-dataItem>\n    <a (click)=\"getThongTinYeuCauTiepNhan(dataItem.Id, dataItem.PhienXetNghiemId)\">\n        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTiepNhan}}\">{{dataItem.MaTiepNhan}}\n        </p>\n    </a>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.scss": 
        /*!******************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.scss ***!
          \******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0tY2FwLWNvZGUveGV0LW5naGllbS1jYXAtY29kZS1maWxlLWV4Y2VsLWVycm9zLXBvcHVwL3hldC1uZ2hpZW0tY2FwLWNvZGUtZmlsZS1leGNlbC1lcnJvcy1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.ts": 
        /*!****************************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.ts ***!
          \****************************************************************************************************************************************************************/
        /*! exports provided: XetNghiemCapCodeFileExcelErrosPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeFileExcelErrosPopupComponent", function () { return XetNghiemCapCodeFileExcelErrosPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var XetNghiemCapCodeFileExcelErrosPopupComponent = /** @class */ (function () {
                function XetNghiemCapCodeFileExcelErrosPopupComponent(dialogRef, data) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
                    this.gridColumns = [];
                    this.dataNguoiBenh = {
                        data: [],
                        total: 0
                    };
                }
                XetNghiemCapCodeFileExcelErrosPopupComponent.prototype.ngOnInit = function () {
                    this.gridColumns = [
                        { Field: "TenCongTy", Title: "Tên công ty", Width: 70, ShowTooltip: true },
                        { Field: "SoHopDong", Title: "Số hợp đồng", Width: 70, ShowTooltip: true },
                        { Field: "MaBN", Title: "Mã NB", Width: 60, ShowTooltip: true },
                        { Field: "MaTN", Title: "Mã TN", Width: 60, ShowTooltip: true },
                        { Field: "BarcodeNumber", Title: "Mã barcode", Width: 70 },
                        { Field: "HoTen", Title: "Tên người bệnh", Width: 120, ShowTooltip: true },
                        { Field: "NhanVienLayMauIdDisplay", Title: "Nhân viên lấy mẫu", Width: 70 },
                        { Field: "ThoiGianLayMauDisplay", Title: "Thời gian lấy mẫu", Width: 120, ShowTooltip: true },
                        { Field: "GioiTinhDisplay", Title: "GT", Width: 30 },
                        { Field: "NamSinhDisplay", Title: "NS", Width: 30 },
                        { Field: "Error", Title: "Ghi chú", Width: 180, ShowTooltip: true },
                    ];
                    this.dataNguoiBenh.data = this.data.Data.filter(function (z) { return z.IsError; }).slice();
                };
                XetNghiemCapCodeFileExcelErrosPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                return XetNghiemCapCodeFileExcelErrosPopupComponent;
            }());
            XetNghiemCapCodeFileExcelErrosPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
            ]; };
            XetNghiemCapCodeFileExcelErrosPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xet-nghiem-cap-code-file-excel-erros-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xet-nghiem-cap-code-file-excel-erros-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xet-nghiem-cap-code-file-excel-erros-popup.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
            ], XetNghiemCapCodeFileExcelErrosPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.scss": 
        /*!******************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.scss ***!
          \******************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0tY2FwLWNvZGUveGV0LW5naGllbS1jYXAtY29kZS1maWxlLWV4Y2VsLXBvcHVwL3hldC1uZ2hpZW0tY2FwLWNvZGUtZmlsZS1leGNlbC1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.ts": 
        /*!****************************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.ts ***!
          \****************************************************************************************************************************************************/
        /*! exports provided: XetNghiemCapCodeFileExcelPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeFileExcelPopupComponent", function () { return XetNghiemCapCodeFileExcelPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _kham_doan_kham_doan_hop_dong_kham_kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model */ "./src/app/modules/main/kham-doan/kham-doan-hop-dong-kham/kham-doan-hop-dong-kham.model.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-clear */ "./node_modules/@iconify/icons-ic/twotone-clear.js");
            /* harmony import */ var _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _xet_nghiem_cap_code_file_excel_erros_popup_xet_nghiem_cap_code_file_excel_erros_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            var XetNghiemCapCodeFileExcelPopupComponent = /** @class */ (function () {
                function XetNghiemCapCodeFileExcelPopupComponent(dialog, dialogRef, cdRef, data, notificationService, apiService, authService) {
                    this.dialog = dialog;
                    this.dialogRef = dialogRef;
                    this.cdRef = cdRef;
                    this.data = data;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icClear = _iconify_icons_ic_twotone_clear__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].LayMauXetNghiem;
                    this.validationErrors = [];
                    this.allowedExtensions = ['.xlsx', '.xls'];
                    this.invalidFileExtensionMess = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__["SystemMessage"].InvalidFileExtension, [this.allowedExtensions.toString()]);
                    this.file = new _kham_doan_kham_doan_hop_dong_kham_kham_doan_hop_dong_kham_model__WEBPACK_IMPORTED_MODULE_8__["FileExcelNhanVien"]();
                    this.fileExcel = null;
                    this.popupAddingData = null;
                }
                XetNghiemCapCodeFileExcelPopupComponent.prototype.ngOnInit = function () {
                };
                XetNghiemCapCodeFileExcelPopupComponent.prototype.uploadFileDone = function (event) {
                    this.fileExcel = event;
                    this.cdRef.detectChanges();
                };
                XetNghiemCapCodeFileExcelPopupComponent.prototype.close = function () {
                    this.dialogRef.close();
                };
                XetNghiemCapCodeFileExcelPopupComponent.prototype.addingPage = function () {
                    this.popupAddingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"], {
                        disableClose: true,
                        width: "200px",
                        height: "90px",
                        data: { Title: "Đang cấp barcode..." },
                    });
                };
                XetNghiemCapCodeFileExcelPopupComponent.prototype.closepopupAddingData = function () {
                    if (this.popupAddingData != undefined && this.popupAddingData != null) {
                        this.popupAddingData.close();
                    }
                };
                XetNghiemCapCodeFileExcelPopupComponent.prototype.xuLyFile = function () {
                    var _this = this;
                    var self = this;
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                        if (self.fileExcel != undefined && self.fileExcel != null) {
                            var obj = {
                                TenGuid: self.fileExcel.TenGuid,
                                DuongDan: "hapu.tmp"
                            };
                            self.addingPage();
                            self.apiService.post("XetNghiem/ImportNguoiBenhChuaCapBarcodeXetNghiem", obj).subscribe(function (resp) {
                                if (resp) {
                                    self.closepopupAddingData();
                                    if (resp.length > 0 && resp.some(function (z) { return z.IsError; })) {
                                        _this.dialog.open(_xet_nghiem_cap_code_file_excel_erros_popup_xet_nghiem_cap_code_file_excel_erros_popup_component__WEBPACK_IMPORTED_MODULE_11__["XetNghiemCapCodeFileExcelErrosPopupComponent"], {
                                            disableClose: false,
                                            width: '1300px',
                                            data: { Title: 'DS Người Bệnh Chưa Cấp Barcode Bị Lỗi.', Data: resp }
                                        }).afterClosed().subscribe(function () {
                                            if (resp.some(function (z) { return !z.IsError; })) {
                                                self.notificationService.showSuccess("Cấp barcode thành công");
                                            }
                                            else {
                                                self.notificationService.showError("Cấp barcode không thành công");
                                            }
                                            self.close();
                                        });
                                    }
                                    else {
                                        self.notificationService.showSuccess("Cấp barcode thành công");
                                        self.close();
                                    }
                                }
                            }, function (err) {
                                self.notificationService.showError(err.Message);
                                self.closepopupAddingData();
                            });
                        }
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_5__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                return XetNghiemCapCodeFileExcelPopupComponent;
            }());
            XetNghiemCapCodeFileExcelPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"] }
            ]; };
            XetNghiemCapCodeFileExcelPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xet-nghiem-cap-code-file-excel-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xet-nghiem-cap-code-file-excel-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xet-nghiem-cap-code-file-excel-popup.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], XetNghiemCapCodeFileExcelPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n\ntable,\nth,\ntd {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1jYXAtY29kZS94ZXQtbmdoaWVtLWNhcC1jb2RlLWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFx4ZXQtbmdoaWVtLWNhcC1jb2RlXFx4ZXQtbmdoaWVtLWNhcC1jb2RlLWxpc3RcXHhldC1uZ2hpZW0tY2FwLWNvZGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1jYXAtY29kZS94ZXQtbmdoaWVtLWNhcC1jb2RlLWxpc3QveGV0LW5naGllbS1jYXAtY29kZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7OztFQUdFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0tY2FwLWNvZGUveGV0LW5naGllbS1jYXAtY29kZS1saXN0L3hldC1uZ2hpZW0tY2FwLWNvZGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG50YWJsZSxcbnRoLFxudGQge1xuICBwYWRkaW5nOiA1cHg7XG59IiwiZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4ucmVkVGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmJsdWVUZXh0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbnRhYmxlLFxudGgsXG50ZCB7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: XetNghiemCapCodeListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeListComponent", function () { return XetNghiemCapCodeListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
            /* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
            /* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8__);
            /* harmony import */ var _iconify_icons_ic_outline_how_to_reg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/outline-how-to-reg */ "./node_modules/@iconify/icons-ic/outline-how-to-reg.js");
            /* harmony import */ var _iconify_icons_ic_outline_how_to_reg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_outline_how_to_reg__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _iconify_icons_ic_outline_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/outline-print */ "./node_modules/@iconify/icons-ic/outline-print.js");
            /* harmony import */ var _iconify_icons_ic_outline_print__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_outline_print__WEBPACK_IMPORTED_MODULE_10__);
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
            /* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11__);
            /* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/check-circle */ "./node_modules/@iconify/icons-ic/check-circle.js");
            /* harmony import */ var _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_12__);
            /* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/highlight-off */ "./node_modules/@iconify/icons-ic/highlight-off.js");
            /* harmony import */ var _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../xet-nghiem-cap-code.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.model.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var _lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../lay-mau-xet-nghiem/lay-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var _iconify_icons_fa_solid_file_import__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-import */ "./node_modules/@iconify/icons-fa-solid/file-import.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_import__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_import__WEBPACK_IMPORTED_MODULE_32__);
            /* harmony import */ var _xet_nghiem_cap_code_file_excel_popup_xet_nghiem_cap_code_file_excel_popup_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.ts");
            var XetNghiemCapCodeListComponent = /** @class */ (function () {
                function XetNghiemCapCodeListComponent(authService, notificationService, router, route, location, dialog, apiService, renderer) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
                    this.renderer = renderer;
                    this.inBarcodeDaCapCodeBenhNhan = new _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__["InBarcodeDaCapCodeBenhNhan"]();
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_5___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_7___default.a;
                    this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_6___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_8___default.a;
                    this.icHowToReg = _iconify_icons_ic_outline_how_to_reg__WEBPACK_IMPORTED_MODULE_9___default.a;
                    this.icPrint = _iconify_icons_ic_outline_print__WEBPACK_IMPORTED_MODULE_10___default.a;
                    this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_11___default.a;
                    this.icDone = _iconify_icons_ic_check_circle__WEBPACK_IMPORTED_MODULE_12___default.a;
                    this.icClear = _iconify_icons_ic_highlight_off__WEBPACK_IMPORTED_MODULE_13___default.a;
                    this.icFileImport = _iconify_icons_fa_solid_file_import__WEBPACK_IMPORTED_MODULE_32___default.a;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].LayMauXetNghiem;
                    this.gridColumns = [];
                    this.isScanF1 = false;
                    this.strAdditionalSearchString = "";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
                    this.timKiemNangCaoObj = new _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__["XetNghiemCapCodeTimKiem"]();
                    this.baseRoute = "/xet-nghiem/xac-nhan-cap-code";
                    this.dataYeuCauTiepNhan = new _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__["ThongTinYeuCauTiepNhanXetNghiem"]();
                    this.isDuoi6Tuoi = false;
                    this.Duoi6TuoiDisplay = "";
                    this.dungBarcodeMoi = true;
                    this.barcodeNumbers = [];
                    this.barcodeSoLuongIn = null;
                    this.strBarCodeNumber = null;
                    this.barcodeKeyId = null;
                    this.barcodeDisplay = null;
                    this.queryInfoBarcode = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_27__["LookupQueryInfo"]();
                    this.layMauXetNghiemBarcodeQueryInfo = new _lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_28__["LayMauXetNghiemBarcodeQueryInfo"]();
                    this.barcodeDangChon = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_27__["LookupItemVo"](null, null);
                    this.gridDichVuChuaCapColumns = [];
                    this.groups = [{ field: 'TenNhom', dir: null, aggregates: [] }];
                    this.arrDichVuChon = new Array();
                    this.arrDichVuTatCaDichVu = [];
                    this.arrNhomDichVuDangChon = [];
                    this.isCheckedAll = true;
                    this.isFirstLoad = true;
                    this.urlGetDataChuaCapCode = "XetNghiem/GetDataForGridChuaCapCode";
                    this.urlGetTotalChuaCapCode = "XetNghiem/GetTotalPageForGridChuaCapCode";
                    this.urlGetDataDaCapCode = "XetNghiem/GetDataForGridDaCapCode";
                    this.urlGetTotalDaCapCode = "XetNghiem/GetTotalPageForGridDaCapCode";
                    this.i = 0;
                }
                XetNghiemCapCodeListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].LayMauXetNghiem;
                    var hasLocalSearchString = false;
                    this.queryInfoBarcode.Take = 50;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].getItem("additionalSearchStringXacNhanCapCodeXetNghiem");
                            if (additionalSearchString != null) {
                                this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                                }
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                                }
                                //this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                                if (this.timKiemNangCaoObj.TrangThai.ChuaCapCode) {
                                    this.gridChuaCapCode.additionalSearchString = additionalSearchString;
                                }
                                else if (this.timKiemNangCaoObj.TrangThai.DaCapCode) {
                                    this.gridDaCapCode.additionalSearchString = additionalSearchString;
                                }
                                if (this.timKiemNangCaoObj.YeuCauTiepNhanId != null) {
                                    this.getThongTinYeuCauTiepNhan(this.timKiemNangCaoObj.YeuCauTiepNhanId, this.timKiemNangCaoObj.PhienXetNghiemId);
                                }
                                hasLocalSearchString = true;
                            }
                        }
                    }
                    if (!hasLocalSearchString) {
                        var now = new Date();
                        var currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                        this.timKiemNangCaoObj.TuNgayDenNgay.startDate = this.timKiemNangCaoObj.TuNgayDenNgay.endDate = currentDate;
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                        // this.gridChild.additionalSearchString =JSON.stringify(this.timKiemNangCaoObj);
                        if (this.timKiemNangCaoObj.TrangThai.ChuaCapCode) {
                            this.gridChuaCapCode.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                        }
                        else if (this.timKiemNangCaoObj.TrangThai.DaCapCode) {
                            // let timKiemObjTemp = new XetNghiemCapCodeTimKiem();
                            // timKiemObjTemp.TuNgayDenNgay.startDate = timKiemObjTemp.TuNgayDenNgay.endDate = currentDate;
                            // timKiemObjTemp.TuNgayDenNgay.TuNgay = timKiemObjTemp.TuNgayDenNgay.DenNgay = CommonService.formatDateTime(timKiemObjTemp.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                            // timKiemObjTemp.TrangThai.ChuaCapCode = false;
                            // timKiemObjTemp.TrangThai.DaCapCode = true;
                            this.gridDaCapCode.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                        }
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].removeItem("additionalSearchStringXacNhanCapCodeXetNghiem");
                    }
                    this.gridColumns = [
                        { Field: "MaTiepNhan", Title: "Mã TN", Width: 80, Sortable: true, Template: this.maTNTemplate },
                        { Field: "HoTen", Title: "Tên NB", Width: 100, Sortable: true },
                        { Field: "NamSinh", Title: "Năm sinh", Width: 40, Sortable: true },
                        { Field: "Barcode", Title: "Barcode", Width: 80, Sortable: false }
                    ];
                    this.gridDichVuChuaCapColumns = [
                        { Field: "CheckBox", Title: "", Width: 30, Sortable: false, Template: this.checkBoxTemplate, TemplateHeader: this.checkBoxHeaderTemplate },
                        { Field: "MaDichVu", Title: "Mã DV", Width: 80, Sortable: false },
                        { Field: "TenDichVu", Title: "Tên DV", Width: 240, Sortable: false },
                        { Field: "TenNhom", Title: "Nhóm", Width: 150, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: "LoaiMau", Title: "Loại mẫu", Width: 80, Sortable: false, Template: this.tenLoaiMauTemplate },
                        //{ Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: true, Template: this.trangThaiNhomTemplate},
                        { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 80, Sortable: false, Template: this.thoiGianChiDinhTemplate },
                        { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120, Sortable: false },
                    ];
                };
                XetNghiemCapCodeListComponent.prototype.searchChanges = function (event) {
                    var self = this;
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        self.timeoutSearchChange = setTimeout(function () {
                            self.modelQRCode = event;
                            self.changeQR(self.modelQRCode);
                        }, 10);
                    }
                    else if ((event == null || event == "") && this.strAdditionalSearchString != "") {
                        this.modelQRCode = null;
                        this.timKiemNangCao();
                    }
                };
                XetNghiemCapCodeListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                XetNghiemCapCodeListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    // this.gridChild.searchString = null;
                    if (this.timKiemNangCaoObj.TrangThai.ChuaCapCode) {
                        this.gridChuaCapCode.searchString = null;
                    }
                    else if (this.timKiemNangCaoObj.TrangThai.DaCapCode) {
                        this.gridDaCapCode.searchString = null;
                    }
                    this.timKiemNangCao();
                };
                XetNghiemCapCodeListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].setItem("additionalSearchStringXacNhanCapCodeXetNghiem", queryString);
                    // this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
                    // this.gridChild.search();
                    if (this.timKiemNangCaoObj.TrangThai.ChuaCapCode) {
                        this.gridChuaCapCode._additionalSearchString = this.strAdditionalSearchString = queryString;
                        this.gridChuaCapCode.search();
                    }
                    else if (this.timKiemNangCaoObj.TrangThai.DaCapCode) {
                        this.gridDaCapCode._additionalSearchString = this.strAdditionalSearchString = queryString;
                        this.gridDaCapCode.search();
                    }
                };
                XetNghiemCapCodeListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                XetNghiemCapCodeListComponent.prototype.changeQR = function (event) {
                    if (event != null && typeof event == "string" && event.endsWith("@")) {
                        var dataTimKiem = event.split("|");
                        if (dataTimKiem.length > 1) {
                            this.timKiemNangCaoObj.SearchString = dataTimKiem[0];
                        }
                        else {
                            this.timKiemNangCaoObj.SearchString = event.slice(0, -1);
                        }
                        this.timKiemNangCao();
                    }
                    else {
                        this.notificationService.showError("Không tìm thấy thông tin cần tìm.");
                    }
                    this.isScanF1 = false;
                };
                XetNghiemCapCodeListComponent.prototype.changeValueTinhTrang = function (value) {
                    if (value == 'chuaCapCode') {
                        this.timKiemNangCaoObj.TrangThai.ChuaCapCode = true;
                        this.timKiemNangCaoObj.TrangThai.DaCapCode = false;
                    }
                    else if ('daCapCode') {
                        this.timKiemNangCaoObj.TrangThai.ChuaCapCode = false;
                        this.timKiemNangCaoObj.TrangThai.DaCapCode = true;
                    }
                    this.huyChonBenhNhan();
                };
                XetNghiemCapCodeListComponent.prototype.getAge = function (date_1, date_2) {
                    var yAppendix, mAppendix, dAppendix;
                    var days = date_2.getDate() - date_1.getDate(); //Thach edit
                    if (days < 0) {
                        date_2.setMonth(date_2.getMonth() - 1);
                        days += this.DaysInMonth(date_2);
                    }
                    var months = date_2.getMonth() - date_1.getMonth();
                    if (months < 0) {
                        date_2.setFullYear(date_2.getFullYear() - 1);
                        months += 12;
                    }
                    var years = date_2.getFullYear() - date_1.getFullYear();
                    if (years > 1)
                        yAppendix = " years";
                    else
                        yAppendix = " year";
                    if (months > 1)
                        mAppendix = " months";
                    else
                        mAppendix = " month";
                    if (days > 1)
                        dAppendix = " days";
                    else
                        dAppendix = " day";
                    if ((years < 6 && years >= 0) || (years == 6 && months == 0 && days == 0)) {
                        this.isDuoi6Tuoi = true;
                    }
                    else {
                        this.isDuoi6Tuoi = false;
                    }
                    this.Duoi6TuoiDisplay =
                        years + " Tuổi " + months + " Tháng " + days + " Ngày ";
                };
                XetNghiemCapCodeListComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                XetNghiemCapCodeListComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                XetNghiemCapCodeListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                XetNghiemCapCodeListComponent.prototype.getThongTinYeuCauTiepNhan = function (yeuCauTiepNhanId, phienXetNghiemId) {
                    var _this = this;
                    if (phienXetNghiemId === void 0) { phienXetNghiemId = null; }
                    if (yeuCauTiepNhanId) {
                        this.huyChonBenhNhan(true);
                        this.showPopupLoadingData();
                        this.layMauXetNghiemBarcodeQueryInfo.YeuCauTiepNhanId = yeuCauTiepNhanId;
                        this.queryInfoBarcode.ParameterDependencies = JSON.stringify(this.layMauXetNghiemBarcodeQueryInfo);
                        var obj = {
                            YeuCauTiepNhanId: yeuCauTiepNhanId,
                            PhienXetNghiemId: phienXetNghiemId
                        };
                        this.apiService
                            .post("XetNghiem/GetThongTinBenhNhanXetNghiem", obj)
                            .subscribe(function (resultData) {
                            if (resultData !== undefined && resultData != null) {
                                // this.huyChonBenhNhan();
                                _this.dataYeuCauTiepNhan = resultData;
                                var ngaySinh = new Date(_this.dataYeuCauTiepNhan.ThangSinh +
                                    "/" +
                                    _this.dataYeuCauTiepNhan.NgaySinh +
                                    "/" +
                                    _this.dataYeuCauTiepNhan.NamSinh +
                                    "/");
                                _this.getAge(ngaySinh, new Date());
                                _this.closePopupLoadingData();
                                _this.timKiemNangCaoObj.YeuCauTiepNhanId = yeuCauTiepNhanId;
                                _this.timKiemNangCaoObj.PhienXetNghiemId = phienXetNghiemId;
                            }
                            else {
                                // this.huyChonBenhNhan();
                                _this.closePopupLoadingData();
                            }
                            _this.timKiemNangCao();
                        }, function (err) {
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                    }
                };
                // xử lý barcode
                XetNghiemCapCodeListComponent.prototype.changeHinhThucBarcode = function (event) {
                    this.validationErrors = [];
                    this.barcodeDangChon = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_27__["LookupItemVo"](null, null);
                    this.strBarCodeNumber = null;
                    this.barcodeKeyId = null;
                };
                XetNghiemCapCodeListComponent.prototype.changeCapMoiBarcodeVer2 = function (event) {
                    if (event != undefined && event != null) {
                        this.strBarCodeNumber = event.KeyId + "";
                        this.barcodeKeyId = event.KeyId;
                        this.barcodeDangChon.DisplayName = event.DisplayName;
                    }
                    else {
                        this.strBarCodeNumber = null;
                        this.barcodeKeyId = null;
                        this.barcodeDangChon.DisplayName = null;
                    }
                };
                XetNghiemCapCodeListComponent.prototype.getDataBarcode = function () {
                    var _this = this;
                    this.apiService.post("XetNghiem/GetListBarcodeTheoYeuCauTiepNhan", this.queryInfoBarcode).subscribe(function (resultData) {
                        if (resultData !== null && resultData !== undefined) {
                            _this.barcodeNumbers = resultData.map(function (x) { return x.KeyId + ""; });
                        }
                    });
                };
                XetNghiemCapCodeListComponent.prototype.CapVaInBarcode = function () {
                    var _this = this;
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_29__["SecurityOperation"].Update)) {
                        // this.dialog.open(ConfirmComponent, {
                        //   disableClose: false,
                        //   width: '400px',
                        //   data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn cấp Barcode cho dịch vụ đang chọn không?" }
                        // }).afterClosed().subscribe(result => {
                        //   if (result == "Yes") {
                        this.showPopupLoadingData();
                        this.validationErrors = [];
                        var barcodeDangChonDisplay = !this.dungBarcodeMoi ? this.barcodeDangChon.DisplayName : null;
                        var barcodeDangChonKeyId = this.barcodeKeyId == null ? null : this.barcodeKeyId.toString();
                        // trường hợp tạo barocde mới -> tự động: sẽ mặc định tự động cấp mới barcode, html bỏ
                        var IsCapBarcodeChoDichVu = true;
                        if (this.dataYeuCauTiepNhan.IsAutoBarcode && this.dungBarcodeMoi) {
                            IsCapBarcodeChoDichVu = false;
                        }
                        var thongTinBarcode = new _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__["KiemTraBarcodeCapCodeDichVuXetNghiem"](this.dataYeuCauTiepNhan.YeuCauTiepNhanId, barcodeDangChonKeyId, true, // cheat validation
                        this.barcodeSoLuongIn, this.dataYeuCauTiepNhan.SoLuongThem, this.dungBarcodeMoi, barcodeDangChonDisplay, IsCapBarcodeChoDichVu);
                        // cập nhật 3836
                        //this.dataYeuCauTiepNhan.NhanVienLayMauId,
                        //this.dataYeuCauTiepNhan.ThoiGianLayMau
                        this.apiService.post("XetNghiem/KiemTraBarcodeDangChon", thongTinBarcode).subscribe(function (resultDataBarcode) {
                            var thongTinBarcode = new _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__["CapBarcodeTheoDichVuXetNghiem"](_this.dataYeuCauTiepNhan.YeuCauTiepNhanId, _this.dataYeuCauTiepNhan.BenhNhanId, resultDataBarcode.KeyId, resultDataBarcode.DisplayName, _this.barcodeSoLuongIn, _this.dataYeuCauTiepNhan.SoLuongThem, _this.arrDichVuChon, _this.dataYeuCauTiepNhan.NhanVienLayMauId, _this.dataYeuCauTiepNhan.ThoiGianLayMau);
                            _this.apiService.put("XetNghiem/XuLyXacNhanCapBarcodeDichhVuXetNghiem", thongTinBarcode)
                                .subscribe(function (resultData) {
                                _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].ActionSuccessfully, ["Cấp barcode"]));
                                _this.closePopupLoadingData();
                                // trường hợp dùng lại barcode thì ẩn số lượng thêm đi
                                var soLuongInThucTe = _this.barcodeSoLuongIn + (_this.dataYeuCauTiepNhan.SoLuongThem == null ? 0 : (!_this.dungBarcodeMoi ? 0 : _this.dataYeuCauTiepNhan.SoLuongThem));
                                // this.dialog.open(LayMauXetNghiemInBarcodeComponent, {
                                //   disableClose: true,
                                //   width: "300px",
                                //   data: { 'YeuCauTiepNhanId': this.dataYeuCauTiepNhan.YeuCauTiepNhanId, 'BarcodeNumber': resultDataBarcode.KeyId, 'BarcodeId': resultDataBarcode.DisplayName, 'SoLuong': soLuongInThucTe },
                                // }).afterClosed().subscribe(() => {
                                //   this.barcodeSoLuongIn = null;
                                //   //this.isFirstLoad = true;
                                //   this.xuLyRefreshQuyeryGridDichVu();
                                //   //this.gridDVChuaCapCode.search();
                                // });
                                _this.xuLyInBarcodeKhongHienPopup(resultDataBarcode.KeyId, resultDataBarcode.DisplayName, soLuongInThucTe);
                                _this.dataYeuCauTiepNhan.NhanVienLayMauId = null;
                                _this.dataYeuCauTiepNhan.ThoiGianLayMau = null;
                            }, function (err) {
                                _this.validationErrors = err.ValidationErrors;
                                if (err.Message != "Validation Failed") {
                                    _this.notificationService.showError(err.Message);
                                }
                                _this.closePopupLoadingData();
                            });
                        }, function (err) {
                            _this.validationErrors = err.ValidationErrors;
                            if (err.Message != "Validation Failed") {
                                _this.notificationService.showError(err.Message);
                            }
                            _this.closePopupLoadingData();
                        });
                        //   }
                        // });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XetNghiemCapCodeListComponent.prototype.xacNhanHuyMauXetNghiem = function (dataItem) {
                    var _this = this;
                    if (dataItem === void 0) { dataItem = null; }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_29__["SecurityOperation"].Delete)) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_31__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn hủy cấp Barcode cho dịch vụ đang chọn không?" }
                        }).afterClosed().subscribe(function (result) {
                            if (result == "Yes") {
                                self.showPopupLoadingData();
                                var arrayTemp = new Array();
                                if (dataItem != null) {
                                    arrayTemp.push(dataItem.Id);
                                }
                                else {
                                    arrayTemp = self.arrDichVuChon;
                                }
                                var obj = {
                                    YeuCauTiepNhanId: self.dataYeuCauTiepNhan.YeuCauTiepNhanId,
                                    BenhNhanId: self.dataYeuCauTiepNhan.BenhNhanId,
                                    YeuCauDichVuKyThuatIds: arrayTemp
                                };
                                self.apiService.put("XetNghiem/XuLyXacNhanHuyCapBarcodeDichVuChuaNhanMau", obj).subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].ActionSuccessfully, ["Hủy cấp Barcode"]));
                                    //self.isFirstLoad = true;
                                    //self.gridDVDaCapCode.search();
                                    _this.xuLyRefreshQuyeryGridDichVu();
                                    self.closePopupLoadingData();
                                }, function (err) {
                                    if (err.Message != "Validation Failed") {
                                        self.notificationService.showError(err.Message);
                                    }
                                    self.closePopupLoadingData();
                                });
                            }
                        });
                    }
                    else {
                        self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XetNghiemCapCodeListComponent.prototype.InBarcodeDaCapCode = function () {
                    this.validationErrors = [];
                    if (!this.barcodeSoLuongIn) {
                        this.validationErrors.push({ Message: "Số lượng yêu cầu nhập", Field: "SoLuong" });
                    }
                    else {
                        // this.dialog.open(LayMauXetNghiemInBarcodeComponent, {
                        //   disableClose: true,
                        //   width: "300px",
                        //   data: {
                        //     'YeuCauTiepNhanId': this.dataYeuCauTiepNhan.YeuCauTiepNhanId,
                        //     'BarcodeNumber': this.dataYeuCauTiepNhan.BarcodeNumber,
                        //     'BarcodeId': this.dataYeuCauTiepNhan.Barcode,
                        //     'SoLuong': this.barcodeSoLuongIn
                        //   },
                        // });
                        this.xuLyInBarcodeKhongHienPopup(this.dataYeuCauTiepNhan.BarcodeNumber, this.dataYeuCauTiepNhan.Barcode, this.barcodeSoLuongIn, false);
                    }
                };
                XetNghiemCapCodeListComponent.prototype.xuLyRefreshQuyeryGridDichVu = function () {
                    this.timKiemNangCaoObj.ThoiDiemHienTai = new Date();
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_24__["LocalStorageHelper"].setItem("additionalSearchStringXacNhanCapCodeXetNghiem", queryString);
                    console.log('xuLyRefreshQuyeryGridDichVu', queryString);
                    this.strAdditionalSearchString = queryString;
                };
                XetNghiemCapCodeListComponent.prototype.xuLyInBarcodeKhongHienPopup = function (BarcodeNumber, BarcodeId, soLuongIn, isReload) {
                    var _this = this;
                    if (isReload === void 0) { isReload = true; }
                    var self = this;
                    self.showPopupLoadingData();
                    var hostingName;
                    if (window.location.protocol == "http:") {
                        hostingName = "http://" + window.location.host;
                    }
                    else {
                        hostingName = "https://" + window.location.host;
                    }
                    var layMauXetNghiemInBarcode = new _lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_28__["LayMauXetNghiemInBarcode"](self.dataYeuCauTiepNhan.YeuCauTiepNhanId, BarcodeId, BarcodeNumber, self.barcodeSoLuongIn, hostingName);
                    self.apiService.post("Xetnghiem/InBarcodeLayMauXetNghiem", layMauXetNghiemInBarcode).subscribe(function (responseHTML) {
                        if (isReload) {
                            _this.barcodeSoLuongIn = null;
                            _this.xuLyRefreshQuyeryGridDichVu();
                        }
                        if (responseHTML != null) {
                            var typeSize = "1.5in 0.87in";
                            var typeLayout = "portrait";
                            var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                            if (WindowPrt != null && WindowPrt != undefined) {
                                WindowPrt.focus();
                                WindowPrt.close();
                                WindowPrt.document.write(responseHTML);
                                WindowPrt.document.close();
                                var contents = WindowPrt.document.documentElement.innerHTML;
                                if (soLuongIn > 1) {
                                    for (var i = 2; i <= soLuongIn; i++) {
                                        contents += "<p class='pagebreak'></p>" + WindowPrt.document.documentElement.innerHTML;
                                    }
                                }
                                var frame1 = self.renderer.createElement('iframe');
                                frame1.name = "frame1";
                                frame1.style.position = "absolute";
                                frame1.style.top = "-1000000px";
                                document.body.appendChild(frame1);
                                var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                                frameDoc.document.open();
                                frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
                                frameDoc.document.write('</head><body>');
                                frameDoc.document.write(contents);
                                frameDoc.document.write('</body></html>');
                                frameDoc.document.close();
                                setTimeout(function () {
                                    window.frames["frame1"].focus();
                                    window.frames["frame1"].print();
                                    document.body.removeChild(frame1);
                                }, 500);
                            }
                        }
                        self.closePopupLoadingData();
                    }, function (err) {
                        if (err.Message !== 'Validation Failed') {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupLoadingData();
                    });
                };
                // xử lý cấp, hủy code
                XetNghiemCapCodeListComponent.prototype.onDataBoundGridChuaCapCode = function (event) {
                    this.arrDichVuTatCaDichVu = [];
                    this.arrNhomDichVuDangChon = [];
                    this.arrDichVuChon = [];
                    this.arrDichVuTatCaDichVu = event.Data;
                    if (this.isFirstLoad) {
                        var self = this;
                        setTimeout(function () {
                            self.isFirstLoad = false;
                            self.chonTatCaDichVuTrongGoi(true);
                        }, 800);
                    }
                };
                XetNghiemCapCodeListComponent.prototype.xuLyCheckDichVu = function (id, tenNhom, checked) {
                    if (checked) {
                        var indexDichVuDaChon = this.arrDichVuChon.findIndex(function (x) { return x == id; });
                        if (indexDichVuDaChon == -1) {
                            this.arrDichVuChon.push(id);
                        }
                        var name = 'ckbItem-' + id;
                        var checkboxes = document.getElementsByName(name);
                        checkboxes.forEach(function (cbk) {
                            if (!cbk['checked']) {
                                document.getElementById(cbk['id']).click();
                            }
                        });
                        if (tenNhom != null) {
                            var indexNhom = this.arrNhomDichVuDangChon.findIndex(function (x) { return x == tenNhom; });
                            if (indexNhom == -1) {
                                this.arrNhomDichVuDangChon.push(tenNhom);
                            }
                        }
                    }
                    else {
                        var index = this.arrDichVuChon.findIndex(function (x) { return x == id; });
                        if (indexDichVuDaChon != -1) {
                            this.arrDichVuChon.splice(index, 1);
                        }
                        var name = 'ckbItem-' + id;
                        var checkboxes = document.getElementsByName(name);
                        checkboxes.forEach(function (cbk) {
                            if (cbk['checked']) {
                                document.getElementById(cbk['id']).click();
                            }
                        });
                        if (tenNhom != null) {
                            var indexNhom = this.arrNhomDichVuDangChon.findIndex(function (x) { return x == tenNhom; });
                            if (indexNhom != -1) {
                                this.arrNhomDichVuDangChon = this.arrNhomDichVuDangChon.filter(function (x) { return x != tenNhom; });
                            }
                        }
                    }
                };
                XetNghiemCapCodeListComponent.prototype.changeCheckNhomDichVu = function (event, tenNhom) {
                    var _this = this;
                    this.arrDichVuTatCaDichVu.forEach(function (element) {
                        if (element.TenNhom == tenNhom && element.IsActive) {
                            if (event.target.checked) {
                                _this.xuLyCheckDichVu(element.Id, tenNhom, true);
                            }
                            else {
                                _this.xuLyCheckDichVu(element.Id, tenNhom, false);
                            }
                        }
                    });
                    this.demNhomDangChon();
                };
                XetNghiemCapCodeListComponent.prototype.chonTatCaDichVuTrongGoi = function (event) {
                    var _this = this;
                    if (event) {
                        var lstDichVu = this.arrDichVuTatCaDichVu.filter(function (x) { return x.IsActive; });
                        console.log('lstDichVu active', lstDichVu);
                        this.arrNhomDichVuDangChon = [];
                        lstDichVu.forEach(function (element) {
                            _this.xuLyCheckDichVu(element.Id, element.TenNhom, true);
                            _this.arrNhomDichVuDangChon.forEach(function (gr) {
                                var nameGr = 'ckbGroup-' + gr;
                                var element = document.getElementById(nameGr);
                                if (!element.checked) {
                                    element.checked = true;
                                }
                            });
                            _this.barcodeSoLuongIn = _this.arrNhomDichVuDangChon.length + 1;
                        });
                    }
                    else {
                        var arrDichVuDaChonTemp_1 = []; // this.arrDichVuChon;
                        this.arrDichVuChon.forEach(function (val) { return arrDichVuDaChonTemp_1.push(val); });
                        console.log('lstDichVu active', this.arrDichVuChon);
                        if (arrDichVuDaChonTemp_1.length > 0) {
                            arrDichVuDaChonTemp_1.forEach(function (dichVuId) {
                                _this.xuLyCheckDichVu(dichVuId, null, false);
                            });
                            this.arrNhomDichVuDangChon.forEach(function (gr) {
                                var nameGr = 'ckbGroup-' + gr;
                                var element = document.getElementById(nameGr);
                                if (element.checked) {
                                    element.checked = false;
                                }
                            });
                            this.arrNhomDichVuDangChon = [];
                            this.barcodeSoLuongIn = null;
                        }
                    }
                    this.demNhomDangChon();
                };
                XetNghiemCapCodeListComponent.prototype.chonDichVu = function (event, dataItem) {
                    var indexNhom = this.arrNhomDichVuDangChon.findIndex(function (x) { return x == dataItem.TenNhom; });
                    if (event) {
                        if (this.arrDichVuChon.findIndex(function (x) { return x == dataItem.Id; }) == -1) {
                            this.arrDichVuChon.push(dataItem.Id);
                        }
                        if (indexNhom == -1) {
                            this.arrNhomDichVuDangChon.push(dataItem.TenNhom);
                        }
                        var slDichVuDaChon = this.arrDichVuChon.length;
                        var slDichVuTheoGoi = this.arrDichVuTatCaDichVu.filter(function (x) { return x.IsActive; }).length;
                        if (slDichVuDaChon == slDichVuTheoGoi) {
                            var element = document.getElementById("ckbHeader");
                            element['checked'] = true;
                        }
                        var nameGr = 'ckbGroup-' + dataItem.TenNhom;
                        var cbkGroup = document.getElementById(nameGr);
                        if (!cbkGroup.checked) {
                            cbkGroup.checked = true;
                        }
                    }
                    else {
                        var index = this.arrDichVuChon.findIndex(function (x) { return x == dataItem.Id; });
                        if (index != -1) {
                            this.arrDichVuChon.splice(index, 1);
                            var element = document.getElementById("ckbHeader");
                            element['checked'] = false;
                        }
                        var lstDichVuKhaDungTrongNhom = this.arrDichVuTatCaDichVu.filter(function (x) { return x.TenNhom === dataItem.TenNhom && x.IsActive; });
                        var lstDichVuDangCHonTrongNhom = this.arrDichVuChon.filter(function (x) { return lstDichVuKhaDungTrongNhom.findIndex(function (a) { return a.Id == x; }) != -1; });
                        if (lstDichVuDangCHonTrongNhom.length == 0) {
                            var nameGr = 'ckbGroup-' + dataItem.TenNhom;
                            var cbkGroup = document.getElementById(nameGr);
                            if (cbkGroup.checked) {
                                cbkGroup.checked = false;
                            }
                            if (indexNhom != -1) {
                                this.arrNhomDichVuDangChon = this.arrNhomDichVuDangChon.filter(function (x) { return x != dataItem.TenNhom; });
                            }
                        }
                    }
                    this.demNhomDangChon();
                };
                XetNghiemCapCodeListComponent.prototype.demNhomDangChon = function () {
                    // số lượng in bằng tổng số nhóm đang chọn + 1
                    var length = this.arrNhomDichVuDangChon.length;
                    this.barcodeSoLuongIn = length == 0 ? null : length + 1;
                };
                XetNghiemCapCodeListComponent.prototype.kiemTraAnHienGroupDichVu = function (tenNhom) {
                    var arrDichVu = this.arrDichVuTatCaDichVu.filter(function (x) { return x.TenNhom == tenNhom && x.IsActive == true; });
                    return arrDichVu.length > 0;
                };
                // xuất excel
                XetNghiemCapCodeListComponent.prototype.xuLyXuatExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_29__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("XetNghiem/ExportDanhSachNguoiBenhDaCapCodeXetNghiem", this.gridDaCapCode._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DanhSachNguoiBenhDaCapCode" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XetNghiemCapCodeListComponent.prototype.huyChonBenhNhan = function (chuyenBenhNhan) {
                    if (chuyenBenhNhan === void 0) { chuyenBenhNhan = false; }
                    this.dataYeuCauTiepNhan = new _xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_16__["ThongTinYeuCauTiepNhanXetNghiem"]();
                    if (!chuyenBenhNhan) {
                        this.timKiemNangCaoObj.YeuCauTiepNhanId = null;
                        this.timKiemNangCaoObj.PhienXetNghiemId = null;
                    }
                    this.arrDichVuChon = [];
                    this.arrNhomDichVuDangChon = [];
                    this.arrDichVuTatCaDichVu = [];
                    this.isCheckedAll = true;
                    this.isFirstLoad = true;
                    this.barcodeSoLuongIn = null;
                    this.validationErrors = [];
                    this.barcodeKeyId = null;
                    this.dungBarcodeMoi = true;
                    this.timKiemNangCao();
                };
                XetNghiemCapCodeListComponent.prototype.xuLyXuatExcelChuaCapCode = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_29__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("XetNghiem/ExportDanhSachNguoiBenhChuaCapBarcodeXetNghiem", this.gridChuaCapCode._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_23__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "DanhSachNguoiBenhChuaCapCode" + dateTimeNow.getDate() + dateTimeNow.getMonth() + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                XetNghiemCapCodeListComponent.prototype.xuLyNhapExcelChuaCapCode = function () {
                    var _this = this;
                    this.dialog.open(_xet_nghiem_cap_code_file_excel_popup_xet_nghiem_cap_code_file_excel_popup_component__WEBPACK_IMPORTED_MODULE_33__["XetNghiemCapCodeFileExcelPopupComponent"], {
                        disableClose: false,
                        width: '800px',
                        data: { Title: 'Danh Sách Người Bệnh Chưa Cấp Barcode' }
                    }).afterClosed().subscribe(function () {
                        _this.timKiemNangCao();
                        _this.xuLyRefreshQuyeryGridDichVu();
                    });
                };
                XetNghiemCapCodeListComponent.prototype.delay = function (ms) {
                    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
                };
                XetNghiemCapCodeListComponent.prototype.inNhieuBarcode = function () {
                    var _this = this;
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null
                        && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null
                        && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.inBarcodeDaCapCodeBenhNhan.HostingName = window.location.protocol + "//" + window.location.host;
                        this.inBarcodeDaCapCodeBenhNhan.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.startDate;
                        this.inBarcodeDaCapCodeBenhNhan.DenNgay = this.timKiemNangCaoObj.TuNgayDenNgay.endDate;
                        this.inBarcodeDaCapCodeBenhNhan.SearchString = this.timKiemNangCaoObj.SearchString;
                        this.inBarcodeDaCapCodeBenhNhan.HopDongKhamSucKhoeId = this.timKiemNangCaoObj.HopDongKhamSucKhoeId;
                        this.inBarcodeDaCapCodeBenhNhan.SoLuong = this.timKiemNangCaoObj.SoLuong;
                        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_26__["LoadingComponent"], {
                            disableClose: true,
                            width: '200px',
                            height: '90px',
                            data: { Title: 'Đang tải dữ liệu...' }
                        });
                        this.apiService.post("XetNghiem/InBarcodeCuaBenhNhan", this.inBarcodeDaCapCodeBenhNhan).subscribe(function (htmls) {
                            _this.print(htmls, htmls[0]);
                            _this.dialog.closeAll();
                        }, function (err) {
                        });
                    }
                    else {
                        this.notificationService.showError('Vui lòng chọn từ ngày - đến ngày.');
                    }
                };
                XetNghiemCapCodeListComponent.prototype.print = function (htmls, html) {
                    var self = this;
                    if (self.i == htmls.length) {
                        self.i = 0;
                        return;
                    }
                    else {
                        setTimeout(function () {
                            self.notificationService.showInfo('Đang in trang ' + (self.i + 1) + '/' + htmls.length);
                            if (html != undefined && html != null && html.length > 0) {
                                console.log(html);
                                var typeSize = "1.5in 0.87in";
                                var typeLayout = "portrait";
                                var WindowPrt = window.open('', '', 'toolbar=0,scrollbars=0,status=0');
                                if (WindowPrt != null && WindowPrt != undefined) {
                                    WindowPrt.focus();
                                    WindowPrt.close();
                                    WindowPrt.document.write(html);
                                    WindowPrt.document.close();
                                    var contents = WindowPrt.document.documentElement.innerHTML;
                                    var frame1 = self.renderer.createElement('iframe');
                                    frame1.name = "frame1";
                                    frame1.style.position = "absolute";
                                    frame1.style.top = "-1000000px";
                                    document.body.appendChild(frame1);
                                    var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
                                    frameDoc.document.open();
                                    frameDoc.document.write('<html><head><title>DIV Contents</title><style>*{ box-sizing: border-box;} @media print { @page{size:' + typeSize + ' ' + typeLayout + ' ;} .pagebreak {clear: both;page-break-after: always;}}</style><link href="https://fonts.googleapis.com/css?family=Libre Barcode 39" rel="stylesheet"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>');
                                    frameDoc.document.write('</head><body>');
                                    frameDoc.document.write(contents);
                                    frameDoc.document.write('</body></html>');
                                    frameDoc.document.close();
                                    setTimeout(function () {
                                        window.frames["frame1"].focus();
                                        window.frames["frame1"].print();
                                        document.body.removeChild(frame1);
                                    }, 1000);
                                }
                            }
                            self.i++; //  increment the counter
                            if (self.i <= htmls.length) { //  if the counter < 10, call the loop function
                                self.print(htmls, htmls[self.i]); //  ..  again which will trigger another 
                            } //  ..  setTimeout()
                        }, 1000);
                    }
                };
                return XetNghiemCapCodeListComponent;
            }());
            XetNghiemCapCodeListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_18__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChuaCapCode', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_25__["GridComponent"], static: true })
            ], XetNghiemCapCodeListComponent.prototype, "gridChuaCapCode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDaCapCode', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_25__["GridComponent"], static: true })
            ], XetNghiemCapCodeListComponent.prototype, "gridDaCapCode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDVChuaCapCode', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_25__["GridComponent"], static: true })
            ], XetNghiemCapCodeListComponent.prototype, "gridDVChuaCapCode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDVDaCapCode', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_25__["GridComponent"], static: true })
            ], XetNghiemCapCodeListComponent.prototype, "gridDVDaCapCode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], XetNghiemCapCodeListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenLoaiMauTemplate', { static: true })
            ], XetNghiemCapCodeListComponent.prototype, "tenLoaiMauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhTemplate', { static: true })
            ], XetNghiemCapCodeListComponent.prototype, "thoiGianChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], XetNghiemCapCodeListComponent.prototype, "checkBoxHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], XetNghiemCapCodeListComponent.prototype, "checkBoxTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiNhomTemplate', { static: true })
            ], XetNghiemCapCodeListComponent.prototype, "trangThaiNhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
            ], XetNghiemCapCodeListComponent.prototype, "maTNTemplate", void 0);
            XetNghiemCapCodeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xet-nghiem-cap-code-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xet-nghiem-cap-code-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xet-nghiem-cap-code-list.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.scss")).default]
                })
            ], XetNghiemCapCodeListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-routing.module.ts": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-routing.module.ts ***!
          \***************************************************************************************************/
        /*! exports provided: XetNghiemCapCodeRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeRoutingModule", function () { return XetNghiemCapCodeRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _xet_nghiem_cap_code_list_xet_nghiem_cap_code_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _xet_nghiem_cap_code_list_xet_nghiem_cap_code_list_component__WEBPACK_IMPORTED_MODULE_6__["XetNghiemCapCodeListComponent"],
                    data: {
                        title: 'DS cấp code',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].LayMauXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var XetNghiemCapCodeRoutingModule = /** @class */ (function () {
                function XetNghiemCapCodeRoutingModule() {
                }
                return XetNghiemCapCodeRoutingModule;
            }());
            XetNghiemCapCodeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], XetNghiemCapCodeRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.module.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.module.ts ***!
          \*******************************************************************************************/
        /*! exports provided: XetNghiemCapCodeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeModule", function () { return XetNghiemCapCodeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _xet_nghiem_cap_code_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xet-nghiem-cap-code-routing.module */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-routing.module.ts");
            /* harmony import */ var _xet_nghiem_cap_code_list_xet_nghiem_cap_code_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-list/xet-nghiem-cap-code-list.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _lay_mau_xet_nghiem_lay_mau_xet_nghiem_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../lay-mau-xet-nghiem/lay-mau-xet-nghiem.module */ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.module.ts");
            /* harmony import */ var _xet_nghiem_cap_code_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./xet-nghiem-cap-code.service */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _xet_nghiem_cap_code_file_excel_popup_xet_nghiem_cap_code_file_excel_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-popup/xet-nghiem-cap-code-file-excel-popup.component.ts");
            /* harmony import */ var _xet_nghiem_cap_code_file_excel_erros_popup_xet_nghiem_cap_code_file_excel_erros_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code-file-excel-erros-popup/xet-nghiem-cap-code-file-excel-erros-popup.component.ts");
            var XetNghiemCapCodeModule = /** @class */ (function () {
                function XetNghiemCapCodeModule() {
                }
                return XetNghiemCapCodeModule;
            }());
            XetNghiemCapCodeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _xet_nghiem_cap_code_list_xet_nghiem_cap_code_list_component__WEBPACK_IMPORTED_MODULE_4__["XetNghiemCapCodeListComponent"],
                        _xet_nghiem_cap_code_file_excel_popup_xet_nghiem_cap_code_file_excel_popup_component__WEBPACK_IMPORTED_MODULE_20__["XetNghiemCapCodeFileExcelPopupComponent"],
                        _xet_nghiem_cap_code_file_excel_erros_popup_xet_nghiem_cap_code_file_excel_erros_popup_component__WEBPACK_IMPORTED_MODULE_21__["XetNghiemCapCodeFileExcelErrosPopupComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _xet_nghiem_cap_code_routing_module__WEBPACK_IMPORTED_MODULE_3__["XetNghiemCapCodeRoutingModule"],
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
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_15__["GridModule"],
                        _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_13__["IntlModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_14__["PdfViewerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                        _lay_mau_xet_nghiem_lay_mau_xet_nghiem_module__WEBPACK_IMPORTED_MODULE_17__["LayMauXetNghiemModule"]
                    ],
                    entryComponents: [
                        _xet_nghiem_cap_code_file_excel_popup_xet_nghiem_cap_code_file_excel_popup_component__WEBPACK_IMPORTED_MODULE_20__["XetNghiemCapCodeFileExcelPopupComponent"],
                        _xet_nghiem_cap_code_file_excel_erros_popup_xet_nghiem_cap_code_file_excel_erros_popup_component__WEBPACK_IMPORTED_MODULE_21__["XetNghiemCapCodeFileExcelErrosPopupComponent"],
                    ],
                    providers: [
                        _xet_nghiem_cap_code_service__WEBPACK_IMPORTED_MODULE_18__["XetNghiemCapCodeService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_19__["BaseService"], useClass: _xet_nghiem_cap_code_service__WEBPACK_IMPORTED_MODULE_18__["XetNghiemCapCodeService"] }
                    ]
                })
            ], XetNghiemCapCodeModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.service.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.service.ts ***!
          \********************************************************************************************/
        /*! exports provided: XetNghiemCapCodeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemCapCodeService", function () { return XetNghiemCapCodeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var XetNghiemCapCodeService = /** @class */ (function (_super) {
                __extends(XetNghiemCapCodeService, _super);
                function XetNghiemCapCodeService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'XetNghiem';
                    return _this;
                }
                return XetNghiemCapCodeService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            XetNghiemCapCodeService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            XetNghiemCapCodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], XetNghiemCapCodeService);
            /***/ 
        })
    }]);
//# sourceMappingURL=xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module-es2015.js.map
//# sourceMappingURL=xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module-es5.js.map
//# sourceMappingURL=xet-nghiem-xet-nghiem-cap-code-xet-nghiem-cap-code-module-es5.js.map