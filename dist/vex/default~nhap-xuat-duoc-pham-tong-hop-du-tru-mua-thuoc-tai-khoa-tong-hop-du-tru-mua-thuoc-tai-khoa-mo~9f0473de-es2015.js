(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~nhap-xuat-duoc-pham-tong-hop-du-tru-mua-thuoc-tai-khoa-tong-hop-du-tru-mua-thuoc-tai-khoa-mo~9f0473de"],{

/***/ "./node_modules/@iconify/icons-ic/cancel.js":
/*!**************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/cancel.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/sharp-edit.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/sharp-edit.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/twotone-info.js":
/*!********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/twotone-info.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path opacity=\".3\" d=\"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/><path d=\"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/@iconify/icons-ic/warning.js":
/*!***************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/warning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Dự trù mua',Path:''}\n            ,{Title:'Yêu cầu dự trù mua dược phẩm',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                pageSize=\"50\" urlGetData=\"YeuCauMuaDuocPham/GetYeuCauMuaDuocPhamDataForGridAsync\"\n                urlGetTotalPage=\"YeuCauMuaDuocPham/GetYeuCauMuaDuocPhamTotalPageForGridAsync\" [sort]=\"sort\"\n                [headerTemplate]=\"headerTemplate\" [additionalSearchString]=\"additionalSearchString\">\n\n                <ng-template #ngayYeuCauTemplate let-dataItem>\n                    {{dataItem.NgayYeuCauDisplay}}\n                </ng-template>\n                <ng-template #ngayTaiKhoaTemplate let-dataItem>\n                    {{dataItem.NgayTaiKhoaDisplay}}\n                </ng-template>\n                <ng-template #ngayTaiKhoDuocTemplate let-dataItem>\n                    {{dataItem.NgayTaiKhoDuocDisplay}}\n                </ng-template>\n                <ng-template #ngayTaiGiamDocTemplate let-dataItem>\n                    {{dataItem.NgayTaiGiamDocDisplay}}\n                </ng-template>\n\n                <ng-template #tinhTrangTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                        <span>Chờ duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                        <span>Đã duyệt</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 2\" class=\"red\">\n                        <span>Từ chối</span>\n                    </label>\n                </ng-template>\n                <ng-template #soPhieuTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"chinhSua(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.SoPhieu}}\">\n                                {{dataItem.SoPhieu}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'choduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauMuaThuoc.ChoDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'daduyet')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauMuaThuoc.DaDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Đã duyệt\">\n                    </app-checkbox>\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'tuchoi')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"danhSachYeuCauMuaThuoc.TuChoiDuyet\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" label=\"Từ chối\">\n                    </app-checkbox>\n\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"danhSachYeuCauMuaThuoc.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-ngay-yeu-cau\" fxFlex=\"250px\"\n                        fxFlex.sm=\"auto\" [(model)]=\"danhSachYeuCauMuaThuoc.RangeFromDate\"\n                        label=\"Yêu cầu từ ngày - đến ngày\" (keyup)=\"onKey($event)\"\n                        (modelChange)=\"changeNgayBatDauRange()\" (blur)=\"blur()\" class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <button (click)=\"taoPhieuMuaThuoc()\" class=\"ml-4 right\" style=\"right: 20px;\" color=\"primary\"\n                        fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Tạo phiếu\" type=\"button\">\n                        <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                    </button>\n\n                </div>\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n                    <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n                </button>\n                <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                    <ng-template let-customer=\"customer\" matMenuContent>\n                        <button *ngIf=\"dataItem.TinhTrang == 0 && dataItem.IsKhoaDuyet == null\"\n                            (click)=\"chinhSua(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                            <span>Sửa</span>\n                        </button>\n                        <button *ngIf=\"dataItem.TinhTrang == 0 && dataItem.IsKhoaDuyet == null\"\n                            (click)=\"xoa(dataItem.Id)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                            <span>Xóa</span>\n                        </button>\n                        <button (click)=\"inPhieu(dataItem.Id, dataItem.NhomDuocPhamDuTru)\" mat-menu-item>\n                            <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                            <span>In phiếu</span>\n                        </button>\n                    </ng-template>\n                </mat-menu>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div [innerHtml]=\"Message\"></div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('YesAndPrint')\">{{ButtonYesAndPrint}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù mua',Path:''}\n                ,{Title:'Yêu cầu dự trù mua dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham' , queryParams: {holdQuery : true},Active:true}\n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 *ngIf=\"trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n                    class=\"title m-0\">Chi tiết dự trù mua dược phẩm</h2>\n                <h2 *ngIf=\"trangThaiVo != null && (trangThaiVo.TrangThai == null)\" class=\"title m-0\">Lập dự trù mua dược\n                    phẩm</h2>\n\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == true\"\n                    style=\"color:green\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == false\"\n                    style=\"color:red\">{{trangThaiVo.Ten}}</b>\n                <b class=\"status-yeu-cau-linh ycl-cho-duyet\"\n                    *ngIf=\"trangThaiVo != null && trangThaiVo.TrangThai == null\"\n                    style=\"color:orange\">{{trangThaiVo.Ten}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <!-- [trangThaiVo]=\"trangThaiVo\" -->\n\n                <app-lap-phieu-mua-duoc-pham-shared [validationErrorsDuocPham]=\"validationErrors\" #temp\n                    *ngIf=\"trangThaiVo!=null\" [isCreate]=\"trangThaiVo.TrangThai==null\"\n                    (hideGuibtn)=\"anHienButtonDuyet($event)\" [trangThaiVo]=\"trangThaiVo\">\n                </app-lap-phieu-mua-duoc-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" [disabled]=\"!isHideDuyet\" (click)=\"inPhieuMuaThuoc()\" color=\"primary\"\n                        mat-raised-button><i class=\"ft-save\"></i>\n                        In phiếu </button>\n\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null \n                                && trangThaiVo.IsKhoDuocDuyet == null && trangThaiVo.IsGiamDocDuyet == null \n                                && trangThaiVo.TrangThai == null\" type=\"button\" title=\"Phím tắt: Esc\"\n                        (click)=\"cancel()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i>\n                        Hủy</button>\n                    <button *ngIf=\"trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null \n                                && trangThaiVo.IsKhoDuocDuyet == null && trangThaiVo.IsGiamDocDuyet == null \n                                && trangThaiVo.TrangThai == null\" type=\"button\" (click)=\"guiLaiPhieuMuaThuoc()\"\n                        color=\"primary\" mat-raised-button><i class=\"ft-save\"></i>\n                        Lưu</button>\n\n                    <button\n                        *ngIf=\"trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n                        type=\"button\" (click)=\"cancel()\" class=\"mr-1 align-right-fx\" mat-raised-button><i\n                            class=\"ft-save\"></i>\n                        Quay Lại</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <div fxFlex=\"100%\" *ngIf=\"!isCreate && trangThaiVo != null && trangThaiVo.TrangThai == false\">\n        <h4 style=\"color: red;\">Lý do: {{yeuCauMuaThuoc.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n\n    <app-dropdownlist id=\"NhomDuocPhamDuTru\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru\" [modelText]=\"yeuCauMuaThuoc.TenNhomDuTru\" label=\"Nhóm\"\n        (modelChange)=\"clearGridDuocPham()\" url=\"YeuCauMuaDuocPham/GetNhomDuocPhamDuTru\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        [validationerror]=\"'NhomDuocPhamDuTru' | validationerror:validationErrorsDuocPham\">\n    </app-dropdownlist>\n\n    <app-combobox id=\"KhoId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\" [(model)]=\"yeuCauMuaThuoc.KhoId\"\n        [modelText]=\"yeuCauMuaThuoc.TenKho\" label=\"Kho\" (modelChange)=\"clearGridDuocPham()\"\n        (openCombobox)=\"openCombobox($event)\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false) && icDisable == true) || (icDisable == true)\"\n        url=\"YeuCauMuaDuocPham/GetKho?laDuocPham={{true}}\" [validationerror]=\"'KhoId' | validationerror:validationErrorsDuocPham\">\n    </app-combobox>\n\n    <app-combobox id=\"duTruTheo\" fxFlex=\"20\" [required]=\"true\"\n        [disabled]=\"(trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        [(model)]=\"yeuCauMuaThuoc.KyDuTruMuaDuocPhamVatTuId\" [modelText]=\"yeuCauMuaThuoc.TenKyDuTru\" label=\"Kỳ dự trù\"\n        url=\"YeuCauMuaDuocPham/GetKyDuTru\" (openCombobox)=\"openCombobox($event)\"\n        [validationerror]=\"'KyDuTruMuaDuocPhamVatTuId' | validationerror:validationErrorsDuocPham\">\n    </app-combobox>\n\n    <app-textbox id=\"nguoiYeuCau\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.TenNhanVienYeuCau\"\n        [required]=\"true\" maxlength=\"250\" label=\"Người yêu cầu\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker id=\"ngayYeuCau\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.NgayYeuCau\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày yêu cầu\">\n    </app-datetimepicker>\n\n    <app-textbox\n        *ngIf=\"trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true ||trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        id=\"khoaduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.TenTruongKhoa\" [required]=\"true\"\n        maxlength=\"250\" label=\"T.Khoa duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker\n        *ngIf=\"trangThaiVo != null && ( trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        id=\"ngaykhoaduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.NgayTruongKhoaDuyet\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày t.Khoa duyệt\">\n    </app-datetimepicker>\n\n    <app-textbox\n        *ngIf=\"trangThaiVo != null && ((trangThaiVo.IsKhoaDuyet == true && trangThaiVo.IsKhoDuocDuyet == true) || trangThaiVo.TrangThai == true \n            || (trangThaiVo.IsKhoDuocDuyet == false || (trangThaiVo.IsKhoDuocDuyet == false && trangThaiVo.TrangThai == false)))\"\n        id=\"khoaduocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.TenNhanVienKhoDuoc\"\n        [required]=\"true\" maxlength=\"250\" label=\"K.dược duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker\n        *ngIf=\"trangThaiVo != null && ((trangThaiVo.IsKhoaDuyet == true && trangThaiVo.IsKhoDuocDuyet == true) || trangThaiVo.TrangThai == true \n    || (trangThaiVo.IsKhoDuocDuyet == false || (trangThaiVo.IsKhoDuocDuyet == false && trangThaiVo.TrangThai == false)))\"\n        id=\"ngaykhoaduocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.NgayKhoDuocDuyet\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày k.dược duyệt\">\n    </app-datetimepicker>\n\n    <app-textbox\n        *ngIf=\"!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == true \n    || (trangThaiVo.IsGiamDocDuyet == false || (trangThaiVo.IsGiamDocDuyet == false && trangThaiVo.TrangThai == false)))\"\n        id=\"giamdocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.TenGiamDoc\" [required]=\"true\"\n        maxlength=\"250\" label=\"Giám đốc duyệt\" [disabled]=\"true\">\n    </app-textbox>\n\n    <app-datetimepicker *ngIf=\"!isCreate && trangThaiVo != null \n                                        && (trangThaiVo.TrangThai == true \n                                        || trangThaiVo.IsGiamDocDuyet == false \n                                        || (trangThaiVo.IsGiamDocDuyet == false && trangThaiVo.TrangThai == false))\"\n        id=\"ngaygiamdocduyet\" [fxFlex]=\"20\" [fxFlex.sm]=\"20\" [(model)]=\"yeuCauMuaThuoc.NgayGiamDocDuyet\"\n        [disabled]=\"true\" [required]=\"true\" label=\"Ngày g.đốc duyệt\">\n    </app-datetimepicker>\n\n    <app-textarea id=\"ghiChu\" fxFlex=\"auto\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Ghi chú\" minHeight=\"20\"\n        [disabled]=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true || trangThaiVo.TrangThai == false)\"\n        [(model)]=\"yeuCauMuaThuoc.GhiChu\">\n    </app-textarea>\n\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm chi tiết</h3>\n\n\n    <ng-container>\n        <app-radio\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            id=\"loai\" label=\"Loại\" fxFlex=\"20%\" fxFlex.sm=\"15%\" [(model)]=\"duocPhamGrid.LoaiDuocPham\"\n            (modelChange)=\"huy()\" [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n            yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\"\n            [items]=\"[{Value:1,Text:'Không BHYT'},{Value:2,Text:'BHYT'}]\">\n        </app-radio>\n\n        <app-combobox\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            id=\"duocPham\" fxFlex=\"35%\" fxFlex.sm=\"35%\" [required]=\"true\" url=\"YeuCauMuaDuocPham/GetDuocPhamMuaDuTru\"\n            [(model)]=\"duocPhamGrid.DuocPhamId\" (selectionChange)=\"chonDuocPham($event)\" [template]=\"duocPhamTemplate\"\n            (keyup)=\"onKey($event)\" (openCombobox)=\"openCombobox($event)\" [templateHeader]=\"duocPhamTemplateHeader\"\n            [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n            yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\" label=\"Dược phẩm\"\n            [queryInfo]=\"{ParameterDependencies:'{KhoId:' + yeuCauMuaThuoc.KhoId +', LaDuocPhamBHYT: '+ duocPhamGrid.LoaiDuocPham+'}', Take: 50}\"\n            class=\"item-no-padding\" [validationerror]=\"'DuocPhamId' | validationerror:validationErrors\"\n            [popupSettings]=\"{width: 800,popupClass:'item-no-padding'}\">\n            <ng-template #duocPhamTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th>Dược phẩm</th>\n                        <th width=\"30%\">Hoạt chất</th>\n                        <th width=\"5%\">ĐVT</th>\n                        <th width=\"20%\">ĐD</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #duocPhamTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td>{{dataItem.Ten}}</td>\n                        <td width=\"30%\">{{dataItem.HoatChat}}</td>\n                        <td width=\"5%\">{{dataItem.DVT}}</td>\n                        <td width=\"20%\">{{dataItem.TenDuongDung}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-combobox>\n\n        <div fxFlex=\"5%\" class=\"mt-2\" fxLayoutAlign=\"start center\">\n            <button\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                (click)=\"themThuoc()\" class=\"right\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip\n                title=\"Thêm dược phẩm\" type=\"button\"\n                [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n                                                                 yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\">\n                <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n            </button>\n        </div>\n\n        <app-textboxnumeric\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            [fxFlex]=\"(!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == false || trangThaiVo.TrangThai == true) && yeuCauMuaThuoc.NhomDuocPhamDuTru == 2) || yeuCauMuaThuoc.NhomDuocPhamDuTru == 2  ? '20%' : '7%'\"\n            id=\"slDuTru\" label=\"SL dự trù\" [(model)]=\"duocPhamGrid.SoLuongDuTru\" [required]=\"true\" max=\"999999999\"\n            (keyup)=\"onKey($event)\"\n            [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n                                                                 yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\"\n            min=\"1\" [validationerror]=\"'SoLuongDuTru' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-textboxnumeric\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            [fxFlex]=\"(!isCreate && trangThaiVo != null && (trangThaiVo.TrangThai == false || trangThaiVo.TrangThai == true) && yeuCauMuaThuoc.NhomDuocPhamDuTru == 2) || yeuCauMuaThuoc.NhomDuocPhamDuTru == 2 ? '20%' : '13%'\"\n            id=\"slDuKienTrongKy\" label=\"D.kiến s.dụng trong kỳ\" [required]=\"true\" max=\"999999999\" min=\"1\"\n            (keyup)=\"onKey($event)\" [(model)]=\"duocPhamGrid.SoLuongDuKienSuDung\" [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n            yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\"\n            [validationerror]=\"'SoLuongDuKienSuDung' | validationerror:validationErrors\">\n        </app-textboxnumeric>\n\n        <app-combobox\n            *ngIf=\"(trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null) && (yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.NhomDuocPhamDuTru == null \n                        || (trangThaiVo != null && trangThaiVo.TrangThai == null) && yeuCauMuaThuoc.NhomDuocPhamDuTru == 1)\"\n            id=\"nhomDuPhong\" fxFlex=\"auto\" fxFlex.sm=\"20%\" [(model)]=\"duocPhamGrid.NhomDieuTriDuPhong\"\n            (openCombobox)=\"openCombobox($event)\" [modelText]=\"duocPhamGrid.NhomDieuTriDuTru\" (keyup)=\"onKey($event)\"\n            url=\"YeuCauMuaDuocPham/GetNhomDuocPhamDieuTriDuPhong\" [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n            yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\" label=\"Nhóm đ.trị/dự phòng\">\n        </app-combobox>\n\n        <app-textarea id=\"ghiChuChiTiet\" fxFlex=\"100%\" fxFlex.sm=\"100\" maxlength=\"2000\" label=\"Ghi chú\" minHeight=\"20\"\n            *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n            (keyup)=\"onKey($event)\" [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n        yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\" [(model)]=\"duocPhamGrid.GhiChu\">\n        </app-textarea>\n\n        <ng-container *ngIf=\"duocPhamGrid.DuocPhamId != undefined && duocPhamGrid.DuocPhamId != null\">\n            <ng-template #templateInfo let-dataItem>\n                <table class=\"tablecolor \" width=\"100%\">\n                    <tr *ngFor=\"let khoTong of thongTinDuocPham.ThongTinChiTietTonKhoTongs\">\n                        <td>{{khoTong.Ten}}: {{khoTong.SoLuongTon}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n\n            <ng-template #templateInfoHDT let-dataItem>\n                <table class=\"tablecolor \" width=\"100%\">\n                    <tr *ngFor=\"let hdt of thongTinDuocPham.ThongTinChiTietTonHDTs\">\n                        <td>{{hdt.Ten}}: {{hdt.SoLuongTon}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\" fxFlex=\"100%\"\n                style=\"padding-top: 10px;\">\n                <div fxFlex=\"100%\" kendoTooltip>\n                    <fieldset\n                        style=\"border:1px solid #ccc;border-radius: 5px;padding: 7px 15px 8px 15px;background: #e3f2fd;\">\n                        <div fxFlex=\"100%\">\n                            <ul class=\"inline\">\n                                <li>Hoạt chất: <strong>{{thongTinDuocPham.HoatChat}}</strong></li>\n                                <li>Số đăng ký: <strong>{{thongTinDuocPham.SoDangKy}}</strong></li>\n                                <li>Nồng độ/ Hàm lượng: <strong>{{thongTinDuocPham.HamLuong}}</strong></li>\n                                <li>Đơn vị tính: <strong>{{thongTinDuocPham.DVT}}</strong></li>\n                                <li>Đường dùng: <strong>{{thongTinDuocPham.TenDuongDung}}</strong></li>\n                                <!-- </ul><br>\n                            <ul class=\"inline\"> -->\n                                <li>Nhà SX: <strong>{{thongTinDuocPham.NhaSX}}</strong></li>\n                                <li>Nước SX: <strong>{{thongTinDuocPham.NuocSX}}</strong></li>\n\n                                <li *ngIf=\"thongTinDuocPham.SLTonDuTru > 0\" style=\"color:red\">\n                                    Số lượng tồn trong kho dự trù:\n                                    <strong>{{thongTinDuocPham.SoLuongTonDuTru}}</strong>\n                                </li>\n\n                                <li *ngIf=\"thongTinDuocPham.SLTonDuTru == 0 || thongTinDuocPham.SLTonDuTru == null\"\n                                    style=\"color:red\">\n                                    Số lượng tồn trong kho dự trù:\n                                    <strong>0</strong>\n                                </li>\n\n                                <li *ngIf=\"thongTinDuocPham.SLTonKhoTong > 0\">\n                                    <span fxFlex=\"90%\" style=\"color:green\">Số lượng tồn trong kho tổng:\n                                        <strong>{{thongTinDuocPham.SoLuongTonKhoTong}}</strong>\n                                    </span>\n                                    <span fxFlex=\"10%\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" kendoTooltip\n                                        [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n                                        <mat-icon [icIcon]=\"icInfo\" class=\"info\">\n                                        </mat-icon>\n                                    </span>\n                                </li>\n                                <li *ngIf=\"thongTinDuocPham.SLTonKhoTong == 0 || thongTinDuocPham.SLTonKhoTong == null\">\n                                    <span style=\"color:green\">Số lượng tồn trong kho tổng:\n                                        <strong>0</strong>\n                                    </span>\n                                </li>\n\n                                <li *ngIf=\"thongTinDuocPham.SLChuaNhapVeHDT > 0\">\n                                    <span fxFlex=\"95%\" style=\"color:blue\">Số lượng chưa nhập về trong HĐ thầu:\n                                        <strong>{{thongTinDuocPham.SoLuongChuaNhapVeHDT}}</strong>\n                                    </span>\n                                    <span fxFlex=\"5%\" #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" kendoTooltip\n                                        [tooltipTemplate]=\"templateInfoHDT\" filter=\"*\">\n                                        <mat-icon [icIcon]=\"icInfo\" class=\"info\">\n                                        </mat-icon>\n                                    </span>\n                                </li>\n                                <li\n                                    *ngIf=\"thongTinDuocPham.SLChuaNhapVeHDT == 0 || thongTinDuocPham.SLChuaNhapVeHDT == null\">\n                                    <span style=\"color:blue\">Số lượng chưa nhập về trong HĐ thầu:\n                                        <strong>0</strong>\n                                    </span>\n                                </li>\n\n                            </ul>\n                        </div>\n                    </fieldset>\n                </div>\n            </div>\n        </ng-container>\n\n\n\n        <div fxFlex=\"100%\" fxLayoutAlign=\"end center\" kendoTooltip>\n            <button\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                type=\"button\" color=\"primary\" (click)=\"huy()\" [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n            yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\" mat-stroked-button mat-button\n                class=\"mr-1\">Hủy</button>\n\n            <button\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                type=\"button\" color=\"primary\" (click)=\"themDuocPham()\" [disabled]=\"yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.KhoId == undefined ||\n            yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.KhoId == null\" mat-raised-button\n                mat-button>Thêm</button>\n        </div>\n    </ng-container>\n    <div fxFlex=\"100%\"\n        [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  \n                     && (yeuCauMuaThuoc.NhomDuocPhamDuTru == undefined || yeuCauMuaThuoc.NhomDuocPhamDuTru == null || yeuCauMuaThuoc.NhomDuocPhamDuTru == 1)) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSource\"\n            #gridDuocPhamThuocVacxin [gridColumns]=\"gridColumnsThuocVacxin\" [allowSortDefault]=\"true\"\n            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [groups]=\"groups\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\">\n        </app-grid>\n        <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        <ng-template #nhomGroupThuocVacxinHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #actionTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <button color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                    *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && ((trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null))\"\n                    (click)=\"xoaDuocPham(dataItem)\">\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n\n        <ng-template #nhomDieuTriDuPhongTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-combobox\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                class=\"no-label\" [(model)]=\"dataItem.NhomDieuTriDuPhong\" popupSettings=\"null\"\n                (openCombobox)=\"openCombobox($event)\" [modelText]=\"dataItem.NhomDieuTriDuTru\"\n                url=\"YeuCauMuaDuocPham/GetNhomDuocPhamDieuTriDuPhong\" label=\" \">\n            </app-combobox>\n\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.NhomDieuTriDuTru}}\n            </span>\n        </ng-template>\n\n        <ng-template #slDuTruThuocVacxinTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric [(model)]=\"dataItem.SoLuongDuTru\" [required]=\"true\" class=\"no-label\" min=\"1\"\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                [max]=\"999999999\" label=\" \"\n                [validationerror]=\"'DuTruMuaDuocPhamChiTiets['+rowIndex+'].SoLuongDuTru' | validationerror:validationErrorsDuocPham\">\n            </app-textboxnumeric>\n\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true ||trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.SoLuongDuTru}}\n            </span>\n        </ng-template>\n\n\n        <ng-template #slDuKienThuocVacxinTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                [(model)]=\"dataItem.SoLuongDuKienSuDung\" [required]=\"true\" class=\"no-label\" min=\"1\" [max]=\"999999999\"\n                label=\" \"\n                [validationerror]=\"'DuTruMuaDuocPhamChiTiets['+rowIndex+'].SoLuongDuKienSuDung' | validationerror:validationErrorsDuocPham\">\n            </app-textboxnumeric>\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.SoLuongDuKienSuDung}}\n            </span>\n        </ng-template>\n\n        <ng-template #ghiChuChiTietThuocVacxinTemplate let-dataItem>\n            <app-textarea\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null)\"\n                minHeight=\"20\" [(model)]=\"dataItem.GhiChu\" class=\"no-label\" label=\" \" maxlength=\"2000\">\n            </app-textarea>\n\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.GhiChu}}\n            </span>\n        </ng-template>\n\n    </div>\n\n    <div fxFlex=\"100%\" [style.display]=\"(trangThaiVo != undefined && trangThaiVo != null  \n                 && yeuCauMuaThuoc.NhomDuocPhamDuTru == 2) ? 'block' : 'none'\">\n        <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\" [gridDataSource]=\"gridDataSourceHoaChat\"\n            #gridDuocPhamHoaChat [gridColumns]=\"gridColumnsHoaChat\" [allowSortDefault]=\"true\" [groups]=\"groups\"\n            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\"\n            [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" maxHeight=\"500\" [pageable]=\"false\">\n        </app-grid>\n        <ng-template #STTTemplate let-rowIndex=\"rowIndex\">\n            {{rowIndex + 1}}\n        </ng-template>\n        <ng-template #nhomGroupHoachatHeaderTemplate let-value=\"value\">\n            <strong>{{value}}</strong>\n        </ng-template>\n        <ng-template #actionTemplate let-dataItem>\n            <div class=\"text-center\" kendoTooltip>\n                <button\n                    *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null\"\n                    color=\"primary\" style=\"color: red\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\"\n                    (click)=\"xoaDuocPham(dataItem)\">\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                </button>\n            </div>\n        </ng-template>\n        <ng-template #slDuTruHoaChatTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric [(model)]=\"dataItem.SoLuongDuTru\" [required]=\"true\" class=\"no-label\" min=\"1\"\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null\"\n                [max]=\"999999999\" label=\" \"\n                [validationerror]=\"'DuTruMuaDuocPhamChiTiets['+rowIndex+'].SoLuongDuTru' | validationerror:validationErrorsDuocPham\">\n            </app-textboxnumeric>\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.SoLuongDuTru}}\n            </span>\n        </ng-template>\n\n        <ng-template #slDuKienHoaChatTemplate let-dataItem let-rowIndex=\"rowIndex\">\n            <app-textboxnumeric [(model)]=\"dataItem.SoLuongDuKienSuDung\" [required]=\"true\" class=\"no-label\" min=\"1\"\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null\"\n                [max]=\"999999999\" label=\" \"\n                [validationerror]=\"'DuTruMuaDuocPhamChiTiets['+rowIndex+'].SoLuongDuKienSuDung' | validationerror:validationErrorsDuocPham\">\n            </app-textboxnumeric>\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.SoLuongDuKienSuDung}}\n            </span>\n        </ng-template>\n\n        <ng-template #ghiChuChiTietHoaChatTemplate let-dataItem>\n            <app-textarea minHeight=\"20\"\n                *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && trangThaiVo.IsKhoaDuyet == null && trangThaiVo.TrangThai == null\"\n                [(model)]=\"dataItem.GhiChu\" class=\"no-label\" label=\" \" maxlength=\"2000\">\n            </app-textarea>\n\n            <span *ngIf=\"trangThaiVo != undefined && trangThaiVo != null && (trangThaiVo.IsKhoaDuyet == true || trangThaiVo.TrangThai == true ||\n            trangThaiVo.TrangThai == false)\" class=\"no-label\">\n                {{dataItem.GhiChu}}\n            </span>\n        </ng-template>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [isicMoreVert]=\"false\" [crumbs]=\"[\n                {Title:'Nhập xuất',Path:''}\n                ,{Title:'Dược phẩm',Path:''}\n                ,{Title:'Dự trù mua',Path:''}\n                ,{Title:'Yêu cầu dự trù mua dược phẩm',Path:'/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham' , queryParams: {holdQuery : true}}\n                ,{Title:'Tạo phiếu mua dược phẩm dự trù',Path:'',Active:true}\n                                \n                ]\">\n    ></app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Lập dự trù mua dược phẩm</h2>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-lap-phieu-mua-duoc-pham-shared [trangThaiVo]=\"trangThaiVo\"\n                    [validationErrorsDuocPham]=\"validationErrors\" [isCreate]=\"true\">\n                </app-lap-phieu-mua-duoc-pham-shared>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n\n                    <button type=\"button\" title=\"Phím tắt: Esc\" (click)=\"cancel()\" mat-button\n                        class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"guiPhieuMuaDuocPham()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Gửi</button>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA DƯỢC PHẨM</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content>\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.html":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.html ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div fxFlex=\"100%\">\n        <h3 class=\"sub-title\" style=\"text-transform: none;\">THÊM DƯỢC PHẨM</h3>\n    </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content style=\"overflow: hidden;\">\n    <div class=\"px-2 py-2\" fxLayout=\"column\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n            fxLayoutAlign=\"space-between\">\n\n            <app-textbox id=\"Ten\" fxFlex=\"50\" fxFlex.sm=\"25\" [required]=\"true\" maxlength=\"250\" [(model)]=\"duocPham.Ten\"\n                (keyup)=\"onKey($event)\" label=\"Tên dược phẩm\"\n                [validationerror]=\"'Ten' | validationerror:validationErrors\">\n            </app-textbox>\n\n            <app-combobox id=\"DuongDungId\" fxFlex=\"30%\" fxFlex.sm=\"30%\" [(model)]=\"duocPham.DuongDungId\"\n                [required]=\"true\" label=\"Đường dùng\" class=\"item-no-padding\" (openCombobox)=\"openCombobox($event)\"\n                (selectionChange)=\"chonDuongDung($event)\" (keyup)=\"onKey($event)\" [template]=\"duongDungTemplate\"\n                [templateHeader]=\"duongDungTemplateHeader\" url=\"DuocPham/GetDanhSachDuongDung\" popupSettings=\"null\"\n                [validationerror]=\"'DuongDungId' | validationerror:validationErrors\">\n                <ng-template #duongDungTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"30%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #duongDungTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n\n            <app-combobox id=\"DonViTinhId\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"duocPham.DonViTinhId\" maxlength=\"500\"\n                [required]=\"true\" label=\"Đơn vị tính\" (keyup)=\"onKey($event)\" class=\"item-no-padding\"\n                [template]=\"donViTinhTemplate\" (openCombobox)=\"openCombobox($event)\" (selectionChange)=\"chonDVT($event)\"\n                [templateHeader]=\"donViTinhTemplateHeader\" url=\"DonViTinh/GetDanhSachDonViTinh\" popupSettings=\"null\"\n                [validationerror]=\"'DonViTinhId' | validationerror:validationErrors\">\n                <ng-template #donViTinhTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"20%\">Mã</th>\n                            <th>Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #donViTinhTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"20%\">{{dataItem.Ma}}</td>\n                            <td>{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n            <!-- <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px grid\" fxLayoutGap.lt-sm=\"0\"\n                fxFlex=\"100%\"> -->\n            <app-textboxnumeric fxFlex=\"25\" id=\"slDuTru\" label=\"SL dự trù\" [(model)]=\"duocPham.SoLuongDuTru\"\n                [required]=\"true\" max=\"999999999\" min=\"1\"\n                [validationerror]=\"'SoLuongDuTru' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n\n\n            <app-textboxnumeric fxFlex=\"25%\" id=\"slDuKienTrongKy\" label=\"D.kiến s.dụng trong kỳ\" [required]=\"true\"\n                max=\"999999999\" min=\"1\" (keyup)=\"onKey($event)\" [(model)]=\"duocPham.SoLuongDuKienSuDung\"\n                [validationerror]=\"'SoLuongDuKienSuDung' | validationerror:validationErrors\">\n            </app-textboxnumeric>\n\n            <app-combobox\n                [disabled]=\"duocPham.NhomDuocPhamDuTru == 2\"\n                id=\"nhomDuPhong\" fxFlex=\"auto\" fxFlex.sm=\"25%\" [(model)]=\"duocPham.NhomDieuTriDuPhong\"\n                popupSettings=\"null\" url=\"YeuCauMuaDuocPham/GetNhomDuocPhamDieuTriDuPhong\" label=\"Nhóm đ.trị/dự phòng\">\n            </app-combobox>\n            <!-- </div> -->\n\n\n\n        </div>\n    </div>\n\n</mat-dialog-content>\n\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" style=\"margin-top:10px\">\n    <button mat-stroked-button color=\"primary\" (click)=\"huy()\" mat-dialog-close>Hủy</button>\n    <button type=\"button\" (click)=\"themDuocPham()\" cdkFocusInitial mat-raised-button mat-button\n        color=\"primary\">Thêm</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/@vex/animations/fade-in-up.animation.ts":
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/*! exports provided: fadeInUpAnimation, fadeInUp400ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUpAnimation", function() { return fadeInUpAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInUp400ms", function() { return fadeInUp400ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function fadeInUpAnimation(duration) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ "./src/@vex/animations/stagger.animation.ts":
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/*! exports provided: staggerAnimation, stagger80ms, stagger60ms, stagger40ms, stagger20ms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staggerAnimation", function() { return staggerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger80ms", function() { return stagger80ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger60ms", function() { return stagger60ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger40ms", function() { return stagger40ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger20ms", function() { return stagger20ms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


function staggerAnimation(timing) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('stagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])('@fadeInUp, @fadeInRight, @scaleIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["stagger"])(timing, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animateChild"])()), { optional: true }),
        ])
    ]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.scss ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbXVhLXRodW9jL2Rhbmgtc2FjaC1kdS10cnUtbXVhLXRodW9jL2Rhbmgtc2FjaC1kdS10cnUtbXVhLXRodW9jLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: DanhSachDuTruMuaThuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhSachDuTruMuaThuocComponent", function() { return DanhSachDuTruMuaThuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/cancel */ "./node_modules/@iconify/icons-ic/cancel.js");
