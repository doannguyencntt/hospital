(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kham-doan-kham-doan-cong-ty-kham-doan-cong-ty-module"],{

/***/ "./node_modules/@iconify/icons-ic/add-circle.js":
/*!******************************************************!*\
  !*** ./node_modules/@iconify/icons-ic/add-circle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = {
	"body": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
};
exports.__esModule = true;
exports.default = data;


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-form [crumbs]=\"[ {Title:'Khám Đoàn',Path:''}\n        ,{Title:'DS Công Ty', Path: '/kham-doan/cong-ty', queryParams: {holdQuery : true}}\n        ,{Title: header,Path:'',Active:true}\n    ]\" [isicMoreVert]=\"false\">\n</app-header-form>\n\n<div class=\"p-gutter\" vexContainer>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"card\" fxFlex=\"auto\">\n            <div class=\"px-6 py-4 border-b\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <h2 class=\"title m-0\">{{title}}</h2>\n            </div>\n\n            <div class=\"px-6 py-4\" fxLayout=\"column\">\n\n                <div class=\"border-b\" fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n                    <app-textbox id=\"maCongTY\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã công ty\" [required]=\"true\" [(model)]=\"khamDoanCongTy.Ma\" [maxlength]=\"50\" [validationerror]=\"'Ma' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <app-textbox id=\"tenCongTY\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Tên công ty\" [required]=\"true\" [(model)]=\"khamDoanCongTy.Ten\" [maxlength]=\"250\" [validationerror]=\"'Ten' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <app-textboxmask id=\"SoDienThoai\" fxFlex=\"20%\" fxFlex.sm=\"20%\" mask=\"000 000-0000\" label=\"Số Điện Thoại\" [(model)]=\"khamDoanCongTy.SoDienThoai\" [required]=\"true\" [validationerror]=\"'SoDienThoai' | validationerror:validationErrors\">\n                    </app-textboxmask>\n                    <app-textbox id=\"diaChiCongTY\" fxFlex=\"40%\" fxFlex.sm=\"40%\" label=\"Địa chỉ\" [required]=\"true\" [(model)]=\"khamDoanCongTy.DiaChi\" [maxlength]=\"250\" [validationerror]=\"'DiaChi' | validationerror:validationErrors\">\n                    </app-textbox>\n\n                    <app-textbox id=\"daiDienCongTY\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Đại diện\"  [(model)]=\"khamDoanCongTy.NguoiDaiDien\" [maxlength]=\"100\" [validationerror]=\"'NguoiDaiDien' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <app-textbox id=\"nguoiLienHeCongTY\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Người liên hệ\" [(model)]=\"khamDoanCongTy.NguoiLienHe\"  [maxlength]=\"100\" [validationerror]=\"'NguoiLienHe' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <app-textbox id=\"maSoThueCongTY\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"Mã số thuế\" [maxlength]=\"20\" [(model)]=\"khamDoanCongTy.MaSoThue\">\n                    </app-textbox>\n                    <app-textbox id=\"taiKhoanNganHangCongTY\" fxFlex=\"20%\" fxFlex.sm=\"20%\" label=\"TK NH\" [(model)]=\"khamDoanCongTy.SoTaiKhoanNganHang\" [maxlength]=\"1000\">\n                    </app-textbox>\n                    <app-radio fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"loaiCongTy\" name=\"loaiCongTy\" [(model)]=\"khamDoanCongTy.LoaiCongTy\" [items]=\"[{Value:1,Text:'Tư Nhân'},{Value:2,Text:'Nhà Nước'}]\" label=\"Công ty\">\n                    </app-radio>\n\n                    <app-radio fxFlex=\"20%\" fxFlex.sm=\"20%\" id=\"trangThai\" name=\"trangThai\" [required]=\"true\" [(model)]=\"khamDoanCongTy.CoHoatDong\" [items]=\"[{Value:true,Text:'Hoạt động'},{Value:false,Text:'Tạm ngưng'}]\" label=\"Trạng thái\" [validationerror]=\"'CoHoatDong' | validationerror:validationErrors\">\n                    </app-radio>\n\n                </div>\n\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"form-footer mt-6\">\n                    <button *ngIf=\"!loading\" style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" (click)=\"quayLai()\">Hủy</button>\n                    <button *ngIf=\"!loading\" mat-raised-button mat-button color=\"primary\" (click)=\"xuLyLuu()\">Lưu</button>\n                    <button *ngIf=\"loading\" class=\"btn btn-raised btn-raised btn-primary mb-0\"><img src=\"/assets/img/loader.gif\"\n                      alt=\"Loading\" /></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <div>\n                <vex-breadcrumbs [crumbs]=\"\n                    [\n                        {Title:'Khám Đoàn',Path:''},\n                        {Title:'DS Công Ty',Path:'', Active:true}\n                    ]\">\n                </vex-breadcrumbs>\n            </div>\n        </div>\n    </vex-page-layout-header>\n\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid #gridParent [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\" [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [checkboxAble]=\"false\" [allowSortDefault]=\"false\" [headerTemplate]=\"headerTemplate\" [searchString]=\"timKiemObj.SearchString\"\n                [showStt]=\"true\" [urlGetData]=\"getDataForGridUrl\" [urlGetTotalPage]=\"getTotalForGridUrl\">\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-0 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <div class=\"bg-card rounded-full border px-4 ml-2\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\" type=\"search\" name=\"searchString\" [(ngModel)]=\"timKiemObj.SearchString\" (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\" placeholder=\"Nhập từ khóa...\"\n                        />\n                    </div>\n                    <button class=\"ml-4\" fxFlex=\"none\" fxHide.gt-xs mat-icon-button type=\"button\" (click)=\"clearSearch()\">\n                            <mat-icon [icIcon]=\"icSearch\"></mat-icon>\n                        </button>\n\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" class=\"ml-auto\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Lọc cột\" type=\"button\">\n                            <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                        </button>\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of _gridColumnsFilter\">\n                            <button class=\"checkbox-item mat-menu-item\" *ngIf=\"!column.HideFilter\">\n                                    <mat-checkbox [disabled]=\"!column.HasFilter\" [(ngModel)]=\"_isCheckColumnFilter\" color=\"primary\">\n                                        {{ column.Title }}\n                                    </mat-checkbox>\n                                </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-3\" fxFlex=\"none\" mat-icon-button kendoTooltip title=\"Xuất Excel\" type=\"button\" (click)=\"xuLyXuatExcel()\">\n                            <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                        </button>\n\n                    <button (click)=\"showPopupChiTiet()\" class=\"ml-3 mr-6\" color=\"primary\" fxFlex=\"none\" mat-mini-fab kendoTooltip title=\"Thêm\" type=\"button\">\n                            <mat-icon [icIcon]=\"icAdd\"></mat-icon>\n                        </button>\n                </div>\n            </ng-template>\n\n            <ng-template #maCongTyTemplate let-dataItem>\n                <a (click)=\"showPopupChiTiet(dataItem.Id)\">\n                    <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaCongTy}}\">{{dataItem.MaCongTy}}</p>\n                </a>\n            </ng-template>\n\n            <ng-template #trangThaiTemplate let-dataItem>\n                <div style=\"position: relative;\">\n                    <span [ngClass]=\"{'orangeText': dataItem.CoHoatDong == true,\n                                'greenText': dataItem.CoHoatDong == false}\">\n                            {{dataItem.TrangThai}}\n                        </span>\n                </div>\n            </ng-template>\n\n            <ng-template #actionTemplate let-dataItem>\n                <div class=\"text-center\" kendoTooltip>\n                    <button style=\"color: red;\" mat-icon-button kendoTooltip title=\"Xóa\" type=\"button\" (click)=\"xoa(dataItem.Id)\">\n                            <mat-icon [icIcon]=\"icDelete\"></mat-icon>\n                        </button>\n                </div>\n            </ng-template>\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.html":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.html ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div style=\"text-transform: uppercase;\">{{title}}</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close [mat-dialog-close]=\"null\" tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"height: 240px;\">\n    <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <app-textbox id=\"maPhong\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Mã phòng\" [maxlength]=\"50\" [required]=\"true\"> \n        </app-textbox>\n        <app-textbox id=\"tenPhong\" fxFlex=\"50%\" fxFlex.sm=\"50%\" label=\"Tên phòng\" [maxlength]=\"50\" [required]=\"true\">\n        </app-textbox>\n        <app-textbox id=\"ghiChu\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"Ghi chú\" [maxlength]=\"50\">\n        </app-textbox>\n        <app-multiselect id=\"ChuanDoanLienKetICD\" fxFlex=\"100%\" fxFlex.sm=\"100%\" label=\"DS nhân viên\" class=\"item-no-padding\"\n            [required]=\"true\" [popupSettings]=\"null\"\n            [template]=\"nhanVienTemplate\" [templateHeader]=\"nhanVienTemplateHeader\" url=\"ChuanDoan/GetChuanDoanLienKetICD\">\n            <ng-template #nhanVienTemplateHeader let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <th width=\"20%\">Mã</th>\n                        <th>Tên</th>\n                    </tr>\n                </table>\n            </ng-template>\n            <ng-template #nhanVienTemplate let-dataItem>\n                <table width=\"100%\" class=\"table-combobox\">\n                    <tr>\n                        <td width=\"20%\">{{dataItem.Ma}}</td>\n                        <td>{{dataItem.TenTiengViet}}</td>\n                    </tr>\n                </table>\n            </ng-template>\n        </app-multiselect>\n    </div>\n</mat-dialog-content>\n\n<mat-dialog-actions class=\"mt-4 pb-5\">\n    <button style=\"margin-left: auto;\" type=\"button\" mat-stroked-button color=\"primary\" [mat-dialog-close]=\"null\">Hủy</button>\n    <button *ngIf=\"data.Id == null\" mat-raised-button mat-button color=\"primary\" (click)=\"xuLyThem()\">Thêm</button>\n    <button *ngIf=\"data.Id != null\" mat-raised-button mat-button color=\"primary\" (click)=\"xuLyLuu()\">Lưu</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".po-h {\n  color: #005dab;\n  position: relative;\n  left: 5px;\n}\n\n.po-h mat-icon {\n  display: contents;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tY29uZy10eS9raGFtLWRvYW4tY29uZy10eS1kZXRhaWwtcG9wdXAvQzpcXHByb2plY3RcXGZyZWVsYW5jZXJcXGhvc3BpdGFsL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxraGFtLWRvYW5cXGtoYW0tZG9hbi1jb25nLXR5XFxraGFtLWRvYW4tY29uZy10eS1kZXRhaWwtcG9wdXBcXGtoYW0tZG9hbi1jb25nLXR5LWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tY29uZy10eS9raGFtLWRvYW4tY29uZy10eS1kZXRhaWwtcG9wdXAva2hhbS1kb2FuLWNvbmctdHktZGV0YWlsLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWNvbmctdHkva2hhbS1kb2FuLWNvbmctdHktZGV0YWlsLXBvcHVwL2toYW0tZG9hbi1jb25nLXR5LWRldGFpbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wby1oIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xufVxuXG4ucG8taCBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufSIsIi5wby1oIHtcbiAgY29sb3I6ICMwMDVkYWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNXB4O1xufVxuXG4ucG8taCBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: KhamDoanCongTyDetailPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyDetailPopupComponent", function() { return KhamDoanCongTyDetailPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/add-circle */ "./node_modules/@iconify/icons-ic/add-circle.js");
/* harmony import */ var _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_doan_cong_ty_phong_popup_kham_doan_cong_ty_phong_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.ts");
/* harmony import */ var _kham_doan_cong_ty_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../kham-doan-cong-ty.model */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.model.ts");
/* harmony import */ var _kham_doan_cong_ty_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../kham-doan-cong-ty.service */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.service.ts");



















