(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nhap-xuat-duoc-pham-duyet-tra-tu-bn-duyet-tra-tu-bn-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Nhập Xuất',Path:''},\n    {Title:'Dược Phẩm',Path:''},\n    {Title:'Hoàn Trả',Path:''},\n    {Title:'Từ Người Bệnh',Path:''},\n    {Title:'Duyệt Hoàn Trả',\n    Path:'/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra', queryParams: {holdQuery : true}, Active: true}\n]\" [isicMoreVert]=\"false\">\n</app-header-form>\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b render-tu-choi\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chi Tiết Duyệt Phiếu Trả Thuốc Từ Người Bệnh Nội Trú</h2>\n                <div [innerHTML]=\"tinhTrangTxt\"></div>\n            </div>\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-duyet-tra-thuoc-tu-bn-shared (fireStatus)=\"GetCurrentStatus($event)\" #shared></app-duyet-tra-thuoc-tu-bn-shared>\n                <div class=\"form-footer\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <button type=\"button\" (click)=\"Back()\" mat-raised-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Quay lại</button>\n                    <button *ngIf=\"status!=true\" type=\"button\" color=\"primary\" (click)=\"Approve()\" mat-raised-button class=\"mr-1\"><i class=\"ft-arrow-left\"></i>\n                        Duyệt</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n      {Title:'Nhập Xuất',Path:''},\n      {Title:'Dược Phẩm',Path:''},\n      {Title:'Hoàn Trả',Path:''},\n      {Title:'Từ Người Bệnh',Path:''},\n      {Title:'Duyệt Hoàn Trả',\n      Path:'/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra', Active: true}\n      ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent baseRoute=\"nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra\" [sort]=\"sort\"\n                [additionalSearchString]=\"additionalSearchString\" [gridColumns]=\"gridColumns\" [lazyLoadPage]=\"true\"\n                [documentType]=\"documentType\" [useAddDeault]=\"false\" (extOnDataBound)=\"SetColorForTrangThai()\"\n                [checkboxAble]=\"false\" [useHeaderDefault]=\"false\" [searchString]=\"search.SearchString\"\n                [headerTemplate]=\"headerTemplate\" [useActionDefault]=\"false\" [detailTemplate]=\"detailTemplate\">\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid [gridColumns]=\"gridDuocPhamColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [urlGetData]=\"urlGetDataDuocPham\" [groups]=\"groups\" [detailTemplate]=\"detailTemplateBenhNhan\"\n                    additionalSearchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #detailTemplateBenhNhan let-dataItem>\n                <app-grid [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n                    [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n                    [urlGetData]=\"urlGetDataBenhNhanDuyet\" [groups]=\"groupBenhNhan\"\n                    additionalSearchString=\"{{dataItem.YeuCauTraDuocPhamTuBenhNhanId}};{{dataItem.DuocPhamBenhVienId}}\"\n                    [autoHeight]=\"true\" [pageable]=\"false\">\n                </app-grid>\n            </ng-template>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar p-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, true)\" id=\"DangChoDuyetId\"\n                        [(model)]=\"search.DangChoDuyet\" class=\"ml-2\" label=\"Chờ duyệt\">\n                    </app-checkbox>\n                    <app-checkbox (modelChange)=\"CheckboxChange($event, false, true)\" id=\"DaDuyetId\"\n                        [(model)]=\"search.DaDuyet\" class=\"ml-2\" label=\"Đã duyệt\">\n                    </app-checkbox>\n\n                    <div style=\"margin-top: 5px;\" class=\"bg-card rounded-full border mb-1 ml-2\" fxFlex=\"400px\"\n                        fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <ic-icon class=\"ml-4\" [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"search.SearchString\" (keyup)=\"onKey($event)\"\n                            (ngModelChange)=\"clearSearch()\" placeholder=\"Nhập từ khóa...\" />\n                    </div>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-yeu-cau\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"search.RangeYeuCau\" label=\"Yêu cầu từ ngày - đến ngày\" (modelChange)=\"Timkiem()\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <app-daterangepicker style=\"margin-left: 5px;\" id=\"range-duyet\" fxFlex=\"250px\" fxFlex.sm=\"auto\"\n                        [(model)]=\"search.RangeDuyet\" label=\"Duyệt từ ngày - đến ngày\" (modelChange)=\"Timkiem()\"\n                        class=\"mt-1 on-header\">\n                    </app-daterangepicker>\n\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\">\n                        <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                    </button>\n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <button (click)=\"exportExcel()\" class=\"mr-4\" fxFlex=\"none\" mat-icon-button kendoTooltip\n                        title=\"Xuất Excel\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"!column.HideFilter\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n                </div>\n            </ng-template>\n\n        </div>\n    </vex-page-layout-content>\n\n</vex-page-layout>\n<ng-template #actionTemplate let-dataItem>\n    <!-- <button *ngIf=\"dataItem.TinhTrang!=true\" (click)=\"delete(dataItem.Id)\" mat-menu-item>\n        <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n        <span>Xóa</span>\n    </button> -->\n    <button kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\" mat-icon-button type=\"button\">\n        <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n    </button>\n    <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n        <ng-template let-customer=\"customer\" matMenuContent>\n            <button (click)=\"inPhieu(dataItem.Id)\" mat-menu-item>\n                <mat-icon [icIcon]=\"icPrint\"></mat-icon>\n                <span>In phiếu</span>\n            </button>\n        </ng-template>\n    </mat-menu>\n</ng-template>\n\n<ng-template #trangThaiTemplate let-dataItem>\n    <div [innerHtml]=\"dataItem.TinhTrangDisplay\"></div>\n</ng-template>\n\n<ng-template #soPhieuTemplate let-dataItem>\n    <a (click)=\"edit(dataItem.Id)\">{{dataItem.SoPhieu}}</a>\n</ng-template>\n\n<ng-template #ngayYeuCauTemplate let-dataItem>\n    {{dataItem.NgayYeuCauDisplay}}\n</ng-template>\n\n<ng-template #ngayDuyetTemplate let-dataItem>\n    {{dataItem.NgayDuyetDisplay}}\n</ng-template>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #soLuongDuTruTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTru | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuKienTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuKienTrongKy | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuTruTrKhoaTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruTrKhoa | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuTruKhDuocTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruKhDuoc | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #soLuongDuTruDirectorTemplate let-dataItem>\n    <span>{{dataItem.SoLuongDuTruDirector | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #khoDuTruTonTemplate let-dataItem>\n    <span>{{dataItem.KhoDuTruTon | number:'1.0':'vi-VN' }}</span>\n</ng-template>\n\n<ng-template #khoaGroupHeader let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n<ng-template #soLuongDuTruHeaderTemplate let-aggregates=\"aggregates\">\n    <strong>{{aggregates.SoLuongDuTru.sum | number:'1.0':'vi-VN' }}</strong>\n</ng-template>\n\n<ng-template #soLuongDuKienHeaderTemplate let-aggregates=\"aggregates\">\n    <strong>{{aggregates.SoLuongDuKienTrongKy.sum | number:'1.0':'vi-VN' }}</strong>\n</ng-template>\n\n<ng-template #benhNhanGroupHeaderTemplate let-value=\"value\">\n    <div [innerHTML]=\"value\" style=\"font-weight: normal;\"></div>\n</ng-template>\n\n<ng-template #donGiaTemplate let-dataItem>\n    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ngayTraTemplate let-dataItem>\n    {{dataItem.NgayTraDisplay}}\n</ng-template>\n\n<ng-template #ngayDieuTriTemplate let-dataItem>\n    {{dataItem.NgayDieuTriDisplay}}\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n    <app-textbox id=\"so-phieu\" fxFlex=\"20\" fxFlex.md=\"50\" fxFlex.sm=\"100\" [required]=\"true\"\n        [(model)]=\"duyetTraThuocTuBn.SoPhieu\" [disabled]=\"true\" label=\"Số phiếu\"\n        [validationerror]=\"'SoPhieu' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-combobox fxFlex=\"20\" fxFlex.md=\"50\" fxFlex.sm=\"100\" id=\"khoa-hoan-tra\" label=\"Khoa hoàn trả\"\n        [modelText]=\"duyetTraThuocTuBn.KhoaHoanTraDisplay\" [disabled]=\"true\" [required]=\"true\"\n        [(model)]=\"duyetTraThuocTuBn.KhoaHoanTraId\" url=\"\"\n        [validationerror]=\"'KhoaHoanTraDisplay' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox fxFlex=\"20\" fxFlex.md=\"50\" fxFlex.sm=\"100\" id=\"hoan-tra-ve-kho\" label=\"Hoàn trả về kho\"\n        [modelText]=\"duyetTraThuocTuBn.HoanTraVeKhoDisplay\" [disabled]=\"true\" [required]=\"true\"\n        [(model)]=\"duyetTraThuocTuBn.HoanTraVeKhoId\" url=\"\"\n        [validationerror]=\"'HoanTraVeKhoDisplay' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-combobox fxFlex=\"20\" fxFlex.md=\"50\" fxFlex.sm=\"100\" id=\"nguoi-yeu-cau\" label=\"Người yêu cầu\"\n        [modelText]=\"duyetTraThuocTuBn.NguoiYeuCauDisplay\" [disabled]=\"true\" [required]=\"true\"\n        [(model)]=\"duyetTraThuocTuBn.NguoiYeuCauId\" url=\"\"\n        [validationerror]=\"'NguoiYeuCauDisplay' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-datepicker id=\"ngay-yeu-cau\" fxFlex=\"20\" fxFlex.md=\"50\" fxFlex.sm=\"100\"\n        [(model)]=\"duyetTraThuocTuBn.NgayYeuCau\" [disabled]=\"true\" [required]=\"true\" label=\"Ngày yêu cầu\"\n        [validationerror]=\"'NgayYeuCau' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-textarea id=\"ghi-chu\" fxFlex=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" maxlength=\"4000\" label=\"Ghi chú\"\n        minHeight=\"20\" [(model)]=\"duyetTraThuocTuBn.GhiChu\"\n        [disabled]=\"duyetTraThuocTuBn != undefined && duyetTraThuocTuBn != null && duyetTraThuocTuBn.TinhTrang == true\">\n    </app-textarea>\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">Thông tin dược phẩm</h3>\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" style=\"width: 1px;\"\n        baseRoute=\"nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra\" [gridColumns]=\"gridColumns\"\n        [allowSortDefault]=\"true\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\"\n        [useActionDefault]=\"false\" [checkboxAble]=\"false\" [sort]=\"sort\" maxHeight=\"500\"\n        [urlGetData]=\"urlGetDataDuocPham\" [detailTemplate]=\"detailTemplateBenhNhan\" additionalSearchString=\"{{id}}\">\n    </app-grid>\n\n    <ng-template #detailTemplateBenhNhan let-dataItem>\n        <app-grid [gridColumns]=\"gridYeuCauChiTietColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\"\n            [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\"\n            [urlGetData]=\"urlGetDataBenhNhanDuyet\" [groups]=\"groupBenhNhan\"\n            additionalSearchString=\"{{dataItem.YeuCauTraDuocPhamTuBenhNhanId}};{{dataItem.DuocPhamBenhVienId}}\"\n            [autoHeight]=\"true\" [pageable]=\"false\">\n        </app-grid>\n    </ng-template>\n</div>\n\n<ng-template #nhomGroupHeaderTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n</ng-template>\n\n<ng-template #benhNhanGroupHeaderTemplate let-value=\"value\">\n    <div [innerHTML]=\"value\" style=\"font-weight: normal;\"></div>\n</ng-template>\n\n<ng-template #donGiaTemplate let-dataItem>\n    {{dataItem.DonGia | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #thanhTienTemplate let-dataItem>\n    {{dataItem.ThanhTien | number:'0.2-2':'vi-VN'}}\n</ng-template>\n\n<ng-template #ngayTraTemplate let-dataItem>\n    {{dataItem.NgayTraDisplay}}\n</ng-template>\n\n<ng-template #ngayDieuTriTemplate let-dataItem>\n    {{dataItem.NgayDieuTriDisplay}}\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".render-tu-choi {\n  justify-content: space-between !important;\n}\n\n.form-footer {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtdHJhLXR1LWJuL2R1eWV0LXRyYS10dS1ibi1kZXRhaWwvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcZHV5ZXQtdHJhLXR1LWJuXFxkdXlldC10cmEtdHUtYm4tZGV0YWlsXFxkdXlldC10cmEtdHUtYm4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC10cmEtdHUtYm4vZHV5ZXQtdHJhLXR1LWJuLWRldGFpbC9kdXlldC10cmEtdHUtYm4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC10cmEtdHUtYm4vZHV5ZXQtdHJhLXR1LWJuLWRldGFpbC9kdXlldC10cmEtdHUtYm4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlbmRlci10dS1jaG9pIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59IiwiLnJlbmRlci10dS1jaG9pIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DuyetTraThuocTuBnDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnDetailComponent", function() { return DuyetTraThuocTuBnDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");













let DuyetTraThuocTuBnDetailComponent = class DuyetTraThuocTuBnDetailComponent {
    constructor(route, dialog, authService, apiService, notificationService, router) {
        this.route = route;
        this.dialog = dialog;
        this.authService = authService;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.router = router;
        this.tinhTrangTxt = null;
        this.status = null;
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_11__["DocumentType"].DuyetTraThuocTuBenhNhan;
        this.id = this.route.snapshot.params.id;
    }
    Back() {
        this.router.navigate(['/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra'], {
            queryParamsHandling: 'preserve',
        });
    }
    Approve() {
        const confirm = 'duyệt';
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessLockTemplate, [confirm, 'phiếu trả dược phẩm']) }
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    const reqParam = {
                        Id: this.id,
                        GhiChu: this.shared.duyetTraThuocTuBn.GhiChu,
                        LaDichTruyen: this.shared.duyetTraThuocTuBn.LaDichTruyen,
                        HoanTraVeKhoId: this.shared.duyetTraThuocTuBn.HoanTraVeKhoId,
                    };
                    this.apiService.post('DuyetTraThuocTuBn/DuyetTraThuocTuBenhNhan', reqParam).subscribe(() => {
                        this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["DuyetTraTuBnMessage"].MessageApprove);
                        this.dialog.open(_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_12__["InPhieuHoanTraCompoment"], {
                            disableClose: true,
                            width: "1200px",
                            data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: this.id, LaDuocPham: true, LaTuTruc: false, DuocDuyet: true },
                        }).afterClosed().subscribe((result) => {
                            this.Back();
                        });
                    }, (err) => {
                        this.notificationService.showError(err.Message);
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    GetCurrentStatus(status) {
        this.status = status;
        this.tinhTrangTxt = status === true ? '<span class="green-txt">Đã duyệt</span>' :
            '<span class="orange-txt">Chờ duyệt</span>';
        setTimeout(() => {
            $('.orange-txt').css('color', 'orange');
            $('.red-txt').css('color', 'red');
            $('.green-txt').css('color', 'green');
        }, 50);
    }
};
DuyetTraThuocTuBnDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shared', { static: false })
], DuyetTraThuocTuBnDetailComponent.prototype, "shared", void 0);
DuyetTraThuocTuBnDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duyet-tra-thuoc-tu-bn-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-tra-tu-bn-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-tra-tu-bn-detail.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.scss")).default]
    })
], DuyetTraThuocTuBnDetailComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".duyet {\n  margin-left: 16px;\n}\n\n.kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtdHJhLXR1LWJuL2R1eWV0LXRyYS10dS1ibi1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxcbmhhcC14dWF0XFxkdW9jLXBoYW1cXGR1eWV0LXRyYS10dS1iblxcZHV5ZXQtdHJhLXR1LWJuLWxpc3RcXGR1eWV0LXRyYS10dS1ibi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC10cmEtdHUtYm4vZHV5ZXQtdHJhLXR1LWJuLWxpc3QvZHV5ZXQtdHJhLXR1LWJuLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtdHJhLXR1LWJuL2R1eWV0LXRyYS10dS1ibi1saXN0L2R1eWV0LXRyYS10dS1ibi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR1eWV0IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIuZHV5ZXQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmtoby10b25nLXRvbi1uZy10ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmtoby10b25nLXRvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: DuyetTraThuocTuBnListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnListComponent", function() { return DuyetTraThuocTuBnListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var _duyet_tra_tu_bn_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../duyet-tra-tu-bn.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.model.ts");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @iconify/icons-ic/twotone-print */ "./node_modules/@iconify/icons-ic/twotone-print.js");
/* harmony import */ var _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/in-phieu-hoan-tra/in-phieu-hoan-tra.component.ts");
/* harmony import */ var _duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.model.ts");
























let DuyetTraThuocTuBnListComponent = class DuyetTraThuocTuBnListComponent {
    constructor(route, router, notificationService, apiService, dialog, authService) {
        this.route = route;
        this.router = router;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.dialog = dialog;
        this.authService = authService;
        this.holdQuery = null;
        this.additionalSearchString = null;
        this.search = new _duyet_tra_tu_bn_model__WEBPACK_IMPORTED_MODULE_5__["Search"]();
        this.gridColumns = [];
        this.gridDuocPhamColumns = [];
        this.gridYeuCauChiTietColumns = [];
        this.gridResultColumns = [];
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_8___default.a;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_20___default.a;
        this.icPrint = _iconify_icons_ic_twotone_print__WEBPACK_IMPORTED_MODULE_21___default.a;
        this.urlGetDataDuocPham = 'DuyetTraThuocTuBn/GetDataForGridAsyncDuocPhamChild';
        this.urlGetDataBenhNhan = 'DuyetTraThuocTuBn/GetDataForGridAsyncBenhNhanChild';
        this.urlGetDataBenhNhanDuyet = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncBenhNhanChild";
        this.urlGetTotalPageBenhNhanDuyet = "YeuCauTraThuocTuBenhNhan/GetTotalPageForGridAsyncBenhNhanChild";
        this.query = null;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]();
        this.baseRoute = 'nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra';
        this.khos = [];
        this.hdts = [];
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_19___default.a;
        this.groups = [{ field: 'Nhom' }];
        this.sort = [{
                field: 'TinhTrang',
                dir: 'asc'
            },
            {
                field: 'Id',
                dir: 'asc'
            }];
        this.sortChild = [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
        this.groupBenhNhan = [{ field: 'BenhNhan' }];
        this.sortChildForChild = [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
        this.groupLoais = [{ field: 'Loai', dir: 'asc', aggregates: [] }];
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].DuyetTraThuocTuBenhNhan;
        let start = new Date();
        start.setHours(0, 0, 0, 0);
        let end = new Date();
        this.search.RangeYeuCau.startDate = start;
        this.search.RangeYeuCau.endDate = end;
        this.search.RangeDuyet = new _duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_model__WEBPACK_IMPORTED_MODULE_23__["rangeDate"]();
        if (this.route.snapshot.queryParams.holdQuery) {
            this.holdQuery = this.route.snapshot.queryParams.holdQuery;
        }
        if (this.holdQuery &&
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('adtSearchDuyetTraTuBn')) {
            this.additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].getItem('adtSearchDuyetTraTuBn');
            this.search = JSON.parse(this.additionalSearchString);
            if (this.search.RangeYeuCau) {
                if (this.search.RangeYeuCau.startDate) {
                    const startDate = new Date(this.search.RangeYeuCau.startDate);
                    this.search.RangeYeuCau.startDate = new Date(startDate);
                }
                if (this.search.RangeYeuCau.endDate) {
                    const endDate = new Date(this.search.RangeYeuCau.endDate);
                    this.search.RangeYeuCau.endDate = new Date(endDate);
                }
            }
            if (this.search.RangeDuyet) {
                if (this.search.RangeDuyet.startDate) {
                    const startDate = new Date(this.search.RangeDuyet.startDate);
                    this.search.RangeDuyet.startDate = new Date(startDate);
                }
                if (this.search.RangeDuyet.endDate) {
                    const endDate = new Date(this.search.RangeDuyet.endDate);
                    this.search.RangeDuyet.endDate = new Date(endDate);
                }
            }
        }
        else {
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('adtSearchDuyetTraTuBn', null);
            this.additionalSearchString = JSON.stringify(this.search);
        }
        this.gridColumns = [
            { Field: 'SoPhieu', Title: 'Số Phiếu', Width: 143, Sortable: true, Template: this.soPhieuTemplate },
            { Field: 'KhoaHoanTraDisplay', Title: 'Khoa Hoàn Trả', Sortable: true, Width: 165 },
            { Field: 'HoanTraVeKhoDisplay', Title: 'Hoàn Trả Về Kho', MinWidth: 300, Sortable: true },
            { Field: 'NguoiYeuCauDisplay', Title: 'Người Yêu Cầu', Width: 190, Sortable: true },
            { Field: 'NgayYeuCau', Title: 'Ngày Yêu Cầu', Width: 220, Sortable: true, Template: this.ngayYeuCauTemplate },
            { Field: 'TinhTrang', Title: 'Tình Trạng', Width: 180, Sortable: false, Template: this.trangThaiTemplate },
            { Field: 'NguoiDuyetDisplay', Title: 'Người Duyệt', Width: 190, Sortable: true },
            { Field: 'NgayDuyet', Title: 'Ngày Duyệt', Width: 220, Sortable: true, Template: this.ngayDuyetTemplate },
            { Field: "Action", Title: "", Width: 50, Template: this.actionTemplate, },
        ];
        this.gridDuocPhamColumns = [
            { Field: 'Nhom', Title: 'Nhóm', Width: 50, Sortable: true, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', Width: 120, Sortable: true },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 150, Sortable: false },
            { Field: 'Dvt', Title: 'ĐVT', Width: 150, Sortable: false },
            { Field: 'TongSlChiDinh', Title: 'Tổng SL chỉ định', Width: 150, Sortable: false },
            { Field: 'TongSlDaTra', Title: 'Tổng SL đã trả', Width: 150, Sortable: false, },
            { Field: 'TongSlTraLanNay', Title: 'Tổng SL trả lần này', Width: 150, Sortable: false }
        ];
        this.gridYeuCauChiTietColumns = [
            { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
            { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
            { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
            { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
            { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
        ];
        this.gridResultColumns = [
            {
                Field: 'Khoa',
                Title: '',
                Hidden: true,
                TemplateGroupHeader: this.khoaGroupHeader
            },
            { Field: 'Kho', Title: 'Kho', MinWidth: 100, Sortable: false },
            {
                Field: 'SoLuongDuTru', Title: 'SL dự trù', Width: 100, Sortable: false,
                TemplateGroupFooter: this.soLuongDuTruHeaderTemplate, Template: this.soLuongDuTruTemplate
            },
            {
                Field: 'SoLuongDuKienTrongKy', Title: 'SL dự kiến trong kỳ', Width: 170, Sortable: false,
                TemplateGroupFooter: this.soLuongDuKienHeaderTemplate, Template: this.soLuongDuKienTemplate
            },
        ];
    }
    CheckboxChange($event, dangChoDuyet = false, daDuyet = false) {
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra?holdQuery=true');
        if (dangChoDuyet) {
            this.search.DangChoDuyet = $event;
        }
        else if (daDuyet) {
            this.search.DaDuyet = $event;
        }
        this.Timkiem();
    }
    SetColorForTrangThai() {
        setTimeout(() => {
            $('.orange-txt').css('color', 'orange');
            $('.red-txt').css('color', 'red');
            $('.green-txt').css('color', 'green');
        }, 50);
    }
    Timkiem() {
        let QueryString = null;
        this.gridParent._additionalSearchString = null;
        QueryString = this.search.SearchString;
        this.router.navigateByUrl('/nhap-xuat/duoc-pham/hoan-tra/tu-benh-nhan/duyet-hoan-tra?holdQuery=true');
        const searchClone = JSON.parse(JSON.stringify(this.search));
        if (searchClone.RangeYeuCau.startDate) {
            const startDate = new Date(searchClone.RangeYeuCau.startDate);
            searchClone.RangeYeuCau.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.RangeYeuCau.endDate) {
            const endDate = new Date(searchClone.RangeYeuCau.endDate);
            searchClone.RangeYeuCau.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        if (searchClone.RangeDuyet.startDate) {
            const startDate = new Date(searchClone.RangeDuyet.startDate);
            searchClone.RangeDuyet.startDate = new Date(Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), startDate.getHours(), startDate.getMinutes()));
        }
        if (searchClone.RangeDuyet.endDate) {
            const endDate = new Date(searchClone.RangeDuyet.endDate);
            searchClone.RangeDuyet.endDate = new Date(Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getHours(), endDate.getMinutes()));
        }
        this.query = JSON.stringify(searchClone);
        const queryForHold = JSON.parse(JSON.stringify(searchClone));
        if (queryForHold.RangeYeuCau) {
            if (queryForHold.RangeYeuCau.startDate) {
                queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
            }
            if (queryForHold.RangeYeuCau.endDate) {
                queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
            }
        }
        if (queryForHold.RangeDuyet) {
            if (queryForHold.RangeDuyet.startDate) {
                queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
            }
            if (queryForHold.RangeDuyet.endDate) {
                queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
            }
        }
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('adtSearchDuyetTraTuBn', JSON.stringify(queryForHold));
        this.gridParent._additionalSearchString = this.query;
        this.gridParent.searchString = QueryString;
        this.gridParent.search();
    }
    clearSearch() {
        if (this.search.SearchString === '' || this.search.SearchString == null) {
            const searchClone = JSON.parse(JSON.stringify(this.search));
            if (searchClone.RangeYeuCau.startDate) {
                const startDate = new Date(searchClone.RangeYeuCau.startDate);
                searchClone.RangeYeuCau.startDate = new Date(startDate);
            }
            if (searchClone.RangeYeuCau.endDate) {
                const endDate = new Date(searchClone.RangeYeuCau.endDate);
                searchClone.RangeYeuCau.endDate = new Date(endDate);
            }
            if (searchClone.RangeDuyet.startDate) {
                const startDate = new Date(searchClone.RangeDuyet.startDate);
                searchClone.RangeDuyet.startDate = new Date(startDate);
            }
            if (searchClone.RangeDuyet.endDate) {
                const endDate = new Date(searchClone.RangeDuyet.endDate);
                searchClone.RangeDuyet.endDate = new Date(endDate);
            }
            this.query = JSON.stringify(searchClone);
            const queryForHold = JSON.parse(JSON.stringify(searchClone));
            if (queryForHold.RangeYeuCau) {
                if (queryForHold.RangeYeuCau.startDate) {
                    queryForHold.RangeYeuCau.startDate = new Date(queryForHold.RangeYeuCau.startDate);
                }
                if (queryForHold.RangeYeuCau.endDate) {
                    queryForHold.RangeYeuCau.endDate = new Date(queryForHold.RangeYeuCau.endDate);
                }
            }
            if (queryForHold.RangeDuyet) {
                if (queryForHold.RangeDuyet.startDate) {
                    queryForHold.RangeDuyet.startDate = new Date(queryForHold.RangeDuyet.startDate);
                }
                if (queryForHold.RangeDuyet.endDate) {
                    queryForHold.RangeDuyet.endDate = new Date(queryForHold.RangeDuyet.endDate);
                }
            }
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_4__["LocalStorageHelper"].setItem('adtSearchDuyetTraTuBn', JSON.stringify(queryForHold));
            if (this.gridParent) {
                this.gridParent._additionalSearchString = this.query;
                this.gridParent.searchString = '';
                this.gridParent.search();
            }
        }
    }
    onKey(event) {
        if (event.keyCode === 13) {
            this.Timkiem();
        }
    }
    exportExcel() {
        const self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Process)) {
            self.showPopupLoadingData();
            self.apiService.postExportExcel('DuyetTraThuocTuBn/ExportDuyetPhieuTraThuocTuBn', self.gridParent._gridQueryInfo).subscribe(resultData => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_15__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'DuyetPhieuTraThuocTuBn' + dateTimeNow.getFullYear() + '.xlsx');
                self.closePopupLoadingData();
            }, (err) => {
                self.notificationService.showError(err.Message);
                self.closePopupLoadingData();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
    edit(id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_14__["SecurityOperation"].Update)) {
            this.router.navigateByUrl(this.baseRoute + '/chi-tiet/' + id + '?holdQuery=true');
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_18__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupDeletePhieu() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xóa phiếu trả thuốc...' }
        });
    }
    delete(id) {
        this.gridParent.delete(id);
    }
    loadingPage() {
        this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang tải dữ liệu..." },
        });
    }
    closePopupLoadingDataPrint() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    inPhieu(id) {
        //     var self = this;
        //     let objIn = {
        //         YeuCauTraDuocPhamTuBenhNhanId: id,
        //         HostingName: window.location.protocol + "//" + window.location.host,
        //     };
        //     self.loadingPage();
        //     self.apiService.post<any>("YeuCauTraThuocTuBenhNhan/InPhieuYeuCauTraThuocTuBenhNhan", objIn).subscribe(
        //         resData => {
        //             self.closePopupLoadingDataPrint();
        //             if (resData != undefined && resData != null) {
        //                 self.dialog.open(PhieuTraThuocTuBenhNhanPopupComponent, {
        //                     disableClose: true,
        //                     width: "1200px",
        //                     data: resData,
        //                 }).afterClosed().subscribe(() => {
        //                 });
        //             }
        //         },
        //         (err: ApiError) => {
        //             self.validationErrors = err.ValidationErrors;
        //             if (err.Message != "Validation Failed") {
        //                 self.notificationService.showError(err.Message);
        //             }
        //             self.closePopupLoadingDataPrint();
        //         }
        //     )
        // }
        this.dialog.open(_duyet_hoan_tra_duoc_pham_in_phieu_hoan_tra_in_phieu_hoan_tra_component__WEBPACK_IMPORTED_MODULE_22__["InPhieuHoanTraCompoment"], {
            disableClose: true,
            width: "1200px",
            data: { Title: "PHIẾU TRẢ THUỐC/ VẬT TƯ Y TẾ", YeuCauHoanTraDuocPhamVatTuId: id, LaDuocPham: true, LaTuTruc: false, DuocDuyet: true },
        }).afterClosed().subscribe((result) => { });
    }
};
DuyetTraThuocTuBnListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_17__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "nhomGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: false })
], DuyetTraThuocTuBnListComponent.prototype, "gridParent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soPhieuTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soPhieuTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayYeuCauTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "ngayYeuCauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDuyetTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "ngayDuyetTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuTruTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuKienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruTrKhoaTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuTruTrKhoaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruKhDuocTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuTruKhDuocTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruDirectorTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuTruDirectorTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoDuTruTonTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "khoDuTruTonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoTongTonTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "khoTongTonTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hdChuaNhapTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "hdChuaNhapTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('khoaGroupHeader', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "khoaGroupHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuTruHeaderTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuTruHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('soLuongDuKienHeaderTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "soLuongDuKienHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDieuTriTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "ngayDieuTriTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTraTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "ngayTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanGroupHeaderTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "benhNhanGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], DuyetTraThuocTuBnListComponent.prototype, "thanhTienTemplate", void 0);
DuyetTraThuocTuBnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duyet-tra-thuoc-tu-bn-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-tra-tu-bn-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-tra-tu-bn-list.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.scss")).default]
    })
], DuyetTraThuocTuBnListComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: DuyetTraThuocTuBnRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnRoutingModule", function() { return DuyetTraThuocTuBnRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var _duyet_tra_tu_bn_list_duyet_tra_tu_bn_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.ts");
/* harmony import */ var _duyet_tra_tu_bn_detail_duyet_tra_tu_bn_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.ts");








