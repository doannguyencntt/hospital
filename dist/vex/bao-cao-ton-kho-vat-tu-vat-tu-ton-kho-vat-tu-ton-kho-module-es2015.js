(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bao-cao-ton-kho-vat-tu-vat-tu-ton-kho-vat-tu-ton-kho-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n  <div style=\"font: 500 18px/26px var(--font)\">CHI TIẾT VẬT TƯ TỒN KHO</div>\n  <button type=\"button\" mat-icon-button (click)=\"close()\" tabindex=\"-1\">\n    <mat-icon [icIcon]=\"icClose\"></mat-icon>\n  </button>\n</div>\n<mat-dialog-content>\n  <app-grid #gridVatTuTonKho [gridColumns]=\"gridColumns\" #gridPopup urlGetData=\"TonKho/GetChiTietTonKhoCuaVatTu\"\n    [useAddDeault]=\"false\" [headerTemplate]=\"headerTemplate\" [gridColumns]=\"gridColumns\" height=\"500\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"true\"\n    (extOnDataBound)=\"extOnDataBound($event)\">\n  </app-grid>\n\n  <ng-template #headerTemplate>\n    <div style=\"border-bottom: 1px solid #ccc;\">\n      <div fxFlex=\"100%\" style=\"margin: 10px 0 0 10px;\">\n        <span>\n          <span style=\"font-weight: bold;\">Kho: </span> <span class=\"red\">{{vatTu.data.kho.TenKho}}</span>\n        </span>\n        <!-- <span style=\"margin-left: 20px;\">\n          <span style=\"font-weight: bold;\">Vật tư: </span> <span class=\"red\">{{vatTu.data.dataItem.TenVatTu}}</span>\n        </span> -->\n\n        <app-combobox [disabled]=\"true\" fxFlex=\"25%\" [(model)]=\"nhapKhoVatTuTonKhoViewModel.VatTuId\" [required]=\"true\"\n          [modelText]=\"nhapKhoVatTuTonKhoViewModel.VatTu\" id=\"VatTuId\" label=\"Tên vật tư\"\n          url=\"TonKho/GetVatTuBenhVien\"\n          [queryInfo]=\"{ParameterDependencies:'{VatTuId:' + nhapKhoVatTuTonKhoViewModel.VatTuId +'}', Take: 50}\"\n          [validationerror]=\"'VatTuId' | validationerror:validationErrors\" [templateHeader]=\"duocPhamTemplateHeader\"\n          [template]=\"duocPhamTemplate\" class=\"item-no-padding\">\n          <ng-template #duocPhamTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n              <tr>\n                <th width=\"40%\">Mã</th>\n                <th>Tên</th>\n              </tr>\n            </table>\n          </ng-template>\n          <ng-template #duocPhamTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n              <tr>\n                <td width=\"40%\">{{dataItem.Ma}}</td>\n                <td>{{dataItem.Ten}}</td>\n              </tr>\n            </table>\n          </ng-template>\n        </app-combobox>\n        <span style=\"margin-left: 20px;\">\n          <span style=\"font-weight: bold;\">Đơn vị tính: </span> <span\n            class=\"red\">{{vatTu.data.dataItem.DonViTinh}}</span>\n        </span>\n      </div>\n    </div>\n  </ng-template>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n  <button mat-button mat-dialog-close (click)=\"close()\">Hủy</button>\n  <!-- <button mat-raised-button mat-button color=\"primary\" (click)=\"luu()\" cdkFocusInitial>Lưu</button> -->\n</mat-dialog-actions>\n\n<ng-template #hanSuSungTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-datepicker [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" required=\"true\" class=\"no-label\" label=\" \" style=\"width: 100%;\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].HanSuDung' | validationerror:validationErrors\"\n    [(model)]=\"dataItem.HanSuDung\">\n  </app-datepicker>\n  <span *ngIf=\"dataItem.Loai !== 1\">{{dataItem.HanSuDungDisplay}}</span>\n\n</ng-template>\n\n<!-- (modelChange)=\"soLuongChange()\" -->\n\n<ng-template #soLuongTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" class=\"no-label\" label=\" \" style=\"width: 100%;\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].SoLuong' | validationerror:validationErrors\"\n    [min]=\"dataItem.SoLuongDaXuat\" [max]=\"999999999\" required=\"true\" [(model)]=\"dataItem.SoLuong\"> </app-textboxnumeric>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.SoLuong | number}}</span>\n</ng-template>\n\n<ng-template #tonFooterTemplate let-dataItem>\n  <p style=\"color: blue; font-weight: bold;\">\n    <span *ngIf=\"tongTonKho==null\">Đang tính tồn....</span>\n    <span *ngIf=\"tongTonKho!=null\">{{tongTonKho}}</span>\n</ng-template>\n\n<ng-template #loaiFooterTemplate let-dataItem>\n  <span>Tồn:</span>\n</ng-template>\n\n<ng-template #sttTemplate let-rowIndex=\"rowIndex\">\n  <span>{{rowIndex+1}}</span>\n</ng-template>\n\n<ng-template #donGiaTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" id=\"donGiaUuDai\" [max]=\"99999999999999999\" class=\"no-label\"\n    [(model)]=\"dataItem.DonGiaNhap\" [min]=\"0\" label=\" \" [decimals]=\"2\" format=\"n2\" [required]=\"true\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].DonGiaNhap' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n</ng-template>\n\n<ng-template #vATTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"!dataItem.LaVatTuBHYT && dataItem.Loai === 1\" class=\"no-label\" [step]=\"1\" label=\" \"\n    style=\"width: 100%;\" [max]=\"999\" [min]=\"0\" required=\"true\" [(model)]=\"dataItem.VAT\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].VAT' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n\n  <span *ngIf=\"dataItem.LaVatTuBHYT\"> {{dataItem.VAT}}</span>\n</ng-template>\n\n<ng-template #tiLeBHYTThanhToanTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textboxnumeric [disabled]=\"true\" *ngIf=\"dataItem.LaVatTuBHYT && dataItem.Loai === 1\" class=\"no-label\" [step]=\"1\" label=\" \"\n    style=\"width: 100%;\" [max]=\"100\" [min]=\"1\" required=\"true\" [(model)]=\"dataItem.TiLeBHYTThanhToan\"\n    [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].TiLeBHYTThanhToan' | validationerror:validationErrors\">\n  </app-textboxnumeric>\n\n  <span *ngIf=\"!dataItem.LaVatTuBHYT\"> {{dataItem.TiLeBHYTThanhToan}}</span>\n</ng-template>\n\n<ng-template #maRefTemplate let-dataItem>\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" [(model)]=\"dataItem.MaRef\" maxlength=\"200\" label=\" \" class=\"no-label\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.MaRef}}</span>\n</ng-template>\n\n<ng-template #maVachTemplate let-dataItem>\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" [(model)]=\"dataItem.MaVach\" maxlength=\"100\" label=\" \" class=\"no-label\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.MaVach}}</span>\n</ng-template>\n\n<ng-template #soLoTemplate let-dataItem let-rowIndex=\"rowIndex\">\n  <app-textbox [disabled]=\"true\" *ngIf=\"dataItem.Loai === 1\" required=\"true\" [(model)]=\"dataItem.SoLo\" maxlength=\"50\" label=\" \"\n    class=\"no-label\" [validationerror]=\"'NhapKhoVatTuChiTiets['+rowIndex+'].SoLo' | validationerror:validationErrors\">\n  </app-textbox>\n  <span *ngIf=\"dataItem.Loai !== 1\"> {{dataItem.SoLo}}</span>\n</ng-template>\n\n<ng-template #maChungTuTemplate let-dataItem>\n  <a *ngIf=\"dataItem.ThongTinBooking!=null && dataItem.ThongTinBooking!=''\"  kendoTooltip title=\"{{dataItem.ThongTinBooking}}\">{{dataItem.MaChungTu}}</a>\n  <span *ngIf=\"dataItem.ThongTinBooking==null || dataItem.ThongTinBooking==''\">{{dataItem.MaChungTu}}</span>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-grid #gridPopup\n        [urlGetData]=\"urlGetData\" [urlGetTotalPage]=\"urlGetPages\" [additionalSearchString]=\"defaultAdditionalSearchString\"\n        [gridColumns]=\"gridColumns\" [useAddDeault]=\"false\" [headerTemplate]=\"headerTemplate\" [sort]=\"sortConfig\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [showStt]=\"true\">\n    </app-grid>\n\n    <ng-template #headerTemplate>\n        <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n            <div fxFlex=\"87%\" style=\"margin: 10px 0 0 10px;\">\n                <span>\n                    <span style=\"font-weight: bold;\">Kho: </span> <span *ngIf=\"chiTietModel != null && chiTietModel != undefined\">{{chiTietModel.KhoDisplay}}</span>\n                </span>\n                <span style=\"margin-left: 20px;\">\n                    <span style=\"font-weight: bold;\">Vật tư: </span> <span *ngIf=\"chiTietModel != null && chiTietModel != undefined\">{{chiTietModel.TenVatTu}}</span>\n                </span>\n            </div>\n            <div class=\"text-right\" fxFlex=\"13%\" style=\"margin: 5px;\">\n                <!-- <button (click)=\"exportExcelTonKhoNhapXuatChiTiet()\" type=\"button\" color=\"primary\" \n                    mat-raised-button mat-button>Xuất excel\n                </button> -->\n                <button (click)=\"excelexport.save()\" type=\"button\" color=\"primary\" \n                    mat-raised-button mat-button>Xuất excel\n                </button>\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #nhapTemplate let-dataItem>\n        <p>{{dataItem.NhapDisplay}}</p>\n    </ng-template>\n    \n    <ng-template #xuatTemplate let-dataItem>\n        <p>{{dataItem.XuatDisplay}}</p>\n    </ng-template>\n    \n    <ng-template #tonTemplate let-dataItem>\n        <p>{{dataItem.TonDisplay}}</p>\n    </ng-template>\n\n    <ng-template #ngayTemplate let-dataItem>\n        <p>{{dataItem.NgayDisplay}}</p>\n    </ng-template>\n</div>\n\n\n<kendo-excelexport [group]=\"group\" [data]=\"dataExportExcel\" [collapsible]=\"true\" fileName=\"VatTuTonKhoNhapXuatChiTiet.xlsx\" #excelexport>\n    <kendo-excelexport-column field=\"STT\" [locked]=\"true\" title=\"STT\" [width]=\"50\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"NgayDisplay\" title=\"Ngày\" [width]=\"200\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"MaChungTu\" title=\"Mã chứng từ\" width=\"150\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"Nhap\" title=\"Nhập\" width=\"100\">\n    </kendo-excelexport-column> \n    <kendo-excelexport-column field=\"Xuat\" title=\"Xuất\" width=\"100\">\n    </kendo-excelexport-column>\n    <kendo-excelexport-column field=\"Ton\" title=\"Tồn\" width=\"100\">\n    </kendo-excelexport-column>\n\n    <kendo-excelexport-column field=\"ChiTiet\" [hidden]=\"true\">\n        <ng-template kendoExcelExportGroupHeaderTemplate let-value=\"value\">\n           Kho: {{value.kho}} - Vật tư: {{value.vatTu}}\n        </ng-template>\n    </kendo-excelexport-column>\n\n</kendo-excelexport>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                    { Title: 'Thống Kê', Path:'' },\n                    { Title: 'Vật Tư', Path:'' },\n                    { Title: 'Tồn Kho', Path:'/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho', Active: true}]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <kendo-tabstrip fxFlex=\"100%\" class=\" card -mt-15\" (tabSelect)=\"onTabSelect($event)\">\n            <kendo-tabstrip-tab [title]=\"'Cảnh Báo Tồn Kho'\" [selected]=\"tabCanhBaoTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #canhBaoTonKhoGrid heightToolbar=\"190\" [urlGetData]=\"vatTuTonKhoCanhBaoDataUrl\"\n                            [urlGetTotalPage]=\"vatTuTonKhoCanhBaoPagesUrl\" [gridColumns]=\"gridColumnsCanhBaoTonKho\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"true\" [headerTemplate]=\"headerTemplate\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringCanhBaoTonKho\" [showStt]=\"true\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGrid($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n            <kendo-tabstrip-tab [title]=\"\" [selected]=\"tabTongHopTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #tongHopTonKhoGrid heightToolbar=\"190\" [urlGetData]=\"vatTuTonKhoTongHopDataUrl\"\n                            [urlGetTotalPage]=\"vatTuTonKhoTongHopPagesUrl\" [gridColumns]=\"gridColumnsTongHopTonKho\"\n                            [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                            [headerTemplate]=\"headerTongHopTonKhoTemplate\" [showStt]=\"true\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringTongHopTonKho\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGridTongHopTonKho($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n                <ng-template kendoTabTitle>\n                    <span>\n                        Tổng hợp tồn kho <span style=\"color:red;font-weight: bold;text-align: center;\">Khả dụng</span>\n                    </span>\n                </ng-template>\n            </kendo-tabstrip-tab>\n\n            <kendo-tabstrip-tab [title]=\"'Nhập xuất tồn kho'\" [selected]=\"tabNhapXuatTonKhoEnabled\">\n                <ng-template kendoTabContent>\n                    <div>\n                        <app-grid #nhapXuatTonKhoGrid heightToolbar=\"190\" [urlGetData]=\"vatTuTonKhoNhapXuatDataUrl\"\n                            [urlGetTotalPage]=\"vatTuTonKhoNhapXuatPagesUrl\" [gridColumns]=\"gridColumnsNhapXuatTonKho\"\n                            [groups]=\"groups\" [documentType]=\"documentType\" [useAddDeault]=\"true\"\n                            [headerTemplate]=\"headerNhapXuatTonKhoTemplate\" [showStt]=\"true\"\n                            [additionalSearchString]=\"defaultAdditionalSearchStringNhapXuatTonKho\"\n                            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                            [lazyLoadPage]=\"true\" (extOnDataBound)=\"onDataBoundGridNhapXuatTonKho($event)\">\n                        </app-grid>\n                    </div>\n                </ng-template>\n            </kendo-tabstrip-tab>\n        </kendo-tabstrip>\n    </vex-page-layout-content>\n</vex-page-layout>\n\n<ng-template #soLuongTonTemplate let-dataItem>\n    {{dataItem.SoLuongTonDisplay}}\n</ng-template>\n\n<ng-template #tinhTrangCanhBaoTemplate let-dataItem>\n    <span style=\"color: #f44336;\" *ngIf=\"dataItem.CanhBao=='Hết tồn kho'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n    <span style=\"color: #673ab7;\" *ngIf=\"dataItem.CanhBao=='Tồn kho quá nhiều'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n    <span style=\"color: #ff9800;\" *ngIf=\"dataItem.CanhBao=='Sắp hết tồn kho'\"\n        class=\"badge badge-pill badge-{{dataItem.MauCanhBao}}\">{{dataItem.CanhBao}}\n    </span>\n</ng-template>\n\n<ng-template #tinhTrangTemplate let-dataItem>\n    <span style=\"color: orange;\" class=\"badge badge-pill\">{{dataItem.NgayHetHanHienThi}}\n    </span>\n</ng-template>\n\n<ng-template #tonDauKyTemplate let-dataItem>\n    <p>{{dataItem.TonDauKyDisplay}}</p>\n</ng-template>\n\n<ng-template #nhapTrongKyTemplate let-dataItem>\n    <p>{{dataItem.NhapTrongKyDisplay}}</p>\n</ng-template>\n\n<ng-template #xuatTrongKyTemplate let-dataItem>\n    <p>{{dataItem.XuatTrongKyDisplay}}</p>\n</ng-template>\n\n<ng-template #tonCuoiKyTemplate let-dataItem>\n    <p>{{dataItem.TonCuoiKyDisplay}}</p>\n</ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #theKhoTemplate let-dataItem>\n    <button (click)=\"xemChiTietNhapXuatTonKho(dataItem.Id)\" type=\"button\" color=\"primary\" style=\"text-align: center;\"\n        mat-raised-button mat-button>Xem\n    </button>\n</ng-template>\n\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"Kho\" fxFlex=\"300px\" fxFlex.sm=\"auto\" label=\"Chọn Kho\" url=\"TonKho/GetKhoVatTus\"\n                popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\" [(model)]=\"searchInfo.KhoId\"\n                [autoSelectFirstItem]=\"true\" [bind]=\"true\" [modelText]=\"searchInfo.TenKho\"\n                (selectionChange)=\"KhoChange($event)\">\n            </app-combobox>\n\n            <app-combobox id=\"CanhBao\" fxFlex=\"300px\" fxFlex.sm=\"auto\" [(model)]=\"searchInfo.CanhBaoId\"\n                (selectionChange)=\"CanhBaoChange($event)\" [modelText]=\"searchInfo.LoaiCanhBao\" label=\"Cảnh báo\"\n                url=\"TonKho/GetCanhBao\" popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\">\n            </app-combobox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\"\n                    placeholder=\"{{searchPlaceHolder}}\" [formControl]=\"searchCtrl\" [(ngModel)]=\"searchInfo.SearchString\"\n                    (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChange()\" />\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcel()\" type=\"button\" color=\"primary\" [disabled]=\"!isExistData\" mat-raised-button\n                mat-button>Xuất Excel</button>\n            <button (click)=\"xemBaoCao()\" type=\"button\" color=\"primary\" [disabled]=\"!isExistData\" class=\"ml-1\"\n                mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!isExistData\" type=\"PDF\" typeSize=\"{{printSize}}\"\n                [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\" [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n<ng-template #headerTongHopTonKhoTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"KhoVatTuTongHop\" fxFlex=\"300px\" fxFlex.sm=\"auto\" label=\"Chọn Kho\"\n                url=\"TonKho/GetKhoVatTus\" popupSettings=\"\" class=\"mt-1 on-header\" style=\"margin-left: 5px;\"\n                [autoSelectFirstItem]=\"true\" [(model)]=\"searchInfoTongHopTonKho.KhoId\"\n                [modelText]=\"searchInfoTongHopTonKho.TenKho\" [bind]=\"true\"\n                (modelChange)=\"KhoTonKhoChange($event)\" (selectionChange)=\"KhoChangeTongHopTonKho($event)\">\n            </app-combobox>\n\n            <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\"\n                    placeholder=\"{{searchPlaceHolder}}\" [formControl]=\"searchCtrl\"\n                    [(ngModel)]=\"searchInfoTongHopTonKho.SearchString\" (keyup)=\"onKeyTongHopTonKho($event)\"\n                    (ngModelChange)=\"searchChangeTongHopTonKho()\" />\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelTonKhoTongHop()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataTongHopTonKho\" mat-raised-button mat-button>Xuất Excel</button>\n            <button (click)=\"xemBaoCaoTonKhoTongHop()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataTongHopTonKho\" class=\"ml-1\" mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!isExistDataTongHopTonKho\" type=\"PDF\"\n                typeSize=\"{{printSize}}\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\"\n                [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #headerNhapXuatTonKhoTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\">\n        <div fxFlex=\"80%\">\n            <app-combobox id=\"KhoVatTuNhapXuat\" fxFlex=\"300px\" fxFlex.sm=\"auto\"\n                [(model)]=\"searchInfoNhapXuatTonKho.KhoId\" (selectionChange)=\"KhoChangeNhapXuatTonKho($event)\"\n                [autoSelectFirstItem]=\"true\" [modelText]=\"searchInfoNhapXuatTonKho.TenKho\" label=\"Chọn Kho\"\n                url=\"TonKho/GetKhoVatTus\" [bind]=\"true\" popupSettings=\"\" class=\"mt-1 on-header\"\n                style=\"margin-left: 5px;\">\n            </app-combobox>\n\n            <app-daterangepicker style=\"margin-left: 5px;\" id=\"Daterange\" fxFlex=\"300px\" fxFlex.sm=\"auto\"\n                [(model)]=\"searchInfoNhapXuatTonKho.RangeDate\" label=\"Từ ngày - Đến ngày\"\n                (keyup)=\"onKeyNhapXuatTonKho($event)\" (modelChange)=\"changDateRangeNhapXuatTonKho($event)\"\n                class=\"mt-1 on-header\">\n            </app-daterangepicker>\n\n            <div class=\"bg-card rounded-full border px-4\" style=\"margin-left: 20px;\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n                fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px; margin-left: 5px;\">\n                <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                <input [formControl]=\"searchCtrl\" class=\"px-3 py-2 border-0 outline-none w-full bg-transparent\"\n                    placeholder=\"{{searchPlaceHolder}}\" type=\"search\" name=\"Description\"\n                    [(ngModel)]=\"searchInfoNhapXuatTonKho.SearchString\" (keyup)=\"onKeyNhapXuatTonKho($event)\"\n                    (ngModelChange)=\"searchChangeNhapXuatTonKho()\" />\n            </div>\n        </div>\n        <div class=\"text-right\" fxFlex=\"20%\" style=\"margin: 5px;\">\n            <button (click)=\"exportExcelTonKhoNhapXuat()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataNhapXuatTonKho\" mat-raised-button mat-button>Xuất Excel</button>\n            <button (click)=\"xemBaoCaoTonKhoNhapXuat()\" type=\"button\" color=\"primary\"\n                [disabled]=\"!isExistDataNhapXuatTonKho\" class=\"ml-1\" mat-raised-button mat-button>Xem\n            </button>\n            <app-print-form textPrint=\"In\" [isDisable]=\"!isExistDataNhapXuatTonKho\" type=\"PDF\"\n                typeSize=\"{{printSize}}\" [bodyComponent]=\"this\" [showInMenuItem]=\"false\" [showIconPrint]=\"false\"\n                [typeLayout]=\"printLayout\">\n            </app-print-form>\n        </div>\n    </div>\n</ng-template>\n<ng-template #actionTongHopTonKhoTemplate let-dataItem>\n    <button *ngIf=\"searchInfoTongHopTonKho.KhoId!=null&&searchInfoTongHopTonKho.KhoId>0\" (click)=\"suaTonKho(dataItem)\"\n        type=\"button\" color=\"primary\" style=\"text-align: center;\" mat-raised-button mat-button>Chi tiết tồn kho\n    </button>\n</ng-template>\n<ng-template #templateHeaderTemplate let-column=\"column\" let-columnIndex=\"columnIndex\">\n    SỐ LƯỢNG TỒN <span style=\"color: red;\"> KHẢ DỤNG</span>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div style=\"float: right;\">\n    \n    </div>\n\n    <div class=\"showPdf\" >\n        <div style=\"text-align: center; margin-top:80px;\" *ngIf=\"loading==true\">\n            <h4 class=\"mb-3\">Đang load dữ liệu</h4>\n            <button *ngIf=\"loading\" color=\"primary\" mat-raised-button type=\"button\">\n                <img src=\"/assets/img/loader.gif\" alt=\"Loading\" style=\"display: inline;\" />\n            </button>\n        </div>\n    </div>\n</mat-dialog-content>\n\n<hr style=\"border: 1px solid black; margin-top: 50px;\">\n<mat-dialog-actions fxLayoutAlign=\"end center\" class=\"float-right\" fxLayoutGap=\"8px\">\n    <!-- <button mat-raised-button mat-button color=\"primary\" [mat-dialog-close]=\"true\" cdkFocusInitial>In</button> -->\n    <app-print-form fxFlex='100%'  textPrint=\"In Báo Cáo\" type=\"PDF\" typeSize=\"{{printSize}}\"\n        [typeLayout]=\"printLayout\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3N1YS12YXQtdHUtdG9uLWtoby1wb3B1cC9zdWEtdmF0LXR1LXRvbi1raG8tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: SuaVatTuTonKhoPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuaVatTuTonKhoPopupComponent", function() { return SuaVatTuTonKhoPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");














let SuaVatTuTonKhoPopupComponent = class SuaVatTuTonKhoPopupComponent {
    constructor(data, sanitizer, cdRef, dialogRef, authService, apiService, dialog, notificationService) {
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
    ngOnInit() {
        let queryString = "{\"KhoId\":" + this.vatTu.data.kho.KhoId + ",\"VatTuId\":" + this.vatTu.data.dataItem.Id + "}";
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
    }
    close() {
        this.dialogRef.close(null);
    }
    luu() {
        let lstDataVatTuChiTietCurrent = this.gridVatTuTonKho.getAllDataFromDatasource();
        this.nhapKhoVatTuTonKhoViewModel.NhapKhoVatTuChiTiets = lstDataVatTuChiTietCurrent;
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ['Lưu']) }
        }).afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.validationErrors = [];
                this.cdRef.detectChanges();
                // this.nhapKhoVatTuTonKhoViewModel.Id = this.vatTu.data.dataItem.Id;
                if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_13__["SecurityOperation"].Update)) {
                    this.apiService.post("TonKho/CapNhatChiTietVatTuTonKho", this.nhapKhoVatTuTonKhoViewModel).subscribe(() => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_7__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Cập nhật tồn kho"]));
                        //this.dialogRef.close();
                        this.gridVatTuTonKho.search();
                        //this.getTongTonKhoCuaVatTu();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
                else {
                    this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    totalTon() {
        return this.gridPopup._gridDataSource == undefined ? 0 : this.gridPopup._gridDataSource.data.reduce((sum, item) => sum + (item.Loai == 1 ? item.SoLuong - item.SoLuongDaXuat : 0), 0);
    }
    ;
    extOnDataBound(dataItem) {
        // dataItem.Data.forEach(element => {
        //   if (element.Loai == 1) {
        //     this.tongTon += element.SoLuong - element.SoLuongDaXuat;
        //   }
        // });
        this.getTongTonKhoCuaVatTu();
    }
    getTongTonKhoCuaVatTu() {
        this.tongTonKho = null;
        this.apiService.post('TonKho/GetTongTonKhoCuaVatTu', this.gridVatTuTonKho._gridQueryInfo).subscribe(resultData => {
            this.tongTonKho = resultData;
        });
    }
    soLuongChange() {
        // let lstDataVatTuChiTietCurrent = this.gridVatTuTonKho.getAllDataFromDatasource();
        // this.tongTon = 0;
        // lstDataVatTuChiTietCurrent.forEach(element => {
        //   if (element.Loai == 1) {
        //     this.tongTon += element.SoLuong - element.SoLuongDaXuat;
        //   }
        // });
    }
};
SuaVatTuTonKhoPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] }
];
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



