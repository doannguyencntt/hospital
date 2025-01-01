(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dieu-tri-noi-tru-luu-tru-ho-so-luu-tru-ho-so-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vex-page-layout>\n    <vex-page-layout-header class=\"pb-15\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n        <div [class.px-gutter]=\"true\" class=\"w-full flex justify-between\">\n            <vex-breadcrumbs [crumbs]=\"[\n            {Title:'Nội Trú',Path:''}\n            ,{Title:'Lưu Trữ Bệnh Án',Path:'',Active:true}\n            ]\">\n            </vex-breadcrumbs>\n        </div>\n    </vex-page-layout-header>\n    <vex-page-layout-content [class.px-gutter]=\"true\" class=\"-mt-6\">\n        <div class=\"card overflow-auto -mt-15\">\n            <app-grid [gridColumns]=\"gridColumns\" [documentType]=\"documentType\" [useActionDefault]=\"false\"\n                [lazyLoadPage]=\"true\" [useHeaderDefault]=\"false\" [allowSortDefault]=\"true\" [checkboxAble]=\"false\"\n                pageSize=\"50\" urlGetData=\"DieuTriNoiTru/GetDataForGridAsyncLuuTruHoSo\"\n                urlGetTotalPage=\"DieuTriNoiTru/GetTotalPageForGridAsyncLuuTruHoSo\" [sort]=\"sort\" [showStt]=\"true\"\n                [headerTemplate]=\"headerTemplate\">\n\n                <ng-template #tinhTrangTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.TinhTrang == 0\" class=\"orange\">\n                        <span>{{dataItem.TinhTrangDisplay}}</span>\n                    </label>\n                    <label *ngIf=\"dataItem.TinhTrang == 1\" class=\"green\">\n                        <span>{{dataItem.TinhTrangDisplay}}</span>\n                    </label>\n                </ng-template>\n                <ng-template #gioiTinhTemplate let-dataItem>\n                    <label *ngIf=\"dataItem.GioiTinh == 1\">\n                        <span>{{dataItem.GioiTinhDisplay}}</span>\n                    </label>\n                    <label *ngIf=\"dataItem.GioiTinh == 2\">\n                        <span>{{dataItem.GioiTinhDisplay}}</span>\n                    </label>\n                    <label *ngIf=\"dataItem.GioiTinh == 3\">\n                        <span>{{dataItem.GioiTinhDisplay}}</span>\n                    </label>\n                </ng-template>\n                <ng-template #maTNTemplate let-dataItem>\n                    <div class=\"text-center\" kendoTooltip>\n                        <a (click)=\"chinhSua(dataItem.Id)\">\n                            <p kendoTooltip class=\"reverse-ellipsis l\" title=\"{{dataItem.MaTN}}\">\n                                {{dataItem.MaTN}}</p>\n                        </a>\n                    </div>\n                </ng-template>\n                <ng-template #icdTemplate let-dataItem>\n                    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\"\n                                                class=\"mt-2\" kendoTooltip>\n                                                <span class=\"reverse-ellipsis r\" title=\"{{dataItem.ICDChanDoanDieuTri}}\">\n                                                    {{dataItem.ICDChanDoanDieuTri}}\n                                                </span>\n                                            </div>\n                </ng-template>\n            </app-grid>\n\n            <ng-template #headerTemplate>\n                <div class=\"bg-app-bar px-3 h-15 border-b sticky left-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    \n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'chuasapxep')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"luuTruHoSo.ChuaSapXep\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" label=\"Chưa sắp xếp\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"co-duyet\" (modelChange)=\"trangThaiCheckBox($event,'dasapxep')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"luuTruHoSo.DaSapXep\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" label=\"Đã sắp xếp\">\n                    </app-checkbox>\n\n                    <app-combobox id=\"KhoaId\" fxFlex=\"15%\" fxFlex.sm=\"15%\" class=\"mt-1 on-header\" label=\"Khoa phòng\" bind=\"true\"\n                        style=\"padding-top: 10px;\" url=\"DieuTriNoiTru/GetListKhoaPhongThuocNoiTru\" [(model)]=\"luuTruHoSo.KhoaPhongId\"\n                        [autoSelectFirstItem]=\"true\" popupSettings=\"null\" (modelChange)=\"changeKhoaPhong($event)\">\n                    </app-combobox>\n                    \n                    <app-checkbox name=\"BHYT\" (modelChange)=\"trangThaiCheckBox($event,'bhyt')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"luuTruHoSo.CheckBHYT\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" label=\"BHYT\">\n                    </app-checkbox>\n\n                    <app-checkbox name=\"VienPhi\" (modelChange)=\"trangThaiCheckBox($event,'vienphi')\" class=\"ml-2\"\n                        value=\"coduyet\" [(model)]=\"luuTruHoSo.CheckVienPhi\" fxFlex.lt-md=\"auto\" fxHide.xs fxLayout=\"row\"\n                        fxLayoutAlign=\"start center\" label=\"Viện phí\">\n                    </app-checkbox>\n\n\n                    <div class=\"bg-card rounded-full border px-4\" fxFlex=\"400px\" fxFlex.lt-md=\"auto\" fxHide.xs\n                        fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"margin-top: 2px;margin-left: 10px;\">\n                        <ic-icon [icIcon]=\"icSearch\" size=\"20px\"></ic-icon>\n                        <input [formControl]=\"searchCtrl\" class=\"px-4 py-2 border-0 outline-none w-full bg-transparent\"\n                            type=\"search\" name=\"searchString\" [(ngModel)]=\"luuTruHoSo.SearchString\"\n                            (keyup)=\"onKey($event)\" (ngModelChange)=\"searchChanges($event)\"\n                            placeholder=\"Nhập từ khóa...\" />\n                    </div>\n                   \n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"luuTruHoSo.TuNgay\" \n                        #tuNgay id=\"ThoiDiemTiepNhanTuFormat\" label=\"Từ ngày\" class=\"ml-2 on-header\"\n                        (modelChange)=\"changTuNgay($event)\" [maxDate]=\"luuTruHoSo.DenNgay\">\n                    </app-datetimepicker>\n\n                    <app-datetimepicker fxFlex=\"245px\" [(model)]=\"luuTruHoSo.DenNgay\" \n                        #denNgay id=\"ThoiDiemTiepNhanDenFormat\" label=\"Đến ngày\" class=\"ml-2 on-header\"\n                        (modelChange)=\"changDenNgay($event)\" [minDate]=\"luuTruHoSo.TuNgay\">\n                    </app-datetimepicker>\n                    \n\n                    <span fxFlex></span>\n                    <button [matMenuTriggerFor]=\"columnFilterMenu\" fxFlex=\"none\" class=\"mr-4\" mat-icon-button\n                        kendoTooltip title=\"Lọc cột\" type=\"button\">\n                        <mat-icon [icIcon]=\"icFilterList\"></mat-icon>\n                    </button>\n\n                    <mat-menu #columnFilterMenu=\"matMenu\" xPosition=\"before\" yPosition=\"below\">\n                        <div *ngFor=\"let column of gridColumns\">\n                            <button *ngIf=\"column.Title != ''\"\n                                class=\"checkbox-item mat-menu-item mat-checkbox mat-primary mat-checkbox-disabled _mat-animation-noopable ng-untouched ng-pristine mat-checkbox-checked\">\n                                <mat-checkbox [disabled]=\"true\" color=\"primary\">\n                                    {{ column.Title }}\n                                </mat-checkbox>\n                            </button>\n                        </div>\n                    </mat-menu>\n\n                    <button class=\"ml-4 right\" style=\"right: 20px;\" type=\"button\" mat-icon-button (click)=\"XuatExcel()\"\n                        kendoTooltip title=\"Xuất Excel\" fxFlex=\"none\">\n                        <mat-icon [icIcon]=\"icFileExcel\"></mat-icon>\n                    </button>\n\n\n                </div>\n            </ng-template>\n\n\n        </div>\n    </vex-page-layout-content>\n</vex-page-layout>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <div>CẬP NHẬT LƯU TRỮ BỆNH ÁN</div>\n    <button type=\"button\" mat-icon-button mat-dialog-close tabindex=\"-1\">\n        <mat-icon [icIcon]=\"icClose\"></mat-icon>\n    </button>\n</div>\n\n<mat-dialog-content style=\"min-height: 245px;\">\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <fieldset fxFlex=\"100%\" class=\"mb-3\" class=\"{{(thongLuuTruHoSo != null && thongLuuTruHoSo.LaCapCuu == true) ? 'bg-tthc-lightpink' : 'bg-tthc-lightblue'}}\">\n            <legend>\n                Thông tin bệnh án\n            </legend>\n\n            <div fxLayout=\"column\">\n                <ul class=\"inline\">\n                    <li>Mã TN: &nbsp;<strong>{{thongLuuTruHoSo.MaTN}}</strong></li>\n                    <li>Mã NB: &nbsp;<strong>{{thongLuuTruHoSo.MaBN}}</strong></li>\n                    <li>Họ tên: &nbsp;<strong>{{thongLuuTruHoSo.HoTen}}</strong></li>\n                    <li>Tuổi: &nbsp;<strong>{{thongLuuTruHoSo.Tuoi}}</strong></li>\n                    <li>Giới tính: &nbsp;<strong>{{thongLuuTruHoSo.GioiTinhDisplay}}</strong></li>\n                    <li>Địa chỉ: &nbsp;<strong>{{thongLuuTruHoSo.DiaChi}}</strong></li>\n                    <li>Nghề nghiệp: &nbsp;<strong>{{thongLuuTruHoSo.NgheNghiep}}</strong></li>\n                    <li>Số BA: &nbsp;<strong>{{thongLuuTruHoSo.SoBenhAn}}</strong></li>\n                    <li>Loại BA: &nbsp;<strong>{{thongLuuTruHoSo.LoaiBenhAn}}</strong></li>\n                    <li>Khoa: &nbsp;<strong>{{thongLuuTruHoSo.Khoa}}</strong></li>\n                    <li>Đối tượng: &nbsp;<strong>{{thongLuuTruHoSo.DoiTuong}}</strong></li>\n                </ul>\n            </div>\n        </fieldset>\n    </div>\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <fieldset fxFlex=\"100%\" class=\"mb-3 mt-3\">\n            <legend>\n                Thông tin điều trị\n            </legend>\n\n            <div fxLayout=\"column\">\n                <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                    style=\"padding-top: 16px;\">\n                    <div fxFlex=\"25%\">\n                        <label>\n                            Số lưu trữ: &nbsp;<strong>{{thongLuuTruHoSo.SoLuuTru}}</strong>\n                        </label>\n                    </div>\n                    <!-- required=\"true\" -->\n                    <app-textbox id=\"ThuTuSapXepLuuTru\" fxFlex=\"30%\" fxFlex.sm=\"30%\" label=\"Thứ tự sắp xếp\"\n                        maxlength=\"50\" (modelChange)=\"thuTuSapXepLuuTruChange($event)\" onlynumber=\"true\"\n                        [(model)]=\"thongLuuTruHoSo.ThuTuSapXepLuuTru\" \n                        [validationerror]=\"'ThuTuSapXepLuuTru' | validationerror:validationErrors\">\n                    </app-textbox>\n                    <div fxFlex=\"30%\">\n                        <label>\n                            Trạng thái bệnh án: &nbsp;<strong>{{thongLuuTruHoSo.TrangThaiSapXep}}</strong>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n    </div>\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\">\n        <div fxLayout=\"column\">\n            <div fxLayout=\"row wrap\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"16px grid\" fxLayoutGap.lt-sm=\"0\"\n                style=\"padding-top: 16px;\">\n                <label>\n                    Người thực hiện: &nbsp;<strong>{{thongLuuTruHoSo.NhanVienThucHien}}</strong>\n                </label>\n\n                <label>\n                    Ngày thực hiện: &nbsp;<strong>{{thongLuuTruHoSo.NgayThucHien}}</strong>\n                </label>\n            </div>\n        </div>\n\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions fxLayoutAlign=\"end center\" fxLayoutGap=\"8px\" class=\"float-right\">\n    <button tabindex=\"-1\" type=\"button\" mat-stroked-button color=\"primary\" mat-dialog-close>Hủy</button>\n    <button tabindex=\"-1\" type=\"button\" (click)=\"luu()\" mat-stroked-button color=\"primary\"\n        class=\"md-primary\">Lưu</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9kaWV1LXRyaS1ub2ktdHJ1L2x1dS10cnUtaG8tc28vbHV1LXRydS1oby1zby1saXN0L2x1dS10cnUtaG8tc28tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: LuuTruHoSoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuuTruHoSoListComponent", function() { return LuuTruHoSoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/component/grid/grid.component */ "./src/app/shared/component/grid/grid.component.ts");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iconify/icons-ic/twotone-search */ "./node_modules/@iconify/icons-ic/twotone-search.js");
/* harmony import */ var _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @iconify/icons-fa-solid/file-excel */ "./node_modules/@iconify/icons-fa-solid/file-excel.js");
/* harmony import */ var _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @iconify/icons-ic/twotone-filter-list */ "./node_modules/@iconify/icons-ic/twotone-filter-list.js");
/* harmony import */ var _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _luu_tru_ho_so_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../luu-tru-ho-so.model */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _luu_tru_ho_so_update_popup_luu_tru_ho_so_update_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.ts");


