/* harmony import */ var _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts");
/* harmony import */ var _phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../phieu-mua-duoc-pham/phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts");





























let DanhSachDuTruMuaThuocComponent = class DanhSachDuTruMuaThuocComponent {
    constructor(dialog, router, apiService, authService, notificationService, route, location) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.route = route;
        this.location = location;
        this.inPhieuDuocPham = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_27__["PhieuYeuCauMuaThuoc"]();
        this.baseRoute = "/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham";
        this.urlGetData = "YeuCauMuaDuocPham/GetYeuCauMuaDuocPhamDataForGridAsync";
        this.urlGetTotalPage = "YeuCauMuaDuocPham/GetYeuCauMuaDuocPhamTotalPageForGridAsync";
        this.popupLoadingData = null;
        this.addtionStringDefault = null;
        this.gridColumns = [];
        this.validationErrors = [];
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icCancel = _iconify_icons_ic_cancel__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_25___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_26___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.holdQuery = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.additionalSearchString = null;
        this.sort = [
            {
                field: "TinhTrang",
                dir: "asc",
            },
        ];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham;
        this.danhSachYeuCauMuaThuoc = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_27__["YeuCauMuaThuocGridVo"]();
        this.backWithSearch();
        this.gridColumns = [
            { Field: "SoPhieu", Title: "Số Phiếu", Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: "TenNhomDuTru", Title: "Nhóm", Width: 150, Sortable: true },
            { Field: "TenKho", Title: "Kho", MinWidth: 150, Sortable: true },
            { Field: "KyDuTru", Title: "Kỳ dự trù", Width: 170, Sortable: true },
            { Field: "NgayYeuCau", Title: "Ngày yêu cầu", Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: "NhanVienYeuCau", Title: "Người yêu cầu", Width: 150, Sortable: true },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
            { Field: "NgayTaiKhoa", Title: "Ngày T.Khoa duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoaTemplate },
            { Field: "NgayTaiKhoDuoc", Title: "Ngày K.Dược duyệt", Width: 150, Sortable: true, Template: this.ngayTaiKhoDuocTemplate },
            { Field: "NgayTaiGiamDoc", Title: "Ngày G.Đốc duyệt", Width: 150, Sortable: true, Template: this.ngayTaiGiamDocTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate },
        ];
    }
    backWithSearch() {
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery != undefined) {
            let holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].getItem("additionalSearchStringDanhSachYeuCauMuaThuoc");
                if (this.additionalSearchString != null) {
                    this.danhSachYeuCauMuaThuoc = JSON.parse(this.additionalSearchString);
                    if (this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay != null
                        && this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay != 'null' && this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay != '') {
                        this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate = new Date(this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate);
                    }
                    else {
                        this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate = null;
                    }
                    if (this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay != null
                        && this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay != 'null' && this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay != '') {
                        this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate = new Date(this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate);
                    }
                    else {
                        this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate = null;
                    }
                    this.addtionStringDefault = this.additionalSearchString;
                    this.gridChild.additionalSearchString = this.additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].removeItem("additionalSearchStringDanhSachYeuCauMuaThuoc");
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    clearSearch() {
        this.danhSachYeuCauMuaThuoc.SearchString = null;
        this.gridChild.search();
    }
    searchChanges(event) {
        var self = this;
        if (event != undefined && (event == null || event == "")) {
            self.gridChild.searchString = null;
            self.timKiem();
        }
    }
    trangThaiCheckBox(event, tinhTrang) {
        if (tinhTrang == "choduyet") {
            this.danhSachYeuCauMuaThuoc.ChoDuyet = event;
        }
        if (tinhTrang == "daduyet") {
            this.danhSachYeuCauMuaThuoc.DaDuyet = event;
        }
        if (tinhTrang == "tuchoi") {
            this.danhSachYeuCauMuaThuoc.TuChoiDuyet = event;
        }
        this.timKiem();
    }
    timKiem() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        if (this.danhSachYeuCauMuaThuoc.RangeFromDate != null && this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate != null) {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauMuaThuoc.RangeFromDate.startDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.TuNgay = null;
        }
        if (this.danhSachYeuCauMuaThuoc.RangeFromDate != null && this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate != null) {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].formatDateTime(this.danhSachYeuCauMuaThuoc.RangeFromDate.endDate, "mm/dd/yyyy");
        }
        else {
            this.danhSachYeuCauMuaThuoc.RangeFromDate.DenNgay = null;
        }
        var queryString = JSON.stringify(this.danhSachYeuCauMuaThuoc);
        this.gridChild._additionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_15__["LocalStorageHelper"].setItem("additionalSearchStringDanhSachYeuCauMuaThuoc", queryString);
        this.gridChild.search();
    }
    taoPhieuMuaThuoc() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham/lap-phieu-mua-duoc-pham/them"]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    chinhSua(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham/lap-phieu-mua-duoc-pham-gui-lai/" + id]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoa(id) {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có chắc chắn muốn xóa phiếu dự trù này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Delete)) {
                    this.apiService.post("YeuCauMuaDuocPham/XoaYeuCauMuaDuTru?id=" + id).subscribe(() => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                        this.timKiem();
                    }, (err) => {
                        this.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    inPhieu(id, loai) {
        var self = this;
        self.loadingPage();
        self.dialog.open(_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_28__["PhieuMuaDuocPhamComponent"], {
            disableClose: false,
            width: '1200px',
            data: { Id: id, Loai: loai },
        }).afterClosed().subscribe(() => {
            self.closePopupLoadingData();
        });
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    XuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("YeuCauMuaDuocPham/ExportYeuCauMuaDuocPham", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "YeuCauDuTruMuaDuocPham" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_12__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    changeNgayBatDauRange() {
        this.timKiem();
    }
    blur() {
        this.timKiem();
    }
};
DanhSachDuTruMuaThuocComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__["GridComponent"], { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayYeuCauTemplate", { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiKhoaTemplate", { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "ngayTaiKhoaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiKhoDuocTemplate", { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "ngayTaiKhoDuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ngayTaiGiamDocTemplate", { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "ngayTaiGiamDocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], DanhSachDuTruMuaThuocComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DanhSachDuTruMuaThuocComponent.prototype, "sort", void 0);
DanhSachDuTruMuaThuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-danh-sach-du-tru-mua-thuoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./danh-sach-du-tru-mua-thuoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./danh-sach-du-tru-mua-thuoc.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.scss")).default]
    })
], DanhSachDuTruMuaThuocComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbXVhLXRodW9jL2d1aS1waGlldS1tdWEtZHVvYy1waGFtLWNvbmZpcm0vZ3VpLXBoaWV1LW11YS1kdW9jLXBoYW0tY29uZmlybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: GuiPhieuMuaDuocPhamConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiPhieuMuaDuocPhamConfirmComponent", function() { return GuiPhieuMuaDuocPhamConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let GuiPhieuMuaDuocPhamConfirmComponent = class GuiPhieuMuaDuocPhamConfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.Title = null;
        this.Message = null;
        this.ButtonYes = "Có";
        this.ButtonYesAndPrint = "Có & In Phiếu";
        this.ButtonNo = "Không";
    }
    ngOnInit() {
        this.Title = this.data.Title;
        this.Message = this.data.Message;
    }
    close(result) {
        this.dialogRef.close(result);
    }
};
GuiPhieuMuaDuocPhamConfirmComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
GuiPhieuMuaDuocPhamConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gui-phieu-mua-duoc-pham-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-phieu-mua-duoc-pham-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-phieu-mua-duoc-pham-confirm.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], GuiPhieuMuaDuocPhamConfirmComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tZ3VpLWxhaS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx5ZXUtY2F1LW11YS10aHVvY1xcbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tZ3VpLWxhaVxcbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tZ3VpLWxhaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tZ3VpLWxhaS9sYXAtcGhpZXUtbXVhLWR1b2MtcGhhbS1ndWktbGFpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS95ZXUtY2F1LW11YS10aHVvYy9sYXAtcGhpZXUtbXVhLWR1b2MtcGhhbS1ndWktbGFpL2xhcC1waGlldS1tdWEtZHVvYy1waGFtLWd1aS1sYWkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: LapPhieuMuaDuocPhamGuiLaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapPhieuMuaDuocPhamGuiLaiComponent", function() { return LapPhieuMuaDuocPhamGuiLaiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts");
/* harmony import */ var _lap_phieu_mua_duoc_pham_shared_lap_phieu_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.ts");
/* harmony import */ var _gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.ts");
/* harmony import */ var _phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../phieu-mua-duoc-pham/phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts");



