/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3ZhdC10dS10b24ta2hvLWNoaS10aWV0L3ZhdC10dS10b24ta2hvLWNoaS10aWV0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-chi-tiet/vat-tu-ton-kho-chi-tiet.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: VatTuTonKhoChiTietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoChiTietComponent", function() { return VatTuTonKhoChiTietComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es2015/main.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");










let VatTuTonKhoChiTietComponent = class VatTuTonKhoChiTietComponent {
    constructor(data, dialogRef, dialog, cd, apiService, authService, notificationService) {
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
    ngOnInit() {
        this.getQueryString();
        this.getChiTiet(this.model.KhoId, this.model.VatTuId);
        this.gridColumns = [
            { Field: "Ngay", Title: "Ngày", Width: 100, Sortable: true, Template: this.ngayTemplate },
            { Field: "SoPhieu", Title: "Số phiếu", Width: 100, Sortable: true },
            { Field: "Nhap", Title: "Nhập", Width: 100, Sortable: true, Template: this.nhapTemplate },
            { Field: "Xuat", Title: "Xuất", Width: 100, Sortable: true, Template: this.xuatTemplate },
            { Field: "Ton", Title: "Tồn", Width: 100, Sortable: true, Template: this.tonTemplate },
        ];
    }
    getQueryString() {
        let KhoQueryString = this.model.KhoId;
        let VatTuQueryString = this.model.VatTuId;
        // let RangeDateQueryString = "{\"TuNgay\":" + "\"" + this.ConvertDateTime(this.model.RangeDate.startDate) + "\""  + ",\"DenNgay\":" + "\""  + this.ConvertDateTime(this.model.RangeDate.endDate) + "\""  + "}";
        let RangeDateQueryString = "";
        RangeDateQueryString += this.model.RangeDate.startDate ? '{"TuNgay":' + '"' + this.ConvertDateTime(this.model.RangeDate.startDate) + '"' : '{"TuNgay":' + null;
        RangeDateQueryString += this.model.RangeDate.endDate ? ',"DenNgay":' + '"' + this.ConvertDateTime(this.model.RangeDate.endDate) + '"' + '}' : ',"DenNgay":' + null + '}';
        let SortQueryString = null;
        if (this.gridPopup) {
            SortQueryString = JSON.stringify(this.gridPopup.sort);
        }
        let queryString = "{\"KhoId\":" + KhoQueryString + ",\"VatTuId\":" + VatTuQueryString + ",\"Sort\":" + SortQueryString + ",\"RangeDate\":" + RangeDateQueryString + "}";
        this.defaultAdditionalSearchString = queryString;
        this.addData(queryString);
    }
    addData(queryString) {
        // this.aggregates = [{
        // 	field: 'UnitPrice',
        // 	aggregate: 'sum'
        // }];
        // this.group = [{
        // 	field: 'Discontinued',
        // 	aggregates: this.aggregates
        // }];
        let model = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_4__["QueryInfo"]();
        model.AdditionalSearchString = queryString;
        model.Sort = this.gridPopup.sort ? this.gridPopup.sort : this.sortConfig;
        // model.Sort = this.gridPopup.sort;
        this.apiService.post("TonKho/GetDanhSachVatTuTonKhoNhapXuatChiTietForGridAsync/", model).subscribe(resultData => {
            if (resultData) {
                this.dataExportExcel = resultData.Data;
                this.dataExportExcel.forEach(element => {
                    element.ChiTiet = { kho: this.chiTietModel.KhoDisplay, vatTu: this.chiTietModel.TenVatTu };
                });
                // this.group = [{
                // 	field: 'ChiTiet'
                // }];
                this.dataExportExcel = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_5__["process"])(this.dataExportExcel, {
                // group: this.group
                }).data;
            }
        });
    }
    getChiTiet(khoId, vatTuId) {
        this.chiTietModel = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_4__["ChiTietVatTuTonKhoNhapXuat"]();
        this.chiTietModel.VatTuId = vatTuId;
        this.chiTietModel.KhoId = khoId;
        this.apiService.post("TonKho/GetVatTuAndKhoName/", this.chiTietModel).subscribe(resultData => {
            if (resultData != null) {
                this.chiTietModel = resultData;
                if (!this.chiTietModel.KhoDisplay || this.chiTietModel.KhoDisplay == "") {
                    this.chiTietModel.KhoDisplay = "Tất cả";
                }
            }
        });
    }
    ConvertDateTime(datime) {
        var date = new Date(datime);
        var year = date.getFullYear();
        var rawMonth = parseInt(String(date.getMonth())) + 1;
        var month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        var rawDay = parseInt(String(date.getDate()));
        var day = rawDay < 10 ? '0' + rawDay : rawDay;
        return year + '-' + month + '-' + day;
    }
};
VatTuTonKhoChiTietComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] }
];
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



