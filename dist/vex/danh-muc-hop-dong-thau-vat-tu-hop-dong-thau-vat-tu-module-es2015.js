(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["danh-muc-hop-dong-thau-vat-tu-hop-dong-thau-vat-tu-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Hợp Đồng Thầu',Path:''}\n    ,{Title:'Vật Tư',Path:''}\n    ,{Title:'Hợp Đồng Thầu Vật Tư',Path:'/danh-muc/hop-dong-thau/vat-tu', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Thêm Hợp Đồng Thầu Vật Tư</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n                <app-hop-dong-thau-vat-tu-shared>\n                </app-hop-dong-thau-vat-tu-shared>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.html":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.html ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"[\n                  {Title:'Danh Mục', Path:''}\n                  ,{Title:'Hợp Đồng Thầu', Path:''}\n                  ,{Title:'Vật Tư', Path:''}\n                  ,{Title:'Hợp Đồng Thầu Vật Tư', Path:'/danh-muc/hop-dong-thau/vat-tu', Active:true}\n                  ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid baseRoute=\"/danh-muc/hop-dong-thau/vat-tu\" [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"true\" [lazyLoadPage]=\"true\" [detailTemplate]=\"detailTemplate\" [showExportExcel]=\"true\" (extExportExcel)=\"exportExcel()\"\n                #gridHdtCha>\n            </app-grid>\n\n            <ng-template #detailTemplate let-dataItem>\n                <app-grid baseRoute=\"/danh-muc/hop-dong-thau/vat-tu\" [gridColumns]=\"gridChildColumns\" [documentType]=\"documentType\" [useAddDeault]=\"false\" [useHeaderDefault]=\"false\" [useActionDefault]=\"false\" [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [urlGetData]=\"urlGetDataGridChild\"\n                    [urlGetTotalPage]=\"urlGetTotalPageGridChild\" additionalSearchString=\"{{dataItem.Id}}\" [autoHeight]=\"true\">\n                </app-grid>\n            </ng-template>\n            <ng-template #giaTemplate let-dataItem>\n                {{dataItem.Gia | number:'0.2-2':'vi-VN'}}\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n\n    <h3 fxFlex=\"100%\" class=\"sub-title mt-0\">THÔNG TIN CHUNG\n    </h3>\n\n    <app-combobox id=\"nha-thau-vat-tu-lst\" fxFlex=\"25%\" fxFlex.sm=\"25%\" label=\"Nhà Cung Cấp\"\n        url=\"HopDongThauDuocPham/GetListNhaThau\" [(model)]=\"hopDongThauVatTu.NhaThauId\"\n        [modelText]=\"hopDongThauVatTu.NhaThau\" class=\"item-no-padding\" [template]=\"nhaThauTemplate\"\n        [templateHeader]=\"nhaThauTemplateHeader\" [required]=\"true\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'NhaThauId' | validationerror:validationErrors\">\n        <ng-template #nhaThauTemplateHeader let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <th width=\"30%\">Tên</th>\n                    <th>Địa Chỉ</th>\n                </tr>\n            </table>\n        </ng-template>\n        <ng-template #nhaThauTemplate let-dataItem>\n            <table width=\"100%\" class=\"table-combobox\">\n                <tr>\n                    <td width=\"30%\">{{dataItem.Ten}}</td>\n                    <td>{{dataItem.DiaChi}}</td>\n                </tr>\n            </table>\n        </ng-template>\n    </app-combobox>\n\n    <app-textbox id=\"SoHopDong\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauVatTu.SoHopDong\" label=\"Số Hợp Đồng\"\n        maxlength=\"50\" [disabled]=\"isDisableUpdate\">\n    </app-textbox>\n\n    <app-textbox id=\"SoQuyetDinh\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [(model)]=\"hopDongThauVatTu.SoQuyetDinh\"\n        [required]=\"true\" label=\"Số Quyết Định\" maxlength=\"50\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'SoQuyetDinh' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-datepicker id=\"CongBo\" fxFlex=\"25%\" fxFlex.sm=\"25%\" [required]=\"true\" [(model)]=\"hopDongThauVatTu.CongBo\"\n        (modelChange)=\"ngayChange($event, true)\" label=\"Công Bố\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'CongBo' | validationerror:validationErrors\">\n    </app-datepicker>\n\n\n\n    <app-datepicker id=\"NgayKy\" fxFlex=\"25%\" fxFlex.sm=\"50%\" [(model)]=\"hopDongThauVatTu.NgayKy\" label=\"Ngày Ký\"\n        [disabled]=\"isDisableUpdate\">\n    </app-datepicker>\n\n    <app-datepicker id=\"NgayHieuLuc\" fxFlex=\"25%\" fxFlex.sm=\"50%\" [required]=\"true\"\n        [(model)]=\"hopDongThauVatTu.NgayHieuLuc\" label=\"Ngày Hiệu Lực\" [disabled]=\"isDisableUpdate\"\n        (modelChange)=\"ngayChange($event, false)\" [validationerror]=\"'NgayHieuLuc' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-datepicker id=\"NgayHetHan\" fxFlex=\"25%\" fxFlex.sm=\"50%\" [required]=\"true\"\n        [(model)]=\"hopDongThauVatTu.NgayHetHan\" label=\"Ngày Hết Hạn\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'NgayHetHan' | validationerror:validationErrors\">\n    </app-datepicker>\n\n    <app-textboxnumeric id=\"Nam\" fxFlex=\"25%\" fxFlex.sm=\"50%\" [(model)]=\"hopDongThauVatTu.Nam\" [required]=\"true\"\n        label=\"Năm\" [min]=\"minYear\" [max]=\"maxYear\" [format]=\"'0'\" [spinners]=\"false\" [disabled]=\"isDisableUpdate\"\n        [validationerror]=\"'Nam' | validationerror:validationErrors\">\n    </app-textboxnumeric>\n\n\n\n    <app-combobox id=\"LoaiThau\" fxFlex=\"50%\" fxFlex.sm=\"100%\" [(model)]=\"hopDongThauVatTu.LoaiThau\"\n        [autoSelectFirstItem]=\"true\" bind=\"true\" [required]=\"true\" [modelText]=\"hopDongThauVatTu.TenLoaiThau\"\n        label=\"Loại Thầu\" [disabled]=\"isDisableUpdate\" url=\"HopDongThauDuocPham/GetListLoaiThau\"\n        [validationerror]=\"'LoaiThau' | validationerror:validationErrors\">\n    </app-combobox>\n\n    <app-textbox id=\"NhomThau\" fxFlex=\"25%\" fxFlex.sm=\"50%\" [(model)]=\"hopDongThauVatTu.NhomThau\" [required]=\"true\"\n        [disabled]=\"isDisableUpdate\" label=\"Nhóm Thầu\" maxlength=\"50\"\n        [validationerror]=\"'NhomThau' | validationerror:validationErrors\">\n    </app-textbox>\n\n    <app-textbox id=\"GoiThau\" fxFlex=\"25%\" fxFlex.sm=\"50%\" [(model)]=\"hopDongThauVatTu.GoiThau\" [required]=\"true\"\n        [disabled]=\"isDisableUpdate\" label=\"Gói Thầu\" maxlength=\"2\"\n        [validationerror]=\"'GoiThau' | validationerror:validationErrors\">\n    </app-textbox>\n\n\n\n    <h3 fxFlex=\"100%\" class=\"sub-title\">THÔNG TIN CHI TIẾT\n    </h3>\n\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"showFormDetail\">\n        <button (click)=\"ThemVatTu()\" type=\"button\" color=\"primary\" [disabled]=\"isDisableUpdate\" mat-raised-button>\n            Thêm Vật Tư</button>\n    </div>\n\n    <div fxFlex=\"100%\" fxFlex.sm=\"100%\" [hidden]=\"!showFormDetail\">\n        <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n            <app-combobox id=\"vat-tu-cmb\" fxFlex=\"40%\" fxFlex.sm=\"100%\" label=\"Vật Tư\"\n                url=\"HopDongThauVatTu/GetListVatTu\" (keyup)=\"onKeyAddVt($event)\" [reloadForGrid]=\"true\"\n                [queryInfo]=\"{ParameterDependencies:'{VatTuId:' + hopDongThauVatTuChiTiet.VatTuId +'}', Take: 50}\"\n                (openCombobox)=\"openComboboxHdt($event)\" [(model)]=\"hopDongThauVatTuChiTiet.VatTuId\"\n                [modelText]=\"hopDongThauVatTuChiTiet.VatTu\" class=\"item-no-padding\" [template]=\"vatTuTemplate\"\n                [templateHeader]=\"vatTuTemplateHeader\" [required]=\"true\"\n                [validationerror]=\"'VatTuId' | validationerror:validationErrorsForDetail\"\n                (selectionChange)=\"onChangeVatTu($event)\">\n                <ng-template #vatTuTemplateHeader let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <th width=\"30%\">Mã</th>\n                            <th width=\"30%\">Tên</th>\n                        </tr>\n                    </table>\n                </ng-template>\n                <ng-template #vatTuTemplate let-dataItem>\n                    <table width=\"100%\" class=\"table-combobox\">\n                        <tr>\n                            <td width=\"30%\">{{dataItem.Ma}}</td>\n                            <td width=\"30%\">{{dataItem.Ten}}</td>\n                        </tr>\n                    </table>\n                </ng-template>\n            </app-combobox>\n\n            <app-textboxnumeric id=\"Gia\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"hopDongThauVatTuChiTiet.Gia\"\n                (keyup)=\"onKeyAddVt($event)\" [step]=\"100\" [required]=\"true\" label=\"Giá\" decimals=\"2\" format=\"n2\"\n                [validationerror]=\"'Gia' | validationerror:validationErrorsForDetail\">\n            </app-textboxnumeric>\n\n            <app-textboxnumeric id=\"SoLuong\" fxFlex=\"10%\" fxFlex.sm=\"10%\" [(model)]=\"hopDongThauVatTuChiTiet.SoLuong\"\n                [spinners]=\"false\" (keyup)=\"onKeyAddVt($event)\" [required]=\"true\" label=\"Số Lượng\" [decimals]=\"2\"\n                [format]=\"format\" [validationerror]=\"'SoLuong' | validationerror:validationErrorsForDetail\">\n            </app-textboxnumeric>\n\n            <app-checkbox [disabled]=\"disabledSuDungTaiBenhVien==true\" id=\"SuDungTaiBenhVien\" fxFlex=\"15%\"\n                fxFlex.sm=\"15%\" class=\"mt-4\" [(model)]=\"hopDongThauVatTuChiTiet.SuDungTaiBenhVien\"\n                label=\"Sử dụng tại bệnh viện\" (modelChange)=\"modelChangeSuDungTaiBenhVien($event)\">\n            </app-checkbox>\n\n            <app-textbox [disabled]=\"disabledSuDungTaiBenhVien==true\" fxFlex=\"10%\" id=\"MaVatTuBenhVien\"\n                label=\"Mã vật tư bệnh viện\" maxlength=\"250\" [(model)]=\"hopDongThauVatTuChiTiet.MaVatTuBenhVien\"\n                [required]=\"true\" [validationerror]=\"'MaVatTuBenhVien' | validationerror:validationErrorsForDetail\"\n                *ngIf=\"hopDongThauVatTuChiTiet.SuDungTaiBenhVien == true\">\n            </app-textbox>\n            <app-dropdownlist [disabled]=\"disabledSuDungTaiBenhVien==true\" id=\"loai-su-dung\" fxFlex=\"15%\"\n                fxFlex.sm=\"25%\" [(model)]=\"hopDongThauVatTuChiTiet.LoaiSuDungId\" [bind]=\"true\" label=\"Loại sử dụng\"\n                url=\"VatTuBenhVien/GetLoaiSuDung\" [required]=\"true\"\n                [validationerror]=\"'LoaiSuDungId' | validationerror:validationErrorsForDetail\"\n                *ngIf=\"hopDongThauVatTuChiTiet.SuDungTaiBenhVien == true\"\n                (selectionChange)=\"onChangeLoaiSuDung($event)\">\n            </app-dropdownlist>\n            <div fxFlex=\"100%\" fxFlex.sm=\"100%\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n                    <div class=\"form-footer\">\n                        <button type=\"button\" class=\"mr-1\" mat-button (click)=\"ClearData()\">\n                            Hủy</button>\n                        <button *ngIf=\"!isUpdate\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"Add()\">\n                            Thêm</button>\n                        <button *ngIf=\"isUpdate\" type=\"button\" color=\"primary\" mat-raised-button (click)=\"Update()\">\n                            Cập Nhật</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <app-grid fxFlex=\"100%\" fxFlex.sm=\"100%\" [height]=\"300\" [gridDataSource]=\"gridDataSource\" [useHeaderDefault]=\"false\"\n        [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [useAddDeault]=\"false\"\n        [checkboxAble]=\"false\" [lazyLoadPage]=\"true\" [autoHeight]=\"true\" style=\"width: 1px;\" [pageable]=\"false\"\n        #gridHdtVt>\n    </app-grid>\n\n    <ng-template #giaTemplate let-dataItem>\n        {{dataItem.Gia | number:'0.2-2':'vi-VN'}}\n    </ng-template>\n\n    <ng-template #maVatTuTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <p>{{dataItem.MaVatTuBenhVien}}</p>\n        <app-validationerrorother [validationerror]=\"'HopDongThauVatTuChiTiets['+rowIndex+'].MaVatTuBenhVien' | validationerror:validationErrors\">\n        </app-validationerrorother>\n    </ng-template>\n\n    <ng-template #vatTuThauTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <p>{{dataItem.VatTu}}</p>\n        <app-validationerrorother [validationerror]=\"'HopDongThauVatTuChiTiets['+rowIndex+'].VatTuId' | validationerror:validationErrors\">\n        </app-validationerrorother>\n    </ng-template>\n\n    <ng-template #trangThaiTemplate let-dataItem>\n\n        <button (click)=\"$event.stopPropagation()\" kendoTooltip title=\"Hành động\" [matMenuTriggerFor]=\"actionsMenu\"\n            mat-icon-button type=\"button\" [disabled]=\"isDisableUpdate\">\n            <mat-icon [icIcon]=\"icMoreHoriz\"></mat-icon>\n        </button>\n        <mat-menu #actionsMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n            <ng-template let-customer=\"customer\" matMenuContent>\n                <button (click)=\"BindValue(dataItem)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icEdit\"></mat-icon>\n                    <span>Sửa</span>\n                </button>\n                <button (click)=\"ConfirmDelete(dataItem)\" mat-menu-item>\n                    <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                    <span>Xóa</span>\n                </button>\n            </ng-template>\n        </mat-menu>\n    </ng-template>\n</div>\n\n<div *ngIf=\"!isCreate\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <!-- // code này cheat quá nhiều -->\n    <!-- <app-formfooter [bodyComponent]=\"this\" type=\"update\" [read]=\"isDisableUpdate\" (updated)=\"onUpdated()\"\n        (validateClient)=\"onValidate($event)\">\n    </app-formfooter> -->\n\n    <app-formfooter [bodyComponent]=\"this\" type=\"update\" [read]=\"isDisableUpdate\" (updated)=\"onUpdated()\">\n    </app-formfooter>\n</div>\n<div *ngIf=\"isCreate\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\">\n    <!-- // code này cheat quá nhiều -->\n    <!-- <app-formfooter [bodyComponent]=\"this\" type=\"create\" (created)=\"onCreated()\" (validateClient)=\"onValidate($event)\">\n    </app-formfooter> -->\n    <app-formfooter [bodyComponent]=\"this\" type=\"create\" (created)=\"onCreated()\">\n    </app-formfooter>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[\n    {Title:'Danh Mục',Path:''}\n    ,{Title:'Hợp Đồng Thầu',Path:''}\n    ,{Title:'Vật Tư',Path:''}\n    ,{Title:'Hợp Đồng Thầu Vật Tư',Path:'/danh-muc/hop-dong-thau/vat-tu', Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">Chỉnh Sửa Hợp Đồng Thầu Vật Tư</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <app-hop-dong-thau-vat-tu-shared></app-hop-dong-thau-vat-tu-shared>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L3ZhdC10dS9ob3AtZG9uZy10aGF1LXZhdC10dS1jcmVhdGUvaG9wLWRvbmctdGhhdS12YXQtdHUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: HopDongThauVatTuCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuCreateComponent", function() { return HopDongThauVatTuCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hop_dong_thau_vat_tu_shared_hop_dong_thau_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.ts");



let HopDongThauVatTuCreateComponent = class HopDongThauVatTuCreateComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_hop_dong_thau_vat_tu_shared_hop_dong_thau_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTuSharedComponent"], { static: true })
], HopDongThauVatTuCreateComponent.prototype, "shared", void 0);
HopDongThauVatTuCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-hop-dong-thau-vat-tu-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-vat-tu-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-vat-tu-create.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.scss")).default]
    })
], HopDongThauVatTuCreateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L3ZhdC10dS9ob3AtZG9uZy10aGF1LXZhdC10dS1saXN0L2hvcC1kb25nLXRoYXUtdmF0LXR1LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: HopDongThauVatTuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuListComponent", function() { return HopDongThauVatTuListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");