let KhamDoanCongTyDetailPopupComponent = class KhamDoanCongTyDetailPopupComponent {
    constructor(authService, route, dialog, location, notificationService, baseService) {
        this.authService = authService;
        this.route = route;
        this.dialog = dialog;
        this.location = location;
        this.notificationService = notificationService;
        this.baseService = baseService;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.icAddCircle = _iconify_icons_ic_add_circle__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.validationErrors = [];
        this.format = 'n2';
        this.baseRoute = '/kham-doan/cong-ty';
        this.khamDoanCongTy = new _kham_doan_cong_ty_model__WEBPACK_IMPORTED_MODULE_17__["KhamDoanCongTy"]();
        this.loading = false;
        this.gridColumns = [];
        this.title = '';
        this.header = '';
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_14__["DocumentType"].KhamDoanCongTy;
        this.id = this.route.snapshot.params.id;
        this.id = (this.id === undefined || this.id === null) ? 0 : this.id;
        if (this.id === 0) {
            this.title = 'Thêm công ty';
            this.header = 'Thêm Công Ty';
        }
        else {
            this.title = 'Chi tiết công ty';
            this.header = 'Chi Tiết Công Ty';
            this.getById(this.id);
        }
    }
    getById(id) {
        // tslint:disable-next-line: deprecation
        this.baseService.getById(id).subscribe(resultData => {
            this.khamDoanCongTy = Object.assign({}, resultData);
        });
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == null
            || (this.popupLoadingData.openDialogs && this.popupLoadingData.openDialogs.length === 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"], {
                disableClose: true,
                width: '200px',
                height: '90px',
                data: { Title: 'Đang tải dữ liệu...' },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData) {
            this.popupLoadingData.close();
        }
    }
    OnValidate() {
        this.validationErrors = [];
        if (!this.khamDoanCongTy.Ma) {
            const validate = {
                Field: 'Ma',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["KhamDoanCongTyMessage"].MessageMaNotNull
            };
            this.validationErrors.push(validate);
        }
        if (!this.khamDoanCongTy.Ten) {
            const validate = {
                Field: 'Ten',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["KhamDoanCongTyMessage"].MessageTenNotNull
            };
            this.validationErrors.push(validate);
        }
        if (!this.khamDoanCongTy.SoDienThoai) {
            const validate = {
                Field: 'SoDienThoai',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["KhamDoanCongTyMessage"].MessageSdtNotNull
            };
            this.validationErrors.push(validate);
        }
        if (!this.khamDoanCongTy.DiaChi) {
            const validate = {
                Field: 'DiaChi',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["KhamDoanCongTyMessage"].MessageDiaChiNotNull
            };
            this.validationErrors.push(validate);
        }
        // if (!this.khamDoanCongTy.NguoiDaiDien) {
        //     const validate = {
        //         Field: 'NguoiDaiDien',
        //         Message: KhamDoanCongTyMessage.MessageNguoiDaiDienNotNull
        //     };
        //     this.validationErrors.push(validate);
        // }
        // if (!this.khamDoanCongTy.NguoiLienHe) {
        //     const validate = {
        //         Field: 'NguoiLienHe',
        //         Message: KhamDoanCongTyMessage.MessageNguoiLienHeNotNull
        //     };
        //     this.validationErrors.push(validate);
        // }
        if (this.khamDoanCongTy.CoHoatDong == null) {
            const validate = {
                Field: 'CoHoatDong',
                Message: src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["KhamDoanCongTyMessage"].MessageCoHoatDongNotNull
            };
            this.validationErrors.push(validate);
        }
    }
    xuLyLuu() {
        let securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Add;
        let mess = 'Bạn có chắc chắn muốn tạo công ty này không?';
        if (this.id !== 0) {
            securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update;
            mess = 'Bạn có chắc chắn muốn lưu công ty này không?';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: mess }
                // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    this.OnValidate();
                    if (this.id !== 0) {
                        this.loading = true;
                        if (this.validationErrors != null && this.validationErrors.some(x => x)) {
                            this.loading = false;
                            return;
                        }
                        // tslint:disable-next-line: deprecation
                        this.baseService.update(this.khamDoanCongTy).subscribe(_ => {
                            this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ['Chỉnh sửa']));
                            this.loading = false;
                            this.quayLai();
                        }, (err) => {
                            this.validationErrors = err.ValidationErrors;
                            this.notificationService.showError(mess);
                            this.loading = false;
                            if (err.Message !== 'Validation Failed') {
                                this.notificationService.showError(err.Message);
                            }
                        });
                    }
                    else {
                        this.loading = true;
                        if (this.validationErrors != null && this.validationErrors.some(x => x)) {
                            this.loading = false;
                            return;
                        }
                        // tslint:disable-next-line: deprecation
                        this.baseService.create(this.khamDoanCongTy).subscribe(resultData => {
                            this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_10__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].ActionSuccessfully, ['Thêm']));
                            this.loading = false;
                            this.quayLai();
                        }, (err) => {
                            this.validationErrors = err.ValidationErrors;
                            this.notificationService.showError(mess);
                            this.loading = false;
                            if (err.Message !== 'Validation Failed') {
                                this.notificationService.showError(err.Message);
                            }
                        });
                    }
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupPhongKhamCongTy(id = null) {
        let securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Add;
        if (this.id != null) {
            securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_15__["SecurityOperation"].Update;
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.dialog.open(_kham_doan_cong_ty_phong_popup_kham_doan_cong_ty_phong_popup_component__WEBPACK_IMPORTED_MODULE_16__["KhamDoanCongTyPhongPopupComponent"], {
                disableClose: false,
                width: '600px',
                data: { Id: id }
                // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                this.gridChild.search();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_13__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    quayLai() {
        this.location.back();
    }
};
KhamDoanCongTyDetailPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
    { type: _kham_doan_cong_ty_service__WEBPACK_IMPORTED_MODULE_18__["KhamDoanCongTyService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maPhongTemplate', { static: true })
], KhamDoanCongTyDetailPopupComponent.prototype, "maPhongTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanCongTyDetailPopupComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridChild', { static: true })
], KhamDoanCongTyDetailPopupComponent.prototype, "gridChild", void 0);
KhamDoanCongTyDetailPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-kham-doan-cong-ty-detail-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-cong-ty-detail-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-cong-ty-detail-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.scss")).default]
    })
], KhamDoanCongTyDetailPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText {\n  color: green;\n}\n\n.orangeText {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tY29uZy10eS9raGFtLWRvYW4tY29uZy10eS1saXN0L0M6XFxwcm9qZWN0XFxmcmVlbGFuY2VyXFxob3NwaXRhbC9zcmNcXGFwcFxcbW9kdWxlc1xcbWFpblxca2hhbS1kb2FuXFxraGFtLWRvYW4tY29uZy10eVxca2hhbS1kb2FuLWNvbmctdHktbGlzdFxca2hhbS1kb2FuLWNvbmctdHktbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2toYW0tZG9hbi9raGFtLWRvYW4tY29uZy10eS9raGFtLWRvYW4tY29uZy10eS1saXN0L2toYW0tZG9hbi1jb25nLXR5LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4va2hhbS1kb2FuL2toYW0tZG9hbi1jb25nLXR5L2toYW0tZG9hbi1jb25nLXR5LWxpc3Qva2hhbS1kb2FuLWNvbmctdHktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlblRleHQge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5vcmFuZ2VUZXh0IHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iLCIuZ3JlZW5UZXh0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub3JhbmdlVGV4dCB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: KhamDoanCongTyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyListComponent", function() { return KhamDoanCongTyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iconify/icons-ic/twotone-add */ "./node_modules/@iconify/icons-ic/twotone-add.js");
/* harmony import */ var _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iconify/icons-ic/outline-content-copy */ "./node_modules/@iconify/icons-ic/outline-content-copy.js");
/* harmony import */ var _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/utilities/local-storage.helper */ "./src/app/core/utilities/local-storage.helper.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _kham_doan_cong_ty_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../kham-doan-cong-ty.model */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.model.ts");