/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".k-tabstrip > .k-content {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2Jhby1jYW8vdG9uLWtoby92YXQtdHUvdmF0LXR1LXRvbi1raG8vdmF0LXR1LXRvbi1raG8tbGlzdC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGJhby1jYW9cXHRvbi1raG9cXHZhdC10dVxcdmF0LXR1LXRvbi1raG9cXHZhdC10dS10b24ta2hvLWxpc3RcXHZhdC10dS10b24ta2hvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3ZhdC10dS10b24ta2hvLWxpc3QvdmF0LXR1LXRvbi1raG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vYmFvLWNhby90b24ta2hvL3ZhdC10dS92YXQtdHUtdG9uLWtoby92YXQtdHUtdG9uLWtoby1saXN0L3ZhdC10dS10b24ta2hvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuay10YWJzdHJpcCA+IC5rLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59IiwiLmstdGFic3RyaXAgPiAuay1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: VatTuTonKhoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoListComponent", function() { return VatTuTonKhoListComponent; });
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
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _sua_vat_tu_ton_kho_popup_sua_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/sua-vat-tu-ton-kho-popup/sua-vat-tu-ton-kho-popup.component.ts");

























let VatTuTonKhoListComponent = class VatTuTonKhoListComponent {
    constructor(dialog, authService, notificationService, apiService, cd) {
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
    ngOnInit() {
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
    }
    getFirstKho() {
        this.apiService.post('TonKho/GetFirstKhoVatTu').subscribe(res => {
            if (res) {
                this.searchInfo.KhoId = res.KeyId;
                this.searchInfo.TenKho = res.DisplayName;
                this.searchInfoTongHopTonKho.KhoId = res.KeyId;
                this.searchInfoTongHopTonKho.TenKho = res.DisplayName;
                this.searchInfoNhapXuatTonKho.KhoId = res.KeyId;
                this.searchInfoNhapXuatTonKho.TenKho = res.DisplayName;
                if (this.searchInfo.KhoId && this.tabCanhBaoTonKhoEnabled) {
                    this.searchTonKho();
                }
            }
            else {
                this.searchInfo.KhoId = 0;
                this.searchInfo.TenKho = '';
                this.searchInfoTongHopTonKho.KhoId = 0;
                this.searchInfoTongHopTonKho.TenKho = '';
                this.searchInfoNhapXuatTonKho.KhoId = 0;
                this.searchInfoNhapXuatTonKho.TenKho = '';
            }
        }, () => { });
    }
    onTabSelect(event) {
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
    }
    deselectedTab() {
        this.tabCanhBaoTonKhoEnabled = false;
        this.tabTongHopTonKhoEnabled = false;
        this.tabNhapXuatTonKhoEnabled = false;
    }
    KhoChange(event) {
        if (event === undefined) {
            this.searchInfo.KhoId = 0;
            this.searchTonKho();
            return;
        }
        this.searchInfo.KhoId = event.KeyId;
        this.searchInfo.TenKho = event.DisplayName;
        this.searchTonKho();
    }
    KhoChangeTongHopTonKho(event) {
        if (event === undefined) {
            this.searchInfoTongHopTonKho.KhoId = 0;
            this.searchTonKhoTongHop();
            return;
        }
        this.searchInfoTongHopTonKho.KhoId = event.KeyId;
        this.searchInfoTongHopTonKho.TenKho = event.DisplayName;
        this.searchTonKhoTongHop();
    }
    KhoTonKhoChange(khoId) {
        this.searchInfoTongHopTonKho.KhoId = khoId == undefined ? 0 : khoId;
        this.searchTonKhoTongHop();
    }
    KhoChangeNhapXuatTonKho(event) {
        if (event === undefined) {
            this.searchInfoNhapXuatTonKho.KhoId = 0;
            this.searchTonKhoNhapXuat();
            return;
        }
        this.searchInfoNhapXuatTonKho.KhoId = event.KeyId;
        this.searchInfoNhapXuatTonKho.TenKho = event.DisplayName;
        this.searchTonKhoNhapXuat();
    }
    CanhBaoChange(event) {
        if (event === undefined) {
            this.searchInfo.CanhBaoId = 0;
            this.searchInfo.LoaiCanhBao = 'Tất cả';
            this.searchTonKho();
            return;
        }
        this.searchInfo.LoaiCanhBao = event.DisplayName;
        this.searchTonKho();
    }
    getQueryStringTonKhoCanhBao() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let CanhBaoQueryString = null;
        let SortQueryString = null;
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
    }
    getQueryStringTonKhoTongHop() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let SortQueryString = null;
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
    }
    getQueryStringTonKhoNhapXuat() {
        let KhoQueryString = 0;
        let SearchQueryString = null;
        let RangeDateQueryString = null;
        let SortQueryString = null;
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
    }
    searchTonKho() {
        let queryString = this.getQueryStringTonKhoCanhBao();
        this.defaultAdditionalSearchStringCanhBaoTonKho = queryString;
        if (this.gridChildCanhBaoTonKho) {
            this.gridChildCanhBaoTonKho._additionalSearchString = queryString;
            this.gridChildCanhBaoTonKho.search();
        }
    }
    searchTonKhoTongHop() {
        let queryString = this.getQueryStringTonKhoTongHop();
        this.defaultAdditionalSearchStringTongHopTonKho = queryString;
        if (this.gridChildTongHopTonKho) {
            this.gridChildTongHopTonKho._additionalSearchString = queryString;
            this.gridChildTongHopTonKho.search();
        }
    }
    searchTonKhoNhapXuat() {
        let queryString = this.getQueryStringTonKhoNhapXuat();
        this.defaultAdditionalSearchStringNhapXuatTonKho = queryString;
        if (this.gridChildNhapXuatTonKho) {
            this.gridChildNhapXuatTonKho._additionalSearchString = queryString;
            this.gridChildNhapXuatTonKho.search();
        }
    }
    searchChange() {
        if (this.searchInfo.SearchString == null || this.searchInfo.SearchString == undefined || this.searchInfo.SearchString == "") {
            this.searchInfo.SearchString = undefined;
            this.searchTonKho();
        }
    }
    searchChangeTongHopTonKho() {
        if (this.searchInfoTongHopTonKho.SearchString == null || this.searchInfoTongHopTonKho.SearchString == undefined || this.searchInfoTongHopTonKho.SearchString == "") {
            this.searchInfoTongHopTonKho.SearchString = undefined;
            this.searchTonKhoTongHop();
        }
    }
    searchChangeNhapXuatTonKho() {
        if (this.searchInfoNhapXuatTonKho.SearchString == null || this.searchInfoNhapXuatTonKho.SearchString == undefined || this.searchInfoNhapXuatTonKho.SearchString == "") {
            this.searchInfoNhapXuatTonKho.SearchString = undefined;
            this.searchTonKhoNhapXuat();
        }
    }
    changDateRangeNhapXuatTonKho(event) {
        this.searchTonKhoNhapXuat();
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.searchTonKho();
        }
    }
    onKeyTongHopTonKho(event) {
        if (event.key == "Enter") {
            this.searchTonKhoTongHop();
        }
    }
    onKeyNhapXuatTonKho(event) {
        if (event.key == "Enter") {
            this.searchTonKhoNhapXuat();
        }
    }
    onDataBoundGrid(event) {
        if (event && event.Data.length > 0) {
            this.isExistData = true;
        }
        else {
            this.isExistData = false;
        }
    }
    onDataBoundGridTongHopTonKho(event) {
        if (event && event.Data.length > 0) {
            this.isExistDataTongHopTonKho = true;
        }
        else {
            this.isExistDataTongHopTonKho = false;
        }
    }
    onDataBoundGridNhapXuatTonKho(event) {
        if (event && event.Data.length > 0) {
            this.isExistDataNhapXuatTonKho = true;
        }
        else {
            this.isExistDataNhapXuatTonKho = false;
        }
    }
    xemBaoCao() {
        let dialogRef = this.dialog.open(_vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__["VatTuTonKhoPopupComponent"], {
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
        dialogRef.afterClosed().subscribe(res => { });
    }
    xemBaoCaoTonKhoTongHop() {
        let dialogRef = this.dialog.open(_vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__["VatTuTonKhoPopupComponent"], {
            //disableClose: true,
            width: '794px',
            // height: '500px',
            data: {
                queryString: this.getQueryStringTonKhoTongHop(),
                type: _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["LoaiTonKhoVatTu"].TongHopTonKhoVatTu,
                Title: "Xác nhận"
            }
        });
        dialogRef.afterClosed().subscribe(res => { });
    }
    xemBaoCaoTonKhoNhapXuat() {
        let dialogRef = this.dialog.open(_vat_tu_ton_kho_popup_vat_tu_ton_kho_popup_component__WEBPACK_IMPORTED_MODULE_9__["VatTuTonKhoPopupComponent"], {
            //disableClose: true,
            width: '794px',
            // height: '500px',
            data: {
                queryString: this.getQueryStringTonKhoNhapXuat(),
                type: _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["LoaiTonKhoVatTu"].NhapXuatTonKhoVatTu,
                Title: "Xác nhận"
            }
        });
        dialogRef.afterClosed().subscribe(res => { });
    }
    xemChiTietNhapXuatTonKho(vatTuId) {
        const chiTiet = new _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_3__["VatTuTonKhoNhapXuatChiTiet"]();
        chiTiet.VatTuId = vatTuId;
        chiTiet.KhoId = this.searchInfoNhapXuatTonKho.KhoId ? this.searchInfoNhapXuatTonKho.KhoId : 0;
        chiTiet.RangeDate = this.searchInfoNhapXuatTonKho.RangeDate;
        const dialogRef = this.dialog.open(_vat_tu_ton_kho_chi_tiet_vat_tu_ton_kho_chi_tiet_component__WEBPACK_IMPORTED_MODULE_14__["VatTuTonKhoChiTietComponent"], {
            width: '900px',
            data: { Model: chiTiet, Title: 'Thẻ kho' }
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log('Ketqua', result)
        });
    }
    getSharedPrintForm() {
        if (this.tabCanhBaoTonKhoEnabled) {
            return new Promise(resolve => {
                this.apiService.get(`TonKho/GetVatTuTonKhoCanhBaoHTML?search=${this.getQueryStringTonKhoCanhBao()}`).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }
        if (this.tabTongHopTonKhoEnabled) {
            return new Promise(resolve => {
                this.apiService.get(`TonKho/GetVatTuTonKhoTongHopHTML?search=${this.getQueryStringTonKhoTongHop()}`).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }
        if (this.tabNhapXuatTonKhoEnabled) {
            return new Promise(resolve => {
                this.apiService.get(`TonKho/GetVatTuTonKhoNhapXuatHTML?search=${this.getQueryStringTonKhoNhapXuat()}`).subscribe(resultData => {
                    resolve(resultData);
                });
            });
        }
    }
    exportExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("TonKho/ExportVatTuTonKhoCanhBao", this.gridChildCanhBaoTonKho._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "CanhBaoVatTuTonKho" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcelTonKhoTongHop() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("TonKho/ExportVatTuTonKhoTongHop", this.gridChildTongHopTonKho._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoTongHop" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    exportExcelTonKhoNhapXuat() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("TonKho/ExportVatTuTonKhoNhapXuat", this.gridChildNhapXuatTonKho._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "VatTuTonKhoNhapXuat" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    ConvertDateTime(datime) {
        const date = new Date(datime);
        const year = date.getFullYear();
        const rawMonth = parseInt(String(date.getMonth())) + 1;
        const month = rawMonth < 10 ? '0' + rawMonth : rawMonth;
        const rawDay = parseInt(String(date.getDate()));
        const day = rawDay < 10 ? '0' + rawDay : rawDay;
        return year + '-' + month + '-' + day;
    }
    suaTonKho(dataItem) {
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
            data: { data },
        })
            .afterClosed()
            .subscribe(result => {
            this.gridChildTongHopTonKho.setDataSource();
        });
    }
};
VatTuTonKhoListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
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



/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9iYW8tY2FvL3Rvbi1raG8vdmF0LXR1L3ZhdC10dS10b24ta2hvL3ZhdC10dS10b24ta2hvLXBvcHVwL3ZhdC10dS10b24ta2hvLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: VatTuTonKhoPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoPopupComponent", function() { return VatTuTonKhoPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vat-tu-ton-kho.model */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts");






let VatTuTonKhoPopupComponent = class VatTuTonKhoPopupComponent {
    constructor(dialogRef, data, apiService, notificationService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.loading = false;
        this.url = '';
        this.printLayout = 'Portrait';
        this.printSize = 'A4';
    }
    ngOnInit() {
        this.GetHTML();
    }
    GetHTML() {
        this.loading = true;
        switch (this.data.type) {
            case _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__["LoaiTonKhoVatTu"].CanhBaoTonKhoVatTu:
                this.url = `TonKho/GetVatTuTonKhoCanhBaoHTML?search=${this.data.queryString}`;
                break;
            case _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__["LoaiTonKhoVatTu"].TongHopTonKhoVatTu:
                this.url = `TonKho/GetVatTuTonKhoTongHopHTML?search=${this.data.queryString}`;
                break;
            case _vat_tu_ton_kho_model__WEBPACK_IMPORTED_MODULE_5__["LoaiTonKhoVatTu"].NhapXuatTonKhoVatTu:
                this.url = `TonKho/GetVatTuTonKhoNhapXuatHTML?search=${this.data.queryString}`;
                break;
        }
        this.apiService.get(this.url).subscribe(res => {
            if (res != null) {
                var html = res;
                $(".a").show();
                $(".showPdf").append(html);
            }
            this.loading = false;
        }, (err) => {
            this.notificationService.showError(err.Message);
        });
    }
    getSharedPrintForm() {
        return new Promise(resolve => {
            this.apiService.get(this.url).subscribe(resultData => {
                resolve(resultData);
                this.dialogRef.close(resultData);
            });
        });
    }
};
VatTuTonKhoPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
VatTuTonKhoPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vat-tu-ton-kho-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vat-tu-ton-kho-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vat-tu-ton-kho-popup.component.scss */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-popup/vat-tu-ton-kho-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], VatTuTonKhoPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VatTuTonKhoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoRoutingModule", function() { return VatTuTonKhoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _vat_tu_ton_kho_list_vat_tu_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vat-tu-ton-kho-list/vat-tu-ton-kho-list.component */ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho-list/vat-tu-ton-kho-list.component.ts");







const routes = [{
        path: '',
        component: _vat_tu_ton_kho_list_vat_tu_ton_kho_list_component__WEBPACK_IMPORTED_MODULE_6__["VatTuTonKhoListComponent"],
        data: {
            title: 'Danh sách vật tư tồn kho',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].VatTuTonKho,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }];
let VatTuTonKhoRoutingModule = class VatTuTonKhoRoutingModule {
};
VatTuTonKhoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VatTuTonKhoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.model.ts ***!
  \********************************************************************************************/
/*! exports provided: SearchVatTuTonKhoCanhBao, SearchVatTuTonKhoTongHop, SearchVatTuTonKhoNhapXuat, VatTuTonKhoNhapXuatChiTiet, ChiTietVatTuTonKhoNhapXuat, Sort, RangeDate, LoaiTonKhoVatTu, QueryInfo, CapNhatTonKhoVatTuItem, CapNhatTonKhoItemDetail, NhapKhoVatTuTonKhoViewModel, NhapKhoVatTuChiTietTonKhoViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuTonKhoCanhBao", function() { return SearchVatTuTonKhoCanhBao; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuTonKhoTongHop", function() { return SearchVatTuTonKhoTongHop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVatTuTonKhoNhapXuat", function() { return SearchVatTuTonKhoNhapXuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoNhapXuatChiTiet", function() { return VatTuTonKhoNhapXuatChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChiTietVatTuTonKhoNhapXuat", function() { return ChiTietVatTuTonKhoNhapXuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaiTonKhoVatTu", function() { return LoaiTonKhoVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfo", function() { return QueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatTonKhoVatTuItem", function() { return CapNhatTonKhoVatTuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapNhatTonKhoItemDetail", function() { return CapNhatTonKhoItemDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuTonKhoViewModel", function() { return NhapKhoVatTuTonKhoViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuChiTietTonKhoViewModel", function() { return NhapKhoVatTuChiTietTonKhoViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SearchVatTuTonKhoCanhBao {
    constructor() {
        this.KhoId = null;
        this.TenKho = null;
        this.SearchString = null;
        this.CanhBaoId = 0;
        this.LoaiCanhBao = "Tất cả";
    }
}
class SearchVatTuTonKhoTongHop {
    constructor() {
        this.KhoId = null;
        this.TenKho = null;
        this.SearchString = null;
    }
}
class SearchVatTuTonKhoNhapXuat {
    constructor() {
        this.KhoId = null;
        this.TenKho = null;
        this.SearchString = null;
        this.RangeDate = new RangeDate();
        this.Sort = new Array();
    }
}
class VatTuTonKhoNhapXuatChiTiet {
    constructor() {
        this.KhoId = null;
        this.VatTuId = 0;
        this.RangeDate = new RangeDate();
    }
}
class ChiTietVatTuTonKhoNhapXuat {
    constructor(KhoId = null, KhoDisplay = null, VatTuId = 0, TenVatTu = null) {
        this.KhoId = KhoId;
        this.KhoDisplay = KhoDisplay;
        this.VatTuId = VatTuId;
        this.TenVatTu = TenVatTu;
    }
}
class Sort {
    constructor(Field = null, Dir = null) {
        this.Field = Field;
        this.Dir = Dir;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = new Date()) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
var LoaiTonKhoVatTu;
(function (LoaiTonKhoVatTu) {
    LoaiTonKhoVatTu[LoaiTonKhoVatTu["CanhBaoTonKhoVatTu"] = 1] = "CanhBaoTonKhoVatTu";
    LoaiTonKhoVatTu[LoaiTonKhoVatTu["TongHopTonKhoVatTu"] = 2] = "TongHopTonKhoVatTu";
    LoaiTonKhoVatTu[LoaiTonKhoVatTu["NhapXuatTonKhoVatTu"] = 3] = "NhapXuatTonKhoVatTu";
})(LoaiTonKhoVatTu || (LoaiTonKhoVatTu = {}));
class QueryInfo {
    constructor(AdditionalSearchString = null, SearchString = "", Sort = null) {
        this.AdditionalSearchString = AdditionalSearchString;
        this.SearchString = SearchString;
        this.Sort = Sort;
    }
}
class CapNhatTonKhoVatTuItem {
    constructor(VatTuId = 0, CapNhatTonKhoItemDetails = []) {
        this.VatTuId = VatTuId;
        this.CapNhatTonKhoItemDetails = CapNhatTonKhoItemDetails;
    }
}
class CapNhatTonKhoItemDetail {
    constructor(Id = 0, HanSuDung = null, SoLuong = null, Loai = null) {
        this.Id = Id;
        this.HanSuDung = HanSuDung;
        this.SoLuong = SoLuong;
        this.Loai = Loai;
    }
}
class NhapKhoVatTuTonKhoViewModel {
    constructor(Id = 0, VatTuId = 0, VatTu = null, NhapKhoVatTuChiTiets = []) {
        this.Id = Id;
        this.VatTuId = VatTuId;
        this.VatTu = VatTu;
        this.NhapKhoVatTuChiTiets = NhapKhoVatTuChiTiets;
    }
}
class NhapKhoVatTuChiTietTonKhoViewModel {
    constructor(Id = 0, SoLo = null, HanSuDung = null, MaRef = null, MaVach = null, DonGiaNhap = null, VAT = null, TiLeBHYTThanhToan = null, LaVatTuBHYT = null, SoLuong = null, Loai = null) {
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
}


/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: VatTuTonKhoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoModule", function() { return VatTuTonKhoModule; });
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


























let VatTuTonKhoModule = class VatTuTonKhoModule {
};
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



/***/ }),

/***/ "./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/bao-cao/ton-kho/vat-tu/vat-tu-ton-kho/vat-tu-ton-kho.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: VatTuTonKhoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VatTuTonKhoService", function() { return VatTuTonKhoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let VatTuTonKhoService = class VatTuTonKhoService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'TonKho';
    }
};
VatTuTonKhoService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
VatTuTonKhoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VatTuTonKhoService);



/***/ })

}]);
//# sourceMappingURL=bao-cao-ton-kho-vat-tu-vat-tu-ton-kho-vat-tu-ton-kho-module-es2015.js.map