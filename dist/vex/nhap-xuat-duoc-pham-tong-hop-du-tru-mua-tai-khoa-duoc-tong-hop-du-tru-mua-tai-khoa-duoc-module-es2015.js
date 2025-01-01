(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-tong-hop-du-tru-mua-tai-khoa-duoc-tong-hop-du-tru-mua-tai-khoa-duoc-module"],{

/***/ "./node_modules/@iconify/icons-ic/baseline-info.js":
/*!*********************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/baseline-info.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" *ngIf=\"loaiKhoThuoc === true \">\n    <div fxFlex=\"100%\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5'\">\n        <h4 style=\"color: red;\">Lý do: {{thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n    <app-textbox id=\"soPhieu\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.SoPhieu\"\n        maxlength=\"50\" label=\"Số phiếu\" [validationerror]=\"'SoPhieu' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-textbox id=\"Khoa\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Khoa\"\n        bind=\"true\" label=\"Khoa\" class=\"item-no-padding\" [validationerror]=\"'Khoa' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-combobox id=\"KyDuTru\" fxFlex=\"20%\" [required]=\"true\" fxFlex.sm=\"20%\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KyDuTru\"\n        [modelText]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KyDuTru\" label=\"Kỳ dự trù\" [disabled]=\"isDisableTrangThai\"\n        url=\"\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenNguoiYeuCau\" label=\"Người yêu cầu\" class=\"item-no-padding\"\n        [validationerror]=\"'TenNguoiYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NgayYeuCau\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"100%\"  [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.GhiChu\"\n        bind=\"true\" label=\"Ghi chú\" class=\"item-no-padding\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" [disabled]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textbox>\n    <span fxFlex=\"100%\"><b>THÔNG TIN CHI TIẾT</b></span>\n    <app-grid baseRoute=\"\" #gridCreate fxFlex=\"100%\" [gridColumns]=\"gridChildColumns\"  [documentType]=\"documentType\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n        [lazyLoadPage]=\"true\" [gridDataSource]=\"gridDataSource\" [detailTemplate]=\"detailChildTemplate\"  [pageable]=\"false\"\n        [autoHeight]=\"true\" [groups]=\"groups\">\n    </app-grid>\n    <ng-template #detailChildTemplate let-dataItem>\n        <app-grid baseRoute=\"\" [gridColumns]=\"gridChildChildKhoaColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" urlGetData=\"YeuCauMuaDuocPham/GetDataChildKhoaForGridAsync\" [pageable]=\"false\"\n            additionalSearchString=\"{{dataItem.Id}}-{{dataItem.Loai}}-{{dataItem.DuocPhamId}}\"\n            [autoHeight]=\"true\">\n        </app-grid>\n\n    </ng-template>\n\n</div>\n<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" *ngIf=\"loaiKhoThuoc === false\">\n    <div fxFlex=\"100%\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5'\">\n        <h4 style=\"color: red;\">Lý do: {{thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi}}</h4>\n    </div>\n    <app-textbox id=\"soPhieu\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.SoPhieu\"\n        maxlength=\"50\" label=\"Số phiếu\" [validationerror]=\"'SoPhieu' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-combobox id=\"LoaiDuTruId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuTruId\"\n        [modelText]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuTru\" url=\"\" label=\"Nhóm\"\n        [validationerror]=\"'LoaiDuTruId' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-combobox>\n    <app-combobox id=\"khoNhapId\" fxFlex=\"20\" fxFlex.sm=\"20\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId\" [disabled]=\"true\"\n        [modelText]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenKho\" url=\"\" label=\"Kho\"\n        [validationerror]=\"'KhoId' | validationerror:validationErrors\">\n    </app-combobox>\n    <app-combobox id=\"KyDuTru\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KyDuTru\"\n        [modelText]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KyDuTru\" label=\"Kỳ dự trù\" [disabled]=\"isDisableTrangThai\"\n        url=\"\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenNguoiYeuCau\" label=\"Người yêu cầu\" class=\"item-no-padding\"\n        [validationerror]=\"'TenNguoiYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NgayYeuCau\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n\n    <app-textbox id=\"GhiChu\" fxFlex=\"80%\"  [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.GhiChu\"\n        bind=\"true\" label=\"Ghi chú\" class=\"item-no-padding\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" [disabled]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textbox>\n   \n    <span fxFlex=\"100%\"><b>THÔNG TIN CHI TIẾT </b></span>\n    <app-grid baseRoute=\"\" fxFlex=\"100%\" #gridCreate [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n        [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [pageable]=\"false\" \n        [lazyLoadPage]=\"true\" [gridDataSource]=\"gridDataSource\" additionalSearchString=\"\" [autoHeight]=\"true\" [groups]=\"groups\"\n        >\n    </app-grid>\n    <!-- <ng-template #detailChildKhoaTemplate let-dataItem>\n        <app-grid baseRoute=\"\" [gridColumns]=\"gridChildChildKhoColumns\" [documentType]=\"documentType\"\n            [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [lazyLoadPage]=\"true\" urlGetData=\"YeuCauMuaDuocPham/GetDataChildForGridAsync\" [pageable]=\"false\"\n            additionalSearchString=\"{{dataItem.Id}}-{{dataItem.Loai}}-{{dataItem.DuocPhamId}}\"\n            [autoHeight]=\"true\">\n        </app-grid>\n\n    </ng-template> -->\n\n</div>\n<ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    {{rowIndex + 1}}\n</ng-template>\n<ng-template #tongTonKhoTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of khos\">\n                <td>{{item.TenKhoTong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\"  (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #hDChuaNhanTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of hdts\">\n                <td>{{item.TenHopDong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #sLDuTruKhoTDuocDuyet let-dataItem let-rowIndex=\"rowIndex\">\n    <app-textboxnumeric class=\"no-label numeric-in-grid\" (modelChange)=\"modelChangeSoLuongDuyet($event ,dataItem)\"\n        [(model)]=\"dataItem.SLDuTruTKhoDuyet\" max=\"1000000\" min=\"1\" [disabled]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textboxnumeric>\n</ng-template>\n<ng-template #loaiTemplate let-dataItem>\n    <span *ngIf=\"dataItem.Loai == true\">BHYT</span>\n    <span *ngIf=\"dataItem.Loai == false\">Không BHYT</span>\n</ng-template>\n<ng-template #SLDuTruKhoDuocDuyet let-dataItem let-rowIndex=\"rowIndex\">\n    <app-textboxnumeric class=\"no-label numeric-in-grid\" (modelChange)=\"modelChangeSoLuongKDDuyet($event ,dataItem)\"\n        [(model)]=\"dataItem.SLDuTruKhoDuocDuyet\" max=\"1000000\" min=\"1\" [disabled]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='2' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='3' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='4'\">\n    </app-textboxnumeric>\n</ng-template>\n<ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <div fxFlex=\"100%\">\n        <strong fxFlex=\"15%\">\n            <span *ngIf=\"value == true\"><b>BHYT</b></span>\n            <span *ngIf=\"value == false\"><b>Không BHYT</b></span>\n        </strong>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.html":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.html ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Nhập xuất',Path:''}\n,{Title:'Dược phẩm',Path:''}\n,{Title:'Dự trù mua',Path:''}\n,{Title:'THDT Mua Tại K.Dược​',Path:'/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc',queryParams: {holdQuery : true},Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Duyệt Tổng Hợp Dự Trù Mua Dược Phẩm ​</h2>\n                <b class=\"status-yeu-cau-linh trang-thai t{{thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai}}\">{{thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThaiHienThi}}</b>\n               \n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-duyet-du-tru-mua-duoc-pham-shared (dataItem)=\"getDataItem($event)\">\n                </app-duyet-du-tru-mua-duoc-pham-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai =='2' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai =='1'\"><i\n                        class=\"ft-arrow-left\"></i> Hủy</button>\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai =='4' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='5' || thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='3'\"><i\n                            class=\"ft-arrow-left\"></i> Quay lại</button>\n                    <button type=\"button\" (click)=\"tuChoi()\"  mat-button class=\"mr-1 color-button\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai =='1'\"><i\n                            class=\"ft-arrow-left\"></i>Từ chối</button>\n                    <button type=\"button\"  *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='1'\" (click)=\"Duyet()\" color=\"primary\" mat-raised-button><i\n                            class=\"ft-save\"></i> Duyệt</button>\n                            <button type=\"button\" (click)=\"huyDuyet()\"  mat-button class=\"mr-1 color-button\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai=='2'\"><i\n                                    class=\"ft-arrow-left\"></i>Hủy Duyệt</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.html":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.html ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n    fxLayoutAlign=\"space-between\" >\n    <div fxFlex=\"100%\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '5'\">\n        <h4 style=\"color: red;\">Lý do: {{thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.LyDoTuChoi}}</h4>\n    </div>\n    <app-combobox id=\"KyDuTru\" fxFlex=\"20%\" fxFlex.sm=\"20%\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.KyDuTruId\"\n        [modelText]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.KyDuTru\" label=\"Kỳ dự trù\" [autoSelectFirstItem]=\"true\"\n        [disabled]=\"isDisableTrangThai\" url=\"\">\n    </app-combobox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TenNguoiYeuCau\" bind=\"true\" label=\"Người yêu cầu\" class=\"item-no-padding\"\n         [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\" label=\"Ngày yêu cầu\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.NgayYeuCau\"\n         [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n    <app-textbox id=\"GhiChu\" fxFlex=\"40%\"  [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.GhiChu\"\n        bind=\"true\" label=\"Ghi chú\" class=\"item-no-padding\"  [disabled]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '5' || thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '4' || thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '3'\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" >\n    </app-textbox>\n     <span fxFlex=\"100%\"><b>THÔNG TIN CHI TIẾT</b></span>\n    <div class=\"px-6 py-4\" fxLayout=\"column\">\n        <app-grid baseRoute=\"\" #grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"gridDataSource\"  [detailTemplate]=\"detailChildTemplate\"\n            [autoHeight]=\"true\" [pageable]=\"false\" [groups]=\"groups\">\n        </app-grid>\n    </div>\n    <ng-template #detailChildTemplate let-dataItem>\n        <app-grid baseRoute=\"\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '0'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            [gridDataSource]=\"getDataSourceChild(dataItem)\"  [pageable]=\"false\"\n            additionalSearchString=\"\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [removeGroupFooterIfIsOnlyOne]=\"true\">\n        </app-grid>\n        <app-grid baseRoute=\"\"  *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '5'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            urlGetData=\"YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietGoiViewChild\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n            additionalSearchString=\"{{dataItem.Id}}\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [pageable]=\"false\">\n        </app-grid>\n        <app-grid baseRoute=\"\"  *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '3'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietGoiViewChild\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n        additionalSearchString=\"{{dataItem.Id}}\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [pageable]=\"false\">\n    </app-grid>\n        <app-grid baseRoute=\"\"  *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '4'\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDuTruMuaDuocPhamChiTietGoiViewChild\" [removeGroupFooterIfIsOnlyOne]=\"true\"\n        additionalSearchString=\"{{dataItem.Id}}\"  [autoHeight]=\"true\" [groups]=\"groupNhoms\" [pageable]=\"false\">\n    </app-grid>\n    </ng-template>\n    <ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div fxFlex=\"100%\">\n            <strong fxFlex=\"15%\" >\n                <span>{{value}}</span> \n            </strong>\n        </div>\n    </ng-template>\n    <ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n        <div fxFlex=\"100%\">\n            <strong fxFlex=\"15%\">\n                <span *ngIf=\"value == true\"><b>BHYT</b></span>\n                <span *ngIf=\"value == false\"><b>KhôngBHYT</b></span>\n            </strong>\n        </div>\n    </ng-template>\n    <ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #loaiTemplate let-dataItem >\n        <span *ngIf=\"dataItem.Loai == true\"><b>BHYT</b></span>\n        <span *ngIf=\"dataItem.Loai == false\"><b>KhôngBHYT</b></span>\n    </ng-template>\n    <ng-template #khoaTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        {{rowIndex + 1}}\n    </ng-template>\n    <ng-template #soLuongDuTruHeaderTemplate let-aggregates=\"aggregates\">\n        <strong>{{aggregates.SLDuTru.sum | number:'1.0':'vi-VN' }}</strong>\n    </ng-template>\n    <ng-template #soLuongDuKienHeaderTemplate let-aggregates=\"aggregates\">\n        <strong>{{aggregates.SLDuKienTrongKy.sum | number:'1.0':'vi-VN' }}</strong>\n    </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.html":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.html ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Nhập xuất',Path:''}\n,{Title:'Dược phẩm',Path:''}\n,{Title:'Dự trù mua',Path:''}\n,{Title:'THDT Mua Tại K.Dược',Path:'/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc',queryParams: {holdQuery : true},Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai != '0'\">Chi Tiết Gửi Tổng Hợp Dự Trù Mua Dược Phẩm </h2>\n                <h2 class=\"title m-0\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '0'\">Gửi Tổng Hợp Dự Trù Mua Dược Phẩm </h2>\n                <b\n                    class=\"status-yeu-cau-linh trang-thai t{{thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai}}\">{{thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThaiHienThi}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-goi-giam-doc-du-tru-mua-duoc-pham-shared (dataItem)=\"getDataItem($event)\">\n                </app-goi-giam-doc-du-tru-mua-duoc-pham-shared>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\">\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '3' || thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '4' || thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '5'\"><i class=\"ft-arrow-left\" ></i> Quay lại\n                    </button>\n                    <button type=\"button\" (click)=\"huy()\" mat-button class=\"mr-1 align-right-fx\" *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '0'\"><i class=\"ft-arrow-left\"  ></i> Hủy\n                    </button>\n                    <button type=\"button\" (click)=\"goi()\"  *ngIf=\"thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TrangThai == '0'\" color=\"primary\" mat-raised-button><i class=\"ft-save\"></i> Gửi</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.html":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.html ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div [innerHtml]=\"Message\"></div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close('No')\">{{ButtonNo}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('YesAndPrint')\">{{ButtonYesAndPrint}}</button>\n    <button mat-raised-button color=\"primary\" (click)=\"close('Yes')\">{{ButtonYes}}</button>\n\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>IN PHIẾU DỰ TRÙ MUA DƯỢC PHẨM TẠI KHOA </div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n<mat-dialog-content >\n    <div class=\"container-iframe\"><iframe width=\"100%\" [src]=\"src| safe\" allowTransparency=\"true\"\n            background=\"transparent\"></iframe>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <app-print-form fxFlex='100%' class=\"mr-1 mt-2\" textPrint=\"In phiếu\" type=\"PDF\" [bodyComponent]=\"this\">\n    </app-print-form>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.html":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid baseRoute=\"\" #gridChoXuLy [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n    [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [checkboxAble]=\"false\"\n    pageSize=\"50\" urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaDuocForGridAsync\"\n    urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocForGridAsync\" [detailTemplate]=\"detailTemplate\"\n    [allowSortDefault]=\"true\" heightToolbar=\"205\" [groups]=\"groupTrangThais\">\n</app-grid>\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox fxFlex=\"100px\" (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.ChoDuyet\" class=\"ml-2\" label=\"Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox fxFlex=\"100px\" (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.ChoGoi\" class=\"ml-2\" label=\"Chờ gửi\">\n        </app-checkbox>\n        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n            fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"clearSearch()\"\n                placeholder=\"Nhập từ khóa\" />\n        </div>\n        <span fxFlex=\"5px\"></span>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap\" label=\"Yêu cầu từ ngày - đến ngày\"\n            (modelChange)=\"changeNgayNhapRange()\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n\n        <!-- <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet\" label=\"Duyệt từ ngày - đến ngày\"\n            (modelChange)=\"changeNgayDuyetRange($event)\" class=\"mt-1 on-header\">\n        </app-daterangepicker> -->\n\n        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n        </button>\n        <span fxFlex=\"20%\"></span>\n\n    </div>\n</ng-template>\n<ng-template #tenNhomGroupHeaderTemplate let-value=\"value\" let-dataItem let-aggregates=\"aggregates\">\n    <div fxFlex=\"100%\">\n        <strong fxFlex=\"15%\" [ngStyle]=\"{'color':value !== 'Chờ duyệt' ? '#afb42b' : 'sandybrown' }\">\n            <span>{{theFirstValueFormat(value)}}({{aggregates.TrangThai.count}})</span> \n        </strong>\n        <strong fxFlex=\"70%\" *ngIf=\"value !== 'Chờ duyệt'\">\n            <span fxFlex=\"60%\">Kỳ dự trù: <span style=\"color:#afb42b\">{{theFirstValueFormatChuKy(value)}}</span></span>\n        </strong>\n        <button fxFlex=\"15%\" type=\"button\" color=\"primary\" mat-raised-button mat-button (click)=\"GoiGiamDocDuyet(theFirstValueKyDuTruMuaDuocPhamVatTuId(value))\"\n            *ngIf=\"value !== 'Chờ duyệt'\" style=\"margin-right: -25px\">\n            Gửi giám đốc duyệt\n        </button>\n    </div>\n</ng-template>\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"xemChiTietDuTruMuaDuocPhamTaiKhoDuoc(dataItem.Id, dataItem.KhoId,dataItem.TrangThaiDuTru)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    <span>{{dataItem.NgayYeuCauDisplay}}</span>\n</ng-template>\n<ng-template #ngayKhoaDuocDuyetTemplate let-dataItem>\n    <span>{{dataItem.NgayKhoaDuocDuyetDisplay}}</span>\n</ng-template>\n<ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n    <span>{{dataItem.NgayGiamDocDuyet}}</span>\n</ng-template>\n<ng-template #actionTemplate let-dataItem>\n    <button type=\"button\" class=\"mr-4\" color=\"warn\" fxFlex=\"100px\" mat-raised-button\n        mat-button (click)=\"TuChoi(dataItem.Id,dataItem.KhoId)\" *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\"><i class=\"ft-save mr-1\"></i>\n        Từ chối\n    </button>\n    <button type=\"button\" class=\"mr-4\" fxFlex=\"100px\" color=\"primary\" mat-raised-button mat-button (click)=\"duyet(dataItem.Id,dataItem.KhoId)\"\n        *ngIf=\"dataItem.TrangThai === 'Chờ duyệt'\">\n        Duyệt\n    </button>\n    <button type=\"button\" class=\"mr-4\" color=\"warn\" style=\"margin-left: 115px;\" fxFlex=\"100px\" mat-raised-button\n        mat-button (click)=\"HuyDuyet(dataItem,dataItem.KhoId)\" *ngIf=\"dataItem.TrangThai !== 'Chờ duyệt'\">\n        Hủy duyệt\n    </button>\n</ng-template>\n<ng-template #detailTemplate let-dataItem>\n    <app-grid baseRoute=\"\" *ngIf= \"dataItem.KhoId == 5\" [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocChildForGridAsync\"  \n        additionalSearchString=\"{{dataItem.Id}}-{{dataItem.KhoId}}-{{dataItem.TrangThaiDuTru}}-{{dataItem.KhoaIdKhoId}}\"  [groups]=\"groupsChildChild\"\n        [detailTemplate]=\"detailChildTemplate\" [autoHeight]=\"true\" >\n    </app-grid>\n    <app-grid baseRoute=\"\" *ngIf= \"dataItem.KhoId != 5\"[gridColumns]=\"khoGridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocChildForGridAsync\" \n        additionalSearchString=\"{{dataItem.Id}}-{{dataItem.KhoId}}-{{dataItem.TrangThaiDuTru}}-{{dataItem.KhoaIdKhoId}}\"  [groups]=\"groupsChildChild\"\n        [autoHeight]=\"true\">\n    </app-grid>\n</ng-template>\n<ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    {{rowIndex + 1}}\n</ng-template>\n<ng-template #tongTonKhoTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of khos\">\n                <td>{{item.TenKhoTong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\"  class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #hDChuaNhanTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of hdts\">\n                <td>{{item.TenHopDong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <div fxFlex=\"100%\">\n        {{value}}\n    </div>\n</ng-template>\n<ng-template #detailChildTemplate let-dataItem>\n    <app-grid baseRoute=\"\" [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocChildChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocChildChildForGridAsync\"\n        additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiDuocPham}}-{{dataItem.KhoId}}-{{dataItem.KhoaPhongId}}\"  [autoHeight]=\"true\">\n    </app-grid>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.html":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.html ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid baseRoute=\"\" #grid1 fxFlex=\"100%\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\"\n    [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n    [checkboxAble]=\"false\" urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyForGridAsync\"\n    urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyForGridAsync\" pageSize=\"50\"\n    [detailTemplate]=\"detailTemplate\" [allowSortDefault]=\"true\" heightToolbar=\"205\">\n</app-grid>\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <app-checkbox fxFlex=\"150px\" (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.DaGoiVaDangChoDuyet\" class=\"ml-2\" label=\"Đã gửi & Chờ duyệt\">\n        </app-checkbox>\n        <app-checkbox fxFlex=\"100px\" (modelChange)=\"CheckboxChange($event, false, false, true)\" id=\"DaDuyetId\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n        </app-checkbox>\n        <app-checkbox fxFlex=\"100px\" (modelChange)=\"CheckboxChange($event, false, true)\" id=\"TuChoiDuyetId\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.TuChoiDuyet\" class=\"ml-2\" label=\"Từ chối\">\n        </app-checkbox>\n        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\"\n            fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n            <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n                (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa\" />\n        </div>\n        <span fxFlex=\"5px\"></span>\n        <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeDuyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n            [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet\" label=\"Gửi từ ngày - đến ngày\"\n            (modelChange)=\"changeNgayDuyetRange($event)\" class=\"mt-1 on-header\">\n        </app-daterangepicker>\n\n        <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n        </button>\n        <span fxFlex=\"20%\"></span>\n    </div>\n</ng-template>\n<ng-template #tinhTrangTemplate let-dataItem>\n    <span *ngIf=\"dataItem.TinhTrang == 3\" style=\"color: blue;\">{{dataItem.TinhTrangHienThi}}</span>\n    <span *ngIf=\"dataItem.TinhTrang == 4\" style=\"color: green;\">{{dataItem.TinhTrangHienThi}}</span>\n    <span *ngIf=\"dataItem.TinhTrang == 5\" style=\"color: Red;\">{{dataItem.TinhTrangHienThi}}</span>\n</ng-template>\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n<ng-template #soPhieuDuTruKhoIdTemplate let-dataItem>\n    <a (click)=\"xemChiTietDuTru(dataItem.Id, dataItem)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    <span>{{dataItem.NgayYeuCauHienThi}}</span>\n</ng-template>\n<ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n    <span>{{dataItem.NgayGiamDocDuyetHienThi}}</span>\n</ng-template>\n<ng-template #maTNTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem.TinhTrang)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n<ng-template #detailTemplate let-dataItem>\n\n    <app-grid baseRoute=\"\"  #grid2 [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyChildTotalPageForGridAsync\"\n        additionalSearchString=\"{{dataItem.Id}}-{{dataItem.TinhTrang}}\" [detailTemplate]=\"detailChildTemplate\"\n        [autoHeight]=\"true\">\n    </app-grid>\n</ng-template>\n<ng-template #NYCTemplate let-dataItem>\n    <span>{{dataItem.NgayYeuCauHienThi}}</span>\n</ng-template>\n<ng-template #NKDDTemplate let-dataItem>\n    <span>{{dataItem.NgayKhoaDuocDuyetHienThi}}</span>\n</ng-template>\n<ng-template #detailChildTemplate let-dataItem>\n    <app-grid baseRoute=\"\" *ngIf=\"dataItem.KhoaId != 0\" #gridChildChildChild\n        [gridColumns]=\"gridChildChildChildKhoaColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyChildChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyChildChildTotalPageForGridAsync\" [groups]=\"groupsChildChild\"\n        additionalSearchString=\"{{dataItem.KyDuTruTheoId}}-{{dataItem.KhoId}}-{{dataItem.KhoaId}}-{{dataItem.Id}}-{{dataItem.TinhTrang}}-{{dataItem.DuTruMuaDuocPhamKhoDuocId}}\"\n        [detailTemplate]=\"detailChildChildTemplate\" [autoHeight]=\"true\">\n    </app-grid>\n    <app-grid baseRoute=\"\" *ngIf=\"dataItem.KhoId != 0\" #gridChildChildChild\n        [gridColumns]=\"gridChildChildChildKhoColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyChildChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocDaXuLyChildChildTotalPageForGridAsync\" [groups]=\"groupsChildChild\"\n        additionalSearchString=\"{{dataItem.KyDuTruTheoId}}-{{dataItem.KhoId}}-{{dataItem.KhoaId}}-{{dataItem.Id}}-{{dataItem.TinhTrang}}-{{dataItem.DuTruMuaDuocPhamKhoDuocId}}\"\n         [autoHeight]=\"true\">\n    </app-grid>\n    <ng-template #detailChildChildTemplate let-dataItem>\n        <app-grid baseRoute=\"\" #gridChildChildChildChild [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\"\n            urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocChildDaXuLyChildChildChildForGridAsync\"\n            urlGetTotalPage=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocChildDaXuLyChildChildChildTotalPageForGridAsync\"\n            additionalSearchString=\"{{dataItem.DuocPhamId}}-{{dataItem.LoaiDuocPham}}-{{dataItem.KhoaPhongId}}-{{dataItem.TrangThai}}-{{dataItem.Id}}\">\n        </app-grid>\n    </ng-template>\n</ng-template>\n<ng-template #loaitemplate let-dataItem>\n    <span *ngIf=\"dataItem.Loai == 1\">BHYT</span>\n    <span *ngIf=\"dataItem.Loai != 1\">Không BHYT</span>\n</ng-template>\n\n\n<ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    {{rowIndex + 1}}\n</ng-template>\n<ng-template #tongTonKhoTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of khos\">\n                <td>{{item.TenKhoTong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\"  (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #hDChuaNhanTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of hdts\">\n                <td>{{item.TenHopDong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\"  (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n    <strong>{{value}}</strong>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.html":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.html ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nhập xuất',Path:''}\n            ,{Title:'Dược phẩm',Path:''}\n            ,{Title:'Dự trù mua',Path:''}\n            ,{Title:'THDT Mua Tại K.Dược​',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n            <div class=\"card overflow-auto -mt-15\" style=\"overflow: hidden;\">\n                <kendo-tabstrip (tabSelect)=\"chuyenDen('card1', $event)\">\n                   <!-- Chờ xử lý -->\n                    <kendo-tabstrip-tab [title]=\"'Chờ xử lý'\"  [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy\">\n                        <ng-template kendoTabContent >\n                            <div class=\"content-tab-popup\"  style=\"margin-top: -13px;\">\n                                <app-tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly >\n                                </app-tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly>\n                            </div>\n                        </ng-template>\n                    </kendo-tabstrip-tab>\n        \n                    <!-- Đã xử lý -->\n                    <kendo-tabstrip-tab [title]=\"'Đã gửi'\"   [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy\">\n                        <ng-template kendoTabContent>\n                            <div class=\"content-tab-popup\" style=\"margin-top: -13px;\">\n                               <app-tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly >\n                               </app-tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly>\n                            </div>\n                        </ng-template>\n                    </kendo-tabstrip-tab>\n        \n                    <!-- Từ chối -->\n                    <kendo-tabstrip-tab [title]=\"'Từ chối'\" [selected]=\"lstStatusSelectTabTHDTKhoa.selectedTabTuChoi\">\n                        <ng-template kendoTabContent>\n                            <div class=\"content-tab-popup\" style=\"margin-top: -13px;\">\n                                <app-tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi> \n                                </app-tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi>\n                            </div>\n                        </ng-template>\n                    </kendo-tabstrip-tab>\n                </kendo-tabstrip>\n            </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.html":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.html ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox id=\"soPhieu\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.SoPhieu\"\n        maxlength=\"50\" label=\"Số phiếu\" [validationerror]=\"'SoPhieu' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-textbox id=\"Khoa\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Khoa\"\n        bind=\"true\" label=\"Khoa\" class=\"item-no-padding\" [validationerror]=\"'Khoa' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-textbox id=\"nguoiYeuCau\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NguoitYeuCau\" bind=\"true\" label=\"Khoa\" class=\"item-no-padding\"\n        [validationerror]=\"'Khoa' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-datepicker id=\"NgayYeuCau\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.NgayYeuCau\"\n         label=\"Ngày yêu cầu\" [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n    <app-textbox id=\"NguoiDuyet\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NguoiDuyet\" bind=\"true\" label=\"NguoiDuyet\"\n        class=\"item-no-padding\" [validationerror]=\"'NguoiDuyet' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-datepicker id=\"NgayDuyet\" fxFlex=\"20%\" [required]=\"true\" [(model)]=\"nhapKhoChiTietMarketing.NgayDuyet\"\n        label=\"Ngày yêu cầu\" [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\"\n        [disabled]=\"isDisableTrangThai\">\n    </app-datepicker>\n    <app-textbox id=\"GiamDocDuyet\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.GiamDocDuyet\" bind=\"true\" label=\"Giám đốc duyệt\"\n        class=\"item-no-padding\" [validationerror]=\"'GiamDocDuyet' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-textbox id=\"NgayGiamDocDuyet\" fxFlex=\"20%\" [required]=\"true\"\n        [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NgayGiamDocDuyet\" bind=\"true\" label=\"Ngày giám đốc duyệt\"\n        class=\"item-no-padding\" [validationerror]=\"'NgayGiamDocDuyet' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <app-textbox id=\"GhiChu\" fxFlex=\"40%\" [required]=\"true\" [(model)]=\"thongTinDuTruMuaDuocPhamTaiKhoaDuoc.GhiChu\"\n        bind=\"true\" label=\"Ghi Chu\" class=\"item-no-padding\"\n        [validationerror]=\"'GhiChu' | validationerror:validationErrors\" [disabled]=\"isDisableTrangThai\">\n    </app-textbox>\n    <span fxFlex=\"100%\"><b>THÔNG TIN ChiTiet</b></span>\n    <app-grid baseRoute=\"\" [gridColumns]=\"gridChildColumns\" \n    [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n    [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n    urlGetData=\"YeuCauMuaDuocPham/GetDataDSYeuCauMuaDuocPhamChildForGridAsync\"\n    urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageYeuCauMuaDuocPhamChildForGridAsync\"\n    additionalSearchString=\"\"\n    [detailTemplate]=\"detailChildTemplate\"\n    [autoHeight]=\"true\" >\n    </app-grid>\n    <ng-template #detailChildTemplate let-dataItem>\n        <app-grid baseRoute=\"\" [gridColumns]=\"gridChildColumns\" \n            [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n            [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n            urlGetData=\"YeuCauMuaDuocPham/GetDataDSYeuCauMuaDuocPhamChildChildForGridAsync\"\n            urlGetTotalPage=\"YeuCauLinhDuocPham/GetTotalPageYeuCauMuaDuocPhamChildChildForGridAsync\"\n            additionalSearchString=\"\"\n            [detailTemplate]=\"detailChildTemplate\"\n            [autoHeight]=\"true\" >\n        </app-grid>\n    </ng-template>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.html":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-grid baseRoute=\"\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n        [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [headerTemplate]=\"headerTemplate\"\n        [checkboxAble]=\"false\" pageSize=\"50\"\n        [detailTemplate]=\"detailTemplate\"\n        [allowSortDefault]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDanhSachDuyetMuaDuTruTaiKhoaDuocTuChoiForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetTotalDanhSachDuyetMuaDuTruTaiKhoaDuocTuChoiForGridAsync\"\n        heightToolbar=\"205\">\n    </app-grid>\n<ng-template #headerTemplate>\n    <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n            type=\"search\" name=\"searchString\" [(ngModel)]=\"searchString\" (keyup)=\"onKey($event)\"\n            (ngModelChange)=\"clearSearch()\"\n            placeholder=\"Nhập từ khóa\" />\n    </div>\n    <span fxFlex=\"5px\"></span>\n    <app-daterangepicker style=\"margin-left: 5px;\" id=\"RangeNhap\" fxFlex=\"250px\" fxFlex.sm=\"auto\" [(model)]=\"tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap\" label=\"Yêu cầu từ ngày - đến ngày\" (modelChange)=\"changeNgayNhapRange()\" class=\"mt-1 on-header\">\n    </app-daterangepicker>\n   \n    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n    </button>\n    <span fxFlex=\"20%\"></span>\n    </div>\n</ng-template>\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    <span>{{dataItem.NgayYeuCauHienThi}}</span>\n</ng-template>\n<ng-template #ngayGiamDocDuyetTemplate let-dataItem>\n    <span>{{dataItem.NgayGiamDocDuyetHienThi}}</span>\n</ng-template>\n<ng-template #ngayTuChoiTemplate let-dataItem>\n    <span>{{dataItem.NgayTuChoiHienThi}}</span>\n</ng-template>\n<!-- <ng-template #maTNTemplate let-dataItem>\n    <a (click)=\"xemChiTiet(dataItem.Id, dataItem)\">{{dataItem.SoPhieu}}</a>\n</ng-template> -->\n<ng-template #detailTemplate let-dataItem>\n    <app-grid baseRoute=\"\" *ngIf= \"dataItem.KhoId != 0\" [gridColumns]=\"gridChildKhoColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n    urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiChildForGridAsync\"\n    urlGetTotalPage=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiToTalPageChildForGridAsync\"  \n    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.KhoId}}-{{dataItem.KhoaId}}\"  [groups]=\"groupsChildChild\"\n    [autoHeight]=\"true\" >\n</app-grid>\n<app-grid baseRoute=\"\" *ngIf= \"dataItem.KhoaId != 0\"[gridColumns]=\"gridChildKhoaColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n    urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiChildForGridAsync\"\n    urlGetTotalPage=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiToTalPageChildForGridAsync\"  \n    additionalSearchString=\"{{dataItem.Id}}-{{dataItem.KhoId}}-{{dataItem.KhoaId}}\"  [groups]=\"groupsChildChild\"  [groups]=\"groupsChildChild\" [detailTemplate]=\"detailChildTemplate\"\n    [autoHeight]=\"true\">\n</app-grid>\n</ng-template>\n<ng-template #NYCTemplate let-dataItem>\n    <span>{{dataItem.NgayYeuCauHienThi}}</span>\n</ng-template>\n<ng-template #NKDDTemplate let-dataItem>\n    <span>{{dataItem.NgayKhoaDuocDuyetHienThi}}</span>\n</ng-template>\n<ng-template #detailChildTemplate let-dataItem>\n    <app-grid baseRoute=\"\"  *ngIf=\"dataItem.LoaiKhoHayKhoa == true\" #gridChildChildChild\n        [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiChildChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiToTalPageChildChildForGridAsync\" \n        additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiKhoHayKhoa}}-{{dataItem.LoaiDuocPham}}\"\n         [autoHeight]=\"true\">\n    </app-grid>\n    <app-grid baseRoute=\"\" *ngIf=\"dataItem.LoaiKhoHayKhoa == false\" #gridChildChildChild\n        [gridColumns]=\"gridChildChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n        [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\"\n        urlGetData=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiChildChildForGridAsync\"\n        urlGetTotalPage=\"YeuCauMuaDuocPham/GetDataDuTruMuaDuocPhamTaiKhoaDuocTuChoiToTalPageChildChildForGridAsync\" \n        additionalSearchString=\"{{dataItem.Id}}-{{dataItem.LoaiKhoHayKhoa}}-{{dataItem.LoaiDuocPham}}\"\n        [autoHeight]=\"true\">\n    </app-grid>\n</ng-template>\n<ng-template #loaitemplate let-dataItem>\n    <span *ngIf=\"dataItem.Loai == 1\">BHYT</span>\n    <span *ngIf=\"dataItem.Loai != 1\">Không BHYT</span>\n</ng-template>\n\n\n<ng-template #sttTemplate let-dataItem let-rowIndex=\"rowIndex\">\n    {{rowIndex + 1}}\n</ng-template>\n<ng-template #tongTonKhoTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of khos\">\n                <td>{{item.TenKhoTong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.KhoTongTon | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.KhoTongTon != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\"  (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n<ng-template #hDChuaNhanTemplate let-dataItem>\n    <ng-template #templateInfo let-dataItem>\n        <table class=\"table table-border\" width=\"100%\">\n            <tr *ngFor=\"let item of hdts\">\n                <td>{{item.TenHopDong}}:</td>\n                <td>{{item.TongTon | number:'1.0':'vi-VN' }}</td>\n            </tr>\n        </table>\n    </ng-template>\n\n    <div class=\"kho-tong-ton-ng-template\" kendoTooltip>\n        <span class=\"kho-tong-ton-label\">{{dataItem.HDChuaNhap | number:'1.0':'vi-VN' }}</span>\n        <span *ngIf=\"dataItem.HDChuaNhap != 0\" class=\"kho-tong-ton-ng-template\" kendoTooltip #tooltip=\"kendoTooltip\" tooltipClass=\"tooltip-block\" position=\"left\" [tooltipTemplate]=\"templateInfo\" filter=\"*\">\n            <mat-icon [icIcon]=\"icInfo\" (mouseover)=\"TooltipCustom(dataItem)\" class=\"info\"></mat-icon>\n        </span>\n    </div>\n</ng-template>\n\n<ng-template #loaiNhomGroupHeaderTemplate let-value=\"value\" let-dataItem>\n   {{value}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.html":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.html ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n{Title:'Nhập xuất',Path:''}\n,{Title:'Dược phẩm',Path:''}\n,{Title:'Dự trù mua',Path:''}\n,{Title:'Tổng Hợp Dự Trù Mua Dược Phẩm Tại Khoa Dược​',Path:'/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc',Active:true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div [@stagger]=\"true\" class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div @fadeInUp class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Tổng Hợp Dự Trù Mua Dược Phẩm Tại Khoa Dược</h2>\n                <b\n                    class=\"status-yeu-cau-linh {{trangThai.DuocDuyet == null ? 'ycl-cho-duyet': trangThai.DuocDuyet == false ? 'ycl-tu-choi' : 'ycl-da-duyet'}}\">{{trangThai.TenTrangThai}}</b>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <!-- <app-tong-hop-du-tru-mua-tai-khoa-duoc-shared (trangThaiYeuCau)=\"getTrangThai($event)\">\n                </app-tong-hop-du-tru-mua-tai-khoa-duoc-shared> -->\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"8px\" class=\"form-footer\"> \n                    <!-- <span *ngIf=\"ishow === false\">\n                        <button type=\"button\" (click)=\"back()\" mat-button class=\"mr-1 align-right-fx\"><i class=\"ft-arrow-left\"></i> Quay\n                            lại</button>\n                    </span> -->\n                    <!-- <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img\n                            src=\"/assets/img/loader.gif\" alt=\"Loading\" /></button> -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>{{Title}}</div>\n    <button type=\"button\" mat-icon-button (click)=\"close(null)\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content>\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxFlex=\"100\" fxFlex.sm=\"100\" [innerHtml]=\"Message\"></div>\n    \n        <app-textarea id=\"lyDo\" [(model)]=\"lyDo\" fxFlex=\"100\" fxFlex.sm=\"100\" maxlength=\"1000\" label=\"Lý do\"\n            minHeight=\"20\">\n        </app-textarea>\n    </div>\n</mat-dialog-content>\n\n\n<mat-dialog-actions align=\"end\" class=\"mt-3\">\n    <button mat-button (click)=\"close(null)\">Không</button>\n    <button mat-button color=\"primary\" [disabled]=\"!lyDo\" (click)=\"close('ok')\">Có</button>\n</mat-dialog-actions>");

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

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.scss ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2R1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXNoYXJlZC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2NcXGR1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXNoYXJlZFxcZHV5ZXQtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZHV5ZXQtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkL2R1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXNoYXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy9kdXlldC1kdS10cnUtbXVhLWR1b2MtcGhhbS1zaGFyZWQvZHV5ZXQtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtoby10b25nLXRvbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmtoby10b25nLXRvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSIsIi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: DuyetDuTruMuaDuocPhamSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaDuocPhamSharedComponent", function() { return DuyetDuTruMuaDuocPhamSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");










let DuyetDuTruMuaDuocPhamSharedComponent = class DuyetDuTruMuaDuocPhamSharedComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.gridChildChildKhoColumns = [];
        this.gridChildChildKhoaColumns = [];
        this.khos = [];
        this.hdts = [];
        this.trangThaiDuyet = null;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.gridDataSource = {};
        this.gridChildDataSource = {};
        this.data = [];
        this.loaiKhoThuoc = true;
        this.KhoaId = 0;
        this.KhoId = 0;
        // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
        this.isDisableTrangThai = false;
        this.IdTrangThai = 0;
        this.groups = [{ field: 'Loai' }];
        this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__["TongHopDuTruMuaTaiKhoaDuoc"]();
        const id = this.route.snapshot.params.id;
        const loaiKhoThuoc = this.route.snapshot.params.khoThuocId;
        if (loaiKhoThuoc != undefined || loaiKhoThuoc != null) {
            if (loaiKhoThuoc == 5) {
                this.loaiKhoThuoc = true; // khoa
            }
            if (loaiKhoThuoc != 5) {
                this.loaiKhoThuoc = false; // kho
            }
        }
        if (id != undefined && loaiKhoThuoc != undefined) {
            this.getById(id);
        }
        this.gridChildColumns = [
            { Field: 'STT', Title: '#', Width: 40, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 50, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 50, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 50, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà SX', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước SX', Width: 50, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 80, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 80, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 80, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 80, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 80, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 100, Sortable: false, Template: this.SLDuTruKhoDuocDuyet },
        ];
        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 40, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 100, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'TenDuocPham', Title: 'Tên', MinWidth: 100, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà SX', Width: 100, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước SX', Width: 100, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.Khoa duyệt', Width: 100, Sortable: false, Template: this.sLDuTruKhoTDuocDuyet },
        ];
        this.gridChildChildKhoColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 150, Sortable: true },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true },
        ];
        this.gridChildChildKhoaColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 150, Sortable: true },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
        ];
    }
    TooltipCustom(duTruDetail) {
        this.khos = [...duTruDetail.TongTonList];
        this.hdts = [...duTruDetail.HopDongChuahapList];
    }
    getById(id) {
        this.isDisableTrangThai = true;
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuyet = true;
        this.apiService.post("YeuCauMuaDuocPham/GetDataUpdate?id=" + id + "&typeLoaiKho=" + this.loaiKhoThuoc)
            .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id = resultData.Id;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.SoPhieu = resultData.SoPhieu;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId = resultData.KhoaId;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Khoa = resultData.TenKhoa;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KyDuTru = resultData.KyDuTru;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NguoiYeuCauId = resultData.NguoiYeuCauId;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenNguoiYeuCau = resultData.TenNguoiYeuCau;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.NgayYeuCau = resultData.NgayYeuCau;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.GhiChu = resultData.GhiChu;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TenKho = resultData.TenKho;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThai = resultData.TrangThai;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.TrangThaiHienThi = resultData.TrangThaiHienThi;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId = resultData.KhoId;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuTru = resultData.TenLoaiDuTru;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuTruId = resultData.LoaiDuTruId;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi = resultData.LyDoTuChoi;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocList;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId = resultData.KhoaId;
                this.gridDataSource = {
                    data: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList,
                    total: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length
                };
                this.setDataGridView();
                this.dataItem.emit(this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc);
            }
        });
    }
    getSharedData() {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc;
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    setDataGridViewRefesh() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    modelChangeSoLuongDuyet(event, dataItem) {
        if (event != null) {
            let index = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(x => x.Id == dataItem.Id);
            let vitri = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
            if (index != -1) {
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruTKhoDuyet = event;
            }
        }
    }
    modelChangeSoLuongKDDuyet(event, dataItem) {
        if (event != null) {
            let index = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.findIndex(x => x.Id == dataItem.Id);
            let vitri = this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.indexOf(dataItem);
            if (index != -1) {
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList[vitri].SLDuTruKhoDuocDuyet = event;
            }
        }
    }
};
DuyetDuTruMuaDuocPhamSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridCreate', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], static: false })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "tongTonKhoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "hDChuaNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplateDuyet', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "tongTonKhoTemplateDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplateDuyet', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "hDChuaNhanTemplateDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTemplate', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "loaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sLDuTruKhoTDuocDuyet', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "sLDuTruKhoTDuocDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SLDuTruKhoDuocDuyet', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "SLDuTruKhoDuocDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "trangThaiYeuCau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DuyetDuTruMuaDuocPhamSharedComponent.prototype, "dataItem", void 0);
DuyetDuTruMuaDuocPhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-duyet-du-tru-mua-duoc-pham-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-du-tru-mua-duoc-pham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-du-tru-mua-duoc-pham-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.scss")).default]
    })
], DuyetDuTruMuaDuocPhamSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.scss":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.scss ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.color-button {\n  background-color: red;\n  color: white;\n}\n\n.trang-thai.t1 {\n  color: sandybrown;\n}\n\n.trang-thai.t2 {\n  color: #afb42b;\n}\n\n.trang-thai.t3 {\n  color: blue;\n}\n\n.trang-thai.t4 {\n  color: green;\n}\n\n.trang-thai.t5 {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2R1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXVwZGF0ZS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2NcXGR1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXVwZGF0ZVxcZHV5ZXQtZHUtdHJ1LW11YS1kdW9jLXBoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZHV5ZXQtZHUtdHJ1LW11YS1kdW9jLXBoYW0tdXBkYXRlL2R1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2R1eWV0LWR1LXRydS1tdWEtZHVvYy1waGFtLXVwZGF0ZS9kdXlldC1kdS10cnUtbXVhLWR1b2MtcGhhbS11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5hbGlnbi1yaWdodC1meCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uY29sb3ItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmFuZy10aGFpLnQxIHtcbiAgY29sb3I6IHNhbmR5YnJvd247XG59XG5cbi50cmFuZy10aGFpLnQyIHtcbiAgY29sb3I6ICNhZmI0MmI7XG59XG5cbi50cmFuZy10aGFpLnQzIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi50cmFuZy10aGFpLnQ0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4udHJhbmctdGhhaS50NSB7XG4gIGNvbG9yOiByZWQ7XG59IiwiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmNvbG9yLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJhbmctdGhhaS50MSB7XG4gIGNvbG9yOiBzYW5keWJyb3duO1xufVxuXG4udHJhbmctdGhhaS50MiB7XG4gIGNvbG9yOiAjYWZiNDJiO1xufVxuXG4udHJhbmctdGhhaS50MyB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4udHJhbmctdGhhaS50NCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnRyYW5nLXRoYWkudDUge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.ts":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.ts ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: DuyetDuTruMuaDuocPhamUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetDuTruMuaDuocPhamUpdateComponent", function() { return DuyetDuTruMuaDuocPhamUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tu-choi-duyet-popup/tu-choi-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.ts");
/* harmony import */ var _duyet_du_tru_mua_duoc_pham_shared_duyet_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
















let DuyetDuTruMuaDuocPhamUpdateComponent = class DuyetDuTruMuaDuocPhamUpdateComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.isShow = false;
        this.loading = false;
    }
    ngOnInit() {
        this.trangThai = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_4__["TrangThaiDuyet"]();
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_4__["TongHopDuTruMuaTaiKhoaDuoc"]();
    }
    huy() {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
    }
    tuChoi() {
        var self = this;
        self.validationErrors = [];
        self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = this.shared.thongTinDuTruMuaDuocPhamTaiKhoaDuoc;
        if (self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId != 0) {
            this.dialog.open(_tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_7__["TuChoiDuyetPopupComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
            }).afterClosed().subscribe(result => {
                if (result !== null) {
                    self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
                    self.apiService.post("YeuCauMuaDuocPham/TuChoiDanhSach", { id: self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id, loaiKho: 0, LyDoTuChoi: result })
                        .subscribe((resultData) => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                        self.back();
                    }, (err) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        if (self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId != 0) {
            this.dialog.open(_tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_7__["TuChoiDuyetPopupComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
            }).afterClosed().subscribe(result => {
                if (result !== null) {
                    self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LyDoTruongKhoaTuChoi = result;
                    self.apiService.post("YeuCauMuaDuocPham/TuChoiDanhSach", { id: self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id, loaiKho: 5, LyDoTuChoi: result })
                        .subscribe((resultData) => {
                        self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                        self.back();
                    }, (err) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
    }
    Duyet() {
        var self = this;
        self.validationErrors = [];
        self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = this.shared.thongTinDuTruMuaDuocPhamTaiKhoaDuoc;
        self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = [];
        if (self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.length != 0) {
            self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList.forEach(element => {
                let duTru = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_4__["DuTruMuaDuocPhamKhoDuocChiTietList"]();
                duTru.DuocPhamId = element.DuocPhamId;
                duTru.DuTruMuaDuocPhamId = self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id;
                duTru.DuTruMuaDuocPhamKhoDuocChiTietId = null;
                duTru.DuTruMuaDuocPhamTheoKhoaChiTietId = null;
                duTru.Id = element.Id;
                duTru.LaDuocPhamBHYT = element.Loai;
                duTru.NhomDieuTriDuPhong = element.NhomDieuTriDuPhong;
                duTru.SoLuongDuKienSuDung = element.SLDuKienSuDungTrongKho;
                duTru.SoLuongDuTru = element.SLDuTru,
                    duTru.SoLuongDuTruTruongKhoaDuyet = element.SLDuTruTKhoDuyet;
                duTru.SoLuongDuTruKhoDuocDuyet = element.SLDuTruKhoDuocDuyet;
                duTru.DuTruMuaDuocPhamTheoKhoaId = element.DuTruMuaDuocPhamTheoKhoaId;
                self.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet.push(duTru);
            });
        }
        if (this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId != 0) {
            this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuyet = true;
        }
        if (this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId != 0) {
            this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.LoaiDuyet = false;
        }
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                self.apiService.post("YeuCauMuaDuocPham/DuyetDanhSach", this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc)
                    .subscribe((resultData) => {
                    self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                    self.back();
                }, (err) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
    huyDuyet() {
        if (this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId != 0) {
            var self = this;
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post("YeuCauMuaDuocPham/HuyDuyet", { id: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id, loaiKho: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoId })
                        .subscribe((resultData) => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Hủy duyệt"]));
                        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
                    }, (err) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        if (this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.KhoaId != 0) {
            var self = this;
            self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    self.apiService.post("YeuCauMuaDuocPham/HuyDuyet", { id: this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc.Id, loaiKho: 5 })
                        .subscribe((resultData) => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_13__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_14__["SystemMessage"].ActionSuccessfully, ["Hủy duyệt"]));
                        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
                    }, (err) => {
                        if (err.Message != "Validation Failed") {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
    }
    back() {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
    }
    getTrangThaiYeuCau(event) {
        if (event != undefined && event != null) {
            this.trangThai = event;
            if (this.trangThai.DuocDuyet == true) {
                this.isShow = false;
            }
            else if (this.trangThai.DuocDuyet == false) {
                this.isShow = false;
            }
            else {
                this.isShow = true;
            }
        }
    }
    getDataItem(event) {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = event;
    }
};
DuyetDuTruMuaDuocPhamUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_duyet_du_tru_mua_duoc_pham_shared_duyet_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_8__["DuyetDuTruMuaDuocPhamSharedComponent"], { static: true })
], DuyetDuTruMuaDuocPhamUpdateComponent.prototype, "shared", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"], { static: true })
], DuyetDuTruMuaDuocPhamUpdateComponent.prototype, "gridChild", void 0);
DuyetDuTruMuaDuocPhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-duyet-du-tru-mua-duoc-pham-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-du-tru-mua-duoc-pham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-du-tru-mua-duoc-pham-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.scss")).default]
    })
], DuyetDuTruMuaDuocPhamUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/enums-loai-kho-du-tru.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/enums-loai-kho-du-tru.ts ***!
  \*************************************************************************************************************/
/*! exports provided: EnumLoaiKhoDuTru */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumLoaiKhoDuTru", function() { return EnumLoaiKhoDuTru; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EnumLoaiKhoDuTru;
(function (EnumLoaiKhoDuTru) {
    EnumLoaiKhoDuTru[EnumLoaiKhoDuTru["Khole"] = 1] = "Khole";
    EnumLoaiKhoDuTru[EnumLoaiKhoDuTru["khoKhac"] = 2] = "khoKhac";
})(EnumLoaiKhoDuTru || (EnumLoaiKhoDuTru = {}));


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWR1b2MtcGhhbS1zaGFyZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jXFxnb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkXFxnb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEtZHVvYy1waGFtLXNoYXJlZC9nb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy9nb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tc2hhcmVkL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWR1b2MtcGhhbS1zaGFyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueGFjLW5oYW4tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSIsIi54YWMtbmhhbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: GoiGiamDocDuTruMuaDuocPhamSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiGiamDocDuTruMuaDuocPhamSharedComponent", function() { return GoiGiamDocDuTruMuaDuocPhamSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-info */ "./node_modules/@iconify/icons-ic/twotone-info.js");
/* harmony import */ var _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");










let GoiGiamDocDuTruMuaDuocPhamSharedComponent = class GoiGiamDocDuTruMuaDuocPhamSharedComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.gridChildChildColumns = [];
        this.trangThaiDuyet = null;
        this.icInfo = _iconify_icons_ic_twotone_info__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.gridDataSource = {};
        this.gridChildDataSource = {};
        this.data = [];
        this.loaiKhoThuoc = true;
        this.KhoaId = 0;
        this.KhoId = 0;
        // TrangThai : number ;
        // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
        this.isDisableTrangThai = false;
        this.show = true;
        this.IdTrangThai = 0;
        this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tinhTrangView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groups = [{ field: 'Loai' }];
        this.groupNhoms = [{
                field: 'Khoa', aggregates: [
                    { field: 'SLDuTru', aggregate: 'sum' },
                    { field: 'SLDuKienTrongKy', aggregate: 'sum' }
                ]
            }];
    }
    ngOnInit() {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__["DuTruMuaTaiKhoaDuocGoi"]();
        const id = this.route.snapshot.params.id;
        const tinhTrang = this.route.snapshot.params.tinhTrang;
        if (tinhTrang != undefined && tinhTrang != null) {
            // view
            this.tinhTrangView.emit(tinhTrang);
            this.getByIdView(id, tinhTrang);
        }
        if (id != undefined || id != null && tinhTrang == undefined) {
            this.getById(id);
        }
        this.gridColumns = [
            { Field: 'STT', Title: '#', Width: 40, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 100, ShowTooltip: true, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'TenDuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 60, ShowTooltip: true, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 50, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà SX', Width: 100, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước SX', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'SLDuTruTKhoDuyet', Title: 'T.Khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKhoDuocDuyet', Title: 'K.dược duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildColumns = [
            { Field: "Khoa", Title: "Khoa", Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: 'STT', Title: '#', Width: 30, Sortable: false, Template: this.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 80, Sortable: true },
            { Field: 'Kho', Title: 'Kho', minWidth: 100, Sortable: true },
            //{ Field: 'KyDuTru', Title: 'Kỹ dự trù', Width: 70, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true, TemplateGroupFooter: this.soLuongDuTruHeaderTemplate },
            { Field: 'SLDuKienTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: true, TemplateGroupFooter: this.soLuongDuKienHeaderTemplate },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm Đ.Trị/ D.Phòng', Width: 100, Sortable: false }
        ];
    }
    getById(id) {
        this.isDisableTrangThai = true;
        this.apiService.post("YeuCauMuaDuocPham/GetDataGoiDuyetDuTruMuaDuocPham?idKyDuTru=" + id)
            .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = resultData;
                this.gridDataSource = {
                    data: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList,
                    total: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.length
                };
                this.setDataGridView();
                this.dataItem.emit(this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi);
            }
        });
    }
    getDataSourceChild(parentItem) {
        return {
            data: parentItem.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild,
            total: parentItem.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild.length
        };
    }
    getByIdView(id, tinhTrang) {
        this.isDisableTrangThai = true;
        this.apiService.post("YeuCauMuaDuocPham/GetDataGoiDuyetDuTruMuaDuocPhamView?idKyDuTru=" + id + "&tinhTrang=" + tinhTrang)
            .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = resultData;
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.LyDoTuChoi = resultData.LyDoTuChoi;
                this.gridDataSource = {
                    data: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList,
                    total: resultData.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.length
                };
                this.setDataGridView();
                this.dataItem.emit(this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi);
            }
        });
    }
    setDataGridView() {
        this.gridChild.gridDataSource = this.gridDataSource;
        if (this.gridChild !== undefined)
            this.gridChild.setDataSource();
    }
    getSharedData() {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi;
    }
};
GoiGiamDocDuTruMuaDuocPhamSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('grid', { read: src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"], static: false })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "tongTonKhoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "hDChuaNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplateDuyet', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "tongTonKhoTemplateDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplateDuyet', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "hDChuaNhanTemplateDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "loaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sLDuTruKhoTDuocDuyet', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "sLDuTruKhoTDuocDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('SLDuTruKhoDuocDuyet', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "SLDuTruKhoDuocDuyet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "trangThaiYeuCau", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "tinhTrangView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "dataItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruHeaderTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "soLuongDuTruHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienHeaderTemplate', { static: true })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent.prototype, "soLuongDuKienHeaderTemplate", void 0);
GoiGiamDocDuTruMuaDuocPhamSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goi-giam-doc-du-tru-mua-duoc-pham-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-giam-doc-du-tru-mua-duoc-pham-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-giam-doc-du-tru-mua-duoc-pham-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.scss")).default]
    })
], GoiGiamDocDuTruMuaDuocPhamSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-footer {\n  margin-top: 1.34375em;\n}\n\n.align-right-fx {\n  margin-left: auto;\n}\n\n.color-button {\n  background-color: red;\n  color: white;\n}\n\n.trang-thai.t1 {\n  color: sandybrown;\n}\n\n.trang-thai.t2 {\n  color: #afb42b;\n}\n\n.trang-thai.t3 {\n  color: blue;\n}\n\n.trang-thai.t4 {\n  color: green;\n}\n\n.trang-thai.t5 {\n  color: red;\n}\n\n.trang-thai.t6 {\n  color: red;\n}\n\n.trang-thai.t7 {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL2dvaS1naWFtLWRvYy1kdS10cnUtbXVhLWR1b2MtcGhhbS11cGRhdGUvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jXFxnb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tdXBkYXRlXFxnb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEtZHVvYy1waGFtLXVwZGF0ZS9nb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvZ29pLWdpYW0tZG9jLWR1LXRydS1tdWEtZHVvYy1waGFtLXVwZGF0ZS9nb2ktZ2lhbS1kb2MtZHUtdHJ1LW11YS1kdW9jLXBoYW0tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMS4zNDM3NWVtO1xufVxuXG4uYWxpZ24tcmlnaHQtZngge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmNvbG9yLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHJhbmctdGhhaS50MSB7XG4gIGNvbG9yOiBzYW5keWJyb3duO1xufVxuXG4udHJhbmctdGhhaS50MiB7XG4gIGNvbG9yOiAjYWZiNDJiO1xufVxuXG4udHJhbmctdGhhaS50MyB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4udHJhbmctdGhhaS50NCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnRyYW5nLXRoYWkudDUge1xuICBjb2xvcjogcmVkO1xufVxuXG4udHJhbmctdGhhaS50NiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50cmFuZy10aGFpLnQ3IHtcbiAgY29sb3I6IGdyZWVuO1xufSIsIi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuLmFsaWduLXJpZ2h0LWZ4IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5jb2xvci1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyYW5nLXRoYWkudDEge1xuICBjb2xvcjogc2FuZHlicm93bjtcbn1cblxuLnRyYW5nLXRoYWkudDIge1xuICBjb2xvcjogI2FmYjQyYjtcbn1cblxuLnRyYW5nLXRoYWkudDMge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnRyYW5nLXRoYWkudDQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi50cmFuZy10aGFpLnQ1IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRyYW5nLXRoYWkudDYge1xuICBjb2xvcjogcmVkO1xufVxuXG4udHJhbmctdGhhaS50NyB7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: GoiGiamDocDuTruMuaDuocPhamUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoiGiamDocDuTruMuaDuocPhamUpdateComponent", function() { return GoiGiamDocDuTruMuaDuocPhamUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _goi_giam_doc_du_tru_mua_duoc_pham_shared_goi_giam_doc_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _phieu_mua_tru_tai_khoa_duoc_phieu_mua_tru_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.ts");


















let GoiGiamDocDuTruMuaDuocPhamUpdateComponent = class GoiGiamDocDuTruMuaDuocPhamUpdateComponent {
    constructor(authService, dialog, notificationService, apiService, router, route, ref) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.ref = ref;
        this.isShow = false;
        this.tinhTrangView = true;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
        this.duTruMuaDuocPhamTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_10__["DuTruMuaDuocPhamTaiKhoaDuoc"]();
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_10__["DuTruMuaTaiKhoaDuocGoi"]();
    }
    huy() {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
    }
    tinhTrangVieww(event) {
        if (event != null) {
            this.tinhTrangView = false;
        }
    }
    goi() {
        var self = this;
        self.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = this.shared.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi;
        this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamId = [];
        this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamTheoKhoaId = [];
        if (this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi != undefined && this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi != null) {
            this.duTruMuaDuocPhamTaiKhoaDuoc.NhanVienYeuCauId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.NguoiYeuCauId;
            this.duTruMuaDuocPhamTaiKhoaDuoc.KyDuTruMuaDuocPhamVatTuId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.KyDuTruId;
            this.duTruMuaDuocPhamTaiKhoaDuoc.TuNgay = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.TuNgay;
            this.duTruMuaDuocPhamTaiKhoaDuoc.DenNgay = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.DenNgay;
            this.duTruMuaDuocPhamTaiKhoaDuoc.NgayYeuCau = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.NgayYeuCau;
            this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.ListDuTruDuocPhamId;
            this.duTruMuaDuocPhamTaiKhoaDuoc.ListDuTruDuocPhamTheoKhoaId = this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.ListDuTruDuocPhamTheoKhoaId;
            this.duTruMuaDuocPhamTaiKhoaDuoc.DuTruMuaDuocPhamKhoDuocChiTiet = [];
            if (this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != undefined && this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList != null) {
                this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList.forEach(item => {
                    let data = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_10__["DuTruMuaDuocPhamKhoDuocChiTiets"]();
                    data.DuocPhamId = item.DuocPhamId;
                    data.LaDuocPhamBHYT = item.Loai,
                        data.SoLuongDuTru = item.SLDuTru,
                        data.SoLuongDuKienSuDung = item.SLDuKienSuDungTrongKho;
                    data.SoLuongDuTruKhoDuocDuyet = item.SLDuTruKhoDuocDuyet;
                    data.SoLuongDuTruTruongKhoaDuyet = item.SLDuTruTKhoDuyet;
                    // if(data.DuTruMuaDuocPhamKhoDu)
                    this.duTruMuaDuocPhamTaiKhoaDuoc.DuTruMuaDuocPhamKhoDuocChiTiet.push(data);
                });
            }
        }
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
            self.dialog.open(_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_component__WEBPACK_IMPORTED_MODULE_13__["GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent"], {
                disableClose: false,
                width: "500px",
                data: {
                    Title: "Xác nhận",
                    Message: "Bạn có chắc chắn muốn gởi duyệt phiếu dự trù này không ?",
                },
            }).afterClosed().subscribe((res) => {
                if (res == "Yes") {
                    self.apiService.post("YeuCauMuaDuocPham/GuiDuTruMuaDuocPhamTaiKhoaDuoc", self.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi)
                        .subscribe((resultData) => {
                        if (resultData != undefined && resultData != null) {
                            self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                            this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
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
                else if (res == "YesAndPrint") {
                    self.validationErrors = [];
                    self.ref.detectChanges();
                    if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_12__["SecurityOperation"].Update)) {
                        self.savingPage();
                        self.apiService.post("YeuCauMuaDuocPham/GuiDuTruMuaDuocPhamTaiKhoaDuoc", self.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi).subscribe((resultData) => {
                            if (resultData != undefined && resultData != null) {
                                self.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_14__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                                self.closePopupSavingData();
                                self.dialog.open(_phieu_mua_tru_tai_khoa_duoc_phieu_mua_tru_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_17__["PhieuMuaTruTaiKhoaDuocComponent"], {
                                    disableClose: false,
                                    width: '1200px',
                                    data: { Id: resultData },
                                }).afterClosed().subscribe(() => {
                                    self.router.navigate(['/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc']);
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
                    }
                }
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_15__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    closePopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    getDataItem(event) {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuocGoi = event;
    }
};
GoiGiamDocDuTruMuaDuocPhamUpdateComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_goi_giam_doc_du_tru_mua_duoc_pham_shared_goi_giam_doc_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_9__["GoiGiamDocDuTruMuaDuocPhamSharedComponent"], { static: true })
], GoiGiamDocDuTruMuaDuocPhamUpdateComponent.prototype, "shared", void 0);
GoiGiamDocDuTruMuaDuocPhamUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goi-giam-doc-du-tru-mua-duoc-pham-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goi-giam-doc-du-tru-mua-duoc-pham-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goi-giam-doc-du-tru-mua-duoc-pham-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.scss")).default]
    })
], GoiGiamDocDuTruMuaDuocPhamUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy9ndWktdG9uZy1ob3AtZHUtdHJ1LW11YS10aHVvYy10YWkta2hvYS1kdW9jLWNvbmZpcm0vZ3VpLXRvbmctaG9wLWR1LXRydS1tdWEtdGh1b2MtdGFpLWtob2EtZHVvYy1jb25maXJtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.ts":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.ts ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent", function() { return GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);




let GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent = class GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent {
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
GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-iframe {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  background: #ebeced;\n}\n\n.container-iframe iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.container-iframe iframe .pagebreak {\n  border-bottom: 2px dashed #000;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUtdGFpLWtob2EtZHVvYy9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2NcXHBoaWV1LW11YS10cnUtdGFpLWtob2EtZHVvY1xccGhpZXUtbXVhLXRydS10YWkta2hvYS1kdW9jLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvcGhpZXUtbXVhLXRydS10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUtdGFpLWtob2EtZHVvYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvcGhpZXUtbXVhLXRydS10YWkta2hvYS1kdW9jL3BoaWV1LW11YS10cnUtdGFpLWtob2EtZHVvYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSIsIi5jb250YWluZXItaWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZDogI2ViZWNlZDtcbn1cblxuLmNvbnRhaW5lci1pZnJhbWUgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXItaWZyYW1lIGlmcmFtZSAucGFnZWJyZWFrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: PhieuMuaTruTaiKhoaDuocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuMuaTruTaiKhoaDuocComponent", function() { return PhieuMuaTruTaiKhoaDuocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");







let PhieuMuaTruTaiKhoaDuocComponent = class PhieuMuaTruTaiKhoaDuocComponent {
    constructor(dialogRef, apiService, notificationService, data, ref) {
        this.dialogRef = dialogRef;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.data = data;
        this.ref = ref;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.inPhieuDuocPham = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_6__["PhieuInDuTruMuaTaiKhoaDuoc"]();
        this.src = "";
        this.dataHTML = "";
    }
    ngOnInit() {
        console.log(this.data);
        this.xem();
    }
    xem() {
        var self = this;
        self.validationErrors = [];
        self.ref.detectChanges();
        self.inPhieuDuocPham.DuTruMuaDuocPhamTheoKhoaId = self.data.Id;
        self.inPhieuDuocPham.Header = true;
        self.apiService.post("YeuCauMuaDuocPham/InPhieuDuTruMuaTaiKhoaDuoc", self.inPhieuDuocPham).subscribe(resData => {
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
        var template = this.dataHTML.replace("<p style='background: #005dab;color:#fff; height:40px; font-size:30px;text-align:center'>" +
            "<th>PHIẾU TỔNG HỢP DỰ TRÙ THUỐC,VÁC XIN,HÓA CHẤT XÉT NGHIỆM</th>" +
            "</p>", "");
        return new Promise(resolve => {
            resolve(template);
            this.close();
        });
    }
    close() {
        this.dialogRef.close();
    }
};
PhieuMuaTruTaiKhoaDuocComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
PhieuMuaTruTaiKhoaDuocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phieu-mua-tru-tai-khoa-duoc',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./phieu-mua-tru-tai-khoa-duoc.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./phieu-mua-tru-tai-khoa-duoc.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], PhieuMuaTruTaiKhoaDuocComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1jaG8teHUtbHkvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MtY2hvLXh1LWx5XFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MtY2hvLXh1LWx5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLWNoby14dS1seS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MtY2hvLXh1LWx5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1jaG8teHUtbHkvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLWNoby14dS1seS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.ts ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent", function() { return TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");
/* harmony import */ var _enums_loai_kho_du_tru__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../enums-loai-kho-du-tru */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/enums-loai-kho-du-tru.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../tu-choi-duyet-popup/tu-choi-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.ts");






























let TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent = class TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.tongHopDuTruTuaTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_26__["TongHopDuTruMuaTaiKhoaDuoc"]();
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_28___default.a;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.khoGridChildColumns = [];
        this.gridChildChildColumns = [];
        this.khos = [];
        this.hdts = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.baseRoute = "/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc";
        this.groups = [{ field: 'Nhom' }];
        this.totalTrangThaiChoDuyet = 0;
        this.totalTrangThaiChoGoi = 0;
        this.listItemDuTruMuaDuocPhamChTiet = [];
        this.gridDataSource = {};
        this.data = [];
        this.holdQuery = null;
        this.query = null;
        this.additionalSearchString = null;
        this.groupTrangThais = [{
                field: 'TrangThai', dir: null, aggregates: [
                    { field: 'TrangThai', aggregate: 'count' },
                ]
            }];
        this.groupsChildChild = [{ field: 'Loai' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
        this.tongHopDuTruTuaTaiKhoaDuocSearch = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_26__["TongHopDuTruTuaTaiKhoaDuocSearch"]();
        this.duTruMuaDuocPhamKhoDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_26__["DuTruMuaDuocPhamKhoDuoc"]();
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuoc') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].getItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuoc');
            this.tongHopDuTruTuaTaiKhoaDuocSearch = JSON.parse(this.additionalSearchString);
            if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet != null) {
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate != null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate;
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate;
                }
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate == null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate;
                }
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate == null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate != null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate;
                }
            }
            if (this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString != null) {
                this.searchString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
            }
            this.query = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
            this.gridChild._additionalSearchString = this.query;
            if (this.searchString != null) {
                this.gridChild.searchString = this.searchString;
            }
            this.gridChild.search();
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuoc', null);
            this.additionalSearchString = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
            if (this.searchString != null) {
                this.gridChild.searchString = this.searchString;
            }
            this.gridChild.search();
        }
        // TemplateGroupHeader: this.nhomDichVuTemplate
        this.gridColumns = [
            { Field: "TrangThai", Title: "", Width: 80, Sortable: false, Hidden: true, TemplateGroupHeader: this.tenNhomGroupHeaderTemplate },
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'KhoaKhoa', Title: 'Khoa/Kho', MinWidth: 120, Sortable: true },
            { Field: 'KyDuTru', Title: 'Kỳ Dự trù', Width: 180, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'NgayKhoaDuocDuyet', Title: 'Ngày K.Dược duyệt', Width: 150, Sortable: true, Template: this.ngayKhoaDuocDuyetTemplate },
            // { Field: 'NgayGiamDocDuyet', Title: 'Ngày giám đốc duyệt', minWidth: 200, Sortable: true, Template: this.ngayGiamDocDuyetTemplate },
            { Field: '', Title: '', HideFilter: true, Width: 200, Template: this.actionTemplate }
        ];
        this.gridChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            // { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKDuocDuyet', Title: 'K.dược duyệt', minWidth: 100, Sortable: false },
        ];
        this.khoGridChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false }
        ];
        this.gridChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 200, Sortable: false },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
            //{ Field: 'KyDuTru', Title: 'Kỹ dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
        ];
    }
    TooltipCustom(duTruDetail) {
        this.khos = [...duTruDetail.TongTonList];
        this.hdts = [...duTruDetail.HopDongChuahapList];
    }
    theFirstValueFormat(str) {
        let strGroup = str.split('-');
        if (strGroup.length != 0) {
            return strGroup[0];
        }
    }
    theFirstValueFormatChuKy(str) {
        let strGroup = str.split('-');
        if (strGroup.length != 0) {
            return strGroup[1] + '-' + strGroup[2];
        }
    }
    theFirstValueKyDuTruMuaDuocPhamVatTuId(str) {
        let strGroup = str.split('-');
        if (strGroup.length != 0) {
            return strGroup[3];
        }
    }
    xemChiTietDuTruMuaDuocPhamTaiKhoDuoc(id, dataItem, TrangThaiDuTru) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            if (_enums_loai_kho_du_tru__WEBPACK_IMPORTED_MODULE_27__["EnumLoaiKhoDuTru"].Khole == dataItem) {
                this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/duyet/' + id + '/' + dataItem + '/' + TrangThaiDuTru + '?holdQuery=true');
            }
            else {
                this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/duyet/' + id + '/' + dataItem + '/' + TrangThaiDuTru + '?holdQuery=true');
            }
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    CheckboxChange($event, dangChoDuyet = false, tuChoiDuyet = false, daDuyet = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc?holdQuery=true');
        if (dangChoDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.ChoDuyet = $event;
        }
        else if (tuChoiDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.ChoGoi = $event;
        }
        this.Timkiem();
    }
    onKey(event) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }
    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString !== "") {
            QueryString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
        }
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
        const tongHopDuTruTuaTaiKhoaDuocSearchClone = JSON.parse(JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch));
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate != null) {
            const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0));
        }
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate != null) {
            const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 0, 0));
        }
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate != null) {
            const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate = new Date(startDate);
        }
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate != null) {
            const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate = new Date(endDate);
        }
        if (this.searchString != undefined && this.searchString != "" && this.searchString != null) {
            tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString = this.searchString;
        }
        else {
            tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString = '';
        }
        this.query = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);
        const queryForHole = JSON.parse(JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone));
        if (queryForHole.RangeNhap != null) {
            if (queryForHole.RangeNhap.startDate != null) {
                queryForHole.RangeNhap.startDate = new Date(queryForHole.RangeNhap.startDate);
            }
            if (queryForHole.RangeNhap.endDate != null) {
                queryForHole.RangeNhap.endDate = new Date(queryForHole.RangeNhap.endDate);
            }
        }
        if (queryForHole.RangeDuyet != null) {
            if (queryForHole.RangeDuyet.startDate != null) {
                queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
            }
            if (queryForHole.RangeDuyet.endDate != null) {
                queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
            }
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_25__["LocalStorageHelper"].setItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuoc', JSON.stringify(queryForHole));
        this.gridChild._additionalSearchString = this.query;
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }
    clearSearch() {
        if (this.searchString == "") {
            this.gridChild.searchString = "";
            this.Timkiem();
        }
    }
    changeNgayNhapRange() {
        this.Timkiem();
    }
    changeNgayDuyetRange(range) {
        this.Timkiem();
    }
    TuChoi(Id, KhoId) {
        var self = this;
        self.duTruMuaDuocPhamKhoDuoc.Id = Id;
        if (KhoId === 5) {
            if (self.duTruMuaDuocPhamKhoDuoc.Id != undefined && self.duTruMuaDuocPhamKhoDuoc.Id != null) {
                self.listItemDuTruMuaDuocPhamChTiet = [];
                self.apiService.post("YeuCauMuaDuocPham/GetListDuTruMuaKhoaChiTiet?muaDuTruDuocPhamId=" + Id)
                    .subscribe((resultData) => {
                    resultData.forEach(element => {
                        self.listItemDuTruMuaDuocPhamChTiet.push(element);
                    });
                    if (resultData != undefined || resultData != undefined) {
                        self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                        self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = true;
                        self.dialog.open(_tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_29__["TuChoiDuyetPopupComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
                        }).afterClosed().subscribe(result => {
                            if (result != null) {
                                self.duTruMuaDuocPhamKhoDuoc.LyDoTruongKhoaTuChoi = result;
                                self.apiService.post("YeuCauMuaDuocPham/TuChoi", self.duTruMuaDuocPhamKhoDuoc)
                                    .subscribe((resultData) => {
                                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                                    this.gridChild.search();
                                }, (err) => {
                                    if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                }, (err) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }
        if (KhoId !== 5) {
            if (self.duTruMuaDuocPhamKhoDuoc.Id != undefined && self.duTruMuaDuocPhamKhoDuoc.Id != null) {
                self.listItemDuTruMuaDuocPhamChTiet = [];
                self.apiService.post("YeuCauMuaDuocPham/GetListDuTruMuaChiTiet?muaDuTruDuocPhamId=" + Id)
                    .subscribe((resultData) => {
                    resultData.forEach(element => {
                        self.listItemDuTruMuaDuocPhamChTiet.push(element);
                    });
                    if (resultData != undefined || resultData != undefined) {
                        self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                        self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = false;
                        self.dialog.open(_tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_29__["TuChoiDuyetPopupComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc muốn từ chối phiếu dụ trù này không?" }
                        }).afterClosed().subscribe(result => {
                            if (result != null) {
                                self.duTruMuaDuocPhamKhoDuoc.LyDoTruongKhoaTuChoi = result;
                                self.apiService.post("YeuCauMuaDuocPham/TuChoi", self.duTruMuaDuocPhamKhoDuoc)
                                    .subscribe((resultData) => {
                                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Từ chối"]));
                                    this.gridChild.search();
                                }, (err) => {
                                    if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                }, (err) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }
    }
    duyet(Id, khoId) {
        var self = this;
        self.duTruMuaDuocPhamKhoDuoc.Id = Id;
        if (self.duTruMuaDuocPhamKhoDuoc.Id != undefined && self.duTruMuaDuocPhamKhoDuoc.Id != null) {
            self.listItemDuTruMuaDuocPhamChTiet = [];
            if (khoId === 5) {
                self.apiService.post("YeuCauMuaDuocPham/GetListDuTruMuaKhoaChiTiet?muaDuTruDuocPhamId=" + Id)
                    .subscribe((resultData) => {
                    resultData.forEach(element => {
                        self.listItemDuTruMuaDuocPhamChTiet.push(element);
                    });
                    if (resultData != undefined || resultData != undefined) {
                        self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                        self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = true;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
                        }).afterClosed().subscribe(result => {
                            if (result === 'Yes') {
                                self.apiService.post("YeuCauMuaDuocPham/Duyet", self.duTruMuaDuocPhamKhoDuoc)
                                    .subscribe((resultData) => {
                                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                    this.gridChild.search();
                                }, (err) => {
                                    if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                }, (err) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
            if (khoId !== 5) {
                self.apiService.post("YeuCauMuaDuocPham/GetListDuTruMuaChiTiet?muaDuTruDuocPhamId=" + Id)
                    .subscribe((resultData) => {
                    resultData.forEach(element => {
                        self.listItemDuTruMuaDuocPhamChTiet.push(element);
                    });
                    if (resultData != undefined || resultData != undefined) {
                        self.duTruMuaDuocPhamKhoDuoc.ListDuTruMuaDuocPhamKhoDuocChiTiet = self.listItemDuTruMuaDuocPhamChTiet;
                        self.duTruMuaDuocPhamKhoDuoc.LoaiDuyet = false;
                        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                            disableClose: false,
                            width: '400px',
                            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn duyệt phiếu dự trù này không?" }
                        }).afterClosed().subscribe(result => {
                            if (result === 'Yes') {
                                self.apiService.post("YeuCauMuaDuocPham/Duyet", self.duTruMuaDuocPhamKhoDuoc)
                                    .subscribe((resultData) => {
                                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Duyệt"]));
                                    this.gridChild.search();
                                }, (err) => {
                                    if (err.Message != "Validation Failed") {
                                        this.notificationService.showError(err.Message);
                                    }
                                });
                            }
                        });
                    }
                }, (err) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }
    }
    HuyDuyet(dataItem, khoId) {
        var self = this;
        self.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn hủy duyệt phiếu dự trù này không?" }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                self.apiService.post("YeuCauMuaDuocPham/HuyDuyet", { id: dataItem.Id, loaiKho: dataItem.KhoId })
                    .subscribe((resultData) => {
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_12__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].ActionSuccessfully, ["Hủy duyệt"]));
                    this.gridChild.search();
                }, (err) => {
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        });
    }
    GoiGiamDocDuyet(value) {
        var self = this;
        console.log("value", value);
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            this.router.navigate(["/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/gui/" + value]);
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
        // var self = this;
        // self.dialog.open(ConfirmComponent, {
        //     disableClose: false,
        //     width: '400px',
        //     data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn gửi duyệt dự trù này không?" }
        //   }).afterClosed().subscribe(result => {
        //     if (result === 'Yes') {
        //     self.apiService.post("YeuCauMuaDuocPham/GoiGiamDoc",self.duTruMuaDuocPhamKhoDuoc)
        //       .subscribe((resultData) => {
        //         this.notificationService.showSuccess(CommonService.format(SystemMessage.ActionSuccessfully, ["Duyệt thành công "]));
        //         this.gridChild.search();
        //       },
        //         (err: ApiError) => {
        //           if (err.Message != "Validation Failed") {
        //             this.notificationService.showError(err.Message);
        //           }
        //         });
        //     }});
    }
};
TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "trangThaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "headerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "ngayNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayKhoaDuocDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "ngayKhoaDuocDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "tongTonKhoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "hDChuaNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("gridChoXuLy", { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], { static: false })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent.prototype, "confirm", void 0);
TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.scss")).default]
    })
], TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.scss ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".xac-nhan-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1kYS14dS1seS9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXG5oYXAteHVhdFxcZHVvYy1waGFtXFx0b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2NcXHRvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1kYS14dS1seVxcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLWRhLXh1LWx5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLWRhLXh1LWx5L3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1kYS14dS1seS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLWRhLXh1LWx5L3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1kYS14dS1seS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54YWMtbmhhbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59IiwiLnhhYy1uaGFuLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.ts":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.ts ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent", function() { return TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





























let TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent = class TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent {
    constructor(authService, dialog, notificationService, apiService, router, route, location) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.tongHopDuTruTuaTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_27__["TongHopDuTruMuaTaiKhoaDuoc"]();
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.gridColumns = [];
        this.khos = [];
        this.hdts = [];
        this.gridChildColumns = [];
        this.gridChildChildColumns = [];
        this.gridChildChildChildColumns = [];
        this.gridChildChildChildKhoColumns = [];
        this.gridChildChildChildKhoaColumns = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.groups = [{ field: 'Nhom' }];
        this.baseRoute = "/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc";
        this.gridDataSource = {};
        this.data = [];
        this.sort = [
            {
                field: "Nhom",
                dir: "desc",
            },
        ];
        this.groupsChildChild = [{ field: 'Loai' }];
        this.holdQuery = null;
        this.query = null;
        this.additionalSearchString = null;
        this.indextapStringDaXuLy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
        this.tongHopDuTruTuaTaiKhoaDuocSearch = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_27__["TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy"]();
        this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString = null;
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy');
            this.tongHopDuTruTuaTaiKhoaDuocSearch = JSON.parse(this.additionalSearchString);
            if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet != null) {
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate != null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate;
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate;
                }
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate == null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate;
                }
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.startDate == null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate != null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeDuyet.endDate;
                }
            }
            if (this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString != null) {
                this.searchString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
            }
            this.query = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
            this.gridChild._additionalSearchString = this.query;
            if (this.searchString != null) {
                this.gridChild.searchString = this.searchString;
            }
            // this.gridChild.search();
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy', null);
            this.additionalSearchString = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
        }
        this.gridColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'DuTruTheo', Title: 'KỲ Dự trù', Width: 180, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'TinhTrang', Title: 'Tình trạng', Width: 150, Sortable: false, Template: this.tinhTrangTemplate },
            { Field: 'NgayGiamDocDuyet', Title: 'Ngày g.đốc duyệt', Width: 150, Sortable: true, Template: this.ngayGiamDocDuyetTemplate },
            { Field: 'GhiChu', Title: 'Ghi chú', MinWidth: 120, Sortable: true },
        ];
        this.gridChildColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 200, Sortable: false, Template: this.soPhieuDuTruKhoIdTemplate },
            { Field: 'KhoaKhoaString', Title: 'Khoa/Kho', Width: 120, Sortable: false },
            //{ Field: 'KyDuTruTheo', Title: 'KỲ Dự trù', Width: 200, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 200, Sortable: false },
            { Field: 'NgayYeuCau', Title: 'Ngày yêu cầu', Width: 200, Sortable: false, Template: this.NYCTemplate },
            { Field: 'NgayKhoaDuocDuyet', Title: 'Ngày K.Dược duyệt', Width: 200, Sortable: false, Template: this.NKDDTemplate },
        ];
        this.gridChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'TenDuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKho', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'SLDuTruTKhoDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKhoDuocDuyet', Title: ' K.dược duyệt', minWidth: 100, Sortable: false },
        ];
        this.gridChildChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false },
            { Field: 'LoaiDuTru', Title: 'Nhóm', Width: 150, Sortable: false },
            { Field: 'Kho', Title: 'Kho', MinWidth: 150, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuKienTrongKy', Title: 'SL dự kiến trong kỳ', minWidth: 100, Sortable: true },
        ];
        this.gridChildChildChildKhoColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn ', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildChildKhoaColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            // { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKDuocDuyet', Title: 'K.dược duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 200, Sortable: false },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
            //{ Field: 'KyDuTru', Title: 'Kỹ dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL dự kiến trong kỳ', Width: 100, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false }
        ];
    }
    TooltipCustom(duTruDetail) {
        this.khos = [...duTruDetail.TongTonList];
        this.hdts = [...duTruDetail.HopDongChuahapList];
    }
    xemChiTiet(id, TrangThaiDuTru) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].View)) {
            this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/gui/' + id + '/' + TrangThaiDuTru.TinhTrang + '?holdQuery=true');
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xemChiTietDuTru(IdKhoaDuTruDuocPhamTheoKhoa, dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/xem-chi-tiet-tu-da-xu-ly/' + IdKhoaDuTruDuocPhamTheoKhoa + '/' + dataItem.LoaiKho + '?holdQuery=true');
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    CheckboxChange($event, dangChoDuyet = false, tuChoiDuyet = false, daDuyet = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
        if (dangChoDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.DaGoiVaDangChoDuyet = $event;
        }
        else if (tuChoiDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.TuChoiDuyet = $event;
        }
        else if (daDuyet) {
            this.tongHopDuTruTuaTaiKhoaDuocSearch.DaDuyet = $event;
        }
        this.Timkiem();
    }
    onKey(event) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }
    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString !== "") {
            QueryString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
        }
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
        const tongHopDuTruTuaTaiKhoaDuocSearchClone = JSON.parse(JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch));
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate != null) {
            const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0));
        }
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate != null) {
            const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 0, 0));
        }
        if (this.searchString != undefined && this.searchString != "" && this.searchString != null) {
            tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString = this.searchString;
        }
        else {
            tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString = '';
        }
        this.query = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);
        const queryForHole = JSON.parse(JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone));
        if (queryForHole.RangeDuyet != null) {
            if (queryForHole.RangeDuyet.startDate != null) {
                queryForHole.RangeDuyet.startDate = new Date(queryForHole.RangeDuyet.startDate);
            }
            if (queryForHole.RangeDuyet.endDate != null) {
                queryForHole.RangeDuyet.endDate = new Date(queryForHole.RangeDuyet.endDate);
            }
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringTongHopDuTruMuaTaiKhoDuocDaXuLy', JSON.stringify(queryForHole));
        if (this.gridChild) {
            this.gridChild._additionalSearchString = this.query;
            this.gridChild.searchString = QueryString;
            this.gridChild.search();
        }
    }
    clearSearch() {
        if (this.searchString == "") {
            this.gridChild.searchString = "";
            this.Timkiem();
        }
    }
    changeNgayNhapRange() {
        this.Timkiem();
    }
    changeNgayDuyetRange(range) {
        this.Timkiem();
    }
};
TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_28__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "trangThaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "headerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "ngayNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDuTruKhoIdTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "soPhieuDuTruKhoIdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#grid1', { static: false })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "grid1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#grid2', { static: false })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "grid2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildChildChildChild', { static: false })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "gridChildChildChildChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NYCTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "NYCTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NKDDTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "NKDDTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaitemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "loaitemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "tongTonKhoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "hDChuaNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauChildTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "ngayYeuCauChildTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], { static: false })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent.prototype, "indextapStringDaXuLy", void 0);
TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.scss")).default]
    })
], TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.scss ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MtbGlzdC90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.ts":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.ts ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocListComponent", function() { return TongHopDuTruMuaTaiKhoaDuocListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");










let TongHopDuTruMuaTaiKhoaDuocListComponent = class TongHopDuTruMuaTaiKhoaDuocListComponent {
    constructor(dialog, router, apiService, authService, notificationService, cd, route, location) {
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.cd = cd;
        this.route = route;
        this.location = location;
        this.baseRoute = "/nhap-xuat/duoc-pham/tong-hop-mua-duoc-pham-tai-khoa";
        this.lstStatusSelectTabTHDTKhoa = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_9__["ListStatusSelectTabTHDTKhoa"]();
        this.indexTap = 0;
        this.holdQuery = null;
    }
    ngOnInit() {
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem('testTapIndexString') != null) {
            this.data = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].getItem('testTapIndexString');
            this.lstStatusSelectTabTHDTKhoa = JSON.parse(this.data);
        }
        // if(LocalStorageHelper.getItem('testTapIndexString') != null)
        // {
        //   this.data = LocalStorageHelper.getItem(
        //     'testTapIndexString'
        //   );
        //   this.lstStatusSelectTabTHDTKhoa = JSON.parse(this.data);
        // }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem('testTapIndexString', null);
            this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
            this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
            this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
        }
    }
    chuyenDen(element, event) {
        if (event.index == 0) {
            this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = true;
            this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
            this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
        }
        if (event.index == 1) {
            this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
            this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = true;
            this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = false;
        }
        if (event.index == 2) {
            this.lstStatusSelectTabTHDTKhoa.selectedTabChoXuLy = false;
            this.lstStatusSelectTabTHDTKhoa.selectedTabDaXuLy = false;
            this.lstStatusSelectTabTHDTKhoa.selectedTabTuChoi = true;
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_8__["LocalStorageHelper"].setItem('testTapIndexString', JSON.stringify(this.lstStatusSelectTabTHDTKhoa));
    }
};
TongHopDuTruMuaTaiKhoaDuocListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
TongHopDuTruMuaTaiKhoaDuocListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-tai-khoa-duoc-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.scss")).default]
    })
], TongHopDuTruMuaTaiKhoaDuocListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-routing.module.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-routing.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocRoutingModule", function() { return TongHopDuTruMuaTaiKhoaDuocRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_list_tong_hop_du_tru_mua_tai_khoa_duoc_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.ts");
/* harmony import */ var _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.ts");
/* harmony import */ var _goi_giam_doc_du_tru_mua_duoc_pham_update_goi_giam_doc_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.ts");