let KhamDoanCongTyListComponent = class KhamDoanCongTyListComponent {
    constructor(authService, notificationService, route, location, dialog, apiService, router) {
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
        this.icAdd = _iconify_icons_ic_twotone_add__WEBPACK_IMPORTED_MODULE_5___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.icCopy = _iconify_icons_ic_outline_content_copy__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.baseRoute = '/kham-doan/cong-ty';
        this.gridColumns = [];
        this._gridColumnsFilter = [];
        this._isCheckColumnFilter = true;
        this.strAdditionalSearchString = '';
        this.timKiemObj = new _kham_doan_cong_ty_model__WEBPACK_IMPORTED_MODULE_22__["KhamDoanCongTyTimKiem"]();
        this.getDataForGridUrl = 'KhamDoan/GetDataListCongTyForGridAsync';
        this.getTotalForGridUrl = 'KhamDoan/GetTotalPageListCongTyForGridAsync';
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_15__["DocumentType"].KhamDoanCongTy;
        let hasLocalSearchString = false;
        if (this.route.snapshot.queryParams.holdQuery) {
            const holdQuery = this.route.snapshot.queryParams.holdQuery;
            if (holdQuery != null && holdQuery) {
                const additionalSearchString = src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].getItem('additionalSearchStringKhamDoanDanhSachCongTy');
                if (additionalSearchString != null) {
                    this.timKiemObj = JSON.parse(additionalSearchString);
                    this.gridChild.additionalSearchString = this.strAdditionalSearchString = additionalSearchString;
                    hasLocalSearchString = true;
                }
            }
        }
        if (!hasLocalSearchString) {
            this.gridChild.additionalSearchString = null;
            src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].removeItem('additionalSearchStringKhamDoanDanhSachCongTy');
        }
        this.gridColumns = [
            { Field: 'MaCongTy', Title: 'Mã công ty', Width: 80, Sortable: true, Template: this.maCongTyTemplate },
            { Field: 'TenCongTy', Title: 'Tên công ty', Width: 180, Sortable: true },
            { Field: 'LoaiCongTy', Title: 'Loại công ty', Width: 100, Sortable: true },
            { Field: 'DiaChi', Title: 'Địa chỉ', Width: 140, Sortable: true },
            { Field: 'DienThoai', Title: 'Điện thoại', Width: 100, Sortable: true },
            { Field: 'MaSoThue', Title: 'Mã số thuế', Width: 100, Sortable: true },
            { Field: 'TaiKhoanNganHang', Title: 'TK NH', Width: 100, Sortable: true },
            { Field: 'DaiDien', Title: 'Đại diện', Width: 120, Sortable: true },
            { Field: 'NguoiLienHe', Title: 'Người liên hệ', Width: 120, Sortable: true },
            { Field: 'TrangThai', Title: 'Trạng thái', Width: 100, Sortable: true, Template: this.trangThaiTemplate },
            { Field: 'Action', Title: '', Width: 40, Sortable: false, Template: this.actionTemplate }
        ];
        this._gridColumnsFilter = this.gridColumns.filter(p => p.Title !== '');
    }
    searchChanges(event) {
        if ((event == null || event === '') && this.strAdditionalSearchString !== '') {
            this.timKiemNangCao();
        }
    }
    onKey(event) {
        if (event.key === 'Enter') {
            this.timKiemNangCao();
        }
    }
    clearSearch() {
        this.timKiemObj.SearchString = null;
        this.gridChild.searchString = null;
        this.timKiemNangCao();
    }
    timKiemNangCao() {
        this.location.replaceState(this.baseRoute + '?holdQuery=true');
        const queryString = JSON.stringify(this.timKiemObj);
        this.gridChild._additionalSearchString = this.strAdditionalSearchString = queryString;
        src_app_core_utilities_local_storage_helper__WEBPACK_IMPORTED_MODULE_16__["LocalStorageHelper"].setItem('additionalSearchStringKhamDoanDanhSachCongTy', queryString);
        this.gridChild.search();
    }
    xuLyXuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Process)) {
            // tslint:disable-next-line: deprecation
            this.apiService.postExportExcel('KhamDoan/ExportDanhSachCongTy', this.gridChild._gridQueryInfo).subscribe(res => {
                const dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].downLoadFile(res, 'application/vnd.ms-excel', 'CongTy' + dateTimeNow.getFullYear() + '.xlsx');
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    showPopupChiTiet(id = null) {
        let securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Add;
        let url = '/them/';
        if (id != null) {
            securityOperation = src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Update;
            url = '/chi-tiet/';
        }
        if (this.authService.hasPermission(this.documentType, securityOperation)) {
            this.router.navigate([this.baseRoute + url + (id == null ? '' : id)]);
            // this.dialog.open(KhamDoanCongTyDetailPopupComponent, {
            //   disableClose: false,
            //   width: '1600px',
            //   data: { Id: id}
            // }).afterClosed().subscribe(result => {
            //   this.gridChild.search();
            // });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xoa(Id) {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_18__["SecurityOperation"].Delete)) {
            this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"], {
                disableClose: false,
                width: '400px',
                data: { Title: 'Xác nhận', Message: src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].MessConfirm, ['xóa']) }
                // tslint:disable-next-line: deprecation
            }).afterClosed().subscribe(result => {
                if (result === 'Yes') {
                    // tslint:disable-next-line: deprecation
                    this.apiService.delete('KhamDoan/XuLyXoaCongTy?id=' + Id).subscribe(_ => {
                        this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_17__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].ActionSuccessfully, ['Xóa']));
                        this.gridChild.search();
                    }, err => {
                        if (err.Message !== 'Validation Failed') {
                            this.notificationService.showError(err.Message);
                        }
                    });
                }
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_19__["SystemMessage"].UnAuthorizedMessage);
        }
    }
};
KhamDoanCongTyListComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_10__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["Location"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maCongTyTemplate', { static: true })
], KhamDoanCongTyListComponent.prototype, "maCongTyTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trangThaiTemplate', { static: true })
], KhamDoanCongTyListComponent.prototype, "trangThaiTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('actionTemplate', { static: true })
], KhamDoanCongTyListComponent.prototype, "actionTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridParent', { static: true })
], KhamDoanCongTyListComponent.prototype, "gridChild", void 0);
KhamDoanCongTyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'app-kham-doan-cong-ty-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-cong-ty-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-cong-ty-list.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.scss")).default]
    })
], KhamDoanCongTyListComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9raGFtLWRvYW4va2hhbS1kb2FuLWNvbmctdHkva2hhbS1kb2FuLWNvbmctdHktcGhvbmctcG9wdXAva2hhbS1kb2FuLWNvbmctdHktcGhvbmctcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: KhamDoanCongTyPhongPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyPhongPopupComponent", function() { return KhamDoanCongTyPhongPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iconify/icons-ic/twotone-delete */ "./node_modules/@iconify/icons-ic/twotone-delete.js");
/* harmony import */ var _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");