let LuuTruHoSoListComponent = class LuuTruHoSoListComponent {
    constructor(dialog, apiService, authService, notificationService) {
        this.dialog = dialog;
        this.apiService = apiService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.icFileExcel = _iconify_icons_fa_solid_file_excel__WEBPACK_IMPORTED_MODULE_13___default.a;
        this.icFilterList = _iconify_icons_ic_twotone_filter_list__WEBPACK_IMPORTED_MODULE_14___default.a;
        this.icSearch = _iconify_icons_ic_twotone_search__WEBPACK_IMPORTED_MODULE_12___default.a;
        this.gridColumns = [];
        this.sort = [
            {
                field: "TinhTrang",
                dir: "asc",
            },
        ];
        this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"];
        this.date = new Date();
    }
    ngOnInit() {
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_3__["DocumentType"].LuuTruHoSo;
        this.luuTruHoSo = new _luu_tru_ho_so_model__WEBPACK_IMPORTED_MODULE_15__["LuuTruHoSo"]();
        this.gridColumns = [
            { Field: "ThuTuSapXepLuuTru", Title: "Thứ tự sắp xếp", Width: 120, Sortable: true },
            { Field: "MaTN", Title: "Mã TN", Width: 120, Sortable: true, Template: this.maTNTemplate },
            { Field: "SoBA", Title: "Số BA", Width: 120, Sortable: true },
            { Field: "SoLuuTru", Title: "Số lưu trữ", Width: 120, Sortable: true },
            { Field: "HoTen", Title: "Họ Tên", Width: 170, Sortable: true },
            { Field: "NamSinh", Title: "Năm sinh", Width: 80, Sortable: true },
            { Field: "GioiTinh", Title: "Giới tính", Width: 150, Sortable: true, Template: this.gioiTinhTemplate },
            { Field: "DoiTuong", Title: "Đối tượng", Width: 150, Sortable: true },
            { Field: "KhoaNhapVien", Title: "Khoa nhập viện", Width: 150, Sortable: true },
            { Field: "ICDChanDoanDieuTri", Title: "ICD-chẩn đoán điều trị", MinWidth: 150, Sortable: true, Template: this.icdTemplate },
            { Field: "NgayVaoVienDisplay", Title: "Ngày vào viện", Width: 150, Sortable: true },
            { Field: "NgayRaVienDisplay", Title: "Ngày ra viện", Width: 150, Sortable: true },
            { Field: "TinhTrangRaVien", Title: "Tình trạng vào viện", Width: 150, Sortable: true },
            { Field: "TinhTrang", Title: "Tình trạng", Width: 150, Sortable: true, Template: this.tinhTrangTemplate },
        ];
    }
    onKey(event) {
        if (event.key == "Enter") {
            this.timKiem();
        }
    }
    clearSearch() {
        this.luuTruHoSo.SearchString = null;
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
        if (tinhTrang == "dasapxep") {
            this.luuTruHoSo.DaSapXep = event;
        }
        if (tinhTrang == "chuasapxep") {
            this.luuTruHoSo.ChuaSapXep = event;
        }
        if (tinhTrang == "bhyt") {
            this.luuTruHoSo.CheckBHYT = event;
        }
        if (tinhTrang == "vienphi") {
            this.luuTruHoSo.CheckVienPhi = event;
        }
        this.timKiem();
    }
    timKiem() {
        var queryString = JSON.stringify(this.luuTruHoSo);
        this.gridChild._additionalSearchString = queryString;
        this.gridChild.search();
    }
    chinhSua(id) {
        var self = this;
        if (self.authService.hasPermission(self.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Update)) {
            self.dialog.open(_luu_tru_ho_so_update_popup_luu_tru_ho_so_update_popup_component__WEBPACK_IMPORTED_MODULE_17__["LuuTruHoSoUpdatePopupComponent"], {
                disableClose: false,
                width: '1100px',
                data: id,
            }).afterClosed().subscribe(() => {
                self.gridChild.search();
            });
        }
        else {
            self.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    XuatExcel() {
        this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"], {
            disableClose: true,
            width: '200px',
            height: '90px',
            data: { Title: 'Đang xuất excel...' }
        });
        if (this.authService.hasPermission(this.documentType, src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_10__["SecurityOperation"].Process)) {
            this.apiService.postExportExcel("DieuTriNoiTru/ExportLuuTruBenhAn", this.gridChild._gridQueryInfo).subscribe(res => {
                let dateTimeNow = new Date();
                src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].downLoadFile(res, "application/vnd.ms-excel", "LuuTruBenhAn" + dateTimeNow.getFullYear() + ".xlsx");
                this.dialog.closeAll();
            }, err => {
                this.notificationService.showError(err.Message);
                this.dialog.closeAll();
            });
        }
        else {
            this.notificationService.showError(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_11__["SystemMessage"].UnAuthorizedMessage);
        }
    }
    changTuNgay(event) {
        if (event != null) {
            this.luuTruHoSo.TuNgayText = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(event, "mm/dd/yyyy");
        }
        else {
            this.luuTruHoSo.TuNgayText = null;
        }
        this.timKiem();
    }
    changDenNgay(event) {
        if (event != null) {
            this.luuTruHoSo.DenNgaytext = src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_9__["CommonService"].formatDateTime(event, "mm/dd/yyyy");
        }
        else {
            this.luuTruHoSo.DenNgaytext = null;
        }
        this.timKiem();
    }
    changeKhoaPhong(event) {
        this.timKiem();
    }
};
LuuTruHoSoListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tinhTrangTemplate', { static: true })
], LuuTruHoSoListComponent.prototype, "tinhTrangTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('maTNTemplate', { static: true })
], LuuTruHoSoListComponent.prototype, "maTNTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gioiTinhTemplate', { static: true })
], LuuTruHoSoListComponent.prototype, "gioiTinhTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('icdTemplate', { static: true })
], LuuTruHoSoListComponent.prototype, "icdTemplate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_shared_component_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"], { static: true })
], LuuTruHoSoListComponent.prototype, "gridChild", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LuuTruHoSoListComponent.prototype, "sort", void 0);
LuuTruHoSoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-luu-tru-ho-so-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./luu-tru-ho-so-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./luu-tru-ho-so-list.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.scss")).default]
    })
], LuuTruHoSoListComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: LuuTruHoSoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuuTruHoSoRoutingModule", function() { return LuuTruHoSoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/guards/permission-guard.service */ "./src/app/core/guards/permission-guard.service.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/enum/security-operation.enum */ "./src/app/shared/enum/security-operation.enum.ts");
/* harmony import */ var _luu_tru_ho_so_list_luu_tru_ho_so_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./luu-tru-ho-so-list/luu-tru-ho-so-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.ts");