// const routes: Routes = [];
const routes = [
    {
        path: '',
        component: _tong_hop_du_tru_mua_tai_khoa_duoc_list_tong_hop_du_tru_mua_tai_khoa_duoc_list_component__WEBPACK_IMPORTED_MODULE_6__["TongHopDuTruMuaTaiKhoaDuocListComponent"],
        data: {
            title: 'Danh sách tổng hợp dự trù mua tại khoa dược phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet/:id',
        component: _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_7__["DuyetDuTruMuaDuocPhamUpdateComponent"],
        data: {
            title: 'Chi tiết duyệt dự trù mua dược phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet-tu-choi/:id/:khoThuocId',
        component: _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_7__["DuyetDuTruMuaDuocPhamUpdateComponent"],
        data: {
            title: 'Xem dự trù mua dược phẩm theo khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'xem-chi-tiet-tu-da-xu-ly/:id/:khoThuocId',
        component: _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_7__["DuyetDuTruMuaDuocPhamUpdateComponent"],
        data: {
            title: 'Xem dự trù mua dược phẩm theo khoa',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'duyet/:id/:khoThuocId/:trangThai',
        component: _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_7__["DuyetDuTruMuaDuocPhamUpdateComponent"],
        data: {
            title: 'Duyệt dự trù mua dược phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'gui/:id',
        component: _goi_giam_doc_du_tru_mua_duoc_pham_update_goi_giam_doc_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_8__["GoiGiamDocDuTruMuaDuocPhamUpdateComponent"],
        data: {
            title: 'Gửi dự trù mua dược phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'gui/:id/:tinhTrang',
        component: _goi_giam_doc_du_tru_mua_duoc_pham_update_goi_giam_doc_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_8__["GoiGiamDocDuTruMuaDuocPhamUpdateComponent"],
        data: {
            title: 'Xem dự trù mua dược phẩm',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let TongHopDuTruMuaTaiKhoaDuocRoutingModule = class TongHopDuTruMuaTaiKhoaDuocRoutingModule {
};
TongHopDuTruMuaTaiKhoaDuocRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TongHopDuTruMuaTaiKhoaDuocRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2Mtc2hhcmVkL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy1zaGFyZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocSharedComponent", function() { return TongHopDuTruMuaTaiKhoaDuocSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");








let TongHopDuTruMuaTaiKhoaDuocSharedComponent = class TongHopDuTruMuaTaiKhoaDuocSharedComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.gridChildChildColumns = [];
        this.trangThaiDuyet = null;
        // trường hợp tu chôi,đã duyệt  === true  , cho duyet == false
        this.isDisableTrangThai = false;
        this.trangThaiYeuCau = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.thongTinDuTruMuaDuocPhamTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__["TongHopDuTruMuaTaiKhoaDuoc"]();
        const id = this.route.snapshot.params.id;
        if (id != undefined || id == null) {
            this.getById(id);
            this.getTrangThaiDuyet(id);
        }
        this.gridChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true },
            { Field: 'DuocPham', Title: 'Dược', Width: 120, Sortable: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 80, Sortable: true },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 200, Sortable: true },
            { Field: 'SĐK', Title: 'SĐK', Width: 80, Sortable: true },
            { Field: 'DVT', Title: 'DVT', Width: 100, Sortable: true },
            { Field: 'DD', Title: 'ĐD', Width: 100, Sortable: true },
            { Field: 'NhaSanXuat', Title: 'Nhà sản xuất', Width: 200, Sortable: true },
            { Field: 'NuocSanXuat', Title: 'Nước sản xuất', Width: 200, Sortable: true },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 200, Sortable: true },
            { Field: 'SoLuongDuKienSuDungTrong', Title: 'Số lượng dự kiến sử dụng trong', Width: 200, Sortable: true },
            { Field: 'KhoDuTruTon', Title: 'Kho dự trù tồn', Width: 200, Sortable: true },
            { Field: 'KhoTongTon', Title: 'Kho tổng ', Width: 200, Sortable: true },
            { Field: 'HĐChua', Title: 'HĐ chưa', Width: 200, Sortable: true },
            { Field: 'SLDuTruTKhoa', Title: 'SL dự trù T. khoa', Width: 200, Sortable: true },
            { Field: 'SLDuTruKDuocDuyet', Title: 'SL dự trù K. đươc duyệt', minWidth: 200, Sortable: true },
        ];
        this.gridChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false },
            { Field: 'LoaiDuTru', Title: 'Nhóm', Width: 150, Sortable: true },
            { Field: 'Kho', Title: 'Kho', Width: 150, Sortable: true },
            { Field: 'TuNgay', Title: 'Từ ngày', Width: 150, Sortable: true },
            { Field: 'DenNgay', Title: 'Đên ngày', Width: 150, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuKienTrongKy', Title: 'SL dự kiến trong kỳ', minWidth: 200, Sortable: true },
        ];
    }
    getTrangThaiDuyet(id) {
        this.apiService.post('YeuCauLinhDuocPham/GetTrangThaiDuyet?IdYeuCauLinh=' + id).subscribe(resultData => {
            this.trangThaiDuyet = resultData;
            if (this.trangThaiDuyet == true) {
                this.trangThaiYeuCau.emit(new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__["TrangThaiDuyet"]("Đã duyệt", resultData));
            }
            else if (this.trangThaiDuyet == false) {
                this.trangThaiYeuCau.emit(new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__["TrangThaiDuyet"]("Từ chối duyệt", resultData));
            }
            else {
                this.trangThaiYeuCau.emit(new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_7__["TrangThaiDuyet"]("Đang chờ duyệt", resultData));
            }
        }, (err) => {
            this.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
    }
    getById(id) {
        this.apiService.get("YeuCauMuaDuocPham/GetThongTinMuaDuocPhamTaiKho?id=" + id)
            .subscribe((resultData) => {
            if (resultData !== undefined && resultData != null) {
            }
        });
    }
};
TongHopDuTruMuaTaiKhoaDuocSharedComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TongHopDuTruMuaTaiKhoaDuocSharedComponent.prototype, "trangThaiYeuCau", void 0);
TongHopDuTruMuaTaiKhoaDuocSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.scss")).default]
    })
], TongHopDuTruMuaTaiKhoaDuocSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy10dS1jaG9pL0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXHRvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvY1xcdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLXR1LWNob2lcXHRvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy10dS1jaG9pLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLXR1LWNob2kvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLXR1LWNob2kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLXR1LWNob2kvdG9uZy1ob3AtZHUtdHJ1LW11YS10YWkta2hvYS1kdW9jLXR1LWNob2kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59IiwiLmtoby10b25nLXRvbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmtoby10b25nLXRvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocTuChoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocTuChoiComponent", function() { return TongHopDuTruMuaTaiKhoaDuocTuChoiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box */ "./node_modules/@iconify/icons-ic/twotone-check-box.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @iconify/icons-ic/twotone-check-box-outline-blank */ "./node_modules/@iconify/icons-ic/twotone-check-box-outline-blank.js");
/* harmony import */ var _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @iconify/icons-ic/twotone-done */ "./node_modules/@iconify/icons-ic/twotone-done.js");
/* harmony import */ var _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/twotone-edit */ "./node_modules/@iconify/icons-ic/twotone-edit.js");
/* harmony import */ var _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../tong-hop-du-tru-mua-tai-khoa-duoc.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts");




