let KhamDoanCongTyPhongPopupComponent = class KhamDoanCongTyPhongPopupComponent {
    constructor(authService, dialog, notificationService, apiService, data, dialogRef) {
        this.authService = authService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_3___default.a;
        this.icDelete = _iconify_icons_ic_twotone_delete__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.validationErrors = [];
        this.title = "";
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_10__["DocumentType"].User; // cần cập nhật lại
        if (this.data.Id == null) {
            this.title = "Thêm phòng";
        }
        else {
            this.title = "Cập nhật phòng";
        }
    }
    showPopupLoadingData() {
        if (this.popupLoadingData == undefined
            || this.popupLoadingData == null
            || this.popupLoadingData.openDialogs == undefined
            || (this.popupLoadingData.openDialogs != undefined && this.popupLoadingData.openDialogs.length == 0)) {
            this.popupLoadingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"], {
                disableClose: true,
                width: "200px",
                height: "90px",
                data: { Title: "Đang tải dữ liệu..." },
            });
        }
    }
    closePopupLoadingData() {
        if (this.popupLoadingData != undefined && this.popupLoadingData != null) {
            this.popupLoadingData.close();
        }
    }
    xuLyThem() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Add)) {
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    xuLyLuu() {
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_11__["SecurityOperation"].Update)) {
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_9__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    close() {
        this.dialogRef.close();
    }
};
KhamDoanCongTyPhongPopupComponent.ctorParameters = () => [
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
KhamDoanCongTyPhongPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kham-doan-cong-ty-phong-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kham-doan-cong-ty-phong-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kham-doan-cong-ty-phong-popup.component.scss */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], KhamDoanCongTyPhongPopupComponent);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: KhamDoanCongTyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyRoutingModule", function() { return KhamDoanCongTyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _kham_doan_cong_ty_detail_popup_kham_doan_cong_ty_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.ts");
/* harmony import */ var _kham_doan_cong_ty_list_kham_doan_cong_ty_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kham-doan-cong-ty-list/kham-doan-cong-ty-list.component */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.ts");