let HopDongThauVatTuListComponent = class HopDongThauVatTuListComponent {
    constructor(notificationService, authService, dialog, apiService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.gridColumns = [];
        this.gridChildColumns = [];
        this.urlGetDataGridChild = 'HopDongThauVatTu/GetDataForGridChildAsync';
        this.urlGetTotalPageGridChild = 'HopDongThauVatTu/GetTotalPageForGridChildAsync';
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].DanhMucHopDongThauVatTu;
        this.gridColumns = [
            { Field: 'NhaThau', Title: 'Nhà Cung Cấp', MinWidth: 200, Sortable: true, ShowTooltip: true, LinkDetail: true },
            { Field: 'SoHopDong', Title: 'Số Hợp Đồng', Width: 150, Sortable: true },
            { Field: 'SoQuyetDinh', Title: 'Số Quyết Định', Width: 150, Sortable: true },
            { Field: 'CongBoDisplay', Title: 'Ngày Công Bố', Width: 150, Sortable: true },
            { Field: 'NgayKyDisplay', Title: 'Ngày Ký', Width: 150, Sortable: true },
            { Field: 'NgayHieuLucDisplay', Title: 'Ngày Hiệu Lực', Width: 150, Sortable: true },
            { Field: 'NgayHetHanDisplay', Title: 'Ngày Hết Hạn', Width: 150, Sortable: true },
            { Field: 'TenLoaiThau', Title: 'Loại Thầu', Width: 140, Sortable: true },
            { Field: 'NhomThau', Title: 'Nhóm Thầu', Width: 113, Sortable: true },
            { Field: 'GoiThau', Title: 'Gói Thầu', Width: 93, Sortable: true },
            { Field: 'Nam', Title: 'Năm', Width: 120, Sortable: true }
        ];
        this.gridChildColumns = [
            { Field: 'VatTu', Title: 'Vật Tư', Width: 200, Sortable: true },
            { Field: 'Gia', Title: 'Giá', Width: 150, Sortable: true, Template: this.giaTemplate },
            { Field: 'SoLuongDisplay', Title: 'Số Lượng', Width: 100, Sortable: true },
            { Field: 'SoLuongCungCapDisplay', Title: 'Số Lượng Đã Cung Cấp', Width: 100, Sortable: true }
        ];
    }
    exportExcel() {
        const self = this;
        self.showPopupLoadingData();
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_9__["SecurityOperation"].Process)) {
            self.apiService.postExportExcel('HopDongThauVatTu/ExportHopDongThauVatTu', self.gridHdtCha._gridQueryInfo).subscribe(resultData => {
                self.closePopupLoadingData();
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_4__["CommonService"].downLoadFile(resultData, 'application/vnd.ms-excel', 'HopDongThauVatTu' + dateTimeNow.getFullYear() + '.xlsx');
            }, (err) => {
                self.notificationService.showError(err.Message);
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_7__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupLoadingData() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
    }
    closePopupLoadingData() {
        this.dialog.closeAll();
    }
};
HopDongThauVatTuListComponent.ctorParameters = () => [
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridHdtCha', { static: false })
], HopDongThauVatTuListComponent.prototype, "gridHdtCha", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
], HopDongThauVatTuListComponent.prototype, "giaTemplate", void 0);
HopDongThauVatTuListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-hop-dong-thau-vat-tu-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-vat-tu-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-vat-tu-list.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.scss")).default]
    })
], HopDongThauVatTuListComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: HopDongThauVatTuRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuRoutingModule", function() { return HopDongThauVatTuRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hop_dong_thau_vat_tu_list_hop_dong_thau_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_create_hop_dong_thau_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_update_hop_dong_thau_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");









