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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-ton-kho-vat-tu-vat-tu-ton-kho-vat-tu-ton-kho-module"], {
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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.html": 
        /*!***************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.html ***!
          \***************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <div style=\"font: 500 18px/26px var(--font)\">CHI TIẾT VẬT TƯ TỒN KHO</div>\n  <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <app-grid #gridVatTuTonKho [gridColumns]=\"gridColumns\" #gridPopup urlGetData=\"TonKho/GetChiTietTonKhoCuaVatTu\"\n    [useAddDeault]=\"false\" [headerTemplate]=\"headerTemplate\" [gridColumns]=\"gridColumns\" height=\"500\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"true\"\n    (extOnDataBound)=\"extOnDataBound($event)\">\n  </app-grid>\n\n  <ng-template #headerTemplate>\n    <div style=\"border-bottom: 1px solid #ccc;\">\n      <div fxFlex=\"100%\" style=\"margin: 10px 0 0 10px;\">\n        <span>\n          <span style=\"font-weight: bold;\">Kho: </span> <span class=\"red\">{{vatTu.data.kho.TenKho}}</span>\n        </span>\n        <!-- <span style=\"margin-left: 20px;\">\n          <span style=\"font-weight: bold;\">Vật tư: </span> <span class=\"red\">{{vatTu.data.dataItem.TenVatTu}}</span>\n        </span> -->\n\n        <app-combobox [disabled]=\"true\" fxFlex=\"25%\" [(model)]=\"nhapKhoVatTuTonKhoViewModel.VatTuId\" [required]=\"true\"\n          [modelText]=\"nhapKhoVatTuTonKhoViewModel.VatTu\" id=\"VatTuId\" label=\"Tên vật tư\"\n          url=\"TonKho/GetVatTuBenhVien\"\n          [queryInfo]=\"{ParameterDependencies:'{VatTuId:' + nhapKhoVatTuTonKhoViewModel.VatTuId +'}', Take: 50}\"\n          [validationerror]=\"'VatTuId' | validationerror:validationErrors\" [templateHeader]=\"duocPhamTemplateHeader\"\n          [template]=\"duocPhamTemplate\" class=\"item-no-padding\">\n          <ng-template #duocPhamTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n              <tr>\n                <th width=\"40%\">Mã</th>\n                <th>Tên</th>\n              </tr>\n            </table>\n          </ng-template>\n          <ng-template #duocPhamTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n              <tr>\n                <td width=\"40%\">{{dataItem.Ma}}</td>\n                <td>{{dataItem.Ten}}</td>\n              </tr>\n            </table>\n          </ng-template>\n        </app-combobox>\n        <span style=\"margin-left: 20px;\">\n          <span style=\"font-weight: bold;\">Đơn vị tính: </span> <span\n            class=\"red\">{{vatTu.data.dataItem.DonViTinh}}</span>\n        </span>\n      </div>\n    </div>\n  </ng-template>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n  <button mat-button mat-dialog-close (click)=\"close()\">Hủy</button>\n  <!-- <button mat-raised-button mat-button color=\"primary\" (click)=\"luu()\" cdkFocusInitial>Lưu</button> -->\n</mat-dialog-actions>\n\n<ng-template #hanSuSungTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-datepicker [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" required=\"true\" class=\"no-label\" label=\" \" style=\"width: 100%;\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].HanSuDung' | validationerror:validationErrors\"\n    [(model)]=\"dataItem.HanSuDung\">\n  </app-datepicker>\n  <span *ngIf=\"dataItem.Loai !== 1\">{{dataItem.HanSuDungDisplay}}</span>\n\n</ng-template>\n\n<!-- (modelChange)=\"soLuongChange()\" -->\n\n<ng-template #soLuongTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" class=\"no-label\" label=\" \" style=\"width: 100%;\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].SoLuong' | validationerror:validationErrors\"\n    [min]=\"dataItem.SoLuongDaXuat\" [max]=\"999999999\" required=\"true\" [(model)]=\"dataItem.SoLuong\"> </app-textboxnumeric>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.SoLuong | number}}</span>\n</ng-template>\n\n<ng-template #tonFooterTemplate let-dataItem>\n  <p style=\"color: blue; font-weight: bold;\">\n    <span *ngIf=\"tongTonKho==null\">Đang tính tồn....</span>\n    <span *ngIf=\"tongTonKho!=null\">{{tongTonKho}}</span>\n</ng-template>\n\n<ng-template #loaiFooterTemplate let-dataItem>\n  <span>Tồn:</span>\n</ng-template>\n\n<ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n  <span>{{rowIndex+1}}</span>\n</ng-template>\n\n<ng-template #donGiaTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" id=\"donGiaUuDai\" [max]=\"99999999999999999\" class=\"no-label\"\n    [(model)]=\"dataItem.DonGiaNhap\" [min]=\"0\" label=\" \" [decimals]=\"2\" format=\"n2\" [required]=\"true\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].DonGiaNhap' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n</ng-template>\n\n<ng-template #vATTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"!dataItem.LaVatTuBHYT && dataItem.Loai === 1\" class=\"no-label\" [step]=\"1\" label=\" \"\n    style=\"width: 100%;\" [max]=\"999\" [min]=\"0\" required=\"true\" [(model)]=\"dataItem.VAT\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].VAT' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n\n  <span *ngIf=\"dataItem.LaVatTuBHYT\"> {{dataItem.VAT}}</span>\n</ng-template>\n\n<ng-template #tiLeBHYTThanhToanTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.LaVatTuBHYT && dataItem.Loai === 1\" class=\"no-label\" [step]=\"1\" label=\" \"\n    style=\"width: 100%;\" [max]=\"100\" [min]=\"1\" required=\"true\" [(model)]=\"dataItem.TiLeBHYTThanhToan\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].TiLeBHYTThanhToan' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n\n  <span *ngIf=\"!dataItem.LaVatTuBHYT\"> {{dataItem.TiLeBHYTThanhToan}}</span>\n</ng-template>\n\n<ng-template #maRefTemplate let-dataItem>\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" [(model)]=\"dataItem.MaRef\" maxlength=\"200\" label=\" \" class=\"no-label\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.MaRef}}</span>\n</ng-template>\n\n<ng-template #maVachTemplate let-dataItem>\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" [(model)]=\"dataItem.MaVach\" maxlength=\"100\" label=\" \" class=\"no-label\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.MaVach}}</span>\n</ng-template>\n\n<ng-template #soLoTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" required=\"true\" [(model)]=\"dataItem.SoLo\" maxlength=\"50\" label=\" \"\n    class=\"no-label\" [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].SoLo' | validationerror:validationErrors\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.SoLo}}</span>\n</ng-template>\n\n<ng-template #maChungTuTemplate let-dataItem>\n  <a *ngIf=\"dataItem.ThongTinBooking!=null && dataItem.ThongTinBooking!=''\"  kendoTooltip title=\"{{dataItem.ThongTinBooking}}\">{{dataItem.MaChungTu}}</a>\n  <span *ngIf=\"dataItem.ThongTinBooking==null || dataItem.ThongTinBooking==''\">{{dataItem.MaChungTu}}</span>\n</ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.html": 
        /*!*************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.html ***!
          \*************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-grid #gridPopup\n        [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetPages\" [additionalSearchString]=\"defaultAdditionalSearchString\"\n        [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [headerTemplate]=\"headerTemplate\" [sort]=\"sortConfig\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [showStt]=\"true\">\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n            <div fxFlex=\"87%\" style=\"margin: 10px 0 0 10px;\">\n                <span>\n                    <span style=\"font-weight: bold;\">Kho: </span> <span *ngIf=\"chiTietModel != null && chiTietModel != undefined\">{{chiTietModel.KhoDisplay}}</span>\n                </span>\n                <span style=\"margin-left: 20px;\">\n                    <span style=\"font-weight: bold;\">Vật tư: </span> <span *ngIf=\"chiTietModel != null && chiTietModel != undefined\">{{chiTietModel.TenVatTu}}</span>\n                </span>\n            </div>\n            <div class=\"text-right\" fxFlex=\"13%\" style=\"margin: 5px;\">\n                <!-- <button (click)=\"exportExcelTonKhoNhapXuatChiTiet()\" type=\"button\" color=\"primary\" \n                    mat-raised-button mat-button>Xuất excel\n                </button> -->\n                <button (click)=\"excelexport.save()\" type=\"button\" color=\"primary\" \n                    mat-raised-button mat-button>Xuất excel\n                </button>\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #nhapTemplate let-dataItem>\n        <p>{{dataItem.NhapDisplay}}</p>\n    </ng-template>\n    \n    <ng-template #xuatTemplate let-dataItem>\n        <p>{{dataItem.XuatDisplay}}</p>\n    </ng-template>\n    \n    <ng-template #tonTemplate let-dataItem>\n        <p>{{dataItem.TonDisplay}}</p>\n    </ng-template>\n\n    <ng-template #ngayTemplate let-dataItem>\n        <p>{{dataItem.NgayDisplay}}</p>\n    </ng-template>\n</div>\n\n\n<kendo-excelexport [group]=\"group\" [data]=\"dataExportExcel\" [collapsible]=\"true\" fileName=\"VatTuTonKhoNhapXuatChiTiet.xlsx\" #excelexport>\n    <kendo-excelexport-column field=\"STT\" [locked]=\"true\" title=\"STT\" [width]=\"50\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"NgayDisplay\" title=\"Ngày\" [width]=\"200\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"MaChungTu\" title=\"Mã chứng từ\" width=\"150\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"Nhap\" title=\"Nhập\" width=\"100\">\n    </kendo-excelexport-column> \n    <kendo-excelexport-column field=\"Xuat\" title=\"Xuất\" width=\"100\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"Ton\" title=\"Tồn\" width=\"100\">\n    </kendo-excelexport-column>\n\n    <kendo-excelexport-column field=\"ChiTiet\" [hidden]=\"true\">\n        <ng-template kendoExcelExportGroupHeaderTemplate let-value=\"value\">\n           Kho: {{value.kho}} - Vật tư: {{value.vatTu}}\n        </ng-template>\n    </kendo-excelexport-column>\n\n</kendo-excelexport>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    { Title: 'Thống Kê', Path:'' },\n                    { Title: 'Vật Tư', Path:'' },\n                    { Title: 'Tồn Kho', Path:'/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho', Active: true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <kendo-tabstrip fxFlex=\"100%\" class=\" card -mt-15\" (tabSelect)=\"onTabSelect($event)\">\n            <kendo-tabstrip-tab [title]=\"'Cảnh Báo Tồn Kho'\" [selected]=\"tabCanhBaoTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #canhBaoTonKhoGrid heightToolbar=\"190\" [urlGetData]=\"vatTuTonKhoCanhBaoDataUrl\"\n                            [urlGetTotalPage]=\"vatTuTonKhoCanhBaoPagesUrl\" [gridColumns]=\"gridColumnsCanhBaoTonKho\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"true\" [headerTemplate]=\"headerTemplate\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringCanhBaoTonKho\" [showStt]=\"true\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGrid($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n            <kendo-tabstrip-tab [title]=\"\" [selected]=\"tabTongHopTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #tongHopTonKhoGrid heightToolbar=\"190\" [urlGetData]=\"vatTuTonKhoTongHopDataUrl\"\n                            [urlGetTotalPage]=\"vatTuTonKhoTongHopPagesUrl\" [gridColumns]=\"gridColumnsTongHopTonKho\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                            [headerTemplate]=\"headerTongHopTonKhoTemplate\" [showStt]=\"true\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringTongHopTonKho\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGridTongHopTonKho($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n                <ng-template kendoTabTitle>\n                    <span>\n                        Tổng hợp tồn kho <span style=\"color:red;font-weight: bold;text-align: center;\">Khả dụng</span>\n                    </span>\n                </ng-template>\n            </kendo-tabstrip-tab>\n\n            <kendo-tabstrip-tab [title]=\"'Nhập xuất tồn kho'\" [selected]=\"tabNhapXuatTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #nhapXuatTonKhoGrid heightToolbar=\"190\" [urlGetData]=\"vatTuTonKhoNhapXuatDataUrl\"\n                            [urlGetTotalPage]=\"vatTuTonKhoNhapXuatPagesUrl\" [gridColumns]=\"gridColumnsNhapXuatTonKho\"\n                            [groups]=\"groups\" [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                            [headerTemplate]=\"headerNhapXuatTonKhoTemplate\" [showStt]=\"true\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringNhapXuatTonKho\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGridNhapXuatTonKho($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n        </kendo-tabstrip>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #soLuongTonTemplate let-dataItem>\n    {{dataItem.SoLuongTonDisplay}}\n</ng-template>\n\n<ng-template #tinhTrangCanhBaoTemplate let-dataItem>\n    <span style=\"color: #f44336;\" *ngIf=\"dataItem.CanhBao=='Hết tồn kho'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n    <span style=\"color: #673ab7;\" *ngIf=\"dataItem.CanhBao=='Tồn kho quá nhiều'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n    <span style=\"color: #ff9800;\" *ngIf=\"dataItem.CanhBao=='Sắp hết tồn kho'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanHienThi}}\n    </span>\n</ng-template>\n\n<ng-template #tonDauKyTemplate let-dataItem>\n    <p>{{dataItem.TonDauKyDisplay}}</p>\n</ng-template>\n\n<ng-template #nhapTrongKyTemplate let-dataItem>\n    <p>{{dataItem.NhapTrongKyDisplay}}</p>\n</ng-template>\n\n<ng-template #xuatTrongKyTemplate let-dataItem>\n    <p>{{dataItem.XuatTrongKyDisplay}}</p>\n</ng-template>\n\n<ng-template #tonCuoiKyTemplate let-dataItem>\n    <p>{{dataItem.TonCuoiKyDisplay}}</p>\n</ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #theKhoTemplate let-dataItem>\n    <button (click)=\"xemChiTietNhapXuatTonKho(dataItem.Id)\" type=\"button\" color=\"primary\" style=\"text-align: center;\"\n        mat-raised-button mat-button>Xem\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"Kho\" fxFlex=\"300px\" fxFlex.sm=\"auto\" label=\"Chọn Kho\" url=\"TonKho/GetKhoVatTus\"\n                popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\" [(model)]=\"searchInfo.KhoId\"\n                [autoSelectFirstItem]=\"true\" [bind]=\"true\" [modelText]=\"searchInfo.TenKho\"\n                (selectionChange)=\"KhoChange($event)\">\n            </app-combobox>\n\n            <app-combobox id=\"CanhBao\" fxFlex=\"300px\" fxFlex.sm=\"auto\" [(model)]=\"searchInfo.CanhBaoId\"\n                (selectionChange)=\"CanhBaoChange($event)\" [modelText]=\"searchInfo.LoaiCanhBao\" label=\"Cảnh báo\"\n                url=\"TonKho/GetCanhBao\" popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\">\n            </app-combobox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\"\n                    placeholder=\"{{searchPlaceHolder}}\" [formControl]=\"searchCtrl\" [(ngModel)]=\"searchInfo.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChange()\" />\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcel()\" type=\"button\" color=\"primary\" [disabled]=\"!isExistData\" mat-raised-button\n                mat-button>Xuất Excel</button>\n            <button (click)=\"xemBaoCao()\" type=\"button\" color=\"primary\" [disabled]=\"!isExistData\" class=\"ml-1\"\n                mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!isExistData\" type=\"PDF\" typeSize=\"{{printSize}}\"\n                [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\" [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n<ng-template #headerTongHopTonKhoTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"KhoVatTuTongHop\" fxFlex=\"300px\" fxFlex.sm=\"auto\" label=\"Chọn Kho\"\n                url=\"TonKho/GetKhoVatTus\" popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\"\n                [autoSelectFirstItem]=\"true\" [(model)]=\"searchInfoTongHopTonKho.KhoId\"\n                [modelText]=\"searchInfoTongHopTonKho.TenKho\" [bind]=\"true\"\n                (modelChange)=\"KhoTonKhoChange($event)\" (selectionChange)=\"KhoChangeTongHopTonKho($event)\">\n            </app-combobox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\"\n                    placeholder=\"{{searchPlaceHolder}}\" [formControl]=\"searchCtrl\"\n                    [(ngModel)]=\"searchInfoTongHopTonKho.SearchString\" (keyup)=\"onKeyTongHopTonKho($event)\"\n                    (ngModelChange)=\"searchChangeTongHopTonKho()\" />\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelTonKhoTongHop()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataTongHopTonKho\" mat-raised-button mat-button>Xuất Excel</button>\n            <button (click)=\"xemBaoCaoTonKhoTongHop()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataTongHopTonKho\" class=\"ml-1\" mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!isExistDataTongHopTonKho\" type=\"PDF\"\n                typeSize=\"{{printSize}}\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\"\n                [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #headerNhapXuatTonKhoTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"KhoVatTuNhapXuat\" fxFlex=\"300px\" fxFlex.sm=\"auto\"\n                [(model)]=\"searchInfoNhapXuatTonKho.KhoId\" (selectionChange)=\"KhoChangeNhapXuatTonKho($event)\"\n                [autoSelectFirstItem]=\"true\" [modelText]=\"searchInfoNhapXuatTonKho.TenKho\" label=\"Chọn Kho\"\n                url=\"TonKho/GetKhoVatTus\" [bind]=\"true\" popupSettings=\"\" class=\"mt-1 on-header\"\n                style=\"margin-left: 5px;\">\n            </app-combobox>\n\n            <app-daterangepicker style=\"margin-left: 5px;\" id=\"Daterange\" fxFlex=\"300px\" fxFlex.sm=\"auto\"\n                [(model)]=\"searchInfoNhapXuatTonKho.RangeDate\" label=\"Từ ngày - Đến ngày\"\n                (keyup)=\"onKeyNhapXuatTonKho($event)\" (modelChange)=\"changDateRangeNhapXuatTonKho($event)\"\n                class=\"mt-1 on-header\">\n            </app-daterangepicker>\n\n            <div class=\"bg-card rounded-full border px-4\" style=\"margin-left: 20px;\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n                fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px; margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                    placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"Description\"\n                    [(ngModel)]=\"searchInfoNhapXuatTonKho.SearchString\" (keyup)=\"onKeyNhapXuatTonKho($event)\"\n                    (ngModelChange)=\"searchChangeNhapXuatTonKho()\" />\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelTonKhoNhapXuat()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataNhapXuatTonKho\" mat-raised-button mat-button>Xuất Excel</button>\n            <button (click)=\"xemBaoCaoTonKhoNhapXuat()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataNhapXuatTonKho\" class=\"ml-1\" mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!isExistDataNhapXuatTonKho\" type=\"PDF\"\n                typeSize=\"{{printSize}}\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\"\n                [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n<ng-template #actionTongHopTonKhoTemplate let-dataItem>\n    <button *ngIf=\"searchInfoTongHopTonKho.KhoId!=null&&searchInfoTongHopTonKho.KhoId>0\" (click)=\"suaTonKho(dataItem)\"\n        type=\"button\" color=\"primary\" style=\"text-align: center;\" mat-raised-button mat-button>Chi tiết tồn kho\n    </button>\n</ng-template>\n<ng-template #templateHeaderTemplate let-column=\"column\" let-columnIndex=\"columnIndex\">\n    SỐ LƯỢNG TỒN <span style=\"color: red;\"> KHẢ DỤNG</span>\n</ng-template>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.html": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.html ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n    \n    </div>\n\n    <div class=\"showPdf\" >\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading==true\">\n            <h4 class=\"mb-3\">Đang load dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n</mat-dialog-content>\n\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" class=\"float-right\" fxLayoutGap=\"8px\">\n    <!-- <button mat-raised-button mat-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>In</button> -->\n    <app-print-form fxFlex='100%'  textPrint=\"In Báo Cáo\" type=\"PDF\" typeSize=\"{{printSize}}\"\n        [typeLayout]=\"printLayout\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.scss": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.scss ***!
          \*************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3N1YS12YXQtdHUtdG9uLWtoby1wb3B1cC9zdWEtdmF0LXR1LXRvbi1raG8tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts ***!
          \***********************************************************************************************************************************/
        /*! exports provided: SuaVatTuTonKhoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuaVatTuTonKhoPopupComponent", function () { return SuaVatTuTonKhoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            var SuaVatTuTonKhoPopupComponent = /** @class */ (function () {
                function SuaVatTuTonKhoPopupComponent(data, sanitizer, cdRef, dialogRef, authService, apiService, dialog, notificationService) {
                    this.data = data;
                    this.sanitizer = sanitizer;
                    this.cdRef = cdRef;
                    this.dialogRef = dialogRef;
                    this.authService = authService;
                    this.apiService = apiService;
                    this.dialog = dialog;
                    this.notificationService = notificationService;
                    this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default.a;
                    // validationErrors: any;
                    this.validationErrors = [];
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__["DocumentType"].CapNhatVatTuTonKho;
                    this.tongTon = 0;
                    this.tongTonKho = null;
                    this.capNhatTonKhoItem = {};
                    this.nhapKhoVatTuTonKhoViewModel = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_6__["NhapKhoVatTuTonKhoViewModel"]();
                    this.gridColumns = [];
                    this.vatTu = data;
                    console.log(this.vatTu);
                }
                SuaVatTuTonKhoPopupComponent.prototype.ngOnInit = function () {
                    var queryString = "{\"KhoId\":" + this.vatTu.data.kho.KhoId + ",\"VatTuId\":" + this.vatTu.data.dataItem.Id + "}";
                    this.gridPopup.additionalSearchString = queryString;
                    this.nhapKhoVatTuTonKhoViewModel.VatTuId = this.vatTu.data.dataItem.Id;
                    this.nhapKhoVatTuTonKhoViewModel.VatTu = this.vatTu.data.dataItem.TenVatTu;
                    this.gridColumns = [
                        { Field: "STT", Title: "STT", Width: 50, Sortable: false, Template: this.sttTemplate },
                        { Field: "NgayDisplay", Title: "Ngày", Width: 50, Sortable: true, ShowTooltip: true },
                        { Field: "MaChungTu", Title: "Mã chứng từ", Width: 60, Sortable: false, ShowTooltip: true, Template: this.maChungTuTemplate },
                        { Field: "LoaiSuDung", Title: "loại sử dụng", Width: 60, Sortable: false },
                        { Field: "SoLo", Title: "SỐ lô", Width: 50, Sortable: false, ShowTooltip: true, Template: this.soLoTemplate, },
                        { Field: "HanSuDung", Title: "Hạn sử dụng", Width: 120, Template: this.hanSuSungTemplate },
                        { Field: "MaRef", Title: "mã ref", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maRefTemplate, },
                        { Field: "MaVach", Title: "mã vạch", Width: 80, Sortable: false, ShowTooltip: true, Template: this.maVachTemplate, },
                        { Field: "DonGiaNhap", Title: "giá nhập", Width: 100, Sortable: false, Template: this.donGiaTemplate, },
                        { Field: "VAT", Title: "VAT", Width: 50, Sortable: false, ShowTooltip: true, Template: this.vATTemplate, },
                        { Field: "TiLeBHYTThanhToan", Title: "tl bảo hiểm thanh toán", Width: 50, Sortable: false, ShowTooltip: true, Template: this.tiLeBHYTThanhToanTemplate, },
                        { Field: "LoaiDisplay", Title: "Loại", Width: 40, Sortable: false, TemplateFooter: this.loaiFooterTemplate },
                        { Field: "SoLuong", Title: "Số lượng", Width: 100, Sortable: false, Template: this.soLuongTemplate, TemplateFooter: this.tonFooterTemplate },
                        { Field: "SoLuongDaXuat", Title: "SL đã xuất", Width: 80, Sortable: false },
                    ];
                };
                SuaVatTuTonKhoPopupComponent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                SuaVatTuTonKhoPopupComponent.prototype.luu = function () {
                    var _this = this;
                    var lstDataVatTuChiTietCurrent = this.gridVatTuTonKho.getAllDataFromDatasource();
                    this.nhapKhoVatTuTonKhoViewModel.NhapKhoVatTuChiTiets = lstDataVatTuChiTietCurrent;
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ['Lưu']) }
                    }).afterClosed().subscribe(function (result) {
                        if (result == 'Yes') {
                            _this.validationErrors = [];
                            _this.cdRef.detectChanges();
                            // this.nhapKhoVatTuTonKhoViewModel.Id = this.vatTu.data.dataItem.Id;
                            if (_this.authService.hasPermission(_this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                                _this.apiService.post("TonKho/CapNhatChiTietVatTuTonKho", _this.nhapKhoVatTuTonKhoViewModel).subscribe(function () {
                                    _this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Cập nhật tồn kho"]));
                                    //this.dialogRef.close();
                                    _this.gridVatTuTonKho.search();
                                    //this.getTongTonKhoCuaVatTu();
                                }, function (err) {
                                    _this.validationErrors = err.ValidationErrors;
                                    if (err.Message != "Validation Failed") {
                                        _this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                            else {
                                _this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                            }
                        }
                    });
                };
                SuaVatTuTonKhoPopupComponent.prototype.totalTon = function () {
                    return this.gridPopup._gridDataSource == undefined ? 0 : this.gridPopup._gridDataSource.data.reduce(function (sum, item) { return sum + (item.Loai == 1 ? item.SoLuong - item.SoLuongDaXuat : 0); }, 0);
                };
                ;
                SuaVatTuTonKhoPopupComponent.prototype.extOnDataBound = function (dataItem) {
                    // dataItem.Data.forEach(element => {
                    //   if (element.Loai == 1) {
                    //     this.tongTon += element.SoLuong - element.SoLuongDaXuat;
                    //   }
                    // });
                    this.getTongTonKhoCuaVatTu();
                };
                SuaVatTuTonKhoPopupComponent.prototype.getTongTonKhoCuaVatTu = function () {
                    var _this = this;
                    this.tongTonKho = null;
                    this.apiService.post('TonKho/GetTongTonKhoCuaVatTu', this.gridVatTuTonKho._gridQueryInfo).subscribe(function (resultData) {
                        _this.tongTonKho = resultData;
                    });
                };
                SuaVatTuTonKhoPopupComponent.prototype.soLuongChange = function () {
                    // let lstDataVatTuChiTietCurrent = this.gridVatTuTonKho.getAllDataFromDatasource();
                    // this.tongTon = 0;
                    // lstDataVatTuChiTietCurrent.forEach(element => {
                    //   if (element.Loai == 1) {
                    //     this.tongTon += element.SoLuong - element.SoLuongDaXuat;
                    //   }
                    // });
                };
                return SuaVatTuTonKhoPopupComponent;
            }());
            SuaVatTuTonKhoPopupComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridVatTuTonKho', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "gridVatTuTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPopup', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "gridPopup", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hanSuSungTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "hanSuSungTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "soLuongTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiFooterTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "loaiFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tonFooterTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "tonFooterTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "donGiaTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vATTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "vATTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tiLeBHYTThanhToanTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "tiLeBHYTThanhToanTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maRefTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "maRefTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maVachTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "maVachTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLoTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "soLoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "sttTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maChungTuTemplate', { static: true })
            ], SuaVatTuTonKhoPopupComponent.prototype, "maChungTuTemplate", void 0);
            SuaVatTuTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sua-vat-tu-ton-kho-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sua-vat-tu-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sua-vat-tu-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], SuaVatTuTonKhoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.scss": 
        /*!***********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.scss ***!
          \***********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3ZhdC10dS10b24ta2hvLWNoaS10aWV0L3ZhdC10dS10b24ta2hvLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.ts": 
        /*!*********************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.ts ***!
          \*********************************************************************************************************************************/
        /*! exports provided: VatTuTonKhoChiTietComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoChiTietComponent", function () { return VatTuTonKhoChiTietComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");
            /* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            var VatTuTonKhoChiTietComponent = /** @class */ (function () {
                function VatTuTonKhoChiTietComponent(data, dialogRef, dialog, cd, apiService, authService, notificationService) {
                    this.data = data;
                    this.dialogRef = dialogRef;
                    this.dialog = dialog;
                    this.cd = cd;
                    this.apiService = apiService;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].VatTuTonKho;
                    this.gridColumns = [];
                    this.sortConfig = [{
                            field: 'Ngay',
                            dir: 'asc'
                        }];
                    this.defaultAdditionalSearchString = '{"KhoId":0,"VatTuId":0,"Sort":null}';
                    this.urlGetData = 'TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietForGridAsync';
                    this.urlGetPages = 'TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietPagesForGridAsync';
                    this.model = data.Model;
                }
                VatTuTonKhoChiTietComponent.prototype.ngOnInit = function () {
                    this.getQueryString();
                    this.getChiTiet(this.model.KhoId, this.model.VatTuId);
                    this.gridColumns = [
                        { Field: "Ngay", Title: "Ngày", Width: 100, Sortable: true, Template: this.ngayTemplate },
                        { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true },
                        { Field: "Nhap", Title: "Nhập", Width: 100, Sortable: true, Template: this.nhapTemplate },
                        { Field: "Xuat", Title: "Xuất", Width: 100, Sortable: true, Template: this.xuatTemplate },
                        { Field: "Ton", Title: "Tồn", Width: 100, Sortable: true, Template: this.tonTemplate },
                    ];
                };
                VatTuTonKhoChiTietComponent.prototype.getQueryString = function () {
                    var KhoQueryString = this.model.KhoId;
                    var VatTuQueryString = this.model.VatTuId;
                    // let RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.model.RangeDate.startDate) + "\""  + ",\"DenNgay\":" + "\""  + this.ConvertDateTime(this.model.RangeDate.endDate) + "\""  + "}";
                    var RangeDateQueryString = "";
                    RangeDateQueryString += this.model.RangeDate.startDate ? '{"TuNgay":' + '"' + this.ConvertDateTime(this.model.RangeDate.startDate) + '"' : '{"TuNgay":' + null;
                    RangeDateQueryString += this.model.RangeDate.endDate ? ',"DenNgay":' + '"' + this.ConvertDateTime(this.model.RangeDate.endDate) + '"' + '}' : ',"DenNgay":' + null + '}';
                    var SortQueryString = null;
                    if (this.gridPopup) {
                        SortQueryString = JSON.stringify(this.gridPopup.sort);
                    }
                    var queryString = "{\"KhoId\":" + KhoQueryString + ",\"VatTuId\":" + VatTuQueryString + ",\"Sort\":" + SortQueryString + ",\"RangeDate\":" + RangeDateQueryString + "}";
                    this.defaultAdditionalSearchString = queryString;
                    this.addData(queryString);
                };
                VatTuTonKhoChiTietComponent.prototype.addData = function (queryString) {
                    var _this = this;
                    // this.aggregates = [{
                    // 	field: 'UnitPrice',
                    // 	aggregate: 'sum'
                    // }];
                    // this.group = [{
                    // 	field: 'Discontinued',
                    // 	aggregates: this.aggregates
                    // }];
                    var model = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_4__["QueryInfo"]();
                    model.AdditionalSearchString = queryString;
                    model.Sort = this.gridPopup.sort ? this.gridPopup.sort : this.sortConfig;
                    // model.Sort = this.gridPopup.sort;
                    this.apiService.post("TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietForGridAsync/", model).subscribe(function (resultData) {
                        if (resultData) {
                            _this.dataExportExcel = resultData.Data;
                            _this.dataExportExcel.forEach(function (element) {
                                element.ChiTiet = { kho: _this.chiTietModel.KhoDisplay, vatTu: _this.chiTietModel.TenVatTu };
                            });
                            // this.group = [{
                            // 	field: 'ChiTiet'
                            // }];
                            _this.dataExportExcel = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__["process"])(_this.dataExportExcel, {
                            // group: this.group
                            }).data;
                        }
                    });
                };
                VatTuTonKhoChiTietComponent.prototype.getChiTiet = function (khoId, vatTuId) {
                    var _this = this;
                    this.chiTietModel = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_4__["ChiTietVatTuTonKhoNhapXuat"]();
                    this.chiTietModel.VatTuId = vatTuId;
                    this.chiTietModel.KhoId = khoId;
                    this.apiService.post("TonKho/GetVatTuAndKhoName/", this.chiTietModel).subscribe(function (resultData) {
                        if (resultData != null) {
                            _this.chiTietModel = resultData;
                            if (!_this.chiTietModel.KhoDisplay || _this.chiTietModel.KhoDisplay == "") {
                                _this.chiTietModel.KhoDisplay = "Tất cả";
                            }
                        }
                    });
                };
                VatTuTonKhoChiTietComponent.prototype.ConvertDateTime = function (datime) {
                    var date = new Date(datime);
                    var year = date.getFullYear();
                    var rawMonth = parseInt(String(date.getMonth())) + 1;
                    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
                    var rawDay = parseInt(String(date.getDate()));
                    var day = rawDay < 10 ? '0' + rawDay : rawDay;
                    return year + '-' + month + '-' + day;
                };
                return VatTuTonKhoChiTietComponent;
            }());
            VatTuTonKhoChiTietComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridPopup', { static: true })
            ], VatTuTonKhoChiTietComponent.prototype, "gridPopup", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhapTemplate', { static: true })
            ], VatTuTonKhoChiTietComponent.prototype, "nhapTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xuatTemplate', { static: true })
            ], VatTuTonKhoChiTietComponent.prototype, "xuatTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tonTemplate', { static: true })
            ], VatTuTonKhoChiTietComponent.prototype, "tonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTemplate', { static: true })
            ], VatTuTonKhoChiTietComponent.prototype, "ngayTemplate", void 0);
            VatTuTonKhoChiTietComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-ton-kho-chi-tiet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-ton-kho-chi-tiet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-ton-kho-chi-tiet.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], VatTuTonKhoChiTietComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.scss": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.scss ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".k-tabstrip > .k-content {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vdG9uLWtoby92YXQtdHUvdmF0LXR1LXRvbi1raG8vdmF0LXR1LXRvbi1raG8tbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXHRvbi1raG9cXHZhdC10dVxcdmF0LXR1LXRvbi1raG9cXHZhdC10dS10b24ta2hvLWxpc3RcXHZhdC10dS10b24ta2hvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3ZhdC10dS10b24ta2hvLWxpc3QvdmF0LXR1LXRvbi1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby90b24ta2hvL3ZhdC10dS92YXQtdHUtdG9uLWtoby92YXQtdHUtdG9uLWtoby1saXN0L3ZhdC10dS10b24ta2hvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay10YWJzdHJpcCA+IC5rLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59IiwiLmstdGFic3RyaXAgPiAuay1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: VatTuTonKhoListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoListComponent", function () { return VatTuTonKhoListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.ts");
            /* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
            /* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
            /* harmony import */ var _vat_tu_ton_kho_chi_tiet_vat_tu_ton_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.ts");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
            /* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
            /* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
            /* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
            /* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
            /* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
            /* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
            /* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22__);
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
            /* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/ __webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23__);
            /* harmony import */ var _sua_vat_tu_ton_kho_popup_sua_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts");
            var VatTuTonKhoListComponent = /** @class */ (function () {
                function VatTuTonKhoListComponent(dialog, authService, notificationService, apiService, cd) {
                    this.dialog = dialog;
                    this.authService = authService;
                    this.notificationService = notificationService;
                    this.apiService = apiService;
                    this.cd = cd;
                    this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].VatTuTonKho;
                    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
                    this.isExistData = true;
                    this.isExistDataTongHopTonKho = true;
                    this.isExistDataNhapXuatTonKho = true;
                    this.defaultAdditionalSearchStringCanhBaoTonKho = '{"KhoId":0,"SearchString":null,"CanhBao":"Tất cả","Sort":null}';
                    this.defaultAdditionalSearchStringTongHopTonKho = '{"KhoId":0,"SearchString":null,"Sort":null}';
                    this.defaultAdditionalSearchStringNhapXuatTonKho = '{"KhoId":0,"SearchString":null,"RangeDate":{"TuNgay":null,"DenNgay":null},"Sort":null}';
                    this.tabCanhBaoTonKhoEnabled = true;
                    this.tabTongHopTonKhoEnabled = false;
                    this.tabNhapXuatTonKhoEnabled = false;
                    this.printLayout = 'Portrait';
                    this.printSize = 'A4';
                    this.vatTuTonKhoCanhBaoDataUrl = 'TonKho/GetDanhSachVatTuTonKhoCanhBaoForGridAsync';
                    this.vatTuTonKhoCanhBaoPagesUrl = 'TonKho/GetTotalVatTuTonKhoCanhBaoPagesForGridAsync';
                    this.vatTuTonKhoTongHopDataUrl = 'TonKho/GetDanhSachVatTuTonKhoTongHopForGridAsync';
                    this.vatTuTonKhoTongHopPagesUrl = 'TonKho/GetTotalVatTuTonKhoTongHopPagesForGridAsync';
                    this.vatTuTonKhoNhapXuatDataUrl = 'TonKho/GetDanhSachVatTuTonKhoNhapXuatForGridAsync';
                    this.vatTuTonKhoNhapXuatPagesUrl = 'TonKho/GetTotalVatTuTonKhoNhapXuatPagesForGridAsync';
                    this.gridColumnsCanhBaoTonKho = [];
                    this.gridColumnsTongHopTonKho = [];
                    this.gridColumnsNhapXuatTonKho = [];
                    this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23___default.a;
                    this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default.a;
                    this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18___default.a;
                    this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19___default.a;
                    this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20___default.a;
                    this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21___default.a;
                    this.icBlock = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default.a;
                    this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16___default.a;
                    this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22___default.a;
                    this.searchPlaceHolder = "Tìm kiếm theo tên vật tư...";
                    this.groups = [{ field: 'TenNhomVatTu' }];
                    this.confrim = null;
                }
                VatTuTonKhoListComponent.prototype.ngOnInit = function () {
                    this.searchInfo = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["SearchVatTuTonKhoCanhBao"]();
                    this.searchInfoTongHopTonKho = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["SearchVatTuTonKhoTongHop"]();
                    this.searchInfoNhapXuatTonKho = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["SearchVatTuTonKhoNhapXuat"]();
                    // this.getFirstKho();
                    this.gridColumnsCanhBaoTonKho = [
                        { Field: 'TenVatTu', Title: 'Vật tư', Width: 300, Sortable: true },
                        { Field: 'DonViTinh', Title: 'Đơn vị tính', Width: 120, Sortable: true },
                        { Field: 'SoLuongTon', Title: 'Số lượng tồn', Width: 150, Sortable: true, Template: this.soLuongTonTemplate },
                        { Field: 'CanhBao', Title: 'Cảnh báo', Width: 120, Sortable: true, Template: this.tinhTrangCanhBaoTemplate }
                    ];
                    this.gridColumnsTongHopTonKho = [
                        { Field: 'TenVatTu', Title: 'Vật tư', Width: 300, Sortable: true },
                        { Field: 'DonViTinh', Title: 'Đơn vị tính', Width: 120, Sortable: true },
                        { Field: 'SoLuongTon', Title: 'Số lượng tồn khả dụng', Width: 150, Sortable: true, TemplateHeader: this.templateHeaderTemplate },
                        { Field: 'GiaTriSoLuongTonFormat', Title: 'Giá trị tồn', Width: 200, Sortable: true },
                        { Field: 'Action', Title: '', Width: 120, Template: this.actionTongHopTonKhoTemplate, Hidden: !this.authService.hasPermission(src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].CapNhatVatTuTonKho, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update) }
                    ];
                    this.gridColumnsNhapXuatTonKho = [
                        { Field: "TenNhomVatTu", Title: "Nhóm", Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
                        { Field: 'Ma', Title: 'Mã vật tư', Width: 100, Sortable: true, ShowTooltip: true },
                        { Field: 'TenVatTu', Title: 'Vật tư', MinWidth: 150, Sortable: true, ShowTooltip: true },
                        { Field: 'DonViTinh', Title: 'Đơn vị tính', Width: 200, Sortable: true },
                        { Field: 'TonDauKy', Title: 'Tồn đầu kỳ', Width: 200, Template: this.tonDauKyTemplate },
                        { Field: 'NhapTrongKy', Title: 'Nhập trong kỳ', Width: 200, Template: this.nhapTrongKyTemplate },
                        { Field: 'XuatTrongKy', Title: 'Xuất trong kỳ', Width: 200, Template: this.xuatTrongKyTemplate },
                        { Field: 'TonCuoiKy', Title: 'Tồn cuối kỳ', Width: 200, Template: this.tonCuoiKyTemplate },
                        { Field: 'Action', Title: '', Width: 110, Template: this.theKhoTemplate }
                    ];
                };
                VatTuTonKhoListComponent.prototype.getFirstKho = function () {
                    var _this = this;
                    this.apiService.post('TonKho/GetFirstKhoVatTu').subscribe(function (res) {
                        if (res) {
                            _this.searchInfo.KhoId = res.KeyId;
                            _this.searchInfo.TenKho = res.DisplayName;
                            _this.searchInfoTongHopTonKho.KhoId = res.KeyId;
                            _this.searchInfoTongHopTonKho.TenKho = res.DisplayName;
                            _this.searchInfoNhapXuatTonKho.KhoId = res.KeyId;
                            _this.searchInfoNhapXuatTonKho.TenKho = res.DisplayName;
                            if (_this.searchInfo.KhoId && _this.tabCanhBaoTonKhoEnabled) {
                                _this.searchTonKho();
                            }
                        }
                        else {
                            _this.searchInfo.KhoId = 0;
                            _this.searchInfo.TenKho = '';
                            _this.searchInfoTongHopTonKho.KhoId = 0;
                            _this.searchInfoTongHopTonKho.TenKho = '';
                            _this.searchInfoNhapXuatTonKho.KhoId = 0;
                            _this.searchInfoNhapXuatTonKho.TenKho = '';
                        }
                    }, function () { });
                };
                VatTuTonKhoListComponent.prototype.onTabSelect = function (event) {
                    if (event.index === 0) {
                        this.deselectedTab();
                        this.tabCanhBaoTonKhoEnabled = true;
                        this.searchTonKho();
                    }
                    if (event.index === 1) {
                        this.deselectedTab();
                        this.tabTongHopTonKhoEnabled = true;
                        this.searchTonKhoTongHop();
                    }
                    if (event.index === 2) {
                        this.deselectedTab();
                        this.tabNhapXuatTonKhoEnabled = true;
                        this.searchTonKhoNhapXuat();
                    }
                };
                VatTuTonKhoListComponent.prototype.deselectedTab = function () {
                    this.tabCanhBaoTonKhoEnabled = false;
                    this.tabTongHopTonKhoEnabled = false;
                    this.tabNhapXuatTonKhoEnabled = false;
                };
                VatTuTonKhoListComponent.prototype.KhoChange = function (event) {
                    if (event === undefined) {
                        this.searchInfo.KhoId = 0;
                        this.searchTonKho();
                        return;
                    }
                    this.searchInfo.KhoId = event.KeyId;
                    this.searchInfo.TenKho = event.DisplayName;
                    this.searchTonKho();
                };
                VatTuTonKhoListComponent.prototype.KhoChangeTongHopTonKho = function (event) {
                    if (event === undefined) {
                        this.searchInfoTongHopTonKho.KhoId = 0;
                        this.searchTonKhoTongHop();
                        return;
                    }
                    this.searchInfoTongHopTonKho.KhoId = event.KeyId;
                    this.searchInfoTongHopTonKho.TenKho = event.DisplayName;
                    this.searchTonKhoTongHop();
                };
                VatTuTonKhoListComponent.prototype.KhoTonKhoChange = function (khoId) {
                    this.searchInfoTongHopTonKho.KhoId = khoId == undefined ? 0 : khoId;
                    this.searchTonKhoTongHop();
                };
                VatTuTonKhoListComponent.prototype.KhoChangeNhapXuatTonKho = function (event) {
                    if (event === undefined) {
                        this.searchInfoNhapXuatTonKho.KhoId = 0;
                        this.searchTonKhoNhapXuat();
                        return;
                    }
                    this.searchInfoNhapXuatTonKho.KhoId = event.KeyId;
                    this.searchInfoNhapXuatTonKho.TenKho = event.DisplayName;
                    this.searchTonKhoNhapXuat();
                };
                VatTuTonKhoListComponent.prototype.CanhBaoChange = function (event) {
                    if (event === undefined) {
                        this.searchInfo.CanhBaoId = 0;
                        this.searchInfo.LoaiCanhBao = 'Tất cả';
                        this.searchTonKho();
                        return;
                    }
                    this.searchInfo.LoaiCanhBao = event.DisplayName;
                    this.searchTonKho();
                };
                VatTuTonKhoListComponent.prototype.getQueryStringTonKhoCanhBao = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var CanhBaoQueryString = null;
                    var SortQueryString = null;
                    if (this.searchInfo.KhoId != null) {
                        KhoQueryString = this.searchInfo.KhoId;
                    }
                    if (this.searchInfo.SearchString != null) {
                        SearchQueryString = "\"" + this.searchInfo.SearchString + "\"";
                    }
                    if (this.searchInfo.LoaiCanhBao != null) {
                        CanhBaoQueryString = '"' + this.searchInfo.LoaiCanhBao + '"';
                    }
                    if (this.gridChildCanhBaoTonKho) {
                        SortQueryString = JSON.stringify(this.gridChildCanhBaoTonKho.sort);
                    }
                    return "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"CanhBao\":" + CanhBaoQueryString + ",\"Sort\":" + SortQueryString + "}";
                };
                VatTuTonKhoListComponent.prototype.getQueryStringTonKhoTongHop = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var SortQueryString = null;
                    if (this.searchInfoTongHopTonKho.KhoId != null) {
                        KhoQueryString = this.searchInfoTongHopTonKho.KhoId;
                    }
                    if (this.searchInfoTongHopTonKho.SearchString != null) {
                        SearchQueryString = "\"" + this.searchInfoTongHopTonKho.SearchString + "\"";
                    }
                    if (this.gridChildTongHopTonKho) {
                        SortQueryString = JSON.stringify(this.gridChildTongHopTonKho.sort);
                    }
                    return "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"Sort\":" + SortQueryString + "}";
                };
                VatTuTonKhoListComponent.prototype.getQueryStringTonKhoNhapXuat = function () {
                    var KhoQueryString = 0;
                    var SearchQueryString = null;
                    var RangeDateQueryString = null;
                    var SortQueryString = null;
                    if (this.searchInfoNhapXuatTonKho.KhoId != null) {
                        KhoQueryString = this.searchInfoNhapXuatTonKho.KhoId;
                    }
                    if (this.searchInfoNhapXuatTonKho.SearchString != null) {
                        SearchQueryString = "\"" + this.searchInfoNhapXuatTonKho.SearchString + "\"";
                    }
                    if (this.searchInfoNhapXuatTonKho.RangeDate != null) {
                        RangeDateQueryString = "";
                        RangeDateQueryString += this.searchInfoNhapXuatTonKho.RangeDate.startDate ? '{"TuNgay":' + '"' + this.ConvertDateTime(this.searchInfoNhapXuatTonKho.RangeDate.startDate) + '"' : '{"TuNgay":' + null;
                        RangeDateQueryString += this.searchInfoNhapXuatTonKho.RangeDate.endDate ? ',"DenNgay":' + '"' + this.ConvertDateTime(this.searchInfoNhapXuatTonKho.RangeDate.endDate) + '"' + '}' : ',"DenNgay":' + null + '}';
                    }
                    if (this.gridChildNhapXuatTonKho) {
                        SortQueryString = JSON.stringify(this.gridChildNhapXuatTonKho.sort);
                    }
                    return "{\"KhoId\":" + KhoQueryString + ",\"SearchString\":" + SearchQueryString + ",\"RangeDate\":" + RangeDateQueryString + ",\"Sort\":" + SortQueryString + "}";
                };
                VatTuTonKhoListComponent.prototype.searchTonKho = function () {
                    var queryString = this.getQueryStringTonKhoCanhBao();
                    this.defaultAdditionalSearchStringCanhBaoTonKho = queryString;
                    if (this.gridChildCanhBaoTonKho) {
                        this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
                        this.gridChildCanhBaoTonKho.search();
                    }
                };
                VatTuTonKhoListComponent.prototype.searchTonKhoTongHop = function () {
                    var queryString = this.getQueryStringTonKhoTongHop();
                    this.defaultAdditionalSearchStringTongHopTonKho = queryString;
                    if (this.gridChildTongHopTonKho) {
                        this.gridChildTongHopTonKho._additionalSearchString = queryString;
                        this.gridChildTongHopTonKho.search();
                    }
                };
                VatTuTonKhoListComponent.prototype.searchTonKhoNhapXuat = function () {
                    var queryString = this.getQueryStringTonKhoNhapXuat();
                    this.defaultAdditionalSearchStringNhapXuatTonKho = queryString;
                    if (this.gridChildNhapXuatTonKho) {
                        this.gridChildNhapXuatTonKho._additionalSearchString = queryString;
                        this.gridChildNhapXuatTonKho.search();
                    }
                };
                VatTuTonKhoListComponent.prototype.searchChange = function () {
                    if (this.searchInfo.SearchString == null || this.searchInfo.SearchString == undefined || this.searchInfo.SearchString == "") {
                        this.searchInfo.SearchString = undefined;
                        this.searchTonKho();
                    }
                };
                VatTuTonKhoListComponent.prototype.searchChangeTongHopTonKho = function () {
                    if (this.searchInfoTongHopTonKho.SearchString == null || this.searchInfoTongHopTonKho.SearchString == undefined || this.searchInfoTongHopTonKho.SearchString == "") {
                        this.searchInfoTongHopTonKho.SearchString = undefined;
                        this.searchTonKhoTongHop();
                    }
                };
                VatTuTonKhoListComponent.prototype.searchChangeNhapXuatTonKho = function () {
                    if (this.searchInfoNhapXuatTonKho.SearchString == null || this.searchInfoNhapXuatTonKho.SearchString == undefined || this.searchInfoNhapXuatTonKho.SearchString == "") {
                        this.searchInfoNhapXuatTonKho.SearchString = undefined;
                        this.searchTonKhoNhapXuat();
                    }
                };
                VatTuTonKhoListComponent.prototype.changDateRangeNhapXuatTonKho = function (event) {
                    this.searchTonKhoNhapXuat();
                };
                VatTuTonKhoListComponent.prototype.onKey = function (event) {
                    if (event.key == "Enter") {
                        this.searchTonKho();
                    }
                };
                VatTuTonKhoListComponent.prototype.onKeyTongHopTonKho = function (event) {
                    if (event.key == "Enter") {
                        this.searchTonKhoTongHop();
                    }
                };
                VatTuTonKhoListComponent.prototype.onKeyNhapXuatTonKho = function (event) {
                    if (event.key == "Enter") {
                        this.searchTonKhoNhapXuat();
                    }
                };
                VatTuTonKhoListComponent.prototype.onDataBoundGrid = function (event) {
                    if (event && event.Data.length > 0) {
                        this.isExistData = true;
                    }
                    else {
                        this.isExistData = false;
                    }
                };
                VatTuTonKhoListComponent.prototype.onDataBoundGridTongHopTonKho = function (event) {
                    if (event && event.Data.length > 0) {
                        this.isExistDataTongHopTonKho = true;
                    }
                    else {
                        this.isExistDataTongHopTonKho = false;
                    }
                };
                VatTuTonKhoListComponent.prototype.onDataBoundGridNhapXuatTonKho = function (event) {
                    if (event && event.Data.length > 0) {
                        this.isExistDataNhapXuatTonKho = true;
                    }
                    else {
                        this.isExistDataNhapXuatTonKho = false;
                    }
                };
                VatTuTonKhoListComponent.prototype.xemBaoCao = function () {
                    var dialogRef = this.dialog.open(_vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__["VatTuTonKhoPopupComponent"], {
                        //disableClose: true,
                        width: '794px',
                        // height: '500px',
                        data: {
                            queryString: this.getQueryStringTonKhoCanhBao(),
                            canhBao: this.searchInfo.LoaiCanhBao ? this.searchInfo.LoaiCanhBao : 'Tất cả',
                            type: _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["LoaiTonKhoVatTu"].CanhBaoTonKhoVatTu,
                            Title: "Xác nhận"
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (res) { });
                };
                VatTuTonKhoListComponent.prototype.xemBaoCaoTonKhoTongHop = function () {
                    var dialogRef = this.dialog.open(_vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__["VatTuTonKhoPopupComponent"], {
                        //disableClose: true,
                        width: '794px',
                        // height: '500px',
                        data: {
                            queryString: this.getQueryStringTonKhoTongHop(),
                            type: _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["LoaiTonKhoVatTu"].TongHopTonKhoVatTu,
                            Title: "Xác nhận"
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (res) { });
                };
                VatTuTonKhoListComponent.prototype.xemBaoCaoTonKhoNhapXuat = function () {
                    var dialogRef = this.dialog.open(_vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__["VatTuTonKhoPopupComponent"], {
                        //disableClose: true,
                        width: '794px',
                        // height: '500px',
                        data: {
                            queryString: this.getQueryStringTonKhoNhapXuat(),
                            type: _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["LoaiTonKhoVatTu"].NhapXuatTonKhoVatTu,
                            Title: "Xác nhận"
                        }
                    });
                    dialogRef.afterClosed().subscribe(function (res) { });
                };
                VatTuTonKhoListComponent.prototype.xemChiTietNhapXuatTonKho = function (vatTuId) {
                    var chiTiet = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["VatTuTonKhoNhapXuatChiTiet"]();
                    chiTiet.VatTuId = vatTuId;
                    chiTiet.KhoId = this.searchInfoNhapXuatTonKho.KhoId ? this.searchInfoNhapXuatTonKho.KhoId : 0;
                    chiTiet.RangeDate = this.searchInfoNhapXuatTonKho.RangeDate;
                    var dialogRef = this.dialog.open(_vat_tu_ton_kho_chi_tiet_vat_tu_ton_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_14__["VatTuTonKhoChiTietComponent"], {
                        width: '900px',
                        data: { Model: chiTiet, Title: 'Thẻ kho' }
                    });
                    dialogRef.afterClosed().subscribe(function (result) {
                        // console.log('Ketqua', result)
                    });
                };
                VatTuTonKhoListComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    if (this.tabCanhBaoTonKhoEnabled) {
                        return new Promise(function (resolve) {
                            _this.apiService.get("TonKho/GetVatTuTonKhoCanhBaoHTML?search=" + _this.getQueryStringTonKhoCanhBao()).subscribe(function (resultData) {
                                resolve(resultData);
                            });
                        });
                    }
                    if (this.tabTongHopTonKhoEnabled) {
                        return new Promise(function (resolve) {
                            _this.apiService.get("TonKho/GetVatTuTonKhoTongHopHTML?search=" + _this.getQueryStringTonKhoTongHop()).subscribe(function (resultData) {
                                resolve(resultData);
                            });
                        });
                    }
                    if (this.tabNhapXuatTonKhoEnabled) {
                        return new Promise(function (resolve) {
                            _this.apiService.get("TonKho/GetVatTuTonKhoNhapXuatHTML?search=" + _this.getQueryStringTonKhoNhapXuat()).subscribe(function (resultData) {
                                resolve(resultData);
                            });
                        });
                    }
                };
                VatTuTonKhoListComponent.prototype.exportExcel = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("TonKho/ExportVatTuTonKhoCanhBao", this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "CanhBaoVatTuTonKho" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                VatTuTonKhoListComponent.prototype.exportExcelTonKhoTongHop = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("TonKho/ExportVatTuTonKhoTongHop", this.gridChildTongHopTonKho._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoTongHop" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                VatTuTonKhoListComponent.prototype.exportExcelTonKhoNhapXuat = function () {
                    var _this = this;
                    this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
                        disableClose: true,
                        width: '200px',
                        height: '90px',
                        data: { Title: 'Đang xuất excel...' }
                    });
                    if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
                        this.apiService.postExportExcel("TonKho/ExportVatTuTonKhoNhapXuat", this.gridChildNhapXuatTonKho._gridQueryInfo).subscribe(function (res) {
                            var dateTimeNow = new Date();
                            src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoNhapXuat" + dateTimeNow.getFullYear() + ".xlsx");
                            _this.dialog.closeAll();
                        }, function (err) {
                            _this.notificationService.showError(err.Message);
                            _this.dialog.closeAll();
                        });
                    }
                    else {
                        this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
                    }
                };
                VatTuTonKhoListComponent.prototype.ConvertDateTime = function (datime) {
                    var date = new Date(datime);
                    var year = date.getFullYear();
                    var rawMonth = parseInt(String(date.getMonth())) + 1;
                    var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
                    var rawDay = parseInt(String(date.getDate()));
                    var day = rawDay < 10 ? '0' + rawDay : rawDay;
                    return year + '-' + month + '-' + day;
                };
                VatTuTonKhoListComponent.prototype.suaTonKho = function (dataItem) {
                    var _this = this;
                    var data = {
                        dataItem: dataItem,
                        kho: this.searchInfoTongHopTonKho
                    };
                    if (this.confrim != null) {
                        this.dialog.closeAll();
                        this.confrim = null;
                    }
                    this.confrim = this.dialog
                        .open(_sua_vat_tu_ton_kho_popup_sua_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_24__["SuaVatTuTonKhoPopupComponent"], {
                        disableClose: true,
                        width: "1500px",
                        data: { data: data },
                    })
                        .afterClosed()
                        .subscribe(function (result) {
                        _this.gridChildTongHopTonKho.setDataSource();
                    });
                };
                return VatTuTonKhoListComponent;
            }());
            VatTuTonKhoListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], VatTuTonKhoListComponent.prototype, "searchPlaceHolder", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canhBaoTonKhoGrid', { static: false })
            ], VatTuTonKhoListComponent.prototype, "gridChildCanhBaoTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongHopTonKhoGrid', { static: false })
            ], VatTuTonKhoListComponent.prototype, "gridChildTongHopTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhapXuatTonKhoGrid', { static: false })
            ], VatTuTonKhoListComponent.prototype, "gridChildNhapXuatTonKho", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangCanhBaoTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "tinhTrangCanhBaoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "tinhTrangTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTonTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "soLuongTonTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tonDauKyTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "tonDauKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhapTrongKyTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "nhapTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('xuatTrongKyTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "xuatTrongKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tonCuoiKyTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "tonCuoiKyTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('theKhoTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "theKhoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTongHopTonKhoTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "actionTongHopTonKhoTemplate", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('templateHeaderTemplate', { static: true })
            ], VatTuTonKhoListComponent.prototype, "templateHeaderTemplate", void 0);
            VatTuTonKhoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-ton-kho-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-ton-kho-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.html")).default,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-ton-kho-list.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.scss")).default]
                })
            ], VatTuTonKhoListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.scss": 
        /*!*****************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.scss ***!
          \*****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3ZhdC10dS10b24ta2hvLXBvcHVwL3ZhdC10dS10b24ta2hvLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: VatTuTonKhoPopupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoPopupComponent", function () { return VatTuTonKhoPopupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            /* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
            /* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");
            var VatTuTonKhoPopupComponent = /** @class */ (function () {
                function VatTuTonKhoPopupComponent(dialogRef, data, apiService, notificationService) {
                    this.dialogRef = dialogRef;
                    this.data = data;
                    this.apiService = apiService;
                    this.notificationService = notificationService;
                    this.loading = false;
                    this.url = '';
                    this.printLayout = 'Portrait';
                    this.printSize = 'A4';
                }
                VatTuTonKhoPopupComponent.prototype.ngOnInit = function () {
                    this.GetHTML();
                };
                VatTuTonKhoPopupComponent.prototype.GetHTML = function () {
                    var _this = this;
                    this.loading = true;
                    switch (this.data.type) {
                        case _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__["LoaiTonKhoVatTu"].CanhBaoTonKhoVatTu:
                            this.url = "TonKho/GetVatTuTonKhoCanhBaoHTML?search=" + this.data.queryString;
                            break;
                        case _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__["LoaiTonKhoVatTu"].TongHopTonKhoVatTu:
                            this.url = "TonKho/GetVatTuTonKhoTongHopHTML?search=" + this.data.queryString;
                            break;
                        case _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__["LoaiTonKhoVatTu"].NhapXuatTonKhoVatTu:
                            this.url = "TonKho/GetVatTuTonKhoNhapXuatHTML?search=" + this.data.queryString;
                            break;
                    }
                    this.apiService.get(this.url).subscribe(function (res) {
                        if (res != null) {
                            var html = res;
                            $(".a").show();
                            $(".showPdf").append(html);
                        }
                        _this.loading = false;
                    }, function (err) {
                        _this.notificationService.showError(err.Message);
                    });
                };
                VatTuTonKhoPopupComponent.prototype.getSharedPrintForm = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.apiService.get(_this.url).subscribe(function (resultData) {
                            resolve(resultData);
                            _this.dialogRef.close(resultData);
                        });
                    });
                };
                return VatTuTonKhoPopupComponent;
            }());
            VatTuTonKhoPopupComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
                { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
            ]; };
            VatTuTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-vat-tu-ton-kho-popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], VatTuTonKhoPopupComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-routing.module.ts": 
        /*!*****************************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-routing.module.ts ***!
          \*****************************************************************************************************/
        /*! exports provided: VatTuTonKhoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoRoutingModule", function () { return VatTuTonKhoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
            /* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
            /* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
            /* harmony import */ var _vat_tu_ton_kho_list_vat_tu_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vat-tu-ton-kho-list/vat-tu-ton-kho-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts");
            var routes = [{
                    path: '',
                    component: _vat_tu_ton_kho_list_vat_tu_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_6__["VatTuTonKhoListComponent"],
                    data: {
                        title: 'Danh sách vật tư tồn kho',
                        DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].VatTuTonKho,
                        SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
                    },
                    canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
                }];
            var VatTuTonKhoRoutingModule = /** @class */ (function () {
                function VatTuTonKhoRoutingModule() {
                }
                return VatTuTonKhoRoutingModule;
            }());
            VatTuTonKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], VatTuTonKhoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts ***!
          \********************************************************************************************/
        /*! exports provided: SearchVatTuTonKhoCanhBao, SearchVatTuTonKhoTongHop, SearchVatTuTonKhoNhapXuat, VatTuTonKhoNhapXuatChiTiet, ChiTietVatTuTonKhoNhapXuat, Sort, RangeDate, LoaiTonKhoVatTu, QueryInfo, CapNhatTonKhoVatTuItem, CapNhatTonKhoItemDetail, NhapKhoVatTuTonKhoViewModel, NhapKhoVatTuChiTietTonKhoViewModel */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuTonKhoCanhBao", function () { return SearchVatTuTonKhoCanhBao; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuTonKhoTongHop", function () { return SearchVatTuTonKhoTongHop; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuTonKhoNhapXuat", function () { return SearchVatTuTonKhoNhapXuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoNhapXuatChiTiet", function () { return VatTuTonKhoNhapXuatChiTiet; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietVatTuTonKhoNhapXuat", function () { return ChiTietVatTuTonKhoNhapXuat; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function () { return Sort; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function () { return RangeDate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiTonKhoVatTu", function () { return LoaiTonKhoVatTu; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfo", function () { return QueryInfo; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatTonKhoVatTuItem", function () { return CapNhatTonKhoVatTuItem; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatTonKhoItemDetail", function () { return CapNhatTonKhoItemDetail; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuTonKhoViewModel", function () { return NhapKhoVatTuTonKhoViewModel; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuChiTietTonKhoViewModel", function () { return NhapKhoVatTuChiTietTonKhoViewModel; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var SearchVatTuTonKhoCanhBao = /** @class */ (function () {
                function SearchVatTuTonKhoCanhBao() {
                    this.KhoId = null;
                    this.TenKho = null;
                    this.SearchString = null;
                    this.CanhBaoId = 0;
                    this.LoaiCanhBao = "Tất cả";
                }
                return SearchVatTuTonKhoCanhBao;
            }());
            var SearchVatTuTonKhoTongHop = /** @class */ (function () {
                function SearchVatTuTonKhoTongHop() {
                    this.KhoId = null;
                    this.TenKho = null;
                    this.SearchString = null;
                }
                return SearchVatTuTonKhoTongHop;
            }());
            var SearchVatTuTonKhoNhapXuat = /** @class */ (function () {
                function SearchVatTuTonKhoNhapXuat() {
                    this.KhoId = null;
                    this.TenKho = null;
                    this.SearchString = null;
                    this.RangeDate = new RangeDate();
                    this.Sort = new Array();
                }
                return SearchVatTuTonKhoNhapXuat;
            }());
            var VatTuTonKhoNhapXuatChiTiet = /** @class */ (function () {
                function VatTuTonKhoNhapXuatChiTiet() {
                    this.KhoId = null;
                    this.VatTuId = 0;
                    this.RangeDate = new RangeDate();
                }
                return VatTuTonKhoNhapXuatChiTiet;
            }());
            var ChiTietVatTuTonKhoNhapXuat = /** @class */ (function () {
                function ChiTietVatTuTonKhoNhapXuat(KhoId, KhoDisplay, VatTuId, TenVatTu) {
                    if (KhoId === void 0) { KhoId = null; }
                    if (KhoDisplay === void 0) { KhoDisplay = null; }
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (TenVatTu === void 0) { TenVatTu = null; }
                    this.KhoId = KhoId;
                    this.KhoDisplay = KhoDisplay;
                    this.VatTuId = VatTuId;
                    this.TenVatTu = TenVatTu;
                }
                return ChiTietVatTuTonKhoNhapXuat;
            }());
            var Sort = /** @class */ (function () {
                function Sort(Field, Dir) {
                    if (Field === void 0) { Field = null; }
                    if (Dir === void 0) { Dir = null; }
                    this.Field = Field;
                    this.Dir = Dir;
                }
                return Sort;
            }());
            var RangeDate = /** @class */ (function () {
                function RangeDate(startDate, endDate) {
                    if (startDate === void 0) { startDate = null; }
                    if (endDate === void 0) { endDate = new Date(); }
                    this.startDate = startDate;
                    this.endDate = endDate;
                }
                return RangeDate;
            }());
            var LoaiTonKhoVatTu;
            (function (LoaiTonKhoVatTu) {
                LoaiTonKhoVatTu[LoaiTonKhoVatTu["CanhBaoTonKhoVatTu"] = 1] = "CanhBaoTonKhoVatTu";
                LoaiTonKhoVatTu[LoaiTonKhoVatTu["TongHopTonKhoVatTu"] = 2] = "TongHopTonKhoVatTu";
                LoaiTonKhoVatTu[LoaiTonKhoVatTu["NhapXuatTonKhoVatTu"] = 3] = "NhapXuatTonKhoVatTu";
            })(LoaiTonKhoVatTu || (LoaiTonKhoVatTu = {}));
            var QueryInfo = /** @class */ (function () {
                function QueryInfo(AdditionalSearchString, SearchString, Sort) {
                    if (AdditionalSearchString === void 0) { AdditionalSearchString = null; }
                    if (SearchString === void 0) { SearchString = ""; }
                    if (Sort === void 0) { Sort = null; }
                    this.AdditionalSearchString = AdditionalSearchString;
                    this.SearchString = SearchString;
                    this.Sort = Sort;
                }
                return QueryInfo;
            }());
            var CapNhatTonKhoVatTuItem = /** @class */ (function () {
                function CapNhatTonKhoVatTuItem(VatTuId, CapNhatTonKhoItemDetails) {
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (CapNhatTonKhoItemDetails === void 0) { CapNhatTonKhoItemDetails = []; }
                    this.VatTuId = VatTuId;
                    this.CapNhatTonKhoItemDetails = CapNhatTonKhoItemDetails;
                }
                return CapNhatTonKhoVatTuItem;
            }());
            var CapNhatTonKhoItemDetail = /** @class */ (function () {
                function CapNhatTonKhoItemDetail(Id, HanSuDung, SoLuong, Loai) {
                    if (Id === void 0) { Id = 0; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (Loai === void 0) { Loai = null; }
                    this.Id = Id;
                    this.HanSuDung = HanSuDung;
                    this.SoLuong = SoLuong;
                    this.Loai = Loai;
                }
                return CapNhatTonKhoItemDetail;
            }());
            var NhapKhoVatTuTonKhoViewModel = /** @class */ (function () {
                function NhapKhoVatTuTonKhoViewModel(Id, VatTuId, VatTu, NhapKhoVatTuChiTiets) {
                    if (Id === void 0) { Id = 0; }
                    if (VatTuId === void 0) { VatTuId = 0; }
                    if (VatTu === void 0) { VatTu = null; }
                    if (NhapKhoVatTuChiTiets === void 0) { NhapKhoVatTuChiTiets = []; }
                    this.Id = Id;
                    this.VatTuId = VatTuId;
                    this.VatTu = VatTu;
                    this.NhapKhoVatTuChiTiets = NhapKhoVatTuChiTiets;
                }
                return NhapKhoVatTuTonKhoViewModel;
            }());
            var NhapKhoVatTuChiTietTonKhoViewModel = /** @class */ (function () {
                function NhapKhoVatTuChiTietTonKhoViewModel(Id, SoLo, HanSuDung, MaRef, MaVach, DonGiaNhap, VAT, TiLeBHYTThanhToan, LaVatTuBHYT, SoLuong, Loai) {
                    if (Id === void 0) { Id = 0; }
                    if (SoLo === void 0) { SoLo = null; }
                    if (HanSuDung === void 0) { HanSuDung = null; }
                    if (MaRef === void 0) { MaRef = null; }
                    if (MaVach === void 0) { MaVach = null; }
                    if (DonGiaNhap === void 0) { DonGiaNhap = null; }
                    if (VAT === void 0) { VAT = null; }
                    if (TiLeBHYTThanhToan === void 0) { TiLeBHYTThanhToan = null; }
                    if (LaVatTuBHYT === void 0) { LaVatTuBHYT = null; }
                    if (SoLuong === void 0) { SoLuong = null; }
                    if (Loai === void 0) { Loai = null; }
                    this.Id = Id;
                    this.SoLo = SoLo;
                    this.HanSuDung = HanSuDung;
                    this.MaRef = MaRef;
                    this.MaVach = MaVach;
                    this.DonGiaNhap = DonGiaNhap;
                    this.VAT = VAT;
                    this.TiLeBHYTThanhToan = TiLeBHYTThanhToan;
                    this.LaVatTuBHYT = LaVatTuBHYT;
                    this.SoLuong = SoLuong;
                    this.Loai = Loai;
                }
                return NhapKhoVatTuChiTietTonKhoViewModel;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.module.ts": 
        /*!*********************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.module.ts ***!
          \*********************************************************************************************/
        /*! exports provided: VatTuTonKhoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoModule", function () { return VatTuTonKhoModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _sua_vat_tu_ton_kho_popup_sua_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
            /* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
            /* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
            /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
            /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
            /* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
            /* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
            /* harmony import */ var _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @progress/kendo-angular-excel-export */ "./node_modules/@progress/kendo-angular-excel-export/dist/fesm2015/index.js");
            /* harmony import */ var _vat_tu_ton_kho_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vat-tu-ton-kho.service */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.service.ts");
            /* harmony import */ var _vat_tu_ton_kho_list_vat_tu_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vat-tu-ton-kho-list/vat-tu-ton-kho-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts");
            /* harmony import */ var _vat_tu_ton_kho_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vat-tu-ton-kho-routing.module */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-routing.module.ts");
            /* harmony import */ var _vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.ts");
            /* harmony import */ var _vat_tu_ton_kho_chi_tiet_vat_tu_ton_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.ts");
            /* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
            var VatTuTonKhoModule = /** @class */ (function () {
                function VatTuTonKhoModule() {
                }
                return VatTuTonKhoModule;
            }());
            VatTuTonKhoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_vat_tu_ton_kho_list_vat_tu_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_21__["VatTuTonKhoListComponent"], _vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_23__["VatTuTonKhoPopupComponent"], _vat_tu_ton_kho_chi_tiet_vat_tu_ton_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_24__["VatTuTonKhoChiTietComponent"], _sua_vat_tu_ton_kho_popup_sua_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__["SuaVatTuTonKhoPopupComponent"]],
                    imports: [
                        _progress_kendo_angular_excel_export__WEBPACK_IMPORTED_MODULE_19__["ExcelExportModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                        src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutModule"],
                        src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsModule"],
                        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
                        _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_18__["LayoutModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                        _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
                        _vat_tu_ton_kho_routing_module__WEBPACK_IMPORTED_MODULE_22__["VatTuTonKhoRoutingModule"],
                        _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_25__["TooltipModule"]
                    ],
                    providers: [
                        _vat_tu_ton_kho_service__WEBPACK_IMPORTED_MODULE_20__["VatTuTonKhoService"],
                        { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"], useClass: _vat_tu_ton_kho_service__WEBPACK_IMPORTED_MODULE_20__["VatTuTonKhoService"] }
                    ],
                    entryComponents: [
                        _vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_23__["VatTuTonKhoPopupComponent"],
                        _vat_tu_ton_kho_chi_tiet_vat_tu_ton_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_24__["VatTuTonKhoChiTietComponent"],
                        _sua_vat_tu_ton_kho_popup_sua_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_1__["SuaVatTuTonKhoPopupComponent"]
                    ]
                })
            ], VatTuTonKhoModule);
            /***/ 
        }),
        /***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.service.ts": 
        /*!**********************************************************************************************!*\
          !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.service.ts ***!
          \**********************************************************************************************/
        /*! exports provided: VatTuTonKhoService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoService", function () { return VatTuTonKhoService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
            /* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
            var VatTuTonKhoService = /** @class */ (function (_super) {
                __extends(VatTuTonKhoService, _super);
                function VatTuTonKhoService(apiService) {
                    var _this = _super.call(this, apiService) || this;
                    _this.controllerName = 'TonKho';
                    return _this;
                }
                return VatTuTonKhoService;
            }(src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));
            VatTuTonKhoService.ctorParameters = function () { return [
                { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
            ]; };
            VatTuTonKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], VatTuTonKhoService);
            /***/ 
        })
    }]);
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-ton-kho-vat-tu-ton-kho-module-es2015.js.map
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-ton-kho-vat-tu-ton-kho-module-es5.js.map
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-ton-kho-vat-tu-ton-kho-module-es5.js.map