const routes = [
    {
        path: '',
        component: _luu_tru_ho_so_list_luu_tru_ho_so_list_component__WEBPACK_IMPORTED_MODULE_6__["LuuTruHoSoListComponent"],
        data: {
            title: 'Lưu trữ hồ sơ',
            DocumentType: src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].LuuTruHoSo,
            SecurityOperation: src_app_shared_enum_security_operation_enum__WEBPACK_IMPORTED_MODULE_5__["SecurityOperation"].View
        },
        canActivate: [src_app_core_guards_permission_guard_service__WEBPACK_IMPORTED_MODULE_3__["PermisssionGuard"]]
    }
];
let LuuTruHoSoRoutingModule = class LuuTruHoSoRoutingModule {
};
LuuTruHoSoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LuuTruHoSoRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-primary {\n  color: white;\n  background-color: #005dab;\n}\n\n.form-footer {\n  margin-top: 1.34375em;\n}\n\nfieldset {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  padding-top: 0.35em !important;\n  padding-bottom: 0.625em !important;\n  padding-left: 0.75em !important;\n  padding-right: 0.75em !important;\n  border: 1px #e0e0e0;\n  border-style: inherit;\n  height: auto;\n}\n\nfieldset legend {\n  display: flex;\n  align-items: flex-end;\n  text-transform: uppercase;\n}\n\nfieldset .item_right {\n  text-align: right !important;\n  float: right;\n}\n\nfieldset ul > li {\n  padding-right: 15px !important;\n}\n\nfieldset ul.inline > li {\n  display: inline-block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvbHV1LXRydS1oby1zby9sdXUtdHJ1LWhvLXNvLXVwZGF0ZS1wb3B1cC9DOlxccHJvamVjdFxcZnJlZWxhbmNlclxcaG9zcGl0YWwvc3JjXFxhcHBcXG1vZHVsZXNcXG1haW5cXGRpZXUtdHJpLW5vaS10cnVcXGx1dS10cnUtaG8tc29cXGx1dS10cnUtaG8tc28tdXBkYXRlLXBvcHVwXFxsdXUtdHJ1LWhvLXNvLXVwZGF0ZS1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9tYWluL2RpZXUtdHJpLW5vaS10cnUvbHV1LXRydS1oby1zby9sdXUtdHJ1LWhvLXNvLXVwZGF0ZS1wb3B1cC9sdXUtdHJ1LWhvLXNvLXVwZGF0ZS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW4vZGlldS10cmktbm9pLXRydS9sdXUtdHJ1LWhvLXNvL2x1dS10cnUtaG8tc28tdXBkYXRlLXBvcHVwL2x1dS10cnUtaG8tc28tdXBkYXRlLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLXByaW1hcnkge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkYWI7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEuMzQzNzVlbTtcbn1cblxuZmllbGRzZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHBhZGRpbmctdG9wOiAwLjM1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDAuNjI1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwLjc1ZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4ICNlMGUwZTA7XG4gIGJvcmRlci1zdHlsZTogaW5oZXJpdDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmZpZWxkc2V0IC5pdGVtX3JpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5maWVsZHNldCB1bCA+IGxpIHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG5maWVsZHNldCB1bC5pbmxpbmUgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufSIsIi5tZC1wcmltYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGFiO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxLjM0Mzc1ZW07XG59XG5cbmZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBwYWRkaW5nLXRvcDogMC4zNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMC43NWVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCAjZTBlMGUwO1xuICBib3JkZXItc3R5bGU6IGluaGVyaXQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5maWVsZHNldCAuaXRlbV9yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuZmllbGRzZXQgdWwgPiBsaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuZmllbGRzZXQgdWwuaW5saW5lID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: LuuTruHoSoUpdatePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuuTruHoSoUpdatePopupComponent", function() { return LuuTruHoSoUpdatePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iconify/icons-ic/twotone-close */ "./node_modules/@iconify/icons-ic/twotone-close.js");
/* harmony import */ var _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utilities/common.helper */ "./src/app/core/utilities/common.helper.ts");
/* harmony import */ var src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/enum/document-type.enum */ "./src/app/shared/enum/document-type.enum.ts");
/* harmony import */ var src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/configdata/system-message */ "./src/app/shared/configdata/system-message.ts");
/* harmony import */ var src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/component/dialogs/loading/loading.component */ "./src/app/shared/component/dialogs/loading/loading.component.ts");
/* harmony import */ var _luu_tru_ho_so_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../luu-tru-ho-so.model */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.model.ts");
/* harmony import */ var src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/component/dialogs/confirm/confirm.component */ "./src/app/shared/component/dialogs/confirm/confirm.component.ts");