const routes = [
    {
        path: '',
        component: _kham_doan_cong_ty_list_kham_doan_cong_ty_list_component__WEBPACK_IMPORTED_MODULE_7__["KhamDoanCongTyListComponent"],
        data: {
            title: 'Công ty',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanCongTy,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'them',
        component: _kham_doan_cong_ty_detail_popup_kham_doan_cong_ty_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanCongTyDetailPopupComponent"],
        data: {
            title: 'Thêm công ty',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanCongTy,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
    {
        path: 'chi-tiet/:id',
        component: _kham_doan_cong_ty_detail_popup_kham_doan_cong_ty_detail_popup_component__WEBPACK_IMPORTED_MODULE_6__["KhamDoanCongTyDetailPopupComponent"],
        data: {
            title: 'Chi tiết công ty',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].KhamDoanCongTy,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].Update
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    },
];
let KhamDoanCongTyRoutingModule = class KhamDoanCongTyRoutingModule {
};
KhamDoanCongTyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KhamDoanCongTyRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.model.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.model.ts ***!
  \*************************************************************************************/
/*! exports provided: KhamDoanCongTyTimKiem, KhamDoanCongTy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyTimKiem", function() { return KhamDoanCongTyTimKiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTy", function() { return KhamDoanCongTy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class KhamDoanCongTyTimKiem {
    constructor(SearchString = null) {
        this.SearchString = SearchString;
    }
}
class KhamDoanCongTy {
    constructor(Ma = null, Ten = null, SoDienThoai = null, DiaChi = null, NguoiDaiDien = null, NguoiLienHe = null, MaSoThue = null, SoTaiKhoanNganHang = null, LoaiCongTy = 1, CoHoatDong = true) {
        this.Ma = Ma;
        this.Ten = Ten;
        this.SoDienThoai = SoDienThoai;
        this.DiaChi = DiaChi;
        this.NguoiDaiDien = NguoiDaiDien;
        this.NguoiLienHe = NguoiLienHe;
        this.MaSoThue = MaSoThue;
        this.SoTaiKhoanNganHang = SoTaiKhoanNganHang;
        this.LoaiCongTy = LoaiCongTy;
        this.CoHoatDong = CoHoatDong;
    }
}


/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.module.ts ***!
  \**************************************************************************************/
/*! exports provided: KhamDoanCongTyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyModule", function() { return KhamDoanCongTyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kham_doan_cong_ty_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kham-doan-cong-ty-routing.module */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-routing.module.ts");
/* harmony import */ var _kham_doan_cong_ty_list_kham_doan_cong_ty_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kham-doan-cong-ty-list/kham-doan-cong-ty-list.component */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-list/kham-doan-cong-ty-list.component.ts");
/* harmony import */ var _kham_doan_cong_ty_detail_popup_kham_doan_cong_ty_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-detail-popup/kham-doan-cong-ty-detail-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/@vex/components/page-layout/page-layout.module */ "./src/@vex/components/page-layout/page-layout.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/@vex/components/breadcrumbs/breadcrumbs.module */ "./src/@vex/components/breadcrumbs/breadcrumbs.module.ts");
/* harmony import */ var _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-tooltip */ "./node_modules/@progress/kendo-angular-tooltip/dist/fesm2015/index.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @visurel/iconify-angular */ "./node_modules/@visurel/iconify-angular/fesm2015/visurel-iconify-angular.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm2015/ng2-pdf-viewer.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm2015/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm2015/index.js");
/* harmony import */ var _kham_doan_cong_ty_phong_popup_kham_doan_cong_ty_phong_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component */ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty-phong-popup/kham-doan-cong-ty-phong-popup.component.ts");



















let KhamDoanCongTyModule = class KhamDoanCongTyModule {
};
KhamDoanCongTyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _kham_doan_cong_ty_list_kham_doan_cong_ty_list_component__WEBPACK_IMPORTED_MODULE_4__["KhamDoanCongTyListComponent"],
            _kham_doan_cong_ty_detail_popup_kham_doan_cong_ty_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanCongTyDetailPopupComponent"],
            _kham_doan_cong_ty_phong_popup_kham_doan_cong_ty_phong_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanCongTyPhongPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _kham_doan_cong_ty_routing_module__WEBPACK_IMPORTED_MODULE_3__["KhamDoanCongTyRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            src_vex_components_page_layout_page_layout_module__WEBPACK_IMPORTED_MODULE_8__["PageLayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            src_vex_components_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _progress_kendo_angular_tooltip__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_13__["IconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_17__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_16__["GridModule"],
            _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_14__["IntlModule"],
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]
        ],
        entryComponents: [
            _kham_doan_cong_ty_detail_popup_kham_doan_cong_ty_detail_popup_component__WEBPACK_IMPORTED_MODULE_5__["KhamDoanCongTyDetailPopupComponent"],
            _kham_doan_cong_ty_phong_popup_kham_doan_cong_ty_phong_popup_component__WEBPACK_IMPORTED_MODULE_18__["KhamDoanCongTyPhongPopupComponent"]
        ]
    })
], KhamDoanCongTyModule);



/***/ }),

/***/ "./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/main/kham-doan/kham-doan-cong-ty/kham-doan-cong-ty.service.ts ***!
  \***************************************************************************************/
/*! exports provided: KhamDoanCongTyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KhamDoanCongTyService", function() { return KhamDoanCongTyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base.service */ "./src/app/core/services/base.service.ts");




let KhamDoanCongTyService = class KhamDoanCongTyService extends src_app_core_services_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(apiService) {
        super(apiService);
        this.controllerName = 'KhamDoan';
    }
};
KhamDoanCongTyService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
KhamDoanCongTyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], KhamDoanCongTyService);



/***/ })

}]);
//# sourceMappingURL=kham-doan-kham-doan-cong-ty-kham-doan-cong-ty-module-es2015.js.map