const routes = [
    {
        path: '',
        component: _hop_dong_thau_vat_tu_list_hop_dong_thau_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_3__["HopDongThauVatTuListComponent"],
        data: {
            title: 'Danh Mục Hợp Đồng Thầu Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucHopDongThauVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _hop_dong_thau_vat_tu_create_hop_dong_thau_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_4__["HopDongThauVatTuCreateComponent"],
        data: {
            title: 'Thêm Hợp Đồng Thầu Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucHopDongThauVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Add
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    },
    {
        path: 'chinh-sua/:id',
        component: _hop_dong_thau_vat_tu_update_hop_dong_thau_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_5__["HopDongThauVatTuUpdateComponent"],
        data: {
            title: 'Chỉnh Sửa Hợp Đồng Thầu Vật Tư',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].DanhMucHopDongThauVatTu,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_6__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_8__["PermisssionGuard"]]
    }
];
let HopDongThauVatTuRoutingModule = class HopDongThauVatTuRoutingModule {
};
HopDongThauVatTuRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HopDongThauVatTuRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L3ZhdC10dS9ob3AtZG9uZy10aGF1LXZhdC10dS1zaGFyZWQvaG9wLWRvbmctdGhhdS12YXQtdHUtc2hhcmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: HopDongThauVatTuSharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuSharedComponent", function() { return HopDongThauVatTuSharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hop-dong-thau-vat-tu.model */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iconify/icons-ic/sharp-edit */ "./node_modules/@iconify/icons-ic/sharp-edit.js");
/* harmony import */ var _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-more-horiz */ "./node_modules/@iconify/icons-ic/twotone-more-horiz.js");
/* harmony import */ var _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");