let LuuTruHoSoUpdatePopupComponent = class LuuTruHoSoUpdatePopupComponent {
    constructor(ref, notificationService, apiService, dialog, cdRef, data, dialogRef) {
        this.ref = ref;
        this.notificationService = notificationService;
        this.apiService = apiService;
        this.dialog = dialog;
        this.cdRef = cdRef;
        this.data = data;
        this.dialogRef = dialogRef;
        this.icClose = _iconify_icons_ic_twotone_close__WEBPACK_IMPORTED_MODULE_2___default.a;
        this.documentType = src_app_shared_enum_document_type_enum__WEBPACK_IMPORTED_MODULE_7__["DocumentType"].LuuTruHoSo;
        this.validationErrors = null;
        this.isDisabled = false;
        this.popupSavingData = null;
    }
    ngOnInit() {
        this.thongLuuTruHoSo = new _luu_tru_ho_so_model__WEBPACK_IMPORTED_MODULE_10__["ThongLuuTruHoSo"]();
        this.getById(this.data);
    }
    getById(id) {
        var self = this;
        self.apiService.get("DieuTriNoiTru/GetThongTiLuuTruBenhAnNoiTru?id=" + id).subscribe((result) => {
            if (result != undefined && result != null) {
                this.thongLuuTruHoSo = result;
                if (this.thongLuuTruHoSo.ThuTuSapXepLuuTru == null || this.thongLuuTruHoSo.ThuTuSapXepLuuTru == '') {
                    this.isDisabled = true;
                }
            }
        }, (err) => {
            self.validationErrors = err.ValidationErrors;
            if (err.Message != "Validation Failed") {
                self.notificationService.showError(err.Message);
            }
        });
    }
    thuTuSapXepLuuTruChange(dataItem) {
        if (dataItem != null && dataItem != "") {
            this.isDisabled = false;
        }
        else {
            this.isDisabled = true;
        }
    }
    savingPage() {
        this.popupSavingData = this.dialog.open(src_app_shared_component_dialogs_loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], {
            disableClose: true,
            width: "200px",
            height: "90px",
            data: { Title: "Đang lưu dữ liệu..." },
        });
    }
    closepopupSavingData() {
        if (this.popupSavingData != undefined && this.popupSavingData != null) {
            this.popupSavingData.close();
        }
    }
    luu() {
        this.validationErrors = [];
        this.cdRef.detectChanges();
        let valudObj = {
            NoiTruBenhAnId: this.data,
            ThuTuSapXepLuuTru: this.thongLuuTruHoSo.ThuTuSapXepLuuTru
        };
        this.dialog.open(src_app_shared_component_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmComponent"], {
            disableClose: false,
            width: '500px',
            data: { Title: "Xác nhận", Message: "Bạn có chắc chắn muốn lưu dữ liệu này không?" }
        }).afterClosed().subscribe(result => {
            if (result == "Yes") {
                this.apiService.post("DieuTriNoiTru/CapNhatLuuTruBenhAn", valudObj).subscribe(() => {
                    this.closepopupSavingData();
                    this.notificationService.showSuccess(src_app_core_utilities_common_helper__WEBPACK_IMPORTED_MODULE_6__["CommonService"].format(src_app_shared_configdata_system_message__WEBPACK_IMPORTED_MODULE_8__["SystemMessage"].ActionSuccessfully, ["Lưu"]));
                    this.dialogRef.close();
                }, (err) => {
                    this.validationErrors = err.ValidationErrors;
                    if (err.Message != "Validation Failed") {
                        this.notificationService.showError(err.Message);
                    }
                    this.closepopupSavingData();
                });
            }
        });
    }
};
LuuTruHoSoUpdatePopupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
LuuTruHoSoUpdatePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-luu-tru-ho-so-update-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./luu-tru-ho-so-update-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./luu-tru-ho-so-update-popup.component.scss */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LuuTruHoSoUpdatePopupComponent);