const routes = [
    {
        path: '',
        component: _duyet_tra_tu_bn_list_duyet_tra_tu_bn_list_component__WEBPACK_IMPORTED_MODULE_6__["DuyetTraThuocTuBnListComponent"],
        data: {
            title: 'Duyệt Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetTraThuocTuBenhNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _duyet_tra_tu_bn_detail_duyet_tra_tu_bn_detail_component__WEBPACK_IMPORTED_MODULE_7__["DuyetTraThuocTuBnDetailComponent"],
        data: {
            title: 'Chi Tiết Duyệt Phiếu Trả Thuốc Từ Người Bệnh Nội Trú',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetTraThuocTuBenhNhan,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_3__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_5__["PermisssionGuard"]]
    },
];
let DuyetTraThuocTuBnRoutingModule = class DuyetTraThuocTuBnRoutingModule {
};
DuyetTraThuocTuBnRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DuyetTraThuocTuBnRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".kho-tong-ton-ng-template {\n  display: inline;\n  white-space: nowrap;\n}\n\n.kho-tong-ton-label {\n  display: inline;\n  text-overflow: ellipsis;\n}\n\n.info {\n  margin-bottom: -8px;\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtdHJhLXR1LWJuL2R1eWV0LXRyYS10dS1ibi1zaGFyZWQvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxuaGFwLXh1YXRcXGR1b2MtcGhhbVxcZHV5ZXQtdHJhLXR1LWJuXFxkdXlldC10cmEtdHUtYm4tc2hhcmVkXFxkdXlldC10cmEtdHUtYm4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vbmhhcC14dWF0L2R1b2MtcGhhbS9kdXlldC10cmEtdHUtYm4vZHV5ZXQtdHJhLXR1LWJuLXNoYXJlZC9kdXlldC10cmEtdHUtYm4tc2hhcmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL25oYXAteHVhdC9kdW9jLXBoYW0vZHV5ZXQtdHJhLXR1LWJuL2R1eWV0LXRyYS10dS1ibi1zaGFyZWQvZHV5ZXQtdHJhLXR1LWJuLXNoYXJlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5raG8tdG9uZy10b24tbmctdGVtcGxhdGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5raG8tdG9uZy10b24tbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn0iLCIua2hvLXRvbmctdG9uLW5nLXRlbXBsYXRlIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ua2hvLXRvbmctdG9uLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: DuyetTraThuocTuBnSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnSharedComponent", function() { return DuyetTraThuocTuBnSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/baseline-info */ "./node_modules/@iconify/icons-ic/baseline-info.js");
/* harmony import */ var _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_5__);