let HopDongThauVatTuSharedComponent = class HopDongThauVatTuSharedComponent {
    constructor(router, route, baseService, dialog, apiService, notificationService) {
        this.router = router;
        this.route = route;
        this.baseService = baseService;
        this.dialog = dialog;
        this.apiService = apiService;
        this.notificationService = notificationService;
        this.gridColumns = [];
        this.hopDongThauVatTu = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTu"]();
        this.hopDongThauVatTuChiTiet = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTuChiTiet"]();
        this.hopDongThauVatTuSource = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTu"]();
        this.isUpdate = false;
        this.format = 'n2';
        this.showFormDetail = false;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_10___default.a;
        this.icEdit = _iconify_icons_ic_sharp_edit__WEBPACK_IMPORTED_MODULE_11___default.a;
        this.icMoreHoriz = _iconify_icons_ic_twotone_more_horiz__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.isDisableUpdate = false;
        this.isCreate = false;
        this.vatTuDisabled = false;
        this.minYear = 1900;
        this.maxYear = 9999;
        this.disabledSuDungTaiBenhVien = false;
        this.arrayMaVatTuTemp = new Array();
    }
    ngOnInit() {
        this.showGrid = false;
        this._idHopDongThauChiTiet = 0;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_5__["DocumentType"].DanhMucHopDongThauVatTu;
        const id = this.route.snapshot.params.id;
        this.hopDongThauVatTu = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTu"]();
        this.hopDongThauVatTuChiTiet = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTuChiTiet"]();
        this.hopDongThauVatTuSource = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTu"]();
        const hopDongThauVatTuChiTietDataSource = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTuChiTiet"]();
        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.push(hopDongThauVatTuChiTietDataSource);
        this.ClearData();
        if (id) {
            this.getById(id);
        }
        else {
            this.showGrid = true;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(0, 1);
            this.setDataGridView(this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets);
            this.isCreate = true;
        }
        this.gridColumns = [
            { Field: 'VatTu', Title: 'Vật tư', MinWidth: 150, Template: this.vatTuThauTemplate },
            { Field: 'Gia', Title: 'Giá', Width: 150, Template: this.giaTemplate },
            { Field: 'SoLuongDisplay', Title: 'Số Lượng', Width: 150 },
            { Field: 'SuDungTaiBenhVienDisplay', Title: 'Sử Dụng tại BV', Width: 150 },
            { Field: 'MaVatTuBenhVien', Title: 'Mã tại BV', Width: 150, Template: this.maVatTuTemplate },
            { Field: 'LoaiSuDungText', Title: 'Loại sử dung', Width: 150 },
            { Field: 'Action', Title: '', Width: 150, Template: this.trangThaiTemplate }
        ];
    }
    setDataGridView(dataSource) {
        this.dataSourceCache = dataSource;
        this.gridDataSource = {
            data: this.dataSourceCache,
            total: 1
        };
        if (this.gridHdtVt) {
            this.gridHdtVt.gridDataSource = Object.assign({}, this.gridDataSource);
            this.gridHdtVt.setDataSource();
        }
    }
    getSharedData() {
        if (this.hopDongThauVatTu.Id == null) {
            this.hopDongThauVatTu.Id = this.hopDongThauVatTu.Id != null ? this.hopDongThauVatTu.Id : 0;
        }
        this.hopDongThauVatTu.HopDongThauVatTuChiTiets.filter(x => x.Id == null).forEach(hopDongVtChiTiet => {
            hopDongVtChiTiet.Id = 0;
        });
        return this.hopDongThauVatTu;
    }
    onValidate(allowValidate) {
        this.validationErrors = [];
        const today = new Date();
        if (allowValidate) {
            if (this.hopDongThauVatTu.NhaThauId == null) {
                const validate = {
                    Field: 'NhaThauId',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageNhaThauNotEmpty
                };
                this.validationErrors.push(validate);
            }
            // if (this.hopDongThauVatTu.SoHopDong == null || this.hopDongThauVatTu.SoHopDong === '') {
            //     const validate = {
            //         Field: 'SoHopDong',
            //         Message: HopDongThauVatTuMessage.MessageSoHopDongNotEmpty
            //     };
            //     this.validationErrors.push(validate);
            // }
            if (this.hopDongThauVatTu.SoQuyetDinh == null || this.hopDongThauVatTu.SoQuyetDinh === '') {
                const validate = {
                    Field: 'SoQuyetDinh',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageSoQuyetDinhNotEmpty
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.CongBo == null) {
                const validate = {
                    Field: 'CongBo',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageCongBoNotEmpty
                };
                this.validationErrors.push(validate);
            }
            // if (this.hopDongThauVatTu.NgayKy == null) {
            //     const validate = {
            //         Field: 'NgayKy',
            //         Message: HopDongThauVatTuMessage.MessageNgayKyNotEmpty
            //     };
            //     this.validationErrors.push(validate);
            // }
            if (this.hopDongThauVatTu.NgayHieuLuc == null) {
                const validate = {
                    Field: 'NgayHieuLuc',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageNgayHieuLucNotEmpty
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.NgayHetHan == null) {
                const validate = {
                    Field: 'NgayHetHan',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageNgayHetHanNotEmpty
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.NgayHetHan != null && this.hopDongThauVatTu.NgayHetHan <= today) {
                const validate = {
                    Field: 'NgayHetHan',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageNgayHetHanNotValid
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.Nam == null) {
                const validate = {
                    Field: 'Nam',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageNamNotEmpty
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.LoaiThau == null) {
                const validate = {
                    Field: 'LoaiThau',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageLoaiThauNotEmpty
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.NhomThau == null || this.hopDongThauVatTu.NhomThau === '') {
                const validate = {
                    Field: 'NhomThau',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageNhomThauNotEmpty
                };
                this.validationErrors.push(validate);
            }
            if (this.hopDongThauVatTu.GoiThau == null || this.hopDongThauVatTu.GoiThau === '') {
                const validate = {
                    Field: 'GoiThau',
                    Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuMessage"].MessageGoiThauNotEmpty
                };
                this.validationErrors.push(validate);
            }
        }
    }
    getById(id) {
        this.baseService.getById(id).subscribe(resultData => {
            this.isDisableUpdate = resultData.CoNhapKho;
            this.showGrid = true;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(0, 1);
            this.hopDongThauVatTu = resultData;
            const len = this.hopDongThauVatTu.HopDongThauVatTuChiTiets.length;
            if (len > 0) {
                for (let i = 0; i < len; i++) {
                    const hopDongChiTietDataSource = this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i];
                    hopDongChiTietDataSource.SoLuongDisplay =
                        this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i].SoLuong.toLocaleString('vi-VI');
                    this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i].IdGrid = Math.random();
                    hopDongChiTietDataSource.IdGrid = this.hopDongThauVatTu.HopDongThauVatTuChiTiets[i].IdGrid;
                    if (hopDongChiTietDataSource.SuDungTaiBenhVien == true) {
                        hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Có";
                    }
                    else {
                        hopDongChiTietDataSource.SuDungTaiBenhVienDisplay = "Không";
                    }
                    this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.push(hopDongChiTietDataSource);
                }
                this._idHopDongThauChiTiet = this.hopDongThauVatTu.HopDongThauVatTuChiTiets[len - 1].Id + 1;
                this.setDataGridView(this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets);
            }
            else {
                this.setDataGridView([]);
            }
        });
    }
    onChangeVatTu(event) {
        if (event) {
            this.hopDongThauVatTuChiTiet.VatTu = event.DisplayName;
            this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien = event.SuDungTaiBenhVien;
            this.disabledSuDungTaiBenhVien = event.SuDungTaiBenhVien == true;
            this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = event.MaTaiBenhVien;
            this.hopDongThauVatTuChiTiet.LoaiSuDungId = event.LoaiSuDungId;
            this.hopDongThauVatTuChiTiet.LoaiSuDungText = event.LoaiSuDungText;
            this.hopDongThauVatTuChiTiet.VatTuBenhVienId = event.DichVuBenhVienId;
        }
    }
    onChangeLoaiSuDung(event) {
        if (event) {
            this.hopDongThauVatTuChiTiet.LoaiSuDungText = event.DisplayName;
        }
    }
    modelChangeSuDungTaiBenhVien(event) {
        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungId = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungText = null;
        this.getMaTaoMoiVatTu();
    }
    ConfirmDelete(dataItem) {
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
            disableClose: false,
            width: '400px',
            data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ['xóa']) }
        }).afterClosed().subscribe(result => {
            if (result === 'Yes') {
                if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length === 1) {
                    this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmComponent"], {
                        disableClose: false,
                        width: '400px',
                        data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_8__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].MessConfirm, ['xóa hết']) }
                    }).afterClosed().subscribe(resultData => {
                        if (resultData === 'Yes') {
                            this.Delete(dataItem.IdGrid);
                        }
                    });
                }
                else {
                    this.Delete(dataItem.IdGrid);
                }
            }
        });
    }
    Delete(id) {
        this.ClearData();
        // find position
        const hopDongThauVatTuChiTiet = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets;
        let position = 0;
        for (const chiTiet of hopDongThauVatTuChiTiet) {
            if (chiTiet.IdGrid === id) {
                position = hopDongThauVatTuChiTiet.indexOf(chiTiet);
                break;
            }
        }
        // delete by its position
        this.hopDongThauVatTu.HopDongThauVatTuChiTiets.splice(position, 1);
        this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(position, 1);
        this.notificationService.showSuccess(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["NhapXuatKhoMessage"].MessageRemoveItemGrid);
    }
    ThemVatTu() {
        this.showFormDetail = !this.showFormDetail;
        if (this.validationErrors == null) {
            this.validationErrors = [];
        }
        else {
            if (this.validationErrors != null && this.validationErrors.length !== 0) {
                this.validationErrors = [];
            }
        }
    }
    BindValue(dataItem) {
        if (this.validationErrors == null) {
            this.validationErrors = [];
        }
        else {
            if (this.validationErrors != null && this.validationErrors.length !== 0) {
                this.validationErrors = [];
            }
        }
        this.hopDongThauVatTuChiTiet.VatTuId = dataItem.VatTuId;
        this.hopDongThauVatTuChiTiet.VatTu = dataItem.VatTu;
        this.hopDongThauVatTuChiTiet.Gia = dataItem.Gia;
        this.hopDongThauVatTuChiTiet.SoLuong = dataItem.SoLuong;
        this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien = dataItem.SuDungTaiBenhVien;
        if (this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien == true) {
            this.disabledSuDungTaiBenhVien = true;
            this.hopDongThauVatTuChiTiet.VatTuBenhVienId = dataItem.VatTuBenhVienId;
        }
        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = dataItem.MaVatTuBenhVien;
        this.hopDongThauVatTuChiTiet.LoaiSuDungId = dataItem.LoaiSuDungId;
        this.hopDongThauVatTuChiTiet.LoaiSuDungText = dataItem.LoaiSuDungText;
        this.idUpdate = dataItem.IdGrid;
        this.isUpdate = true;
        this.showFormDetail = true;
    }
    ClearData() {
        this.hopDongThauVatTu.Nam = (new Date()).getFullYear();
        this.showFormDetail = false;
        this.hopDongThauVatTuChiTiet.VatTuId = null;
        this.hopDongThauVatTuChiTiet.VatTu = null;
        this.hopDongThauVatTuChiTiet.Gia = null;
        this.hopDongThauVatTuChiTiet.SoLuong = null;
        this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien = false;
        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungId = null;
        this.hopDongThauVatTuChiTiet.LoaiSuDungText = null;
        this.isUpdate = false;
    }
    Add() {
        // add into grid
        this._idHopDongThauChiTiet = this._idHopDongThauChiTiet + 1;
        const hopDongChiTietDataSource = this.hopDongThauVatTuChiTiet;
        //this.validationFormClient(hopDongChiTietDataSource, 0, 0);
        if (this.hopDongThauVatTuChiTiet.VatTuId != null
            && this.hopDongThauVatTuChiTiet.VatTuId != 0
            && this.checkExist(this.hopDongThauVatTuChiTiet.VatTuId)) {
            this.notificationService.showError("Vật tư này đã có trong danh sách thầu vật tư chi tiết");
            return;
        }
        //if (hopDongChiTietDataSource.VatTuId != null) {
        this.validationErrorsForDetail = [];
        this.hopDongThauVatTuChiTiet.MaVatTuTemps = [];
        this.arrayMaVatTuTemp.forEach(element => {
            this.hopDongThauVatTuChiTiet.MaVatTuTemps.push(element);
        });
        this.apiService.post("HopDongThauVatTu/KiemTraHopDongThauVatTuChiTiet", this.hopDongThauVatTuChiTiet).subscribe(resultValid => {
            // this.apiService.post<any>('HopDongThauVatTu/GetHieuLucVatTu?id=' + hopDongChiTietDataSource.VatTuId).subscribe(resultData => {
            //     if (resultData != null) {
            //         if (resultData === false) {
            //             if (this.validationErrorsForDetail == null) {
            //                 this.validationErrorsForDetail = [];
            //             }
            //             this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Vật tư này đã hết hiệu lực' });
            //         }
            hopDongChiTietDataSource.HopDongThauVatTuId = this.hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
            // update Id cho row, rất quan trọng, nếu ko có dòng này thì row sẽ bị xử lý bậy bạ
            hopDongChiTietDataSource.Id = this._idHopDongThauChiTiet;
            //if (this.validationErrorsForDetail != null && !this.validationErrorsForDetail.some(x => x)) {
            hopDongChiTietDataSource.GiaDisplay = hopDongChiTietDataSource.Gia.toLocaleString('vi-VI');
            hopDongChiTietDataSource.SoLuongDisplay = hopDongChiTietDataSource.SoLuong.toLocaleString('vi-VI');
            hopDongChiTietDataSource.IdGrid = Math.random();
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.push(hopDongChiTietDataSource);
            // add into data
            const hopDongChiTiet = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTuChiTiet"]();
            hopDongChiTiet.HopDongThauVatTuId = this.hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
            hopDongChiTiet.VatTuId = this.hopDongThauVatTuChiTiet.VatTuId;
            hopDongChiTiet.VatTu = hopDongChiTietDataSource.VatTu;
            hopDongChiTiet.Id = hopDongChiTiet.Id == null ? 0 : hopDongChiTiet.Id;
            hopDongChiTiet.Gia = this.hopDongThauVatTuChiTiet.Gia;
            hopDongChiTiet.GiaDisplay = hopDongChiTietDataSource.GiaDisplay;
            hopDongChiTiet.SoLuong = this.hopDongThauVatTuChiTiet.SoLuong;
            hopDongChiTiet.SoLuongDisplay = hopDongChiTietDataSource.SoLuongDisplay;
            hopDongChiTiet.SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
            if (hopDongChiTiet.SuDungTaiBenhVien == true) {
                hopDongChiTiet.SuDungTaiBenhVienDisplay = "Có";
                hopDongChiTiet.VatTuBenhVienId = this.hopDongThauVatTuChiTiet.VatTuBenhVienId;
                this.arrayMaVatTuTemp.push(this.hopDongThauVatTuChiTiet.MaVatTuBenhVien);
            }
            else {
                hopDongChiTiet.SuDungTaiBenhVienDisplay = "Không";
            }
            hopDongChiTiet.MaVatTuBenhVien = hopDongChiTietDataSource.MaVatTuBenhVien;
            hopDongChiTiet.LoaiSuDungId = hopDongChiTietDataSource.LoaiSuDungId;
            hopDongChiTiet.LoaiSuDungText = hopDongChiTietDataSource.LoaiSuDungText;
            hopDongChiTiet.SoLuongDaCap = 0;
            hopDongChiTiet.IdGrid = hopDongChiTietDataSource.IdGrid;
            this.hopDongThauVatTu.Id = this.hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
            if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets.length > 0) {
                if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets[0].VatTu === null) {
                    this.hopDongThauVatTu.HopDongThauVatTuChiTiets.splice(0, 1);
                }
            }
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets.push(hopDongChiTiet);
            for (const chiTiet of this.hopDongThauVatTu.HopDongThauVatTuChiTiets) {
                if (chiTiet.Id === this._idHopDongThauChiTiet) {
                    const position = this.hopDongThauVatTu.HopDongThauVatTuChiTiets.indexOf(chiTiet);
                    this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].Id = 0;
                    break;
                }
            }
            this.RemoveRedundantItem();
            // clear data on screen
            this.setDataGridView(this.hopDongThauVatTu.HopDongThauVatTuChiTiets);
            this.hopDongThauVatTuChiTiet = new _hop_dong_thau_vat_tu_model__WEBPACK_IMPORTED_MODULE_2__["HopDongThauVatTuChiTiet"]();
            this.ClearData();
            //}
            //     }
            // },
            //     (err: any) => {
            //         this.notificationService.showError(err.Message);
            //     });
        }, (err) => {
            this.validationErrorsForDetail = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
        //}
    }
    Update() {
        // update into grid
        this.hopDongThauVatTuChiTiet.GiaDisplay = this.hopDongThauVatTuChiTiet.Gia.toLocaleString('vi-VI');
        this.hopDongThauVatTuChiTiet.SoLuongDisplay = this.hopDongThauVatTuChiTiet.SoLuong.toLocaleString('vi-VI');
        const id = this.idUpdate;
        let position = 0;
        for (const chiTiet of this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets) {
            if (chiTiet.IdGrid === id) {
                position = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.indexOf(chiTiet);
                break;
            }
        }
        const hopDongChiTietDataSource = this.hopDongThauVatTuChiTiet;
        //this.validationFormClient(hopDongChiTietDataSource, 1, position);
        if (this.hopDongThauVatTuChiTiet.VatTuId != null
            && this.hopDongThauVatTuChiTiet.VatTuId != 0
            && this.checkExistOnAmendation(this.hopDongThauVatTuChiTiet.VatTuId, position)) {
            this.notificationService.showError("Vật tư này đã có trong danh sách thầu vật tư chi tiết");
            return;
        }
        //if (hopDongChiTietDataSource.VatTuId) {
        this.apiService.post("HopDongThauVatTu/KiemTraHopDongThauVatTuChiTiet", this.hopDongThauVatTuChiTiet).subscribe(resultValid => {
            // this.apiService.post<any>('HopDongThauVatTu/GetHieuLucVatTu?id=' + hopDongChiTietDataSource.VatTuId).subscribe(resultData => {
            //     if (resultData) {
            //         if (resultData === false) {
            //             if (this.validationErrors == null) {
            //                 this.validationErrors = [];
            //             }
            //             this.validationErrors.push({ Field: 'VatTuId', Message: 'Vật tư này đã hết hiệu lực' });
            //         }
            //         if (this.validationErrors != null && !this.validationErrors.some(x => x)) {
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].VatTu = hopDongChiTietDataSource.VatTu;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].VatTuId =
                hopDongChiTietDataSource.VatTuId;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].GiaDisplay =
                this.hopDongThauVatTuChiTiet.GiaDisplay;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[position].SoLuongDisplay =
                this.hopDongThauVatTuChiTiet.SoLuongDisplay;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].VatTu = hopDongChiTietDataSource.VatTu;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].VatTuId =
                hopDongChiTietDataSource.VatTuId;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].Gia = hopDongChiTietDataSource.Gia;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].GiaDisplay =
                this.hopDongThauVatTuChiTiet.GiaDisplay;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SoLuong = hopDongChiTietDataSource.SoLuong;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SoLuongDisplay =
                this.hopDongThauVatTuChiTiet.SoLuongDisplay;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVien = hopDongChiTietDataSource.SuDungTaiBenhVien;
            if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVien == true) {
                this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVienDisplay = "Có";
                this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].VatTuBenhVienId = this.hopDongThauVatTuChiTiet.VatTuBenhVienId;
                this.arrayMaVatTuTemp.push(this.hopDongThauVatTuChiTiet.MaVatTuBenhVien);
            }
            else {
                this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].SuDungTaiBenhVienDisplay = "Không";
            }
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].MaVatTuBenhVien = hopDongChiTietDataSource.MaVatTuBenhVien;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].LoaiSuDungId = hopDongChiTietDataSource.LoaiSuDungId;
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets[position].LoaiSuDungText = hopDongChiTietDataSource.LoaiSuDungText;
            // update into data
            // const hopDongChiTiets = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets;
            // let hopDongThauVatTuChiTiet = new HopDongThauVatTuChiTiet();
            // let hopDongThauVatTu = new HopDongThauVatTu();
            // hopDongThauVatTu = this.hopDongThauVatTu;
            // hopDongThauVatTuChiTiet = this.hopDongThauVatTuChiTiet;
            // hopDongChiTiets.forEach((hopDongChiTiet) => {
            //     if (hopDongChiTiet.IdGrid === id) {
            //         hopDongChiTiet.HopDongThauVatTuId = hopDongThauVatTu.Id == null ? 0 : this.hopDongThauVatTu.Id;
            //         hopDongChiTiet.VatTuId = hopDongThauVatTuChiTiet.VatTuId;
            //         hopDongChiTiet.Gia = hopDongThauVatTuChiTiet.Gia;
            //         hopDongChiTiet.SoLuong = hopDongThauVatTuChiTiet.SoLuong;
            //     }
            // });
            // this.RemoveRedundantItem();
            this.setDataGridView(this.hopDongThauVatTu.HopDongThauVatTuChiTiets);
            // clear
            this.ClearData();
            //}
        }, (err) => {
            this.validationErrorsForDetail = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                this.notificationService.showError(err.Message);
            }
        });
        // },
        //     (err: any) => {
        //         this.notificationService.showError(err.Message);
        //     });
        //}
    }
    RemoveRedundantItem() {
        const len = this.hopDongThauVatTu.HopDongThauVatTuChiTiets.length;
        if (this.hopDongThauVatTu.HopDongThauVatTuChiTiets[len - 1].Id === 0
            && this.hopDongThauVatTu.HopDongThauVatTuChiTiets[len - 1].VatTu === null) {
            this.hopDongThauVatTu.HopDongThauVatTuChiTiets.splice(len - 1, 1);
        }
        const lenDataSource = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length;
        if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[lenDataSource - 1].Id === 0
            && this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[lenDataSource - 1].VatTu === null) {
            this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.splice(lenDataSource - 1, 1);
        }
    }
    validationFormClient(dataval, type, position) {
        // type = 0 là add, type = 1 là update
        this.validationErrorsForDetail = [];
        if (dataval !== null) {
            if (dataval.VatTuId == null || dataval.VatTuId === 0) {
                this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Yêu cầu chọn vật tư' });
            }
            if (dataval.Gia == null || dataval.Gia === 0) {
                this.validationErrorsForDetail.push({ Field: 'Gia', Message: 'Giá yêu cầu nhập' });
            }
            if (dataval.SoLuong == null) {
                this.validationErrorsForDetail.push({ Field: 'SoLuong', Message: 'Số lượng yêu cầu nhập' });
            }
            if (dataval.SoLuong === 0) {
                this.validationErrorsForDetail.push({ Field: 'SoLuong', Message: 'Số lượng yêu cầu khác 0' });
            }
            if (this.disabledSuDungTaiBenhVien == false && this.hopDongThauVatTuChiTiet.SuDungTaiBenhVien == true) {
                if (this.hopDongThauVatTuChiTiet.MaVatTuBenhVien == null || this.hopDongThauVatTuChiTiet.MaVatTuBenhVien == "") {
                    this.validationErrorsForDetail.push({ Field: 'MaVatTuBenhVien', Message: 'Yêu cầu nhập Mã vật tư bệnh viện' });
                }
                if (dataval.LoaiSuDungId == null || dataval.LoaiSuDungId === 0) {
                    this.validationErrorsForDetail.push({ Field: 'LoaiSuDungId', Message: 'Yêu cầu chọn Loại sử dụng' });
                }
            }
        }
        if (type === 0) {
            if (this.checkExist(dataval.VatTuId)) {
                this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Vật tư này đã có trong danh sách thầu vật tư chi tiết' });
            }
        }
        if (type === 1) {
            if (this.checkExistOnAmendation(dataval.VatTuId, position)) {
                this.validationErrorsForDetail.push({ Field: 'VatTuId', Message: 'Vật tư này đã có trong danh sách thầu vật tư chi tiết' });
            }
        }
    }
    checkExist(VatTuId) {
        const len = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length;
        for (let i = 0; i < len; i++) {
            if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[i].VatTuId === VatTuId) {
                return true;
            }
        }
        return false;
    }
    checkExistOnAmendation(VatTuId, position) {
        const len = this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets.length;
        for (let i = 0; i < len; i++) {
            if (i === position) {
                continue;
            }
            if (this.hopDongThauVatTuSource.HopDongThauVatTuChiTiets[i].VatTuId === VatTuId) {
                return true;
            }
        }
        return false;
    }
    onCreated() {
        this.router.navigate(['/danh-muc/hop-dong-thau/vat-tu']);
    }
    onUpdated() {
        this.router.navigate(['/danh-muc/hop-dong-thau/vat-tu']);
    }
    onKeyAddVt(keyInput) {
        if (keyInput.keyCode === 13) {
            if (!this.isUpdate) {
                if (this.vatTuDisabled !== true) {
                    this.Add();
                }
                else {
                    this.vatTuDisabled = false;
                }
            }
            else {
                if (this.vatTuDisabled !== true) {
                    this.Update();
                }
                else {
                    this.vatTuDisabled = false;
                }
            }
        }
    }
    openComboboxHdt(isOpen) {
        this.vatTuDisabled = isOpen;
    }
    ngayChange(dataItem, laCongBo) {
        this.validationErrors = [];
        if (laCongBo) {
            if (dataItem != undefined && dataItem != null) {
                this.hopDongThauVatTu.NgayHieuLuc = dataItem;
            }
            else {
                this.hopDongThauVatTu.NgayHieuLuc = null;
            }
        }
        else {
            if (dataItem != undefined && dataItem != null) {
                this.hopDongThauVatTu.CongBo = dataItem;
            }
            else {
                this.hopDongThauVatTu.CongBo = null;
            }
        }
    }
    // BVHD-3472
    getMaTaoMoiVatTu(tenVatTu = null) {
        if (this.hopDongThauVatTuChiTiet.VatTuBenhVienId == null || this.hopDongThauVatTuChiTiet.VatTuBenhVienId == 0) {
            let tenVatTuTemp = tenVatTu == null ? this.hopDongThauVatTuChiTiet.VatTu : tenVatTu;
            if (tenVatTuTemp != null) {
                var obj = {
                    TenVatTu: tenVatTuTemp,
                    MaVatTuTemps: this.arrayMaVatTuTemp
                };
                this.apiService.post("VatTuBenhVien/GetMaTaoMoiVatTu", obj).subscribe(resultData => {
                    if (resultData) {
                        this.hopDongThauVatTuChiTiet.MaVatTuBenhVien = resultData;
                    }
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                });
            }
        }
    }
};
HopDongThauVatTuSharedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_13__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], HopDongThauVatTuSharedComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('giaTemplate', { static: true })
], HopDongThauVatTuSharedComponent.prototype, "giaTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridHdtVt', { static: false })
], HopDongThauVatTuSharedComponent.prototype, "gridHdtVt", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vatTuThauTemplate', { static: true })
], HopDongThauVatTuSharedComponent.prototype, "vatTuThauTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maVatTuTemplate', { static: true })
], HopDongThauVatTuSharedComponent.prototype, "maVatTuTemplate", void 0);
HopDongThauVatTuSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-hop-dong-thau-vat-tu-shared',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-vat-tu-shared.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-vat-tu-shared.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.scss")).default]
    })
], HopDongThauVatTuSharedComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kYW5oLW11Yy9ob3AtZG9uZy10aGF1L3ZhdC10dS9ob3AtZG9uZy10aGF1LXZhdC10dS11cGRhdGUvaG9wLWRvbmctdGhhdS12YXQtdHUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: HopDongThauVatTuUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuUpdateComponent", function() { return HopDongThauVatTuUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HopDongThauVatTuUpdateComponent = class HopDongThauVatTuUpdateComponent {
    constructor() { }
    ngOnInit() { }
};
HopDongThauVatTuUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-hop-dong-thau-vat-tu-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hop-dong-thau-vat-tu-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hop-dong-thau-vat-tu-update.component.scss */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.scss")).default]
    })
], HopDongThauVatTuUpdateComponent);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.model.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.model.ts ***!
  \******************************************************************************************/