let TongHopDuTruMuaTaiKhoaDuocTuChoiComponent = class TongHopDuTruMuaTaiKhoaDuocTuChoiComponent {
    constructor(authService, dialog, notificationService, apiService, router, route) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.router = router;
        this.route = route;
        this.tongHopDuTruTuaTaiKhoaDuoc = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_27__["TongHopDuTruMuaTaiKhoaDuoc"]();
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icActivated = _iconify_icons_ic_twotone_check_box__WEBPACK_IMPORTED_MODULE_15___default.a;
        this.icicUnActivated = _iconify_icons_ic_twotone_check_box_outline_blank__WEBPACK_IMPORTED_MODULE_16___default.a;
        this.icicdone = _iconify_icons_ic_twotone_done__WEBPACK_IMPORTED_MODULE_17___default.a;
        this.icclose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_18___default.a;
        this.icEdit = _iconify_icons_ic_twotone_edit__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_25___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_22___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_23___default.a;
        this.loading = false;
        this.gridColumns = [];
        this.gridChildKhoColumns = [];
        this.gridChildKhoaColumns = [];
        this.gridChildChildColumns = [];
        this.gridChildChildChildColumns = [];
        this.gridChildChildChildKhoaColumns = [];
        this.khos = [];
        this.hdts = [];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormControl"]();
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_24___default.a;
        this.groups = [{ field: 'Nhom' }];
        this.gridDataSource = {};
        this.data = [];
        this.holdQuery = null;
        this.query = null;
        this.additionalSearchString = null;
        this.groupsChildChild = [{ field: 'Loai' }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DanhSachTongHopDuTruMuaDuocPhamTaiKhoaDuoc;
        this.tongHopDuTruTuaTaiKhoaDuocSearch = new _tong_hop_du_tru_mua_tai_khoa_duoc_model__WEBPACK_IMPORTED_MODULE_27__["TongHopDuTruTuaTaiKhoaDuocSearchTuChoi"]();
        if (this.route.snapshot.queryParams.holdQuery != null) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery != null &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringTongHopDuTruMuaDuocPhamTuChoiTaiKhoDuoc') != null) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].getItem('additionalSearchStringTongHopDuTruMuaDuocPhamTuChoiTaiKhoDuoc');
            this.tongHopDuTruTuaTaiKhoaDuocSearch = JSON.parse(this.additionalSearchString);
            if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap != null) {
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate != null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate;
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate;
                }
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate != null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate == null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate;
                }
                if (this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.startDate == null && this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate != null) {
                    this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate = this.tongHopDuTruTuaTaiKhoaDuocSearch.RangeNhap.endDate;
                }
            }
            if (this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString != null) {
                this.searchString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
            }
            this.query = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
            this.gridChild._additionalSearchString = this.query;
            if (this.searchString != null) {
                this.gridChild.searchString = this.searchString;
            }
            this.gridChild.search();
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringTongHopDuTruMuaDuocPhamTuChoiTaiKhoDuoc', null);
            this.additionalSearchString = JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch);
        }
        this.gridColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 120, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'KhoaKho', Title: 'Khoa/Kho', Width: 150, Sortable: true },
            { Field: 'KyDuTru', Title: 'Kỳ dự trù', Width: 180, Sortable: true },
            { Field: 'NguoiYeuCau', Title: 'Người yêu cầu', Width: 150, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày Yêu cầu', Width: 150, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'NgayTuChoi', Title: 'Ngày từ chối', Width: 150, Sortable: true, Template: this.ngayTuChoiTemplate },
            { Field: 'NguoiTuChoi', Title: 'Người từ chối', Width: 150, Sortable: true, },
            { Field: 'LyDo', Title: 'Lý do', MinWidth: 150, Sortable: true },
        ];
        this.gridChildKhoColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildKhoaColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: false, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'H.Đồng chưa nhập', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildChildKhoaColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Loai', Title: 'Loại', Width: 120, Sortable: true, Hidden: true, TemplateGroupHeader: this.loaiNhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Tên', ShowTooltip: true, MinWidth: 120, Sortable: false },
            { Field: 'HoatChat', Title: 'Hoạt chất', ShowTooltip: true, Width: 80, Sortable: false },
            { Field: 'NongDoVaHamLuong', Title: 'Nồng độ/Hàm Lượng', Width: 80, Sortable: false },
            { Field: 'SDK', Title: 'SĐK', Width: 50, Sortable: false },
            { Field: 'DVT', Title: 'ĐVT', Width: 50, Sortable: false },
            { Field: 'DD', Title: 'ĐD', Width: 50, Sortable: false },
            { Field: 'NhaSX', Title: 'Nhà sản xuất', Width: 50, Sortable: false },
            { Field: 'NuocSX', Title: 'Nước sản xuất', Width: 50, Sortable: false },
            { Field: 'SLDuTru', Title: 'SL D.Trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', MinWidth: 100, Sortable: false },
            { Field: 'KhoDuTruTon', Title: 'Kho D.Trù tồn', Width: 100, Sortable: false },
            { Field: 'KhoTongTon', Title: 'Kho tổng tồn ', Width: 100, Sortable: false, Template: this.tongTonKhoTemplate },
            { Field: 'HDChuaNhap', Title: 'HĐ chưa', Width: 100, Sortable: false, Template: this.hDChuaNhanTemplate },
            { Field: 'SLDuTruTKhoaDuyet', Title: 'T.khoa duyệt', Width: 100, Sortable: false },
            { Field: 'SLDuTruKDuocDuyet', Title: 'K.đươc duyệt', Width: 100, Sortable: false },
        ];
        this.gridChildChildColumns = [
            { Field: 'STT', Title: '#', Width: 50, Sortable: false, Template: this.sttTemplate },
            { Field: 'Nhom', Title: 'Nhóm', Width: 200, Sortable: false },
            { Field: 'Kho', Title: 'Kho', MinWidth: 30, Sortable: false },
            //{ Field: 'KyDuTru', Title: 'Kỹ dự trù', Width: 100, Sortable: true },
            { Field: 'SLDuTru', Title: 'SL dự trù', Width: 100, Sortable: false },
            { Field: 'SLDuKienSuDungTrongKy', Title: 'SL d.kiến s.dụng trong kỳ', Width: 100, Sortable: false },
            { Field: 'NhomDieuTriDuPhong', Title: 'Nhóm điều trị/dự phòng', Width: 100, Sortable: false },
        ];
    }
    TooltipCustom(duTruDetail) {
        this.khos = [...duTruDetail.TongTonList];
        this.hdts = [...duTruDetail.HopDongChuahapList];
    }
    xemChiTiet(IdKhoaDuTruDuocPham, dataItem) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
            this.router.navigateByUrl('nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc/xem-chi-tiet-tu-choi/' + IdKhoaDuTruDuocPham + '/' + dataItem.LoaiKho + '?holdQuery=true');
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_10__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    onKey(event) {
        if (event.keyCode === 13) {
            if (this.searchString != undefined && this.searchString != null) {
                this.gridChild.searchString = this.searchString;
            }
            else {
                this.gridChild.searchString = '';
            }
            this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
            this.gridChild.search();
            this.Timkiem();
        }
    }
    Timkiem() {
        let QueryString = null;
        this.gridChild._additionalSearchString = null;
        if (this.searchString !== "") {
            QueryString = this.tongHopDuTruTuaTaiKhoaDuocSearch.SearchString;
        }
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/tong-hop-mua-thuoc-tai-khoa-duoc?holdQuery=true');
        const tongHopDuTruTuaTaiKhoaDuocSearchClone = JSON.parse(JSON.stringify(this.tongHopDuTruTuaTaiKhoaDuocSearch));
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate != null) {
            const startDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.startDate = new Date(startDate);
        }
        if (tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate != null) {
            const endDate = new Date(tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate);
            tongHopDuTruTuaTaiKhoaDuocSearchClone.RangeNhap.endDate = new Date(endDate);
        }
        if (this.searchString != null) {
            tongHopDuTruTuaTaiKhoaDuocSearchClone.SearchString = this.searchString;
        }
        var queryString = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_26__["LocalStorageHelper"].setItem('additionalSearchStringTongHopDuTruMuaDuocPhamTuChoiTaiKhoDuoc', JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone));
        var queryString = JSON.stringify(tongHopDuTruTuaTaiKhoaDuocSearchClone);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.searchString = QueryString;
        this.gridChild.search();
    }
    clearSearch() {
        if (this.searchString == "") {
            this.gridChild.searchString = "";
            // this.gridChild.search();
            this.Timkiem();
        }
    }
    changeNgayNhapRange() {
        this.Timkiem();
    }
    changeNgayDuyetRange(range) {
        this.Timkiem();
    }
};
TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "trangThaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('headerTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "headerTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayNhapTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "ngayNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "soLuongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTuChoiTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "ngayTuChoiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tenNhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "tenNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuDuTruKhoIdTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "soPhieuDuTruKhoIdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayGiamDocDuyetTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "ngayGiamDocDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#grid1', { static: false })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "grid1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('#grid2', { static: false })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "grid2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChildChildChildChild', { static: false })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "gridChildChildChildChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NYCTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "NYCTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('NKDDTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "NKDDTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaitemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "loaitemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tongTonKhoTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "tongTonKhoTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sttTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "sttTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hDChuaNhanTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "hDChuaNhanTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauChildTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "ngayYeuCauChildTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loaiNhomGroupHeaderTemplate', { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "loaiNhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"], { static: true })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_2__["WindowComponent"], { static: false })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "windowChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmComponent"], { static: false })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent.prototype, "confirm", void 0);
TongHopDuTruMuaTaiKhoaDuocTuChoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.scss")).default]
    })
], TongHopDuTruMuaTaiKhoaDuocTuChoiComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy90b25nLWhvcC1kdS10cnUtbXVhLXRhaS1raG9hLWR1b2MtdXBkYXRlL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocUpdateComponent", function() { return TongHopDuTruMuaTaiKhoaDuocUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@vex/animations/stagger.animation */ "./src/@vex/animations/stagger.animation.ts");
/* harmony import */ var src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@vex/animations/fade-in-up.animation */ "./src/@vex/animations/fade-in-up.animation.ts");