let DuyetTraThuocTuBnSharedComponent = class DuyetTraThuocTuBnSharedComponent {
    constructor(route, baseService) {
        this.route = route;
        this.baseService = baseService;
        this.gridColumns = [];
        this.gridYeuCauChiTietColumns = [];
        this.urlGetDataChuaDuyetGrid = 'TongHopDuTruMuaVatTuTaiGiamDoc/GetDataForGridChildChuaDuyetAsync';
        this.urlGetDataDuyetGrid = 'TongHopDuTruMuaVatTuTaiGiamDoc/GetDataForGridChildDuyetAsync';
        this.urlGetDataGridChild = 'TongHopDuTruMuaVatTuTaiGiamDoc/GetDataForGridDuyetDetail';
        this.urlGetDataBenhNhanDuyet = "YeuCauTraThuocTuBenhNhan/GetDataForGridAsyncBenhNhanChild";
        this.khos = [];
        this.hdts = [];
        this.duyetTraThuocTuBn = {};
        this.groupBenhNhan = [{ field: 'BenhNhan' }];
        this.urlGetDataDuocPham = 'DuyetTraThuocTuBn/GetDataForGridAsyncDuocPhamChild';
        this.urlGetDataBenhNhan = 'DuyetTraThuocTuBn/GetDataForGridAsyncBenhNhanChild';
        this.sort = [
            {
                field: 'Id',
                dir: 'asc'
            }
        ];
        this.icInfo = _iconify_icons_ic_baseline_info__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.groups = [{
                field: 'Khoa', aggregates: [
                    { field: 'SoLuongDuTru', aggregate: 'sum' },
                    { field: 'SoLuongDuKienTrongKy', aggregate: 'sum' }
                ]
            }];
        this.fireStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].DuyetTraThuocTuBenhNhan;
        this.gridColumns = [
            { Field: 'Nhom', Title: 'Nhóm', Width: 50, Hidden: true, TemplateGroupHeader: this.nhomGroupHeaderTemplate },
            { Field: 'DuocPham', Title: 'Dược phẩm', Width: 120 },
            { Field: 'HoatChat', Title: 'Hoạt chất', Width: 150, Sortable: false },
            { Field: 'Dvt', Title: 'ĐVT', Width: 150, Sortable: false },
            { Field: 'TongSlChiDinh', Title: 'Tổng SL chỉ định', Width: 150, Sortable: false },
            { Field: 'TongSlDaTra', Title: 'Tổng SL đã trả', Width: 150, Sortable: false },
            { Field: 'TongSlTraLanNay', Title: 'Tổng SL trả lần này', Width: 150, Sortable: false }
        ];
        this.gridYeuCauChiTietColumns = [
            { Field: "NgayDieuTri", Title: "Ngày Điều Trị", Width: 120, Sortable: false, Template: this.ngayDieuTriTemplate },
            { Field: "NgayTra", Title: "Ngày Trả", Width: 150, Sortable: false, Template: this.ngayTraTemplate },
            { Field: "BenhNhan", Title: "", Width: 150, Sortable: false, Hidden: true, TemplateGroupHeader: this.benhNhanGroupHeaderTemplate },
            { Field: "NhanVienYeuCau", Title: "Người trả", Width: 150, Sortable: false },
            { Field: "SoLuongTraLanNay", Title: "SL trả lần này", Width: 150, Sortable: false },
            { Field: "DonGia", Title: "Đơn giá", Width: 150, Sortable: false, Template: this.donGiaTemplate },
            { Field: "ThanhTien", Title: "Thành tiền", Width: 150, Sortable: false, Template: this.thanhTienTemplate },
        ];
        if (this.id) {
            this.getById(this.id);
        }
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            this.duyetTraThuocTuBn = Object.assign({}, resultData);
            this.fireStatus.emit(this.duyetTraThuocTuBn.TinhTrang);
        });
    }
};
DuyetTraThuocTuBnSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayDieuTriTemplate', { static: true })
], DuyetTraThuocTuBnSharedComponent.prototype, "ngayDieuTriTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngayTraTemplate', { static: true })
], DuyetTraThuocTuBnSharedComponent.prototype, "ngayTraTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('benhNhanGroupHeaderTemplate', { static: true })
], DuyetTraThuocTuBnSharedComponent.prototype, "benhNhanGroupHeaderTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('donGiaTemplate', { static: true })
], DuyetTraThuocTuBnSharedComponent.prototype, "donGiaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thanhTienTemplate', { static: true })
], DuyetTraThuocTuBnSharedComponent.prototype, "thanhTienTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DuyetTraThuocTuBnSharedComponent.prototype, "fireStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nhomGroupHeaderTemplate', { static: true })
], DuyetTraThuocTuBnSharedComponent.prototype, "nhomGroupHeaderTemplate", void 0);
DuyetTraThuocTuBnSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-duyet-tra-thuoc-tu-bn-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duyet-tra-tu-bn-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duyet-tra-tu-bn-shared.component.scss */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.scss")).default]
    })
], DuyetTraThuocTuBnSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.model.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.model.ts ***!
  \*******************************************************************************************/