let LapPhieuMuaDuocPhamGuiLaiComponent = class LapPhieuMuaDuocPhamGuiLaiComponent {
    constructor(apiService, dialog, notificationService, authService, router, route, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.ref = ref;
        this.location = location;
        this.inPhieu = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["PhieuYeuCauMuaThuoc"]();
        this.isHideDuyet = false;
        this.trangThaiVo = null;
        this.isCreate = false;
        this.phieuMuaDuocPhamId = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham;
        this.yeuCauMuaThuoc = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaThuoc"]();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.GetTrangThaiPhieuMuaDuTru(id);
            this.phieuMuaDuocPhamId = id;
        }
    }
    GetTrangThaiPhieuMuaDuTru(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].View)) {
            self.apiService.get("YeuCauMuaDuocPham/GetTrangThaiPhieuDuocPhamDuTru?phieuMuaDuocPhamId=" + id).subscribe((result) => {
                this.trangThaiVo = result;
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    guiLaiPhieuMuaThuoc() {
        var self = this;
        self.dialog.open(_gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_17__["GuiPhieuMuaDuocPhamConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn lưu phiếu mua dược phẩm dự trù này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.yeuCauMuaThuoc = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                    self.savingPage();
                    self.apiService.post("YeuCauMuaDuocPham/GuiLaiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham']);
                            self.closePopupSavingData();
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
            else if (res == "YesAndPrint") {
                self.yeuCauMuaThuoc = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                    self.savingPage();
                    self.apiService.post("YeuCauMuaDuocPham/GuiLaiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            self.closePopupSavingData();
                            self.dialog.open(_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaDuocPhamComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: { Id: result.Id, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
                            }).afterClosed().subscribe(() => {
                                self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham']);
                            });
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    inPhieuMuaThuoc() {
        var self = this;
        if (this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null) {
            self.yeuCauMuaThuoc = self.shared.getSharedData();
            self.validationErrors = [];
            self.ref.detectChanges();
            if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Update)) {
                self.apiService.post("YeuCauMuaDuocPham/GuiLaiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe((result) => {
                    if (result != undefined && result != null) {
                        self.loadingPage();
                        self.dialog.open(_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaDuocPhamComponent"], {
                            disableClose: false,
                            width: '1200px',
                            data: { Id: self.phieuMuaDuocPhamId, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
                        }).afterClosed().subscribe(() => {
                            self.closePopupLoadingData();
                        });
                    }
                }, (err) => {
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                });
            }
            else {
                self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
            }
        }
        else {
            self.loadingPage();
            self.dialog.open(_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaDuocPhamComponent"], {
                disableClose: false,
                width: '1200px',
                data: { Id: self.phieuMuaDuocPhamId, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
            }).afterClosed().subscribe(() => {
                self.closePopupLoadingData();
            });
        }
    }
    anHienButtonDuyet(event) {
        if (event) {
            this.isHideDuyet = true;
        }
        else {
            this.isHideDuyet = false;
        }
    }
    cancel() {
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
LapPhieuMuaDuocPhamGuiLaiComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('temp', { read: _lap_phieu_mua_duoc_pham_shared_lap_phieu_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_16__["LapPhieuMuaDuocPhamSharedComponent"], static: false })
], LapPhieuMuaDuocPhamGuiLaiComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
], LapPhieuMuaDuocPhamGuiLaiComponent.prototype, "keyEvent", null);
LapPhieuMuaDuocPhamGuiLaiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lap-phieu-mua-duoc-pham-gui-lai',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lap-phieu-mua-duoc-pham-gui-lai.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lap-phieu-mua-duoc-pham-gui-lai.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.scss")).default]
    })
], LapPhieuMuaDuocPhamGuiLaiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.scss ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("fieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: -9px;\n  padding-top: 0.35em;\n  padding-bottom: 0.625em;\n  padding-left: 0.75em;\n  padding-right: 0.75em;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n\n.po-h-radio {\n  margin-top: -2px;\n}\n\n.xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n  position: relative;\n  right: -10px;\n  background-color: white;\n}\n\n.info {\n  margin-bottom: -5px;\n  margin-top: 0px;\n}\n\n.tablecolor {\n  background-color: gray;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tc2hhcmVkL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHlldS1jYXUtbXVhLXRodW9jXFxsYXAtcGhpZXUtbXVhLWR1b2MtcGhhbS1zaGFyZWRcXGxhcC1waGlldS1tdWEtZHVvYy1waGFtLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tc2hhcmVkL2xhcC1waGlldS1tdWEtZHVvYy1waGFtLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0tc2hhcmVkL2xhcC1waGlldS1tdWEtZHVvYy1waGFtLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogLTlweDtcbiAgcGFkZGluZy10b3A6IDAuMzVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW07XG4gIHBhZGRpbmctbGVmdDogMC43NWVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbn1cblxuZmllbGRzZXQgLml0ZW1fcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmZpZWxkc2V0IHVsID4gbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmZpZWxkc2V0IHVsLmlubGluZSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5wby1oLXJhZGlvIHtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGFibGVjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGNvbG9yOiBibGFjaztcbn0iLCJmaWVsZHNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IC05cHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4ucG8taC1yYWRpbyB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi54YWMtbmhhbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnRhYmxlY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: LapPhieuMuaDuocPhamSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapPhieuMuaDuocPhamSharedComponent", function() { return LapPhieuMuaDuocPhamSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/warning */ "./node_modules/@iconify/icons-ic/warning.js");
/* harmony import */ var _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts");
/* harmony import */ var _them_duoc_pham_du_tru_mua_popup_them_duoc_pham_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");



















let LapPhieuMuaDuocPhamSharedComponent = class LapPhieuMuaDuocPhamSharedComponent {
    constructor(apiService, notificationService, authService, ref, route, dialog) {
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.authService = authService;
        this.ref = ref;
        this.route = route;
        this.dialog = dialog;
        this.duocPhamGrid = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["ThongTinThuocChiTiet"]();
        this.thongTinDuocPham = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["ThongTinThuocChiTiet"]();
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.icWarning = _iconify_icons_ic_warning__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icDisable = null;
        this.isSelectDuocPham = false;
        this.gridDataSource = {
            data: [],
            total: 0
        };
        this.gridDataSourceHoaChat = {
            data: [],
            total: 0
        };
        this.gridColumnsThuocVacxin = [];
        this.gridColumnsHoaChat = [];
        this.dataDuocPhamGrid = null;
        this.lstDuocPhamGrid = [];
        this.phieuMuaDuocPhamDuTruId = null;
        this.groups = [{ field: 'TenLoaiDuocPham' }];
        this.hideGuibtn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dangXuLy = false;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham;
        this.yeuCauMuaThuoc = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaThuoc"]();
        const id = this.route.snapshot.params.id;
        if (id !== undefined && id !== null) {
            this.getById(id);
            this.phieuMuaDuocPhamDuTruId = id;
        }
        if (this.isCreate) {
            this.getCurrentUser();
        }
        this.gridColumnsThuocVacxin = [
            { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
            // { Field: "TenLoaiDuocPham", Title: "Loại", Width: 60, ShowTooltip: true },
            { Field: "TenLoaiDuocPham", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupThuocVacxinHeaderTemplate },
            { Field: "Ten", Title: "Tên", Width: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 100, ShowTooltip: true },
            { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 100 },
            { Field: "DVT", Title: "ĐVT", Width: 50 },
            { Field: "TenDuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "NhaSX", Title: "Nhà SX", Width: 50 },
            { Field: "NuocSX", Title: "Nước SX", Width: 50 },
            { Field: "NhomDieuTriDuTru", Title: "Nhóm đ.trị/ d.phòng ", Width: 150, Template: this.nhomDieuTriDuPhongTemplate },
            {
                Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100,
                Template: this.slDuTruThuocVacxinTemplate
            },
            {
                Field: "SoLuongDuKienSuDungTrongKy", Title: "SL D.Kiến Sử Dụng", Width: 100,
                Template: this.slDuKienThuocVacxinTemplate
            },
            {
                Field: "SoLuongDuTruTruongKhoaDuyet", Title: "t.khoa duyệt", Width: 100,
                Hidden: (this.trangThaiVo != null && !(this.trangThaiVo.IsKhoaDuyet == true || this.trangThaiVo.TrangThai == true || this.trangThaiVo.TrangThai == false))
            },
            { Field: "GhiChu", Title: "Ghi chú", Width: 150, ShowTooltip: true, Template: this.ghiChuChiTietThuocVacxinTemplate },
            {
                Field: "Action", Title: "", Width: 80, Template: this.actionTemplate,
                Hidden: !(this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null)
            },
        ];
        this.gridColumnsHoaChat = [
            { Field: "STT", Title: "#", Width: 25, Template: this.STTTemplate },
            // { Field: "TenLoaiDuocPham", Title: "Loại", Width: 60, ShowTooltip: true },
            { Field: "TenLoaiDuocPham", Title: "Nhóm", Width: 100, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHoachatHeaderTemplate },
            { Field: "Ten", Title: "Tên", MinWidth: 100, ShowTooltip: true },
            { Field: "HoatChat", Title: "Hoạt chất", Width: 120, ShowTooltip: true },
            { Field: "HamLuong", Title: "Nồng độ/Hàm lượng", Width: 100 },
            { Field: "DVT", Title: "ĐVT", Width: 50 },
            { Field: "TenDuongDung", Title: "Đường Dùng", Width: 50 },
            { Field: "NhaSX", Title: "Nhà SX", Width: 50 },
            { Field: "NuocSX", Title: "Nước SX", Width: 50 },
            {
                Field: "SoLuongDuTru", Title: "SL Dự Trù", Width: 100,
                Template: this.slDuTruHoaChatTemplate
            },
            {
                Field: "SoLuongDuKienSuDung", Title: "SL D.Kiến Sử Dụng", Width: 100,
                Template: this.slDuKienHoaChatTemplate
            },
            {
                Field: "SoLuongDuTruTruongKhoaDuyet", Title: "t.khoa duyệt", Width: 100,
                Hidden: (this.trangThaiVo != null && !(this.trangThaiVo.IsKhoaDuyet == true || this.trangThaiVo.TrangThai == true || this.trangThaiVo.TrangThai == false))
            },
            { Field: "GhiChu", Title: "Ghi chú", Width: 150, ShowTooltip: true, Template: this.ghiChuChiTietHoaChatTemplate },
            {
                Field: "Action", Title: "", Width: 80, Template: this.actionTemplate,
                Hidden: !(this.trangThaiVo != null && this.trangThaiVo.IsKhoaDuyet == null && this.trangThaiVo.TrangThai == null)
            },
        ];
    }
    getCurrentUser() {
        this.duocPhamGrid.LoaiDuocPham = 1;
        if (this.isCreate) {
            let dateNow = new Date();
            this.yeuCauMuaThuoc.NgayYeuCau = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), dateNow.getHours(), dateNow.getMinutes());
        }
        this.apiService.get("YeuCauLinhDuocPham/GetCurrentUser").subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                this.yeuCauMuaThuoc.NhanVienYeuCauId = resultData.NhanVienYeuCauId;
                this.yeuCauMuaThuoc.TenNhanVienYeuCau = resultData.HoTen;
            }
        });
    }
    onKey(event) {
        if (event.key == "Enter") {
            if (this.isSelectDuocPham != true) {
                this.themDuocPham();
            }
            else {
                this.isSelectDuocPham = false;
            }
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
    clearGridDuocPham() {
        this.huy();
        this.lstDuocPhamGrid = [];
        this.gridDataSource = {
            data: this.lstDuocPhamGrid,
            total: 0
        };
        this.gridDuocPhamThuocVacxin.gridDataSource = this.gridDataSource;
        this.gridDuocPhamThuocVacxin.setDataSource();
        this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets = [];
    }
    chonDuocPham(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.validationErrors = [];
            this.validationErrorsDuocPham = [];
            this.duocPhamGrid.KhoId = this.yeuCauMuaThuoc.KhoId;
            this.duocPhamGrid.DuocPhamId = dataItem.KeyId;
            this.duocPhamGrid.Ten = dataItem.Ten;
            this.duocPhamGrid.HoatChat = dataItem.HoatChat;
            this.duocPhamGrid.SoDangKy = dataItem.SoDangKy;
            this.duocPhamGrid.HamLuong = dataItem.HamLuong;
            this.duocPhamGrid.DVT = dataItem.DVT;
            this.duocPhamGrid.TenDuongDung = dataItem.DuongDung;
            this.duocPhamGrid.NhaSX = dataItem.NhaSX;
            this.duocPhamGrid.NuocSX = dataItem.NuocSX;
            this.apiService.post("YeuCauMuaDuocPham/ThongTinDuocPham", this.duocPhamGrid).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    this.thongTinDuocPham = resultData;
                }
            });
        }
        else {
            this.huy();
            this.thongTinDuocPham = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["ThongTinThuocChiTiet"]();
        }
    }
    //Validators
    kiemTraValidators() {
        this.duocPhamGrid.YeuCauMuaThuocChiTietValidators = new Array();
        this.lstDuocPhamGrid.forEach(element => {
            let duocPham = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaThuocChiTietValidator"]();
            duocPham.DuocPhamId = element.DuocPhamId;
            duocPham.LaDuocPhamBHYT = element.LaDuocPhamBHYT;
            this.duocPhamGrid.YeuCauMuaThuocChiTietValidators.push(duocPham);
        });
    }
    themDuocPham() {
        if (this.dangXuLy)
            return;
        this.dangXuLy = true;
        var self = this;
        self.validationErrors = [];
        self.validationErrorsDuocPham = [];
        if (self.duocPhamGrid.LoaiDuocPham == 1) {
            self.duocPhamGrid.LaDuocPhamBHYT = false;
        }
        else {
            self.duocPhamGrid.LaDuocPhamBHYT = true;
        }
        self.ref.detectChanges();
        self.apiService.post("YeuCauMuaDuocPham/ThemDuocPhamChiTietGridVo", self.duocPhamGrid).subscribe(resultData => {
            if (resultData != undefined && resultData != null) {
                //console.log(resultData)
                self.lstDuocPhamGrid.push(resultData);
                self.setValueForGridDuocPham();
                self.huy();
            }
            self.dangXuLy = false;
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
            self.dangXuLy = false;
        });
    }
    xoaDuocPham(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].MessConfirm, ["xóa"]) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                this.lstDuocPhamGrid.splice(this.lstDuocPhamGrid.findIndex((x) => x == dataItem), 1);
                this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_18__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].ActionSuccessfully, ["Xóa"]));
                this.validationErrorsDuocPham = [];
                this.setValueForGridDuocPham();
            }
        });
    }
    setValueForGridDuocPham() {
        if (this.yeuCauMuaThuoc.NhomDuocPhamDuTru == 1) {
            this.gridDataSource = {
                data: this.lstDuocPhamGrid,
                total: this.lstDuocPhamGrid.length
            };
            let STT = 1;
            this.lstDuocPhamGrid.forEach(element => {
                element.STT = STT;
                STT++;
            });
            this.kiemTraValidators();
            this.gridDuocPhamThuocVacxin.gridDataSource = this.gridDataSource;
            this.gridDuocPhamThuocVacxin.setDataSource();
            this.pushDataDuocPham();
        }
        else {
            this.gridDataSourceHoaChat = {
                data: this.lstDuocPhamGrid,
                total: this.lstDuocPhamGrid.length
            };
            let STT = 1;
            this.lstDuocPhamGrid.forEach(element => {
                element.STT = STT;
                STT++;
            });
            this.kiemTraValidators();
            this.gridDuocPhamHoaChat.gridDataSource = this.gridDataSourceHoaChat;
            this.gridDuocPhamHoaChat.setDataSource();
            this.pushDataDuocPham();
        }
        //console.log("this.list: ", this.lstDuocPhamGrid);
        if (this.lstDuocPhamGrid.length > 0) {
            this.hideGuibtn.emit(true);
            this.icDisable = true;
        }
        else {
            this.hideGuibtn.emit(false);
            this.icDisable = false;
        }
    }
    pushDataDuocPham() {
        this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets = new Array();
        this.lstDuocPhamGrid.forEach(obj => {
            let model = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaThuocChiTiet"]();
            model.DuocPhamId = obj.DuocPhamId;
            model.LaDuocPhamBHYT = obj.LaDuocPhamBHYT;
            model.SoLuongDuTru = obj.SoLuongDuTru;
            model.SoLuongDuKienSuDung = obj.SoLuongDuKienSuDung;
            model.NhomDieuTriDuPhong = obj.NhomDieuTriDuPhong;
            model.GhiChu = obj.GhiChu;
            model.STT = obj.STT;
            this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets.push(model);
            //console.log("this.yeuCauMuaThuoc.YeuCauMuaThuocChiTiets: ", this.yeuCauMuaThuoc.DuTruMuaDuocPhamChiTiets)
        });
    }
    getById(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View)) {
            self.apiService.get("YeuCauMuaDuocPham/GetPhieuMuaDuocPhamDuTru?id=" + id).subscribe(resultData => {
                if (resultData != undefined && resultData != null) {
                    //console.log(resultData)
                    this.yeuCauMuaThuoc = resultData;
                    if (this.yeuCauMuaThuoc.TruongKhoaDuyet == null) {
                        this.isCreate = true;
                    }
                    this.lstDuocPhamGrid = [];
                    resultData.DuTruMuaDuocPhamChiTiets.forEach(element => {
                        this.lstDuocPhamGrid.push(element);
                    });
                    this.setValueForGridDuocPham();
                }
            }, (err) => {
                self.validationErrors = err.ValidationErrors;
                if (err.Message != "Validation Failed") {
                    self.notificationService.showError(err.Message);
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    huy() {
        this.validationErrors = [];
        this.validationErrorsDuocPham = [];
        this.duocPhamGrid.Ten = null;
        this.duocPhamGrid.HoatChat = null;
        this.duocPhamGrid.DuocPhamId = null;
        this.duocPhamGrid.SoLuongDuTru = null;
        this.duocPhamGrid.SoLuongDuKienSuDung = null;
        this.duocPhamGrid.DVT = null;
        this.duocPhamGrid.TenDuongDung = null;
        this.duocPhamGrid.NhaSX = null;
        this.duocPhamGrid.NuocSX = null;
        this.duocPhamGrid.HamLuong = null;
        this.duocPhamGrid.LaDuocPhamBHYT = null;
        this.duocPhamGrid.NhomDieuTriDuPhong = null;
        this.duocPhamGrid.GhiChu = null;
    }
    themThuoc() {
        var self = this;
        self.dialog.open(_them_duoc_pham_du_tru_mua_popup_them_duoc_pham_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_16__["ThemDuocPhamDuTruMuaPopupComponent"], {
            disableClose: false,
            width: '900px',
            data: { NhomDuocPhamDuTru: this.yeuCauMuaThuoc.NhomDuocPhamDuTru, LoaiDuocPham: this.duocPhamGrid.LoaiDuocPham }
        }).afterClosed().subscribe(resultData => {
            if (resultData != undefined && resultData != null && resultData.trangThai == "Them") {
                self.lstDuocPhamGrid.push(resultData.data);
                self.setValueForGridDuocPham();
            }
        });
    }
    getSharedData() {
        this.setValueForGridDuocPham();
        return this.yeuCauMuaThuoc;
    }
};
LapPhieuMuaDuocPhamSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupThuocVacxinHeaderTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "nhomGroupThuocVacxinHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHoachatHeaderTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "nhomGroupHoachatHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('STTTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "STTTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamThuocVacxin', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "gridDuocPhamThuocVacxin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridDuocPhamHoaChat', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "gridDuocPhamHoaChat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuTruThuocVacxinTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "slDuTruThuocVacxinTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuKienThuocVacxinTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "slDuKienThuocVacxinTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuTruHoaChatTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "slDuTruHoaChatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slDuKienHoaChatTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "slDuKienHoaChatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomDieuTriDuPhongTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "nhomDieuTriDuPhongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuChiTietThuocVacxinTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "ghiChuChiTietThuocVacxinTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ghiChuChiTietHoaChatTemplate', { static: true })
], LapPhieuMuaDuocPhamSharedComponent.prototype, "ghiChuChiTietHoaChatTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LapPhieuMuaDuocPhamSharedComponent.prototype, "trangThaiVo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LapPhieuMuaDuocPhamSharedComponent.prototype, "validationErrorsDuocPham", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LapPhieuMuaDuocPhamSharedComponent.prototype, "isCreate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LapPhieuMuaDuocPhamSharedComponent.prototype, "hideGuibtn", void 0);
LapPhieuMuaDuocPhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lap-phieu-mua-duoc-pham-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lap-phieu-mua-duoc-pham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lap-phieu-mua-duoc-pham-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.scss")).default]
    })
], LapPhieuMuaDuocPhamSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0vQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxceWV1LWNhdS1tdWEtdGh1b2NcXGxhcC1waGlldS1tdWEtZHVvYy1waGFtXFxsYXAtcGhpZXUtbXVhLWR1b2MtcGhhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0vbGFwLXBoaWV1LW11YS1kdW9jLXBoYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbXVhLXRodW9jL2xhcC1waGlldS1tdWEtZHVvYy1waGFtL2xhcC1waGlldS1tdWEtZHVvYy1waGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn0iLCIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: LapPhieuMuaDuocPhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LapPhieuMuaDuocPhamComponent", function() { return LapPhieuMuaDuocPhamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts");
/* harmony import */ var _lap_phieu_mua_duoc_pham_shared_lap_phieu_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.ts");
/* harmony import */ var _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-linh-vat-tu/yeu-cau-linh-vat-tu.model.ts");
/* harmony import */ var _gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.ts");
/* harmony import */ var _phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../phieu-mua-duoc-pham/phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts");




