let TongHopDuTruMuaTaiKhoaDuocUpdateComponent = class TongHopDuTruMuaTaiKhoaDuocUpdateComponent {
    constructor() {
        this.isShow = false;
    }
    ngOnInit() {
    }
    getTrangThaiYeuCau(event) {
        if (event != undefined && event != null) {
            this.trangThai = event;
            if (this.trangThai.DuocDuyet == true) {
                this.isShow = false;
            }
            else if (this.trangThai.DuocDuyet == false) {
                this.isShow = false;
            }
            else {
                this.isShow = true;
            }
        }
    }
};
TongHopDuTruMuaTaiKhoaDuocUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tong-hop-du-tru-mua-tai-khoa-duoc-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tong-hop-du-tru-mua-tai-khoa-duoc-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.html")).default,
        animations: [
            src_vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_2__["stagger60ms"],
            src_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInUp400ms"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-update.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.scss")).default]
    })
], TongHopDuTruMuaTaiKhoaDuocUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.model.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuoc, DuTruMuaDuocPhamKhoDuocChiTietList, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild, TongHopDuTruTuaTaiKhoaDuocSearch, TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy, TongHopDuTruTuaTaiKhoaDuocSearchTuChoi, RangeDate, TrangThaiDuyet, DuTruMuaDuocPhamKhoDuoc, DuTruMuaDuocPhamKhoDuocChiTiet, DuTruMuaTaiKhoaDuocGoi, ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc, PhieuInDuTruMuaTaiKhoaDuoc, DuTruMuaDuocPhamTaiKhoaDuoc, DuTruView, DuTruViewDetail, DuTruMuaDuocPhamKhoDuocChiTiets, ListStatusSelectTabTHDTKhoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuoc", function() { return TongHopDuTruMuaTaiKhoaDuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaDuocPhamKhoDuocChiTietList", function() { return DuTruMuaDuocPhamKhoDuocChiTietList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc", function() { return ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild", function() { return ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruTuaTaiKhoaDuocSearch", function() { return TongHopDuTruTuaTaiKhoaDuocSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy", function() { return TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruTuaTaiKhoaDuocSearchTuChoi", function() { return TongHopDuTruTuaTaiKhoaDuocSearchTuChoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangThaiDuyet", function() { return TrangThaiDuyet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaDuocPhamKhoDuoc", function() { return DuTruMuaDuocPhamKhoDuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaDuocPhamKhoDuocChiTiet", function() { return DuTruMuaDuocPhamKhoDuocChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaTaiKhoaDuocGoi", function() { return DuTruMuaTaiKhoaDuocGoi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc", function() { return ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhieuInDuTruMuaTaiKhoaDuoc", function() { return PhieuInDuTruMuaTaiKhoaDuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaDuocPhamTaiKhoaDuoc", function() { return DuTruMuaDuocPhamTaiKhoaDuoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruView", function() { return DuTruView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruViewDetail", function() { return DuTruViewDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuTruMuaDuocPhamKhoDuocChiTiets", function() { return DuTruMuaDuocPhamKhoDuocChiTiets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStatusSelectTabTHDTKhoa", function() { return ListStatusSelectTabTHDTKhoa; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TongHopDuTruMuaTaiKhoaDuoc {
    constructor(Id = 0, SoPhieu = null, Khoa = null, KhoaId = null, TenKhoa = null, KhoId = null, TenKho = null, NguoiYeuCauId = null, TenNguoiYeuCau = null, NgayYeuCau = null, TrangThai = null, TrangThaiHienThi = null, NgayKhoaDuocDuyet = null, NgayGiamDocDuyet = null, KyDuTru = null, KyDuTruId = null, LoaiDuTru = null, LoaiDuTruId = null, GhiChu = null, LyDoTruongKhoaTuChoi = null, LoaiDuyet = null, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = [], ListDuTruMuaDuocPhamKhoDuocChiTiet = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.Khoa = Khoa;
        this.KhoaId = KhoaId;
        this.TenKhoa = TenKhoa;
        this.KhoId = KhoId;
        this.TenKho = TenKho;
        this.NguoiYeuCauId = NguoiYeuCauId;
        this.TenNguoiYeuCau = TenNguoiYeuCau;
        this.NgayYeuCau = NgayYeuCau;
        this.TrangThai = TrangThai;
        this.TrangThaiHienThi = TrangThaiHienThi;
        this.NgayKhoaDuocDuyet = NgayKhoaDuocDuyet;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.KyDuTru = KyDuTru;
        this.KyDuTruId = KyDuTruId;
        this.LoaiDuTru = LoaiDuTru;
        this.LoaiDuTruId = LoaiDuTruId;
        this.GhiChu = GhiChu;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.LoaiDuyet = LoaiDuyet;
        this.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList = ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocList;
        this.ListDuTruMuaDuocPhamKhoDuocChiTiet = ListDuTruMuaDuocPhamKhoDuocChiTiet;
    }
}
class DuTruMuaDuocPhamKhoDuocChiTietList {
    constructor(Id = 0, DuTruMuaDuocPhamId = 0, DuTruMuaDuocPhamTheoKhoaId = 0, DuocPhamId = 0, LaDuocPhamBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, NhomDieuTriDuPhong = null, SoLuongDuTruTruongKhoaDuyet = null, SoLuongDuTruKhoDuocDuyet = null, DuTruMuaDuocPhamTheoKhoaChiTietId = null, DuTruMuaDuocPhamKhoDuocChiTietId = null) {
        this.Id = Id;
        this.DuTruMuaDuocPhamId = DuTruMuaDuocPhamId;
        this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
        this.DuocPhamId = DuocPhamId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
        this.SoLuongDuTruKhoDuocDuyet = SoLuongDuTruKhoDuocDuyet;
        this.DuTruMuaDuocPhamTheoKhoaChiTietId = DuTruMuaDuocPhamTheoKhoaChiTietId;
        this.DuTruMuaDuocPhamKhoDuocChiTietId = DuTruMuaDuocPhamKhoDuocChiTietId;
    }
}
class ThongTinChiTietTongHopDuTruTuaTaiKhoaDuoc {
    constructor(Id = 0, STT = 0, Loai = null, TenLoai = null, DuocPhamId = null, TenDuocPham = null, HoatChat = null, NongDoVaHamLuong = null, SĐK = null, DuTruMuaDuocPhamTheoKhoaId = 0, DVT = null, DD = null, NhaSX = null, NuocSX = null, NhomDieuTriDuPhong = null, SLDuTru = null, SLDuKienSuDungTrongKho = null, KhoDuTruTon = null, HDChuaNhan = null, SLDuTruTKhoDuyet = null, SLDuTruKhoDuocDuyet = null, KhoTongTon = null, thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild = []) {
        this.Id = Id;
        this.STT = STT;
        this.Loai = Loai;
        this.TenLoai = TenLoai;
        this.DuocPhamId = DuocPhamId;
        this.TenDuocPham = TenDuocPham;
        this.HoatChat = HoatChat;
        this.NongDoVaHamLuong = NongDoVaHamLuong;
        this.SĐK = SĐK;
        this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
        this.DVT = DVT;
        this.DD = DD;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.SLDuTru = SLDuTru;
        this.SLDuKienSuDungTrongKho = SLDuKienSuDungTrongKho;
        this.KhoDuTruTon = KhoDuTruTon;
        this.HDChuaNhan = HDChuaNhan;
        this.SLDuTruTKhoDuyet = SLDuTruTKhoDuyet;
        this.SLDuTruKhoDuocDuyet = SLDuTruKhoDuocDuyet;
        this.KhoTongTon = KhoTongTon;
        this.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild = thongTinChiTietTongHopDuTruTuaTaiKhoaDuocListChild;
    }
}
class ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChild {
    constructor(STT = 0, Nhom = null, Kho = null, TuNgay = null, DenNgay = null, SLDuTru = null, SLDuKienTrongKy = null, DuTruMuaDuocPhamTheoKhoaId = null, DuTruMuaDuocPhamTheoKhoaChiTietId = null, DuTruMuaDuocPhamId = null, DuTruMuaDuocPhamChiTietId = null, KyDuTru = null) {
        this.STT = STT;
        this.Nhom = Nhom;
        this.Kho = Kho;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.SLDuTru = SLDuTru;
        this.SLDuKienTrongKy = SLDuKienTrongKy;
        this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
        this.DuTruMuaDuocPhamTheoKhoaChiTietId = DuTruMuaDuocPhamTheoKhoaChiTietId;
        this.DuTruMuaDuocPhamId = DuTruMuaDuocPhamId;
        this.DuTruMuaDuocPhamChiTietId = DuTruMuaDuocPhamChiTietId;
        this.KyDuTru = KyDuTru;
    }
}
class TongHopDuTruTuaTaiKhoaDuocSearch {
    constructor(ChoDuyet = true, ChoGoi = true, SearchString = null, RangeNhap = new RangeDate(), RangeDuyet = new RangeDate()) {
        this.ChoDuyet = ChoDuyet;
        this.ChoGoi = ChoGoi;
        this.SearchString = SearchString;
        this.RangeNhap = RangeNhap;
        this.RangeDuyet = RangeDuyet;
    }
}
class TongHopDuTruTuaTaiKhoaDuocSearchDaXuLy {
    constructor(DaGoiVaDangChoDuyet = true, TuChoiDuyet = true, DaDuyet = true, SearchString = null, 
    // public RangeNhap: RangeDate = new RangeDate(),
    RangeDuyet = new RangeDate()) {
        this.DaGoiVaDangChoDuyet = DaGoiVaDangChoDuyet;
        this.TuChoiDuyet = TuChoiDuyet;
        this.DaDuyet = DaDuyet;
        this.SearchString = SearchString;
        this.RangeDuyet = RangeDuyet;
    }
}
class TongHopDuTruTuaTaiKhoaDuocSearchTuChoi {
    constructor(SearchString = null, RangeNhap = new RangeDate()) {
        this.SearchString = SearchString;
        this.RangeNhap = RangeNhap;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
class TrangThaiDuyet {
    constructor(TenTrangThai = null, DuocDuyet = null) {
        this.TenTrangThai = TenTrangThai;
        this.DuocDuyet = DuocDuyet;
    }
}
class DuTruMuaDuocPhamKhoDuoc {
    constructor(Id = null, LyDoTruongKhoaTuChoi = null, LoaiDuyet = null, ListDuTruMuaDuocPhamKhoDuocChiTiet = []) {
        this.Id = Id;
        this.LyDoTruongKhoaTuChoi = LyDoTruongKhoaTuChoi;
        this.LoaiDuyet = LoaiDuyet;
        this.ListDuTruMuaDuocPhamKhoDuocChiTiet = ListDuTruMuaDuocPhamKhoDuocChiTiet;
    }
}
class DuTruMuaDuocPhamKhoDuocChiTiet {
    constructor(DuTruMuaDuocPhamId = null, DuTruMuaDuocPhamTheoKhoaId = null, DuocPhamId = null, LaDuocPhamBHYT = null, SoLuongDuTru = null, SoLuongDuKienSuDung = null, SoLuongDuTruTruongKhoaDuyet = null, SoLuongDuTruKhoDuocDuyet = null, NhomDieuTriDuPhong = null, DuTruMuaDuocPhamTheoKhoaChiTietId = null, DuTruMuaDuocPhamKhoDuocChiTietId = null) {
        this.DuTruMuaDuocPhamId = DuTruMuaDuocPhamId;
        this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
        this.DuocPhamId = DuocPhamId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
        this.SoLuongDuTruKhoDuocDuyet = SoLuongDuTruKhoDuocDuyet;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.DuTruMuaDuocPhamTheoKhoaChiTietId = DuTruMuaDuocPhamTheoKhoaChiTietId;
        this.DuTruMuaDuocPhamKhoDuocChiTietId = DuTruMuaDuocPhamKhoDuocChiTietId;
    }
}
// goi
class DuTruMuaTaiKhoaDuocGoi {
    constructor(Id = 0, KyDuTru = null, KyDuTruId = null, TenNguoiYeuCau = null, NguoiYeuCauId = 0, TrangThai = null, TrangThaiHienThi = null, GhiChu = null, TuNgay = null, DenNgay = null, NgayYeuCau = null, LyDoTuChoi = null, ListDuTruDuocPhamId = [], ListDuTruDuocPhamTheoKhoaId = [], thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList = []) {
        this.Id = Id;
        this.KyDuTru = KyDuTru;
        this.KyDuTruId = KyDuTruId;
        this.TenNguoiYeuCau = TenNguoiYeuCau;
        this.NguoiYeuCauId = NguoiYeuCauId;
        this.TrangThai = TrangThai;
        this.TrangThaiHienThi = TrangThaiHienThi;
        this.GhiChu = GhiChu;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.NgayYeuCau = NgayYeuCau;
        this.LyDoTuChoi = LyDoTuChoi;
        this.ListDuTruDuocPhamId = ListDuTruDuocPhamId;
        this.ListDuTruDuocPhamTheoKhoaId = ListDuTruDuocPhamTheoKhoaId;
        this.thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList = thongTinChiTietTongHopDuTruTuaTaiKhoaDuocGoiList;
    }
}
class ThongTinChiTietTongHopDuTruMuaTaiKhoaDuoc {
    constructor(Id = 0, STT = 0, Loai = null, TenLoai = null, DuocPhamId = null, TenDuocPham = null, HoatChat = null, NongDoVaHamLuong = null, SĐK = null, DuTruMuaDuocPhamTheoKhoaId = 0, DVT = null, DD = null, NhaSX = null, NuocSX = null, NhomDieuTriDuPhong = null, SLDuTru = null, SLDuKienSuDungTrongKho = null, KhoDuTruTon = null, HDChuaNhan = null, SLDuTruTKhoDuyet = null, SLDuTruKhoDuocDuyet = null, KhoTongTon = null, ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList = []) {
        this.Id = Id;
        this.STT = STT;
        this.Loai = Loai;
        this.TenLoai = TenLoai;
        this.DuocPhamId = DuocPhamId;
        this.TenDuocPham = TenDuocPham;
        this.HoatChat = HoatChat;
        this.NongDoVaHamLuong = NongDoVaHamLuong;
        this.SĐK = SĐK;
        this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
        this.DVT = DVT;
        this.DD = DD;
        this.NhaSX = NhaSX;
        this.NuocSX = NuocSX;
        this.NhomDieuTriDuPhong = NhomDieuTriDuPhong;
        this.SLDuTru = SLDuTru;
        this.SLDuKienSuDungTrongKho = SLDuKienSuDungTrongKho;
        this.KhoDuTruTon = KhoDuTruTon;
        this.HDChuaNhan = HDChuaNhan;
        this.SLDuTruTKhoDuyet = SLDuTruTKhoDuyet;
        this.SLDuTruKhoDuocDuyet = SLDuTruKhoDuocDuyet;
        this.KhoTongTon = KhoTongTon;
        this.ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList = ThongTinChiTietTongHopDuTruTuaTaiKhoaDuocChildList;
    }
}
// phieu in 
class PhieuInDuTruMuaTaiKhoaDuoc {
    constructor(DuTruMuaDuocPhamTheoKhoaId = 0, HostingName = null, Header = null) {
        this.DuTruMuaDuocPhamTheoKhoaId = DuTruMuaDuocPhamTheoKhoaId;
        this.HostingName = HostingName;
        this.Header = Header;
    }
}
class DuTruMuaDuocPhamTaiKhoaDuoc {
    constructor(Id = 0, SoPhieu = null, NhanVienYeuCauId = 0, NgayYeuCau = null, TuNgay = null, DenNgay = null, GhiChu = null, GiamDocDuyet = null, GiamDocId = null, NgayGiamDocDuyet = null, LyDoGiamDocTuChoi = null, KyDuTruMuaDuocPhamVatTuId = 0, ListDuTruDuocPhamId = [], ListDuTruDuocPhamTheoKhoaId = [], ListDuTruDuocPhamChiTietId = [], ListDuTruDuocPhamTheoKhoaChiTietId = [], DuTruMuaDuocPhamKhoDuocChiTiet = []) {
        this.Id = Id;
        this.SoPhieu = SoPhieu;
        this.NhanVienYeuCauId = NhanVienYeuCauId;
        this.NgayYeuCau = NgayYeuCau;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.GhiChu = GhiChu;
        this.GiamDocDuyet = GiamDocDuyet;
        this.GiamDocId = GiamDocId;
        this.NgayGiamDocDuyet = NgayGiamDocDuyet;
        this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
        this.KyDuTruMuaDuocPhamVatTuId = KyDuTruMuaDuocPhamVatTuId;
        this.ListDuTruDuocPhamId = ListDuTruDuocPhamId;
        this.ListDuTruDuocPhamTheoKhoaId = ListDuTruDuocPhamTheoKhoaId;
        this.ListDuTruDuocPhamChiTietId = ListDuTruDuocPhamChiTietId;
        this.ListDuTruDuocPhamTheoKhoaChiTietId = ListDuTruDuocPhamTheoKhoaChiTietId;
        this.DuTruMuaDuocPhamKhoDuocChiTiet = DuTruMuaDuocPhamKhoDuocChiTiet;
    }
}
// view 
class DuTruView {
    constructor(SoPhieu = null, KyDuTruDisplay = null, KyDuTru = null, NguoiYeuCau = null, NguoiDuyet = null, NgayYeuCauDisplay = null, Id = null, NgayYeuCau = null, NgayDuyetDisplay = null, LyDoGiamDocTuChoi = null, NgayDuyet = null, GhiChu = null, TrangThai = null, // null: chờ, true: đã duyệt, false: từ chối duyệt
    TrangThaiDisplay = null, DuTruGiamDocDetails = []) {
        this.SoPhieu = SoPhieu;
        this.KyDuTruDisplay = KyDuTruDisplay;
        this.KyDuTru = KyDuTru;
        this.NguoiYeuCau = NguoiYeuCau;
        this.NguoiDuyet = NguoiDuyet;
        this.NgayYeuCauDisplay = NgayYeuCauDisplay;
        this.Id = Id;
        this.NgayYeuCau = NgayYeuCau;
        this.NgayDuyetDisplay = NgayDuyetDisplay;
        this.LyDoGiamDocTuChoi = LyDoGiamDocTuChoi;
        this.NgayDuyet = NgayDuyet;
        this.GhiChu = GhiChu;
        this.TrangThai = TrangThai;
        this.TrangThaiDisplay = TrangThaiDisplay;
        this.DuTruGiamDocDetails = DuTruGiamDocDetails;
    }
}
class DuTruViewDetail {
    constructor(Loai = null, IsBhyt = null, DuocPhamId = null, DuocPham = null, HoatChat = null, Id = null, NongDo = null, Sdk = null, Dvt = null, DuongDung = null, NhaSx = null, NuocSx = null, SoLuongDuTru = null, SoLuongDuKienTrongKy = null, SoLuongDuTruTrKhoa = null, SoLuongDuTruKhDuoc = null, SoLuongDuTruDirector = null, KhoDuTruTon = null, KhoTongTon = null, HdChuaNhap = null, TongTonList = [], HdChuaNhapList = []) {
        this.Loai = Loai;
        this.IsBhyt = IsBhyt;
        this.DuocPhamId = DuocPhamId;
        this.DuocPham = DuocPham;
        this.HoatChat = HoatChat;
        this.Id = Id;
        this.NongDo = NongDo;
        this.Sdk = Sdk;
        this.Dvt = Dvt;
        this.DuongDung = DuongDung;
        this.NhaSx = NhaSx;
        this.NuocSx = NuocSx;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienTrongKy = SoLuongDuKienTrongKy;
        this.SoLuongDuTruTrKhoa = SoLuongDuTruTrKhoa;
        this.SoLuongDuTruKhDuoc = SoLuongDuTruKhDuoc;
        this.SoLuongDuTruDirector = SoLuongDuTruDirector;
        this.KhoDuTruTon = KhoDuTruTon;
        this.KhoTongTon = KhoTongTon;
        this.HdChuaNhap = HdChuaNhap;
        this.TongTonList = TongTonList;
        this.HdChuaNhapList = HdChuaNhapList;
    }
}
class DuTruMuaDuocPhamKhoDuocChiTiets {
    constructor(Id = 0, DuocPhamId = 0, DuTruMuaDuocPhamKhoDuocId = 0, LaDuocPhamBHYT = null, SoLuongDuTru = 0, SoLuongDuKienSuDung = 0, SoLuongDuTruTruongKhoaDuyet = 0, SoLuongDuTruKhoDuocDuyet = 0, SoLuongDuTruGiamDocDuyet = 0) {
        this.Id = Id;
        this.DuocPhamId = DuocPhamId;
        this.DuTruMuaDuocPhamKhoDuocId = DuTruMuaDuocPhamKhoDuocId;
        this.LaDuocPhamBHYT = LaDuocPhamBHYT;
        this.SoLuongDuTru = SoLuongDuTru;
        this.SoLuongDuKienSuDung = SoLuongDuKienSuDung;
        this.SoLuongDuTruTruongKhoaDuyet = SoLuongDuTruTruongKhoaDuyet;
        this.SoLuongDuTruKhoDuocDuyet = SoLuongDuTruKhoDuocDuyet;
        this.SoLuongDuTruGiamDocDuyet = SoLuongDuTruGiamDocDuyet;
    }
}
class ListStatusSelectTabTHDTKhoa {
    constructor(selectedTabChoXuLy = true, selectedTabDaXuLy = false, selectedTabTuChoi = false) {
        this.selectedTabChoXuLy = selectedTabChoXuLy;
        this.selectedTabDaXuLy = selectedTabDaXuLy;
        this.selectedTabTuChoi = selectedTabTuChoi;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.module.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.module.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocModule", function() { return TongHopDuTruMuaTaiKhoaDuocModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-routing.module.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_list_tong_hop_du_tru_mua_tai_khoa_duoc_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-list/tong-hop-du-tru-mua-tai-khoa-duoc-list.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc.service */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.service.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_shared_tong_hop_du_tru_mua_tai_khoa_duoc_shared_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-shared/tong-hop-du-tru-mua-tai-khoa-duoc-shared.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_update_tong_hop_du_tru_mua_tai_khoa_duoc_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-update/tong-hop-du-tru-mua-tai-khoa-duoc-update.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_cho_xu_ly_tong_hop_du_tru_mua_tai_khoa_duoc_cho_xu_ly_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-cho-xu-ly.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_da_xu_ly_tong_hop_du_tru_mua_tai_khoa_duoc_da_xu_ly_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly/tong-hop-du-tru-mua-tai-khoa-duoc-da-xu-ly.component.ts");
/* harmony import */ var _tong_hop_du_tru_mua_tai_khoa_duoc_tu_choi_tong_hop_du_tru_mua_tai_khoa_duoc_tu_choi_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi/tong-hop-du-tru-mua-tai-khoa-duoc-tu-choi.component.ts");
/* harmony import */ var _duyet_du_tru_mua_duoc_pham_shared_duyet_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-shared/duyet-du-tru-mua-duoc-pham-shared.component.ts");
/* harmony import */ var _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/duyet-du-tru-mua-duoc-pham-update/duyet-du-tru-mua-duoc-pham-update.component.ts");
/* harmony import */ var _tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./tu-choi-duyet-popup/tu-choi-duyet-popup.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.ts");
/* harmony import */ var _goi_giam_doc_du_tru_mua_duoc_pham_shared_goi_giam_doc_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-shared/goi-giam-doc-du-tru-mua-duoc-pham-shared.component.ts");
/* harmony import */ var _goi_giam_doc_du_tru_mua_duoc_pham_update_goi_giam_doc_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/goi-giam-doc-du-tru-mua-duoc-pham-update/goi-giam-doc-du-tru-mua-duoc-pham-update.component.ts");
/* harmony import */ var _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm/gui-tong-hop-du-tru-mua-thuoc-tai-khoa-duoc-confirm.component.ts");
/* harmony import */ var _phieu_mua_tru_tai_khoa_duoc_phieu_mua_tru_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc/phieu-mua-tru-tai-khoa-duoc.component.ts");




























let TongHopDuTruMuaTaiKhoaDuocModule = class TongHopDuTruMuaTaiKhoaDuocModule {
};
TongHopDuTruMuaTaiKhoaDuocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tong_hop_du_tru_mua_tai_khoa_duoc_list_tong_hop_du_tru_mua_tai_khoa_duoc_list_component__WEBPACK_IMPORTED_MODULE_14__["TongHopDuTruMuaTaiKhoaDuocListComponent"], _tong_hop_du_tru_mua_tai_khoa_duoc_shared_tong_hop_du_tru_mua_tai_khoa_duoc_shared_component__WEBPACK_IMPORTED_MODULE_16__["TongHopDuTruMuaTaiKhoaDuocSharedComponent"], _tong_hop_du_tru_mua_tai_khoa_duoc_update_tong_hop_du_tru_mua_tai_khoa_duoc_update_component__WEBPACK_IMPORTED_MODULE_17__["TongHopDuTruMuaTaiKhoaDuocUpdateComponent"], _tong_hop_du_tru_mua_tai_khoa_duoc_cho_xu_ly_tong_hop_du_tru_mua_tai_khoa_duoc_cho_xu_ly_component__WEBPACK_IMPORTED_MODULE_18__["TongHopDuTruMuaTaiKhoaDuocChoXuLyComponent"], _tong_hop_du_tru_mua_tai_khoa_duoc_da_xu_ly_tong_hop_du_tru_mua_tai_khoa_duoc_da_xu_ly_component__WEBPACK_IMPORTED_MODULE_19__["TongHopDuTruMuaTaiKhoaDuocDaXuLyComponent"], _tong_hop_du_tru_mua_tai_khoa_duoc_tu_choi_tong_hop_du_tru_mua_tai_khoa_duoc_tu_choi_component__WEBPACK_IMPORTED_MODULE_20__["TongHopDuTruMuaTaiKhoaDuocTuChoiComponent"], _duyet_du_tru_mua_duoc_pham_shared_duyet_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_21__["DuyetDuTruMuaDuocPhamSharedComponent"], _duyet_du_tru_mua_duoc_pham_update_duyet_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_22__["DuyetDuTruMuaDuocPhamUpdateComponent"], _tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_23__["TuChoiDuyetPopupComponent"], _goi_giam_doc_du_tru_mua_duoc_pham_shared_goi_giam_doc_du_tru_mua_duoc_pham_shared_component__WEBPACK_IMPORTED_MODULE_24__["GoiGiamDocDuTruMuaDuocPhamSharedComponent"], _goi_giam_doc_du_tru_mua_duoc_pham_update_goi_giam_doc_du_tru_mua_duoc_pham_update_component__WEBPACK_IMPORTED_MODULE_25__["GoiGiamDocDuTruMuaDuocPhamUpdateComponent"], _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_component__WEBPACK_IMPORTED_MODULE_26__["GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent"], _phieu_mua_tru_tai_khoa_duoc_phieu_mua_tru_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_27__["PhieuMuaTruTaiKhoaDuocComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // BrowserAnimationsModule,
            // NoopAnimationsModule,
            _tong_hop_du_tru_mua_tai_khoa_duoc_routing_module__WEBPACK_IMPORTED_MODULE_13__["TongHopDuTruMuaTaiKhoaDuocRoutingModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        ],
        providers: [
            _tong_hop_du_tru_mua_tai_khoa_duoc_service__WEBPACK_IMPORTED_MODULE_15__["TongHopDuTruMuaTaiKhoaDuocService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_12__["BaseService"], useClass: _tong_hop_du_tru_mua_tai_khoa_duoc_service__WEBPACK_IMPORTED_MODULE_15__["TongHopDuTruMuaTaiKhoaDuocService"] },
        ],
        entryComponents: [
            _tu_choi_duyet_popup_tu_choi_duyet_popup_component__WEBPACK_IMPORTED_MODULE_23__["TuChoiDuyetPopupComponent"],
            _phieu_mua_tru_tai_khoa_duoc_phieu_mua_tru_tai_khoa_duoc_component__WEBPACK_IMPORTED_MODULE_27__["PhieuMuaTruTaiKhoaDuocComponent"],
            _gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_gui_tong_hop_du_tru_mua_thuoc_tai_khoa_duoc_confirm_component__WEBPACK_IMPORTED_MODULE_26__["GuiTongHopDuTruMuaThuocTaiKhoaDuocConfirmComponent"]
        ]
    })
], TongHopDuTruMuaTaiKhoaDuocModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.service.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tong-hop-du-tru-mua-tai-khoa-duoc.service.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: TongHopDuTruMuaTaiKhoaDuocService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TongHopDuTruMuaTaiKhoaDuocService", function() { return TongHopDuTruMuaTaiKhoaDuocService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let TongHopDuTruMuaTaiKhoaDuocService = class TongHopDuTruMuaTaiKhoaDuocService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'YeuCauMuaDuocPham';
    }
};
TongHopDuTruMuaTaiKhoaDuocService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
TongHopDuTruMuaTaiKhoaDuocService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TongHopDuTruMuaTaiKhoaDuocService);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9uaGFwLXh1YXQvZHVvYy1waGFtL3RvbmctaG9wLWR1LXRydS1tdWEtdGFpLWtob2EtZHVvYy90dS1jaG9pLWR1eWV0LXBvcHVwL3R1LWNob2ktZHV5ZXQtcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: TuChoiDuyetPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuChoiDuyetPopupComponent", function() { return TuChoiDuyetPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let TuChoiDuyetPopupComponent = class TuChoiDuyetPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.Title = null;
        this.Message = null;
        this.lyDo = null;
    }
    ngOnInit() {
        this.Title = this.data.Title;
        this.Message = this.data.Message;
    }
    close(data) {
        if (data == 'ok') {
            this.dialogRef.close(this.lyDo);
        }
        else {
            this.dialogRef.close(null);
        }
    }
};
TuChoiDuyetPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
TuChoiDuyetPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tu-choi-duyet-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tu-choi-duyet-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tu-choi-duyet-popup.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/tong-hop-du-tru-mua-tai-khoa-duoc/tu-choi-duyet-popup/tu-choi-duyet-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], TuChoiDuyetPopupComponent);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-duoc-pham-tong-hop-du-tru-mua-tai-khoa-duoc-tong-hop-du-tru-mua-tai-khoa-duoc-module-es2015.js.map