/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.model.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.model.ts ***!
  \************************************************************************************/
/*! exports provided: LuuTruHoSo, ThongLuuTruHoSo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuuTruHoSo", function() { return LuuTruHoSo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongLuuTruHoSo", function() { return ThongLuuTruHoSo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LuuTruHoSo {
    constructor(MaTN = null, SoBA = null, MaBN = null, HoTen = null, KhoaNhapVien = null, ChuaSapXep = true, DaSapXep = true, ThuTuSapXepLuuTru = null, SearchString = null, TuNgay = null, DenNgay = null, TuNgayText = null, DenNgaytext = null, KhoaPhongId = 0, CheckBHYT = true, CheckVienPhi = true) {
        this.MaTN = MaTN;
        this.SoBA = SoBA;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.KhoaNhapVien = KhoaNhapVien;
        this.ChuaSapXep = ChuaSapXep;
        this.DaSapXep = DaSapXep;
        this.ThuTuSapXepLuuTru = ThuTuSapXepLuuTru;
        this.SearchString = SearchString;
        this.TuNgay = TuNgay;
        this.DenNgay = DenNgay;
        this.TuNgayText = TuNgayText;
        this.DenNgaytext = DenNgaytext;
        this.KhoaPhongId = KhoaPhongId;
        this.CheckBHYT = CheckBHYT;
        this.CheckVienPhi = CheckVienPhi;
    }
}
class ThongLuuTruHoSo {
    constructor(MaTN = null, SoBA = null, MaBN = null, HoTen = null, Tuoi = null, GioiTinh = null, GioiTinhDisplay = null, DiaChi = null, NgheNghiep = null, SoBenhAn = null, LoaiBenhAn = null, KhoaNhapVien = null, DoiTuong = null, NhanVienThucHien = null, NgayThucHien = null, ThuTuSapXepLuuTru = null, TrangThaiSapXep = null, Khoa = null, SoLuuTru = null, 
    //BVHD-3800
    LaCapCuu = null) {
        this.MaTN = MaTN;
        this.SoBA = SoBA;
        this.MaBN = MaBN;
        this.HoTen = HoTen;
        this.Tuoi = Tuoi;
        this.GioiTinh = GioiTinh;
        this.GioiTinhDisplay = GioiTinhDisplay;
        this.DiaChi = DiaChi;
        this.NgheNghiep = NgheNghiep;
        this.SoBenhAn = SoBenhAn;
        this.LoaiBenhAn = LoaiBenhAn;
        this.KhoaNhapVien = KhoaNhapVien;
        this.DoiTuong = DoiTuong;
        this.NhanVienThucHien = NhanVienThucHien;
        this.NgayThucHien = NgayThucHien;
        this.ThuTuSapXepLuuTru = ThuTuSapXepLuuTru;
        this.TrangThaiSapXep = TrangThaiSapXep;
        this.Khoa = Khoa;
        this.SoLuuTru = SoLuuTru;
        this.LaCapCuu = LaCapCuu;
    }
}


/***/ }),