/*! exports provided: HopDongThauVatTu, NhapKhoVatTuChiTiet, HopDongThauVatTuChiTiet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTu", function() { return HopDongThauVatTu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhapKhoVatTuChiTiet", function() { return NhapKhoVatTuChiTiet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuChiTiet", function() { return HopDongThauVatTuChiTiet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class HopDongThauVatTu {
    constructor(Id = 0, NhaThauId = null, CoNhapKho = null, NhaThau = null, SoHopDong = null, SoQuyetDinh = null, CongBo = null, NgayKy = null, NgayHieuLuc = null, NgayHetHan = null, LoaiThau = null, TenLoaiThau = null, LoaiThuocThau = null, TenLoaiThuocThau = null, NhomThau = null, GoiThau = null, Nam = null, HopDongThauVatTuChiTiets = [], NhapKhoVatTuChiTiets = []) {
        this.Id = Id;
        this.NhaThauId = NhaThauId;
        this.CoNhapKho = CoNhapKho;
        this.NhaThau = NhaThau;
        this.SoHopDong = SoHopDong;
        this.SoQuyetDinh = SoQuyetDinh;
        this.CongBo = CongBo;
        this.NgayKy = NgayKy;
        this.NgayHieuLuc = NgayHieuLuc;
        this.NgayHetHan = NgayHetHan;
        this.LoaiThau = LoaiThau;
        this.TenLoaiThau = TenLoaiThau;
        this.LoaiThuocThau = LoaiThuocThau;
        this.TenLoaiThuocThau = TenLoaiThuocThau;
        this.NhomThau = NhomThau;
        this.GoiThau = GoiThau;
        this.Nam = Nam;
        this.HopDongThauVatTuChiTiets = HopDongThauVatTuChiTiets;
        this.NhapKhoVatTuChiTiets = NhapKhoVatTuChiTiets;
    }
}
class NhapKhoVatTuChiTiet {
    constructor(Id = null) {
        this.Id = Id;
    }
}
class HopDongThauVatTuChiTiet {
    constructor(HopDongThauVatTuId = null, VatTuId = null, VatTu = null, Gia = null, GiaDisplay = null, SoLuong = null, SoLuongDisplay = null, SoLuongDaCap = null, Id = 0, IdGrid = null, SuDungTaiBenhVien = false, SuDungTaiBenhVienDisplay = null, //SuDungTaiBenhVien ==true ?"Có":"Không",
    MaVatTuBenhVien = null, LoaiSuDungId = null, LoaiSuDungText = null, 
    // BVHD-3472
    VatTuBenhVienId = null, MaVatTuTemps = []) {
        this.HopDongThauVatTuId = HopDongThauVatTuId;
        this.VatTuId = VatTuId;
        this.VatTu = VatTu;
        this.Gia = Gia;
        this.GiaDisplay = GiaDisplay;
        this.SoLuong = SoLuong;
        this.SoLuongDisplay = SoLuongDisplay;
        this.SoLuongDaCap = SoLuongDaCap;
        this.Id = Id;
        this.IdGrid = IdGrid;
        this.SuDungTaiBenhVien = SuDungTaiBenhVien;
        this.SuDungTaiBenhVienDisplay = SuDungTaiBenhVienDisplay;
        this.MaVatTuBenhVien = MaVatTuBenhVien;
        this.LoaiSuDungId = LoaiSuDungId;
        this.LoaiSuDungText = LoaiSuDungText;
        this.VatTuBenhVienId = VatTuBenhVienId;
        this.MaVatTuTemps = MaVatTuTemps;
    }
}


/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: HopDongThauVatTuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuModule", function() { return HopDongThauVatTuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var _hop_dong_thau_vat_tu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu.service */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-routing.module */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-routing.module.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_list_hop_dong_thau_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-list/hop-dong-thau-vat-tu-list.component.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_create_hop_dong_thau_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-create/hop-dong-thau-vat-tu-create.component.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_update_hop_dong_thau_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-update/hop-dong-thau-vat-tu-update.component.ts");
/* harmony import */ var _hop_dong_thau_vat_tu_shared_hop_dong_thau_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component */ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu-shared/hop-dong-thau-vat-tu-shared.component.ts");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");






