let LapPhieuMuaDuocPhamComponent = class LapPhieuMuaDuocPhamComponent {
    constructor(apiService, dialog, notificationService, authService, router, ref, location) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.authService = authService;
        this.router = router;
        this.ref = ref;
        this.location = location;
        this.isCreate = false;
        this.inPhieu = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["PhieuYeuCauMuaThuoc"]();
        this.trangThaiVo = new _vat_tu_yeu_cau_linh_vat_tu_yeu_cau_linh_vat_tu_model__WEBPACK_IMPORTED_MODULE_17__["TrangThaiTaoPhieuLinh"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham;
        this.yeuCauMuaThuoc = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_15__["YeuCauMuaThuoc"]();
        this.trangThaiVo.TrangThai = null;
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closePopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    guiPhieuMuaDuocPham() {
        var self = this;
        self.dialog.open(_gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_18__["GuiPhieuMuaDuocPhamConfirmComponent"], {
            disableClose: false,
            width: "500px",
            data: {
                Title: "Xác nhận",
                Message: "Bạn có muốn tạo phiếu mua dược phẩm dự trù này không ?",
            },
        }).afterClosed().subscribe((res) => {
            if (res == "Yes") {
                self.yeuCauMuaThuoc = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                    self.savingPage();
                    self.apiService.post("YeuCauMuaDuocPham/GuiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                            self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham']);
                            self.closePopupSavingData();
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
            else if (res == "YesAndPrint") {
                self.yeuCauMuaThuoc = self.shared.getSharedData();
                self.validationErrors = [];
                self.ref.detectChanges();
                if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Add)) {
                    self.savingPage();
                    self.apiService.post("YeuCauMuaDuocPham/GuiPhieuMuaDuocPhamDuTru", self.yeuCauMuaThuoc).subscribe((result) => {
                        if (result != undefined && result != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                            self.closePopupSavingData();
                            self.dialog.open(_phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_19__["PhieuMuaDuocPhamComponent"], {
                                disableClose: false,
                                width: '1200px',
                                data: { Id: result, Loai: self.yeuCauMuaThuoc.NhomDuocPhamDuTru },
                            }).afterClosed().subscribe(result => {
                                self.router.navigate(['/nhap-xuat/duoc-pham/yeu-cau-mua-duoc-pham']);
                            });
                        }
                    }, (err) => {
                        self.validationErrors = err.ValidationErrors;
                        if (err.Message != "Validation Failed") {
                            self.notificationService.showError(err.Message);
                        }
                        self.closePopupSavingData();
                    });
                }
                else {
                    self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
                }
            }
        });
    }
    cancel() {
        this.location.back();
    }
    keyEvent(event) {
        if (event.keyCode == 27 && !event.ctrlKey) {
            //esc
            this.cancel();
            event.preventDefault();
        }
    }
};
LapPhieuMuaDuocPhamComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_lap_phieu_mua_duoc_pham_shared_lap_phieu_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_16__["LapPhieuMuaDuocPhamSharedComponent"], { static: true })
], LapPhieuMuaDuocPhamComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])("document:keydown", ["$event"])
], LapPhieuMuaDuocPhamComponent.prototype, "keyEvent", null);
LapPhieuMuaDuocPhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-lap-phieu-mua-duoc-pham',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lap-phieu-mua-duoc-pham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_3__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lap-phieu-mua-duoc-pham.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.scss")).default]
    })
], LapPhieuMuaDuocPhamComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvcGhpZXUtbXVhLWR1b2MtcGhhbS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx5ZXUtY2F1LW11YS10aHVvY1xccGhpZXUtbXVhLWR1b2MtcGhhbVxccGhpZXUtbXVhLWR1b2MtcGhhbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0veWV1LWNhdS1tdWEtdGh1b2MvcGhpZXUtbXVhLWR1b2MtcGhhbS9waGlldS1tdWEtZHVvYy1waGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbXVhLXRodW9jL3BoaWV1LW11YS1kdW9jLXBoYW0vcGhpZXUtbXVhLWR1b2MtcGhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PhieuMuaDuocPhamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaDuocPhamComponent", function() { return PhieuMuaDuocPhamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");







