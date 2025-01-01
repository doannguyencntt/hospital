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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xet-nghiem-xet-nghiem-nhan-mau-xet-nghiem-nhan-mau-module"], {
        /***/ "./node_modules/@iconify/icons-ic/highlight-off.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/highlight-off.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/outline-how-to-reg.js": 
        /*!**************************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/outline-how-to-reg.js ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/@iconify/icons-ic/outline-print.js": 
        /*!*********************************************************!*\
          !*** ./node_modules/@iconify/icons-ic/outline-print.js ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            var data = {
                "body": "<path d=\"M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"11.5\" r=\"1\" fill=\"currentColor\"/>",
                "width": 24,
                "height": 24
            };
            exports.__esModule = true;
            exports.default = data;
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.html": 
        /*!********************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.html ***!
          \********************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-16\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n                    {Title:'DS Nhận Mẫu',Path:'',Active:true}\n                    ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div @fadeInUp class=\"-mt-16\">\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"card\" fxFlex=\"100%\">\n                    <div class=\"px-6 py-4\" fxLayout=\"column\" style=\"position: relative;\">\n                        <kendo-splitter>\n                            <kendo-splitter-pane [collapsible]=\"true\" size=\"30%\" style=\"max-height: 800px;\" class=\"sticky-panelbar\">\n                                <fieldset fxFlex=\"100%\">\n                                    <legend>Danh sách chỉ định</legend>\n                                    <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n                                        <div fxFlex=\"100%\" class=\"sticky mb-2\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"0px grid\"\n                                            fxLayoutGap.lt-sm=\"0\">\n                                            <mat-radio-button fxFlex=\"40%\" fxFlex.sm=\"40%\" name=\"tinhTrang\" class=\"mb-3\"\n                                                [checked]=\"timKiemNangCaoObj.TrangThai.ChuaNhanMau\" value=\"true\" (change)=\"changeValueTinhTrang('chuaNhanMau')\"> Chờ nhận mẫu </mat-radio-button>\n                                            <mat-radio-button fxFlex=\"40%\" fxFlex.sm=\"40%\" name=\"tinhTrang\"\n                                                [checked]=\"timKiemNangCaoObj.TrangThai.DaNhanMau\" value=\"true\" (change)=\"changeValueTinhTrang('daNhanMau')\"> Đã nhận mẫu </mat-radio-button>\n                                    \n                                            <!-- <button *ngIf=\"timKiemNangCaoObj.TrangThai.DaNhanMau\" class=\"ml-auto\" fxFlex=\"none\" color=\"primary\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\">\n                                                <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                                            </button>\n                                             -->\n                                            <app-daterangepicker id=\"tuNgayDenNgay\" fxFlex=\"49%\" fxFlex.sm=\"49%\" class=\"on-header mb-2\"\n                                                [(model)]=\"timKiemNangCaoObj.TuNgayDenNgay\" label=\"Từ ngày - đến ngày\" (modelChange)=\"timKiemNangCao()\">\n                                            </app-daterangepicker>\n\n                                            <app-combobox fxFlex=\"49%\" fxFlex.sm=\"49%\" label=\"Hợp đồng\" id=\"HopDongKhamSucKhoeId\"\n                                                class=\"on-header ml-1\" url=\"XetNghiem/GetListHopDongKhamSucKhoeHieuLuc\"\n                                                [(model)]=\"timKiemNangCaoObj.HopDongKhamSucKhoeId\" (modelChange)=\"timKiemNangCao()\" popupSettings=\"null\"\n                                                [reloadForGrid]=\"true\">\n                                                <!-- [templateHeader]=\"khoaTemplateHeader\" [template]=\"khoaTemplate\" -->\n                                                <!-- <ng-template #khoaTemplateHeader let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <th width=\"20%\">Mã</th>\n                                                            <th>Ten</th>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template>\n                                                <ng-template #khoaTemplate let-dataItem>\n                                                    <table width=\"100%\" class=\"table-combobox\">\n                                                        <tr>\n                                                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                                                            <td>{{dataItem.Ten}}</td>\n                                                        </tr>\n                                                    </table>\n                                                </ng-template> -->\n                                            </app-combobox>\n\n                                            <div class=\"h-15 mt-2\" fxFlex=\"95%\">\n                                                <div class=\"bg-card rounded-full border\" fxFlex=\"100%\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                                                    fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                                                    <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                                                    <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\"\n                                                        name=\"searchString\" [(ngModel)]=\"timKiemNangCaoObj.SearchString\" (keyup)=\"onKey($event)\"\n                                                        (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\" />\n                                                    <button (click)=\"QuetMaQRCodeClick()\" color=\"primary\" mat-mini-fab type=\"button\" class=\"button-barcoe-in-search\"\n                                                        kendoTooltip title=\"Phím tắt: Ctrl + Q\">\n                                                        <img src=\"assets/img/barcode.png\" alt=\"Scan barcode\" />\n                                                    </button>\n                                                    <app-barcode [(model)]=\"modelQRCode\" (modelChange)=\"changeQR($event)\" style=\"display: none;\">\n                                                    </app-barcode>\n                                                </div>\n                                                <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                                                    <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                                                </button>\n                                            </div>\n\n                                            \n                                        </div>\n                                    \n                                        <app-grid fxFlex=\"100%\" #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [autoHeight]=\"true\"\n                                            [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" pageSize=\"10\"\n                                            [allowSortDefault]=\"false\" [searchString]=\"timKiemNangCaoObj.SearchString\" [showStt]=\"true\"\n                                            (extEnterChangePage)=\"getThongTinYeuCauTiepNhan($event.Id, $event.PhienXetNghiemId)\" (extDoubleClick)=\"getThongTinYeuCauTiepNhan($event.Id, $event.PhienXetNghiemId)\"\n                                            [urlGetData]=\"urlGetDataDaCapCode\" [urlGetTotalPage]=\"urlGetTotalDaCapCode\">\n                                        </app-grid>\n                                    </div>\n\n                                    \n                                </fieldset>\n                            </kendo-splitter-pane>\n\n                            <kendo-splitter-pane style=\"overflow:initial;\">\n                                <fieldset fxFlex=\"100%\">\n                                    <legend>Thông tin người bệnh</legend>\n                                    <ng-container *ngIf=\"dataYeuCauTiepNhan.YeuCauTiepNhanId != null\">\n                                        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                                            <!-- style=\"background: #e1f5fe;\" -->\n                                            <fieldset fxFlex=\"100%\" class=\"{{(dataYeuCauTiepNhan != null && dataYeuCauTiepNhan.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n                                                <div fxFlex=\"100%\">\n                                                    <ul class=\"inline\">\n                                                        <li>Mã TN:\n                                                            <strong>{{dataYeuCauTiepNhan.MaTiepNhan}}</strong>\n                                                        </li>\n                                                        <li>Mã NB:\n                                                            <strong>{{dataYeuCauTiepNhan.MaBenhNhan}}</strong>\n                                                        </li>\n                                                        <li>Họ tên:\n                                                            <strong>{{dataYeuCauTiepNhan.HoTen}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            Giới tính:\n                                                            <strong>{{dataYeuCauTiepNhan.TenGioiTinh}}</strong>\n                                                        </li>\n                                                        <!-- <li>Tuổi:\n                                                            <strong *ngIf=\"!isDuoi6Tuoi\">{{dataYeuCauTiepNhan.Tuoi}}</strong>\n                                                            <strong *ngIf=\"isDuoi6Tuoi\">{{Duoi6TuoiDisplay}}</strong>\n                                                        </li> -->\n                                                        <li>\n                                                            Năm sinh:\n                                                            <strong>{{dataYeuCauTiepNhan.NamSinhDisplay}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            SĐT:\n                                                            <strong>{{dataYeuCauTiepNhan.SoDienThoai}}</strong>\n                                                        </li>\n                                                        <!-- <li>Dân tộc:\n                                                            <strong>{{dataYeuCauTiepNhan.DanToc}}</strong>\n                                                        </li> -->\n                                                        <li>\n                                                            Địa chỉ:\n                                                            <strong>{{dataYeuCauTiepNhan.DiaChi}}</strong>\n                                                        </li>\n                                                        <!-- <li>\n                                                            Nghề nghiệp:\n                                                            <strong>{{dataYeuCauTiepNhan.NgheNghiep}}</strong>\n                                                        </li> -->\n                                                        <!-- <li>\n                                                            Tuyến khám: <strong style=\"color: green;\">{{dataYeuCauTiepNhan.Tuyen}}</strong>\n                                                        </li> -->\n                                                        <li>\n                                                            Số thẻ BHYT: <strong>{{dataYeuCauTiepNhan.SoTheBHYT}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            Đối tượng: <strong style=\"color: blue;\">{{dataYeuCauTiepNhan.DoiTuong}}</strong>\n                                                        </li>\n                                                        <li>\n                                                            Trả KQ cho người bệnh: <strong>{{dataYeuCauTiepNhan.TraKetQuaChoBenhNhan}}</strong>\n                                                        </li>\n                                                        <li *ngIf=\"dataYeuCauTiepNhan.TenCongTy != null\">\n                                                            Tên công ty: <strong>{{dataYeuCauTiepNhan.TenCongTy}}</strong>\n                                                        </li>\n                                                    </ul>\n                                                </div>\n                                            </fieldset>\n\n                                            <app-combobox fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"pb-0 mt-1\" [model]=\"dataYeuCauTiepNhan.BarcodeNumber\" [required]=\"true\"\n                                                    [modelText]=\"barcodeDisplay\" [queryInfo]=\"queryInfoBarcode\" [bind]=\"true\" [reloadForGrid]=\"true\"\n                                                    label=\"Chọn Barcode\" url=\"Xetnghiem/GetListBarcodeTheoYeuCauTiepNhan\" [disabled]=\"true\">\n                                                </app-combobox>\n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.ChuaNhanMau\">\n                                                <button type=\"button\" class=\"my-3 pt-2\" style=\"height: 2.7em;\" color=\"primary\" mat-raised-button mat-button\n                                                    (click)=\"xuLyXacNhanNhanMau()\">\n                                                    <i class=\"ft-edit mr-2\"></i> Tiếp nhận mẫu</button>\n                                            </ng-container>\n                                            <ng-container *ngIf=\"timKiemNangCaoObj.TrangThai.DaNhanMau\">\n                                                <button type=\"button\" class=\"my-3 pt-2\"\n                                                    style=\"height: 2.7em; color: white; background-color: red; padding-left: 10px\" mat-raised-button\n                                                    (click)=\"xacNhanHuyMauXetNghiem()\">\n                                                    <i class=\"ft-edit mr-2\"></i> Hủy tiếp nhận mẫu\n                                                </button>\n                                            </ng-container>\n\n                                            <app-grid #gridDVDaCapCode [gridColumns]=\"gridDichVuChuaCapColumns\" fxFlex=\"100%\" fxFlex.sm=\"100%\"\n                                                [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n                                                [lazyLoadPage]=\"false\" [allowSortDefault]=\"false\" [autoHeight]=\"true\" [pageable]=\"false\" [showStt]=\"true\"\n                                                searchString=\"{{dataYeuCauTiepNhan.YeuCauTiepNhanId}}\" [autoRefreshDataSource]=\"true\"\n                                                [additionalSearchString]=\"strAdditionalSearchString\" [groups]=\"groups\" [checkboxAble]=\"false\"\n                                                (extOnDataBound)=\"onDataBoundGridChuaCapCode($event)\"\n                                                masterName=\"gridDVDaCapCode\" [urlGetData]=\"urlGetDataDVDaCapCode\" [urlGetTotalPage]=\"urlGetTotalDVDaCapCode\">\n                                            </app-grid>\n                                        </div>\n\n                                        <div class=\"sticky-button-action py-3 text-right\">\n                                            <button type=\"button\" mat-button class=\"mr-2\" (click)=\"huyChonBenhNhan()\">Hủy</button>\n                                        </div>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"dataYeuCauTiepNhan.YeuCauTiepNhanId == null\">\n                                        Chưa chọn người bệnh\n                                    </ng-container>\n                                </fieldset>\n                            </kendo-splitter-pane>\n                        </kendo-splitter>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <input *ngIf=\"kiemTraAnHienGroupDichVu(value)\" type=\"checkbox\" id=\"ckbGroup-{{value}}\" (change)=\"changeCheckNhomDichVu($event, value)\" value=\"true\" class=\"mr-2\"> {{value}}\n</ng-template>\n<ng-template #checkBoxHeaderTemplate let-dataItemParent=\"dataItemParent\">\n    <input type=\"checkbox\" id=\"ckbHeader\" [(ngModel)]=\"isCheckedAll\" (ngModelChange)=\"chonTatCaDichVuTrongGoi($event)\">\n</ng-template>\n<ng-template #checkBoxTemplate let-dataItem>\n    <input *ngIf=\"dataItem.IsActive\" id=\"{{dataItem.Id}}\" type=\"checkbox\" [attr.name]=\"'ckbItem-' + dataItem.Id\"\n        [(ngModel)]=\"dataItem.IsChecked\" (ngModelChange)=\"chonDichVu($event, dataItem)\">\n</ng-template>\n<ng-template #thoiGianChiDinhTemplate let-dataItem>\n    <div class=\"reverse-ellipsis r\">{{dataItem.ThoiGianChiDinhDisplay}}</div>\n</ng-template>\n<ng-template #thoiGianCapCodeTemplate let-dataItem>\n    <div class=\"reverse-ellipsis r\">{{dataItem.NgayLayMauDisplay}}</div>\n</ng-template>\n<ng-template #tenLoaiMauTemplate let-dataItem>\n    <div class=\"reverse-ellipsis r\">{{dataItem.TenLoaiMau}}</div>\n</ng-template>\n<ng-template #trangThaiNhomTemplate let-dataItem>\n    <div style=\"position: relative;\">\n        <span [ngClass]=\"{'': dataItem.TrangThai == 1, \n                'orangeText': dataItem.TrangThai == 2,\n                'blueText': dataItem.TrangThai == 3,\n                'greenText': dataItem.TrangThai == 4 || dataItem.TrangThai == 5}\">\n            {{dataItem.TenTrangThai}}\n        </span>\n    </div>\n</ng-template>\n<ng-template #maTNTemplate let-dataItem>\n    <a (click)=\"getThongTinYeuCauTiepNhan(dataItem.Id, dataItem.PhienXetNghiemId)\">\n        <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTiepNhan}}\">{{dataItem.MaTiepNhan}}\n        </p>\n    </a>\n</ng-template>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.scss": 
        /*!******************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.scss ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline !important;\n}\n\n.sticky-button-action {\n  position: sticky;\n  position: -webkit-sticky;\n  bottom: 0px;\n  background-color: white;\n  border-top: 1px solid #ccc;\n  overflow: hidden;\n  z-index: 10;\n}\n\n.redText {\n  color: red;\n}\n\n.greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n\n.blueText {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1uaGFuLW1hdS94ZXQtbmdoaWVtLW5oYW4tbWF1LWxpc3QvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFx4ZXQtbmdoaWVtXFx4ZXQtbmdoaWVtLW5oYW4tbWF1XFx4ZXQtbmdoaWVtLW5oYW4tbWF1LWxpc3RcXHhldC1uZ2hpZW0tbmhhbi1tYXUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL3hldC1uZ2hpZW0veGV0LW5naGllbS1uaGFuLW1hdS94ZXQtbmdoaWVtLW5oYW4tbWF1LWxpc3QveGV0LW5naGllbS1uaGFuLW1hdS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi94ZXQtbmdoaWVtL3hldC1uZ2hpZW0tbmhhbi1tYXUveGV0LW5naGllbS1uaGFuLW1hdS1saXN0L3hldC1uZ2hpZW0tbmhhbi1tYXUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufSIsImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcbiAgYm9yZGVyOiAxcHggI2UwZTBlMDtcbiAgYm9yZGVyLXN0eWxlOiBpbmhlcml0O1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnN0aWNreS1idXR0b24tYWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnJlZFRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5ibHVlVGV4dCB7XG4gIGNvbG9yOiBibHVlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.ts": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.ts ***!
          \****************************************************************************************************************************/
        /*! exports provided: XetNghiemNhanMauListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemNhanMauListComponent", function () { return XetNghiemNhanMauListComponent; });
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
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
            /* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
            /* harmony import */ var _xet_nghiem_cap_code_xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../xet-nghiem-cap-code/xet-nghiem-cap-code.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.model.ts");
            /* harmony import */ var _xet_nghiem_nhan_mau_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../xet-nghiem-nhan-mau.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.model.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/shared/models/common.model */ "./src/app/shared/models/common.model.ts");
            /* harmony import */ var _lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../lay-mau-xet-nghiem/lay-mau-xet-nghiem.model */ "./src/app/modules/main/xet-nghiem/lay-mau-xet-nghiem/lay-mau-xet-nghiem.model.ts");
            var XetNghiemNhanMauListComponent = /** @class */ (function () {
                function XetNghiemNhanMauListComponent(authService, notificationService, router, route, location, dialog, apiService) {
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.router = router;
                    this.route = route;
                    this.location = location;
                    this.dialog = dialog;
                    this.apiService = apiService;
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
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].NhanMauXetNghiem;
                    this.gridColumns = [];
                    this.isScanF1 = false;
                    this.strAdditionalSearchString = "";
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormControl"]();
                    this.timKiemNangCaoObj = new _xet_nghiem_nhan_mau_model__WEBPACK_IMPORTED_MODULE_26__["XetNghiemNhanMauTimKiem"]();
                    this.baseRoute = "/xet-nghiem/xac-nhan-nhan-mau";
                    this.dataYeuCauTiepNhan = new _xet_nghiem_cap_code_xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_25__["ThongTinYeuCauTiepNhanXetNghiem"]();
                    this.isDuoi6Tuoi = false;
                    this.Duoi6TuoiDisplay = "";
                    this.gridDichVuChuaCapColumns = [];
                    this.groups = [{ field: 'TenNhom', dir: null, aggregates: [] }];
                    this.arrDichVuChon = new Array();
                    this.arrDichVuTatCaDichVu = [];
                    this.arrNhomDichVuDangChon = [];
                    this.isCheckedAll = true;
                    this.isFirstLoad = true;
                    this.barcodeDisplay = null;
                    this.queryInfoBarcode = new src_app_shared_models_common_model__WEBPACK_IMPORTED_MODULE_31__["LookupQueryInfo"]();
                    this.layMauXetNghiemBarcodeQueryInfo = new _lay_mau_xet_nghiem_lay_mau_xet_nghiem_model__WEBPACK_IMPORTED_MODULE_32__["LayMauXetNghiemBarcodeQueryInfo"]();
                    this.urlGetDataDaCapCode = "XetNghiem/GetDataForGridDaCapCode";
                    this.urlGetTotalDaCapCode = "XetNghiem/GetTotalPageForGridDaCapCode";
                    this.urlGetDataDVDaCapCode = "XetNghiem/GetDataForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau";
                    this.urlGetTotalDVDaCapCode = "XetNghiem/GetTotalPageForGridDichVuXetNghiemQuyTrinhCapCodeVaNhanMau";
                }
                XetNghiemNhanMauListComponent.prototype.ngOnInit = function () {
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].NhanMauXetNghiem;
                    var hasLocalSearchString = false;
                    this.queryInfoBarcode.Take = 50;
                    if (this.route.snapshot.queryParams.holdQuery != undefined) {
                        var holdQuery = this.route.snapshot.queryParams.holdQuery;
                        if (holdQuery != null && holdQuery) {
                            var additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_23__["LocalStorageHelper"].getItem("additionalSearchStringXacNhanNhanMauXetNghiem");
                            if (additionalSearchString != null) {
                                this.timKiemNangCaoObj = JSON.parse(additionalSearchString);
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.startDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.startDate);
                                }
                                if (this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != 'null' && this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay != '') {
                                    this.timKiemNangCaoObj.TuNgayDenNgay.endDate = new Date(this.timKiemNangCaoObj.TuNgayDenNgay.endDate);
                                }
                                this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
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
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                        this.gridChild.additionalSearchString = JSON.stringify(this.timKiemNangCaoObj);
                        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_23__["LocalStorageHelper"].removeItem("additionalSearchStringXacNhanNhanMauXetNghiem");
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
                        { Field: "NguoiChiDinh", Title: "Người chỉ định", Width: 120, Sortable: false },
                        { Field: "ThoiGianChiDinh", Title: "Thời gian chỉ định", Width: 80, Sortable: false, Template: this.thoiGianChiDinhTemplate },
                        { Field: "NguoiLayMau", Title: "Người cấp code", Width: 120, Sortable: false },
                        { Field: "ThoiGianCapCode", Title: "Thời gian cấp code", Width: 80, Sortable: false, Template: this.thoiGianCapCodeTemplate },
                        { Field: "TrangThai", Title: "Trạng thái", Width: 100, Sortable: false, Template: this.trangThaiNhomTemplate },
                    ];
                };
                XetNghiemNhanMauListComponent.prototype.searchChanges = function (event) {
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
                XetNghiemNhanMauListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.timKiemNangCao();
                    }
                };
                XetNghiemNhanMauListComponent.prototype.clearSearch = function () {
                    this.timKiemNangCaoObj.SearchString = null;
                    this.gridChild.searchString = null;
                    this.timKiemNangCao();
                };
                XetNghiemNhanMauListComponent.prototype.timKiemNangCao = function () {
                    this.location.replaceState(this.baseRoute + '?holdQuery=true');
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.startDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.startDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.TuNgay = null;
                    }
                    if (this.timKiemNangCaoObj.TuNgayDenNgay != null && this.timKiemNangCaoObj.TuNgayDenNgay.endDate != null) {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__["CommonService"].formatDateTime(this.timKiemNangCaoObj.TuNgayDenNgay.endDate, "mm/dd/yyyy");
                    }
                    else {
                        this.timKiemNangCaoObj.TuNgayDenNgay.DenNgay = null;
                    }
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_23__["LocalStorageHelper"].setItem("additionalSearchStringXacNhanNhanMauXetNghiem", queryString);
                    this.gridChild.search();
                };
                XetNghiemNhanMauListComponent.prototype.QuetMaQRCodeClick = function () {
                    var elementBarcode = document.getElementById("barcodeActive");
                    if (elementBarcode != undefined) {
                        elementBarcode.click();
                    }
                };
                XetNghiemNhanMauListComponent.prototype.changeQR = function (event) {
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
                XetNghiemNhanMauListComponent.prototype.changeValueTinhTrang = function (value) {
                    if (value == 'chuaNhanMau') {
                        this.timKiemNangCaoObj.TrangThai.ChuaNhanMau = true;
                        this.timKiemNangCaoObj.TrangThai.DaNhanMau = false;
                    }
                    else if ('daNhanMau') {
                        this.timKiemNangCaoObj.TrangThai.ChuaNhanMau = false;
                        this.timKiemNangCaoObj.TrangThai.DaNhanMau = true;
                    }
                    this.huyChonBenhNhan();
                };
                XetNghiemNhanMauListComponent.prototype.getAge = function (date_1, date_2) {
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
                XetNghiemNhanMauListComponent.prototype.DaysInMonth = function (date2_UTC) {
                    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
                    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
                    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
                    return monthLength;
                };
                XetNghiemNhanMauListComponent.prototype.showPopupLoadingData = function () {
                    if (this.popupLoadingData == undefined
                        || this.popupLoadingData == null
                        || this.popupLoadingData.openDialogs == undefined
                        || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
                        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"], {
                            disableClose: true,
                            width: "200px",
                            height: "90px",
                            data: { Title: "Đang tải dữ liệu..." },
                        });
                    }
                };
                XetNghiemNhanMauListComponent.prototype.closePopupLoadingData = function () {
                    if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
                        this.popupLoadingData.close();
                    }
                };
                // get thông tin
                XetNghiemNhanMauListComponent.prototype.getThongTinYeuCauTiepNhan = function (yeuCauTiepNhanId, phienXetNghiemId) {
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
                XetNghiemNhanMauListComponent.prototype.huyChonBenhNhan = function (chuyenBenhNhan) {
                    if (chuyenBenhNhan === void 0) { chuyenBenhNhan = false; }
                    this.dataYeuCauTiepNhan = new _xet_nghiem_cap_code_xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_25__["ThongTinYeuCauTiepNhanXetNghiem"]();
                    if (!chuyenBenhNhan) {
                        this.timKiemNangCaoObj.YeuCauTiepNhanId = null;
                        this.timKiemNangCaoObj.PhienXetNghiemId = null;
                    }
                    this.arrDichVuChon = [];
                    this.arrNhomDichVuDangChon = [];
                    this.arrDichVuTatCaDichVu = [];
                    this.isCheckedAll = true;
                    this.isFirstLoad = true;
                    this.timKiemNangCao();
                };
                XetNghiemNhanMauListComponent.prototype.xuLyRefreshQuyeryGridDichVu = function () {
                    this.timKiemNangCaoObj.ThoiDiemHienTai = new Date();
                    var queryString = JSON.stringify(this.timKiemNangCaoObj);
                    src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_23__["LocalStorageHelper"].setItem("additionalSearchStringXacNhanNhanMauXetNghiem", queryString);
                    this.strAdditionalSearchString = queryString;
                };
                // xử lý nhận, hủy nhận mẫu
                XetNghiemNhanMauListComponent.prototype.onDataBoundGridChuaCapCode = function (event) {
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
                XetNghiemNhanMauListComponent.prototype.xuLyCheckDichVu = function (id, tenNhom, checked) {
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
                XetNghiemNhanMauListComponent.prototype.changeCheckNhomDichVu = function (event, tenNhom) {
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
                };
                XetNghiemNhanMauListComponent.prototype.chonTatCaDichVuTrongGoi = function (event) {
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
                        }
                    }
                };
                XetNghiemNhanMauListComponent.prototype.chonDichVu = function (event, dataItem) {
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
                };
                XetNghiemNhanMauListComponent.prototype.xuLyXacNhanNhanMau = function (dataItem) {
                    if (dataItem === void 0) { dataItem = null; }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_28__["SecurityOperation"].Update)) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn xác nhận nhận mẫu này không?" }
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
                                self.apiService.put("XetNghiem/XuLyXacNhanNhanMauDichVuChuaNhanMau", obj).subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].ActionSuccessfully, ["Tiếp nhận mẫu"]));
                                    self.arrDichVuChon = [];
                                    // self.gridDVDaCapCode.search();
                                    self.xuLyRefreshQuyeryGridDichVu();
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
                XetNghiemNhanMauListComponent.prototype.xacNhanHuyMauXetNghiem = function (dataItem) {
                    if (dataItem === void 0) { dataItem = null; }
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_28__["SecurityOperation"].Delete)) {
                        var self = this;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_29__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn hủy nhận mẫu cho dịch vụ đang chọn không?" }
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
                                self.apiService.put("XetNghiem/XuLyXacNhanHuyNhanMauTheoDichVu", obj).subscribe(function (resultData) {
                                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_22__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_30__["SystemMessage"].ActionSuccessfully, ["Hủy tiếp nhận mẫu"]));
                                    self.arrDichVuChon = [];
                                    self.xuLyRefreshQuyeryGridDichVu();
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
                XetNghiemNhanMauListComponent.prototype.kiemTraAnHienGroupDichVu = function (tenNhom) {
                    var arrDichVu = this.arrDichVuTatCaDichVu.filter(function (x) { return x.TenNhom == tenNhom && x.IsActive == true; });
                    return arrDichVu.length > 0;
                };
                return XetNghiemNhanMauListComponent;
            }());
            XetNghiemNhanMauListComponent.ctorParameters = function () { return [
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialog"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_21__["ApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "gridChild", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDVDaCapCode', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_24__["GridComponent"], static: true })
            ], XetNghiemNhanMauListComponent.prototype, "gridDVDaCapCode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenLoaiMauTemplate', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "tenLoaiMauTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianChiDinhTemplate', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "thoiGianChiDinhTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thoiGianCapCodeTemplate', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "thoiGianCapCodeTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxHeaderTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], XetNghiemNhanMauListComponent.prototype, "checkBoxHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkBoxTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: true })
            ], XetNghiemNhanMauListComponent.prototype, "checkBoxTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiNhomTemplate', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "trangThaiNhomTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
            ], XetNghiemNhanMauListComponent.prototype, "maTNTemplate", void 0);
            XetNghiemNhanMauListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-xet-nghiem-nhan-mau-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./xet-nghiem-nhan-mau-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.html")).default,
                    animations: [src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"], src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInUp400ms"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./xet-nghiem-nhan-mau-list.component.scss */ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.scss")).default]
                })
            ], XetNghiemNhanMauListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-routing.module.ts": 
        /*!***************************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-routing.module.ts ***!
          \***************************************************************************************************/
        /*! exports provided: XetNghiemNhanMauRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemNhanMauRoutingModule", function () { return XetNghiemNhanMauRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var _xet_nghiem_nhan_mau_list_xet_nghiem_nhan_mau_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.ts");
            var routes = [
                {
                    path: '',
                    component: _xet_nghiem_nhan_mau_list_xet_nghiem_nhan_mau_list_component__WEBPACK_IMPORTED_MODULE_6__["XetNghiemNhanMauListComponent"],
                    data: {
                        title: 'DS nhận mẫu',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].NhanMauXetNghiem,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                },
            ];
            var XetNghiemNhanMauRoutingModule = /** @class */ (function () {
                function XetNghiemNhanMauRoutingModule() {
                }
                return XetNghiemNhanMauRoutingModule;
            }());
            XetNghiemNhanMauRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], XetNghiemNhanMauRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.model.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.model.ts ***!
          \******************************************************************************************/
        /*! exports provided: XetNghiemNhanMauTimKiem, XetNghiemNhanMauTimKiemTrangThai */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemNhanMauTimKiem", function () { return XetNghiemNhanMauTimKiem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemNhanMauTimKiemTrangThai", function () { return XetNghiemNhanMauTimKiemTrangThai; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _xet_nghiem_cap_code_xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../xet-nghiem-cap-code/xet-nghiem-cap-code.model */ "./src/app/modules/main/xet-nghiem/xet-nghiem-cap-code/xet-nghiem-cap-code.model.ts");
            var XetNghiemNhanMauTimKiem = /** @class */ (function () {
                function XetNghiemNhanMauTimKiem(SearchString, HopDongKhamSucKhoeId, YeuCauTiepNhanId, PhienXetNghiemId, TrangThai, TuNgayDenNgay, ThoiDiemHienTai, SoLuong) {
                    if (SearchString === void 0) { SearchString = null; }
                    if (HopDongKhamSucKhoeId === void 0) { HopDongKhamSucKhoeId = 0; }
                    if (YeuCauTiepNhanId === void 0) { YeuCauTiepNhanId = null; }
                    if (PhienXetNghiemId === void 0) { PhienXetNghiemId = null; }
                    if (TrangThai === void 0) { TrangThai = new XetNghiemNhanMauTimKiemTrangThai(); }
                    if (TuNgayDenNgay === void 0) { TuNgayDenNgay = new _xet_nghiem_cap_code_xet_nghiem_cap_code_model__WEBPACK_IMPORTED_MODULE_1__["XetNghiemCapCodeTimKiemDateRange"](); }
                    if (ThoiDiemHienTai === void 0) { ThoiDiemHienTai = new Date(); }
                    if (SoLuong === void 0) { SoLuong = null; }
                    this.SearchString = SearchString;
                    this.HopDongKhamSucKhoeId = HopDongKhamSucKhoeId;
                    this.YeuCauTiepNhanId = YeuCauTiepNhanId;
                    this.PhienXetNghiemId = PhienXetNghiemId;
                    this.TrangThai = TrangThai;
                    this.TuNgayDenNgay = TuNgayDenNgay;
                    this.ThoiDiemHienTai = ThoiDiemHienTai;
                    this.SoLuong = SoLuong;
                }
                return XetNghiemNhanMauTimKiem;
            }());
            var XetNghiemNhanMauTimKiemTrangThai = /** @class */ (function () {
                function XetNghiemNhanMauTimKiemTrangThai(ChuaNhanMau, DaNhanMau) {
                    if (ChuaNhanMau === void 0) { ChuaNhanMau = true; }
                    if (DaNhanMau === void 0) { DaNhanMau = false; }
                    this.ChuaNhanMau = ChuaNhanMau;
                    this.DaNhanMau = DaNhanMau;
                }
                return XetNghiemNhanMauTimKiemTrangThai;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.module.ts": 
        /*!*******************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.module.ts ***!
          \*******************************************************************************************/
        /*! exports provided: XetNghiemNhanMauModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemNhanMauModule", function () { return XetNghiemNhanMauModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _xet_nghiem_nhan_mau_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xet-nghiem-nhan-mau-routing.module */ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-routing.module.ts");
            /* harmony import */ var _xet_nghiem_nhan_mau_list_xet_nghiem_nhan_mau_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component */ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau-list/xet-nghiem-nhan-mau-list.component.ts");
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
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var _xet_nghiem_nhan_mau_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./xet-nghiem-nhan-mau.service */ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.service.ts");
            var XetNghiemNhanMauModule = /** @class */ (function () {
                function XetNghiemNhanMauModule() {
                }
                return XetNghiemNhanMauModule;
            }());
            XetNghiemNhanMauModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_xet_nghiem_nhan_mau_list_xet_nghiem_nhan_mau_list_component__WEBPACK_IMPORTED_MODULE_4__["XetNghiemNhanMauListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _xet_nghiem_nhan_mau_routing_module__WEBPACK_IMPORTED_MODULE_3__["XetNghiemNhanMauRoutingModule"],
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
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
                    ],
                    providers: [
                        _xet_nghiem_nhan_mau_service__WEBPACK_IMPORTED_MODULE_18__["XetNghiemNhanMauService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_17__["BaseService"], useClass: _xet_nghiem_nhan_mau_service__WEBPACK_IMPORTED_MODULE_18__["XetNghiemNhanMauService"] }
                    ]
                })
            ], XetNghiemNhanMauModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.service.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/xet-nghiem/xet-nghiem-nhan-mau/xet-nghiem-nhan-mau.service.ts ***!
          \********************************************************************************************/
        /*! exports provided: XetNghiemNhanMauService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XetNghiemNhanMauService", function () { return XetNghiemNhanMauService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            var XetNghiemNhanMauService = /** @class */ (function (_super) {
                __extends(XetNghiemNhanMauService, _super);
                function XetNghiemNhanMauService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = "XetNghiem";
                    return _this;
                }
                return XetNghiemNhanMauService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));
            XetNghiemNhanMauService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            XetNghiemNhanMauService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], XetNghiemNhanMauService);
            /***/ 
        })
    }]);
//# sourceMappingURL=xet-nghiem-xet-nghiem-nhan-mau-xet-nghiem-nhan-mau-module-es2015.js.map
//# sourceMappingURL=xet-nghiem-xet-nghiem-nhan-mau-xet-nghiem-nhan-mau-module-es5.js.map
//# sourceMappingURL=xet-nghiem-xet-nghiem-nhan-mau-xet-nghiem-nhan-mau-module-es5.js.map