/***/ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LuuTruHoSoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuuTruHoSoModule", function() { return LuuTruHoSoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _luu_tru_ho_so_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./luu-tru-ho-so-routing.module */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-routing.module.ts");
/* harmony import */ var _luu_tru_ho_so_list_luu_tru_ho_so_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./luu-tru-ho-so-list/luu-tru-ho-so-list.component */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-list/luu-tru-ho-so-list.component.ts");
/* harmony import */ var _dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dieu-tri-noi-tru.module */ "./src/app/modules/main/dieu-tri-noi-tru/dieu-tri-noi-tru.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _luu_tru_ho_so_update_popup_luu_tru_ho_so_update_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component */ "./src/app/modules/main/dieu-tri-noi-tru/luu-tru-ho-so/luu-tru-ho-so-update-popup/luu-tru-ho-so-update-popup.component.ts");








let LuuTruHoSoModule = class LuuTruHoSoModule {
};
LuuTruHoSoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_luu_tru_ho_so_list_luu_tru_ho_so_list_component__WEBPACK_IMPORTED_MODULE_4__["LuuTruHoSoListComponent"], _luu_tru_ho_so_update_popup_luu_tru_ho_so_update_popup_component__WEBPACK_IMPORTED_MODULE_7__["LuuTruHoSoUpdatePopupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _luu_tru_ho_so_routing_module__WEBPACK_IMPORTED_MODULE_3__["LuuTruHoSoRoutingModule"],
            _dieu_tri_noi_tru_module__WEBPACK_IMPORTED_MODULE_5__["DieuTriNoiTruModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        ],
        entryComponents: [
            _luu_tru_ho_so_update_popup_luu_tru_ho_so_update_popup_component__WEBPACK_IMPORTED_MODULE_7__["LuuTruHoSoUpdatePopupComponent"]
        ]
    })
], LuuTruHoSoModule);



/***/ })

}]);
//# sourceMappingURL=dieu-tri-noi-tru-luu-tru-ho-so-luu-tru-ho-so-module-es2015.js.map