let PhieuMuaDuocPhamComponent = class PhieuMuaDuocPhamComponent {
    constructor(dialogRef, apiService, notificationService, data, ref) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.data = data;
        this.ref = ref;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.inPhieuDuocPham = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_5__["PhieuYeuCauMuaThuoc"]();
        this.src = "";
        this.dataHTML = "";
    }
    ngOnInit() {
        //console.log(this.data)
        this.xem();
    }
    xem() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuDuocPham.DuTruMuaDuocPhamId = self.data.Id;
        self.inPhieuDuocPham.Header = false;
        self.apiService.post("YeuCauMuaDuocPham/InPhieuDuTruMuaDuocPham", self.inPhieuDuocPham).subscribe(resData => {
            if (resData != undefined && resData != null) {
                self.inPhieuDuocPham.Header = false;
                self.dataHTML = resData;
                self.src = "data:text/html;charset=utf-8," + encodeURIComponent(resData);
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    getSharedPrintForm() {
        if (this.data.Loai == 1) {
            var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                "<th>PHIẾU DỰ TRÙ THUỐC, VẮC XIN</th>" +
                "</p>", "");
        }
        else {
            var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
                "<th>PHIẾU DỰ TRÙ HÓA CHẤT, HÓA CHẤT XÉT NGHIỆM</th>" +
                "</p>", "");
        }
        return new Promise(resolve => {
            resolve(template);
            //this.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
PhieuMuaDuocPhamComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PhieuMuaDuocPhamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-mua-duoc-pham',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-duoc-pham.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-duoc-pham.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PhieuMuaDuocPhamComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.scss ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3lldS1jYXUtbXVhLXRodW9jL3RoZW0tZHVvYy1waGFtLWR1LXRydS1tdWEtcG9wdXAvdGhlbS1kdW9jLXBoYW0tZHUtdHJ1LW11YS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: ThemDuocPhamDuTruMuaPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemDuocPhamDuTruMuaPopupComponent", function() { return ThemDuocPhamDuTruMuaPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../yeu-cau-mua-thuoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");












let ThemDuocPhamDuTruMuaPopupComponent = class ThemDuocPhamDuTruMuaPopupComponent {
    constructor(apiService, dialog, notificationService, ref, authService, dialogRef, data) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.ref = ref;
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isSelectDuocPham = false;
        this.popupLoadingData = null;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_9___default.a;
    }
    ngOnInit() {
        this.duocPham = new _yeu_cau_mua_thuoc_model__WEBPACK_IMPORTED_MODULE_2__["ThongTinThuocChiTiet"]();
        this.duocPham.NhomDuocPhamDuTru = this.data.NhomDuocPhamDuTru;
        this.duocPham.LoaiDuocPham = this.data.LoaiDuocPham;
        if (this.data.LoaiDuocPham == 1) {
            this.duocPham.LaDuocPhamBHYT == false;
        }
        else {
            this.duocPham.LaDuocPhamBHYT == true;
        }
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang thêm dữ liệu..." },
        });
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    closePopup(result) {
        this.dialogRef.close(result);
    }
    huy() {
        this.dialog.closeAll();
    }
    themDuocPham() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            disableClose: false,
            width: '500px',
            data: { Title: "Xác nhận", Message: "Bạn có muốn thêm dược phẩm này vào phiếu dự trù không?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                self.loadingPage();
                self.duocPham.IsThemDuocPham = true;
                self.apiService.post("YeuCauMuaDuocPham/ThemDuocPhamChiTietGridVo", self.duocPham).subscribe(resultData => {
                    self.closePopupLoadingData();
                    if (resultData != undefined && resultData != null) {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].ActionSuccessfully, ["Thêm"]));
                        self.duocPham.IsThemDuocPham = false;
                        let dataObj = {
                            data: resultData,
                            trangThai: "Them"
                        };
                        self.closePopup(dataObj);
                    }
                }, (err) => {
                    self.duocPham.IsThemDuocPham = false;
                    self.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        self.notificationService.showError(err.Message);
                    }
                    console.log("validationErrors: ", self.validationErrors);
                    self.closePopupLoadingData();
                });
            }
        });
    }
    chonDuongDung(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.duocPham.DuongDungId = dataItem.KeyId;
            this.duocPham.TenDuongDung = dataItem.DisplayName;
        }
        else {
            this.duocPham.DuongDungId = null;
            this.duocPham.TenDuongDung = null;
        }
    }
    chonDVT(dataItem) {
        if (dataItem != undefined && dataItem != null) {
            this.duocPham.DonViTinhId = dataItem.KeyId;
            this.duocPham.DVT = dataItem.DisplayName;
        }
        else {
            this.duocPham.DonViTinhId = null;
            this.duocPham.DVT = null;
        }
    }
    onKey(event) {
        if (event.key == "Enter") {
            if (this.isSelectDuocPham != true) {
                this.themDuocPham();
            }
            else {
                this.isSelectDuocPham = false;
            }
        }
    }
    openCombobox(event) {
        if (event) {
            this.isSelectDuocPham = true;
        }
        else {
            this.isSelectDuocPham = false;
        }
    }
};
ThemDuocPhamDuTruMuaPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
ThemDuocPhamDuTruMuaPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-them-duoc-pham-du-tru-mua-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./them-duoc-pham-du-tru-mua-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./them-duoc-pham-du-tru-mua-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], ThemDuocPhamDuTruMuaPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: YeuCauMuaThuocRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaThuocRoutingModule", function() { return YeuCauMuaThuocRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _danh_sach_du_tru_mua_thuoc_danh_sach_du_tru_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.ts");
/* harmony import */ var _lap_phieu_mua_duoc_pham_lap_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.ts");
/* harmony import */ var _lap_phieu_mua_duoc_pham_gui_lai_lap_phieu_mua_duoc_pham_gui_lai_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.ts");