let HopDongThauVatTuModule = class HopDongThauVatTuModule {
};
HopDongThauVatTuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hop_dong_thau_vat_tu_list_hop_dong_thau_vat_tu_list_component__WEBPACK_IMPORTED_MODULE_9__["HopDongThauVatTuListComponent"],
            _hop_dong_thau_vat_tu_create_hop_dong_thau_vat_tu_create_component__WEBPACK_IMPORTED_MODULE_10__["HopDongThauVatTuCreateComponent"],
            _hop_dong_thau_vat_tu_update_hop_dong_thau_vat_tu_update_component__WEBPACK_IMPORTED_MODULE_11__["HopDongThauVatTuUpdateComponent"],
            _hop_dong_thau_vat_tu_shared_hop_dong_thau_vat_tu_shared_component__WEBPACK_IMPORTED_MODULE_12__["HopDongThauVatTuSharedComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_15__["PageLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_17__["IconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _hop_dong_thau_vat_tu_routing_module__WEBPACK_IMPORTED_MODULE_8__["HopDongThauVatTuRoutingModule"]
        ],
        providers: [
            _hop_dong_thau_vat_tu_service__WEBPACK_IMPORTED_MODULE_5__["HopDongThauVatTuService"],
            { provide: src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"], useClass: _hop_dong_thau_vat_tu_service__WEBPACK_IMPORTED_MODULE_5__["HopDongThauVatTuService"] },
        ]
    })
], HopDongThauVatTuModule);



/***/ }),

/***/ "./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/danh-muc/hop-dong-thau/vat-tu/hop-dong-thau-vat-tu.service.ts ***!
  \********************************************************************************************/
/*! exports provided: HopDongThauVatTuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopDongThauVatTuService", function() { return HopDongThauVatTuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");




let HopDongThauVatTuService = class HopDongThauVatTuService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'HopDongThauVatTu';
    }
};
HopDongThauVatTuService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
HopDongThauVatTuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HopDongThauVatTuService);



/***/ })

}]);
//# sourceMappingURL=danh-muc-hop-dong-thau-vat-tu-hop-dong-thau-vat-tu-module-es2015.js.map