/*! exports provided: DuyetTraThuocTuBn, DuyetTraThuocTuBnTheoDuocPham, DuyetTraThuocTuBnTheoDuocPhamVsYctn, Search, RangeDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBn", function() { return DuyetTraThuocTuBn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnTheoDuocPham", function() { return DuyetTraThuocTuBnTheoDuocPham; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnTheoDuocPhamVsYctn", function() { return DuyetTraThuocTuBnTheoDuocPhamVsYctn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeDate", function() { return RangeDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DuyetTraThuocTuBn {
    constructor(SoPhieu = null, KhoaHoanTraId = null, KhoaHoanTraDisplay = null, HoanTraVeKhoId = null, HoanTraVeKhoDisplay = null, NguoiYeuCauDisplay = null, NguoiYeuCauId = null, NguoiDuyetId = null, NguoiDuyetDisplay = null, Id = null, NgayYeuCau = null, NgayYeuCauDisplay = null, NgayDuyet = null, NgayDuyetDisplay = null, GhiChu = null, LaDichTruyen = null, TinhTrang = null, TinhTrangDisplay = null) {
        this.SoPhieu = SoPhieu;
        this.KhoaHoanTraId = KhoaHoanTraId;
        this.KhoaHoanTraDisplay = KhoaHoanTraDisplay;
        this.HoanTraVeKhoId = HoanTraVeKhoId;
        this.HoanTraVeKhoDisplay = HoanTraVeKhoDisplay;
        this.NguoiYeuCauDisplay = NguoiYeuCauDisplay;
        this.NguoiYeuCauId = NguoiYeuCauId;
        this.NguoiDuyetId = NguoiDuyetId;
        this.NguoiDuyetDisplay = NguoiDuyetDisplay;
        this.Id = Id;
        this.NgayYeuCau = NgayYeuCau;
        this.NgayYeuCauDisplay = NgayYeuCauDisplay;
        this.NgayDuyet = NgayDuyet;
        this.NgayDuyetDisplay = NgayDuyetDisplay;
        this.GhiChu = GhiChu;
        this.LaDichTruyen = LaDichTruyen;
        this.TinhTrang = TinhTrang;
        this.TinhTrangDisplay = TinhTrangDisplay;
    }
}
class DuyetTraThuocTuBnTheoDuocPham {
    constructor(Nhom = null, DuocPham = null, HoatChat = null, Dvt = null, TongSlChiDinh = null, TongSlDaTra = null, TongSlTraLanNay = null, Id = null) {
        this.Nhom = Nhom;
        this.DuocPham = DuocPham;
        this.HoatChat = HoatChat;
        this.Dvt = Dvt;
        this.TongSlChiDinh = TongSlChiDinh;
        this.TongSlDaTra = TongSlDaTra;
        this.TongSlTraLanNay = TongSlTraLanNay;
        this.Id = Id;
    }
}
class DuyetTraThuocTuBnTheoDuocPhamVsYctn {
    constructor(NgayDieuTri = null, NgayTra = null, BenhNhan = null, NguoiTra = null, SlChiDinh = null, SlDaTra = null, SlTraLanNay = null, DonGia = null, ThanhTien = null, Id = null) {
        this.NgayDieuTri = NgayDieuTri;
        this.NgayTra = NgayTra;
        this.BenhNhan = BenhNhan;
        this.NguoiTra = NguoiTra;
        this.SlChiDinh = SlChiDinh;
        this.SlDaTra = SlDaTra;
        this.SlTraLanNay = SlTraLanNay;
        this.DonGia = DonGia;
        this.ThanhTien = ThanhTien;
        this.Id = Id;
    }
}
class Search {
    constructor(DangChoDuyet = true, DaDuyet = false, SearchString = null, 
    // tslint:disable-next-line: no-use-before-declare
    RangeYeuCau = new RangeDate(), 
    // tslint:disable-next-line: no-use-before-declare
    RangeDuyet = new RangeDate()) {
        this.DangChoDuyet = DangChoDuyet;
        this.DaDuyet = DaDuyet;
        this.SearchString = SearchString;
        this.RangeYeuCau = RangeYeuCau;
        this.RangeDuyet = RangeDuyet;
    }
}
class RangeDate {
    constructor(startDate = null, endDate = null) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.module.ts ***!
  \********************************************************************************************/
/*! exports provided: DuyetTraThuocTuBnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnModule", function() { return DuyetTraThuocTuBnModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _duyet_tra_tu_bn_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duyet-tra-tu-bn-routing.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm2015/index.js");
/* harmony import */ var _duyet_tra_tu_bn_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./duyet-tra-tu-bn.service */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.service.ts");
/* harmony import */ var _duyet_tra_tu_bn_list_duyet_tra_tu_bn_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-list/duyet-tra-tu-bn-list.component.ts");
/* harmony import */ var _duyet_tra_tu_bn_detail_duyet_tra_tu_bn_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-detail/duyet-tra-tu-bn-detail.component.ts");
/* harmony import */ var _duyet_tra_tu_bn_shared_duyet_tra_tu_bn_shared_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn-shared/duyet-tra-tu-bn-shared.component.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var _duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module */ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-hoan-tra-duoc-pham/duyet-hoan-tra-duoc-pham.module.ts");




















let DuyetTraThuocTuBnModule = class DuyetTraThuocTuBnModule {
};
DuyetTraThuocTuBnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _duyet_tra_tu_bn_list_duyet_tra_tu_bn_list_component__WEBPACK_IMPORTED_MODULE_15__["DuyetTraThuocTuBnListComponent"],
            _duyet_tra_tu_bn_detail_duyet_tra_tu_bn_detail_component__WEBPACK_IMPORTED_MODULE_16__["DuyetTraThuocTuBnDetailComponent"],
            _duyet_tra_tu_bn_shared_duyet_tra_tu_bn_shared_component__WEBPACK_IMPORTED_MODULE_17__["DuyetTraThuocTuBnSharedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _duyet_tra_tu_bn_routing_module__WEBPACK_IMPORTED_MODULE_3__["DuyetTraThuocTuBnRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_12__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_13__["DropDownButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            // YeuCauTraThuocTuBenhNhanModule,
            _duyet_hoan_tra_duoc_pham_duyet_hoan_tra_duoc_pham_module__WEBPACK_IMPORTED_MODULE_19__["DuyetHoanTraDuocPhamModule"]
        ],
        providers: [
            _duyet_tra_tu_bn_service__WEBPACK_IMPORTED_MODULE_14__["DuyetTraThuocTuBnService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_18__["BaseService"], useClass: _duyet_tra_tu_bn_service__WEBPACK_IMPORTED_MODULE_14__["DuyetTraThuocTuBnService"] },
        ]
    })
], DuyetTraThuocTuBnModule);



/***/ }),

/***/ "./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/nhap-xuat/duoc-pham/duyet-tra-tu-bn/duyet-tra-tu-bn.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: DuyetTraThuocTuBnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuyetTraThuocTuBnService", function() { return DuyetTraThuocTuBnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let DuyetTraThuocTuBnService = class DuyetTraThuocTuBnService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'DuyetTraThuocTuBn';
    }
};
DuyetTraThuocTuBnService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DuyetTraThuocTuBnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DuyetTraThuocTuBnService);



/***/ })

}]);
//# sourceMappingURL=nhap-xuat-duoc-pham-duyet-tra-tu-bn-duyet-tra-tu-bn-module-es2015.js.map