const routes = [
    {
        path: '',
        // pathMatch: 'full',
        component: _danh_sach_du_tru_mua_thuoc_danh_sach_du_tru_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_6__["DanhSachDuTruMuaThuocComponent"],
        data: {
            title: 'Danh Sách Yêu Cầu Mua Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'lap-phieu-mua-duoc-pham/them',
        component: _lap_phieu_mua_duoc_pham_lap_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_7__["LapPhieuMuaDuocPhamComponent"],
        data: {
            title: 'Lập Dự Trù Mua Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'lap-phieu-mua-duoc-pham-gui-lai/:id',
        component: _lap_phieu_mua_duoc_pham_gui_lai_lap_phieu_mua_duoc_pham_gui_lai_component__WEBPACK_IMPORTED_MODULE_8__["LapPhieuMuaDuocPhamGuiLaiComponent"],
        data: {
            title: 'Lập Dự Trù Mua Dược Phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachYeuCauDuTruMuaDuocPham,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_4__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let YeuCauMuaThuocRoutingModule = class YeuCauMuaThuocRoutingModule {
};
YeuCauMuaThuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], YeuCauMuaThuocRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.model.ts ***!
  \***********************************************************************************************/
/*! exports provided: YeuCauMuaThuocGridVo, YeuCauMuaThuoc, YeuCauMuaThuocChiTiet, YeuCauMuaThuocChiTietValidator, ThongTinThuocChiTiet, ThongTinChiTietTonKho, PhieuYeuCauMuaThuoc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaThuocGridVo", function() { return YeuCauMuaThuocGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaThuoc", function() { return YeuCauMuaThuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaThuocChiTiet", function() { return YeuCauMuaThuocChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaThuocChiTietValidator", function() { return YeuCauMuaThuocChiTietValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinThuocChiTiet", function() { return ThongTinThuocChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTonKho", function() { return ThongTinChiTietTonKho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaThuoc", function() { return PhieuYeuCauMuaThuoc; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model */ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts");


class YeuCauMuaThuocGridVo {
    constructor(SoPhieu = null, TenNhanVienYeuCau = null, NgayYeuCauTuFormat = null, NgayYeuCauDenFormat = null, ChoDuyet = true, DaDuyet = false, TuChoiDuyet = false, TuNgay = null, DenNgay = null, SearchString = null, RangeFromDate = new _vat_tu_yeu_cau_mua_vat_tu_yeu_cau_mua_vat_tu_model__WEBPACK_IMPORTED_MODULE_1__["RangeDate"]()) {
        this.SoPhieu = SoPhieu;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
        this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
        this.RangeFromDate = RangeFromDate;
    }
}
class YeuCauMuaThuoc {
    constructor(Id = 0, SoPhieu = null, KyDuTruMuaDuocPhamVatTuId = null, NhomDuocPhamDuTru = null, TenNhomDuTru = null, TenKyDuTru = null, KhoId = null, TenKho = null, NhanVienYeuCauId = null, TenNhanVienYeuCau = null, NgayYeuCau = null, TruongKhoaId = null, TruongKhoaDuyet = null, NgayTaiKhoa = null, NgayKhoDuoc = null, NgayGiamDoc = null, TrangThai = null, TenTruongKhoa = null, NgayTruongKhoaDuyet = null, TenNhanVienKhoDuoc = null, NgayKhoDuocDuyet = null, TenGiamDoc = null, NgayGiamDocDuyet = null, GhiChu = null, LyDoTruongKhoaTuChoi = null, DuTruMuaDuocPhamChiTiets = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
        this.NhomDuocPhamDuTru = NhomDuocPhamDuTru;
        this.TenNhomDuTru = TenNhomDuTru;
        this.TenKyDuTru = TenKyDuTru;
        this.KhoId = KhoId;
        this.TenKho = TenKho;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCau = NgayYeuCau;
        this.TruongKhoaId = TruongKhoaId;
        this.TruongKhoaDuyet = TruongKhoaDuyet;
        this.NgayTaiKhoa = NgayTaiKhoa;
        this.NgayKhoDuoc = NgayKhoDuoc;
        this.NgayGiamDoc = NgayGiamDoc;
        this.TrangThai = TrangThai;
        this.TenTruongKhoa = TenTruongKhoa;
        this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
        this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
        this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
        this.TenGiamDoc = TenGiamDoc;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.GhiChu = GhiChu;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.DuTruMuaDuocPhamChiTiets = DuTruMuaDuocPhamChiTiets;
    }
}
class YeuCauMuaThuocChiTiet {
    constructor(STT = null, Id = 0, DuocPhamId = null, LaDuocPhamBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongDuTruTaiKhoaDuyet = null, NhomDieuTriDuPhong = null, DuTruMuaDuocPhamTheoKhoaChiTietId = null, DuTruMuaDuocPhamKhoDuocChiTietId = null, GhiChu = null) {
        this.STT = STT;
        this.Id = Id;
        this.DuocPhamId = DuocPhamId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.DuTruMuaDuocPhamTheoKhoaChiTietId = DuTruMuaDuocPhamTheoKhoaChiTietId;
        this.DuTruMuaDuocPhamKhoDuocChiTietId = DuTruMuaDuocPhamKhoDuocChiTietId;
        this.GhiChu = GhiChu;
    }
}
class YeuCauMuaThuocChiTietValidator {
    constructor(DuocPhamId = 0, LaDuocPhamBHYT = null) {
        this.DuocPhamId = DuocPhamId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
    }
}
class ThongTinThuocChiTiet {
    constructor(STT = 0, Id = 0, DuocPhamId = null, LaDuocPhamBHYT = null, HoatChat = null, SoDangKy = null, NhomDuocPhamDuTru = null, HamLuong = null, DVT = null, TenDuongDung = null, DuongDungId = null, DonViTinhId = null, NhomDuTruId = null, NhaSX = null, NuocSX = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, NhomDuPhongId = null, SoLuongTonDuTru = null, SoLuongTonKhoTong = null, SoLuongChuaNhapVeHDT = null, // Hợp đồng thầu
    ThongTinChiTietTonKhoTongs = [], ThongTinChiTietTonHDTs = [], LoaiDuocPham = null, TenLoaiDuocPham = null, Ten = null, NhomDieuTriDuPhong = null, NhomDieuTriDuTru = null, GhiChu = null, SLTonDuTru = null, SLTonKhoTong = null, SLChuaNhapVeHDT = null, SoLuongDuTruTaiKhoaDuyet = null, SoLuongDuTruKhoaDuocDuyet = null, SoLuongDuTruGiamDocDuyet = null, NhomDuPhong = null, KhoId = null, IsThemDuocPham = false, YeuCauMuaThuocChiTietValidators = []) {
        this.STT = STT;
        this.Id = Id;
        this.DuocPhamId = DuocPhamId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.HoatChat = HoatChat;
        this.SoDangKy = SoDangKy;
        this.NhomDuocPhamDuTru = NhomDuocPhamDuTru;
        this.HamLuong = HamLuong;
        this.DVT = DVT;
        this.TenDuongDung = TenDuongDung;
        this.DuongDungId = DuongDungId;
        this.DonViTinhId = DonViTinhId;
        this.NhomDuTruId = NhomDuTruId;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.NhomDuPhongId = NhomDuPhongId;
        this.SoLuongTonDuTru = SoLuongTonDuTru;
        this.SoLuongTonKhoTong = SoLuongTonKhoTong;
        this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
        this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
        this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
        this.LoaiDuocPham = LoaiDuocPham;
        this.TenLoaiDuocPham = TenLoaiDuocPham;
        this.Ten = Ten;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.NhomDieuTriDuTru = NhomDieuTriDuTru;
        this.GhiChu = GhiChu;
        this.SLTonDuTru = SLTonDuTru;
        this.SLTonKhoTong = SLTonKhoTong;
        this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
        this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
        this.NhomDuPhong = NhomDuPhong;
        this.KhoId = KhoId;
        this.IsThemDuocPham = IsThemDuocPham;
        this.YeuCauMuaThuocChiTietValidators = YeuCauMuaThuocChiTietValidators;
    }
}
class ThongTinChiTietTonKho {
    constructor(Ten = null, SLTon = null, SoLuongTon = null) {
        this.Ten = Ten;
        this.SLTon = SLTon;
        this.SoLuongTon = SoLuongTon;
    }
}
class PhieuYeuCauMuaThuoc {
    constructor(DuTruMuaDuocPhamId = 0, HostingName = null, Header = null, TrangThai = null) {
        this.DuTruMuaDuocPhamId = DuTruMuaDuocPhamId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.TrangThai = TrangThai;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc.module.ts ***!
  \************************************************************************************************/
/*! exports provided: YeuCauMuaThuocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaThuocModule", function() { return YeuCauMuaThuocModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _yeu_cau_mua_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yeu-cau-mua-thuoc-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/yeu-cau-mua-thuoc-routing.module.ts");
/* harmony import */ var _danh_sach_du_tru_mua_thuoc_danh_sach_du_tru_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/danh-sach-du-tru-mua-thuoc/danh-sach-du-tru-mua-thuoc.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _lap_phieu_mua_duoc_pham_lap_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham/lap-phieu-mua-duoc-pham.component.ts");
/* harmony import */ var _lap_phieu_mua_duoc_pham_gui_lai_lap_phieu_mua_duoc_pham_gui_lai_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-gui-lai/lap-phieu-mua-duoc-pham-gui-lai.component.ts");
/* harmony import */ var _lap_phieu_mua_duoc_pham_shared_lap_phieu_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/lap-phieu-mua-duoc-pham-shared/lap-phieu-mua-duoc-pham-shared.component.ts");
/* harmony import */ var _phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./phieu-mua-duoc-pham/phieu-mua-duoc-pham.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/phieu-mua-duoc-pham/phieu-mua-duoc-pham.component.ts");
/* harmony import */ var _them_duoc_pham_du_tru_mua_popup_them_duoc_pham_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/them-duoc-pham-du-tru-mua-popup/them-duoc-pham-du-tru-mua-popup.component.ts");
/* harmony import */ var _gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/yeu-cau-mua-thuoc/gui-phieu-mua-duoc-pham-confirm/gui-phieu-mua-duoc-pham-confirm.component.ts");





















let YeuCauMuaThuocModule = class YeuCauMuaThuocModule {
};
YeuCauMuaThuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _danh_sach_du_tru_mua_thuoc_danh_sach_du_tru_mua_thuoc_component__WEBPACK_IMPORTED_MODULE_4__["DanhSachDuTruMuaThuocComponent"],
            _lap_phieu_mua_duoc_pham_lap_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_15__["LapPhieuMuaDuocPhamComponent"],
            _lap_phieu_mua_duoc_pham_gui_lai_lap_phieu_mua_duoc_pham_gui_lai_component__WEBPACK_IMPORTED_MODULE_16__["LapPhieuMuaDuocPhamGuiLaiComponent"],
            _lap_phieu_mua_duoc_pham_shared_lap_phieu_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_17__["LapPhieuMuaDuocPhamSharedComponent"],
            _phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaDuocPhamComponent"], _them_duoc_pham_du_tru_mua_popup_them_duoc_pham_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_19__["ThemDuocPhamDuTruMuaPopupComponent"], _gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_20__["GuiPhieuMuaDuocPhamConfirmComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _yeu_cau_mua_thuoc_routing_module__WEBPACK_IMPORTED_MODULE_3__["YeuCauMuaThuocRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_9__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_14__["DropDownButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"]
        ],
        exports: [],
        entryComponents: [
            _phieu_mua_duoc_pham_phieu_mua_duoc_pham_component__WEBPACK_IMPORTED_MODULE_18__["PhieuMuaDuocPhamComponent"],
            _them_duoc_pham_du_tru_mua_popup_them_duoc_pham_du_tru_mua_popup_component__WEBPACK_IMPORTED_MODULE_19__["ThemDuocPhamDuTruMuaPopupComponent"],
            _gui_phieu_mua_duoc_pham_confirm_gui_phieu_mua_duoc_pham_confirm_component__WEBPACK_IMPORTED_MODULE_20__["GuiPhieuMuaDuocPhamConfirmComponent"]
        ]
    })
], YeuCauMuaThuocModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/vat-tu/yeu-cau-mua-vat-tu/yeu-cau-mua-vat-tu.model.ts ***!
  \**********************************************************************************************/
/*! exports provided: YeuCauMuaVatTuGridVo, RangeDate, YeuCauMuaVatTu, YeuCauMuaVatTuChiTiet, PhieuYeuCauMuaVatTu, ThongTinVatTuChiTiet, YeuCauMuaVatTuChiTietValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuGridVo", function() { return YeuCauMuaVatTuGridVo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTu", function() { return YeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTiet", function() { return YeuCauMuaVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuYeuCauMuaVatTu", function() { return PhieuYeuCauMuaVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinVatTuChiTiet", function() { return ThongTinVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YeuCauMuaVatTuChiTietValidator", function() { return YeuCauMuaVatTuChiTietValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class YeuCauMuaVatTuGridVo {
    constructor(SoPhieu = null, TenNhanVienYeuCau = null, NgayYeuCauTuFormat = null, NgayYeuCauDenFormat = null, RangeFromDate = new RangeDate(), FromDate = null, ToDate = null, ChoDuyet = true, DaDuyet = false, TuChoiDuyet = false, TuNgay = null, DenNgay = null, SearchString = null) {
        this.SoPhieu = SoPhieu;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.NgayYeuCauTuFormat = NgayYeuCauTuFormat;
        this.NgayYeuCauDenFormat = NgayYeuCauDenFormat;
        this.RangeFromDate = RangeFromDate;
        this.FromDate = FromDate;
        this.ToDate = ToDate;
        this.ChoDuyet = ChoDuyet;
        this.DaDuyet = DaDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SearchString = SearchString;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null, TuNgay = null, DenNgay = null) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
    }
}
class YeuCauMuaVatTu {
    constructor(Id = 0, SoPhieu = null, KhoId = null, NhanVienYeuCauId = null, NgayYeuCau = null, KyDuTruMuaDuocPhamVatTuId = null, GhiChu = null, TruongKhoaId = null, TruongKhoaDuyet = null, TenKho = null, TenNhanVienYeuCau = null, TenNhomDuTru = null, TenKyDuTru = null, NgayTaiKhoa = null, NgayKhoDuoc = null, NgayGiamDoc = null, TrangThai = null, TenTruongKhoa = null, NgayTruongKhoaDuyet = null, TenNhanVienKhoDuoc = null, NgayKhoDuocDuyet = null, TenGiamDoc = null, NgayGiamDocDuyet = null, LyDoTruongKhoaTuChoi = null, DuTruMuaVatTuChiTiets = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.KhoId = KhoId;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NgayYeuCau = NgayYeuCau;
        this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
        this.GhiChu = GhiChu;
        this.TruongKhoaId = TruongKhoaId;
        this.TruongKhoaDuyet = TruongKhoaDuyet;
        this.TenKho = TenKho;
        this.TenNhanVienYeuCau = TenNhanVienYeuCau;
        this.TenNhomDuTru = TenNhomDuTru;
        this.TenKyDuTru = TenKyDuTru;
        this.NgayTaiKhoa = NgayTaiKhoa;
        this.NgayKhoDuoc = NgayKhoDuoc;
        this.NgayGiamDoc = NgayGiamDoc;
        this.TrangThai = TrangThai;
        this.TenTruongKhoa = TenTruongKhoa;
        this.NgayTruongKhoaDuyet = NgayTruongKhoaDuyet;
        this.TenNhanVienKhoDuoc = TenNhanVienKhoDuoc;
        this.NgayKhoDuocDuyet = NgayKhoDuocDuyet;
        this.TenGiamDoc = TenGiamDoc;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.DuTruMuaVatTuChiTiets = DuTruMuaVatTuChiTiets;
    }
}
class YeuCauMuaVatTuChiTiet {
    constructor(STT = null, Id = 0, VatTuId = null, LaVatTuBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongDuTruTaiKhoaDuyet = null, NhomDieuTriDuPhong = null, GhiChu = null, DuTruMuaVatTuTheoKhoaChiTietId = null, DuTruMuaVatTuKhoDuocChiTietId = null) {
        this.STT = STT;
        this.Id = Id;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.GhiChu = GhiChu;
        this.DuTruMuaVatTuTheoKhoaChiTietId = DuTruMuaVatTuTheoKhoaChiTietId;
        this.DuTruMuaVatTuKhoDuocChiTietId = DuTruMuaVatTuKhoDuocChiTietId;
    }
}
class PhieuYeuCauMuaVatTu {
    constructor(DuTruMuaVatTuId = 0, HostingName = null, Header = null, TrangThai = null) {
        this.DuTruMuaVatTuId = DuTruMuaVatTuId;
        this.HostingName = HostingName;
        this.Header = Header;
        this.TrangThai = TrangThai;
    }
}
class ThongTinVatTuChiTiet {
    constructor(STT = 0, Id = 0, NhomVatTuId = null, VatTuId = null, LaVatTuBHYT = null, Ma = null, DVT = null, QuyCach = null, NhaSX = null, NuocSX = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongTonDuTru = null, SoLuongTonKhoTong = null, SoLuongChuaNhapVeHDT = null, // Hợp đồng thầu
    ThongTinChiTietTonKhoTongs = [], ThongTinChiTietTonHDTs = [], LoaiVatTu = null, TenLoaiVatTu = null, Ten = null, SLTonDuTru = null, SLTonKhoTong = null, SLChuaNhapVeHDT = null, SoLuongDuTruTaiKhoaDuyet = null, SoLuongDuTruKhoaDuocDuyet = null, SoLuongDuTruGiamDocDuyet = null, KhoId = null, IsThemVatTu = false, GhiChu = null, YeuCauMuaVatTuChiTietValidators = []) {
        this.STT = STT;
        this.Id = Id;
        this.NhomVatTuId = NhomVatTuId;
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
        this.Ma = Ma;
        this.DVT = DVT;
        this.QuyCach = QuyCach;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongTonDuTru = SoLuongTonDuTru;
        this.SoLuongTonKhoTong = SoLuongTonKhoTong;
        this.SoLuongChuaNhapVeHDT = SoLuongChuaNhapVeHDT;
        this.ThongTinChiTietTonKhoTongs = ThongTinChiTietTonKhoTongs;
        this.ThongTinChiTietTonHDTs = ThongTinChiTietTonHDTs;
        this.LoaiVatTu = LoaiVatTu;
        this.TenLoaiVatTu = TenLoaiVatTu;
        this.Ten = Ten;
        this.SLTonDuTru = SLTonDuTru;
        this.SLTonKhoTong = SLTonKhoTong;
        this.SLChuaNhapVeHDT = SLChuaNhapVeHDT;
        this.SoLuongDuTruTaiKhoaDuyet = SoLuongDuTruTaiKhoaDuyet;
        this.SoLuongDuTruKhoaDuocDuyet = SoLuongDuTruKhoaDuocDuyet;
        this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
        this.KhoId = KhoId;
        this.IsThemVatTu = IsThemVatTu;
        this.GhiChu = GhiChu;
        this.YeuCauMuaVatTuChiTietValidators = YeuCauMuaVatTuChiTietValidators;
    }
}
class YeuCauMuaVatTuChiTietValidator {
    constructor(VatTuId = 0, LaVatTuBHYT = null) {
        this.VatTuId = VatTuId;
        this.LaVatTuBHYT = LaVatTuBHYT;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~nhap-xuat-duoc-pham-tong-hop-du-tru-mua-thuoc-tai-khoa-tong-hop-du-tru-mua-thuoc-tai-khoa-mo~9f0473de-es2015.js.map